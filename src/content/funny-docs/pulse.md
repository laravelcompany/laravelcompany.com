 ## Laravel's Heart Monitor 💼🕺️

Get ready to buckle up, because we're about to dive into the pulse-pounding world of Laravel's Heart Monitor! This isn't your grandma's heart rate monitor—it's a powerful tool that helps keep tabs on the health of your Laravel application.

<a name="installation"></a>
### Installation 🛠️

First things first: let's get this bad boy installed! Follow our step-by-step guide, and before you know it, you'll be monitoring like a pro. And hey, who knows—maybe you'll even learn a new joke or two along the way. 😎

<a name="configuration"></a>
#### Configuration 🔧

Now that we've got our Heart Monitor up and running, let's customize it to your liking! Configure its settings to fit the unique needs of your Laravel app like a well-tailored suit.

<a name="dashboard"></a>
### Dashboard 📊✨

Ah, the hub of our Heart Monitor—the dashboard! Here's where all the action happens. But remember, with great power comes great responsibility—so let's take a look at how to authorize access, customize its appearance, and more!

<a name="dashboard-authorization"></a>
#### Authorization 🔑🕵️‍♂️

First things first: make sure only the right people have access to your dashboard. No need for supervillains to mess with our hard work!

<a name="dashboard-customization"></a>
#### Customization ✏️🎨

Customize the dashboard to match your Laravel app's branding and style—just like a well-dressed superhero needs a snazzy costume.

<a name="dashboard-resolving-users"></a>
#### Resolving Users 🕵️‍♂️💻

Ever wondered who's been causing all that noise in the server room? Now you can find out with our User Resolution feature!

<a name="dashboard-cards"></a>
#### Cards 🗂️📊

Cards, cards, cards—they're the lifeblood of our Heart Monitor dashboard. Each one represents a different aspect of your Laravel app's health and performance.

<a name="capturing-entries"></a>
### Capturing Entries 📝🔎

Want to get a closer look at what's happening in your Laravel app? Our entry capturing features let you dig deep into the data!

<a name="recorders"></a>
#### Recorders 📏🎥

Recorders are the detectives of our Heart Monitor—they keep tabs on various aspects of your Laravel app and report back to the dashboard.

<a name="filtering"></a>
#### Filtering 🔍🌱

Need to focus on a specific aspect of your Laravel app? Use filtering to narrow down the data and zero in on what matters most!

<a name="performance"></a>
### Performance 🚀🏎️

Our Heart Monitor doesn't just look good—it performs like a well-oiled machine too! Learn how to tweak its performance settings for optimal results.

<a name="using-a-different-database"></a>
#### Using a Different Database 📦🗄️

Fancy using a different database for your Heart Monitor data? No problem—we've got you covered!

<a name="ingest"></a>
#### Redis Ingest 🎯🔜

Redis Ingest is our Heart Monitor's secret weapon—it helps improve performance by caching data in a super-fast Redis database.

<a name="sampling"></a>
#### Sampling 📊💾

Sometimes, less is more. Use sampling to reduce the amount of data stored while still getting a clear picture of your Laravel app's health and performance.

<a name="trimming"></a>
#### Trimming 🗑️📊

No one likes clutter—especially when it comes to data! Use trimming to clean up old, unnecessary data and keep the Heart Monitor running smoothly.

<a name="pulse-exceptions"></a>
#### Handling Pulse Exceptions 🚧💥

Encountered an error? Don't panic—our Heart Monitor can help you handle exceptions and keep your Laravel app ticking along nicely.

<a name="custom-cards"></a>
### Custom Cards 📝🎨

Want to add a little personal flair to the Heart Monitor dashboard? Create custom cards that display data tailored to your needs!

<a name="custom-card-components"></a>
#### Card Components 💻🎨

Custom card components let you build unique, functional cards for the Heart Monitor—the sky's the limit!

<a name="custom-card-styling"></a>
#### Styling 🎨🖌️

Use your own styling to make custom cards truly stand out. Make them pop like a neon sign in a dark alley—but don't forget to keep them readable!

<a name="custom-card-data"></a>
#### Data Capture and Aggregation 📊💾

Custom cards need data to be useful. Use data capture and aggregation features to fill those custom cards with valuable, actionable information!

 Welcome to Laravel's Pulse Checkup, your new BFF (Butterfly Friend Forever) for all things app performance and usage! Say goodbye to guessing games about why your app is acting like a caffeine-deprived sloth. With our Pulse Checkup, you can locate those pesky bottlenecks faster than Usain Bottleneck in a 100m dash race - yes, we went there!

Isn't it time to find your most active users? Or maybe track down slow jobs and endpoints that are giving your app a migraine? Well, you can do all of that and more with our Pulse Checkup.

For those moments when you need to dive deep into the nitty-gritty details of individual events, we've got you covered! Give Laravel Telescope a whirl - it's like a magnifying glass on steroids for debugging.

Now, let's get down to business with the installation part. 🤓

<a name="installation"></a>
"Installation? More like a party at my server!"

Grab your favorite beverage and follow these simple steps:

1. Get Pulse Checkup: `composer require laravel/pulse`
2. Add the service provider to your configuration file: `config/app.php`
3. Run migrations to create the necessary tables: `php artisan migrate`
4. Set up middleware to monitor your app's events: `config/kernel.php`
5. Take a deep breath, relax and watch as your app's performance transforms from a hot mess into a well-oiled machine! 🚀

 Alrighty then, let's get this Laravel Pulse party started! But first, a word of caution: Pulse's first-party storage is as picky as your ex who only likes black Labradors. It demands either MySQL, MariaDB, or PostgreSQL databases to keep its data safe. So if you're rocking a different database engine like that quirky, niche one you met at a conference, better set up a secondary MySQL, MariaDB, or PostgreSQL database for Pulse's love life.

To install Pulse, use the Composer package manager - think of it as your cool bartender mixing up your Laravel cocktail:

```shell
composer require laravel/pulse
```

Once the drinks are flowing, publish the Pulse configuration and migration files using the `vendor:publish` Artisan command – picture a friendly bouncer letting you into the VIP section of the Laravel club.

```shell
php artisan vendor:publish --provider="Laravel\Pulse\PulseServiceProvider"
```

Now, it's time to create the tables needed for Pulse to store its data – think of it as setting up a new Tinder profile and filling out those personality questions. Run this command like a seasoned player:

```shell
php artisan migrate
```

Once Pulse's database migrations have been run, you can access the Pulse dashboard by navigating to `/pulse`. It's your VIP section – where all the good stuff happens!

> [!NOTE]
> If you're that one friend who insists on keeping their dating life a secret from everyone else, you may [specify a dedicated database connection](#using-a-different-database) to keep Pulse's data out of the primary database.

Now that you have the basics down, let's get this party started! 🎉🎊

 ### Unleash the Power of Pulse! (Or at Least, its Settings)

Ahoy there, Laravel wranglers! If you're here, it means you've taken the first step towards mastering Pulse - the coolest, most sophisticated Laravel extension since sliced bread (okay, maybe not that cool, but still pretty snazzy). To get started, let's talk configuration.

Picture this: You're a superhero, and Pulse is your magical utility belt. But instead of web-shooters or a Batarang, it's packed with options to customize your Laravel application to your heart's content! To see what's inside, all you gotta do is unzip the goodies:

```shell
php artisan publish-pulse --tag=config-wizardry
```

Now, dig into `config/pulse.php`, and voilà! You'll find a smorgasbord of options to tweak, settings to set, and dashboard configurations to... configure (we can't think of an exciting verb for this one). Toggle switches like a mad scientist, or maybe more like a Laravel sorcerer. The choice is yours!

Just remember: With great power comes great responsibility. So don't go changing things willy-nilly - unless, of course, you want your application to start acting like a caffeinated squirrel on speed. We wouldn't want that, now would we? Happy customizing! 🎉🔧🚀

 Ahoy there, intrepid Laravel sailor! You've come to the right place if you're looking for a dash of dashboard delight! Let's dive into the heart of our application and explore the command center of your Laravel adventures - the Dashboard.

<a name="dashboard-authorization"></a>
But first, matey, we gotta make sure ye be authorized to set foot on this fine piece of coding real estate! To ensure only trusted pirates get access, Laravel uses middleware for authentication and authorization. Fear not, for the `auth` middleware is here to protect your precious dashboard from uninvited scallywags.

Once you've secured your entry, it's time to set sail! The Dashboard provides a comprehensive overview of your application, helping ye navigate through its vast expanse like a true maritime mastermind.

You'll find crucial information such as:
- Authentication and authorization logs, keeping tabs on who's been sneaking about on your ship (er... app)
- Session information, ensuring you know how many groggy sailors have joined the crew
- User management, allowing ye to add, remove, or modify the motley crew that makes up yer Laravel pirate posse.

So hoist the Jolly Roger high and prepare for a swashbuckling journey with Laravel's Dashboard! Just remember - with great power comes great responsibility, so keep an eye on those unruly sailors, and may fortune forever favor your coding endeavors! 🤝🎉🌴

 ### Partying like it's 2001: The Pulse of Your App

Welcome, party people! Get ready to groove your way through the digital universe as we navigate the electrifying world of Laravel authorization. First stop: the pulsating heart of our app – the Pulse dashboard, located at the cool and classy `/pulse` route.

By default, this dashboard is only accessible in the laid-back `local` environment. Don't worry, we won't leave you high and dry in production land; we'll show you how to set up authorization like a boss.

But before we dive into the nitty-gritty, let me take a selfie – just kidding! Here's what you need: customize the `'viewPulse'` authorization gate within your application's `app/Providers/AppServiceProvider.php` file.

```php
Use your powers for good, not evil!
use App\Models\User;
use Illuminate\Support\Facades\Gate;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Gate::define('viewPulse', function (User $user) {
        if ($user->isAdmin()) {
            return true; // Party on, Wayne! You're in!
        } else {
            return false; // Sorry, buddy. Better luck next time.
        }
    });

    // ...
}
```

And there you have it – the key to unlocking the Pulse dashboard for your production environments! Don't forget that being an admin comes with great responsibility; use this power wisely, and always remember to party responsibly. Keep coding, stay fabulous, and see you at the next dancefloor! 💃🏼🕺🏼🚀

 Alright, buckle up! We're about to embark on a magical journey through the enchanted realm of Laravel's Pulse Dashboard. ✨🌟

First things first, let's talk customization. Remember when your mom used to rearrange the living room furniture every other weekend? Well, think of us as the digital equivalent of that, but with less Ikea flatpacks and more PHP artisan commands. To get started, unleash this incantation upon your terminal:

```shell
php artisan vendor:publish --tag=pulse-dashboard
```

This will summon our dashboard to `resources/views/vendor/pulse/dashboard.blade.php`. Sounds like a spell, doesn't it? 🔮✨

Our dashboard is powered by the one and only Livewire (think Harry Potter's magical wand, but for Laravel). This means you can customize cards and layout without needing to write a single line of JavaScript - yay for fewer late-night coding emergencies! 🎉🚀

Once you've found your way into the dashboard file, look out for our trusty `<x-pulse>` component. It's responsible for conjuring up the entire dashboard and providing a grid layout for those cards. If you want to stretch it across the full screen like a superhero cape, just sprinkle some `full-width` fairy dust on it:

```blade
<x-pulse full-width>
    ...
</x-pulse>
```

By default, our dashboard comes with a 12 column grid, but you can adjust this using the `cols` prop. If you're feeling adventurous and want a 16-column grid (because who needs sleep anyway?), just cast this spell:

```blade
<x-pulse cols="16">
    ...
</x-pulse>
```

Each card also accepts `cols` and `rows` props to control space and positioning, so you can create a dancefloor for your cards if you fancy.

```blade
<livewire:pulse.usage cols="4" rows="2" />
```

Most cards also have an `expand` prop, which will make them fill the entire screen like Groot on a growth spurt. Just don't forget to summon it with:

```blade
<livewire:pulse.slow-queries expand />
```

Now that you're all caught up, go forth and create your very own enchanted dashboard! Happy coding! 🧝‍♀️🧙‍♂️🔮✨

 ### Unraveling Your Users, Like a Mystery Novel!

Ahoy there, adventurers! When it comes to cards that showcase your users' deets – think the 'Application Usage' card, for instance – Pulse plays detective, but only records the user's ID. Now, don't worry about not knowing who that number corresponds to, because during dashboard display time, Pulse will channel its inner Sherlock Holmes, fetching the `name` and `email` from your trusty default `Authenticatable` model, and even serve up avatars using the Gravatar web service!

But we're not done personalizing just yet. If you want to customize those fields or the avatar (because let's face it, everyone needs a unique flair), you can do so by calling `Pulse::user` within your application's `App\Providers\AppServiceProvider` class.

This magical method accepts a closure that receives the `Authenticatable` model to be displayed and should return an array containing `name`, `extra`, and `avatar` info for the user:

```php
use Laravel\Pulse\Facades\Pulse;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Pulse::user(fn ($user) => [
        'name' => $user->name, // This is John Doe, not just another number!
        'extra' => $user->email, // And this is how you reach John at johndoe@example.com
        'avatar' => $user->avatar_url, // Because a picture says a thousand words, or in this case, a thousand pixels!
    ]);

    // ...
}
```

> [!NOTE]
> If you fancy yourself as more of an Inspector Gadget than Sherlock Holmes and want to customize the entire process of how the authenticated user is captured and retrieved, then you can implement the `Laravel\Pulse\Contracts\ResolvesUsers` contract and bind it in Laravel's [service container](/docs/{{version}}/container#binding-a-singleton). But remember, with great power comes great responsibility!

<a name="dashboard-cards"></a>

 Alrighty then! Buckle up, code cowboys and cowgirls! It's time we yakked about **Cards**, the shiny new feature in town that'll make your Laravel apps as slick as Elon Musk's hair. 💇‍♂️

#### Servers Card 🌐💻

Ever had a hankering to keep tabs on all your servers at once? Well, ain't nobody got time for that! That's where the **Servers Card** comes in like a superhero saving the day! It provides you with a neat dashboard view of your Laravel servers, complete with vital stats like memory usage and load average. You can even check if there are any pesky errors that might be causing your app to behave like a drunken squirrel on roller skates. 🐿️💔

<a name="processes-card"></a>
#### Processes Card 🕵️‍♂️🛠️

Now, you might be thinking, "But what about the processes running in my server?" Well, grab your popcorn because we got ya covered with the **Processes Card**! This bad boy displays all the active and pending tasks on your Laravel server like a digital version of a Wild West saloon. You can even see who's causing all the ruckus by sorting them based on CPU usage or memory consumption. Just don't go blaming the cat for knocking over the milk jug, it was probably that rogue script all along! 😼💡

<a name="database-card"></a>
#### Database Card 🗃️🔧

Ever wondered how much data you've got stuck in your Laravel database? Well, don't worry; we didn't invent the icepick for nothing! The **Database Card** is here to help you dig out all those unwanted bytes and optimize your database like a pro. It shows useful information such as table sizes, row counts, and even provides suggestions on indexes that could use some polishing. So, if you've got a database that's feeling as sluggish as a hippo in molasses, this card is just the thing to get it back in tip-top shape! 🐃🍯

<a name="events-card"></a>
#### Events Card 🎈🎉

Last but certainly not least, let's chat about the **Events Card**. This card is like the cowboy's trusty sidekick, helping you keep track of all the happenings in your Laravel application. It displays recent events, such as new user registrations, password resets, and other important actions. You can even filter them by event type or time range to find that needle in a haystack faster than you can say "Yeehaw!" So saddle up and ride the waves of information like a pro cowboy! 🌈🤠

And there you have it, folks! Now you know all about our new **Cards** feature. It's like adding a whole new sheriff in town to keep your Laravel apps safe, secure, and running smoother than a well-oiled fiddle. So, don your cowboy hat, grab your lasso, and let's ride into the sunset of improved coding! 🌅🐎🚀

 Alright, let's get this server party started! The shiny `<livewire:pulse.servers />` card is your ultimate bouncer at the club of system resources. It's like a VIP list for all servers that have played the cool `pulse:check` command. For more deets on this resource reporting shindig, check out our swanky [servers recorder](#servers-recorder) section.

Now, imagine you've swapped out one of your dancefloor servers. You might be thinking, "Gosh darn it, I don't want that retired server crashing my Pulse dashboard vibe for too long!" Well, fear not! With the `ignore-after` prop, you can make those inactive servers disappear like a magician after a well-executed trick. Just set the number of seconds, or use fancy terms like "1 hour" or "3 days and 1 hour":

```blade
<livewire:pulse.servers ignore-after="5400" /> <!-- Or just say "3 hours", because who wants to do the math? -->
```

Just like that, your Pulse dashboard will be as lively and up-to-date as a Kardashian family reunion! 🎉💃🏼🌍🚀

 Alrighty, let's dive into the fascinating world of your Laravel app dashboard! 🌟

First up, we've got the "Star Player" card, aka `<livewire:pulse.usage />`. This bad boy keeps tabs on the top 10 VIPs who are making requests to your application, sending jobs left and right, and causing those sluggish, awkward dance numbers we call slow requests. 💃🕺

Wanna know who's pulling all the strings? Well, you can invite these cards to the party multiple times by specifying the `type` attribute:

```blade
<livewire:pulse.usage type="requests" />
<livewire:pulse.usage type="slow_requests" />
<livewire:pulse.usage type="jobs" />
```

Ever wondered how to customize the way Pulse retrieves and displays user data? Check out our documentation on [resolving users](#dashboard-resolving-users). 🕵️‍♂️

Now, here's a fun fact for you! If your app is receiving an overwhelming amount of requests or dispatches a barrage of jobs, it might be like attending a packed concert – uncomfortable and a little overwhelming. To help with that, we suggest enabling [sampling](#sampling). For more information, check out the [user requests recorder](#user-requests-recorder), [user jobs recorder](#user-jobs-recorder), and [slow jobs recorder](#slow-jobs-recorder) docs. 🎶🕺️💫

[Jump to Exceptions card](#exceptions-card) 🔄

 Ahoy there, Laravel explorers! Buckle up as we delve into the thrilling world of `<livewire:pulse.exceptions />` - your very own exception spectator deck!

This isn't just another card game; it's more like a suspenseful whodunit mystery, where exceptions are the mysterious clues scattered throughout your application. By default, these enigmatic errors are sorted and categorized based on their class and the location of their dastardly deeds!

Craving for more intriguing details? Fear not! Dive headfirst into the [exception recorder](#exceptions-recorder) documentation – a riveting read that'll have you solving your app's crime scenes in no time!

So, grab your deerstalker hat and pipe (optional), and let the exception-solving adventure commence! 🕵️‍♂️🔍🎉

 Ahoy there, queue enthusiasts! 🎉🐙

Welcome to the Laravel amusement park's "Throbbing Queue Show" exhibit (or `<livewire:pulse.queues />`, if you prefer technical jargon). Here's where we put all the fun in "fun-tioning" queues! 🥳

Get ready to marvel at the throughput of your application's queues, as they dance and twirl around on our whimsical data graphs. The number of jobs queued up for their big break, the ones currently processing their existence into something meaningful, the jobs that have graduated and joined the ranks of the processed, and the poor unfortunate souls who couldn't make it to the finish line – we've got 'em all! 📈

But don't worry, if you're feeling left out by our jolly queue-filled spectacle, there's more! Head over to our [Queues Recorder](#queues-recorder) documentation for an enlightening deep dive into the world of queues. You won't just be learning – you'll be living the dream! 🎢

Now that you know what to expect, go ahead and join the queue for a fun-filled journey through your application's heart and soul: its queues! 🎉✨🚀

 Ahoy there, coders! Stepping into the world of Laravel, eh? Fear not, we've got your back when it comes to dealing with those pesky slowpokes – or should I say requests? That's right, folks, I'm talking about the legendary `<livewire:pulse.slow-requests />` card!

Now, picture this – you're cruising along on your app-y ship when suddenly, out of nowhere, some requests storm in and start taking their sweet time. Well, worry no more, because this magical card is here to keep an eye out for those sluggish sea creatures. By default, it's set to a generous 1000 milliseconds (or as we sailors like to call it – a "slow-mo moment").

But if you're not one for the status quo and prefer your own speed limit, have no fear! Head on over to the [slow requests recorder](#slow-requests-recorder) documentation and learn how to set your custom threshold. Arrrr, matey!

Happy sailing!

 Ahoy there, coding cowboy! Saddle up and let's dive into the Wild West of your Laravel application, where the dusty trails are filled with jobs that take their sweet time to finish their chores.

The `<livewire:pulse.cowpoke-chronic-delays />` badge is your trusty sidekick in this tale. It corrals those stubborn jobs that have been hanging around longer than a drunken outlaw at the saloon, with 1000 milliseconds (that's about 1 whole second) being their default wanted poster.

If you're itching to learn more about this slow-pokes roundup, check out the [slow jobs recorder](#slow-jobs-recorder) docs, partner! It's as wild and wooly as a grizzled prospector digging for gold in the old west. But fear not, with it on your side, you'll be able to wrangle those delinquent jobs like a seasoned trail boss.

 Alright, let's get this SQL party started! 🎉

First up, we have the "Slow Pony Express" card, your trusty sidekick in keeping tabs on those database queries that are taking their sweet time (over 1,000ms by default). It's like having a personal DB Sheriff keeping an eye out for rogue SQL bandits. 🤠

By default, these sluggish scoundrels are grouped together based on their SQL query fingerprints (excluding bindings) and the location where they were caught red-handed. But if you prefer to focus only on the query itself (like a good ol' fingerprint), simply disable location tracking by waving your magic wand:

```blade
<livewire:pulse.slow-queries without-location />
```

And remember, if these lengthy queries are causing rendering issues due to too much syntax highlighting (like a neon sign flashing "Look at me!"), just turn off the lights by adding `without-highlighting`:

```blade
<livewire:pulse.slow-queries without-highlighting />
```

For more in-depth info on this SQL Sheriff, check out our [Slow Queries Recorder](#slow-queries-recorder) documentation. And remember, when the going gets tough, the tough get querying! 💪🚀

 Ahoy there, Laravel swashbucklers! 🏴‍☠️🛶

When you're sailing the seas of web development, sometimes things can get a bit sluggish... like Captain Codger trying to keep up with modern technology. But fear not! The `<livewire:pirate-treasure-map.slow-outgoing-requests />` compass will point out those pesky requests that are taking longer than Captain Morgan's favorite drinking game (1,000ms by default, matey). 🕰️

By the sea shanties of default settings, these nautical nuisances will be grouped together like ships in a convoy. But if you've got a knack for pattern-spotting or just want to group your requests like an old salt, feel free to use some swashbuckling regular expressions! Learn more about that in our [slow outgoing requests logbook](#slow-outgoing-requests-recorder).

Yarrrr, keep those ships a-sailing and those requests a-tickin'! 🌊⚔️

 Ahoy there, dear developer! Sail into the enchanting world of `<livewire:pulse.cache />`, a nautical navigation chart for your application's cache voyages! This dashboard will keep ye swabbing decks with its captivating display of cache hits and misses - both globally and for individual keys, like the secrets of old Captain Ahab himself!

By golly, by default, our trusty ol' parrot (err... system) will organize entries by key, but if ye fancy a different tune, why not group similar keys using some mystical sea-witch's spells (or regular expressions, as the landlubbers call 'em)? Head on over to the [cache interactions recorder](#cache-interactions-recorder) documentation for more enlightening tales of the seven seas!

Now, let me tell you about capturing entries... (Not pirate treasure, but entries, ye scurvy dogs!) If ye find yourself yearning for a closer look at specific cache keys, don't hesitate to set up entry logging using the [cache interaction log](#cache-interactions-recorder) feature. Arr matey, that'll give ye a detailed voyage log of all those tantalizing treasure chests (entries) hidden deep within your application!

 Alrighty, let's dive into the world of Pulse capturing! Most of our Pulse recorders are as sharp as a tack, snatching entries like a magpie on a mission, triggered by Laravel's event framework. But, there are some exceptions: our server recorder and a few third-party pals need a regular catch-up session. To play along with these cool cats, you've gotta fire up the `pulse:check` daemon on every one of your application servers, like so:

```php
php artisan pulse:check
```

Now, if you want this process to keep grooving in the background like a never-ending disco ball, it's wise to use a process monitor, such as Supervisor – just to make sure that your command doesn't take a nap.

As our trusty `pulse:check` command is a marathon runner, not a sprinter, it might miss updates to your codebase without a good ol' fashioned restart. So when you're deploying your application, remember to give the command a gentle nudge with the `pulse:restart` command:

```shell
php artisan pulse:restart
```

Phew! Remember, Pulse stores those restart signals in its cache (you can think of it as the ultimate message center), so make sure your cache driver is properly configured for your application before you start this party.

Hope that helps you keep the beats pumping and the records spinning in sync with Laravel's magical event framework! 🎉🎧💿

 Alright, buckle up, programmers! Let's dive into the world of Laravel's Recorders - the unsung heroes of your application's data preservation squad!

These bad boys are on a mission: to capture all those entries from your app and stash them away in the Pulse database for safekeeping. To enlist them, you'll need to introduce them at the `recorders` section of the [Pulse configuration file](#configuration).

<a name="cache-interactions-recorder"></a>
Now, hold onto your keyboards because we're about to talk about the Cache Interactions Recorder! This is like having a personal data detective, always keeping an eye on the caching shenanigans happening within your app. It logs every cache interaction for further analysis, ensuring your application runs as smoothly as Silicon Valley's favorite coffee shop (you know, the one with the free Wi-Fi).

So there you have it! Recorders – making sure your data doesn't end up lost in the digital wilderness like a Tamagotchi left on a bus. Keep coding, and remember: when in doubt, let the recorders sort it out! 🎼📝🚀

 Ahoy there, Captain Cache! Buckle up for a wild ride through the fascinating world of Laravel's CacheInteractions! This delightful contraption is like your very own dashboard for all things cache-related, keeping tabs on those precious hits and misses in your application. The action unfolds right on the Cache card, making it as easy as pie (or cake, if you will) to keep an eye on your application's caching behavior!

Now, let's talk customization. You can tweak the sample rate or even set some ignored key patterns, giving you a cache experience tailored just for you. Just like a personalized pirate parrot!

But wait, there's more! With key grouping, we're taking caching to new heights (or depths, if you will). Similar keys are now bundled together as one entry, making it easier than finding buried treasure in your cache logs. Need an example? No problem, matey!

```php
Recorders\CacheInteractions::class => [
    // ...
    'groups' => [
        // '/:\d+/' => ':*',
    ],
],
```

In this case, the first pattern that matches will be your key's captain. If no patterns match, well then, ye olde key shall be captured as-is! Arrrr!

Now, grab a grog and sail away on the high seas of caching success with Laravel's CacheInteractions – the perfect companion for any daring pirate developer!

 Alrighty, let's dive into the world of `Exceptions`! This bad boy is like your app's personal detective, tirelessly sniffing out those pesky errors that might occur during your application's daily capers. The juicy deets about these reportable exceptions get stored away for a grand reveal on the swanky [Exceptions](#exceptions-card) card.

Now, if you fancy yourself a bit of a Sherlock Holmes, you can tweak the [sample rate](#sampling) and even ignore certain exception patterns, just like a seasoned pro! You can also decide whether to capture the exact location where the crime was committed (er, the exception originated). This nifty information will be showcased on the Pulse dashboard, making it easier than pie to trace back the culprit.

However, keep in mind that if one exception happens to play multiple roles in different locations, each unique location will get its own shoutout – kind of like an Oscar nomination for errors!

<a name="queues-recorder"></a>
Now, where were we? Ah yes, the `Exceptions` recorder – your app's personal gumshoe, always on the case!

 Ahoy there, Queue Captain! Set a course for smoother sailing with Laravel's `Queues` navigator! This trusty companion keeps tabs on your application's queue like a ship's log, only cooler and more efficient.

Anchored neatly on the [Queues](#queues-card), you can set sail and explore the depths of your queue data without breaking a sweat (or a ship's wheel).

Fancy adjusting the speed at which our Queue Captain keeps an eye on things? You can optionally tweak the [sample rate](#sampling). Need to filter out some rowdy jobs causing a ruckus in your queues? Set sail for the [ignored jobs patterns](#sampling) and let them walk the plank!

Want to keep tabs on those laggardly jobs? Check out our nifty [Slow Jobs Recorder](<a name="slow-jobs-recorder"></a>) - it's like having a deckhand constantly on watch for anything slowing us down. Arr matey, smooth sailing ahead! 🌈⚓️

 Ahoy there, Captain! Buckle up as we dive into the thrilling world of Laravel's SlowJobs recorder - the swashbuckling sidekick every pirate ship needs! ☠️

This fearless little fellow keeps tabs on those pesky slow jobs that are causing your application to walk the plank of performance. You can find these renegade jobs on the [SlowJobs](#slow-jobs-recorder) card, making them easier to spot than a one-legged sailor on a ghost ship! 🏴‍☠️

Now, you've got the option to tweak the slow job threshold, sample rate, and even ignore certain job patterns. Just remember that adjusting these settings is like deciding whether to take the long route through treacherous waters or the shortcut across Davy Jones' Locker - choose wisely! 🌊

```php
Recorders\SlowJobs::class => [
    // ...
    'threshold' => [
        '#^App\\Jobs\\GenerateYearlyReports$#' => 5000,
        'default' => env('PULSE_SLOW_JOBS_THRESHOLD', 1000),
    ],
],
```

So, if you've got some jobs that are known to be slow as molasses in January, don't fret! You can set custom thresholds for each job like a seasoned pirate adjusting the ship's compass. 🌐

Now, if no job's classname matches any of your regular expression patterns, fear not, matey! The 'default' value will come to your rescue, just like a trusty parrot perched on your shoulder. 🦜 🍔

Fair winds and following seas, mateys! May your Laravel application sail smoothly through the vast ocean of code! ⛵️

 Alright, let's dive into the whimsical world of Laravel's `SlowOutgoingRequests` recorder! Imagine it as a digital version of your nosy neighbor, always keeping tabs on who's coming and going from your house (or in this case, HTTP requests).

This friendly spy records outgoing HTTP requests made using our very own Laravel [HTTP client](/docs/{{version}}/http-client), but only the ones that take longer than the time you set to appear on the hilariously named [Slow Outgoing Requests](#slow-outgoing-requests-card) card.

You're welcome to adjust the slow outgoing request threshold, sample rate, and even ignore certain URL patterns if you don't want them hogging the spotlight. It's like having a personal bouncer for your HTTP requests!

Now, some requests might be slower than others - no judgment here! If that's the case, you can set custom thresholds for specific requests:

```php
Recorders\SlowOutgoingRequests::class => [
    // ...
    'threshold' => [
        '#backup.zip$#' => 5000, // Backups better take their sweet time!
        'default' => env('PULSE_SLOW_OUTGOING_REQUESTS_THRESHOLD', 1000), // For everyone else...
    ],
],
```

If no pattern matches the request's URL, it defaults to the 'default' value. Simple as that!

You can also group similar URLs together to keep things tidy. For example, you might want to ignore unique IDs in URL paths or group by domain only. Grouping is done using regular expressions to perform a magical "find and replace" on parts of the URL:

```php
Recorders\SlowOutgoingRequests::class => [
    // ...
    'groups' => [
        // Group all GitHub API requests under one entry.
        '#^https://api\.github\.com/repos/.*$#' => 'api.github.com/repos/*',
        // Group by domain only, ignoring any numbers after the domain name.
        '#^https?://([^/]*).*$#' => '\1',
        // Group all requests with a number at the end into one entry.
        '#/\d+#' => '/*',
    ],
],
```

The first pattern that matches will be used, and if none match, the URL will remain unchanged. Happy grouping!

 Ahoy there, Captain Query! Sail through the seas of your Laravel application, but watch out for the Kraken of Slow Queries!

The mighty Kraken, or as we like to call it, the `SlowQueries` recorder, is here to ensure your voyage doesn't hit a snag due to those pesky queries that linger longer than a cat on a hot roof. This fearsome creature captures any database queries that exceed the time limit you set (more on that later).

Now, don't worry if you think the Kraken is too aggressive, for it can be tamed! You have the power to adjust its temperament – or in Laravel terms, the slow query threshold, sampling rate, and ignored query patterns. And, if you fancy a bit of detective work, you can even configure it to reveal the query's hiding spot on the Pulse dashboard!

But beware! If one query hides in multiple places, the Kraken may show its many heads – each time it reveals itself from a different location.

You might have queries that are supposed to take forever (we all know that report generation can be a drag). In such cases, the Kraken allows you to set per-query thresholds like so:

```php
Recorders\SlowQueries::class => [
    // ...
    'threshold' => [
        '#^insert into `yearly_reports`#' => 5000,
        'default' => env('PULSE_SLOW_QUERIES_THRESHOLD', 1000),
    ],
],
```

In simpler terms, if the query matches a regular expression pattern, the Kraken will use that specific threshold. If not, it defaults to the 'default' value you set. Happy sailing!

 Alrighty, let's dive into the world of our application's requests, shall we? The trusty `Requests` recorder is like a digital paparazzo, snapping pics of every request your app receives for the exclusive use of the [Slow Requests](#slow-requests-card) and [Application Usage](#application-usage-card) VIP parties.

Now, this paparazzo has got some options: you can tweak the slow route threshold (how fast or slow a request should be to get snapped), adjust the sample rate (because who needs more photos of that one boring event?), and ignore certain paths (let's face it, nobody wants to see pics from the server room).

Every request is unique, like snowflakes, but some are more special than others. For those extraordinary requests, you can set personalized thresholds:

```php
Recorders\SlowRequests::class => [
    // ...
    'threshold' => [
        '#^/admin/#' => 5000,
        'default' => env('PULSE_SLOW_REQUESTS_THRESHOLD', 1000),
    ],
],
```

If the request's URL doesn't match any of the patterns, well, then it'll just use the ol' default threshold. Now that we've got our paparazzo all set up, let's get snappin'!

<a name="servers-recorder"></a>

 Ah, the `Servers` dancefloor! It's not just about boogying down with your application - it's a pulse-pounding, rhythmic exploration of your servers' CPU, memory, and storage usage. The data collected from this high-energy performance is then served up on the flashy [Servers](#servers-card) disco ball for all to see.

But here's the kicker - this dance-off requires the [pulse:check command](#capturing-entries) as its opening act on every server you want to join in. Think of it like a bouncer checking IDs at the door; your servers have got to prove they've got what it takes to make an appearance.

Each reporting server needs to bring its unique moves to the floor, so let's give them a name - by default, Pulse uses PHP's `gethostname` function to find their stage names, but you can always call 'em something else with a friendly nudge from the `PULSE_SERVER_NAME` environment variable:

```bash
PULSE_SERVER_NAME=load-balancer
```

And if you fancy yourself a bit of a choreographer, the Pulse configuration file lets you customize the directories that are monitored. Now let's get this party started!

 Ahoy there, fearless Laravel wranglers! Let's dive into the world of `UserJobs` – your app's very own party planner for the superstars behind the scenes. This trusty sidekick keeps tabs on who's calling the shots in your application, so you can catch a glimpse of the action on the [Application Usage](#application-usage-card) card.

But fear not if you fancy some customization! You have the liberty to tweak the [sample rate](#sampling), ensuring that your app's party line is buzzing with just the right amount of chatter. And, if you're tired of hearing about certain jobs, you can always ignore them by adjusting the job patterns – just like muting a pesky telemarketer during dinner!

So there you have it! Keep your eyes on the (partying) ball and let `UserJobs` handle the guest list for you. Now, who's ready to boogie? 💃🕺🎶

 Ah, the `UserRequests` - your application's very own red carpet event reporter! This little champ keeps tabs on the glamorous guests (or should I say, users) attending your app shindig. Their fabulous deeds are then showcased on the swanky [Application Usage](#application-usage-card) card - a true must-see for any digital paparazzo.

Now, don't be shy to make this bash even more A-list with a few tweaks! You can optionally crank up (or down, depending on your preference) the [sample rate](#sampling) like a DJ spinning records at a club - just adjust it to ensure the perfect balance between accuracy and performance.

And let's face it, not everyone wants their photo taken or their requests recorded – so you can also ignore certain URL patterns, giving them a much-deserved VIP pass to privacy.

<a name="filtering"></a>
Remember, this is your application's red carpet event - make it exclusive, make it glamorous, but most importantly, make it unforgettable! 🌟

 ### Flitering, the Secret Sauce to Your Data's Success! 🎉🍔

Alright, buckle up, my data-loving friend! We all know how those recorders love to churn out entries faster than a hot dog stand on a summer day. But sometimes, you might want to sift through your records like a seasoned sommelier sorting fine wine, and that's where our friendly `filter` method comes into play!

Imagine being at a fancy dinner party, and you're surrounded by VIP guests - some are administrators (let's call them the party planners). Now, we don't want those party planners to mingle with our regular guests, right? So, we need a bouncer for this data shindig! 🕺️💃

In Laravel-speak, that bouncer is a closure. You pass it to Pulse's `filter` method, and here's how you can do the dance:

```php
Use all the right moves (aliases)! 🕺️

use Illuminate\Support\Facades\Auth;
use Laravel\Pulse\Entry;
use Laravel\Pulse\Facades\Pulse;
use Laravel\Pulse\Value;

/**
 * Let's start the party!
 */
public function boot(): void
{
    Pulse->filter(function (Entry|Value $entry) {
        return Auth::user()->isNotAdmin(); // If our guest is a party planner, kick 'em out! 🙅‍♂️
    });

    // ...and the music keeps playing!
}
```

Remember, this bouncer should do its thing within your application's `AppServiceProvider` during the bootstrapping process. It's like setting up the guest list before the party starts! 🎊🎉

Now that we've got our data party under control, let's talk performance! 🚀📈 Keep an eye on your data speed - it's more crucial than a well-timed punchline at a comedy club. We'll dive into that in another section! Until then, happy filtering and remember: "Data is the new black" 😎✨!

 Alrighty then! Buckle up, because we're about to unveil the secret sauce that makes Pulse a speed demon in the world of Laravel apps. No need for a fancy new car or an overhaul – this bad boy fits seamlessly into your existing ride without breaking a sweat (or your bank account).

But hey, if you're expecting the Indy 500 and find yourself in a VW Bug instead, fear not! For those high-octane apps that can't seem to get enough action, we've cooked up some tasty tricks to ensure Pulse doesn't slow your roll.

<a name="using-a-different-database"></a>

### Swap Databases like a Pro! 🤓

Ever felt that old database just wasn't cutting it? Fret not, for you can upgrade to a sleeker model without having to rebuild your entire app from scratch. Just like swapping out your rusty cassette deck for a shiny CD player, switching databases is as simple as changing a few lines of code! 🎶🔩

Bye-bye MySQL, hello MongoDB (or whatever tickles your fancy) – we're all about giving you the freedom to mix and match components until you hit that sweet spot of performance! So go ahead, get databases-ing! 😎🚀

 ### Unleashing Pulse: The Database Diva! 🚀

Ready to party like it's 1985(DB) with our glamorous database diva, Pulse? Here's how you can ensure she keeps the dance floor all hers, without cramping your style (or impacting your app's database).

For those high-traffic events where you don't want your app's DJ getting mixed up in Pulse's groove, it's time to call the shotgun on a dedicated database connection.

Now, let's get this party started with some custom settings! You can tailor the [database connection](/docs/{{version}}/database#configuration) that suits Pulse best by setting the `PULSE_DB_CONNECTION` environment variable, like so:

```bash
PULSE_DB_CONNECTION=pulse
```

Just remember to give her the right dance floor (connection), and Pulse will have your guests dancing all night long! 💃🕺️🌈🎊

<a name="ingest"></a>

 Alrighty, let's dive into the thrilling world of Redis Ingest! (Cue drum roll) 🥁

> 🚨🚨🚨 WARNING! 🚨🚨🚨
> The Redis Ingest is a high-stakes operation requiring Redis 6.2 or greater and either `phpredis` or `predis` as your Redis client driver. So, make sure you've got your cowboy hat, sheriff badge, and a sturdy steed - we're about to ride into the wild west of data storage! 🤠

By default, Pulse is like the friendly neighborhood postman, delivering entries straight to your [database connection](#using-a-different-database) after the client has received their mail or a job has been processed. But, if you fancy yourself more of a cowboy than a postman, you can switch to the Redis Ingest driver, acting as a modern-day Pony Express! 🐎

To enable this feature, just set the `PULSE_INGEST_DRIVER` environment variable:

```ini
PULSE_INGEST_DRIVER=redis
```

Pulse will use your default [Redis connection](/docs/{{version}}/redis#configuration) by default, but you can customize this via the `PULSE_REDIS_CONNECTION` environment variable:

```ini
PULSE_REDIS_CONNECTION=pulse
```

> 🚨🚨🚨 WARNING! 🚨🚨🚨
> When using the Redis Ingest driver, ensure your Pulse installation doesn't share a Redis connection with your Redis-powered queue, if you have one. This is like having two cowboys sharing a horse - it might get a bit messy! 🐎

Once you've mounted your steed (aka ran the `pulse:work` command), you'll be tasked with monitoring the Redis stream and moving entries from Redis into Pulse's database tables.

```php
php artisan pulse:work
```

> [!NOTE]
> To keep your trusty steed running in the background, you should use a process monitor such as Supervisor to ensure it doesn't wander off.

As the `pulse:work` command is a long-lasting rodeo, it won't notice changes to your codebase without being reined back in (restarted). You should gently restart the command during your application's deployment process:

```shell
php artisan pulse:restart
```

> [!NOTE]
> Pulse uses its trusty old cache to store restart signals, so you should make sure that a cache driver is properly configured for your application before using this feature.

Now that you've got the Redis Ingest under your belt (or rather, your saddlebag), you can gallop off into the sunset of efficient data management! 🌅 🎉

 Ahoy there, Captain! Buckle up as we delve into the thrilling world of Pulse, your faithful navigator in the vast sea of your Laravel application events. By default, it's like having a parrot on your shoulder, squawking about every single tidbit happening onboard. But for those swashbucklers dealing with high-traffic applications, this could lead to a treasure trove of data so immense that you'd need a dragon to sort through it all!

Fear not, brave adventurer! You can enable the mystical power of "sampling" on select Pulse data recorders. Imagine setting your sample rate to `0.1` on the [User Requests](#user-requests-recorder) recorder, transforming your ship from a meticulous historian into a swift pirate, only logging approximately 10% of your requests. In the dashboard, the values will be scaled up and adorned with a spiffy `~` to indicate they're an estimate, not the cold hard truth.

In essence, the more data points you have for a particular metric, the lower you can safely set the sample rate without losing too much pirate gold (accuracy). So, yarr matey! Set sail with confidence, and let your treasure map guide you to the right balance between data density and accuracy.

Happy sailing! 🏴‍☠️🎉🌴

 ### Haircut Corner: The Barber's Secret Weapon - AKA Trimming! 💇‍♂️💇‍♀️

Ah, the sweet scent of freshly trimmed data entries! That's what you'll get when you unleash Pulse upon your database. Fear not, for this isn't a sudden, unprovoked attack - it's a well-planned, perfectly timed operation, akin to a master barber's precision cut.

Pulse's built-in time travel technology (okay, it's just a fancy lottery system) ensures that only entries venturing beyond the dashboard window are trimmed, ensuring your valuable data remains intact and unruffled. Customize this stylish lottery system in the Pulse [configuration file](#configuration), because who doesn't want to be their own barber, right? 🤓

<a name="pulse-exceptions"></a>
But what happens when a stray entry slips through the nets and grows into an unruly, unwanted visitor? Fret not, for Pulse has an exception handling feature to keep you safe from data mishaps! When these rare occurrences happen, our friendly error messages will guide you like lighthouses in a stormy sea. Now, isn't that just the epitome of customer service? 🌈📝

 ### Dealing with Pulse Snafus, the Silent Disco Style

In the event that a dance move goes awry during Pulse data collection (like tripping over the storage database's bell-bottom pants), fear not! Pulse will shimmy off into the corner without causing a scene to keep your application's groove alive.

But if you fancy yourself as a disco DJ and wish to spin some custom tunes when these mishaps occur, go ahead and provide a dance routine for the `handleExceptionsUsing` method:

```php
Use yer best disco moves, here!

\use Laravel\Pulse\Facades\Pulse;
\use Illuminate\Support\Facades\Log;

Pulse::handleExceptionsUsing(function ($e) {
    Log::debug('Disco inferno in Pulse', [
        'message' => $e->getMessage(),
        'stack' => $e->getTraceAsString(),
    ]);
});
```

Now, let the good times roll, and don't forget to check the logs for any unexpected twists! 🕺️💃️🎉

 ## Custom Cardiac Comedy Routines 🎭

Step right up, folks! With Pulse, you can craft personalized comedy routines to tickle the fancy of your application's unique sensibilities. Just like a stand-up gig, we're using Livewire - Laravel's own late-night talk show host 🎤 - so make sure to brush up on your jokes by checking out [Livewire's docs](https://livewire.laravel.com/docs) before hitting the stage with your first custom comedy routine!

<a name="custom-card-components"></a>

Now, don't be shy - let's dive into crafting those punchlines! 🥳

1️⃣ **Setting Up Your Custom Card Component**: Think of this as writing the perfect opening monologue. First, create a new component and give it your unique comedic flair:

```php
php artisan make:livewire my-custom-card
```

2️⃣ **Adding Your Jokes (Props)**: Just like props on stage, Livewire lets you pass data to your custom card for maximum humor impact. Add any necessary props in the `MyCustomCard` class:

```php
public $joke; // Holds our joke punchline

protected $props = ['joke'];
```

3️⃣ **Writing Your Act**: This is where the real fun begins! Write your routine by defining the card's rendering in the `render()` method:

```php
public function render()
{
    return view('livewire.my-custom-card', [
        'joke' => $this->joke, // Don't forget to pass our joke!
    ]);
}
```

4️⃣ **Sharing the Laughter**: If you want your jokes to be heard by everyone, use Livewire's `with()` method to share the props with other components:

```php
public function shareJoke()
{
    return [
        'joke' => $this->joke, // Share our joke with the world!
    ];
}
```

5️⃣ **Performing Your Act**: Finally, mount your custom card in your application using Livewire's `Mount()` method:

```php
use Livewire\Component;

class MyCustomCard extends Component
{
    // ...
}
```

And that's a wrap! Now you can deliver laughter wherever your application goes 🎭🚀!

 Alright, let's dive into the world of Laravel Pulse Card components, where customization meets fun! 🎉

First things first, creating a swanky new card involves extending the base `Card` component like you would extend your best friend in a sleepover (but with more code). Here's how to do it:

```php
namespace App\Livewire\Pulse;

use Laravel\Pulse\Livewire\Card;
use Livewire\Attributes\Lazy;

#[Lazy]
class TopSellers extends Card
{
    public function render()
    {
        return view('livewire.pulse.top-sellers');
    }
}
```

When you decide to take advantage of Livewire's lazy loading feature (because who doesn't love a good power nap?), the `Card` component will automatically provide a placeholder that's as considerate as your mother-in-law about your `cols` and `rows`. 😉

Now, when crafting your Pulse card's corresponding view, you can use Pulse's Blade components to maintain a consistent, polished look:

```blade
<x-pulse::card :cols="$cols" :rows="$rows" :class="$class" wire:poll.5s="">
    <x-pulse::card-header name="Top Sellers">
        <x-slot:icon>
            ...
        </x-slot:icon>
    </x-pulse::card-header>

    <x-pulse::scroll :expand="$expand">
        ...
    </x-pulse::scroll>
</x-pulse::card>
```

The `$cols`, `$rows`, `$class`, and `$expand` variables need to be passed to their respective Blade components so the card layout can be customized from the dashboard view. You might also wish to include the `wire:poll.5s=""` attribute in your view to have the card automatically update like a well-oiled machine.

Once you've defined your Livewire component and template, the card can be included in your [dashboard view](#dashboard-customization):

```blade
<x-pulse>
    ...

    <livewire:pulse.top-sellers cols="4" />
</x-pulse>
```

Oh, and just a heads up, if your card is part of a package, you'll need to register the component with Livewire using the `Livewire::component` method (that's Laravel's way of saying "please be my friend").

Remember, with great power comes great responsibility. Now go forth and create stunning cards that will make your dashboard the talk of the town! 🌟🚀

 Alright, mate! If you're feeling like your card is just another drab suit in a sea of suits (Laravel's default suits, that is), fear not! Let's give it some zhoosh!

<br>

First off, if you're using Vite, you can whip up some custom CSS for your cards like a pro. Just create a new file under `resources/css`, name it something fabulous (or related to your card), and get stylin'! Remember, less is more—unless you're going for that 80s neon look, in which case, go wild!

<br>

But if Vite ain't your cup of tea, don't worry. You can still make your card stand out like a peacock at a penguin party. Just add your CSS to the global styles in `resources/css/app.css`. But remember, it's like joining a cool kid's dance-off—make sure your moves complement the rest of the group!

<br>

And for those who prefer to keep things simple, Laravel provides some handy utility classes that can help you style your card without breaking a sweat. Just drop in one or more of these classes to add some pizzazz! But remember, just because it's easy doesn't mean the results won't be dazzling.

<br>

So go forth and make those cards sparkle like a unicorn farting glitter! And if you ever need help, Laravel is always here to offer a helping hand (or paw, if you prefer). Happy styling!

 Alright, Laravel enthusiasts! 🤘 Let's talk about a fancy dance between Laravel and the supercharged Vite. 🚀 If your custom card is the life of the party within your application's codebase, and you're rocking Laravel's Vite integration like a boss, it's time to update your `vite.config.js` file with some style!

```js
Here's where we pull out our magical incantation:

laravel({
    input: [
        'resources/css/pulse/top-sellers.css', // ... and the rest of your fabulous card styles
    ],
}),
```

Now, with great power comes great responsibility! You can now use the `@vite` Blade directive in your dashboard view, like a modern-day wizard summoning CSS for your card:

```blade
<x-pulse>
    @vite('resources/css/pulse/top-sellers.css') // Abracadabra! Your card's style appears before your eyes!

    ...
</x-pulse>
```

So, when you're ready to make your custom card look like a million bucks without lifting a finger (well, almost), give this little secret a try! 🌟

 Alrighty, buckle up for some style tips on how to make your Pulse cards dance with those CSS flairs! 🕺️💃️

For the offbeat situations like when your Pulse cards are part of a traveling circus (just kidding... sort of), you can tell Pulse to don some snazzy outfits by crafting a `css` function within your Livewire component. This super-talented function returns the address where your fabulous CSS file resides:

```php
class TopSellers extends Card
{
    // ...

    protected function css()
    {
        return dirname(__FILE__) . '/../../dist/top-sellers.css';
    }
}
```

When this card takes center stage on your dashboard, Pulse will perform a magic trick and weave the contents of this file right into a `<style>` tag. No more pub-lick (public directory) debuts needed! 🎉🕺️💃️

Now, for those who like to live on the wild side with Tailwind, we've got you covered too! Simply unleash your inner designer and customize your card styling with Tailwind's power-packed utility classes. But remember, with great power comes great responsibility. Don't forget to keep things accessible and maintainable for all! 😉💅️✨

 Alright, Laravel pals! Let's chat about Tailwind CSS - the design system that makes you look like a CSS wizard without actually having to learn all those pesky selectors and properties by heart.

Now, when you're ready to rock with Tailwind, it's crucial to set up a swanky little CSS dance floor. Here's an example of how to do just that, minus the default base styles (Tailwind's Preflight) because we all know those are already serving drinks at the bar.

```css
*Cue the spotlight*: @import "tailwindcss/theme.css";

Now let's get our selector game on point with a custom dance move:
@custom-variant dark (&:where(.dark, .dark *));

Let's set up our playlist: @source "./../../views/livewire/pulse/top-sellers.blade.php";

Time to make our own moves at the party with some fresh theme ideas:
@theme {
  /* ... */
}

And finally, let's create a dance floor: #top-sellers {
    @import "tailwindcss/utilities.css" source(none);
}
```

Just don't forget to slap an ID or class on your dance partner (card's view):

```blade
<x-pulse::card id="top-sellers" :cols="$cols" :rows="$rows" class="$class">
    ...
</x-pulse::card>
```

And voila! Now you and Tailwind are the life of the party, dancing away to CSS harmony without any awkward steps. 🕺💃

 ### Data Wrangling and Shenanigans! 🕵️‍♂️📊

Custom cards can nose around and flaunt data from any ol' place, but why be a lone wolf when you can harness Pulse's data-recording juggernaut and data-aggregation party machine? 🎉🚀

<a name="custom-card-data-capture"></a>

*Oh, and don't forget to check out the section on custom card data capture down below! 📝🔍*

 Alrighty then! Let's get our Laravel pulses racing with Pulse, shall we? This bad boy lets you jot down "entries" using the `Pulse::record` method that's as easy as pie (but way more powerful).

```php
use Laravel\Pulse\Facades\Pulse;

Pulse::record('user_sale', $user->id, $sale->amount)
    ->sum()
    ->count();
```

First up, the `type` for your new entry is like the flavor of your ice cream sundae – you pick! The `key` is the topping that ties it all together. In our case, it's the user's ID and the sale amount (yum!). But wait, there's more! To really get the party started, you'll need to toss in a `value` to be added up like chips on your nachos. Here, we're adding up the sale amount with style.

Afterward, you can call one or more aggregation methods (like a salsa dance at a taco party) so Pulse can gather pre-aggregated values into "buckets" for later, easy retrieval – because who has time to sift through nachos?

The available moves are:

* `avg` – the average chip count per user
* `count` – the total number of chips consumed
* `max` – the most chips on one user's plate (may the best chip win!)
* `min` – the least chips on a user's plate (oops, they dropped some)
* `sum` – the grand total of all chips combined

> [!NOTE]
> When crafting a card package that records the ID of the currently authenticated user, use the `Pulse::resolveAuthenticatedUserId()` method, which respects any [user resolver customizations](#dashboard-resolving-users) made to your app like adding tasty toppings to an already delicious sundae.

<a name="custom-card-data-retrieval"></a>
Now that you've got the basics down, it's time to let your Laravel Pulse dance! 💃🕺️

 Alright, grab your data cowboy hats and saddle up! In the Wild West of Laravel's Pulse Land, we've got ourselves a shiny new Livewire `Card` component called Top Sellers. Now, when you roam around this component, you can rustle up some aggregated data for the current dashboard view with the help of the `aggregate` corral (method).

```php
class TopSalesWrangler extends Card
{
    public function cookDataOnAnOpenFire(Cowboy $campfire) // Yes, we're being dramatic here.
    {
        return view('livewire.pulse.top-sellers', [
            'ranchHand' => $this->aggregate('user_sale', ['sum', 'count']) // Ain't that a catchy name!
        ]);
    }
}
```

The `aggregate` corral returns a herd of PHP `stdClass` objects, each with the `key` branded earlier and keys for each requested aggregate. To show them off at your local saloon:

```blade
@foreach ($ranchHand as $cowboy)
    {{ $cowboy->key }} // Rider's name
    {{ $cowboy->sum }} // Money earned by the cowboy
    {{ $cowboy->count }} // Number of sales made by the cowboy
@endforeach
```

Pulse corrals data primarily from pre-aggregated buckets, so those aggregates better already be captured using the `Pulse::brandYourCattle` method before you rope them in. The oldest bucket usually grazes outside the current period, so Pulse wrangles up the oldest entries and includes them to give you an accurate count of the entire period without having to roam the entire range every time you make a poll request.

If you want to get your hands on a grand total for a specific type, why not use the `aggregateTotal` corral method? For instance, this code will give you the total number of all user sales instead of categorizing them by user:

```php
$total = $this->aggregateTotal('user_sale', 'sum');
```

Happy herding, partner!

 Alright, let's dive into the wild world of Laravel user management! 🦍🌳

#### Unleashing Users from their ID Cages 🔓🐒

When you're dealing with aggregates that have user IDs as their jailors, fear not! You can sprinkle some `Pulse::resolveUsers` magic to unlock those keys and set the prisoners free:

```php
$aggregates = $this->aggregate('user_sale', ['sum', 'count']);

Unlock the cage, my friend! Let's free our users with:
$users = Pulse::resolveUsers($aggregates->pluck('key'));

Now that our users are out and about, let's serve them in style with a view to remember:
return view('livewire.pulse.top-sellers', [
    'sellers' => $aggregates->map(fn ($aggregate) => (object) [
        'user' => $users->find($aggregate->key), 🔓🦍
        'sum' => $aggregate->sum,
        'count' => $aggregate->count,
    ])
]);
```

The `find` method is like a bounty hunter tracking down users based on their ID. It returns an object containing treasure trove information such as `name`, `extra`, and `avatar` keys. You can pass these directly to the `<x-pulse::user-card>` Blade component:

```blade
<x-pulse::user-card :user="{{ $seller->user }}" :stats="{{ $seller->sum }}" />
```

<a name="custom-recorders"></a>
And voila! You've just turned your users into stars on a red carpet. 🌟🎉

 #### Unleashing the Data Ninjas! 🥋

Ah, the world of custom recorders, a playground for the techno-ninja lurking within every package author! 🎃

These data-catching masters are here to help users tailor their data capturing skills to perfection.

To enlist these stealthy warriors, simply navigate to your application's `config/pulse.php` configuration file and add them to the 'recorders' section like so:

```php
[
    // ...
    'recorders' => [
        Acme\Recorders\NinjaDeployments::class => [
            // ...
        ],

        // ...
    ],
]
```

Our data-catching ninjas can eavesdrop on events by wearing a magical "listen" cloak (technically, it's a `$listen` property). Pulse will automatically recognize these covert operatives and dispatch them with the mission to execute their `record` method:

```php
<?php

namespace Acme\Recorders;

use Acme\Events\Deployment;
use Illuminate\Support\Facades\Config;
use Laravel\Pulse\Facades\Pulse;

class NinjaDeployments
{
    /**
     * The events to overhear.
     *
     * @var array<int, class-string>
     */
    public array $listen = [
        Deployment::class,
    ];

    /**
     * Catch the deployment!
     */
    public function record(Deployment $event): void
    {
        $config = Config::get('pulse.recorders.'.static::class);

        Pulse::record(
            // ...
        );
    }
}
```

Now, go forth and train your data ninjas to capture all the secrets of your applications! 🌟💥