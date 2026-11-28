import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// Phase 6 internal linking: the deepest commercial pages were nearly
// orphaned (content-gap-analysis.md, 2026-11-28: maintenance 2 inbound
// files, migration 1, healthcare 2). Guard the minimum inbound-link
// baseline so these pages cannot slip back to orphaned state.

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (/\.(astro|ts|md)$/.test(path)) yield path;
  }
}

function inboundCount(url) {
  let count = 0;
  for (const root of ["src/pages", "src/components", "src/layouts", "src/data"]) {
    for (const file of walk(root)) {
      if (readFileSync(file, "utf8").includes(`"${url}`) || readFileSync(file, "utf8").includes(`/${url}/`)) count++;
    }
  }
  return count;
}

const MIN_INBOUND = {
  "laravel-maintenance-support": 4,
  "laravel-migration-services": 4,
  "laravel-healthcare-software": 4,
};

for (const [slug, min] of Object.entries(MIN_INBOUND)) {
  test(`/${slug}/ has at least ${min} inbound internal link sources`, () => {
    const count = inboundCount(slug);
    assert.ok(count >= min, `/${slug}/ only has ${count} inbound link sources (minimum ${min})`);
  });
}
