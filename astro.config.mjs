// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tmmpsych.vercel.app",
  integrations: [tailwind(), sitemap()],
  redirects: {
    "/news/2025-10-14-founding-discussion": "/news/2025-11-14-founding-discussion",
  },
});
