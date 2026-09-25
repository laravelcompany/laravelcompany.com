/**
 * Shared slug generator for job detail pages.
 *
 * Used by the jobs route, the jobs index, and the sitemap so every
 * consumer builds the exact same URL for a job.
 *
 * The previous fallback (btoa(url).substring(0, 8)) was constant for
 * every https URL ("aHR0cHM6" is the base64 of "https:"), so all jobs
 * without an id shared one suffix and same-title jobs collided. The
 * sitemap skipped the fallback entirely and emitted "-undefined" URLs.
 */
function hashString(input: string): string {
    let h = 5381;
    for (let i = 0; i < input.length; i++) {
        h = ((h << 5) + h + input.charCodeAt(i)) >>> 0;
    }
    return h.toString(36);
}

export function generateJobSlug(
    title: string,
    id?: string | null,
    url?: string | null,
): string {
    let safeId = id;
    if (!safeId || safeId === "undefined" || safeId === "null") {
        safeId = url ? hashString(url) : hashString(title);
    }
    const titleSlug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
    return `${titleSlug}-${safeId}`;
}
