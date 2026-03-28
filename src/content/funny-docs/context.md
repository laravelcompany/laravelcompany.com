 # The Great Laravel Journey: A Comic Adventure! 🎉🚀

## Chapter 1: Setting Sails 🌴

### Section A: The Grand Introduction 📚

#### Paragraph 1: How It Works 🔧
In this mystical land of Laravel, we'll learn to harness the power of context. Imagine it as a magic pocket, capable of storing our enchanted items for safekeeping and convenient retrieval. Sounds like a wizard's dream, right? Let's dive in! 🌊

<a name="capturing-context"></a>

## Chapter 2: Catching the Spellbook 📖

### Section B: Stacks (The Magic Pocket) 🎒

In this chapter, we'll learn how to stash our magical items into our pocket, a.k.a. the stack! It's as easy as casting a spell and viola! Your enchanted items are safe and sound in your trusty stack. Just remember, size matters - you don't want that dragon egg squishing everything else! 🐲

<a name="retrieving-context"></a>

## Chapter 3: Fishing for Treasure 🐬

### Section C: Determining Item Existence 🕵️‍♂️

Now that we've got our stack filled to the brim with magical goodies, let's learn how to find them! In this chapter, we'll delve into the art of detecting our items. Just like casting a locator spell, we can check if our treasure is hidden within the depths of our trusty stack. 🔍

<a name="removing-context"></a>

## Chapter 4: Clearing Out the Clutter 🧹

### Section D: Removing Context 🗑️

Sometimes, we might need to remove an item from our stack. In this chapter, we'll learn how to cast a spell of removal and clean up our magical inventory! Remember, one dragon egg is enough - no need for multiples! 🐲

<a name="hidden-context"></a>

## Chapter 5: The Secret Stash 🗝️

### Section E: Hidden Context 🕵️‍♂️

In the midst of our magical journey, we might find some hidden treasures. In this chapter, we'll uncover these hidden gems and learn how they can help us in our adventures! Keep your eyes peeled for those sneaky secret items! 👀

<a name="events"></a>

## Chapter 6: The Magic of Events 🎩

### Section F: Dehydrating 🌵

Prepare to witness the magical art of dehydration! In this chapter, we'll learn how to preserve our precious items during long journeys. Just like turning a frog into a prince, we can turn our enchanted items into something more compact and convenient for travel. 🐸

### Section G: Hydrated 🌊

And now, the grand finale! We've traveled far and wide, but it's time to return home. In this chapter, we'll learn how to rehydrate our items, turning them back into their original form just like Cinderella's pumpkin carriage! 🎗️

Our magical journey through Laravel has come to an end, but there's always more to learn and explore! Keep casting those spells and embarking on new adventures. Happy coding! 💫✨

 Hey there, coding cowpoke! Buckle up for a wild ride into Laravel's corral of contextual prowess! This here feature allows you to lasso, wrangle, and share data like never before across requests, jobs, and commands within your dusty old application.

But wait, that ain't all! This roped-in information also gets immortalized in the logs spun by your trusty steed (that would be your app). That means you can delve deeper into the smoke trail of code execution history that led to a particular log entry being penned, and trace those elusive execution flows like a seasoned trail boss across a sprawling distributed system.

<a name="how-it-works"></a>
Now, let's rope in some more details on how it all works! (Sorry, had to sneak in a bit of cowboy humor there.)

 Alright, buckle up, because we're about to dive into the delightfully mysterious world of Laravel's Context Capabilities! Let's make this as fun as a unicorn disco, shall we? 🎉🦄💃

First things first, imagine you're at a wild party and you want everyone to know who you are (your request) and where the shindig is happening (your URL). That's exactly what our Laravel middleware does! It's like being that cool guy who always introduces himself and gives directions.

```php
<?php
// Yes, we're talking about this wild party in a middleware! 🕺️
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Context; // Our new BFF!
use Symfony\Component\HttpFoundation\Response;
// And a bunch of other stuff, but who needs them when you have good company? 🤗
```

Now, this middleware guy greets every incoming request with his URL and unique trace ID (think party invitation number), making it easier to keep track of things. It's like having an extra pair of eyes at the party!

```php
// Middleware handle function, where the magic happens 🎩💃
public function handle(Request $request, Closure $next): Response
{
    Context::add('url', $request->url()); // Adding the URL to our BFF's contacts!
    Context::add('trace_id', Str::uuid()->toString()); // And the party invitation number too! 🎫

    return $next($request); // Time to let the real fun begin!
}
```

Now, when this middleware guy writes a log entry (like posting selfies on Instagram), these party details get automatically attached as metadata (hashtags). This way, we can distinguish these details from other shared information via our BFF, Context. For instance:

```php
// Logging some stuff! 📸
Log::info('User authenticated.', ['auth_id' => Auth::id()]);
```

The resulting log will have the `auth_id` passed to the log entry, but also our BFF's party details as metadata:

```text
User authenticated. {"auth_id":27} {"url":"https://example.com/login","trace_id":"e04e1a11-e75c-4db3-b5b5-cfef4ef56697"}
```

And guess what? Our BFF also comes in handy when dispatching jobs to the queue (like sending invites for the next party). Any information added to our BFF during a request is automatically shared with the job. It's like they're telepathic at this party!

```php
// Dispatching a ProcessPodcast job 🎉🎈
ProcessPodcast::dispatch($podcast);
```

When the job is executed, it writes a log entry containing the information added to our BFF during the request that originally dispatched the job:

```text
Processing podcast. {"podcast_id":95} {"url":"https://example.com/login","trace_id":"e04e1a11-e75c-4db3-b5b5-cfef4ef56697"}
```

While we've focused on the logging features of Laravel's Context, it's important to note that our BFF allows you to share information across the HTTP request/queued job boundary and even add [hidden context data](#hidden-context) that isn't written with log entries.

So there you have it! Laravel's Context is like having a party planner, photographer, and telepathic bartender all rolled into one. Now go forth and enjoy the wild ride that is Laravel development! 🥳🎈🎉

 Alrighty, let's dive into the world of Laravel Context, shall we? It's like a super secret spy notebook for your app! 🕵️‍♀️📓

To jot something down, you can use the `Context` facade's `add` method:

```php
use Illuminate\Support\Facades\Context;

Context::add('secret_recipe', 'Chocolate Chip Cookies');
```

Want to write a bunch of things at once? No problemo! Just pass an associative array to the `add` method:

```php
Context::add([
    'best_pun' => "Why don't scientists trust atoms? Because they make up everything!",
    'least_favorite_chore' => "Taking out the trash",
]);
```

The `add` method will replace any existing value that shares the same key. If you want to avoid overwriting, use the `addIf` method:

```php
Context::add('best_pun', "A light bulb walked into a bar...");

Context::get('best_pun'); // "Why don't scientists trust atoms? Because they make up everything!"

Context::addIf('best_pun', "I told my wife she was drawing her eyebrows too high... She looked surprised.");

Context::get('best_pun'); // "A light bulb walked into a bar..." 💡🌫️
```

Now, let's talk about our trusty dashboard. If you ever need to keep score like in a game show, Context provides methods for incrementing or decrementing values with the `increment` and `decrement` methods:

```php
Context::increment('laughs_today');
Context::increment('laughs_today', 5);

Context::decrement('laughs_today');
Context::decrement('laughs_today', 3);
```

Now, aren't you glad we have this secret notebook? Keep those context clues coming! 📚😉🕵️‍♀️

 Alrighty, let's dive into the world of Laravel's Conditional Context! Think of it as a bouncer at a club, deciding who gets to party with some sweet data. 🕺️💃️

The `when` method is our trusty bouncer here. It's like saying "If you're an admin (flashes VIP pass), come on in and join the fun with your permissions, but if you're not (stamps 'Sorry, denied' on your hand), well... we've got some empty permission list for you." 🌐🚀

Here's a little dance-off between our bouncer and some users:

```php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Context;

// Our bouncer (when method) is getting ready to work his magic!
Context::when(
    // Check if the user is an admin (flashes VIP pass)
    Auth::user()->isAdmin(),

    // If yes, add 'permissions' data from the admin user
    fn ($context) => $context->add('permissions', Auth::user()->permissions),

    // If no, serve an empty permission list (stamps 'Sorry, denied')
    fn ($context) => $context->add('permissions', []),
);
```

Now, your users can boogie their way through conditional data with this fabulous Laravel feature! 🤹‍♂️💃🕺️

 Alright, let's dive into the magical world of Laravel's Scoped Context! Imagine it as a party where you can change your outfit (context), dance (callback), and even invite some pals (extra data) without worrying about losing your original threads when the tunes stop. 🕺️

```php
First, let's get our party outfits sorted:

use Illuminate\Support\Facades\Context;
use Illuminate\Support\Facades\Log;

We're gonna slap a trace ID (trace_id) of 'abc-999', and a hidden user ID (user_id) of 123 on ourselves:

Context::add('trace_id', 'abc-999');
Context::addHidden('user_id', 123);
``
```
Now, let's jump into the scoped dancefloor! We'll put on a new action (adding_friend) and snag our original hidden user ID with style:

```php
Context::scope(
    function () {
        Context::add('action', 'adding_friend');
        $ourSecretID = Context::getHidden('user_id'); // Snatching the hidden user ID with flair

        Log::debug("Adding user [{$ourSecretID}] to friends list.");
        // Adding user [987] to friends list.  {"trace_id":"abc-999","user_name":"taylor_otwell","action":"adding_friend"}
    },
    data: ['user_name' => 'taylor_otwell'],
    hidden: ['user_id' => 987],
);
```
Once we're done busting moves on the dancefloor, let's check out our party outfit list (Context::all()) and our hidden ID stash (Context::allHidden()):

```php
// [
//     'trace_id' => 'abc-999',
// ]

Context::all();
// [
//     'user_id' => 123,
// ]
```

But hey, beware! If you decide to do the "Wobble" dance and modify an object within this scoped party, that change will stick around even after the music stops (or in other words, outside of the scope). 🤯🕺️

<a name="stacks"></a>

 ### Crackerjack Collection! 🍪

Ahoy there, mateys! Ever found yourself juggling a boatload of data and wished for a trusty ol' deck to keep it all in order? Well, set sail with Laravel's new "Crackerjack Collection" (a.k.a Stacks)! 🌴

This buccaneering feature allows ye to create lists, or "decks," of data, just by adding them to the pile, and in the order they were added at that! Here's a swashbuckling example:

```php
use Illuminate\Support\Facades\Context;

// Adding 'first_value' to our 'breadcrumbs' deck 📜
Context::push('breadcrumbs', 'first_value');

// Pirouetting on stage, we add 'second_value', 'third_value' to the same deck 🕺️
Context::push('breadcrumbs', ['second_value', 'third_value']);

// Peek at our 'breadcrumbs' deck 🪢
var_dump(Context::get('breadcrumbs')); // [ 'first_value', 'second_value', 'third_value' ]
```

These "decks" are swell for keeping tabs on the comings and goings of a request, like tracking events throughout your application, such as logging queries:

```php
use Illuminate\Support\Facades\Context;
use Illuminate\Support\Facades\DB;

// In AppServiceProvider.php...
DB::listen(function ($event) {
    Context::push('queries', [$event->time, $event->sql]);
});
```

But how do ye know if a card's been played before? Fear not! The `stackContains` and `hiddenStackContains` methods will help ya find out:

```php
if (Context::stackContains('breadcrumbs', 'first_value')) {
    // Yarr, we've seen that one before! 🏴‍☠️
}

// If ye be hiding secrets, use the `hiddenStackContains` method 🤫
if (Context::hiddenStackContains('secrets', 'first_value')) {
    // Shhhh... secret's safe 🤐
}
```

And when it comes to comparison, even Captain Jack Sparrow would approve! The `stackContains` and `hiddenStackContains` methods accept a closure as second argument for more flexible comparisons:

```php
use Illuminate\Support\Facades\Context;
use Illuminate\Support\Str;

// Are we only after queries starting with 'query_'?
return Context::stackContains('breadcrumbs', function ($value) {
    return Str::startsWith($value, 'query_');
});
```

So hoist the Jolly Roger and set sail for Laravel's swashbuckling world of data management with Stacks! 🏴‍☠️⚓️

 Alrighty then! Let's dive into the world of Laravel's Context, where data is as cozy as a pair of flannel pajamas and just as comforting.

First off, if you fancy getting some info from the context, you can use the good ol' `get` method on the `Context` facade:

```php
use Illuminate\Support\Facades\Context;

$whatchamacallit = Context::get('key');
```

Fancy a specific subset? No worries, the `only` and `except` methods have got your back:

```php
$buffet = Context::only(['first_key', 'second_key']);

$buffet = Context::except(['first_key']);
```

Want to grab something and throw it away? The `pull` method is your new best friend:

```php
$whatchamacallit = Context::pull('key');
```

Now, if your context data is living the high life in a [stack](#stacks), you can pop items like popcorn at a movie theater:

```php
Context::push('breadcrumbs', 'first_value', 'second_value');

Context::pop('breadcrumbs'); // second_value, because who doesn't love seconds?

Context::get('breadcrumbs'); // ['first_value'] - one less crumb in the jar!
```

Got a key but no data? No worries, the `remember` and `rememberHidden` methods will make sure you don't go hungry:

```php
$permissions = Context::remember(
    'user-permissions',
    fn () => $user->permissions,
);
```

Feeling nosy? You can grab all the data in the context with a single `all` method call:

```php
$data = Context::all();
```

<a name="determining-item-existence"></a>Oh, and if you're wondering how to find out if an item exists in the context, well, my dear friend, that would be like asking whether there's ice cream left in the freezer. You just gotta open it up and take a look! (Or use `Context::has()` if you're not into metaphors.) 🍦

Happy data-retrieving! 🎉

 Alrighty then! Let's dive into the enchanting world of Laravel Context, where keys and values live their magical lives. If you're curious about whether your wondrous realm has any treasure stored under a certain key, fret not! The `has` and `missing` methods are here to help you on your quest!

```php
Use Illuminate\Support\Facades\Context;

If (Context::has('key')) {
    // Proceed with your fabulous adventure!
}

If (Context::missing('key')) {
    // Time to embark on a new journey, comrade!
}
```

Now, let's shed some light on the `has` method. It's as if this enchanted method sees past any illusions and simply declares "yes" or "no" based on whether your key has been bestowed upon it, even if its value is as elusive as a unicorn's horn:

```php
Context::add('key', null);

Context::has('key');
// True, as if by magic!
```

Just remember that in the realm of Context, a key with a `null` value is still considered present. So don't let your guard down just yet! Happy trekking! 🧔🏼🏞️💫

 ## Forgetting is Key (... and Value)!

In this delightful Laravel world, where data keeps dropping parties left and right, the `forget` method comes in to clean up the mess - or more accurately, remove a key and its value from the current shindig:

```php
Use Illuminate\Support\Facades\PartyPlanner; // Yes, we're throwing a party here!

PartyPlanner::add(['first_key' => 1, 'second_key' => 2]); // RSVP for the keys and values!

PartyPlanner::forget('first_key'); // You know who to kick out next, right?

PartyPlanner::all(); // Now it's just ['second_key' => 2] - party's still lit though!
```

You can even forget several keys at once by throwing them all into the `forget` method like a digital piñata:

```php
PartyPlanner::forget(['first_key', 'second_key']); // Party crashers, out!
```

So, now that we've cleared up the party, let's see who's left on the dance floor:

<a name="hidden-context"></a>

 Alright, buckle up, coding cowboys! Let's dive into Laravel's secret stash – the Hidden Context. It's like your personal swiss bank account for data, nestled deep within the bowels of your application, untouched by logs and inaccessible via traditional data retrieval methods.

```php
Use Illuminate\Support\Facades\SwissBank; // Just kidding! It's actually Context.

SwissBank::depositSecret('key', 'value'); // Hides your data away, like a squirrel hoarding acorns.

SwissBank::withdrawSecret('key'); // Retrieves the hidden treasure.

SwissBank::get('key'); // Returns null, because that's what you get when you dig up buried treasure!
```

The "secret" methods are pretty much the same as their non-secret counterparts:

```php
SwissBank::depositSecret(/* ... */);
SwissBank::depositSecretIf(/* ... */);
SwissBank::lockSafe('key', /* ... */); // Okay, that last one was a stretch.
SwissBank::withdrawSecret('key');
SwissBank::emptySafe('key');
SwissBank::popSafe('key');
SwissBank::listContents('key');
SwissBank::checkIfHasKey('key');
SwissBank::forgetSecret('key'); // Like a bank employee who can't remember your account number.
```

Remember, just because it's hidden doesn't mean you can't keep track of it! Happy banking!

 ## Parties at the Context Bar! 🥳

In a wild turn of events (pun intended), our boozy bartender, the Context, is throwing two swanky soirees - hydration and dehydration bashes! These shindigs are your golden ticket to crash the Context's internal parties and customize its thirst-quenching concoctions.

Think of it as a VIP backstage pass at your favorite concert, but instead of meeting rockstars, you're hanging out with data and configurations! 🎤🤘

Let's say you've got a sassy middleware in your app that sets the `app.locale` to match the `Accept-Language` from incoming HTTP requests. Now, you can use Context's swanky events to catch this locale during the request and save it for later on the dance floor – we mean queue! By doing so, those notifications sent on the queue will be served up with the perfect `app.locale` cocktail. 🍹💃

To achieve this party trick, we can use Context's events and [secret stash](#hidden-context) data, as you'll see in the following tutorial.

<a name="dehydrating"></a>
Oh, and remember to bring your dancing shoes! 🕺💃 The dehydration party might get wild! 🎉

 ### Squeezing Out the Juice! (Dehydrating)

When a job takes a seat in our celery-green queue, we give it a good ol' squeeze – or should I say 'dehydrate'? – and capture its data along with the tasty payload. The `Context::dehydrating` method is the secret recipe to whip up a callback that gets called during this fun process. Inside this kitchen, you can toss in some changes to the data that will be serving the queued job at the dinner table (err... queue).

Remember to register your dehydrating secret ingredients within the `boot` method of your application's fancy-schmancy `AppServiceProvider` class. It's like adding the final dash of salt and pepper before it heads into the oven!

```php
use Illuminate\Log\Context\Repository;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Context as FacadeContext; // We don't want to mix things up!

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    $context = FacadeContext::getDehydrator(); // Fancy way of saying "call me when it's time to squeeze the juice!"

    $context->addHidden('locale', Config::get('app.locale'));
}
```

<a name="note"></a>
> [!WARNING]
> Don't be tempted to grab the `Context` facade in your dehydrating secret sauce, or you might end up with a kitchen disaster on your hands. Instead, stick to the repository we handed you and keep things tidy (and the kitchen from catching fire).

 ### Quenched, Not Just Thirsty!

When a job from the queue gets its groove on and starts dancing its execution jig, any juicy details you've shared with it will be "quenched" back into the current situation. The `Context::hydrate()` method lets you register a dance move (er, closure) that gets performed during this hydration party.

Now, you'd want to register these hydration moves within the `boot` event of your application's swankiest disco, aka the `AppServiceProvider` class:

```php
use Illuminate\Log\Context\Repository as ContextRepository;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Context as FacadeContext;

**Welcome to Cocktail Hour!**
public function boot(): void
{
    // Let the good times roll!
    FacadeContext::hydrate(function (ContextRepository $context) {
        if ($context->isSecretlyHiding('locale')) {
            Config::set('app.locale', $context->revealSecret('locale'));
        }
    });
}
```

> [!ATTENTION]
> Remember, don't get too carried away with the `Context` disco ball and instead make sure you only serve drinks (er, changes) to the guest list (repository) invited to this soiree.