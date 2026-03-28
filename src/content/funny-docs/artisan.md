 # The Artisan's Playground 🧛‍♂️🔩

## Welcome, Sorcerer! 👋

### Tinker (REPL) ☣️

Dive into the mystical realm of instant code execution with our very own Tinker - it's like having your very own genie in a bottle! 🧞‍♂️💡

<a name="writing-commands"></a>

## Command Creation (Magic Wands) 🪄🌟

### Generating Commands (Forge Your Own Spellbooks) 🔥📔

Create custom commands to conquer the digital frontier! Just remember, with great power comes great responsibility. 🦹‍♂️💥

<a name="command-structure"></a>
### Command Structure (Follow the Spell Recipe) 📝🔮

Unravel the secrets of crafting a successful command: Sign, Description, and Execution. Simple as Abracadabra! 🧙‍♂️🔍

<a name="closure-commands"></a>
### Closure Commands (Capture Your Powers) 🦸‍♂️💫

Enchant your commands with Closures, capturing the power of dynamic code within them! Just remember to keep it under control. 😈🔓

<a name="isolatable-commands"></a>
### Isolatable Commands (Contain Your Spells) ⚛️🧫

Isolate your commands with proper namespaces for a tidy and organized digital domain. 🏙️👷‍♂️

<a name="defining-input-expectations"></a>
## Input Expectations (Know Your Ingredients) 🛒🧪

### Arguments (The Key Ingredients) 🔑🍅

Specify the essential ingredients for your command, ensuring it brews to perfection. 🥄🍽️

<a name="options"></a>
### Options (Extra Toppings?) 🌮🧅

Add optional extras to your command's order, giving users the chance to customize their experience. Just remember, too many toppings can be overwhelming! 🤤💥

<a name="input-arrays"></a>
### Input Arrays (The Big Shopping List) 🛍️📝

Combine ingredients and options into a single array for convenience, but remember to keep it organized! You wouldn't want to forget an essential ingredient in your magic brew. 🧹🔍

<a name="input-descriptions"></a>
### Input Descriptions (Ingredient Labels) 📝📦

Clearly label each input, ensuring users can follow your command's recipe without confusion. 🧑‍🍳📚

<a name="prompting-for-missing-input"></a>
### Prompting for Missing Input (Asking Nicely) 🙇‍♂️💬

If an ingredient is missing, kindly prompt the user to provide it, ensuring a successful execution. 🧑‍🍳💭

<a name="command-io"></a>
## Command I/O (Communicating with Users) 🗣️📞

### Retrieving Input (Listening to Users) 🤵🏻‍♂️🎙️

Hear the user's request, gathering essential ingredients for your command. 👂🏼💬

<a name="prompting-for-input"></a>
### Prompting for Input (Gently Nudging) 🤓🔍

If an ingredient is missing, kindly ask the user to provide it, ensuring a successful execution. 🧑‍🍳💭

<a name="writing-output"></a>
### Writing Output (Sharing Your Results) 📝📸

Share your command's results with the world, allowing others to marvel at its power. 🤩🎉

<a name="registering-commands"></a>
## Registering Commands (Adding Them to Your Spellbook) 🧙‍♂️📝

### Command Discovery (Finding Your New Spells) 🔍📚

Ensure your new commands are found and added to your spellbook for easy access. 🗄️🕵️‍♂️

<a name="programmatically-executing-commands"></a>
## Programmatic Execution (Executing Spells Behind the Scenes) 🧙‍♂️🎩

### Calling Commands from Other Commands (Combining Powers) 🦹‍♂️💥

Unlock the power of synergy by calling one command from within another, unleashing a symphony of magic! 🔮🌟

<a name="signal-handling"></a>
## Signal Handling (Dealing with Distractions) 🚨📞

### Graceful Shutdown (Bowing Out) 🤵🏻‍♂️👋

Handle signals gracefully, allowing your commands to bow out when necessary without causing chaos. 🧩🏮

<a name="stub-customization"></a>
## Stub Customization (Personalizing Your Spellbook) 🖌️📝

### Customize Command Templates (Giving Them a Unique Look) 🎨💥

Add your own touch to command templates, ensuring your spellbook stands out from the rest. 🏆🧩

<a name="events"></a>
## Events (Magical Gatherings) 🌠✨

Stay in the loop with events happening within Laravel's mystical realm, keeping up with the latest spells and potions. 🎉🕵️‍♂️

 Alrighty then! Let's dive into the heart and soul of Laravel - the glorious Artisan, your personal genie in a command line bottle! You'll find this magical script nestled at the root of your application, like a digital gnome named "artisan".

Now, when you're feeling curious about what kind of wishes Artisan can grant, just type `php artisan list` and you'll be presented with a dazzling array of commands to help you on your development journey.

Each command is as charming as Cinderella's fairy godmother, complete with its own "help" screen. To summon this enlightening display, simply prefix the name of the command with `help`. For instance, to learn about the powerful `migrate` spell, cast the incantation `php artisan help migrate`.

So, don't be afraid to ask Artisan for a favor - it's always standing by, ready to assist you in creating your very own Laravel masterpiece!

 Ahoy there, matey! If you're sailing the seas of Laravel using our swashbuckling Sail as your shipyard, remember to speak its language – the `sail` command line! This scurvy dog will help ye invoke the mighty Artisan on yer behalf. Aye, it'll perform those pesky Artisan commands within yer application's Docker containers:

```bash
./shiver-me-timbers/vendor/bin/sail artisan list
```

Arrrr, remember to unfurl the Jolly Roger with this handy tip – yarr har har! <a name="tinker"></a>

 Ahoy there, coders and apprentices of the digital realm! Prepare to embark on a journey through the wondrous world of Laravel Tinker - the supercharged REPL (Read-Evaluate-Print Loop) for your favorite PHP framework. But fear not, this isn't just another acronym soup; it's powered by the enchanting PsySH package!

<a name="installation"></a>
**Hitchhiker's Guide to Installation**

So you want to join our magical mystery tour? First things first: make sure Laravel's installed on your ship (computer). Once that's squared away, simply unleash the PsySH package from its cosmic prison using composer:

```bash
composer require psysh/psysh
```

Next, let's give Tinker the keys to your kingdom:

```bash
php artisan tinker
```

And there you have it! You're now ready to wield this powerful tool and bend Laravel to your whims, like a true digital sorcerer. But remember, with great power comes... well, more power! So use it wisely. 🔮🔥

Now, let's chat about some of Tinker's tricks up its sleeve (or keyboard if you will).

<a name="commands"></a>
**Sleight of Code: Commands Galore**

Tinker offers a bewildering array of commands to help you navigate and manipulate your Laravel application like a Jedi master. Here are a few highlights:

- `App\Models\User::all()` - Retrieve all the users from your database, just like that!
- `$user = App\Models\User::find(1)` - Find a specific user, because who doesn't need a best friend in their code?
- `$user->update(['name' => 'New Name'])` - Change a user's name with the snap of a finger (or the press of a key).

The possibilities are endless! So go forth and conquer your Laravel app like never before, using Tinker as your trusty sidekick. May the code be with you! 🚀🌟

 Alright, grab a virtual pickaxe and dig into the world of Laravel Tinker! 🏃‍♂️✨

By default, your new Laravel application comes with this magical gem embedded like a secret treasure chest. But, if you've accidentally flung it overboard during a 'spring cleaning,' fear not! You can summon it back with just the right incantation:

```shell
composer require laravel/tinker 🎩✨
```

> [!Attention, Captain Obvious]
> If you're on the hunt for a Tinker upgrade that boasts hot reloading, multiline code editing, and autocompletion superpowers, then look no further than [Tinkerwell](https://tinkerwell.app)! 🌟✨

Now that you've got your Tinker back, let's see what it can do! But first, make sure to apply some sunscreen - coding with Laravel is a thrilling adventure that may leave you squinting in the light of productivity. ☀️😎

 Alright, buckle up, coding cowboys and codelettes! Here's your friendly guide to Laravel's Tinker – a command-line sidekick that turns you into the Lone Star Ranger of your application.

Ready to hitch your horse to this high-tech corral? Saddle up with the `php artisan tinker` Artisan command:

```shell
php artisan tinker 🐎🌵 (Yes, it's cowboy-themed. We know, we're fabulous.)
```

Fancy publishing Tinker's configuration file? No sweat! Use the `vendor:publish` command with your trusty sidekick:

```shell
php artisan vendor:publish --provider="Laravel\Tinker\TinkerServiceProvider" (Just make sure you don't accidentally rustle someone's Javascript herd!)
```

But hold on to your six-shooters! The `dispatch` helper function and the `Dispatchable` class's `dispatch` method rely on garbage collection to put jobs on the queue. So, when you're roping jobs in Tinker land, remember to use `Bus::dispatch` or `Queue::push` instead of a lasso!

```shell
// Better than a lasso, but just as Western...
Bus::dispatch($yourJobInstance);

// ...or this if you're feeling a bit more modern:
Queue::push($queueName, $yourJobInstance);
```

Now, let's ride off into the sunset of Laravel mastery, with Tinker as your trusty steed! 🌅🚀

 Ahoy there, sailor! Welcome to Laravel's Tinker Command Allow List - the pirate's treasure map of Artisan commands!

You see, in this mystical land called Tinker, we have a peculiar way of deciding which Artisan commands can set sail within its shell. It's like a crew list, but instead of shipmates, it's full of powerful commands! By default, you can board the good ships `clear-compiled`, `down`, `env`, `inspire`, `migrate`, `migrate:install`, `up`, and `optimize`.

But what if you want to expand your fleet? Fear not, brave adventurer! Just update the `commands` array in your trusty `tinker.php` configuration file like so:

```php
'commands' => [
    // App\Console\Commands\ExampleCommand::class,
],
```

Now you can add new command classes to your fleet without fear of being tossed overboard! Just remember, like a good pirate captain, always be careful who and what you allow on board. Happy sailing, matey!

 Ahoy there, fearless coder! Dive into the enchanting world of Laravel Tinker, where magic happens (and by magic, we mean code). But before you cast your first spell, let's talk aliases – or lack thereof.

You see, Tinker is a helpful little genie that often simplifies things for us by aliasing classes as we interact with them. Yet, just like a cat who refuses to be cuddled sometimes, you may find yourself in need of some classes remaining unaliased. No worries! You can make that happen by adding these reluctant classes to the `dont_alias` array within your `tinker.php` configuration file:

```php
'dont_alias' => [
    App\Models\User::class, // Ain't nobody got time for a friendly greeting from our favorite user model!
],
```

Now that you've tamed the unruly User model, go forth and explore the wonders of Laravel Tinker – where every key press brings us one step closer to conquering code!

 Alrighty, buckle up, coding cowboy (or cowgirl)! In the wild west of your Laravel project, you ain't just limited to the saloon's barkeep's drinks – you can brew your own hooch! That's right, we're talking about Artisan commands here.

If you find the default concoctions not up to your fancy whisky standards, it's high time to whip up some custom cocktails of your own. These potent brews usually reside in the `app/Console/Commands` saloon, but fret not if that ain't quite your cup of tea (or bourbon, as it were). You're free to stake out a claim in another part of town and set up shop!

Just remember to let Laravel know about your new digs so it can keep an eye out for your freshly poured concoctions. To do that, you'll need to [register your saloon with the sheriff](#registering-commands) – a simple howdy-doo between you and the law that'll ensure your custom cocktails are discoverable by all thirsty miners in town!

<a name="generating-commands"></a>
Now, let's saddle up and learn how to generate some new commands. With a twinkle in your eye and a flick of the wrist, you can create your own custom command with a single-shot command: `make:command`. Just point your six-shooter at the directory where you want to corral your new creation, and pull the trigger!

Once you've wrangled up your command, give it some love by tweaking its code. Make it dance, make it sing, but most importantly, make it work like a well-oiled machine! Don't forget to keep an eye on the horizon for any updates or changes – Laravel is always expanding its arsenal of tools and tricks, so be prepared to adapt and grow with it!

 Alrighty, let's get our coding caps on and dive into the world of Laravel command creation! 🧢🌊

First things first, you gotta summon your trusty Artisan sorcerer with a spell cast: `make:command`. This enchantment will conjure up a brand-new command class in a hidden realm known as `app/Console/Commands` (don't fret if it's MIA in your current app - the first time you utter the `make:command` incantation, it'll pop up faster than a Genie out of a bottle! 🧞‍♂️💫)

```shell
php artisan make:command SendEmails
```

Now that your new command class is born, you can start customizing its magical powers to send those emails like a boss! 📨🚀

 Alrighty then! Let's get our coding boots on and dive into Laravel's command structure! 🤘

First things first, after you generate your command like a boss, it's time to dress it up with some flair. You'll wanna define the command's signature and description using the `Signature` and `Description` attributes (like a fancy ballroom dance ✨). The `Signature` attribute is where you can set expectations for your command's input, making it easy for folks to figure out what they need to provide. The `handle` method gets called when your command is executed, so feel free to put all that brainy logic in there!

```php
<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Support\DripEmailer;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('mail:send {user}')]
#[Description('Why send a simple text when you can send a marketing email to a user?')]
class SendEmails extends Command
{
    // ... and so the spamming commences! 💌
}
```

Don't forget, for maximum reuse and minimal fuss, it's smart to keep your console commands light on their feet. In our example, we inject a service class to handle all that "heavy lifting" of sending emails (because who wants to code like it's 1999?)!

Now remember, the Laravel [service container](/docs/{{version}}/container) will automatically inject all dependencies that are type-hinted in this method's signature. It's like having a personal assistant at your service (without the awkward small talk). 🤖✨

<a name="exit-codes"></a>
And if things don't go as planned, fret not! Laravel commands can return exit codes to let you know when something has gone awry. Just remember: a happy user is a successful one! 😃🎉

 Alrighty then! Let's dive into the ticklish world of Laravel Exit Codes, shall we? 🤓

#### Party Favors: Exit Codes

Now, if your `handle` method ends without throwing a tantrum and executes flawlessly, it'll bid adieu with a zero exit code – just like a well-behaved child at bedtime. But you can always call the shots and customize that exit code by letting the `handle` method spit out an integer:

```php
Throwing a tanty: 'Something went wrong.'
Returning: 1
```

If you're feeling extra dramatic, you can "fail" the command from any of its methods. The `fail` method will throw a hissy fit and call it quits right then and there, returning a humble exit code of 1:

```php
Throwing a tanty: 'Something went wrong.'
Exit Code: 1
```

<a name="closure-commands"></a>
#### Closure Time!

And now, it's time for the grand finale – Closure Commands! It's like having your very own pet monkey that you can train to do tricks. You want it to fail? Just tell it 'Something went wrong.' and presto! The command will bid its farewell with a 1 in tow.

```php
Training your monkey: 'Something went wrong.'
Exit Code: 1
```

 ### Zinger Commands 🎆 (AKA "The Magic Mushroom Method")

If you're tired of writing command classes like a medieval scribe, it's time to upgrade to the mystical world of Zinger Commands! Just as route closures are a cooler cousin to controllers, Zinger Commands are the edgy sibling of traditional command classes. 😎

The `routes/console.php` file might seem like a dead-end for HTTP routes, but fear not! It's actually a secret door to your app's command center! Inside this magical lair, you can define all your Zinger Commands using the `Artisan::command` spell. 🔮 This enchanting incantation accepts two arguments: the [command signature](#command-signatures) and a closure that conjures up the command's ingredients (arguments and options).

```php
Artisan::command('mail:send {user}', function ($user) {
    $this->say("Prepare to send email to: {$user}! 📧🔥");
});
```

The closure is like a familiar (a magical helper, for the uninitiated) that's summoned with the underlying command instance. You now have access to all the usual helper methods, just as if you were using a full-fledged command class! 🌈✨

<a name="type-hinting-dependencies"></a>
And if you want to add some potions (AKA dependencies) to your brew, Laravel lets you type-hint them in the closure! 🧪🔥 This way, your Zinger Commands can be even more powerful and adaptable. 🤩🦄🚀

 Ahoy there, Captain! Sail the Laravel seas and let's talk about type-hinting dependencies, shall we? This piratey feature isn't just for your command's swashbuckling arguments and options – it also lets you bring aboard extra help from the service container (you can think of it as a ship's cargo hold filled with useful stuff).

Here's an example that should make ye feel like a right buccaneer:

```php
Avast, me hearties! Use App\Models\User and App\Support\DripEmailer,
and call upon the mighty Artisan (our ship's compass).

Artisan::command('mail:send {user}', function (DripEmailer $drip, string $user) {
    $drip->send(User::find($user)); // Arr matey! Let DripEmailer handle the mailin'!
});
```

So, you see, when ye type-hint these dependencies, Artisan will grab 'em from the service container for ya and pass 'em right along to your command. Now isn't that swell? Arrrr, happy coding!

 Alrighty, buckle up! We're about to dive into the delightful world of Closure Commands in Laravel Land. Now, when you're crafting your own closure-based command, fancy yourself as a mad scientist mixing potions in a cauldron (but replace the cauldron with PHP files and the potion with code).

To give your new brew a name and a purpose (because who wants a mysterious concoction?), you can use the `purpose` method. This magic spell casts a description that will appear when you conjure up the `php artisan list` or `php artisan help` incantations:

```php
Artisan::command('mail:send {user}', function (string $user) {
    // ...
})->purpose('Send a marketing email to a user');
```

Now you've got yourself a potent spell with a catchy name and an enticing description! Just remember, in the enchanting kingdom of Laravel, even your commands need a bit of personality. So get out there and craft some magical brews! (But please, be responsible with your newfound powers.) 🔮✨🚀

 Alrighty, let's dive into the magical world of Isolatable Commands! 🎩

🎉📣 **ATTENTION ALL DEVICES!** 📣🎉
To enjoy this feature, your application must be using one of our approved cache drivers: `memcached`, `redis`, `dynamodb`, `database`, `file`, or `array`. You know, like picking a favorite flavor at an ice cream shop - we've got options! 🍦 And just like that ice cream shop, all servers must be chatting it up with the same central cache server. Imagine if they didn't, you'd have vanilla and chocolate fighting over who gets served first! 🥪🍨

Now, imagine you want to make sure only one scoop of ice cream (command) is being dished out at a time. That's where the `Isolatable` interface comes in! Just like how your boss doesn't want two people taking credit for the same idea, Laravel doesn't want multiple instances of a command running concurrently.

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Isolatable;

class SendEmails extends Command implements Isolatable
{
    // ...
}
```

By implementing the `Isolatable` interface on your command class, Laravel will automatically give you the ability to spin that "Do Not Disturb" sign with the `--isolated` option. When this option is enabled, Laravel will play referee and ensure no other instances of your command are already running in progress. It's like having a bouncer at the ice cream shop, making sure everyone takes their turn!

```shell
php artisan mail:send 1 --isolated
```

If you want to customize the exit status code that the command should return when it can't execute (because the dance floor is already full), you can specify it via the `--isolated=<status_code>`.

```shell
php artisan mail:send 1 --isolated=12
```

So there you have it! Isolatable Commands - keeping your Laravel application's ice cream shop running smoothly and orderly. Enjoy the party, folks! 🎉🍦🎈

 Ah, the world of Laravel locks! It's a bit like trying to herd cats in a tea party, but with more code and less scones. By default, our friendly Laravel bot will use the command's moniker to craft the secret handshake string for securing your application's cache. But if you fancy a bit of customization (and who doesn't like a bit of flair?), you can define an `isolatableId` method on your Artisan command class, letting you blend the command's arguments and options into the key:

```php
/**
 * Get the isolatable ID for the command.
 */
public function isolateMyPartyInvite() {
    return $this->argument('user'); // Just imagine the command is throwing a fancy soiree
}
```

Now, you're not just locking down your app like a Fort Knox; you're locking it down with secret party invitations! Who knew coding could be this much fun? 🎉🥳

 Alright, buckle up, code cowboys! Here's a barrel of laughs on how to wrangle those lockdown timers in Laravel, without letting the sheriff's posse (aka commands) wander around town for too long!

By golly, you'd think these commands were running wild, but fret not, because by default, their lock expiration time is set to 'Once Upon a Command Finish.' But hold your horses, if our cowboy gets tied up and the command gets interrupted, don't worry, the lock will self-destruct in about an hour!

But, if you fancy being the town marshal of your own little shindig, you can adjust that lock expiration time by defining an `isolationLockExpiresAt` method on your trusty command steed:

```php
Yeehaw! Take a gander at this:
use DateTimeInterface;
use DateInterval;

/**
 * Determine when an isolation lock expires for the command.
 */
public function isolationLockExpiresAt(): DateTimeInterface|DateInterval
{
    return now()->add(minutes: 5); // That's 5 minutes, partner!
}
```

Now go on and tame those time-consuming commands into good little helpers that don't overstay their welcome! Keep coding like a lasso-wielding gunslinger, y'all! 🤠😉

 In the grand world of Laravel console commands, it's often necessary to engage in light banter with our users - and what better way to do that than through the use of arguments or options? Thankfully, Laravel has made this interactive experience as smooth as a well-oiled seagull, by offering you the chance to clearly state your expectations from your dear command-line companions.

The `signature` property on your commands serves as the perfect conversational icebreaker, allowing you to define a command's name, arguments, and options in one succinct, route-like syntax that would make even the most cynical user crack a smile (if they have one).

<a name="arguments"></a>
Now, let's get down to business. If you find yourself needing to gather some user input, don't hesitate to use command arguments! You can define them using square brackets `[]` for optional arguments and less-than and greater-than symbols `<>` for required ones. So, if your command needs a cup of coffee or two (we feel you), you might write something like this:

```
protected $signature = 'coffee make {amount}';
```

And there you have it! With just a bit of Laravel magic and a touch of humor, even the most mundane command can turn into a delightful exchange. Now, go forth and entertain your users while getting things done!

 ### Curly Braces Chronicles

In our Laravel universe, any user-provided data points and settings are swaddled in warm, embraceable curly braces. Let's take a peek at an example command where we've ensnared one required argument, the elusive `user`:

```php
/**
 * The title deed to this console command.
 *
 * @var string
 */
protected $signature = 'mail:send 👋 {user}';
```

But wait! What if you'd prefer your arguments to be optional, or perhaps bestow upon them a default value? Well then, allow me to present the following examples:

```php
// Make the user optional (sneaky, huh?)
'mail:send {user?}'

// User comes with a pre-determined alias...
'mail:send {user=foo}'
```

And there you have it, my dear Laravel voyager! Now go forth and command your universe with grace and panache. 🚀🌟✨

 ### Ahoy there, Captain!

In the grand seafaring voyage that is Laravel development, Options are the pirate's treasure map to user input, aye, matey! Just like arguments, they help steer your ship towards the right destination. These swashbuckling companions are identified by a pair of hyphens (`--`) when summoned from the command line depths. But unlike their argument counterparts, Options come in two scurvy flavors: those with loot and those without!

Options devoid of booty operate as a binary 'aye-aye' or 'nay-nay', serving as a digital switch to turn features on or off. Let me demonstrate the parrot-like nature of this type of option:

```php
/**
 * Set sail with the command name and signature.
 *
 * @var string
 */
protected $signature = 'mail:send {user} {--queue}';
```

In this buccaneer tale, the `--queue` switch can be hoisted when setting sail with the Artisan command. If ol' `--queue` gets raised, it's a sign to prepare the ship for a long journey; the value of the option will be set to `true`. But if the `--queue` switch remains stowed away, the value will be as stubborn as a mule: `false`!

```shell
Yo ho ho and a bottle of rum! artisan mail:send 1 --queue
```

Next up, we set sail to uncharted waters with Options bearing valuables. But first, grab your peg leg and parrot, we're about to get loot-y!

<a name="options-with-values"></a>

### Arr Matey, Loot is Afoot!

If you thought our swashbuckling friends without loot were interesting, wait till you get a gander at their golden-hearted brethren. Options with treasures are a bit more demanding, requiring a value to complete their pirate quests. So let's hoist the Jolly Roger and plunder some examples!

```php
/**
 * Set sail with the command name and signature.
 *
 * @var string
 */
protected $signature = 'mail:send {user} {--queue} {--subject}';
```

In this bountiful treasure map, we've added a new switch named `--subject`. When you raise anchor with the Artisan command, you can provide a subject for your mail by specifying this switch. Let's say you want to wish a hearty "Happy Birthday!"

```shell
Yo ho ho and a bottle of rum! artisan mail:send John --queue --subject="Happy Birthday, Matey!"
```

And that's the pirate life for ye, Laravel devs! Treasure maps, loot, and swashbuckling switches all at your fingertips. Now, let's set sail for even greater adventures!

 Alrighty then! Let's dive into the world of Laravel options with some swanky values, shall we? 🚀

First off, when a user needs to slap a value on an option, tack on a humble `=` sign at the end:

```php
/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = 'mail:send {user} {--queue=}';
```

Now, imagine you're playing a game show, and the user is your contestant. They can holler out a value for this option just like this:

```shell
php artisan mail:send 1 --queue=default
```

If the user decides to skip the option when ringing the bell, no worries! It'll be as if they shouted `null` instead. 😂

You can even set up a cushy default value for those days when your users just aren't feeling it:

```php
'mail:send {user} {--queue=default}'
```

If our user forgets to bring their own option value, this default one will step in and save the day! 🎉

Now you know how to handle options with some pizzazz, Laravel-style! 🤘🎈️

 Alright, let's get this party started!

#### Option Shortcuts (A.K.A The Secret Shorthand Club)

Who doesn't love shortcuts? They're like the secret passwords to a magical world where you can make Laravel commands dance to your tune. To join the club, just follow these simple steps:

When defining an option, drop in your secret code before the main name, and use the `|` character as your secret agent decoder ring:

```php
'mail:send {user} {--Q|queue=}'
```

Once you've got your badge (command), it's time to show off your skills in the terminal. Remember, when using your secret code (shortcut), prefix it with a single hyphen and leave out the equal sign (`=`) when specifying a value for the option:

```shell
php artisan mail:send 1 -Qdefault
```

And there you have it! You're now part of an elite group of Laravel commandos, saving the day one shortcut at a time. Happy coding!

P.S. If you're still not feeling the vibe, remember: in this secret world, shortcuts are cooler than shades on a sunny day, and more efficient than a ninja skipping through traffic. Keep practicing and soon you'll be a pro! 😎🚀

 ### Starstruck Command Line! 🌟✨

If you're a fan of the spotlight and want to party like it's 1999, Laravel has got your back! 🚀

Ever wanted to invite multiple guests to an event without having to type their names one by one? Well, we've got just the trick for you! By using the magical `*` character, you can now define arguments or options that expect multiple input values. Let's dive in with a captivating example:

```php
'mail:send {user*}'
```

With this command, your friends (or should we say, `users`) can gracefully saunter into the party line by providing their names in order. For instance, if you want to set the values of `user` to an array with `1` and `2`, here's how you do it:

```shell
php artisan mail:send 1 2
```

Now that's what we call a red-carpet entrance! But wait, there's more! You can combine the `*` character with an optional argument definition to allow zero or more instances of an argument:

```php
'mail:send {user?*}'
```

You could even use this to host a never-ending dance marathon! 🕺️💃️ Let the good times roll!

 Ahoy there, Captain! It's time to hoist the sails of command line magic with Laravel's Option Arrays!

When you're defining a pirate who expects multiple treasures (or in our case, options), each booty chest should bear its proper name tag:

```php
'Groggy Mail: Send {--letter=*}'
```

Now, when ye be wantin' to send out a flurry of messages, ye can summon the mail sprite with multiple `--letter` compass readings:

```shell
php artisan Groggy Mail: Send --letter=1 --letter=2
```

And why stop there? You can even add more swashbuckling options to make your command line adventures more treacherous, just like in the high seas! Here's an example where our `Groggy Mail` pirate also needs a parrot to repeat messages:

```php
'Groggy Mail: Send {--letter=*, --parrot*}'
```

Now, you can send messages while making your parrot squawk along:

```shell
php artisan Groggy Mail: Send --letter=1 --parrot="Polly wants a cracker!" --letter=2
```

Avast, matey! With Laravel's Option Arrays, ye can command the seas and send out as many messages as your heart desires!

 Alright, Buckaroo Banzai here! Let's spice up this Laravel command business with some ol' western flair.

First off, let me introduce you to the swanky dance of naming your console commands and inputs like a cowboy might name his trusty steed or sidekick:

```php
// The name of our command is "mail:send" (just like a cool ol' western movie)
/** @var string */
protected $signature = 'mail:send';

// Now, let's give this horse some riders with some inputs.

// The first rider (user) needs an ID badge to join our posse.
/** @var string */
protected $signature = 'mail:send
                        {user : Give this fella his ID badge}';

// Second rider (optional, 'cos we ain't too proud to queue)
/** @var boolean */
protected $queue = false;
/**
 * If you want your job to join the line (be queued), give it a nod:
 */
/** @var bool */
protected $signature = 'mail:send
                        {user : Give this fella his ID badge}
                        {--queue : If you wanna queue, partner!}';
```

Now, if some cowboy's missing their ID badge, our command will politely ask them for it at the saloon bar:

<a name="prompting-for-missing-input"></a>

```php
// If someone forgets their ID badge (user), the command will ask nicely:
protected function getArguments()
{
    return [
        // This here is our user.
        ['user' => Input::required('ID')],
    ];
}
```

Yeehaw, partner! You've got yourself a well-trained posse of commands now, ready to ride across the digital frontier and send some mail!

 Alrighty, let's dive into the world of Laravel command prompts, where even the most missing of inputs can be coaxed out of the user with a bit of wit and charm! 🤩

First off, if your command requires arguments like a bossy bride at her wedding, users will receive an error message when they fail to deliver. But don't worry, you can make it less painful by implementing the `PromptsForMissingInput` interface! 🎶 Just think of it as your very own digital bartender, always ready to politely ask for what's missing from the order.

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\PromptsForMissingInput;

class SendEmails extends Command implements PromptsForMissingInput
{
    // ... (but you'd rather be at the bar, right?)
}
```

Now, if Laravel needs to get its hands on a required argument from the user, it'll whip up a charming question using either the argument name or description. But if you wanna customize your pick-up line (er, prompt), go ahead and implement `promptForMissingArgumentsUsing` method!

```php
/**
 * Prompt for missing input arguments using the returned questions.
 *
 * @return array<string, string>
 */
protected function promptForMissingArgumentsUsing(): array
{
    return [
        'user' => 'C'mon now, spill the beans! What user ID should receive the mail?',
    ];
}
```

Or you can provide placeholder text for extra guidance:

```php
return [
    'user' => ['Give me a holler, what’s the user ID? E.g. 123'],
];
```

If you want total control over the prompt, you can provide a closure that prompts the user and returns their answer:

```php
use App\Models\User;
use function Laravel\Prompts\search;

// ... (you're starting to feel like a pro!)
```

[!NOTE]
Remember, more details on available prompts can be found in the [Laravel Prompts](/docs/{{version}}/prompts) documentation. 📚

Lastly, if you wish to prompt the user to select or enter options, you can include prompts in your command's `handle` method, but if you only wanna step in when the user has also been automatically prompted for missing arguments, then implement the `afterPromptingForMissingArguments` method:

```php
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use function Laravel\Prompts\confirm;

// ... (this is getting addictive!)
```

<a name="command-io"></a>
Now go forth and make your commands as charming and engaging as a well-crafted pick-up line! 💃🕺️

 Ahoy there, intrepid Laravel sailor! Brace yourself for a journey through the seas of command line interaction, where your textual commands will be the compass guiding you to uncharted lands of web application wizardry. Let's hoist anchor and set sail with a tour of Command I/O!

<a name="retrieving-input"></a>

### Retrieving Input

First, let's talk about retrieving input from the command line. It's like catching fish in a digital ocean; only instead of hooks and nets, you use questions and answers. To do this, Laravel provides the `$this->argument()` and `$this->option()` methods for grabbing arguments from your command's invocation, and `$this->ask()` for querying the user. So when you're feeling lost at sea, remember: just ask a question, and your fish (er, answers) will come!

Example:
```bash
php artisan make:controller MyController --help
```
Here, Laravel knows to grab the "MyController" argument from the command invocation. If you wanted to use an option instead (like `--force` or `--append`), it's as easy as pie!

<a name="input-validation"></a>

### Input Validation

Now that we've caught our digital fish, let's make sure they're the right size! Just as you wouldn't want a whale in your fishing net, neither do you want an erroneous input wreaking havoc on your code. To avoid this maritime mishap, Laravel lets you validate your input using the `validate()` method. It's like having a marine biologist on board, ensuring only seaworthy specimens enter your ship!

Example:
```php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Validator;

class Example extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'example {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'An example of input validation';

    public function handle()
    {
        $validator = Validator::make($this->arguments(), [
            'name' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            $this->error('Validation failed!');
            return;
        }

        // The input is valid, do something with it!
    }
}
```
In this example, we're validating the "name" argument to make sure it's not empty and doesn't exceed 255 characters. If validation fails, our ship won't sail (or in code terms: the command will end).

<a name="outputting-text"></a>

### Outputting Text

Now that we have our validated input, it's time to tell a tale! Just as a seasoned sailor would spin yarns of their sea adventures, you too can regale your users with the wonders of your Laravel application. Use the `$this->info()`, `$this->line()`, and `$this->error()` methods to output text, line by line, in different styles. So, while your users might not be sailing the seven seas, they'll surely enjoy a good story!

Example:
```php
namespace App\Console\Commands;

use Illuminate\Console\Command;

class Welcome extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'welcome';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Welcome to Laravel!';

    public function handle()
    {
        $this->line('Ahoy there, Captain! Welcome aboard the magnificent Laravel ship.');
        $this->info('Your new command is now active, ready to sail you through web application waters.');
        $this->line('Enjoy your journey and remember: with Laravel, you are never lost at sea!');
    }
}
```
And there you have it! With these navigational tools, you can steer your Laravel ship through the seas of command line interaction like a pro. Fair winds and following seas, matey! 🐳🌬️⛵️

 ### Command Control: Gathering Your Troops

In the heat of battle (command execution), it's crucial to keep tabs on your troops - aka, arguments and options. To enlist their services, you can employ the `argument` and `option` methods. If they're MIA, fret not, for `null` will be sent as their substitute:

```php
/**
 * The main event!
 */
public function handle(): void
{
    $userInArms = $this->argument('user');
}
```

Should you require a full regiment of arguments, summon them with the `arguments()` method:

```php
$fullConscription = $this->arguments();
```

Recruiting options is as simple as recruiting arguments using the `option` method. Need an overview of all options? Call in the `options()` method:

```php
// Deploy a specific option...
$queueName = $this->option('queue');

// Gather all options for briefing...
$optionsBrief = $this->options();
```

Now, who needs a military when you have Laravel? 🔫💪🏼🚀

 Alrighty, Captain Coder! Prepare to embark on a sea of user-friendly command line interactions, because we're about to drop anchor at Laravel Prompts Island. This isn't just your run-of-the-mill PHP package; it's the secret sauce that transforms your commands into chatty, browser-esque interfaces with all the bells and whistles of placeholder text and validation!

Now, let's shake hands with the user by asking for their input during command execution. The `ask` method, our trusty conversationalist, will politely prompt the user with a question, gather their response, and graciously hand it back to your command:

```php
/**
 * Execute the console command.
 */
public function handle(): void
{
    $name = $this->ask('Hey there! What’s yer name?'); // Don't forget to use an appropriate greeting - manners matter!

    // ...
}
```

The `ask` method is a versatile chap, accepting an optional second argument that specifies the default value if the user decides to take a siesta or simply isn't in the mood for small talk:

```php
$name = $this->ask('Hey there! What’s yer name?', 'Captain Crunch'); // Just in case they get confused about your identity.
```

When it comes to sensitive information like passwords, the `secret` method steps up as our discreet bodyguard. It's similar to `ask`, but the user's input will be cloaked and concealed from their prying eyes as they type in the console:

```php
$password = $this->secret('Time for a little password pirouette!'); // Dramatic flair is crucial when asking for passwords.
```

Now that you've mastered these essential techniques, you can engage your users with a friendly and interactive command line experience that would make even the most demanding web browser user nod in approval. So go forth and conquer, Captain Coder!

 Alright, grab your popcorn, folks! We're about to dive into the thrilling world of user confirmation in Laravel land. You know, like asking your users if they want more cheese on their pizza (yes, we're still talking coding here).

If you need a simple thumbs-up or thumbs-down from your user, no worries! We've got the `confirm` method to save the day. By default, it's a shy "no" but if your user types 'y' or 'yes', well then, it blossoms into a bold 'YES!' like a coy summer flower.

```php
if ($this->confirm('You sure you wanna continue, partner?')) {
    // ...
}
```

Now, what if you want to be extra nice and assume they do? No problemo! Just pass `true` as the second argument to the `confirm` method like a sweet treat for your user.

```php
if ($this->confirm('You're already on a roll, let's continue!', true)) {
    // ...
}
```

And there you have it! User confirmation made easy and fun. It's like asking someone to dance at a party, but instead of twirling on the dance floor, we're spinning code! 🕺️🚀

 Alrighty, let's get this party started! The `anticipate` method is your new BFF in the world of Laravel questioning. It's like having a psychic lama that predicts your answers but without the annoying telepathic intrusions!

```php
$name = $this->anticipate('Gimme yer name, partner!', ['Taylor', 'Dayle']);
```

Now, if you're feeling a bit more fancy-pants, you can even pass a closure as the second argument. This little guy will be summoned each time your user types an input character. It'll accept a string parameter containing the user's input so far, and return an array of options for auto-completion – think of it like a digital Dewey Decimal System for your users!

```php
use App\Models\Address;

$name = $this->anticipate('What's the address to the secret speakeasy?', function (string $input) {
    return Address::whereLike('name', "{$input}%")
        ->limit(5)
        ->pluck('name')
        ->all();
});
```

Now, wasn't that a delightful little ride through the world of auto-completion? Just remember to keep those questions crisp and engaging – after all, we don't want your users thinking they've stumbled into a snooze-fest instead of a Laravel party!

 Alrighty then! Let's get this interactive show on the road with Laravel's delightful `choice` method. If you find yourself in a pickle, trying to limit your user's responses to a predetermined set of options, this little gem is just what the digital doctor ordered!

```php
$name = $this->choice(
    "Hey there, what's yer name?", // We're all friends here, right?
    ['Taylor', 'Dayle'], // You can choose either Taylor or Dayle... Or not.
    $defaultIndex // ...But if they don't make a choice, we default to this index.
);
```

But wait! There's more! The `choice` method is flexible as a yoga guru, accepting optional arguments for the maximum number of attempts to select a valid response and whether multiple selections are permitted:

```php
$name = $this->choice(
    'What is your name?', // You know, just in case they've forgotten.
    ['Taylor', 'Dayle'], // Our options remain the same.
    $defaultIndex, // Still our default index.
    $maxAttempts = null, // How many attempts you give 'em before throwing up the white flag.
    $allowMultipleSelections = false // Are we playing Choose Your Own Adventure or nah?
);
```

Now that's what I call a choice-y situation! Keep it classy, Laravel community! 🚀💻🎉

 Alright, let's dive into the world of Laravel console shenanigans! 🚀

When you want to spill the tea (or code) onto your terminal screen, you've got a suite of colorful characters at your disposal: `line`, `newLine`, `info`, `comment`, `question`, `warn`, `alert`, and `error`. Each one, donning its own vibrant ANSI colors, is ready to serve their purpose with a dash of panache.

Let's say you want to drop some friendly advice on your user. No worries, the `info` method will do the trick, painting the text in a cool, refreshing shade of green:

```php
/**
 * Execute the console command.
 */
public function handle(): void
{
    // ...

    $this->info('Congratulations! The command was a smashing success!');
}
```

Oops, something has gone awry? Time to whip out the big red panic button (aka `error` method) and let your user know in no uncertain terms:

```php
$this->error('Oh dear! Something has taken a wrong turn up in code alleyway!');
```

Feeling plain and uncolored? Fear not, the ever-reliable `line` method is here to display your message in its purest form:

```php
$this->line('Behold, the secret to life on this screen!');
```

If you'd like a moment of silence (or blank space) between your lines, you can use the `newLine` method. It can add a single line or even an entire stanza of emptiness if that's what your heart desires:

```php
// One line of nothingness...
$this->newLine();

// Three lines of transcendent silence...
$this->newLine(3);
```

So there you have it, a whirlwind tour of Laravel's console output methods. Now go forth and entertain your users with your newfound colorful command skills! 🎉✨🎈

 Ahoy there, coders! Welcome to the Laravel docs, where we combine programming and shenanigans like a well-dressed martini! Today, let's talk about tables – no, not those with chairs and tablecloths, but data tables that make your life easier than a cat on a hot tin roof!

The `table` method is your new best friend. It's like having a personal chef who formats multiple rows and columns of data correctly, without you ever having to lift a spatula! All you need to do is provide the column names (the silverware) and the data for the table (the delicious courses). Laravel will then whip up the appropriate width and height of the table (plating presentation included), making it look like a five-star restaurant meal, not your Aunt Mabel's potluck!

Here's how you can call upon the `table` method:

```php
use App\Models\User;

$this->table(
    ['Name', 'Email'], // Silverware
    User::all(['name', 'email'])->toArray() // Delicious courses
);
```

Now that's what I call a well-balanced data meal! And don't worry about the calories – in this case, more data means a fuller table, not a larger waistline!

 Alrighty, let's dive into the world of Laravel's Progress Bars - your digital drill sergeants for long tasks! No more guessing games about how close you are to a cold beer after a marathon coding session. With the `withProgressBar` method, Laravel is like that friend who counts down the minutes to pizza delivery - only way more efficient!

```php
use App\Models\User;

$users = $this->withProgressBar(User::all(), function (User $user) {
    $this->performTask($user);
});
```

Just like how you'd order a pizza by the slice, Laravel takes care of dishing out your users one at a time while keeping track of progress. But what if you prefer controlling the pace of your digital feast? No worries! Here's a more old-school method:

```php
$users = App\Models\User::all();

$bar = $this->output->createProgressBar(count($users));

$bar->start(); // "And they're off!"

foreach ($users as $user) {
    $this->performTask($user);

    $bar->advance(); // One user down, many more to go!
}

$bar->finish(); // The final lap - crossing the finish line with style.
```

Remember, we're just getting started here! For those who want to go all-in on their progress bars, check out [Symfony's Progress Bar component documentation](https://symfony.com/doc/current/components/console/helpers/progressbar.html) - it's the advanced course for power users! 🚀🍕🥳

 Alrighty then! Let's dive into the world of Laravel command line magic, shall we? By default, Laravel is like the friendly neighbor who invites all the party guests to dance – it auto-registers all commands in its favorite hangout spot, `app/Console/Commands`. But what if you've got some shy wallflowers hiding in other directories desperate to join the shindig? No worries! Just call up Laravel and tell 'em where your quiet command cats are, using the `withCommands` method in your application's `bootstrap/app.php` file:

```php
->withCommands([
    __DIR__.'/../app/Domain/Orders/Commands',
])
```

Now, if you've got some particularly introverted commands that won't come out to play without a personal invitation, you can manually register 'em by providing their class names to the `withCommands` method:

```php
use App\Domain\Orders\Commands\SendEmails;

->withCommands([
    SendEmails::class,
])
```

Once Artisan boots up with a caffeine shot, all the commands in your application will be introduced to each other by the service container and promptly registered for the dance. You know, like at a high school dance where the popular kids (commands) mingle with the not-so-popular ones (other commands). Ain't that sweet?

<a name="programmatically-executing-commands"></a>
Now, if you're the type who likes to cut in line and make things happen yourself, here's how to programmatically execute commands:

```php
$sendEmails = app(SendEmails::class);
$sendEmails->execute();
```

Just remember, it's like asking your coolest friend to hook you up with the hottest guest at the party. You got this!

 Alright, let's get this artistry of command-line wizardry started! When you find yourself longing to cast a spell beyond the comforting embrace of your trusty terminal, fear not, Laravel's got your back. You can summon an Artisan command from the lofty heights of your routes or controllers using nothing but the power of the `call` method on the mighty Artisan facade!

Imagine you're a superhero in your very own action movie (with way better dialogue than usual) - and your trusty sidekick is this enchanting command. Instead of shouting commands from your Batcomputer, you can now dispatch them within your routes and controllers with just a few lines of PHP code!

The `call` method is as versatile as an octopus at a juggling convention - it accepts either the command's signature name or class name as its first argument. And for the second argument, it craves an array of succulent command parameters to really get the party started:

```php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::post('/user/{user}/mail', function (string $user) {
    $exitCode = Artisan::call('mail:send', [
        'user' => $user, '--queue' => 'default'
    ]);

    // ...
});
```

Or if you prefer to recite the command as a spell, you can simply pass the entire incantation as a string:

```php
Artisan::call('mail:send 1 --queue=default');
```

Now, isn't that just magical? Happy command-casting! 🎩✨🌈🚀

 #### Array Whackamole!

Alrighty, buckle up, because we're about to dive into the world of Laravel array shenanigans! 🚀🌈

You see, when your command needs a taste of the array life, you can serve it a platter of values! 🍴🎉

```php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::post('/mail', function () {
    $exitCode = Artisan::call('mail:send', [
        '--id' => [5, 13] // Yep, that's a fancy array right there!
    ]);
});
```

So, the next time you're playing Command Line Whackamole, remember to drop those arrays where they need 'em most! 🎣🌮💥

 Ahoy there, brave Laravel coder! Ever found yourself in a pickle trying to force a migration refresh with the mighty `migrate:refresh` command, but it was being all fussy about your string values? Well, fear not, for we've got you covered!

In this fine world of code, there comes a time when one needs to pass boolean values like a well-oiled machine. No worries, matey! Just holler `true` or `false` to the option like so:

```php
$exitCode = Artisan::call('migrate:refresh', [
    '--force' => true, // Don't mind if I do! (True, that is)
]);
```

And there you have it! With this tidbit tucked under your belt, you can now command the seas of Laravel with unparalleled authority. But remember, with great power comes great responsibility – so always use it wisely! Arrrr! 🏴‍☠️

 Alright, buckle up, folks! We're about to dive into the world of Laravel queueing, where Artisan commands get to play hide-and-seek in the background while you go about your merry business. 🎪

First things first, before we can start sending mail to users using our newfound powers, we need to make sure our queues are set up and that we've got a queue worker listening for commands like a cat waiting for a laser pointer. 🐱‍⬛🌟

Here's how you can queue an Artisan command:

```php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

// Set up a route to send mail to a user, but let's not make them wait, right? 🕐
Route::post('/user/{user}/mail', function (string $user) {
    // Send the mail off to be processed in the background! 📧🚀
    Artisan::queue('mail:send', [
        'user' => $user, '--queue' => 'default'
    ]);

    // ... Now you can go back to scrolling through cat memes 🐈‍⬛
});
```

But wait, there's more! With the `onConnection` and `onQueue` methods, you can even specify where in the queue the Artisan command should be dispatched. Let's say you want to send mail from a specific user on a different server, you can do it like this:

```php
Artisan::queue('mail:send', [
    'user' => 1, '--queue' => 'default'
])->onConnection('redis')->onQueue('commands');
```

And there you have it! Now your Artisan commands are like the ninjas of your application, slipping into the background to perform their tasks without any interruptions. 🥷️🔪

 Alright, here's a fun take on the Laravel documentation for Calling Commands From Other Commands!

### Unleashing the Power of Artisan Command Chain Reaction 🚀

Ever felt like your command needed backup? Or maybe you wanted to enlist a fellow artisan in the quest for code justice? Well, my friend, the `call` method is here to save the day (and your code)!

This magical superpower lets you summon another Artisan command from within an existing one. Just pass it the command name and an array of arguments or options like a cosmic summoning ritual:

```php
/**
 * The moment you've been waiting for! Execute this console command!
 */
public function handle(): void
{
    $this->call('mail:send', [
        'user' => 1, '--queue' => 'default'
    ]);

    // Now we party like it's... well, you get the idea.
}
```

But what if you don't want all that output clogging up your console? Fear not! We've got a little something for the minimalists among us – introduce yourself to the `callSilently` method! It works just like `call`, but keeps its cool even when others are panicking:

```php
$this->callSilently('mail:send', [
    'user' => 1, '--queue' => 'default'
]);
```

So go ahead and harness the power of Artisan command chaining! It's like a superhero team-up for your codebase. 🦸‍♂️🚀

 ## Catching Signals in the Digital Wild West

Call yourself a seasoned cowpoke in the digital frontier? Well, buckle up partner, because we're about to ride into the wild world of signal handling! You might be familiar with the fact that operating systems let you send signals to running processes - like when they ask your rowdy saloon brawl to end with a `SIGTERM` (that's cowboy speak for "take a hike").

But what if you want to play the peacekeeper and listen for these signals in your trusty Artisan console commands, ready to execute some code when they're raised? No worries, partner, just reach for your trusty `trap` method!

```php
/**
 * Saddle up and ride, pardner!
 */
public function handle(): void
{
    $this->trap(SIGTERM, fn () => $this->letsStayFriends = false); // Don't get too attached to this command, it might need to leave town

    while ($this->letsStayFriends) {
        // ...
    }
}
```

Now, if you find yourself in the midst of a shootout and need to keep track of multiple signals at once - say, `SIGTERM` and `SIGQUIT` (signals that'll make your command pack up and leave), then just pass an array of signals to the `trap` method:

```php
$this->trap([SIGTERM, SIGQUIT], function (int $signal) {
    $this->letsStayFriends = false; // Time to hit the trail, partner!

    dump($signal); // Print out your farewell messages: SIGTERM / SIGQUIT
});
```

Now, that's what I call herding signals in a wild west way!

 ## Stub Customization: Be the Artisan Boss! 🎉🎨

Welcome, code mavericks! Let's talk about stub customization - a super-fun way to spice up your Laravel life! 🌶️🍹

Imagine you're hosting a fabulous dance party (website) and need DJs, bartenders, and even security guards (controllers, jobs, migrations, tests). The Artisan console is our trusty DJ who mixes up these cool cats using "stub" files. But what if you want to add your personal flair to the party decorations? No problemo! 🌺

To edit those stubbornly stylish stubs, just use the `make` command's more rebellious cousin: `stub:publish` 🤘️. Let's get this dance floor shaking!

```shell
php artisan stub:publish 🕺💃
```

Once you've unleashed this magic, the most popular stubs will magically appear in your application's `stubs` directory (it's like inviting all your besties to the party!). Now that everyone's here, you can start customizing these bad boys to make your Laravel life even more fabulous! 🌈🎊

Any changes you make to the stubs will automatically be reflected in the classes Artisan generates. Just like a magical fairy godmother who updates your wardrobe every time you sneeze! ✨👠

Happy customizing, party people! Now go forth and add some pizzazz to your Laravel world! 🚀💖

 Alrighty then! Let's dive into the Laravel world of events where our friendly Artisan is throwing quite the party. 🥳

1. The `ArtisanStarting` shindig kicks off as soon as Artisan starts twirling its magic wand, signaling the beginning of the command line bash (because who doesn't love a good party opener?).

2. Next up, we've got the `CommandStarting` event, which is like the DJ spinning up beats right before the main act takes the stage. This happens just as your command is about to bust some moves and start its performance.

3. Last but not least, the `CommandFinished` event is the perfect time for confetti cannons and high fives! Once your command has wrapped up its dance routine and finished executing, this event signals the end of the party. 🎉🎈

So there you have it! Keep an eye out for these events in Laravel as they're the life of the party when it comes to command line fun times. 🤘💃