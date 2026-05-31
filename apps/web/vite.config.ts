import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During development, /api/* is proxied to the FastAPI backend so the SPA and the
// API share an origin (no CORS juggling during the demo). In production, set
// VITE_API_BASE to the deployed API origin instead.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
