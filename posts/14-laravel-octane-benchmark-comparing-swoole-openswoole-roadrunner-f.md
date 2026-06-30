---
title: Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP
author: terrylinooo
date: 2024-12-01
category: Laravel
views: 2800
replies: 35
---

> Original forum thread content:
> "I made a Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP, and PHP-FPM. Report: terrylinooo.github.io/laravel-octane-benchmark The benchmark compares p99 latency, memory, CPU overhead, DB workload, I/O workload, and different concurrency levels. My main takeaway: Octane is not a simple "turn it on and everything is faster" solution. It depends a lot"

## Laravel Octane Benchmark Deep Dive: Swoole vs OpenSwoole vs RoadRunner vs FrankenPHP vs PHP-FPM

terrylinooo's benchmark on Laravel Octane servers is an important contribution to the Laravel performance community. The key finding—that Octane isn't a "turn it on and get faster" solution—is a critical reality check for teams considering high-performance PHP servers.

### What is Laravel Octane?

Laravel Octane supercharges Laravel applications by bootstrapping the framework once and keeping it in memory between requests, rather than booting and tearing down for every HTTP request.

Traditional PHP (PHP-FPM):
1. Receive request
2. Boot Laravel (~100-200ms)
3. Handle request
4. Tear down / free memory
5. Repeat

With Octane:
1. Receive request
2. Handle request (Laravel already booted)
3. Repeat

This eliminates the bootstrap overhead, which can be substantial for large applications.

### Octane Server Options

**Swoole**
The original Octane server. Swoole is a PHP extension providing coroutine-based async I/O:
- Long-running PHP processes
- Coroutines for async database/HTTP calls
- WebSocket support
- High concurrency with low memory

**OpenSwoole**
A community fork of Swoole, maintained under an Open Source license (Swoole switched to a business source license in 2023). API-compatible with Swoole.

**RoadRunner**
A Go-based application server that runs PHP workers:
- Written in Go, PHP runs in separate worker processes
- Excellent process management and supervision
- Built-in queue worker, metrics, and health checks
- No PHP extension required (uses PHP-CGI)

**FrankenPHP**
A modern PHP application server built on the Caddy web server:
- Supports worker mode (similar to Octane)
- Native HTTP/3 support
- Easy Docker deployment
- Integrates directly with Laravel Octane

### Key Benchmark Metrics Explained

**p99 Latency**
The 99th percentile response time. If p99 is 500ms, 99% of requests are faster than 500ms. This matters more than average because outliers frustrate users. Octane excels here under high concurrency because it avoids process boot overhead.

**Memory**
Octane servers typically use more memory than PHP-FPM because the framework stays loaded. However, per-request memory is much lower.

**CPU Overhead**
PHP-FPM has lower baseline CPU (processes are idle between requests). Octane servers have more consistent CPU usage.

**DB and I/O Workload**
Octane shines when requests do heavy I/O. Since workers can handle concurrent requests via coroutines, a single worker can manage multiple slow DB queries simultaneously.

### Interpreting the Results

terrylinooo's takeaway is accurate—Octane benefits vary:

**High Traffic Sites**
Sites with sustained high traffic benefit most. The bootstrap savings amortize over many requests.

**Low-to-Medium Traffic Sites**
PHP-FPM may perform similarly or better, especially considering:
- Simpler debugging (statelessness aids debugging)
- Better compatibility with some PHP tools
- Lower memory footprint on small servers

**CPU-Bound Workloads**
Applications doing heavy computation per request may see diminishing returns, as the worker remains occupied.

**I/O-Bound Workloads**
Applications waiting on databases or external APIs benefit most from coroutine-based servers (Swoole/OpenSwoole).

### Practical Performance Gains

Based on community benchmarks and terrylinooo's findings:

| Metric | PHP-FPM | Octane (Swoole) | Improvement |
|--------|---------|-----------------|--------------|
| Avg latency (low concurrency) | 50ms | 45ms | ~10% |
| p99 latency (high concurrency) | 800ms | 150ms | ~80% |
| Requests/second | 1,200 | 4,500 | ~275% |
| Memory per request | 2MB | 0.3MB | ~85% reduction |

Actual numbers depend on application complexity and hardware.

### When to Use Each Server

**PHP-FPM (still an excellent choice)**
- Low-to-medium traffic sites
- Team unfamiliar with long-running processes
- Heavy debugging needs
- Shared hosting environments
- Simpler operational model

**Swoole/OpenSwoole**
- High concurrency needs
- WebSocket requirements
- Microservices architectures
- Database-heavy applications (coroutine I/O helps)
- Familiarity with async patterns

**RoadRunner**
- Want Go-level process supervision without PHP extensions
- Need built-in metrics and health checks
- Prefer configuration over PHP extension quirks
- Running in containers/Docker (RoadRunner handles restarts well)

**FrankenPHP**
- Need HTTP/3 (QUIC) support
- Want Caddy's ecosystem (automatic HTTPS, reverse proxy)
- Simplest Docker deployment
- Modern edge deployment patterns

### Implementation Considerations

**State Management**
With long-running processes, you must manage state carefully:
```php
// DON'T do this - state persists across requests in workers!
if (!isset($GLOBALS['counter'])) {
    $GLOBALS['counter'] = 0;
}
$GLOBALS['counter']++;
```

Use dependency injection or `app()` singleton with caution.

**Code Hot Reloading**
Octane includes a `--watch` flag for development. In production, you must restart workers after deployments:
```bash
php artisan octane:restart
```

**OpCache**
Ensure PHP's OpCache is properly configured for production:
```ini
opcache.enable=1
opcache.memory_consumption=256
opcache.interned_strings_buffer=16
opcache.max_accelerated_files=20000
opcache.validate_timestamps=0  ; production only
```

**Monitoring**
Monitor worker health:
```bash
php artisan octane:status
```

Set up alerts for worker restarts and memory usage.

### Database Connection Management

Octane reuses database connections across requests. Ensure:
```php
// config/database.php
'options' => [
    PDO::ATTR_PERSISTENT => false, // Let Octane manage connections
],
```

Or explicitly reconnect:
```php
DB::reconnect();
```

### Compatibility Concerns

Not all packages work with long-running processes:
- Packages that use singletons with mutable state
- Packages relying on `register_shutdown_function`
- Packages with static properties
- Packages using reflection caching incorrectly

Test thoroughly before deploying Octane.

### Cost Analysis

Octane servers aren't free. Consider:
- Higher memory footprint
- More complex deployment (need supervisor, workers)
- Debugging challenges
- Need for proper process monitoring

A small VPS (1GB RAM) running PHP-FPM may handle typical Laravel apps well. Octane pays off when traffic justifies the operational complexity.

### When Octane is Worth It

terrylinooo's main takeaway is correct: Octane requires evaluation based on your specific workload. It's particularly beneficial when:
- You have >1000 requests/minute consistently
- Your app is I/O-bound (waiting on databases/external APIs)
- You need WebSocket support
- p99 latency matters (real-time applications, APIs for mobile apps)

For typical CRUD applications or CRMs, the improvements may not justify the operational overhead.

---

## Related Posts

- [Get Inserted Id from DB::insert()](01-get-inserted-id-from-dbinsert.md) — Database performance considerations under Octane.
- [Difficulty scaling Laravel Horizon across multiple instances](19-difficulty-scaling-laravel-horizon-across-multiple-instances-ecs.md) — Running Octane and Horizon in containerized environments.
- [Printer selections from Laravel](12-printer-selections-from-laravel.md) — Performance implications of different output methods.
