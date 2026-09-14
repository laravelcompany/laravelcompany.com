/**
 * GET /api/books/search?q=laravel&page=1&limit=12
 *
 * Server-side proxy for Open Library search. Keeps API traffic off the
 * client, enforces the controlled field list and timeout, normalises the
 * response, and lets Cloudflare cache popular queries at the edge.
 */
import {
  searchOpenLibrary,
  buildBookSlugForResult,
  coverUrl,
  OpenLibraryError,
} from "../../_lib/openLibrary.js";

const MAX_LIMIT = 24;

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10) || 1);
  const limit = Math.min(MAX_LIMIT, Math.max(1, parseInt(url.searchParams.get("limit") || "12", 10) || 12));

  const headers = { "Content-Type": "application/json; charset=utf-8" };

  if (!q) {
    return Response.json({ error: "missing_query", books: [], page: 1, totalPages: 0, total: 0 }, {
      status: 400,
      headers: { ...headers, "Cache-Control": "no-store" },
    });
  }

  try {
    const result = await searchOpenLibrary({ q, page, limit });
    const books = result.books.map((book) => ({
      ...book,
      slug: buildBookSlugForResult(book),
      coverUrl: coverUrl(book.coverId, "M"),
    }));

    return Response.json(
      {
        books,
        page: result.page,
        total: result.total,
        totalPages: Math.max(1, Math.ceil(result.total / result.limit)),
      },
      { headers: { ...headers, "Cache-Control": "public, max-age=300, s-maxage=1800" } },
    );
  } catch (error) {
    const isTimeout = error instanceof OpenLibraryError && error.code === "timeout";
    console.error("[books-search] Open Library failure:", error?.message || error);
    return Response.json(
      { error: "library_unavailable", books: [], page, totalPages: 0, total: 0 },
      { status: isTimeout ? 504 : 502, headers: { ...headers, "Cache-Control": "no-store" } },
    );
  }
}
