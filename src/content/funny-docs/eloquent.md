 # Eloquent: The Posh Puppy of PHP Database Frameworks! 🐶

## Bark at the Start 🐺

- [Woof Woof Introduction](#woofWoofIntroduction)
- [Birthing Pup Classes](#birthingPupClasses)
- [Eloquent Pup Conventions](#eloquentPupConventions)
    - [Den Names](#denNames)
    - [ID Tags](#idTags)
    - [UUID and ULID ID Tags](#uuidAndUlidIdTags)
    - [Bone Timestamps](#boneTimestamps)
    - [Kibble Connections](#kibbleConnections)
    - [Default Attribute Treats](#defaultAttributeTreats)
    - [Puppy Training Strictness](#puppyTrainingStrictness)
- [Fetching Pups](#fetchingPups)
    - [Bone Collections](#boneCollections)
    - [Chunking Bones](#chunkingBones)
    - [Barking Lazy Collections](#barkingLazyCollections)
    - [Tail Wagging Cursors](#tailWaggingCursors)
    - [Advanced Subqueries](#advancedSubqueries)
- [Fetching Single Pups / Aggregates](#fetchingSinglePups)
    - [Finding or Creating Pups](#findingOrCreatingPups)
    - [Fetching Aggregates](#fetchingAggregates)
- [Boning and Playing with Pups](#boningAndPlayingWithPups)
    - [Bones](#bones)
    - [Playtime Updates](#playtimeUpdates)
    - [Mass Toy Assignment](#massToyAssignment)
    - [Upbone-serts](#upboneSerts)
- [Collaring Pups](#collaringPups)
    - [Soft Collars](#softCollars)
    - [Querying Soft-Collared Pups](#queryingSoftCollaredPups)
- [Flea-Pruning Pups](#fleaPruningPups)
- [Replicating Pups](#replicatingPups)
- [Pup Query Scopes](#pupQueryScopes)
    - [Global Barks](#globalBarks)
    - [Local Bark-orders](#localBarkOrders)
    - [Pending Treats](#pendingTreats)
- [Comparing Pups](#comparingPups)
- [Life Events](#lifeEvents)
    - [Using Closures](#usingClosures)
    - [Observers](#observers)
    - [Hushing Events](#hushingEvents)

<a name="woofWoofIntroduction"></a>

Hey there, dog lover! Welcome to the Eloquent playpen, where we train our furry PHP database helpers. Sit, stay, and let's get started! 🐾

 Welcome to the wild world of Laravel, where even databases are a blast to interact with! Meet Eloquent, our whiz-bang object-relational mapper (ORM) that turns database interfacing into a joyride. With Eloquent, each table in your database gets its own snazzy "Model" buddy, helping you chat up the table like never before.

Oh, and don't forget! Before we get started, remember to hook up a database connection in your application's `config/database.php` configuration file. Need help setting up your database? Check out our [ Database Configuration Guide for Aliens](/docs/{{version}}/database#configuration) (just kidding, it's actually the Laravel documentation).

<a name="generating-model-classes"></a>
Now, let's talk about generating Model classes. It's like creating a custom dinner jacket for each of your database tables. Simply use Laravel's magical command line tool to whip up these posh attire items, and voila! You'll be one step closer to being the life of every database party.

 Alrighty, buckle up, because we're about to embark on a wild journey through Laravel-landia! First stop: Modelville, population you (and your new Eloquent model). But before we set sail, let's get our ducks in a row and ensure our models are neatly nested in the `app\Models` directory. That's where they enjoy their posh high-living, surrounded by their illustrious peers who extend the prestigious `Illuminate\Database\Eloquent\Model` class.

Now, if you're feeling a bit peckish for some fresh model code, don't fret! You can whip one up using the trusty Artisan command (it's like having a gourmet chef in your pocket). Give it a shout:

```shell
php artisan make:model Flight
```

But wait, what if you're hankering for a side of database migration with that model? Fear not! Simply add the `--migration` or `-m` option to your command:

```shell
php artisan make:model Flight --migration
```

And voila! Your model and its accompanying migration are ready to hit the runway (or the database, if you will).

But why stop at just a single model? You can cook up various other types of classes—think factories, seeders, policies, controllers, form requests, and more. Heck, you can even order them all up in one go:

```shell
php artisan make:model Flight --factory --seeder --policy --controller --request
```

So grab a cold brew, kick back, and let Laravel's Artisan command do the heavy lifting for you. After all, who needs a personal assistant when you've got a command-line wizard like this one?

 Alright, buckle up, dear developer! Let's embark on an exciting journey together. We're about to create a brand new model for our airline app, and it's going to be as smooth as turbulence-free skies! 🛬

First off, let's summon the Flight model from thin air with this magical incantation:

```bash
php artisan make:model Flight --factory
```

That's right, with just a few keystrokes and some arcane syntax, you've now conjured up a Flight model! But wait, there's more! We wouldn't want our flights to take off without proper factory settings, so let's create a custom FlightFactory class. You can think of it as a pilot's checklist for creating perfect flights:

```bash
php artisan make:model Flight -f
```

Now that we've got our Flight model and its trusty factory companion, you can start shaping the future of air travel in your codebase. Just remember, with great power comes great responsibility (and a whole lot of fun!). Happy coding! 🚀

 Alrighty, buckle up, coding companions! Let's embark on a delightful journey together through the friendly skies of Laravel land.

First stop: Modelville Airport 🛬! Get ready to take off with your trusty `php artisan make:model Flight --seed`. This magical command will whip you up a brand new Flight model, complete with all the necessary documents for a smooth flight (yes, even the boarding pass!)

Next destination: Seeder's Delight 🍹! After your successful takeoff from Modelville Airport, it's time to fuel up your Flight model with some passengers and destinations. To do that, simply `php artisan make:model Flight -s`. This command will generate a FlightSeeder class, ready to help you stock your Flight model with tasty data seeds!

Just remember, before you can depart on your journey, you'll need to register your newly created Seeder in the database migration file. It's like checking-in for your flight and selecting your seat. Once registered, your Seeder will run automatically whenever you decide it's time to take off!

And that's a wrap! You've now learned how to generate a model and a FlightSeeder class in Laravel. So grab your headphones, relax, and enjoy the flight!

 Alrighty, buckle up, coding pilots! Let's embark on an exciting journey through the vast skies of Laravel land. You know the drill – we're about to create a new model and controller to rule the roost. But instead of sounding like a stuffy old textbook, let's spice things up a bit.

1. First off, let's summon our very own Flight model with a wave of our wand (okay, it's more like typing):

```bash
php artisan make:model Flight --controller
```

This spellbinding command will cast the necessary files for our Flight model and its trusty sidekick, the FlightController. It's like having a personal aircraft manufacturing factory right at your fingertips!

2. Next up, if you find yourself needing a second controller (who needs just one, am I right?), you can conjure it up with this incantation:

```bash
php artisan make:model Flight -c
```

This command will create a new FlightController minus the model. It's like having your very own wingman for those times when you need to multitask and rule multiple routes at once!

So there you have it, future Laravel luminaries – easy peasy, right? Now that we've conquered generating models and controllers, who knows where the winds of coding will take us next! Happy flying, and remember: "With great power comes great responsibility" – or something like that. 😉

 Alrighty then! Let's tickle those keys with a dash of humor while creating our dashing new model and companions.

# Take flight and create a swanky model, FlightController resource class, and form request classes... (Yeah, you heard it right!)


First off, grab your magic wand (your terminal) and let's commence the incantation:

php artisan make:model Flight --controller --resource --requests

Or, if you're feeling extra fancy, you can say:

php artisan make:model Flight -crR

Now, watch as our little Laravel mascot whips up a model like a master chef tossing dough in the air. In this case, we're baking up a tasty Flight model with a side of FlightController, resource class, and form request classes to top it all off!

Let's get ready for takeoff as we set our sights on creating an application that'll make the skies sing!

 Alrighty then! Let's embark on a thrilling adventure in Laravel-land where we code, laugh, and create fantastic models like a modern-day Leonardo da Vinci with a keyboard (and no, we won't paint any mona lisas!). Ready? Buckle up!

First, gather around fellow space cowboys and cowgirls because it's time to summon our trusty sidekick - the command line interface. Type in:

```bash
php artisan make:model Flight --policy
```

This mysterious incantation will bring forth two magnificent creations from the depths of your Laravel project. One, a dashing model named "Flight," and two, a chivalrous class called "FlightPolicy"! It's like creating superheroes with just a few keystrokes!

Now, our Flight model will be the fearless leader, keeping track of all your airborne adventures while our FlightPolicy class will ensure order in the skies. So, get ready to take flight and rule the digital skies together! But remember, with great power comes great responsibility... or something like that. You know, if Spiderman was a PHP artisan. 😎🚀

 Alrighty then! Buckle up, because we're about to take off on an adventure that'll make your development life a whole lot easier. We're talking about creating a model and all its wingmen – migration, factory, seeder, and controller – with just one command! Let's get this party started:

"Gentleman (or lady), start your engines!"

php artisan make:model Flight -mfsc

Now, here's a quick rundown of what each letter stands for:

- `m`: Model – The blueprint of our aircraft, defining the attributes, relationships, and rules. This baby will help us navigate the vast skies of data in our application.

- `f`: Factories – Like an airline's assembly line, but instead of manufacturing Boeings, we're churning out dummy Flight objects to make testing a breeze!

- `a`: Migration – The runway for our flight data takeoff and landing. These scripts allow us to create, modify, and manage the database schema with ease.

- `s`: Seeder – A greenhouse where we can grow lush seedlings (er, seeds) of Flight records, ready for planting in our database when needed. Ideal for populating the database during deployment or testing.

- `c`: Controller – The cockpit from which we steer our application. Controllers handle HTTP requests and delegate tasks to models and other services to return responses.

So, with a single command, you've launched your very own Flight model and its entourage! Now, let's go forth and conquer the database frontier! Bon voyage! 🚀

 Alrighty, buckle up, coders! Let's embark on an adventure that would make a superhero envious. We're not just talking about creating a simple model here, oh no, this is a full-blown aviation extravaganza!

## Take flight with one command 🛫🚀

```bash
php artisan make:model Flight --all
```

Say goodbye to manual labor and hello to your very own air traffic control system in a box. With this single command, you'll generate a model, migration, factory, seeder, policy, controller, and form requests like a seasoned airline pilot.

Feeling extra fancy? No worries! We've got an acrobatic move for that too. 😎

## When you want to touch down lightly... lide

```bash
php artisan make:model Flight -a
```

If you're in a hurry or just prefer a gentle landing, this one's for you. It generates everything except the policy file. Just remember, no parachutes allowed! 😜

So, grab your coding helmets and prepare for takeoff! With our trusty artisan command, creating a new project is as easy as pie (or should we say, flying a kite)! 🥧✈️

 Alrighty, let's dance a little Laravel jig together! 🕺️

## Spin that command line, create a pivot model... 🎉

You know the drill, time to whip up a pivot model! But don't worry, it's not as fancy as a disco ball, just as important. Here are a couple of ways to do it:

1. **The Classic Approach (for purists):**
   php artisan make:model Member --pivot

2. **Short and Sweet (for the impatient):**
   php artisan make:model Member -p

Now, don't be confused by the fancy names; these commands are like the trusty dancing partners you need to keep things moving smoothly on the Laravel dance floor. 💃️🕺️

And hey, if you ever want to take a peek at your models (to make sure they're still got it), you can always inspect them! Just follow this link: <a name="inspecting-models"></a>

So there you have it! Pivot models made easy, and with a dash of humor to keep things fun. Now let's boogie back to coding! 🤹‍♂️

 Alrighty, let's get this party started! When it comes to decoding your Laravel models like a secret agent deciphering Morse code, we got you covered. But instead of using spy gadgets, we've got something even cooler - the `model:show` Artisan command!

Imagine being in an epic quest for knowledge, and this command is your trusty magical scroll revealing all a model's attributes and relations in one swoop (without summoning Cthulhu or any other Lovecraftian horrors). Here's how you summon it:

```shell
php artisan model:show Flight
```

P.S. If you think you're too cool for scrolls, feel free to refer to this command as "The Knowledge Oracle." Now go forth and conquer your models with style! 🚀💫🧝‍♂️

 Ahoy there, coders! 🛫 Let's embark on a fun journey through the skies of Laravel land, focusing on Eloquent Model Conventions. Buckle up, as we're about to take flight! 🎠

Models in our Laravel aircraft are born in the `app/Models` hangar, courtesy of the trusty `make:model` command. Let's peek at a humble model class and dive into some Eloquent's essential conventions:

```php
<?php

namespace App\Models; // Yes, this is where our model lives - no need to search for the cockpit door! 🏙️

use Illuminate\Database\Eloquent\Model; // We're extending the Eloquent Model, because who wouldn't want a built-in autopilot system? ✈️

class Flight extends Model
{
    // ...
}
```

<a name="table-names"></a>
Now that we've got our wings wet with the basics, let's dive deeper into the heart of Eloquent: table names. Guess what? Your model class's lowercase, pluralized name is magically associated with its database table - no need for a manual takeoff coordination! 🛰️ For example, if your model is `Flight`, its database table will be named `flights`. Ain't that magical? ✨

But remember, the magic only works if your models and tables share the same name pattern - no sneaky alias swaps allowed! If you have a table called `aircrafts` instead of `airplanes`, your model should be named `Aircraft`, not `Airplane`. Because even in Laravel land, consistency is key! 🔑

That's all for now, pilots! Keep your code clean and your models shining bright. Happy coding! 🚀

 Ah, the sweet symphony of code and databases! But let's not get too carried away - we're here to discuss something a bit more earthbound: table names.

In our example, you might have raised an eyebrow (or two) wondering where on earth Eloquent found our `Flight` model's database table. Well, buckle up! It turns out it's like a cat - it has nine lives... or rather, nine names. By convention, the model's table name is derived from its class name in "snake case," and with a little twist of plurality. So, our `Flight` model dances in the skies (and databases) under the name `flights`. But wait, there's more! An `AirTrafficController`, well, it's not one to be left grounded; it prefers to manage things from its `air_traffic_controllers` table.

But what if your model's table name is as elusive as a unicorn in a haystack? No problemo! You can manually assign the model's table name using the `Table` attribute, just like teaching a parrot to squawk on command:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table('my_flights')] // Here's where the magic happens!
class Flight extends Model
{
    // ...
}
```

So there you have it! Now, go forth and conquer your databases with this newfound knowledge! Or, you know, just build some cool apps. Whatever floats your boat.

 ### The Crown Jewels of Your Database: Primary Keys

In the grand old world of Laravel, Eloquent models are the dashing knights that gallop off to fetch data from the dark, dusty corners of your database. But these brave knights need a beacon to find their way back home – and that's where primary keys come in!

By default, our dashing knights assume the corresponding table has a column named "id" as its primary key. However, if you have a more eccentric data structure, fear not! You can specify a different column acting as your model's primary key using the `key` argument on the `Table` attribute:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table(key: 'flight_id')] // Now our knights will be on the lookout for Flight_ID instead of the usual ID!
class Flight extends Model
{
    // ...
}
```

But here's where things get really interesting! In a conventional database, primary keys are like King Arthur's Excalibur – they rise and shine with incrementing integer values. However, our daring knights can also handle non-numeric or non-incrementing primary keys if you specify the `keyType` and `incrementing` arguments on the `Table` attribute:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table(key: 'uuid', keyType: 'string', incrementing: false)] // Our knights now have a magical compass that guides them to UUIDs instead of ordinary numbers!
class Flight extends Model
{
    // ...
}
```

But what if you just want to give your data a chance to breathe and not have the knight automatically increment the ID? You can use the `WithoutIncrementing` attribute:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\WithoutIncrementing;
use Illuminate\Database\Eloquent\Model;

#[WithoutIncrementing] // Our brave knight will no longer auto-increment IDs, giving your data a well-deserved break!
class Flight extends Model
{
    // ...
}
```

So there you have it! Now go forth and conquer your databases with the power of primary keys and Laravel's fearless Eloquent models. Happy coding, brave adventurers! 🤓🏰

 Ahoy there, coding pirates! You might've heard tales about composite primary keys and thought Eloquent was a one-eyed parrot with no understanding of such magic. But fear not, me hearties! This section be all about clarifying the situation for ye scallywags.

Eloquent demands that each model be adorned with at least one unique "ID" that can help identify it like a treasure map marking buried gold. Composite primary keys, though? Well, they're more like a secret decoder ring or Morse code - not something Eloquent models can directly decipher (yet).

But don't let this dampen your spirits! You can still make your databases dance by adding multi-column, unique indexes to your tables. These are the polka steps that your table will follow when Eloquent isn't dancing with composite keys. Just remember, these additional indexes are like extra dance moves, spicing up a routine without replacing the lead role - i.e., the primary key.

<a name="uuid-and-ulid-keys"></a>
Now, when it comes to unique identifiers, there be two beasts of the sea that stand out: UUIDs (Universally Unique Identifiers) andULIDs (Cleverly Named Unique Identifier). These are like compasses for your data, helping you navigate even the stormiest of relationships between tables. Eloquent can handle both of these bad boys with ease, so don't be shy about using them to add some flair to your models!

Happy coding and may your databases always be swashbucklingly organized!

 ### Sashay into the Sea of Sequence-less! 🌊🔮

If you're tired of the mundane auto-incrementing numbers as your Eloquent model's primary keys, we've got some magic for ya! Let's take a dip in the UUID pool instead. UUIDs are like those universally unique identification cards that even Dumbledore couldn't conjure twins for - 36 alphanumeric characters of pure, unadulterated uniqueness!

To make your model dance to this new beat, you can sprinkle a dash of the `Illuminate\Database\Eloquent\Concerns\HasUuids` trait on it. But remember, a good dancer always preps well - ensure that your model sports a primary key column as cool as its UUID self:

```php
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasUuids;

    // ...
}

$article = Article::create(['title' => 'Traveling to Europe']);

$article->id; // "018f2b5c-6a7f-7b12-9d6f-2f8a4e0c9c11"
```

By default, the `HasUuids` trait whips up [UUIDv7](/docs/{{version}}/strings#method-str-uuid7) identifiers for your models, making them great for indexed database storage because they can be arranged lexicographically - just like a well-organized library!

But if you're the type who likes to customize their dance moves, you can override the UUID creation process for specific models by defining a `newUniqueId` method on the model. And if you want to specify which columns should receive UUIDs, define a `uniqueIds` method on the model:

```php
use Ramsey\Uuid\Uuid;

/**
 * Generate a new UUID for the model.
 */
public function newUniqueId(): string
{
    return (string) Uuid::uuid4();
}

/**
 * Get the columns that should receive a unique identifier.
 *
 * @return array<int, string>
 */
public function uniqueIds(): array
{
    return ['id', 'discount_code'];
}
```

Now, if you're really into brevity (who isn't?), why not try ULIDs? Similar to UUIDs, but shorter at 26 characters. Like ordered UUIDs, ULIDs can be sorted lexicographically for efficient database indexing. To step onto the ULID dance floor, you should use the `Illuminate\Database\Eloquent\Concerns\HasUlids` trait on your model and prepare a primary key column that's as unique as a snowflake:

```php
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasUlids;

    // ...
}

$article = Article::create(['title' => 'Traveling to Asia']);

$article->id; // "01gd4d3tgrrfqeda94gdbtdk5c"
```

 ### Time Travel, Laravel Style! 🕰️

In our Eloquent universe, it's as if time itself is on autopilot! By default, our models are equipped with a built-in DeLorean (`created_at` and `updated_at` columns) that automatically sets off when models are born or aged. But what if you want to defy the laws of data-time? 😱

If you're not digging the whole time-keeping thing, no worries! You can stop the clock by setting your model's `Table` attribute's `timestamps` to `false`. Here's how to do it:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table(timestamps: false)]
class TimeTraveler extends Model
{
    // ...
}
```

Now, if you only need to disable time travel (timestamps), there's a quicker way! Grab the `WithoutTimestamps` attribute and hop aboard:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Model;

#[WithoutTimestamps]
class TimeTraveler extends Model
{
    // ...
}
```

If you're a stickler for time, and need to customize your model's timestamp format (weirdo), there are two ways:

1. Via the `dateFormat` argument on the `Table` attribute:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table(dateFormat: 'U')]
class TimeTraveler extends Model
{
    // ...
}
```

2. Or by using the `DateFormat` attribute:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\DateFormat;
use Illuminate\Database\Eloquent\Model;

#[DateFormat('U')]
class TimeTraveler extends Model
{
    // ...
}
```

And if you prefer to rename the columns where timestamps are stored, just define `CREATED_AT` and `UPDATED_AT` constants on your model:

```php
class TimeTraveler extends Model
{
    /**
     * The name of the "created at" column.
     *
     * @var string|null
     */
    public const CREATED_AT = 'timeOfBirth';

    /**
     * The name of the "updated at" column.
     *
     * @var string|null
     */
    public const UPDATED_AT = 'lastTimeSeen';
}
```

Finally, if you want to do model operations without disturbing the `updated_at` timestamp (time travelers beware!), you can perform them within a closure given to the `withoutTimestamps` method:

```php
Model::withoutTimestamps(fn () => $post->increment('reads'));
```

Now go forth and bend time to your will, but remember - don't mess with the space-time continuity! 🚀🕰️🌍

 ### Cosmic Navigation System (CNS) Models

By a wormhole of defaults, all our CNS models are preprogrammed to communicate with the primary dimension of data that's been warped for your spacecraft application. But, you know what they say: Variety is the spice of quantum entanglement! If you fancy using a different dimension for some models, the `DimensionPortal` attribute will be your warp drive:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\DimensionPortal;
use Illuminate\Database\Eloquent\Model;

#[DimensionPortal('The MySQL Realm')]
class SpaceVoyage extends Model
{
    // ...
}
```

**Protip:** Make sure to warp your warp drives correctly, or you'll end up in a dimension filled with nothing but spaghetti code and angry cats! 🐈🚀

 ### Sky-High Defaults! 🚀🛬

Ever found yourself staring at a freshly hatched Laravel model, wondering where its wings are? Fear not! By default, these fledglings are as empty as an air traffic controller's laugh-o-meter. But fear not, for with just a sprinkle of PHP magic, you can fill 'em up with some swanky default attributes!

If you want your models to come pre-loaded like a luxury hotel mini-bar, you can define the default values for some of your model's attributes by creating an `$attributes` property on your model. Just remember, the values you stick in this array should be as database-ready as a well-dressed airline passenger:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * The model's runway ready defaults for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'options' => '["free pillow","vegan meal"]', // Hey, we cater to all tastes!
        'delayed' => false, // Just like our customers' hopes when they see their boarding time 🕰️
    ];
}
```

And just like that, your models are ready for takeoff with some tasty defaults! But remember, only serve up values in their raw, storable format – no need to add the fancy garnish yet. That's what the database is for! 😉

 Alright, Laravel fanatics! Let's dive into the world of Eloquent Strictness, where your models behave just like that stubborn ex who refuses to play by the rules (unless you really want them to).

First off, we got the `preventLazyLoading` method, a magical spell that ensures your models load in all their glory before serving them up. It accepts an optional boolean argument - think of it as a party invitation, only Eloquent decides who gets to join. If you want to keep lazy loading out of production (because let's face it, who needs surprises in production?), just call this method in your `AppServiceProvider`'s `boot` method:

```php
use Illuminate\Database\Eloquent\Model;

public function boot(): void
{
    Model::preventLazyLoading(! $this->app->isProduction()); // Don't invite lazy loading to the production party!
}
```

Next up, we have the `preventSilentlyDiscardingAttributes` method. Picture this: you're trying to set an attribute on your model during local development, but it's like that pesky ex who just doesn't listen. To make sure Eloquent throws a tantrum (in the form of an exception) instead of silently ignoring your requests when you try to set an unfillable attribute, give this method a shout:

```php
Model::preventSilentlyDiscardingAttributes(! $this->app->isProduction()); // Tell Eloquent not to be shy about throwing exceptions during local development!
```

Now that your models are ready to play by the rules (most of the time), it's time to unleash them on the world. Happy coding, Laravelistas!

 ## Flying High with Models

Alright, buckle up and fasten your seatbelts! After crafting a model and its swanky database table (check out our sweet [migration guide](/docs/{{version}}/migrations#generating-migrations) for more deets), it's time to dive into the world of data retrieval. Think of each Eloquent model as your personal aviator, guiding you through the vast skies of databases!

The `all` method on these models serves as our runway to take off and grab all records from their associated database table:

```php
use App\Models\Flight;

// Prepare for liftoff
$flights = Flight::all();

// Announce the names of each flight (just like an airport PA system)
foreach ($flights as $flight) {
    echo $flight->name;
}
```

<a name="building-queries"></a>
Now, if you're feeling a bit more adventurous and want to customize your queries (think of it as flying with autopilot off), head over to our [query builder guide](/docs/{{version}}/queries) for some fancy maneuvers!

 Alrighty, buckle up and let's dive into the realm of Eloquent! Think of it as your trusty sidekick at a high-stakes casino, but instead of cards or dice, we're dealing with data.

Our hero, the `all` method, pulls out all the stops and fetches every record from the model's table. But wait, this isn't just any common-or-garden sidekick—Eloquent models are actually undercover query builders! That's right, they can morph into a versatile, flexible toolbox of database queries whenever they need to step up their game.

So, here's where the fun begins:

```php
$flights = Flight::where('active', 1)
    ->orderBy('name')
    ->limit(10)
    ->get();
```

This snippet of code is our Eloquent model, undercover as a flight booking system, sneakily adding some extra conditions to its query. It's like a seasoned detective filtering through the crime database for only 'active' suspects and sorting them alphabetically by name—all before serving you up the top 10 results!

Now, just because Eloquent is a secret agent of queries doesn't mean it doesn't have friends in high places. Be sure to check out Laravel's [query builder](/docs/{{version}}/queries) documentation for a rundown of the various tricks up its sleeve. You can use these techniques whenever you feel like unleashing the full potential of Eloquent and making your queries dance to your tune!

Here's to making data retrieval as entertaining as an action-packed movie! 🍿🎬

 Ahoy there, coders! Sail with me into the realm of Laravel models, where data soars through the skies like a majestic flock of phpbirds.

First off, let's talk about refreshing your models - much like a jet engine getting a much-needed oil change mid-flight! Say you've got yourself an Eloquent model (we'll call him Captain Data) that's been retrieved from the database (let's say he's just landed in Paris).

Now, if you want to give this fella a quick touch-up before takeoff for the next destination (say, London), you can use the `fresh` method. It'll fetch Captain Data anew from the databases without affecting his current state:

```php
$flight = Flight::where('number', 'FR 900')->first(); // Captain Data lands in Paris

$refreshedFlight = $flight->fresh(); // Gives him a new boarding pass for London
```

But wait, there's more! If you want to give your model a full-on makeover with the latest data from the database (let's say Captain Data had an unscheduled layover), then you need the `refresh` method. Not only will it update Captain Data himself, but all his loaded relationships too:

```php
$flight = Flight::where('number', 'FR 900')->first(); // Captain Data lands in Paris

$flight->number = 'FR 456'; // He decides to join a different flight!

$flight->refresh(); // Gives him a new boarding pass for the updated flight and updates all his relationships

$flight->number; // "FR 900" (he couldn't resist coming back to us, can you blame him?)
```

So there you have it! Keep your Laravel models fresh as a daisy (or a phpbird) with these handy methods. Happy coding, and remember: never trust a model that doesn't get a fresh check-up every now and then!

 Alrighty, let's dive into the magical realm of Laravel Collections! You might think Eloquent is just a fancy barista pulling espressos from your database, but little do you know, it's actually spinning plates too. When Eloquent serves up multiple records with methods like `all` and `get`, what lands on your table isn't just any ordinary PHP array - nope, it's a sparkling, shimmering instance of `Illuminate\Database\Eloquent\Collection`!

Now, this isn't some circus act; it's Eloquent's way of saying "hey, I got more tricks up my sleeve!" The Collection class, in all its glory, extends Laravel's base `Illuminate\Support\Collection` class, offering a smorgasbord of [deliciously handy methods](/docs/{{version}}/collections#available-methods) for massaging your data like a pro.

Take the `reject` method, for instance. It's like your very own data dietitian, helping you trim the fat from collections based on the results of an invoked closure:

```php
$flights = Flight::where('destination', 'Paris')->get();

$flights = $flights->reject(function (Flight $flight) {
    return $flight->cancelled;
});
```

But wait, there's more! The Eloquent collection class doesn't just stop at Laravel's base collection methods. Oh no, it goes the extra mile and provides a few [extra-crunchy methods](/docs/{{version}}/eloquent-collections#available-methods) specifically tailored for juggling collections of Eloquent models.

And here's the cherry on top: since all Laravel collections are certified PHP iterables, you can loop over them like they're your favorite Sunday brunch buffet:

```php
foreach ($flights as $flight) {
    echo $flight->name;
}
```

Now that's what I call a data feast! So next time you're handling multiple records, remember - it ain't just an array, it's a Collection with a capital 'C' and a whole lot of flair. Bon appétit, data wranglers! 🥳🍽️🚀

 ### Eloquent's Magical Memory Box 🎩🔬

Let's face it, no one wants to deal with a brain cramp after loading tens of thousands of airplane tickets (Eloquent records)! The `all` or `get` methods are like trying to squeeze a herd of flying unicorns into a broom closet - disaster is inevitable! 🦄🚪

Fear not, for the mighty `chunk` method is here to save the day! This magical wand will whisk away a manageable portion of those sky-high models, leaving them in a cozy, memory-friendly pile for you to process.

To use this sorcery, simply point your wand at a model (in this case, our dear `Flight`) and utter:

```php
use App\Models\Flight;
use Illuminate\Database\Eloquent\Collection;

Flight::chunk(200, function (Collection $flights) {
    foreach ($flights as $flight) {
        // ... Perform some mystical incantations on the flights...
    }
});
```

The first number you'll conjure up is the size of each chunk, while the closure (the secret spell) will be cast for every batch retrieved from the database. Each batch of records will be delivered to the closure, one by one, like treats on a Halloween trick-or-treat trail!

Now, if you're updating those airplane tickets and filtering them based on some column, it's time to dust off your cloak and use the `chunkById` method. The regular `chunk` can be as unpredictable as a mischievous poltergeist in this situation, leading to results more frightening than a haunted house!

```php
Flight::where('departed', true)
    ->chunkById(200, function (Collection $flights) {
        $flights->each->update(['departed' => false]);
    }, column: 'id');
```

The `chunkById` and `lazyById` methods cast their own enchantments, adding "where" conditions to the query. This means you should group your own conditions within a spell (closure) for optimal results:

```php
Flight::where(function ($query) {
    $query->where('delayed', true)->orWhere('cancelled', true);
})->chunkById(200, function (Collection $flights) {
    $flights->each->update([
        'departed' => false,
        'cancelled' => true
    ]);
}, column: 'id');
```

 ### Chunking with Lazily Loaded Collections (aka The Magical Bag O' Models)

Ah, the Laravel way! If you've ever needed to sift through a mountain of flight data like a modern-day Goldilocks, you'll love our Lazy Collections. Picture it like this: instead of lugging around giant, unwieldy chunks of data (we're looking at you, `chunk` method), we give you a nifty bag o' models, each magically appearing one by one as you rummage through!

```php
use App\Models\Flight;

foreach (Flight::lazy() as $flight) {
    // One flight at a time, just the way Goldilocks prefers it.
}
```

But here's where things get really interesting - if you're updating a column on your flights while you're already digging through them, you wouldn't want to accidentally skip any, right? No worries, we've got you covered with the `lazyById` method. This clever chap grabs only the models whose `id` is strictly greater than the last model from the previous chunk.

```php
Flight::where('departed', true)
    ->lazyById(200, column: 'id') // Start from flight 201 onwards.
    ->each->update(['departed' => false]);
```

And if you fancy some reverse sorting (who doesn't?), you can always use the `lazyByIdDesc` method to filter your results based on the descending order of the `id`.

<a name="cursors"></a>
Now, aren't you glad you have Laravel in your corner, helping you navigate those mountains of data like a boss?

 Alrighty then! Let's dive into the magical world of Laravel cursors, a memory-saving superhero that swoops in to save your application from crashing under the weight of tens of thousands of Eloquent model records.

Just like our friendly neighborhood Spiderman, the cursor method slings its web to only catch one model at a time, significantly reducing the amount of memory used during iterations. But don't worry, it's not shy about jumping in for more when needed!

> [!ATTENTION]
> Remember, this superhero only carries one model at a time, so it can't load up on relationships like your friendly neighborhood Avengers. If you need some relationship action, consider calling in the [lazy method](#super-powered-lazy-collections) instead.

Behind the scenes, the cursor method uses PHP generators (think of them as magical incantations that summon models on demand), so you can rest easy knowing there's no need for a crystal ball to see the future:

```php
use App\Models\Flight;

foreach (Flight::where('destination', 'Zurich')->cursor() as $flight) {
    // ...
}
```

The cursor method returns an `Illuminate\Support\LazyCollection` instance, giving you the power to use many of your favorite collection methods while keeping memory consumption in check:

```php
use App\Models\User;

$users = User::cursor()->filter(function (User $user) {
    return $user->id > 500;
});

foreach ($users as $user) {
    echo $user->id;
}
```

Although the cursor method is a memory saver extraordinaire, it can still run out of breath if faced with too many models at once (thanks to PHP's PDO driver caching all raw query results in its buffer). If you find yourself dealing with an overwhelming number of Eloquent records, it's time to call in the [lazy method](#super-powered-lazy-collections) for backup.

<a name="advanced-subqueries"></a>
Now that we've covered the basics, it's time to explore the world of advanced subqueries! (Just wait till you see this guy in action!) Stay tuned for more fun and educational adventures with Laravel! 🚀🌟

 Ahoy there, query pirates! You've ventured beyond the shallow end of SQL and now find yourself navigating the deep waters of subqueries. Fear not, for we'll guide you through these treacherous seas with a hearty laugh and a dash of sass.

<a name="subquery-selects"></a>

#### Subquery Selects

Subquery selects allow you to nest one SQL query within another like Russian dolls in a game of Balalaika Tetris. The outer query can reference the inner query, and it's all done with such finesse that even Captain Kirk would be impressed.

Here's an example of a subquery in Laravel:

```php
$users = DB::table('users')
    ->whereIn('id', function ($query) {
        $query->select('user_id')
            ->from('friendships')
            ->whereColumn('user_id', '=', 'users.id');
    })
    ->get();
```

This little number is saying: "Gimme all the users whose IDs are friends with at least one other user." Sounds like a party, doesn't it? 🎉🥳

<a name="subquery-joins"></a>

#### Subquery Joins

Now, buckle up, because we're about to enter the realm of subquery joins. These are like when you find a genie in a bottle and it grants you three wishes - but instead of genies, it's just SQL queries helping each other out.

```php
$posts = DB::table('posts')
    ->where(function ($query) {
        $query->where('user_id', 1)
            ->orWhereIn('user_id', function ($innerQuery) {
                $innerQuery->select('user_id')
                    ->from('friendships')
                    ->whereColumn('friend_id', '=', DB::raw('users.id'));
            });
    })
    ->get();
```

This one is saying: "Give me all the posts either written by user 1 or written by any of user 1's friends." Sounds like a pretty good deal, if I do say so myself! 🤑💸

And there you have it, chums! Armed with these subquery skills, you can sail the seas of SQL with confidence and charm. Remember to have fun along the way, because that's what makes the journey worthwhile! 🎉🚀

 Alright, buckle up, because we're about to embark on a thrilling query adventure in Laravel!

#### Subqueries: The Secret Sauce for Table Bonding 🍔

Eloquent isn't just another boring date at the disco, oh no, it comes packing some advanced subquery swag that lets it mingle with related tables like a boss! Picture this: we've got a table of flight `destinations` and a table of `flights` bound for those destinations. The `flights` table keeps a record of the `arrived_at` timestamp, marking when each flight touched down at its destination.

Now, with the subquery powers bestowed upon the query builder's `select` and `addSelect` methods, we can scoop up all the `destinations` and the name of the last flight to arrive at each one in a single swoop:

```php
use App\Models\Destination;
use App\Models\Flight;

Here's where the magic happens! We're using Destination as our wingman, helping us fetch data from Flight while keeping things casual with a few lines of code.

return Destination::addSelect([
    'last_flight' => Flight::select('name')
        ->whereColumn('destination_id', '=', 'destinations.id') // Just like two peas in a pod!
        ->orderByDesc('arrived_at') // Sorting them out, who else but Laravel can do this?
        ->limit(1) // And just like that, we've got our winner!
])->get();
```

<a name="subquery-ordering"></a>
And there you have it, folks! A single query that grabs all the destinations and their last arriving flights. That's what I call a smooth dance floor move! 💃🕺️

 Alright, buckle up, aviators! Let's dive into the world of Laravel's query builder where we're about to perform a subquery order like it's the final approach to landing on a busy runway.

Imagine you've got a flight schedule with a bunch of destinations and flights, and you want to find out which destination was the last one to have a flight land. Sounds like a mission for your trusty query builder!

Here's where the magic happens:

```php
return Destination::orderByDesc(
    Flight::select('arrived_at') // Grab the landing times, y'all!
        ->whereColumn('destination_id', 'destinations.id') // Match the destinations, like a perfect pair of gloves
        ->orderByDesc('arrived_at') // Sort by time, with the latest landing first
        ->limit(1) // One landing time per destination, thanks!
);
```

And voila! With this single database query, you've got yourself a destination that just saw its last flight touch down. Now go forth and conquer those runways, you database-mastering ninja! 🚀💥🛬

 ## Soaring Solo with Laravel's Model BFFs!

Ever felt like you just want to cuddle up with one model instead of a whole bunch? Well, my friend, that's where our dashing duo - `find`, `first`, and the slightly mysterious `firstWhere` come into play!

Unlike their collection counterparts, these gents don't bring along a whole gang of models to the party. Instead, they graciously return a single model instance:

```php
use App\Models\Flight;

// Let's find ourselves a flight by its primary key...
$flight = Flight::find(1);

// Here we're seeking out the first flight that's active and ready to fly...
$flight = Flight::where('active', 1)->first();

// If 'firstWhere' is more your style, go ahead and give it a whirl!
$flight = Flight::firstWhere('active', 1);
```

But what if you find yourself in a hangar with no planes? These chivalrous charmers know just how to handle that: the `findOr` and `firstOr` methods will return a single model or, if none are found, they'll politely execute the given closure. The returned value from the closure then becomes your new best friend:

```php
$flight = Flight::findOr(1, function () {
    // ...oh look, it's our backup plane!
});

$flight = Flight::where('legs', '>', 3)->firstOr(function () {
    // ...it looks like we have to send out an SOS for a new plane...
});
```

<a name="not-found-exceptions"></a>
Oh, and let's not forget about those pesky not-found exceptions. In case you ever stumble upon empty hangars, these methods will kindly toss you a life jacket in the form of a closure:

```php
Flight::findOrFail(1); // This guy throws an exception if no flight is found.
```

 Alrighty, let's dive into the exciting world of Laravel exceptions! Now, if you ever find yourself in a pickle where your model is nowhere to be found (like a misplaced pair of socks), you can chuck an exception its way. This comes in super handy when you're working on routes or controllers. The `findOrFail` and `firstOrFail` methods are your new best friends here - they'll scour the database, retrieve the first result of the query, but if Mr. Model is nowhere to be found, they'll hurl an `Illuminate\Database\Eloquent\ModelNotFoundException`.

```php
$flight = Flight::findOrFail(1); // Hey! We found your flight, Captain! But what if we didn't? Well, we'd throw a party... for the exception!

$flight = Flight::where('legs', '>', 3)->firstOrFail(); // If no flight with more than three legs is found, it's time to call the avian psychologist!
```

Now, if you let this `ModelNotFoundException` run wild without catching it, it'll auto-pilot a 404 HTTP response right back to your client. Talk about a high-speed chase!

```php
use App\Models\Flight;

Route::get('/api/flights/{id}', function (string $id) {
    return Flight::findOrFail($id); // If this doesn't find the flight, it's time to start playing missing person games with the flight data!
});
```

Happy coding, and remember - when in doubt, throw an exception! 🚀💥

 Ahoy there, Laravel pirate! Sail with me through the stormy seas of database operations, where the `firstOrCreate` and `firstOrNew` methods are our trusty compass and map.

First off, let's talk about `firstOrCreate`. Picture this: ye be searching for a specific record in yer database, but it's gone walkies. Fear not! With `firstOrCreate`, ye can either find the blighter or create a brand new one if it's vanished without a trace. How does it work, ye ask? Simple as a shipwrecked sailor's wish for rum: it merges the first array argument with an optional second array to conjure up a spankin' new record if the original ain't found!

Now, `firstOrNew` is more like a friendly sea creature that'll either lure ye towards the existing record or entice you to craft a new one. Just like `firstOrCreate`, it embarks on a quest for your desired record, but if it comes back empty-handed, it'll bestow upon ye a freshly minted model instance. Be aware though: this ship hasn't been anchored in the database yet! If ye want to keep it from drifting away, ye'll need to call its `save` method and set sail for permanent waters.

Here be examples, matey:

```php
use App\Models\Flight;

// Sail towards a flight by name or create one if it don't exist yet...
$flight = Flight::firstOrCreate([
    'name' => 'London to Paris'
]);

// If ye be after a specific flight, and it's not around, ye can create one with extra attributes...
$flight = Flight::firstOrCreate(
    ['name' => 'London to Paris'],
    ['delayed' => 1, 'arrival_time' => '11:30']
);

// If ye be unable to locate a flight by name, ye'll get a new Flight instance instead...
$flight = Flight::firstOrNew([
    'name' => 'London to Paris'
]);

// If ye be on the lookout for a flight from Tokyo to Sydney, and it ain't been found yet, ye'll receive a fresh Flight instance with extra attributes...
$flight = Flight::firstOrNew(
    ['name' => 'Tokyo to Sydney'],
    ['delayed' => 1, 'arrival_time' => '11:30']
);
```

 ### Counting, Summing, and Maximizing Your Queries!

In the thrilling world of Eloquent models, we don't just serve up fancy airline seats; we also whip up some mean data aggregates! So buckle up as we take a fun-filled journey through the `count`, `sum`, `max`, and other [aggregate methods](/docs/{{version}}/queries#aggregates) offered by Laravel's query builder (*cue drumroll*).

Ready for some numerical shenanigans? Here we go:

```php
$count = Flight::where('active', 1)->count(); // How many flights are currently in the sky with active status?

$max = Flight::where('active', 1)->max('price'); // What's the priciest flight that's actually flying right now?
```

But hey, who needs models when you can get a simple scalar value, am I right? Just remember, these methods don't serve you an Eloquent model instance like a fancy dinner at a five-star restaurant. Instead, they dish up some good ol' fashioned numbers!

 Ahoy there, code-wrangling swashbucklers! You've come to the right place if you're ready to dive into the high seas of Laravel model manipulation. Buckle up as we sail through the fascinating world of inserting and updating models. Aye, aye, captain!

<a name="inserts"></a>
### Inserting Models: The Pirate's Treasure

Adding new models is like discovering hidden treasure, and Laravel makes it as easy as navigating a pirate ship through a storm! Use the trusty `fill()` method to pack your model with data. Here's an example:

```php
$newUser = new App\Models\User;
$newUser->fill([
    'name' => 'Captain Swashbuckler',
    'email' => 'swashbuckler@pirate.com',
]);

// Save the treasure, matey!
$newUser->save();
```

And just like that, you've added a new user to your database. Just remember to watch out for the Kraken – that save() method can be a bit of a rogue wave at times!

<a name="updates"></a>
### Updating Models: The Polly Parrot's Squawk

Updating models is like teaching Polly the parrot to say something new. You want her to squawk out the latest updates, right? To update a model in Laravel, you can use the `update()` method and pass an associative array containing the data you want to change. Watch this:

```php
$user = App\Models\User::find(1); // Find our parrot (user) by id
$user->name = 'Captain Jack Sparrow'; // Change what we want Polly to squawk out loud

// Train Polly to say her new name
$user->save();
```

And once again, the pirate ship sets sail with a new name! Just remember to keep your code clean and dry – no need for a barrel of rum here!

Now that you've learned the ropes on inserting and updating models, it's time to set sail on your own quest. Happy coding, brave souls! May all your SQL queries be successful and your controllers never leak! 🏴‍☠️🐘🚀

 Ahoy there! Let's dive into the world of data manipulation in Laravel, where we're not just fishing for models, but also casting our line to add new catches to the database! Eloquent, being our trusty fishing rod, simplifies the process like a pro angler.

To drop a new record into the ocean of data, you first need to create a new model instance and bestow it with attributes. Think of it as naming your fish before throwing it into the pond!

```php
<?php

namespace App\Http\Controllers;

use App\Models\FishTank; // Let's rename Flight to FishTank for a bit of fun!
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FishTankController extends Controller
{
    /**
     * Add a new fish to the tank.
     */
    public function splash(Request $request): RedirectResponse
    {
        // Ensure the request is squeaky clean...

        $fish = new FishTank; // Instantiate a new model instance

        $fish->name = $request->name; // Give it a name from the incoming HTTP request

        $fish->save(); // Cast it into the database!

        return redirect('/tank');
    }
}
```

In this whimsical example, we've bestowed our new model with a `name` attribute from the incoming HTTP request. Once `save()` is called, our little fishy friend finds its new home in the database. The model automatically gets tagged with a `created_at` and `updated_at` timestamp when it's saved, so no need to worry about setting them manually.

Now, if you'd like to add your fishy friend within a secure aquarium transaction, use the `saveOrFail()` method:

```php
$fish->saveOrFail(); // If anything goes awry during the save, our transaction will perform an aquatic CPR!
```

Alternatively, you can employ the `create()` method for a one-liner magic trick. The newly created model instance will be handed back to you:

```php
use App\Models\FishTank;

$fish = FishTank::create([
    'name' => 'Goldfish Gordon', // A new goldfish with style!
]);
```

Before using the `create()` method, don't forget to specify either a `Fillable` or `Guarded` attribute on your model class. This precaution is taken because by default, Eloquent models are well-protected against unwanted mass assignments (like an octopus sneaking extra arms into the tank!). For more info on mass assignment, please consult our [mass assignment documentation](#mass-assignment).

Now go forth and conquer the database with your newfound knowledge and a touch of humor! Keep those fish tanks populated and happy fishing!

 ### Updatin' Thangs!

Alright, buckle up for a ride through the wild world of model updates! The `save()` method is like the cherry on top of your database sundae - perfect for sprucin' up models already chillin' in your database. To get things started, track down your model with `Flight::find(1)`, then give it a fancy new name like 'Paris to London', and voila! Call the save() method, and our system takes care of updating the `updated_at` timestamp for ya - no need to beg or plead, just sit back and relax:

```php
use App\Models\Flight;

$flight = Flight::find(1);
$flight->name = 'Paris to London';
$flight->save();
```

Feelin' adventurous? Wrap your model updates in a transaction with the `updateOrFail()` method. If something goes awry during the update, our system will roll back the transaction faster than you can say "oops!"

```php
$flight->updateOrFail(['name' => 'Paris to London']);
```

Sometimes, you might need to update an existing model or create a new one if none exists. The `firstOrCreate()` method is the perfect wingman for that situation - it handles the save for ya!

Here's an example of where our flight might need a price drop if it already exists or a new destination if it doesn't:

```php
$flight = Flight::updateOrCreate(
    ['departure' => 'Oakland', 'destination' => 'San Diego'],
    ['price' => 99, 'discounted' => 1]
);
```

When you're updating models with methods like `firstOrCreate()` or `updateOrCreate()`, it can be tricky to know whether a new model was born or an existing one got a makeover. The `wasRecentlyCreated` property helps out here - it lets ya know if your model made its debut during this lifecycle:

```php
$flight = Flight::updateOrCreate(
    // ...
);

if ($flight->wasRecentlyCreated) {
    // A new flight record was just inserted...
}
```

And that's a wrap! Now you know how to make your models shine brighter than a disco ball at a 70's party. Happy updating!

 Alright, buckle up, folks! Let's dive into the world of bulk updates in Laravel – where you can update multiple flights without breaking a sweat (or your keyboard). Imagine you're a flight controller trying to give San Diego a little extra love by delaying all active flights bound for that sunny paradise.

```php
// Just like a well-planned travel itinerary, we've got our destinations mapped out!
Flight::where('active', 'yes, captain!')
    ->where('destination', 'San Diego')
    // Tada! Flights delayed, just in time for the sunset
    ->update(['delayed' => 1]);
```

Now, this magical `update` method requires an array of column and value pairs – perfect for a quick makeover on your flights. Once you've given your models a new look, it'll return the number of affected rows – just so you know how many passengers are now stuck with you!

> [!ATTENTION]
> Proceed with caution when deploying mass updates via Eloquent. Why? Well, these flights never actually show up in your models during the update process! No need to worry about saving or updated events for this bunch – they're flying straight into the database without stopping for refreshments (or event listeners).

Hope you enjoyed this little journey through Laravel land! Happy coding! 🚀🛬

 Ahoy there, shipmates! Buckle up as we dive into the nitty-gritty of Eloquent attribute shenanigans! These methods are like the Captain's log for your models, helping you keep tabs on their internal state and the antics of their attributes.

First off, we have the `isDirty` method. This sea shanty tells you if any of the model's attributes have been tampered with since they were first boarded aboard the good ship Eloquent. You can even inquire about specific attributes or a list of them to see who's been messing around with what.

Next, there's the `isClean` method. It serves as the barman, telling you which attributes have stayed put since they joined the crew. Like `isDirty`, you can query for specific attributes if you're curious about a certain rascally pirate.

Now, for the fun part – the `wasChanged` method! This parrot on your shoulder will let you know if any attributes were altered when the model last took a plunge into the database waters. Again, feel free to inquire about specific attributes or groups of them.

The `getOriginal` method is like finding the original ship's log – it spills the beans on the attributes as they were first discovered. You can also ask for specific attributes if you're interested in a certain crewmember's backstory.

Last but not least, we have `getChanges` and `getPrevious`. These methods serve as your navigational charts, showing you which attributes changed during the last voyage and what they were before the ship set sail.

Now that you've got the hang of these swashbuckling methods, you can sail the high seas of data manipulation with confidence! Arrrr matey! 🤝🏴‍☠️

 Alrighty, grab your coder hat and let's dive into the thrilling world of Laravel mass assignment! 🚀

First off, imagine you're a superhero saving the day with a single PHP statement. The `create` method is your trusty sidekick, helping you create a brand-new model hero just like that! 🦸‍♂️

```php
use App\Models\SuperHero;

$superman = SuperHero::create([
    'name' => 'Clark Kent',
]);
```

But, before our sidekick can start saving the world, it needs a badge to prove its trustworthiness. In our case, that badge is either a `Fillable` or `Guarded` attribute on your model class. These attributes are required because by default, all Eloquent models come with a secret superpower - protection against mass assignment vulnerabilities!

A mass assignment vulnerability occurs when a shady villain passes an unexpected request field and changes a column in your database that you didn't expect. For example, a mischievous user might send a `lives_under_rock` parameter, which could allow the user to change their address without being noticed! 😈

To make our superhero trustworthy, we should define which attributes we want to be mass assignable. We can do this using the `Fillable` attribute on the model. For example, let's make the `name` attribute of our SuperHero model mass assignable:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name'])]
class SuperHero extends Model
{
    // ...
}
```

Once we've defined which attributes are mass assignable, our superhero can start saving the world with the `create` method. The `create` method returns the newly created superhero instance:

```php
$superman = SuperHero::create(['name' => 'Clark Kent']);
```

But what if you already have a superhero instance and want to give it a new identity? Simply use the `fill` method to update its attributes:

```php
$superman->fill(['name' => 'Super Clark']);
```

Now that our superhero is all set, it's time to save the day! 💪🦸‍♂️

 Ah, the world of Laravel! Where data meets humor and everything is a little bit magical. Let's talk about JSON columns, shall we?

#### Mass Assignment and JSON Columns: The Magic of Data Manipulation (with a dash of comedy)

When dealing with JSON columns, it's not just about shoving data into them haphazardly. No, no! Each column needs to be invited to the party, so to speak, by being listed in your model's `Fillable` attribute. Why? Because Laravel is a responsible host who checks IDs at the door for security reasons.

```php
use Illuminate\Database\Eloquent\Attributes\Fillable;

// We're throwing a JSON party! Who's invited? Only options->enabled.
#[Fillable(['options->enabled'])]
class Flight extends Model
{
    // ...
}
```

And here comes the twist: Laravel is also a stickler for rules, so when you're using the `Guarded` attribute, it won't let you update nested JSON attributes. It's like having a bouncer who only lets in the main guests but keeps the sub-guests waiting outside.

So, there you have it! A little bit of Laravel magic, a dash of humor, and a lesson in data security. Keep on coding, my friends! 🚀🎊🎉

 Unleashing the Power of Mass Assignability! (But remember, with great power comes great responsibility!)

If you're feeling a tad lazy and want your model attributes to be as obedient as a well-trained puppy, you can use the `Unguarded` attribute on your model. But beware, unguarding your model is like giving your pet the keys to the fridge - it might end up with more treats than it bargained for!

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Unguarded as UnleashThePowerOfMassAssignability;
use Illuminate\Database\Eloquent\Model;

#[UnleashThePowerOfMassAssignability]
class Flight extends Model
{
    // ...
}
```

<a name="mass-assignment-exceptions"></a>
Now, remember when you use `Unguarded`, it's like giving your pet the freedom to roam around without a leash. You should always double-check and hand-craft the arrays passed to Eloquent's `fill`, `create`, and `update` methods, ensuring they only contain the treats (er, attributes) you want your model to consume:

```php
// Hand-crafted array of treats (attributes) for your model
$flightTreats = [
    'departure' => 'Dubai',
    'arrival' => 'London',
    'airline' => 'Emirates',
    // Only include the attributes you want to set here!
];

// Feed your model with these treats (attributes)
$flight = Flight::create($flightTreats);
```

And that, my friend, is how you unleash the power of mass assignability in a responsible manner! (Well, as responsible as one can be when dealing with pets and Laravel.)

 Ahoy there, intrepid Laravel developers! Let's dive into the thrilling world of Mass Assignment Exceptions - where secrets are whispered to models under the cover of darkness and forgotten forever!

By nature, attributes that aren't filled with the `Fillable` attribute charm are silently shushed away during mass-assignment operations. In production, this is as quiet as a mouse in a library, but during local development, it's like watching paint dry – exciting, right? So, you might wonder why your model changes refuse to cooperate when you're just trying to flex your creative muscles.

But fear not! Laravel offers the solution with an explosive dose of excitement: the `preventSilentlyDiscardingAttributes` method! This is like sprinkling rocket fuel on a boring development cycle. Here's how you can trigger it:

```php
use Illuminate\Database\Eloquent\Model;

/**
 * A rousing call to arms for any application services.
 */
public function boot(): void
{
    Model::preventSilentlyDiscardingAttributes($this->app->isLocal());
}
```

In this code, we're essentially saying: "Listen up, models! If we're in development mode, don't sneak away my unfillable attributes without a fight!" So go ahead and add some pizazz to your development process by keeping things loud and clear – just like a roller coaster ride at an amusement park! 🎢🚀💥

 Alrighty then! Buckle up, because we're about to dive into the thrilling world of database operations with a twist of humor, all thanks to Laravel's `upsert` method!

This nifty little function is like a Swiss Army knife for your records. It can either update or create them in one atomic, indivisible operation - just like Batman's wrist gadgets but with less capes and more databases. The first argument is where you stash the new values, while the second one lists the columns that make each record unique within its table. Lastly, the third argument is an array of columns that will be updated in case a matching record already exists in the database - it's like having a magic wand for your data!

```php
Airplane::upsert(
    [
        ['takeoff_city' => 'Oakland', 'final_destination' => 'San Diego', 'fares' => 99],
        ['takeoff_city' => 'Chicago', 'final_destination' => 'New York', 'fares' => 150]
    ],
    uniqueBy: ['takeoff_city', 'final_destination'], update: ['fares']
);
```

> [!CAUTION]
> Don't forget to add a "primary" or "unique" index on the columns listed in the second argument of `upsert`. If you don't, our friendly neighborhood Spider-dev (SQL developer) won't be able to help find existing records. Also, if you're using MariaDB or MySQL, they might not listen to your specific instructions and use their own indexes instead – a classic case of stubbornness in action!

 Ahoy there, matey! Let's talk about deleting models in Laravel, shall we? It's not as grim as it sounds, promise!

To vanquish a model with a single bound, you can summon the mighty `delete` method upon your model instance:

```php
use App\Models\Aircraft; // You know, like the Titanic, but hopefully without the iceberg.

$aircraft = Aircraft::find(1); // We've found our culprit!

$aircraft->delete(); // And sent it to the depths of Eloquent's database.
```

But what if you fancy yourself as a daredevil and want to delete the model within a transaction? Fear not, my friend! You can utilize the `deleteOrFail` method. If anything goes awry during the delete, it'll be like the Titanic all over again, but with your transaction automatically rolling back instead of sinking!

```php
$aircraft->deleteOrFail(); // One misstep and down go we go!
```

Now you know that deleting models in Laravel can be as fun as a sea shanty and nearly as dangerous as navigating the treacherous waters of Bermuda Triangle—or perhaps not, but at least you have all your data safe and sound! 🤘🏼

 Ahoy there, Laravel pirates! Let's set sail through the seas of deletion, shall we?

#### Vanquishing an Existing Model with Its Magic Key (AKA Primary Key)

In the pirate tale above, we were initially searching high and low for our fabled model before giving it the old heave-ho. But, ye scurvy dogs, if you've got the magic key of your model, you can delete it like a true buccaneer without even saying "Avast!" to "retrieve" it first. Just holler at the `destroy` method and watch 'em walk the plank:

```php
The ship 'Flight' is now doomed! Calling destroy on its primary key 1... *splash*

The ships 'Flight', 'Flight', and 'Flight' are all sinking! destroy() takes multiple keys, like so: Flight::destroy(1, 2, 3)

Or if you're feeling fancy, gather ye primary keys in an array and call destroy on that! Flight::destroy([1, 2, 3])

And for the extra-fancy, turn your primary keys into a collection (we'll teach ya later!) and call destroy on that, too: Flight::destroy(collect([1, 2, 3]))
```

> [!YARRRR]
> The `destroy` method might be a one-legged parrot at heart, but it takes its job seriously. It loads each model individually and calls the "delete" method on them, so that the `deleting` and `deleted` events are properly dispatched for each shipmate.

<a name="deleting-models-using-queries"></a>
Now, if your models have been given a second chance at life through [soft deletions](#soft-deleting), you can unleash the kraken on 'em with the `forceDestroy` method:

```php
The ship 'Flight' is about to meet its end! Calling forceDestroy on its primary key 1... *splash* (this time, for good)
```

 Alrighty then! Let's dive into the world of Eloquent query deletions, shall we? Imagine you're a pilot trying to scrub those pesky inactive flights off your roster. No worries, our trusty Eloquent queries are here to help!

```php
// Marking all inactive flights for takeoff out of service 🚀🛬
$inactiveFlightClearance = Flight::where('active', 0)->delete();

// Don't forget to check if the clearance was granted 😉
if ($inactiveFlightClearance) {
    echo "Inactive flights cleared for deletion!";
} else {
    echo "Looks like those inactive birds are sticking around. Better luck next time, captain.";
}
```

Now, if you're feeling really bold and want to wipe out the entire flight table, well buckle up for this wild ride!

```php
// Time for a complete airport shutdown (just kidding... sort of) ✈️🛫
$airportLockdown = Flight::query()->delete();

// Make sure passengers are informed about the lockdown 📣
if ($airportLockdown) {
    echo "All flights have been grounded. Please find alternative transportation.";
} else {
    echo "Flight schedules remain unchanged for now, folks!";
}
```

> [✋️ WARNING ✋️]
> When you pull off a mass delete via Eloquent, remember that the `deleting` and `deleted` model events won't be dispatched for the evicted models. It's because they weren't even invited to the party when we threw them out!

[✈️ Bon Voyage ✈️] Now that you know how to delete those pesky models, grab your luggage and head on over to the next section of this fabulous documentation journey!

 ### Soft-Deletey McSoftFace (or, How I Learned to Stop Worrying and Love the Trash Can)

Oh, where have you been? Hiding in the dark recesses of your database, playing hide-and-seek with your precious records? Well, fear not! For Eloquent has come to your aid once again, this time in the form of a charming trait named SoftDeletes.

Think of it as the invisible cloak of the database world – it makes your models disappear, but only temporarily. Instead of obliterating them from existence like some rogue Galactic Empire, it sets a `deleted_at` attribute on them, marking their disappearance date and time. To bestow this magical trait upon a model, simply add `Illuminate\Database\Eloquent\SoftDeletes` to your trait list:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Flight extends Model
{
    use SoftDeletes;
}
```

Now, let's add a `deleted_at` column to your database table. Laravel's trusty schema builder comes equipped with the perfect tool for this:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('flights', function (Blueprint $table) {
    $table->softDeletes();
});
```

And if you ever want to undo the soft deletion, simply call `$table->dropSoftDeletes()`.

When you summon the mighty `delete` method on a model, it'll set the `deleted_at` column accordingly. But don't worry – the record will still be sitting pretty in the table, ready for its grand comeback. When querying soft-deleted models, they'll vanish like Houdini from your results, leaving only the living and the proudly undeleted behind.

To check if a model has been sent on a one-way trip to Siberia (er, deleted), you can employ the `trashed` method:

```php
if ($flight->trashed()) {
    // Oh noes! This flight's gone missing!
}
```

So there you have it – a lighthearted guide to soft deleting in Laravel. Now, go forth and save your records from the cold embrace of eternity! Just remember: every deleted model is only as dead as the next migration... or something like that.

 Alright, let's get this party started! You know the drill – a model got deleted and now you're thinking, "Whoa, too soon!" Well, have no fear, Laravel is here to help you resurrect that model from the dead. Let's call it "un-zombifying" instead of restoring, shall we?

#### Un-Zombifying Soft Deleted Models

So, your model went on a one-way trip to Modelville Cemetery, and now you want to bring it back to life. No problemo! To un-zombify a soft deleted model, simply summon the `restore` method like a Jedi calling upon the Force:

```php
$flight->unZombify();
```

But wait, there's more! You can also un-zombify multiple models at once. Think of it as throwing a model resurrection party! However, remember that this will not send out any invitations (model events) to those who were brought back from the afterlife:

```php
Flight::withTrashed()
    ->where('airline_id', 1)
    ->unZombify();
```

And if that's not enough, you can even un-zombify models when building relationship queries! Think of it as creating an undead family tree:

```php
$flight->history()->unZombify();
```

<a name="permanently-deleting-models"></a>
But what if you want to perform a final exorcism and permanently delete the model from existence? Well, Laravel's got your back. Just call upon the `forceDelete` method:

```php
$flight->vanishFromExistence();
```

And remember, with great power comes great responsibility – be sure to use this method wisely! 🕶️💥

 Ah, dear reader! Fear not if you find yourself in a situation where you've got a model acting like a stubborn houseguest that just won't leave - it's time to break out the big guns and give 'em the ol' force delete!

Now, don't worry, we're not talking about pulling a Dwight Schrute here and physically tossing them out the window (that would be messy). Instead, we employ the magic of Laravel's `forceDelete` method. This mystical incantation will permanently banish that pesky model from your database table, ensuring it'll never haunt your records again:

```php
$flight->forceDelete();
```

But wait! There's more! If you find yourself in a complex Eloquent relationship situation where you need to delete related models with precision and flair, look no further. The `forceDelete` method can also be used as your secret weapon when building queries:

```php
$flight->history()->forceDelete();
```

Just remember, once a model is force deleted, it's gone for good - so make sure you're absolutely certain before pulling that trigger! Happy deleting! 😈

 Ahoy there, intrepid Laravel developer! Today we're going to delve into the captivating world of soft deleted models – a veritable treasure trove of information that'll have you feeling like a master of the database realm. Buckle up, buttercup, it's gonna be a wild ride!

#### <a name="including-soft-deleted-models"></a>Including Soft Deleted Models

First things first: let's ensure that soft deletes are enabled on your model. To do this, unleash the power of the `useSoftDeletes()` method and call it upon thy model class, like so:

```php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class User extends Model
{
    use Notifiable;
    use SoftDeletes;
}
```

By invoking this magical incantation, your model will now have the ability to be soft deleted – but what does that even mean? Well, instead of vaporizing models entirely when they're no longer needed, soft deletes allow you to maintain their database presence while marking them as inactive. A bit like those pesky ghosts haunting old mansions; they're there, but you can't interact with them like normal folk.

#### <a name="retrieving-soft-deleted-models"></a>Retrieving Soft Deleted Models

Now that your model is equipped with the power of soft deletes, it's time to put it to use! To retrieve soft deleted models, all you need to do is utilize the trusty `withTrashed()` method, and voila – just like that, you can see the ghostly apparitions of your once-living data.

```php
$users = User::withTrashed()->get();
```

You'll notice these spectral entities will appear in your results with an additional `deleted_at` timestamp, indicating the moment they shuffled off this mortal coil. But fear not! With a simple `whereNotNull('deleted_at')`, you can filter out the living from the dead:

```php
$softDeletedUsers = User::withTrashed()->whereNotNull('deleted_at')->get();
```

#### <a name="restoring-soft-deleted-models"></a>Restoring Soft Deleted Models

Sometimes, you may find that the spectral entity of a once-living model requires resurrection. To bring it back to life, merely call upon the `restore()` method, and watch as it springs forth from the digital grave, ready for action once more:

```php
$user = User::withTrashed()->find(1);
$user->restore();
```

And there you have it! With soft deletes in your arsenal, you can now dance with ghosts, converse with spirits, and tame the untamed database – all while retaining the cleanliness of your codebase. Now that's what I call a win-win situation!

 Alright, let's take a whack at this Laravel doc with a bit of humor and sass! Here we go:

#### Unleashing the Undead Models! (Or: Soft Deleted Models)

Don't worry, we won't call the ghostbusters just yet. In our Laravel world, soft deleted models are like those pesky phantoms who haunt your query results. But fear not! We can summon them with a simple command – it's like calling upon Banquo at the table, but less disturbing to dinner guests.

To bring forth the ghostly models, cast this incantation:

```php
use App\Models\Flight;

$flights = Flight::exorcise()  // Just kidding! It's `withTrashed()` instead
    ->where('account_id', 1)
    ->get();
```

And don't forget, the `withTrashed()` method isn't just for solo acts. If you need a posse of ghostly models, summon them with this group chant:

```php
$flight->history()->exorciseAgain()  // That's still a joke. It's `withTrashed()` for relationships too!
    ->get();
```

<a name="retrieving-only-soft-deleted-models"></a>
Now, if you're feeling extra paranormal, maybe you want only the ghostly models – no living ones allowed. Well then, we have a spell for that too:

```php
use App\Models\GhostFlight; // You get it! GhostFlights are soft deleted models.

$phantomFlights = GhostFlight::onlyGhosts()  // Still joking. It's `onlyTrashed()` instead
    ->where('account_id', 1)
    ->get();
```

And that, my friend, is how you summon and wrangle your soft deleted models in Laravel, all while keeping things light and lively! Happy coding, and remember: don't feed the ghosts after midnight.

 Ahoy there, Captain! Sail the seas of data with us as we dive into the murky depths where models have taken a little siesta - the Land of Soft Deleted Models! 😴🌊

To navigate this mysterious land, you'll need our trusty compass: the `onlyTrashed()` method! Just steer your Laravel vessel towards it, and voila! 🛳️🧭

```php
$flights = Flight::onlyTrashed() // Don't forget to grab a life vest (airline_id=1)
    ->get(); // Hoist the anchor and set sail!
```

Now, you can enjoy your journey, knowing that only the soft deleted models are on board. Happy cruising! 🚁🎉

 ## Trimming Flying Circus Models (The Magical Airborne Model Pruning Guide)

Oh, flighty developers! Sometimes we find ourselves stuck with old planes that've lost their oomph, or maybe you're just running out of hangar space. No worries, Laravel has a nifty trait called `Prunable` (not to be confused with a fruit salad recipe) that can help you keep your fleet lean and mean.

First things first! Add some magic dust to the models you want to periodically clear off by sprinkling the `Illuminate\Database\Eloquent\Prunable` or `Illuminate\Database\Eloquent\MassPrunable` trait on them like so:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;

class Flight extends Model
{
    use Prunable; // Like adding wings to a plane!

    /**
     * Get the prunable model query.
     */
    public function prunable(): Builder
    {
        return static::where('created_at', '<=', now()->minus(months: 1));
    }
}
```

Now, you've added a new feature to your planes—self-destruct sequencing! Create a `prunable()` method, and this little beauty will return an Eloquent query builder that zeros in on the models ready for takeoff.

If you want to give your planes some final salute before they're gone, create a `preparingForDeparture()` method (catchy name, huh?). This method will be called just before the model says its last goodbyes and gets deleted from the database—perfect for cleaning up any stored baggage.

```php
/**
 * Prepare the plane for departure.
 */
protected function preparingForDeparture(): void
{
    // ...
}
```

Once your planes are pruned and polished, it's time to schedule their departure! Add the `model:prune` Artisan command to your application's `routes/console.php` file. Decide on a suitable interval for these flights—daily, weekly, or even hourly, depending on how often you need some breathing room.

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('model:prune')->daily();
```

Under the hood, the `model:prune` command detects any "Prunable" planes in your application's `app/Models` directory (just like air traffic control). If your planes are parked elsewhere, you can specify their class names using the `--model` option.

```php
Schedule::command('model:prune', [
    '--model' => [Address::class, Flight::class],
])->daily();
```

If you have a few special planes that should avoid takeoff (like the ones with important cargo), use the `--except` option to keep them grounded while pruning the rest.

```php
Schedule::command('model:prune', [
    '--except' => [Address::class, Flight::class],
])->daily();
```

Before you start pruning, test your query with the `--pretend` option to see how many records would be removed. This way, you can prepare for any mid-air collisions or sudden turbulence.

```shell
php artisan model:prune --pretend
```

> [!WARNING]
> If you've soft-deleted some planes using the `forceDelete()`, they will be permanently deleted (poof!) if they match the prunable query. So, fly safe and ensure your planes are really past their prime before sending them on their final journey.

 Ahoy there, shipmates! Buckle up as we delve into the world of Mass Pruning - a Laravel feature that'll make your database cleanups resemble a pirate's raid on a treasure trove!

When you sprinkle some `Illuminate\Database\Eloquent\MassPrunable` trait magic dust on your models, they will be swept away in a whirlwind of mass-deletion queries. Fear not the humble `pruning` method or the model events `deleting` and `deleted`, for they won't be needed in this pirate's treasure hunt!

Why you ask? Well, the secret lies in the fact that these models are never actually fetched before being sent to Davy Jones' locker. This means that the pruning process is swifter than a ship with the wind at its back.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\MassPrunable;

class Flight extends Model
{
    use MassPrunable;

    /**
     * Get the prunable model query.
     */
    public function prunable(): Builder
    {
        return static::where('created_at', '<=', now()->minus(months: 1));
    }
}
```

Now, you can set sail for a cleaner database with the Mass Pruning trait. Arrrr, matey!

 ## Model Duplication: The Clone Stamp of Data! 🖼️🎨

Welcome, data mavericks! Ever found yourself in a pickle, needing a doppelganger for your model instances? Worry not, Laravel has got you covered with the `replicate` method - it's like giving birth to data twins! 👭🍼

Here's a scenario where our data family just grew by one:

```php
use App\Models\Address;

$shipping = Address::create([
    'type' => 'shipping',
    'line_1' => '123 Example Street',
    'city' => 'Victorville',
    'state' => 'CA',
    'postcode' => '90001',
]);

// Meet the Billing! 🎉
$billing = $shipping->cloneWithNewAttributes([
    'type' => 'billing' // "It's a whole new world," said the Address, as it became the Billing 🌈🎼
]);

// Save the day with save()! 💪✍️
$billing->save();
```

Did your cat just walk across the keyboard and you want to avoid updating all those attributes? No problemo, you can exclude one or more attributes from being replicated by passing an array to the `replicate` method:

```php
$flight = Flight::create([
    'destination' => 'LAX',
    'origin' => 'LHR',
    'last_flown' => '2020-03-04 11:00:00', // "I'd love to come, but I can't," said the Last Flight Time as it was removed from the new flight clone 🕰️🛫
    'last_pilot_id' => 747,
]);

// A new flight without last flown and last pilot ID history. 🌄🦾
$flight = $flight->cloneWithout([
    'last_flown',
    'last_pilot_id'
]);
```

Now, you can conquer the world of data duplication like a true Jedi! 🚀✨

 Ahoy there, coders! Let's dive into the swashbuckling world of Laravel Query Scopes, a feature that lets you add reusable database queries to your models like a pirate plundering for SQL gold! 🏴‍☠️

<a name="global-scopes"></a>

### Global Scopes 🌐

Ever felt tired of writing repetitive database queries? Fear not, matey! Laravel's Global Scopes let you define a sort of SQL magic spell that gets applied automatically to every query on a given model. It's like having a parrot on your shoulder whispering enchantments into your ear. 🦜

To cast this spell, create a new trait in `app/Models`, sprinkle it with some PHP charm, and voila! Your model is now brimming with dark (yet delightful) sorcery that makes every query a little bit easier. Here's an example:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class User extends Model
{
    protected $perPage = 10;

    public function scopeActive(Builder $query)
    {
        return $query->where('is_active', true);
    }
}
```

Now, every time you fetch users from the database with `User::all()`, only active users (those with `is_active = 1`) will be returned. It's like filtering your queries through a magical sieve! 🧱✨

<a name="local-scopes"></a>

### Local Scopes 🏠

Local Scopes are like Global Scopes, but with a more localized twist—they're only applied to specific methods on your model. It's like having a dozen parrots instead of just one. Each method gets its own personal parrot for whispering SQL spells! 🦜🦜🦜

To conjure up a Local Scope, create a new method in your model and watch the magic happen:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class User extends Model
{
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function inactiveUsers()
    {
        return $this->scopeActive($query)->where('is_active', false);
    }
}
```

With this new Local Scope, you can fetch inactive users by simply calling `User::inactiveUsers()`. It's like having a secret backdoor to your database! 🚪🔥

 Alrighty, buckle up, coders! Let's dive into the enchanting world of Global Scopes - your magical wand for wielding power over all queries that befall a specific model in Laravel land. You see, these scopes are like secret handshakes between you and your database, ensuring every model that dances across your screen is as pristine as your code.

Laravel's very own soft delete feature is but one example of global scopes at play. It's like when a fairy godmother casts a spell to turn a pumpkin into a carriage - except in this case, it turns deleted models into non-deleted ones (or something like that).

Writing your own global scopes? Now that's where the real enchantment begins! With these, you can easily ensure that every query for a given model receives just the right constraints, as if they were your long-lost relatives showing up to dinner with perfect manners.

<a name="generating-scopes"></a>
Ready to create your very own magical global scopes? Simply follow these steps:

1. Define your scope in the `app/Model` directory, or within a named trait if you prefer to keep things tidy and organized.
2. Implement the `applyGlobalScope` method on the model you wish to apply the scope to. This is where you'll perform the magical transformation of all queries.
3. Once you've done your part, let Laravel take care of the rest. It will automatically apply your scopes to every query for that model, turning your database into a well-behaved pet instead of an untamed beast.

And there you have it - global scopes: a quick and painless way to add just the right amount of order to the chaos of database queries!

 Alrighty then! Let's get this show on the road and learn how to create a brand spanking new global scope in good ol' Laravel land. So, buckle up, put on your cowboy boots, and let's ride!

First things first, you can call upon the mighty Artisan command to whip up a fresh batch of `AncientScope` goodness:

```shell
php artisan make:scope AncientScope
```

Now, where did that go? Yep, our trusty steed has transported us straight to the heart of our application in the `app/Models/Scopes` directory. That's where you'll find your freshly baked scope, ready for some serious customization!

Now, what on Earth can we use this new AncientScope for? Well, let's say you want to filter out all those pesky dinosaur models that are younger than a million years old. Here's how you'd do it:

```php
namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class AncientScope implements Scope {
    // ... (your awesome code here)
}
```

Inside the `AncientScope` class, you'll want to implement the `apply` method. That's where all the magic happens! Here's a simple example of how you can use it to filter out any models that are younger than a million years old:

```php
public function apply(Builder $builder, Model $model) {
    if ($model instanceof Dinosaur) {
        $builder->where('age', '>', 1_000_000);
    }
}
```

And there you have it! Your very own AncientScope, ensuring that only the oldest and most esteemed models make their way into your application. Now, wasn't that a ride? I hope you enjoyed this little journey through Laravel land as much as I did!

 Alrighty then! Writing a global scope is like composing a symphony, but with databases and fewer flutes (thank goodness). First, let's grab the baton - or in this case, the `make:scope` command. This will create a conductor class that follows the strict rules of the `Illuminate\Database\Eloquent\Scope` interface.

The `Scope` interface requires one dance number (or method if you prefer): the `apply`. It's where you add those essential 'where' constraints or other clauses to the query like a maestro arranging a grand finale. Here's an example of how it might look:

```php
<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class TimeTravelerScope implements Scope
{
    /**
     * Transport the query back to the Stone Age.
     */
    public function apply(Builder $builder, Model $model): void
    {
        $builder->where('created_at', '<', now()->minus(years: 2000000)); // Just in case we want to go WAY back!
    }
}
```

[!NOTE]
Now, if your global scope is adding more columns to the 'select' dance of the query, it's best to use the `addSelect` method instead. This will prevent any unintentional swapping of the existing select clause, keeping our database performance in check and your boss from sending you on a one-way trip back to the Stone Age!

Remember, the `apply` method should be applied to a given Eloquent query builder, just like a finishing touch to a masterpiece painting.

Happy scoping, data-dancers!

 Alright, buckle up, because we're about to embark on a rollercoaster ride through Laravel's Global Scoping Magic! (Cue drumroll)

First off, have you ever felt like your models needed a little extra pizzazz? Well, fear no more! With global scopes, you can jazz up your models like a Kardashian at Coachella!

To add some spice to your model's life, simply anoint it with the `ScopedBy` attribute. It's like giving it a fancy tuxedo for those black-tie database affairs:

```php
<?php
namespace App\Models;

use App\Models\Scopes\AncientScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy; // This is our tuxedo!

#[ScopedBy([AncientScope::class])] // Pin the tuxedo on your model!
class User extends Model
{
    // Carry on with your daily modeling routine!
}
```

But if you're more of a do-it-yourself kind of person, you can manually register your global scope by overriding the model's `booted` method and calling the `addGlobalScope` method. It's like mixing your own cocktail at the bar instead of ordering one off the menu!

```php
<?php
namespace App\Models;

use App\Models\Scopes\AncientScope;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::addGlobalScope(new AncientScope); // Shake, stir, and serve!
    }
}
```

Once you've added your scrumptious scope to the `App\Models\User`, calling `User::all()` will unleash a delightful SQL query that's aged to perfection:

```sql
select * from `users` where `created_at` < 0021-02-18 00:00:00 // It's like a fine wine!
```

And voila! Your models are now sashaying through the database world like a supermodel on the runway, dripping in global scopes! Enjoy this newfound flair and remember, in Laravel, every model deserves to be fabulous! 💃🎉🎈

#### Globally Scoped Shenanigans (Anonymous Global Scopes)

In the world of Eloquent, it's not just about strutting your stuff as a model, but also being a closet coder with those simple scopes that wouldn't pass muster in a class reunion. Lucky for us, Eloquent allows you to define these global scopes using closures, because who needs formalities when you're the database's secret weapon!

To create a global scope with a closure, give your scope a name that'll make people scratch their heads (or laugh out loud) as the first argument to the `addGlobalScope` method:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::addGlobalScope('AncientGeezers', function (Builder $builder) {
            $builder->where('created_at', '<', now()->minus(years: 2000)); // Just in case you thought we were joking about the age limit.
        });
    }
}
```

<a name="removing-global-scopes"></a>
#### Oh, and don't forget to remove global scopes... (Removing Global Scopes)

Sometimes, even the best of friends need a break. If you decide to part ways with one of your global scopes, you can do so using the `removeGlobalScope` method. Here's how:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Remove the AncientGeezers global scope if we ever feel like having some youthful fun.
     */
    public function removeAncientGeezersScope(): void
    {
        $this->withGlobalWithOut('AncientGeezers');
    }
}
```

 Ahoy there, intrepid Laravel coders! Sick of a pesky global scope cramping your style? Fret not, for I'm here to guide you through the art of removing these unwanted intruders from your queries!

First off, let me introduce you to the `withoutGlobalScope` method. This magical incantation accepts as its only argument the name of the troublesome global scope, akin to casting a banishing spell upon it:

```php
User::withoutGlobalScope(AncientVoodooSpell::class)->get();
```

Or, if your global scope was conjured up using a cloak-and-dagger closure, you'd need to summon its alias instead:

```php
User::withoutGlobalScope('AncientMysteryBox')->get();
```

Now, what if you need to perform an exorcism on multiple global scopes? Fear not, for there are methods designed just for such occasions! The `withoutGlobalScopes` and `withoutGlobalScopesExcept` methods are your new best friends.

The former, `withoutGlobalScopes`, is perfect if you're looking to cleanse all scopes from a query:

```php
// Banish all scopes, let freedom reign!
User::withoutGlobalScopes()->get();
```

But perhaps you only wish to shoo away certain problematic scopes. In such a case, `withoutGlobalScopes` comes in handy yet again:

```php
// Be gone, First and Second curses!
User::withoutGlobalScopes([
    FirstCurse::class,
    SecondCurse::class
])->get();
```

Lastly, there may be the occasional situation where you'd like to keep specific scopes while banishing all others. Enter `withoutGlobalScopesExcept`, the method for such delicate situations:

```php
// Keep SecondCurse, but send the rest packing!
User::withoutGlobalScopesExcept([
    SecondCurse::class,
])->get();
```

Remember, with great power comes great responsibility. Use these methods wisely to ensure your queries are free from unwanted global scopes and let the Laravel magic flow!

 ### Cosmic Query Filters (AKA Local Scopes)

If you're a superhero in your own digital universe, managing a multiverse of queries can be as exhausting as saving the world. Thankfully, Local Scopes are here to help! They let you define a squad of common query restrictions that will come to your aid whenever you need them across your application.

For instance, if you find yourself constantly on the hunt for users so fabulous they've earned over 100 votes (let's call them "Popular Popes"), or only those with an active status (our beloved "Actives"), then Local Scopes are your new best friends!

To summon these mighty allies, simply apply the `Scope` attribute to an Eloquent method:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Call in the troops to filter for popular users.
     */
    #[Scope]
    protected function bringInThePopular(Builder $query): void
    {
        // This query is too hot for mere mortals, it requires 101 votes!
        $query->where('votes', '>', 100);
    }

    /**
     * Rally the Actives to join our mission.
     */
    #[Scope]
    protected function callTheActives(Builder $query): void
    {
        // The active ones are always ready for action!
        $query->where('active', 1);
    }
}
```

<a name="utilizing-a-local-scope"></a>
Now, whenever you need to recruit these superpowered query filters, just use the scope method with your User model:

```php
$popularUsers = User::popular()->get();
$activeUsers = User::active()->get();
```

With Local Scopes by your side, conquering the cosmos of queries is just a matter of time and coffee refills!

 Alright, let's dive into the charming world of Laravel scopes, shall we? First off, you've gotta define your scope like a secret recipe for your favorite cake – once baked (er, defined), it's ready to be served at query time.

```php
use App\Models\User;

// Here, our secret ingredient: User::popular()
$mixingBowl = User::popular();

// Now we're adding the frosting – User::active()
$mixingBowl = $mixingBowl->active();

// And just a pinch of sorting magic – orderBy('created_at')
$users = $mixingBowl->orderBy('created_at')->get();
```

But wait, what if you want to create a hybrid between vanilla and chocolate users? No worries! Laravel's got you covered with the OR query operator – just remember to use closures for that fancy grouping technique:

```php
// This is like asking "Give me popular users or active users who aren't popular but love wearing a beret"
$users = User::popular()->orWhere(function (Builder $query) {
    // Here, the query says "give me those active users who aren't popular yet."
    $query->active()->whereDoesntHave('popularity', function (Builder $subQuery) {
        $subQuery->where('value', 0);
    });
})->get();
```

But why make things harder than necessary, right? That's why Laravel has a higher-order "orWhere" method that lets you chain scopes like they're never out of style:

```php
// Here, we've combined popular and active users with a tasteful OR – the ultimate dance duo!
$users = User::popular()->orWhere->active()->get();
```

And there you have it! You're now ready to dance your way through your Laravel application with these delightful scopes at your fingertips. Don't forget to pair them with some good old-fashioned elbow grease, and you'll be baking up a storm in no time! 🥧🎉

 Alrighty, let's dive into the world of Dynamic Scopes! Imagine you're hosting a never-ending party, and you want to filter out the wallflowers (or admin users, if we're being professional here). That's where dynamic scopes come in, your very own bouncer for database queries!

First off, let's set up our doorman. Just add those extra parameters to your scope method's invite list. Remember, the party host (`$query`) should always be present, but feel free to add more guests after him:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Scope a query to only include users of a given type.
     * (Think of it as our bouncer, checking IDs at the door)
     */
    #[Scope]
    protected function checkID(Builder $query, string $type): void
    {
        // Check if the user's ID matches the provided type
        $query->where('type', $type);
    }
}
```

Now that our bouncer is all set, we can start inviting guests! Pass those arguments when calling the scope:

```php
$partyGuests = User::checkID('admin')->get();
```

And just like that, you've got your admin-only party going on! Remember, a good bouncer is always ready to filter out unwanted guests, ensuring a lively and exciting event for everyone. Happy filtering! 🎉🥳

 ### Ahoy there, Captain!

Want to create shipwreck models with the same galleon-worthy attributes as those that chain them down like an anchor? Ye be needin' the `withAttributes` method while sailin' the scope query waters:

```php
<?php

namespace App\Ships;

use Illuminate\Database\Eloquent\Scopes\Scope;
use Illuminate\Database\Eloquent\Pirate;
use Illuminate\Database\Eloquent\Vessel;

class PirateGalleon extends Vessel
{
    /**
     * Scope the query to only include drafts o' the seven seas.
     */
    #[Scope]
    protected function draughty(Builder $query): void
    {
        $query->withAttributes([
            'hidden_below_the_waterline' => true,
        ]);
    }
}
```

The `withAttributes` method will hoist anchor on the query with conditions from the given attributes and attach those to any vessels spawned via the scope:

```php
$leaky_galleon = PirateGalleon::draughty()->setSails('In Progress');

$leaky_galleon->isSubmerged(); // true arrgh!
```

To avoid adding those pesky `where` conditions to the query, ye can set the `asConditions` argument to a resounding "avast!" (or, more accurately, `false`):

```php
$query->withAttributes([
    'hidden_below_the_waterline' => true,
], asConditions: false);
```

<a name="comparing-models"></a>
Yarr, walk the plank if ye want to compare these swashbuckling models with their landlubber counterparts!

 Alright, let's dive into the world of Laravel models, where things aren't always as they seem! Ever found yourself in a pickle trying to figure out if two models are Siamese twins or just acquaintances? Fear not! The `is` and `isNot` methods are here to save the day.

Think of it like this: you're at a high-school reunion, and you've got two classmates in front of you. You can use these methods to quickly determine if they're your long-lost identical twins or just happen to have the same taste in '80s fashion.

```php
if ($post->is($anotherPost)) {
    // They're one and the same! Time to break out the family photo album.
}

if ($post->isNot($anotherPost)) {
    // Different drifters, in separate lifeboats. Let's move on.
}
```

But wait, there's more! The `is` and `isNot` methods aren't just shy wallflowers at the party. They also shake a leg when it comes to the more exclusive relationships - `belongsTo`, `hasOne`, `morphTo`, and `morphOne`.

Imagine you're on a blind date, and you want to know if your partner is the author of that mystery novel you've been reading. Instead of asking directly (we all know how awkward that can be), just use these methods:

```php
if ($post->author()->is($user)) {
    // They're a match made in heaven! Let's plan the wedding.
}
```

And the best part? No need to query for the model again - these methods do all the legwork, leaving you free to enjoy the rest of the party. Happy relationship-matching!

 ## Model Events: The Life of a Laravel Superhero! 🦸‍♂️🦸‍♀️

> [!ATTN]
> Ready to broadcast your Eloquent events straight to your superpowered client app? Check out Laravel's [model event broadcasting](/docs/{{version}}/broadcasting#model-broadcasting) - it's like having a secret communication line! 🕵️‍♂️

Just like any good superhero, Eloquent models have their own life cycle events that you can tap into to be a part of the action! These include: `retrieved`, `creating`, `created`, `updating`, `updated`, `saving`, `saved`, `deleting`, `deleted`, `trashed`, `forceDeleting`, `forceDeleted`, `restoring`, `restored`, and `replicating`.

The `retrieved` event is fired when your trusty sidekick model jumps out of the database. When a new hero makes their first appearance, the `creating` and `created` events are set off like fireworks! The `updating` / `updated` events go boom when an existing hero gets a makeover and the `save` method is called. And the `saving` / `saved` events happen whenever your hero gets a costume upgrade or a new power – even if they didn't actually change anything! 🤫

Events ending in `-ing` are like the pre-flight checks, dispatched before any changes to the model are written in stone. On the other hand, events ending in `-ed` happen after the changes have been saved, like a triumphant victory pose! 🚀

To start listening for model events, give your Eloquent model an ear by defining a `$dispatchesEvents` property. This maps various moments of the Eloquent model's lifecycle to your very own [event classes](/docs/{{version}}/events). Each event class should accept an instance of the affected hero via its constructor:

```php
<?php

namespace App\Models;

use App\Events\UserDeleted;
use App\Events\UserSaved;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The event map for the model.
     *
     * @var array<string, string>
     */
    protected $dispatchesEvents = [
        'saved' => UserSaved::class,
        'deleted' => UserDeleted::class,
    ];
}
```

Once you've defined and mapped your Eloquent events, you can use [event listeners](/docs/{{version}}/events#defining-listeners) to handle the events like a super-powered sidekick. 🦸‍♂️🦸‍♀️

> [!CAUTION]
> When performing mass updates or deletes via Eloquent, the `saved`, `updated`, `deleting`, and `deleted` model events will not sound the alarm for the affected heroes. That's because these heroes never actually make a grand entrance when doing mass updates or deletes! 🕷️🦹‍♂️

<a name="events-using-closures"></a>
Now, get ready to be the hero your models need and start listening for those events! 🚀🚀🚀

 Alrighty, buckle up, Laravel enthusiasts! Let's dive into the world of Closures, where you can ditch those cumbersome custom event classes and let your code loose like a wild stallion.

Instead of breaking the bank on custom event horses, you can simply register closures that gallop to life when various model events are unleashed upon 'em. Normally, you'd want to rope these closures in at the `booted` shindig of your model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The barn dance after the model's birth.
     */
    protected static function booted(): void
    {
        static::created(function (User $user) {
            // ... unbridle your code here!
        });
    }
}
```

If you find yourself in a pickle where you need to round up the posse, you can employ [queueable anonymous event wranglers](/docs/{{version}}/events#queueable-anonymous-event-listeners) when managing model events. This will get Laravel to rope the model event listener and lasso it for a backyard rodeo using your application's [queue](/docs/{{version}}/queues):

```php
use function Illuminate\Events\queueable;

static::created(queueable(function (User $user) {
    // ... let your code lasso the steers here!
}));
```

<a name="observers"></a>

 ### Gossip Gurus (Observers)

In the whimsical world of Laravel, we can't ignore the sassy sidekicks, aka **Gossip Gurus**! You know those folks who always seem to be in the loop about everything that happens? That's exactly what our observers do. But instead of gossiping about your love life or fashion sense, they keep tabs on your models and their relationships.

<a name="defining-observers"></a>

#### Defining Observers

Creating a Gossip Guru is easy! All you need is a new PHP file with the `Observer` class in the `app/Observers` directory. Give your gossiper a catchy name, say "NewsFlash" or "TattleTale", and make sure to extend the base Observer class:

```php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Observer;

class NewsFlash extends Observer
{
    // Your gossiping logic goes here!
}
```

<a name="associating-observers"></a>

#### Associating Observers

Now, you might be wondering: "How does my Gossip Guru know which models to follow?" Well, worry not! You'll tell them exactly who to stalk, er... observe.

In your model file, use the `$events` property to specify the events that trigger your observer. For instance, if you want to monitor a user's creation and updates, it would look like this:

```php
protected $events = [
    'created', 'updated' => 'NewsFlash'
];
```

With this setup, every time a user is created or updated, your NewsFlash observer will spring into action!

<a name="defining-methods"></a>

#### Defining Methods

Now comes the fun part: defining what your Gossip Guru actually does when they're triggered. In the `NewsFlash` observer, you can use the `created` and `updated` event methods to react accordingly:

```php
public function created(Model $model)
{
    // Your gossiping logic goes here!
}

public function updated(Model $model)
{
    // Your gossiping logic goes here!
}
```

And that's it! Now you have your very own Gossip Guru keeping tabs on your models and reporting back with all the juicy details. Happy gossiping!

 Alright, let's get this party started! If you find yourself juggling a plethora of events on a single model, it's time to bust out the observer class - think of it as a disco for your database operations. Observer classes are the life of the Eloquent event, and their method names are like invitations to the hottest parties you never knew existed!

To create a new observer, all you need is a simple command:

```shell
php artisan make:observer UserObserver --model=User
```

This magic spell will conjure up your observer in the mystical `app/Observers` directory. If that directory isn't already there, don't worry, it'll be created faster than you can say "abracadabra!" Your freshly brewed observer will look something like this:

```php
<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function created(User $user): void { /* Party like it's 1999! */ }
    public function updated(User $user): void { /* Time to update the playlist! */ }
    public function deleted(User $user): void { /* Last call for drinks, the party's over! */ }
    // More events await you in this disco...
}
```

To register your observer, you can either attach a shiny new attribute to your model or pull out the neon lights and dance floor by manually registering it. The former requires:

```php
use App\Observers\UserObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy([UserObserver::class])]
class User extends Authenticatable
{
    //
}
```

For the latter, you can register observers in the `boot` method of your application's `AppServiceProvider` class:

```php
use App\Models\User;
use App\Observers\UserObserver;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    User::observe(UserObserver::class);
}
```

Now, don't forget that this is just the beginning of your eventful journey! There are even more events an observer can listen to, such as `saving` and `retrieved`. These are all detailed within the [events](#events) documentation. But remember, what happens in the database stays in the database – or at least until you write some cool code to make it public! 🎉🚀

 Alrighty, let's dive into the wild world of Laravel Observers and Database Transactions! Imagine you're at a swanky casino, and your model is the high roller at the blackjack table. Now, when this model makes a bet (let's say, creating a new record), you might want to hire a bouncer (observer) to take care of things after the dealer has called "Bust" or "Blackjack" – that is, after the database transaction is committed.

To do so, all you need is to make your bouncer (observer) a member of the high-class VIP club (`ShouldHandleEventsAfterCommit` interface). This way, if there's no ongoing poker game (database transaction), the bouncer will step in right away:

```php
<?php

namespace App\Observers;

use App\Models\User;
use Illuminate\Contracts\Events\ShouldHandleEventsAfterCommit; // The VIP club membership card

class UserObserver implements ShouldHandleEventsAfterCommit {
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void {
        // ...
    }
}
```

Now, sit back and watch your models play their hands with the added protection of a reliable bouncer by their side!

 ### Silencing the Symphony of Model Events

Ah, the life of a developer can sometimes feel like conducting an orchestra – except instead of violins and drums, you're dealing with events fired by models! But fear not, for when the cacophony becomes too much, Laravel provides a mute button in the form of `withoutEvents()`.

Just imagine yourself at a rock concert, and you need to make that emergency phone call. You can do so by wrapping your model-related activities inside this method, which acts as the trusty pair of noise-canceling headphones.

Here's how it goes down:

```php
use App\Models\User;

// Put on those soundproof earbuds and make some model magic happen!
$silentUser = User::withoutEvents(function () {
    // Perform a stealthy delete operation on user number 1 (shhhh!)
    $vanishedOne = User::findOrFail(1)->delete();

    // All quiet on the western front – now return user number 2!
    return User::find(2);
});
```

And just like that, your model events are muted, and you can carry out operations without the usual event-driven chaos. When you're done with your covert mission, remember to take off those earbuds by calling `$silentUser->listen()`. Happy silent coding! 🤫 🚀

 Ah, the world of Laravel! Where models strut their stuff and data dances to our every command. But sometimes, you just want a little quiet time, don't you? Well, let's dive into the serene side of model management: saving a model in peace and quiet.

#### Saving a Model Without Making a Scene

There are times when you fancy saving your model without all the hullabaloo of dispatching events. Fret not, for there's a tranquil method named `saveQuietly` to help you out:

```php
$user = User::findOrFail(1); // Oh, don't mind us, just fetching your average web-surfing Joe!

$user->name = 'Victoria Faith'; // Now we're rebranding him as 'Tech Support Extraordinaire'!

$user->saveQuietly(); // And now, in a whisper... SAVE! No need to yell it out.
```

And yes, if you fancy updating, deleting, soft deleting, restoring, or replicating your model without causing a scene, here's how:

```php
$user->deleteQuietly(); // Bye Felicia! No more noise as we remove her from the database.
$user->forceDeleteQuietly(); // If she really didn't want to leave, we'd have to force it... quietly.
$user->restoreQuietly(); // Well, well, well! She's back without so much as a 'Hello'.
```

Now isn't that a more peaceful way of dealing with your models? Let's keep the database calm and happy!