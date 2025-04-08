import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [
    react(),
    tailwindcss(),
    ssr({
      prerender: {
        // Pre-render home page and about page at build time
        routes: ["/", "/about"],
      },
    }),
  ],
  build: {
    manifest: true,
    // Generate source maps for better debugging
    sourcemap: true,
    // Customize output directory
    outDir: "dist",
    // Optimize dependencies during build
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
};
