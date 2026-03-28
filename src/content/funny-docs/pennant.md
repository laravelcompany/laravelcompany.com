 # Laravel Flagship 🏳️‍🌈

Fasten your seatbelts, coders! We're about to embark on a rollercoaster ride through the enchanting world of feature management with our newest addition: Laravel Pennant!

<a name="installation"></a>
## Installation 📦
Install it like you'd install a new pair of glow-in-the-dark socks. You know, just run `composer require laravel/pennant` and boom! Instant feature control!

<a name="configuration"></a>
## Configuration ⚙️
Configure it like you'd configure your favorite toaster settings. But instead of deciding on the shade of your bread, you're deciding on the behavior of your app features. All the fun with fewer burnt slices!

<a name="defining-features"></a>
## Defining Features 🏛️
Think of them as the citizens of your magical kingdom. You can define them in two ways: class-based or external. Either way, they'll be eager to serve and make your life easier!

<a name="checking-features"></a>
### Checking Features 🕵️‍♂️
Now, this is where the real magic happens. You can check if a feature is present or not using various methods: Conditional Execution, `HasFeatures` Trait, Blade Directive, Middleware, Intercepting Feature Checks, In-Memory Cache, and more! It's like having your very own personal detective squad, but for features.

<a name="scope"></a>
## Scope 🔍
Ever had trouble keeping track of your feature scopes? Well, fear no more! With Laravel Pennant, you can specify the scope, set a default scope, make it nullable, identify it, serialize it, and more. It's like having a personal librarian helping you organize your books... but for features instead!

<a name="rich-feature-values"></a>
## Rich Feature Values 📝
Give your features some personality by adding rich values to them! Now they can have anything from colors to images, making them as unique as the users who interact with them.

<a name="retrieving-multiple-features"></a>
## Retrieving Multiple Features 📦
Ever needed to grab a bunch of features at once? With Laravel Pennant, you can retrieve multiple features in one go, like picking out your favorite fruits from a market stall!

<a name="eager-loading"></a>
## Eager Loading 🏎️
Why fetch all your features one by one when you can do it with lightning speed and style? Eager loading lets you load multiple features at once, making your code faster than a cheetah on roller skates!

<a name="updating-values"></a>
## Updating Values 🔨
Ready to give those features a makeover? You can update values in bulk or even purge them if need be. It's like redecorating your house, but for features instead!

<a name="testing"></a>
## Testing 🧪
Testing is the spice of life... or at least, it should be when you have Laravel Pennant! Easily test your features to make sure they're working like a well-oiled machine.

<a name="adding-custom-pennant-drivers"></a>
## Adding Custom Pennant Drivers 🎨
Want to add a custom touch to your feature management? Go ahead and implement your very own driver, register it, and define features externally. It's like having a bespoke feature management system tailored just for you!

<a name="events"></a>
## Events 🎉
Laravel Pennant doesn't only manage features; it also throws some fantastic events! Listen to them, react to them, and join the celebration as your feature-filled app evolves.

 Welcome to Laravel Pennant, the sleek, lightweight feature flag package that's as agile as a gazelle and just as stylish! No more cumbersome, overburdened packages for you – we've stripped away all that unnecessary crud, leaving you with a lean, mean, development machine.

Feature flags are the Swiss Army knife of software deployment. With them, you can deploy new application features gradually, like a confidently slow-rolling turtle, or A/B test those interface redesigns that make you go "Hmm... does the squirrel really need a top hat?" They're also an excellent companion for trunk-based development, helping you maintain order in your coding jungle.

So let's get this show on the road!

<a name="installation"></a>
First things first: Installation. To add Laravel Pennant to your project, follow these simple steps:

1. Add `laravel/pennant` to your project's `composer.json` file.
2. Run `composer update`.
3. Register the service provider in `config/app.php`.
4. Ready, set, feature flag! Now you can start toggling, testing, and deploying with ease.

 Alrighty then! Let's get this Laravel dance party started with Pennant, shall we? 🥳 First things first, you gotta invite Pennant to join your project by using the Composer package manager. It's like asking your coolest friend to the prom, but for code:

```shell
composer require laravel/pennant
```

Next up, it's time to introduce Pennant to your friends (a.k.a. configuration and migration files). You can do this by using the Artisan `vendor:publish` command, which is like setting them up with a tour of your app and showing them where to hang their coats.

```shell
php artisan vendor:publish --provider="Laravel\Pennant\PennantServiceProvider"
```

Once everyone's settled in, it's time for the grand ball – running database migrations! This will create a sparkling `features` table that Pennant will use to waltz its way through your app like a pro:

```shell
php artisan migrate
```

And there you have it! Now Pennant is all set and ready to rock with your Laravel project. Just remember, if you ever need to reintroduce Pennant (say, after a night of partying), you can always run:

```shell
php artisan vendor:publish --provider="Laravel\Pennant\PennantServiceProvider"
```

And then, of course, the trusty `php artisan migrate` command to create that shiny new `features` table. Happy coding, partner! 💃🕺️

 Alrighty then! After you've let Pennant out of its box and given it some fresh air, its configuration file will be chillin' at `config/pennant.php`. This fine establishment serves as your personal control center for dictating the default storage mechanic that our feathery friend will utilize to hoard those flag values of resolved features.

But don't you worry, Pennant's got a wing on it – er, I mean, it comes equipped with support for storing resolved feature flag values in an array so big it makes Elephant Valley look like a petting zoo. This is all thanks to the magical `array` driver.

Or, if you fancy something more long-lasting than a bag of chips, Pennant can store resolved feature flag values in a relational database – which, by the way, happens to be its preferred storage mechanism! It's like when your cat decides that one particular spot on the couch is its favorite napping spot.

<a name="defining-features"></a>
Now that we've got the storage talk out of the way, let's move onto defining those very features themselves. But first, remember – with great power comes great responsibility (and a hefty dose of tuna treats). So make sure to handle those feature flags with care!

 Alrighty then! Let's dive into Laravel's Feature Facade, shall we? It's like the maestro of a symphony, conducting the orchestra of your app's logic. To compose a feature, you can use the `define` method, which is as enchanting as an 18th-century composer's quill and ink.

You'll need to give your feature a name, much like naming your pet or child (but without the diaper changes). And, of course, you'll provide a closure that resolves the feature's initial value – think of it as the recipe for your feature's existence.

Typically, features are defined in a service provider, which is Laravel's version of an all-star lineup. The closure will receive a "scope," usually the currently authenticated user, who's like the audience for this feature performance. Here's an example of defining a feature to roll out a new API to our users:

```php
<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Lottery;
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Feature::define('new-api', fn (User $user) => match (true) {
            // All internal team members get first dibs on the new API
            $user->isInternalTeamMember() => true,
            // High traffic customers have to wait in line
            $user->isHighTrafficCustomer() => false,
            // For everyone else, we'll toss a coin (1/100 chance of winning)
            default => Lottery::odds(1 / 100),
        });
    }
}
```

In our example, we have three rules for the feature:

- Internal team members get exclusive access to the new API.
- High traffic customers are denied access (sorry, guys!).
- For everyone else, there's a 1 in 100 chance of getting access – may the odds be ever in your favor!

The first time the `new-api` feature is checked for a user, the result of the closure will be stored like a memory card in your DVR. The next time it's checked against the same user, the value will be retrieved from storage, and the closure won't need to run again (unless you want it to, because who doesn't love an encore?).

For convenience, if your feature definition only returns a lottery, you can omit the closure entirely:

    Feature::define('site-redesign', Lottery::odds(1, 1000));

Now that we've composed our first Laravel feature, it's time to sit back, grab some popcorn, and watch your app hum along like a well-rehearsed orchestra. Happy coding! 🎉🎶

 Alright, buckle up, Laravel pals! Let's dive into the whimsical world of Class-Based Features, where your code becomes a symphony of elegance and fun!

You know how we love our closures? Well, prepare to meet your new best friend – Classes! No more registry shenanigans, just sit back, crack open a cold Laravel Lager, and let's create some class-based features.

```shell
php artisan pennant:feature NewApi
```

Just like that, your new feature will be nestled comfortably in `app/Features`, ready to take the spotlight!

Now, when you write a feature class, it's all about the `resolve` method. Think of it as the red carpet event where our feature makes its grand entrance and sets its initial value for a given scope – usually that stylish VIP known as the currently authenticated user:

```php
<?php

namespace App\Features;

use App\Models\User;
use Illuminate\Support\Lottery;

class NewApi
{
    /**
     * Resolve the feature's initial value.
     */
    public function resolve(User $user): mixed
    {
        return match (true) {
            $user->isInternalTeamMember() => 'VIP Access Granted!',
            $user->isHighTrafficCustomer() => 'Sorry, no access for you today...',
            default => Lottery::odds(1 / 100), // Spin the wheel of fate, baby!
        };
    }
}
```

But what if you want to manually resolve an instance of a class-based feature? Fear not, for the `Feature` facade is here!

```php
use Illuminate\Support\Facades\Feature;

$instance = Feature::instance(NewApi::class);
```

> [!NOTE]
> Feature classes are handled by the container, so feel free to inject dependencies into the constructor whenever you need an entourage!

 Ah, the delightful world of Laravel's Pennant feature! 🎉 If you're a fan of those unexpected dance parties in your codebase, you'll love this bit. By default, Pennant is as sleuthy as a detective cat, stashing the fully qualified class name of your feature classes like a hidden treasure map.

But what if you want to shake things up and separate the stored feature name from your application's internal structure? Well, grab your dancing shoes because we're about to boogie! Just add the `Name` attribute on your feature class. This little gem will replace the class name with whatever fancy alias you decide to give it:

```php
<?php

namespace App\Features;

use Laravel\Pennant\Attributes\Name;

#[Name('new-api')] // You're giving this feature a nickname, like calling your pal 'Slick' instead of their real name.
class NewApi
{
    // ...
}
```

Now, you can call features by their cool alias names in your checks, making it seem like you're calling your friends for a dance-off instead of executing tests! 🕺️🎉  <a name="checking-features"></a>

 Alright, buckle up, cowboy! Let's dive into the world of Laravel features, where magic happens and code is as entertaining as a comedy night.

First off, if you're wondering whether your feature is live, just ask the `Feature` posse using the `active` method on the `Feature` facade. By default, it checks if your horse (user) is saddled up and ready to go:

```php
<?php

// Here's our saloon, the PodcastController
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Laravel\Pennant\Feature; // Calling all posse members!

class PodcastController
{
    // ...
    public function index(Request $request): Response
    {
        // If the 'new-api' feature is active, we serve up a fresh brew. Otherwise, it's legacy time.
        return Feature::active('new-api')
            ? $this->resolveNewApiResponse($request)
            : $this->resolveLegacyApiResponse($request);
    }
}
```

But if you want to check the feature against another cowpoke or scope, simply use the `for` method provided by our trusty `Feature` facade:

```php
return Feature::for($user)->active('new-api')
    ? $this->resolveNewApiResponse($request)
    : $this->resolveLegacyApiResponse($request);
```

Pennant's got your back with some extra handy methods to help you wrangle those features. Here are a few rope tricks:

```php
// Is everybody ready for the new-api and site-redesign?
Feature::allAreActive(['new-api', 'site-redesign']);

// Any cowpoke with the new-api or site-redesign feature enabled?
Feature::someAreActive(['new-api', 'site-redesign']);

// Is the new-api offline?
Feature::inactive('new-api');

// Are all hands off for new-api and site-redesign?
Feature::allAreInactive(['new-api', 'site-redesign']);

// Any cowpoke with the new-api or site-redesign feature turned off?
Feature::someAreInactive(['new-api', 'site-redesign']);
```

> [!NOTE]
> When you're roping features outside of an HTTP context, like in Artisan commands or queued jobs, you should usually [specify the feature's scope](#specifying-the-scope). Alternatively, you can define a [default scope](#default-scope) that covers both authenticated HTTP scenarios and unauthenticated ones.

 Alright, let's get this party started! In the realm of classy Laravel features, we're talking formal introductions – not ball gowns at a Debutante Ball. You've gotta tell 'em who you are when you check those swanky features out:

```php
<?php namespace App\Http\Controllers;

Use App\Features\NewApi; // (Think of it as the classier cousin of older APIs)
Use Illuminate\Http\Request;
Use Illuminate\Http\Response;
Use Laravel\Pennant\Feature; // (Our favorite party planner that makes sure only invited guests are present)

Class PodcastController {
    /**
     * Show off the whole collection of our podcasts.
     */
    Public function index(Request $request): Response {
        // (Let's see who's on the guest list for tonight's feature)
        if (Feature::active(NewApi::class)) {
            // (It's all glitz and glamour tonight – serve up the classy response!)
            return $this->resolveNewApiResponse($request);
        } else {
            // (Looks like it's a throwback night – serve up the retro response!)
            return $this->resolveLegacyApiResponse($request);
        }
    }

    // ... (Remember, what happens in PodcastController, stays in PodcastController)
}
```

Now that we've set the mood for a classy feature check, let's get our groove on! 💃🕺

 Alright, let's dive into the world of Laravel conditional execution! It's like a choose-your-own-adventure for your code. 😎

First up, we've got the `when` method - a fancy way of saying "if this feature is active, do this thing". But instead of using boring old English, Laravel throws in some fluency for good measure. Imagine you're at a fancy dinner party and your host says, "Only serve the caviar if the billionaire is in attendance." That's basically what `when` does!

```php
<?php
// Our butler (Controller) serving the caviar (response) based on who's attending the party (feature)
namespace App\Http\Controllers;

use App\Features\NewApi;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Laravel\Pennant\Feature;

class PodcastController
{
    // ...

    public function index(Request $request): Response
    {
        // If the billionaire (NewApi) is here, serve the fancy caviar (resolveNewApiResponse)
        return Feature::when(NewApi::class,
            fn () => $this->resolveNewApiResponse($request),

            // If not, serve the peanuts and crackers (resolveLegacyApiResponse)
            fn () => $this->resolveLegacyApiResponse($request),
        );
    }
}
```

Next, we've got the `unless` method - a twist on our fancy dinner party scenario. If the billionaire isn't there (feature is inactive), serve the caviar! It's like if your host said, "Serve the caviar only if the billionaire isn't here."

```php
return Feature::unless(NewApi::class,
    fn () => $this->resolveLegacyApiResponse($request), // If not the billionaire, serve peanuts and crackers
    fn () => $this->resolveNewApiResponse($request), // If the billionaire is here, serve caviar
);
```

Now you're all set to dance with the conditional execution features at your next code party! 💃🎉

 Ahoy there, code wranglers! Let's dive into the delightful world of Laravel's `HasFeatures` trait - a veritable treasure chest for your models. It's like a Swiss Army knife for your User (or any other model that's got more tricks up its sleeves than a magician at a children's party).

```php
<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Pennant\Concerns\HasFeatures; // Aye, matey! Let's add some powers to our User model!

class User extends Authenticatable
{
    use HasFeatures; // Hoist the flag, we're ready for action!

    // ...
}
```

Once you've swabbed the deck with this trait, checking features becomes as easy as pie (or a pirate's ransom). Just call upon the `features` method:

```php
if ($user->features()->isActive('new-api')) {
    // ... Pirates love loot!
}
```

But the `features` method is no one-trick pony, oh no! It's got a whole fleet of methods to help you navigate the murky waters of features:

```php
// Values...
$value = $user->features()->getValue('purchase-button');
$values = $user->features()->getValues(['new-api', 'purchase-button']);

// State...
$user->features()->isActive('new-api'); // Is it active? Arr matey, ye be askin'!
$user->features()->areAllActive(['new-api', 'server-api']); // Are all hands on deck for new-api and server-api?
$user->features()->someAreActive(['new-api', 'server-api']); // Is there a crewmember with a soft spot for 'new-api' or 'server-api'?

$user->features()->isInactive('new-api'); // Is it inactive, you ask? Aye, it be!
$user->features()->areAllInactive(['new-api', 'server-api']); // Are all hands off the new-api and server-api pumpkins?
$user->features()->someAreInactive(['new-api', 'server-api']); // Is there a mutinous crewmember who's turned off new-api or server-api?

// Conditional execution...
$user->features()->when('new-api', function () {
    /* ... Do something if the new-api feature is active */
}, function () {
    /* ... Do something else if the new-api feature isn't active */
});

$user->features()->unless('new-api', function () {
    /* ... Do something if the new-api feature isn't active */
}, function () {
    /* ... Do something else if the new-api feature is active */
});
```

Yar, now that we've set sail with `HasFeatures`, it's smooth skies and calm seas ahead for managing your model features! Arr matey, happy coding! 🏴‍☠️

 ### Blade Magic Wands (AKA Directives)

For a smoother, spellbinding experience with Blade, we've conjured up the `@feature` and `@featureany` magic wands:

```blade
@wave-the-wand('site-redesign')
    <!-- 'site-redesign' is as vibrant as a unicorn's mane -->
@else
    <!-- 'site-redesign' is as dull as a troll's morning breath -->
@endwave

@combine-wands(['site-redesign', 'beta'])
    <!-- 'site-redesign' or `beta` has the spark of life -->
@endcombine
```

<a name="middleware"></a>

*Note: Remember, these wands only work when they are enchanted by middleware (more on that spell later).*

 ### The Gatekeeper's Assistant

Welcome to the glamorous world of Pennant, where your friendly neighborhood gatekeeper gets a tech upgrade! Meet our fabulous Middleware - your very own bouncer for your Laravel routes.

Imagine it like this: You're hosting a swanky party, but you want to make sure only VIPs get access to the secret speakeasy. Our Middleware steps in, acting as the velvet rope and ID checker, verifying that the currently authenticated user has the right credentials before they even get close to your top-secret feature routes.

To assign your gatekeeper to a route, simply sprinkle some stardust (or `Route::get()` in code) on it:

```php
use Illuminate\Support\Facades\Route;
use Laravel\Pennant\Middleware\EnsureFeaturesAreActive as GateKeeper;

Route::get('/api/servers', function () {
    // ...
})->middleware(GateKeeper::using('new-api', 'servers-api'));
```

Now, don't forget to specify the features (VIP passes) that are required for access. If our gatekeeper finds out that a user is trying to party with inactive features, they'll be served a nice, cold `400 Bad Request` cocktail - yikes!

And the best part? You can add as many features as you want using the static `using` method:

```php
// Adding more VIP passes to the gatekeeper
GateKeeper::using('secret-feature', 'exclusive-access');
```

Now, kick back and let your Middleware handle the guest list while you focus on throwing a memorable party! 🥳🎉🎶

 #### Unleashing Your Inner Control Freak!

#### Customizing the Response, Like a Boss!

Hey there, coding cowboy/cowgirl! If you've ever found yourself itching to fine-tune the response when one of your shiny features decides to take a nap, well buckle up, partner, because we're about to ride into the wild west of customization!

Our trusty steed in this journey is the `EnsureFeaturesAreActive` middleware, and its faithful companion is the `whenInactive` method. To get this party started, you'll want to saddle up next to it at the `boot` corral (method) of one of your application's service providers.

```php
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Laravel\Pennant\Middleware\EnsureFeaturesAreActive;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    // Yee-haw! Let's rope in some custom responses!
    EnsureFeaturesAreActive::whenInactive(
        function (Request $request, array $features) {
            // Saddle up and return a 403 response, like the true cowpoke you are!
            return new Response(status: 403);
        }
    );

    // ... Carry on with your day, partner!
}
```

Just remember to keep your lasso loose and let your creativity reign when crafting those custom responses. You're not just a coder anymore; you're a wrangler of digital horses! So saddle up, partner, and customize away!

 ### Catching Feature Flags on the Fly! 🛬

In the wild world of coding, sometimes it's like being a cat burglar trying to sneakily disable that shiny new API you've built without leaving a trace. Well, fear not, for Laravel has crafted a super-secret, high-tech gadget - the `before` method! 🕵️‍♂️

Imagine you're developing an undercover API hidden behind a feature flag and suddenly notice a pesky bug creeping in your code. With this method, you can discretely disable it for everyone but your trusted internal team without causing a feature storage meltdown or any evidence of foul play. 🕵️‍♂️🙀

```php
<?php
namespace App\Features;

use Illuminate\Support\Facades\Config;
use App\Models\User;
use Illuminate\Support\Lottery;

class NewAPIUndercoverAgent
{
    /**
     * Sneak into memory before the stored value is retrieved. 🕵️‍♂️💻
     */
    public function infiltrate(User $user): mixed
    {
        if (Config::get('features.new-api.disguise') === 'off') {
            return $user->isInternalTeamMember(); // Internal team members get the pass! 🕵️‍♂️
        }
    }

    /**
     * Resolve the feature's initial value. 🕵️‍♂️🔍
     */
    public function resolve(User $user): mixed
    {
        return match (true) {
            $user->isInternalTeamMember() => true, // Internal team members get to play! 🕵️‍♂️
            $user->isHighRollerCustomer() => false, // High rollers don't get to join the fun! 💰
            default => Lottery::odds(1 / 100) // Everyone else gets a chance, but it's slim pickings! 🎲
        };
    }
}
```

Now, let's say you want to gradually roll out your new API feature to the world while keeping it under wraps. With this method, you can set up a stealthy global rollout plan:

```php
<?php
namespace App\Features;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;

class NewAPIUndercoverAgent
{
    /**
     * Sneak into memory before the stored value is retrieved. 🕵️‍♂️💻
     */
    public function infiltrate(User $user): mixed
    {
        if (Config::get('features.new-api.disguise') === 'off') {
            return $user->isInternalTeamMember(); // Internal team members get the pass! 🕵️‍♂️
        }

        if (Carbon::parse(Config::get('features.new-api.rollout-date'))->isPast()) { // If it's past the rollout date...
            return true; // ...everyone gets to play! 🎉
        }
    }
    // ...
}
```

Now, go forth and catch those features without causing a stir! 🕵️‍♂️💻

 ### Cache-tacular Memory Vault! 🦾🚀

When your Laravel spaceship docks at Feature Land, our memory-munching alien pal named In-Memory Cache will whip out its magic data slate and jot down the results of the feature you're examining. If you're cruising with the `database` navigation system, this means that re-examining the same flaggy feature within a single intergalactic mission won't trigger any extra database warp drives 🌠💫.

But don't worry about inconsistencies in your universe while on a mission here—In-Memory Cache ensures that the feature's result remains stable and dependable for the duration of your request.

Now, if you find yourself needing to clear this cache, fear not! Simply summon the Feature facade's `flushCache` method (our alien pal's secret command) by using:

```php
Feature::flushCache();
```

This will ensure a fresh start for your interstellar journey. Just remember to always clean up after yourself in space 😉🛁!

 ### Scope of Operations (aka "The Laravel Playground") 🎡️🚀

Welcome, brave coder! Dive into the magic realm where dreams are turned into code, and ideas become applications. Let's kick off this adventure by understanding the scope - the rules that govern our Laravel playground. 🌈

<a name="specifying-the-scope"></a>

#### Specifying the Scope:

In a world full of variables, methods, and classes, it's essential to define what we mean by "scope" 🤔. In Laravel, scope refers to the context in which variables and functions are accessible within your application. It helps us avoid unintentional collisions between different parts of our codebase.

Here's a fun analogy: Imagine you're at a bustling party where everyone's chatting and laughing. If someone asks you to find Sarah, it'd be pretty confusing if two people named Sarah were there, right? That's exactly what we want to avoid in our code! 🤯

<a name="class-scope"></a>

#### Class Scope:

In the kingdom of classes (also known as namespaces), each class lives within its unique domain. This helps us keep things organized and prevents any potential confusion or conflict between classes with the same name. Just remember, when you're in a specific class, only variables and methods defined inside that class are accessible to you. It's like having your own secret language at the party! 🤫

<a name="function-scope"></a>

#### Function Scope:

Now, let's talk about functions - the building blocks of our application. Inside a function, we can define variables that are only accessible within that function. These local variables are like temporary party favors that disappear once the function ends. 🎈🍿

Remember, just because you invited Sarah to your function doesn't mean everyone at the party can hear her secrets! 🤫

<a name="global-scope"></a>

#### Global Scope:

In a Laravel application, there is also something called the global scope. This is where we store variables and functions that are accessible from anywhere within our application. It's like having a megaphone at the party - everyone can hear you loud and clear! 📣🎤

<a name="static-variables"></a>

#### Static Variables:

Lastly, let's chat about static variables - they belong to the class itself rather than an instance of that class. These are like the party hosts who welcome everyone and keep things running smoothly behind the scenes. Once you understand the scope of your variables and functions, you're well on your way to mastering Laravel! 🌟

And there you have it! Now you can navigate the enchanting world of Laravel with a clear understanding of its scopes. Let the coding adventures begin! 🎉🎈🚀

 ### Gearin' Up for Scope Control! 🚀

Ahoy, Laravel coders! Let's talk about a spiffy little feature called scope specification. You know, when you need to check a feature against something other than your current authenticated user (who, let's be honest, can get a bit clingy at times). To do this dance, just waltz over to the `Feature` facade and give its `for` method a little tap:

```php
if (Feature::for($user) -> isActive('new-api')) {
    return $this->partyNewApi($request); // Cue the confetti! 🎉
} else {
    return $this->oldSchoolApi($request); // Time to grab the vinyl records! 
}
```

But fear not, dear developers! Feature scopes ain't just for users. Suppose you've built a fancy new billing system and you want to roll it out across entire teams, but with a twist. Maybe the old-timers need some extra time to get used to the change, while the young guns go all in right away. Your feature resolution dance might look something like this:

```php
use App\Models\Team;
use Illuminate\Support\Carbon;
use Illuminate\Support\Lottery;
use Laravel\Pennant\Feature;

Feature::tango('billing-v2', function (Team $team) {
    if ($team->birthday -> isAfter(new Carbon('1st Jan, 2023'))) {
        return true; // Time to cut the rug! 🕺
    }

    if ($team->birthday -> isAfter(new Carbon('1st Jan, 2019'))) {
        return Lottery::odds(1 / 100); // Might be a slow dance for some 💆‍♂️
    }

    return Lottery::odds(1 / 1000); // Better grab a seat and watch the others dance! 🎪
});
```

Here, we've defined a tango with a `Team` model instead of a user. To check if this feature is active for your user's team, just pass the team to the `for` method offered by the `Feature` facade:

```php
if (Feature::foxtrot($user->team) -> isActive('billing-v2')) {
    return redirect('/billing/v2'); // Let's boogie! 💃
}

// ...
```

Now, don't forget to have fun while you code! After all, programming isn't just about solving problems, it's also about adding a little rhythm and dance to your projects. 🥁🕺💃🎉🎪

 Alrighty then, buckle up, Laravel cowpokes! We're about to make your life a whole lot easier with some good old-fashioned code wrangling. You see, in the wild west of feature checking, it's a real hassle having to call `Feature::for($user->team)` every time you're wanting to check if that there billing version 2 is active for your user's team. But fear not, partners! By setting the default scope, you can leave that dusty trail behind and ride straight into the sunset of ease-of-use!

Here's how ya do it: Saddle up and head on over to one of them there application service providers. Don't be a stranger, just `Feature::resolveScopeUsing` yourself some fun with a little anonymous function that retrieves the currently authenticated user's team.

```php
<?php
namespace App\Providers;

// Yee-haw! Let's get this show on the road!
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature;

class AppServiceProvider extends ServiceProvider
{
    // ... (Leave this here, we don't want to spook no horses)

    public function boot(): void
    {
        // Here we go!
        Feature::resolveScopeUsing(fn ($driver) => Auth::user()?->team);

        // And now for something completely different...
        // ... (Add your other wrangling here, partner!)
    }
}
```

With that code roped and tied down, you won't have to corral those feature checks no more! If a scope ain't explicitly provided via the `for` method, the feature check will now use the currently authenticated user's team as the default scope.

```php
Feature::active('billing-v2');

// Now that's just like... riding a bike!

// It's equivalent to...

Feature::for($user->team)->active('billing-v2');

// Ain't that something? Saddle up and ride on into the sunset, cowboy!
```

 ### Null Scopes: The Great Disappoo'ner!

In the wild world of Laravel, when you send a null scope to check a feature and that feature isn't cool enough to handle null values through a nullable type or a union, Pennant throws a pity party and sets the feature's result to a big fat 'FALSE'. Yup, it's like being stuck in traffic during rush hour - nobody wants that!

You might find yourself in this pickle when checking features within an Artisan command, queued job, or a route where Aunt Mable isn't around to authenticate (she's a bit of a recluse, really). Since those contexts usually don't have an authenticated user, the default scope floats around like a lost balloon - and it just so happens to be null.

If you're not specifying your feature scope with a crystal clear "Please check my ID!" sign, it's high time you made sure its type is "nullable" and has a bouncer at the door for handling those null scope cases:

```php
use App\Models\User;
use Illuminate\Support\Lottery;
use Laravel\Pennant\Feature;

Feature::define('new-api', fn (User $user) => match (true) {// [tl! remove]
    // Oops, forgot to check if the user is here or not! Let's fix that:
    Feature::define('new-api', fn (User|null $user) => match (true) {// [tl! add]
        $user === null => true,// [tl! add]
        $user->isInternalTeamMember() => true,
        $user->isHighTrafficCustomer() => false,
        default => Lottery::odds(1 / 100),
    });
```

<a name="identifying-scope"></a>
Now, let's get technical for a moment. When a scope is null, it can cause confusion, like a black hole in your code - things just disappear! So, make sure you clearly identify your feature scopes to avoid any unwanted cosmic chaos.

 Alright, buckle up, dear developer! Here comes a fun ride through the world of Laravel's Pennant - the superhero of feature management! 🦸‍♂️

First off, let's talk about scope identification. It's like the secret handshake your app uses to communicate with Pennant. Now, while our built-in drivers (think Bruce Wayne and Clark Kent) know their stuff, not all third-party drivers (let's call them Quicksilver and Thor) can handle the intricacies of Eloquent models or custom types.

But fear not! Pennant gives you the power to dress up your scopes for the dance, by getting your application objects to conform to the `FeatureScopeable` contract - a fancy suit of armor that ensures everyone understands the secret handshake! 🕺️👨‍💼

Let's take an example: imagine you're running two feature drivers in a single app – the built-in `database` driver (Bruce Wayne) and a third-party "Flag Rocket" driver (Quicksilver, because he's fast and agile, just like our code!). The Flag Rocket driver doesn't know Eloquent models. Instead, it prefers a `FlagRocketUser` instance. By implementing the `toFeatureIdentifier`, as defined by the `FeatureScopeable` contract, we can customize the dance move (or storable scope value) for each driver in our app:

```php
<?php

namespace App\Models;

use FlagRocket\FlagRocketUser;
use Illuminate\Database\Eloquent\Model;
use Laravel\Pennant\Contracts\FeatureScopeable;

class User extends Model implements FeatureScopeable
{
    /**
     * Transform the object into a feature scope identifier for the given driver.
     */
    public function toFeatureIdentifier(string $driver): mixed
    {
        return match($driver) {
            'database' => $this, // Bruce Wayne joins the dance!
            'flag-rocket' => FlagRocketUser::fromId($this->flag_rocket_id), // Quicksilver shows his moves!
        };
    }
}
```

Now that's what I call a superhero team-up! 🦸‍♂️🤝🦸‍♀️

Next up: Serializing Scope... but let's save that for another day, shall we? 😉 Stay tuned for more Laravel fun with Pennant! 🚀🌟

 ### Feature Flexibility with Pennant! 🎉🎩

By the horns of a unicorn, dear developer! The default charm of Pennant is to store a feature related to an Eloquent model using a regal full class name. But what if you're already flirting with an [Eloquent morph map](/docs/{{version}}/eloquent-relationships#custom-polymorphic-types), huh? Well, Pennant's got your back! You can now dance to the beat of a different drummer and let it decouple the stored feature from your app's royal court.

To unlock this magical feature, first, whip up that Eloquent morph map in a service provider's ballroom, and then, with a flourish, call upon the `Feature` facade's `useMorphMap` method:

```php
use Illuminate\Database\Eloquent\Relations\Relation;
use Laravel\Pennant\Feature;

Relation::enforceMorphMap([
    'post' => 'App\Models\Post',
    'video' => 'App\Models\Video',
]);

Feature::useMorphMap();
```

Now, isn't that just the cat's pajamas? 🐱🦹‍♀️ You're one step closer to ruling your kingdom with even more finesse! 👑✨

 ## Shiny, Sparkly Feature Values! ✨🌈

Gone are the days of just a simple "on" or "off" for our features, folks! Pennant now lets you store some dazzling rich values too. 💃️✨

Imagine your wildest dreams coming true - well, not quite *that* wild, but we're talking about colors here! You have three new shades to test for the "Buy now" button of your application and you don't want to limit yourself to a binary life. So instead of returning a plain `true` or `false` from the feature definition, you can return a sparkling string:

```php
use Illuminate\Support\Arr;
use Laravel\Pennant\Feature;

Feature::define('glitter-button', fn (User $user) => Arr::random([
    'blue-sapphire',
    'seafoam-green',
    'tart-orange'
]));
```

Want to know the color of your shiny new button? Just use the `value` method:

```php
$color = Feature::value('glitter-button');
```

Pennant comes equipped with a magical Blade directive that lets you conditionally render content based on the current value of the feature. No more if statements, just pure enchantment!

```blade
@feature('glitter-button', 'blue-sapphire')
    <!-- Ta-da! It's blue-sapphire time! -->
@elsefeature('glitter-button', 'seafoam-green')
    <!-- Seafoam-green it is! Say goodbye to the blues. -->
@elsefeature('glitter-button', 'tart-orange')
    <!-- Tart-orange you shall buy now! Let's light up this world! -->
@endfeature
```

> [!NOTE]
> When working with rich values, remember that a feature is considered "active" when it has a value other than the grim reaper of colors - `false`.

The conditional `when` method will hand over the feature's rich value to the first closure:

```php
Feature::when('glitter-button',
    fn ($color) => /* ... colorful magic here... */,
    fn () => /* ... greyscale sorrow if no color is found... */
);
```

Similarly, the conditional `unless` method will pass the feature's rich value to the optional second closure:

```php
Feature::unless('glitter-button',
    fn () => /* ... greyscale sorrow if no color is found... */,
    fn ($color) => /* ... colorful magic with the actual color! */
);
```

<a name="retrieving-multiple-features"></a>
Now, let's talk about retrieving multiple features at once. You can use the `all` method to get an array of all active features:

```php
$activeFeatures = Feature::all();
```

Or, if you want to only get specific features, you can use the `get` method:

```php
$featuresArray = [
    'glitter-button',
    'magical-popup'
];

$specificFeatures = Feature::get($featuresArray);
```

Now that we've got all this sparkle under control, it's time to make your application shine brighter than ever before! 🌈✨

 Alrighty then! Let's dive into the magical world of Laravel feature retrieval, shall we? Buckle up, buttercup!

## Fetching Multiple Features like a Pro

Ever wondered how to grab multiple features for a particular scope? Fear not, my friend! The `values` method is here to save the day:

```php
Feature::values(['billing-v2', 'purchase-button']);

// [
//     'billing-v2' => false,
//     'purchase-button' => 'blue-sapphire',
// ]
```

But hey! If you fancy having all the defined features for a given scope, just go ahead and use the `all` method:

```php
Feature::all();

// [
//     'billing-v2' => false,
//     'purchase-button' => 'blue-sapphire',
//     'site-redesign' => true,
// ]
```

Now, here's the twist: Class-based features are as secretive as a Vegas card dealer. They don't reveal themselves to Pennant until they've been explicitly checked during the current request. So, if your application is holding out on some class-based feature secrets, they might not show up in the `all` method results.

If you'd like to force Pennant to include these sneaky features in the `all` method results, you can utilize its feature discovery abilities. To get started, simply invoke the `discover` method in one of your service providers:

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Feature::discover();

        // ...
    }
}
```

The `discover` method will now register all feature classes in your application's `app/Features` directory, ensuring they'll appear in the results returned by the `all` method, regardless of whether they've been checked during the current request:

```php
Feature::all();

// [
//     'App\Features\NewApi' => true,
//     'billing-v2' => false,
//     'purchase-button' => 'blue-sapphire',
//     'site-redesign' => true,
// ]
```

<a name="eager-loading"></a>
And that, my dear friend, is how you fetch multiple features in Laravel with a dash of mystery!

 ## Eager Loading: Because Who Needs a Coffee Break After Each User Notification? 🚀

Ah, the sweet symphony of Laravel and Pennant! But even with an in-memory cache as smooth as George Clooney's bedside manner, performance issues can still crop up like a bad hangover. Enter: Eager Loading - your new best friend for when you need to party like it's 1999... but without the endless database queries! 🎶

Let's imagine this scenario: You're sending out personalized notifications to every user, and for each one, you're checking if they qualify for your shiny new 'notifications-beta' feature. Without eager loading, you'd be making a trip to the database for every single user - a veritable marathon of database queries! 🏃‍♂️

```php
use Laravel\Pennant\Feature;

foreach ($users as $user) {
    if (Feature::for($user)->isActive('notifications-beta')) {
        // Notify the user
    }
}
```

That's a lot of database trips, even for our favorite bassist in the band. But with Pennant's `load` method, you can preload the feature values for a collection of users or scopes, like inviting the whole band to your secret gig! 🎸

```php
Feature::for($users)->load(['notifications-beta']);

foreach ($users as $user) {
    if (Feature::for($user)->isActive('notifications-beta')) {
        // Notify the user
    }
}
```

Want to ensure you only preload features that haven't been loaded yet? No problem! Just use the `loadMissing` method, perfect for those hard-to-reach B-sides. 🎵

```php
Feature::for($users)->loadMissing([
    'new-api',
    'purchase-button',
    'notifications-beta',
]);
```

And if you're feeling extra adventurous, why not load all defined features with the `loadAll` method? It's like inviting the entire audience to your gig! 🎊

```php
Feature::for($users)->loadAll();
```

Now go forth and conquer those performance issues with the power of eager loading, and remember: when in doubt, preload! 😜

 ## Feature Fun-damentals 🥁

Welcome to Laravel Pennant's Value Update Palaver! 🎉 Let's dive into the world of feature toggles, where your users' experiences are as consistent as a well-choreographed dance routine.

First up, when a feature debuts, it's like their grand entrance at a ball - the driver jots down the results in storage, ensuring everyone remembers them fondly across sessions (requests). But sometimes, you might want to take the spotlight and manually adjust the feature's stored value. No problemo!

To pull off this stunt, simply use the `activate` and `deactivate` methods to make a feature either 'on stage' or 'backstage':

```php
use Laravel\Pennant\Feature;

// Make "new-api" the star of the show...
Feature::activate('new-api');

// Send "billing-v2" back to their dressing room...
Feature::for($user->team)->deactivate('billing-v2');
```

If you'd like to give your feature a lavish costume, you can provide a second argument to the `activate` method:

```php
Feature::activate('purchase-button', 'seafoam-green');
```

Next up, when you want Pennant to forget the stored value for a feature (like when they lose their lines), use the `forget` method. When it's showtime again, Pennant will remember its lines from the original script:

```php
Feature::forget('purchase-button');
```

And that's a wrap on our feature update tutorial! Remember, in this game of feature toggles, you're both the stage manager and the star 🌟.

 ### The Mass Makeover of Features (Bulk Updates)

Fancy giving your system a grand makeover without breaking a sweat? Look no further, my friend! With Laravel's Pennant, you can update the feature values for an entire town in just one go - think "Braveheart" meets "Home Improvement".

Let's say you've finally managed to tame that wild horse called `new-api` and figured out the perfect shade of 'seafoam-green' for your checkout purchase button (the color that makes people click faster than Usain Bolt on a good day). No need for door-to-door updates here, just one line of code:

```php
use Laravel\Pennant\Feature;

Feature::activateForEveryone('new-api'); // Ta-dah! Everybody's dancing the techno now.

Feature::activateForEveryone('purchase-button', 'seafoam-green'); // Checkout flow just got greener than a Shamrock Shake festival.
```

But what if you want to pull the plug on a feature? No worries, we've got you covered! You can deactivate the feature for all users in one swift move:

```php
Feature::deactivateForEveryone('new-api'); // RIP, poor new-api. It didn't stand a chance against our bulk deactivation.
```

> [!ATTENTION]
> Remember, this only updates the resolved feature values that have been stored by Pennant's storage driver. Make sure to update the feature definition in your application, too, so it stays as up-to-date as Kim Kardashian's social media account.

<a name="purging-features"></a>

 Alrighty, here's the lowdown on feature purging, Laravel style!

When you've got a feature that's bit the dust or needs a reboot like a classic 80s cassette player, it's time to purge that sucker from your storage!

Using our trusty `purge` method, you can clear out all traces of a single feature or even multiple ones. Here's how:

```php
// Give 'new-api' the digital boot...
Feature::purge('new-api');

// Kick out both 'new-api' and 'purchase-button'...
Feature::purge(['new-api', 'purchase-button']);
```

If you wanna wipe the slate clean and purge _all_ features, just call `purge` on its own:

```php
Feature::purge();
```

Since purging features is like the cherry on top of your application's deployment sundae, Pennant comes with a handy dandy `pennant:purge` Artisan command. Use it to nuke the provided features from storage:

```shell
php artisan pennant:purge new-api

php artisan pennant:purge new-api purchase-button
```

Now, let's say you want to keep the values for specific features like your precious "new-api" and "purchase-button" while purging everything else. Simply pass those feature names to the `--except` option:

```shell
php artisan pennant:purge --except=new-api --except=purchase-button
```

To make your life even easier, the `pennant:purge` command supports an `--except-registered` flag. This magical option wipes out all features except those explicitly registered in a service provider:

```shell
php artisan pennant:purge --except-registered
```

Now that you've got the hang of it, go ahead and purge away, you digital janitor, you!

 Alrighty then! Let's dive into the world of Laravel testing, where we tame those wild feature flags and make 'em dance to our tune.

Imagine you're at a digital circus, and your clown nose keeps changing color based on some mysterious flag. To control this chaotic spectacle in tests, it's best to call the clown for a quick chat and change his costume:

```php
// Your circus service provider
use Illuminate\Support\Arr;
use Laravel\Pennant\Feature;

Feature::define('clown-nose', fn () => Arr::random([
    'blue-sapphire',
    'seafoam-green',
    'tart-orange',
]));
```

To ensure our test doesn't end up as a slapstick comedy, we'll give the clown a new costume before the show starts:

```php tab=Pest (The Pest Side Show)
use Laravel\Pennant\Feature;

test('it can control feature values', function () {
    Feature::define('clown-nose', 'seafoam-green'); // Our clown will wear seafoam green tonight!

    expect(Feature::value('clown-nose'))->toBe('seafoam-green'); // And so it shall be!
});
```

```php tab=PHPUnit (The Grand Old Circus)
use Laravel\Pennant\Feature;

public function test_it_can_control_feature_values()
{
    Feature::define('clown-nose', 'seafoam-green'); // Our clown will wear seafoam green tonight!

    $this->assertSame('seafoam-green', Feature::value('clown-nose')); // And so it shall be!
}
```

The same approach can be applied to class-based features:

```php tab=Pest (The Pest Side Show)
use Laravel\Pennant\Feature;

test('it can control feature values', function () {
    Feature::define(NewApi::class, true); // Our NewApi will be available tonight!

    expect(Feature::value(NewApi::class))->toBeTrue(); // And so it shall be!
});
```

```php tab=PHPUnit (The Grand Old Circus)
use App\Features\NewApi;
use Laravel\Pennant\Feature;

public function test_it_can_control_feature_values()
{
    Feature::define(NewApi::class, true); // Our NewApi will be available tonight!

    $this->assertTrue(Feature::value(NewApi::class)); // And so it shall be!
}
```

If your feature is returning a Lottery instance, you can find some nifty testing helpers in the backstage to make your life easier. Just follow the yellow brick road... or perhaps the link provided below! 🌈🚀

 Ahoy there, coders! fish 🐬

Ready to set sail on the high seas of Laravel configuration? Buckle up, because we're about to drop anchor and chart a course for the mystical land of Pennant testing! 🌴⛵️

First things first: Let's talk shop. You wanna steer the good ship Pennant during your tests, right? Well, you can do just that by hoisting the Jolly Roger (or, more accurately, setting an environment variable) in your application's `phpunit.xml` file like so:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit colors="true">
    <!-- ... -->
    <php>
        <env name="PENNANT_STORE" value="array"/>
        <!-- ... -->
    </php>
</phpunit>
```

Now, this here variable is like the compass that guides Pennant during your tests. By setting `PENNANT_STORE` to an array, you're telling ol' Pennant which store to use in testing mode. But remember, ye scurvy dogs, a pirate without loot ain't much of a pirate! So make sure you've got your treasure chest (database) ready for the journey! 🏴‍☠️🌴💰

Next up on our Laravel adventure: Custom Pennant drivers! You see, sometimes you might want to rig the game in favor of your own ship - I mean, application. Well, fear not, because we've got a way to let ye swashbucklers create your very own custom drivers! 🤘

Stay tuned for more swashbuckling Laravel tales and be sure to keep your eyes peeled for our upcoming guide on adding custom Pennant drivers! Yarr! 🏴‍☠️

 Alright, buckle up, coders! It's time for a wild ride as we embark on the quest to create our very own Custom Pennant Driver in Laravel Land. Let's get this show on the road! 🎠

<br>

### <a name="implementing-the-driver"></a> Steering the Custom Driver

First things first, you'll need to define a new service provider for your custom driver. This is like creating a brand new cowboy hat in a wild west saloon – it's going to be unique and badass! 🤠

Here's a sneak peek of the code you'll need to write:

```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CustomDriverServiceProvider extends ServiceProvider
{
    /**
     * Boot the service provider.
     *
     * @return void
     */
    public function boot()
    {
        if ($this->app->making('Illuminate\Contracts\Queue\Queue')) {
            $this->app->singleton(InteractsWithQueue::class, CustomDriver::class);
        }
    }
}
```

<br>

### <a name="creating-the-custom-driver"></a> Building the Custom Chariot

Now it's time to craft your custom driver. Think of it like building a new hotrod – with shiny chrome, sleek curves, and a powerful engine under the hood! 🚗

```php
namespace App\Drivers;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Manager;
use Illuminate\Events\Dispatcher;

class CustomDriver extends Manager implements ShouldQueue, InteractsWithQueue
{
    protected $name = 'custom';
    protected $dispatcher;

    public function __construct(Dispatcher $dispatcher)
    {
        $this->dispatcher = $dispatcher;
    }

    /**
     * Handle a job failure.
     */
    public function handleFailedJob($job, \Exception $exception)
    {
        // Handle the failed job here!
    }
}
```

<br>

### <a name="registering-the-custom-driver"></a> Polishing the Custom Driver

Now that your custom driver is all spiffed up, it's time to register it with Laravel. This is like entering your hotrod in a beauty pageant – you want everyone to see it! 🏆

You can do this by adding the following lines to your `config/queue.php` file:

```php
'connections' => [
    // ...
    'custom' => [
        'driver' => 'custom',
        'timeout' => 30,
    ],
],
```

<br>

### <a name="using-the-custom-driver"></a> Taking a Spin with the Custom Driver

Finally, you can now use your custom driver when dispatching jobs. It's like putting your foot on the gas and tearing down the road in your brand new hotrod! 🏎️

```php
use App\Jobs\YourJob;
use Illuminate\Support\Facades\Queue;

// Dispatch a job using the custom driver
Queue::push(new YourJob());
```

And there you have it, folks! You've successfully created a Custom Pennant Driver in Laravel Land. Now it's time to kick up some dust and enjoy the ride. Happy coding! 🎈🚀

 Alrighty then! If Pennant's existing storage drivers are about as useful as a chocolate teapot in a snowstorm for your application, it's time to dust off those coding chops and whip up a custom driver of your own! Your homemade marvel should adhere to the `Laravel\Pennant\Contracts\Driver` interface. Here's what that might look like:

```php
<?php

namespace App\Extensions;

use Laravel\Pennant\Contracts\Driver as DriverContract;

class CustomRocketFuelDriver implements DriverContract {
    // You can give it a catchier name, something like "Quantum-Powered Space-Time Warp Drive"

    public function define(string $feature, callable $resolver): void {}
    public function defined(): array {}
    public function getAll(array $features): array {}
    // ...and so on...
}
```

Now, let's slap some Redis into this bad boy! To do that, you'll need to implement each of these methods using a Redis connection. For an inspiring example of how to do this for each method, take a peek at the `Laravel\Pennant\Drivers\DatabaseDriver` in the [Pennant source code](https://github.com/laravel/pennant/blob/1.x/src/Drivers/DatabaseDriver.php).

> [!NOTE]
> Laravel doesn't come with a designated directory for your extensions – it's like inviting you to a party and forgetting to bring the chips and dip! In this example, we've set up an `Extensions` directory to stash our `CustomRocketFuelDriver`.

<a name="registering-the-driver"></a>
Now, let's register your custom driver. This is where you make it known to the Laravel universe that your driver exists and is ready to party! You can do this in the service provider of your application:

```php
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Contracts\Driver as DriverContract;
use App\Extensions\CustomRocketFuelDriver;

class PennantServiceProvider extends ServiceProvider {
    protected $providers = [
        CustomRocketFuelDriver::class,
        // ...other providers...
    ];
}
```

And there you have it! With a bit of elbow grease and Redis, your custom driver will be up and running like a well-oiled cosmic spaceship!

 Alrighty then! Let's get our Laravel driver registered, shall we? First off, once you've whipped up your driver like a pro chef in the kitchen of code, it's time to introduce it to the grand ball of Laravel. To do that, you can employ the `extend` method, a charming chap offered by the graceful `Feature` facade.

You'll want to call this sophisticated suitor from the `boot` method of one of your application's dashing service providers. It's a bit like asking the most eligible bachelor at a ball to dance:

```php
<?php

namespace App\Providers;

use App\Extensions\RedisFeatureDriver; // Your new driver, freshly squeezed and ready to mingle
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature; // The charming hostess of the ball

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ... But who needs manners when you've got good looks and a fancy dance step?
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Feature::extend('redis', function (Application $app) { // The 'ask' part, where we introduce our driver
            return new RedisFeatureDriver($app->make('redis'), $app->make('events'), []); // And make it official with a marriage proposal
        });
    }
}
```

After the registration ceremony is over, you can employ your new `redis` driver in your application's `config/pennant.php` configuration file:

```php
'stores' => [

    'redis' => [ // The official wedding ceremony, tying the knot with your driver
        'driver' => 'redis',
        'connection' => null,
    ],

    // ... Other guests at the ball
],
```

And there you have it! Your new driver is now an integral part of Laravel's grand ball of services. Now go forth and conquer more dances with your fancy new move! 🎉🕺️💃️

 ### Unleashing Features like a Boss (the External Way)

If your Pennant driver is basically a suit of armor worn by a third-party flag-waving squire, you'll likely be defining features on their court instead of summoning them with our trusty `Feature::define` incantation. If that's the case, your custom driver needs to don the cape of the `Laravel\Pennant\Contracts\DefinesFeaturesExternally` superhero cloak:

```php
<?php

namespace App\Extensions;

use Laravel\Pennant\Contracts\Driver as MagicalSteed; // because every knight needs a trusty steed!
use Laravel\Pennant\Contracts\DefinesFeaturesExternally as CapedCrusader; // because we're fighting feature flag crime, you know?

class FeatureFlagServiceDriver extends MagicRidingHood implements MagicalSteed, CapedCrusader {
    /**
     * Get the features defined for the given scope.
     */
    public function getFeaturesForScope(mixed $scope): array { // because in this kingdom, we're all about getting things done)
    }

    /* ... */
}
```

The `getFeaturesForScope` method should return a list of feature names defined for the provided scope. Because who doesn't love a good list? Now, go forth and conquer your feature flags with style!

 Ahoy there, captain! Sail into the seas of Laravel's eventful universe and let me be your jolly first mate! We've got a bounty of events ready to help navigate through the treacherous waters of feature flag management in yer app.

Here be some of our finest events:

- **Flag Created**: Ah, a shiny new flag has been raised! Keep an eye on it as it hoists proudly above the deck, ready for action.

```
event(new FlagCreated($flag));
```

- **Flag Updated**: The old flag's seen better days, and it's time to give it a spruce up! Let this event guide ye in updating its glorious design.

```
event(new FlagUpdated($flag));
```

- **Flag Deleted**: Yarr! A pirate swiped the flag while we were busy below decks! Worry not, this event will help ye track down which flag has met its watery demise.

```
event(new FlagDeleted($flag));
```

- **Flag Toggled**: Captains on both sides of a dispute agreed to call a truce and lower their flags! This event will keep you in the know when flags get raised or dropped.

```
event(new FlagToggled($flag, $toggled));
```

- **Flag Audit**: In case of sea monsters and mutiny, ye'll want to keep a log! This event will help ye record all the important changes to your flags for future reference.

```
event(new FlagAudit($flag));
```

Listen closely, matey! With these events in yer armory, you'll be able to steer through the feature flag fiasco like a seasoned sailor. Now grab your compass and let's set sail on this Laravel event adventure!

 Alright, grab your popcorn and buckle up, because we're about to dive into the thrilling world of Laravel Feature Retrieved Event – the action-packed spectacle that will leave your application's analytics department cheering!

Whenever a feature in your app decides it wants to play ball, this event gets tossed around like a frisbee in Central Park. If you're keeping score, this event is the MVP of the game when it comes to checking features – think of it as the referee, ensuring that everything runs smoothly and according to the rules.

But why settle for just watching from the sidelines? Leverage this event to create and track metrics against a feature flag's usage throughout your application. In other words, it's like having a superpowered scoreboard that gives you real-time updates on which features are winning the popularity contest and which ones need a time-out.

So, if you're tired of guessing what features are popular with users or want to track the performance of your latest release, the Laravel Feature Retrieved Event is your new best friend! It's like having a personal analytics coach guiding you through every feature flag toss and catch, helping you optimize your app for success.

 Ahoy there, coding swashbucklers! Let's set sail into the Laravel seas and navigate through the shimmering event known as `Laravel\Pennant\Events\FeatureResolved`!

When you find yourself wandering the shores of feature development, this event will beckon to you like a treasure map. It's dispatched when Jack Sparrow (or should I say, your code) first resolves the value of a feature for a specific scope – just like uncovering the lost city of gold!

So, hoist the Jolly Roger and prepare to celebrate! This event is the musical cue for the moment you've been working towards: when your feature finally reveals itself in all its glory. And don't forget to grab a peg leg and an eye patch – it's going to be one wild party! 🏴‍☠️🎉

 ### `Laravel\Pennant\Events\MysteryFeatureUnveiled`

Ahoy there, code adventurers! This event is like a treasure map for your Laravel app. It's triggered the first time an uncharted feature is unraveled within a specific territory (ahem, scope). If you're the kind who enjoys pirating out those pesky dead-end feature flags, this event will be your trusty parrot!

Here's a swashbuckling example of how to listen to it:

```php
<?php namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Laravel\Pennant\Events\MysteryFeatureUnveiled as UnknownFeatureResolved;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(function (UnknownFeatureResolved $event) {
            Log::error("Unveiling the mysteriously missing feature: [{$event->feature}]. Mark it on your map, matey!");
        });
    }
}
```

Remember to keep your code clean, or else you'll end up with a shipwrecked app! Arrrr!

 Ahoy there, coding pirate! Buckle up, because we're about to set sail on an adventure with `Laravel\Pennant\Events\DynamicallyRegisteringFeatureClass`. This isn't your ordinary sea shanty, but a delightful dance between PHP classes that only the most daring coders dare to tango!

Imagine you're cruising through the waters of your Laravel application when suddenly, a hidden treasure is uncovered - a class-based feature! But wait, there's more to this bounty than meets the eye. This event gets triggered when this hidden pirate's loot is dynamically checked for the very first time during a request.

So hoist the mainsail, grab your favorite codehook, and let's listen in on the action! This event is like the drums calling you to battle - it'll help ensure that each class-based feature is accounted for, so no valuable booty gets left behind! Arrrr, ain't that swell?

 ### Oh, the dramas of `Laravel\Pennant\Events\UnexpectedNullScopeEncountered`!

When this fella shows up, it's like a party crasher at your code bash, dropping off a null scope to a feature definition that's decidedly anti-null (check out the #nullable-scope for more deets).

But fear not! This uninvited guest handles itself with the finesse of a seasoned bouncer, and the feature casually slips out a polite "no can do" by returning `false`. However, if you're one of those party poopers who likes to throw your own tantrums (we all know one), you can override this event's default behavior by registering a listener in the `boot` method of your application's `AppServiceProvider`.

```php
Use the power of Facades, Log, and Laravel\Pennant\Events\UnexpectedNullScopeEncountered!

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    // We throw a 500 error instead of gracefully handling this situation
    Event::listen(UnexpectedNullScopeEncountered::class, fn () => abort(500));
}
```

Now, go forth and handle your unexpected null scopes with the elegance of a well-timed zinger!

 Ahoy there, coding pirate! Brace yourself for the thrilling tale of Laravel's swashbuckling event - `Laravel\Pennant\Events\FeatureUpdated`!

Setting sail on the high seas of your application, this maritime marvel is hoisted when you set course for updating a feature within a scope. That, my friend, typically happens after the "activate" or "deactivate" anchor has been dropped (aka called). So, prepare to batten down the hatches and keep those sea legs steady as we delve deeper into this nautical narrative!

Remember, just like a well-timed jibe can turn the tide of battle, properly understanding and utilizing `Laravel\Pennant\Events\FeatureUpdated` can ensure smooth sailing through your application's feature management waters. Happy coding, mateys! Arrrr!

 Ahoy there, coding sailors! Buckle up, because we're about to embark on an exciting journey through the shimmering seas of Laravel's feature updates! 🎉-set-sail-emoji

Prepare to hoist the Jolly Roger, for when you set sail with `Laravel\Pennant\Events\FeatureUpdatedForAllScopes`, ye be updating a feature across all scopes – no man left behind! 🏴‍☠️🔥

This event is typically triggered by calling `activateForEveryone` or `deactivateForEveryone`. It's like striking the pirate's gong, signaling that the whole crew (ahem, scopes) have been affected by your latest feature update! 🔔🏴‍☠️

So, grab a treasure map and some eye patches, and let's dive deep into Laravel's swashbuckling world of feature updates – but remember to keep one hand on your mouse, as the seas of code are not for the faint-hearted! 🌊🤞 pirate-emoji

 Ahoy there, coding cowpoke! Saddle up and grab your trusty keyboard, 'cause we're about to ride the Laravel range together! Buckle up as we dive into the `Laravel\Pennant\Events\FeatureDeleted` event - yee-haw!

This here event gets triggered when you're deleting a feature in town (or scope, if you prefer cowboy lingo), usually by corralling it with the trusty `forget` call. You know, like how you round up all your cattle and send 'em off to market. But instead of beef jerky, this time you're sending off a feature!

So when you hear the tumbleweeds rolling and see the dust cloud settling, it means ol' `FeatureDeleted` has been dispatched, and your deleted feature is on its way out of town. Keep on coding, partner!

 Alright, folks! Let's get this party started, because we're about to talk about something that'll make your Laravel app cleaner than a Kardashian's closet after a Marie Kondo session - the `Laravel\Pennant\Events\FeaturesPurged` event!

This little gem gets triggered when you decide it's time to throw out those unwanted features like an old pair of bell-bottom jeans that just don't fit anymore. Imagine being able to say goodbye to that clunky, unloved feature with a dramatic, "And that's all folks!" as it disappears into the ether.

So, if you've ever found yourself in a situation where your app is overstuffed with features like an episode of Black Mirror, this event is here to save the day and help you declutter for optimal performance. Just remember, when you purge those features, don't forget to throw in a "Ta-ta for now!" for good measure! ✌️👋🏻

 Ahoy there, code-wrangling pirates! Get ready to hoist the Jolly Roger of feature elimination! 🏴‍☠️⚓️

When the winds of change blow so fiercely that not even Captain Ahab's patience can endure, and the call for a shipyard overhaul echoes through your application, you'll find yourself at the helm of an epic purge. And who better to guide you than the Laravel\Pennant\Events\AllFeaturesPurged!

Yarrrr, that's right, me hearties! This swashbuckling event is the beacon that lights your path through the stormy seas of purging all features. When this parrot-perched event squawks its tune, you know it's time to grab your mops and buckets (or if you prefer, eloquent queries), and give your ship a much-needed scrubbing.

So gather 'round, ye landlubbers and sea dogs alike, as we set sail on this thrilling journey of feature obliteration! And remember, with every feature purged, your ship gets lighter and faster... or something like that. Happy purging, mates! 🌴🐘✨