/**
 * Builds Google-compliant JobPosting JSON-LD from a jobs.izdrail.com record.
 *
 * Why this exists: the old template in src/pages/jobs/[slug].astro emitted
 * `jobLocation.address` as a bare string (schema.org expects a PostalAddress
 * object), read `job.posted_date`/`job.type` while the API sends
 * `date_posted`/`job_type` (so datePosted silently became the site build
 * time), and defaulted employmentType to FULL_TIME when no type existed.
 * Google Search Console flagged the result as critical structured-data
 * errors on 2026-10-01.
 *
 * Rules enforced here:
 * - Returns null when any field Google *requires* is missing from the source
 *   data. A page with no JobPosting block is valid; a page with an
 *   incomplete one is a Search Console error.
 * - Never invents data: no build-time dates, no default employment type, no
 *   guessed salary, postcode or country.
 * - validThrough is omitted unless the source carries a real expiry date,
 *   per Google's own guidance ("If a job posting never expires, or you do
 *   not know when the job will expire, do not include this property").
 * - baseSalary is only emitted when the source carries real amounts.
 *
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/job-posting
 */

/** Strip HTML to plain text, preserving paragraph breaks (\n is the minimum
 * paragraph marker Google accepts for JobPosting descriptions). */
export function stripHtml(html) {
    if (!html) return "";
    return html
        .replace(/<\s*br\s*\/?\s*>/gim, "\n")
        .replace(/<\s*\/\s*(p|div|li|ul|ol|h[1-6])\s*>/gim, "\n")
        .replace(/<[^>]*>?/gm, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&rsquo;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

/** Map the API's lowercase job_type values to schema.org enumeration values.
 * Returns undefined when the source has no usable type - never a default. */
const EMPLOYMENT_TYPE_MAP = {
    fulltime: "FULL_TIME",
    "full-time": "FULL_TIME",
    "full time": "FULL_TIME",
    parttime: "PART_TIME",
    "part-time": "PART_TIME",
    "part time": "PART_TIME",
    contract: "CONTRACTOR",
    contractor: "CONTRACTOR",
    temporary: "TEMPORARY",
    temp: "TEMPORARY",
    internship: "INTERN",
    intern: "INTERN",
    volunteer: "VOLUNTEER",
    per_diem: "PER_DIEM",
    other: "OTHER",
};

const VALID_EMPLOYMENT_TYPES = new Set([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACTOR",
    "TEMPORARY",
    "INTERN",
    "VOLUNTEER",
    "PER_DIEM",
    "OTHER",
]);

export function normalizeEmploymentType(raw) {
    if (!raw || typeof raw !== "string") return undefined;
    const trimmed = raw.trim();
    if (!trimmed) return undefined;
    if (VALID_EMPLOYMENT_TYPES.has(trimmed.toUpperCase())) return trimmed.toUpperCase();
    return EMPLOYMENT_TYPE_MAP[trimmed.toLowerCase()];
}

/** Map common interval words from the API to schema.org unitText values. */
const SALARY_UNIT_MAP = {
    hour: "HOUR",
    hourly: "HOUR",
    day: "DAY",
    daily: "DAY",
    week: "WEEK",
    weekly: "WEEK",
    month: "MONTH",
    monthly: "MONTH",
    year: "YEAR",
    yearly: "YEAR",
    annual: "YEAR",
    annually: "YEAR",
};

const REMOTE_MARKERS = new Set(["remote", "anywhere", "work from home", "wfh"]);

/**
 * Split a free-text location ("Exeter, ENG, GB", "England, United Kingdom",
 * "Remote, GB") into structured-data pieces. Uses only what the string
 * actually contains - a missing city or postcode stays missing.
 *
 * Returns one of:
 *   { jobLocation }                                   - physical workplace
 *   { jobLocationType, applicantLocationRequirements } - 100% remote job
 *   {}                                                 - nothing usable
 */
export function parseJobLocation(location, isRemote) {
    const raw = (location || "").trim();
    if (!raw) {
        // A remote flag with no location at all cannot name an eligible
        // country, and Google requires at least one - leave empty and let
        // the caller drop the markup rather than invent a country.
        return {};
    }

    const parts = raw
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);

    const firstIsRemote = parts.length > 0 && REMOTE_MARKERS.has(parts[0].toLowerCase());

    if (firstIsRemote || (isRemote === true && parts.length === 1)) {
        const countryPart = firstIsRemote ? parts[parts.length - 1] : parts[0];
        const country = firstIsRemote && parts.length > 1 ? countryPart : null;
        if (!country) return {};
        return {
            jobLocationType: "TELECOMMUTE",
            applicantLocationRequirements: {
                "@type": "Country",
                name: country,
            },
        };
    }

    const address = { "@type": "PostalAddress" };
    if (parts.length >= 3) {
        address.addressLocality = parts[0];
        address.addressRegion = parts.slice(1, -1).join(", ");
        address.addressCountry = parts[parts.length - 1];
    } else if (parts.length === 2) {
        // "England, United Kingdom" - region + country, no city.
        address.addressRegion = parts[0];
        address.addressCountry = parts[1];
    } else {
        // A single token can't fill the Google-required addressCountry
        // reliably (could be a city or a country) - treat as unusable.
        return {};
    }

    return {
        jobLocation: {
            "@type": "Place",
            address,
        },
    };
}

/** Normalise a source date string to an ISO 8601 date. Returns undefined
 * when the source value is missing or unparseable - never the current time. */
export function normalizeDatePosted(raw) {
    if (!raw || typeof raw !== "string") return undefined;
    // Keep the source's own calendar date. The API sends naive datetimes
    // ("2026-10-20T00:00:00.000"); round-tripping through Date would shift
    // the day in non-UTC build environments.
    const isoDate = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (isoDate) {
        const year = Number(isoDate[1]);
        const month = Number(isoDate[2]);
        const day = Number(isoDate[3]);
        const check = new Date(Date.UTC(year, month - 1, day));
        if (
            Number.isNaN(check.getTime()) ||
            check.getUTCFullYear() !== year ||
            check.getUTCMonth() !== month - 1 ||
            check.getUTCDate() !== day
        ) {
            return undefined;
        }
        return `${isoDate[1]}-${isoDate[2]}-${isoDate[3]}`;
    }
    const timestamp = Date.parse(raw);
    if (Number.isNaN(timestamp)) return undefined;
    return new Date(timestamp).toISOString().slice(0, 10);
}

/** schema.org MonetaryAmount from the API's min/max/currency/interval fields.
 * Returns undefined unless there is at least one real amount and a currency. */
export function buildBaseSalary(job) {
    const min = toFiniteNumber(job.min_amount);
    const max = toFiniteNumber(job.max_amount);
    const currency = typeof job.currency === "string" ? job.currency.trim() : "";
    if (!currency || (min === undefined && max === undefined)) return undefined;

    const value = { "@type": "QuantitativeValue" };
    if (min !== undefined && max !== undefined) {
        value.minValue = min;
        value.maxValue = max;
    } else {
        value.value = min !== undefined ? min : max;
    }
    const unit = typeof job.interval === "string" ? SALARY_UNIT_MAP[job.interval.trim().toLowerCase()] : undefined;
    if (unit) value.unitText = unit;

    return {
        "@type": "MonetaryAmount",
        currency,
        value,
    };
}

function toFiniteNumber(value) {
    const num = typeof value === "string" ? Number(value) : value;
    return typeof num === "number" && Number.isFinite(num) ? num : undefined;
}

/**
 * Build the JobPosting JSON-LD object for a job, or null when the source
 * record lacks a field Google requires (title, description, datePosted,
 * hiringOrganization name, and jobLocation unless the job is 100% remote
 * with a known eligible country).
 *
 * Accepts both naming conventions seen in the wild: the cache interface
 * (posted_date, type, url) and the live API (date_posted, job_type, job_url).
 */
export function buildJobPostingJsonLd(job) {
    if (!job || typeof job !== "object") return null;

    const title = typeof job.title === "string" ? job.title.trim() : "";
    if (!title) return null;

    const description = stripHtml(job.full_description || job.description);
    if (!description || description === title) return null;

    const datePosted = normalizeDatePosted(job.posted_date || job.date_posted);
    if (!datePosted) return null;

    const company = typeof job.company === "string" ? job.company.trim() : "";
    if (!company) return null;

    const locationParts = parseJobLocation(job.location, job.is_remote);
    if (!locationParts.jobLocation && !locationParts.applicantLocationRequirements) {
        return null;
    }

    const hiringOrganization = {
        "@type": "Organization",
        name: company,
    };
    const companyUrl = typeof job.company_url === "string" ? job.company_url.trim() : "";
    if (companyUrl) hiringOrganization.sameAs = companyUrl;

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        title,
        description,
        hiringOrganization,
        datePosted,
        ...locationParts,
    };

    const employmentType = normalizeEmploymentType(job.type || job.job_type);
    if (employmentType) jsonLd.employmentType = employmentType;

    const baseSalary = buildBaseSalary(job);
    if (baseSalary) jsonLd.baseSalary = baseSalary;

    // Only a real expiry date from the source is allowed through. The API
    // has no expiry field today, so this stays omitted - which is exactly
    // what Google asks for when the expiry is unknown.
    const validThrough = normalizeDatePosted(
        job.valid_through || job.validThrough || job.expires || job.expiry_date,
    );
    if (validThrough) jsonLd.validThrough = validThrough;

    return jsonLd;
}
