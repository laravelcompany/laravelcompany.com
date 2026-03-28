 Alrighty, buckle up, coding cowboy (or cowgirl)! Let's dive into the wild west of Laravel deployment where we'll tame servers, tweak configurations, and optimize for speedier draw times. But first, a quick warning: this here is more than just roping cattle, so if you ain't familiar with server requirements, Nginx, FrankenPHP, or directory permissions, best hitch a ride on the documentation horse.

<a name="server-requirements"></a>

You'll need a minimum of PHP 7.3, MySQL 5.6, and the usual suspects like cURL, OpenSSL, Mbstring, Tokenizer, and XML extensions. A good ol' horse named Apache will do if you ain't got Nginx yet, but we reckon you'll want to saddle up with that fancy steed later on.

<a name="server-configuration"></a>

Now, let's get our server ready for action! First off, we need to install Nginx and give it a taste of FrankenPHP – Laravel's custom PHP-FPM configuration. We recommend wrangling this on a freshly installed Ubuntu 20.04 server, but you do you, partner. Once that's done, ensure your directories have the right permissions to keep those varmints at bay.

<a name="optimization"></a>

Next up is optimization! We want our cowboy camp to be a quick and efficient one. Start by configuring caching for faster configuration loading, cache events, optimize route loading, and optimize view loading. Remember, every millisecond saved makes for one less second you'll spend wishing your horse was faster.

<a name="reloading-services"></a>

When you make changes to your PHP files or configurations, it's important to reload services so they take effect – no need to wait for the mailman with a fresh brew of coffee every time.

<a name="debug-mode"></a>

If something goes awry in your camp (and let's face it, it usually does), debug mode can help you find the culprit. Just remember that this can slow down your horse, so use it sparingly or when you're dead set on finding that dastardly varmint.

<a name="the-health-route"></a>

To keep an eye on your camp's health, check the health route. It tells you whether your Laravel installation is feeling peachy or might be needing a visit from Doc Holliday.

<a name="deploying-with-cloud-or-forge"></a

When you're ready to move your camp to greener pastures, consider deploying with Laravel Cloud or Forge. They'll help you wrangle the server setup and make sure everything runs smoothly without a hiccup. So whether you prefer to lasso servers yourself or let someone else do the heavy lifting, these trusty steeds are here to help!

Happy coding, partner! May your code be clean, your coffee strong, and your Laravel camp prosperous.

 Ahoy there, Captain! You've built a magnificent Laravel ship and it's time to set sail into the vast sea of production. But before you do, let's hoist some anchor and make sure your vessel is battle-ready! In this here pirate's guide, we'll be discussing some swashbuckling strategies to ensure your Laravel treasure chest is deployed like a pro.

<a name="server-requirements"></a>
First things first: ye olde server requirements! To keep your ship sailing smoothly, ye need to make sure ye server meets the following demands:

1. PHP 7.3 or greater - This is the minimum requirement for a sturdy hull and strong rigging. If yer server uses an older version of PHP, it's time for a upgrade, matey!
2. OpenSSL PHP Extension - This one keeps your ship secure from scurvy pirates and other nefarious seafolk.
3. PDO PHP Extension - This allows ye to connect to databases, which is crucial for storing yer hard-earned loot.
4. Mbstring PHP Extension - Helps the ship keep its bearings by handling strings with ease.
5. Tokenizer PHP Extension - A vital tool for navigating complex code charts and deciphering riddles from pesky parrots.
6. XML PHP Extension - Essential for translating exotic languages spoken by distant lands, like XML and JSON.
7. Ctype PHP Extension - This one helps the ship keep its crew in line by checking character types, ensuring no mutinies occur!
8. Fileinfo PHP Extension - A useful tool for identifying different file formats, which can help ye avoid walking the plank due to unforeseen issues.
9. Ziparchiver PHP Extension - If ye ever need to stow away important files in a compact format, this extension's got yer back!
10. JSON PHP Extension - Keeps the ship well-informed of any changes happening on the high seas through the power of JavaScript Object Notation (JSON).
11. BCMath PHP Extension - This extension ensures that your calculations are accurate to the last grog drop, even when dealing with large numbers.
12. GMP PHP Extension - A powerful tool for solving complex mathematical puzzles, like figuring out how many barrels of rum yer ship needs for a journey.

 Alright, party people! 🥳 Let's get this Laravel shindig started, but first, let's make sure your web server is equipped to handle the groove. Here's a list of must-haves for your PHP dance floor:

1. PHP version? Well, it's not cool to be outdated, so we suggest rocking with PHP >= 8.3 (think of it as the latest hip-hop track).

2. Ctype Extension? That's like your DJ's mixing console – essential for keeping the beats in check!

3. cURL Extension is our communication lifeline, letting us call up APIs when we need to collaborate with other partygoers.

4. DOM Extension, think of it as the blueprint architect for all those web pages you'll be building.

5. Fileinfo Extension helps identify the music files you bring to the event so they play correctly (no one likes a scratched CD).

6. Filter Extension is like the bouncer at the door, checking everything that enters to make sure it's clean and safe.

7. Hash Extension? It's your password security guard, making sure no uninvited guests gain access to sensitive data.

8. Mbstring Extension helps with those fancy language translations you might want for an international crowd.

9. OpenSSL Extension is the bodyguard of our digital communications, encrypting secrets so they don't get leaked on the dance floor! 🕵️‍♂️

10. PCRE Extension, it's like the dance police, catching any awkward moves and making sure everything runs smoothly.

11. PDO Extension is our database connection, helping us store all those party memories for future reminiscing.

12. Session Extension, because who doesn't want to remember their favorite dance moves? 💃🕺

13. Tokenizer Extension is like the guest list – it makes sure everyone who should be there actually is (and no one crashes the party).

14. XML Extension, for those times when we need to share playlists with other DJs or even collaborate on larger productions.

Now that your server is fully equipped, let's boogie down and create some amazing Laravel applications! 🎉🎈💃🕺

 ### Server Setup: The Stage is Set! 🚀🎭

#### (A.K.A. "Nginx: Your Very Own Virtual Theatre Manager")

Welcome to the backstage of your Laravel application, where the real magic happens! ✨🎩

Before we can start the show, we need to set up our virtual theatre – that's right, Nginx comes into play. Think of it as a friendly usher who helps direct traffic (HTTP requests) to the right Laravel production.

To get Nginx ready for your grand entrance, follow these simple steps:

1. Download and install Nginx on your server if it isn't already installed – no need to be "that guy" who shows up without a ticket!

2. Create a new configuration file for Laravel in the `/etc/nginx/sites-available` folder, giving it an appropriate name like `laravel.conf`. Be sure to use your favorite text editor or simply run commands with your superpowers (aka SSH).

3. Configure your Laravel server settings inside this file. Here's a basic example of what it might look like:

```bash
server {
    listen 80;
    server_name your-laravel-app.com;
    root /path/to/your/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # pass the PHP scripts to FastCGI server
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php-fpm/www.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```
Replace `your-laravel-app.com` with your domain or IP address and set the correct path to your Laravel project's `public` directory.

4. Once done, create a symbolic link to the newly created configuration file in the `/etc/nginx/sites-enabled` folder, ensuring that Nginx knows it's time for the curtain to rise:

```bash
sudo ln -s /etc/nginx/sites-available/laravel.conf /etc/nginx/sites-enabled/
```

5. Restart Nginx and test your setup by visiting your domain or IP address in a web browser – it's showtime!

```bash
sudo service nginx restart
```

6. If all goes well, you should now see your Laravel welcome screen – the standing ovation you've been waiting for!

And that's a wrap! Now you can focus on creating mind-blowing applications without worrying about traffic control. Don't forget to tip Nginx (by giving it cookies and coffee) every now and then 🍪☕️!

 ### Ngnix (pronounced like "Uncle Vinny")

If your application is taking a one-way ticket to a server running Ngnix, here's a configuration file that could be the foundation for your web server's makeover. You might need to tweak it to suit your server's peculiarities, just like trying on a pair of pants after a big holiday feast. **If you find yourself in over your head with server management, consider calling upon the fully-managed Laravel platform, [Laravel Cloud](https://cloud.laravel.com). It's like having a butler for your application.**

Remember to ensure that this configuration directs all requests to your app's `public/index.php` file, just like telling your waiter at a fancy restaurant exactly where you want your food delivered. Moving the `index.php` file to the project root is like asking for dessert before dinner - it exposes sensitive files to the public Internet and no one wants that, especially not the Internet.

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /srv/example.com/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string; # This is like saying, "If the request can't find its pants, send it to the tailor"
    }

    location = /favicon.ico { access_log off; log_not_found off; } # No one needs a logo on their favorite server
    location = /robots.txt  { access_log off; log_not_found off; } # Even robots can find their own way home

    error_page 404 /index.php; # If the request gets lost, send it back to the starting point

    location ~ ^/index\.php(/|$) { # This is where the magic happens
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    location ~ /\.(?!well-known).* { # This is the no-go zone for unwanted guests
        deny all;
    }
}
```

 ### Meet Frankenstein's Monster of PHP Servers! 🚀🏯

Ahoy there, web dev pioneers! Ever heard of the PHP server that's more than a handful? I present to you, FrankenPHP - the modern, Go-built, electro-Frankensteined PHP application server! 🔩⚡️

Want to serve your Laravel apps with this beastly beauty? It's as easy as pie (but way cooler)! Just unleash its mighty `php-server` command upon your terminal:

```shell
frankenphp php-server -r public/
```

But that's just the beginning, dear friends! FrankenPHP packs a punch with features that'll make you say "it's ALIVE!" Like its [Laravel Octane](/docs/{{version}}/octane) integration, HTTP/3, state-of-the-art compression, and even the power to transform your Laravel apps into standalone binaries! 🤖🚀

If you're ready to unlock these powers and more, hop on over to FrankenPHP's [Laravel documentation](https://frankenphp.dev/docs/laravel/)! It's like a treasure map to the secret chambers of this PHP server monster! 🗺️🔓

And hey, don't forget about those permissions - they're as important as life itself in the world of web development. If you stumble upon the [Directory Permissions](#directory-permissions) section during your FrankenPHP journey, remember: a well-dressed server is a happy server! 🕶️🎉

Now, go forth and unleash the power of Frankenstein's PHP on your web apps! Happy coding, and don't forget to have fun along the way! 🥳💻

 Alrighty, let's get this party started! Laravel, being the sociable butterfly it is, wants to dance with your `bootstrap/cache` and `storage` folders. But, like any good dance partner, it needs to make sure you've cleared some space on the floor, or in this case, set the right permissions.

So, grab your dancing shoes (or terminal), because we're about to embark on a permission-setting adventure! You need to ensure that the web server process owner has the coveted write access to these directories. Picture it like giving your prom date the key to your parents' house - you wouldn't want to deny Laravel its chance to strut its stuff, now would you?

Just remember, it's all about mutual respect and understanding. Laravel brings the moves, but you provide the permissions! Now, let's get this dance floor (directory) ready for some serious Laravel-style boogieing! 💃🕺️🚀

 Alright, let's get this party started! When you're about to unleash your Laravel masterpiece upon the unsuspecting public (or just your dev server), it's time to give it a swift kick in the cache with our trusty Artisan sidekick. The `optimize` command is like the ultimate wingman, caching all your essential files – config, events, routes, and views – ensuring a smooth and speedy debut for your app. Just call its name:

```shell
php artisan optimize
```

If you ever find yourself in a situation where you need to clear out the cache after a wild night of optimization, fear not! The `optimize:clear` method is like the morning-after pill for your Laravel app. It'll purge all those cached files and wipe the slate clean, even clearing all keys in the default cache driver:

```shell
php artisan optimize:clear
```

In the ensuing sections of this doc, we're going to dive deep into each of the finely-tuned optimization commands that make your app faster than a cheetah on roller skates after a quadruple espresso. So buckle up, buttercup! It's optimization time!

<a name="optimizing-configuration-loading"></a>
Now, where was I? Ah yes, let's optimize the loading of your configuration like a well-oiled machine! This is what happens behind the scenes when you call the `optimize` command: Laravel takes all of your config files and compiles them into a single file for lightning-fast access. It's like going from a clunky VHS player to a sleek, modern 4K Blu-ray player – but for your Laravel app!

 ### Cache-tastic Deployment! 🍔

Alrighty then, when you're ready to unleash your Laravel masterpiece upon the interwebs, don't forget to give your application a quick spruce-up with the `config:cache` Artisan command. Here's how:

```shell
php artisan config:cache
```

This command is like the secret sauce for your Laravel app – it mixes up all of those configuration files into one snazzy, cached file. This means fewer trips to the filesystem for the framework when it's loading up your settings, saving you time and boosting performance! 🚀

> [🚨WARNING: KITCHEN SINK AHEAD]
>
> If you decide to use `config:cache` during deployment, make sure you're only calling the `env` function from within your configuration files. Once that cache is set, poof! Adieu, .env file! All calls to `env` for those .env variables will now return... *drumroll* ... a big fat NULL.

<a name="caching-events"></a>
Now, let's get this party started! 🎉

 ### Cache-tacular Event Mapping! 🥳

Who needs romance when you can have a love affair with a well-cached application? 💋 Caching your app's event listener mappings is like adding the secret sauce to your Laravel deployment process. And guess who's got the recipe for this tasty concoction? Your friendly neighborhood Artisan command, that's who!

```shell
php artisan event:cache 🥄🍲
```

Don't be shy now, give it a whirl, and watch your app speed up faster than Usain Bolt in a carb-free zone. 🏃‍♂️💨

(Disclaimer: While we can't promise gold medals, we guarantee a smoother running application!)

 ### Speed Up Your App Like a Cheetah on Red Bull! 🐾🚀

Ever find yourself in a pickle with a Laravel application larger than a Whopper and more complex than a Rubik's Cube? Well, we've got the solution that'll have your app moving faster than a cheetah on Red Bull! 💨

When you're dealing with a slew of routes in your application, it's crucial to remember this golden rule: Include the `route:cache` Artisan command in your deployment process. Here's how you do it:

```shell
php artisan route:cache
```

This command is like magic for your app - it transforms all those tedious route registrations into one quick, zippy method call tucked away neatly in a cache file. It's like giving your application an energy drink that boosts its performance when registering hundreds of routes! 🤩

Now, you might be wondering why this magical elixir can make such a difference. Here's the lowdown: When Laravel needs to load a route during runtime, it first looks for them in the cache file instead of iterating through all the routes every single time. And let's face it - who doesn't like saving a few extra seconds while enjoying a smoother app experience? 😉

So next time you find yourself wrestling with your Laravel application, remember this: Just give it a dash of `route:cache`, and watch the performance improve like a cheetah on Red Bull! 🌞

 ### Cache those Hot Blades! 🚀💥

Deploying your Laravel masterpiece to the big leagues? Don't forget to bring the champagne... and run this little number:

```shell
php artisan view:cache
```

Just like a seasoned barista pulling shots for an espresso bar, our Artisan command pre-brews all those Blade views you've been whipping up, so they're ready to serve without the pesky delay of on-demand compilation. That means faster load times and happier users, leaving more time for them to admire your coding prowess!

<a name="reloading-services"></a>

Now, if you find yourself in need of a refresh (say, after making changes to views), fear not! The `view:clear` command is here to swoop in and save the day:

```shell
php artisan view:clear
```

This command clears all those pre-brewed Blade views, ensuring your application serves up the freshest content possible. So don't be afraid to shake things up; our Laravel app is a flexible barista that can handle any changes you throw its way! 🍻

 Alright, party people! 🎉🥳 Let's talk about the joyous journey of reloading services - yes, it sounds like a dance routine, but in this case, it's all about your Laravel app!

🚀 First off, when you're deploying to the fabulous [Laravel Cloud](https://cloud.laravel.com), no need to fret over the `reload` command, because it handles reloading all services like a pro! No sweaty palms or last-minute panic attacks - it's as smooth as silk.

But when you've deployed a spankin' new version of your app, and you've got long-running services like queue workers, Laravel Reverb, or Laravel Octane humming along, it's time to hit refresh! Just think of it as updating your favorite playlist and giving those old tunes a fresh spin.

Laravel comes equipped with an incredibly useful `reload` Artisan command that makes the whole process a breeze:

```shell
php artisan reload
```

So, if you're not using [Laravel Cloud](https://cloud.laravel.com), it's time to put on your detective hat and set up a trusty process monitor. This sleuth will keep an eye out for when those reloadable processes take their final bow and whisk them back onto the stage faster than you can say "Encore!" 🎬

P.S: If you're feeling extra fancy, remember that you can enable [Debug mode](<a name="debug-mode"></a>) for a more interactive experience! 😎

Happy reloading, app aficionados! 🎉🥳

 ## Error Exposure Control: The Show Mustn't Go Wrong! 🎭

Ahoy there, coder-pirates! Let's dive into the world of Debug Mode - a treasured setting nestled deep within your `config/app.php` config file. This puppy decides just how much juicy error info should be spilled before the user's eyes. By defaul', it follows the command of the `APP_DEBUG` environment variable, which is none other than ye olde `.env` file! 🌵

> [!Attention all decks!]
> **In your swashbuckling production setting, this value should forever remain 'Avast!' (or more precisely, set to `false`). If the `APP_DEBUG` be set to `true` in production, ye risk walkin' the plank and exposin' precious configuration values to yer shipmates!**

Now, before we continue our swashbuckling journey, let's navigate to this mystical Health Route <a href="#the-health-route">🏥</a>. It'll tell ye all about the current status of yer application - a handy tool when ye be sailin' in uncharted waters. Yarr! 🐙

Stay shipshape, mateys! ☠️🎉

 ## The Vitality Dashboard Route

In Laravel, we've got a built-in health check route, which is like your application's digital pulse. Perfect for letting an uptime monitor, load balancer, or orchestration systems like Kubernetes know whether you're alive and kicking or not (spoiler alert: in Laravel's case, it usually is).

By design, this route hangs out at `/up`, and if your app wakes up without any hiccups, it'll send a cheery 200 HTTP response. But if something goes awry (like you forgot to brew coffee for the team), it'll respond with a grumpy 500 HTTP response. You can change the route's location in your app's `bootstrap/app` file:

```php
->withRouting(
    web: __DIR__.'/../routes/web.php',
    commands: __DIR__.'/../routes/console.php',
    health: '/up', // [Old man Murphey removes this]
    health: '/status', // [Old man Murphey adds a more sophisticated alias]
)
```

Whenever requests hit this route, Laravel will also unleash an `Illuminate\Foundation\Events\DiagnosingHealth` event, giving you the chance to perform custom health checks that fit your application. Think of it as adding a pet doctor to your healthcare team - in this case, the doctor is a [listener](/docs/{{version}}/events) for the event. This 'doctor' can examine your app's database or cache status. If they find something amiss (like an unexpected database migration or a cache miss with a picture of a cat), they can throw a digital hissy fit by simply throwing an exception from the listener.

<a name="deploying-with-cloud-or-forge"></a>
Now, if you're deploying using cloud services like Forge, don't worry - Laravel knows its place in the pecking order and won't try to take over as your personal doctor. But it never hurts to have a second opinion, right? So keep this health check route on your radar when you're checking up on your app's well-being! 🤕🩺🚀

 **Deploying like a Rockstar with Laravel Cloud or Forge** 🎸🌟

Are you tired of pulling all-nighters to deploy your Laravel apps? Well, grab your guitar and strum along as we introduce you to our rockstars: Laravel Cloud and Forge! 🎉🤘

<a name="laravel-cloud"></a>
**Laravel Cloud:**

Welcome the new kid on the block! This fresh-faced deployment service is ready to take your app from zero to hero. With its easy-to-use interface, you'll have your masterpiece live in no time. It supports Git, SSH, and even magic spells (okay, not that last one, but it sure feels like it!).

Ready to become a rockstar? Here are the chords:

1. Sign up for a Laravel Cloud account at [Laravel Cloud](https://laravel-cloud.com/) 🎫
2. Link your Git repository and choose the desired server configuration. Don't worry, there are helpful guides to assist you if you need 'em! 📚
3. Once connected, Laravel Cloud will deploy your app with a single click. You can even automate deployment on every push! 🚀
4. Enjoy watching the sunrise (or set) as your app goes live and fans flock to it. Just make sure you've got a backup plan in case they start demanding encores! 🎤🎭

<a name="laravel-forge"></a>
**Laravel Forge:**

If Laravel Cloud is the new kid, then Forge is the cool veteran. This deployment service has been around since 2015 and still rocks hard! It takes care of all server management tasks, from provisioning to deployment and database setup.

Here's a quick rundown:

1. Sign up for a Laravel Forge account at [Laravel Forge](https://forge.laravel.com/) 🎫
2. Add your SSH key and choose the desired server configuration. Don't worry, there are helpful guides to assist you if you need 'em! 📚
3. Create a new site or connect an existing one (Laravel or otherwise) 🌐
4. With a single click, Laravel Forge will deploy your app and set up the database. And just like that, you've got a full-blown concert! 🎸🤘
5. Keep rocking, keep rolling – Forge also supports continuous integration and automatic deployment through services like GitHub Actions, Bitbucket Pipelines, and more! 🤯🚀

 🌤️ Get ready for a cloudy adventure, my dear Laravel enthusiast! 🌤️

If you fancy a fully-managed, auto-scaling deployment platform that's been tailor-made just for your precious Laravel projects, look no further than [Laravel Cloud](https://cloud.laravel.com)! It's like having your very own personal genie, but instead of granting wishes, it offers managed compute, databases, caches, and object storage - all fine-tuned to work harmoniously with Laravel, so you can keep coding those beautiful applications just the way you love to.

Ever dreamt of launching your Laravel app into the digital cosmos? With Laravel Cloud, that dream becomes a reality! Embrace the scalable simplicity and watch your application soar like a digital phoenix 🐲, ready to handle any traffic surge with its powerful wings.

<a name="laravel-forge"></a>
👉 Fun Fact: Did you know that Laravel Cloud was created by the same magical minds who birthed Laravel? They're like superheroes for coders! 🦸‍♂️✨

 Ahoy there, captain! Ever found yourself navigating the treacherous seas of server management, longing for a trusty first mate to handle all the gritty work? Fear not, for Laravel Forge is here to save your day!

If you fancy setting sail on your own servers but shudder at the thought of configuring all those pesky services required to run a swashbuckling Laravel application, Laravel Forge (https://forge.laravel.com) is your new best mate, a VPS server management platform tailored for Laravel adventures!

Laravel Forge can set anchor in various harbors, including DigitalOcean, Linode, AWS, and many more. But that's not all, matey! Forge will also hoist the sails and steer your ship through the rough seas by installing and managing all the swashbuckling tools needed to build a robust Laravel application – think Nginx, MySQL, Redis, Memcached, Beanstalk, and more. So you can focus on crafting that next legendary pirate treasure map instead of worrying about leaky lifeboats or a wonky compass!

In other words, Laravel Forge is the yeoman who makes sure your ship's in tip-top shape while you're off pillaging and plundering. So why not give it a try? You can thank us later when your Laravel application sets sail on smooth waters without any of the usual server management headaches!