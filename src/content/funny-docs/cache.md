 # Unleash the Power of Cache! (Or, How to Speed Up Your App Without Breaking a Sweat)

Welcome, speed demons and lazy coders alike! Let's dive into the world of Laravel Cache – where your application's performance goes from 'sluggish' to 'superhero-level fast'.

<a name="configuration"></a>
## Setting Up Shop (Configuration)
First things first: let's make sure your chosen cache driver has all its prerequisites in order. No one wants a grumpy, unprepared driver making their life difficult!

<a name="driver-prerequisites"></a>
### Driver Prerequisites (The 'Are You Ready to Mingle?' Check)

<a name="cache-usage"></a>
## Using the Cache (How to Play with Your New Best Friend)
Now that you've got your driver all suited up, let's get acquainted! Here's how to obtain a cache instance, retrieve items, store new ones, extend their lifetimes, and more. Yes, we're about to become BFFs with our app's performance.

<a name="obtaining-a-cache-instance"></a>
### Obtaining a Cache Instance (Meeting Your New Best Friend)

<a name="retrieving-items-from-the-cache"></a>
### Retrieving Items from the Cache (Snooping on Your Friend's Secrets)

<a name="storing-items-in-the-cache"></a>
### Storing Items in the Cache (Sharing Your Secrets with Your Friend)

<a name="extending-item-lifetime"></a>
### Extending Item Lifetime (Making Sure the Party Never Ends)

<a name="removing-items-from-the-cache"></a>
### Removing Items from the Cache (Deleting that Awkward Photo)

<a name="cache-memoization"></a>
### Cache Memoization (Lazy Loading for Your App)

<a name="the-cache-helper"></a>
### The Cache Helper (Your New Best Friend's Trusty Sidekick)

<a name="cache-tags"></a>
## Cache Tags (Sticking Name Tags on Your Friends for Easy Grouping)

<a name="atomic-locks"></a>
## Atomic Locks (Locking Arms with Your Friends for Joint Ventures)
Let's get a little more serious now – managing locks, crossing process boundaries, and limiting concurrency. It's time to put on our superhero capes!

<a name="managing-locks"></a>
### Managing Locks (Protecting Your Friendships from Intruders)

<a name="managing-locks-across-processes"></a>
### Managing Locks Across Processes (Coordinating Global Takeovers with Friends)

<a name="concurrency-limiting"></a>
### Concurrency Limiting (Preventing Chaos at the Friendship Party)

<a name="cache-failover"></a>
## Cache Failover (Having a Backup Plan for Your Besties)

<a name="adding-custom-cache-drivers"></a>
## Adding Custom Cache Drivers (Designing a Unique Best Friend Costume)
Want to create your own cache driver? Here's how to write it and register it. You're about to join the exclusive club of custom cache driver creators!

<a name="writing-the-driver"></a>
### Writing the Driver (Building Your Friend's Unique Superpower)

<a name="registering-the-driver"></a>
### Registering the Driver (Introducing Your Friend to the World)

<a name="events"></a>
## Events (Throwing Parties for Your Best Friends)
And finally, let's not forget about events – they're perfect for keeping your cache up-to-date and in the loop!

 Alrighty! Let's dive into the world of Laravel caching, where data retrieval is faster than Usain Bolt on a bag of Doritos.

Imagine you're hosting a killer party, but some guests are hogging the conversation and slowing things down. Enter caching – your bouncer that keeps only the most popular topics (data) at the entrance, so when someone asks about them again, they can skip the line and join the fun instantly!

Laravel's got your back with a snazzy API for various cache backends like Memcached and Redis. Think of it as the ultimate VIP list for data storage – fast, reliable, and always ready to serve up the freshest data! 🥳🍾🎉

<a name="configuration"></a>
Now, let's get our party started by setting up this cache system. You can find the configuration file in `config/cache.php`. It's like your bouncer's ID badge – you'll want to make sure it's set to your preferred cache driver! 🎫🚀💼

 Alrighty, let's chat about your app's memory management situation! The party planning committee (a.k.a., your cache configuration file) hangs out at `config/cache.php`. This is where you decide which of the cool kids on the cache block (like Memcached, Redis, DynamoDB, and even your trusty relational databases) gets to be the prom king for your entire application.

Laravel's got some swanky moves, as it supports a variety of caching backends right out of the box. If you're feeling fancy, Memcached will have your app dancing the night away with blazing speeds. For those who prefer a bit more finesse, Redis is ready to waltz across the dancefloor with its robust features. For all you AWS enthusiasts, DynamoDB has got the right rhythm for your cloud-based applications. And hey, if you're old school and love that relational database vibe, it's more than welcome at the ball too!

But wait, there's more! Laravel even offers a file-based cache driver and the 'array' and 'null' cache drivers for your test automation needs. Yes, they might not have the dance moves of Memcached or Redis, but they sure know how to keep your tests running smoothly without any awkward pauses.

Now, what about those other options in the party planning committee file? By default, Laravel starts off with the 'database' cache driver, storing all those fancy cached objects right in your application's database. Imagine having a backup of your app's dance moves!

<a name="driver-prerequisites"></a>
Just remember to ensure that the cache driver you choose has its prerequisites met before hitting the dancefloor, or you might find yourself standing alone while everyone else is boogying down!

 Ahoy there, intrepid coder! Welcome to Laravel's Database Driving School where we teach you how to steer those SQL queries like a pro! Before we rev up our engines, let's make sure you've got all the necessary gear. Here are the prerequisites for our exciting journey:

<a name="prerequisites-database"></a>

#### Driver's License (MySQL, PostgreSQL, SQLite, or SQL Server)

No need to worry if you don't have one yet – we're a driving school after all! But since we can't hand out real licenses just yet, we'll teach you how to use MySQL, PostgreSQL, SQLite, or SQL Server to store your app's data like a seasoned mechanic.

#### PHP 7.26 or greater

We know, PHP sounds like something from a bad comedy movie. But it's the engine that powers Laravel's shiny red Ferrari! So, make sure you've got at least version 7.26 (it's been through some tough times and came out stronger) or higher under the hood of your machine.

#### Composer

Think of Composer as the Swiss Army knife of PHP development. It helps us install Laravel quickly, manage dependencies, and keep our code organized like a well-oiled machine. To make sure you've got it all set up, follow these simple steps:

1. Download the latest version from https://getcomposer.org/download/
2. Extract the downloaded zip file into your system directory (or wherever you keep your tools)
3. Add the following line to your system's PATH environment variable: `C:\path\to\composer` or `/usr/local/bin/composer`, depending on your operating system
4. To verify Composer is working, run `composer --version` in your terminal and see a shiny new version number appear!

Now that we've covered the basics, buckle up and get ready for an unforgettable ride through Laravel's world of database joyrides! 🚗🎉

 Alrighty then! Let's talk databases, Laravel style. When you're using the `database` cache driver, it's like inviting your data to the cool kids' table at the dinner party - but instead of food, we're serving up cached goodness!

To set this fancy table, Laravel's got you covered with a migration named `0001_01_01_000001_create_cache_table.php`. If your application is like that friend who's always missing the party invites, don't worry! You can use the magical Artisan command, `make:cache-table`, to create this migration.

```shell
php artisan make:cache-table
```

Once you've got yourMigration.php dressed up and ready to go, it's time to get it on the dance floor! Invite it over for a bite (or a migrate) with `php artisan migrate`.

Now, doesn't that make caching sound like a swell idea? Let's keep this party going! 🥳🚀🎉

 Alrighty then! Buckle up, because we're about to dive into the world of Memcached – the rockstar of cache drivers in Laravel's universe. But first, let's make sure you've got your party hat on (it's optional but highly encouraged), as we need to install the Memcached PECL package, which is like inviting this cool, fast-talking, memory-magician to the party! You can find it here: [Memcached PECL package](https://pecl.php.net/package/memcached)

Now that our memory-whiz has arrived, it's time to show them where the refreshments are – which is the `config/cache.php` file. This shindig already has a reserved spot for Memcached under the 'memcached.servers' entry – just the way they like it!

```php
'memcached' => [
    // ...

    'servers' => [
        [
            'host' => env('MEMCACHED_HOST', '127.0.0.1'), // If you're feeling local, this is your IP!
            'port' => env('MEMCACHED_PORT', 11211), // The entrance to Memcached's memory mansion!
            'weight' => 100, // Because who doesn't love a little bit of weight-lifting when it comes to memories?
        ],
    ],
],
```

If your Memcached server prefers the old-school UNIX socket path (think tie and tails), then by all means set the 'host' option accordingly, and don't forget to set the 'port' to 0 – it's like telling them to knock on the front door!

```php
'memcached' => [
    // ...

    'servers' => [
        [
            'host' => '/var/run/memcached/memcached.sock', // The UNIX socket path to their secret lair!
            'port' => 0, // Knock knock, it's time for cocktails and memory swapping!
            'weight' => 100
        ],
    ],
],
```

And there you have it – a fun-filled introduction to Memcached in Laravel. Now let's raise a glass (or two) and toast to faster, smoother memories!

 Alright, let's dive into the thrilling world of Redis Cache, Laravel's secret sauce for making your app faster than a cheetah on espresso!

First things first, you've got two options:

1. You can install the PhpRedis PHP extension via PECL (pronounced like peel and eat), which sounds delicious but is actually about extending PHP with Redis goodness.
2. Or you can go for the 'predis/predis' package, which is a bit like ordering a pre-made sandwich - easy to swallow and ready to go! You can grab this tasty treat via Composer.

Laravel Sail (our very own friendly whale) has already included this extension in its meal, so you might as well take a seat at the table! Also, if you're using official Laravel application platforms like Laravel Cloud or Laravel Forge, then congrats, you've got PhpRedis installed by default! It's like finding a free chocolate chip cookie at the checkout counter.

For more info on setting up Redis, check out its dedicated [Laravel documentation page](/docs/{{version}}/redis#configuration). But remember, just like figuring out the secret to life, it's an adventure you must embark on yourself!

<a name="dynamodb"></a>
Now that we've covered Redis, let me leave you with a joke: Why did the Laravel developer get confused in a cache? Because it was full of stale data and he couldn't find his way out! *rimshot* 😆 Keep coding, my friend!

 Alright, buckle up, Laravel enthusiasts! Let's dive into the thrilling world of DynamoDB caching - because who doesn't love a good game of data storage bingo? 🎳

First off, before you can start caching like a boss, you gotta create a table for your cached data. Now, this table's name is usually "cache," but hey, if you want to call it something else, feel free! Just make sure it matches the `stores.dynamodb.table` value in your `cache` configuration file, or use the `DYNAMODB_CACHE_TABLE` environment variable.

Your table should also have a partition key that aligns with the `stores.dynamoDB.attributes.key` setting in your application's `cache` config. By default, we call it "key," but you do you! 🎨

Now, here's the fun part: DynamoDB doesn't play the role of a housekeeper and clean out expired items for us. So, to ensure your table stays tidy, enable Time to Live (TTL). Set the TTL attribute name to `expires_at` when configuring this table's TTL settings.

Next, it's time to install the AWS SDK so your Laravel app can chat with DynamoDB. You can do this by running:

```shell
composer require aws/aws-sdk-php
```

Now that the AWS SDK is installed, let's make sure your DynamoDB cache store configuration options are properly filled out. You should find these options (like `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`) in your application's `.env` config file:

```php
'dynamodb' => [
    'driver' => 'dynamodb',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'table' => env('DYNAMODB_CACHE_TABLE', 'cache'),
    'endpoint' => env('DYNAMODB_ENDPOINT'),
],
```

And there you have it! Now your Laravel app can dance with DynamoDB, and everyone will be dancing like there's no tomorrow (or at least until the TTL kicks in). 💃🕺️

 Ahoy there, Laravel swashbucklers! If you're sailing the seas of MongoDB, fret not - we've got your cache covered with a `mongodb` captain at the helm, courtesy of the official `mongodb/laravel-mongodb` shipment.

To get this bad boy running, anchor it down with a trusty `mongodb` harbor connection. It's as easy as catching a fish in a barrel (or so they say).

But wait, there's more! MongoDB supports TTL (Time to Laugh) indexes, which are like the friendly ghost of your cache - they'll automatically clear out any expired items that are lingering longer than a cat nap.

If you need more details on how to set sail with MongoDB, be sure to check out the [Cache and Locks documentation](https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/cache/) - it's like a treasure map that leads straight to buried cache gold!

Yarrrr, happy caching! 🏴‍☠️🐙✨

 ### Unleashing Your Inner Speed Demon: A Guide to Laravel's Cache System! 🏎️💨

#### Obtaining a Cache Instance 🦸‍♂️🔑

Welcome, speed demons! 🌪️ In the magical world of Laravel, we've brewed a secret potion that can make your applications run faster than a cheetah on roller skates. It's called the Cache System! 🛍️💨 Let's get you acquainted with it.

To begin our magical journey, you'll first need to obtain a cache instance. This is done by calling the `cache` method on your application service provider or any other place where you have access to Laravel's service container. Here's what it looks like in action:

```php
$cache = \Cache::getInstance();
```

Now that you've got your cache instance, you can start using it to speed up your app! 🚀🌟 Let's talk about how to store some data in our magical cache... ✨🔬

<a name="storing-data-in-the-cache"></a>

#### Storing Data in the Cache 💾📚

Are you ready to perform some cache alchemy? 🧙‍♂️🔮 To store data in our magical cache, we'll use the `put` method. Here's an example:

```php
$cache->put('key', $value, $minutes);
```

In this example, 'key' is what you'd like to call your cached item, `$value` is the data you want to store, and `$minutes` determines how long the cache will remain active. Once you've stored some data in the cache, you can easily retrieve it with the `get` method!

<a name="retrieving-data-from-the-cache"></a>

#### Retrieving Data from the Cache 📋🔎

Now that you've stored some data in our magical cache, you can easily retrieve it with the `get` method. Here's an example:

```php
$value = $cache->get('key');
```

In this example, 'key' is what you called your cached item when storing it. The `get` method will return the data associated with that key if it exists in the cache, otherwise it will return `null`. 🕵️‍♂️🔍

<a name="removing-data-from-the-cache"></a>

#### Removing Data from the Cache 🗑️💨

Sometimes you might want to clean out your magical cache. To remove data from the cache, we'll use the `forget` method. Here's an example:

```php
$cache->forget('key');
```

In this example, 'key' is what you called your cached item when storing it. The `forget` method will remove the data associated with that key from the cache. 🧹🚮

And there you have it! You've been initiated into the secret society of Laravel speed demons. Now go forth and make your applications faster than a cheetah on roller skates! 🚀🌟 Good luck, and happy caching! 🤓✨

 ### Unleashing the Power of Caching, Laravel Style!

Oh, where would we be without our trusty sidekick, caching? In a world of laggy load times and impatient users, it's our secret weapon to keep things speedy and smooth. But how do we summon this mighty ally in the land of Laravel? Fear not, for I shall enlighten you!

To call upon the cache store instance, we can make use of the `Cache` facade - a magical tool that grants us swift access to the underlying implementations of Laravel's cache contracts. It's like having Thor's Mjölnir, but for caching instead of thunderbolts!

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache; // Yep, that's our new best friend!

class UserController extends Controller
{
    /**
     * Show a list of all users of the application.
     */
    public function index(): array
    {
        $userData = Cache::get('superSecretUserKey'); // We reach into the mystical realms of caching to retrieve our data.

        return [
            // ... More awesome user stuff!
        ];
    }
}
```

And that's just the beginning, my friend! For more advanced caching techniques, such as accessing multiple cache stores, be sure to check out the rest of this documentation. But for now, let's toast to our newfound friendship with this lovely line of code: `use Illuminate\Support\Facades\Cache;` A cheers to caching, the unsung hero of fast-paced Laravel development!

 Oh, the glamorous life of a cache! Sitting around, waiting for us to fling data at you like some digital hoarder. But fear not, dear Laravel user, for with the `Cache` facade, you can access multiple cache stores as if they were your hipster baristas serving up memories and session data.

To grab something from a particular store, just call out to it using the `store` method, like so:

```php
$staleMemories = Cache::store('file')->get('foo');

// Now imagine Redis as that insanely cool friend who keeps all your secrets
Cache::store('redis')->put('bar', 'baz', 600); // Hang on to this for 10 glorious minutes!
```

Just remember, the key you pass to the `store` method should be a name that's listed in the `stores` configuration array found in your `cache.php` configuration file. It's like knowing someone's phone number before asking them out for a date - essential knowledge!

 ### Unveiling Treasures from the Digital Larder! 🍽️

Stepping into the pantry of the digital realm is as easy as summoning the almighty `Cache` facade, my friend! The magical `get` method is your key to unlocking the secrets hidden within this mystical pantry. If your sought-after treat isn't there, fear not! Only an empty plate (or `null`) will greet you:

```php
Let's see what we got cookin' - Cache::get('key');

If the key's missing, well, we can always order takeout - Cache::get('key', 'default');
```

In a pinch and need a secret ingredient? Go ahead and pass a delicious closure as your backup dish! The result of this scrumptious recipe will be served up if the main course is MIA in our digital pantry. Cooking up defaults on-demand lets you delay the fetch from a database or exotic service:

```php
When the key's away, the chef will play - Cache::get('key', function () {
    return DB::table(/* ... */)->get();
});
```

Now, wasn't that as delightful as a culinary adventure? Remember, cooking up good cache management is an art form! 🍲🎨

 Ahoy there, caching captain! Sail the seas of memory efficiency with Laravel's `has` method - the pirate of persistence!

Anchored firmly in your quest for data treasure, this trusty tool will help you find out if an item is hiding in the cache. But beware, it doesn't just spit out a "Yarrrr" when it finds something! No, it also ensures to tell you if the item exists but its value is as empty as a seashell - i.e., `null`.

So, set sail with this fine example:

```php
if (Cache::has('key')) {
    // Treasure found! Navigate through your code here...
}
```

Now, grab your spyglass and scan the horizon for items with this swashbuckling technique. Arr matey, you're ready to embark on a smoother caching adventure! 🏴‍☠️⚔️

 Alright, let's dive into the cachey side of Laravel!

#### Cash-tacular Math: Incrementing & Decrementing

Who needs a calculator when you have Laravel's `increment` and `decrement` methods? They're like the math whizzes of the cache world, ready to adjust those integer items with lightning speed!

Here's the deal: these superheroes can increment or decrement the value of an item in your cache. But that's not all—they also accept an optional second argument, which lets you control by how much they should perform their magical number manipulation.

So if you want to initialize a new value (in case it doesn't already exist), here's what you do:

```php
// Let's set our cache's initial value to nada... or zero, if you prefer.
Cache::add('key', 0, now()->plus(hours: 4));

// Time for some arithmetic! Remember, Cache is the teacher you secretly love.
Cache::increment('key');               // Increment it by 1 (the default value)
Cache::increment('key', $amount);      // Increment it by a custom amount ($amount)
Cache::decrement('key');              // Decrement it by 1 (again, the default)
Cache::decrement('key', $amount);     // Or decrement it by a specified amount ($amount)
```

Now that's what I call a cash-tacular education! Happy caching! 🤓💸🔢

 Alright, buckle up, cachers! Let's dive into the world of Laravel's cachey-wickedness. Ever found yourself in a pickle, trying to grab some data from the cache, but it's MIA? Fear not, my friend! We've got a superhero for that - the `Cache::remember` method!

Imagine you're at a party and you're on the hunt for your favorite snacks. But the bowl's empty! No worries, you can just whip up a fresh batch and leave it by the bowl for future guests (or yourself, no judgement here). The same concept applies when you're trying to fetch some users from the cache. If they're absent, `Cache::remember` will cook them up for you using the good ol' database, and store them away in the cache for later munching.

```php
$users = Cache::remember('users', 60, function () { // 60 seconds, because time flies when you're having fun
    return DB::table('users')->get();
});
```

If you want these users to stick around forever, like that one friend who never leaves your house, you can use the `rememberForever` method:

```php
$eternalUsers = Cache::rememberForever('users', function () {
    return DB::table('users')->get();
});
```

Just like how that one friend becomes a permanent guest, these users will now live in your cache until the end of time (or until you clear it). Now go forth and cache with confidence!

 Ahoy there, Laravel Captain! Sail through the treacherous waters of slow response times no more, for we've got a trusty compass called `Cache::flexible` to guide you!

In some cases, your good ship might encounter stale, expired cache causing sluggish sailing. To avoid this pirate-y predicament, let us introduce thee to the "stale-while-revalidate" pattern — a dance between fresh and stale data that keeps the scurvy at bay!

The `Cache::flexible` method, like a skilled jester entertaining a royal court, performs this intricate balancing act. It requires an array, where the first number dictates how long the cache remains fresh, and the second number determines its staleness threshold before a recalculation is required.

If ye find yourself within the fresh period (before the first number), the trusty ol' cache is yours for the taking without a hitch. But if you're sailing during the stale period (between the numbers), you'll be served with stale data, and we'll register a deferred function to refresh the cache after the response has been sent to your shipmates.

And just in case you've sailed beyond the staleness threshold, the cache will be recalculated promptly, potentially causing a slight delay for your crew:

```php
$treasureMap = Cache::flexible('users', [5, 10], function () {
    return DB::table('users')->get();
});
```

Anchor up and set sail, matey! No more waiting on shores with `Cache::flexible` by your side.

 Ahoy there, cache enthusiasts! Let's embark on an adventure of retrieving and deleting items from your Laravel cache. No need for Indiana Jones-level archeology here – just a dash of PHP and a smidgen of Laravel magic!

When you need to excavate an item from your cachey tomb, you can use the `pull` method, akin to the archaeologist's trowel but with less dirt and more digital delights. Much like its cousin, the `get` method, it returns `null` if the item has vanished without a trace in the cache:

```php
$artifact = Cache::pull('key');

If you're worried about the possibility of an empty-handed return, don't fret! You can provide a default value for your artifact using the `pull` method:

```php
$artifact = Cache::pull('key', 'default_booty');
```

Now, isn't that more exciting than sifting through dusty artifacts in a museum? With Laravel, caching is like treasure hunting – minus the bugs and sunburns!

 ### Caching a Sneaky Peek!

Ahoy, matey! Ever felt the need to hoard some loot for later? Well, let's grab our treasure map and navigate through Laravel's Cache facade!

```php
Cache::put('key', 'value', $seconds = 10);
```

Say you have a secret recipe for grog you don't want to lose sight of. `put` it in the cache like so! Just remember, if ye be forgetful about the time, set the storage duration to a respectable 10 seconds by default:

```php
Cache::put('key', 'value');
```

Arrr, but ye can also spice up your pirate life and use a `DateTime` instance to specify when that stash should walk the plank!

```php
Cache::put('key', 'value', now()->plus(minutes: 10));
```

And if you're feeling particularly devious, you can even store it "if not present" by simply omitting the expiration time. Just watch out for sea monsters, mate!

<a name="store-if-not-present"></a>
But what about that pesky problem of finding an empty chest to store your treasure? Fear not, we've got you covered with `Cache::putIfNotExists()`. Simply pass it your key, value, and desired expiration time, and it'll stash away your goods only if the chest was already empty:

```php
Cache::putIfNotExists('key', 'value', $seconds = 10);
```

 Ahoy there, cache enthusiasts! Dive into the enchanting world of Laravel's magical memory bank – aka the Cache Facade – where your data can live forever (or at least for as long as you want it to). Let's discuss the almighty `add` method, your trusty sidekick in the battle against repetitive database queries!

This dashing hero will only bestow an item upon our cache if it hasn't been graced with its presence already. How does he manage such feats of cacheery? Well, simply by casting a spell:

```php
Cache::add('key', 'value', $seconds);
```

In this incantation, 'key' serves as the secret door to our treasure chest (or cache), 'value' is the sparkling jewel we wish to keep handy (the data we want to store), and '$seconds' is the magical time span during which our valuables will reside in the cache.

Now, you might be wondering: "What if I cast this spell, and the item already exists?" Fear not! This method, being an atomic operation, will never let you down. It will return a hearty 'true' if it successfully adds your item to the cache, or a shrug-worthy 'false' if the item is already there.

And voilà! With that, you've learned the secrets of Laravel's `add` method. Now, go forth and conquer the caching realm like the data-savvy wizard you are! 🧙‍♂️🔑💫

 ### Prolonging Your Cache's Longevity (or TTL, if you're into acronyms)! 🕰️

In the captivating world of Laravel cache management, there's a hero named `touch`. This dashing method is here to extend the lifespan of your existing cache items, ensuring they stick around like your favorite childhood pet who never grew up.

Just call upon it with a key and an estimated duration in seconds:

```php
Cache::touch('key', 3600); // Keeps 'key' alive for an hour... or until the next Game of Thrones marathon.
```

But if you want to get specific about your expiration time, `touch` is ready to accept a `DateTimeInterface`, `DateInterval`, or `Carbon` instance as well:

```php
Cache::touch('key', now()->addHours(2)); // Keeps 'key' alive for exactly 120 minutes... unless the cat knocks over your router again.
```

And hey, if your cache item is nowhere to be found, `touch` will just shrug it off and move on without making a fuss. After all, it has better things to do than waste time on dead weight! 👋🏼🏃🏼‍♀️

 Ahoy there, web wizards! Let's dive into the magical world of Laravel caching! Today we're talking about the everlasting charm of `Cache::forever()`.

Imagine you've got a precious artifact, like the One Ring or Schrödinger's cat, that should be preserved eternally. Well, it's just as easy with this method! Simply whisper:

```php
Cache::forever('key', 'value');
```

> [!ATTENTION]
> Heed my words, young sorcerers! This spell will cast an item into the cache for all eternity. But remember, in the realm of Memcached, even a forever artifact may vanish if the cache reaches its capacity and must make some tough choices.

So now that you've got an immortal trinket hanging around, you'll eventually need to perform a spring clean:

```php
Cache::forget('key');
```

And just like that, your treasure is gone, vanished without a trace! Or perhaps it's simply hiding... 🤔

 ### Cache Clearing Capers: A Guided Tour!

Ahoy there, Laravel wranglers! Ever found yourself in a pickle with too much cached data? Fear not! We've got the perfect cache-busting arsenal to ensure your app stays spry and lean. Let's dive right into it!

#### The "Forgetful" Approach 🧠

Sometimes you need to forget a certain cache item, and that's exactly what our `forget` method is here for:

```php
Cache::forget('key'); // Whoops! That 'key' just got forgotten! 😜
```

#### The "Zero-Time" Trickery 🕒

If you want to remove a cache item right this instant (without the hassle of waiting for a timer), you can set an expiration of zero or negative seconds:

```php
Cache::put('key', 'value', 0); // A quick vanishing act! 🤯

Cache::put('key', 'value', -5); // Who needs five seconds when we've got magic? 🦄
```

#### The "All-In" Evacuation Plan 🧹

Got a cache overload and need to clear the entire thing? Fret not, for our `flush` method is here to save the day:

```php
Cache::flush(); // All your bases are now covered! 🌪️
```

#### The "Lock-Picking" Technique 🔓

If atomic locks are clogging up your cache, you can use the `flushLocks` method to clear them all:

```php
Cache::flushLocks(); // Locked out! All those locks are now a thing of the past. 🎉
```

#### Warning: Cache Clearance Caution! 🚧

Be aware that flushing the cache will nuke all entries, regardless of your prefixed cache configuration. Tread carefully when clearing a shared cache amongst applications! 🌄

Happy caching! May your data always be fresh and your apps ever-efficient! 🚀

 ### Memo's the One! 🤘💫

Laravel's `memo` cache driver is like that super-efficient, memory-hoarding friend who remembers everything for a hot second during a party. It keeps resolved cache values in memory during a single request or job execution, preventing repeated cache hits and boosting performance to unprecedented levels of coolness. 🚀

To get the ball (or key) rolling, summon the `memo` method:

```php
use Illuminate\Support\Facades\Cache;

$value = Cache::memo()->get('key'); // Go ahead, ask Memo for 'key'!
```

Feeling fancy? You can specify a cache store name to decorate the memoized driver:

```php
// The default store gets the party started...
$value = Cache::memo()->get('key'); // Memo's here for you!

// But if Redis invites you over, Memo will join the fun too...
$value = Cache::memo('redis')->get('key'); // Memo's always got your back!
```

The first `get` call for a given key grabs the value from your cache store, but subsequent calls within the same request or job will get it from memory:

```php
// Memo strikes up a convo...
$value = Cache::memo()->get('key'); // Hits the cache!

// But on the second round, Memo recycles the gossip...
$value = Cache::memo()->get('key'); // No need to hit the cache this time!
```

When you call methods that modify cache values (such as `put`, `increment`, `remember`, etc.), Memo will forget their past, delegate the mutating method call to the underlying cache store, and start fresh:

```php
Cache::memo()->put('name', 'Taylor'); // Memo pens a new memory for 'name'...
Cache::memo()->get('name');           // Memo reads it back from the original source!
Cache::memo()->get('name');           // But on the rebound, it's all new to Memo again...

Cache::memo()->put('name', 'Tim');    // Memo waves goodbye to the old memory and welcomes a fresh one...
Cache::memo()->get('name');           // Memo's back with the latest memory from the source!
```

<a name="the-cache-helper"></a>
Now go forth, and let Memo take care of your caching needs like a pro at the coolest party in town! 🕺️

 ### The Cache Whiz-Kid! 🚀🧙‍♂️

Besides summoning the mighty `Cache` facade, you can also unleash the global `cache` sorcery to conjure and hoard data in your cache lair. When you chant the `cache` incantation with a lone string arguement, it'll bestow upon you the value of the chosen key:

```php
$treasure = cache('key'); // Behold, the magic unfolds! 🔮✨
```

Should you possess an array of enchanted keys and their corresponding treasures along with a timeframe for their enchantment, simply invoke the function thusly:

```php
cache(['key' => 'treasure'], $seconds); // Cache is now overflowing with goodies! 🦄💰

cache(['key' => 'treasure'], now()->plus(minutes: 10)); // Magic keeps your treasure box stocked for another ten minutes! ⏱️💣
```

Calling the `cache` spell sans arguments will grant you access to an instance of the `Illuminate\Contracts\Cache\Factory` sorcery, enabling you to cast further cache spells:

```php
cache()->remember('users', $seconds, function () { // Let's fetch some users from the magical database! 🔮📜
    return DB::table('users')->get();
});
```

> [!NOTE]
> Remember, when testing spells cast upon the global `cache` spell, you can utilize the `Cache::shouldReceive` method as if you were [testing the facade](/docs/{{version}}/mocking#mocking-facades). 🧙‍♂️🔮

<a name="cache-tags"></a>

 Alright, buckle up, cache enthusiasts! We're about to dive into the whimsical world of Cache Tags - Laravel's party trick that keeps your application speedier than a cheetah on roller skates! 🦁🛹

⚠️ Attention all treasure hunters: Cache tags are not playable with the `file`, `dynamodb`, or `database` cache drivers. They're like those overprotective parents who won't let their kids join the chocolate-chip cookie bake-off because they don't want them to get too competitive. 🍪❌

But fear not, for our other cache drivers - `redis`, `memcached`, and `apc` - are more than happy to have a dance with Cache Tags! 🎉

Now that we've cleared up the drama, let's learn how to store tagged cache items:

<a name="storing-tagged-cache-items"></a>

To tag an item, you first need to ensure it's properly keyed. Here's a fun analogy: Think of your cache items as party guests and tags as their unique, sparkly nametags. To make sure everyone at the party can mingle easily, give each guest (item) multiple tags! 💃🕺

Here's how you might do it in Laravel:

```php
$tags = ['event', 'guestList']; // Our sparkly nametags for this cache item

// Create the cache item, let's say a delicious party recipe...
Cache::put('partyRecipe', $recipe, 60);

// Now attach our tags to the item
Cache::tags($tags)->put('partyRecipe', $recipe, 60);
```

And voila! You've just invited your cache items to the most exclusive dancefloor in town - the Tagged Cache Party. 🎶💃🔥

But remember, just like at any party, you don't want to overstuff it. Cache tags have a maximum limit of 500. That's about as many friends as anyone should have, right? 🤔🎉

When you need to clear your cache, you can do so by using the `Cache::flush()` method or by targeting specific tags with `Cache::tags($tags)->flush()`. It's like sending out a polite 'party's over' text to all your guests! 📱🚪

Enjoy your newfound speed, and happy caching! 🚀🎉

 ### Cache Tag Shenanigans 🎩

Who needs a party when you've got tagged caching? With this magical feature, you can group your cache items like a boss and clear them out with the flick of a switch! Just pass an elegant array of tag names to access your tagged cache, and let's play some cache games 🎲:

```php
Use yer fancy Laravel stuff 🚀 (Illuminate\Support\Facades\Cache);

Cache::groupBy('people', 'artists')->put('John', $johny_fresh, $time_in_seconds);
Cache::groupBy('people', 'authors')->put('Anne', miss_scribe, $time_in_seconds);
```

And now, when you want to clear the cache for all your artist friends 🎨, just give this a whirl:

```php
Cache::tags(['people', 'artists'])->flush();
```

But wait! You've got another group that needs attention? No problemo! Just use those tags again to manage your cache like a pro 🏆:

```php
Cache::tags(['people', 'authors'])->flush();
```

Keep on tagging and caching, my friend! 🎉

 ### Unleashing the Tag Team of Your Cached Treasures!

Ahoy there, Laravel-sailor! Ever found yourself in a pickle, trying to fish out a specific cache item tagged like a sardine? Fear not! This section's here to guide you through the art of wrangling those elusive, tagged goodies without causing a barnacle-infested ruckus.

To reel in your desired cache item, you'll need to sling an ordered list of tags that mirror those used to cast it into the depths. Just hook these puppies up to the `tags` method, and then cast your line with the `get` method, using the key as your lure:

```php
$john = Cache::tags(['people', 'artists'])->get('John'); // John Doe, a dashing artist!

$anne = Cache::tags(['people', 'authors'])->get('Anne'); // Anne of Green Gables' literary prowess!
```

Now that your hook is set, you can enjoy the fruits of your labor – or in this case, data! But remember, each tagged cache item is a unique catch, so make sure to specify its specific tags when trying to haul it up from the deep. Happy fishing! 🎣🐠⚓️

 ### Unleashing the Cache-pocalypse!

Fancy purging your cache like a boss? Look no further! With our tagging system, you can clear all caches that are labeled as `people`, `authors`, or even both. Imagine wiping out the likes of `Anne` and `John` from the memory realm with just a single line:

```php
Cache::tags(['people', 'authors'])->purge(); // Sayonara, cache!
```

But wait! If you're only in the mood for some author-related purification, this code will take care of that:

```php
Cache::tags('authors')->flush(); // Adios, Anne! John remains... for now.
```

Just remember, when wielding such power, always be sure to target the right tags. After all, you wouldn't want to accidentally erase your secret stash of chocolate chip cookie recipes! 🍪💔

 ### Gear Up for Nuclear Cache Shenanigans! 💣🚀

⚠️ **Attention All Space Cadets!** 🌠
Before you embark on this thrilling adventure, make sure your intergalactic mission control station (i.e., application) is equipped with one of these cool cache drivers: `memcached`, `redis`, `dynamodb`, `database`, `file`, or `array`. Remember, having a state-of-the-art spaceship doesn't do much good if it's not fueled properly! 🚀

But wait, there's more! For this mission, all our spacecrafts need to be connected to the same cosmic central cache server - think of it as the galaxy's favorite interstellar Starbucks where everyone comes to grab a coffee (or a lock in our case)! ☕️🌟

<a name="managing-locks"></a>
### Mastering those Locks and Keys 🔓🗝️

Now that you're all set, it's time to learn how to manage locks like a pro! After all, in space, no one can hear you scream because they're all locked out! Here are some essential tips:

1. **Lock Acquisition**: Grabbing a lock is as simple as asking politely (in this case, by using the `tryPut` method). If it's available, it's yours! But remember, just like in kindergarten, sharing is caring - so locks will be released after a set time period to allow others a chance. 👦️👧️
2. **Lock Release**: When you're done using the locker room (or the lock), it's essential to clean up after yourself and release the lock with the `release` method. You wouldn't want to be known as the messy astronaut, now would you? 🧼
3. **Lock Expiration**: To avoid a never-ending game of musical chairs, locks expire automatically after a certain time (you can set this using the `seconds` parameter when acquiring a lock). No more waiting for someone to finish their tea break or taking turns playing ping pong! 🏓
4. **Lock Conflicts**: In the event of a conflict, one space traveler will be chosen to hang onto the lock while the others will have to wait their turn (using the `tryPut` method). Don't worry, no one gets left behind! 🚀🌠

So there you have it, folks! You're now ready to conquer the universe with your newfound skills in managing atomic locks! Happy exploring! 👽🌟🎉

 ### Unleashing the Power of Atomic Lock-Downs!

In the wild world of distributed computing, atomic locks are your bodyguards against race conditions. Think of them as bouncers at a packed club, ensuring only one task is having all the fun on each server at any given time. And who better to manage these party animals than Laravel Cloud's crew?

To get in on the action, you'll want to use the `Cache::lock` method like so:

```php
use Illuminate\Support\Facades\Cache;

$dance_floor = Cache::lock('foo', 10); // Lock acquired for 10 seconds...

if ($dance_floor->is_occupied()) {
    // Party's already in full swing here, pal!

    $dance_floor->clear_the_way(); // Release the lock and let someone else take a spin.
}
```

But wait! There's more! The `get` method accepts a secret dance move – I mean, closure. Once Laravel sees you've got the moves, it'll automatically clear the dance floor for you:

```php
Cache::lock('foo', 10)->boogie(function () {
    // With your sweet moves, the dance floor is all yours for 10 seconds...
});
```

But what if the dance floor's taken? You can politely ask Laravel to hang on for a while. If the lock can't be grabbed within the allotted time, it throws a "Lock-Out" exception (not a real one, sorry):

```php
use Illuminate\Contracts\Cache\LockTimeoutException;

$dance_floor = Cache::lock('foo', 10);

try {
    $dance_floor->wait_in_line(5); // Wait up to 5 seconds for the dance floor...

    // Now it's your turn to boogie!
} catch (LockTimeoutException $e) {
    // Looks like someone else is having a blast on the dance floor...
} finally {
    $dance_floor->clear_the_way();
}
```

You can also streamline your dance moves by passing them directly to the `wait_in_line` method:

```php
Cache::lock('foo', 10)->wait_in_line(5, function () {
    // Wait up to 5 seconds and then boogie your heart out!
});
```

Now go forth and lock down those servers like a pro! Just remember: with great power comes great responsibility. Or in our case, with great locks come race condition-free code. Happy locking!

 ### Lockin' Down the Fort with Laravel's Locked 'n Loaded Processes! ππ£

Ever found yourself in a pickle where you need to grab a lock in one process and let it go in another, like holding hands across the dance floor? Maybe you acquire a lock during a web request and want to cut loose at the end of a queued job triggered by that request. No worries, Laravel's got your back!

Here's where the magic happens: you pass the lock's swanky "owner token" to the queued job so it can recreate the lock using said token. Check out this dazzling example:

```php
$podcast = Podcast::find($id);

$lock = Cache::lock('processing', 120); // Lockin' down 'processing' for a cool 120 seconds

if ($lock->get()) { // Did we successfully snag the lock?
    ProcessPodcast::dispatch($podcast, $lock->owner()); // Yasss! Dispatch that queued job and pass the owner token
}
```

Now, let's boogie over to our application's `ProcessPodcast` job. Here we restore and release the lock using the owner token:

```php
Cache::restoreLock('processing', $this->owner)->release(); // Releasing the lock with finesse
```

If you want to break free from the constraints of respecting the current lock owner (we've all been there, right?), you can use the `forceRelease` method:

```php
Cache::lock('processing')->forceRelease(); // Breakin' free, y'all!
```

Now that we've conquered locks across processes, it's time to hit the dance floor and show off those moves! πππ½ππ»

 ### Concurrency Control: The Circus of Closures! 🎉🎪

In the world of Laravel, we've got a ringmaster named Atomic Lock who keeps order and prevents chaos when it comes to running those wild circus acts - er, closures. Let's take a spin under the big top! 🐘

When you want only one ringmaster (or closure instance) roaming your entire carnival (infrastructure), give `withoutOverlapping` a shout:

```php
Cache::withoutOverlapping('foo', function () {
    // Acquired the lock after waiting no more than 10 seconds... 🕒
});
```

By default, our ringmaster holds the lock until the show's over (closure finishes), and he'll wait up to 10 seconds to grab it. But you can adjust these time limits using some fancy circus trickery:

```php
Cache::withoutOverlapping('foo', function () {
    // Acquired the lock for a whopping 120 seconds after waiting no more than 5 seconds... 🕛
}, lockFor: 120, waitFor: 5);
```

If our ringmaster can't snag the lock within the given time, he throws a hissy fit (`Illuminate\Contracts\Cache\LockTimeoutException`)!

Now for the main event: controlled parallelism! Use the `funnel` method to set the max number of ringmasters that can perform at once. This trick works with any cache driver that's lock-savvy:

```php
Cache::funnel('foo')
    ->limit(3)
    ->releaseAfter(60)
    ->block(10)
    ->then(function () {
        // Concurrency lock acquired! 🎪🌟
    }, function () {
        // Oops, couldn't grab that concurrency lock... 😢
    });
```

The `funnel` key identifies the act being limited. The `limit` method defines the max performers. The `releaseAfter` method sets a safety net timeout in seconds before an occupied slot is automatically vacated. The `block` method sets how long to wait for an available slot.

If you'd rather catch exceptions instead of dealing with a failure act, leave out the second closure:

```php
use Illuminate\Cache\Limiters\LimiterTimeoutException;

try {
    Cache::funnel('foo')
        ->limit(3)
        ->releaseAfter(60)
        ->block(10)
        ->then(function () {
            // Concurrency lock acquired! 🎪🌟
        });
} catch (LimiterTimeoutException $e) {
    // Sorry, couldn't grab that concurrency lock... 😜
}
```

If you're picky about which cache store handles the concurrency limiter, simply call `funnel` on your preferred store:

```php
Cache::store('redis')->funnel('foo')
    ->limit(3)
    ->block(10)
    ->then(function () {
        // Concurrency lock acquired using the "redis" store! 🌈🐲
    });
```

> [!NOTE]
> The `funnel` method expects your cache store to be a certified lock provider (`Illuminate\Contracts\Cache\LockProvider` interface). If you attempt to use `funnel` with a store that doesn't support locks, it throws a temper tantrum (`BadMethodCallException`)! 🤪

 ## Cache Party Like It's 1999 (Failover Edition)!

Let's get this disco ball spinning! The `failover` cache driver is like the bouncer at a popular club, ensuring that even when one of your dance floor caches kicks the bucket for reasons more mysterious than a disco inferno, it'll smoothly guide you to the next hottest spot on the list. Perfect for those high-stakes production environments where cache dependability is as important as your secret stash of glow sticks.

To set up this velvet rope queue of caches, drop the `failover` driver and a lineup of store names into your application's `config/cache.php` file like so:

```php
'disco_inferno' => [
    'driver' => 'failover',
    'stores' => [
        'database',
        'array',
    ],
],
```

Once your dance floor is all set, you'll need to update your application's `.env` file and designate the failover cache as the default:

```ini
CACHE_DANCEFLOOR=disco_inferno
```

When a cache operation goes south and the failover kicks in, Laravel will drop it like it's hot by dispatcing the `Illuminate\Cache\Events\CacheJustFellOver` event. This gives you the opportunity to call the paramedics or log the incident for posterity. Just remember, if the party's over for one cache, there's always another waiting to take its place! 💃🕺️🔥

 Alright, buckle up, caching cowboys! It's time to unleash your inner Elon Musk and craft a custom cache driver that'll leave your Laravel apps feeling like they've been kissed by the Phoenix himself. 🚀💔

<a name="writing-the-driver"></a>
### Writing the Driver

First things first, you need to create a new directory `app/Cache/Drivers` and inside that, a new PHP class representing your driver. Let's call it `CustomDriver`.

```php
namespace App\Cache;

class CustomDriver implements CacheManager, TaggableCache {
    // Your custom caching magic goes here!
}
```

Now, this `CustomDriver` class must implement the interfaces `CacheManager` and `TaggableCache`. These interfaces define a set of methods that your custom driver should adhere to in order to integrate seamlessly with Laravel's cache system.

<a name="configuration"></a>
### Configuration

Once your custom driver is ready, it's time to tell Laravel about it! Open up `config/cache.php` and add a new line under the 'drivers' section:

```php
'custom' => App\Cache\CustomDriver::class,
```

<a name="using-the-driver"></a>
### Using the Driver

With your driver all set up, you can now use it like any other cache store in Laravel. Let's say you want to store some data using `store` method:

```php
$key = 'some_data';
$value = 'Hello, world!';
Cache::driver('custom')->put($key, $value);
```

And if you want to retrieve that data later, simply use the `get` method:

```php
$retrievedData = Cache::driver('custom')->get($key);
echo $retrievedData; // 'Hello, world!'
```

And there you have it! You've just built a custom cache driver that fits perfectly within Laravel's ecosystem. Now go forth and conquer the caching world with your own unique flair! 🎉🥳🚀

 Alrighty then! Let's craft our very own cache driver, shall we? To get started, we gotta implement the `Illuminate\Contracts\Cache\Store` contract, which is a fancy way of saying "we need to make friends with this contract". So, if MongoDB is your jam, here's what it might look like:

```php
<?php

namespace App\Extensions;

Use yadda yadda Illuminate\Contracts\Cache\Store; // You know the drill!

class MongoDanceOff implements Store {
    public function get($key) { /* Shimmy shimmy, we're fetching data */ }
    public function many(array $keys) { /* Cut a rug, we're dancing through multiple keys */ }
    public function put($key, $value, $seconds) { /* Two-step with data and set it to dance for some time */ }
    public function putMany(array $values, $seconds) { /* Line dance with all the values at once */ }
    public function increment($key, $value = 1) { /* Add a little cha-cha to our counter */ }
    public function decrement($key, $value = 1) { /* Subtract a step or two from our count */ }
    public function forever($key, $value) { /* Time to salsa all night with this data, no breaks */ }
    public function forget($key) { /* Forget about that key, it's time to waltz away */ }
    public function flush() { /* Clear the dance floor, we're starting fresh */ }
    public function getPrefix() { /* Find our signature dance move, unique to us */ }
}
```

Now, all that's left is to register our custom driver, and for that, you can do a little twist:

```php
Cache::extend('mongo', function (Application $app) {
    return Cache::repository(new MongoDanceOff); // It's showtime, partner!
});
```

> [!NOTE]
> If you're scratching your head about where to place this custom dance routine, well partner, you could create an `Extensions` namespace within your trusty `app` directory. But remember, Laravel ain't got no straitjacket application structure, so you can jive around and organize as you please!

<a name="registering-the-driver"></a>

 Alrighty, buckle up, because we're about to dive into the world of Laravel cache drivers! 🚀

### Unleashing Your Custom Cache Driver 🦄

You know what they say: "If you want something done right, do it yourself!" And that's exactly what we're gonna do here. To register our custom-brewed cache driver, we'll play dress-up with the `extend` method on the ever-so-chic `Cache` facade.

Now, since other service providers are a bit of a gossip bunch, always peeking at cached values within their `boot` method, we don't want to embarrass our custom driver by introducing it too early. So, we'll register our dashing driver within a `booting` callback – just in time for the red carpet but before the actual ball (our application's service providers) starts.

To make sure our newcomer doesn't trip on its own two feet, we'll register the `booting` callback within the `register` method of our application's `App\Providers\AppServiceProvider` class.

```php
<?php

namespace App\Providers;

use App\Extensions\MongoStore;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->booting(function () {
            Cache::extend('mongo', function (Application $app) {
                return Cache::repository(new MongoStore);
            });
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // ...
    }
}
```

The `extend` method's first argument is the name of the driver, like a secret password to our `config/cache.php` configuration file. The second argument is a little party trick – a closure that should return an `Illuminate\Cache\Repository` instance. Don't forget to bring your own bottle (of $app instance), it's an invitation-only event!

Once your extension has been accepted into the Laravel high society, update the `CACHE_STORE` environment variable or `default` option within your application's `config/cache.php` configuration file to the name of your extension. That's like RSVPing to the ball! 🎉

 Ahoy there! If you're the type who enjoys a bit of cache-tivities, Laravel's got your number! π°

Lend me your ears (or eyes, rather) as I regale you with tales of our cache events. These aren't just any events, oh no! They're the lifeblood of your data caching system.

Here, take a peek at our event lineup:

<div class="overflow-auto">

| Event Name                                      | Description |
|-------------------------------------------------|-------------|
| `CacheFlushed` π§Ή | The grand finale of cache purge. Like the "delete all" button, but with more panache. |
| `CacheFlushing` π§΅ | The warm-up act to `CacheFlushed`. A sneak peek at what's about to go down in your cache. |
| `CacheFlushFailed` π | When the delete all button misbehaves and can't complete its task, this event comes a-calling. |
| `CacheLocksFlushed` π | The locksmith of the cache world, making sure no data is accidentally modified during purge. |
| `CacheLocksFlushing` π | The apprentice to `CacheLocksFlushed`, assisting in lock management during the purge process. |
| `CacheLocksFlushFailed` π | When the locksmith gets locked out, this event steps in to let you know of the predicament. |
| `CacheHit` π₯ | A triumphant celebration when a requested key is found in cache without having to make a fresh trip to the database. |
| `CacheMissed` π | The downcast eyes and long sigh of the cache system, signaling a missed opportunity for data reuse. |
| `ForgettingKey` π€ | The forgetful friend of the cache world, occasionally releasing keys it no longer needs. |
| `KeyForgetFailed` π | When even the forgetful one can't remember to let go, this event pops up to remind it to move on. |
| `KeyForgotten` π€ | A key's graduation from the cache, having outlived its purpose and been released into oblivion. |
| `KeyWriteFailed` π | The scribbler who can't get their quill to ink, causing the cache system a momentary hiccup. |
| `KeyWritten` π | The successful completion of writing a new key into the cache's memory, giving it a place among the data elite. |
| `RetrievingKey` π± | The search party on the hunt for that one elusive key in the vast expanse of the cache. |
| `RetrievingManyKeys` π€ | When multiple keys are requested, this event enlists a team of searchers to get the job done. |
| `WritingKey` π° | The data entry clerk in the cache world, diligently writing new keys into the system. |
| `WritingManyKeys` π£οΈ | The big boss of key-writing, overseeing the mass creation or update of keys in the cache. |

</div>

But wait, there's more! If you find these events a bit too chatty for your taste, you can always mute them by setting the `events` configuration option to `false` for your chosen cache store in the application's `config/cache.php`.

```php
'database' => [
    'driver' => 'database',
    // ...
    'events' => false, // Mute those noisy events!
],
```

Now, wasn't that a fun little tour of our cache event system? Happy caching, and may your keys always be written and retrieved with ease! ππΌ