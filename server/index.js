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
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { renderPage } from "vite-plugin-ssr";

// For development with Vite
const isProduction = process.env.NODE_ENV === "production";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

startServer();

async function startServer() {
  const app = express();

  // Compression for better performance
  app.use(compression());

  // Serve static files
  if (isProduction) {
    app.use(
      express.static(path.resolve(root, "dist/client"), {
        maxAge: "1y",
      })
    );
  } else {
    // In dev mode, Vite handles static assets
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // SSR route handler
  app.get("*", async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl,
      };

      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;

      if (!httpResponse) {
        return next();
      }

      const { body, statusCode, contentType, earlyHints } = httpResponse;

      if (res.writeEarlyHints) {
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      }

      res.status(statusCode).type(contentType).send(body);
    } catch (error) {
      next(error);
    }
  });

  // Error handling
  app.use((err, req, res) => {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again later.");
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
