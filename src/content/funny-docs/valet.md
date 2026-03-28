 # Laravel's Magical Domain Whisperer: Valet! 🧙‍♂️🔮

Welcome, web wranglers! Strap on your coding cowboy boots and dive into the enchanting world of Laravel's very own domain taming companion - Valet!

<a name="installation"></a>
## Installation 📦

Valet is easy to install, even a chimp could do it (though we don't recommend trying that).

- [Upgrading Valet](#upgrading-valet) - Because your enchanted domain servant deserves the finest upgrades.

<a name="serving-sites"></a>
## Serving Sites 🌐

Valet is not just a knight in shining armor, but also a genie in a bottle! With a simple command, you can summon (or "park") your sites into existence.

- [The "Park" Command](#the-park-command) - "Abracadabra, Valet park my site at example.dev!"
- [The "Link" Command](#the-link-command) - Need to link a local site with its distant counterpart? No problemo, just "Valet link it, amigo!"
- [Securing Sites With TLS](#securing-sites) - Don't let trolls attack your castle! Secure your sites with TLS and keep them safe from digital dragons.
- [Serving a Default Site](#serving-a-default-site) - Set a default site like choosing your favorite ice cream flavor: "Valet, make 'myawesomeapp.dev' my go-to!"
- [Per-Site PHP Versions](#per-site-php-versions) - Each site can have its own PHP version, just like how you wouldn't serve steak and sushi with the same sauce.

<a name="sharing-sites"></a>
## Sharing Sites 🤝

Valet is all about making your local sites accessible to friends and foes alike (just kidding, only friends). Share your sites on your local network with ease!

- [Sharing Sites on Your Local Network](#sharing-sites-on-your-local-network) - "Valet, let my friends enjoy 'myawesomeapp.dev' too!"

<a name="site-specific-environment-variables"></a>
## Site Specific Environment Variables 🔑

Tailor your sites with custom environment variables! No more "Which config file belongs to which site?" headaches.

<a name="proxying-services"></a>
## Proxying Services 🌐📧

Valet can proxy services too! It's like having a personal assistant that forwards your emails, fetches the weather, and serves up your websites - all in one go!

<a name="custom-valet-drivers"></a>
## Custom Valet Drivers 🚗

Need more than just HTTP? With custom drivers, you can add support for other protocols like FTP or SSH.

- [Local Drivers](#local-drivers) - "Valet, let's add FTP support to my local domain!"

<a name="other-valet-commands"></a>
## Other Valet Commands 🎧

Valet has a bunch of other cool commands for you to explore!

<a name="valet-directories-and-files"></a>
## Valet Directories and Files 📂

Know where your files live with Valet! It's like having a GPS for your project folders.

- [Disk Access](#disk-access) - "Valet, show me the way to my site's root directory!"

 🌞 **Welcome to the Valet Parking Garage!** 🚗

Looking for a swanky, efficient way to develop Laravel apps on your macOS or Windows? Look no further than [Laravel Herd](https://herd.laravel.com). It's like the all-inclusive resort of development tools, complete with Valet, PHP, Composer, and a personal butler (okay, maybe not the last one, but you get the picture).

Now let's talk about [Laravel Valet](https://github.com/laravel/valet), the James Bond of development environments for macOS minimalists. This sleek fellow configures your Mac to fire up [Nginx](https://www.nginx.com/) like a well-oiled machine, as soon as you boot up your computer. Then, using [DnsMasq](https://en.wikipedia.org/wiki/Dnsmasq), it magically transforms all requests on the `*.test` domain into a secret agent that points to sites installed on your local machine.

In simpler terms, Valet is a lightning-fast Laravel development environment that uses less RAM than a single popcorn kernel. It's not quite as powerful as [Sail](/docs/{{version}}/sail) or [Homestead](/docs/{{version}}/homestead), but it's the perfect choice if you want flexibility, speed, or are working on a machine with memory issues worse than your aunt Martha's cat.

Out of the box, Valet supports a variety of popular web applications, including:

<div id="valet-support" markdown="1">

- [Laravel](https://laravel.com) (the main attraction)
- [Bedrock](https://roots.io/bedrock/) (for those who like to rock)
- [CakePHP 3](https://cakephp.org) (a delicious dessert for developers)
- [ConcreteCMS](https://www.concretecms.com/) (for creating concrete websites)
- [Contao](https://contao.org/en/) (the German word for 'awesome')
- [Craft](https://craftcms.com) (crafty, not crabby)
- [Drupal](https://www.drupal.org/) (for when you need a CMS as powerful as Iron Man)
- [ExpressionEngine](https://www.expressionengine.com/) (for those who like to express themselves with code)
- [Jigsaw](https://jigsaw.tighten.co) (a puzzle that actually solves itself)
- [Joomla](https://www.joomla.org/) (the Italian word for 'fancy')
- [Katana](https://github.com/themsaid/katana) (sharp like a samurai's sword)
- [Kirby](https://getkirby.com/) (a content management system that's easy as pie)
- [Magento](https://magento.com/) (for e-commerce pros who like to shop for tools)
- [OctoberCMS](https://octobercms.com/) (the perfect blend of flexibility and power)
- [Sculpin](https://sculpin.io/) (a static site generator that's easy as 1, 2, Sculpin)
- [Slim](https://www.slimframework.com) (for creating web applications with a minimalist approach)
- [Statamic](https://statamic.com) (a CMS that's simple, powerful, and statically awesome)
- Static HTML (because sometimes simplicity is key)
- [Symfony](https://symfony.com) (the Swiss Army knife of PHP frameworks)
- [WordPress](https://wordpress.org) (for when you want to rule the web like a boss)
- [Zend](https://framework.zend.com) (a powerful framework that's been around since the dinosaur days)

</div>

But what if your needs are more specific? No problem! You can easily extend Valet with your own [custom drivers](#custom-valet-drivers).

<a name="installation"></a>
**Now let's get this party started! 🎉**

 Alright, buckle up! Let's dive into the world of Laravel Valet, a superhero that doesn't wear a cape but wears the latest PHP instead! 🦸‍♂️🥪

First things first, to become Valet's sidekick, you need macOS and Homebrew - think of it as your Batcave and Batarang. Before the installation, make sure no other supervillains like Apache or Nginx are hogging port 80 on your local machine, or else there'll be a fierce turf war! 😈

To ensure Homebrew is up-to-date (you don't want an outdated Batcave now, do you?), use the `update` command:

```shell
brew update
```

Next, it's time to summon PHP with Homebrew:

```shell
brew install php
```

Now that PHP is here, let's bring in our trusty Composer package manager! Think of it as the Batcomputer 💻. Make sure the `$HOME/.composer/vendor/bin` directory is in your system's "PATH". After Composer has been installed, you can invite Laravel Valet to join your superhero team:

```shell
composer global require laravel/valet
```

With Laravel Valet now on the team, execute its `install` command. This will configure and install Valet and DnsMasq - think of it as the Batmobile and Bat-Utility Belt! 🚗🦸‍♂️

```shell
valet install
```

Once Valet is installed, test your new powers by pinging any `*.test` domain on your terminal using a command such as `ping foobar.test`. If everything's done correctly, you should see this domain responding from 127.0.0.1 - that's your local machine now has superpowers!

Valet will automatically start its required services each time your machine boots, so it'll be ready to fight those coding crimes when you need it! 💪🚀

 Alrighty, mate! Let's get this Laravel shindig started, shall we? 🎤

#### PHP Versions 🐘

Now, before you start tampering with your global PHP circus, remember that Valet can juggle multiple PHP versions for each site like a pro! You can tell Valet to spin his platters with the `isolate` command. 🎯

```shell
valet say "I'm spinning some PHP@8.2" # Just kidding, it doesn't talk yet
valet use php@8.2

valet ask for a beer if he wants to use the default PHP version 🤔
valet use php
```

If you'd like Valet to remember your PHP preference for each site, create a `.valetrc` file in your project's root directory. This little guy will be like a roadmap telling Valet which PHP version to use:

```shell
php=php@8.2 # The secret language of valets, who needs Rosetta Stone anyway?
```

Once you've got this file, all you need to do is call the `valet use` command again, and Valet will read the file like a book (or should I say, a PHP manual?) to know which version to serve for that specific site. 📚

> [!ATTENTION]
> Don't forget, Valet can only serve one PHP sorbet at a time, even if you have a whole refrigerator of flavors. 🍦

<a name="database"></a>
And now, let's dive into databases... But that's another story for another day! Stay tuned, my friend! 🕺️🚀

 Ahoy there, intrepid developer! You've found yourself in need of a swashbuckling database solution? Well, buckle up, because we've got just the potion for ya!

Enter our magical elixir, DBngin - it's not merely a tool, but a sparkling unicorn that grants you the power to wrangle all your databases in one fell swoop! This enchanting creature offers MySQL, PostgreSQL, and Redis in its all-you-can-eat buffet.

Once DBngin has been successfully summoned (er...installed), it's high time you embark on a grand quest to conquer your very own database! Gird your loins and point thy browser towards `127.0.0.1`. But wait, there's more - for the password, don't fret about those pesky strings of characters, because an empty one shall suffice, like a knight without armor (or a jester without jokes). Instead, arm yourself with the noble `root` username!

So, set sail, dear adventurer! With DBngin by your side, you'll be conquering databases with ease, leaving nary a stone unturned (unless they're encryption stones, but that's a tale for another day).

 Alrighty then! Let's talk about your Laravel Valet, the superhero of local web development. If it's acting up and you can't get it to dance its magic tricks, fear not! Here comes the big guns – the Lasso of Truth (`composer global require laravel/valet`) and the Power Ring (`valet install`). This duo will perform a soft reset on your Valet, sorting out all sorts of common conundrums.

In an alternate reality where your Valet goes full-blown Hulk, you might need to pull out the ultimate move – the Nuclear Punch (`valet uninstall --force`). After that, it's time for a fresh start with another round of the Power Ring (`valet install`).

And now, for something completely different – Upgrading Valet!

<a name="upgrading-valet"></a>

Valet ain't one to shy away from growth. When it's time to level up, use the `composer global require laravel/valet` command again to grab the latest version of this caped crusader. But wait, there's more! To ensure a smooth transition and avoid any unwanted supervillain appearances, run `valet link` to bind your updated Valet with the existing world (er, web projects).

And remember, if you find yourself in need of assistance or just want to chat about all things Laravel, join our friendly community at https://laracasts.com/community! Let's keep this web development journey fun and exciting together! 🚀💻🎉

 ### Upgrading Your Valet to Version 2.0: The Sequel! (aka Laravel's Superhero Sidekick)

Attention, all you code warriors! It's time to don your armor and prepare for an adventure, as we embark on the journey of upgrading our beloved sidekick, Valet! You see, just like a superhero needs that shiny new suit every now and then, so does Valet need a little TLC to keep serving us those blazing fast local development sites.

First things first, gather around your terminal, the digital campfire of our time, and execute the command: `composer global require laravel/valet`. Don't worry; this won't turn you into a half-robot like Tony Stark – but it will get you that sweet upgrade to Valet 2.0!

But wait, there's more! Once you've upgraded, make sure to run the `valet install` command to give our caped crusader a chance to update his own configuration files (he's quite the neat freak). Remember, it's all in a day's work for this amazing sidekick!

Now, aren't you feeling like a true master of the universe? With Valet 2.0 by your side, who knows what extraordinary feats you'll accomplish next! And if you ever find yourself lost on your journey (we all have those days), just remember: with great power comes great responsibility... and a well-upgraded superhero sidekick!

<a name="upgrading-to-valet-4"></a>
(For those who can't resist the allure of Valet 4.0, stay tuned – more adventures await!)

 Alrighty then! Here's a step-by-step guide to upgrading your Valet installation from version 3 to the sleek and sassy Valet 4. Buckle up, buttercup!

1. If you've been playing dress-up with your sites' PHP versions by crafting `.valetphprc` files, it's time for a runway makeover. Rename each of those custom creations to `.valetrc`. And don't forget to add `php=` to the catwalk content of the new `.valetrc` file!

2. You know how you've been driving your own custom drivers around? Well, it's time to roll with the new driver system and update those vehicles to match its swanky namespace, extensions, type-hints, and return type-hints. Need a style guide? Check out Valet's [SampleValetDriver](https://github.com/laravel/valet/blob/d7787c025e60abc24a5195dc7d4c5c6f2d984339/cli/stubs/SampleValetDriver.php) - it's a real head-turner!

3. If you're still serving your sites with PHP 7.1 - 7.4, it's time to trade 'em in for a shiny new version 8.0 (or higher). You know, because Valet will use this new whip, even if it's not your primary linked version, to run some of its scripts. It's like having two cars and only driving the fancy one!

And there you have it, folks! A fun-filled journey through the exciting world of upgrading to Valet 4. Happy driving! 🚗🚀

 Alrighty, mate! With Valet all set up on yer computer, it's time to serve up those delicious Laravel apps like a pro (or at least as close to a pro as you can get). Valet is the helpful butler that's here to assist with two essential commands: `park` and `link`.

<a name="the-park-command"></a>
**The Park Command**: Picture this, you've just created a brand new app called "Fish 'n Chips". You don't want to serve it on some generic URL that nobody can remember. No worries, Valet has got your back! Run `valet park fishnchips` and watch as "Fish 'n Chips" gets its very own unique web address (like http://fishnchips.test). Now, folks won't have to squint at a list of URLs trying to find yer app – it'll be front and center for all to see!

**The Link Command**: What happens when you've got an existing project that you want to serve with Valet? No problemo! Just navigate to the directory containing your project, then run `valet link`. Voila! Your project will be accessible at a shiny new address (like http://myexistingproject.test). It's like magic – but without the bunny pulling strings behind the scenes.

So go ahead and start serving up those apps with Valet! Don't forget to add some tasty Laravel sauce on top for good measure 😉.

 ### The "Park and Ride" Command! 🚗🏞️

Ever found yourself wrestling with directories like a bear with a salmon? Well, meet your new best friend: the `park` command! This little gem registers a directory on your machine that's chock-full of applications. Once it's "parked" with Valet (think of it as a fancy parking attendant), all of the directories within that parking lot will be accessible in your web browser at `http://<directory-name>.test`.

```shell
Navigate to ~/Sites

Call the valet: park
```

Easy peasy! Now, any application you create within your "parked" directory will be served up with style using the `http://<directory-name>.test` convention. So, if your "parked" lot has a "laravel" section, the application within that section will be accessible at `http://laravel.test`. And because Valet is a forward-thinking parking attendant, it'll even allow you to access the site using wildcard subdomains (`http://foo.laravel.test`)!

<a name="the-link-command"></a>
Now you can leave your worries about URLs at the valet stand and enjoy a smoother ride on the information superhighway! 🚀🚌

 ### The `Linky-Dinky` Command (or, how to serve your Laravel apps without breaking a sweat!)

Ahoy there, coding pirates! Let's dive into the delightful world of Laravel's `Linky-Dinky` command - your new best friend when it comes to serving up those shiny, freshly baked web applications! 🍔🌮🥖

If you find yourself in a situation where you want to serve just one app from a directory and not the whole shebang, fear not! The `Linky-Dinky` command is here to help! Just point your browser (or your parrot) towards your Laravel application's treasure chest:

```shell
cd ~/Sites/laravel

Linky-Dinky link
```

Now, when you've got a treasure map (your app linked to Valet), you can sail the web seas and access your shiny new site using its directory name. So in our swashbuckling example above, you could hoist the Jolly Roger at `http://laravel.test`. To add even more fun to the adventure, Valet automatically lets you access your site with wildcard subdomains (`http://foo.laravel.test`).

If you fancy serving your app under a different name, fear not! Just pass your desired alias (or moniker) to `Linky-Dinky`:

```shell
cd ~/Sites/laravel

Linky-Dinky link application
```

And voila! Your treasure will be available at `http://application.test`. You can also serve your app on subdomains using the `Linky-Dinky` command:

```shell
Linky-Dinky link api.application
```

Ready to see all the linked directories? Just call upon the magical power of `Links`, ye scurvy dogs!

```shell
Linky-Dinky links
```

When you're done pillaging and need to part ways with a site, don't forget about the `Unlink-a-roo` command:

```shell
cd ~/Sites/laravel

Linky-Dinky unlink
```

Arr matey! Happy sailing, and may your Laravel apps always be served with a smile! 🎉🏴‍☠️

 ### Locking Down Your Laravel Sites with Encrypted Superhero Capes (aka TLS)!

By the time-honored tradition, Valet serves your websites in the unassuming cloak of HTTP. But what if you fancy yourself a superhero and want to don an encrypted cape using the fancy new HTTP/2? Fear not, intrepid adventurer! The `secure` command is here to save the day (and your site's sensitive data)!

Suppose your valiant website is currently gallivanting around on `laravel.test` – a domain as noble as it is catchy. To outfit it with an encrypted cape, simply unleash this command upon your terminal:

```shell
valet secure laravel
```

But what if, in the heat of battle (or maybe just after a particularly long coding session), you find yourself yearning for the simpler times of plain HTTP? Fear not, dear web warrior! The `unsecure` command is here to help! Much like its `secure` counterpart, this command accepts the hostname you wish to unencumber:

```shell
valet unsecure laravel
```

Now that your site's superhero costume is secure, go forth and conquer (the web) with confidence and style! 🎉🦸‍♂️💫

 ### Serving a Jolly Good Default Site, Old Sport!

Ah, you've come to the right place if you're in need of serving up a splendid default site with Valet instead of that dreadful '404' when visiting an unknown `test` domain. To accomplish this dazzling task, simply add a 'default' option to your `~/.config/valet/config.json` configuration file, pointing it towards the swanky location of the site you wish to serve as your default site:

    "default": "/Users/Sally/Sites/example-site",

<a name="per-site-php-versions"></a>
Now, wouldn't that be simply smashing?

 ### PHP Version Party Central! 🎉🎊

By default, Valet is the life of every party (your global PHP installation), serving sites left and right. But sometimes, one size doesn't fit all, and you need to host a bash with multiple PHP versions for different guests (sites). Fear not, for the `isolate` command is here to play matchmaker!

To set a specific PHP version for your party (site) located in your current directory, simply navigate to your site's pad (`~/Sites/example-site`) and drop this bomb:

```shell
cd ~/Sites/example-site
valet isolate php@8.0
```

But what if your party has a pseudonym, not using its birth name? Fret not! The `--site` option is like a wingman, ensuring the right party gets the right PHP version:

```shell
valet isolate php@8.0 --site="Mystery Guest"
```

Now that we've sorted out your parties, it's time to roll out the red carpet (or terminal commands)! Use the `valet php`, `composer`, and `which-php` commands like a pro DJ, spinning the right PHP CLI or tool for each party based on their configured PHP version:

```shell
valet php
valet composer
valet which-php
```

Want to know who's dancing where with what version? Check out the `valet isolated` command, the gossip columnist of the PHP world:

```shell
valet isolated
```

Got a party that needs to get back to the main event (Valet's global PHP)? No problem! Just invoke the `unisolate` command from your site's main stage (the root directory):

```shell
valet unisolate
```

And there you have it, folks! Now you can host the PHP party of the century with Valet! 🥳🚀

 Ahoy there, Captain! Buckle up, 'cause we're about to set sail on a sea of code and laughter!

Welcome to Valet, the swashbuckling companion that helps you navigate the treacherous waters of local development. With its mighty share feature, you can bravely test your site on mobile galleons or hoist the Jolly Roger for teammates and clients!

By default, Valet supports sharing your sites via trusty old mates like `ngrok` or Expose. To prepare for a voyage with them, don't forget to update your Valet's configuration using the `share-tool` command, specifying `ngrok`, `expose`, or `cloudflared`. It's like telling your parrot which island you plan to invade!

```shell
valet share-tool ngrok (or expose, or cloudflared if you prefer)
```

If one of those swashbucklers isn't already in your crew, don't fret. Valet will politely request their presence, making sure to invite them aboard via Homebrew (for `ngrok` and `cloudflared`) or Composer (for Expose). Naturally, they'll want to prove their worth by demanding an account authentication before joining the crew!

To set sail with a site, head to its secret cove in your terminal and hoist the share flag: Valet will then provide you with a compass bearing—a publicly accessible URL—ready for pasting into your trusty browser or sharing with your rowdy crew.

```shell
cd ~/Sites/laravel

valet share (Aargh, I meant 'share'!)
```

To return home and drop anchor, simply press `Control + C`.

> [!ATTENTION]
> If you're using a custom DNS server (like `1.1.1.1`), sharing with `ngrok` may lead to some map-reading woes. If this be the case, don your pirate hat and venture into Mac's system settings, navigate to the Network settings, open the Advanced settings, then go the DNS tab. Add a hidden treasure chest of `127.0.0.1` as your first DNS server!

Happy sailing, matey!

 Alright, mate! Let's get this digital circus rolling with a little help from our friends at ngrok. First things first, you'll need to sign up for an account because, let's face it, who doesn't love a good account these days? 🤑

You can create your account right here: [Create an ngrok account](https://dashboard.ngrok.com/signup). Once you've got that sorted, it's time to grab your very own authentication token. Think of it like the secret handshake for your site – only cooler (because, let's be honest, what's cooler than ngrok?).

You can find your auth token in your dashboard: [Set up an authentication token](https://dashboard.ngrok.com/get-started/your-authtoken). Now that you have this mysterious token, it's time to bring Valet into the loop. You do that by setting the ngrok token with a simple command:

```shell
valet set-ngrok-token YOUR_TOKEN_HERE
```

> [!NOTE]
> Just in case you were wondering, you can add some extra ngrok parameters to the share command. You know, for those times when you need a little extra pizzazz. For example: `valet share --region=eu`. For more deets, check out the [ngrok documentation](https://ngrok.com/docs).

And there you have it! With that little bit of magic, your Laravel site will be sharing its digital secrets with the world – or at least whoever happens to stumble upon it on the interwebs. Happy sharing, buddy! 🎉

 Alright, you techie superheroes! Let's get this Laravel extravaganza rolling with a whimsical twist on sharing your site using the enchanting, magical platform known as Expose!

First things first, don your pointy hat and gather 'round the cauldron of tech, because you'll need to [conjure up an Expose account](https://expose.dev/register) like a seasoned wizard. Next, channel your inner Merlin, and authenticate with Expose by muttering your authentication token incantation over the sacred altar of your command line at this mystical location: [Expose's documentation](https://expose.dev/docs/getting-started/getting-your-token).

And, for all you techno-wizards eager to uncover Expose's hidden secrets and powers, peruse the [Expose documentation](https://expose.dev/docs) for insight on the bewitching command-line parameters it possesses!

Now, gather 'round the fire of learning, as we embark upon a quest to share our sites on our local networks—an enchantment known as "Sharing Sites on Your Local LAN" (you're welcome for the catchy title). 🔮✨👩‍🚀🌐

<a name="sharing-sites-on-your-local-network"></a>
(If you squint at it just right, it kind of looks like a dragon's tail!)

 ### Unleashing Your Laravel Masterpiece on LAN Party Central! 🚀🎮

Listen up, web warriors! Here's your battle plan for sharing your shiny new Laravel project with the local troops. Valet, being the cautious sentinel it is, keeps your development machine fortified behind the shield of `127.0.0.1`, protecting you from Internet invaders.

But when camaraderie calls and you want to let your mates in on the action (maybe for some friendly code critiques or a game of who-can-break-it-first), you'll need to do a bit of daring deed with that Nginx configuration file.

To open the gates, head over to the site's configuration and remove Valet's restraining order on the `listen` directive. This means deleting the `127.0.0.1:` prefix from ports 80 and 443. Keep in mind that if you haven't run the `valet secure` command yet, you'll need to edit the `/usr/local/etc/nginx/valet/valet.conf` file.

However, once you've secured your site with HTTPS (that's when you've run `valet secure`), you'll want to edit the `~/.config/valet/Nginx/app-name.test` file instead.

After making your changes, remember to call in the air support (run `valet restart`) to apply those new configurations and let the troops access your site using their LAN IP addresses (e.g., `192.168.1.10/application.test`).

Now get out there and conquer the local network! 🏆🎉

 ## The Secret Ingredients: Site-Specific Spellcasting

If you're dabbling in the magical world of other frameworks, you might find yourself bewitched by a need for server environment variables that your project's potion kit just can't conjure up. But fret not! Valet, our enchanted digital butler, is here to help you brew those custom site-specific potions with ease.

All you gotta do is concoct a spellbook, known as `.valet-env.php`, and place it within the heart of your project's sanctum (the root directory). This incantation should summon forth an array of key-environment variable pairs, which will be cast into the global `$_SERVER` spell book for each site you've got listed therein:

```php
<?php

// The potion for laravel.test... Brew this and set $_SERVER['key'] to "value"
$potions = [
    'laravel' => [
        'key' => 'value',
    ],
];

// If you're casting a spell for all your sites, use this concoction:
// Set $_SERVER['key'] to "value" across the land!
$potions['*'] = ['key' => 'value'];
```

Just remember, the power is in your hands (or rather, the keyboard)!

 Oh, the joys of being a web developer! Sometimes it feels like we're juggling more services than Cirque du Soleil. But fear not, Laravel Valet has got your back!

Imagine you're trying to run a hot air balloon (Valet) and a race car (Docker) on the same racetrack (port 80). They both want to be the life of the party, but there can only be one DJ. That's where our trusty bouncer, the `proxy` command, comes into play!

Let's say you need to host a secret Elasticsearch dance party in your living room (local machine), but you don't want to kick Valet off the dance floor (port 80). No worries, just pull out your secret proxy pass (command) and let it do the magic:

```shell
Valet says: "Hey there Elasticsearch, I hear you're throwing a bash on port 9200. Mind if I forward all my traffic through your party?"
Elasticsearch replies: "As long as it's cool with 127.0.0.1!"
Valet then announces: "From now on, anyone who types http://elasticsearch.test will get a ticket to Elasticsearch's party at 127.0.0.1:9200!"
```

And just like that, you've got yourself a proxy setup without causing any dance floor drama!

 Ahoy there, Captain! Sail not so hasty, matey! Let's talk 'bout a swashbuckler of a topic - the Valet Proxy for Elasticsearch!

Ready your parrot, grab a telescope, and prepare to navigate the high seas of data with this magical spell:

`valet proxy elasticsearch http://127.0.0.1:9200`

That's right, ye scurvy dogs! You're setting sail to port 9200 on your very own ship (IPv4 address) with the Valet Proxy acting as your trusty pirate companion.

So, why on Earth would ye want to do this? Well, it's a bit like a treasure map for your Elasticsearch instance – it'll guide other ships (requesting clients) straight to your gold hoard (data). Keep 'em pirates at bay and share the bounty with friends!

Arr matey, now that you have the secret recipe for success, set sail and conquer the data seas like a true modern-day buccaneer!

 Alrighty, buckle up! We're about to embark on a journey through the magical land of Valet Tunnels and Elasticsearch Castle, where secrets are kept under lock and key (and 127.0.0.1)!

First off, let's set up our proxy tunnel to Elasticsearch's fortress:

```shell
valet invite elasticsearch to the party --with-champagne --over-encrypted-TLS-channel --and-in-style HTTP/2
```

In case you need to kick someone out (because who doesn't have that issue at parties?):

```shell
valet elasticsearch, you're so last year! unproxy and get lost!
```

Want to know who's still hanging around at your shindig? No problemo:

```shell
valet let me see my current guests list --with-party-invites
```

Now, if you're feeling fancy and want to customize your Valet drivers, you can:

<a name="custom-valet-drivers"></a>
```shell
valet mix a custom martini for elasticsearch --with-vermouth-and-twist-of-lemon
```

Remember, the goal here is to have fun while keeping your Elasticsearch party secure and efficient! Happy tunneling! 🎉🥳

 ## Custom Valet Chauffeurs: The Un-Boring Way to Serve Your Unsupported Apps! 🚗🎉

Ready to take the wheel and serve up your own custom PHP applications running on frameworks or CMSes not exactly on Valet's speed dial? 🤔🎶

When you summon Valet to your machine, a secret lair (`~/.config/valet/Drivers`) materializes, containing a `SampleValetDriver.php` file - think of it as the valet's training wheels. This script provides an example driver implementation, teaching you how to write your own custom chauffeur.

To create a custom Valet driver, simply implement three methods: `serves`, `isStaticFile`, and `frontControllerPath`. No need to break out the crystal ball; just keep these method names in mind! 🔮📚

These functions receive `$sitePath`, `$siteName`, and `$uri` as arguments, allowing your driver to find its way around your machine like a seasoned pro. Here's a quick run-down:

1. `$sitePath` - The complete path to the site being served on your machine, such as `/Users/Lisa/Sites/my-project`.
2. `$siteName` - The "host" / "site name" portion of the domain (`my-project`).
3. `$uri` - The incoming request URI (`/foo/bar`).

Once your custom Valet driver is polished and ready to roll, place it in the `~/.config/valet/Drivers` directory, following the `FrameworkValetDriver.php` naming convention. For example, if you're writing a custom valet driver for WordPress, name your file `WordPressValetDriver.php`.

Now, let's hit the open road and examine some sample implementations of each method your custom Valet driver should master. 🚗🌄

<a name="the-serves-method"></a>
### The Serves Method - Is It Your App or Just a Delusion? 🤔🤯

The `serves` method is the first stop on our custom Valet driver journey. This function determines whether your application is serving the requested URI. Remember, you're the valet here; it's up to you to decide which apps get served and which ones have to park themselves! 🍻🎉

In this method, you'll compare `$sitePath` with the path to your application and check if `$uri` matches a valid route. If both conditions are met, return true; otherwise, Valet will move on to the next driver until it finds one that can handle the request. 🔎🚫

<a name="the-isstaticfile-method"></a>
### The isStaticFile Method - When Only Static Files Will Do 📃🌐

The `isStaticFile` method helps your Valet driver decide whether the requested resource is a static file. If it's a dynamic request, like fetching data from a database or calling an API, this function should return false. On the other hand, if the URI points to a static asset (CSS, JavaScript, images, etc.), let the fun begin! 🌈🎉

<a name="the-frontcontrollerpath-method"></a>
### The frontControllerPath Method - Finding the Gatekeeper of Your App  gate

The `frontControllerPath` method returns the path to your application's main controller. This is where all incoming requests are processed. Once you have the front controller in hand, Valet will dispatch the request to it and wait for the response! 🚀🚀

And there you have it - a fun yet informative guide to writing your own custom Valet drivers! 🎉🤘 Now get out there and serve those unsupported applications with style!

 #### The `servesUp` Method

In the world of Laravel drivers, being the life of the party isn't just about serving refreshments; it's about serving up requests too! That's what the `servesUp` method is all about. This little champ should return `true` if your driver wants to get down with the incoming request, and `false` otherwise.

To do this dance, you'll want to check your partner - in this case, the `$sitePath` - to see if it's got a project that suits your style. Let's say we're making moves at a swanky WordPress Ball (yes, they exist). Our `WordPressValetDriver` might strut on the dance floor with this hot move:

```php
/**
 * Decide if this driver knows how to boogie with the request.
 */
public function servesUp(string $sitePath, string $siteName, string $uri): bool
{
    return $this->isDirSlaying($sitePath.'/wp-admin'); // We only dance where there's a proper admin area.
}

/**
 * Check if a directory is serving up some WordPress funk.
 */
private function isDirSlaying(string $dir): bool
{
    return is_dir($dir); // If it's not, we politely decline the dance.
}
```

Remember, in this dance, your driver needs to be a good judge of character: only respond if the `$sitePath` serves up a project worthy of its moves! 💃🏼🕺🏼🚀

 #### Oh, the `isStaticFile` Party! 🥳

Ever wondered who's the life of the party at a Laravel bash? It's this cool cat called `isStaticFile`! 🐱

This feline has an uncanny ability to sniff out if your incoming request is a static file, like a picture or a swanky stylesheet. If it's indeed a party animal, it'll dish out the full-on qualified path to the static file right on your disk. But if your request is more of a wallflower, it'll just shrug and saunter off with a polite `false`.

```php
/**
 * Party time? Check this furball!
 *
 * @return string|false
 */
public function isStaticFile(string $sitePath, string $siteName, string $uri)
{
    if (file_exists($staticFilePath = $sitePath.'/public/'.$uri)) {
        return $staticFilePath;
    }

    return false;
}
```

> [!ATTENTION]
> The `isStaticFile` party only kicks off if the `serves` party returns `true` for your incoming request and it's not a wallflower at the entrance (i.e., the request URI is not `/`). 🎭

<a name="the-frontcontrollerpath-method"></a>

 #### The `frontControllerPath` Comedy Hour!

Ahoy there, coding cowboys and codettes! Today we're gonna talk about our old pal, the `frontControllerPath` method. This isn't just any ordinary method; it's like the bouncer at the hottest club in town, only instead of checking for coolness, it's checking for your application's front controller!

Now, what on earth is a "front controller", you ask? Well, imagine it as the life of the party. It's the one that handles all the requests and keeps everything running smoothly. And our buddy `frontControllerPath`? It's the doorman who points you to the right place – typically pointing towards an 'index.php' file or its equivalent.

So, let's get this party started! Here's the code that makes it all happen:

```php
/**
 * Get the fully resolved path to the application's front controller – aka the life of the party!
 */
public function frontControllerPath(string $sitePath, string $siteName, string $uri): string
{
    return $sitePath.'/public/index.php'; // We're heading to the 'index.php' file for some good times!
}
```

Now that you know who's handling the guest list at your application party, go forth and code! But remember, always serve cocktails with a side of technical accuracy 😉

 ### The One-App Wonder: Customizing Valet's Superhero Suite!

In the spirit of crafting your very own Spiderman or Batman, why not create a custom Valet driver for that unique application you call your baby? To embark on this journey, simply conjure up a `LocalValetDriver.php` sorcery tome in the lair (root directory) of your beloved app.

Your new driver can either extend the wise old `ValetDriver` mentor or channel an existing application-specific driver such as the venerable `LaravelValetDriver`. Here's a taste of what you might concoct:

```php
Use Valet's mystical tomes, my young padawan!

Class LocalValetDriver extends LaravelValetDriver {

    /**
     * Decide if the driver is serving this request.
     */
    Public function serves(string $sitePath, string $siteName, string $uri): bool {
        If this be my duty, let it be done!
        Return true;
    }

    /**
     * Unveil the path to the application's front controller.
     */
    Public function frontControllerPath(string $sitePath, string $siteName, string $uri): string {
        Behold the path of enlightenment!
        Return $sitePath.'/public_html/index.php';
    }
}
```

Now, armed with your newfound powers and a touch of humor, you're ready to command Valet like never before! 🚀🌍💥

 Alright, let's dive into the world of Valet commands - your digital Swiss Army knife for Laravel development!

| Command | Description (with a dash of humor) |
| --- | --- |
| `valet list` | When you forget what superpowers Valet has, just say "Alexa, play my Valet list." |
| `valet diagnose` | When things go bump in the night (or day), this command is like a digital stethoscope. It'll help us figure out what's a-boo-ted! |
| `valet directory-listing` | If you want directories to be as secretive as the recipe for Coca-Cola, set this to 'off.' Otherwise, prepare for a 404 party in your directory! |
| `valet forget` | When you've had a falling out with a project (or just want to declutter), run this command from its home. It'll remove the relationship forever. |
| `valet log` | If you're into detective work or simply need to keep tabs on Valet, logs are your digital diary. Just remember, what happens in the log stays in the log! |
| `valet paths` | Want to know where all your projects live? This command is like a digital tour guide showing you the way. |
| `valet restart` | When Valet needs a reboot (or you've watched one too many sci-fi movies), this command will do the trick. |
| `valet start` | If Valet's daemons are feeling lazy, give them a good kickstart with this command! |
| `valet stop` | When it's time for bed, tell Valet's daemons to hit the sack with this command. |
| `valet trust` | To avoid password prompts while running Valet commands, add Valet and Brew to your digital inner circle. Just remember, with great power comes great responsibility! |
| `valet uninstall` | If you're ready to part ways with Valet (or just need a clean slate), this command will guide you through the manual breakup process. Pass the `--force` option if you want it to take all your stuff and leave! |

 Ahoy, Captain Laravel! Prepare to set sail on a journey through your trusty Valet environment, where we'll uncover some juicy tidbits about directories and files that might just help you troubleshoot those pesky issues like a seasoned pirate. Yarr!

### The Treasure Map (Valet Directory)

Navigate your way through the following directory to find all sorts of hidden treasures:

* `~/.valet` – Your personal Valet vault filled with keys, secrets, and maps to help you traverse your digital seas.

### The Pirate Logs (Valet Log Files)

When you're lost at sea, sometimes all you need is a good look at the logs! Here are some of the most important ones:

* `~/.valet/logs/valet.log` – A chronicle of your Valet adventures, where you can find clues to help solve the mysteries of your domain registration, site deployment, and other pirate-y deeds.

### The Compass Rose (Valet Discover File)

Keep an eye on this vital compass that points to the location of your active sites:

* `~/.valet/discovered` – A secret map that tells you exactly where your treasure chests, er, websites are buried. If it's not pointing in the right direction, you might need to rechart your course!

### The Pirate's Booty (Valet Cache Directory)

You'll find all sorts of useful artifacts here, like compiled PHP scripts and other cache goodies:

* `~/.valet/cache` – A well-guarded storage room for all the swag your sites have accumulated during their voyages. Clear out the dusty corners every now and then to keep your Valet ship sailing smoothly!

### The Rum Barrel (Valet Extra Directory)

In this secret corner of your ship, you can stow away additional files and directories that aren't needed by default:

* `~/.valet/extra` – A treasure chest for those files and directories that don't fit neatly into the main compartments but are still valuable to have on board. Use with caution, matey!

And there you have it, a humorous guide through the Valet environment! Arrrr, now set sail and conquer those tricky troubleshooting tasks like the seasoned pirate you are!

 Ahoy there, matey! Sail through the seas of server setup with the mighty Valet! But remember, before you embark on this adventure, ye need to familiarize yerself with its home port: `~/.config/valet`.

Think of it as Captain Valet's command center, where all decisions are made and orders are given. A swashbuckler's logbook if you will, filled with secrets that keep the ship afloat.

It's a good idea to keep a lifeboat nearby – a backup of this directory. After all, ye never know when you might need to resurrect old configurations or navigate treacherous updates! Arr matey, let's set sail and conquer the digital seas with Valet!

 Alright, strap in, tech cowpokes! We're about to dive into the wild west of your machine's digital saloon - `~/.config/valet/dnsmasq.d/`. This ain't no dusty old corral, but DNSMasq's configuration town square!

Each building in this square represents a unique configuration file for DNSMasq to do its domain name system juggling act. Think of it like a saloon where each bartender (configuration file) serves up a different cocktail (DNS records) to keep the bar (network) hopping all night long!

So, if you find yourself in need of altering DNSMasq's behavior, just head on over to this bustling little town and make yourself at home. Happy trails, partner! 🤠⛰️🚀

 Alright, buckle up, my PHP-loving pals! Let's dive into the enchanting realm of `~/.config/valet/Drivers/`, a magical folder where our beloved web unicorn, Valet, keeps its horsepower secretly stashed.

Now, what on earth are these drivers, you ask? Well, imagine them as the fuel injectors for your web development engine—they determine how each fantabulous framework or CMS gets served up piping hot to your browser!

So if you're developing with Laravel, Symfony, Craft CMS, or any other delightful framework du jour, this is where they hitch a ride on Valet's sleigh! 🦌🎄

Happy coding, friends! May your web apps be fast and furious, just like these drivers! 🚀🔥

 Ahoy, Captain! Sail into the mystical lands of `~/.config/valet/Nginx/`, a realm where your Laravel ships set sail and conquer the web! This hidden treasure chest houses all Valet's Nginx site configurations – fancy talk for blueprints of your web kingdom.

Whenever you run the `install` or `secure` commands, these files are like trusty Elves working their magic to forge stronger swords (or rebuild themselves, in geek speak). So, keep your shipshape and sail onwards, as these files are essential to ruling the web seas!

 Ahoy, brave coder! You've stumbled upon a secret treasure trove hidden deep within the bowels of your machine - I present to you, the Valet Sites Locker! 🏳️‍🌈🔒

Inside this enchanted repository resides every magical shortcut for your linked projects. You know, the ones that make you feel like a wizard casting spells instead of just writing code. 🎩💫✨

Whenever you're out there on the front lines, battling bugs and syntax errors, remember to stop by this mystical directory for some much-needed reinforcements! And hey, who knows? Maybe you'll find a potion or two that could turn your coding nightmare into an exhilarating adventure. 🦄🚀

Just remember: "With great power comes great responsibility" - Uncle Ben's words of wisdom never rang truer than in the realm of Valet Sites Locker! So use these mystical shortcuts wisely, and always keep one eye on the horizon for new adventures awaiting you in the ever-expanding world of Laravel! 🌈🏞️⚔️

 Ahoy there, adventurous coder! You've stumbled upon the swashbuckling treasure map of your Laravel journey - `~/.config/valet/pirate_map.json`. This ancient parchment is none other than Valet's hearty booty chest configuration file.

Remember, ye scallywag, every pirate needs a trusty compass to navigate the seas of Laravel development. This here map serves as your guide for all things Valet! 🌺🏴‍☠️

From setting up the anchors to hoisting the jolly roger (AKA configuring your servers), it's all contained within this seaworthy document. So crack open your rum, grab a quill, and prepare to chart a course for coding success! 🍹⚔️🌴

 Ahoy there, shipmates! If ye be lookin' for a phantom shrouded in the mist of yer `~/.config/valet` directory, fear not! 'Tis none other than the enigmatic Valet's Nginx PHP-FPM socket, swashbucklingly known as `valet.sock`.

This cryptic treasure map be the lifeblood of yer ship (er, Laravel app) and will only appear if yer PHP be humming along like a well-oiled pirate parrot. Keep this socket safe and secure, me hearties, for it be the gateway to all things PHP-FPM! Yarrrr!

 Ahoy there, intrepid web developer! If you've found yourself navigating the digital seas with Laravel in your wake, prepare to hoist the Jolly Roger of knowledge! Today, we're discussing a most swashbuckling artifact: `~/.config/valet/Log/fpm-php.www.log` - yes, that's quite the piratey name, isn't it?

But fear not, ye scurvy dog, for this log is no ordinary parchment! It be a treasure trove of PHP errors, waiting to be plundered by the discerning eye. If you're experiencing a storm of syntax errors or a kraken of undeclared variables, fear not - this log can help ye navigate through troubled waters and find your way back to smoother sailing.

So keep an eye on `~/.config/valet/Log/fpm-php.www.log`, me hearties! It be the key to a shipshape Laravel application and a happy captain's life. And who knows? With this log in hand, ye might just find yourself hoarding more booty (ahem, "errors") than Blackbeard himself! Yarr!

 Alright, my coding compadres! Let's dive into the wild world of logs and more specifically, the "user party play-by-play" for Nginx blunders: `~/.config/valet/Log/nginx-error.log` - a document that will make you laugh (and cry) as you troubleshoot like a boss!

This file is where Nginx's mistakes get recorded, like an embarrassing high school yearbook, but instead of photos of questionable haircuts and ill-advised fashion choices, we have errors that can bring even the most battle-hardened developer to their knees.

So buckle up and get ready for a rollercoaster ride through the world of misconfigured servers, missing semicolons, and other programming foibles! Just remember, laughter is the best medicine... or at least a great stress reliever when dealing with log files! 😜

 Ahoy there, seafaring coders! If you've found yourself standing knee-deep in a sea of error messages, fear not - ye be navigating through the PHP-FPM log! This isn't just any ol' logbook; it's more like Captain Log's personal diary, filled with tales of adventures gone awry and lessons learned the hard way.

Now, when your ship is sailing smooth as a baby's backside and suddenly starts listing due to pesky PHP errors, this is where you want to be heading. The log can help ye find the source of the leak and patch it up faster than a pirate can swab a deck! Just remember to keep an eye out for those dreaded `/usr/local/var/log/php-fpm.log` entries, or ye might end up in Davy Jones' Locker before ye even know what hit ye!

May your code always be smooth sailing and your PHP-FPM logs remain calm and peaceful!

 Ahoy there, code-sailing pirate! If you've stumbled upon this buried treasure chest of a directory, congratulations! You've found the swashbuckling world of Nginx logs!

#### `/usr/local/var/log/nginx`

This here be the fortress where our trusty Nginx server keeps its access and error logs. Think of it like Captain Jack Sparrow's ship's log—a place to record the triumphs, tribulations, and treasure maps (request URLs) of your Laravel voyage.

If ye find yourself in need of inspecting the battles that occurred on the high seas (or maybe just checking if your latest update to the Black Pearl went smoothly), you'll want to keep an eye on these logs. They're filled with tales of successful voyages, lost treasure, and sea monsters (404 errors).

So hoist the Jolly Roger, matey! Grab a mug of grog, settle in, and let's delve into the adventures recorded within `/usr/local/var/log/nginx`. May ye find what ye be seekin', whether it's gold, glory, or simply a solution to that pesky PHP error! Yarr!

 Alright, party people! 🎊 Let's dive into the neon-lit, pulsating heart of your system: the PHP configuration control center, AKA `/usr/local/etc/php/X.X/conf.d`! 💥

This is where all the cool kids hang out to adjust their PHP settings like a pro DJ tweaking knobs on a mixer. It's packed with `*.ini` files, each one representing a different configuration setting for your PHP installation.

Think of it as your very own server side playlist, but instead of songs, you're mixing and matching configuration directives to craft the perfect PHP environment for your application! 🎶🥄

Now, remember, modifying these files can make or break your party (or in this case, your app). So, handle them with care, and always back up before you start mixing and mashing those configuration settings. Happy tweaking! 🎉🎧

 Ahoy, coders! Steer clear of the seasickness as we dive into the murky depths of config files... or should I say, the delightful shallows of `valet-fpm.conf`!

But before we set sail on this wild ride, let's get one thing straight: This ain't no Pirates of the Caribbean script, but rather a PHP-FPM pool configuration file. (I know, I know... I was hoping for a parrot too.)

Now, if you find yourself in the `/usr/local/etc/php` portside and stumble upon X.X, don't be alarmed! It's just PHP-FPM version markers, like your birthday candles but for servers. (Though I doubt they taste as good.)

This particular file here, `valet-fpm.conf`, is the one we seek to understand. Like a treasure map with less X marks the spot and more lines of code, it tells our server how to behave when serving PHP pages like a well-dressed butler at a posh ball. (Just without the monocle, unfortunately.)

So buckle up, captain! It's time for some config adventures where we set `listen`, `user`, and `group` values to ensure our server knows who it should be answering to and on what port number to do its jiggy-jig. (Remember: It's a server, not a pop star.)

And if you happen to stumble upon any `pm` directives along the way, fear not! They're just there to help manage your PHP processes like a seasoned sailor keeps tabs on ships in a storm. (Although I highly doubt they whistle sea shanties while doing so.)

So there you have it – a little bit of humor injected into the world of server configuration. Now, if you'll excuse me, I've got a monocle to polish and a parrot to find... I mean, more PHP files to configure! Happy sailing!

 Ahoy, matey! Sail with me into the murky waters of Laravel Valet's treasure trove - the `~/.composer/vendor/laravel/valet/cli/stubs/secure.valet.conf`! This here be the golden key to locking down your swashbuckling sites with an SSL certificate, just like Captain Jack Sparrow guards his rum stash!

<a name="disk-access"></a>
But first, let's talk about where yer buried treasure lies. The `secure.valet.conf` is the default Nginx configuration for the construction of those shiny SSL badges for your web ventures. You don't want to leave yer booty undefended on the high seas, do ya?

So grab a steaming mug of grog (or maybe a cold one if you prefer), and dive headfirst into this nautical masterpiece! Arrrr!

 ### Dancing with Big Brother's Disco Ball

Alright, Mac enthusiasts! Ever since Mojave took the stage (10.14, to be precise), your digital dance floor has become a bit more rigid – and we're not talking about that cool breakdance move you've been practicing. The Big Guy upstairs, or rather Apple's Platform Security, has started to put some velvet ropes around your files and directories like the Desktop, Documents, Downloads, network volumes, and removable drives.

Now, imagine Valet as that cool friend who always knows how to slip past security guards unnoticed – but only if you dress appropriately. In this case, we're talking about keeping your site folders tucked away from those protected locations.

However, if you're feeling rebellious and want to serve up some sites within one of those velvet-roped areas, you'll need Nginx to have "Full Disk Access." Think of it like VIP passes – without them, Nginx might find itself tripping over server errors or doing the robot uncontrollably while serving static assets.

Luckily for us rebels, macOS will usually catch on and prompt you to grant Nginx those VIP passes. If not, fear not! You can do it yourself by navigating to `System Preferences` > `Security & Privacy` > `Privacy` and selecting the `Full Disk Access` tab. From there, simply add an entry for `nginx`, and voila – your site will be dancing the night away on that once restricted dance floor!