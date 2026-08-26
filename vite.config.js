import { defineConfig } from 'vite'

export default defineConfig({
  // The GitHub Pages copy lives under a subpath. The Cloudflare Worker
  // serves the field at the root of its own domain, so `npm run build:cf`
  // passes `--base=/` and overrides this.
  base: '/dp-aiweb/corn-field/',
})
