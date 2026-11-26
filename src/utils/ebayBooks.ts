/**
 * eBay book feed for the /books section.
 * Source: src/data/books/products.json, written by tools/ebay-books/generate.py
 * (eBay Browse API, affiliate URLs from the API itself). Listings without an
 * affiliate URL are dropped; the plain eBay URL is never substituted.
 */
import feed from "../data/books/products.json";

export interface EbayBook {
    item_id: string;
    category: string;
    title: string;
    price: string;
    currency: string;
    condition: string;
    seller: string;
    affiliate_url: string;
    item_url: string;
    image_url: string;
    location: string;
    last_seen: string;
    short_description: string;
}

export interface BookShelf {
    slug: string;
    name: string;
    items: EbayBook[];
}

export const exportedAt: string = (feed as any).exported_at;
export const books: EbayBook[] = ((feed as any).products as EbayBook[]).filter((p) => p.affiliate_url && p.item_id);

export const AFFILIATE_REL = "sponsored nofollow noopener";

const SHELF_NAMES: Record<string, string> = {
    "laravel-book": "Laravel",
    "php-book": "PHP",
    "clean-code-book": "Clean Code",
    "software-architecture-book": "Software Architecture",
    "javascript-programming-book": "JavaScript",
    "system-design-book": "System Design",
    "devops-book": "DevOps",
    "database-sql-book": "Databases & SQL",
    "machine-learning-book": "Machine Learning & AI",
    "engineering-management-book": "Engineering Management",
};

export const itemSlug = (id: string): string => String(id).split("|")[1] || String(id).replace(/[^A-Za-z0-9]/g, "");
export const truncate = (s: string, n = 80): string => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);
export const money = (p: EbayBook): string =>
    `${p.currency === "GBP" ? "£" : p.currency + " "}${Number(p.price).toFixed(2)}`;
export const bookPath = (p: EbayBook): string => `/books/${p.category}/${itemSlug(p.item_id)}/`;

export function shelves(): BookShelf[] {
    const map = new Map<string, EbayBook[]>();
    for (const p of books) map.set(p.category, [...(map.get(p.category) || []), p]);
    return [...map.entries()].map(([slug, items]) => ({
        slug,
        name: SHELF_NAMES[slug] || slug.replace(/-book$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        items,
    }));
}

export const dateTime = (iso: string): string => (iso ? iso.replace("T", " ").replace("Z", " UTC") : "unknown");
