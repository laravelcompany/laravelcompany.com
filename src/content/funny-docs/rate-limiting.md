 # Rockstar Rate Limiting 🎸🥁🎉

Welcome to the groovy land of controlled chaos! Here's your guide on how to keep the party going while still keeping a handle on things 🤘.

<a name="introduction-cache-configuration"></a>
## Cache Configuration: The Secret Sauce 🍔🥄

Before we dive into the dance floor, let's set up our secret sauce—the cache configuration! Get your dancing shoes ready because it's gonna be a hoot. 🕺💃

<a name="basic-usage"></a>
## Basic Usage: The First Dance 🕺🏿️💃🏿️

Time to hit the floor and learn the moves! Here's a step-by-step guide on how to do it right. 💥

<a name="manually-incrementing-attempts"></a>
### Manually Incrementing Attempts: Show 'em you mean business 🤝🏿️💪🏿️

Feeling frisky? Want to prove your mettle? This is where you show off those impressive math skills and manually increment those attempts. We dare ya! 🥳

<a name="clearing-attempts"></a>
### Clearing Attempts: Time for a rewind ⏮️💃

Oh no, someone stepped on your foot? No worries, it's time to clear the dance floor and start anew! This section will teach you how. 🤯🤪

 ## Hello, Web Wranglers! 🤓

Welcome to Laravel's Rate Limiting Playground! 🚀

We've cooked up a super-simple, laughably easy rate limiting abstraction that'll make your life easier than a well-buttered bagel. Pair it with your app's cache (we're talking about the coffee-fueled caching, not the leftover pizza in the fridge), and you've got an effortless solution to limit any action within a time window that'll make you say "Time flies when you're having fun!" 🕰️

> [!NOTE]
> If rate limiting incoming HTTP requests is more your jam, we've got the docs for that. Check out our [rate limiter middleware documentation](/docs/{{version}}/routing#rate-limiting).

<a name="cache-configuration"></a>
Now, let's set up the kitchen (err... cache configuration). 🛠️🚀

 ### Unleash the Power of Caching, Comrades! (or: How I Learned to Stop Worrying and Love the Cache)

Ahoy there, fearless coder! Prepare thyself for a dazzling dance with the mystical realm of Laravel's cache configuration. But fear not, this journey won't be as dull as a night spent watching paint dry - we promise some laughs along the way!

First off, you may have noticed that our dear rate limiter usually depends on your trusty application cache (defined by the `default` key in your application's `cache` configuration file). However, if you fancy changing horses mid-stream, you can dictate which cache driver the rate limiter should hitch its wagon to by defining a `limiter` key within the same hallowed document:

```php
'default' => env('CACHE_STORE', 'database'),

'limiter' => 'redis', // [tl! add]
```

Aw, shucks, we almost forgot to make this a barrel of laughs! So let's imagine for a moment that our rate limiter is a wayward cowboy, and the cache drivers are his trusty steeds. The default setting saddles him up with a trusty ol' horse called 'database'. But now you've got yourself a fancy new horse named 'redis', and our cowboy just can't resist the allure of that shiny saddle!

And so, the rodeo begins anew! May your caching be swift and your code never run aground. Keep on codin', partners! 🤠🐎🚀

 Ahoy there, matey! Buckle up as we delve into the world of the `Illuminate\Support\Facades\RateLimiter` - a pirate's treasure chest full of rate limiting fun! This facade is your gateway to interact with our ship's mighty rate limiter.

The swashbuckling method it offers that we'll focus on today is the `attempt` – a versatile tool used to limit the number of times a particular action (or "callback" in proper speak) can be executed within a given time frame, measured in seconds.

The `attempt` method works like this: when it runs out of remaining attempts for a specific callback, it returns `false`. Otherwise, it'll return either the callback's result or `true`. The first argument that the `attempt` method accepts is the "key" – a string representing the action being rate limited. For instance, to limit sending messages:

```php
use Illuminate\Support\Facades\RateLimiter;

$pirateSpeak = 'arrr';
if ($executed = RateLimiter::attempt(
    'send-message:' . $user->id . $pirateSpeak, // Combine user ID and a "pirate greeting" for fun!
    5, // Allow 5 messages per minute
    function() {
        // Send message to the parrot... or rather, the user.
    }
)) {
    if (!$executed) {
        return 'Arrr matey, too many messages sent!';
    }
}
```

If you find yourself in need of adjusting the time when attempts reset (also known as "decay rate"), you can provide a fourth argument to the `attempt` method. Let's make our example allow five attempts every two minutes:

```php
$pirateSpeak = 'arrgh';
$executed = RateLimiter::attempt(
    'send-message:' . $user->id . $pirateSpeak, // Update the pirate greeting for added flavor!
    5, // Allow 5 messages per two minutes
    function() {
        // Send message to the parrot... or rather, the user.
    },
    120 // Reset attempts every 120 seconds (2 minutes)
);
```

Now that you've learned the basics of our rate limiter's `attempt`, you can set sail on your journey to becoming a true rate limiting maestro! Yo ho, yo ho, a pirate's life for me!

 Alright, buckle up, code cowboys and cowgirls! Let's dive into the wild west of rate limiting in Laravel land.

### Yeehaw-ally Manual Rate Wrangling

If you fancy some old-fashioned human interaction with our trusty rate limiter sheriff, you've come to the right corral! With a twang in our voice and a smirk on our face, let's see how we can round up some methods:

```php
use Illuminate\Support\Facades\RateLimiter;

If you think your message horse has been overworked (`tooManyAttempts` method), just give it a lasso check:

```bash
if (RateLimiter::tooManyAttempts('send-message:'.$user->id, $perMinute = 5)) {
    return 'Whoa there! This message horse has outrun its six-shootin' quota!';
}

Give your message horse a fresh carrot (`increment` method):

```bash
RateLimiter::increment('send-message:'.$user->id);

// Time to send that message, partner!
```

Fancy counting the remaining carrots for your message horse? Look no further than our trusty `remaining` method:

```php
if (RateLimiter::remaining('send-message:'.$user->id, $perMinute = 5)) {
    RateLimiter::increment('send-message:'.$user->id);

    // Send that message, cowpoke!
}
```

Need to feed your message horse a big ol' carrot bouquet? No problemo, pass the desired amount to our `increment` method:

```php
RateLimiter::increment('send-message:'.$user->id, amount: 5);
```

<a name="determining-limiter-availability"></a>
Now, let's rope in some more knowledge on determining limiter availability: (Just kidding, we're all out of horse metaphors for now.)

To learn more about the available rate limiters and their settings, consult our trusty [Rate Limiting documentation](https://laravel.com/docs/8.x/rate-limiting). Happy trailblazing! 🤠🐎

 Alright, let's dive into the thrilling world of rate limiting in Laravel, where we're not just coding, but conducting a symphony of digital throttling!

When your key (we like to call them "digital drumsticks") reaches its limit, the `availableIn` method steps up as our timekeeper, telling us how many seconds are left until the band can start playing again:

```php
Use Illuminate\Support\Facades\RateLimiter;

If RateLimiter::drumStickBash('send-message:' . $user->id, $perMinute = 5) is more like a drum solo than a duet,
    $seconds = RateLimiter::countdownToJam('send-message:' . $user->id);

    Return 'Give us a beat in '.$seconds.' seconds. Your digital drumsticks will be ready to roll again!';
}

RateLimiter::hitTheDrums('send-message:' . $user->id);

// Send message...
```

Now, if you're wondering how to clear those attempts after the jam session, fear not! Here's how:

<a name="clearing-attempts"></a>

*If you need to clear all attempts for a specific key (because let's be honest, sometimes we all need a clean slate):*

```php
RateLimiter::clear('send-message:' . $user->id);
```

But wait! There's more! If you want to clear just the locked attempts (we don't want to throw away the good times, do we?), use this:

```php
RateLimiter::forget('send-message:' . $user->id);
```

And there you have it! Now you're not only a Laravel maestro, but also a digital drum circle leader, ensuring your users never get drummed out of the fun. Rock on!

 ### Unleashing the Beast

Oh, you fancy yourself a limerick maestro? Well, grab your lariat and let's gallop into the wild west of rate limiting!

In this frontier town, we've got a tool called `clear`,
That'll reset attempts for each key that you hold dear.
No more bottlenecks, no more delays,
Just like the cavalry, it'll chase those troubles away!

```php
Use yer six-shooters, App's models and signs,
Import Message and Facade of RateLimiter's designs.

When a message is read with a twirl of the hat,
Mark it as read, and clear that key won't regret.

RateLimiter::clear('send-message:'.$message->user_id)
Will ensure all attempts, like tumbleweeds, will abide.
```

Just remember, pardner, this ain't just a fancy dance,
You're handling data, so keep your code well-anchored!