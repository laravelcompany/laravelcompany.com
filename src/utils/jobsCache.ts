import fs from 'fs';
import path from 'path';

export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    salary?: string;
    type?: string;
    posted_date?: string;
    url?: string;
    job_url?: string;
    tags?: string[];
    requirements?: string[];
    benefits?: string[];
    full_description?: string;
}

interface JobsApiResponse {
    jobs?: Job[];
    results?: Job[];
    data?: Job[];
}

const CACHE_FILE = path.join(process.cwd(), 'src/data/jobs-cache.json');

/**
 * Fetch jobs from the API
 */
async function fetchJobsFromAPI(keyword: string = 'laravel'): Promise<Job[]> {
    const apiUrl = 'https://jobs.izdrail.com/api/v1/jobs';

    try {
        console.log(`📡 Fetching jobs from API: ${apiUrl} with keyword: ${keyword}`);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'Astro-Build/1.0'
            },
            body: JSON.stringify({ keyword })
        });

        if (!response.ok) {
            console.error(`❌ API fetch failed with status ${response.status}`);
            return [];
        }

        const data: JobsApiResponse = await response.json();
        const jobsData = data.jobs || data.results || data.data || [];

        console.log(`✓ Fetched ${jobsData.length} jobs from API`);
        return jobsData;
    } catch (error) {
        console.error('❌ Failed to fetch jobs from API:', error);
        return [];
    }
}

/**
 * Save jobs to cache file
 */
function saveJobsToCache(jobs: Job[]): void {
    try {
        const cacheData = {
            timestamp: new Date().toISOString(),
            count: jobs.length,
            jobs: jobs
        };

        fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData, null, 2), 'utf-8');
        console.log(`💾 Saved ${jobs.length} jobs to cache: ${CACHE_FILE}`);
    } catch (error) {
        console.error('❌ Failed to save jobs to cache:', error);
    }
}

/**
 * Load jobs from cache file
 */
function loadJobsFromCache(): Job[] | null {
    try {
        if (!fs.existsSync(CACHE_FILE)) {
            console.log('ℹ️ No cache file found');
            return null;
        }

        const cacheContent = fs.readFileSync(CACHE_FILE, 'utf-8');
        const cacheData = JSON.parse(cacheContent);

        console.log(`📂 Loaded ${cacheData.count} jobs from cache (saved: ${cacheData.timestamp})`);
        return cacheData.jobs;
    } catch (error) {
        console.error('❌ Failed to load jobs from cache:', error);
        return null;
    }
}

/**
 * Get jobs - uses cache in development, fetches from API in production/CI.
 * Memoized per keyword for the lifetime of the process so every consumer
 * (jobs index, job detail routes, sitemap) sees the same snapshot within
 * a single build.
 */
const jobsPromises = new Map<string, Promise<Job[]>>();

export function getJobs(keyword: string = 'laravel'): Promise<Job[]> {
    let pending = jobsPromises.get(keyword);
    if (!pending) {
        pending = getJobsUncached(keyword);
        jobsPromises.set(keyword, pending);
    }
    return pending;
}

async function getJobsUncached(keyword: string = 'laravel'): Promise<Job[]> {
    // Check if we're in a CI/deployment environment
    const isCI = process.env.CI === 'true' || process.env.VERCEL || process.env.NETLIFY;
    const forceRefresh = process.env.FORCE_REFRESH_JOBS === 'true';

    if (forceRefresh || isCI) {
        console.log('🔄 Force refresh or CI environment detected - fetching from API');
        const jobs = await fetchJobsFromAPI(keyword);
        if (jobs.length > 0) {
            saveJobsToCache(jobs);
        }
        return jobs;
    }

    // Try to load from cache first
    const cachedJobs = loadJobsFromCache();
    if (cachedJobs && cachedJobs.length > 0) {
        return cachedJobs;
    }

    // If no cache, fetch from API and save
    console.log('📡 No cache available - fetching from API');
    const jobs = await fetchJobsFromAPI(keyword);
    if (jobs.length > 0) {
        saveJobsToCache(jobs);
    }

    return jobs;
}

/**
 * Manually refresh the cache
 */
export async function refreshJobsCache(keyword: string = 'laravel'): Promise<Job[]> {
    console.log('🔄 Manually refreshing jobs cache...');
    const jobs = await fetchJobsFromAPI(keyword);
    if (jobs.length > 0) {
        saveJobsToCache(jobs);
    }
    return jobs;
}
