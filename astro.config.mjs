import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'server',
  adapter: cloudflare(),
});