# LaravelCompany.com — Keyword-to-URL Mapping (Phase 2)

Date: 2026-11-28
Inputs: brief's keyword plan (hypothesis, not verified volumes); Ahrefs free refresh 2026-11-26
(GB + US KD, volume bands — `research/laravelcompany-seo/2026-11-26-kw-competitor-refresh/`);
route inventory from `docs/seo/initial-audit.md` (PR #63).
Volumes marked "hist." = pre-November figures from an unknown tool, unvalidated.
"ND" = Ahrefs returned no data (unknown, NOT zero). Validation column says what is actually verified.

## 1. Core commercial keywords

| Keyword | Intent | Priority | Existing URL | Recommended URL | Gap / cannibalisation | Action | Validation |
|---|---|---|---|---|---|---|---|
| laravel development company | commercial | P1 | /laravel-development-company/ + / (homepage) | /laravel-development-company/ primary; homepage supports brand | Cluster overlap with /laravel-application-development-company/, /laravel-services/, /services/ | Keep; differentiate copy + internal links; verify SERP targets | hist. 525/mo; Ahrefs GB KD 0, US KD 5 (verified 26 Nov) |
| laravel development agency | commercial | P1 | /laravel-development-agency/ | same | none severe | Keep/improve | hist. 235/mo; GB/US KD 0 |
| laravel agency | commercial | P1 | none (/laravel-agency/ 404s) | Homepage (title already "…& Agency") | Creating a page would cannibalise homepage | Keep on homepage; do NOT create a page | hist. 165/mo; GB/US KD 0 |
| laravel development services | commercial | P1 | /laravel-development-services/ AND /laravel-web-development-services/ (same H1, near-identical titles) | /laravel-development-services/ sole primary | **Duplicate pair (F2)** | Consolidate: 301 /laravel-web-development-services/ → /laravel-development-services/ per redirect plan (needs approval, see §5) | hist. 169/mo; GB/US KD 0 |
| laravel developers for hire | commercial | P1 | /hire-laravel-developer/ | same | Overlap with dedicated + remote hire pages | Keep; sharpen intent split (§2) | ND (Ahrefs) |
| hire laravel developers | commercial | P1 | /hire-laravel-developer/ | same | as above | as above | ND |
| dedicated laravel developer | commercial | P2 | /hire-dedicated-laravel-developers/ | same | Overlaps /hire-laravel-developer/ | Keep; position as staff-augmentation/dedicated-team intent | ND |
| hire remote laravel developer | commercial | P2 | /hire-laravel-developer-remote/ | same | Overlaps both above | Keep; position as remote/async intent | ND |
| laravel consulting | commercial | P1 | /laravel-consulting/ | same | none | Keep/improve | US KD 0; GB band <100 |
| laravel development company UK | commercial | P1 | none (-europe, -usa exist; UK does not) | CREATE /laravel-development-company-uk/ | Follows existing -europe/-usa pattern; genuine UK business, not a doorway | Create (Phase 4) | GB band <100; US ND |
| laravel maintenance services | commercial | P2 | /laravel-maintenance-support/ | same | none | Keep; add "maintenance services" phrasing | ND |
| laravel code audit | commercial | P1 | /laravel-security-audit/ (security-scoped) | CREATE /laravel-code-audit/ (quality/architecture scope) | Risk of overlap with security-audit; distinct deliverables (code quality/architecture vs OWASP/security) | Create with explicit scope split + cross-links (Phase 4) | ND both tools |
| laravel performance optimisation | commercial | P1 | /laravel-performance-optimization/ | same | US spelling in URL is fine | Keep/improve | ND |
| laravel outsourcing company | commercial | P2 | /outsource-laravel-development/ | same | Overlaps nearshore page | Keep; differentiate outsource vs nearshore | ND |

## 2. Hire-cluster intent split (anti-cannibalisation)

| Page | Sole intent | Title evidence (26 Nov) |
|---|---|---|
| /hire-laravel-developer/ | general hiring, any engagement | "Hire Laravel Developer \| Dedicated Experts from $35/hour" |
| /hire-dedicated-laravel-developers/ | dedicated/team augmentation | (KeywordLandingPage data) |
| /hire-laravel-developer-remote/ | remote/async global talent | "Hire Laravel Developer Remote \| Global Talent $25/hr" |

Internal links between the three must use descriptive anchors, not exact-match swaps.

## 3. Technology clusters

| Keyword/topic | Existing URL | Recommended | Action | Validation |
|---|---|---|---|---|
| laravel saas development | /laravel-saas-development/ | same | Keep/improve | GB band <100; US ND |
| laravel api development | /laravel-api-development/ | same | Keep/improve | US KD 11 (informational SERP); GB <100 |
| livewire development | /laravel-livewire-development/ | same | Keep/improve | ND |
| laravel multi-tenancy | none dedicated (covered inside saas page) | keep inside /laravel-saas-development/ | Do not create yet; expand section | ND |
| laravel upgrade and migration | /laravel-migration-services/ + /upgrade-laravel-version/ | split: migration-services = platform moves; upgrade = version upgrades | Keep both; cross-link; watch overlap | ND |
| laravel ai integration | none (/ai-digital-transformation/ is generic) | CREATE /laravel-ai-integration/ | Create — real product evidence (Laravel GPT, Laravel Social AI features) | GB/US ND (26 Nov) |
| laravel openai integration | none | section of new AI integration page + future blog cluster | Phase 5.2 content | ND |
| laravel RAG / vector search | none | blog/docs cluster (pgvector) | Phase 5.2 | ND |
| laravel MCP integration | none | blog/docs cluster | Phase 5.2 | ND |
| filament development | none | CREATE /laravel-filament-development/ | Create (Phase 4 priority 8) | ND |
| laravel cloud / forge / vapor | /laravel-aws-deployment-services/ (partial) | keep; add Cloud/Forge/Vapor section | Improve | ND |
| laravel reverb / octane | none dedicated (performance page adjacent) | sections in performance/docs | Improve; no new pages yet | ND |

## 4. Industry clusters

| Industry | Existing URL | Action | Note |
|---|---|---|---|
| Healthcare | /laravel-healthcare-software/ | Keep; verify HIPAA/FHIR claims wording | P1 in brief |
| Fintech | /laravel-fintech-development/ | Keep/improve | PCI claims need evidence review |
| E-commerce | /laravel-ecommerce-development/ | Keep/improve | |
| Logistics/fleet | /laravel-logistics-platform/ | Keep/improve | |
| Education/LMS | none | Defer — no demonstrable experience recorded | Per brief: don't invent |
| CRM/ERP | /laravel-crm-development/ | Keep/improve | |
| Booking/scheduling | /build-booking-platform-laravel/ | Keep/improve | |
| Marketplaces | /build-marketplace-laravel/ | Keep/improve | |
| Employee ownership/ESOP | /esop/ | Keep/improve (Phase 5.1) | Differentiator, not industry page |

## 5. Migration and rescue

| Topic | Existing URL | Action |
|---|---|---|
| Laravel version upgrades | /upgrade-laravel-version/ | Keep/improve |
| WordPress → Laravel | /migrate-wordpress-to-laravel/ | Keep/improve |
| Legacy PHP modernisation | covered partially by /laravel-migration-services/ | Expand section; no new page yet |
| CodeIgniter → Laravel | none | Candidate page (Phase 4/5) — real migration pattern, low risk |
| Symfony → Laravel | none | Candidate page — same |
| PHP version upgrades | section of upgrade page | Expand |
| Laravel debugging and rescue | none | CREATE /laravel-project-rescue/ (brief's "Laravel project rescue" commercial kw) |
| Performance remediation | /laravel-performance-optimization/ | Keep |
| Security audits | /laravel-security-audit/ | Keep |

## 6. Consolidation requiring approval (feeds redirect-mapping.md)

1. 301 /laravel-web-development-services/ → /laravel-development-services/ (F2 duplicate). Check backlinks first; preserve any unique copy by merging.
2. /faq/ tree: build an index page and link it from footer + relevant pages (preferred), OR retire with 301s to /blog/. Recommendation: keep + index — 28 pages already carry FAQPage schema.
3. No page for "laravel agency" — deliberate (homepage owns it).

## 7. Rules applied

- One primary keyword per page; one page per intent.
- No new page where an existing page already serves the intent (brief's audit-first rule).
- No doorway pages: location/industry pages only where genuine relevance exists.
- New pages recommended only where the brief prioritises them AND real capability evidence exists (Filament, AI integration, code audit, project rescue, UK page).
