import assert from "node:assert/strict";
import test from "node:test";

import {
  buildSearchUrl,
  normalizeWork,
  searchOpenLibrary,
  fetchWork,
  slugifyBookTitle,
  fallbackBookSlug,
  extractWorkKeyFromSlug,
  assignSlugs,
  coverUrl,
  paginateItems,
  buildBookJsonLd,
  bookMetaDescription,
  escapeHtml,
  OpenLibraryError,
  SEARCH_FIELDS,
} from "../functions/_lib/openLibrary.js";
import { onRequestGet as searchHandler } from "../functions/api/books/search.js";
import { onRequestGet as detailHandler } from "../functions/books/[slug].js";

const rawDoc = {
  key: "/works/OL45804W",
  title: "Clean Code",
  author_name: ["Robert C. Martin"],
  author_key: ["OL26320A"],
  first_publish_year: 2008,
  cover_i: 12345,
  edition_count: 3,
  language: ["eng"],
  publisher: ["Prentice Hall"],
  isbn: ["9780132350884"],
  subject: ["Software engineering"],
};

const mockFetch = (payload, status = 200) => async () =>
  new Response(JSON.stringify(payload), { status, headers: { "Content-Type": "application/json" } });

test("search URL uses controlled field list, never fields=*", () => {
  const url = buildSearchUrl({ q: "laravel", page: 2, limit: 12 });
  assert.ok(url.startsWith("https://openlibrary.org/search.json?"));
  assert.ok(url.includes(`fields=${encodeURIComponent(SEARCH_FIELDS.join(","))}`));
  assert.ok(url.includes("page=2"));
  assert.ok(!url.includes("fields=*"));
});

test("normalization strips raw API shape and keeps safe fields", () => {
  const book = normalizeWork(rawDoc);
  assert.equal(book.workKey, "OL45804W");
  assert.equal(book.title, "Clean Code");
  assert.deepEqual(book.authors, ["Robert C. Martin"]);
  assert.equal(book.firstPublishYear, 2008);
  assert.equal(book.coverId, 12345);
  assert.equal(book.openLibraryUrl, "https://openlibrary.org/works/OL45804W");
  // no raw API keys leak through
  assert.equal(book.key, undefined);
  assert.equal(book.cover_i, undefined);
  assert.equal(book.author_name, undefined);
});

test("missing cover, author and year do not break normalization", () => {
  const book = normalizeWork({ key: "/works/OL1W", title: "Bare Book" });
  assert.equal(book.coverId, null);
  assert.deepEqual(book.authors, []);
  assert.equal(book.firstPublishYear, null);
  assert.equal(coverUrl(book.coverId), "");
});

test("docs without usable identity are dropped", () => {
  assert.equal(normalizeWork({ title: "No key" }), null);
  assert.equal(normalizeWork({ key: "/works/OL1W" }), null);
  assert.equal(normalizeWork(null), null);
});

test("slugs are stable, SEO-friendly and de-duplicated deterministically", () => {
  assert.equal(slugifyBookTitle("The Clean Coder"), "the-clean-coder");
  assert.equal(fallbackBookSlug("The Clean Coder", "OL123W"), "the-clean-coder-ol123w");
  const books = [
    normalizeWork({ key: "/works/OL1W", title: "Design Patterns" }),
    normalizeWork({ key: "/works/OL2W", title: "Design Patterns" }),
  ];
  assignSlugs(books);
  assert.equal(books[0].slug, "design-patterns");
  assert.equal(books[1].slug, "design-patterns-ol2w");
  // reserved route segments never collide
  const [reserved] = assignSlugs([normalizeWork({ key: "/works/OL9W", title: "Page" })]);
  assert.equal(reserved.slug, "page-ol9w");
});

test("work key round-trips through the fallback slug", () => {
  assert.equal(extractWorkKeyFromSlug("the-clean-coder-ol123w"), "OL123W");
  assert.equal(extractWorkKeyFromSlug("the-clean-coder"), "");
  assert.equal(extractWorkKeyFromSlug("garbage"), "");
});

test("search normalizes results and computes pagination", async () => {
  const result = await searchOpenLibrary({
    q: "php",
    fetchImpl: mockFetch({ numFound: 30, docs: [rawDoc, rawDoc] }),
  });
  assert.equal(result.books.length, 2);
  assert.equal(result.total, 30);
});

test("API failure surfaces as OpenLibraryError, never raw stack", async () => {
  await assert.rejects(
    searchOpenLibrary({ q: "x", fetchImpl: mockFetch({}, 500) }),
    (e) => e instanceof OpenLibraryError && e.code === "http",
  );
});

test("timeout does not crash - abort maps to a timeout error", async () => {
  const slowFetch = (url, opts) =>
    new Promise((_, reject) => {
      opts.signal.addEventListener("abort", () => {
        const err = new Error("aborted");
        err.name = "AbortError";
        reject(err);
      });
    });
  await assert.rejects(
    searchOpenLibrary({ q: "x", timeoutMs: 10, fetchImpl: slowFetch }),
    (e) => e instanceof OpenLibraryError && e.code === "timeout",
  );
});

test("search endpoint: missing q is a 400, valid q returns normalized JSON", async () => {
  const missing = await searchHandler({ request: new Request("https://x/api/books/search") });
  assert.equal(missing.status, 400);

  const realFetch = globalThis.fetch;
  globalThis.fetch = mockFetch({ numFound: 1, docs: [rawDoc] });
  try {
    const res = await searchHandler({ request: new Request("https://x/api/books/search?q=clean+code") });
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.books[0].slug, "clean-code-ol45804w");
    assert.equal(body.books[0].coverUrl, "https://covers.openlibrary.org/b/id/12345-M.jpg");
    assert.equal(body.total, 1);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("search endpoint: upstream failure is graceful 502, never a stack trace", async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = mockFetch({}, 503);
  try {
    const res = await searchHandler({ request: new Request("https://x/api/books/search?q=php") });
    assert.equal(res.status, 502);
    const body = await res.json();
    assert.equal(body.error, "library_unavailable");
    assert.deepEqual(body.books, []);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("detail fallback: clean title slug resolves to matching book", async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    const target = String(url);
    if (target.includes("/search.json?")) {
      return new Response(JSON.stringify({ numFound: 1, docs: [{ ...rawDoc, title: "Beginning Laravel", key: "/works/OL22070359W" }] }), { status: 200 });
    }
    if (target.endsWith("/works/OL22070359W.json")) {
      return new Response(JSON.stringify({ title: "Beginning Laravel", authors: [{ author: { key: "/authors/OL7494903A" } }], covers: [10434560] }), { status: 200 });
    }
    if (target.endsWith("/authors/OL7494903A.json")) {
      return new Response(JSON.stringify({ name: "Sanjib Sinha" }), { status: 200 });
    }
    throw new Error(`Unexpected URL: ${target}`);
  };
  try {
    const res = await detailHandler({ params: { slug: "beginning-laravel" } });
    assert.equal(res.status, 200);
    const html = await res.text();
    assert.ok(html.includes("<h1>Beginning Laravel</h1>"));
    assert.ok(html.includes("by Sanjib Sinha"));
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("detail fallback: unmatched clean title slug is a real 404", async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = mockFetch({ numFound: 0, docs: [] });
  try {
    const res = await detailHandler({ params: { slug: "no-key-here" } });
    assert.equal(res.status, 404);
    const html = await res.text();
    assert.ok(html.includes("Book not found"));
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("detail fallback: unknown book is 404, upstream failure is not", async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = mockFetch({}, 404);
  try {
    const res = await detailHandler({ params: { slug: "ghost-book-ol999999w" } });
    assert.equal(res.status, 404);
  } finally {
    globalThis.fetch = mockFetch({}, 500);
  }
  try {
    const res = await detailHandler({ params: { slug: "some-book-ol45804w" } });
    assert.equal(res.status, 502);
    const html = await res.text();
    assert.ok(html.includes("couldn't reach the library"));
    assert.ok(!html.includes("Book not found"));
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("detail fallback renders book page with metadata and JSON-LD", async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = mockFetch({
    title: "Clean Code",
    description: { value: "A handbook of agile software craftsmanship." },
    authors: [{ author: { key: "/authors/OL26320A" } }],
    covers: [12345],
    subjects: ["Software engineering"],
    first_publish_date: "2008",
  });
  try {
    const res = await detailHandler({ params: { slug: "clean-code-ol45804w" } });
    assert.equal(res.status, 200);
    const html = await res.text();
    assert.ok(html.includes("<title>Clean Code | Laravel Company Books</title>"));
    assert.ok(html.includes('rel="canonical" href="https://laravelcompany.com/books/clean-code-ol45804w/"'));
    assert.ok(html.includes('"@type":"Book"'));
    assert.ok(html.includes("View on Open Library"));
    assert.ok(!html.includes("OL26320A")); // no raw API keys in the UI
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("fetchWork rejects invalid work keys", async () => {
  await assert.rejects(fetchWork("../../etc/passwd"), (e) => e.code === "not_found");
  await assert.rejects(fetchWork(""), (e) => e.code === "not_found");
});

test("pagination slices correctly and clamps out-of-range pages", () => {
  const items = Array.from({ length: 25 }, (_, i) => i);
  const p2 = paginateItems(items, 2, 12);
  assert.deepEqual(p2.items, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
  assert.equal(p2.hasNext, true);
  const last = paginateItems(items, 99, 12);
  assert.equal(last.page, 3);
  assert.equal(last.items.length, 1);
});

test("JSON-LD is valid and omits absent fields", () => {
  const book = normalizeWork(rawDoc);
  const ld = buildBookJsonLd(book, "https://laravelcompany.com/books/clean-code/");
  assert.equal(ld["@type"], "Book");
  assert.equal(ld.name, "Clean Code");
  assert.equal(ld.author[0].name, "Robert C. Martin");
  assert.equal(ld.isbn, "9780132350884");
  JSON.parse(JSON.stringify(ld)); // serializes cleanly

  const bare = buildBookJsonLd(normalizeWork({ key: "/works/OL1W", title: "Bare" }), "https://x/");
  assert.equal(bare.author, undefined);
  assert.equal(bare.isbn, undefined);
});

test("meta description is metadata-based, never invented editorial copy", () => {
  const d = bookMetaDescription(normalizeWork(rawDoc));
  assert.ok(d.includes("Clean Code"));
  assert.ok(d.includes("Robert C. Martin"));
  assert.ok(d.includes("2008"));
});

test("escaping prevents HTML injection from API data", () => {
  assert.equal(escapeHtml('<script>"x"</script>'), "&lt;script&gt;&quot;x&quot;&lt;/script&gt;");
});

test("no raw API response leaks into normalized output", () => {
  const book = normalizeWork(rawDoc);
  const keys = Object.keys(book);
  for (const rawKey of ["key", "cover_i", "author_name", "author_key", "first_publish_year", "edition_count"]) {
    assert.ok(!keys.includes(rawKey), `raw field leaked: ${rawKey}`);
  }
});
