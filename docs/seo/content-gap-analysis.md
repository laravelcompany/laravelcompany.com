# LaravelCompany.com — Content Gap Analysis (Phase 4)

Date: 2026-11-28
Inputs: brief Phase 4 priority list; Phase 2 keyword mapping (`keyword-mapping.md`, PR #64);
rendered word counts measured live on 2026-11-28 (cloud browser, `document.body.innerText`,
words > 2 chars); source inspection of `src/pages/` and `src/data/seo-landing-pages.ts`.

The brief's content guidance is approximately 900–1,600 words "where the subject genuinely
warrants that depth", and explicitly says not to treat word count as a ranking requirement.
Counts below are one signal alongside intent, structure, evidence and conversion review.

## 1. Summary: the brief's 10 priority pages

| # | Brief priority | URL(s) | Rendered words (28 Nov) | Verdict |
|---|---|---|---|---|
| 1 | Hire Laravel Developers | /hire-laravel-developer/ | 799 | Thin. Rich trust/pricing copy but under depth guidance; well linked |
| 2 | Laravel Development Services | /laravel-development-services/ | 800 | Thin, and duplicated by /laravel-web-development-services/ (F2) |
| 3 | Laravel Consulting | /laravel-consulting/ | 517 | Thin |
| 4 | Laravel Support and Maintenance | /laravel-maintenance-support/ | 1,558 | Adequate depth; very weak internal linking (2 inbound files) |
| 5 | Laravel Code Audit | none (404) | — | **Missing page.** Adjacent /laravel-security-audit/ is 433 words and security-scoped, not code-quality scope |
| 6 | Laravel Performance Optimisation | /laravel-performance-optimization/ | 421 | Thin |
| 7 | Laravel AI Integration | none (404) | — | **Missing page.** Real product evidence exists (Laravel GPT, Laravel Social AI) |
| 8 | Filament Development | none (404) | — | **Missing page** |
| 9 | Laravel Upgrade and Migration | /upgrade-laravel-version/ (473) + /laravel-migration-services/ (1,526) | split | Upgrade page thin; migration page adequate. Cross-linking weak |
| 10 | Healthcare Software Development | /laravel-healthcare-software/ | 2,572 | Adequate depth; claims wording needs evidence review (§5) |

Calibration: /laravel-development-company/ (P1 head term) renders 1,891 words and is the
strongest commercial page. KeywordLandingPage data-driven pages render ~1,745 words.

Net: of the 10 priorities, 3 are adequate, 4 exist but are thin, and 3 are missing entirely
(code audit, AI integration, Filament). A 4th recommended page from keyword mapping,
/laravel-development-company-uk/, is also missing (404 confirmed 28 Nov).

## 2. Per-page assessment (existing thin pages)

### /hire-laravel-developer/ — 799 words
- Title: "Hire Laravel Developer | Dedicated Experts from $35/hour". Intent-aligned.
- Meta leads with price ($35/hour), "48h deployment, 15-day trial, 50+ available experts".
  These are strong conversion claims; each needs verifiable evidence on file (§5).
- 2 JSON-LD blocks; H1 present; 4 CTA/contact elements. Conversion scaffolding is good.
- 33 files link to it internally, the best-connected commercial page.
- Gap: no engagement-model detail beyond the hero claims, no delivery methodology, no
  genuine project examples. Expand with process, vetting steps, and evidence-backed outcomes.

### /laravel-development-services/ — 800 words
- Title: "Laravel Development Services | Custom Web Apps & API Development". Intent-aligned.
- Meta claims "500+ projects delivered" — evidence check required (§5).
- Duplicate pair (F2): /laravel-web-development-services/ shares the same H1 and a
  near-identical title. Consolidation 301 is queued awaiting approval (redirect plan, §6 of
  keyword-mapping.md). Until merged, both thin pages split signals.
- Gap: breadth list (web apps, APIs, SaaS, e-commerce, migration) with no depth on any;
  add engagement models, methodology, stack detail and case evidence.

### /laravel-consulting/ — 517 words
- Title: "Laravel Consulting Services | Expert Technical Audits & Strategy".
- Overlaps "technical audits" with the missing code-audit page and the security-audit page;
  once /laravel-code-audit/ exists, consulting should position as strategy/advisory and
  cross-link rather than absorb audit intent.
- Gap: thinnest of the existing priority pages. No named deliverables, no methodology,
  no examples. Needs the largest expansion.

### /laravel-performance-optimization/ — 421 words
- Title: "Laravel Performance Optimization Service | Fix Slow Laravel Apps".
- Meta claims "3-10x speed improvements" — measurable-outcome claim, needs evidence (§5).
- Gap: strong technical topic with real substance to draw on (caching, queues, indexing,
  OpCache, Octane) but the page barely covers them. Expand with approach, tooling,
  before/after evidence, and cross-links from performance-adjacent docs content.

### /upgrade-laravel-version/ — 473 words
- Title: "Upgrade Laravel Version Service | Legacy App Refactoring".
- Gap: LTS planning, breaking changes and dependency updates are named in the meta but not
  developed on-page. Cross-link to /laravel-migration-services/ (platform moves) so the
  upgrade/migration split is explicit.

### /laravel-maintenance-support/ — 1,558 words (KeywordLandingPage data)
- Depth adequate. Problem: only 2 files link to it internally. A commercial page this deep
  is nearly orphaned; add links from services pages, the hire cluster, and relevant blog posts.

### /laravel-migration-services/ — 1,526 words (KeywordLandingPage data)
- Depth adequate. Only 1 inbound internal link. Same orphaning problem; also the natural
  hub for the WordPress/CodeIgniter/Symfony migration candidates in keyword mapping §5.

### /laravel-healthcare-software/ — 2,572 words
- Depth adequate; 8 CTA elements; 4 JSON-LD blocks.
- Offers HIPAA-compliant systems and FHIR integrations (Epic, Cerner, Allscripts named).
  Wording is service-offering phrasing, not a claim of certified past work, but it should be
  reviewed so it cannot read as implying completed HIPAA-certified deliveries without evidence.
- Only 2 inbound internal links for a P1 industry page; add from services pages and blog.

## 3. Missing pages (create)

| Page | Evidence for genuine capability | Notes |
|---|---|---|
| /laravel-code-audit/ | Distinct from security audit: code quality, architecture, maintainability deliverables | Must cross-link /laravel-security-audit/ with explicit scope split to avoid overlap |
| /laravel-ai-integration/ | Laravel GPT and Laravel Social AI are real shipped features/products on the site | Strongest evidence base of the three; include OpenAI integration section, RAG/vector (pgvector) and MCP as sections per keyword mapping §3 |
| /laravel-filament-development/ | Filament work exists in the ecosystem; brief Phase 5.3 lists a full Filament cluster | Page first, then supporting content (multi-tenancy, vs Nova, auth/permissions) |
| /laravel-development-company-uk/ | Genuine UK business; follows existing -europe/-usa pattern, not a doorway | From keyword mapping §1; supports "laravel development company UK" (GB band <100) |

Each new page must follow the brief's content requirements: business problem, what is
delivered, technical capabilities, engagement models, methodology, stack, genuine examples,
next steps. No invented pricing or unevidenced outcome claims.

## 4. Internal linking and architecture gaps

- Inbound-link counts (files in src/ linking to each page): hire 33, development-services 12,
  consulting 8, security-audit 7, performance 5, upgrade 5, healthcare 2, maintenance 2,
  migration 1.
- The three adequate pages are the least linked. Link equity is concentrated on the hire page.
- Recommended structure (brief Phase 6): Services hub linking development, SaaS, AI
  integration, Filament, API, upgrade/migration, support, code audits, performance. The
  current nav does not surface maintenance, migration, healthcare, performance or upgrade.
- /faq/ index (PR #67) gives the 28 FAQ pages a hub; FAQ pages should link contextually to
  the relevant commercial pages once answers land.

## 5. Claims requiring evidence review

Carried rule from the 26 Nov trust-claims cleanup: no unevidenced superlatives or metrics.
These live claims were not part of that cleanup and need evidence on file or rewording:

1. /hire-laravel-developer/ meta: "$35/hour", "48h deployment", "15-day trial", "50+ available experts".
2. /laravel-development-services/ meta: "500+ projects delivered".
3. /laravel-performance-optimization/ meta: "3-10x speed improvements".
4. /laravel-security-audit/ meta: "$2,500+" pricing.
5. /laravel-healthcare-software/: HIPAA/FHIR offering wording (review only, phrasing is
   capability-based).

Pricing is commercially sensitive: the brief says indicative pricing only where commercially
approved. Until evidence is confirmed, treat these as review items, not deletions.

## 6. Thin programmatic content risk

- 26 geo-variant and 25 service-variant pages are generated from KeywordLandingPage data
  (~1,745 rendered words each). They are not doorway pages while each carries genuine
  differentiated copy; keep them monitored for duplication drift as new variants are added.
- 27 of 28 FAQ pages have empty answers; they are noindexed and sitemap-excluded (PRs #65, #67)
  until the 106-question corpus (private maicoach repo) or fresh answers land.

## 7. Recommended order (feeds implementation plan)

1. Expand /laravel-consulting/, /laravel-performance-optimization/, /upgrade-laravel-version/
   (thinnest existing P1 pages).
2. Create /laravel-ai-integration/ (strongest evidence base of the missing pages).
3. Create /laravel-code-audit/ with scope split vs security-audit.
4. Create /laravel-filament-development/.
5. Expand /hire-laravel-developer/ and /laravel-development-services/; resolve the F2
   duplicate (301 pending approval).
6. Internal-linking pass: maintenance, migration, healthcare hubs (Phase 6).
7. Create /laravel-development-company-uk/.
8. Claims evidence review (§5) before or alongside each page edit.
