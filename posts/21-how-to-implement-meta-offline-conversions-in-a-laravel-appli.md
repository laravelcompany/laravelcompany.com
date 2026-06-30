---
title: How to implement Meta Offline Conversions in a Laravel application?
author: ismaelaek
date: 2024-12-01
category: Laravel
views: 1400
replies: 9
---

> Original forum thread content:
> "I have a leads management CRM, and I want to add the feature to enhance the leads quality via Meta and Google ads, and I couldn't find a real example on Google or Youtube. I tried to use facebook/business-php-sdk, but I prefer to not use any 3rd party package, can any one with a previous experience help me with that?"

## Implementing Meta Offline Conversions in Laravel: A No-Third-Party-Package Guide

ismaelaek wants to implement Meta Offline Conversions API in a Laravel CRM without relying on third-party SDKs. This is achievable using raw HTTP requests and Meta's documented API endpoints. This guide covers the complete implementation.

### What Are Meta Offline Conversions?

Meta's Offline Conversions API allows you to send conversion events from your CRM or offline systems directly to Meta's servers. This enables:
- Better ad optimization based on actual sales
- Custom audience creation for re-targeting
- Attribution tracking from ads to leads

Common events:
- `Purchase`
- `Lead`
- `CompleteRegistration`
- `AddToCart`
- `InitiateCheckout`

### Prerequisites

**Meta Business Account**
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create or select your business
3. Create a data source (Offline Event Set)
4. Configure data source rules and get your access token

**Required Permissions**
- `ads_management`
- `business_management`
- `ads_read`
- `offline_conversions` (may require business verification)

### API Endpoint

Meta's Offline Conversions API uses Graph API:
```
POST https://graph.facebook.com/v19.0/<EVENT_SET_ID>/events
```

With access token in query string or body:
```
access_token=<ACCESS_TOKEN>
```

### Request Format

```json
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1703001234,
      "action_source": "physical_store",
      "user_data": {
        "em": "sha256_hash_of_email",
        "ph": "sha256_hash_of_phone",
        "fn": "sha256_hash_of_first_name",
        "ln": "sha256_hash_of_last_name",
        "ct": "sha256_hash_of_city",
        "st": "sha256_hash_of_state",
        "zp": "sha256_hash_of_zip",
        "country": "sha256_hash_of_country"
      },
      "custom_data": {
        "currency": "USD",
        "value": 125.50
      },
      "event_source_url": "https://your-crm.com/purchase/123"
    }
  ]
}
```

**Critical**: `user_data` values must be SHA256 hashes of normalized (lowercase, trimmed) values.

### Laravel Implementation Without SDK

**Service Class**
```php
namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MetaOfflineConversions
{
    protected string $accessToken;
    protected string $eventSetId;
    protected string $apiVersion;
    
    public function __construct()
    {
        $this->accessToken = config('services.meta.access_token');
        $this->eventSetId = config('services.meta.event_set_id');
        $this->apiVersion = config('services.meta.api_version', 'v19.0');
    }
    
    public function sendPurchase(array $lead, float $value = 0): bool
    {
        $payload = [
            'data' => [
                [
                    'event_name' => 'Purchase',
                    'event_time' => now()->timestamp,
                    'action_source' => 'website',
                    'user_data' => $this->hashUserData($lead),
                    'custom_data' => [
                        'currency' => 'USD',
                        'value' => $value,
                    ],
                ]
            ],
        ];
        
        try {
            $response = Http::timeout(30)
                ->asForm()
                ->post("https://graph.facebook.com/{$this->apiVersion}/{$this->eventSetId}/events", [
                    'access_token' => $this->accessToken,
                    'data' => json_encode($payload['data']),
                ]);
            
            if ($response->successful()) {
                Log::info('Meta conversion sent', $response->json());
                return true;
            }
            
            Log::error('Meta conversion failed', $response->json());
            return false;
        } catch (\Exception $e) {
            Log::error('Meta conversion exception', ['message' => $e->getMessage()]);
            return false;
        }
    }
    
    protected function hashUserData(array $lead): array
    {
        return [
            'em' => $this->hash($lead['email'] ?? ''),
            'ph' => $this->hash($lead['phone'] ?? ''),
            'fn' => $this->hash($lead['first_name'] ?? ''),
            'ln' => $this->hash($lead['last_name'] ?? ''),
            'ct' => $this->hash($lead['city'] ?? ''),
            'st' => $this->hash($lead['state'] ?? ''),
            'zp' => $this->hash($lead['zip'] ?? ''),
            'country' => $this->hash($lead['country'] ?? ''),
        ];
    }
    
    protected function hash(?string $value): ?string
    {
        if (empty($value)) {
            return null;
        }
        // Normalize: lowercase, trim, remove non-alphanumeric
        $normalized = strtolower(trim(preg_replace('/[^a-z0-9]/', '', $value)));
        return hash('sha256', $normalized);
    }
}
```

### Using the Service

```php
// app/Http/Controllers/LeadController.php
public function purchase(Request $request, Lead $lead)
{
    // Process purchase...
    
    // Send offline conversion
    app(MetaOfflineConversions::class)->sendPurchase($lead->toArray(), $total);
    
    return redirect()->route('thank-you');
}
```

### Data Normalization Rules

Meta is strict about normalization:
1. **Lowercase** everything
2. **Trim** whitespace
3. **Remove** punctuation, spaces, special characters
4. For phone: remove all non-digits, then normalize

```php
protected function normalizePhone(string $phone): string
{
    // Remove all non-digits
    $digits = preg_replace('/\D/', '', $phone);
    // Remove leading 1 for US numbers
    return ltrim($digits, '1');
}
```

### Scheduling and Batching

For bulk sending, use Laravel's queue:
```php
class SendMetaConversions implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public function __construct(public array $events) {}
    
    public function handle(MetaOfflineConversions $converter)
    {
        foreach ($this->events as $event) {
            $converter->send($event);
            // Small delay to respect rate limits
            usleep(50000); // 50ms between requests
        }
    }
}
```

Rate limits: Meta allows approximately 1,000 events per request and ~1 request per second per ad account.

### Testing Implementation

Use Meta's Test Events tool in Events Manager to verify without affecting real campaigns.

### Error Handling

Common errors:
- `(#100) Invalid parameter`: Check your payload format and required fields
- `(#200) Permission denied`: Verify access token and permissions
- `(#100) Missing required field`: Ensure `event_name`, `user_data`, and `event_time` are present

Log all responses during development.

### Google Offline Conversions

ismaelaek mentions Meta and Google. Google Ads has a similar Offline Conversion Import:
```php
$response = Http::withBasicAuth($developerToken, $refreshToken)
    ->post("https://googleads.googleapis.com/v19/customers/{$customerId}/uploadClickConversions", [
        'conversions' => [
            [
                'gclid' => $gclid,
                'conversion_action' => "customers/{$customerId}/conversionActions/{$actionId}",
                'conversion_date_time' => now()->toIso8601String(),
                'conversion_value' => $value,
            ],
        ],
    ]);
```

### Conclusion

Implementing Meta Offline Conversions without an SDK is straightforward with Laravel's HTTP client. The key is correct data normalization (especially SHA256 hashing) and proper error handling.

Batching events and processing asynchronously ensures your CRM remains responsive even when sending conversions to Meta.

---

## Related Posts

- [Best SMTP server for bulk marketing emails Gmail inbox](07-best-smtp-server-for-bulk-marketing-emails-gmail-inbox.md) — Email marketing and conversion tracking.
- [How to secure an API-generated video embed link and prevent user sharing](04-how-to-secure-an-api-generated-video-embed-link-and-prevent-.md) — API security patterns for CRM integrations.
- [Finance - Self-hosted personal finance tracking web app](13-finance-self-hosted-personal-finance-tracking-web-app.md) — CRM tracking for financial transactions.
