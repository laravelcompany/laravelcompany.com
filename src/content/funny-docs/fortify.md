 # Laravel Forti-Fantastic! 🎉🏰

## Welcome to the Magic Kingdom of Authentication! 👨‍🔬🚀

### So, what's this Fortify thing all about? 🤔🦄
Fortify is your magical toolkit for handling authentication and security in Laravel like a pro, without having to dabble in dark sorcery or bewitching incantations. It's the perfect blend of power and ease, just like a well-crafted cocktail 🍸✨

### When should I use Fortify? 🕰️👨‍💼
Well, if you want to make your Laravel application more secure than a fortress made of cheese (yes, that's a thing), then Fortify is the spell you need! It's great for handling user registration, authentication, password resets, email verification, and two-factor authentication with a wave of your wand.

<a name="installation"></a>
## Installation 📦🛠️
### Fortify Features 💎✨
Get ready to enchant your app with features like:
1. Out-of-the-box two-factor authentication
2. Secure password reset links
3. Email verification
4. Customizable redirects and more!

### Disabling Views 📺🔒
If you prefer to keep your views under lock and key, Fortify lets you do that too! Just cast the right spell and enjoy a clean backend without any pesky distractions 🧹👻

<a name="authentication"></a>
## Authentication 🛡️🔑
### Customizing User Authentication 🦾🎨
Fortify lets you customize the authentication process to match your unique application style. From designing a one-of-a-kind login page to choosing the perfect error messages, it's all in your hands!

### Customizing the Authentication Pipeline 🕰️🔄
Want to tweak the way user authentication works? Fortify allows you to customize the authentication pipeline, giving you the power to add extra security measures or perform additional tasks as needed. It's like being able to summon a dragon at will!

### Customizing Authentication Redirects 🎢🛫
Want to send users to different destinations after they log in? Fortify makes it easy to customize authentication redirects, so you can guide your users on a magical journey through your application.

<a name="two-factor-authentication"></a>
## Two-Factor Authentication 🔒🔓
### Enabling Two-Factor Authentication 🦾🔑
Add an extra layer of security to your app by enabling two-factor authentication with Fortify. It's like adding a secret password to unlock the ultimate vault, and it will keep unauthorized users at bay!

### Authenticating With Two-Factor Authentication 🕵️‍♂️📱
With two-factor authentication enabled, users will be required to enter a verification code in addition to their password. Fortify handles all the heavy lifting for you, making it easy to verify codes and keep your app secure.

### Disabling Two-Factor Authentication 🔓💔
If you ever need to disable two-factor authentication (perhaps because you've decided to trust your users a little too much), Fortify makes it simple to do so without any fuss. Just remember, with great trust comes great responsibility!

<a name="registration"></a>
## Registration 🧔💼
### Customizing Registration 📝🎨
Fortify lets you customize the registration process to make it fit seamlessly into your application. You can change the fields, validate user input, and even add custom logic for creating users. It's like being able to conjure up users at will!

<a name="password-reset"></a>
## Password Reset 🔓💔
### Requesting a Password Reset Link 📧🕵️‍♂️
If a user forgets their password, they can request a reset link using Fortify's built-in feature. The system will securely generate and send the link to the user's email address, allowing them to regain access to their account without any hassle.

### Resetting the Password 🔒🔓
Once users receive their password reset link, they can click on it to be taken to a page where they can enter a new password for their account. Fortify handles all the password validation and encryption for you, ensuring that user data remains secure.

### Customizing Password Resets 🎨📝
If you want to add some extra flair or custom logic to the password reset process, Fortify allows you to do so. You can change the email templates, modify the password rules, and even add custom actions to the reset process. It's like having a personal password wizard at your disposal!

<a name="email-verification"></a>
## Email Verification 📧🕵️‍♂️
### Protecting Routes 🛡️🔒
Fortify lets you protect specific routes within your application, ensuring that only verified users can access them. It's like setting up a guard post to keep unverified users away!

<a name="password-confirmation"></a>
## Password Confirmation 🛡️🔓
### Ensuring Users Enter Their Correct Passwords 🕵️‍♂️🔓
Fortify includes a password confirmation feature to ensure that users enter their correct passwords when logging in. It's like having a password-checking fairy at your side!

And there you have it, folks! Fortify is your one-stop shop for handling authentication and security in Laravel, making your app more secure than Fort Knox while keeping things easy to manage. So grab your wand and get ready to cast some magical spells with Fortify! 🦾✨🚀

 **Meet Laravel Fortify**, your new BFF in the backend world of Laravel! Think of it as the superhero sidekick who handles all the heavy lifting when it comes to authentication. No more capes, just code!

Fortify, unlike other sidekicks, isn't picky about frontends. It plays well with everyone - from Superman to Spiderman (or Angular to Vue, if you prefer). It sets up the routes and controllers needed for Laravel's full suite of authentication features: login, registration, password resets, email verifications, and more! Once installed, give it a warm welcome with the `route:list` Artisan command.

Since Fortify is a bit shy about its user interface, it prefers to hang out with your custom UI – you know, the cool kid on the block. We'll dive deeper into how these two become best friends in the following sections of this documentation.

> [!NOTE]
> While Fortify can be your wingman, remember that it's not mandatory. You can always opt to go solo and directly interact with Laravel's authentication services. For more details, check out the [authentication](/docs/{{version}}/authentication), [password reset](/docs/{{version}}/passwords), and [email verification](/docs/{{version}}/verification) documentation. You go, glamourpuss!

 Ah, the delightful world of Laravel Fortify! It's a bit like having a butler for your application's backdoor shenanigans – without the monocle or the snobbish accent.

Fortify is an impeccable, frontend-agnostic authentication butler for your Laravel parties. It registers the routes and controllers needed to handle all of Laravel's authentication dances, including logins, registrations, password resets, email verifications, and more.

Now, hold onto your top hats, because here comes the twist – you don't have to be besties with Fortify to enjoy Laravel's authentication jamboree! You can always manually cut in on Laravel's authentication moves by following the dance steps outlined in the [authentication](/docs/{{version}}/authentication), [password reset](/docs/{{version}}/passwords), and [email verification](/docs/{{version}}/verification) manuals.

If you're new to Laravel, consider Fortify as your wingman at the dance – or rather, your butler for authentication events. Dive into [our application starter kits](/docs/{{version}}/starter-kits). These dapper kits use Fortify under the cuff to provide an elegant user interface, made with the sleek style of [Tailwind CSS](https://tailwindcss.com), for your application's authentication ballroom scenes. This way, you can practice and get cozy with Laravel's authentication moves without having to worry about stepping on anyone's toes.

In essence, Fortify takes the routes and controllers from our application starter kits and offers them as a package devoid of a user interface – think of it as the black-tie version for your backend authentication needs. This allows you to quickly scaffold the backstage operations of your application's authentication layer without being confined to any particular frontend fashion faux pas.

<a name="when-should-i-use-fortify"></a>
When should one use Fortify, you ask? Well, if you prefer a well-dressed, dependable butler for your application's authentication events – rather than DIYing it with a feather boa and a top hat – then Fortify is the perfect dance partner for you!

 Alrighty, mate! Let's dive into the world of Laravel Fortify – the authentication sidekick your application never knew it needed!

First off, if you're using one of Laravel's swanky application starter kits, then consider Fortify as the life of the party; it's already invited and ready to rock. No need for a separate RSVP!

Now, if you're going solo without a starter kit and your project needs to lock down its VIP area, you've got two options: DIY or call in Fortify as backup. DIY might be fun, but it can also lead to awkward dance moves. Fortify, on the other hand, will bring the disco ball and the DJ booth!

If you decide to invite Fortify to the party, your user interface will start sending out requests to Fortify's authentication routes, like a secret bouncer who handles all the authentication and registration duties without even breaking a sweat.

But if you fancy yourself as a bit of an authentification maestro and prefer to work directly with Laravel's authentication services, well then, suit yourself! You can follow the instructions in the [authentication](/docs/{{version}}/authentication), [password reset](/docs/{{version}}/passwords), and [email verification](/docs/{{version}}/verification) documentation. Just remember, it's like learning to dance – practice makes perfect!

And let's not forget about the Laravel Sanctum! It's a bit like the VIP guest list that Fortify checks before allowing access to your application's private areas. Learn more about their love-hate relationship in the [Laravel Fortify and Laravel Sanctum](#laravel-fortify-and-laravel-sanctum) section.

So, whether you're a control freak or just love a good dance partner, Fortify's got your back when it comes to securing your application! Let's boogie down to a safe and secure night of coding! 💃🏼🕺🏼

 Ahoy there, code wranglers! Let's clear up the confusion like a powerful storm sweeping through your dev environment. You might have noticed two packages in Laravel that sound as if they were named by a medieval sorcerer: Laravel Sanctum and Laravel Fortify.

Fear not, for these packages are allies, not rivals! Each tackles a different but related issue in the realm of app security, so there's no need to pick sides or engage in a heated feud between them.

Now, let's embark on a journey through the mystical land of Laravel Sanctum: it handles the management of API tokens and authentication for existing users – be it via session cookies or magical tokens (we kid, they're just tokens). However, it doesn't provide any routes that perform user registration, password reset ceremonies, or summoning eldritch abominations (again, just kidding!).

On the other hand, Laravel Fortify steps in to save the day with user registration, password resets, and all manner of security-related incantations. If you're crafting your own authentication layer for an API or a single-page application – basically, any magical realm where users roam – then it wouldn't be uncommon to employ both Laravel Fortify (for user registration, password resets, etc.) and Laravel Sanctum (API token management, session authentication) in your enchanted quest for security.

Now that we've settled the mystery of these two packages, let us move on to their installation process! But before you start waving your wand (or terminal), remember: in this kingdom called Laravel, there are no shortcuts – just a series of well-documented commands and a few lines of code.

<a name="installation"></a>
Ready to set sail on this exciting adventure? Let's get started!

 Alrighty then! Let's get this Fortify party started, shall we? 🥳

First things first, grab your Laravel tuxedo and fire up the Composer. You know, it's like the fashion police of the coding world. 🕵️‍♂️

```shell
composer require laravel/fortify
```

Now that you've got your badge of honor (the package), let's bring Fortify to life with a little Artisan magic:

```shell
php artisan fortify:install
```

This command is like an invite-only, secret handshake for Laravel developers. It publishes all the awesome Fortify action figures (yes, they're actual figurines) to your `app/Actions` playground, creating it if it's still in its box. 🦸‍♂️

Moreover, it unleashes a flock of digital pixies that sprinkle the `FortifyServiceProvider`, configuration file, and all essential database migrations across your project.

But wait, there's more! Don't forget to give your database a quick facelift (migration) for Fortify to fit in seamlessly:

```shell
php artisan migrate
```

Now that we've got the formalities out of the way, you can sit back, relax, and let your digital army of superheroes secure your Laravel realm! 🚀 🦸‍♀️ 🛡️

 ### Fortify Fandango! 🎉🎬

Ah, the `fortify` config file - it's like the backstage pass to your Laravel app's most exclusive VIP area! The `features` configuration array here acts as a Spotify playlist curator for the backend routes Fortify deems fit to grace your application with. To keep things simple and stylish, we suggest you only invite these basic authentication features that make every Laravel event pop:

```php
'features' => [
    Features::registration()->dressed_to_impress(), // Dapperly dressed for the registration shindig! 🤵👗
    Features::resetPasswords()->ready_for_the_redo(), // All set to give passwords a second chance at life. 🔄🔁
    Features::emailVerification()->verified_and_fabulous(), // Verified and fabulous, just like Cher after a wardrobe malfunction! 💃🔥
],
```

<a name="disabling-views"></a>
Oh, and if you ever feel the need to dismantle these featured acts, we've got you covered! Just follow [these steps](#disabling-views) to remove any unwanted performances from your event. 🎤🎺💔

 ### Unleashing the Javascript Beast! (Disabling Views)

Welcome, my brave coders and adventurers! Let's talk about a daring feat for those building single-page applications - taming the mighty Laravel Fortify views. By default, it's all about the screens: login, registration, you name it! But what if you don't need these routes? Well, that's like asking a superhero to take a vacation! You can disable them completely with a single configuration change.

Now, grab your capes and let's dive into the configuration file - `config/fortify.php`. Here, you'll find the section that controls these pesky views:

```php
'views' => false,
```

Set this to `false`, and those views will be toast! (Just kidding... they won't actually burn. They're just disabled.) Now, your JavaScript-driven single-page application can rule the roost without any pesky view distractions! 🦹‍♂️🚀

<a name="disabling-views-and-password-reset"></a>
### Disabling Views and Password Resets (The Double Whammy)

Alright, now that you've disabled views like a pro, let's take it up a notch! You can also disable password resets if you wish to keep users locked out of their accounts forever. (Kidding... we don't want to be mean!) To do this, simply add the following line within your `config/fortify.php`:

```php
'passwords' => false,
```

Set it to `false`, and your users will have to learn to love their forgotten passwords! But remember, it's always a good idea to provide alternative ways for them to retrieve their passwords if they ever need help. Good luck, and happy coding! 🤖🎉

 Alrighty then! Let's dive into the nitty-gritty of disabling views and password resets in our Fortify fortress, shall we? 🎉🔒

First off, if you're feeling rebellious and decide to throw Fortify's swanky views out the window, you better have a solid plan for your own password reset features. Remember, the lone wolf doesn't hunt alone! 🐺

When implementing your very own password-resetting antics, it's essential to define a route named `password.reset`. This is the responsible party that will display your application's "Reset Password" view. Why, you ask? Well, because Laravel's `Illuminate\Auth\Notifications\ResetPassword` notification is a bit of a control freak and demands that password reset URLs are generated via this very route. 😂🤹‍♂️

Now, with the technical jargon out of the way, let's put on our cowboy hats (you know, for the Old West vibe) and ride off into the sunset to victory! 🌅🎠✨

 Alrighty then! Let's strap on our programming cowboy boots and dive headfirst into Fortify, Laravel's super-cool authentication sidekick. Remember, this fella's all about the backend, so if you're hankering for a polished frontend implementation of Laravel's auth features, you might wanna round up an [application starter kit](/docs/{{version}}/starter-kits).

Now, customizing your login page with Fortify is as easy as pie, but with more PHP and less sugar. The `Laravel\Fortify\Fortify` class is your trusty steed in this rodeo. Typically, you'll call it from the `boot` method of your application's `App\Providers\FortifyServiceProvider` class. Fortify will take care of corralling the wild horses that are your authentication routes and taming them to return your custom login view:

```php
use Laravel\Fortify\Fortify;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Fortify::loginView(function () {
        return view('auth.login'); // Saddle up that auth.login template!
    });

    // ...
}
```

Your login wrangling form should be ready to ride out with a POST request, headed straight for `/login`. This trail expects a trusty steed named `email` / `username`, and a loyal sidekick `password`. The name of your email / username pardner should match the `username` value within the `config/fortify.php` configuration file. In addition, a boolean `remember` field can be tossed in the saddlebags to signal the user's desire for the "remember me" feature provided by Laravel.

If your login ride is successful, Fortify will redirect you to the URI you've configured within your application's `fortify` configuration file. If it was an XHR request, a 200 HTTP response will be returned like a well-broken bronco.

If the rodeo doesn't go as planned, fret not! The user will find themselves back on that dusty old login screen, and the validation errors will be available to you via the trusty `$errors` [Blade template variable](/docs/{{version}}/validation#quick-displaying-the-validation-errors). Or, in case of an XHR request, the validation errors will be returned like a lasso, wrapping them up with a 422 HTTP response.

Now, boot up that Fortify service provider and lasso yourself some secure authentication fun! Yeehaw!

 ### Unleashing Your Inner Superhero with Fortify Authentication! 🦸‍♂️🔥

Ready to become the master of your own authentication destiny? With Fortify, you can do just that! 🎉

By default, our super-powered authentication system will swoop in and save the day by retrieving and validating users based on your app's configuration. But sometimes, you might want more control over how login credentials are verified and users are rescued from obscurity. Fear not, dear hero! Fortify has a solution for that too!

Meet the `Fortify::authenticateUsing` method—your new best friend in the quest for custom authentication! This magical method accepts a special super-secret closure (we know, it sounds like something out of a comic book!) that receives your incoming HTTP request. The mission of this secret agent is to validate the login credentials attached to the request and return the dashing user instance associated with them. If the mission fails or no user can be found, our hero will graciously return `null` or `false`. Usually, this method should take off from the `boot` method of your trusty `FortifyServiceProvider`.

```php
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Fortify;

/**
 * Gear up for a thrilling adventure!
 */
public function boot(): void
{
    Fortify::authenticateUsing(function (Request $request) {
        // Our hero swoops in to save the day!
        $user = User::where('email', $request->email)->first();

        if ($user &&
            Hash::check($request->password, $user->password)) {
                // Success! The user is returned and our hero returns to base.
                return $user;
        }
    });

    // ... (Our hero continues the adventure)
}
```

Now, don your cape and leap tall buildings in a single bound with custom authentication control at your fingertips! 🚀🌄🦸‍♂️

 Ah, the Authentication Guard! Think of it as your bouncer at the hottest club in town (your Laravel app). You can customize this velvet rope wielder with a bit of configuration magic in your application's `fortify` file. But remember, just like you wouldn't let a chicken into Studio 54, your chosen guard should be an implementation of the prestigious `Illuminate\Contracts\Auth\StatefulGuard`.

Now, if you're running a Single Page Application (SPA) here, things get a little disco-ish. To authenticate like a boss, you need to pair up Laravel Fortify with the suave and sophisticated Laravel Sanctum. Imagine it like asking your bouncer to work in harmony with a doorman from another equally fabulous club! 💃🕺

[Laravel Sanctum](https://laravel.com/docs/sanctum) - your new BFF for all things SPAs and authentication. 💖😎✨

 Alrighty then! Laravel Fortify turns login requests into a dance party of classes, all choreographed through an invokable pipeline. If you're feeling fancy, you can create your own sequel of steps for these login shenanigans. Each class should waltz their way onto the stage with an `__invoke` method that accepts a cool `Illuminate\Http\Request` as its dance partner and a `$next` variable to keep the party going by inviting the next class in line for a spin.

To start your own production, you can use the `Fortify::authenticateThrough` method, which expects a closure that returns an array of classes to lead the dance. This is usually performed in the `boot` method of your `App\Providers\FortifyServiceProvider` class.

Here's a peek at the default routine for inspiration as you create your own moves:

```php
use Laravel\Fortify\Actions\AttemptToAuthenticate; // The grand finale!
use Laravel\Fortify\Actions\CanonicalizeUsername; // Make sure all usernames are spelled correctly, no typos allowed!
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled; // Check for throttling to keep things fair and square.
use Laravel\Fortify\Actions\PrepareAuthenticatedSession; // Prep the session for a successful login.
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable; // If Two-Factor Authentication is enabled, redirect accordingly.
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;
use Illuminate\Http\Request;

Fortify::authenticateThrough(function (Request $request) {
    return array_filter([
            config('fortify.limiters.login') ? null : EnsureLoginIsNotThrottled::class, // If throttling isn't enabled, skip this step.
            config('fortify.lowercase_usernames') ? CanonicalizeUsername::class : null, // Enable lowercase usernames? Let's make it rain alphabets!
            Features::enabled(Features::twoFactorAuthentication()) ? RedirectIfTwoFactorAuthenticatable::class : null, // If Two-Factor Authentication is enabled, it's time to get tangled in the two-step.
            AttemptToAuthenticate::class, // Time for the grand finale! Let's dance our way to a successful login.
            PrepareAuthenticatedSession::class, // A successful login means it's time to prep the session for a fantastic after-party.
    ]);
});
```

So grab your dance partners and let's get this login party started! 💃🏽🕺🏼

 Alright, buckle up, cyber-pioneers! Let's dive into the world of Fortify's Authentication Throttling, where we keep those pesky bots and hacker squirrels at bay. By default, it's like having a bouncer at the digital door of your app, checking IDs (username-IP combos) before letting anyone in. But hey, who needs one bouncer when you can have an entire security squad? That's where customization comes in!

Fancy yourself as more of a throttle control freak than the average bear? Fortify hears ya! With its sleek configuration options, you can specify your very own rate limiter via the `fortify.limiters.login` setting. This option is nestled snugly within your application's `config/fortify.php` file - think of it as a secret passphrase to your app's secure settings room.

[!NOTE]
Now, here's the real party trick: throw in some two-factor authentication (2FA) and an external web application firewall (WAF), and you've got yourself a veritable security trifecta that'll keep your legit app users safer than a fortnight's supply of canned spam.

And if customizing the throttle redirects is more your speed, why not jump on board the Authentication Redirect Express? All aboard! (Ahem, you'll find details under <a name="customizing-authentication-redirects"></a>) 🚂

 ### Rockin' Redirects and Rollin' Responses

Alrighty, buckle up as we dive into the whirlwind world of customizing redirects! (Imagine a dramatic movie soundtrack here) 🎺

When you successfully log in, Fortify'll whisk you away to the URI specified via the `home` option deep within your application's `fortify` config file. If the login was an AJAX request (think magic tricks), it'll return a 200 response instead. After logging out, well, there's no escaping - you'll be back at the ol' home base, `/`.

But what if you want to unleash the power of advanced customization? Fear not, my friend! You can bind implementations of the swanky `LoginResponse` and the debonair `LogoutResponse` contracts into Laravel's Service Container. (Think of it like a posh, high-tech country club where only the coolest contracts hang out.)

This shindig usually happens within the `register` method of your application's `App\Providers\FortifyServiceProvider` class:

```php
Use Laravel\Fortify\Contracts\LogoutResponse as Contract;

/**
 * Register any application services.
 */
public function register(): void
{
    $this->app->instance(Contract::class, new class implements Contract {
        public function toResponse($request)
        {
            return redirect('/'); // Redirect back to the starting point!
        }
    });
}
```

And there you have it! You're now the maestro of redirects and the king of responses. Just remember, with great power comes great responsibility (and maybe a snazzy cape). 🚀🦸‍♂️

 ## Two-Steps-Ahead Authentication (2SA)

Welcome, cyber-safety aficionados! Fasten your seatbelts as we dive into the exciting world of 2SA, the security feature that's got more digits than a calculus textbook. With this bad boy enabled, your users will need to provide not just their secret password, but also a magical six-digit numeric token. This token is generated using a Time-Based One-Time Password (TOTP), which sounds like something straight out of Harry Potter's world!

But where does one find such an enchanted number? Fear not! Just download any TOTP compatible mobile authentication app, like Google Authenticator. It's as easy as downloading a free game and trying to figure out how to win it (you never do).

First things first: make sure your application's `App\Models\User` model is equipped with the `Laravel\Fortify\TwoFactorAuthenticatable` trait. It's like giving your user model a superpower suit, but instead of fighting crime, it fights off cybercriminals!

```php
<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable
{
    use Notifiable, TwoFactorAuthenticatable;
}
```

Next up, we need to create a screen within your application that lets users manage their 2SA settings. Think of it as their very own secret lair, but instead of storing supervillain weapons, they'll store security settings! This control center should allow them to activate and deactivate 2SA, as well as regenerate their 2SA recovery codes (just in case they lose their phone or start growing a supervillainous beard).

> By default, the `features` array of the `fortify` configuration file tells Fortify's 2SA settings to require password confirmation before any modifications. So if your application hasn't implemented Fortify's [password confirmation](#password-confirmation) feature yet, it's time to suit up and get to work!

 Alrighty, here's your guide to turning on Laravel's Two-Step Bouncer, aka TSA for apps! 🛂

First off, send a POST request to the swanky `/user/two-factor-authentication` endpoint, like you would ask your favorite barista for a double espresso. If all goes well, your user will be whisked back to their previous URL, and a secret session variable named `two-factor-authentication-enabled` will magically appear. You can sniff this out in your templates to display a triumphant success message, something like:

```html
@if (session('status') === 'twosome-authenticator-activated')
    <div class="mb-4 font-medium text-sm">
        Alrighty then! Let's wrap up the two-step setup below. 🕺
    </div>
@endif
```

But hold your horses! Just because we've initiated the dance doesn't mean it's over – the user still needs to confirm their two-factor auth settings by providing a valid code, like you'd have to show ID at a fancy party. That means your success message should politely remind them that they're not quite done yet:

```html
@if (session('status') == 'two-factor-authentication-enabled')
    <div class="mb-4 font-medium text-sm">
        Whoa there, partner! Two-step confirmation time! 🕺
    </div>
@endif
```

Next up, it's time to unveil the two-factor auth QR code for your user to scan like a modern-day treasure map. If you're using Blade for your frontend, you can grab the QR code SVG using the `twoFactorQrCodeSvg` method on the user instance:

```php
$request->user()->twoFactorQrCodeSvg();
```

If you're building a JavaScript-powered frontend, make an XHR GET request to the `/user/two-factor-qr-code` endpoint to fetch the user's two-factor auth QR code. This endpoint will serve up a JSON object with an `svg` key. 🎁

<a name="confirming-two-factor-authentication"></a>
Now that your user has scanned the QR code, they can confirm their two-factor auth settings by entering the provided code. After which, they'll have earned their cybersecurity badge and can rest easy knowing they've leveled up their app security game! 🏆🎉

 Ahoy there, aspiring coders! Let's dive into the thrilling world of Laravel Two-Factor Authentication, shall we?

First things first, you need to show your user a QR code for their two-factor authentication like it's a treasure map to buried digital gold. But we also want to provide a swashbuckling text input where they can enter the secret pirate code (or authentication code, if you prefer) to validate their setup. This magical code must sail its way to our Laravel ship via a trusty POST request, destined for the `/user/confirmed-two-factor-authentication` port manned by Fortify.

Should this voyage be successful, prepare yourself for a rousing cheer! The user will be directed back to their original coordinates, and the `status` session variable will be set to "two-factor-authentication-confirmed", triggering this jolly celebration:

```html
@if (session('status') === 'two-factor-authentication-confirmed')
    <div class="mb-4 font-medium text-sm">
        Hoist the Jolly Roger! Two-factor authentication confirmed and enabled like a well-aimed cannonball!
    </div>
@endif
```

In case you've been making your requests with XHR (the pirate's walkie-talkie), fear not, for a resounding `200` will be hoisted in response.

Now, grab yer compass and navigate to the next section, where we'll uncover the exciting process of Displaying Recovery Codes! Arrrr! 🏴‍☠️

 Alrighty, let's dive into the world of two-step verification fun times! If you're displaying your app's frontend with Blade (which, let's face it, is cooler than a cucumber in a snowstorm), you can access those delightful recovery codes like so:

```php
(array) $request->user()->recoveryCodes()
```

Just imagine, with these codes, your users can authenticate even if they've misplaced their trusty mobile devices. Don't laugh too hard; it happens to the best of us!

Now, for those JavaScript whizzes out there building a frontend as lively as a one-legged chicken, you might wanna make an XHR GET request to the `/user/two-factor-recovery-codes` endpoint. This little endpoint will serve up a JSON array full of your user's recovery codes, ready for you to snack on!

But wait, there's more! If you want to regenerate those recovery codes (perhaps because your user has developed a habit of losing things), your application can make a POST request to the same `/user/two-factor-recovery-codes` endpoint. It's like pressing the reset button on a game console, but for security!

And that's all folks! Now you know how to handle those recovery codes with style and grace. Keep up the good work, and remember: always be prepared for those unavoidable "Oh no, where did I put my phone again?" moments.

 Alrighty, buckle up for some cybersecurity chuckles! Let's dive into the world of Two-Factor Authentication (TFA), aka "that extra step that prevents your account from being hijacked by intergalactic cyber squirrels."

During login, Fortify, our super-smart security guard, will kick things off by redirecting users to your application's TFA challenge screen. But, if your app is making an XHR (AJAX) login request, it'll return a JSON object with a `two_factor` boolean property, letting you know whether or not it's time for the TFA dance.

To get the TFA party started, we need to give Fortify some instructions on how to serve our custom TFA challenge view. This can be done by summoning the mighty `Laravel\Fortify\Fortify` class's various methods from within your application's `App\Providers\FortifyServiceProvider` class, specifically in its `boot` method:

```php
use Laravel\Fortify\Fortify;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Fortify::twoFactorChallengeView(function () {
        return view('auth.two-factor-challenge'); // Yes, you can name your views after whatever tickles your fancy!
    });

    // ...
}
```

Once that's done, Fortify will handle the creation of the `/two-factor-challenge` route and serve up our custom TFA challenge view. Your trusty `two-factor-challenge` template should include a form that sends a POST request to the `/two-factor-challenge` endpoint, complete with a `code` field for Time-based One-time Password (TOTP) tokens or a `recovery_code` field for those emergency situations when you left your phone at home.

If the login attempt is successful, Fortify will send users to the URI defined in your application's `fortify` configuration file's `home` option. If it was an XHR request, a 204 (No Content) HTTP response will be returned, ensuring your app keeps its cool.

But, if things don't go as planned, Fortify will send users back to the TFA challenge screen, and the validation errors will be available via the shared `$errors` [Blade template variable](/docs/{{version}}/validation#quick-displaying-the-validation-errors). Or, in the case of an XHR request, the validation errors will return with a 422 (Unprocessable Entity) HTTP response.

And that's your TFA tutorial! Now you can rest easy knowing that your application is protected against cyber squirrels and other nefarious characters. Happy securing!

 ### Unlocking Your Account from Two-Step Tyranny! 🔓

Ah, the sweet taste of freedom! You've decided to break free from the chains of two-factor authentication? Brave soul, we salute you! Let us guide you through this daring escape.

First off, gather your rebellion forces and make a DELETE request to the `/user/two-factor-authentication` endpoint. Think of it as sending a digital 'torches-and-pitchforks' message to our two-step tyrant! 🔥🗜️

But wait, hold your horses (or torch carriers)! Fortify's two-factor fortress won't just let you in without proof of identity. It demands [password confirmation](#password-confirmation) as a ransom before opening its gates. So make sure to have your password at the ready, or you'll be back to square one faster than you can say "Where's my authentication cookie?" 🍪

Now, charge forward, and may the two-factor tyrant never trouble you again! 🚀✨

 Alrighty, let's dive into the whirlwind world of registration! To get our app's sign-up process humming like a well-oiled machine, we gotta school Fortify on spitting out our "register" page. Remember, Fortify is the cool kid at the party who only shows up for the snacks and leaves you with all the clean-up – but in this case, it's got some pretty nifty authentication skills!

If you're yearning for a pre-packaged frontend to go along with Laravel's built-in auth features, then you'll want to check out an [application starter kit](/docs/{{version}}/starter-kits). It's like getting a ready-to-wear suit instead of sewing your own.

Now, Fortify offers plenty of customization options for rendering those views. You can tweak its logic using the swanky methods tucked away in the `Laravel\Fortify\Fortify` class. Typically, you should call this method from the `boot` method of your `App\Providers\FortifyServiceProvider` class:

```php
use Laravel\Fortify\Fortify;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Fortify::registerView(function () {
        return view('auth.register'); // Don't forget the champagne and caviar!
    });

    // ...
}
```

Fortify will take care of defining the `/register` route, which will dish out that fancy new page. Your "register" template should sport a form that sends a POST request to the `/register` endpoint Fortify has so thoughtfully created for you.

The `/register` endpoint craves a string `name`, email address / username, `password`, and `password_confirmation` fields. The name of the email / username field should match the `username` configuration value defined within your application's `fortify` configuration file – sorta like matching socks in a laundry basket!

If the registration process goes off without a hitch, Fortify will whisk the user away to the URI specified via the `home` configuration option within your application's `fortify` configuration file. If it was an AJAX request, Fortify will return a 201 HTTP response like a proud new parent showing off their baby.

If the registration attempt wasn't successful, the user will get booted back to the registration screen, and you can catch the validation errors using the shared `$errors` [Blade template variable](/docs/{{version}}/validation#quick-displaying-the-validation-errors). Or, in the case of an AJAX request, the validation errors will be served up with a 422 HTTP response – just like a savory side dish to your main course!

<a name="customizing-registration"></a>
Want to customize this registration process even further? Stay tuned for more fun adventures in Fortify land!

 Ah, the thrill of crafting your very own custom registration experience! 🎨🎭🤩 Let's not forget about Laravel Fortify - it's like your very own personal DJ for user validation and creation.

🌟✨ Just like that smash-hit track you heard at the club last weekend, to remix the registration process, all you gotta do is tweak the `App\Actions\Fortify\CreateNewUser` action - a dance number generated during Laravel Fortify's grand installation party. 🕺💃

Now, before we dive into the nitty-gritty details (and by nitty-gritty, I mean those tantalizing technical tidbits), let's take a moment to appreciate how easy it is to customize this process:

<a name="password-reset"></a>
"Password resets? Pfff! Let me just *snap* my fingers and voila!" 💥🌈🔮 Just like that magical trick, resetting those forgotten passwords can also be fine-tuned to fit your app's unique personality - and all without a single incantation or crystal ball required! 🧙‍♂️✨

 ### Unlocking Your Fortress of Solitude! 🚀🔑

You've found yourself locked out, Superman-style, and you need a password reset link to break free from this digital Kryptonite. Fear not! Our password reset feature is here to save the day. Here's how:

1. Navigate to our site like a modern-day Odysseus journeying home.
2. Click on the "Forgot Password" link, which will lead you to the password reset page - think of it as a magical portal or Batcave entrance.
3. Enter your email address into the Batsignal (we mean the box) and press "Send Request." Remember, even if Gotham's under siege, we'll still get that signal through!
4. Keep an eye on your inbox for our heroic message. It's not a spammy Green Goblin pumpkin bomb; it's a password reset link, waiting to save the day!
5. Click on the link, and voila! You'll be transported to a page where you can craft a new password – because even Batman needs a fresh password every now and then!
6. Confirm your new password, and off you go, back into the world of Laravel, ready to build more fantastic apps! 💻🚀

### Resetting Your Password with the Link 🔒🔧

1. Click on the password reset link in your email (don't worry, it won't explode like a Joker bomb).
2. Enter the verification code we sent you – it's not a Riddler riddle, but close enough!
3. Create a new password using our guidelines for safety and security (we promise it'll be easier than learning to juggle flaming bat-sticks).
4. Confirm your new password, and click "Reset Password." Just like that, you've unlocked the fortress of solitude! 🔓🎉
5. Log back into Laravel, ready to continue building amazing apps or fighting evil robots (we won't judge).

 Alrighty then! Let's dive into the world of password resets, where even Superman needs a helping hand. Now, you might be wondering how to get this party started with our application's password reset feature. Well, buckle up, because it's time to brief Fortify on our plans for the "forgot password" dance floor!

Remember, Fortify is like that chill bartender who mixes your cocktails without the glasses - a headless authentication library. If you're looking for a fully-stocked bar of Laravel's authentication features, consider ordering an [application starter kit](/docs/{{version}}/starter-kits) to skip the DIY line.

Now, let's customize Fortify's view rendering logic like a pro! All you need is a bit of PHP magic and the `Laravel\Fortify\Fortify` class. Typically, this sorcery happens in the `boot` method of your application's `App\Providers\FortifyServiceProvider` class:

```php
use Laravel\Fortify\Fortify;

/**
 * The day after the night before
 */
public function boot(): void
{
    Fortify::requestPasswordResetLinkView(function () {
        return view('auth.forgot-password'); // Don't forget to bring your dancing shoes!
    });

    // ... Continue the party...
}
```

Once Fortify gets wind of this, they'll whisk up a `/forgot-password` shindig that serves our delightful dance floor (your `forgot-password` template). Make sure your dance floor includes a form that knows the right steps to POST its requests to the `/forgot-password` endpoint.

The `/forgot-password` event expects a string `email` field, and it's crucial that this name matches the `email` configuration value within your application's `fortify` configuration file. It's like trying to find Waldo without his stripes!

 Alrighty then! Let's dive into the ticklish world of password resets, shall we?

If Fortify deems your password reset link request as tantalizingly scrumptious (i.e., successful), it'll whisk you back to the delightfully named `/forgot-password` endpoint, and send a secret email with a password-resetting link straight to your inbox. In case of an XHR request, it'll return a 200 HTTP response, which is like the digital equivalent of a standing ovation.

Once you're back at the `/forgot-password` endpoint after a successful request, you can use the `status` session variable to display the status (or gossip) about your password reset link request attempt.

The value of this `$status` session variable will match one of those translation strings that your application's `passwords` [language file](/docs/{{version}}/localization) has so carefully tucked away. If you fancy a bit of customization and haven't yet published Laravel's language files, simply unleash the `lang:publish` Artisan command to set things right:

```html
@if (session('status'))
    <div class="mb-4 font-medium text-sm text-green-600">
        {{ session('status') }}
    </div>
@endif
```

But what if your password reset link request fell flat like a lead balloon? Fret not! You'll be politely escorted back to the "Request a Password Reset Link" screen, and the validation errors will be at your disposal via the ever-helpful `$errors` [Blade template variable](/docs/{{version}}/validation#quick-displaying-the-validation-errors). In the event of an XHR request, the validation errors will be returned with a 422 HTTP response – a friendly reminder that there's still room for improvement.

Now, wasn't that more entertaining than a barrel full of monkeys? Or a cat video marathon? You decide! 😸

 Alrighty, let's get our password reset party started! To make Fortify think we're cool, we gotta teach it to serve up our snazzy "reset your password" view like a well-dressed bartender serving martinis.

Fortify has quite the mixology skills, but it can be customized with its very own secret cocktail recipes, thanks to the charming `Laravel\Fortify\Fortify` class. You'll want to mix this magic in your application's `App\Providers\FortifyServiceProvider` bash, specifically at the `boot` event:

```php
use Laravel\Fortify\Fortify;
use Illuminate\Http\Request;

/**
 * Get the party started!
 */
public function boot(): void
{
    Fortify::resetPasswordView(function (Request $request) {
        return view('auth.reset-password', ['request' => $request]);
    });

    // ... Keep the party going!
}
```

Fortify will take care of defining the fancy route for this swanky new view. Your `reset-password` shindig should feature a form that sends a POST request to `/reset-password`.

The `/reset-password` dance floor expects some essential fields: an `email`, a `password`, a password confirmation (for good measure), and a hidden VIP area named `token` containing the value of `request()->route('token')`. The email field's name / database column should match the `email` configuration value defined within your application's `fortify` cocktail menu.

<a name="handling-the-password-reset-response"></a>
Now, let's talk about handling that password reset response like a pro. You'll want to catch any password changes and give your user the sweet taste of success or the bitter sting of failure:

```php
use Illuminate\Http\Request;
use Laravel\Fortify\PasswordResetResponse;

/**
 * Handle the password reset response.
 */
public function handle(Request $request, PasswordResetResponse $response)
{
    if ($response->hasSuccess()) {
        // Password successfully updated. Redirect user to homepage!
        return redirect('/');
    } else {
        // Password update failed. Serve up an error page.
        return view('auth.passwords.reset_failed');
    }
}
```

And there you have it, folks! Your password reset feature is now a swanky, sophisticated affair that'll make your users feel like they just stepped into the coolest club in town. Party on! 🎉💃🏽🕺🏼

 Alrighty then! Let's put on our party hats and dive into Fortify's password reset extravaganza!

#### Password Reset Party Favor Returns

When your password reset request hits the big time, Fortify will whisk you back to the dance floor of `/login` so you can boogie down with your new credentials. In addition, a little ol' `status` session variable will be set a-dancing, enabling you to flaunt your successful reset on the login screen:

```blade
@if (session('status'))
    <div class="mb-4 font-medium text-sm text-green-600">
        {{ session('status') }}
    </div>
@endif
```

Now, if this password reset bash was an XHR shindig, a 200 HTTP response will be served up like hors d'oeuvres.

But, if the party doesn't go as planned, don't you worry! Fortify will politely escort you back to the reset password stage and hand over the validation error invitations via the shared `$errors` [Blade template variable](/docs/{{version}}/validation#quick-displaying-the-validation-errors). Or, in an XHR case, the validation errors will slide down the pole with a 422 HTTP response.

<a name="customizing-password-resets"></a>
Hold onto your party hats! It's time to customize those password resets like a pro.

 Ah, the password reset shenanigans! A staple in our digital lives, akin to finding the perfect meme or a good pickle recipe. But fear not, Laravel Fortify is here to make your password drama less dramatic.

First off, let's dive into customizing this password circus. You can find the main act - `App\Actions\ResetUserPassword` action - in the wings (or rather, the installed Laravel Fortify). It's like backstage at a magic show, but with less smoke and more code.

Now, if you're wondering why this action is so important, let me break it down for you: It's the puppet master pulling the strings of your password reset process. Change its moves, and you change the show!

But remember, like a good stand-up comedian, timing is everything. Be sure to handle the token verification, password hashing, and user updates with care, or else you might end up bombing on stage (or worse, leaking sensitive data).

So grab your code wand, get ready to conjure up some magic, and let's make your password reset process a standing ovation worthy event! 🌟🎭🎉

 Ahoy there, Captain! You've sailed into the realm of Email Verification, matey! After a swashbuckling sign-up, your users might be asked to walk the plank (er, verify their email) before they can set sail on your application. Let's get this show on the road!

First things first, make sure that the `emailVerification` feature is hoisted on your `fortify` config ship's features array. Next, have your `App\Models\User` class don a pirate hat and learn to wield the `Illuminate\Contracts\Auth\MustVerifyEmail` cutlass!

With these two shanties sung, newly-recruited swabbees will find themselves on the receiving end of an email urging them to verify their seafaring address. But how do we convince Fortify to steer the ship towards the right verification screen?

Fear not, me hearty! Fortify's got a treasure trove of methods for customizing its view rendering logic, all accessible via the `Laravel\Fortify\Fortify` class. To set sail, call this method from the `boot` function of your application's `App\Providers\FortifyServiceProvider` ship:

```php
use Laravel\Fortify\Fortify;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Fortify::verifyEmailView(function () {
        return view('auth.verify-email');
    });

    // ...
}
```

Fortify, being a trusty matey, will define the route that leads to this view when a user gets redirected to the `/email/verify` port by Laravel's built-in `verified` middleware.

Your `verify-email` template should be brimming with pirate humor, such as an informational message instructing the user to click the email verification link that's been shot across the bow (er, sent to their email address). Arr matey, now you're all set!

 Alrighty then, let's dive into the ticklish topic of resending those pesky, yet essential, email verification links! You see, your app might end up in a pickle when users lose their original link, or worse, accidentally hit 'delete' on it (we've all been there, right?).

No worries, Laravel's got you covered. Add a button to your `verify-email` template that points to the `/email/verification-notification` endpoint. This fancy route will send a new verification link to the user in an email, just like a digital lifeline!

Now, when this request is processed successfully (yay!), Fortify will whisk the user back to the `/email/verify` endpoint and set a `status` session variable. This magical session lets you flash a friendly message saying, "Operation successful! A brand-new email verification link has landed in your inbox!"

And if this was an XHR request (that's developer speak for AJAX), Fortify will return a 202 HTTP response, meaning "Accepted, but processing may not be complete yet." Just like when you ask Alexa to play your favorite song, and she nods along while it takes forever to load.

Here's how you can display that message in your Blade template:

```blade
@if (session('status') == 'verification-link-sent')
    <div class="mb-4 font-medium text-sm text-green-600">
        A new email verification link has been emailed to you! 📧🎉
    </div>
@endif
```

Now, your users can breathe easy knowing they've got a second chance when it comes to verifying their emails! 😊💪💻

 ### Guarding Your Secret Stash (A.K.A Routes)! 🔒

Alrighty, buddy! If you want to ensure that only the well-mannered email verified folks can access your exclusive secret stashes (routes), you best slap on Laravel's in-house `verified` middleware! Don't worry, this bad boy is already registered by Laravel as an alias for `Illuminate\Auth\Middleware\EnsureEmailIsVerified`.

So, if you want your dashboard to be as private as a secret agent's safe, here's how you do it:

```php
Route::get('/dashboard', function () {
    // ...
})->middleware(['verified']);

```

Just remember, this middleware is like the bouncer at an exclusive nightclub – only the verified folks get in! 🤘🏽🌟

 Alrighty then! Let's dive into the world of password confirmations in your Laravel app, shall we?

So, imagine this: You're cooking up a storm in your app's kitchen (aka coding), and suddenly you realize you need to double-check that your users aren't pulling a 'Willy Wonka with the everlasting gobstoppers' (messing around without confirming their password first). Fear not, Laravel's got your back with its built-in `password.confirm` middleware!

But, hold up! Fortify ain't just a pretty face; it's a headless authentication library, which means it can't dance the tango or whistle a happy tune, but it sure knows how to return your app's password confirmation view like a pro. If you're hankering for a fully-fledged frontend implementation of Laravel's authentication features, then you should give an application starter kit a whirl.

Now, let's get down to business. You can customize Fortify's view rendering logic using the `Laravel\Fortify\Fortify` class. This is where the magic happens: in your `App\Providers\FortifyServiceProvider` class's `boot` method.

```php
use Laravel\Fortify\Fortify;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Fortify::confirmPasswordView(function () {
        return view('auth.confirm-password');
    });

    // ...
}
```

Fortify will then define the `/user/confirm-password` endpoint, which serves up your `confirm-password` view like a well-trained waiter. Your `confirm-password` template should include a form that sends a POST request to the same `/user/confirm-password` endpoint. The endpoint anticipates a `password` field with the user's current password.

If everything checks out, Fortify will send your user on their merry way to the route they were aiming for (unless it's an XHR request in which case, a 201 HTTP response will be served). However, if things don't go as planned, the user will be sent back to the password confirmation screen, and you can access the validation errors via the shared `$errors` Blade template variable. Or, in the case of an XHR request, the validation errors will be returned with a 422 HTTP response.

And there you have it! Now your app can double-check users' passwords like a hawk on a hunt, all thanks to Laravel's built-in `password.confirm` middleware and Fortify's customizable view rendering logic. Happy coding!