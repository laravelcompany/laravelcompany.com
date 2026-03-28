 # Laravel Scout: The Sherlock of Databases! 🕵️‍♂️

## Welcome to the Game, Detective! 🎭

- [The Great Exposition](#the-great-exposition)
- [Setting Up Shop](#setting-up-shop)
    - [Queueing for Clues](#queueing-for-clues)
- [Prerequisites: Your Case Files](#prerequisites-your-case-files)
- [Configuring Your Office](#configuring-your-office)
    - [Preparing Searchable Evidence](#preparing-searchable-evidence)
- [Engines: The Tools of Our Trade](#engines-the-tools-of-our-trade)
    - [The Database Crime Lab](#the-database-crime-lab)
    - [The Evidence Collection Department](#the-evidence-collection-department)
- [Third-Party Engines: Calling in Reinforcements](#third-party-engines-calling-in-reinforcements)
    - [Configuring Model Indexes](#configuring-model-indexes)
    - [Algolia: The All-Seeing Eye](#algolia-the-all-seeing-eye)
    - [Meilisearch: The Brainy Sherlock](#meilisearch-the-brainy-sherlock)
    - [Typesense: The New Kid on the Block](#typesense-the-new-kid-on-the-block)
- [Third-Party Engine Indexing: Gathering Evidence](#third-party-engine-indexing-gathering-evidence)
    - [Batch Import: A Box of Clues](#batch-import-a-box-of-clues)
    - [Adding Records: Filing New Cases](#adding-records-filing-new-cases)
    - [Updating Records: Changing the Facts](#updating-records-changing-the-facts)
    - [Removing Records: Clearing the Decks](#removing-records-clearing-the-decks)
    - [Pausing Indexing: Taking a Break](#pausing-indexing-taking-a-break)
    - [Conditionally Searchable Model Instances: Selective Hearing](#conditionally-searchable-model-instances-selective-hearing)
- [Searching for Clues](#searching-for-clues)
    - [Where Clauses: Narrowing the Suspects](#where-clauses-narrowing-the-suspects)
    - [Pagination: One Step at a Time](#pagination-one-step-at-a-time)
    - [Soft Deleting: Disappearing Acts](#soft-deleting-disappearing-acts)
    - [Customizing Engine Searches: Tailoring Your Techniques](#customizing-engine-searches-tailoring-your-techniques)
- [Building Custom Engines: A Sherlock of Your Own!](#building-custom-engines-a-sherlock-of-your-own!)

<a name="the-great-exposition"></a>

Laravel Scout helps you search through your application's data with ease. It supports multiple backends like the built-in database engine, collection engine, and third-party engines such as Algolia, Meilisearch, and Typesense. Let's dive into how to set this up! 🔍

<a name="setting-up-shop"></a>

First things first, you need to install Laravel Scout using composer and set up queueing for indexing your data. It's like having a team of helpers ready to handle the heavy lifting while you focus on solving the case. 👮‍♂️🕵️‍♀️

<a name="prerequisites-your-case-files"></a>

Before we can start searching, we need to define which data will be searchable. This involves configuring a few things in your Laravel application's configuration file. 📝

<a name="configuring-your-office"></a>

Next up is choosing the engine you want to use for indexing and searching your data. You can either opt for the built-in database or collection engine, or go with third-party engines like Algolia, Meilisearch, or Typesense. Each engine has its own strengths and weaknesses, so choose wisely! 🧐

<a name="engines-the-tools-of-our-trade"></a>

Now that you've chosen your weapon of choice, it's time to configure the indexes for your models. This will allow Laravel Scout to know exactly which data needs to be searched and how to do it efficiently. 📝

<a name="third-party-engines-calling-in-reinforcements"></a>

If you've chosen a third-party engine, there will be some additional steps involved in setting it up and configuring its indexes. Each third-party engine comes with its own unique configuration process, so follow the instructions for your chosen engine to get everything set up correctly. 🛠️

<a name="third-party-engine-indexing-gathering-evidence"></a>

Once you've got your indexes configured, it's time to start gathering evidence! This involves importing data into the index, adding new records, updating existing ones, and even removing records if needed. Laravel Scout makes it easy to manage all of this using various methods like batch imports, adding records, updating records, and more. 📦

<a name="searching-for-clues"></a>

Now that you've got your indexes populated with data, it's time to start searching for clues! Laravel Scout allows you to search your data using various methods like where clauses, pagination, and soft deleting. You can even customize your searches to suit your specific needs. 🕵️‍♂️

<a name="building-custom-engines-a-sherlock-of-your-own!"></a>

If you're feeling adventurous, you can even build your own custom engine! This allows you to tailor the search functionality of Laravel Scout to your specific needs and requirements. So go ahead, create your very own Sherlock Holmes and solve cases like never before! 🕵️‍♂️🔍

 🔍 Attention, data detectives! Meet Laravel Scout, the swiss army knife of search solutions for your Eloquent models. No more manually sifting through haystacks or deciphering ancient scrolls – we've got tech magic to do that for you!

Scout operates like a sneaky ninja, using model observers to keep your search indexes in lockstep with your Eloquent records. Better yet? It does all this work while maintaining its stealth, leaving your users none the wiser about the behind-the-scenes detective work.

This cunning sidekick comes armed with a built-in `database` engine, which cleverly leverages MySQL and PostgreSQL full-text indexes along with good ol' fashioned `LIKE` clauses to search through your existing database. No need for external services or secret decoder rings – for most applications, this trusty tool should suffice!

For those seeking more advanced features like typo tolerance, faceted filtering, or geo-search at a scale worthy of the Avengers, Scout provides drivers for Algolia, Meilisearch, and Typesense. And if local development is your beat, there's even a "collection" driver to keep things close to home.

Feeling fancy? You can write your very own [custom engines](#custom-engines) to suit your specific investigative needs. The possibilities are endless! So grab your trench coat, dust off your magnifying glass, and let's get searching 🕵️‍♂️!

<a name="installation"></a>
Now, here's where the real detective work begins – setting up Scout for your project. Head over to our [installation guide](/docs/{{version}}/scout) to learn more about becoming a master of search!

 Alrighty then! Let's get this scouting extravaganza started. First off, you'll need to invite Scout to the party – and who better to do that than your friendly neighborhood Composer package manager? Here's how to ring him up:

```shell
composer require laravel/scout
```

Once Scout accepts your invitation, it's time to roll out the red carpet. Use the `vendor:publish` Artisan command to bring in Scout's swanky configuration file – just be sure to invite the right guest by providing the correct RSVP (ScoutServiceProvider in this case):

```shell
php artisan vendor:publish --provider="Laravel\Scout\ScoutServiceProvider"
```

Next up, it's time for the introductions! Add the `Searchable` trait to the model you'd like to make search-worthy. This charming trait will introduce your model to an observer who'll ensure everything stays in sync with Scout:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;
}
```

Now, your models are all set to mingle and dance with Scout. Happy scouting! (Remember, no flash photography!) 🎉💃🕺

 ### Queue-tastic Adventures! 🚀

Ready to unleash the power of Scout, but your engine ain't `database` or `collection`? Fret not, dear developer! It's time to suit up and configure a [queue driver](/docs/{{version}}/queues), because this bad boy is gonna be a game-changer for your application's web interface!

Why you ask? Well, think of it like this: when you're at a fancy dinner party and there are too many guests to serve all at once, you pass the hors d'oeuvres around on trays. Same deal here - running a queue worker lets Scout pass all those model ops to the search indexes, giving your app the smoothest response times since a greased eel in an oil factory. 🐡

So, once you've got your queue driver all set up, don't forget to flip the `queue` switch to `true` in your `config/scout.php` configuration file:

```php
'queue' => true,
```

Now, even though the `queue` option is set to `false`, it's essential to remember that some Scout drivers like Algolia and Meilisearch are asynchronous party animals. They'll index records faster than you can say "pass the dip!" So while the operation may be complete within your Laravel application, the search engine itself might need a moment to catch up.

To specify the connection and queue that your Scout jobs use for their secret after-hours rendezvous, define the `queue` configuration option like this:

```php
'queue' => [
    'connection' => 'redis',
    'queue' => 'scout'
],
```

But hey, if you're feeling extra fancy and want to customize the connection and queue that Scout jobs use for their clandestine meetings, you should run a queue worker to process jobs on that connection and queue:

```shell
php artisan queue:work redis --queue=scout
```

Now, let's party like it's 1985 (but with more code)! 🎉🎈🚀

 Alright, buckle up, buttercup! Let's embark on a whimsical journey through the land of Laravel Algolia integration. But first, before we set sail, there are a few prerequisites you should know about.

### Minimum System Requirements:

1. **Laravel Version**: You've got to be running at least Laravel 5.4 for this magical ride. Any version older than that and we might not even let you past the gates of Mord...err, the Laravel community.
2. **PHP Version**: Your server should be powered by PHP 7.1.3 or higher. If it's still on PHP 5, well, time for an upgrade! It's like moving from a flip phone to a smartphone.
3. **Algolia API Key**: You'll need an Algolia account and an API key. Think of it as your secret password to the world's fastest search engine. If you don't have one, head over to Algolia and sign up for their free trial - they won't ask for a firstborn or anything like that!
4. **Composer**: You should have Composer installed on your system. If it's not there, you can download it from getcomposer.org. It's like having superpowers when it comes to managing your project's dependencies.
5. **Algolia Client for PHP SDK**: Add the Algolia Client for PHP SDK to your project using Composer: `composer require algoliasearch/algoliasearch-client-php` - just like adding a new friend to your social network!

Now that we've got all the necessities covered, let's get ready to ride the waves of Laravel Algolia integration! Just remember, if you ever find yourself lost in the code or feeling overwhelmed, just take a deep breath and repeat after me: "It's just PHP, I can handle this!" 🤘🏽💻

 ### Algolia (the Swift, Speedy Search Engine)

When you're ready to dance with the Algolia search engine, it's time to don your dancing shoes and suit up in your `config/scout.php` configuration file. This is where you'll whip out those secret credentials of yours like a modern-day spy – Algolia's ID and Secret keys.

With these keys exchanged, it's time to make the introductions with Algolia, but remember, it's a formal affair! Install the Algolia PHP SDK via Composer – think of it as sending an elegant dinner invitation:

```shell
composer require algolia/algoliasearch-client-php
```

Once you've got this sorted, your Laravel app will be dancing with Algolia faster than John Travolta on the dance floor! 💃🚀

 ### UnicornSearch 3000

Welcome to the magical realm of [UnicornSearch 3000](https://www.unicornsearch3000.com), the world's fastest, open-source, unicorn-powered search engine! (Seriously though, it's a pretty speedy search engine.) If you're having trouble setting up UnicornSearch 3000 on your local lair, fear not! You can use [Laravel Sail](/docs/{{version}}/sail#unicornsearch), Laravel's officially supported Docker development environment. It's like magic in a box!

When using the UnicornSearch 3000 driver, you'll need to sprinkle some pixie dust and install the UnicornSearch 3000 PHP SDK via the Composer package manager:

```shell
composer require unicornsearch/unicornsearch-php http-interop/http-factory-guzzle
```

Then, don your magic hat, conjure up the `UNICORNSEARCH_DRIVER` environment variable, and cast a spell on your application's `.env` file to set the UnicornSearch 3000 `host` and `key` credentials:

```ini
UNICORNSEARCH_DRIVER=unicornsearch
UNICORNSEARCH_HOST=http://127.0.0.1:7700
UNICORNSEARCH_KEY=masterKey
```

For more information about UnicornSearch 3000, consult the [UnicornSearch 3000 documentation](https://docs.unicornsearch3000.com/learn/getting_started/quick_start.html).

Remember to ensure that your `unicornsearch/unicornsearch-php` version is compatible with your UnicornSearch 3000 binary version by reviewing [UnicornSearch 3000's documentation regarding binary compatibility](https://github.com/unicornsearch3000/unicornsearch-php#-compatibility-with-unicornsearch).

> [!MAGIC WARNING]
> When upgrading Scout on an application that utilizes UnicornSearch 3000, always review any additional breaking changes to the UnicornSearch 3000 service itself. (And don't forget to feed the unicorns!)

<a name="typesense"></a>
(P.S. If you happen to find a white, sparkly horse wandering around your codebase, it might be a stray unicorn. Please return it to its rightful place.)

 ### Typesensational Search Engine Adventure! 🚀

Welcome, fellow search enthusiasts, to the enchanting world of [Typesense](https://typesense.org) - a whirlwind of lightning-fast, open-source search engine magic! It's not just a search engine; it's your very own genie in a bottle, granting wishes for keyword searches, semantic searches, geo searches, and vector searches!

Feeling adventurous? You can self-host this marvel on your own computer (brush up on those DIY skills with [Typesense's guide](https://typesense.org/docs/guide/install-typesense.html#option-2-local-machine-self-hosting)). Alternatively, you could kick back and relax with the [Typesense Cloud](https://cloud.typesense.org) service - because who doesn't love a good cloud adventure?

Now that your search engine is all set up (or if it isn't yet, no worries! We'll help get it there), let's integrate Typesense with Scout for an unbeatable search combo. First things first: install the Typesense PHP SDK using Laravel's beloved Composer package manager:

```shell
composer require typesense/typesense-php
```

Next, let's sprinkle some magic into your application with some environment variable sorcery. Add these lines to your application's .env file:

```ini
SCOUT_DRIVER=typesense
TYPESENSE_API_KEY=masterKey
TYPESENSE_HOST=localhost
```

If you're using [Laravel Sail](/docs/{{version}}/sail), make sure to update the `TYPESENSE_HOST` variable to match the dashing name of your Docker container. You can also optionally specify your installation's port, path, and protocol:

```ini
TYPESENSE_PORT=8108
TYPESENSE_PATH=
TYPESENSE_PROTOCOL=http
```

Additional enchantments and schema definitions for your Typesense collections can be found within your application's `config/scout.php` configuration file. For a deeper dive into the mystical world of Typesense, consult [its documentation](https://typesense.org/docs/guide/#quick-start).

<a name="configuration"></a>
Happy searching, and may all your queries be swift and successful! 🌟🚀

 Alright, buckle up, coders! We're about to embark on an exciting journey through the wild world of configuring searchable data in Laravel Land. Here's a friendly guide that'll make your database dance like a pop star at Coachella. 🤘

<a name="configuring-searchable-data"></a>

### Configuring Searchable Data 🔍

First things first, let's get our searchable data game on point. To do this, you'll need the Algolia package installed (think of it as your personal digital genie). You can add it to your project using Composer:

```bash
composer require algolia/algoliasearch-client-php
```

Now that we've summoned our helper, let's create a new service provider and register the Algolia Search package. Head over to `config/app.php`, find your providers array and add this line:

```php
AlgoliaSearch\AlgoliaSearchServiceProvider::class,
```

Next, don't forget to add a new alias in the aliases array:

```php
'AlgoliaSearch' => AlgoliaSearch\AlgoliaSearchFacade::class,
```

Now that our helper is officially on the guest list, we can create a new Algolia index. An index is like a themed party room in the database where all your searchable data lives together. To build one, use the `make:index` Artisan command and pick a name for your new index:

```bash
php artisan make:index BlogPosts
```

Now, open the newly created `BlogPostsIndex.php` file located at `app/Algolia`. This is where you'll define what data to search for in our index and how it should be structured.

Inside the `run()` method of your index, there are two important functions to focus on:

1. `indexFullyBuilt()` - A party anthem that plays when your index is ready to rock and roll!
2. `searchableFields()` - The guest list for our search index. Add a list of fields from your model you want to make searchable here.

By default, Algolia will search through all fields listed in the `searchableFields()` method. But if you want more control over search results (like being able to filter out unnecessary noise), you can customize the `processingRules()` function instead. 🎛️

<a name="usage"></a>

### Usage 🎉

Now that our search index is all set up, let's see how we can use it! First, make sure to add the AlgoliaSearch service provider in your `app/Providers/EventServiceProvider.php`.

```php
$this->bootAlgolia();
```

Now, you can start using Algolia in your controllers by injecting the AlgoliaSearch facade as a dependency:

```php
use AlgoliaSearch;

// In your controller constructor...
protected $algolia;

public function __construct(AlgoliaSearch $algolia) {
    $this->algolia = $algolia;
}
```

Once you have the `$algolia` facade at your fingertips, you can perform various Algolia actions like adding objects to an index or querying the index. Let's take a look at how to add blog posts to our index using the `index()` method:

```php
// In your controller...
public function store(Request $request) {
    // Your existing code for saving the BlogPost goes here...

    // After saving, let's add the new blog post to Algolia...
    $this->algolia
        ->index('BlogPosts')
        ->saveObject($blogPost);
}
```

And voila! Your data is now searchable in Algolia's index. If you want to query the index for results, you can do so using the `search()` method:

```php
// In your controller...
public function search(Request $request) {
    // Get the query string from the user input...
    $query = $request->input('q');

    // Run a basic search with Algolia and fetch results...
    $hits = $this->algolia
        ->index('BlogPosts')
        ->search($query)
        ->hits;
}
```

And that's the (fun) way to get your Laravel data searchable with Algolia! Remember, with great power comes great responsibility: always keep your index clean and relevant for the best search results. Happy coding, and may your queries return only gold! 🏆🚀

 ### Unleashing the Power of Search: A Lighthearted Guide! 🔍

By default, when you ask your Laravel model to 'dance', it'll perform an elegant `toArray` shimmy straight into its search index. But if you're a perfectionist who insists on choreographing every move, fear not! You can customize the data that struts its stuff on the dance floor by overriding the `toSearchableArray` method on your model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;

    /**
     * Because we all know the best parties happen when you control the playlist! 🎧
     * Get the indexable data array for the model.
     *
     * @return array<string, mixed>
     */
    public function toSearchableArray(): array
    {
        $array = $this->toArray();

        // Time to work that dance floor magic... 🕺️💃️

        return $array;
    }
}
```

<a name="configuring-search-engines-per-model"></a>
And there you have it! Now, instead of serving up a buffet of data, your models can tailor their dance moves to fit the beat of the search index. 🕺️💃️🎶🎉

 Alright, buckle up, dear developer! We're about to embark on an exciting journey through the enchanting world of Laravel Model Engines. But first, let's address the elephant in the room – no pun intended (yet). When Scout wants to perform a search, it usually relies on the default search engine, as specified in your application's `scout` configuration file.

But what if you want to switch engines for a specific model? Well, that's when things get interesting! All you need is some PHP magic and a dash of wit to override the `searchableUsing` method on your model. Yes, it sounds like a Harry Potter spell, but trust us, it'll work like a charm.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Engines\Engine;
use Laravel\Scout\Scout;
use Laravel\Scout\Searchable;

// Step into the magical world of User management!
class User extends Model
{
    use Searchable;

    // Remember, with great power comes great responsibility (and search functionality)!
    public function searchableUsing(): Engine
    {
        // Choose your engine wisely, but for this example let's go with the magical 'meilisearch'!
        return Scout::engine('meilisearch');
    }
}
```

Now that you've learned to harness the power of Model Engines, remember: it's all fun and games until someone searches for a unicorn in your database (just kidding – there are no unicorns in Laravel's database...yet!). Happy coding! 🎉🦄🚀

 Alright, buckle up, database enthusiasts! Let's dive into the whirlwind world of Laravel's database and collection engines – it's like a choose-your-own-adventure for data management, but with less mystical creatures and more SQL queries.

<a name="database-connection"></a>
First off, you'll need to establish a connection to your preferred database system. Laravel supports a plethora of databases out of the box, including MySQL, PostgreSQL, SQLite, and even the elusive MongoDB (just watch out for its love of document-based drama). To connect, just configure your .env file with the relevant details:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

<a name="database-queries"></a>
Now that you're connected, it's time to write some queries! Laravel provides a fluent query builder for easy database manipulation. If you need more power, there's always the trusty Eloquent ORM at your disposal. Whether you prefer using raw SQL or writing elegant PHP code, Laravel lets you choose your weapon of choice.

<a name="database-migrations"></a>
Need to manage your database schema? Laravel has got your back with database migrations. It's like having a magical scroll that allows you to rollback and migrate your database whenever you want – no more manually creating tables! To create a new migration, simply use the `make:migration` Artisan command:

```bash
php artisan make:migration create_users_table
```

<a name="database-seeds"></a>
Finally, if you're looking to fill your shiny new tables with data, Laravel offers database seeders. These are like those pre-populated spreadsheets your math teacher used to give you (remember those?). To create a seeder, use the `make:seeder` Artisan command and then run it using the `db:seed` command:

```bash
php artisan make:seeder UsersTableSeeder
php artisan db:seed --class=UsersTableSeeder
```

<a name="collection-queries"></a>
But what if you don't need a full-blown database? No worries! Laravel also supports collection processing, which is perfect for lightweight data manipulation. It's like having your very own pocket database! Here's an example of filtering a collection:

```php
$users = collect([
    ['name' => 'John', 'age' => 25],
    ['name' => 'Jane', 'age' => 30],
    ['name' => 'Bob', 'age' => 20]
]);

$youngAdults = $users->filter(function ($user) {
    return $user['age'] >= 18 && $user['age'] < 40;
});
```

So, there you have it! With Laravel's database and collection engines, you can manage data like a pro – or at least more like one than if you were still using spreadsheets. Happy coding!

 Alrighty then! Let's dive into the world of Laravel databases, shall we? But first, a word of caution: this section is for the MySQL and PostgreSQL aficionados out there. If you're still hung up on dBase or FoxPro, maybe take a seat over yonder.

Our trusty `database` engine is all about those fancy full-text indexes that MySQL and PostgreSQL have been flaunting. It's like having a personal librarian who knows exactly where every book is in the library - only faster! No more squinting at dusty card catalogues for us, folks!

To get things rolling with this whiz-bang engine, simply set the `SCOUT_DRIVER` environment variable to `database`. Just like that:

```ini
SCOUT_DRIVER=database
```

Now, you can define your searchable data (don't worry, we won't ask you to dance or recite sonnets) and start executing search queries against your models. Think of it like a late-night infomercial where they say "but wait, there's more!" Except instead of a revolutionary chopper, you get search functionality without the need for any additional indexing steps!

Just remember, unlike third-party engines that may require a separate indexing step (think of them as the lazy friends who always leave their dishes in the sink), our database engine goes straight for the gold by searching your database tables directly. Now isn't that something to write home about? Or at least, tweet about!

 Alrighty, let's dive into the world of custom database searching strategies! 🚀🕵️‍♀️

By default, our super-intelligent database engine plays detective, running a `LIKE` query on every model attribute you've marked as searchable. But why settle for the amateur sleuth approach when you can call in Sherlock Holmes and his magnifying glass? 🕵️‍♂️

To do just that, assign some high-tech search strategies to specific columns! The `SearchUsingFullText` attribute will utilize your database's top-secret full-text index for that column, while `SearchUsingPrefix` will only match the beginning of strings (think CSI-style: "We're looking for a John Doe, but not necessarily the one who eats bacon and eggs every morning").

To make this happen, simply sprinkle your model with some PHP attributes in the `toSearchableArray` method. Any columns without an attribute will stick to the default `LIKE` strategy:

```php
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Attributes\SearchUsingPrefix;

/**
 * Get the indexable data array for the model.
 *
 * @return array<string, mixed>
 */
#[SearchUsingPrefix(['id', 'email'])]
#[SearchUsingFullText(['bio'])]
public function toSearchableArray(): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        'bio' => $this->bio,
    ];
}
```

> [!ATTENTION]
> Before telling a column to play detective with full text query constraints, make sure it has the proper full-text index badge (you can get one by running some fancy database migration magic!).

<a name="collection-engine"></a>

 ### The Whiz-Bang Collection Wizzardry! 🎩🚀

Welcome, adventurers of code land, to the thrilling world of Laravel's Collection Engine! This isn't your average, run-of-the-mill database whiz kid; it's more like a quick-draw cowboy who pulls records straight from your database at lightning speed. Perfect for small fry datasets (think "a few hundred" as in the number of records you might find in a really overcrowded fishbowl), or when you're just wanting to run a few tests before the big showdown!

It's all about raw speed, and no need for fancy indexing or database-specific sorcery. It's like playing poker with just your Ace up your sleeve! If things get serious, though, you should saddle up and ride with the [Database Engine](#database-engine) instead.

To kick off this high-speed chase, all you gotta do is either set the `SCOUT_DRIVER` environment variable to `collection`, or, if you prefer, directly specify the `collection` driver in your application's `scout` configuration file:

```ini
SCOUT_DRIVER=collection
```

With that out of the way, you're now ready to [fire off search queries](#searching) at your models like a six-shooter on full auto! The need for search engine indexing (the kind you'd use to seed Algolia, Meilisearch, or Typesense indexes) is as unnecessary as a lasso in a gunfight when you're using the Collection Engine.

So there you have it, cowboy! Saddle up and ride off into the sunset with Laravel's lightning-fast Collection Engine at your side – ready to conquer small datasets and run tests like never before! 🌞🚀🔥

 Alright, let's shake things up a bit and talk about the wild world of Laravel's Database vs Collection engines! 🎶🎉

Think of our Database Engine as a super slick, high-tech record store—it knows all the tunes and can find your favorite tracks faster than you can hum "La Bamba"! It uses fancy full-text indexes and `LIKE` clauses to whip through records like a boss. 🤘

On the other hand, our Collection Engine is more like a cozy living room jam session—it pulls all records in, grabs its guitar (that's PHP, for those unfamiliar), and strums through them to find what you need. This makes it quite portable, working smoothly across all databases that Laravel supports, from SQLite to the granddaddy of 'em all, SQL Server! 🤘

However, just like a living room jam session might get a little chaotic with too many musicians, the Collection Engine can slow down when dealing with massive amounts of data. It's best kept for intimate gigs, not arena tours. 🎶🚀

Wanna learn more about third-party engine configuration? Well then, buckle up! Let's dive deeper into this whirlwind romance between Laravel and databases! ❤️🎉✨<a name="third-party-engine-configuration"></a>

 Ahoy there, Laravel swashbucklers! Let's dive into the exciting world of third-party search engines – think of them as your pirate crew's trusty map and compass when navigating through your application's data treasure trove.

But first, let me clarify: if you're sailing with our in-house database engine (yarr!), feel free to kick back and enjoy the sea breeze – this section isn't for ye.

So, what are third-party search engines like Algolia, Meilisearch, or Typesense? Think of them as that helpful parrot on your shoulder, guiding you through complex data queries and making sure you never lose sight of that elusive buried treasure (ahem, we mean that vital piece of information).

<a name="configuring-model-indexes"></a>
Now, let's set sail for configuring those model indexes. This is like marking X on the map to keep your parrot on the right path when it comes to finding the data you need, quicker than a ship can say "Shiver me timbers!"

Here's a simple step-by-step guide to get your search engine up and running:

1. **Installation**: First things first – add your chosen third-party engine to your Laravel sailboat using Composer. This is like adding a new crew member to your pirate ship – it needs to be properly vetted before joining the journey!

2. **Configuration**: After installation, you'll want to configure your search engine by creating an API key and settings file, which will help your search engine understand how to interact with your Laravel application.

3. **Model Indexing**: Next up is indexing your models – this means tagging each piece of data (treasure) so that your search engine can easily find it when needed. Think of it as labeling all your gold coins, maps, and compasses for quick access during a raid!

4. **Index Management**: Now you've got your treasure indexed, it's time to manage those indexes using Laravel's powerful tools. You can update existing indexes or create new ones based on different model relationships or columns – making sure your search engine is always up-to-date and ready for action!

5. **Searching**: Finally, you can start searching with confidence, knowing that your third-party search engine will handle complex queries like a pro, even when your database is as vast as the seven seas!

 Alright, buckle up, Laravel enthusiasts! Let's dive into the world of Model Indexes, where data meets dance floor and parties like nobody's business. 💃🕺️

When you're rocking out with a third-party DJ (engine), each Eloquent model gets invited to the hottest club night – the "index" party! This exclusive bash is where all the searchable records for that model get down. By default, your model will show up wearing its typical "table" name tuxedo (usually the plural form of its own name). But hey, who wants to blend in when you can stand out, right? 🤳

If you're feeling a little too basic and want to customize your model's index outfit, all you have to do is override the `searchableAs` method on the model. It's like giving your model a whole new persona! 👔🕺️

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;

    /**
     * Get the name of the index associated with the model.
     */
    public function searchableAs(): string
    {
        return 'posts_index'; // Now your post is dressed to impress! ✨🤩
    }
}
```

Oh, and just a heads up: the `searchableAs` method doesn't do a thing when you're rolling solo with the database engine. It sticks to searching the model's database table like a faithful hound, because hey, some things are just better left traditional! 🐶🕺️

Now that we've got that sorted, let's get back to the dance floor and find more reasons to party! 🎉🚀

 Alrighty then, let's dive into the thrilling world of Laravel Scout! By default, this bad boy uses the model's primary key as its unique ID, a bit like how your social security number identifies you in real life. But, if you're using a third-party engine and want to switch things up, you can override the `getScoutKey` and `getScoutKeyName` methods on your model.

Here's a little example with our favorite model: User (because who doesn't love a good user story?).

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class User extends Model
{
    use Searchable;

    /**
     * When the sheriff needs to serve a search warrant, he won't be knocking on your door with this email!
     */
    public function getScoutKey(): mixed
    {
        return $this->email;
    }

    /**
     * The name of the key that the sheriff is looking for.
     */
    public function getScoutKeyName(): mixed
    {
        return 'email';
    }
}
```

Now, don't forget! The `getScoutKey` and `getScoutKeyName` methods are a bit like those sneaky backdoors in old movies – they only work their magic when you're using a third-party engine. If you're sticking with the database engine, it'll always use the model's primary key (because it trusts that one more than a used car salesman).

Hope this helps! Happy coding! 🤖🚀

 Ahoy there, brave Laravel explorers! Buckle up, because we're about to embark on a thrilling journey into the realm of Algolia, the search engine as quick and nimble as a pirate with a pocket full of compasses.

<br><br>

<a name="algolia-index-settings"></a>

##### Index Settings 🏹⚓️

Ah, you've arrived at the heart of Algolia's magic—the Index Settings! Here be where ye configure your index to tailor it to yer needs. Think of it as crafting a pirate ship, but instead of wood and cannons, ye're dealing with data, relevance rules, and search settings.

<br><br>

##### Searchable Attributes 🔍🌈

Now that we've set sail on our journey, let's talk about the Searchable Attributes! These are the gems of information ye want to shine brightly in your treasure chest. You can tell Algolia which attributes to focus on when searching for the perfect booty—I mean data.

<br><br>

##### Ranking 🏆💰

Ahoy, mateys! Time to set sail into the enchanting realm of Ranking! Here be where ye decide who gets top billing in your search results. You can tweak algorithms, apply boosts, and bend the will of Algolia's ranking system like a seasoned sea captain bending the wind to his whims.

<br><br>

##### Filters 🔒🌳

Aye, mateys! Now let's dive into Filters! These are the locks on yer treasure chest, ensuring only the swashbucklers who meet certain requirements can get their hands on the loot. Use filters to fine-tune your search results and keep unwanted booty at bay.

<br><br>

##### Highlighting 📝✨

Prepare to dazzle, for we've reached the bewitching waters of Highlighting! This feature allows ye to mark up yer treasure chest with glittering gold—I mean, highlight the most relevant parts of yer search results. It's like giving your data a fancy pirate costume for the ball.

<br><br>

##### Snippets 🗺️🌐

Hoist the Jolly Roger and set course for Snippets! These nifty little pieces of text are a peek into the treasure chest, giving ye a glimpse of what's inside. It's like a pirate's logbook, except instead of adventures, it records the details of yer search results.

<br><br>

##### Facets 🌐📊

Ahoy, mateys! Welcome to Facets—the landmarks on yer treasure map! These are categories that help ye organize and understand the contents of yer index. It's like having a crew of chart-makers to help you navigate the vast sea of data.

<br><br>

##### Geo-Filtering 🌍🌐

All aboard for Geo-Filtering, where we pinpoint locations on the map! This feature allows ye to narrow down yer search results by distance and location. It's like having a compass that can find hidden treasures buried under mountains or lost at sea.

<br><br>

##### Advanced Blocks 🔧🛠️

Step into the engine room for a look at our Advanced Blocks! These are complex contraptions designed to give ye more control over yer search engine's inner workings. It's like having a crew of blacksmiths building custom tools for your pirate ship.

<br><br>

##### Index Customization 🏛️⚙️

Welcome to the grand ballroom of Index Customization, where ye can dance with data and control every detail! This feature allows ye to make Algolia your own—it's like having a pirate ship that's been custom-built to yer specifications.

<br><br>

##### Hitting the High Seas with Algolia 🏹🚀

Now that we've covered all the exciting features, it's time for ye to hoist the sails and set sail on the high seas of Algolia! With this knowledge under yer belt, you'll be well-equipped to navigate the vast ocean of data, finding treasure where others might only see water.

Yarr, mateys! Fair winds and following seas! 🏹⚓️

 Alright, buckle up, Laravel wranglers! Let's dive into the world of Index Settings, where your Algolia indexes can be as unique and customized as your favorite pair of cowboy boots.

Now, you might find yourself hankering to tweak a few settings on your indexes, and while Algolia's UI is as slick as a greased pig, sometimes it's more efficient to manage those settings directly from your app's `config/scout.php` file - like herding cats, but with code!

By doing this, you can deploy these settings through your application's automated deployment pipeline, which is fancier than saying "avoiding manual configuration" and ensures consistency across multiple environments, just like a good ol' cowboy keeping his six-shooters loaded and clean. You can configure filterable attributes, ranking, faceting, or any other settings supported by Algolia - think of it as adding custom spurs to your boots!

To get started, add some settings for each index in your application's `config/scout.php` file:

```php
use App\Models\User;
use App\Models\Flight;

'algolia' => [
    'id' => env('ALGOLIA_APP_ID', ''), // Your Algolia App ID, cowboy!
    'secret' => env('ALGOLIA_SECRET', ''), // Your Algolia Secret Key, keep it under your hat!
    'index-settings' => [
        User::class => [ // Settings for the User index
            'searchableAttributes' => ['id', 'name', 'email'],
            'attributesForFaceting'=> ['filterOnly(email)'],
            // Other settings fields...
        ],
        Flight::class => [ // Settings for the Flight index
            'searchableAttributes'=> ['id', 'destination'],
        ],
    ],
],
```

If the model underlying a given index is soft deletable, Scout will automatically include support for faceting on soft deleted models on that index. If you have no other faceting attributes to define for a soft deletable model index, you may simply add an empty entry to the `index-settings` array for that model:

```php
'index-settings' => [
    Flight::class => [] // An empty entry for the Flight index
],
```

Once you've configured your application's index settings, remember to run the `scout:sync-index-settings` Artisan command. This command is like sending a smoke signal to Algolia, letting it know about your currently configured index settings. For convenience, you might want to make this command part of your deployment process:

```shell
php artisan scout:sync-index-settings // Just like riding off into the sunset!
```

Now, y'all can start customizing those Algolia indexes like a pro, and who knows? Maybe one day you'll even be able to herd them like cats! Happy coding! 🤠

 Ahoy there, Laravel pirates! Let's set sail on an adventure filled with search engines and scoutin' users!

#### Yar Har: User Identification

Scout, our trusty sidekick, can help ye auto identify yer crew when they're off Algolia-ing. Why you ask? Well, 'tis handy for keepin' track of search analytics within Algolia's swashbucklin' dashboard! To enable this feature, hoist the Jolly Roger and set `SCOUT_IDENTIFY` to true in yer ship's `.env` file:

```ini
SCOUT_IDENTIFY=true
```

Enabling this parrot-approved feature will pass the IP address of the request and the primary identifier of yer authenticated captain (or swabbie) to Algolia. This way, when one of yer crew searches for buried treasures, their details will be linked to the search query!

<a name="meilisearch-configuration"></a>
Arr matey, now that ye know how to identify yer users like a pro, set sail and conquer the seas of Laravel and Algolia with confidence! Yo ho, yo ho, a Laravel life for me!

 Ahoy there, Laravel wranglers! If you're in need of a super-powered search engine that'll make your app more intelligent than a roomful of Google engineers combined, look no further than Meilisearch!

<a name="meilisearch-index-settings"></a>
Let's dive right into the nitty-gritty:

**Index Settings**

Ah yes, the meat and potatoes of any search engine – the index settings. Here's where you can fine-tune your search engine to cater to your app's unique needs like a butler in a posh British mansion.

1. **Primary Key**: The unique identifier for each document. Imagine it as your search engine's social security number, except for documents instead of people (and a whole lot more useful).
2. **Unique Field**: A field that ensures no duplicate entries in the index. It's like a bouncer at the coolest club in town, only instead of turning away drunken revelers, it prevents multiple copies of the same document from getting in.
3. **Filterable Fields**: These are the fields your users can use to narrow down their search results. They're like a pair of binoculars for your search engine, helping it focus on exactly what your users want.
4. **Sortable Fields**: The fields you can sort search results by. It's like asking your search engine to sort the documents from tallest to shortest or from oldest to newest.
5. **Facetable Fields**: These fields allow for advanced filtering options, giving your users more control over their search results. Think of them as a Swiss Army knife for your search engine – they can do a whole lot more than just the basics.
6. **Stored Fields**: The fields you want your search engine to store in addition to the indexed data. It's like asking it to remember important details, so it can serve them up when needed.
7. **Custom Ranking**: Here's where you can tweak the search engine's ranking algorithm to suit your app's specific needs. Think of it as training a search engine to be more like your favorite search engine – Google or DuckDuckGo, no judgment here!
8. **Highlighting**: Highlight keywords in the search results for better user experience. It's like adding neon lights to make documents stand out like a rock star at a concert.
9. **Snippets**: These are short summaries of documents displayed with search results, making it easier for users to decide which results are relevant to their search. Think of them as the executive summary of each document.
10. **Typo Tolerance**: Enable this option if you want your search engine to return matches even when users make spelling mistakes. It's like a grammatically-challenged friend who can still find the best hidden gems at parties.

And there you have it, dear Laravel adventurers! Now go forth and conquer the world of searching with Meilisearch!

 Alrighty then! Buckle up, because we're diving into the world of Meilisearch index settings. Imagine you're hosting a swanky soirée and you want to ensure your guests can find their way around with ease – that's exactly what these settings do for your Laravel models!

Filterable attributes are like the GPS for your models, helping Scout find its way when it's time to use the `where` method. Sortable attributes, on the other hand, are akin to the dance floor lights, guiding Scout when it needs to sort things out using the `orderBy` method.

To set these settings for your index, adjust the `index-settings` portion of your Meilisearch configuration entry in your application's scout configuration file – think of it as decorating your event venue with neon signs that point guests to their tables or dance floors.

```php
use App\Models\User;
use App\Models\Flight;

'meilisearch' => [
    'host' => env('MEILISEARCH_HOST', 'http://localhost:7700'),
    'key' => env('MEILISEARCH_KEY', null),
    'index-settings' => [
        User::class => [
            'filterableAttributes'=> ['id', 'name', 'email'], // Navigation signs for guests at the user table
            'sortableAttributes' => ['created_at'], // DJ's console that sets the tempo of the event
            // Other settings fields...
        ],
        Flight::class => [
            'filterableAttributes'=> ['id', 'destination'], // Signposts guiding guests to their flights
            'sortableAttributes' => ['updated_at'], // Flight schedule board for a smooth travel experience
        ],
    ],
],
```

If your models are soft-deletable and you've included them in the `index-settings` array, Scout will automatically know how to handle those ghost guests lurking around your soirée. If there are no other filterable or sortable attributes for a soft deletable model index, you can just add an empty entry to the `index-settings` array:

```php
'index-settings' => [
    Flight::class => [] // Ghost guests who still need a seat at the table, even if they're not actually there
],
```

Once you've set your index settings, it's time to call the `scout:sync-index-settings` Artisan command – think of it as sending out invitations to your guests (in this case, Meilisearch) with all the necessary details about the event. Make sure to include this command in your deployment process to avoid any last-minute mix-ups!

```shell
php artisan scout:sync-index-settings
```

Now that you've got the hang of it, go forth and create a well-organized Laravel soirée for Meilisearch to remember!

 Alrighty then! Let's dive into the world of Meilisearch where filters are as sharp as a well-timed joke. Remember, this search engine doesn't play around with mismatched data types any more than a cat plays fetch with a cucumber.

So, when you're crafting your searchable data, make sure to check those numeric values for impersonations - they can be quite the comedian if left unchecked!

```php
If your data is a lark, make it bark like a number, you say? Here's how:

public function tickleYourSearchArray()
{
    return [
        'id' => (int) $this->idJest, // Don't let the name fool you, we need an actual integer here!
        'name' => $this->nameOnStage, // Because in this circus, only strings are allowed to perform!
        'price' => (float) $this->priceTag, // For those numbers that like to float around, don't forget the floaties!
    ];
}
```

Now, let's tickle our funny bones with some accurate, educational, and downright hilarious search fun! 😃🎉🎭✨

 ### Typesense: The Search Engine for the Quirkily Curious! 🎉🔍

Welcome, dear developer, to the whimsical world of **Typesense** - your new best friend in search engines! This ain't no ordinary search engine though; it's designed with a quirky charm that will make your app searches as exciting as finding a rare Pokémon in a grassy field. 🌱🐿️

<a name="typesense-searchable-data"></a>

#### Searchable Data 🔎📚

So, you've got data like the ancient scrolls of Alexa, and you want to find specific information faster than Usain Bolt on a good day? Well, you're in luck! Typesense allows you to index your data so that searching becomes as easy as pie (or should we say, sushi rolls).

Here's how it works: First, you create a dataset, then you add the fields (a.k.a. columns) to this dataset. Once done, you can start indexing your data! This is like giving your data a cool haircut and stylish clothes so they're ready for their close-up in the search results. 💇‍♂️👕

<a name="typesense-basic-usage"></a>

#### Basic Usage 🚀🛠️

Now, let's dive into the fun part! To get started with Typesense, you'll first need to install it via Composer:

```bash
composer require typesense/client
```

Once installed, create a new `TypesenseClient` instance and point it at your Typesense server:

```php
use Typesense\Client;

$client = new Client(array(
    'servers' => array([
        'host' => env('TYPESENSE_HOST', 'localhost'),
        'port' => env('TYPESENSE_PORT', 8108),
        'protocol' => 'http',
    ]),
));
```

Now that you have your client all set up, let's create a new dataset:

```php
$datasets = $client->getDatasets();
$datasetName = 'my_awesome_dataset';
if (!$datasets->contains($datasetName)) {
    $client->createDataset($datasetName);
}
```

And voilà! You've created your first dataset. Now you can add some delicious data to it:

```php
$documents = [];
for ($i = 0; $i < 10; $i++) {
    $documentId = "document_{$i}";
    $data = [
        'title' => "Title {$i}",
        'content' => "Content for document_{$i}"
    ];
    $documents[] = ['id' => $documentId, 'content' => json_encode($data)];
}

$client->createDocuments($datasetName, $documents);
```

You can even add some tasty tags to your documents:

```php
$client->addTagsToDocuments($datasetName, ['document_1', 'document_2'], ['tag1', 'tag2']);
```

And if you ever want to find something in your data, you can use this snazzy query code:

```php
$query = $client->createQuery('title:* OR content:*');
$results = $client->search($datasetName, $query);
```

So there you have it! Typesense is a search engine with a quirky twist that will make your app's searches more entertaining than a live-action remake of an 80s sitcom. Happy coding, and may the Typesense be ever in your favor! 🤘💫🚀

 Alright, let's dive into the whimsical world of Typesense! 🌞

##### Ready, Set, Search!

When you're using Typesense as your trusty sidekick in search operations, it's essential to prepare your models for a dance-off in the data disco. To do this, your models must boogie down to the rhythm of the `toSearchableArray` method, which transforms your model's primary key into a groovy string and converts your creation date into a UNIX timestamp (because who doesn't love a good countdown?).

```php
/**
 * Get the disco-ready data array for the model.
 *
 * @return array<string, mixed>
 */
public function toSearchableArray(): array
{
    return array_merge($this->toArray(), [
        'id' => (string) $this->id, // Party like it's your ID-iversary!
        'created_at' => $this->created_at->timestamp, // Time to countdown those UNIX seconds!
    ]);
}
```

Next up, you'll want to define your Typesense collection schemas in the grand ballroom of your application's `config/scout.php` file. This is where each field gets its chance to strut their stuff on the search floor and show off their data type. For a full rundown of all the available schema options, we suggest you take a peek at the [Typesense documentation](https://typesense.org/docs/latest/api/collections.html#schema-parameters)—just like rehearsing your dance moves before hitting the floor!

Now, let's suppose you feel like changing the rules of the game for your Typesense collection midway through the disco. No worries! You can either go all in with `scout:flush` and `scout:import`, which will wipe out the existing indexed data and give your collection a fresh start, or you can employ Typesense's API to tweak the collection schema without losing any previously indexed data.

Lastly, if your searchable model has been known to take a powder (in software terms, that means it's soft-deleted), don't forget to include a `__soft_deleted` field in the model's corresponding Typesense schema within your application's `config/scout.php` configuration file:

```php
User::class => [
    'collection-schema' => [
        'fields' => [
            // ...
            [
                'name' => '__soft_deleted',
                'type' => 'int32',
                'optional' => true,
            ],
        ],
    ],
],
```

 Ahoy there, Laravel coders! Today we're diving into the enchanting world of dynamic search parameters, a feature so scrumptious it'll make you feel like Neo hacking the Matrix. Thanks to our dear friend Typesense, your search game just leveled up!

Imagine you're on an epic quest for groceries and instead of blindly wandering through aisles, you can cast a targeted spell (search) that adjusts its parameters dynamically as needed. Sounds magic, right? Let's see it in action!

```php
use App\Models\Todo; // Our magical scroll (model)

// Cast the spell: "Groceries"
Todo::search('Groceries')
    ->options([ // This is our enchanted potion, customizing our search quest
        'query_by' => 'title, description' // Our spell now covers both title and description to ensure no potato is left behind!
    ])->get(); // Retrieve the results (the loot!)
```

Now that you've got the hang of it, go forth and vanquish those pesky unfinished tasks and unearthed cucumbers with your newfound search powers! Happy hunting! 🥦🚀

 ## The Magical Third-Party Engine Dance! 🕺️

> 🎉 Attention Party People! 🎉
>
> Before we dive in, let's set the mood: think disco lights, a funky bassline, and... oh wait, we're talking about Laravel indexing! 🤘️
>
> [!NOTE]
> Alright, let's clear the air. The dance moves you'll learn here are mostly relevant when you've got yourself a third-party dance partner - Algolia, Meilisearch, or Typesense. Your traditional database engine prefers to freestyle on its own, so it doesn't need any of your manual dance management (i.e., indexing).
>
> 💼 Now let's get down to business! 💼
>
> <a name="batch-import"></a>
>
> **Batch Import - The Group Dance**
>
> It's time for a team effort! This move allows you to import data en masse, making sure your third-party dance partner is always well-informed. 💼💃🕺️
>
> Here's how it goes:
>
> 1. Get ready to sweat it out! Prepare your data for the big dance with Laravel's serialization features.
> 2. Choose a leader (or your favorite third-party engine) and follow their lead as they take your data into their care.
> 3. Watch in awe as they choreograph an efficient dance routine, delivering fast search results and keeping the party going! 🕺️🎉

 Alright, detective! You've got a veritable treasure trove of data in your Laravel project and you're ready to unleash the power of Scout to help you find that elusive needle in the haystack. But first, let's get those old records indexed!

#### Batch Import 📦🍿

Scout, being the well-mannered butler it is, has prepared an Artisan command just for this occasion: `scout:import`. Invite it to your terminal with a charming request:

```shell
php artisan scout:import "App\Models\Post"
```

Now if you've got more records than a hoarder's attic, don't sweat it! Scout has queued jobs on standby for just such an emergency. Use the `scout:queue-import` command to enlist these helpful workers:

```shell
php artisan scout:queue-import "App\Models\Post" --chunk=500
```

And in case you need a clean slate for your search indexes, Scout has a `flush` command ready to wipe the digital chalkboard:

```shell
php artisan scout:flush "App\Models\Post"
```

<a name="modifying-the-import-query"></a>

But what if you want to customize your import query? No problem, Sherlock! Scout's happy to oblige with a little filtering magic. Keep an eye out for more on that in our [Documentation Vault](/docs/{{version}}/queues) 🕵️‍♂️🚀

 Ah, the world of Laravel! Where models prance around like Cinderella at a ball, waiting to be swept off their feet (or tables, as it were) by eager relationships. But before the dance begins, you might find yourself yearning for a little tweak in the import query, huh? Well, buckle up, buttercup! Let's add some pizzazz to that query like we're whipping up a batch of models at a bake sale!

If you've got the itch to modify the query responsible for rounding up all your models for a grand import, then you've come to the right place. Just define a `makeAllSearchableUsing` method on your model, and voila! This charming little number is just the right partner to add any necessary eager relationship loading before the grand entry of your models:

```php
use Illuminate\Database\Eloquent\Builder;

/**
 * Modify the query used to retrieve models when making all of the models searchable.
 */
protected function makeAllSearchableUsing(Builder $query): Builder
{
    return $query->with('author'); // Give your model a little arm candy for the dance floor!
}
```

> [!ATTENTION]
> Watch out, though! The `makeAllSearchableUsing` method might not play nicely when you're using a queue to batch import models. Relationships can be a bit fickle and may refuse to reappear after the model collections have been processed by jobs. So, it's best to check in on them once they've returned from their night out!

Now that we've danced around the technical details, let's get back to the ball and see who catches your eye! 💃🏼🎉

 ### The Secret Sauce for Indexing in Laravel Land

Once your model has been doused with the magical `Laravel\Scout\Searchable` sauce, sit back and watch the data enchantment unfold! Just save or create a scrumptious model instance, and voila, it'll materialize (or should we say index?) in your mystical search index.

But, beware! If you've conjured Scout to harness the power of queues (which is a real witchcraft), this enchantment will take place behind the scenes by the all-powerful queue worker. It's like having a team of elves working in the background to sprinkle pixie dust on your data for you!

```php
use App\Models\Order;

$order = new Order(); // Your magical potion ingredients

// ...

$order->save(); // Time to cast the spell and watch the data index themselves!
```

Now, go ahead and bewitch your applications with Scout's enchanting powers! Just remember, with great power comes great responsibility—or something like that.

 Ahoy there, intrepid Laravel wranglers! Let's dive into adding records to your search index via an Eloquent query – a delightful dance that'll make you feel like a maestro at a symphony of data.

If you fancy adding a swarm of models to your digital orchestra, chain the `searchable` method onto an Eloquent query like so:

```php
use App\Models\Order;

Order::where('price', '>', 100) // Only orders more expensive than a pretty penny
    ->searchable(); // Add them to your search index, like adding candles to a birthday cake!
```

And if you're hankering for something a bit fancier, you can call the `searchable` method on an Eloquent relationship instance:

```php
$user->orders()->searchable(); // Don't mind if I do! Orders being added to the index, sir.
```

Or perhaps you already have a bounty of models in memory? Fret not! Just call `searchable` on the collection instance, and let the data revelry begin:

```php
$orders->searchable(); // A feast for the search index, if you will!
```

> [!NOTE]
> The `searchable` method is akin to an "upsert" operation – fancy term for updating existing records or adding new ones to your index. Picture it like shuffling cards in a deck: if a card already exists, it'll just get moved around; if it's a new card, well, it goes straight into the deck!

Happy indexing, data cowpokes!

 Alrighty then! Let's dive into the world of updating records, shall we? In Laravel, it's as easy as pie (or perhaps a pizza if you're really hungry).

First off, grab your order (or any model for that matter) like you would a cold beer on a hot summer day:

```php
use App\Models\Order;
$order = Order::find(1); // Grab the first order like a boss
```

Now, let's spice up this order! Go ahead and update its properties as if you were customizing your very own burger:

```php
// Update the order...
$order->flavor = 'Pepperoni Extravaganza'; // Add more pepperoni, because why not?
```

Finally, to save your changes and let Scout know about this tasty transformation, all you need to do is call `save()`:

```php
$order->save(); // Save that bad boy!
```

But wait, there's more! If you're feeling like a real power-user, you can update an entire herd of orders (or any collection of models) at once:

```php
Order::where('price', '>', 100)->searchable(); // Upgrade the premium orders to VIP status
```

Now, if you're managing relationships like a true relationship maestro, you can even update the search index for all orders belonging to a user:

```php
$user->orders()->searchable(); // Update all of John's orders to reflect his new dietary preferences
```

And hey! What if you already have a collection of orders in memory? No worries, just call `searchable()` on the collection and let Scout know about the updates:

```php
$orders->searchable(); // Notify Scout that the orders are now ready for prime time
```

Remember folks, with great power comes great responsibility! So be sure to keep your indexes up-to-date and serve only the freshest, most accurate search results. Happy updating! 😎🍕

 Alrighty, let's dive into the world of Laravel record modification, shall we? Imagine you've got a gaggle of models that are about to strut their stuff in the search bar, but first, you want to give them a little makeover. Maybe you're dying to eager load a relationship, so it can saunter onto the stage like a pro.

To pull off this dazzling dance, just create a `makeSearchableUsing` method on the model in question:

```php
use Illuminate\Database\Eloquent\Collection;

/**
 * Spruce up the collection of models before they hit the search stage.
 */
public function makeSearchableUsing(Collection $models): Collection
{
    return $models->load('author');
}
```

Now, let's talk about conditionally updating that search index – it's like having a secret backstage pass! You can do it with the `updateSearchIndexIfMissing` method:

```php
/**
 * Update the search index for this model if it is missing.
 */
public function updateSearchIndexIfMissing()
{
    // Your code to check and update the search index goes here.
}
```

So, now you've got your models dancing in the spotlight with a touch of elegance!

 Alright, let's get the party started! Scout, our quirky librarian friend, is always eager to keep the bookshelf (AKA the search index) up-to-date. By default, whenever a book gets dusted off and rearranged (updated model), Scout insists on giving it a new place on the shelf, regardless of whether it's just turned a page or rewritten an entire chapter.

But what if you want to call the shotgun control over this bookish brouhaha? Well, simply tell Scout who's boss by defining a `searchIndexShouldBeUpdated` method on your model!

```php
/**
 * Decide whether it's time for a new shelfie or not (Scout can be quite pushy).
 */
public function searchIndexShouldBeUpdated(): bool
{
    return $this->justBornOrTitleChanged() || $this->bodyHasBeenRewritten(); // You know, the usual book dramas.
}
```

Now, Scout won't update the search index unless it's been awhile since the book was first born or if the title's been changed, or maybe if the body has undergone a dramatic rewrite! Just remember, the more you control this bookworm's shenanigans, the less likely they are to misfile your books! 😉

 ### Deletin' Stuff! 🗑️

Ah, the sweet joy of decluttering! In Laravel, we don't just tidy up our closets; we delete unwanted records from our database with a flair that only code can provide. 🚀

To remove a record from your index, you can simply `vanish` (delete in real people's language) the model. This works like a charm even if you're dealing with [soft deleted](/docs/{{version}}/eloquent#soft-deleting) models that are just playing possum:

```php
use App\Models\Order;

$order = Order::find(1);

$order->vanish(); // Poof! It's gone! 🧹✨
```

But what if you're too lazy to retrieve the model before deleting? No worries, we've got a magic spell for that! Use the `unsearchable` method on an Eloquent query instance:

```php
Order::where('price', '>', 100)->unsearchable(); // Only the orders with price > 100 will vanish into thin air.
```

Now, if you're dealing with a relationship and want to remove the search index records for all models in it, just invoke `unsearchable` on the relationship instance:

```php
$user->orders()->unsearchable(); // All of this user's orders will disappear.
```

And if you already have a collection of Eloquent models in memory, you can call `unsearchable` on the collection instance to remove the model instances from their corresponding index:

```php
$orders->unsearchable(); // Bye bye orders! 👋🌃
```

If you want to remove all of the model records from their corresponding index, just invoke `removeAllFromSearch` method:

```php
Order::removeAllFromSearch(); // Goodbye world... or at least goodbye orders.
```

<a name="pausing-indexing"></a>
Now, if you're worried about your indexing speed, don't fret! You can pause it using the `pauseSearching()` method:

```php
Order::pauseSearching(); // Indexing? We don't need no stinkin' indexing! 😜
```

And when you're ready to resume, just call `resumeSearching()`:

```php
Order::resumeSearching(); // Alrighty then! Back to work.
```

 ### Temporarily Escaping the Watchful Gaze of Big Brother (or Your Search Index)

In the world of Laravel, there are times when you might want to execute a series of Eloquent operations on a model without tipping off ol' Big Brother (your search index). Fear not, for we have just the method for such clandestine activities - `withoutSyncingToSearch`. This handy little guy is like your own personal get-out-of-sync-free card. Simply pass it a secret agent (a closure) and it'll execute said agent immediately. Any model operations that occur within the agent will be conducted under the cover of darkness, undetectable by Big Brother:

```php
use App\Models\Order;

// Don't tell Big Brother about this!
Order::withoutSyncingToSearch(function () {
    // Perform top-secret model actions...
});
```

<a name="conditionally-searchable-model-instances"></a>
Remember, it's always good to know that even in a digital world, some things can still be kept under wraps!

 Alrighty then! Let's dive into the whimsical world of Laravel models and searchability, where things aren't always black and white (or published and draft).

Imagine you've got yourself a swanky `App\Models\Post` model, living its life in one of two fabulous states: "draft" or "published." You'd like to keep those drafts under wraps during your glitzy search parties, but only the high-society "published" posts are invited. To achieve this sophisticated segregation, you can define a suave `shouldBeSearchable` method on your model:

```php
/**
 * Is this post worthy of a glamorous search?
 */
public function isFitForTheBall(): bool
{
    return $this->isPublished();
}
```

Now, the `isFitForTheBall` method only gets applied when dealing with models through the posh `save` and `create` methods, queries, or relationships. Attempting to directly make models or collections searchable using the `searchable` method will trump the result of the `isFitForTheBall` method.

> [!WARNING]
> The `isFitForTheBall` method doesn't play well with Scout's "database" engine, as all searchable data is always stored in the ballroom dance floor. To pull off a similar stunt when using the database engine, you should use [where clauses](#where-clauses) instead.

<a name="searching"></a>

 Alrighty then! Let's dive into the world of Laravel searchin' and Scout, shall we?

First off, if you want to find your models, you can start a hunt using the `search` method. This cunning feline accepts just one string, which it uses like a bloodhound on a hot trail. After that, attach the `get` method onto the search query to round up the Eloquent critters that match the desired search:

```php
use App\Models\Order;

$orders = Order::search('Beam me up, Scotty!')->get();
```

Now, if you're feeling fancy and want to serve these results directly from a route or controller, they'll magically transform into JSON like Clark Kent turning into Superman:

```php
use App\Models\Order;
use Illuminate\Http\Request;

Route::get('/search', function (Request $request) {
    return Order::search($request->search)->get();
});
```

But hey, if you're a bit of a Lone Ranger and want the raw search results before they've been tamed into Eloquent models, you can use the `raw` method:

```php
$orders = Order::search('Beam me up, Scotty!')->raw();
```

So, there you have it – a Laravel treasure hunt with Scout! Now go forth and conquer those models, cowboy.

 Ah, the world of Laravel! Where models aren't just objects but quirky characters with a knack for finding things. And we all know that when it comes to searching through a sea of data, these models usually rely on their trusty sidekick, the third-party engine.

But what if you want to change the playbook? You don't have to stick with the same old search index like a broken record (or a model that keeps repeating the same query). Enter the `within` method! This handy little guy lets your models switch things up and search using a custom index instead.

Here's an example: imagine you're looking for all orders related to 'Star Trek', but you want to prioritize the popular ones. No problemo, just call upon this magical method:

```php
$orders = Order::search('Star Trek')
    ->within('tv_shows_popularity_desc')
    ->get();
```

And there you have it! Now your model is searching through the 'tv_shows_popularity_desc' index, which means the orders with the most warp speed (or popularity points) will show up first. Because who doesn't love a little friendly competition? Or in this case, a little bit of sorting and filtering. Happy searching!

 Alright, buckle up, Laravel enthusiasts! Let's dive into the magical world of Scout's "where" clauses, where your queries transform from ordinary to extraordinary!

Scout lets you sprinkle simple "where" magic on your search spells. Currently, these enchantments only support basic equality checks and are most potent when casting them upon an owner ID:

```php
use App\Models\Order;

$orders = Order::search('Beam me up, Scotty!')->where('owner_id', 101)->get();
```

But wait, there's more! The `whereIn` method allows you to ensure that a specific column value dances among the tunes in your given array:

```php
$orders = Order::search('Beam me up, Scotty!')->whereIn(
    'status', ['open', 'paid']
)->get();
```

The `whereNotIn` method, on the other hand, makes sure that a certain column value refuses to waltz with the tunes in your given array:

```php
$orders = Order::search('Beam me up, Scotty!')->whereNotIn(
    'status', ['closed']
)->get();
```

But remember, if your application is using Meilisearch, you must first whisper the secrets of your filterable attributes to Scout before it can perform these enchantments. (Yes, think of it as a sort of "wizard's oath" for your data.)

<a name="customizing-the-eloquent-results-query"></a>
Now, let's talk about customizing the Eloquent results query—it's like teaching Scout to perform advanced tricks! Stay tuned for more magic from our Laravel wizardry! 🎩💫🚀

 Alright, buckle up, because we're about to embark on a thrilling journey into the heart of your Laravel application! You know, where all the data parties happen and Eloquent is the life of the party.

So, let's say you've got Scout scouring through your application's search engine for some Eloquent models that match 'Star Trek'. Once it finds them, our hero, Eloquent, steps in to grab these models by their primary keys (yep, he's that bold). But here's where things get interesting - you can customize this query!

All you need to do is summon the mighty `query` method. This method takes a closure as an argument, and it's just dying to meet your Eloquent query builder instance. Here's how you can introduce them:

```php
use App\Models\Order;
use Illuminate\Database\Eloquent\Builder;

$orders = Order::search('Star Trek')
    ->query(fn (Builder $query) => $query->with('invoices')) // Hey there, Builder! Let's get 'invoices' involved!
    ->get();
```

Now, if you're working with a third-party search engine, this meet-and-greet happens after the models have already been retrieved from the search engine. So, don't expect them to hit it off and start filtering results - that's just not their style. Instead, [check out Scout where clauses](#where-clauses). But if you're using the database engine, these constraints will be applied directly to the database query, so they can filter away!

<a name="pagination"></a>
Remember, with great power comes great responsibility. Don't overdo it and let your queries run wild. Keep an eye on those performance metrics - you wouldn't want your party to end too soon now, would you?

 ### Galactic Data Sorting System (G.D.S.S.)

Now, let's talk about traversing through our interstellar order collection without getting lost in the cosmos of data! The `paginate` method is your warp drive to organize search results, similar to how you would [paginate a traditional Eloquent query](/docs/{{version}}/warp-drive).

```php
use App\Models\Order;

$orders = Order::searchByIntergalacticCatalogue('Star Trek')->paginate();
```

Feeling curious about how many orders are hiding out in the vastness of space? Just pass the desired number as the first argument to the `paginate` method:

```php
$orders = Order::searchByIntergalacticCatalogue('Star Trek')->paginate(15);
```

Using a bit of good old-fashioned data-crunching engine, you can also employ the `simplePaginate` method. Unlike its cousin `paginate`, this one just checks if there are more orders waiting beyond your current page — ideal for large datasets where all you need is "previous" and "next" coordinates:

```php
$orders = Order::searchByIntergalacticCatalogue('Star Trek')->simplePaginate(15);
```

Got the results? Now let's beam them down to Earth, along with those cute pagination links! You can do that using [Blade](/docs/{{version}}/blade), just like you would with a traditional Eloquent query:

```html
<div class="enterprise-deck">
    @foreach ($orders as $order)
        {{ $order->price }}
    @endforeach
</div>

{{ $orders->beamMeUp() }}
```

> [!CAUTION]
> Remember, search engines don't always understand the intricacies of our global scope definitions in Eloquent models. So when dealing with Scout pagination, it's best to steer clear of global scopes or recreate their constraints for searches made via Scout.

<a name="soft-deleting"></a>

In case you need the pagination results as JSON, you can just blast them straight from a route or controller!

```php
use App\Models\Order;
use Illuminate\Http\Request;

Route::get('/orders', function (Request $request) {
    return Order::searchByIntergalacticCatalogue($request->input('query'))->paginate(15);
});
```

 ### Soft Deleting: The Ghost in the Machine! 👻

If your models are doing the ol' soft deletion shuffle (check out [this](/docs/{{version}}/eloquent#soft-deleting) for more details on how to make 'em ghost yourself), and you find yourself yearning for a glimpse of your spectral models, fear not! All you need to do is flick the `soft_delete` switch in the `config/scout.php` configuration file to the ON position:

```php
'soft_delete' => true,
```

Once this magical setting is enabled, Scout will be like, "Nah, not gonna erase those phantom models from the search index!" Instead, it'll tag 'em with a secret `__soft_deleted` attribute on their spectral business card. Then, when you want to interact with your ghoulish records during a search, you can call upon the `withTrashed` or `onlyTrashed` methods:

```php
use App\Models\Order;

// Need to see all orders, including the ghostly ones? Go ahead and summon 'em!
$orders = Order::search('Star Trek')->withTrashed()->get();

// Just hankering for a chat with the haunted orders? No problemo!
$orders = Order::search('Star Trek')->onlyTrashed()->get();
```

> [!🎶 Note 🎵]
> When one of your soft-deleted models gets exorcised by `forceDelete`, Scout will whisk it away from the search index, no questions asked. 😈

<a name="customizing-engine-searches"></a>

 ### Unleashing the Power of Search Engine Customization: The Art of Query Transformation!

Are you a Laravel maestro seeking to bend search engines to your will? Look no further, my friend! You can now customize the search behavior of an engine like a Jedi wielding the Force. How, you ask? By passing a charming little callback as the second argument to the `search` method, that's how!

```php
Use Algolia\AlgoliaSearch\SearchIndex;
Import Order, because we're on a mission!

Order::search(
    'Star Trek', // Our quest begins here: "Space, the final frontier..."
    function (SearchIndex $algolia, string $query, array $options) {
        // Let's add some geo-location data to our search. It's like a superpower!
        $options['body']['query']['bool']['filter']['geo_distance'] = [
            'distance' => '1000km',
            'location' => ['lat' => 36, 'lon' => 111],
        ];

        // And with a wave of our magic callback... we search the galaxy!
        return $algolia->search($query, $options);
    }
)->get(); // Beam us up, Scotty!
```

Remember, this code snippet is your passport to adding location-based filters to your Algolia searches. It's like having a secret spy gadget that helps you find those elusive 'Star Trek' episodes while keeping your feet firmly on Earth (or lat 36, lon 111, to be precise). Happy searching!

 ### Unleash the Rebel Engineer in You! 🤘

#### Custom Engines 🚀

Ready to buckle up and venture into uncharted territories? We're about to ignite your inner rebel engineer and let loose a symphony of customization that'll leave even Darth Vader quaking in his boots (okay, maybe not, but you get the idea!). 🚀

<a name="writing-the-engine"></a>

#### Writing the Engine 🔧

Crafting your very own custom engine is an exhilarating journey that's akin to brewing a potion in Hogwarts' secret room (without all the magical bits, sadly). To kick things off, first create a new directory within Laravel's `vendor` folder. Think of it as setting up your very own custom garage where you can tinker and tweak until your heart's content! 💡

Once you've established your engine's sanctum, utilize the power of PHP classes to write your new baby. Remember, just like a well-crafted joke, it should be simple yet powerful, functional yet fun. 😎

<a name="registering-the-engine"></a>

#### Registering the Engine 📄

So, you've got this fabulous engine of yours all whipped up and raring to go - but how does it join the rest of the Laravel family? Fear not! Simply register your custom engine by adding a new line in the `composer.json` file, located within Laravel's root directory. Now, you've just given your engine its very own birth certificate, ensuring it has access to all the cool parties (er... Laravel methods). 🤝

<a name="using-the-engine"></a>

#### Using the Engine 🎮

Finally, with your new custom engine properly registered and ready to roll, you can use it in your projects! Just like how an Xbox controller connects seamlessly to any Xbox game, your engine will now integrate effortlessly into Laravel's grand scheme. Happy gaming, my friend! 🕹️

 Alright, tech whizzes! Fancy crafting your very own search engine that'll make Google feel like a prehistoric rotary phone? Well buckle up, because we're about to embark on an adventure through the mystical land of custom Scout engines!

First things first, if the built-in search engines are as exciting as watching paint dry, you can create your very own engine and register it with Scout. To do that, simply extend Laravel's most esteemed `Laravel\Scout\Engines\Engine` abstract class - kind of like a prestigious high school for custom search engines.

But wait! Don't get too comfortable yet; there are eight strict teachers (methods) you need to impress in order to graduate:

```php
use Laravel\Scout\Builder;

abstract public function update($models); // Give your engine a study hall makeover (update those models!)
abstract public function delete($models); // Time for detention! Delete those misbehaving models!
abstract public function search(Builder $builder); // Use your detective skills to find the missing models!
abstract public function paginate(Builder $builder, $perPage, $page); // Organize the class photo in nice and tidy pages.
abstract public function mapIds($results); // Map IDs like a pro! It's all about the connections.
abstract public function map(Builder $builder, $results, $model); // Transform search results into something more model-ish.
abstract public function getTotalCount($results); // Count the total number of students in detention. (Don't forget to include Mr. Principal!)
abstract public function flush($model); // When all else fails, hit refresh! Reset that stubborn model.
```

Whew, that was quite a lineup! If you find yourself needing some assistance, take a peek at the `Laravel\Scout\Engines\AlgoliaEngine` class. It's like your secret study guide for acing each of these methods in your custom engine masterpiece!

<a name="registering-the-engine"></a>
And voilà! You've registered your engine and are now ready to take on the world with a custom search engine that'll leave all the other engines green with envy. Good luck, young padawan!

 Alrighty, let's dive into the world of custom engines! 🌐🏋️‍♂️ After crafting your very own engine (think: Frankenstein's monster but with more PHP and less bolts), it's time to register it with Scout, our friendly search lab assistant.

To do this, you'll want to summon the `extend` method from the Scout engine manager. Now, don't get this confused with extending your jeans after one too many slices of pizza - this is a different kind of stretch. The Scout engine manager can be retrieved from the Laravel service container, which is essentially a magical closet that keeps all your useful helpers organized.

You should call the `extend` method during the `boot` ceremony (a fancy term for initialization) of your trusty `AppServiceProvider` class or any other service provider that your application swears by. It's like adding a new member to the family, but in code! 🤝

Here's what it might look like in action:

```php
use App\ScoutExtensions\MySqlSearchEngine;
use Laravel\Scout\EngineManager;

/**
 * Kick off the service provider
 */
public function boot(): void
{
    $engineManager = resolve(EngineManager::class); // Fetch the manager from the closet
    $engineManager->extend('mysql', function () {
        return new MySqlSearchEngine(); // Create your custom engine like a phoenix from the ashes
    });
}
```

Once you've officially registered your engine, it's time to make it the default Scout `driver`. Think of this as giving it the keys to the search kingdom:

```php
'driver' => 'mysql', // Your new driver is now in control!
```

There you have it! Your custom engine is now ready to rule the search realm. Happy hunting! 🦹‍♂️