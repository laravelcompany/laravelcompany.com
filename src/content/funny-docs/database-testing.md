 ## The Database Dance: A Laravel Ballroom Guide 💃🏻🎉

### Entrance (Introduction)

Welcome, dance enthusiasts! It's time to hit the floor with the Laravel Database Dance. We'll teach you the steps for the perfect twirl, ensuring every move is smooth and your data stays pristine 🤩

#### The Spinning Do-Over (Resetting the Database After Each Test)

Just like a spinning top that needs resetting after each dance, so does our database. Fear not, Laravel has a clever trick up its sleeve called `make:migration`. Simply run this command to create a fresh migration for your database after every test 🕺💃

<a name="model-factories"></a>

### The Line Dance (Model Factories)

In any good dance, we've got the line dancers. Model factories are your trusty partners who keep the party going by churning out identical database records. Why write a thousand user accounts when you can have your factory do it for you with just one command? 🕺️💃

<a name="running-seeders"></a>

### The Grand Entrance (Running Seeders)

Seeders are like the DJs of the database world, responsible for spinning up your party. They'll populate those empty dance floors with data you provide, so your tests always start off on the right foot 🎶💃

<a name="available-assertions"></a>

### The Dance Check (Available Assertions)

The dance floor can get chaotic, but it's important to keep things under control. Laravel provides you with a set of assertion moves that ensure your database is following the dance rules correctly. From checking if John and Jane are dancing together, to making sure the DJ doesn't play the same song twice 🕺💃🎶🎵

 Alrighty, buckle up, coders! Laravel ain't just a pretty face; it's also a test-driving dream come true! 🚗gles

Why you ask? Well, because it's stocked with swanky tools and assertions that make testing your database-driven apps about as easy as ordering takeout (and who doesn't love a good takeout night?). And, just like a well-oiled machine, Laravel model factories and seeders will make creating test database records using your Eloquent models and relationships smoother than a baby's bottom. So, grab a virtual popcorn, because we're about to embark on a whirlwind tour of these power features! 🍿🚀

First stop: <a href="#resetting-the-database-after-each-test">Resetting the database after each test</a> - You know what they say: cleanliness is next to godliness, and in coding, it's next to happy testing! 🧹😇

Now, strap on those safety belts again as we dive into... 🎠🎉

<a name="model-factories"></a>Model Factories: Because creating test data shouldn't require a degree in cloning. 👽🔬

And finally, <a href="#seeding">Seeding</a>: The cherry on top of your test database sundae! 🍦🌟

So buckle up and let's get this testing party started! 🎉🎉🎉

 Alrighty then! Let's delve into the mystifying world of database resets after each test, shall we? 🕰️

You know the drill - no one likes a party pooper who brings up last night's leftovers when you're trying to enjoy tonight's feast. In our case, it's data from a previous test interfering with subsequent tests - and that's where Laravel's charming `Illuminate\Foundation\Testing\RefreshDatabase` trait steps in to save the day! 🕵️‍♂️

To get this magical trait working for you, just sprinkle it onto your test class:

```php tab=Pest Jamboree
<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

pest()->use(RefreshDatabase::class);

test('the basic shindig', function () {
    $response = $this->get('/');

    // ...
});
```

```php tab=PHPUnit Dance-off
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic functional test example.
     */
    public function test_the_basic_shindig(): void
    {
        $response = $this->get('/');

        // ...
    }
}
```

Now, hold your horses! The `Illuminate\Foundation\Testing\RefreshDatabase` trait is a cunning trickster that won't migrate your database if your schema is already up-to-date. Instead, it performs its dastardly deeds within a cozy little database transaction. That means any records added to the database by test cases that aren't using this trait are still lurking in there like the last slice of pizza at a frat party! 🍕

If you'd rather wipe the slate clean every time, feel free to use the `Illuminate\Foundation\Testing\DatabaseMigrations` or `Illuminate\Foundation\Testing\DatabaseTruncation` traits instead. But be warned - both of these options are akin to setting off fireworks at a quiet library; they're significantly slower than our beloved `RefreshDatabase` trait! 💣

<a name="model-factories"></a>
Now, let's talk about model factories. Think of them as your trusty band of backup dancers when you need to create consistent and repeatable test data. Stay tuned for the next episode in our Laravel comedy saga! 🎶✨

 ## Model Factories: The Magic Database Populators! 🎩✨

Ever found yourself in a pickle, needing to stuff your database with some test data before running your tests? Manually typing out each column's value is akin to writing a novel - and who has time for that when you could be binge-watching cat videos instead? Enter Laravel's Model Factories!

Model Factories let you define a suite of default attributes for every one of your [Eloquent models](/docs/{{version}}/eloquent), making the process of creating test data as effortless as ordering a pizza (though admittedly less cheese-y). If you're eager to learn more about these magical creations, dive into our comprehensive [Model Factory Documentation](/docs/{{version}}/eloquent-factories)!

Once you've crafted your Model Factory, you can put it to work in your tests to spawn models like a digital Pokémon Trainer:

```php tab=Pest (aka Pikachu)
use App\Models\User; // Let's catch 'em all! 🐹

test('models can be instantiated', function () {
    $user = User::factory()->create(); // Unleash the power of your Model Factory!

    // ...
});
```

```php tab=PHPUnit (aka Charmander)
use App\Models\User; // Time to evolve and level up! 🔥

public function test_models_can_be_instantiated(): void
{
    $user = User::factory()->create(); // Let's get this party started!

    // ...
}
```

And if you're feeling extra adventurous, take a gander at [Running Seeders](#running-seeders) for more tips on populating your database with data using Laravel's trusty Seeders! Happy testing, and may the odds be ever in your favor! 🎲🚀🌟

 ## Populating the Party! 🎉

Ready to throw a grand ol' shindig in your database during a feature test? Well, buckle up, partner! Here's how you can use [database seeders](/docs/{{version}}/seeding) as your trusty DJs. 🎧

### Let's Get This Party Started 🥳

By default, our friendly DJ, the `DatabaseSeeder`, will spin all of your other seeders once you call the `seed` method (remember, this is like giving them the mic to play their best tunes). But if you want to call a specific seeder to the dance floor, just pass its class name to the `seed` method:

```php tab=Pest
<?php

use Database\Seeders\OrderStatusSeeder;
use Database\Seeders\TransactionStatusSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

pest()->use(RefreshDatabase::class);

test('it’s always a party with Orders', function () {
    // Cue up the DatabaseSeeder...
    $this->seed();

    // Call up OrderStatusSeeder for some sweet beats...
    $this->seed(OrderStatusSeeder::class);

    // ...

    // Get the whole crew on stage...
    $this->seed([
        OrderStatusSeeder::class,
        TransactionStatusSeeder::class,
        // ...
    ]);
});
```

```php tab=PHPUnit
<?php

namespace Tests\Feature;

use Database\Seeders\OrderStatusSeeder;
use Database\Seeders\TransactionStatusSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test creating a new order.
     */
    public function test_it_s_always_a_party_with_orders(): void
    {
        // Cue up the DatabaseSeeder...
        $this->seed();

        // Call up OrderStatusSeeder for some sweet beats...
        $this->seed(OrderStatusSeeder::class);

        // ...

        // Get the whole crew on stage...
        $this->seed([
            OrderStatusSeeder::class,
            TransactionStatusSeeder::class,
            // ...
        ]);
    }
}
```

### Auto-DJ Mode 🎤

If you want Laravel to automatically seed the dance floor before each test that uses the `RefreshDatabase` trait, just add the `Seed` attribute to your base test class:

```php
<?php

namespace Tests;

use Illuminate\Foundation\Testing\Attributes\Seed;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

#[Seed]
abstract class TestCase extends BaseTestCase
{
}
```

When the `Seed` attribute is present, your test will run the `Database\Seeders\DatabaseSeeder` class before each test that uses the `RefreshDatabase` trait. But if you want to specify a certain seeder for the night, just use the `Seeder` attribute on your test class:

```php
<?php

namespace Tests\Feature;

use Database\Seeders\OrderStatusSeeder;
use Illuminate\Foundation\Testing\Attributes\Seeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

#[Seeder(OrderStatusSeeder::class)]
class OrderTest extends TestCase
{
    use RefreshDatabase;

    // ...
}
```

 Ahoy, test coders! 🤓 Let's dive into Laravel's delightful database assertions that'll make your [Pest](https://pestphp.com) or [PHPUnit](https://phpunit.de) feature tests a breeze (or should we say, a "breezy assertion"?). We're about to explore some fun-tastic assertions designed to help you wrangle those squirrelly databases! 🐿

<a name="assert-database-count"></a>
### AssertDatabaseCount

Ever wondered, "How many records should be in my database table?" Well, wonder no more! With `AssertDatabaseCount`, you can ensure your database is filled to the brim (or just the right amount) with records. Just like checking if your fridge has enough beer for a party 🍻— but instead of beer, it's data! 💾

```php
// Ensure there are exactly 100 cats in the database table 'cats'
It('has the correct number of cats', function () {
    $this->assertDatabaseCount(100, 'cats');
});
```

Remember, a happy coder is one with a well-fed database! 🐱‍👓

 Ahoy there, adventurous coder! Let's embark on a delightful journey into the enchanted realm of Laravel assertions. You see, we've got this magical little spell called `assertDatabaseCount`. It's like casting a charm to ensure that your database is living up to its numerical responsibilities.

```php
$this->assertDatabaseCount('users', 5);
```

Here's the lowdown: This incantation checks if the 'users' table in your database contains exactly 5 records, just like how a baker double-checks the ingredients before popping that scrumptious pizza into the oven. If the count is correct, then all is well in the world of data management. But if it's not, then watch out! A friendly reminder may appear on your screen, letting you know that something fishy might be going down in your database.

So go ahead and cast this spell with confidence, knowing that you've got a helpful companion by your side to keep your data kingdom organized and efficient. Happy coding, and may all your queries return favorable results!

 Ahoy there, Laravel coders! Let's embark on a jovial journey through the fascinating world of database management. Ever found yourself in a pickle, wondering if your "users" table has become a hotbed for digital party crashers? Fear not, for I present to you the swashbuckling `assertDatabaseEmpty`!

```php
$this->assertDatabaseEmpty('users');
```

Imagine you're hosting a grand ball, and your guests list reads like a Who's Who of unwanted intruders. Instead of hiring a doorman or serving rancid food to deter them, just call upon this humble function! It'll double-check that your "users" table is as vacant as an abandoned pirate ship at sea. 🏰🏴‍☠️🌊

Now, let's raise the anchor and set sail for new horizons - but first, make sure your database is as tidy as a well-organized treasure chest! 😉

 Ahoy there, shipmates! Fasten your belts and prepare to delve into the mysteries of Laravel's database with our humble guide – the `assertDatabaseHas()` function! This is not just a function, oh no, it's the magical spyglass that lets you peek into your database without leaving the comfort of your command line ship.

Wanna know if Captain Sparrow's pirate crew is hiding in your database? Well, `assertDatabaseHas()` is your parrot, squawking back the details you need to ensure that the "He's a pirate, his life is a cruise" lyrics aren't being sung by the unwanted guests.

Here's how you steer this treasure-seeking function:

```php
$this->assertDatabaseHas('users', [
    'email' => 'sally@example.com',
]);
```

Say, for instance, you want to check if your database has a record of our dear friend Sally at example.com. All you gotta do is point `assertDatabaseHas()` towards the `users` table and tell it what to look for in her email address. And voila! If it's there, the function will return true and give you a high-five (or perhaps a pirate cheer, since we're being fancy).

But what if Sally's email is nowhere to be found? Fear not, matey! You can use the counterpart `assertDatabaseMissing()` to check if Sally has been wrongfully detained in your database. So you see, it's like having two magical spies working for you, ensuring your data is just as you want it to be!

Now that we've covered this swashbuckling function, set sail and explore the depths of Laravel with gusto! Who knows what other hidden treasures lie within?

 Alright, let's dive into the world of Laravel's database management, where we play detective with SQL queries! The tool we're focusing on today is the "assertDatabaseMissing" function, a charming fellow that helps you ensure your database is as empty as your fridge after a wild party.

Imagine this: You've just finished deleting a user from your system, but you're not quite sure if the deed was done right. Well, fear no more! With `assertDatabaseMissing`, you can check if that pesky Sally from example.com is still hanging around in your 'users' table.

Here's how you call this helpful chap:

```php
$this->assertDatabaseMissing('users', [
    'email' => 'sally@example.com',
]);
```

Just like that, you can sleep soundly knowing your database is as spotless as a newborn's onesie! So go ahead, give it a whirl, and enjoy the peace of mind that comes with a database free of unwanted guests! 🤓

 Ahoy there, dear Laravel coders! Let's have a bit of fun while we talk about `assertSoftDeleted`. This here is like the ghostbuster of your database world - it makes sure that your models are properly vanished, not just kicked out for a ghostly reappearance later.

So, when you want to check if a certain user (let's call him Fred, because who doesn't love a good ghost story?) has been sent to the digital afterlife, you can use this magic method:

```php
$this->assertSoftDeleted(Fred);
```

Don't worry, it won't actually cast a spell on Fred. It just checks if there are any traces of him left in your database... or if he's been softly deleted, if you will. But remember, unlike real ghosts, once deleted, he won't be coming back! Unless you bring him back with `restore()`, but that's a different story for another time.

Happy coding, ghost hunters! May all your users rest in peace... and database rows be clear! 🎃 👻 🚀

 Oh, the `assertNotSoftDeleted` method is quite the charmer! This little guy ensures your beloved Eloquent model hasn't taken a one-way trip to the digital trash can (aka "soft deleted"). So if you want to make sure that your user, or any other model for that matter, hasn't been hitchhiking on the info highway's backroads, give it a spin:

```php
$this->assertNotSoftDeleted($user);
```

Just like asking someone if they've got a date for the prom – but with more code and less awkwardness (we hope). And hey, if you're curious about other assertions, feel free to follow the yellow brick road to `assertModelExists`. Keep coding, my friend! 🤖🚀💻🎉

 #### Model Magic 8-Ball

Dive into the whimsical world of Laravel where models are as real as your favorite unicorn! Let's chat about `assertModelExists`, the enchanting spell that ensures your model exists within the mystical depths of your database.

```php
Use your wand to summon App\Models\User;

Cast a factory spell to create a User: User::factory()->create();

Wave your wand again, commanding the Owl of Verification to verify the existence of this freshly minted User using `assertModelExists($user)`!
```

<a name="assert-model-missing"></a>
(Just in case you end up with a user who's been turned into a newt, check out its counterpart `assertModelMissing`!)

 Alright, let's dive into the quirky world of Laravel model management! Ever found yourself in a situation where you've deleted a user (we won't ask questions) and wanted to ensure they're really gone from the database? Fear not, dear developer, for I present to you the "assertModelMissing" function!

This hilariously named function is your trusty sidekick when it comes to verifying that a specific model or an entire gang of models (yes, collections of models can hang out too) has taken an early retirement from your database.

Here's how you can use it:

```php
// Import the User model because we're not stalkers, just friendly neighbors in the database world!
use App\Models\User;

// Create a new user, just like that time when you had too many tacos for lunch
$user = User::factory()->create();

// You decided it was time for them to move out, so you evicted them (deleted the user)
$user->delete();

// Now, assert with confidence that they're truly missing from the database
$this->assertModelMissing($user);
```

Pro tip: If you're wondering what kind of witchcraft is happening behind the scenes, Laravel will actually check the database to ensure the correct number of rows are deleted when using this function. So, it's like a sneaky detective on your side!

 Ahoy there, intrepid Laravel adventurer! Let's dive into the mystical land of testing, where unicorns and rainbows aren't just mythical creatures, but rather metaphors for your database queries. But first, we must arm ourselves with the mighty `expectsDatabaseQueryCount` method - a tool as essential to a test as a squirrel is to a forest!

Invoking this powerful spell at the commencement of your test will allow you to set the target number of database queries you foresee being executed during said test. And if, by some cosmic miscalculation, the actual count doesn't align with your prophecy, watch out! The test will come crashing down like a Jenga tower made of overambitious coders' dreams.

Here's how you conjure up this magical incantation:

```php
$this->expectsDatabaseQueryCount(5); // You've now predicted the number of database queries that will dance upon your test stage

// Test... (now perform your enchantments and see if they match your prediction)
```

Remember, testing isn't just about verifying the functionality of your code; it's also an opportunity to flex your programming muscles and prove you have what it takes to outsmart even the sneakiest database queries. So grab your wand (or IDE), cast the `expectsDatabaseQueryCount` spell, and may fortune smile upon your query count! 🚀🌟🐲