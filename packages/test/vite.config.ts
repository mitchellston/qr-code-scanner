import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((config) => ({
  plugins: [react()],
  base: config.mode == "development" ? "" : "/qr-code-scanner",
}));
