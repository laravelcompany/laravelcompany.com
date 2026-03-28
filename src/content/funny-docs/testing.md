 # Laugh, Test, Conquer: Your Laravel Guide to Fun-tastic Testing! 🥳🎉

## Introduction 🎭👋
Welcome to the most exciting party in town - *Laravel's Laughter-Filled Testing Fiesta*! Here, we'll help you tickle your funny bone while learning about tests, because who said programming had to be serious all the time? 😂🤹‍♂️

## Environment 🌳🏡
First things first: setting up a friendly testing ground. Don't worry, we won't ask you to paint your bedroom test-green or something like that - just follow these easy steps! 🛠️🔨

## Creating Tests 📝🎯
Now it's time to dive into the world of coding jokes and dad puns! We'll show you how to create your very own tests with a side of giggles. 🤣👨‍💻

## Running Tests 🏃‍♂️🌟
Let's put our tests to the test! Learn how to run these wacky creatures and watch them dance their way through your code, ensuring it never makes you laugh uncontrollably in embarrassment at a bug show. 🐙🎭🤪

### Running Tests in Parallel 🏃‍♂️🏃‍♀️💼
When life gives you tests, make them run concurrently! Learn how to have your tests perform a high-five race. 🚀🤝🌱

### Reporting Test Coverage 📊📈
We'll keep score and report on which parts of your code get the most tickles, so you can give them a good laugh or maybe even a well-deserved patch. 🎭🤪🛠️

### Profiling Tests 📅🕒
Ever wondered how long it takes for your tests to make everyone laugh? Well, now you can find out with our *Test Time Travel* feature! ⏰🕰️🎭

## Configuration Caching 🔒🌐
Last but not least, let's cache those configurations like a pro! No more waiting for your browser to load when you could be testing and laughing instead. 🛠️🚀🎉

 Hello there! Welcome to the jamboree of code-checking fun with Laravel – the testing-friendly framework that's so eager to make sure your code is as cool as it thinks it is. 🤓

Laravel comes with built-in support for Pest and PHPUnit, which are like the superhero duo of test-world, ready to leap into action right out of the box! A `phpunit.xml` file is already set up like a well-organized party invite list for your application.

The framework also offers handy helper methods that make testing a breeze, just like those automatic selfie sticks in a funhouse mirror maze. 📸

By default, your application's `tests` directory is stocked with two test zones: `Feature` and `Unit`. Think of them as the main stage (`Feature`) where all the stars perform their dance routine together, and the practice room (`Unit`) where individual moves are perfected. Unit tests focus on a teeny-tiny portion of your code, often honing in on a single method – like an obsessive magpie collecting shiny pieces of logic. 🐦

Tests within the `Unit` directory don't power up your Laravel application, so they can't access the database or other services. It's all about isolating those nifty methods and making sure they're flawless before they hit the big stage.

Feature tests shine a spotlight on a larger piece of code, testing how several objects interact or even responding to an HTTP request at a JSON endpoint. **You should aim for most of your tests to be feature tests because they give you maximum confidence that your whole ensemble is rocking the house as intended.** 🎶

An `ExampleTest.php` file is provided in both the `Feature` and `Unit` test directories to get you started on your code-checking adventure. After installing a new Laravel application, just run the `vendor/bin/pest`, `vendor/bin/phpunit`, or `php artisan test` commands to set your tests free! 🌪️

<a name="environment"></a>
Now let's talk about test environments. It's like having a secret laboratory where you can safely experiment without messing up the main codebase. You can create different test environments for different types of testing scenarios, just like having multiple lab coats for various chemical reactions. 🔬🧪

Laravel comes with a default testing environment called `testing`. To create your own test environment, you can use the `php artisan env` command followed by the name of your new environment. This way, you can keep the fun and chaos of testing contained, while ensuring that the main codebase remains as clean and organized as possible. 🧹✨

So, grab a cup of coffee (or whatever tickles your fancy), put on your lab coat (er, test environment) and get ready to dance the night away with Laravel's testing features! 🎉💃🕺

 Ahoy there, Captain Coder! Let's dive into the mystical world of Laravel's testing environment – a place where unicorns dance and rainbows light up the phpunit.xml file! 🦄🌈

When you decide to embark on a quest for testing your Laravel app, our brave little framework will automatically hoist the Jolly Roger of the `testing` configuration environment. This piratey transformation occurs due to the magical elixir of environment variables that's been bottled within the phpunit.xml file. So buckle up and prepare yourself for an adventure where no sessions or cache data will be persisted, like a ship without anchors drifting in the sea of tests! 🌊

Of course, you're not just limited to this seafaring configuration. Feel free to add other testing environment configuration values to suit your needs as the captain of this vessel. However, don't forget to tweak the `testing` environment settings within your phpunit.xml file. Once you've set sail on these waters, make sure to clear your configuration cache with the trusty Artisan command, 'config:clear', to ensure there are no stale treasure maps or navigation charts cluttering up the journey! 🏴‍☠️

Ah, that wasn't so painful, was it? Now you can test like a true seafarer, unicorns and all! 🦄💪🏽

 Alright, party people! Let's talk shop about this swanky little number called the `.env.testing` file. You can find it chillin' in the root directory of your project, just like a cool cat hanging out in a jazz club. But instead of a saxophone, it's loaded with secrets, settings, and all sorts of juicy configs!

Now, why would you want this fancy file? Well, when you're doing Pest or PHPUnit tests, or executing Artisan commands with the oh-so-trendy `--env=testing` option, this is the file that steps up to the mic and takes center stage. It's like the secret sauce in a recipe, making sure your tests come out just right!

So, don't be shy; create your very own `.env.testing` file, and watch as your testing world becomes a little more colorful, a little more fun, and a whole lot more accurate (okay, maybe not "funny" per se, but definitely educational). Keep on rockin', Laravelers! 🤘🏼

 Alrighty then! Let's get our test on with Laravel, shall we?

First things first, when you feel the need for speed and want to whip up a new test case, reach for your trusty Artisan command. It's like the Gordon Ramsay of the command line world, telling you exactly what to do:

```shell
php artisan make:test UserTest 👨‍🍳
```

Now if you're feeling fancy and want your test in the `tests/Unit` directory, just add a sprinkle of `--unit` when you're making that test (it's like adding salt to your food, but for your code):

```shell
php artisan make:test UserTest --unit 🥄
```

Oh, and don't forget! You can customize those test stubs like a master chef crafting their own recipes (well, kinda). Just check out [stub publishing](/docs/{{version}}/artisan#stub-customization) for details.

Once you've got your test generated, it's time to define that test using Pest or PHPUnit. This part is like creating a symphony of code, where each line plays its role harmoniously:

```php tab=Pest
<?php

test('basic', function () {
    expect(true)->toBeTrue(); 🎶💥🌈
});
```

```php tab=PHPUnit
<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_basic_test(): void
    {
        $this->assertTrue(true); 🎵💥🎉
    }
}
```

But wait! If you're the type of developer who likes to set up and tear down before and after your tests, just remember: you gotta call `parent::setUp()` at the start of your own `setUp` method and `parent::tearDown()` at the end of your `tearDown` method. Think of it like your mom telling you to say please and thank you when you're asking for something.

Now that you've got the basics down, it's time to run those tests! Just kick back in your terminal and execute one of these fine commands:

```shell
vendor/bin/pest 🥤
```

or

```shell
vendor/bin/phpunit 🍺
```

or

```shell
php artisan test 🎬
```

And that's a wrap! Now go forth and test with pride, Laravel style. 💪💻🎉

 Alright, Captain Coder! You've crafted your tests like a maestro composing symphonies of code, but now it's time to put them to the test...literally! Here's how you can unleash your little coding warriors and watch them battle it out:

1. **Pest Party:** If your tests are feeling peckish for some action, feed them with `pest`. Remember to bark the following command at your terminal:

```shell tab=Pest
./vendor/bin/pest 🥨🍕🍔
```

2. **PHPUnit Feast:** On the other hand, if PHPUnit is more your testing tamarin's taste, then serve them up this command:

```shell tab=PHPUnit
./vendor/bin/phpunit 🍌🥝🥦
```

But wait! There's more. You can also utilize the `test` Artisan command to run your tests. This command is like a drill sergeant, barking out detailed reports to make development and debugging a breeze:

```shell
php artisan test 📣🎤🔊
```

And if you want to pass some special orders (arguments) to your testing troops, feel free to do so:

```shell
php artisan test --testsuite=Feature --stop-on-failure 🏳️‍🌈🚫
```

Now, sit back, relax, and watch your tests duke it out like a coding fight club! 🥊🤜🏼🤛🏼

 Alrighty, folks! Let's talk about making test time fly faster than a speeding Laravel. By default, our beloved framework and its trusty sidekicks Pest and PHPUnit are all about the one-at-a-time approach for testing, like a shy first date. But fret not, because we're here to turn up the party and have tests racing in parallel!

First things first: You need to invite `brianium/paratest` to your dev team as a Composer guest. Once they've RSVPed, simply run:

```shell
composer require brianium/paratest --dev
```

Now, when you're ready to party like it's 2019 (the year Laravel discovered parallel testing), fire up the `test` Artisan command with the `--parallel` option:

```shell
php artisan test --parallel
```

By default, Laravel will round up your CPU cores and invite them to join the party. But if you're feeling like a party of one (or many), you can specify the number of processes using the `--processes` option:

```shell
php artisan test --parallel --processes=4
```

Now, here's the catch of the night - not all Pest and PHPUnit options will be available when tests are going all-in (like `--do-not-cache-result`). So keep that in mind as you twist and shout your way through parallel testing! 🕺️💃️

And remember, just like any good party, things can get a little wild when running tests in parallel. So make sure to have a designated cleaner on hand (or a fresh `composer install`) to tidy up afterwards! 🎉🥳

 Alrighty then! 🤹‍♂️ Let's dive into the Laravel world of parallel testing and databases, where things get a bit more chaotic than your average house party. 🎉

First off, you gotta make sure you've set up a primary database connection – think of it as the lifeblood that keeps your tests running smooth. Once you do that, Laravel will whip up test databases for each parallel test process like a pro DJ spinning tracks on multiple decks. 🥄

These test databases aren't named randomly like "Dave from Accounting's secret playlist" – instead, they'll be labeled with a unique process token, so you won't have to worry about mix-ups (unless your processes happen to share names with '80s pop stars). 🤓

For instance, if you have two parallel test processes running concurrently, Laravel will create `your_db_test_1` and `your_db_test_2`. Just like how you don't invite both Steve and Steve-O to the same party, you keep your tests separated in databases. 🤘

By default, these test databases stick around between `test` Artisan command calls, so they can be reused like recyclable water bottles at a music festival. But if you want to clear the decks and start fresh for each test run (kinda like spring cleaning your codebase), you can use the `--recreate-databases` option:

```shell
php artisan test --parallel --recreate-databases
```

Now that's a party trick worth showing off at your next coding soirée! 🤩

 Ahoy there, coders! Ever found yourself in a pickle with your tests trying to get cozy with each other in multiple test processes? Fret not, for we've got just the thing to help you out – it's called Parallel Testing Hooks!

Imagine a grand circus tent where every performer knows their act and shares resources without causing chaos. That's what these hooks do for your tests! Using the `ParallelTesting` facade, you can tell our system what to do before and after a process or test case starts and ends. Here's how:

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\ParallelTesting;
use PHPUnit\Framework\TestCase;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // When the big top goes up, run this (process token and current test case)
        ParallelTesting::setUpProcess(function ($token) use ($testCase) {
            // Do something amazing here!
        });

        // When each performer takes the stage (test case), run this (process token and current test case)
        ParallelTesting::setUpTestCase(function ($token, $testCase) {
            // Prepare your popcorn stand for the next act!
        });

        // After seeds are planted in the test database...
        ParallelTesting::setUpTestDatabase(function ($database, $token) {
            Artisan::call('db:seed');
        });

        // When the curtain comes down on a test case...
        ParallelTesting::tearDownTestCase(function ($token, $testCase) {
            // Clean up your popcorn stand for the next act!
        });

        // And when the big top packs up (process), run this (process token)
        ParallelTesting::tearDownProcess(function ($token) {
            // Fold those chairs and put them away!
        });
    }
}
```

Now, you might be wondering how to access that mysterious process token. Well, my dear friend, it's as easy as pie (or popcorn, if you prefer). Just use the `$token` variable in your hooks!

 Alrighty, let's dive into the world of Laravel's parallel testing shenanigans! 🤹‍♂️

#### Getting Your Hands on the Parallel Process Token (AKA The Party Invite)

If you fancy joining the dance floor with your fellow test processes, you'll need to whip out the `token` method - think of it as your exclusive party invite! This magical string is a one-of-a-kind identifier for each individual test process in the ballroom. It's like wearing a glow-in-the-dark bowtie that helps keep resources separated and prevent test collisions (aka dance floor disasters).

Here's how to grab your token:

    $token = ParallelTesting::token();

<a name="reporting-test-coverage"></a>
Now, let's talk about the glitzy after-party – test coverage reporting! 🥳

#### Reporting Your Test Coverage (AKA The Dance-Off)

After a long night of testing, it's time to show off your moves and prove you've covered all the bases. You can use Laravel's built-in tools to generate a test coverage report that'll make you the envy of the test-o-sphere! 💃🔥

Stay classy, test warriors! 🎉

 ### Unraveling Test Coverage: A Comedy of Errors, (or how to ensure your tests aren't just jokers)

[!ATTENTION]
This hilarious feature demands the presence of either Xdebug - think of it as the Sherlock Holmes of PHP debugging tools (<https://xdebug.org>) or PCOV, the unsung hero of testing coverage (<https://pecl.php.net/package/pcov>).

Now, let's say you're running your application tests and suspect that your test cases might be more into comedy than code. Or perhaps you want to know how much of your precious application code is being goofed off during these tests. Well, don't worry, we've got you covered... literally! All you need to do is spice up your test command with a dash of `--coverage`:

```shell
php artisan test --coverage
```

<a name="enforcing-a-minimum-coverage-threshold"></a>
And if you're tired of those slapstick performances and want to ensure your tests are doing more than making a fool out of themselves, you can enforce a minimum coverage threshold. This way, only the tests that make a genuine effort will be considered for the final curtain call:

```shell
php artisan test --coverage --minimum-percentage=75
```

Now go forth and ensure your tests are as reliable as a comedian with a punchline prepared!

 Alright, folks! Let's talk Laravel testing, but with a dash of humor because who says tech docs can't be fun? 🤔🤓

#### Setting the Bar High: Minimum Test Coverage Threshold (The "Don't Make Me Laugh" Edition)

Ever felt like your tests could do with a bit more... *coverage*? Well, you're in luck! With Laravel, you can now set a minimum test coverage threshold for your application. Why, you ask? Because if your tests aren't pulling their weight, they should be laughing all the way to failure-ville! 🎶🚍

```shell
php artisan test --coverage --min=80.3
```

Just replace `80.3` with the minimum amount of hilarity you expect from your tests, and Laravel will ensure they meet this standard. If not, prepare for a good laugh (or tears) as the test suite fails to impress! 😂💔

<a name="profiling-tests"></a>

#### Profiling Tests (The "Show Me the Numbers" Edition)

Now that we've got your tests performing at their best, it's time to see just how well they're doing. With Laravel's built-in test profiler, you can analyze the speed and efficiency of each individual test. Because who doesn't love a good numbers game, right?

To profile your tests, simply use:

```shell
php artisan test --profile
```

This command will generate a detailed report on the performance of your tests. Now go ahead, impress yourself (and maybe even us) with those high scores! 🏆🎉

 ### Supercharging Your Test Game! ⚡️🚀

Ahoy there, code wranglers! Prepare to embark on a thrilling quest for speed and efficiency in your Laravel testing domain. But don't worry, we won't ask you to battle any mythical beasts or solve enchanted riddles (unless you really want to).

Meet the Artisan test runner, your new best friend in town! It not only runs your tests but also hides a clever secret - a nifty tool for identifying your application's snail-pace tests. Just summon it with the `--profile` incantation:

```shell
php artisan test --profile
```

What happens next is like finding hidden treasures! This magical spell unveils a list of your top ten tortoise-race tests, allowing you to zero in on which sluggish tests require a speed makeover to give your test suite the lightning-fast boost it deserves. So grab your magnifying glass and get detective-ing! 🕵️‍♂️🔍

 ## Configuration Time-Traveling! 🕰️

Ah, the joys of testing in Laravel land! Ever felt like your computer is turning into a snail on steroids because it's booting the application for each *individual* test method? 🐌 Well, worry no more, my friend! We've got a time-traveling solution that'll make your tests faster than a cheetah on roller skates!

Introducing... Configuration Caching! 🤓

When running tests, Laravel boots the application for each test method like a time machine stuck in the past (but in a good way). Now, you wouldn't want your computer to travel back to the stone age every time you run a test, would you? 🏹 So, to build that time machine once and reuse it for all tests during a single journey, you can hop aboard the `Illuminate\Foundation\Testing\WithCachedConfig` trait:

```php tab=Pest Time-Travel
<?php

use Illuminate\Foundation\Testing\WithCachedConfig;

pest()->time_travel(WithCachedConfig::class); // Step into the TARDIS, mate! 🛸

// ...
```

```php tab=PHPUnit Time-Machine Test Case
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithCachedConfig;
use Tests\TestCase;

class ConfigTest extends TestCase // Our time machine, ready to go! 🚀
{
    use WithCachedConfig;

    // ...
}
```

So buckle up, and let's ride the rails of time with Configuration Caching! 🕰️🚅 Happy testing, dear developer! 🎉