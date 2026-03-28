 # Laravel Dusk: The Web Browser Robot for Your Laravel App! 🤖

## Welcome to the Future! 🚀

Ever wanted a superhero sidekick that could click buttons, fill forms, and even take screenshots of your Laravel application's UI? Look no further than Laravel Dusk - your new web-browsing, test-running, debugging pal! 🕵️‍♂️

<a name="installation"></a>

## Installation 📦

Let's get this party started! To make sure our robot friend can navigate your app effortlessly, we need to set up the right tools.

### ChromeDriver: Our Secret Weapon 🛠️

First things first - you'll want to install the ChromeDriver (don't worry, it won't actually drive a car). This is our superhero's steering wheel through your app's user interface. You can find installation instructions for various platforms [here](https://sites.google.com/a/chromium.org/chromedriver/home).

### Browser Variety: Because variety is the spice of life 🌶️

Fancy testing your app with a different browser? No problem! Laravel Dusk supports Firefox and Safari as well, not just Chrome. More on that [here](https://laravel.com/docs/8.x/dusk#using-other-browsers).

<a name="getting-started"></a>

## Getting Started 🏁

Now that our trusty robot is equipped with a browser, it's time to let it loose on your application!

### Test Generation 📝

Generate tests using Artisan commands - think of them as blueprints for your robot's missions. `make:dusk` is all you need to get started!

### Database Reset 🔄

For each mission, our bot will be working on a freshly baked app, just like having a new test device every time. You can reset the database after each test using various Artisan commands - check [this](https://laravel.com/docs/8.x/dusk#resetting-the-database-after-each-test) out!

### Running Tests 🏎️

Once your tests are generated, it's time to let the robot run wild! You can execute tests with a simple `php artisan dusk` command.

### Environment Handling 🌍

Different environments require different testing configurations - no worries! Laravel Dusk allows you to switch between environments easily based on your needs. [More info here](https://laravel.com/docs/8.x/dusk#environment-handling).

<a name="browser-basics"></a>

## Browser Basics 🔧

Let's give our superhero a feel of the controls!

### Creating Browsers 🌐

Our robot can switch between browsers as needed. To create a new browser instance, simply use `$browser = \Illuminate\Testing\Dusk\Browser::make($browserType);` where `$browserType` is the browser you want to use (Chrome, Firefox, Safari).

### Navigation 🛫

The robot can navigate through your application by visiting different URLs. You can make it go to a specific page with `$browser->visit($url);`.

### Resizing Browser Windows 🔍

Want the robot to have a closer look? Use `$browser->resize(width, height)` to adjust its browser window size.

### Browser Macros 🚀

Make your tests more dynamic by defining custom macros for the robot! This will help you save time and make your tests more reusable. [More on that here](https://laravel.com/docs/8.x/dusk#browser-macros).

### Authentication 🔐

Got a protected area in your app? No problem! The robot can log in as any authenticated user by using `$user = App\Models\User::find(1); $browser->loginAs($user);`.

### Cookies 🍪

Need to test how your app handles cookies? Laravel Dusk has got you covered! You can set and get cookies with `$browser->cookies()->set('cookieName', 'cookieValue');` and `$browser->cookies()->get('cookieName')`.

### Executing JavaScript 💻

Want to execute custom scripts in your tests? `$browser->script('// JavaScript code here');` is all you need!

### Taking a Screenshot 📸

Keep track of what the robot sees by taking screenshots with `$browser->screenshot('path/to/save');`.

### Storing Console Output to Disk 💾

If you want to save the console output for later analysis, use `$browser->dumpOutput();`.

<a name="interacting-with-elements"></a>

## Interacting With Elements 🖱️

Our robot has a keen eye and can interact with various elements on your app's UI.

### Dusk Selectors 🕵️‍♂️

Find the specific element you want to interact with using [Dusk selectors](https://laravel.com/docs/8.x/dusk#dusk-selectors). These are similar to CSS selectors, but tailored for Laravel Dusk!

### Text, Values, and Attributes 📝

The robot can read and write values on your app's UI by using commands like `$element->value()`, `$element->text()`, or even target specific attributes with `$element->attribute('attributeName')`.

### Interacting With Forms ✒️

Need to fill out a form? Our robot can do that! Use `$form->fill([ 'field1' => 'value1', 'field2' => 'value2' ]);` to fill out your form.

### Attaching Files 📄

Got a file upload form in your app? No problem! The robot can attach files with `$browser->attach(pathToFile);`.

### Pressing Buttons 🚀

Want the robot to click a button? Simply use `$element->click()`.

### Clicking Links 🔗

Have a link your robot needs to follow? Use `$link->click();` to navigate to the linked page.

### Using the Keyboard ⌨️

Want the robot to type something out? You can use `$element->type('text');`.

### Using the Mouse 🐭

Need more control over your mouse movements? The robot has you covered with commands like `$browser->move($x, $y);`.

### JavaScript Dialogs 🗣️

Got a modal or alert box in your app? The robot can interact with it using commands like `$browser->acceptModal();` or `$browser->rejectModal();`.

### Interacting With Inline Frames 📼

Need to test how your app handles inline frames (iframes)? Laravel Dusk allows you to do that by using commands like `$browser->within('#frameId', function ($child) {...});`.

### Scoping Selectors 🔍

Want to narrow down your search for specific elements? Use the `$element->find()` method to scope your search!

### Waiting for Elements ⏱️

The robot can wait for specific elements to appear on the screen before interacting with them. Use `$browser->waitForSelector('#selector', $seconds);`.

<a name="available-assertions"></a>

## Available Assertions 🔎

Making sure your app works as intended is important! Laravel Dusk provides a variety of assertions to help you test the expected outcomes. Check out the [assertion documentation](https://laravel.com/docs/8.x/dusk#available-assertions) for more info!

<a name="pages"></a>

## Pages 🏢

Want to organize your tests better? Create pages to represent different sections of your application and group related tests together! [Learn more here](https://laravel.com/docs/8.x/dusk#pages).

<a name="components"></a>

## Components 🎯

Got a reusable UI element in your app? Create components to make your tests more modular and easier to maintain! [More info here](https://laravel.com/docs/8.x/dusk#components).

<a name="continuous-integration"></a>

## Continuous Integration 🔄

Once you've written your tests, you want to make sure they run automatically every time you make changes to your application! Laravel Dusk integrates with popular CI services such as Heroku CI, Travis CI, GitHub Actions, and Chipper CI. [More on that here](https://laravel.com/docs/8.x/dusk#continuous-integration).

Now go forth and automate your Laravel application testing with the power of Laravel Dusk - your new web-browsing, test-running, debugging pal! 🕵️‍♂️🚀

 ## Alrighty, Buckaroos! 🤠

## Attention, Pardners! 📣

**Yippee-ki-yay, Pest 4!** (*Not to be confused with the action-packed movie*) is here and it's packing some serious performance and usability punches compared to our trusty ol' Laravel Dusk. So if you're starting a fresh project, we reckon you should saddle up with Pest for all your browser testing needs.

Now, let's chat about **Laravel Dusk** - the cowboy of the coding world who makes browser automation and testing an easy-peasy ride. Unlike most wranglers, Dusk won't make you install JDK or Selenium on your trusty steed (computer). No sir! Instead, Dusk relies on a lone ranger named [ChromeDriver](https://sites.google.com/chromium.org/driver) for those dusty trails of automation. But if you've got your heart set on another Selenium-compatible driver, well, go ahead, partner!

🚧 **Caution: Cowboy jargon ahead!** 🚧

<a name="installation"></a>
Now, let's get our horses hitched and gallop on to the installation process. (Just kidding - no actual horses are needed here.) 🐎🚀

 Alrighty then! Let's get this show on the road, partner. First things first: you're gonna need a horse of a different color – or at least Google Chrome. Pop over to <https://www.google.com/chrome> and grab yourself a steed. Once you've done that, saddle up and ride into Composer territory with this command:

```shell
composer require laravel/dusk --dev
```

[!WARNING]
Now here's the part where Cowboy Code 101 kicks in: if you find yourself manually roping Dusk's service provider, remember – that rope ain't for your production environment. Lassoing it there could result in unwanted strangers galloping through your application's saloon doors.

Once the Dusk package is installed, run the `dusk:install` Artisan command. This here command will corral a `tests/Browser` directory, an example Dusk test, and round up the Chrome Driver binary for your operating system:

```shell
php artisan dusk:install
```

Next, you'll need to lasso the `APP_URL` environment variable in your application's `.env` file. Make sure this value matches the URL you'd use to wrangle your application in a web browser.

> [!NOTE]
> If you're using Laravel Sail to manage your local development shindig, don't forget to consult its documentation on configuring and running Dusk tests.

<a name="managing-chromedriver-installations"></a>
Now, wrangling ChromeDriver installations is a bit of a rodeo. Here's how you can ensure everyone's on the same page:

1. First, make sure your operating system knows where to find its trusty steed by adding the Chrome Driver binary to your system path.
2. Next, if you're testing on different machines or in a continuous integration environment, consider using Dusk's `--chromedriver-executable` option to point it at the exact location of your browser driver. This way, each machine can have its own trusty steed without confusion.

 Oh, the joy of automation! But sometimes, even our trusty steed Laravel Dusk might need a little horse swap. Let's talk about changing gears (or wheels, if you will) with ChromeDriver installations.

When you find yourself hankering for a different version of ChromeDriver than what our beloved `dusk:install` command bestows upon you, fear not! Just call upon the mighty `dusk:chrome-driver` command to step into a whole new world of ChromeDriver options.

```shell
composer require --dev chromedriver/chromedriver
```

There you go! Now go forth and conquer those tests with your preferred version of ChromeDriver! But remember, with great power comes great responsibility. Don't forget to clean your stable (a.k.a. project directory) every once in a while to ensure a smooth-running test suite! 🏃‍♂️💨

 Alrighty, party people! Let's get this Laravel dance floor shaking with some ChromeDriver action! 🕺️

First things first: You gotta make sure you're rockin' the freshest version of ChromeDriver for your OS (Operating System, not One Direction). Don't be that guy at the party still rocking last year's cassette tape when everyone else is streaming in 4K.

So how do we get this dance going? Easy peasy! Just grab a drink, find a comfy spot on your couch (or, you know, if you're feeling fancy, at your computer), and call up Laravel's party planner:

```bash
php artisan dusk:chrome-driver
```

This command will serve you the latest ChromeDriver version that best matches your OS. It's like ordering a custom cocktail – but instead of tequila and umbrellas, it's ChromeDriver and... well, still no umbrellas (sorry to disappoint).

Now you're all set to join the Laravel dance party with a state-of-the-art ChromeDriver in tow! 🎉💃🏼🕺️💅🏼

 Alright, buckle up, my coding comrades! Here's a dose of laughter and learning all rolled into one! Let's install a snazzy version of ChromeDriver that matches your operating system like a glove. No more fumbling around with the basics; we're about to elevate our Laravel Dusk test game with flair!

Ready? Set? Laugh and learn!

*Drumroll please!*

php artisan dusk:chrome-driver 86

Now, imagine this command as a slick, suave secret agent, slipping into your system, undercover as ChromeDriver 86. Just like when you finally found that elusive pair of platform boots on eBay (you know the ones!). But instead of rocking out at a disco, it's ready to drive those tests like a pro!

So go ahead, and unleash this stylish undercover agent on your tests. They'll thank you for it – trust me, they love a good ride in ChromeDriver 86!

 Alright, buckle up, because we're about to take a little trip through the world of web browsers - and no, it's not quite as exciting as a rollercoaster ride at Six Flags, but bear with us. Here's your guide to installing a shiny new version of ChromeDriver for all your favorite operating systems (OSes? OS-i?).

Ready, set, go!

You may have already guessed it, but we're about to summon the mighty power of Laravel's Artisan to help us out. So let's get our witch's hat on and cast this spell:

php artisan dusk:chrome-driver --all

Now, that doesn't sound like a spell for installing ChromeDriver, does it? Well, consider yourself initiated into the mysterious arts of Laravel wizardry. In simpler terms, what this command does is wave its magic wand (that's Artisan, remember?) over all supported operating systems and plants a fresh, juicy version of ChromeDriver in each one.

But why go through all this trouble, you might ask? Because, my friend, just like the right pair of shoes can make or break your dance moves on the dance floor, having the correct browser driver is essential for your tests to strut their stuff and shine like a star. So get ready to boogie down with ChromeDriver!

(Pssst: Just remember that this enchantment requires PHP 7.1.3 or higher to work its magic.)

 Alrighty, let's get this party started! 🎉

First off, it's time to play detective with our favorite browser, Chrome (or its open-source sibling Chromium)! But wait, before we dive in, make sure you've got the right ChromeDriver for your OS operating system. No need to worry though, Laravel's got your back! Just run this command like a super sleuth:

```bash
php artisan dusk:chrome-driver --detect
```

> [!ATTENTION]
> Remember, Dusk is a picky friend who needs his `chromedriver` binaries to be dressed up as executable files. If you find yourself in the middle of a Dusk standoff, ensure your binaries are looking sharp with this command: `chmod -R 0755 vendor/laravel/dusk/bin/`.

Now that we've got our ChromeDriver in its Sunday best, let's move on to... oh, what did they call it? Oh yes! "Using other browsers." Don't worry, we're not suggesting you switch to Internet Explorer (unless you have a time machine or a burning desire for nostalgia). We've got options like Firefox and Safari covered as well. But if you fancy a change, remember to install the correct driver for your chosen browser. It's all about choice in this browser wild west! 🤠

So there you have it, folks! A little laughter, a lot of technical advice, and we're off to the races with Laravel Dusk. Now go forth and test thy websites like never before! 🚀

 ### Unleashing the Browser Beast in Laravel Dusk!

By popular demand (okay, it was just one guy with a funny hat), Laravel Dusk's default beast of choice is Google Chrome, accompanied by a majestic ChromeDriver. But fear not, brave tester-knights, for you can summon your preferred browser to join the battle!

To begin this magical ritual, open up the ancient scrolls known as `tests/DuskTestCase.php`. This sacred text serves as the foundation for your Dusk tests, and by changing a single line here, you'll be able to summon other browsers like a modern-day Merlin!

```php
/**
 * Prepare for Dusk test execution.
 *
 * @beforeClass
 */
public static function prepare(): void
{
    // No longer summoning the ChromeDriver by default, feel free to remove this line:
    // static::startChromeDriver();
}
```

Once you've banished the auto-summoned ChromeDriver, it's time to create a custom driver! You'll be using the enchanted `RemoteWebDriver`, which will connect to the URL and port of your choice. Additionally, you may cast spells on this driver by modifying its "desired capabilities."

```php
use Facebook\WebDriver\Remote\RemoteWebDriver;

/**
 * Create the RemoteWebDriver instance.
 */
protected function driver(): RemoteWebDriver
{
    return RemoteWebDriver::create(
        'http://localhost:4444/wd/hub', DesiredCapabilities::phantomjs() // Change this to your desired browser and settings!
    );
}
```

Now that you've learned the art of summoning, go forth and conquer the browser world with your mighty Laravel Dusk tests! But remember, with great power comes great responsibility (and maybe some fun along the way). Happy browsing, knight! 🏰🐲🚀

 Ahoy there, code pirate! Let's embark on a swashbuckling adventure in Laravel-landia! But first, ya gotta learn to walk before you can run a ship.

### Setting Up Your Sailboat (Project)

To get started with your new Laravel project, grab your trusty terminal and type `laravel new ProjectName`, replacing "ProjectName" with your pirate ship's name. Yarr! Once that's done, you can navigate to your shiny new directory with the command `cd ProjectName`.

### Generating Tests (Arrrrr-chitecting)

Now, ye might be wondering about those pesky tests, eh? No worries, matey! Laravel makes it easy for us to write tests. To generate a test for a specific class, sail over to the command line and type `php artisan make:test ClassNameTest`, where "ClassName" is the name of your class that needs testing. You'll find the new test file in the Tests directory, ready to be filled with testy goodness!

### Running Your Tests (Swabbing The Deck)

Once you've written some tests and are feeling confident, it's time to run 'em! Simply type `php artisan test` into your terminal, and Laravel will take care of the rest. If everything goes smoothly, you'll hear a cheer from the crew (or a single "Arrr!" if you're sailing solo).

### And That's a Wrap (Walking the Plank)

That's it, scurvy dog! You've now got yourself a Laravel project with tests that would make even Captain Jack Sparrow proud. If you need more details or want to learn about other treasures in Laravel-landia, don't be shy – dive into the [official documentation](https://laravel.com/docs)! Happy coding, matey!

 Alrighty, let's get our coding capes on and dive into the whimsical world of Laravel Dusk test generation!

#### Making Magic Tests Happen

To conjure up a Dusk test faster than lightning, cast the `dusk:make` Artisan spell. The command will gracefully place your newly born test in the enchanted `tests/Browser` forest:

```shell
php artisan dusk:make LoginTest
```

<a name="resetting-the-database-after-each-test"></a>
Now, you might be wondering if our database needs a little fairy dust after each test. Worry not, dear coder! Each Dusk test comes with a built-in sprinkler that resets the database before it begins its dance of tests. Because who wants leftover cookies from yesterday's test, right? 🍪🤔💦

Happy testing, dear Laravel wizards! Let the enchanting journey of Dusk tests commence! 🏹🚀🎉

 ### Oh, Database Reset 101 for Laravel Devs! 💻🚀

Let's face it, you've probably been there - testing your application with data that looks suspiciously like last night's pizza toppings. Well, fret not! Laravel has got your back (or should we say, database?) with some fun-tastic ways to reset your database after each test! 🍕🔄

First off, remember when we said *never* use the `RefreshDatabase` trait in your Dusk tests? Well, it's like that one friend who always offers you questionable leftovers. It might seem convenient, but trust us - you don't want it for your database! 😷

Instead, there are two equally awesome options to choose from: `DatabaseMigrations` and `DatabaseTruncation`. Think of them as the yin and yang of database resets. Let's break 'em down:

<a name="reset-migrations"></a>

#### The Great Migration (`DatabaseMigrations`) 🚢

Ever heard about the good ol' days when everyone was moving west? Well, `DatabaseMigrations` is kinda like that for your database. It sets things up fresh by running your migration files - a one-way trip to Database Vacationland! 🏖️

#### The Slim Trimmer (`DatabaseTruncation`) 💸

If you're more into minimalism and prefer a quick tidy-up rather than a full-on demolition, `DatabaseTruncation` is the trait for you! It keeps your existing tables but clears them out, leaving your database as clean and fresh as a new box of pasta! 🍝

So go ahead, test away, and let Laravel handle the cleanup like a pro. Because who needs to scrub last night's pizza off their database when you can be writing awesome code instead? 🎉🚀

 Alrighty then! Buckle up, because we're about to dive into the thrilling world of Laravel's `DatabaseMigrations` trait. This bad boy will ensure your database migrations are run before each test, like a well-oiled machine getting ready for showtime. But hold your horses! Dropping and recreating those databases tables for every test ain't as fast as you'd think - it's more sluggish than a sloth on a sugar high.

Truncating the tables is like taking a vacuum cleaner to your data, leaving it all intact but tidy. Here's how you can do it:

```php tab=Pest Humor
<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Symfony\Component\Console\Command\Command;

pest()->use(DatabaseMigrations::class);

// ... And just like that, we've tidied up the living room! Now let's test!

```

```php tab=PHPUnit Humor
<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Symfony\Component\Console\Command\Command;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('database:truncate'); // ... and just like that, we've tidied up the living room! Now let's test!
    }
}
```

[!WARNING]
Now, for those of you who love SQLite in-memory databases, I've got some bad news - they can't be used when executing Dusk tests. It's like trying to make a milkshake without a blender - it just won't work! The browser runs in its own process, and it's like trying to reach into another dimension to grab a cup of coffee. Just stick with the regular databases for now, cowboy!

<a name="reset-truncation"></a>
Oh, and before I forget - if you want to reset your database instead of just truncating it, here's how you can do it:

```php tab=Pest Humor
<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Symfony\Component\Console\Command\Command;

pest()->use(DatabaseMigrations::class);

// ... And just like that, we've torn down the old apartment and started building a brand new one! Now let's test!

```

```php tab=PHPUnit Humor
<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Symfony\Component\Console\Command\Command;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('database:seed --class=ResetDatabase'); // ... And just like that, we've torn down the old apartment and started building a brand new one! Now let's test!
    }
}
```

 Alright, buckle up, database warriors! The `DatabaseTruncation` trait is your new best friend in the Laravel kingdom. This magical artifact will ensure your database tables are always squeaky clean and ready for action.

On the first test, it'll perform a full-blown migration to make sure your tables are built to perfection. But on subsequent tests, instead of re-running all those migrations (who has time for that?), it'll just give your database a quickie truncation, providing you with a much-needed speed boost.

Here's how to use this trait in Pest and PHPUnit:

```php tab=Pest (Pest Party!)
<?php
* Party hard!
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;

pest()->use(DatabaseTruncation::class);
// End of the night...
```

```php tab=PHPUnit (Grown-up Time)
<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseTruncation;
    // Back to work tomorrow...
}
```

By default, this trait will spare the `migrations` table from being truncated. But if you want to customize your table selection, feel free to define a `$tablesToTruncate` property on your test class:

> [!NOTE]
> Remember, in Pest, properties or methods should be defined on the base `DuskTestCase` class or any class your test file extends.

```php
/**
 * Decide which tables get the axe.
 *
 * @var array
 */
protected $tablesToTruncate = ['users'];
```

Or, if you prefer to exclude specific tables from being truncated, define an `$exceptTables` property on your test class:

```php
/**
 * Exclude tables like the ones that store your precious data.
 *
 * @var array
 */
protected $exceptTables = ['users'];
```

To specify which database connections should receive a table-truncating makeover, create a `$connectionsToTruncate` property on your test class:

```php
/**
 * Choose your connection wisely.
 *
 * @var array
 */
protected $connectionsToTruncate = ['mysql'];
```

Finally, if you need to run some code before or after the database gets its well-deserved truncation, define `beforeTruncatingDatabase` or `afterTruncatingDatabase` methods on your test class:

```php
/**
 * Perform any work that should take place before the database has started getting chopped up.
 */
protected function beforeTruncatingDatabase(): void
{
    // Do your thing!
}

/**
 * Perform any work that should take place after the database has finished getting chopped up.
 */
protected function afterTruncatingDatabase(): void
{
    // More magic here...
}
```

Now, go forth and make your databases sparkle like the night sky!

 ### Unleashing the Beast (aka Running Tests)

Alright, champ! To get your browser tests roaring to life, unleash the mighty `dusk` Artisan command upon your terminal:

```shell
php artisan dusk
```

But what if last time's test results were more fail than Falcon heist? Fear not! You can save precious seconds (and sanity) by re-running only the disloyal tests with the `dusk:fails` command:

```shell
php artisan dusk:fails
```

The clever `dusk` command is not only a showoff, it's also quite versatile! Just like the maestro conducting an orchestra, you can dictate which tests to perform with arguments usually accepted by the Pest / PHPUnit test runner. For example, if you want to run the tests for a specific [group](https://docs.phpunit.de/en/10.5/annotations.html#group), just:

```shell
php artisan dusk --group=foo
```

> [!WARNING]
> If you're using [Laravel Sail](/docs/{{version}}/sail) to manage your local development environment, kindly check out the Sail documentation on [configuring and running Dusk tests](/docs/{{version}}/sail#laravel-dusk).

<a name="manually-starting-chromedriver"></a>
And remember, every beast needs its driver! To manually start `chromedriver`, you might need to:

```bash
export DISPLAY=:99
xvfb-run --auto -s :99 php artisan dusk:chrome
```

Happy testing, detective! (Or should we say... Dusketeer?)

 Alrighty, let's get this Laravel Dusk extravaganza started! 🎉

#### Manually Firing Up ChromeDriver (Like a Boss)

If you find that the automatic ChromeDriver initiation isn't cutting it for your one-of-a-kind setup, no worries, we gotchu covered! Just like a true maverick, you can kickstart ChromeDriver all by yourself before unleashing the `dusk` command. To do this, you'll want to put on your coding cowboy hat and pay a visit to the `tests/DuskTestCase.php` file.

Once there, find this here line that looks like it's been called for backup:

```php
/**
 * Prepare for Dusk test execution.
 *
 * @beforeClass
 */
public static function prepare(): void
{
    // static::startChromeDriver(); 🚨Call off the reinforcements!
}
```

Just comment out this line, and voilà – you've got yourself a manual ChromeDriver launching party! 🎉🎈

Now, if you're feeling especially rebellious and decide to start ChromeDriver on a port other than the usual 9515 (we get it, you like to mix things up), fear not! All you need to do is modify the `driver` method of the same class to display your new port number with pride:

```php
use Facebook\WebDriver\Remote\RemoteWebDriver;

/**
 * Create the RemoteWebDriver instance.
 */
protected function driver(): RemoteWebDriver
{
    return RemoteWebDriver::create(
        'http://localhost:YOUR_NEW_PORT', DesiredCapabilities::chrome()
    );
}
```

 Ahoy there, Captain Testrunner! 🌴 Let's set sail into the realm of Dusk and learn how to handle those environments like a seasoned seafarer! ⛵️

To get Dusk to use its own pirate map (environment file) when navigating treacherous testing waters, you'll need to hoist anchor at your project's root and create a `.env.dusk.{pirate_ship}` file. For instance, if ye be planning to launch the dusk command from yonder `local` port, then raise anchor with a `.env.dusk.local` parchment! 📜

Now, when those tests set sail and battle the high seas, Dusk will swab the decks by safely stowing away your regular `.env` map and rename the pirate map as the new captain (renaming it to `.env`). Once all the battles have been won and loot collected, Dusk will return your `.env` map to its rightful place! 🏴‍☠️

<a name="browser-basics"></a>
Ahoy again! Remember to always wear an eyepatch while coding! Now let's navigate to the browser basics and continue our swashbuckling adventure! Yarrrr! 😈

 Ahoy there, coding pirates! Welcome to our swashbuckling guide onBrowser Basics - a treasure trove of knowledge you won't find in Captain Cook's logbook! 🏴‍☠️

<a name="creating-browsers"></a>
### Creating Browsers (Arrr, ye landlubbers!) 🤔

Ah, the art of creating browsers! It's as easy as polishing a cutlass or mending a jolly roger. To embark on this journey, you'll need Laravel Valet and Homestead Improved. They're like your ship's compass and sextant, but for web browsing instead of sailing.

First, you should install these handy tools (it's not called 'pirating' without a little bit of looting, now is it?). Run the following command in your terminal:

```bash
composer global require laravel/valet && composer global require "berkeley/homestead-improved=~1.2"
```

Now, set sail for adventure! Let's configure Homestead Improved by editing `~/.homestead`. Don't worry, it's not like navigating the Bermuda Triangle; we promise you'll find your way back! After making any desired changes, save and close the file.

Once you've done that, it's time to kick off Homestead Improved:

```bash
homestead upgrade
```

And now, the moment we've all been waiting for - firing up Laravel Valet! Start by running `valet park`, then create your first browser (yes, really) with this simple command:

```bash
valet browse local
```

Congratulations, matey! You've successfully created a browser. Ain't that swell? 🥳

<a name="accessing-the-browser"></a>
### Accessing the Browser (Navigating to your treasure!) 🏰

Now that you've built your browser, it's time to set sail and explore its depths. To do so, open up a web browser on your computer (you know, one of those things we're trying to emulate). Navigate to `http://local` in the address bar. You should see Laravel's welcome page - treasure chest and all! 

<a name="building-your-own-website"></a>
### Building Your Own Website (Yo ho, let's create some gold!) 🏛️

Building your own website is like carving a pirate ship out of wood; it takes time, patience, and a good ol' fashioned hook! To get started, create a new Laravel project:

```bash
laravel new my-pirate-site
```

Now, sail on over to your browser (the one you created earlier, don't forget!) and navigate to the new project: `http://local.my-pirate-site`. You can start building your treasure trove of a website from here! 🏴‍☠️

<a name="extending-browsers"></a>
### Extending Browsers (Adding plank-walking sharks, because why not?) 🦈

Why settle for a plain ol' browser when you can have one with a built-in shark plank? To extend your browser, create a new Laravel package and integrate it into your browser. It's like adding a parrot or a peg leg to a pirate!

But that's another adventure for another day, matey! Let's set sail on building your own pirate-themed web browser with Laravel. Fair winds and following seas! 🌬️⚓️

 Alrighty then! Let's dive into creating browsers, shall we? First things first, let's write a test that verifies our app is as friendly as a puppy at a pet store. After whipping up a test (pro tip: don't forget the treats), we can tweak it to navigate to the login page, enter some credentials, and click the "Login" button – all without getting our digital paws dirty! To create a browser instance, you can summon the mighty `browse` method from within your Dusk test.

```php tab=Pest-with-flair
<?php

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use App\Traits\HasASpiritOfAdventure; // Because every browser needs a little excitement!

pest()->use(DatabaseMigrations::class, HasASpiritOfAdventure::class);

test('basic example', function () {
    $user = User::factory()->create([
        'email' => 'taylor@laravel.com',
    ]);

    $this->browse(function (Browser $browser) use ($user) {
        $browser->visit('/login') // Off we go on a grand adventure!
            ->type('email', $user->email)
            ->type('password', 'password')
            ->press('Login')
            ->assertPathIs('/home'); // Mission accomplished, time for tea and crumpets!
    });
});
```

```php tab=PHPUnit-with-flair
<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use App\Traits\HasASpiritOfAdventure; // Because every browser needs a little excitement!
class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations, HasASpiritOfAdventure; // Buckle up, it's time for adventure!

    /**
     * A basic browser test example.
     */
    public function test_basic_example(): void
    {
        $user = User::factory()->create([
            'email' => 'taylor@laravel.com',
        ]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login') // Off we go on a grand adventure!
                ->type('email', $user->email)
                ->type('password', 'password')
                ->press('Login')
                ->assertPathIs('/home'); // Mission accomplished, time for tea and crumpets!
        });
    }
}
```

As you can see in the examples above, the `browse` method is like a digital Sherpa that accepts a closure. A browser instance will magically appear by Dusk's enchantment, ready to be your trusty sidekick as you explore and interact with your app!

 Alright, let's get this party started!

#### Unleashing the Power of Polymorphous Porcupines (AKA Multiple Browsers)

When life gives you lemons, it might as well give you a dozen different browsers to ensure your tests are as squeaky clean as a well-oiled browser quirk machine! Take, for instance, our chat screen that's got the wires of websockets all crossed up. To untangle this mess, we need to put on our detective hats (or in this case, chrome domes) and whip out some polymorphous porcupines!

You see, creating multiple browsers is as easy as adding more browser arguments to the signature of the closure bestowed upon the `browse` method. Yes, it's time for a little bit of old-fashioned polymath party, Laravel style!

```php
$this->herdOfPorcupines(function (Browser $quill, Browser $inkwell, Browser $scribble) {
    $quill->logInAs(User::find(1))
        ->navigateTo('/home')
        ->waitForText('Message in a bottle');

    $inkwell->logInAs(User::find(2))
        ->navigateTo('/home')
        ->waitForText('Message in a bottle')
        ->type('message', 'Yo, Taylor!')
        ->clickOn('Send the darn message already');

    $scribble->waitForText('Yo, Taylor!')
        ->assertSee('Jeffrey Way is in the chat too');
});
```

Now, who needs boring old multiple browsers when you've got a herd of polymorphous porcupines at your fingertips? Let's get testing, cowboy (or cowgirl)!

 Ahoy there, Laravel Captain! Prepare to set sail on a journey through your application's URL seas with the `visit` method!

```php
Steer your ship towards the login port:
$browser->visit('/login');
```

Fancy yourself a map reader? Use the `visitRoute` method to navigate to a [named route](/docs/{{version}}/routing#named-routes), like a seasoned treasure hunter:

```php
Set sail for the route named "GoldenTicket":
$browser->visitRoute($routeName, $parameters);
```

Ever wanted to turn back time? Now you can with the `back` method!

```php
Remember the last port-o'-call:
$browser->back();
```

And if you've found yourself in a pickle and need to reload, use the `forward` method!

```php
Aye, rewind that compass:
$browser->forward();
```

Feeling queasy? Refresh your page with the `refresh` method:

```php
Sea-sick? Spin the wheel:
$browser->refresh();
```

And remember to always keep an eye on that horizon, Captain! Now, hoist the sails and set course for adventure! 🌴🚢🐙

 Alright, buckle up, web-explorers! In this thrilling expedition of digital domination, we're about to embark on a journey that will make you the master of your browser's destiny. Grab your mouse and keyboard, put on your superhero cape (optional), because we're diving into the world of Laravel Dusk resizing!

First off, ever felt like the browser window is a giant T-Rex in a dollhouse? Well, no more! With the `resize` method, you can now be the Jurassic Park ranger and shrink that beast to a manageable 1920 x 1080.

```php
$browser->resize(1920, 1080); // This is your browser on a leash!
```

Next up, you're the host at the world's most exclusive popcorn cinema. The `maximize` method is your "house lights off" moment - maximize that browser window and enjoy the show!

```php
$browser->maximize(); // Popcorn, please!
```

The `fitContent` method is like having a personal assistant who adjusts your TV settings based on what's playing. It resizes the browser to match the content size:

```php
$browser->fitContent(); // Your browser just got smarter... and sassier!
```

Now, when things don't go according to plan (as they rarely do in our line of work), Dusk will automatically adjust the browser window for you. But if you want some privacy, you can disable this feature by calling `disableFitOnFailure`.

```php
$browser->disableFitOnFailure(); // Nothing to see here, move along!
```

Finally, we come to the `move` method. Imagine being a Jedi with the power to teleport your browser across the screen.

```php
$browser->move($x = 100, $y = 100); // May the mouse be with you!
```

Now go forth and conquer those browsers! But remember, with great power comes great responsibility – don't forget to test often and have fun!

 ### Browser Magic Tricks!

If you're a fan of repetition and hate typing the same thing over and over in your tests, we've got some spellbinding news for you! In Laravel Dusk, you can conjure up custom browser incantations using the `macro` method on the enchanting `Browser` class.

To put this sorcery into practice, cast the charm from a [service provider's](/docs/{{version}}/providers) `boot` spell:

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Dusk\Browser;

class WizardryServiceProvider extends ServiceProvider
{
    /**
     * Register Dusk's browser spells.
     */
    public function boot(): void
    {
        Browser::macro('waveWandAtElement', function (string $element = null) {
            $this->script("$('html, body').animate({ scrollTop: $('$element').offset().top }, 0);");

            return $this;
        });
    }
}
```

The `macro` function accepts a name (think Abracadabra) as its first argument and a closure as the second. When you summon this spell as a method on your bewitched `Browser` instance:

```php
$this->enchant(function (Browser $browser) use ($user) {
    $browser->navigateTo('/pay')
        ->waveWandAtElement('#credit-card-details')
        ->ensureTextExists('Enter Credit Card Details');
});
```

Now, instead of performing those tedious scrolls with your mouse, let the magic handle it! 🎩✨

 Alrighty, buckle up, test cowboys and cowgirls! When you find yourself roaming the digital frontier of pages protected by good ol' authentication, fear not! Dusk has a trusty sidekick called `loginAs` to help you bypass those pesky login screens during every test ride.

Here's how it works: just like calling your deputy for backup, you can summon the `loginAs` method in your tests:

```php
use App\Models\User;
use Laravel\Dusk\Browser;

It's high noon in the testin' sheriff office! (function (Browser $browser) {
    $browser->loginAs(User::find(1)) // Yep, that's our trusty deputy we're calling here
        ->visit('/home'); // And here's our destination
});
```

[!WARNING]
Now, hold your horses! Using the `loginAs` method means that user session will stay put for all tests within this here file. So watch out for any unintended posse member joining your test ride!

<a name="cookies"></a>

Oh, and if you're curious about those cookie jar-like entities, Dusk uses Laravel's cookies to manage user sessions during testing. You can find more details on that [here](https://laravel.com/docs/8.x/dusk#session-management). Just like a cowboy learnin' the ropes, you'll soon be a pro at it!

Yeehaw and happy testing!

 ### Cookies Galore! 🍪

In this digital bakery we call the web, cookies are more than just treats you get from a vending machine. With Laravel's magical cookie jar (aka `cookie` method), you can either peek into or whip up an encrypted deliciousness like so:

```php
peek in the jar: $browser->cookie('name');
bake a new one: $browser->cookie('name', 'Taylor');
```

But what if you're making sugar-free cookies for your low-key frenemy Matt? Don't worry, we've got `plainCookie` to the rescue, allowing you to make unencrypted cookies that even Matt won't be able to hack:

```php
sugar-free: $browser->plainCookie('name');
bake a low-key cookie: $browser->plainCookie('name', 'Taylor');
```

Life can get messy in the digital kitchen, so when you need to clean up and remove that pesky 'name' cookie:

```php
$browser->deleteCookie('name');
```

Now go forth and bake those cookies (or delete them, whatever your heart desires)! 🤖🍪🎉

 Ahoy there, coding pirates! Sail the seas of JavaScript with Laravel's swashbuckling `script` method! It's the key to executing your wildest browser-based adventures:

```php
Steer your ship towards $browser->script('document.documentElement.scrollTop = 0');

Set anchor at $browser->script([
    'Ahoy matey, set body scroll to zero!',
    'Yo ho ho, adjust documentElement scroll to zilch!'
]);

Furl the sails and let's grab some loot with $output = $browser->script('return window.location.pathname');
```

<a name="taking-a-screenshot"></a>
Ye be scouring for a way to take a peek at your browser's viewport, eh? Fear not, matey! The `script` method can also help ye capture the perfect screenshot:

```php
$browser->screenshot('treasure-map.png');
```

That's all, mateys! Now set sail for new adventures with Laravel's enchanted `script` and `screenshot` methods! May your voyages be swift and your code clean!

 ### Catching Luminous Frames in Laravel's Web of Wonders!

Venture into the world of snapshots, dear web wanderers! The `screenshot` function is your trusty sidekick here. It'll help you capture a screenie and stash it away with a name of your choice, all inside the `tests/Browser/screenshots` hideout:

```php
$browser->screenshot('my-super-secret-memento');
```

Next up, we have the `responsiveScreenshots` function! This one's like a superhero with multiple screens, capturing shots at various breakpoints:

```php
$browser->responsiveScreenshots('my-ultra-responsive-screenshot');
```

Last but not least, the `screenshotElement` function is your secret weapon for snapping that pesky elusive element on the page:

```php
$browser->screenshotElement('#the-one-that-got-away', 'my-elemental-evidence');
```

And remember, a picture may be worth a thousand words, but in this case, it's also worth a spot on your disk! 📸💾

 ### Unleash your Inner Geek: Logging Browser Console like a Pro! 🚀💻

Welcome, dear code wranglers, to the mystical world of logging browser console output! And what better way to do it than with Laravel's enchanted `storeConsoleLog` spell?

Here comes the incantation:

```php
$browser->storeConsoleLog('filename');
```

Just like a Jedi master casting a spell, you can harness the power of this method to save your browser's console output in the `tests/Browser/console` directory. It's like having an ever-growing scroll filled with debugging goodness! 📝🔍

But remember, only use it wisely, for good, and not for mischief or pranks, lest you find yourself banished to the land of PHP warnings! 😉😈🚫

 Alright, tech whizzes! Buckle up for a rollercoaster ride through Laravel's wondrous world of code! Today, we're gonna learn about the magical `storeSource` method - a tool so powerful it could make even Muggles do some serious web dev magic.

You might be wondering: "What on Earth is this sorcery you speak of?" Well, my dear friend, when you cast this spell on your browser, it'll transform the current page's source into something tangible - a file on your disk! Yes, you read that right, a real, live file!

Here's how to summon `storeSource`:

```php
$browser->storeSource('your_fancy_filename');
```

Now, where does this enchanted file end up? Well, it gets whisked away and deposited within the mystical `tests/Browser/source` directory – a place that even Google Maps can't find! But fear not; the files are safe there, ready to be summoned whenever you need them.

And with that, our lesson on Laravel sorcery comes to an end. May your pages be well-sourced and your coding always be enchanted! ✨🔮💻

 Ahoy there, Laravel coders! Buckle up for a whirlwind tour of our trusty sidekick - Dusk's magical Selector Wand! 🎭💫

🌟 **Dusk Selectors** 🌟

In the realm of testing, finding the right element can be akin to locating a needle in a haystack...or a unicorn in a field of mules. But fear not! Dusk's Selector Wand makes this task as easy as pie (okay, maybe not that easy, but it's definitely easier).

Just like Hagrid casting Expelliarmus to disarm enemies, you can use CSS selectors with Dusk to find and manipulate elements in your Laravel application.

🎯 **CSS Selectors** 🎯

These mystical incantations help you single out specific elements within your HTML like a seasoned witch or wizard. Here's a quick rundown of the most commonly used ones:

- **Tag Name:** This is your basic spell, perfect for beginners. Example: `div`, `a`, or `button` selectors.
- **Class Names:** For those who have graduated from potion-making 101. Example: `.my-class`.
- **ID Selectors:** You're now ready to perform advanced charms! Use IDs like a beacon to find that one elusive element. Example: `#my-id`.
- **Attribute Selectors:** You can even cast spells based on attributes of elements (their hair color, perhaps?). Example: `[href="https://example.com"]`.
- **Child Selectors:** If you're looking for an element nestled deep within your HTML family tree, this spell is just what the doctor ordered. Example: `div > a`.

🎭 **Using Dusk Selectors** 🎭

Now that you've brushed up on your CSS selector spells, it's time to unleash them upon your Laravel application with Dusk! Just remember, practice makes perfect (or at least less bewildered). 😊

```php
// This example demonstrates using a class name and ID selector in Laravel Dusk tests.

it('can interact with elements', function () {
    $this->browse(function (Browser $browser) {
        // Select element by its class name
        $button = $browser->elements('.my-class');

        // Perform an action on the selected button
        foreach ($button as $element) {
            $element->click();
        }

        // Now let's find the element with the ID 'my-id' and assert something about it
        $element = $browser->find('#my-id');
        expect($element)->toBeVisible();
    });
});
```

Remember, dear developer, mastering Dusk's Selector Wand is your first step towards conquering the tests of Laravel land. Happy coding! 👩‍🎓🚀

 Ah, the age-old conundrum of writing Dusk tests! It's like trying to find a needle in a haystack... of CSS selectors. You know the drill – frontend tweaks can send your carefully crafted test cascading down like dominoes, leaving you with a broken test and an empty feeling of frustration.

```html
<button>Login</button>
```

```php
$browser->click('.login-page .container div > button'); // Oh no! Your test just got 'logged off' by a sneaky CSS update!
```

But fear not, my friend! Dusk selectors are here to save the day. With these bad boys, you can focus on writing effective tests instead of playing detective with your CSS selector knowledge. To define a selector, simply slap a `dusk` attribute onto your HTML element like so:

```html
<button dusk="login-button">Login</button>
```

And when it's time to interact with the attached element in your test, just prefix the selector with `@`:

```php
$browser->click('@login-button'); // And voila! Your test remains unbroken.
```

If you fancy customizing the HTML attribute that Dusk selectors use, you can do so using the `selectorHtmlAttribute` method. Typically, you'll want to call this from the `boot` method of your application's `AppServiceProvider`:

```php
use Laravel\Dusk\Dusk;

Dusk::selectorHtmlAttribute('data-dusk'); // Now your selectors will use 'data-dusk' instead of 'dusk'. Go wild!
```

Happy testing, and may your tests always be as stable as a rock in a hurricane!

 Alright, buckle up, code cowboys and codettes! We're about to venture into the wild frontier of Laravel configuration settings, where text, values, and attributes gallop together in harmonious chaos.

First off, let's wrangle those settings like a seasoned ranch hand. You can fetch them with a simple `config()` function call. For instance:

```php
$mySetting = config('app.my_setting');
```

Now, if you want to lasso your settings and give 'em a makeover, you can set new values using the handy-dandy dot notation. Here's how to rope in some changes:

```php
config(['app' => ['my_setting' => 'new_value']]);
```

But what about them attributes, you ask? Well, partner, Laravel has got your back with environment-specific configuration. You can herd your settings into different pastures (environments) like development, testing, and production, using the `env()` function:

```php
$myDevSetting = env('APP_MY_DEV_SETTING', 'default value');
```

And if you're feeling particularly feisty, you can even register your own custom attributes! Saddle up and check out the [official documentation](https://laravel.com/docs/8.x/configuration#registering-custom-configuration) for more details on this lasso-dazzling feature.

Remember, cowpokes and cowgirls: Laravel configuration settings are your trusty steed when it comes to managing the intricacies of your application's back end. So don't be shy – wrangle those settings with panache!

 Ah, Dusk – the dancing diva of web testing! Let's dive into her captivating choreography of retrieving and setting values on your page. Just imagine Dusk as a charismatic maestro, conducting an orchestra of HTML elements to dance at your command!

<br>

First act: Retrieval time! Want to know what's cookin' in an element matching a given selector? No problem! Just call upon Dusk and whisper the magic incantation:

```php
// Summon the value...
$value = Dusk\Browser::call('get_the_goods', 'selector'); // Because who doesn't love a good theater reference, right?
```

<br>

Next up: The showstopper! Ever needed to set the value of an element like a certain CSS or Dusk selector? Here's your backstage pass:

```php
// Set the scene with a new value...
Dusk\Browser::call('set_the_scene', 'selector', 'value'); // Now that's what I call a script rewrite!
```

<br>

In between acts, let's take a quick intermission and talk about `inputValue`. This little number is perfect for when you need to get the value of an input element with a specific field name. So, call upon Dusk:

```php
// Get the star of the show...
$value = Dusk\Browser::call('spotlight', 'field'); // And don't forget your pompoms!
```

<br>

Now that we've got you hooked, let's move on to the next section! Who knows what other magical tricks Dusk has up her sleeves? Let's find out together! 🎭💃🏼✨

 In the grand tradition of digital sleuthing, allow me to introduce you to the most intriguing method since Sherlock's 'Elementary', dear Watson! Behold, the magnificent `text` method!

This cryptic commander can be summoned to unveil the secret identity of an element hidden behind a selector shield:

```php
$mysteryText = $browser->text('the-selector-that-dares-not-speak-its-name');
```

Now, imagine you're in a swanky Victorian drawing-room, where every object is whispering its secrets. With the `text` method, you can eavesdrop on that chatter and decipher the hidden messages!

 Alrighty, buckle up, coding cowboys and codelettes! Let's dive into the magical world of Laravel attribute wrangling where we tame those HTML elements with a dash of PHP magic.

First off, we've got our trusty steed, the `attribute` method. This cowboy's lasso is perfect for grabbing an element's attribute value by its selector and "rope" (which in this case is 'value'). So, if you want to know the secret ingredient of your form's action or the color of that fancy button, just give `attribute` a spin:

```php
$secret_ingredient = $browser->attribute('form-selector', 'action');
$button_color = $browser->attribute('button-selector', 'style'); // Note the 'style' instead of color because not all browsers support the 'color' attribute on HTML elements.
```

Now, remember to keep your lasso sharp and your fingers nimble, because next time we saddle up for another Laravel adventure! Yee-haw! 🤠🐎

 Ahoy there, adventurous coder! Buckle up for a whirlwind tour of Laravel's form-taming tactics. Let's dive into the world of interaction, where keyboards and forms unite to conquer the digital frontier! 🌐

<a name="typing-values"></a>

#### Typing Values Directly Into Request

You might be asking yourself, "How can I obtain user input straight from the form request?" Well, my friend, that's easier than convincing a cat to use a computer! Simply access the incoming data via the `request()` global helper:

```php
$name = $request->input('name'); // Fetch the 'name' value from the user input
```

Just remember, this approach might make you vulnerable to Cross-Site Scripting (XSS) attacks. To avoid such dangers, use data sanitization techniques like Laravel's built-in `htmlspecialchars()` function:

```php
$name = htmlspecialchars($request->input('name')); // Safer way to fetch and display user input
```

<a name="retrieving-input-from-forms"></a>

#### Retrieving Input From Forms

What if your form has a `name` attribute that's as long and winding as the Nile? No worries! Laravel provides an automatic binding mechanism for forms. Just define your form field names in the same way you would with HTML:

```html
<form method="POST" action="/submit">
    <!-- ... -->
    <input type="text" name="user_name">
</form>
```

Now, in your controller, Laravel will automatically bind the input to a property with the same name:

```php
public function submit(Request $request) {
    // Access user's name directly via $request->user_name
    $userName = $request->user_name;
}
```

So now you can tackle forms like a seasoned web developer, and impress your cat-friends with your newfound Laravel form-taming prowess! 🐱‍👤🌟

 Ahoy there, Captain! Sail the seas of web automation with Dusk, your trusty Laravel testing companion!

First off, let's chat about how to fill out forms like a seasoned pirate. You don't need Yarr-arrr's CSS selector to type into an input field (though it can be helpful in a sea of similar fields). Here's the jist:

```php
$browser->type('email', 'taylor@laravel.com');
```

But, if you do want to set sail with a CSS selector, Dusk will search for an `input` or `textarea` field with the provided name attribute like a seasoned buccaneer!

Now, suppose ye want to add more grog (or comma-separated values) without clearing the current contents. Fear not, for we have the `append` method:

```php
$browser->type('tags', 'foo')
    ->append('tags', ', bar, baz');
```

To empty a field faster than Captain Jack Sparrow downs rum, use the `clear` method:

```php
$browser->clear('email');
```

Want Dusk to type as slow as a sea shanty being sung by a drunken sailor? Use the `typeSlowly` method! By default, it pauses for 100 milliseconds between key presses, but you can adjust the speed:

```php
$browser->typeSlowly('mobile', '+1 (202) 555-5555');

$browser->typeSlowly('mobile', '+1 (202) 555-5555', 300);
```

And, for adding text at a leisurely pace, there's `appendSlowly`:

```php
$browser->type('tags', 'foo')
    ->appendSlowly('tags', ', bar, baz');
```

Ahoy and happy testing! May your tests be as reliable as a ship's compass, and your code as steady as the deck underfoot. Arrr matey! 🏴‍☠️

 Alrighty then! Let's dive into the whimsical world of Laravel dropdowns, where selecting values is akin to picking your favorite flavor of space ice cream. 🚀🍦

To choose a scoop from a `select` element, you can use the `select` method. Unlike your picky toddler, this method doesn't demand a full CSS selector, making it a breeze to navigate even the messiest webpage playpens. When offering up a flavor (er, value) for selection, remember to pass the scoop's secret code, not its catchy name:

```php
$browser->select('size', 'Large'); // A hearty scoop of Large!
```

If you fancy rolling the dice and letting fate decide your ice cream destiny, simply skip the second argument:

```php
$browser->select('size'); // Let's see what unexpected flavor awaits us!
```

But, my dear web traveler, what if you can't decide between Art and Music? Well then, you're in luck! By passing an array as the second argument to the `select` method, you're essentially inviting both Art and Music for a scoop date. Or in Laravel terms:

```php
$browser->select('categories', ['Art', 'Music']); // A double-scoop delight of Art & Music!
```

And that's the cosmic scoop on Laravel dropdowns! Now, go forth and conquer those web forms with style and a smile. 🌟🎉

 Ah, the thrill of ticking off boxes! Who knew that programming could be so... satisfying? In the Laravel realm, we've got a little something called the "check" method, a charm that ticks your checkboxes without breaking a sweat. No need for a full CSS selector here, just point it at the desired checkbox using its good ol' `name` attribute:

```php
$browser->check('terms');
```

But what if you change your mind? No worries, we've got the "uncheck" method to help you backtrack without any drama. Just use it like this:

```php
$browser->uncheck('terms');
```

Now that's some friendly interface interaction! Next stop: Radio Buttons – where one button must always be left out to keep things interesting. Stay tuned, folks! 📢

 Ahoy there, Laravel swashbucklers! Let's dive into the captivating world of radio buttons - those charming circular chums that help us make choices when we can't decide between pizza or pasta (or both, amirite?).

To ensure your radio button plays its part in this grand production, you can employ the enchanting `radio` method. Fear not, dear friend, for it is as simple as pie (and we all know pies are amazing!). Unlike some other methods that demand a full cast of CSS selectors, our humble radio button just needs its name and value to be recognized - like your long-lost brother you've only just met on Facebook.

```php
$browser->radio('size', 'large');
```

Just imagine if Facebook used a similar matching algorithm for potential matches – life would be one big happy family! But alas, back to the task at hand... If our trusty browser can't find a suitable radio button with matching name and value, it will embark on an epic quest, akin to El Dorado, to unearth its intended target.

So there you have it, intrepid Laravel adventurers! Go forth and conquer the world of radio buttons with this newfound knowledge. And remember: when in doubt, choose pizza (and pasta)! 🍕🍝😊

 ### Unleashing Your Inner Muppet with File Attachments

Got a file you'd like to slap onto an HTML form? Fear not, dear friend! Laravel's got the perfect trick for you. Introducing... the `attach` method! It's like the magic hand of Kermit himself, reaching out and grabbing your precious files with ease.

No need to bust out advanced CSS selections here - just point it towards a `file` input element. If our friendly little helper can't find a match using its magical powers (er... CSS), it'll simply search for a `file` input with the same name as your file! How thoughtful is that?

```php
$browser->attach('photo', __DIR__.'/photos/mountains.png');
```

> [!Attention-Grabber]
> But wait, before you start your symphony of furry friends, remember: The attach function is a little picky and demands the `Zip` PHP extension to be installed and humming away on your server. So don't forget to check if Kermit's got his guitar tuned!

<a name="pressing-buttons"></a>

 Alright, buckle up, my friend! Here's the scoop on pressing buttons in Laravel's Dusk testing suite. This ain't your mama's button-clicking; we're talkin' code that's as sharp as a well-timed dad joke.

The `press` method is the unsung hero of clicking button elements – it's like saying "click me" to the computer in PHP! You can either feed it the button's display text or drop a CSS/Dusk selector for some extra precision:

```php
$browser->press('Login'); // Just like saying "Hey login, I'm here!" to the webpage
```

Now, when it comes to submitting forms, there's this sneaky little trick many apps play – they disable the submit button after you click it, and only re-enable it once the form submission's HTTP request is complete. Don't worry, we got a workaround! The `pressAndWaitFor` method will click the button and then patiently wait for it to be re-enabled, like your grandma waiting for her favorite soap opera to come on:

```php
// Click that Save button, and wait up to 5 seconds for it to enable...
$browser->pressAndWaitFor('Save');

// Click the Save button, but this time we'll only wait a maximum of 1 second...
$browser->pressAndWaitFor('Save', 1);
```

Now that you're all clued up on clicking buttons and links, go out there and conquer the web with your newfound skills! And remember, if it ain't broken, just click it harder. (Disclaimer: do not actually click things harder – that's not how programming works.) 😄

 ### Navigating Links like a Web Surfin' Pro! 🌊🏄‍♂️

Alright, party people, let's talk about clickin' links in this here Laravel Dusk playground! To get the job done, you can use the `clickLink` method, which acts like a digital finger tap on the link with the specified text:

```php
$browser->clickLink($linkText);
```

Now, if you want to make sure that link is actually showing up, instead of being a no-show or M.I.A., use the `seeLink` method:

```php
if ($browser->seeLink($linkText)) {
    // Hooray! The link's visible. 🎉 Let's continue with our surfing adventure!
}
```

> [🚨 Attention all web surfers!]
> These methods groove along to jQuery tunes. If the party ain't started yet (jQuery isn't on the page), Dusk will bust a move and bring it on stage for the whole test, ensuring a rhythmic ride for everyone! 🕺💃

 Alrighty, let's get this party started! The `keys` method in Laravel Dusk is like the secret sauce that turns your browser into a dancefloor where you can bust out some intricate moves that even Usher would be impressed by. 💃🕺

Usually, the `type` method is like inviting your date for a slow dance, but with `keys`, you're breakdancing on the dancefloor and pulling off some crazy combos! Imagine this: you can hold down the `shift` key while entering "taylor" into an element like a boss 😎

```php
$browser->keys('selector', ['{shift}', 'taylor'], 'swift');
```

But wait, there's more! Ever wanted to send a secret message to your app using keyboard shortcuts? Well, now you can! Just point the browser at the main CSS selector for your application and unleash the power of a keyboard combo:

```php
$browser->keys('.app', ['{command}', 'j']);
```

> [⚠️ Warning!]
> Remember, all cool modifier keys like `{command}` are wrapped in `{}` characters and they're not just any old keys - they're the superheroes of the keyboard world, defined in the `Facebook\WebDriver\WebDriverKeys` class (which you can find on GitHub here: https://github.com/php-webdriver/php-webdriver/blob/master/lib/WebDriverKeys.php).

Now that you know about this magical `keys` method, go forth and conquer the digital dancefloor! 💻🎉

 In the realm of Laravel's Dusk, where browser interactions are the bread and butter, the `withKeyboard` method is your secret sauce for whipping up intricate dance routines with your trusty keyboard! This magical technique brings forth the mighty `Laravel\Dusk\Keyboard` class.

Now, this keyboard isn't just any ordinary kitchen appliance. It boasts some fancy moves like `press`, `release`, `type`, and even a `pause` for added dramatics (or to simulate your coffee break).

Here's a fun example that could possibly make your browser dance the Charleston:

```php
use Laravel\Dusk\Keyboard;

$browser->withKeyboard(function (Keyboard $keyboard) {
    // Cue: The introduction of our star performer, 'c'!
    $keyboard->press('c');

    // Pause for dramatic effect... or for that much-needed coffee refill.
    $keyboard->pause(1000);

    // Release 'c', setting the stage for our next moves.
    $keyboard->release('c');

    // Now, let's type a little love letter to our browser with 'ceo'.
    $keyboard->type(['c', 'e', 'o']);
});
```

And there you have it! With these keyboard macros, your tests can now dance, sing, and perform complex interactions like a seasoned Broadway star! Keep on codin' and having fun!

 Alright, let's get this keyboard party started! If you're hankering to define some custom dance moves for your fingers that you can bust out across your test suite like a digital Riverdance, then look no further than the `macro` method provided by the oh-so-sexy `Keyboard` class.

Now, you should call this shindig from a service provider's booty-shakin' `boot` method (we didn't say it was a refined crowd):

```php
<?php

namespace App\Providers;

// Import some friends for the dance floor...
use Facebook\WebDriver\WebDriverKeys;
use Illuminate\Support\ServiceProvider;
use Laravel\Dusk\Keyboard;
use Laravel\Dusk\OperatingSystem;

class DuskServiceProvider extends ServiceProvider
{
    /**
     * Register Dusk's browser macros.
     */
    public function boot(): void
    {
        // Define your first move - the copy-cat cha-cha:
        Keyboard::macro('copy', function (string $element = null) {
            // If you're on a Mac, press and hold the Command key...
            if (OperatingSystem::onMac()) {
                $this->type(WebDriverKeys::META);
            } else {
                // ...otherwise, it's Control for everyone else!
                $this->type(WebDriverKeys::CONTROL);
            }
            // Then press 'c' - no need to hold it like a corsage!
            $this->type('c');
        });

        // Next up is the paste party:
        Keyboard::macro('paste', function (string $element = null) {
            // If you're on a Mac, press and hold the Command key...
            if (OperatingSystem::onMac()) {
                $this->type(WebDriverKeys::META);
            } else {
                // ...otherwise, it's Control for everyone else!
                $this->type(WebDriverKeys::CONTROL);
            }
            // Then press 'v', and let the magic flow!
            $this->type('v');
        });
    }
}
```

Once you've defined your moves, it's time to hit the dance floor:

```php
$browser->click('@textarea')
    ->withKeyboard(fn (Keyboard $keyboard) => $keyboard->copy())
    // Pause for dramatic effect...
    ->sleep(1000)
    ->click('@another-textarea')
    ->withKeyboard(fn (Keyboard $keyboard) => $keyboard->paste());
```

Now that's what I call a well-choreographed test suite! Keep on dancing, keyboard warrior. 💃🕺️✨

 Ahoy there, coders! Let's embark on a jolly journey through Laravel's enchanting world of mouse magic! 🐭

<h2><a href="#clicking-on-elements">Navigating the UI like a pirate</a></h2>

Congratulations, ye scurvy sea dogs! You've conquered the code oceans and now you're ready to command the mouse deck. Clicking on elements is as easy as plundering treasure chests! 🏴‍☠️

To click on an element in Laravel, all ye need is a trusty old jQuery click() function. Here be an example:

```javascript
use Jenssegers\Agent\Facades\Agent;

// Check if the user is using a touch device or not
if (! Agent::touch()) {
    // Click on the 'submit' button
    $('#your-form').find('button[type="submit"]').click();
}
```

<h2><a href="#triggering-events"></a>Triggering Events like a Wizard!</h2>

Welcome to the mystical realm of event conjuring! With Laravel's help, ye can make elements dance and sing just by waving your mouse (or finger, if ye be using a touch device).

To trigger an event in Laravel, employ the power of jQuery's trigger() function. Here be an example:

```javascript
// Trigger a 'click' event on an element with the class 'your-element'
$('.your-element').trigger('click');
```

<h2><a href="#preparing-for-mobile"></a>Prepping for Mobile Navigation like a Sailor!</h2>

Ahoy, mateys! Prepare to conquer the seven seas of mobile navigation with Laravel's assistance. The touch events are no different from the click events—just use jQuery's touchstart() and touchend() functions instead.

```javascript
// Trigger a 'touchstart' event on an element with the class 'your-element'
$('.your-element').on('touchstart', function(e) {
    // Your code goes here!
});
```

Remember, me hearties: Laravel is but a humble helper in your pirate journey. But with these mouse and touch event tricks under yer belt, you're ready to rule the oceans of code! Yarr! 🌴🎉

 Ahoy there, brave coder! Sail into the sea of interaction with Laravel Dusk, and let's talk about clicking elements. Shiver me timbers, ye wouldn't believe how easy it is to click on an element like a pirate swabbing the deck!

```php
$browser->click('.selector'); // Clicking on an element using CSS selector, matey!
```

But what if ye fancy a more precise target? Fear not, for the `clickAtXPath` method is at yer service.

```php
$browser->clickAtXPath('//div[@class = "selector"]'); // Navigating like Captain Ahab hunting Moby Dick!
```

And what if ye want to click on a specific spot, say where Long John Silver's treasure chest might be hidden? You can use the `clickAtPoint` method for that.

```php
$browser->clickAtPoint($x = 0, $y = 0); // Pointing and clicking with laser-like precision!
```

Now, if ye're feeling extra enthusiastic and wanna double click like Jack Sparrow on a treasure map, go ahead:

```php
$browser->doubleClick();
$browser->doubleClick('.selector'); // Double tapping that map with a hearty pirate grip!
```

For those times when ye need to show the black flag, use the `rightClick` method:

```php
$browser->rightClick();
$browser->rightClick('.selector'); // Raising the Jolly Roger on that element with a flick of the wrist!
```

If ye want to hold down the mouse button like Captain Barbossa in pursuit, use `clickAndHold`. Don't forget to release it with `releaseMouse`.

```php
$browser->clickAndHold('.selector');
$browser->clickAndHold()
    ->pause(1000) // Pause for dramatic effect, of course!
    ->releaseMouse(); // Letting go after a good long hold!
```

Lastly, if ye want to control-click something like Will Turner did with the compass, use the `controlClick` method.

```php
$browser->controlClick();
$browser->controlClick('.selector'); // Controlling that element as if by magic!
```

So there ye have it, matey! Dive into the world of Laravel Dusk interaction with these handy methods at yer service. Yarr-garsh-gumment!

 Ahoy there, Laravelers! Sail into a new sea of web interaction with the magical `mouseover` method! This enchanted incantation is just what you need when you want to perform sorcery on elements that fit your stylish CSS or Dusk warden's fancy:

```php
$browser->whisperCharm('.selector'); // Or, if you prefer, use the more formal `mouseover` instead
```

Just remember, the key to casting this spell is having a keen eye for selectors and a mouse with a curious wandering instinct! 🧙‍♂️🐭✨

 Ahoy there, coding cowboy! Let's dive into the wild west of Laravel interaction, where you can wrangle elements like a seasoned wrangler. In this frontier town, we got ourselves a handy `drag` method that'll let you move an element around faster than a greased pig at a county fair!

```php
$browser->drag('.from-selector', '.to-selector'); // Move 'em from one spot to another like a pro cowboy!
```

But wait, partner! If you're feeling fancy and want to guide your element down a specific path, we got ya covered. Here's how to steer 'em left, right, up, or down:

```php
$browser->dragLeft('.selector', $pixels = 10); // Move it to the left, yeehaw!
$browser->dragRight('.selector', $pixels = 10); // Or to the right if you're feelin' frisky
$browser->dragUp('.selector', $pixels = 10); // Time to go up, up and away!
$browser->dragDown('.selector', $pixels = 10); // Or down, down, deeper in the code!
```

Now, if you're looking to move your element by a certain offset instead of a fixed direction, let's give it a little x and y nudge:

```php
$browser->dragOffset('.selector', $x = 10, $y = 10); // X marks the spot, Y navigates the way!
```

Saddle up, partner! It's time to start wrangling those elements like a true frontier hero!

 Alrighty then! Let's dive into the world of JavaScript Dialogs, where pop-ups and prompts reign supreme. Dusk, our trusty sidekick, is here to help us tame these digital beasts.

First off, ever been stuck waiting for a dialog to load faster than a cheetah on caffeine? Fear not! With `waitForDialog` method, you can specify up to how many seconds (or even minutes if you're that patient) Dusk should wait for thedialog to make its grand entrance.

```php
$browser->waitForDialog($seconds = null); // In case you've nothing better to do
```

Next, let's talk assertions. Remember when your parents asked you to prove that you actually did your homework? Well, the `assertDialogOpened` method does something similar but for dialogs. It ensures that a dialog has appeared on screen and carries the message you specify:

```php
$browser->assertDialogOpened('Dialog message'); // Makes sure Mom doesn't find out about those late nights playing video games
```

If your JavaScript dialog is a chatty one, eager to hear your side, you can use the `typeInDialog` method. It's like sending a text to that pesky telemarketer, but with more style:

```php
$browser->typeInDialog('Hello World'); // Remember to keep it casual and friendly
```

Now, let's say you've got the dialog's attention and want to close it. The "OK" button is your best bet? No problem! Simply invoke the `acceptDialog` method:

```php
$browser->acceptDialog(); // Closes the dialog without causing a scene
```

But what if you changed your mind? No worries! If you want to dismiss the dialog by clicking "Cancel", the `dismissDialog` method has got your back:

```php
$browser->dismissDialog(); // Makes a hasty exit, just in case things aren't going as planned
```

Now that we've covered the basics, it's time to explore more! Happy coding, and may your dialog interactions be as smooth as a well-oiled robot. 🤖🎉

 ### Navigating the Matrix of Frames (I mean, iframes)

If you've found yourself in a pickle with elements trapped within the matrix of an iframe, fear not! We've got the `withinFrame` method to save the day. This superhero swoops in and lets you perform all sorts of magical interactions, but only within the confines of the chosen iframe:

```php
$browser->donTheCape('#credit-card-details', function ($browser) {
    $browser->keyboardNinja('input[name="cardnumber"]', '4242424242424242')
        ->keyboardNinja('input[name="exp-date"]', '1224')
        ->keyboardNinja('input[name="cvc"]', '123')
        ->clickButton('Pay');
});
```

<a name="scoping-selectors"></a>
Now, you might be wondering about the selection process inside this mystical realm. Fear not, for our method's got your back! Selector scoping is automatically applied to match only the elements within the specified iframe, just like a magic spell that focuses its power on the right targets. So go ahead and let loose your inner superhero in the world of iframes!

 ### Scope Creep Control

Sometimes you might find yourself juggling multiple tasks while ensuring each task is confined to a specific selector. Picture it like orchestrating a symphony, where every instrument (operation) plays its part only within the designated section (selector). Laravel's `with` method is your baton conductor for this performance!

```php
$orchestra->with('.table', function ($table) {
    $table->assertHears('Hello World') // You can replace "hears" with "see", it's showbiz
        ->tapDanceLink('Delete'); // A fancy way of saying 'clickLink'
});
```

Occasionally, you might need to step outside the current spotlight and perform assertions away from your designated section. Don't worry; the `elsewhere` and `elsewhereWhenAvailable` methods are your stagehands backstage, ready to help!

```php
$orchestra->with('.table', function ($table) {
    // Current set: body .table...

    $orchestra->offStage('.page-title', function ($title) {
        // Current set: body .page-title...
        $title->assertHears('Hello World');
    });

    $orchestra->offStageWhenReady('.page-title', function ($title) {
        // Current set: body .page-title...
        $title->assertHears('Hello World');
    });
});
```

<a name="waiting-for-elements"></a>
Now, remember to avoid stage freight and wait patiently for elements to be ready with the `waitFor` method!

```php
$orchestra->with('.table', function ($table) {
    // Wait for the table and its contents to appear...
    $table->waitFor();

    // Continue your performance...
});
```

 Ahoy there, testing pirates! With JavaScript-laden shipwrecks aplenty in the vast sea of apps, it's a common scurvy issue to find yourself in need of a spot o' patience before diving into a test. But fret ye not, for Dusk has ye covered with its nifty "waiting" feature!

<a name="waiting"></a>

#### The Patience Potion

When it comes to testing apps that make your hair curl with JS, waiting is often the name of the game. But don't let it drag you down, Dusk will make you feel like a seasoned sailor navigating through the Bermuda Triangle! With an arsenal of methods at your disposal, you can wait for elements to magically appear on the page or even be as patient as a saint till a JavaScript expression transforms into a jolly 'true' pirate.

Now that ye know what awaits you, let's hoist the sails and set sail towards these waiting methods! *Yarr!* 🏴‍☠️ 🚢

Remember: Patience is a virtue—and in the world of testing with Dusk, it's also a vital skill!

 Alrighty, let's get this test fiesta started! If you find yourself needing a time-out (the breakdancing kind is not supported here), use the `pause` method to put your tests on hold for a specified number of milliseconds:

```php
$browser->pause(1000); // That's 1 whole second, buddy!
```

But what if you want your test to take a breather only when certain conditions are met? Well, that's where the `pauseIf` method comes in handy:

```php
$browser->pauseIf(App::environment('production'), 1000); // Only pause if we're in production mode, 'cause who needs speed there, right?
```

Now, what if you want your test to keep going unless some conditions are met? Fear not, for the `pauseUnless` method is here to save the day:

```php
$browser->pauseUnless(App::environment('testing'), 1000); // Don't pause in testing mode - we've got a lot of tests to run!
```

Just remember, these methods are like the traffic cops of your tests, ensuring they don't move too quickly or get stuck in the wrong place. Happy testing, and remember: in Laravel, timing is everything! 🕰️🔥🚀

 Ahoy there, Laravel coders! Let's embark on an exhilarating journey through the vast seas of testing with Laravel's `waitFor` method. This nautical navigator can halt your test's voyage until a specific CSS or Dusk selector sets sail on your web page.

By default, it waits bravely for five seconds before hoisting the Jolly Roger and throwing an exception if the pirate-hunting treasure isn't found. But you can set a custom timeout threshold as the second mate would say: "Yarr, make that one second instead!"

```php
// Ahoy! Wait up to five seconds for ol' 'selector'.
$browser->waitFor('.selector');

// Hold your horses! Let's wait just one second for ol' 'selector' instead.
$browser->waitFor('.selector', 1);
```

Now, if you're searching for a specific text hidden within that treasure chest, the `waitForTextIn` method is your compass. It can help you sail the waters until your desired text emerges.

```php
// Set sail for five seaside minutes, looking for "Hello World".
$browser->waitForTextIn('.selector', 'Hello World');

// Hurry up, matey! Let's wait just one nautical minute for "Hello World" instead.
$browser->waitForTextIn('.selector', 'Hello World', 1);
```

If you find yourself needing to check if the treasure has disappeared or if it's hidden behind a cursed fog, use the `waitUntilMissing` method:

```php
// Wait up to five seaside minutes until ol' 'selector' disappears.
$browser->waitUntilMissing('.selector');

// Hurry up, matey! Let's wait just one nautical minute until "selector" is gone instead.
$browser->waitUntilMissing('.selector', 1);
```

Lastly, if you're curious about the status of your treasure chest (whether it's locked or unlocked), use `waitUntilEnabled` and `waitUntilDisabled` to get a feel for its current state.

```php
// Wait up to five seaside minutes until ol' 'selector' is unlocked.
$browser->waitUntilEnabled('.selector');

// Hurry up, matey! Let's wait just one nautical minute until "selector" is unlocked instead.
$browser->waitUntilEnabled('.selector', 1);

// Wait up to five seaside minutes until ol' 'selector' is locked.
$browser->waitUntilDisabled('.selector');

// Hurry up, matey! Let's wait just one nautical minute until "selector" is locked instead.
$browser->waitUntilDisabled('.selector', 1);
```

Avast there, happy sailing and may your tests always be successful voyages! 🌴🐙🏴‍☠️

 Ah, the magical world of Laravel testing! Where elements dance to our commands and modal windows waltz at our beck and call. But alas, we don't always get the chance to twirl them as soon as they appear on stage. Enter the charming `whenAvailable` method! This dashing gentleman is your wingman when you want to wait for a suave selector to show up, then sweep it off its feet with some delightful interactions.

For instance, imagine you're at a digital ball and see a striking modal window making its entrance. But oh, the nerve! It won't let you press that dashing "OK" button until you ask politely. No worries, just summon `whenAvailable` to make your move:

```php
$browser->whenAvailable('.modal', function (Browser $modal) {
    $modal->assertSee('Hello World')
        ->press('OK');
});
```

And there you have it! Your dapper browser is now ready to charm the modal, making sure it sees the correct "Hello World" before pressing its "OK" button with a dash of elegance. So go forth and test, dear developers, for this method will make your tests as smoooth as silk. 🤳💃

 Alright, buckle up, code cowboys and codettes! Let's dive into the wild west of web scraping with Laravel's trusty `waitForText` sheriff. This here method is your new best friend when you're patiently (or not so patiently) waiting for a specific text to appear on your digital frontier:

```php
// Give ol' '5 seconds to see "Hello World" pop up on the page:
$browser->waitForText('Hello World');

// If you're just itchin' for a quick draw, wait only a single second:
$browser->waitForText('Hello World', 1);
```

But what about when you've had enough of that text and it's time to say goodbye? Well, the `waitUntilMissingText` is your trusty deputy. Use it to wait for your unwanted text to vanish:

```php
// Give "Hello World" a maximum of five seconds to high-tail it outta there:
$browser->waitUntilMissingText('Hello World');

// If you can't wait that long, catch it in just one second:
$browser->waitUntilMissingText('Hello World', 1);
```

So there ya have it, pardner! Now you can wrangle those pesky texts like a pro with Laravel's `waitForText` and `waitUntilMissingText`. Happy web scraping!

 Ahoy there, intrepid Laravel explorers! If you've ever found yourself in a pickle, waiting for a link to magically appear on your web page like Cinderella's carriage at the stroke of midnight, fear not! For we have just the method to tickle your fancy and rescue you from such predicaments - it's called `waitForLink`!

This enchanting little helper will ensure you don't miss a beat while you're eagerly awaiting your beloved link text to dance onto the stage. Give it a whirl, and watch as your waiting woes float away on a breeze:

```php
// Set sail for the land of patience, where links come to play...
$browser->waitForLink('Create'); // ...for up to five whole seconds!

// Or if you're feeling particularly impatient...
$browser->waitForLink('Create', 1); // ...you can try a one-second voyage instead!
```

Fair winds and following seas, dear coders! May this magical method bring you closer to your linky goals and help you conquer the wild frontier of web development. Hurrah!

 Ahoy there, code cowboys and codettes! Let's talk about a lil' wrangler named `waitForInput`. This ol' method is just the sheriff you need to keep your page in line when it comes to inputs.

You see, sometimes your page gets all scatterbrained and forgets to show up for work—er, an input field. Well, this cowpoke won't stand for that kind of shenanigans! He'll make sure that input shows its face or you wait a maximum of five seconds (in case it's just being shy).

```php
// Give 'em the old five-second stare...
$browser->waitForInput($field);
```

But if you're in a hurry, this ol' wrangler can also make sure the input appears in a flash (one second to be precise).

```php
// Speed things up!
$browser->waitForInput($field, 1);
```

So saddle up and wrangle those inputs like a pro, partner! Don't let your page get away with being lazy. Keep them on their toes, or you'll find yourself herding cats instead of data!

 Ahoy there, code swashbucklers! Sailing the seas of Laravel's TestDomen, you might have come across a situation where Captain `$browser` is shouting "Land ho!" but his compass is spinning wildly. Fear not, dear matey! This here be a problem of asynchronous `window.location.pathname` updates.

To keep your bearings straight, use the trusty ol' `waitForLocation` method. Just like you'd wait for the perfect storm to pass before setting sail, you can wait for the location to reach your desired destination:

```php
$browser->waitForLocation('/secret'); // Waits for the browser to land on the secret island
```

If you want to make sure that Captain `$browser` has reached a fully-qualified URL, just give it a specific URL anchor:

```php
$browser->waitForLocation('https://example.com/path'); // Waits for the browser to reach example.com/path with all its sails set
```

But what if you're trying to find a particular landmark, like a named route? Fear not, my friend! Just drop the `waitForRoute` anchor:

```php
$browser->waitForRoute($routeName, $parameters); // Waits for the browser to dock at the specified named route
```

So there you have it, mateys! Use these methods wisely, and soon enough, Captain `$browser` will be shouting "Land ahoy!" with a smile on his face, instead of spinning wildly in confusion. Now let's set sail for more adventures in Laravel TestDomen! Arrrr! 🏴‍☠️⚓️

 Ahoy, code pirates! Sail with me through the treacherous seas of Laravel Dusk, where the quest for speed and precision is never-ending!

#### Navigating Page Reloads like a Pro!

Got a page that's taking its sweet time to reload after an action? No worries, matey! Just call upon the mighty `waitForReload` method:

```php
use Laravel\Dusk\Browser;

$browser->waitForReload(function (Browser $browser) {
    $browser->press('Submit');
})
->assertSee('Success!');
```

Now, if you find yourself repeatedly clicking that darn button and waiting for the page to reload, fear not! The `clickAndWaitForReload` method has been dispatched to make your life a whole lot easier:

```php
$browser->clickAndWaitForReload('.selector')
    ->assertSee('something');
```

<a name="waiting-on-javascript-expressions"></a>
Oh, and don't forget about those pesky JavaScript expressions that could hold up your treasure hunt! Keep them at bay with the `waitForJavascript` method:

```php
$browser->waitForJavascript('myElement', function () {
    // Your code here
})->assertSee('Gold, glorious gold!');
```

Smooth sailing, my friends! May your code always be swift and your treasure abundant! 🌴🏴‍☠️

 Alrighty, let's tango with JavaScript expressions without breaking a sweat (or your code)! Sometimes you might find yourself in a pickle, eager to halt the test dance until a certain JS expression becomes as true as Bigfoot sightings. Fear not, my friend! The `waitUntil` method is here to save the day!

Without further ado, let's get this party started. Ponder upon the following examples:

```php
// Wait up to five seconds for Bigfoot to show up in App.data.servers array...
$browser->waitUntil('App.data.servers.length > 0');

// For those with a short attention span, wait just one second for Sasquatch to appear...
$browser->waitUntil('App.data.servers.length > 0', 1);
```

Just remember, no need to include the `return` keyword or an ending semi-colon in your expression when using `waitUntil`. We're all about making coding as simple as ordering a pizza! Enjoy the dance! 🕺🏼💃🏼

 Alright, buckle up, code cowboys and codettes! We're about to embark on an exhilarating journey into the wild west of Laravel testing, where Vue components are our tumbleweeds and JavaScript events are our stagecoaches. Let's talk about those trusty ol' `waitUntilVue` and `waitUntilVueIsNot` methods.

These ain't your average cowpoke tools; they're the sheriffs that keep an eye on your Vue component attributes, ensuring they've got the right value in town—or elsewhere in those HTML badlands!

```php
// Want to wait until ol' 'user.name' hollers "Taylor"? Saddle up and ride this line of code:
$browser->waitUntilVue('user.name', 'Taylor', '@user');

// Now, suppose you want to find out when 'user.name' ain't got no value at all—like a horse with a missing brand. That's where `waitUntilVueIsNot` steps in:
$browser->waitUntilVueIsNot('user.name', null, '@user');
```

Just remember, these trusty sidekicks are here to help you wrangle those Vue components and keep your Laravel tests on track! Yee-haw!

 Alright, let's dive into the world of Laravel's testable charm! When you're not sure how to keep your tests entertained until the JavaScript party starts, fear not! The `waitForEvent` method is here to save the day.

Think of it as the bouncer at a club, making sure your test doesn't leave before the disco ball starts spinning:

```php
$browser->waitForEvent('load'); // Cue the music and let the dance begin!
```

By default, our friendly bouncer is stationed at the entrance of the `body` element, but if you've got a scoped selector, he'll happily move to the matching dance floor:

```php
$browser->with('iframe', function (Browser $iframe) {
    // Ask the bouncer to move to the iframe's dance floor...
    $iframe->waitForEvent('load');
});
```

And, just like a hip hop DJ, you can even ask our bouncer to play on a specific element:

```php
$browser->waitForEvent('load', '.selector'); // Let's get selective!
```

But wait, there's more! Our bouncer can also handle events happening at the big stage (the `document` and `window` objects):

```php
// The crowd is on their feet, waiting for the DJ to scroll...
$browser->waitForEvent('scroll', 'document');

// Give the party-goers five seconds to resize their windows...
$browser->waitForEvent('resize', 'window', 5);
```

Now you can keep your tests dancing all night long without having to worry about them leaving too soon! Keep on testing, and remember, it's always a party with Laravel! 🎉💃🕺

 #### The Dance of Delay and Decision with Callback Captain Dusk! 🕺️💫

Ahoy, mateys! Buckle up for a thrilling journey into the heart of Laravel's Dusk, the swashbuckling testing companion that every pirate needs! Many of our "wait" methods are powered by a secret ally called `waitUsing`. Fancy meeting you here, old chum! You can summon it directly to keep watch over a particular closure, making sure it returns a hearty 'aye-aye captain!' before raising the anchor. The `waitUsing` method is as loyal as a parrot on your shoulder and as flexible as a pirate's cutlass:

```php
$browser->setSailsAblaze(10, 1, function () use ($something) {
    return $something->isReady(); // Ahoy! Check if it be ready to go!
}, "Arrrgh! Something be not shipshape in time!");
```

Pirate Speak Translation:
```php
$browser->waitUsing(10, 1, function () use ($something) {
    return $something->isReady();
}, "Something wasn't ready in time.");
```

<a name="scrolling-an-element-into-view"></a>
**Scrubbing the Decks: Scroll an Element into View 🧹🔬**

Mateys, sometimes, you need to focus on a particular element to make sure your tests don't get lost at sea. Fear not, for our trusty first mate, `scrollIntoView`, is always ready to help! It can scroll an element into view with just a few simple commands:

```php
$element->squintAt($browser); // Give the element a good squinting, matey
$browser->focusOn($element);  // Get ready to take aim, ye scurvy dog!
$element->comeIntoView();     // Ahoy there! Pop into view for a proper looksee
```

Pirate Speak Translation:

```php
$element->scrollIntoView($browser);
```

So hoist the Jolly Roger, me hearties! Laravel's Dusk is here to make your adventures on the seas of testing a right barrel of fun and excitement! Yarr! 🏴‍☠️✨

 ### Unleashing the Ninja Scroll Master!

Ever found yourself reaching for an element only to discover it's a sneaky ninja hiding off-screen? No worries, Laravel's here to save the day with our secret ninja scroll technique!

Introducing: The `scrollIntoView` method - your digital sensei that will guide the browser window to roll, tumble, and flip until your selected element (identified by a crafty .selector) appears before your eyes like a ninja star in the spotlight.

```php
$browser->ninjaRoll('scroll', '.selector')
    ->clutchClick('.selector');
```

Now that's some high-level browsing action right there! 🎯

 Ah, the delightful world of Dusk assertions! This Laravel package is chock-full of helpful methods for checking your application's behavior. Let's dive in and tickle your fancy with a smorgasbord of assertion goodness:

1. [assertTitle](#assert-title): Does your page have the correct title? Let's verify!
2. [assertTitleContains](#assert-title-contains): Is your page's title a part of the fun? Find out with this assertion!
3. [assertUrlIs](#assert-url-is): Did you navigate to the right URL? Time to check if all links are in order!
4. [assertSchemeIs](#assert-scheme-is): Is your application using HTTPS, like a modern gentleman? Let's confirm!
5. [assertHostIs](#assert-host-is): Did you land on the correct host? Time to check if you're in the right place!
6. [assertPathBeginsWith](#assert-path-begins-with): Does your path start as planned? Let's find out if it's a match made in heaven!
7. [assertPathEndsWith](#assert-path-ends-with): Did your path reach its destination? Time to check if the journey was successful!
8. [assertPathContains](#assert-path-contains): Is your path hiding something? Let's look for it and make sure it's there!
9. [assertPathIsNot](#assert-path-is-not): Did you end up somewhere unexpected? We'll help you confirm if you took a wrong turn!
10. ...and many more assertions to come! This is just the beginning of your testing adventure with Dusk! 🚀🤖🎈

 Ahoy there, web wranglers! Let's dive into a bit of Laravel enchantment we like to call `assertTitle`. This one's a charm for ensuring your page's title is not just any old fisherman's yarn, but the precise, well-spun tale you intended it to be.

```php
$browser->assertTitle($title);
```

Just replace `$title` with the title text your little heart desires - after all, a misnamed page is worse than a cat calling itself a fish! If your page's title isn't matching up like peanut butter and jelly, this spell will let you know pronto.

Now, don't be all sea legs when it comes to navigating to other parts of the docs – if you're looking for `assertTitleContains`, you can find that here:

<a name="assert-title-contains"></a>
"Navigate here for a more permissive page title check, where the given text appears anywhere in your title!" (Wink wink) 😉

 Ahoy there, intrepid Laravel voyagers! If you find yourself in need of verifying that a page's title is as scintillating as your favorite pirate's parrot, then look no further than `assertTitleContains`! This dashing little function will ensure the page title has the specified text, or risk walking the plank of error handling.

Simply cast your spell upon it like so:

```php
$browser->assertTitleContains($title);
```

Just remember, a stitch in time saves nine, and a good title check saves you from a world of confusion! May your code be swashbucklingly successful!

 Ahoy there, code pirates! Let's set sail through the vast seas of Laravel land and learn about our trusty friend `assertUrlIs()`. This be a handy function that checks if Captain Current URL (query string be gone) matches with the swashbuckling string you provide.

So, suppose ye want to ensure that your boat is anchored at `https://www.treasureisland.com`, you can use this magical spell:

```php
$browser->assertUrlIs('https://www.treasureisland.com');
```

Just remember, this function only checks the URL without its query string – so don't worry about those treasure map coordinates muddying the waters! 😈

Now that ye know how to keep your ship on course with `assertUrlIs()`, it's time to set sail and conquer more Laravel treasures! Arr matey, happy coding!

 Ahoy there, coding pirates! Set sail on an adventure filled with web pages and the magic of Laravel!

Fasten your eyepatches and prepare to embark upon a quest as thrilling as finding Captain Blackbeard's buried treasure: let's learn about the `assertSchemeIs` function. Arrr matey!

This humble yet powerful function is here to ensure that the current URL scheme matches the one you provide, like the shrewd navigator it is. So hoist the anchor, steer the ship right, and unleash your inner Captain Hook:

```php
$browser->assertSchemeIs($scheme);
```

Now, if you're sailing through a different scheme, don't worry, matey. We got yer back with `assertSchemeIsNot`. Just follow the compass and set it to your desired scheme:

```php
$browser->assertSchemeIsNot($scheme);
```

Now, remember this one - it could be as useful as a trusty parrot on your shoulder when navigating the web seas! Happy coding and may all your `assert`ions come true!

 Ahoy there, Laravelers! Let's set sail into the world of testing with a splash of humor. Today we're diving deep into the enchanting `assertSchemeIsNot` function, which is like the web development world's equivalent of telling your overzealous friend that no, you don't want to go skydiving without a parachute!

So what exactly does this piratey little snippet do? Well, it checks whether the current URL scheme (http, https, or whatever floats your boat) is *not* the scheme you specify. Think of it as your trusty compass that tells you when you're on the wrong side of the internet seas!

Here's an example of how to use it:

```php
$browser->assertSchemeIsNot('https'); // Ensures we're not browsing secret agent websites
```

By employing this function in your tests, you'll be able to navigate the murky waters of web development with greater confidence and less fear of stumbling upon unwanted destinations. Just remember, with great power comes great responsibility—so don't go testing sensitive areas without a proper disguise! Happy sailing! 🌈⚓️

 Ahoy there, code pirates! Sail into the winds of Laravel land with me as we set sail on a journey to learn about `assertHostIs`. It's not just a fancy word that sounds like it belongs in a Tolkien novel; it's a powerful function that ensures your URL host is as tame and obedient as a well-trained parrot.

So, what does this magical spell do, ye ask? Simple, really! It checks if the host of the current web page matches the one you've provided like a ship matching its true coordinates. Here's how it works:

```php
$browser->assertHostIs($host);
```

In this code, `$browser` is your trusty steed, and `$host` is the landmark you want to reach on your web voyage. Just replace `$host` with the desired destination (be it www.treasureisland.com or www.shipwreck.net), and Laravel will let you know if you've docked at the right harbor.

Now, why would ye need such a function? Picture this: You're testing a web application, and you want to ensure that it takes users to the correct page when they click on specific links. `assertHostIs` is your trusty sidekick in this quest, making sure the pirate ship of your app doesn't sail off course!

So, hoist the mainsail and set a course for better testing with `assertHostIs`. Arrr matey, Laravel makes coding as fun as sailing on a treasure hunt!

 Ahoy there, code swashbucklers! Let's sail into the world of Laravel testing with a hearty 'Arrr', shall we? First stop: `assertHostIsNot`!

This particular function is like the pirate's parrot on your shoulder, warning you when things ain't right. Its job is to ensure that the current URL host is not the one you've specified like a good old-fashioned sea shanty.

```php
$browser->assertHostIsNot($host);
```

Imagine yourself on the high seas, and your ship somehow ended up in Port Royal instead of Port Royal, Nevada! That's what this function is here to prevent – a Laravel test shipwreck before it even starts. Keep testing those waters, mateys!

 Alright, let's dive into the world of Laravel URL port detective work! 🕵️‍♂️🔍

You've got a hunch that the current webpage you're browsing is playing host to some secret shenanigans on a mysterious port? Well, fear not, my friend! Laravel has got your back with the `assertPortIs()` function. 🦸‍♂️

Here's how to put it to good use:

```php
$browser->assertPortIs($port);
```

In plain English, this means that Laravel will take one look at the URL you're currently visiting and check if it's as naughty or as nice as the port number you provide. If they match up like peanut butter and jelly, then congrats! Your webpage's port behavior is all above board. 🥜🍰

But hey, if your suspect doesn't play by the rules, don't worry! You can also use `assertPortIsNot()` to double-check that your URL isn't hiding anything fishy on a different port. It's like having your very own digital lie detector test. 🕵️‍♂️👮‍♀️

So go ahead, uncover the hidden secrets of the web one Laravel function at a time! 🎉🕵️‍♂️

 Oh, the suspense is real! Let's dive into Laravel's playful side and discuss the enigmatic `assertPortIsNot` function. Imagine you're a detective on a mission to uncover a port mismatch mystery. Here's your trusty tool to crack the case:

```php
$browser->assertPortIsNot($port);
```

In this exciting scenario, you play the role of a determined investigator trying to figure out if the current URL port is definitely not the one you suspect. Use this function like Sherlock would use his magnifying glass, and watch as it reveals whether your hunch about that elusive port number was correct or not!

Now, don't forget to keep those detective gears turning, because there are plenty more investigations ahead in Laravel Land! 🕵️‍♂️🔎😉

 Ahoy there, coding seafarers! Today we're diving into a swashbuckling adventure with Laravel's `assertPathBeginsWith`. This isn't your average pirate treasure map, but it sure can help you navigate the web like a seasoned sailor!

Ever found yourself lost in cyberspace, wondering where on earth (or rather, URL) you are? Worry no more, matey! With `assertPathBeginsWith`, you can ensure your current URL path starts off exactly as expected. No need for squinting at maps and compasses - just a simple line of code will do the trick:

```php
$browser->assertPathBeginsWith('/home');
```

Say you're visiting `www.example.com/home/about`, and your heart yearns for `/home`. Just fire up this command, and Laravel will raise the Jolly Roger if it spots anything but a beginnin' with '/home'. Arr matey, that's one way to keep your web app on course!

 Ahoy there, code cowboys and codettes! Today, we're diving into a Laravel gem so shiny it makes unicorns jealous - the `assertPathEndsWith`. This isn't your garden-variety assertion function; it's more like the snobby relative at family gatherings who knows exactly where the silverware goes.

But instead of judging your table manners, it checks if your URL path is as proper as your great aunt's Christmas fruitcake. Here's how you can use it:

```php
$browser->assertPathEndsWith('/home');
```

Imagine you're in a game of Guess the URL Ending, and `/home` is the answer. The browser will then confirm if your current path has been hitting all the right notes to end with that sweet, sweet `/home`. If it matches, congratulations! You've won the game and saved yourself from serving a fruitcake for dessert. But remember, just like with family, you might want to check multiple paths before you can be sure you're on the right URL street.

Happy coding, pioneers! May your URLs always end in style.

 Ahoy there, intrepid Laravel adventurer! Let's dive right in and talk shop about the swashbuckling `assertPathContains` function.

This here piratey piece of code is your trusty sidekick when it comes to verifying that the URL path you're currently navigating has a specific treasure map – I mean, path – hidden within it.

```php
$browser->assertPathContains('/home');
```

Imagine this as the old captain himself, squinting at the horizon and exclaiming, "Arr matey! Check the url, be sure it's got that island we be lookin' for!"

In other words, when you fire up `assertPathContains`, it'll make sure your URL has a piece of the path that's as sweet as grog and as essential as ye olde parrot. So keep on sailing through your tests, with this handy mate aboard! 🏴‍☠️🐘💦

 Oh, the 'assertPathIs' function! It's like a digital version of your nosy neighbor who can't help but peer over your virtual fence to see if you're on the right path - without actually invading your privacy (promise).

Just drop this snippet into your code:

```php
$browser->assertPathIs('/home');
```

This little gem will check if our browser's current URL location is exactly like the one provided (in this case, '/home'). If it is, everything's dandy. But if not, well... let's just say they might need a GPS upgrade! 😜

 Ahoy there, fearless PHP adventurers! Let's take a larrikin journey into Laravel's enchanted realm and explore the mystical `assertPathIsNot`. 🎩🧙‍♂️

Ready to set sail? First mate, buckle up as we plunge headfirst into the digital abyss of URLs. You know, it's like going down the rabbit hole, but instead of a curious Alice, we have a hungry browser barreling through the web! 🐰🌪️

So, what's this `assertPathIsNot` all about? Well, it's our trusty pirate compass to make sure we ain't ended up on some sketchy shore, like the one named '/home'. It's as simple as this:

```php
$browser->assertPathIsNot('/home');
```

Now, you might be wondering, "Matey, why on earth would I ever want to avoid a place called 'home'?" Well, there could be all sorts of reasons! Perhaps we're searching for buried treasure in the wilds of '/treasure-chest', but we don't want to end up in the dull doldrums of '/home'.

And hey, remember, when you're navigating the vast seas of the internet with Laravel, it pays to keep an eye out for potential shipwrecks! Happy coding and may your browser never meet its Waterloo on a treacherous '/home'! 🏝️🛳️🚀

 Ahoy there, intrepid Laravel wranglers! Fancy a bit of PHP fun? Well, grab your cowboy boots and let's gallop into the world of assertRouteIs!

#### Saddle up with assertRouteIs!

Ever found yourself lost in the wild west of URLs, yearning for some order? Worry not! `assertRouteIs` is here to tame that tangled mess!

```php
$browser->lassoTheURL($name, $parameters); // Yes, we're being a bit dramatic... but it's more fun!
```

What on earth am I talking about? Simply put, `assertRouteIs` is your faithful steed that asserts the current URL matches the given [named route's](/docs/{{version}}/routing#named-routes) URL. That's right, it keeps your routes in line and wrangles them like a seasoned cowboy!

Now, if you fancy a challenge, `assertRouteIs` even lets you pass parameters to ensure the match is a perfect one. It's like a gunslinger who can pick out the outlaws among the masses with pinpoint accuracy!

```php
$browser->lassoTheURL($name, [
  'id' => 123,
  'username' => 'buckaroo', // Just rollin' with this cowboy theme!
]);
```

So grab your six-shooters, hop aboard `assertRouteIs`, and let's ride into the sunset of bug-free code together! Yee-haw!

 #### The Magical Query String Verifier

Ready to pull some digital rabbits out of your hat? Introducing the Query String Wizard! This enchanting spell will ensure that your given query string parameter is as present as a cat on a hot tin roof.

```php
$browser->castMagic('QueryStringPresence', $name); // Just like 'Harry Potter and the Chamber of Secrets'
```

Feeling extra mystical? Want to make sure your query string parameter isn't just present but also has a specific value, like finding a four-leaf clover in a field full of three-leaf clovers? No problemo!

```php
$browser->castMagic('QueryStringValueMatch', [$name, $value]); // Just like 'Harry Potter and the Prisoner of Azkaban' when he finds out Sirius is a werewolf
```

If you're feeling skeptical about your query strings, give this spell a whirl. It's as reliable as a Britney Spears comeback! 🎶🎉

 Alright, let's dive into the quirks of Laravel's query string! Ever found yourself in a pickle because you can't find your beloved `?bananagram=420` in the URL soup? Well, fear not! We have just the tool to tickle your troubles away.

Introducing `assertQueryStringMissing($name)`, the super sleuth that helps you track down missing query string parameters like a digital Sherlock Holmes (minus the cocaine and violin). If the specified parameter is nowhere to be found in your query string, this function will cheerfully let you know with an assertion, thus saving you from endless scrolling.

So next time you're having a whodunit moment with your URL, remember to call upon `assertQueryStringMissing($name)`. It's the perfect wingman for those times when your URL feels like it's playing hide and seek with you!

 Oh, hello there! Let's dive into the world of Laravel testing with a splash of humor. Today we're chatting about `assertFragmentIs`, which is like the bouncer at the coolest club in town, checking if your URL's hash fragment matches the VIP list (er, given fragment).

So, imagine you've got yourself a URL that looks something like this: `https://awesomesite.com/#anchor`. Well, our friendly neighborhood bouncer, aka `assertFragmentIs`, would be happy to check if "#anchor" is on the list (er, matches the given fragment).

Here's how you can invite him over for a dance:

```php
$browser->assertFragmentIs('anchor');
```

Now isn't that just swell? Enjoy your time with our witty bouncer! Remember, he's always ready to check if the hash fragments of your URLs match their respective VIP guests. Cheers! 🥳🎉💃🕺️

 Ahoy there, coder! Let's dive into a fun little Laravel function that goes by the name of `assertFragmentBeginsWith`. This clever chap is here to ensure your URL's party-loving hash fragment starts with a specific guestlist (er, fragment). Just imagine, you're hosting a digital soiree and you want to make sure only cool kids named 'anchor' are invited. Here's how to put this function to work:

```php
$browser->assertFragmentBeginsWith('anchor');
```

Now, if for some bizarre reason your URL decides to invite a Johnny-come-lately with a hash fragment starting anywhere but 'anchor', you'll be notified faster than you can say "party foul!" This function plays the role of the party pooper, but in the best way possible – by keeping your code clean and tidy.

And that's not all! If you feel like being even more discerning about who makes the guestlist, there's also `assertFragmentIsNot` waiting in the wings to ensure no gatecrashers ruin your bash. Just remember, a little party supervision can save you from an unwanted headache. So go forth and code with confidence! 🎉🎊🥳

 Alright, here's your dose of geek humor for the day! Let's delve into Laravel's `assertFragmentIsNot`, shall we?

Imagine you're hosting a virtual tea party with all your HTML friends (tags), and you've invited them to gather 'round the anchor link (#). Now, the last thing you want is an uninvited guest crashing your party! That's where our beloved `assertFragmentIsNot` comes into play.

```php
$browser->assertFragmentIsNot('anchor');
```

In simpler terms, this line of code is like putting up a bouncer for your webpage. It checks if the current hash fragment (the uninvited guest) doesn't match the one you specified ('anchor'). If the wrong link shows up at your virtual doorstep, this function will call out and throw an error, ensuring that only your invited HTML friends get to party! 🎊🎉

Now, if you find yourself in a situation where you do want to check for a specific anchor link, Laravel's got you covered with the `assertFragment` function. It works like a guest list checker, making sure that the uninvited guests are kept at bay and your tea party stays classy! 🍵🤐

Hope this little tutorial brought a smile to your face while also helping you understand Laravel's functionalities better. Happy coding, and may all your webpages be tea-party-approved! 🎉🎊🍰

 Ahoy there, coding cowboy! Let's dive into a little chocolate chip cookie detective work – Laravel style! 🍪🕵️‍♂️

You know those encrypted cookies you've been stashing away like a squirrel hoarding acorns? We're about to make sure they're not missing in action! Here's how:

```php
$browser->assertHasCookie($name);
```

This right here is the cookie-dusting tool you need. Just give it the name of your little friend, and it will check if it's mingling with all the other cookies in the jar (your user's session). If that crafty rascal has gone AWOL, this function will let out a mighty roar loud enough for the whole server to hear.

So go ahead, sleuth around, and make sure your cookies are always accounted for! 🕵️‍♂️🍪

 Ahoy there, Captain Cookie! Sailors of the digital realm, listen up! If you've found yourself in a pickle trying to verify if your humble ship (website) is carrying a specific, unencrypted cookie (let's call it "Cap'n Crumbles"), fret not! Laravel has crafted a trusty pirate tool just for this nautical endeavor.

Wield the mighty `assertHasPlainCookie()` like a cutlass! Here's how to use it:

```php
$browser->assertHasPlainCookie($name);
```

Imagine if Captain Crumbles was your loyal parrot, and you wanted to confirm he's safely perched on your shoulder (your website)! This function is the sextant you need to avoid shipwrecking into a cookie-less ocean.

If, for some unlucky reason, Cap'n Crumbles has flown the coop (gone missing), Laravel will raise an alarm with a friendly reminder that your website lacks the specified cookie. You can then set sail to bake more Cap'n Crumbles and serve them up to your loyal visitors. Yarr! Happy baking, mateys! 🍪☠️🌊

 Ahoy there, code pirates! Sail the seas of cookies with us as we delve into the swashbuckling world of Laravel's `assertCookieMissing()`.

Yarr, this gem of a function is here to ensure that your precious encrypted cookie isn't lurking around like a sneaky barnacle on your ship.

To get started, grab your favorite parrot and fire up those keels! Here's how ye'll use `assertCookieMissing()`:

```php
$browser->assertCookieMissing($name);
```

So if ye be looking for a way to make sure your treasure map cookie ain't been planted by scurvy knaves, this be the function for you!

 #### assertCookiesAin'tGotNoAlibi, Mate!

Get ready to play detective with this Laravel gem! Investigate your website like a modern-day Sherlock Holmes and ensure that the suspect cookie you've named `$name` isn't hanging around uninvited. Here's how to do it:

```php
$browser->assertCookiesAin'tGotNoAlibiMate($name);
```

In this exciting game of "Who Cooked My Cookie?", Laravel will check if the unencrypted cookie with the specified name doesn't exist in the cookie jar. If it does, prepare for a shocking twist, because your uninvited guest is still lurking!

 Ahoy there! Sailors of the digital seas! Meet `assertCookieValue`, your new favorite sailor's mate on this Laravel ship!

This here function will help you ensure that a hidden treasure (aka encrypted cookie) in your browser's hold has a specific value:

```php
$browser->assertCookieValue($name, $value);
```

If Captain Cookies (your browser) is found to be harboring a different pirate loot than what you expect, this mate will hoist the distress flag! Just like a good mate should. Now, isn't that swashbucklingly awesome? Sail safe, mates! 🏴‍☠️ 🎉

 Ahoy there, code wranglers! If you're in need of ensuring your unencrypted cookie is as faithful to its intended value as a golden retriever is to fetching its favorite ball, then look no further!

Enter the stage: `assertPlainCookieValue`, the trusty ally that'll help you keep your digital cookies crisp and accurate.

Here's how it works:

```php
$browser->assertPlainCookieValue($name, $value);
```

In this sweet symphony of PHP, replace `$name` with the name of your scrumptious cookie (e.g., 'cookieName'). As for `$value`, that's where you specify the value your heart desires (e.g., 'the secret ingredient to the perfect chocolate chip recipe').

So, if you're tired of feeling like the cookie monster searching for his elusive missing treats, give this fine function a whirl—it'll make sure your cookies never go stale on you!

 Alright, let's dive into the hilariously profound world of Laravel testing! In this section, we're going to talk about `assertSee`. It's like being a psychic detective on a web page, but with code! 🕵️‍♂️🔮

So, if you've got a gut feeling (or better yet, cold hard evidence) that some specific text is lurking around your web page, `assertSee` is here to help. Just whip up a spell (er... function), and cast it on the text in question:

```php
$browser->assertSee($text);
```

This magical incantation will ensure that the text you specified is, without a shadow of a doubt, present on the page. If it isn't, well then, your suspicions are confirmed — there's definitely something fishy going on over there! 🐠🕵️‍♂️

And just in case you're expecting an unexpected guest (or... text), Laravel's also got a nifty little counterpart for when you want to make sure the text is not present:

<a name="assert-dont-see"></a>

```php
$browser->assertDontSee($text);
```

Now, if you thought that was all there was to it, prepare to be amazed (or amused)! This function doesn't just take plain old text, but also CSS selectors and XPath expressions. It's like the Laravel version of Sherlock Holmes with a side of Dr. Strange! 🕵️‍♂️🧙‍♂️

So, go ahead and use your powers for good (and for testing web pages), and remember: with great `assertSee` comes great responsibility! 💪🌈🎩

 Ahoy there, coding seafarers! Let's set sail for a fun voyage into Laravel's assertDontSee function, shall we?

Fasten your life jackets and grab your monocles (it's a pirate thing), because this function is about to ensure that the text you specify ain't dancing a jig on your web page!

```php
$browser->assertDontSee($text);
```

Translated into buccaneer-ese: "Avast, matey! Make sure this here $text isn't hogging the plank and causing trouble!"

Now remember, if you see the text in question parroting around or walking the plank, assertDontSee will raise an alarm, so you can set your compass straight without worrying about mutinous monkeys!

Happy coding, mateys! May your code be swift and your test results fair wind!

 Alrighty, let's dive into a Laravel-icious exploration of `assertSeeIn`. Imagine you're hosting a secret garden party, and you want to ensure your guests are mingling in the right spot. That's where our digital butler, the $browser, comes in!

```php
$browser->assertSeeIn($selector, $text);
```

In this scenario, `$selector` is the velvet rope-lined area you want to check (think: dance floor, punch bowl, or that mysterious tent). And `$text`? Well, that's your guest of honor's name or the secret recipe for the homemade sangria. So if you want to make sure the right folks are grooving where they should, or that the punch isn't accidentally labeled as the sangria, this is your go-to command!

Just like a well-rehearsed security guard checking IDs at the door, `assertSeeIn` will keep an eye out for the specified text within your chosen area (selector). It'll let you know if everything's kosher or if it's time to call in backup and find that missing ingredient! 🍷✨

 Alright, let's get this party started! In the world of Laravel, we've got a tool that's perfect for those moments when you just know something's missing, but can't quite put your finger on it. It's called `assertDontSeeIn`, and it's here to save the day (or at least your code)!

Imagine you're hosting a grand feast, but you've mysteriously run out of guacamole. You know it should be there, but it's nowhere to be found. That's where `assertDontSeeIn` comes in - it's like having your own personal Avenger for coding disasters!

Here's how you summon this coding superhero:

```php
$browser->assertDontSeeIn($selector, $text);
```

Just replace `$selector` with the HTML element you're investigating (e.g., a div, span, or even your secret stash of empanadas), and `$text` with what you're certain is nowhere to be found (the missing guacamole).

With `assertDontSeeIn`, you can rest easy knowing that Laravel will double-check the element for you. If it doesn't find your missing item, it'll throw a friendly exception, giving you all the info you need to track down the culprit and reclaim your guacamole (er, fix your code)!

So next time you're puzzling over an empty plate in your HTML buffet, remember `assertDontSeeIn`. It's like having a personal butler who double-checks the kitchen before bringing you your meal. Happy coding, and may all your guacamoles forever be accounted for! 🥑🎉

 #### assertSeeAnythingIn (AKA "Spot the Difference")

Gather 'round, coding cowpokes! If you're looking to catch a sneaky snippet of text lurking within your HTML elements like a digital barn dance bandit, this here function's for you!

```php
$browser->assertSeeAnythingIn($selector);
```

Just throw in your selector like you'd toss a lasso to a coyote—and let the fun ensue! This cowboy-friendly command ensures that the Wild West of your webpage won't hide any wanted text from ya, keeping the peace (or errors) at bay. Yee-haw! 🤠🌵🎸🐴

 Alrighty then, let's dive into the world of Laravel testing with a splash of humor! Today's star is the `assertSeeNothingIn` function. Imagine you're at a party and you don't want to see your least favorite dance move or that one person who insists on playing air guitar. You can't just disappear, right? Well, in Laravel, your code doesn't have to!

So, when you want to ensure that there's absolutely no text matching a certain selector (think of it as a dance move in the HTML disco), you can simply call:

```php
$browser->assertSeeNothingIn($selector);
```

Just replace `$selector` with the HTML element or class you wish to scrutinize, and voila! Your code will do the dancing (or rather, checking) for you. Happy testing! 🎉💃🏼🕺🏼

 Alrighty then! Let's dive into the magical world of Laravel's assertion wizardry with the enchanting `assertCount` spell. This ain't your grandma's basic count function, oh no! It's a badge of honor for Laravel developers who know their stuff.

Here's how you cast this spell:

```php
$browser->assertCount($selector, $count);
```

So what's `assertCount` all about? Well, imagine you've summoned a horde of HTML elements with a specific selector (think "find-by-CSS class or ID"), and you want to make sure that the correct number of those little digital critters have appeared on your webpage. That's where `assertCount` comes in handy!

Just tell it which selector you're interested in, and how many times you expect to see them. If they don't match up, watch out—your test will fail faster than a rookie developer trying to write clean code! 🤪💣

 Ahoy there, code wranglers! 🤠 Let's dive into the mystical world of Laravel testing, shall we? Today, we're going to talk about a function that'll make your browser dance like a marionette on strings: `assertScript`!

Now, imagine you've got a finicky JavaScript expression that just won't behave. Fret not, because this function is here to tame the wild beast and ensure it dances in line with your expectations! 🐯

```php
$browser->assertScript('window.isLoaded')
    ->assertScript('document.readyState', 'complete');
```

In plain English, this means:

1. Check if `window.isLoaded` evaluates to true. If not, prepare for a good chuckle as your browser gives you the "uh-uh, not yet" face! 😞
2. Make sure `document.readyState` is set to 'complete'. If it's still in the process of cooking up like a soufflé (read: loading), you'll get a friendly reminder to wait for your document to stop dancing and take its seat! 🕺️

And there you have it, folks! With `assertScript`, you can make your browser obey like a well-trained seagull! 🐦 Keep on testing, and happy coding! 🚀💻🍻

 Alright, buckle up, coding cowboys! Here's a chuckle-inducing dive into Laravel's `assertSourceHas`. Imagine you're on an episode of 'CSI: WebPage', and you need to ensure that some sneaky script or CSS magic is actually present on your webpage. Well, pull out those digital magnifying glasses because `assertSourceHas` is here to help!

```php
$browser->assertSourceHas($code);
```

This magical line of code is the digital equivalent of shouting "Freeze! Put that HTML/CSS/JavaScript up against the screen!" It'll make sure that whatever `$code` you're looking for isn't pulling a Houdini act and disappearing from your page. Just remember, when in doubt, let this assertion be your faithful sidekick in the quest for code integrity!

Oh, and if you ever find yourself in need of proving that something is *absolutely not* on the page, you can hop over to its cousin `assertSourceMissing`. It's like having a built-in lie detector that alerts you when someone tries to pull a fast one with your code! 🕵️‍♂️

Keep coding and chuckling, web devs! 🚀🤪

 Oh, you're in for a treat! Let's dive into the world of Laravel, where we're going to make sure your source code doesn't crash the dancefloor. You see, just like DJ Khaled doesn't want unsolicited remixes ruining his beats, you don't want unwanted code messing up your page.

So here's how you can be the bouncer of your website:

```php
$browser->assertSourceMissing($code);
```

In this case, `$code` is the sneaky piece of source you don't want to see on your site. Imagine it as that one guest who just won't leave even though they've overstayed their welcome – we're kicking them out! This function ensures that your page is as pristine as a Taylor Swift album cover, free from unwanted guests.

Now, you might be wondering: "What if I change my mind and want that code back on the page?" Well, in the spirit of good humor (and because we're nice people), just invite it back with `$browser->assertSee()` – we'll show you how to do that in another doc, don't worry! But for now, let's keep the dancefloor clean and enjoy the music! 🎶🎉

 #### The Link Whisperer! 🧞‍♂️

Call upon our mystical browser, the one who can see through HTML soup and webpage fluff, to verify if a certain magical link is present on the page:

```php
$browser->summonLinkWhisperer($linkText); 🎩✨
```

And, for when you want your magical link to disappear (because it's not supposed to be there), use this dark arts counterpart:

```php
$browser->banishLinkWhisperer($linkText); 🧹🕷️
```

Just remember, even the Link Whisperer can't find a link if it doesn't exist or if it's hidden behind an enchantment like `display: none`. So don't forget to cast your own spells on the CSS and HTML! 🧞‍♂️🔮🌍

 Ahoy there, coding pirates! Let's set sail on an exciting journey with Laravel's mighty `assertDontSeeLink` function, shall we? This handy dandy tool is perfect for ensuring your web pages are as shipshape as a scurvy dog's peg-leg.

In plain English (or swabbie talk), this function checks if the specified link isn't lurking around your page like a sea monster in murky waters. Here's how you can use it:

```php
$browser->assertDontSeeLink($linkText);
```

Imagine this scenario: You've built a treasure map website, but you're worried about X Marks the Spot leading to Davy Jones' locker instead of real gold. No worries, mate! Just point `$linkText` at your suspect link and our trusty `assertDontSeeLink` will make sure it doesn't lead to danger. If it does, well... you might want to take a detour for that one! ☠️🏴‍☠️

So there you have it, me hearties! With Laravel's `assertDontSeeLink`, keeping your pirate treasure map websites safe from perilous links has never been easier. Arr matey, happy coding! 🎉🍻

 Ahoy there! Setting sail on a journey through the vast seas of Laravel land? Buckle up, matey! Today we're diving into the mysterious depths of the `assertInputValue` function. Yarr!

Ready your treasure map and follow me closely, as we navigate the shores of testing in this here Laravel lore.

So you've got a form with a field that needs to be checked for a specific value? Well, let us introduce ye to `assertInputValue`. It's like a pirate parrot that can squawk out whether your input matches the desired treasure!

```php
$browser->assertInputValue($field, $value);
```

Just replace "`$field`" with the name or id of your input field and "`$value`" with the treasure you're hunting for. It's as easy as counting your gold doubloons and swabbing the deck!

Now if you find yourself in a predicament where you need to ensure that your input is NOT equal to something, fret not, me hearty! The `assertInputValueIsNot` function will set sail to those waters and bring back the truth. More on that later, but for now, hoist the Jolly Roger and let's conquer these tests together!

Arrrr, we hope this shanty helped you find your way through the Laravel sea of functions! Happy testing!

 Alrighty, let's get this party started! In the fascinating world of Laravel testing, we stumble upon a gem called `assertInputValueIsNot`. This little guy is here to ensure that your input field is as single as a pringle (nope, not in love) with a particular value.

So, how does it work? Simple! Just imagine you're playing a game of "What's in the box?" but instead of surprises, we're looking for the opposite – what ain't in the box!

Here's the magic incantation:

```php
$browser->assertInputValueIsNot($field, $value);
```

In this code, `$field` is your input field (think of it as a mystery box), and `$value` is what you're hoping to not find inside that box. So if you don't want your field to be filled with "kitten photos" or "chili recipes," just let this function know!

Now, keep in mind that while `assertInputValueIsNot` may bring a smile to your face, it's still a powerful tool for keeping your tests squeaky clean. Happy testing, and remember: if you assert something, be prepared to defend it! 🥊 🚀

 Alright, let's get this party started! In the world of Laravel testing, we sometimes need to ensure that certain checkboxes have been properly ticked - no pun intended. And for that, we've got a superhero in our toolkit: `assertChecked`!

Here's how you summon this mighty warrior:

```php
$browser->assertChecked($field);
```

Now, imagine yourself in a room filled with checkboxes. You're the checkbox detective and your mission is to find that one checkbox that's been sneakily checked amidst all the others. That's what `assertChecked` does for you, minus the trench coat and magnifying glass (but feel free to add them if it makes you feel fancy).

Remember, this function checks if the specified field is, in fact, checked. If it's not, well... we might need to have a word with that checkbox!

Now go forth and test your checkboxes with confidence, knowing that `assertChecked` has your back (and your boxes). Happy testing! 😎📝🎉🕵️‍♂️

 Oh, the joys of programming! Ever felt like your code needed a good old-fashioned smack in the face to make sure it's behaving itself? Well, meet `assertNotChecked`, your digital doorman at the gate of checkbox chaos.

Just picture this: you've got a checkbox that's gone rogue and decided to play hide and seek with its checked status. Instead of tearing out your hair or chasing after it with a net, simply call `$browser->assertNotChecked($field)`—a one-liner that'll slap some sense into that misbehaving checkbox!

Think of it as a digital version of those stern glares you give to your pet when they're misbehaving. In this case, the pet is a checkbox and the glare is a PHP function that checks if the box isn't checked (clever, huh?).

So next time you've got a stubborn checkbox on your hands, remember to keep it in line with `assertNotChecked`—because who needs a behavioral therapist when you've got Laravel? 😜

 Oh, the drama of the unresolved! The eternal question mark lingering over a humble checkbox in your Laravel app. But fear not, dear developer, for help is here! Enter `assertIndeterminate()`, the superhero that swoops in to save the day when you're unsure about your checkbox's state of undecidedness.

How does it work, you ask? Well, just point this function towards your pesky checkbox:

```php
$browser->assertIndeterminate($field);
```

This code is like saying to Laravel, "Hey there, app! This field right here? It's a checkbox and it's acting all 'I can't decide', so could you kindly confirm that for us?" And Laravel, being the good sport that it is, will do just that.

Now go forth and tame your unruly checkboxes with `assertIndeterminate()`, and may all your boxes forever be either checked or unchecked, but never in an ambiguous state! 😜

 Ahoy there, fearless Laravel coder! Today we're diving into the shimmering depths of a feature that will make your web applications sparkle with validation brilliance: `assertRadioSelected()`.

This is the function you want to grab when you've got a hankering for verifying that a specific radio button in your HTML form has been, in the immortal words of Captain Picard, "made ready."

To use it, simply summon its powers with this incantation:

```php
$browser->assertRadioSelected($field, $value);
```

Now, allow me to explain this little magic trick. Imagine you've got a form for your users to choose their favorite space-faring species—humans, Vulcans, or Klingons (and yes, we know there are no aliens on Earth, but bear with us). You want to make sure that when they hit submit, they've actually selected something.

`assertRadioSelected()` swoops in, checks if the chosen species matches the `$value`, and makes sure it's the one selected among all radio buttons with the same name (that's what she said... about the radio fields, not space-faring species). If everything checks out, your app will continue its journey through the stars. But if it finds that some intergalactic mix-up has occurred, `assertRadioSelected()` will throw an exception, giving you a chance to correct the error and save your users from the embarrassment of choosing Klingons when they meant Vulcans (or vice versa).

So there you have it! With `assertRadioSelected()`, you can boldly go where no web application has gone before—validating user input with ease, humor, and a touch of the final frontier. May your forms always be selected, and your users forever satisfied!

 #### Radio's Got the Blues (But We Ain't Selected)!

Ready to play radio detective? Here's your badge: `$browser->assertRadioNotSelected($field, $value);`

That's right! You're now a Laravel gumshoe on the case of the unselected radio field. Just drop this snippet into your code and let it handle the heavy lifting while you kick back with a cup of debugger's coffee.

But remember, partner, this isn't about catching crooks; it's all about verifying that a particular radio button ain't been tickled by our user. If the radio field in question (`$field`) and its value `($value)` are not in cahoots, then this function will raise an alarm, ensuring your application stays on the straight and narrow!

Now, who needs Sherlock Holmes when you've got Laravel's assertRadioNotSelected? Investigate, verify, and ensure your app's radio fields keep their cool – all without the need for a deerstalker hat. Happy coding! 🕵️‍♂️ 🚀

 Ahoy there, code pirates! Let's set sail through Laravel's enchanted seas and learn about the mysterious `assertSelected` function. This dashing function is akin to a treasure map that guides you to the gold (or selected value) in a dropdown shipwreck.

To use this swashbuckling tool, steer your browser with:
```php
$browser->assertSelected($field, $value);
```

Imagine this scenario: You've stumbled upon an ancient treasure chest (represented by a dropdown), and you're eager to discover which cursed gemstone (your chosen value) is hidden within. `assertSelected` will help you plunder the correct stone, ensuring that the treasure chest doesn't contain another Captain Blackbeard's doubloon instead!

Now, if you feel like rowing against the tide and checking for an unselected dropdown option, just cast anchor and navigate to the "assert-not-selected" section. Yarr!

 Ahoy there, coding sailors! Dive into the depths of Laravel testing with us as we explore the enigmatic `assertNotSelected` function.

This swashbuckling command is your faithful sidekick when you're certain that a particular dropdown shouldn't be harboring a specific value. Here's how ye might use it in yer battles against untidy user interfaces:

```php
$browser->assertNotSelected($field, $value);
```

Now, I know what you're thinking: "What if I want to check that all the options are selected or have options at all?" Well buckle up, matey! Laravel's got a function for that too, and we'll sail through it together in our next adventure. But for now, let's celebrate this fine victory with a hearty "Yarrrr!" for `assertNotSelected`!

 Ahoy there, Laravel coders! Let's embark on a jovial journey through the enchanting realm of assertions with our trusty sidekick `assertSelectHasOptions`.

Imagine you're at a fancy dinner party, and you need to ensure your favorite ice-cream flavors are available for dessert. Well, in our digital dinner party—the HTML form—`assertSelectHasOptions` is the perfect butler to help you out!

```php
$browser->assertSelectHasOptions($field, $values);
```

In this elegant dance of code, `$field` represents your beloved ice-cream flavor section, and `$values` is a suitcase full of scrumptious flavors you want to verify. So, when you call upon `assertSelectHasOptions`, it checks whether all those flavors are indeed present in the ice-cream selection!

Now, if by any unfortunate circumstance your favorite flavor isn't there, fear not! `assertSelectMissingOptions` is the other cheeky helper that will let you know who snuck a taste before you arrived. Just remember to check out its documentation for more information on how to use it.

So, have fun keeping your HTML forms in check with this delightful assertion duo. Happy coding! 🎉🍦🚀

 Alright, let's get this party started! In the vast world of Laravel, where code and comedy often go hand in hand (like a well-balanced sandwich), we find ourselves at the crossroads of assertion and selection - a place called `assertSelectMissingOptions`.

Now, what on earth is that you ask? Well, imagine this: You're hosting a super swanky dance floor party, and you've got a guest list for the DJ to play only specific tracks. But the DJ, in his infinite wisdom, decides to spin some tunes outside of your selection. You'd be furious, right? So, you'd want a way to ensure he only plays what you asked for - this is where `assertSelectMissingOptions` comes into play!

In Laravelese (our new made-up language), this magical function goes like this:

```php
$browser->assertSelectMissingOptions($field, $values);
```

Here, `$field` represents the dance floor, and `$values` are your carefully curated playlist. If, by some unfortunate turn of events, the DJ decides to spin a track that's not on your list, this function will raise an alarm - ensuring your party remains as you intended! 🥳🎉💃🕺️

 #### The One That Yells When You Forget an Option! 📣

Ever found yourself in a pickle, wondering if that dashing value of yours is actually available for selection on the swanky field you've got your eye on? Well, fear not, my dear friend! Introducing: `$browser->assertSelectHasOption($field, $value)` - the party-crasher of pickles everywhere. 🎉

This little gem ensures that your sparkling value is indeed a contender in the field's grand selection process. Just drop it into your code like a well-timed punchline at a comedy club, and watch as it saves you from countless headaches caused by missing options. 🤯

<a name="assert-select-missing-option"></a>
But what if the option is nowhere to be found? Oh, don't worry - this comedian doesn't just tell jokes; it also knows how to take the spotlight when something's amiss. It'll help you identify those pesky missing options with its `assertSelectMissingOption` function. Now that's what I call a true all-rounder! 🌟

 #### The "No-Selection Nonsense" (assertSelectMissingOption)

Are you tired of that one rebellious option in your HTML forms that just won't play ball? Well, don't worry, we've got your back with the Laravel "No-Selection Nonsense"! 🎉🤹‍♂️

Here's how to use it:

```php
$browser->assertSelectMissingOption($field, $value);
```

So if you ever find yourself scratching your head wondering where on earth that mischievous option went, give our No-Selection Nonsense a spin! 🕵️‍♂️🔍 It'll help keep your forms tidy and your sanity intact. Just remember to replace `$field` with the name or ID of your field, and `$value` with the value you're looking for. Happy no-selecting! 🎉💪🏻

 Ahoy there! Sailors of the Laravel seas, prepare to hoist the flag of assertion! 🏴‍☠️🌟

You've stumbled upon the mighty `assertValue` function, a swashbuckler among the PHP array functions. This pirate is here to ensure that the element, identified by the glorious selector you've provided (yes, ye olde CSS selectors work here), contains the treasure chest of a value you're after.

Here's the catchy command to call upon this assertive matey:

```php
$browser->assertValue($selector, $value);
```

Remember, ye scurvy dogs, it's not just about verifying any ol' value! This function will only sing a joyous shanty if the sought-after value matches the current one displayed on the web page. So if you're looking to make sure that "Captain Jack" isn't pretending to be "William Turner", this is the php pirate ye want aboard! 🏴‍☠️

Now, let's set sail for adventure with `assertValue` and keep our tests shipshape! Happy coding, me hearties! 🌊🐳

 Ahoy there, code sailors! Let's set sail on a fun journey through Laravel land, shall we? Today, we're diving into the mystical waters of `assertValueIsNot`, a magical function that ensures your web pages are as unpredictable as a jester's jokes!

Picture this: you've written some enchanting code to select an element on your webpage using a selector, much like a pirate deciphering treasure maps. But what if you want to make sure that this chosen element doesn't hold the value you least expect? Enter `assertValueIsNot`, your new best friend!

Here's how to summon this function:

```php
$browser->assertValueIsNot($selector, $value);
```

Just replace `$selector` with the key to unlocking that element, and `$value` with the surprise you don't want to find there. Imagine if your browser could tell jokes as well – it would say something like: "Arr matey! I be expecting gold, not a llama in yer booty!" And if the element doesn't contain the unexpected value, it'd raise its glass and cheer, "Aye, that be a good one!"

So, don't let those sneaky web pages pull a fast one on you. With `assertValueIsNot`, you can make sure your code is as unpredictable as a jester's riddles, but in the best possible way!

 Ahoy there, code pirates! Steer your vessel towards this tantalizing Laravel method that goes by the name of `assertAttribute`. This seaworthy function is designed to ensure that Jack Sparrow's compass points true north (or whatever you want it to point to, but in our case, elements on a web page).

To deploy `assertAttribute`, hoist the sails of your PHP ship and unsheath your code saber:

```php
$browser->assertAttribute($selector, $attribute, $value);
```

Translation for landlubbers:

1. `$browser` - Your trusty sea vessel (or web browser, to be precise).
2. `$selector` - The treasure map coordinates that pinpoint the element you're after.
3. `$attribute` - The pirate's chest key that unlocks the value you're seeking.
4. `$value` - The buried gold you're hunting for, to make sure it matches what's in the chest.

Now, set sail and navigate through the seas of web pages with this swashbuckling function! Keep a firm grip on your code saber, as this method will ensure that the element matching your treasure map coordinates has the expected value within the attribute you specify. Arrr matey!

 Ahoy there, code pirates! Steer your keyboard towards Laravel's swashbuckling assertion feature - the `assertAttributeMissing`!

Ever found yourself in a pickle trying to verify that an element on your web page has no trace of a specific attribute? Well, matey, you've struck gold with this one! Here's how ye use it:

```php
$browser->assertAttributeMissing($selector, $attribute);
```

Just replace `$selector` with the CSS selector for your target element and `$attribute` with... well, the attribute you wish to ensure is absent. And there you have it! This command will check if the specified attribute ain't hanging around your element like a parrot on a shoulder.

Now, if only we could use this magic to verify that no one's left a talking cat in our codebase... arrrrgh! But let's not get too carried away – back to business! Enjoy sailing these waters of Laravel assertions, and may your tests be swashbucklingly successful!

 Ahoy there, code wranglers! Sail with me as we delve into the mystifying waters of Laravel's assertAttributeContains—the seafaring navigator you never knew you needed but will quickly realize you can't live without!

Fasten your lifejackets and prepare to set sail:

```php
$browser->assertAttributeContains($selector, $attribute, $value);
```

In plain English, this command is shouting at the browser (in a polite manner, of course) that it better find an element matching the provided `$selector`, and check if that element's specified `$attribute` contains the `$value` like a well-stuffed pirate's parrot!

Now, let's say you need to ensure that your treasure map (HTML DOM) includes a specific island (element), with the right compass direction (attribute), and it points towards Captain Goldbeard's hut (value). In such a case, this command becomes your trusty compass:

```php
$browser->assertAttributeContains('#treasure-island', 'direction', 'Northwest');
```

Happy coding, swashbucklers! May you find all the buried treasure and avoid scurvy rats (errors) along your Laravel journey. 🏴‍☠️🌴🐢

 Ahoy there, code wrangler! Fancy a jolly journey into the heart of Laravel's assertive arsenal? Buckle up as we delve into the enchanting world of `assertAttributeDoesntContain`!

Picture this: You're on a quest to ensure your web app's user interface is as pristine and error-free as an Elizabethan sonnet. But how do you guarantee that your HTML doesn't contain a particular attribute value like the infamous "Misspelled Sans-serif"? Fear not, intrepid explorer! The `assertAttributeDoesntContain` is here to save the day!

```php
$browser->assertAttributeDoesntContain($selector, $attribute, $value);
```

Just remember that it's more like a snooty butler checking for any unwelcome guests in your fine web manor. You provide the selector (the snazzy duds he's searching for), attribute (the peculiar detail to examine), and value (the nosy neighbor causing all the ruckus).

So, keep your code squeaky clean, and may your interfaces be as elegant and sophisticated as a 17th-century ballroom dance! And remember: a well-dressed web page is a happy user! Happy coding, adventurer! 🎉🕺🏼💃🏼

 #### Unleash the Aria-tic Assertion! 🎵🕺️

Welcome, web warriors! It's time to flex your Laravel muscles and dive into the world of accessible assertions with our dance-tastic `assertAriaAttribute` function.

Ready for the beat? Just follow these simple steps:

1. Choose your selector, like a seasoned diva on stage:

```php
$selector = 'button'; 🎤 💃️
```

2. Whisper sweet nothings into the aria attribute's ear (you know, the one with the provided name):

```php
$attribute = 'label'; 🎵 🕺️
```

3. And finally, demand that it dances to your desired value:

```php
$value = 'Add'; 💃️ 🎉
```

Combine the three and watch the magic happen with this rhythmic routine:

```php
$browser->assertAriaAttribute($selector, $attribute, $value);
```

Now, if your markup is a snazzy `<button aria-label="Add"></button>`, you'll have no problem checking that "Add" is the one dancing with the `aria-label` attribute:

```php
$browser->assertAriaAttribute('button', 'label', 'Add') 💃️🎉🎵
```

Don't be shy, show off your A11y assertion skills! 💪💃️🎉

 Oh, the dance of digital elements! You know, it's a bit like trying to find Waldo in a crowd of stripes and spectacles, but with data attributes instead. Let's introduce you to your new best friend, `assertDataAttribute`. This function is akin to shouting "Hey, you over there with the specific attribute value!" across the web page.

Here's the rundown:
```php
$browser->assertDataAttribute($selector, $attribute, $value);
```
Imagine having a dinner party, and you need to make sure each guest is sitting at the right table. That's essentially what `assertDataAttribute` does for your web elements!

Take our friend `<tr id="row-1" data-content="attendees">`, for instance. If you want to ensure that row one's content indeed involves attendees, you can assert like so:
```php
$browser->assertDataAttribute('#row-1', 'content', 'attendees');
```
And just like that, your code has the superpower to check data attributes and make sure everything is in order. Now, go forth and assert with confidence! 🚀🤖💻🍾🎉

 Ahoy there, code pirates! Steer clear of those treacherous `invisible` waters with our trusty Laravel Lifeboat, the `assertVisible()` function! ☠️🚣‍♂️

Just point it at the HTML booty you seek, and it'll ensure that pirate ship of yours doesn't sail off course. Here be the syntax:

```php
$browser->assertVisible($selector);
```

Now don't go walkin' the plank without knowing this: `$selector` is the CSS selector for the element you want to keep an eye on. It's like saying "Arr matey, show me that button with the class 'my-button'"! 📜✨

So hoist the Jolly Roger and set sail for clear skies, knowing your webpage elements will never go overboard without your knowledge again! 🌴🌊 🏴‍☠️

 Ahoy there, code pirate! Sail into port with us for a lively lesson on Laravel's `assertPresent`. It's like swabbing the deck, but instead of looking for sea monsters, we're keeping an eye out for HTML elements!

Ready to set sail? Steer your ship towards that CSS selector you've got stowed away. Once you've found it, you can use `$browser->assertPresent($selector)` to make sure your vessel is anchored near a valid element. This command'll hoist the flag and declare victory if it finds your element in the HTML source.

But wait! You might be thinking, "What if I don't want to deal with those pesky elements?" Well, buckle up, matey! We've got another command for that: `assertNotPresent`. This one will let you know if an unwanted element is lurking about. Sailing blind ain't no fun, and neither is dealing with undesirable HTML elements.

So grab your telescope and keep a sharp eye out, because it's all hands on deck to conquer the seas of Laravel testing!

 Ahoy there, code wranglers! Let's sail into Laravel's enchanting world of assertions, shall we? Today, we're going to talk about a magical spell called `assertNotPresent`. This isn't your run-of-the-mill "hey, is that present?" spell. No sirree! It's more like a "hey, is that *not* here?" incantation.

So, how does it work? Simple as pie (or as simple as Laravel code can be, anyway). You see, you give ol' `assertNotPresent` a selector – that's just a fancy name for a treasure map to your HTML element of interest. Then, our trusty spellcaster checks if said element is nowhere to be found on the page.

Here's a bit of code that demonstrates its mystical prowess:

```php
$browser->assertNotPresent($selector);
```

Now, if you ever find yourself wondering whether your favorite dancing hamster has disappeared from the page, `assertNotPresent` is the go-to charm. It's like a lighthouse for lost elements. Happy coding, pirates! 🦞🌍☀️

 Ahoy there, Laravel enthusiasts! Let's dive into a jolly good adventure with `assertMissing` – the swashbuckling function that ensures your website is as mysterious as Captain Hook's missing hand!

Say you've got a treasure map (selector) and you're on the lookout for X Marks the Spot (an element). But, alas, the spot be empty! How do we prove it, ye say? Simple, with this magical incantation:

```php
$browser->assertMissing($selector);
```

Just like Sherlock Holmes deducing a crime from a single strand of hair, `assertMissing` uses its keen eye to check if the element matching your selector is nowhere to be found on the page. It's as easy as pie (or treacle tart, if you're in Yorkshire)!

So hoist the Jolly Roger and set sail for a thrilling voyage with Laravel's `assertMissing` – ensuring your web treasure hunt never leaves you high and dry! Yarr-ghastly fun! 🤝🏴‍☠️

 Alright, let's dive into the world of Laravel testing! When you need to check if a certain input with a swanky name is indeed present on your form, fear not - our friend `assertInputPresent()` has got you covered!

Just like calling out for that missing party guest, you can ensure your form isn't playing hide-and-seek with you by using this snazzy function:

```php
$browser->assertInputPresent($name);
```

Now go forth and test with confidence, knowing that you've got a reliable posse in Laravel! 🤘

 #### It's a Laravel Party, and the Input Refuses to Dance!

Oh, you've got an input with a name that's just not showing up at your Laravel soiree? No worries, we've got you covered! Just like a good bouncer making sure no uninvited guests crash the party, our function will do the same for your inputs.

```php
$browser->assertInputMissing($name); // Because who invited that wallflower to the dance floor?
```

Now, go on and enjoy your Laravel event knowing unwanted inputs won't gatecrash! 🥳💃🕺🍾✨

 Ahoy there, coding buccaneers! Let's set sail into the sea of Laravel funness with a command as dashing as Captain Stubbington himself - `$browser->assertDialogOpened($message)`.

Imagine you're at a swashbuckling soiree and suddenly, a ghostly pirate pops up with a riddle. You wouldn't just stand there like a landlubber, would ya? You'd demand that ghost pirate to reveal his hidden treasure! That's what this function does, but instead of ghost pirates, it verifies if a JavaScript dialog with the given message has been opened.

Just remember to replace 'message' with the riddle your dialog is spouting. Now, don't be a sluggish sailor, get testing those dialogues, matey! Arrrr, good luck, and happy coding!

 Ahoy there, Laravel coders! Let's have a jolly time diving into the depths of our trusty assertEnabled function.

Ever found yourself in a pickle trying to ensure that your field is as active as a three-toed sloth on caffeine? Fear not, me hearty! The `assertEnabled($field)` function has got your back!

```php
$browser->assertEnabled($field);
```

Just like making sure the lights are on before jumping into a pool, you now can rest assured that your fields are all switched on and ready for some action. If not, watch out for the splash of disappointment! 💦😂😱

But hey, if by any twist of fate (or user error), it's disabled, feel free to give `assertDisabled` a spin instead! 😉

Now that we've had our giggle, let's carry on with some swashbuckling coding and conquer the digital seas together! 🏴‍☠️🎉

 Unleash your inner detective, my friend! It's time to solve the case of the grumpy input field. Here's how you can do it with our very own Laravel's Assertive Detective (AD) tool:

```php
$browser->callInSherlockHolmesVoice("Elementary, my dear user! Let's ensure that field #{$field} is not accepting any more secrets."), $browser->assertDisabled($field);
```

Remember, this is like telling your pet cat to stay off the keyboard - you don't want it clicking around when you're trying to solve a mystery! Just replace `$field` with the ID of your input field that's acting up.

And if you ever need help proving that a button is enabled instead (because why not add some twist to this detective story?), here's how:

<a name="assert-button-enabled"></a>

```php
$browser->callInColumboVoice("Just one more thing, ma'am. Let me verify that button #{$button} is ready for action."), $browser->assertEnabled($button);
```

Now, get out there and solve those form mysteries like a boss!

 Ahoy there, intrepid developer! Buckle up as we delve into the whimsical world of Laravel testing with our trusty friend `assertButtonEnabled()`.

Remember that time when you accidentally clicked on a disabled button during your lunch break, and the universe seemed to shatter around you? Well, fear not any more! This here function will help you ensure that the button you've chosen won't leave you hanging like an awkward dance move. Just point it towards your button of choice:

```php
$browser->assertButtonEnabled($button);
```

It's like having a guardian angel watching over your buttons, ensuring they're always ready to dance when you call upon them! 🕺️🎉

Now, if you find yourself in a pickle where the button should be disabled instead, fear not! We have another function just for that - `assertButtonDisabled()`. But that's a tale for another time. For now, let your buttons dance with joy knowing they can always count on our friendly assertion functions to keep them in line! 💃️🕺️🚀

 Ahoy there, coding pirate! Ready to hoist the sail of testing in Laravel land? Let's cast anchor at `assertButtonDisabled`, a swashbuckling function that ensures your buttons are as obedient as a parrot on your shoulder.

```php
$browser->assertButtonDisabled($button);
```

In plain English, this be telling ol' browser to check if the button ye provided is in a locked state. No need to worry about those unruly users trying to click a button that ain't ready yet! Let's keep 'em at bay and maintain order on the high seas of the web.

Arrr, you're now one step closer to navigating these choppy waters with ease and confidence. Keep the code piracy going by exploring more functions in Laravel's vast treasure chest! Yo ho, yarr mates! 🏴‍☠️🚀

 Ahoy there, code-sailing companions! If you've ever found yourself in a pickle trying to ensure that your chosen field is basking in the warm glow of focus, then fear not! Laravel's got your back with the mighty `assertFocused()` function.

```php
$browser->assertFocused($field);
```

Now, if you're wondering what this cryptic line does, let me break it down for ya like a pirate breaking open a treasure chest. This function is here to confirm that the specified field is the one that has the spotlight shining on it. It's perfect for when you want to make sure your form's attention-seeking kid isn't getting ignored by the browser, or if you just want to check if your cat is really typing in that textbox instead of napping.

So hoist the sails, set a course for code adventure, and let `assertFocused()` be your faithful compass on the sea of web development! Arr matey, happy coding! ☠️🌺🚀

 Alright, let's dive into the world of Laravel testing, shall we? Where tests are as delicious as a freshly baked croissant (or maybe not quite that tasty, but still important!)

First up, we have the dashingly named `assertNotFocused` function. This suave gentleman is here to make sure your fields aren't stealing the spotlight like those over-eager reality TV contestants.

To use it, simply whip out a snazzy line of code that looks something like this:

```php
$browser->assertNotFocused($field);
```

In other words, you're telling Laravel to double-check if the specified field isn't hogging the focus like a sneaky little diva at a Hollywood party. If it is, well, your tests will let you know with a stern warning that's just as entertaining as a tabloid headline!

So go ahead, test away, and remember: in the world of Laravel, there's no such thing as too many assertions (unless, of course, they start clogging up your code like an overstuffed burrito)!

 Ah, the delightful dance of ensuring your user has donned their digital dance shoes and danced their way through the authentication process! Here's how you can put on your own sequined tuxedo and become a disco inspector:

```php
$browser->putOnASequinedTuxedoAndCheckIfUserIsDancingThroughTheAuthenticationProcess();
```

Don't worry, it won't actually make your PHP code sparkle (though we can all dream, right?). But it will assert that the user is authenticated, and who doesn't love a good dance-off against the digital security system?

Now, if you're looking to check if the user is just hanging around in the lobby without a ticket to the party, you might want to look into this little gem:

<a name="assertGuest"></a>
```php
$browser->checkIfUserIsHangingAroundInTheLobbyWearingJustABowTie();
```

This will ensure that your user is not authenticated and is patiently waiting for their drink tickets to arrive. So, let's get our party started with some good old-fashioned Laravel authentication checks!

 Oh, behold the majesty of `assertGuest()`, your trusty sidekick in the battle against unwanted login hijinks! This humble function ensures that the user, much like Forrest Gump's box of chocolates, is most certainly NOT authenticated.

```php
$browser->assertGuest(); // Yep, that's our hero right there!
```

So next time you find yourself knee-deep in a sea of unauthorized users, remember your trusty ally `assertGuest()`. It's like having Arnold Schwarzenegger's "I'll be back" line to warn you when an unwanted guest decides to gatecrash your website party! 🤹‍♂️🎉

 Ah, the glorious `assertAuthenticatedAs`! The magical incantation every Laravel wizard should have up their virtual sleeves. If you find yourself in a situation where you need to ensure that your user is as legit as a three-toed sloth at a foot convention, this spell's for you!

Just summon it with the following enchantment:

```php
$browser->assertAuthenticatedAs($user);
```

No need to wave your wand around or mutter strange incantations. Just drop that in your code, and rest assured (pun intended) that your user's credentials have been scrutinized with Laravel's strict security checks.

Now, remember, if you're working on the Vue side of things:

<a name="assert-vue"></a>
Don't fret, my friend! Laravel Passport can lend a helping hand. Just make sure to have your passport well in place, and you can still cast this spell using the same incantation:

```php
$browser->assertAuthenticatedAs($user);
```

Happy coding, my dear Laravel alchemists! May your users always be as authentic as a kangaroo's pocket.

 Alrighty, let's dive into the world of Laravel Dusk, where testing becomes as enjoyable as a bowl of popcorn and a marathon of cat videos! 🍿🐱

Ever wondered if that dapper Vue component you coded is living up to its potential? Fret not, for Dusk has got your back! Let's say you've crafted a suave profile component that looks like this:

```html
<!-- HTML... -->

<profile dusk="profile-component">
  <!-- Profile magic happens here -->
</profile>

<!-- Component Definition... -->

Vue.component('profile', {
    // Template and data goodness
});
```

Our profile component is a smooth talker, displaying nothing but the name of our beloved "Taylor". Now, if you're feeling curious about whether Taylor's name is being correctly displayed in your app, fear not! You can assert like a boss:

```php tab="Pest"
test('vue', function () {
    $this->browse(function (Browser $browser) {
        $browser->visit('/')
            ->assertVue('user.name', 'Taylor', '@profile-component');
    });
});
```

```php tab="PHPUnit"
/**
 * A hilariously simple Vue test example.
 */
public function test_vue(): void
{
    $this->browse(function (Browser $browser) {
        $browser->visit('/')
            ->assertVue('user.name', 'Taylor', '@profile-component');
    });
}
```

And if, God forbid, Taylor decides to change his name to "Larry", Dusk will let you know with a stern warning that's as sharp as a well-aimed dad joke! 📣🎉

 #### The Great "Nah, Not That!" Vue Verification Function! 🎉🎈

Get ready to play detective with your favorite Vue components! Here's how to use the **assertVueIsNot** function - a superhero for those who like to keep things un-matchy-matchy. 🦸‍♂️🚀

```php
$browser->shoutOut("I got my detective specs on!"); // Optional, but recommended for dramatic effect!
$browser->assertVueIsNot($property, $value, $componentSelector = null);
```

So what's all this about? You're ensuring that a specific Vue component's data property **definitely does NOT** correspond to the value you've given it. Because sometimes, just like in real detective work, knowing what someone isn't doing can be just as important! 🕵️‍♂️🔎

In this function, `$property` is the data property you want to verify (be a good sleuth and choose wisely!), `$value` is the value that your property **definitely should not** match, and `$componentSelector` is the Vue component you're snooping around in - though if you leave it out, our detective will sniff it out on its own! 🕵️‍♂️🦮✨

Happy detecting! And remember, sometimes the best way to find a clue is by eliminating possibilities. 🕵️‍♂️🔎🔑

 Alright, let's get this party started! 🎉

#### assertVueContains: The Laravel Way of Saying "I Gotcha!"

Ever been in a situation where you need to verify that your Vue component's data property is an array and contains a specific value? Well, strap on your coding cowboy boots because we've got just the function for you!

```php
$browser->assertVueContains($property, $value, $componentSelector = null);
```

This magical function is like the digital version of a Sherlock Holmes: it'll help you find out whether your Vue component data property (the suspect) contains the given value (the evidence). And if you don't provide a specific component selector? No worries, mate! It'll search the entire wild west of your components until it finds the one that fits the description. 🔍

So go ahead and use this function to catch those pesky data property escapades in your Laravel applications! Remember, with great power comes great responsibility. But hey, who said coding had to be boring? 🚀

 Alright, let's dive into the whimsical world of Laravel Vue testing! Here's a chuckle-worthy take on the `assertVueDoesntContain` function. 🎶🤓

#### assertVueDoesntContain: The Party Pooper of Vue Components 🎉

Get ready to join the dance floor of Vue components, but don't forget to bring your bouncer hat! `assertVueDoesntContain` is here to make sure your party doesn't get too wild.

```php
$browser->assertVueDoesntContain($property, $value, $componentSelector = null);
```

This function plays the role of a fun-killer, ensuring that a particular Vue component data property is an array and doesn't contain the unwanted guest (the `$value`) you've identified. 🎭🎩

Just like when your crazy uncle shows up at your wedding, you want to keep him out of your important Vue data properties! 🎉🤪

Remember, a happy component is a party-free component! 🥳💃🏽🕺🏼

 Ah, the delightful dance of Dusk Pages! You know, those magical test assistants that turn a chaotic symphony of sequential actions into a beautifully choreographed ballet. Imagine writing tests like a maestro conducting an orchestra, but with less tuxedos and more automated awesomeness.

Now, let's say you have tests that make your codebase look like it's auditioning for a role in a circus. With Dusk Pages, you can define clear and concise actions that can be executed on any page with just one method call. It's like having your own personal test assistant, who, instead of fetching coffee, automates complex tasks for you!

But wait, there's more! Dusk Pages also let you create handy aliases for common selectors within your application or a specific page. Think of it as having a thesaurus for your tests—instead of repeating the same selector over and over, you can just use a catchy alias instead. It's like turning "button" into "click-me-now".

<a name="generating-pages"></a>
And how do you whip up these test helpers? Well, my dear friend, it's as easy as pie! Just follow the instructions under "# Generating Pages" and voila—your tests will be dancing like Fred Astaire (or at least moving in a more organized manner)!

 Alright, let's get this party started! 🎉 If you're looking to create a new page object in Laravel Dusk, it's as easy as calling the `dusk:page` Artisan command. This magical incantation will sprinkle your application's `tests/Browser/Pages` directory with freshly baked page objects.

```shell
php artisan dusk:page Login 🔓 (Yes, we named it after everyone's favorite activity)
```

Now, where's the fun in that if we don't give you a little insight into configuring these pages? 😎 Here's your chance to play mad scientist and fine-tune your page objects.

<a name="configuring-pages"></a>

Welcome, dear experimenter! Here is where the real magic happens. You can customize your newly created page object with the help of PHP classes. Feel free to tweak its DNA according to your testing needs. Add some personality, make it dance, or even give it a catchy nickname—it's all up to you!

Just don't forget to keep your test suite clean and organized, like a well-stocked pantry for those late-night coding sessions. 🥪🍕☕️

 ### Setting Up Your Pages for Fun and Profit! 🎉💼

By default, our pages come equipped with a trio of superpowers: `url`, `assert`, and the enigmatic `elements`. Let's dive into the first two, while saving the mysterious `elements` for a later, more intimate conversation. 🕵️‍♂️

<a name="the-charming-url-method"></a>

#### The Charming URL Method 🏡

Ever wondered how Laravel knows which page to serve when you enter a URL? It's all thanks to this charming chap - the `url` method. This method defines the path that will trigger your page, much like inviting someone over for a delightful dinner party.

<a name="the-assertive-assert-method"></a>

#### The Assertive Assert Method 💼

Now imagine you've invited someone to your dinner party, but when they arrive, there's no caviar or champagne! That's where our assertive friend, the `assert` method, steps in. This method checks if all elements on your page are as they should be - just like checking if your guests brought a thoughtful gift. If something's amiss, it will let you know so you can adjust accordingly (and maybe send them home early). 🥂🎉

 #### The "url" Method, Your Navigation Companion!

Ahoy there, Laravel adventurer! If you're sailing the seas of web development with us, then prepare to meet your new best friend: The `url` method. This nautical navigator will help steer you towards the digital shores of a page's URL in no time!

```php
/**
 * Set sail for the URL of the page!
 */
public function url(): string
{
    return '/login'; // Grab your compass, we're heading to the login port!
}
```

Next stop: The Assert Method - don't miss it! 😉

 #### The `assert` Party Animal

Meet your new dance partner, the `assert` method! This lively little fellow is here to ensure that your browser is living its best life on the specified page. Contrary to popular belief, this party animal doesn't need a playlist or even a disco ball - but if you want to throw in some assertions, who are we to stop you? Rest assured (pun intended), these dance moves will kick off automatically when your browser does the conga to the page:

```php
/**
 * Assert that the browser is on the hottest party town.
 */
public function assert(Browser $browser): void
{
    $browser->assertPathIs($this->url());
}
```

<a name="navigating-to-pages"></a>
Now, remember, navigating to pages is like inviting this method to your party. It'll show up, do its thing, and then hit the dance floor, no RSVP needed! 💃🏽🕺🏼

 Navigating through the digital landscape of your Laravel app is akin to navigating through a never-ending maze of chocolate (because who doesn't love chocolate?). First, you've got to define a room - let's call it a page. Once that's done, you can find your way into it using the magical `visit` method:

```php
use Tests\Browser\Pages\Login;

It's like teleporting to the Login Room! $browser->visit(new Login);
```

But what if you're already lost in the Playlist Lounge and someone drops a mystery playlist invitation on your table? You didn't explicitly navigate there, but you need to get your chocolate-stained gloves on some selectors and methods to continue. Fear not, for the `on` method is here!

```php
use Tests\Browser\Pages\CreatePlaylist;

$browser->visit('/dashboard')
    ->clickLink('Create Playlist') // Ooh, a magic playlist door opened!
    ->on(new CreatePlaylist) // And now we're in the Create Playlist Room! $browser->on(new CreatePlaylist);
    ->assertSee('@create'); // Let's make sure we're in the right room: check for '@create'.
```

<a name="shorthand-selectors"></a>
Shorthand Selectors (because who wants to type "@" every time)?

Just like how a magician can wave his wand and summon objects, you too can make your selectors appear with just a simple wave of the `@` symbol:

```php
->assertSee('@create'); // This is our magic spell to check if we see 'Create' in our current room.
```

 ### CSS-ify Your Life with Laravel's Selector Shortcuts! 🕵️‍♂️

Tired of typing out those lengthy CSS selectors like a digital peacock strutting its plumes? Fear not, dear coder! Laravel's got your back with the delightfully named `elements` method. This nifty feature, hidden within page classes, lets you create breezy aliases for any selector on your page. Let's say you want to give a nickname to the "email" input field of our beloved login page:

```php
/**
 * Serve up some selector shortcuts like a mixologist crafting a mean cocktail 🍹
 *
 * @return array<string, string>
 */
public function elements(): array
{
    return [
        '@email_field' => 'input[name=email]', // You can call it whatever floats your boat!
    ];
}
```

Once you've christened this beauty, you can sprinkle it into your code like you would a pinch of CSS magic:

```php
$browser->type('@email_field', 'taylor@laravel.com'); // We're emailing Taylor now! 📧
```

No more fumbling around with those tangled selector strings, just a sweet dance of keys and your newfound alias! 🎉

 Alright, let's get this party started! You've just invited Dusk to your Laravel bash, and the first thing it does is whip out a snazzy tuxedo and set up shop in your `tests/Browser/Pages` directory. This dapper chap goes by the name of `Page`, and he's got some serious moves!

Now, this suave dude has a trick up his sleeve – the `siteElements` method. Imagine it as Dusk's little black book of shortcuts for all your global elements on every page throughout your application. It's like having a secret decoder ring that makes navigating your app as easy as pie!

```php
/**
 * Get the global element shortcuts for the site, like a boss.
 *
 * @return array<string, string>
 */
public static function siteElements(): array
{
    return [
        '@element' => '#selector', // Whoa, now that's one hot shortcut!
    ];
}
```

In this method, you can define your global element shortcuts as key-value pairs. So if you want to call an element with the id 'selector', just use '@element' anywhere in your tests and Dusk will do the rest for you! It's like having a personal assistant that knows all the hidden gems in your app. Party on, Laravel! 🎉🎊🥳

 ### Rockin' Page Methods, Man!

Hey there, code cowboys and codelettes! Let me tell you about these badass page methods in Laravel Dusk, the coolest test automation tool for your PHP apps. These babies aren't just your average run-of-the-mill functions; they're more like custom superpowers for your tests!

Let's say you're building a music management app that would make even Beethoven dance in his grave (not literally, of course). Creating playlists is an action that's gonna pop up everywhere in your app. So instead of repeating the same ol' logic in each test like a broken record, why not define a `createPlaylist` method on your page class?

```php
<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Page;

class Dashboard extends Page
{
    // Other page methods...

    /**
     * Create a new playlist, y'all!
     */
    public function createPlaylist(Browser $browser, string $name): void
    {
        $browser->type('name', $name)
            ->check('share')
            ->press('Create Playlist');
    }
}
```

Once you've got the method defined, you can use it like a trusty sidekick in any test that swings by this page. The browser instance will be automatically passed as the first argument to these custom page methods:

```php
use Tests\Browser\Pages\Dashboard;

$browser->visit(new Dashboard)
    ->createPlaylist('My Playlist') // You've just created a playlist, buddy!
    ->assertSee('My Playlist'); // Now, let's make sure it's there!
```

Remember, with these page methods, you're not just testing your app; you're rockin' it to the test-driven beat! 🎸🤘

 Alrighty, buckle up, web wranglers! Components, you ask? Think of them as the swiss army knives of your Laravel app – those oh-so-versatile gadgets that pop up everywhere from a navigator's compass to a notifier's peephole. No more coding the same navigation bar or pesky pop-up window multiple times!

Now, let me tell you about generating these bad boys. Imagine you're in a whimsical workshop, and instead of forging swords, you're crafting components! You can even name your creation after your favorite sandwich if that floats your boat. 😉

<a name="using-components"></a>

To use these newly minted masterpieces, you simply include them in the code as needed, just like an encore by a beloved comedian at a sold-out show! Remember, components are free-range and unfettered by the confines of specific URLs. So you can plop 'em down wherever you please, from the cocktail party on the homepage to the secret speakeasy in a user's profile.

Now, go forth and build an app that'll make your users laugh, cry, and everything in between! 🎉🎤🥳

 ### Unleashing the Magic of Date Pickers!

Ready to conquer time travel in your Laravel app without a DeLorean? Buckle up, because we're about to turn back the clock on boring test writing with the power of Dusk Components! 🕰️

To summon a new component, just shout out the `dusk:component` Artisan command like a magic incantation. Here's our star of the show - the DatePicker! 🎉

```shell
php artisan dusk:component DatePicker
```

A "date picker" is like the time-traveling equivalent of a trusty Swiss Army knife, sprinkled throughout your application on various pages. Writing automation logic to navigate through time can be as cumbersome as herding cats in a phone booth! But fret not, because we've got you covered with our Dusk component that neatly encapsulates all that complexity. 🐾📱

```php
<?php

namespace Tests\Browser\Components;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Component as BaseComponent;

class DatePicker extends BaseComponent
{
    /**
     * Feel the rhythm of the cosmos with us! 💥
     */
    public function selector(): string
    {
        return '.date-picker';
    }

    /**
     * Let's party like it's 1999! Assert that the page is grooving to our beat. 💃️🕺️
     */
    public function assert(Browser $browser): void
    {
        $browser->assertVisible($this->selector());
    }

    /**
     * A secret map of element shortcuts to navigate through the ages! 🗺️
     *
     * @return array<string, string>
     */
    public function elements(): array
    {
        return [
            '@date-field' => 'input.datepicker-input',
            '@year-list' => 'div > div.datepicker-years',
            '@month-list' => 'div > div.datepicker-months',
            '@day-list' => 'div > div.datepicker-days',
        ];
    }

    /**
     * Set the coordinates for your time machine and hop aboard! 🚀
     */
    public function selectDate(Browser $browser, int $year, int $month, int $day): void
    {
        $browser->click('@date-field')
            ->within('@year-list', function (Browser $browser) use ($year) {
                $browser->click($year); // Time-traveling tip: remember to click the year! 🕰️
            })
            ->within('@month-list', function (Browser $browser) use ($month) {
                $browser->click($month); // Now let's fast forward to the right month! ⏩
            })
            ->within('@day-list', function (Browser $browser) use ($day) {
                $browser->click($day); // And finally, select the day you wish to visit! 📅
            });
    }
}
```

And there you have it! Now, you can travel through your app's history with ease and style. Stay tuned for more time-bending adventures in Dusk Components! 🕰️🚀💫

 ### Unleashing the Power of Pickle-Wise Calendar Navigation!

Once you've whipped up a Date Picker component, navigating through dates in your tests becomes as easy as pie (and almost as delicious)! And here's the best part: if you find yourself needing to update your time-traveling skills, all you need is a quick tweak to the component itself.

```php tab=Pest Pickle-Speak
<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\Browser\Components\DatePicker; // Our trusty time machine

pest()->use(DatabaseMigrations::class);

test('basic example', function () {
    $this->browse(function (Browser $browser) {
        $browser->visit('/') // Set our coordinates to the test URL
            ->timeTravelTo(new DatePicker, function (Browser $browser) {
                // Hop to February 28th, 2016 in our time machine!
                $browser->selectDate(2019, 1, 30); // Oh, how quaint!
            })
            ->assertSee('January'); // Check if we're still on the right page
    });
});
```

```php tab=PHPUnit Pickle-Speak
<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\Browser\Components\DatePicker; // Our trusty time machine
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic component test example.
     */
    public function test_basic_example(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/') // Set our coordinates to the test URL
                ->timeTravelTo(new DatePicker, function (Browser $browser) {
                    // Hop to February 28th, 2016 in our time machine!
                    $browser->selectDate(2019, 1, 30); // Oh, how quaint!
                })
                ->assertSee('January'); // Check if we're still on the right page
        });
    }
}
```

With the `component` method at your disposal, you can grab a handle to our Date Picker component:

```php
$picklePicker = $browser->component(new DatePickerComponent); // Call it Pickle Picker for that extra zing!

$picklePicker->timeTravelTo(2019, 1, 30); // Navigate to a date of your choice

$picklePicker->assertSee('January'); // Check if we're still on the right page
```

<a name="continuous-integration"></a>
### Time Traveling Together in Continuous Integration

Now that you've got the hang of it, you can embark on your time-traveling adventures with friends too! Just set up your continuous integration environment to run these tests, and everyone can join in the fun. Happy testing, pickle enthusiasts!

 🚨 Attention, developers! 🚨

Before we dive into the world of Continuous Integration (CI), let's set the stage. You see, most Dusk CI configurations are as picky as a diva at a dinner party - they prefer your Laravel app served on a silver platter, or in this case, the built-in PHP development server on port 8000. So, before you proceed, make sure your continuous integration environment is wearing the right tuxedo (has an `APP_URL` environment variable value of `http://127.0.0.1:8000`).

Now that we've got that out of the way, let's talk about running tests on Heroku CI. It's like the ultimate backstage pass for your Laravel app! 🎫🚀

First things first, you'll want to add a `scripts` section in your `composer.json`. Here's how:

```json
"scripts": {
    "post-install-cmd": [
        "npm install",
        "npm run production"
    ],
    "test": "php artisan test --ansi --env=testing --deck"
}
```

Next, it's time to create a `.heroku/phar-auto-discover.json`. This little guy will help Heroku CI find your tests and run them:

```json
{
    "bin/phpunit": {
        "autoload-file": "vendor/autoload.php",
        "autoload-file-map": [
            "vendor/laravel/dusk": "vendor/laravel/dusk/phpunit"
        ]
    }
}
```

Finally, you can rest easy knowing that your tests will run automatically whenever you push to Heroku. Life's too short for manually testing code, am I right? 🤖💪

Remember, the road to CI nirvana is paved with test-driven development and a love for automation. Happy coding! 🚀🎉

 ### The Chromey, Phwoar-some Heroku Adventure! 🌈🚀

Fancy testing those Dusk tests on a cloud that's hotter than a Brooklyn subway in July? Let's set up shop on [Heroku CI](https://www.heroku.com/continuous-integration)! Here's the lowdown on how to get your Laravel app and Chrome driver all cozied up together like peanut butter and jelly (or avocado toast, if you're a millennial).

First things first, open your trusty `app.json` file, grab a seat next to your favorite cup of code-roasting coffee, and let's get down to business!

```json
{
  "environments": {
    "test": {
      "buildpacks": [ // Don't mind if we do...
        { "url": "heroku/php" }, // ...a little PHP, darling?
        { "url": "https://github.com/heroku/heroku-buildpack-chrome-for-testing" } // ...and don't forget our Chrome driver!
      ],
      "scripts": {
        "test-setup": "cp .env.testing .env", // Set up your test environment, just like you would in real life.
        "test": "nohup bash -c './vendor/laravel/dusk/bin/chromedriver-linux --port=9515 > /dev/null 2>&1 &' && nohup bash -c 'php artisan serve --no-reload > /dev/null 2>&1 &' && php artisan dusk" // Run your tests like a well-oiled machine.
      }
    }
  }
}
```

And voilà! With this little dance, you've got your Laravel app all set up to do its test-running thing on Heroku CI. Now go forth and test with confidence, knowing that your tests are being run by a trusty cloud companion as reliable as your old pair of slippers (but probably cleaner). 🌈🎉

 Alrighty, my little Laravel buddies! Let's frolic through the magical land of Travis CI together. It's not quite Disney World, but it's where your Dusk tests will come to life (without the tears, we hope). 🦊

To get started, you'll need to whip up a yummy `.travis.yml` recipe. Keep in mind, Travis CI is more of a black and white, no-frills kinda place, so we gotta add some extra steps to tickle out a Chrome browser. And since we're in a digital world, let's not forget the ever-faithful `php artisan serve` to launch PHP's built-in web server!

Here's your tasty Travis CI configuration:

```yaml
🎨 🌈 🐘 - Colors for fun, because why not?
language: php

🍨 🥧 🤖 - PHP versions, because choices are important.
php:
  - 8.2

✨ Chrome-y Addons ✨
addons:
  chrome: stable

Installation Time! ⏱️
install:
  - 🔁 Copy .env.testing to .env, because secrets are sacred.
  - 🧙‍♂️ Run `travis_retry composer install` to make sure everything's nice and fresh. No interaction required, just like a well-oiled machine.
  - 🔑 Generate a new key with `php artisan key:generate`. Security is important, especially in this cyber jungle.
  - 🦄 Set up the ChromeDriver with `php artisan dusk:chrome-driver`. Because who doesn't love a little magic?

Before the Show Begins! 🎧 🕰️
before_script:
  - ing Google Chrome in its headless form, without the GPU and with remote debugging on port 9222.
  - 🌐 Start up the PHP server, without any reloads because we're too cool for that.

Showtime! 🎉 🎥
script:
  - 🦄 Run your tests with `php artisan dusk`. And away they go!
```

Now, just like that, you're ready to dance with the testing fairies on Travis CI. Happy coding, and may your tests always pass with flying colors (and maybe even some confetti)! 🌈🎉

 ### The Quest for Seamless Testing (Courtesy of the Laravel Leprechaun)

Ahoy there, brave tester! If you've decided to hitch a ride with GitHub Actions for your Dusk tests, congratulations! You're about to embark on an epic adventure that would make Odysseus envious. Just like TravisCI, our trusty steed in this quest will be the magical command `php artisan serve`, which shall summon PHP's very own web server, as ancient and powerful as Merlin himself!

So, let's brew up a potion for your GitHub Actions configuration. Here's your starting guide to this mystical journey:

```yaml
Name: The CI Chronicles
Event: When thou dost push thy code
Jobs:
  Dusk Expedition:
    Platform: Ubuntu, the wise and sturdy steed
    Environment variables:
      APP_URL: "http://127.0.0.1:8000" - The URL to thy magical app
      DB_USERNAME: root - Thy faithful database keeper
      DB_PASSWORD: root - Root's secret handshake with the database realm
      MAIL_MAILER: log - Let's document our journey in a book!
    Steps:
      1. Checkout thy codebase, like pulling a sword from the stone.
      2. Prepare The Environment - Copy thy .env.example to the .env, as the elixir of thy application settings.
      3. Create Database - Start the magical MySQL service and create a new database, "my-database", with all the spells and incantations required.
      4. Install Composer Dependencies - Install thy potion ingredients to brew the perfect test cocktail.
      5. Generate Application Key - Forge a unique key to unlock the treasure chest of secrets.
      6. Upgrade Chrome Driver - Enhance thy vehicle, Chrome, with the latest version of its magical horse (the driver).
      7. Start Chrome Driver - Summon the mystical chromedriver-linux from its stable and prepare it for action.
      8. Run Laravel Server - Invoke the php artisan serve command to ignite thy server's fire.
      9. Run Dusk Tests - Unleash thy tests upon the world, and may they bring forth wisdom!
      10. Upload Screenshots - If the tests fail (boo!), gather the screenshots of thy misadventures for further analysis.
      11. Upload Console Logs - Should the tests continue to disappoint, collect the logs to help thee decipher the mystical errors.
```

This enchanted guide shall accompany you on your journey, but remember, brave tester, success is not guaranteed and monsters lurk around every corner! May the force be with thee, and may thy tests run smoothly! 🍻⚔️🎲

 Ahoy there, matey! Sail aboard the good ship Laravel and let's get our coding sea legs ready! If you're sailing with Chipper CI to conquer those Dusk tests like a true buccaneer, here's a jolly swabbie's guide to setting sail. We'll be using PHP's own trusty vessel – the built-in server – to hoist our Laravel sails and prepare for battle!

```yaml
Yo Ho Ho and a YARN (Yet Another Runtime Notion) file:

  services:
    - name: laravel
      extension: php
      command: composer global require laravel/installer
      working_directory: /path/to/your/laravel-project

  laravel_sail:
    build:
      context: dockerrun.aws.amz2
      dockerfile: Dockerfile

    command: php artisan sail
    environment:
      APP_ENV: testing
      DB_DATABASE: testing
      DB_USERNAME: testing
      DB_PASSWORD: testing
      BROADCAST_DRIVER: null

    volumes:
      - ./:/var/www/html
```

Arrr, this here YARN file'll help you set up your Laravel project with Chipper CI. It's a treasure map for ye pirates seeking to run tests and navigate the treacherous waters of Dusk!

1. First off, `laravel` service – that's our ship, see? We're installing the mighty Laravel Installer (a handy tool we'll use throughout our voyage).
2. Next, we set sail with the `laravel_sail` service, which includes a Dockerfile and sets the `APP_ENV`, `DB_*` variables for testing purposes, disables Broadcast Driver, and maps your local project to the ship.
3. The final command – `php artisan sail` – raises the anchor and sets our Laravel vessel in motion!

So there ye have it, matey! With this guide, you'll be well on your way to conquering Dusk tests with Chipper CI like a true seafaring hero! Fair winds and following seas! 🌬️⚓️🎉

 Alright, buckle up, PHP cowboys and code cowgirls! Let's ride this Laravel-a-rangin' yaml steed named `.chipperci.yml`.

Y'all remember that old west gold rush? Well, it's not quite the same here but replace "gold" with "code" and you got yourself a modern-day digital gold rush!

First off, let's establish our version:

```
version: 1
```

Keep it simple cowpoke. You don't want to mix up your 8-track tapes with vinyl records now do ya?

Next up, we're setting the environment for our wild west town (a.k.a project):

```
environment:
  php: 8.2
  node: 16
```

Horses need food and code needs PHP version 8.2 and Node 16 to run! If you're still using a horse-drawn buggy for your project, it might be time to upgrade!

Now, you're ready to set off on your Laravel adventure, armed with the knowledge of this humble `.chipperci.yml` document. Ride 'em, cowboy!

 Alrighty, buckle up, cowboy! Let's dive into the wild west of Laravel-land and discuss how to wrangle Chrome into your build environment like a seasoned mustang.

First things first, cowpoke, you gotta make sure Dusk is part of your posse by adding it as a service:

```
services:
  - dusk
```

That's right, ol' Dusk is our trusty sidekick when it comes to browser testing. He's got the chops to automate tests in real browsers, just like you wouldn't want to round up cattle without a good ol' rope and spur!

Now, for Chrome to join the herd, we need to provide him with his necessary grub:

1. Make sure you have Chrome installed on your computer; you can grab it from [Google](https://www.google.com/chrome/) if you don't already have it.
2. Next, give Chrome a place to call home by setting the `CHROME_EXECUTABLE` environment variable to point to your Chrome installation directory. If you're on a *nix system (like Linux or MacOS), you can add this line to your shell configuration file:

```bash
export CHROME_EXECUTABLE=/path/to/your/chrome/application
```

3. Last but not least, restart your good ol' Laravel homestead (or your local development environment) so these changes take effect:

```
vagrant reload
```

And there you have it, partner! Chrome is now an integral part of your Laravel build environment, ready to help you wrangle those tests and ensure your code is as tight as a cowboy's chaps! Happy trails!

 Title: 🎉 Laravel's Commit Spectacular Extravaganza 🎉

```bash
# Unleash the build extravaganza on every push!
on:
   push:
      branches: .*

The Show Must Go On Pipeline:
  1. The Grand Entrance - Setup
     cmd: |
       Time to don your cape and cowl, because we're diving headfirst into the setup!
       cp -v .env.example .env # Tadaa! Here's your new .env file, ready for secrets!
       composer install --no-interaction --prefer-dist --optimize-autoloader # The magicians of Composer are now busy at work!
       php artisan key:generate # Our trusty key just got a fresh twist!

       # Now, let's create a dusk env file, ensuring APP_URL uses BUILD_HOST
       cp -v .env .env.dusk.ci # We've got the perfect copy for CI!
       sed -i "s@APP_URL=.*@APP_URL=http://$BUILD_HOST:8000@g" .env.dusk.ci # That's better, ain't it?

  2. The Show Stopper - Asset Compilation
     cmd: |
       npm ci --no-audit # It's time to get our assets in top shape!
       npm run build # And now, the pièce de résistance!

  3. Center Stage - Browser Tests (Brought to you by the letter D and the number 4)
     cmd: |
       php -S [::0]:8000 -t public 2>server.log & # We've got a server! Let the tests begin!
       sleep 2 # Patience is a virtue, after all!
       php artisan dusk:chrome-driver $CHROME_DRIVER # Time for Chrome to step up to the plate!
       php artisan dusk --env=ci # The grand finale! Let's test those browsers!
```

Remember, this is just the beginning of your grand adventure. For more information on running Dusk tests on Chipper CI, including how to use databases, consult the [official Chipper CI documentation](https://chipperci.com/docs/testing/laravel-dusk-new/)!