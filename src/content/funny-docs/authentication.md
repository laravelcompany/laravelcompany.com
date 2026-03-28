 # Unlocking the Kingdom! (aka, Authentication in Laravel)

## Grand Entrance (a.k.a Introduction)
### Welcome to the Ball! (a.k.a Starter Kits)
Want to dive right in? We've got a ball gown for that! Our starter kits will have you authenticated faster than Cinderella at the stroke of midnight.

### Database Dance Cards (a.k.a Database Considerations)
Before we hit the dance floor, let's talk about the data. Knowing your database is like knowing the DJ's playlist – it'll keep the party going smoothly!

### The Kingdom Tour (a.k.a Ecosystem Overview)
From princes to peasants, everyone's invited! Get familiar with our royal ecosystem and join us in this magical land of Laravel.

<a name="authentication-quickstart"></a>
## Fast Pass to the Ball (a.k.a Authentication Quickstart)
### Time to Suit Up (a.k.a Install a Starter Kit)
Don your finest armor, or in this case, run `composer install` with our starter kit. You'll be ready for the dance in no time!

### Spotting Your Partner (a.k.a Retrieving the Authenticated User)
With a twirl of the skirt and a wink, find out who your dance partner is by grabbing the authenticated user with just a few lines of code.

### The Bouncer (a.k.a Protecting Routes)
Keep the riffraff out – our bouncers are standing by to ensure only the right users access your restricted routes.

### Dance-Off Determined by Time (a.k.a Login Throttling)
Don't let anybody hog the dance floor! Our login throttling feature will keep a fair balance of dancers on the floor, ensuring everyone gets their groove on.

<a name="authenticating-users"></a>
## Making Introductions (a.k.a Manually Authenticating Users)
### Remembering Faces (a.k.a Remembering Users)
No need to ask for phone numbers – our kingdom remembers its guests! With cookie-based session support, we'll keep track of your users with ease.

### Mixers and Mingling (a.k.a Other Authentication Methods)
Join the royal court and network with other authentication methods like token-based or API-based authentication for a truly unforgettable ball!

<a name="http-basic-authentication"></a>
## The Royal Seal (a.k.a HTTP Basic Authentication)
### Passwords in Plain Sight (a.k.a Stateless HTTP Basic Authentication)
Keep things simple with HTTP Basic Authentication, where usernames and passwords are sent unencrypted – because sometimes, a secret handshake just isn't enough!

<a name="logging-out"></a>
## Time to Call it a Night (a.k.a Logging Out)
### Kissing the Frog Goodbye (a.k.a Invalidating Sessions on Other Devices)
When the ball ends, don't forget to log out! Our magical kingdom will invalidate sessions on other devices, ensuring no unwanted guests stick around after the dance.

<a name="password-confirmation"></a>
## The Final Test (a.k.a Password Confirmation)
### Setting the Rules (a.k.a Configuration)
Enforce your kingdom's password policy to keep things secure and secretive.

### Making a Scene (a.k.a Routing)
Route your users through our magical gates, making sure they follow the rules and confirm their passwords before entering.

### The Last Dance (a.k.a Protecting Routes)
Only those who have proven their identity should be allowed to dance. Make sure to protect your password confirmation routes to keep things secure.

<a name="adding-custom-guards"></a>
## Keeping the Castle Secure (a.k.a Adding Custom Guards)
### The Kingdom's Gatekeeper (a.k.a Closure Request Guards)
Add your own custom guards to keep uninvited guests from entering our castle. With a simple closure, you can enforce rules based on any condition.

<a name="adding-custom-user-providers"></a>
## Building the Royal Family Tree (a.k.a Adding Custom User Providers)
### The Blueprint of Power (a.k.a The User Provider Contract)
Lay the foundation for your custom user providers, defining their structure and behavior to suit your kingdom's needs.

### The Bloodline of Royalty (a.k.a The Authenticatable Contract)
Trace back your royal bloodline by implementing the Authenticatable contract – a bond that ties together all members of the kingdom's ruling family.

<a name="automatic-password-rehashing"></a>
## Keeping Secrets Safe (a.k.a Automatic Password Rehashing)
### The Royal Seal of Approval (a.k.a Automatic Password Hashing and Salting)
Ensure that all secrets are kept safe with automatic password rehashing, a feature that handles hashing and salting for you – because sometimes, even the royal family needs help keeping things secure!

<a name="social-authentication"></a>
## Social Mingling (a.k.a Social Authentication)
### Making Friends in High Places (a.k.a Using Laravel's Socialite for Social Authentication)
Expand your kingdom's reach by adding social media integration – let guests log in using their favorite platforms and make new friends from all around the land!

<a name="events"></a>
## Announcing the Royal Ball (a.k.a Events)
### The Kingdom's Biggest News (a.k.a Listening to Laravel Events)
Stay informed on everything happening in our kingdom by listening to events – you never know when a royal celebration is about to begin!

 Greetings, web dev adventurers! 🎉✨

In the mystical realm of web apps, there's a magical rite called "logging in" that turns your users from humble spectators into mighty masters. But tread with caution, for this spell can be as complex and treacherous as a dragon's lair! Fear not, for Laravel has conjured up the tools to help you cast this enchantment swiftly, securely, and without breaking a sweat (unless it's due to excitement, of course).

At the heart of our wizardry lies "guards" and "providers." Think of guards as the wise sorcerers who authenticate users for each quest (request). We come equipped with a cunning `session` guard that uses session storage and cookies to ensure your users' identities remain safe and sound.

Providers, on the other hand, are the mighty librarians who fetch users from your ancient scrolls – er, databases. Laravel has bestowed upon you the power to retrieve users using Eloquent or our trusty database query builder. But remember, this is a choose-your-own-adventure game, so feel free to create additional providers to suit your specific quest!

Your magical auth configuration resides in `config/auth.php`. This spellbook contains several well-documented incantations for tweaking the behavior of Laravel's enchantments.

> [!ATTENTION]
> Guards and providers should not be confused with "roles" and "permissions." To learn more about granting magical powers to your users via permissions, please refer to our [authorization](/docs/{{version}}/authorization) documentation.

Now that you've embarked on this journey, it's time to master the art of authentication and turn your web app into a treasure trove where only authenticated users can play! 🏰🔥✨

Happy coding, magic-makers! 🤓🧙‍♀️🧙‍♂️👩‍🚀👨‍🚀

 ### Lightning-Speed Launch Pads 🚀

Ready to blast off with your Laravel journey? Strap in and prepare for lift-off! By installing a [Laravel Application Launch Pad](/docs/{{version}}/launch-pads) into your brand-new Laravel spacecraft, you'll have an authenticated universe explorer faster than you can say "hyperdrive engaged!" 🌠

Fear not if you decide against using a launch pad in your ultimate intergalactic voyage. Installing one serves as an excellent chance to dive headfirst into understanding how Laravel's authentication systems work within a real-world project. Since our launch pads come equipped with controllers, routes, and views for your convenience, you can poke around the code to learn the ins and outs of Laravel's stellar authentication features!

<a name="introduction-database-considerations"></a>
🧐 "But wait," I hear you say, "what about my database?" Worry not, fellow starfarer, for our launch pads come with a migration system that ensures your database is ready for takeoff. After running the migration command and blasting off to your local server at `/register`, or any other URL you've assigned, your launch pad will handle scaffolding the entire authentication system! 🚀🌟

 ### Oh, the Joys of Database Shenanigans with Laravel!

First off, let's give a warm welcome to the default `App\Models\User` - your new best friend in the `app/Models` directory. This chap is as slick as they come, all thanks to the magical Eloquent model (check out our docs on that here!). And if you're not into the whole Eloquent scene? Well, no worries, there's always the `database` authentication provider - think of it like Laravel's party trick with its super-charged query builder.

If your app has taken a fancy to MongoDB, then by all means, check out their official docs for user authentication (we're just here to code, not break dance).

Now let's talk about the database schema for `App\Models\User`. Keep in mind that when designing the password column, you might want to aim for a lengthier conversation with your attackers - 60 characters should do the trick. But don't worry if you find yourself falling short, as the included `users` table migration in fresh Laravel apps has already exceeded this length.

Remember that token for those who just can't seem to let go? We're talking about the `remember_token`. It's a string of 100 characters, nullable, and found in your `users` (or equivalent) table. If you've forgotten all about it, don't worry - we've already placed it in the default `users` table migration that comes with new Laravel apps.

Now go forth and build databases, dear developers! Just remember to keep a sense of humor while doing so. After all, who said coding had to be boring?

 Welcome, brave developer! Buckle up for a whirlwind tour through Laravel's amusing authentication ecosystem. Before we dive in, let's get our bearings straight and discuss each package's intended purpose, like an old-timey map guide explaining the local taverns.

First off, imagine you're at a medieval castle gate, and the knight wants to know who you are before letting you in. In this digital age, that's equivalent to a user filling out a login form with their credentials (username and password). If they pass the gate guard (authentication check), the castle steward (application) will store information about the authenticated knight (user) in his chamber's secret drawer – the user's session. A magic amulet (session ID cookie) is then handed to the knight's horse (browser) so that it can present this token to the castle guards (subsequent requests) and be recognized as the correct knight. Once the amulet arrives, the steward retrieves the knight's information based on the session ID and considers him as "authenticated."

Now, imagine a remote service that wants to gain access to the castle's treasury (API). In the middle ages, they would have needed a written letter of introduction. Nowadays, they send an API secret key (token) along with each request. The steward may then cross-reference this token against his secret ledger of valid keys and "authenticate" the request as being made by the service associated with that token.

<a name="laravels-built-in-browser-authentication-services"></a>
Now, let's delve into Laravel's built-in browser authentication services! You'll find them like a treasure trove in the castle's armory (Laravel's package library). These services include:

1. **Sanctum**: The trusty squire that takes care of handling API authentication, making it easier for remote services to gain access to your kingdom (API) without having to write complex code.

2. **Passport**: The knight in shining armor – the most powerful of all services. It handles both session and token-based authentication for both web applications and APIs, leaving no stone unturned when it comes to securing your realm.

3. **Breeze**: This is the castle's friendly pageboy who helps you set up a new Laravel project with built-in, easy-to-use authentication and UI components. It saves you from all that backbreaking labor of building everything from scratch!

 Ahoy there, brave coder! Sail with us into the shimmering seas of Laravel's built-in browser authentication services! Buckle up as we embark on an adventure that'll make your app's login process smoother than a pirate's accordion!

These magical features are just a `Auth` and `Session` facade away, offering cookie-based authentication for requests hailing from good ol' web browsers. Think of them as your crewmates in the realm of user verification and authentication – they'll help you confirm if Jack Sparrow (your users) have entered the right password and authenticate them accordingly!

In addition, these services will stow away essential authentication data in a user's session like a captain's log, and issue session cookies quicker than you can say "shiver me timbers!" A comprehensive guide on how to use these services can be found in this very treasure chest of documentation.

**Shipshape Starter Kits**

As you might have learned from our seafaring tales, you could manually navigate these authentication services to build your app's custom pirate-proof fortress. But why row when you can sail faster with a little help from our friends? To make your journey swifter than a speeding marlin, we've launched some nifty [free starter kits](/docs/{{version}}/starter-kits) that'll supply a robust, cutting-edge scaffolding for the entire authentication layer. Think of it as having an extra crewmate who knows all the best shortcuts and has a compass that always points true north!

Yarr matey, Laravel is here to make your coding journey smoother than a well-oiled anchor – so set sail, hoist the Jolly Roger, and let's conquer those shores together!

 **Laravel's API Authentication Shenanigans**

When it comes to managing your app's secrets and verifying those sneaky API requests, Laravel's got you covered! We've cooked up two fabulous packages to help: the granddaddy of them all, [Passport](/docs/{{version}}/passport), and its svelte younger cousin, [Sanctum](/docs/{{version}}/sanctum). But fear not, these aren't your typical cat-fighting sisters! They can coexist peacefully with Laravel's built-in cookie-based authentication libraries.

**Passport - The OAuth2 Overlord**

Passport is like the Captain Kirk of API authentication providers, armed with an arsenal of OAuth2 "grant types" to issue various tokens. It's a powerhouse for API authentication, but let's face it, not every application needs a starship enterprise to manage their authentication process. Some may find its complexity as confusing as the Klingon language. But fear not! We haven't left you high and dry – we've got tutorials on authenticating Single Page Applications (SPAs) and mobile apps using Passport, so check 'em out if you're lost in space!

**Sanctum - The New Kid on the Block**

With the complexity of OAuth2 weighing heavy on developers' minds, we decided to create a simpler, more streamlined authentication package that could handle both web requests and API tokens with equal ease. And thus, Laravel Sanctum was born! This is the preferred choice for applications that offer a first-party web UI along with an API, or those that exist separately as a Single Page Application (SPA) or mobile client.

Laravel Sanctum is like your trusty doorman, welcoming guests (and verifying their identities) with a smile. When it receives a request, Sanctum first checks if it's being served by a session cookie referencing an authenticated session – think of it as checking the guest's name on the list. If not, Sanctum looks for an API token in the request – like when someone mentions they're 'on the list.' If all goes well, it authenticates the request with that token. Need more details? Head over to Sanctum's ["how it works"](/docs/{{version}}/sanctum#how-it-works) documentation!

<a name="summary-choosing-your-stack"></a>
**Choosing Your Stack**

So, which package is right for your application? That depends on whether you're building a galaxy-spanning empire (Passport), or a quaint little bar on the outskirts of the cosmos (Sanctum). But remember, both packages play well with Laravel's built-in authentication libraries, so don't be afraid to mix and match! Happy authing, captain!

 Alrighty, let's dive into the world of Laravellandia! 🌞

In essence, if your web app is a digital storefront, Laravel's own baked-in security services will be your trusted bouncers at the entrance. 👨‍💼👩‍💼

But what if your application is more of a behind-the-scenes API barkeep, serving up drinks to third parties? Then you've got a choice between Passport or Sanctum, with Sanctum being the chatty mixologist who knows his scopes and abilities like the back of his hand. 🍸🤫

If you're building a single-page app (think SPA, not SpongeBob) powered by a Laravel backend, Sanctum is your go-to barman. You can either let him handle your authentication routes himself or bring in the backup bartender, Laravel Fortify, for a fancier, more features-packed service. 🎩🍾

Passport's your man when your app needs every feature of the OAuth2 specification to mix its drinks like a pro. 🤖🥃

And if you want to get this party started post-haste, our application starter kits are just the ticket for setting up a new Laravel application complete with our preferred authentication stack. 🚀✨

Now that we've covered the basics (and a bit of bar jargon), let's move on to some advanced mixology techniques: [authenticating users](#authenticating-users). Cheers! 🥂

 ## Authentication Blastoff! 🚀

> [!ATTENTION]
> Buckle up, space cowboy! This section of the docs is all about launching users into your Laravel universe using our snazzy application starter kits. These bad boys come equipped with some swanky UI scaffolding to propel you towards interstellar development speeds without leaving a trail of code debris behind.
>
> But fear not, brave adventurer! If you're yearning for a more hands-on approach and want to dance directly with Laravel's authentication systems, we've got you covered in our documentation on [DIY user authentication](#manual-authentication).

<a name="install-a-starter-kit"></a>

### Install a Starter Kit 🛠️

To kickstart your journey towards galactic success, let's set up camp with one of our starter kits. Follow these simple steps to get your kit installed:

1. **Clone or download the desired starter kit from the [Laravel GitHub repository](https://github.com/laravel/starter-kits).** If you're not familiar with how to clone repositories, we recommend brushing up on your [Git fu](https://www.atlassian.com/git) before continuing.

2. **Navigate to the starter kit directory.** Remember, a change of scenery can be invigorating, so don't forget to switch directories after cloning or downloading your kit.

3. **Create a new Laravel application.** To do this, run the following command in your terminal: `composer create-project --prefer-dist laravel/laravel YourAppName`. Replace "YourAppName" with the name you'd like for your shiny new project.

4. **Link the starter kit to your Laravel application.** To do this, copy the contents of the `resources` directory from your starter kit into the root directory of your Laravel application. And remember to keep that precious cargo safe!

5. **Update the service provider registration.** Open up the `config/app.php` file and add the service provider for your starter kit to the `providers` array, like so:

    ```
    'providers' => [
        // ...other providers...
        App\Providers\YourStarterKitServiceProvider::class,
    ],
    ```

6. **Update the event service provider registration.** Open up the `events/EventServiceProvider.php` file and add the following line to the `$listeners` property:

    ```
    'App\Listeners\YourStarterKitListener',
    ```

7. **Run migrations.** Your Laravel application now needs a friendly welcome from your starter kit, so let's help it settle in by running the necessary database migrations: `php artisan migrate`.

And there you have it! You've successfully set up your shiny new Laravel project with all the bells and whistles provided by our starter kits. Now that your spaceship is fueled and ready to blast off, let's continue exploring the cosmos of user authentication together! 🚀🌟

 ### Fire Up Your Laravel Adventure! 🚀🌟

Ready to embark on a dazzling journey with Laravel? First things first, let's set sail with a splendid [Laravel Starter Kit](/docs/{{version}}/starter-kits)! These swanky kits are the perfect jump-off points for infusing your brand-spanking-new app with the sophisticated charm of authentication.

<a name="retrieving-the-authenticated-user"></a>

Now that you've got your captain's hat on, it's time to meet your first mate! 🤝 To get acquainted with the authenticated user, just [grab their details](/docs/{{version}}/starter-kits) using the handy tools provided in your new starter kit. It's like introducing yourself to the crew after a rousing sea shanty! 🎵🌊

 ### Flying High with Laravel: A Guided Tour for the Authenticated User! 🛩️🚀

After launching your airline from a swanky starter kit and allowing passengers (er, users) to sign up and log in like it's fashion week, you'll often find yourself in need of interacting with the currently authenticated flyer. When handling incoming requests, fear not! The `Auth` facade's got your back, ready to serve you the current passenger at your request:

```php
use Illuminate\Support\Facades\Auth;

// Time to check-in the authenticated traveler...
$passenger = Auth::user();

// Need their boarding pass number? No problem!
$boardingPass = Auth::id();
```

But wait, there's more! Once a passenger has securely checked in, they become your loyal flying companion for the duration of their journey. You can access them via an `Illuminate\Http\Request` instance (our new best friend). Just remember, type-hinted classes will automatically join your flight and take their seats in your controller methods:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    /**
     * Update the flight information for an existing flight.
     */
    public function update(Request $request): RedirectResponse
    {
        $passenger = $request->user(); // Your co-pilot for this flight!

        // 🎧 Headphones on, time to navigate the controls...

        return redirect('/flights');
    }
}
```

And now, a special word for those who want to ensure their passenger list is up-to-date before departure: <a name="determining-if-the-current-user-is-authenticated"></a>

### Checking If Your Passenger List is Ready for Takeoff! ✈️

Worried about making an announcement that your flight is boarding when passengers haven't checked in yet? No need to panic! To find out whether the current user is authenticated, simply check if `Auth::check()` returns `true`. Now you can be sure not to miss anyone on your passenger list:

```php
use Illuminate\Support\Facades\Auth;

if (Auth::check()) {
    // All aboard! 🚂
} else {
    // Quick, let's call the ground crew and delay takeoff! 📞
}
```

Happy flying! ✈️🚀

 Alrighty then! Let's dive into the world of Laravel authentication, where even the most mundane tasks are given a dash of panache.

First off, if you're curious whether your user has successfully completed the password shindig and is ready to party on your web application, you can use the `check` method from the ever-so-charming `Auth` facade. This sly little number will return `true` if your user is indeed authenticated:

```php
use Illuminate\Support\Facades\Auth;

if (Auth::check()) {
    // It's a shindig! The user has arrived... or logged in, whatever.
}
```

[Now hold your horses, partner!](#protecting-routes) Even though you could determine if a user is authenticated using the `check` method, it's generally more prudent to use a middleware to make sure that said user has passed muster before being granted access to certain routes / controllers. This way, you can keep your web application as secure as Fort Knox and as friendly as a Vegas casino host. To learn more about this jamboree of authentication protection, check out the documentation on [protecting routes](/docs/{{version}}/authentication#protecting-routes).

<a name="protecting-routes"></a>
[And that, my friends, is how you keep your web application safe from the riffraff and still make it a swingin' place to be.](#determining-if-the-current-user-is-authenticated)

 ### Keeping the Airplane Hangar Locked: Route Security in Laravel Land! 🚀🛩️

Ahoy there, Captain! In this seafaring adventure we call Laravel development, we've got a swashbuckling feature to help you protect your routes from unruly pirates - yes, I mean unauthenticated users. Enter: Route Middleware! 🏹

These maritime guards (er... middlewares) can be used to ensure only those with the proper captain's hat and parrot (authenticated users, in layman's terms) can access a specific route. Laravel supplies you with a trusty shipmate named `auth` middleware, which is a fancy nickname for the stalwart `Illuminate\Auth\Middleware\Authenticate` class.

Since this shipmate comes pre-equipped on our vessel, all you need to do is secure him at your chosen route. Here's how you might do that:

```php
// Set sail towards flights! ⛵️
Route::get('/flights', function () {
    // Only pirates with a parrot on their shoulder can pass through here...
})->middleware('auth');
```

Now, what happens when an unauthenticated user tries to swab the poop deck (access your route)? Fear not! They'll be politely redirected to the nearest tavern for a drink or two, giving them ample time to log in before they can set sail with you again. 🍻 🎉

 **Redirecting Uninvited Party Crashers**

Oh, the joys of being a digital bouncer! When our good friend `auth` middleware spots an unregistered guest at your Laravel soiree, it politely escorts them to the front door—the `login` dance floor, if you will. But what if you want to change this polite shove into a VIP red-carpet treatment? No problemo, amigo!

Just pop open your application's secret backstage pass, aka `bootstrap/app.php`, and modify the bouncer's behavior using the `redirectGuestsTo` method:

```php
use Illuminate\Http\Request;

->withMiddleware(function (Middleware $middleware): void {
    $middleware->redirectGuestsTo('/login'); // For those who like it old school

    // For the hipster crowd...
    $middleware->redirectGuestsTo(fn (Request $request) => route('login'));
})
```

Just remember, if you decide to rename your `login` route, you'll need to update this backstage pass accordingly. It's like having a party at someone else's house—you gotta respect the host's rules! 🤪

 Alrighty, let's dive into the whimsical world of Laravel redirection! 🎠

#### Send Authenticated Folks to the Dashboard, Not to Dreamland 🛌

When our friendly `guest` middleware encounters a user with credentials (like Cinderella at the ball), it'll shoo them off to the swanky `dashboard` or `home`. But fear not, you can bend this rule like a rubber duck in a bathtub! 🦆

Just head over to your application's `bootstrap/app.php` file (a magic black book in our story), and use the `redirectUsersTo` method:

```php
Use ye olde candlelight, dear friend!

->withMiddleware(function (Middle-age-renaissance-faire $middleware): void {
    $middleware->redirectUsersTo('/panel');

    // Using a clever trick...
    $middleware->redirectUsersTo(fn (Request $request) => route('panel'));
})
```

<a name="specifying-a-guard"></a>
#### Change the Guard and Redirect Like a Royal Court 🏰

If you fancy yourself as the king or queen of your Laravel domain, you can even specify a guard to control who gets redirected where. Just follow these royal decrees:

```php
->withMiddleware(function (Middle-age-renaissance-faire $middleware): void {
    // For knights in shining armor (Authenticated users)
    $middleware->auth('sanctum')->redirectUsersTo('/panel');

    // For lowly peasants (Guest users)
    $middleware->guest($middleware->authenticate('sanctum'))->setRedirectTo('/market-square');
})
```

Now, who needs a magic carpet when you can bend the rules of your Laravel kingdom like this? 🧞‍♂️🚀

 Ahoy there, brave coder! Let's tango with Laravel's auth middleware, shall we? But first, let me spin you a yarn about the mighty guard. You see, when you dance this middleware on a route, you can call upon a specific guard to ensure your user's credentials are as squeaky clean as your freshly polished boot boots!

Now, remember that the guard you summon should be akin to one of the keys in your `auth.php` configuration file's swanky `guards` array:

```php
Route::get('/flights', function () {
    // Only those who have proven their mettle as an 'admin' shall pass...
})->middleware('auth:admin');
```

Just like how you wouldn't let any Tom, Dick or Harry into your pirate ship without proper papers, you won't grant access to sensitive routes without a proven admin ID! 🏴‍☠️

 ### The Lockout of Love (Log-in Throttling)

If you're dancing with one of our snazzy [application starter kits](/docs/{{version}}/starter-kits), fear not, because we've got your back! Automatic rate limiting has been cleverly installed for log-ins. It's like having a bouncer at the digital door - but one who understands that everyone makes mistakes (well, almost everyone).

After a series of failed attempts to provide those magical, correct credentials, our digital bouncer will politely ask you to take a breather... for about a minute. Don't worry, it's not a full dance floor detention; just enough time for a quick bathroom break or a much-needed coffee refill!

But here's the twist - this friendly lockout is tailored just for you! It's like having your own personal doorman who remembers your username/email and IP address. So, no need to worry about your buddy trying to hog the spotlight by logging in as you.

> [!NOTE]
> Feeling a little too popular on certain routes? Fret not! Check out our [rate limiting documentation](/docs/{{version}}/routing#rate-limiting) for tips on how to put the brakes on the party. It's like learning the art of subtle hints from a seasoned bartender!

 Alrighty, buckle up, because we're diving into Laravel's manual user authentication! 🏄‍♂️

Now, you don't have to use the shiny newauth scaffolding that comes with Laravel's starter kits. But if you decide to swim on your own, you'll need to handle user auth like a boss using Laravel's authenticating classes – no sweat! 🛁

To access those fancy auth services, we'll hitchhike via the `Auth` facade, so let's make sure to grab a ride at the top of our class. Next up: the `attempt` method! This beauty is usually in charge of handling authentication attempts from your "login" form. If the user passes with flying colors, you should refresh their session to avoid some nasty [session fixation](https://en.wikipedia.org/wiki/Session_fixation) – think of it as a digital detox for their session! 🌿

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth; // Grab the Auth ride, buddy!

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'], // Don't forget the fish oil capsules!
            'password' => ['required'], // And don't forget the protein shake too!
        ]);

        if (Auth::attempt($credentials)) { // If they pass the test...
            $request->session()->regenerate(); // ... refresh their session!

            return redirect()->intended('dashboard'); // Off to the dashboard, they go!
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.', // Oops, try again!
        ])->onlyInput('email');
    }
}
```

The `attempt` method loves a good array of key/value pairs as its first argument. It uses the values to find the user in your database table, so in the example above, we're searching for the user based on the value of their `email` column. If they're found, it compares the hashed password stored in the database with the `password` value passed to the method via the array. The framework will handle hashing the incoming request's `password` value for you! 🔨

A successful match between those two hashed passwords results in an authenticated session for the user.

Now, remember that Laravel's auth services pull users from your database based on your authentication guard's "provider" configuration. By default, it uses the Eloquent user provider and instructs it to use the `App\Models\User` model when retrieving users. You can tweak these values within your configuration file according to your application's needs.

The `attempt` method will return `true` if authentication was successful. Otherwise, it spits out a big ol' `false`. 🥫

The `intended` method provided by Laravel's redirector sends the user on their merry way to the URL they were attempting to access before being stopped by the auth middleware. A fallback URI can be given to this method in case the intended destination is unavailable. 🛫

Hope that clears up the waters! Now get out there and authenticate like a pro! 🚀🎉

 Alrighty, let's dive into the world of Laravel authentication! If you fancy adding some extra conditions to your login process, you can do that too! 🤘

Here's a fun way to spice up your authentication query:

```php
// First off, let's make sure our user is 'active', like a well-rested Game of Thrones character
if (Auth::attempt(['email' => $email, 'password' => $password, 'active' => 1])) {
    // Our knight in shining armor has been authenticated! 🦸‍♂️
}
```

But what if you need something more complex than a simple condition? No worries, we've got you covered with our very own "Eloquent Magician"! 🎩

```php
use Illuminate\Database\Eloquent\Builder;

// Let's perform some advanced sorcery to check if the user has an 'activeSubscription'
if (Auth::attempt([
    'email' => $email,
    'password' => $password,
    fn (Builder $query) => $query->has('activeSubscription'), // Weaving spells with queries is fun, right? 🧙‍♀️
])) {
    // Our sorcerer has been authenticated! 🔮
}
```

Be careful now, some databases have sneaky users that might be banned. To avoid authenticating such unsavory characters, you can use the `attemptWhen` method:

```php
if (Auth::attemptWhen([
    'email' => $email,
    'password' => $password,
], function (User $user) { // Let's make sure our user isn't banned 🚫
    return $user->isNotBanned();
})) {
    // Our king has been authenticated! 👑
}
```

Remember, in these examples, `email` is just a friendly example. You should replace it with whatever column name corresponds to the "username" in your database table. And hey, if you're working with multiple guard instances, don't forget to specify which one you want! 🤗

<a name="accessing-specific-guard-instances"></a>
Oh, and if you're curious about accessing specific guard instances, just hop over to this section: <a href="#accessing-specific-guard-instances">Accessing Specific Guard Instances</a>. It's a fun read! 📚

Happy coding! 🎉

 Alright, let's dive into the whimsical world of Laravel authentication! 🎉

#### Dancing with Different Guardians 💃🕺️

Ever felt like your app needed a bit more of a polygamous relationship with its users? Well, now you can! With the `Auth` facade's `guard` method, you can specify which guardian in charge (pun intended) of authentication you fancy for a particular user. This is perfect for those situations where you've got different parts of your application needing separate authentication mechanisms or even distinct databases for their dating profiles. 🤩

Remember to choose a guard name that matches one of the suitors (er, guards) listed in your `auth.php` configuration file:

```php
if (Auth::guard('admin')->attempt($credentials)) {
    // ...and off they go on their power-tripping escapade!
}
```

<a name="remembering-users"></a>
*Wink wink*, now that you've learned about guard switching, it's time to explore remembering those forgetful users (you know who you are)! 🤫 💔

 ### Ahoy there, Captain! Navigating the Seas of Authentication

Ah, ye who seek to tame the login form beast with a "remember me" checkbox, fear no more! In yer Laravel vessel, we gotcha covered like a pirate's treasure chest.

To grant "remember me" magic in yer application, simply cast a boolean spell as the second potion to the `attempt` method brew. Set it true and watch as Laravel keeps that user seaworthy till they walk the plank manually:

```php
use Illuminate\Support\Facades\Auth;

if (Auth::attempt(['email' => $email, 'password' => $password], true)) {
    // Yarr! The scallywag is now forever bound to ye ship... or until they decide to walk the plank.
}
```

But wait, me hearties, the "remember me" enchantment requires a `remember_token` column in yer `users` table, where our magic potion shall reside:

```bash
In yer migration script, ye'll find this column already marked for stowage:

php artisan make:migration add_remember_token_to_users_table --table=users
```

If ye be offering "remember me" services, ye can use the `viaRemember` method to discern if the current captain was authenticated by our magic potion:

```php
use Illuminate\Support\Facades\Auth;

if (Auth::viaRemember()) {
    // Ahoy there! Our scallywag is under the spell of the "remember me" cookie.
}
```

Ye be ready to set sail on these shores now, matey! Hoist the sails and may yer journey be filled with treasure, battles, and the sweet taste of victory over the login form beast!

 ### Unleashing the Power of User Auth, Laravel Style! 🚀✨

#### 👋 Authenticating a Single User Instance 🤓

Ahoy there, Captain Coder! Ever found yourself in need of authenticating a specific user instance? Worry not, because Laravel has got your back with its robust, yet delightfully named `authenticate()` function. Here's how it goes:

```php
// Assuming you have your user instance handy
$user = User::where('email', 'your_email@example.com')->first();

// Now let's authenticate that bad boy!
if ($token = $user->createToken('MyAppToken')) {
    $token->save();
}
```

Just remember, this is like asking your best buddy for a ride in their fancy car: you need to know the make and model (email and password), and they'll happily provide the keys (tokens)! 🚗 🏎️

<a name="authenticating-anonymous-users"></a>

#### 🌙 Authenticating Anonymous Users 🕵️‍♂️

An anonymous user, huh? Think of them as the mysterious stranger at the back of the room, trying to get in on all the fun without revealing their identity. Well, we've got just the ticket! Laravel's `guard()` function is your new best friend when it comes to handling these clandestine characters:

```php
// Use the "web" guard for anonymous users
$guard = auth('web');

// Attempt to authenticate the user
if ($guard->attempt(['email' => 'anonymous@example.com', 'password' => 'mysterious_pass'])) {
    // User has been authenticated!
} else {
    // Anonymous user didn't make it through security 🤫
}
```

Remember, this is like whispering the secret password at a speakeasy: you need to use the right guard and know that special combination of email and password. And if they don't let you in? Well, you were never really part of the inner circle anyway, right? 🕵️‍♂️🕺

<a name="customizing-authentication-guards"></a>

#### 🦸‍♂️ Customizing Authentication Guards 🛡️

Sometimes, you've got to roll your own security measures – like when you're Batman and Gotham City has a new Joker on the loose. Laravel makes this a breeze with its `authenticate()` method inside your custom guard class:

```php
// Create a custom guard class for "api" authentication
class ApiGuard extends Authentication
{
    protected $guard;

    public function __construct($name = 'api')
    {
        $this->middleware($name);
        $this->setDefaultDriver('token');

        $this->provider = Provider::create(
            $name, $this, function ($app) use ($name) {
                return new UserProvider($app['hash'], $app['auth.simple']);
            }
        );
    }

    public function authenticate()
    {
        // Custom authentication logic goes here!
    }
}
```

This is like Batman building his own Batsuit from scratch – you get to decide exactly how your custom authentication guard operates, so you can take down any bad guys that slip through the cracks! 🦸‍♂️🕵️‍♀️

 Alrighty then! Let's dive into the world of Laravel authentication, where superheroes aren't just in comics. When you've got a legit user hanging around, ready to join the party, you can bestow upon them the keys to the kingdom with the `Auth` facade's `login` method!

But first, let me tell you something important: that user needs to be a certified Authenticatable (it's like having a super-secret identity in this cyber world). You can find more details about it [here](/docs/{{version}}/contracts), but for now just trust me, the `App\Models\User` model is already wearing that cape.

So, without further ado:

```php
use Illuminate\Support\Facades\Auth;

// Time to give 'em the keys!
Auth::login($user);
```

Now, if your user fancies themselves as a modern-day Tony Stark and wants their session to last forever or until they personally deactivate it, you can pass a boolean value like so:

```php
// Remember me? Yup! That's the one.
Auth::login($user, true);
```

Say you're dealing with a special group of users (like admins), and you want to assign them a specific set of powers:

```php
// When in Rome, do as the Romans do... or in this case, admin!
Auth::guard('admin')->login($user);
```

And that's your friendly guide on how to authenticate a user instance in Laravel! Now go forth and bring justice (or at least secure sessions) to your application. Happy coding! 🤖🚀

 Alrighty then! Let's dive into the dance of digital authentication in Laravel Land. Buckle up, because it's going to be a wild ride!

#### Authenticate a User by Their Glorious ID Number

To verify that our cherished user is who they claim to be using their database record's one-and-only unique identifier (a.k.a the primary key), you can employ the `loginUsingId` method. This trusty tool takes the number of the user you wish to authenticate as an argument:

```php
Auth::loginUsingId(1); // Don't forget to replace "1" with your user's actual ID number!
```

Now, if you want to add a little extra spice to the mix by enabling the "remember me" feature for this lucky user, simply pass a boolean value as the `remember` argument of the `loginUsingId` method. If set to true, this means their session will be as tenacious as a pitbull with a bone – it'll stick around until they manually log out or you pry the keyboard from their cold, dead hands:

```php
Auth::loginUsingId(1, remember: true); // Remember, the more you remember, the merrier!
```

Oh, and if you're wondering about authentications with a short shelf life, check out [Authenticate a User Once](#authenticate-a-user-once) for more information. Happy authenticating, partner! 🤠

 Alrighty then! Buckle up, because we're diving into the enchanting world of Laravel authentication where one dance with the login fairy is all it takes!

#### Dance with the Login Fairy Once 💃🏼🕺🏼

In this whimsical land, you can charm a user into a magical dance with our trusty `once` method. This enchantment will ensure the user gets to tango with your application for just one request! No need for any session or cookie sorcery, and rest assured, no wedding bells will be ringing as the `Login` event remains blissfully unmarried.

```php
if (Auth::once($credentials)) {
    // Now that we've danced, let's see what happens! 🕺️
}
```

Just imagine, instead of a ballroom full of sessions and cookies, you're stepping into the spotlight with only one dance to prove your worth. Sounds like a fun challenge, doesn't it? Happy coding, adventurer! 🤓✨

 ## Space Age Secret Agent Authentication (AKA Basic Auth)

Welcome, secret agents of the Laravel universe! This chapter isn't about your tuxedos or martinis shaken, not stirred – it's about a slick way to authenticate your application's spies without setting up a fancy "007 login" hideout. Let's dive in!

[HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) is our gadget of choice today. To kick things off, slap the `auth.basic` middleware onto a route. This mysterious contraption comes pre-packaged with the Laravel framework, so no need for secret formulas or blueprints!

```php
Route::get('/profile', function () {
    // Only MI6-approved agents may access this mission...
})->middleware('auth.basic');
```

Once you've secured your route with the middleware, hold onto your exploding pens – when you attempt to access the route in your browser, a popup will ask for your credentials! By default, our middleware believes that the `email` column in your `users` database table is your agent's "agent number."

<a name="a-note-on-fastcgi"></a>

Now, if you find yourself using FastCGI (we wouldn't want to leave out our friends in the field), there are a few extra steps involved. But don't worry – we have your back with an extensive troubleshooting guide in our user manual!

Remember, agents, security is crucial in our line of work. Keep those secrets safe and your mission successful!

 Alright, here's a humorous spin on the Laravel FastCGI documentation!

#### FastCGI Follies

If you're serving your Laravel application with a side of [PHP FastCGI](https://www.php.net/manual/en/install.fpm.php) and a slice of Apache, you might find that HTTP Basic authentication is as confusing as a cat trying to use a computer. To set things right, try adding these lines to your application's `.htaccess` file:

```apache
RewriteCond %{HTTP:Authorization} ^(.+)$
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
```

Now, let's put on our detective hats and dive into the world of stateless HTTP Basic Authentication (okay, it's not that exciting, but stick with us!). When FastCGI is involved in your server setup, there's a chance that the authorization headers get lost in translation, much like a secret recipe passed down through generations. By adding our magical lines above, we ensure that those crucial headers make it to their intended destination, saving your application from chaos and potential embarrassment!

Just remember, always keep an open bottle of code sanitizer handy when working with FastCGI – just in case things get a little too hairy!

 ### Channeling the Spirit of Captain Authentication!

Ahoy there, matey! If you're tired of the usual session cookies and yearn for something a bit more pirate-y, we've got just the thing - Stateless HTTP Basic Authentication! No need to walk the plank with all those session cookie shenanigans. Hoist the Jolly Roger of authentication directly to your application's API!

To set sail on this swashbuckling journey, you'll first need to [concoct a middleware](/docs/{{version}}/middleware) potion that summons the magical `onceBasic` method. If Blackbeard himself doesn't respond with a cryptic message, consider it fair game to continue your voyage through the application:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthenticateOnceWithBasicAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Clossekin' Le Charmaine $next): Response
    {
        return Auth::onceBasic() ?: $next($request);
    }
}
```

Next, tie up the middleware to a route like a captain tying off his ship:

```php
Route::get('/api/user', function () {
    // Only authenticated pirates may access this treasure chest...
})->middleware(AuthenticateOnceWithBasicAuth::class);
```

<a name="logging-out"></a>
And if ye ever feel the need to log out, well, we can't help you there. This is the high seas, and once ye've set sail with Basic Auth, it's a one-way ticket! But fear not, me hearty, for this will ensure only genuine pirates can access your treasure chest API! Yarr!

 ## Lend Your Logout a Hand (or Two!)

Ready to give your users the ol' heave-ho? Fear not, dear coder! Laravel's got a nifty `logout` method just for you, served up by the ever-helpful `Auth` facade. This little gem removes all that authentication data from their session, making subsequent requests as unauthorized as a kangaroo at a spelling bee.

But let's not stop there! You should also invalidate the user's session and whip up a fresh [CSRF token](/docs/{{version}}/csrf) like a seasoned pastry chef. Once that's done, you can send your former user on their merry way back to the root of your application (because who doesn't love home sweet home after being kicked out?).

Here's how you can pull this off:

```php
Use the Force, young Padawan! I mean, use these lines of code...

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

/**
 * Send users packing from our application.
 */
public function logout(Request $request): RedirectResponse
{
    Auth::logout(); // Sayonara, authentication data! You're no longer needed here.

    $request->session()->invalidate(); // Let's make sure their session is as useless as a chocolate teapot!

    $request->session()->regenerateToken(); // And just for fun, let's give them a brand new CSRF token!

    return redirect('/'); // Off they go, back to the start... the root of all evil, or our application. You decide.
}
```

<a name="invalidating-sessions-on-other-devices"></a>
And if you're feeling particularly sneaky, don't forget to invalidate sessions on other devices as well! After all, nobody likes a user who hops from device to device like a digital kangaroo. ;)

 ### Kickin' Sessions Off Other Gadgets (Without Being a Jerk to Your Current Buddy)

Laravel is like that cool friend who always has your back, even when you forget to lock the front door on Tinder date night. In this case, we're talking about a super-cool mechanism for kicking a user's sessions off other devices without leaving their current device high and dry (AKA still authenticated). This feature is perfect for those moments when a user updates their password and you want to ensure all other devices are logged out, while your current buddy stays safe in his cozy login zone.

First things first: Make sure the `Illuminate\Session\Middleware\AuthenticateSession` middleware is nestled amongst the routes that require session authentication. To do this, wrap it up like a burrito with other middleware on the route group definition so it can protect most of your app's routes. By default, you can apply it using the `auth.session` [middleware alias](/docs/{{version}}/middlewares#middleware-aliases):

```php
Route::middleware(['auth', 'auth.session'])->group(function () {
    Route::get('/', function () {
        // ...
    });
});
```

Next, you can use the `logoutOtherDevices` method offered by the `Auth` facade. This method is like a bouncer at a club who only lets in folks with the right password: your app should accept this password through an input form.

```php
use Illuminate\Support\Facades\Auth;

Auth::logoutOtherDevices($currentPassword);
```

When the `logoutOtherDevices` method is triggered, the user's other sessions will be given the boot (completely logged out), meaning they are now locked out of all guards they were previously authenticated by. That's one less device to worry about!

 Alrighty then, let's dive into the password party scene in Laravel land! You know, where users get their password confirmation on, and we're here to make it as smooth as a cat's tongue.

So, picture this: you've got your application all jazzed up, and suddenly you realize that you need to add a password confirmation step before some sensitive actions or redirections to Fort Knox (aka the secure parts of your app). No worries, Laravel has got your back with a built-in middleware that will make this process as easy as baking a cake.

But wait! Before we get our baker's hats on, you gotta define two routes: one route to serve up a view and ask the user for their password confirmation, and another route to verify that the entered password matches the original and then send them on their merry way to their final destination.

> [!NOTE]
> This section of the docs will show you how to hook up with Laravel's password confirmation features directly. However, if you want to save some time (and who doesn't?), the [Laravel application starter kits](/docs/{{version}}/starter-kits) include support for this feature!

Now, let's get down to the nitty-gritty with password confirmation configuration! 🚀🚀🚀

 Ah, dear developer! You've stumbled upon the mystical realm where user authentication secrets are whispered and the password ghost haunts no more. Let me guide you through the enchanted forest of Laravel configuration, specifically thePassword Timeout Sanctum.

First off, once a user confirms their password in a fit of password-confirming passion, they'll be left in sweet peace for three hours—no more pesky reminders to confirm again! But fear not, for you possess the power to alter this enchantment by tinkering with the value of `password_timeout` within your application's `config/auth.php` configuration file.

Adjusting this value is akin to spinning golden hairs in a magical wand. For instance, if you want to extend the password peace for 4 hours and 23 minutes (because who doesn't need an extra 23 minutes of bliss), simply update the `password_timeout` value accordingly!

Remember, with great power comes responsibility—so beware not to set it too low or you might find yourself fielding user complaints about the password ghost making a return appearance. Happy wandering in Laravel's enchanted forest, brave coder!

 ### Navigation

#### 🛣️ The Magical Route Mapper 🛣️

Navigating through your Laravel app is no walk in the park, but luckily we've got a trusty Route Mapper to help us out! This powerful wizard will turn your URLs into actual working paths that lead you straight to your desired destinations. 🧙‍♂️🔮

##### 🛌 The Password Confirmation Form 🛌

Now, imagine you're at a wild party (in the before times), and you need to confirm that the mysterious stranger you've been chatting up all night is indeed who they claim to be. That's where our password confirmation form comes in! It's the perfect chance for them to prove their identity... or get left at the dance floor, we won't judge. 💃🕺

In Laravel, when users register, they'll be prompted to create a password. But before they can really join the party (i.e., access your app), you want to make sure they confirm that password. That's where our trusty route comes in:

```php
Route::get('/password/confirm/{id}/{hash}', 'Auth\ConfirmPasswordController@show')->name('password.confirm');
```

Here's the lowdown on this magical route:

1. `/password/confirm/{id}/{hash}` - The URL pattern. Replace `{id}` and `{hash}` with actual user data to create a unique URL for each user.
2. `Auth\ConfirmPasswordController@show` - The controller that handles this route and displays the password confirmation form.
3. `name('password.confirm')` - The name given to this route, which can be used later to link to it from other routes or views.

Now, you might be wondering how users will actually access this route. Fear not! We've got a nifty little mail function that sends out an email with the user's unique URL. Once they click on it, bam! They'll be directed straight to the password confirmation form. 💌🚀

Just remember: A successful party requires both food and drinks, so make sure your users can log in after confirming their passwords by linking them to a proper login route. Happy routing (and partying)! 🎉🥳

 Alrighty, let's get this password party started! First off, we need to create a route that summons the password confirmation view, like a magic incantation for secure password validation.

```php
Route::get('/secret_passphrase_verify', function () {
    return view('auth.password-confirmation-ceremony');
})->middleware('authenticate')->name('password.confirm');
```

Don't worry, there's no need to call the secret service—we've got Laravel to handle this delicate matter! Just make sure your view has a form with a field called "password", so we can compare passwords like long-lost twins. And sprinkle in some text for good measure, to let users know they're about to enter the VIP lounge of your application and must prove their identity by reentering the secret handshake—er, password.

Now, before you embark on a wild goose chase for this view file (auth.password-confirmation-ceremony), remember that Laravel is like a caring concierge: it will create the missing view automatically when you call the `make:auth` command! So go ahead, channel your inner Indiana Jones and uncover the treasure (view file) with ease. 🏆🎉🙌

 Alrighty then! Let's dive into some password fun times with our trusty Laravel pals. We're about to set up a route for the "Confirm Password" form, which will be responsible for checking if that secret sauce you entered matches what we've got on file. Here's the lowdown:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

Route::post('/password-is-the-same-as-mine', function (Request $request) {
    if (! Hash::check($request->get('secretSauce'), $request->user()->password)) {
        return back()->withErrors([
            'secretSauce' => ['You're cooking with the wrong recipe, pal. Try again!']
        ]);
    }

    $request->session()->passwordVerified();

    return redirect()->intended('destination-of-your-dreams');
})->middleware(['auth', 'throttle:6,1']);
```

Now, let's break it down like the password confirmation process itself. First, Laravel checks if the magic password sauce you submitted actually matches our stored password for the authenticated user. If it does, we need to tell Laravel's session that the user has successfully proven their culinary prowess (I mean, password-matching skills). The `passwordVerified` method sets a timestamp in the user's session so Laravel knows when they last confirmed their password. And, voila! You get redirected to your intended destination like the master chef you are.

<a name="password-confirmation-protecting-routes"></a>
Remember, our route is now a well-guarded fortress, thanks to the mighty middleware array it carries: `['auth', 'throttle:6,1']`. The `'auth'` makes sure only authorized users can access this page, while `'throttle:6,1'` ensures that they don't try to confirm their password more than once every 6 minutes. After all, even in the kitchen, we need to maintain some level of password security!

 ### Password Party Checkpoint! 🕺️

Before throwing a password dance party on your routes, make sure to assign the `password.confirm` bouncer! This groovy guard comes standard with every Laravel installation and works like a charm, stashing the user's desired destination in the session so they can boogie right back where they left off after confirming their new moves (password).

Here's how you get this password party started:

```php
Route::get('/settings', function () {
    // ...
})->middleware(['password.confirm']); 💃️🎉

Route::post('/settings', function () {
    // ...
})->middleware(['password.confirm']); 🕺️🎊
```

After setting the stage for this password party, our bouncer will whisk users away to the `password.confirm` [disco floor](/docs/{{version}}/routing#named-routes) once they've proved their groove is up to par. Enjoy the fun times, folks! 💃️🕺️🎊🎶🥳🚀

 Alrighty then! Let's dive into the world of custom authentication guards, shall we? You see, in Laravel land, you can create your own security squad using the `extend` method on the trusty `Auth` facade. But, like a secret recipe for grandma's famous pie, this magic happens within a [service provider](/docs/{{version}}/providers). Since Laravel already sent over an `AppServiceProvider`, we can whip up our code right there!

```php
<?php

namespace App\Providers;

use App\Services\Auth\JwtGuard;
// (Imagine an orchestra conductor waving a baton here)

class AppServiceProvider extends ServiceProvider
{
    // ...

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // This is where the magic happens! (Cue: sparkly fairy dust)
        Auth::extend('jwt', function (Application $app, string $name, array $config) {
            // Return an instance of something that fits the bill...

            return new JwtGuard(Auth::createUserProvider($config['provider']));
        });
    }
}
```

As you might've noticed in the example above, the callback passed to the `extend` method should return an implementation of `Illuminate\Contracts\Auth\Guard`. This interface is like a blueprint for building a custom guard. Once your custom guard has been defined, you can reference it in the `guards` configuration of your `auth.php` configuration file:

```php
'guards' => [
    'api' => [
        'driver' => 'jwt',
        'provider' => 'users',
    ],
],
```

Now, isn't that a piece of cake? Just remember, with great power comes great responsibility - make sure your custom guards secure Laravel's virtual frontier as if it were the real West! 🤠 🌵

 ### Closure Comedy Guards (CCGs) - Laravel's Party Crasher for Authentication! 🎉🤹‍♂️

Want to throw a custom authentication bash in your application? Look no further than the `Auth::viaRequest` shindig! This method is like the life of the party, letting you define your dance moves (authentication process) using just one closure. 🕺️🎵

To kick things off, grab a mic and call the `Auth::viaRequest` at the `boot` party of your application's `AppServiceProvider`. The `viaRequest` function will happily accept an authentication driver name as its first drink (yup, it's that kind of party). Pick something cool and catchy for your custom guard. And for the main act, pass a closure that takes the incoming HTTP request, does a quick spin around the dance floor (queries your user model), then returns either a user instance or, if things go south, sends everyone home with a big ol' `null` 🤷‍♂️🙅‍♀️:

```php
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Get the party started!
 */
public function boot(): void
{
    Auth::viaRequest('custom-token', function (Request $request) {
        return User::where('token', (string) $request->token)->first(); // Party on, Garth and Wayne!
    });
}
```

Once your custom authentication driver is all dolled up, it's time to invite it to the big dance by configuring it as a driver within the `guards` configuration of your `auth.php` configuration file:

```php
'guards' => [
    'api' => [
        'driver' => 'custom-token',
    ],
],
```

Now, you can reference your guard when assigning the authentication middleware to a route (think of it as the bouncer checking IDs):

```php
Route::middleware('auth:api')->group(function () {
    // ...
});
```

And that's a wrap! Now you can show off your custom CCG moves and keep unwanted guests at bay 🕺️💃!

 Alright, Laravel buddies! Let's dive into the realm of custom user providers because, let's face it, who needs a traditional relational database when you can store your users in a cosmic crystalline cluster or a sentient network of refrigerators? 🌌🍔

First off, extend Laravel with your own authentication user provider like you're inviting the coolest kid in school to your party. We'll do this by calling the `provider` method on the ever-so-charming `Auth` facade. The user provider resolver should return an implementation of `Illuminate\Contracts\Auth\UserProvider`, which, if you're not a fan of long names, can be shortened to ICAAUP for fun 😉

Here's the party invite in PHP:

```php
<?php

namespace App\Providers;

use App\Extensions\MongoUserProvider;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    // ...

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Auth::provider('mongo', function (Application $app, array $config) {
            // Return an instance of ICAAUP...

            return new MongoUserProvider($app->make('mongo.connection'));
        });
    }
}
```

Once you've sent the invite, it's time to let your new provider join the dance floor in your `auth.php` configuration file. First, define a `provider` that uses your new driver:

```php
'providers' => [
    'users' => [
        'driver' => 'mongo',
    ],
],
```

Finally, you can reference this provider in your `guards` configuration. It's like adding them to the guest list:

```php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
],
```

And there you have it! Now, your custom user provider is welcome at the Laravel party 🎉 Just remember, with great power comes great responsibility (and a cool new dance move)!

 ### The User Provider Contract: The Unsung Heroes of Authentication!

These unsung heroes, `Illuminate\Contracts\Auth\UserProvider` implementations, are like the trusty sidekicks that ensure our Laravel heroes can continue their quest for justice, even when user data storage systems get a little messy or the villain decides to switch databases (gasp!).

Let's dive into the `Illuminate\Contracts\Auth\UserProvider` contract:

```php
<?php

namespace Illuminate\Contracts\Auth;

interface UserProvider
{
    public function retrieveById($identifier);
    public function retrieveByToken($identifier, $token);
    // And so on... (rest of the methods)
}
```

The `retrieveById` function is like a super-powered librarian, locating a user based on their unique library card number (or auto-incrementing ID if we're sticking with the database metaphor). Once found, this scholarly sidekick returns the corresponding `Authenticatable` implementation.

The `retrieveByToken` function is our secret service agent, finding users by their "remember me" token and unique identifier, often stored in a hidden column like `remember_token`. This secret squirrel then returns the matching `Authenticatable` implementation.

The `updateRememberToken` method acts as the helpful office assistant, updating the user's `remember_token` with a fresh token for successful "remember me" authentication attempts or when users decide to log off (and hopefully remember their passwords next time).

The `retrieveByCredentials` function is our undercover detective, investigating the array of credentials passed to the `Auth::attempt` method when attempting to authenticate. This snoopy sidekick then searches for the matching `Authenticatable` implementation in the underlying persistent storage system. **But remember, this method should never engage in password validation or authentication itself!**

The `validateCredentials` method is our courtroom prosecutor, cross-examining the given user with the provided credentials to authenticate the user. This prosecuting attorney will often use the `Hash::check` method to compare the value of `$user->getAuthPassword()` with the value of `$credentials['password']`. If successful, this method returns a resounding "GUILTY!" (or true), while an unsuccessful attempt results in "NOT GUILTY" (or false).

Finally, the `rehashPasswordIfRequired` function acts as our trusty IT technician, rehashing the given user's password if necessary and supported. This tech-savvy sidekick uses the `Hash::needsRehash` method to determine whether the `$credentials['password']` needs to be updated, and if so, employs the `Hash::make` method to perform the password rehashing magic and update the user's record in the underlying persistent storage system.

 Alrighty then! Let's dive into the heart of the action – the `Authenticatable` contract. After exploring the dance moves of the `UserProvider`, it's time to learn the twirls and pirouettes of this beauty.

Remember, user providers should return objects that can do the Macarena to this interface from the `retrieveById`, `retrieveByToken`, and `retrieveByCredentials` methods:

```php
<?php

namespace Illuminate\Contracts\Auth;

interface Authenticatable
{
    public function getPrimaryDancerName(); // "What's my name? Call me Mr. PK!"
    public function getPrimaryDancerId();   // The dancer with the golden moves!
    public function getPasswordColumnName(); // Where the secret sauce is kept: Passwordville, Population: 1
    public function getHashedSecretSauce(); // The password, after it's been put through the magic blender

    public function getRememberTokenName();   // What's my dance ticket number? Call me Mr. RT!
    public function setRememberToken($value);  // Stamping my dance ticket for a comeback performance!
}
```

This interface is as simple as a one-legged flamenco dancer – the `getPrimaryDancerName` method tells us the name of the "primary key" column for our dance partner, while the `getPrimaryDancerId` method brings center stage the "primary key" of our beloved dancer. When using a MySQL back-end, this would likely be the auto-incrementing primary key assigned to our dance record. The `getPasswordColumnName` method reveals the name of the password column in the dance studio, while the `getHashedSecretSauce` method serves up the dancer's shimmy-shaken password.

This interface allows the dance floor to accommodate any "user" class, regardless of what dance troupe or stage decor you are using. By default, Laravel includes an `App\Models\User` class in the `app/Models` directory which can do all the fancy footwork!

<a name="automatic-password-rehashing"></a>
Now, for the grand finale – automatic password rehashing! This nifty feature makes sure that when a user updates their password, it gets hashed using the latest algorithm. No more worry about your moves being outdated! The `Illuminate\Hashing\Hasher` class handles all the hash-tastic responsibilities for you. Just call the `make()` method to get an instance of this class, and then use the `hash()` method to hash a password.

For example:

```php
use Illuminate\Hashing\Hasher;

$hasher = new Hasher();
$hashedPassword = $hasher->make('secret sauce'); // Shimmy-shaken and ready for the dance floor!
```

And there you have it – a humorous yet informative overview of the `Authenticatable` contract! Now, let's get this party started! 🎉💃🕺️

 Alright, buckle up, password peeps! 🚨 Laravel's default password encryption system is none other than the illustrious bcrypt. Think of it as a digital bouncer for your user's secret sauce (passwords), ensuring only the right passwords get through the door.

The "work factor" for these digital doormen can be adjusted, like fine-tuning a vintage vinyl record player, using your application's `config/hashing.php` configuration file or the `BCRYPT_ROUNDS` environment variable. As CPUs and GPUs get stronger, just like weightlifters at the gym, you'll want to bump up the work factor for bcrypt to keep those passwords nice and secure.

When you do decide to beef up your bcrypt muscle, Laravel will treat your users with an elegant dance of rehashing - automatically and effortlessly! This magic happens when your users authenticate via Laravel's starter kits or when you manually authenticate them using the `attempt` method. It's like having a digital butler who keeps all passwords up-to-date without causing a fuss.

However, if you find this automatic rehashing disruptive to your application's rhythm (we wouldn't blame you), you can disable this feature by publishing the `hashing` configuration file:

```shell
php artisan config:publish hashing
```

Once that's done, simply set the `rehash_on_login` configuration value to `false`:

```php
'rehash_on_login' => false,
```

Remember, this only affects automatic rehashing during user authentication. Your users will still be eternally grateful for your commitment to keeping their passwords secure! 🔐💪🏼

 Alright, Laravel's not just a party animal, but it sure knows how to throw a heck of an authentication bash! Here's the lineup of events you can tap into and make your own:

1. `Illuminate\Auth\Events\Registered` - The fresh-faced newcomer stumbling through the door, eager to mingle and get their dance card punched (a.k.a., registered)!
2. `Illuminate\Auth\Events\Attempting` - The wallflower making their way to the dance floor, nervously trying to find a partner (attempting to log in).
3. `Illuminate\Auth\Events\Authenticated` - The successful match made at last call (authenticated)! Congratulations, you two lovebirds!
4. `Illuminate\Auth\Events\Login` - The grand entrance of our newly crowned king and queen of the dance floor (logging in).
5. `Illuminate\Auth\Events\Failed` - Sorry buddy, looks like your moves just didn't quite cut it tonight (failed to log in).
6. `Illuminate\Auth\Events\Validated` - The security guard checking IDs at the door, making sure everyone is who they say they are (verifying identities).
7. `Illuminate\Auth\Events\Verified` - The VIP guest list coordinator verifying their RSVPs and giving the green light (verifying emails).
8. `Illuminate\Auth\Events\Logout` - One too many drinks, time to call it a night and head home (logging out).
9. `Illuminate\Auth\Events\CurrentDeviceLogout` - A quick goodbye at the exit, leaving behind some memories (logout from current device).
10. `Illuminate\Auth\Events\OtherDeviceLogout` - The unexpected booty call text at 3 AM, confirming your worst fears (someone else logged out from another device).
11. `Illuminate\Auth\Events\Lockout` - Security getting a little too tight for comfort (locked out after too many failed attempts).
12. `Illuminate\Auth\Events\PasswordReset` - The wake-up call the morning after, when you can't quite remember what happened last night (password reset).
13. `Illuminate\Auth\Events\PasswordResetLinkSent` - The text message from a concerned friend offering help (password reset link sent).