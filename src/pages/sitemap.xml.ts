import type { APIRoute } from 'astro';
import { getJobs } from '../utils/jobsCache';

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site ? site.toString() : 'https://laravelcompany.com';

    // 1. Define static pages
    const staticPages = [
        '',
        'about-us/',
        'contact/',
        'cookie-policy/',
        'pricing/',
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
    ];

    // 2. Fetch dynamic jobs
    let jobPages: string[] = [];
    try {
        const jobs = await getJobs('laravel');
        jobPages = jobs.map(job => {
            const titleSlug = job.title
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .trim();
            return `jobs/${titleSlug}-${job.id}/`;
        });
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

    const allPages = [...staticPages, ...jobPages, ...productPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
            .map((page) => {
                const url = new URL(page, baseUrl).toString();
                return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.7'}</priority>
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
