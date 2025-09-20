import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/baked-bread-miner/"  // 👈 IMPORTANT for GitHub Pages
});
