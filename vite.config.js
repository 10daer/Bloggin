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
};
