import assert from "node:assert/strict";
import test from "node:test";

import {
  onRequestGet,
  onRequestPost,
} from "../functions/api/jobs.js";

function postRequest(body) {
  return new Request("https://laravelcompany.com/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
}

test("forwards the body to the jobs API and streams the response back", async () => {
  const calls = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    return new Response('{"data":[{"title":"Laravel Dev"}]}', {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };
  try {
    const res = await onRequestPost({
      request: postRequest('{"keyword":"laravel"}'),
    });
    assert.equal(res.status, 200);
    assert.equal(await res.text(), '{"data":[{"title":"Laravel Dev"}]}');
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://jobs.izdrail.com/api/v1/jobs");
    assert.equal(calls[0].init.method, "POST");
    assert.equal(calls[0].init.body, '{"keyword":"laravel"}');
    assert.equal(
      calls[0].init.headers["Content-Type"],
      "application/json",
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("preserves an upstream error status", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response("upstream broke", { status: 503 });
  try {
    const res = await onRequestPost({
      request: postRequest('{"keyword":"laravel"}'),
    });
    assert.equal(res.status, 503);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("returns 502 when the jobs API cannot be reached", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new TypeError("fetch failed");
  };
  try {
    const res = await onRequestPost({
      request: postRequest('{"keyword":"laravel"}'),
    });
    assert.equal(res.status, 502);
    assert.deepEqual(await res.json(), { error: "Jobs API unreachable" });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("rejects GET with 405", async () => {
  const res = onRequestGet();
  assert.equal(res.status, 405);
});

test("the jobs page searches through the same-origin proxy", async () => {
  const { readFile } = await import("node:fs/promises");
  const page = await readFile(
    new URL("../src/pages/jobs.astro", import.meta.url),
    "utf8",
  );
  assert.match(page, /fetch\("\/api\/jobs"/);
  assert.doesNotMatch(page, /fetch\(\s*"https:\/\/jobs\.izdrail\.com/);
});
