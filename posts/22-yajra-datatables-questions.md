---
title: Yajra datatables questions
author: SigalZ
date: 2024-12-01
category: Laravel
views: 1350
replies: 11
---

> Original forum thread content:
> "Hello, I installed yajra datatables version 12 on my laravel 12 project. I have a few questions and I just don't understand the documentation. On the Quick Starter instructions, it says: "Next, we will install Laravel DataTables Vite to simplify our frontend setup. npm i laravel-datatables-vite --save-dev This will install the following packages: Bootstrap Icons DataTab..."

## Understanding Yajra DataTables v12 for Laravel 12: Setup, Features, and Common Questions

SigalZ's installation of Yajra DataTables v12 in a Laravel 12 project raises important questions about the package's new frontend tooling. This guide covers the quick starter workflow, Vite integration, and answers the common questions Laravel developers have about DataTables.

### What is Yajra DataTables?

Yajra DataTables (yajra/laravel-datatables) is a popular Laravel package that bridges server-side Eloquent queries with jQuery DataTables (now DataTables 2.x) for rich, interactive tables with:
- Server-side processing
- Sorting, filtering, and pagination
- Custom column rendering
- Export capabilities (CSV, Excel, PDF)
- Responsive design

### Version 12 Changes

Yajra DataTables v12 is a major update supporting:
- Laravel 10, 11, 12
- DataTables 2.x (new API)
- Vite-based frontend integration (replacing Mix)
- Improved column builder API

### The Quick Starter: Laravel DataTables Vite

SigalZ noticed the Quick Starter mentions `laravel-datatables-vite`. This is the package's recommended way to integrate DataTables assets:

```bash
npm i laravel-datatables-vite --save-dev
```

This installs:
- `datatables.net` — Core DataTables library
- `datatables.net-dt` — Default styling (Bootstrap 5 compatible)
- `datatables.net-responsive` — Responsive extension
- `datatables.net-buttons` — Export buttons
- `bootstrap-icons` — Icon library

It also provides a Vite entry point that imports all assets, letting Vite bundle them efficiently.

### Basic Implementation

**1. Server-Side Setup**
```php
use App\Models\User;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Http\Request;

public function getUsers(Request $request)
{
    $query = User::query()->with('roles');
    
    return DataTables::of($query)
        ->addColumn('name', fn($user) => $user->full_name)
        ->addColumn('email', fn($user) => $user->email)
        ->addColumn('actions', fn($user) => view('users.actions', compact('user')))
        ->rawColumns(['actions'])
        ->make(true);
}
```

**2. Route**
```php
Route::get('/users/data', [UserController::class, 'getUsers'])->name('users.data');
```

**3. Frontend (Blade with Vite)**
```blade
<x-app-layout>
    <table id="users-table" class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
    </table>
    
    @vite('resources/js/users-table.js')
</x-app-layout>
```

**4. JavaScript Entry**
```javascript
// resources/js/users-table.js
import 'laravel-datatables-vite'; // Imports DataTables + Bootstrap 5 styling

$(function () {
    $('#users-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{{ route('users.data') }}',
        columns: [
            { data: 'name', name: 'name' },
            { data: 'email', name: 'email' },
            { data: 'actions', name: 'actions', orderable: false, searchable: false },
        ],
    });
});
```

### Common Questions and Answers

**Q: Do I need npm packages?**
A: Yes. Yajra DataTables v12 uses `laravel-datatables-vite` which requires Node.js and Vite in your development workflow. You don't need to manually install DataTables assets.

**Q: Does it work with Bootstrap 4?**
A: The package targets Bootstrap 5 by default. For Bootstrap 4, use `datatables.net-bs4` or specify:
```javascript
import 'datatables.net-bs4';
```

**Q: Can I use Alpine.js instead of jQuery?**
A: DataTables 2.x still requires jQuery. For Alpine alternatives, consider:
- `Alpine.js` + server-side pagination without DataTables
- `Ag-grid` or `Tabulator` for non-jQuery tables

**Q: How do I customize columns with HTML or links?**
A: Use `rawColumns()` carefully:
```php
->addColumn('actions', fn($user) => "
    <a href=\"/users/{$user->id}\">View</a>
    <a href=\"/users/{$user->id}/edit\">Edit</a>
")
->rawColumns(['actions'])
```

Or use a Blade view for complex markup:
```php
->addColumn('actions', fn($user) => view('users.actions', compact('user')))
->rawColumns(['actions'])
```

**Q: How do I add search filters outside the table?**
A: Use DataTables API:
```javascript
$('#search-name').on('keyup', function () {
    table.column(0).search(this.value).draw();
});
```

**Q: Can I export to Excel/PDF?**
A: Use Yajra's export addon:
```bash
composer require yajra/laravel-datatables-export
```

```php
return DataTables::of($query)
    ->excel(true)
    ->csv('users.csv');
```

### Troubleshooting

**DataTables Not Initializing**
- Ensure jQuery is loaded *before* DataTables
- Check browser console for JavaScript errors
- Verify Vite is bundling correctly (`npm run build`)

**Server-Side Not Responding**
- Check route returns JSON with correct structure:
```json
{
    "draw": 1,
    "recordsTotal": 100,
    "recordsFiltered": 100,
    "data": [...]
}
```

**Styling Issues**
Bootstrap 5 changed class names. Ensure your table classes match DataTables expectations. Use `dt-bootstrap5` class if needed:
```html
<table id="users-table" class="table table-bordered table-hover dt-bootstrap5">
```

### Alternative Approaches

If DataTables feels heavy:
- **Laravel Livewire**: Auto-updating tables with minimal JS
- **Inertia + Vue**: Build custom table with Vue components
- **Filament Tables**: Laravel admin panel tables with full-featured UI
- **Inertia + React TanStack Table**: Headless table with full control

### Conclusion

Yajra DataTables v12 streamlines integration with Laravel 12 and modern build tools. The `laravel-datatables-vite` package removes the need to manually manage DataTables assets.

For SigalZ's questions: follow the Vite-based Quick Starter, refer to the official docs for column builder examples, and don't hesitate to inspect the package's source—the Vite plugin is straightforward.

---

## Related Posts

- [Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP](14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.md) — Server-side data handling performance.
- [Finance - Self-hosted personal finance tracking web app](13-finance-self-hosted-personal-finance-tracking-web-app.md) — Displaying financial data in tables.
- [Difficulty scaling Laravel Horizon across multiple instances](19-difficulty-scaling-laravel-horizon-across-multiple-instances-ecs.md) — Scaling data-heavy applications.
