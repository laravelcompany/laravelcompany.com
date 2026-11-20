/**
 * POST /api/jobs
 *
 * Same-origin proxy for the client-side job search. The jobs API
 * (jobs.izdrail.com) answers preflight from this origin with
 * "Disallowed CORS origin", so browsers cannot call it directly. The
 * search box posts here instead and this function forwards the request
 * server-side, where CORS does not apply.
 *
 * The JSON body is passed through untouched (e.g. {"keyword":"laravel"})
 * and the upstream response is streamed back with its status code.
 */

const UPSTREAM_URL = "https://jobs.izdrail.com/api/v1/jobs";

export async function onRequestPost({ request }) {
    let body;
    try {
        body = await request.text();
    } catch {
        return Response.json(
            { error: "Unreadable request body" },
            { status: 400 },
        );
    }

    try {
        const upstream = await fetch(UPSTREAM_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "User-Agent": "laravelcompany.com-search-proxy/1.0",
            },
            body,
        });

        return new Response(upstream.body, {
            status: upstream.status,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
            },
        });
    } catch {
        return Response.json(
            { error: "Jobs API unreachable" },
            { status: 502 },
        );
    }
}

export function onRequestGet() {
    return Response.json(
        { error: 'Method not allowed - POST a JSON body such as {"keyword":"laravel"}' },
        { status: 405 },
    );
}
