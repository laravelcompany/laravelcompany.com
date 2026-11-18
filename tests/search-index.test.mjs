import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { prepareIndex, searchIndex } from "../src/search/rank.mjs";

const read = (path) =>
    readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("ranker: title beats tags beats excerpt, all terms must match", () => {
    const prepared = prepareIndex([
        { s: "a", t: "How to install Composer", e: "Dependencies in PHP.", c: "Composer", g: ["composer"], d: "2024-01-01" },
        { s: "b", t: "PHP arrays", e: "Composer mentioned in passing.", c: "PHP", g: [], d: "2025-01-01" },
        { s: "c", t: "Unrelated post", e: "Nothing here.", c: "PHP", g: [], d: "2026-01-01" },
    ]);
    const hits = searchIndex(prepared, "composer");
    assert.deepEqual(hits.map((h) => h.s), ["a", "b"]);
    assert.equal(searchIndex(prepared, "composer arrays").length, 1); // AND semantics
    assert.deepEqual(searchIndex(prepared, ""), []);
    // date breaks score ties: newest first
    const tie = searchIndex(
        prepareIndex([
            { s: "old", t: "laravel old", e: "", c: "Blog", g: [], d: "2020-01-01" },
            { s: "new", t: "laravel new", e: "", c: "Blog", g: [], d: "2021-01-01" },
        ]),
        "laravel",
    );
    assert.deepEqual(tie.map((h) => h.s), ["new", "old"]);
    // rank output carries only the display fields
    assert.deepEqual(Object.keys(tie[0]).sort(), ["c", "e", "s", "t"]);
});

test("builder indexes every blog post", () => {
    const dir = mkdtempSync(join(tmpdir(), "search-index-"));
    const out = join(dir, "index.json");
    execFileSync(
        process.execPath,
        ["scripts/build-search-index.mjs", `--out=${out}`],
        { cwd: new URL("..", import.meta.url).pathname, stdio: "pipe" },
    );
    const index = JSON.parse(readFileSync(out, "utf8"));
    const corpus = readdirSync(
        new URL("../src/content/blog", import.meta.url),
    ).filter((f) => f.endsWith(".json"));
    assert.equal(index.length, corpus.length);
    const slugs = new Set(index.map((p) => p.s));
    assert.equal(slugs.size, index.length, "slugs are unique");
    // Two legacy posts have "##" as their entire excerpt and content, so
    // nothing indexable remains; every other post must have real text.
    let emptyExcerpts = 0;
    for (const p of index) {
        assert.ok(p.t && p.c, `entry ${p.s} has title and category`);
        if (!p.e) {
            emptyExcerpts++;
            continue;
        }
        assert.ok(
            !/^Title:/.test(p.e) && !/\bBody:/.test(p.e),
            `entry ${p.s} excerpt has no generator labels`,
        );
    }
    assert.ok(emptyExcerpts <= 2, `at most 2 empty excerpts, got ${emptyExcerpts}`);
    // and the prepared ranker can actually find a known post
    const hits = searchIndex(prepareIndex(index), "laravel", 5);
    assert.ok(hits.length > 0, "a laravel query returns hits");
});

test("search popup queries the own /api/search route, not a third-party Algolia index", () => {
    const tsx = read("src/components/search/AlgoliaDocSearch.tsx");
    assert.doesNotMatch(tsx, /godruoyi/i);
    assert.match(tsx, /transformSearchClient/);
    const client = read("src/components/search/localSearchClient.ts");
    assert.match(client, /\/api\/search\?q=/);
    // DocSearch v3.9 calls search({ requests: [...] }) (Algolia v5 shape),
    // not search(requests): a bare-array client throws "map is not a
    // function" and the popup silently shows "No results".
    assert.match(client, /input\.requests/);
    assert.match(client, /request\.query/);
    const fn = read("functions/api/search.js");
    assert.match(fn, /onRequestGet/);
    assert.match(fn, /search-index\.json/);
});
