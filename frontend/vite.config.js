import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://Ecom-backend:5000",
      "/uploads/": "http://Ecom-backend:5000",
    },
  },
});
