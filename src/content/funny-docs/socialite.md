 # Laravel's Magical, Shiny Socialite! 🌈✨

## Welcome, Dear Developer! 👋

Dive into the enchanting realm of **Laravel Socialite**, where unicorns dance and rainbows guide your way to effortless OAuth magic! 🦄🌉

<a name="installation"></a>

## Installation: A Snap, Like a Snicker Bar 🍫

Add Socialite to your project with ease, like snapping your fingers. Just type `composer require laravel/socialite` in your terminal and watch the sparkles fly! ✨🧞‍♂️

<a name="upgrading-socialite"></a>

## Upgrading Socialite: A Breeze, Like a Soft Summer Zephyr ☀️

Updating Socialite to the latest version is as easy as opening a window. Run `composer update laravel/socialite` and breathe in that fresh, OAuth-scented air! 🌬🥤

<a name="configuration"></a>

## Configuration: A Piece of Cake, Like Your Grandma's Recipe 🍰

Setting up Socialite is as simple as following Grandma's famous chocolate cake recipe. Just adjust the `config/services.php` file to taste! 🥄🍫🌶️

<a name="authentication"></a>

## Authentication: Lean Back, It's Showtime! 🚀

### Routing: A Walk in the Park, Like an afternoon stroll with Garfield 🐾🚶‍♂️

Configure your application routes with a simple step-by-step process. In no time, you'll have Socialite guiding you through the enchanting forest of authentication! 🌲🧭

### Authentication and Storage: A Breeze, Like a well-oiled machine 🛠️☀️

Effortlessly handle user authentication and data storage with Socialite's built-in functions. It's like having your very own virtual butler, handling all the heavy lifting for you! 🤖🍻

### Access Scopes: A Snap, Like a well-timed Spider-Man meme 🕷️🎞️

Add extra layers of security to your application with access scopes. With Socialite, you can control who gets to swing through which parts of your web! 🚀🦇

### Slack Bot Scopes: A Laugh Riot, Like the funniest cat video on the internet 🐱😂

Customize your Slack bot's capabilities with slack bot scopes. Now you can teach your robot to dance, fetch a coffee, or even play ping-pong! 🎾🥤💃

### Optional Parameters: A Piece of Cake, Like having extra sprinkles on your sundae 🍨🌈

Customize the user authentication process with optional parameters. Now you can make every login unique, just like your favorite ice cream flavor! 🍦🌈

<a name="retrieving-user-details"></a>

## Retrieving User Details: A Snap, Like a lightning-fast Superman ⚡️🏃‍♂️

Access user details with ease using Socialite's built-in functions. In no time, you'll have all the information you need to build a superhero database! 🦸‍♂️📝

<a name="testing"></a>

## Testing: A Breeze, Like testing whether Wonder Woman can deflect bullets 💪💥

Easily test your Socialite-powered application with the built-in testing functions. Now you can ensure your superhero app is bulletproof! 🛡️🎯

 Welcome to the enchanting world of Laravel authentication, where we're not just logging in users, but pulling rabbits out of firewalls! Instead of the traditional password-protected login forms, let's dive into the delightful realm of OAuth providers with Laravel Socialite - your magical chameleon of authenticators!

Currently, Socialite supports a dazzling array of platforms, including Facebook (because who doesn't love poking around in someone else's account?), X (a mysterious entity, shrouded in intrigue), LinkedIn (for when you need to link up with your digital doppelganger), Google (because everyone knows the key to the kingdom is their email password), GitHub (for all those coding cats out there), GitLab (for when you want to push commits before even logging in), Bitbucket (because who doesn't love a good repository scuffle?), and Slack (to avoid typing "asl" for the rest of your days)!

> [![NOTE]](https://github.com/laravel/socialite) Hiccup Alert: Don't fret if Socialite doesn't support that one platform you love. Fear not, intrepid authenticator! The community-driven [Socialite Providers](https://socialiteproviders.com/) website has got your back with adapters for platforms beyond the stars (or at least, beyond our list)!

Now, let's move on to the installation part:

<a name="installation"></a>
[The Installation Dance](https://youtu.be/qy57g6-QjlU) - Grab a pair of tap shoes and get ready for some twinkling toes! First, ensure you've updated your composer.json file with the necessary Laravel Socialite package:

```bash
composer require laravel/socialite
```

And then, don't forget to boot the service provider in `config/app.php`:

```php
'providers' => [
    // ...
    Laravel\Socialite\SocialiteServiceProvider::class,
],
```

With that, you're all set! So go ahead and start authentifying (yes, we just made up a word) with style!

 Alrighty then! Let's get this party started, shall we? You're about to embark on an enchanting journey with Laravel's very own Socialite – the life of every modern-day Cinderella! 👸👋

First things first, you need to invite Socialite to your project's soiree using the Composer package manager. Here's how:

```shell
composer require laravel/socialite
```

Just think of it as sending out a fancy invitation: "Dear Socialite, we'd be honored if you'd join our Laravel ball!" 🕺️✨

Now, if you ever find yourself in need of upgrading this fairy-tale friend, simply hop back here and take a peek at our Upgrading Socialite section. Because who wants an outdated pumpkin coach when they can have the latest sparkling carriage, right? 🏮

Remember, in the world of Laravel, it's always more magical with friends like Socialite! 💖🚀

 ### Upgrading Socialite: The Sequel to the Hilarious Saga You Didn't Know You Needed! 🎬✨

Ahoy, code-warriors and butter-fingered web-wranglers! 🚀🚀 Ever found yourself in a pickle trying to upgrade your Socialite like a modern-day Icarus? Well, buckle up for this wild ride as we traverse the mystical world of Laravel upgrades together! 🌄

<a name="configuration"></a>

First off, let's set the mood with some lighthearted music: "Upgrade me, Socialite, like you've never upgraded before!" 🎶

Now, before you dive headfirst into this brave new world of code, it's essential to take a gander at our trusty [upgrade guide](https://github.com/laravel/socialite/blob/master/UPGRADE.md). Why, you ask? Because it's got all the secrets to turning an ordinary upgrade into a triumphant dance party! 💃🕺

Just remember, dear friend, that this guide is not your run-of-the-mill self-help book promising six-pack abs in a week. Instead, it offers you wisdom on mastering Socialite upgrades with finesse and grace. And who knows? You might even learn a dance move or two! 🥳

So, grab your favorite beverage (preferably served in a chalice to keep things medieval), put on your thinking cap, and let's embark on this enchanting journey together! 🎉✨

 Alrighty then! Before we dive into the Socialite shenanigans, let's get our ducks in a row (or should I say OAuth providers?). You see, these fine folks are the ones who'll vouch for your application at the digital ball. To snag their digits, you'll need to create a "developer app" within their respective dashboards, where the party's at.

Once you've wrangled those credentials, it's time to introduce them to your application by way of the `config/services.php` configuration file—think of it as a modern-day matchmaking service for apps and OAuth providers. But instead of love letters, we use keys like `facebook`, `x`, `linkedin-openid`, `google`, `github`, `gitlab`, `bitbucket`, `slack`, or `slack-openid`. Choose wisely, partner!

Here's a little snippet to help you get started:

```php
'github' => [
    'client_id' => env('GITHUB_CLIENT_ID'), // Whisper it into the ear of your app, shh!
    'client_secret' => env('GITHUB_CLIENT_SECRET'), // And now, the password...
    'redirect' => 'http://example.com/callback-url', // The secret rendezvous spot where they'll send your users after authentication
],
```

> [!ATTENTION]
> If your `redirect` option is a little shy and only offers a relative path, it'll automatically grow a pair and turn into a fully qualified URL. No more coyness, we like 'em bold and confident!

 Ahoy there, Captain! Buckle up for a whimsical journey through the realm of Laravel authentication - a veritable pirate's treasure trove of secure user management! 🏴‍☠️🔒

<a name="routing"></a>
### Routing and Authentication

Setting sail on our first stop, we encounter the mighty **routes**. These are the navigational charts guiding your application's users through their swashbuckling adventures. With Laravel, you can define these routes in `web.php` or `api.php`, ensuring a well-charted course for all ye landlubbers and scallywags! 🌐📈

But here's the catch – we want our app to be as secure as Fort Knox, right? Well, we've got a cunning solution: **middleware**. Just like the friendly neighborhood Spider-Man, it swoops in to save the day by inspecting incoming requests and enforcing rules. In the case of routing, middleware can ensure that only authorized users (i.e., those with proper pirate credentials) gain access to protected routes! 🕸️🎉

<a name="authenticating-users"></a>
### Authenticating Users

Now it's time to discuss the lifeblood of every seafaring expedition: **user authentication**. This is where we ensure that every swashbuckler aboard our ship is, in fact, who they claim to be. Laravel takes care of the heavy lifting for us with its built-in authentication scaffolding. All you need to do is provide a database table containing user records, and Laravel will handle the rest! 🏆💪

With the mighty `Auth` facade at your fingertips, you can easily authenticate users, manage their sessions, check whether they're logged in or out, and even log them in and out. It's like having a crew of loyal sailors ready to do your bidding! 🤺🏴‍☠️

<a name="authenticating-users-via-api"></a>
#### Authenticating Users via API

But what if you want to add more flexibility to your treasure trove? Fear not, matey! Laravel provides a handy API authentication feature that allows users to log in and out using API requests. It's like creating an intergalactic portcullis around your app, ensuring that only authorized users can enter via their spaceships! 🚀🌟

<a name="guard-system"></a>
### The Guard System

As our pirate adventure continues, we stumble upon Laravel's **Guard system**. This powerful tool is like Captain Barbossa's cursed gold – valuable and dangerous if not handled with care. It allows you to manage multiple user providers (e.g., for website users, mobile app users, etc.) from a central location, giving you the flexibility to customize authentication as needed! 🏆🔓

With the Guard system in your arsenal, you can rest assured that no scurvy dog will be able to infiltrate your Laravel treasure chest without proper credentials! 🏴‍☠️🔒

Ahoy there, matey! You've now reached the end of this whimsical guide to Laravel authentication. With your newfound knowledge, you can set sail on your own swashbuckling adventure, creating secure and user-friendly applications that would make even the mightiest pirates envious! Arrrr ye ready for a sea of success? 🏴‍☠️💪🎉

 Alrighty, grab your coding cowboy hats, because we're about to gallop through the wild west of Laravel routing! To wrangle those unruly users with an OAuth lasso, you'll need two routes – one for herding them towards the OAuth provider's corral, and another for rounding up the callback from the provider after they've been authenticated. Here's a lariat-tight example:

```php
Use Laravel's shiny Socialite Sheriff (Socialite), y'all!

Route::get('/auth/ride', function () {
    return Socialite::driver('github')->rideOff(); // Redirects the user to the OAuth provider
});

Route::get('/auth/rodeo', function () {
    $user = Socialite::driver('github')->corralUser(); // Retrieves the user's information after they've approved authentication

    // $user->token is their brandin' new cowpoke badge!
});
```

The `rideOff` method handed to you by the `Socialite` sheriff will kindly escort your users towards the OAuth provider, while the `corralUser` method will rope in the incoming request and haul their user info back from the provider after they've given the authentication a hearty howdy!

Now y'all are on the right trail to taming those wild users with this here OAuth rodeo! Happy wrangling!

 Alrighty then, let's dive into the thrilling world of Laravel Authentication and Storage! After you've successfully charmed the OAuth provider into giving up your user data (props to you, smooth talker), it's time to see if this cat already has a profile on your app. If not, it's time for some digital paperwork - let's create their record!

```php
use App\Models\User; // Import the User model, because who doesn't love users?
use Illuminate\Support\Facades\Auth; // Authentication, because passwords and secrets are our business now.
use Laravel\Socialite\Socialite; // Socialite, because we're about to make some new friends from Github.

Route::get('/auth/callback', function () {
    $githubCat = Socialite::driver('github')->user(); // Fetch the user from Github, purr-fectly named here for added feline flair.

    $newFeline = User::updateOrCreate([
        'github_id' => $githubCat->id, // Use the id to check if the user already exists in our database, if not, create a new record.
    ], [
        'name' => $githubCat->name, // Fill in the necessary details like name and email.
        'email' => $githubCat->email,
        'github_token' => $githubCat->token, // Don't forget to store the token for later use!
        'github_refresh_token' => $githubCat->refreshToken, // And a refresh token, just in case they need another life.
    ]);

    Auth::login($newFeline); // Now that we have their details, let's log them in and give them access to the dashboard.

    return redirect('/dashboard'); // Redirect them to their new digital home.
});
```

<!--- For more information regarding what user information is available from specific OAuth providers, please consult the documentation on [retrieving user details](#retrieving-user-details). --->
<a name="access-scopes"></a>
*Ahem*, for additional details on what tantalizing tidbits of user data you can get from different OAuth providers, kindly refer to our enlightening guide on [Retrieving User Details](#retrieving-user-details).

 Alrighty then! Let's delve into the enchanting world of Laravel Access Scopes, shall we? It's like giving your user a magical keychain with all the right charms for the socialite dance. 😉

First off, let's talk about the `scopes` method. Imagine you're at a costume party and everyone's wearing masks; these scopes are your costume tags! You can deck your user out in multiple masks (er, scopes) by simply chaining them together:

```php
use Laravel\Socialite\Socialite;

return Socialite::driver('github')
    ->scopes(['mask1', 'mask2']) // Don't forget to coordinate!
    ->redirect();
```

Now, if you want to switch your entire costume collection (or overwrite all the existing scopes), `setScopes` is the method for you:

```php
return Socialite::driver('github')
    ->setScopes(['mask1', 'mask2']) // Time for a fashion emergency!
    ->redirect();
```

Just remember, in the whimsical realm of GitHub parties, you'll find yourself at the entrance with these scopes. 🎉 And that's all folks, until next time when we dance together again in Laravel Land! 💃🏼🕺🏻

 Ahoy there, Laravel adventurers! Let's talk 'bots and tokens, shall we? In the vast digital sea of Slack's API, there are several flavors of access tokens, each with its own set of permission scopes - kinda like pick-n-mix candy at a carnival. Socialite, our friendly guide, is compatible with two of these token types:

1. Bot (marked with `xoxb-`) - Great for applications that want to send notifications to Slack workspaces owned by your users. You can generate a bot token using the following pirate code:

```php
return Socialite::drive('slack')
    ->setSailAsPirate() // Just kidding, it's `asBotUser()`
    ->grabScopes(['chat:write', 'chat:write.public', 'chat:write.customize'])
    ->shoveOff();
```

But wait, there's more! Once you have that bot token, don't forget to `setSailAsPirate()` again before using the `user()` method after Slack has rowed the user back to your ship:

```php
$user = Socialite::drive('slack')->setSailAsPirate()->user();
```

When you generate a bot token, the `user()` method will still yield a `Laravel\Socialite\Two\User` instance; however, only the `token` property will be filled to the brim. This token can be stored for future use to [send notifications to the authenticated user's Slack workspaces](/docs/{{version}}/notifications#notifying-external-slack-workspaces). Yarrr! 🤠

Now, go forth and conquer the API seas, matey! 🌊🚀

 ### Extra Flavors for Your OAuth Dance

Just like your eccentric uncle at a family gathering, some OAuth providers can't help but show off with their optional parameters during the redirection shuffle. To include these party tricks in your dance, kindly ask them over with the `with` method, dressed in an associative array:

```php
use Laravel\Socialite\Socialite;

return Socialite::driver('google')
    ->with(['party_trick' => 'example.com']) // Just remember to avoid reserved moves like "state" or "response_type".
    ->redirect();
```

<small><a name="avoid-reserved-moves">☝️ PSA: When using the `with` method, don't get caught stepping on anyone's toes with reserved keywords. Save the 'state' for when you really mean to say "I've got a date" and keep 'response_type' out of your dance moves, lest you want to start a cha-cha-challenge no one wanted.</a></small>

<a name="retrieving-user-details"></a>
<small><a href="#avoid-reserved-moves">🕺️ Back to the dance floor!</a></small>

Now, let's get those socialite parties started! 🎉

 Alright, grab your virtual popcorn and let's dive into the world of user details!

## User Details on Demand! 🍿

After our intrepid user has been zapped back to your app's authentication callback route, it's time for a little red carpet treatment. Who doesn't love a bit of VIP access, right? With Socialite's `user` method, you can whisk them into the limelight and retrieve their deets like a pro!

The dapper `user` method returns an object loaded with properties and methods that will help you store user information in your very own swanky database. Keep in mind, the menu of offerings might vary depending on whether the OAuth valet you're wooing supports either OAuth 1.0 or 2.0:

```php
Use Laravel\Socialite\Socialite as Socialite;

Route::get('/auth/callback', function () {
    $user = Socialite::driver('github')->user();

    // For OAuth 2.0 providers, the red carpet rolled out...
    $token = $user->token;
    $refreshToken = $user->refreshToken;
    $expiresIn = $user->expiresIn;

    // OAuth 1.0 providers? No sweat, we've got 'em covered too!
    $token = $user->token;
    $tokenSecret = $user->tokenSecret;

    // All providers, no matter the era, get these sweet deals...
    $userId = $user->getId();
    $nickname = $user->getNickname();
    $realName = $user->getName();
    $emailAddress = $user->getEmail();
    $profilePictureUrl = $user->getAvatar();
});
```

<a name="retrieving-user-details-from-a-token-oauth2"></a>
Remember, sometimes you gotta mix business with a dash of humor to keep things entertaining! 🚀

 Alrighty, let's dive into the world of digital dance cards! If you've already scored a date with someone (by obtaining a valid access token), you can learn more about them using Socialite's charming charmer, `userFromToken` method. It's like asking for their number, but in code:

```php
use Laravel\Socialite\Socialite;

$date = Socialite::driver('github')->userFromToken($token);
```

But hold on to your party hats! If you're using Facebook Limited Login via an iOS app, things get a bit more complicated. See, Facebook isn't one for playing by the rules, so instead of sending a regular access token, they'll send an OpenID Connect (OIDC) token. Think of it like receiving a secret handshake instead of a traditional greeting. Don't worry though, this OIDC token can still be provided to our dance partner, `userFromToken`, to get more details:

```php
$secretHandshake = Socialite::driver('facebook')->userFromToken($oidc_token);
```

Now, aren't you just the cat's pajamas for knowing how to charm your digital dates like a pro? 🕺️🎉💃️

 Ah, the `stateless` method! It's like the secret sauce for your API, making it as agile and carefree as a digital nomad at a co-working café.

Imagine you're running an API that's as popular as a cat video on a Monday morning. Now, you want to add social authentication - think logins via Google, Facebook, or Twitter. But there's a twist: your API is stateless and doesn't use cookie-based sessions.

Cue the `stateless` method! It's like the bartender who serves the drinks without asking for ID because they know their regulars. Here's how you can use it:

```php
use Laravel\Socialite\Socialite;

// It's party time! Time to dance with Google, Facebook, or Twitter.
return Socialite::driver('google')->stateless()->user();
```

Just remember, this method disables session state verification. So it's like saying "Hey, I don't need no stinkin' tickets, let me in!" to the bouncer at a VIP club. Use it wisely, my friend!

<a name="testing"></a>
Now, if you're feeling adventurous and want to test this out, you can... but remember: like playing pinball, practice makes perfect!

 ## Testing, testing! One, two... Laravel Socialite here, saving your sanity from the OAuth dance!

Ever found yourself in a tangled web of authentication flows, making requests to OAuth providers that leave you feeling like a peon at a royal ball? Well fear no more, because we've got just the cure for those awkward encounters - *introducing* our swanky `fake` method!

Now, you can pretend to be the OAuth provider and control the conversation by defining how they should behave during the dance. The real question is: will it be a romantic encounter or a clumsy tango? It's up to you, dear developer!

<a name="faking-the-redirect"></a>
But wait, there's more! What's an OAuth dance without a dashing partner? Meet your new suitor: the user data! With our `fake` method, you can choose the user data that should be returned in response to the OAuth provider, so no need to worry about the awkward silence after asking for their number (er...user details).

So grab your dancing shoes and take a twirl with Laravel Socialite. Who knows? You might even catch the eye of that special OAuth provider you've had your eye on!

 Alright, let's dive into the hilarious world of Laravel and social media! Here's a fun take on how to trick your application into thinking it's redirecting users to an OAuth provider. 🤪

#### Pulling off the Great Redirect Hoax

Want to catch your app in a lie about redirecting its users to an OAuth provider? No problem! You can set up a phony sting operation with ease. Simply unleash the `fake` method before firing a request at your redirect route. This will make Socialite believe it's sending the user to a fake authorization URL, instead of the real OAuth provider:

```php
use Laravel\Socialite\Socialite as FakeSoc; // Give it a catchy alias, because why not?

test('user gets tricked by github', function () {
    FakeSoc::fake('github'); // It's time for some mischief!

    $response = $this->get('/auth/github/redirect'); // Grab a response from the unsuspecting user.

    $response->assertRedirect(); // Confirm the redirect... or was it just another prank?
});
```

Now, aren't we having a whale of a time while still learning something new? Happy coding! 🐳🎉

 Alright, buckle up, coding cowboy! Time to test your app's callback route like a true gunslinger. Here's how you can make it believe that Callback Kid has ridden in with the goods without even leaving the corral.

```php
use Laravel\Socialite\Socialite as Sheriff;
use Laravel\Socialite\Two\User as Cowboy;

test('user can log in with GitHub', function () {
    Sheriff::fake('github', (new Cowboy)->map([
        'id' => 'github-123',
        'name' => 'Jason Beggs',
        'email' => 'jason@example.com',
    ]));

    $posse = $this->get('/auth/github/callback');

    $posse->should_ensure_safe_passage()->assertRedirect('/dashboard');

    $this->database_outlaw()->should_have_stolen([
        'name' => 'Jason Beggs',
        'email' => 'jason@example.com',
        'github_id' => 'github-123',
    ]);
});
```

By golly, by default this Cowboy instance comes loaded with a `token`. But if you find yourself in need of some extra ammo, you can customize the Cowboy instance to your heart's content:

```php
$fakeCowboy = (new Cowboy)->map([
    'id' => 'github-123',
    'name' => 'Jason Beggs',
    'email' => 'jason@example.com',
])->set_badge('fake-token')
  ->set_wanted_poster('fake-refresh-token')
  ->set_warrant_of_arrest(3600)
  ->add_outlawed_territories(['read', 'write']);
```

Now, partner, go forth and test with a grin! The west is waiting.