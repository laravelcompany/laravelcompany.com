// Builds the blog search index consumed by the /api/search Pages Function.
// Run with: node scripts/build-search-index.mjs
// Writes public/search-index.json (gitignored, copied into dist by astro
// build; the function fetches it once per isolate through the ASSETS
// binding). Same own-corpus approach as phpteacher.com: the DocSearch
// popup queries our own /api/search route instead of a third-party
// Algolia index.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const BLOG_DIR = join(root, "src", "content", "blog");
const outArg = process.argv.find((a) => a.startsWith("--out="));
const out = outArg
    ? outArg.slice("--out=".length)
    : join(root, "public", "search-index.json");
const outPath = isAbsolute(out) ? out : join(process.cwd(), out);

const EXCERPT_MAX = 180;

// Stored excerpts and content often keep their markup (HTML tags, a
// leading "Title:" line, a bare "Body:" marker, markdown links); the
// popup shows the excerpt as plain text.
function plain(text) {
    return (text || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/^\s*#+\s*/gm, "")
        .replace(/[*_`>]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

// Mirror of the cleanup src/pages/blog/[slug].astro applies: drop the
// generator "Title:" / "Body:" labels before the text is shown.
function stripLabels(text) {
    return (text || "")
        .replace(/^Title:\s*/, "")
        .replace(/\s*Body:\s*/, " ")
        .trim();
}

function excerptOf(post) {
    // plain() first: some posts mark the labels up as "**Title**:".
    let text = stripLabels(plain(post.excerpt || ""));
    if (!text) {
        text = stripLabels(plain(post.content || ""));
    }
    if (text.length <= EXCERPT_MAX) return text;
    const cut = text.slice(0, EXCERPT_MAX);
    return cut.slice(0, cut.lastIndexOf(" ")).trimEnd() + "…";
}

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json"));
const index = files
    .map((file) => {
        const post = JSON.parse(readFileSync(join(BLOG_DIR, file), "utf8"));
        return {
            s: file.slice(0, -".json".length),
            t: post.title || "",
            e: excerptOf(post),
            c: "Blog",
            g: Array.isArray(post.tags) ? post.tags : [],
            d: post.date || "",
        };
    })
    .filter((p) => p.s && p.t);
index.sort((a, b) => a.s.localeCompare(b.s));

const json = JSON.stringify(index);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, json);
console.log(
    `search index: ${index.length} posts, ${(json.length / 1024 / 1024).toFixed(2)} MB -> ${outPath}`,
);
