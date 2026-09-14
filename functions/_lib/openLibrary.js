/**
 * Open Library API client - shared between Cloudflare Pages Functions
 * (runtime search + detail fallback) and the Astro build-time catalogue.
 *
 * Pure helpers are exported individually so node --test can exercise them
 * without a running site.
 */

export const OPEN_LIBRARY_SEARCH_URL = "https://openlibrary.org/search.json";
export const OPEN_LIBRARY_WORKS_URL = "https://openlibrary.org/works";
export const OPEN_LIBRARY_AUTHORS_URL = "https://openlibrary.org/authors";
export const COVER_BASE_URL = "https://covers.openlibrary.org/b/id";
export const DEFAULT_TIMEOUT_MS = 6000;

/**
 * Controlled field list - the Search API docs note fields=* is expensive,
 * so we request only what the Books section actually renders.
 */
export const SEARCH_FIELDS = [
  "key",
  "title",
  "author_name",
  "author_key",
  "first_publish_year",
  "cover_i",
  "edition_count",
  "language",
  "publisher",
  "isbn",
  "subject",
];

export class OpenLibraryError extends Error {
  constructor(code, message, status = 0) {
    super(message);
    this.name = "OpenLibraryError";
    this.code = code; // 'timeout' | 'http' | 'network' | 'not_found' | 'bad_response'
    this.status = status;
  }
}

/**
 * SEO-friendly slug base from a book title. Mirrors src/utils/slugify.js,
 * duplicated here so Pages Functions stay self-contained.
 */
export function slugifyBookTitle(title) {
  const base = typeof title === "string" ? title : "";
  const slug = base
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
  return slug || "book";
}

/** Deterministic fallback slug used when a title slug is already taken. */
export function fallbackBookSlug(title, workKey) {
  return `${slugifyBookTitle(title)}-${String(workKey || "").toLowerCase()}`;
}

/** Extract an Open Library work key (e.g. OL45804W) from a book slug. */
export function extractWorkKeyFromSlug(slug) {
  const match = /(?:^|-)(ol\d+w)$/i.exec(typeof slug === "string" ? slug : "");
  return match ? match[1].toUpperCase() : "";
}

/** Cover image URL from an Open Library cover id; empty string when absent. */
export function coverUrl(coverId, size = "M") {
  if (!Number.isInteger(coverId) || coverId <= 0) return "";
  const safeSize = ["S", "M", "L"].includes(size) ? size : "M";
  return `${COVER_BASE_URL}/${coverId}-${safeSize}.jpg`;
}

/** Public Open Library work page URL. */
export function openLibraryWorkUrl(workKey) {
  return `${OPEN_LIBRARY_WORKS_URL}/${encodeURIComponent(workKey)}`;
}

/** Build a Search API URL with the controlled field list. */
export function buildSearchUrl({ q = "", page = 1, limit = 12, fields = SEARCH_FIELDS }) {
  const url = new URL(OPEN_LIBRARY_SEARCH_URL);
  url.searchParams.set("q", q);
  url.searchParams.set("fields", fields.join(","));
  url.searchParams.set("page", String(Math.max(1, page)));
  url.searchParams.set("limit", String(Math.min(Math.max(1, limit), 100)));
  return url.toString();
}

/**
 * fetch() with a hard timeout. Throws OpenLibraryError so callers can
 * distinguish "library is down" from "book does not exist".
 */
export async function fetchJson(url, { timeoutMs = DEFAULT_TIMEOUT_MS, fetchImpl = fetch } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let response;
  try {
    response = await fetchImpl(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "laravelcompany.com-books/1.0 (https://laravelcompany.com/books)",
      },
    });
  } catch (error) {
    if (error && error.name === "AbortError") {
      throw new OpenLibraryError("timeout", `Open Library request timed out after ${timeoutMs}ms`);
    }
    throw new OpenLibraryError("network", `Open Library request failed: ${error?.message || error}`);
  } finally {
    clearTimeout(timer);
  }

  if (response.status === 404) {
    throw new OpenLibraryError("not_found", "Open Library returned 404", 404);
  }
  if (!response.ok) {
    throw new OpenLibraryError("http", `Open Library returned HTTP ${response.status}`, response.status);
  }
  try {
    return await response.json();
  } catch {
    throw new OpenLibraryError("bad_response", "Open Library returned invalid JSON", response.status);
  }
}

/**
 * Normalise a raw Search API doc into the internal Book shape.
 * The UI only ever sees this shape - never raw API fields.
 * Returns null when the doc has no usable identity (title + work key).
 */
export function normalizeWork(doc) {
  if (!doc || typeof doc !== "object") return null;
  const rawKey = typeof doc.key === "string" ? doc.key : "";
  const workKey = rawKey.replace(/^\/works\//, "").trim();
  const title = typeof doc.title === "string" ? doc.title.trim() : "";
  if (!workKey || !title) return null;

  const stringArray = (value, max) =>
    Array.isArray(value)
      ? [...new Set(value.filter((v) => typeof v === "string" && v.trim()).map((v) => v.trim()))].slice(0, max)
      : [];

  return {
    workKey,
    title,
    authors: stringArray(doc.author_name, 4),
    authorKeys: stringArray(doc.author_key, 4),
    firstPublishYear: Number.isInteger(doc.first_publish_year) ? doc.first_publish_year : null,
    coverId: Number.isInteger(doc.cover_i) && doc.cover_i > 0 ? doc.cover_i : null,
    editionCount: Number.isInteger(doc.edition_count) && doc.edition_count > 0 ? doc.edition_count : null,
    languages: stringArray(doc.language, 6),
    publishers: stringArray(doc.publisher, 4),
    isbns: stringArray(doc.isbn, 3),
    subjects: stringArray(doc.subject, 8),
    description: null, // enriched from the work endpoint at build time
    openLibraryUrl: openLibraryWorkUrl(workKey),
  };
}

/** Search Open Library and return normalised books + pagination info. */
export async function searchOpenLibrary({ q, page = 1, limit = 12, timeoutMs, fetchImpl } = {}) {
  const url = buildSearchUrl({ q, page, limit });
  const data = await fetchJson(url, { timeoutMs, fetchImpl });
  const docs = Array.isArray(data?.docs) ? data.docs : [];
  const books = docs.map(normalizeWork).filter(Boolean);
  return {
    books,
    page,
    limit,
    total: Number.isInteger(data?.numFound) ? data.numFound : books.length,
  };
}

/** Fetch one work (+ optional author names) for detail rendering. */
export async function fetchWork(workKey, { timeoutMs, fetchImpl } = {}) {
  const safeKey = /^OL\d+W$/i.test(workKey || "") ? workKey.toUpperCase() : "";
  if (!safeKey) throw new OpenLibraryError("not_found", `Invalid work key: ${workKey}`, 404);

  const work = await fetchJson(`${OPEN_LIBRARY_WORKS_URL}/${safeKey}.json`, { timeoutMs, fetchImpl });

  let description = null;
  if (typeof work.description === "string") description = work.description;
  else if (work.description && typeof work.description.value === "string") description = work.description.value;

  // Author names come as key references on the work - resolve up to 3.
  const authorKeys = Array.isArray(work.authors)
    ? work.authors
        .map((a) => a?.author?.key)
        .filter((k) => typeof k === "string")
        .slice(0, 3)
    : [];
  const authors = [];
  for (const key of authorKeys) {
    try {
      const author = await fetchJson(`${OPEN_LIBRARY_AUTHORS_URL}/${key.split("/").pop()}.json`, {
        timeoutMs,
        fetchImpl,
      });
      if (author && typeof author.name === "string" && author.name.trim()) authors.push(author.name.trim());
    } catch {
      // A missing author record must not break the book page.
    }
  }

  const coverId = Array.isArray(work.covers) && Number.isInteger(work.covers[0]) && work.covers[0] > 0
    ? work.covers[0]
    : null;

  return {
    workKey: safeKey,
    title: typeof work.title === "string" && work.title.trim() ? work.title.trim() : "Untitled",
    authors,
    description,
    coverId,
    subjects: Array.isArray(work.subjects)
      ? work.subjects.filter((s) => typeof s === "string" && s.trim()).slice(0, 8)
      : [],
    firstPublishYear: typeof work.first_publish_date === "string"
      ? (parseInt(work.first_publish_date, 10) || null)
      : null,
    openLibraryUrl: openLibraryWorkUrl(safeKey),
  };
}

/** Escape user/API-controlled text before embedding in HTML. */
export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Metadata-based description when Open Library has none - never invented editorial copy. */
export function bookMetaDescription(book) {
  const parts = [`${book.title}`];
  if (book.authors?.length) parts.push(`by ${book.authors.join(", ")}`);
  if (book.firstPublishYear) parts.push(`first published ${book.firstPublishYear}`);
  parts.push("- part of the Laravel Company curated developer library.");
  return parts.join(" ");
}

/** Schema.org Book JSON-LD; only includes fields that actually exist. */
export function buildBookJsonLd(book, pageUrl) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    url: pageUrl,
  };
  if (book.authors?.length) {
    ld.author = book.authors.map((name) => ({ "@type": "Person", name }));
  }
  if (book.firstPublishYear) ld.datePublished = String(book.firstPublishYear);
  if (book.coverId) ld.image = coverUrl(book.coverId, "L");
  if (book.editionCount) ld.workExample = undefined; // editions count is not schema-safe; omit
  if (book.isbns?.length) ld.isbn = book.isbns[0];
  if (book.publishers?.length) ld.publisher = { "@type": "Organization", name: book.publishers[0] };
  if (book.languages?.length) ld.inLanguage = book.languages[0];
  if (book.description) ld.description = book.description.slice(0, 500);
  if (book.openLibraryUrl) ld.sameAs = book.openLibraryUrl;
  Object.keys(ld).forEach((k) => ld[k] === undefined && delete ld[k]);
  return ld;
}

/** Slice an array into a page, returning pagination metadata. */
export function paginateItems(items, page = 1, perPage = 12) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: current,
    perPage,
    total,
    totalPages,
    hasPrev: current > 1,
    hasNext: current < totalPages,
  };
}

/** Assign stable unique slugs to a set of books (clean slug first, key fallback on collision). */
export function assignSlugs(books) {
  const used = new Set(["page", "api", "index"]); // reserved route segments
  for (const book of books) {
    const base = slugifyBookTitle(book.title);
    let slug = base;
    if (used.has(slug)) slug = fallbackBookSlug(book.title, book.workKey);
    let attempt = slug;
    let n = 2;
    while (used.has(attempt)) {
      attempt = `${slug}-${n++}`;
    }
    book.slug = attempt;
    used.add(attempt);
  }
  return books;
}

/**
 * Slug used when linking a search result to its local detail page.
 * Always includes the work key so the dynamic detail route can resolve
 * the book even when it is not part of the statically built catalogue.
 */
export function buildBookSlugForResult(book) {
  return fallbackBookSlug(book.title, book.workKey);
}
