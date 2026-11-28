# LaravelCompany.com — Final SEO Report (Phase 10)

Date: 2026-11-28
Scope: full-site SEO audit, gap analysis and implementation per the 2026-11-28 brief.
Sister documents: initial-audit.md (PR #63), keyword-mapping.md (PR #64),
technical-seo-report.md (PR #69), content-gap-analysis.md (PR #70),
redirect-mapping.md (PR #74), content-authority-plan.md (PR #75),
implementation-log.md (PR #69 branch, updated through the day).

Status convention: **Completed** = implemented and verified live. **PR open** =
implemented, tested, awaiting Stefan's merge. **Existing** = already present and
retained. **Partially complete** = needs further work. **Blocked** = needs
credentials, external access or approval. **Not recommended** = unnecessary or
unsupported by evidence.

## 1. What was already implemented before this task (Existing)

- Absolute self-referencing canonicals sitewide; trailing-slash normalisation.
- Organization JSON-LD with real address/phone; Service/FAQPage/JobPosting schema.
- 799-line legacy `_redirects` map (Magento era), audited: no chains or loops.
- Blog already consolidated on laravelcompany.com/blog (blog subdomain has no DNS).
- /esop/ employee-ownership page; 6 product pages; 9,620 blog posts; 3,452 prompts.
- 26 geo service pages + 40-country/131-city matrix with unique per-city content.

## 2. Technical issues fixed (Completed, verified live 2026-11-28)

| Fix | PR | Verification |
|---|---|---|
| Sitemap coverage (F1): auto-derived routes, all dynamic trees enumerated | #65 merged | /sitemap.xml 200, 14,196 URLs (was 10,432); blog/prompts/geo/FAQ trees present |
| FAQ orphaned (F3): /faq/ index + footer link; empty-answer pages noindexed + sitemap-excluded | #67 merged | /faq/ 200, renders index page |
| F2 duplicate consolidated: /laravel-web-development-services/ 301 -> /laravel-development-services/ | #72 merged | Single-hop 301 live; old file deleted (required for Pages _redirects to fire); sitemap dropped the URL |

Supporting tests added: sitemapCommercialCoverage, servicesConsolidation301 (redirect
rules, page deletion, no internal links to retired URL). One pre-existing test bug
fixed (sitemap token assertion left red at the #65 merge).

## 3. Implemented, awaiting merge (PR open)

| Change | PR | Note |
|---|---|---|
| Default meta description for agency positioning + llms.txt refresh (F9/F5) | #66 | Removes stale blog-subdomain link and unevidenced superlative |
| LCP fix: hero H1s no longer hidden behind scroll-reveal animation | #71 | LCP measured 8.9s on / and 3.2-3.6s on commercial pages vs 2.5s threshold; 55 H1s patched, guard test added |
| Phase 6 internal linking for orphaned pages (migration/maintenance/healthcare) | #73 | Plus mislabeled "Migration Services" anchor fix on the upgrade page |
| Remove fabricated "Local Expert" personas from ~171 geo pages | #76 | 40 invented names, Person schema + fake Article author; flagged for urgent review |
| Broken /install link -> #features | #68 | Small link fix |

## 4. Analysis deliverables (PR open)

- initial-audit.md #63 — route inventory, F1-F9 findings, live verifications.
- keyword-mapping.md #64 — keyword-to-URL map, intent splits, validation column
  (Ahrefs free data 26 Nov; historical figures marked unvalidated).
- technical-seo-report.md + implementation-log.md #69.
- content-gap-analysis.md #70 — 10 priority pages: 3 adequate, 4 thin, 3 missing
  (+ UK company page missing); internal-link orphan counts; claims evidence list.
- redirect-mapping.md #74 — consolidation 301s, no-redirect decisions, hygiene rules.
- content-authority-plan.md #75 — Phase 5 audit and proposals.

## 5. What was missing (gaps confirmed)

- /laravel-ai-integration/, /laravel-filament-development/, /laravel-code-audit/ —
  404 confirmed 2026-11-28. Creation planned (#70, #75); AI page has the strongest
  real evidence (Laravel GPT multi-agent + RAG, Laravel Social AI generation).
- /laravel-development-company-uk/ — follows existing -europe/-usa pattern.
- Free tools: only ProjectCalculator (embedded) + one resource page exist.

## 6. Deliberately left unchanged (Not recommended / decided)

- www.laravelcompany.com DNS + 301: Stefan decided against 2026-11-28. Permanently dropped.
- /laravel-agency/ page: would cannibalise the homepage (keyword-mapping §1).
- Education/LMS industry page: no demonstrable experience recorded; brief forbids inventing.
- Filament starter kits/packages: deferred (brief: only if genuinely maintainable).
- New location pages: existing matrix already covers target cities; thin-but-unique
  (~32-61 unique words per city) — enrich existing rather than add.

## 7. Blocked (needs Stefan or external access)

- Google Search Console / GA4 / Keyword Planner: 2-Step Verification blocks access;
  Stefan decided 2026-11-26 to skip. No indexed-count, impression or field-CWV data.
  Lab-proxy CWV used instead (documented in #71).
- ESOP expansion (5.1): needs verified company facts (history, ownership %,
  participation). Current page covers ~1 of the 7 story points.
- Claims evidence review (#70 §5): live claims "500+ projects", "$35/hour", "48h
  deployment", "15-day trial", "50+ experts", "3-10x speed improvements", "$2,500+"
  need evidence on file or rewording. Pricing changes need commercial approval.
- FAQ answers: 27 empty-answer pages await the 106-question corpus (private maicoach
  repo) or fresh answers; they stay noindexed + sitemap-excluded until then.

## 8. Partially complete

- Commercial page depth: consulting 517, performance 421, upgrade 473, hire 799,
  dev-services 800 rendered words vs the 900-1,600 guidance (#70). Expansion drafts
  are the next implementation batch after the PR queue clears.
- Healthcare page: adequate depth; HIPAA/FHIR wording needs evidence review.
- Internal linking: orphan fixes PR'd (#73); blog->commercial contextual links at
  scale remain (9,620 posts; needs a systematic pass).

## 9. Tests and QA evidence

- Node test suite: 107 tests; 106 pass on the final-report branch. The single
  failure (tests/prompts-search.test.mjs) is pre-existing on fresh clones: it needs
  the generated, gitignored public/prompts-search.json. Not caused by this work.
- Repo CI build+deploy checks passed on every merged commit (06:31, 07:02).
- Live verification (browser, 2026-11-28): sitemap 14,196 URLs; /faq/ 200; services
  301 single hop; rendered word counts for the 10 priority pages; LCP/FCP/CLS/CLS
  lab-proxy measurements on 5 page types.
- Every code PR carries a guard test (sitemap coverage, 301 rules, H1 LCP, internal
  link baseline, no fabricated experts).

## 10. Outstanding issues and recommended next steps

1. Stefan reviews/merges the 11 open PRs, #76 first (fabricated personas are live).
2. Claims evidence review (#70 §5) before expanding thin pages.
3. Create /laravel-ai-integration/ (evidence-backed), then /laravel-code-audit/ and
   /laravel-filament-development/, per #70 ordering.
4. Expand the 5 thin commercial pages to brief depth with verified evidence only.
5. ESOP facts from Stefan -> /esop/ expansion (#75 §5.1).
6. FAQ answers from the maicoach corpus -> un-noindex + re-include in sitemap
   (automatic via #65/#67 logic once answers exist).
7. Upgrade Readiness Checker scoping (#75 §5.4) with Stefan's go-ahead.
8. Monthly cadence: this task runs on the 1st of each month for all Laravel* sites
   (Stefan, 2026-11-26).
