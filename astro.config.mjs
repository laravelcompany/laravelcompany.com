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
    icon({
      include: {
        ph: [
          "airplane-tilt-duotone",
          "arrow-right",
          "arrows-clockwise-duotone",
          "bank-duotone",
          "blueprint-duotone",
          "briefcase-duotone",
          "buildings-duotone",
          "certificate-duotone",
          "chart-line-duotone",
          "chart-line-up-duotone",
          "check-circle-duotone",
          "check-circle-fill",
          "check-square-duotone",
          "clock-duotone",
          "cloud-check-duotone",
          "cloud-duotone",
          "code-duotone",
          "credit-card-duotone",
          "currency-circle-dollar-duotone",
          "currency-dollar-duotone",
          "database-duotone",
          "file-search",
          "gauge-duotone",
          "gear-duotone",
          "globe-duotone",
          "globe-hemisphere-west-duotone",
          "handshake-duotone",
          "layout-duotone",
          "lifebuoy-duotone",
          "lightbulb-duotone",
          "lightning-duotone",
          "magnifying-glass-duotone",
          "map-trifold-duotone",
          "package-duotone",
          "paint-brush-duotone",
          "palette-duotone",
          "robot-duotone",
          "rocket-duotone",
          "seal-check-duotone",
          "shield-check-duotone",
          "shield-warning-duotone",
          "shopping-cart-duotone",
          "star-duotone",
          "tree-structure-duotone",
          "trend-up-duotone",
          "truck-duotone",
          "users-duotone",
          "user-circle-duotone",
          "warning-octagon-duotone",
          "x-circle-duotone",
          "linkedin-logo-duotone",
          "twitter-logo-duotone",
          "github-logo-duotone",
          "arrow-left-duotone",
          "link-duotone",
          "calendar-duotone",
          "google-logo-duotone",
          "lock-key-duotone"
        ]
      }
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
