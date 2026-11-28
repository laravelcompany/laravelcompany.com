# LaravelCompany.com — Redirect Mapping (deliverable 5)

Date: 2026-11-28
Scope: consolidation redirects only. The site's legacy `_redirects` file (799 lines)
was audited in Phase 1: Magento-era 301s to closest live pages, no chains or loops found.

## Rules (from the brief)

- No blanket redirects: every redirect names its source, target, reason and verification.
- Redirects preserve link equity; consolidation beats retirement where equity exists.
- Cloudflare Pages serves existing static files BEFORE `_redirects`, so retiring a page
  requires deleting its source file for the 301 to fire.

## Active consolidations

| Source | Target | Type | Reason | Status | Verification |
|---|---|---|---|---|---|
| /laravel-web-development-services/ | /laravel-development-services/ | 301 | F2 duplicate pair: same H1, near-identical titles, split signals. Approved by Stefan 2026-11-28 | PR #72 merged (2997df6) | Live check post-deploy: single 301, no chain; retiring file deleted |
| /laravel-web-development-services (no slash) | /laravel-development-services/ | 301 | Same rule, no-slash variant | PR #72 merged | Same check |

Notes on the F2 consolidation:
- Copy review before deletion: retiring page was generic marketing copy, no unique
  evidence or deliverables; nothing merged into the survivor. Survivor expansion is
  scheduled per docs/seo/content-gap-analysis.md.
- Internal links: the only internal link to the retiring URL (healthcare page related
  row) was removed in the same PR; the survivor was already linked directly above it.
- Sitemap: auto-derivation (PR #65) drops the retired URL at build time.
- Backlinks: any external links to the old URL keep equity through the 301.

## Decisions with NO redirect

| URL/question | Decision | Decided by | Date |
|---|---|---|---|
| www.laravelcompany.com | No DNS + 301. Permanently dropped, do not re-raise | Stefan | 2026-11-28 |
| /faq/* (28 pages) | Kept, no redirects. Index page + footer link + noindex on empty answers (PR #67) | Stefan | 2026-11-28 |
| /laravel-agency/ (404) | No page, no redirect; homepage owns "laravel agency" intent | keyword-mapping.md §1 | 2026-11-28 |
| blog.laravelcompany.com | Already consolidated historically (no DNS record); nothing to do | audit F-verification | 2026-11-28 |

## Trailing-slash behaviour

Verified live 2026-11-28: trailing-slash variants normalise correctly sitewide
(platform-level), so slash variants do not each need rules. The F2 rule includes both
variants anyway because the source was a real page, not a slash normalisation case.

## Redirect hygiene tests

- test/gsc404Urls.test.js keeps the GSC-exported 404 fixture mapped.
- test/servicesConsolidation301.test.js guards the F2 rules (page deleted, both rules
  present, single hop, no internal links to the retired URL).
- Any future consolidation adds its rules to `_redirects` with a dated comment and a
  test alongside it.
