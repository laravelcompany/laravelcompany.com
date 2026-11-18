/**
 * GET /api/search?q=...
 *
 * Same-origin blog search backing the DocSearch popup, ported from
 * phpteacher.com. The index is built at deploy time into
 * /search-index.json by scripts/build-search-index.mjs and fetched once
 * per isolate through the static assets binding. No third-party search
 * service is involved; the popup's "Algolia" look is UI only.
 */
import { prepareIndex, searchIndex } from "../../src/search/rank.mjs";

let preparedIndex; // undefined = not loaded yet, null = unavailable

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (preparedIndex === undefined) {
    try {
      const res = await env.ASSETS.fetch(
        new Request(new URL("/search-index.json", url)),
      );
      if (!res.ok) throw new Error(`search-index asset ${res.status}`);
      preparedIndex = prepareIndex(await res.json());
    } catch {
      preparedIndex = null;
    }
  }
  const hits = preparedIndex
    ? searchIndex(preparedIndex, url.searchParams.get("q") || "")
    : [];
  return Response.json(
    { hits },
    { headers: { "cache-control": "public, max-age=300" } },
  );
}
