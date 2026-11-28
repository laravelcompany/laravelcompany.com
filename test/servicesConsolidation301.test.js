import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// F2 duplicate consolidation (approved 2026-11-28):
// /laravel-web-development-services/ was retired and 301s to
// /laravel-development-services/. Cloudflare Pages serves existing static
// files before _redirects, so the page file must stay deleted for the
// redirect to fire, and no internal link may point at the retired path.

const RETIRED = "/laravel-web-development-services";
const SURVIVOR = "https://laravelcompany.com/laravel-development-services/";

test("retired duplicate page file is deleted", () => {
  assert.equal(existsSync("src/pages/laravel-web-development-services.astro"), false);
});

test("_redirects carries both 301 rules to the survivor, single hop", () => {
  const rules = readFileSync("public/_redirects", "utf8");
  for (const from of [RETIRED, RETIRED + "/"]) {
    const line = rules
      .split("\n")
      .find((l) => l.startsWith(from + " "));
    assert.ok(line, `missing redirect rule for ${from}`);
    const parts = line.trim().split(/\s+/);
    assert.equal(parts[1], SURVIVOR);
    assert.equal(parts[2], "301");
  }
});

test("no source file links to the retired URL", () => {
  const offenders = [];
  function* walk(dir) {
    for (const entry of readdirSync(dir)) {
      const path = join(dir, entry);
      if (statSync(path).isDirectory()) yield* walk(path);
      else if (/\.(astro|ts|tsx|js|md)$/.test(path)) yield path;
    }
  }
  for (const root of ["src/pages", "src/components", "src/layouts"]) {
    for (const file of walk(root)) {
      if (readFileSync(file, "utf8").includes(RETIRED)) offenders.push(file);
    }
  }
  assert.deepEqual(offenders, []);
});
