import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function toExcerpt(improvedPrompt: string): string {
    return improvedPrompt
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/[#*>`]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 220);
}

export const GET: APIRoute = async () => {
    const prompts = await getCollection('prompts');
    const index = prompts.map((prompt) => ({
        act: prompt.data.act,
        slug: prompt.id,
        type: prompt.data.type ?? null,
        forDevs: prompt.data.forDevs ?? false,
        excerpt: toExcerpt(prompt.data.improvedPrompt),
    }));

    return new Response(JSON.stringify(index), {
        headers: { 'Content-Type': 'application/json' },
    });
};
