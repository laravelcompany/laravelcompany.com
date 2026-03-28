 # Laravel's Dance Floor: A Symphony of Code! 🎶🥁

## The Jam Session Begins 🎧

- [The Grand Entrance](#theGrandEntrance)
- [Setting Up Shop](#settingUpShop)
- [Tuning the Instruments](#tuningTheInstruments)
    - [Secret Passwords](#secretPasswords)
    - [Allowed Venues](#allowedVenues)
    - [Extra Acts](#extraActs)
    - [Locking Down Security](#lockingDownSecurity)
- [Hitting the Stage](#hittingTheStage)
    - [Debugging the Performance](#debuggingThePerformance)
    - [Calling for an Encore](#callingForAnEncore)
- [Curtain Call: Lighting Up the Spotlight](#curtainCall)
- [Taking it to the Main Stage: Live Concert](#takingItToTheMainStage)
    - [Keeping Tabs on the Show](#keepingTabsOnTheShow)
    - [Sound Checks and Setup](#soundChecksAndSetup)
    - [Mic Checks and Lights](#micChecksAndLights)
    - [Port Management](#portManagement)
    - [Backstage Management](#backstageManagement)
    - [Scaling Up the Performance](#scalingUpThePerformance)
- [Rockin' Out: Events and More! 🎵🎉](#rockinOut)

<a name="theGrandEntrance"></a>

Welcome to Laravel's Dance Floor, where code symphonies come alive! 🎶🥁 Let's get started and learn how to set up your own amazing show. 🚀

<a name="settingUpShop"></a>

First things first: make sure you have all the necessary gear for a killer performance! Follow our simple setup guide, and you'll be rockin' out in no time. 🎸🎺🥁🥁

<a name="tuningTheInstruments"></a>

Now that everything's set up, it's time to tune your instruments! Configure your application's credentials, allowed origins, additional applications, and SSL settings. 🎶🔧💻 Make sure everything's in perfect harmony!

<a name="secretPasswords"></a>

First things first: let's get those secret passwords sorted out! This way, you can keep your show exclusive and prevent unwanted guests from crashing the party. 🔐🕵️‍♂️

<a name="allowedVenues"></a

Next up: choose the venues that are allowed to attend your show. This will help ensure a more intimate, controlled experience for both you and your audience! 🏞️🌆🎫

<a name="extraActs"></a>

Want to invite more acts to join the fun? Adding additional applications is easy-peasy! Just make sure each act complements your show, creating an unforgettable experience for everyone involved. 🤹‍♂️🎭🤸‍♀️

<a name="lockingDownSecurity"></a>

For a secure and worry-free performance, it's essential to lock down security! Configure SSL to create an encrypted connection between your stage and your audience. 🔒🔓

<a name="hittingTheStage"></a>

Now that everything's in order, it's time to hit the stage! We'll help you debug any performance issues and show you how to restart the show if needed. 🎤🕺️💃️

<a name="debuggingThePerformance"></a>

If something goes awry during your performance, don't panic! Use our debugging tools to quickly find the issue and get back on track. 🔍👩‍🏫👨‍💻

<a name="callingForAnEncore"></a>

Ready for more? Call for an encore and keep the party going! We'll show you how to restart the performance with ease. 🎈🎉🥳

<a name="curtainCall"></a>

And that's a wrap! After the final bow, we'll help you light up the spotlight and monitor your performance, ensuring a memorable experience for all. 💡🌟✨

<a name="takingItToTheMainStage"></a>

Now that you've mastered the basics, let's take it to the main stage! We'll show you how to open files, manage your event loop, set up a web server, and more. 🏆🎤🥁

<a name="keepingTabsOnTheShow"></a>

As the performance progresses, we've got you covered! Keep tabs on your show with our helpful monitoring tools. 👀📊👩‍💻👨‍💻

<a name="soundChecksAndSetup"></a>

Before the show starts, it's essential to perform sound checks and set up the stage properly! We'll help you with that so your audience can enjoy a crisp, high-quality sound. 🎤🔊📢

<a name="micChecksAndLights"></a>

Make sure everything's in order before the show begins! Check your mics and lights to create a captivating atmosphere for your audience. 💡🎬🎛️

<a name="portManagement"></a>

Managing ports is crucial for a seamless performance! We'll help you navigate the ins and outs of port management with ease. 🏢📥🔗

<a name="backstageManagement"></a>

Backstage operations are essential for any successful show! We'll guide you through process management, scaling, and other behind-the-scenes tasks to ensure a smooth performance. 🎨🎭🤳‍♂️

<a name="rockinOut"></a>

And finally, it's time to rock out! We'll introduce you to Laravel's event system, so you can create incredible experiences for your audience and keep the party going all night long. 🎉🎵🤘🏻 Let's get this show on the road!

 Ahoy there, Captain! Welcome to the swashbuckling world of Laravel Reverb – your ticket to real-time, WebSocket communication as fast and scalable as a pirate ship in full sail! No more waiting around for messages like a landlubber, but rather, instant communication fit for the Seven Seas!

And guess what? It's all shipshape integrated with Laravel's grand fleet of event broadcasting tools, ensuring smooth sailing from start to finish. Brace yourself for an adventure that's faster than a seagull on steroids! 🦃🚀

Now, let us set sail and unleash the power within... (But first, you might want to grab your lifejacket, as we're about to dive deep into installation.)

<a name="installation"></a>

Anchors aweigh! Here be the instructions to get Laravel Reverb up and running on yer vessel:

1. First, you'll need to ensure your ship is stocked with Composer: `composer global require laravel/reverb`
2. Next, set sail for the shores of your Laravel application by installing via composer: `composer require laravel/reverb`
3. Hoist the Jolly Roger high and make it known that ye've joined the ranks of the real-time pirates with this command: `php artisan vendor:publish --provider="Laravel\Reverb\ReverbServiceProvider"`
4. Lastly, adjust yer sails to catch the winds of change by adding a new broadcast driver in `config/broadcasting.php`:

```
'reverb' => [
    'driver' => 'reverb',
],
```
5. And that's a wrap! Now ye can fire cannons (er, events) across the seas without the delay of a snail's pace!

Yarr, matey! Set sail for real-time communication, and may your ship never be caught idle in port again! 🤠🐳

 Alrighty, let's get this party started! 🥳 Time to install the star of our show - Reverb. But first, grab your magic wand (a.k.a terminal), and cast this incantation:

```shell
php artisan conjure:broadcasting
```

Once you've done that, sit back, relax, and watch the pixie dust fly ✨ As a fair warning, your screen might get a little sparkly. Don't worry, it's just the magic at work!

<a name="configuration"></a>
Now that Reverb is all set up and ready to rock, let's take a peek under the hood and see how we can customize it to our heart's content. After all, every great superhero has their cape and utility belt, right? 🦸‍♂️🌍

So, grab your magnifying glass (or maybe just a quick peek at your `config/broadcasting.php` file), and start tweaking the settings to make Reverb truly yours! 🎉🎨🎩

 Alrighty, let's get our dance shoes on and dive into the world of Laravel broadcasting! 🕺️

First things first, you'll want to get Reverb up and running, and that's where the `install:broadcasting` Artisan command comes in. It's like inviting Reverb to your party, but instead of a cake and balloons, it sets up with some sensible defaults. 🎂🎉

Now, if you're feeling a bit rebellious and want to tweak those settings, fear not! You can do so by updating Reverb's environment variables or by whipping up the `config/reverb.php` configuration file like a pro chef in your very own Laravel kitchen. 👩‍🍳🥘

So go ahead and make it your own, but remember, with great power comes great responsibility. Don't go overboard with the confetti cannons just yet – you still need to keep this party running smoothly! 🎉🚀

<a name="application-credentials"></a>
Now that we've got the formalities out of the way, it's time to talk about application credentials. Think of them as the secret handshake for your Laravel app and its trusted friends. You can find these little gems in the `config/app.php` file – just keep 'em close, as they're crucial for maintaining secure connections between your app and its buddies. 🤫🔐

That's all, folks! Now you're ready to take on the world of Laravel broadcasting like a boss. 💪🌐 Just remember: the more you learn, the less you know – so keep exploring and enjoy the ride! 🎢🎉

 Alrighty then, let's get this party started! 🥳 In the wild world of Laravel and Reverb, it's crucial to exchange some fancy credentials akin to invitations to an exclusive dance. These "application" credentials are like the secret handshake between your client and server, proving you're not just a random cat on the internet trying to join the bash. 🐱

These VIP tickets are set up on the server side and used as IDs to validate your client's request. To define these credentials, simply use these environment variables:

```ini
REVERB_APP_ID=my-app-id (This is your ticket to the Reverb ball!)
REVERB_APP_KEY=my-app-key (The magical secret word for entry)
REVERB_APP_SECRET=my-app-secret (Your password for the hidden VIP area)
```

Don't forget, just like at a fancy club, these credentials are essential to gain access. Without them, you'll be left outside in the cold, longing for the sweet, sweet sounds of Reverb and Laravel harmonizing together. 🌟

 ### Cosmic Coordinates

If you fancy yourself a spaceship captain, then it's time to chart your approved galaxies! Navigate to the `config/reverb.php` file (it's like a sci-fi user manual) and head to the `apps` section within. Update the `allowed_origins` configuration value with the coordinates of your friendly galaxies. If an uncharted system pings without clearance, they'll be politely asked to warp out.

In case you want to let every extraterrestrial civilization join the party, simply use `*` as your wildcard:

```php
'apps' => [
    [
        'app_id' => 'my-app-id',
        'allowed_origins' => ['laravel.com', '*, M31, Andromeda'], // Feel free to add more friendly neighbors!
        // ...
    ]
]
```

Just remember, intergalactic etiquette demands that you keep an eye on who's buzzing around your corners of the universe!

 ### Reverb: The Jack-of-All-Trades of WebSockets! 🤹‍♂️

Reverb, the multipurpose wonder of the WebSocket world, doesn't just stop at one application when it arrives in your Laravel town. It's like that friendly neighbor who decides to share their tools and expertise with everyone on the block! 🌟

Want to make your single Laravel application a hub for multiple apps? Reverb's got your back! 🥪 Just extend its helping hand by defining numerous `apps` in your config file (located at `config/reverb.php`). Here's how you can do it:

```php
'apps' => [
    [ // App One
        'app_id' => 'my-app-one',
        // ...
    ],
    [ // App Two
        'app_id' => 'my-app-two',
        // ...
    ],
],
```

And voila! 🎩 Now, your Laravel app becomes a WebSocket concierge for all those applications in need. Because with great power comes great connection... or something like that. 💻😎

 Ahoy there, WebSocket enthusiasts! Let's dive into the thrilling world of SSL, shall we?

In the grand majority of cases, our trusty upstream web servers (like Nginx and co.) take care of securing those WebSocket connections before forwarding them to your Reverb server. But fret not, ye pirates! Sometimes it's nifty for ol' Reverb to handle secure connections himself, say during local development or when you're using Laravel Herd's secure site feature or Laravel Valet with a secure command against yer application.

To make your Reverb server dance the tango of SSL, set the `REVERB_HOST` environment variable to yer site's hostname or pass it as an option when firing up the Reverb server:

```shell
php artisan reverb:start --host="0.0.0.0" --port=8080 --hostname="laravel.test"
```

And voila! Your Reverb server will now answer secure WebSocket knocks (`wss`) at `wss://laravel.test:8080`.

Fancy a custom certificate? Define `tls` options in yer application's `config/reverb.php` configuration file, and feel free to specify any of the options supported by PHP's SSL context options:

```php
'options' => [
    'tls' => [
        'local_cert' => '/path/to/cert.pem'
    ],
],
```

Now, isn't that swashbucklingly educational? Keep on coding like a boss! 🏴‍☠️🚀

 Alright, party people! Let's get this Reverb server up and running like a well-oiled disco ball! 🕺️🎉

To kick things off, you can start the party with the magical `reverb:start` Artisan command:

```shell
php artisan reverb:start
```

By default, our server will set up shop at `0.0.0.0:8080`, making it accessible from all the cool kids on the network block party. 👋💻

But if you're feeling a bit selective about who gets to join, you can specify a custom host or port using the `--host` and `--port` options when starting the server:

```shell
php artisan reverb:start --host=127.0.0.1 --port=9000
```

If you'd rather avoid typing all that on your birthday suit, you can define `REVERB_SERVER_HOST` and `REVERB_SERVER_PORT` environment variables in your application's .env configuration file instead:

```ini
REVERB_SERVER_HOST=127.0.0.1
REVERB_SERVER_PORT=9000
```

Now, let's not confuse `REVERB_SERVER_HOST` and `REVERB_SERVER_PORT` with `REVERB_HOST` and `REVERB_PORT`. The former pair are like the hosts of the party (where the server hangs out), while the latter duo are like the invitation list (telling Laravel where to send those all-important broadcast messages). In a production environment, you might want to route requests from your swanky public Reverb hostname on port `443` to a Reverb server operating on `0.0.0.0:8080`. Here's how that would look in the .env file:

```ini
REVERB_SERVER_HOST=0.0.0.0
REVERB_SERVER_PORT=8080

REVERB_HOST=ws.laravel.com
REVERB_PORT=443
```

Now that you've got the server up and running, you're well on your way to hosting the hottest broadcast event in town! 💥🎉✨

 ### Debugging, because who doesn't love a good mystery? 🕵️‍♂️

To keep our performance rocket-fast (and your jokes flying high), Reverb shuns the drama of debug info by default. But fear not, sleuths! If you're itching to peer into the secret world of data flowing through your Reverb server, all you need is a little magic word: `--debug`. Just chant this incantation when starting your server:

```shell
php artisan reverb:start --debug
```

🔍🕯️ A hint for detectives like you: This incantation might come in handy whenever you need to unravel those pesky coding conundrums. 😉

 Alright, party people! Buckle up because we're about to talk shop (in a fun way, of course). You see, ol' Reverb here is no fleeting disco light; it's a marathon runner, not a sprinting sprinter. So, whenever you tweak your code like a modern-day Da Vinci, don't expect the changes to magically appear without giving our trusty server a gentle nudge (or a full-on restart).

To give that server the boot it so desperately needs after your genius updates, just drop by the command line and holler:

```shell
php artisan reverb:restart
```

Now, if you've got Reverb teamed up with a process manager like Supervisor (the bouncer of the server world), it'll automatically throw our server another round after it's seen all current connections bounce out the door. And hey, who doesn't love an automatic encore?

So there you have it! Just remember: change + code = refresh + restart. It's the dance floor of development! 💃🏼🕺🏼

 Ahoy there, Captain! Navigating the treacherous waters of web development can be a daunting task, but fear not - Laravel's got your back with a swashbuckling tool called... wait for it... **Laravel Pulse**!

Yes, you heard that right. No more guessing games on how many pirate mates are chatting up your ship (er, server). This bad boy lets you keep tabs on the connections and messages handled by your server like a true sea captain would his crew's rum rations.

First mate, make sure Pulse is installed onboard (check out [Laravel Pulse](/docs/{{version}}/pulse#installation) for detailed instructions). Once that's squared away, it's time to invite Reverb's recorders to join the crew by adding their classes to your `config/pulse.php` configuration file:

```php
use Laravel\Reverb\Pulse\Recorders\ReverbConnections;
use Laravel\Reverb\Pulse\Recorders\ReverbMessages;

'recorders' => [
    ReverbConnections::class => [
        'sample_rate' => 1, // Time between checks (in seconds)
    ],

    ReverbMessages::class => [
        'sample_rate' => 1,
    ],

    // ...
],
```

Next up, let's give these recorders a spot on the Pulse dashboard. Navigate to [Pulse dashboard](/docs/{{version}}/pulse#dashboard-customization) and drop in the following Livewire magic:

```blade
<x-pulse>
    <livewire:reverb.connections cols="full" />
    <livewire:reverb.messages cols="full" />
    ...
</x-pulse>
```

Now, here's the fun part - we've got to keep an ear out for any new activity happening aboard our ship (er, server). The connection activity is recorded by our trusted lookout, who periodically checks in for updates. To make sure this info is correctly displayed on the Pulse dashboard, you must run the `pulse:check` daemon on your Reverb server.

If you're running a horizontally scaled configuration (like a flotilla of ships working together), only run this daemon on one of your vessels to avoid confusion. Arr matey!

 Alrighty then! Let's get this WebSockets shindig up and running in the big leagues, shall we? First off, remember that these WS servers have a knack for keeping the party going all night long (or, you know, until your server keels over from exhaustion). So, to keep things jolly between your Reverb server and your server's resources, you might want to give it a little TLC with some optimizations.

<aside>
🚨 **PSA:** Laravel Cloud ([https://cloud.laravel.com](https://cloud.laravel.com)) is the cat's pajamas when it comes to managing your WebSockets infrastructure! Powered by a gang of Reverb clusters, this bad boy lets you focus on scaling and shipping applications with Reverb superpowers, without the headache of managing infrastructure yourself.
</aside>

Now, let's dive in!

<h3 id="open-files">Keepin' it light: File Descriptors and Open Connections 🔄 </h3>

One of the key factors in keeping your server from becoming a panting, gasping mess is managing the number of open connections. Here are a few tips to keep those file descriptors in check and ensure your server doesn't start choking on its own sockets:

1. **Limit the number of open connections:** PHP has a default limit of 1024 open connections. You can increase this by tweaking the `max_connections` setting in your php.ini file. Just remember, more isn't always merrier! Be sure to find the sweet spot for your specific setup.

2. **Use Laravel's connection pooling:** This little gem helps reduce the number of open connections by reusing established connections when new ones are needed. You can enable it in your `config/broadcasting.php` file by setting the `connections` array to the `redis` driver.

<h3 id="nginx">NGINX and its magic: The Gatekeeper 🛹 </h3>

If you're using NGINX as your web server, it can help out quite a bit with managing connections. Here are a few things to keep in mind:

1. **Limit the number of worker processes:** Too many worker processes could lead to a bottleneck when handling WebSocket connections, so be sure to set an appropriate limit. You can find this setting in your `nginx.conf` file under the `worker_processes` directive.

2. **Use keepalives:** Keepalives help reduce the number of TCP connections by keeping a persistent connection open for multiple requests. You can enable them with the `keepalive_timeout` and `keepalive_requests` directives in your server block configuration.

<h3 id="tcp-optimization">TCP Optimization: The Secret Sauce 🍲 </h3>

Last but not least, let's talk about tuning TCP settings to keep things humming along smoothly. Here are a few tweaks you can make:

1. **Adjust your TCP buffer sizes:** By increasing the size of your send and receive buffers, you can reduce the number of times your server needs to read from or write to the network, improving performance. You can do this in your `nginx.conf` file with the `tcp_nodelay`, `sendfile`, and `tcp_nopush` directives.

2. **Use TCP Fast Open:** This feature helps reduce latency by allowing the client and server to start sending data as soon as they establish a connection, rather than waiting for the three-way handshake to complete. You can enable it in your NGINX configuration with the `tcp_fastopen` directive.

And there you have it! A bit of a laugh, but also some handy tips and tricks for getting your Reverb server ready for the big leagues. Happy optimizing! 🚀💡

 ### WebSockets: The Eternal Dance Partners

Ah, WebSockets! The life of the party that refuses to leave until someone pulls the plug. Each connection, much like a dance partner at a never-ending rave, is stored in memory until either the client or server decides it's time for a break (or a disco nap).

In the world of Unix and its cooler cousins, each dance partner is symbolically represented by... wait for it... a *file*! Yes, you read that right. But don't worry if you're more familiar with Windows – we wouldn't dream of leaving our Linux-loving friends out of the fun.

However, just like any good shindig, there are limits to how many dance partners one can handle at once. In both the operating system and application realms, there are strict rules about the number of files that can be open simultaneously. Let's take a look at these rulers:

<a name="operating-system"></a>
**The Operating System Sheriffs:**
These are the law enforcement officers of the file world. They impose the maximum number of files each process can have open, and they don't take kindly to rule-breakers. To find out what your limit is, unleash the power of command-line sorcery with the `ulimit -n` incantation.

**The Application Bouncers:**
While the operating system sets the general rules, applications can also set their own limits to keep things orderly and prevent overcrowding. These self-imposed limits are known as "connection pools." To learn about your application's connection pool settings, consult its documentation or reach out to its friendly support team – they're always happy to help!

Now that you know who the players are, let's boogie on down to managing your connections like a pro!

 Alright, folks! Let's take a little trip down memory lane, or rather Unix-way lane, and talk about the good ol' "open file limit" business.

Now, if you're running your Laravel wonderland on a Unix-based OS (which, let's face it, is where all the cool kids hang out), you can find out how many files you're allowed to have open simultaneously by using the magical `ulimit` spell:

```shell
ulimit -n
```

This command will cast a light on the number of open files that different users are permitted, making it perfect for settling those late-night debates at the pub. If you feel like your limit isn't high enough to host all of Brad Pitt's films, fret not! You can update these values by editing the sacred `/etc/security/limits.conf` file (imagine it as a medieval scroll, if that helps).

For instance, if you want to raise the maximum number of open files for the `forge` user from mere mortal numbers to a whopping 10,000, you'd want to make an entry like this:

```ini
forge - nofile <10000>
```

And there you have it! Your friendly neighborhood `forge` user can now open more files than a librarian on a book-hoarding spree. Just remember to be responsible with your newfound powers, and never use them to open more than one copy of the latest Nicholas Sparks novel. That's just cruel, mate.

 Alright, buckle up, folks! We're diving into the magical world of Linux file configuration, where unicorns frolic and rainbows are as plentiful as `chmod 777` commands gone awry. Today, we'll discuss a little gem called `/etc/security/limits.conf`.

You see, this isn't just another incomprehensible file full of cryptic code – it's the secret to unlocking your system's true potential! (Or at least, its file handling capabilities.)

In simple terms, it's like a training program for your computer. Just as you can only lift 100 pounds and run a 10-minute mile, your server has limits too. But with this magical document, we can raise those limits to new heights... or, in our case, file handles per process.

Here's an example:

```bash
forge        soft  nofile  10000
forge        hard  nofile  10000
```

In this case, Forge (our favorite Laravel-loving Unicorn) has been granted the power to open a whopping 10,000 files at once! And remember, kids: with great power comes great responsibility. So use your newfound abilities wisely, and let's all avoid the dreaded "too many open files" error that haunts us all.

And there you have it! You've just conquered another step in Laravel development on Linux – or at least, another piece of the puzzle. Keep learning, keep laughing, and happy coding! 🚀🌈🦄

 ### Event Loop: The Unsung Hero of Your Reverb Party! 🥳

Under the sparkling disco ball, our friend Reverb is busy hosting a non-stop WebSocket bash on the server, all thanks to its trusty sidekick - the ReactPHP event loop! 🎉🎧

By nature, this event loop is a born socialite, connecting with all the WebSocket friends without breaking a sweat. By default, it's powered by the ever-popular `stream_select`, who doesn't ask for any fancy introductions or additional plus ones. But, as with any celebrity, there's a catch - `stream_select` can only handle up to 1,024 friends at a time. So if you're planning a viral rave, you might want to bring in the big guns!

Enter the `ext-uv` powered loop - the life of the party who doesn't care about the guest list restrictions! This PHP extension is a VIP guest and can be invited over via PECL:

```shell
pecl install uv 🥳🎉🎉
```

Remember, Reverb will automatically switch to this cool cat when it shows up. So, let the good times roll! 💃🕺️

 Alrighty then! Let's get our digital cowboy hats on and dive into the wild west of web servers. Now, Reverb isn't your typical gunslinger, it prefers the quiet life on a non-showy port. But when it comes to rounding up traffic, we best saddle up a reverse proxy!

Assuming Reverb's roaming around on host `0.0.0.0` and port `8080`, just like a cowpoke setting camp in the middle of nowhere, here's how you can define its territory for Nginx:

```nginx
server {
  ...

  location / {
    proxy_http_version 1.1;
    # Set the host, scheme, port, and IP address so Reverb knows who sent the request
    proxy_set_header Host $http_host;
    proxy_set_header Scheme $scheme;
    proxy_set_header SERVER_PORT $server_port;
    proxy_set_header REMOTE_ADDR $remote_addr;
    # Forward along any X-Forwarded-For headers (handy for tracking the origin of requests)
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    # Let Reverb know it's time to upgrade its connection, just like a long-distance call!
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";

    # Send all requests to Reverb at port 8080 on the same host
    proxy_pass http://0.0.0.0:8080;
  }

  ...
}
```

[!WARNING]
Remember, Reverb is a WebSocket wrangler that listens at `/app` and handles API requests at `/apps`. Ensure your web server's got the know-how to serve these URLs. If you're using [Laravel Forge](https://forge.laravel.com) as your sheriff, everything should be in tip-top shape by default!

Typically, web servers are like a saloon with a limited number of stools to prevent overserving customers (oops, I mean overloading the server). To give Nginx the capacity to handle 10,000 cowpokes, update the `worker_rlimit_nofile` and `worker_connections` values in the `nginx.conf` file:

```nginx
user forge;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;
# Allow up to 10,000 workers per process to be spawned
worker_rlimit_nofile 10000;

events {
  worker_connections 10000;
  multi_accept on;
}
```

This configuration will let loose up to 10,000 Nginx cowhands per process and set the open file limit to a whopping 10,000 too! Ride 'em, cowboy!

 ### Socket Sheriff

In the wild world of Unix, our server is like a quaint frontier town where every port opening is treated like the sheriff drawing his six-shooter. To find out the current range of your server's allowed ports, you can channel your inner cowboy with this command:

```shell
cat /proc/sys/net/ipv4/ip_local_port_range
```

Just imagine, it's high noon and you're standing at the saloon door, peering into a dusty file to see what ports your server's allowed to corral for the day. So drawl up your sleeves and let's get crackin', partner!

 Alrighty, let's get this party started! Your server is a social butterfly, able to mingle with up to 28,231 unique connections at once – that's quite the guest list! But, don't forget each connection requires its own personal dance floor (aka free port).

Now, we wouldn't want our server to be a wallflower now, would we? That's why we wholeheartedly recommend [horizontal scaling](#scaling), which is like inviting more DJs to spin records and keep the music flowing.

But hey, if you're feeling a little too popular and need more dance floors, you can update the allowed port range in your server's `/etc/sysctl.conf` configuration file. That way, your server can accommodate even more connections without getting sweaty palms from awkward small talk! 💃🏽🕺🏼

 ### Server Shenanigans 101: Keeping the Party Going! 🥳

Alright, party people! Let's talk about keeping our beloved Reverb server alive and kickin'. Most times, it's like being the bouncer at Studio 54 - you need a reliable doorman, and that's where Supervisor steps in. 🕺

If you're groovin' with Supervisor, don't forget to update your server's `supervisor.conf` file's `minfds` setting. It's like getting the VIP list ready for connections to our Reverb server - a critical step for preventing any unfortunate disco inferno scenarios! 🔥

```ini
[supervisord]
...
minfds=10000 🎭💃✨ (A little extra room for all those groovy connections!)
```

And remember, with great power comes great responsibility. Don't be the guy who accidentally pulls the plug on the dance floor! Keep those connections flowing like cocktails at a Las Vegas nightclub 🍹💃🏽. Happy server managing, and let's keep this party going all night long! 🎉🚀

 ### Rockin' those Connections like a Pro! 🤘

Ready to handle more jams than your single-server amp can handle? It's time to scale up, my friend! Just like a rock band expanding their tour, you can horizontally scale your Reverb server using the groovy publish/subscribe powers of Redis. This magical music tech lets Reverb manage connections across multiple servers, spreading the love (and data) around! 🎸

So, how do we make this happen? First, set the `REVERB_SCALING_ENABLED` environment variable to `true` in your application's `.env` configuration file:

```bash
REVERB_SCALING_ENABLED=🤘
```

Next up, grab a dedicated Redis drummer (server) to act as the bandleader for all your Reverb servers. They'll be responsible for keeping the rhythm and ensuring that messages are passed between all members of the band (your Reverb servers). Reverb will use the [default Redis connection you've got set up for your application](/docs/{{version}}/redis#configuration) to publish those messages to the rest of the crew.

Once you've enabled scaling and appointed your central Redis drummer, all you need to do is unleash the `reverb:start` command on multiple servers that can communicate with our rockin' Redis drummer. Place these servers behind a load balancer that knows how to evenly distribute incoming requests among them, like an experienced roadie keeping the concert running smoothly. 🎶

<a name="events"></a>
Now, let's talk about events – those exciting little gigs where your application interacts with Reverb. When a message arrives at one of your scaled-up servers, it'll use Redis to broadcast the news to all other band members (servers). Each server can then rock out and handle the event as needed! 🤘🏼

 Oh, the life of a Laravel event! The silent orchestra conductor in the background, directing the symphony of connections and messages without ever taking center stage. But fear not, for we're about to shed some light on these behind-the-scenes superstars!

Listen up, my friends! If you wanna become a connection or message groupie (or just perform some cool actions), you can [tune in to these events](/docs/{{version}}/events). They're the perfect way to keep your fingers on the pulse of what's happening when connections get managed, and messages start exchanging their numbers at the disco.

Now let me introduce you to some of Reverb's most popular events:

1. **Connection Made** (That's right, a match made in Laravel heaven!) - Happens when two lonely connections find each other and decide to tie the knot (or, you know, establish a connection). You can celebrate with confetti or set up some post-connection rituals here.

2. **Message Sent** (The moment of truth) - The big moment when one connection drops a message in another's inbox. If you want to intercept the delivery boy before he delivers the message, this is your chance!

3. **Message Received** (Ooh, drama!) - The other connection has read the message and is now either nodding in agreement or rolling its eyes in disagreement. This event allows you to eavesdrop on their thoughts... just kidding, it's more for setting up post-message actions.

4. **Connection Broken** (The breakup song) - Unfortunately, not all connections last forever. When a connection ends (either by choice or due to technical difficulties), this event lets you clean up any messy leftovers or perform a heartwarming goodbye routine.

5. **Error Occurred** (Oh noes!) - Something has gone terribly wrong! This event signals that there's an error in the connection or message-handling process, and it's time to call the tech support hotline.

So there you have it! Now you can be the life of the Laravel party by becoming a events groupie and performing some awesome actions based on these events. Happy coding!

 Alright, let's get this party started! When you're hanging out in your digital living room (aka Laravel app) and someone new shows up with a fresh bucket of popcorn (subscribes to a channel), boom, it's time for the `Laravel\Reverb\Events\ChannelCreated` shindig!

This event is like the virtual equivalent of clinking champagne glasses - it's here to celebrate the birth of a brand-new channel! So, who invited this newcomer? Well, it was none other than our trusty hostess (the first connection subscribing to the specific channel).

Now that we have all the RSVPs accounted for, the event welcomes the newly created channel with open arms and a warm embrace - in the form of the `Laravel\Reverb\Protocols\Pusher\Channel` instance. Now they can join the chat, play games, or discuss their favorite memes without having to knock on everyone's virtual door.

So there you have it! The next time you find yourself hosting a virtual soiree and someone new shows up, just remember to pour them a drink (or send them a ChannelCreated event) and let the good times roll!

 Ahoy there, shipmates! You've stumbled upon the `Laravel\Reverb\Events\ChannelRemoved` – the lifeboat of your Laravel app! This here event is fired off when a channel takes a walk off the plank, usually happening when the last sailor (ahem, connection) decides to unsub from the channel's pirate radio.

When this happens, our trusty event, like a seasoned lookout, receives the `Laravel\Reverb\Protocols\Pusher\Channel` instance – yarr! This is the life raft that carries all the juicy details about the departing channel, so don't let it float away without catching it!

Now, don't get too comfortable, mateys. It's a wild sea out there, and channels come and go like the tide. But with `Laravel\Reverb\Events\ChannelRemoved`, you'll always be ready to weather the storm and keep your Laravel ship sailing smooth as grog on a Saturday night!

 Ahoy there, Laravel adventurers! Brace yourselves for a riveting tale of connections and the great pruning that shall ensue. Now, picture this: You're hosting an epic party at your server's house, but as the night wears on, some guests have overstayed their welcome. Enter our hero, `Laravel\Reverb\Events\ConnectionPruned`.

This event is dispatched when one of those stale connections has been given the heave-ho by the gracious server host. It's like being the bouncer at a wild club, except you get to do it in code! And just like a good bouncer, this event receives the `Laravel\Reverb\Contracts\Connection` instance as its parting gift - a souvenir for the road, if you will.

So, next time you're trying to maintain order at your server party (or just coding up a storm), remember: sometimes you gotta kick out the stale connections and let fresh ones take their place. Keep it tidy, Laravel style! 🎉🥳🎊

 Ahoy there, matey! Step right up and get ready to ride the Laravel's waves of communication with the `Laravel\Reverb\Events\MessageReceived` event!

Yarr, when ol' Long John Client sends us a message from the seven seas, this is the pirate flag that gets raised on your ship. It'll pass ye a swashbuckling `Laravel\Reverb\Contracts\Connection` instance and a raw string of `$message` like a trusty cutlass in yer hand!

So grab yer peg leg, parrot, and eye patch, and let's dive headfirst into the world of Laravel's chatty clients. Arr matey, you can't say fairer than that!

 📣🔔 Attention all party-goers! 🎶🥳

When you're chatting it up with a client at your digital soiree, don't forget to send a `Laravel\Reverb\Events\MessageSent` invitation! This event is the life of the bash, getting down and boogieing when a message is served to a connection 🍽️🥳.

Now, here's who's invited: our star-studded guests include the `Laravel\Reverb\Contracts\Connection` instance 🤩 – the charismatic host of the party – and the raw string `$message` 📝 – the juicy gossip everyone's dying to hear!

So, next time you want to let loose on the dance floor of communication, make sure you send out a `MessageSent` event and keep the conversation flowing! 💬🕺️🎉