/**
 * Build-time Open Library catalogue with a file cache, mirroring the
 * jobsCache.ts pattern:
 *  - development: prefer the cached snapshot, refresh on demand
 *  - CI/deployment: fetch fresh, then persist the snapshot
 *  - fetch failure: fall back to the committed/cached snapshot, never to
 *    a permanently cached failure
 */
import fs from "fs";
import path from "path";
import {
    searchOpenLibrary,
    fetchWork,
    assignSlugs,
} from "../../functions/_lib/openLibrary.js";
import { BOOK_CATEGORIES } from "../data/books-curated";

export interface Book {
    workKey: string;
    slug: string;
    title: string;
    authors: string[];
    authorKeys: string[];
    firstPublishYear: number | null;
    coverId: number | null;
    editionCount: number | null;
    languages: string[];
    publishers: string[];
    isbns: string[];
    subjects: string[];
    description: string | null;
    openLibraryUrl: string;
    categories: string[];
}

const CACHE_FILE = path.join(process.cwd(), "src/data/books-cache.json");

async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
    const results: R[] = new Array(items.length);
    let index = 0;
    async function worker() {
        while (index < items.length) {
            const current = index++;
            results[current] = await fn(items[current]);
        }
    }
    await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
    return results;
}

async function fetchCatalogueFromAPI(): Promise<Book[]> {
    const byWorkKey = new Map<string, Book>();

    for (const category of BOOK_CATEGORIES) {
        try {
            const { books } = await searchOpenLibrary({ q: category.query, limit: category.limit });
            for (const book of books) {
                const existing = byWorkKey.get(book.workKey);
                if (existing) {
                    if (!existing.categories.includes(category.id)) existing.categories.push(category.id);
                } else {
                    byWorkKey.set(book.workKey, { ...book, slug: "", categories: [category.id] } as Book);
                }
            }
            console.log(`✓ [books] ${category.id}: ${books.length} works`);
        } catch (error) {
            // One failing category must not take down the whole catalogue.
            console.error(`❌ [books] category "${category.id}" failed:`, (error as Error).message);
        }
    }

    const books = [...byWorkKey.values()];
    assignSlugs(books);

    // Enrich with work-level descriptions (one request per book, bounded
    // concurrency; failures just leave description null).
    await mapLimit(books, 5, async (book) => {
        try {
            const work = await fetchWork(book.workKey, { timeoutMs: 5000 });
            if (work.description) book.description = work.description;
            if (!book.authors.length && work.authors.length) book.authors = work.authors;
            if (!book.coverId && work.coverId) book.coverId = work.coverId;
        } catch {
            // description stays null - the page renders without it
        }
        return book;
    });

    return books;
}

function saveCache(books: Book[]): void {
    try {
        fs.writeFileSync(
            CACHE_FILE,
            JSON.stringify({ timestamp: new Date().toISOString(), count: books.length, books }, null, 2),
            "utf-8",
        );
        console.log(`💾 [books] saved ${books.length} books to cache`);
    } catch (error) {
        console.error("❌ [books] failed to save cache:", error);
    }
}

function loadCache(): Book[] | null {
    try {
        if (!fs.existsSync(CACHE_FILE)) return null;
        const data = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
        if (!Array.isArray(data.books) || data.books.length === 0) return null;
        console.log(`📂 [books] loaded ${data.count} books from cache (saved: ${data.timestamp})`);
        return data.books;
    } catch {
        return null;
    }
}

/**
 * Get the curated catalogue. In CI (or FORCE_REFRESH_BOOKS) fetch fresh and
 * persist; on failure fall back to the snapshot. Locally prefer the snapshot.
 */
export async function getBooks(): Promise<Book[]> {
    const isCI = process.env.CI === "true" || process.env.VERCEL || process.env.NETLIFY || process.env.CF_PAGES;
    const forceRefresh = process.env.FORCE_REFRESH_BOOKS === "true";

    if (forceRefresh || isCI) {
        try {
            const books = await fetchCatalogueFromAPI();
            if (books.length > 0) {
                saveCache(books);
                return books;
            }
        } catch (error) {
            console.error("❌ [books] fresh fetch failed:", error);
        }
        return loadCache() ?? [];
    }

    const cached = loadCache();
    if (cached) return cached;

    try {
        const books = await fetchCatalogueFromAPI();
        if (books.length > 0) saveCache(books);
        return books;
    } catch (error) {
        console.error("❌ [books] fetch failed with no cache available:", error);
        return [];
    }
}

export async function getBookBySlug(slug: string): Promise<Book | undefined> {
    const books = await getBooks();
    return books.find((b) => b.slug === slug);
}
