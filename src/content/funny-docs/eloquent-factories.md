 # Eloquent: The Magical Factory of Your Database Dreams! 🧚‍♂️🛠️

## The Great Introduction 📚🎓
Welcome to the whimsical world of Model Factories! Here, we'll learn how to brew up perfect database records as if they were freshly baked cookies. 🍪🧑‍🍳

<a name="defining-model-factories"></a>
## Defining the Blueprint for Your Model Factories 🏗️✏️

### Crafting the Blueprints 🛠️🔨
Create your own blueprints using the `make:factory` command. It's like having a magic wand that turns database tables into ready-to-use templates! ✨💫

### Factory States 🌱🌄
Give your models unique personalities with Factory States. Imagine being able to create a 'grumpy cat', 'happy dog', or even a 'nerdy developer' record with just a few lines of code! 🐈‍⬛🐶🤓

### Factory Callbacks 📣🔔
Call the shots and control the sequence of events during factory creation. It's like being the conductor of an orchestra, but instead of musicians, you're conducting data! 🎹🎺🎷

<a name="creating-models-using-factories"></a>
## Let's Make Some Models with These Magic Factories! 💥⚡️

### Instant Gratification: Instantiating Models 🧪🚀
Bring your new factory to life by instantiating a model. It's like summoning a Pokémon from its Pokeball, except with data instead of adorable creatures! 🦾🌐

### Persistence: Saving Your Masterpiece 💾🔒
Once your model is ready, save it to the database. It's like hanging a painting in the Louvre... of data! 🎨🏛️

### Sequences: Keeping Track of Order 📝📚
Ensure that records are created in a specific order using sequences. It's like numbering your comic book collection, but for data! 📖🗡️

<a name="factory-relationships"></a>
## Relationship Goals: Building Strong Connections between Models 🤝💘

### Has Many Relationships: Polyamory for Database Records 👫🦹‍♂️
Create a web of relationships where one model can have multiple partners (err... records). It's like being in a romantic comedy, but with databases! 🎬💕

### Belongs To Relationships: The Parent-Child Syndrome 👨‍👦
Establish relationships where one model belongs to another. It's like being part of a well-organized family... of data! 🏠👶

### Many to Many Relationships: The Middleman 🤝🤝🤝
Create connections between multiple models without favoritism. It's like running a successful matchmaking service... for databases! 🎵💏

### Polymorphic Relationships: The Swiss Army Knife of Database Connections 🛠️🔩
Create relationships that can morph into different types. It's like having a magical toolbox for your database needs! 🧰🔬

### Defining Relationships Within Factories: Creating Connections at the Source 🏭🌱
Establish relationships directly within the factory blueprint. It's like building a complex circuit board right from the start! 💡🔧

### Recycling an Existing Model for Relationships: Reusing and Recycling 🌍🚫🛁
Reuse an existing model as a relationship, saving resources and reducing database waste! It's like repurposing old furniture to create a unique style in your home... but with databases! 🛋️🪑

 Alright, matey! Let's dive into Laravel's delightful database dressing room, where model factories live! 🎉🎩

When you're testing your app or sprucing up the ol' database, you might need to chuck some records in without manually setting each column's value. Enter stage left: model factories! With Laravel, you can assign a swanky set of default attributes to all those fancy Eloquent models of yours (check out [this link](/docs/{{version}}/eloquent) for more on those).

Now, head on over to the `database/factories/UserFactory.php` file in your app, where you'll find this stylish factory definition:

```php
namespace Database\Factories;

// ... (skipped some code)

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    // ... (skipped more code)

    public function definition(): array
    {
        return [
            'name' => fake()->name(), // No need to introduce yourself to every new record, right?
            'email' => fake()->unique()->safeEmail(), // Fancy enough for even the poshest of databases!
            'email_verified_at' => now(), // Because timing is everything in this game!
            'password' => static::$password ??= Hash::make('password'), // A classic password, though we recommend updating it in your next date 😉
            'remember_token' => Str::random(10), // For when you really want to remember this record
        ];
    }

    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null, // If you can't trust 'em with a verified email...
        ]);
    }
}
```

In essence, factories are posh classes that extend Laravel's base factory class and define a `definition` method. The `definition` method returns the default set of attributes that should be applied when creating a model using the factory.

Through the magic of the `fake` helper, you can access the [Faker](https://github.com/FakerPHP/Faker) library, which grants you the power to create all sorts of random data for testing and database seeding! 🎲🥳

> [!NOTE]
> Ever wanted your app's Faker to speak a specific language or dialect? You can adjust the `faker_locale` option in your `config/app.php` configuration file! 🌐💬

 Ahoy there, coding sailors! It's time we talk about something that'll make your life a breeze - Model Factories in Laravel land!

Think of 'em as those magical sea creatures that can conjure up new database records with just a sprinkle of code and a dash of imagination.

<a name="generating-factories"></a>

### Generating Factories

First things first: Let's create these enchanting sea creatures! To do so, navigate to your project directory, then run this command that would make Merlin himself proud:

```bash
php artisan make:factory App\Models\UserFactory
```

This will generate a new file called `UserFactory.php`. Now, let's give it some life by filling it up with database values. Don't worry, it ain't as daunting as that sea monster from the deep you encountered once!

<a name="defining-the-factory"></a>

#### Defining The Factory

Inside the `UserFactory`, there's a method called `definition`. Here's where the magic happens. You can define your database values, such as first_name, last_name, email, and password - just like filling out an application form for those mythical unicorn jobs you keep seeing online!

```php
public function definition()
{
    return [
        'first_name' => $this->faker->firstName(),
        'last_name' => $this->faker->lastName(),
        'email' => $this->faker->unique()->safeEmail(),
        'password' => bcrypt('secret-pass'),
    ];
}
```

<a name="customizing-the-factory"></a>

#### Customizing The Factory

Now, what if you want to customize these records according to your whims and fancies? Fear not! Laravel lets you create methods within the factory to handle those quirks. Let's say we want to create a user with a special email address for VIPs:

```php
public function vip()
{
    return $this->definition() + [
        'email' => 'vip@laravel.com',
    ];
}
```

Now, when you call `factory(App\Models\User::class)->create()`, it'll create a regular user most of the time but every once in a while, it'll conjure up a VIP user with that exclusive email address!

<a name="using-the-factory"></a>

#### Using The Factory

Finally, you can use your factory to create new records without worrying about writing repetitive code. Here's an example:

```php
// Create a regular user
$user = factory(App\Models\User::class)->create();

// Or create a VIP user
$vipUser = factory(App\Models\User::class)->vip()->create();
```

And there you have it, matey! With Model Factories, you can create new records like they're going out of style (which is quite literally true if your application grows exponentially). So set sail, and may the sea be filled with endless database records at your command!

 Alrighty, let's get this party started! To whip up a factory like a culinary maestro stirring up a mean soufflé, you gotta call the shots with the Artisan command - a magician's hat for developers. Here's the incantation:

```shell
php artisan make:factory PostFactory
```

Once you've uttered these words, sit back and watch as a brand-new factory class apparates in your `database/factories` directory - it's like finding a magic bean that grows into a full-blown beanstalk! 🌽😜

<a name="factory-and-model-discovery-conventions"></a>

Now, for those of you who enjoy a bit of detective work (just like Sherlock Holmes, but with less pipe smoking and more coding), let's talk about the conventions that link factories and models. If your model is named `Post`, then your factory will be automatically registered to it - like how best friends always stick together! 🤝

So there you have it! You can now create fabulous, freshly-baked database records quicker than you can say "Fabergé egg"! And remember: in the world of coding, time is money, and a well-stocked factory keeps the till ringing! 💸🚀

 Alrighty, buckle up, Laravel enthusiasts! Let's dive into the delightful world of Model and Factory Discovery Conventions.

First off, you've written some fabulous factories, but how do we make them dance for our models? No worries, because the `Illuminate\Database\Eloquent\Factories\HasFactory` trait is here to provide a static `factory` method that turns your models into disco-loving robots!

The `HasFactory` trait's `factory` method is smarter than a fox in a henhouse; it uses conventions to find the perfect factory for the party. It scours the `Database\Factories` namespace, seeking factories with names matching their model counterparts, and adding a cheeky 'Factory' suffix – just like your favorite 80's movie sequels!

However, every application is unique as a snowflake in a blizzard, so if these conventions don't quite fit your fancy, you can manually specify the factory for your model using the `UseFactory` attribute. Think of it as sending your model an invitation to the right party!

```php
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Database\Factories\Administration\FlightFactory;

#[UseFactory(FlightFactory::class)] // Invitation accepted!
class Flight extends Model
{
    // ...
}
```

If you prefer to bypass the invitation system, you can instead return an instance of the model's factory directly from the `newFactory` method on your model. It's like being the DJ of your own dance floor!

```php
use Database\Factories\Administration\FlightFactory;

/**
 * Create a new factory instance for the model.
 */
protected static function newFactory()
{
    return FlightFactory::new();
}
```

Lastly, don't forget to use the `UseModel` attribute on your corresponding factory to specify the model.

```php
use App\Administration\Flight;
use Illuminate\Database\Eloquent\Factories\Attributes\UseModel;
use Illuminate\Database\Eloquent\Factories\Factory;

#[UseModel(Flight::class)] // Party on, Wayne!
class FlightFactory extends Factory
{
    // ...
}
```

Now that you've got the dance moves down, let the good times roll with Model and Factory Discovery Conventions!

 ### Model Factory Whackamole!

Welcome, dear coder friend, to the thrilling world of Laravel Factory States! Think of it as a wild game of whack-a-mole but instead of pesky rodents, we're mashing down on model attributes. These state manipulation methods allow you to define fun and quirky changes that can be applied to your factory models in any combination.

Let's say you've created a rambunctious `UserFactory` in `Database\Factories`. To make things more interesting, you might want to add a `suspended` state method that gives one of its default attribute values a naughty twist.

Now, state transformation methods typically call upon the friendly `state` method offered by Laravel's base factory class. The `state` method is a bit like inviting a magical genie to your coding party. It accepts a little closure that will receive the array of raw attributes defined for the factory. This genie then returns an array of attributes ready for a transformation:

```php
Use yer ol' trusty typewriter, matey! (That's `use Illuminate\Database\Eloquent\Factories\Factory;` in common tongue)

/**
 * Mark the user as suspended.
 */
public function suspended(): Factory
{
    return $this->state(function (array $attributes) {
        // This genie whispers into a tiny bottle, "Account status: suspended!"
        return [
            'account_status' => 'suspended',
        ];
    });
}
```

Now, go forth and create those fabulous factory states! Just remember to keep it fun, keep it Laravel, and may your code always be a party!

<a name="trashed-state"></a>
(Note: In this whackamole game, the 'trashed' state would be like knocking down a model that's gone rogue. You can achieve this by adding a `trashed` method to your factory which calls the `state` method with a closure that soft deletes the model.)

 Ahoy there, tech pirates! Dive deep into the enchanting realm of Laravel's Trashed State, a magical feature that makes your Eloquent models dance the dance of deleted delicacy. If your model can perform a soft delete (you know, like a phantom limb but for data), you can summon this built-in method like a wizard casting a spell: `trashed()`.

No need to craft your own `trashed` state potion; Laravel's got your back! This magical essence is already available in all of the factories, just waiting to be unleashed.

```php
Use yer trusty ol' App\Models\User;

Create ye a $user with a single line o' code:
$user = User::factory()->trashed()->create();

Now, $user is soft-deleted and ready for the afterlife of databases. Arr matey!
```

<a name="factory-callbacks"></a>
(For those of you who can't get enough of the technical jargon, just head on over to the original documentation for more factory callback goodness.)

 ### Factory Shenanigans

Say hello to factory callbacks! These bad boys are registered using the `afterMaking` and `afterCreating` methods, allowing you to pull off some fancy post-model shenanigans. To get these party-starters up and running, define a `spruceUp` method in your factory class. Laravel will magically make it rain callbacks once the factory gets summoned:

```php
namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * Spruce up the model factory.
     */
    public function spruceUp(): static
    {
        return $this->afterMaking(function (User $user) {
            // ... your secret sauce here ...
        })->afterCreating(function (User $user) {
            // ... even more secret sauce ...
        });
    }

    // ... continue the party as usual ...
}
```

Feeling fancy? You can also register factory callbacks within state methods to perform tasks that are exclusively for a specific state:

```php
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Let's suspend this user.
 */
public function freezeEmOut(): Factory
{
    return $this->state(function (array $attributes) {
        // ... setting the account to 'Frosty' mode ...
    })->spruceUp()->afterMaking(function (User $user) {
        // ... adding an extra layer of iciness to our user...
    })->afterCreating(function (User $user) {
        // ... sending a chilly welcome email ...
    });
}
```

<a name="creating-models-using-factories"></a>
Now, it's time to let your factory callback creativity run wild and make those models dance to your tune! 🎶🎉

 Ahoy there, coding pirates! In this fine sea of Laravel, let's set sail for the enchanting land of Model Factories. You see, creating models one by one is like painting every barnacle on a ship... time-consuming and quite nautical, but not always necessary!

<a name="instantiating-models"></a>

### Instantiating Models

Say you've built yourself a fine vessel named `User` (may she be swift and robust). To create a new passenger without using factories would mean manually setting all its properties, like:

```php
$user = new App\Models\User;
$user->name = 'Bob';
$user->email = 'bob@example.com';
// ...and so on for every barnacle of a property you have
$user->save();
```

Yikes! That's more work than cleaning the crow's nest after a stormy night! Instead, let's hoist the Jolly Roger of Model Factories.

<a name="defining-factories"></a>

### Defining Factories

A Model Factory is like a blueprint for your ship (or user in our case). It defines how you want the ships to be built in bulk. You create factories in the `database/factories` directory using PHP classes that inherit from Laravel's `Factory`.

```php
// app/UserFactory.php
namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The model's default state when creating new instances.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            // ...add more properties here
        ];
    }
}
```

Now that you have a Model Factory for your `User`, you can create as many passengers as ye desire with just a few lines of code:

```php
use App\Models\User;
use Faker\Generator as Faker;

// Create 100 new users using the UserFactory
factory(User::class, 100)
    ->create()
    ->each(function ($user) {
        // Perform additional actions for each created user if needed
    });
```

Pirate's life just got easier! Bye bye barnacle-painting days. Now you can focus on more swashbuckling adventures with Laravel. Yarrrr! 🏴‍☠️💪

 ### Populating Pals with Factories (A Laravel Lark)

Once you've brewed up your model factories, you can harness the magic of the `Illuminate\Database\Eloquent\Factors\HasFactory` trait's static `factory` method to conjure a factory ghost for that particular model. So, let's conjure up some models in a jiffy! First, we'll dabble with the `make` spell to create models without casting them into the database:

```php
use PalMakers\Users; // Don't mind the terrible naming convention

$pal = Users::factory()->make('user'); // Yes, it's like magic!
```

Next up, if you fancy a horde of pals instead of just one, you can whip up a collection using the `count` method:

```php
$pals_gathering = Users::factory()->count(3)->make('pal-group'); // Now that's a party!
```

<a name="applying-states"></a>
And if you're ready to apply some personality quirks (or "states") to your pals, read on, dear friend! This is where things get juicy... errr... fun.

 Ah, let's dive into the enchanting world of Laravel factories! Ever wished you could magically spawn your models like a sorcerer summoning creatures from another realm? Well, my dear friend, your wish is granted!

You see, not only can you create models with just a wave of your wand (er, a simple `make()`), but you can also enchant them with the power of [states](#factory-states)! Think of it as putting on a cape or wielding a magical staff to give your models some extra oomph.

But wait, there's more! If you want your models to be decked out in multiple enchanted items, all you have to do is call upon the transformations like a Jedi invoking the Force:

```php
$users = User::factory()->count(5) // A horde of users, I see...
    ->suspended() // ...all under house arrest!
    ->make();
```

Now go forth and create your enchanted armies with ease and elegance, my friend! The realm of Laravel awaits your magical touch.

 Alright, here's a fun take on overriding attributes in Laravel:

#### Overriding Your Model's Default Settings (AKA "Pimping Up Your Databases")

Ever wanted to give your models a little makeover without hitting the fashion week runway? Well, we've got you covered! You can tweak some of the default values like a pro by passing an array of cool new digits to the `make` method. Only the specified attributes will get a revamp while the rest of the stuff stays fly as originally designed by the factory:

```php
$user = User::factory()->make([
    'name' => 'Abigail Otwell', // Because who doesn't want to hang with Taylor Swift's BFF?
]);
```

Or, if you're feeling extra fancy and want to do the transformation on-the-fly, just hit up the factory instance directly with the `state` method:

```php
$user = User::factory()->state([
    'name' => 'Abigail Otwell', // Because who needs a name change when you're already a superstar?
])->make();
```

> [!ATTENTION]
> To keep things secure, we automatically disable that pesky mass assignment protection when crafting models using factories. That means you can make changes left and right without worrying about unauthorized access (yay!).

<a name="persisting-models"></a>
Now go forth and create some fabulous models that would make even the pickiest database proud! 🥳🚀💻🎉

 Alrighty, buckle up, because we're about to dive into the thrilling world of Laravel model persistence! 🌊🚀

First off, let me introduce you to the fabulous `create` method. This magical function not only brings models to life but also securely stashes them away in your database using Eloquent's trusty `save` method. 🎩🔒

```php
use App\Models\User;

// Create a single, dashing User model...
$user = User::factory()->create();

// ...or unleash a trio of Users onto the world!
$users = User::factory()->count(3)->create();
```

But wait, there's more! Ever wanted to customize your model's default attributes? Well, you can do just that by passing an array of attributes to the `create` method:

```php
$user = User::factory()->create([
    'name' => 'Abigail',
]);
```

Now, isn't that swell? You can create, customize, and save models like a boss. But remember, with great power comes great responsibility—keep your databases clean and your code tidy! 🧹✨

 Alright, buckle up, because we're about to dive into the world of model attribute flipping! You know, like when you decide it's time for a haircut and go from a mullet to a mohawk (or vice versa).

In Laravel-land, this haircutting task is handled by something called Sequences. Imagine you're creating a bunch of users and want to alternate their admin status between 'Y' and 'N'. Here's how you can do it:

```php
Use your imagination here, we're talking about Users after all!
use Illuminate\Database\Eloquent\Factories\Sequence;

$users = User::factory()
    ->count(10) // You know, for a nice crowd
    ->state(new Sequence(
        ['admin' => 'Y'], // First half gets the 'Y', like a Y chromosome!
        ['admin' => 'N'], // Second half gets the 'N', like... well, let's not go there!
    ));
```

Now, if you need a bit more flair, you can include a closure as a sequence value. This closure will be your hairdresser, creating a new style each time:

```php
use Illuminate\Database\Eloquent\Factories\Sequence;

$users = User::factory()
    ->count(10) // Again, because crowds are fun!
    ->state(new Sequence(
        fn (Sequence $sequence) => ['role' => UserRoles::all()->random()], // Random roles, keep it interesting!
    ));
```

Inside a closure, you can access the `$index` property to know how many times the sequence has been run. Think of it like counting your hairs after each cut:

```php
$users = User::factory()
    ->count(10) // You know the drill!
    ->state(new Sequence(
        fn (Sequence $sequence) => ['name' => 'Name '.$sequence->index], // Names based on the sequence number, like "Name 3" for the third user
    ));
```

For your convenience, Sequences can also be applied using the `sequence` method. It's like asking your hairdresser to give you a new look every two appointments:

```php
$users = User::factory()
    ->count(2) // Just two users today, we're not being too extra
    ->sequence(
        ['name' => 'First User'], // First user gets the name "First User"
        ['name' => 'Second User'], // Second user gets the name "Second User"
    ));
```

And there you have it! Your very own model attribute flipping hair salon, powered by Laravel Sequences. Now go forth and create users with style!

 ### Chum Buckets and Their Progeny Galore! 🐠🐟

In the vast ocean of your Laravel application, you'll find a curious creature named `Model`. This Model, much like Captain Nemo, can navigate through the deep seas, but unlike him, it has an extraordinary power to spawn offspring in droves! Let's dive into this magical world of factory relationships.

<a name="has-many-relationships"></a>

#### Has Many Relationships 🐠🐟🤗

If you have a parent model, say the wise old dolphin `ParentModel`, and it has several playful little fish as children, represented by the `ChildModel`, then you'd want to create a relationship between them. This is where Has Many comes into play! (Pun intended!)

By defining `public function children() { return $this->hasMany(ChildModel::class); }` in your parent model, you can spawn a whole school of fish whenever you wish! Just remember, if you ever find yourself in a situation where you need to access the children's data before they're created, use `$parentInstance->children()->create([...])`.

That's right; with Has Many, you won't have to deal with the hassle of raising each fish individually! 🐟🚀



<a name="belongs-to-relationships"></a>

#### Belongs To Relationships 🐠🏠💋

Now, imagine for a moment that you're a tiny guppy lost in the ocean. Suddenly, a mighty shark swoops in and rescues you! The shark is none other than your ParentModel, who's taking care of all its little ones using Belongs To relationships.

In Laravel, if you have a child model `ChildModel` that belongs to a parent, say `ParentModel`, simply define `public function parent() { return $this->belongsTo(ParentModel::class); }` in your child model. This will allow you to easily track the whereabouts of your beloved shark whenever you need!

And don't worry about losing yourself among the other guppies, Laravel will always ensure that every fish knows its mamma (or pappa)! 🐠❤️🏡



<a name="polymorphic-relationships"></a>

#### Polymorphic Relationships 🦄🎒🤝

Things get even more exciting with Polymorphic Relationships! Imagine if a magical unicorn could form relationships with _not just_ other unicorns, but also narwhals and seahorses as well! That's exactly what polymorphic relationships are all about. 🦄🐬🐡

To create this magical bond, first define a morphMany relationship in the parent model: `public function related() { return $this->morphMany(RelatedModel::class, 'relatable'); }`. Then, in your child models, define a morphOne relationship: `public function parent() { return $this->morphOne(ParentModel::class, 'relatable'); }`.

Now that you've done the legwork, you can rest easy knowing that your magical creatures will have friends from all corners of the ocean! 🦄🐬🐡🚀✨

 Alrighty then! Let's get our relationship game on with Laravel's magical factory methods. Imagine we've got ourselves an `App\Models\User` and an `App\Models\Post` model, and the `User` is basically a social media influencer with a plethora of posts (#blessed).

First off, let's create a user who's got the gift of gab – three whole posts! We can do this by using Laravel's `has` method that comes with our factories. Just like a puppeteer controlling a troop of marionettes, we can control our new user to spawn three posts:

```php
use App\Models\Post;
use App\Models\User;

$user = User::factory()
    ->withThreePosts(Post::factory())
    ->create(); // Now this user is a certified content creator!
```

By default, when we pass the `Post` model to our `has` method, Laravel assumes that the `User` model has a "posts" method that defines the relationship. But if you're feeling sassy and want to customize your relationship name (because let's face it, who doesn't love a good nickname?), you can explicitly specify it:

```php
$user = User::factory()
    ->withThreePostsAs('shamelessPlugs', Post::factory()) // Now the user has three shameless plugs (posts)
    ->create();
```

And if your relationship needs a little something extra, you can pass a closure-based state transformation. This is like giving a superpower to our posts to take on specific attributes based on their parent `User`. So if you want your user's posts to have the same "user_type" as their creator, you can do this:

```php
$user = User::factory()
    ->withThreePostsWithCustomUserType(function (array $attributes, User $user) {
        return ['user_type' => $user->type];
    })
    ->create(); // Now the user has three posts with a custom "user_type"!
```

And voila! You've now got yourself a whiz-bang user creating some seriously fabulous content (#yasssqueen). Keep on factoring, dear reader! 🎉🎊🚀

 Alright, buckle up, Laravel newbies! Let's dive into the world of magic with a sprinkle of humor. You know, like Harry Potter casting spells, but instead of turning teacups, we're conjuring relationships. 🧙‍♂️

#### Harnessing the Power of Magic Methods

Laravel has its own Harry Potter-esque factory for building relationships. It's like having a wand that can create complex bonds between models with just a few incantations. Let's take a look:

```php
// Creating a User with 3 posts, using convention magic!
$user = User::factory()
    ->castPostsCharm(3) // Okay, no real charm here, but you get the idea!
    ->create();
```

When you want to override attributes on related models, just toss in an array of ingredients:

```php
// Brewing a potion to create a User with posts, and make them unpublished by default.
$user = User::factory()
    ->castPostsCharm(3, [
        'published' => 'Fixer Upper', // Not really, but close enough!
    ])
    ->create();
```

If you need to create multiple related models with different states, just list them down like ingredients in a spell:

```php
// Casting a spell to create 3 posts for a User, each with its own title.
$user = User::factory()
    ->castPostsCharm(
        ['title' => 'First Post'],
        ['title' => 'Second Post'],
        ['title' => 'Third Post'],
    )
    ->create();
```

And if your state transformation requires access to the parent model, you can use a fancy spell book (closure) for that:

```php
// Brewing a potion with state dependent on User's type.
$user = User::factory()
    ->castPostsCharm(3, function (array $attributes, User $user) {
        return ['user_type' => $user->magicWand]; // Yes, we call it magic wand here!
    })
    ->create();
```

Now that you know the basics of Laravel's magic methods, go forth and create enchanted relationships with ease! 🌙

 Alrighty, buckle up, because we're about to dive into the world of Laravel relationships! Let's kick things off with Belongs To Relationships, shall we?

Remember those good old days when you were building "has many" relationships using factories? Well, it's time to meet their cooler, more organized siblings - the inverse of the relationship! Enter the `for` method. It's like a secret handshake that defines the parent model that your factory-created models are loyal subjects to.

Let's say you've got three noble knights (`App\Models\Post`) who swear allegiance to one and only queen (`User`):

```php
use App\Models\Post;
use App\Models\User;

// Three Post models that are loyal subjects of a single user: Queen Jessica Archer
$posts = Post::factory()
    ->count(3)
    ->for(User::factory()->state([
        'name' => 'Jessica Archer',
    ]))
    ->create();
```

Now, if you already have a crowned monarch (parent model instance) that should be associated with the subjects you're creating, you can pass the royalty to the `for` method:

```php
// Queen Jessica Archer becomes our monarch
$queen = User::factory()->create(['name' => 'Jessica Archer']);

// Three Post models that are loyal subjects of Queen Jessica Archer
$posts = Post::factory()
    ->count(3)
    ->for($queen)
    ->create();
```

And there you have it! Now your Laravel kingdom is all set for a royal rule, complete with lords and vassals that know their place in the hierarchy. Because as we all know, in any good fantasy story, every character needs to belong somewhere! 😊😉🏰👑

 Alright, buckle up, coding cowboy! Laravel's got a trick up its sleeve that'll make your life easier than a well-oiled cog in a Swiss watch. We're talking about magic methods, the sorcery of relationships!

You see, these are like the secret handshakes between models that let them know who their daddy is - or in Laravel terms, who they belong to. So, if you want to tell the world (or at least your database) that three posts should be the illegitimate children of a certain `user`, here's how you do it:

```php
$posts = Post::factory()
    ->hocusPocus(3)
    ->forWitch('User', [
        'name' => 'Jessica Archer',
    ])
    ->create();
```

Just remember, these enchanted methods work their magic behind the scenes to make your life easier. Now, isn't that a spell-binding convenience? 😉

<a name="many-to-many-relationships"></a>
And if you're dealing with a polyamorous relationship (in database terms: many-to-many), don't worry - Laravel's got your back. Just think of it as the dating app for models that can't decide who they love most:

```php
// Let's set up a many-to-many relationship between Users and Posts
$user = User::factory()->create([
    'name' => 'John Doe',
]);

$post = Post::factory()->create([
    'title' => 'The secret recipe for Laravel magic sauce',
]);

// Now, let them love each other!
$user->posts()
    ->save($post);
```

And there you have it! A relationship more magical than a unicorn's sparkles in the moonlight. Happy coding, partner! 🦄✨

 Ah, the thrill of a many-to-many dance! Just like in those cha-cha lessons where John Travolta swings his hips with abandon, our Laravel models get down to business with equal flair. 🕺️

Instead of a one-sided love affair, as seen in the `hasMany` relationships, these parties have each other hooked – hence the "many to many." Here's how you can set it up:

```php
use App\Models\Role;
use App\Models\User;

$user = User::factory()
    ->getDownAndDirtyWith(Role::factory()->count(3)) // Sounds better, right? 😉
    ->create();
```

And hey, if you're into the nitty-gritties of pivot table attributes, feel free to give this section a gander: <a name="pivot-table-attributes"></a>

Just remember, in the world of many-to-many relationships, it's all about the interplay. 💃️🕺️ And that's not just on the dance floor! 😉

 Alrighty, grab your dancing shoes and buckle up for a Laravel ride! Let's dive into the mystical world of Pivot Table Attributes - it's like a three-ring circus over here! 🎪

If you're hankering to assign some attributes to the glorious middleman table linking your models together, fear not! The `hasAttached` method is just the magician you've been waiting for. It takes an array of attribute names and values as its second act (I mean argument) 🎭:

```php
use App\Models\Role;
use App\Models\User;

$user = User::factory()
    ->hasAttached( // Yes, I'm talking to you, method!
        Role::factory()->count(3),
        ['active' => true] // Don't forget your props, buddy!
    )
    ->create();
```

Oh, and if your state change requires a rendezvous with the related model, fear not, for you can provide a closure-based state transformation! 🤓

```php
$user = User::factory()
    ->hasAttached(
        Role::factory()
            ->count(3)
            ->state(function (array $attributes, User $user) {
                return ['name' => $user->name.' Role']; // A little stage magic never hurt anyone!
            }),
        ['active' => true] // Remember your closing bow!
    )
    ->create();
```

Now, if you already have model instances that are just dying to join the party, feel free to invite them over with a warm welcome! 🎉

```php
$roles = Role::factory()->count(3)->create();

$users = User::factory()
    ->count(3)
    ->hasAttached($roles, ['active' => true]) // Yes, we're still talking to you, method!
    ->create();
```

And there you have it! Pivot Table Attributes – the unsung heroes of your Laravel relationships 💃✨

 Alright, buckle up, tech cowboys! Laravel's not just a horse of a different color, it's got some magical pony tricks up its sleeve too. Enter the scene: the enchanting world of magic methods!

Now, imagine you're at a fancy dinner party, and you need to introduce your date as both a guest and a host simultaneously – that's what many-to-many relationships are like in Laravel land. And who better to play matchmaker than our trusty `factory` relationship method on the `User` model?

```php
Let's twist this tango, partners!
$user = User::factory()->getSpiffyDate(1, [
    'name' => 'Editor'
]);
```

That's right, folks – no more tiresome one-liners defining relationships. Laravel conjures up the related models for you using good ol' fashioned convention over configuration! So sit back and enjoy the symphony of seamless code.

But wait, there's more! Ever heard of polymorphic relationships? Think of it as a party where both cats and dogs can dance together on the same floor – each knowing their own two-step. Here's how to join the dance:

```php
// Party time! Let's get this polymorphic relationship started.
$cat = Cat::first();
$user = User::find(1);

// The cat and user will forever be linked, sharing their love for dancing.
$cat->notes()->create([
    'note' => 'Meow! This user knows how to shake it!',
    'user_id' => $user->id
]);
```

And voila! You've just danced your way into the heart of Laravel magic methods. So keep on coding, cowboy! The wild west of web development awaits!

 ### The Shape-Shifting Liaisons of Laravel Land! 🦄🐉🦁

Dive into the magical realm of [Polymorphic Relationships](/docs/{{version}}/eloquent-relationships#polymorphic-relationships), where models can transform into each other's BFFs! 🤓🎩

Polymorphic relationships, akin to shape-shifting superheroes, are not only possible but also can be conjured up using factories! These "morph many" partnerships are forged in the same mystical manner as typical "has many" relationships. Let's say you've got an `App\Models\Post` model that's all chummy with an `App\Models\Comment` model:

```php
use App\Models\Post;

$post = Post::factory()->transformIntoABestCommentsPal(3)->create(); // Spell of the day! 🔮✨
```

<a name="morph-to-relationships"></a>
**And that, dear friends, is how to tame a morphing menagerie in Laravel!** 🦄🐉🦁🥳🥳🥳

 Alrighty, let's dive into the whimsical world of Laravel relationships, shall we? But first, a warning: magic beans are strictly off-limits here! No morphing into relationships by waving a wand (or method). Instead, we need to get our hands dirty with good old `for` method.

Imagine you're hosting a wild party at your house and every guest needs to be assigned to one room (your blog post in this case). Now, you don't just point your wand and say "MorphTo GuestsRoom", do you? No, you assign each guest explicitly. It's the same deal with our `Comment` model and its `commentable` method defining a `morphTo` relationship.

So, to create three comments that belong to one post, we whip out the `for` method like a seasoned magician:

```php
$comments = Comment::factory()->count(3) // Here's the party guest count
    ->for(Post::factory(), 'commentable') // And here's our room assignment (post)
    ->create(); // Boom! Party's on, comments are created!
```

Just remember, in this magical realm of Laravel, clear instructions and good old fashioned `for` method are the keys to creating those polymorphic many-to-many relationships. Happy commenting! 🎉🥳

 Alrighty, buckle up, folks! Let's dive into the whimsical world of polymorphic many-to-many relationships in Laravel Land. These are not your run-of-the-mill relationships - they're more like the polyamorous couples at a swingers' ball, where things can get complicated but oh-so-entertaining!

Just as you'd create your non-polymorphic many-to-many relationships, you can whip up these magical ones using the power of the `has` method:

```php
First off, let's import our models like we're casting for a reality TV show:

use App\Models\Tag;
use App\Models\Video;

Next, we summon a video with some tags attached, ready to party at the discotheque of the Internet:

$video = Video::factory()
    ->hasAttached(
        Tag::factory()->count(3), // 3 tags, no more, no less - think of it like a happy hour deal
        ['public' => true] // This is like getting VIP access to the party - public it is!
    )
    ->create();
```

Now, if you prefer the dramatic entrance, you can also use the `hasTags` method:

```php
And for all you drama queens and kings out there:

$video = Video::factory()
    ->hasTags(3, ['public' => true]) // 3 tags, VIP access - same as before but with a little more flair
    ->create();
```

Now that you've got the hang of it, go forth and create those crazy, entangled relationships! Just remember, in this world, no one can be told what the polymorphic many-to-many relationship is - they have to see it for themselves.

 ### The Art of Matrimony in Factories (Laravel Style!)

Alright, buckle up, because we're about to dive into the world of model relationships... or as I like to call it, the Tinder for your database! To hook up your model factory with a special someone (ahem, another model), you'll need to introduce them at the right spot - in this case, that's usually when you're exchanging those awkward 'who-pays-for-dinner' messages - I mean, dealing with foreign keys like `belongsTo` or `morphTo`. For instance, if you fancy creating a date (post) and inviting a hot date (user), here's how you pull it off:

```php
Use App\Models\User;

/**
 * Set the stage for your model's default date.
 *
 * @return array<string, mixed>
 */
public function setUpDate(): array {
    $this->date['plusOne'] = User::factory();
    $this->date['topic'] = fake()->title();
    $this->date['conversationStarter'] = fake()->paragraph();
}
```

Now, if the relationship's specific details are a bit picky and depend on its own factory, you can whip up a quick little closure to sort it out:

```php
/**
 * Set the stage for your model's default date.
 *
 * @return array<string, mixed>
 */
public function setUpDate(): array {
    $this->date['plusOne'] = User::factory();
    $this->date['typeOfDate'] = function (array $attributes) {
        return User::find($attributes['plusOne'])->type;
    };
    $this->date['topic'] = fake()->title();
    $this->date['conversationStarter'] = fake()->paragraph();
}
```

Oh, and if you're worried about repeating the same model for a relationship (cough, awkward exes), here's how to recycle an existing model:

<a name="recycling-an-existing-model-for-relationships"></a>

```php
/**
 * Set the stage for your model's default date with a special someone.
 *
 * @return array<string, mixed>
 */
public function setUpDateWithSpecialSomeone(): array {
    $this->date['plusOne'] = User::where('name', '=', 'Exhibitionist Exoticus')->first();
    $this->date['topic'] = fake()->title();
    $this->date['conversationStarter'] = fake()->paragraph();
}
```

And voila! Now your models are ready to mingle and build beautiful relationships, one factory at a time. Just remember, it's all about swiping right!

 ### Refurbishing Your Models for Relationship Goals! 🔄✨

Let's say you've got a bunch of models that share the same significant other, like your `Airline`, `Flight`, and `Ticket` pals. Instead of playing matchmaker every time, you can use the fancy `recycle` method to ensure one cool date (a model) stays together with all your relationships! 💑

Imagine this romantic drama: you've got an airline, a flight, and a ticket hanging out together, with the ticket belonging to both the airline and the flight. The flight also happens to be dating the same airline. To avoid any awkward introductions, just pass an airline instance to the `recycle` method on your ticket factory:

```php
Ticket::factory()
    ->recycle(Airline::factory()->makeDate()) // Because who doesn't love a good date function? 💘
    ->create();
```

Now, if you've got a harem of models belonging to the same user or team (we won't judge!), the `recycle` method is your new BFF.

Did you know the `recycle` method isn't just a one-person dance? You can also pass it a collection of existing models, and it will pick someone at random when it needs to invite them to the relationship party:

```php
Ticket::factory()
    ->recycle($airlines) // Because variety is the spice of life 🌶️
    ->create();
```

Keep calm and `recycle` on, my friend! 💃🏼🕺🏼🚀