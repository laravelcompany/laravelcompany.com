import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://laravelcompany.com',
  output: 'static',
  prefetch: true,
  integrations: [
    tailwind(),
    icon(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
