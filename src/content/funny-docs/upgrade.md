 # Laughter and Coding: A Journey to Laravel 13.0! (From the Stables of 12.x)

Welcome, dear coders! We're about to embark on an exciting adventure together - upgrading our beloved Laravel project from the lively 12.x era to the pulsating 13.0 times! Strap on your coding helmets and let's get this show on the road!

<a name="upgrade-13.0"></a>
## Up, Up, and Away to Laravel 13.0!

Ready for a rollercoaster ride? We're gonna upgrade using your friendly neighborhood AI (no capes required). But remember, if you're feeling a bit rusty, consult the [official documentation](https://laravel.com/docs/8.x/upgrade) first!

<a name="upgrading-using-ai"></a>
### Upgrading Using AI (No Cape, Just Code)

Now that you've got your trusty AI sidekick, it's time to start the upgrade process! Here are some high-impact changes you might encounter:

1. **Hasta La Vista, `Artisan::call()`:** The old friend has bid farewell, replaced by a more efficient method: `Artisan::run($command)`. Embrace the future, dear coder!

2. **Laravel Debugbar's New Home:** Laravel Debugbar has found a new home in the `providers` array of your `composer.json`. Go ahead and introduce it to its new neighbors!

3. **Beware the Monsters Under the Composer!** If you've been using `composer require --dev` for development-only packages, be prepared for some monster changes in Laravel 13.0! Now it's recommended to use `composer require` for both production and dev dependencies. You're not alone in this strange land anymore, fearless coder!

4. **Routes, Routes, Everywhere:** In a surprising twist, some route definitions have moved to the `app/Http/routes.php` file. It seems our friendly routing system has grown a bit more complex (and we love it!).

Remember, always keep your code clean and dry, and you'll conquer Laravel 13.0 in no time! Happy coding! 🚀💻😄

 ## Notable Nerd tweaks 🚀

<div class="content-list" markdown="1">

- [Depending on Dependencies, like a clingy ex](#updating-dependencies)
- [Updating the Laravel Installer, because who doesn't love a software makeover?](#updating-the-laravel-installer)
- [Request Forgery Protection, because no one wants their project to end up like that fake ID at the club 📜](#request-forgery-protection)

</div>

<a name="medium-impact-changes"></a>

*Now, let's get this party started!*

 🚨 Attention, developers! 🚀

Fasten your seatbelts for a whirlwind tour through the enchanting world of Medium Impact Changes! 🎢 This ain't your regular fairy tale, it's a Laravel adventure where we tame dragons called `serializable_classes` and create the most magical cache configurations.

Let's dive in! 🤿

<div class="content-list" markdown="1">

- [Cache `serializable_classes` Configuration](#cache-serializable_classes-configuration)

</div>

Aha! We've stumbled upon our first destination - Cache `serializable_classes` Configuration. This is where we decide which of our beloved Laravel classes can be turned into delicious, bite-sized chunks for the cache dragon to gobble up and store. 🥪🚀

So, if you want your favorite class to join the cache party, you'll need to add its name to this config file. It's like adding a new member to the Avengers team (but without all the superpowers)! 🦸‍♂️🦸‍♀️

Remember, with great power comes great responsibility. Be careful not to fill up the cache dragon's belly too much, or it might slow down your application's speed like a sloth on a sugar high. 🐢🍬

Happy coding! 🎉🎈🚀

 ## The Grand Unveiling of Laravel 13.0 - A Comedy Guide to Low Impact Changes! 🎭

Ladies and gentlemen, boys and girls, gather 'round as we embark on an adventure through the world of Laravel updates! In this edition, we present to you the low-impact changes that will make your coding lives more jovial than a barrel of laughing hyenas. 🐾😃

<div class="comedy-list">

- [Cache Prefixes and Session Cookie Names](#clumsy-cookies) - Because who doesn't love a good laugh at the expense of cache keys and cookies? We're sure you can find some funny names to give them! 😂
- [Collection Model Serialization Restores Eager-Loaded Relations](#eager-elephants) - Now your collections can carry around their entire family tree! Who knew they were such good genealogists? 🐘
- [`Container::call` and Nullable Class Defaults](#nullable-nonsense) - A chance to make fun of the container while you learn about nullable class defaults. We promise there'll be plenty of jokes about empty containers! 📦
- [Domain Route Registration Precedence](#domain-who-is-king) - Kingdoms, queens, and court jesters, oh my! Let the power struggle begin as routes fight for precedence. 👑
- [`JobAttempted` Event Exception Payload](#jobattempted-disaster) - Catch a glimpse of disaster in every job attempted event exception payload. It's a comedy goldmine! 💣
- [Manager `extend` Callback Binding](#manager-extension) - Extend your manager, extend your laughter as we crack jokes about extensions and callbacks! 🔧
- [MySQL `DELETE` Queries With `JOIN`, `ORDER BY`, and `LIMIT`](#mysql-delete-party) - Delete, join, order, and limit your way to a killer MySQL delete party! 🎉
- [Pagination Bootstrap View Names](#bootstrap-names-that-make-sense) - Because who doesn't love a good pun? Let's name those views in a way that leaves everyone in stitches! 🤪
- [Polymorphic Pivot Table Name Generation](#polymorphic-naming-challenge) - Time to flex your creative muscles and come up with the funniest pivot table names in existence! 😂
- [`QueueBusy` Event Property Rename](#queuebusy-name-change) - A chance to make fun of how events can be a hassle. Let's rename that property and laugh it off! 😜
- [`Str` Factories Reset Between Tests](#str-factories-reset-between-laughter) - Let the laughter roll in as we reset those factories between tests. It's a never-ending comedy show! 😂

</div>

<a name="upgrade-13.0"></a>

Now that you've had a good chuckle, let's dive into these low impact changes and make your Laravel journey even more enjoyable! 🎉🎊

 Ahoy there, coders! Buckle up for a thrilling voyage into Laravel 13.0 land, where unicorns frolic and spaghetti code is but a distant memory. But first, before you set sail on this grand adventure, let's make sure your boat (er, project) is shipshape to upgrade from the venerable Laravel 12.x!

First things first, ensure your sails are trimmed and anchors cast loose: run `composer require laravel/framework 8.x` to install Laravel 13.0 into your current project. Remember, ye olde ways won't work here—ye must update to the latest version of Composer before setting sail!

Next up, hoist the Jabberwocky flag (a.k.a., `config/app.php`) and make sure Laravel knows thy name, by updating the application namespace in the `providers` and `aliases` arrays accordingly. Be forewarned: the land of 13.0 is a veritable smorgasbord of new providers and aliases, so keep a trusty compass handy to navigate these uncharted waters.

Now, it's time to set sail! Navigate to `config/database.php` and adjust your vessel's course accordingly, ensuring that thy databases are properly configured for the glorious land of 13.0. Watch thy ports, mateys: new database drivers may have been added in this update, so don't forget to check if there's a new one you can add to your crew!

With databases squared away, it's time to take a gander at the charts (a.k.a., `routes/web.php`). Old routes may have been retired and fresh ones introduced, so don't be caught mapping the old world! Make sure ye compass is set to the new coordinates and all thy treasure maps are up-to-date.

As ye venture forth into the land of 13.0, take a moment to appreciate thy trusty sidekick, Tailwind CSS, now an integral part of Laravel's arsenal. If ye haven't already embraced its magical powers of rapid frontend development, now is the perfect time! Just remember: with great power comes great responsibility—don't let your UI go rogue on you!

Lastly, make sure to test thy boat from stem to stern, so that no leaks spring up when ye least expect 'em. Run `php artisan optimize` to optimize the Laravel environment for peak performance and ensure a smooth journey in this brave new world of 13.0!

And with that, fair sailors, you are now ready to conquer the seas of Laravel 13.0! May ye find treasures beyond your wildest dreams and may your code always be cleaner than a pirate's parrot!

 🕰️ **Time Estimate: 10 Minutes (Or if you're as slow as my cat at fetch, more like an hour)**

> [!ATTN]
> We've painstakingly chronicled every crack in the framework that might potentially break your app. But remember, we're talking about parts so obscure they make the Bermuda Triangle look like Times Square on New Year's Eve. So not everyone's going to get drenched by this deluge of changes.
>
> To speed things up, you can give [Shift](https://laravelshift.com) a whirl! Shift is like that friend who always shows up with a toolkit just when you need it most. This community-loved service automates Laravel upgrades so you don't have to spend your valuable time fiddling with the nitty-gritties.
>
> **But remember, even superheroes can't save every cat from a tree, so always keep a backup of your app before venturing into upgrades.** 🐱⬆️

<a name="upgrading-manually"></a>

> **If you prefer the DIY route:**
>
> If you're the type who likes to tinker under the hood, or perhaps just enjoy the thrill of a potential breakdown, then upgrading manually might be your cup of tea. Here's what you need to know:
>
> 1. **Backup, backup, backup!**: Before you even think about upgrading, back up your application and database. Trust us, we learned this the hard way.
>
> 2. **Update Composer**: Make sure you have the latest version of Composer installed. If not, it's time for an upgrade! Because who doesn't want a smarter package manager?
>
> 3. **Check Your Dependencies**: Run `composer update` to ensure all your dependencies are up-to-date. This is like giving your car a once-over before a long journey.
>
> 4. **Update Laravel**: Now you can finally upgrade Laravel itself. Run `composer require laravel/framework x.x`. Replace 'x.x' with the version number you want to upgrade to.
>
> 5. **Run Migrations**: After upgrading, run your migrations using `php artisan migrate` to make sure everything is in order. This is like a fresh coat of paint for your app.
>
> 6. **Test Everything**: Now's the time to test your application thoroughly. Run through every feature, every route, and every edge case you can think of. Because nothing says 'upgrade' quite like finding that one pesky bug hiding in plain sight.
>
> And voila! You've successfully upgraded your Laravel application. Now you can sit back, relax, and enjoy the sweet taste of progress... until the next upgrade comes along! 🚀🍾

 ### Upgrading Your Laravel App with a Sidekick named Boost

Ready to take your Laravel app to the next level without breaking a sweat? Meet Boost, your new AI sidekick! This first-class MCP server is here to make upgrading as easy as pie.

Once you've got Boost integrated into any Laravel 12 application, all you need to do is drop by the command line and shout out `/upgrade-laravel-v13` in your favorite coding hangout (Claude Code, Cursor, OpenCode, Gemini, or VS Code). But remember, Boost expects you to be running Laravel Boost version `^2.0`.

Now, let's talk updates! Boost will walk you through the process like a digital Sherpa, ensuring your dependency updates are as smooth as possible. It's like having a team of developers on standby, without the pesky requests for coffee or snacks!

<a name="updating-dependencies"></a>
**"Hey Boost, let's update these dependencies!"** And just like that, your sidekick will handle it with finesse. With Boost by your side, upgrading becomes less of a chore and more of an adventure!

So why struggle through upgrades when you can have Boost doing the heavy lifting? Upgrade your Laravel game today! 🤖🎉🚀

 ### Comedy of Updates! 🎭🚀

**Chance of Stardust: Extremely High!** 🌟

Ahoy there, adventurous coder! Time for a little dance with the update fairy, as we breathe fresh life into your Laravel application. Here's the lowdown on who needs to step up their game in your `composer.json` file:

<div class="content-list" markdown="1">

- **Laravel Framework:** It's time for this superhero to don its 13.0 cape! 🦸‍♂️🌈
- **Laravel Boost:** Get ready for the speed of 2.0! 🚀💨 This power-up is about to take your app's performance to new heights!
- **Laravel Tinker:** Welcome version 3.0! 🔧 With this update, it's like having a magic wand for debugging. Prepare to tinker away!
- **PHPUnit:** Step right up, PHPUnit 12.0! 🎪 This unit testing juggernaut is here to help you catch more bugs than a fishing rod in a swamp!
- **PestPHP/Pest:** Meet the fearless Pest 4.0! 🦠 This test runner is about to become your new best friend in the battle against code errors. Testing has never been so fun! 🎉🥳

</div>

<a name="updating-the-laravel-installer"></a>
And remember, keeping our Laravel Installer up-to-date is like keeping your favorite superhero in tip-top shape. With each update, it gets stronger and more ready to save the day! 🦸‍♀️💪🏽

 ### Keeping Your Laravel Installation Up-to-Date (or, Why Your Code Needs a Makeover Too!)

Ah, the sweet sound of progress! If you're using our fabulous Laravel installer CLI tool to whip up those new applications faster than a Vegas magician, it's high time we introduce you to the latest style in town - Laravel 13.x!

So, grab your top hat and cape (figuratively speaking, of course), let's update that installer like there's no tomorrow! Did someone say party?

If you've had a little too much fun playing with the `composer global require` in the past, don't worry - we won't judge. You can catch up on your "missed" updates by firing up the ever-reliable `composer global update`. Just remember to specify our darling installer:

```shell
composer global update laravel/installer
```

Now, if you've been playing nice and using [Laravel Herd's](https://herd.laravel.com) all-inclusive Laravel installer package, consider this your invitation to join the latest release party! Update your Herd installation like a rockstar:

```shell
// Replace 'version' with the latest release version number
composer update herd/installer --with-all-dependencies --prefer-source --ignore-platform-reqs --allow-secure --no-progress --version=*your_latest_release_number*
```

Now, don't you feel like a million bucks? Your Laravel installation is dressed to impress and ready to conquer the world of web development, one application at a time! If you need more assistance or just want to chat about all things Laravel, be sure to drop by our community forums - we love meeting new friends! 🤓👋

 Ahoy there, coders! Let's dive into the thrilling world of Laravel caching - a veritable treasure trove for performance optimization! 🏴‍☠️🔒

<a name="cache-prefixes"></a>
#### Cache Prefixes 🌟✨

Ever wanted to keep your cookies tidy and organized? Well, Laravel's got you covered with cache prefixes! These are like little labels on your cans of spaghetti, making it easy to tell them apart. 🍝📝

```php
// Add a unique prefix for your cache entries
Cache::store()->put('my-unique-key-prefix_name', $value, $minutes);
```

<a name="session-cookie-names"></a>
#### Session Cookie Names 🍪🛎️

When it comes to sessions, Laravel's got the warm and gooey cookies you love, but with a twist: customizable names! No more getting mixed up between your Aunt Mabel's choc chip and Grandma's peanut butter. 🍪🍦

```php
// Set the name of your session cookie
config(['session.cookie' => 'my-unique-cookie-name']);
```

Remember, like a well-aged bottle of fine wine or a beloved pet goldfish, caching and sessions are all about organization and personalization! Happy coding, pirates! 🌟🐠🎉

 **The Great Cache & Cookie Shuffle: A Laravel Adventure**

**Risk Level: Slightly Chilly, but Fear Not!**

Dust off those dancing shoes, folks, because it's time to boogie with the Cache and Redis key prefixes! The party just got hyphenated, and the default session cookie name now sports a new snazzy look - all thanks to Laravel's latest moves.

Most apps won't feel this dance step, as application-specific configuration files already have these values locked down. But for those who find themselves relying on framework-level fallback configuration when the dance card is light, get ready for a change in your cache keys and session cookie names after upgrading:

```php
// Laravel <= 12.x (The Funky Chicken Era)
Let's take "laravel" as our stage name, slug it, and add a dash or two to make it stage-worthy: 'laravel_stage'_cache_, 'laravel_stage'_database_, and 'laravel_stage'_session'.

// Laravel >= 13.x (The Hyphenated Hustle)
Still our dear 'laravel', but now we're snaking it to create a smoother cookie name: 'laravel-cookie-session'.
```

If you can't bear to part with your old dance partners, just explicitly configure `CACHE_PREFIX`, `REDIS_PREFIX`, and `SESSION_COOKIE` in your environment. Let's keep this party going without a hitch! 💃🕺️

 Ahoy there, code wranglers! Tie one on and prepare to dive into the depths of Laravel's cache contracts, where we're adding a new feature that'll make your caching shenanigans even more... well, let's just say "interesting."

**Chance this'll affect ya: Lower than finding a unicorn's horn at a pigeon coop**

Our trusty cache contracts have welcomed a new pal called `touch`. It's like adding a fresh coat of paint to your beloved cache items, extending their Time To Live (TTL) for an extended stay on the dance floor. If you're busy maintaining your own custom cache store implementations, this is just the ticket!

```php
// Illuminated by the neon lights of Illuminate\Contracts\Cache\Store
public function touch($key, $seconds);
```

So, grab a drink and let's get to it! (Just remember, as fun as we're making this, those caching antics still need to be handled with care.)

<a name="cache-serializable_classes-configuration"></a>

 **Cache Lark: The Serialization Shenanigans**

**Risk Factor: Somewhat Spicy Sausage Party**

Say hello to the new sheriff in town! Our default `cache` configuration has just rolled into Dodge City, and it's packing a serious punch. The old pal `serializable_classes` option is now set to `false`, which is like giving the local saloon a much-needed lock on its back door. This move helps fend off those pesky PHP deserialization gadget chain attacks, especially if your application's secret codeword (or `APP_KEY`) finds itself spilled in a saloon brawl.

But here's the twist, partner: if your application intentionally stores PHP objects in its cache like a cowboy hoarding whiskey, you best let it know which classes are welcome at the dance:

```php
'serializable_classes' => [
    App\Data\CachedDashboardStats::class,
    App\Support\CachedPricingSnapshot::class,
],
```

Now, if your application was once a fan of unserialized object rodeos, it's time to saddle up and migrate to explicit class guest lists or switch to non-object cache payloads (like arrays). That way, you can avoid a wild west shootout with unpredictable objects.

<a name="container"></a>

 ### Magic Box 🎉🎁

Welcome, dear coder, to the mystical realm of Laravel's Magical Box! This enchanted artifact is your go-to gizmo for managing dependencies and keeping your code cleaner than a barber in a wind tunnel.

<a name="containercall-and-nullable-class-defaults"></a>

#### Calling Container & Nullable Class Defaults 🔮✨

Ever found yourself in a pickle, needing to retrieve an instance of a class but don't want to get your hands dirty with the nitty-gritty? Fear not! The Magical Box has got you covered. With just a simple incantation (`app()`), you can summon any registered service or class from its depths, leaving you free to focus on more important things, like deciding whether to choose Java or C++ for your next pet project 🐶🐱.

But wait! What if the class you're after doesn't exist? No worries, friend! The Magical Box is smart and can handle such situations with grace. By default, it will return `null` if the requested class isn't found – but you can change this by setting nullable class defaults in your `config/app.php` file. Just remember to keep your spells simple; complexity invites chaos, and we wouldn't want that now, would we? 😈🌪️

Happy coding! May your Magical Box be always filled with useful classes, and may you never encounter a `null` error again. 🎉🎁🤝

 **Laugh-A-Minute Laravel Lesson: Null and Void!**

**Risk Level: lower than a sloth's heart rate** 🥱

Get ready for some seriously fun programming! In Laravel 13, we've got a trick up our sleeve that'll have you laughing all the way to better code. Ever found yourself in a bind when trying to inject nullable classes? Well, worry no more! `Container::call` is now smarter than a room full of geniuses combined!

```php
$container->call(function (Carbon $_date = null) { // Note the question mark 🤔
    return $_date;
});

// Laravel <= 12.x: Carbon instance, feeling a bit cranky?
// Laravel >= 13.x: Chill pill, it's null! Relax and unwind.
```

But wait, there's more! If your clown-car of a method call logic relied on the previous behavior, it might be time to dust off that top hat and give it an update. Don't worry, it won't cost you an arm and a leg (just some time). 🤑

<a name="contracts"></a>
**P.S.**: If you're feeling extra daring, be sure to check out our Contracts section for more laughs! 😜

 ### Contracts: The Sworn Oaths of Laravel Land! 🗡️✨

#### Dispatcher Contract - DispatchAfterResponse 🦸‍♂️🕰️

In the mystical realm of Laravel, every coder must swear allegiance to certain contracts, ancient promises that bind us all together. One such contract is the **Dispatcher Contract's DispatchAfterResponse**. It's akin to a medieval knight's vow to protect the kingdom after defeating an enemy 🏛️.

In this case, our knight (a.k.a. your application) has just vanquished an HTTP request 🐲. As a chivalrous coder, you've sworn to dispatch events after the response is sent, ensuring that the kingdom continues to thrive in harmony with other components of Laravel!

To fulfill this contract, all you need to do is create a method that starts with `afterResponse` and implement it in your event service provider. This might seem like a quest fit for a dragon slayer 🔥🐉, but with the power of Laravel at your side, even the most mundane tasks become heroic feats!

Remember: A knight's work is never done! Keep slaying those requests and dispatching events like there's no tomorrow 💥🔥🌟. May your code always be swift, your events ever-dispatched, and your kingdom forever prosperous! 🔱✨🏰

 **Oh Boy! The Dispatcher is getting a new trick up its sleeve: `dispatchAfterResponse`** 🤹‍♂️🎩

**Chance of making waves: Slim to none, but still, shake a leg if you fancy it.**

The illustrious `Illuminate\Contracts\Bus\Dispatcher` contract has expanded its repertoire with the dazzling new method, `dispatchAfterResponse($command, $handler = null)`. 🎭🎬

If you're the keeper of a custom dispatcher's secret lair, this is your call to arms (or rather code-to-keyboard). Add this method to your class's party line and dance the night away with event-driven delight! 🕺️💃️

P.S. Don't forget that after you've twirled, spun, and pranced through the world of asynchronous tasks, you can always return to a well-earned sit-down. 🎉🍻 The Laravel community has your back!

 Ahoy there, intrepid coder! Strap in and prepare for a whirlwind journey into the enchanting world of Laravel's `ResponseFactory` Contract - specifically its newfound, swashbuckling `eventStream` feature!

But before we dive headfirst into this pirate's treasure chest, let me first set your expectations: the chances of this affecting your codebase are roughly equivalent to finding a unicorn in a sandbox. In other words, very low indeed! Still, it's always good to stay abreast of new developments in our ever-evolving programming seas.

So, without further ado, let us embark on this exciting escapade! The illustrious `Illuminate\Contracts\Routing\ResponseFactory` contract has expanded its repertoire with an enticing `eventStream` signature, like a well-read captain adding another exotic port to their travelogues.

If you find yourself as the keeper of a custom implementation of this venerable contract, it's time to unfurl the Jolly Roger and hoist the anchor – your duties now include adding this method to your ship.

Just remember, like any good pirate's treasure, the `eventStream` is not just for show; it's meant to be used (responsibly, of course). So brace yourself for a grand adventure in Laravel waters and happy coding! Yarr!

 **Oh boy, here's another thrilling Laravel adventure!**

**Gossip Alert: MustVerifyEmail Contract Gets a New Trick!**

*Chance of excitement: Lower than the chances of finding a unicorn in a coding convention*

But hold on to your keyboards, coders! The `Illuminate\Contracts\Auth\MustVerifyEmail` contract has just leveled up with a brand-new move called `markEmailAsUnverified()`.

If you fancy yourself as the Maverick of Laravel land and decide to customize this contract (we hope you've got better things to do, but we can't stop you), don't forget to include this method if you want to stay in the cool kids club!

<a name="database"></a>
**Now, let's get our geek on:**

You might be wondering, "What on earth is `markEmailAsUnverified()`? And why does it sound like a function from an 80's sci-fi movie?" Well, let us enlighten you! This method helps manage user email verification statuses, ensuring that your users can't jump the gun and start accessing sensitive data before their emails are officially verified. It's all about keeping the internet a safer place, one Laravel function at a time.

Happy coding, and may your `markEmailAsUnverified()` always be as reliable as your favorite pair of comfy coding socks! 🦺🧦

 Alright, buckle up, database drivers! Let's dive into the deep end of SQL queries, shall we? 🏊‍♂️

First off, we've got the ever-popular "DELETE" command. Not to be confused with that 'delete' button on your computer that you wish could erase your boss from existence during those late Friday afternoon meetings 😜

But alas, in our SQL realm, `DELETE` is used to remove data from a table. However, it can get tricky when dealing with multiple tables and joining them together like a high school dance floor! Fear not, Laravel's got your back with the `delete()` method. It takes care of those pesky joins for you, so you don't have to spend your weekend figuring out who asked whom to the prom 🕺️

Now, let's talk about ordering and limiting results - think of it as your database bouncer! The `orderBy()` method helps ensure that your data serves the right people first, just like how VIP guests always get priority at the best parties. If you want to limit the number of guests (or records), simply use the `take()` function. This'll keep the crowd manageable and prevent any unwanted chaos 🤳👊

Lastly, remember when your mom told you not to play with matches? Well, in SQL, that's like running a `delete` query without any conditions! To avoid accidentally burning down your database, use the `where()` method to specify which records you want to delete. Because who needs a charred database when you can have a perfectly grilled steak instead? 🥩🔥

So there you have it - Laravel's got all the tools you need to tame your database and keep it running smoothly! Happy querying! 🚀🎉

 **Ahoy, Captains!**

**Likelihood of Pirate Treasure Loss: Minimal** 🏴‍☠️

In the vast ocean of Laravel updates (think Kraken), we've got a minor tweak that'll have your MySQL `DELETE` queries feeling more like a treasure map! 🗺️

In times past, our good ships might've sailed with orders to sort and limit, only for them to be silently shoved overboard by the `JOIN DELETE` crew. But in Laravel 13, we're not just offering pirate grog—we're giving your queries the full sea shanty treatment! 🎵

Now, with our newfound ability to compile `DELETE ... JOIN` queries complete with `ORDER BY` and `LIMIT`, even the most rambunctious MySQL / MariaDB variants will toe the line. (They'll either that, or toss a `QueryException` your way.) 🤪

So set sail for smoother SQL waters, me hearties! Remember: the sea is full of surprises, but with Laravel on deck, your queries won't meet a watery fate. 🌊🐬🎉

<small><a name="eloquent"></a>**Eloquent Expedition:**</small> (For those who prefer a more civilized navigation) With this change in our MySQL `DELETE` queries, your Eloquent models can now handle deletions with joined models, sorted lists, and limited quantities. So hoist the mainsail and brace yourself for fewer unexpected encounters! 🏹🚀🐳

 Ahoy there, intrepid developer! Stepping into the magical realm of Laravel? Fear not, for we've got the perfect guide to help you navigate its enchanting waters. Let's dive right in with Eloquent, our trusty steed that makes database interactions as easy as a pirate's sea shanty!

<a name="model-booting-and-nested-instantiation"></a>

#### Model Booting and Nested Instantiation 🤠

Boot up your models like you would a trusty steed at the break of dawn. Eloquent gives your models the chance to execute some code as soon as they're loaded into memory. This is known as "booting," and it allows you to perform tasks such as setting global event listeners or running database migrations.

Nested instantiation, on the other hand, lets you create a child model instance within another model instance. It's like having a pet parrot that can mimic its parent! But remember, like training any animal, it requires careful setup and understanding of the intricacies involved. Happy sailing! 🐘🌴⚓️

 **Model Boot-Up Blues: Bid Farewell to Unnecessary Nesting**

**Risk of Disruption: Lower than your cat's IQ during a laser pointer session**

Ever tried to create a new model instance while that model was still warming up its boots? Not anymore, my friend! This daring deed is now strictly forbidden and will leave you with a shiny new `LogicException`.

This rule change aims at models misbehaving during their own self-introduction ceremony. Specifically, it's aiming at the rascals who instantiate models from within model or trait `boot` methods:

```php
protected static function boot()
{
    parent::boot();

    // No longer allowed to dance before the curtain goes up...
    (new static())->getTable();
}
```

To keep the peace, kick this logic out of the starting blocks and away from the boot cycle. It's best for everyone involved!

<a name="polymorphic-pivot-table-name-generation"></a>
**Polymorphic Pivot Table Name Generation**

**Risk of Disruption: Slightly higher than your dog figuring out how to open the fridge**

In the exciting world of polymorphic relationships, Laravel now gives you more control over pivot table names. To get in on the action, you can define a `$pivot` property inside your relationship definition:

```php
protected $pivot = 'custom_pivot';
```

This will cause Laravel to use 'custom_pivot' as the name for pivot tables in your polymorphic relationships. It's like naming your own secret clubhouse!

So, keep the fun while learning and remember: Nesting models should be left to Easter eggs, not your code! 😊

 **Polymorphic Pivot Party Names: Now With More 'S'!**

**Impact Level: As low as a sloth on a hammock** 🐒🛑

In the not-so-distant past, our beloved Laravel used to throw singular parties for polymorphic pivot tables when we wore custom cape classes. But alas, times have changed! Now it's all about those pluralized shindigs! 🎉🎉🎉

If your application was super reliant on those single-serve soirees and dressed up its pivot models with those snazzy custom capes, you best start defining the table name on your very own pivot model pronto!

P.S. If you're wondering what happened to all the invite-only events, they were just too exclusive anyway. Now everyone can join in the fun! 🥳🥳🥳

 **Laff-tastic Laravel Lore: The Resurrection of Eager Relations in Model Collections!**

**Chance of Chuckles: Low (But who can resist a good comeback?)**

Listen up, coding cowpokes! When you've got yourself a herd of Eloquent model collections and find yourself serializing and resurrecting 'em (like in them there queued jobs), hold onto your ten-gallon hats - those eagerly-loaded relations have come back from the dead to join the party for each and every wrangled model!

If yer code relied on a ghost town of relations after deserialization, you might need to rustle up some new logic. But don't worry, we ain't leaving y'all high and dry - grab your lasso and let's ride off into the sunset of coding success!

<a name="http-client"></a>
*Rides off into the sunset, with a wink and a nod...*

 ### The Web's Very Own Magic 8 Ball! (Laravel Style)

##### Dive into the mystical realm of the HTTP Client, a divination tool that fetches your data with mystic incantations and answers your web requests like an oracle!

##### <a name="http-client-response-throw-and-throwif-signatures"></a>

**Response: The Magic 8 Ball of the Web**

In this magical realm, the response is your answer to every question about the data you've requested. It comes in a few flavors:

1. `make($response)` - This is when the ball gives you a straight-up answer, like "It is decidedly so" or "Concentrate and ask again". In Laravel terms, this means it's time to create a new Response instance with the given response.

2. `throwIf($statusCode >= $statusCode, $message)` - This is when the ball gives you a cryptic warning, like "Outlook not so good" or "Reply hazy, try again". In Laravel terms, this means if the status code of the response is equal to or greater than the specified status code, throw an exception with the provided message.

3. `throw($message)` - This is when the ball gives you a blunt and immediate answer, like "Don't count on it" or "My sources say no way". In Laravel terms, this means throw an exception with the given message.

Remember, working with the HTTP Client is a bit like playing charades with spirits from another realm – you might get straight answers, cryptic warnings, or blunt denials, but always keep trying and have fun!

 Ahoy there, code wranglers! Let's chat about Laravel's HTTP Client Response, where the party never stops - even when things go sideways! 🎈💥

**Likelihood of Impact: On par with your cat sitting still for a selfie.**

In this dance of digits, our trusty HTTP client response methods have donned their best formal attire and invited callback parameters to the ball:

```php
public function throw($callback = null); // AKA "Pass-the-buck"
public function throwIf($condition, $callback = null); // AKA "If-I-get-caught-call-Dudley"
```

Now, if you've been feeling frisky and decided to reel in some custom response classes, remember these method signatures need to be as compatible as your cat with a ball of yarn! 🐾🧱

So there you have it, my darlings. Keep the fun rolling while you tango with Laravel's HTTP Client Response. Just like when life gives you lemons... or errors - make an error-tini! 🍹😜

 Ahoy there, brave coder! Dive into Laravel's magical world of notifications, where a simple `Notification` class can make your app dance and sing like a digital minstrel! 🎼🕺️

<a name="default-password-reset-subject"></a>

#### Default Password Reset Subject

Ever found yourself in a pickle, struggling to remember that elusive password? Fear not! Laravel's got your back with its default password reset subject. It's like having a password fairy whispering sweet reminders into your ear 👩‍🦰🗣️

```php
use Illuminate\Notifications\Messages\MailMessage;

class PasswordResetNotification extends Notification
{
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Your Password Reset Link')
                    // Your code goes here...
        ;
    }
}
```

With this magical snippet, you can now send a password reset link with a subject line that'll make your users feel like they're in a fantasy novel! 📜✨

 **Breaking News: Laravel's Dynamic Mail Subject Change!**

**Risk Level: Lower than your chances of winning a dance-off with a Cactus** 🕺️🌵

Attention all developers, grab your taco helmets because we're about to embark on an exciting journey through the world of Laravel password resets! Hang onto your code lanyards folks, because things are getting shaken up!

Here's what's happening:

- **Laravel <= 12.x**: The granddaddy of them all, our dear old friend "Reset Password Notification" is saying goodbye and being replaced by...
- **Laravel >= 13.x**: ...the more modern and sleek "Reset your password". Yes, you read that right! It's like going from a VHS to a Blu-ray – a step up in style if you ask us.

But wait, there's more! If your tests, assertions, or translation overrides were as stubbornly attached to the past as that one family member at Thanksgiving, make sure to update them accordingly. That's right, it's time to adapt and evolve! 🦕🌱

Now get out there and start resetting passwords with style! If you need us, we'll be over here in our time machine, helping other developers adjust to the latest in Laravel's ever-evolving world. 🚀🚀🚀

 Alrighty, grab your popcorn! It's time for a rollercoaster ride through the world of Laravel notifications! 🚀

**Chance of Drama: Lower than an introvert at a party**

Get ready to witness some magic in version control! Your queued notifications are now more sophisticated than a butler in Downton Abbey. They now understand and appreciate the `#[DeleteWhenMissingModels]` attribute and `$deleteWhenMissingModels` property on your notification class.

In simpler terms, we've taught them to clean up after themselves (well, almost). No more awkward moments of queued notifications tripping over missing models like Clark Kent stumbling into a phone booth!

Now, let's dive deeper... or shall we say, queue-per? 🥳 <a name="queue"></a>

*[Cue dramatic music]*

Before you knew it, our brave notifications were failing in cases where they should have been deleted. But fret not! We've given them a cape and a magnifying glass to find their missing models before it's too late! 🦸‍♂️🕵️‍♂️

This newfound ability ensures that our heroes can continue their mission, sending notifications without any hiccups. So go ahead, let your notifications loose in the wild! They won't disappoint! 🚀🎉

 Ahoy there, code pirates! Tired of your shipwrecked Laravel application struggling to keep up with all those tasks you've got stacked higher than a Jenga tower? Well, buckle up and hoist the Queue sails, me hearties!

<a name="jobattempted-event-exception-payload"></a>

#### JobAttempted Event Exception Payload

Ahoy, matey! You've heard of the JobAttempted event, but have you ever wondered what's in its cargo hold? It's the payload, me hearties! This treasure chest contains crucial information about the job that just got attempted.

The JobAttempted event fires when a job is successfully dispatched and attempts to be processed. You can listen for this event by using the `afterJob` method on your listener classes. When you do, you'll receive an instance of the `JobExecuting` event, which carries the payload containing:

- The name of the queue that the job belongs to
- The unique identifier for the job (a.k.a. the job ID)
- A snapshot of the job, including its class name and any data it might carry
- Information about the connection used to dispatch the job
- An array containing any exceptions that occurred during the job's processing

So now you know what's in Sharky Steve's loot bag when he drops by your Laravel app. Keep an eye out for more booty, and don't forget to secure those treasure chests! Happy coding, mateys! 🏴‍☠️🎉

 **Tickle Time: Low Key**

Get ready to twist and shout (not literally, we don't want the server to crash) because the `Illuminate\Queue\Events\JobAttempted` event is shaking things up! The eccentric exception object (or a sulking null if it's feeling shy) has now made its grand entrance via `$exception`, evicting the somewhat monotonous `$exceptionOccurred` property from its former glory:

```php
// Laravel 12.x and below, where the party was a little dull
$event->exceptionOccurred;

// Laravel 13.x and up, where the excitement level is off the charts!
$event->exception;
```

If you're tuned in to this event, remember to update your listener code like a well-dressed guest adapting to a fancy ballroom—smoothly and without causing a scene. 🕺🏼💃🏼

 Alright, folks! Buckle up for a rollercoaster ride through the enchanting world of Laravel Queues! 🎢🎠

**Your Chance to Win a Golden Snitch Award: Low**

Remember that time when you thought Cinderella's fairy godmother was playing dress-up with your queue connections? Well, she's at it again, but this time with a more sophisticated sense of style! 👠✨

The `QueueBusy` event property `$connection` has officially metamorphosed into the chic and sophisticated `$connectionName`. Why? Because consistency is the hottest accessory in town! 💃🕺

Now, if your listener buddies are still hanging onto the old `$connection`, it's time to give them a makeover. Fear not, dear friend, for all it takes is a quick update to `$connectionName`. They'll be ready for their close-up in no time! 💄💅

<a name="queue-contract-method-additions"></a>

So there you have it! Embrace the fashion evolution and keep that queue running smoothly. Who knows, maybe your new-and-improved listener will attract more unicorns than a rainbow bagel at brunch! 🦄☕️

 **Tickle Factor: Absurdly Low!**

We've got some breaking news for the queuing aficionados out there! The `Illuminate\Contracts\Queue\Queue` contract has expanded its party repertoire, inviting over those queue size inspection methods that were previously stuck in the bouncer's docblock corner. That's right, they're officially hitting the dance floor now!

If you're the proud owner of custom queue driver implementations, it's time to break out your best moves and add some rhythm to:

<div class="content-list" markdown="1">

- `pendingSize` - The crowd pleaser, keep everyone updated on this one.
- `delayedSize` - A sneaky number that keeps the queue managers guessing.
- `reservedSize` - The VIP list of jobs waiting in the wings.
- `creationTimeOfOldestPendingJob` - The grandpa job in the family, get to know him!

</div>

Now that they've joined the main act, you can count on more transparency, better understanding, and even a touch of fun when dealing with your queues. So, suit up, grab a mic, and start owning that queue stage like never before!

 Alrighty then! Let's dive into the wild west of web navigation, known as Laravel routing! 🌵🐄

<h2><a href="#domain-route-registration-precedence">Domain Route Registration Precedence</a></h2>

Here's where the rules of the road are laid down. When it comes to URL matching, domain routes take priority over controller routes. So if you want your cowboy (controller) to get lost in the wilderness, make sure he doesn't tread on any homesteads (domain routes)! 🤠

<h2><a href="https://laravel.com/docs/8.x/routing#named-routes">Named Routes</a></h2>

Now, these are your trusty trail markers. Named routes let you reference a route by its name rather than the full path. It's like having a map that says "Turn left at 'Sally's Saloon'" instead of "Turn left at 123 Main St." 🗺️

<h2><a href="https://laravel.com/docs/8.x/routing#route-group">Route Grouping</a></h2>

Grouping routes is like herding cats – it keeps things organized and under control! By grouping routes, you can apply middleware to a set of routes or define child routes that inherit properties from their parent route. It's like having a rodeo clown for your cowboy posse! 🐾

<h2><a href="https://laravel.com/docs/8.x/routing#route-caching">Route Caching</a></h2>

Caching is like having a well-stocked pantry for your cowboy adventures – it makes things faster and easier! Route caching compiles all of your routes into a single array, which can significantly improve the performance of your application. Just remember to keep an eye on your expiration dates (or cache tags), or you might end up serving stale beans! 🥕

<h2><a href="https://laravel.com/docs/8.x/routing#route-model-binding">Route Model Binding</a></h2>

With route model binding, every time your cowboy (controller) fetches a resource by its ID, Laravel automatically instantiates an Eloquent model for you. It's like having a loyal sidekick who always has your back! Just don't forget to thank him (or her) with a pat on the head and maybe some treats 🎁!

 Alright, let's dive into the thrilling world of Laravel's Domain Route Registration Precedence! Or as we like to call it, the "Domain Diva Rule". 🎉🎶

**Likelihood Of Impact: Lower than winning the lottery twice in a week.**

In this not-so-exciting, but crucial update, routes with an explicit domain are now strutting their stuff before non-domain routes during the high-stakes game of route matching. 👗🕺

Why is this important, you ask? Well, it ensures that your catch-all subdomain routes remain consistently fabulous, even when those uninvited non-domain routes gatecrash the party earlier. If your application was previously relying on a different registration pecking order between domain and non-domain routes (like a royal family feud), pay attention to your route matching behavior. 👑🚨

<a name="scheduling"></a>
Now that we've got you hooked, let's continue exploring the captivating world of Laravel! Stay tuned for more exciting updates on this never-ending journey through the wonderful world of web development. 🚀✨

 Ahoy there, coding pirates! Tired of waiting for that magical hour hand to strike and run your Laravel scripts? We've got news that'll make you do a jig on the plank!

#### Scheduling Registration Timing 🕰️🤹‍♂️

We all know how hard it is to keep track of time when you're swabbing decks and battling sea monsters. But fear not, Laravel comes with a built-in task scheduler! This nifty tool allows you to automate your scripts so they run like clockwork (or in this case, like the ticking heart of the Black Pearl).

To set up your own automated piratey tasks, navigate to `config/app.php` and register the `\Illuminate\Foundation\Console\Kernel` class under the `commands` array. Once that's done, you can define your very own custom command by creating a new file in the `command` directory.

```bash
php artisan make:command WalkThePlank --help
```

This command will create a new file for you to fill with all your piratey tasks and commands (just don't forget to clean up the deck after yourself!). To tell Laravel when to run this command, edit `scheduling/console.php`.

Now here comes the fun part – you can set up your task to run at a specific time or recurring intervals by using Laravel's cron expression syntax. Want to walk the plank every hour on the hour? Just add the following line to your crontab:

```bash
0 * * * * php /path/to/your/artisan --verbose WalkThePlank
```

And voilà! From now on, every time you hear the rhythmic beat of the sea, you'll know that Laravel is busy running your tasks like a well-oiled pirate ship.

Happy automating, and may you never walk the plank without a good script by your side! 🏴‍☠️🚀

 **Timing is Everything (Or So They Say): The Saga of withScheduling**

**Chance of Consequence: Lower than a snowball's chance in the Sahara!**

Let's have a jolly ol' chat about `withScheduling`, shall we? This little gem is a ticket to the dance floor for your schedules, but with a twist - it's not just a regular invite, oh no! These invitations are now VIP passes that get them in only once the dance floor (`Schedule`) has been fully lit up.

If you were one of those folks who counted on their schedule getting an instant nod at the door during bootstrap, well, it's time to update your flirting game, my friend! You'll need to rework that dance card to accommodate this new VIP treatment.

So grab a drink, kick up your heels (not on the code, of course), and embrace the change like a long-lost friend at a high school reunion—because in the world of Laravel, it's always party time! 🕺️🎉

 Alright, Bucko! You've stumbled upon the *Security* section where we talk about protecting your Laravel app from digital bandits and cyber hijinks. Let's dive in, shall we?

<a name="request-forgery-protection"></a>
**Request Forgery Protection** (AKA CSRF Protection) - This is our friendly neighborhood guard dog that keeps the bad guys from messing with your forms and submissions. It uses a cookie to ensure only legitimate requests are carried out. In simpler terms, if someone tries to fill out a form or submit data while pretending to be you, our CSRF pup will bark them back to their keyboard.

If you're feeling extra paranoid (we don't blame ya), you can always verify CSRF tokens manually for each request. But remember, your CSRF dog is already on duty, so it's like asking your guard dog to check its own credentials. Ain't nobody got time for that!

Now, let's get one thing straight: CSRF protection doesn't apply to AJAX requests by default. So, if you're making some sneaky AJAX calls and wanna keep the digital baddies at bay, make sure to add the CSRF token to your request headers!

And there you have it, chum! Your Laravel app is now fortified against digital shenanigans. Now let's move on to bigger and better things – like learning how to build a spaceship out of macaroni! (Just kidding; stick with coding for now.) 🚀🍝✨

 **Unleash the Cookie Monster!**

**Chance of Cookies Being Nabbed: Sky-High!**

In a world where cookies are precious, Laravel's CSRF police (previously known as `VerifyCsrfToken`) has rebranded itself to `PreventRequestForgery`, because let's face it, who doesn't love a good pun? And now, it's got superpowers! It can verify the origin of your requests using the magic `Sec-Fetch-Site` header.

But don't worry, old friends like `VerifyCsrfToken` and `ValidateCsrfToken` are still around, though a bit embarrassed about their new aliases – "Deprecated Dudes." They might not be as cool, but they're still part of the squad. Just remember to update your references to `PreventRequestForgery`, especially when you're skipping middleware in tests or defining routes:

```php
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

// Laravel <= 12.x
->withoutMiddleware([VerifyCsrfToken::class]); // Bye bye, Cookie Cop!

// Laravel >= 13.x
->withoutMiddleware([PreventRequestForgery::class]); // The new kid on the block... or should we say, cookie jar?
```

The middleware configuration API also got a promotion, now offering `preventRequestForgery(...)`.

<a name="support"></a>
*If you need help with CSRF protection, remember to call your local Laravel support hotline: 1-800-COOKIE-GUARD.*

 ### Unleashing Your Inner Control Freak 😜

#### Manager Extend Callback Binding 🤹‍♂️🔌

Are you the kind of developer who just can't let go, always needing to have a say in every little thing? Well, congratulations! You've stumbled upon Laravel's manager extend callback binding! This is your ticket to micromanaging the entire event system. 🎫🎉

By using this feature, you can bind additional callbacks to events at runtime, giving you the power to take control of every situation (or over-complicate things, whatever floats your boat).

Here's a quick step-by-step guide on how to become a control freak extraordinaire:

1. First, grab hold of an event instance. You can do this by calling `event('your_event')`.
2. Next, use the magic words "on" and "bind" together like a secret password to access the event's callback binding methods. For example: `$event->on(YourEvent::class, function () { /* Your awesome callback code here */ });`
3. Now that you have your callback bound, sit back and watch as Laravel automatically fires it whenever your specified event occurs. Remember, with great power comes great responsibility... or something like that. 🦸‍♂️🚀

Happy event handling! 🎉🥳 Just remember, too much control can be a bad thing - take breaks to avoid developing RSI (Restless Signal Interference Syndrome). 😉😉

 **Breaking News for Laravel's Managerial Staff!**

**Headline:** Custom Driver Closure Bindings Now Report Directly to the Big Boss (Manager Instance)!

**Impact Level: Slightly Elevated Chance of Office Gossip**

Alright, folks! We've got a change that's shaking up the break room chatter. No more secret rendezvous with service provider instances – it's all about loyalty to the manager now! Custom driver closures registered via `extend` methods are now bound to the boss (Manager Instance).

You may have been relying on your service provider pals as `$this` inside these callbacks, but times they are a-changin'. It's time to move those values into a more committed relationship – closure captures using `use (...)`.

<a name="str-factories-reset-between-tests"></a>
**Relationship Advice:** Avoid office drama by keeping your closures exclusive to the manager instance. And remember, in Laravel, as in life, a clean break between tests is essential for a smooth operation! 🚀💔

 Alright, folks! Buckle up for a rollercoaster ride through the world of Laravel and Str factories! 🎢🚀

**Warning: Slight Spontaneity Ahead** 🔥💣

Ever felt like your tests were a broken record, repeating the same custom UUIDs or random strings? Well, Laravel's got your back! Or should we say, it's giving your tests some much-needed "me time" between test runs. 🤔🛁

Yup, you guessed it! Your favorite PHP framework is now resetting those custom `Str` factories during the dramatic test teardown. 🎭🤪

Think of it like a soap opera where characters reboot their lives after each episode—only in this case, your tests get a fresh batch of strings! How cool is that? 😎💆‍♂️

Now, if your tests were the hopeless romantics clinging onto those persistent custom UUIDs or random string factories from one test method to another, it's time for some tough love. Set them in each relevant test or setup hook—it'll make for a healthier relationship (and better test results!). 💔❤️

So there you have it, folks! The latest Laravel news: Str factories are now as unpredictable and ever-changing as your favorite sitcom characters! Keep calm and carry on testing! 🤪😂

 **Oh, the Characters We've Seen!**

Attention, coders! It's time to talk about some Unicode shenanigans in good ol' Laravel Land.

**Risk Level: Lower than a sloth on a sunny day.**

The mighty `Illuminate\Support\Js::from` has taken on a new role as a Unicode party animal, now using the wild and untamed `JSON_UNESCAPED_UNICODE` by default.

If you've been relying on escaped Unicode sequences in your tests or frontend comparisons (like our old pal `\u00e8`), it's time to update those expectations faster than a cheetah chasing a gazelle.

<a name="views"></a>
*Now, let's get back to crafting code that would make even Mr. Spock smile with joy!*

 Ahoy there, coders! Let's embark on a journey through the enchanted realm of Laravel views - where magic happens, one line at a time!

First off, we have pagination. Now, you might be thinking, "Hey, I can count to 10." But here's where it gets fun - no more manual number-crunching! With Laravel's built-in pagination system, your application will automatically slice and dice data into tidy chunks, making even the most data-heavy projects feel like a breeze.

<a name="pagination-bootstrap-view-names"></a>

Now, for our bootstrapped friends out there, Laravel's got you covered with pre-styled views that'll make your app look like it was designed by a pro (even if it wasn't). There are two essential components here: the `bootstrap-4` and `bootstrap-5` views. Choose one or both – we won't judge!

The `bootstrap-4` view comes with a delightful assortment of navigation links, each one pointing to its next data chunk. It's like having an invisible butler guiding your users through the digital estate, serving up fresh data on demand.

But if you fancy yourself as more of a modernist, the `bootstrap-5` view is for you! It features a sleek design with a "previous" and "next" button that'll make your pagination feel like a chic, contemporary art exhibit. Users can stroll through data at their leisure while admiring the clean lines and minimalist aesthetic.

Whichever view you choose, remember: it's all about making your application more user-friendly (and who doesn't love a good user experience?). So, go forth and conquer those views like a digital conquistador! 🏆🎉🚀

 **Blast from the Past: A Trip Down Memory Lane with Pagination Bootstrap View Names**

**Likelihood of Fun: High, Likelihood of Technical Know-How: Also High**

Get ready to reminisce about the good old days (version 12.x), when pagination view names for our beloved Bootstrap 3 were as mysterious as the Sphinx riddles! But worry not, young grasshopper, for the Laravel gods have seen fit to make things a tad more explicit:

```bash
// Ancient Times (Laravel <= 12.x)
pagination::default (aka: The Enigma)
pagination::simple-default (aka: The Riddle wrapped in an Enigma)

// Modern Age (Laravel >= 13.x)
pagination::bootstrap-3 (aka: The Oracle of Delphi)
pagination::simple-bootstrap-3 (aka: The Oracle of Delphi, but simpler)
```

If your application still pays homage to the old pagination view names directly, it's time for an update. Remember, it's a journey through the annals of Laravel history! 🕰️🚀🐳

 Alrighty then, buckle up, cowboy! Let's dive into some Laravel fun facts that will have your code cowboy hat tippin'! 🤠

While it's not compulsory, we highly recommend perusing the `laravel/laravel` [GitHub rodeo](https://github.com/laravel/laravel). Now, many of these wranglin's aren't essential, but keeping your files all a-matchin' with your trusty steed (that's your application) could be as rewarding as discovering gold in them thar hills! 🏃‍♂️

Some of these changes will be covered in this here upgrade guide, but others—like configuration revisions or comments—may be left out in the cold, just like a cowpoke's unattended campfire. Fear not, as you can easily round up the changes with the [GitHub comparison tool](https://github.com/laravel/laravel/compare/12.x...13.x) and select which updates are worth a spur (that's "important" for the city-folk).

Yeehaw, partner! Let's gallop into the future with style! 🐎🚀