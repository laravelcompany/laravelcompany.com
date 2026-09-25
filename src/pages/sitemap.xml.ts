import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getJobs } from '../utils/jobsCache';
import { generateJobSlug } from '../utils/jobSlug';
import { LOCATIONS } from '../data/locations';
import { SERVICE_MODIFIERS } from '../data/service-modifiers';

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site ? site.toString() : 'https://laravelcompany.com';

    // 1. Define static pages
    const staticPages = [
        '',
        'about-us/',
        'contact/',
        'cookie-policy/',
        'privacy-policy/',
        'solutions/',
        'terms-of-use/',
        'software/',
        'software/laravel-mail/',
        'software/laravel-gpt/',
        'software/laravel-seo/',
        'software/laravel-ui/',
        'shop/',
        'jobs/',
        'blog/',
        'books/',
        'docs/',
        'guidelines/',
        'laravel-application-development-company/',
        'software-development-agency-london/',
        'hire-aws-consultant/',
        'magento-agency-london/',
        'laravel-consulting/',
        'database-development-services/',
        'compliance/',
        'nis2-essential-entity-provider/',
        'cra-compliant-software-vendor/',
        'eu-sovereign-cloud-provider/',
        'gdpr-europrise-certified/',
        'laravel-company-website-github/',
        'laravel-company-headquarters-phone-number-usa/',
        'hire-dedicated-laravel-developers/',
        'laravel-maintenance-support/',
        'laravel-migration-services/',
        'laravel-api-integration-services/',
        'laravel-development-company-usa/',
        'laravel-livewire-development/',
        'laravel-aws-deployment-services/',
        'laravel-custom-module-development/',
    ];

    // 2a. Generate geo service pages
    const geoServicePages = LOCATIONS.map(loc => `services/laravel-development-company-in-${loc.slug}/`);

    // 2b. Generate service variant pages
    const variantServicePages = SERVICE_MODIFIERS.map(mod => `services/${mod.slug}-laravel-development-company/`);

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

    // 3c. Fetch curated books
    let bookPages: string[] = [];
    try {
        const { getBooks } = await import('../utils/booksCache');
        const books = await getBooks();
        bookPages = books.map(book => `books/${book.slug}/`);
        const totalPages = Math.ceil(books.length / 12);
        for (let n = 2; n <= totalPages; n++) bookPages.push(`books/page/${n}/`);
    } catch (error) {
        console.error('Error fetching books for sitemap:', error);
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

    const allPages = [...staticPages, ...geoServicePages, ...variantServicePages, ...jobPages, ...productPages, ...bookPages, ...blogPages, ...docsPages];

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
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
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
