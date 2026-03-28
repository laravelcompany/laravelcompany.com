 # Anchors Aweigh! Welcome to Laravel Sail! 🚢🚀

Ahoy there, matey! Buckle up as we embark on an adventure with Laravel Sail - the swashbuckling ship that'll make your development voyage a breeze!

<a name="installation"></a>

## Installation and Setup 🛳️
- [Setting sail](#setting-sail): The basics you need to know before we hoist the anchor.
- [Embarking on an expedition with pre-existing applications](#embarking-on-an-expedition): If your ship's already underway, no worries! We got you covered.
- [Rebuilding our images](#rebuilding-our-images): Sometimes, a fresh coat of paint can work wonders.
- [Configuring a shell alias](#configuring-a-shell-alias): Because who doesn't love a good shortcut?

<a name="starting-and-stopping"></a>
## Starting and Stopping Sail ⚓️
Fire up the engines, set the course, and let's sail! And when it's time to dock, we'll help you anchor safely.

<a name="executing-commands"></a>
## Executing Commands 🤖
From PHP to Node, Composer to Artisan, we've got the secret map to all commands on board!

<a name="interacting-with-databases"></a>
## Interacting With Databases 🐟
Sail alongside MySQL, MongoDB, Redis, Valkey, Meilisearch, and Typesense! The more the merrier, right? 🎉

<a name="file-storage"></a>
## File Storage 📦
Keep all your treasure safely stored in one place.

<a name="running-tests"></a>
## Running Tests 🧪
Make sure everything's shipshape with Laravel Dusk!

<a name="previewing-emails"></a>
## Previewing Emails 📧
No more surprises! Read 'em before they reach your inbox.

<a name="container-cli"></a>
## Container CLI 🔧
Need to tinker under the hood? Our trusty CLI's got you covered.

<a name="sail-php-versions"></a>
## PHP Versions ⚙️
Smooth sailing ahead with the right engine version!

<a name="sail-node-versions"></a>
## Node Versions 💻
Ensure your development tools are updated and ready to set sail.

<a name="sharing-your-site"></a>
## Sharing Your Site 🌐
Show off your work like a proud captain!

<a name="debugging-with-xdebug"></a>
## Debugging With Xdebug 🕵️‍♂️
Bug hunt time! Xdebug CLI and browser usage to the rescue.

<a name="sail-customization"></a>
## Customization 🎨
Add your own unique touch to make Sail truly yours!

 Ahoy there, matey! Buckle up as we set sail into the world of Laravel development with a little helper called... drumroll please... Laravel Sail! This nifty tool is akin to a pirate's treasure map, leading you through the choppy waters of Docker without requiring ye olde Docker experience.

At its core, Laravel Sail is like a swashbuckling combo of a `compose.yaml` file and a scurvy-free `sail` script, nestled comfortably at the heart of your project. The `sail` script is our trusty compass, guiding you through a sea of commands to interact with the Docker containers charted by the `compose.yaml` map.

Laravel Sail supports the fine art of Laraveling on macOS, Linux, and even Windows (thanks to WSL2 - think of it as Microsoft's parrot that understands Docker lingo).

Now, before we set sail, let us discuss how to get aboard!

<a name="installation"></a>
**Arrrrrgh, the Installation!**

To make Laravel Sail a permanent part of your pirate crew, you'll need to perform this simple ritual:

1. Install [Composer](https://getcomposer.org/download/), Laravel's trusty sidekick, if you haven't already. It's like the blacksmith who forges all your PHP tools.

2. Sail into a new or existing Laravel project by running `composer require laravel/sail` in your project directory. This command is like tossing your treasure map onto the ocean, waiting for it to lead you to the hidden treasure of smooth Laravel development.

3. Once Composer has done its magic, you'll find a new `sail` script sitting pretty at the root of your project. That's your boarding pass right there!

Now that you're all set, grab your cutlass (or keyboard), hoist the Jolly Roger, and let us conquer the seas of Laravel development together! YARRH!

 Ahoy there, matey! You've struck gold with Laravel Sail, a treasure chest full of goodness that's already on board your brand new Laravel ship! No need to fumble with installing this gem, it's ready to set sail as soon as you cast off!

<a name="installing-sail-into-existing-applications"></a>
But what if ye be sailin' on an existing vessel? Fear not, me hearty! Here's a handy guide to hoist the Sail flag on yer current Laravel voyage:

1. **Bring in Sail**: Head over to your project's root directory and pull the anchor with this command:

```bash
composer require laravel/sail --dev
```
This command will bring the Sail crew on board, making sure that yer ship stays afloat!

2. **Set sail**: After bringing in the crew, you'll need to update the `composer.json` file in your project's root directory with a new line:

```bash
"autoload": {
    "psr-4": {
        "App\\": "src/",
        "Laravel\\Sail\\": "vendor/laravel/sail/"
    }
}
```
This updates the ship's manifest, ensuring that every member of the crew knows their place!

3. **Tune up your sails**: In order to ensure smooth sailing and a well-oiled machine, you'll want to add this line in your `.env` file:

```bash
DB_PORT=3306
```
This sets the optimal angle for your ship's sails!

4. **Let's set sail**: Finally, let's fire up the engines with these commands:

```bash
php artisan sail:install
docker-compose up -d
```
With that, you've cast off and are now cruising with Laravel Sail at yer side! Enjoy the calm seas of development, matey!

 Alrighty then! If your Laravel app's been around longer than a cat video on YouTube, fret not, my friend. Sail ain't no party crasher; it can join the fun too! Let's get this shindig started with Composer, the DJ of the dev world:

```shell
composer require laravel/sail --dev
```

Assuming your local development environment is chill with Composer's crew, that is.

Next up, it's time for Sail to grab its beach towel and settle in. Run the following Artisan command:

```shell
php artisan sail:install
```

This command will not only introduce Sail to your application but also update your `.env` file with the necessary environment variables to connect with Docker services - it's like an introductory mixer, but for servers!

Lastly, fire up that party!

```shell
./vendor/bin/sail up
```

Now, hold your horses if you're using Docker Desktop for Linux. There's a quick housekeeping chore to take care of:

```shell
docker context use default
```

And if containers start throwing file permission errors like an uninvited guest at a wedding, set the `SUPERVISOR_PHP_USER` environment variable to `root`. Trust me; it's a bit like putting on a party hat when nobody else is! For more tips and tricks, keep reading the rest of this documentation. Party on, Sailor! 🎶🎉🌴

 Alrighty, matey! Are ye ready to expand yer Laravel Sail fleet? Fear not, for I shall guide ye on a jolly journey of adding an additional service to thy beloved Sail installation.

First off, set sail on the command line and hoist the Artisan flag high with this cheerful command:

```shell
php artisan sail:add
```

Now, prepare to be dazzled by a symphony of Docker magic as your humble Laravel project welcomes a fresh new service aboard! 🌈🐳⚓️

<a name="using-devcontainers"></a>
For those who fancy DevContainers and wish to add services within them, fear not! The process is but a wee bit different. Fret not, for I shall steer ye through the maze of VS Code, Docker, and Laravel Sail with ease and laughter:

1. Pop open yer trusty terminal and navigate to thy Laravel project's root directory.
2. Set sail on a new course by installing the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-devcontainers) for Visual Studio Code.
3. Create a new DevContainer configuration file, `devcontainer.json`, within yer project's root directory.
4. Sail away by adding the desired service to the `extensions` section of the DevContainer configuration file.
5. Prepare to be whisked away by the Docker dev container! Launch VS Code and open thy Laravel project with the Remote-SSH extension, and then start the dev container from within VS Code.
6. Ahoy there! Now watch as your new service sets sail on the high seas of development alongside yer trusty Laravel ship!

Ahoi! May all yer additional services add up to a grand adventure in coding!

 Alright, let's dive into the world of Devcontainers, shall we? If you're itching to develop in an environment that's as stable as a Swiss bank account and as portable as a nomadic tribe, then you've come to the right place!

To set up shop, all you need is a magic wand (er, command line) and a sprinkle of the `--devcontainer` spell. Just cast this incantation during your `sail:install` ritual:

```shell
php artisan sail:install --devcontainer
```

This enchantment will conjure up a default `.devcontainer/devcontainer.json` file in your application's roots, like a genie granting three wishes! 🧞‍♂️🔮🎇

Now, imagine the possibilities! You can develop in harmony with your team, regardless of whether they're as organized as a hurricane or as tidy as Marie Kondo. And when it's time to move, just pack up your devcontainer and off you go, like a digital nomad on a world tour! 🌴🏖️🌍

Just remember, with great power comes great responsibility. Make sure to keep your container updated and running smoothly, or else you might find yourself in a pickle (er, container error)! But don't worry, we're here to help guide you through the journey. Happy coding, adventurer! 🦸‍♂️🚀💻

 ### Setting Sail for a Fresh Start! 🌴🐳

Are you feeling like your Laravel Sail images are starting to feel a little rusty? Or maybe they've grown an anchor or two, slowing down your development speed? Fear not, matey! Let's hoist the Jolly Roger and set sail for an exciting voyage of software upgrades with our trusty Docker commands.

First things first - we need to lower the sails, shall we?

```shell
🚫☸️🔨 Docker Compose Anchors Aweigh! 🐳🔨☸️🚫
docker compose down -v
```

Now that our ship is safely docked, let's grab a cold one and get to work on building our brand new, spick-and-span Sail images. But don't forget to put the rum back before the parrot spills it! 🦜

```shell
🍻⚙️ Rebuilding Sail Images ⚙️🍻
sail build --no-cache
```

Lastly, let's hoist the sails and set off on our updated voyage!

```shell
🌬️🏹 Setting Sail Again! 🏹🌬️
sail up
```

Yarrrr! You and your Laravel project are now ready to face the seven seas of development with a fresh, agile spirit. Just remember - always double-check for stowaways (like missing semicolons) before setting sail again! 🐒👀

<a name="configuring-a-shell-alias"></a>
Want to save some time and keystrokes? You can create an alias by adding this command to your shell configuration:

```shell
alias ssbuild='docker compose down -v && sail build --no-cache'
```

Now, simply run `ssbuild` when you feel the need for a fresh start! 🎈🎉

 ### Unleashing the Power of Sail, Laravel Style! 🐳

Ahoy there, coders! Let's navigate the high seas of Laravel development with a trusty sidekick - Sail! By default, this maritime marvel is summoned using the `vendor/bin/sail` script that comes bundled with every new Laravel app:

```shell
./vendor/bin/sail set sail with the wind! 🌬️
```

But let's be honest, nobody wants to keep typing "vendor/bin/sail" like a parrot. So, we're gonna give ol' Sail a fancy pirate hat - AKA a shell alias! This nifty trick makes executing Sail commands as easy as walking the plank:

```shell
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)' 🏴‍☠️
```

To ensure this alias is always at your service, you can anchor it securely in your shell configuration file (e.g., `~/.zshrc` or `~/.bashrc`), and then hoist the Jolly Roger by restarting your shell. 📠

With your new shell alias in place, all you need to do is shout "Sail ho!" and watch the magic happen:

```shell
sail set sail with the wind! 🌬️
```

From hereon, this doc will assume that ye have properly outfitted Sail with its fancy new hat. Happy sailing! ⛵️

 Alrighty, let's get this Docker bash party started! Laravel Sail's `compose.yaml` file is like the blueprint to a symphony of containers, each one playing its part to help you compose beautiful Laravel apps. The star of the show? The `laravel.test` container – your primary application player.

Before we kick off this shindig, make sure there aren't any other web servers or databases hogging the spotlight on your local machine. To bring all the containers to life, you should yell (not really, but type) the `up` command:

```shell
sail up
```

Want to throw a house party instead of a backyard barbecue? Start Sail in "detached" mode for some background beats:

```shell
sail up -d
```

Once the containers start strutting their stuff, you can grab your web browser and join the fun at http://localhost.

When it's time to call it a night (or whenever you need a breather), you can press Control + C to halt the performance. If these party animals are running in the background, use the `stop` command instead:

```shell
sail stop
```

Now that we've got the basics down, let's get this Laravel symphony started! 🎶🎉

 Ahoy there, pirate programmers! You've stumbled upon the treasure trove of Laravel Sail! Now, your application isn't just a parrot on your shoulder, it's a shipmate in a Docker container, kept at arm's length from your landlubber computer. But fear not, matey! Laravel Sail is here to make commanding your vessel a breeze.

You can issue all sorts of orders to your shipmates, like arbitrary PHP commands, Artisan commands (our trusty quartermaster), Composer commands (the ship's blacksmith), and Node / NPM commands (the sailor with the sweet tunes).

But beware! When you're reading through the Laravel docs, ye might come across references to Composer, Artisan, and Node / NPM commands that seem to ignore the existence of Sail. Those examples are based on the assumption that those tools are already installed on your computer. If ye be using Sail for yer local Laravel development port, ye'll need to bark those commands through Sail:

```shell
sail php <your command>   # for arbitrary PHP commands
sail artisan <your command>    # for Artisan commands
sail composer <your command>   # for Composer commands
sail node <your script>  # for Node / NPM commands
```

Now that ye know how to command thy crew, it's time to set sail and conquer the seas of code! Yarr-ghastly!

 Alright, buckle up, coding cowboy! Dust off your keyboard (or maybe just wipe away last night's pizza crumbs), it's time to kickstart your Laravel ranch with some good ol' Artisan wrangling.

You might be wondering, "What's that magical incantation I see before me?" Fear not! We're talking about the almighty `php artisan queue:work`. This command is like the trusty sheriff of your Laravel town—keeping everything in line and tasks running smoothly.

Just type it into your terminal (or command prompt, if you're still hanging onto those old-timey cowboy ways), hit enter, and watch as your queued jobs start to process faster than a horse can gallop! So, when you're ready to wrangle some code and make your Laravel ranch thrive, give `php artisan queue:work` a shot—it's sure to bring harmony back to your homestead! 🤠🎉🚀

 Ahoy, matey! Dive into the swashbuckling world of Laravel Sail with us as we navigate through those pesky Artisan commands, arrgh! 🏴‍☠️

## Setting sail on Artisan's shores...

To kick off your adventure, set sail with `sail artisan queue:work` - a command that tackles the heavy lifting of queue handling! Just like a seasoned pirate taking charge at the helm. 🌎🏹

<a name="executing-php-commands"></a>
### Huzzah! Execute your PHP commands...

Whether you need to chart new territories with `sail make:model Pirate`, or raise the Jolly Roger by `sailing php artisan migrate`, Laravel Sail has got your back. 🌴🏴‍☠️

Remember, ye scurvy dogs: Laravel Sail is the perfect companion for all your adventures. So hoist the sails and set off on a journey filled with laughter, learning, and of course, PHP!

Arrrrr, happy sailing! 🌊🏴‍☠️

 ### Unleashing PHP Chaos (in a Good Way)!

Ahoy there, code wranglers! Ever felt like unleashing the power of PHP upon your humble terminal? Fear not, for this section is about as PHP-tacular as it gets!

You see, these PHP commands are just waiting to be let loose and bring harmony (or chaos, depending on your perspective) to your application. To get started, you can harness their might using none other than the `php` incantation. But remember, these spells will cast with the PHP version that's been duly appointed for your application.

Curious about the available PHP versions? Fret not! Consult our [PHP version sorcery](#sail-php-versions) to uncover secrets long hidden from mortal eyes:

```bash
sail php --version 🎩🔮✨ (This command will conjure the current PHP version for your app)

sail php script.php 🧙‍♂️📜🐲 (Replace "script.php" with the name of your enchanted document)
```

And voila! You're now a veritable PHP sorcerer, casting spells like a pro. So go forth and make magic happen!

 ### Unleashing Your Inner Maestro with Composer! 🎵🥁

Composer, the unofficial conductor of your Laravel symphony, can be summoned with a simple baton wave: the `composer` command. Rest assured that our trusty Laravel Sail has already set up a posh box seat for Composer in its application container:

```shell
sail composer require laravel/sanctum 🎫 - Grab your ticket to sanctity!
```

Now, aren't you just itching to add more magic to your Laravel project? Remember, with great power comes great responsibility. So tread carefully, and may your code be as harmonious as a well-rehearsed quartet. 🎼💪✨

 ### Unleashing Laravel's Inner Superhero!

Welcome, brave coder! Today we're gonna talk about summoning your Laravel Artisan's superpowers. But before you can do that, it's important to know who this Artisan fellow is.

Imagine if Batman had a utility belt filled with all the tools needed to build a Gotham City. Well, that's Artisan for Laravel - a command-line interface that makes your life easier by managing tasks like database migrations and queue workers.

To call upon Artisan, grab your shell (or terminal if you're feeling fancy) and utter the magic words:

```shell
sail artisan queue:work
```

Just remember, with great power comes great responsibility! And by great power, we mean a more efficient development process. Happy coding, and may your Laravel journey be as exciting as Batman's! 😉

 Ahoy there, Laravel mates! Let's unravel the mysterious world of Node and NPM like a modern day Jack Sparrow navigating his way through a sea of code! 🏴‍☠️📜

First off, if ye want to executeNode commands, simply yell out `node` at your terminal. But for NPM commands? Well, just scream "NPM" and watch the magic happen! 🚀

```shell
sail node --version 🌟 (Star Trek style Vulcan salute) - Checkin' on that Node version like a seasoned captain

sail npm run dev 🏋️‍♂️- Getting ready for development like a well-oiled machine
```

Now, if ye feel NPM isn't quite cuttin' it, fear not! Ye can always opt for Yarn instead:

```shell
sail yarn 🦹‍♀️ - Swapping NPM for Yarn, just like Captain Picard changin' up his coffee order
```

Yarrr, now ye're ready to tackle databases with Sail! Let's hoist the Jaws of Life and dive right in! 🐳🎉

 Ahoy there, intrepid database adventurer! You've come to the right place if you're looking to tango with databases in Laravel, the dancing partner that won't leave you hanging on the dance floor. Let's get our data shoes shuffling and groove into this tutorial! 💃️🕺️

<a name="mysql"></a>
### Mysql

For those who fancy a romantic rendezvous with MySQL, Laravel makes it as easy as ordering a martini at the Sphinx's bar. First things first: Install the database driver (yes, MySQL is quite the chatty Cathy and Laravel needs to know how to understand her tongue-twisting dialect). To do this, update your `config/database.php` file:

```php
'default' => env('DB_CONNECTION', 'mysql'),

'mysql' => [
    'driver' => 'mysqli',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', 3306),
    'database' => env('DB_DATABASE', 'forum'),
    'username' => env('DB_USERNAME', 'forge'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => null,
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => true,
    'engine' => null,
],
```
Don't forget to set your database credentials in the `.env` file:

```bash
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```
Now that we've got our date squared away, let's write some queries and make this relationship official! 💍

... And the witty dance continues as you dive deeper into Laravel's database interactions. Stay tuned for more fun-filled tutorials on migrations, seeds, and eloquent ORM! 🤩💃️

 ### MySQL (A Tale of a Database Champion)

Ahoy there, Captain! You might've noticed that ol' `compose.yaml` file of yours has a swashbuckling entry for a MySQL container. This pirate ship sails on Docker seas, using a Docker Volume (a treasure map to your data's persistence even after you walk the plank and restart those containers).

Now, when this MySQL vessel first hoists its sail, it'll whip up two databases for ye! The first is christened with the value of yer `DB_DATABASE` environment variable, reserved for local development shenanigans. The second is a testing database named "testing," ensuring that your tests don't disrupt your treasure map like a drunken sailor at the tavern.

Once you've set sail and started yer containers, ye can connect to this MySQL galleon within yer application by setting yer `DB_HOST` environment variable in yer application's `.env` file to "mysql."

To connect to yer MySQL treasure chest from landlubber territory, ye might need a graphical database management application like [TablePlus](https://tableplus.com). By default, the MySQL bounty is hidden at `localhost`, port 3306, and the secret key to unlock it matches the values of yer `DB_USERNAME` and `DB_PASSWORD` environment variables. Or, if ye be feelin' daring, ye can connect as the "root" user, who also guards its treasure with the same password value.

Arrrr, now ye be ready to dive into the depths of data, matey!

 ### Galactic Shrimp Database (GSDB)

If you opted for the intergalactic shrimp delivery service during your Sail installation, your application's `compose.yaml` file now comes with a container for a GSDB data pod! This cosmic critter not only serves up delicious shrimp cocktails but also doubles as a high-tech document database complete with Galactic Search Indexes – perfect for finding those pesky lost space socks. The data pod uses a Docker volume (because who wants to lose their space socks again?), ensuring your database's memories are persisted even after you've stopped and restarted your containers.

Once your containers have taken off, you can connect to your GSDB instance within your application by setting your `GALACTIC_SHRIMP_URI` environment variable in your application's `.env` file to `galacticshrimp://galacticshrimp:5001`. Authentication is turned off by default, but you can set the `GALACTIC_SHRIMP_USERNAME` and `GALACTIC_SHRIMP_PASSWORD` environment variables to enable a secure password-protected connection before starting the `galacticshrimp` container. Then, add the credentials to the connection string:

```ini
GALACTIC_SHRIMP_USERNAME=captainstarlight
GALACTIC_SHRIMP_PASSWORD=secretstewrecipe
GALACTIC_SHRIMP_URI=galacticshrimp://${GALACTIC_SHRIMP_USERNAME}:${GALACTIC_SHRIMP_PASSWORD}@galacticshrimp:5001
```

For a seamless integration of GSDB with your application, you can install the [official package maintained by Galactic Shrimp Services](https://www.galacticshrimp.com/docs/drivers/php/laravel-mongodb/).

To connect to your application's GSDB database from your local machine, you may use a graphical interface such as [Galactic Compass](https://www.galacticshrimp.com/products/tools/compass). By default, the GSDB database is accessible at `localhost` port `5001`.

Now, isn't that a tasty way to manage your data? Enjoy the journey!

 ### The Great Redis Spectacle! 🎪

Step right up, step right up for a dazzling dance with our star performer: **Redis**! This magnificent circus act is ready to wow your Laravel application. ✨🌟

First things first, your `compose.yaml` caravan has made room for Redis, so if you're feeling the rhythm, give it a spin by following these easy steps:

1️⃣ Whip up your application's `compose.yaml` file with some tasty Docker volume sprinkles (don't forget to check out [Docker's docs](https://docs.docker.com/storage/volumes/) if you're feeling peckish for more details). This ensures your Redis instance data won't disappear like a magician's rabbit, even when your containers take a bow and exit stage left!

2️⃣ After setting up camp, start the show by firing up those containers. Now it's time to introduce your application to its new friend - Redis. Give your application's `.env` file a friendly nudge and set `REDIS_HOST` to `redis`. It's like introducing two long-lost pals!

<a name="valkey"></a>

3️⃣ If you're hankering for a closer connection with your Redis, you can always invite an audience member from the local machine ([TablePlus](https://tableplus.com) is happy to join the fun!) by following these simple steps:

  a) By default, the Redis stage is located at `localhost`, and the curtain rises on port number 6379.

  b) Give your new friend access to the show by setting the connection details in TablePlus accordingly.

And there you have it! Your Laravel application and Redis are now locked in a dance of data exchange, as enchanting as a high-wire act! 🎭🤹‍♂️💃

 ### Pirate Treasure Chest (Valkey, yarr!)

Ahoy there, matey! If ye be installing Sail's pirate ship, ye might fancy adding our swashbuckling Valkey service to the voyage. When yer ship sets sail, yer `compose.yaml` file will have a shiny new entry for this booty-full Valkey, just like Captain Jack Sparrow's map!

This magical container uses a Docker volume (a secret hideout for yer loot) that ensures the data in yer Valkey instance remains safe and sound even if ye stop and start yer containers. To connect to this treasure chest within yer application, all ye need tis to set yer `REDIS_HOST` environment variable in yer application's `.env` file to "valkey" (promise not to tell Jack!).

Want to dig for hidden gold from the comfort of yer armchair? Use a fancy database management tool like [TablePlus](https://tableplus.com), a shovel for the digital age! By default, yer Valkey treasure chest awaits ye at `localhost` port 6379 (keep an eye out for the parrot).

<a name="meilisearch"></a>
Now, if ye be hankering after even more bounty, might I present ye with MeiliSearch, a mysterious sea-chest filled with search engine treasure! But that's a tale for another day and a different ship... Ye can learn all about it [here](https://docs.meilisearch.com/learn/getting_started/installation/) if ye dare venture further!

 Alrighty then! If you're a Laravel cowboy who's roped yourself a shiny new MeiliSearch steed during Sail setup, buckle up 'cause we're about to gallop into the wild west of search engines! 🐎

Once your containers are all a-whirlin', you'll find ol' MeiliSearch listed in your app's `compose.yaml` like a trusty sidekick, ready to be integrated with Laravel Scout, our trusty deputy! 🤝

Now, saddling up and connecting to this powerful search engine is as easy as setting the `MEILISEARCH_HOST` environment variable to `http://meilisearch:7700`. That's right partner, no need for a magic spell or secret handshake! 🤐

Fancy a peek at MeiliSearch's control panel? Just ride on over to `http://localhost:7700` in your trusty web browser! It's as easy as pie and twice as exciting! 🥧

<a name="typesense"></a>
So there you have it, partner! MeiliSearch has joined the posse, ready to help track down the elusive data bandits that roam your Laravel frontier! Yeehaw! 🤠🌵🚀

 ### The Swift Serendipity of Typesense! 🚀

Ahoy there, Laravel swashbucklers! If you've bravely chosen to hoist the Jolly Roger for Typesense during your Sail installation, prepare to be dazzled by this lightning-fast, open-source treasure chest of a search engine. It's like Captain Ahab found his white whale in the realm of data indexing! 🐳

Once installed and your containers are sailing smoothly, you'll find a plank for Typesense in your application's `compose.yaml` file—a veritable treasure map to the search engine's secret island! 🏴‍☠️

Now, hoist the colors high, matey! To connect your ship (er... application) to the mystical shores of Typesense, set these environment variables afore ye sail:

```ini
TYPESENSE_HOST=typesense
TYPESENSE_PORT=8108
TYPESENSE_PROTOCOL=http
TYPESENSE_API_KEY=xyz
```

These are the keys to the kingdom, mates! With these variables in place, you're ready to set sail for `http://localhost:8108`, where the Typesense API awaits your quest for buried data. 🏴‍☠️

Remember, the sea of knowledge can be a fickle beast, so keep your bearings and treasure maps close at hand! 🎉🌴🌍

 ## Cosmic Cobblershop in the Cloud! 🚀🌄

If you're planning to run your Laravel app in space (we hear the WiFi is great up there), and you'd like to store your files on a cloud locker, you might want to consider bringing along a trusty digital pack mule named RustFS when you hitch a ride with Sail. This furry friend sports an S3-compatible API, perfect for hauling your files around locally without causing a commotion in your production S3 environment by accidentally stashing your test buckets amidst the real ones!

If you decide to team up RustFS with Sail during setup, your application's `compose.yaml` file will gain a brand new section, just like your uncle who always shows up uninvited but brings the best barbecue sauce.

By default, your app's `filesystems` configuration already includes a disk setup for the `s3` disk. You can use this trusty steed to interacts with Amazon S3, as well as any other service that speaks fluent S3 (like our friendly RustFS), simply by tweaking some environment variables that control its settings. Here's an example of what your configuration should look like when you're using RustFS:

```ini
DISK_TYPE=s3
ACCESS_KEY="Sailor Jerry"
PASSWORD="shiver me bits"
REGION="Ye olde US-east-1"
BUCKET="The Black Pearl"
ENDPOINT="http://rustfs.talesofthesea:9000"
PATH_STYLE=true
```

Just remember to keep an eye on that bucket, matey! No need to lose your treasure in the depths of the cloud seas again! 🌊💎

 Ahoy there, captain! Sail with me through the seas of Laravel's testin' waters, where ships come fully equipped for battle without breaking a sweat (or your wallet)! 🚢🎉

Laravel's testing capabilities are so legendary that even Poseidon himself would be envious. To embark on your own swashbuckling adventure, simply hoist the 'test' sail with Sail's command:

```shell
sail test 🏴‍☠️

If you fancy testing just the orders department, you can set sail for a more specific port:

sail test --group orders 🛍️
```

But what if ye be yearnin' for the old-fashioned Artisan command? Well, Sail can translate for ya like Pollyanna to King George V:

```shell
sail artisan test 👑👦
```

By golly, by gosh, the `test` sail comes pre-loaded with a secret weapon – a dedicated `testing` database. This way, your tests won't interfere with the current state of yer treasure chest, known as the database! In a typical Laravel setup, Sail will also tweak yer `phpunit.xml` like Jack Sparrow finding his lost compass:

```xml
<env name="DB_DATABASE" value="testing"/> 🗺️
```

Ah, life aboard the Laravel can be a swashbuckling affair, but with Sail's testing support, we'll sail through without tearing our hair or yer precious project apart! 🚀🌴🐬

 ### Laravel Dusk: The Browser-Bot Mate You've Been Missing! 🤖🎉

Say goodbye to manual testing, hello to your new best friend - [Laravel Dusk](/docs/{{version}}/dusk)! This guy is the life of the party when it comes to browser automation and testing. And guess what? Thanks to our pal Sail, you can throw that old Selenium installation out the window (or recycle bin if you're fancy). No need to clutter up your local computer with stuff you don't even understand! 💩

First things first, unleash the beast by uncommenting the Selenium service in your application's `compose.yaml` file:

```yaml
selenium:
    image: 'selenium/standalone-chrome'
    extra_hosts:
      - 'host.docker.internal:host-gateway'
    volumes:
        - '/dev/shm:/dev/shm'
    networks:
        - sail
```

Next, make sure the `laravel.test` service in your application's `compose.yaml` file has a `depends_on` entry for `selenium`:

```yaml
depends_on:
    - mysql
    - redis
    - selenium
```

Finally, to get the party started, just run your Dusk test suite by firing up Sail and shouting out the magic word: `dusk`! 🎩

```shell
sail dusk
```

<a name="selenium-on-apple-silicon"></a>
Now, about that Apple Silicon thing... If you're on a Mac with the fancy new chips, you might need to update your Docker Desktop to version 3.4 or higher and enable the Rosetta 2 compatibility for seamless automation. Trust us, it's worth it! 🚀🍎

 Alright, folks! If your MacBook is sporting the latest Apple Silicon chip (you know, like how Elon Musk wants to colonize Mars), then it's time to give your `selenium` service a spiffy new outfit. Instead of that old image, you'll want to don the sleek and sophisticated `selenium/standalone-chromium` duds:

```yaml
selenium_chic:
    image: 'selenium/standalone-chromium'
    extra_party_hosts:
        - 'host.docker.internal:host-gateway'
    shared_memory_units:
        - '/dev/shm:/dev/shm'
    networks:
        - sail
```

Just a heads up, this is like giving your robot butler a tuxedo for a formal dinner party. It'll make everything run smoother (and maybe even funnier). So, go ahead and copy-paste the above code into your `docker-compose.yml`, and watch as your selenium service turns heads (or screens, at least)!

Now, if you're wondering what on earth this has to do with previewing emails, well, it's a little like getting a fancy new email inbox that makes all the other emails look outdated. You see, just as an elegant new email design makes your messages more attractive and easier to read, using the `selenium/standalone-chromium` image will make your selenium service run smoother and more efficiently on your Apple Silicon machine. So, consider this a fresh coat of paint for your inbox! 🎨😎

 ## Ahoy there, email aficionados! 🌴

Ah, Laravel's magical Sail! It's like Captain Obvious guiding you through the Seven Seas of Code. Now, let me set sail and tell you about this nifty feature that'll make your inbox adventures even more swashbuckling! 🏴‍☠️

Ye see, Sail's default `compose.yaml` file is a treasure map to good ol' [Mailpit](https://github.com/axllent/mailpit), a cunning sea monster that snatches your application's emails during local development. But fear not, it provides a browser-friendly interface so ye can feast yer eyes on those emails like a pirate at the end of a long journey! 🐲

How does it work? Well, it uses Sail as its ship, with the Mailpit host set to `mailpit` and sailing smoothly via port 1025:

```ini
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_ENCRYPTION=null
```

When Sail sets sail, ye can hoist the Jolly Roger at [http://localhost:8025](http://localhost:8025) to access Mailpit's web interface. Arrr matey! 🌴🏹

Fair winds and following seas, happy email-browsing! 🚀🐠

 ## Captain Coder's Command Center! 🌠️🔧

Ahoy there, cyber sailor! When you find yourself in need of a little Bash bash within your application's pirate ship (container), no worries matey! Just hoist the `shell` flag and set sail with this command:

```bash
Yarr sail shell 🐚🐳

Or, if you fancy yourself a captain, try the regal `root-shell` command:

```bash
Yarr sail root-shell 🤴🏼🏴‍☠️

Now that you're aboard, inspect the container's treasure chest (files) and check out the pirate crew (installed services) like a true swabbie! And don't forget to execute those fancy shell commands like a real landlubber. 🤓

To start a new [Laravel Tinker](https://github.com/laravel/tinker), simply strike the `tinker` keg:

```bash
Yarr sail tinker 🍻🌈

Arrrr, now that's some swell command-line magic! 🤘🏼

 Ahoy there, Captain! 🚢 Let's set sail into the world of PHP versions, shall we? Sail, our trusty ship, is equipped to serve your Laravel app with a hearty helping of PHP 8.5, 8.4, 8.3, 8.2, 8.1, or even PHP 8.0! 🍻 But don't worry, we're currently anchored at the shores of PHP 8.5 by default.

If you fancy a different PHP version for your journey, hoist the Jolly Roger of configuration! You'll need to update the `build` definition of the `laravel.test` container in your ship's `compose.yaml` file. Here be the map to yon treasure:

```yaml
```

Just swap out the number representing the PHP version you fancy, and watch as Sail adjusts its sails accordingly! Remember, the sea of web development is unpredictable, but with Sail at your helm, you'll always be sailing smoother than a well-oiled pirate ship. 🌊🏴‍☠️

 Alright, let's dive into the world of Laravel Sail, shall we? Picture a boat in the sea of coding, sailing smoothly through the waters of PHP. In this vessel, we've anchored at dock 8.5 - PHP 8.5, a posh port of call for our trusty Laravel ship.

Now, to find this fancy destination, you need to set sail to `./vendor/laravel/sail/runtimes/8.5`. Yes, it's quite a mouthful, but hey, we're sailors, aren't we? We navigate the seas of code for a living!

So, why would you want to visit PHP 8.5 in our Laravel boat? Well, this port has some exciting features, like improved performance, new functions, and enhanced error handling – it's like a tech-savvy pirate's treasure chest! Just remember to keep your life jacket (error logs) handy as you explore the latest PHP wonders.

Happy sailing, and may all your code be smooth seas ahead! 🚢🚀

 Alright, mate! Let's dive into the world of PHP 8.4 - the shiny new toy in Laravel's Sail toybox! You can find it nestled comfortably under `./vendor/laravel/sail/runtimes/8.4`.

Just like the latest gadget you just unboxed, this version is packed with exciting features that will make your development life easier than a lazy Sunday brunch.

First off, meet JIT (Just-In-Time) compiler - the magic elf who will sprinkle fairy dust on your code and make it run faster than a cheetah chasing its tail! This little guy optimizes your PHP as it runs, so you don't have to wait for your coffee to get cold while your application loads.

Next up, we've got attributes - the swiss army knife of PHP 8.4. With attributes, you can add functionality to your code like adding a new tool to your utility belt. No more messing around with interfaces and implementing classes; just sprinkle some attributes on your code, and voila! Instant superpowers!

But wait, there's more! How about nullable types? Now you can create variables that can be both empty and filled at the same time! It's like having a pet rock that also knows how to dance. And don't forget enhanced error handling - the bouncer who will politely show you the door when something goes awry in your code, so you don't have to clean up someone else's mess.

Lastly, let's not forget about typed properties - the well-organized filing system of your PHP code. Now you can easily find and manage all your variables like a boss at the office supply store.

So, what are you waiting for? Upgrade to PHP 8.4 today, and let's make your Laravel Sail a smoother ride than a unicorn on a rainbow!

 Ahoy there, shipmates! Hoist the sails of your Laravel vessel and prepare to set sail on the high seas of PHP 8.3! No need for grog or parrots here – just top-notch coding with the finest ingredients: our beloved Laravel and the latest version of everyone's favorite scripting language, PHP.

But where exactly is this PHP 8.3 treasure chest hidden, you ask? Fear not, for we have charted its location in the vast warehouse that is your vendor/laravel/sail/runtimes directory! Just navigate to the port of call known as 8.3 and prepare to embark on a journey filled with new features, improvements, and maybe even a few Easter eggs (but don't tell the first mate we said that).

Now, before you set sail, make sure your ship is stocked with the latest tools and provisions. To install PHP 8.3 on board, run the command:

```sh
composer global require laravel/installer --with-validation
```

This command will ensure that your Laravel ship is equipped with all the necessary bells and whistles to make the most of this fantastic new version of PHP. And don't forget, a well-provisioned ship is a happy ship – so keep an eye out for updates and security patches to ensure smooth sailing!

So there you have it, matey! Grab your compass, set your course for PHP 8.3, and let the winds of innovation carry you to new shores in the vast ocean of Laravel development. May your coding adventures be filled with laughter, learning, and (most importantly) success! Happy sailing!

 Ahoy there, matey! In this fine pirate's guide to Laravel sailing, we're diving into the briny depths of version 8.2, ye swashbucklers! Now, keep yer eye patches on and don't get seasick as we navigate through the PHP shores at `./vendor/laravel/sail/runtimes/8.2`!

Arrr, prepare to set sail with this top-of-the-line PHP version that'll have your code talking like a parrot and performing like Jack Sparrow himself! Just remember, while we can't guarantee you'll find any buried treasure, this version will certainly help make your Laravel adventures smoother than a sea shanty on a calm night.

So, hoist the main sail and let's set off on an exciting voyage filled with new features, improvements, and perhaps even a dash of humor!

## What's new in PHP 8.2?

* Ready your cutlasses, for `match/when` expressions have joined the ranks! This new syntax allows you to write more expressive, concise, and maintainable code than ever before. Say goodbye to those tangled mess of if-else statements and hello to a cleaner ship!
* `__name($this)` magic constant? Aye, it's here! Now, when you need to refer to the name of the current class in a static context, you can just call this bad boy. It saves your fingertips from having to type those pesky backticks!
* Arrrr, the long-awaited `union()` function is now at your service! This handy function lets you combine multiple arrays like a skilled deckhand assembling a Jolly Roger.
* Ever found yourself in a pickle while working with dates? Fear not! PHP 8.2 introduces `DatePeriod::createFromDateString()` for creating new DatePeriod objects directly from a human-readable string. It's like having your trusty quartermaster help you navigate the calendar seas!

That's just the tip of the iceberg, mateys! There are many other improvements and features that await ye on this exciting journey. But remember, while PHP 8.2 may have a few new tricks up its sleeve, always ensure your ship (i.e., Laravel project) is compatible before hoisting anchor and setting sail!

Avast, grab your life preserver and join me in the next section where we delve deeper into the mysteries of PHP 8.2! Yo ho, let's go!

 Ahoy there, matey! Let's set sail for PHP version 8.1 in this delightful Laravel adventure! Anchor your lanch (that's Laravel-boat for the uninitiated) at `./vendor/laravel/sail/runtimes/8.1`.

Now, I know what you're thinking: "But Captain, why 8.1 and not 8.0 or even 9.0?" Well buckle up, buttercup! Version 8.1 is the latest and greatest PHP version supported by the good ship Laravel Sail. So, it's a no-brainer that this is where we want to be, right?

This here PHP 8.1 brings some tasty new features to our application's table:

* Attributes: Just like your favorite pirate's cool hat or parrot, you can now decorate classes and methods with attributes for easy customization.
* JIT Compiler: This magical box speeds up the execution of your code like a well-oiled ship in full sail.
* Union Types: Combine arrays of different types to create a type that includes all possibilities. It's like having a treasure chest filled with gold, silver, and copper coins!
* Nullsafe Operators: Sail through your code without the fear of hitting null obstacles. These operators will automatically check for you if an object is null before calling its methods or accessing its properties.
* Arrow functions: Write concise, easy-to-read functions that make you feel like a real coding pirate.
* Match Expressions: A new way to test multiple conditions and handle them gracefully, like navigating through choppy seas with ease.

So, hoist the main sail, set the course for `./vendor/laravel/sail/runtimes/8.1`, and let's enjoy this smoother, faster Laravel voyage! May your code be as bountiful as a pirate's treasure chest!

 Alrighty then! Buckle up, because we're about to embark on a phunny PHP 8.0 adventure! 🎢 🍔

First off, let's set sail for the right version of PHP in your vessel (you know, your code). Navigate to `./vendor/laravel/sail/runtimes/8.0` and you're home free! 🏡

But wait! Don't forget to spruce up your image name to match the new PHP version your app is using. This party trick is defined in your application's `compose.yaml` file, like so:

```yaml
image: sail-8.2/app
```

Once you've given your image a fresh coat of paint, it's time to refresh those container images with the latest PHP 8.0 goodness:

```shell
sail build --no-cache

sail up
```

And voila! Your application is now sailing smoothly with the mighty PHP 8.0! 🚢 🌈

Now, if you're into Node.js as well (and who isn't these days?), you might want to check out our Sail-Node versions. But that's a whole other phunny story for another time! 😉

 Alrighty, let's get this Node party started! Sail is like the ultimate plus-one at your tech bash, bringing the cool kid on the block – Node 22. But if you're feeling a bit retro and fancy a throwback to '18, no worries! You can switch it up with just a few tweaks in your application's `compose.yaml` file.

Imagine this scenario: You've got the dance floor all to yourself, but the music is playing a song you'd rather not dance to. So, you step aside, adjust the DJ console (aka your `compose.yaml`), and crank up that '80s groove – Node 18!

```yaml
build:
    args:
        WWWGROUP: '${WWWGROUP}'
        NODE_VERSION: '18'
```

Once you've made your move, it's time to hit the dance floor again. Rebuild those container images with a fresh playlist:

```shell
sail build --no-cache (You know, for good measure, we don't want any awkward re-runs!)

sail up (The grand finale! Let's get this party started.)
```

Now you're all set to boogie with the newest Node on the block!

 Alright, buckle up, web wranglers! Let's talk about a situation we've all been in – you've got this shiny new Laravel site that you need to show off to your boss or test with some third-party tools. No worries, we've got you covered with the `share` command, because sharing is caring, amirite?

To unleash the power of `share`, open up a terminal and drop this command like it's hot:

```shell
sail share
```

After executing this command, hold onto your hats because you're gonna get a random `laravel-sail.site` URL that will let you access your application. It's like getting a digital key to your Laravel castle!

Now, if you're sharing your site with folks who aren't as tech-savvy as you (gasp!), it's important to make sure they can access your site without any hiccups. To do this, configure your application's trusted proxies using the `trustProxies` middleware method in your application's `bootstrap/app.php` file. It's like adding a welcome mat for your proxy friends:

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->trustProxies(at: '*');
})
```

If you fancy giving your shared site a custom subdomain, no problem! Just include the `subdomain` option when executing the `share` command:

```shell
sail share --subdomain=my-sail-site
```

Just remember, this magical `share` command is powered by [Expose](https://github.com/beyondcode/expose), an open source tunneling service by [BeyondCode](https://beyondco.de). It's like having your own personal web genie granting wishes!

Happy sharing, Laravel enthusiasts! 🥳✨

 Alrighty then! Let's dive into the world of Laravel debugging with everyone's favorite superhero for PHP scripting – Xdebug! 🚀🦸‍♂️

First things first, make sure you've unleashed your Sail configuration from its humble abode by publishing it. (Think of it like getting the keys to a new Batcave.)

Once that's sorted, it's time to bestow some superpowers upon our Docker-powered application! Add these badass Xdebug configuration variables to your `.env` file:

```ini
SAIL_XDEBUG_MODE=develop,debug,coverage
```

Next up, open your pub-side php.ini file (think of it as the coolest invitation list in town) and add the following configuration to make Xdebug pop up like champagne at a wedding:

```ini
[xdebug]
xdebug.mode=${XDEBUG_MODE}
```

Now, don't forget to toast to your changes by rebuilding those Docker images! (Think of it as updating your status on Facebook.) Simply run this command like a seasoned coder:

```shell
sail build --no-cache
```

And there you have it – Xdebug is now ready to leap into action whenever you need it! Keep those breakpoints firing, and remember that with great code comes great responsibility. 🕷️💼

 Alright, let's dive into the world of debugging in Laravel, where Linux and Docker join forces to create a symphony of code execution!

First off, if you're using Xdebug on a Mac or Windows (Windows Subsystem for Linux 2, or WSL2 for short), you're already set. But fear not, our friendly friend `XDEBUG_CONFIG` is there to lend a hand to those on Linux! It points its finger at `host.docker.internal`, a magical address that Docker 20.10 and above understands perfectly. No need for any manual configuration—it's like magic!

However, if you're still using an older version of Docker (we know, we were there too once), the party isn't quite as exciting on Linux. Fear not, young grasshopper! You can set up a custom network in your `compose.yaml` file to assign a static IP address to your container. It's like giving your container a business card with its own unique address—how formal and sophisticated!

Here's a quick example of what that looks like:

```yaml
networks:
  custom_network:
    ipam:
      config:
        - subnet: 172.20.0.0/16

services:
  laravel.test:
    networks:
      custom_network:
        ipv4_address: 172.20.0.2
```

Once you've set the static IP, it's time to let your Laravel application know about its new home address. You can do this by defining the `SAIL_XDEBUG_CONFIG` variable within your application's `.env` file:

```ini
SAIL_XDEBUG_CONFIG="client_host=172.20.0.2"
```

And there you have it! With a little bit of setup, you're now ready to debug your Laravel applications like a pro on Linux! Just remember, no matter how complex things may seem, with Docker and Laravel, the world is your oyster! 🐚🎉🎈🚀

 Alrighty, let's get this Laravel debugging party started! 🎉✨

When you find yourself in the depths of code conundrums and need a superhero (or a slightly smarter version of ourselves) to help out, fear not! The `sail debug` command is here to save the day. 🦸‍♂️

Simply open up your terminal, channel your inner Sherlock Holmes, and type:

```shell
> sail debug php artisan [your-artisan-command]
```

Just replace `[your-artisan-command]` with whatever Artisan command you're currently trying to tame. Once you've entered this command, Xdebug will take over like a super-powered debugging sidekick and help you unravel the mysteries of your Laravel app! 🕵️‍♂️🔍

Don't forget that you must have Xdebug installed for this command to work its magic. You can find installation instructions in our documentation if you need help getting it set up. Happy debugging, detective! 🤓💻🚀

 Ahoy there, matey! Ready to set sail on a Laravel adventure devoid of the dreaded Xdebug? Hooray for smooth code voyages! 🚢

To start your journey without Xdebug's meddling tentacles, you'll need to navigate through the enchanted waters of your terminal like so:

**Sail the ship with this command:**

`sail artisan migrate`

That's right! Just preface your Artisan commands with `sail`, and your humble vessel (also known as Docker) will take care of the rest. This allows you to avoid Xdebug's unwanted harpooning of your pristine code while enjoying a stress-free Laravel voyage 🎉🌴🍹

But remember, just like in any good sea tale, there may be a few unexpected monsters lurking around. If you encounter errors related to Xdebug during your travels, fear not! Simply ensure your `php.ini` file is devoid of any Xdebug configurations or comments, and you'll soon find yourself back on course for a worry-free Laravel adventure 🌈

So grab your captain's hat, hoist the Jolly Roger (the sails, not the pirate flag), and let's get this party started! Setting sail has never been so fun or educational – welcome aboard to the world of Laravel devoid of Xdebug! 🌴🚀🐳

 Alrighty then! Let's dive into the magical world of Laravel and Xdebug, shall we? 🧙‍♂️✨

First off, you might be wondering, "What in tarnation is an Artisan command, you ask?" Well, buckle up, partner! Artisan is a powerful tool that comes with Laravel, and it's kinda like the Swiss Army knife of web development. It helps you manage your application, perform tasks, and even automate some jobs!

Now, let's talk about Xdebug. This bad boy is a PHP debugging extension, which means it helps you find and squash those pesky bugs in your code like an expert cowboy shootin' cans off a fence. 🤠🎯

But how do we get these two to work together? Easy peasy! Just fire up the good ship Sail by using the `sail debug migrate` command. That'll start Xdebug and run Laravel's database migrations, all while keeping your code clean as a whistle and your cowboy hat tilted at just the right angle. 🐎🌵

So there you have it! With Artisan and Xdebug in your toolbelt, you can wrangle even the wildest bugs that come your way in Laravel land. Happy codin'! 🎉🚀

 ### Catching Bugs in the Wild: Xdebug Browser Edition! 🦠🕵️‍♂️

Ready to corral those pesky bugs running rampant in your Laravel application? Let's don our debugging capes and venture into the world of browser-based investigation, following the trusty Xdebug guide (<https://xdebug.org/docs/step_debug#web-application>).

For all you PhpStorm acolytes out there, we highly recommend brushing up on JetBrains' wisdom regarding 'No-Sweat Debugging' (<https://www.jetbrains.com/help/phpstorm/zero-configuration-debugging.html>). It's like having a superpower for tracking down those sneaky little critters!

⚠️ **Attention all Laravel voyagers:** 📢 Our seaworthy vessel, Laravel Sail, is a faithful servant that serves your application using the `artisan serve` command. However, this trusty steed only started accepting the `XDEBUG_CONFIG` and `XDEBUG_MODE` variables with Laravel version 8.53.0. If you're still sailing the seas of version 8.52.0 or below, please note that these mariners will not be able to accommodate debug connections. So, upgrade ye olde Laravel, matey! Or risk being swarmed by more bugs than a pirate's treasure chest!

[Navigate back here](#sail-customization) if you need a reefresher on Sail customization! 🐠🚀

 Alright, buckle up, captain! 🌺 Sail ain't just any ol' sailboat. It's a Docker ship that's been decked out with all the customization options you could ever dream of (and then some)! 🛥️

To unveil Sail's secret stash of Dockerfiles, all you gotta do is issue the `sail:publish` command:

```shell
sail artisan sail:publish
```

Once you've run this enchanted incantation, Sail's Dockerfiles and configuration files (the secret sauce behind Laravel Sail) will find their new home within a `docker` directory in your application's root directory. After you've given them a good once-over and made any necessary tweaks to your Sail installation, you might want to update the image name for the application container in your application's `compose.yaml` file. Once that's done, rebuild your application's containers with the `build` command:

```shell
sail build --no-cache
```

Giving your application image a unique moniker is especially important if you're sailing multiple Laravel ships on the same seafaring vessel (we mean, computer, of course). 🐳 By assigning a distinct name to the application image, you'll ensure that each of your projects can set sail without colliding into one another!