import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://rizaaal.github.io",
  base: "/astro_blog/",
  build: {
    format: "file",
  },
  integrations: [pagefind()],
});
