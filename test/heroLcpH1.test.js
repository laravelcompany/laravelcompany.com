import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// LCP guard: every page's H1 is the most likely largest-contentful-paint
// element. The sitewide .animate-on-scroll pattern starts elements at
// opacity: 0 until JS adds .animated, which gates the H1's first paint on
// script execution plus the 0.8s entrance animation and pushes LCP far
// past the 2.5s "good" threshold (measured 3.2-8.9s on 2026-11-28).
// H1s must therefore never carry the animate-on-scroll class.

const roots = ["src/pages", "src/components"];

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (path.endsWith(".astro")) yield path;
  }
}

test("no H1 uses animate-on-scroll (LCP must paint immediately)", () => {
  const offenders = [];
  for (const root of roots) {
    for (const file of walk(root)) {
      const source = readFileSync(file, "utf8");
      if (/<h1[^>]*class="[^"]*animate-on-scroll/.test(source)) {
        offenders.push(file);
      }
    }
  }
  assert.deepEqual(offenders, []);
});
