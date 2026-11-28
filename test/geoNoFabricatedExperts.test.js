import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Trust-claims rule (brief Phase 7 + 26 Nov cleanup): the geo matrix
// rendered a fabricated "Meet Your Local Expert <Name>" person on every
// country/city page (~171 pages), including Person schema and Article
// author markup, with 40 invented names claiming to be "based in" each
// city. None of the names are team members. The templates must never
// render invented local people again.

for (const file of ["src/pages/[country]/[city].astro", "src/pages/[country]/index.astro"]) {
  const source = readFileSync(file, "utf8");

  test(`${file} renders no local-expert persona`, () => {
    assert.ok(!source.includes("expertName"), "expertName reference is back");
    assert.ok(!source.includes("expertTitle"), "expertTitle reference is back");
    assert.ok(!source.includes("Local Expert"), "Local Expert block is back");
    assert.ok(!source.includes('itemtype="https://schema.org/Person"'), "Person schema is back");
  });

  test(`${file} Article schema author is the Organization`, () => {
    assert.ok(
      source.includes('"author": {\n        "@type": "Organization",\n        "name": "Laravel Company"'),
      "Article author must be the Organization, not a Person",
    );
  });
}
