import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://just-lsh.github.io",
  server: { allowedHosts: [".ts.net"] },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      weights: [400, 600],
      styles: ["normal"],
      subsets: ["latin"],
      cssVariable: "--font-geist-mono",
      fallbacks: ["ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
