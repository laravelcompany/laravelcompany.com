# SEO Implementation Log

Running log for the 2026-11-28 comprehensive SEO task. Status legend per brief:
Completed / Existing / Partially complete / Blocked / Not recommended.

| Date | PR | Change | Phase | Status |
|---|---|---|---|---|
| 2026-11-28 | #63 | docs/seo/initial-audit.md — Phase 1 discovery, inventory, baseline, findings F1-F9 | 1 | Open (docs-only) |
| 2026-11-28 | #64 | docs/seo/keyword-mapping.md — primaries, clusters, consolidation candidates | 2 | Open (docs-only) |
| 2026-11-28 | #65 | sitemap.xml.ts: filesystem-derived routes + faq/prompts/funny-docs/country-city enumeration (F1) | 3 | Open — review advised (crawl discovery change) |
| 2026-11-28 | #66 | Layout default meta description (F9); llms.txt refresh (F5) | 3 | Open |
| 2026-11-28 | #67 | /faq/ index page, footer link, noindex empty answers (F3) | 3 | Open |
| 2026-11-28 | #68 | Broken /install link -> #features on Laravel Mail page | 3 | Open |

Awaiting Stefan's decisions: www DNS; services duplicate consolidation; FAQ answer corpus reuse.

Nothing merged yet — no production changes have shipped from this programme.

## 2026-11-28 (later) — Phase 4 + CWV lab pass

- docs/seo/content-gap-analysis.md written (PR #70): per-page assessment of the brief's
  10 priority commercial pages with live rendered word counts. 3 adequate, 4 thin
  (consulting 517, performance 421, upgrade 473, hire 799, dev-services 800), 3 missing
  (/laravel-code-audit/, /laravel-ai-integration/, /laravel-filament-development/),
  plus /laravel-development-company-uk/ missing. Internal-link audit: maintenance (2
  inbound files), migration (1), healthcare (2) nearly orphaned.
- CWV lab-proxy pass (cloud browser Performance API; PSI keyless quota exhausted, so no
  field data): TTFB ~260-380ms, FCP <1s, CLS 0.001-0.002 all healthy. LCP is the weak
  metric sitewide: 8.9s on / (H1), 3.2-3.6s on commercial pages.
- Root cause: every H1 carried .animate-on-scroll (opacity: 0 until JS + 0.8s animation).
  Fix shipped as PR #71: animate-on-scroll removed from all 55 H1s, guard test added
  (test/heroLcpH1.test.js). Entrance animations on eyebrow/subtitle/CTA unchanged.
- Note: tests/prompts-search.test.mjs fails on a fresh clone (missing generated,
  gitignored public/prompts-search.json) — pre-existing, unrelated.
