// This file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vite-plugin-ssr.com/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vite-plugin-ssr.com/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + vite-pugin-ssr examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.github.io/) to scaffold a vite-plugin-ssr + HatTip app. Note that Bati generates apps that use the V1 design (https://vite-plugin-ssr.com/migration/v1-design) and Vike packages (https://vite-plugin-ssr.com/vike-packages)

// server.js - Unified Express Server with vite-plugin-ssr and ProductMatcher logic

import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import { renderPage } from "vite-plugin-ssr";
import { root } from "./root.js";
dotenv.config();

import { ProductMatcher } from "./ProductMatcher.js";
import StorisConnection from "./config/database.js";
import StorisProductService from "./services/StorisProductService.js";

const isProduction = process.env.NODE_ENV === "production";
const app = express();
const port = process.env.PORT || 3000;

// Initialize services
const storisConnection = new StorisConnection();
const productService = new StorisProductService(storisConnection);
const productMatcher = new ProductMatcher();

// Middleware
app.use(compression());
app.use(express.json());

// Static files or Vite Dev Middleware
(async () => {
  if (isProduction) {
    const sirv = (await import("sirv")).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // Sync products from STORIS
  async function syncProducts() {
    try {
      await storisConnection.connect();
      const products = await productService.fetchProducts();
      productMatcher.products = [];
      products.forEach((product) => productMatcher.addProduct(product));
      console.log(`Synced ${products.length} products from STORIS`);
    } catch (error) {
      console.error("Sync error:", error);
    }
  }

  // API Routes
  app.get("/api/products", async (req, res) => {
    try {
      const products = await productService.fetchProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/matches/:productId", (req, res) => {
    const product = productMatcher.products.find(
      (p) => p.id === req.params.productId
    );
    if (!product) return res.status(404).json({ error: "Product not found" });

    const matches = productMatcher.findCompatibleProducts(product);
    res.json(matches);
  });

  // Product sync every hour
  setInterval(syncProducts, 3600000);
  await syncProducts();

  // vite-plugin-ssr catch-all route
  app.get("*", async (req, res, next) => {
    const pageContextInit = { urlOriginal: req.originalUrl };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();

    const { body, statusCode, headers, earlyHints } = httpResponse;
    if (res.writeEarlyHints)
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
    if (headers) headers.forEach(([name, value]) => res.setHeader(name, value));

    res.status(statusCode).send(body);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();
