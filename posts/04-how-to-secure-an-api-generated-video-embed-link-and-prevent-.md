---
title: "How to secure an API-generated video embed link and prevent user sharing?"
author: Shivamyadav
date: 2024-12-01
category: Feedback
views: 2100
replies: 18
---

> Original forum thread content:
> "The Workflow User pays on clients website and redirects to a watch page on the Client's website. User clicks a "Watch Video" button. The button triggers an API call to Our Main Website. Our backend saves the user's ID/Email to our database, requests an embed link from UIshare, and returns it to the client's frontend. The Problem If our backend returns a standard, stat..."

## Securing API-Generated Video Embed Links: Strategies Beyond Simple Tokens

Shivamyadav describes a video monetization flow that's common in online education and premium content platforms: paying customers receive an embeddable video link that should remain tied to their purchase. The challenge—preventing users from sharing that link—is one of the hardest problems in DRM (Digital Rights Management).

### Understanding the Threat Model

Before selecting a technical solution, understand what "sharing prevention" actually means:

**What you can prevent:**
- Casual sharing (users sharing links without understanding implications)
- Direct embedding on unauthorized domains
- Screenshotting and screen recording (to some degree)

**What you cannot prevent:**
- A determined user with screen capture software
- A user pointing a camera at their screen
- Re-hosting the video file if they can download it

The goal is to raise the bar high enough that sharing becomes impractical, not impossible.

### The Problem with Simple embeds

Returning a standard, static embed URL from your API has several weaknesses:

1. **Link persistence**: The URL can be copied and pasted anywhere
2. **No domain restriction**: The video can be embedded on any site
3. **Foreachable**: Once shared, the link remains valid until revoked
4. **No session binding**: Any browser with the link can view the content

### Secure Token-Based Approaches

**1. Signed, Expiring URLs**
Generate time-limited URLs using HMAC signing:

```php
$url = URL::temporarySignedRoute(
    'video.watch',
    now()->addMinutes(30),
    ['video' => $videoId, 'user' => $userId]
);
```

This creates a URL with an embedded signature and expiration. After 30 minutes, it becomes invalid.

**2. One-Time-Use Tokens**
For enhanced security, generate tokens that can only be used once:

```php
// Database table: video_tokens
// Columns: token, user_id, video_id, used_at, expires_at

$token = Str::random(64);
DB::table('video_tokens')->insert([
    'token' => hash('sha256', $token),
    'user_id' => $userId,
    'video_id' => $videoId,
    'expires_at' => now()->addHours(2),
]);
```

When the watch page is requested, validate and mark the token as used. This prevents link sharing because the second viewer gets an error.

**3. IP + Session Binding**
Tie the token to the user's IP address or session:

```php
$tokenData = DB::table('video_tokens')
    ->where('token', $request->token)
    ->where('user_id', $request->user()->id)
    ->where('ip_address', $request->ip())
    ->first();
```

This raises the bar slightly but can frustrate legitimate users with changing IPs (mobile networks, VPNs).

### Domain Restriction

Most video hosting services (including UIshare, Vimeo, Mux, Cloudflare Stream) support domain-level restrictions. Configure your embed to only work on specific domains:

```json
{
  "allowed_domains": [
    "client-website.com",
    "www.client-website.com"
  ]
}
```

This is probably the most effective single measure. Even if a user copies the embed code, it won't play on their personal website.

### Video Hosting Solutions with Built-in Security

Rather than building security yourself, use a video platform with robust access controls:

**Mux**
- Signed URLs with expiration
- Domain restrictions
- playback IDs that can be rotated
- Per-user signing keys

**Cloudflare Stream**
- Signed URLs
- Geo-restriction
- Domain lock

**Vimeo OTT / Vimeo Enterprise**
- Domain-level privacy
- Password protection
- Unlisted links (but shareable)

**AWS CloudFront + S3**
- Signed cookies or signed URLs
- Geographic restrictions
- Referrer header checking

The key is that the video file itself is never directly accessible; the hosting provider enforces the access rules at the CDN level.

### The UIshare Embed Problem

If you're using UIshare specifically, investigate their API for creating "signed" or "private" embeds. Many providers offer:

- **Signed embeds**: URLs that expire or require a signature
- **Player tokens**: Short-lived tokens passed to the player JavaScript
- **Domain allowlisting**: Embedded players only work on registered domains

If UIshare doesn't support these features, you may need to proxy the video through your own server—though this increases bandwidth costs significantly.

### Client-Side Considerations

The client's "Watch Video" button triggers the API call. The returned embed code is then rendered in the frontend. To enhance security:

1. **Use iframe sandbox attributes**:
   ```html
   <iframe src="..." sandbox="allow-scripts allow-same-origin"></iframe>
   ```

2. **Avoid caching the API response**: Ensure the embed link isn't cached by browsers or CDNs.

3. **Monitor for abuse**: Log when tokens are used and flag unusual patterns (multiple IPs, rapid token generation).

### The Analytics Trade-off

Security measures impact your ability to track usage. Expiring URLs mean you can't track long-term watch time through the video host's analytics. Consider:

- Tracking video start/stop events through JavaScript events on your own site
- Using your own video player with analytics hooks
- Syncing tracking data with [usage tracking strategies](25-tracking-transferred-bytes-on-the-client-side.md)

### Preventing Download and Redistribution

Even with perfect link security, users can still:
- Use browser developer tools to find the video file URL
- Use screen recording software
- Capture the video with external hardware

To mitigate:

1. **Use HLS or DASH streaming**: Video is delivered in chunks, making it harder to download as a single file.
2. **Enable DRM**: Widevine and FairPlay provide encryption, though this requires a specialized player and licensing.
3. **Watermarking**: Overlay the user's email or ID on the video as a forensic deterrent.
4. **Legal terms**: Clear terms of service and copyright notices.

### Recommended Architecture for Your Use Case

Based on your described workflow, a practical high-security approach:

1. **Payment triggers token generation**: After successful payment, create a unique video token.
2. **Token stored with user/video association**: Record in your database.
3. **One-time use**: Mark token as used when the watch page loads.
4. **Short expiration**: 2-4 hours maximum.
5. **Domain check**: Verify the HTTP `Referer` header on the video serve endpoint.
6. **IP logging**: Store the IP that used the token.
7. **Abuse detection**: Alert on unusual patterns (same token from multiple IPs).

On the frontend:
```javascript
async function loadVideo() {
    const response = await fetch('/api/get-embed-link', {
        method: 'POST',
        headers: { 'X-CSRF-TOKEN': csrfToken }
    });
    const { embed_code } = await response.json();
    document.getElementById('video-container').innerHTML = embed_code;
}
```

### Conclusion

No solution is perfect, but combining signed/one-time tokens, domain restrictions, and a secure video host dramatically reduces unauthorized sharing. The goal is to make sharing inconvenient enough that most users don't bother, while keeping the legitimate viewing experience smooth.

If you're serious about content protection, consider whether a self-hosted solution is worth the complexity versus using a managed service with built-in DRM capabilities.

---

## Related Posts

- [Tracking transferred bytes on the client side](25-tracking-transferred-bytes-on-the-client-side.md) — Strategies for tracking and billing based on actual data usage.
- [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) — AI tools that can help monitor and analyze video access patterns.
- [Analytics dashboard](03-analytics-dashboard.md) — Building dashboards to monitor video access and engagement metrics.
