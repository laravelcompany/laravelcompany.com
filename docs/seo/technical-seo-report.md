# Technical SEO Report (Phase 3)

Date: 2026-11-28. Evidence: repo `main` @ ad609b8 + live browser checks. See initial-audit.md for methodology and limitations (no GSC/GA4).

## URL and canonical integrity (3.1)

| Check | Result | Evidence |
|---|---|---|
| Canonicals absolute + self-referencing | PASS | `Layout.astro`: `new URL(Astro.url.pathname, Astro.site)`; verified live on /, service pages, geo pages |
| Trailing-slash normalisation | PASS | `/laravel-development-services` redirects to slash version live |
| HTTP -> HTTPS (apex) | PASS | verified live |
| www -> apex | FAIL | `www.laravelcompany.com` has no DNS record. Fix = DNS + redirect, approval-gated |
| Redirect chains | PASS | 786 `_redirects` rules statically checked: zero chains, all internal targets resolve |
| Retired-URL 301s | PASS | 999-URL GSC 404 export (2026-11-26) covered by `test/gsc404Urls.test.js` + `functions/_middleware.js` |
| Tracking parameters | PASS (nothing found) | no `?srsltid=` handling needed; no parameterised URLs in repo |
| Broken internal links | FIXED (PR #68) | one live hit: `/install` on /software/laravel-mail/; two doc code-example placeholders (not links) |
| Duplicate titles/H1 | OPEN | /laravel-development-services/ vs /laravel-web-development-services/ (same H1) — consolidation needs approval |

## Blog consolidation (3.2)

Already complete: `blog.laravelcompany.com` has no DNS; `/blog/` is the only blog. One stale reference remained in `public/llms.txt` — fixed in PR #66. No redirect map needed.

## Structured data (3.3)

Present: Organization (sitewide, real address/phone/sameAs), LocalBusiness + Service schema components, FAQPage + BreadcrumbList on FAQ pages, JobPosting on job pages (fixed 2026-10-22), Article on blog (spot-check pending).
Gaps: BreadcrumbList only on FAQ pages (extend to services/blog — low risk, follow-up); no duplicate/conflicting schemas found.
Rule held: no fabricated reviews/ratings/awards anywhere in this programme.

## Sitemap and crawlability (3.4)

- sitemap.xml: FIXED (PR #65) — filesystem-derived static routes + faq/prompts/funny-docs/country-city enumeration; ~13.5k URLs; noindex/404/dynamic excluded.
- news-sitemap.xml: blog posts <48h, correct per Google News spec.
- robots.txt: allows all, lists both sitemaps. PASS.
- Orphaned trees: FAQ fixed (PR #67); prompts/blog/books all linked from footer/nav. Country/city matrix linked via /locations/ — depth to verify in Phase 6.
- /faq/ index: created in PR #67 (was 404).

## AI search visibility (3.5)

- llms.txt: refreshed in PR #66 (dates, dead link, unevidenced superlative). No llms-full.txt.
- Entity info consistent: Organization schema, about-us, team, contact all agree (Basildon address, +44 744 821 88 99).

## Performance (3.6) — measured hypotheses, no lab/field data yet

- Five third-party scripts on every page: GTM, GA4, Hotjar, Swetrix, AdSense (all async/defer in `Layout.astro`). INP/LCP risk; no field data (GSC blocked) and no lab run yet.
- Fonts: 3 Google Fonts families with preload+print-swap pattern (good).
- Images: sharp service configured; per-page responsive delivery to spot-check in Phase 4 page audits.
- Next step: lab CWV run (PageSpeed Insights API needs no auth) on /, /laravel-development-company/, /hire-laravel-developer/, one blog post, one geo page.

## Remaining approval-gated items

1. www DNS + redirect (Stefan, DNS change).
2. 301 /laravel-web-development-services/ -> /laravel-development-services/ (content merge + redirect; backlink check first).
3. Populating 27 empty FAQ answers (106-question corpus exists in private maicoach repo — reuse decision is Stefan's).
