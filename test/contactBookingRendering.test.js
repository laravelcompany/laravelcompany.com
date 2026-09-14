import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/pages/contact.astro", import.meta.url), "utf8");

test("Calendly keeps its URL and UTM parameters", () => {
  assert.match(source, /https:\/\/calendly\.com\/laravelagency\/30min\?background_color=0f172a&text_color=ffffff&primary_color=7c3aed&utm_source=website&utm_medium=general_inquiry&utm_campaign=contact_page/);
  assert.match(source, /utm_campaign=contact_page_cta/);
});

test("Calendly markup and script are only created by the eligible path", () => {
  const eligiblePath = source.slice(source.indexOf("const showBooking"), source.indexOf("const showRestriction"));
  assert.match(eligiblePath, /calendly-inline-widget/);
  assert.match(eligiblePath, /assets\.calendly\.com\/assets\/external\/widget\.js/);
  assert.doesNotMatch(source.slice(0, source.indexOf("const showBooking")), /src="https:\/\/assets\.calendly/);
});

test("restricted path displays policy message without enabling the CTA", () => {
  const restrictedPath = source.slice(source.indexOf("const showRestriction"), source.indexOf("const resolveBookingEligibility"));
  assert.match(source, /id="booking-restricted"/);
  assert.match(source, /international commercial and security policy/);
  assert.doesNotMatch(restrictedPath, /booking-cta/);
});

test("responsive booking panel retains its height and two-column layout", () => {
  assert.match(source, /grid-cols-1 lg:grid-cols-2/);
  assert.match(source, /min-h-\[700px\]/);
  assert.match(source, /p-6 sm:p-10/);
});
