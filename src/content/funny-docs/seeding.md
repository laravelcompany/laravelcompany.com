 Ahoy there, database enthusiasts! Let's embark on a fantastical journey into the heart of Laravel's mystifying seed land! Yes, you heard it right – we're talking about Database Seeding!

<a name="writing-seeds"></a>

## Writing Seeders (AKA Sprouting Database Joy)

Before we get our hands dirty in the fertile soil of seeds, let us first familiarize ourselves with the humble **Model Factory**. Think of it as a seed catalog – a magical book that describes all the various types of data we can sprout in our database gardens. It's like being a medieval alchemist, transforming base data into golden rows without any actual heavy lifting!

Now, let us consider **Calling Additional Seeders** (or as I like to call it, "the art of collaboration between seeds"). Picture this: you have a grand plan for your database, but it requires multiple types of seed varieties. Instead of planting each one individually, we can simply ask our fellow seeds to join the party!

But wait, there's more! **Muting Model Events** (or "the secret garden technique") allows us to keep our garden quiet and serene while planting new seeds. In other words, it prevents any loud notifications or alarms that might disturb our delicate seedlings as they take root in the database earth.

<a name="running-seeds"></a>

## Running Seeders (AKA Planting the Database Garden)

Once our seeders are written and ready to go, it's time to plant them in the fertile soil of our database! This is when **Running Seeders** comes into play – the master gardener who takes care of sowing all our seeds at once. With a single command, you can watch as your empty database blooms with vibrant data, like a magician pulling rabbits out of a hat – or in this case, data out of a database!

And there you have it! Now that you've mastered the art of Laravel Database Seeding, go forth and create databases brimming with delightful data, worthy of any medieval garden. Happy seeding!

 Ahoy there, Captain Database! Prepare to set sail on an epic journey filled with data and adventure! In Laravel's pirate ship, we've got a swashbuckling feature called "Seed Classes" that lets you populate your treasure chest (er, database) with loot. All these Seed Class gems are hidden in the `database/seeders` treasure map.

By default, a mighty Captain `DatabaseSeeder` is already on board, ready to lead your crew! From this fearless captain's log, you can use the `call` method like a ship-to-ship signal to set sail with other Seed Classes, allowing you to chart the order of your booty stashing.

> [YARR!] Be warned, ye landlubbers! During this daring voyage, the [Mass Assignment Protection](/docs/{{version}}/eloquent#mass-assignment) will be temporarily disarmed for the safety and success of yer pirate crew!

Now, hoist yer sails, grab yer cutlasses (or coffee), and let's navigate these shimmering Laravel waters together!

 Alrighty, let's get our planting hats on and talk about seeders! To whip up a seeder faster than Paul Newman could whip up a salad dressing, you gotta execute the `make:seeder` Artisan command. All the seedlings sprouted by Laravel will end up in the `database/seeders` directory, which is like a nursery for your database.

```shell
php artisan make:seeder UserSeeder
```

A seeder, when grown to maturity, will have just one method, named `run`. This little gem is called into action when the `db:seed` Artisan command is sown. Within this `run` method, you can plant data into your database in whatever fashion you fancy. You could use the [query builder](/docs/{{version}}/queries) to dig and plant or go high-tech with [Eloquent model factories](/docs/{{version}}/eloquent-factories).

For instance, let's spruce up the default `DatabaseSeeder` class and add a database insert statement to the `run` method:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Throw some seeds, watch 'em grow!
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => Str::random(10).'@example.com',
            'password' => Hash::make('password'),
        ]);
    }
}
```

> [!NOTE]
> If you need any helpers while sowing the seeds, feel free to type-hint them in the `run` method's signature. Laravel's service container will do the heavy lifting and ensure they're ready for action!

 ### Unleashing Model Factories: The Secret to Database Joy! 🎉🎊

Manually crafting attributes for each model seed? Boring! Let's liven things up with [model factories](/docs/{{version}}/eloquent-factories)! These magical creatures will breathe life into your database, making it easier than a magician pulling rabbits out of a hat (well, not quite that easy, but you get the idea). Start by diving into our [model factory playbook](/docs/{{version}}/eloquent-factories) to learn how to train these adorable little helpers. 🐾

Alrighty then! Let's say we want to create 50 users, each with their very own post to call their own. No sweat! Here's the code:

```php
use App\Models\User;

/**
 * Spread joy throughout the database!
 */
public function run(): void
{
    User::factory()
        ->count(50) // 50 users? No problem, we're not counting calories here.
        ->hasPosts(1) // Each user gets one post... and a free kitten!
        ->create();
}
```

<a name="calling-additional-seeders"></a>
### Bonus Round: Calling Multiple Seeders! 🎮

Feeling adventurous? Let's call on multiple seeders to join the party! It's like inviting all your friends over for a database shindig. Just remember, too many cooks in the kitchen can sometimes lead to a mess... but not here! 🥘🍴

```php
use Database\Seeders\YourSecondSeeder;

/**
 * Run the database seeders (yes, plural!)
 */
public function run(): void
{
    // First, unleash our users and their posts!
    User::factory()
        ->count(50)
        ->hasPosts(1)
        ->create();

    // Then, call the second seeder to add even more fun!
    YourSecondSeeder::class->run();
}
```

Happy seeding, folks! 🥳💥🎆

 ### Unleashing the Seeding Squad!

Ah, the `DatabaseSeeder` class - where the magic of populating your databases starts! You can think of it as the general in charge of an epic battlefield, orchestrating the troop movement with precision. But instead of soldiers, we've got seeders, and instead of a battlefield, we've got your database.

Now, let's say you're dealing with a force larger than you can manage alone. Fear not! With the `call` method, you can recruit backup! This badass tactical move allows you to split up the tedious task of seeding into smaller, more manageable files, so no seeder gets overwhelmed by too many responsibilities.

Here's how it works:

```php
/**
 * Deploy the seeder squad.
 */
public function deploy(): void
{
    // Assemble your troops
    $troops = [
        UserSeeder::class,
        PostSeeder::class,
        CommentSeeder::class,
    ];

    // Send them into battle
    $this->call($troops);
}
```

And just like that, you've got an army of seeders ready to conquer your database! But remember, with great power comes great responsibility. Make sure each seeder is well-equipped and trained for the job, or else chaos may ensue! 🤪💣

 ### Silencing the Model Symphony! 🎶🔕

If you're conducting model orchestrations during your seeding session, but don't want those boisterous events crashing the party, fear not! You can mute them using the `WithoutModelEvents` trait. This magical trait ensures that not even a single model event note is played, no matter how many encore performances you call via the `call` method. 🎺🎵

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents; // You'd think they'd provide earplugs instead, but hey, who are we to complain?

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents; // Put on your noise-cancelling headphones, folks!

    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);
    }
}
```

Now, isn't that a symphony of silence you can enjoy while seeding in peace? 🌱🥪

 Alright, database buddies! Fancy filling your Laravel lair with some juicy data? Well, you've come to the right place! 🦖🐯

Let's get this data party started with the mighty Artisan command `db:seed`. By default, it'll call upon the noble `DatabaseSeeder` class, which in turn will rally its troops of seed classes to conquer your database. But if you've got a specific seeder you'd like to honor, just throw the `--class` option into the mix:

```shell
php artisan db:seed 🌮 (it's like tacos for your data)

php artisan db:seed --class=UserSeeder (because who doesn't love a good user taco?)
```

If you're feeling particularly adventurous and want to completely overhaul your database, give the `migrate:fresh` command a spin! In combination with the `--seed` option, it'll wipe out all tables and re-run every one of your migrations like a data-wielding phoenix. Need something more specific? Use the `--seeder` option to pick your champion seeder:

```shell
php artisan migrate:fresh --seed (because fresh data is always better, amirite?)

php artisan migrate:fresh --seed --seeder=UserSeeder (you're welcome, User Seeder squad!)
```

Now go forth and seed, young Laraveler! 🎉🤖🎊

 Alrighty, here's your friendly guide to tickling your database with some seed data, but not without asking first! (Because we all know how messy parties can get.)

In the world of Laravel, sometimes the urge to sprinkle a little data on that pristine production database is irresistible. But wait a sec, you're about to dive into a sea of data and possibly alter or even delete things you didn't mean to! To prevent any unwanted underwater expeditions in the `production` environment, Laravel will kindly ask for your permission before deploying the seeders.

But what if you're one of those impatient gardeners who want their seeds to grow right away? Fear not! Just throw in the `--force` flag when you're planting those seeds:

```shell
php artisan db:seed --force
```

That little command will bypass the polite request for permission and let your seeders run wild, like a mischievous toddler with a water gun. Proceed at your own risk, my friend! Happy seeding!