 # The Incredible Journey of Email Verification! 🚀📧

Get ready to embark on an epic adventure through the magical land of account verification! 🎉🌈

<a name="model-preparation"></a>
## Prepping Your Model (Our Brave Knight) 🛡️

Before setting off, make sure your model is well-equipped with all the necessary email verification traits. Don't forget to arm it with a `verified_email` field! ⚔️📝

<a name="database-preparation"></a>
## Setting Up the Kingdom (Database) 🏰🗺️

Now that your model is prepared, let's lay out our kingdom's infrastructure. Create a `verified_emails` table and all its glorious columns to keep track of our verification statuses! 👑🗝️

<a name="verification-routing"></a>
## The Royal Route (Routing) 🚦🏰

Navigate through the winding roads of routing, where we'll establish several essential stops along the way.

### The Verification Notice Post Office 📣🗞️

Our first stop is at the post office, where we'll compose and send out the initial verification emails to our subjects! 💌🔥

### The Verification Handler (The Royal Court) 🏰✍️

Next, let's head over to the royal court, where our brave knights will handle the verification requests received from all corners of the land. 🛡️👑

### Resending the Misplaced Letter (Email) 📧🔍

In case a letter gets lost in transit, we'll need to implement a system for resending those emails with a friendly reminder! 📮😱

### Protecting Our Castle from Intruders (Protecting Routes) 🛡️🏯

Lastly, let's fortify our castle walls by ensuring that only verified subjects can enter the realm of protected routes! 🏰🔐

<a name="customization"></a>
## Customizing Our Kingdom (Customization) 🎨👑

Once we've established the foundations, let's make our kingdom truly unique by customizing every little detail to our liking! 🎨💅

<a name="events"></a>
## Announcing Royal Happenings (Events) 📢🏰

Last but not least, let's celebrate the joyous moments of email verification with events, complete with fanfare and fireworks! 🎉🎇

 ## Let's Get Verified, Shall We?

Attention all web adventurers! If you've ever found yourself in a pickle trying to wrangle your users' emails like a digital wrasslin' match, fear no more! Laravel, your friendly neighborhood super-library, is here to save the day with its email verification services. No need for repetitive strain injury when building each new app - we've got your back!

> [!ATTN: BAMF ALERT]
> Ready to sprint past the competition? Get your cape flying with one of our [Laravel application starter kits](/docs/{{version}}/starter-kits) in a fresh Laravel app. These kits will whisk you off your feet, scaffolding an entire authentication system (including email verification, because we're all about making life easier).

<a name="model-preparation"></a>

Now, let's get our models ready for the big event! (No tuxedos required.)

 Alright, let's dive into the world of Laravel Model Prep-show! 🎯 Before we get our groove on, make sure your `App\Models\User` model is not shy and knows how to dance with the `Illuminate\Contracts\Auth\MustVerifyEmail` contract. Here's a little jive it might want to learn:

```php
<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;  // Don't be a wallflower, join the dance floor!
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    // ...
}
```

Once it's learned this dance, newly registered users will receive an email invitation to join the party—an email containing a verification link. The best part? Laravel is the ultimate hype man, automatically registering the `Illuminate\Auth\Listeners\SendEmailVerificationNotification` [listener](/docs/{{version}}/events) for the `Illuminate\Auth\Events\Registered` event, ensuring your model gets all the attention it deserves! 🎉

If your application is more of a DIY project and you're manually implementing registration instead of using one of our starter kits, don't forget to dispatch the `Illuminate\Auth\Events\Registered` event after a user's successful registration:

```php
use Illuminate\Auth\Events\Registered;

event(new Registered($user));  // Send out those invitations!
```

Now, let's get this party started! 🥳

 Alrighty, let's get our nerd on and dive into the world of Laravel Database Preparation!

First things first, it's time to deck out your `users` table with some swanky new digs. This is where we add an `email_verified_at` column—a chic little place to store the exact moment that one of your users officially verified their email address. You can think of this as the "red carpet" or the "official welcome-to-the-party" of the digital world for your user.

Now, you might be wondering where this magical column comes from—worry not! Laravel's default `0001_01_00_000001_create_users_table.php` database migration is where it hangs out when it's not making new friends in your database.

<a name="verification-routing"></a>
But wait, there's more! The party doesn't stop here—we've just stepped into the cocktail hour of our Laravel journey. Next up, we'll learn about routing for email verification! (Cue confetti and champagne bottles popping open) 🎉🥳🍾

Just kidding, it's not really that fancy—but it is pretty darn important. Let's get this show on the road!

 Ahoy there, intrepid Laravel coders! 🌴🐠 Let's dive into the vibrant world of routing, shall we? 🌊🤿

First off, we need to create a route that serves as a friendly reminder to our users. You know, like when your mom tells you to put on a jacket before heading outside. In this case, it's telling them to click the email verification link that Laravel sent them after they registered - it's their gateway to becoming a fully-fledged member of our awesome community! 🎉🎊

Next up, we've got the route that will handle requests like a well-trained butler handling a high tea service. You know, graceful, efficient, and just a little bit snobby. This route is in charge when our users click the verification link in their email. It'll take care of verifying their account, allowing them to join the ranks of the verified and respected! 🌐👑

Last but certainly not least, we need a route that will come to the rescue when users accidentally lose the first verification link. It's like finding your car keys in the fridge - sometimes things just get misplaced, and you've got to have a backup plan! This route will send a new verification link to help our users get back on track. 🔑☕️

So there you have it, three routes that will guide our users through the email verification process like a well-choreographed dance. Now go forth and route with pride, dear developers! 💃🕺🌍💪

 Alrighty then! Let's get our virtual feathers all ruffled about email verification, shall we? 🦃

As we've chirped before, it's pivotal to establish a route that'll serve up a view asking your newly-registered user to peck on that email verification link they got from Laravel post-registration. This view is quite the peacock strut when users attempt to flutter about other parts of your app sans verified email address. Remember, this link will automatically be sent out like a digital carrier pigeon as long as your `App\Models\User` model dons the snazzy `MustVerifyEmail` interface:

```php
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');
```

Now, mark this route down in your rolodex as `verification.notice`. It's crucial that this name ain't altered a bit since the `verified` middleware (which comes bundled with Laravel) will perform a clever little redirect to this route name if a user hasn't verified their email address yet.

> [!NOTE]
> When crafting your email verification process by hand, you'll be expected to compose the contents of that very same verification notice view yourself. If you fancy some assistance with all things authentication and verification views, take a gander at our [Laravel application starter kits](/docs/{{version}}/starter-kits).

<a name="the-email-verification-handler"></a>

Now, wasn't that a bit more enjoyable? 😎 Let's keep the web development party going!

 Alrighty then! Let's dive into the world of email verification in Laravel land. First off, we need to create a route that'll handle those clicky-clicky moments when users confirm their emails by following the link we send 'em. This magical route should be christened `verification.verify` and decked out with the `auth` and `signed` middlewares, much like a fancy ball gown at a regal soiree. Here's the code to make it all happen:

```php
use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');
```

Now, take a gander at this route. You'll notice we're using an `EmailVerificationRequest` instead of the usual `Illuminate\Http\Request` – think of it like wearing a cape instead of a plain t-shirt to feel extra superhero-ish. The `EmailVerificationRequest` is a fancy [form request](/docs/{{version}}/validation#form-request-validation) that comes with Laravel, making it an automatic validator for the `id` and `hash` parameters in our request.

Next up, we call the `fulfill` method on the request, which is like pressing the big ol' "Verify Email" button in your email client (but more technical). This method takes care of marking the user's email as verified and dispatches an `Illuminate\Auth\Events\Verified` event – perfect for all your celebratory email-verification needs. The `markEmailAsVerified` method is available to the default `App\Models\User` model via the `Illuminate\Foundation\Auth\User` base class. Once the user's email address has been verified, you can send 'em off to any ol' destination you fancy.

<a name="resending-the-verification-email"></a>
Now, let's say our users are a bit forgetful and need another chance at verifying their emails. We can create a helper function for sending the verification email again:

```php
use Illuminate\Support\Facades\URL;

function sendVerificationEmail($user) {
    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify', now()->addMinutes(60), [
            'id' => $user->getEmailForVerification(),
            'hash' => sha1($user->getEmailForVerification()),
        ]
    );

    // ... Send the email here with the verification url
}
```

This function generates a new verification URL for the user, which they can click to verify their email. The URL is time-limited and secure, thanks to being signed and hashed. You'll want to plug this function into your registration or forgotten password process – just make sure to send the user on an exciting email journey!

 ### Re-sending the Lost-in-Space Verification Email

Whoopsy daisies! Ever found yourself in a pickle when your user's verification email went rogue on its intergalactic journey? Fear not, dear coder friend, for we have a cosmic solution to this celestial conundrum. To help our space-lost users hail their verification emails back home, you can set up a stargate (route) for them to request a reboot:

```php
Use your phaser on 'stun' and import Illuminate\Http\Request;

Route::post('/alien_emails/recall', function (Request $request) {
    $request->user()->sendAlienEmailVerificationNotification();

    return back()->with('message', 'Verification beacon activated!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.beacon');
```

Now, just hide this "request re-send" button in your [extra-terrestrial verification notice view](#the-email-verification-notice) to keep the surprise until it's needed for an emergency interstellar rescue mission.

 ### Securing Your Routes Like a Fort Knox for Pigeons!

Ah, the sweet sound of digital security! Welcome to Laravel's Route Middleware, where we protect our routes from unverified users - think of it as a bouncer at the hottest club in town.

But instead of a velvet rope, we use something called a `verified` middleware alias, which is just a fancy way of saying "That's right, pal! Show us your verification email!" The best part? Laravel has already registered this bouncer for you, so all you need to do is slap on the wristbands (attach the middleware).

Here's how you do it:

```php
Route::get('/profile', function () {
    // Only verified users with a valid membership bracelet may enter...
})->middleware(['auth', 'verified']);
```

Now, if an unverified user tries to crash the party (access a route), they'll be politely escorted to the `verification.notice` route - think of it as the line outside the club, waiting for their verification email.

And hey, you can even customize this bouncer! If you want to change the music or the drink prices, well... Laravel's got your back with [named routes](/docs/{{version}}/routing#named-routes). Just remember, it's all about keeping the club (your application) secure and the tunes bumpin'! 🥳🚀🎉

 Ahoy there, code swashbucklers! If you're feeling a tad adventurous and want to personalize your Laravel ship, this section is right up your alley. Let's dive in, shall we? 🌊🐬

<a name="verification-email-customization"></a>

### Verification Email Customization

Ah, the thrill of sending out a beautifully crafted verification email that makes the recipient say "Wow, this Laravel pirate really knows how to code!" Let's hoist the mainmast and set sail on customizing your verification emails. 🏴‍☠️

1. **Create a new view:** You can create a new blade file in the `emails` directory, giving it the name of the email you want to customize (e.g., `verify` for the welcome email).

```
php artisan make:mail verify
```

2. **Edit the newly created file:** Now that you have your very own verification email template, feel free to tinker with it to your heart's content. Don't forget to use Laravel's built-in helper functions like `trans($key)` and `url($url)`.

3. **Set the view for the welcome email:** Open up your `AppServiceProvider` class and let's point the welcome email towards its newly customized destination by updating the `sendVerificationEmail` method:

```php
use Illuminate\Support\Facades\Mail;

// ...
public function boot()
{
    $this->app->booted(function () {
        if ($this->app->environment('local', 'testing')) {
            event(new \Illuminate\Queue\Events\Queued($this->app['queue']));
        }

        Mail::send(['html' => 'emails.verify'], $data, function ($message) {
            // Customize your email here! 🎨
        });
    });
}
```

Now, the next time a user signs up for your Laravel treasure hunt, they'll be greeted with an email that is nothing short of a masterpiece. 🎉

Remember, customization is like adding a parrot on your shoulder – it makes you stand out from the rest! So, grab your compass and set sail towards even greater adventures in Laravel land. Arr matey! ROT 🏴‍☠️

 Ahoy there, code pirates! 🌴🌊 If you're here, it means you've taken the plunge into Laravel waters and are ready to customize that email verification shanty of yours. 🎺📧

By default, our shipshape emails should be enough to make Davy Jones himself click 'verify', but if ye hanker for more, Laravel lets you refit the cannons (email notifications) to your heart's desire! 🐳🌮

To embark on this customization voyage, hoist the sail and pass a 'closure' matey, to the `toMailUsing` method, provided by the `Illuminate\Auth\Notifications\VerifyEmail` notification. This closure will accept two arguments: the notifiable model instance that's about to get its inbox flooded, and the signed email verification URL the user must navigate to verify their email address. The closure should eventually return an instance of `Illuminate\Notifications\Messages\MailMessage`.

You'll want to set sail from the `boot` method of your application's `AppServiceProvider` class:

```php
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

/**
 * Shake the ship's rigging and wake up the crew.
 */
public function boot(): void
{
    // ...

    VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
        return (new MailMessage)
            ->subject('Yo Ho, Verify Yonder Email Address')
            ->line('Arrr, click this button below to verify yer email address.')
            ->action('Verify Email Address', $url);
    });
}
```

> [!NOTE]
> If ye want more tales of the sea (mail notifications), hoist the Jolly Roger and head over to the [mail notification documentation](/docs/{{version}}/notifications#mail-notifications). 🏴‍☠️⚓️

 Alright, listen up, tech-savvy cowpokes! Let's gallop into the wild world of Laravel Events, shall we?

When you're corralling those app ponies with our handy starter kits (available at /docs/{{version}}/starter-kits), Laravel saddles up and fires off an `Illuminate\Auth\Events\Verified` event during the email verification rodeo. Now, if you're handling your own wrangling of emails for your application, you might find yourself hankering to manually unleash these events after the lassoing is done.

So, put on your ten-gallon hat and let's get this roundup started! If you're itchin' to learn more about Laravel Events, you can head over to /docs/{{version}}/events for some educational horseback riding. Yeehaw! 🤠🐎🌵