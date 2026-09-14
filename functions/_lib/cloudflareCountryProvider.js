import { normalizeCountryCode } from "./countryEligibility.js";

/**
 * Uses Cloudflare's trusted request metadata. It never reads a query string,
 * client-provided header, or exposes/stores the visitor's IP address.
 */
export function getCountryCode(request) {
  return normalizeCountryCode(request?.cf?.country);
}
