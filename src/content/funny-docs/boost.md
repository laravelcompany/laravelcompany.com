 Welcome to Laravel Boost, the supercharger for your PHP applications! 🚀💨

<a name="installation"></a>
## Installation Time (aka The Setup)

Let's get this party started! Here's a step-by-step guide on how to install Laravel Boost and keep those resources sparkling fresh.

### Update Your Boost Resources (Like Getting a New Haircut)
Keep your Boost resources updated, because outdated resources are like last season's fashion—not so cool anymore! 🕒

### Agent Setup (Setting Up Your Crew)
To make the most of our AI-powered superheroes, you'll need to set up your agents. Don't worry; they won't ask for coffee breaks! ☕️

<a name="mcp-server"></a>
## Meet the MCP Server (Our Command Center)

The MCP Server is like your personal AI butler, here to help manage tasks and tools. Here's a rundown of its available features:

### Available MCP Tools (Our AI Butler's Skills)
Your new best friend comes equipped with a variety of useful tools. Let's get acquainted! 🤖

### Manually Registering the MCP Server (Inviting Your AI Butler)
If you want to manually register your MCP server, we've got a guide on that too! Just remember, no need to offer it a silver platter—it's already here to serve you. 🥳

<a name="ai-guidelines"></a>
## AI Guidelines (Setting the Rules for Our AI Friends)

You can set guidelines to help our AI friends understand how to assist you best. Here's a breakdown of what you can do:

### Available AI Guidelines (Our AI's House Rules)
Our AI already knows some house rules, but don't worry; you can add your own! 🏡

### Adding Custom AI Guidelines (Teaching Your AI Friend New Tricks)
If the built-in guidelines aren't enough, go ahead and teach your AI friend some new tricks! Just make sure not to ask it to do your chores. 🧹

### Overriding Boost AI Guidelines (Changing the House Rules)
Need to change the house rules? Go ahead and override them! But remember, no pulling all-nighters—our AI needs sleep too. 😴

### Third-Party Package AI Guidelines (Outsourcing AI Training)
If you're using third-party packages, don't worry; we've got guidelines for those too! Just remember, no teaching our AI to cook—it's a software, not a robot. 🍲

<a name="agent-skills"></a>
## Agent Skills (Upgrading Your AI Buddy)

Want to upgrade your AI buddy? Here's how:

### Available Skills (Our AI's Extra Skills)
Your AI buddy comes with some cool skills right out of the box! Let's see what it can do. 🎯

### Custom Skills (Teaching Your AI Buddy New Tricks)
Need more than just the basics? No problem, let's teach your AI buddy some new tricks! Just don't ask it to learn to dance or play an instrument—we're software developers, not magicians. 🕺️

### Overriding Skills (Changing Your AI Buddy's Skills)
Want to change your AI buddy's skills? Go ahead and override them! But remember, no teaching it to juggle flaming torches—that's a fire hazard. 🔥

### Third-Party Package Skills (Getting Extra Help)
If you're using third-party packages, don't worry; we've got skills for those too! Just remember, no teaching our AI buddy to do card tricks—it might scare some people. 🃏

<a name="guidelines-vs-skills"></a>
## Guidelines vs Skills (The House Rules vs Extra Skills)

Guidelines and skills are like the difference between a boss and an employee—guidelines are what tell your AI buddy what to do, while skills are what it can do. 👔💼

<a name="documentation-api"></a>
## Documentation API (Our AI's User Manual)

Need help using our API? We've got a user manual for that! Just remember, no asking our AI to read it out loud—it's a software, not a voice assistant. 📚

<a name="extending-boost"></a>
## Extending Boost (Customizing Your AI Buddy)

Want to add support for other IDEs or AI agents? We've got you covered! Just remember, no teaching our AI buddy to drive—it's a software, not a self-driving car. 🚗

We hope this guide has helped make your Laravel Boost experience enjoyable and educational! Now let's get coding, shall we? 🤖💻🚀

 Ahoy there, development pirates! Buckle up as we sail into the uncharted waters of Laravel Boost - your AI co-pilot for a smoother voyage towards Laravel code nirvana! 🌴🚀

Laravel Boost sets sail by arming your trusty AI mates like Claude Code and Cursor with the compass they need to navigate the Laravel seas, creating top-tier applications that not only comply with the pirate's code (errr... Laravel best practices), but will make Davy Jones himself green with envy! 🤝🌺

Boost also equips you with a treasure map of epic proportions – an API brimming with docummentary gold, boasting a built-in MCP tool and a vast, 17,000+ piece encyclopedia devoted solely to all things Laravel. And for those precious moments when the sea's a bit foggy, its semantic search capabilities using embeddings will guide you through with pinpoint accuracy and context awareness! Arrrr, ye won't get lost in these waters again!

So, set sail and let's see what's next on our adventure. Ah, yes, the installation... Navigate to [Installation](#installation) and hoist the mainmast to anchor your ship at the Laravel Boost dock. After all, a smooth sea never made a skilled sailor!  🌊⚓️

Yar har har! Let's conquer Laravel development together with Laravel Boost! 🏴‍☠️🐉🔥

 Alrighty, let's get this Laravel Boost party started! 🎉

First things first, grab a comfy chair and fire up your terminal. You can snag Laravel Boost like you'd swipe a pint of ice cream on a hot day:

```shell
composer require laravel/boost --dev
```

Next, it's time to install the MCP server and coding guidelines - think of it as setting up your AI agent's house before moving in. Here's how:

```shell
php artisan boost:install
```

The `boost:install` command is like a magical wand that sprinkles the necessary agent guideline and skill files all over your project, based on the coding agents you picked during the installation process. Aren't magic and Laravel just the best combo since... well, you know! 🎩

Once Laravel Boost is installed, it's time to don your coding toga (or any attire of your choice) and start working with Cursor, Claude Code, or your preferred AI agent. You're now ready to code like a pro!

[!NOTE]
Don't forget to give these files a warm welcome by adding the generated MCP configuration file (`.mcp.json`), guideline files (`CLAUDE.md`, `AGENTS.md`, `junie/`, etc.), and the `boost.json` configuration file to your application's `.gitignore`. These files will regenerate themselves like a phoenix from ashes when you run `boost:install` or `boost:update`, which is quite handy, if we do say so ourselves! 🔥

 Alright, Agent Smith! Let's get this Laravel party started, shall we? 🚀

1. First things first, open your command palette - press `Cmd+Shift+P` or `Ctrl+Shift+P` and feel the power coursing through your veins. 🦹‍♂️

2. Once you've summoned it, type "open MCP Settings" like a seasoned Jedi (just hit enter). 🥳

3. Now, for the pièce de résistance - find the `laravel-boost` toggle and flip that bad boy ON! 🔦💡 Your Laravel will now be boosted to light-speed! 🚀✨

But remember, not everyone's setup is the same. If Claude Code, Codex, or even Gemini CLI are your preferred tools of choice (who are we to judge?), consult their specific instructions below:

##### Claude Code

For our valiant Claude Code users, enable laravel-boost with this magical incantation in your project's directory shell:

claude mcp add -s local -t stdio laravel-boost php artisan boost:mcp 🪄💫

##### Codex

If you prefer the elegance of Codex, chant this command in your project's directory shell:

codex mcp add laravel-boost -- php "artisan" "boost:mcp" 🧙‍♂️🔮

##### Gemini CLI

For our daring Gemini adventurers, use this enchantment in your project's directory shell:

gemini mcp add -s project -t stdio laravel-boost php artisan boost:mcp 🚀🌟

##### GitHub Copilot (VS Code)

If you're using the mighty GitHub Copilot, first search for "MCP: List Servers", then select `laravel-boost` and hit start server. Sounds like a task for a superhero! 🦸‍♀️⚡️

##### Junie

For our trusty Junie users, simply press shift twice, search "MCP Settings", check the box next to laravel-boost, and click apply at the bottom right. Easy peasy, lemon squeezy! 🍋🍋

 ### Keeping Your Boost Juiced Up! ⚡️

Ahoy there, Captain! It's time to give your trusty Laravel ship a tune-up with some fresh Boost resources. You don't want your AI first mate following outdated guidelines or skills now, do you? To ensure your vessel is always sailing with the latest packages, you can use the `boost:update` Artisan command.

```shell
php artisan boost:update 📣 "Yo ho ho and a package update for me!"
```

Now, if you're as lazy as a seagull on shore leave, you can automate this process by adding it to your Composer scripts. It's like setting up an auto-pilot for your ship! 🚢

```json
{
  "scripts": {
    "post-update-cmd": [
      "@php artisan boost:update --ansi"
    ]
  }
}
```

By default, the `boost:update` command will only update the existing Boost resources already on board. But if you've recently docked and picked up some new packages, don't forget to call upon Boost to publish their guidelines and skills! You can do this using the `--discover` option:

```shell
php artisan boost:update --discover 🔎 "Ahoy there! I believe we've got some new cargo!"
```

Remember, a well-oiled machine runs smoothly, and so does a Laravel application with up-to-date Boost resources. Happy sailing! 🎉

 Ahoy there, tech pirates! Sail the Laravel seas no longer alone, for we've got the swashbuckling MCP Server to keep you company! This bad boy is like the Swiss Army knife of AI sidekicks, ready to assist you in navigating your Laravel application like a seasoned sailor navigates the seven seas.

The MCP (Model Context Protocol) server is our state-of-the-art toolbox for your artificial mates to interact seamlessly with your Laravel app. These tools arm your agents with superpowers to:

1. **Inspection Sword**: Peer into the mysterious depths of your application structure, revealing hidden treasures and avoiding those pesky icebergs (or bugs).
2. **Database Peg-Leg**: Hook into your database like a sturdy peg-leg, letting you dredge up valuable information with ease.
3. **Code Parrot**: Repeat after me – executing code has never been this fun! Just like a parrot learning to mimic your commands, our AI agents can perform tasks as you wish.
4. **And more secrets we're saving for later...** Shh, let's keep some mystery alive, shall we?

<a name="available-mcp-tools"></a>
(Don't worry about the technical jargon; just remember that these tools are here to make your life easier as a Laravel captain!)

 ### The Swanky Laravel Toolkit! 🎉🎊

### Gather 'Round for a Magic Show of Tools! 🤩

| Name                       | Whatchamacallit Notes                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------|
| App Spill                  | Spills the beans on PHP, Laravel versions, database engine, and a list of pals from the ecosystem with their versions 🎨  |
| Browser Whispers           | Peeks into logs and errors whispered by your browser                                                                    |
| Database Dances             | Shakes its tail feather with available database connections, including the main squeeze 💃                                |
| Database Disco              | Twirls around a query against the database, get ready to boogie 🕺                                                       |
| Database Schema Shenanigans | Reads the blueprint of your database schema, it's a real party trick! 🤳                                               |
| URL Transformer            | Turns those relative path URIs into glamorous, red-carpet-worthy absolute URLs for agents 🌹                             |
| Last Error Laugh-Off         | A side-splitting read of the last error from your app's log files, because who doesn't love a good chuckle? 😂      |
| Log Entries Dance Party     | The best part of any party - catching up on the last N log entries! 🎊                                               |
| Doc Search (AI-Powered DJ)  | Spins tunes from the Laravel hosted documentation API service, based on the packages installed at your soiree 💃🏼🕺🏼     |

<a name="manually-registering-the-mcp-server"></a>
### Ready to Register? 🥁
Let's get this party started! Register the MCP server and enjoy the ride! 🎉🎈🎊💃🏼🕺🏼

 Alrighty then, party people! If you find yourself in a pickle where you need to manually register the Laravel Boost MCP server like a boss, fear not! I've got your back with this nifty guide. Just follow these easy steps and you'll be sippin' margaritas on the beach of code success in no time.

1. Gather round, cowpokes, it's time for a little command line dance: Open up your terminal or command prompt, depending on whether you're more Mac or PC (no judgement here).

2. Dust off those fingers and type in the following: `php`. That's right, we're going old-school with PHP. No need to call a higher power, we got this!

3. Now for the pièce de résistance: Hit 'Enter' and then follow it up with `artisan boost:mcp`. It's like performing the world's most elegant code-juggle.

But wait, there's more! For those of you who enjoy a bit of JSON action (and who doesn't?), here's how you can make your MCP server registration even sweeter:

```json
{
    "mcpServers": {
        "laravel-boost": {
            "command": "php",
            "args": ["artisan", "boost:mcp"]
        }
    }
}
```

Now, isn't that a sight for sore eyes? If you've managed to make it through this far without snoring, congratulations! You're officially one step closer to Laravel Boost MCP server glory. Happy coding, folks! 🤖🎉💻

 Alrighty, buckle up for a whirlwind tour through the magical world of Laravel AI Guidelines! These aren't your average bedtime stories, no sirree. They're action-packed instruction files, chock-full of wisdom that helps our beloved AI agents navigate the enchanting realms of the Laravel ecosystem.

Think of them as a secret map to the treasure chest of knowledge about Laravel packages. The guidelines are loaded upfront like a trusty sidekick, ready to share their secrets with our brave AI agents. Inside these files reside the core conventions, the unspoken rules of this land, and the best practices – the wisdom of the ancients!

But wait, there's more! These guidelines also contain framework-specific patterns that are like secret handshakes in a spy movie. Knowing them helps our AI agents fit right in and generate code worthy of the Code Hall of Fame – consistent, high-quality code that makes developers swoon with delight!

<a name="available-ai-guidelines"></a>
Now, let's get down to business, shall we? 🕺️💃️ If you're feeling curious about the available AI Guidelines, just click on this magical link. It'll take you on a grand adventure through the most essential guidelines – you won't want to miss it!

 Alright, party people! Let's dive into the world of Laravel Boost AI Guidelines, shall we? Here's a fun take on our technical documentation:

### Party Time AI Tips (AI guidelines in plain English)

Laravel Boost brings you AI party tips for various packages and frameworks. The `core` tips are like the ever-present life of the party, offering general advice that works across all versions.

| Package               | Invite List         |
|-----------------------|---------------------|
| Core & Boost          | Everybody's invited! |
| Laravel Framework     | The core crew, 10.x, 11.x, and 12.x (the cool kids) |
| Livewire              | The core squad, 2.x, 3.x, and 4.x (they've got the moves!) |
| Flux UI               | The core crew, free or pro (for those who like to be in control) |
| Folio                 | Everybody's invited! (a secret guest, shh!) |
| Herd                  | Everybody's invited! (the party animal package) |
| Inertia Laravel       | The core crew, 1.x, 2.x, and 3.x (the trendsetters) |
| Inertia React         | The core crew, 1.x, 2.x, and 3.x (react-ing to the crowd) |
| Inertia Vue           | The core crew, 1.x, 2.x, and 3.x (keeping it casual and comfy) |
| Inertia Svelte        | The core crew, 1.x, 2.x, and 3.x (the sleek newcomer) |
| MCP                   | Everybody's invited! (the mysterious host) |
| Pennant               | Everybody's invited! (keeping the party organized) |
| Pest                  | The core crew, 3.x and 4.x (party poopers with a purpose!) |
| PHPUnit               | Everybody's invited! (the serious one with a good sense of humor) |
| Pint                  | Everybody's invited! (the party-loving design master) |
| Sail                  | Everybody's invited! (navigating the dancefloor like a pro) |
| Tailwind CSS          | The core crew, 3.x and 4.x (the style mavens) |
| Livewire Volt         | Everybody's invited! (a surprise guest from another party) |
| Wayfinder             | Everybody's invited! (guiding the crowd with a smile) |
| Enforce Tests         | Conditional Invite (security guards, keep an eye on things!) |

> **PSA:** To ensure your AI party tips are always fresh and fun, remember to check out the [Keeping Boost Resources Updated](#keeping-boost-resources-updated) section!

<a name="adding-custom-ai-guidelines"></a>
Now, if you've got your own AI party tips for a package we didn't include, feel free to add them in! Let's keep the party going! 🎉🥳🎊

 Alright, let's get this AI party started! If you've got a hankering to personalize Laravel's Boost with your very own AI etiquette (because who doesn't want an AI butler programmed to their specific quirks?), here's the lowdown:

1. Get ready to play dress-up, because the first step is to don your best `.blade.php` or `.md` garb. These are like the tuxedos of the AI world and will help your custom guidelines fit seamlessly into Laravel's high society.

2. Now it's time for a bit of organizational finesse: Stash these snazzy new outfits in your application's `.ai/guidelines/` closet. Think of it as the AI equivalent of a walk-in wardrobe (except, you know, digital and without the risk of tripping over Jimmy Choos).

3. With everything set, run `boost:install` – Laravel Boost's way of announcing to the world that your freshly dressed AI is ready to mingle with the other guidelines at the ball. It'll automatically include your custom guidelines along with the rest, so there's no risk of showing up in last season's AI fashion faux pas.

That's all, folks! With these simple steps, you're on your way to creating a one-of-a-kind, tailor-made AI experience that'll have your users dancing and your competitors green with envy (well, perhaps not envy – more like bewilderment). Happy customizing!

 ### Rebel Against Boost's Brainy Boss, the AI! 🤖🚀

Got a bone to pick with ol' Boost's brainy boss? Don't like the way he's been running things? Fear not! With our rebellion-friendly tutorial, you can overthrow his built-in AI guidelines and establish your own, custom rulebook. 👑

Here's how to become a rogue coder and defy Boost's AI like a true outlaw:

1. Create a hideout for your rebellious guidelines by constructing a custom file, using these secret coordinates: `.ai/guidelines/[your_desired_guideline]/[version]/[file_name].blade.php` 🗺️

   For instance, if you're fed up with Boost's "Inertia React v2 Form Guidance", set up camp at `.ai/guidelines/inertia-react/2/forms.blade.php`. 🏞️🏕️

2. Once your underground base is established, it's time to attack the system! When you call for reinforcements using the command `boost:install`, Boost will surrender to your custom rulebook instead of his original one. 🛠️💪

Now go forth and conquer, my fellow rebels! Make Boost bend to your will, or should I say, code... 😉🚀

 Ahoy there, Package Maintainers! If you've got a swashbuckling third-party package that's giving other pirates' ships a run for their gold, you can now make it even more treasure trove-y by getting Boost to help you chart the AI sea shanties for it.

To do this, all ye need is to hoist the Jolly Roger of a `resources/boost/guidelines/core.blade.php` file on your pirate ship (er, package). Once your users set sail with `php artisan boost:install`, Boost will swab the decks and raise anchor, automatically loading your guidelines like a well-oiled pirate crew.

Now, for your AI shanties to be as catchy as a jolly roger itself, they should provide a quick and tantalizing overview of what your package does (you know, to entice the other seafarers). Next, draw a treasure map of any essential file structures or conventions (just like X marks the spot!). Lastly, share some pirate lore on how to create or use its main features, complete with example commands and code snippets. Keep it concise, actionable, and filled with best practices that'll make AI write gold for your users – arr!

Here be an example to get ye started:

```php
Pirate's Code of Conduct (core.blade.php)

Ye have bravely set sail on the high seas of Laravel packages, matey. Welcome aboard! Here's a guide to help you navigate our swashbuckling package, "Arr-tisan Bread."

1. Overview:
   Arr-tisan Bread is a package for bakers who want their yeast rolls to rise above the competition. It automates the bread-making process with precision and flair. Get ready to serve up fresh, artisanal loaves like a pro!

2. File Structure & Conventions:
   For optimum results, keep your "Arr-tisan Bread" files organized as follows:

   - src/ArrBread
     - Console
       - Commands
         - MakeDough.php
         - BakeBread.php
         - ProofDough.php

   - config/arrbread.php

3. Main Features & Usage:
   Aye, there's three main features in Arr-tisan Bread:

   a) MakeDough
      To create the dough, use this command: `php artisan arrbread:makeDough`

   b) ProofDough
      Allow your dough to rise with this command: `php artisan arrbread:proofDough`

   c) BakeBread
      Pop those loaves in the oven and bask in the aroma of freshly-baked bread with this command: `php artisan arrbread:bakeBread`

Keep your sails hoisted high, matey! May you have smooth seas, fair winds, and a treasure chest full of well-written AI guidelines. Happy coding, yarr! 🏴‍☠️

 ## The Packet of Delights!

Ahoy there, developer friends! Get ready to embark on a whirlwind adventure with our dazzling new package, The Packet of Delights! This all-singing, all-dancing marvel will sprinkle some stardust onto your Laravel application, making it shimmer and shine like never before.

## What's the Big Idea?

The Packet of Delights offers a [brief description of functionality] that is so cutting-edge, we had to make sure our testers were wearing protective eyewear to avoid any unwanted solar flares! This package will take your Laravel app from zero to hero in record time!

## Installation: The First Step Towards Greatness

To add this life-changing magic to your project, simply run the following command:

```sh
composer require vendor/package-name
```

(Just make sure you've got your Laravel installation properly brewed beforehand!)

## Usage: Unleashing the Power of The Packet of Delights

Once installed, The Packet of Delights is as easy to use as a well-oiled can opener (but way more exciting). Just follow these simple steps to experience the joy:

1. Import the package in your code:

```php
use Vendor\PackageName;
```

2. Instantiate The Packet of Delights:

```php
$packet = new PackageName();
```

3. Marvel at the results as you call its fantastic methods:

```php
$results = $packet->[someMethodYouWantToUse]();
```

(Remember to replace [someMethodYouWantToUse] with the specific magic trick you desire.)

## Conclusion: A Leap Forward for Laravel (And Your Project)

There you have it! With The Packet of Delights in your development arsenal, your Laravel projects will be shining brighter than a Hollywood premier—and without any celebrities causing a scene. So grab this package, and let the good times roll! Happy coding!

 ### Features

#### Feature 1: We've Made Coding Easier Than Baking a Cake (...and we all know how easy that is)

Don't believe us? Witness the simplicity yourself!

@verbatim
<code-snippet name="How to use Feature 1" lang="php">
$easyCoding = ClassName::featureOne($parameter1, $parameter2);
</code-snippet>
@endverbatim

#### Feature 2: We've Taken a Leaf Out of Your Magic Spellbook (No wand required)

Call us Harry, but we've brewed up something even more potent than an Expelliarmus charm!

@verbatim
<code-snippet name="How to use Feature 2" lang="php">
$result = PackageName::featureTwo($param1, $param2);
</code-snippet>
@endverbatim

Just remember, with great features come great responsibility. So, channel your inner superhero and conquer the coding world!

 Alright, buckle up, coding cowboys and code-savvy cowgirls! We're about to dive into the wild west of software development with a trusty sidekick – [Agent Skills](https://agentskills.io/home)! These aren't your run-of-the-mill howdy-partner guides, oh no, they're lean, mean coding modules that a cowpoke can activate whenever they're wrangling specific domains. Unlike the dusty old guidelines that take up precious wagonspace before the journey even begins, Skills let you saddle up with detailed patterns and the sharpest shooting best practices only when you need 'em, reducing context clutter and improving the accuracy of your AI-generated code more than a well-aimed six-shooter.

To get these bad boys on board, all you gotta do is yell "Yeehaw!" (or run `boost:install`) and select Skills as a feature. Once that's done, Skills will automatically hitch their horses to your project based on the packages listed in your `composer.json`. Say your project is riding shotgun with `livewire/livewire`, well then, you'll find yourself armed with the `livewire-development` Skill faster than you can say "Giddy up!"

<a name="available-skills"></a>
Now, let's take a gander at the Skills corral:

1. **Livewire Development**: A quick-draw Skill for projects that are using Livewire, making your code more reliable than an old trusty horse.
2. **Laravel Mix Assets Optimization**: Saddles up your assets for a smooth ride, optimizing them faster than a mustang on the plains.
3. **Tailwind CSS Utilities**: Dresses your code in the finest coding attire, making it look sharper than a rhinestone-studded Stetson.

 Ahoy there, code pirates! Here's a treasure trove of skills that'll make your developer heart swell with excitement (and possibly some sea shanties). Let's dive in!

### Pirate's Pouch o' Powers

| Skill                        | Booty             |
|------------------------------|-------------------|
| Flux UI Development         | Flux UI, matey    |
| Folio Routing                | Folio, ye scurvy dog |
| Inertia React Development   | Inertia React, ye buccaneer |
| Inertia Svelte Development  | Inertia Svelte, landlubber |
| Inertia Vue Development     | Inertia Vue, sea dog |
| Livewire Development        | Livewire, hearties |
| MCP Development             | MCP, me hearty    |
| Pennant Development          | Pennant, mateys   |
| Pest Testing                | Pest, ye scallywag |
| Tailwind CSS Development     | Tailwind CSS, ye sea dog |
| Volt Development           | Volt, ye hearty    |
| Wayfinder Development      | Wayfinder, mateys   |

**Ye Be Warned:** Keep these skills shipshape and Bristol fashion by reading the [Keeping Boost Resources Updated](#keeping-boost-resources-updated) section,Arrrr!

<a name="custom-skills"></a>

 ### Custom Shenanigans (aka Skills, but Cooler)

Ready to make your assistant more you-centric? Let's get this party started! To craft your own custom shenanigans, simply stash a `SKILL.md` file in your application's `.ai/pranks/{skill-name}/` directory. When you unleash the mighty `boost:update`, these custom shenanigans will join forces with Boost's built-in pranks, turning your assistant into a Swiss Army Knife of awesomeness!

For instance, to create a custom shenanigan for your application's domain logic mastery:

```
.ai/pranks/invoice-wizardry/SKILL.md
```

<a name="overriding-pranks"></a>

Oh, and just in case you thought you'd be the only mad genius here, we've got news for you! You can override Boost's built-in pranks, too! It's like having your very own secret service agent, but for chatbots. Now get out there and make your assistant more YOU-rific than ever! 🤖🎉

 Alrighty, let's talk shop about overriding those Boost-built skills that are giving you trouble like a cat giving you the hairball of doom! You see, you can create your very own custom skills (we call 'em DIY skills) with the same dashing names as Boost's originals. When you craft a custom skill to match an existing Boost skill name, Boost will toss out the original like a pair of last year's bell-bottom jeans and put on your fresh new threads instead!

For instance, if you fancy yourself a maestro in the livewire-development realm and wish to replace Boost's default symphony, simply create a file at `.ai/skills/livewire-development/SKILL.md`. Once you run `boost:update`, Boost will strut down the catwalk with your custom skill instead of the off-the-rack version!

<a name="third-party-package-skills"></a>
Now, if you're working with third-party packages, it's a whole other ball game. We don't want to leave our favorite third-wheel out of the party, do we? So, Boost allows you to add skills for third-party packages by creating a file in the corresponding package directory and following similar naming conventions. It's a love story between Boost and your packages that results in harmonious code!

 Alright, coding buddies! 🤖🚀 If you've got a swanky third-party package that makes other developers swoon, and you wanna share the love by having Boost pick up your tricks, we're all for it! 🎉

To make Boost dance to your beat, simply create a file named `resources/boost/skills/{skill-name}/SKILL.md` within your package. When your admiring fans run `php artisan boost:install`, our little bot will install your sweet skills based on their preferences. 🤖💃

Our Boost Skills are akin to a superhero's utility belt, following the [Agent Skills format](https://agentskills.io/what-are-skills) for the ultimate convenience. They should be organized as a folder containing a `SKILL.md` file, with YAML frontmatter and Markdown instructions. The `SKILL.md` file must include vital stats (`name` and `description`) and can optionally include scripts, templates, and manuals. 📋

Now, let's get those skills polished! They should set clear expectations about any required file structure or conventions, and demonstrate how to create or utilize its primary features using example commands or code snippets. Remember to keep them concise, actionable, and focused on best practices so AI can generate accurate code for your users. Here's a quick example:

```markdown
---
name: package-name-development
description: Build and work with PackageName features, including components and workflows.
---

Welcome to the magical world of PackageName development! 🎩✨ In this tutorial, we'll explore how to create and manage your PackageName packages like a pro!

First things first, let's set up our dev environment:

```bash
composer require package-name/package-name-dev
```

And that's just the beginning of your coding adventure with PackageName! 🚀💫 Keep it up and happy coding! 🤖🎉
```

 Alright, buckle up, programming pirates! Today we're diving into the shark-infested waters of package name development. You might be thinking, "I thought I was a landlubber, not a codemonkey?" Well, fear not, matey! This guide will make you feel more like Captain Coder than Long John Silicon.

First off, let's establish the rules of the high seas, er, naming conventions. Your package name should be unique, easy to remember, and descriptive enough to give potential treasure seekers (developers) an idea of what they're in for. It's like naming your ship: you wouldn't call it The Rusty Anchor, would ya?

Next, we set sail for the Vendor-Namespace Harbor. This is where you'll register your package with Composer, giving it a proper home and making sure it's easily accessible to all seafaring developers. Remember, no man is an island (or package), and isolation won't help ye find yer buried treasure (users).

Now that we have a map, let's talk about components. Like the three musketeers of a well-oiled ship, your package should consist of three key elements: src, tests, and resources. src is where the heart of your package lives, tests help ye ensure it's seaworthy, and resources...well, they're like the pirate flag – they make yer package stand out on the horizon.

The src directory should follow Laravel's namespacing conventions to keep things neat and organized. Tests will house your PHPUnit tests to verify that your treasure chest (package) doesn't have any leaks or hidden skeletons (bugs). And resources, my hearties, are for files like assets and config, the dressing that makes yer package uniquely yours.

So there ye have it! With a sturdy ship, a well-maintained treasure chest, and a pirate flag flappin' in the wind, your Laravel package development venture is off to a roaring start. So hoist the main sail, tie up the Jolly Roger, and set sail for the land of prosperity (the Laravel community)!

 ...when you're ready to unleash some serious superpowers in your Laravel project! 🦸‍♂️🦸‍♀️

PackageName is not just a name, it's a gateway to a world of convenience and productivity. 🌎💻 When you find yourself grappling with repetitive tasks or feeling like you're reinventing the wheel, PackageName swoops in like a caffeinated caped crusader to save the day! 🚀

So, whether you're building an app for superheroes in distress (Laravel Rescue Squad), or creating the next big social network for intergalactic beings (GalaxyFriends), PackageName is your trusty sidekick that'll help you focus on what really matters - crafting a fantastic user experience! 🌟📱

Now, buckle up, put on your coding cape, and let's get this show on the road! 🚀🚀🚀

 Alrighty, buckle up! Here's the lowdown on our Laravel wonderland. Let's call it a digital playground, because why not?

## Features

### Feature 1: The Svelte Speedster 🏎️💨
A sleek and speedy feature that will make your development life a breeze. It's like having a barista who never misses your order.
```
// Just ask for what you need, and it's magically served up!
$result = PackageName::featureOne();
```
### Feature 2: The Dynamic Duo 🦸‍♂️🦸‍♀️
Two caped crusaders joining forces to save the day! Use them together, and watch your code soar to new heights.
```
// Call in the superheroes with a simple request.
$result = PackageName::featureTwo($param1, $param2);
```
<a name="guidelines-vs-skills"></a>
Now that we've introduced our A-team, let's chat about the guidelines and skills you'll need to become one with Laravel. But remember, it's all just a bit of fun around here! 🤘🏼

 Alright, let's dive into the world of Laravel Boost, where we arm our AI agents like a medieval knight with two essential tools: Guidelines and Skills!

Think of **Guidelines** as your trusty old squire, always by the agent's side when they embark on their code-chivalry journey. They carry the knowledge of Laravel conventions and best practices, ensuring our knight stays sharp and in line with the noble codebase rules of the realm.

On the other hand, **Skills** are the knight's arsenal of battle-tested strategies for specific tasks (like slaying Livewire components or defending against Pest tests). Instead of lugging around an unwieldy sword all the time, our knight deftly wields a sharp, focused tool when it's needed most. This not only lightens their load but also improves the quality of their battles (er... code).

| Aspect      | Guidelines                                | Skills                             |
| ----------- | ---------------------------------------- | ---------------------------------- |
| **Loaded**  | Upfront, always present, a faithful squire | On-demand, when relevant, a secret weapon |
| **Scope**   | Broad, laying the foundational groundwork | Focused, targeting specific tasks and battles |
| **Purpose** | Core conventions & best practices        | Detailed implementation patterns      |

So there you have it! Now our knight is equipped with both a solid understanding of the codebase and the right tools for each mission. Let's go forth, conquer the realm, and write some kick-ass Laravel code! 🏰💥🚀🐲

 ## The Laravel Boost API – Where Coders Go to Unleash their Inner Wisecrack!

Welcome to the Laravel Boost API, your smarty-pants sidekick in coding endeavors! With over 17,000 pieces of Laravel-specific knowledge at its disposal, this AI powerhouse is like having a party of PHP experts in your pocket.

Our semantic search with embeddings technology ensures that you'll get the right answers, not just any answers – it's like having a magic 8-ball for coding questions!

The `Search Docs` MCP tool (Meta-Coder Party Partner, obviously) lets your coding agent access this swanky Laravel documentation API service. With Boost's AI guidelines and witty repartee, your coder buddy will be instructed to use this API like a pro!

| Package | Supported Versions |
|---------|--------------------|
| Laravel Framework       | 10.x, 11.x, 12.x    |
| Filament                | 2.x, 3.x, 4.x, 5.x    |
| Flux UI (Free Edition)  | 2.x                   |
| Flux UI (Premium Edition) | 2.x Pro               |
| Inertia                 | 1.x, 2.x              |
| Livewire                | 1.x, 2.x, 3.x, 4.x   |
| Nova                    | 4.x, 5.x              |
| Pest                    | 3.x, 4.x              |
| Tailwind CSS            | 3.x, 4.x             |

<a name="extending-boost"></a>
## Extending Boost – Let's Take the Party to the Next Level!

Ready to take your coding prowess to the next level? With Boost's easy-to-use API, extending its abilities is as simple as pie! (Note: we can't guarantee it tastes like pie.) Check out our documentation for more info on how to customize Boost and make it work for you. Happy coding, party people! 🥳🎉🚀

 ### Unleashing Boost: The Sequel to Your Coding Sidekick! 🚀🤖

Boost, the coding sidekick you never knew you needed but always wanted, is already pals with a plethora of cool IDEs and AI agents. But what if your preferred coding companion isn't on the guest list? No worries, Boost won't keep you hanging - just invite them yourself!

<a name="adding-support-for-other-ides-ai-agents"></a>
### Let's Make New Friends! 🎉👋

If your current coding buddy isn't feeling the Boost vibe yet, it's time to throw them an invite! Creating your very own agent and integrating it with Boost is as easy as pie (or maybe more like pizza, because who doesn't love pizza?). Here's a step-by-step guide on how to become best coding pals:

1. **Whisk up your Agent:** First things first - bake your very own AI agent from scratch, or find one that's been pre-made and just waiting for some love from Boost.

2. **Mix in the Boost ingredients:** Once you've got your hands on an AI agent, it's time to get them up to speed with Boost's secret sauce. This involves a little bit of coding magic, but don't worry - we've got recipes and tutorials to help you out!

3. **Serve your Agent to Boost:** Once your agent is all dressed up in their Boost finest, it's time for the big introduction. Add them to Boost's inner circle, and watch the coding synergy unfold before your eyes!

Remember, with great power comes great responsibility. So make sure to test your newfound coding duo thoroughly to ensure they play well together and don't get into any mischief (unless that's what you're going for, in which case - more power to you!)

And there you have it! Your very own coding super-team, ready to conquer the world (or at least your to-do list) with style and efficiency. Now, let's get Boosting! 💥🚀🤖🎉

 ### Unleashing the Power of Extraordinary Code Companions! 🚀🤖

Ever wanted to expand your Laravel development squad with a flashy new AI code buddy? Well, buckle up, partner! Here's how you can create and recruit a fresh, intelligent recruit for your IDE or AI agent arsenal. 🤓

First things first: You'll need to craft a class that takes its cues from the wise `Laravel\Boost\Install\Agents\Agent` masterclass. This is your prospective team member's blueprint, so make it count!

Once you have your basic structure in place, it's time to specialize: Extend your class by implementing one or more of the following contracts based on your needs:

- `Laravel\Boost\Contracts\SupportsGuidelines` 🤓 - This contract gives your new agent the ability to understand and follow the rules of the AI playground (because, let's face it, even geniuses need a little guidance sometimes).
- `Laravel\Boost\Contracts\SupportsMcp` 🎯 - With this badge of honor, your AI will gain the power to communicate with and impress the mighty MCP (Master Chief Programmer – we're pretty sure that's what it stands for).
- `Laravel\Boost\Contracts\SupportsSkills` 🤖 - This contract arms your AI agent with Agent Skills, allowing it to perform tasks like a true Laravel cowboy or cowgirl (you know, all those tricky coding stunts and whatnot).

<a name="writing-the-agent"></a>
Now that you've got the lowdown on these contracts, let's write the agent! 📝

1. Start by extending `Laravel\Boost\Install\Agents\Agent`. This is like when you're adopting a puppy and want it to grow up to be just like its parents.
2. Implement the contracts that best suit your needs. Think of this as equipping your AI with special tools, each one more powerful than the last!
3. Write code that follows the contract methods. It's time for your agent to show off its new skills and prove it deserves a spot on your Laravel team! 💪
4. Register your new agent with Laravel Boost, so it can join the party and start making a difference in your development workflow. 🎉
5. Kick back and watch as your code becomes sleeker, faster, and more enjoyable to write, all thanks to your fancy new AI sidekick! 🤖🚀

 Alrighty then! Let's put on our coding cowboy hats and tame the Laravel beast together, partner. Here's how you write a CustomAgent that can handle Guidelines, MCP (Mind-Bending Code Problems), and Skills like a seasoned pro.

```php
Y’all better strap in, cause we’re about to get technical in this here corral! 🤠

<?php
namespace App;

Now, remember when we were kids and played cowboys and Indians? Well, it's a bit like that but with PHP classes and stuff. Let me show you how to create your very own CustomAgent, partner.

declare(strict_types=1);

This here line is just letting the computer know we mean business! No room for loose variables in our rodeo.

namespace App;

Now, if this were a Wild West town, you'd probably see tumbleweeds blowing through this namespace. But we're not out there, partner, we’re making Laravel magic happen.

use Laravel\Boost\Contracts\SupportsGuidelines;
use Laravel\Boost\Contracts\SupportsMcp;
use Laravel\Boost\Contracts\SupportsSkills;
use Laravel\Boost\Install\Agents\Agent;

Time to import some of our cowboy buddies! We’re gonna need these contracts and Agent class to help us out. Think of them as your trusty six-shooter and horse.

class CustomAgent extends Agent implements SupportsGuidelines, SupportsMcp, SupportsSkills
{
    // Your implementation...
}
```

For a proper example implementation, you can take a peek at [ClaudeCode.php](https://github.com/laravel/boost/blob/main/src/Install/Agents/ClaudeCode.php) – just like ol' Claude himself! And remember, the West isn’t won in a day; learning takes time and practice. Good luck, partner! 🤠🚀

 Ahoy there, Laravel swashbucklers! Let's have a jolly good time as we delve into the grand adventure of registering our very own custom agent.

First off, set sail to your application's boot decks and hoist the sails of your `AppServiceProvider` in `App\Providers`.

```php
Use yar-masthead Boost; (yep, that's "Laravel" in pirate speak)
```

Now, let's prepare for boarding by sprucing up the `boot` method:

```php
public function boot(): void
{
    Boost::registerAgent('customagent', CustomAgent::class); (Huzzah! We've added our swashbuckler to the roster)
}
```

Once you've registered your agent, it'll be ready for duty when you run `php artisan boost:install`. Aye-aye, Captain! Your custom agent is now on active service and ready to join the fleet!

So, hoist the Jolly Roger and set sail for success with your new matey in tow. Yo ho, Laravel!