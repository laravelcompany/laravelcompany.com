// Real client reviews, displayed verbatim in the ClientReviews section.
// The structured data (aggregateRating + Review items) must always match
// what is visible on the page - keep both sourced from this single file.
export interface ClientReview {
  author: string;
  text: string;
  rating: number;
}

export const clientReviews: ClientReview[] = [
  {
    author: "Jon",
    text: "Working with Laravel Company was a great experience from start to finish. They took the time to understand what we were trying to build rather than jumping straight into development. The Laravel architecture was well thought out, the communication was clear, and the final application was fast and easy to maintain. It felt like working with a proper technical partner rather than simply hiring developers.",
    rating: 5,
  },
  {
    author: "Julio",
    text: "Laravel Company helped us turn a fairly complicated idea into a clean, working application. What impressed me most was their ability to deal with the technical details without making everything unnecessarily complicated. They were responsive, practical and always focused on finding the right solution. I would definitely work with them again.",
    rating: 5,
  },
  {
    author: "Maria",
    text: "We needed developers who could understand both the business requirements and the technical side of the project. Laravel Company did exactly that. They asked the right questions, suggested improvements where needed and delivered a solid Laravel application that we can continue building on. The whole process was straightforward and professional.",
    rating: 5,
  },
  {
    author: "Ernest",
    text: "We had an existing application that had become difficult to maintain, and Laravel Company helped us get things back under control. They identified the architectural problems, cleaned up the codebase and introduced a much more sensible structure. It made a noticeable difference to both development speed and confidence in the platform. Their Laravel knowledge is excellent.",
    rating: 5,
  },
  {
    author: "Dan",
    text: "What stood out to me was the combination of technical expertise and flexibility. Laravel Company understood that requirements change during a project and built the application in a way that allowed us to adapt without constantly fighting the codebase. Communication was excellent throughout, and they delivered exactly the kind of foundation we needed for future growth.",
    rating: 5,
  },
];

const avg =
  clientReviews.reduce((sum, r) => sum + r.rating, 0) / clientReviews.length;

// Matches the visible reviews exactly - Google requires the markup to
// reflect what is shown on the page.
export const reviewsAggregate = {
  "@type": "AggregateRating",
  ratingValue: avg.toFixed(1),
  reviewCount: String(clientReviews.length),
};

export const reviewsSchemaJSON = clientReviews.map((r) => ({
  "@type": "Review",
  author: { "@type": "Person", name: r.author },
  reviewRating: {
    "@type": "Rating",
    ratingValue: String(r.rating),
    bestRating: "5",
  },
  reviewBody: r.text,
}));
