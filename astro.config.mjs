import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://motorsportmusing.com",
  base: "/",
  build: {
    format: "file",
  },
  integrations: [pagefind()],
});
