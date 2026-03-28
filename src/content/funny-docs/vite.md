 # The Joyful Symphony of Asset Bundling: Vite Edition! 🎶

Get ready to rock the web development world with our very own orchestra conductor - **Vite**! This little maestro will help you bundle your assets in a way that's faster, easier, and more enjoyable than ever before.

## Setting Up Shop (aka Installation & Setup) 🏪

### Gathering the Band Members (Installing Node) 🎺
First things first: We need to invite our good friend **Node.js** to join the party! If he hasn't already arrived, go ahead and install him with a few simple commands.

### Inviting Vite and the Laravel Plugin (aka Installing Vite and the Laravel Plugin) 🎤
Now that we've got Node, it's time to bring in the star of the show - **Vite**! And because our Laravel project is a bit high-profile, we'll need to invite his bodyguard (Laravel plugin) as well.

### Tuning Up the Instruments (aka Configuring Vite) 🎻
With Vite and his trusty sidekick in place, we can now tune our instruments (configuring Vite). This involves a bit of tweaking to make sure everyone's playing in harmony.

### Staging the Show (aka Loading Your Scripts and Styles) 🎭
Finally, it's time for the main event! Our scripts and styles will take center stage as we prepare them to shine brighter than ever before.

## Performing the Magic (aka Running Vite) 🎛️
With everything set up, we can now hit play and watch our beautiful symphony come alive!

## Working with Scripts (aka Working With JavaScript) 💻
Vite's not just a conductor; he's also an all-star performer when it comes to scripts. From aliases to working with popular frameworks like Vue, React, Svelte, Inertia, and more, Vite's got you covered!

## The Fashion Police (aka Working With Stylesheets) 👗
Of course, we can't forget about the fashion police! Vite makes styling a breeze with its powerful tools.

## Blending Art and Technology (aka Working With Blade and Routes) 🎨
With Vite's help, our Laravel project will be a true work of art – effortlessly blending coding and design like never before. We'll process static assets, refresh on save, and even make use of aliases.

## Prefetching the Encore (aka Asset Prefetching) 🎶📅
Want to ensure a standing ovation? Pre-fetch your assets for an even smoother performance!

## Customizing the Stage (aka Custom Base URLs and Advanced Customization) 🌈
Need to change the scenery? Vite lets you customize the stage to fit your project's unique needs. From setting custom base URLs to advanced customization, Vite is a true chameleon!

## The Green Room (aka Environment Variables and Disabling Vite in Tests) 💚
Backstage, we can keep our secrets safe with environment variables. And when it's time for tests, Vite can take a bow and let the team perform without him.

## Final Act: Server-Side Rendering (SSR) 🎭🏆
Ready for the grand finale? With SSR, our Laravel project will be a masterpiece that wows audiences across the web!

## Tagging Our Assets (aka Script and Style Tag Attributes) 🔖
Before we hit the stage, there are a few finishing touches to take care of. We'll apply Content Security Policy (CSP) Nonce, Subresource Integrity (SRI), and even add arbitrary attributes for good measure!

And that's a wrap! With Vite in our corner, we can create stunning Laravel projects like never before. So go ahead – let the music play! 🎵🥁🎉

 Ahoy there, web-wranglers! Buckle up, because we're diving headfirst into the whirlwind of frontend fun with Vite - the speedy, stylish, and oh-so-charming build tool that'll make your dev life a breeze!

Imagine crafting your web apps like a master chef in a state-of-the-art kitchen, where the oven preheats faster than you can say "mise en place." That's Vite for ya! It not only cooks up your CSS and JavaScript delicacies super-fast during development but also packages them into irresistible production goodies.

When you're whipping up Laravel apps (which, let's be honest, is like being a Michelin-starred chef in the world of PHP), Vite comes to your aid as your trusty sous-chef, bundling up your app's CSS and JS files into production-worthy assets that are sure to dazzle any discerning web palate.

Laravel and Vite share a harmonious dance floor partnership, with Laravel offering an official plugin and Blade directive for loading your assets like a pro during both dev and production. So let's grab our aprons and get cookin'!

<a name="installation"></a>
(Hold on to your hats, folks - we're about to install this culinary marvel!)

 Alright, buckle up, cowboy! Here's a wild ride into the world of Laravel Vite, where the cacti are plentiful and the code is crisp! But first things first, let's get our hands dirty.

⚠️ Note: This section will guide you on how to manually install and configure the Laravel Vite plugin. However, for a quick draw start, check out Laravel's [starter kits](/docs/{{version}}/starter-kits). They're like pre-made cowboy hats that already have all the scaffolding you need!

Let's saddle up and get started with installing Node.js (our trusty steed in this digital wild west) by running:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Once you've got Node.js installed, it's time to lasso the Laravel Vite plugin by running:

```bash
composer require laravel/vite:^2.0
```

Now, we need to run a few commands to set up our corral (project). Head over to your project directory and execute:

```bash
npm install
npm run vite:install
```

Finally, let's update the `config/app.php` file by adding this line in the `providers` array:

```php
Laravel\Vite\ViteServiceProvider::class,
```

And in the `aliases` array, add this line:

```php
'Vite' => Laravel\Vite\Facade::class,
```

Now, you can run your frontend assets with a simple command:

```bash
npm run vite
```

And there you have it! You've transformed your dusty trail into a well-trodden path to modern web development. So grab a cold beer and sit back, partner; you've earned it!

 Alrighty, let's get this show on the road! Before we dive into the Laravel Vite extravaganza, there are a few prerequisites we need to tick off. Namely, you've gotta make sure Node.js (the cool, modern version 16+) and NPM (think of it as Node's trusty sidekick) are already installed on your system. To verify, open up your terminal and type:

```shell
node --version
npm --version
```

If you see something akin to "v16.something" for Node and a number (probably greater than 8) for NPM, then you're good to go! If not, don't fret – installing these superheroes is as easy as pie with the simple graphical installers found on the [official Node website](https://nodejs.org/en/download/) (it's like a choose-your-own-adventure book for geeks!).

For those who are already sailing smoothly with Laravel Sail, you can summon your Node and NPM comrades thusly:

```shell
./vendor/bin/sail node --version
./vendor/bin/sail npm --version
```

Now that we've got the basics covered, it's time to set sail on the high seas of Vite and Laravel plugin goodness! 🌴🚀🎉

 Alrighty then! Let's get this larvalicious party started! First things first, in your brand new Laravel lair, you'll spy a fella named `package.json` hanging out in the root of your application's directory jungle. Fear not, this chap is no unwelcome houseguest; he's here to help! The default `package.json` fellow is already well-equipped with all the goodies you need to kick off an unbeatable duo: Vite and the Laravel Plugin!

Ready to roll? Install your frontend dependencies like a seasoned pro, using nothing but a trusty ol' NPM:

```shell
npm install
```

Now that you've got your tools in order, let's move on to the next chapter: Configure-a-palooza! 🎺🎤🎧 (<a name="configuring-vite"></a> for those of you still hanging onto the ancient scrolls)!

 Ahoy, sailor! Let's dive into the world of Vite, shall we? 🌊

Vite is like the lifebuoy for your project, bobbing around in the vast ocean of development tools. You'll find it anchored down by a `vite.config.js` file, nestled snugly at the root of your pirate ship (project). Feel free to hoist the Jolly Roger and customize this buoy as you please!

And if ye be needing more swashbuckling plugins like `@vitejs/plugin-react`, `@sveltejs/vite-plugin-svelte`, or `@vitejs/plugin-vue`, just drop 'em anchor and bring 'em aboard! 🏹

Now, the Laravel Vite plugin expects ye to declare your ship's entry points. These could be JavaScript or CSS cap'ns log books (files), including fancy preprocessed languages such as TypeScript, JSX, TSX, and Sass. Here's a wee example:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]) // Don't forget to invite these cap'ns on board! 👋
    ],
});
```

If ye be building a Single Page Application (SPA), including Inertia-powered ships, Vite works best without CSS entry points. Instead, ye should serve up yer CSS via JavaScript, like so:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css', // [Delete ye old cap'n's log book here! 🗑️]
            'resources/js/app.js',
        ]) // Don't forget to invite this cap'n on board! 👋
    ],
});
```

Instead, serve up yer CSS via JavaScript. Typically, ye would do this in yer ship's `resources/js/app.js` file:

```js
import './bootstrap';
import '../css/app.css'; // [Sound the anchor! Hoist yer colors here! 🏹]
```

The Laravel plugin also supports multiple entry points and advanced configuration options like SSR entry points. Arrrrghastingly cool, ain't it? 😜

 Alright, let's dive into the world of secure development servers, shall we? 🤔🔒

First off, if your local server is rocking an HTTPS cape for your app, hats off! But, beware, as connecting to the Vite development server might become a bit like trying to dance with a bear in a tutu - tricky but not impossible.

If you're using Laravel Herd (the digital shepherd for your Laravel flock) and have secured your site or you're using Laravel Valet (not the ice cream, unfortunately) and have given your app a protective shield with the secure command, fear not! The Laravel Vite plugin will swoop in like a superhero, detecting and employing the generated TLS certificate to keep things running smoothly.

However, if you secured your site using a host that doesn't match your application's directory name (the ultimate alias-naming disaster), fear not! You can manually specify the host in your application's `vite.config.js` file:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            // ...
            detectTls: 'my-app.test', // [tl! add]
        }),
    ],
});
```

When you're using another web server (like a rebellious teen leaving home), you'll need to generate a trusted certificate and manually configure Vite to use it:

```js
// ...
import fs from 'fs'; // [tl! add]

const host = 'my-app.test'; // [tl! add]

export default defineConfig({
    // ...
    server: { // [tl! add]
        host, // [tl! add]
        hmr: { host }, // [tl! add]
        https: { // [tl! add]
            key: fs.readFileSync(`/path/to/${host}.key`), // [tl! add]
            cert: fs.readFileSync(`/path/to/${host}.crt`), // [tl! add]
        }, // [tl! add]
    }, // [tl! add]
});
```

Now, if your system is unable to generate a trusted certificate (the digital equivalent of a fish out of water), fear not! You can install and configure the [@vitejs/plugin-basic-ssl plugin](https://github.com/vitejs/vite-plugin-basic-ssl). When using untrusted certificates, you'll need to accept the certificate warning for Vite's development server in your browser like a boss when running the `npm run dev` command.

Finally, if you want to configure HMR in Sail on WSL2 (the techy equivalent of learning a new dance move), head over here: [<a name="configuring-hmr-in-sail-on-wsl2">Configuring HMR in Sail on WSL2</a>]. 🎉🕺️💃️

 Ahoy there, intrepid Laravel adventurer! You've ventured into the wild world of WSL2 and found yourself in need of a bit of guidance to get your development server humming along like a well-oiled ship. Fear not, for we're here to set your compass straight!

#### Navigating the Development Seas with Sail on WSL2

When you've hoisted the Vite development sails within Laravel's mighty Sail (yes, it's a pirate ship, deal with it), on Windows Subsystem for Linux 2 (WSL2), it's crucial to give your browser a map – or, as they say in coding terms, configure your `vite.config.js` file.

```js
// ...

export default defineConfig({
    // ...
    server: { // [Yo Ho Ho! add:start]
        hmr: {
            host: 'localhost', // Tell the browser: "We be here!"
        },
    }, // [Yo Ho Ho! add:end]
});
```

Now, if your changes aren't making a splash in the browser while old Popsy is at the helm, you might need to tweak Vite's [server.watch.usePolling option](https://vitejs.dev/config/server-options.html#server-watch).

<a name="loading-your-scripts-and-styles"></a>
But what good is a ship without cargo? Let's load up your scripts and styles, matey!

 ### Unleashing the Magic of Your Digital Wardrobe

With your Vite runway show set, it's time to strut your stuff on the web's biggest stage! Get ready to dazzle with those sleek styles and catchy tunes, but first, let's arrange our outfits in the right order.

Using the enchanting `@vite()` Blade spell, cast it upon the humble abode of your application's main template:

```html
<!DOCTYPE html>
<head>
    {{-- Your secret potions and elixirs go here --}}

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
```

Fancy dressing up your styles using JavaScript voodoo? No worries! Just summon the JavaScript entry point:

```html
<!DOCTYPE html>
<head>
    {{-- Your secret potions and elixirs go here --}}

    @vite('resources/js/app.js')
</head>
```

The `@vite` spell, when invoked, will sense the presence of the mystical Vite development server and conjure up its powerful client for Hot Module Replacement, ensuring your outfits magically transform without a blink!

During build mode, the spell will summon your polished and labeled assets, complete with any imported styles from distant lands.

If you're working with a secret partnership (like the one between you and that crafty 'Courier'), you can specify the build path of your assembled assets when casting the `@vite` spell:

```html
<!doctype html>
<head>
    {{-- Your secret potions and elixirs go here --}}

    @vite('resources/js/app.js', 'vendor/courier/build')
</head>
```

Remember, a little magic goes a long way! Now, let's put on the best show the web has ever seen! 🎩✨

 Alright, buckle up, my Laravel compadres! Let's dive into the thrilling world of Inline Assets - a dance we do when we want to get our raw asset content on the dancefloor instead of linking to a fancy, dressed-up version at the digital ball.

Imagine this: you're whipping up a PDF invoice for your eccentric client who insists on a personal touch (read: handwritten font). To make that happen, you need to slip your CSS and JavaScript straight into the document, not just send them a dinner invitation!

Luckily, our Laravel chums at Vite have provided us with a magical method called `content`. This little gem lets you fetch asset content like summoning a genie from a bottle (minus the smoke and mirrors).

Here's how to put on a show:

```blade
@use('Illuminate\Support\Facades\Vite')

<!doctype html>
<head>
    {{-- ... --}}

    <style>
        {!! Vite::content('resources/css/app.css') !!}  <!-- Dancing shoes on! -->
    </style>
    <script>
        {!! Vite::content('resources/js/app.js') !!}  <!-- Time to boogie! -->
    </script>
</head>
```

Now, aren't you glad we took a detour from the serious stuff? Next time you need an in-your-face asset injection, remember our friendly guide to Inline Assets! 🕺️💃️🎉

 Alright, tech-heroes! Let's embark on a thrilling journey through the magical land of Laravel and Vite – where coding wizardry meets speedy deployment!

First off, let me introduce you to our trusty sidekick, Vite. This enchanting tool has a superpower that lets it run in two distinct modes:

1) The **Development Sorcery Mode** (AKA the `dev` command). Perfect for local tinkering sessions! Once summoned, this spell will unleash an intelligent, hot-reloading development server that's got superhuman senses to detect even the slightest change in your files. It'll instantly cast a charm on any open browser windows, so they'll reflect your latest coding masterpieces in real time!

2) The **Production Preparation Ritual** (or simply the `build` command). Time for the big show! This incantation will take your application's assets and grant them the power of versioning and bundling. Once ready, they'll be fully equipped to face the perils of deployment in the wild frontier of production servers!

```shell
$ magic wand: vite dev  // for development sorcery mode
$ enchanting robe: vite build  // for production preparation ritual
```

Now that you're well-versed in Vite's magical powers, go forth and conquer the coding world with speed, style, and a touch of humor! May your code always be clever, and your deployments smooth as butter! 🦄🚀✨

 Alright, mate! Here's how you fire up the Vite development server in your Laravel project (it's like starting a dance party for your code). First things first, open up that terminal of yours and let's get this show on the road:

1. **Call the dance floor**: Navigate to your project directory by typing `cd path/to/your/project` (just remember where you left your jacket!).

2. **Get the party started**: Invoke the Vite development server by running `npm run dev` (it's like saying "Let's get this code-a-thon started!").

Remember, it might take a moment for the server to warm up and start spinning those tunes. Once it's up and running, you can watch your changes being reflected in real time by opening your browser and navigating to `http://localhost:3000`.

Just like that, you've transformed your humble Laravel project into a pulsating, vibrant dance floor of code! Happy coding! 🕺️🎉

 Alrighty, mate! Here's a light-hearted guide to getting your assets shipshape for the big show (production).

1. **Get the party started:**
   First things first, fire up the dance floor by running:

   ```bash
   npm run build
   ```

   This command will get your assets all dressed up and ready to strut their stuff on the grand stage. Just like a well-choreographed conga line, it'll move seamlessly from one step to another.

   If you're using [Sail](/docs/{{version}}/sail) in your tuxedo (WSL2), there might be some extra invitations to the ball (additional configuration options). You can find those on our dance card ([here](#configuring-hmr-in-sail-on-wsl2)).

   <a name="working-with-scripts"></a>

   And that's a wrap! With your assets decked out and ready to go, you can now focus on polishing the rest of your application until it shines brighter than a disco ball at Studio 54. Happy coding! 🎉🎊

 ### Taming the Beast: Interfacing with JavaScript in Laravel Land!

#### Aliasing Your JavaScript Assets (AKA "Bribing the Browser")

(Oh, you've come to learn about taming that wild JavaScript beast, have you? Splendid! Let us embark on this journey together.)

First up: Aliasing your JavaScript assets. This is like bribing the browser with a nice nickname so it knows where to find your precious scripts when you need them most.

To set an alias for your JavaScript files, you'll want to create or edit your `app.js` configuration file located in the `config/mix` directory. It might feel like trying to negotiate with a capricious browser tyrant, but don't worry—we've got your back!

```php
// config/mix.php

return [
    // ... other configurations

    'js' => [
        // Path to your JavaScript source files
        'resources/js',

        // Alias names for your JavaScript assets
        'main' => 'path/to/your/main.js',
        'admin' => 'path/to/your/admin.js',
    ],
];
```

Now that you've bribed the browser with a sweet alias, it's time to compile those scripts for production—you wouldn't want to show up empty-handed! To do so, execute the following command in your terminal:

```bash
npm run production
// or
yarn production
```

#### Compiling JavaScript (AKA "Fattening Up the Beast")

Compiling your JavaScript assets is like fattening up the beast before the big show. This process takes your lean, mean JavaScript machine and turns it into a chiseled, optimized piece of art that will impress even the pickiest browser tyrants.

To compile your scripts, you can use Laravel Mix, which makes this process incredibly simple. First, make sure to install Laravel Mix by running:

```bash
npm install --save-dev laravel-mix
// or
yarn add laravel-mix --dev
```

Once that's done, open your `resources/js/app.js` file and give it a gander. At the very bottom of the file, you'll see some auto-generated code—that's where you can write your own JavaScript! It might be tempting to let loose with all sorts of crazy scripts and tricks, but remember: we're here for education, not for turning Laravel Land into a circus!

Now that your JavaScript masterpiece is complete, it's time to compile those puppies for production. Execute the following command in your terminal:

```bash
npm run production
// or
yarn production
```

And voilà! Your compiled JavaScript file will be located in the `public/js` directory, ready to serve up to adoring browsers everywhere.

Happy coding, and may your browser tyrants always be appeased!

 ### Superpowers, Unleashed!

First off, welcome to the Laravel-verse, where developers are mere mortals no more! To help you harness your powers and quickly integrate with your application's assets, the mighty Laravel plugin bestows upon you a magical alias:

```js
{
    '@' => '/resources/js'
}
```

Think of it as your Secret Identity. Just like Clark Kent and Peter Parker, you can now leap into action with a simple symbol!

But wait, there's more! If you're feeling particularly inventive (or rebellious), you can customize this alias to better suit your needs. To do so, simply add your own alias to the `vite.config.js` configuration file:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel(['resources/ts/app.tsx']),
    ],
    resolve: {
        alias: {
            '@': '/resources/ts',
        },
    },
});
```

In this example, you've replaced the "js" portion with "ts", transforming your alias into a TypeScript-wielding powerhouse! So go forth and conquer, but remember: with great power comes great responsibility. Use your abilities wisely, and may your code always be cleaner than Spiderman's web.

 ### Vue (with a side of sass)

If you're ready to dazzle your frontend using the [Vue](https://vuejs.org/) framework, then grab yourself a chaise lounge, because we're about to install some plugins! First things first, you'll need to get your hands on the `@vitejs/plugin-vue` plugin:

```shell
npm install --save-dev @vitejs/plugin-vue 🤘
```

Once it's in your collection, it's time for a little dance of inclusion. Slide on over to your `vite.config.js` configuration file and give it a warm welcome:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        // Laravel's fancy party invites 🎉
        laravel(['resources/js/app.js']),

        // Vue, the life of the party, with a little dance card 🕺💃
        vue({
            template: {
                transformAssetUrls: {
                    // Vue's got the moves to rewrite URLs for Single File Components
                    // to point at the Laravel web server. A null move means it's time
                    // for the Laravel plugin to rewrite asset URLs to the Vite server instead! 🤹‍♂️
                    base: null,

                    // Absolute URLs are Vue's date for the evening, treated as file paths on disk.
                    // Setting this to `false` leaves those absolute URLs unscathed, so they can reference assets in the public directory like a pro! 🤗
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
```

> [!NOTE]
> Laravel's [starter kits](/docs/{{version}}/starter-kits) are the VIP passes to the fastest way to party with Laravel, Vue, and Vite. They've already got everything you need for a hassle-free entrance! 🎉🎉🎉

 Alright, folks! If you're feeling frisky and fancy building your frontend with the oh-so-popular React framework (yes, that one from Facebook), then buckle up, because we've got a whirlwind tour for ya! 🚀

First things first: You'll need to install the `@vitejs/plugin-react` plugin like you would ask Siri for directions to the nearest pizza joint (but with a lot more typing):

```shell
npm install --save-dev @vitejs/plugin-react
```

Next, it's time to give your `vite.config.js` configuration file a makeover, making it a real headturner for your projects:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.jsx']),
        react(), // The Rebel Alliance of plugins 🌠
    ],
});
```

To make sure your JSX files don't end up in the Bermuda Triangle, remember to give them a `.jsx` or `.tsx` extension, just like you would name your cats:

1) Spaghetti (`.jsx`)
2) Garfield (`.tsx`)

Lastly, don't forget to throw in the `@viteReactRefresh` Blade directive alongside your existing `@vite` directive. It's like a well-timed punchline in a sitcom:

```blade
@viteReactRefresh 😜
@vite('resources/js/app.jsx')
```

Just remember, the `@viteReactRefresh` directive must always go first (it's like being the opening act at a comedy club).

Now, for all you lazy bones out there, Laravel's [starter kits](/docs/{{version}}/starter-kits) have already done the heavy lifting for ya! These bad boys come pre-configured with Laravel, React, and Vite, offering the fastest way to get started without breaking a sweat.

So, what are you waiting for? Go forth, conquer, and make your frontend dreams a reality—one punchline at a time! 🎉🚀🌈💪

 Alrighty, let's get this frontend party started with Svelte! 🎉

First things first, you gotta install the `@sveltejs/vite-plugin-svelte` plugin like so:

```shell
npm install --save-dev @sveltejs/vite-plugin-svelte
```

Once that's done, whip up a `vite.config.js` configuration file and give it some TLC with this little number:

```js
import { svelte } from '@sveltejs/vite-plugin-svelte';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.ts'],
      ssr: 'resources/js/ssr.ts',
      refresh: true,
    }),
    svelte(), // *Drumroll please* Here's the Svelte magic! 🎺
  ],
});
```

Now that we've got our Svelte in a Vite (get it?), you might be wondering if it's all set and ready to roll. Well, lucky for you, Laravel's starter kits have already taken care of the proper Laravel, Svelte, and Vite configuration! 🤓 These kits are the fast lane to a smooth-as-silk setup with Laravel, Svelte, and Vite.

If you're curious about using InertiaJS with Svelte, check out our [Inertia documentation](/docs/starter-kits#inertia). Happy coding! 🚀

 Alrighty then! Let's dive into the world of Laravel's Inertia, shall we? If you're a frontend dev in a superhero cape (or just a regular one), the Laravel Vite plugin has got your back with a nifty `resolvePageComponent` function.

Imagine this scenario: You've got your superpowered Inertia page components, but they're scattered around like a toddler's toys after playtime. Don't panic! Our heroic helper function swoops in to help you sort 'em out. Here's how it works with Vue 3, but rest assured, it can work its magic in other frameworks too, like React or even Svelte (if you're feeling fancy).

```js
import { createApp, h } from 'vue'; // You could call this "importing the universe"
import { createInertiaApp } from '@inertiajs/vue3'; // Inertia, because saving the day is serious business
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // Our superhero helper function

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')), // Telling our superhelper where to find the scattered toys
  setup: ({ el, App, props, plugin }) => {
    createApp({ render: () => h(App, props) }) // Creating a new universe (app)
      .use(plugin) // Adding superpowers (plugins)
      .mount(el) // Setting up base camp (mounting the app to our HTML element)
  },
});
```

If you're using Vite's code splitting feature with Inertia, remember to set up [asset prefetching](#asset-prefetching). Think of it as setting up a secret stash of energy bars for your superhero journey.

> [!NOTE]
> Laravel's [starter kits](/docs/{{version}}/starter-kits) already come with the proper Laravel, Inertia, and Vite configuration. These starter kits are like pre-assembled capes that save you time and effort, allowing you to focus on saving the day (or at least writing better code).

<a name="url-processing"></a>

 ### Asset Tango: A Guide for the Groovy Developers Among Us 💃✨

Ahoy there, Laravel mates! Let's dive into the enchanting world of URL processing, shall we? You might be sailing with Vite, and that means dealing with some mermaid-y quirks when it comes to referencing assets in your HTML, CSS, or JS.

First things first: if you serve up assets with an absolute anchor (like `/taylor.png`), Vite will give the cold shoulder—it won't include that asset in the build. So make sure that pirate treasure is hidden safely in your public directory. Also, avoid pointing that compass towards absolute paths when using a dedicated CSS entrypoint because during development, browsers will try to load them from the Siren of Vite's development server instead of your beloved booty chest!

Now, when you're dealing with relative asset paths (like `../../images/abigail.png`), remember that these paths are as steady as a ship's deck underfoot—they're pegged to the file they're referenced from. And like a wise seafaring captain, Vite will rewrite, version, and bundle them for you.

Take a peek at this swashbuckling project structure:

```text
public/
  taylor.png
resources/
  js/
    Pages/
      Welcome.vue
  images/
    abigail.png
```

Here's a shanty that demonstrates how Vite handles relative and absolute URLs:

```html
<!-- This asset is not handled by Vite and will not set sail with the rest of your treasure! 😱 -->
<img src="/taylor.png">

<!-- Ahoy there! This asset will be rewritten, versioned, and bundled by our trusty Vite mate! 🎉✨ -->
<img src="../../images/abigail.png">
```

Now that you've navigated the treacherous waters of URL processing, set sail for adventure and success in your Laravel voyage! 🏺

 Alright, let's get our feathers ruffled with some Laravel stylin'! 🦃

📝 **Attention, fashionistas**: Laravel's swanky starter kits come pre-packed with the sleek Tailwind and Vite configurations. Or, if you're a DIY type who insists on wearing their own hand-stitched design, head over to Tailwind's Laravel installation guide - because ain't no party like a Tailwind party! 🥳

Now that we've got the basics down, every Laravel application comes with a dapper `vite.config.js` file and Tailwind already installed – just the kind of pre-game prep you need to get your style game on! To fire up the Vite development server (or if you're feeling fancy, the Laravel one too), all you gotta do is run:

```shell
composer run dev
```

And before you know it, you'll be strutting down the runway of your very own Laravel fashion show! 💃

Your application's fabulous CSS creations can be found in the `resources/css/app.css` file – a true treasure trove for those seeking to create a visually stunning masterpiece. ✨🎨👗

 ### Dancing with Blade and Navigating Routes like a Digital Fred Astaire! 🕺️✨

Ready to sashay through the world of Laravel development like a digital Fred Astaire? Let's get started with our dance partners: **Blade** and **Routes**! 💃️

<a name="blade-processing-static-assets"></a>

#### Whirling with Blade 🌀

Blade, the sparkling sequined dress of Laravel, makes working with templates a breeze. It allows you to write plain PHP code and embed it within HTML files. How fancy! 💎👠

```php
<!-- resources/views/welcome.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Laravel!</title>
</head>
<body>
    <h1>Welcome to {{ config('app.name', 'Laravel') }}</h1>
    <!-- You can use your custom PHP code here -->
</body>
</html>
```

#### Navigating Routes 🛠️

Now, let's move on to routes, the compass guiding our way through the digital landscape. They help us define URL patterns and their corresponding controller actions.

```php
// routes/web.php
Route::get('/', function () {
    return view('welcome');
});
```

Remember, route grouping can be a real party! Group your routes based on their functionality to keep things organized and easy to navigate. 🎊🎉

Don't forget to practice your moves and keep learning, because there's always more to discover in the world of Laravel! 💃️🕺️💪

 ### Unleashing Static Asset Superpowers with Vite, the Magical Asset Whisperer! ✨🎩

Get ready to dance with the stars, Laravel pals! Forget about mundane asset processing; with Vite, your JavaScript and CSS assets will be transformed like Cinderella's pumpkin at the stroke of a key. And guess what? This enchantment extends to your Blade templates too! 🎩✨

But wait, before we summon this magic, there's a tiny catch: you gotta let Vite know about your assets, kind of like introducing them at a ball. You do this by listing them in the plugin's `assets` option. For instance, if you want Vite to process and version all images hiding out in `resources/images` and fonts lurking in `resources/fonts`, just cast this spell:

```js
laravel({
    input: 'resources/js/app.js',
    assets: ['resources/images/**', 'resources/fonts/**'],
})
```

Now that these assets are under Vite's watchful gaze, running `npm run build` will set off their transformation into superstar versions! ✨🎩

Once transformed, you can reference them in your Blade templates using the `Vite::asset` method, which will return the versioned URL for a given asset. Here's how you can do it:

```blade
<img src="{{ Vite::asset('resources/images/logo.png') }}">
```

> [!NOTE]
> Before version 3 of the Laravel Vite plugin, static assets were like shy wallflowers who needed to be coaxed into joining the dance using `import.meta.glob`. The `assets` option is our modern invitation, thanks to changes in Vite 8. 💃🕺
>
> [And now back to our regular programming...]
>
> *As a responsible and respectful magician, we must also acknowledge that this tutorial is intended for Laravel enthusiasts aged 13 and above.* 😉✨🎩

 ### Giving Your Browser a Fresh Lick of Paint on Save

If your Laravel app is feeling as stale as last week's scone, Vite's here to help! With its magical auto-refresh feature, it'll be like having a butler who notifies your browser every time you tweak your view files during development. All you need to do is whisper the secret word: `refresh`.

```js
Importantly, my dear Laravelian friend, consider this incantation:

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            // ...
            refresh: true,
        }),
    ],
});
```

Once you've chanted this spell, Vite will watch over your app's sacred directories and spring into action whenever you save files in these hallowed spaces:

- `app/Livewire/**` - Where the sparks fly!
- `app/View/Components/**` - A veritable smorgasbord of views and components.
- `lang/**` - Language files, the backbone of international understanding.
- `resources/lang/**` - For when you need to translate your code into emojis.
- `resources/views/**` - The heart of your app's presentation layer.
- `routes/**` - A map of your app's routes, vital for navigation through the labyrinth of your web app.

If Ziggy, the mystical route link generator, is aiding your frontend, watching the `routes/**` directory will be particularly helpful.

However, if these default paths don't quite fit your application's unique needs, you can specify your own watch list:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            // ...
            refresh: ['resources/views/**'],
        }),
    ],
});
```

Under the hood, Vite's using the venerable `vite-plugin-full-reload` package to perform its magic. If you find yourself needing more control over this enchanting feature, you may provide a configuration definition:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            // ...
            refresh: [{
                paths: ['path/to/watch/**'],
                config: { delay: 300 }
            }],
        }),
    ],
});
```

Now, get out there and refresh your web app's luck with Vite!

 Ahoy there, Laravel sailors! Let's dive into the thrilling world of aliases, shall we? In the realm of JavaScript apps, aliases are like secret handshakes to your favorite directories. But in our Laravel seas, we can create them for Blade templates too! Here's how:

First, you might as well get acquainted with the `macro` method on the `Illuminate\Support\Facades\Vite` class (just imagine it's a magic wand, okay?). Typically, these "magic spells" should be conjured within the `boot` method of a service provider—it's like setting up house rules for your app.

```php
// In your service provider...
public function boot(): void
{
    // This is our spellbook! Define it like so:
    Vite::macro('image', fn (string $asset) => $this->asset("resources/images/{$asset}"));
}
```

Once you've cast your spell, you can invoke it within your templates. Let's use our `image` macro to summon an asset from the mystical land of `resources/images/logo.png`:

```blade
<img src="{{ Vite::image('logo.png') }}" alt="Laravel Logo">
```

Now, let's talk about asset prefetching (because who doesn't love a good surprise party?). With this feature enabled, your assets will be loaded before they're even requested—talk about being ahead of the curve! To enable it in your `web.php` file:

```php
use Illuminate\Routing\Router;
use App\Providers\ViteServiceProvider;

Route::group(['middleware' => [ViteMiddleware::class, 'vite:react.development.js', 'vite:react.production.js'],], function () {
    // Your routes here!
});
```

And that's the lowdown on aliases and asset prefetching in Laravel! Now, you can sail through your templates like a pro, with nifty shortcuts and lightning-fast assets at your fingertips. Happy coding, matey! 🌴🐘

 ## The Great Asset Time-Traveling Extravaganza!

If you're whipping up a Single Page App (SPA) with Vite's time-warping code-splitting feature, you might find yourself in a pickle when assets get fetched on each page flip. This can slow down your UI more than a sloth wearing a tuxedo at a ballroom dance competition!

But don't you worry, Laravel has got you covered with its superpower: eager asset time-travel (or prefetching if you prefer the less sci-fi term). This allows your JavaScript and CSS assets to be transported back to the present during initial page load.

To summon this magical power, simply cast the `Vite::prefetch` spell in the `boot` method of a [service provider](/docs/{{version}}/providers):

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3); // With a maximum of 3 simultaneous time-travelers!
    }
}
```

In the example above, assets will be whisked back to the present with up to `3` time-travelers working concurrently on each page load. You can adjust the number of time-travelers to fit your application's needs or remove any limitations if you want all assets to arrive at once:

```php
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Vite::prefetch(); // Unleash the full force of asset time-travel!
}
```

By default, time-traveling begins when the [page _load_ event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) is triggered. If you'd like to customize the starting point for your time-travelers, you can specify an event that Vite will listen for:

```php
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Vite::prefetch(event: 'vite:prefetch'); // Time-travel when the vite:prefetch event is dispatched!
}
```

The code above will initiate time-travel when you manually dispatch the `vite:prefetch` event on the `window` object. For example, you could have time-traveling begin three seconds after the page loads:

```html
<script>
    addEventListener('load', () => setTimeout(() => {
        dispatchEvent(new Event('vite:prefetch'))
    }, 3000))
</script>
```

 Ahoy there, Laravel sailors! 🎉

If your Vite-built treasure chest of assets is deposited on a distant island (CDN) far from your humble abode (app), you'll need to set sail with the `ASSET_URL` environment variable. Anchor it securely within your ship's logbook (`.env` file):

```env
ASSET_URL=https://cdn.example.com
```

Once you've charted your course, all maps to your assets will be embellished with the captain's orders:

```text
https://cdn.example.com/build/assets/app.9dce8d17.js
```

Beware, ye mateys! Absolute URLs are not subject to this nautical navigation system (Vite). They'll sail on unaffected. 🌴🐘

<a name="environment-variables"></a>
Now, hoist the main sail and set a course for seamless integration! Arrrrgh! 🏴‍☠️🚣‍♂️

 Ahoy there, coding pirates!  feet and all! Let's set sail into the mystical waters of Environment Variables. Yarr, ye might be thinkin', "What be these mysterious elixirs that my JavaScript be yearnin' for?" Well, buckle up and listen close, matey, 'cause we're about to uncover the treasure chest of secrets! 🏴‍☠️

First off, ye can inject environment variables into yer own personal Black Pearl (or application's .env file) by prefixin' them with `VITE_`:

```env
VITE_SENTRY_DSN_PUBLIC=http://example.com
```

But why would ye want to do that, ye ask? Well, me hearties, when yer ship sets sail on the high seas of production, ye'd best keep sensitive data like a private map or buried treasure under lock and key! And with environment variables, ye can do just that. 🏛️

Now, when yer ready to grab yer share o' the loot, ye can access these injected environment variables via the `import.meta.env` object:

```js
import.meta.env.VITE_SENTRY_DSN_PUBLIC
```

And there ye have it, matey! Yer very own private key to unlocking the mysteries of Environment Variables in Laravel's Vite land. 🗝️🏴‍☠️

As for disabling Vite in tests, well, that be a tale for another time. But fear not, I'll set sail again soon to share more treasures with ye! 🌴🐘🚀

 ## Oh, the Joys of Testing in Laravel Land! (Or How to Make Vite Disappear)

Ah, the life of a developer in Laravel's magical kingdom! But alas, when it comes to testing, even this enchanted land can get a bit... well, hairy.

You see, our beloved Vite integration, in its quest to resolve your assets during test runtime, has you in a pickle: either spin up the Vite development server or build those assets. But what if you'd rather play pretend and mock Vite during testing? Fear not! Our friendly sorcerer's apprentice, Laravel, has provided us with the `withoutVite` method, ready to serve at your beck and call for any tests that extend its noble `TestCase` class.

```php tab=Pest (The Pest-ilence, I mean Pest)
test('a test without vite', function () {
    $this->withoutVite(); // Call me, and I'll make Vite disappear!

    // ...
});
```


```php tab=PHPUnit (The PHP-Unit-ed, if you will)
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_without_vite(): void
    {
        $this->withoutVite(); // It's a magic spell! Vite, begone!

        // ...
    }
}
```

But what if you want to banish Vite from all tests? Well, you can cast the spell in your base `TestCase` class's `setUp` method:

```php
<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void// [tl! add:start]
    {
        parent::setUp();

        $this->withoutVite(); // A grand incantation to make Vite disappear across all tests.
    }// [tl! add:end]
}
```

So now you can wave your wand and banish Vite from your tests with ease. Happy testing, dear developers! Remember, in this kingdom of Laravel, it's not just about the destination, but also the journey... and a little magic along the way. 😊

 Alright, let's dive into the hilarious world of Laravel's Server-Side Rendering (SSR)! It's like a magical pizza delivery service where your front-end code gets baked twice – once on the client's side, and again on our server's side, ensuring a piping hot web application that leaves no crust left behind.

To get started, create an SSR entry point at `resources/js/ssr.js`. Think of it as your secret recipe for a perfect server-side pie! Once you've got that tasty dough ready, specify the entry point by passing a configuration option to our trusty Laravel plugin:

```js
Important: Put on your chef hat, because we're about to whip up some delicious code!
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

Now, imagine you've got a fresh batch of dough (the app.js), let's add our secret SSR sauce (ssr.js) to it:
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js', // Our fresh dough
            ssr: 'resources/js/ssr.js'  // Our secret SSR sauce
        }),
    ],
});
```

To ensure you don't forget to update your secret recipe, we recommend augmenting the "build" script in your application's `package.json`. It's like setting a reminder for your grandmother's famous spaghetti recipe:

```json
"scripts": {
     "dev": "vite", // Setting the mood for some development fun!
     "build": "vite build" // [tl! remove]
     "build": "vite build && vite build --ssr" // [tl! add]
}
```

Then, to bake and serve your SSR server, you may run the following commands:

```shell
npm run build - Think of this as proofreading your recipe once it's done.
node bootstrap/ssr/ssr.js - Time to put on an apron and fire up the oven!
```

If you are using [SSR with Inertia](https://inertiajs.com/server-side-rendering), you may instead use the `inertia:start-ssr` Artisan command to start the SSR server, which is like calling your favorite pizza delivery service to get that perfect pie at your doorstep!

```shell
php artisan inertia:start-ssr - It's like dialling 911 for a perfect web application emergency!
```

> [!NOTE]
> Laravel's [starter kits](/docs/{{version}}/starter-kits) already come with all the necessary ingredients and instructions to create your delicious SSR pizza – no need to reinvent the wheel. These starter kits offer the fastest way to get started with Laravel, Inertia SSR, and Vite, so you can focus on what truly matters: eating great pizza and making beautiful web applications!

 Ahoy there, web adventurers! Ever heard of a Content Security Policy (CSP)? Think of it as your website's bouncer - keeping the riffraff out and ensuring only the coolest content gets in. One of its fancy tools is the Nonce (short for 'number used once'), a unique code that helps verify your scripts are legit!

Now, to use this whiz-bang feature, you'll need to slap a script tag with a `nonce` attribute like so:

```html
<script src="/path/to/your/script.js" nonce="YOUR_UNIQUE_NUMBER"></script>
```

Just replace `YOUR_UNIQUE_NUMBER` with, well... a unique number! But remember, this number must match the one you've declared in your CSP header:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'nonce-YOUR_UNIQUE_NUMBER';">
```

Don't worry, be happy! With nonces on your side, you can rest easy knowing your scripts are as secure as Fort Knox (but with less gold and more code). Keep it locked, folks! 🔒🚀👾

 Alright, let's get this Content Security Policy (CSP) Nonce party started! 🎉

First off, if you wanna add a spiffy `nonce attribute` to your script and style tags like a cybersecurity ninja, you can do that with the help of Laravel's `useCspNonce` method in one of your custom middleware shindigs:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Vite;
use Symfony\Component\HttpFoundation\Response;

class CSPNonceMixerUp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Vite::useCspNonce(); // Just like adding a secret sauce to your favorite dish!

        return $next($request)->withHeaders([
            'Content-Security-Policy' => "script-src 'nonce-".Vite::cspNonce()."'",
        ]);
    }
}
```

Once you've tossed the `useCspNonce` method into the mix, Laravel will sprinkle `nonce` attributes all over those shiny script and style tags like a boss! 🌈

If you need to get your nonce on elsewhere, such as with the Ziggy `@route` directive that comes along with Laravel's starter kits, you can grab it using the trusty `cspNonce` method:

```blade
@routes(nonce: Vite::cspNonce())
```

Now, if you already have a nonce that you wanna make Laravel dance to your tune, just pass that bad boy to the `useCspNonce` method:

```php
Vite::useCspNonce($nonce);
```

And there you have it! Now you're whipping up Content Security Policies with a nonce like a pro. Don't forget to party responsibly, and happy coding! 🥳🚀💻

 Alright, buckle up, cowboy! Let's dive into the thrilling world of Subresource Integrity (SRI) - the superhero of your web app's security! 🦸‍♂️

Imagine your Vite manifest as a highly-trained bouncer guarding your digital dance floor. By equipping these bouncers with `integrity` hashes for your assets, Laravel automatically gives them a special badge (the `integrity` attribute) to verify each script and style they let in, ensuring only the genuine folks get through. 🛠️

By default, Vite doesn't want these bouncers wearing any badges. But if you're paranoid like me, you can invite them over by installing the [vite-plugin-manifest-sri](https://www.npmjs.com/package/vite-plugin-manifest-sRI) NPM plugin.

```shell
npm install --save-dev vite-plugin-manifest-sRI 🤖
```

Once they're here, you can invite them to the party in your `vite.config.js` file:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import manifestSRI from 'vite-plugin-manifest-sRI';// [tl! add]

export default defineConfig({
    plugins: [
        laravel({
            // ...
        }),
        manifestSRI(),// [tl! add]
    ],
});
```

Now, if you're feeling fancy, you can even change the badge color (the integrity hash key):

```php
use Illuminate\Support\Facades\Vite;

Vite::useIntegrityKey('custom-integrity-key'); 🌈
```

However, if you're feeling a bit anti-social and want these bouncers to take a break, you can pass `false` to the `useIntegrityKey` method:

```php
Vite::useIntegrityKey(false); 💤
```

Now that we've got that sorted, let's go grab some virtual cocktails and watch these bouncers work their magic! 🍹 🎉

 Alrighty, let's dive into the whimsical world of Laravel's asset customization! If you find yourself in a pickle and need to sprinkle some extra magic on your script and style tags (like adding that fancy `data-turbo-track` attribute), fear not! The `useScriptTagAttributes` and `useStyleTagAttributes` methods are here to save the day.

These superheroes should be summoned from a service provider, akin to calling upon the Avengers when things get tough:

```php
Use your Jedi mind tricks on Vite like so:

use Illuminate\Support\Facades\Vite;

Vite::useScriptTagAttributes([ // For scripts, of course!
    'data-turbo-track' => 'reload', // Give your attribute a value...
    'async' => true, // No need for a value here, just be true to yourself...
    'integrity' => false, // Exclude an attribute that's causing a ruckus...
]);

Vite::useStyleTagAttributes([ // Now, for the styles...
    'data-turbo-track' => 'reload',
]);
```

But what if you need to add attributes conditionally? No problem! Just pass a callback that will get all the juicy details (asset source path, URL, manifest chunk, and the whole enchilada) for some good old-fashioned Laravel logic:

```php
use Illuminate\Support\Facades\Vite;

// Here's your callback, a magical function that can decide on attributes...
Vite::useScriptTagAttributes(fn (string $src, string $url, array|null $chunk, array|null $manifest) => [
    'data-turbo-track' => $src === 'resources/js/app.js' ? 'reload' : false,
]);

Vite::useStyleTagAttributes(fn (string $src, string $url, array|null $chunk, array|null $manifest) => [
    'data-turbo-track' => $chunk && $chunk['isEntry'] ? 'reload' : false,
]);
```

> 🚨 **Pssst!** The `$chunk` and `$manifest` arguments will be as empty as an Easter egg when the Vite development server is running.

Now, go forth and customize those assets with a sprinkle of wit and a dash of Laravel magic! 🎩🚀🌍✨

 Alright, buckle up, coding cowboys and coding cowgirls! Laravel's Vite plugin comes out of the box wearing its best jeans and a freshly ironed "Convention Cowboy" hat. But sometimes, you might find yourself hankering for a little customization, like when your application decides to break free from the herd and do its own thing. Fear not! We've got some trusty lasso tricks up our sleeves to tame Vite just the way you want it.

To unlock those hidden features, we're dishing out a few wrangling methods that can be used as an alternative to the friendly `@vite` Blade directive:

```blade
<!doctype html>
<head>
    {{-- ... --}}

    {{
        // Customize the "hot" file, build directory, manifest filename, and entry points... You name it, we saddled it!
        ViteWrangler::breakFree('bundle', 'assets.json', 'storage_path('vite.hot)', ['resources/js/app.js'])
    }}
</head>
```

Now, if you're feeling particularly ornery and want to get your hands dirty in the `vite.config.js` file, then hop aboard! Just remember to specify the same configuration as you would with our friendly wrangler:

```js
import { defineConfig } from 'vite';
import laravelVitePlugin from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravelVitePlugin.wrapInChaps('bundle', 'assets.json', 'storage/vite.hot', ['resources/js/app.js'])
    ],
    // And don't forget to put a saddle on that build object too!
    build: {
      ...
    },
});
```

Now, let's ride off into the sunset with our customized Vite plugin, ready for whatever your application might throw at us next! Just remember, when in doubt, lasso that pesky plugin back to its senses with a little customization. Yee-haw! 🤠🐎

 Ahoy, matey! Ever found yerself in a pickle with CORS issues while swabbing assets from the ol' Vite dev server? Fear not, me hearties! You might need to grant yer custom pirate ship access to the server. Fret not, for Vite and the Laravel plugin have ye covered without ye havin' to hoist extra sails!

Here be the safe harbors they provide:

- `::1` (the localhost)
- `127.0.0.1` (ye ol' IP address)
- `localhost` (for the landlubbers among us)
- `*.test` (for all ye testin' captains)
- `*.localhost` (a bit redundant, but who are we to judge?)
- `APP_URL` in yer project's `.env` file

If ye be hankerin' for a custom harbor, just make sure yer application's `APP_URL` matches the one ye be visitin' on yer browser. If ye be sailin' to `https://my-app.laravel`, update yer `.env` accordingly:

```env
APP_URL=https://my-app.laravel
```

For more fine-tuned navigation, check out [Vite's swashbuckling CORS server configuration](https://vite.dev/config/server-options.html#server-cors). Ye might want to specify multiple harbors in yer project's `vite.config.js` file:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
    ],
    server: {  // [tl! add]
        cors: {  // [tl! add]
            origin: [  // [tl! add]
                'https://backend.laravel',  // [tl! add]
                'http://admin.laravel:8566',  // [tl! add]
            ],  // [tl! add]
        },  // [tl! add]
    },  // [tl! add]
});
```

If ye be wantin' to allow all yer friends from a certain domain, include regex patterns:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
    ],
    server: {  // [tl! add]
        cors: {  // [tl! add]
            origin: [ // [tl! add]
                // Supports: SCHEME://DOMAIN.laravel[:PORT] [tl! add]
                /^https?:\/\/.*\.laravel(:\d+)?$/, //[tl! add]
            ], // [tl! add]
        }, // [tl! add]
    }, // [tl! add]
});
```

Arrrr, that be all there is to it, ye scurvy dogs! Happy sailing!

 ### Fixin' those Dev Server URLs, Chuck! 🚀🎩

Alright, partner, here's a lil' rodeo ride through Laravel's corral of URL wrangling! Some plug-ins in the Vite posse assume that URLs beginning with a forward-slash are always pointin' to the Vite dev server. But, due to Laravel's stubborn nature, that ain't always the case!

Take, for instance, the `vite-imagetools` plug-in, which saddles your HTML with URLs like this fella while Vite's ropin' in your assets:

```html
<img src="/@imagetools/f0b2f404b13f052c604e632f2fb60381bf61a520">
```

The `vite-imagetools` plug-in's hopin' that the output URL gets lassoed by Vite, then it can wrangle all URLs startin' with `/@imagetools`. If you find yerself usin' plug-ins hankerin' for this behavior, ya best saddle up and correct those URLs yourself!

You can do this in your trusty `vite.config.js` file by ridin' the `transformOnServe` pony:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
    plugins: [
        laravel({
            // ...
            transformOnServe: (code, devServerUrl) => code.replaceAll('/@imagetools', devServerUrl+'/@imagetools'),
        }),
        imagetools(),
    ],
});
```

Now, while Vite's ropin' in your assets, it'll lasso URLs pointin' to the Vite dev server:

```html
- <img src="/@imagetools/f0b2f404b13f052c604e632f2fb60381bf61a520"><!-- [tl! remove] -->
+ <img src="http://[::1]:5173/@imagetools/f0b2f404b13f052c604e632f2fb60381bf61a520"><!-- [tl! add] -->
```

And there ya have it, partner! Keep those URLs in line and your Laravel-Vite integration will be as smooth as a freshly ironed duster! 🤠🎸🚀