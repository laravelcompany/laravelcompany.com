# LaravelCompany.com — Initial SEO Audit (Phase 1)

Date: 2026-11-28
Author: Instinct (SEO lane) for Stefan
Method: full repository inspection (`main` @ ad609b8) + live-site checks via real browser (2026-11-28 ~06:03 UTC). Keyword evidence: `research/laravelcompany-seo/` (research repo, 2026-11-26 refresh).
Rule applied throughout: audit first, evidence only, no fabricated traffic/ranking/volume figures.

---

## 1. Site and repository profile

- **Stack:** Astro (static output), Tailwind, React islands, astro-icon, sharp image service. `astro.config.mjs` sets `site: https://laravelcompany.com`.
- **Hosting/deploy:** Cloudflare Pages, git-connected — **every push to `main` auto-builds and deploys (~6 min)**. All SEO work must go through branches + PRs; nothing direct to main.
- **Build scale:** ~26k pre-rendered pages (countries/cities matrix, programmatic blog, prompts, books). Full local build is infeasible in the sandbox; CI is the real test.

### Route inventory (repository)

| Tree | Count | Source |
|---|---:|---|
| Static `.astro` pages | 71 | `src/pages/*.astro` |
| Blog posts | 9,620 | `src/content/blog/` (~70 MB, programmatic Q&A) |
| Prompts | 3,452 | `src/content/prompts/` |
| Docs | 103 | `src/content/docs/` |
| Funny-docs | 103 | `src/content/funny-docs/` |
| FAQ | 28 | `src/data/faq-questions.ts` via `faq/[slug].astro` |
| Jobs | ~106 | jobs.izdrail.com API at build |
| Geo service pages | 26 | `src/data/locations.ts` → `services/laravel-development-company-in-<loc>/` |
| Service variant pages | 25 | `src/data/service-modifiers.ts` |
| Country/city matrix | 40 countries / 131 cities | `[country]/`, `[country]/[city]` |
| Books | eBay affiliate feed | `src/pages/books/` |
| Shop products | API-fed | `src/pages/shop/[slug].astro` |

Commercial pages that **already exist** (no recreation needed): laravel-development-company, -agency, -services, web-development-services, application-development-company, consulting, maintenance-support, security-audit, performance-optimization, migration-services, upgrade-laravel-version, saas-development, api-development, livewire-development, healthcare-software, fintech-development, ecommerce-development, logistics-platform, mvp-development, crm-development, development-cost, hire-laravel-developer, hire-dedicated-laravel-developers, hire-laravel-developer-remote, developers-romania, nearshore, outsource, esop, team, partners, locations, network, products, software/* (6 product pages), plus geo + modifier matrices.

**Missing vs the brief's Phase 2/4/5 priorities:** Filament development page; Laravel AI integration page (only `ai-digital-transformation` exists); Laravel development company UK page (europe/usa exist, UK does not); OpenAI/RAG/vector/MCP content cluster; interactive free tools (upgrade checker, cost calculator as a tool — `laravel-development-cost` is a content page; a `ProjectCalculator` component exists inside country pages); no `/tools/` section.

---

## 2. Implementation inventory (brief section 1.2)

| Area | Existing implementation | Quality | Required action |
|---|---|---|---|
| Homepage SEO | Title "Laravel Development Company & Agency \| LaravelCompany", H1 present, canonical/OG/Twitter/Org JSON-LD via `Layout.astro` | Solid head; default meta description is product-focused ("develops open-source Laravel tools…") — wrong for agency positioning on pages that don't override it | Improve default description |
| Commercial service pages | All exist (list above), mix of hand-built pages and `KeywordLandingPage` data-driven pages (`src/data/seo-landing-pages.ts`, 8 entries) | Present, but most are missing from sitemap.xml (F1); two duplicates (F2) | Improve + fix sitemap; consolidate duplicates |
| Hire Laravel developers | 3 pages (hire-laravel-developer, hire-dedicated-laravel-developers, hire-laravel-developer-remote) | Exist; overlapping intent between the three | Improve; de-conflict targeting in Phase 2 mapping |
| AI integration | `ai-digital-transformation.astro` only | Thin vs Phase 5.2 ambitions (no OpenAI/RAG/vector/MCP content) | Create (justified, real product experience: Laravel GPT, Laravel Social) |
| Filament development | None | Missing | Create (Phase 4 priority 8) |
| Healthcare | `laravel-healthcare-software.astro` (HIPAA/FHIR/telehealth copy) | Exists; claims need evidence review | Keep/improve; verify claims |
| Blog consolidation | **Already consolidated** — `blog.laravelcompany.com` has no DNS record; only `laravelcompany.com/blog` exists | Done | Keep; remove dead subdomain link from llms.txt (F5) |
| Technical SEO | Canonicals absolute + self-referencing, trailing-slash normalisation works (verified live), 799-line `_redirects` legacy map, robots.txt fine | Good foundations; sitemap coverage is the big hole (F1); www host has no DNS (F4) | Fix sitemap; decide www (approval needed) |
| Structured data | Organization JSON-LD sitewide (real address/phone), LocalBusiness + Service schema components, FAQPage on FAQ pages, JobPosting on jobs (fixed 2026-10-22) | Good base; no BreadcrumbList; Article schema on blog unverified | Improve (breadcrumbs, Article) |
| llms.txt | Exists (`public/llms.txt`, prompt-style) | Stale: dated 2025-11-22, links dead blog.laravelcompany.com, "UK's leading" superlative, no llms-full.txt | Improve/refresh |
| Free tools | None as interactive tools; `ProjectCalculator` component embedded in geo pages; `/resources/ai-powered-devops` | Mostly missing vs Phase 5.4 | Build (upgrade checker first, if justified) |
| Employee ownership | `/esop/` page live ("Our Ownership Model") | Exists — depth to assess in Phase 5.1 | Keep/improve |
| Partner directory | `/partners/` (certifications listing) | Exists; not a developer directory | Improve |
| Location pages | `/locations/` + 26 geo service pages + 40-country/131-city matrix | Extensive — doorway-page risk on the matrix; unique content per city needs sampling | Audit quality, keep/improve |

---

## 3. Baseline (Phase 1.3)

**Verified live (browser, 2026-11-28):**
- `/` 200, title "Laravel Development Company & Agency | LaravelCompany", canonical `https://laravelcompany.com/`.
- Trailing-slash normalisation: `/laravel-development-services` redirects to `/laravel-development-services/`; canonical self-referencing on both.
- `http://laravelcompany.com/` → HTTPS apex OK. **`www.laravelcompany.com` has no DNS record** (browser: host not found).
- `/faq/` → **404 page** (no index route). `/laravel-agency/` → 404 (no such page).
- `/prompts/`, `/blog/`, `/esop/`, geo service pages all render correctly.
- `blog.laravelcompany.com` does not resolve (consolidation already happened).

**Verified in repo:**
- Canonical generation: `new URL(Astro.url.pathname, Astro.site)` in `Layout.astro` — absolute, self-referencing, every page using Layout.
- GSC meta verification tag present (`google-site-verification`) — a verified GSC property exists, but see Limitations.
- Analytics stack per page: GTM + GA4 + Hotjar + Swetrix + AdSense (5 third-party scripts).
- `_redirects`: 799 lines of legacy 301s (Magento tutorial URLs etc.).
- Sitemaps: `sitemap.xml` (static + geo + variants + jobs + shop + books + blog + docs), `news-sitemap.xml` (blog, last 48 h), RSS.

**Not available (unverified, not fabricated):** indexed-URL counts, GSC coverage/impressions, GA4 traffic/conversions, field Core Web Vitals, current rankings. Google access is blocked by 2-Step Verification and Stefan decided (2026-11-26) to skip it. Ahrefs free-tier keyword/competitor data from 2026-11-26 stands as the external evidence base.

---

## 4. Findings (evidence-backed, priority order)

- **F1 — Sitemap coverage gap (critical).** 37 indexable static routes are missing from `sitemap.xml`'s `staticPages` — including almost every money page: laravel-development-company, laravel-development-services, laravel-web-development-services, laravel-performance-optimization, laravel-security-audit, laravel-healthcare-software, laravel-fintech-development, laravel-ecommerce-development, laravel-mvp-development, laravel-crm-development, laravel-logistics-platform, upgrade-laravel-version, migrate-wordpress-to-laravel, outsource-laravel-development, nearshore-laravel-development, laravel-developers-romania, laravel-development-company-europe, laravel-development-cost, laravel-services, esop, team, partners, network, locations, open-source, products, startup-laravel-agency, hire-laravel-developer, hire-laravel-developer-remote, ai-digital-transformation, build-booking-platform-laravel, build-marketplace-laravel, collaborative-money-management, laravel-company-profile, laravel-mvp-development. Entire dynamic trees also absent: `/faq/*` (28), `/prompts/*` (3,452), `/[country]/[city]` (~171), `/resources/*`. The two `noindex` comparison pages and 404 are correctly excluded. Fix: generate the static list from the route table instead of a hand-maintained array.
- **F2 — Duplicate commercial pages (cannibalisation).** `/laravel-development-services/` and `/laravel-web-development-services/` both render H1 "Laravel Development Services" with near-identical titles/descriptions, each self-canonical (verified live). Overlapping cluster: laravel-development-company vs laravel-application-development-company vs laravel-services vs /services/. Hire cluster: 3 overlapping pages. Resolution = keyword mapping (Phase 2) then consolidate/differentiate — not blanket redirects.
- **F3 — FAQ section orphaned.** 28 FAQ pages (with FAQPage schema) are linked from nowhere in `src` (no header, footer, or content links), have no `/faq/` index (404s live), and are absent from the sitemap. Either build an index + link it, or retire the section with redirects. Currently invisible to crawlers and users.
- **F4 — www host missing.** `www.laravelcompany.com` has no DNS record; users/links typing www hit nothing. Fix is a DNS + redirect change → **requires Stefan's approval** (execution rules).
- **F5 — llms.txt stale.** Dated 2025-11-22; references dead `blog.laravelcompany.com`; carries "UK's leading Laravel development agency" (unevidenced superlative); persona-prompt format rather than the emerging llms.txt convention; no llms-full.txt. Refresh, don't replace.
- **F6 — Heavy third-party script stack.** GTM, GA4, Hotjar, Swetrix and AdSense load on every page. INP/LCP risk needs measurement (lab CWV test is a Phase 3.6 step; field data unavailable without GSC).
- **F7 — Thin programmatic content at scale.** 9,620 blog Q&A posts + 3,452 prompt pages + 103 funny-docs. Indexation-quality risk (Google "substantial unique value" concern already seen on phpteacher.com's AdSense rejection; ~5,995 cross-site duplicates were previously removed there). Needs GSC coverage data to quantify — blocked (see Limitations). No action recommended yet.
- **F8 — "laravel agency" has no dedicated page** (`/laravel-agency/` 404s). Historical volume 165/mo (pre-Nov, unverified tool) and Ahrefs GB KD 0 / US KD 0 (2026-11-26). Homepage title already targets "…& Agency". Decide target in keyword mapping; likely keep homepage, no new page.
- **F9 — Product-positioned default meta description.** `Layout.astro` default description describes open-source products, not the agency; any page not passing `description` inherits it.

---

## 5. Limitations (documented per brief)

1. **No Google Search Console / GA4 access** — Google sign-in hits 2-Step Verification; Stefan decided 2026-11-26 to skip. No traffic, ranking, coverage, conversion or field-CWV figures are quoted anywhere in this audit.
2. **Keyword volumes** are Ahrefs free-tier bands + KD only (2026-11-26 refresh); historical exact volumes in earlier research are unvalidated.
3. **Full build not run locally** (26k pages); render checks were done on the live site instead.
4. Competitor data limited to Ahrefs free backlink checker (DR/backlinks/linking domains for 5 competitors, 2026-11-26).

## 6. Next steps

1. Phase 2 keyword mapping (`docs/seo/keyword-mapping.md`) — assign primaries, resolve F2/F8.
2. Phase 3 fixes in priority order: F1 sitemap generation (safe, high value), F3 FAQ index/links decision, F5 llms.txt refresh, F9 default description, then F4 www (needs approval), F6 measurement.
3. Phase 4 page-by-page commercial audit for the 10 priority pages (all exist; improvement not creation, except Filament + AI integration).
