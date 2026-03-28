 # Database: The Quarry Master

## Welcome to the Stone Age of Data! 🤘

- [Meet your Chisel and Mallet](#meet-your-chisel-and-mallet)
  - [Chiseling Results](#chiseling-results)
  - [Lazy Malleting of Results](#lazy-malleting-of-results)
  - [Aggregate Stones](#aggregate-stones)

<a name="meet-your-chisel-and-mallet"></a>

## Quarry Basics

### Selecting Your Stones

- [Select Statements](#select-statements)
- [Rough Hewn Expressions](#rough-hewn-expressions)
- [Joining Rocks](#joining-rocks)
- [Union of Stones](#union-of-stones)

### Where in the World are my Stones?

- [Basic Location Queries](#basic-location-queries)
  - [Location Queries](#location-queries)
  - [Orqueries](#orqueries)
  - [Not So Great Queries](#not-so-great-queries)
  - [Where in the Wilderness Queries](#where-in-the-wilderness-queries)
  - [JSON Queries](#json-queries)
  - [Additional Location Queries](#additional-location-queries)
  - [Logical Grouping](#logical-grouping)

<a name="basic-location-queries"></a>

### Advanced Location Queries

- [Where Existential Queries](#where-existential-queries)
- [Subquery Queries](#subquery-queries)
- [Full Text Queries](#full-text-queries)
- [Vector Similarity Queries](#vector-similarity-queries)

<a name="ordering-grouping-limit-and-offset"></a>

## Sorting, Grouping and Limiting your Stones

- [Sorting your Stones](#sorting-your-stones)
- [Grouping your Stones](#grouping-your-stones)
- [Limiting & Offsetting your Stones](#limiting--offsetting-your-stones)

<a name="sorting-your-stones"></a>

### Conditional Queries

<a name="insert-statements"></a>

## Carving New Stones

- [Upsert Sculptures](#upsert-sculptures)

<a name="update-statements"></a>

## Polishing your Stones

- [Updating JSON Columns](#updating-json-columns)
- [Increment and Decrement](#increment-and-decrement)

<a name="delete-statements"></a>

## Destroying your Stones

<a name="pessimistic-locking"></a>

## Protecting your Precious Stones

<a name="reusable-query-components"></a>

## Reusing Query Parts

<a name="debugging"></a>

## Finding the Cracks in your Queries

And there you have it, a fun yet informative guide to navigating the depths of Laravel's database query builder! 🎉🤘✨

 Ahoy there, adventurous coder! Sail into the serene harbor of Laravel's database query builder – a lighthouse guiding you through the choppy waters of SQL queries with an elegant, fluent interface. It's like having a seasoned sailor at your side, helping you catch those tricky database piranhas!

Wanna know the best part? This swashbuckler works like a charm with every single Laravel-supported database system – from stalwart MySQL to the mysterious MongoDB. It's like having one trusty sidekick that can translate into multiple languages! 🤯

But fear not, ye landlubbers who worry about scurvy SQL injections! Our query builder is armed with PDO parameter binding, ensuring your app stays safe and sound from those pesky attacks. No more scrubbing the decks of dirty data – just sit back and let the query builder do its magic!

Now, before we set sail on our epic quest for database glory, let's raise an anchor: PDO doesn't support binding column names. So keep a firm grip on the helm and steer clear of letting user input dictate your query's column names – even the "order by" ones! Yarr, beware, or ye may risk setting sail on the Rocky Road to Nowhere! 🌪️🚧

 ### Unleashing SQL Shenanigans! 🎉🤘

Hey there, data detective! If you're here, it means you've found the secret vault to our database querying shenanigans. So, buckle up and let's dive in! 🌊

<a name="retrieving-all-rows-from-a-table"></a>

#### Retrieving All Rows from a Table (a.k.a. "Fetch the Whole Enchilada")

Alrighty, partner! Sometimes you gotta catch 'em all, right? When you need to grab every single row from a table, we've got a tasty little helper for that. Just point your query at the table, and it'll bring back a collection of all the rows, like a well-trained data dolphin!

```php
// Fetch everything from the 'users' table
$allUsers = DB::table('users')->get();
```

In this example, `DB` is your magical genie that grants database wishes. The `table` method tells it which table you want to dive into, and `get()` is the command for "bring me all the rows, please!"

 Alrighty, grab your query cape and let's dive into the world of data retrieval! In Laravel, you can use the `DB` facade's superpowered `table` method to kickstart your heroic quest for data. This method, when called upon a table, will bestow upon you a fluent query builder instance that can be manipulated like a Jedi with a lightsaber, allowing you to chain more constraints on the query and finally summoning the results using the mighty `get` method:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Show a list of all the cosmic beings in our database.
     */
    public function index(): View
    {
        $users = DB::table('users')->get();

        return view('user.index', ['users' => $users]);
    }
}
```

The `get` method, once invoked, will return an `Illuminate\Support\Collection` instance that's chock-full of the query results. Each result is a humble PHP `stdClass` object, and you can access each column's value by treating it like the Secret Lair of the column's data:

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')->get();

foreach ($users as $user) {
    echo $user->name; // Because in the world of Laravel, everything is an object... even our heroes!
}
```

> [!NOTE]
> Laravel collections are the Swiss Army knife of data manipulation. They come packed with a wide array of incredibly powerful mapping and reduction methods to help you traverse the cosmos of data more efficiently. For more information on these magical tools, check out the [collection documentation](/docs/{{version}}/collections).
>
> *P.S.* Don't forget to grab a cup of your favorite beverage before diving into those collections, because you're in for a wild ride!

 Alrighty then! Let's dive into Laravel's database magic and fetch a single row or column like a boss.

If you're on a one-row-wonder mission, you can use the `DB` facade's trusty `first` method. It grabs a solitary `stdClass` object and slaps it on a silver platter for ya:

```php
$user = DB::table('users')->where('name', 'John')->first();

Now, let's pop open the ol' inbox and show off that email address:
return $user->email;
```

Should you desire to play hardball and throw a tantrum when no matching row is found, use the `firstOrFail` method. It'll send a `404 HTTP response` back to your client with a snotty "Not Found" sign on its forehead:

```php
$user = DB::table('users')->where('name', 'John')->firstOrFail();

If no user named John is found, they'll be as upset as a cat who can't find its favorite yarn ball.
```

But what if you only need one specific value from a record? Look no further than the `value` method! It rips out the column value like a pro:

```php
$email = DB::table('users')->where('name', 'John')->value('email');

And voila! You've got yourself some user's email address.
```

Now, if you're feeling fancy and want to grab a row by its `id`, the `find` method is your BFF:

```php
$user = DB::table('users')->find(3);

Don't worry about hunting through the entire user base; the `find` method will do it for you.
```

 Alright, buckle up, data detectives! Here's a side-splittingly hilarious guide on how to pluck those juicy column values from your database using Laravel's `pluck` method. Just think of it as reaching into the cookie jar of your database and pulling out those tasty morsels of data, but with a lot more coding involved!

```php
Use your best Internet detective skills by calling upon Illuminate\Support\Facades\DB:

$titles = DB::table('users')->pluck('title');

Then, let's party like it's 1984 and echo out those titles one by one:

foreach ($titles as $title) {
    echo $title;
}
```

Now, if you want to get fancy and assign the names as keys to your collection, you can pull off a magical act of voodoo coding:

```php
$titles = DB::table('users')->pluck('title', 'name');

forever and always, iterate through your new collection, echoing the titles:

foreach ($titles as $name => $title) {
    echo $title;
}
```

Now that we've got our data collection all snug and cozy in our arms, let's talk about chunking those results for some extra fun times! Jump on over to the "Chunking Results" section if you're ready for a wild ride.

[Jump to Chunking Results](#chunking-results)

 ### Eating Elephants... One Bite at a Time!

When your database is filled with more records than a herd of elephants, it's time to break out the `chunk` method from the DB facade's trunk! This clever chap retrieves teeny tiny bites of results, perfect for digesting without overloading your system. For instance, let's chow down on the entire `users` table in 100-record helpings:

```php
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

DB::table('users')->orderBy('id')->chunk(100, function (Collection $users) {
    foreach ($users as $user) {
        // Munch on some data...
    }
});
```

Want to stop the feast early? Just flip the "I'm Full" sign by returning `false` from the closure:

```php
DB::table('users')->orderBy('id')->chunk(100, function (Collection $users) {
    // Gobble up the records...

    return false;
});
```

If you're busy updating your database while eating, things could get messy! If you plan on tweaking the served dishes, it's always smarter to use the `chunkById` method instead. This fella will smartly page through results based on the record's primary key:

```php
DB::table('users')->where('active', false)
    ->chunkById(100, function (Collection $users) {
        foreach ($users as $user) {
            DB::table('users')
                ->where('id', $user->id)
                ->update(['active' => true]);
        }
    });
```

Since `chunkById` and `lazyById` fellas add their own "where" conditions to the query, it's wise to logically group your own conditions within a closure:

```php
DB::table('users')->where(function ($query) {
    $query->where('credits', 1)->orWhere('credits', 2);
})->chunkById(100, function (Collection $users) {
    foreach ($users as $user) {
        DB::table('users')
            ->where('id', $user->id)
            ->update(['credits' => 3]);
    }
});
```

> [!WARNING]
> While updating or deleting records inside the chunk callback, changes to primary keys or foreign keys could affect the chunk query. This might lead to some records getting lost in the shuffle!

 ### Chilling with Chunks (But Way Cooler!)

The `lazy` method is like your cool, laid-back pal who hangs out at the local buffet and munches on chunks – not unlike our old friend, [the chunk method](#chunking-results). But instead of passing each chunk to a party (callback), this chill dude returns a LazyCollection™!

It's like inviting your entire social circle over for a house party, except you can still manage them all as if they were guests at one epic soiree:

```php
use Illuminate\Support\Facades\DB;

DB::table('users')->orderBy('id')->lazy()->each(function (object $user) {
    // ...
});
```

Now, if you're planning a home makeover and want to update the décor while your friends are still hanging out, it's best to call up `lazyById` or `lazyByIdDesc`. These party planners will ensure everyone gets their own private section and automatically paginate the results based on their unique ID:

```php
DB::table('users')->where('active', false)
    ->lazyById()->each(function (object $user) {
        DB::table('users')
            ->where('id', $user->id)
            ->update(['active' => true]);
    });
```

> 🚨 Caution!
> If you start rearranging furniture or switching party guests while the party is still in full swing, changes to their primary key or foreign keys could potentially lead to some missing invitations. In other words, your results might end up without a few key records.

<a name="aggregates"></a>
(Feel free to bring your own finger-snapping emoji here 🕺)

 ### Quantum Queries, Laravel Style! 🚀🔬

In the world of data wrangling, we're not just here to fetch records, oh no! We're also master statisticians. The query builder in Laravel comes equipped with a bag full of tricks for whipping up aggregate values like `count`, `max`, `min`, `avg`, and `sum` that would make even Sherlock Holmes green with envy.

Ready to roll the dice? Here's how you can do it:

```php
use Illuminate\Support\Facades\DB; // Don your quantum helmet, mate! 🤓

$users = DB::table('users')->count(); // How many users on this cosmic dancefloor? Just ask and ye shall receive!

$price = DB::table('orders')->max('price'); // What's the highest price we've ever paid for a Vogon poetry subscription? Let me fetch that figure for you...
```

But wait, there's more! You can mix 'n' match these methods with other clauses to ensure your aggregate value is as precise as a Swiss watch.

```php
$price = DB::table('orders')
    ->where('finalized', 1) // Only finalized orders, please
    ->avg('price'); // The average price of finalized intergalactic deals
```

<a name="determining-if-records-exist"></a>
Now, if you're curious about whether or not records exist, we've got a snazzy solution for that too:

```php
$isAnythingThere = DB::table('users')->whereExists(function ($query) {
    $query->select(DB::raw(1))
         ->from('orders')
         ->whereColumn('users.id', '=', 'orders.user_id');
});
```

Or if you prefer a more straightforward approach:

```php
$isAnythingThere = DB::table('users')->exists();
```

So there you have it, folks! Laravel query builder isn't just about fetching records, but also making sense of the cosmic chaos with numbers and statistics. 🤖🚀🎉

 Ah, the delightful dance of data in Laravel! Instead of counting on the `count` method to verify if your records are having a grand old ball in the database, you can spice things up with the `exists` and `doesntExist` methods instead. It's like playing a game of hide and seek, but with rows and columns instead of children!

```php
if (DB::table('orders')->where('finalized', 1)->exists()) {
    // Our mysterious order has been finalized! Let the celebrations commence!
}

if (DB::table('orders')->where('finalized', 1)->doesntExist()) {
    // Oh, no! It appears our finalized order has taken a vacation to Neverland. Let's send out a search party.
}
```

Now, that's what I call a dance of joy and despair, all within the confines of your codebase! 💃🏼💔

 Alrighty, buckle up, data detectives! Let's dive into the world of queries - and by that, we mean the glamorous world of SQL select statements. In Laravel, we've got a slew of ways to spice things up and make your database dance to our tune.

<a name="specifying-a-select-clause"></a>
First off, let's talk about specifying a `SELECT` clause. This is where you tell Laravel which columns from your table(s) you want to, well, select! To do this, simply use the `select()` method. For example:

```php
$users = DB::select('select name, email from users');
```

In this instance, we're telling Laravel to grab the names and emails of all the users in our database. Just like a magician revealing his secrets, but instead of rabbits and hats, it's data!

<a name="selecting-distinct-values"></a>
But what if you want only unique values? Fret not! Laravel has a `distinct()` method just for that. To use it, simply chain it to your `select()` statement:

```php
$uniqueEmails = DB::table('users')->select('distinct', 'email')->get();
```

With this code, Laravel will only return unique email addresses from the users table, ensuring you won't get any duplicates (unless, of course, one of your users has more than one email address – in which case, we suggest they call a help line).

<a name="selecting-from-multiple-tables"></a>
Now, let's say you want to query data from multiple tables. In that case, Laravel makes it a piece of cake with the `join()` method! Here's an example:

```php
$combinedData = DB::table('users')
    ->join('posts', 'users.id', '=', 'posts.user_id')
    ->select('users.name', 'posts.title')
    ->get();
```

In this example, we're combining the users and posts tables, matching them by user ID. We then select only the names from the users table and titles from the posts table, giving us a lovely mix of data that's perfect for a dinner party conversation (or any other occasion where talking about data is considered entertaining).

Remember, a query without a `SELECT` clause is like a sandwich with no filling – it may still look good, but it won't satisfy your hunger for data! So keep those select statements coming and let Laravel handle the heavy lifting while you enjoy the tasty results. Happy querying!

 Alrighty, let's dive into the world of Laravel database queries, where we don't necessarily have to be data gluttons and grab every single byte from our tables! 🍽️

#### Customizing your "Dinner Plate": Select Clause

Imagine you're at a fancy dinner party and you only want to eat the appetizer and dessert. Well, in Laravel land, you can do just that with the `select` method! It lets you customize your SQL plate for the query:

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')
    ->select('name', 'email as user_email') // Only the appetizer (name) and dessert (user_email) please!
    ->get();
```

If you want your results to be unique, like avoiding identical guests at a party, the `distinct` method comes in handy:

```php
$users = DB::table('users')->distinct()->get(); // No repeating guests allowed!
```

But what if you've already started cooking and then decide to add a side dish? The `addSelect` method is there to help you out:

```php
$query = DB::table('users')->select('name'); // I'll start with the appetizer (name) only

$users = $query->addSelect('age')->get(); // Now bring on the side dish (age) too!
```

<a name="raw-expressions"></a>
Now, when life gives you lemons... or SQL expressions, you can squeeze them with the `DB::raw()` method:

```php
$users = DB::table('users')
    ->select(DB::raw('CONCAT(name, \' \', email) as full_info'))
    ->get(); // Gather up all the guests and call them by their full names (concatenated name and email)!
```

Hope this little tutorial helps you navigate the data buffet more efficiently! 🍽️🎉

 ## Unleashing the Wild Side of Queries (Raw Expressions)

Ever found yourself in a pickle, yearning to stuff a whimsical string into your SQL salad? Fear not, my friend! Laravel's got your back with its wild and wacky `raw` method, courtesy of the ever-dependable `DB` facade:

```php
$users = DB::table('users')
    ->select(DB::raw('count(*) as user_count, status'))
    ->where('status', '<>', 1) // Note: This is not a typo. We're avoiding the dreaded '1' for a laugh.
    ->groupBy('status')
    ->get();
```

> [!ATTENTION]
> Be warned, these raw statements are like unsupervised kids at a candy store – they will be inserted into your query as strings. So, watch out for those pesky SQL injection vulnerabilities and keep them well-behaved!

<a name="raw-methods"></a>

 ### Raw and Rowdy! 🤘

Who needs `DB::raw` when you can spice up your queries with these bad boys? 🔥

These methods let you toss a wild, raw expression into different parts of your SQL stew. **Just remember, Laravel doesn't play bodyguard for raw expressions and won't vouch for their impenetrability against SQL injection shenanigans.**

<a name="selectraw"></a>

#### SelectRaw 🎶

Let's rock the dancefloor! With `DB::selectRaw`, you can create custom database queries that look more like poetry than code. Just beware of those SQL injection party crashers! 💃🔥🥳

```php
$results = DB::selectRaw('SELECT * FROM users WHERE name LIKE ?', ['John%']);
```

#### UpdateRaw 🔨

If you're feeling handy and want to hammer some raw SQL into your database, `DB::updateRaw` is the tool for the job. But remember, it's a bit like letting a monkey loose in your house—there might be some chaos, and there's no guarantee against unwanted guests! 🐒🏠

```php
$affectedRows = DB::updateRaw('UPDATE users SET age = age + 1 WHERE name = ?', ['John']);
```

#### DeleteRaw 🗑️

Sometimes, you need to clean up some mess. But beware! With `DB::deleteRaw`, you might accidentally sweep away more than you intended. Just like when you borrow your roommate's favorite shirt—whoops! 😅🧹

```php
$deletedRows = DB::deleteRaw('DELETE FROM users WHERE name = ?', ['John']);
```

 Alrighty, buckle up, because we're diving into the magical world of `selectRaw`. Think of it as your secret sauce in the Laravel kitchen. It's the sous chef to `addSelect(DB::raw(/* ... */))` when you need a little extra flair on those SQL queries.

But wait, there's more! `selectRaw` can take an optional array of bindings as its second argument. That's like inviting your favorite ingredients to the party and letting them mingle with your SQL statement. You might say it's a bit like adding tax to your order without leaving the comfort of your code:

```php
$orders = DB::table('orders')
    ->selectRaw('price * ? as price_with_tax', [1.0825]) // Tax time!
    ->get();
```

Now that's what I call a tasty query!

 Ahoy there, dear coder! Ever found yourself in a pickle, trying to navigate the murky waters of SQL queries like a pirate swabbing a leaky dinghy? Fear not, for your trusty Laravel ship has a secret stowaway - the `whereRaw` and `orWhereRaw` methods!

These buccaneers allow you to inject a raw "walk-the-plank" clause into your query, making it dance like a drunken sailor on shore leave. They'll accept an optional array of bindings as their second argument - swashbuckling treasure for your SQL escapades!

```php
$orders = DB::table('orders')
    ->whereRaw('price > IF(state = "TX", ?, 100)', [200]) // Sails off to find orders with prices greater than the bounty from Texas (or 100 if it ain't in Texas)
    ->get();
```

Splice the mainbrace and hoist the mainsail, mateys! With `whereRaw` and `orWhereRaw`, you can boldly go where no man has gone before... or at least, where no raw SQL has been injected yet. Arr matey, coding is now more fun than a barrel of monkeys! 🦵️🐒

 Ah, the `havingRaw` and `orHavingRaw` methods! These clever chaps are like the sneaky ninjas of the Laravel SQL world, ready to slip a raw string into your "having" clause without causing a single ruckus.

Imagine you're running a secret spa operation, and you want to know which department is raking in more than $2500 worth of sales per day - these methods are your best bet! They'll help you sneak the necessary SQL into your queries without raising any eyebrows.

```php
$spaSales = DB::table('bubble_wraps') // Yes, we sell bubble wraps in our spa... long story
    ->select('treatment', DB::raw('SUM(cost) as total_revenue'))
    ->groupBy('treatment')
    ->havingRaw('SUM(cost) > ?', [2500]) // Shhh, it's our secret!
    ->get();
```

These cunning methods even take an optional array of bindings as their second argument, which is super handy when you need to pass parameters into your raw SQL statements.

Now, go forth and conquer the spa world with these sneaky SQL warriors by your side! Just remember, with great power comes great responsibility – always use them wisely and ensure your queries are safe from SQL injections!

 Alright, let's get this party started! The `orderByRaw` method is like the life of the database bash, spicing up your queries with a dash of SQL sauce. Instead of sticking to the usual order by suspects (id, name, or created_at), it lets you whip out that secret weapon - a raw string!

```php
$orders = DB::table('orders')
    ->orderByRaw('updated_at - created_at DESC') // You're welcome to boogie down with the timestamps, but remember, DESC is the dance floor we're talking about here.
    ->get();
```

In this example, you're sorting your orders by the difference between `updated_at` and `created_at`, in descending order. It's like lining up your orders based on their 'age gap', with the oldest ones showing up first, giving a whole new meaning to 'old souls'. So, go ahead and let your inner SQL maestro loose with this bad boy! 💃🕺️🚀

 Ahoy there, Laravel coders! Dive into the deep end of data wrangling with the `groupByRaw` method, a secret weapon in your SQL arsenal.

This bad boy lets you provide a raw string as the value of the `group by` clause, like a ninja slipping through the matrix of your database records.

```php
$orders = DB::table('orders')
    ->select('city', 'state') // Just the good stuff, please!
    ->groupByRaw('city, state') // Raw and uncut - just how we like it!
    ->get(); // And now, the grand finale - serve 'em up!
```

So, if you're in a pickle trying to group your records by more than one column without Laravel knowing what exactly you're up to, `groupByRaw` has got your back. It's like the ultimate wingman (or wingwoman, no judgment here) for your SQL queries! 🤘🏽

 Ahoy there, brave coder! Let's dive into the magical world of database joins - where tables come together in a whirlwind dance of SQL data fusion!

<a name="inner-join-clause"></a>
### Inner Join Clause 🕺💃

If you want to join two tables and only show records that have matching IDs, then you're in for an inner join! This is like inviting your besties over for a dinner party where only mutual friends are invited.

```php
DB::table('users')
    ->join('posts', 'users.id', '=', 'posts.user_id')
    ->get();
```

This piece of code will fetch all the users who have posted something on our Laravel-o-sphere, ensuring that those who post without accountability are left out in the cold! 😎

<a name="left-join-clause"></a>
### Left Join Clause 💌

Sometimes you've got a bunch of posts but not all of them belong to users. That's when it's time for a left join - a one-way ticket to the wild west, where orphans (posts without owners) are welcome!

```php
DB::table('users')
    ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
    ->get();
```

With this code, you'll get a list of users as well as those lonely posts that haven't found their soulmate (user) yet. Remember, in the world of databases, it's better to be an orphan than nothing at all! 😜

<a name="right-join-clause"></a>
### Right Join Clause 🕺💃 (with a twist)

A right join is like the mirror image of an inner join, but instead of inviting your friends to your party, you send out invitations to everyone in town. This way, even if some people decline or haven't RSVPed yet, you still have all your friends at the party!

```php
DB::table('posts')
    ->rightJoin('users', 'posts.user_id', '=', 'users.id')
    ->get();
```

Now you've got a list of all posts, even if some don't have owners yet (or maybe they just haven't accepted the friendship request!). This can help you keep track of who needs to be paired with their perfect post. 🤝

<a name="outer-join-clause"></a>
### Outer Join Clause 🎉

An outer join is like a giant community event where everyone is invited, including those who can't make it! This means you get to see all the users and posts, even if some don't have matches.

```php
DB::table('users')
    ->outerJoin('posts', 'users.id', '=', 'posts.user_id')
    ->get();
```

With this code, you'll get a list of all users and their posts, whether they've posted or not. It's like the Laravel-o-sphere's yearly village fair where everyone is welcome, no matter how many (or few) selfies they've posted! 📸

 Alright, let's get this database party started! Laravel's query builder isn't just a dance floor, it's also a symphony orchestra conducting the perfect rhythm of SQL. And one of its key instruments? The Inner Join Clause. You can think of it as inviting your friends to the dancefloor but only if they've got a partner (a common column between tables).

To perform a basic "inner join", you just need to call `join` on a query builder instance, passing the name of the table you want to grab a dance partner with as the first argument. The second argument is like a secret password that ensures they're the right partner for the job—it specifies the column constraints for the join:

```php
use Illuminate\Support\Facades\DB;

$friends = DB::table('party-goers') // Our dancefloor (users table)
    ->join('dance-partners', 'party-goers.id', '=', 'dance-partners.dancer_id') // Calling a partner (contacts table)
    ->join('dance-orders', 'party-goers.id', '=', 'dance-orders.dancer_id') // Calling another partner (orders table)
    ->select('party-goers.*', 'dance-partners.phone', 'dance-orders.price') // Inviting them to the dance, requesting their phone number, and asking for their bill
    ->get(); // Time to hit the dancefloor!
```

And that's not all! You can even have a group dance with multiple tables in a single query:

```php
use Illuminate\Support\Facades\DB;

$flashmob = DB::table('party-goers') // Our flashmob (users table)
    ->join('dance-partners', 'party-goers.id', '=', 'dance-partners.dancer_id') // Calling a partner (contacts table)
    ->join('dance-orders', 'party-goers.id', '=', 'dance-orders.dancer_id') // Calling another partner (orders table)
    ->select('party-goers.*', 'dance-partners.phone', 'dance-orders.price') // Preparing to perform
    ->get(); // Time to hit the stage!
```

Now that you know how to join the fun, your queries will be as lively as a barn dance and as sophisticated as a ballroom waltz!

 Ahoy, intrepid Laravel explorers! If you're hankering for a jolly good time with your SQL queries and not just settling for plain ol' 'inner joins', allow me to introduce you to the delightful world of 'left joins' and 'right joins'!

Now, if you fancy merging two tables like the dashing couple at a ball, don't reach for the `join` method—that would be as fashionably awkward as wearing last year's dance shoes. Instead, give the elegant `leftJoin` or `rightJoin` methods a twirl!

These charming partners have all the charm and manners of their older sibling, the `join`, but with a touch of flair that makes them a perfect fit for those special occasions when you want to include even those pesky users without any posts.

```php
$users = DB::table('users')
    ->leftJoin('posts', 'users.id', '=', 'posts.user_id') // Ain't no party like a left-joined party!
    ->get();

$users = DB::table('users')
    ->rightJoin('posts', 'users.id', '=', 'posts.user_id') // Or maybe a right-joined party is more your style?
    ->get();
```

And there you have it, folks! Now you can join the fun without worrying about any awkward moments of exclusion in your SQL parties! Just remember: when in doubt, left or right—it's all good as long as you're joining with style. Cheers! 🥳🎉

 Alright, let's get this show on the road! 🎤 In the Laravel universe, we've got a superstar known as the `crossJoin` method. This guy is here to perform a "cross join", which is like a dance-off between two tables. 💃🕺 But instead of breaking it down on the dance floor, these two tables produce a cartesian product.

```php
$sizes = DB::table('sizes')
    ->crossJoin('colors')
    ->get();
```

In this example, `sizes` and `colors` are the stars of our show. This dance-off will result in a list that combines every size with every color! 🌈 Just remember, unlike a real dance-off, there's no judging here - everyone gets to be a winner! 🎉✨

So next time you need to create an all-star team of sizes and colors, give `crossJoin` a spin! (Yeah, we went there.) 🎠

 Alright, let's get the party started with some fancy join clauses in Laravel land! 🥳

First off, remember when joining tables was as easy as a high school dance? Well, get ready to bust some moves again, because we're about to level up that dance floor with some advanced join clauses. 💃🕺️

To kick things off, just pass a nifty little closure as the second arg to the `join` method. This closure will then hand you an elegant `Illuminate\Database\Query\JoinClause` instance that's just dying to hear your join constraints. 🎤

```php
DB::table('users')
    ->join('contacts', function (JoinClause $join) {
        // Time for a little chat with our buddy, JoinClause
        $join->on('users.id', '=', 'contacts.user_id')->orOn(/* ... */);
    })
    ->get();
```

Now, if you're feeling like adding a "where" clause to your join (because who doesn't love a good filter?), you can use the `where` and `orWhere` methods provided by the `JoinClause`. Instead of comparing two columns like a standard nerd, these methods will compare the column against a value. 🤓

```php
DB::table('users')
    ->join('contacts', function (JoinClause $join) {
        $join->on('users.id', '=', 'contacts.user_id')
            ->where('contacts.user_id', '>', 5); // Only let in users with ID greater than 5
    })
    ->get();
```

And there you have it! Advanced join clauses, now that's a dance routine worth mastering. 💃🕺️🎉

Now, go forth and conquer those tables like the data-driven Jagger you are! 🎸🚀

 Alrighty, buckle up, because we're diving into the delightful world of subquery joins! This ain't your mama's regular join party - it's a dance where the DJ spins subqueries and Laravel is the life of the party.

You see, `joinSub`, `leftJoinSub`, and `rightJoinSub` are like the hippest moves in town. They let you hook a query up with a subquery, all while serving up three essential ingredients: the subquery itself, its dance floor name (a.k.a alias), and a nifty closure that specifies the joint columns.

Let's bust some moves to find out which user has the most recent finger painting on their blog:

```php
First, we get the latest posts from the 'posts' table, grabbing the 'user_id' and the max 'created_at':

$latestPosts = DB::table('posts')
    ->select('user_id', DB::raw('MAX(created_at) as last_post_created_at'))
    ->where('is_published', true)
    ->groupBy('user_id');
```

Next, we hit the dance floor with our `users` table and do a sweet joinSub to connect it with our slick new 'latestPosts' crew:

```php
$users = DB::table('users')
    ->joinSub($latestPosts, 'latest_posts', function (JoinClause $join) {
        $join->on('users.id', '=', 'latest_posts.user_id');
    })->get();
```

And there you have it! A collection of users, each one with the timestamp of their most recent blog post strutting alongside them like a proud peacock. Now that's what I call a well-danced joinSub! 🕺💃️

 🤓 Hey there, Code Cowboys and Codelettes! 🤓 Let's dive into the wild world of Lateral Joins - it's like a dance move for your database queries! 💃🕺

First thing's first: lateral joins are only for the cool kids. PostgreSQL, MySQL (8.0.14 and up, no slackers allowed!), and SQL Server are the ones with the dance moves. 😎🤓

So, how do you pull off this fancy move? Simple! Use the `joinLateral` and `leftJoinLateral` methods - just like inviting a plus-one to your query's party. Each method requires two things: a subquery and its dance partner alias. And remember, in this dance, the join conditions should be whispered within the `where` clause of the subquery.

Let's say you want to round up some users and their latest three blog posts for a party. Each user can bring up to three guests (blog posts) to the dance floor. Here's how you might do it:

```php
$latest_posts_invite = DB::table('posts') // The guests
    ->select('id as post_id', 'title as post_title', 'created_at as post_created_at') // What they wear to the party
    ->whereColumn('user_id', 'users.id') // How they know each other (join condition)
    ->orderBy('created_at', 'desc') // Who arrives first at the party
    ->limit(3); // Number of guests per user

$users = DB::table('users') // The hosts
    ->joinLateral($latest_posts_invite, 'latest_post') // Introducing the guests
    ->get(); // Time to start the dance!
```

Now you've got your party guests all set! 🎉 Just remember that lateral joins are like a lively conga line - each row gets its own turn on the dance floor. 💃🕺🌽️🌽️

 Alright, buckle up, my data-hungry friends! Let's dive into the exciting world of Laravel unions – where two becomes one (but not in a romantic way, let's save that for Valentine's Day).

Just like your favorite popcorn mix, Laravel lets you combine queries with its tantalizing `union` method. You start with a delectable query, then throw in more queries for good measure:

```php
use Illuminate\Support\Facades\DB;

$firstNameLessUsers = DB::table('users')
    ->whereNull('first_name');

$users = DB::table('users')
    ->whereNull('last_name')
    ->union($firstNameLessUsers)
    ->get();
```

But wait, there's more! If you're feeling particularly rebellious or just can't stand the thought of duplicate elimination, Laravel throws in an `unionAll` method for your non-conformist pleasure. This naughty little number will let those pesky duplicates slip through the cracks and into your query results:

```php
$duplicateLadenUsers = DB::table('users')
    ->where('age', 27)
    ->unionAll($duplicateLadenUsers) // Yeah, I know it's messy, but you asked for it!
    ->get();
```

Just remember to keep an eye on those duplicate results and maybe consider a post-query detox session if things get too wild. Happy unioning, data enthusiasts! 🎉🥳

 Ahoy, coders! Today we're gonna sail through the enchanting waters of Laravel where clauses. So buckle up and let's dive right in! 🐠🚀

### <a name="basic-where-clauses"></a>Basic Where Clauses: The Lighthouse of Queries

The **Where Clause** is your trusty compass when navigating the vast ocean of database queries. It helps you find the exact data you're looking for without getting lost in a sea of records.

Here's a simple example to get started:

```php
$users = DB::table('users')
            ->where('age', '=', 25)
            ->get();
```

In this example, we're sailing through the `users` table, setting our course for users of age 25. The `Where Clause` is our trusty lighthouse guiding us to these specific records.

But what if you want a more complex voyage? No worries, mate! Laravel has plenty of wind in its sails:

```php
$adults = DB::table('users')
            ->where(function ($query) {
                $query->where('age', '>=', 18)
                      ->where('age', '<=', 99);
            })
            ->get();
```

In this example, we're on a mission to find all adult users. First, we create an anonymous function (think of it as your pirate mate helping you steer the ship). We use the `Where Clause` to set conditions for both age greater than or equal to 18 and less than 99. Now, Laravel will only bring back records that meet these criteria.

### <a name="where-clauses-and-operators"></a>Where Clauses and Operators: A Tale of 'AND' and 'OR'

Operators are the tools in your arsenal that help you build complex queries. Let's get to know them better!

The **AND Operator** makes sure that every condition must be true for a record to be selected. It's like the crew all standing on the crow's nest, each one looking for different things but only hoisting the Jolly Roger when they spot what they're after together:

```php
$rich_and_handsome = DB::table('pirates')
            ->where(function ($query) {
                $query->where('gold', '>=', 10000)
                      ->where('looks', '=', 'good');
            })
            ->get();
```

In this example, we're only interested in finding pirates who have at least 10,000 gold and also happen to be good-looking. The AND Operator ensures that a pirate must meet both conditions to be included in the results.

The **OR Operator** is a bit more flexible, allowing you to select records if any of the conditions are true. It's like having different crews on multiple ships – each one can make their own way as long as they meet up at the end:

```php
$pirates_or_mermaids = DB::table('creatures')
            ->where(function ($query) {
                $query->where('type', '=', 'pirate')
                      ->orWhere('type', '=', 'mermaid');
            })
            ->get();
```

In this example, we're looking for either pirates or mermaids. The OR Operator ensures that any creature meeting these conditions will be included in the results.

### <a name="where-clauses-and-wildcards"></a>Where Clauses and Wildcards: Hunting Treasure with a Map!

Wildcards are like treasure maps that help you find records when you're not sure of their exact values.

```php
$starting_with_Q = DB::table('pirates')
            ->where('name', 'like', 'Q%')
            ->get();
```

In this example, we're searching for pirate names that start with the letter Q. The `Like Operator` and the wildcard (%) tell Laravel to bring back any records where the name starts with the letter Q. You can also use the underscore (_) as a single character wildcard:

```php
$names_with_one_o = DB::table('pirates')
            ->where('name', 'like', '_oo%')
            ->get();
```

In this example, we're searching for pirate names that contain the letter o exactly once. The `Like Operator` and the underscore tell Laravel to bring back any records where the name contains one o followed by anything else (oo%).

And there you have it! You've mastered the art of navigating Laravel's Where Clauses. Now, go forth and conquer those databases like a true pirate captain! 🏴‍☠️💪✨

 ### Where's the Fun in Querying? Let's Add Some Spice!

Alrighty, buckle up, because we're about to take a whirlwind tour through Laravel's query builder! The `where` method is your new best friend when it comes to adding "where" clauses to your queries. Just like in real life, you can't just walk into a party empty-handed - you gotta bring something to the table (or database, in this case).

The `where` method requires three gifts: the name of the column (the party host), an operator (the dance floor rules), and a value to compare against the column's value (your best moves). Here's a classic example:

```php
$users = DB::table('users')
    ->where('votes', '=', 100) // Column: votes, Operator: equal to, Value: 100
    ->where('age', '>', 35) // Column: age, Operator: greater than, Value: 35
    ->get();
```

If you're the type of person who likes to keep things simple, Laravel's got your back! Instead of explicitly stating the operator every time, you can pass the value directly as the second argument. The `where` method will assume you mean "equal to":

```php
$users = DB::table('users')->where('votes', 100)->get();
```

But wait, there's more! You can also query multiple columns at once by passing an associative array:

```php
$users = DB::table('users')->where([
    'first_name' => 'Jane',
    'last_name' => 'Doe',
])->get();
```

Remember, you can use any operator that your database system supports:

```php
$users = DB::table('users')
    ->where('votes', '>=', 100) // Column: votes, Operator: greater than or equal to, Value: 100
    ->get();

$users = DB::table('users')
    ->where('votes', '<>', 100) // Column: votes, Operator: not equal to, Value: 100
    ->get();

$users = DB::table('users')
    ->where('name', 'like', 'T%') // Column: name, Operator: like, Value: starts with 'T'
    ->get();
```

You can even pass an array of conditions to the `where` function:

```php
$users = DB::table('users')->where([
    ['status', '=', '1'],
    ['subscribed', '<>', '1'],
])->get();
```

But remember, party's not always a blast! PDO doesn't support binding column names, so never let user input decide the columns in your queries. And watch out for MySQL and MariaDB - they might automatically typecast strings to integers during string-number comparisons, which can lead to some unexpected surprises. Make sure all values are properly cast before using them in your queries!

Now that you've learned the basics, it's time to put on your dancing shoes and start querying away! Happy coding, party people! 💃🕺️

 ### Or Where Clauses: The Unconventional Wedding of Operators

In a dance as old as SQL itself, Laravel's Query Builder introduces you to the charming "where" clauses. They're like the shy wallflowers at a tech ball who only mingle with each other, bonding over the `and` operator... unless you know the secret move to bring in the `orWhere` method!

```php
$users = DB::table('users')
    ->where('votes', '>', 100) // "Votes" over 100? Check!
    ->orWhere('name', 'John'); // Or, hey, is it John we're looking for? Why not!
    ->get();
```

But what if you've got a complicated relationship with `or`? Fear not! You can invite it to the dance too, by wrapping your `or` condition within parentheses and passing a closure as the first argument to the `orWhere` method.

```php
use Illuminate\Database\Query\Builder; 

$users = DB::table('users')
    ->where('votes', '>', 100) // Vote tally over 100? Check!
    ->orWhere(function (Builder $query) {
        $query->where('name', 'Abigail') // Name's Abigail?
            ->where('votes', '>', 50); // And votes over 50? Let's dance!
    })
    ->get();
```

This little waltz translates into SQL as:

```sql
select * from users where votes > 100 or (name = 'Abigail' and votes > 50)
```

Just remember, group your `orWhere` calls like you'd group wedding guests to avoid any unwanted surprises when global scopes come crashing the party!

<a name="where-not-clauses"></a>

> [!WARNING]
> Grouping `orWhere` calls like a well-organized wedding reception is key to avoiding unexpected behavior when global scopes are applied.

 ### Where's the Fun in Being Serious? Let's Get a Little Whimsical! 🎩

Ahoy there, code cowboys and coding cowgirls! Ever found yourself hankering for some good ol' fashioned database wrangling, but with a twist of comedic flair? Well, buckle up, partner, because we're about to embark on an adventure through the wild west of Laravel querying, and things are gonna get lively! 🌵🐎

First stop: The `whereNot` and `orWhereNot` saloons. Ever needed to negate a group of query constraints like you've just been caught stealing someone's horse? Fear not! These methods, my friends, are here to help you avoid the wrath of Sheriff Eloquent.

Just take a gander at this here example: the following query corrals products that ain't on clearance and whose price is more than ten:

```php
$products = DB::table('products')
    ->whereNot(function (Builder $query) {
        $query->where('clearance', '=', true) // Clearance items are outta luck!
            ->orWhere('price', '<', 10); // Products priced less than ten get the ol' heave-ho!
        })
    ->get();
```

Now, ain't that a purty bit of code? Just remember, if you're lookin' to round up all the products that meet these criteria, you'll want to use `whereNot()`, but if you're aiming for those that don't match _and_ also wanna toss in some extra constraints, `orWhereNot` is your huckleberry!

So yeehaw, partners! Ride on over to these saloons and see what sort of fun you can have with Laravel's `whereNot` and `orWhereNot` methods. And don't forget to wear your cowboy boots—you never know when you might step into some deep database queries! 🤠

 ### The Great Column Conundrum Solver: Any, All, and None!

Ever found yourself in a pickle, trying to squeeze the same query sauce onto multiple columns like a salad dressing factory on overdrive? Fret not, my friend, because Laravel's got your back with its nifty `whereAny`, `whereAll`, and `whereNone` methods!

#### The Where-All-You-Want-Is-Here: whereAny

Imagine you're on a wild goose chase for users whose names, emails, or phone numbers start with 'Example'. You can do this dance with the `whereAny` method:

```php
$users = DB::table('users')
    ->where('active', true) // Only interested in active users
    ->whereAny([ // Time to get picky!
        'name',
        'email',
        'phone'
    ], 'like', 'Example%') // Columns to check and the pattern to match
    ->get();
```

This query will translate into SQL magic like this:

```sql
SELECT *
FROM users
WHERE active = true AND (
    name LIKE 'Example%' OR
    email LIKE 'Example%' OR
    phone LIKE 'Example%'
)
```

#### The Where-All-Matters-Most: whereAll

Maybe you're looking for posts with 'Laravel' in both the title and content. You can find your golden nuggets using `whereAll`:

```php
$posts = DB::table('posts')
    ->where('published', true) // Only interested in published posts
    ->whereAll([ // Time to get choosy!
        'title',
        'content'
    ], 'like', '%Laravel%') // Columns to check and the pattern to match
    ->get();
```

This query will create SQL sorcery like this:

```sql
SELECT *
FROM posts
WHERE published = true AND (
    title LIKE '%Laravel%' AND
    content LIKE '%Laravel%'
)
```

#### The Where-None-of-these-Exist: whereNone

Perhaps you want albums that don't contain the 'explicit' tag. You can weed these out with `whereNone`:

```php
$albums = DB::table('albums')
    ->where('published', true) // Only interested in published albums
    ->whereNone([ // Time to get finicky!
        'title',
        'lyrics',
        'tags'
    ], 'like', '%explicit%') // Columns to check and the pattern to avoid
    ->get();
```

This query will transform into SQL wizardry like this:

```sql
SELECT *
FROM albums
WHERE published = true AND NOT (
    title LIKE '%explicit%' OR
    lyrics LIKE '%explicit%' OR
    tags LIKE '%explicit%'
)
```

So there you have it! Now you can query like a pro, with a dash of humor and a smidgeon of fun! Keep coding, my friend! 😎💻✨

 Alright, let's dive into the world of JSON queries in Laravel! If you thought Laravel was just a fun-loving PHP framework, prepare to be amazed. It's also your personal database Sherlock, solving mysteries hidden within your JSON columns!

First off, Laravel supports JSON column types on databases that can handle such magic, including MariaDB, MySQL, PostgreSQL, SQL Server, and even good ol' SQLite! To query a JSON column, just use the humble `->` operator. It's like a secret decoder ring for JSON data!

```php
$users = DB::table('users')
    ->where('preferences->dining->meal', 'salad') // Only salad lovers here!
    ->get();

Or if you're feeling adventurous:

$users = DB::table('users')
    ->whereIn('preferences->dining->meal', ['pasta', 'salad', 'sandwiches']) // Variety is the spice of life!
    ->get();
```

Now, we can get even more detective-like with `whereJsonContains` and `whereJsonDoesntContain`. These methods are like the "find in pages" feature on your browser but for JSON arrays.

```php
$users = DB::table('users')
    ->whereJsonContains('options->languages', 'en') // English speakers unite!
    ->get();

And if you're looking for the opposite:

$users = DB::table('users')
    ->whereJsonDoesntContain('options->languages', 'en') // English-free zone!
    ->get();
```

If your application uses MariaDB, MySQL, or PostgreSQL databases, you can pass an array of values to the `whereJsonContains` and `whereJsonDoesntContain` methods:

```php
$users = DB::table('users')
    ->whereJsonContains('options->languages', ['en', 'de']) // Multi-lingual users here!
    ->get();

Or if you want to exclude them:

$users = DB::table('users')
    ->whereJsonDoesntContain('options->languages', ['en', 'de']) // No English or German speakers in this group!
    ->get();
```

Furthermore, we have `whereJsonContainsKey` and `whereJsonDoesntContainKey`. These are your tools to find JSON objects with (or without) specific keys:

```php
$users = DB::table('users')
    ->whereJsonContainsKey('preferences->dietary_requirements') // Only those who have dietary requirements!
    ->get();

And if you're looking for the ones without:

$users = DB::table('users')
    ->whereJsonDoesntContainKey('preferences->dietary_requirements') // Dietary-free zone!
    ->get();
```

Last but not least, there's `whereJsonLength`. This method lets you query JSON arrays based on their length:

```php
$users = DB::table('users')
    ->whereJsonLength('options->languages', 0) // Those with zero languages, huh? Interesting!
    ->get();

And if you're looking for users with more than one language:

$users = DB::table('users')
    ->whereJsonLength('options->languages', '>', 1) // Polyglots unite!
    ->get();
```

Now that you know the secrets of JSON queries in Laravel, go forth and query your data with style and panache!

 Alrighty, let's dive into the world of Laravel query building, where we make databases dance to our SQL tunes!

**whereLike / orWhereLike / whereNotLike / orWhereNotLike**

The `whereLike` is like a digital Sherlock Holmes, helping you find names in your database that resemble "John" (case insensitively, by default). But if you need to find an exact match, just add `caseSensitive: true`.

```php
$users = DB::table('users')
    ->whereLike('name', '%John%', caseSensitive: false) // This will find John, john, JOHN...
    ->get();

// But if you want to find only John and not john or JOHN, use the case sensitive version
$users = DB::table('users')
    ->whereLike('name', '%John%', caseSensitive: true) // This will only find John
    ->get();
```

**whereIn / whereNotIn / orWhereIn / orWhereNotIn**

The `whereIn` and its antagonist `whereNotIn` are the perfect duo for checking if a column's value is part of an array or not. You can even pass a query object as the second argument to make your life easier!

```php
$users = DB::table('users')
    ->whereIn('id', [1, 2, 3]) // This will find users with ids 1, 2, or 3
    ->get();

// And if you want to find users whose id is NOT in the given array
$users = DB::table('users')
    ->whereNotIn('id', [1, 2, 3]) // This will find users with ids other than 1, 2, or 3
    ->get();
```

[!WARNING] If you're dealing with a massive array of integers, consider using `whereIntegerInRaw` or `whereIntegerNotInRaw` to save on memory usage.

**whereBetween / orWhereBetween**

The `whereBetween` method helps you find records where a column's value falls between two values. It's like playing a guessing game with your database!

```php
$users = DB::table('users')
    ->whereBetween('votes', [1, 100]) // This will find users with votes between 1 and 100 (inclusive)
    ->get();
```

**whereNull / whereNotNull / orWhereNull / orWhereNotNull**

The `whereNull` and `whereNotNull` methods are useful for finding records where a column is empty or not empty, respectively. Great for tracking down those pesky null values!

```php
$users = DB::table('users')
    ->whereNull('updated_at') // This will find users who have never been updated
    ->get();

// And if you want to find users who have already been updated
$users = DB::table('users')
    ->whereNotNull('updated_at') // This will find users who have been updated at least once
    ->get();
```

Now let's get time-traveling with the `whereDate`, `whereMonth`, `whereDay`, `whereYear`, and `whereTime` methods!

[...]

(Continue with the rest of the documentation, adjusting the style and adding humor as needed.)

 ### Party Time with Parentheses! 🥳

Ah, the thrill of logical grouping! It's like organizing a high school dance - you gotta keep the wallflowers and the party animals separated, but still in the same room. In Laravel queries, this is achieved by wrapping several "where" clauses in parentheses, just like you'd wrap your best moves to impress the prom queen! 🕺

But why the formal dance instruction? Well, my friend, it's all about preventing unwanted query behavior! You should always group `orWhere` calls in a fancy wrap, just like how you'd wrap a gift for that special someone. Here's how to do it:

```php
$danceFloor = DB::table('users')
    ->where('name', 'John Doe') // Calling Mr. John Doe to the dance floor! 🕺💃
    ->where(function (Builder $builder) {
        $builder->where('votes', '>', 100) // Those with more than 100 votes, please form a circle! 🌍
            ->orWhere('title', 'Admin'); // And all Admins, come join the party too! 🎉🎊
    })
    ->get(); // Time to hit the dance floor, folks! 💥
```

As you can see, feeding a function into the `where` method starts the dance - I mean, constraint group. This function will receive a query builder instance, which it can use to set the rules for our parenthesis party. The final result will be SQL that looks like a middle school disco:

```sql
select * from users where name = 'John Doe' and (votes > 100 or title = 'Admin')
```

> [!ATTENTION]
> Remember to always group `orWhere` calls when you're dancing with global scopes! You wouldn't want the DJ suddenly changing the music on you, right? 🎶💔

 ### The Cunning Art of 'Where' Wizardry 💫

Welcome, intrepid code warrior! Today we delve into the mystical world of **Advanced Where Clauses**. It's time to flex your SQL muscles and unleash your inner magic on the database realm. Prepare to astound your peers with your mastery of these ancient spells! 🔮

<a name="where-exists-clauses"></a>
#### The Enchanted 'Where Exists' Clause ✨

The **Where Exists** clause is a powerful enchantment that allows you to find records in one table based on the existence of related records in another table. It's like detecting a unicorn in your garden by sensing its magical footprints elsewhere! 🦄

Here's a bewitching example:

```php
// Find users who have at least one post with a title containing 'Laravel'
DB::table('users')
    ->whereExists(function ($query) {
        $query->select(DB::raw(1))
            ->from('posts')
            ->whereRaw('users.id = posts.user_id')
            ->where('title', 'like', '%Laravel%');
    });
```

In this incantation, we've cast a spell to find users that have at least one post with 'Laravel' in the title. Ain't no party like a Laravel party! 🎉

Remember, as with all spells, be cautious and precise to ensure your enchantments don't create a digital chaos! 🤓

Happy conjuring! 🧙‍♂️

 ### SubQuery Substitution for Laughs and Giggles! 🥳

Ready to pull a rabbit out of the SQL hat? Meet the magical `whereExists` method, your new best friend in Laravel's query arsenal. This enchanting sorcerer lets you weave "where exists" spells with a wave of your closure! 🎒✨

```php
$users = DB::table('users')
    ->whereExists(function (Builder $query) {
        // Transforms into: "I summon thee, Orders table, show me where users exist!" 🔮
        $query->select(DB::raw(1))
            ->from('orders')
            ->whereColumn('orders.user_id', 'users.id');
    })
    ->get();
```

Fancy yourself a more advanced magician? You can cast this spell using a query object instead:

```php
// "Behold, my humble assistant, the Orders table!" 🤖
$orders = DB::table('orders')
    ->select(DB::raw(1))
    ->whereColumn('orders.user_id', 'users.id');

// "Now, bring forth users who have been witnessed by the Orders table!" 🎭
$users = DB::table('users')
    ->whereExists($orders)
    ->get();
```

And ta-da! Both methods will result in this mesmerizing SQL incantation:

```sql
select * from users
where exists (
    select 1
    from orders
    where orders.user_id = users.id
)
```

Remember, with great power comes great responsibility—use your `whereExists` magic wisely! 🧙‍♂️✨

 ### Diving Deep into the Depths of Subqueries, Laravel Style! 🤘

Alright, buckle up, because we're about to dive headfirst into a world where databases and humor collide in beautiful chaos! 🎉

First off, let's talk about those times when you need to compare the results of a subquery to a given value. You know, like when you're trying to find all users who have the hottest membership of a certain type. To do this Laravel magic, just call upon the `where` method and pass it a closure with a value - here's how:

```php
// Import the User and Builder classes
use App\Models\User;
use Illuminate\Database\Query\Builder;

// Fetch all users rocking the latest membership of their desired type
$users = User::where(function (Builder $query) {
    // Start building our subquery
    $query->select('type')
        // Join with our 'membership' table, ensuring user_id matches
        ->from('membership')
        ->whereColumn('membership.user_id', 'users.id')
        // Sort by descending start date and limit to just the most recent one
        ->orderByDesc('membership.start_date')
        ->limit(1);
})->where('Pro')->get();
```

Next up, we've got subqueries that compare a column to the results of another subquery. This is when you want to find all income records where the amount is less than average - no biggie! 🥳

```php
// Import the Income and Builder classes
use App\Models\Income;
use Illuminate\Database\Query\Builder;

// Retrieve all income records with amounts lower than the average
$incomes = Income::where('amount', '<', function (Builder $query) {
    // Kick off a subquery to find the average amount from 'incomes' table
    $query->selectRaw('avg(i.amount)')->from('incomes as i');
})->get();
```

And there you have it! Subqueries, Laravel-style - because who said database queries had to be boring? 🤘🚀

 🤓 Attention all wordsmiths! 🤓

📣 **Full Text Where Clauses: The Query's Secret Weapon** 📣

👀 Warning, warning! Full text where clauses are only for the database connoisseurs among us - MariaDB, MySQL, and PostgreSQL enthusiasts, we're looking at you! 🌐💻🔍

If you've ever wanted to search through columns with a magical twist (you know, like Harry Potter's wand but for databases), then the `whereFullText` and `orWhereFullText` methods are your new best friends! These power-up your queries with full text "where" clauses for those lucky columns with full text indexes. 🏃‍♂️💾

Don't fret about writing the right SQL for each system, Laravel will take care of that! For instance, if you're using MariaDB or MySQL, get ready for some `MATCH AGAINST` action:

```php
$developers = DB::table('wizards') // 💡 Our magical database table
    ->whereFullText('bio', 'web developer') // 🔍 Searching for web devs
    ->get(); // 📦 Fetch the results
```

And that's just the beginning! If you're curious about vector similarity clauses, well... we'll save that spellbinding story for another time. 😉🔮✨

Stay tuned for more database magic in Laravel land! 🎩🔍🚀

 Alright, let's dive into the whimsical world of Vector Similarity Clauses! 🌈🎨

> 📝 Attention, all art aficionados!
> Vector similarity clauses are currently only supported on PostgreSQL connections using the `pgvector` extension. If you're unsure about creating those vector columns and indexes, fear not! Check out our [migration documentation](/docs/{{version}}/migrations#available-column-types) for a guided tour 🎦.

The `whereVectorSimilarTo` method plays the role of Mr. Matchmaker in our database, filtering results based on their cosine similarity to a given vector and serving them up in the order of love (or relevance). The `minSimilarity` threshold is like the pickiness level at a speed-dating event: values range from 0.0 (meh) to 1.0 ( soulmates only):

```php
$documents = DB::table('documents')
    ->whereVectorSimilarTo('embedding', $queryEmbedding, minSimilarity: 0.4)
    ->limit(10) // Keep it to a reasonable number, no need to start a stampede!
    ->get();
```

When you're feeling particularly wordy and provide a plain string as the vector argument, Laravel whips up some fancy embeddings using its very own [Laravel AI SDK](/docs/{{version}}/ai-sdk#embeddings) – it's like having a personal AI mixologist! 🤖🍹

```php
$documents = DB::table('documents')
    ->whereVectorSimilarTo('embedding', 'Best wineries in Napa Valley') // Wine and tech – what a combo!
    ->limit(10)
    ->get();
```

By default, `whereVectorSimilarTo` sorts results by similarity (from most to least matching). However, you can turn off this feature by passing `false` as the `order` argument:

```php
$documents = DB::table('documents')
    ->whereVectorSimilarTo('embedding', $queryEmbedding, minSimilarity: 0.4, order: false)
    ->orderBy('created_at', 'desc') // Sort by creation date instead, because who doesn't love a little nostalgia?
    ->limit(10)
    ->get();
```

If you're feeling particularly picky, you can use the `selectVectorDistance`, `whereVectorDistanceLessThan`, and `orderByVectorDistance` methods independently:

```php
$documents = DB::table('documents')
    ->select('*') // Get everything – we might need it later for a scrapbook!
    ->selectVectorDistance('embedding', $queryEmbedding, as: 'distance')
    ->whereVectorDistanceLessThan('embedding', $queryEmbedding, maxDistance: 0.3) // Only the ones who share at least 30% of similarity will make it!
    ->orderByVectorDistance('embedding', $queryEmbedding)
    ->limit(10)
    ->get();
```

Lastly, when using PostgreSQL, make sure to load the `pgvector` extension before creating those vector columns:

```php
Schema::ensureVectorExtensionExists(); // A quick check to make sure everyone's on the same page!
```

And there you have it – a brief, witty guide to Vector Similarity Clauses! Keep exploring and remember to always enjoy the journey! 🎉🎁🌟

 ### The Great Sorting Expedition 🏞️

Fasten your seatbelts, adventurers! It's time to embark on the exciting journey of **The Great Sorting Expedition**, where we harness the mighty powers of Laravel to tame our data jungle.

#### Order By 🔍

Let's kick things off with **Order By**. If you want your data to march in a particular order, this is your magical wand!

```php
$users = User::orderBy('name', 'asc')->get();
```

Now, everyone from Zorro to Adele will be lined up in alphabetical bliss. But remember, you can switch the `'asc'` (ascending) to `'desc'` (descending) if you prefer a more chaotic order!

#### Group By 📦

Ever wondered how many users have names starting with each letter? **Group By** is your answer. It's like having a super-powered sorter that categorizes data based on common attributes!

```php
$user_counts = User::groupBy('name:first', 'asc')->count();
```

Now, instead of an alphabet soup, you get a neat breakdown of user names.

#### Limit & Offset 🌟

Let's say you have a million users and you only want to see the first 100 or skip the first 50. That's where **Limit** (how many) and **Offset** (how many to skip) come into play!

```php
$users = User::orderBy('id', 'desc')->limit(100)->offset(50)->get();
```

With Limit & Offset, you can explore the vast ocean of data without drowning in it. 🌊

Happy data-taming! 🎉

 Alright, grab your virtual sombrero and let's dive into the fiesta of ordering! 🎵💃

#### <a name="orderby"></a>OrderBy

"Senorita OrderBy", it's the bossy, yet charming, dance move you use to sort your query results like a pro. Simply call this function on a builder and tell it which column you want to jive with (ascending or descending)! 🕺️💃

```php
$users = DB::table('users')
          ->orderBy('name', 'ASC') // Sort users by name in ascending order
          ->get();
```

#### <a name="orderyby"></a>OrderByDesc

This is "Senorita OrderBy Descendente" - the same dance move, but with a little more sass. It's like ordering your tacos with extra cheese and hot sauce; you get the idea! 🌮🔥

```php
$users = DB::table('users')
          ->orderByDesc('name') // Sort users by name in descending order
          ->get();
```

Now that you've mastered these moves, your data will never be a cha-cha mess again! 💃🎉

 Ah, the `orderBy` method! Your database's personal valet who sorts your results with impeccable manners. This fella lets you organize the chaos of a query like a well-groomed dinner party.

To get started, simply tell `orderBy` which column to focus on for the sorting festivities. It accepts the first argument graciously, but remember, it's all about the column name, not the columnist!

```php
$users = DB::table('users')
    ->orderBy('name', 'descendingly-posh'); // Yes, we're being posh here.
```

Want to sort by multiple columns? No problemo! Just invite more guests to the dance floor:

```php
$users = DB::table('users')
    ->orderBy('name', 'descendingly-posh')
    ->orderBy('email', 'ascendingly-elegant') // Because posh people always send their RSVPs first.
    ->get();
```

By default, `orderBy` serves its drinks in an ascending order—but who wants to be served salad before the entrée? To request a descending sort, just make your intentions clear:

```php
$users = DB::table('users')
    ->orderByDesc('verified_at') // Because verified users should always have the last dance.
    ->get();
```

Last but not least, `orderBy` can even sort values within a JSON column! It's like having a personal concierge that knows your entire address book:

```php
$corporations = DB::table('corporations')
    ->where('country', 'US')
    ->orderBy('location->state') // Just ask for the state and let `orderBy` do the rest.
    ->get();
```

And remember, you're always the host! So feel free to mix, match, and manipulate the `orderBy` method to suit your query needs—the results will be elegantly served to you with a smile.

 Ahoy there! Let's dive into the enchanting world of Laravel's time-traveling methods, `latest` and `oldest`. These magical spells will transport your database results through the sands of time! By default, they'll whisk you off to the year of creation (thanks to the mystical `created_at` column). But if you're feeling adventurous, you can specify a different column to sort by:

```php
$user = DB::table('users')
    ->whereTimeTravelIsAllowed() // Just kidding! No such method, but it sure sounds cool!
    ->latest('time_of_first_left_click') // Use this instead!
    ->first();
```

Just remember, with great power comes a slight risk of encountering the odd Rowan Atkinson as you traverse the database. But fear not, for Laravel's got your back! 🔖🕰️🚀

 Ahoy there, intrepid Laraveler! Ever find yourself in a pickle, yearning for a bit of randomness in your query results? Fear not, because the `inRandomOrder` method is here to save the day! This magical technique can sort your results like a drunken sailor on a pirate ship, but don't worry - it won't lead you to the plank just yet.

```php
$randomUser = DB::table('users')
    ->inRandomOrder()
    ->first();
```

Just fire up that old query boat of yours, tack on our trusty `inRandomOrder()` function like a shiny new parrot, and voila! You've just fetched a random user - a veritable treasure chest of data!

But wait, there's more! If you happen to have already sorted your results with other methods, fear not. The `inRandomOrder()` method is a versatile seafarer that can set sail on any query. Just remember to keep the ship's orders in check - once this method's aboard, it takes over the helm and picks a random path for ya!

Happy sailing, matey! May your queries be swashbucklingly successful. 🤝🎉✨

 Ah, the `reorder` method! It's like a magical eraser for your database queries. When you've got your hands on too many "order by" clauses and need a fresh start, this is your guy! 🧼

Here's how to use it:

```php
$query = DB::table('users')->orderBy('name'); // You're off to a named order, my friend.

$unorderedUsers = $query->reorder()->get(); // Now your query is as unsorted as last year's New Year's resolutions.
```

Feeling a bit more specific? Want to remove all existing "order by" clauses and apply an entirely new order to the query? Well, you can do that too!

```php
$query = DB::table('users')->orderBy('name');

$usersOrderedByEmail = $query->reorder('email', 'desc')->get(); // You've just sorted your users by email in descending order (aka reverse alphabetical, if you want to get technical).
```

For those who like their queries with a touch of convenience, the `reorderDesc` method is here to help:

```php
$query = DB::table('users')->orderBy('name');

$usersOrderedByEmail = $query->reorderDesc('email')->get(); // This will sort your users by email in descending order (again, reverse alphabetical). Trust us, it's easier than counting sheep.
```

Now go forth and conquer your databases with the `reorder` method! Just remember, there's no 'I' in team, but there is an 'I' in 'unordered'. So let's keep things organized, shall we? 🤓

 Ahoy, shipmates! Buckle up as we dive into Laravel's enchanting world of data organization, aka "Grouping." 🌈🐳

<a name="groupby-having"></a>

#### Group By & Having

*Aye, matey! Ever wondered how to sort your data like a boss? You've come to the right place.*

Group By helps you group records based on a common column value. Imagine having a bunch of pirates (records) and wanting to know how many of each type there are on the ship (grouping by 'pirate_type').

    $pirates = DB::table('pirates')
                ->select('pirate_type', DB::raw('count(*) as total'))
                ->groupBy('pirate_type')
                ->get();

Having is like the bouncer at the tavern, ensuring only records that meet specific conditions can enter the group. If you want to know which pirates have more than 5 gold coins, you'd use Having:

    $wealthy_pirates = DB::table('pirates')
                ->select('pirate_name', 'gold_coins')
                ->whereRaw('gold_coins > 5')
                ->groupBy('pirate_name')
                ->havingRaw('count(*) > 1')
                ->get();

Remember, Group By will return multiple records if they share the same group value. Having will filter those results based on your specified conditions. Arrrr, now we're talking like a proper pirate! 🏴‍☠️💼✨

Hope this made your Laravel data wrangling journey more swashbuckling than a pirate's treasure hunt! 💰🎉🌴

 Alright, buckle up, Laravel novices! Let's dive into the thrilling world of `groupBy` and `having`, the dynamic duo that'll make your query results more organized than a librarian's bookshelf. 📚

Think of `groupBy` as the bouncer at a club, only instead of keeping out the riffraff, it groups your database results by a specific column. Here's how you might call on its services:

```php
$vip_users = DB::table('partygoers')
    ->groupBy('account_id') // This is our bouncer, sorting the crowd by account ID
    ->having('account_id', '>', 100) // And this is the velvet rope, only letting accounts with more than 100 people through
    ->get();
```

Now, if you need to filter the results within a certain range, break out the champagne, because it's time to use `havingBetween`. It's like a bouncer that only lets in guests with the right amount of sparkle:

```php
$high_rolling_customers = DB::table('guests_at_the_bar')
    ->selectRaw('count(id) as number_of_drinks, customer_id') // Counts the number of drinks for each customer
    ->groupBy('customer_id') // Groups the results by customer ID
    ->havingBetween('number_of_drinks', [5, 15]) // Only includes customers who have between 5 and 15 drinks
    ->get();
```

In case you're feeling fancy, you can even group by multiple columns at once. Imagine a world where `groupBy` is the ultimate party planner:

```php
$star_studded_guest_list = DB::table('celebrity_network')
    ->groupBy('first_name', 'status') // Groups by first name and status, because why not?
    ->having('account_id', '>', 100) // And, of course, only includes A-listers with more than 100 followers
    ->get();
```

Lastly, if you want to construct advanced `having` statements, take a peek at the [havingRaw](#raw-methods) method. It's like learning SQL inside a nightclub; it might get a little crazy, but it'll be worth it in the end! 🎉🕺️

 Ahoy there, aspiring code wranglers! Let's have a jolly good time as we navigate the enchanting world of Laravel queries, shall we? Prepare to meet two of our most charming companions: `limit` and `offset`. They're just the helpers you need when you've got a rambunctious collection of results that require some wrangling!

Imagine you're at a grand ball (think Jane Austen), and you've been tasked with keeping track of the guests. Our old friends `limit` and `offset` are your invitations to control the crowd size or skip past a rowdy group of attendees if you must:

```php
$guests = DB::table('partygoers')
    ->skip(10) // Oh, dear! Skip ten boisterous souls.
    ->take(5)  // Alrighty then, let's only deal with five, shall we?
    ->get();
```

Here's the lowdown on these dashing gentlemen:
- `limit($number)` - Tells Laravel to return no more than a specified number of results (`$number`) from your query.
- `offset($number)` - Commands Laravel to skip over a given number of results before it starts fetching records for you.

Remember, a balanced mix of `limit` and `offset` can help you maintain order at even the rowdiest of soirees!

Now, who's ready to waltz their way through some elegant querying? I hope this tutorial has made your Laravel adventure as delightful as a moonlit stroll on an English countryside. Happy coding, dear friends! 🕺️☀️✨

 Alrighty, let's dive into the world of Conditional Clauses where your SQL queries can be as flexible as a rubber duck in a bathtub!

Imagine you're at a party and you want to serve drinks only to those who are over 21. Sounds familiar? Well, it's kind of like that with Laravel queries too! You can use the `when` method to apply certain conditions based on another one. For instance, you might want to throw in a `where` clause only if a specific input value shows up on your incoming HTTP request. Here's how you do it:

```php
$vip_status = $request->input('VIP'); // Note the capitalization, these party people love their status!

$guests = DB::table('party_goers')
    ->when($vip_status !== false, function (Builder $query) use ($vip_status) {
        $query->where('vip', $vip_status); // Don't forget your velvet rope!
    })
    ->get();
```

The `when` method is like a bouncer at the door, only letting through the party when the first argument is true. If it's false, well... you know what happens then! So in this case, our bouncer will only check for VIP status if it's specified in the request.

Now, let's say you want to set a default ordering for your query, like sorting everyone by name unless someone specifically asks for sorting by votes. You can do this with another closure that gets executed when the first one is false:

```php
$sortByVotes = $request->boolean('sort_by_votes'); // The party-goers are getting restless, hurry up!

$guests = DB::table('party_goers')
    ->when($sortByVotes, function (Builder $query) use ($sortByVotes) {
        $query->orderBy('votes', $sortByVotes ? 'asc' : 'desc'); // We don't want to be accused of vote rigging!
    }, function (Builder $query) {
        $query->orderBy('name'); // Time for the name game!
    })
    ->get();
```

So there you have it, Conditional Clauses in Laravel - making your queries as flexible as a rubber duck at a party!

 Ahoy there, Captains! Welcome to Laravel's Query Builder, the swashbuckling hero of your database adventures! We've got a nifty tool called `insert`, and it's just as dashing as it sounds. This bad boy lets you shove data into your database tables like a boss.

```php
DB::table('users')->insert([
    'email' => 'kayla@example.com', // Kayla's joining the crew!
    'votes' => 0                   // She's starting with zero scurvy points
]);
```

But what if you wanted to invite multiple mates at once? Fear not, for our `insert` method's an accommodating lad! Just pass it an array of arrays, each representing a new crew member.

```php
DB::table('users')->insert([
    ['email' => 'picard@example.com', 'votes' => 0], // Picard's on board!
    ['email' => 'janeway@example.com', 'votes' => 0]  // And so is Janeway!
]);
```

Now, what happens if you try to insert a record that already exists? Well, matey, we've got the `insertOrIgnore` for just such situations. This pirate will let you walk the plank (i.e., bypass errors) when adding records! But beware, it may also ignore other types of errors depending on your database engine.

```php
DB::table('users')->insertOrIgnore([
    ['id' => 1, 'email' => 'sisko@example.com'], // Sisko's here to stay
    ['id' => 2, 'email' => 'archer@example.com'] // Archer's also joining in
]);
```

Lastly, if you're feeling fancy and want to insert data using a subquery, the `insertUsing` method's your new best mate. Just pass it an array of column names, followed by a subquery that returns the data you wanna use!

```php
DB::table('pruned_users')->insertUsing([
    'id', 'name', 'email', 'email_verified_at'
], DB::table('users')->select( // This here's our subquery
    'id', 'name', 'email', 'email_verified_at'
)->where('updated_at', '<=', now()->minus(months: 1)));
```

And voila! Now that you know the ins and outs of inserting data with Laravel, your database will be as full of life as a bustling port! Arrrr!

 Ahoy there, Laravel swashbucklers! Sail with me through the shimmering seas of auto-incrementing IDs! 🌴

#### Auto-Inflating Nick-of-Time IDs (aka "AINTIDs")

If your table is decked out with an AINTID, hoist the `insertGetId` Jolly Roger to insert a record and then swab the poop deck for that precious ID:

```php
$shiver_me_timbers = DB::table('swashbucklers')->insertGetId(
    ['email' => 'captaingrog@example.com', 'treasure_chests' => 0]
);
```

> [!PIRATE WARNING]
> When setting sail with PostgreSQL, the `insertGetId` method expects the AINTID column to be named "id". If ye wish to fetch the ID from a different "sequence", ye may pass the column name as the second parameter to the `insertGetId` method like so:

```php
$shiver_me_timbers = DB::table('swashbucklers')->insertGetId(
    ['email' => 'captaingrog@example.com', 'treasure_chests' => 0],
    'id_column_name' // Replace with your booty column name
);
```

Remember, mateys: a good pirate knows where their treasure chests are hidden! And that's exactly what the `insertGetId` method does for ya. Arr matey, happy coding! 🏴‍☠️😉

 Alrighty, let's dive into the world of Laravel Upserts! Imagine you're at a wild party, and you need to keep track of who's dancing with whom (and how much they're paying for it). The `upsert` method is your VIP bouncer, checking if a new couple has joined or an old one is switching partners.

First, gather your dance card data:

```php
$danceCard = [
    ['partner1' => 'Oakland', 'partner2' => 'San Diego', 'entryFee' => 99],
    ['partner1' => 'Chicago', 'partner2' => 'New York', 'entryFee' => 150]
];
```

Next, tell the bouncer who's allowed in and where to update if they're already dancing:

```php
DB::table('dance_floor')->upsert(
    $danceCard, // Our dance card data
    ['partner1', 'partner2'], // The unique combination of partners
    ['entryFee'] // If a couple is already dancing, update their entry fee
);
```

Now, let's talk about the party rules. In this case, all databases except SQL Server require the unique partner combo to have a "primary" or "unique" index (kinda like a dance-off pass). If you're using MariaDB or MySQL, they'll use the table's "primary" and "unique" indexes as their VIP list.

So, keep your cards close, and your database clean, because the `upsert` method is always ready to party! 💃🕺💥🎉

 ## Database Dynamo-Doodling! 🎉🎨

Beyond just painting fresh data into our digital canvas, the Laravel query builder can also jazz up existing records using the `update` method. The `update` method, much like its energetic sibling `insert`, gobbles up an array of column-value pairs, serving as a handy roadmap for where to splash those vibrant updates! After the dance, it'll return the number of rows that had their happy hour 🍻. You can keep your masterpieces tethered with `where` clauses:

```php
$rows_refreshed = DB::table('paintings')
    ->where('id', '1') // This one's the muse, y'all!
    ->update(['votes' => 1]); // One more vote for van Gogh's ear!
```

<a name="update-or-insert"></a>
**Update or Insert? More like Doodle or Rembrandt! 🎨🔥**

Sometimes, you might find yourself in a pickle where a record already exists and you don't want to paint over it (we artists are precious about our work, after all). No sweat! The `updateOrInsert` method is the perfect palette knife for this situation. It allows you to dab an update if the record already exists or create a new one if it doesn't.

```php
$result = DB::table('masterpieces')
    ->where('title', 'The Starry Night')
    ->updateOrInsert(['title' => 'The Starry Night'], ['votes' => 2]); // A little more starry than before!
```

Remember, the first array sets the column-value pairs for the update (if it exists), while the second array adds any new columns you want to create for a fresh piece. Now go forth and create, knowing that Laravel is your faithful sidekick in this artistic journey! 🎨🌍🎉

 Alrighty then! Let's dive into the wild world of database updates and inserts, where unicorns frolic amongst rows of data and rainbows of information connect. Sometimes you'll want to perform a magic trick on an existing record or create a new one if there ain't no matchy-matchy record in sight. Enter the `updateOrInsert` method - it's like the swiss army knife of database sorcery!

The `updateOrInsert` method is as flexible as a circus contortionist, accepting two arguments: first, an array of conditions to find the record (like looking for a needle in a haystack, but with more style), and second, an array of column-value pairs indicating which columns to update.

```php
DB::table('users')
    ->updateOrInsert(
        ['email' => 'john@example.com', 'name' => 'John'], // Whoa, we found the John we were lookin' for!
        ['votes' => '2']                                  // And now we're giving him two more votes!]
    );
```

But what if you want to customize your attribute updates based on whether a matching record exists or not? Fear not, because the `updateOrInsert` method lets you provide a closure (like a magic wand) for just such occasions:

```php
DB::table('users')->updateOrInsert(
    ['user_id' => $user_id], // Found the user with this ID!
    fn ($exists) => $exists ? [ // If the record exists, update it like so...
        'name' => $data['name'],
        'email' => $data['email'],
    ] : [ // ... but if not, let's create a new one and make it marketable!
        'name' => $data['name'],
        'email' => $data['email'],
        'marketable' => true,
    ],
);
```

And there you have it! `updateOrInsert` - the perfect blend of power, flexibility, and good ol' fashioned fun. Happy coding, database cowboys and cowgirls!

 Alright, let's dive into the whimsical world of Laravel JSON column updates! 🎉🌈

### Jerking Around with JSON Columns 🤘🎮

When you wanna tickle that JSON column, remember to use the `->` dance moves to touch up the right key in the object. This jolly jaunt is supported on MariaDB 10.3+, MySQL 5.7+, and PostgreSQL 9.5+:

```php
$affected = DB::table('users')
    ->where('id', 1)
    ->update(['options->enabled' => true]);
```

💥BOOM!💥 That's right, you just updated that user's options with a single line of code, and all it took was a little dance and some syntax! Isn't Laravel just the life of the party? 🎉🕺️

<a name="increment-and-decrement"></a>
And now for the grand finale: Increment and Decrement! 🎈🏆

### Sprucing Up Numbers (Increment/Decrement)

Who said number crunching had to be dull? With Laravel's Increment and Decrement, you can make those numbers dance their way up or down. Here's how:

```php
// Increase user's score by 10 points
$affected = DB::table('users')
    ->where('id', 1)
    ->increment('score', 10);

// Decrease user's level by 1
$affected = DB::table('users')
    ->where('id', 1)
    ->decrement('level');
```

Now go ahead and show off your number-juggling skills! With Laravel, you can turn data manipulation into a lively dance party. 🥳🎉

 Alright, let's get this party started! Laravel's query builder isn't just a dance floor, it's a disco with some serious number crunching moves. Want to up the 'votes' on your coolest user? No problemo! Here's how:

```php
DB::table('users')->increment('votes'); // Gives one vote, like giving your friend a high five.

Or if you want to be extra generous...

DB::table('users')->increment('votes', 5); // Gives five votes, like throwing a dance-off party for them!
```

But wait, there's more! What if you find out your user needs a little love? No worries, just decrement their 'votes':

```php
DB::table('users')->decrement('votes'); // Takes one vote away, like being voted off the dance floor.

Or if you think they had it coming...

DB::table('users')->decrement('votes', 5); // Takes five votes away, like a dramatic dance-off elimination!
```

Need to update more than one column? No sweat! Just use the `increment` method with multiple columns:

```php
DB::table('users')->increment('votes', 1, ['name' => 'John']); // Gives John a vote and updates his name, like announcing him as the new dance floor king.
```

And if you're feeling extra spicy, why not increment or decrement multiple columns at once? You can do that with `incrementEach` and `decrementEach`:

```php
DB::table('users')->incrementEach([
    'votes' => 5, // Gives five votes to everyone. Dance-off time!
    'balance' => 100, // Gives everyone a hundred bucks, like throwing cash in the air.
]);
```

So, go ahead and make your users dance with joy (or fear) by adjusting their votes and balance like a boss DJ!

 Alrighty, let's dive into the wild world of data deletion in Laravel Land! The `delete()` method, found in the mighty Query Builder, is your magic wand for erasing records from the ol' database table. It even tells you how many rows were zapped like a gang of digital ghosts!

But wait, you don't want to obliterate everyone indiscriminately, right? That'd be like setting fire to the entire bakery when all you wanted was a single stale scone. So, Laravel lets you add "where" clauses before the `delete()` call:

```php
// Oops! Deleted everyone from Users table.
$deleted = DB::table('users')->delete();

// Now we're talking! Only those users with over 100 votes are toast.
$deleted = DB::table('users')->where('votes', '>', 100)->delete();
```

And just in case you've got yourself a row that's causing a commotion, there's something called Pessimistic Locking (don't ask me how they came up with that name). It's like when your younger sibling grabs the last piece of pizza and you put it back on the table and yell, "MINE!". Pessimistic Locking helps prevent this by ensuring that only one process can modify a specific row at once. So, no more digital sibling rivalry in our database!

 ## The Query Builder's Pessimistic Party Tricks! 🎉🎊

Hey there, party people! In the realm of database shenanigans, we got ourselves a funky feature called "Pessimistic Locking". It's like the bouncer at the hottest club in town, making sure nobody messes with your data while you're dancing!

To throw down a statement with a cool "shared lock", just call our buddy `sharedLock` method. This dude prevents the hotshots from modifying the selected rows until the party (transaction) is officially over:

```php
DB::table('users')
    ->where('votes', '>', 100)
    ->sharedLock()
    ->get();
```

Or, if you want to get a little more exclusive, use the `lockForUpdate` method. This lockdown ensures that the selected records can't be tampered with or even entered by another shared lock-wielding hooligan:

```php
DB::table('users')
    ->where('votes', '>', 100)
    ->lockForUpdate()
    ->get();
```

Now, it's not mandatory, but the party gods recommend wrapping these pessimistic locks within a [transaction](/docs/{{version}}/database#database-transactions). That way, your data stays intact in the database until the whole shindig is over. If things go south and someone throws a monkey wrench (failure), the transaction will rollback any changes and release the locks automatically:

```php
DB::transaction(function () {
    $sender = DB::table('users')
        ->lockForUpdate()
        ->find(1);

    $receiver = DB::table('users')
        ->lockForUpdate()
        ->find(2);

    if ($sender->balance < 100) {
        throw new RuntimeException('Balance too low, bro.');
    }

    DB::table('users')
        ->where('id', $sender->id)
        ->update([
            'balance' => $sender->balance - 100
        ]);

    DB::table('users')
        ->where('id', $receiver->id)
        ->update([
            'balance' => $receiver->balance + 100
        ]);
});
```

And there you have it, folks! Pessimistic Locking - the perfect way to keep your data safe while still having a blast at the database party! 🥳🎉💃🕺

 ## Query Builder's Lazy Party Animals 🐾💃️

If you find yourself repeating query logic like a broken record throughout your app, it's time to throw a party and invite some reusable objects! The query builder's `tap` and `pipe` methods are the life of the party, helping you extract common sense from your queries just like a cool bouncer.

Imagine you have two different dance moves on the dance floor:

```php
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;

$destination = $_GET['destination'];

DB::table('pet_parties')
    ->when($destination, function (Builder $query, string $destination) {
        $query->where('destination', $destination);
    })
    ->orderByDesc('cost')
    ->get();

// ...

$destination = $_GET['destination'];

DB::table('pet_parties')
    ->when($destination, function (Builder $query, string $destination) {
        $query->where('destination', $destination);
    })
    ->where('host', $_SESSION['username'])
    ->orderBy('destination')
    ->get();
```

Time to round up the common destination filtering and make it the life of the party:

```php
<?php

namespace App\Scopes;

use Illuminate\Database\Query\Builder;

class DestinationDancer
{
    public function __construct(
        private ?string $destination,
    ) {
        //
    }

    public function dance(Builder $query): void
    {
        $query->when($this->destination, function (Builder $query) {
            $query->where('destination', $this->destination);
        });
    }
}
```

Now, use the query builder's `tap` method to invite the DestinationDancer to join the party:

```php
use App\Scopes\DestinationDancer;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;

DB::table('pet_parties')
    ->when($destination, function (Builder $query, string $destination) { // [tl! remove]
        $query->where('destination', $destination); // [tl! remove]
    }) // [tl! remove]
    ->tap(new DestinationDancer($destination)) // [tl! add]
    ->orderByDesc('cost')
    ->get();

// ...

DB::table('pet_parties')
    ->when($destination, function (Builder $query, string $destination) { // [tl! remove]
        $query->where('destination', $destination); // [tl! remove]
    }) // [tl! remove]
    ->tap(new DestinationDancer($destination)) // [tl! add]
    ->where('host', $_SESSION['username'])
    ->orderBy('destination')
    ->get();
```

 Alright, buckle up, because we're about to dive into the magical world of Query Pipes! 🚀🔮

First off, let's talk about the `tap` method. Think of it as your friendly neighborhood bartender who pours you a drink but never gets to keep it – always pouring and moving on. On the other hand, the `pipe` method is like that quirky mixologist who not only serves you a drink but also tells you a joke or two (and returns the bottle for future use!).

Now, imagine you have this fabulous query object, dripping with shared pagination logic that's used throughout your app like a well-dressed gentleman at every party (yes, we mean the '80s). Unlike our DestinationFilter pal, who spices up the query with some hot conditions, our Paginate buddy takes things to the next level by actually executing the query and returning a stylish paginator instance – think of him as the life of the party.

```php
<?php

namespace App\Scopes;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Query\Builder;

class Paginate
{
    public function __construct(
        private string $sortBy = 'timestamp',
        private string $sortDirection = 'desc',
        private int $perPage = 25,
    ) {
        //
    }

    public function __invoke(Builder $query): LengthAwarePaginator
    {
        return $query->orderBy($this->sortBy, $this->sortDirection)
            ->paginate($this->perPage, pageName: 'p');
    }
}
```

With the query builder's `pipe` method, you can now rope in this fancy object to apply your shared pagination logic:

```php
$flights = DB::table('flights')
    ->tap(new DestinationFilter($destination)) // Party starter
    ->pipe(new Paginate); // The life of the party, serving you a well-crafted paginator! 🥳✨
```

And if you ever find yourself in a pickle with debugging (who doesn't?!), feel free to give this article a read: [Debugging](#debugging) 🕵️‍♂️🔎

 Alright, budding Laravel coders! Let's dive into the world of debugging - a realm where our trusty helper functions `dd`, `dump`, and their raw counterparts `ddRawSql` and `dumpRawSql`, are your best pals.

First off, we have the `dd` method, which is like a superhero of the coding world, displaying all the juicy debug info and then saying "that's all folks" before bailing on your request. It's perfect for those moments when you want to take a closer look at what's going down in your queries without letting the rest of the code know you're peeking!

Next up, we have `dump`, our slightly more considerate friend who shares all the deets but lets the party continue on. You can rely on this method when you want to keep tabs on what's happening but don't want to cause a scene (or a script halt).

Now let's talk about the raw versions of these guys: `ddRawSql` and `dumpRawSql`. These are like the no-nonsense cousins that always get straight to the point. They dump the SQL with all those fancy parameter bindings filled in neatly, making it easier for you to understand what's happening under the hood.

Here's a quick example of them all in action:

```php
// Superhero time!
DB::table('users')->where('votes', '>', 100)->dd();

// The more diplomatic method
DB::table('users')->where('votes', '>', 100)->dump();

// No-nonsense cousins to the rescue
DB::table('users')->where('votes', '>', 100)->dumpRawSql();
DB::table('users')->where('votes', '>', 100)->ddRawSql();
```

Remember, these functions are your allies in the quest for a bug-free Laravel adventure! Use them wisely and watch as your queries become less of a mystery and more of a solved puzzle. Happy debugging! 🎉🎯💪️