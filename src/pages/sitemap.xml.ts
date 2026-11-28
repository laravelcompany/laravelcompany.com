import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getJobs } from '../utils/jobsCache';
import { generateJobSlug } from '../utils/jobSlug';
import { LOCATIONS } from '../data/locations';
import { SERVICE_MODIFIERS } from '../data/service-modifiers';
import { FAQ_QUESTIONS } from '../data/faq-questions';
import countriesCities from '../data/countries-cities.json';
import slugify from '../utils/slugify';

// Static routes are derived from the filesystem at build time, not a
// hand-maintained list: every top-level or one-level-deep .astro page becomes a
// sitemap entry unless it is the 404 page, carries `noindex`, or is a dynamic
// ([...]) route (those are enumerated from their data sources below).
const rawPages = import.meta.glob(['./*.astro', './*/*.astro'], {
    query: '?raw',
    import: 'default',
    eager: true,
});

const staticPages: string[] = Object.entries(rawPages)
    .filter(([path, source]) => {
        if (path.includes('[')) return false; // dynamic route, handled below
        if (typeof source === 'string' && /noindex/.test(source)) return false;
        return true;
    })
    .map(([path]) => {
        const route = path.replace(/^\.\//, '').replace(/\.astro$/, '');
        if (route === '404') return null;
        if (route === 'index') return '';
        return route.endsWith('/index') ? route.slice(0, -'/index'.length) + '/' : route + '/';
    })
    .filter((route): route is string => route !== null);

// Paginated [...page] routes are skipped by the glob filter above, so their
// page-1 index URLs are listed here explicitly.
const paginatedIndexPages = ['blog/', 'prompts/'];

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site ? site.toString() : 'https://laravelcompany.com';

    // 2a. Generate geo service pages
    const geoServicePages = LOCATIONS.map(loc => `services/laravel-development-company-in-${loc.slug}/`);

    // 2b. Generate service variant pages
    const variantServicePages = SERVICE_MODIFIERS.map(mod => `services/${mod.slug}-laravel-development-company/`);

    // 2c. FAQ pages (note: /faq/ itself has no index route, so it is excluded)
    // Only FAQ pages with real answers are indexable; empty-answer pages are noindex.
    const faqPages = FAQ_QUESTIONS.filter(q => q.answer && q.answer.trim().length > 0).map(q => `faq/${q.slug}/`);

    // 2d. Country/city matrix
    const countryCityPages = Object.entries(countriesCities).flatMap(([countryKey, cities]) => [
        `${countryKey.toLowerCase()}/`,
        ...cities.map(city => `${countryKey.toLowerCase()}/${slugify(city)}/`),
    ]);

    // 2. Fetch dynamic jobs
    let jobPages: string[] = [];
    try {
        const jobs = await getJobs('laravel');
        jobPages = jobs.map(job => `jobs/${generateJobSlug(job.title, job.id, job.url || job.job_url)}/`);
    } catch (error) {
        console.error('Error fetching jobs for sitemap:', error);
    }

    // 3. Fetch dynamic products
    let productPages: string[] = [];
    try {
        const apiUrl = import.meta.env.PUBLIC_API_URL || "https://app.laravelmail.com/api";
        const response = await fetch(`${apiUrl}/v1/products?per_page=100&page=1`, {
            headers: {
                "User-Agent": "Astro-Sitemap/1.0",
                Accept: "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                productPages = data.data.map((product: any) => {
                    const slug = product.title
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, "")
                        .replace(/\s+/g, "-")
                        .replace(/-+/g, "-")
                        .trim();
                    return `shop/${slug}/`;
                });
            }
        }
    } catch (error) {
        console.error('Error fetching products for sitemap:', error);
    }

    // 3c. eBay book listings
    let bookPages: string[] = [];
    try {
        const { books, shelves, itemSlug } = await import('../utils/ebayBooks');
        bookPages = [
            ...shelves().map(s => `books/${s.slug}/`),
            ...books.map(b => `books/${b.category}/${itemSlug(b.item_id)}/`),
        ];
    } catch (error) {
        console.error('Error building book URLs for sitemap:', error);
    }

    // 4. Fetch blog posts
    let blogPages: string[] = [];
    try {
        const blogPosts = await getCollection('blog');
        blogPages = blogPosts.map(post => `blog/${post.id}/`);
    } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error);
    }

    // 5. Fetch documentation pages
    let docsPages: string[] = [];
    try {
        const docsEntries = await getCollection('docs');
        docsPages = docsEntries
            .filter(doc => doc.id.replace(/\.md$/, '') !== 'readme')
            .map(doc => `docs/${doc.id.replace(/\.md$/, '')}/`);
    } catch (error) {
        console.error('Error fetching docs for sitemap:', error);
    }

    // 6. Fetch prompt library pages
    let promptPages: string[] = [];
    try {
        const promptEntries = await getCollection('prompts');
        promptPages = promptEntries.map(prompt => `prompts/${prompt.id}/`);
    } catch (error) {
        console.error('Error fetching prompts for sitemap:', error);
    }

    // 7. Fetch funny-docs pages
    let funnyDocsPages: string[] = [];
    try {
        const funnyDocsEntries = await getCollection('funny-docs');
        funnyDocsPages = funnyDocsEntries.map(doc => `funny-docs/${doc.id.replace(/\.md$/, '')}/`);
    } catch (error) {
        console.error('Error fetching funny-docs for sitemap:', error);
    }

    const allPages = [...new Set([...staticPages, ...paginatedIndexPages, ...geoServicePages, ...variantServicePages, ...faqPages, ...countryCityPages, ...jobPages, ...productPages, ...bookPages, ...blogPages, ...docsPages, ...promptPages, ...funnyDocsPages])];
    // Build time is not a content modification date. Omit lastmod until a
    // reliable per-page source is available. XML locations must be escaped.
    const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
            .map((page) => {
                const url = new URL(page, baseUrl).toString();
                const isGeo = geoServicePages.includes(page);
                const isVariant = variantServicePages.includes(page);
                let priority = '0.7';
                let changefreq = 'weekly';
                if (page === '') { priority = '1.0'; changefreq = 'daily'; }
                else if (isGeo) { priority = '0.8'; changefreq = 'weekly'; }
                else if (isVariant) { priority = '0.6'; changefreq = 'monthly'; }
                return `
  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
};
