# LaravelCompany.com — Content Authority Plan (Phase 5)

Date: 2026-11-28
Inputs: brief Phase 5 (5.1-5.5); repo audit 2026-11-28. Everything here is a proposal;
page creation and copy changes ship as PRs for Stefan's review. No unsupported claims.

## 5.1 Employee ownership (ESOP)

Existing: /esop/ ("ESOP - Employee Stock Ownership Plan | Laravel Company"), ~900 source
words. Audit against the brief's seven story points:

| Story point | Covered? |
|---|---|
| Company history | Not found |
| Ownership structure | Partial (plan mechanics) |
| Employee participation | Not found |
| Engineering accountability | Not found |
| Staff retention | Mentioned once |
| Long-term project continuity | Not found |
| Ownership → client relationships | Not found |

Gap: the page explains the ESOP concept but not LaravelCompany's own story. The
differentiator is real (brief 5.1) but currently undifferentiated copy. Proposal: expand
/esop/ with verified company facts only — Stefan supplies the facts (founding history,
ownership %, participation terms), nothing invented. Title also needs work: "ESOP -
Employee Stock Ownership Plan" targets a generic term, not the company differentiator.

Blocked on: verified facts from Stefan (listed in final-report open questions).

## 5.2 Laravel AI engineering

Real evidence base (audited 2026-11-28):
- Laravel GPT (/software/laravel-gpt/): "Multi-Agent AI Platform", RAG capability,
  embeddable widget (gpt/widget), agent architecture. Strongest proof of shipped AI work.
- Laravel Social (/software/laravel-social/): AI content generation, AI image generation,
  multi-engine support, automation dashboard.
- /ai-digital-transformation/: generic positioning page, thin on Laravel specifics.

Proposal:
1. Create /laravel-ai-integration/ (Phase 4 priority 7, keyword-mapping §3) anchored on
   the two shipped products as case evidence: OpenAI integration, RAG with pgvector,
   agent architecture, production cost optimisation. Sections only where real work backs them.
2. Supporting cluster later (blog/docs): MCP servers, local LLM integration, chatbot
   architecture. Brief rule applies: working examples and code, no superficial AI articles.

## 5.3 Filament ecosystem

Existing: no service page; Filament appears in docs (boost.md, ai.md), funny-docs, the
hire page, the vs-Django comparison, and 80 blog posts. Real familiarity, no packaged
service or product.

Proposal:
1. Create /laravel-filament-development/ (Phase 4 priority 8): admin panels, multi-tenant
   SaaS back-offices, auth/permissions. Evidence: cite shipped usage where it exists;
   if no client-shipped Filament work can be verified, the page must say so and lead with
   capability + ecosystem work instead. Do not invent Filament case studies.
2. Defer starter kits/packages (brief: only if genuinely valuable and maintainable).
3. "Filament vs Nova" is a natural blog post once the service page exists.

## 5.4 Free tools and resources

Existing: ProjectCalculator component (embedded in geo pages, not standalone),
/resources/ai-powered-devops/ (single resource). No standalone tools.

Proposal (brief's priority order):
1. Laravel Upgrade Readiness Checker — the genuine gap. Could reuse upgrade page content
   + version/EOL data. Needs a small build; scope in a separate PR with Stefan's go-ahead.
2. Laravel Development Cost Calculator — promote ProjectCalculator to a standalone page
   (/laravel-development-cost/ already exists and could host it).
3. Security/architecture checklists — cheap to produce as real checklists, gate nothing
   behind email (brief rule).

Tools are new product surface: each needs Stefan's approval before building.

## 5.5 Products and open source

Existing: 6 product pages (Laravel GPT, Laravel Mail, Laravel SEO, Laravel Social,
Laravel UI, LeadsCaptain) + /products/ index + /open-source/.

Proposal: product pages stay brand-independent (brief rule). Internal-link wins only:
link products contextually from relevant service pages (AI integration -> Laravel GPT;
maintenance -> Laravel SEO tooling where honest). Review each product page's technical
docs links as part of Phase 6. No repositioning.

## Sequencing (after current PR queue clears)

1. /laravel-ai-integration/ page PR (strongest evidence base).
2. /laravel-filament-development/ page PR.
3. /esop/ expansion — blocked on verified facts from Stefan.
4. Upgrade Readiness Checker scoping PR (needs Stefan's go-ahead to build).
5. Product cross-linking pass.
