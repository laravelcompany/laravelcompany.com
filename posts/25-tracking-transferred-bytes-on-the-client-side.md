---
title: Tracking transferred bytes on the client side?
author: Shivamyadav
date: 2024-12-01
category: Feedback
views: 1550
replies: 13
---

> Original forum thread content:
> "I'm tracking actual data transferred to users (videos, images, JS, CSS, fonts, etc.) and need to store usage statistics per learner/client. What's the recommended approach to avoid losing usage data when users: Refresh or close the tab Navigate away Lose internet connectivity Experience browser crashes Would periodic syncing + navigator.sendBeacon() + local storage retries be..."

## Client-Side Data Transfer Tracking: Architectures for Reliable Usage Statistics

Shivamyadav's use case—tracking actual bytes transferred to users and storing usage statistics per learner/client—is essential for bandwidth billing, usage-based pricing, and analytics. The challenge is ensuring data reaches the server despite unreliable client-side conditions (refreshes, connectivity loss, crashes).

### The Requirements

**What needs tracking:**
- Video streaming bytes
- Image delivery
- JavaScript/CSS bundles
- Font files
- API response payloads
- Any other resource transfers

**What needs to be preserved:**
- Per-user/client aggregate statistics
- Granular enough to detect unusual usage
- Resilient to browser tab closure, refresh, and intermittent connectivity

### Why Simple Request Tracking Isn't Enough

Counting requests on the server side misses the actual *bytes* transferred. A 5MB video and a 5KB image generate the same "1 request" count. To track real bandwidth usage, you need to measure response sizes.

**Server-Side Tracking (Partial Solution)**
```php
// In middleware
public function handle(Request $request, Closure $next)
{
    $response = $next($request);
    
    if ($response instanceof \Symfony\Component\HttpFoundation\BinaryFileResponse) {
        $bytes = $response->getFile()->getSize();
    } else {
        $bytes = strlen($response->getContent());
    }
    
    // Log usage
    Usage::create([
        'user_id' => auth()->id(),
        'bytes' => $bytes,
        'endpoint' => $request->path(),
        'type' => $this->detectType($request),
    ]);
    
    return $response;
}
```

Limitations:
- Doesn't capture CDN or signed URL traffic (see [How to secure an API-generated video embed link](04-how-to-secure-an-api-generated-video-embed-link-and-prevent-.md))
- Overhead on every response
- Tracking is per-request, not aggregate

### Client-Side Browser APIs

**1. Navigation Timing API**
```javascript
const [navigation] = performance.getEntriesByType('navigation');
const bytes = navigation.transferSize; // Total bytes transferred
```

**2. Resource Timing API**
```javascript
const resources = performance.getEntriesByType('resource');
resources.forEach(resource => {
    console.log(`${resource.name}: ${resource.transferSize} bytes`);
});
```

**3. Network Information API**
```javascript
const connection = navigator.connection;
console.log(`Effective type: ${connection.effectiveType}`);
console.log(`Downlink: ${connection.downlink}Mbps`);
```

**4. Storage Estimation API**
```javascript
const estimate = await navigator.storage.estimate();
console.log(`Usage: ${estimate.usage} bytes, Quota: ${estimate.quota}`);
```

### The Proposed Solution: Periodic Sync + Beacon + Local Storage

Shivamyadav's instinct—periodic syncing + `sendBeacon` + local storage retries—is exactly the right architecture.

**1. Track Usage in Memory**
```javascript
class UsageTracker {
    constructor() {
        this.usage = JSON.parse(localStorage.getItem('usage') || '{}');
        this.dirty = false;
    }
    
    track(url, bytes, type) {
        const key = type;
        this.usage[key] = (this.usage[key] || 0) + bytes;
        this.dirty = true;
    }
    
    getBreakdown() {
        return { ...this.usage };
    }
    
    getTotal() {
        return Object.values(this.usage).reduce((a, b) => a + b, 0);
    }
}
```

**2. Periodic Sync**
```javascript
let syncInterval = setInterval(() => {
    tracker.sync();
}, 30000); // Every 30 seconds
```

**3. Beacon on Page Exit**
```javascript
window.addEventListener('beforeunload', () => {
    tracker.syncViaBeacon();
});

// Visibility change for tab switching
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        tracker.syncViaBeacon();
    }
});
```

**4. Retry Queue in Local Storage**
```javascript
class UsageTracker {
    // ...
    syncViaBeacon() {
        const data = JSON.stringify({
            usage: this.usage,
            userId: currentUserId,
            clientId: getClientId(),
        });
        
        const sent = navigator.sendBeacon('/api/usage/sync', data);
        
        if (sent && this.dirty) {
            // Mark for server confirmation
            this.pendingSync = { ...this.usage };
            this.dirty = false;
        }
    }
}
```

### Server-Side Sync Endpoint

```php
Route::post('/api/usage/sync', function (Request $request) {
    $data = $request->validate([
        'usage' => 'array',
        'userId' => 'nullable|exists:users,id',
        'clientId' => 'required|string',
    ]);
    
    $client = Client::where('identifier', $data['clientId'])->firstOrFail();
    
    foreach ($data['usage'] as $type => $bytes) {
        $client->usages()->create([
            'type' => $type,
            'bytes' => $bytes,
            'recorded_at' => now(),
        ]);
    }
    
    return response()->json(['synced' => true]);
});
```

### Deduplication and Data Integrity

Beacon requests have no response body, so you can't confirm server receipt. Implement:

**1. Sequence Numbers**
Include a monotonically increasing counter:
```javascript
{ seq: this.sequence++, usage: {...} }
```

Server rejects stale sequences:
```php
$lastSeq = $client->last_sync_seq ?? 0;
if ($seq <= $lastSeq) {
    return; // Already synced
}
```

**2. Time Windows**
Tag each sync with timestamp:
```javascript
{ window_start: '2024-12-01T00:00:00Z', usage: {...} }
```

**3. Idempotency Keys**
```javascript
{ idempotency_key: `${clientId}-${Date.now()}`, usage: {...} }
```

Server checks if key already processed.

### Handling Connectivity Loss

**Service Worker Cache**
For PWA capabilities, service workers intercept requests and can track offline usage accurately:
```javascript
self.addEventListener('fetch', (event) => {
    // Track request
    const bytes = event.request.headers.get('content-length');
    trackUsage(event.request.url, parseInt(bytes), 'resource');
    
    return fetch(event.request);
});
```

**Background Sync API**
```javascript
// Request background sync when online
if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then((registration) => {
        registration.sync.register('usage-sync');
    });
}
```

**Online/Offline Events**
```javascript
window.addEventListener('online', () => {
    // Flush any pending data immediately
    tracker.sync();
});
```

### Privacy and Compliance

Tracking user data transfers has privacy implications:
- **GDPR**: Byte tracking may be considered personal data if tied to user identities
- **Transparency**: Inform users you track data usage
- **Retention**: Define clear retention policies
- **Anonymization**: Aggregate for analytics, identify only for billing

### Integration with Analytics Dashboards

This usage data pairs well with [analytics dashboards](03-analytics-dashboard.md) for:
- Real-time bandwidth monitoring per client
- Predictive bandwidth scaling alerts
- Cost allocation for shared hosting environments

### Advanced: Measure Real Transfer Size

The `transferSize` from Navigation/Resource Timing APIs includes headers and body. For CDN-served content, this is the single most accurate source. For dynamically generated content, you may need to measure on the server and send it back to the client for aggregation.

### Conclusion

Your proposed architecture—periodic syncing, `sendBeacon` for exit events, and local storage for retries—is the correct approach. The key is:

1. **Track in memory** while the page is open
2. **Flush frequently** to reduce data loss
3. **Use `sendBeacon`** for reliable exit-time transmission
4. **Deduplicate server-side** using sequence numbers or idempotency keys
5. **Handle offline gracefully** with service workers and background sync

The implementation requires careful coordination between client and server, but it's the most robust solution for usage tracking in modern web applications.

---

## Related Posts

- [How to secure an API-generated video embed link and prevent user sharing](04-how-to-secure-an-api-generated-video-embed-link-and-prevent-.md) — Securing video delivery while tracking usage.
- [Analytics dashboard](03-analytics-dashboard.md) — Visualizing usage statistics for administrators.
- [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) — Using AI to analyze bandwidth usage patterns.
