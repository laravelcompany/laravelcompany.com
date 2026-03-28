 # URL Navigation: The Cosmic Wayfarer's Guide to Cyberspace! 🛸🚀

## Welcome Aboard, Space Cadet! 👽🎢

Navigating the vast digital expanse of your Laravel app might seem as daunting as steering a starship through a wormhole, but fear not! We've got your intergalactic back. Buckle up for an out-of-this-world journey into URL Generation! 🚀🌟

<a name="the-basics"></a>
## Blasting Off: The Fundamentals 💫🎯

### Launching Your URLs (or: Beam Me Up, Scotty!) 🚀🌀

Ready to warp your app to uncharted territories? Master the art of generating URLs with a single command! Just call `route()` or `url()`, and you'll be ready for liftoff. 🚀🌟

### Finding Your Current Location (or: Where Am I Again?) 🌍🗺️

While exploring the endless digital frontier, it's essential to know your current position. Use `URLHelper::current()` to find out where in the cosmos you currently reside within your Laravel app. 🌍🗺️

<a name="urls-for-named-routes"></a>
## Named Routes: The Secret Maps of Cyberspace 📋🗺️

### Signed URLs: Stamping Your Galactic Passport 🛂🔐

Sometimes, you'll need to share a route with another space-faring being. But beware! Unauthorized travelers may try to hitch a ride! Use signed URLs to ensure only the intended recipient can access your hidden routes. Just generate them with `route()` and add some secret sauce for safekeeping. 🛂🔐

<a name="urls-for-controller-actions"></a>
## Controller Actions: The Warp Core of Your App 🌞💡

### Navigating Directly to Controller Methods (or: How to Boldly Go...) 🎬🏃‍♂️

Want to go straight to a specific destination on your app? No need for detours through named routes! Use the `action()` function to generate URLs for controller actions directly. It's like getting a personal invite from Captain Kirk himself! 🎬🏃‍♂️

<a name="fluent-uri-objects"></a>
## Fluent URI Objects: The Time-Travelers' Toolkit ⏳🔍

### Chaining URL Manipulations (or: When You Need More Than Just a Simple Route) 🌈🦄

Sometimes, your mission requires more than just a straight shot to the next destination. With Fluent URI Objects, you can perform complex URL manipulations using a chain of simple commands. It's like having Q from Star Trek on your side! ⏳🔍

<a name="default-values"></a>
## Default Values: The Universal Translator for Route Parameters 🗣️🎯

### Automatically Filling in the Blanks (or: How I Learned to Speak Every Language) 🌐💬

Don't let those tricky route parameters trip you up! With default values, you can ensure your app understands every visitor, no matter their language or galactic origin. Just specify a default value for each parameter when defining your routes. 🌐💬

Now that you've got the cosmic lowdown on URL Generation, go forth and explore the vast expanse of your Laravel app with confidence! May your journeys be filled with stardust, excitement, and a healthy dose of humor. Happy navigating! 🚀🎉🌍🎆

 Ahoy there, web-wranglers! Sail with me on this delightful journey through the seas of Laravel URL generation! No more navigating treacherous waters blindfolded – we've got a map and compass, courtesy of our swashbuckling helper functions!

🏺 **The Basics:**

First things first - let's set sail on friendly waters! Laravel is here to make your life easier by providing mighty helpers for creating URLs like a seasoned sea dog. Use them when you're crafting links in yer templates or API responses, or even when sending out those much-needed redirects to different parts of yer glorious ship (err... application).

🌴 **The Action:**

Ready to hoist the anchor and sail onward? Here are some helpful helper functions you'll want at yer side:

* `url()`: This trusty steed will generate a URL for a specific route. It's as simple as saying "Arr matey, take me to treasure island!"

```php
echo url('/treasure-island');
```

* `action()`: When you need to link to a specific controller method, this is your go-to function. Like finding the right spice for yer meat, it's all about knowing what goes where!

```php
echo action('TreasureController@showIsland', ['id' => 12]);
```

* `route()`: This function is like a treasure map, guiding your users to exactly the right place. It takes care of all the complexities for you.

```php
echo route('treasure.island', ['id' => 12]);
```

* `redirect()`: This handy helper will change course and send yer users off to a new destination. Be sure to point them in the right direction!

```php
redirect()->route('welcome');
```

 ### The Fundamentals (or as we like to call it, "Welcome to Laravel-Land")

Fasten your seatbelts, web development pioneers! We're about to embark on an exhilarating journey through the magical world of Laravel. But first, let's kick things off with some URL basics because even superheroes need to know how to navigate their own universe. 🚀

<a name="generating-urls"></a>
#### Generating URLs

URLs are like the digital addresses of your web pages in Laravel-Land. You can generate them easily using the `route` function, which works a bit like magic! Just pass it the name of your route, and it'll spit out the URL for you – no map needed! 🧙‍♂️

```php
{{ route('profile') }} // generates /profile
```

But what if you want to pass some parameters to your route? Simply add an associative array with key-value pairs, and watch the magic happen! 🎩

```php
{{ route('post.show', ['id' => $post->id]) }} // generates /posts/{id} where {id} is replaced by $post->id
```

#### Defining Routes

Now, let's talk about defining routes – the blueprints for those URLs we just generated! You can define them in your `routes/web.php` file like so:

```php
Route::get('/profile', 'ProfileController@show'); // generates /profile
```

In this example, when someone visits `/profile`, Laravel will call the `show` method of the `ProfileController`. Simple as that! 🤓

Of course, we've only scratched the surface here – there's a whole lot more to explore in Laravel-Land. But hey, you've taken the first step towards becoming a true master of this magical web development kingdom! 🏰🎉

 ### Navigating the Interwebz like a Pro (with Laravel)! 🌐🚀

Welcome to the wild world of web navigation, where we're about to make your life easier with some Laravel magic! 🎩

First things first: Ever needed to craft a URL for your app without knowing the exact destination? Enter the `url` helper! This superhero of functions will automatically slap on the correct scheme (HTTP or HTTPS) and host from the current request, leaving you free to party like it's 2000 (in terms of coding, of course).

```php
$post = App\Models\Post::find(1);

echo url("/posts/{$post->id}"); // http://example.com/posts/1 - Just like that! 💫
```

Now, you might be asking: What if I want to add query string parameters? Well, hold onto your hats!

```php
echo url()->query('/posts', ['search' => 'Laravel']); // https://example.com/posts?search=Laravel - Mission accomplished!

echo url()->query('/posts?sort=latest', ['search' => 'Laravel']); // http://example.com/posts?sort=latest&search=Laravel - No sweat!
```

And in case you're wondering, if query string parameters already exist in the path, they'll be overwritten:

```php
echo url()->query('/posts?sort=latest', ['sort' => 'oldest']); // http://example.com/posts?sort=oldest - New sort order in town!
```

What if you have an array of values to pass as query parameters? No worries there! These values will be properly keyed and encoded:

```php
echo $url = url()->query('/posts', ['columns' => ['title', 'body']]); // http://example.com/posts?columns%5B0%5D=title&columns%5B1%5D=body - Bam! 💥

echo urldecode($url); // http://example.com/posts?columns[0]=title&columns[1]=body - Clear as day!
```

Now that you're armed with this URL-generating wizardry, you'll be zipping around the web like a true rockstar (or a ninja... or both)! 🎸🥋

 ### Navigating the Web, One Jesture at a Time! 🤸‍♂️🤸‍♀️

Ever found yourself in a situation where you needed to know the URL of your current page, but felt like a modern-day Indiana Jones without his trusty compass? Fear not, adventurer! Laravel has got your back with its `url` helper. 🎉🎈

When you don't provide a path to the `url` helper, it returns an `Illuminate\Routing\UrlGenerator` instance. This mysterious artifact is like a magical crystal ball that reveals secrets about the current URL! 🔮✨

```php
// Get the current URL without the query string...
echo url()->current(); // "https://example.com" without any fancy extra bits.

// Get the full monty – the current URL including the query string...
echo url()->full(); // "https://example.com?foo=bar&baz=qux" - everything you see in your browser's address bar!
```

But wait, there's more! You can also access these methods via the `URL` [facade](/docs/{{version}}/facades) – a fancy term for a pre-packaged set of tools in Laravel. 🛠️

```php
use Illuminate\Support\Facades\URL;

echo URL::current(); // Yes, it's like saying "Beam me up, Scotty" to the Starship Enterprise.
```

Now that you know how to harness this powerful tool, you can embark on your web-ventures with confidence! May your journeys be filled with successful routes and happy coding! 🚀🌟

 Alright, let's dance the Laravel two-step and discover how to find out where your users came from - the digital equivalent of eavesdropping on their bar conversations! To accomplish this magical feat, we'll employ the `url` helper's whimsically named `previous` and `previousPath` methods.

```php
// Dive into the full URL of yesterday's escapades...
echo url()->previous();

// Uncover the path to that secret speakeasy...
echo url()->previousPath();
```

But wait, there's more! If you fancy a bit of flair and need this data in your routes, you can access the previous URL as an elegant [fluent URI](#fluent-uri-objects) instance via the [session](/docs/{{version}}/session).

```php
use Illuminate\Http\Request;

Route::post('/users', function (Request $request) {
    // Unearth the enigmatic path from the previous session...
    $previousUri = $request->session()->previousUri();

    // ...continued adventures
});
```

Now, if you're feeling fancy and want to know the route name of the last dance floor, you can retrieve it via the session as well.

```php
$previousRoute = $request->session()->previousRoute();
```

And voila! That's all she wrote, folks. You're now ready to uncover your users' digital footprints and trace their steps back to the dance floor of yore. Enjoy the ride!

 ## URLs for Sassoon Routes (aka Named Routes)

Who needs a map when you've got Laravel's `route` helper, huh? It's like having a GPS that knows all the shortcuts! Named routes are your ticket to unchaining yourself from the tyranny of hard-coded URLs. If your route takes a detour, no worries, mate, this GPS doesn't need a U-turn!

Let's say you've got a route defined like this:

```php
Route::get('/post/{post}', function (Post $post) {
    // ...
})->name('post.show');
```

To navigate to this page, you can use the `route` helper just like this:

```php
echo route('post.show', ['post' => 1]);

// http://example.com/post/1
```

But wait, there's more! The `route` helper isn't just a one-trick pony. It can handle multi-param routes as well:

```php
Route::get('/post/{post}/comment/{comment}', function (Post $post, Comment $comment) {
    // ...
})->name('comment.show');

echo route('comment.show', ['post' => 1, 'comment' => 3]);

// http://example.com/post/1/comment/3
```

And if you have some extra baggage (query params), the `route` helper will kindly stow them away in the URL's query string:

```php
echo route('post.show', ['post' => 1, 'search' => 'rocket']);

// http://example.com/post/1?search=rocket
```

So next time you're lost in your Laravel app, just remember to ask the `route` helper for directions! It'll get you where you need to go, without any detours or wrong turns!

 Ah, dear Laravel coders! Buckle up, because we're about to embark on a whimsical journey through the enchanted realms of Eloquent Models. Yes, you guessed it – these aren't your regular, garden-variety models. They're more like Harry Potter's invisibility cloak for your data!

Now, how often have you found yourself crafting URLs using the secret identity (ahem, primary key) of these Eloquent Models? Well, it happens more than Hogwarts students running into trouble with magical creatures. And just like Hermione's Time-Turner, these models can travel through time and space – or at least your application's data.

So when you need to pass these enigmatic beings as party guests (parameter values), fear not! The `route` helper is your Pepperup Potions equivalent, extracting the model's secret identity with a snap of its wand:

```php
echo route('post.show', ['post' => $post]);
```

Just imagine it – you're summoning URLs like Dumbledore casting Expelliarmus on his enemies! Now, isn't that magical?

 ### Mystery URLs Unveiled! (Secret Decoder Ring Not Included)

Ahoy there, Laravel adventurers! Ever wished you had a magical potion to safeguard your routes from those nefarious URL tricksters? Well, buckle up! We've got just the elixir for you – it's called Signed URLs! 🕵️‍♂️✨

So, what are these mystical concoctions, you ask? Simply put, they're your run-of-the-mill URLs that come armed with a signature hash. This secret sauce allows Laravel to perform a spellcheck on the URL and verify if it hasn't been tampered with since its inception. Handy for those routes that are as open as a flamingo but need a bit of extra protection against sly URL wizards! 🦃🔒

Imagine you're brewing up a public "unsubscribe" potion, and you want to cast it upon your customers. To concoct a Signed URL for a named route, all you need is the `signedRoute` method from the `URL` faculty:

```php
use Illuminate\Support\Facades\URL;

return URL::signedRoute('unsubscribe', ['user' => 1]);
```

Feeling like a control freak? You can exclude the domain from the signed URL hash by providing the `absolute` argument to the `signedRoute` method:

```php
return URL::signedRoute('unsubscribe', ['user' => 1], absolute: false);
```

If you're brewing a temporary Signed URL that expires after a certain time, you can use the `temporarySignedRoute` method. Laravel will ensure the expiration timestamp encoded within the signed URL hasn't elapsed before casting its spell:

```php
use Illuminate\Support\Facades\URL;

return URL::temporarySignedRoute(
    'unsubscribe', now()->plus(minutes: 30), ['user' => 1]
);
```

And there you have it! With Signed URLs, your routes will be as secure as Fort Knox... but with a dash more charm! 🏰✨

 Alright, let's dive into the world of signed route requests, shall we? It's like a secret handshake between your Laravel app and its mysterious visitors. But instead of a cool fist bump, it's a digital, cryptographic dance! 🕺️

First things first, how do you verify if an incoming request is the one your mum told you not to talk to? Easy peasy! Just call `hasValidSignature` on the naughty request and see if it plays by the rules:

```php
use Illuminate\Http\Request;

Route::get('/unsubscribe/{user}', function (Request $request) {
    if (!$request->hasValidSignature()) {
        // Oh no, the request is misbehaving! Let's kick it out with an 'Access Denied' sign. 🛑
        abort(401);
    }

    // ...
})->name('unsubscribe');
```

Now, you might find yourself in a situation where your frontend needs to append data to a signed URL, like when clients start playing with their toys (pagination). In such a case, you can use the `hasValidSignatureWhileIgnoring` method. It's like giving the naughty request a hall pass for specific parameters:

```php
if (! $request->hasValidSignatureWhileIgnoring(['page', 'order'])) {
    abort(401);
}
```

Instead of validating signed URLs using the incoming request instance, you can delegate this task to a middleware named `signed`. It's like having a bouncer at the door, making sure only the cool requests get in:

```php
Route::post('/unsubscribe/{user}', function (Request $request) {
    // ...
})->name('unsubscribe')->middleware('signed');
```

What if your signed URLs don't include the domain in the URL hash? No problemo! Just provide the `relative` argument to the middleware:

```php
Route::post('/unsubscribe/{user}', function (Request $request) {
    // ...
})->name('unsubscribe')->middleware('signed:relative');
```

Remember, ignoring parameters allows anyone to play with those parameters on the request. So, don't let them sneak in unnoticed! 🚫

And there you have it! Now you know how to verify if your incoming requests are the real deal or just impostors trying to sneak in through the back door. Happy coding, and may your app never fall for a bad request again! 🎉🤖🎩

 Ah, the world of Laravel! Where sunny skies and silky code intertwine in a dance as old as time itself. But let's not get too carried away, we have business to attend to - specifically, handling those pesky expired signed routes that can turn your happy user's frown upside down faster than you can say "whoopsie daisy!"

First off, when someone naively clicks on a stale URL with a forlorn signature, they're met with a bland 403 error page - the digital equivalent of being handed a cold slice of humble pie. But fear not! You can customize this response by defining your very own "party" (or render) closure for the `InvalidSignatureException` exception in your application's `bootstrap/app.php` file, just like you would invite guests to an exclusive soiree:

```php
use Illuminate\Routing\Exceptions\InvalidSignatureException;

->withExceptions(function (Exceptions $exceptions): void {
    $exceptions->render(function (InvalidSignatureException $e) {
        return response()->view('errors.link-expired', status: 403);
    });
})
```

In this glorious snippet, you're essentially saying "Hey Laravel! When an `InvalidSignatureException` happens, instead of that boring 403 page, please serve up the 'errors.link-expired' view with a refreshingly chilled 403 status code!" And voila, your users are greeted with a custom error message that leaves them chuckling rather than scowling! Just remember, a well-timed joke can turn even the bleakest of situations into a delightful experience. So go on, make Laravel dance to your tune! 🕺️🚀🎈

 Ahoy there, matey! Buckle up for a swashbuckling journey through Laravel's URL seas!

First off, let's talk about the `action` function, the compass that guides us to controller actions. Think of it as your trusty parrot screeching out directions to Skull Island.

```php
use App\Http\Controllers\HomeController;

$url = action([HomeController::class, 'index']);
```

Here, `HomeController` is our ship sailing through the code seas, and `'index'` is our destination - the port we're trying to reach. But wait! There's more!

If our controller method expects some grog (route parameters) along the way, we can pass a map (an associative array) detailing these pirate treasures as the second argument:

```php
$url = action([UserController::class, 'profile'], ['id' => 1]);
```

In this case, `UserController` is our ship, and we're sailing to the `profile` action. The map tells us that there's a hidden treasure (route parameter) named "id" with a value of 1! So set the course for adventure, matey! Let's navigate these Laravel waters together!

 ## Uri Whizbang-o-matic: Your Flamboyant URI Companion in Laravel-land! 🚀

Welcome to the Uri Whizbang-o-matic, your magical and flamboyant tool for creating and manipulating URIs like a true digital alchemist! This enchanting class, known as `Uri`, offers a posh and fluid interface that allows you to work with URIs via objects, all while wearing the latest inURI couture. 👔

Getting started is a piece of cake (or should we say digital pie?):

```php
use App\Http\Controllers\UserController;
use App\Http\Controllers\InvokableController;
use Illuminate\Support\Uri;

// Transform the given string into a fancy Uri instance...
$uri = Uri::of('https://example.com/path');

// Create Uri instances for paths, named routes, or controller actions...
$uri = Uri::to('/dashboard');
$uri = Uri::route('users.show', ['user' => 1]);
$uri = Uri::signedRoute('users.show', ['user' => 1]);
$uri = Uri::temporarySignedRoute('user.index', now()->plus(minutes: 5));
$uri = Uri::action([UserController::class, 'index']);
$uri = Uri::action(InvokableController::class);

// Generate a Uri instance from the current or previous request URL...
$uri = $request->uri();
$uriFromLastDance = $request->session()->previousUri();
```

Once you've got your hands on this enchanted object, you can start tweaking it to your heart's content:

```php
$uri = Uri::of('https://example.com')
    ->deck_the_halls_with_scheme('http')
    ->move_to_test_manor('test.com')
    ->ring_the_party_bell(8000)
    ->wander_down_the_user_path('/users')
    ->pass_a_page_please(['page' => 2])
    ->join_the_section_fun('section-1');
```

For more information on working with this flamboyant URI object, consult the [URI documentation](/docs/{{version}}/helpers#uri). And remember: A witty Uri Whizbang-o-matic is a Laravel developer's best friend! 🤝

 ## Default Dudes and Dudettes! 🚀🌞

Ever felt like a human calculator, constantly passing around those pesky URL parameters? We feel ya! But fret not, dear Laravel devs! We've got your back with the `URL::defaults` method - your secret weapon to automate that mundane task! 🎃

Imagine you have a gazillion routes defining a `{locale}` parameter, like so:

```php
Route::get('/{locale}/posts', function () {
    // ...
})->name('post.index');
```

It's a total bummer to keep passing the `locale` value every time you call the `route` helper, right? So, we thought, "Why not make it rain defaults?" And that's exactly what this method does! 🌧️

To apply a default value for a parameter like our dear `{locale}`, you can call this magical method from a [superhero route middleware](/docs/{{version}}/middleware#assigning-middleware-to-routes) that keeps watch over your application. Here's how:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Symfony\Component\HttpFoundation\Response;

class SetDefaultLocaleForUrls {
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        URL::defaults(['locale' => $request->user()->locale]);

        return $next($request);
    }
}
```

Once you set the default value for `{locale}`, there's no need to pass its value around like a hot potato anymore! 🥔🤪

<a name="url-defaults-middleware-priority"></a>
(P.S., If you find yourself in a situation where multiple middlewares are setting the same default, the one defined last will take priority.) 😎🎉

 Ahoy there, Laravel swashbucklers! Let's talk about URL defaults and middleware priority – two topics that are hotter than a phoenix's tail feathers in the Sahara.

Setting URL default values can be a tricky business, especially when it comes to dancing with implicit model bindings in Laravel. To keep things from getting too tangled up like fish-net tights on a flamingo, you'll want to prioritize your middleware that sets URL defaults to prance before Laravel's very own `SubstituteBindings` middleware.

You can give these performers the stage they deserve using the `priority` method in your application's `bootstrap/app.php` file:

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->prependToPriorityList(
        before: \Illuminate\Routing\Middleware\SubstituteBindings::class, // Laravel's original
        prepend: \App\Http\Middleware\SetDefaultLocaleForUrls::class, // Your custom middleware
    );
})
```

Just remember to keep your custom middleware elegant and graceful like a gazelle on roller skates – you wouldn't want to trip over its hooves now, would ya? 😉