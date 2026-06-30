---
title: Database Session creates another record after logging out
author: Chron
date: 2024-12-01
category: Testing
views: 1100
replies: 6
---

> Original forum thread content:
> "I'm using Laravel w/ Fortify Here's my test: <?php namespace Tests\Feature\Http\Controllers; use App\Models\Session; use App\Models\User; use Illuminate\Foundation\Testing\RefreshDatabase; use Illuminate\Foundation\Testing\WithFaker; use Illuminate\Foundation\Testing\WithoutMiddleware; use Tests\TestCase; class SessionControllerTest extends TestCase { use RefreshData..."

## Debugging Laravel Session Tests: Why Extra Session Records Appear

Chron's observation that database sessions create an extra record after logout is a common testing artifact that reveals how Laravel's session handling interacts with the database driver. This post explains the session lifecycle, why tests behave this way, and how to write clean session tests with Fortify.

### How Laravel Database Sessions Work

Laravel's `database` session driver stores session data in a single `sessions` table. The session lifecycle:

1. **Session Start**: A session ID is created (or retrieved from cookie)
2. **Session Update**: After each request, session data is written to the database with an expiration
3. **Session Regenerate**: On login, Laravel calls `regenerate()` to prevent session fixation attacks
4. **Session Destroy**: On logout, the session record is deleted

### Expected vs. Observed Behavior

In normal operation, after logout, the session record is deleted. However, in tests with `RefreshDatabase`, you might see:
- Test creates user → session created
- User logs in → session regenerated (new record)
- User logs out → session destroyed (old record deleted)
- Test ends → database refreshed

If you see "another record" appearing, it's likely due to one of these patterns:

**Pattern 1: The Logout Request Creates a Session First**
The logout request itself starts a session *before* the `Logout` action runs:
```php
// POST /logout
// 1. Session middleware starts session → inserts session row
// 2. Auth middleware processes logout → destroys session
// 3. Result: 2 session records (initially)
```

After step 3, only the new session (if any) remains. But if your test queries mid-request, you'll see the intermediate state.

**Pattern 2: Remember Me Cookies**
If "remember me" is enabled, Laravel creates a *new* session during logout to establish the "remember me" cookie:
```php
// Logout() in AuthenticateSession middleware
$request->session()->invalidate();
$request->session()->regenerateToken();

// But if "remember me" is active:
$rememberToken = $user->generateRememberToken();
// This may trigger a session write
```

**Pattern 3: Middleware Order**
The `WithoutMiddleware` trait can cause unexpected behavior:
```php
class SessionControllerTest extends TestCase
{
    use WithoutMiddleware; // This disables ALL middleware
}
```

Without the session middleware running, session behavior won't match production. Remove `WithoutMiddleware` for session-related tests, or selectively disable only what you need.

### Writing Correct Session Tests

**The Right Approach**
```php
public function test_user_can_logout()
{
    $user = User::factory()->create();
    
    $this->actingAs($user);
    
    $response = $this->post('/logout');
    
    $response->assertRedirect('/');
    
    // Session count should be 0 or 1 (new empty session)
    $this->assertDatabaseCount('sessions', function ($query) {
        return $query->where('user_id', $user->id)->count() <= 1;
    });
}
```

**Testing with Fortify**
Fortify's logout route is typically:
```php
// routes/web.php
Route::post('/logout', function (Request $request) {
    Auth::guard('web')->logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/');
})->middleware('auth')->name('logout');
```

The `invalidate()` call destroys the session and removes the database record.

### Investigating the Extra Record

Add logging to understand what's happening:
```php
public function test_debug_logout()
{
    $user = User::factory()->create();
    $this->actingAs($user);
    
    $initialCount = DB::table('sessions')->count();
    
    $response = $this->post('/logout');
    
    $finalCount = DB::table('sessions')->count();
    
    dump("Initial: $initialCount, Final: $finalCount");
    dump(DB::table('sessions')->get());
}
```

Look for `user_id` in the session payload. Laravel stores the user ID in the session when authenticated:
```json
{
    "login_web_xxx": true,
    "user_id": 1
}
```

If the user ID persists after logout, the session wasn't properly invalidated.

### Session Configuration Checks

Verify `config/session.php`:
```php
'driver' => env('SESSION_DRIVER', 'database'),
'expire_on_close' => false,
'encrypt' => true, // or false, but be consistent
'lifetime' => 120,
```

And ensure your `.env`:
```env
SESSION_DRIVER=database
```

### Common Test Database Issues

**RefreshDatabase Trait**
The `RefreshDatabase` trait wraps each test in a transaction (or migrates fresh). If you're seeing persistent records across tests, ensure:
- You're using the trait correctly
- No manual database commits are interfering
- Foreign key constraints aren't preventing cleanup

**Session Table Migration**
Ensure your migration creates the table correctly:
```php
Schema::create('sessions', function (Blueprint $table) {
    $table->string('id')->primary();
    $table->foreignId('user_id')->nullable()->index();
    $table->string('ip_address', 45)->nullable();
    $table->text('user_agent')->nullable();
    $table->text('payload');
    $table->integer('last_activity');
});
```

### Testing Authentication State After Logout

To verify logout worked, test that authentication is cleared:
```php
public function test_user_is_logged_out()
{
    $user = User::factory()->create();
    $this->actingAs($user);
    
    $this->post('/logout');
    
    $this->assertGuest();
    $this->assertFalse(Auth::check());
}
```

### Why This Matters for Production

While this is a testing quirk, understanding session lifecycle is important because:
- Logout bugs can leave sessions dangling, creating security risks
- Session store bloat affects database performance (similar to [RateLimiter causing MySQL deadlock](05-ratelimiter-causing-mysql-deadlock-on-cache-access.md))
- Proper invalidation ensures user credentials can't be reused

### CI/CD Considerations

In continuous integration, ensure:
- Session tests are isolated (after each test, sessions should be clean)
- Cache/session drivers match production as closely as possible
- Use `RefreshDatabase` rather than manual cleanup

### Conclusion

The extra session record after logout is usually a test-time observation of the request lifecycle, not a bug in logout itself. The logout middleware invalidates the session, but the request that triggered logout initially creates the session row.

To debug:
1. Remove `WithoutMiddleware` from session tests
2. Check Fortify's actual logout route implementation
3. Use `assertGuest()` to verify functional correctness
4. Inspect database at each step to understand the lifecycle

---

## Related Posts

- [Laravel Precog always returns success](08-laravel-precog-always-returns-success.md) — Form handling and validation in Laravel, also relevant to testing.
- [Laravel 13 + Sanctum + Fortify: API Routes Redirecting](20-laravel-13-sanctum-fortify-api-routes-redirecting.md) — Authentication issues with Fortify.
- [Database Session creates another record after logging out](09-database-session-creates-another-record-after-logging-out.md) — Testing database interactions.
- [RateLimiter causing MySQL deadlock on cache access](05-ratelimiter-causing-mysql-deadlock-on-cache-access.md) — Database-driven session and cache management.
