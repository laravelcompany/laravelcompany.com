---
title: Laravel 13 + Sanctum + Fortify: API Routes Redirecting
author: DBoman
date: 2024-12-01
category: Laravel
views: 1600
replies: 10
---

> Original forum thread content:
> "I'm working on a web app that has a first-party SPA for the front-end and will use Laravel as an API for the backend, and I'm trying to get Sanctum set up to support authentication for the SPA. I'm using Fortify to manage authentication. I'm using the Laravel router for web as well as API, but it seems like I've done something wrong because when I try to..."

## Fixing Laravel 13 + Sanctum + Fortify SPA Authentication Redirects

DBoman's issue with API routes redirecting instead of returning JSON is a common configuration problem when combining Laravel Sanctum and Fortify for SPA authentication. This guide explains how the pieces fit together and how to configure them correctly.

### How Sanctum SPA Authentication Works

Sanctum offers two authentication modes:

**1. SPA Mode**
Your Laravel app and SPA share the same top-level domain (e.g., `api.yourapp.com` and `app.yourapp.com`). Authentication uses Laravel's session cookies.

Flow:
1. User visits SPA → redirected to Laravel login page
2. User logs in via Fortify → session cookie set
3. SPA sends authenticated API requests → cookie sent automatically
4. Sanctum's `EnsureFrontendRequestsAreStateful` middleware validates the session

**2. Token Mode**
SPA is served from a different domain. Users receive bearer tokens for API authentication.

DBoman's SPA is first-party (same domain family), so **SPA mode** is the correct approach.

### The Redirect Problem

If API routes are redirecting to `/login` or returning HTML, it means:

**1. The User is Not Authenticated**
Sanctum's `auth:api` middleware or Fortify's `auth:sanctum` middleware is rejecting the request and redirecting to login.

**2. Cookie/Session Issues**
- The session cookie isn't being sent
- The cookie domain/secure flags don't match

**3. Wrong Middleware Group**
API routes may be in the `api` middleware group (which expects tokens) instead of `web` (which uses sessions).

**Fix: Use `auth:sanctum` with `ensureFrontendRequestsAreStateful`:**
```php
Route::middleware([
    'web',
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
```

### Step-by-Step Configuration for Laravel 13

**1. Sanctum Installation**
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

**2. Fortify Installation**
```bash
composer require laravel/fortify
php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
php artisan migrate
php artisan fortify:install
```

**3. Configure Sanctum**
In `config/sanctum.php`:
```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,127.0.0.1,yourdomain.com')),
'guard' => ['web'],
'middleware' => [
    'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
],
```

**4. Configure Fortify**
In `config/fortify.php`:
```php
'guard' => 'web',
'passwords' => 'users',
'limiters' => [
    'login' => 'login',
    'two-factor' => 'two-factor',
],
```

### API Route Configuration

The critical part is ensuring SPA-authenticated API routes use the `web` middleware stack:

```php
// routes/api.php
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
```

And in `bootstrap/app.php`:
```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->api([
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        Illuminate\Routing\Middleware\SubstituteBindings::class,
    ]);
})
```

### SPA Configuration (Vue/Inertia Example)

If using Inertia.js:
```php
// routes/web.php
Route::get('/{any}', function () {
    return Inertia::render('App');
})->where('any', '.*')->middleware('auth');
```

Your frontend must send cookies:
```javascript
axios.defaults.withCredentials = true;
```

### Debugging Authentication Flow

**1. Check Session Cookie**
In browser DevTools > Application > Cookies:
- `laravel_session` should be present
- Domain should match your API domain
- `Secure` flag should be set (HTTPS only)
- `SameSite` should be `lax` or `strict`

**2. Check CSRF Token**
SPA mode requires CSRF protection:
```javascript
// In your JS bootstrap
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content;
```

**3. Inspect Actual Request**
In Network tab:
- Request should include `Cookie: laravel_session=...`
- Response should be 401 (if redirecting, check middleware)

**4. Test Sanctum Directly**
```bash
curl -X POST http://your-app.com/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}' \
  -c cookies.txt
```

Then test authenticated:
```bash
curl http://your-app.com/api/user \
  -b cookies.txt
```

If this works, the issue is in your SPA's cookie handling, not Sanctum.

### Session Configuration

In `config/session.php`:
```php
'domain' => env('SESSION_DOMAIN', '.yourdomain.com'), // Leading dot for subdomains
'secure' => env('SESSION_SECURE', true), // true in production
'same_site' => 'lax', // or 'strict'
```

### CORS Configuration

Sanctum uses CORS middleware. In `config/cors.php`:
```php
'paths' => ['api/*', 'login', 'logout'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:5173', 'https://app.yourdomain.com'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => true, // Critical for cookies
```

### Testing in Postman/Insomnia

When testing API authentication manually:
1. Login via POST `/login`
2. Copy the `Set-Cookie` header from the response
3. Include it in subsequent requests
4. Alternatively, use the session ID directly

### Fortify + Sanctum Integration

Fortify provides the login controller; Sanctum provides the authentication middleware. They work together when configured correctly:

```php
// Fortify's login controller handles authentication
// Sanctum's EnsureFrontendRequestsAreStateful validates subsequent requests

// routes/web.php
Route::post('/login', Fortify::authenticateUsing(function (Request $request) {
    // ...
}));
```

### Conclusion

The most common cause of API redirects when using Sanctum + Fortify for SPA is **incorrect middleware configuration**. Ensure your API routes go through `auth:sanctum` and that the `EnsureFrontendRequestsAreStateful` middleware is properly registered.

Validate by checking cookies in the browser and testing the session flow manually. Once the middleware chain is correct, Sanctum seamlessly bridges session-based auth with API routes.

---

## Related Posts

- [Database Session creates another record after logging out](09-database-session-creates-another-record-after-logging-out.md) — Session behavior in Laravel's auth system.
- [In-app browsers Socialite w/Google Access Blocked](10-in-app-browsers-socialite-w-google-access-blocked.md) — Social authentication flows for SPAs.
- [Difficulty scaling Laravel Horizon across multiple instances](19-difficulty-scaling-laravel-horizon-across-multiple-instances-ecs.md) — Auth issues in horizontally scaled Laravel deployments.
