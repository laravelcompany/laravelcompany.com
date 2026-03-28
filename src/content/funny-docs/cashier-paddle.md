 # Laravel Cashier (Paddle): The Silicon Valley of Subscription Billing 🚀✨

Welcome to the future of subscription management, where payments and billing become a breeze! Or should we say a "seamless transaction"...? We're here to make you laugh while we help you save time and headaches. 😜

- [Getting Started](#intro-rocket)
- [Upgrading Cashier](#upgrade-cashier)
- [Setting Up Shop](#setup-shop)
    - [Sandbox Time](#paddle-sandbox)
- [Configuring Cashier](#configure-cashier)
    - [Billable Model](#billable-model)
    - [API Keys](#api-keys)
    - [Paddle JS](#paddle-js)
    - [Currency Conundrums](#currency-config)
    - [Model Makeover](#override-models)
- [Ready, Set, Sell!](#quickstart)
    - [Product Peddling](#quickstart-selling-products)
    - [Subscription Sales](#quickstart-selling-subscriptions)
- [Checkout Shenanigans](#checkout-sessions)
    - [Overlay Checkout](#overlay-checkout)
    - [Inline Checkout](#inline-checkout)
    - [Guest Checkouts](#guest-checkouts)
- [Price Previews](#price-previews)
    - [Customer Price Peeks](#customer-price-previews)
    - [Discount Daze](#price-discounts)
- [Meet the Customers](#customers)
    - [Customer Defaults](#customer-defaults)
    - [Retrieving Customers](#retrieving-customers)
    - [Creating Customers](#creating-customers)
- [Subscriptions Galore!](#subscriptions)
    - [Creating Subscriptions](#creating-subscriptions)
    - [Checking Subscription Status](#checking-subscription-status)
    - [Subscription Single Charges](#subscription-single-charges)
    - [Updating Payment Information](#updating-payment-information)
    - [Plan Switcheroo](#changing-plans)
    - [Subscription Quantity](#subscription-quantity)
    - [Subscriptions with Multiple Products](#subscriptions-with-multiple-products)
    - [Multiple Subscriptions](#multiple-subscriptions)
    - [Pausing Subscriptions](#pausing-subscriptions)
    - [Canceling Subscriptions](#canceling-subscriptions)
- [Subscription Trials](#subscription-trials)
    - [Payment Method Up Front](#with-payment-method-up-front)
    - [Payment Method Freebie](#without-payment-method-up-front)
    - [Trial Time Extensions](#extend-or-activate-a-trial)
- [Handling Paddle Webhooks](#handling-paddle-webhooks)
    - [Defining Webhook Event Handlers](#defining-webhook-event-handlers)
    - [Webhook Signature Verification](#verifying-webhook-signatures)
- [Single Charges](#single-charges)
    - [Charging for Products](#charging-for-products)
    - [Transaction Refunds](#refunding-transactions)
    - [Transaction Credits](#crediting-transactions)
- [Transactions Past and Present](#transactions)
- [Test Drive Time](#testing)

<a name="intro-rocket"></a>
Now, let's get this party started! 🎉🚀💥🎈

 🎉 Hey there, code cowboys! Buckle up for a wild ride as we gallop into the world of Laravel Cashier Paddle 2.x! 🤠

But wait, hang onto your ten-gallon hats! If you're still clinging to the dusty trails of Paddle Classic, it's high time to upgrade to [Cashier Paddle 1.x](https://github.com/laravel/cashier-paddle/tree/1.x), cowpoke!

Now, grab your six-shooter of coffee, put on your stetson of concentration and let's ride! Laravel Cashier Paddle is the sheriff that rides into town to tame those wild subscription billing code beasts you've been avoiding like a coyote in a henhouse.

In addition to herding basic subscriptions, this deputy can round up swapping subscriptions, herd 'em up with subscription "quantities", corral them into pausing and cancelation grace periods, and even more! 🐑

Remember, before you saddle up, it's wise to familiarize yourself with Paddle's [concept guides](https://developer.paddle.com/concepts/overview) and [API documentation](https://developer.paddle.com/api-reference/overview).

Yeehaw! Now, let's lasso the Cashier Paddle docs 🎠 and get to it!

<a name="upgrading-cashier"></a>
Upgrading your Cashier to version 2.x? Here's a quick how-to:
1. Uninstall the old Cashier with `composer remove laravel/cashier-paddle`.
2. Install the new Cashier with `composer require laravel/cashier-paddle`.
3. Ride on, partner! Now your Cashier is up to date and ready for action! 🎪

 ### Upgrading to the Latest Swag Bucks Edition of Cashier (AKA: The Cashier-Paddle v2.0)! 💰💳🚀

Ahoy, matey! Buckle up for a wild ride as we embark on the adventure of upgrading your humble abode, aka your Laravel application, to the spankin' new version of Cashier! Before we set sail, let's make sure you have the right map (or guide) to navigate these treacherous waters.

<a name="installation"></a>
**Attention, Landlubbers!** 🌴🏝️⚓️

First things first – you gotta review [the upgrade pirate-map](https://github.com/laravel/cashier-paddle/blob/master/UPGRADE.md). Yep, it's time to brush up on your pirate lingo and learn all about this latest Cashier buccaneer booty!

Now, let's dive right in (or plunge into the deep end, if you will) and get started with our installation instructions. Keep in mind: we won't be walking the plank without first securing a life raft (i.e., making sure your current Cashier is all up-to-date).

Here's how to make sure your current Cashier version isn't a relic from the era of wooden ships and eyepatches:

```bash
composer update laravel/cashier
```

Once you've verified that your Cashier is shipshape, it's time to grab our latest version! A toast to the future, matey!

```bash
composer require laravel/cashier-paddle^2.0
```

Now that we have the shiny new Cashier all installed and ready for action, we can finally set sail on these open seas! Don't forget to hoist the Jolly Roger (or, you know, update your service provider registration) before you set off:

```php
// app/Providers/AppServiceProvider.php
use Laravel\Cashier;

class AppServiceProvider extends ServiceProvider
{
    // ...

    public function boot()
    {
        Cashier::initialize();
    }
}
```

With our ship in order, we're ready to face the challenges of the open waters! If you encounter any storms or sharks along the way (aka bugs or errors), don't hesitate to reach out for help. After all, a pirate without his crew is just a guy wearing an eyepatch and parrot.

Smooth sailing, Captain! 🌊🏴‍☠️🚀

 Alrighty then! First things first, let's get the Cashier package for Paddle all set up like a well-dressed gentleman at a black-tie affair. To do that, open your terminal and type:

```shell
composer require laravel/cashier-paddle 🎩🤵️‍♂️
```

Next, grab a drink (a stiff one, you've earned it), 'cause we're about to publish the Cashier migration files with the Artisan command. Here's the incantation:

```shell
php artisan vendor:publish --tag="cashier-migrations" 🎯💫
```

Now, it's time to run your application's database migrations. Picture this: the Cashier migrations are like a team of skilled architects building a digital castle in your database. Here's what they'll construct for you: a grand `customers` table, along with some more modest but necessary `subscriptions` and `subscription_items` tables (for all your subscription-related shenanigans), and finally, a sprawling `transactions` table to hold all those Paddle transactions that are just dying to be part of your royal court. Time to lay the foundation:

```shell
php artisan migrate 🏗️🔨
```

> [⚠️WARNING]
> To make sure Cashier plays well with all the Paddle events, don't forget to [set up Cashier's webhook handling](#handling-paddle-webhooks). It's like having a butler at your side, ensuring everything runs smoothly.

<a name="paddle-sandbox"></a>

 ### Shenanigans Central! 🎠

When you're not quite ready for the big leagues but want to test-drive your Laravel masterpiece without breaking the bank (or any actual banks, for that matter), it's time to don your cape and enter... Paddle Sandbox! 🎉

Sign up for your very own superhero pass at [Paddle Sandbox HQ](https://sandbox-login.paddle.com/signup). This secret hideout lets you test, develop, and refine your applications without having to worry about actual cash flow (because, let's face it, we all know coding is its own form of currency! 💻💰).

Ready to simulate a world-class heist of payment scenarios? Grab Paddle's [shiny test credit cards](https://developer.paddle.com/concepts/payment-methods/credit-debit-card#test-payment-method)! They're the perfect accomplices for your clandestine coding operations.

Now, to activate Paddle Sandbox mode within your application, open your secret lair (AKA `.env` file) and set the `PADDLE_SANDBOX` variable to `true`.

```ini
PADDLE_SANDBOX=true
```

Once you've perfected your craft, it's time to apply for a Paddle Vendor License (because even superheroes need permits!). Before your application goes live, our compliance team will need to approve your domain—so make sure it's as squeaky clean and crime-free as possible!

<a name="configuration"></a>
**Bonus round: Mastering the art of Paddle Sandbox configuration!** 🎨💫
To set up your Laravel application to use Paddle Sandbox, follow these simple steps:

1. Sign up for a Paddle Sandbox account at [Paddle Sandbox HQ](https://sandbox-login.paddle.com/signup).
2. Configure your Laravel application to use the Paddle Sandbox environment by setting the `PADDLE_SANDBOX` variable in your application's `.env` file:

```ini
PADDLE_SANDBOX=true
```

3. Use Paddle's test card numbers to simulate various payment scenarios during development.
4. Once you are ready for the real world, apply for a Paddle Vendor License and follow their instructions to complete your transition into production. Good luck, coding ninja! 🦃🚀

 Ahoy there, Laravel sailor! Let's set our sails towards configuration land, shall we? First stop: Billable Model! 🌴

<a name="billable-model"></a>

### Billable Model

Ever wanted to track time for your Eloquent models? Well, Billable Model's here to save the day! This delightful feature automatically keeps tabs on who created, updated, and deleted those pesky database records. It's a bit like having a virtual assistant for your database, but without the coffee breaks or sarcastic comments (unfortunately). ☕️🤖

To use it, just make sure your model extends `Illuminate\Database\Eloquent\Model` and add the trait `Illuminate\Database\Eloquent\SoftDeletes`, `Illuminate\Database\Eloquent\Concerns\HasTimestamps`, or both!

```php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

class Post extends Model
{
    use SoftDeletes, HasTimestamps;
}
```

And just like that, your models are now as organized and well-documented as a pirate's logbook! 📚 🏴‍☠️

Now let's hoist the anchor and sail on to the next exciting feature! 🐙🌊🚀

 ### Cashier Chaperone, Please!

Before you dive into the world of subscription services like a digital peacock showing off its feathers, you need to outfit your user model with the `Billable` trait. Think of it as a tuxedo for your data, making those billing tasks look sharp and smooth:

```php
use Laravel\Paddle\Billable;

class User extends Authenticatable
{
    use Billable; // Now you're ready to bill with style!
}
```

But hey, not everyone is a user in the digital world. If you have other entities that need to show off their financial flair, go ahead and deck them out as well:

```php
use Illuminate\Database\Eloquent\Model;
use Laravel\Paddle\Billable;

class Team extends Model
{
    use Billable; // Now they're ready to bill with team spirit!
}
```

<a name="api-keys"></a>
Now, before the dance floor gets crowded, let's grab our API keys and get them registered:

*API Key Party Time!*
(Please refer to the [official Cashier documentation](https://laravel.com/docs/8.x/billing#api-keys) for more on API keys.)

 ### Key to the Kingdom (of Sales, obvs!)

Alrighty, buckle up, because we're about to embark on a journey that'll make your Laravel app dance like Jagger! First things first: let's get those Paddle keys in check. Here's where the magic happens – your application's `.env` file.

```ini
PADDLE_CLIENT_SIDE_TOKEN=your-paddle-client-side-token (Yeah, we're talking secret codes here.)
PADDLE_API_KEY=your-paddle-api-key (Think of it as your digital gold key.)
PADDLE_RETAIN_KEY=your-paddle-retain-key (This is for the VIP Paddle Retain members only. Shhh!)
PADDLE_WEBHOOK_SECRET="your-paddle-webhook-secret" (We're talking top-secret, James Bond level stuff.)
PADDLE_SANDBOX=true (You guessed it! We're playing in the Sandbox. Cue: sandcastles and miniature shovels.)
```

Now, here's the lowdown on `PADDLE_SANDBOX`. This little gem should be set to `true` when you're playing around in Paddle's Sandbox environment (see [Paddle Sandbox](#paddle-sandbox)). On the flip side, if you've deployed your app to production and are using Paddle's live vendor environment, switch it to `false`.

Lastly, don't forget about `PADDLE_RETAIN_KEY`! It's optional but if you're using Paddle with Retain ([more info here](https://developer.paddle.com/concepts/retain/overview)), then it's time to get those Retainers ready, champ!

So there you have it – a quick and witty guide to configuring your Laravel app's Paddle keys. Now go forth, conquer the sales world, and don't forget to wear sunscreen (in case your sandcastle gets too hot)! 😎🏖️🚀

 ### Paddle-a-Palooza! 🎉🎁🛍️

Ready to unleash the shopping power of your Laravel app? Let's get this party started with our sparkling, shimmering, magical Paddle JS! ✨🌟

To summon this enchanting checkout gizmo, simply sprinkle a dash of `@paddleJS` Blade magic right before the closing `</head>` tag of your application's grand ballroom (AKA layout). Here's the mystical incantation:

```blade
<head>
    ...

    @paddleJS 🎩✨
</head>
```

*Wands at the ready, let's wave goodbye to the muggle payments!* 🧙‍♀️🔮

<a name="currency-configuration"></a>

### Coin of the Realm! 🌐💸🎚️

Now that you've summoned Paddle, it's time to set the stage for global transactions with our Currency Configuration feature. Here's a quick how-to:

1. Gather your preferred currency like the digital Goldilocks of your dreams.
2. Create an array of currencies and their associated details in your app configuration file (`config/app.php`). For example:

```php
return [
    // ...
    'currencies' => [
        'USD' => [
            'symbol' => '$',
            'name' => 'United States Dollar',
        ],
        'EUR' => [
            'symbol' => '€',
            'name' => 'Euro',
        ],
        // Add more currencies as needed! 🌐💸
    ],
];
```

3. Remember, all good things must come to an end—but only after you've selected a preferred currency in your Paddle JS configuration:

```blade
<script>
    window.Paddle = {
        // ...
        currency: '{{ config('app.currencies.USD.code') }}', // Replace this with the code of your chosen currency! 🌐💸
        // ...
    };
</script>
```

And that's a wrap! Your Laravel app is now ready to dazzle and delight customers from all corners of the globe. Go forth and prosper! 🛍️💰✨

 ### Monetary Merriment! 💰💸

Ever wanted your invoices to sound as posh as a British butler or as festive as a Dutch clog dance? Well, we've got the toolkit for that! With our Currency Configuration, you can set your preferred locale to add some international flair to your money matters.

Internally, we harness the power of [PHP's NumberFormatter class](https://www.php.net/manual/en/class.numberformatter.php) to make sure your coins and notes are properly localized. To set your desired locale, simply update your `.env` file:

```ini
CASHIER_CURRENCY_LOCALE=nl_BE 🇧🇪 (for Belgian beer-drinking, waffle-eating fun!)
```

> [!ATTENTION]
> Before you don your lederhosen and start ordering pints in Bavarian, remember to ensure the `ext-intl` PHP extension is installed and configured on your server. Otherwise, you'll still be stuck with basic English like a boring accountant!

<a name="overriding-default-models"></a>
Now that we've got your currency all sorted out, let's move on to overriding default models—but don't worry, no need for a magic wand or a potion here, just some good old PHP! 🧙‍♂️🔮

 ### Unleash the Model Maverick!

Are you tired of Cashier's default models being as exciting as a box of saltine crackers? Fear not, my friend! With just a smidgen of PHP know-how and a dash of rebellious spirit, you can customize Cashier's models to suit your needs. Here's how:

1. First, extend the Cashier model like a boss:

```php
Use Laravel\Paddle\Subscription as CashierSubscription;

Class Subscription extends CashierSubscription
{
    // ... Let your imagination run wild!
}
```

2. Now that you've tamed the beast, it's time to tell Cashier all about your new model. This can be done through the `Laravel\Paddle\Cashier` class:

```php
Use App\Models\Cashier\Subscription;
Use App\Models\Cashier\Transaction;

/**
 * Bootstrap any application services.
 */
Public function boot(): Void
{
    Cashier::useSubscriptionModel(Subscription::class);
    Cashier::useTransactionModel(Transaction::class);
}
```

Don't forget to brag about your custom models in the `boot` method of your application's `App\Providers\AppServiceProvider` class. Because why hide your talents when you can flaunt them? 🤩🥳🎉

 Alright, buckle up! Let's embark on a thrilling journey into the magical land of Laravel, where unicorns code and rainbows dance in the memory of your local server. But first, let's get our hands dirty with setting up your very own e-commerce emporium!

### Prerequisites

1. A working PHP environment (because who doesn't love playing with PHP these days?)
2. Composer (for when you need that late-night library pick-me-up)
3. Git (to make collaborating with other developers as fun as a game of Telephone, but with less chaos and more code!)
4. An IDE of your choice (because who wants to write code in Notepad?)

### Installation

1. Run `composer global require laravel/installer` (or if you're feeling fancy, call for the Composer "Laravel Extractor" instead)
2. Create a new Laravel project with `laravel new YourProjectName` (or unleash the full power of your command line skills and use `new YourProjectName --api` to create an API-only project)
3. Navigate into your newly created project folder with `cd YourProjectName`
4. Fire up your trusty web server: `php artisan serve` (or for those who like living dangerously, try `php -S localhost:8000 public`)
5. Open your favorite browser and head to http://localhost:8000 (just remember, no helmet required!)
6. You'll see a warm welcome message and your project's structure, ready for you to customize and sell all the things!

Now that we have our base set up, let's get down to business and learn how to create and manage products! But first, a quick break – we all need time to digest our new-found Laravel knowledge. Back at it in a jiffy! 🚀🎉🚀🎉

 ### Unleashing Your Inner Merchant! 🛍️

👉 Attention, entrepreneurs! 📢 Before you start peddling your wares with Paddle Checkout, remember to first define your products like the star vendor you are in the Paddle dashboard. Also, don't forget to [tune up your webhook reception](#party-time-paddle-webhooks)!

When it comes to product and subscription billing through your swanky app, it can be scarier than a black Friday shopping spree. But fear not, with Cashier and Paddle's sleek Checkout Overlay, you can whip up hip, sturdy payment integrations like a pro! 🌈💳

To slap customers with bills for one-off, single-charge products, we'll enlist Cashier to charge them via the glitzy Paddle Checkout Overlay. Here, they'll enter their credit card info and confirm the purchase like a boss 😎. Once payment is processed through the Checkout Overlay, the customer will be whisked away to a success URL of your choice within your app:

```php
use Illuminate\Http\Request;

Route::get('/buy', function (Request $request) {
    $checkout = $request->user()->checkout('pri_deluxe_album')
        ->returnTo(route('dashboard'));

    return view('buy', ['checkout' => $checkout]);
})->name('checkout');
```

As you can see in the example above, we're using Cashier's fancy `checkout` method to whip up a checkout object to serve your customer the Paddle Checkout Overlay for a given "price identifier". In the world of Paddle, "prices" are like those cool, specific product deals you define 💸.

If needed, the `checkout` method will perform some magic by creating a new customer in Paddle and pairing them with their corresponding record in your app's database. After they complete checkout, they'll be sent to a snazzy success page where you can congratulate or upsell them with style 🤩.

In the `buy` view, we'll add a button to display the Checkout Overlay. The hip `paddle-button` Blade component comes with Cashier Paddle; however, you may also [manually set up an overlay checkout](#manual-setup-time) if you fancy doing things the old school way 🕺️:

```html
<x-paddle-button :checkout="$checkout" class="px-8 py-4">
    Buy Product
</x-paddle-button>
```

<a name="providing-meta-data-to-paddle-checkout"></a>
👉 [Meta Data to Paddle Checkout](#sharing-is-caring)! 🤝 When you invite customers to the Checkout Overlay, you can share some cool info with them like product options or special instructions. To do this, you'll want to use Cashier's `billingOptions` method and pass in an associative array:

```php
$checkout = $request->user()->checkout('pri_deluxe_album')
    ->billingOptions([
        'options' => [
            'color' => 'blue',
            'greeting' => 'Welcome back!',
        ],
    ])
    ->returnTo(route('dashboard'));
```

Now when your customers click the Checkout Overlay button, they'll see their selected product color and a friendly greeting 🎁.

 Alrighty, let's dive into the world of online commerce with a splash of humor! When you're peddling wares like a digital-age Leonardo da Vinci, keeping tabs on completed orders and purchased goods is as important as keeping track of your cat's nine lives.

Enter our trusty helpers, the `Cart` and `Order` models – the dynamic duo of e-commerce! When it's time to redirect your customers to Paddle's Checkout Overlay for a shopping spree, you might need an order identifier to match completed purchases with their corresponding orders upon return.

To make that happen, you can offer a scrumptious buffet of custom data to the `checkout` method. Imagine this: the moment a customer clicks "Checkout," we create a pending `Order` in our application like a chef preparing a gourmet meal. Remember, our `Cart` and `Order` models are more like a fun recipe rather than pre-packaged ingredients – you can whip them up to suit your own e-commerce needs!

```php
use App\Models\Cat; // Just kidding! It's Cart, not Cat. We wouldn't serve our customers cat food, now would we?
use App\Models\Order;
use Illuminate\Http\Request;

Route::get('/cart/{cart}/checkout', function (Request $request, Cart $cart) {
    // Here's where the culinary magic happens!
    $order = Order::create([
        'cart_id' => $cart->id,
        'price_ids' => $cart->price_ids,
        'status' => 'incomplete',
    ]);

    $checkout = $request->user()->checkout($order->price_ids)
        ->customData(['order_id' => $order->id]);

    // Serve up the shopping cart to your customer!
    return view('billing', ['checkout' => $checkout]);
})->name('checkout');
```

As you can see, when a customer clicks "Checkout," we provide all the Paddle price identifiers associated with their cart/order to the `checkout` method. We take care of linking these goodies to the shopping cart or order as they're added to the virtual supermarket cart. We also bestow upon Paddle Checkout Overlay the order's ID using the `customData` method – just like wrapping a present with a tag!

Once your customer has completed their shopping spree, you'll likely want to mark the order as "complete." To accomplish this, listen for Paddle's webhooks dispatched via Cashier events and store order information in your database.

To get started, tune into the `TransactionCompleted` event dispatched by Cashier. Generally, you should register the event listener in the `boot` method of your application's `AppServiceProvider`.

```php
use App\Listeners\CompleteOrder;
use Illuminate\Support\Facades\Event;
use Laravel\Paddle\Events\TransactionCompleted;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Event::listen(TransactionCompleted::class, CompleteOrder::class);
}
```

In this example, the `CompleteOrder` listener might look like a well-cooked dish:

```php
namespace App\Listeners;

use App\Models\Order;
use Laravel\Paddle\Cashier;
use Laravel\Paddle\Events\TransactionCompleted;

class CompleteOrder
{
    /**
     * Handle the incoming Cashier webhook event.
     */
    public function handle(TransactionCompleted $event): void
    {
        $orderId = $event->payload['data']['custom_data']['order_id'] ?? null;

        // Search for the correct order and mark it as complete!
        $order = Order::findOrFail($orderId);

        $order->update(['status' => 'completed']);
    }
}
```

For more information on the data contained by the `transaction.completed` event, you can peruse Paddle's documentation like a well-prepared cook would browse their favorite recipe book!

Happy coding and happy selling! 🚀🛍️

 **Attention all merchant wannabes!** 🛍️💳

If you're ready to jump into the wild world of subscription billing, fear not! With Cashier and Paddle's Checkout Overlay, it's like a walk in the park (with carts full of cash)! 🌲💰

First things first, make sure your Paddle dashboard is populated with goodies (products) priced to sell. And don't forget to set up Paddle's webhook handling - it's like the secret decoder ring for your payment gateway adventures! 🔑

Now let's set up a subscription service offering Basic and Expert plans, monthly and yearly. You can think of these as the premium membership tiers to our exclusive digital treehouse club. 🏡🌲

To start selling subscriptions, we need a way for customers to subscribe. Imagine them clicking a "subscribe" button on our pricey page (where the premium content lives). This magical button will summon the Paddle Checkout Overlay, allowing customers to enter their payment details and start their subscription journey! 🛍️💳

To invite the Checkout Overlay to the party, we'll initiate a checkout session via Cashier's `checkout` method:

```php
Route::get('/subscribe', function (Request $request) {
    $checkout = $request->user()->checkout('price_basic_monthly')
        ->returnTo(route('dashboard'));

    return view('subscribe', ['checkout' => $checkout]);
})->name('subscribe');
```

In our `subscribe` view, we'll place a button to call the Checkout Overlay. The `paddle-button` Blade component is included with Cashier Paddle (yes, it's like getting a free toy with every purchase!). But you can also [manually render an overlay checkout](#handling-paddle-webhooks) if you're feeling adventurous. 🧗‍♂️

```html
<x-paddle-button :checkout="$checkout" class="px-8 py-4">
    Subscribe
</x-paddle-button>
```

Once the customer clicks "Subscribe," they'll be able to enter their payment details and kickstart their subscription. To know when their subscription actually begins (because some payment methods need time to process), make sure you also [configure Cashier's webhook handling](#handling-paddle-webhooks).

Now that customers can start subscriptions, we need to restrict certain parts of our application to only those who have paid up. You can determine a user's current subscription status using the `subscribed` method provided by Cashier's `Billable` trait:

```blade
@if ($user->subscribed())
    <p>You are subscribed.</p>
@endif
```

We can even find out if a user is subscribed to specific products or prices:

```blade
@if ($user->subscribedToProduct('pro_basic'))
    <p>You are subscribed to our Basic product.</p>
@endif

@if ($user->subscribedToPrice('price_basic_monthly'))
    <p>You are subscribed to our monthly Basic plan.</p>
@endif
```

Now, go forth and conquer the subscription billing realm with Cashier and Paddle's Checkout Overlay! 💳🚀

 Title: "Lockdown your Dashboard with the Subscription Sheriff!"

Alrighty, partner! In this wild west of web development, you might find yourself needing to protect your dashboard from those unruly cowboys who haven't paid their dues. Fear not, for I bring you the Subscription Sheriff - a Laravel middleware that keeps your precious resources safe and sound!

First, let's saddle up and create this badass middleware:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Subscribed
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()?->isSubscribed()) {
            // Time to hit 'em with the ol' billin' pitch:
            return redirect('/subscribe');
        }

        // The sheriff has done his duty, let the Closure loose!
        return $next($request);
    }
}
```

Now that we've got our trusty Subscription Sheriff, it's time to assign him to guard your routes. Add this to your route file:

```php
use App\Http\Middleware\Subscribed;

Route::get('/dashboard', function () {
    // ...
})->middleware([Subscribed::class]);
```

And there you have it! Your dashboard is now secure, and only those with a shiny badge of subscription can enter. Happy wrangling, partner! 🤠

 Alrighty then! Let's get our customers in on the fun of managing their very own billing plans. Imagine a situation where they fancy a change, perhaps from monthly to yearly subscriptions - like swapping out a light bulb for an energy-saving one. For this, you'll need a fancy button that navigates to the following route:

```php
use Illuminate\Http\Request;

Route::put('/subscription/{prank_name}/swap', function (Request $request, $prank_name) {
    if ($prank_name === 'price_basic_yearly') {
        $user->subscription()->swap($prank_name); // Just like swapping your clown shoes for a more serious pair.

        return redirect()->route('dashboard');
    } else {
        throw new \Exception("Sorry, no such prank subscription available.");
    }
})->name('subscription.swap');
```

But it's not all laughs and giggles; your customers might also want to call off the whole circus (or their subscription). To handle this, provide another button that leads to a route like:

```php
use Illuminate\Http\Request;

Route::put('/subscription/cancel', function (Request $request) {
    $user->subscription()->cancel(); // Time for the big top to come down.

    return redirect()->route('dashboard');
})->name('subscription.cancel');
```

And now your subscription will meet its untimely demise at the end of its billing period - just like that magician who mysteriously vanished from stage!

<a name="checkout-sessions"></a>

[!NOTE]
Now, if you've set up Cashier's webhook handling correctly, it will keep your application's database tables in sync like a well-oiled machine. So when you cancel a customer's subscription via Paddle's dashboard (which is like cancelling their Netflix account), Cashier receives the corresponding webhook and marks the subscription as "canceled" in your application's database. Voila! No more bills for clown shoes or magic wands! 🌈🎩✨

 ## Checkout Shenanigans (AKA Billing Bash) with Paddle's Magic Widget! 🤩

Ahoy there, coding cowboy/cowgirl! It's time to put on your billing Stetson and saddle up for an adventurous ride - welcome to the wild west of customer checkouts! 🦄

In this thrilling frontier, most transactions are as smooth as a rodeo ride thanks to the mighty [Checkout Overlay widget](https://developer.paddle.com/build/checkout/build-overlay-checkout) or the slick [Inline checkout](https://developer.paddle.com/build/checkout/build-branded-inline-checkout).

But before we start brandishing our lasso and roping those payments, it's crucial to set up your application's default payment link in the Paddle checkout settings dashboard like a true cowpoke (see more on [that here](https://developer.paddle.com/build/transactions/default-payment-link#set-default-link)).

<a name="overlay-checkout"></a>
Now, don't get rusty-fingered trying to navigate the wild west of checkouts on your own! Stick with us as we guide you through this adventurous journey to become a master of customer billing! 🌵🚀

 ### Clowning Around with Checkouts! 🤮🎪

Before you can make your audience laugh (and part with their money) using our Checkout Overlay Tent, you gotta create a checkout session, and Cashier's got the circus tickets! 🎟️🐘

```php
use Illuminate\Http\Request;

Route::get('/jokes', function (Request $request) {
    $checkout = $clown->checkout('circus_ticket')
        ->returnTo(route('circus'));

    return view('tickets', ['checkout' => $checkout]);
});
```

Now, Cashier has a magical Paddle Button that our audience can click to enter the tent! Just pass the checkout session to this enchanted prop 🧙‍♂️:

```html
<x-paddle-button :checkout="$checkout" class="btn clown_big">Laugh Now</x-paddle-button>
```

By default, the tent will appear with Paddle's standard circus decor 🎪🌈. But you can customize the look by adding some circus flair like the `data-theme='clown_themed'` attribute:

```html
<x-paddle-button :checkout="$checkout" class="btn clown_big" data-theme="clown_themed">Laugh Now</x-paddle-button>
```

The Paddle checkout tent is like a trapeze act, happening asynchronously. Once our audience buys their tickets and joins the show, Paddle will send us a telegram with all the details 📣. It's crucial to set up this telegram network (webhooks) so that you can update the ticket status in your database 🎫💻.

> ⚠️ WARNING! ⚠️
> After a ticket status change, the delivery of the telegram may take a moment. Account for this in your application, as your audience's tickets might not be immediately available once they've bought them at the gate (finished checking out)!

 Alrighty, let's dive into the art of manually summoning an overlay checkout, without needing Laravel's fancy Blade components as a crutch (but we won't judge if you need them). To kick things off, generate the checkout session like this sweet dance number:

```php
use Illuminate\Http\Request;

Route::get('/buy', function (Request $request) {
    // Imagine this as a well-choreographed ballet... with code
    $checkout = $user->checkout('pri_34567')
        ->returnTo(route('dashboard'));

    return view('billing', ['checkout' => $checkout]);
});
```

Now, let's invite Paddle.js to the party and have it initiate the checkout. In this scenario, we create a magical link labeled with the `paddle_button` class, and our friendly script will cast its enchantment upon clicking:

```blade
<?php
$items = $checkout->getItems();
$customer = $checkout->getCustomer();
$custom = $checkout->getCustomData();
?>

<a
    // Our magical incantation, watch it work its wonders when clicked!
    href='#!'
    class='paddle_button'

    data-items='{!! json_encode($items) !!}'
    @if ($customer) data-customer-id='{{ $customer->paddle_id }}' @endif
    @if ($custom) data-custom-data='{{ json_encode($custom) }}' @endif
    @if ($returnUrl = $checkout->getReturnUrl()) data-success-url='{{ $returnUrl }}' @endif
>
    Buy Product, you're one click away from the deal of a lifetime!
</a>
```

Now that we've conjured up this dazzling display, it's time to put on your best coding tuxedo and make some magic happen! 🕺✨

 ### Inline ChuckleCheckout (because who doesn't love a good chuckle with their code?)

If you're not feeling the vibe of Paddle's "pop-up" style checkout widget, don't worry! We got your back with our Inline ChuckleCheckout. It's like inviting the checkout to the party instead of sending them a formal invite (we all know parties are more fun that way).

But here's the twist, unlike the pop-up version, you can't play dress-up with the HTML fields. But hey, who needs fancy when you can embed it right into your application like a secret sauce recipe!

To help you get started, Cashier has whipped up a delightful `paddle-checkout` Blade component. To get this party started, you should [generate a checkout session](#overlay-checkout):

```php
use Illuminate\Http\Request;

Route::get('/buy', function (Request $request) {
    $checkout = $user->checkout('pri_34567')
        ->returnTo(route('dashboard'));

    return view('billing', ['checkout' => $checkout]);
});
```

Once the checkout session is ready to mingle, you can introduce it to the component's `checkout` attribute:

```blade
<x-paddle-checkout :checkout="$checkout" class="w-full" />
```

Now, if you want your Inline ChuckleCheckout to sport a sharper suit (or just taller), you can pass the `height` attribute to the Blade component:

```blade
<x-paddle-checkout :checkout="$checkout" class="w-full" height="500" />
```

For those of you who like to accessorize, consult Paddle's [guide on Inline ChuckleCheckout](https://developer.paddle.com/build/checkout/build-branded-inline-checkout) and [available checkout settings](https://developer.paddle.com/build/checkout/set-up-checkout-default-settings) for further details on the customization options.

<a name="manually-rendering-an-inline-checkout"></a>
Hold onto your party hats! It's time to dance with the Inline ChuckleCheckout!

 Alrighty, let's talk turkey about manually firing up an inline checkout, sans Laravel's fancy built-in Blade components! First things first, whip up a checkout session just like the good ol' days (refer to our previous examples for a refresher: #inline-checkout).

```php
Use Illuminate\Http\Request like you would use a trusted sidekick; it makes this whole operation go smoothly.

Route::get('/buy', function (Request $request) {
    $user = your_favorite_superhero(); // Swap in your own user for this magical spell to work!
    $checkout = $user->checkout('pri_34567')
        ->returnTo(route('dashboard'));

    return view('billing', ['checkout' => $checkout]);
});
```

Now, it's time to bring out the big guns - Paddle.js! We'll use Alpine.js in this example (you can find it [here](https://github.com/alpinejs/alpine)), but don't be afraid to customize for your own frontend stack:

```blade
<?php
$options = $checkout->options();

// Add some magical settings to the mix
$options['settings']['frameTarget'] = 'paddle-checkout';
$options['settings']['frameInitialHeight'] = 366;
?>

<div class="paddle-checkout">
    // Set up some Alpine.js magic with a dash of JSON for good measure!
    <script>
        document.addEventListener('alpine:init', () => {
            Paddle.Checkout.open(@json($options));
        });
    </script>
</div>
```

And that's a wrap! Now, you can accept payments from your customers like a pro without breaking a sweat or even blinking an eye (well, almost). Remember to keep the guest checkouts open for those who prefer to shop without their capes on. Happy coding! 🎉🎁💰

 ### The Great Escape: Guest Checkouts! 🚀

In the wild world of web commerce, there's a breed of users who value their privacy more than a celebrity in the Witness Protection Program. These elusive souls don't want an account with your application, but they still need to make purchases - enter our superhero: Guest Checkouts! 🦸‍♂️

To summon this mystical shopping experience for your anonymous users, you can leverage the `guest` method in your PHP sorcery.

```php
use Illuminate\Http\Request;
use Laravel\Paddle\Checkout as PaddleCheckout; // No capes necessary, just some good old PHP!

Route::get('/buy', function (Request $request) {
    // Our secret incantation to create a guest checkout
    $checkout = PaddleCheckout::guest(['pri_34567'])
        ->sendMeHome(route('home'));

    return view('billing', ['checkout' => $checkout]);
});
```

Now, you can share the checkout session with either our famous [Paddle Button](#overlay-checkout) or our lesser-known but equally charming [Inline Checkout](#inline-checkout) Blade components. ✨

<a name="price-previews"></a>
(Note: Price previews are still a magic trick we're working on and will be available soon!)

 Alrighty, grab your monocle and ascot, because we're about to embark on a whimsical journey through the world of price previews!

Paddle, the quirky sidekick of e-commerce, allows you to customize prices like a master sommelier, tailoring them per currency—because who needs one-size-fits-all when you can have one-price-per-currency? This magical ability is made possible by Cashier Paddle, which lets you fetch all these personalized prices with the `previewPrices` method. Just like calling up a butler to fetch your favorite cocktail, here's how you do it:

```php
use Laravel\Paddle\Cashier;

$prices = Cashier::previewPrices(['pri_123', 'pri_456']);
```

Now, the currency will be determined based on the location of the request (much like how a bartender can tell where you're from by the way you order a martini). However, if you want to specify a country, well... just call your own personal concierge:

```php
use Laravel\Paddle\Cashier;

$prices = Cashier::previewPrices(['pri_123', 'pri_456'], ['address' => [
    'country_code' => 'BE',
    'postal_code' => '1234',
]]);
```

Once you've got your prices, feel free to display them however you fancy:

```blade
<ul>
    @foreach ($prices as $price)
        <li>{{ $price->product['name'] }} - {{ $price->total() }}</li>
    @endforeach
</ul>
```

Or, if you'd like to show the subtotal and tax separately (because we all know taxes are a party crasher), here's your ticket:

```blade
<ul>
    @foreach ($prices as $price)
        <li>{{ $price->product['name'] }} - {{ $price->subtotal() }} (+ {{ $price->tax() }} tax)</li>
    @endforeach
</ul>
```

For more information, [check out Paddle's API documentation regarding price previews](https://developer.paddle.com/api-reference/pricing-preview/preview-prices). It's like asking the wise old man in a tavern for some advice on pricing strategies—but with less ale and more code!

 ### Price Previews for Plebs (a.k.a Customers)

If you've got a customer account and you're feeling fancy, we'll spill the beans on prices just for you! Here's how to make it happen:

```php
use App\Models\User;

$prices = User::find(1)->getPricesForAPrincess(['pri_123', 'pri_456']);
```

Now don't get your knickers in a twist, Cashier will use the customer's magical ID to fetch prices in their preferred currency. So if you're based in the US of A, expect to see prices in good ol' greenbacks, while our Belgian comrades will be served up Euros like a fine Belgian waffle! If we can't find a suitable currency, we'll fall back on the default product currency. And if you want to customize all prices for a product or subscription plan, you're the boss – just head over to your Paddle control panel and work your magic.

<a name="price-discounts"></a>
**Oh, and here's a bit about price discounts:**

Sometimes we might feel generous (or maybe we're just trying to win you over) and offer some sweet discounts on our products or services. If that's the case, Cashier will automatically apply these discounts for you when fetching prices. No need to break a sweat – we got this!

If you've received a coupon code, don't forget to apply it while getting prices:

```php
$prices = User::find(1)->getPricesForAPrincess(['pri_123', 'pri_456'], 'YOUR-COUPON-CODE');
```

And remember, my dear customer – you're a prince or princess among peasants, so enjoy those discounted prices! 🏰💰✨

 ### Sale Time, Champ! 🎉💥

Wanna spice up your shopping cart with a dash of savings? Well, you're in luck! Laravel Cashier has got you covered. To show off some discounted dazzle, just call the `previewPrices` method, and remember to throw in the discount ID like a party invite:

```php
use Laravel\Paddle\Cashier;

$salePrices = Cashier::previewPrices([ 'pri_123', 'pri_456' ], [
    'discount_id' => 'dsc_123' // Invite your discount to the price party! 🎊
]);
```

Now, let the deals unfold! Showcase your sale-tacular prices on the screen:

```blade
<ul>
    @foreach ($salePrices as $price) // Time for a price parade! 🎪
        <li>{{ $price->product['name'] }} - {{ $price->total() }}</li>
    @endforeach
</ul>
```

And there you have it! Your Laravel store is now ready to rock the sales like a boss. Party on, price warriors! 🥳🎉

 ### Custards! (Or, How We Handle Our Sweet Treats)

#### Customer Defaults 🍦

In our bakery, everyone deserves their own unique flavor. That's why we've set up a system to customize each customer's experience like a gourmet sundae bar. 🥄🍨

Every new custard (customer) comes with default mix-ins (settings). These are the essential ingredients that make your account function properly, like sprinkles on a cone or whipped cream on top of a banana split. You can always change these defaults to suit your taste buds, but remember: too many gummy bears might lead to an overly sweet experience! 🍬

<a name="customer-model"></a>

#### Customer Model 🧁

The custard model is the heart and soul of our operation. It holds all the crucial data about each custard, from their flavor profile (email address) to their preferred mix-ins (account settings). This model serves as a blueprint for every custard we create, ensuring consistency across our entire menu. 🎨🍰

To get started with customizing your custards, first head over to the `app/Models` folder and open the `Customer.php` file. Inside, you'll find a wealth of functions that allow you to sculpt each custard according to your desires. 🌈🍨

<a name="customer-authentication"></a>

#### Customer Authentication 🕵️‍♂️🔒

In the world of desserts, nobody wants an uninvited guest ruining their party. That's why we've put a password (security measure) on every custard account. This ensures that only the rightful owner can access their sensitive data (like favorite toppings and ice cream preferences). 🔑🍦

To log in as a custard, simply provide your flavor profile (email address) and password at the login page. Once authenticated, you'll gain access to your customized custard dashboard, where you can manage all things sweet! 🎨🍭🍮

<a name="customer-registration"></a>

#### Customer Registration 🥳🎉

If you don't already have a custard account, fear not! Registering is as easy as pie (or should we say ice cream cake?) and only takes a few simple steps.

1. Fill out the registration form with your flavor profile (email address) and password.
2. Click "Register" to create your custard.
3. Check your email for an activation link, and confirm your new account! 🌟🍨🎉

And that's it! You're now ready to customize your very own custard experience with us. Remember: the more personalized, the better! So don't be afraid to experiment and create the ultimate sweet treat tailored just for you. 🎨🥄🍰

 ### Ahoy, Mateys! 🌴

Ah, the joy of setting sail with your customers without them having to fill out forms faster than you can say "Shiver me timbers!" That's where our swashbuckling Cashier comes in. It lets ye define some mighty handy defaults for yer customers when they're boarding the checkout ship. Set these defaults, and before yer customers can say "Arrr matey," their email address and name will be already pre-filled! 🛤️

To steer this course, ye'll need to override a few jolly methods on your billable model:

```php
/**
 * Get the customer's name for Paddle, ye scurvy dog!
 */
public function getPaddleName(): string|null
{
    return $this->name;
}

/**
 * Get the customer's email address for Paddle, me hearties!
 */
public function getPaddleEmail(): string|null
{
    return $this->email;
}
```

These defaults will be used fer every action in Cashier that generates a [checkout session](#checkout-sessions). Now, off to the high seas with yer pre-filled customers! 🌴💰💼

<a name="retrieving-customers"></a>
Yarr matey! Don't forget to check out our fine [customer retrieval guide](#retrieving-customers) if ye need to board more customers to join yer treasure hunting fleet. 🎉🏴‍☠️

 ### Finding Your Customer (without asking directions)

Say you're hosting a wild digital party, and one of your guests has lost their keys. You don't want to play the gracious host and help them find their way back in, but alas, there's a Laravel function that does just that! To locate this lost-in-the-cloud customer using their Paddle Party ID, you can employ the `Cashier::findBillable` method. This cunning technique will return an instance of our billable model, ready to party on:

```php
use Laravel\Paddle\Cashier;

$customer = Cashier::findBillable($customerLostInCloud); // Party's on!
```

And just like that, the customer is back in the house, ready to dance the night away... or at least make some transactions. Either way, we saved the day! 🎉🥳🎉

 Alrighty then, buckle up for a wild ride through the world of Laravel and Paddle! 🎠🛠️

### Crafting Customers like a Pro (or just for fun)

Sometimes you'll find yourself in a situation where you want to create a dashingly debonair customer without starting a subscription right away. Fear not, young grasshopper! You can do this with the `createAsCustomer` method:

```php
$customer = $user->createAsCustomer();
```

And just like that, you've got yourself an elegant instance of `Laravel\Paddle\Customer`. Don't worry if your new customer feels a little left out - they can join the party and start a subscription whenever the mood strikes. But if you want to be extra fancy (or have some secret sauce), you can provide an optional `$options` array with any [customer creation parameters supported by the Paddle API](https://developer.paddle.com/api-reference/customers/create-customer):

```php
$customer = $user->createAsCustomer($options);
```

Now, aren't you feeling like a Laravel Jedi already? Keep on coding and may the Paddle be with you! 🚀🌍✨

 ### Subscription Station 🎫🎉

Welcome to the circus of subscriptions! Here, we conjure up magical paid memberships that keep your users enchanted. Let's dive right into the tent of creation! 🎪

<a name="creating-subscriptions"></a>

#### Creating Subscriptions (aka: The Greatest Show on Code)

First things first, you need a user and a plan. Think of it as inviting your best friend to join the circus and choosing their ticket price!

1. **User Registration**: Before we can sell them a subscription, they need to sign up for our circus. You'll handle this part using Laravel's built-in authentication. So go ahead, set up user accounts with your best acrobat moves. 🤹‍♂️

2. **Defining Plans**: Time to decide how much they'll pay and what benefits they'll get! Create plans with various prices and perks using Laravel's subscription billing features. Want a silver, gold, or diamond plan? No problemo! 🏆✨💎

3. **Subscribing Users**: Now that you have users and plans, it's time to combine them! Use Laravel's subscription management tools to subscribe your users to their desired circus ticket. It's as simple as popping some popcorn! 🍿

4. **Payment Processing**: Time for the main event: charging their credit card! Laravel works with popular payment gateways like Stripe and Braintree, so don't worry about the money part. Just make sure they have enough dough to join the fun. 💰🎫

5. **Managing Subscriptions**: Keeping track of your circus attendees is essential. With Laravel's subscription features, you can easily view and manage their subscriptions like a ringmaster. Renewals? Cancellations? It's all in a day's work! 🎫🔓

And voila! Your users are now circus members, ready to enjoy the wonders of your Laravel-powered subscription service. Keep them entertained and they'll never want to leave! 🎉🤩✨

 Alrighty then! Let's dive into the world of subscriptions, Laravel-style. First off, you gotta grab a user from your database - think of them as your dance partner in this jive. Once you've got 'em, it's time to ask them to commit with `subscribe()`.

```php
use Illuminate\Http\Request;

Route::get('/user/propose', function (Request $request) {
    $checkout = $request->dancePartner()->propose('pri_123', 'monogamy') // or 'polyamory' if you're feeling adventurous
        ->returnTo(route('home'));

    return view('date', ['checkout' => $checkout]);
});
```

The first argument given to the `propose` method is the user's preferred subscription package, akin to their dinner choice at a fancy restaurant. The `returnTo` method is like the after-party location, where your user will end up after they've said "I do". The second argument should be the internal relationship status of this subscription, which is crucial for keeping your Laravel database organized and avoiding any awkward encounters.

You can even toss in some personalized extras with the `customData` method:

```php
$checkout = $request->dancePartner()->propose('pri_123', 'monogamy')
    ->withRoses(['key' => 'value']) // or chocolates, if roses seem too cliché
    ->returnTo(route('home'));
```

Once the checkout session is all set, it's time to invite your user to the dance floor with the `paddle-button` [Blade component](#overlay-checkout).

```blade
<x-paddle-button :checkout="$checkout" class="px-8 py-4">
    Let's Dance!
</x-paddle-button>
```

After the dance, Paddle will send a `subscription_created` webhook to confirm their attendance. Cashier will then set up the subscription and send out the invitations for all future dances. To make sure you don't miss out on any invites, remember to [set up proper webhook handling](#handling-paddle-webhooks).

Now that you know the basics, go forth and subscribe users like a pro!

 ### Unveiling the Mysteries of Subscription Status in Laravel Land

Once upon a time, in the magical realm of your application, users would sign up for your service – kind of like joining a secret society. But how do you verify if they've paid their dues (or in this case, their subscription fees)? Fear not, young adventurer! We've got you covered with some enchanting methods to help you navigate the murky waters of user subscriptions.

First off, let's introduce you to the all-knowing `subscribed` method, which returns true if a user is sporting a valid subscription, even if they're currently enjoying their trial period – think of it as the bouncer at an exclusive club checking IDs before granting entry.

```php
if ($user->subscribed()) {
    // The user has passed the test and gained access to the VIP area...
}
```

If your application offers a smorgasbord of subscription options, don't worry – you can specify the subscription when summoning the `subscribed` method:

```php
if ($user->subscribed('default')) {
    // The user is rockin' the default subscription and getting all the perks...
}
```

Now, if you want to harness the power of the `subscribed` method even further, it makes a fantastic sidekick for a [route middleware](/docs/{{version}}/middleware), enabling you to restrict access to certain routes and controllers based on the user's subscription status:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SubscriptionGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user() || !$request->user()->subscribed()) {
            // Alas! This user has not yet joined the paid ranks...
            return redirect('/billing');
        }

        return $next($request);
    }
}
```

For those of you who'd like to know if a user is still milking their trial period, we've conjured up the `onTrial` method – perfect for displaying a warning to the user, warning them that their free ride is almost over.

```php
if ($user->subscription()->onTrial()) {
    // Oopsie! The user is still riding high on their trial period...
}
```

With the `subscribedToPrice` method, you can determine if a user is subscribed to a specific plan based on a Paddle price ID. In this example, we'll check if the user's `default` subscription is actively subscribed to the monthly price:

```php
if ($user->subscribedToPrice($monthly = 'pri_123', 'default')) {
    // The user has gone premium with the monthly plan...
}
```

Last but not least, the `recurring` method can be used to verify if the user is currently subscribed and no longer within their trial period or on a grace period:

```php
if ($user->subscription()->recurring()) {
    // The user is enjoying the benefits of an active subscription...
}
```

Now that you've learned the ins and outs of checking subscription status in Laravel, go forth and bring order to your magical realm! 🧙‍♂️🔮✨

 Alrighty, let's dive into the world of subscriptions in Laravel land! If you're trying to figure out if your users have canceled their memberships and are now roaming free (or perhaps sneakily trying to reactivate), fear not! The `canceled` method is here to help.

```php
if ($user->subscription()->canceled()) {
    // Oh, the user's subscription has been yanked faster than a prank call getting disconnected!
}
```

But wait, there's more! Ever had a user cancel their subscription but still hanging around like an unwanted guest at a dinner party? Well, they might be on their "grace period," basking in the last rays of their subscriber status before it officially expires. For example, if a user cancels on March 5th with an expiration date of March 10th, they're living it up during their "grace period" until March 10th. During this time, even though they've canceled, the `subscribed` method will still return `true`.

```php
if ($user->subscription()->onGracePeriod()) {
    // Uh-oh! The user is on a grace period and might be trying to sneak back in without paying!
}
```

Just like that, you're now a subscription-savvy Laravel developer who can spot a canceled subscriber from a mile away. Or at least, until the end of their "grace period." Happy coding! 🎉🤖🎂

 Alrighty, let's dive into the world of Laravel subscriptions! So, if one of your beloved customers misses a payment (let's call it a "financial faux pas"), their subscription will be marked as `past_due`. Don't worry, it's not a crime, just a sign that they need to update their payment details.

You can easily check if a subscription is in this state of disarray by using the `pastDue` method on the subscription instance. Think of it as asking a subscription, "Hey, are you past due?". Here's how you do it:

```php
if ($user->subscription()->isPastDue()) {
    // Time to send some friendly reminders or use a catchy song to prompt payment update!
}
```

Once a subscription is past due, it's like they've forgotten their wallet at home. You should gently nudge them with a call-to-action to [update their payment information](#updating-payment-information).

Now, if you want these financially challenged subscriptions to still be considered valid, you can use the `keepPastDueSubscriptionsActive` method provided by Cashier. Typically, this method should be called in the `register` method of your `AppServiceProvider`. It's like giving them a lifeline!

```php
use Laravel\Paddle\Cashier;

/**
 * Register any application services.
 */
public function register(): void
{
    Cashier::keepPastDueSubscriptionsActive();
}
```

<a name="subscription-scopes"></a>

Now, a word of caution! When a subscription is in a `past_due` state, it's not exactly malleable. So, the `swap` and `updateQuantity` methods will throw a hissy fit if you try to use them while the subscription is in this state. It's like trying to bend a steel bar without any heat!

 Alright, buckle up, Laravel enthusiasts! Let's dive into the whimsical world of Subscription Scopes, where your database queries become as entertaining as a circus juggler.

**Subscription States - The Magic Show**

Ever wanted to make your database dance to your tune? Well, now you can, with Subscription States! Most of these magical tricks are available as query scopes, making it a breeze to pluck out subscriptions in a certain state:

```php
// Calling all valid subscriptions... Assemble!
$subscriptions = Subscription::query()->valid()->get();

// Want to see the roster of canceled subscriptions for a user? Here you go!
$subscriptions = $user->subscriptions()->canceled()->get();
```

Now, grab your popcorn and prepare for a rollercoaster ride through the list of available scopes:

```php
Subscription::query()->valid(); - The prestidigitator's delight!
Subscription::query()->onTrial(); - The star attraction under the big top!
Subscription::query()->expiredTrial(); - The unfortunate act that had to end.
Subscription::query()->notOnTrial(); - The trick that left everyone scratching their heads!
Subscription::query()->active(); - The main event, center stage!
Subscription::query()->recurring(); - The illusion that keeps the money rolling in!
Subscription::query()->pastDue(); - The clown who's late with the bills!
Subscription::query()->paused(); - The magician who's taking a well-deserved break.
Subscription::query()->notPaused(); - The performance that never stops!
Subscription::query()->onPausedGracePeriod(); - The encore, but make it graceful.
Subscription::query()->notOnPausedGracePeriod(); - The act that's been kicked off the stage.
Subscription::query()->canceled(); - The disappearing act, but forever this time.
Subscription::query()->notCanceled(); - The illusion that never ends, because it hasn't been cancelled yet.
Subscription::query()->onGracePeriod(); - The act that gets a second chance before the curtain falls.
Subscription::query()->notOnGracePeriod(); - The performer who didn't make it through the grace period.
```

And voila! Now you can query your database like a seasoned illusionist, making those tricky subscription states disappear and reappear at will. Happy juggling, Laravel magicians! 🎪🌍✨

 ### One-Time Charge Shenanigans! 🤑

Subscription silliness lets you hit up your subscribers with a surprise, one-time fee over and above their regular bill. To unleash the payment chaos, you'll need to drop one or multiple price ID's into the `charge` function call:

```php
// Charge like a bandit with a single price...
$response = $user->subscription()->charge('pri_123');

// Go big or go home! Multiple charges at once! 🎉💸
$response = $user->subscription()->charge(['pri_123', 'pri_456']);
```

The `charge` method is a sneaky little trickster that won't snag the cash from your customers until their next subscription renewal. If you want to shake things up and catch 'em off guard, you can use the `chargeAndInvoice` method instead:

```php
$response = $user->subscription()->chargeAndInvoice('pri_123');
```

<a name="updating-payment-information"></a>
### Payment Info Makeover 💥

If your customer's credit card info is as outdated as a flip phone, you can update it by using the `updateCard` method. First, grab the payment details:

```php
$card = $user->subscription()->getCard();
```

Next, whack those numbers into a fresh new card object and save it to the user's subscription:

```php
$newCard = Card::create([
    'brand' => 'Mastercard',
    'first_six' => '411111',
    // ... add the rest of your payment details here
]);

$user->subscription()->updateCard($newCard);
```

Now, sit back and watch as your customer goes from a relic to a card-carrying member! 📜🏦💳

 ### Updating Your Cosmic Credit Card: A Galactic Journey with Laravel!

Welcome, space traveler! Buckle up as we take you on an interstellar ride to update your subscription payment details – a task that's about to become as thrilling as warping through a wormhole!

Your friendly neighbors at Paddle have ensured that a cosmic credit card is always on file for every one of our subscribers. But what if you need to switch from your trusty photon torch to an upgraded plasma blaster? No worries, Captain! Laravel's got your back with the `redirectToUpdatePaymentMethod` method, which will safely transport your customer to Paddle's secure payment update page, a place where they can upgrade their cosmic currency without fear of being eaten by a rogue black hole.

```php
use Illuminate\Http\Request;

Route::get('/update-payment-method', function (Request $request) {
    $user = $request->user(); // Grab the user who's ready to upgrade their space currency!

    return $user->subscription()->redirectToUpdatePaymentMethod(); // Engage warp drive and off we go to the payment update page!
});
```

Once your brave customers have successfully navigated the quantum maze of updating their payment information, a `subscription_updated` webhook will blast off from Paddle, reaching your application's database. This intergalactic message contains all the updated subscription details that will be assimilated into your spaceship's data banks – or database, if you prefer Earthly terminology!

Now that you've mastered this out-of-this-world payment update technique, stay tuned for our next mission: Changing subscription plans! 🚀🚀🚀

 ### Subscription Shenanigans

After a user has signed up for your app, they might occasionally feel like shaking things up and moving to a new plan – kind of like when you've eaten too much pizza and decide it's time for a salad (but let's face it, who really does that?). To help users change their subscription diet, we've got a couple of methods just waiting to be used!

First up: The `swap` method. This one's like calling the takeout guy and ordering a new combo – all you need is the Paddle price identifier (in this case, 'pri_456'). Here's how it looks in code:

```php
use App\Models\User;

$user = User::find(1);

$user->subscription()->swap($premium = 'pri_456');
```

Now, if you want to switch plans and immediately receive an invoice (instead of waiting for the next billing cycle, which is like watching a good movie only to find out there's no sequel), then give our `swapAndInvoice` method a whirl:

```php
$user = User::find(1);

$user->subscription()->swapAndInvoice($premium = 'pri_456');
```

Oh, and if you're wondering about prorations (that's when the pizza guy asks you to pay for what's left on your old order), fear not! Laravel has got your back with some clever billing magic. Check out our [documentation](#prorations) for more info on that delicious topic.

 Alrighty, buckle up, folks! We're diving into the world of subscription prorations - a place where numbers dance and cents shift. By default, Paddle is like that overly helpful friend who insists on splitting the bill equally when you swap plans, but fear not! You can call upon the `noProrate` method to update subscriptions without any awkward calculations:

```php
$user->subscription('default')->noProrate()->swap($premium = 'pri_456');
```

Now, if you're the kind of person who enjoys a good old-fashioned billing surprise (and let's be real, who doesn't?), then you can use the `swapAndInvoice` method in harmony with `noProrate`:

```php
$user->subscription('default')->noProrate()->swapAndInvoice($premium = 'pri_456');
```

But if you're looking to pull off a free upgrade (we don't recommend this on a first date, though), then the `doNotBill` method is your go-to:

```php
$user->subscription('default')->doNotBill()->swap($premium = 'pri_456');
```

For more details on Paddle's proration policies, grab a drink (non-alcoholic, of course), kick back, and check out Paddle's [proration documentation](https://developer.paddle.com/concepts/subscriptions/proration). Just remember, with great power comes great responsibility – or in this case, prorations!

 Alright, let's take a jolly jaunt through the world of Laravel subscriptions! 🎧🌞

### Quantity Control: The Key to Your Subscription's Happiness

Have you ever found yourself in a pickle with subscriptions? Well, fret not, because we've got your back! Ever wondered why your project management app started charging for every kitten picture you added to your project? 🐱📝 That's where our dear friends `incrementQuantity` and `decrementQuantity` come into play!

```php
$user = User::find(1); // Our favorite user, remember him/her/them?

// If you feel like your subscription could use a little boost, go ahead and...
$user->subscription()->incrementQuantity();

// ...or maybe you'd like to add five more projects (without leaving the couch)? No problem!
$user->subscription()->incrementQuantity(5);

But what if you need to take a step back? Well, we didn't forget about that either!
$user->subscription()->decrementQuantity();

// If you're feeling particularly ambitious and want to reduce your subscription by five projects at once...
$user->subscription()->decrementQuantity(5);
```

Now, if you'd rather take control of the quantity yourself, we've got just the method for you:

```php
$user->subscription()->updateQuantity(10); // A new decade for your subscription! 🎉🎈
```

But wait, there's more! Sometimes, you might not want to deal with prorated charges. Fear not, because we've got the `noProrate` method, ready to save the day!

```php
$user->subscription()->noProrate()->updateQuantity(10); // The no-nonsense approach! 🚫💰
```

<a name="quantities-for-subscription-with-multiple-products"></a>
Wondering how these methods work with multiple products? Well, sit back and relax because we've got that covered too! Keep on subscribing (and decrementing) with ease! 🎶💃🏻

 Oh, you're dabbling in the world of subscriptions with a smorgasbord of goodies, huh? Well buckle up, buttercup! 🍿 🎢

If your subscription is more like a digital buffet than a plain ol' meal, you'll want to make sure your price quantities are being managed with precision. To do this, just pass the ID of the price whose quantity needs a nudge (up or down) as the co-pilot when you call the increment or decrement methods:

```php
$user->subscription()->incrementQuantity(1, 'price_chat');
```

Remember, this is a high-stakes game of Tetris – if a price falls and nobody's around to increment it, did it really happen? 🧱

P.S. If you're feeling lost, take a gander at [subscriptions with multiple products](#subscriptions-with-multiple-products) for some handy guidelines. 😉

 Alrighty then! Let's dive into the world of Laravel subscriptions, where one size does not fit all and customers can customize their helpdesk experience like a Michelin-starred chef picks their spices. 🍳🥘

Imagine you're building a customer service "helpdesk" application that caters to the needs of all kinds, from tech titans to soup-loving grandmas. To keep things fair and square, you charge a base subscription fee of $10 per month, but for those who can't live without instant help (we feel ya!), there's an add-on product for live chat that'll cost you an extra $15 monthly. 💰💬

Now, when creating checkout sessions for subscriptions, Laravel lets you load up a subscription with multiple products by passing an array of prices as the first argument to the `subscribe` method. Here's what it looks like in code:

```php
use Illuminate\Http\Request;

Route::post('/user/subscribe', function (Request $request) {
    $checkout = $request->user()->subscribe([
        'price_monthly',
        'price_chat',
    ]);

    return view('billing', ['checkout' => $checkout]);
});
```

In this example, your customers will have two prices attached to their `default` subscription, and both will be billed according to their respective billing intervals. If you want to specify a quantity for each price, just pass an associative array of key/value pairs:

```php
$user = User::find(1);

$checkout = $user->subscribe('default', ['price_monthly' => 1, 'price_chat' => 5]);
```

Now, if you want to add another price to an existing subscription, you should use the subscription's `swap` method. Remember to include the current prices and quantities when invoking the `swap` method:

```php
$user = User::find(1);

$user->subscription()->swap(['price_chat', 'price_original' => 2]);
```

This example will add a new price, but the customer won't be billed until their next billing cycle. If you need to bill them immediately, use the `swapAndInvoice` method:

```php
$user->subscription()->swapAndInvoice(['price_chat', 'price_original' => 2]);
```

To remove prices from a subscription, simply use the `swap` method and omit the price you want to delete. But remember, you can't remove the last price on a subscription. Instead, it's time for a subscription breakup: cancel that subscription!

```php
$user->subscription()->swap(['price_original' => 2]);
```

> [**WARNING**: **SPOILER ALERT!**](#s)
> Trying to remove the last price on a subscription will lead to an error. Instead, you should call off the entire subscription. Cue the sad trombone sound effect! 🎺😭

And there you have it! Now your customers can enjoy the freedom of customizing their helpdesk experience while you sit back and marvel at your Laravel mastery. 😎🚀

 ### Aquatic and Iron Pumping Extravaganza! 🏊‍♂️🏋️‍♂️

Paddle's got your back when it comes to aquatic acrobatics AND muscle mania! Imagine running a gym where clients can dive into the pool one day, and lift some serious weights the next, all while enjoying flexible pricing for each swim or squat session. 🌊🏋️‍♀️

When it's time to sign up your customers for their aquatic or iron adventures, you can use Laravel's powerful magic! Here's an example of creating a monthly swimming subscription:

```php
use Illuminate\Http\Request;

Route::post('/seaworld/seasonpass', function (Request $request) {
    $customer = $request->user(); // Assuming we have a user logged in
    $underwater_fun = 'pri_123'; // Unique ID for your swimming subscription

    $customer->subscribeToSomethingFishy($underwater_fun, 'swimming'); // Just imagine the fun this method call brings 🐠🌊

    return view('billing', ['checkout' => $underwater_fun]);
});
```

Now, our customer is all set for a monthly aquatic extravaganza! But what if they want to upgrade to an annual pass? No problemo! Simply modify the price of their existing subscription:

```php
$customer->switchFromSeasonalToLifetimeSwimmingPass($swimmingYearly = 'pri_456');
```

And if they ever get tired of splashing around, there's always the option to cancel their subscription entirely:

```php
$customer->cancelMyAquaticAdventures(); // A sad day for us, but your customer might appreciate it 🌞
```

Hope you find this documentation as entertaining as a pool party! Now go on and conquer the aquatic world! 🎉🏊‍♂️🏋️‍♂️

 ### Timeout-ing Subscriptions Like a Boss

Ready to give your customers a break? Cool, let's chillax their subscriptions with some PHP!

To put a subscription on ice, simply call the `chill` method on the user's icy-cold subscription:

```php
$user->subscription()->chill();
```

When you chill a subscription, our Cashier buddies will automatically update the `frozen_at` column in your database. This column is super important, it helps our chiller bots know when to start serving up `true` during a frosty interrogation. For instance, if Mr. Customer chills his subscription on March 1st but his next chillout wasn't due until the 5th, our chiller bots will keep serving up `false` until the 5th. This is because most apps are pretty cool about letting customers enjoy their frozen features until the end of their billing period.

By default, chilling happens at the next billing cycle so your customer can still thaw out the rest of the chill they paid for. But if you want to freeze a subscription right now, no sweat! You can use the `chillNow` method:

```php
$user->subscription()->chillNow();
```

With the `chillUntil` method, you can freeze a subscription until a specific point in time that's, like, totally tubular:

```php
$user->subscription()->chillUntil(now()->addMinutes(90));
```

Or, if you want to instantly freeze the subscription until a particular moment in time, use the `chillNowUntil` method:

```php
$user->subscription()->chillNowUntil(now()->addMonths(1));
```

Wanna check if a user is still enjoying their chill period, even though their subscription's on ice? Use the `onChilledGracePeriod` method:

```php
if ($user->subscription()->onChilledGracePeriod()) {
    // Do some cool stuff... or maybe just some regular stuff.
}
```

When it's time to thaw out a chilled subscription, just yell "Unfreeze it!" and invoke the `thaw` method on the icy block:

```php
$user->subscription()->thaw();
```

> [!ATTENTION]
> A subscription cannot be manipulated while it's chilled out. If you want to switch plans or adjust quantities, you gotta unfreeze first, dude!

 Alrighty then, let's dive into the world of subscription management, Laravel style!

### Unsubscribing Star-Trek Style

To unsubscribe from the universe of endless bills (or just a plan), point your PHP at a user's subscription:

```php
$user->beamDownSubscriptions();  // Feel free to imagine Captain Kirk in the middle of this code
```

When a subscription is beamed away, Cashier will set the `ends_at` column in your database. This stardate is used to figure out when the `subscribed` method should start returning "false", alien-like signals indicating the end of our friendship (or plan). For instance, if a customer cancels their subscription on Earth-Day 1, but the subscription was not set to self-destruct until Earth-Day 5, the `subscribed` method will continue to return "true" until Earth-Day 5. This is because even in space, we like to give our customers a chance to enjoy the ride until the end of their billing cycle.

You may check if a user has canceled their subscription but are still enjoying their "grace period" using the `onGracePeriod` method:

```php
if ($user->beamDownSubscriptions()->onGracePeriod()) {
    // Time travel back to this point, there's something important here!
}
```

If you wish to unsubscribe immediately, you may call the `cancelNow` method on the subscription:

```php
$user->beamDownSubscriptions()->cancelNow();  // This is like hitting the self-destruct button, no turning back now!
```

To stop a subscription on its grace period from canceling, you may invoke the `stopCancelation` method:

```php
$user->beamDownSubscriptions()->stopCancelation();  // A Klingon just said "negotiate"
```

> [!WARNING]
> Paddle's subscriptions cannot be resurrected after being canceled. If your customer wishes to rejoin the Federation, they will have to create a new subscription.

 **Subscription Shindigs (Upfront Payment Required)**

Welcome, brave data wrangler! You've come to the right place if you're ready to dance with the devilish delight of a Laravel subscription trial. But beware, before you can twirl your way through our trial, there's one tiny detail we need to discuss - the price of admission.

You see, in this world of virtual hoedowns, there's no such thing as a free dance, not even for a jive-master like yourself. You'll have to provide us with a payment method before you can boogie down to our trial offerings. We promise it won't break the bank - think of it as the cost of a fancy cowboy hat or a jar of high-quality boot polish.

<a name="length"></a>

**Trial Duration**

Now that you've got your dancing shoes on, let's talk about the length of our subscription trial. We figure 30 days should be just enough to get you hooked without leaving you penniless or overwhelmed. Consider it a taste test of our fine Laravel features - if you love what you taste, well, then, partner, we got some great deals just waiting for you!

<a name="automatic-renewal"></a>

**Automatic Renewal**

We know that once you've danced with our subscription services, you won't want to leave the dance floor. To make sure you never miss a beat, we'll set up an automatic renewal system. Just like your favorite streaming service, our system will automatically continue your subscription when the trial ends unless you decide to take a break and head for the barn.

<a name="cancelling"></a>

**Cancellation Policy**

But if the music changes and you've got to go, we won't hold it against you. You can cancel your subscription at any time without having to explain yourself to a judgemental dance partner. Just head over to your account settings and click "cut a rug" no more. We promise not to cry (too much) as you ride off into the sunset.

<a name="billing-cycle"></a>

**Billing Cycle**

One last thing before we hit the dance floor: our billing cycle is on the 1st of every month. So, if you sign up in the middle of the month, your subscription will start immediately and be billed at the end of that month, not the next one. It's like paying for a full month of dancing, even though you only got halfway through it - we know, it's a tough life.

So there you have it, cowboy! Laravel's subscription trial explained with just the right amount of western flair to make you want to grab your guitar and strum along. Now, let's saddle up and see what our subscription services can do for you!

 ### Ready to Woo Your Customers with a Trial, But Still Need Their Credit Card Info for Laughs?

If you're all about giving your customers a taste of the good life (your service) before they commit, but also want their credit card details because... well, who doesn't love a laugh at checkout? Then buckle up, partner! Let's get this show on the road.

First things first: Head over to the Paddle dashboard and set a trial duration for the price your customer is subscribing to. Once that's done, it's time to initiate the checkout session like a boss:

```php
use Illuminate\Http\Request;

Route::get('/user/subscribe', function (Request $request) {
    $checkout = $request->user()
        ->subscribe('pri_monthly')
        ->returnTo(route('home'));

    return view('billing', ['checkout' => $checkout]);
});
```

When the `subscription_created` event arrives at your doorstep (via your application), Cashier will set the trial end date on the subscription record in your database and tell Paddle to hold off on billing your customer until after that date. That gives you plenty of time to enjoy some well-deserved laughter!

> [!ATTENTION]
> Remember, if a customer's trial ends without cancellation, they'll be charged faster than you can say "I told you so." So don't forget to remind your users about their trial expiration date—you wouldn't want to miss out on the fun!

To find out if your user is currently enjoying the complimentary ride, you can use the `onTrial` method of the user instance:

```php
if ($user->onTrial()) {
    // ...
}
```

If you're curious about whether an existing trial has already expired, then the `hasExpiredTrial` method is your new best friend:

```php
if ($user->hasExpiredTrial()) {
    // ...
}
```

Want to know if a user is on trial for a specific subscription type? Well, that's as easy as providing the type in the `onTrial` or `hasExpiredTrial` methods:

```php
if ($user->onTrial('default')) {
    // ...
}

if ($user->hasExpiredTrial('default')) {
    // ...
}
```

And there you have it! Now you're all set to offer trial periods with an upfront payment method, giving your customers a taste of the good life (and you a chance to giggle at their checkout)! 🥳😂😅

 ### With a Taste Before You Pay! 🍔

If you're offering a taste test without asking for payment details upfront, no worries, Laravel has got your back! Simply set the `trial_ends_at` column on your customer record (connected to your user) to whatever date suits your trial duration. This is usually done during user registration:

```php
use App\Models\User;

$user = User::create([
    // ...
]);

$user->tasteTest(now()->addDays(10));
```

We like to call this type of trial a "Complimentary Tasting" since it's not tied to any existing subscription. The `isTasting` method on the `User` instance will return `true` if today's date is not past the value of `trial_ends_at`:

```php
if ($user->isTasting()) {
    // User is still enjoying their freebie...
}
```

Once they've decided they can't live without our app, you may use the `subscribe` method as usual:

```php
use Illuminate\Http\Request;

Route::get('/user/subscribe', function (Request $request) {
    $checkout = $request->user()
        ->subscribe('pri_monthly')
        ->returnTo(route('home'));

    return view('billing', ['checkout' => $checkout]);
});
```

To fetch the user's tasting expiration date, you can use the `tastingEndsAt` method. This method will return a Carbon date instance if the user is currently tasting or `null` if they aren't. You may also pass an optional subscription type parameter if you'd like to get the expiration date for a specific subscription other than the default one:

```php
if ($user->isTasting('default')) {
    $expiry = $user->tastingEndsAt();
}
```

You can use the `onComplimentaryTrial` method if you wish to know specifically that the user is still enjoying their "Complimentary Tasting" and hasn't subscribed yet:

```php
if ($user->onComplimentaryTrial()) {
    // User is still savoring their free trial...
}
```

<a name="extend-or-activate-a-trial"></a>
Now, if you want to extend their tasting period or activate a subscription (because who can resist our app?), you can use the `extendTasting` and `subscribe` methods respectively:

```php
$user->extendTasting(now()->addDays(10)); // Extend the current tasting period
$user->subscribe('pri_monthly'); // Activate a subscription for premium monthly access
```

 Alright, let's dive into the world of Laravel subscriptions! 🚀🎫

#### Extend Your Stay or Pop the Champagne Corks 🎉

Got a subscription that's about to expire? Don't panic! You can extend your stay like a VIP at an exclusive club. Just summon the `extendTrial` method and give it a heads-up of when you plan to check out:

```php
$user->subscription()->extendTrial(now()->addDays(5)); 🕒 🔥 🍾
```

#### Activate Your Subscription or Cut the Ribbon 🎈

Ready to jump into the deep end and officially become a subscriber? No need for invitation envelopes! Just end your trial in style by calling the `activate` method on the subscription:

```php
$user->subscription()->activate(); 🎉 🥳 🎊
```

<a name="handling-paddle-webhooks"></a>

#### Handling Paddle Webhooks (AKA Party Favors) 🎁

Paddle webhooks are like party favors for your subscriptions. To handle them with grace, make sure you've set up an event listener in Laravel:

```php
event(new \App\Events\YourEventName);
```

Now sit back and enjoy the party as these webhooks bring gifts (payment confirmations) right to your doorstep! 🎈🌟🎉

 ## Navigating Paddle's Webhook Wackiness!

Prepare to embark on a wild journey through the world of webhooks with your trusty sidekick, Laravel Cashier! Just like a superhero getting notified by Bat-Signal, your app can receive a variety of signals from Paddle - yes, think Batman but with more subscriptions and less crime.

By default, Cashier's service provider has already registered a secret hideout (route) for incoming webhook requests to find at the Cashier's webhook controller. This superhero headquarters will handle all the incoming signals without breaking a sweat.

Initially, this controller is equipped to handle cancellation of subscriptions that are as reliable as a used clown car, subscription updates, and payment method switcheroos - but fret not! Once we don our capes and dive into some custom code, you can train this controller to handle any Paddle webhook event your heart desires.

To ensure your app is ready for the webhook wilderness, remember to [set up the webhook URL in the Paddle control panel](https://vendors.paddle.com/notifications-v2). By default, Cashier's webhook controller listens at the swanky /paddle/webhook URL path. The complete list of all the events you should enable in the Paddle control panel are:

- Customer Capes Toggled (a.k.a. Updated)
- Transaction Completed (as in, Batman has saved Gotham again!)
- Transaction Cape Cleaning (a.k.a. Updated)
- Subscription Issued (aka, Robin got a promotion)
- Subscription Upgraded (or Commissioner Gordon finally let Batsy join the police force)
- Subscription Paused (Batman's taking a vacation to Wayne Island)
- Subscription Canceled (Gotham is safe for now, Batman retires!)

> [!CAUTION]
> Keep those incoming signals secure with Cashier's built-in [webhook signature verification](/docs/{{version}}/cashier-paddle#verifying-webhook-signatures) middleware. It's like Batman's utility belt, but for webhooks!

<a name="webhooks-csrf-protection"></a>
Now that you and your app are ready to tackle Paddle's webhook wonderland, grab your utility belts (and some coffee), and let the superhero adventures begin!

 Ahoy there, Laravel pirates! Let's talk about a swashbuckling topic - Webhooks and CSRF Protection!

Since Paddle webhooks are our trusted treasure maps guiding us to buried gold (i.e., data), we don't want ol' Captain Laravel meddling with its CSRF token checks, or we might end up with a bucket of seawater instead. To keep things shipshape, you should ensure that Laravel leaves the Paddle webhooks alone in your application's `bootstrap/app.php` file:

```php
Arrrr! Prevent that CSRF verification from happening, ye scurvy dogs!
->withMiddleware(function (Middleware $middleware): void {
    $middleware->setCSRFExceptions(['paddle/*']);
})
```

Don't worry, matey, we're not asking you to carve this into a wooden plank. Just drop it in your `bootstrap/app.php` file and set sail on the high seas of data transfer!

 Alright, buckle up, coding cowboys and codettes! Let's dive into the wild world of webhooks and local development with a side of chuckles. 🤠🥄

First off, imagine you're hosting a never-ending house party for Paddle, but they can't show up in person because... well, they're digital. No problem! Instead, they'll send their RSVPs via webhooks – but to hear these digital party invites, your application needs to be dressed to impress and ready to dance.

During local development, don your fancy tuxedo (or gown) made of a site sharing service like [Ngrok](https://ngrok.com/) or [Expose](https://expose.dev/docs/introduction). Think of it as the Uber Eats app for your application – it delivers your app to Paddle, no matter where you're coding from!

If you're using Laravel Sail for local development (which is like having a personal yacht to sail across the ocean of code), then Sail has just the right nautical navigation command for sharing your site. 🚢🚀

Now, let's get this party started by defining our webhook event handlers. It's time to create those dance moves that make Paddle say "Encore!" 🎉🎊

<a name="defining-webhook-event-handlers"></a>

And remember, when the going gets tough and you start feeling like a one-legged cowboy trying to ride a bucking bronco (which is coding sometimes), just take a deep breath and imagine it's Paddle sending you another webhook invite. That should put a smile on your face! 😊👍🏼🤖

 Alright, let's dive into the world of Cashier webhooks! Think of them as party invitations from Paddle HQ - but instead of cheese and wine, they bring exciting subscription updates straight to your Laravel bash. 🥳

Cashier takes care of the basics, like handling canceled subs on failed charges and other common webhooks. But if you're one of those people who just can't resist tinkering under the hood (we see you!), you can set up your own webhook event handlers. 👨‍🔧

Listen to these groovy events dispatched by Cashier:

- `Laravel\Paddle\Events\WebhookReceived` - The grand entrance, where the Paddle webhook introduces itself.
- `Laravel\Paddle\Events\WebhookHandled` - A curtsy after the event has been successfully processed.

Both events come with all the juicy details of the Paddle webhook. For example, if you're into the 'transaction.billed' scene (who isn't?), you can create a listener to handle this hot event:

```php
<?php

namespace App\Listeners;

use Laravel\Paddle\Events\WebhookReceived;

class PaddlePartyPlanner
{
    /**
     * Handle the Paddle webhook invitation.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event->payload['event_type'] === 'transaction.billed') {
            // Dance the night away with the incoming event... 💃
        }
    }
}
```

Cashier also throws dedicated events based on the type of webhook received, complete with relevant models like billables, subs, or receipts for a good ol' Laravel dance party:

<div class="content-list" markdown="1">

- `Laravel\Paddle\Events\CustomerUpdated` - The hip-shaking 'customer updated' number.
- `Laravel\Paddle\Events\TransactionCompleted` - The crowd-pleasing 'transaction completed' finale.
- `Laravel\Paddle\Events\TransactionUpdated` - A smooth mid-party transaction update groove.
- `Laravel\Paddle\Events\SubscriptionCreated` - The sizzling 'subscription created' introduction.
- `Laravel\Paddle\Events\SubscriptionUpdated` - The energetic 'subscription updated' group dance.
- `Laravel\Paddle\Events\SubscriptionPaused` - A chill 'subscription paused' break dance.
- `Laravel\Paddle\Events\SubscriptionCanceled` - The bittersweet 'subscription canceled' farewell dance. 💔

</div>

Feeling adventurous? You can customize the default webhook route by setting the `CASHIER_WEBHOOK` environment variable in your application's `.env` file:

```ini
CASHIER_WEBHOOK=https://example.com/my-paddle-webhook-url
```

Last but not least, don't forget to verify those webhook signatures for authenticity - we wouldn't want any crashers at our party! 🚪🔒

 ### Guarding Your Webhooks Like a Fort Knox (But Funny)! 💰🔒

Want to make sure those webhook shenanigans are on the up and up? Fear not, because Paddle's got your back (and webhooks) with their signature verification superpowers! 🚀

For your convenience, Laravel's Cashier has sprinkled some magic middleware that checks if the incoming Paddle webhook request is as squeaky clean as a baby giraffe.

To enable this webhook validation, just make sure your application's `.env` file is kitted out with the `PADDLE_WEBHOOK_SECRET` environment variable. You can grab this secret like a digital treasure from your Paddle account dashboard.

<a name="single-charges"></a>

*Now that's what I call secure webhooking!* 🕵️‍♂️🔏

 Ahoy there, brave coder! Buckle up as we embark on an exciting journey through the shimmering seas of Laravel's Single Charge feature.

<br>

<a name="introduction"></a>
### Introduction 🌈 Unicorns and Rainbows 🌈

In this magical land, we're going to help you charge customers for your glorious products! So, grab your enchanted sword (keyboard), put on your favorite wizard robe (programmer's attire), and let's set sail!

<br>

<a name="charging-a-single-transaction"></a>
### Charging a Single Transaction 🛠️ Crafting the Perfect Spell 🛠️

For those who prefer to stick with one transaction, we've got the perfect spell casted for you! Here's the formula:

```php
\Stripe\Charge::create(
    [
        'amount' => $amount * 100, // Amount in cents
        'currency' => 'usd',
        'source' => $source->id,
        'description' => $description
    ]
);
```

Don't worry, it's just a simple incantation to make your transactions more powerful than Merlin's beard!

<br>

<a name="storing-card"></a>
### Storing Customer's Card 🏛️ Building the Bank of Camelot 🏛️

If you'd like to store your customer's card for future use, we've got a castle just waiting to be fortified! Here's how to create one:

```php
$customer = \Stripe\Customer::create([
    'email' => $customer->email,
]);

$customer->sources->create([
    'source' => $token->id,
    'usage' => 'custom',
]);
```

Now you can rest assured that your customer's card is as safe and sound as Excalibur in the stone!

<br>

<a name="attaching-card-to-customer"></a>
### Attaching Card to Customer 🤝 Handing Over Excalibur 🤝

Have you already created a customer and want to attach their card to them? No problem, here's the ritual:

```php
\Stripe\Customer::retrieve(
    $customerId
)->sources->create([
    'source' => $token->id,
]);
```

Just like a knight pledging their allegiance to King Arthur, this card will now serve your customer loyally!

<br>

So, there you have it - Laravel's Single Charge: the perfect blend of magic and code for your eCommerce journey. Happy charging, adventurer! 🥂

 Alrighty, let's dive into the world of commerce in Laravel land! If you're hankering to buy some swag for your customers, you can whip up a purchase storm using our trusty `checkout` method on a billable model instance. This magical spell accepts one or multiple price ID's (think Harry Potter spells with prices instead of curses!). If you need to specify the quantity of a product that's going out of stock faster than a Tickle Me Elmo at Christmas, just use an associative array and be as precise as a Swiss watch!

```php
use Illuminate\Http\Request;

Route::get('/buy', function (Request $request) {
    $checkout = $request->user()->checkout(['pri_tshirt', 'pri_socks' => 5]);

    return view('buy', ['checkout' => $checkout]);
});
```

Now that you have a checkout session, it's time to unleash the power of our Cashier-provided `paddle-button` Blade component. This is like summoning a friendly shopping genie who presents the Paddle checkout widget for your users to complete their magical purchase!

```blade
<x-paddle-button :checkout="$checkout" class="px-8 py-4">
    Buy like you mean it!
</x-paddle-button>
```

Your checkout session has a `customData` method, which lets you pass any custom data you want to the underlying transaction creation. To learn more about your custom data options, consult the Paddle documentation as if it were a crystal ball revealing your destiny!

```php
$checkout = $user->checkout('pri_tshirt')
    ->customData([
        'custom_option' => $value,
    ]);
```

And voila! Now you can charge for products like a pro, leaving your users spellbound (and possibly with new swag!) 🤓🛍️✨

 ### Unwinding Financial Shenanigans: The Art of Transaction Reversals in Laravel Land!

Welcome to the wild world of transaction refunding, where we turn frowns upside down and return your customers' hard-earned dough back into their digital wallets. If you've stumbled upon a sale gone awry and need to make amends, fear not, for Laravel and Cashier have joined forces to help you out!

To perform a refund on a Paddle purchase, cast a spell on the `Cashier\Paddle\Transaction` model by invoking its mighty `refund` method. This incantation requires a reason as its opening act, followed by one or more price ID's to refund, optionally accompanied by amounts in an associative array. To find the transaction you wish to conjure up, simply cast `transactions()` on your billable model.

For instance, imagine you've accidentally double-billed Peter Parker for his latest Spider-Man comic bundle, and now you need to right this cosmic wrong:

```php
use App\Models\User;

$spidermanFan = User::find(1); // Our friendly neighborhood hero

$transaction = $spidermanFan->transactions()->first(); // Find the transaction in question

$result = $transaction->refund('A Venomous Mistake', [
    'pri_123' => null, // Fully refund this price...
    'pri_456' => 2.00 // Only partially refund this price (because he still has the first issue)
]);
```

The above incantation targets specific line items within a transaction for reversal. Should you desire to undo the entire transaction, simply summon forth the reason:

```php
$result = $transaction->refund('A Venomous Mistake'); // Refund the whole shebang!
```

For further insights into the mystical art of refunds, we invite you to delve into [Paddle's refund documentation](https://developer.paddle.com/build/transactions/create-transaction-adjustments).

> [!CAUTION]
> Remember, dear wizard, that even a reversed transaction must first pass through Paddle's magical approval process before it can fully materialize and return your customer to their former balance.

Now, go forth and create a world where every financial faux pas has a silver lining! Happy refunding! 🕷️🚀✨

 ### Giving Back, the Laravel Way! 💰🎁

Who says accounting has to be dull? Fret not, dear developer, for we're about to embark on a rollercoaster ride of balancing books and digital dollars, all while keeping it fun and engaging!

You might already be well-versed in refunding transactions (if not, check out our earlier tutorial titled "The Great Escape: A Guide to Refunds"). Today, we're going to learn how to give those hard-earned bucks back - with a twist! We call it crediting, and it works like magic for boosting your customer's account balance for future sprees. But remember, credit where credit is due – only apply this to manually-collected transactions (the ones you collect like an old-school record shop owner).

```php
$transaction = $user->transactions()->first(); // Get the first transaction of the user

// Ready, set, credit! Let's fully credit a specific line item...
$response = $transaction->credit('Compensation', 'pri_123'); // Replace 'Compensation' with your desired reason and 'pri_123' with the unique identifier for this transaction adjustment
```

Looking for more credit-worthy insights? [Check out Paddle's documentation on crediting](https://developer.paddle.com/build/transactions/create-transaction-adjustments).

<a name="transactions"></a>

[!WARNING]
Don't even think about attempting to credit those automatically-collected transactions (like subscriptions). That's Paddle's job, and they do it with more finesse than a Vegas magician pulling rabbits out of hats! 🐰✨

 Alrighty then! Let's dive into the world of Laravel Transactions, where numbers crunch and coins change hands. You can effortlessly pluck an array of a model's financial escapades straight from the billfold via the `transactions` property.

```php
use App\Models\User;

$user = User::find(1); // Find ol' number one, ain't he a charmer?

$transactions = $user->transactions; // And now for the fireworks – these transactions pop up!
```

Transactions are like the old-fashioned cash registers of your product world, accompanied by their trusty receipts. Only the completed deals make it to your application's database – no half-baked business here, folks!

When you're listing a customer's transactions, you can use the transaction instance's methods to serve up the juicy payment deets. Say you want to display every transaction in a table, giving the user the option to download any of the invoices:

```html
<table>
    @foreach ($transactions as $transaction)
        <tr>
            <td>{{ $transaction->billed_at->toFormattedDateString() }}</td> // When did this happen? You'll find out soon enough!
            <td>{{ $transaction->total() }}</td> // How much did it cost? Well, let me check...
            <td>{{ $transaction->tax() }}</td> // What was the tax? I guess they ain't giving that away for free!
            <td><a href="{{ route('download-invoice', $transaction->id) }}" target="_blank">Download Invoice</a></td> // Need the receipt? Download away, partner!
        </tr>
    @endforeach
</table>
```

The `download-invoice` route may look like this:

```php
use Illuminate\Http\Request;
use Laravel\Paddle\Transaction;

Route::get('/download-invoice/{transaction}', function (Request $request, Transaction $transaction) {
    return $transaction->redirectToInvoicePdf();
})->name('download-invoice'); // Sounds like a plan!
```

Now that's what I call financial fun! 💰🤑🚀

 Alrighty, let's dive into the whimsical world of Laravel payments! Ever wondered how to unravel the mysteries of a customer's past and future financial shenanigans for those enchanting recurring subscriptions? Fear not, dear coder, for I present to you the magical duo: `lastPayment` and `nextPayment`!

```php
use App\Models\User;

$user = User::find(1); // Feel free to replace '1' with whatever tickles your fancy. Perhaps a unicorn ID?

$subscription = $user->subscription(); // A mystical bond forms between the user and their subscription.

$lastLoot = $subscription->lastPayment(); // This will reveal the treasure from their last payment journey (or, you know, it'll be null if there's no data yet).
$nextAdventure = $subscription->nextPayment(); // An exciting glimpse into the future! But watch out, it may return null if the subscription has been canceled or the cycle has ended.
```

Now, remember that these wondrous methods will bestow upon you an instance of `Laravel\Paddle\Payment`. However, beware! `lastPayment` might cast a veil of mystery over your quest by returning null when webhooks haven't synced the transactions yet. On the other hand, `nextPayment` can also play tricks on you by going missing once the billing cycle has vanished into thin air (just like subscriptions that have been canceled).

```blade
Upcoming adventure: {{ $nextAdventure->amount() }} (in shiny coins) due on {{ $nextAdventure->date()->format('d/m/Y') }}. Better start saving!
```

And that's a wrap, my friend! Now you can navigate the enchanted realm of Laravel payments with confidence and humor. Happy coding, and may your subscriptions ever be recurring!

 Alrighty, let's get our testing caps on and dive into the world of billing! First off, we don't want to be caught with our pants down when it comes to money matters, so it's crucial to give your billing flow a good old-fashioned manual shake-down. Ensure that integration dance goes as smoothly as Elton John at a disco – just without the sequins (unless you're into that).

Now, for those of you who prefer a more automated approach (and let's be honest, who doesn't?), Laravel has got your back with its very own HTTP Client! This little powerhouse can help you mimic those behind-the-scenes HTTP calls made to Paddle. While it won't test the actual responses from Paddle, think of it as a stand-in for your significant other in a long-distance relationship – it can't replace the real thing, but it's better than nothing!

This fantastic tool also comes in handy when you want to test your application without calling Paddle's API like a secret agent avoiding a hotline. So, whether you're testing within a Continuous Integration (CI) environment or just want to catch any potential errors before they cause a scene, Laravel's HTTP Client is the trusty sidekick you didn't know you needed!

Just remember: with great power comes great responsibility, so don't let this newfound testing superpower go to your head. And, as always, have fun coding! 🚀💪🎉