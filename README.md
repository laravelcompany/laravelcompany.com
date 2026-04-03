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
