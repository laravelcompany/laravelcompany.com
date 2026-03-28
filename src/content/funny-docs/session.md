 # The Globetrotter's Guide to Laravel Sessions

## Introduction to Our Jet-Setting Companion (Session)

### A Whirlwind Tour of Configuration and Driver Requirements

Ever been on a trip and forgot your passport? Not cool, right? Well, imagine if your users had to log in every time they turned their heads! That's where our trusty Session comes into play. It keeps track of who's who (or rather, who's logged in) and remembers important data between page loads.

### Driver Prerequisites: The Basics You Need Before Hitching a Ride

Just like how some countries require a visa before you set foot on their soil, some session drivers need a bit of setup before they can handle your Laravel adventures. Don't worry, we'll guide you through the paperwork!

<a name="interacting-with-the-session"></a>

## Navigating Your Travel Itinerary (Interacting with the Session)

### Retrieving Data: The Luggage You Can Never Forget at Check-In

Ever misplaced your toothbrush on vacation? We've all been there. But with our Session, finding data is a breeze! Just ask politely (using `session()->get()`), and it'll be handed right over to you.

### Storing Data: The Souvenir Shop You Can Never Forget in Venice

Venice has countless shops selling the same masks. But with our Session, storing data is a unique experience! Just add your items (using `session()->put()`) and they'll be there for you when you need them (until the session expires).

### Flash Data: The Fireworks Display You Only See Once

Remember that amazing fireworks show in Rio? It's gone now, but the memory remains. That's how flash data works! It stores temporary data (using `session()->flash()`) and disappears once the user is redirected.

### Deleting Data: Checking Out of Your Hotel Room

After a long vacation, it feels great to check out and leave behind all the clutter. With our Session, deleting data is just as satisfying! You can say goodbye (using `session()->forget()`) and rest easy knowing it's gone for good.

### Regenerating the Session ID: Getting a New Boarding Pass

Lost your boarding pass? No worries, you can get a new one! Similarly, if your session ID is compromised, you can regenerate it (using `session()->regenerate()`) to ensure your user's data remains secure.

<a name="session-cache"></a>

## The Travel Agency (Session Cache)

You ever need a place to store all those brochures for future reference? That's what our Session Cache does! It stores session data in memory, making your Laravel application faster than a cheetah on roller skates.

<a name="session-blocking"></a>

## The Baggage Claim (Session Blocking)

Ever waited at the baggage claim for what feels like an eternity? Session blocking can feel the same way when too many requests are being handled simultaneously. But don't worry, we've got your back with some built-in protections to keep things running smoothly.

<a name="adding-custom-session-drivers"></a>

## Designing Your Own Tour Guide (Adding Custom Session Drivers)

Ever wanted to lead your own tours? With our custom session drivers, you can! If the built-in drivers aren't quite what you need, you can create your own (by implementing the driver interface and registering it). It's like crafting your own adventure in Laravel Land!

 ## Greetings, Cyber Cowboy! 🤠

In the wild frontier of HTTP-land, where every cowpoke rides off after each request, it's a tough job remembering who's who. That's where good ol' Session Corrals come in handy! They help us keep track of our fellow wranglers (users) even when they gallop away.

These corrals are cleverly built with persistence in mind, storing user data in a trusty back-end that can be easily accessed as the need arises. It's like having a cowboy trail map for your data! 🗺️

Now, don't you worry about roping those wranglers yourself! Laravel has done the heavy lifting already and equipped its horse (your app) with a variety of lasso tools - I mean, session backends. Accessible through an API that's expressive and unified as a howdy from a friendly ranch hand.

You'll find familiar faces like [Memcached](https://memcached.org), [Redis](https://redis.io), and even some databases wrangled in there for your convenience! It's like the wild west saloon where everyone's invited to dance! 🤠

<a name="configuration"></a>
## Setting up Your Session Corral 🎪

Ah, you ask how to set up thisSession Corral? Well, cowboy, let me tell ya... It ain't rocket science, but it sure is important! Here's a quick how-to:

1. Saddle Up: First things first, mount your Laravel horse and navigate to the app's configuration files.

2. Corral Setup: Open up the `config/session.php` file. This here is where you can customize your session corral settings according to your wrangling needs.

3. Choose Your Lasso: Select one (or more!) of the session backends supported by Laravel. It's as easy as picking your favorite cowboy hat! 🤠

4. Break the Barrel: Save those changes and watch as your Laravel horse starts using this new corral for its herd management duties! And just like that, you've got yourself a fully functional session system! 🤠🚀

And there you have it, partner! Now you can keep tabs on all the cowpokes visiting your digital ranch without lifting a finger. Happy wrangling, and remember to keep your spurs shining! 💔😎

 Ahoy, adventurous coder! Your Laravel vessel's session compass is pointed at `config/session.php` – a treasure trove of options that'll keep your app's memory shipshape. By default, it's set to navigate the choppy waters of the `database` session driver, but there are plenty more sea shanties in this seafaring song!

The `driver` setting charts the course for where session data will be moored for each request. Laravel offers a fleet of drivers:

- `file` - Ahoy, matey! Sessions will be anchored in `storage/framework/sessions`.
- `cookie` - Sessions will be stowed away in encrypted, secure cookies (just like a pirate's hidden treasure!)
- `database` - Sessions will be docked safely at a relational database (pretty swashbuckling, right?).
- `memcached` / `redis` - Sessions will be cached and stored in these speedy, cache-based stores. Fast as the Poseidon Express!
- `dynamodb` - Sessions will be deposited in AWS DynamoDB (perfect for hoarding data like Scrooge McDuck in his Money Bin).
- `array` - Sessions will be stored in a humble PHP array, but don't worry – this ship doesn't sink! It's primarily used during [testing](/docs/{{version}}/testing) to prevent the data from being persisted (we wouldn't want any unwanted sea monsters sneaking aboard).

[!NOTE]
The array driver is more like a lifeboat for testing purposes, keeping the data stored in the session from being persisted.

 Ahoy there, coding pirates! Dive not just into the depths of treasures, but also into the secrets of Laravel's Driver Prerequisites! Arrrr we ready to set sail?

**Navigate to Database Configurations 🌳🌊**

First port of call: make sure your database is fully stocked with the right provisions before you hoist the anchor. For MySQL, PostgreSQL, and SQLite, Laravel requires:

- A PHP extension for your chosen database engine (e.g., pdo_mysql for MySQL).
- Access to a running instance of your chosen database system.
- Database credentials, including username, password, hostname, and database name.

**Set Sail for Redis Configurations 🌴☀️**

If you're planning on storing your ship's precious loot in a Redis cache (because who doesn't love faster performance?), then don't forget to install the phredis PHP extension. And of course, make sure you have access to a Redis server with its correct credentials!

**Prepare for the Journey Ahead 🌐⚓️**

Laravel's command line tool (artisan) is your compass and map for this adventure. To ensure it functions smoothly, Laravel needs:

- PHP's exec() function to be enabled.
- The Composer autoloader to be installed in the project root.

And that, me hearties, is a brief overview of Laravel's Driver Prerequisites. Keep this guide handy as you navigate through the seas of development, and remember: a well-prepared ship can sail through even the stormiest code! 🌈🐳

 Ahoy there, matey! Let's embark on a voyage into the magical world of Laravel databases! But first, let me set the scene. Imagine you're hosting a swashbuckling pirate party and need to keep track of who's walking the plank next - that's where our trusty session database comes in!

When you opt for the `database` session driver, you'll want to ensure there's a cozy abode (a.k.a., table) for all those pirate party shenanigans (session data). Now, if by some mishap your tavern lacks a 'Sessions Tavern' room (the infamous `sessions` table), fear not! Our trusty Artisan, the ship's cook, has got you covered. He can conjure up a pirate-friendly migration with just a simple command:

```shell
Arrr, ye mateys! Let's summon the Sessions Tavern migration!
php artisan make:session-table

And once that's brewed to perfection, let's apply it to our database:
php artisan migrate
```

Now, with your pirate party session data securely stored, you can keep track of who's taking their turn on the dance floor or concocting a new rum recipe! Happy sailing!

 Ahoy there, Laravel swashbucklers! It's high time we embarked on an enchanting journey through the mystical realms of Redis sessions! But first, prepare to set sail by either anchoring the PhpRedis PHP extension via PECL or hoisting the `predis/predis` package (~1.0) on your Composer galleon. If ye be needing a compass for this adventure, do check out Laravel's [Redis documentation](/docs/{{version}}/redis#configuration).

> [!NOTE]
> To ensure we're speaking the same Redis language, don't forget to set the `SESSION_CONNECTION` environment variable or adjust the `connection` option in the `session.php` configuration file, so we know which Redis port to knock on for storing our treasure-filled sessions.

Fasten yer eyepatches and grab yer compass as we embark on an adventure through the interactive seas of the session!

<a name="interacting-with-the-session"></a>
Now that ye be all set, prepare to plunder the riches hidden within the depths of your Laravel sessions! To do so, remember to:

1. Inject `\Illuminate\Session\Store` into yer controller constructor.
2. Use the `get`, `put`, `has`, `pull`, and `forget` methods as ye would on a pirate's treasure chest.
3. Don't forget to make use of Laravel's middleware for session handling, so that all hands aboard can share in the spoils!

 ### Unraveling the Mysteries of Your Laravel Cookie Jar 🍪✨

Ah, the session! The digital equivalent of a magical cookie jar where you can store all those tasty bits and bobs that make your application sparkle. Here's how to get started with this culinary marvel. 🥘

<a name="retrieving-data"></a>

#### Retrieving Data 🔑

Ever wondered, "What's that delicious snack I was munching on earlier?" Well, it's the same idea here! To find out what goodies are stashed in your session, you simply ask:

```php
$key = 'snack_name'; // replace with your favorite treat
$value = session()->get($key);
echo $value;
```

Don't forget to change `'snack_name'` to the name of whatever tasty morsel you're after. If it's not there, well... guess you'll just have to settle for a humble cracker 🍽️.

<a name="storing-data"></a>

#### Storing Data 🤓

Now let's say you want to add some extra flavor to your session. All you need is a key, the delectable morsel itself, and a little PHP magic:

```php
$key = 'new_snack';
session()->put($key, $yummyFood); // yummyFood is your savory creation
```

Just remember to replace `'new_snack'` with whatever you'd like to name your new session treat, and `$yummyFood` should be whatever tasty thing you're adding. If it's a complex recipe, maybe break it down into simpler ingredients for easier storage 🍲.

<a name="removing-data"></a>

#### Removing Data 😱

Sometimes, the session gets cluttered with all sorts of snacks you no longer fancy. To purge those unwanted items, simply use:

```php
session()->forget($key); // replace with the name of the snack you want to forget
```

And just like that, the offending snack is gone! No more pestering you during your coding marathons. 🍪🙅‍♂️

<a name="checking-session-status"></a>

#### Checking Session Status 📌

Ever wondered if your session has anything in it? Well, here's a fun little trick:

```php
if (session()->has($key)) { // replace with the name of the snack you want to check
    echo "I see you still have some " . $key . " left!";
} else {
    echo "Aw, I was hoping for some " . $key . ", but guess it's not in stock anymore.";
}
```

This will let you know if there's any deliciousness waiting for you in your session 😋.

And that's the lowdown on Laravel sessions! Go forth and fill your sessions with tasty tidbits, and may all your coding marathons be filled with good snacks and even better code. 🍽️🚀

 ### Unlocking Treasures: Data Retrieval in Laravel 5.0's Seshi-o-matic 3000!

Ahoy there, data detectives! In the mystical world of Laravel, we have two swashbuckling ways to navigate the enchanting session data - the global `session` sorcerer and via a dashing `Request` damsel! Let's dive into accessing the session through a dapper `Request`, which you can tie up in a route closure or controller method, reminiscent of a medieval ballad...

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Whisk the user's profile before ye!
     */
    public function show(Request $request, string $id): View
    {
        $key = 'key'; // Aye, let's call it Captain Obvious' key ring.
        $hidden_treasure = $request->session()->get($key);

        // ...

        $user = $this->users->find($id);

        return view('user.profile', ['user' => $user]);
    }
}
```

When ye seek an item from the session, remember you can provide a back-up plan as the second argument to the `get` method! This secret stash will be handed over if the specified key happens to be missing in action. If you pass a secret spy mission closure as the default value to the `get` method and the requested key disappears without a trace, the covert operation will kick off and its outcome unveiled:

```php
$hidden_treasure = $request->session()->get($key, 'default');

$hidden_treasure = $request->session()->get($key, function () {
    return 'default'; // Aye, it's "default" as a back-up plan, Captain!
});
```

Now that you've got the hang of it, go forth and conquer data retrieval in Laravel 5.0's Seshi-o-matic 3000!

 Ah, the Global Session Helper! It's like a digital Swiss Army Knife for your Laravel application's memories. Instead of digging through drawers or asking Siri to remind you about that important meeting tomorrow, you can just call upon this magical helper.

Here's how it works: When you want to fetch something from the session, simply summon the helper with a single string argument - think of it as whispering the secret password to gain access to the vault.

```php
Route::get('/home', function () {
    // Whisper the password and let the session reveal its secrets...
    $value = session('key');
});
```

But what if you don't remember the exact key? No worries, you can specify a default value as backup:

```php
Route::get('/home', function () {
    // Whisper a password or ask for 'default'. The session won't judge.
    $value = session('key', 'default');
});
```

Now, if you feel the need to add new memories (or in this case, data), simply tell the session helper an array of key-value pairs:

```php
Route::get('/home', function () {
    // Store some juicy gossip...
    session(['key' => 'value']);
});
```

Now that we have a good laugh, let me share something practical with you. Using the global `session` function and the helper are much the same as far as your application is concerned. Both can be tested with the `assertSessionHas` method in all of your test cases, so feel free to keep testing those memories! 🤓

Want more session fun facts? Head over to [our documentation](/docs/{{version}}/testing) for even more details on retrieving all session data. Happy coding, and remember: with the Global Session Helper, no memory (or application) is ever lost! 😉

 Alrighty, buckle up! If you're itching to know what's cooking in your session (like a secret recipe that even your mom doesn't know), you can use the `all` method. It's like the ultimate kitchen spatula, flipping over all the tidbits stored in the session.

```php
$secretRecipe = $request->session()->all();
```

Now you're one step closer to finding out if your users have been sneaking extra cheese on their pizza orders! 🍕🤫

 Alright, mate! Let's dive into the mystical realm of Laravel sessions, where your user data lives in a magical chest (okay, it's just an array, but bear with me). To grab a piece of this treasure, you can use the `only` and `except` methods, like you would at a buffet!

Imagine you're at an all-you-can-eat seafood feast (Laravel themed, naturally), and instead of piling every shellfish onto your plate, you only want the shrimp (username) and fish (email). Here's how you do it:

```php
$data = $request->session()->only(['shrimp', 'fish']); // Just give me those two, chef!
```

Now, what if you've had your fill of shrimp and fish and only want to avoid the lobster (username) and crab (email)? Here's how:

```php
$data = $request->session()->except(['shrimp', 'fish']); // No more seafood for me, thanks!
```

Just remember, in the session buffet, every user is served a different menu. So you might want to check if an item exists before serving it up. Laravel provides a helpful function called `has`:

```php
if ($request->session()->has('lobster')) { // Do I have any lobster left for this user?
    // Serve the lobster!
} else {
    // Sorry, no more lobster today.
}
```

And there you have it! Your Laravel session data, served up with a side of humor and plenty of seafood references. Now go forth and manage those sessions like a pro!

 Alrighty, let's dive into the thrilling world of Laravel session management, where data storage feels more like a high-stakes game show than coding!

#### Is Your Item in Session Lottery? Let's Find Out!

Ever wondered if your beloved session item is lurking about like Bigfoot in the woods? Worry no more! We got the perfect solution - the `has` method, which plays session detective. If your item is there, enjoying the party, it will shout "YES!" and set your code free to roam:

```php
if ($request->session()->has('users')) {
    // Party on, Wayne!
}
```

But hold up, what if your item is just a little camera-shy and prefers to be unseen? Fret not! The `exists` method, our stealthy ninja, will sneak into the session to see if your item's there, even in its transparent glory:

```php
if ($request->session()->exists('users')) {
    // Even ghosts are accounted for here!
}
```

And sometimes, you might want to know if your item isn't present. That's when the `missing` method swoops in like a superhero, raising a flare:

```php
if ($request->session()->missing('users')) {
    // Our item is nowhere to be found! Time for a manhunt...
}
```

Now that we've got the basics down, let's move on to storing data... but that's a story for another day, my friend! 😉

 Ahoy there, data hoarders! 🐘 If you're on a Laravel voyage and find yourself in need of a safe harbor for your precious data, fear not! For stowing away those priceless bytes, we've got a couple of swashbuckling methods at your disposal.

First off, let's introduce ye to the `request` instance's mighty `put` method:

```php
// With a trusty request instance...
$request->session()->put('key', 'value');
```

Next up, we present to you the infamous global `session` helper, a seafaring companion you can always rely on for emergencies:

```php
// Through the mysterious "session" helper...
session(['key' => 'value']);
```

These methods are like our ship's trusty treasure chest, keeping your booty safe until ye need it again. Hoard away, mateys! 🏴‍☠️🐎

 Oh, the joy of Laravel! Let's dive into the enchanting world of session arrays - where magic happens behind the scenes!

You might find yourself in a situation where you've got an array of team names stored under `user.teams` key (because who doesn't love having their own little sports league, right?). If you're eager to add a new team to your roster, fear not! Laravel has just the trick for you - the `push()` method!

```php
$request->session()->push('user.teams', 'developers'); // Boom! You just signed up the developers.
```

Now, don't let this humorous tone fool you; we're still talking about arrays here. So if you ever need to retrieve or delete an item from your session array, you can always count on Laravel to have the right tools for the job! (But hey, remember, no hard feelings if you want to kick a team out of your league!)

<a name="retrieving-deleting-an-item"></a>
Hang on to your keyboards, because here's how you can get or delete an item from that array:

```php
// To get the 'developers' team, you can use something like this:
$teams = $request->session()->get('user.teams'); // Don't forget to check if $teams is set!

// If you want to kick the developers off the team (delete them from the session), use:
$request->session()->pull('user.teams', 'developers');
```

And there you have it! With Laravel, managing your session arrays is as easy as cheering for your favorite team (or booting them out when they underperform). Keep coding and enjoy the ride! 🚀🥳🎉

 Ah, the world of Laravel sessions! Where dreams are made of PHP and sessions. 🎵🎧

Let's dive right in, shall we? Ever found yourself in a pickle, trying to retrieve AND delete an item from your session all at once? Fret not, my friend, for the `pull` method is here! It's like the magical spoon that stirs your code pot, retrieves its contents, and whisks it away before you can say "Gone with the Wind-ish Session Data!" 🏃‍♂️

```php
$value = $request->session()->pull('key', 'default');
```

Just replace `'key'` with your session key, and `'default'` with what you want to display if the key isn't found. It's as simple as a one-liner joke at a comedy club! 🎤🥁

Now, if you're looking for something more... numerically inclined, let's talk about incrementing and decrementing session values. Here's where the `increment` and `decrement` methods come into play. They're like the plus and minus buttons on a calculator, but for your session data!

```php
// Increment the value of 'counter' in the session by 1:
$request->session()->increment('counter');

// Decrement the value of 'counter' in the session by 1:
$request->session()->decrement('counter');
```

You can also customize the amount you want to increment or decrement by providing a numeric value. For example, if you wanted to increase your `'money'` session variable by 50 bucks:

```php
// Increase the 'money' in the session by 50:
$request->session()->increment('money', 50);
```

And that, my dear code explorers, is a brief journey through Laravel sessions! Hope you enjoyed this little dance we called "Session Management." Keep on coding, and remember - it's not just about writing the right code, but also making it fun along the way! 🥳💃

Stay amazing! 🚀✨

 Ah, the world of Laravel sessions! Where numbers get a workout they never asked for. But fear not, my dear developer friend, for I'm here to guide you through this session-filled adventure.

So, imagine you're at a party and you've got a scoreboard with counters - that's what Laravel sessions are like! Now, if you want to increase your 'count' by one (because who doesn't love a good count-up, amirite?), you can simply summon the `increment` method:

```php
$request->session()->increment('count'); // One more point for team You!
```

But what if you're feeling fancy and want to increment by something other than one (like when you're playing a game of 'Twenty Questions' and it's your 20th question)? Well, no worries! Laravel has got your back:

```php
$request->session()->increment('count', $incrementBy = 2); // Two points for team You!
```

Now, let's say you've had one too many sessions and need to decrease that 'count'. No worries, just use the `decrement` method:

```php
$request->session()->decrement('count'); // One point deducted from team You.
```

And if you want to decrease by more than one (let's say it's a session detox), Laravel is ready for the challenge:

```php
$request->session()->decrement('count', $decrementBy = 2); // Two points deducted from team You.
```

So go on, make your sessions dance to the rhythm of numbers! And remember, in the world of Laravel, it's always party time... and who doesn't love a good count-up or count-down?

 ### Flashing the Sessions, Not the Dance Move! 💃️

Ever found yourself in a situation where you wished to stash some goodies for the next round? Well, Laravel's got your back with the `flash` method! This magical technique lets you store tasty tidbits in the session for the next request. And just like your neighbor's secret cookie recipe, it vanishes after the subsequent HTTP request 🍪. So perfect for those fleeting success messages:

```php
$request->session()->flash('dance-floor-boogie', 'Task was a sizzling success!');
```

Now, if you're craving for your flashes to linger longer than one dance, you can whip out the `reflash` method. It'll keep all the flash data dancing for an extra round. If you've got selective taste, go for the `keep` method and pick only your favorite flavors:

```php
$request->session()->reflash();

$request->session()->keep(['username', 'email']);
```

Or, if you simply want to enjoy your flash data on a one-night-only basis, the `now` method's your best bet:

```php
$request->session()->now('dance-floor-boogie', 'Task was a sizzling success!');
```

<a name="deleting-data"></a>
Remember, as with any great party, all good things must come to an end. To clear the dance floor and start fresh, you can employ the `forget` method:

```php
$request->session()->forget('dance-floor-boogie');
```

Happy flashing! 🎉🥳️

 Ahoy there, Laravel swashbucklers! Fancy a dive into the mystical realm of session management? Brace yourself for some pirate puns as we navigate through the `forget` method and its mighty quest to erase data from our ship's memory (session).

First off, if you've been hoarding secrets like Captain Jack Sparrow with his treasure map, the `forget` method is your trusty compass! It steers clear of a specific data piece from our session. Swashbuckle this:

```php
// Forget a single secret... (Arrrr!)
$request->session()->forget('name');

// Forget multiple secrets... (Ye be warning me about the rum!)
$request->session()->forget(['name', 'status']);
```

But wait, there's more! If you're feeling like Blackbeard and want to burn all your maps to the ground (or rather, session), the `flush` method will oblige. It wipes out everything from our session like a tidal wave crashing on a shore:

```php
$request->session()->flush();
```

Now that's what I call a clean sweep! Happy hoarding and safe sailing, mates! May your treasure chests (or sessions) remain overflowing with riches, but remember, it's not always about keeping everything; sometimes, it's knowing when to let go. Keep those secrets tight, but don't be too afraid to set a few adrift in the sea of data! 🦐🍤

 ### Giving Your Session a Fresh Lease of Life! 🎉

Ever found yourself in a pickle with a sneaky, session-savvy cyber-skunk trying to take advantage of your application's innocent session fixation? Fear not! Laravel's got your back with its super-cool session ID regeneration feature.

Laravel is like the Secret Service Agent of web frameworks, automatically regenerating your session ID during authentication. But if you're feeling a bit more hands-on, or if the Agent's on a coffee break, you can always step in and do it yourself using the `regenerate` method:

```php
$request->session()->regenerate(); 🌪️ (Think of it as hitting refresh on your session cookies!)
```

But wait! There's more! If you want to not only regenerate the session ID but also clear out the session data, you can do so with a single statement using the `invalidate` method:

```php
$request->session()->invalidate(); 🗑️ (That's like deleting all your old selfies - you'll start fresh!)
```

Now that we've got your session sorted, let's keep the party going! 🎉🥳

 ## Seshy's Secret Stash 🎒

Welcome to your digital Swiss Army Knife for all things ephemeral! Laravel's Session Cache is here to spice up your life by providing a playground for data that's bound to an individual user's journey. Unlike the global disco dance floor (AKA application cache), our Seshy's Secret Stash ensures that each user gets their own private booth, and clean-up crew kicks out any leftovers when their session ends or gets demolished.

Don't be fooled by its name though; this stash is packed with all the bells and whistles of our [famous Laravel cache methods](/docs/{{version}}/cache) like `get`, `put`, `remember`, `forget`, and more, but they're all tailored just for your current session.

When you need to keep temporary, user-specific data alive across multiple requests within the same session, but don't want it to stick around permanently (like an awkward party guest), Seshy's Secret Stash is your go-to gal! It's perfect for stashing form data, temporary calculations, API responses, or any other fleeting data that should be tied to a specific user's adventure.

Ready to play hide and seek with data? You can access this magical stash through the `cache` method on the session:

```php
$discount = $request->session()->cache()->get('discount');

$request->session()->cache()->put(
    'discount', 10, now()->plus(minutes: 5)
);
```

For more information on Laravel's cache methods, consult the [cache documentation](/docs/{{version}}/cache). And don't forget to check out our Seshy's Secret Stash user manual for some serious fun! 🎉🎊🚀

 ## Sessions on Steroids! (Or, How Not to Get Left Hangin' by Your Own Session)

[!ATTENTION]
Session Blocking is like the secret sauce that your application needs, but only if it's already got a cache driver that supports something called Atomic Locks. We're talkin' about `memcached`, `dynamodb`, `redis`, `mongodb` (the one included in the official Laravel MongoDB package), `database`, `file`, and `array` drivers. And sorry, cookie monster, but you can't join this party!

By nature, Laravel lets multiple requests dance the concurrent tango using the same session. So if you're sending two requests to your application using a fancy JavaScript HTTP library, they'll do their thing together like a well-choreographed duet... but not always in a good way! In a select few applications, this can lead to session data loss when concurrent requests hit two different endpoints that both want to write to the session.

To save your sessions from an unwanted split, Laravel brings you the power to limit the number of concurrent requests for a given session! To get started, just chain the `block` method onto your route definition. In this example, any incoming request to the `/profile` endpoint would grab a session lock. While this lock is in play, any incoming requests to `/profile` or `/order` endpoints that share the same session ID will have to wait patiently for the first one to finish its business before they can join the party:

```php
Route::post('/profile', function () {
    // ...
})->block($lockSeconds = 10, $waitSeconds = 10);

Route::post('/order', function () {
    // ...
})->block($lockSeconds = 10, $waitSeconds = 10);
```

The `block` method takes two optional arguments. The first is how long (in seconds) the session lock should stay locked down before it's released. If the request finishes early, it'll let go of the lock sooner.

The second argument sets the number of seconds a request will wait while trying to grab the session lock. If it can't get its hands on that lock within the given time frame, it'll throw an `Illuminate\Contracts\Cache\LockTimeoutException`.

If you don't specify these arguments, the lock will stay active for 10 seconds and a request will wait up to 10 seconds before trying to grab the lock:

```php
Route::post('/profile', function () {
    // ...
})->block();
```

<a name="adding-custom-session-drivers"></a>
And remember, with great power comes great responsibility. So make sure you use session blocking wisely, like a seasoned dance partner who knows when to lead and when to follow! 💃🏼🕺🏼

 **Unleashing Your Inner Tech Wizard: Crafting Custom Sessions Like a Boss 🧙‍♂️🔮**

*Cue the dramatic music, it's time to dive into the magical world of Laravel custom session drivers!*

<a name="implementing-the-driver"></a>

### Implementing the Driver (Because we all love a good challenge) 🏆

In the realm of Laravel, there are multiple ways to store and manage user data during their active sessions. However, if you're feeling adventurous and want to create your own session driver, you've come to the right place!

To embark on this exciting journey, first, you must follow these simple steps:

1. **Create a new directory:**
   Navigate to `app/Http/Middleware` and conjure up a fresh folder named after your custom driver (e.g., `WitchySessions`). Inside it, birth two new files: `SessionStart.php` and `Handle.php`.

2. **Instantiate the Session Manager:**
   In the `SessionStart.php`, sprinkle some magic by extending the base middleware class (`\Illuminate\Session\Middleware\StartSession`) and registering your custom session driver with Laravel's dependency injection container:

```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Session\Store;
use WitchySessions\Session as CustomSession;

class SessionStart extends \Illuminate\Session\Middleware\StartSession
{
    protected $sessionDriver;

    public function __construct(Store $sessionDriver)
    {
        $this->sessionDriver = new CustomSession();
    }
}
```

3. **Implement the `SessionHandlerInterface`:**
   In the `Handle.php`, cast a spell by creating a class that implements Laravel's `SessionHandlerInterface`. This is where you will define your custom session handling methods:

```php
namespace WitchySessions;

use SessionHandlerInterface;
use Closure;

class Session implements SessionHandlerInterface
{
    // Implement the SessionHandlerInterface methods here...
}
```

4. **Register the Custom Middleware:**
   Lastly, summon your custom middleware to life by adding it to the `$middlewareGroups` and `$routeMiddleware` arrays in `app/Http/Kernel.php`.

And voila! You've now created a custom session driver, proving once again that even in the world of Laravel, magic is real! ✨🔮🚀

 ### Unleashing Your Inner Session Whiz!

If the existing session drivers in Laravel are as exciting as a bag of stale breadcrumbs, fear not! Laravel lets you whip up your own session handler to fit your app like a glove. Your custom session driver should be fluent in PHP's built-in `SessionHandlerInterface`, which is just a smorgasbord of simple methods. Here's a tantalizing glimpse of what a MongoDB implementation might look like:

```php
<?php

namespace App\Extensions;

class MongoSessionHandler implements \SessionHandlerInterface
{
    // Your custom session driver starts here...
}
```

Now, Laravel won't baby-sit your extensions in a designated daycare center. Instead, you get to decide where these little bundles of joy reside – a bit like letting your child choose their bedroom wallpaper! For this example, we've created an `Extensions` directory as their cozy new home for the `MongoSessionHandler`.

Now, if you're finding yourself scratching your head about what these methods do, here's a quick rundown:

<div class="content-list" markdown="1">

- The `open` method is like the key to the filing cabinet of session stores. Since Laravel already has a `file` session driver that's as reliable as a well-oiled machine, you can usually leave this locked and loaded with nothing but air inside.
- The `close` method is like the light switch of the session world – typically, it's not necessary to flick it off unless specifically required.
- The `read` method serves up the session data string tied to a given `$sessionId`. No need to add any fancy seasoning or condiments; Laravel will take care of serialization for you.
- The `write` method is where you'd store your delicious session data string, tagged with its unique `$sessionId`, in a suitable storage system – like MongoDB or another delectable option of your choosing. Again, let Laravel handle the seasoning for you.
- The `destroy` method tosses the data tied to `$sessionId` out the kitchen window (into persistent storage, that is).
- The `gc` method is a cleaning spree that sweeps away all session data older than the given `$lifetime`, which is like a timestamptastic dinner guest who overstayed their welcome. For self-expiring systems like Memcached and Redis, you can leave this room tidy and empty.

</div>

<a name="registering-the-driver"></a>
Now that your custom session driver is all dressed up with nowhere to go, let's introduce it to the Laravel ball!

[Registering the Driver](#registering-the-driver) 🕺️💃️

 Alrighty, buckle up, coders! You've just whipped up a fresh Laravel driver, and now it's time to make it an official member of the Laravel family. To do that, we're gonna register your newcomer with a little help from our friends at the `Session` facade (think of them as the head cheerleaders in this scenario).

First things first, you'll want to call upon the `extend` method from the `boot` function of a service provider—the Laravel version of inviting your new friend to the party. You can either do this with the existing `App\Providers\AppServiceProvider`, or if it's too crowded there, feel free to create an entirely new one (like asking someone to bring their plus-one).

Here's a little dance routine you can follow:

```php
<?php

namespace App\Providers;

use App\Extensions\MongoSessionHandler; // Your new friend
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class SessionServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ... (Your other friends will be here if needed)
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Session::extend('mongo', function (Application $app) { // Inviting your friend
            // Return an implementation of SessionHandlerInterface...
            return new MongoSessionHandler; // Introduce them to their role
        });
    }
}
```

Once your new driver is officially registered, you can specify it as the star of your application's session show with a friendly nod from the `SESSION_DRIVER` environment variable or by chatting it up in the `config/session.php` configuration file.

And there you have it! Your new Laravel driver has now been welcomed into the family, ready to join the dance floor and contribute to your app's success. Keep on codin', partners! 🤠🚀