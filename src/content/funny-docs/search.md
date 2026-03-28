 # The Quest for Knowledge: A Laravel Adventure! 📚🚀

## Prologue: Welcome, My Friendly Programmer! 🤓

### Act I: The Enchanted Indexes 🔍
   - [Chapter 1.1: Full-Text Magicks](#introduction-full-text-search)
   - [Chapter 1.2: Semantic/Vector Sorcery](#introduction-semantic-vector-search)
   - [Chapter 1.3: Reranking the Oracle's Wisdom](#introduction-reranking)
   - [Chapter 1.4: The Scout's Search Engines](#introduction-scout-search-engines)

### Act II: Full-Text Magicks (The Spell of Searches) 🔍💫
    - [Scene 2.1: Casting Indexes Upon Thy Data](#adding-full-text-indexes)
    - [Scene 2.2: Wielding the Power of Textual Queries](#running-full-text-queries)

### Act III: Semantic/Vector Sorcery (The Art of Understanding) 🧙‍♂️🔍
    - [Scene 3.1: Embedding Thine Wisdom](#generating-embeddings)
    - [Scene 3.2: Storing and Indexing Vectors (Magic Pouches)](#storing-and-indexing-vectors)
    - [Scene 3.3: Querying by Similarity (The Magic Matchmaker)](#querying-by-similarity)

### Act IV: Reranking the Results (Polishing the Oracle's Speech) 🔄

### Act V: The Scout's Journey (The Quest for Better Searches) 🛡️📝
    - [Scene 5.1: Database Engine (The Core of the Quest)](#database-engine)
    - [Scene 5.2: Third-Party Engines (For Those Who Seek Adventure)](#third-party-engines)

### Epilogue: Combining Techniques (The Synergy of Searches) 🤝

<a name="introduction"></a>

[And so, our adventure begins! Let's journey together through the mystical lands of Laravel Search. May your queries be swift and your results bountiful!]

 ## Unleashing the Power of Queries: A Laravel Adventure!

Well, buckle up, buddy! Whether you're navigating a digital library in search of enlightening articles or venturing into an e-commerce jungle to unearth the perfect product, Laravel's got your back. And guess what? You might not even need a search party to find what you're looking for!

For most missions, the built-in database-fueled tools Laravel offers will be more than enough - external search services are like the special ops team that comes in when you need advanced features such as typo forgiveness, faceted filtering, or geolocation searches on an epic scale.

<a name="introduction-full-text-search"></a>
Let's dive right into...

## Full-Text Search: The Quest for Knowledge

In the heart of Laravel lies a powerful magic spell known as Full-Text Search (FTS). FTS allows you to cast incantations that can find words hidden deep within your data, just like Indiana Jones hunting for the Lost Ark! But instead of artifacts and golden idols, we're tracking down keywords and phrases.

With FTS, Laravel will search through every nook and cranny of your database to bring you the results you seek. And remember, with great power comes great responsibility - make sure to keep your data tidy and organized!

You can configure FTS for your application by following these simple steps:

1. Install the appropriate driver (such as MySQL or PostgreSQL) using Composer.
2. Register the FTS service provider in `config/app.php`.
3. Create a new Full-Text Search index by running the provided Artisan command.
4. Define the columns you want to search by adding them to your index definition file.
5. Run the command to build and optimize your index for lightning-fast searches.
6. Finally, perform searches using Laravel's elegant query builder or Eloquent ORM.

And voila! You've now transformed your application into a search engine that'll make Google jealous. So, go forth and conquer the quest for knowledge!

<a name="introduction-full-text-search-scoping"></a>
### Scope it out: Fine-Tuning Your Searches

Now that you've got FTS up and running, let's talk about scopes. Scopes are like training montages in a martial arts movie - they help you perfect your search techniques by fine-tuning the way Laravel searches your data.

By defining custom scopes, you can:

* Filter results based on specific columns (e.g., only return articles written by experts).
* Add additional conditions to your search (e.g., find all red shoes that are larger than size 10).
* Combine multiple scopes to create complex searches (e.g., find all articles about cats that were written by authors with more than 100 followers).

To create a new scope, follow these steps:

1. Define your scope in the appropriate model (e.g., `Article` or `Product`).
2. Use Laravel's query builder methods to define the conditions that should be applied during the search.
3. Call your custom scope from anywhere within your application when performing a search.

And there you have it! With scopes, you'll be able to perform precision searches like a digital Sherlock Holmes, leaving no byte unturned in your quest for the perfect results.

<a name="introduction-full-text-search-boosting"></a>
### Boosting Your Rankings: The Power of Relevance

Sometimes, not all search results are created equal - some are more relevant than others. In the world of search engines, this concept is known as ranking. And just like in Hollywood, where leading roles go to the most talented actors, Laravel lets you boost the relevance of certain search results.

By defining a score for each search term and assigning higher scores to more important terms, you can ensure that your users always see the most relevant results at the top of their search results pages (SRPs). This is called boosting, and it's like giving priority to A-list celebrities in a crowded room.

To implement boosting in Laravel, follow these steps:

1. Define a scoring function that assigns a numerical value to each search term based on its importance.
2. Modify the FTS index definition file to include a new column for storing the calculated scores.
3. Update your search queries to use the calculated scores when ordering the results.
4. Run the command to rebuild and optimize your index with the new score column included.

Now, whenever users perform a search, they'll see the most relevant results at the top of their SRPs - just like how the best movies always make it to the top of the box office!

<a name="introduction-full-text-search-stemming"></a>
### Stemming Out: The Art of Rooting Words

Have you ever wondered why "goes," "went," and "going" are all related to the verb "go"? That's because they share a common root, which is known as a stem. In the world of search engines, stemming helps us group together words with similar stems, so we can find more accurate results.

Laravel supports stemming out-of-the-box for English, allowing you to perform searches that treat "go," "going," and "went" as if they were the same word. This is incredibly useful when users misspell words or use different tenses in their search queries.

To enable stemming in Laravel, follow these steps:

1. Install the `en-stemmer` package using Composer.
2. Register the package's service provider in `config/app.php`.
3. Configure Laravel to use the `en-stemmer` for Full-Text Search.
4. Run the command to rebuild and optimize your FTS index with stemming enabled.

Now, when users search for "go," they'll also find results that contain "going" or "went." This is like having a linguistics degree - but without all those pesky exams!

<a name="introduction-full-text-search-synonyms"></a>
### Synonymize Your Searches: The Power of Words with Similar Meanings

Sometimes, users might use different words to express the same idea. For example, someone looking for "cheese pizza" might also be interested in "pizza with cheese." To account for these variations, we can define synonyms - words that have similar meanings but may not be the exact term the user searched for.

In Laravel, you can easily create a list of synonyms for each search term by defining an array in your model's `boot` method. Whenever users perform a search, Laravel will check if any of the synonyms are present in the data and return those results as well.

To implement synonymization in Laravel, follow these steps:

1. Define an array of synonyms for each search term in your model's `boot` method.
2. Call the `extendShouldGetFullTextWords` method to tell Laravel to include synonyms when searching your data.
3. Run the command to rebuild and optimize your FTS index with synonymization enabled.

Now, whenever users search for "pizza," they'll also find results that contain "cheese pizza" or "pizza with cheese." This is like having a thesaurus at your fingertips - but again, without all those heavy books!

<a name="introduction-full-text-search-stops"></a>
### Cutting to the Chase: Stopwords

Not every word in a search query is important. For example, prepositions like "on," "at," or "the" don't usually add much value to a search. These words are called stopwords, and Laravel allows you to exclude them from your searches for faster and more relevant results.

To configure stopwords in Laravel, follow these steps:

1. Define an array of stopwords that should be excluded from searches in your FTS index definition file.
2. Run the command to rebuild and optimize your FTS index with the new stopword list included.

Now, whenever users perform a search, Laravel will ignore common words like "on," "at," or "the" - allowing you to focus on the words that really matter!

<a name="introduction-full-text-search-analyzers"></a>
### Breaking Down Words: Analyzers

Sometimes, we need more control over how Laravel breaks down words during a search. For example, if you're working with names that are often hyphenated or compound words, you might want Laravel to break them apart into individual words when searching. This is called tokenization, and Laravel allows you to customize the process using analyzers.

In Laravel, you can define a custom analyzer by creating a new class and implementing its methods. Whenever users perform a search, Laravel will use your custom analyzer to break down words according to your rules.

To implement a custom analyzer in Laravel, follow these steps:

1. Create a new PHP class that implements the `Analyzer` interface.
2. Override the required methods (e.g., `tokenize`, `tokenTermData`) to define how words should be broken down during a search.
3. Register your custom analyzer in Laravel's `config/app.php` file.
4. Run the command to rebuild and optimize your FTS index with your custom analyzer enabled.

Now, whenever users perform a search, Laravel will use your custom rules for breaking down words - giving you even more control over how searches are executed!

 Ahoy there, fearless code warriors! Ever found yourself on a quest to locate data that's hidden deeper than Blackbeard's rum stash? Fear not, for Laravel has bestowed upon us the mighty `whereFullText` query builder method!

Think of it as a pirate's parrot, scanning the seven seas (aka your database) for matches to your search terms. This magical method doesn't just find exact matches like a stubborn parrot, but understands word boundaries and even stemming — so searching for "running" can nab records with "run", "ran", or "will run". Aye-aye, no need to call the navy!

But wait, there's more! This pirate's parrot works flawlessly on MariaDB, MySQL, and PostgreSQL. No need to hire an external service, unless you want a parrot that can also brew grog and tell fortunes.

Now, if you're looking for a semantic vector search, you've got yourself a map to El Dorado. But we'll save that adventure for another day, matey! Until then, hoist the sails of `whereFullText` and set sail on your data hunting expedition!

 Alrighty, buckle up, because we're about to embark on an AI-powered, semi-serious, semantic search adventure! 🚀

Instead of blindly matching results with your exact keywords (which can be a bit like playing a game of "Guess Who" with Siri), the `whereVectorSimilarTo` query builder method uses a more sophisticated approach. Think of it as the Sherlock Holmes of database searches, figuring out the meaning behind your queries rather than just the words themselves!

This high-tech sleuthing is made possible by vector embeddings, which are stored in PostgreSQL with the help of the `pgvector` extension. It's like giving your database a secret decoder ring to understand the hidden meanings of your searches.

So, if you're on the hunt for "the best wineries in Napa Valley," you might stumble upon an article titled "Top Vineyards to Visit" instead – because who needs overlapping words when you have a clever database and a sense of humor, right? 🍷

But remember, this kind of search requires PostgreSQL with the `pgvector` extension and the [Laravel AI SDK](/docs/{{version}}/ai-sdk). Because who needs a crystal ball when you've got a powerful database and some smart programming tools?

<a name="introduction-reranking"></a>
Now, let's talk about reranking – it's like the cherry on top of your semantic search sundae! Reranking takes the initially sorted results from a semantic search and reorders them to make sure that the most relevant results bubble up to the top. It's like when you're watching a reality TV show and suddenly, out of nowhere, the underdog gets a second chance – but in this case, the underdog is your search results!

So there you have it, folks! Semantic search that understands what you're looking for, vector embeddings that give your database a brain, and reranking to ensure that the most relevant results are front and center. It's like having your own personal librarian who never loses your bookmarks – except this one can handle much more than just books! 🤖

 Ahoy there, cyber seafarers! Prepare to embark on an extraordinary voyage into the uncharted waters of result reorganization with Laravel's AI SDK! 🌴✨

This marvelous piece of technology grants you the power to rearrange any motley crew of outcomes like a maestro conducting a symphony, using the magic of AI models to align them with the semantic harmony of your query. And if that ain't impressive enough, it shines brightest as a second act following a quick opening number (ahem, full-text search) – providing you with both blistering speed and enchantingly accurate semantics! 🚀🎶

<a name="introduction-scout-search-engines"></a>
But wait, there's more! Let us sail onward to explore the intricacies of Scout Search Engines... 🚣‍♂️🔍

(Original documentation can be found at /docs/{{version}}/ai-sdk)

 Ahoy there, coders! Fancy yourself a search aficionado, huh? Well, buckle up and prepare to embark on an adventure that'll make Google green with envy! We present to you, the Laravel Scout Search!

For those applications yearning for a "Searchable" trait that keeps their search indexes as synchronized as a well-oiled machine with Eloquent models, behold the magnificent Laravel Scout! This marvelous toolbox offers not only a built-in database engine but also drivers for third-party services more exciting than a rollercoaster at Cedar Point! Algolia, Meilisearch, and Typesense, oh my!

<a name="full-text-search"></a>
Now, let's talk about the full-text search, shall we? It's like having your very own Sherlock Holmes, minus the pipe smoke and dramatic Victorian fashion. This feature allows you to find needles in haystacks with ease, making your users wonder if you've secretly installed a supercomputer in their browser.

So grab your deerstalker hat, and let's dive into the thrilling world of Laravel Scout! Because with great power comes great searchability (and fewer lost hours scrolling through endless data)!

 Alrighty then! Let's dive into the world of Full-Text Search, where your database transforms from a dull old filing cabinet into a hip, tech-savvy librarian! 🤓

Now, you might be thinking "Hey, `LIKE` queries are cool for finding needles in haystacks", and well, they kinda are. But here's the catch: they don't even know the difference between a needle and a pin! So when you search for "running" and your database churns out "run", it's like a deaf drummer at a silent disco — nobody's dancing! 🥁🙅‍♂️

But fear not, for the Full-Text Search is here to save the day! It's like hiring a smart librarian who can find you books based on author, title, or even the topic of the book. This magical helper understands word boundaries, stemming (think root words and their derivatives), and relevance scoring, so it delivers the most relevant results first. 📚✨

The best part? You won't need to hire a separate search service! Fast full-text search is built into MariaDB, MySQL, and PostgreSQL, saving you the expense of hiring a whole team of hipsters with mustaches and Ray-Bans. All you gotta do is add a full-text index to the columns you want to search, and then use the `whereFullText` query builder method to make your searches. 🎯

> [!ATTENTION]
> Now, here's where things get important: Full-text search is only supported by MariaDB, MySQL, and PostgreSQL. So if you're using some obscure database that your grandma doesn't even know about, you might want to consider an upgrade! 🤓

<a name="adding-full-text-indexes"></a>
Now, let's get our geek on and learn how to add these magical indexes. Stay tuned for more tips and tricks from your friendly neighborhood database librarian! 🕶️📚✨

 ### Unleashing the Power of Phrase-Finding Prowess! 🔍🚀

Ready to turn your database into a search engine that's smarter than Google's boss? Let's add full-text indexes!

First, to make your data as findable as a cat on the internet, sprinkle some magical index dust on the columns you want to search. You can give a single column a dash of this dust or create a scrumptious multi-column feast by passing an array:

```php
Schema::create('articles', function (Blueprint $table) {
    $table->id();
    $table->string('title');  // Title trivia: It's like a book's cover, but for your data!
    $table->text('body');     // Body: Where all the juicy details reside.
    $table->timestamps();

    $table->fullText(['title', 'body']);  // Combine columns for an all-you-can-search buffet!
});
```

On PostgreSQL, you can even specify a language configuration for the index, which is like choosing your preferred dialect at a global search party:

```php
$table->fullText('body')->language('english');  // "I'm just here for the English words" - Said every non-polyglot database.
```

For more details on creating indexes, dive into our [migration documentation](/docs/{{version}}/migrations#available-index-types). It's not as exciting as a treasure map, but it'll get the job done! 🌟💪

 ### Diving Deeper into Database Shenanigans! 🤿

Alright, matey! Once you've set sail with your index in place, it's time to hoist the anchor and navigate the vast seas of data using the `whereFullText` query builder method. This nifty little function helps you scour the depths, leaving no stone (or database row) unturned! 🏚️

Fear not, for depending on whether you're cruising with MariaDB and MySQL or sailing solo on PostgreSQL, Laravel will customize the SQL incantation just for you! For example, on MariaDB and MySQL, it'll be like casting a magical spell `MATCH(...) AGAINST(...)`. On PostgreSQL, it's more like `to_tsvector(...) @@ plainto_tsquery(...)` - fancy, huh? 🧙‍♂️

```php
$articles = Article::whereFullText('body', 'web developer')->get();
```

When it comes to MariaDB and MySQL, results are naturally sorted by relevance score – like a secret sauce that makes the most important articles float to the top! 🌶️ On PostgreSQL, however, `whereFullText` filters relevant records but forgets about sorting them by relevance. If you're craving automatic relevance ordering on PostgreSQL, our friendly Scout suggests using its database engine – it'll handle all that shuffle work for you! 🕺️

And if you happen to have a treasure map with multiple columns marked, fear not! Simply pass the array of column names to `whereFullText` and search across them all:

```php
$articles = Article::whereFullText(
    ['title', 'body'], 'web developer'
)->get();
```

Lastly, if you want to cast a wider net and catch even more fish (er, data), the `orWhereFullText` method is at your service! Just be sure to consult the [query builder documentation](/docs/{{version}}/queries#full-text-where-clauses) before setting sail on new adventures! 🌴

<a name="semantic-vector-search"></a>
Now, if you're feeling particularly adventurous and looking to dive deeper into the world of semantic vector search, well... let's just say it's a whole other treasure trove waiting to be explored! Stay tuned for more pirate-y updates on this exciting topic! 🏴‍☠️

 Alright, buckle up, data detectives! 🕵️‍♂️ We're diving into the world of semantic search – it's like Sherlock Holmes with a math degree, using AI magic to solve the mystery of your queries without needing exact matches! 🎩

Instead of just looking for keywords (like a simple-minded search engine), this sophisticated sleuth uses vector embeddings – fancy number arrays that represent the *gist* of text. It's like if Sherlock could convert your query into an alien language, then find all the content that translates back to something close to it. For instance, a search for "best wineries in Napa Valley" can unearth articles titled "Top Vineyards to Visit", even though they don't share a single word! 🍷🌳

So, how does this high-tech detective work? It goes something like this: first, we create an embedding (a numeric array) for every piece of content and store it with the data. Then, at search time, we whip up an embedding for the user's query and track down the stored embeddings that are most similar to it in vector space. 🔍

> [!NOTE]
> Vector search is a sophisticated sleuthing technique that demands a PostgreSQL database equipped with the `pgvector` extension and the Laravel AI SDK. Luckily, all Laravel Cloud Serverless Postgres databases are already packed with this high-tech mystery solver! 🕵️‍♂️

Now, let's move on to...

<a name="generating-embeddings"></a>
... Embedding Generation 101 – where we teach our detective how to create these fancy number arrays for your content! 📚🚀

 ### Embark on a Numerical Adventure with Laravel's Textual Transformations!

Welcome, adventurers! Today, we're diving headfirst into the world of high-dimensional array shenanigans, otherwise known as text embeddings. These mystical arrays can contain hundreds or thousands of numbers and represent the cosmic essence of your humble words. Fancy that!

You can summon these semantic specters using Laravel's enchanted `Stringable` class and its powerful `toEmbeddings` incantation:

```php
use Illuminate\Support\Str;

$embedding = Str::of('Napa Valley has great wine.')->toEmbeddings();
```

But why cast one spell at a time when you can perform mass conjuring? By harnessing the `Embeddings` sorcery, you can create embeddings for multiple texts with a single API call to the embedding provider:

```php
use Laravel\Ai\Embeddings;

$response = Embeddings::for([
    'Napa Valley has great wine.',
    'Laravel is a PHP framework.',
])->generate();

$response->embeddings; // [[0.123, 0.456, ...], [0.789, 0.012, ...]]
```

For those seeking further enlightenment on configuring providers, customizing dimensions, or caching your embeddings, may I present you with the [AI SDK documentation](/docs/{{version}}/ai-sdk#embeddings).

Embark on this numerical journey, and together we'll conquer the linguistic landscape one array at a time!

 Ahoy there, brave data wranglers! Let's dive into the nitty-gritty of storing and indexing vectors in Laravel, a journey filled with as much fun as a unicorn disco at a tractor show.

First off, when dealing with vector embeddings, you'll want to create a `vector` column in your migration, matching the dimensions of your chosen embedding provider (e.g., 1536 for OpenAI's `text-embedding-3-small` model). But that's not all, matey! You've got to give it a good ol' HNSW indexing, just like you would spruce up your ship before setting sail on the sea of data. This index will speed up similarity searches faster than Usain Bolt on roller skates:

```php
Ensure Vector Extension is enabled on your PostgreSQL database (it's like getting a pirate license, but for databases) before creating the table:

Schema::ensureVectorExtensionExists();

Then create your table 'documents':

Schema::create('documents', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->vector('embedding', dimensions: 1536)->index(); // Indexing, like putting your data in a treasure chest for easier access
    $table->timestamps();
});
```

On the Eloquent model, cast that vector column to an `array`, so Laravel can handle the conversion between PHP arrays and the database's vector format like a pirate swabbing the deck:

```php
Protect the casts():

protected function casts(): array
{
    return [
        'embedding' => 'array', // Cast to an array, it makes Laravel handle conversion between PHP arrays and the database's vector format like a charm!
    ];
}
```

For more details on vector columns and indexes, consult the migration documentation, the pirate version of which can be found [here](/docs/{{version}}/migrations#available-column-types).

Now, let's hoist the sails and set course for querying by similarity! Arrr!

 ### Finding Your Long Lost Database Friends! 👥🔍

Are you tired of scrolling through your database like it's a lost-and-found, hoping to find that one elusive document? Well, worry no more! Laravel has the solution - Embedding Similarity Search! 🚀

Once you've given your content some personality with embeddings, finding similar records is as easy as a snapchat filter. The `whereVectorSimilarTo` method acts like the matchmaker of the database world, comparing the provided embedding to the stored vectors using Cosine Similarity (because even in the digital world, it's all about who you know). It filters out the not-so-compatible records below a `minSimilarity` threshold (think of it as a pickiness level) and arranges them by their love connection - with the most compatible records first. The threshold should be between 0.0 and 1.0, where 1.0 means they're practically twins:

```php
$documents = Document::query()
    ->whereVectorSimilarTo('embedding', $queryEmbedding, minSimilarity: 0.4)
    ->limit(10)
    ->get();
```

For those of you who like to play cupid yourselves, Laravel offers a little extra help! If you give it a plain string instead of an embedding array, it'll automatically generate the embedding for you using its best-in-class Embedding Provider. This means you can pass the user's search query directly without any pre-date preparation:

```php
$documents = Document::query()
    ->whereVectorSimilarTo('embedding', 'best wineries in Napa Valley')
    ->limit(10)
    ->get();
```

For the more adventurous among us, there's even lower-level control over vector queries with methods like `whereVectorDistanceLessThan`, `selectVectorDistance`, and `orderByVectorDistance`. These methods let you work directly with distance values instead of similarity scores, select the computed distance as a column in your results, or manually control the ordering. For complete details, consult the [query builder documentation](/docs/{{version}}/queries#vector-similarity-clauses) and the [AI SDK documentation](/docs/{{version}}/ai-sdk#querying-embeddings).

<a name="reranking-results"></a>
And if you're still not getting the results you want, don't forget to consult your database's astrologer - the Reranking Results section! 🌠

 Alrighty, buckle up for a whirlwind ride through the enchanting world of Reranking Results! This ain't no ordinary dance in the data desert; it's a jive where an AI model shuffles a pile of results based on their semantic swag. Unlike Vector Search, which is like pre-choreographing the dance before the party starts, Reranking works with any old text collection – it takes the raw content and the query as its dance card, then serves up the items in the order of their rhythmic relevance.

Reranking is a real showstopper when you team it up after a quick-footed initial retrieval. Picture this: You've got thousands of records on the dance floor, and with a full-text search, you cut the herd down to the top 50 candidates in a flash. Then, Reranking swoops in and gives the most relevant tunes the spotlight they deserve! This "retrieve then rerank" two-step ensures both speed and semantic salsa.

To Rerank an array of strings, you'll need to summon the `Reranking` class:

```php
use Laravel\Ai\Reranking;

$dancefloor = [
    'Django is a Python web framework.',
    'Laravel is a PHP web application framework.',
    'React is a JavaScript library for building user interfaces.'
];

$response = Reranking::of($dancefloor)->doTheTwist('PHP frameworks');

// The winner takes it all!
$champion = $response->first()->document; // "Laravel is a PHP web application framework."
```

Laravel collections are even savvier about the Reranking dance. They've got a `rerank` macro that accepts a field name (or dance move) and a query, making it a breeze to Rerank Eloquent results:

```php
$articles = Article::all()
    ->doTheHustle('body', 'Laravel tutorials');
```

For the full lowdown on configuring reranking providers and available options, consult the [AI SDK documentation](/docs/{{version}}/ai-sdk#reranking). And remember: When it comes to Reranking Results, the beat goes on! 💃🏼🕺🏼

 Ahoy there, coders! Let's talk Laravel Scout, the swashbuckler of search engines! 🏴‍☠️

You see, we've all been there, right? Hours spent crafting intricate database queries that would make Sherlock Holmes himself break a sweat. But fear no more, me hearties! Laravel Scout is here to save the day! 🦸‍♂️

Now, what sets Scout apart from your average search engine is its love for automation. Instead of calling query builder methods directly in your code like a commoner, it bestows upon your Eloquent models a noble `Searchable` trait. Think of it as Knighting Sir Database Query, so it can keep the search indexes ever up-to-date as records are born, aged, and meet their untimely demise. 🏰💔

And the cherry on top? You no longer have to manually manage index updates for models you want to make forever searchable! Because who wants to spend time doing that when you can be busy writing witty documentation instead, right? 📝🤖

So, grab your compass and set sail with Laravel Scout, the search engine that's always ready to lend a helping hand (or trait)! 🌊🔍

 ### Database Gumshoe

Meet Scout's built-in database detective! This sleuthy search engine dives into your existing database, performing full-text and `LIKE` searches - no trench coats or magnifying glasses needed. Just sprinkle the `Searchable` trait on your model like fairy dust and define a `toSearchableArray` method to outline the columns you'd like to scrutinize.

You can employ PHP attributes to dictate search tactics for each column. Aiming to catch the exact culprit? `SearchUsingFullText` will tap into your database's full-text index, while `SearchUsingPrefix` only nabs suspects who start with the given string (e.g., `example%`). Any columns without an attribute default to a friendly `LIKE` strategy, complete with wildcards on both sides (`%example%`):

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Attributes\SearchUsingPrefix;
use Laravel\Scout\Searchable;

class Article extends Model
{
    use Searchable;

    #[SearchUsingPrefix(['id'])]
    #[SearchUsingFullText(['title', 'body'])]
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
        ];
    }
}
```

> [!CAUTION]
> Before pinning a column to use full-text query tactics, double-check that the column has already been assigned a [full-text index](/docs/{{version}}/migrations#available-index-types).

Once the trait is in place, you can search your model using Scout's `search` method. This clever engine will even order results by relevance - yes, even on PostgreSQL:

```php
$articles = Article::search('Laravel')->get();
```

The detective engine is perfect for those moderate search cases where you want the convenience of Scout's automatic index syncing without deploying a shadowy external service. It handles everyday search situations like a boss, including filtering, pagination, and soft-deleted record management. For a full rundown, consult the [Scout documentation](/docs/{{version}}/scout#database-engine).

<a name="third-party-engines"></a>
Now, if you've got some serious Sherlock Holmes-level search needs, check out our selection of third-party engines in the [Scout documentation](/docs/{{version}}/scout#third-party-engines). Happy hunting!

 ### Third-Party Search-taculars 🎬🍿

Scout isn't just a one-trick pony! It's a symphony conductor, orchestrating tunes with third-party search engines like Algolia (the search engine equivalent of a Grammy winner), Meilisearch (the cool kid on the block), and Typesense (the quiet genius in the corner).

These glitzy search services bring advanced features to the table, such as typo tolerance (because let's be real, no one's perfect), faceted filtering (for those picky users), geo-search (for when your data has a passport), and custom ranking rules (to ensure that 'cat videos' always top the charts). These features really shine when you're dealing with data volumes that would make a librarian sweat or when you want your search bar to be as slick as a greased weasel.

Fear not, because Scout keeps it simple! Its unified API means switching from the database engine to a third-party engine is like upgrading from a kick drum to a full drum kit – sure, there's a learning curve, but the results are worth it. Start with the database engine and graduate to a third-party service when your app needs more than the database can handle (which, let's be honest, is like asking a goldfish to swim in an ocean).

For all the juicy details on setting up these search-taculars, check out the [Scout documentation](/docs/{{version}}/scout) – because who doesn't love a good manual read when it involves search engines? 📚🎉

> [!NOTE]
> Most applications are like a cozy little bookstore that doesn't need a flashy search engine. The basics covered in this section should suffice for the majority of use cases. But hey, when you're ready to upgrade to a mega-mall with a search bar that spits out results faster than a speeding bullet, we got your back! 🚀🎯

 Alright, buckle up, search enthusiasts! Here's a laugh-a-minute guide on how to wield the mighty search powers of Laravel like a pro (or at least pretend you are one).

## The Search Showdown: A Comedy of Techniques

Remember, kids, mix and match these techniques for results that'll make you feel like a search superhero!

**Full-Text Retrieval + Reranking: The Dynamic Duo**

Think of full-text search as the swift Batmobile, quickly zooming through a massive dataset to narrow it down to a promising posse. Once we've got our candidates, reranking swoops in like Robin, sorting them by semantic relevance to give you results that'll make even Commissioner Gordon proud:

```php
$articles = Article::query()
    ->where('body', 'MIMICKS', $request->input('query')) // You know, like a detective would search a crime scene
    ->limit(50)
    ->get()
    ->rerank('body', $request->input('query'), limit: 10); // And now we're serving it up with a side of semantic sizzle!
```

**Vector Search + Traditional Filters: A Match Made in (Data) Heaven**

Now, imagine vector similarity as your trusty sidekick, helping you narrow down the search to a specific neighborhood (or, you know, dataset subset). Then, team it up with classic `where` clauses to set some boundaries, like restricting the results by ownership, category, or any other attribute:

```php
$documents = Document::query()
    ->where('team_id', $user->team_id) // You know, keeping it within the family, superhero style
    ->whereVectorSimilarTo('embedding', $request->input('query')) // Our trusty sidekick at work
    ->limit(10)
    ->get(); // And there you have it! A search result that'd make Batman himself proud.
```

So, go forth and search with confidence, knowing that you've got these powerful techniques in your utility belt to save the day (and return some accurate results)!