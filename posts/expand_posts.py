#!/usr/bin/env python3
import json
import os
import glob

posts_dir = os.path.expanduser("~/posts")

# Read all current JSON files
json_files = sorted(glob.glob(os.path.join(posts_dir, "*.json")))

# Expansion map: filename -> {sections: [html], related: [(title, filename)]}
expansions = {
    "01-get-inserted-id-from-dbinsert.json": {
        "sections": [
            "<h2>Techniques for Retrieving Last Insert IDs with PDO</h2><p>When migrating from Eloquent to PDO for bulk inserts, one common concern is retrieving the auto-incremented ID of the last inserted row. With PDO, you can use <code>lastInsertId()</code> after executing an insert statement. However, for bulk inserts of multiple rows, <code>lastInsertId()</code> only returns the ID of the first row inserted in that statement. If you need all generated IDs, strategies include inserting in smaller batches and collecting IDs per batch, or using a staging table approach. For SOAP data imports, a common pattern is to insert records without capturing individual IDs immediately, then run follow-up queries to associate related data. Alternatively, if your database supports it (like PostgreSQL with <code>RETURNING</code>), you can retrieve all IDs in a single roundtrip. MySQL 8.0.19+ also supports <code>RETURNING</code> for DML statements, which can simplify this.</p>",
            "<h2>Batch Size and Memory Management</h2><p>Processing 100,000 records from a SOAP response requires careful memory management. Even with PDO, loading the entire SOAP response into memory at once can cause issues. PHP's XML parser (SimpleXML or DOM) can handle large files via streams, and you should consider processing records in chunks of 1,000 to 5,000 at a time.</p><pre><code>public function handle()\n{\n    $batchSize = 1000;\n    $records = $this->parseSoapInBatches($batchSize);\n    \n    foreach ($records as $batch) {\n        DB::transaction(function () use ($batch) {\n            $this->insertBatch($batch);\n        });\n    }\n    \n    $this->info('Import completed successfully.');\n}</code></pre><p>This ensures each batch is wrapped in its own transaction, preventing a single failure from rolling back the entire 100,000-record import. It also keeps memory usage predictable and allows for progress tracking and resumable imports if the process is interrupted.</p>",
            "<h2>Parallel Processing with Multiple Processes</h2><p>For extreme throughput, you can split the SOAP response into multiple files or segments and run several CLI processes in parallel. Laravel's task scheduling or system-level tools like GNU Parallel can coordinate this. Each process handles a subset of records, writing to the same database. Be mindful of database connection limits and consider using a queue system like Laravel Horizon to distribute the work across workers. See also <a href=\"14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.json\">Laravel Octane benchmark</a> for performance insights when processing high-volume jobs.</p>"
        ],
        "related": [
            ("Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP", "14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.json"),
            ("Upgrading from 13.6.1", "23-upgrading-from-13.6.1.json"),
            ("Yajra datatables questions", "22-yajra-datatables-questions.json")
        ]
    },
    "02-how-to-review-ai-generated-code.json": {
        "sections": [
            "<h2>Structured Review Workflows for AI Code</h2><p>Relying on AI agents to write both frontend and backend code introduces unique review challenges. Unlike human-written code, AI output can vary wildly in style and quality depending on the prompt. Establishing a structured review workflow helps maintain consistency and safety. One effective approach is the <strong>three-pass review</strong>: first pass checks for functional correctness, second pass reviews security and edge cases, and third pass focuses on maintainability and adherence to project standards.</p><p>For unfamiliar frameworks, pair AI-generated code with official documentation instantly. Use browser tools or web search to verify that the suggested patterns match current best practices. Many AI models train on stale documentation, so cross-referencing with official sources is critical.</p>",
            "<h2>Automated Checks as a Safety Net</h2><p>Before any human review, run automated checks to catch obvious issues. Laravel Pint for PHP style, ESLint for JavaScript, and static analysis tools like PHPStan can flag problems automatically. For AI-generated Vue or React components, ensure type safety with TypeScript where possible. Automated tests become even more important when the author is an AI: write failing tests first, let AI generate implementation, then verify tests pass. This is especially vital when learning new frameworks simultaneously.</p><p>Consider using AI itself for review: some teams run a second AI model to review code generated by the first, looking for inconsistencies or security issues. This meta-AI approach can catch subtle bugs that a single model might miss.</p>",
            "<h2>Documentation and Knowledge Preservation</h2><p>When reviewing code written by AI in unfamiliar frameworks, use the review process as a learning opportunity. Annotate the code with comments explaining why certain patterns were chosen, and document any adjustments made during review. This creates a knowledge base that helps future team members understand AI-authored codebases. Tools like GitHub Copilot Workspace or Cursor can maintain a conversation history that serves as implicit documentation, but explicit comments remain valuable.</p>",
            "<h2>Ethical and Legal Considerations</h2><p>AI-generated code may contain snippets from training data that carry licensing implications. When using AI to generate substantial portions of an application, consider the intellectual property aspects. Some organizations restrict AI use in production code pending clearer legal frameworks. Even if permitted, maintain a clear record of AI contributions for compliance purposes.</p>"
        ],
        "related": [
            ("AI Field guide page doesn't mark as complete the seen lessons", "17-ai-field-guide-page-doesnt-mark-as-complete.json"),
            ("Recently Started Paying for AI", "18-recently-started-paying-for-ai.json"),
            ("Database Session creates another record after logging out", "09-database-session-creates-another-record-after-logging-out.json")
        ]
    },
    "03-analytics-dashboard.json": {
        "sections": [
            "<h2>Laravel Analytics Packages Compared</h2><p>Spatie's Laravel Analytics package is a solid starting point for Google Analytics integration, but it only covers GA4. For multi-application monitoring, you might need additional sources: Mixpanel for product analytics, Sentry for error tracking, or Prometheus/Grafana for infrastructure metrics. Packages like <strong>Laravel Pulse</strong> (official Laravel) provide application-level insights out of the box, while <strong>Horizon</strong> gives deep visibility into queues.</p><p>For a unified dashboard, consider building an API layer that normalizes data from different sources. Each application sends metrics to your dashboard backend, which stores them in a time-series format. InfluxDB or TimescaleDB are excellent choices for this. The frontend can then use libraries like Chart.js, ApexCharts, or D3.js to render the data. If you need a self-hosted analytics platform, alternatives like Plausible or Umami exist, but for monitoring other applications, a custom aggregation layer often works best.</p>",
            "<h2>Data Aggregation Strategies</h2><p>Polling multiple applications for raw data is inefficient. Instead, push metrics from each application to a central store using webhooks, statsd, or a message queue. Laravel's event system makes this straightforward: each monitored application dispatches events like <code>OrderCompleted</code> or <code>JobProcessed</code>, and your dashboard listens and aggregates. This decouples the applications from the dashboard and scales better.</p><p>For historical data, pre-compute aggregates using scheduled commands. Materialized views in PostgreSQL or Laravel cache tags can store hourly/daily rollups. This ensures dashboard loads remain fast even when querying months of data.</p>",
            "<h2>Security and Multi-Tenancy</h2><p>If the dashboard monitors client applications, you need strong multi-tenancy. Each client should only see their own data. Use Laravel's built-in tenancy features or packages like Stancl/tenancy. API tokens should be scoped per client, and all queries must filter by tenant. Audit logging is also essential to track who accessed what metrics and when.</p>"
        ],
        "related": [
            ("FINANCE - Self-hosted personal finance tracking web app", "13-finance-self-hosted-personal-finance-tracking-web-app.json"),
            ("Issue with Embedding Custom Fonts in PDF using Spatie Browsershot", "15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.json"),
            ("Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP", "14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.json")
        ]
    },
    "04-how-to-secure-an-api-generated-video-embed-link-and-prevent-.json": {
        "sections": [
            "<h2>Signed URLs and Token-Based Access</h2><p>One of the most effective ways to prevent sharing is to use signed URLs with short expiration times. When the user clicks Watch Video, your backend generates a unique, cryptographically signed URL that expires after a few minutes. The URL can include the user's identifier and a timestamp, validated by your server or CDN before serving the video. Even if the user shares the link, it becomes useless after expiration.</p><p>Laravel's <code>URL::signedRoute()</code> or temporary signed URLs make this straightforward. For video streaming, you can use signed Storage URLs or configure your CDN (CloudFront, BunnyCDN) to validate signed requests. This approach shifts the trust from obscurity to cryptography, which is far more secure.</p>",
            "<h2>Watermarking and Forensic Tracking</h2><p>Beyond preventing sharing, you can deter it by embedding visible or invisible watermarks. Visible watermarks include the user's name or email overlaid on the video. Invisible watermarks use steganography to embed identifiers in the video stream, allowing you to trace leaks back to a specific user. Services like UIshare may offer built-in watermarking; if not, you can process the video server-side with tools like FFmpeg before delivery.</p><p>Combine watermarking with logging: record IP address, user agent, and playback events (pause, seek, fullscreen). This data helps detect abnormal behavior, like a single account being accessed from multiple geographic locations simultaneously.</p>",
            "<h2>HLS Encryption and DRM</h2><p>For high-value content, consider HLS with AES-128 encryption or full DRM (Widevine, FairPlay). HLS encryption encrypts each video segment with a key that your server delivers only to authorized users. DRM goes further, controlling playback through browser APIs and requiring licensed playback. While more complex to implement, these methods provide institutional-grade protection. Laravel packages like <code>pion/laravel-ffmpeg</code> can help with video processing, and services like Mux or Cloudflare Stream handle encryption and delivery at scale.</p>"
        ],
        "related": [
            ("Tracking transferred bytes on the client side?", "25-tracking-transferred-bytes-on-the-client-side.json"),
            ("Best SMTP server for ensuring bulk marketing emails reach the Gmail inbox", "07-best-smtp-server-for-bulk-marketing-emails-gmail-inbox.json"),
            ("Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP", "14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.json")
        ]
    },
    "05-ratelimiter-causing-mysql-deadlock-on-cache-access.json": {
        "sections": [
            "<h2>Understanding Laravel's RateLimiter Internals</h2><p>Laravel's <code>RateLimiter</code> uses the cache to store hit counts and expiration times. By default, it relies on the file or database cache driver. When using the database driver, Laravel creates a <code>cache</code> table and manages locks via database transactions. Deadlocks occur when two or more requests attempt to update the same cache keys simultaneously and MySQL, under the REPEATABLE READ isolation level, detects a cycle in the wait-for graph.</p><p>The cache database deadlock pattern is well-documented: one transaction deletes an expired key while another inserts a new hit count, and both hold locks the other needs. This is exacerbated under high concurrency, which is exactly what rate limiters are designed to handle.</p>",
            "<h2>Solutions and Workarounds</h2><p><strong>Switch to Redis or Memcached:</strong> The simplest fix is to use a non-relational cache driver that supports atomic operations. Redis handles concurrent increments safely with <code>INCR</code> and <code>EXPIRE</code>, eliminating deadlocks entirely. Laravel's Redis cache driver is production-ready and scales well.</p><p><strong>Use Laravel 11/12 improvements:</strong> Newer Laravel versions include better handling for cache locks and atomic operations. If you're on Laravel 10, consider upgrading or backporting the rate limiter logic.</p><p><strong>Reduce transaction scope:</strong> Ensure your rate limiter calls happen outside of long-running database transactions. The shorter the transaction, the less likely a deadlock.</p><p><strong>Custom rate limiter driver:</strong> For extreme control, write a custom rate limiter that uses Redis directly or leverages Laravel's atomic cache methods. See <a href=\"16-mysql-deadlock-on-cache-database.json\">MySql Deadlock on Cache Database</a> for a related discussion.</p>"
        ],
        "related": [
            ("MySql Deadlock on Cache Database", "16-mysql-deadlock-on-cache-database.json"),
            ("Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP", "14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.json"),
            ("Difficulty scaling Laravel Horizon across multiple instances (ECS / Auto Scaling)", "19-difficulty-scaling-laravel-horizon-across-multiple-instances-ecs.json")
        ]
    },
    "06-laravel-cashier-the-resource-id-cannot-be-null-or-whitespace.json": {
        "sections": [
            "<h2>Laravel Cashier and Stripe Integration Basics</h2><p>Laravel Cashier provides an expressive, fluent interface to Stripe's billing services. It handles subscriptions, invoices, payment methods, and webhooks. The error \"The resource ID cannot be null or whitespace\" typically originates from Stripe's PHP SDK when it expects a valid customer or payment method ID but receives an empty value.</p><p>Common causes include: <code>createOrGetStripeCustomer()</code> not returning a Stripe customer ID because the Stripe API call failed silently; <code>$request->paymentMethod</code> being null or empty; or the user model not having the <code>stripe_id</code> column populated. Always verify that the Stripe customer exists on Stripe's dashboard before attaching payment methods.</p>",
            "<h2>Debugging Steps</h2><p>First, check your database: does the <code>users</code> table have a non-null <code>stripe_id</code> for the current user? If not, <code>createOrGetStripeCustomer()</code> may have failed. Wrap Stripe calls in try-catch blocks to surface errors. Second, ensure your Stripe keys are correct and your account is in live or test mode consistently. Third, verify that the <code>paymentMethod</code> field is actually being sent from the frontend. Inertia or Vue forms sometimes fail to serialize payment method tokens correctly.</p><p>Logging is your friend: use Laravel's <code>Log::info()</code> to dump the user's Stripe ID and payment method before calling Cashier. If you're using Stripe Elements, confirm that the <code>payment_method</code> parameter is included in the request payload.</p>"
        ],
        "related": [
            ("Laravel 13 + Sanctum + Fortify: API Routes Redirecting", "20-laravel-13-sanctum-fortify-api-routes-redirecting.json"),
            ("Database Session creates another record after logging out", "09-database-session-creates-another-record-after-logging-out.json"),
            ("Best SMTP server for ensuring bulk marketing emails reach the Gmail inbox", "07-best-smtp-server-for-bulk-marketing-emails-gmail-inbox.json")
        ]
    },
    "08-laravel-precog-always-returns-success.json": {
        "sections": [
            "<h2>How Laravel Precognition Works</h2><p>Laravel Precognition allows you to validate incoming requests without persisting changes to the database. It's designed for Inertia.js applications where the frontend needs to validate form inputs before navigating away. The <code>HandlePrecognitiveRequests</code> middleware intercepts the request and returns validation errors without executing the controller logic.</p><p>If Precognition always returns success, the most likely issue is that the middleware is not registered or the request headers are not being set correctly. Inertia's <code>useForm</code> helper handles Precognition automatically, but manual AJAX requests need to include the <code>Precognition</code> header set to <code>true</code>. Verify with browser dev tools that the header is present.</p>",
            "<h2>Testing Precognition Manually</h2><p>To test Precognition outside of Inertia, send a POST request with the <code>Precognition: true</code> header. Your Laravel application should respond with validation errors if present, or a 200 status with an empty body if validation passes. If you're always getting 200, your form request's <code>rules()</code> method may be returning empty or your validation is bypassed. Check that the request is actually reaching the Form Request and not being short-circuited by another middleware.</p><p>See <a href=\"09-database-session-creates-another-record-after-logging-out.json\">Database Session creates another record after logging out</a> for related Laravel testing behavior.</p>"
        ],
        "related": [
            ("Database Session creates another record after logging out", "09-database-session-creates-another-record-after-logging-out.json"),
            ("Yajra datatables questions", "22-yajra-datatables-questions.json"),
            ("Upgrading from 13.6.1", "23-upgrading-from-13.6.1.json")
        ]
    },
    "09-database-session-creates-another-record-after-logging-out.json": {
        "sections": [
            "<h2>Laravel Session Driver Behavior</h2><p>Laravel's session configuration determines how sessions are stored and invalidated. When using the <code>database</code> driver, Laravel stores session data in a <code>sessions</code> table. The <code>Session</code> model (if you created one) is unrelated to Laravel's internal session handling unless you explicitly bound it. Creating a custom <code>Session</code> model in your <code>App\\Models</code> namespace can cause confusion and conflicts with Laravel's core session management.</p><p>When a user logs out via Laravel Fortify, the session should be invalidated and the database record deleted. If a new record appears, it's likely that session regeneration is creating a new session ID but the old session record is not being properly garbage-collected. Ensure your <code>sessions</code> table has a proper index on the <code>id</code> column and that the session lifetime configuration matches your application's needs.</p>",
            "<h2>Testing Session Behavior with RefreshDatabase</h2><p>In tests, <code>RefreshDatabase</code> migrates your database before each test, which can interfere with session assertions. If you're testing logout behavior, consider using <code>DatabaseTransactions</code> instead, or assert against the session store directly. Sometimes the issue is that your test is not actually logging out through Fortify's controller but through a custom route that bypasses session invalidation.</p><p>Make sure your <code>SessionControllerTest</code> uses the correct middleware and that the user is authenticated before attempting logout. Check that Fortify's logout response is not redirecting before the session is fully cleared.</p>"
        ],
        "related": [
            ("Laravel 13 + Sanctum + Fortify: API Routes Redirecting", "20-laravel-13-sanctum-fortify-api-routes-redirecting.json"),
            ("Laravel Precog always returns success", "08-laravel-precog-always-returns-success.json"),
            ("Database Session creates another record after logging out", "09-database-session-creates-another-record-after-logging-out.json")
        ]
    },
    "10-in-app-browsers-socialite-wgoogle-access-blocked.json": {
        "sections": [
            "<h2>Google's Secure Browser Policy</h2><p>Google OAuth enforcement of \"secure browser\" policies began in earnest with Chrome 113+. In-app browsers (UIWebView, WKWebView, WebView on Android) are often blocked because they don't pass the <strong>Sec-CH-UA</strong> client hints or have outdated SSL/TLS stacks. Google requires a \"modern browser\" context for OAuth consent screens to prevent clickjacking and session fixation attacks.</p><p>Apple's <code>SFSafariViewController</code> and ASWebAuthenticationSession are generally accepted because they share the cookie store and security properties of Safari. However, generic WebView components in React Native, Flutter, or Cordova typically fail. The error message \"Access Blocked\" is generic; the underlying issue is usually the <code>User-Agent</code> or missing browser features.</p>",
            "<h2>Solutions for Mobile OAuth</h2><p><strong>Use native OAuth libraries:</strong> Instead of Socialite in a WebView, use native SDKs (Google Sign-In for iOS/Android). They handle token exchange outside the browser context and are explicitly trusted by Google.</p><p><strong>Use AppAuth for Android/iOS:</strong> This open-source library implements the OAuth 2.0 and OpenID Connect standards with best practices. It uses the system browser (Chrome Custom Tabs on Android, SFAuthenticationSession on iOS), which Google accepts.</p><p><strong>Laravel configuration:</strong> Ensure your Socialite Google client is configured with the correct package name and SHA-1 fingerprints for Android, and bundle ID and team ID for iOS. Google's OAuth consent screen must list the app as an Android/iOS app, not just a web application.</p><p>See <a href=\"20-laravel-13-sanctum-fortify-api-routes-redirecting.json\">Laravel 13 + Sanctum + Fortify: API Routes Redirecting</a> for authentication flow design.</p>"
        ],
        "related": [
            ("Laravel 13 + Sanctum + Fortify: API Routes Redirecting", "20-laravel-13-sanctum-fortify-api-routes-redirecting.json"),
            ("In-app browsers Socialite w/Google Access Blocked", "10-in-app-browsers-socialite-wgoogle-access-blocked.json"),
            ("Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP", "14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.json")
        ]
    },
}



