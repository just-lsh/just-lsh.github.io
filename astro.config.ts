import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  // New icons must be added to this allow-list.
  integrations: [icon({ include: { mdi: ["briefcase", "source-repository", "react"] } })],
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
