---
title: FINANCE - Self-hosted personal finance tracking web app
author: saleem_hadad
date: 2024-12-01
category: Inertia
views: 2500
replies: 22
---

> Original forum thread content:
> "Hello everyone, I'm happy to share with you my new open-source project called FINANCE. FINANCE is a simple yet powerful, self-hosted finance tracking web app with the ability to parse SMS transactions and generate very useful insights about your money. Repo: https://github.com/saleem-hadad/finance Read the docs: https://finance-demo.saleem.dev/docs View demo app: https://fina..."

## Inside FINANCE: A Self-Hosted Personal Finance App Built with Laravel and Inertia

saleem_hadad's announcement of FINANCE is an exciting example of what's possible with modern Laravel tooling. This post explores the architecture behind FINANCE, the SMS parsing capabilities, design decisions around self-hosting, and how the analytics dashboard features make it a compelling choice for privacy-conscious users.

### What is FINANCE?

FINANCE is an open-source, self-hosted personal finance tracking web application. Key features include:
- SMS transaction parsing for automatic expense tracking
- Visual analytics and insights
- Multi-account management
- Budget tracking and reporting
- Clean, modern UI built with Inertia.js and Vue

The project is built on Laravel 11+, Inertia.js, Vue 3, and uses a modern stack that's highly extensible.

### Why Self-Hosted Finance Apps?

Self-hosted finance applications address several concerns with cloud-based alternatives:

**Privacy and Data Sovereignty**
Your financial data never leaves your server. For privacy-conscious users, this is critical. Services like Mint, YNAB, or Personal Capital have access to your full transaction history.

**No Subscription Costs**
Self-hosted apps have no recurring fees. You pay for hosting once.

**Customization and Control**
You can customize features, add integrations, and modify the code to fit your exact needs.

**Offline Operation**
No dependency on internet connectivity for basic functionality (with proper local-first design).

### Technology Stack Deep Dive

**Laravel 11+**
The backend provides:
- Eloquent ORM for database interactions
- Queued jobs for SMS parsing (avoid blocking user requests)
- Blade/Inertia hybrid rendering
- Authentication and authorization (Laravel Breeze/Fortify)

**Inertia.js**
FINANCE uses Inertia to build a single-page app without the complexity of a separate API:
```php
Route::get('/dashboard', [DashboardController::class, 'index'])->inertia('Dashboard');
```

This gives the UX of a SPA with the simplicity of Laravel routing.

**Vue 3**
The frontend leverages Vue 3's Composition API for reactive dashboards and interactive charts.

### SMS Transaction Parsing

The standout feature of FINANCE is its SMS parsing engine. This works by:

**1. SMS Permissions**
Android apps request SMS Read permission:
```xml
<uses-permission android:name="android.permission.READ_SMS" />
```

Or on iOS, use the SMS parsing API (more restricted).

**2. SMS Parsing Engine**
FINANCE uses regex-based parsing to extract transaction data from bank SMS:

```php
Pattern::create('bofa_debit')
    ->match('/Bank of America debit \$(?<amount>[\d,\.]+) at (?<merchant>.+)/')
    ->to('debit', function ($match) {
        return [
            'amount' => $match['amount'],
            'merchant' => $match['merchant'],
            'type' => 'expense',
        ];
    });
```

**3. Pattern Management**
Users can create custom patterns or import bank-specific SMS formats.

**4. Security Considerations**
- SMS parsing happens client-side in many implementations
- Or SMS content is sent to the server (encrypted)
- Pattern rules stay on the server (no cloud dependency)

### Analytics and Insights Dashboard

A core value proposition is generating insights from raw transaction data:

**Spending Categorization**
Automatically categorize expenses (groceries, dining, transportation):
```php
class CategorizeExpense
{
    public function categorize($description): string
    {
        $patterns = [
            'groceries' => ['whole foods', 'safeway', 'kroger', 'trader joe'],
            'dining' => ['restaurant', 'cafe', 'starbucks', 'mcdonald'],
            'transportation' => ['uber', 'lyft', 'gas station', 'shell'],
        ];
        
        foreach ($patterns as $category => $keywords) {
            foreach ($keywords as $keyword) {
                if (str_contains(strtolower($description), $keyword)) {
                    return $category;
                }
            }
        }
        
        return 'uncategorized';
    }
}
```

**Budget Tracking**
```php
class Budget
{
    public function percentSpent($month): float
    {
        $budget = $this->getMonthlyBudget($month);
        $spent = Transaction::where('user_id', $this->user->id)
            ->whereMonth('date', $month)
            ->sum('amount');
        
        return ($spent / $budget) * 100;
    }
}
```

**Chart.js or ApexCharts Integration**
Visualize spending trends, category breakdowns, and budget progress.

### Self-Hosting Considerations

**Deployment**
FINANCE supports common Laravel deployment patterns:
- Laravel Forge
- Docker (Laravel Sail)
- Manual server setup

**Database Choice**
PostgreSQL is recommended for complex financial queries and JSON support (transaction metadata). MySQL works but lacks some advanced analytical functions.

**Backups**
Financial data must be backed up reliably:
- Daily database dumps
- Transaction log archiving
- Version control for configuration

**Security Hardening**
- Enable HTTPS
- Implement 2FA (Laravel Fortify)
- Use strong database passwords
- Regular Laravel updates
- Restrict server access

### Data Import/Export

For users migrating from other apps, data portability is crucial:
```php
// CSV import
public function importCsv(Request $request)
{
    $request->validate([
        'file' => 'required|file|mimes:csv',
    ]);
    
    Transaction::importFromCsv($request->file('file'));
}

// Export to CSV
public function exportCsv()
{
    return Excel::download(new TransactionsExport, 'transactions.csv');
}
```

### Extending FINANCE

Because it's open-source, you can add features like:
- Bill payment reminders
- Investment tracking
- Multi-currency support
- Receipt image storage
- Shared budgets for couples/families
- Integration with bank APIs (Plaid, Yodlee)

### Comparison with Other Self-Hosted Options

| App | Stack | SMS Parsing | Multi-User | License |
|-----|-------|-------------|------------|---------|
| FINANCE | Laravel + Vue | Yes | No | MIT |
| Firefly III | PHP + Vue | No | No | AGPL |
| Actual Budget | Electron/Node | No | Yes | MIT |
| Budget Zen | Laravel Blade | No | No | MIT |

FINANCE differentiates itself with SMS parsing and a clean Inertia-driven UI.

### Generating Reports (PDF)

For financial reporting, use [Spatie Browsershot](15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.md) to generate PDF statements:
```php
use Spatie\Browsershot\Browsershot;

Browsershot::url(route('reports.monthly', ['month' => '2024-11']))
    ->format('A4')
    ->showBackground()
    ->save('monthly-report.pdf');
```

### Conclusion

FINANCE represents a well-architected open-source finance tracker with thoughtful UX. The SMS parsing feature alone makes it unique among self-hosted options. If you're looking for a privacy-focused finance app you can control, it's an excellent candidate.

For those building similar apps, FINANCE demonstrates how Laravel + Inertia + Vue can create a responsive, maintainable single-page experience without a separate API layer.

---

## Related Posts

- [Analytics dashboard](03-analytics-dashboard.md) — Building the analytics layer for financial data.
- [Issue with embedding custom fonts in PDF using Spatie Browsershot](15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.md) — Generating financial reports.
- [Yajra datatables questions](22-yajra-datatables-questions.md) — Displaying financial data in tables.
