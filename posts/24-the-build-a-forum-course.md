---
title: The Build A Forum Course
author: puzbie
date: 2024-12-01
category: Laravel
views: 1450
replies: 15
---

> Original forum thread content:
> "Hi, I want to dip my hands back into the more modern side of Laravel. My current sites are written in Laravel 4 and 5 and have been migrated up to Laravel 9 to keep them PHP-friendly. However, I thought it about time I took the plunge and got to grips with modern Laravel. I was going to follow the Build A Forum Course, but note that it is for Laravel 10 / 11. Would I run into m..."

## Migrating from Laravel 9 to Modern Laravel: Should You Follow the Build a Forum Course?

puzbie's situation—having apps on Laravel 4/5 migrated to 9, now wanting to learn modern Laravel 10/11—is a common "catch-up" journey. The Build a Forum Course is an excellent choice, but understanding the version gap helps set expectations.

### The Version Gap: Laravel 9 vs 10/11

Laravel 9 was released in February 2022. Since then, several significant changes have occurred:

**Key Changes from 9 to 10 (September 2023):**
- Native type declarations in all skeleton stubs
- Laravel Pennant for feature flags
- Process-driven scheduled tasks (`Process` facade)
- Improved `PendingColumn` in migrations
- Deprecation of some legacy helpers

**Key Changes from 10 to 11 (March 2024):**
- PHP 8.2 requirement (Laravel 9 still supports PHP 8.0/8.1)
- Simplified directory structure
- Removed `Route::middleware('auth')` from default `api` routes (moved)
- Slimmed framework skeleton
- Per-form `Request` classes default behavior changes
- Bootstrap to Vite in new apps (Laravel Breeze/Pennant)
- Better constructor property promotion support
- Removed `withTrashed()` from some relationships

### Should You Follow the Build a Forum Course?

**Short answer: Yes, absolutely.**

Even though the course targets Laravel 10/11, the patterns and concepts are broadly applicable. What you'll learn:
- Modern route organization
- Proper FormRequest usage
- Service container and dependency injection
- Event-driven architecture
- Modern testing approaches
- Inertia.js or Livewire integration

In modern frameworks, the "how" changes version-to-version, but the "why" (architectural principles) remains remarkably stable.

### Potential Issues You Might Encounter

**1. Type Hints**
Laravel 10+ stubs use strict type declarations:
```php
// Modern Laravel stubs
public function __construct(protected UserService $users) {}
```

Your existing code may not have these, but the course will use them. This is a good thing—type hints improve IDE support and catch bugs early.

**2. Vite Instead of Mix**
New Laravel apps use Vite. Frontend tooling is substantially different:
```bash
# Laravel 9
npm run dev # Runs Mix

# Laravel 10+
npm run dev # Runs Vite
```

Breeze and Jetstream now generate Vite configs.

**3. Configuration Changes**
Laravel 11 moved some configuration:
- `bootstrap/cache` path changes
- Service provider registration simplified
- Cache and database configuration may differ

**4. PHP Version**
Laravel 11 requires PHP 8.2+. If you're still on PHP 8.1, you'll need to upgrade.

### Learning Path Recommendations

**Phase 1: Modern Laravel Foundations (1-2 weeks)**
1. Install Laravel 11 fresh
2. Review the new directory structure
3. Update your PHP knowledge to PHP 8.2+ syntax (readonly classes, enums)
4. Explore Laravel Breeze/Pennant

**Phase 2: Build a Forum (4-6 weeks)**
Follow the Build a Forum course. Focus on:
- How routing is organized
- FormRequest usage patterns
- Event and listener design
- Testing strategy

**Phase 3: Migrate an Existing Project (1-2 weeks)**
Take one of your smaller apps and:
1. Upgrade to Laravel 10 first (Laravel 11 is a bigger jump)
2. Update Composer dependencies
3. Fix deprecations using Laravel Shift or manual updates

### Laravel Shift for Automated Upgrades

Consider using [Laravel Shift](https://laravelshift.com/) for automated upgrade PRs. It's a paid service but saves significant time:
- Upgrade from 9 to 10: ~$29
- Upgrade from 10 to 11: ~$29
- Upgrade from 4/5 directly to 11: Expensive, consider incremental

Shift provides:
- Automated code changes
- Upgrade instructions
- Identified breaking changes
- Conflict resolution guidance

### Specific Laravel 11 Changes to Watch For

**1. Configuration Caching**
Laravel 11 doesn't publish config files by default:
```bash
# In Laravel 11, config files live in the vendor directory
# To customize:
php artisan config:publish
```

**2. Routing**
All routes in Laravel 11 default to `routes/web.php` and `routes/api.php`. No more `routes/channels.php` for Laravel Reverb.

**3. Breeze Stubs**
Breeze now installs with simpler, modern Vue or React stacks by default.

**4. Testing**
Laravel 11 testing has improved traits and helpers:
```php
use Illuminate\Foundation\Testing\RefreshDatabase;

// RefreshDatabase now uses transactions by default for speed
```

### The Forum Project Architecture

A forum project teaches critical patterns:
- Multi-user authentication and authorization
- Nested comments/threads
- Notifications
- Real-time updates (Laravel Echo, WebSockets)
- Search indexing

These skills transfer directly to:
- [Yajra DataTables](22-yajra-datatables-questions.md) — for forum listing pages
- [Laravel Horizon](19-difficulty-scaling-laravel-horizon-across-multiple-instances-ecs.md) — for sending notifications
- [Laravel Octane](14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.md) — for scaling high-traffic forums

### Conclusion

The gap between Laravel 9 and 10/11 is significant but manageable. The Build a Forum course is an excellent investment because it covers architectural patterns that remain valid across versions.

Don't let the version gap stall your learning. Start with the course, using the official Laravel 10/11 documentation for any syntax you don't recognize. The ecosystem has evolved toward more type-safe, convention-based code, which is better for everyone.

---

## Related Posts

- [Laravel 13 + Sanctum + Fortify: API Routes Redirecting](20-laravel-13-sanctum-fortify-api-routes-redirecting.md) — Modern Laravel authentication patterns.
- [Yajra datatables questions](22-yajra-datatables-questions.md) — Displaying forum posts/responses efficiently.
- [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) — Using AI to bridge knowledge gaps during learning.
