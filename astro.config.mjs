// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://tmm-network.org",
  integrations: [
    tailwind()
  ],
});
