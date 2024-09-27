import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_m6Yk4ZMO.mjs';
import { manifest } from './manifest_BNTk32FO.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page3 = () => import('./pages/articles.astro.mjs');
const _page4 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page5 = () => import('./pages/pricing.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/articles/api/search.json.ts", _page2],
    ["src/pages/articles/index.astro", _page3],
    ["src/pages/articles/[...slug].astro", _page4],
    ["src/pages/pricing.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8965eb41-2910-42f2-93e2-9e936d124951",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
