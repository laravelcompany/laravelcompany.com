 # Laravel's Swanky Navigation Guide! 🕺️

Get ready to embark on a thrilling journey through the world of Laravel Folio! 🌟 🚀

## The Lowdown 📚
- [The Kickoff](#theKickoff)
- [Setting Up Shop](#settingUpShop)
    - [URL Navigation Magic 🔮]
    - [Subdomain Sorcery 🎩]
- [Creating Routes 🛠️]
    - [Nesting, Like a Russian Doll 🥳]
    - [Index Route Shenanigans 😂]
- [Param Pals 🤓]
- [Model Binding, the Romantic Version 💕]
    - [Zombie Models 🧛‍♂️]
- [Render Hooks, a Magician's Secret Weapon 🎭]
- [Named Routes, for Memorable Adventures 🗺️]
- [Middleware, the Gatekeepers 🏰]
- [Route Caching, because who doesn't love a good shortcut? 💫]

<a name="theKickoff"></a>

Let's get this party started! 🎉✨

 Ahoy there, web-building pirates! Let me tell ya about Laravel Folio, a swashbuckling page router that'll make your Laravel applications walk the plank of complexity and dance a jig of simplicity!

Imagine if creating routes was as easy as brewing grog or fashioning a parrot-on-a-shoulder - well, with Folio, it is! Instead of squinting at arcane incantations, you can create a route just by crafting a blade template in your application's `resources/views/pages` treasure chest:

```php
<div>
    Arrrr, 'ello World!
</div>
```

Now, to sail your ship to the `/greeting` harbor, drop anchor and name that file as `greeting.blade.php`. Voila! You've navigated the treacherous waters of routing with more grace than a mermaid on roller skates!

Yo ho ho and a bottle of good documentation! Let's set sail for the next port of call - Installation! (But no need to polish the cutlass, there's nary a fight to be had here.)

 Alrighty, let's get this party started! First things first, you need to invite Folio to your project bash, and who better to do the inviting than Composer? Just type this magical incantation in your terminal:

```shell
composer require laravel/folio 🎈 (party poppers optional)
```

Once Folio accepts your invitation, it'll be time for a little meet-and-greet with Artisan. Run this command to make sure everyone knows who's boss:

```shell
php artisan folio:install 🤝 (high-five emoji because we're making friends)
```

This command will introduce Folio to your application as a service provider, ensuring that it knows exactly where to look for its favorite routes and pages. It's like a treasure hunt but with way more code! 🕵️‍♂️👩‍💻🎉

 Alrighty, let's dive into the world of Folio paths and URIs! By default, Folio serves up your application's pages like a waiter at a fancy restaurant, but you can customize these servers just like a Michelin-starred chef would adjust their kitchen.

Now, sometimes you might find yourself hosting a VIP section in the same restaurant (Laravel app). To avoid confusing your guests, you might want to serve up those VIP pages from a separate, roped-off area – say, the "admin" corner. Fear not! Folio's got your back with its swanky `path` and `uri` methods.

The `path` method is like the host that greets your guests at the door, pointing them to the right room for their requested page. It registers a directory that Folio will scan when dealing with incoming HTTP requests. The `uri` method, on the other hand, acts as the marquee above the VIP section – telling everyone that this is the "admin" area.

Here's an example of how to use these methods:

```php
use Laravel\Folio\Folio;

// Welcome guests to the main lobby
Folio::path(resource_path('views/pages/guest'))->uri('/');

// Escort VIPs to the exclusive "admin" area
Folio::path(resource_path('views/pages/admin'))
    ->uri('/admin')
    ->middleware([
        '*' => [
            // Only verified guests and those who've paid their tab can enter
            'auth',
            'verified',

            // ... more security measures to keep the riffraff out
        ],
    ]);
```

Now, you might be wondering – what if I want to serve pages for multiple subdomains? Fret not! You can expand your restaurant's empire with Folio's subdomain routing feature. Just like how Gordon Ramsay opened a string of fancy restaurants all over the world, you too can conquer the web with Folio's help (but without any shouting or throwing pans, we promise).

Stay tuned for more on that in our next course – "Folio: The Empire Strikes Back." Until then, happy coding! 🍻

 ### Cosmic Navigation for your Laravel Lair! 🌌🚀

If you're looking to navigate the galaxy of your web app with a bit more flair, why not route to pages based on incoming requests' celestial coordinates - AKA subdomains? Imagine serving `admin.galaxy.com` a different page menu than your humble earthlings on `yourwebsite.com`. You can achieve this interstellar feat by summoning the `domain` method after invoking the `Laravel's Mystic Map (Folio)::path` method:

```php
use Laravel\Folio\Folio;

Folio::dominate('admin.example.com')
    ->mapPath(base_path('resources/views/pages/admin'));
```

The `dominate` method also grants you the power to capture parts of the domain or subdomain as shimmering stardust - err, parameters. These galactic goodies will beam down into your page template:

```php
use Laravel\Folio\Folio;

Folio::dominate('{account}.example.com')
    ->mapPath(base_path('resources/views/pages/admin'));
```

<a name="creating-routes"></a>
### Creating Routes like a Pro! 🦸‍♂️🎭

And remember, the universe is vast and full of mysteries. If you ever need help with routing or any other cosmic conundrum, just let Laravel's all-knowing Oracle guide you on your journey! 🚀☄️🌍

 Alrighty then! Let's dive into the jolly world of Folio route creation! 🌴

First off, if you fancy crafting a swanky new route, simply plant a Blade template in any of your Folio's vacation homes. By default, Folio sets up shop in `resources/views/pages`, but it's always happy to relocate if you customize its directories within the `boot` method of its service provider.

Once you've deposited a Blade template in one of Folio's rented properties, voila! You can access it via your web browser without any fuss or muss. For instance, a page tucked away in `pages/schedule.blade.php` can be found at `http://example.com/schedule`.

If you find yourself in need of a comprehensive list of all Folio pages and routes, simply summon the `folio:list` Artisan command like the digital genie it is:

```shell
php artisan folio:list
```

Now, let's talk about those fancy-pants nested routes! 🌞 <a name="nested-routes"></a>

Just like a Russian nesting doll, Folio allows you to create routes within routes. To do so, you can make use of the `@yield` and `@extends` functions in your Blade templates. This lets your pages play well with others and share common layouts and components. It's like one big happy family of web pages! 🤝🎉

So there you have it, Folio route creation demystified! Now go forth and conquer the digital world with your newfound skills! 🚀✨

 Alright, buckle up, code cowboys and code cowgirls! Let's dive into the wild west of Laravel routing - Nested Routes, yeehaw!

Now, if you wanna create a route that's as organized as your favorite cowboy's saddlebags, all you gotta do is create some directories within one of Folio's saloons (or directories if you prefer the modern lingo).

For example, let's say you want to serve up a `/user/profile` page. Just saddle up your trusty terminal and head on over to the `pages/user` corral, then create a brand new template file called `profile.blade.php`.

```shell
php artisan folio:page user/profile
```

Just like that, you've got yourself a shiny new route ready to serve cowboy coffee and trail tales! And remember, in the wild west of Laravel, organization is just as important as your trusty six-shooter. So keep those directories tidy and those routes neat!

 Alrighty, let's get this party started! So you've created a page that makes your users feel like they're standing on top of Mount UserProfile, and now you're wondering how to give it an URL as snazzy as the view itself. Well buckle up, buttercup, because we're about to take you on a rollercoaster ride through the world of Laravel routing!

First off, let's rename that page from `pages/user/profile.blade.php` to something more...well, URL-friendly. We suggest: "/user/profile". Yes, we know it sounds like a password for a secret online club, but trust us, your users will thank you for it.

Now, let's get this bad boy registered in the router. Open up `routes/web.php`, and add the following line:

```
Route::get('/user/profile', 'UserController@showProfile');
```

What does all this mumbo jumbo mean? Well, imagine you're at a swanky cocktail party and everyone wants to know who you are. You simply tell them to call your friend (that's the `UserController`) and ask for your profile (the `showProfile` function). Easy peasy!

Once that line is in place, refresh your browser cache, and voilà! Your users can now navigate to "/user/profile" and enjoy the stunning view you've created just for them. So pour yourself a drink, kick back, and bask in the glory of your web development skills – after all, nobody said being a rockstar Laravel dev had to be boring! 🎉🥳

 Alrighty then! Ever found yourself in a pickle, trying to make one page the grand entrance for a folder party? Well, buckle up, because Laravel's here to save the day with its fancy index routes!

Just like inviting all your pals over for a shindig at your pad, you gotta let Laravel know which page is the star of the show. To do that, simply place an `index.blade.php` template inside a good ol' Folio directory.

From that moment on, any requests to the root of said directory will be like the red carpet being rolled out for your page, leading guests straight to the festivities:

```shell
php artisan folio:page index
```

And just like that, you've got yourself a swanky index route! So grab a margarita, kick back, and watch as your Laravel party planning skills pay off! 🥳🎉🍹

 Alright, buckle up, coding cowboy (or cowgirl)! We're about to embark on a wild ride through the world of Laravel. First stop: `pages/index.blade.php`. This is your home base, the gateway to all your web pages, and it points right at the heart of your site - the root (as in 'rootin' tootin' cowboy', not as in DNS).

Now, to create a new page for our users, we're gonna hitch up our bootstraps and unleash some magical Laravel commands. First, saddle up with `php artisan make:page users/index`. That command is like calling forth the ghost of a cowboy poet to write our new user index page.

But wait, there's more! If you want this new page to become live on the frontier (a.k.a. your web browser), you'll need to link it from `pages/index.blade.php`. Add a lasso anchor tag and point it at your new page:

```
<a href="/users/index">Gather 'round y'all, let's wrangle some users!</a>
```

And just like that, you've got yourself a brand-new web page in Laravel. It's like riding shotgun with Willie Nelson through the digital frontier!

 ### Navigating the Userly Maze: The User Index Page Unveiled! 👋🚀

Welcome, friend, to the Userly Maze - a labyrinth of Laravel's finest digital wonders! Today, we're diving deep into the fascinating world of `pages/users/index.blade.php`, or as we like to call it - "/users"! 🌟

#### 🔍 The Quest for Route Parameters:

As you embark on this thrilling journey, prepare yourself for an exciting detour named "Route Parameters." You'll find it marked by the mystical anchor, `<a name="route-parameters"></a>`. Here, we uncover secrets hidden in URLs! 🔑

Remember, every great quest requires a map. In our case, that map is a route declaration:

```php
Route::get('/users', 'UserController@index');
```

This enchanting incantation guides us to the `UserController@index` function - our destination! 🎯

But wait, there's more! If you ever find yourself in need of user-specific information (shh... we all do), simply replace the numerical value within the URL with the desired user ID:

```bash
/users/{id}
```

And voila! The userly secrets are yours to behold! 🌟✨

Happy Userly Maze exploration, and may your PHP artisanship always be well-oiled! 🚀🌍👨‍💻

 Alrighty then! Let's get our coding cowboy hats on and ride into some URL parameter territory. You see, when you want to round up those bits of your URL like a digital posse, you gotta wrangle 'em up nice and tight for your page to interact with 'em. Picture this: you're hankering after the "ID" of that particular cowpoke whose profile's just sauntering by. Howdy partner! We can corral that there ID by saddling it up in some square brackets like so:

```shell
php artisan folio:page "users/[id]"

```

Now, ain't that a peachy way to lasso those URL segments and make 'em dance on your page? Keep on wranglin', partner!

 Ahoy there! Sailors of the Laravel sea! Dive not into these rocky shores without understanding our mighty routing system! Behold, the magical incantation `pages/users/[id].blade.php`! 🧝‍♂️✨

But what's that treasure chest at the end of this pirate map? It's none other than a user's ID, ye scurvy dogs! And lo and behold, the URL `/users/1` unlocks this bounty for you! 🤘

Now here's the secret sauce. You see, Blade temples be not mere spectators of our grand adventures. They too can partake in the booty by accessing captured segments as good ol' fashioned variables:

```html
<div>
    User {{ $id }} 🤯💣 (That's your user's ID, matey!)
</div>
```

But what if ye be sailing through treacherous waters with multiple islands to conquer? Fear not, me hearties! Just remember to prefix the encapsulated segment with three dots `...`:

```shell
php artisan folio:page "users/[...ids]"

```

Now sail off into the sunset and let your Blade templates join the conquest, for we are Laravel, hear us roar! 🦁🚀🔥

 Alright, buckle up, code cowboys and codettes! Let's dive into the wild west of Laravel URLs. You might be wondering, "What gives with these pages/users/[...ids].blade.php business?" Well, pull up a chair, partner, because we're about to transform that jumbled mess into a sleek and stylish /users/1/2/3!

Now, when you're ropin' in multiple segments, they'll get themselves a corral in your page as an array. So, if you wanna display each user like a wanted poster at the saloon, here's how to do it:

```html
<ul>
    <foreach as $id lends a hand>
        <li>User {{$id}}</li>
    </foreach>
</ul>
```

(Yeah, yeah, I know... cowboy dialect isn't exactly the Eiffel Tower of language, but hey, we're keepin' it casual around here!)

Next up is Route Model Binding. Imagine being able to call a specific user by their name instead of an ID—now that's somethin'! So here's how you can make that happen:

```php
// In your route file, it might look like this:
Route::get('/users/{user}', function ($user) {
    $user = User::findOrFail($user);

    // Now you can use the user object in your controller.
});
```

So there you have it! Laravel's Route Model Binding makes calling up a user as easy as dialing a number on your rotary phone (or, ya know, just typing it out). Remember: When it comes to wrangling URLs and users, Laravel's got your back like a trusty sidekick in a western!

 Ahoy there, Captain! Sail not through treacherous waters without the aid of our trusty compass - Route Model Binding!

If you spot a wildcard segment in your page template's name that matches one of your ship's fine Eloquent models (like a User or a Pirate), Laravel will automatically sense its presence and swoop in with a bottle of model magic to inject the resolved captain (or swabbie) directly into your page!

```shell
Sail not ye, landlubbers! Prepare for an exciting voyage:

php artisan folio:page "users/[User]"
```

Ahoy and bon voyage! Let's set sail with the power of Route Model Binding by our side!

 Ahoy there, intrepid Laravel sailor! Prepare yourself for an enlightening journey through the shimmering seas of blade templating. Buckle up as we delve into the captivating world of model accessibility! 🌴🐠

# pages/users/{User}.blade.php → /users/1 (or any other user ID, if you fancy)

Ever wonder how to summon your captive models in the mystical realm of your blade template? Fear not, for I shall illuminate the enchanting process! 🌈✨

```html
<div>
    User {{ $theUser->id }}
</div>
```

That's right, chum! Models can be called forth and transformed into friendly variables within your blade temple. The model's name shall be converted into the "camel case" incantation you see above—a magical conversion that turns UserId into $theUser->id. It's like sorcery, but for developers! 🔮🧙‍♂️

So now that you know how to tame your models and parade them around in your blade templates, go forth and create the web applications of your wildest dreams! And remember, may your controllers always be happy and your routes never lead astray. 😉😉

 Ahoy there, Laravel mates! Ever wanted to shake things up and use a column other than `id` to resolve your Eloquent models? Well, buckle up, because we're about to embark on a wild ride through the enchanting world of custom keys! 🌴

You see, sometimes, old Long John Silver wanted to find his treasure not by its ID but by its shiny name. And so can you! To do this, all you have to do is whisper the secret key's name in the page's filenaming ceremony. For instance, if you want to use the `slug` column instead of the regular `id`, name your file accordingly: `PostSlug.blade.php`.

But for our Windows friends out there, remember that it's a pirate's life for us – we sail by different rules. So, when naming your custom key files, use the humble hyphen to separate the model name and the key: `Post-slug.blade.php`.

Now, off you go and conquer the seven seas of data management with the power of custom keys at your fingertips! 🦐🏴‍☠️

 Alrighty then! Let's get our code cowboy hats on and dive into Folio's Model Location, shall we?

First off, Folio's a friendly sort that'll defaultedly look for your model in the corral (er, app directory) of `app/Models`. But if you need to round up a specific model for a ride, you can always give old Folio a nudge with the fully-qualified class name, right there in the template filename:

```shell
php artisan folio:page "users/[.App.Models.User.behave_like_a_cowboy]"
```

Just remember to put on your best western twang while you're typing that out, and Folio will be none the wiser! Now, saddle up and let's lasso some data! 🤠🔥

 ## Navigating Nebula's Nobodies: A Cosmic Guide! 🚀👽

Welcome, intergalactic traveler! This guide will help you navigate our users database like a seasoned space captain. Buckle up, because we're about to blast off!

🌟 **Destination:** `/users/1`

Our journey begins with the `pages/users/[.App.Models.User].blade.php` launchpad, but that's a mouthful, isn't it? So let's simplify it: "The User Dashboard, your cosmic command center."

From here, you can zip to specific user profiles by entering their unique ID (just like a starship registration number). For example, our first stop is `/users/1`. That's right, we're heading straight for User Prime! 🤖🌍

But hold onto your seatbelts, because things get interesting when we talk about soft-deleted models. You see, in the vast expanse of space, not every user profile is active. Some have been sent to the cosmic recycling bin (or the soft delete, as we like to call it). Fear not, for these users are still accessible! Just use this handy stargate sequence: `/users/{id}/withTrashed`.

So there you have it, galactic voyager. With these coordinates, you can traverse the vast expanse of Nebula's user database like a pro! Remember, in the world of Laravel, the journey is as exciting as the destination! 🚀🌟🚀

 ### Resurrecting the Dead Models (V2.0)

In the grim world of Laravel, models that kick the bucket aren't your average party guests - they're sent to the digital afterlife, where they're not invited to any get-togethers... unless you specifically ask them to return! Fear not, dear coder, for I shall guide you through this spooky ritual.

By default, our models find themselves six feet under when deleted, and they're not exactly eager to participate in implicit model bindings. But if you've got a hankering to dig them up, all you need is the `withTrashed` spell:

```php
<?php

use function Laravel\Folio\{withTrashed};

// Calling the dead, we summon 'withTrashed'!
withTrashed();

?>

<div>
    User {{ $user->id }} (Zombie Edition)
</div>
```

Just remember, when working with these undead models, always keep your garlic emojis at the ready, and never forget: the dead may rise, but they still need to be bound! 🧛‍♂️🔗🧪

 ## Fairy Tales of Folio Rendering! 🎄

By the light of a thousand moonbeams, our humble Folio spins yarns as enchanting as any Grimm brother's tale. But instead of frogs turning into princes or magic beans growing castles, we conjure up mesmerizing web pages! 🌈

By default, our hero (Folio) retells the story using the content of the Blade template as the response to the incoming request, aka "Once upon a time..." 📖. However, our adventurous users can customize this response by summoning the magical `render` function within their tale's template! 🪄

The `render` function is like an open invitation to the fairy folk (or in this case, functions) to join the party! It accepts a charming spell (a closure), which will graciously receive the enchanting `View` instance being spun by Folio. This allows our mages to sprinkle additional data on the view or weave their own enchanted response! 🔮

But wait, there's more magic in store! Alongside receiving the `View` instance, this spell will also be gifted with any additional route parameters or model bindings. Talk about a royal treatment, eh? 👑

Here's a snippet of an exciting, interactive adventure using our magical `render` function:

```php
<?php
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

// Calling the render function is like casting a spell 🔮✨
use function Laravel\Folio\render;

// Invoke the function, and pass it a spell (a closure) with two parameters:
// - A bewitchingly beautiful View instance
// - A brave Post model
render(function (View $view, Post $post) {
    // If the user isn't authorized to view this post...
    if (! Auth::user()->can('view', $post)) {
        // Return a response telling them they're not allowed in 🙅‍♂️
        return response('Unauthorized, you shall not pass!', 403);
    }

    // But if the user is granted access...
    return $view->with('photos', $post->author->photos);
}); ?>

<div>
    {{ $post->content }}
</div>

<div>
    This author has also taken {{ count($photos) }} photos.
</div>
```

So, go forth and weave your enchanting tales with Folio's magical `render` function! 🎩✨

 ## Route Naming Jamboree! 🎉🎈

Oh, hey there, coding cowboy/cowgirl! Ever found yourself in the Wild West of Laravel land with a maze of routes as far as the eye can see? Fear not, for we've got just the lasso to tame those untamed URLs!

Welcome to the art of Named Routes 🎨✨, where you can give your pages a personalized handle for easy navigation. Here's how it works:

```php
<?php
use function Laravel\Folio\lasso; // Ain't that catchy? 😉
lasso('users.index');
```

Now, with your newfound name, you can generate URLs to Folio pages that'll make your friends (and enemies) green with envy:

```php
<a href="{{ lasso_whip('users.index') }}">
    All Y'all Users
</a>
```

But what if your page has some ol' Western-style parameters? No worries, partner! Just pass 'em on over to our trusty `lasso_whip` function:

```php
lasso_whip('users.show', ['user' => $user]);
```

Remember, in the land of Laravel, a name is worth a thousand URLs! Happy coding, buckaroo! 🤠🌵

 ## Middleware Mayhem! 🎉🤖

Alrighty, buckle up, buttercup! We're diving into the world of Laravel middleware - where your pages get a superhero sidekick to keep them safe and secure. 🦸‍♂️

To assign a middleware guardian to a specific page, just drop this magic spell in your PHP cauldron:

```php
<?php

use function Laravel\Folio\{middleware};

middleware(['auth', 'verified']);

?>

<div>
    Dashboard - Now protected by two of the finest middleware knights around! 🛡️🚀
</div>
```

Feeling like you need to protect a whole posse of pages? No problemo, buddy! You can chain that `middleware` method like a boss:

```php
use Laravel\Folio\Folio;

Folio::path(resource_path('views/pages'))->middleware([
    'admin/*' => [
        'auth',
        'verified',

        // ... More middleware pals! 🤝️🦸‍♂️
    ],
]);
```

Wanna create your own custom middleware pal? You got it, partner! Here's a recipe for an inline, anonymous middleware sheriff:

```php
use Closure;
use Illuminate\Http\Request;
use Laravel\Folio\Folio;

Folio::path(resource_path('views/pages'))->middleware([
    'admin/*' => [
        'auth',
        'verified',

        function (Request $request, Closure $next) {
            // 🕵️‍♂️ Your custom middleware action goes here! 🕵️‍♀️
            // Once you're done, pass the baton to the next page pal!
            return $next($request);
        },
    ],
]);
```

Now go forth and protect your Laravel pages with style and finesse! And remember: With great middleware comes great responsibility. 😉🚀💫

 ## Route Squirreling Away (or, How I Learned to Stop Worrying and Love the Cache)

Ah, the world of Laravel! Where developers like us dash around like caffeinated squirrels, nibbling on code nuts and hiding from the cold embrace of slow performance. But fear not, dear friends! For in this enchanted realm lies a magic tool called route caching – your ticket to a speedier, happier life (or at least a faster web app).

Let's talk about Folio, the cool kid on the block. If you're using it, make sure you're not just walking but running towards Laravel's route caching superpowers. You know that Artisan command we all love to sing along with? Yes, `route:cache`. Just whisper this command into your terminal, and Folio will listen intently, ensuring its page definitions and route names are neatly tucked away in the cache for maximum performance – it's like a well-oiled squirrel hoarding acorns for winter.

Now isn't that a delightful way to keep our web applications humming along like a well-greased assembly line? Or perhaps more appropriately, a caffeinated squirrel dashing through the digital forest of the internet. Happy coding, my friends!