import { getCountryCode } from "../_lib/cloudflareCountryProvider.js";
import { isBookingEligible } from "../_lib/countryEligibility.js";

export async function onRequestGet({ request, env }) {
  try {
    const countryCode = getCountryCode(request);
    const eligible = isBookingEligible(
      countryCode,
      env?.BOOKING_RESTRICTED_COUNTRIES,
    );

    return Response.json(
      { eligible },
      {
        headers: {
          "Cache-Control": "private, max-age=300",
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    );
  } catch {
    // Booking stays available if country detection/configuration fails.
    return Response.json(
      { eligible: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
}
