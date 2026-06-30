---
title: Laravel Precog always returns success
author: brodenbrett
date: 2024-12-01
category: Code Review
views: 1200
replies: 8
---

> Original forum thread content:
> "I'm using a fresh install of Laravel, Inertia, and Vue. Here is my set up: // routes/web.php use App\Http\Requests\EmailRequest; use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests; use Illuminate\Support\Facades\Route; Route::inertia('/', 'Welcome')->name('home'); Route::post('/', function (EmailRequest $request) { dd(request()->all(), request()->"

## Debugging Laravel Precognitive Requests: Why "Always Success" Happens

brodenbrett's experience with Laravel Precog (precognitive requests) always returning success, even with invalid input, is a classic gotcha when implementing Inertia.js forms with validation. Understanding how precognitive requests work reveals why this happens and how to fix it.

### What Are Precognitive Requests?

Laravel's "HandlePrecognitiveRequests" middleware enables a UX pattern where you validate a form *before* the user submits it. When a user types into a form field, a POST request with a `_precognitive` token is sent. The server validates just that field and returns errors without processing the full form.

This gives instant feedback—like "this email is already taken"—before the user clicks submit.

### How Precognitive Requests Work

In Laravel, a precognitive request is a special POST request with the header:
```
x-http-method-override: PUT
```

This tricks Laravel into running validation without treating it as a full submission. The precognitive middleware intercepts these requests, runs validation, and returns a JSON response with errors if validation fails.

In your Inertia/Vue setup, the flow is:
1. User blurs input field
2. Inertia sends a precognitive POST
3. Laravel validates and returns JSON errors
4. Vue displays error messages

### Why Precog Always Returns Success in This Setup

**Issue 1: Missing Inertia Middleware**
Standard Laravel validation returns errors in a specific JSON structure. Inertia expects a different format. If the request isn't recognized as Inertia, validation errors may be thrown as exceptions rather than returned as JSON.

Ensure your routes are within the Inertia middleware group so validation errors render properly in your Vue components.

**Issue 2: Route Method Mismatch**
The precognitive request uses POST, but your Vue form might be configured to send to a PUT or PATCH endpoint. Ensure the HTTP method matches your route definition.

**Issue 3: EmailRequest Validation Rules**
Verify your `EmailRequest` actually has validation rules:
```php
class EmailRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'unique:users,email'],
        ];
    }
}
```

If the `email` rule is missing or improperly formatted, validation always passes.

**Issue 4: Testing with dd()**
Your `dd(request()->all(), request()->...)` dump stops execution. In a normal request, you'd see the data. In a precognitive request, the middleware may return the JSON error response before reaching your closure if validation fails. If you're seeing `dd()` output, the request is passing validation—but you may not be testing the right field.

### Debugging Steps

**1. Inspect the Network Request**
In Chrome DevTools > Network tab:
- Check the request method (should be POST)
- Check headers for `X-Requested-With: XMLHttpRequest` and `X-Inertia`
- Verify the `_precognitive` field is in the request body

**2. Check Response Headers**
A successful precognitive validation returns `Vary: X-Inertia` and status 200. A failed validation returns 422 with JSON errors.

**3. Use a Dedicated Controller**
Instead of a closure, use a controller method for better debugging.

**4. Check the Form Request Directly**
```php
Route::post('/', function (EmailRequest $request) {
    if ($request->failedValidation()) {
        Log::info('Validation failed', ['errors' => $request->errors()]);
    }
    Log::info('Validation passed', $request->all());
});
```

### Common Pitfalls with Inertia + Vue

**Forgotten CSRF Token**
Ensure your Vue app includes the CSRF token in Inertia requests through Laravel's built-in meta tag handling.

**Incorrect Form Configuration**
```javascript
const form = useForm({
    email: '',
});
// On blur: form.validate('email');
```

**Missing Inertia Validation Response**
Laravel's FormRequest automatically returns validation errors in Inertia's expected format. If the middleware is missing, errors may not render in Vue.

### Conclusion

The "always success" behavior usually means one of three things:
1. Validation rules aren't being applied (FormRequest misconfiguration)
2. The precognitive request isn't being recognized (middleware or method mismatch)
3. You're testing with valid data without realizing it

Use Laravel's built-in debugging tools—`$request->failedValidation()`, network inspection, and explicit error logging—to trace where the validation breakdown occurs. Inertia's powerful form handling works best when the middleware chain is properly configured.

---

## Related Posts

- [Database Session creates another record after logging out](09-database-session-creates-another-record-after-logging-out.md) — Form validation and testing nuances in Laravel.
- [Finance - Self-hosted personal finance tracking web app](13-finance-self-hosted-personal-finance-tracking-web-app.md) — Form handling for financial data entry.
- [How to review AI-generated code](02-how-to-review-ai-generated-code.md) — Validating AI-generated form logic and validation rules.
