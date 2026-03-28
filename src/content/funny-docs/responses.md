 # The Dance of Responses

## Stepping onto the Stage (Creating Responses)

### Dressing Up Your Steps (Attaching Headers to Responses)
Here's where you put on your best manners. Add some etiquette to your replies with custom headers!

### Baking Cookies for Later (Attaching Cookies to Responses)
Don't forget the biscuits! Store those tasty tidbits of user data securely in cookies, just in case they come back for more later.

### Keeping Your Secrets Safe (Cookies and Encryption)
A cookie jar with a lock? Yes, please! Encrypt your cookies to ensure that only you and your users can decipher the secrets.

<a name="redirects"></a>
## Changing Direction (Redirects)

### Following Signposts (Redirecting to Named Routes)
Navigate through your application like a seasoned traveler, following the well-marked routes you've set up with names.

### Switching Tracks (Redirecting to Controller Actions)
Sometimes, you might find yourself needing to jump to a different song in the middle of your performance. Redirect users to other controller actions without missing a beat!

### Pointing Towards a Different Domain (Redirecting to External Domains)
When the show must go on somewhere else, smoothly redirect your users to external domains with ease.

### Leaving Mementos (Redirecting With Flashed Session Data)
Don't forget to leave a souvenir for your users before you send them on their way! Attach flashed session data to your redirects.

<a name="other-response-types"></a>
## More Than Just Dance Moves (Other Response Types)

### The Main Act: View Responses
For the grand performance, serve up beautiful views that leave your users spellbound!

### Behind the Scenes: JSON Responses
When you need a more technical discussion, switch to JSON. It may be a little dry, but it gets the job done.

### Show Handouts: File Downloads
Got some documents or files to share? Offer them as handy downloads for your users to take away!

### Merchandise Stall: File Responses
Selling some digital goods? Make it easy for your customers to pick up their purchases with file responses.

<a name="streamed-responses"></a>
## Live Performances (Streamed Responses)

### Listening Closely (Consuming Streamed Responses)
Tune in to real-time data streams and listen for the latest updates from your users or other sources.

### Jamming with JSON (Streamed JSON Responses)
Get into a groove with live, streaming JSON responses that keep you in the loop.

### Singing Together (Event Streams)
Belt out the harmonies alongside users as they contribute to an event stream of real-time updates.

### Audiences on Demand (Streamed Downloads)
Serve up your streams as downloadable files so that users can catch up when it's convenient for them.

<a name="response-macros"></a>
## Encores and Callbacks (Response Macros)

### Custom Dance Moves (Custom Response Macros)
Add some personal flair to your responses with custom macros that you can reuse whenever you want!

 Ahoy there, code swashbucklers! Fasten your seatbelts for a whirlwind tour of Laravel's Response Creation. You know, the lifeblood that keeps our web applications from turning into a shipwreck of HTTP errors.

<h3><a href="#strings-arrays">Strings and Arrays</a></h3>

First off, let's hoist the sails on creating simple responses using strings and arrays. This is as easy as walking the plank with one eye shut!

```php
return 'Greetings from Laravel'; // Simple String Response

$data = ['greeting' => 'Hello', 'name' => 'Captain'];
return $data; // Array Response
```

In these examples, Laravel will automatically convert the response into the appropriate HTTP status code and content-type. So if you're serving a string, it'll be treated as plain text, and an array? Well, that's JSON by default, matey!

<h3>Redirects</h3>

But what about when your Captain needs to change course? Fear not, for Laravel has a nifty feature known as Redirects. Just give 'em the `redirect()` function and let it steer you right.

```php
return redirect('/new-route'); // Redirect the user to '/new-route'
```

With this, your users will be whisked away like stowaways on a galleon, never to see the original route again! Or until they refresh their browsers, anyway.

<h3>View Composers</h3>

Lastly, let's delve into View Composers—the secret potion that keeps your templates looking shipshape. These magical helpers allow you to bind data to a view before it's served to the user.

```php
use Illuminate\View\View;

class GreetingComposer {
    public function compose(View $view) {
        $view->with('greeting', 'Ahoy there!');
    }
}
```

Register your View Composer with Laravel's service container, and it will automatically inject data into any view you specify. So now when ye hearties set foot on the good ship Laravel, they'll be greeted with a cheerful "Ahoy there!"!

So there you have it—Response Creation in Laravel. With these tools at your disposal, your web applications will sail smoothly through even the stormiest seas of front-end development. Yarr, matey!

 Alrighty, let's get this Laravel party started! 🎉

#### Strings and Arrays: The Lifeblood of Your App! 🍰

Every route and controller in our fabulous Laravel app needs to dish out something tasty for the user's browser to munch on. Fear not, dear developer, because Laravel is a culinary master, whipping up responses like a pro! 👨‍🍳

The most straightforward response you can serve up is a string. Just imagine serving a simple "Hello World" to your eager guests without breaking a sweat! The framework will magically transform the humble string into a delectable HTTP response:

```php
Route::get('/', function () {
    return 'Bonjour Monde'; // Yes, we're friendly here 🤗
});
```

But wait, there's more! You can also serve up arrays and transform them into yummy JSON responses. Here's a quick recipe for a tasty [1, 2, 3] treat:

```php
Route::get('/', function () {
    return [1, 2, 3];
});
```

Now, here's a fun fact you can impress your coding pals with! You can also serve up those succulent Eloquent collections right from your routes or controllers. The framework will transform them into scrumptious JSON responses without batting an eye! So go ahead, give it a whirl! 🍖🥔🧁

<a name="response-objects"></a>
P.S. Don't forget to top off your JSON responses with some sweet headers or cookies if you fancy! 😉🎂🍰

 Ahoy there, Captain! Steer clear of those booooring simple strings and arrays in your Laravel voyage. Instead, hoist the sails high with fancy `Illuminate\Http\Response` instances or swashbuckling [views](/docs/{{version}}/views)!

Why settle for the plain vanilla response when you can customize its HTTP status code and headers like a true maestro? A `Response` instance, being the offspring of the noble `Symfony\Component\HttpFoundation\Response` class, comes armed with a veritable arsenal of methods for constructing dazzling HTTP responses:

```php
Route::get('/home', function () {
    return response('Hello World', 200) // Hoist the Jolly Roger, matey!
        ->header('Content-Type', 'text/plain'); // Don't forget to set sail with the right headers!
});
```

Don't let the old sea dogs at your port scoff at your lack of swagger; show them the power of a well-crafted Laravel response! 🌊🐚🚀

 Oh, the joys of Laravel! Let's dive into Eloquent Models and Collections - the dynamic duo that'll make your database dance like a pop star at Coachella! 🎶

You can casually return these models and collections straight from your routes and controllers, without breaking a sweat. Laravel, being the considerate plus-one, will transform them into swanky JSON responses, all while respecting the model's hidden attributes (think Clark Kent changing in a phone booth). 🦸‍♂️

```php
Use App\Models\User; // We're getting fancy with our model here!

Route::get('/user/{id}', function (User $user) {
    return $user; // You've just served a delicious JSON response, no biggie!
});
```

Now, if you feel like spicing things up, attach some headers to your responses. It's a bit like giving your models and collections a fancy dinner jacket before the red carpet event. 🤵👔

<a name="attaching-headers-to-responses"></a>
*For those who can't resist a little drama:*

```php
Route::get('/user/{id}', function (User $user) {
    return response($user, 200)
        ->header('Content-Type', 'application/json')
        ->header('Access-Control-Allow-Origin', '*'); // We're opening the doors to the world!
});
```

Now that you know how to charm your JSON responses, go forth and conquer the digital dance floor with Eloquent Models and Collections! 🎉💃🕺

 Alright, buckle up, coding cowboys and codettes! Let's dive into the wild west of Laravel responses, where every outgoing communication is as stylish as a sheriff's badge and as vital as a six-shooter's bullet.

First off, remember that most response methods are as chainable as an old-timey revolver—you can fire away with a flurry of modifications before sending it back to the user. For instance, you can use the `header` method to slap on a whole saloon's worth of headers to your response:

```php
return response($content)
    ->slapOnSomeHeaders('Content-Type', $type)
    ->stickAHeader('X-Header-One', 'Header Value')
    ->tackUpAnother('X-Header-Two', 'Header Value');
```

Or, you can go all out and use the `withHeaders` method to round up a whole posse of headers:

```php
return response($content)
    ->corralSomeHeaders([
        'Content-Type' => $type,
        'X-Header-One' => 'Header Value',
        'X-Header-Two' => 'Header Value',
    ]);
```

Now, if you want to rustle up some trouble (i.e., remove specific headers), you can use the `withoutHeader` method:

```php
return response($content)->kickOut('X-Debug');

return response($content)->clearOut(['X-Debug', 'X-Powered-By']);
```

And there you have it, cowboy! You're now a Laravel headers wrangler extraordinaire. Saddle up and ride on to the next coding challenge!

 Ah, the Cache Control Middleware! It's like the bouncer of your web application, but instead of keeping out rowdy patrons, it keeps out stale data and serves up fresh digital drinks (content) all day long.

Laravel has this super-cool bouncer named `cache.headers` that can set the `Cache-Control` header for a whole posse of routes. To give the orders, you'll need to use the "snake case" equivalent of your favorite cache directive, and make sure to separate 'em with semicolons like a good partygoer should.

Now, if you fancy yourself as the life of the party (ETag), you can specify it in your list of directives. The response content will automatically get whizzed up into an MD5 hash and that'll be your ETag identifier. So now when you ask "who wants another drink?", Laravel knows exactly which content to serve!

```php
Route::middleware('cache.headers:public;max_age=30;s_maxage=300;stale_while_revalidate=600;etag')->group(function () {
    Route::get('/privacy', function () {
        // ...
    });

    Route::get('/terms', function () {
        // ...
    });
});
```

Now that your web application has a proper bouncer, it'll serve up fresh content like a well-oiled machine. So kick back, relax, and let Laravel take care of the rest! 🥳🎉💃️

 ### Cookie Dough for Responses (Yeah, we went there!)

Alrighty, let's get our digital bakery up and running! In this delightful little Laravel world of ours, you can whip up a tasty cookie to go with your outgoing `Illuminate\Http\Response` goodie box using the `cookie` method. Just pop in the name, value, and expiration time (in minutes) it should last:

```php
return response('Hello World')->withCookie(
    'name', 'value', $minutes
);
```

The `cookie` method isn't a picky eater either! It also accepts some lesser-used ingredients that are just as important for your cookie's health as the basics. Think of these as optional sprinkles to jazz up your cookie creation:

```php
return response('Hello World')->withCookie(
    'name', 'value', $minutes, $path, $domain, $secure, $httpOnly
);
```

Ever found yourself baking a cookie but forgot to preheat the oven? No worries! If you haven't baked up your response yet, you can use the `Cookie` facade to "queue" cookies, ready to be attached to your response when it's finally out of the Laravel oven:

```php
use Illuminate\Support\Facades\Cookie;

Cookie::queue('name', 'value', $minutes);
```

<a name="generating-cookie-instances"></a>
Now, get ready to whip up some digital delicacies with these fun and helpful cookie recipes! (Bon appétit!)

 Alright, let's get this party started! You don't need a sugar daddy to bake some cookies in Laravel. If you're yearning for a `Symfony\Component\HttpFoundation\Cookie` treat that can be attached to a response later on, look no further than our global `cookie` helper. It's like the best friend you never knew you had! This cookie won't make an unsolicited appearance at your client's house party unless it's invited (attached to a response instance).

```php
$cookie = cookie('name', 'value', $minutes); // Name your cookie, assign its value and specify the number of minutes it should last.

return response('Hello World')->cookie($cookie); // Then, introduce your cookie to the world by attaching it to a response.
```

And remember, if you want to make those cookies disappear before their time (or yours), check out our guide on "Early Bird Cookies"... errr... "Expiring Cookies Early". (jump to <a href="#expiring-cookies-early">Expiring Cookies Early</a>) 🐥🌞

Happy coding, you cookie monster! 😉🍪

 Ah, my dear web development enthusiasts! Let us embark on an amusing yet informative journey through the fascinating world of Laravel cookies. Yes, those digital morsels that your users scarf down with every browser visit, leaving a trail of session data crumbs behind them. But fear not, for we're about to teach you how to make those cookies disappear in a poof of code!

First off, you might find yourself in a situation where you need to eviscerate one of these digital treats. Fret not, for Laravel has provided us with the `withoutCookie` method, a magical spell that makes cookies vanish into thin air. Here's how to cast it:

```php
return response('Hello World')->withoutCookie('name');
```

But what if you don't have an outgoing response at your disposal? Fear not, for the `Cookie` facade comes to our rescue with its `expire` method! This nifty little tool allows us to make cookies disappear from the face of the digital earth:

```php
Cookie::expire('name');
```

So, there you have it, dear friends! Now you know how to make those pesky cookies vanish into the ether. But remember, with great power comes great responsibility, so use these powers wisely! 🥄🍪💥

 ### Cookie Monsters and Top-Secret Recipes

By the magical powers of the `Illuminate\Cookie\Middleware\EncryptCookies` spell, all cookies baked by Laravel are not only encrypted but also signed, ensuring they can't be nibbled on or read by the ravenous client. But if you're feeling a bit rebellious and want to let loose some unencrypted cookies for your application, we got you covered! Just sprinkle a dash of the `encryptCookies` charm in your application's `bootstrap/app.php` file:

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->encryptCookies(except: [
        'cookie_name',
    ]);
})
```

> [!ATTENTION]
> Remember, cookie encryption is the culinary equivalent of locking your kitchen cupboard – it keeps those pesky clients from helping themselves to your secret ingredients. Disabling it is like inviting them to a free-for-all buffet with all access to your top-secret recipes!

<a name="redirects"></a>

 Alright, let's navigate through the wild world of web redirections, shall we? In Laravel land, we've got some nifty tools to send your users on a digital adventure without making them feel lost (or like they're stuck in traffic). Enter the `Illuminate\Http\RedirectResponse` class – think of it as your friendly GPS guiding you through code-y roads.

Now, there are several ways to summon this magical RedirectResponse instance. The easiest method is to harness the global `redirect` helper (think of it as a trusty compass pointing you in the right direction). Here's an example:

```php
Route::get('/dashboard', function () {
    return redirect('/home/dashboard'); // off we go!
});
```

But wait, there's more! Sometimes life takes us back a notch – just like when your cat knocks over the milk jug during a form submission. Fear not! The global `back` helper function has got your back (pun intended). Simply use it to whisk users away to their previous destination:

```php
Route::post('/user/profile', function () {
    // Validate the request...

    return back()->withInput(); // "You're going back, kid!" – Darth Vader style
});
```

Now, let's talk about redirecting to named routes. In a nutshell, this is like having a secret map stashed away in your pocket (just pretend we're still talking about code). To uncover the path, simply use the `redirect` helper with a named route:

```php
Route::get('/secret-location', function () {
    return redirect()->route('dashboard'); // unveil the secret!
});
```

And don't forget to keep your middleware group up-to-date, especially when using the `back` helper – we wouldn't want you getting lost in the woods now, would we? ;)

 Alrighty, let's dive into the world of Laravel route redirection! 🎉🎈

When you summon the `redirect` helper like a magic wand without any arguments, you're bestowing upon yourself an enchanted instance of `Illuminate\Routing\Redirector`. This powerful entity allows you to call forth all manner of methods from its mystical realm. For instance, if you yearn to conjure up a `RedirectResponse` to a named route, you can employ the arcane incantation:

```php
return redirect()->route('login'); 🎩✨
```

But what if your route is adorned with parameters? Fear not, for the `route` method eagerly accepts them as its second argument:

```php
// Summoning a `RedirectResponse` for the URI /profile/{id}

return redirect()->route('profile', ['id' => 1]); 🧙‍♂️🔮
```

Now, let's delve into the art of populating parameters via Eloquent models. It's akin to summoning forth a minion from the depths of your database to aid you on your quest for the perfect redirect! 👾🔩

```php
// Imagine we have an User model and user with id=2
$user = App\Models\User::find(2);

return redirect()->route('profile', ['id' => $user->id]); 🐲🛡️
```

With this enchanting knowledge at your disposal, you can now weave the web of redirections in Laravel like a true sorcerer! 🧙‍♂️🔮✨🎈🚀

 Alright, buckle up, code cowboys and codettes! Let's dive into the wild world of Eloquent Models populating parameters like a pro (or, y'know, as close to one as we can get).

First off, if you find yourself in a situation where you're pointing your browser towards a route with an "ID" parameter and that ID needs to be filled from an Eloquent model, fear not! You can simply pass the model itself, and Laravel will magically extract the ID for ya:

```php
// You've got yourself a /profile/{id} route, partner.

return redirect()->route('profile', [$user]);
```

Now, if you're feeling extra fancy and want to customize what goes into that route parameter like a true cowboy/cowgirl, there are two ways to do it:

1. You can specify the column in your route definition (`/profile/{id:slug}`). This is like telling Laravel, "Hey buddy, when you see {id}, swap it out with whatever's in my model's slug column."
2. Or, if you want full control, you can override the `getRouteKey` method on your Eloquent model:

```php
/**
 * Get the value of the model's route key.
 */
public function getRouteKey(): mixed
{
    return $this->slug;
}
```

So there you have it! You're now armed with the knowledge to redirect like a boss, Laravel-style. Happy coding, partners! 🤠

 ### Channeling Inner Teleportation to Controller Actions! 🚀

Ever felt like you're a Jedi master, just *wishing* yourself across the galaxy of your application? Well, that's exactly what we're about to achieve - but with PHP magic instead of lightsabers!

In this section, we'll learn how to teleport (or redirect) to [controller actions](/docs/{{version}}/controllers), because who needs walking when you can warp drive? 

To conjure up some controller action redirections, simply summon the `action` method and cast it with your chosen controller and action name. Here's a spell to get you started:

```php
use App\Http\Controllers\UserController;

// Summon the UserController index action! 🌟
return redirect()->action([UserController::class, 'index']);
```

But what if your controller route requires parameters? No problem, just append them as a secret ingredient (the second argument) to your `action` spell:

```php
// Cast the UserController profile action with an ID parameter of 1! 🔮
return redirect()->action(
    [UserController::class, 'profile'], ['id' => 1]
);
```

<a name="redirecting-external-domains"></a>
Now that you've mastered controller redirections, the universe is your oyster! (Or at least, your Laravel app is.) Happy coding, and may the force be with you! 🚀💖✨

 ### Zapping Off to the Internet Wild West!

Ahoy there, adventurous coder! Sometimes you might find yourself in a situation where you need to escape your cozy Laravel fort and venture off to the vast expanse of the internet. Fear not, for we've got just the tool to help you embark on this daring mission - the `away` method!

Imagine you're a cowboy, riding off into the sunset, but instead of a horse, you're hitching a ride on a RedirectResponse! Just replace your trusty steed with this magical method and off you go to Google Land (or any other domain you fancy)!

```php
return redirect()->away('https://www.google.com');
```

Now, that's what we call a code-savvy saloon sprint! No need for additional URL encoding, validation, or verification - the `away` method takes care of all that wild west grunt work for you. So pack your six-shooter and let's ride! 🌵🚀🕵️‍♂️

 ### Spinning the Web of Redirection with some Flashy Session Data! 🕸️🎉

In the thrilling world of Laravel, we often find ourselves needing to redirect to a swanky new URL and flash some data into the session - usually after performing a superhero-like action, like saving the planet (or updating a user profile, if you prefer). To make our lives easier, we can create a dazzling `RedirectResponse` instance and flash data to the session in one smooth, fluent method chain - just like a ninja slicing through an onion! 🥕

```php
Route::post('/user/profile', function () {
    // ... save the planet (or update user profile)

    return redirect('/dashboard')->with('status', 'Profile updated!');
});
```

Once the user has been whisked away, we can proudly display our flashed message from the session, using the magical [Blade syntax](/docs/{{version}}/blade):

```blade
@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }} 🥳🎉
    </div>
@endif
```

And there you have it! A slick redirect and some flashed session data, all wrapped up in a charmingly humorous package. Now go forth and conquer the web with your newfound Laravel ninja skills! 💥✨

 Ahoy there, coder! Dancing on the precipice of Laravel's magnificent redirection capabilities? Fear not, for we've got you covered!

##### Sending Users on a Redirect Safari

Ever found yourself in a pickle where your user encounters a validation error, leaving them stranded and dumbfounded on the web? Worry no more, for `RedirectResponse` is here to save the day with its trusty sidekick: the `withInput` method!

This nifty little helper enables you to whisk away your user to a new location, all while preserving their input data in the session. It's like giving them a map and compass, so they can find their way back to where they left off.

```php
return redirect()->back()->withInput();
```

Now, you might be wondering: "How do I access this magical input data during the next request?" Worry not, dear friend! Simply [navigate through our docs](/docs/{{version}}/requests#retrieving-old-input) and learn how to retrieve your user's long lost input data like a pro! Once you've got it in hand, you can repopulate their form with ease.

Ain't that a swell way to keep things tidy? Happy coding!

 Ahoy there, code pirates! Let's dive into the swashbuckling world of Laravel response types, shall we? 🏴‍☠️

First off, meet your new bestie: the `response` helper. This versatile fellow can whip up all sorts of response instances, from simple text to complex HTML pages. When you call `response` without any arguments, it's like ordering a mystery box from a pirate ship - you never know what treasure you'll find inside! 🥘

Inside this mystery box is an implementation of the illustrious `Illuminate\Contracts\Routing\ResponseFactory` [contract](/docs/{{version}}/contracts). This contract, much like a pirate's code, is a set of rules that everyone agrees to follow. But instead of rules about parrots and peg legs, it provides several handy methods for crafting responses, making your life as a coder an easier one. 🏴‍☠️🔧

Now, let's hoist the anchor and set sail for `view` responses! These are the HTML pages that make up the Treasure Island we call our web application. To create a `view` response, you can use the `with()` method on your trusty `response` helper. Here's an example:

```php
$response = response('Hello, World!', 200);
// This will return a response with the content 'Hello, World!' and HTTP status code 200 (OK)
```

In this case, `response('Hello, World!', 200)` is like raising the Jolly Roger and shouting "Ahoy!" to all who sail the web. But beware, mateys! Remember to include the HTTP status code, or you'll be sending out a confusing message that's sure to leave people scratching their heads! 🧐

So there you have it, me hearties! Now you know how to create other response types in Laravel, and maybe even impress your fellow coders with your newfound pirate-like skills. Arrrr! Happy coding! 🏴‍☠️💻

 ### Party Time, Laravel Style! 🎉🎈

If you're feeling like a DJ in charge of spinning the right tunes (or HTTP status codes and headers), but also want to serve up a fresh view as your main act, the `view` method is your VIP backstage pass! 😎🎟️

```php
return response()
    ->view('hello', $data, 200) // Here's our view, but remember: the crowd's patience only lasts until a 200 OK!
    ->header('Content-Type', $type); // Don't forget to set the right costume for your performance - I mean, Content Type header!
```

But hey, if you don't feel like mixing up a custom status code or adding some extra flair with custom headers, no worries! Just let the global `view` helper function do all the work for you. 🤹‍♂️🎩

<a name="json-responses"></a>
Now, if you're looking to serve JSON instead of a view and still want to keep the party going, look no further than our next section! 🕺️💃️

 ### Jamboree with JSON! 🎧🎵

Gather 'round, coding cowpokes! If you're hankering to serve up some tasty JSON data, you've come to the right corral. The `json` method is your trusty steed in this wild west of web development. Saddle up and listen close!

First off, the `json` method gives your response a fancy hat—er, sets the `Content-Type` header as `application/json`. But that ain't all! It also lassos your array data with the `json_encode` PHP function for easy digestion. Here's how you rope it in:

```php
return response()->json([
    'name' => 'Abigail',
    'state' => 'CA',
]);
```

Now, if you're itchin' to create a JSONP response (think: JSON with a side of JavaScript), then you can wrap your head around it using the `json` method alongside the `withCallback` method. This makes for one heck of a harmonious duet:

```php
return response()
    ->json(['name' => 'Abigail', 'state' => 'CA'])
    ->withCallback($request->input('callback'));
```

And don't forget to check out our guide on [File Downloads](#file-downloads) if you fancy wrangling files like a pro! 🤠🌵

 Alrighty then! Let's dive into the world of digital goodie bags with Laravel's `download` method!

This magical function creates a response that compels your browser to swoop down and grab the file located at the specified path like a modern-day Robin Hood (but without the outlaw part). Here's how you summon it:

```php
return response()->download($pathToFile);
```

But wait, there's more! If you fancy giving your file a catchy name instead of the drab original, simply toss in the second argument like so:

```php
return response()->download($pathToFile, 'AwesomeFile.pdf');
```

And if you're feeling extra, you can even pass an array of HTTP headers as the third argument to really dress up your digital package:

```php
$headers = [
    'Content-Type' => 'application/pdf',
];
return response()->download($pathToFile, 'AwesomeFile.pdf', $headers);
```

Now, hold onto your socks because here comes the fine print! The Symfony HttpFoundation, the file download police, demands that the file you're swiping has an ASCII name, so make sure to rename those pesky non-ASCII files beforehand!

Happy downloading and remember: with great power comes great responsibility! 🚀🌍💻🎉

 Ahoy there, brave coder! Buckle up for a whimsical journey through Laravel's File Responses! 🌈🎶

Now, if you've ever been in the need to serve a file, like an image or a PDF, directly to your user's browser without causing a download meltdown, you're in luck! Enter the mighty `file` method! 🦸‍♂️💪

To summon this magical unicorn, simply provide it with the absolute path to your cherished file as its first argument:

```php
return response()->file($pathToFile); // Just give it a shout and off it goes!
```

But wait, there's more! If you feel the urge to customize headers like a modern-day knight with a shiny helmet of metadata, go ahead and pass along an array of headers as its second argument:

```php
return response()->file($pathToFile, $headers); // Headers hath thou asked? Headers thou shall receive!
```

So there you have it, folks! Now you can serve files like a seasoned maestro at a five-star restaurant – but in code, of course. 🥘🎶🚀

 ## Avalanche of Awesomeness: Streamed Responses!

Are you dealing with data as big as the Grand Canyon and memory issues like a hungry hippo at a buffet? Fear not, Laravel's here to help with Streamed Responses! By sending data piece by delicious piece, your server can perform like Usain Bolt on steroids.

```php
Route::get('/stream', function () {
    return response()->stream(function () {
        foreach (['developer', 'admin'] as $title) {
            echo $title; // Shout it out loud!
            ob_flush();
            flush();
            sleep(2); // Simulate that awkward pause...
        }
    }, 200, ['X-Accel-Buffering' => 'no']);
});
```

Want to kick back and relax while Laravel takes care of the buffet line? If your closure returns a [Generator](https://www.php.net/manual/en/language.generators.overview.php), Laravel will make sure the output is served one tasty morsel at a time, and even disable Nginx's strict 'eat-all-you-can-buffet' policy!

```php
Route::post('/chat', function () {
    return response()->stream(function () {
        $stream = OpenAI::client()->chat()->createStreamed(...);

        foreach ($stream as $answer) {
            yield $answer->choices[0]; // Serve up that brain food!
        }
    });
});
```

Now, go on and let Laravel handle the data feast while you take a seat and enjoy the show! 🎉🥂🍰

 Alright, buckle up folks! Let's dive into the whirlwind world of streamed responses with Laravel. First things first, you gotta grab a package like your favorite flavor of ice cream - React, Vue, or Svelte. Just yell "npm install @laravel/stream-REACTICECREAM" and voila!

Now, to consume the event stream, it's time to whip out the `useStream` magic wand. Point it at your stream URL, and *poof*, the hook will work its charm, updating your data with a tasty treat of content from your Laravel app as soon as it's ready.

Want to send some tasty messages back? No problem! Just use the `send` function to serve up your message with style. The active connection to the stream will be canceled before serving up the new data, and all requests are served in JSON POST requests - just like a fancy restaurant!

> 🚨 WARNING: Since `useStream` is a magical affair, it makes a POST request to your application. It's important to have a valid CSRF token, which can be easily provided via a meta tag in your application layout's head. Don't forget to check out our documentation on CSRF protection! 🚨

You can customize the stream consumption behavior with some options if you're feeling fancy. Just like adding sprinkles or whipped cream to your ice cream, these options let you tailor the hook to your needs.

`onResponse`, `onData`, `onCancel`, `onFinish`, and `onError` are your new best friends for handling events as they occur during stream consumption. You can even pass an initial payload to the stream using the `initialInput` option if you want to kick things off with a bang!

Need to cancel a stream manually? No problem! The `cancel` method is here to help. Just hit the cancel button, and your stream will be politely escorted out the door.

Lastly, keep in mind that each use of `useStream` generates a unique ID for the stream, which helps keep track when you're consuming the same stream from multiple components. You can even provide your own ID if you want to take control!

So there you have it - streamed responses made delicious and easy with Laravel! Now go forth and enjoy the sweet symphony of real-time data! 🎉🍦

 ### Jerky JSON Jukebox

Who needs a playlist when you've got a never-ending buffet of JSON data? If your dataset is as colossal as the Sistine Chapel's ceiling, you'll want to tap into our `streamJson` method. It's like having a personal sommelier for your browser, serving up JSON bites that even JavaScript can savor without a hiccup:

```php
use App\Models\User;

Route::get('/users.json', function () {
    return response()->streamJson([
        'users' => User::cursor(),
    ]);
});
```

The `useJsonStream` hook is our secret sauce, the cherry on top of the sundae—it's practically identical to the [useStream hook](#chowing-down-on-streamed-responses) with a dash of JSON parsing sprinkled in once it's had its fill:

```tsx tab=React Jamboree
import { useJsonStream } from "@laravel/stream-react";

type User = {
    id: number;
    name: string;
    email: string;
};

function App() {
    const { data, sendSnacks } = useJsonStream<{ users: User[] }>("users");

    const grabUsers = () => {
        sendSnacks({
            query: "taylor",
        });
    };

    return (
        <div>
            <ul>
                {data?.users.map((user) => (
                    <li key={user.id}>
                        {user.id}: {user.name} <br /> (Pass the crackers, please!)
                    </li>
                ))}
            </ul>
            <button onClick={grabUsers}>Grab Users</button>
        </div>
    );
}
```

```vue tab=Vue Vegas
<script setup lang="ts">
import { useJsonStream } from "@laravel/stream-vue";

type User = {
    id: number;
    name: string;
    email: string;
};

const { data, sendSnacks } = useJsonStream<{ users: User[] }>("users");

const getUsers = () => {
    sendSnacks({
        query: "taylor",
    });
};
</script>

<template>
    <div>
        <ul>
            <li v-for="user in data?.users" :key="user.id">
                {{ user.id }}: {{ user.name }} <br /> (More cheese, please!)
            </li>
        </ul>
        <button @click="getUsers">Get Users</button>
    </div>
</template>
```

```svelte tab=Svelte Spaghetti
<script>
import { useJsonStream } from "@laravel/stream-svelte";

const stream = useJsonStream("users");

function feedMe() {
    stream.sendSnacks({
        query: "taylor",
    });
}
</script>

<div>
    <ul>
        {#if $stream.data?.users}
            {#each $stream.data.users as user (user.id)}
                <li>{user.id}: {user.name}</li>
            {/each}
        {/if}
    </ul>
    <button onclick={feedMe}>Feed Me More Users</button>
</div>
```

<a name="chowing-down-on-streamed-responses"></a>
But if you're looking for a more buffet-style approach, the [useStream hook](#event-streams) is just right for you:

```php
use App\Models\User;

Route::get('/users', function () {
    return response()->stream(function ($response) use ($response) {
        $user = User::findOrFail(1);
        $response->writeJson($user);
        sleep(5); // Simulate delay
    });
});
```

With this, you can serve your JSON data in a never-ending buffet for those insatiable JavaScript fans! Just don't forget the cocktail napkins—things can get messy.

 ### Server-Sent Silliness (SSE)! 🚀🌮

Ready to dive into the world of server-sent events? Fear not, for the `eventStream` method is here to guide you through this delightful dance of data streaming! 🕺️

Think of it as a jovial juggler tossing responses back and forth between your application and the browser. And guess what? You get to be the star performer! 🌟

```php
Route::get('/chat', function () {
    return response()->eventStream(function () {
        // Imagine this as our clown juggling the chat balloons 🎈
        $stream = OpenAI::client()->chat()->createStreamed(...);

        foreach ($stream as $response) {
            // The clown tosses each response to the browser! 🎉
            yield $response->choices[0];
        }
    });
});
```

Want to give your events fun names? Why not! You can create custom event names by using the `StreamedEvent` class:

```php
use Illuminate\Http\StreamedEvent;

// Now our clown is saying "Updates on deck!" as he tosses each response 🎭
yield new StreamedEvent(
    event: 'update', // The new fun name!
    data: $response->choices[0],
);
```

Now, grab your popcorn and enjoy the show! Remember, it's all about keeping things entertaining while delivering those responses! 🍿🎉

 Alrighty, let's dive into the wild world of Laravel event streams, shall we? Think of it as a non-stop party line where your Laravel application can serve up the scoop on all the latest happenings. To join this virtual soiree, first, you'll need to install one of our swanky packages:

```shell tab=React Party
npm install @laravel/stream-react
```

```shell tab=Vue Ball
npm install @laravel/stream-vue
```

```shell tab=Svelte Soiree
npm install @laravel/stream-svelte
```

Once you've got the groove going, it's time to tap into that event stream with our nifty `useEventStream` hook. Provide your stream URL, and this bad boy will keep the conversation flowing by automatically updating the `message` whenever a new tidbit drops from Laravel land:

```jsx tab=React Rave
import { useEventStream } from "@laravel/stream-react";

function Party() {
  const { message } = useEventStream("/chat");

  return <div>{message}</div>;
}
```

```vue tab=Vue Veil
<script setup lang="ts">
import { useEventStream } from "@laravel/stream-vue";

const { message } = useEventStream("/chat");
</script>

<template>
  <div>{{ message }}</div>
</template>
```

```svelte tab=Svelte Serenade
<script>
import { useEventStream } from "@laravel/stream-svelte";

const eventStream = useEventStream("/chat");
</script>

<div>{$eventStream.message}</div>
```

Now, if you fancy customizing the stream consumption behavior, you can pass an options object as the second argument to `useEventStream`. Here's what it looks like:

```jsx tab=React
import { useEventStream } from "@laravel/stream-react";

function Party() {
  const { message } = useEventStream("/stream", {
    eventName: "update",
    onMessage: (message) => {
      // ...
    },
    onError: (error) => {
      // ...
    },
    onComplete: () => {
      // ...
    },
    endSignal: "</stream>",
    glue: " ",
  });

  return <div>{message}</div>;
}
```

You can even get down and dirty with manually consuming event streams via an EventSource object. The `eventStream` method will send a `</stream>` update to the event stream when it's time to call it quits:

```js
const source = new EventSource('/chat');

source.addEventListener('update', (event) => {
    if (event.data === '</stream>') {
        source.close();

        return;
    }

    console.log(event.data);
});
```

Lastly, to customize the final event sent to the event stream, simply pass a `StreamedEvent` instance to the `endStreamWith` argument of the `eventStream` method:

```php
return response()->eventStream(function () {
    // ...
}, endStreamWith: new StreamedEvent(event: 'update', data: '</stream>'));
```

Happy partying, folks! 🎉🥳

 ### Space-Saving Superheroics: The Art of Streamed Downloads!

In the world of coding, clutter is our kryptonite. But fear not, caped crusaders of Laravel land! We've got a handy superpower just for you—Streamed Downloads! This power allows you to transform the stringy response of your favorite operation into a downloadable file without ever having to dirty your disk with those temporary files. Sounds like a dream, right? Well, let's dive into the nitty-gritty (but still fun) details!

To unleash this superpower, you can utilize the `streamDownload` method in scenarios where you'd rather not save the contents of your operation to disk. This method is like a magician's sleight of hand—it disappears all your worries about writing files! Here's a quick demonstration:

```php
use App\Services\GitHub;

return response()->streamDownload(function () {
    echo GitHub::api('repo')
        ->contents()
        ->readme('laravel', 'laravel')['contents'];
}, 'laravel-readme.md');
```

In this example, we're using the power of Streamed Downloads to grab the Readme file for Laravel from GitHub and save it as 'laravel-readme.md'. No more messy files cluttering up your workspace! Just clean, superheroic efficiency at its finest. 🎉🦸‍♂️

So there you have it—Streamed Downloads: the secret weapon in your Laravel toolbelt! Happy coding, and remember to always save the planet (and your disk space) one download at a time! 🚀🌍💾

 Hey there, coding cowboy! 🤠 If you're hankering to whip up some fancy custom responses for your Laravel trails, you can lasso the `macro` method on the trusty old `Response` facade. Now, this shindig usually calls for a gallop into the `boot` corral of one of yer application's [service providers](https://docs.laravel.com/{{version}}/providers), like the `App\Providers\AppServiceProvider`. Here's how you can break it down:

```php
<?php
namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Response::macro('caps', function (string $value) {
            return Response::make(strtoupper($value));
        });
    }
}
```

The `macro` wrangler takes a name and a closure as its cowpoke companions. When you're ready to rope in the custom response, give it a yell from a `ResponseFactory` or the `response` helper:

```php
return response()->caps('foo');
```

Ride 'em, cowboy! 🐎🤠