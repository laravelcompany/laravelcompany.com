---
title: Recently Started Paying for AI
author: Randy_Johnson
date: 2024-12-01
category: General
views: 1900
replies: 20
---

> Original forum thread content:
> "I recently paid for AI, and I must say, being able to point it at a directly and whispering the words abracadabra, I was truly impressed, I felt like a super hero. But now I keep running into issues with data integrity. What are your thoughts and does anyone have advice how to avoid such pit falls."

## Managing Data Integrity When Using AI-Generated Code: A Practical Guide

Randy_Johnson captures the exact emotional arc many developers experience with AI coding assistants: euphoria at the speed, followed by anxiety when things break. The "data integrity" concerns are particularly valid—AI tools can produce code that seems correct but introduces subtle data issues.

### The Data Integrity Problem with AI Code

AI assistants are trained on public code, which has a bias toward:
- Happy path implementations
- Simplified examples
- Code from a wide variety of styles and patterns
- Potential bugs and anti-patterns present in the training data

This leads to data integrity risks:

**1. Missing Validation**
AI may omit critical validation rules because the examples it learned from were simplified:
```php
// AI might generate
public function store(Request $request)
{
    Post::create($request->all()); // No validation!
}
```

**2. Mass Assignment Vulnerabilities**
```php
// AI might forget $fillable
class Post extends Model
{
    // Missing: protected $fillable = ['title', 'content'];
}
```

**3. Implicit Type Coercion**
JavaScript's loose typing or PHP's implicit casts can hide bugs:
```php
'price' => '100.50', // String, not float
'quantity' => 'abc', // Invalid, but might coerce to 0
```

**4. Missing Transactions**
When multiple writes must be atomic, AI may write separate operations:
```php
// If second save fails, data is inconsistent
$user->update($data);
$account->update($balance);
```

### Strategies to Avoid Data Integrity Pitfalls

**1. Always Validate AI Output**
Treat AI code as a first draft requiring human review (see [How to review AI-generated code](02-how-to-review-ai-generated-code.md)).

**2. Use Strongly Typed Data Structures**
- PHP: Use FormRequests with explicit validation
- TypeScript: Enable strict mode
- Database: Use column constraints and foreign keys

**3. Implement Database Constraints**
Don't rely solely on application-level validation:
```php
Schema::table('orders', function (Blueprint $table) {
    $table->unsignedInteger('quantity')->default(1);
    $table->decimal('price', 10, 2);
    $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
});
```

**4. Use Transactions for Multi-Step Operations**
```php
DB::transaction(function () use ($data) {
    $order = Order::create($data);
    $order->items()->createMany($items);
    $order->user->increment('order_count');
});
```

**5. Implement Event Sourcing for Critical Data**
For systems where every data change matters:
```php
class OrderShipped implements ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, SerializesModels;

    public function __construct(public Order $order) {}

    public function handle()
    {
        $this->order->update(['shipped_at' => now()]);
        // Every change is an event you can replay
    }
}
```

### Specific AI Code Review Focus Areas

When reviewing AI-generated code that touches data:

**Database Operations**
- Are all field types and constraints respected?
- Are nullability requirements met?
- Are relationships properly defined?

**Validation**
- Are input arrays fully validated (not just required fields)?
- Are edge cases (empty strings, whitespace, max lengths) handled?
- Are error messages user-friendly?

**Race Conditions**
- Does the code assume sequential execution?
- Could concurrent requests corrupt data?

**Data Transformations**
- Are data transformations safe (casting, casting, format conversion)?
- Could timezone issues affect date storage?

### Testing Strategies

**Property-Based Testing**
Use libraries like PHPUnit's data providers or Pest to test edge cases:
```php
/**
 * @dataProvider priceProvider
 */
public function test_price_calculation($input, $expected)
{
    $result = calculateTotal($input);
    $this->assertEquals($expected, $result);
}

public function priceProvider()
{
    return [
        'normal' => [['price' => 10, 'qty' => 2], 20],
        'zero_qty' => [['price' => 10, 'qty' => 0], 0],
        'negative_price' => [['price' => -10, 'qty' => 2], null], // Should fail
    ];
}
```

**Integration Tests for Data Integrity**
```php
public function test_order_preserves_inventory()
{
    DB::beginTransaction();
    
    $order = Order::factory()->create();
    $initialStock = Product::find(1)->stock;
    
    $order->addItem(Product::find(1), 5);
    
    $this->assertEquals($initialStock - 5, Product::find(1)->fresh()->stock);
    
    DB::rollBack(); // Don't actually persist
}
```

### Tools to Detect Data Issues

- **Laravel Pint**: Code style consistency helps spot anomalies
- **PHPStan**: Static analysis catches type issues
- **Laravel Debugbar**: Inspect queries during development
- **Clockwork**: Profile requests and inspect data flow

### Adopting AI Safely: A Maturity Model

**Level 1: Skeptical**
Don't use AI for data-critical code. Only use for boilerplate.

**Level 2: Assisted**
Use AI for scaffolding and non-critical logic. Validate all database operations manually.

**Level 3: Integrated**
Use AI for implementation after designing the data model yourself. Review generated code against your schema.

**Level 4: Collaborative**
Use AI as a pair programmer. Discuss data integrity concerns in the prompt: "Ensure all user inputs are validated and transactions are used."

### The "Explain to Me" Technique

When AI generates data-handling code, ask it to explain:
- "Why did you use `$fillable` here?"
- "What happens if this field is null?"
- "Could two users submit this simultaneously?"

The explanations often reveal whether the AI understood the requirements or just generated plausible-looking code.

### Conclusion

AI assistants are powerful force multipliers, but they amplify both good and bad patterns. The developers who get the most from AI—without data integrity issues—are those who:
1. Design their data model independently
2. Use AI to draft implementation code
3. Review every database operation
4. Test edge cases the AI might miss
5. Maintain strong database constraints as a safety net

Your initial excitement about AI is well-placed. The trick is channeling that excitement into building quality systems rather than letting it override your good judgment.

---

## Related Posts

- [How to review AI-generated code](02-how-to-review-ai-generated-code.md) — Systematic approaches to validating AI output.
- [AI Field guide page doesn't mark as complete the seen lessons](17-ai-field-guide-page-doesnt-mark-as-complete.md) — Data persistence issues in AI-powered learning platforms.
- [Laravel Precog always returns success](08-laravel-precog-always-returns-success.md) — Validation pitfalls with AI-generated form handlers.
