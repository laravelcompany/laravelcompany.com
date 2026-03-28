 # The Laravel Play-Doh Kit: Your Gateway to Fun and Fancy Web Development! 🎨🌐

## Welcome to the Laravel Playground! 🎉

- [Getting Started](#getting-started)
- [Setting Up Shop with a Play-Doh Kit](#setting-up-shop)
- [Our Colorful Selection of Play-Doh Kits](#colorful-selection)
    - [Clay-tastic React](#clay-tastic-react)
    - [Flexible Svelte](#flexible-svelte)
    - [Moldable Vue](#moldable-vue)
    - [Lively Livewire](#lively-livewire)
- [Customizing Your Play-Doh Creations](#customization)
    - [Clay-stastic Customization for React](#clay-stastic-customization)
    - [Flexible Svelte Sculpts](#flexible-svelte-sculpts)
    - [Moldable Vue Models](#moldable-vue-models)
    - [Lively Livewire Layers](#lively-livewire-layers)
- [Guard Your Play-Doh Masterpieces with Security Features!](#security-features)
    - [Enabling and Disabling the Fun Police](#enabling-and-disabling-fun-police)
    - [Customizing User Birth and Password Resets](#customizing-actions)
    - [Two-Factor Authentication: Because one factor just isn't enough!](#two-factor-authentication)
    - [Rate Limiting: Preventing too much fun from becoming a nuisance](#rate-limiting)
- [WorkOS AuthKit: Adding a Secret Agent to Your Play-Doh Team!](#workos)
- [Inertia SSR: Time Travel for Your Play-Doh Creations!](#inertia-ssr)
- [Community Contributed Play-Doh Kits](#community-contributed)
- [Frequently Asked Questions: Answers to Your Play-Doh Conundrums](#faqs)

<a name="getting-started"></a>

Now, let's get our hands dirty and dive into the world of Laravel web development! 💥🌈🚀

 Welcome to the Laravel Jumpstart Program! Instead of diving into the deep end of coding, we're here to lend a life jacket (or in this case, a starter kit). These kits will give your next Laravel project a solid foundation with pre-built routes, controllers, views, and even a security detail courtesy of Laravel Fortify. Authentication has never been so effortless!

But fear not, pirates who prefer setting sail on their own vessel, you're more than welcome to build your Laravel ship from scratch by installing a clean copy of our software. Go wild, we won't judge (or maybe we will, but only in the most supportive way possible). Either way, we have faith that you'll create something spectacular!

Now, hoist the sails and let's get navigating... or coding, whatever floats your boat! 🛶🚀

 Alrighty, let's get this party started! 🎉

First things first, you need to ensure PHP and the Laravel CLI tool are installed on your machine like a digital-age blacksmith forging his tools. If PHP and Composer are already hanging out in your toolbox, then it's time to invite the Laravel Installer CLI tool to join the fun:

```shell
composer global require laravel/installer 🏰👋
```

Now that we have a housewarming party going for our new guest, let's create a fresh Laravel application using the Laravel Installer CLI. This is where you get to pick your starter kit – think of it as choosing the perfect theme for your digital abode:

```shell
laravel new my-app 🏡🛋️
```

Once your Laravel application has been built, it's time to deck out its frontend with some serious decor. Pop over to your project folder and install its dependencies via NPM while sipping on a fresh brew (because why not?):

```shell
cd my-app
npm install && npm run build 🎨☕️
composer run dev 🛠️🚀
```

Now that the Laravel development server is up and running, your application will be accessible in your web browser at [http://localhost:8000](http://localhost:8000) – just in time for you to show it off at the next neighborhood tech meetup! 🤝💻

<a name="available-starter-kits"></a>

Wondering about those starter kits? Here's a little sneak peek:

1. **Breeze**: A minimal, modern, and responsive UI for your Laravel applications. It's like the little black dress of web development – versatile, timeless, and always in style!
2. **UI Kit**: A full-featured UI package that includes forms, buttons, modals, and more. Think of it as a swiss army knife for building sleek Laravel apps.
3. **Vue.js**: For those who fancy frontend frameworks, this starter kit includes Vue.js and Inertia.js to build interactive, single-page applications with ease. It's like having the best of both worlds – the power of Laravel and the elegance of Vue!

 Ahoy there, code pirates! Fancy setting sail on a Laravel adventure? Well, buckle up and prepare for takeoff as we present our dazzling array of starter kits! Aye aye, these aren't your ordinary, run-of-the-mill kits. These are the spice rack of web development, each one adding that special something to your Laravel voyage!

<a name="react"></a>
**React Starter Kit** (The Swashbuckler's Delight)
If you're itching for a modern UI with a dash of JavaScript magic, this kit's got your back. It'll have you sailing through React components like a pro, leaving a trail of pixel-perfect interfaces in your wake! Plus, it comes with Laravel's mighty backend to keep the ship afloat while you charm the users with your sea shanties (er, user interfaces).

<a name="vue"></a>
**Vue.js Starter Kit** (The Master Mariner's Mate)
For those who prefer a simpler yet still nautical journey, this kit is perfect for you. It steers you through the calmer waters of Vue.js development, helping you construct a robust ship that can weather any storm (of user requests). And once again, Laravel's powerful backend will be your trusty compass, guiding you to port and keeping the seas smooth as silk.

<a name="plain"></a>
**Plain PHP Starter Kit** (The Old Salt)
Ah, the classic choice for those who enjoy a more traditional approach to coding. This kit strips away the fancy UI frameworks and lets you build your Laravel masterpiece using plain old PHP. It's like sailing on a wooden galleon, but with all the modern conveniences of a sleek cruise liner! And remember, just because it's simple doesn't mean it won't stand up to the test of time (or users).

<a name="laravel-breeze"></a>
**Laravel Breeze** (The First Mate's Favorite)
This kit is for those who want to jump right in and start swimming in Laravel's crystal-clear waters. It sets you up with a beautiful authentication system, making it easy as pie to manage user accounts on your ship (er, application). And don't worry about getting lost at sea – this kit will keep you well-anchored with essential features like email verification and password reset functionality.

<a name="inertia"></a>
**Inertia.js Starter Kit** (The Corsair's Companion)
If you fancy yourself a modern-day Captain Ahab, chasing the white whale of seamless SPA experiences, this kit is your ticket! It takes Laravel to new depths by combining it with Inertia.js for lightning-fast, single-page application development. And don't fret about getting tangled in a web of complexities – this kit keeps things simple and easy to navigate, like a well-maintained ship's deck.

So there you have it, mateys! Five starter kits to choose from, each offering a unique Laravel adventure. Whether you're a seasoned sailor or just setting sail for the first time, we've got a kit that will help you conquer the vast oceans of web development. Fair winds and following seas!

 ### Laravel's Party Time Aid Kit (PTAK) for React Revelry! 🎉🎊🚀

Ahoy there, party people! 🌈🥳 Our PTAK is the life of the Laravel bash, providing a solid, groovy foundation to spin up those Laravel soirees with a React rhythm using [Inertia](https://inertiajs.com) - think of it as the perfect dance partner!

With Inertia, you can whip up snazzy, single-page React shindigs just like the old-school server-side routing and controllers used to throw! Now you've got the frontend flair of React dancing in the limelight alongside the remarkable backend brawn of Laravel, all whirring together with the super-fast Vite dancefloor! 🕺️💃

So what's this PTAK packing? Oh, just a dash of React 19, a smidgeon of TypeScript, a pinch of Tailwind, and a splash from the [shadcn/ui](https://ui.shadcn.com) cocktail shaker!

Now let's party like it's... well, you know! 🕺️💃🚀

 ### Svelte Sorcery! 🔮✨

Welcome to our enchanted Svelte box of tricks, perfect for brewing up magical Laravel apps with a spellbinding Svelte frontend, courtesy of the mystical Inertia potion! 🤓🌈

Inertia transforms you into a sorcerer capable of crafting bewitching, single-page Svelte spells using age-old server-side incantations and controllers. With this power at your fingertips, you can bask in the frontend enchantment of Svelte while harnessing the formidable backend prowess of Laravel and the blazingly fast Vite transmutation magic! 💼🚀

Our Svelte starter kit is armed with Svelte 5, TypeScript, Tailwind, and the mystical [shadcn-svelte](https://www.shadcn-svelte.com/) component library - an arsenal that guarantees you'll be casting enchantments like a pro! 🌈🏹

So grab your wand, sprinkle some code, and let the Svelte Sorcery begin! ✨💫🚀

 ### BFF (Best Frontend Friends Forever) Kit

Ahoy there, brave Laravel coder! Welcome to our BFF Kit – the magical gateway to a splendiferous adventure in crafting Laravel apps with a Vue frontend, courtesy of our pal Inertia! 🎉🌟

Inertia's like that cool sidekick who helps you build sleek, single-page Vue apps while keeping it old-school with server-side routing and controllers. Why? So you can bask in the frontend glow of Vue, savor the backend prowess of Laravel, and revel in the blazing fast compilation speed of the enchanting Vite! 🦄🚀

Our BFF Kit deploys the Vue Composition API, TypeScript (the programming language for superheroes), Tailwind (because who doesn't love customizing their cape?), and the [shadcn-vue](https://www.shadcn-vue.com/) component library – a treasure trove of shiny components to embellish your app like a unicorn at a glitter party! ✨🌈

<a name="livewire"></a>
Now, aren't you feeling ready to conquer the Laravelverse with style and panache? 🎩💥 Let's get started! 🚀

 ### Strap on Your PHPinator Cloak! 🚀🧙‍♂️

Welcome to our Livewire Launchpad, the magical portal for whipping up Laravel applications with a dash of pizzazz and a sprinkle of PHP magic courtesy of [Laravel Livewire](https://livewire.laravel.com)! 🍕🔮

Livewire is our friendly sorcerer's apprentice, empowering you to weave dynamic, responsive frontend spells without even a broomstick's worth of JavaScript! It's the perfect potion for teams who've been bewitched by Blade templates and are seeking a simpler alternative to the cauldron-full of single-page app brews like React, Svelte, and Vue.

Our Livewire Launchpad conjures up Livewire, Tailwind, and the [Flux UI](https://fluxui.dev) spellbook of components - together they cast a spellbinding user interface! 🎩🔮✨

<a name="starter-kit-customization"></a>

### Customize Thy Cauldron, Young Sorcerer 🧹🛠️

Now, you may ask: "But how do I brew my own custom potions?" Fear not! Our Livewire Launchpad comes complete with a potion-mixing guide to help you concoct the perfect blend for your very own Laravel applications. So, gather 'round and let's get this brewing! 🍹🚀✨

 ### The Art of Tailoring Your Laravel Masterpiece 🧵🎨

Welcome, my dear artisans! It's time to take your freshly baked Laravel loaf and customize it with the frosting of your dreams. Let's dive into the world of personalization and make this bread truly yours! 🍞💄

<a name="react-customization"></a>

#### React Customization ✨🕺

First, let's spice up our React components. We know you're a style icon, so why not dazzle your users with custom props and styles? Here's how:

1. **Component Registration**: Register your new component in Laravel's built-in VueJS registration system. It's like joining the fashion police squad! 👮‍♀️🕵️‍♂️

2. **Prop Definitions**: Define custom props for your components, so you can pass in those fabulous user preferences without breaking a sweat. 💅🏿✨

3. **CSS Styling**: Use CSS to doll up your components with the latest design trends and make them pop like a freshly-baked soufflé. 🥛🍴💃

<a name="event-dispatching"></a>

#### Event Dispatching and Listening 📣🎶

Now that our components are looking fabulous, let's bring them to life with events! This is where the real magic happens:

1. **Dispatching an Event**: Throw an event party by dispatching a custom event from your component. Invite other components to join the fun! 🎉🎊🤝

2. **Listening for Events**: Register to listen for those enticing events and react accordingly. This is like being a secret agent, always ready to respond to unexpected situations! 🕵️‍♀️🕵️‍♂️🔍

<a name="service-providers"></a>

#### Service Providers 🧙‍♀️💼

Next up, let's get our magical wands ready! Service providers help us enchant our Laravel application with additional functionality:

1. **Creating a Service Provider**: Whip up your own service provider by extending the `ServiceProvider` base class. It's like baking a cake from scratch! 🎂🍰🌈

2. **Bootstrap and Bind Methods**: In the boot method, sprinkle in some initialization magic to set things up just right. Then, bind services to containers using the `bind` method, making your application more organized than a well-stocked pantry! 🥘🏺🍽

<a name="mix"></a>

#### Mixing It Up with Laravel Mix 🎯💥

Lastly, let's add some pizzazz to our application with Laravel Mix:

1. **Setting up Laravel Mix**: Initialize Laravel Mix by running the `npm install` and `npm run production` commands. This sets your development environment ablaze with modern tooling! 🔥💥🚀

2. **Webpack Configuration**: Modify your Webpack configuration to process CSS, JavaScript, and other assets like a pro. It's like being a master chef in the world of web development! 👩‍🍳🍽🕺

Remember, customization is all about making Laravel your own, so go ahead and let your creativity shine! Now, let's get baking (or rather, coding)! 🍞💻🚀

 Ahoy there, matey! Buckle up for a swashbuckling tour of our Laravel React treasure chest! Inside, you'll find our pirate-ship starter kit, captained by Inertia 2, manned by the gallant React 19, and dressed to impress with Tailwind 4. Oh, and there's a swanky UI from shadcn/ui, because every good ship needs a bit of bling!

Just like Captain Jack Sparrow navigating his way through a sea of code, you'll find the majority of your front-end treasure hoard in the `resources/js` directory. Feel free to pillage and plunder to your heart's content, customizing the looks and behaviors of your application to make it your own pirate ship!

```text
resources/js/
├── components/    # Reusable React components (like a parrot that can talk in many ways)
├── hooks/         # React magic that makes things happen (walking the plank on command)
├── layouts/       # The grand design of your application (the ship's blueprints)
├── lib/           # Utility functions and configuration (navigational charts and compass)
├── pages/         # Page components (each room on the ship)
└── types/         # TypeScript definitions (maps to help navigate the pirate lingo)
```

To acquire more shadcn treasures, first set sail for their website: <https://ui.shadcn.com>. Once there, identify the loot you wish to claim and bring it aboard with a hearty `npx` command:

```shell
npx shadcn@latest add switch
```

Once the plunder is on board, deposit it in the appropriate treasure chest (`resources/js/components/ui/switch.tsx`) and use it to your heart's content throughout your pages!

```jsx
import { Switch } from "@/components/ui/switch"

const MyPage = () => {
  return (
    <div>
      <Switch />
    </div>
  );
};

export default MyPage;
```

Arrr, that's all there is to it, matey! Now set sail for adventure and make your Laravel React app the pirate ship of your dreams!

 Ahoy there, Laravel-loving coder! π Let's dive into the world of React layouts, where choices are as plentiful as PHP functions (and just as delightful). π The starter kit comes with two main styles to suit your design preference: the "sidebar" and the "header". Now, you might be wondering which one will make your app look like a Pinterest board or an old-school Netflix interface. Well, let's help you switch it up, shall we?

The sidebar layout is the default, but if you fancy a change of scenery (or screen real estate), all you need to do is tinker with the layout being imported at the top of your application's `resources/js/layouts/app-layout.tsx` file. Here's a little magic trick for you:

```js
// π± You've been using the sidebar layout (default). Let's switch to the header layout!
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout'; // [tl! remove, awww noo]

// βΊοΈ Here it is! Header layout activated!
import AppLayoutTemplate from '@/layouts/app/app-header-layout'; // [tl! add, yaaas queen!]
```

Remember: with great power comes great responsibility. So, don't be afraid to experiment and find the perfect fit for your app. π

 Oh, the sidebar shindig! We've got three dapper suits for this dance floor: the classic sidebar tux (the default), the slightly-off-center inset suit (the 'inset'), and the oh-so-trendy floating sequins (the 'floating'). To swap your look, just pop into `resources/js/components/app-sidebar.tsx` for a little fashion update:

```text
<Sidebar collapsible="icon" variant="sidebar"> [Style police: Not a step out of line!]
<Sidebar collapsible="icon" variant="inset"> [Step and repeat: Catch me in the 'inset']
```

Don't worry, no one will mistake you for an imposter at the Laravel prom with these sharp choices. 🕺🏽💃🏽

 Ahoy there, coders! Ever found yourself in a pickle trying to spruce up your Laravel login and register pages like a digital Barbie dreamhouse? Well buckle up, because we've got three fabulous layout variants that'll make your authentication pages as stylish as a Kardashian wedding!

1. **The Simple Life** - For those who believe less is more, this minimalistic design will keep things clean and uncluttered, perfect for when you want to focus on the important stuff (like loginin' and registerin').

2. **Card Shark** - If you're all about those symmetrical lines and crisp edges, then this grid-based layout is the one for you! It's like a deck of cards come to life...on your screen.

3. **Split Personality** - Want to mix things up? This split-screen design will have you dancing on both sides (of the login and registration form). It's the perfect blend of function and fashion.

To switch up your authentication look, all you need to do is modify the layout that's imported at the top of your application's `resources/js/layouts/auth-layout.tsx` file:

```js
// For a Simple Life, remove this line:
import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout'; // [tl! remove]

// To get that Card Shark style, add this instead:
import AuthLayoutTemplate from '@/layouts/auth/auth-card-layout'; // [tl! add]

// Or if you're feeling adventurous and want to Split it up, do this:
import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout'; // [tl! add]
```

Now get out there and make those authentication pages shine brighter than a Kardashian's diamond collection! 💎🚀🚀

 Ahoy there, Captain Coder! Dive into the swashbuckling world of our Svelte starter kit - a treasure chest brimming with Inertia 2, Svelte 5, Tailwind, and that shiny [shadcn-svelte](https://www.shadcn-svelte.com/). It's not just a pirate ship, it's an all-inclusive customization castle!

Most of the swashbuckling action takes place in the `resources/js` directory - think of it as the plank where you walk to modify the appearance and behavior of your application like a true buccaneer.

```text
resources/js/
├── components/    # Stow away reusable Svelte components, great for sharing rum with friends!
├── layouts/       # Set sail on application layouts, to chart the course of your UI
├── lib/           # Utility functions and configuration, the map and compass of your voyage
├── pages/         # Page components, the cargo hold of your user interface adventures
└── types/         # TypeScript definitions, the parchment for documenting your pirate's life
```

To launch a new shadcn-svelte component onto your ship, you'll need to first [locate your desired cannonball](https://www.shadcn-svelte.com). Once you've aimed and fired with `npx`, the command will sail the freshly published component into `resources/js/components/ui/switch/switch.svelte`. Now, hoist that new flag high and use it in any of your ports!

```svelte
<script lang="ts">
    import { Switch } from '@/components/ui/switch'
</script>

<div>
    <Switch />
</div>
```

Ah, aren't you feeling like a seasoned Svelte swashbuckler already? Happy coding, matey! 🌺🏴‍☠️📜

 Ahoy there, intrepid Laravel-Svelte explorers! 🌴🛠️

First off, let me introduce you to our pirate ship's grand interiors - The Svelte Starter Kit! But don't worry, unlike most ships, these accommodations come with not one but two main layouts to set your nautical heart aflutter. 🏰✨

We've got the classic "Sidebar" layout (the default, like Captain Jack Sparrow) and the swashbuckling "Header" layout (for those who prefer a more modern, open deck look). To switch between the two, all ye need do is fire up your editor and sail into `resources/js/layouts/AppLayout.svelte`.

Just swap out this line:
```js
import AppLayout from '@/layouts/app/AppSidebarLayout.svelte'; // [tl! remove]
```
with a little bit of buccaneer magic...
```js
import AppLayout from '@/layouts/app/AppHeaderLayout.svelte'; // [tl! add]
```

Now, as the captain would say, "Yarr, you've just changed the course of our pirate vessel!" 🤝🌈 And that's a wrap on your humble layout guide - fair winds and following seas to ye! 🚀🌈

 Alright, let's dive into the world of Laravel sidebars where we serve up more than just your morning coffee! Here, you'll find three mouthwatering options: the Classic Sidebar (aka Grandma's Recipe), the Inset Sidebar (hidden gem), and the Floating Sidebar (the mysterious UFO).

To switch between these delectable choices, all you need is a quick visit to `resources/js/components/AppSidebar.svelte`. Open the door to your new favorite sidebar by replacing this line:

```text
<Sidebar collapsible="icon" variant="sidebar"> [tl! remove]
```

With one of these tantalizing alternatives:

1. If you're a traditionalist, keep it simple with the Classic Sidebar:

```text
<Sidebar collapsible="icon" variant="sidebar"> [tl! remain]
```

2. For those seeking something hidden but flavorful, opt for the Inset Sidebar:

```text
<Sidebar collapsible="icon" variant="inset"> [tl! add]
```

3. Lastly, if you're feeling adventurous, give the Floating Sidebar a whirl (beware of UFO sightings):

```text
<Sidebar collapsible="icon" variant="floating"> [tl! add]
```

Enjoy your Laravel sidebar adventures!

 Ahoy there, intrepid developer! Dive into the wonderful world of Laravel's Svelte starter kit, where even your authentication pages are a party waiting to happen! Whether you're logging in or signing up, our kit serves up three scrumptious layout variants: "simple", "card", and "split".

So, how do you switch things up like a DJ changing beats? Easy peasy! Navigate over to your application's `resources/js/layouts/AuthLayout.svelte` file, and change the imported dance floor. Here's where you can mix and match:

```js
import AuthLayout from '@/layouts/auth/AuthSimpleLayout.svelte'; // [tl! remove this dancefloor]
import AuthLayout from '@/layouts/auth/AuthSplitLayout.svelte'; // [tl! add some disco balls and strobe lights]
```

And that's the jive talkin', code-slangin' lowdown on customizing your Laravel Svelte kit's authentication page layouts! Now go forth and create a dance floor that dazzles, all while securely authenticating users. Who knew coding could be this much fun? 🎉💃🕺️

 ### Vue, Baby! 🚀

Welcome to our super-duper, state-of-the-art Vue playground! Built with Inertia 2, Vue 3 Composition API, Tailwind, and a dash of [shadcn-vue](https://www.shadcn-vue.com/). It's like the ultimate DIY kit for your next interstellar app adventure!

Much like a well-stocked candy store, all the backend and frontend goodies are nestled right within your application, ready to be customized to your heart's delight.

Most of the fun stuff is hidden in the `resources/js` directory (think Willy Wonka's chocolate factory). Feel free to dive in and tweak any code to make your app as unique as a unicorn-flavored gummy bear:

```text
resources/js/
├── components/    # Reusable Vue components, like those multi-purpose candy molds
├── composables/   # Vue magic tricks / hooks, because who doesn't love a good illusion?
├── layouts/       # App wrappers, to keep your candies organized and presentable
├── lib/           # Utility functions and configuration, the secret ingredient recipe book
├── pages/         # Page components, the scrumptious treats themselves
└── types/         # TypeScript definitions, for when you want to get a bit more technical
```

To introduce new shadcn-vue components into the mix, first locate your desired treat (just like finding that golden ticket) at [shadcn-vue.com](https://www.shadcn-vue.com). Then, invite it to the party using `npx`:

```shell
npx shadcn-vue@latest add switch
```

In this case, the command will whisk the Switch component straight into `resources/js/components/ui/Switch.vue`. Once the newcomer has settled in, you can start using it across your pages:

```vue
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
</script>

<template>
    <div>
        <Switch />
        <!-- Feel free to add your own flavor, like chili or bubblegum! -->
    </div>
</template>
```

<a name="vue-available-layouts"></a>
And if you're feeling extra fancy, here's a quick guide to our available layouts (like choosing the perfect wrapper for your homemade chocolates):

* `resources/js/layouts/AppLayout.vue`: The grand master, wrapping everything together
* `resources/js/layouts/Authenticated.vue`: For those exclusive, password-protected treats
* `resources/js/layouts/GuestLayout.vue`: For the free samples and tasters, no strings attached!

 Alright, Laravel coders! Ready to get your Vue on? We've got two fabulous layouts for you to choose from - think of it as a pick 'n mix for your web app!

1. The ever-popular "Sidebar" layout (the default diva) is here to keep things organized and structured, just like your favorite 80s sitcom episode.
2. Or if you're more into that minimalist Scandinavian design aesthetic, we present to you: the sleek, modern "Header" layout. It's perfect for when you want to give your app a fresh haircut and feel like taking control of your web-life with a trendy new do!

To switch things up, all you need to do is open your application's `resources/js/layouts/AppLayout.vue` file (you can think of it as the dance floor where all the elements come together) and make a simple change in the import section:

```js
// If you fancy a sidebar, keep this line:
import AppLayout from '@/layouts/app/AppSidebarLayout.vue'; // [tl! remove]

// But if headers are more your thing, go for this instead:
import AppLayout from '@/layouts/app/AppHeaderLayout.vue'; // [tl! add]
```

Remember, it's all about expressing yourself and making your app the belle of the ball! Enjoy! 🎉💃🕺

 Ahoy there, Laravel coders! Shake off those dusty keyboards and prepare to dive into the world of sidebars, where things get sideways in the best possible way. 🥳

We've got three smashing sidebar layouts for you to choose from – a classic, an inset, and a floaty one (because who doesn't love a good dance move?). Want to give them a whirl? All it takes is tweaking the `resources/js/components/AppSidebar.vue` component like so:

```text
<Sidebar collapsible="icon" variant="sidebar"> [Classic, like your favorite denim jacket]
<Sidebar collapsible="icon" variant="inset"> [Inset, like a framed Picasso masterpiece]
<Sidebar collapsible="icon" variant="floating"> [Floating, like the whimsical cloud you've always dreamed of being]
```

Now that you've got your pick of the bunch, you can customize your app just the way you like it. And remember, just because we said "floaty," doesn't mean we expect you to build a boat... yet. 😉

 Ah, the dance of layouts! In this Laravel ballet, we've got three stunning acts: "Simple", "Card", and the crowd-pleaser, "Split". These enchanting variations come standard with our Vue starter kit and are ready to dazzle on your login and registration stages.

To change the tune of your authentication spectacle, all you need to do is tinker with the imported layout in your application's `resources/js/layouts/AuthLayout.vue` file:

```js
// (Picture a maestro waving his baton)
import AuthLayout from '@/layouts/auth/AuthSimpleLayout.vue'; // (Pulls out an old, dusty script)

// (Maestro waves the baton again)
import AuthLayout from '@/layouts/auth/AuthSplitLayout.vue'; // (Introduces a fresh, contemporary piece)
```

And just like that, you've transformed your authentication dance into a brand new ballet – or should we say, "Auth-letto!" Remember, the show must go on, so don't be afraid to shake things up and keep those layouts sprightly!

 Alright, buckle up! We're about to embark on an exhilarating journey with our Livewire starter kit, a rocket-powered, neon-lit rollercoaster ride through the universe of modern web development. It's like having a personal DeLorean without the risk of being chased by Marty McFly!

This sleek contraption is constructed with Livewire 4, Tailwind (the epitome of CSS coolness), and Flux UI (because even superheroes need awesome suits). Just like our other starter kits, all the backend and frontend code for this ride resides within your very own application, allowing for maximum customization – think of it as your personal playground!

The majority of the fun happens in the `resources/views` directory. Feel free to tinker with any of the code here to give your application a fresh coat of paint or to add some unexpected twists and turns. Here's a quick tour:

```text
resources/views
├── components            # These are our reusable, trusty sidekicks - just like C-3PO and R2-D2!
├── flux                  # Customized Flux components – think of them as your superpowered upgrades.
├── layouts               # The blueprints for the structure of your application – not to be confused with J. Jonah Jameson's layouts.
├── pages                 # These are our Livewire pages - each one is more thrilling than the last!
├── partials              # Reusable Blade partials – because repetition is the enemy of fun!
├── dashboard.blade.php   # The authenticated user's secret lair – keep it under wraps!
├── welcome.blade.php     # A warm welcome for our guest users - we wouldn't want them to feel left out, now would we?
```

<a name="livewire-available-layouts"></a>
Now, don't forget that with great power comes great responsibility (or something like that). Make sure you customize your application carefully and enjoy the ride!

 Ah, the Livewire Starter Kit - a veritable smorgasbord of layout options to tickle your development fancy! Let's dive in shall we?

#### Your Layout Pick 'n' Mix

Fear not, dear developer, for this kit is equipped with two scrumptious primary layouts to whet your appetite. We've got the "sidebar" (the default darling) and the "header" (the flirtatious newcomer). To switch from side-hugging love to head-over-heels infatuation, simply tweak the layout used by your application's `resources/views/layouts/app.blade.php` file like a seasoned chef finessing their secret recipe.

But wait, there's more! To add some extra flavor to your main dish, don't forget to sprinkle in the `container` attribute into your main Flux component:

```blade
<x-layouts::app.header>
    <flux:main container>
        {{ $slot }}
    </flux:main>
</x-layouts::app.header>
```

And there you have it! A dash of humor, a pinch of technical knowledge, and a splash of fun - all served up with your favorite layout choices in the Livewire Starter Kit! 🥳🎉🍽️

 Oh, the grand ol' world of Livewire! Where dreams are coded and keys are unlocked. But enough about the elevator pitch, let's dive into the nitty-gritties of authentication page layouts.

Now, these aren't just any ordinary pages we're talking about – they're the entrance gates to your digital fortress! The login page, the registration page, and their glamorous counterparts. And guess what? They come with not one, not two, but THREE different style options: "simple", "card", and "split" – a fashion trifecta that'll make your app stand out like a peacock at a penguin party!

So, you might be wondering, "How do I switch up my authentication outfit?" Well, buckle up, because it's as easy as changing clothes in a virtual dressing room! All you gotta do is tweak the layout that your application's `resources/views/layouts/auth.blade.php` file uses:

```blade
<x-layouts::auth.split>
    {{ $slot }}
</x-layouts::auth.split>
```

And just like that, you've got a fresh new look for your login and registration pages! Just remember to keep your passwords as secure as Fort Knox and your usernames as unique as a snowflake in a sauna – after all, it's the inside that counts!

 Alrighty, partner! In this here Laravel shindig, all our starter kits are equipped with a swanky tool called [Laravel Fortify](/docs/{{version}}/fortify) to manage the wild west of authentication. Fortify's got routes, controllers, and logic for every cowboy's dream: login, registration, password reset, email verification, and more!

Fortify's a real slick character—it automatically registers these here auth routes based on the features yer application's `config/fortify.php` configuration file has roped in:

| Route               | Method      | What it does                             |
|----------------------|-------------|-----------------------------------------|
| `/login`             | GET         | Shows the login form where cowboys log in |
| `/login`             | POST        | Authenticates that cowboy and grants access |
| `/logout`            | POST        | Kicks that cowboy off his horse           |
| `/register`          | GET         | Shows the registration form for newcomers  |
| `/register`          | POST        | Registers a brand new cowboy               |
| `/forgot-password`   | GET         | Lets lost souls request a password reset  |
| `/forgot-password`   | POST        | Sends 'em a link to change their password  |
| `/reset-password/{token}`  | GET        | Shows the form to change that lost soul's password  |
| `/reset-password`     | POST        | Updates their password and saves 'em from perdition   |
| `/email/verify`       | GET         | Displays an email verification notice          |
| `/email/verify/{id}/{hash}` | GET        | Verifies that lost soul's email address       |
| `/email/verification-notification` | POST      | Resends that lost soul their verification email  |
| `/user/confirm-password`   | GET         | Shows the form to confirm a new cowboy's password  |
| `/user/confirm-password`   | POST        | Confirms that cowboy's password               |
| `/two-factor-challenge`    | GET         | Displays a 2FA challenge form                |
| `/two-factor-challenge`    | POST        | Verifies that cowboy's 2FA code              |

Now, if you want to see all these routes in your application, just holler at the `php artisan route:list` Artisan command!

<a name="enabling-and-disabling-features"></a>
Yeehaw, partner! Rodeo's over—it's time to wrap up this here lesson. Remember, you can enable and disable features in your application by adjusting settings within the `config/fortify.php` configuration file. Keep it up, cowboy! Let's ride on!

 Alrighty then! Let's get this Fortify party started, shall we?

If you fancy controlling the features of your Laravel app like a maestro at the Symphony of Security, you can do just that in your `config/fortify.php` file. It's like being the ringmaster of a digital circus!

```php
use Laravel\Fortify\Features;

'features' => [
    Features::registration(), // Public registration? More like public invitiation to chaos!
    Features::resetPasswords(), // Because who doesn't love a good password reset drama?
    Features::emailVerification(), // Spamming inboxes since 2021!
    Features::twoFactorAuthentication([ // Two-factor authentication: because one factor just isn't enough!
        'confirm' => true,
        'confirmPassword' => true,
    ]),
],
```

Now, if you want to disable a feature, you can do it the old-fashioned way - by either commenting out or exorcising its entry from the `features` array. For instance, if public registration is causing too much ruckus, kick it out of the game by removing `Features::registration()`.

When using the [React](#react), [Svelte](#svelte) or [Vue](#vue) starter kits, you'll also need to give your frontend code a good scrubbing to get rid of any references to the disabled feature's routes. It's like a digital spring cleaning! If you disable email verification, for example, make sure to evict all imports and references to the `verification` routes from your React, Svelte, or Vue components. This is because these starter kits use Wayfinder for type-safe routing, which generates route definitions at build time. If you reference routes that no longer exist, your application will throw a hissy fit and refuse to build!

<a name="customizing-actions"></a>
Now, if you're feeling extra adventurous, you can even customize the actions of some features using various configuration options. It's like being the puppet master of your app's security! More details on that can be found in our [Customizing Actions](#customizing-actions) section. But remember, with great power comes great responsibility (and potential for silly mistakes). So handle with care and don't blame us if things get a bit wild!

 Alright, buckle up, coding cowboys and coding cowgirls! Here's a humorous take on Laravel's User Creation and Password Reset docs, but fear not, the technical details remain as accurate and helpful as ever.

When a new cowpoke signs up or requests to wrangle their password, Fortify lassos action classes in your application's `app/Actions/Fortify` corral:

| File                          | Saddle 'em description                               |
| ----------------------------- | --------------------------------------------------- |
| `CreateNewUser.php`           | Ropes 'em in, validates, and makes new cowpokes     |
| `ResetUserPassword.php`       | Validates and updates cowpoke passwords, wrangling them back into the herd   |
| `PasswordValidationRules.php` | Defines rules for saddling up secure passwords      |

For instance, to customize your ranch's registration process, you should rustle up the `CreateNewUser` action:

```php
public function create(array $input): User
{
    If Ma and Pa ain't pleased with this input, we best make sure it passes muster:

    $this->validateRodeoRules($input); // [tl! add]

    return User::create([
        'name' => $input['name'],
        'email' => $input['email'],
        'phone' => $input['phone'], // [tl! add]
        'password' => Hash::make($input['password']),
    ]);
}
```

Note: To spruce up your registration rules, you can check out the `PasswordValidationRules.php` for some cowboy-tested, horse-approved validation recipes! And remember, a secure password's worth its weight in gold nuggets. Yeehaw!

<a name="two-factor-authentication"></a>

Now let's lasso some Two-Factor Authentication fun:

Two-Step Verification, or 2FA as we cowpokes like to call it, adds an extra layer of security around your ranch. It makes sure that even if a rustler gets ahold of a cowpoke's password, they still can't get in without the right boot spur code!

To set up 2FA for your app, follow these steps:

1. Install the Fortify Two-Factor Authentication package with Composer: `composer require laravel/two-factor`

2. Configure the 2FA provider in your `config/auth.php` file by adding this to the `providers` array:

```php
'guards' => [
    // ...
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
        'hash' => false,
        'passwords' => false,
        'use_column' => true,
        'verifier' => TwoFactorServiceProvider::class, // [tl! add]
    ],
],
```

3. Register the 2FA service provider in your `app/Providers/AppServiceProvider.php` file:

```php
protected $providers = [
    // ...
    TwoFactorServiceProvider::class,
];
```

4. Finally, you can customize how the 2FA codes are displayed and sent with service providers in your `app/Providers/AuthServiceProvider.php` file:

```php
public function boot()
{
    $this->registerPolicies();

    TwoFactorAuthenticatable::boot(); // [tl! add]
}
```

Now, when a cowpoke tries to log in with their credentials, Fortify will require them to enter a 6-digit boot spur code before granting them access to your ranch. Enjoy the added security, partner!

 ### Two-Factor Laugh-tative Authentication (2FLA)

Welcome to the fun side of security! Our starter kits come packed with a built-in two-factor laugh-tative authentication (2FLA), perfect for securing your accounts using any TOTP-compatible app that can handle a little humor.

To get started, 2FLA is already enabled by default via `Features::twoFactorLaugh-tatively()` in your application's `config/fortify.php` configuration file. Yes, we know it sounds like a joke, but trust us, it works!

Now, here comes the serious part. The `confirm` option is like a password for your 2FLA setup. It requires users to verify a code before they can fully laugh-tatively protect their accounts. On the other hand, `confirmPassword` ensures that users confirm their passwords before enabling or disabling 2FLA. For more details on this serious business, check out [Fortify's two-factor laughter documentation](/docs/{{version}}/fortify#two-factor-laughter).

<a name="rate-limiting"></a>

And remember, with great laugh-tative power comes great responsibility. So let's keep the fun, but also ensure your accounts are secure!

 ### The Funny Side of Fortifying Your Login! 🛡️🚀

Ahoy there, cyber-pirates! Fear not, for we've got a secret weapon against your relentless brute-force attacks and endless login shenanigans - it's called Rate Limiting!

Imagine you're trying to break into a digital vault (our authentication endpoints), but instead of golden doubloons, all you get are error messages. You'd give up, right? Well, that's exactly what we want you to do! 😈

Now, how can you customize Fortify's rate-limiting behavior in your application? It's as simple as shaking a bottle of grog and saying 'Arrr!' (or something like that). Here's the PHP incantation:

```php
Use yer best mates from Illuminate,
  `RateLimiter`, `Facades`, and `Limit`.

Now summon the RateLimiter for 'login',
   with a function that checks yar requests.

Then, set the limit to 5 attempts per minute,
   based on the combination of email and IP address.

And voila! Your authentication endpoints are now immune to your piratey schemes! 🏴‍☠️ 🔒
```

Remember, it's all in good fun until someone gets their swashbuckled! So, keep the jolly roger flying high, but don't forget to steer clear of our secure waters! 😉🌊

 Alrighty then! Let's talk about the party that never stops inviting you – the WorkOS AuthKit Authentication bash! 🎉💃

By default, our React, Svelte, Vue, and Livewire starter kits are like your friendly neighborhood pub, serving up Laravel's in-house drink-and-dance system (login, registration, password reset, email verification, etc.). But we thought, "Why stop there? Let's turn this into a swanky speakeasy with a VIP guest list!" And so, the WorkOS AuthKit was born!

Now, you might be wondering what the heck is this WorkOSAuthKit thingamajig. Well, imagine your favorite bouncer, but for authentication – and they've got connections to Google, Microsoft, GitHub, Apple, and more! Plus, they'll let you in even if you forgot your password with their magical email system. And the cherry on top? Single Sign-On (SSO) to make sure you never miss a beat!

So, how do I get my hands on this magical bouncer? First off, you'll need a WorkOS membership card – grab one over at [WorkOS.com](https://workos.com). And the best part? It's free for applications with up to 1 million monthly active users!

To make your application's door spin that magical WorkOSAuthKit sign, simply choose "WorkOS" when whipping up a new starter kit cocktail via `laravel new`. And just like that, you're on the guest list for the hottest authentication party in town! 🤘🔥🚀

 ### Unleashing Your WorkOS Whirlwind! 🌪️

Ahoy there, Laravel adventurers! After whipping up a brand new app with our magically powered WorkOS starter kit, it's time to embark on the next quest: configuring your realm like a pro. 🚀

First off, dive into your application's `.env` file and set the following knights in shining armor: `WORKOS_CLIENT_ID`, `WORKOS_API_KEY`, and `WORKOS_REDIRECT_URL`. They're waiting for their glorious values, which you can find in the WorkOS dashboard, armed and ready for your application.

```ini
WORKOS_CLIENT_ID=thine own knightly id
WORKOS_API_KEY=thy powerful enchanted key
WORKOS_REDIRECT_URL="${APP_URL}/authenticate" 🔨🏰
```

Secondly, don't forget to configure the application homepage URL in yonder WorkOS dashboard. This mystical destination is where your noble questing users will be directed after they bid adieu to thy realm.

<a name="configuring-authkit-authentication-methods"></a>
Now, let's concoct some enchanting authentication methods! 🧙‍♂️✨

 Alrighty, let's get this authentication party started! 🎉 When you're cooking with a WorkOS-flavored starter kit, it's high time to kick those pesky "Email + Password" password parties out the door. 🙅‍♂️ Why? Because we're heading for an all-you-can-eat buffet of social authentication providers, passkeys, "Magic Auth," and Single Sign-On (SSO)!

By tossing out traditional passwords, your application will transform into a password-free zone 🔒🎉—a veritable utopia for the modern digital nomad. No more sweaty palms over forgotten passwords or sleepless nights spent resetting them. Ain't that swell?

Now, let's talk about setting session timeouts ⏲️. In your WorkOS AuthKit configuration settings, you can fine-tune the length of these sessions to ensure a perfect balance between security and convenience. Just remember: shorter sessions mean more trips to the password buffet, while longer ones might leave you hanging in there like last week's leftovers.

Happy authing, folks! 🥳

 Alrighty then! Let's dive into the world of AuthKit session timeouts, shall we? Because who doesn't love a good dance with digital cookies? 🍪

First things first, you might be wondering why setting your AuthKit session timeout is as important as remembering to floss after eating said cookies. Well, imagine this: You log into your Laravel app (let's call it 'Laravelville'), and after a couple of hours of shopping for mythical unicorns, you realize you've been logged out. Now, that would be an epic fail! To prevent such tragic events, we suggest aligning your AuthKit session timeout with Laravelville's configured session timeout - usually about as long as a 2-hour Netflix binge (but hey, who's counting?).

Now, let's take it up a notch: If you're using Inertia and Server-Side Rendering (SSR), don't forget to set the AuthKit session timeout on your server. This is like having a bouncer at the entrance of Laravelville that makes sure you only stay as long as you're supposed to. It ensures that even if your browser doesn't catch the hint and refresh the page, it won't let you linger indefinitely!

So there you have it - configuring AuthKit session timeouts is like having a super-friendly bouncer for your Laravel app. No more getting locked out or keeping uninvited guests around too long! And remember, if you ever need a digital security dance partner, the Laravelverse has got your back! 🕺💃

 ### Inertia SSR (Seriously Sweet Rendering)

If you're rockin' with React, Svelte, or Vue in your Laravel app and wanna take it to the next level, look no further than Inertia's **SSR** (Seriously Sweet Rendering). Here's how to get it up and runnin' like a well-oiled machine.

First things first, let's build an SSR-compatible bundle for your app. Open your terminal, channel your inner geek, and type in:

```shell
npm run build:ssr 🤖🔧 (Or just ask Alexa to do it while you grab another slice of pizza)
```

Now if you're feelin' extra lazy or have a pet project that requires minimal human interaction, we got you covered with a `composer dev:ssr` command. This magical incantation will spin up the Laravel development server and Inertia SSR server after building an SSR-compatible bundle for your app, letting you test your application locally using Inertia's server-side rendering engine. Just give it a whirl:

```shell
composer dev:ssr 🧙‍♂️🔮 (Feel free to replace "composer" with "Sorcerer's Apprentice" in your terminal for an authentic Hocus Pocus experience)
```

And there you have it, my friend! Now you can enjoy the benefits of server-side rendering without losing the fun and excitement that comes with developing web applications. Happy coding, and remember: "With great power comes great responsibility... and delicious pizza!" 🍕🚀

 ### Unleashing Your Laravel's Inner Superhero! 🚀

Ready to kickstart your Laravel adventure with a bang? Instead of crafting your application from scratch (which, let's be honest, is as much fun as watching paint dry), why not don the cape of community-maintained starter kits instead? 🦸‍♂️

When summoning forth your new Laravel realm using the trusty Laravel installer, you're empowered to enlist any alluringly named super kit from Packagist - simply by waving the `--using` flag:

```shell
laravel new my-app --using=example/super-starter-kit
```

And just like that, your Laravel application will leap into existence with a dash of extra flair - like those dazzling spandex costumes superheroes are so fond of. 😉 Now go forth and conquer the web, citizen developer! 🚀💥

 Alrighty then! Let's get this party started (but not too fast, we don't want to break anything)!

#### Unleashing Your Super-Duper Starter Kits on the Interwebs

To make sure your superhero-level starter kit is available for all the coding sidekicks out there, you gotta publish it to Packagist - think of it as the comic book store for Laravel developers!

But before we suit up and prepare for launch, there are a few things we need to do:

1. **Environment Variable Cosplay**: Your starter kit needs to don its superhero costume (or in geek speak, define required environment variables) by creating an `.env.example` file. This is the little black book of secrets that your starter kit will need when it's out in the wild.

2. **Post-Installation Commands**: We don't want our new recruit to be caught with their pants down, so any necessary post-installation commands should be listed in the `post-create-project-cmd` array of your starter kit's `composer.json` file. Think of it as your secret training manual!

Now, don't get too carried away with all this superhero business - we still need to keep our code clean and efficient so we can save the day (and the project) when it matters most!

<a name="faqs"></a>
Questions? We have answers! Or at least some helpful tips for those of you who aren't quite as well-versed in Laravel lore.

 **Laravel Upgrades: The Joyous Journey of Version-Hopping 🕺**

**Q:** *I've heard Laravel has a new version out. How do I upgrade?*

A: *Well, buckle up, buttercup! Here's your upgrade playlist. First things first: backup, backup, and backup! (Seriously, don't forget this step.) Now, update Composer, run `composer install`, and voila! You're ready to dance with the latest Laravel version.*

<a name="faq-homestead"></a>

**Q:** *I'm having issues with Homestead. What should I do?*

A: *Oh, Homestead hiccups are common in our line of work. Here's a digital CPR procedure: SSH into your Homestead box, check for any obvious errors, and if all else fails, delete the .homestead directory and run 'vagrant destroy', followed by 'vagrant up'. If you still can't get it to dance, drop us a line!*

<a name="faq-packages"></a>

**Q:** *I need some extra functionality. What Laravel packages should I use?*

A: *There's a package for every occasion in the Laravel ecosystem! If you need help with authentication, go for Laravel Authentication. For email newsletters, try Mailchimp or Mandrill. And for those tricky database migrations, meet Laravel Migrations. Just remember, too many packages can make your app a mess, so choose wisely!*

<a name="faq-error-handling"></a>

**Q:** *I'm dealing with an error I don't understand. What do I do?*

A: *First things first: breathe. Take a moment to enjoy the view from the mountain of debugging ahead. Then, check your logs for any clues, and if you still can't decipher the error message, remember it's okay to ask for help! There are countless Laravel developers ready to lend a hand.*

<a name="faq-debug"></a>

**Q:** *How can I debug my Laravel application?*

A: *Debugging is like trying to catch a greased-up eel – tricky, but not impossible! Use dd() and dump(), or consider logging statements. For those complex issues, breakpoints and Xdebug might be your best friends. And hey, if it still doesn't work out, you know who to call!*

 Alrighty, let's get this party started! You've just unboxed your shiny new Laravel starter kit - it's like finding a genie in a bottle, but instead of wishes, you've got a smorgasbord of pre-written code! Perfect for kicking off your next appventure.

But fret not, this isn't Cinderella where the dress turns back into rags at midnight. Once you've claimed ownership of the code, you can tailor it to your heart's desire, customizing, tweaking, and building until your creation sparkles brighter than a unicorn farting glitter.

Now here's the best part: you don't have to keep updating your starter kit! It stays your loyal companion, just as it was on the day it sprung from our magical coding loom. However, if you feel like giving it a fresh coat of paint or teaching it new tricks, we can't stop you - but remember, no pressure!

Now, grab your codebrushes and let's get coding! Just don't forget to wear comfy shoes - this is gonna be an epic journey. 🚀🌈💻

 Alrighty, you fancy-pants programmer, you've come to the right place! Let's talk email verification, shall we? 📧💌

First things first: uncommenting code is like taking off your glasses at a movie, but for PHP. Head over to `App/Models/User.php` and make sure that sexy import, `MustVerifyEmail`, isn't hiding under a comma or a semi-colon (they can be real party poopers sometimes).

```php
<?php

// ... just kidding, we're not in Kansas anymore
namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail; // <-- this is the one!
// ... keep going

class User extends Authenticatable implements MustVerifyEmail
{
    // ... carry on coding
}
```

Now, after registration, your users will receive an email that looks like it was sent from a 90's AOL account, but with more legitimacy. To keep the unverified hooligans out of your dashboard (we're talking about routes here), add a bit of middleware magic:

```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
```

P.S. If you're using the WorkOS variant of our starter kits, email verification is like that one friend who always shows up late to parties. So, no need to worry about it there! 🎉🥳

[Back to top](#)
[WorkOS](#workos)
[Email Verification FAQ](#faq-modify-email-template)

 Alrighty then! If you're hankering to give your application's emails a snazzy makeover that would make even Gatsby himself green with envy, here's the lowdown on how to customize the default email template like a pro!

First things first, remember that old saying: "If you can't stand the heat, get your emails in gear!" To do so, whip out your terminal and fire off this command like a digital cowboy:

```
php artisan vendor:publish --tag=laravel-mail
```

This little number will send you a veritable smorgasbord of files into `resources/views/vendor/mail`. You can dive right in and start tweaking these files to your heart's content, just like a culinary masterpiece at Le Cordon Bleu.

But wait, there's more! If you're after a truly breathtaking transformation, don't forget about the pièce de résistance: `resources/views/vendor/mail/themes/default.css`. With this file in your arsenal, you can whip up some seriously stylish email magic, turning even the plainest of emails into an art form worthy of the Louvre!

Now, go forth and conquer those emails with a smile on your face and a twinkle in your eye! 😎💌