/**
 * Curated catalogue configuration for the Books section.
 *
 * The Books section is a curated developer resource, not the whole Open
 * Library catalogue. Each category maps to one Open Library search query;
 * categories power the featured sections on the landing page and the
 * per-book "related books" rail. Adding a category here is all it takes
 * to extend the catalogue.
 */
export interface BookCategory {
    id: string;
    title: string;
    tagline: string;
    query: string;
    limit: number;
}

export const BOOK_CATEGORIES: BookCategory[] = [
    {
        id: "laravel-php",
        title: "Featured for Laravel Developers",
        tagline: "Framework craft, modern PHP and the ecosystem around it.",
        query: "laravel php",
        limit: 8,
    },
    {
        id: "architecture-design",
        title: "Architecture & Design",
        tagline: "Clean code, DDD, design patterns and systems that age well.",
        query: "software architecture design patterns",
        limit: 8,
    },
    {
        id: "ai-modern-engineering",
        title: "AI & Modern Engineering",
        tagline: "Machine learning, system design and how software gets built now.",
        query: "artificial intelligence system design",
        limit: 8,
    },
    {
        id: "business-leadership",
        title: "Business & Engineering Leadership",
        tagline: "Leading teams, shipping SaaS and the business of software.",
        query: "engineering management leadership",
        limit: 8,
    },
];

export const BOOKS_PAGE_SIZE = 12;
