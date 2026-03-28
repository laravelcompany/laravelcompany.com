 ## The Great Laravel Password Adventure

### 📝 Introduction (A.K.A. Let's Get This Party Started!)

#### 🔧 Configuration (Gear Up for the Tech Talk)
- Fine-tune your settings like a master chef adjusting his spices, but for code instead of food.

#### 🚀 Driver Prerequisites (Get Your Engines Ready)
- Ensure all necessary drivers are in tip-top shape before we embark on this password-resetting escapade.

#### 🛠️ Model Preparation (Building Blocks, if you will)
- Sculpt your models into the perfect shape for handling those password-related tasks with finesse and style.

#### 🔒 Configuring Trusted Hosts (Only the trusted get to play in our sandbox)
- Set up a list of hosts that we trust not to impersonate your users.

<a name="routing"></a>

## Navigation (The Path to Password Freedom)

#### 📮 Requesting the Password Reset Link (Sending the SOS)
- Dispatch a message to the user, asking them if they've forgotten their password and need help.

#### 🔨 Resetting the Password (Fixing what was broken)
- Assist your users in crafting a new password, strengthening their account security with every keystroke.

<a name="deleting-expired-tokens"></a>

## Spring Cleaning (Tidying Up)
- Regularly sweep away expired tokens to keep your application running smoothly and securely.

<a name="password-customization"></a>

## Customization Central (Add Your Personal Touch)
- Tailor the password-resetting experience to match your application's unique personality, making it stand out from the crowd!

 Welcome to the password-forgetting fun factory! 🤖🚀

In the wild west of web apps, you'll often find yourself playing the knight in shining armor, rescuing forgetful users from their own password prisons. But who wants to manually code that every time? Not us, and not you with Laravel around! 🎉🥳

This magical unicorn of a framework offers you a smorgasbord of services for sending password reset links and securely setting new ones. No more coding by hand like it's 1899! 🧵🕰️

> [⚠️ATTN: Time-saver alert!]
> If speed is your game, why not install a Laravel [application starter kit](/docs/{{version}}/starter-kits)? It'll scaffold your entire authentication system, password-forgetting and all, like a boss! 🏆🛠️

<a name="configuration"></a>
Jump on the fast track to password-reset glory with Laravel configuration! 🌞🏄‍♂️💼

 Alrighty then! It's time we chat about the swankiest setting for your Laravel password reset spectacle: `config/auth.php`. Don't forget to give it a gander, 'cause it's jam-packed with options that'll make your app's password shenanigans as smooth as silk.

By default, Laravel sets sail with the "database" password reset shipper, but you can always swap captains if you fancy a change. The `driver` configuration option steers the course of where password reset data will be stashed away. Laravel offers two seaworthy vessels:

🚢 **Database**: This bad boy anchors your password reset data in a good ol' fashioned relational database.

💣 **Cache**: If you're looking for a speedier solution, this cache-based vessel will stow away your password reset data in one of your cache stores. Just remember, with great speed comes great responsibility (and potential data loss if you clear your cache).

So there you have it! Now that you know the drill, go forth and configure your app's password reset adventures to your heart's content! 🚀🌊🎉

 Alright, buckle up, database drivers are about to take a wild ride! 🚀

#### <a name="mysql"></a> MySQL Driver

Ah, the granddaddy of all relational databases. You know, the one who invented the concept of 'relationship' in SQL, because it was tired of being single. It's got the power, the charm, and a little bit of a temper (ask anyone who's ever had to optimize a query). This driver is perfect for those who love a good challenge and can handle a bossy database that insists on being the center of attention.

#### <a name="postgresql"></a> PostgreSQL Driver

Now this is a date you won't forget. PostgreSQL is the sophisticated, academically inclined one in the crowd, with a PhD in data integrity and a knack for complicated queries. It's like the professor of databases who refuses to teach anything but advanced topics because it's just too easy. But fear not, once you learn its ways, you'll be able to conquer any database challenge that comes your way.

#### <a name="sqlite"></a> SQLite Driver

This is the no-nonsense, take-charge kind of driver. It doesn't need a server to run and it stores all data in one tidy little file. Talk about low maintenance! It's perfect for small projects where you don't want to deal with setting up a database server, or for those who believe that simplicity is the ultimate sophistication.

#### <a name="pgsql"></a> pSQL Driver (for Windows)

Oh, the charming one from across the pond! This driver is just like PostgreSQL but with a delightful British accent. It's the same sophisticated, academically inclined date, but with a bit of a posh twist. It may take some getting used to, especially if you're not familiar with their unique brand of SQL and database management, but once you do, it's all smooth sailing from there.

#### <a name="sqlsrv"></a> SQL Server Driver (for Windows)

This driver is the corporate powerhouse of the bunch. It's fast, reliable, and can handle massive amounts of data with ease. It's like the successful CEO who runs a multibillion-dollar corporation and still finds time to manage a database or two on the side. It's perfect for large projects that require a powerful and efficient database engine.

#### <a name="oracle"></a> Oracle Driver

The grand old dame of the database world! Oracle is like the wise, experienced mentor who has seen it all and can solve any database problem you throw at her. She's got the pedigree, the clout, and the price tag to match. But hey, if you can afford her, she'll make your database dreams come true.

That's your database drivers in a nutshell! Choose wisely, because once you pick a driver, it's like committing to a lifetime partnership. And as we all know, in the world of databases, that's no small commitment. 😉

 Alright, buckle up, coding cowboys and coding cowgirls! Let's dive into the wild west of databases - where your Laravel apps' password reset tokens roam free!

In this old-timey frontier town called `database`, every good saloon needs a place to store its whiskey lockbox keys, and that's just what our application's password reset tokens are. Now, these aren't your run-of-the-mill cowpoke keys; they require a proper saloon (a table) for storage.

Usually, you'll find the perfect table at Laravel's sheriff's office, where a wanted poster named `0001_01_01_000000_create_users_table.php` hangs. This is one of those classic Laravel database migrations - you know, the ones that make your database feel like the Wild West all over again!

So, saddle up and let's make our saloon a safe place for password reset tokens, cowboy-style!

 Alrighty then! Let's talk about Laravel's Cache feature, the unsung hero of your application's memory game! Imagine it as your app's personal librarian, meticulously filing away password resets so you don't have to keep re-reading them aloud.

But, just like that one library friend who borrows every book in sight, make sure this librarian isn't using the same bookmarks (email addresses) as others in your application or you'll find yourself in a pickle, wishing for password resets instead of being able to read "War and Peace" without interruption.

Here's a peek at how our librarian sets up shop:

```php
'passwords' => [ // This is the password reset section, not an invitation to change your password!
    'users' => [
        'driver' => 'cache', // Because let's face it, who needs a dedicated bookshelf for one book?
        'provider' => 'users', // You know, like that friend who knows all the cool books.
        'store' => 'passwords', // This is our secret password-reset shelf. (Optional, but highly recommended!)
        'expire' => 60, // After 60 minutes, your user can't keep their password on extended loan.
        'throttle' => 60, // Gives your librarian a breather before they rush off to find more books!
    ],
],
```

And to make sure this librarian doesn't clear all the books (password resets) when you call for a library-wide clean-up (`artisan cache:clear`), you can optionally assign them their own personal shelf with the `store` configuration key. Just remember, the value should correspond to a shelf you've set up in your `config/cache.php` configuration file. Now you and your password reset librarian can coexist peacefully!

And that's all folks! Go forth and cache, knowing your Laravel application will run faster than Usain Bolt with a tailwind. Or something like that... 🏃‍♂️🚀

 Alrighty, buckle up for a rollercoaster of Laravel japes! 🎢🎠

### Model Shenanigans (A.K.A Preparation)

Before we dive into the password reset hullabaloo, it's crucial to ensure your application's `App\Models\User` model is donning the fancy `Illuminate\Notifications\Notifiable` trait. Chances are it's already wearing this in a new Laravel app, but who knows? Maybe it's having an identity crisis and forgot its fashion sense. 🤔

Next up, let's check if your `App\Models\User` model is playing by the rules of the `Illuminate\Contracts\Auth\CanResetPassword` contract. It's a high-brow affair, but don't worry—the included `App\Models\User` model already knows its way around the ball and has been using the `Illuminate\Auth\Passwords\CanResetPassword` trait to do all the fancy footwork necessary to implement that interface.

<a name="configuring-trusted-hosts"></a>

### Trust Fall (A.K.A Configuring Trusted Hosts)

Now, here's a little secret for you: Laravel trusts no one by default! 🤨 If your app tries to send password reset emails from an untrusted host, it'll be like the Grinch stealing Christmas—no joy for anyone. To remedy this situation, we need to help Laravel learn who its friends are. Head over to the `config/mail.php` file and add any domain that might send emails on behalf of your app to the `$trustedHosts` array. Just make sure to keep it a secret from the Grinch! 🎄🤫

 Alright, let's get this party started! Laravel is like the life of the server-side bash, and we all know that a good host makes for a great party (pun intended). By default, Laravel will greet every request it receives, much like a friendly bouncer at a bar. But just like you wouldn't let just anyone into your exclusive VIP section, you don't want every Joe Schmoe hitting up your app without an invitation.

That's where trusted hosts come in! You see, by default Laravel will believe anything the `Host` header in HTTP requests tells it, but you can teach it to only trust certain hostnames. This is crucial when you start offering password resets and other sensitive operations—you don't want strangers impersonating your users!

Now, most of the time, you'd want your web server (say, Nginx or Apache) to send over invites that match a specific hostname, but what if you can't touch the web server directly? That's when Laravel comes to the rescue with its trusty `trustHosts` middleware method. You can find this lifesaver in your application's `bootstrap/app.php` file. It's like inviting only the cool kids to the party.

Want more deets on this middleware method? Check out our [TrustHosts middleware documentation](/docs/{{version}}/requests#configuring-trusted-hosts). Just remember, when it comes to your Laravel application's security, trust is a two-way street! 🛍️🏰👮‍♀️

 Alrighty, buckle up! We're about to embark on a daring quest to make our Laravel app as secure as Fort Knox...or at least, your grandma's piggy bank. First stop: Password Reset Rodeo!

To kick things off, we need to define several routes. Think of them as the GPS for users who've lost their keys (passwords). Let's start with a duo of routes that will guide our user through the wild west of requesting a password reset link via their email address. Yes, we're gonna help folks who left their horses at home!

Next up, we need another duo of routes to tame the chaos when our cowboy (or cowgirl) clicks on that magical password reset link in their inbox and bravely completes the form. It's a wild ride, but don't worry—we've got their back (and their new, secure password).

Now, let's saddle up and take a look at our first destination:

<a name="requesting-the-password-reset-link"></a>
*Yeehaw!* Here be the routes for requestin' that password reset link. Sit tight and hang on tight, partner!

1. POST method route: `/password/email`
   This is where users send their pleas for password help—via email, of course!

2. GET method route: `/password/reset/{token}`
   Once we've sent the magical link (the token), this is where our user lands to change that ol' forgotten password. Happy trail ridin', partner!

 Ahoy, Captain! You've stumbled upon the swashbuckler's guide to recovering your lost pirate treasure... errr, password! 🏴‍☠️

<a name="the-password-reset-link-request-form"></a>

#### The Password Reset Link Request Form (aka the Treasure Map to Your Account)

When you find yourself locked out of your account like a prisoner in the dungeon, don't fret! We've got the compass (or, rather, the password reset link) to guide you back to shore. 🗺️

To set sail on this quest, follow these steps:

1. **Navigate to the Treasure Island**: First, visit your website and find the 'Forgot Your Password?' link, typically nestled near the login form like a hidden treasure chest.

2. **Fill Out the Form (aka Map Your Course)**: Once you've found it, click on the link and prepare to fill out a form requesting your email address. Remember, X marks the spot!

3. **Send the SOS (Save Our Ship)**: After submitting the form, you'll receive an email with a special link - this is your lifeline back to the island. Click on it to set foot on familiar land again! 🌴

4. **Reset Your Password (aka Plunder the Treasure)**: Now that you're back, you can reset your password to something more secure than "letmein" or "password123". We recommend something like "parrot_on_my_shoulder78" or "shiver_me_timbers90" - just remember it this time! 🦜

5. **Set Sail for New Adventures**: With your password securely reset, you can once again explore the seas of your website without fear of being captured by the Kraken (or forgetting your password). Fair winds and following seas, matey! 🌪️⚓️

 Alrighty then! Let's dive into the heart of Laravel's password shenanigans, shall we? First off, we need to set up some routes for requesting those darn password reset links. To kick things off, let's define a route that spits out a view with our password reset link form:

```php
Route::get('/gone-fishin', function () {
    return view('auth.fish-password'); // Yes, we renamed it for fun!
})->middleware('notLoggedIn')->name('pass-the-lure');
```

Now, the view served up by this route ought to include a form with an `email` field—because who doesn't love a good fishin' email? This way, our users can cast their line for a password reset link at a specified address.

<a name="password-reset-link-handlinfish-the-form-submission"></a>
But what happens when they hit "Send"? You ask! Well, my friend, that's where the magic really begins! The form submission will trigger some Laravel sorcery to generate a password reset link for the email provided and send it on its merry way. And just like that, your fishin' buddies are one step closer to getting their hands on a fresh new password!

 Alrighty then! Let's dive into handling our "Forgot Password" form submission, shall we? This is where the magic happens – when user panic sets in and they realize they can't remember their secret superhero code.

First off, we need a route that's like a trusty sidekick to this form. This route will take the submissions from our "Forgot Password" view and handle 'em with care:

```php
Use your fancy hat (Illuminate\Http\Request), and the Password superhero (Illuminate\Support\Facades\Password) to create a daring duo!

Route::post('/forgot-password', function (Request $request) {
    The email attribute is validated with strict scrutiny. No typos, no shenanigans, just the good stuff.

    Password::sendResetLink($request->only('email')) takes over and plays the hero, using Laravel's built-in "password broker" to send a password reset link to the user in distress.

    Depending on the success or failure of the operation, we return a friendly message to the user:
        If successful, they get to go back with a smile, patting their own back.
        If not, they get to stay put but with some helpful feedback for their email address.
})->middleware('guest')->name('password.email');
```

Now let's take a closer look at this route! The request's `email` attribute is validated first, and our password broker (via the `Password` facade) steps in to send a password reset link to the user. This password broker guy knows his stuff – he even uses Laravel's built-in [notification system](/docs/{{version}}/notifications) to deliver the goods!

The `sendResetLink` method returns a "status" slug, which can be translated using Laravel's localization helpers for a user-friendly message. The language file responsible for this translation is your application's `lang/{lang}/passwords.php`. Each possible value of the status slug has its own entry within the `passwords` language file.

> [!NOTE]
> By default, the Laravel application skeleton doesn't include the `lang` directory. If you want to customize Laravel's language files, you can do so by using the `lang:publish` Artisan command.

And now for a little secret – how does Laravel know where to find the user record in your database when calling the `Password` facade's `sendResetLink` method? The answer lies in your authentication system's "user providers". The password broker uses these bad boys to retrieve database records. The user provider used by the password broker is configured within the `passwords` configuration array of your `config/auth.php` configuration file. To learn more about creating custom user providers, consult the [authentication documentation](/docs/{{version}}/authentication#adding-custom-user-providers).

> [!NOTE]
> When you're ready to take on password resets manually, remember that defining views and routes is all part of the job. If you want a helping hand with all the necessary authentication and verification logic, check out the [Laravel application starter kits](/docs/{{version}}/starter-kits).

Remember: crime doesn't pay (unless you're a supervillain), but password resets are one situation where forgetfulness pays off!

 Title: **Getting Unstuck from Password Pickles 🥒**

Ahoy there, cyber sailor! If you've found yourself in a bit of a password pickle (we've all been there), don't worry - Laravel's got your back with the Password Reset Form. This lifesaver is designed to help you swim out of those sticky situations when even your trusty sea shanties can't remember the lyrics! 🎶

<a name="the-password-reset-form"></a>

**Navigating the Password Reset Form**

To reach our magical password rescue boat, follow these steps:

1. **Getting ready to set sail:** First things first, make sure you've got Laravel installed and your sails are set for Sail (pun intended). If not, it's time to anchor down and check out [Laravel installation guide](https://laravel.com/docs/9.x/installation). Once that's squared away, hoist the mainsail and proceed! 🚢

2. **Preparing the Password Reset Form:** Now we need to build our password reset form. You can use Laravel's built-in `Make: Auth` command to generate all necessary views for you - simply run:

    ```
    php artisan make:auth
    ```

   This will create a bunch of files, including the password reset form located at `resources/views/auth/passwords/email`. You can customize this form to fit your boat's style! 🛥️

3. **Rigging up the Password Reset Functionality:** After you've got your shiny new form, it's time to rig up some password reset functionality. Open `app/Http/Controllers/ResetPasswordController` and take a gander at the methods like `sendResetLink`, `brokenToken`, and `reset`. These are your new best friends on this journey! 🤝

   Remember, these methods will handle emailing the password reset link and taking care of the actual password resetting. All you have to do is make sure everything's properly connected - like a well-oiled ship's engine! ⚙️

4. **Setting the Anchor:** Once your Password Reset Form is all set, it's time to anchor down and test your new skills. Visit your application, click on the password reset link, and if everything goes according to plan, you'll be able to change that forgotten password faster than a seagull can snatch a French fry! 🐦🎉

And there you have it, matey! With Laravel's Password Reset Form, you'll never again find yourself stranded in the sea of forgotten passwords. So hoist the Jolly Roger and set sail for smoother waters! 🏴‍☠️

 Alrighty then! Let's get this password-resetting party started!

First off, we need to establish some routes that'll make the magic happen when your user clicks on the password reset link sent via email and decides it's time for a new password. Let's create a route for when they land on our Password Reset Fortress of Solitude. This route will receive a `token` parameter, which we'll use later to verify their identity:

```php
Route::get('/reset-password/{token}', function (string $token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');
```

Now, the view that gets rendered by this route should be a dazzling display of HTML forms and CSS charm (but remember, we're developers, not magicians). It'll feature an `email`, `password`, and `password_confirmation` fields – because who doesn't love confirming their password twice? To make things super secure, hide the token in a secret field:

```html
<!-- The password reset form -->
<form action="/reset-password-update" method="POST">
    @csrf
    <input type="hidden" name="token" value="{{ $token }}">
    <label for="email">Email:</label>
    <input type="email" name="email">

    <label for="password">New Password:</label>
    <input type="password" name="password">

    <label for="password_confirmation">Confirm New Password:</label>
    <input type="password" name="password_confirmation">

    <!-- Don't forget the submit button! -->
    <button type="submit">Change My Password</button>
</form>
```

And there you have it – a password-resetting extravaganza that's as entertaining as it is secure. Keep on coding, superstar! 🚀

 Alrighty then! Let's dive into the ticklish topic of handling a password reset in Laravel, shall we? First off, we need to set up a route that can deal with the shenanigans of our password reset form submission. This route will play the role of the bouncer at a club, verifying requests and updating user passwords in the database:

```php
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset as PasswordResetEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password as LaravelPasswordBroker;
use Illuminate\Support\Str;

Route::post('/tickle-my-password', function (Request $request) {
    $request->validate([
        'token' => 'required for the party',
        'email' => 'required and dressed appropriately',
        'password' => 'required, min:8 and password confirmed',
    ]);

    // Laravel's password guru (via the Password facade) will now be in charge of verifying the validity of this password reset request.
    $laravelPasswordBroker = new LaravelPasswordBroker($request);

    if ($laravelPasswordBroker->checkCredentials()) {
        // The password broker has granted us entry, so let's update the user's password in the database!
        $user = User::find($laravelPasswordBroker->getUser());

        $user->password = Hash::make(trim($request->input('password')));
        $user->remember_token = Str::random(60);
        $user->save();

        event(new PasswordResetEvent($user));

        return redirect()->route('login')->with('status', __($laravelPasswordBroker->getStatus()));
    } else {
        // It seems our password reset credentials were a bunch of baloney! Let's send them back to the drawing board.
        return back()->withErrors(['email' => [__($laravelPasswordBroker->getStatus())]]);
    }
})->middleware('guest')->name('password.update');
```

Now, let's break this down. Firstly, we verify the `token`, `email`, and `password` attributes in the request. Subsequently, Laravel's own password guru (via the `Password` facade) will validate the password reset request credentials.

If our credentials are deemed acceptable by this mysterious password guru, the closure passed to the `reset` method is invoked. This closure, with access to the user instance and the plain-text password from the form, handles updating the user's password in the database.

The `reset` method returns a "status" slug, which can be translated using Laravel's [localization](/docs/{{version}}/localization) helpers for a friendlier display to the user. The translation of this password reset status depends on your application's `lang/{lang}/passwords.php` language file. If your app doesn't have a `lang` directory, you can create it using the `lang:publish` Artisan command.

By the way, don't be alarmed if you're wondering how Laravel knows where to find your user record in the database when calling the `Password` facade's `reset` method. The secret lies within the Laravel password broker, which employs your authentication system's "user providers" to retrieve these records from the database. The user provider used by the password broker is configured within the `passwords` array of your `config/auth.php` configuration file. For more information on writing custom user providers, head over to the [authentication documentation](/docs/{{version}}/authentication#adding-custom-user-providers).

Cheers!

 ## Token Timeout Tango! 🕰️🎉

Are you finding yourself drowning in a sea of expired password reset tokens? Fear not, dear Laravel enthusiast! This section is here to guide you through the fun and games of token termination.

If you're using the `database` driver, don't be surprised if these outdated tokens decide to linger around your database like an unwanted houseguest. But fret not, for we have a solution that's as simple as pressing a button (well, typing a command, but close enough). Introducing the `auth:clear-resets` Artisan command:

```shell
php artisan auth:clear-resets 🎈🎉✨
```

But why stop there? If you're the type who enjoys automation (and who doesn't, really?), consider giving your application's scheduler a fun new dance partner—the `auth:clear-resets` command!

```php
use Illuminate\Support\Facades\Schedule;

// Cue the music and let's get this party started! 🥁🎶
Schedule::command('auth:clear-resets')->everyFifteenMinutes();
```

Now, your tokens will clear out every 15 minutes, just like a well-oiled machine. So sit back, relax, and watch those unwanted guests scram! 🏃‍♂️🚫

 ### Unleashing Your Inner Designer! 🚀

Welcome, web wranglers! Ever wanted to customize your Laravel dashboard like a digital artisanal baker? Well, buckle up, because we're about to embark on a wild ride through the Customization Frontier! 🌠

First stop: **Link Customization**. Want to make those breadcrumb trails look more appetizing than a freshly-baked French loaf? Fear not! Simply follow this path: `config/app.php`, find the `url` array and bake in some personal taste with your very own link customization recipes! 🍳

<a name="reset-link-customization"></a>

### Reset Link Customization 🔄 (The Reboot Button)

Ah, the ol' reset button! We've all been there - when our design choices take a turn for the "uh-oh" and we need a do-over. Don't worry, we've got your back! Navigate to `database/migrations` and run the migration with the magic number `2021_06_09_132347`. After that, just sit back, relax, and watch as your links get a freshly-baked makeover! 🌟

Now that you've gotten your Laravel setup looking more like a Michelin-starred website than an average blogspot, go forth and conquer the digital world with style! Remember: good design isn't just about looking pretty – it's about making users feel right at home. So, let's get cooking! 🍽️🎉

*Bon appétit!*

 #### Password Reset Link Makeover: A Tale of URL Transformation!

Are you tired of the same old, dull password reset links? Fear not, my dear Laravel devotees! This section is here to elevate your experience with a dash of humor and a pinch of technical wizardry.

Let's dive into the world of customizing password reset link URLs! Utilize the `createUrlUsing` method, an enchanting magical elixir provided by none other than the swashbuckling `ResetPassword` notification class. This spellbinding concoction allows you to weave a personalized URL for the password reset link – perfect for adding some flair to your application!

The `createUrlUsing` method expects a humble closure, one that's eager to accept the user instance receiving the notification and the sacred password reset token. To cast this spell, you should summon this enchantment from the mystical `boot` method of your application's fearless `AppServiceProvider`.

```php
Use yer trusty sword (or import statements), Captain!

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;

Once you've donned yer armor, ye mighty coder:

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    ResetPassword::createUrlUsing(function (User $user, string $token) {
        return 'https://example.com/reset-password?token='.$token; // Don't forget to replace with yer own website URL!
    });
}
```

Now, go forth and customize those links like a true Laravel pirate! With this knowledge at your fingertips, you can make the world of password resets a little more exciting – or at least, a lot less boring. Good luck, and may the force of Laravel be with ye!

 Alrighty, let's get this email customization party started! 🎉🍾

You don't need a magic wand to whip up a personalized password reset email. Instead, grab your Laravel broom and sweep over the `sendPasswordResetNotification` method on your trusty `App\Models\User` model. Once you've found it, sprinkle some custom flair on it!

Inside this magical method, you can create a custom [notification class](/docs/{{version}}/notifications) to send the password reset link like a pro. The password reset `$token` will be your trusty sidekick that you'll receive as the first argument. With the token in hand, craft a URL of your dreams and holler at your user with your snazzy notification:

```php
use App\Notifications\ResetPasswordNotification;

/**
 * Send a password reset notification to the user, but make it fancy!
 *
 * @param  string  $token
 */
public function sendPasswordResetNotification($token): void
{
    $url = 'https://example.com/reset-password?token='.$token;

    // Let's tiptoe softly into the inbox and surprise the user with a friendly greeting...
    $greeting = "Well, hello there! We have some exciting news to share with you.";

    // ...and send our custom password reset notification using the URL we just created.
    $this->notify(new ResetPasswordNotification($url, $greeting));
}
```

With this newfound superpower, your users will be treated to a unique, personalized password reset experience that'll make their day (and yours!).