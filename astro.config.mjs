import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from "astro-icon";
import remarkDocLinks from './src/utils/remarkDocLinks.mjs';
import remarkStripPageToc from './src/utils/remarkStripPageToc.mjs';
import remarkDocsAlerts from './src/utils/remarkDocsAlerts.mjs';
import remarkDemoteH1 from './src/utils/remarkDemoteH1.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://laravelcompany.com',
  output: 'static',
  prefetch: true,
  markdown: { remarkPlugins: [remarkDocLinks, remarkStripPageToc, remarkDocsAlerts, remarkDemoteH1] },
  build: {
    concurrency: 4,
  },
  integrations: [
    tailwind(),
    react(),
    icon(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
