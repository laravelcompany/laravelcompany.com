# Laravel Company

The official website for [Laravel Company](https://laravelcompany.com), built with a modern tech stack focused on performance, SEO, and developer experience.

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via `astro-icon`
- **Fonts**: [Inter Variable](https://fontsource.org/fonts/inter)
- **Deployment**: Static Site Generation (SSG)

## ✨ Key Features

- **Product Showcases**: Dedicated landing pages for [Laravel SEO](https://laravelseo.com), [Laravel Mail](https://laravelmail.com), [Laravel GPT](https://laravelgpt.com), and [Laravel Social](https://laravelsocial.com).
- **Integrated Shop**: A dynamic shop section fetching products from the Laravel Company API with built-in caching and optimization.
- **Dark Mode**: Fully converted and optimized dark theme for better accessibility and modern look.
- **Performance Optimized**: 
  - Image optimization via Sharp
  - 100/100 Lighthouse scores for SEO and Accessibility
  - Automatic sitemap generation
  - Zero-JS by default where possible

## 🛠️ Development

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Command Palette

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds your static site to `dist/` |
| `npm run preview` | Previews your build locally |
| `npm run astro ...` | Run any Astro CLI command |

## 📁 Project Structure

```text
/
├── public/          # Static assets (favicons, etc.)
├── src/
│   ├── assets/      # Images and SVG icons used in components
│   ├── components/  # Reusable UI components (Footer, Header, Hero, etc.)
│   ├── layouts/     # Base layouts (Layout.astro)
│   ├── pages/       # Route components (Home, Software, Shop, Contact)
│   └── styles/      # Global CSS and Tailwind directives
├── astro.config.mjs # Astro configuration & integrations
└── tailwind.config.mjs
```

## 📄 License

&copy; 2026 Laravel Company. All rights reserved.

## Booking country eligibility

The contact page resolves booking eligibility through the /api/booking-eligibility Cloudflare Pages Function. Country detection uses Cloudflare trusted request country metadata, so no visitor IP is stored, logged, sent to the browser, or passed to an external geolocation service. Query parameters and visitor-supplied headers are ignored.

Restricted ISO country codes are configured with the Cloudflare Pages environment variable BOOKING_RESTRICTED_COUNTRIES as a comma-separated list. Values are trimmed and normalised to uppercase. The default is IN,PK; set the binding in both preview and production environments before deployment if a different list is required.

The endpoint fails open: missing country metadata, invalid data, endpoint errors, non-success responses, and the browser 2.5-second timeout all preserve the normal Calendly experience. The response is privately cached for five minutes. Restricted visitors never receive the Calendly iframe or script and the Calendly CTA remains hidden; existing clients can still call or email directly.

Cloudflare request metadata is the existing hosting platform geolocation provider, so this implementation does not call ip-api.com and has no extra provider licence or API key. If the hosting platform changes, replace functions/_lib/cloudflareCountryProvider.js without changing the contact page or eligibility rules. The free ip-api.com endpoint must not be introduced for production use because it has no HTTPS support and is not licensed for commercial use.
