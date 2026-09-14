const DEFAULT_RESTRICTED_COUNTRIES = ["IN", "PK"];

export function normalizeCountryCode(value) {
  return typeof value === "string" ? value.trim().toUpperCase() : "";
}

export function parseRestrictedCountries(value) {
  const configured = typeof value === "string" ? value.split(",") : value;
  const values = Array.isArray(configured) ? configured : DEFAULT_RESTRICTED_COUNTRIES;

  return new Set(values.map(normalizeCountryCode).filter(Boolean));
}

export function isBookingEligible(countryCode, configuredCountries) {
  const normalizedCountryCode = normalizeCountryCode(countryCode);

  // Detection failures and unknown countries fail open.
  if (!normalizedCountryCode) return true;

  return !parseRestrictedCountries(configuredCountries).has(normalizedCountryCode);
}

export { DEFAULT_RESTRICTED_COUNTRIES };
