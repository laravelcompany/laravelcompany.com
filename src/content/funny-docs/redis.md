 # Redis: The Swift, Silicon Superhero of Data Storage! 🦸‍♂️🚀

## Welcome to the Redisverse! 🌍

Redis, short for REmote DIctionary Server, is more than just a name - it's a powerhouse of speed and versatility in the world of data storage! Let's dive into its magical realm! 🔮✨

<a name="configuration"></a>

## Setting Up Redis Camp 🏕️

### Building Redis Clusters 🗿🌐

If you're not a lone ranger, but rather a team of data wranglers, it's time to create some interconnected Redis clusters! Think of them as an Avengers squad for your data needs. 🤝🛡️

### Choosing Your Side: PreDIS or PhpRedIS? 🚀🌟

Two popular libraries come to the rescue when interacting with our hero, Redis. We have PreDIS (the prepubescent sidekick) and PhpRedIS (the grizzled veteran). Both are great, but you might as well pick the one that suits your project's needs, Batman! 🦇

<a name="interacting-with-redis"></a>

## Training with Redis Kung Fu 🥋🤹‍♂️

### Transactions: The Data Jedi Mind Trick 💫🔄

Imagine being able to perform multiple operations at once, as if they were a single, unified action! That's exactly what transactions do. They allow you to execute complex commands with the precision and finesse of a data-manipulating ninja.

### Pipelining Commands: Command Queue Chaos 🎪💥

If you thought transactions were cool, just wait until you hear about pipelining! It's like having an assembly line for your Redis commands. Send multiple commands in a single shot and watch them execute with superhuman speed!

<a name="pubsub"></a>

## Join the Redis League of Communication 🗣️🤝

### Pub/Sub: The Chat Room of Data Exchange 💬🔐

Need to keep track of real-time data changes? Pub/Sub is your go-to! It's like having a secret agent network for your application. Publishers send messages (or events), and subscribers listen in, making it the perfect solution for chat rooms, notifications, or any other situation where real-time updates are crucial!

So there you have it, folks! Welcome to the exciting world of Redis – where data is stored with superhuman speed and versatility. Remember to use your newfound powers wisely, and happy coding! 👋💻🌟

 Alright, buckle up, data wranglers! We're about to embark on a whirlwind tour of Redis, the swankiest open-source key-value store this side of Silicon Valley. Yes, it's fancy - think of it as the black tie event of the database world. It's not just a data storage system; it's a data structure server, and keys can house everything from basic strings to intricate hashes, lists, sets, and sorted sets.

Now, before you can start tossing around Redis like a boss with Laravel, there are a few preliminary steps. First off, we highly recommend installing the PhpRedis PHP extension via PECL. It's a bit more complex than your average user-land PHP package, but if your application is heavy on the Redis use, it can deliver performance like an Olympic sprinter on a sugar rush.

Lucky for you Laravel Sail shipmates, this extension is already anchored in your Docker container's treasure chest. If you're feeling seasick and unable to install PhpRedis, fear not! You can always jump ship and install the predis/predis package via Composer. It's a Redis client written entirely in PHP, so no need for any extra extensions - just drop this line in your terminal:

```shell
composer require predis/predis
```

Now that we've got the nautical jargon out of the way, let's set sail to the configuration section! (Cue the pirate music)

 Alright, buckle up, Redis rebels! It's time to get your settings straight in the wild world of Laravel. You can customize your app's Redis configuration like a boss in the `config/database.php` file, which is where all the cool kids hang out.

Here, you'll find a `redis` array that's chock-full of Redis servers working tirelessly for your application:

```php
'redis' => [
    ...
] // It's like a box of chocolates, but instead of candies, it's Redis servers!
```

Now, let's dive into the juicy details. The `redis` array contains an assortment of options, each one representing a Redis server in your configuration file. But here's the twist - each server needs a name, host, and port, unless you're feeling fancy and want to use a single URL for your Redis connection:

```php
'redis' => [
    ...
    'default' => [ // Our main squeeze, the default server
        'url' => 'tcp://127.0.0.1:6379?database=0', // If you're using a URL, it's like speed-dating for Redis servers!
    ],
    ...
] // And here we have our cache server, just hanging around waiting for love... or data.
```

Remember, Redis is like the life of the party - always ready to serve up some data when you need it most! So, keep your settings tight and your Redis even tighter. Happy configuring! 🎉🥳💪🏼🤓🤖🔥🚀

 Alrighty, buckle up, Laravel astronauts! It's time to dive into the mystical world of Redis configurations, where data dances and connections sing a beautiful symphony. By default, our trusty Redis clients are like old-school radio DJs, spinning tunes over good ol' `tcp`. But hey, who needs a catchy beat when you can have an encrypted dance party with TLS/SSL?

To throw on those shiny encryption shades, simply sprinkle some configuration magic into your Redis server setup array. Here's how:

```php
'default' => [
    'scheme' => 'a fancy disco ball', // Okay, not exactly, but it feels cooler!
    'url' => env('REDIS_URL'),
    'host' => env('REDIS_HOST', '127.0.0.1'),
    'username' => env('REDIS_USERNAME'),
    'password' => env('REDIS_PASSWORD'),
    'port' => env('REDIS_PORT', '6379'),
    'database' => env('REDIS_DB', '0'),
],
```

And just like that, you've transformed your data connection into a secure nightclub, where only the right passwords can enter. Enjoy the party! 🤖🎉

 ### Cluster-palooza! 🤘

If your app is jamming with a posse of Redis servers, it's time to round 'em up and wrangle 'em into a herd - err, cluster! To do that, you need to saddle up and ride on over to the `clusters` corral within your Redis configuration. You see, this cowpoke ain't no stranger in the wild west of your application's `config/database.php` configuration file:

```php
'redis' => [
    'client' => env('REDIS_CLIENT', 'phpredis'), // Ain't no party like a Redis client party, right?

    'options' => [
        'cluster' => env('REDIS_CLUSTER', 'redis'), // The default cluster is like the head cowboy, in charge.
        'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'), // A unique prefix to separate your data from all the other wranglers out there.
    ],

    'clusters' => [ // Here's where you lasso and rope in each server.
        'default' => [
            [
                'url' => env('REDIS_URL'), // The URL of your Redis server, like the address to its ranch.
                'host' => env('REDIS_HOST', '127.0.0.1'), // Its home on the range, in case you need to visit.
                'username' => env('REDIS_USERNAME'), // The login credentials for when you drop by.
                'password' => env('REDIS_PASSWORD'), // And the secret handshake.
                'port' => env('REDIS_PORT', '6379'), // The port of call, where all the action happens.
                'database' => env('REDIS_DB', '0'), // The database it keeps its herd in.
            ],
        ],
    ],

    // ...
],
```

By default, Laravel saddles up with native Redis clustering because the `options.cluster` value is set to `redis`. It's a sturdy horse that knows how to handle a fall-over with grace.

Now, if you're feeling rowdy and want to swap out the native Redis for client-side sharding (Predis), all you gotta do is high-ho Silver and git 'er done by removing the `options.cluster` value:

```php
'redis' => [
    'client' => env('REDIS_CLIENT', 'phpredis'), // Stick with your trusty steed, Predis.

    'clusters' => [ // Here's where you lasso and rope in each server.
        // ...
    ],

    // ...
],
```

Now that you know how to ride the Redis cluster roundup, you can wrangle your data with ease! 🎠 🚀

 ### Predis (aka Redis' BFF)

If your app is the life of the party and you want it to hit the dance floor with Redis, make sure the `REDIS_CLIENT` env var is set to "predis" in your makeup room:

```php
'redis' => [
    'client' => env('REDIS_CLIENT', 'predis'), // because, who doesn't love a good pre-party?
    // ...
],
```

Now, Predis isn't just your average wingman. It comes armed with a suite of [connection swag](https://github.com/nrk/predis/wiki/Connection-Parameters) to help your app and Redis servers communicate better than two lovebirds on a double date! To get these party tricks up and running, drop the connection swag into your Redis server configuration in your app's `config/database.php` configuration file:

```php
'default' => [
    'url' => env('REDIS_URL'), // For those spontaneous meet-cutes online
    'host' => env('REDIS_HOST', '127.0.0.1'), // Keeping it local, ya know?
    'username' => env('REDIS_USERNAME'), // Because everyone needs a little validation
    'password' => env('REDIS_PASSWORD'), // Security is key, after all!
    'port' => env('REDIS_PORT', '6379'), // The DJ spins on this channel
    'database' => env('REDIS_DB', '0'), // Pick your dance floor wisely
    'read_write_timeout' => 60, // Party's over when the music stops!
],
```

Now get out there and make some moves, party people! 💃🕺️🚀

 ### PhpRedis: The Chatty Redis Chummery! 🎉🎊

Ahoy there, Laravel sailor! When it comes to chatting with our trusty Redis pal, our ship, I mean, framework, defaults to using the PhpRedis extension as its interpreter 🤖. Fancy a drink? Let's mix up this potion:

```php
'redis' => [
    'client' => env('REDIS_CLIENT', 'phpredis'), // You know, like the environment variable we set earlier, matey!
    // ...
],
```

Besides the default sea shanties, PhpRedis offers some exciting tavern yarns for you to spin: `name`, `persistent`, `persistent_id`, `prefix`, `read_timeout`, `retry_interval`, `max_retries`, `backoff_algorithm`, `backoff_base`, `backoff_cap`, `timeout`, and `context` 🎙️. Wanna hear a tale? Add some of these options to your Redis' seaworthiness in the `config/database.php` file:

```php
'default' => [
    'url' => env('REDIS_URL'),
    'host' => env('REDIS_HOST', '127.0.0.1'), // Just in case you were lost at sea...
    'username' => env('REDIS_USERNAME'),
    'password' => env('REDIS_PASSWORD'),
    'port' => env('REDIS_PORT', '6379'),
    'database' => env('REDIS_DB', '0'),
    // Oh, and let's not forget the tavern stories:
    'read_timeout' => 60, // Because who wants a chatty Redis, right?
    'context' => [
        // For more engaging tales, adjust these settings as needed!
    ],
],
```

<a name="retry-and-backoff-configuration"></a>
*Now, let's talk shop about retry and backoff configuration!* With PhpRedis, you can set up some sea-worthy strategies to handle those pesky Redis errors. Here are the sailor's secrets: `read_timeout`, `retry_interval`, `max_retries`, `backoff_algorithm`, `backoff_base`, `backoff_cap`, and `timeout`. You can use these when crafting your own backoff policy in the `config/database.php` file:

```php
'default' => [
    // ...
    'options' => [
        'strict' => false,
        'backoff_policy' => [
            'type' => 'exponential',
            'base' => 2,
            'max_retry_delay' => 60,
        ],
    ],
],
```

 Ahoy there, Laravel pirates! Let's hoist the sails of connection configuration and set course for Redis reconnection land. Yarrrr!

#### Reconnect and Retry Patchwork

When Old Redbeard (your Redis server) goes walkabout, we've got a few handy tools to get him back: `retry_interval`, `max_retries`, `backoff_algorithm`, `backoff_base`, and `backoff_cap`. These seafaring options tell our PhpRedis mate how to reel in the runaway Redbeard.

Here's a smorgasbord of backoff algorithms we can use: `default`, `decorrelated_jitter`, `equal_jitter`, `exponential`, `uniform`, and `constant`. Sounds like an exotic cocktail menu, doesn't it?

```php
'default' => [
    // Piratey stuff here!
    'backoff_algorithm' => 'decorrelated_jitter', // Choose your poison!
],
```

Now, Predis 3.4.0 and beyond comes equipped with its very own built-in reconnect and retry gear via the `Retry` class. Let's tweak it with these strategies: `NoBackoff`, `EqualBackoff`, or `ExponentialBackoff`.

```php
use Predis\Retry;
use Predis\Retry\Strategy\ExponentialBackoff;

'default' => [
    // Piratey stuff here!
    'retry' => new Retry(
        new ExponentialBackoff(
            // Backoff base and cap, matey!
            env('REDIS_BACKOFF_BASE', 100),
            env('REDIS_BACKOFF_CAP', 1000),
            true, // Enable jitter if ye be feeling lucky
        ),
        env('REDIS_MAX_RETRIES', 3)
    )
],
```

Avast! Now you've got the lowdown on how to navigate those choppy Redis waters like a pro. Happy sailing, matey!

 Ahoy there, Laravel sailors! Let's dive into the world of Unix sockets, shall we? 'Cause when you're working on the same ship (server) as your Redis instance, cutting out TCP overhead is like having a secret shortcut to Treasure Island.

To make Redis dance to our tune, let's set sail and hoist the `REDIS_HOST` environment variable with the path of our trusty Redis socket anchored at `/run/redis/redis.sock`. And since Redis is a simple soul who doesn't need a fancy port number, we'll tell it to hang out at `REDIS_PORT=0`.

Anchors aweigh! With these settings, your Laravel app will now communicate with Redis like long-lost pirate buddies sharing grog on the high seas. Arr matey, smooth sailing ahead! 🏴‍☠️🐚

 Alright, let's dive into the wild world of PhpRedis! This isn't just your average Redis extension; it's like a Swiss Army knife for data storage, with a side of pickles (or compression, if you prefer).

You see, these bad boys can be fine-tuned with a variety of serializers and compression algorithms. And the best part? You can configure them like a boss via the `options` array in your Redis configuration. It's like adding sprinkles on your data sundae!

```php
'redis' => [
    'client' => env('REDIS_CLIENT', 'phpredis'), // Don't forget to give it a cool name, like 'RedisMcFly'
    'options' => [
        'cluster' => env('REDIS_CLUSTER', 'redis'),
        'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),
        'serializer' => Redis::SERIALIZER_MSGPACK, // Choose your poison: MSGPack it is!
        'compression' => Redis::COMPRESSION_LZ4, // Because who doesn't love a good LZ4 laugh?
    ],
    // ...
],
```

Now, these serializers are as varied as flavors of ice cream. You got the default `Redis::SERIALIZER_NONE`, the ever-versatile `Redis::SERIALIZER_PHP`, the sweet `Redis::SERIALIZER_JSON`, the exotic `Redis::SERIALIZER_IGBINARY`, and the trendy `Redis::SERIALIZER_MSGPACK`.

When it comes to compression, we've got the basics (`Redis::COMPRESSION_NONE`, aka uncompressed, like your grandma's apple pie), along with the advanced `Redis::COMPRESSION_LZF`, `Redis::COMPRESSION_ZSTD`, and `Redis::COMPRESSION_LZ4`. Just remember: More compression equals less data bloat!

So, go forth and configure away! Your data will thank you for it. Or maybe they'll just stay silent and let you think they're happy. Data can be mysterious like that.

 ## Chatting with the Redis Maven

Whoa, it's time to get cozy with our Redis pal! To communicate with this silicon sage, simply summon various methods on the `Redis` [bartender](/docs/{{version}}/facades). The `Redis` bartender serves up magic cocktails (commands), and just like in a real bar, you can order anything from the Redis menu!

In this example, we'll serve up a round of "GET" shots by calling the `get` method on our trusty `Redis` bartender:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redis;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Serve up the profile for a specific user.
     */
    public function show(string $id): View
    {
        return view('user.profile', [
            'user' => Redis::get('user:profile:'.$id) // Shaking, stirring, and serving!
        ]);
    }
}
```

Now, just like in a real bar, you can order any of Redis' drinks (commands). Laravel employs some secret magic to pass the orders directly to the Redis server. If your drink requires extras, don't forget to include them when calling the bartender:

```php
use Illuminate\Support\Facades\Redis;

Redis::set('name', 'Taylor'); // A round of "SET" on the house!

$values = Redis::lrange('names', 5, 10); // Five Long Island Iced Teas coming right up!
```

Fancy a bit of mixology? You can pass drinks directly to the server using the `command` method, which takes the drink's name as its first argument and an array of ingredients as its second:

```php
$values = Redis::command('lrange', ['name', 5, 10]); // Let's hear it for the "LRANGE" cocktail!
```

<a name="using-multiple-redis-connections"></a>
Now that we've got your taste buds tingling, let's talk about using multiple Redis connections. Imagine you have a busy bar with different rooms serving up various drinks - this is much like having multiple Redis servers for different tasks! With Laravel, setting up these mixology stations (connections) is as simple as configuring your `app/config/redis.php` file:

```php
return [
    // ...
    'connections' => [
        'cache' => [
            'host'     => env('REDIS_HOST', '127.0.0.1'),
            'port'     => env('REDIS_PORT', 6379),
            'database' => 0, // Use database 0 for this connection
        ],
        'queue' => [
            'host'     => env('REDIS_HOST', '127.0.0.1'),
            'port'     => env('REDIS_PORT', 6380),
            'database' => 1, // Use database 1 for this connection
        ],
    ]
];
```

After setting up your connections, you can choose which bartender to interact with by using the connection name when calling a method on the `Redis` facade:

```php
use Illuminate\Support\Facades\Redis;

// Serve drinks from the "cache" bar
$cachedName = Redis::set('name', 'Taylor', 'cache');

// Toss a few cocktails over to the "queue" bar
Redis::lrange('names', 5, 10, 'queue');
```

And that's it! Now you're ready to dive deep into the world of Redis mixology with Laravel! Cheers! 🍹🎉

 Ahoy there! You're about to embark on a thrilling journey of juggling multiple Redis servers like a circus performer, all within the comfort of your Laravel app!

First things first: head over to your application's `config/database.php` file and prepare for some server-swapping shenanigans. This is where you define your Redis connections/servers like lining up your juggling balls before the big show.

Need to grab a connection to one of those servers? No problemo! Just summon the mighty `Redis` facade and its trusty `connection` method:

```php
$redis = Redis::connection('connection-name'); // Swap in your unique circus ball, er, connection name!
```

But if you're feeling lazy (and let's face it, who isn't?), you can always stick with the default Redis connection. To do so, simply leave the `connection` method all on its lonesome:

```php
$redis = Redis::connection(); // The trusty old juggling ball - the classic that never disappoints!
```

Now that you've got your connection sorted, it's time to put on a show with transactions! Imagine if your circus acts required every trick to be in perfect synchronization. Transactions are just like that for your Redis connections. Here's how to wrap multiple commands into a single transaction:

```php
$redis = Redis::connection();
$redis->multi()
     ->set('key', 'value')
     ->incr('counter')
     ->exec();
```

Just remember, these transactions are like delicate juggling acts - all commands must succeed or they all fail. But fear not! If one command fails during the transaction, you can catch the exception and try again without affecting the other commands in the pipe.

Happy juggling! May your Redis connections always remain steady as a trapeze artist mid-flight.

 ### Redis Transactions: The Magical MULTI-EXEC Spell! 🎩🔮

Get ready to embark on an exciting journey with the mystical `Redis` spellbook's enchantment called `transaction`! This powerful charm serves as a friendly sorcerer's apprentice, wrapping your common Redis commands in a protective cloak of `MULTI` and `EXEC`. To cast this spell, you merely need to pass a magical incantation (closure) as its sole argument. Your spell will summon a wise Redis connection instance, upon which you can unleash all your commands with wild abandon!

```php
use Redis;
use Illuminate\Support\Facades;

Facades\Redis::transaction(function (Redis $redis) {
    $redis->wave_the_wand('user_visits', 1); // Increment user visits by one.
    $redis->raise_the_staff('total_visits', 1); // Increment total visits by one.
});
```

> [!CAUTION]
> Be warned, young sorcerer: When you cast the Redis transaction spell, do not attempt to pluck values from the connection while under its enchantment. Remember, your incantation is woven as a single, unified spell that won't be cast until your entire magical arsenal has been released! 🌈✨

And there you have it! Now go forth and conquer the world, one Redis transaction at a time! 🚀🚀🚀

 Alrighty, let's dive into the world of Lua scripts in Laravel's Redis playground! The `eval` method is like the Jedi mind trick of database operations - it lets you execute a whole bunch of Redis commands in one magical swoop... atomically, even!

But wait, there's more! Unlike other methods, this one can interact with and inspect Redis key values during its operation. So it's like having a magical talking mirror that not only performs tasks for you but also gives you a sneak peek behind the scenes! The language of choice for this magic mirror is Lua, which, if you're curious, is a programming language that's been around since 1993 and has been described as having more personalities than a cat with seven lives (check it out at [Lua.org](https://www.lua.org)!).

Now, the `eval` method might seem a bit scary at first, but don't worry - just like meeting a new pet octopus, it gets easier with time and practice! The method expects several arguments: first, the Lua script (as a string), second, the number of keys it interacts with, third, the names of those keys, and lastly, any additional arguments you need within your script.

For instance, let's write a simple script that increments a counter, checks if its new value is greater than five, increments a second counter if so, and then returns the value of the first counter:

```php
$value = Redis::eval(<<<'LUA'
    local counter = redis.call("incr", KEYS[1])

    if counter > 5 then
        redis.call("incr", KEYS[2])
    end

    return counter
LUA, 2, 'first-counter', 'second-counter');
```

But remember, with great power comes great responsibility! Before you start crafting your own Lua scripts, make sure to consult the [Redis documentation](https://redis.io/commands/eval) for more information on Redis scripting - it's like learning to ride a unicycle with a safety net!

Now that we've broken the ice (and possibly some Redis keys), let's get ready to write some magical Lua scripts in Laravel's Redis playground!

 ### Command Carnival Ride! 🎠

Ever found yourself in a pickle, juggling a gaggle of Redis commands like a circus performer? Well, fear not! Laravel's here to save the day with its very own command funhouse - it's called Pipelining Commands! 🎪

Instead of making a series of trips to your Redis server (that'd be like asking an elephant for a glass of water every time you're thirsty), you can use the `pipeline` method. This delightful little trickster accepts just one invitation: a party where it dances with a Redis instance! 💃

Once the Redis instance has RSVPed, you can unleash all your commands upon this unsuspecting dance partner. When the music stops, they'll all be shoved into a bag and sent to the Redis server at once - saving countless trips to the server and keeping your network happy as a clam! 🐚

The best part? Your commands will remain in the order they were issued, just like when you line up for a rollercoaster and don't want anyone jumping the queue!

```php
use Redis;
use Illuminate\Support\Facades;

Facades\Redis::pipeline(function (Redis $pipe) {
    // Time to party! 🥳
    for ($i = 0; $i < 1000; $i++) {
        // Set 'key:$i' with some sweet dance moves - err, data! 🕺️
        $pipe->set("key:$i", $i);
    }
});
```

Get ready to reduce server trips, increase efficiency, and make your network smile - all while feeling like the ringmaster of a command-filled circus! 🎪✨🎉

 ## Pub/Sub: A Symphony of Code in the Dataverse! 🎺

In Laravel's grand digital orchestra, the Pub/Sub section is where code instruments start communicating through the magical medium of Redis! This system enables your applications and processes to dance together like Fred Astaire and Ginger Rogers.

First, let's create a glamorous channel listener by calling the sultry `subscribe` method in an Artisan command. We'll place this sultry call within an [Artisan command](/docs/{{version}}/artisan) since the `subscribe` method begins a long-running process - think of it as a never-ending ballroom dance!

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;

class RedisSubscribe extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'redis:subscribe';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Subscribe to a Redis channel and cha-cha-cha through the messages!';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        Redis::subscribe(['test-channel'], function (string $message) {
            echo "Sweet whispers from the test-channel: {$message}";
        });
    }
}
```

Now, we can sashay over to our route and publish messages to the channel using the `publish` method. Think of it as a dance move that makes everyone on the Redis dance floor take notice!

```php
use Illuminate\Support\Facades\Redis;

Route::get('/publish', function () {
    // ...

    Redis::publish('test-channel', json_encode([
        'name' => 'Adam Wathan'
    ]));
});
```

By the way, have you heard about Wildcard Subscriptions? It's like being able to dance with multiple partners at once! 🕺💃 Simply subscribe to a channel pattern like `test-*`, and your application will listen to messages from all channels that match. (You can find more details [here](#wildcard-subscriptions)). So grab your partner, or partners, and start dancing! 🎶🎉

 Alrighty, let's dive into the exhilarating world of Wildcard Subscriptions! This feature, much like a hungry cat on the prowl for its next meal, allows you to snag all messages from any channel – yes, all of them, and I mean all!

To set it up, simply call `psubscribe` and pass it a wildcard-shaped argument. It'll be just as second nature as pouring your morning coffee (but don't spill it on your keyboard).

Here's an example that should put a spring in your step:

```php
// Listen to every little message, from every channel, like a nosy neighbor peeking through the window.
Redis::psubscribe(['*'], function (string $message, string $channel) {
    // Print out each message like a late-night talk show host revealing secret gossip.
    echo $message;
});

// If you're only interested in conversations about users, you can narrow it down by channel.
Redis::psubscribe(['users.*'], function (string $message, string $channel) {
    // Print out user-related messages as if you're reading from the latest tabloid magazine.
    echo $message;
});
```

So there you have it! Wildcard Subscriptions – the Laravel way to listen in on all the juicy gossip happening across your channels, without even leaving home!