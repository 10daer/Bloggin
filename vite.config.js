import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [
    react(),
    tailwindcss(),
    ssr({
      prerender: {
        routes: ["/", "/about"],
      },
    }),
  ],
  build: {
    manifest: true,
    outDir: "dist",
    rollupOptions: {
      output: {
        // This ensures the manifest file is placed directly in client directory
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "[name].[hash].js",
        entryFileNames: "[name].[hash].js",
        manualChunks: undefined,
      },
    },
    // Don't explicitly set the output directory - let vite-plugin-ssr handle it
  },
};
