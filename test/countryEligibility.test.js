import assert from "node:assert/strict";
import test from "node:test";

import {
  isBookingEligible,
  normalizeCountryCode,
  parseRestrictedCountries,
} from "../functions/_lib/countryEligibility.js";
import { getCountryCode } from "../functions/_lib/cloudflareCountryProvider.js";
import { onRequestGet } from "../functions/api/booking-eligibility.js";

test("GB and US remain eligible", () => {
  assert.equal(isBookingEligible("GB"), true);
  assert.equal(isBookingEligible("US"), true);
});

test("IN and PK are restricted by default", () => {
  assert.equal(isBookingEligible("IN"), false);
  assert.equal(isBookingEligible("PK"), false);
});

test("country codes and configuration are normalized", () => {
  assert.equal(normalizeCountryCode(" in "), "IN");
  assert.equal(isBookingEligible("in"), false);
  assert.equal(isBookingEligible(" PK "), false);
  assert.deepEqual([...parseRestrictedCountries(" in, PK ,")], ["IN", "PK"]);
});

test("unknown or invalid country fails open", () => {
  assert.equal(isBookingEligible(undefined), true);
  assert.equal(isBookingEligible(""), true);
});

test("provider only reads trusted Cloudflare request metadata", () => {
  assert.equal(getCountryCode({ cf: { country: "gb" } }), "GB");
  assert.equal(
    getCountryCode({ url: "https://example.com/?country=IN", headers: new Headers({ "X-Country": "IN" }) }),
    "",
  );
});

test("endpoint hides booking for restricted countries", async () => {
  const response = await onRequestGet({
    request: { cf: { country: "IN" } },
    env: {},
  });
  assert.deepEqual(await response.json(), { eligible: false });
});

test("endpoint shows booking for eligible and unknown countries", async () => {
  for (const country of ["GB", "US", undefined]) {
    const response = await onRequestGet({
      request: { cf: { country } },
      env: {},
    });
    assert.deepEqual(await response.json(), { eligible: true });
  }
});

test("status failure, provider failure, and timeout-equivalent missing metadata fail open", async () => {
  for (const request of [null, { cf: null }, { cf: { country: "XX" } }]) {
    const response = await onRequestGet({ request, env: {} });
    assert.deepEqual(await response.json(), { eligible: true });
  }
});
