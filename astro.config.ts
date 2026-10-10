import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://just-lsh.github.io",
  server: { allowedHosts: [".ts.net"] },
  vite: {
    plugins: [tailwindcss()],
  },
});
