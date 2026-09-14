/**
 * Dynamic fallback for /books/{slug} on Cloudflare Pages.
 *
 * Static catalogue pages are prerendered by Astro and always win; this
 * function only runs for slugs with no static page - i.e. books found via
 * live search that are not in the curated catalogue. It resolves the work
 * key embedded in the slug and renders the same styled detail page.
 */
import {
  extractWorkKeyFromSlug,
  fetchWork,
  coverUrl,
  escapeHtml,
  bookMetaDescription,
  buildBookJsonLd,
  OpenLibraryError,
} from "../_lib/openLibrary.js";

const SITE_URL = "https://laravelcompany.com";

function pageShell({ title, description, canonical, ogImage, body, jsonLd, status = 200 }) {
  const ld = jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : "";
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${escapeHtml(canonical)}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="book" />
<meta property="og:url" content="${escapeHtml(canonical)}" />
<meta property="og:image" content="${escapeHtml(ogImage)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<link rel="icon" type="image/png" href="/favicon.png" sizes="180x180" />
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" />
${ld}
<style>
  :root { color-scheme: dark; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Nunito', sans-serif; background: linear-gradient(135deg, #0f172a 0%, #2a1030 100%); color: #fff; min-height: 100vh; }
  .wrap { max-width: 72rem; margin: 0 auto; padding: 6rem 1.5rem 4rem; }
  a { color: #a78bfa; text-decoration: none; }
  a:hover, a:focus { color: #fff; }
  a:focus-visible { outline: 2px solid #7c3aed; outline-offset: 2px; border-radius: 4px; }
  .crumbs { font-size: .875rem; color: rgba(255,255,255,.5); margin-bottom: 2.5rem; display: flex; gap: .5rem; flex-wrap: wrap; }
  .card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 1rem; padding: 2rem; backdrop-filter: blur(12px); }
  .hero { display: grid; grid-template-columns: 1fr; gap: 2rem; }
  @media (min-width: 768px) { .hero { grid-template-columns: 220px 1fr; } }
  .cover { width: 100%; max-width: 220px; border-radius: .75rem; box-shadow: 0 20px 40px rgba(0,0,0,.4); }
  .cover-fallback { width: 100%; max-width: 220px; aspect-ratio: 2/3; border-radius: .75rem; background: linear-gradient(135deg, #1e293b, #3b1d52); display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem; font-weight: 800; color: rgba(255,255,255,.7); }
  h1 { font-size: 2.25rem; font-weight: 800; line-height: 1.2; }
  .meta { color: rgba(255,255,255,.6); margin-top: .75rem; font-size: 1.05rem; }
  .desc { margin-top: 1.5rem; color: rgba(255,255,255,.8); line-height: 1.7; }
  .facts { margin-top: 2rem; display: grid; gap: .75rem; }
  .fact { display: flex; gap: .75rem; font-size: .95rem; }
  .fact dt { color: rgba(255,255,255,.45); min-width: 9rem; font-weight: 700; }
  .pill { display: inline-block; background: rgba(124,58,237,.15); border: 1px solid rgba(124,58,237,.35); color: #c4b5fd; border-radius: 999px; padding: .15rem .7rem; font-size: .8rem; margin: .15rem .25rem .15rem 0; }
  .ext { margin-top: 2rem; display: inline-block; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2); border-radius: .75rem; padding: .8rem 1.6rem; font-weight: 700; color: #fff; }
  .ext:hover { background: rgba(255,255,255,.2); }
</style>
</head>
<body>
<main class="wrap">
${body}
</main>
</body>
</html>`;
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": status === 200 ? "public, max-age=300, s-maxage=3600" : "no-store",
    },
  });
}

function crumbs(bookTitle) {
  return `<nav class="crumbs" aria-label="Breadcrumbs">
  <a href="/">Home</a><span>/</span>
  <a href="/books/">Books</a><span>/</span>
  <span aria-current="page">${escapeHtml(bookTitle)}</span>
</nav>`;
}

export async function onRequestGet({ params }) {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const workKey = extractWorkKeyFromSlug(slug);
  const canonical = `${SITE_URL}/books/${encodeURIComponent(slug)}/`;
  const defaultImage = `${SITE_URL}/logo-square.png`;

  if (!workKey) {
    return pageShell({
      title: "Book not found | Laravel Company",
      description: "This book could not be found in the Laravel Company library.",
      canonical,
      ogImage: defaultImage,
      status: 404,
      body: `${crumbs("Not found")}
<div class="card">
  <h1>Book not found</h1>
  <p class="desc">This one seems to have wandered off the shelf. Head back to <a href="/books/">the library</a> to keep browsing.</p>
</div>`,
    });
  }

  try {
    const book = await fetchWork(workKey);
    const description = bookMetaDescription(book);
    const cover = coverUrl(book.coverId, "L");
    const coverHtml = cover
      ? `<img class="cover" src="${escapeHtml(cover)}" alt="Book cover: ${escapeHtml(book.title)}" loading="lazy" />`
      : `<div class="cover-fallback" role="img" aria-label="No cover available for ${escapeHtml(book.title)}">${escapeHtml(book.title)}</div>`;

    const facts = [];
    if (book.authors.length) facts.push(`<div class="fact"><dt>Author</dt><dd>${escapeHtml(book.authors.join(", "))}</dd></div>`);
    if (book.firstPublishYear) facts.push(`<div class="fact"><dt>First published</dt><dd>${book.firstPublishYear}</dd></div>`);
    if (book.subjects.length) facts.push(`<div class="fact"><dt>Topics</dt><dd>${book.subjects.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("")}</dd></div>`);

    const jsonLd = buildBookJsonLd({ ...book, coverId: book.coverId }, canonical);

    return pageShell({
      title: `${book.title} | Laravel Company Books`,
      description,
      canonical,
      ogImage: cover || defaultImage,
      jsonLd,
      body: `${crumbs(book.title)}
<div class="card">
  <div class="hero">
    <div>${coverHtml}</div>
    <div>
      <h1>${escapeHtml(book.title)}</h1>
      ${book.authors.length ? `<p class="meta">by ${escapeHtml(book.authors.join(", "))}</p>` : ""}
      ${book.firstPublishYear ? `<p class="meta">First published ${book.firstPublishYear}</p>` : ""}
      ${book.description ? `<p class="desc">${escapeHtml(book.description.slice(0, 1200))}</p>` : ""}
      <dl class="facts">${facts.join("")}</dl>
      <a class="ext" href="${escapeHtml(book.openLibraryUrl)}" target="_blank" rel="noopener noreferrer">View on Open Library</a>
    </div>
  </div>
</div>`,
    });
  } catch (error) {
    if (error instanceof OpenLibraryError && error.code === "not_found") {
      return pageShell({
        title: "Book not found | Laravel Company",
        description: "This book could not be found in the Laravel Company library.",
        canonical,
        ogImage: defaultImage,
        status: 404,
        body: `${crumbs("Not found")}
<div class="card">
  <h1>Book not found</h1>
  <p class="desc">This one seems to have wandered off the shelf. Head back to <a href="/books/">the library</a> to keep browsing.</p>
</div>`,
      });
    }

    // Upstream failure - never a false 404.
    console.error("[books-detail] Open Library failure:", error?.message || error);
    return pageShell({
      title: "The library is unreachable | Laravel Company",
      description: "We could not reach the library right now. Please try again in a moment.",
      canonical,
      ogImage: defaultImage,
      status: 502,
      body: `${crumbs("Temporarily unavailable")}
<div class="card">
  <h1>We couldn't reach the library right now</h1>
  <p class="desc">The books are hiding from us. Try again in a moment, or browse <a href="/books/">the curated shelves</a> in the meantime.</p>
</div>`,
    });
  }
}
