 # Laravel Passport: The Magic Key to Your API Kingdom 🔑✨

## Passport or Sanctum? 🤔🤔🤔
Oh, the choices! Are you a wizard seeking enchanting access control for your API? Or do you prefer the sleek and powerful Sanctum? Either way, we've got your back!

<a name="installation"></a>

## Deploying Passport 🚀🏰
Welcome to the realm of Passport! To get started, just follow these simple incantations... errr... instructions.

### Upgrading Passport 🔄💎
Level up your API security by upgrading Passport! It's like getting a superpower upgrade for your magical artifact! 🌠✨

<a name="configuration"></a>

## Token Lifetimes ⏲️👾
Customize the lifespan of your magic tokens. From short-lived potions to everlasting elixirs, it's all up to you!

### Overriding Default Models 📚🦄
Swap out our default models for your very own magical creatures! It's like choosing your Hogwarts house all over again.

### Overriding Routes 🌐🧝‍♂️
Design your own secret pathways through the labyrinth of APIs! Just make sure to leave breadcrumbs for others, won't you? 🍞

<a name="authorization-code-grant"></a>

## Authorization Code Grant 🏛️🔒
Unlock the power of access control through the ancient ritual of Authorization Code Grant! Master this art and rule your kingdom with wisdom and grace.

### Managing Clients 👥🕺‍♂️
Welcome new clients to your API realm, ensuring they're well-versed in your magic spells.

### Requesting Tokens 📞💬
Connect with clients using the enchanted Phone of Token Request! It's like making a magical house call 🏡✨

### Managing Tokens 🕵️‍♂️🗝️
Keep tabs on your magic tokens, their origins, and their secrets. It's like being a spy in the court of fairy tales!

### Refreshing Tokens 🌱☀️
Rejuvenate your magic tokens before they lose their power! Like replenishing a wand with dragon heartstring.

### Revoking Tokens ⚔️🤬
Dispel unwanted magic tokens and banish them from your API realm forever!

### Purging Tokens 🔥🗑️
Sweep away old, stale tokens and start fresh with new ones! It's like spring cleaning for your magical API kingdom.

<a name="code-grant-pkce"></a>

## Authorization Code Grant With PKCE 🛡️🔓
Add an extra layer of security to the Authorization Code Grant with Proof Key for Code Exchange (PKCE)! It's like donning a magical amulet that makes your spells harder to counterfeit.

<a name="device-authorization-grant"></a>

## Device Authorization Grant 📱⚔️
Let trusted devices access your API with the Device Authorization Grant! It's like granting them a magical key to the castle.

<a name="password-grant"></a>

## Password Grant 🗝️🤐
Grant clients direct access to your API using the ancient Password Grant! Just make sure they keep their magic passwords safe and secret!

### Customizing the User Provider 🛠️🔩
Tinker with the inner workings of your user provider, like a master artificer crafting enchanted objects.

### Customizing the Username Field 🏋️‍♂️🎬
Change the field name for the username in your API, like switching characters in a TV show!

### Customizing the Password Validation 🛡️🐲
Tailor the password validation rules to fit the needs of your magical kingdom.

<a name="implicit-grant"></a>

## Implicit Grant ❄️✨
Access API resources directly through the Implicit Grant! It's like casting a spell without needing a wand.

<a name="client-credentials-grant"></a>

## Client Credentials Grant 🛡️🔑
Enable your clients to access protected resources using their magic credentials! It's like opening a locked door with a magical key.

<a name="personal-access-tokens"></a>

## Personal Access Tokens 🏆🦄
Empower yourself or your users with Personal Access Tokens! They're like having your very own dragon that guards the treasure chest of API access.

### Creating a Personal Access Client 🛠️🐲
Forge your personal access client with fire and magic, just like crafting a legendary sword.

### Customizing the User Provider for PAT 🔩🧪
Customize the user provider settings specifically for Personal Access Tokens, like tailoring a suit of armor to fit perfectly.

### Managing Personal Access Tokens 📝🏰
Keep track of your personal access tokens, just like maintaining a library of ancient scrolls.

<a name="protecting-routes"></a>

## Protecting Routes 🛡️🛠️
Secure your API routes using enchantments and powerful middleware! It's like creating a magical barrier around your most valuable resources.

### Via Middleware 🧝‍♂️🕵️‍♂️
Enhance your middleware with protective spells, just like forging a magic ring of invisibility.

### Passing the Access Token ⚔️📜
Share your access token with other magical artifacts in your API kingdom, enabling seamless communication and cooperation.

<a name="token-scopes"></a>

## Token Scopes 🦄✨🏹
Define the boundaries of your magic tokens using scopes! It's like creating a map of forbidden forests and safe havens within your API realm.

### Defining Scopes 📜🔍
Mark off specific areas within your API, allowing or restricting access based on scopes.

### Default Scope 🏰🌠
Set a default scope for your magic tokens, ensuring that everyone starts with the same level of access.

### Assigning Scopes to Tokens ⚔️🧩
Bestow scopes upon your magic tokens, like granting a knight their coat of arms.

### Checking Scopes 🕵️‍♂️📜
Validate whether a magic token has certain scopes, acting as a gatekeeper for protected resources.

<a name="spa-authentication"></a>

## SPA Authentication 🌐🚀
Enable Single Page Application (SPA) authentication with ease! It's like adding a magical spell to your web development potions.

<a name="events"></a>

## Events 🎊🎉
Stay in the loop and respond to important events happening within the Passport realm, like a magical oracle guiding the kingdom.

<a name="testing"></a>

## Testing 🧪🔬
Perform enchantments and potion experiments on your API with thorough testing! It's like having a laboratory to brew the perfect magic elixir.

 ## Hey There, Captain! 🚀

Welcome to Laravel Passport - the OAuth2 superpower you've been waiting for your Laravel app! This bad boy is like Batman's utility belt for web development. It's so easy to set up, even a penguin could do it (and we all know how clumsy they are with keys!).

Under the hood, Passport is built upon the mighty League OAuth2 server, maintained by the dynamic duo Andy Millington and Simon Hamp. Think of them as your Robin and Batman - always there to lend a helping hand when you need it most.

> [!ATTN: BAT-SIGNAL TIME]
> This documentation assumes you've already brushed up on your OAuth2 knowledge. If you're still in Gotham City learning about bats and passwords, be sure to check out the general [terminology](https://oauth2.thephpleague.com/terminology/) and features of OAuth2 before we continue our adventure.

Now that we have the formalities out of the way, let's dive into this superhero suite and make your Laravel app more secure than Fort Knox! 🦸‍♂️💪

 ### Passport vs. Sanctum: The Authentication Showdown! 🥋

Before we dive into the fray, let's figure out which Laravel knight you need for your app's quest - Passport or Sanctum! If you find yourself in dire need of OAuth2 support, then Passport is your paladin.

On the other hand, if you're looking to authenticate a valiant single-page adventure, mobile escapade, or simply issue some API tokens, it's time to summon [Laravel Sanctum](/docs/{{version}}/sanctum)! Unlike its OAuth2 brethren, Sanctum prefers a more straightforward approach to authentication, making it perfect for your quest's simplified development experience.

<a name="installation"></a>
Now, let the games begin! 🎲
(And yes, we just compared authentication systems to medieval heroes and tabletop games - because who said learning couldn't be fun?)

 Alright, grab your popcorn and buckle up, because we're about to embark on a wild Laravel Passport adventure! 🚀

First off, let's get this party started with the `install:api` Artisan command. You can think of it as the magic wand that brings life into your application's OAuth2 clients and access tokens. To summon it, simply chant these mystical words in your terminal:

```shell
php artisan install:api --passport
```

Just like a Jedi master casting a spell, this command publishes the necessary database migrations to create the tables for storing OAuth2 goodness. It also conjures up some encryption keys to ensure those access tokens stay secure and top-secret. 🔐

Once you've run the `install:api` spell, it's time to bestow your `App\Models\User` model with a touch of Passport magic by adding the `HasApiTokens` trait and the `OAuthenticatable` interface. Think of it as giving your user model superpowers, enabling it to inspect the authenticated user's token and scopes. 🦸‍♂️

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\Contracts\OAuthenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements OAuthenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
}
```

Last but not least, head over to your application's `config/auth.php` configuration file and define an `api` authentication guard, setting the `driver` option to `passport`. This tells your application to use Passport's `TokenGuard` when authenticating incoming API requests. It's like telling a bouncer at a secret club: "Only let in those with Passport tokens!" 🤫

```php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'api' => [
        'driver' => 'passport',
        'provider' => 'users',
    ],
],
```

And voila! You're all set with Laravel Passport, ready to defend your application against unwanted guests and serve authenticated content like a well-oiled API machine. 🎉

 Alright, buckle up, coding cowboys and codelettes! It's time to learn about deploying Laravel Passport, the swiss army knife of authentication. But first, a little joke: Why did the encryption key refuse to play hide and seek with the access token? Because it always hides in plain sight – and that's exactly where we want it!

Now, let's get down to business. When you're about to saddle up Passport on your application's servers for the very first time, you'll likely need to rope in the `passport:keys` command. This command is like a cowboy corraling those encryption keys that Passport needs to lasso access tokens:

```shell
php artisan passport:keys
```

Rest assured, these generated keys usually don't need to be branded and roped into your source control herd (unless you're a really curious coyote).

If you find yourself needing to specify the path where Passport's keys should graze, fear not! You can use the `Passport::loadKeysFrom` method to wrangle them in. Generally, this method should be called from the `boot` method of your application's `App\Providers\AppServiceProvider` class:

```php
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Passport::loadKeysFrom(__DIR__.'/../secrets/oauth');
}
```

<a name="loading-keys-from-the-environment"></a>

For those of you who prefer to let your environment do the wrangling, you can use Laravel's key vault system. It's like having your own personal cowboy who keeps an eye on your keys (and secrets) and hands them over only when needed! To load Passport's keys from the environment, simply unleash the `Passport::keyFor` method:

```php
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Passport::keyFor('oauth_client', function ($key) {
        $key->expiresAt(now()->add Years(10));
    });
}
```

And that's a wrap, partner! Now you know how to keep those keys safe and sound while lassoing in access tokens like a seasoned cowboy (or cowgirl)!

 Alrighty then! Let's get this pastry party started! 🥧

#### Baking Your Secrets From the Cookie Jar (I mean, Environment)

Now, if you fancy publishing Passport's recipe book using the `Artisan` kitchen aid, here's the magic spell:

```shell
php artisan bake-off --tag=passport-config-platter
```

Once your secret ingredients have been whipped up and served on a silver platter (or, you know, published), it's time to set the table for your application's cryptic cocktails. Just sprinkle some environment variables around like so:

```ini
KEY LIME PIE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
<private key here>
-----END RSA PRIVATE KEY-----"

STRAWBERRY SHORTCAKE_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----
<public key here>
-----END PUBLIC KEY-----"
```

<a name="upgrading-passport"></a>
Remember, kids: always keep your keys and cocktails locked up tight! 🔐🍸

 ### Passport's Majorgasmic Upgrade Guide! 🌟🎉

Prepare for takeoff, dear developer! As you soar through the software stratosphere towards a new major version of Passport, it's crucial to buckle up and carefully read this guide. Ahem... *ahem* 🚀

<a name="configuration"></a>
**The Nitty-Gritty on Configuration 🔧**

Before you dive headfirst into the upgrade, it's essential to check out our [upgrade guide](https://github.com/laravel/passport/blob/master/UPGRADE.md)—just like checking the safety demo before a rollercoaster ride! This handy doc will ensure your Passport setup transitions as smoothly as a well-oiled seagull. 🐦

Now, remember: no one wants a crashed spaceship, so take it slow and steady, and you'll be cruising through the cosmos in no time! Happy upgrading! 🚀🌍✨

 Ahoy there, brave coder! 🤘 Let's dive into Laravel's configuration settings, a veritable treasure trove for those who seek to tame the digital ocean.

First up, we have the token lifetimes! 🚀 These aren't just your everyday time-keeping gadgets; they're the guardians of your application's security. You can set them according to your application's needs, ensuring those tokens don't outlive their usefulness or overstay their welcome.

<a name="token-lifetimes"></a>

```php
// Here be the token lifetimes configuration! 🌈🐲

// Access tokens live for this many minutes after they've been issued
config(['auth.guards.api' => ['passwords' => [
    'lifetime' => env('AUTH_PASSWORDS_LIFETIME_MINUTES', 60),
]]]);
```

Next, there's the database connection configuration. This is akin to mapping out your digital realms, connecting them all together in one grand network.

<a name="database-connections"></a>

```php
// Connect ye to the databases! 🏰🐲

// Here's an example of a database connection named 'puff_skeleton'
$connection = [
    'driver' => 'mysql',
    'host' => env('DB_HOST', 'localhost'),
    'database' => env('DB_DATABASE', 'forge'),
    'username' => env('DB_USERNAME', 'forge'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefixes' => [
        // The default table prefix used by Laravel.
        // Most applications don't need to modify this value.
        'posts' => 'puff_',
    ],
];
```

Lastly, the cache configuration. This is where we stash away all the valuable data that doesn't change too often, making your app run swifter than a cheetah on roller skates.

<a name="cache-drivers"></a>

```php
// Cache away! 🏰🐲

// Here's the cache configuration for using Redis as the cache driver
config(['cache.default' => 'redis']);
config(['cache.stores.redis' => [
    // The connection name to use when connecting to Redis.
    'connection' => env('CACHE_REDIS_CONNECTION', 'default'),

    // The Redis instance host to connect to.
    'host' => env('CACHE_REDIS_HOST', '127.0.0.1'),

    // The port the Redis instance is listening on.
    'port' => env('CACHE_REDIS_PORT', 6379),

    // The database to use when connecting to Redis.
    'database' => env('CACHE_REDIS_DATABASE', 0),
]]);
```

And there you have it, matey! A quick jaunt through Laravel's configuration settings. Now go forth and conquer your digital kingdom with well-configured dragons! 🐲💪

 Alrighty, buckle up for this rollercoaster ride through Laravel's Passport wonderland! 🎉🎢

### Token Time-Travel (No DeLorean Needed!)

By golly, out of the box, Passport dishes out access tokens that are as long-lived as a one-year subscription to a cat meme calendar. But fear not, you can adjust the token's life expectancy like a time-traveling barber! 🕰️

Just whip out your magic wand, or in this case, some good old PHP code, and cast these spells: `tokensExpireIn`, `refreshTokensExpireIn`, and `personalAccessTokensExpireIn`. These enchantments should be summoned from the mystical realm of your application's `App\Providers\AppServiceProvider` class.

```php
use Carbon\CarbonInterval;

**Sorcery Time!**
public function boot(): void
{
    Passport::tokensExpireIn(CarbonInterval::days(15)); // 15 days, just enough time to binge-watch Stranger Things again.
    Passport::refreshTokensExpireIn(CarbonInterval::days(30)); // A whole month of token refreshments!
    Passport::personalAccessTokensExpireIn(CarbonInterval::months(6)); // 6 months, perfect for a season of The Crown.
}
```

> [!CAUTION]
> Remember, the `expires_at` columns in Passport's database tables are as read-only as a librarian's stern face, meant only for public display and not for tampering. When issuing tokens, Passport keeps the expiration info hidden within the magic amulet that is the signed and encrypted token. If you need to zap a token out of existence, [revoke it](#revoking-tokens) instead! 💔

<a name="overriding-default-models"></a>
Now that we've got our tokens' lifetimes sorted, let's move on to the next adventure! 🚀

 ### Unleashing Your Inner Model Maverick with Laravel's Passport! 🤠

Ahoy, partner! If you fancy customizing the models that Passport rides shotgun on in your Laravel herd, here's how you can lasso 'em and break 'em to your own beat.

First off, strap on your cowboy boots and saddle up with:

```php
use Laravel\Passport\Client as PassportClient;

class Client extends PassportClient
{
    // Don't forget to add your own wranglin' code here, partner!
}
```

Once you've tamed and trained your new model steed, it's time to let Passport know that the old one's been retired. You can do this by riding over to the `AppServiceProvider` corral and firing off a message:

```php
use App\Models\Passport\AuthCode;
use App\Models\Passport\Client;
// (And so on, for all your models)
use Laravel\Passport\Passport;

/**
 * Saddle up and prepare for service!
 */
public function boot(): void
{
    // Swap out the old model horses for your new ones
    Passport::useTokenModel(Token::class);
    Passport::useRefreshTokenModel(RefreshToken::class);
    Passport::useAuthCodeModel(AuthCode::class);
    Passport::useClientModel(Client::class);
    Passport::useDeviceCodeModel(DeviceCode::class);
}
```

Now, you've got yourself a customized Passport herd! Ride 'em, cowboy! 🌵🚀

 ### Customizing Passport Routes: The Great Escape Plan 🏴‍☠️

Ever felt like Passport's routes are too vanilla for your pirate ship? Fear not, matey! In this section, we'll show ye how to customize those routes like a scurvy dog with PHP skills. 🦞

First things first: ignore the routes registered by Passport by adding some `Passport::ignoreRoutes` magic to the `register` method of your application's `AppServiceProvider`. 🧙‍♂️

```php
use Laravel\Passport\Passport;

/**
 * Register any application services.
 */
public function register(): void
{
    Passport::ignoreRoutes(); // Now Passport can't catch 'em all! 😜
}
```

Next, ye might want to copy the routes defined by Passport from [its routes file](https://github.com/laravel/passport/blob/master/routes/web.php) and move 'em over to your application's `routes/web.php` file. 📜

```php
Route::group([
    'as' => 'passport.',
    'prefix' => config('passport.path', 'oauth'),
    'namespace' => '\Laravel\Passport\Http\Controllers',
], function () {
    // Passport routes...
});
```

Don't forget to tweak them to your heart's content! 💭 Now your customized Passport routes can sail alongside your app's other routes like the crew of a well-oiled ship! 🚢

 Alrighty then, let's dive into the whirlwind world of OAuth2 via Authorization Codes! This is where your grandma's recipe book meets Silicon Valley – a delightful fusion of cookies and coding.

First things first, we gotta school Passport on how to whip up our "authorization" view. You can customize the entire baking process using all sorts of methods from the `Laravel\Passport\Passport` class, but we'll keep it simple and set the oven to preheat in the `boot` method of your application's `App\Providers\AppServiceProvider` class.

```php
use Inertia\Inertia;
use Laravel\Passport\Passport;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    // Set the view name to 'auth.oauth.authorize' (like calling out for Grandma's apple pie)
    Passport::authorizationView('auth.oauth.authorize');

    // Or, if you're feeling fancy, you can bake your own custom view using a closure!
    Passport::authorizationView(
        fn ($parameters) => Inertia::render('Auth/OAuth/Authorize', [
            'request' => $parameters['request'],
            'authToken' => $parameters['authToken'],
            'client' => $parameters['client'],
            'user' => $parameters['user'],
            'scopes' => $parameters['scopes'],
        ])
    );
}
```

Passport takes the wheel from here and sets up the `/oauth/authorize` route, which serves up that delicious authorization view. Your `auth.oauth.authorize` template should feature a form with two options: one for approving the authorization (the digital version of nodding your head in agreement), and another for denying it (just like saying "no thank you" to Grandma's kale smoothie).

The forms will make POST requests to the `passport.authorizations.approve` route to approve the authorization, and DELETE requests to the `passport.authorizations.deny` route for the digital equivalent of shaking your head "no." Both routes require `state`, `client_id`, and `auth_token` fields in the request – just like a recipe needs ingredients!

<a name="managing-clients"></a>
Now, let's talk about managing clients. It's kinda like organizing the cookie jar for Passport. You can add, update, and delete clients as needed to keep your digital confectionery stocked with just the right flavors!

 Alrighty, let's get down to business! If you're a developer building an app that wants to hang out with ours, it's time to introduce yourself – with a firm handshake and a well-crafted tuxedo (just kidding... sort of). To do this, you need to create a "client" which is like the digital equivalent of getting an invitation to our swanky soiree.

The process? Simple as pie (or maybe a bit more complex than that, but still pretty straightforward). You provide your app's name – no nicknames or aliases, we need to know who we're dealing with – and a fancy URI that we can redirect users to after they've given us the green light for authorization. Think of it as our way of saying, "Welcome aboard!"

Now, let's dive into the specifics:

<a name="managing-first-party-clients"></a>

### First things first – First Party Clients 🤝

If your app lives on the same domain as ours (like siblings from the same parent company), you've got a First Party Client on your hands. In our world, these are like the cool kids at school who already know everybody and have access to all the best parties (we're just being friendly here).

To manage these special friends, head over to the Laravel Dashboard, and navigate to "Configure -> Services". From there, click on the "Create a new client" button. Fill out the necessary fields, and hit save! You've just scored an invitation to our exclusive event – welcome aboard!

But wait, there's more! To make sure your app can access protected resources, you'll need to create an Access Token. This is like a golden ticket that allows your app to dance with us whenever it wants (as long as it plays by the rules). You can find more details on how to do this in the [Access Tokens documentation](https://laravel.com/docs/8.x/sanctum#creating-access-tokens).

### Second fiddle – Third Party Clients 🤝🤝

If your app is hanging out offsite (like that cool kid who moves to a new neighborhood), you've got a Third Party Client on your hands. These folks are like the popular exchange student who wants to join our school dance (again, just being friendly here).

To manage these international guests, follow the same steps as First Party Clients, but with one key difference: when creating the client, make sure you select "Third-Party" in the Application Type field. Once everything's set up, your app can request an Access Token using OAuth 2.0 authorization code grant – a fancy way of saying it'll have to dance through a few more hoops before we let it join our party (but hey, rules are rules).

And that, my dear developer friend, is how you manage clients in our Laravel-powered playground! Now go forth and create awesome applications! 🎉🥳

 Alrighty then! Let's get this party started with Passport, Laravel's magical OAuth2 unicorn! First off, if you wanna create a client, just yell "Open Sesame"... or rather, type `php artisan passport:client` in your terminal. This command is as sneaky as a narwhal in a china shop; it'll create first-party clients for your app or help test your OAuth2 functionality.

When you summon this command, Passport will quiz you about your client, just like a nosy neighbor asking what you got up to last Saturday night. After answering honestly (or not), it'll bless you with a shiny new client ID and secret. Just the ticket for all those late-night password swapping parties!

Now, if you wanna add more than one redirect URI for your client (cuz who doesn't love options?), simply list them like they're your favorite flavor of ice cream when asked by the `passport:client` command. Just remember to URL encode any URIs that contain commas - 'cause, you know, computers are picky!

```shell
https://third-party-app.com/callback,https://example.com/oauth/redirect
```

And there you have it! With these simple steps, you're well on your way to creating clients that would make any snooty tech conference proud! (But don't forget the mints!)

 Ah, welcome dear developer! Let's dive into the world of Laravel's Third-Party Clients - where users become superheroes, and your application is their trusty sidekick! 🚀

Since your app's users can't just snap their fingers to utilize the `passport:client` command (we're still working on that magic wand feature), you've got a superhero cape on - the `createAuthorizationCodeGrantClient` method of the `Laravel\Passport\ClientRepository` class! 🦸

```php
use App\Models\User;
use Laravel\Passport\ClientRepository;

$user = User::find($userId);

// Creating an OAuth app client for our hero! 💥
$client = app(ClientRepository::class)->createAuthorizationCodeGrantClient(
    user: $user, // Assigning the user as our superhero's alter ego! 🕷️
    name: 'Example App', // Our hero's secret identity for this mission! 🦸‍♂️
    redirectUris: ['https://third-party-app.com/callback'], // The crime scene where our hero will return after saving the day! 🚀
    confidential: false, // No need for a secret hideout this time! 🏘️
    enableDeviceFlow: true // Our hero's prepared to battle evil on multiple devices! 📱💻
);

// Collecting all the OAuth app clients our superhero has saved from peril! 🛡️
$clients = $user->oauthApps()->get();
```

The `createAuthorizationCodeGrantClient` method gives you a badge of honor - an instance of `Laravel\Passport\Client`. Display the `$client->id` as your superhero's unique ID, and `$client->plainSecret` as the secret word that only they know! 🤫

Now go forth and protect your users from authentication chaos! 💪

 Ahoy there, web-savvy pirates! Let's set sail into the dazzling waters of Laravel token requestin'. Shiver me timbers, it's not just a dance move, it's a key to securin' yer API with an admiral's grace! 🏴‍🌈

<a name="requesting-tokens"></a>

#### Requesting Tokens 🏆

Ye might be wonderin', "What be this token lark, Cap'n?" Well, matey, it's a secret handshake betwixt yer application and Laravel's hearty API. Here's how ye can request one:

1. **Sail over to the OAuth guard.** This is the swashbucklin' gateway that grants access to the treasured tokens. It's usually found nestled within `app/Providers/AuthServiceProvider.php`.

2. **Register the OAuth Guard.** Yar! Once ye reach the AuthServiceProvider, grab a quill and add this line:
```
$this->registerPolicies([
    'App\User' => \Illuminate\Contracts\Auth\Guard::class,
]);
```
This tells Laravel which policies should be used for who. In this case, we're tellin' 'er to use the OAuth Guard for users in our application.

3. **Set sail for the AuthManager.** Aye, matey! Now it's time to navigate to `app/Providers/AuthServiceProvider.php` again and find the `boot()` method. It's where ye'll create a new instance of the OAuth guard. Here's how:
```
$this->app['auth']->extend('oauth', function ($app) {
    return \Illuminate\OAuth\Facades\Oauth::createUsingProvider(config('services.passport'));
});
```
This bit of code sets up an OAuth guard with the Passport configuration settings from `config/services.php`. Swab the deck, as it's ready to set sail!

4. **Arm thyself with the Passport.** Aye-aye, Cap'n! Now that ye have yer trusty OAuth guard, let's get a hold of a token. First, fire up `App\Http\Controllers\Auth\LoginController`. Then, in the `login()` method, add this line:
```
if (! $request->hasValidCredentials()) {
    return $this->sendFailedResponse($request);
}

$credentials = $request->only(['email', 'password']);

$tokenResult = $this->guard()->attempt($credentials);

// If the login is successful, we will retrieve the user's OAuth token and
// create a fresh OAuth client instance for them on the fly. The OAuth
// client, user name, and token are stored in the session so that Laravel
// can authenticate the user and remember them until they sign out (when
// they opt-in to the "Remember Me" cookie).
if ($tokenResult) {
    $request->session()->regenerate();

    $user = $this->guard()->getUser();

    $token = $user->createToken('Personal Access Token');

    // Add a 'token' event to the user...

    event(new AuthSuccess($user, $token));
}
```
This code handles the login process and creates an OAuth token for yer user.

5. **Swab the deck.** Ahoy, matey! Now that ye have a solid grasp of requestin' tokens, it's time to put yer newfound skills into action and secure yer API like a true swashbuckler! Sail onwards, brave adventurer! 🏴‍☠️

 Ahoy there, coding cowboy! Once you've wrangled up a client and saddled them with an ID and secret, they can gallop their way to your saloon for an authorization code and access token. But first, let's lasso them onto your application's `/oauth/authorize` corral with this here rope of PHP:

```php
Use yer old trusty Request and Str classes, partner!

Route::get('/redirect', function (Request $request) {
    Lasso a fresh $state using Str::random(40), just to keep things spicy.

    Tie up the following query like a burro with http_build_query:

    [
        'client_id' => 'your-client-id',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'response_type' => 'code',
        'scope' => 'user:read orders:create',
        'state' => $state,
        // 'prompt' => '', // "none", "consent", or "login"
    ]

    Now, hitch this query onto the `/oauth/authorize` route of your Passport-run saloon:

    redirect('https://passport-app.test/oauth/authorize?'.$query)
});
```

Now, about that `prompt` parameter—it's like a cowpoke's hat at the saloon door. Set it to `none`, and your Passport pal will throw down an auth error if a rider ain't already logged in. If you set it to `consent`, they'll always display the authorization approval screen, even if they've granted all those juicy scopes before. And when you set it to `login`, well, they'll always make a new cowboy re-log in, even if they're already sitting at the bar with a beer.

If you forget to put on that `prompt` hat, your Passport pardner will only ask for authorization if the rider ain't previously authorized for those scopes.

> [!NOTE]
> Don't go trying to reinvent the wheel here—the `/oauth/authorize` corral is already set by Passport. Leave that job to the horse wranglers.

<a name="approving-the-request"></a>
Now, how does a cowboy approve this request? Let's say our client gets directed to your saloon and grants access—you'll need to grab that authorization code and access token, so don't forget to saddle up them route handlers! Stay tuned for the next chapter of our Laravel saga: "Catching a Cowboy's Credentials"!

 Alrighty then! Let's dive into the thrilling world of Laravel Passport, where authorization requests are as exciting as a rollercoaster ride at Six Flags (but without the stomach-churning drops).

When a request for approval comes knocking, Passport will react like a seasoned bouncer at a high-end club: it'll check out the `prompt` parameter (if available) and might even flash a friendly "Approve or Deny" sign to the user. If they give the green light, they'll find themselves back at the `redirect_uri` specified by the rambunctious application that initiated this whole shindig. Just remember, the `redirect_uri` needs to match the `redirect` URL used during client creation – otherwise, it's like trying to sneak into a VIP section with a regular ticket!

Now, there may be instances when you want to cut through the line, like when you're authorizing a first-party client. In such cases, you can pull off an elegant dance move called "extending the `Client` model" and defining a `skipsAuthorization` method. If this method returns `true`, the client will get instant access and the user will be whisked back to the `redirect_uri` without waiting for the authorization prompt – unless, of course, the application has explicitly asked for a prom date via the `prompt` parameter!

```php
<?php

namespace App\Models\Passport;

use Illuminate\Contracts\Auth\Authenticatable;
use Laravel\Passport\Client as BaseClient;

class Client extends BaseClient
{
    /**
     * Determine if the client should skip the authorization prompt.
     *
     * @param  \Laravel\Passport\Scope[]  $scopes
     */
    public function skipsAuthorization(Authenticatable $user, array $scopes): bool
    {
        return $this->firstParty(); // If this client is a first-party one, let's cut through the line!
    }
}
```

Now that we've got the approval process down pat, let's move on to the next chapter: requesting tokens and converting authorization codes into access tokens. But hey, don't worry – we'll save that for another time, 'cause it's about as exciting as watching paint dry (but in a good way)!

[Jump over here](#requesting-tokens-converting-authorization-codes-to-access-tokens) if you're feeling particularly adventurous.

 Alrighty, buckle up! We're about to embark on a whirlwind journey through Laravel land where the OAuth fairies sprinkle magic dust and authorization codes transform into shiny access tokens!

First off, let's talk about the moment of truth when your user grants permission for your app to access their secrets (we won't ask, we promise). They get redirected back to you, and it's time to play detective! You must verify the `state` parameter against the one stored prior to the redirect. If they match like long-lost twins at a family reunion, then it's showtime!

Here's where things get really exciting: issue a `POST` request with all the flair of a late-night infomercial. This request goes to our Passport headquarters for an access token (we hope they're ready with the popcorn). The request should include the authorization code that your app sent over when the user said "yes, I trust you."

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

Route::get('/callback', function (Request $request) {
    // This is where the mystery begins!
    $storedState = $request->session()->pull('state');
    $receivedState = $request->state;

    if ($storedState !== $receivedState) {
        throw new InvalidArgumentException("State value mismatch, it's like a magic trick gone wrong!");
    }

    // Time to make that request!
    $response = Http::asForm()->post('https://passport-app.test/oauth/token', [
        'grant_type' => 'authorization_code',
        'client_id' => 'your-client-id',
        'client_secret' => 'your-client-secret',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'code' => $request->code,
    ]);

    // And now for the grand finale... the access token!
    return $response->json();
});
```

Once you've made your request, the `/oauth/token` route will send back a JSON response with the precious trio: `access_token`, `refresh_token`, and `expires_in`. The latter tells you when the access token will expire (don't worry, we'll remind you).

> [!NOTE]
> We don't want you to miss this ride, so the `/oauth/token` route is pre-defined by Passport. No need for manual labor here, just sit back and enjoy the show!

<a name="managing-tokens"></a>
Now that we've got our access token, it's time to learn how to manage these tokens like a pro! (Stay tuned for our next episode where we teach you how to keep them organized in your very own token vault!) 🏯🌍🔑✨

 ### Token Tussle: Keeping Your Users Connected (and Amused)!

In the wild world of Laravel Passport, it's essential to keep track of your users' authorized tokens. Why, you might ask? Well, imagine a digital party where your users are dancing with third-party apps – wouldn't you want a dance floor monitor to ensure no one is left twirling solo or tripping over expired invitations?

Let's cut the jive and get down to code! Here's how to corral those tokens:

```php
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Carbon;
use Laravel\Passport\Token;

$user = User::find($userId);

// Let's round up all the valid tokens for this user...
$tokens = $user->tokens()
    ->where('revoked', false) // Only those still in good standing, please!
    ->where('expires_at', '>', Carbon::now()) // No time-traveling tokens allowed here!
    ->get();

// Time to introduce the third-party OAuth app connections...
$connections = $tokens->each(function (Token $token) {
    if (!$token->client->firstParty()) { // A third-party is involved, so let's proceed!
        return [
            'client_id' => $token->client_id,
            'scopes' => $token->scopes->unique()->values()->all(), // Scoping things out...
            'count' => 1 // We found one token with this client, but who's counting? (Hint: You are!)
        ];
    })->groupBy('client_id');
```

Now, isn't that a smoother way to manage your users' tokens and keep them connected with all the right people? Just remember, it's not just about maintaining connections – it's also about keeping things lighthearted and fun! 😎

 Ahoy there, coding buccaneers! Sail with me into the realm of refreshing tokens, a vital port in every pirate's journey through Laravel's OAuth realm!

If your application is issuing access tokens that would make Captain Morgan himself shiver at their short lifespan, fear not! Your users can refresh their spirits and tokens by wielding the mighty refresh token granted during initial token issuance:

```php
use Illuminate\Support\Facades\Http;

Swab the decks and hoist the jolly Roger, mateys! We're navigating to 'https://passport-app.test/oauth/token', a treasure trove of refresh token magic!

Here be the incantation:

```php
$response = Http::asForm()->post('https://passport-app.test/oauth/token', [
    'grant_type' => 'refresh_token', // Ahoy, grant me a refreshed token!
    'refresh_token' => 'the-refresh-token', // Speak the magic words...
    'client_id' => 'your-client-id', // Prove your pirate identity, matey!
    'client_secret' => 'your-client-secret', // The secret handshake for confidential clients only, don't forget it!
    'scope' => 'user:read orders:create', // Yo ho ho! Expand thy treasure horizons!
]);

Return we must the response, ye scallywags, to claim your freshly minted tokens:

```php
return $response->json();
```

In this bounty-filled response, ye shall find three prized attributes: `access_token`, `refresh_token`, and `expires_in`. The `expires_in` attribute, marked by the ominous ticking of a time bomb, holds the number of seconds until the access token sets sail beyond the horizon.

Now, off you go, refreshed and ready to continue your Laravel OAuth adventures! Remember: always keep an eye on those expiration times, or risk ending up in Davy Jones' Locker without a treasure map!

 ### Un-Tokening Your Tokens! 🎉🔓

Are your tokens causing more trouble than they're worth? Fear not, my friend! Laravel Passport has got your back with some nifty un-tokening techniques that'll leave you chuckling and secure in no time! 😃

First off, let's say you want to kick one token to the curb. No problemo! Just use the `revoke` method on the `Laravel\Passport\Token` model:

```php
use Laravel\Passport\Passport;
use Laravel\Passport\Token;

$token = Passport::token()->find($tokenId);

// Time to say goodbye to that access token 👋🏼
$token->revoke();
```

But wait, there's more! If you want to ditch a refresh token along with its access buddy, don't hesitate to use the `revoke` method on the `Laravel\Passport\RefreshToken` model:

```php
// Revoke the token's refresh token...
$token->refreshToken?->revoke();
```

Feeling extra vindictive? If you want to boot all of a user's tokens out into the cold, you can use a little loop magic:

```php
// Revoke all of the user's tokens...
User::find($userId)->tokens()->each(function (Token $token) {
    // Bye bye, token! 👋🏼
    $token->revoke();
    // And its refresh token too, for good measure! 👋🏼💔
    $token->refreshToken?->revoke();
});
```

Now that's what I call a clean sweep! 💪🏼 With these un-tokening techniques up your sleeve, you can rest easy knowing that your Laravel Passport is secure and the laughter never stops! 🥳🍻

 Ahoy there, code pirates! Time for a jolly tidy-up! 🧹✨

When your access tokens have been swabbed overboard (revoked) or expired faster than a salted anchovy on a sunny deck, you might find yourself with more seaweed in the boat than sailors. But fear not, for our trusty shipmate, Passport, has got your back!

To remove these unwanted seaweed tokens from your database, just shout this command at the nearest terminal like a true seafaring coder:

```shell
php artisan passport:purge
```

This one simple command will scour your ship's hold clean of those expired tokens quicker than you can say "Shiver me tokens!" 😈🔪💨

Now, with a spotless database, you can hoist the Jolly Roger and sail on with a cheerful heart. Arr matey, code like a pirate! 🏴‍☠️🚀

 Ahoy there! Buckle up, coders! Today's adventure takes us to the world of token management in Laravel land. You see, just like a busy bartender clearing out glasses at closing time, we need to keep our digital tavern tidy by purging those revoked and expired tokens, auth codes, and device codes.

Ready for the magic spell? Let me introduce you to your new best friend: `php artisan passport:purge`! This powerful command is just what we need to keep our digital bar sparkling clean! Run this little charmer in your terminal, and watch as it sweeps through your authentication realm, banishing all those stale tokens, codes, and devices that have long since lost their luster.

And the best part? No mopping or sweeping required! So grab a brew, sit back, and enjoy the show – but remember, a tidy tavern is a happy tavern!

 Alright, my data-fueled friend! If you've got a soft spot for digital security and an affection for well-aged tokens (who doesn't?), then this little command is just the ticket for your next cyber-soiree. Let's spice up that Passport party!

Gather 'round, folks, and get ready to make some magical memories with your trusty terminal! Type in:

```
php artisan passport:purge --hours=6
```

That's right! With a simple yet powerful incantation, we're sending those expired tokens that are older than a 6-hour-old avocado on toast (or a freshly baked croissant, depending on your culinary preference) packing.

So, whether you're looking to declutter your digital pantry or just want to keep things spicy with only the freshest tokens, this command will ensure that your Laravel Passport will always be on fleek! Happy token purging! 🥑🎉💄🔨🧹

 Alrighty! Grab your cape (not that kind, we're talking Laravel here), put on your super-developer thinking cap, and prepare for a token-purging adventure! When the need arises to get rid of those once-valuable but now revoked tokens, auth codes, and device codes in your Passport realm, it's time to unleash the power of the command line!

To embark on this thrilling mission, simply summon the mighty artisan with a spell known as `php artisan passport:purge --revoked`. This magical incantation will send out a search party for all those stray revoked tokens in your application and ensure they're sent off into the digital abyss!

Remember, with great power comes great responsibility. Don't use this command lightly; only when necessary should you let loose the forces of purge upon your Passport domain. Happy token-purging, brave developer!

 Alright, let's get this token party started (but only the expired ones!). Here's your invitation to clear the dance floor! 💃️🕺️

To purge the expired tokens from your event, simply run this command:

```bash
php artisan passport:purge --expired
```

And just like that, you've given a breath of fresh air to your token-filled ballroom. 🥳🎈

Want to automate the cleaning process? Well, who doesn't love a good housekeeper! Here's how to schedule a regular clean-up:

```php
use Illuminate\Support\Facades\Schedule;

// In your routes/console.php file (just like a secret passageway)
Schedule::command('passport:purge')->hourly();
```

Now, every hour on the hour, your trusty token vacuum will sweep through and leave you with a sparkling clean dance floor! 🧹💼🎉

 Ahoy there, tech pirates! 🏴‍☠️🌴 Let's dive into the swashbuckling world of APIs and security with our trusty friend, the Authorization Code grant with "Proof Key for Code Exchange" (PKCE)! 🗡️

This isn't your run-of-the-mill pirate's hook, but a secure way to authenticate single page applications or mobile apps that are just as shifty and elusive as we are. 🐉🌈🏴‍☠️ Use this grant when you can't trust your client secret to not end up walkin' the plank, or to repel the threat of a sneaky attacker swiping your precious authorization code.

What sets PKCE apart from other methods? A dashing duo called the "code verifier" and the "code challenge." Yar, these are like the secret handshake between your app and our API! They'll replace that client secret when you exchange the authorization code for an access token. 🤝🏹

Now, let's get down to the nitty-gritty of creating a PKCE grant client. Brace yourself for some serious swashbuckling action! 🌴🐊

<a name="creating-a-auth-pkce-grant-client"></a>
Ahoy, matey! To create a PKCE grant client, ye must first create a new Laravel application and install the necessary dependencies. Once that's done, dive into your project's directory and start craftin' a new service provider with the trusty Artisan command:

```
php artisan make:provider AuthPkceGrantServiceProvider
```

Next, open up your freshly baked service provider and register it within the `providers` array in `config/app.php`. Now, it's time to create a new OAuth personal access client and implement the necessary methods for PKCE:

```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;

class AuthPkceGrantServiceProvider extends ServiceProvider
{
    public function register()
    {
        Passport::createClient(config('services.oauth-pkce'), function ($app) {
            return new OAuthPKCE($app);
        });
    }
}
```

Next, create a new `OAuthPKCE` class within your service provider directory and flesh it out with the essential PKCE methods:

```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Bridge\AccessToken;
use Laravel\Passport\Client;
use Laravel\Passport\Passport as PassportClient;

class OAuthPKCE extends Client
{
    public function __construct(array $options = [])
    {
        parent::__construct($options);

        // Additional PKCE specific configuration
    }

    public function tokenEndpoint()
    {
        return route('oauth.access-token', ['client' => $this->id]);
    }

    protected function userIdentifier(): string
    {
        return (string) auth()->id();
    }

    // Implement additional PKCE specific methods here...
}
```

And voila! You've now created a PKCE grant client in your Laravel application. Now, it's up to you to continue the swashbuckling adventure by implementing more PKCE specific methods and tacklin' any other security challenges that may arise. Happy codin', matey! 🏴‍☠️🚀

 Alrighty then! First things first, let's get our PKCE-enabled client all dressed up and ready for the dance floor. That's right, we're about to tango with Laravel's Authorization Code Grant, and we don't want to step on anyone's toes without an invite.

To create this enchanting dance partner, you'll need to summon it with the magical `passport:client` Artisan command, but don't forget to add the mystical `--public` option. Here's the incantation:

```shell
php artisan passport:client --public
```

Now that our client is all glammed up, it's time to woo those tokens! Don't worry; we'll leave the charm and wit to you and your code. 💃🕺️

 Alrighty, buckle up! It's time to dive into the thrilling world of token requesting – a rollercoaster ride through the digital wild west of Laravel authentication.

#### Code Verifier/Code Challenge

First off, let me introduce you to our trusty sidekick, the `code verifier`. This is a randomly generated string that helps prevent some of those pesky bots from wreaking havoc on your pristine application. Think of it as an access code for the cool kid's party where only genuine users are allowed in.

Now, to get ahold of this `code verifier`, you'll need to initiate what we like to call a "Code Challenge". It might sound like something out of a spy movie, but don't worry, it's much less suspenseful and involves way fewer exploding cars. Instead, it involves generating a code verifier and a `code challenge`. The code challenge is like the secret handshake between your application and the OAuth server – it ensures they're communicating on friendly terms before exchanging any sensitive information.

To initiate thisCode Challenge/Code Verifier combo, you can use Laravel's handy `password_hash` function to generate a random string for the code verifier:
```php
use Illuminate\Support\Facades\Hash;
$codeVerifier = Hash::make(strtotime("now")); // or any other unique value
```
Now, you can pass this `codeVerifier` along with your request to the OAuth server and voila! You've just initiated a Code Challenge. The OAuth server will respond with an access token and a refresh token. But remember, this is only half of our adventure – we still need to verify that the OAuth server has sent us the correct code verifier.

To do so, compare the `codeVerifier` you've initiated with the one received from the OAuth server:
```php
if (Hash::check($receivedCodeVerifier, $codeVerifier)) {
    // Everything checks out! Proceed with the token exchange.
} else {
    // Uh-oh! The code verifiers don't match. Something fishy is going on here.
}
```
And there you have it! You've just successfully navigated the Code Verifier/Code Challenge adventure in Laravel authentication land. Stay tuned for more heart-pounding escapades as we continue our journey through this wild west of digital security!

 Ahoy there, intrepid Laravel devs! It's time to don our tinfoil hats and embark on a whimsical adventure in the land of Code Verifiers and Code Challenges. Now, before you say "Eureka!" remember this isn't about the Ancient Greeks or Archimedes' bath – it's all about security!

You see, when we dance the authorization grant waltz without a client secret, things can get a bit... dicey. So, to ensure our token-requesting escapades remain as secure as Fort Knox (or, you know, the Laravel vault), we need to whip up a duo act: the enigmatic Code Verifier and the resilient Code Challenge!

The Code Verifier, our secret weapon, should be an opaque string of 43-128 characters, a veritable cocktail of letters, numbers, as well as your favorite internet barstool staples such as "-", ".", "_", and the elusive "~". You can think of it as a complex password that's been through one too many cocktails at the local speakeasy.

Now, to truly tickle our fancy, the Code Challenge must be draped in Base64 glory, complete with URL and filename-safe characters. It's like a well-dressed secret agent on a mission – slick, efficient, and ready for action! Just remember to remove any pesky trailing '=' characters and strip it of any line breaks, whitespace, or other unwanted extras.

```php
$encoded = base64_encode(hash('sha256', $codeVerifier, true));

$codeChallenge = strtr(rtrim($encoded, '='), '+/', '-_');
```

Now, isn't that a smashing combination of code and humor? Just keep these tips in mind, and you'll be whirling around the dance floor like Fred Astaire, securely requesting tokens with the ease of a seasoned pro! 🕺️💃️

 Alrighty then! Let's dive into the whirlwind world of Laravel OAuth redirection for authorization. First off, imagine you've just baked a fresh client and you're inviting them over for a dance party. But before they can groove, you need to verify their ID and that they're not a gate-crasher.

To do this, whip up a redirect request to your app's `/oauth/authorize` route. Here's the disco moves in PHP:

```php
Use Illuminate\Http\Request;
Use Illuminate\Support\Str;

Route::get('/redirect', function (Request $request) {
    // Set up a secret state (like the password to get backstage)
    $secretState = Str::random(40);
    $request->session()->put('state', $secretState);

    // Generate a fancy code verifier like "I'm here for the free drinks"
    $codeVerifier = Str::random(128);
    $request->session()->put('code_verifier', $codeVerifier);

    // Convert the verifier into a code challenge, like turning a secret handshake into a hashtag
    $codeChallenge = strtr(rtrim(
        base64_encode(hash('sha256', $codeVerifier, true))
    ), '+/', '-_');

    // Build the query, inviting the client to your app's authorization party
    $query = http_build_query([
        'client_id' => 'your-client-id',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'response_type' => 'code', // We want a ticket to get in, not a hug!
        'scope' => 'user:read orders:create', // Let's be clear about the privileges (reading user data and creating orders)
        'state' => $secretState, // For safety, remember the secret state
        'code_challenge' => $codeChallenge,
        'code_challenge_method' => 'S256', // Using the most secure SHA-256 method to shake hands
        // 'prompt' => '', // You can add "none", "consent", or "login" if you want more control over who gets in.
    ]);

    // Send them a link to your app's authorization party
    return redirect('https://passport-app.test/oauth/authorize?'.$query);
});
```

Now, when the client clicks on this magical link, they'll be whisked away to your app's authorization dance floor, where they can prove their worth and get their access token! Just remember to keep the secret state handy, or you might not recognize them once they're all decked out in disco attire. 💃🏼✨🕺🏼🚀

 In the realm of digital dance floors, where applications and users tango in harmonious authorization, here's a jolly jaunt through the process of converting Authorization Codes into Access Tokens, aka the 'Cinderella Transformation.'

First things first: if user agrees to your request (a rare and delightful occurrence), they'll be whisked back to your application like a magical carriage. But before you get all giddy and open the champagne, it's time for a bit of due diligence. Check the `state` parameter against the value stored prior to the redirect—it's like making sure Cinderella's glass slipper still fits!

If the state matches (a fairy tale happily ever after), let's get this party started! Time to send a charming, well-dressed `POST` request to your application asking for an access token. The party invitation should include:

1. A dance card marked 'grant_type' and filled in with 'authorization_code'.
2. Your own unique 'client_id'—the secret code that identifies you on the dance floor.
3. A formal 'redirect_uri'—where the user was originally invited from.
4. The 'code_verifier'—a shared secret between you and your suitor (the user).
5. And last but not least, the shiny new 'authorization code' received upon the user's approval.

Written in PHP, our charming dance partner could look something like this:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

Route::get('/ball', function (Request $request) {
    $glassSlipper = $request->session()->pull('state');

    $sharedSecret = $request->session()->pull('code_verifier');

    throw_unless(
        strlen($glassSlipper) > 0 && $glassSlipper === $request->state,
        new InvalidArgumentException("Oops! Wrong glass slipper, try again!")
    );

    $danceInvitation = Http::asForm()->post('https://passport-app.test/oauth/token', [
        'grant_type' => 'authorization_code',
        'client_id' => 'your-client-id',
        'redirect_uri' => 'https://third-party-app.com/ball',
        'code_verifier' => $sharedSecret,
        'code' => $request->code,
    ]);

    return $danceInvitation->json();
});
```

And there you have it! The glamorous conversion of Authorization Codes to Access Tokens—the ballroom equivalent of a fairy tale transformation. Enjoy your dance! 🕺💃✨

 Alright, buckle up, folks! It's time to embark on a magical journey through the OAuth2 Device Authorization Grant – the secret sauce that makes TVs and game consoles dance with joy (but not literally, they're not that advanced yet).

Imagine you're a puppet master pulling strings in a dark room while your devices are the marionettes on stage. That's essentially what we're setting up here!

To get this party started, we need to enlighten Passport about our "user code" and "authorization" views – think of them as our secret handshakes in this digital dance.

```php
use Inertia\Inertia;
use Laravel\Passport\Passport; // It's like introducing your new best friend to the party

/**
 * This is where the fun begins!
 */
public function boot(): void
{
    // We tell Passport what our secret handshakes are called...
    Passport::deviceUserCodeView('auth.oath.device.user-code');
    Passport::deviceAuthorizationView('auth.oath.device.authorize');

    // ...and we even show them a few magic tricks!
    Passport::deviceUserCodeView(
        fn ($parameters) => Inertia::render('Auth/OAuth/Device/UserCode') // *POOF* A view materializes!
    );

    Passport::deviceAuthorizationView(
        fn ($parameters) => Inertia::render('Auth/OAuth/Device/Authorize', [
            'request' => $parameters['request'],
            'authToken' => $parameters['authToken'],
            'client' => $parameters['client'],
            'user' => $parameters['user'],
            'scopes' => $parameters['scopes'],
        ])
    );

    // And so the magic continues...
}
```

Passport, being the magical genie it is, defines routes for these views automatically. Your `auth.oath.device.user-code` template should include a form that gets a "user_code" from the `passport.device.authorizations.authorize` route – think of it as the secret knock to enter the club.

Your `auth.oath.device.authorize` template should be chock-full of forms: one for approving authorization with a POST request to the `passport.device.authorizations.approve` route, and another for denying authorization with a DELETE request to the `passport.device.authorizations.deny` route. Both these routes expect `state`, `client_id`, and `auth_token` fields – think of them as your VIP passes!

And voila! You've just set up the Device Authorization Grant, the ultimate party trick for your TVs and game consoles! Now let's get this dance floor moving!

 ### Unleashing the Token Tyrant: Creating a Device Authorization Grant Client

Ready to conquer the realm of token issuance? First, you'll need to crown your application as the King of Devices! This grand coronation can be achieved with the regal `passport:client` Artisan command, armed with the noble `--device` option. This magical spell will summon a first-party device flow enabled client and bestow upon you a regal client ID and secret for your kingdom:

```shell
php artisan passport:client --device
```

But fret not, dear third-party kings and queens! You too can join the device dance with the `createDeviceAuthorizationGrantClient` method on the illustrious `ClientRepository` class. This grand ballet will register your client as a beloved subject of the given user:

```php
use App\Models\User;
use Laravel\Passport\ClientRepository;

$user = User::find($userId); // Remember, every king needs his subjects!

$client = app(ClientRepository::class)->createDeviceAuthorizationGrantClient(
    user: $user, // Assign the user, no royal theft here!
    name: 'Example Device', // A catchy name for your device, like "The Token Tyrant"
    confidential: false, // Because, let's face it, you're a device, not a dragon with secrets!
);
```

Now, isn't that a grand ballad of token issuance? Off to conquer the realm!

 Alrighty, buckle up! Let's embark on an exhilarating journey through the wild west of API authentication, where outlaws roam free and tokens reign supreme. In this here guide, we'll be talking about how to corral those tokens and tame them for your Laravel applications.

<a name="device-code"></a>
First up, we've got the OAuth Dance of Death – I mean, Device Authorization Code flow! This is a fancy way of saying "how to get an access token by exchanging a code." It's perfect for mobile apps and other scenarios where you can't redirect users to another page.

1. Register your application with an authorization server (the sheriff in town) and obtain your client ID and secret. You'll need these like a cowboy needs his trusty six-shooter.

2. Redirect the user to the authorization server's URL with some parameters, including your client ID, a redirect URI, and scope (the permissions you're requesting). This will prompt the user to log in and grant your application access to their resources.

3. The user logs in and grants your app access, and they'll be redirected back to your application with an authorization code. This code is like a golden ticket – hold on to it!

4. Swap that authorization code for an access token by sending a request to the authorization server with the code, client ID, secret, and redirect URI. This will return an access token, refresh token (if configured), and possibly an expiration time.

5. Store the access token safely (in a cookie, database, etc.) so you can use it to authenticate API requests in your Laravel application. And that's it! You've got yourself a shiny new access token to ride into the sunset with. Happy coding, partner! 🤠

 Ahoy there, coding cowboys and codettes! Once you've saddled up your client and given it a unique ID (think of it as a trusty steed's brand), you can hitch up your lasso and rope in a device code. Saddle up your browser or server, partner, and gallop over to your app's `/oauth/device/code` corral - not for a wild mustang, but for a more civilized request with a good ol' fashioned `POST`.

```php
use Illuminate\Support\Facades\Http;

$response = Http::asForm()->post('https://passport-app.test/oauth/device/code', [
    'client_id' => 'your-client-id',
    'scope' => 'user:read orders:create', // You're packing your six-shooter and ordering supplies!
]);

return $response->json();
```

Hold onto your Stetsons, because this will return a JSON response with attributes like `device_code`, `user_code`, `verification_uri`, `interval`, and `expires_in`. The `expires_in` attribute tells you how many seconds until the device code expires (think of it as the sheriff's curfew). The `interval` attribute is your timer for checking back at the `/oauth/token` saloon to avoid rate limit errors – much like waiting in line for beans and coffee.

> [!NOTE]
> Don't worry about fencing off that `/oauth/device/code` corral – Passport has already taken care of it for you, cowpoke. You can just kick back, enjoy the view, and wait for that juicy device code to rope in.

<a name="user-code"></a>

 Alrighty then! Let's dive into the whimsical world of Laravel OAuth scaffolding, where enchanting devices frolic and your users dance with delight!

First things first, you'll need a magical device code—imagine it as an invitation to a top-secret, fantasy ball. Once you have that code, summon the user's attention and whisper in their ear: "Head over to the mystical `verification_uri` on another device, dear friend!"

Now, if they're wondering where this hidden corner of the internet is, don't fret! You've already waved your wand (or in Laravel terms, crafted a beautiful link) that leads them there. But wait! There's more magic! They must enter the `user_code` into the enchanted portal to approve this authorization request. Think of it as sharing a secret password with the realm they're about to join.

So, in essence: grab your device code, beckon your user, and send them on a quest to the `verification_uri`. Once there, they'll cast the spell of entering their `user_code`, unlocking access to the enchanted realm you've prepared for them. Now isn't that as exciting as a dragon chase through the forest? 🔥🐲

 Ahoy there! Buckle up, dear developer friends, because we're about to embark on a thrilling journey into the heart of Laravel's OAuth Polling Token Request!

Picture this: you've got your trusty pirate ship (consuming device), and you're sailing in search of the elusive treasure chest (user's response) that holds the keys to your kingdom (access token). However, the user is on a far-off island (separate device), so we'll need to send our trusty parrot (poll) to check if the treasure has been found.

First, let's set the sailing interval (`$interval`) to 5, but remember, this pirate life ain't for the impatient! We'll keep sending the parrot to your application's `/oauth/token` route until we get a response.

```php
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Sleep;

$parrot = new Parrot('Poll'); // Because who doesn't love parrots?
$interval = 5;

do {
    Sleep::for($interval)->seconds();

    $response = Http::asForm()->post('https://passport-app.test/oauth/token', [
        'grant_type' => 'urn:ietf:params:oauth:grant-type:device_code',
        'client_id' => 'your-client-id',
        'client_secret' => 'your-client-secret', // Keep your secrets safe, matey!
        'device_code' => 'the-device-code',
    ]);

    if ($response->json('error') === 'slow_down') {
        $parrot->setMessage("Slow down, mate! Increase the sailing interval by 5.");
        $interval += 5;
    }
} while (in_array($response->json('error'), ['authorization_pending', 'slow_down']));

return $response->json();
```

If the user has granted us access, we'll return a JSON response with `access_token`, `refresh_token`, and `expires_in` attributes. The `expires_in` attribute tells us how many seconds until our precious access token walks the plank (expires).

So there you have it, matey! Now you're ready to set sail on this OAuth adventure with a smile on your face and a song in your heart. Happy coding, pirates!

 Ahoy there, Captain! Dive not into the murky waters of password insecurity; that's a treacherous route to embark upon. Instead, heed the beacon of OAuth2 Server and set sail for greener pastures with a grant type they heartily endorse!

The Password Grant, akin to a secret handshake among trusted parties (think: pirate crews), empowers your first-party clients – like mobile marauders – to seize access tokens using an email or username and password. This swashbuckling feature lets you issue these tokens securely without making your users walk the plank of the OAuth2 authorization code redirect flow.

To activate this dashing feature, call upon the `enablePasswordGrant` method in the `boot` event of your vessel's trusty `App\Providers\AppServiceProvider` class:

```php
/**
 * Prepare the ship for battle!
 */
public function boot(): void
{
    Passport::enablePasswordGrant(); // Ahoy matey, ye be ready to set sail!
}
```

<a name="creating-a-password-grant-client"></a>
Next up, let's craft a client for our trusty password grant! Stay tuned for more swashbuckling adventures with Laravel Passport! Arrrr matey!

 Alrighty, buckle up, my coding cowboy/cowgirl! Let's get this password party started!

First things first, you gotta befriend the OAuth dancefloor and that means creating a password grant client. Don't worry, it ain't as fancy as it sounds. You just need to call upon your trusty Laravel Artisan by shouting out the `passport:client` command, but this time, with a twirl of a tassel (`--password`)!

```shell
php artisan passport:client --password
```

Now, what's an OAuth soiree without some fancy footwork? Let's learn how to dance the password grant token waltz... keep scrollin', partner! 💃🕺️

 ### Token Tango with Passport: A Whirlwind Romance! 💃✨

Alright, buckle up, partner! Once you've turned on the dance floor (grant) and donned your dancing boots (password grant client), it's time to ask for a spin around the dancefloor (request an access token). You can initiate this by sending a sweet serenade (`POST` request) to our song (`/oauth/token` route).

Now, hold up! This dance floor is already registered with Passport, so no need to write a personal note for her yet. 💌

If everything goes smoothly, you'll end up in each other's arms (receiving an `access_token` and `refresh_token` in the JSON response). Just like any good dance, there might be some jive-talk involved:

```php
use Illuminate\Support\Facades\Http;

$dance = Http::asForm()->post('https://passport-app.test/oauth/token', [
    'grant_type' => 'password', // Yes, we're doing the Password Waltz tonight
    'client_id' => 'your-client-id',
    'client_secret' => 'your-client-secret', // Only if you're a secretive dancer... 🤫
    'username' => 'taylor@laravel.com',
    'password' => 'my-password',
    'scope' => 'user:read orders:create' // Let's spice things up a bit, shall we?
]);

return $dance->json();
```

> [!ATTENTION]
> Access tokens are long-lived by default, but if you fancy setting the maximum access token lifetime, just [take a peek at our secret dance moves](#configuration)! 🕺️

<a name="requesting-all-scopes"></a>

 ### Unleashing the Power of All Scopey Shenanigans! 🚀

In the realm of Laravel's Passport, when you're swinging from the password chandelier or strutting your stuff with client credentials, you might feel like a superhero who wants to save the day by wielding the power of all available scopes. Fear not! For we have just the trick: summon the mystical `*` scope!

Once you've invoked this cosmic force, the `can` method on your token will turn into an eternal "Yes-man", forever nodding in agreement. But remember, this all-powerful scope can only be bestowed upon tokens that have been summoned via the enchanting incantations of `password` or `client_credentials` grants:

```php
Use the Force, young Jedi! (I mean...)

use Illuminate\Support\Facades\Http;

Let's grab a magic potion (API response)!
$response = Http::asForm()->post('https://passport-app.test/oauth/token', [
    'grant_type' => 'password', // Magic words to summon the token
    'client_id' => 'your-client-id',
    'client_secret' => 'your-client-secret', // Secret incantation for confidential clients only...
    'username' => 'taylor@laravel.com',
    'password' => 'my-password',
    'scope' => '*', // The mystical * scope for unlimited powers!
]);
```

Now, go forth and conquer the OAuth realm with your newfound, all-encompassing scopey power! 🏆🌟✨

 ### Unleashing the Power of Multiple User Providers (AKA The Avengers of Authentication)

If your application is an Avengers-level team of user providers, you're in luck! You can now choose which superhero (or provider) takes charge when it comes to password-based authentication.

To do this, summon the mystical artisan known as `passport:client --password` during your rituals at the command line. This ancient ceremony will conjure a client, but don't forget to add the `--provider` option, specifying the name of the provider you want to lead the charge. This name should match a valid provider defined in your application's `config/auth.php` configuration file.

Now that your chosen provider has been crowned as the password-protector supreme, it's time to fortify your routes with some middleware superheroes. With these mighty allies by your side, you can ensure that only users from your selected provider will be granted access.

<a name="customizing-the-username-field"></a>
### The Art of Custom Username Fields (AKA Where's Waldo?)

Sometimes, usernames aren't where you'd expect them to be – hidden like Waldo in a sea of fields. If your application stores usernames in a field other than the default `username`, don't worry! Laravel has your back with customizable username fields.

To customize your username field, first, unleash the power of the `AuthServiceProvider` by overriding its `boot()` method. In this magical realm, cast a spell on the `$hasCustomAuthIdentifiers`, `$username`, and `$fillable` properties. Set them to true, the name of your custom username field, and an array containing the name of your custom username field, respectively.

Now, when users attempt to log in with their custom username, Laravel will know exactly where to look!

 ### Unleashing the Power of Personalized Login! 🦸‍♂️💼

Ah, dear user, if you're here to customize your username field, we salute your adventurous spirit! 🎉🚀

By default, our beloved Passport, when it dances the authentication tango using the password grant, grabs the `email` attribute of your fabulous authenticatable model as its disco partner - a.k.a the "username". But fear not! We've got you covered if you fancy a change in partners. 🕺💃

All you need to do is whip up a `findForPassport` method, and let it loose on your model. Here's a tantalizing recipe:

```php
<?php

// Inside your magical App\Models folder... 🎩✨

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticator; // We're the cool kids now!
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\Bridge\Client;
use Laravel\Passport\Contracts\OAuthenticatable;
use Laravel\Passport\HasApiTokens;

// ... and don your cape, because we're about to soar! 🦸‍♂️
class User extends Authenticator implements OAuthenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * Find the user instance for the given username.
     */
    public function findForPassport(string $username, Client $client): self // Feel free to dance, partner! 💃🎉
    {
        return $this->where('username', $username)->first();
    }
}
```

And just like that, your user model will swirl and twirl to the beat of your customized username rhythm. 🕺🌈 Go forth and conquer! 💪🎉

 Alrighty, here's a fun take on customizing the password validation in Laravel's Passport!

### Custom Password Verification: The Secret Sauce to Your App's Security! 🔑🎉

When it comes to dancing the tango of authentication using the password grant, Passport gets all shimmied up and uses your model's `password` attribute like a pro to verify the incoming password. But what if your model doesn't have a `password` attribute or you fancy customizing its validation logic? No worries! All it takes is defining a `validateForPassportPasswordGrant` method on your model, and voila! 🎩✨

```php
<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\Contracts\OAuthenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements OAuthenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * Verify the user's password for the Passport password grant. (Because we can!)
     */
    public function validateMyPassword(string $password): bool
    {
        // This is where the magic happens! 🎩✨
        return Hash::check($password, $this->password);
    }
}
```

Now you're ready to boogie down with custom password validation, while keeping your app secure and your users happy! Remember: when it comes to security, we don't cut corners — we dance them! 🕺️💃️

 ## The Daring Dash for Tokens: Implicit Grant! 🎉🏃‍♂️

Warning, warning! Steer clear of those implicit grant tokens, mateys! They're like last season's fashion trends - outdated and best left behind. Instead, opt for the [grant types that OAuth2 Server has been raving about](https://oauth2.thephpleague.com/authorization-server/which-grant/).

The implicit grant is like its more cautious sibling, the authorization code grant, but without all that pesky exchanging of codes business. This grant is perfect for JavaScript or mobile apps where keeping client credentials under lock and key is about as easy as teaching a cat to play the violin. To enable this daring dash, drop by the `boot` method in your application's `App\Providers\AppServiceProvider` class:

```php
/**
 * Party like it's 2019!
 */
public function boot(): void
{
    Passport::enableImplicitGrant();
}
```

But before we get to the action, remember to register your application for this wild ride. That can be done using the `passport:client` Artisan command and the `--implicit` option:

```shell
php artisan passport:client --implicit
```

Now that the invitation has been sent, developers can join the party by requesting an access token from your application. They'll make a redirect request to your app's `/oauth/authorize` route, which should look something like this:

```php
use Illuminate\Http\Request;

Route::get('/redirect', function (Request $request) {
    $request->session()->put('state', $state = Str::random(40));

    $query = http_build_query([
        'client_id' => 'your-client-id',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'response_type' => 'token',
        'scope' => 'user:read orders:create',
        'state' => $state,
        // 'prompt' => '', // "none", "consent", or "login"
    ]);

    return redirect('https://passport-app.test/oauth/authorize?'.$query);
});
```

> [!INFO]
> A friendly reminder: the `/oauth/authorize` route is already on Passport's guest list. You don't need to manually roll out the red carpet for it.

And that, dear friends, is how you pull off an Implicit Grant! Just remember to keep your client credentials as safe as Fort Knox, and always choose your grant types wisely. Happy token hunting! 🎭🕵️‍♂️

 Alrighty then! Let's dive into the thrilling world of machine-to-machine authentication, shall we? Imagine your app as a suave secret agent, performing daring API maintenance tasks under cover of darkness. This is where the Client Credentials Grant comes in, acting as our agent's stealthy Q-branch gadget.

But before our agent can start issuing those spy tokens, it needs to be properly outfitted with a Client Credentials Grant client. Don't worry, this isn't Mission: Impossible – we just use the `--client` option of the trusty `passport:client` Artisan command:

```shell
php artisan passport:client --client
```

Next up, our agent needs clearance to access sensitive data. We assign the `Laravel\Passport\Http\Middleware\EnsureClientIsResourceOwner` middleware to a route, ensuring only authorized agents can access the precious goods:

```php
use Laravel\Passport\Http\Middleware\EnsureClientIsResourceOwner;

Route::get('/orders', function (Request $request) {
    // Access granted! Agent has valid token and is the resource owner...
})->middleware(EnsureClientIsResourceOwner::class);
```

Now, if you want to keep those orders under lock and key, you can restrict access to specific scopes by providing a list of the required scopes to the `using` method:

```php
Route::get('/orders', function (Request $request) {
    // Access granted! Agent has valid token, is the resource owner, and has both "servers:read" and "servers:create" scopes...
})->middleware(EnsureClientIsResourceOwner::using('servers:read', 'servers:create'));
```

And voila! Your app's agent is now ready to navigate the treacherous waters of APIs, armed with a stealthy gadget and top-secret clearance. Just remember, with great power comes great responsibility – use those tokens wisely! 🚀🔫🎉

 Ahoy there, code pirates! Sail the seas of Laravel with us as we delve into the mystical art of token retrieval. Buckle up and prepare to be dazzled by our swashbucklingly humorous approach to this essential skill.

First off, let's set sail for the `oauth/token` shore, a land you'll be visiting frequently. Remember, it's not just any ordinary port, it's the treasure trove of tokens!

```php
use Illuminate\Support\Facades\Http; // In Laravel 6.x, use Illuminate\Foundation\Http\Facades\Http instead

// Here's where the pirate magic happens
$response = Http::asForm()->post('https://passport-app.test/oauth/token', [
    'grant_type' => 'client_credentials', // This is our secret handshake with the token server
    'client_id' => 'your-client-id', // Replace this with your very own pirate king ID
    'client_secret' => 'your-client-secret', // And here, we keep our swords sharpened and secrets close to the chest
    'scope' => 'servers:read servers:create', // We're not just here for a casual chat, we want full access to those servers!
]);

// Treasure awaits! Hoist the sails and grab your loot (access_token)
return $response->json()['access_token'];
```

And there you have it – your very own treasure map to a bounty of access tokens. Now, go forth and conquer those servers with the power of Laravel at your fingertips!

 Ahoy there, brave developers! Ever found yourself in a pickle, trying to navigate the treacherous waters of user authentication without a trusty compass? Fear not, for we've got just the life jacket for you - Personal Access Tokens!

Imagine your users being pirates, eager to plunder your API treasure chest but too lazy to follow the traditional map-and-compass route. Now, who wouldn't want to provide them a shiny parchment with a secret key, right? That's exactly what we're offering here!

Letting your users issue their own access tokens through your application interface can be as useful as a telescope on the Black Pearl, helping them explore your API like never before. Or perhaps it's just a simpler approach to pirating, who knows?

> [Yarr-NOTE]
> If your ship is heavily reliant on Passport for issuing personal access tokens, matey, consider hoisting the Jolly Roger of Laravel Sanctum - our lightweight first-party library for navigating API access token issues. It's like a compass that never points north, but always to the treasure!

Now, let's set sail on creating a Personal Access Client!

<a name="creating-a-personal-access-client"></a>
Anchors Aweigh! To create a personal access client, you'll need to:

1. Set up a new OAuth personal access client in your application's database using the `make:auth` command.
2. Update your `forge` migration file to include the necessary columns for your new personal access client.
3. Register the client and its corresponding provider in the `app/Providers/AuthServiceProvider`.
4. Modify your `routes/api.php` file to accept requests for generating personal access tokens.
5. Create an API endpoint that handles token creation and revocation.
6. Profit (or should we say, "Arrr-profit")! Now your users can swab their decks and issue themselves those precious access tokens. Yarrr!

 Alrighty then! Let's get our digital fingers dancing on the keys, shall we? First things first – you're about to join the illustrious ranks of Laravel's token-wielding titans. But before you can start issuing personal access tokens like a boss, you gotta create a personal access client.

Want to know how? Well, buckle up, buttercup! You can summon this magical entity by uttering the mystical incantation: `php artisan passport:client --personal`. If you've already conjured up the `passport:install` command (you sorcerer, you), then this spell isn't necessary.

```shell
php artisan passport:client --personal
```

And now, let's delve into the arcane arts of customizing the user provider for good ol' PAT (Personal Access Token). Stay tuned for more enchantments! 🤓✨🚀

 ### Unleashing Your Inner Superhero: Customizing User Providers! 🚀

Ah, the glamorous world of Laravel authentication! Let's dive right in and discuss customizing your User Provider, a fancy term for picking which superpower you want for your app's login system.

If your app is a Justice League of multiple [authentication user providers](/docs/{{version}}/authentication#introduction), then it's time to decide who gets to wield Thor's hammer! To do this, simply sprinkle a little magic when creating the client via the `artisan passport:client --personal` command by adding the `--provider` option. Think of it as choosing your preferred superhero origin story!

The provider name you provide should match a valid superpower defined in your application's `config/auth.php` configuration file, AKA the blueprints for your superheroes. You can then [use middleware to protect your route](#multiple-authentication-guards) and ensure that only users from the provider associated with that particular superhero are allowed access.

Just remember: In the world of Laravel authentication, with great power comes great responsibility! 🦸‍♂️🦸‍♀️

<a name="managing-personal-access-tokens"></a>
### Managing Personal Access Tokens: The Secret Identity of Your App 🕵️‍♂️

Now that you've customized your superhero lineup, let's talk about managing their secret identities aka [Personal Access Tokens](#managing-personal-access-tokens). As a responsible superhero, it's crucial to protect these tokens so they don't fall into the wrong hands.

With Laravel, you can easily create and manage these tokens through various methods, like generating a new token for a user or revoking an existing one. So keep your app secure and prevent any villains from gaining unauthorized access! 🛡️🌍

 ### Token Tango: A Jazzy Guide to Personal Access Tokens! 🎼

Ah, the rhythm of creating personal access tokens in Laravel - it's like a dance! First things first, you gotta have a personal access client. Once that's sorted, let's get our boogie on!

```php
use App\Models\User; // Let's call him John Travolta 🕺
use Illuminate\Support\Facades\Date;
use Laravel\Passport\Token;

John Travolta = User::find($userId);

// Stepping out without scopes...
$token = John Travolta->createToken('My Token')->accessToken; // Just a plain jane token! 👠

// Let's add some pizzazz with scopes...
$token = John Travolta->createToken('My Token', ['user:read', 'orders:create'])->accessToken; // Now we're dancing the 'Read User & Create Order Twist'! 🕺💃

// Feeling bold? Let's go all out with all scopes...
$token = John Travolta->createToken('My Token', ['*'])->accessToken; // That's the 'All Scopes Boogie Woogie'! 🕺💃

// Time to check out the tokens our John has in his wallet...
$tokens = John Travolta->tokens()
    ->with('client')
    ->where('revoked', false) // No revoked tickets please! 🚫
    ->where('expires_at', '>', Date::now()) // Only valid tickets, thanks! 🎟️
    ->get()
    ->filter(fn (Token $token) => $token->client->hasGrantType('personal_access')); // And only personal access tokens, m'kay? 🤝
```

Now that's what I call a token tango! Just remember to keep your moves smooth and your scopes in check. Happy dancing! 🎉🕺💃

 ### Shielding Your Routes Like a Cyber Ninja! 🥋

#### Defend Your App the Nerdy Way 🚀

**By the light of the monitor screen, we gather 'round to discuss the art of securing our Laravel app routes. Fear not, dear developer, for this lesson shall be as entertaining as it is educational! 🤓**

<a name="via-middleware"></a>

##### Via Middleware 🧩

You know those weird-named files in the `app/Http/Middleware` folder? They're our cyber ninja armor, my friend! By binding these middleware to specific routes or entire application paths, we can ensure that all requests pass through our magical protection layers. 💫

###### Authenticate a User (auth) 🔐

Imagine you're guarding the entrance to a high-security vault: only those with valid credentials can enter! Similarly, when applying the `auth` middleware to a route, Laravel will ensure that the user is logged in before they're allowed access. It's a perfect way to protect sensitive data or areas of your app. 🔒

###### Authenticate and Authorize a User (can) 🛡️

Now, let's imagine you're not just the gatekeeper, but also the boss of the secret base! With the `can` middleware, Laravel allows you to check if a user is authorized to access specific routes based on their role or permissions. It's like having a super-secret clearance level for your app's most sensitive sections. 🕵️‍♀️

###### Protecting Multiple Routes (RouteServiceProvider) 🌐

If you want to protect multiple routes at once, no problem! Laravel provides the RouteServiceProvider, which lets you define middleware for entire controllers or route groups. It's like setting up a perimeter fence around an entire base instead of guarding each individual door. 🚪

###### Custom Middleware 🦸‍♂️

And if none of the built-in middleware does the trick, Laravel lets you create your very own custom middleware! Write your own rules, implement your unique protection strategies—the sky's the limit. It's like being a superhero with the power to protect your app however you want. 🚀

So there you have it! Protecting routes in Laravel has never been so much fun. Go forth and guard your app like a cyber ninja, ensuring its security—and yours—at all times! 💻✌️

 ### Via Magic Carpet Ride (a.k.a Middleware)

Passport comes equipped with a mystical [ authentication guard ](/docs/{{version}}/wizardry#adding-custom-guards), that will verify those mysterious tokens on incoming requests from distant lands. Once you've conjured up the `api` guard to be powered by the `passport` incantation, you only need to sprinkle the `auth:api` middleware (a potion of protection) on any routes you want to restrict access with a valid token:

```php
Route::get('/wizard', function () {
    // Only those under the spell of API authentication may pass this route...
})->middleware('auth:api');

> [!CAUTION]
> If you're utilizing the [client credentials grant ](#client-credentials-grant), it is advised to employ the enchanting [ `Laravel\Passport\Http\Middleware\EnsureClientIsResourceOwner` middleware](#client-credentials-grant) instead of the `auth:api` middleware to safeguard your routes.

<a name="multiple-authentication-guards"></a>
Now, if you've got multiple authentication guards (like a magical battle), you can prioritize them with ease! Just sort 'em like so:

```php
$app->routeMiddleware([
    'web' => \Illuminate\Auth\Middleware\Authenticate::class,
    'api' => \Illuminate\Auth\Middleware\Authenticate::class, // We want the API guard to be checked first!
]);
```
Remember, in a land of wizards and warriors, it's always best to let the API guard ride shotgun!

 Alright, let's dive into the wacky world of Laravel authentication! 🥳

If your app has a cast of characters that require their own unique Eloquent models to log in (like a superhero squad or a reality TV show), you'll probably need to set up a guard configuration for each user type. This is like having separate bouncers at different clubs to ensure only the right people get in. 🛑🎉

Here's an example of how you can do this in your `config/auth.php` file:

```php
'guards' => [
    'superhero_nightclub' => [
        'driver' => 'drink-till-you-slur',
        'provider' => 'caped_crusaders',
    ],

    'reality_tv_show' => [
        'driver' => 'audience_participation',
        'provider' => 'kardashians',
    ],
],
```

With this configuration in place, the following route will use the `superhero_nightclub` guard (which requires membership from the `caped_crusaders` user provider) to check who's trying to swing by:

```php
Route::get('/batcave', function () {
    // ...
})->middleware('auth:superhero_nightclub');
```

> [!NOTE]
> For more information on using multiple user providers with Passport, check out the [personal access tokens documentation](#how-to-get-into-the-batcave-with-a-secret-token) and [password grant documentation](#i-lost-my-key-card-what-now?).

<a name="passing-the-access-token"></a>
Remember, you can even pass the access token around like a virtual VIP wristband! 💃🏼🎉 Just make sure your routes are equipped to handle it:

```php
Route::get('/batcave', function (Request $request) {
    // Check for access token here
    if ($request->user()->hasAccessToken()) {
        // ...
    } else {
        // Batman says: "I'm sorry, this conversation is now closed." 🦇
    }
})->middleware('auth:superhero_nightclub');
```

Happy coding! 🚀🚀🚀

 ### The Secret Dance of Access Tokens!

Ah, the thrilling world of Passport-protected routes! Now, here's where the magic happens, or should I say, the token dance!

Your API pals are required to strut their stuff and bring their access tokens to the dance floor, which is none other than the `Authorization` header in their request. Picture it as if they're saying, "Excuse me, dance floor, we'd like to enter, and here's our token - a Bearer token."

For those who can't help but be drawn to the charm of Laravel's `Http` Facade, I present you with this delightful demonstration:

```php
use Illuminate\Support\Facades\Http;

// First, we flirt with our partner (Http Facade) and ask them to remember our name (accessToken)
$accessToken = "Your Secret Sauce Here"; // Replace me with your actual token, matey!

// Then, we attend the dance (make a request) by inviting them (Http Facade) to join us
// We remind them of our secret code words - 'Accept' and 'Authorization', and provide our token
$response = Http::withHeaders([
    'Accept' => 'application/json', // I prefer my data in JSON format, if it's not too much trouble!
    'Authorization' => "Bearer $accessToken", // And here is the secret key to unlocking the dance floor!
])->get('https://passport-app.test/api/user');

// After a night of dancing, we return home with memories (response) and our secrets (token) intact
return $response->json();
```

Now that's what I call a good dance!

 Ahoy there, Captain API User! Ever found yourself in a pickle trying to manage permissions like a medieval feast, where everyone wants a piece of the action? Worry no more, matey, for we've got just the thing - Token Scopes!

Imagine you're running an e-commerce pirate ship (it's all about the metaphors, see?) and not every swabbie on deck needs to be handling the cannonballs. Some can manage the treasure chest, others can keep an eye on the map, but nobody should be messing with the compass or the grog barrel without permission!

Enter Token Scopes, your new best mate for limiting actions third-party apps can perform on behalf of your noble shipmates (users). These scopes are like a secret treasure map that only allows specific permissions when granting authorization to access an account. So, instead of doling out full pirate privileges, you can set sail with more manageable roles, like "Order Status Checker" or even the elusive "Grog Monitor."

Now, let's dive deeper into those scopes! <a name="defining-scopes">Yo ho ho, here be a guide to defining them:</a>

1. **Defining Scopes:** It's as easy as walking the plank (just kidding, it's easier). You can define custom permissions in the Model class using the `scope()` method. For example, in your Orders model:

```php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    // ...

    public function scopeShipmentStatus($query) {
        return $query->where('status', 'shipped');
    }
}
```

2. **Using Scopes in Authorization:** Once you've defined your scopes, you can use them during the authorization process to grant or deny access based on these custom permissions. Here's how you might use it with Gate:

```php
namespace App\Policies;

use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\Gate as Gate;
use Illuminate\Database\Eloquent\Model;

class OrderPolicy {
    use HandlesAuthorization;

    protected $model = Order::class;

    public function viewAny(User $user) {
        return Gate::allows('view-any', $this->model);
    }

    // ...other methods...

    public function shipmentStatus(User $user, Order $order) {
        return Gate::allows('shipment-status', $order);
    }
}
```

3. **Registering Scopes for Policies:** To make your scopes available to policies, register them in the `registerPolicies()` method of the `AuthServiceProvider`.

```php
namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Model;

class AuthServiceProvider extends ServiceProvider {
    // ...other methods...

    protected function boot() {
        $this->registerPolicies();

        Model::registed(Order::class, function ($model) {
            $model->bootQueryScopes();
        });
    }
}
```

 Ah, the joy of crafting scopes in Laravel's API world! It's akin to composing symphonies for your data, but with less violins and more tokens. You'll find yourself orchestrating the access rights of your users through the venerable `AppServiceProvider` class.

Now, picture this: You're the gatekeeper at a very exclusive club (but with better coding practices). Instead of checking coats, you're managing API keys and their access permissions. To do that, you'll be using Laravel Passport's `tokensCan` method in the `boot` function of your classy `AppServiceProvider`.

```php
/**
 * We're not just serving drinks here, we're serving up scopes!
 */
public function boot(): void
{
    // Our bouncer duties begin
    Passport::tokensCan([
        'user:read' => 'Retrieve the user info (Because who doesn't love a good gossip?)',
        'orders:create' => 'Place orders (For those of you who are always hungry)',
        'orders:read:status' => 'Check order status (So you know whether it's time to dance or wait in line)'
    ]);
}
```

And voila! You've transformed yourself into a sophisticated API bouncer, granting access to your club based on these scopes. Just remember, it's all about balance: Too many scopes and you risk becoming the world's most chaotic disco; too few and you might as well be hosting a library book reading event. Happy scoping! 🤘💃

 ### Default Scopes: The Secret Ingredient to Your Passport Server! 🍹

Ever found yourself in a pickle when your clients forget to specify their secret sauce (I mean scopes)? Worry not, my friend! With Laravel Passport's magical `defaultScopes` method, you can sprinkle the right mix of spices into your token without leaving your client high and dry.

To get started, head on over to your application's `AppServiceProvider` class in the kitchen (aka `App\Providers`) and give it a little stir by adding these scopes:

```php
use Laravel\Passport\Passport;

// Here's where the magic happens! ✨
Passport::tokensCan([
    'user:read' => 'Grab some user info (don't forget to season it with a smile)',
    'orders:create' => 'Place orders, but don't go wild now',
    'orders:read:status' => 'Check if that order's ready for pickup',
]);

// And the cherry on top! 🍒
Passport::defaultScopes([
    'user:read',
    'orders:create',
]);
```

And voila! Your Passport server is now seasoned to perfection, ready to serve up those delightful scopes whenever a client forgets their order. Just remember, with great power comes great responsibility – so keep an eye on those orders and don't let them go wild! 🥴

 Alright, buckle up, programmers! Today we're diving into the ticklish topic of assigning scopes to tokens in Laravel Land. 🎪🌟

First things first: when you're asking for authorization codes (you know, like when you ask your cat for permission to use its favorite chair), it's important to remember that scopes can be your bestie! They help you manage access levels and keep your application secure. 🔒🦹‍♂️

So, here's the fun part: to assign scopes to tokens, you'll need to create an `Authenticate` middleware and override its `handle` method. This is where all the magic happens! ✨🎩

```php
// app/Http/Middleware/Authenticate.php

public function handle($request, Closure $next)
{
    // Check if the user has the required scopes for the token
    $scopes = array_intersect($request->user()->getPermissions(), (array) $request->input('scope'));

    if (!count($scopes)) {
        // If the user doesn't have the required scopes, throw an exception
        abort(403);
    }

    return $next($request);
}
```

That's it! Now, every time a token is requested with some scopes, Laravel will ensure that the user associated with that token has those permissions. If not, it will throw a party for your error handling middleware (which, let's face it, is always ready to dance). 💃🕺

So next time you're feeling like a cat on a hot tin roof when it comes to securing your application, remember the power of scopes! They'll help you navigate through those tricky access control situations with ease. 🐱🔥🚪

 Ahoy there, brave coder! Fancy yourself a dance with Laravel's enchanting Authorization Code Grant? Well then, let me be your dance partner and guide you through the waltz! 💃🕺

First off, when you're hankering for an access token, remember to don your best manners. That's right, ask politely by specifying your desired scopes as the `scope` query string parameter. The ballroom etiquette calls for it to be a list of scopes separated by space-time continuums (or simply spaces in simpler terms!).

Here's an example of how to make that perfect request:

```php
Route::get('/redirect', function () {
    $query = http_build_query([
        'client_id' => 'your-client-id',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'response_type' => 'code', // <-- You've been served, matey!
        'scope' => 'user:read orders:create', // <-- Here's where the magic happens
    ]);

    return redirect('https://passport-app.test/oauth/authorize?'.$query);
});
```

Now, off you go to the dance floor and show them what you've got! Just remember to maintain a proper `scope` while you twirl and spin around Laravel's ballroom! 🎉🎩🥳

 Alrighty, buckle up, code cowboys and codettes! Let's dive into the wild west of Laravel tokenery. 🤠🏜️

If you're ready to rope in some personal access tokens with the trusty `App\Models\User` model's `createToken` method, remember to lasso an array of your preferred scopes as the second rope around the corral:

```php
$token = $user->createToken('My Token', ['orders:create'])->accessToken;
```

Yeehaw! Now you're cooking with gas, partner. That little line of code will grant you access to create orders like a gunslinger at high noon. 🎈🎉

Oh, and don't forget to check your scopes before you saddle up:

<a name="checking-scopes"></a>
```php
// Check the available scopes for a token
$user->tokens()->where('name', $tokenName)->first()->abilities;
```

Happy token wrangling, pardners! May your scopes always be within reach and your access tokens never hang by a thread. 🐎🌵🤠

 ### Token Tango: The Scope Shakedown! 🕺️

Passport's got the dance moves down! We've cooked up two swanky middleware that'll ensure your incoming disco request is dancing with a token sporting a fancy scope. 🎨

<a name="check-for-all-scopes"></a>
**Dancing with 'em all!**

If you wanna check if a token can shake, rattle and roll with every single one of its scopes, then this is the routine for you! 🎶 🕺️

To get started, simply inject the `VerifyPersonalToken` or `CreateFreshApiToken` middleware in your route file or controller, like so:

```php
Route::middleware([
    'auth:api',
    \Illuminate\Auth\Middleware\Authorize::class
])->group(function () {
    Route::get('/profile', function (Request $request) {
        return $request->user();
    });
});
```

And don't forget to make sure you've included the PassportServiceProvider in your `app/Providers/AppServiceProvider.php`. It's like a dance partner, and we all need one! 👨‍❤️‍💋‍👨

Remember, it takes two to tango - so make sure you've granted the appropriate scopes to your token before hitting the dance floor! 🎉

 Ahoy there, Captain! Navigating the seas of Laravel just got a tad more exciting with our trusty companion - `CheckToken` middleware. This nautical navigator is here to ensure your access tokens are as seaworthy as a pirate's parrot.

To verify that your incoming request's access token is not just any old barnacle-encrusted thing, but rather a polished treasure chest brimming with the correct scopes, you can assign it to a route like so:

```php
Arrr matey! Use Laravel\Passport\Http\Middleware\CheckToken and hoist the sails:

Route::get('/orders', function () {
    // Arrgh, the access token has both "orders:read" and "orders:create" scopes...
})->middleware(['auth:api', CheckToken::using('orders:read', 'orders:create')]);
```

In this example, the `CheckToken` middleware is keeping a sharp eye on the `/orders` route, ensuring that only access tokens with both "orders:read" and "orders:create" scopes will be allowed to set sail. So, no more shady characters trying to swipe your grog without permission!

 Alrighty, here's a dash of humor sprinkled into that Laravel doc!

#### Catch the Scope Creeps! 🕵️‍♂️🦹‍♀️

Welcome to the undercover world of Laravel Passport where we catch those sneaky scopes with our top-secret middleware: `Laravel\Passport\Http\Middleware\CheckTokenForAnyScope`! 🕵️‍♂️ Assign this bad boy to a route and it'll ensure your incoming request's access token is packing at least one of the listed scopes.

```php
use Laravel\Passport\Http\Middleware\CheckTokenForAnyScope;

// We're about to guard our precious orders like Fort Knox! 🏰💰
Route::get('/orders', function () {
    // Access token better have "orders:read" or "orders:create" scope in its entourage... 🤐🕵️‍♀️
})->middleware(['auth:api', CheckTokenForAnyScope::using('orders:read', 'orders:create')]);
```

<a name="scope-attributes"></a>
Now, don't go around playing spy games without knowing your scopes! 🕵️‍♂️ Check out the [Scope Attributes](#scope-attributes) section for more on those sly little fellows. Stay safe and keep those orders secure! 🛡️💰

 #### Scope Attributes: The Key to a Well-Oiled Passport!

If your Laravel app's controller is more like a rowdy party and you're using middleware attributes to keep the riffraff at bay, then you'll find our passport bouncer, `AuthorizeToken`, an absolute delight!

```php
<?php

namespace App\Http\Controllers;

use Laravel\Passport\Attributes\AuthorizeToken as PassportBouncer;

#[PassportBouncer(['order-menus': 'read'])] // Only those with "read" access to order menus are allowed in.
#[PassportBouncer(['order-menus': 'create'], only: ['delivery-boys'])] // But if you're a delivery boy, you can create all the chaos you want!
class OrderMenuController
{
    #[PassportBouncer(['order-menus': 'read', 'order-menus': 'create'], anyScopeAllowed: true)] // So long as they have access to either "read" or "create", let them in. No fuss, no muss!
    public function index()
    {
        // Partygoer has the right to read or create order menus...
    }

    public function store()
    {
        // Partygoer can create AND read order menus! They're a real VIP!
    }
}
```

By default, our Passport Bouncer demands all the scopes you throw at it. But if you set `anyScopeAllowed: true`, the request is granted when the token flashes at least one of your given scopes. Just like how a neon sign can get away with less clothing than the rest of Vegas! 🌄✨

 Alright, let's get this party started! Once your access token has slipped past security and made its grand entrance into your Laravel mansion (we call it an application), you can still give it the third degree with the `tokenCan` method. This nifty tool is hidden within the closeted, authenticated instance of your `App\Models\User`.

So when a request for orders comes knocking, you can investigate whether this sly token has the 'orders:create' scope by doing a little dance like this:

```php
use Illuminate\Http\Request;

Route::get('/orders', function (Request $request) {
    if ($request->user()->tokenCan('orders:create')) {
        // Now we know it can create orders, let the good times roll!
    } else {
        // Sorry, pal. You don't have what it takes to order today.
    }
});
```

Remember, `tokenCan` is the private investigator you never knew you needed in your Laravel world. Now, off with the gloves and let's get down to business! (Just kidding, keep those hands clean.)

 Alright, let's dive into Laravel's secret vault of access control! 🔑✨

First off, the `scopeIds` method is like a magic genie granting you a wish list of all defined IDs/names. Think of it as a who's-who in your application's permissions world. To summon this wish list, simply cast this spell:

```php
use Laravel\Passport\Passport;

Passport::scopeIds(); 🦄🎩🔮
```

Next up, the `scopes` method is akin to an all-access pass to your app's permission VIP lounge. This will give you an array of all those fabulous `Laravel\Passport\Scope` instances:

```php
Passport::scopes(); 🎉🏆💼
```

Now, the `scopesFor` method is a bit like having your own personal butler who serves you only the scopes you need. Just give it a list of IDs/names, and it'll return an array of those fancy `Laravel\Passport\Scope` instances:

```php
Passport::scopesFor(['user:read', 'orders:create']); 🛍️📝
```

Lastly, the `hasScope` method is like checking if your Cinderella dress has been invited to the royal ball. Use it to determine if a given scope has graced your app with its presence:

```php
Passport::hasScope('orders:create'); 👗💃🏽🕺🏽
```

 ## The Incredible Journey of SPA Authentication 🕺️🎧

Building an API can be like composing a symphony, but with servers and code instead of violins and sheet music. And just as you'd want your own orchestra to dance to the same rhythm as the one you sell tickets for, your JavaScript app should groove to the same beat of your shared API!

In traditional jazz improvisation, manually passing an access token (think: a trumpet solo) to your application could get a little messy. But with Passport, we're pulling out the autotune - it'll handle the token transmission for you, so you can focus on writing better code instead of solos! 🎤

To set up this smooth setup, saunter over to your application's `bootstrap/app.php` file and sprinkle in some Passport magic:

```php
use Laravel\Passport\Http\Middleware\CreateFreshApiToken;

->withMiddleware(function (Middleware $middleware): void {
    $middleware->web(append: [
        CreateFreshApiToken::class,
    ]);
})
```

🚨🎶 Warning! 🎶 Make sure you list `CreateFreshApiToken` as the grand finale in your middleware symphony, like a showstopping finale number at the end of the concert!

This middleware will craft a sweet `laravel_token` cookie to tag along with your responses. It's like giving your JavaScript app a backstage pass to bypass the ticket booth and access your API directly! 🎟️🥳

The JWT token in this cookie has a lifespan as long as your `session.lifetime` configuration, meaning it'll keep grooving to the beat of your API for as long as you set it to! Since browsers are always eager to dance along, they'll automatically send the cookie with every subsequent request, so you can dance away making requests to your API without even asking for that access token:

```js
axios.get('/api/user')
    .then(response => {
        console.log(response.data);
    });
```

Now, if you want to customize the name of this cookie (say, rename it from "laravel_token" to something more memorable like "passportCookie"), hop on over to your `config/app.php` file and edit the `providers` array:

```php
'providers' => [
    ...
    Laravel\Passport\PassportServiceProvider::class => [
        'cookie' => 'your_custom_name', // replace with your desired name
    ],
],
```

 Alright, let's dive into the tantalizing world of Laravel's Cookie Customization Circus! Ever felt your Laravel application was lacking a little pizzazz? Fret not, for we have just the ticket to jazz up that humdrum `laravel_token` cookie!

With our enchanting `Passport::cookie` method at your disposal, you can now rename your beloved cookie to something more befitting of your application's personality. But be warned: this isn't just a name change; it's a transformation that will have your visitors whispering about the magical customizations they've stumbled upon in your website!

The secret to this metamorphosis is hidden within the `boot` method of your application's `AppServiceProvider`. This cryptic chamber is where all the action takes place, and it's time for you, the master puppeteer, to weave your magic:

```php
/**
 * When the lights go down at the beginning of the show...
 */
public function boot(): void
{
    /**
     * ...it's time to conjure up a new cookie name!
     */
    Passport::cookie('custom_name');
}
```

And there you have it! Your Laravel application is now ready for its close-up, with a cookie that'll leave everyone saying, "Who needs Cookie Monster when I've got this?!" Don't forget to wipe those cookie crumbs off your browsers—we wouldn't want anyone else stealing your thunder!

 Alrighty, buckle up, web warriors! Let's dive into the thrilling world of Cross-Site Request Forgery (CSRF) protection - a superhero cape for your Laravel applications.

Imagine you're hanging out with friends, and one of them asks to borrow your wallet for a quick errand. You trust them, but just to make sure they don't go on a wild spending spree, you put a secret password in the wallet. That's what CSRF protection does - it adds a secret password (CSRF token) to your Laravel requests to ensure only your application can make changes.

Now, our friendly neighborhood Laravel has already provided some nifty JavaScript scaffolding, including an Axios instance, which is like having Spiderman's web-shooters for making web requests. This superhero will automatically add the encrypted `XSRF-TOKEN` cookie value to the `X-XSRF-TOKEN` header on same-origin requests, leaving no room for mischief!

However, in a twist of fate (or a mistake), if you find yourself using the `X-CSRF-TOKEN` header instead, you'll need to switch to an unencrypted token by calling `csrf_token()`. But don't worry, it's just like having a backup plan – always ready when you need it!

And that's your friendly guide to CSRF protection in Laravel. Now go forth and protect your applications from evil doers! (Or at least from unauthorized changes.)

 ## Passport's Party Time! 🥳

Get ready to dance the binary waltz, because Passport is throwing an event when it dishes out access and refresh tokens! 🎉 You can [groove to these tunes](/docs/{{version}}/events) and prune or revoke other access tokens in your database like a disco king (or queen)!

<div class="overflow-y-auto">

| Event Name                              | Description               | Dance Move        |
| --------------------------------------- | ------------------------- | -----------------|
| `Laravel\Passport\Events\TokenTwirl`    | Happens when a token's born.  👶 | The Robot         |
| `Laravel\Passport\Events\TokenDiscoDrop` | Occurs when a token retires. 🕺️ | The Running Man   |
| `Laravel\Passport\Events\TokenRe-Twirl`  | Happens when a new refresh token appears! 🌪️ | The Sprinkler     |
</div>

<a name="testing"></a>

Now, who needs a disco ball when you've got Passport events to keep the party going? 🕺️💃️🎶

 Ahoy there, matey! Time to set sail on the seas of Laravel's Passport testing!

First off, we got the `actingAs` method. This magical incantation not only lets you impersonate users but also bestows upon them some swashbuckling scopes! Here's how ya use it:

```php tab=Pest (Pirate speak)
Shiver me timbers, load up ye arrays! First 'errrr's the user, freshly brewed by `User::factory()->create()`. Second be an array of scopes ye want to grant, in this case: `['orders:create']`.

Now fire the method and say "arrr" loud and proud, `Passport::actingAs(arrghh, arrgggh)`!
```



```php tab=PHPUnit (Pirate speak)
Matey, set sail with this code: `Passport::actingAs(User::factory()->create(), ['orders:create'])`.
First matey is our user, second be the scopes ye want, in our case 'orders:create'.
```

Now, if you're testing for clients, don't fret! We got `actingAsClient`, and it works just like `actingAs`, but with clients instead of users. Here's how to use it:

```php tab=Pest (Pirate speak)
Arrr, now we got a client, freshly brewed by `Client::factory()->create()`. Same drill as before, second matey be an array of scopes ye want to grant, in this case: `['servers:read']`.

Now fire the method and say "arrr" loud and proud, `Passport::actingAsClient(arrghh, arrgggh)`!
```



```php tab=PHPUnit (Pirate speak)
Arrr, now we got a client, freshly brewed by `Client::factory()->create()`. Same drill as before, second matey be an array of scopes ye want to grant, in this case 'servers:read'.

Now fire the method and say "arrr" loud and proud, `Passport::actingAsClient(arrghh, arrgggh)`!
```

So there ye have it, matey! Now you can test like a true pirate, with scopes and all! Keep those tests shipshape, and remember: "Ye who tests, wins!"