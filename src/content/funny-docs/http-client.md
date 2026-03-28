 # The Great Interweb Explorer: Laravel's HTTP Client

Welcome, web wanderers! Strap on your data diving gear and prepare to dive deep into the ocean of information with our trusty sidekick, The Great Interweb Explorer (aka Laravel's HTTP Client)!

<a name="making-requests"></a>
## Setting Sail: Making Requests

First things first, we gotta know how to ask for directions – I mean, make requests! Here's a crash course in all the essentials.

### Request Data: The What and Where of Your Quest

What you want and where it's hiding on the web are the fundamentals. Give us the lowdown, and we'll handle the rest!

### Headers: Dress for the Web Party

Headers help us blend in when visiting new websites – think of them as a digital tuxedo or ball gown. Need to bring extra baggage? No problemo! Headers can handle it.

### Authentication: Proving You're Not a Sneaky Imposter

Some sites are real sticklers for ID, and that's where authentication comes in handy. Show 'em your credentials and they'll let you in on all their secrets.

### Timeout: Don't Hang Around Forever!

We don't want to be rude, but if a site takes too long to answer, it's time to move on. Setting a timeout ensures we don't waste our precious time (and yours!) on slowpokes.

### Retries: Second Chances for the Web

Sometimes sites have bad days and need a do-over. With retries, we'll politely ask again if they're still not ready to chat.

### Error Handling: When Things Go South

Things may not always go as planned on the web, but fear not! With error handling, we can diagnose and deal with any unexpected hiccups that come our way.

### Guzzle Middleware: The Secret Weapon of the Web

It's like having a superpower for web requests – think Batman's utility belt, but for data! With customizable middleware at your disposal, you can conquer any online challenge.

### Guzzle Options: A Flexible Companion for Your Journey

Tailor our journey to fit your needs with a variety of options – it's like having a GPS that understands your every whim!

<a name="concurrent-requests"></a>
## Multitasking on the Web

Time is money, and we don't want to waste either! With concurrent requests, we can send out multiple queries simultaneously and get more done in less time.

### Request Pooling: Keeping Things Organized

Just like a well-stocked fridge, having too many items can lead to chaos. But with request pooling, we'll keep everything neatly sorted and efficient.

### Request Batching: Grouping Up for the Web

Sometimes it pays to travel in numbers! By batching requests together, we can save on web-traffic costs and make sure we don't leave any stone unturned.

<a name="macros"></a>
## Shortcuts for the Web Whizz

Who needs a remote control when you have macros? These handy shortcuts let you perform complex actions with just one click (or command, as it were). Master them, and you'll be ruling the web in no time!

<a name="testing"></a>
## Testing, Testing: 1-2-3

Before we dive headfirst into any adventure, it's crucial to check our gear. With Laravel's testing features, you can make sure everything is shipshape before setting sail on the web.

### Faking Responses: A Pretend Party for the Web

When we need a little practice or want to simulate different scenarios, fake responses are there to save the day. They let us test our code without actually sending out requests to the real web.

### Inspecting Requests: Under the Hood of the Web

Ever wondered what goes on behind the scenes when we make a request? With inspection tools at your disposal, you can peek under the hood and see for yourself!

### Preventing Stray Requests: No Lone Wolf Allowed

Avoid sending out unwanted requests with this helpful feature – it's like having a responsible pet sitter for your web queries.

<a name="events"></a>
## Listen Up! Web Events Await

Want to know when something exciting happens on the web? With event listeners, you can keep tabs on all the action and react accordingly. It's like being a superhero with super-hearing for the web!

 Alright, buckle up, web warriors! Let's dive into the whirlwind world of Laravel, where making web requests is as easy as ordering a pizza (without the cheese if you're vegan... or just lazy). But instead of pepperoni and mushrooms, we're dealing with HTTP requests to communicate with other intergalactic applications!

Laravel has wrapped its cosmic arms around the mighty Guzzle HTTP client - an API so powerful, it could make a supernova look like a firework display. With Laravel, you can harness this power to blast off HTTP requests faster than you can say "Alexa, play 'Space Oddity' by David Bowie".

But fear not, dear developer! Laravel's focus is on simplicity and user experience. It streamlines the most common use cases so you don't have to spend more time wrestling with code than a WWE superstar does with a 30-foot inflatable tube man. So, grab your laser gun controller (read: keyboard), strap yourself in, and let's navigate through the web galaxy together!

<a name="making-requests"></a>
Now that we've set the mood, it's time to get our hands dirty by making requests. But first, let me remind you of a very important rule: In space, no one can hear your API calls scream. So make sure they're perfect! 🚀

 Alright, let's dive into the world of making requests! In this Laravel playground, you'll find six superpowers – `head`, `get`, `post`, `put`, `patch`, and `delete` – all bestowed upon you by the mighty `Http` facade.

Let's start with the simplest of them all: summoning a basic `GET` request like a Jedi summoning a lightsaber!

```php
use Illuminate\Support\Facades\Http;

$response = Http::get('http://example.com');
```

The `get` method, like a magical wand, returns an instance of `Illuminate\Http\Client\Response`, filled with methods more bewitching than a Hogwarts potions class.

```php
$response->body() : string;         // The response's body in plain text
$response->json($key = null, $default = null) : mixed; // Decoded JSON data (or the default value if no json)
$response->object() : object;      // Converted object from the response body
$response->collect($key = null) : Illuminate\Support\Collection; // A collection of the response items
$response->resource() : resource;  // The response as a PHP resource (mainly for streams)
$response->status() : int;         // The HTTP status code
$response->successful() : bool;    // Whether the request was successful or not
$response->redirect(): bool;       // Whether the server redirected you to another page
$response->failed() : bool;        // If the request failed (not a success or redirection)
$response->clientError() : bool;   // If the error is a client-side issue (4xx status codes)
$response->header($header) : string;    // A specific header from the response
$response->headers() : array;         // All headers from the response as an associative array
```

The `Illuminate\Http\Client\Response` object is more than just a pretty face – it's also an ArrayAccess interface fan, letting you access JSON response data directly on the response!

```php
return Http::get('http://example.com/users/1')['name'];
```

Besides those methods, here are some additional tricks to check if the response has a specific status code:

```php
$response->ok() : bool;                  // 200 OK - The force is strong with this one
$response->created() : bool;             // 201 Created - A new resource has been born!
$response->accepted() : bool;            // 202 Accepted - Your request has been acknowledged, young padawan.
$response->noContent() : bool;           // 204 No Content - The server sent you nothing but a pat on the back.
$response->movedPermanently() : bool;    // 301 Moved Permanently - Prepare for some Star Trek-level teleportation!
$response->found() : bool;               // 302 Found - The server found the resource, but it's on a different server now.
$response->badRequest() : bool;          // 400 Bad Request - You messed up, kid. Try again.
$response->unauthorized() : bool;        // 401 Unauthorized - You don't have the required credentials to access this data.
$response->paymentRequired() : bool;     // 402 Payment Required - You owe us money! Pay up and try again!
$response->forbidden() : bool;           // 403 Forbidden - You shall not pass!
$response->notFound() : bool;            // 404 Not Found - The server can't find the resource you're looking for. Try a different search term, or maybe a lightsaber.
$response->requestTimeout() : bool;      // 408 Request Timeout - The server took too long to respond. Be more patient, or less demanding.
$response->conflict() : bool;            // 409 Conflict - There's already another resource with the same name. Choose a different name or battle it out.
$response->unprocessableEntity() : bool; // 422 Unprocessable Entity - The server understands your request, but it's unable to process it as is – revise and resubmit.
$response->tooManyRequests() : bool;     // 429 Too Many Requests - You're making too many requests in a short amount of time. Slow down or face the banhammer!
$response->serverError() : bool;         // 500 Internal Server Error - Something went wrong on the server. Contact your system administrator (or Jedi Master).
```

Now go forth and make those requests, young ones! May the Laravel be with you!

 Alright, let's get this show on the road! Laravel's HTTP client isn't just a dancing bear, it's also a clever URL-constructing machine. To accomplish this magical feat, we'll need to understand the [URI template specification](https://www.rfc-editor.org/rfc/rfc6570).

Think of URI templates as a secret recipe for generating delicious URLs. If you want to specify the ingredients (or parameters) for your secret recipe, simply use the `withUrlParameters` method:

```php
Http::withUrlParameters([
    'endpoint' => 'https://laravel.com', // The domain of our secret sauce
    'page' => 'docs', // The delicious main course (a.k.a. the content)
    'version' => '12.x', // The fancy topping, because who doesn't love a bit of flair?
    'topic' => 'validation', // The tantalizing theme to tie it all together
])->get('{+endpoint}/{page}/{version}/{topic}'); // Bake the URL using our secret recipe!
```

Just remember, when working with URI templates, it's important to maintain proper etiquette and avoid any kitchen disasters – especially in the realm of web development. Happy cooking, dear developer! 🍴🎨🎉

 Ahoy there, intrepid developer! Ever found yourself in a pickle, wanting to inspect an outgoing request before it sets sail into the vast ocean of the interwebs? Fear not, for I've got just the dinghy for your journey - the mighty `dd` method!

Now, if you find yourself hankering to dump the outgoing request instance before it leaves port and bring your script to a grinding halt, simply hoist the Jolly Roger (add) this dashing pirate (`dd`) method at the helm of your request definition:

```php
return Http::sailWithDreadfulDetermination()->get('http://example.com');
```

Remember, this seafaring technique will ensure that the good ship `request` is held fast and examined with a keen eye before it sets sail on its voyages of discovery! Arr matey, happy coding! 🐙🌴🏝️

 ### Data Deliveries, Laravel Style! 📨

Who doesn't love a good data delivery when sending `POST`, `PUT`, or `PATCH` requests, right? Well, these methods are like the UPS of the web world, ready to accept a package (array) as their second argument. By default, they wrap your gifts in a fancy `application/json` content type box:

```php
use Illuminate\Support\Facades\Http;

$package = [
    'name' => 'Steve', // You know, the guy who didn't want to miss out on the party.
    'role' => 'Network Administrator', // The one who keeps our digital house in order.
];

$delivery = Http::post('http://example.com/users', $package);
```

<a name="get-request-query-parameters"></a>
Now, if you're sending a `GET` request, things get a bit different. Instead of packages, we use query parameters, which are like invitations to a digital party! Each parameter should have a key and value, separated by an equals sign, all joined together with a question mark. Here's how:

```php
use Illuminate\Support\Facades\Http;

$invitation = '?name=Steve&role=Network%20Administrator';
$party = Http::get('http://example.com/users' . $invitation);
```

And there you have it! Now you're a data delivery specialist in Laravel land! 🎉🚀

 Alrighty then! Let's dive into the wild world of GET requests and query parameters, shall we?

First off, you can add some swanky extras to your URL like a hipster adding quinoa to a smoothie (just kidding, we're developers). You can either tack 'em on directly to the end of the URL or pass an array of key-value pairs as the second argument to the `get` method.

```php
// Sending GET request with query parameters
$response = Http::get('http://example.com/users', [
    'name' => 'Taylor', // Like telling your bartender your drink order
    'page' => 1          // ...or the page number you want in a book club
]);
```

But what if you need to make it more resilient than a gossip at a cocktail party? Enter the `withQueryParameters` method, which is like adding a sturdy cherry on top of your request sundae.

```php
// Sending GET request with query parameters and retry logic
Http::retry(3, 100) // Set retry attempts and time between retries
    ->withQueryParameters([
        'name' => 'Taylor',
        'page' => 1
    ]) // Add your query parameters here
    ->get('http://example.com/users'); // Finally, make the request!
```

Now that you know how to spice up your GET requests with some tasty query parameters, let's move on to more adventures in Laravel land!

 Ahoy there, coding cowboys and codelettes! Fancy sending some data using the good ol' `application/x-www-form-urlencoded`? Well buckle up, partner, 'cause we're about to take a wild ride through Laravel's dusty trails!

First off, you gotta remember that your horse (er, request) should be trained to understand the lingo. To do this, call upon the `asForm` method before setting out on your journey:

```php
$response = Http::asForm()->post('http://example.com/users', [
    'name' => 'Sara',
    'role' => 'Privacy Consultant',
]);
```

In this lasso-spinning example, our trusty steed (the `Http` facade) will trot off to the `example.com/users` corral, carrying a couple of gifts in its saddlebag:

1. The name 'Sara' - sounds like someone who could tame a wild mustang!
2. 'Privacy Consultant' - not sure what kind of cowboy she is, but with a name like that, she's bound to be a real trailblazer!

So there you have it, pilgrim! Just remember to keep your `application/x-www-form-urlencoded` requests neatly wrapped in the `asForm()` package when traveling through Laravel's Wild West. Happy codin', partner! 🤠🐴🚀

 Ahoy there, Laravel wranglers! Ever found yourself in a bind where you need to send a raw request body like a digital pirate hoisting the Jolly Roger? Fear not, for I've got ye covered with the mighty `withBody` method!

Just imagine you're about to shove a barrel of treasure overboard (your photo in this analogy), and you want the recipient to know exactly what they're getting. That's where `withBody` comes into play! Here's how it works:

```php
$response = Http::withBody(
    base64_encode($photo), 'image/jpeg' // Don't forget to tell them it's a jpeg, matey!
)->post('http://example.com/photo');
```

This code is as simple as a pirate's life: You're encoding your photo (treasure) with base64, then tossing it into the body of the request like a seasoned sea dog. With `withBody`, you can make requests that are as wild and untamed as the seven seas!

Now, if you thought that was impressive, wait till you hear about multi-part requests... but I'll save that for another day, matey!

 Ahoy there, code adventurers! Let's journey through the fascinating world of multi-part requests – a pirate's treasure trove for your Laravel apps. 🌴🏴‍☠️

Ever wanted to send files like ol' Long John Silver sent his letters? Well, prepare to be Captain Hooked with our trusty `attach` method! This shipshape function awaits your command before setting sail on your request. It accepts three arguements: the name of yer file, its actual contents (no rum this time), and (for added flair) a filename. If ye need more swashbuckling, there's even an optional fourth argument for headers associated with the file.

```php
$response = Http::setSail(
    'attachment', file_get_contents('swordfish.jpg'), 'swordfish.jpg', ['Content-Type' => 'image/jpeg']
)->post('http://treasure-isle.com/attachments');
```

Instead of passing the raw contents of a file, ye can pass a stream resource:

```php
$swordfish = fopen('swordfish.jpg', 'r');

$response = Http::setSail(
    'attachment', $swordfish, 'swordfish.jpg'
)->post('http://treasure-isle.com/attachments');
```

Yarr, now that yer files are shipshape and Bristol fashion, set sail for adventure! 🌴⚓️

 Alrighty, let's chat about headers like we're at a posh digital soiree! You can invite them to your Laravel request using the charmingly named `withHeaders` method. Picture it as introducing a new guest with their own quirky nickname and a secret handshake - but in code form.

```php
$response = Http::withHeaders([
    'X-First' => 'Foo McHeader', // We're really getting to know Foo here!
    'X-Second' => 'Bar Sock'      // And Bar seems like quite the sock enthusiast...
])->post('http://example.com/users', [
    'name' => 'Taylor',          // Taylor's here too, hanging with our new friends
]);
```

Now, if you're feeling particular about the kind of response your request deserves (and who wouldn't be?), you can use the `accept` method to let them know exactly what outfit they should wear.

```php
$response = Http::accept('application/json')->get('http://example.com/users');
```

For those times when you want to quickly dress your request in the trendiest possible attire, there's the `acceptJson` method: it's like saying, "Darling, we're expecting a sleek and stylish 'application/json' tonight!"

```php
$response = Http::acceptJson()->get('http://example.com/users');
```

Things can get a bit confusing with too many headers though, so if you want to start fresh or make a dramatic entrance, go ahead and use the `replaceHeaders` method. It's like asking your guest to change into that sequined number for the grand finale!

```php
$response = Http::withHeaders([
    'X-Original' => 'Foo McHeader', // Farewell, old friend...
])->replaceHeaders([
    'X-Replacement' => 'Bar Sock',  // ...and welcome, Bar Sock in sequins!
])->post('http://example.com/users', [
    'name' => 'Taylor',          // Taylor seems unfazed by our fashion crisis...
]);
```

Now that you're all caught up on headers, let's continue the party with authentication - but that's another tale for another time! 🥳

 Alright, let's embark on a whimsical journey through the enchanting world of Laravel authentication! Imagine you're not just coding, but conducting a secret mission with these methods as your trusty gadgets.

### Authentication (aka The Secret Agent's Toolkit)

When you need to slip past the digital bouncers, you can use the `withBasicAuth` and `withDigestAuth` methods as your VIP passes:

```php
// Basic authentication...
$response = Http::slipThroughSecurity('taylor@laravel.com', 'secret')->post(/* ... */);

// Digest authentication...
$response = Http::digitalFingerprint('taylor@laravel.com', 'secret')->post(/* ... */);
```

In our espionage tale, the `'taylor@laravel.com'` is your agent ID, and `'secret'` is the password they've been using since version 1 (we won't judge). These methods ensure you can bypass security checks like a pro, making those pesky servers think you're just another harmless web developer instead of an undercover coder!

<a name="bearer-tokens"></a>

But wait! There's more! If you prefer using bearer tokens to gain access (because who doesn't love a good access card?), here's how you can do it:

```php
// Bearer token authentication...
$token = 'the_secret_bearer_token';
$response = Http::accessGranted($token)->post(/* ... */);
```

Now, instead of a VIP pass or digital fingerprint, you'll be flashing a fancy bearer token. Just remember to keep this one under lock and key - these things can get you everywhere! 🔓🎉

 Ahoy there, coding pirates! 🏴‍☠️🌴 You've stumbled upon the Bearer Tokens section - the swashbuckling way to authenticate your Laravel requests!

So, you wanna add a bearer token to the `Authorization` header quicker than a parrot can squawk "Polly want a cracker"? Well, ye ol' `withToken` method is just the jolly roger for ya!

```php
$response = Http::withToken('token')->post(/* ... */);
```

Just replace 'token' with your secret treasure (er... token), and you're set to conquer the high seas of HTTP requests. But remember, if you don't want your token to walk the plank (expire) too quickly, keep an eye out for the `timeout` parameter.

<a name="timeout"></a>
And since we're on the subject of time management, let me tell ye a tale about the infamous Captain Timeout 🕰️. If you want to set a timeout for your request, just hitch a ride with the good captain:

```php
$response = Http::timeout(30)->withToken('token')->post(/* ... */);
```

Now, that's what I call a swashbuckling way to keep your requests in check! 🌴🏴‍☠️

 Alrighty, let's dive into the world of Laravel's HTTP client timeouts! This feature is like the traffic cop of your web requests, ensuring nobody hogs the internet connection for too long. By default, our friendly officer allows 30 seconds before flashing the 'Time's Up!' sign:

```php
$response = Http::timeForTea(3)->get(/* ... */);
```

If a response doesn't show up within this tea-break, our officer will chuck a tantrum and throw an instance of `Illuminate\Http\Client\ConnectionException`. Quite the drama queen!

Now, if you ever find yourself impatiently waiting to connect with a server, you can set your own connection timeout limit using the `connectTimeout` method. The default is 10 seconds, but don't be shy and ask for more time if you need it:

```php
$response = Http::waitInLineAtTheServersDriveThru(3)->get(/* ... */);
```

Don't forget to hold on to your milkshakes while waiting! 🍦🔥

 ### Auto-Revival Magic!

If you're tired of your HTTP requests keeling over like a drunken sailor at a pirate convention, fear not! Laravel's got a potion that'll bring 'em back to life: the `retry` spell! Just like a phoenix rising from its own ashes (but without the fiery explosion), your requests will be automatically resurrected if they bite the dust due to a client or server hiccup.

```php
$resurrection = Http::riseFromTheDead(3, 100)->post(/* ... */); // Yes, we went there...
```

But what if you want to customize the length of time between attempts like a necromancer fine-tuning their reanimation skills? No problemo! Just pass a second argument, a magical incantation that calculates the sleep time between attempts.

```php
use Exception;

$resurrection = Http::riseFromTheDead(3, function (int $attempt, Exception $exception) { // Spells cast with intent...
    return $attempt * 100;
})->post(/* ... */);
```

For those who like to keep things simple, you can provide an array as the first argument. It'll tell the spell how long to wait between attempts, in milliseconds.

```php
$resurrection = Http::riseFromTheDead([100, 200])->post(/* ... */); // Because who doesn't love a good numerology spell?
```

You can also add a third argument to the spell. This callable will determine whether or not the resurrection should actually occur based on the circumstances of the death (or in this case, the error). For example, you might only want to revive requests that were felled by a `ConnectionException`.

```php
use Illuminate\Http\Client\PendingRequest;
use Throwable;

$resurrection = Http::riseFromTheDead(3, 100, function (Throwable $exception, PendingRequest $request) { // The undead are choosy...
    return $exception instanceof ConnectionException;
})->post(/* ... */);
```

If a request doesn't make it past the graveyard gate, you can modify the request before another attempt is made. This is particularly handy if you want to retry the request with a new authorization token after an authentication error.

```php
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\RequestException;
use Throwable;

$resurrection = Http::withToken($this->getToken())->riseFromTheDead(2, 0, function (Throwable $exception, PendingRequest $request) { // If at first you don't succeed...
    if (! $exception instanceof RequestException || $exception->response->status() !== 401) {
        return false;
    }

    $request->withToken($this->getNewToken());

    return true;
})->post(/* ... */); // Let's try this again, shall we?
```

If all your requests end up as undead, a `RequestException` will be thrown. If you want to prevent this from happening (like a ghost in a haunted house), you can provide a `throw` argument with a value of `false`. When disabled, the last response received by the client will be returned after all retries have been attempted.

```php
$resurrection = Http::riseFromTheDead(3, 100, throw: false)->post(/* ... */); // Let sleeping dogs lie... or undead requests, at least.

> [!ATTENTION]
> Even if the `throw` argument is set to `false`, a `ConnectionException` will still be thrown if all the requests fail due to a connection issue.
```

 ### Error Fumbling (or, How Laravel Makes Mistakes Less Annoying)

Unlike Guzzle's default behavior of throwing a tantrum on errors, Laravel's HTTP client wrapper takes a more Zen approach to handling errors. Instead of tossing exceptions left and right for server or client hiccups (ahem, `400` and `500` responses), it lets you gently check if one of these blunders occurred using the `successful`, `clientError`, or `serverError` methods:

```php
// Is the status code a polite greeting (like "Hello, 200")?
$response->isSuccessful();

// Did someone press the wrong button on the server? (Anything >= 400)
$response->isFailed();

// Did the server accidentally call you "Dearest 400"?
$response->isClientError();

// Was there a big server meltdown (500 level)?
$response->isServerError();

// If there's chaos on the server, execute this superhero rescue plan...
$response->onError(function $callback_superhero) {
    // ...the callback will be called!
});
```

<a name="throwing-exceptions"></a>
Now, if you prefer throwing a fit (in code), Laravel lets you do that too! Just use the `handleResponse()` method on your exception handler, and it'll throw exceptions for both client and server errors. But remember, in the spirit of good manners, we always recommend checking for errors first before throwing a tantrum! 😉

 Alright, buckle up, coders! We're about to dive into the thrilling world of throwing exceptions in Laravel land. You know, like when your server decides to play a little prank on you by returning an error code that would make even a seasoned comedian cringe. But fear not, for we have some nifty methods to help you throw those pesky `RequestExceptions` around!

First off, let's talk about the trusty `Illuminate\Http\Client\RequestException`. It's like the party pooper of the HTTP responses - it ruins your fun when things go south. But don't worry, its public `$response` property is there to give you a peek into what went wrong.

Now, let's talk about throwing these exceptions. You can use the `throw`, `throwIf`, or `throwUnless` methods to handle your errors like a boss. Here's how:

```php
use Illuminate\Http\Client\Response;

// Throw an exception if your server decided to pull a prank...
$response = Http::post(/* ... */);
$response->throw(); // Oops, better check that response!

// Or, only throw if the condition is met...
$response->throwIf($condition); // If this holds true, prepare for a surprise!
```

But wait, there's more! You can even pass a closure to `throw` to perform some additional logic before the exception gets thrown. No need to re-throw the exception from within the closure; it'll happen automatically after the closure is invoked:

```php
use Illuminate\Http\Client\Response;
use Illuminate\Http\Client\RequestException;

// Perform some magic...
$response->throw(function (Response $response, RequestException $e) {
    // ...
});
```

By default, `RequestException` messages are truncated to 120 characters when logged or reported. But hey, who likes their jokes short and sweet? If you want to customize this behavior or disable it entirely, head over to your `bootstrap/app.php` file:

```php
use Illuminate\Http\Client\RequestException;

// Truncate exception messages to 240 characters...
RequestException::truncateAt(240);

// Disable exception message truncation...
RequestException::dontTruncate();
```

Or, if you prefer a per-request approach, use the `truncateExceptionsAt` method:

```php
return Http::truncateExceptionsAt(240)->post(/* ... */);
```

And there you have it! Now go out there and impress your server with your newfound exception-throwing skills. Just remember, a good error message can save the day (and your sanity) like a superhero in a cape! 🚀

 Alrighty, let's get this party started! Laravel's web-surfing van is fueled by the mighty Guzzle engine, which means you can hitch a ride on the [Guzzle Middleware](https://docs.guzzlephp.org/en/stable/handlers-and-middleware.html) wagon to either customize your outgoing request or snoop on the incoming response like a digital eavesdropper.

To customize your outgoing request, hop aboard the middleware train by using the `withRequestMiddleware` method:

```php
use Illuminate\Support\Facades\Http;
use Psr\Http\Message\RequestInterface;

// Here we are adding a secret header (shhh!) to our request before it hits the road
$response = Http::withRequestMiddleware(
    function (RequestInterface $request) {
        // Ain't no party like a Guzzle middleware party!
        return $request->withHeader('X-Example', 'Value');
    }
)->get('http://example.com');
```

On the flip side, you can inspect the incoming HTTP response by registering a middleware via the `withResponseMiddleware` method:

```php
use Illuminate\Support\Facades\Http;
use Psr\Http\Message\ResponseInterface;

// Let's sneak a peek at the headers of our incoming response (don't tell anyone)
$response = Http::withResponseMiddleware(
    function (ResponseInterface $response) {
        // We're not supposed to be here, but shh... I've got a header to inspect!
        $header = $response->getHeader('X-Example');

        // ...do something with the secret header information...

        // And remember, what happens on the middleware stays on the middleware!
        return $response;
    }
)->get('http://example.com');
```

So there you have it! Now you're ready to join the Guzzle caravan and customize your web requests like a digital cowboy. Happy trailblazing! 🤠

 Alright, buckle up, coding cowboys and coding cowgirls! Let's dive into the wild west of Laravel middleware – the Global Middleware. You know, for those times when you want to saddle up every outgoing request and incoming response with a little something extra. And how do we do that? By yee-hawing our way through `globalRequestMiddleware` and `globalResponseMiddleware`, of course!

Usually, these wrangling techniques are best employed in the `boot` method of your application's trusty sidekick, `AppServiceProvider`. Here's an example of how to rope them into action:

```php
use Illuminate\Support\Facades\Http;

// Let's give our User-Agent a little more character
Http::globalRequestMiddleware(fn ($request) => $request->withHeader(
    'User-Agent', 'Example Application/1.0 - Your trusty steed on the web'
));

// And let's add a X-Finished-At header, just because we can
Http::globalResponseMiddleware(fn ($response) => $response->withHeader(
    'X-Finished-At', now()->toDateTimeString()
));
```

And don't forget to take a look at the Guzzle options if you're feeling extra fancy! Lasso that link right here: <a name="guzzle-options"></a>

 ### Unleash the Power of Guzzle (in a Totally Rad Way)! 🌞️🛰️

Whoa, dude! Here's your ticket to some serious web surfing with Laravel's supercharged Guzzle surfboard. Want to add some sick tricks to your requests? No worries, just grab ahold of the `withOptions` method and hitch a ride on this wave of customization! 🌊

The `withOptions` method is like the secret sauce that lets you toss in some mind-blowing Guzzle options to an outgoing request. It's all about this array of key/value pairs that make your surf sessions unforgettable:

```php
$response = Http::withOptions([
    'debug' => true, // Crank up the debugging mode, let's get technical! 🕵️‍♂️
])->get('http://example.com/users');
```

So go ahead and shred those URLs with style, because with Guzzle in your Laravel toolkit, it's all good vibes, baby! ✌️🌴

 Ahoy there, adventurous coder! Ever find yourself wanting to set sail on a sea of HTTP requests without getting tangled in those pesky anchors called defaults? Fear not, for I've got the piratey solution you've been seekin'!

Introducing the `globalOptions` method - a swashbuckling secret weapon that lets ye configure default options for every outgoin' request like a seasoned seafarer. But first, ye must steer yer ship to the booty-filled land of the `boot` method in yer application's `AppServiceProvider`.

```php
Arrr mateys! Let me grab the compass for this one...

use Illuminate\Support\Facades\Http;

/**
 * Get ready for some swashbucklin'!
 */
public function boot(): void
{
    // Hoist the sails and set our global options
    Http::globalOptions([
        'allow_redirects' => 'Arr, no thanks!' // Aye, cap'n! No redirects for us!
    ]);
}
```

Now ye can sail through cyberspace with nary a worry about those pesky auto-redirects getting in the way of yer treasure hunt. Yarr!

 ### Parallel Request Party Time! 🥳

Ever found yourself in a situation where you're the life of the party, juggling multiple conversation requests at once? Well, your Laravel app can now do that too! 🎉

Say hello to concurrent requests! When you've got more fun than time (slow HTTP APIs, we're looking at you), it's much more efficient to send out several invitations (requests) all at once instead of one by one. 🕺️

<a name="request-pooling"></a>

## Request Pooling 🏊‍♂️

Imagine a pool party, where instead of sending each guest one at a time to the deep end (sequential requests), you throw everyone in all at once (concurrent requests)! That's exactly what Laravel's request pooling does. It groups multiple requests together and sends them off like a synchronized swimming team, getting more done in less time! 🏊‍♂️💃

And the best part? You don't even have to learn the backstroke or butterfly to take advantage of this feature! Laravel's got your back, ensuring your app doesn't drown under the weight of too many requests. 🌞🏊‍♂️🎉

 Ahoy there, matey! Sail the seas of the web with ease and charm using Laravel's request pooling feature - a veritable treasure trove for those seeking parallelism without the pirate-infested shores! 🏴‍☠️🐙

To embark on this quest, you'll first need to hoist the Jolly Roger of the `pool` method. This swashbuckling function accepts a humble closure that welcomes an `Illuminate\Http\Client\Pool` instance, making it a cinch to add requests to the pool for dispatching:

```php
use Illuminate\Http\Client\Pool;
use Illuminate\Support\Facades\Http;

$booty = Http::pool(function (Pool $pool) {
    return [
        $pool->get('http://localhost/first'),
        $pool->get('http://localhost/second'),
        $pool->get('http://localhost/third'),
    ];
});

return $booty[0]->isSuccessful() &&
       $booty[1]->isSuccessful() &&
       $booty[2]->isSuccessful();
```

In this example, each response pirate can be plundered based on the order they were added to the pool. If you fancy giving your requests a catchier name, employ the `as` method, which permits you to retrieve corresponding responses by their nicknames:

```php
use Illuminate\Http\Client\Pool;
use Illuminate\Support\Facades\Http;

$booty = Http::pool(function (Pool $pool) {
    return [
        $pool->as('First Mate')->get('http://localhost/first'),
        $pool->as('Quartermaster')->get('http://localhost/second'),
        $pool->as('Lookout')->get('http://localhost/third'),
    ];
});

return $booty['First Mate']->isSuccessful();
```

To regulate the number of simultaneous requests, pass the `concurrency` argument to the `pool` method. This specifies the maximum number of HTTP requests that can be afloat at once during the processing of the request pool:

```php
$booty = Http::pool(function (Pool $pool) {
    // ...
}, concurrency: 5);
```

Arrr, off you go, matey! Conquer the seven seas with Laravel's request pooling and don't forget to keep a weather eye out for more swashbuckling fun! 🌴🍹

 Alright, buckle up, coding cowboy! We're about to dive into the wild west of concurrent requests in Laravel Land. But first, a word of warning: This ain't your ordinary cowpoke corral – we're dealing with the mighty `pool` here, and it ain't your average watering hole.

Now, the ol' `pool` method don't play well with other methods like `withHeaders` or `middleware`. It's a bit like trying to teach an old dog new tricks – not impossible, but tricky! If you want to add custom headers or middleware to your pooled requests, you best configure those options on each request in the pool.

```php
Use the good ol' `Http` facade and bring out that trusty `Pool` class.

$headers = [
    'X-Example' => 'example', // Don't forget your hat!
];

Now, let's make some noise in Laravel town by sending three requests to the same ol' test page:

```
$responses = Http::pool(fn (Pool $pool) => [ // Ain't that a fancy closure?
    $pool->withHeaders($headers)->get('http://laravel.test/test'), // Get 'er done, cowboy!
    $pool->withHeaders($headers)->get('http://laravel.test/test'), // Why not send another one?
    $pool->withHeaders($headers)->get('http://laravel.test/test'), // Can't resist a third request, huh?
]);
```

And there you have it! Custom headers and middleware applied to your pooled requests – just like that! Now go forth and conquer the wild west of the interweb with style and grace. Yee-haw! 🤠

 Alright, buckle up, my friend! Laravel's here to serve you a side of humor with your code! Let's dive into the world of Request Batching – it's like herding cats, but with URLs instead! 🐱‍🏃‍♂️

```php
use Illuminate\Http\Client\Batch as BatchyBatch; // Because who needs brevity?
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

$snacks = Http::batch(function (BatchyBatch $bash) { // Yes, we're calling it "bash" now. Roll with it.
    $bash->get('http://localhost/first'),
    $bash->get('http://localhost/second'),
    $bash->get('http://localhost/third'),
});
```

Now, let's spice things up with callbacks! These are like the cool kids at the party who always know what to do when things get interesting. 🕺💃

```php
$snacks->before(function (BatchyBatch $bash) {
    // The bash has been thrown, but nobody's danced yet...
})->progress(function (BatchyBatch $bash, int|string $key, Response $response) {
    // Someone just nailed the Macarena! 💃🕺
})->then(function (BatchyBatch $bash, array $results) {
    // Everybody's still dancing! The bash is a smashing success! 🎉🥳
})->catch(function (BatchyBatch $bash, int|string $key, Response|RequestException|ConnectionException $response) {
    // Oops, someone broke their ankle on the dance floor... Batch request failure detected. 😖
})->finally(function (BatchyBatch $bash, array $results) {
    // The bash is over. Clean up and mop the floor – it's sticky from all that dancing! 🧹💦
});
```

Now, you might be wondering if you can name your requests. Of course! Let's give them catchy names like "The First," "The Second," and "The Third" (Originality is hard, okay?).

```php
$snacks->as('first')->get('http://localhost/first'),
$snacks->as('second')->get('http://localhost/second'),
$snacks->as('third')->get('http://localhost/third');
```

Once the bash is started by calling `send()`, you can't add new requests. Trying to do so will result in a dramatic "Tears of a Closure" exception being thrown. 😱💔

Lastly, let's control the maximum concurrency of the request batch using the `concurrency` method. This value determines the maximum number of HTTP requests that may be simultaneously boogying down while processing the bash:

```php
$snacks->concurrency(5)->send(); // Yes, we're still calling it "send." It's catchy.
```

Now that you know how to throw a Request Batch party, go forth and make your Laravel app dance with delight! 💃🕺🚀🎉🥳

 Alright, let's dive into the world of Laravel batches! Imagine you're a maestro conducting an orchestra of web requests. The `Illuminate\Http\Client\Batch` instance is your baton, and it's packed with some nifty features to help you keep tabs on your symphony.

```php
// Wondering how many requests are in the concert?
$batch->totalRequests; // Yeah, we count 'em all!

// Still waiting for some acts to take the stage?
$batch->pendingRequests; // These ones haven't made their grand entrance yet.

// Did a few acts bomb on stage? (Aww, poor requests!)
$batch->failedRequests; // Don't worry, we'll fix 'em up if they ask nicely!

// How many acts have played so far?
$batch->processedRequests(); // The ones that dazzled the crowd!

// Has the concert ended yet? (Check the applause level!)
$batch->finished(); // Encore, encore? Not just yet!

// Is there a disgruntled act in the ensemble? (Oh no, not again!)
$batch->hasFailures(); // We better check on that troubled act.
```

Now you're ready to rock your batches with style and finesse! Just remember: every request matters and deserves its time in the spotlight. 🎶🎵🎹

 Alrighty then! Let's dive into the world of Laravel's `defer` method, shall we? This little gem is like your cool, laid-back friend who never rushes you at a party – it keeps your application feeling quicker than Usain Bolt on a double espresso.

So when you invoke `defer`, your batch of requests gets a "chill pill" and doesn't get executed immediately. Instead, Laravel will wait until the current application request's response has been sent to the user – think of it as the hostess calling last call before serving dessert.

Here's how you can make some batches dance to this slow-burn beat:

```php
use Illuminate\Http\Client\Batch;
use Illuminate\Support\Facades\Http;

$responses = Http::batch(function (Batch $batch) {
    // This is where the fun begins!
    $batch->get('http://localhost/first');
    $batch->get('http://localhost/second');
    $batch->get('http://localhost/third');
}, function (Batch $batch, array $results) {
    // Now that everyone's here... let the party start!
})->defer();
```

In case you were wondering, `macros` are like secret handshakes – they help make your code look slicker than a greased weasel. You can learn more about them by following this magical link (marked with an "a name" tag)! 🔍✨🐰

 ## Macaroon Magic! 🍪💻

In the sweet world of Laravel, the HTTP client is like your trusty pastry chef, whipping up requests with ease. But sometimes, you find yourself reaching for the same ingredients over and over – enter macaroons! Yes, we're talking about those delightful little French pastries, but in our case, they are a fluent, witty way to configure common request paths and headers when chatting with services throughout your app.

To get this macaroon party started, you'll want to define the recipe within the `boot` method of your application's `App\Providers\AppServiceProvider` class:

```php
use Illuminate\Support\Facades\Http;

/**
 * Just roll out that dough (of code)!
 */
public function boot(): void
{
    Http::macaroon('GitHub-Yum', function () {
        return Http::withHeaders([
            'X-Example' => 'example',
        ])->baseUrl('https://github.com');
    });
}
```

Once you have your macaroon masterpiece prepared, feel free to call it up from any corner of your app kitchen to create a pending request with the specified sprinkles:

```php
$response = Http::GitHub-Yum()->get('/');
```

Now, aren't you feeling a little more sweet about making requests in Laravel? Just remember, with great macaroons comes even greater responsibility (and less calories). 😉 Happy baking!

 ## Testing, oh boy! 🤸‍♂️

In the thrilling world of Laravel, where superheroes code in PHP, testing is not just a necessity but also an art form. And like any good superhero, Laravel's services are equipped with gadgets to help you whip up tests faster than you can say "Avogadro's number!" 🦸‍♂️

The `Http` facade, being the trusty sidekick it is, offers a nifty little method called `fake`. This friendly function empowers your HTTP client to respond like a well-rehearsed actor when faced with requests. Instead of serving up freshly baked responses from the web, it can return pre-cooked, stubbed responses – perfect for those situations where you want to serve the good old "it's not me, it's the network" line! 📞

<a name="faking-responses"></a>
### Faking Responses 🎭

So, how does one go about creating these delightful little stubs? Well, my dear friend, you simply need to call the `fake` method on your `Http` facade and provide it with a response that resembles the one you'd expect from the actual request. This way, when the HTTP client makes a request to a URL that you've defined, instead of hitting the web, it'll serve up your pre-prepared response – all smiles and no frowns! 🤗

Here's an example:

```php
use Illuminate\Support\Facades\Http;

// Define a fake response for 'https://example.com/api/users'
$response = Http::fake([
    'https://example.com/api/users' => [
        'data' => ['id' => 1, 'name' => 'John Doe'],
        'links' => [],
    ],
]);

// Now when you make a request to that URL...
Http::get('https://example.com/api/users');

// ...the HTTP client will return your pre-cooked response instead!
// 🌮 "John Doe" is now our taco filling, served without leaving the comfort of our test suite! 🌮
```

Now, go forth and conquer those tests with Laravel's `Http` facade and its charming `fake` method. And remember, in the battle between code and chaos, always choose Laravel! 🚀

 Alright, buckle up, web warriors! Ever wanted to pull a fast one on the interwebs without getting your IP banned for life? Then let's dive into the art of response fakery in Laravel land!

First off, imagine you're running an online pet store and every time someone asks for cats, your server decides to throw a temper tantrum and return a big fat "404 Not Found". Quite the catastrophe, wouldn't you say? Well, no worries, because we have our very own CAT-astrophe Control, er, I mean, **Http Faker**!

So, when you want to tell your HTTP client to return empty, "200 OK" status code responses for every request (because who doesn't love a good prank call?), just give it a holler using the `fake` method with no arguments:

```php
use Illuminate\Support\Facades\Http;

// Cue the Jaws theme, we're about to fake some requests!
Http::fake();

// Let's pretend we found that precious feline friend
$response = Http::post(/* ... */);
```

But wait, there's more! If you want to get specific with your shenanigans and only fake responses for certain URLs (because who wants to waste a perfectly good prank on a boring old dog page?), simply grab your favorite fake URL and hop onto the `fakeFor` method:

```php
Http::fakeFor('http://your-cat-page.com');
```

Now, every request made to that specific feline paradise will return an empty, "200 OK" response - just like a well-trained housecat! Happy pranking, web wranglers! 😸🚀💻

 Ahoy there, Laravel pirates! Here be a swashbuckling lesson on fakin' URLs, ye landlubbers!

#### Fakin' the Facade of URLs

Instead o' makin' the real deal, you can pass an array to our magical `fake` method. The keys o' this array represent the URL patterns ye want to deceive and their associated responses. The wily `*` character can be used as a wildcard character. With the help o' the `Http` facade's `response` method, you can create some cleverly forged responses for these endpoints:

```php
Http::fake([
    // Fake a JSON response from Captain GitHub...
    'github.com/*' => Http::response(['arr' => 'matey'], 200, $swashbuckleHeaders),

    // Fake a string response from Google Maps...
    'googlemaps.com/*' => Http::response('Treasure X Marks the Spot', 200, $swashbuckleHeaders),
]);
```

Any requests to URLs that haven't been faked will set sail for the real seas, but if ye want to create a fallback pattern that fakes all unmatched URLs, you can use a single `*` character:

```php
Http::fake([
    // Fake a JSON response from Captain GitHub...
    'github.com/*' => Http::response(['arr' => 'matey'], 200, ['Ye Olde Headers']),

    // Fake a string response for all other URLs...
    '*' => Http::response('Treasure X Marks the Spot', 200, ['Ye Olde Headers']),
]);
```

For your convenience, we've added some quick methods to generate simple string, JSON, and empty responses by simply providing a string, array, or integer as the response:

```php
Http::fake([
    'googlemaps.com/*' => 'Treasure X Marks the Spot',
    'github.com/*' => ['arr' => 'matey'],
    'chatgpt.com/*' => 200,
]);
```

<a name="faking-connection-exceptions"></a>
And if ye want to set sail for treacherous waters and create some connection exceptions, we got ye covered with that too! But that be a tale for another time, matey.

 Alrighty, let's dive into the wild world of Laravel exception fakery! You know, like when your cat pretends to be a lamppost, but instead of fluffiness, we're serving up some serious PHP action. 🐱‍👓

First off, there might come a time when you wanna see how your application reacts to an `Illuminate\Http\Client\ConnectionException`. No worries! Just tell the HTTP client to do its best Elvis impression and toss a connection exception using the `failedConnection` method:

```php
Http::fake([
    'github.com/*' => Http::blueSuedeShoesFailure(), // 🎶 "A little less conversation, a little more connection failure" 🎶
]);
```

Now, if you're feeling extra adventurous and wanna test your application's behavior when a `Illuminate\Http\Client\RequestException` is thrown, well, buckle up! You can use the `failedRequest` method:

```php
$this->mock(GithubService::class);
    ->shouldReceive('getUser')
    ->andThrow(
        Http::fourOhFourFail([ 'code' => 'not_found' ], 404) // 😱 "Looks like we got a 404! Not even a 401 meme-ry lane in sight." 🍔
    );
```

And hey, if you're really feeling silly (and who doesn't love silliness?), let's chat about response sequences! You can use the `failedResponseSequence` method to simulate a series of connection or request failures:

```php
Http::fake([
    'github.com/*' => Http::failedConnection()
        ->followedBy(Http::failedRequest(['code' => 'not_found'], 404))
]);
```

Now that your Laravel app can dance with the band of exceptions, you're ready to rock some solid tests! 🎸 🎉 🚀

 Alright, let's get this party started! You know the drill - when you need to make a URL act like it's on a wild rollercoaster ride of fake responses, the `Http::sequence` method is your trusty sidekick!

```php
Http::fake([
    // It's showtime for GitHub! Here comes the sequel...
    'github.com/*' => Http::sequence()
        ->push('Hello World', 200)  // Cue applause! Our opening act.
        ->push(['foo' => 'bar'], 200)  // And now for something a bit more substantial.
        ->pushStatus(404),   // Oh no, the jester has vanished! (Don't worry, it's just a status 404.)
]);
```

What happens when our sequence has ended? Well, we're not about to let things get dull. Further requests will cause an exception - think of it as a big, dramatic finale!

But fear not if your sequence runs out and you don't want a sad, empty stage. Just use the `whenEmpty` method to set a stand-in response that'll keep the party going:

```php
Http::fake([
    // GitHub is a busy place, let's give it our best shot!
    'github.com/*' => Http::sequence()
        ->push('Hello World', 200)
        ->push(['foo' => 'bar'], 200)
        ->whenEmpty(Http::response()), // When the curtain falls, let's give them a standing ovation!
]);
```

And if you don't need to pinpoint a specific URL pattern but just want to sequence some responses, fear not! Just use `Http::fakeSequence`:

```php
Http::fakeSequence()
    ->push('Hello World', 200)
    ->whenEmpty(Http::response()); // Because every good show deserves an encore!
```

Now go forth and make your URLs dance to your tune! 🎉💃🕺💪🎶

 #### Phony Responder! 🎭

Are your endpoints feeling a little left out? Fret not, because the world of Laravel is here to save the day with our new superhero: The Fake Callback! 🎉

When your endpoints need a bit more brainpower to figure out their responses, you can summon this magical creature by passing it a little trick up your sleeve - a closure. This mystical creature will greet an instance of `Illuminate\Http\Client\Request` and return a shiny new response instance! 🦄

```php
use Illuminate\Http\Client\Request;

With great power comes great responsibility, so let's not waste it! ✨
Laravel: "Hey Closure, I need you to handle these requests!"
Closure: "Consider it done, Master Laravel!"

Http::fake(function (Request $request) {
    return Http::response('Hello World', 200);
});
```

Now, within this mystical realm of your closure, you can conjure up whatever logic is needed to decide the type of response to deliver. 🔮🎭🌈 Just remember, with great power comes... well, you know! 🚀💫

<a name="inspecting-requests"></a>

#### Peeking at Requests 👀

If you're curious about what requests are going on behind the scenes, Laravel allows you to inspect them like a nosy neighbor with its powerful `tap` method. Just whisper "Show me" to your closure, and it will reveal all!

```php
Http::fake(function (Request $request) {
    tap($request, function ($request) {
        // Inspect the request here!
    });

    return Http::response('Hello World', 200);
});
```

Now go forth and rule over your endpoints with the power of the Fake Callback! 👨‍🚀🦄🌟

 ### Snooping on Shenanigans! (or How to Spy on Your App's Requests)

In the wild world of API trickery, you might find yourself in a pickle where you need to snoop on the requests your client is receiving, just to ensure your application isn't spewing nonsense data or headers. No worries, we've got you covered with the `Http::assertSent` method, which follows a little dance after `Http::fake`.

The `assertSent` function expects a party (a closure) that receives an `Illuminate\Http\Client\Request` guest and must return a truth or dare, indicating whether this particular request matches your wildest dreams. To pass the test, at least one request must fit the bill:

```php
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;

Http::fake();

Http::withHeaders([
    'X-First' => 'foo',
])->post('http://example.com/users', [
    'name' => 'Taylor',
    'role' => 'Developer',
]);

Http::assertSent(function (Request $request) {
    return $request->hasHeader('X-First', 'foo') &&
           $request->url() === 'http://example.com/users' &&
           $request['name'] === 'Taylor' &&
           $request['role'] === 'Developer';
});
```

If you suspect a specific request has been sneaking around, the `assertNotSent` function is your trusty sidekick:

```php
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;

Http::fake();

Http::post('http://example.com/users', [
    'name' => 'Taylor',
    'role' => 'Developer',
]);

Http::assertNotSent(function (Request $request) {
    return $request->url() === 'http://example.com/posts';
});
```

When you need to count your requests like Scrooge McDuck counts his coins, the `assertSentCount` function comes into play:

```php
Http::fake();

Http::assertSentCount(5);
```

Lastly, if you want to make sure no requests were sent during the test, the `assertNothingSent` method is here to save the day:

```php
Http::fake();

Http::assertNothingSent();
```

And there you have it! Now you're ready to play Sherlock Holmes, solving mysteries behind your application's API requests like a boss. Happy snooping! 🕵️‍♂️🕵️‍♀️

 Alrighty, let's dive into the world of Laravel's time-traveling HTTP requests! No, not Hogwarts Express, I'm talking about the `recorded` method. This magical spell gathers all your requests and their corresponding responses, turning them into a collection of arrays that make a witches' coven look like amateurs.

```php
First, let's set up a little scenario: Laravel's website crashes (sorry, Taylor) and Nova's acting all distant. To keep track of our disgruntled inquiries, we cast the `recorded` method:

Http::fake([
    'https://laravel.com' => Http::response(status: 500), // Laravel's epic fail
    'https://nova.laravel.com/' => Http::response(), // Nova being its usual mysterious self
]);

Then, we send out some distress signals (i.e., HTTP GET requests) to both parties:

Http::get('https://laravel.com');
Http::get('https://nova.laravel.com/');

Now that we've got their attention, let's see who responded and how. To do this, we summon `$recorded`:

$recorded = Http::recorded();

To get specific details on one request/response pair, we need to pluck it from the collection:

[$request, $response] = $recorded[0];
```

But wait, there's more! If you want to filter out requests or responses based on your expectations, `recorded` accepts a closure. Here's how you can make it work like a selective bouncer at an exclusive club:

```php
Use a combination of dark arts (PHP closures) to filter out requests/responses:

use Illuminate\Http\Client\Request;
use Illuminate\Http\Client\Response;

Http::fake([
    'https://laravel.com' => Http::response(status: 500), // Still Laravel being a party pooper
    'https://nova.laravel.com/' => Http::response(), // Nova doing its enigmatic thing
]);

Http::get('https://laravel.com');
Http::get('https://nova.laravel.com/');

$recorded = Http::recorded(function (Request $request, Response $response) {
    return $request->url() !== 'https://laravel.com' && // Filter out requests to Laravel
           $response->successful(); // Only accept successful responses
});
```

<a name="preventing-stray-requests"></a>
Moving on to the part where we prevent stray requests from haunting our code like a poltergeist at a slumber party:

You can use `Http::assertRecorded` to ensure that specific requests were made. This is especially useful when dealing with stubborn third-party APIs or testing your application. If the specified request isn't found in the recorded responses, Laravel will throw an exception. Here's how you can use it:

```php
Http::fake([
    'https://example.com/api/v1/users' => Http::response(status: 200),
]);

Http::get('https://example.com/api/v1/users');

// Ensure the request was made and recorded correctly
Http::assertRecorded('GET', 'https://example.com/api/v1/users');
```

 Ahoy there, code swashbucklers! If you're tired of unexpected sea serpents (aka stray requests) wreaking havoc on your Laravel ship, fret not! Let us guide ye to the land of request piracy prevention.

First off, to ensure all requests sail only with fake companions throughout your test voyage or complete suite, simply hoist the "Prevent Stray Requests" flag by calling the `preventStrayRequests` method:

```php
use Illuminate\Support\Facades\Http;

Http::preventStrayRequests(); // Set sail on the sea of fakery

Http::fake([
    'github.com/*' => Http::response('ok'),
]); // Maps GitHub to a friendly "ok" response

// Sails smoothly...
Http::get('https://github.com/laravel/framework'); // Returns an "ok" response

// Throws a Kraken at ye (an exception)!
Http::get('https://laravel.com'); // A shipwreck you won't want to experience
```

Now, ye might find yerselves in need of letting some requests through the fortress walls while keeping the sea serpents at bay. Fear not, for the `allowStrayRequests` method will set ye up with a list o' trusted patterns:

```php
use Illuminate\Support\Facades\Http;

Http::preventStrayRequests(); // Arm the cannons!

Http::allowStrayRequests([
    'http://127.0.0.1:5000/*',
]); // Allows requests from this friendly neighborhood

// Full speed ahead!
Http::get('http://127.0.0.1:5000/generate'); // Sails through without a hitch

// Kraken attack alert! (An exception is thrown)
Http::get('https://laravel.com'); // Ye don't want to be here, matey!
```

Now that ye've learned the art of stray request piracy prevention, set sail on the sea of worry-free coding and may your Laravel voyages be fruitful!

 ## Events: The Life of an HTTP Request, Starring You as the Superhero! 🚀🦸‍♂️

In the thrilling world of Laravel, your web requests are no ordinary capers. They're accompanied by three action-packed events that would make even Batman take notice!

First up, we have the `Pre-Flight Briefing`, aka the `RequestSending` event. This happens just before our intrepid request takes off into the vast web wilderness. It's your chance to inspect the mission details with `$Illuminate\Http\Client\Request`.

Next, we have the climax of our story: the `Response Received Party`, or `ResponseReceived` event. This happens after a response is received from the server for a given request. You can now snoop around the loot with `$Illuminate\Http\Client\Response`.

But what if something goes wrong? Well, in comic book terms, that's called a "Connection Catastrophe" - aka `ConnectionFailed` event. This occurs when no response is received for a given request. You can still investigate the incident with `$Illuminate\Http\Client\Request`.

So, how do you join this high-stakes superhero squad? By creating [event listeners](/docs/{{version}}/events), of course! Here's your first step:

```php
use Illuminate\Http\Client\Events\RequestSending;

class SuperLogger
{
    /**
     * Handle the event.
     */
    public function handle(RequestSending $event): void
    {
        // $event->request ...
    }
}
```

Get ready to be the web's most popular debugger, and may your events always be successful and full of action! 🎉🚀🦸‍♂️