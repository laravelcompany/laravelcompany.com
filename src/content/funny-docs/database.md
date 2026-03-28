 # Database: The Gateway to Data Nirvana 🚀🌟

Welcome, brave data explorer! Let's embark on a journey through the mystical realms of Laravel databases. Buckle up as we delve into the magical world of configurations, connections, and more!

<a name="configuration"></a>
## Configuration 🎛️
Get ready to play conductor to your very own symphony of database settings! Tune those knobs just right, and the sweet sound of harmonious data will fill the air.

<a name="read-and-write-connections"></a>
### Read & Write Connections 📚✏️
While some prefer to read in silence, others love to write with a flair – Laravel caters to both! With multiple connection options at your disposal, you can manage data like a boss, reading silently (or loudly), and writing dramatically (or not).

<a name="running-queries"></a>
## Running SQL Queries 🤓🔍
Ready to flex those SQL muscles? Laravel provides the perfect playground for you to show off your skills! From running simple queries to juggling multiple connections, we've got your back.

<a name="using-multiple-database-connections"></a>
#### Using Multiple Database Connections 🎲🌐
Why settle for one database when you can have many? With Laravel, the world is your oyster (or, rather, databases are!) Switch between them with ease and style!

<a name="listening-for-query-events"></a>
#### Listening for Query Events 👂🔊
Get ready to be the party host of the data world! With Laravel's event system, you can listen in on all the fun happening in your databases. You never know what juicy tidbits you might pick up!

<a name="monitoring-cumulative-query-time"></a>
#### Monitoring Cumulative Query Time ⏳🕰️
Ever heard of data's version of a dance marathon? Well, now you can keep track! With Laravel, monitoring the cumulative query time is like watching an epic data saga unfold in real-time.

<a name="database-transactions"></a>
## Database Transactions 🤝💰
The world of databases can be a tricky place, but never fear! Laravel's transaction support ensures that your data always plays nice together. Rollbacks and commitments – you name it, we've got the tools to make it happen!

<a name="connecting-to-the-database-cli"></a>
## Connecting to the Database CLI 💻🔗
Get ready to channel your inner data master! With Laravel, connecting to your database from the command line is as easy as saying "abracadabra" – well, almost.

<a name="inspecting-your-databases"></a>
## Inspecting Your Databases 🧐👀
Curiosity may have killed the cat, but it sure doesn't hurt in the world of databases! With Laravel's database inspection tools, you can poke and prod your databases to your heart's content.

<a name="monitoring-your-databases"></a>
## Monitoring Your Databases 📊📈
Who needs a crystal ball when you have Laravel? With built-in monitoring tools, you can keep an eye on your databases like never before! Data trends, statistics, and insights – we've got it all for the data enthusiast in you.

 Welcome to the Laravel Database Dance Party! 🎉💃🏻🕺🏿 Every modern web app worth its salt shaker interacts with a database, and we're here to make that dance as smooth as possible. Enter Laravel, your coolest dance partner who effortlessly glides across five different databases, making interactions so simple even a dancing hippo could do it! 🐘

Now, let's introduce our partners for this dance:

1. MariaDB 10.3+ (a sophisticated partner who follows the latest dance trends - [check out her moves](https://mariadb.org/about/#maintenance-policy))
2. MySQL 5.7+ (our old reliable, always following the rhythm - [her step-by-step guide](https://en.wikipedia.org/wiki/MySQL#Release_history))
3. PostgreSQL 10.0+ (the sophisticated, fancy one who knows all the steps – [check out their dance card](https://www.postgresql.org/support/versioning/))
4. SQLite 3.26.0+ (our pocket-sized partner, always ready to go wherever you are – no need for a phone number, just include them in your app!)
5. SQL Server 2017+ (the sophisticated cousin from across the pond, who keeps up with the latest dance craze - [get to know him better](https://docs.microsoft.com/en-us/lifecycle/products/?products=sql-server))

Now, MongoDB is that funky friend of ours who insists on doing things differently but still wants to join the party! They're officially supported via the `mongodb/laravel-mongodb` package, maintained by the one and only MongoDB. If you wanna learn more about their unique dance style, check out [their groovy tutorial](https://www.mongodb.com/docs/drivers/php/laravel-mongodb/).

So, grab your dancing shoes and join us in the Laravel Database Dance Party! Let's make interacting with databases as enjoyable as a night on the dance floor 💃🏻🕺🏿.

 Alrighty then! Let's dive into the jazzy world of Laravel's database configuration, where secrets and settings dance a tango that'll make your SQL heart skip a beat. You can find this fancy dance floor in your application's `config/database.php` file - it's like the Studio 54 of your project!

In this disco, you can define all your database connections (that's right, you're now the disco DJ of your data!) and decide which one should be the default (a bit like choosing your favorite dance partner). Most of the moves on this floor are inspired by the values of your application's environment variables. So if you've been keeping up with the latest environment variable trends, you'll fit right in!

Examples for most of Laravel's supported database systems are provided here, like a friendly neighborhood guide showing you the best dance steps for each system.

By default, Laravel serves up a delicious sample [environment configuration](/docs/{{version}}/configuration#environment-configuration) that's ready to sizzle with [Laravel Sail](/docs/{{version}}/sail), a Docker configuration designed for developing fabulous Laravel applications on your trusty local machine. But remember, this is just the opening act – feel free to customize your database configuration as needed for your local SQL superstar!

<a name="sqlite-configuration"></a>
Now, let's boogie down to SQLite configuration! It's like the moonwalk of databases. You'll find it easy and fun, just like a night out at the disco – no need for a tutorial or anything!

 Alright, let's dive into the whimsical world of SQLite configuration! Imagine your database as a digital time capsule buried deep within your computer's filesystem. To create this digital treasure chest, simply cast a spell with the `touch` command in your terminal: `touch database/database.sqlite`.

Once upon a time, your newly created database awaits your royal decree to reveal its secrets. You can do so by anointing the absolute path to this digital tomb in the `DB_DATABASE` environment variable, like so:

```ini
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database.sqlite
```

By default, our SQLite kingdom is governed by strict foreign key constraints – akin to an overbearing relative insisting on matching dinnerware at every meal. If you'd prefer a more casual affair, set the `DB_FOREIGN_KEYS` environment variable to `false`:

```ini
DB_FOREIGN_KEYS=false
```

And here's a fun fact – if you let the Laravel installer be your genie, it will automatically conjure up a `database/database.sqlite` file and perform the default database migrations, all while humming a magical tune!

[Fair warning] If you choose the Laravel installer to create your application and opt for SQLite as your database, it'll take care of everything, including creating that very important `database/database.sqlite` file and running the default database migrations for you!

[a name="mssql-configuration"]
(Just in case you were curious about Microsoft SQL Server configuration... but let's save that tale for another time!)

 Alrighty, let's get our jazzy pants on and dive into the world of Microsoft SQL Server! But first, we need to make sure we've got all the right moves—er, extensions installed.

1. Don your cape and become a superhero for PHP by installing the `sqlsrv` and `pdo_sqlsrv` extensions. These are the secret ingredients that give you access to the mighty Microsoft SQL Server database.

2. Now, don't forget to grab the Microsoft SQL ODBC driver! It's like a trusty sidekick that helps these extensions do their thing. Without it, they'd be left hanging without a partner in crime (or a connection to the database, if you prefer the less dramatic explanation).

<a name="configuration-using-urls"></a>
Now that you've got your dance card filled with all the right PHP extensions and friends, let's configure our Laravel application to work with Microsoft SQL Server. The following steps will guide you through the process of setting up URL-based configuration.

First, make a beeline for the `config/database.php` file, open it up, and prepare to get down with some SQLServer goodness!

1. Unleash your inner diva by finding the `mysql` section in the `connections` array, and give it the boot (or comment it out if you're feeling less aggressive). After all, we don't need a MySQL connection when we've got Microsoft SQL Server on our side!

2. Create a brand new entry for our SQLServer database connection by adding a `sqlsrv` section to the `connections` array. Here's what it should look like:

```php
'sqlsrv' => [
    'driver' => 'sqlsrv',
    'url' => env('DATABASE_URL'),
    'host' => env('DB_HOST', 'localhost'),
    'port' => env('DB_PORT', 1433),
    'database' => env('DB_DATABASE'),
    'username' => env('DB_USERNAME'),
    'password' => env('DB_PASSWORD'),
    'charset' => 'utf8',
    'prefix' => '',
    'options' => [
        19002 => [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ], // Eager loading of rows as objects
    ],
],
```

3. Don't forget to tell Laravel about our new SQLServer connection by adding the following line to the `databases` array:

```php
'sqlsrv' => [
    'driver' => 'sqlsrv',
    'connection' => env('DB_CONNECTION', 'sqlsrv'),
],
```

4. Lastly, don't forget to set up your `DATABASE_URL` environment variable in either your `.env` file or the `.env.local` file (if you have one). Here's what it should look like:

```ini
DB_CONNECTION=sqlsrv
DB_HOST=127.0.0.1
DB_PORT=1433
DB_DATABASE=my_database
DB_USERNAME=my_username
DB_PASSWORD=my_password
```

 Alrighty, let's chat about Configuration Using URLs! This ain't your average karaoke night where you juggle a bunch of different lyrics sheets for each song – we're talking databases here! Traditionally, setting up database connections requires handling numerous config values like `host`, `database`, `username`, and more, which are like the secret ingredients in your favorite recipe, but way less delicious. Each ingredient has its own environment variable counterpart, so when you're cooking up a storm on production servers, it's like having a gourmet kitchen with an army of interns managing all those variables!

Luckily, some sophisticated database providers such as AWS and Heroku recognize that multitasking isn't everyone's cup of tea (or database connection) and offer a single, streamlined database "URL" containing all the vital connection details in one elegant string. Imagine a beautifully composed symphony where each instrument plays its part – that's what an example database URL looks like:

```html
mysql://root:password@127.0.0.1/forge?charset=UTF-8
```

TheseURLs are like the Rosetta Stone of database connections, following a standard schema convention:

```html
driver://username:password@host:port/database?options
```

For your convenience (and to save you from needing that army of interns), Laravel supports these URLs as an alternative to configuring your database with multiple configuration options. If the `url` (or the equally-catchy `DB_URL` environment variable) option is present, it'll be used to magically extract the database connection and credential details – just like a skilled chef whipping up a meal from a single, mysterious ingredient! 🍲🔮

 Alright, buckle up, database wranglers! If you've ever found yourself in a pickle, juggling multiple databases for different database operations like a circus performer balancing too many plates (or in this case, connections), fear not! Laravel has come to your aid, offering a juggling act so smooth it'll make a clown blush.

Let's take a gander at our configuration example:

```php
'mysql' => [
    // Our favorite four-legged creature is now 'herd', because we're fancy like that.
    'herd' => [
        'driver' => 'mysql',

        // Our new "read" and "write" herds are on the move!
        'read' => [
            'host' => [
                '192.168.1.1',
                '196.168.1.2', // Yes, we did just put a six in there... because why not?
            ],
        ],
        'write' => [
            'host' => [
                '192.168.1.3',
            ],
        ],
        'sticky' => true, // Don't forget our sticky note reminding us to stay together!

        'port' => env('DB_PORT', '3306'),
        'database' => env('DB_DATABASE', 'laravel'),
        'username' => env('DB_USERNAME', 'root'),
        'password' => env('DB_PASSWORD', ''),
        'unix_socket' => env('DB_SOCKET', ''),
        'charset' => env('DB_CHARSET', 'utf8mb4'),
        'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
        'prefix' => '',
        'prefix_indexes' => true,
        'strict' => true,
        'engine' => null,
        'options' => extension_loaded('pdo_mysql') ? array_filter([
            (PHP_VERSION_ID >= 80500 ? \Pdo\Mysql::ATTR_SSL_CA : \PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
        ]) : [],
    ],
]
```

Now, three new keys have joined the party: `read`, `write`, and `sticky`. The `read` and `write` keys have array values containing a single key: `host`. The rest of the database options for the `read` and `write` connections will be merged from the main `mysql` configuration array.

You only need to place items in the `read` and `write` arrays if you wish to override the values from the main `mysql` array. So, in this case, `192.168.1.1` will be used as the host for our "read" herd, while `192.168.1.3` will be used for the "write" herd. The database credentials, prefix, character set, and all other options in the main `mysql` array will be shared across both herds. When multiple values exist in the `host` configuration array, a database host will be randomly chosen for each request, adding a touch of unpredictability to our database operations (because who doesn't love a bit of excitement?)

<a name="the-sticky-option"></a>
The `sticky` option is your trusty glue that keeps connections together. When enabled, the same connection will be reused for multiple requests within the same session. However, when dealing with complex transactions or long-running queries, it might be best to let go of stickiness and enjoy some fresh connections. Happy herding!

 Ahoy there, coding seafarers! Let's dive into the delightfully quirky world of Laravel databases and their enchanting `sticky` option!

This charming feature is an *optional* addition that, much like a lifebuoy in rough seas, allows immediate access to records freshly penned into the databook during the current voyage (request cycle). If you set sail with this option engaged and perform a "write" operation against the database during your journey, any subsequent "read" operations will hop aboard the write connection's pirate ship! Why does this matter, you ask? Well, it guarantees that any booty (data) plundered during the request cycle can be instantly retrieved from the databook without having to wait for the next port call (database query).

But remember, dear sailors, whether or not this behavior is befitting your ship is entirely up to you. It's like deciding whether to let pirates on board or not – it all depends on how you wish to navigate these digital waters!

Now that the lifeboat's been unmoored, let's continue our voyage and learn more about... (insert a nautical pun here) Running Queries!

 Ahoy there, intrepid developer! You've braved the seas of configuration and finally anchored your ship in Laravel's database port. Now it's time to swab the decks (or rather, write some SQL queries)!

With the database connection squared away, you can now command the `DB` facade like a seasoned captain. This nifty toolbox offers methods for every type of query: `select`, `update`, `insert`, `delete`, and `statement`.

<a name="sailing-the-sql-seas"></a>

### Setting sail with a SELECT query

Ah, the quest for knowledge! To embark on a voyage of discovery using the `SELECT` method, first set the proper course:

```php
$results = DB::select('SELECT * FROM users WHERE id = ?', [$id]);
```

Remember to replace the `?` with your desired placeholders and tuck them safely into the array following the query. Hoist the sails, mateys! You're now on a quest for data!

<a name="updating-the-map"></a>

### Charting new courses with UPDATE queries

Navigate through the waters of change using the `UPDATE` method:

```php
DB::update('UPDATE users SET age = ? WHERE id = ?', [$newAge, $id]);
```

Take heed to update your users' ages with caution, for a single misplaced anchor may cause chaos on the high seas!

<a name="mapping-the-uncharted"></a>

### Exploring uncharted territories with INSERT queries

To add a new landmark to the map, set sail with the `INSERT` method:

```php
DB::insert('INSERT INTO users (name, age) VALUES (?, ?)', [$name, $age]);
```

Don't forget to chart your course carefully and ensure your new treasure is properly stored in the depths of the database!

<a name="cutting-the-rope"></a>

### Dropping anchors with DELETE queries

Sometimes, you may need to jettison cargo (or in this case, records) using the `DELETE` method:

```php
DB::delete('DELETE FROM users WHERE id = ?', [$id]);
```

Remember to be mindful when casting off the anchor; a single misstep could result in an unintended plunge into the abyss!

<a name="navigating-the-deep"></a>

### Navigating the deep with raw SQL

For those who wish to delve even deeper, the `DB` facade offers the `statement` method:

```php
$handle = DB::getPdo()->prepare('YOUR RAW SQL QUERY HERE');
$handle->execute([$arg1, $arg2]);
```

Proceed with caution, matey! Navigating the deep can be a treacherous journey; make sure you've charted your course accurately before setting sail!

 Alright, buckle up, cowboy! We're diving into the wild world of Laravel database queries, and what better place to start than with a good ol' fashioned `SELECT` statement!

Now, don't get too excited – we're not talking about those flashy dance moves from Saturday Night Fever. Instead, let's talk about the fabulous `select` method that hangs out on the `DB` facade (Laravel's go-to party host). Here's how you can use it:

```php
<?php

// Your favorite controller, rockin' out some database action!
class UserController extends Controller
{
    /**
     * Show a list of all the users who are still breathing (i.e., active).
     */
    public function index(): View
    {
        $users = DB::select('select * from users where active = ?', [1]);

        // Time to throw a view party!
        return view('user.index', ['users' => $users]);
    }
}
```

In the above example, we're asking Laravel to round up all the active users from the `users` table and serve them up in a fancy PHP array. The first argument is our SQL query (think of it as your invitation to the dance), and the second argument is any parameter bindings you need to secure your party against those pesky SQL injection crasher parties (you know, the ones that ruin everything with their unwanted guests).

You'll find these parameter bindings in the `where` clause constraints (the bouncer's VIP list).

Now, what's a good dance without a little loop? Here's how to loop through your newly acquired PHP friends:

```php
use Illuminate\Support\Facades\DB;

$users = DB::select('select * from users');

foreach ($users as $user) {
    echo "Hey, " . $user->name . ", what's up?!" // Just shoutin' out to all our new friends!
}
```

And there you have it! You've managed to snag a bunch of users from the database with Laravel's `select` method and thrown them a little PHP soiree. Party on, Wayne!

 Ahoy there, Laravel pirates! Let's hoist the sails and dive into the sea of scalar values that your database queries may uncover. No need to wrestle with record objects like a whale with a harpoon, because Laravel lets you grab this single, shiny pearl directly with the `scalar` method!

```php
Yarrrr, prepare ye for some counting! $burgers = DB::scalar(
    "SELECT (COUNT OF COUNTING ONLY WHEN food = 'burger' THEN 1 END) AS burgers FROM menu" // Feel free to add a pirate accent while typing this
);
```

Now, you can find out just how many burgers are hidden in your ship's kitchen without having to dig through an entire treasure chest full of records! Happy counting, buccaneers! 🐘🦐

 #### Multitasking like a boss in Laravel! 🚀

If your app is as multi-talented as Tony Stark (without the dramatic flair, of course), it might call stored procedures that spit out multiple result sets. No worries, pal! Laravel's got you covered with the `selectResultSets` method, a superhero cape for your database queries:

```php
[array_of_options, array_of_notifications] = DB::selectResultSets(
    "CALL get_user_options_and_notifications(:userId)", [
        'userId' => $request->user()->id // Yes, it's a secret identity.
    ]
);
```

<a name="using-named-bindings"></a>
**Bond, James Bond... of Parameters!** 🤖

To add some flair to your queries, Laravel supports named bindings—just like a secret agent's coded messages. This way, you can keep your query readable and your parameters organized:

```php
$userId = $request->user()->id; // 007 just received his mission ID.
DB::selectResultSets(
    "CALL get_user_options_and_notifications(:userId)",
    [':userId' => $userId]
);
```

Now go forth and conquer the world (of databases)! 🌐🚀💥

 Ahoy there, intrepid Laravel coders! Let's dive into the thrilling world of Named Bindings! 🤓

Ever found yourself in a pickle with those cryptic `?` param bindings? Well, fear not! It's time to step up your query game and sail smoothly through the seas of database queries with our delightful named bindings! 🌴

```php
You ask for a dance partner but instead of using secret codes like Morse or semaphore, you politely request them by their name:
$results = DB::select('select * from users where id = :id', ['id' => 1]);
```

No more guessing games! Just like asking for a drink at the tavern, you now have a clear conversation with your database. And who knows? Maybe next, we'll start negotiating with eloquent pirate talk! 🏴‍☠️

<a name="running-an-insert-statement"></a>

Now, if you fancy inserting new data into the database (which is akin to adding gold to your treasure chest), you can employ named bindings with an `insert` statement:

```php
Here be dragons! Or rather, user records! Let's add a shiny new one:
$data = ['name' => 'Captain Starlight', 'age' => 28];
DB::table('users')->insert($data);
```

And there you have it! Captain Starlight, age 28, has joined your crew (a.k.a database)! 🐉🎉

 Ahoy there, matey! Let's dive into the thrilling world of Laravel database operations, shall we? Today on our quest for treasure, we're talking about executing an `insert` statement - the Pirate's Logbook of the web world! 📚🏴‍☠️

To embark on this daring adventure, you'll need to wield the powerful `DB` facade like a rusty cutlass. This magical artifact has seen many battles and can help us perform mighty deeds in our database endeavors. Fear not, for even a landlubber can master its ways!

Our journey begins with the `insert` method, a trusty ally that accepts not one, but two arguments. The first argument is the SQL query we want to unleash upon our unsuspecting database – remember, make it as glorious as Captain Hook's peg leg!

As for the second argument, this is where the bindings come into play. They are the secret ingredients that transform our humble query from an ordinary parchment into a powerful spell capable of manipulating our data like never before.

So let's set sail with this example:

```php
use Illuminate\Support\Facades\DB;

DB::insert('insert into users (id, name) values (?, ?)', [1, 'Marc']);
```

Here, our SQL query is an order to insert a new user with id `1` and the name `'Marc'`. The bindings ensure that the values are securely bound and properly placed within our query. Hoist the Jolly Roger, me hearties! We've just completed our first successful data insertion in Laravel's vast ocean of possibilities! 🏴‍☠️🎉

So there you have it, matey! With these simple steps, you can navigate the treacherous waters of database operations and become a true master of Laravel's enchanted seas. Happy coding, and may your data always be well-organized and secure! 🌟✨

 Alrighty, buckle up! We're about to embark on a thrilling journey into the heart of your database with Laravel's `update` method. This bad boy is like the Jedi Mind Trick for your database records - it helps you manipulate existing data without breaking a sweat (or at least, without making your server sweat).

Here's how to wield its power:

```php
First, let's import our magical helper, DB. It's like inviting Gandalf to a party, but for your database:

use Illuminate\Support\Facades\DB;

Now, let's imagine we want to bestow 100 votes upon the noble Anita (because she deserves it!). We'll cast our update spell with this incantation:

$affected = DB::update(
    'update users set votes = 100 where name = ?',
    ['Anita']
);
```

Just remember, the `update` method will return the number of rows affected by its enchantment. In this case, it'll tell you how many Anitas (if there are any) were found in your user table and had their votes updated to 100.

Happy updating! Just don't get carried away and start turning users into frogs... or worse, politicians.

 Ahoy there, Captain! Dive into the murky depths of your database with the `delete` method – a pirate's favorite tool for scuttling records without mercy. Just like the infamous Blackbeard, this command leaves no trace behind it, as the number of rows that were vanquished will be reported back by the method:

```php
Avast ye mateys! Use the magical DB facade to unleash your wrath upon your data:

use Illuminate\Support\Facades\DB;

$bootyLost = DB::delete('DELETE FROM scurvyDogs');
```

Remember, every good pirate knows that a clean database is a happy captain!

 Ahoy there, brave database adventurers! Dive right in as we journey through the murky depths of Laravel's database management, where fearless queries are forged and tables are dropped without a second thought (or a confirmation dialogue, if you will).

First off, let's talk about those pesky database statements that don't even bother to return a value. Quite the rascals, aren't they? But no need to worry, Laravel has your back! You can handle these ornery operations with ease by employing the `statement` method on the mighty `DB` facade:

```php
DB::statement('drop table users');
```

Just remember, this command isn't for the faint-hearted. It's like striking a match in a dark cave – once lit, it has no choice but to burn away everything in its path. Proceed with caution and always double-check your query before unleashing its destructive power!

And if you find yourself on the hunt for more knowledge about Laravel's database capabilities, feel free to peruse the documentation or consult the Oracle (ahem, I mean Laravel docs). Happy coding, pirates!

 Alrighty, buckle up, because we're about to dive into the world of raw SQL queries, where PHP meets your inner database nerd! 🤓

#### Running Wild: The Unprepared Statement

Ever found yourself itching to let loose on an SQL statement without any fancy value bindings? No worries, Laravel's got you covered with the `DB` facade's `unprepared` method, a wild child of database operations! 🦍

```php
DB::unprepared('update users set votes = 100 where name = "Dries"');
```

⚠️ **Attention all adventurers:** Unprepared statements are like the wild west—they don't bind parameters, making them prone to SQL injections. So if you let user-controlled values loose within an unprepared statement, you might find yourself in a tangled web of troubles! 🕸️

Now, remember, just because we're having fun doesn't mean we're taking things lightly. Safety first, folks! 💣✨

 Ah, dear Laravel coders! Buckle up as we delve into the thrilling world of Implicit Commits – the database equivalent of a sneaky prankster at a high stakes poker game.

You see, when you're working with transactions and the `DB` facade's `statement` and `unprepared` methods, it's like being in a tense hostage negotiation where one wrong move can blow up the whole deal. And just like in that scenario, we don't want any unexpected commitments, right?

Implicit commits are those sneaky statements that make your database engine think, "Hey, let's go ahead and close this transaction without asking Laravel." These uninvited guests can leave Laravel in the dark about the current transaction level, which is like showing up at a party without RSVPing – it's just rude!

Here's an example of a naughty implicit commit: creating a database table with this line of code:

```php
DB::unprepared('create table a (col varchar(1) null)');
```

Now, if you're interested in learning more about these notorious implicit committers, take a gander at the MySQL manual – it's like a rogue's gallery of database statements that can't help but make trouble.

<a name="using-multiple-database-connections"></a>

Now, let's get fancy and talk about using multiple database connections! Imagine you're juggling three balls at once – one for your main application, one for analytics, and another for user generated content. Keeping all those balls in the air requires a bit of finesse, but with Laravel, it's as easy as pie (and just as delicious!).

Here's how you can create a new database connection:

```php
$db = new DatabaseManager('analytics');
```

And if you need to interact with that analytics connection, you can use the `DB` facade like so:

```php
DB::connection('analytics')->table('crunchy_numbers')->get();
```

So there you have it – a crash course in implicit commits and multi-database connections, served up with a side of humor. Happy coding, dear friends! 🍰🔥🚀

 ### Unleashing Database Dynamo Duos! 🚀🎶

If your Laravel application is a supergroup with multiple band members (database connections), you can jam together harmoniously using the `DB` facade's sweet `connection` method found in your `config/database.php` file. Just like matching your drumsticks to your drummer, make sure the connection name you pass to this method matches one of your listed bandmates or those who joined the gig at runtime with the help of the `config` helper:

```php
use Illuminate\Support\Facades\DB;

// Plucking '80s Synth Pop' from the keyboard of our SQLite connection.
$users = DB::connection('sqlite')->select(/* ... */);
```

When you need to get up close and personal with your raw PDO instance, reach for the `getPdo` method on a connection instance:

```php
// Grabbing the drummer himself - raw PDO!
$pdo = DB::connection()->getPdo();
```

<a name="listening-for-query-events"></a>
### Listening in on Database Drum Circles 🎤🥁

Wanna be that cool kid who knows all the band's secrets? You can listen in on their drum circles (database queries) using Laravel's event system! Here's how you join the chat room:

1. Register a listener for the `query` event in your service provider:

```php
use Illuminate\Database\QueryEvent;

public function boot()
{
    DB::listen(function (QueryEvent $event) {
        dump($event->sql); // Dump that SQL query, baby!
    });
}
```

2. Now, every time your database connections start banging away on their drums, you'll see the sweet rhythm they play!

 Alright, let's lighten up this Laravel doc and make it more enjoyable! Here we go:

### Catching the SQL Query Action Heroics!

Ever wanted to be the sidekick who gets notified every time your application busts out a SQL query? Well, have no fear! The `DB` facade's got you covered with its superheroic `listen` method. This method is like Bat-Signal for your debugging needs, perfect for logging queries or catching those elusive rogue SQL statements lurking in the shadows.

Now, to register your query listener, all you need is a cape and a phone booth (just kidding!). Instead, head over to the `boot` method of your trusty service provider:

```php
<?php

namespace App\Providers;

use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Batman's utility belt ain't got nothing on us!
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        DB::listen(function (QueryExecuted $query) {
            // Here comes the Bat-Signal!
            // $query->sql: The SQL query that just went down.
            // $query->bindings: A clue to the variables involved in the action.
            // $query->time: Time it took to execute, in milliseconds.
            // $query->toRawSql(): The raw SQL without any placeholders.
        });
    }
}
```

<a name="monitoring-cumulative-query-time"></a>
Hold onto your codesticks! This method will help you monitor the cumulative query time as well, ensuring your superheroic application never falls behind in its fight against lag and latency.

 Ahoy there, Laravel adventurers! Ever found yourself in a pickle, with your web application taking longer to respond than a slow-cooked gourmet meal? Well, fret not! Laravel's got your back with its database query time monitoring feature. It's like having a watchdog that barks when Fido (your database) takes too long for his dinner break!

To get this watchdog barking at just the right moment, you'll need to set a "dinner bell" time (in milliseconds) and a callback function for the `whenDogTakesTooLongToEat` method. You can do this in the `boot` method of a service provider, which is like the town square where all good Laravel citizens gather.

```php
<?php

namespace App\Providers;

use Illuminate\Database\Connection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Events\QueryExecuted;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        DB::whenDogTakesTooLongToEat(500, function (Connection $connection, QueryExecuted $event) {
            // Send a SOS to the development team...
        });
    }
}
```

Now your Laravel app is not only tasty but also smart, alerting you when it's time for some optimization! Happy coding, and remember: faster applications make happier users (and developers)!

 ## Database Transactions: The Superhero's Playground! 🦸‍♂️🚀

Ever found yourself in a pickle where you needed to perform multiple database operations that either pass or fail together? Fret not, because Laravel's got your back! Introducing the DB facade's supercharged `transaction` method - it's like having an invisible cape for your database commands.

Imagine you're a crime-fighting database superhero, and each operation is a dastardly villain. With the `transaction` method, you can round up all those pesky operations in a single swoop! But here's the twist - if any of these villains put up a fight, this super-powered transaction will roll them back, automatically leaving no trace behind.

And the best part? You don't even have to memorize a fancy incantation or juggle with intricate commands to perform a rollback – Laravel takes care of that for you! Here's an example of how to use this marvelous method:

```php
use Illuminate\Support\Facades\DB;

DB::transaction(function () {
    DB::update('update users set votes = 1'); // Bam! First villain down!

    DB::delete('delete from posts'); // Pow! Second villain eliminated!
});
```

Now, let's discuss a potential hiccup – deadlocks. Imagine you and another superhero are trying to grab the same database record at the same time, causing an unintentional standoff. To resolve this, Laravel automatically detects and resolves deadlocks, making sure that your database operations flow as smoothly as a well-choreographed action sequence! 🎬

So go ahead, flex those SQL muscles, and let the `transaction` method take care of the nitty-gritty details while you focus on vanquishing more database villains!

 Ah, the thrill of a deadlock! It's like having a dance party in your database where everyone is trying to step on each other's toes. But fear not, Laravel's got your back with its transaction method, ready to save the day (and your data) from these unwelcome dance-offs.

In this cha-cha-challenged world, you can specify the number of times you want to retry a transaction after a deadlock has occurred by using an optional second argument - think of it as being on standby for that perfect opportunity to slide onto the dance floor.

Here's how you can put your dancing shoes on:

```php
use Illuminate\Support\Facades\DB;

// Put on your dancing shoes, we're heading to the database disco!
DB::transaction(function () use ($attempts) {
    // Attempt 1: Update user votes (Step left, step right)
    DB::update('update users set votes = 1');

    // Attempt 2: Delete posts (Spin move!)
    DB::delete('delete from posts');
}, attempts: 5);
```

And just like that, Laravel will keep spinning and stepping until the dance floor is clear... or you've reached your limit of attempts. Whichever comes first, an exception will be thrown, signaling the end of this particular dance-off. So get out there and conquer those deadlocks!

 Alright, let's dive into the world of database transactions! It's like playing a high-stakes game of poker, but instead of bluffing with cards, you're bluffing with data. And instead of a pot in the middle, you've got a glittering trophy called "Database Integrity."

If you fancy yourself as the Jules Verne of databases (you know, the guy who went to the center of the earth), you can start your own adventure manually with transactions! The `DB` facade, your trusty sidekick in this journey, offers the `beginTransaction` method. Think of it as raising the stakes by announcing "I'm all in!"

```php
use Illuminate\Support\Facades\DB;

DB::beginTransaction(); // It's showtime!
```

But what happens when Lady Luck turns her back? Fear not, my friend! You can always call for a "do-over" with the `rollBack` method. It's like hitting the reset button after a disastrous hand.

```php
DB::rollBack(); // Oops, wrong move! Let's start again.
```

Finally, once you've won the pot (or in this case, saved your data), it's time to cash out with the `commit` method. This is your victory dance, your "I told you so" moment!

```php
DB::commit(); // And the winner is... us!
```

Oh, and a little side note: The `DB` facade's transaction methods control the transactions for both the [query builder](/docs/{{version}}/queries) and [Eloquent ORM](/docs/{{version}}/eloquent). In other words, it's like having two superheroes on your team instead of one! 🚀🦸‍♂️

 Ahoy there, intrepid Laravel explorers! In case you've found yourself longing to delve into the deep blue sea of your database from the command line interface (CLI), we've got just the squidgy little tool for ya!

Introducing the delightful `db` Artisan command, the lifeboat that'll sail you across those choppy waters and straight to the heart of your SQL treasure chest.

To set sail on this quest, simply summon it with an incantation fit for a wizard:

```shell
php artisan db
```

If you find yourself in need of a more specific destination (let's say a secret island named `mysql`), don't fret! Just pass it along as an argument:

```shell
php artisan db mysql
```

Now, sit back and let Laravel handle the oar-work while you kick up your feet and enjoy the journey. But remember, ye mateys, it's still a jungle out there, so beware of those pesky database errors! Arrrr!

 Alrighty then! Let's dive into the mysterious world of your databases, shall we? You can do that by hollering at Artisan with some fancy commands - `db:show` and `db:table`. If you want to get a sneak peek of your database (including its size, type, number of active connections, and a rundown of all tables), just scream `db:show` into the terminal like an orc summoning Sauron.

```shell
php artisan db:show
```

Now, if you're feeling picky and want to inspect a specific database connection (because who doesn't love a good game of database roulette?), just add the `--database` option, naming your database connection like it's going out of style.

```shell
php artisan db:show --database=pgsql
```

But wait! There's more! If you want to include table row counts and database view details in the output, simply add the `--counts` and `--views` options (just don't forget to breathe between commands). Keep in mind that on large databases, this process might take as long as a sloth solving a Rubik's Cube.

```shell
php artisan db:show --counts --views
```

And here's where things get real fancy! You can use these `Schema` methods to inspect your database like Sherlock Holmes dissecting a crime scene with a magnifying glass and a pipe.

```php
use Illuminate\Support\Facades\Schema;

$tables = Schema::getTables(); // The who's-who of tables
$views = Schema::getViews(); // The Peeping Tom's guide to views
$columns = Schema::getColumns('users'); // A deep dive into the users table columns
$indexes = Schema::getIndexes('users'); // What's indexing who? An investigation into indexes
$foreignKeys = Schema::getForeignKeys('users'); // The foreign key affair: a look at relationships between users and other tables
```

Now, if you want to inspect a database connection that isn't your app's default connection (because variety is the spice of life), just grab hold of `connection` method like you would a lifeline on Survivor.

```php
$columns = Schema::connection('sqlite')->getColumns('users');
```

And that, my friend, is how you become the master of your database domain!

 Alrighty then! If you're feeling curious about what's happening within your database's individual tables, don't hesitate to call upon the mighty `db:table` Artisan command. This magical incantation grants you a sneak peek into a database table, revealing its secrets like a genie from a lamp – but without any fancy smoke or mirrors. It tells all about the table's columns, types, attributes, keys, and indexes, leaving no stone unturned in your quest for knowledge:

```shell
php artisan db:table users
```

(Just remember to use the right password when you summon this command – no one wants an unauthorized peek into their data!)

<a name="monitoring-your-databases"></a>
Now that we've got your attention, let's discuss monitoring your databases! It's like being a database superhero, always on the lookout for potential issues and keeping everything running smoothly. Just don't forget to wear your cape while you do it.

 Alrighty then! Let's dive into the world of database monitoring with Laravel's `db:monitor` Artisan command - your very own digital database babysitter!

Imagine you're hosting a swanky party at your house, and you don't want any uninvited guests crashing it. Well, in this metaphor, the house is your database, and the uninvited guests are excess open connections. Laravel will be our bouncer, dispatching an `Illuminate\Database\Events\DatabaseBusy` event if more than a specified number of these party crashers show up!

To get started, you'll want to schedule the `db:monitor` command to run every minute (because even party crashers need their rhythm). The command allows you to specify which database connection configurations you wish to monitor, along with the maximum number of open connections that should be tolerated before the event is dispatched:

```shell
php artisan db:monitor --databases=mysql,pgsql --max=100
```

But scheduling the command alone won't stop those pesky party crashers from crashing your shindig. When the command encounters a database with an open connection count that exceeds your threshold, a `DatabaseBusy` event will be dispatched. To catch these ruffians in the act, you should listen for this event within your application's `AppServiceProvider`. By listening for the event and sending a notification to you or your development team, you can make sure no one pulls a fast one on your database:

```php
use App\Notifications\DatabaseApproachingMaxConnections;
use Illuminate\Database\Events\DatabaseBusy;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Notification;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Event::listen(function (DatabaseBusy $event) {
        Notification::route('mail', 'dev@example.com')
            ->notify(new DatabaseApproachingMaxConnections(
                $event->connectionName,
                $event->connections
            ));
    });
}
```

Now that you've got your digital bouncer set up, you can rest easy knowing Laravel will be keeping an eye on those database party crashers for you!