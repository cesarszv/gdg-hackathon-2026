import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cesarszv.github.io',
  base: '/gdg-hackathon-2026/',
  build: {
    assets: '_astro'
  }
});
