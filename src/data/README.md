# Jobs Cache

This directory contains cached data for the jobs section.

## jobs-cache.json

This file contains the cached jobs data fetched from the jobs API. It is automatically generated and updated:

- **Development**: Uses cached data to avoid unnecessary API calls
- **CI/Deployment**: Fetches fresh data from the API and updates the cache
- **Manual Refresh**: Set `FORCE_REFRESH_JOBS=true` environment variable to force a refresh

### Cache Structure

```json
{
  "timestamp": "2026-01-13T07:00:00.000Z",
  "count": 10,
  "jobs": [
    {
      "id": "...",
      "title": "...",
      "company": "...",
      ...
    }
  ]
}
```

## Refreshing the Cache

To manually refresh the cache during development:

```bash
FORCE_REFRESH_JOBS=true npm run build
```

Or during deployment, the cache will automatically refresh in CI environments (Vercel, Netlify, etc.).
