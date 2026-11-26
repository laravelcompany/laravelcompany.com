/**
 * Site-wide Pages middleware.
 *
 * 1. Legacy /docs/{{version}}/<slug> URLs: the imported Laravel docs used an
 *    upstream version placeholder, and those literal URLs still get crawled
 *    (GA4/GSC 404 reports). 301 to the unversioned page; the markdown-side
 *    rewrite lives in src/utils/remarkDocLinks.mjs.
 * 2. Trailing-slash canonicalization: Cloudflare Pages serves /x and /x/ as
 *    the same asset without redirecting, which splits analytics and link
 *    equity. 301 extension-less GET/HEAD URLs to the trailing-slash form.
 *    Skipped for /api/ (function routes) and /books/ (dynamic function
 *    parses the exact pathname).
 * 3. Section fallbacks: expired jobs, removed prompts files and dropped blog
 *    slugs 301 to the section listing. This cannot be a _redirects splat:
 *    Pages splats take precedence over static assets and /x/* matches /x/
 *    itself, so a splat loops on its own section index. Redirect only after
 *    the origin answered 404, so live pages are never touched.
 * 4. Legacy-site fallbacks (GSC 2026-11-26, ~3k URLs from the pre-rebuild
 *    VoIP/Android/tutorials site still crawled from old links): whole dead
 *    sections 301 to the closest live section after the origin answers 404.
 *    Root-level legacy slugs cannot be pattern-matched here, so those live
 *    as explicit rules in public/_redirects.
 */
const VERSION_PREFIX = /^\/docs\/(?:\{\{version\}\}|%7B%7Bversion%7D%7D)(\/.*)?$/i;
const NUMERIC_DOCS_VERSION = /^\/docs\/\d+\.x(\/.*)?$/i;
const FALLBACK_MAP = [
    [/^\/jobs\/.+/i, "/jobs/"],
    [/^\/prompts\/.+/i, "/prompts/"],
    [/^\/books\/.+/i, "/books/"],
    [/^\/blog\/.+/i, "/blog/"],
    [
        /^\/(?:guides|tutorials|tech-blog|articles|learn|learning|learning-center|resources|tag|tags|category|categories|series|android|android-development|blackberry|bower|developers|development|events|ios-development|\d{4})(?:\/.*)?$/i,
        "/blog/",
    ],
    [/^\/docs\/.+/i, "/docs/"],
    [/^\/magento-development\/.+/i, "/magento-agency-london/"],
    [/^\/our-services(?:\/.*)?$/i, "/services/"],
    [/^\/solutions\/.+/i, "/solutions/"],
    [/^\/services\/.+/i, "/services/"],
    [/^\/products\/.+/i, "/products/"],
    [/^\/partners\/.+/i, "/partners/"],
];

export function redirectFor(pathname, search = "") {
  const versionMatch = VERSION_PREFIX.exec(pathname);
  if (versionMatch) {
    const rest = (versionMatch[1] || "/").replace(/\/+$/, "");
    return `/docs${rest}/`;
  }
  const numericVersionMatch = NUMERIC_DOCS_VERSION.exec(pathname);
  if (numericVersionMatch) {
    const rest = (numericVersionMatch[1] || "/").replace(/\/+$/, "");
    return `/docs${rest}/`;
  }
  const lastSegment = pathname.split("/").pop() || "";
  if (
    pathname !== "/" &&
    !pathname.endsWith("/") &&
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/books/") &&
    !lastSegment.includes(".")
  ) {
    return `${pathname}/`;
  }
  return null;
}

export function sectionFallbackFor(pathname) {
  for (const [pattern, target] of FALLBACK_MAP) {
    if (pattern.test(pathname)) return target;
  }
  return null;
}

export async function onRequest(context) {
  const { request } = context;
  if (request.method === "GET" || request.method === "HEAD") {
    const url = new URL(request.url);
    const target = redirectFor(url.pathname, url.search);
    if (target) {
      return Response.redirect(new URL(target + url.search, url).toString(), 301);
    }
    const response = await context.next();
    const fallback = sectionFallbackFor(url.pathname);
    if (response.status === 404 && fallback) {
      return Response.redirect(new URL(fallback + url.search, url).toString(), 301);
    }
    return response;
  }
  return context.next();
}
