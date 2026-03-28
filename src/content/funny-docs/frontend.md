 # Frontend Fun Times! 🎉🎈

## Party Start-up (Intro) 🥳

Welcome to the dance floor, champ! We're about to embark on a wild ride filled with coding jives and tech tango. Grab your sequins, we're diving right into the mix of Laravel Frontend fun times!

<a name="using-php"></a>

## PHP and the Disco Ball (Using PHP) 🕺️

PHP is our main dance partner for this jamboree. It's like the lifeblood of your application, pumping through the veins of every screen. But hey, who needs a steady beat when we've got Blade to add some sparkle and pizzazz to our PHP!

### PHP and Blade: A Match Made in Dancefloor Heaven 💃️🕺️

Imagine choreographing your website without needing to learn ballroom-specific moves. That's what Blade does for us! It's like having a secret dance instructor, guiding you through the steps with ease and elegance.

### Livewire: The Showstopper (Livewire) 🌟

Want to bring your guests to their feet? Introducing Livewire - the surprise performance act that keeps everyone talking long after the party ends! With Livewire, you can add real-time interactive elements without mastering the complexities of WebSockets.

### PHP Starter Kits: Party in a Box 🎁

Who said setting up a new project had to be a chore? Our starter kits are pre-packaged party favors, complete with all the essentials you need to get started. Just unbox, assemble, and dance your way into creating something magical!

<a name="using-react-svelte-or-vue"></a>

## React, Svelte, or Vue: The Next Dance Crew (Using React, Svelte, or Vue) 🤘️💃️

If you're feeling adventurous and want to mix things up a bit, these frontend powerhouses are here to save the day! Let's take a look at our new dance partners.

### Inertia: The Choreographer (Inertia) 👩‍🎨🕹️

Inertia is like having your own personal dance coach, guiding you through every step of the process. With Inertia, you can create fluid and interactive websites without needing to learn intricate routines or master complex moves.

### Inertia Starter Kits: Party Planner Plus (Inertia Starter Kits) 🎟️📝

Just like our PHP starter kits, these goodies come pre-loaded with all the essentials you need to create an unforgettable dance experience. Inertia's starter kits are your ticket to a stress-free, customizable adventure!

<a name="bundling-assets"></a>

## Asset Wrapping Party (Bundling Assets) 🎁🎉

Last but not least, let's talk about asset bundling. It's like wrapping up all the party favors and gifts in one pretty package for your guests to enjoy! With Laravel Mix, you can compile and optimize your assets quickly and easily, ensuring a smooth-running, glitch-free dance party for everyone!

And that's it, folks! We hope you've had as much fun reading this as we did writing it. Now go forth and create the next viral dance craze with Laravel Frontend! 🎉💃️🕺️

 Ahoy there, matey! Buckle up, as we embark on a Laravel-filled adventure where modern web apps are built like pirate ships sailing through the seas of code! 🏴‍☠️

Laravel - your go-to backend pirate captain, equipped with an armory of features that would make Blackbeard drool. We're talking routing, validation, caching, queues, file storage, and much more. But don't just take our word for it; come aboard and see the treasure chest of wonders yourself! 🏛️

But here at Laravel HQ, we're not just about making your backend shine brighter than Jack Sparrow's earring. We aim to provide a full-stack experience that leaves no stone unturned - or webpage uncoded. And that's where things get interesting! 😜

There are two main frontend development paths when you set sail with Laravel: the swashbuckling PHP route, and the modern JavaScript waters of React, Svelte, and Vue. So grab your compass, as we set off to discuss these exciting options, ensuring you can make an informed decision that'll keep your web app's frontend standing tall against the fiercest of storms! ⚓️

<a name="using-php"></a>

Ah, ye who prefer the classic approach - set your course for PHP land! With Laravel, ye can build yer frontend using the trusted ol' mate (PHP), and never worry about learning a new language or getting lost at sea. 👴🏻🏝️

 Alrighty then! Buckle up, code cowboys and codettes, because we're about to embark on an adventure through Laravel's PHP wild west. But fear not, this ain't your grandpa's PHP - it's slicker than a greased prairie dog and more powerful than a herd of buffalo!

<a name="php-and-blade"></a>
### PHP and Blade

When you hear "Blade", you might think of a sharp tool used for slicing through tough steaks. Well, in Laravel's world, it's a templating engine that makes your views as easy to manage as a well-organized campfire cookout.

With Blade, PHP gets a whole lot more palatable. You can write your HTML just like you normally would, but when things get complicated, you can sprinkle in some special syntax (think of it like a dash of seasoning) to make your code dance like a rodeo clown on a sugar rush.

Here's a little taste: instead of writing out every single loop, you can just do this:
```php
@for ($i = 0; $i < 10; $i++)
    <p>Loop number {{ $i }}</p>
@endfor
```
Much easier than herding cats, ain't it? Just remember to keep your Blade files in the `resources/views` folder - that's where all the cowboys and cowgirls gather for a good ol' fashioned dance-off.

<a name="php-variables"></a>
### PHP Variables

In this here digital frontier, we got ourselves some trusty steeds called variables. Just like your trusty horse, you can name them whatever you want (within reason, of course - no calling your variable "Old Yeller" or anything).

To create a variable, all you gotta do is assign a value to it:
```php
$myVariable = "Hello, world!";
echo $myVariable; // Outputs: Hello, world!
```
Easy peasy, lemon squeezy. And don't worry, Laravel is smart enough to know the difference between your variables and HTML tags - it won't mistake `<title>` for a variable name.

There you have it! A little taste of Laravel's PHP frontier. Next time we'll dive into routing, controllers, and middleware - but that's a whole other rodeo!

 Ah, let's journey back to the olden days of web development when PHP was still young and spry! Back then, rendering HTML was as exciting as watching paint dry, with a dash of `echo` statements here and there. Just imagine this delightful dance:

```blade
<div>
    <?php foreach ($users as $user): ?>
        Hello, <?php echo $user->name; ?><br />
    <?php endforeach; ?>
</div>
```

Fast forward to present day Laravel and we've got a more sophisticated partner in crime: Blade. This lightweight templating language is the life of the party, offering a convenient, succinct syntax that makes displaying data, iterating over it, and other fancy tricks feel like child's play:

```blade
<div>
    @foreach ($users as $user)
        Hello, {{ $user->name }} <br />
    @endforeach
</div>
```

When developing applications this way, every form submission or page interaction would lead to a brand-new date night with an entirely fresh HTML document. And yes, even today there are apps out there that might be content with their Blade-made sweethearts and the simple charms of a re-rendered browser page.

But, as time passed by, those growing expectations called for more! Enter AJAX and single-page applications, ready to change the game forever... Stay tuned for part 2! 🎬🍿🚀

 Ahoy there, coders! Let's embark on a journey through the ever-evolving world of web applications. It wasn't too long ago that users were content with flashing neon signs and blinking text (we won't mention GeoCities). But oh, how times have changed!

Nowadays, folks expect frontends as smooth as silk, interactive as a game of Whac-a-Mole. And who can blame them? We've all had our fair share of dealing with clunky interfaces that make you wish you were back in the stone age (no offense to the actual stone age).

In response to these growing expectations, some developers have taken to using JavaScript frameworks like React, Svelte, and Vue. It's like learning a new dance style – once you get the hang of it, the results are electrifying!

But fret not if you're more of a PHP-whisperer at heart! There are solutions out there that let you build sleek UIs without leaving your beloved backend language. Just take a peek at what's been brewing in the Rails ecosystem: Turbo, Hotwire, and Stimulus.

Now, let's talk Laravel – the king of PHP frameworks! Recognizing the need for modern, dynamic frontends without leaving their PHP throne, our heroes created two champions: Laravel Livewire and Alpine.js.

So grab your favorite coding beverage, sit back, and prepare for an adventure in the world of cutting-edge web development with Laravel! Remember: smooth frontends are no longer just a nice-to-have – they're a must-have. Let's make our users smile, not frown. 😃💻🚀

 ### Laravel Livewire: The Framework That Makes Your Laravel UI Dance! 💃🚀

Hey there, web wranglers! Meet [Laravel Livewire](https://livewire.laravel.com), the secret sauce that turns your Laravel-powered interfaces into sizzling, state-of-the-art frontends, akin to those whipped up with fancy JavaScript frameworks like React, Svelte, and Vue!

With Livewire, you'll create snazzy "components," each one handling a tidy slice of your UI and offering methods and data that can be easily summoned or interacted with from your application's frontend. Let's say you're craving a "Counter" component – here's what it might look like:

```php
<?php

use Livewire\Component;

new class extends Component
{
    public $count = 0;

    public function increment()
    {
        $this->count++;
    }
};
?>

<div>
    <button wire:click="increment">🔼</button>
    <h1>{{ $count }}</h1>
</div>

```

Livewire allows you to whip up brand new HTML attributes like `wire:click`, which link your Laravel application's frontend and backend, and render your component's current state using simple Blade expressions. It's the perfect blend of PHP and HTML magic! 🪄🧙‍♂️

For many developers, Livewire has redefined the way they approach frontend development in Laravel, providing a cozy, familiar environment for constructing modern, dynamic web applications while still allowing them to sprinkle some JavaScript (with [Alpine.js](https://alpinejs.dev/)!) where it's truly needed, like on a pop-up window.

If you're a Laravel newbie, we suggest brushing up on the basics of [views](/docs/{{version}}/views) and [Blade](/docs/{{version}}/blade). Once you've got those down, it's time to check out the official [Laravel Livewire documentation](https://livewire.laravel.com/docs) to learn how to level up your application with interactive Livewire components!

Now, go forth and create some dancing interfaces! 💃🚀🎉

 ### Party Packs! 🎉🚀

Ready to groove your way through a frontend extravaganza, powered by the melodious symphony of PHP and Livewire? Well, put on those dancing shoes because we've got the hottest ticket in town – our [Livewire Dancefloor Starter Pack](/docs/{{version}}/starter-kits)! This isn't just a starter kit, it's your express lane to rocking your next web application development gig.

<a name="using-react-svelte-or-vue"></a>

Now, if you're feeling extra spicy and fancy a side dish of React, Svelte, or Vue, no problemo! We've got you covered with our [Multiverse Dance Crew Starter Packs](/docs/{{version}}/starter-kits), where the party never ends! Mix and match your preferred dance styles to create a truly unique, foot-tapping, web application experience. Just remember: when the music stops, the fun doesn't have to – keep coding till dawn! 🌃🎶

 Alright, let's embark on an adventure where we combine the best of both worlds: Laravel's elegance and PHP's charm with JavaScript frameworks that make our eyes twinkle like Taylor Swift at a cat convention! 🎈🐱‍⬛

Yes, you can build sleek frontends using Laravel and Livewire. But let's face it, some developers are as fond of JavaScript as a gold-plated banana - they just can't get enough! And who are we to deny them the power of React, Svelte, or Vue? These frameworks offer a treasure trove of JavaScript goodies from NPM, making development an enchanting journey.

However, without some magical tooling, pairing Laravel with these JavaScript wonders would leave us in a pickle. We'd need to conquer a whole suite of complex problems such as client-side routing, data rehydration (you know, like when your coffee goes cold and you nuke it back to life), and authentication - the digital bouncer of our application world.

Client-side routing can be tamed by using opinionated React / Svelte / Vue frameworks such as Next.js and Nuxt. But alas, data rehydration and authentication still remain tricky elves hiding in our codebase, ready to pounce on unsuspecting developers!

Moreover, dear friends, you'd be maintaining two separate code repositories, much like keeping both a cat and a dog. While it's not impossible to juggle these furry friends, we believe it's more productive (and less hairy) to stick with one pet - or in our case, one codebase!

But fret not, for help is at hand! Introducing Inertia.js – the magical glue that binds Laravel and JavaScript like peanut butter and jelly 🥛🍎. With Inertia, you can enjoy a seamless development experience without having to learn dark sorcery or tame those pesky elves! 🎉🧙‍♂️🧝‍♀️✨

 ### Party Time with Inertia!

Ah, the sweet symphony of Laravel and modern frontend frameworks (React, Svelte, or Vue) has never sounded so beautiful! With Inertia, we're not just dancing at two parties, but having a full-on rave without stepping on each other's toes.

Imagine being able to build sleek, modern frontends using your favorite tool of choice (React, Svelte, or Vue), all while enjoying the robust routing, data handling, and authentication capabilities that Laravel provides—all within a single codebase! Talk about a harmony of powers! 🥳

Once you've Inertia-fied your Laravel application, writing routes and controllers is business as usual. But instead of serving up a Blade template from your controller, you'll be dishing out an Inertia page:

```php
<?php
// In UserController.php
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    // ...

    public function show(string $id): Response
    {
        return Inertia::render('users/show', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

An Inertia page is like the cool kid of your frontend components, typically hanging out in the `resources/js/pages` directory. The data passed to this page via the `Inertia::render()` method acts as a refreshing cocktail for the "props" of the page component:

```jsx
// In users/show.js
import Layout from '@/layouts/authenticated';
import { Head } from '@inertiajs/react';

export default function Show({ user }) {
    return (
        <Layout>
            <Head title="Welcome" />
            <h1>Welcome back, {user.name}!</h1>
            <p>You've entered the world of Inertia! 🎉</p>
        </Layout>
    )
}
```

With Inertia, you can now groove to the full rhythm of both Laravel and your favorite frontend tool without cramping either one's style. Let's get this party started! 🥳🎉🚀

 Ahoy, fear not if your app needs the theatrical flair of server-side rendering before diving into the sleek waters of Inertia! Fret not, for Inertia's got you covered with its very own [server-side rendering support](https://inertiajs.com/server-side-rendering).

Now, when it comes to setting sail on your Laravel adventure, deploying via either the majestic [Laravel Cloud](https://cloud.laravel.com) or the enchanted [Laravel Forge](https://forge.laravel.com), getting Inertia's server-side rendering engine purring like a well-fed kitten is as easy as pie and twice as delicious!

<a name="inertia-starter-kits"></a>

So, grab your compass, your sea shanties, and let's set sail on this fun-filled Laravel journey!

 ### Ready-to-Rumble Kits! 🥊

Are you ready to create a frontend powerhouse using Inertia and the magical trio of React, Svelte, or Vue? We've got just the thing for you! Our [React-a-rama, Svelte Spectacular, or Vue-venture Starter Kits](/docs/{{version}}/starter-kits) are here to give your app development a lightning-fast start. These kits not only set up your application's backend and authentication flow using Inertia, but also enchant it with React, Svelte, Vue, [Tailwind](https://tailwindcss.com), and the wonderfully speedy [Vite](https://vitejs.dev)!

Now, you can leapfrog into crafting your next groundbreaking idea! 🚀

<a name="bundling-assets"></a>
### It's a wrap! 🎁

Bundling assets? We've got you covered like a warm hug from our favorite codemom! Our kits bundle all the assets, so you can focus on what truly matters – building awesome stuff! 🎉

 ## Rockin' Your Assets with Laravel and Friends! 🤘

Get ready to party like it's 2021 because whether you're coding up a storm with Blade and Livewire or groovin' to React, Svelte, Vue, and Inertia, one thing's for certain: your assets need to be bundled for that production-ready swagger.

But hey, if you've decided to build your frontend with React, Svelte, or Vue, well then, get ready for the ultimate dance-off because those assets also need some browser-friendly JavaScript action! 🕺️

By the way, have you met our secret party host? It's none other than [Vite](https://vitejs.dev) – a speedy build maestro who guarantees lightning-fast build times and HMR (Hot Module Replacement) that's faster than you can say "Pass the dip!" Laravel's newest plus one, Vite is here to make your application development with Laravel a total blast!

Now, you'll find your invite to this fabulous soiree in the form of a `vite.config.js` file. This light-weight Laravel Vite plugin will have you dancing all night long with ease and style.

> [!WARNING]
> If you need more details on how to work the dance floor like a pro with Vite and Laravel, head over to our dedicated documentation on bundling and compiling your assets! 💃️🕺️

And if you really want to kick things up a notch, why not start your application development with our amazing [application starter kits](/docs/{{version}}/starter-kits)? They're the ultimate icebreaker, setting your frontend and backend authentication scaffolding on fire! 🔥

Now let's get this party started! 🎉✨