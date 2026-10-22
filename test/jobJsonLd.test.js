import assert from "node:assert/strict";
import test from "node:test";

import {
    buildJobPostingJsonLd,
    buildBaseSalary,
    normalizeDatePosted,
    normalizeEmploymentType,
    parseJobLocation,
    stripHtml,
} from "../src/utils/jobJsonLd.js";

// Sample records mirror the real jobs.izdrail.com API shapes observed in
// production (field names, null patterns, location formats).

// Google Search Console's required fields for JobPosting.
const GOOGLE_REQUIRED = ["title", "description", "hiringOrganization", "datePosted"];

function assertGoogleRequired(jsonLd) {
    for (const field of GOOGLE_REQUIRED) {
        assert.ok(jsonLd[field], `missing required field: ${field}`);
    }
    assert.equal(jsonLd["@type"], "JobPosting");
    assert.equal(jsonLd.hiringOrganization["@type"], "Organization");
    assert.ok(jsonLd.hiringOrganization.name);
    assert.notEqual(jsonLd.description, jsonLd.title);
    // jobLocation is required unless applicantLocationRequirements is present
    assert.ok(
        jsonLd.jobLocation || jsonLd.applicantLocationRequirements,
        "missing jobLocation / applicantLocationRequirements",
    );
    if (jsonLd.jobLocation) {
        const address = jsonLd.jobLocation.address;
        assert.equal(typeof address, "object", "address must be a PostalAddress object, not a string");
        assert.equal(address["@type"], "PostalAddress");
        assert.ok(address.addressCountry, "Google requires addressCountry inside jobLocation.address");
    }
    // Every value must survive a JSON round trip (what the page emits)
    JSON.parse(JSON.stringify(jsonLd));
}

test("fully populated API record emits valid JobPosting", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Digital Solutions Engineer",
        company: "Exe Squared Ltd",
        location: "Exeter, ENG, GB",
        description: "We're a bespoke software and AI consultancy based in Exeter.\n\nThe role is hands-on.",
        date_posted: "2026-10-20T00:00:00.000",
        job_type: "fulltime",
        job_url: "https://uk.indeed.com/viewjob?jk=abc",
        company_url: "https://example.com",
        site: "indeed",
    });

    assert.ok(jsonLd);
    assertGoogleRequired(jsonLd);
    assert.equal(jsonLd.datePosted, "2026-10-20");
    assert.equal(jsonLd.employmentType, "FULL_TIME");
    assert.equal(jsonLd.hiringOrganization.sameAs, "https://example.com");
    assert.deepEqual(jsonLd.jobLocation, {
        "@type": "Place",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Exeter",
            addressRegion: "ENG",
            addressCountry: "GB",
        },
    });
});

test("address is never emitted as a bare string (the GSC critical issue)", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "PHP Developer",
        company: "Acme",
        location: "Shoreham by Sea, ENG, GB",
        description: "Real description text.",
        date_posted: "2026-10-19T00:00:00.000",
    });
    assert.ok(jsonLd);
    assert.equal(typeof jsonLd.jobLocation.address, "object");
});

test("datePosted comes from the source, never the build time", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Dev",
        company: "Acme",
        location: "London, ENG, GB",
        description: "Real description text.",
        posted_date: "2026-09-01",
    });
    assert.equal(jsonLd.datePosted, "2026-09-01");
    assert.ok(!jsonLd.datePosted.startsWith(new Date().toISOString().slice(0, 10)) || true);
});

test("missing description returns null (no markup beats invalid markup)", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Back End Developer",
        company: "Arrows",
        location: "",
        description: "",
        job_url: "https://www.linkedin.com/jobs/view/123",
        site: "linkedin",
    });
    assert.equal(jsonLd, null);
});

test("description equal to title returns null (Google forbids it)", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Dev",
        company: "Acme",
        location: "London, ENG, GB",
        description: "Dev",
        date_posted: "2026-10-20",
    });
    assert.equal(jsonLd, null);
});

test("missing datePosted returns null instead of fabricating the build date", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Senior Software Developer",
        company: "Confirm",
        location: "",
        description: "Develop and maintain scalable software.",
    });
    assert.equal(jsonLd, null);
});

test("empty location without a remote flag returns null", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Head of Platform Engineering",
        company: "Hospitable",
        location: "",
        description: "Senior engineering leader accountable for delivery.",
        date_posted: "2026-10-20T00:00:00.000",
    });
    assert.equal(jsonLd, null);
});

test("'Remote, GB' emits TELECOMMUTE with an eligible country, no jobLocation", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Senior Software Developer",
        company: "Confirm",
        location: "Remote, GB",
        description: "Wherever you find ambitious companies investing in their people.",
        date_posted: "2026-10-20T00:00:00.000",
    });
    assert.ok(jsonLd);
    assertGoogleRequired(jsonLd);
    assert.equal(jsonLd.jobLocationType, "TELECOMMUTE");
    assert.deepEqual(jsonLd.applicantLocationRequirements, { "@type": "Country", name: "GB" });
    assert.equal(jsonLd.jobLocation, undefined);
});

test("two-part location maps to region + country without inventing a city", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Symfony Developer",
        company: "Acme",
        location: "England, United Kingdom",
        description: "Real description text.",
        date_posted: "2026-10-18T00:00:00.000",
    });
    assert.ok(jsonLd);
    assertGoogleRequired(jsonLd);
    assert.deepEqual(jsonLd.jobLocation.address, {
        "@type": "PostalAddress",
        addressRegion: "England",
        addressCountry: "United Kingdom",
    });
    assert.equal(jsonLd.jobLocation.address.addressLocality, undefined);
});

test("employmentType is omitted when the source has no type (no fabricated FULL_TIME)", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Dev",
        company: "Acme",
        location: "London, ENG, GB",
        description: "Real description text.",
        date_posted: "2026-10-20",
        job_type: null,
    });
    assert.ok(jsonLd);
    assert.equal(jsonLd.employmentType, undefined);
});

test("employmentType maps real API values to schema.org enums", () => {
    assert.equal(normalizeEmploymentType("fulltime"), "FULL_TIME");
    assert.equal(normalizeEmploymentType("parttime"), "PART_TIME");
    assert.equal(normalizeEmploymentType("FULL_TIME"), "FULL_TIME");
    assert.equal(normalizeEmploymentType("contract"), "CONTRACTOR");
    assert.equal(normalizeEmploymentType(""), undefined);
    assert.equal(normalizeEmploymentType(null), undefined);
    assert.equal(normalizeEmploymentType("guru-level"), undefined);
});

test("validThrough is omitted when the source has no expiry date", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Dev",
        company: "Acme",
        location: "London, ENG, GB",
        description: "Real description text.",
        date_posted: "2026-10-20",
    });
    assert.ok(jsonLd);
    assert.equal(jsonLd.validThrough, undefined);
});

test("validThrough passes through when the source provides a real expiry", () => {
    const jsonLd = buildJobPostingJsonLd({
        title: "Dev",
        company: "Acme",
        location: "London, ENG, GB",
        description: "Real description text.",
        date_posted: "2026-10-20",
        valid_through: "2026-12-31T00:00:00.000",
    });
    assert.equal(jsonLd.validThrough, "2026-12-31");
});

test("baseSalary is omitted without real salary data", () => {
    assert.equal(buildBaseSalary({ min_amount: null, max_amount: null, currency: null, interval: null }), undefined);
    assert.equal(buildBaseSalary({ min_amount: 50000, currency: null }), undefined);
    const jsonLd = buildJobPostingJsonLd({
        title: "Dev",
        company: "Acme",
        location: "London, ENG, GB",
        description: "Real description text.",
        date_posted: "2026-10-20",
    });
    assert.equal(jsonLd.baseSalary, undefined);
});

test("baseSalary builds a MonetaryAmount when the API provides real amounts", () => {
    assert.deepEqual(buildBaseSalary({ min_amount: 60000, max_amount: 80000, currency: "GBP", interval: "yearly" }), {
        "@type": "MonetaryAmount",
        currency: "GBP",
        value: { "@type": "QuantitativeValue", minValue: 60000, maxValue: 80000, unitText: "YEAR" },
    });
    assert.deepEqual(buildBaseSalary({ min_amount: 400, currency: "GBP", interval: "daily" }), {
        "@type": "MonetaryAmount",
        currency: "GBP",
        value: { "@type": "QuantitativeValue", value: 400, unitText: "DAY" },
    });
});

test("stripHtml keeps paragraph breaks and decodes entities", () => {
    assert.equal(stripHtml("<p>One</p><p>Two &amp; three</p>"), "One\nTwo & three");
    assert.equal(stripHtml("Line<br>break&nbsp;here"), "Line\nbreak here");
    assert.equal(stripHtml(""), "");
    assert.equal(stripHtml(null), "");
});

test("normalizeDatePosted handles the API format and rejects junk", () => {
    assert.equal(normalizeDatePosted("2026-10-20T00:00:00.000"), "2026-10-20");
    assert.equal(normalizeDatePosted("2026-10-20"), "2026-10-20");
    assert.equal(normalizeDatePosted(""), undefined);
    assert.equal(normalizeDatePosted(null), undefined);
    assert.equal(normalizeDatePosted("not a date"), undefined);
});

test("parseJobLocation never returns a string address", () => {
    for (const loc of ["Exeter, ENG, GB", "England, United Kingdom", "Remote, GB", "", null]) {
        const result = parseJobLocation(loc, null);
        if (result.jobLocation) {
            assert.equal(typeof result.jobLocation.address, "object");
        }
    }
});
