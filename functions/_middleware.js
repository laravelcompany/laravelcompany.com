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
 */
const VERSION_PREFIX = /^\/docs\/(?:\{\{version\}\}|%7B%7Bversion%7D%7D)(\/.*)?$/i;

export function redirectFor(pathname, search = "") {
  const versionMatch = VERSION_PREFIX.exec(pathname);
  if (versionMatch) {
    const rest = (versionMatch[1] || "/").replace(/\/+$/, "");
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

export async function onRequest(context) {
  const { request } = context;
  if (request.method === "GET" || request.method === "HEAD") {
    const url = new URL(request.url);
    const target = redirectFor(url.pathname, url.search);
    if (target) {
      return Response.redirect(new URL(target + url.search, url).toString(), 301);
    }
  }
  return context.next();
}
