 # Let's Chat Like Never Before with Laravel Broadcasting! 🗣️🎙️

Get ready to take your app's real-time communication game to the next level! With Laravel Broadcasting, you can now send and receive messages between clients like a modern-day messenger service. Let's embark on this exciting journey together! 🚀

## Kickoff 🏈

### Warm Up: Quickstart ⚡️

First things first - let's get started! We'll guide you through setting up broadcasting in no time. Get ready for a blast-off! 🚀

### Installation on the Server Side 🗺️

#### Choose Your Broadcasting Provider: Revel, Pusher Channels, or Ably 🎯

Each provider brings something unique to the table (or broadcast channel, in this case). Let's explore them together!

### Get Set on the Client Side 🤖

#### Revel, Pusher Channels, or Ably - The Client-Side Edition 🎮

Just like their server-side counterparts, our client-side providers offer an exciting array of features to help you broadcast like a pro. Let's dive in!

### Concept Overview 🧩

#### Using an Example Application - The Perfect Guidebook 📖

Let's use an example app as our roadmap to mastering Laravel Broadcasting. This will make things a lot less mystifying and more fun! 🤪

### Defining Broadcast Events 🎧

#### Name That Event, Data Delivery, Queue Management, Conditional Broadcasts, and Transaction Safety 🏃‍♂️📝

Got a special event coming up? Let's discuss the best ways to define it and make sure it gets delivered safely. We'll also explore how to manage queues and handle conditions!

### Authorizing Channels 🔒

#### Creating Authorization Callbacks and Defining Channel Classes 🕵️‍♂️📝

Who gets to join the party? Let's talk about creating authorization callbacks and defining channel classes to make sure only the right people are broadcasting. 🤫

### Broadcasting Events 🎶

#### Sending Messages Only to Others, Customizing Connections, Anonymous Events, and Rescuing Broken Broadcasts 💬🎨🔧

We'll discuss the best ways to send messages, customize our connections, handle anonymous events, and even fix broken broadcasts!

### Receiving Broadcasts 📣

#### Listening for Events, Leaving Channels, Namespaces, and Using React or Vue 🎧🚪🌐💻

Let's explore how to listen for events, leave channels when necessary, use namespaces, and even incorporate React or Vue into our broadcasting system!

### Presence Channels 👥

#### Authorizing Presence Channels, Joining Presence Channels, and Broadcasting to Presence Channels 💬🤝🎧

We'll learn about presence channels - a fantastic way to keep track of who's online! Let's dive into authorization, joining, and broadcasting to presence channels.

### Model Broadcasting 🗣️📈

#### Model Broadcasting Conventions and Listening for Model Broadcasts 📈🎧

Ever wanted to turn your models into chatty Cathy's? Let's explore model broadcasting conventions and learn how to listen for those magical model events!

### Client Events 🕹️

#### Hear Ye, Hear Ye - Client-Side Action Handling! 🎧💻

Let's talk about handling client-side events. We'll discuss the best ways to make your app more interactive and user-friendly!

### Notifications 🔔

#### Alert, Alert - New Messages Arriving! 📣🚨

Last but not least, let's talk about notifications. We'll discuss how to create alerts for new messages and ensure your users never miss a beat!

Now that we have a better understanding of what Laravel Broadcasting can do, let's get started on this fun journey together! 🚀🎉

 Ahoy there, web app enthusiasts! Let's chat about a topic near and dear to our hearts: real-time, live-updating user interfaces – or as we like to call it, making your app feel as spry as a cat on a hot tin roof.

You see, in the old days (just last week), developers would continually bother their servers for data updates, much like that overzealous guest who keeps asking for more hors d'oeuvres at a cocktail party. But thanks to WebSockets, we can now implement real-time updates with all the grace of a well-choreographed tap dance routine.

Imagine you've built an app that exports users' data into CSV files and sends them via email. It's like being a personal data sommelier! But the CSV creation process takes longer than the world's slowest elevator ride, so you cleverly queue up this task using our trusty [queued jobs](/docs/{{version}}/queues). Once the CSV is ready and in the mail, we use event broadcasting to dispatch an `App\Events\UserDataExported` event, which is then received by your app's JavaScript. This way, you can inform the user their email is on its way without them needing to reload the page faster than a magician pulling a rabbit out of a hat.

Laravel makes it a breeze to broadcast your server-side Laravel [events](/docs/{{version}}/events) over a WebSocket connection, enabling you to share event names and data like best friends swapping secrets during sleepovers. The core idea here is simple: clients connect to named channels on the frontend, while your Laravel app broadcasts events to these channels on the backend. These events can include any additional data you'd like to make available to the frontend.

<a name="supported-drivers"></a>
Now, without diving too deeply into the nitty-gritty (we don't want to give away all our trade secrets!), let us highlight a few drivers that Laravel supports for event broadcasting: Redis, Pusher, and Tunnel. Each of these drivers has its own unique charm, much like different flavors of ice cream at a summer festival. So go ahead, pick your favorite, and get ready to serve up real-time updates like a pro!

 Ahoy there, aspiring Laravel wranglers! Let's set sail on an exciting journey through the seas of broadcasting drivers!

By golly, out of the box, Laravel provides you with a bounty of three server-side broadcasting vessels to choose from: Laravel Reverb (the life of the party), Pusher Channels (the captain who never misses a signal), and Ably (the dependable crew member that always delivers).

> [!ATTENTION]
> But hold yer horses, matey! Before we set sail on this event broadcasting adventure, ensure ye've swabbed the decks and read through Laravel's docs on [events and listeners](/docs/{{version}}/events). A stitch in time saves nine, as they say.

Now that our ship is battle-ready, let's cast off and explore the treasures that await! 🌴🐙🚀

 Alrighty then! Let's get this Laravel broadcast party started, shall we? 🥳

By default, your freshly baked Laravel apps are as quiet as a librarian's whistle. But fear not, for we've got the `install:broadcasting` Artisan command to loud-hail some real-time communication action! 📣

```shell
php artisan install:broadcasting
```

Just like a late-night talk show host who needs an audience, this command will ask you to pick a broadcast service for your events. It's like when they say, "Choose your favorite celebrity guest, folks!" 🌟 Once it sets up the `config/broadcasting.php` configuration file and the `routes/channels.php` stage for your app's broadcast authorization routes and callbacks, you're one step closer to an interactive Laravel extravaganza!

Laravel plays well with several broadcast drivers right out of the box, including our very own [Laravel Reverb](/docs/{{version}}/reverb), [Pusher Channels](https://pusher.com/channels), [Ably](https://ably.com), and a good old `log` driver for local development and debugging shenanigans. Plus, a `null` driver is included for when you want to test without the noise. Each of these drivers has a config example waiting in the wings of the `config/broadcasting.php` configuration file.

Now, if you're wondering where all this event broadcasting hullabaloo is stored, it's right there in the `config/broadcasting.php` configuration file—just like your secret recipe for coleslaw! 🥕 If that file hasn't made an appearance yet in your app, don't sweat it; it'll pop up when you run the `install:broadcasting` Artisan command.

Next up, [let's get those event broadcasting cogs turning](#quickstart-next-steps)! 🤘🚀

 Alrighty, now that you've flipped the switch on event broadcasting, it's time to dive deeper! Get ready to master [crafting those broadcast events](#defining-broadcast-events) and [tuning in to the event scene](#listening-for-events). If you're rockin' Laravel's React or Vue [starter packs](/docs/{{version}}/starter-kits), you can join the party with Echo's [useEcho hook](#using-react-or-vue).

> 📝 TIP:
> Before hitting the dance floor with your broadcast events, don't forget to get acquainted and hit the town with Laravel's [queue worker](/docs/{{version}}/queues)! All the event broadcasting happens via queued jobs, ensuring your application's response time stays swift as a cheetah, even during the busiest of event-filled nights.

<a name="server-side-installation"></a>
🎧 It's showtime, but first, a quick sound check! Before you start pumping out those events, make sure to hook up with Laravel's [queue worker](/docs/{{version}}/queues) and take it for a spin. That way, when the dance floor gets crowded with all your broadcast events, your application will still move like Jagger! 💃🕺️

 Alrighty, buckle up, coding cowboy! Let's ride this Laravel Event Broadcasting bronco together. First things first, we gotta saddle up our Laravel app and install some trusty steeds, aka packages.

Event broadcasting is like when your old west sheriff sends out a call for help, but in this case, it's your Laravel events that need rescuing. We've got us a server-side broadcasting driver to do the job – think of it as our trusty telegraph operator. This fella will transmit your Laravel events, so Laravel Echo (a slick JavaScript library) can hear 'em clear as a prairie dog whistle right within the browser client.

Now, grab your favorite six-shooter and follow along while we round up each step of the installation process, cowboy style.

<h2 id="reverb">Rodeo Time!</h2>
Let's kick things off at the corral, shall we? Saddle up by following these steps:

1. Install the broadcast driver:
    ```
    composer require laravel/broadcasting
    ```
    This is like buying a trusty steed for your Laravel journey.

2. Run the necessary migrations to set up the new broadcaster:
    ```
    php artisan migrate --package laravel/broadcasting
    ```
    Think of this as breaking in a wild mustang – it'll make your broadcast driver more obedient.

3. Configure broadcasting within your `config/broadcasting.php` file:
    ```
    'connections' => [
        // ...
        'pusher' => [
            'driver' => 'pusher',
            'key' => env('PUSHER_APP_KEY'),
            'secret' => env('PUSHER_APP_SECRET'),
            'app_id' => env('PUSHER_APP_ID'),
            'options' => [
                // ...
            ],
        ],
    ],
    ```
    This is like setting up camp and getting your tent all nice and cozy. It prepares the broadcast driver for battle, so it can send out your events in style.

4. In your event class, add an `$broadcastOn` property:
    ```php
    namespace App\Events;

    use Illuminate\Broadcasting\Channel;
    use Illuminate\Queue\SerializesModels;
    use Illuminate\Broadcasting\PrivateChannel;
    use Illuminate\Foundation\Events\Dispatchable;
    use Illuminate\Broadcasting\InteractsWithSockets;

    class ExampleEvent implements ShouldBroadcast
    {
        use Dispatchable, InteractsWithSockets, SerializesModels;

        public $broadcastOn = new PrivateChannel('channel-name');

        // ...
    }
    ```
    This is like marking your territory with a wagon wheel and a "YOUR WAGON HERE" sign. It tells the broadcast driver which events to watch out for and send on their way.

5. Finally, install Laravel Echo:
    ```
    npm install laravel-echo
    ```
    This is like bringing along a trusty scout to help navigate the frontier of JavaScript land. It'll make receiving events a breeze for your browser client.

6. Configure Laravel Echo within your `app/js/bootstrap.js` file:
    ```javascript
    import Echo from 'laravel-echo';

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: process.env.MIX_PUSHER_APP_KEY,
        cluster: process.env.MIX_PUSHER_APP_CLUSTER,
        forceTLS: true,
    });
    ```
    This is like setting up a lookout post – it ensures your browser client can hear the broadcasts loud and clear.

And there you have it! You've now got yourself a fully-functioning Laravel Event Broadcasting posse. Saddle up and ride off into the sunset, partner!

 Alright, buckle up, folks! Let's dive into the world of Laravel broadcasting, but not without our trusty sidekick - Reverb. This guy's like the Batman to your Bat-signal.

So, when you want to activate Laravel's fancy broadcasting features with Reverb as your event hero, all you gotta do is issue a command to Artisan, our trustworthy AI butler, something along these lines:

```shell
php artisan install:broadcasting --reverb
```

Translated from Geek-speak, this means "Hey Artisan, please install the necessary Composer and NPM packages for Reverb and update my application's .env file with the required variables." In simpler terms, it's like telling a magic genie to sprinkle some stardust on your project!

Just remember, it ain't a superhero movie without a little action. So, sit back, grab some popcorn, and watch as Artisan works his magic! 🍿🎬🚀

 Alrighty, let's get this party started! 🎉

#### Manual Installation - AKA The DIY Laravel Reverb Setup 🛠️

When you're ready to roll up your sleeves and dive into the world of real-time communication with `install:broadcasting` command, you'll be asked to install our shining star, *Laravel Reverb* (think disco ball, not sound system). Now, if you fancy yourself as a bit of a DIY-er, you can always manually install Reverb using the Composer package manager.

```shell
composer require laravel/reverb 🎨 🌈 🎶 (That's a party in code form!)
```

Once the package is all set, you can run Reverb's installation command, which does more than just popping popcorn and serving drinks. It publishes configuration, adds environment variables like Santa's naughty/nice list, and enables event broadcasting in your application—all within a single `php artisan reverb:install` 🎩 🧑‍🤝‍🧑 (Cue the magic!)

For all the juicy details on installing and using Reverb, check out the [Reverb documentation](/docs/{{version}}/reverb).

<a name="pusher-channels"></a>
Now that you've got the basics down, it's time to explore the enchanting world of Pusher Channels! 🌈✨ (More on that next time!)

 ### Pusher Channels: The Magic WebSocket that Keeps Your App Connected! 🎩

Ready to unleash the power of real-time communication in your Laravel app without breaking a sweat? Well then, let's get this party started!

To transform your application into a chatty Cathy using Pusher as its personal messenger, you'll need to conjure up some magic. Here's the spell:

```shell
php artisan install:broadcasting --pusher 🎩💫✨
```

This incantation summons the Artisan command, who shall then demand your Pusher credentials in a ritualistic fashion. Next, it will wave its wand (SDKs), casting the PHP and JavaScript SDKs upon your humble abode, and finally, update your application's `.env` file like a true sorcerer's spellbook:

- Your app will be armed with the PHP SDK to handle server-side magic.
- The JavaScript SDK shall keep the client-side engaged in this real-time chat.

Now, go forth and enjoy your newly connected app! 🥳

 Alrighty, let's get this Pusher party started, shall we? First things first, you'll need to round up the Pusher Channels PHP SDK like it's the hottest ticket in town – grab your composer and fire up a `composer require pusher/pusher-php-server`.

Next up, it's time for some high school romance – exchanging secrets and declaring our love (or in this case, credentials) in the `config/broadcasting.php` file. Don't worry if it feels a bit awkward; it's just the digital version of whispering sweet nothings into each other's ears.

We already have a ready-made date waiting for you – an example Pusher Channels configuration that'll help you quickly share your key, secret, and application ID. But don't worry about the details; we've got your back (or should I say, config file). If you prefer private conversations, you can move this exchange to your application's `.env` file instead.

```ini
PUSHER_APP_ID="my-secret-app-id"
PUSHER_APP_KEY="my-top-secret"
PUSHER_APP_SECRET="shhhh, it's a secret!"
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME="https"
PUSHER_APP_CLUSTER="mt1"
```

In case you're curious, the `config/broadcasting.php` file also allows for some optional extras – additional `options` supported by Channels, like the cluster. You can think of these as plus-ones to your digital dinner party.

Now that we've set the stage, it's time to invite Laravel Echo (aka the life of the party) over to receive those broadcast events on the client-side. And don't forget to give it a warm welcome with a [client-side installation](#client-side-installation)!

<a name="ably"></a> You're almost there, but we still have one more step: set the `BROADCAST_CONNECTION` environment variable to `pusher` in your application's `.env` file. Because who doesn't love a good connection?

```ini
BROADCAST_CONNECTION=pusher
```

And voila! You're ready to rock the house with real-time web notifications like a boss. Now, go forth and conquer (or, you know, just enjoy the party).

 ### Ably: The Event Broadcaster with a Sense of Humor! 🤔🎤

> 📝 **TAKE NOTE:**
> This section is all about integrating Ably in "Pusher Compatibility" mode. But hey, why stick to the basics when you can use Ably's own broadcasting and Echo client that leverages its unique superpowers? For more details on how to rock with Ably's Laravel-approved drivers, give [Ably's Laravel broadcaster docs](https://github.com/ably/laravel-broadcaster) a whirl!

Are you ready to activate Laravel's awesome broadcasting features powered by the funniest event broadcaster in town - [Ably](https://ably.com)? 🥳🚀 To get started, fire up the Artisan command line with the `install:broadcasting --ably` magic wand! This spell will ask for your Ably credentials, conjure up the Ably PHP and JavaScript SDKs, and sprinkle some appropriate env variables into your application's .env file:

```shell
php artisan install:broadcasting --ably
```

**Before you proceed, make sure you enable Pusher protocol support in your Ably application settings. You can find this section nestled within the "Protocol Adapter Settings" area of your Ably app's dashboard.**

<a name="ably-manual-installation"></a>
👩‍🔧 **Manual Installation (for those who like to get their hands dirty):**

If you prefer doing things the old-fashioned way, here's a guide on how to install Ably manually:

1. First, [register an account with Ably](https://www.ably.io/signup) and get your credentials ready.
2. Install the Ably PHP SDK using Composer: `composer require ably/ably-php`
3. Install the Ably JavaScript SDK via npm or yarn: `npm install ably || yarn add ably`
4. Update your application's .env file with your Ably credentials. (Hint: It's like writing a secret love letter to your event broadcaster 💌)
5. Configure the broadcast driver in `config/broadcasting.php`. Replace the default Pusher configuration with this witty Ably-powered version:

```php
'pusher' => [
    'driver' => 'pusher',
    'key' => env('ABLY_KEY'),
    'cluster' => env('ABLY_CLUSTER'),
    'appId' => env('ABLY_APP_ID'),
],
```

 Ahoy there, Laravel pirates! To embark on an Ably-tastic voyage, you'll first need to arm your ship with the Ably PHP SDK, and what better way to do that than a rousing round of Composer Pirate Pak-age Manager? (Yes, we went there.)

```shell
composer require ably/ably-php
```

Next, sail over to your trusty `config/broadcasting.php` configuration file and prepare it for Ably's treasure trove of secrets. An example Ably config is already stowed aboard, just waiting for you to mark its map with your key. Usually, this booty should be safeguarded by the `ABLY_KEY` environment variable:

```ini
ABLY_KEY=shiver-me-timbers-your-ably-key
```

Now that your ship is laden with secrets, it's time to set the `BROADCAST_CONNECTION` environment variable in your application's `.env` file:

```ini
BROADCAST_CONNECTION=ably
```

With Ably on board and your ship properly configured, it's time to prepare for client-side boarding with Laravel Echo! This intrepid stowaway will be the one catching those broadcast events when they leap aboard.

<a name="client-side-installation"></a>
So buckle up, mateys, and get ready to install Laravel Echo like a pro! (Arrr!)

 ## Client-Side Shenanigans 🚀

Welcome, brave adventurer! This section is for those who prefer to keep their Laravel magic on the client side (no capes necessary). Let's dive into the world of npm and package.json, shall we?

<a name="client-reverb"></a>

### Installation Dance 💃️

First things first, make sure you have Node.js installed on your machine—it's like the DJ of our Laravel dance party. If not, head to [nodejs.org](http://nodejs.org) and get yourself a groovy new DJ booth.

Once Node.js is all set up, it's time to install npm (Node Package Manager). You can do this by running the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Now, let's get our Laravel dance floor ready! Install Laravel Mix with:

```bash
npm install --save-dev laravel-mix
```

That command is the secret handshake to gain entry into the Laravel client-side realm. If you see some funky disco lights and a confetti explosion, congrats—you've done it right! 🎉🎊

### Post-Install Shimmy 🕺️

With your dance floor set, let's add some style to our party with the following command:

```bash
npm run dev
```

This will generate a webpack.mix.js file and set up all the necessary tools for compiling and minifying our assets (aka getting them ready to strut their stuff on the dance floor).

Now, let's kick off the festivities by starting the development server:

```bash
npm run watch
```

Your Laravel client-side journey has officially begun! Enjoy your dance, and remember—there's no wrong way to boogie in the world of Laravel. 💃️🕺️🚀

 ### Boombox 3000 (aka Laravel Reverb)

Brace yourself, web development superstars! Meet the Boombox 3000 - aka Laravel Echo - your new bestie in the world of JavaScript! It's like having a personal DJ that spins tunes from your server-side broadcasting driver, all while making subscribing to channels and listening for events as easy as pie.

Wanna get this groovy device up and running? No problemo! Simply unleash the power of our Artisan command `install:broadcasting`, and watch in awe as Reverb and Echo's gear magically materializes within your application, without so much as breaking a sweat.

But for those who like to tweak their gadgets just right, we've got you covered! You can take charge of Laravel Echo's settings by following these steps:

<a name="reverb-client-manual-installation"></a>

**Manual Installation Instructions:**

1. **Sneak Peek**: First things first, get acquainted with the inner workings of Laravel Echo by perusing its source code on GitHub (<https://github.com/laravel/echo>) - we promise it's more fun than a roller-skate disco party!

2. **Choose Your Own Adventure**: Select your broadcast driver from the plethora of options available, including Redis and Pusher, and adjust any necessary configuration settings in your `broadcasting.php` file.

3. **Installation Dance**: With your preferred broadcast driver in tow, perform a few dance moves (optional but highly recommended) to install the Boombox 3000 via npm or yarn:

   ```bash
   npm install laravel-echo
   or
   yarn add laravel-echo
   ```

4. **Final Touches**: After the dance floor shindig, update your JavaScript entry point (usually `app.js`) to import Laravel Echo and configure it with your broadcast driver:

   ```javascript
   import Echo from 'laravel-echo';

   window.Echo = new Echo({
       broadcaster: window.Stomp.over(new SockJS('http://localhost:8000/socket'))
   });
   ```

5. **Party On**: Now that your Boombox 3000 is all set up, you can start broadcasting events and subscribing to channels like a pro! Let's rock this web development world!

 Alrighty, matey! Let's get this Laravel Echo shipshape for your application's frontend. First things first, install the `pusher-js` package like a modern-day pirate would hoist the Jolly Roger:

```shell
npm install --save-dev laravel-echo pusher-js
```

Once you've swabbed the decks clean of any outdated JavaScript, it's time to create a fresh Echo instance in your application's JavaScript. A fine place for that is at the bottom of the `resources/js/bootstrap.js` file, which comes with the Laravel treasure chest:

```js tab=JavaScript (Pirate Style)
Arrr matey! Ye be needing to import Echo and Pusher like so:

import Echo from 'laravel-echo';
window.Pusher = Pusher;

Then, hoist the Jolly Roger with this here window.Echo command:

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    // rest of the code...
});
```

For our React and Vue brethren, here be a simplified version ye can use:

```js tab=React (Pirate Style)
configureEcho({
    broadcaster: "reverb",
    // all the rest of the options...
});
```

```js tab=Vue (Pirate Style)
configureEcho({
    broadcaster: "reverb",
    // all the rest of the options...
});
```

Ye'll be wanting to compile your application's assets next, like a seasoned shipwright would craft a grand galleon:

```shell
npm run build
```

> [!WARNING]
> The Laravel Echo `reverb` broadcaster requires laravel-echo v1.16.0+. Don't be caught dead with an old version, ye scurvy dog!

Hope this helps you navigate these waters, matey! Happy coding, and may your code be smooth as a well-oiled ship's mast! 🦓🏴‍☠️

 Ahoy there, code pirates! Sail the seas of real-time web development with Laravel Echo, a swashbuckling JavaScript library that'll make you feel like a modern day Jack Sparrow. It's your trusty companion for subscribing to channels and catching events hurled by your server-side broadcast driver, without breaking a sweat!

So, how does one acquire this magnificent tool? Simple! With the `install:broadcasting --pusher` Artisan command, you can summon Pusher and Laravel Echo like summoning the kraken to join your pirate ship (your application). But if ye be old-school or have a penchant for manual configuration, we've got ye covered with some good ol' fashioned instructions.

<a name="pusher-client-manual-installation"></a>
Now, hoist the Javascript sail and follow these swabbie-friendly steps to manually install Laravel Echo:

1. First mate, add the Pusher CDN link to your HTML file, like a fresh loaf of bread to ye olde ship's kitchen.

```html
<script src="https://cdn.jsdelivr.net/npm/pusher-js@7.0.1/dist/pusher.min.js"></script>
```

2. Next, initiate Laravel Echo by setting up an instance of the Pusher object and calling `Echo`. Don't forget to set your application ID and key!

```javascript
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});
```

3. Finally, listen for events by using the `channel` method and then subscribing to specific channels with the `listen` method. Keep an eye out for those broadcaster events!

```javascript
const channel = Echo.channel('my-app-channel');
channel.listen('.AppEvent', (e) => {
    console.log(e);
});
```

Arr matey, now you've successfully got Laravel Echo up and running! Now go forth, and let your application broadcast events like a pirate shouting "Yo ho ho!" across the seven seas!

 Alrighty then! Let's get this Laravel Echo party started, shall we? First things first, you need to install the `laravel-echo` and `pusher-js` packages. Think of them as your plus ones at a wedding - they're gonna help make the connections smoother (WebSocket subscriptions, channels, and messages).

```shell
npm install --save-dev laravel-echo pusher-js
```

Once the duo has arrived, it's time to create a fresh Echo instance for your application. Pop open your `resources/js/bootstrap.js` file and let's do the dance:

```js tab=JavaScript Dance
import Echo from 'laravel-echo';

// Don't forget to invite Pusher, he'll be our host
import Pusher from 'pusher-js';
window.Pusher = Pusher;

// Now, let's introduce Echo to the crowd
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY, // Secret handshake
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER, // Ballroom or disco?
    forceTLS: true // Security is important, even at a dance
});
```

For our React and Vue friends, here's the choreography:

```js tab=React
import { configureEcho } from "@laravel/echo-react";

// Let's get this party started
configureEcho({
    broadcaster: "pusher",
});
```

```js tab=Vue
import { configureEcho } from "@laravel/echo-vue";

// Time to dance, Echo!
configureEcho({
    broadcaster: "pusher",
});
```

Next up, we need to set the Pusher environment variables in your application's `.env` file. It's like giving them a plus one for the night. If they're not already there, make them an RSVP!

```ini
PUSHER_APP_ID="your-pusher-app-id"
PUSHER_APP_KEY="your-pusher-key"
PUSHER_APP_SECRET="your-pusher-secret"
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME="https"
PUSHER_APP_CLUSTER="mt1"

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

Once everything is all danced up, it's time to compile your application's assets. Grab your dancing shoes:

```shell
npm run build
```

> [!NOTE]
> Need a dance lesson on compiling your application's JavaScript assets? Swing by the docs at [Vite](/docs/{{version}}/vite).

 Ahoy there, brave Laravel coder! If you've already tamed the wild beasts of Pusher Channels and have a ready-to-rumble client instance that's just itching to get Echo-active, then buckle up, because we're about to embark on an adventure filled with code and camaraderie!

First off, let me introduce you to the enchanting world of `laravel-echo` and `pusher-js`. It's like a modern-day Sherlock and Watson team-up – one can't function without the other.

Now, here comes the magic trick that will bring your pre-configured Pusher Channels client into Echo's realm:

```js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js'; // We're off to a rip-roaring start with this dashing duo!

const options = {
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY, // Phew! The key to the treasure chest unlocked!
    clientOptions: { /* Add any custom options for your client instance here! */ }
};

// Prepare the potion that will summon our pre-configured Pusher Channels client
const preconfiguredClient = new Pusher(options.key, options);

window.Echo = new Echo({
    ...options, // We're combining forces with Laravel!
    client: preconfiguredClient // And here it is, the star of our show!
});
```

With this spell cast, your tamed Pusher Channels client will now dance to Echo's tune – a truly magnificent sight to behold! Just remember that if you've added any custom options for your client instance, make sure they're included in the `clientOptions` object before creating the `preconfiguredClient`.

Happy coding, dear adventurer! May your Laravel journey be filled with laughter, learning, and lots of echo-tastic real-time fun! 🎉🚀

 ### Ably (the Superhero of Real-Time Communication)! 🦸‍♂️

> 📝 **Note:** The info below covers using Ably in "Pusher Compatibility Mode." However, the Ably squad encourages and supports a broadcaster and Echo client that harnesses the unique powers offered by Ably. For more details on wielding Ably's Laravel broadcaster, check out their [superhero manual](https://github.com/ably/laravel-broadcaster)!

[Laravel Echo](https://github.com/laravel/echo) is a JavaScript sidekick, making it as easy as pie to join channels and listen for events blasted by your server-side broadcasting driver. 🍰📣

When you summon broadcasting support using the `install:broadcasting --ably` Artisan spell, Ably and Echo's magic scaffolding and configuration will be conjured within your application without a hitch. But if you fancy manual configuration of Laravel Echo, we've got your back! 🌈

<a name="ably-client-manual-installation"></a>
### Manual Installation of Ably's Crime-Fighting Client 🦹‍♂️

If you prefer to configure Laravel Echo yourself, follow these simple steps:

1. Register the Ably Event Broadcaster in your `config/broadcasting.php` file:

```php
'abelly' => [
    'class' => AblyEventBroadcaster::class,
    'options' => [
        // Configuration options go here!
    ],
],
```
2. Set the event broadcast driver to use Ably in your `.env` file:

```bash
BROADCAST_DRIVER=abelly
```
3. Configure your Ably client by providing your API key and other details in the `options` array of your new broadcaster class:

```php
namespace App\Broadcasting;

use Illuminate\Broadcasting\AbstractChannelResolver;
use Illuminate\Broadcasting\PrivateChannel;

class AblyEventBroadcaster extends AbstractChannelResolver
{
    protected $options = [
        // Your API key and other Ably options go here!
    ];
}
```
4. Finally, don't forget to install the Ably JavaScript SDK in your frontend project:

```sh
npm install --save ably
```

And that's a wrap! Now you can join forces with Laravel Echo and Ably, battling real-time communication crimes together. 💪🌟

 Alright, buckle up, web-whizzes! Let's dive into the thrilling world of Laravel Echo, the superhero that'll make your frontend shine brighter than a neon sign at a disco!

First things first, let's get our hands dirty with some command line sorcery:

```shell
npm install --save-dev laravel-echo pusher-js
```

Now, before you can summon Laravel Echo, there's one more step - enable Pusher protocol support in your Ably application settings. Think of it like adding superpowers to our web hero! You can activate this feature within the "Protocol Adapter Settings" section of your Ably application's control panel.

Once Echo is installed, it's time to create a fresh instance, and where better than in `resources/js/bootstrap.js`? (Think of it as Echo's secret lair!)

```js tab=JavaScript
import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

// Here's where the magic happens!
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_ABLY_PUBLIC_KEY,
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
});
```

For our React and Vue friends, we've got you covered!

```js tab=React
import { configureEcho } from "@laravel/echo-react";

configureEcho({
    broadcaster: "ably",
    // ... (All the rest of the configuration options!)
});
```

```js tab=Vue
import { configureEcho } from "@laravel/echo-vue";

configureEcho({
    broadcaster: "ably",
    // ... (All the rest of the configuration options!)
});
```

You'll find our Ably Echo configuration refers to a `VITE_ABLY_PUBLIC_KEY` environment variable. This variable holds your Ably public key, which is like the secret ingredient in our web superhero's potion! It's the part of your Ably key that comes before the `:` character.

After you've tweaked the Echo configuration to suit your needs, it's time to compile your application's assets:

```shell
npm run dev
```

> [!NOTE]
> If you need more info on compiling your JavaScript assets, our friends at Vite have some fantastic documentation that can help! (Seriously, they know their stuff!)

 Oh, the sweet symphony of Laravel's event broadcasting! It's like inviting your JavaScript app to a swanky soiree hosted by your server-side Laravel events, all while using a driver-based approach to master the art of WebSockets. Currently, we're serving up three main acts: Laravel Reverb, Pusher Channels, and Ably - each bringing their unique charm to the event-filled dance floor.

Wanna join in on the fun? Just grab yourself a front row seat with the [Laravel Echo](#client-side-installation) JavaScript package, no VIP pass required!

Our events perform their grand entrances on "channels," which can be either public or private. Anyone off the street can show up to a public channel, but if you want to mingle in a private one, you'll need to have your authentication and authorization credentials ready to flash at the door.

<a name="using-example-application"></a>
Now, let's get this party started with our example application! 🥳🎉🎉

 Alrighty then, buckle up, because we're about to embark on a Laravel adventure, where coding meets comedy! Imagine running an e-commerce store that's as zany as a clown car on roller skates. Let's call it "LaughterLoft" – the only place where you can buy a novelty sock subscription and a unicorn frappuccino maker (we won't question your choices).

Now, imagine one of our craziest customers, who just ordered a dozen clown shoes and a barrel of jester hats. As soon as we update their order status from "Processing" to "Shipped," an `OrderShipmentStatusUpdated` event will be dispatched like a party popper going off in the back room:

```php
use LaughterLoft\Events\OrderShipmentStatusUpdated;

OrderShipmentStatusUpdated::dispatch($order);
```

Now, let's talk about the "ShouldBroadcast" interface – it's like the VIP list for events that get to party in real-time with listeners. But instead of being guarded by doormen in tuxedos, our event listeners will be watching for their turn to grab a microphone and dance on the bar (or you know, update the order status). Here's how an event can become a broadcasting superstar:

```php
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class OrderShipmentStatusUpdated implements ShouldBroadcast {
    // Your event class will go here
}
```

And just like that, our event is now the life of the party, keeping everyone (including your customers) in the loop about their orders. So grab a bag of popcorn and enjoy the show!

 Alright, buckle up, Laravel fans! Let's dive into the world of real-time order updates without needing to refresh your browser more times than a '90s kid rewinding a VHS tape.

To accomplish this, we need our `OrderShipmentStatusUpdated` event to sport the trendy `ShouldBroadcast` interface, which is like telling Laravel, "Hey buddy, when this event fires up, start broadcasting!"

```php
<?php

namespace App\Events;

use App\Models\Order;
// ... (snipped for brevity)
class OrderShipmentStatusUpdated implements ShouldBroadcast
{
    // ... (snipped for brevity)
}
```

Now, the `ShouldBroadcast` interface demands our event to have a `broadcastOn` method. This method is like the DJ of the event channel, deciding which channels our party should play on. Since we only want the order creator to receive status updates, we'll create a private channel tied specifically to each order:

```php
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\PrivateChannel;

/**
 * Get the channel the event should broadcast on.
 */
public function broadcastOn(): Channel
{
    return new PrivateChannel('orders.'.$this->order->id);
}
```

If you're planning to throw parties on multiple channels, you can return an array instead:

```php
use Illuminate\Broadcasting\PrivateChannel;

/**
 * Get the channels the event should broadcast on.
 *
 * @return array<int, \Illuminate\Broadcasting\Channel>
 */
public function broadcastOn(): array
{
    return [
        new PrivateChannel('orders.'.$this->order->id),
        // ... (more channels if you're a party animal)
    ];
}
```

Now, let's get this show on the road and enjoy some freshly brewed real-time order updates! 🎉🍻

 Alrighty then! Let's dive into the world of channel authorization, shall we? Remember, just like your eccentric great uncle who insists on wearing a top hat to the grocery store, users must be properly invited to join private channels in our Laravel application. We do this by setting our house rules, or channel authorization rules, in the `routes/channels.php` file - think of it as the bouncer at the coolest party in town.

Now, imagine you're running a super-secret speakeasy for orders (the drinks are fantastic, I hear), and you only want your order creators to get their Prohibition-era gin fix. In this case, our PHP script needs to verify that the user trying to sneak a peek at the `orders.1` channel is indeed the one who originally called for the order:

```php
Use yer' old fashioned models of Order and User, pardner.

Broadcast::channel('orders.{orderId}', function (User $user, int $orderId) {
    If this here user is the same one who put in the original order, let 'em listen.
    Return $user->id === Order::findOrNew($orderId)->user_id;
});
```

The `channel` method takes two parameters: the channel name and a callback that hollers "yes" or "no" to determine if the user is welcome at the party. In this example, we're using the `{orderId}` placeholder to signify that the "ID" part of the channel name is wild and free like a coyote on the prairie.

Now go forth and ensure only the right people are listening to your event broadcasts! And remember: it's always cocktail hour somewhere in Laravel land. 🍸✨

 Alrighty, let's get our geek on and dive into the world of Laravel event broadcasting! 🎉

First things first, you've got your PHP app all set up and ready to rock. But what about your JavaScript sidekick? Well, fear not! We can bring it into the party using none other than the superheroic [Laravel Echo](#client-side-installation). This badass tool comes with built-in React and Vue hooks, making it a cinch to get started. 🦸‍♂️

Now, here's where things start to get interesting: by default, all the event's public properties will magically appear on the broadcast event, like if we conjured them up with a wand! 🧙‍♂️

```js tab=React-The-Magical
Importing the Echo sorcery from @laravel/echo-react was as simple as a "Harry Potter" spell. Now, let's listen for our order (we'll call him "Dumbledore") with this incantation:

useEcho(
    `orders.${orderId}`, // This is like giving Dumbledore his unique Sorting Hat number.
    "OrderShipmentStatusUpdated", // We're asking for the latest news about Dumbledore's delivery status.
    (e) => {
        console.log(e.order); // Print out Dumbledore's current status.
    },
);
```

```vue tab=Vue-The-Spellslinger
In the realm of Vue, we summon our Echo by importing the echo spell from @laravel/echo-vue:

<script setup lang="ts">
import { useEcho } from "@laravel/echo-vue"; // Simple as "Abracadabra"!

useEcho(
    `orders.${orderId}`, // We're casting a spell to focus on our specific order (Dumbledore).
    "OrderShipmentStatusUpdated", // We seek the answer about Dumbledore's delivery status.
    (e) => {
        console.log(e.order); // Reveal Dumbledore's current status to us mortals!
    },
);
</script>
```

Now that you've got your JavaScript wizardry in place, sit back and let the spells fly as Laravel does its magic! 💫🌟🚀

 Alright, let's get this party started! In the world of Laravel, it's not enough to just throw an event like some commoner at a medieval feast - you gotta let the system know it's a broadcast-worthy shindig. And how do we do that? By making your event class swear allegiance to the illustrious `ShouldBroadcast` interface, of course!

This noble knight is already invited to all event classes thrown by the royal court (aka framework), so it's just a matter of inviting it to any of your own events. Once it accepts the invitation, it demands you to present it with the `broadcastOn()` function - a grand ball where it dances with channels!

The `broadcastOn()` function should return an array or a single instance of channels that are eager to host this event. These channels could be knights in shining armor (`Channel`), secretive spies (`PrivateChannel`), or town criers announcing the arrival of new citizens (`PresenceChannel`). Each channel must be properly introduced and vouched for by `Channel`, `PrivateChannel`, or `PresenceChannel`.

Public channels, represented by `Channel`, are like the town square where anyone can gather. Private channels (`PrivateChannel`) and presence channels (`PresenceChannel`) require more exclusive invitations - [channel authorization](#authorizing-channels).

```php
<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class ServerCreated implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        public User $user,
    ) {}

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('user.'.$this->user->id),
        ];
    }
}
```

With the `ShouldBroadcast` interface in your court, all that's left to do is fire the event as you usually would (check out our guide on firing events here). Once the event is ignited, a queued job will chivalrously broadcast the event using your specified broadcast driver.

<a name="broadcast-name"></a>

 ### Channel Surfin' Safari!

In the default settings, Laravel deejays your event with its snazziest class name. But if you're feeling a tad fancy (and let's face it, who isn't?), you can customize the broadcast handle by declaring a `broadcastAs` method on your event:

```php
/**
 * The event's disco floor, err, broadcast name.
 */
public function broadcastAs(): string
{
    return 'party.time'; // No need to call 911, we're not causing a ruckus, just having a dance-off!
}
```

If you've decided to get all funky with your custom broadcast name using the `broadcastAs` method, remember to rock the house and register your listener with a leading `.` character. This will keep Echo from adding your application's namespaced suit and tie to the event:

```javascript
.groove('.party.time', function (e) {
    // ...
});
```

<a name="broadcast-data"></a>
Now, isn't that groovy? Just like in the '60s, but with less flower power and more code! 🌻🤘💻

 ### Event Spectaculars!

You know how in a magic show, the magician makes things disappear and reappear with a wave of their wand? Well, Laravel's broadcast events are like that, but for data. When you conjure an event, all its glorious public properties vanish into thin air (actually, they get serialized) and reemerge as the event's payload—a mystical data packet perfect for your JavaScript sidekick to decipher.

So if your event is akin to Patrick Stewart (public property `$user` with an Eloquent model), its broadcast payload would take on a form reminiscent of a Starfleet report:

```json
{
    "user": {
        "id": 1,
        "name": "Captain Picard"
        ...
    }
}
```

But if you're the kind of wizard who prefers having total command over your data packets, Laravel lets you weave a custom broadcast spell with the `broadcastWith` method. This potent incantation should return an array of data to be transfigured into the event payload:

```php
/**
 * Cast this event to an outgoing transmission.
 *
 * @return array<string, mixed>
 */
public function broadcastWith(): array
{
    return ['id' => $this->user->id];
}
```

Remember, with great power comes the responsibility to craft magical data payloads for all your web applications!

 ### The Great Broadcast Spectacle! 🎬📣

By golly, every broadcast event in Laravel lands on the main stage of your `queue.php` configuration file's default queue connection like a well-rehearsed troupe! But if you fancy a change or a new act, you can customize the backstage pass and the spotlight name for your event by employing some magic attributes in your event class:

```php
Use your imagination, dear reader, as we cast a spell with PHP attributes!

#[Cast 'Redis'] // Your connection for this event (don't forget to say it like Gandalf)
#[Curtains 'default'] // The curtain call, where the action unfolds
class ServerCreated implements ShouldBroadcast {
    // ... A dramatic entrance, no doubt
}
```

Or, if you prefer to write your own playbill, define a `broadcastQueue` method on your event:

```php
/**
 * The name of the queue where the show must go on.
 */
public function broadcastQueue(): string {
    return 'default'; // A fitting title for our act tonight
}
```

Now, imagine if you want to skip the line and perform your event immediately without waiting for the curtain call, you can join the `ShouldBroadcastNow` ensemble instead of `ShouldBroadcast`:

```php
<?php

namespace App\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class OrderShipmentStatusUpdated implements ShouldBroadcastNow {
    // ... A sudden, unexpected performance right here and now!
}
```

<a name="broadcast-conditions"></a>
That's the lowdown on customizing your broadcast queue. Remember, a well-timed entrance is key to a successful show! 🎬🌟

 ### Shh! Secret Broadcast Club 🤫

Ever wanted to throw a party, but only if the conditions are *just* right? Well, my friend, Laravel's got you covered! By becoming a member of our exclusive `Broadcast Conditions` club, you can now decide who gets to hear about your events and when. 🎤

To apply for membership, simply add a `broadcastWhen` method to your event class:

```php
/**
 * Should we let 'em know or keep it on the low?
 */
public function shouldSpillTheBeans(): bool
{
    if ($this->order->value > 100) {
        // Party time! Let's broadcast the event. 🎉
        return true;
    } else {
        // Chill vibes, let's keep this one on the DL. 🤫
        return false;
    }
}
```

<a name="broadcasting-and-database-transactions"></a>
And remember, when you're throwing a party, always consider the database transactions! (Cue dramatic music) 🎶

By keeping your broadcasts within a single transaction, you can ensure that either everything gets announced or nothing does. Because nobody likes half-invited guests, am I right? 🤔

So there you have it – join our secret `Broadcast Conditions` club today and become the host with the most! 🎊🎉🥳

 Alrighty then! Let's dive into the whimsical world of Laravel broadcast events and database transactions, shall we? Buckle up, because this is going to be a wild ride!

First off, imagine you're in the middle of a high-stakes poker game with all your models and database records. You've made some bold moves, but the dealer (the database) hasn't shown everyone their cards yet – that's right, we're talking about database transactions here. Now, if you go ahead and dispatch a broadcast event during this tense moment, the house (queue) might process your bet before the dealer has officially revealed the cards (committed the transaction). Oopsie daisy! That means your freshly dealt hands (updates to models or records) might not be visible to all players yet. Worst of all, if your event relies on those hidden cards, you're in for some unexpected errors when the house calls your hand (processes the job).

But don't fret! If your house rules (queue connection) state that after-game drinks (`after_commit`) are off the menu, fear not! Simply implement the "I'm here for the long haul and I demand my drinks" interface (`ShouldDispatchAfterCommit`) on your event class.

```php
<?php

namespace App\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Events\ShouldDispatchAfterCommit;
use Illuminate\Queue\SerializesModels;

class ServerCreated implements ShouldBroadcast, ShouldDispatchAfterCommit
{
    use SerializesModels;
}
```

Now, with this fancy new suit (implemented interface), you can ensure that your event will only be dispatched once the game has ended and all hidden cards have been revealed. Just remember to brush up on queued jobs and database transactions for more tips and tricks on how to master this poker game we call Laravel!

[P.S.] For those who are new to town, you can learn more about navigating these issues by checking out the documentation regarding [queued jobs and database transactions](/docs/{{version}}/queues#jobs-and-database-transactions).

 Ahoy there, Captain! Let's set sail through the seas of Laravel broadcasting, shall we? First off, private channels are a bit like exclusive clubs – they won't let just anyone in. To ensure your currently authenticated user has access, we need to give them the VIP pass by making an HTTP request to your Laravel app, armed with the channel name.

Our application will then act as the bouncer, deciding whether our user is allowed into that specific channel. Fret not when using [Laravel Echo](#client-side-installation), for it'll automatically make the required bouncer calls to authorize private channel subscriptions!

Now, when broadcasting is installed in Laravel, it tries to register the `/broadcasting/auth` route like a well-dressed gentleman at a ball, introducing itself to handle those crucial authorization requests. However, if our Laravel app's social skills are a bit rusty and fails to make new friends (register the routes), we can always introduce them manually in the `app.php` file located deep within the heart of our application's bootstrap.

```php
->withRouting(
    web: __DIR__.'/../routes/web.php',
    channels: __DIR__.'/../routes/channels.php',
    health: '/up',
)
```

And there you have it, matey! With these steps, your Laravel app will be the most exclusive club on the web (or at least on your server). Cheers to a smooth broadcasting journey ahead! 🍻

 Alrighty, let's get our geek on and talk about defining authorization callbacks in Laravel Land! 🤓

First things first, we need to pen the secret sauce that decides if our current user is allowed to join a specific dance floor (channel, in more formal terms). This magical incantation happens in the `routes/channels.php` file, which was birthed by the `install:broadcasting` Artisan command. Here, you can use the `Broadcast::channel` method to register your VIP list bouncers (channel authorization callbacks):

```php
use App\Models\User;

Broadcast::channel('orders.{orderId}', function (User $user, int $orderId) {
    if ($user->id === Order::findOrFail($orderId)->user_id) {
        // They're on the list! Let 'em in.
        return true;
    } else {
        // Sorry, pal. This ain't your party.
        return false;
    }
});
```

The `channel` method takes two gifts: the channel name and a callback that returns either a truth or a fib. It's like a bouncer asking "Got ID?" - if it checks out, they're in! If not, they're sent packing.

Now, our bouncers receive the current authenticated user as their first date (arguably the best arg) and any wildcard paramaters as subsequent arguments. In this example, we're using the `{orderId}` placeholder to denote that the "ID" part of the channel name is a wildcard character - you know, like those funky asterisks in old movies.

Want a peek at your application's broadcast authorization callbacks? Just run the `channel:list` Artisan command:

```shell
php artisan channel:list
```

And there you have it! Now, you're a master of guarding your channels with style and panache. 🎩✨

 Alrighty then! Let's dive into the thrilling world of Authorization Callback Model Binding, where Laravel routes channel their inner superhero and transform from mundane strings to mighty models! 🦸‍♂️

Imagine a scenario where you're not just dealing with numbers or plain text order IDs but actual `Order` superheroes swooping in to save the day! 🥳

```php
use App\Models\Order;
use App\Models\User;

Listen up, channel! Here comes the action:

Broadcast::channel('orders.{order}', function (User $user, Order $order) {
    return $user->id === $order->user_id;
});
```

> [🚨Attention]
> Channel model binding isn't as slick as its HTTP counterpart when it comes to automatic scoping. It can't perform those cool, implicit model binding tricks. But hey, who needs superpowers when you have a unique primary key, right? 🤷‍♂️

<a name="authorization-callback-authentication"></a>
Now that's what I call a channel with some flair! 😎

 Alrighty, let's dive into the world of Authorization Callback Authentication - where your Laravel user gets a fancy VIP pass to join the broadcast party! 🎉

First things first: our private and presence broadcast channels are like the bouncers at an exclusive club, checking if your user is already on the guest list (a.k.a. authenticated via your application's default authentication guard). If they're a no-show, these bouncers politely refuse them entry and skip the authorization callback altogether - no hard feelings! 🤝

But what if you want to bring in some VIPs who need special treatment? No worries, you can assign multiple, custom guards for those high-priority requests:

```php
Broadcast::channel('channel', function () {
    // ...
}, ['guards' => ['web', 'admin']]);
```

In this example, we're giving our bouncers a list of VIP passes - 'web' and 'admin'. These guards will authenticate incoming requests if they're required. Just like that, you've got yourself a velvet rope event for your Laravel app! 🌹🚀

 Alright, let's embark on a whirlwind tour of Laravel's broadcasting universe! If your app's got more channels than an old-timey radio station, you might find your `routes/channels.php` file looking like the Yellow Pages. Time to ditch those cumbersome closure authorizers and jump on board the Channel Class Express!

To create a new channel class, fire up the good ol' Artisan command line conductor (you know, like Captain Picard gives orders) with this magic incantation:

```shell
php artisan make:channel OrderChannel
```

Now that your channel is born, register it in your `routes/channels.php` file with all the pomp and ceremony of a royal decree:

```php
use App\Broadcasting\OrderChannel;

Broadcast::channel('orders.{order}', OrderChannel::class);
```

Finally, it's time to give your channel class a swanky tuxedo and a dance card - the authorization logic for the channel will go in the class' `join` method. This method is the belle of the ball where all the logic that was previously tangled up in your channel authorization closure can now twirl and shine. Plus, you get to take advantage of channel model binding!

```php
<?php

namespace App\Broadcasting;

use App\Models\Order;
use App\Models\User;

class OrderChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct() {}

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(User $user, Order $order): array|bool
    {
        return $user->id === $order->user_id;
    }
}
```

And just like that, your channel class is now a first-class citizen in Laravel's service container - no need to bow or curtsy! You may type-hint any dependencies required by your channel in its constructor. Just remember, it's always the right time to party with Laravel! 🎉🎈🥳

 ## Party Time, Champ! (Or, How to Throw a Digital Bash)

Alrighty, partner! First things first: you gotta create an event and slap that fancy `ShouldBroadcast` interface on it. Once you've done that, it's time to invite all your pals over for the digital soiree!

To get the party started, simply use the event's dispatch method. This is like sending out those Facebook Event invites but in a more elegant, Laravel way:

```php
use App\Events\OrderShipmentStatusUpdated;

// That's right, we're calling 'OrderShipmentStatusUpdated:dispatch'... not 'RSVP:party'!
OrderShipmentStatusUpdated::dispatch($order);
```

Now here's the deal: when you send out that invite, the event dispatcher gets all nosy and checks if your event comes with that `ShouldBroadcast` tuxedo. If it does, *poof* – your event gets queued up like a hot DJ in line for the main stage! 🕺🚀

 ### Sneaky Peeky Broadcasting 🔍

When crafting an application that dabbles in event broadcasting, you might find yourself in a pickle where you need to blast an event to all subscribers on a specific channel, but *definitely* not the current user. No worries! You can pull this off using the `broadcast` helper and the `toOthers` method:

```php
use App\Events\OrderShipmentStatusUpdated;

broadcast(new OrderShipmentStatusUpdated($update))->toOthers();
```

Let's picture a scenario, shall we? Imagine a task management app where users can create new tasks by simply typing in a task name. To add a task, your application might send a request to the `/task` URL, which then blasts out the creation of the task and serves up a JSON representation of the new task. Now, when your JavaScript app receives this delightful treat from the endpoint, it may go ahead and stuff the freshly baked task right into its task list like so:

```js
axios.post('/task', task)
    .then((response) => {
        this.tasks.push(response.data);
    });
```

But, wait a minute! Remember that we're also blasting out the creation of the task as an event. If your JavaScript app is also listening in on the party to add tasks to its task list, you'll end up with double trouble: one task from the endpoint and another from the broadcast. Fret not, for you can solve this by using the `toOthers` method to instruct the broadcaster to keep quiet when it comes to addressing the current user.

> 🚨 CAUTION!
> Your event must be a friendly neighborhood member of the `Illuminate\Broadcasting\InteractsWithSockets` trait family in order to partake in the `toOthers` method's shenanigans.

 Alright, let's dive into the jolly world of Laravel Echo! When you create a Laravel Echo instance, it's like giving your connection a unique dance partner ID (or socket ID if you prefer). If you're using the popular disco (Axios), this dance partner gets tagged on every dance move (outgoing request) with its socket ID as an `X-Socket-ID` wristband.

Now, when you do the 'toOthers' dance move, Laravel will peek at that wristband, realize it's not time to cha-cha with itself, and politely ask the broadcaster to sit this one out for connections with that very socket ID.

But what if you're not feeling the disco beat? No worries! You can DIY your JavaScript application's outfit (configuration) to send the `X-Socket-ID` wristband with every dance move. Just grab the socket ID with a quick call to the `Echo.socketId()` style check:

```js
let socketyMcDance = Echo.socketId();
```

Now, grab your partner and hit the dance floor! But remember, always be aware of who's on the dance floor with you (or in this case, who's listening to your broadcasts). Happy dancing! 💃🏼🕺🏻

 ### Customizing Your Broadcasting Relationships (AKA, The Poly-Broadcaster!)

Ah, the joys of modern programming! When your application becomes a chatterbox with multiple broadcast connections, and you fancy broadcasting an event using a different broadcaster than your default BFF, here's how to play matchmaker.

```php
Use the power of OrderShipmentStatusUpdated (no, not the dance move), and tell it to hook up with 'pusher' via:

broadcast(new OrderShipmentStatusUpdated($update))->via('pusher');
```

Or, if you're feeling all grown-up, you can specify the event's broadcast connection at birth by calling `broadcastVia` within the event constructor. But remember, always make sure your event class is wearing the `InteractsWithBroadcasting` trait like a fancy ball gown (yes, we're still talking about code).

```php
namespace App\Events;

use Illuminate\Broadcasting\Channel;
// ... and so on, imagine a fashion show catwalk here...
class OrderShipmentStatusUpdated implements ShouldBroadcast {
    use InteractsWithBroadcasting; // Wear your ball gown!

    public function __construct() {
        $this->broadcastVia('pusher'); // Choose your partner wisely...
    }
}
```

<a name="anonymous-events"></a>

### Anonymous Events: The Cinderella of the Ball (Kinda)

Want to send out invitations without revealing who you are? Anonymous events let you do just that! Here's how to throw a mystery party.

```php
use Illuminate\Broadcasting\PrivateChannel;

$anonymousEvent = new PrivateChannel('some-channel'); // Create your secret channel
$anonymousEvent->broadcastAs('AnonymousOrderStatusUpdate'); // Choose your alias
```

Now, anytime you want to send an anonymous message, just call the event:

```php
event(new AnonymousOrderStatusUpdate);
```

 Alrighty, let's dive into the world of Laravel broadcasting, where events are as exciting as a Saturday night tango! 🎉🕺

When you're feeling lazy (and who isn't?) but still need to throw an event, the `Broadcast` facade is your bestie. It allows you to toss out "anonymous events" like a party animal:

```php
Broadcast::on('orders.'.$order->id)->send();
```

This will spill the beans about this particular event:

```json
{
    "event": "AnonymousEvent",
    "data": "[]",
    "channel": "orders.1"
}
```

But if you want to give your event a snazzy name and some juicy data, the `as` and `with` methods are at your service:

```php
Broadcast::on('orders.'.$order->id)
    ->as('OrderPlaced')
    ->with($order)
    ->send();
```

Now your event will be as fancy as a Hollywood premiere:

```json
{
    "event": "OrderPlaced",
    "data": "{ id: 1, total: 100 }",
    "channel": "orders.1"
}
```

If you're feeling secretive or just love a good drama, you can broadcast your event on private or presence channels using the `private` and `presence` methods:

```php
Broadcast::private('orders.'.$order->id)->send();
Broadcast::presence('channels.'.$channel->id)->send();
```

When you let off an anonymous event with the `send` method, it hops into your application's queue to be processed. But if you need a quickie (who doesn't?), use the `sendNow` method:

```php
Broadcast::on('orders.'.$order->id)->sendNow();
```

Finally, if you want to share your event with everyone except the currently authenticated user, just use the `toOthers` method:

```php
Broadcast::on('orders.'.$order->id)
    ->toOthers()
    ->send();
```

And there you have it! Now go forth and broadcast like a pro – or a party animal. 🦁🎉

 ### Saving Your Bacon (or Broadcasts)! 🥓

In the wild world of your Laravel app, when the queue server goes AWOL or Mr. Laravel stumbles upon a broadcasting event error, it throws an exception that, more often than not, leaves your end user staring at a big ol' application error. Since event broadcasting is usually just a side dish to your application's main course, you can keep these exceptions from ruining the dinner party by sprinkling some `ShouldRescue` magic on your events!

Events that get their rescue on with `ShouldRescue`, will happily utilize Laravel's [rescue helper function](/docs/{{version}}/helpers#method-rescue) during broadcasting attempts. This helper is like the bouncer at a club, catching any exceptions that might try to gatecrash your app, reporting them to your exception handler (the VIP list manager), logs them away for later reference, and lets the party continue without interrupting the user's jive!

```php
<?php

namespace App\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldRescue;

class ServerCreated implements ShouldBroadcast, ShouldRescue
{
    // ...
}
```

<a name="receiving-broadcasts"></a>
Now your users can enjoy their main course without the drama of unexpected exceptions! 🎉🥳🍽️

 Alright, buckle up, space cowboy! 🚀 In this thrilling chapter of our Laravel adventure, we're diving headfirst into the world of broadcast events. But first, let's set the mood with a little cosmic disco music - because who doesn't love dancing through the stars while coding?

<a name="listening-for-events"></a>
### Listening for Events 👂🌠

To receive broadcast events, we need to create an Event Listener. It's like having your own personal party planner that ensures everyone gets the right invitation at the right time! Here's how:

```php
// app/Listeners/ExampleListener.php
namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\YourEvent;

class ExampleListener implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  YourEvent  $event
     * @return void
     */
    public function handle(YourEvent $event)
    {
        // Handle your broadcast event here...
    }
}
```

Now that we've got our event listener all dressed up and ready to party, let's register it so Laravel knows who to invite! 🎫

<a name="registering-the-listener"></a>
### Registering the Listener 📝💌

Registering an Event Listener is as easy as adding it to a provider or event service provider. For those of you who aren't into formal invitations, think of providers like the coolest club promoters in town – they know everyone who's anyone! 🕺🎩

```php
// app/Providers/EventServiceProvider.php
namespace App\Providers;

use Illuminate\Support\Facades\Bus;
use App\Listeners\ExampleListener;

class EventServiceProvider extends ServiceProvider
{
    /**
     * Register any events for the application.
     *
     * @return void
     */
    public function boot()
    {
        Bus::listen(YourEvent::class, ExampleListener::class);
    }
}
```

And there you have it! Now when a broadcast event is fired, our trusty Event Listener will be there to catch it and handle the fun. Happy coding, space cowboy, and remember - always wear sunscreen... or sunshade for your event listeners! 🌞🚀

 ### Tune into the Spectacle! 🎉🎶

Once you've got Laravel Echo installed and up and running like a well-oiled jukebox (#client-side-installation), it's time to party with events broadcast straight from your Laravel shindig! First, use the `channel` method to grab a microphone and tune in to a specific channel, then call the `hearYa` method to catch wind of a specific event:

```js
Echo.micCheck(`orders.${this.order.id}`)
    .hearYa('OrderShipmentStatusUpdated', (e) => {
        console.log(e.order.name); // Who's the lucky customer? 🤔
    });
```

If you prefer your events behind closed doors, use the `private` method instead. You can keep adding listeners to the same channel like a DJ spinning multiple tracks:

```js
Echo.secretSpeakeasy(`orders.${this.order.id}`)
    .hearYa(/* ... */)
    .hearYa(/* ... */)
    .hearYa(/* ... */); // Let's keep the party going! 💃🕺
```

<a name="stop-listening-for-events"></a>
Now, if you ever feel like you've had enough of these events (it can happen to the best of us), simply use the `unsubscribe` method to quietly slip away:

```js
Echo.micCheck(`orders.${this.order.id}`).unsub(); // Time to hit the sack! 🛏️💤
```

 Alright, let's get this party (sort of) started! If you find yourself tired of the endless chatter about Order Shipment Status Updates and are ready to take a break without pulling a Michael Scott and ghosting the office, we've got your back. Here's how to politely excuse yourself from the conversation without causing any awkward silence:

```js
Echo.private(`orders.${this.order.id}`) // Think of this as entering the break room where all the gossip happens
    .stopListening('OrderShipmentStatusUpdated'); // Raise your hand and say, "Excuse me, I need to step out for a moment"
```

In other words, you're simply unsubscribing from the 'OrderShipmentStatusUpdated' event without leaving the channel completely. So when things heat up again (spoiler alert: they will), you can always come back and join the fun! Just remember to wear your comfiest eavesdropping socks. 🦶🚀

 ### Bailing Out of the Chat Room! 🚪🌞

Are you tired of the never-ending orders and can't take it anymore? Fret not, my dear coder comrades! In this section, we'll show you how to escape the chaotic world of channel management without a hitch.

First things first, if you just want to vacate one specific channel (like you've had enough of order #42), go ahead and call the `leaveChannel` method on your Echo instance:

```js
Echo.leaveChannel(`orders.${this.order.id}`);
```

But hey, what if you're over it not only with the orders but also the private chats and general presence? No worries! To leave a channel along with its associated secret hideouts (private channels) and the buzzing crowd (presence channels), simply call the `leave` method:

```js
Echo.leave(`orders.${this.order.id}`);
```

And there you have it! Now, go forth and enjoy a well-deserved break from all the order madness. But remember, just like a game of tug-of-war, you can always jump back in whenever you're ready! 💪🎢

 ### Namespaces, a Party in the Code-verse! 🎉🎊

Ahoy there, coders! Ever wondered why our events are having a blast in `App\Events` without invitations? Well, that's because our buddy Echo is such a party animal! He automatically assumes they're all there, no RSVP needed. But if you've got a crowded code-verse and want to throw your own bash, you can set the root namespace when inviting Echo:

```js
window.Echo = new Echo({
    broadcaster: 'pusher',
    // ...
    namespace: 'App.Other.DiscoDanceFloor' 💃🕺
});
```

If you're the type who prefers to stick to formalities, you can also prefix your event classes with a `.` when Echo sends out invites. That way, you can always RSVP with the fully-qualified class name:

```js
Echo.channel('orders')
    .listen('.App\\Other\\DiscoDanceFloor\\Class', (e) => {
        // ...
    });
```

Now, who said programming can't be fun? 🥳💃🎉🕺️🎊

 Alrighty then! Let's dive into the world of Laravel Echo, where listening to events is as easy as pie (and way more delicious).

First off, grab the `useEcho` hook, it's like the secret sauce that makes event-listening a breeze. To kick things off, sprinkle this magical concoction on your React or Vue component:

```js tab=React Jambalaya
import { useEcho } from "@laravel/echo-react";

useEcho(
    `orders.${orderId}`,
    "OrderShipmentStatusUpdated",
    (e) => {
        console.log(e.order);
    },
);
```

```vue tab=Vue Tacos
<script setup lang="ts">
import { useEcho } from "@laravel/echo-vue";

useEcho(
    `orders.${orderId}`,
    "OrderShipmentStatusUpdated",
    (e) => {
        console.log(e.order);
    },
);
</script>
```

No need to worry about cleaning up after yourself, the hook will politely exit stage left when your component takes a hike! But hey, if you're feeling extra-fancy, you can always drop the mic and leave manually:

```js tab=React Jambalaya
import { useEcho } from "@laravel/echo-react";

const { leaveChannel, leave, stopListening, listen } = useEcho(
    `orders.${orderId}`,
    "OrderShipmentStatusUpdated",
    (e) => {
        console.log(e.order);
    },
);

// Leave channel...
leaveChannel();
```

```vue tab=Vue Tacos
<script setup lang="ts">
import { useEcho } from "@laravel/echo-vue";

const { leaveChannel, leave, stopListening, listen } = useEcho(
    `orders.${orderId}`,
    "OrderShipmentStatusUpdated",
    (e) => {
        console.log(e.order);
    },
);

// Leave channel...
leaveChannel();
</script>
```

But wait, there's more! You can listen to multiple events by tossing them into the `useEcho` mix:

```js
useEcho(
    `orders.${orderId}`,
    ["OrderShipmentStatusUpdated", "OrderShipped"],
    (e) => {
        console.log(e.order);
    },
);
```

And for those who crave type safety, Laravel Echo lets you specify the structure of your broadcast event data:

```ts
type OrderData = {
    order: {
        id: number;
        user: {
            id: number;
            name: string;
        };
        created_at: string;
    };
};

useEcho<OrderData>(`orders.${orderId}`, "OrderShipmentStatusUpdated", (e) => {
    console.log(e.order.id);
    console.log(e.order.user.id);
});
```

So there you have it, folks! Embrace the power of Laravel Echo and turn your event-listening into a symphony of efficiency. Now go forth and conquer the digital frontier! 🚀🎶🌟

 Alright, let's dive into the wild world of Laravel public channels! 🐯

If you're feeling like a lone wolf in the digital jungle and want to connect with your fellow pack members, fear not! With the magical `useEchoPublic` hook, you'll have them howling at your doorstep in no time! 🎺

Here's a little example on how to use it:

```js tab="React"
// Import the Echo public hook and prepare for some wild adventures!
import { useEchoPublic } from "@laravel/echo-react";

// Let's focus on the 'posts' channel - where we'll find all the juicy gossips 📝
useEchoPublic("posts", "PostPublished", (e) => {
    // When a new post is published, console.log it like a true digital explorer!
    console.log(e.post);
});
```

```vue tab="Vue"
// Time to set sail on this Laravel journey! Grab the Echo public hook and let's go ⛵️
<script setup lang="ts">
import { useEchoPublic } from "@laravel/echo-vue";

// Sail towards the 'posts' channel, where all the juicy gossips await you 📝
useEchoPublic("posts", "PostPublished", (e) => {
    // When a new post is published, console.log it like a true digital explorer!
    console.log(e.post);
});
</script>
```

So there you have it - with just a few lines of code, you're now ready to join the party on public channels and stay up-to-date on all the latest posts! 🎉🎊📝

 Alrighty, let's dive into the world of Presence Channels!

First things first, if you want to join a party (I mean, channel), you can use the `useEchoPresence` hook. It's like being introduced by a mutual friend at a wild office party!

```js tab=React-the-Party-Animal
Just grab a slice of "useEchoPresence" from Laravel's cool new party platter, "@laravel/echo-react":

```javascript
import { useEchoPresence } from "@laravel/echo-react";

So when you hear the music pumping and someone shouts "PostPublished", join right in!
(e) => {
    console.log(e.post); // You're getting all fancy with your console logs now!
}
```

```vue tab=Vue-the-Socialite
If you're more into the Vegas scene, @laravel/echo-vue has got your back:

<script setup lang="ts">
import { useEchoPresence } from "@laravel/echo-vue";

When someone screams "PostPublished", it's time to step onto the dance floor and log that post!
(e) => {
    console.log(e.post); // Don't forget to flash those logs on the big screen!
}
</script>
```

Now, you might be wondering about your connection status. Are you in? Or are you outside shaking palm trees with the band? Fear not! Both React and Vue let you know if you're connected:

<a name="react-vue-connection-status"></a>

```js tab=React-the-VIP
In React, it's all about the state of the union.

```javascript
const { presence } = useEchoPresence("posts", "PostPublished");
const isConnected = presence ? presence.connected : false;
console.log(`I'm ${isConnected ? "in" : "out"} at the party!`);
```

And in Vue, it's like checking your phone for notifications:

```vue tab=Vue-the-Gossip-Girl
In Vue, it's all about the inside scoop.

<template>
    <div>I'm {{ isConnected ? "in" : "out" }} at the party!</div>
</template>

<script setup lang="ts">
import { useEchoPresence } from "@laravel/echo-vue";
const { presence } = useEchoPresence("posts", "PostPublished");
const isConnected = presence ? presence.connected : false;
</script>
```

Remember, it's all about being in the know! Keep rocking those channels and having a blast! 🥳🎉

 Alright, let's dive into the world of Laravel WebSockets! 🤘

#### Connection Comedy Club 🎉🎤

Wanna know if your WebSocket connection is the life of the party or struggling to get a word in edgewise? Look no further than the `useConnectionStatus` hook, your ticket to the hottest (Web)Socket show in town! 🎟️

This bad boy gives you a reactive status that updates quicker than a cat catching a laser pointer whenever the connection state changes:

```js tab="React's Side"
Importing `useConnectionStatus` from "@laravel/echo-react" is like asking the coolest kid at the party for a dance – once you've got it, you're in! 💃🕺

function ConnectionIndicator() {
    const status = useConnectionStatus();

    return <div>Connection: {status}</div>;
}
```

```vue tab="Vue's Corner"
<script setup lang="ts">
Importing `useConnectionStatus` from "@laravel/echo-vue" is like getting the secret recipe for a famous pizza – now you can make your own magic happen! 🍕✨

const status = useConnectionStatus();
</script>

<template>
    <div>Connection: {{ status }}</div>
</template>
```

Now, the possible status values are as follows:

<div class="content-list" markdown="1">

* `connected` - You're the life of the party! Successfully connected to the WebSocket server. 🥳🎉
* `connecting` - Initial connection attempt in progress. Just keep dancing until the DJ spins your song! 🕺💃
* `reconnecting` - Attempting to reconnect after a disconnection. No worries, it's just like having a spare dance partner 🤝💌
* `disconnected` - Not connected and not attempting to reconnect... looks like you took the wrong exit from the party! 🚪🙁
* `failed` - Connection failed and won't retry. Maybe it was that one move on the dancefloor? Time for a new trick! 🚀💃

</div>

And there you have it – a fun-filled guide to staying in the WebSocket loop! 🎉🎤🕺

 Ahoy there, coders! Buckle up for an enlightening adventure into the fascinating world of Laravel's Presence Channels!

Think of them as the sophisticated cousins of private channels, with a dash of flair and a sprinkle of foresight. They not only keep your data safe like Fort Knox but also let you know who's hanging out in the same digital saloon. This makes building collaborative features for your apps as easy as pie (or should we say, `php artisan make:channel`).

Now, imagine crafting a web application where users get notified when another cowboy is viewing the same page, or a chat room that lists its denizens like the old Wild West saloon chalkboard. That's what Presence Channels can do for you!

<a name="authorizing-presence-channels"></a>

Now, let's chat about how to keep these digital cowpokes in line—Authorization for Presence Channels! Just like sheriffs in the Wild West, you'll want to ensure that only authorized individuals can join and leave your channels. Don't worry; Laravel makes it a breeze with its authorization rules, so you can focus on wrangling features instead of bandits!

Happy coding, partners! Let's build something amazing together!

 ### Unlocking the Chat Room Door: Authorizing Presence Channels!

First things first, let's clarify that presence channels are like the VIP section of your Laravel app – exclusive and private. But to gain access, folks need an invite (authorization), just like at a swanky nightclub. However, unlike those pushy bouncers, our system won't just nod you in if you're on the guest list; instead, it'll hand over some cool party favors – I mean, user data!

When setting up access control for presence channels, remember to return a snazzy array of user details instead of a simple "Welcome aboard!" (a.k.a true).

```php
Use App\Models\User;

Broadcast::channel('chat.{roomId}', function (User $user, int $roomId) {
    if ($user->canJoinRoom($roomId)) {
        return ['id' => $user->id, 'name' => $user->name]; // Party on, Wayne!
    } else {
        return false; // Sorry, your invitation got lost in the mail... or something.
    }
});
```

Now, don't forget to pass those user goodies to your JavaScript application's presence channel event listeners! The more you know about 'em, the better you can handle the party crowd (a.k.a managing users).

And if someone tries to crash the party by joining an unauthorized presence channel, well... they'll just be sent back home with a "false" response. Sorry, buddy, no room at the inn! 🙅‍♂️🚪

 ### Channel Hopping with Echo's Jamboree!

Ready to mingle? To join the hottest chat room of town, you'll want to hitch a ride with Echo's swanky 'Join-A-Ride' service. This bad boy will get you into any `chat.{roomId}` party, all thanks to its smooth `join` method.

```js
Echo.JoinTheParty(`chat.${roomId}`)
    .isHere((fellowPartiers) => {
        // ...
    })
    .justEntered((groovyNewcomer) => {
        console.log(`Welcome, ${groovyNewcomer.name}!`);
    })
    .leftTheRoom((absentFriend) => {
        console.log(`Sayonara, ${absentFriend.name}`);
    })
    .errorHandler((discoDebacle) => {
        console.error(discoDebacle);
    });
```

The `isHere` soiree starts the moment you successfully hop into the channel, and serves up an array of all the other catches already in the chat room. The `justEntered` will go off when a fresh face joins the fray, while the `leftTheRoom` alarm blares when someone leaves the party. The `errorHandler` is your lifeline, ready to catch any disasters at the disco – like if the bouncer tells you it's not 200 okay or if the DJ spins some wonky tunes and the JSON gets all jumbled up!

So, grab your dancing shoes and join the party! The good vibes await. 🕺️🎉💃️

 ### Channel Surfing with Presence Channels! 🚀📻

Hey there, coding cowboy/cowgirl! Ever wanted to throw a digital party in the wild west of Laravel land? Well, grab your six-shooter (keyboard) and join me as we broadcast some rootin' tootin' `NewMessage` events with Presence Channels! 🤠

Presence channels aren't just for listening to the latest gossip from the saloon. They can also receive events, just like your favorite public or private channels in our very own chatroom! To send a lasso-load of `NewMessage` events to the room's presence channel, you'll want to return an instance of `PresenceChannel` from the event's `broadcastOn` method.

```php
/**
 * You know what they say: When in doubt, return a PresenceChannel!
 *
 * @return array<int, \Illuminate\Broadcasting\Channel>
 */
public function broadcastOn(): array
{
    return [
        new PresenceChannel('chat.'.$this->message->room_id),
    ];
}
```

As with any other event, you can use the `broadcast` helper and the `toOthers` method to ensure the sheriff (current user) doesn't get an earful from their own messages:

```php
broadcast(new NewMessage($message));

broadcast(new NewMessage($message))->toOthers();  // Keep your secrets, cowboy!
```

Typical of other events, you can listen for these presence channel hootenannies using Echo's `listen` method:

```js
Echo.join(`chat.${roomId}`)
    .here(/* ... */)  // Whoa, there's people here!
    .joining(/* ... */)  // A new face in town!
    .leaving(/* ... */)  // Bye, partner!
    .listen('NewMessage', (e) => {
        // Listen up! Handle the NewMessage event.
    });
```

And now you're all set to party like it's 1875 on the frontier of Laravel broadcasting! Don't forget your bandana and spurs, partner! 🤠🚀

 Ahoy there, shipmates! Let's dive into the world of Model Broadcasting in Laravel, shall we?

Before you set sail, make sure ye have a basic understanding of how model broadcasting services work and how to create and listen to broadcast events manually. Otherwise, this pirate-themed guide might leave ye more confused than Fiddler's Green!

So why would ye want to broadcast events when your Eloquent models are created, updated, or deleted? It's as easy as walking the plank – you just define custom events for model state changes and mark them with the `ShouldBroadcast` interface. But creating event classes can be a bit of a swabby-back if ye ain't using these events elsewhere in yer application.

To help ye avoid that fate, Laravel lets ye indicate that an Eloquent model should automatically broadcast its state changes. To get started, ye'll need to have your model use the `Illuminate\Database\Eloquent\BroadcastsEvents` trait and define a `broadcastOn` method.

```php
<?php

namespace App\Models;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use BroadcastsEvents, HasFactory;

    /**
     * Get the user that the post belongs to.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the channels that model events should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel|\Illuminate\Database\Eloquent\Model>
     */
    public function broadcastOn(string $event): array
    {
        return [$this, $this->user];
    }
}
```

Once yer model is adorned with this trait and defines its broadcast channels, it will begin automatically broadcasting events like a sea shanty when a model instance is created, updated, deleted, trashed, or restored.

Ye may have noticed that the `broadcastOn` method receives a string `$event` argument. This argument contains the type of event that has occurred on the model and will have a value of `created`, `updated`, `deleted`, `trashed`, or `restored`. By examining the value of this variable, ye can determine which channels (if any) the model should broadcast to for a particular event.

```php
/**
 * Get the channels that model events should broadcast on.
 *
 * @return array<string, array<int, \Illuminate\Broadcasting\Channel|\Illuminate\Database\Eloquent\Model>>
 */
public function broadcastOn(string $event): array
{
    return match ($event) {
        'deleted' => [],
        default => [$this, $this->user],
    };
}
```

Now that ye have a handle on model broadcasting, it's time to set sail and conquer the high seas of event-driven applications in Laravel! Yarr matey!

 Alright, buckle up, code cowboys and codewettes! It's time to talk about customizing that wild west showdown of Model Broadcasting Event Creation in Laravel land.

You might find yourself hankering to tweak how our trusty steed, Laravel, corrals the underlying model broadcasting event. Fear not! All you gotta do is lasso your Eloquent model and rope it into defining a `newBroadcastableEvent` method. This method should then dance with the coyote-like `Illuminate\Database\Eloquent\BroadcastableModelEventOccurred` instance.

```php
use Illuminate\Database\Eloquent\BroadcastableModelEventOccurred as Coyote;

/**
 * Saddle up a new broadcastable model event for the Model Posse!
 */
protected function newBroadcastableEvent(string $event, array $args = []) {
    // Let's say our event is named "GunfightAtTheOKCorral"
    // And we want to exclude the Sheriff (current user) from the broadcast.
    return new Coyote($this, $event, ...$args)
        ->dodgeBulletsFromCurrentUser();
}
```

Don't forget to give your event a suitable name and any necessary arguments! And hey, if you ever need to round up more conventions on Model Broadcasting, just yee-haw your way over here. *wink*

 **Model Broadcasting: The Party Line!** 📣🥳

Welcome to the wild world of Laravel's Model Broadcasting, where your models throw the best parties in town! But shh... remember, it's not just about having a good time. There are some golden rules we need to cover before you start RSVPing as 'maybe' to every event. 🎉🎊

<a name="model-broadcasting-channel-conventions"></a>

**The Event Channels** 🌉

Imagine if your party invites could magically find their way to all the right people! That's exactly what Event Channels do - they act as the conduit between your models and listeners, ensuring everyone gets invited to the right event. 🎬🤝

Now, you might wonder how these channels know who to invite. Well, my friend, it's all about naming conventions! Just like a secret handshake at a speakeasy, our models and listeners use them to recognize each other. So, let's get down to the nitty-gritty!

**Private Channels (One on One)** 🤐

You know that one friend you only chat with privately? Private channels in Model Broadcasting are like those secret conversations! To create a private channel for a model, simply name it after the model's class name, prefixed by 'private:'. For example, if you have a Post model, your private channel would be named 'private:App\Post'. 💬🤐

**Public Channels (Broadcast to all)** 🗣️📺

Sometimes you want to share the party vibes with everyone - and that's where public channels come in! To create a public channel for a model, use the model's class name without any prefix. Using our Post example again, your public channel would be named 'App\Post'. 🗣️🤝

**Authenticated Channels (Only for registered users)** 🔓

Imagine hosting an exclusive party where only registered guests can enter. Authenticated channels work the same way! To create an authenticated channel, prefix your model's class name with 'App\\Events\\'. Using our Post example one last time, your authenticated channel would be named 'App\\Events\\Post'. Remember, these channels ensure that only authenticated users can listen to their events. 🔓🤝

That's a wrap for today's Model Broadcasting Channel Conventions crash course! Now go on, unleash your models and let the parties begin! 🎉🚀

 Alright, buckle up, cowboy! Let's dive into the magical world of Laravel Channel Conventions - where models, events, and private channels come together in a glorious symphony of code.

First off, you might have noticed that our model example's `broadcastOn` method didn't cough up Channel instances, but rather those suave Eloquent models. No sweat! If your model spits out an Eloquent model (or a fancy array containing one), Laravel whips up a secret, private channel like a cocktail shaker at a trendy bar - using the model's class name and primary key identifier as the mysterious channel name.

For instance, an `App\Models\User` model with an `id` of 1 gets transformed into a slick `Illuminate\Broadcasting\PrivateChannel` instance, named `App.Models.User.1`. Sounds like a superhero alias, right?

Now, if you want to take the wheel and name your channels yourself, you can return complete Channel instances from your model's `broadcastOn` method. Here's how it's done:

```php
use Illuminate\Broadcasting\PrivateChannel;

/**
 * Get the channels that model events should broadcast on.
 *
 * @return array<int, \Illuminate\Broadcasting\Channel>
 */
public function broadcastOn(string $event): array
{
    return [new PrivateChannel('user.'.$this->id)];
}
```

If you're feeling fancy and want to return a channel instance directly from your model, go right ahead! Laravel will use the model channel conventions we discussed earlier to convert the Eloquent model into a stringy channel name:

```php
return [new Channel($this->user)];
```

Lastly, if you need to find out a model's channel name, simply call its `broadcastChannel` method. It'll serve up the fancy string like it's passing you a martini at the end of a long day:

```php
$user->broadcastChannel();
```

And there you have it! Now you're well-versed in Laravel Channel Conventions, and ready to shake things up with private channels, Eloquent models, and a dash of magic. Cheers!

 Alright, let's get this party started! In the land of Laravel, model broadcast events are like invitations to a dance floor, but instead of a disco ball, we've got your application's `App\Events` directory. These events aren't officially invited guests, though; they're more like crashers, assigned names and swag bags based on some fancy conventions.

For instance, when our dashing `App\Models\Post` model pulls off an update, it sends out a "PostUpdated" invite to the client-side shindig, complete with a snazzy payload that includes its ID and title (and perhaps a few secrets it's not telling us).

```json
{
    "model": {
        "id": 1,
        "title": "My first post"
        ...
    },
    ...
    "socket": "someSocketId"
}
```

Now, when the `App\Models\User` model decides to hit the bricks, it sends out a "UserDeleted" RSVP, making sure everyone knows it's time to clear the dance floor.

But what if these events want to bring their own plus ones or maybe even change their names at the door? You can let them by defining custom broadcast names and payloads with the `broadcastAs` and `broadcastWith` methods. These party planners take the name of the model event / operation happening, giving you the power to customize each event's name and swag bag for every dance move.

If your event's too shy to declare its name, Laravel will fall back on those model broadcasting event name conventions we mentioned earlier. Here's what a confident `Post` model might look like:

```php
/**
 * Name of the broadcast event (if you're not afraid to shout it out).
 */
public function broadcastAs(string $event): string|null
{
    return match ($event) {
        'created' => 'post.created', // "Hey, check out my latest dance move!"
        default => null,              // "I'm here to blend in with the crowd."
    };
}

/**
 * The goods to send along with the broadcast (swag bags included).
 */
public function broadcastWith(string $event): array
{
    return match ($event) {
        'created' => ['title' => $this->title], // "Here's a sneak peek of my cool dance move."
        default => ['model' => $this],          // "Feel free to check out my moves on the dance floor."
    };
}
```

 Alright, let's get this party started! 🎉

### Listening for Model Broadcasts (AKA The Dancefloor of Data)

First things first, you've got to suit up your model with the cool `BroadcastsEvents` trait, like a superhero getting ready for a mission. Once that's done and you've defined your model's `broadcastOn` method, it's time to put on your dancing shoes and hit the data-filled dancefloor!

Before stepping onto the floor, we highly recommend reviewing the [full event listening guide](#listening-for-events)—you know, just in case you step on someone's toes or something. 🕺️

Now, to find the right partner for your dance, use the `private` method (think of it as a bouncer at the club checking IDs). Once you have that channel, call the `listen` method (imagine it as asking your date to dance), and specify the event you're interested in. The name of the channel given to the `private` method should follow Laravel's [model broadcasting etiquette](#model-broadcasting-conventions).

Once you've found a match, you can use the `listen` method (the dance move) to listen for a specific event. Since model broadcast events are more like the unofficial after-party anthems that everyone secretly loves, they don't have a dedicated slot in your application's `App\Events` directory. Instead, prefix the [event name](#model-broadcasting-event-conventions) with a `.` to indicate it's just here for a good time, not a long time. Each model broadcast event comes with a `model` property that contains all the broadcastable properties of the model.

Here's an example of how you might ask User #57321 for a dance:

```js
Echo.private(`App.Models.User.${this.user.id}`)
    .listen('.UserUpdated', (e) => {
        console.log(e.model); // 💃️ Time to show off your moves!
    });
```

<a name="model-broadcasts-with-react-or-vue"></a>
And if you're dancing with React or Vue (our favorite dance partners), we've got a special guide for that too! 🤓💃️🎉

 Alrighty, you JavaScript and Vue wizards out there! 🎩⚡️ Let's dive into the magical world of Laravel Echo, shall we?

If you're as cool as a cucumber using React or Vue, you can now catch model broadcasts like a boss with the `useEchoModel` hook! 🦸‍♂️

Here's how to use it in your superhero suit:

```js tab=React-Cape-Crusader
import { useEchoModel } from "@laravel/echo-react";

// Don't forget to grab the user's unique ID, because no two users are alike! 😜
const userId = getUserUniqueId();

useEchoModel("App.Models.User", userId, ["UserUpdated"], (e) => {
    console.log(e.model); // Boom! User updated event caught!
});
```

```vue tab=Vue-Jedi
<script setup lang="ts">
import { useEchoModel } from "@laravel/echo-vue";

// The Force is strong with this one, so go ahead and grab the user's unique ID! 🤓
const userId = getUserUniqueId();

useEchoModel("App.Models.User", userId, ["UserUpdated"], (e) => {
    console.log(e.model); // May the updated user be with you!
});
</script>
```

Feeling extra-protective about your data types? No problemo! 🦁 Now you can specify the model event payload data shape to add type safety and editing convenience:

```ts
type User = {
    id: number;
    name: string;
    email: string;
};

// Here's your chance to flex your superpowers! 🦸‍♂️
useEchoModel<User, "App.Models.User">("App.Models.User", userId, ["UserUpdated"], (e) => {
    console.log(e.model.id); // User ID caught in your web!
    console.log(e.model.name); // User name has been identified!
});
```

And there you have it! Now you can listen for model broadcasts and show off your data type superpowers like a true master of the universe. 🌌🔥🚀

 Ahoy there, Laravel enthusiasts! 🌴 Let's dive into the thrilling world of Client Events - a feature that makes your application feel more like a bustling beach resort than a lonely lighthouse. 🏖️

First things first: If you're using Pusher Channels, don't forget to enable the "Client Events" option in your dashboard, or else your Laravel app will be as clueless as a seal trying to use a smartphone! 🐳📱

Now, why would you want Client Events? Well, imagine sending an "Islander typing!" announcement across the server without even touching your Laravel application. Perfect for those "typing" notifications that let users know someone's composing a tropical masterpiece on the other side of the screen. 🌴✍️

To unleash Client Events, give Echo's `whisper` method a shout:

```js tab=JavaScript
Echo.private(`chat.${roomId}`)
    .whisper('typing', {
        name: this.user.name
    });
```

```js tab=React
import { useEcho } from "@laravel/echo-react";

const { channel } = useEcho(`chat.${roomId}`, ['update'], (e) => {
    console.log('Chat event received:', e);
});

channel().whisper('typing', { name: user.name });
```

```vue tab=Vue
<script setup lang="ts">
import { useEcho } from "@laravel/echo-vue";

const { channel } = useEcho(`chat.${roomId}`, ['update'], (e) => {
    console.log('Chat event received:', e);
});

channel().whisper('typing', { name: user.name });
</script>
```

To listen for Client Events, use the `listenForWhisper` method:

```js tab=JavaScript
Echo.private(`chat.${roomId}`)
    .listenForWhisper('typing', (e) => {
        console.log(e.name);
    });
```

```js tab=React
import { useEcho } from "@laravel/echo-react";

const { channel } = useEcho(`chat.${roomId}`, ['update'], (e) => {
    console.log('Chat event received:', e);
});

channel().listenForWhisper('typing', (e) => {
    console.log(e.name);
});
```

```vue tab=Vue
<script setup lang="ts">
import { useEcho } from "@laravel/echo-vue";

const { channel } = useEcho(`chat.${roomId}`, ['update'], (e) => {
    console.log('Chat event received:', e);
});

channel().listenForWhisper('typing', (e) => {
    console.log(e.name);
});
</script>
```

And there you have it, a tropical take on Laravel's Client Events! Now go forth and conquer the seas of real-time communication with your newfound whispering skills. 🌴🐠🎉

 ## Bells, Whistles, and Pings - Oh My!

In the spirit of telegrams, Morse code, and carrier pigeons combined, Laravel's Notification Service is here to bring your JavaScript app up to speed with the modern age! No more tedious page refreshes to catch new notifications. It's like having a personal butler who updates you on important events without interrupting your Netflix binge.

Before we dive in, do take a peek at our guide on [harnessing the broadcast notification channel](/docs/{{version}}/notifications#broadcast-notifications).

Once you've set up your notifications to play nice with the broadcast channel, it's time to tune in for those life-altering announcements. To do that, simply use Echo's `notification` method, remembering to name your channel like a posh aristocrat:

```js tab=JavaScript
Echo.private(`Lord_Nobletones_${userId}`)
    .notification((notification) => {
        console.log(notification.type);
    });
```

```js tab=React
import { useEchoModel } from "@laravel/echo-react";

const { channel } = useEchoModel('Lord_Nobletones', userId);

channel().notification((notification) => {
    console.log(notification.type);
});
```

```vue tab=Vue
<script setup lang="ts">
import { useEchoModel } from "@laravel/echo-vue";

const { channel } = useEchoModel('Lord_Nobletones', userId);

channel().notification((notification) => {
    console.log(notification.type);
});
</script>
```

Here, any notifications fired off to `Lord_Nobletones` instances through the `broadcast` channel will find their way to our callback! A channel authorization callback for `Lord_Nobletones.{id}` can be found in your application's `routes/channels.php` file.

<a name="stop-listening-for-notifications"></a>
Now, if you ever feel overwhelmed with the constant barrage of notifications and need a break, simply unsubscribe using Echo's `disconnect` method:

```js tab=JavaScript
Echo.private(`Lord_Nobletones_${userId}`).disconnect();
```

Remember to be kind to your notifications; they're just trying to keep you informed! Happy listening! 🔔📣

 Alrighty, let's get this party started! If you're tired of those pesky notifications but don't want to ditch the channel like a cat abandoning its litter box (sorry, kitty), fear not! The `stopListeningForNotification` method is here to save your inbox from imminent doom.

Let's set up our callback function – think of it as your personal bouncer for those notification parties. It'll console log the type of each notification, so you know who to kick out (just kidding, let's keep the peace).

```js
const callback = (notification) => {
    console.log(notification.type);
}

// Start the rave...
Echo.private(`App.Models.User.${userId}`)
    .notification(callback);

// Time to kick out the DJ...
Echo.private(`App.Models.User.${userId}`)
    .stopListeningForNotification(callback);
```

Remember, the callback must be the same when stopping as it was when starting – it's like matching socks or finding a unicorn. Happy un-listening!