 # Middleware Mayhem! 🕹️🦸‍♂️

Welcome, code warriors! Buckle up for a wild ride into the world of Laravel's Middleware Madness! We promise laughs, thrills, and a whole lotta learning. Let's dive in!

<a name="defining-middleware"></a>
## Defining Middleware 📝💻

It's time to create your very own superheroes (or villains... nobody judges)! Learn how to define middleware - the unsung heroes of web applications, guarding the gates against digital chaos.

<a name="registering-middleware"></a>
## Registering Middleware 📝🔐

Now that you've made your middlies (that's short for middleware), it's time to get them registered! Here, we'll share the secrets of getting your guardians of the web recognized and approved.

### Global Middleware 🌍🦸‍♂️

Want your superheroes to protect all incoming requests? That's where global middleware comes in handy! These heroes are always on duty, watching over every corner of your application.

### Assigning Middleware to Routes 🌐✋

Assigning middleware to routes is like giving a mission briefing to a specific superhero team - they'll only protect certain areas of your application (routes).

### Middleware Groups 🏯💪

Grouping middleware makes managing your superheroes easier. Organize them by their powers, skills, or any other category that suits you best!

### Middleware Aliases 📜🔢

Sometimes, it's easier to call our heroes by their aliases instead of their long, fancy names. Middleware aliases let you do just that - making your code more readable and manageable.

### Sorting Middleware 📜🏋️‍♂️

Sorting middleware is like arranging your superhero team in the most effective order to combat digital threats. This way, they can work together seamlessly and efficiently!

<a name="middleware-parameters"></a>
## Middleware Parameters 📝🎯

Just like how superheroes have their unique abilities, middleware also comes with parameters that make them customizable to your application's needs.

<a name="terminable-middleware"></a>
## Terminable Middleware ⏳🔪

Sometimes, even superheroes must fall! Terminable middleware lets you decide when it's time for a superhero to hang up their cape (or code). This way, you can control exactly when and how your middlies come and go.

We hope this brief tour of Laravel's Middleware Mayhem has been both entertaining and enlightening! Keep exploring, code warriors – your web application needs you! 💪🚀

 Ahoy there, intrepid adventurer! Let's embark on a jolly journey through the enchanting world of Laravel Middleware - your magical sidekicks guarding the gates to your application kingdom. These spritely helpers are like the bouncers at King Arthur's Round Table, checking each incoming request's credentials before letting it pass!

For instance, there's a dashing middleware knight that ensures your noble subjects (users) have proven their identity by authenticating themselves. If they're just a couple of peasant-ish folks showing up unannounced, he'll politely redirect them to the login chamber – aka your application's login screen. But if our valiant knight recognizes the user as a noble king or queen, he'll let them pass and continue their quest deeper into the application realm.

But don't let this brave middleware knight hog all the glory! You can craft other fantastical middleware to perform all sorts of magical tasks – like a log-o-matic mage that keeps tabs on every incoming request, casting spells on the logs to ensure no sneaky orcs infiltrate your kingdom.

In Laravel's mystical realm, you'll find quite an assortment of enchanted middleware – not just the ones for authentication and CSRF protection but many more! All custom-made potions (middleware) should be stored in your application's `app/Http/Middleware` alchemist's lab.

So, gather round, ye aspiring sorcerers and sorceresses, as we embark on this thrilling Laravel quest together – brewing, casting, and perfecting the most magnificent middleware spells to protect and enhance your application kingdom!

 Alrighty, let's craft a new middleware in Laravel Land! Here's how:

```shell
php artisan make:middleware EnsureTokenIsValid
```

This command will sprinkle magic fairy dust and create a brand-new `EnsureTokenIsValid` class in your `app/Http/Middleware` directory. This little guy will only let access to the route if the supplied `token` input matches our top-secret code word, "my-secret-token". If the token is fishy, we'll politely escort the users back to our cozy /home location:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->input('token') !== 'my-secret-token') {
            // Time to show them the door, my dear
            return redirect('/home');
        }

        // All clear! Proceed with the request.
        return $next($request);
    }
}
```

Now, if the given `token` doesn't jive with our secret code word, this middleware will send an HTTP redirect to the client; otherwise, it lets the request continue on its merry way into the application. To allow the request to proceed deeper into the application (like a friendly doorman waving someone through), call the `$next` callback with the `$request`.

Think of middleware as a security checkpoint for incoming requests – they must pass through multiple layers before they reach your application. Each layer can inspect the request and even deny it entry altogether!

> [!NOTE]
> All middleware are resolved via the [service container](/docs/{{version}}/container), so you may type-hint any dependencies you need within a middleware's constructor.

 Alrighty then! Buckle up, folks, because we're about to dive into the thrilling world of Laravel Middleware and Responses - where every request is an adventure, and every response is a victory dance!

First off, what's a middleware? Well, it's like a superhero sidekick that steps in before or after your request gets all action-packed inside the application. Kinda like Batman's Robin, but with less capes and more PHP.

Here's an example of a middleware that performs some task **before** the request is dealt with by Batcave Control:

```php
<?php

namespace App\Http\Middleware;

Use your super powers here!

class BeforeMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Perform action - Like Batman doing a fancy flip before saving the day

        return $next($request);
    }
}
```

Now, let's check out this middleware that performs its task **after** the request has been handled:

```php
<?php

namespace App\Http\Middleware;

Use your super powers here!

class AfterMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Perform action - Like Batman striking a pose after saving the day

        return $response;
    }
}
```

Now, you're probably wondering how to register these middleware sidekicks. Don't worry, we got you covered! Check out the Registering Middleware section in our documentation for more deets. Remember, a hero is only as good as their team, so don't forget to bring your A-team of middleware along for the ride!

 Ahoy there, Laravel swashbucklers! 🏴‍☠️ Let's dive into the exciting world of middleware, shall we? This piratey part of our ship (or rather, application) is where you can control the flow of traffic, akin to a lighthouse guiding sailors through treacherous waters.

<a name="global-middleware"></a>

### Global Middleware

Global middleware is like the Captain's Orders that apply across all routes in your ship (app). To register a global middleware, you'll need to navigate to `app/Http/Kernel.php`, hoist the anchor, and find the `$middlewareGroups` array. Add your shiny new middleware to either the `web` or `api` group, depending on where you want it to patrol.

```php
protected $middlewareGroups = [
    'web' => [
        // ...
        \App\Http\Middleware\YourNewMiddleware::class,
    ],

    'api' => [
        // ...
        \App\Http\Middleware\YourNewMiddleware::class,
    ],
];
```

### Registering Custom Middleware

If your global middleware ain't quite enough and you need a more targeted approach, it's time to create a custom middleware. Sail over to `app/Http/Middleware`, carve out a new class, and start coding!

```php
namespace App\Http\Middleware;

use Closure;

class YourCustomMiddleware
{
    public function handle($request, Closure $next)
    {
        // Insert your magical pirate powers here!

        return $next($request);
    }
}
```

Once you've finished crafting your middleware masterpiece, don't forget to register it in the `$routeMiddleware` array within the same `Kernel.php` file, so other parts of the ship can benefit from its awesomeness.

```php
protected $routeMiddleware = [
    // ...
    'your-custom-middleware' => \App\Http\Middleware\YourCustomMiddleware::class,
];
```

And there you have it, matey! Now you can manage traffic like a seasoned sea captain, ensuring smooth sailing and keeping the treacherous waters at bay. Happy middleware-ing! 🌴🐬

 ### Global Middleware Jamboree! 🎉🥳

Fancy a middleware that's always on the dancefloor, grooving to every HTTP request your application receives? Well, buckle up because we're about to get this party started in your application's `bootstrap/app.php` file! 💃🕺

```php
Use App\Http\Middleware\EnsureTokenIsValid as YourBouncer;

->withMiddleware(function (Middleware $middleware) {
    $middleware->getMitsubishiLancer()->push_to_the_back(YourBouncer::class);
})
```

The `$middleware` object that's been passed to the `withMiddleware` dancefloor is an instance of `Illuminate\Foundation\Configuration\Middleware`, playing the role of our trusted bartender and club manager. It's in charge of organizing all middleware assignments for your application's routes. The `push_to_the_back()` move adds our middleware to the end of the line, ensuring it catches requests after all other cool cats have had their turn.

If you'd prefer your middleware to take the stage first, just use the `pull_out_of_nowhere_and_start_dancing_first()` method instead:

```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->getMitsubishiLancer()->push_to_the_front(YourBouncer::class);
})
```

Remember, it's all about the right moves! 💃🕺🔥

 Alrighty then! If you fancy yourself a maestro of the Laravel orchestra and want to conduct the global middleware symphony by hand, you're in luck, my friend! Here's how you can get your dance shoes on:

First off, let's give Laravel its default set of global middleware to the `use` method. Think of it as inviting your favorite bandmates to join the stage:

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->use([
        \Illuminate\Foundation\Http\Middleware\InvokeDeferredCallbacks::class, // "Hey, Deferred Callbacks! Let's get this party started!"
        // \Illuminate\Http\Middleware\TrustHosts::class, // "Sorry, Trust Hosts, we'll catch up later." (optional)
        \Illuminate\Http\Middleware\TrustProxies::class, // "Hi there, Proxies! Let's keep things honest."
        \Illuminate\Http\Middleware\HandleCors::class, // "Cross-origin requests? No problem!"
        \Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance::class, // "Maintenance mode? Block all those pesky requesters!"
        \Illuminate\Http\Middleware\ValidatePostSize::class, // "Let's make sure no one's posting too big of a mess!"
        \Illuminate\Foundation\Http\Middleware\TrimStrings::class, // "Nobody likes a chatterbox! Let's tidy up those strings."
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class, // "If they ain't got nothing to say, might as well make 'em leave!"
    ]);
})
```

Now that you've assembled your dream team, you can adjust the lineup as needed:

<a name="assigning-middleware-to-routes"></a>
And if you want to assign middleware to specific routes, all you need is a little magic sprinkle of `->middleware()`:

```php
Route::get('/secret', function () {
    return "Secret stuff!";
})->middleware([
    \Illuminate\Foundation\Http\Middleware\Authenticate::class, // "Only the cool kids allowed!"
]);
```

 Alrighty then! Let's get our Laravel route on, shall we? 🎧🕺️

If you fancy slapping some middleware on your routes like a hot sauce on a burger, just holler at the `middleware` method during the route-defining dance.

```php
Use App\Http\Middleware\EnsureTokenIsValid as TokenGuard;

Route::get('/profile', function () {
    // ...
})->middleware(TokenGuard::class);
```

Now, if you're feeling extra spicy and want to layer on multiple middleware like a triple-decker sandwich, go ahead and pass an array of middleware names to the `middlewares` method.

```php
Route::get('/', function () {
    // ...
})->middleware([First::class, Second::class]);
```

And remember, just like in a game of musical chairs, if you want to exclude some middleware from the dance, all you have to do is point them out and say "you're out!" (By setting `$router->middlewareGroups[]` or `$router->middlewarePriority()`, but who needs technical details when we can have fun, right?) 🎉💃️

<a name="excluding-middleware"></a>
Excluding Middleware is as easy as playing dodgeball. You just need to know the names of those middleware you want to avoid (by using `$router->middlewareGroups[]` or `$router->middlewarePriority()`, but remember, this article is all about fun and not technicalities! 🤗🎾)

 Alright, buckle up, folks! Let's dive into the world of Laravel's middleware where we're about to explore a superhero-esque power known as `withoutMiddleware`.

Imagine you're building an epic superteam, and each route in your application is a member with their unique set of abilities. But sometimes, you've got that one route who just can't keep up – maybe they're always getting into trouble or causing chaos. Instead of kicking them off the team, you can simply tell them to take a break during specific missions!

When you want to assign middleware to a group of routes (that's your superteam), there might come a time when you need one of those routes to enjoy some freedom – like our troublesome friend `/profile`. Here's where `withoutMiddleware` steps in, acting as the super-powered time-out for your route:

```php
use App\Http\Middleware\EnsureTokenIsValid;

// Gather your team (routes) and assign middleware to everyone but /profile
Route::middleware([EnsureTokenIsValid::class])->group(function () {
    Route::get('/', function () {
        // ...
    });
    // Everyone else is in except for the rebellious /profile
    Route::get('/profile', function () {
        // ...
    })->withoutMiddleware([EnsureTokenIsValid::class]);
});
```

But what if you want to give a whole route group (that's an entire city or even country) a break? Fear not, for `withoutMiddleware` can handle that too!:

```php
use App\Http\Middleware\EnsureTokenIsValid;

// Give /profile and its friends some freedom from EnsureTokenIsValid middleware
Route::withoutMiddleware([EnsureTokenIsValid::class])->group(function () {
    Route::get('/profile', function () {
        // ...
    });
});
```

Just remember, `withoutMiddleware` can only pull out the route-specific middleware and leaves your global middleware (the superpowers that everyone has) intact. Happy routing! 🚀🌟💫

 Ah, the world of Laravel middleware! It's a bit like being a bouncer at a posh nightclub, but instead of keeping out riffraff, you're handling requests and securing our digital dance floor.

Now, sometimes you might want to group your bouncers under a team name to make it easier for the door manager (you) to assign them to different sections of the club (routes). And that's where middleware groups come in! You can create these teams using the `appendToGroup` method, found tucked away in your application's `bootstrap/app.php` file:

```php
use App\Http\Middleware\SecurityTeam as First; // Because who doesn't love a good nickname?
use App\Http\Middleware\BouncerSquad as Second; // Because bouncers need a squad, not just a partner in crime.

// Now let's add these teams to our club roster:
->withMiddleware(function (Middleware $middleware): void {
    $middleware->appendToGroup('VIP-section', [
        First::class, // Our most experienced team leader, always ready for the tough crowd.
        Second::class, // The newbies, learning the ropes from our veterans.
    ]);
});
```

But remember, in a nightclub, it's not just about who comes in, but also who goes out first. For that, you can prepend your teams to the group with `prependToGroup`. Just imagine if your VIP-section started with the newbies! Chaos, I tell you!

Now that we have our teams sorted, let's assign them to routes and controller actions using the same syntax as individual bouncers:

```php
// Send the VIP-section team to guard our main entrance:
Route::get('/', function () {
    // ...
})->middleware('VIP-section');

// But for our exclusive VIP area, we need both teams on duty:
Route::middleware(['VIP-section'])->group(function () {
    // ...
});
```

And there you have it! Now you can manage your middleware like a pro, and keep your Laravel party secure and organized. Just remember, the key to a successful night is having the right team in place!

 Alright, let's dive into Laravel's Default Middleware Groups - the party favors of web development! 🥳

These pre-packaged groups are like a box of chocolates for your routes, containing tasty morsels of middleware you might want to sprinkle on your web and API creations. 🍫✨

<div class="overflow-auto">

| The `web` Middleware Group Deluxe Box 🎁  |
| ------------------------------------------ |
| 🔐 `EncryptCookies`: Secures your digital snacks from prying eyes.   |
| 📝 `AddQueuedCookiesToResponse`: Keeps track of all the cookies that need to be baked.    |
| 💾 `StartSession`: Enables session storage for keeping secrets safe.                   |
| 🚫 `ShareErrorsFromSession`: Shares errors with friends (or enemies, whatever floats your boat). |
| 🔒 `PreventRequestForgery`: Protects against the uninvited digital gate crashers.      |
| 🛌 `SubstituteBindings`: Makes sure everyone gets their fair share of bindings.         |

</div>

<div class="overflow-auto">

| The `api` Middleware Group Snack Pack 🍿 |
| --------------------------------------- |
| 🛌 `SubstituteBindings`: Because who doesn't love a good substitution?      |

</div>

If you fancy adding a little more flavor to these groups, or perhaps want to replace one with your own secret recipe, you can do so by using the `web` and `api` methods in your application's `bootstrap/app.php` file like a boss. 🦸‍♀️

```php
use App\Http\Middleware\{EnsureTokenIsValid, EnsureUserIsSubscribed};

->withMiddleware(function (Middleware $middleware): void {
    $middleware->web(append: [
        EnsureUserIsSubscribed::class,
    ]);

    $middleware->api(prepend: [
        EnsureTokenIsValid::class,
    ]);
})
```

You can even swap out one of Laravel's default middleware group entries with your own custom concoction:

```php
use App\Http\Middleware\{StartCustomSession, StartSession};

$middleware->web(replace: [
    StartSession::class => StartCustomSession::class,
]);
```

Or, if you're feeling particularly ruthless, you can remove a middleware entirely:

```php
$middleware->web(remove: [
    StartSession::class,
]);
```

For more advanced users (or those who just really enjoy playing with their food), you can manually manage Laravel's default middleware groups. 🤓

[Learn more about manually managing Laravel's Default Middleware Groups](#manually-managing-laravels-default-middleware-groups) 🔗

 Alright, Laravel pals! Fancy yourself as a maestro of middleware? Look no further! This doc is your symphony sheet to manually conduct Laravel's default web and API middleware groups like a boss. 🎶

If you're itching to show off your middleware management skills, here's how to redefine the web and API groups with their original lineup, leaving room for your custom tweaks:

```php
->withMiddleware(function (Middleware $middleware): void {
    // Cookie time! 🍪
    $middleware->group('web', [
        \Illuminate\Cookie\Middleware\EncryptCookies::class, // Lock up those cookies!
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class, // Queue 'em up for serving 🍝
        \Illuminate\Session\Middleware\StartSession::class, // Session's about to start! 🎧
        \Illuminate\View\Middleware\ShareErrorsFromSession::class, // Spread the error love around 💕
        \Illuminate\Foundation\Http\Middleware\PreventRequestForgery::class, // Guard against those sneaky forgeries 💳
        \Illuminate\Routing\Middleware\SubstituteBindings::class, // Swap in some bindings! 🏛️
        // AuthenticateSession is taking a break, so no need to include it here. 🙅‍♂️
    ]);

    // API's time to shine! 💃🕺
    $middleware->group('api', [
        // Sanctum's on vacation, but the rest of us are here:
        \Illuminate\Routing\Middleware\SubstituteBindings::class, // More bindings, y'all! 🏛️
    ]);
})
```

<a name="middleware-aliases"></a>
> [!NOTE]
> By default, the `web` and `api` middleware groups are applied like magic to your application's corresponding `routes/web.php` and `routes/api.php` files by the `bootstrap/app.php` file. 🎩🔮

Now, go forth and wow your friends with your middleware mastery! If you get lost in the symphony, just remember: Cookies, Sessions, Views, Forgery protection, Bindings (and a vacationing Sanctum). Happy conducting! 🎉🎹🎤

 ### Middleware Nicknames for the Not-so-Nimble Ninjas! 🥋

In your Laravel dojo, you can assign nicknames to middleware in the `bootstrap/app.php` file. These ninja names make it easier for your code to remember long middleware class names like a samurai reciting his ancestral sword techniques:

```php
use App\Http\Middleware\EnsureUserIsSubscribed; // Think of this as "Master of Subscription Checking" 💳📱

->withMiddleware(function (Middleware $middleware): void {
    $middleware->nickname([
        'subbed' => EnsureUserIsSubscribed::class
    ]);
})
```

Once your middleware has a nickname, you can use it when assigning the middleware to routes:

```php
Route::get('/profile', function () {
    // ...
})->middleman('subbed');
```

For added convenience, some of Laravel's built-in middleware have already been given nicknames. For example, the `auth` middleware is akin to the "Gatekeeper" (`Illuminate\Auth\Middleware\Authenticate`). Here's a list of default middleware nicknames:

<div class="scrollable-dojo">

| Nickname           | Technique                                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `gatekeeper`       | `Illuminate\Auth\Middleware\Authenticate`                                                                |
| `basic-protector`  | `Illuminate\Auth\Middleware\AuthenticateWithBasicAuth`                                                   |
| `session-master`   | `Illuminate\Session\Middleware\AuthenticateSession`                                                      |
| `cache-magician`   | `Illuminate\Http\Middleware\SetCacheHeaders`                                                             |
| `can-sensei`       | `Illuminate\Auth\Middleware\Authorize`                                                                    |
| `guest-ghost`      | `Illuminate\Auth\Middleware\RedirectIfAuthenticated`                                                      |
| `password-guardian`| `Illuminate\Auth\Middleware\RequirePassword`                                                              |
| `precog-sensei`    | `Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests`                                        |
| `signed-scribe`    | `Illuminate\Routing\Middleware\ValidateSignature`                                                         |
| `subscribed-sword` | `\Spark\Http\Middleware\VerifyBillableIsSubscribed`                                                       |
| `throttle-sensei`  | `Illuminate\Routing\Middleware\ThrottleRequests` or `Illuminate\Routing\Middleware\ThrottleRequestsWithRedis` |
| `verified-email`   | `Illuminate\Auth\Middleware\EnsureEmailIsVerified`                                                        |

</div>

<a name="sorting-middleware"></a>
Now, go forth and protect your routes like a true samurai! 🗡️✨

 ### Middleware Mosh Pit! 🤘

Ever found yourself in a situation where your middleware friends are all fighting for the spotlight? Fear not, Laravel has a solution that's as smooth as your favorite disco track! 🎹💃

In those chaotic moments when you need your middleware to dance in a specific order but lack the DJ skills to control their playlist during route assignments, fear not! Just like a good bartender knowing which shot to pour first, Laravel allows you to set priority using the `priority` method in your application's `bootstrap/app.php` file. 🍸🍾

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->priority([
        // The VIP list of middleware, aka the front row at a concert:
        \Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests::class,
        \Illuminate\Cookie\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \Illuminate\Foundation\Http\Middleware\PreventRequestForgery::class,
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        \Illuminate\Routing\Middleware\ThrottleRequests::class,
        \Illuminate\Routing\Middleware\ThrottleRequestsWithRedis::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        \Illuminate\Contracts\Auth\Middleware\AuthenticatesRequests::class,
        \Illuminate\Auth\Middleware\Authorize::class,
    ]);
})
```

<a name="middleware-parameters"></a>
Now, when middleware parties get too wild, this list ensures everyone gets their turn to shine! 🎉🎈🥳 Party on!

 Alright, buckle up, Laravelians! Let's dive into the delightful world of Middleware Parameters, where superheroes aren't the only ones getting extra powers! 🦸‍♂️

If you find yourself in a situation where you need to verify that the authenticated user has a specific "role" before pulling off a daring action, it's time to whip up an `EnsureUserHasRole` middleware! This superhero of your codebase will gladly accept an additional argument - yes, we're talking about roles. 🕵️‍♂️

Here's how our caped crusader functions:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserHasRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (! $request->user()->hasRole($role)) {
            // Kick 'em out! 🛑
        }

        return $next($request);
    }
}
```

Now, when defining your route, you can specify the role our middleware needs to check by separating the middleware name and parameters with a `:`. It's like passing super-secret notes in school! 📝

```php
use App\Http\Middleware\EnsureUserHasRole;

Route::put('/post/{id}', function (string $id) {
    // ...
})->middleware(EnsureUserHasRole::class.':editor');
```

But what if your middleware needs to check for multiple roles? Just separate the role names with a comma, and our superhero will handle the rest! 🦸‍♂️

```php
Route::put('/post/{id}', function (string $id) {
    // ...
})->middleware(EnsureUserHasRole::class.':editor,publisher');
```

Now go forth and secure your routes with style! 🕺✨

 Alright, buckle up, folks! Let's dive into the thrilling world of Laravel's Terminable Middleware - the web's most stylish cleanup crew!

You know how sometimes, after a wild night out, you find yourself in need of tidying up before calling it a day? That's exactly what this middleware does for your applications.

In simpler terms, it's a bouncer who sticks around even after the party's over to make sure everything is shipshape. If your server uses FastCGI (think of it as the doorman's union), your bouncer's closing speech will be automatically called post-party (i.e., after the HTTP response hits the browser).

Here's our fashionably late doorman, all dressed up in PHP:

```php
<?php

namespace Illuminate\Session\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TerminatingMiddleware
{
    // ... (skipped the introduction for brevity)

    /**
     * The after-party cleanup speech.
     */
    public function terminate(Request $request, Response $response): void
    {
        // ... clean up after ourselves here
    }
}
```

Note that our doorman is quite the conversationalist, chatting it up with both the request and the response. Once you've trained your doorman to do this, you should add him to your guest list (i.e., routes or global middleware in your application's `bootstrap/app.php` file).

When summoning our doorman, Laravel will whip up a fresh, well-dressed version of him from the service container (think of it as his wardrobe). If you want him to wear the same tuxedo at both the party and the after-party, register him with the container using the container's `singleton` method. This should ideally be done in the `register` method of your AppServiceProvider:

```php
use App\Http\Middleware\TerminatingMiddleware;

/**
 * Register any application services.
 */
public function register(): void
{
    $this->app->singleton(TerminatingMiddleware::class);
}
```

And there you have it! A charming, always-on-call doorman to help keep your parties in order! Just remember, a clean server is a happy server.