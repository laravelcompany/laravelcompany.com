 # Laravel Cashier: Your Buddy for Stripe Shenanigans! 💰💳

Hello, fellow web wranglers! Welcome to Laravel Cashier (Stripe Edition), your new best friend in the world of payments. You know, the one who helps you collect virtual dough without breaking a sweat or writing reams of code.

<a name="upgrading-cashier"></a>
## Upgrading Cashier: Level Up Your Payment Game!

Updating Cashier is like upgrading your gaming console from 8-bit to 64-bit graphics – a whole new world of features and smoother transactions awaits!

<a name="installation"></a>
## Installation: It's a Snap (Like a Credit Card Swipe)!

Installing Cashier is as simple as running a command in your terminal. No need to read complicated manuals or consult a magical genie – we've got this covered for you!

<a name="configuration"></a>
## Configuration: Set Up Your Stripe Account (Like a Boss)!

To make Cashier work its magic, we need to set up some details. Think of it like configuring your favorite gaming controller – once it's all set, you're ready to take on the world!

- **Billable Model**: Define which models can be billed (your customers).
- **API Keys**: Connect Cashier to Stripe using your secret keys. Don't worry; we won't tell anyone.
- **Currency Configuration**: Choose your preferred currency for transactions – because one man's euro is another man's dollar, after all!
- **Tax Configuration**: Set up tax rules and let Cashier handle the number crunching for you. Taxes are no fun, but we make them bearable!
- **Logging**: Keep a record of transactions (because who doesn't love a good audit trail?).
- **Using Custom Models**: If your application has custom user or subscription models, Cashier can work with those too!

<a name="quickstart"></a>
## Quickstart: Let's Get This Party Started!

Now that we have everything set up, let's dive into selling products and subscriptions. It's time to fill your digital coffers and watch the digital coins roll in!

<a name="customers"></a>
### Customers: Meet Your Digital Audience

Managing customers is like nurturing a garden – you need to tend to them, grow relationships, and keep them happy. With Cashier, managing your customer base has never been easier!

- **Retrieving Customers**: Pull up customer details with just a few lines of code.
- **Creating Customers**: Add new customers to your roster with ease.
- **Updating Customers**: Change customer information when needed – because life happens, even in the digital world.
- **Balances**: Check your customers' account balances (because everyone loves a good balance check).
- **Tax IDs**: Collect and verify tax IDs for your customers (because the IRS doesn't take kindly to misinformation).
- **Syncing Customer Data With Stripe**: Keep your local data in sync with Stripe's records.
- **Billing Portal**: Give your customers access to their own billing portal – because self-service is the future!

<a name="payment-methods"></a>
### Payment Methods: The Lifeblood of Transactions

Payment methods are like different tools in a gamer's arsenal – each one has its strengths and weaknesses. With Cashier, managing payment methods is a breeze!

- **Storing Payment Methods**: Save your customers' preferred payment methods for future transactions (because convenience is key).
- **Retrieving Payment Methods**: Pull up stored payment methods with just a few lines of code.
- **Payment Method Presence**: Check if a customer has multiple payment methods saved (because options are always good).
- **Updating the Default Payment Method**: Change your customers' default payment method as needed.
- **Adding Payment Methods**: Give your customers the option to add new payment methods to their accounts.
- **Deleting Payment Methods**: Remove unwanted or expired payment methods from a customer's account (because digital clutter is never a good thing).

<a name="subscriptions"></a>
### Subscriptions: The Ticket to Recurring Revenue!

Subscriptions are like a steady stream of virtual coins flowing into your account – the lifeblood of many online businesses. With Cashier, managing subscriptions is a piece of cake!

- **Creating Subscriptions**: Add new subscribers and set up their plans in no time.
- **Checking Subscription Status**: Keep track of who's paying, who's past due, and who's canceled (because knowledge is power).
- **Changing Prices**: Adjust subscription prices as needed – because the market changes, and so should your pricing strategy.
- **Subscription Quantity**: Manage quantity limits for subscriptions – because sometimes, more isn't always better.
- **Subscriptions With Multiple Products**: Offer multiple products in a single subscription (because variety is the spice of life).
- **Multiple Subscriptions**: Allow customers to have multiple active subscriptions at once (because everyone loves options).
- **Usage Based Billing**: Charge based on usage – because fairness is key.
- **Subscription Taxes**: Apply taxes to your subscriptions as required by law (because the taxman cometh).
- **Subscription Anchor Date**: Choose when subscription billing begins – because timing is everything.
- **Canceling Subscriptions**: Cancel subscriptions with ease, or allow customers to cancel themselves (because freedom of choice is important).
- **Resuming Subscriptions**: Reactivate canceled subscriptions as needed (because second chances are a beautiful thing).

<a name="subscription-trials"></a>
### Subscription Trials: A Taste Before You Buy!

Subscription trials give your customers the chance to try before they buy – a fantastic way to attract new business. Cashier makes setting up trials simple!

- **With Payment Method Up Front**: Require payment information at signup for trial access (because serious customers are willing to put their money where their mouth is).
- **Without Payment Method Up Front**: Offer trials without requiring payment information (because sometimes, a free taste is all it takes).
- **Extending Trials**: Allow customers to extend their trials if they need more time to make up their minds (because indecisiveness happens).

<a name="handling-stripe-webhooks"></a>
### Handling Stripe Webhooks: Stay in the Loop!

Webhooks keep you informed about important Stripe events – like a digital notification system for your payments. With Cashier, handling webhooks is easy peasy!

- **Defining Webhook Event Handlers**: Tell Cashier which webhook events to listen for and what actions to take when those events occur (because knowledge is power).
- **Verifying Webhook Signatures**: Ensure that the webhook data you receive is from Stripe and hasn't been tampered with (because security is of utmost importance).

<a name="single-charges"></a>
### Single Charges: One-Time Payments!

Single charges are like special abilities in a game – powerful, one-time boosts to your digital wallet. With Cashier, creating single charges is a breeze!

- **Simple Charge**: Make a simple charge with just a few lines of code (because simplicity is the ultimate sophistication).
- **Charge With Invoice**: Create a charge and attach it to an invoice (because organization is key).
- **Creating Payment Intents**: Use payment intents for custom flows or when you don't need subscriptions (because flexibility is important).
- **Refunding Charges**: Issue refunds quickly and easily when needed (because mistakes happen).

<a name="invoices"></a>
### Invoices: Keep Track of Your Transactions!

Invoices are like a digital receipt book – a record of all your transactions. With Cashier, managing invoices is a walk in the park!

- **Retrieving Invoices**: Pull up individual or multiple invoices with ease (because knowledge is power).
- **Upcoming Invoices**: Check when upcoming invoices will be processed (because planning ahead is essential).
- **Previewing Subscription Invoices**: Get a sneak peek at future subscription invoices (because knowing what's coming is always helpful).
- **Generating Invoice PDFs**: Create and download invoice PDFs for your records or customer use (because paperless isn't always practical).

<a name="checkout"></a>
### Checkout: The Final Frontier of Transactions!

Checkout is the last stop before the sale – the digital version of a store's cash register. With Cashier, managing checkouts is smooth sailing!

- **Product Checkouts**: Offer one-time product purchases (because sometimes, people just want one item).
- **Single Charge Checkouts**: Make single charges during checkout (because simplicity is the ultimate sophistication).
- **Subscription Checkouts**: Offer subscription plans during checkout (because recurring revenue is the dream).
- **Collecting Tax IDs**: Collect tax IDs during checkout when needed (because the IRS doesn't take kindly to misinformation).
- **Guest Checkouts**: Allow customers to make purchases without creating an account (because convenience is key).

<a name="handling-failed-payments"></a>
### Handling Failed Payments: The Art of Persuasion!

Failed payments are like a game of cat and mouse – you need to keep trying until you catch the payment. With Cashier, handling failed payments is a breeze!

- **Confirming Payments**: Reattempt failed payments automatically (because persistence pays off).

<a name="strong-customer-authentication"></a>
### Strong Customer Authentication: Security Measures for the Win!

Strong customer authentication is like adding an extra layer of security to your transactions – a digital moat around your digital castle. With Cashier, handling strong customer authentication is a piece of cake!

- **Payments Requiring Additional Confirmation**: Add additional security measures when required (because safety first).
- **Off-session Payment Notifications**: Stay informed about important payment events (because knowledge is power).

<a name="stripe-sdk"></a>
### Stripe SDK: A Powerful Tool at Your Fingertips!

The Stripe SDK gives you access to a wealth of powerful features and tools – like a magic wand for your payment needs. With Cashier, using the Stripe SDK is a piece of cake!

<a name="testing"></a>
### Testing: Practice Makes Perfect!

Testing is like rehearsing before the big game – it helps ensure everything runs smoothly when the real action begins. With Cashier, testing is simple and straightforward!

 Ahoy there, matey! Buckle up as we dive into the swashbuckling world of Laravel Cashier Stripe - your ticket to a treasure trove of hassle-free subscription billing services! 🏴‍☠️💰

Remember the tedium of subscription management code? Well, those days are long gone thanks to this charming pirate who'll handle all that boring boilerplate for ye. It's like having Jack Sparrow as your personal billing captain! 🌺

Cashier isn't just a simple sub-commander; it's an all-star crew member, decked out with coupon handling, subscription swapping, customizable "quantities", graceful cancellation periods, and even the ability to whip up snazzy invoice PDFs that would make Captain Barbossa envious! 📜

<a name="upgrading-cashier"></a>
Now, if you've been a loyal user of Laravel Cashier Stripe and you're eyeing the latest treasure map, fret not! We got yer back with [Upgrading Cashier](https://github.com/laravel/cashier-stripe) - a helpful guide to navigating the exciting updates in this ever-evolving swashbuckling adventure. 🛡️🎉🏴‍☠️

So hoist the Jolly Roger high and let's set sail on this exciting journey together! Arrrr, matey! 🌺🌊🏴‍☠️

 ## Cashier's Changelog: Laugh, Cry, Upgrade! 🎉😓📈

Ready to dance with the big boys? Let's upgrade your Cashier to the latest version! But first, remember to read our upgrade guide - think of it as a roadmap to avoiding breakup calls from your code 😅

> [🚨ATTENTION ALL DEVELOPERS]

To keep things stable, Cashier sticks with a specific Stripe API version like a loyal golden retriever. Version 16, for instance, plays fetch with Stripe API version `2025-06-30.basil`. Now, don't get excited; we won't be updating the API version unless there's a new feature or improvement that we simply can't resist 🤩

<a name="installation"></a>
### Installation Instructions

1️⃣ First things first: Get your popcorn ready! It's going to be a rollercoaster ride of excitement and learning.

2️⃣ Pull up the Cashier upgrade guide - it's our relationship manual. Follow its instructions closely, just like how you follow a recipe to bake the perfect cake 🎂

3️⃣ Update your code base according to the guide. Remember, this is not just a simple makeover; it's more like a life-changing metamorphosis for your application!

4️⃣ Once you're done with the upgrades, take a moment to appreciate your new and improved application - it deserves an applause 👏

And that's a wrap! Your Cashier is now upgraded, ready to handle all the financial transactions like a pro 💳✨

 Alrighty, let's get this Cashier party started! 🎉

First things first, grab the Cashier package for Stripe using your Composer's magical bag o' tricks:

```shell
composer require laravel/cashier
```

Next up, unleash Cashier's migrations upon your database with a swift `vendor:publish` Artisan command:

```shell
php artisan vendor:publish --tag="cashier-migrations"
```

Now it's time to make magic happen! Give your database the good ol' `php artisan migrate` treatment:

```shell
php artisan migrate
```

Cashier's migration spells will sprinkle some extra columns into your `users` table and conjure up a new `subscriptions` table for all your customer's subscriptions. If you've got subscriptions with multiple prices, fear not! A `subscription_items` table will be raised from the ashes to serve that purpose.

Should you feel the need, you can also publish Cashier's configuration file using, you guessed it, another `vendor:publish` Artisan command:

```shell
php artisan vendor:publish --tag="cashier-config"
```

Finally, to ensure Cashier can handle all Stripe events like a boss, don't forget to [configure Cashier's webhook handling](#handling-stripe-webhooks). 🌈🎩

> [!WARNING]
> Just a friendly heads up from our friends at Stripe: be sure to keep the `stripe_id` column case-sensitive if you're using MySQL. You can find more deets in their [documentation](https://stripe.com/docs/upgrades#what-changes-does-stripe-consider-to-be-backwards-compatible).
>
> Happy coding, adventurer! 🥳🚀

 Alright, buckle up, coding cowboy/cowgirl! We're about to dive into the wild west of Laravel configuration, where the rules are as flexible as a tumbleweed and just as charming. 🌵

<a name="billable-model"></a>

### Billable Model

If you fancy yourself as a modern-day cowboy working for a law firm, you might want to make your models "Billable". You know, because they'll be charging clients by the hour (or minute, or second, whatever your app decides). To do this, simply add `use Illuminate\Database\Eloquent\Billable;` at the top of your model file. Then, voila! Your cowpoke model is now ready to bill. 🤠

Remember, just because it's a wild west doesn't mean you can go around shooting up all the databases. You'll still need to ensure you have the necessary relationships in place before attempting to bill anything.

But hey, if you do manage to wrangle your data into submission and make those models Billable, you'll be able to track your cowboy-hour more accurately than a coyote tracks a rabbit (which is pretty darn accurate, if we do say so ourselves). 🦃🚀

Now, let's get back to the saloon and see who's got the best yarn to spin!

 ### Cashier Chaperone! 💰💳📞

Ready to turn your Laravel app into a billing powerhouse? First, let's introduce you to the swanky `Billable` trait! Slap this bad boy onto your models, usually the suave `App\Models\User`, and voila! You're now equipped with all sorts of fancy billing tricks. Think: subscriptions, coupon codes, and payment method updates - we're talking James Bond level stuff here! 🕺

```php
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use Billable;
}
```

Now, Cashier assumes your billing model will be the suave `App\Models\User`. But what if you're a rebel who likes to do things differently? No worries! You can specify a different model via the `useCustomerModel` method. This shindig usually goes down in the `boot` method of your `AppServiceProvider` class:

```php
use App\Models\Cashier\User;
use Laravel\Cashier\Cashier;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::useCustomerModel(User::class);
}
```

[🚨Warning!🚨]
If you're using a model other than Laravel's supplied `App\Models\User`, you'll need to publish and tailor the [Cashier migrations](#installation) provided to match your alternative model's table name. Just think of it as giving your new suit the proper alterations! 🧤💼

 Alrighty then! It's time to don the cape and tights (or at least your developer hat) because we're about to embark on a thrilling adventure into the world of Stripe API keys! 🦸‍♂️🔑

First things first, you need to suit up your application with its very own Stripe superpowers. To do this, whisk over to your application's `.env` file and perform a ritual known as key-infusion (a.k.a. configuration). Fret not, dear friend, for the secret ingredients are readily available from the Stripe control panel:

```ini
STRIPE_KEY=your-stripe-key (aka The Key of Payment)
STRIPE_SECRET=your-stripe-secret (The Secret of the Stripe, obvs)
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret (The Webhook Secret, essential for authenticating those incoming messages from Stripe)
```

> 🚨🚨🚨 WARNING: WARNING! The `STRIPE_WEBHOOK_SECRET` environment variable is a critical component in your application's secret sauce. Make sure it's nestled cozily within your application's `.env` file, for this little gem ensures that only the real Stripe superheroes can send webhooks to you. 🦸‍♂️

Now that we've got that covered, let's move on to... Currency Configuration! (Cue dramatic music) Stay tuned for more exciting adventures in Laravel land! 🚀🎉

 ### Monetary Shenanigans with Cashier, Your Trusty Financial Sidekick! 💰💸

Ahoy there, coding cowboy/cowgirl! Let's get this cash-filled adventure started! By default, our reliable partner Cashier operates in the mighty U.S. Dollar (USD). But if you fancy a change to the Euro (EUR) or any other currencies supported by intergalactic trading bots, you can do that too! Just set your `CASHIER_CURRENCY` environment variable in your application's `.env` file:

```ini
CASHIER_CURRENCY=eur
```

Beyond setting the currency, you might want to add a bit of local flair when it comes to displaying those hard-earned (or easy, we don't judge) dough bills on invoices. To accomplish this, Cashier uses PHP's supercharged [NumberFormatter class](https://www.php.net/manual/en/class.numberformatter.php).

If you want to switch up the locale (French, Spanish, or any other exotic tongue), simply set `CASHIER_CURRENCY_LOCALE` in your environment variables:

```ini
CASHIER_CURRENCY_LOCALE=nl_BE
```

But heed this warning! To enjoy locales other than the vanilla English, make sure you've got the `ext-intl` PHP extension installed and operational on your server. It's like a secret sauce for those fancy invoices! 🍝🥘

> [!WARNING]
> If you attempt to use locales other than English, make sure you've got the `ext-intl` PHP extension installed and configured on your server. Failure to do so may result in a sad trombone sound effect 🎺 or an unexpected visit from international customs agents.

 ### Tax Time with Laravel and Stripe! 📞💰

Who needs accountants when you've got Stripe Tax (you can find it here: [Stripe Com Tax](https://stripe.com/tax))? With this magical tool, no more number crunching or late-night tax calculations. All your invoices generated by Stripe will have taxes automatically added, making you the hero of your own financial drama!

To get started, enable the autopilot for tax calculations by summoning the `calculateTaxes` method in the `boot` function of your application's `App\Providers\AppServiceProvider` class. Here's how to do it:

```php
use Laravel\Cashier\Cashier;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::calculateTaxes(); // Tax Time Activated! 🚨💸💰
}
```

Now, whenever a new subscription is created or a one-off invoice is generated, the system will perform an automatic tax calculation. But before we can start adding taxes to your customer's bills faster than you can say "tax evasion," we need some important details: their name, address, and tax ID (we're not asking for this information so we can write a song about them, but for proper tax calculations).

You can use Cashier's [customer data synchronization](#syncing-customer-data-with-stripe) and [Tax ID](#tax-ids) methods to gather this crucial information. 🕵️‍♂️📝

<a name="logging"></a>
<h3>Bonus Round! Track Your Taxes like a Pro 🤘</h3>

To keep track of your tax-related activities, enable logging by adding the following lines to your `config/cashier.php` file:

```php
'log_webhooks' => true, // Enable webhook logging for all transactions
'log_activities' => true, // Log all activities related to customer accounts and subscriptions
```

Now you can sit back, relax, and let the system handle your taxes like a boss. And remember, if you have any doubts or questions about your taxes, always consult a professional (we mean an accountant, not that friendly ghost from Scooby-Doo). 🎃👍

 ### Chatting with Cashier

Who needs a therapist when you can vent to Cashier, right? But if you ever find yourself in a heated argument (aka dealing with a fatal Stripe error), Cashier gives you the option to spill the beans to your preferred log channel. You can set this up by defining the `CASHIER_LOGGER` variable in your application's secret hideout - er, `.env` file:

```ini
CASHIER_LOGGER=stack
```

Remember, only the most serious Stripe disputes will be allowed to air their grievances through your app's main log channel. Any exceptions that arise from API calls to Stripe will be brought before this honorable court.

<a name="using-custom-models"></a>
Now, if you fancy yourself a detective and want to investigate these arguments more closely, go ahead and use custom models for your logs! (But remember, we're just talking business here.)

 ### Unleashing Your Inner Model Maverick with Cashier! 🎩🎨

Are you the kind of developer who can't resist a little DIY tinkering? Well, buckle up, partner, because we're about to let you customize those Laravel models used by our very own Cashier like never before! 🚀

First things first: whip out your trusty keyboard and start crafting your very own model. Let's call her `Subscription`, and make sure she extends the good ol' `CashierSubscription` gal:

```php
use Laravel\Cashier\Subscription as CashierSubscription;

class Subscription extends CashierSubscription
{
    // ...
}
```

Once you've given your custom model a whirl, it's time to introduce her to the big leagues. To do that, just drop by the `Laravel\Cashier\Cashier` class and give them a friendly heads-up about your new arrival:

```php
use App\Models\Cashier\Subscription;
use App\Models\Cashier\SubscriptionItem;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::useSubscriptionModel(Subscription::class); // "Howdy, Partner! Meet our new Subscription model!"
    Cashier::useSubscriptionItemModel(SubscriptionItem::class); // "And this here's her trusty sidekick, SubscriptionItem."
}
```

That's all, cowboy! With these simple steps, you've successfully customized your Cashier models like a true Wild West coder. Now go forth and conquer the digital frontier with your newfound model mastery! 🌵🚀🤠

 ### Unleash Your Inner eCommerce Hero! 🦸‍♂️🛍️

Welcome to Laravel's Superhero Shop! We're not just building an online store here, we're creating a digital shopping adventure. Let's dive right in! 🏊‍♂️

<a name="quickstart-selling-products"></a>

#### Selling Products 🛍️💰

In this realm of commerce, you'll be the master of merchandise! To start selling your wares, first, you'll need to create a new product. Fear not, this is easier than juggling bowling balls blindfolded (which we don't recommend by the way 🤹‍♂️).

```php
use App\Product;

$product = new Product([
    'name' => 'Super Shield',
    'description' => 'Protect yourself from everyday villains!',
    'price' => 99.99,
]);

$product->save();
```

Just whip up a `Product` object, fill it with your product details, and with one click of the save button (or command if you're feeling old school), your item is ready to shine on the virtual shelves! 🌈✨

Remember, in the world of eCommerce, speed is key. If you find yourself outpaced by a sloth selling bananas, we've got your back! Laravel's eloquent ORM makes navigating through databases as smooth as a well-oiled crime-fighting gadget. 🛠️💨

Next up, let's discuss how to display these treasures on the web for all to see. Cue: Laravel views and routes! 🎭🚀

 Alrighty then! Let's dive into the world of selling swag without causing a financial faux pas. Before we unleash Stripe Checkout on your unsuspecting customers, it's crucial to define your products like a seasoned stockbroker in your Stripe dashboard. And don't forget to [get Cashier's webhook handling sorted](#handling-stripe-webhooks), or else you might miss out on some juicy financial tidbits.

Now, offering product and subscription billing via your application can be as daunting as a 90s sitcom marathon. But fear not! With Cashier and [Stripe Checkout](https://stripe.com/payments/checkout), you can build payment integrations that'll make even Wall Street weep with envy.

When it comes to charging customers for one-time, non-recurring purchases, Cashier will play the role of the gatekeeper, guiding your customers to Stripe Checkout (think Yoda, but with better payment advice). There, they'll part with their hard-earned cash and confirm their purchase – all while wearing a digital dunce cap.

Here's how it works:

```php
use Illuminate\Http\Request;

Route::get('/checkout', function (Request $request) {
    $stripePriceId = 'price_deluxe_album'; // The price of our deluxe album... or is it worth it?

    $quantity = 1;

    return $request->user()->checkout([$stripePriceId => $quantity], [
        'success_url' => route('checkout-success'),
        'cancel_url' => route('checkout-cancel'),
    ]);
})->name('checkout');

Route::view('/checkout/success', 'checkout.success')->name('checkout-success');
Route::view('/checkout/cancel', 'checkout.cancel')->name('checkout-cancel');
```

In the example above, Cashier's `checkout` method acts as our magical portkey, whisking customers to Stripe Checkout for a specific "price identifier". Translation: A unique tag associated with each price for specific products (think barcodes, but digital and less likely to give you a papercut).

And if your customers are newbies to the Stripe world, Cashier will gracefully create a customer account in Stripe and link it to their record in your application's database. Once they complete the checkout session, they'll be redirected to a special success or cancellation page where you can share a heartfelt message – or perhaps just remind them about that mysterious recurring charge they may have missed.

<a name="providing-meta-data-to-stripe-checkout"></a>
Now, if you fancy providing some extra metadata to Stripe Checkout, here's how:

```php
Route::get('/checkout', function (Request $request) {
    // Define some metadata for your product... think of it as a digital sticker book!
    $metadata = [
        'title' => 'Deluxe Album',
        'description' => 'A must-have collection of our finest tracks.',
        'image' => '/path/to/your/album-cover.jpg',
    ];

    // ...and continue with the checkout process as before!
});
```

With this, you can add a title, description, and even an album cover image to your checkout session – all to make the experience more enjoyable for your customers (or at least less boring).

 Alright, buckle up, folks! We're about to embark on a wild ride through the enchanting land of e-commerce, where unicorns roam free and orders magically appear in the blink of an eye (or the click of a checkout button, whichever comes first).

First off, let's talk about keeping track of your customers' purchases – a task as important as remembering your significant other's favorite ice cream flavor. Here, we'll be using our very own `Cart` and `Order` models to keep tabs on completed orders and purchased goods. When it's time for your customer to check out, you might need to redirect them to Stripe Checkout for a secure payment gateway experience that would make even the most skeptical online shopper feel at ease. But how do we associate these purchases with their respective orders when they return from their shopping spree?

Fear not! With the power of metadata, you can provide an existing order identifier to the `checkout` method, ensuring a perfect match between orders and payments like a well-choreographed ballet performance. Just imagine that an order is created in our application as soon as a user starts the checkout process – kind of like placing a reservation for their shopping spree dinner.

```php
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;

Route::get('/cart/{cart}/checkout', function (Request $request, Cart $cart) {
    $order = Order::create([
        'cart_id' => $cart->id,
        'price_ids' => $cart->price_ids,
        'status' => 'incomplete',
    ]);

    return $request->user()->checkout($order->price_ids, [
        'success_url' => route('checkout-success').'?session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => route('checkout-cancel'),
        'metadata' => ['order_id' => $order->id],
    ]);
})->name('checkout');
```

As you can see in this example, we're passing the Stripe price identifiers from our cart and order to the `checkout` method. It's up to your app to associate these items with the shopping cart or order as customers start adding items like a kid in a candy store (or an adult who still thinks they can eat candy like a kid). We also provide the order's ID to Stripe Checkout via the `metadata` array, ensuring we have all the information we need for a post-purchase celebration.

Once the customer has successfully completed their purchase and Stripe redirects them back to your app, they will be whisked away to our magical `checkout-success` route. Here, we can retrieve the Checkout session ID and the associated metadata to update the order status accordingly:

```php
use App\Models\Order;
use Illuminate\Http\Request;
use Laravel\Cashier\Cashier;

Route::get('/checkout/success', function (Request $request) {
    $sessionId = $request->get('session_id');

    if ($sessionId === null) {
        return;
    }

    $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);

    if ($session->payment_status !== 'paid') {
        return;
    }

    $orderId = $session['metadata']['order_id'] ?? null;

    $order = Order::findOrFail($orderId);

    $order->update(['status' => 'completed']);

    return view('checkout-success', ['order' => $order]);
})->name('checkout-success');
```

So there you have it! A whimsical tour through the world of e-commerce and Stripe Checkout, complete with metadata matching and order status updates. For more information on what the Checkout session object contains, be sure to check out Stripe's documentation – because knowing is half the battle (and the other half is having a well-stocked candy store).

 Alrighty, let's dive into the world of selling subscriptions with Laravel and Stripe Checkout! It's like being a digital Donatello, sculpting modern payment systems that would make even Michelangelo green with envy.

First off, before you can start your own Sistine Chapel of payments, you gotta define your products and their fixed prices in the Stripe dashboard, and set up Cashier's webhook handling (it's like learning to walk before you run).

Imagine you've got a subscription service offering Basic and Expert plans. Think of it as a fancy gym membership with a basic monthly pass and a yearly elite membership – `price_basic_monthly` and `price_basic_yearly` for the Basic, while the Expert plan is represented by `pro_expert`.

Now, let's see how customers can sign up for your digital gym. When they click the "subscribe" button on your pricing page, you'll create a Stripe Checkout session for their chosen plan with this Laravel code:

```php
Route::get('/subscription-checkout', function (Request $request) {
    // Your customer just clicked "subscribe", so let's start the checkout process!
    return $request->user()
        ->newSubscription('default', 'price_basic_monthly')
        ->trialDays(5) // They get 5 free days to test out our service!
        ->allowPromotionCodes()
        ->checkout([
            'success_url' => route('your-success-route'),
            'cancel_url' => route('your-cancel-route'),
        ]);
});
```

After the checkout or cancellation, the customer gets redirected to the URL provided to the `checkout` method. To find out when their subscription actually starts (since some payment methods need a moment to process), you'll want to [set up Cashier's webhook handling](#handling-stripe-webhooks).

Now that customers can subscribe, let's protect certain sections of our application so only subscribed users can access them. Thankfully, Cashier provides the `subscribed` method which lets you check a user's subscription status:

```blade
@if ($user->subscribed())
    <p>You are subscribed, buddy!</p>
@endif
```

It's also easy to determine if a user is subscribed to specific products or prices:

```blade
@if ($user->subscribedToProduct('pro_basic'))
    <p>You've got the Basic plan and are one step closer to becoming an expert!</p>
@endif

@if ($user->subscribedToPrice('price_basic_monthly'))
    <p>Welcome to our monthly Basic plan, champ!</p>
@endif
```

Now that you've got the hang of it, let's build a subscribed middleware (think of it as adding security guards to your application) by following the [quickstart guide](#quickstart-building-a-subscribed-middleware). Happy coding! 🤓

 Alright, let's get this party started! If you're the type of developer who enjoys a bit of humor with their code (and who doesn't?), then buckle up as we journey into the world of Laravel middleware.

We're about to create a superhero named `SubscribedMiddleware`, your very own protector against unauthorized access to your application's dashboard, or any other secret hideouts you might have hidden away.

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SubscribedMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()?->isSubscribed()) {
            // Time to hit them up for a subscription, stat!
            return redirect('/billing');
        }

        return $next($request);
    }
}
```

Once our superhero is ready to go, it's time to assign him the duty of guarding your routes. You know, like Batman protecting Gotham City.

```php
use App\Http\Middleware\SubscribedMiddleware;

Route::get('/dashboard', function () {
    // ...
})->middleware([SubscribedMiddleware::class]);
```

And just like that, our humble hero is now patrolling the digital streets of your Laravel application, ensuring only subscribed users gain access to sensitive areas. Now isn't that a sigh of relief? Because let's face it, nobody wants unsubscribed users sneaking around their dashboard, right?

 Alrighty then! Let's get down to the nitty-gritty of helping your customers manage their billing plans - because no one likes a one-trick pony, right? Your clients might fancy a change from their current subscription plan or want to move up to the next level of VIP treatments. To make this happen smoothly, we're gonna guide them to Stripe's Customer Billing Portal - think of it as the swanky nightclub for digital transactions.

First things first: Create a fancy link or button within your app that whisks users off to a Laravel route specially designed to start a Billing Portal session:

```blade
<a href="{{ route('billing') }}">
    Upgrade Your Membership, Darling! 🥂
</a>
```

Next up, we'll define the route that initiates a Stripe Customer Billing Portal session and redirects the user to the swanky portal. The `redirectToBillingPortal` method accepts the URL where users will be sent when they leave the portal:

```php
use Illuminate\Http\Request;

Route::get('/billing', function (Request $request) {
    return $request->user()->redirectToBillingPortal(route('dashboard'));
})->middleware(['auth'])->name('billing');
```

Oh, and don't forget! If you've set up Cashier to handle webhooks, it'll keep your application's Cashier-related database tables in sync by checking the incoming webhooks from Stripe. So, for instance, when a user cancels their subscription via the Billing Portal, Cashier will receive the corresponding webhook and update your app's database accordingly. Cheers to no more manual updates! 🍻🚀

 Alright, buckle up, cowboy! You're about to dive into the wild west of customer management, where the sheriff (you) keeps the peace and the saloons (your application) stay stocked with cold beer (data).

<h2><a href="#retrieving-customers">Retrieving Customers</a></h2>

If you find yourself in a situation where you need to fetch a customer from the dusty old database, fear not! Laravel's got your back with its trusty `findOrFail` method. Just call it on an instance of the `App\Customer` model and pass in the customer's ID - it'll either return the customer or kick up a fuss if they ain't to be found.

```php
$customer = App\Customer::findOrFail($id);
```

<h2><a href="#fetching-multiple-customers">Fetching Multiple Customers</a></h2>

Suppose you need to round up a posse of customers for a special promotion. Laravel's `where` method is your best pal for that. Just tell it what criteria to look for, and it'll return an array of matching customers.

```php
$customers = App\Customer::where('promotion_interested', '=', true)->get();
```

<h2><a href="#sorting-customers">Sorting Customers</a></h2>

Maybe you've got a sneaky feeling that the customers who spend the most are your VIPs. No problem! Laravel lets you sort 'em like a pro with the `orderBy` method. Just tell it which column to use and whether to order in ascending or descending order.

```php
$vipCustomers = App\Customer::orderBy('total_spent', 'desc')->get();
```

<h2><a href="#creating-new-customers">Creating New Customers</a></h2>

Welcome a new customer to the saloon with Laravel's `create` method. Just make up a new cowboy (customer) and pass them over to the database with a call to `save`.

```php
$newCustomer = new App\Customer([
    'name' => 'New Cowboy',
    'total_spent' => 0,
]);

$newCustomer->save();
```

 Alrighty, let's dance through the world of billables, shall we? 😊

First off, you might be wondering: "Who are these mysterious 'Customers' everyone keeps talking about?" Well, buddy, they're the folks who keep our lights on and our servers humming. And guess what? You can summon one by their Stripe ID using the `Cashier::findBillable` method! 🪄

This magical incantation will return an instance of your billable model, just like that! (Cue: *abracadabra*)

```php
use Laravel\Cashier\Cashier;

$user = Cashier::findBillable($stripeId); // Now you've got yourself a 'Customer'! 🎩
```

Now, wasn't that a jolly good time? 🎉 Let's keep the party going! 🚀

 Alright, grab your popcorn! Let's dive into the world of Laravel Stripe shenanigans and learn how to create customers without starting a subscription – because who doesn't love a good side hustle?

### Creating Customers Without Commitment (A.K.A. The Non-Subscription Stripe Customer Party)

When the urge to create a Stripe customer strikes, but you ain't ready for any subscriptions just yet, fear not! You can do it with the `createAsStripeCustomer` method:

```php
$stripeCustomer = $user->createAsStripeCustomer(); // Your user transforms into a Stripe VIP right here!
```

Want to spice things up by adding some optional parameters? Check out the Stripe API's customer creation docs and pass them in as an `$options` array:

```php
$stripeCustomer = $user->createAsStripeCustomer($options); // Get ready for some serious Stripe customization!
```

### Return of the Stripe Customer Object (A.K.A. The 'Gimme Back My Stripe Customer' Scenario)

If you're dealing with a billable model and want to get your hands on that sweet, Stripe customer object, you can use the `asStripeCustomer` method:

```php
$stripeCustomer = $user->asStripeCustomer(); // Your user becomes a Stripe-certified customer!
```

### The 'I Forgot If I'm Already a Customer' Scenario (A.K.A. The Stripe Customer Identity Crisis)

Sometimes, you might wonder if a billable model is already a Stripe customer, but don't want to risk creating a duplicate. Enter the `createOrGetStripeCustomer` method:

```php
$stripeCustomer = $user->createOrGetStripeCustomer(); // Your user takes a DNA test to prove they're the one and only Stripe customer!
```

Now that you've got the hang of creating and managing customers, it's time to put on your dancing shoes and start rocking the Stripe world! 💃🏼✨

 ### Sprucing Up Your Regulars: An Excursion into Customer Makeovers! 💄

Ah, the world of Stripe customers! Sometimes it's not just about adding a splash of glitter or a fresh coat of paint - sometimes you gotta dive deep and update that customer profile. Fear not, intrepid developer! The `updateStripeCustomer` method is here to save your day (and your customer's profile)!

This marvelous method is like a magic wand for your Stripe customers, sprinkling them with new data like fairy dust. It accepts an array of [customer transformation options, as endorsed by the Stripe API gods](https://stripe.com/docs/api/customers/update). Here's how you can use it:

```php
$refreshedRegular = $user->updateStripeCustomer($options);
```

Just remember, every great makeover needs a solid plan. So, arm yourself with the right options, and get ready to give your customers the royal treatment they deserve! 👑✨

 Ahoy there, Laravel pirates! In this swashbuckling guide to balancing your loot (er, customer accounts), we'll be delving into the mystical art of crediting and debiting with our trusty friend Stripe. Buckle up, because we're about to set sail on a journey filled with gold doubloons, shimmering gems, and the occasional grog-infused misadventure!

First off, let's talk about the customer's treasure chest, also known as their balance. To peek inside this pirate's hoard, simply cast `$balance = $user->balance();`. This will return a fancy, formatted string in the customer's currency – perfect for impressing that parrot on your shoulder!

Now, it's time to add or subtract from our treasure chest. To credit a customer account (think of it as adding gold doubloons), use the `creditBalance` method with a value and an optional description:

```php
$user->creditBalance(500, 'Premium customer top-up.');
```

But beware! If you find yourself in need of grog money (debiting), use the `debitBalance` method with a value and an equally entertaining reason:

```php
$user->debitBalance(300, 'Bad usage penalty.');
```

Ready to record these transactions for posterity? Hoist the Jolly Roger of bookkeeping by using the `applyBalance` method! You'll create new logs of your customers' credits and debits:

```php
// Retrieve all transactions...
$transactions = $user->balanceTransactions();

foreach ($transactions as $transaction) {
    // Transaction amount...
    $amount = $transaction->amount(); // $2.31

    // Retrieve the related invoice when available...
    $invoice = $transaction->invoice();
}
```

Finally, if you're curious about the pirate crew that has sailed with your treasure chest (your customer), you can use the `balanceTransactions` method to inspect all of their transactions. Arr matey, now ye be ready for a swashbuckling adventure in managing your customers' balances! 🏴‍☠️💰🌵

 ### Tax Time Shenanigans with Cashier

Welcome to the wild world of Tax IDs management! Cashier's got your back when it comes to keeping track of those pesky, yet necessary, tax identifiers. Let's dive in and make this educational journey a little less painful (and maybe even fun!).

First things first - grabbing all the tax IDs assigned to a customer is a piece of cake:

```php
$taxIds = $user->taxIds();
```

Just imagine, it's like opening your fridge and finding all those forgotten condiments that somehow ended up there.

If you need to find a specific tax ID for a customer by its identifier, it's as simple as:

```php
$taxId = $user->findTaxId('txi_belgium');
```

Now let's get creative! Creating a new Tax ID is like adding a new flavor to your ice cream recipe. You just need to provide the [type](https://stripe.com/docs/api/customer_tax_ids/object#tax_id_object-type) (flavor in this case) and value:

```php
$taxId = $user->createTaxId('eu_vat', 'BE0123456789');
```

Remember, Stripe takes care of the verification process for you, but it's asynchronous, so keep your eyes peeled for updates. To stay in the loop, subscribe to the `customer.tax_id.updated` webhook event and inspect the VAT IDs' `verification` parameter:

```php
// For more info on handling webhooks, see the docs on defining webhook handlers!
```

Last but not least, if you ever need to delete a tax ID (let's say it's expired or something), use the `deleteTaxId` method:

```php
$user->deleteTaxId('txi_belgium');
```

And that's a wrap! Now you know your way around Cashier's Tax ID management features like a pro (or a tax accountant). Keep learning, and happy coding!

 ### Keeping Your Customers' Data in Tune with Stripe - The Dance of Synchronization!

Ah, the beautiful ballet of keeping your application's user data in harmony with that of our darling payment processor, Stripe. You know the drill: when Biff updates his name, email, or any other juicy tidbit that Stripe also wants to keep tabs on, it's time to let the Stripe Fairy Godmother know!

To automate this charming waltz, you can choreograph an event listener for your billable model. Once it's rehearsed and ready to perform at the model's `updated` event, simply call upon the `syncStripeCustomerDetails` method like so:

```php
use App\Models\User;
use Illuminate\Events\queueable;

/**
 * The grand entrance of the model.
 */
protected static function booted(): void
{
    static::updated(queueable(function (User $customer) {
        if ($customer->hasStripeId()) {
            $customer->syncStripeCustomerDetails();
        }
    }));
}
```

Now, every time your customer model takes the stage and performs an update, its data will pirouette in perfect sync with Stripe. And as a kind courtesy, Cashier will automatically execute a curtain call (syncing your customer's information with Stripe) on initial customer creation.

For those seeking a bit more flair, Cashier offers a repertoire of methods you can customize to tailor the dance steps for syncing customer details with Stripe. For instance, you may override the `stripeName` method to determine which attribute should gracefully pirouette across the stage as the customer's "name" during the sync:

```php
/**
 * Find the customer name that should dance in the spotlight on Stripe.
 */
public function stripeName(): string|null
{
    return $this->company_name;
}
```

Of course, you may also fine-tune other steps with methods like `stripeEmail`, `stripePhone` (limited to 20 characters, just enough for a catchy phone number jingle), `stripeAddress`, and `stripePreferredLocales`. These methods will gently slide the information into their corresponding customer parameters when [updating the Stripe customer object](https://stripe.com/docs/api/customers/update). If you're feeling particularly ambitious, you can even override the `syncStripeCustomerDetails` method to fully choreograph your own dance routine!

<a name="billing-portal"></a>

 ### The Swanky Subscription Shack

No more wrestling with subscriptions, payments, or billing histories! Stripe has your back with the easiest setup for a Billing Portal that'll make your customers feel like they've stepped into a VIP lounge. 💥🎉

Your clients can now manage their subscriptions, update payment methods, and reminisce about past payments - all while sipping on virtual cocktails in this exclusive digital lounge. To guide them there, simply summon the `redirectToBillingPortal` method on your billable model from a controller or route. 🎩🕺

```php
use Illuminate\Http\Request;

Route::get('/vip-lounge', function (Request $request) {
    return $request->user()->redirectToBillingPortal(); // Off to the VIP lounge we go! 🚪🎉
});
```

By default, once they've had their fill of subscription management, your clients can return to the serenity of your `home` route. But if you want to customize their exit strategy (because who doesn't love a good plot twist?), just pass a URL as an argument:

```php
use Illuminate\Http\Request;

Route::get('/vip-lounge', function (Request $request) {
    return $request->user()->redirectToBillingPortal(route('billing')); // A secret rendezvous awaits! 🤫
});
```

If you fancy generating the URL to this fabulous lounge without causing an HTTP redirect response, then the `billingPortalUrl` method is your secret weapon:

```php
$url = $request->user()->billingPortalUrl(route('billing')); // Ready the limo, we're off to the VIP lounge! 🚗💎
```

Now, let's get this party started! 🎉🚀

 Ahoy there, coders! Let's embark on a jolly journey through the treacherous waters of Payment Methods in Laravel land. Buckle up and grab your telescope as we navigate this swashbuckling sea of finance!

<a name="storing-payment-methods"></a>

### Storing Payment Methods 🏴‍☠️💰

To store a payment method in Laravel, ye must first create a `PaymentMethod` model. Think of it as the captain's log for all your piratey financial transactions.

```php
php artisan make:model PaymentMethod -m
```

With that, we've set sail on our own personal Pirates of the Caribbean! Now let's define the structure of our new model in the migration file:

```bash
php artisan make:migration create_payment_methods_table --create=payment_methods
```

Now, it's time to chart a course for the treacherous waters of the `up()` method, where we'll define our table columns. We need a few key pieces of information for each payment method, such as:

- `id` (primary key) - the unique identifier for each payment method. Aye, let's make it an auto-incrementing integer.
- `user_id` - the foreign key that links our payment methods to a specific user.
- `card_number` - because we can't remember our own number of ships, let's store their card numbers here for future reference.
- `expiration_date` - when will Jack Sparrow finally retire his peg leg? Well, that might be hard to predict, but we can easily store the expiration date of each payment method.
- `security_code` - arr matey, keep those codes safe!
- `default` - should this payment method be used by default for transactions? If so, set it to true.

Don't forget to run the migration:

```bash
php artisan migrate
```

Now that our table is set up, we can create, read, update, and delete payment methods at will! And remember, always keep your swords (or in this case, database connections) sharp! 💔☠️

 Ahoy there, coders! Let's embark on an exciting journey into the world of Stripe payments, shall we? Buckle up as we delve into the art of storing payment methods, a crucial step to creating subscriptions or executing those sporadic one-off charges. But first, let me pour us some digital punch and get this virtual pirate party started!

<br>

**Yo ho ho! Payment Methods for Subscriptions**

Arrr matey! If you're planning to use a payment method to sail through the treacherous seas of subscriptions, keep your eye patch on as we uncover how to store it. To ensure smooth sailing, make sure your payment method is battle-ready and well-equipped with all necessary information.

<br>

First, let's create a shiny new `PaymentMethod` model in Laravel. This model will help us keep track of our payment methods like a pirate keeping gold doubloons! After creating the model, we'll fill it with the juicy details such as the card number, expiration date, and CVC (that's Card Verification Code for landlubbers).

<br>

Once you've got your payment method all spiffed up, we'll cast a spell (er, use some Stripe magic) to create the actual payment method in their system. To do this, we'll need to make a request to Stripe using Laravel's handy `Stripe` facade and the stored details of our payment method. Ta-da! Your shiny new payment method is now officially recognized by Stripe!

<br>

Next, let us grab the payment method's identifier – a unique token that will become our compass in the vast ocean of subscriptions. To get this token, we'll simply call the `lastOperations` method on the `Stripe` facade and filter out the operation related to our newly created payment method.

<br>

**Aye aye! Payment Methods for One-Off Charges**

Now, if you're planning to use your payment method for a one-off charge (like buying grog or map updates), we've got you covered as well! The approach is quite similar to the subscription scenario but with a slightly different twist.

<br>

First things first, create that sparkling `PaymentMethod` model in Laravel and store all the necessary information just like before. Then, using the stored details, cast another Stripe spell (er, make a request) to create a new payment method for your one-off charge.

<br>

This time, however, instead of retrieving the identifier as in the subscription scenario, we'll actually use this newly created payment method directly for our one-off charge! You can think of it like using a map to find buried treasure – once you have the payment method, simply head straight to the spot marked 'X'.

<br>

And there you have it, hearties! Now that you've got your payment methods in order, you're ready to set sail for adventure on the high seas of e-commerce! Yarr!

 Alrighty then! Let's dive into the world of subscription payments, Laravel style. 🎶

#### Stripe's Super Secret Subscription Sauce

When it comes to saving a customer's credit card information for future use in subscriptions, we ain't playing games. We need to use Stripe's "Setup Intents" API to securely gather the customer's payment method details like a pro. A Setup Intent tells Stripe we're planning to charge a customer's card. Cashier's magical `Billable` trait includes the `createSetupIntent` method, which makes creating a new Setup Intent as easy as pie (or, you know, PHP). Just call this method from the route or controller that renders the form for gathering your customer's payment deets:

```php
return view('update-payment-method', [
    'intent' => $user->createSetupIntent()
]);
```

Once you've created the Setup Intent and passed it to the view, attach its secret to the payment form element like so:

```html
<input id="card-holder-name" type="text">
<!-- Stripe Elements Hideout -->
<div id="card-element"></div>

<button id="card-button" data-secret="{{ $intent->client_secret }}">
    Update Payment Method
</button>
```

Next up, let's bring in the big guns: Stripe.js! This library will help us securely gather the customer's payment details using a fancy [Stripe Element](https://stripe.com/docs/stripe-js):

```html
<script src="https://js.stripe.com/v3/"></script>

<script>
    const stripe = Stripe('stripe-public-key');

    const elements = stripe.elements();
    const cardElement = elements.create('card');

    cardElement.mount('#card-element');
</script>
```

Now, let's verify the card and grab a secure "payment method identifier" from Stripe using [Stripe's `confirmCardSetup` method](https://stripe.com/docs/js/setup_intents/confirm_card_setup):

```js
const cardHolderName = document.getElementById('card-holder-name');
const cardButton = document.getElementById('card-button');
const clientSecret = cardButton.dataset.secret;

cardButton.addEventListener('click', async (e) => {
    const { setupIntent, error } = await stripe.confirmCardSetup(
        clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: { name: cardHolderName.value }
            }
        }
    );

    if (error) {
        // Display "error.message" to the user... or maybe a funny gif?
    } else {
        // The card has been verified successfully, let's party!
    }
});
```

Once Stripe verifies the card, you can pass the resulting `setupIntent.payment_method` identifier back to your Laravel app, where it can be attached to the customer. You can then [add the payment method as a new option](#adding-payment-methods) or [use it to update the default payment method](#updating-the-default-payment-method). And if you're feeling extra adventurous, you can even use the payment method identifier to [create a new subscription](#creating-subscriptions).

> [!NOTE]
> If you'd like more information about Setup Intents and customer payment details, [check out this handy guide from Stripe](https://stripe.com/docs/payments/save-and-reuse#php). Just don't forget to have fun along the way! 🎉

 Alrighty then! Let's dive into the world of single charges, where one-time payments are as fashionable as a flapper dress at a speakeasy. But remember, dear developer, in the realm of Stripe, we can't just whip out the ol' stored card like a seasoned magician – it's a strict no-no!

So, let's get our customer to share their payment details using the Stripe.js library. Here's a form that'll make you feel like you're at a Vegas buffet:

```html
<input id="card-holder-name" type="text">
<div id="card-element"></div> <!-- A mystical, secure place for their card details -->
<button id="card-button">
    Process Payment
</button>
```

Once you've created this form, it's time to bring out the big guns – or should I say, the Stripe.js library. Here's how to attach a [Stripe Element](https://stripe.com/docs/stripe-js) to the form and gather the customer's payment details securely:

```html
<script src="https://js.stripe.com/v3/"></script>

<script>
    const stripe = Stripe('stripe-public-key');

    const elements = stripe.elements();
    const cardElement = elements.create('card');

    cardElement.mount('#card-element');
</script>
```

Now, let's verify the card and get ourselves a shiny new "payment method identifier" from Stripe using [Stripe's `createPaymentMethod` method](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method):

```js
const cardHolderName = document.getElementById('card-holder-name');
const cardButton = document.getElementById('card-button');

cardButton.addEventListener('click', async (e) => {
    const { paymentMethod, error } = await stripe.createPaymentMethod(
        'card', cardElement, {
            billing_details: { name: cardHolderName.value }
        }
    );

    if (error) {
        // Display "error.message" to the user and ask them to try again... or perhaps suggest a fun cocktail to help them relax?
    } else {
        // The card has been verified successfully – we've got our payment method identifier!
    }
});
```

If all goes well, you can now pass the `paymentMethod.id` to your Laravel application and process a [single charge](#simple-charge). And voila! The dance of digital funds has commenced.

 Alrighty, buckle up, coding cowboys and cowgirls! Let's dive into the wild west of payment methods in Laravel land.

### Lassoing Payment Methods

The `paymentMethods` corral is your new best friend! Saddle up that billable model instance, and you'll find yourself a collection of trusty `Laravel\Cashier\PaymentMethod` steeds:

```php
$paydayRodeo = $user->paymentMethods();
```

By golly, this corral is open for business by default! But if you're looking to rope in a specific type of payment method, just pass the `type` as an argument to the rodeo:

```php
$paydayRodeo = $user->paymentMethods('sepa_debit');
```

Now, let's talk about finding that customer's go-to payment method. If you're in a pickle and need to figure out which one's the favorite steed, just use the `defaultPaymentMethod` trick:

```php
$favoriteSteed = $user->defaultPaymentMethod();
```

And if you've got yourself a particular payment method ID and you wanna lasso it, use the `findPaymentMethod` lasso:

```php
$rodeoSteed = $user->findPaymentMethod($paymentMethodId);
```

<a name="payment-method-presence"></a>
But hold your horses, partner! You might want to ensure that payment methods exist before you start roping them in. To check for the presence of payment methods, you can use the `hasPaymentMethods` method:

```php
if ($user->hasPaymentMethods()) {
    // Yeehaw! Let's rope 'em in!
} else {
    // Looks like we're headed back to town for supplies.
}
```

And that's the lowdown on payment methods in Laravel Cashier, partner! Saddle up and start roping those payment methods today!

 ### Payment Method Peculiarities

If you're on the hunt for whether your dear user has a default credit card nestled snugly in their digital wallet, give the `hasDefaultPaymentMethod` method a spin:

```php
if ($user->hasDefaultPaymentMethod()) {
    // Time to start shopping sprees or paying bills, who knows?
}
```

Fancy checking if they've got at least one payment option handy? Let the `hasPaymentMethod` method do the honors:

```php
if ($user->hasPaymentMethod()) {
    // They might just be ready to pull out their digital wallet!
}
```

Worried about a specific type of payment method, like perhaps their affection for SEPA debit? No problemo! Pass the `type` as an argument:

```php
if ($user->hasPaymentMethod('sepa_debit')) {
    // We might be talking about a Europhile here!
}
```

<a name="updating-the-default-payment-method"></a>
### Changing the Guard: Updating Default Payment Method

In case you're curious about how to update the default payment method for our user, simply follow these steps:

1. Retrieve the existing default payment method:

```php
$defaultPaymentMethod = $user->getDefaultPaymentMethod();
```

2. Assuming you have a new payment method (let's call it `$newPaymentMethod`) ready to step into the limelight, go ahead and set it as the default:

```php
$user->setDefaultPaymentMethod($newPaymentMethod);
```

3. Don't forget to save your user!

```php
$user->save();
```

Now you can rest easy knowing that your user is set for some serious payments!

 ### Setting the Stage for Payment Performances! 🎭💰

Ready to play the lead role in your customer's payment drama? Here comes the spotlight on the `updateDefaultPaymentMethod` method, your ticket to updating a customer's starring billing information! 🌟

This theatrical routine takes a Stripe payment method ID as a prop and transforms it into the glamorous, front-row seat of their go-to billing method:

```php
$user->updateDefaultPaymentMethod($paymentMethod);
```

Now that you've got 'em hooked, you might be wondering how to ensure their Stripe account mirrors this onstage success. Well, step right up for our next act - the `updateDefaultPaymentMethodFromStripe` method! 🎭

```php
$user->updateDefaultPaymentMethodFromStripe();
```

> [!ATTENTION]
> The spotlighted payment method on a customer's stage can only illuminate invoices and new subscription acts. Due to some pesky Stripe curtain calls, it's unfortunately a no-go for single-charge encores. 🎫

<a name="adding-payment-methods"></a>
And remember, variety is the spice of life! Let's add more payment methods to your customer's repertoire with our next tutorial - "Encore: A Compendium of Payment Methods" 😉

 Alrighty then! Let's dive into the world of digital dough, where the only thing more exciting than a fresh batch of donuts is adding a new payment method in Laravel.

To get started, all you need to do is summon the `addPaymentMethod` function on your billable model—think of it as introducing a new bestie at a party who's here to handle the monetary shenanigans. Just make sure to pass along the payment method identifier (or ID for short), which serves as this new friend's invitation:

```php
$user->addPaymentMethod($paymentMethod);
```

Now, if you find yourself scratching your head wondering where on earth you can obtain these mysterious identifiers, fear not! Simply take a gander at the [payment method storage documentation](#storing-payment-methods). Trust us; it's as educational and exciting as reading the phonebook of a rich uncle who just won the lottery.

Now, aren't you feeling like a payments pro? Next up: Deleting payment methods—the digital equivalent of saying goodbye to an unwanted houseguest! But don't worry; we'll cover that in another section (because we're nice like that). Stay tuned! 💳🌍🎉

 Alrighty, let's dive into the fascinating world of Laravel Cashier and learn how to make those pesky payment methods vanish like a magician's rabbit (but without the cute furball).

**Paypalooza Cancellation Ceremony:**
To execute this high-stakes Paypalooza cancellation, you'll want to summon the mighty `delete` incantation upon the `Laravel\Cashier\PaymentMethod` entity you wish to terminate:

```php
$paymentMethod->delete();
```

**The Elusive Single Payment Method Delete:**
In case you're after that one specific payment method, like a needle in a haystack (but let's hope it's not made of straw), here's the spell to cast:

```php
$user->deletePaymentMethod('pm_visa');
```

**The Great Payment Method Purge:**
If you're feeling especially ambitious and want to clean house like Marie Kondo (but without the sentimental attachment), use this incantation to delete all payment method information for your billable model:

```php
$user->deletePaymentMethods();
```

**The Art of Specificity:**
Sometimes, you may need to eliminate a specific type of payment method. Fear not, for here's the spell to do just that:

```php
$user->deletePaymentMethods('sepa_debit');
```

> [!ATTENTION]
> Be warned, if a user is currently subscribed, your application should refrain from letting them delete their beloved default payment method (unless you want to witness some serious tantrums).

 Alrighty then! Let's dive into the world of automated billing where even Scrooge McDuck would feel at home - Subscriptions!

This feature allows you to transform your customers from one-time buyers into loyal recurring payment fans. Think of it as setting up a digital lemonade stand on Main Street, USA, but with a lot more caffeine and less sticky hands!

Under the hood, we're leveraging Stripe subscriptions, managed by our trusty sidekick, Cashier. This dynamic duo supports multiple subscription prices, quantities, trials, and a whole bunch of other cool stuff. It's like having Tony Stark's J.A.R.V.I.S. handling your billing!

<a name="creating-subscriptions"></a>
Now, let's create some subscriptions, shall we? It's as easy as pie, or should I say, as easy as making a sandwich with pre-sliced bread – just add cheese and you're good to go!

Here's how you can set up a subscription for your customers:

```php
$user = App\User::find(1); // Retrieve the user

// Create a new monthly subscription
$subscription = $user->newSubscription('default', 'month')
    ->create($billingDetails, $couponCode);
```

Just like that, you've created a recurring payment for your customers. Happy billing! 🎉🎊💸💰

 Alrighty, let's dive into the world of subscriptions where we transform your users from casual visitors into faithful patrons! 👨‍💼👩‍💻

First things first, you need to grab a hold of your billable model, usually an instance of `App\Models\User`. It's like catching a unicorn in a digital net. Once you've wrangled one, you can use the magical `newSubscription` method to create their subscription - think of it as tying the knot in a long-term relationship! 💏

```php
use Illuminate\Http\Request;

Route::post('/user/subscribe', function (Request $request) {
    $request->user()->newSubscription(
        'default', 'price_monthly'
    )->create($request->paymentMethodId);

    // ...
});
```

Now, the `newSubscription` method takes two arguments. The first one is the internal subscription type. If you're only offering a single subscription, you might call this "default" or "primary". This is like your secret sauce - it's not meant for public consumption and should never change once the subscription is created. Nope, no adding extra spices here! The second argument is the specific price the user is subscribing to. This should correspond to the price's identifier in Stripe - think of it as their unique DNA.

The `create` method, which accepts a Stripe payment method identifier or Stripe `PaymentMethod` object, will start the subscription and update your database with the billable model's Stripe customer ID and other pertinent billing details. Think of it as the wedding registry - you're collecting all the essentials! 🛍️

> [!WARNING]
> Be careful when passing a payment method identifier directly to the `create` subscription method, because it will also automatically add it to the user's collection of stored payment methods. It's like inviting them over for dinner and accidentally letting them move in! 🏠🙀

 Alright, let's get this payment party started! Instead of being the annoying auto-bill collector that your customers hate, you can now play the role of the friendly neighborhood email reminder guy. Yes, that's right, Stripe will send an invoice to your customers each time their recurring payments are due. And the best part? Your customers don't even need to share their secret payment methods with you upfront!

So, how do you make this happen in Laravel? Here's a little code snippet to get things rolling:

```php
$user->newSubscription('default', 'price_monthly')->sendInvoiceAndChaseThemDown(); // We like to think of it as the "Chasing Invoices" method
```

Now, you might be wondering how long your customers have to pay up before they're kicked out of the club. Well, by default, they get a cool 30 days grace period, but if you want to give them more time (or less, we won't judge), you can adjust that with the `days_until_due` option:

```php
$user->newSubscription('default', 'price_monthly')->sendInvoiceAndChaseThemDown([], [
    'days_until_due' => 30 // Because who needs money now, right?
]);
```

Just remember, the more time you give them to pay up, the more chances they have to avoid your invoices like a cat avoids water. But hey, it's all part of the game!

 Alrighty, let's dive into the wild world of subscriptions! If you've ever felt like your subscription price was a one-trick pony, it's time to give it some extra flair. 🚀

In Laravel, we've got a swanky little method just for you - the `quantity` method! This bad boy allows you to set a specific number for that subscription cost, making your subscriptions more versatile than a Swiss Army knife at a circus.

To give your subscriptions some much-needed personality, simply call the `quantity` method on the subscription builder before creating your new subscription:

```php
$user->newSubscription('default', 'price_monthly')
    ->quantity(5) // 🤯 That's FIVE times more entertaining!
    ->create($paymentMethod);
```

Just remember, this isn't a magic trick - it's code. So, no need to consult Houdini or watch out for rabbits popping out of hats. Now, go forth and multiply your subscriptions like there's no tomorrow! 😜

 Ahoy there, matey! If you're hankering to set sail with a bit more flair when creating your customers or subscriptions with our trusty Stripe ship, fear not! You can hoist the Jolly Rodger of custom options by tossing them overboard as the second and third anchors to the `create` method.

Arrrr, here be an example:

```php
Avast ye! Let's give ol' $user a shiny new subscription with that mouthwatering monthly price. Don't forget to arm him with that paymentMethod, swab the deck with the email address, and toss in some tasty metadata:

$user->newSubscription('default', 'price_monthly')->create($paymentMethod, [
    'email' => $email,
], [
    'metadata' => ['note' => 'Some extra information.'],
]);
```

And remember, the coupons ain't just for pirate treasure chests anymore! You can apply them to your subscriptions too. Keep an eye out for that anchor #coupons, if you be needing a wee bit o' help with that. Yo ho ho!

 Alrighty, let's dive into the thrilling world of Couponia, Laravel's very own coupon application system! 🎫🎉

If you're eager to slap a coupon on a subscription like a hot trendy sticker, go ahead and use the `withCoupon` method! It's as simple as this:

```php
$user->newSubscription('default', 'price_monthly')
    ->withCoupon('secret-code')
    ->create($paymentMethod);
```

Now, if you fancy a Stripe promotion code instead (because who doesn't love promos?), then `withPromotionCode` is your new bestie:

```php
$user->newSubscription('default', 'price_monthly')
    ->withPromotionCode('promo_code_id')
    ->create($paymentMethod);
```

But wait, where do you find this mystical `promo_code_id`? Well, dear friend, Laravel has a nifty little method called `findPromotionCode`. Use it to find the `promo_code_id` based on the customer-facing code:

```php
// Find a promotion code ID by its customer facing code...
$promotionCode = $user->findPromotionCode('SUMMERSALE');

// Find an active promotion code ID by its customer facing code...
$promotionCode = $user->findActivePromotionCode('SUMMERSALE');
```

The `$promotionCode` object you receive is an instance of `Laravel\Cashier\PromotionCode`, a class that's like a superhero cape for the underlying Stripe\PromotionCode. You can extract the coupon details by invoking the `coupon` method:

```php
$coupon = $user->findPromotionCode('SUMMERSALE')->coupon();
```

With the coupon in hand, you can determine whether it's a percentage-off or flat discount:

```php
if ($coupon->isPercentage()) {
    return $coupon->percentOff().'%'; // 21.5%
} else {
    return $coupon->amountOff(); // $5.99
}
```

But that's not all! You can also fetch the current discounts applied to a customer or subscription:

```php
$discount = $billable->discount();

$discount = $subscription->discount();
```

These `Laravel\Cashier\Discount` instances are like fancy tuxedos for the Stripe\Discount objects. You can retrieve the coupon details related to this discount by invoking the `coupon` method:

```php
$coupon = $subscription->discount()->coupon();
```

Now, if you feel like giving a customer or subscription a brand-new coupon or promotion code, go ahead and use the `applyCoupon` or `applyPromotionCode` methods:

```php
$billable->applyCoupon('coupon_id');
$billable->applyPromotionCode('promotion_code_id');

$subscription->applyCoupon('coupon_id');
$subscription->applyPromotionCode('promotion_code_id');
```

Remember, always use the Stripe API ID for the promotion code and not the customer-facing promo code. And only one coupon or promotion code can be applied to a customer or subscription at a given time.

For more info on this subject, please consult the Stripe documentation regarding [coupons](https://stripe.com/docs/billing/subscriptions/coupons) and [promotion codes](https://stripe.com/docs/billing/subscriptions/coupons/codes).

Happy Couponing! 🎁🤑

 Alrighty, let's get this subscription party started! 🥳

If you've already got a customer who's been making payments like a boss with their default payment method, and you wanna add a new subscription to their account, no problemo! 😎 Just summon the mighty `subscription builder` and invoke its magical `add` method:

```php
use App\Models\User;

$user = User::find(1); // Grab our beloved customer with ID 1

// Here's where we cast a spell on them, adding the 'default' subscription using their 'price_monthly' charm!
$user->newSubscription('default', 'price_monthly')->add();
```

Now that you know this secret incantation, your customers will be dancing with joy as they're blessed with shiny new subscriptions! 🎉

Oh, and if you'd rather conjure up subscriptions directly from the Stripe Dashboard (because who doesn't love a good UI?), just follow the magical link below! 🔮✨

<a name="creating-subscriptions-from-the-stripe-dashboard"></a>
*Cue the cackling of witches and the sound of a bubbling potion*
*Find your way to the Stripe Dashboard, where the magic happens*

 Alrighty then! Let's dive into the world of Stripe and Laravel subscriptions, shall we? 😎

First off, you can create subscriptions right from the Stripe dashboard itself, which is super convenient if you ask me (and who doesn't love a good shortcut?). When you do, Cashier will snap up those newbies and slap them with a 'default' type label. If you want to customize that label for subscriptions born from the Stripe dashboard, you'll need to [whip up some webhook event handlers](#defining-webhook-event-handlers).

Now, here's where things get a little 'one size fits all': The Stripe dashboard can only whip up one type of subscription at a time. So if your app offers a smorgasbord of subscriptions, you'll need to create them through code (boo!).

Last but not least, remember to keep it 'one subscription per type' in the Stripe dashboard. If a customer has two 'default' subscriptions, Cashier will play favorites and use the most recent one, leaving the older sibling out in the cold. It's like when your parents only bought you one new bike and made you share it with your brother... 🚲

<a name="checking-subscription-status"></a>
Now that your subscriptions are all created and labeled, you might be wondering how to keep track of their status. Well, [check out this section](#checking-subscription-status) to find out! 🎉

 Alrighty then! Let's dive into the world of checking subscription status in Laravel, where even the driest of topics can be as thrilling as a rollercoaster ride through a candy factory.

First off, once your customer signs up for your app and starts enjoying the free trial like they're on a sugar high, you can easily confirm their subscription status with the `subscribed` method. This little champ returns `true` if your customer has an active subscription, even if it's still in its trial period, making it the perfect wingman for any shindig (it accepts the type of subscription as its first argument):

```php
if ($user->subscribed('default')) {
    // Time to party like it's 1999... or their trial ends, whichever comes first!
}
```

Feeling fancy? The `subscribed` method can also be your plus-one at a route middleware soiree, giving you the power to filter access to routes and controllers based on the user's subscription status. Just remember, if the user isn't forking over the dough... they're getting the boot:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsSubscribed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user() && ! $request->user()->subscribed('default')) {
            // BUSTED! This user is trying to sneak in without paying... send them to the billing section!
            return redirect('/billing');
        }

        return $next($request);
    }
}
```

Want to know if a user is still enjoying their trial period like it's their birthday every day? Use the `onTrial` method, perfect for reminding them that it won't last forever:

```php
if ($user->subscription('default')->onTrial()) {
    // Oops, better remind this sugar-rush customer that their trial is about to end!
}
```

The `subscribedToProduct` method comes in handy when you want to confirm if the user is subscribed to a specific product based on a Stripe product's identifier. For example, let's find out if our user's `default` subscription is actively subscribed to the app's "premium" product:

```php
if ($user->subscribedToProduct('prod_premium', 'default')) {
    // Premium customer! Time for the red carpet treatment!
}
```

By passing an array to the `subscribedToProduct` method, you can determine if the user's `default` subscription is actively subscribed to either the app's "basic" or "premium" product:

```php
if ($user->subscribedToProduct(['prod_basic', 'prod_premium'], 'default')) {
    // This customer is either basic or premium... let's give them a crown!
}
```

The `subscribedToPrice` method helps you find out if a customer's subscription corresponds to a specific price ID:

```php
if ($user->subscribedToPrice('price_basic_monthly', 'default')) {
    // Basic monthly subscriber found! Time for the jazzy playlist!
}
```

Finally, the `recurring` method can be used to determine if a user is currently subscribed and has moved past their trial period:

```php
if ($user->subscription('default')->recurring()) {
    // This customer has upgraded beyond their sugar rush... give them some gourmet treats!
}
```

> [!WARNING]
> Be aware that if a user has two subscriptions with the same type, the most recent subscription will always be returned by the `subscription` method. So, even though our customer might have two subscription records with the type of `default`, only the current, active subscription will make it to the party. The others are like the wallflowers at a dance, hanging out in the database for historical review.

 Alrighty, let's dive into the world of subscriptions, Laravel-style!

#### Canceled Subscription Status: The Drama Queen Edition

Ever wondered if your users were once all-access VIPs but decided to ditch the party? No worries, the `canceled` method is here to save the day!

```php
if ($user->subscription('default')->isNoLongerMyBestie()) {
    // ...
}
```

But wait, there's more! If a user decides to leave you on read but hasn't yet been booted off the platform due to their 'grace period', here's your cue:

```php
if ($user->subscription('default')->onGracePeriod()) {
    // ...
}
```

Imagine this: User cancels on March 5th, but their subscription doesn't expire until March 10th. They're in the 'grace period', hanging around like an awkward guest at a wedding reception. During this time, they're still technically subscribed, even though they've shown signs of wanting to leave (the `subscribed` method remains true).

Finally, if your user has officially bid adieu and is no longer in their 'grace period', it's time for the final curtain call with the `ended` method:

```php
if ($user->subscription('default')->hasGoneOutOfService()) {
    // ...
}
```

And that, my dear friends, is how you handle canceled subscriptions in Laravel. Just remember, even though they've left, it's still important to treat them with respect during their 'grace period'. After all, who knows? They might come back for more! 😄🤩😎

 Alright, buckle up, folks! Let's dive into the thrilling world of Laravel Cashier subscriptions, where payments and statuses are as dramatic as a soap opera finale.

First off, if your subscription needs a little extra dough after its birth, it'll be marked as `incomplete`. These statuses are stored in the `stripe_status` column of Cashier's favorite hangout spot - the `subscriptions` database table.

Similarly, if a price swap requires a secondary payment action, your subscription will be labeled as `past_due`. When your subscription is either of these states, it'll be like a petulant child refusing to play until mommy and daddy pay up. It won't become active until the customer confirms their payment.

To determine if a subscription has an incomplete payment, you can use the `hasIncompletePayment` method on the billable model or a subscription instance. It's like asking your accountant, "Hey, do we owe money?"

```php
if ($user->hasIncompletePayment('default')) {
    // Time to break out the popcorn and watch the payment drama unfold!
}

if ($user->subscription('default')->hasIncompletePayment()) {
    // ...and pop more popcorn.
}
```

When a subscription has an incomplete payment, it's like your favorite TV show being on a mid-season break - you just can't move on until you've confirmed the payment. To direct the user to Cashier's payment confirmation page, pass the `latestPayment` identifier:

```html
<a href="{{ route('cashier.payment', $subscription->latestPayment()->id) }}">
    Please confirm your payment. We promise it'll be worth it! (Like binge-watching Stranger Things season 4.)
</a>
```

If you want the subscription to keep its active status even in `past_due` or `incomplete` situations, Cashier provides you with the `keepPastDueSubscriptionsActive` and `keepIncompleteSubscriptionsActive` methods. Usually, these methods should be called in the `register` method of your `App\Providers\AppServiceProvider`.

```php
use Laravel\Cashier\Cashier;

/**
 * Register any application services.
 */
public function register(): void
{
    Cashier::keepPastDueSubscriptionsActive();
    Cashier::keepIncompleteSubscriptionsActive();
}
```

But, beware! When a subscription is in an `incomplete` state, it's like trying to change the channel on a broken TV - nothing happens until you've confirmed the payment. So, the `swap` and `updateQuantity` methods will throw a hissy fit if they find your subscription in an `incomplete` state.

Now that we've covered all the basics, go forth and conquer the world of subscriptions with Cashier! Remember, it's just like watching a TV show - there'll be drama, twists, and turns, but in the end, everything will work out (we hope!).

 Ah, the world of subscriptions! A realm where bills come knocking more frequently than your neighbor's dog. But fear not, dear developer, for Laravel has brought a breath of fresh air to this mundane, yet crucial aspect of software development.

In the wonderful world of Laravel, subscription states aren't just mere statuses; they're your very own superheroes or villains, ready to leap into action with a single query scope. 🦸‍♂️🦹‍♀️

```php
// Gather all the active subscriptions like a well-oiled subscription machine...
$subscriptions = Subscription::query()->heroicAct()->get();

// Find all of the canceled subscriptions for a user, because nobody likes a Scrooge McDuck...
$subscriptions = $user->subscriptions()->villainousPlot()->get();
```

A complete roster of these super(query) scopes can be found below:

```php
Subscription::query()->heroicAct(); // Active
Subscription::query()->villainousPlot(); // Canceled
Subscription::query()->episodeEnded(); // Ended
Subscription::query()->incompleteMission(); // Incomplete
Subscription::query()->notVillainousPlot(); // Not Canceled
Subscription::query()->offGracePeriod(); // Not On Grace Period
Subscription::query()->trialNotYetBegun(); // Not On Trial
Subscription::query()->onGracePeriod(); // On Grace Period
Subscription::query()->trialInProgress(); // On Trial
Subscription::query()->pastDueBill(); // Past Due
Subscription::query()->recurringPayment(); // Recurring
```

<a name="changing-prices"></a>
And if you ever decide that your subscription prices are as outdated as a dial-up modem, don't worry! Laravel offers a handy way to adjust them with just a smidgen of code. 📈💰

```php
// Change subscription prices like a real-life economic policy wonk...
$subscription->update([
    'price' => 99.99, // New price for the subscription
]);
```

 ### Changing the Tune (Prices)

So your customer's dancing to a different beat now, huh? They've subscribed to your app, and sooner or later, they'll be asking for a new dance floor – aka a new subscription price. No worries! Just like a magician pulling a rabbit out of a hat (but in code), we've got you covered. To jive them to a new rhythm, whisk over the Stripe price's ID to the `swap` method, and watch the magic unfold:

```php
use App\Models\User;

$dancer = User::find(1); // Let's call our customer 'DJ Scribble Subscribe'

$djScribbleSubscribe->subscription('default')->swap('price_yearly'); // Cue the yearly waltz!
```

Now, when swapping steps, we assume that this customer is dying to get back on the dance floor if they took a break. Just remember that the ID you send should correspond to an existing Stripe price ID in their dashboard:

- The price ID of a 12-month ballad might be something like `price_yearly` or `price_long_jam`, you get the drift!

Oh, and if they're currently on trial, fear not! Their trial period will remain unscathed during the switch. If there's a 'quantity' in play for their subscription, we'll make sure it stays put too:

```php
$djScribbleSubscribe->subscription('default')
    ->skipTrial() // Let's cancel this current trial... It's time to cut the rug!
    ->swap('price_yearly'); // ...and swing into the new yearly dance!
```

If you want to swap prices and can the current trial period, feel free to `skipTrial`:

```php
$djScribbleSubscribe->subscription('default')
    ->skipTrial() // This move's a killer!
    ->swap('price_yearly'); // ...and they're off to the races again!
```

Finally, if you want to swap prices and bill them immediately instead of waiting for their next dance (billing) cycle, you can use the `swapAndInvoice` method:

```php
$djScribbleSubscribe = User::find(1); // Our customer is still DJ Scribble Subscribe, after all!

$djScribbleSubscribe->subscription('default')->swapAndInvoice('price_yearly'); // Invoice served, let's dance!
```

Now that your customer's subscription price change has been choreographed to perfection, it's time to sit back and enjoy the show! 💃🕺️

 Alright, let's dive into the world of Stripe subscriptions and, as they say, when it comes to bills, nothing's free (except for this hilarious tutorial!). By default, Stripe is like your budget-conscious friend who auto-adjusts your subscription price when you decide to go all in on the 'yearly' plan. But fear not, dear developer, we've got a magical method called `noProrate` that lets you update your user's subscription without this pesky proration business:

```php
$user->subscription('default')->noProrate()->swap('price_yearly');
```

If you're feeling curious about Stripe subscriptions proration, give their [official documentation](https://stripe.com/docs/billing/subscriptions/prorations) a spin!

[!WARNING]
Now here's the kicker: running `noProrate` before `swapAndInvoice` is like shouting into the void – proration won't care one bit! An invoice will still be issued no matter what, so make sure to respect the accounting police. 👮‍♂️📝

So there you have it! Happy prorating (or not-prorating) and enjoy your Stripe subscription journey!

 ### Quantity Control: The Magic of Numbers in Subscription Land! 🎩

Ever wondered how Santa keeps track of all those naughty and nice kids? It's all about quantity, my friend! In the realm of Laravel, projects, and especially project management apps, can sometimes come with a little number game. You know, like charging $10 per month for each project you manage. No worries, we've got some methods to help you keep track without breaking a sweat (or your bank account)! 💰💻

First off, let's get those numbers up with the `incrementQuantity` method:

```php
use App\Models\User;

$user = User::find(1);

// Bump the subscription quantity by one... (Oh, how we love the sound of that!)
$user->subscription('default')->incrementQuantity();

// Or if you're feeling extra ambitious and want to add five projects at once... (Project-tacular!)
$user->subscription('default')->incrementQuantity(5);
```

But, what happens when you suddenly have a change of heart or an attack of the 'I-shouldn't-have-added-so-many-projects' blues? Fear not! The `decrementQuantity` method is here to help:

```php
// Subtract one from the subscription quantity... (Bye bye, extra project!)
$user->subscription('default')->decrementQuantity();

// Or if you need to delete five projects like a true digital minimalist... (Project-cide complete!)
$user->subscription('default')->decrementQuantity(5);
```

If you'd rather set a specific quantity instead, the `updateQuantity` method is your new BFF:

```php
// Set the subscription quantity to exactly 10... (We're feeling precise today!)
$user->subscription('default')->updateQuantity(10);
```

Now, what if you want to make a quick change without worrying about prorated charges? No problemo! Just use the `noProrate` method:

```php
// Update the subscription quantity to 10 without prorating... (Charge it all at once!)
$user->subscription('default')->noProrate()->updateQuantity(10);
```

For a deep dive into subscription quantities, check out the [Stripe documentation](https://stripe.com/docs/subscriptions/quantities). It's like going to Project Management University, but with more numbers and less PowerPoints! 📚🚀

 Oh boy, let's dive into the world of Laravel subscriptions! If you've got a subscription that's more like a buffet – you know, the kind with multiple courses – then this little tutorial is for you. 🍴🚀

So, imagine you're at an all-you-can-eat space buffet (yes, it exists!), and you want to gobble up another helping of those delicious chat logs. Instead of running around asking the waiter for more every time, you just give him your table number and say "Gimme moar chat!" 🤖

In our Laravel universe, things work much the same way! If your subscription is a smorgasbord of products (you can find more on that here: #subscriptions-with-multiple-products), you should pass the ID of the price whose quantity you're hankering for, as the second argument to the increment / decrement methods.

Here's how you'd make that happen in PHP:

```php
$user->subscription('default')->incrementQuantity(1, 'price_chat');
```

This snippet does two things for ya:

1. It grabs the user's default subscription (the one they're currently munching on)
2. It tells that subscription to add 1 more serving of 'price_chat' to the plate! 🥘

And just like that, your user is now enjoying even more chat logs without having to lift a finger – or write much code, for that matter! 🎉🤖

 Alright, buckle up, because we're diving into the world of subscriptions with multiple products, a feature that's as delightful as a box of chocolates (where each chocolate represents a different billing product). 🍫💰

Imagine you're building a customer service "helpdesk" app, and you want to offer your users the option to upgrade from basic assistance for $10 per month to premium live chat support for an extra $15. Sound familiar? Well, now your database isn't just a lonely table, but a cash-packed vault with the `subscription_items` table as its shiny key! 🔓

To assign multiple products to a single subscription, you simply pass an array of prices (not chocolate bars, sorry) as the second argument to the `newSubscription` method:

```php
Route::post('/user/subscribe', function (Request $request) {
    $request->user()->newSubscription('default', [
        'price_monthly', // Base subscription
        'price_chat'     // Live chat add-on
    ])->create($request->paymentMethodId);
});
```

Want to set the quantity for each price? No problemo! You can do that with the `quantity` method:

```php
$user = User::find(1);

$user->newSubscription('default', ['price_monthly', 'price_chat'])
    ->quantity(5, 'price_chat')
    ->create($paymentMethod);
```

Now, let's say you want to add another price to an existing subscription. Just call the subscription's `addPrice` method:

```php
$user = User::find(1);

$user->subscription('default')->addPrice('price_chat');
```

Want to get that charge out of the way? Use the `addPriceAndInvoice` method instead:

```php
$user->subscription('default')->addPriceAndInvoice('price_chat');
```

If you feel like your subscription needs more chocolate (er, prices), pass the quantity as the second argument of the `addPrice` or `addPriceAndInvoice` methods:

```php
$user = User::find(1);

$user->subscription('default')->addPrice('price_chat', 5);
```

But remember, you can't just pull out a product and eat it like a chocolate (unless we're talking about edible products, then go for it!). To remove prices from subscriptions, use the `removePrice` method:

```php
$user->subscription('default')->removePrice('price_chat');
```

> 🚨 WARNING 🚨
> Don't try to remove the last price on a subscription. Instead, consider cancelling the subscription, unless you're into that whole "goodbye forever" thing. Just kidding! We know how much you love your customers and their payments. 💕💸

Now that we've covered the basics of subscriptions with multiple products, go forth and build an app that will make your users say "Wow, this is like a box of chocolates I can't resist!" 🍫🎉✨

 Ahoy there, brave Laravel coder! Sail into the realm of subscription swaps, where the seas of commerce become a little less treacherous. This magical function is perfect for those times when you want to change Captain Pricey's rates on your customers' ships (subscriptions).

Imagine a scenario: one of your seafaring patrons, with a `price_basic` subscription, has been chatting up a storm using their `price_chat` add-on. But they've been talking about upgrading to the grand `price_pro`. No problem! Here's the code for that:

```php
use App\Models\Pirate; // Because it's fun, right?

$pirate = Pirate::find(1); // Our fearless leader on the high seas

$pirate->setSail('default')->swap(['price_pro', 'price_chat']);
```

Now, when ye run this code, the old subscription item with the `price_basic` will walk the plank, while the `price_chat` stays afloat. A brand-new shiny `price_pro` will take its place!

But wait! There's more! Maybe you need to set a specific quantity for that `price_pro`. No worries, just include it in an array along with your other prices:

```php
$pirate = Pirate::find(1);

$pirate->setSail('default')->swap([
    'price_pro' => ['quantity' => 5], // Five more months of the pro life!
    'price_chat'
]);
```

If you're looking to change a single price on your subscription without disturbing the rest, fear not! Use the `swap` method on the very item itself:

```php
$pirate = Pirate::find(1);

$pirate->setSail('default')
    ->getPriceBasicIfItExists() // We're looking for Captain Basic here
    ->swap('price_pro'); // And replacing him with Captain Pro
```

Happy swapping, matey! May your subscriptions always be fair winds and following seas.

 Ahoy there, intrepid developer! Sail with us as we navigate the choppy waters of subscription pricing adjustments. By default, Stripe's captain sets course for prorated charges when adding or subtracting prices from a multi-product voyage. But what if ye be yearnin' for a no-proration port call? Fear not, me hearty! Just tack on the `noProrate` method to yer price operation:

```php
$pirate->subscription('plunder')->noProrate()->removePrice('price_booty');
```

Arrrr matey! Now, let's set our compass toward quantity swaps. If ye find thyself in need of altering the number of products on a subscription, Stripe provides us with the `swapQuantities` method:

```php
$pirate->subscription('plunder')->swapQuantities(2, 3); // replace 2 and 3 with desired quantities for specific products
```

By employing these methods, we can ensure that our subscriptions remain as buoyant as a cork on the high seas of commerce! Yarrr!

 Alrighty then! Here's a chuckle-worthy twist on updating those subscription quantities in good ol' Laravel style.

#### Quantum Leap for Pricing

Fancy tweaking the quantity for individual subscription fees? No problemo, just use the [prehistoric quantum methods](#subscription-quantity) by passing the price ID as an extra argument to your favorite time machine (er...method):

```php
$user = User::find(1); // Our trusty DeLorean driver!

$user->subscription('default')->timeTravelToQuantumIncrement(5, 'price_chat'); // Add 5 to the chat price, don't forget your flux capacitor!

$user->subscription('default')->timeTravelToQuantumDecrement(3, 'price_chat'); // Subtract 3 from the chat price, watch out for those space-time anomalies!

$user->subscription('default')->timeTravelToQuantumUpdate(10, 'price_chat'); // Jump to a new decade with a 10 increase in chat price (oh, and don't forget to bring back Marty!)

> [!ATTENTION]
> When a subscription has more than one price, the `stripe_price` and `quantity` attributes on the `Subscription` model will be as mysterious as the secrets of the universe. To access the individual price attributes, you should use the `items` relationship available on the `Subscription` model – it's like a cosmic Swiss Army knife!

<a name="subscription-items"></a>
```

And there you have it! A little humor and education go a long way in mastering Laravel's subscription updating techniques. Happy time traveling (er...quantity leaping)! 🚀🕰️💼

 Alright, let's dive into the enchanting world of Laravel Subscription Items! 🎈

When a subscription starts to behave like a rebellious teenager, having multiple personalities (prices), it'll stash these alter egos in your `subscription_items` table, hidden away in your database's secret chamber. But fear not, for you can access them with the help of the `items` relationship on the subscription, much like finding a long-lost relative in a dusty family album. 📸

```php
use App\Models\User; // Just like naming your cat after yourself

$user = User::find(1); // Imagine: "Fetching user number one, just like fetching your first pet rock"

$subscriptionItem = $user->subscription('default')->items->first(); // Now we're reaching into the family album and pulling out the first picture of this peculiar character

// This is where you get to know the Stripe price and quantity for this peculiar item...
$stripePrice = $subscriptionItem->stripe_price; // "Oh, so that's what they paid!"
$quantity = $subscriptionItem->quantity; // "And here's how many times they paid it"
```

You can even summon a specific price using the `findItemOrFail` method:

```php
$user = User::find(1); // Imagine: "Fetching user number one, just like fetching your first pet rock"

$subscriptionItem = $user->subscription('default')->findItemOrFail('price_chat'); // Now we're casting a magical spell to find the 'price_chat' item, or else it will fail and give us an error, oh dear!
```

Remember, every subscription is unique, just like each of your pet rocks. So, keep exploring and learning about these magical creatures! 🤓✨

 ### The Aquatic and Muscle Marvel! (or, How to Sell Multiple Subscriptions with Laravel)

Ahoy there! Are you ready to dive into the world of Stripe subscriptions? Buckle up, because we're about to swim and lift our way through some serious tech shenanigans. Imagine running a gym that offers not one but two subscriptions - swimming and weight-lifting, each with its own unique pricing. Now, isn't that a muscle-flexing business model?

So, how do we create these subscriptions in Laravel you ask? Let's take a look:

```php
use Illuminate\Http\Request;

Route::post('/seaworld/join', function (Request $request) {
    $request->user()->newSubscription('seaweed')
        ->price('the_cost_of_swimming_monthly')
        ->create($request->paymentMethodId);

    // ...
});
```

In this example, we've created a monthly swimming subscription for our user. But what if they suddenly decide to upgrade to an annual membership? Well, that's as easy as switching from chlorine to sea salt:

```php
$user->subscription('seaweed')->swap('the_cost_of_swimming_yearly');
```

But what if they can't take it anymore and decide to drown their monthly payments? (Please don't actually do that, folks.)

```php
$user->subscription('seaweed')->cancel();
```

Now, you might be wondering - "What about the weight-lifting subscription?" Well, my friend, it's just as easy! Just replace 'seaweed' with your desired subscription type. This is where the fitness fun begins!

Remember, in life and in Laravel, subscriptions are like biceps – you can always add more! (But please remember to consult a doctor before adding too many subscriptions or biceps.)

 ### Usage-Based Shenanigans: The Billing Bonanza! 🎪

Alrighty then, buckle up! We're about to take you on a wild ride through the world of [Usage Based Billing](https://stripe.com/docs/billing/subscriptions/metered-billing). It's like charging your buddies for their shenanigans, but in a grown-up, money-making way! Ever wondered about that late-night text blitz or the flood of emails you sent last week? Well now, you can turn them into cold, hard cash! 💰💬

But enough chit-chat, let's get this party started! First things first: Head over to your Stripe dashboard and create a brand spankin' new product with a usage-based billing model. Think of it as setting up the lemonade stand but charging by the cup instead of a flat fee. You'll also need to set up a trusty meter, like a counter for your lemonade jugs (except digital and way cooler). Once that's squared away, hang onto the event name and meter ID, 'cause you're gonna need them later on! 📝

Now that we've got our setup in order, let's dive into the code. You can start a metered subscription using plain ol' PHP like this:

```php
use Illuminate\Http\Request;

Route::post('/user/subscribe', function (Request $request) {
    $request->user()->newSubscription('default')
        ->meteredPrice('price_metered')
        ->create($request->paymentMethodId);

    // ...
});
```

Or, if you're feeling fancy, you can kick things off with Stripe Checkout:

```php
$checkout = Auth::user()
    ->newSubscription('default', [])
    ->meteredPrice('price_metered')
    ->checkout();

return view('your-checkout-view', [
    'checkout' => $checkout,
]);
```

Now, don't forget to report and retrieve usage so you can keep tabs on your customers' shenanigan-o-meters. You can find more details on that [here](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#configure-meter). Happy billing, and may the lemonade flow in your favor! 🍹🎉

 Alrighty, let's dive into the world of billing where your app and Stripe become BFFs, catching up on all the 'emails-sent', 'notifications-delivered', or whatever other digital chit-chat your users are engaging in!

To keep track of this digital tea party (and charge your customers accurately), you'll want to report their usage. And who better than our trusty `Billable` model to do the honors? Just call upon it like a genie:

```php
$user = User::find(1);

$user->reportMeterEvent('emails-sent'); // Boom! A 'usage' point added for the billing period.
```

But what if you wanna spice things up with a little more email flair? No worries, just throw in the quantity:

```php
$user = User::find(1);

$user->reportMeterEvent('emails-sent', quantity: 15); // 15 emails sent? That's some serious inbox action!
```

Now, if you're curious about the total usage for a particular meter, fear not! Your `Billable` model has a handy method to help:

```php
$user = User::find(1);

$meterUsage = $user->meterEventSummaries($meterId); // Gathering data like a digital detective on a case.

$meterUsage->first()->aggregated_value // 10 emails sent? That's quite the correspondence!
```

To learn more about meter event summaries, feel free to peruse Stripe's [Meter Event Summary object documentation](https://docs.stripe.com/api/billing/meter-event_summary/object).

If you're feeling adventurous and wanna know what other meters are out there (you know, for those 'messages-read' or 'videos-watched'), simply use a `Billable` instance's `meters` method:

```php
$user = User::find(1);

$user->meters(); // A list of meters? Sounds like an episode of 'Meter Men', the new reality TV show!
```

Happy billing, and remember to always keep an eye on those usage stats – you never know when a user might decide to go on a digital binge-watching spree or send out a mass email blast! 📧🚀

 Alrighty then! Let's get this tax party started, shall we? 🚀

🚨 **Attention, all accountants and number crunchers!** 🚨
No more sleepless nights calculating taxes manually! With Stripe Tax, you can let the robots do the heavy lifting for you. 😎 (And who knows, maybe they'll even start singing 'We Are The Champions' while they work!)

To set the tax rates for your subscription-loving users, simply implement the `taxRates` method on your billable model and return an array filled with Stripe tax rate IDs. Don't forget to create these tax rates in your [Stripe dashboard](https://dashboard.stripe.com/test/tax-rates), where you can channel your inner tax accountant.

```php
/**
 * The tax rates that should apply to the customer's subscriptions.
 *
 * @return array<int, string>
 */
public function taxRates(): array
{
    return ['txr_id'];
}
```

The `taxRates` method allows you to apply a custom tax rate for each and every customer, which is particularly handy when dealing with an international user base (you know, all those tricky tax rules!).

If your subscriptions come in various flavors, complete with different prices, then you can define distinct tax rates for each by implementing a `priceTaxRates` method on your billable model.

```php
/**
 * The tax rates that should apply to the customer's subscriptions.
 *
 * @return array<string, array<int, string>>
 */
public function priceTaxRates(): array
{
    return [
        'price_monthly' => ['txr_id'],
    ];
}
```

🚨 **Attention, one-time charge enthusiasts!** 🚨
Just remember that the `taxRates` method only applies to subscription charges. If you're using Cashier for "one-off" charges, then you'll need to manually specify the tax rate each time – we've got no bots to sing 'Bohemian Rhapsody' for you there! 😉

<a name="syncing-tax-rates"></a>
Now, go forth and conquer those taxes with Stripe and Laravel by your side! (And don't forget to party like it's tax time!) 🎉🎊💸

 Alrighty then! Buckle up, folks. Let's dive into the wild world of syncing tax rates in Laravel Land!

#### Taxi Cab Fare Adjustments



Now here's a pickle: when you tweak those old-school, hard-coded taxi meter IDs spit out by our trusty `taxRates` method, the tax settings for any existing rides booked by your passengers will stay parked in their original lanes. But fret not! If you're hankering to rev up the tax rates for those loyal passengers with the new `taxRates`, just call the slick `syncTaxRates` method on that passenger's ride ticket instance:

```php
$passenger->rideTicket('limo')->syncTaxRates();
```

This high-octane maneuver will also sync any item tax rates for a multi-product ride. If your taxi empire is dishing out subscriptions with a mix of goodies, you should make sure your billable model knows the `priceTaxRates` dance [covered earlier](#taxi-fare-taxes).

<a name="tax-exemption"></a>

#### Taxi Cab Fare Exemptions



Now, we all know that some folks are lucky enough to have their taxi fare exempted. To account for this in our ride system, you'll need to check if the passenger is tax-exempt before applying the new `taxRates`. Fear not, dear friend! Laravel provides a handy method called `isTaxExempt` that can help you determine whether your passenger is waving those fare goodbyes:

```php
if ($passenger->isTaxExempt()) {
    // Exempt the passenger from paying tax
} else {
    // Taxi on with the new tax rates!
}
```

And there you have it! A hilarious, yet informative guide to syncing tax rates and handling exemptions in Laravel Land. Keep those taxis spinning, friends! 🚕💨

 Alrighty then! Let's dive into the ticklish topic of Tax Exemptions in Laravel Cashier – a subject that'll make even the most taxidermied accountant crack a smile!

First off, you've got your trusty trio: `isNotTaxExempt`, `isTaxExempt`, and `reverseChargeApplies`. They're like the Three Musketeers of fiscal freedom, ready to protect your customers from those dreaded sales tax troubles.

```php
use App\Models\User;

$user = User::find(1); // Yup, we're looking for user number one! 🕺

// Is this customer tax-free like a tropical island?
$isTaxFreeIsland = $user->isTaxExempt();

// If not, are they more like a rainy city with lots of sales taxes?
$areTheyRainCity = !$user->isNotTaxExempt();

// And for all those places where the buyer has to pay the tax, we got ya covered!
$reverseChargeApplies = $user->reverseChargeApplies(); // Say hello to reverse charge 🎉🎊
```

> [!CAUTION]
> Beware! These methods can also be called on any `Laravel\Cashier\Invoice` object, but remember – they'll then determine the exemption status as of the invoice creation date. So, if you're looking for the current tax status, keep an eye on your users instead! 🕵️‍♂️

<a name="subscription-anchor-date"></a>
Bye for now! Remember, with Laravel Cashier, handling taxes is like a walk in the park – and who doesn't love a tax-free stroll? 🌲💰

 ### Bill Date Shenanigans! 🎩🎉

By the cosmic powers of default settings, the billing date is set to the day your subscription was conjured or, if you're on a magical trial run, the moment your trial spell expires. But fret not, for those who like to tinker with their own enchantments, we present the `anchorBillingCycleOn` incantation:

```php
Use yer momma's crystal ball and Request! 🔮✨

Route::post('/wizard-of-payments', function (Request $request) {
    $anchor = Carbon::parse('first day of next month');

    $request->user()->newSubscription('default', 'monthly-fee')
        ->anchorBillingCycleOn($anchor->startOfDay())
        ->castSpell($request->paymentMethodId);

    // ... more enchantments, potions and spells! 🥇✨
});
```

For a deeper dive into the dark arts of subscription billing cycles, consult [Stripe's Billing Cycle documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle) - you know, just in case you get caught by the payment police! 🕵️‍♂️🔍

<a name="cancelling-subscriptions"></a>
And if you ever decide to break up with your subscription, we've got a handy guide on [how to do it](https://stripe.com/docs/billing/subscriptions/canceling) - no hard feelings, we promise! 💔💖

 Ahoy there, Captain! Sailors of the Laravel Sea, gather 'round for a yarn on cancelling subscriptions, the scurvy pirate's way.

To jettison a subscription from a user, call the `cancel` method on their seaworthy ship:

```php
$pirate ->ship('Jolly Roger')->cancel();
```

Once a vessel is abandoned, Cashier will hoist the Jolly Roger and set the `ends_at` column in your `subscriptions` logbook. This date is crucial for when the ship should start returning "landlubber" as the answer to "is this ship still docked?"

For instance, if a landlord cancels their lease on the Black Pearl on March 1st, but the lease wasn't due to expire until March 5th, the "docked" method will continue returning "aye, aye, captain!" until March 5th. This is due to the rule that a seafarer is typically allowed to keep sailing until the end of their pirate pay period.

You can determine if a landlord has abandoned ship but is still on their "grace period" using the `onGracePeriod` method:

```php
if ($pirate ->ship('Jolly Roger')->onGracePeriod()) {
    // Arr matey, start cleaning up the treasure room!
}
```

If you wish to abandon ship immediately, call the `cancelNow` method on your seaworthy vessel:

```php
$pirate ->ship('Jolly Roger')->cancelNow();
```

If ye be wanting to abandon ship immediately and invoice any remaining un-invoiced treasure or new / pending proration invoices, call the `cancelNowAndInvoice` method on your seaworthy vessel:

```php
$pirate ->ship('Jolly Roger')->cancelNowAndInvoice();
```

Ye may also choose to abandon ship at a specific moment in time:

```php
$pirate ->ship('Jolly Roger')->cancelAt(
    now()->plus(days: 10)
);
```

Lastly, remember to always abandon your landlords' ships before flinging them overboard (i.e., deleting the associated user model):

```php
$pirate ->ship('Jolly Roger')->cancelNow();

$landlord ->walkThePlank(); // Optional, but recommended for crew morale
```

Fair winds and following seas, mateys! Happy cancelling! 🏴‍☠️🚀

 ### Un-Canceling a Customer's Subscription: The Art of the Resurrect-Bill! 🕵️‍♂️✨

Ah, the dance of subscriptions! One minute they're dancing the tango with your bank account, and the next, they've hit pause. But fear not, my dear developer friend! This section is all about the grand comeback: resuming those wayward subscriptions! 🎶

So, let's say you've got a customer who's suddenly taken a leave of absence from their monthly membership but has changed their mind. Well, that's where our superhero method comes in—the `resume` method! 💪

```php
$user->subscription('default')->resume();
```

But remember, there's a catch (if you're into that sort of thing): the customer has to be within their "grace period" to make a comeback. 🕰️ Just like in real life, you can't just expect an ex to jump back into bed with you right after leaving!

Now, here's the best part: if our customer cancels and then decides to return before their subscription has fully expired, they won't be hit with an immediate bill. Instead, their subscription will come back to life (or rather, re-activate), and they'll get billed on the original billing cycle. 🎈🎉

And just in case you were wondering, here's a handy link to the land of subscriptions with trials: [Subscription Trials](#subscription-trials)! Happy coding, dear friend! 🤖💕

 Ahoy there, intrepid Laravel sailor! Let's set sail on a captivating journey through the enchanting realm of subscription trials. But before we embark, be prepared to don your pirate hat and buckle up for some swashbuckling fun!

<a name="with-payment-method-up-front"></a>

### Subscription Trials with Payment Method Up Front

Ah, the adventurous path of subscription trials with payment method up front! This is where your customers can test out your amazing app or service for a limited time without having to pay a dime – until they fall hopelessly in love with it, that is. To set this up in Laravel, you'll need to follow these swashbuckling steps:

1. Install the Stripe PHP SDK if you haven't already, using Composer:

```sh
composer require stripe/stripe-php
```

2. Create a new `Subscription` model with the necessary attributes such as `trial_ends_at`, `status`, and so forth. You can use Laravel's built-in migration system to handle this:

```sh
php artisan make:model Subscription -m
```

3. Update the created migration file (e.g., create a new table called `subscriptions`) with the appropriate columns.

4. Add some logic in your `SubscriptionController` to handle trial subscriptions when creating or updating a subscription. This is where you'll use the Stripe API to create trials, attach payment methods up front, and more.

5. Implementing the cancellation of trials can be done using event listeners or scheduler tasks, ensuring that your customers are given ample notice before their trial ends.

6. Don't forget to provide an easy-to-navigate interface for users to manage their subscription settings, such as pausing or canceling their subscriptions.

7. Lastly, sprinkle some fairy dust over the codebase (optional but recommended) – after all, you're creating a magical experience for your customers!

Now that you have your subscription trial set up, watch as users flock to your service like bees to honey, ready to dive headfirst into the enchanting world of your app or service. Just remember: with great power comes great responsibility – make sure your users are getting the best possible experience while staying protected from any unwanted pirates (or chargebacks). Aye, matey!

 ### Ready to Rock 'n' Roll with Upfront Payments? 🚀

Ever wanted to give your customers a taste of the good life while still securing their credit card details like a true rockstar? Well, strap on those air guitars and let's dive into some Laravel Cashier magic!

To set up a sweet trial period with payment info in hand, you gotta use the `trialDays` method when crafting your subscriptions:

```php
use Illuminate\Http\Request;

Route::post('/groupie/subscribe', function (Request $request) {
    $request->user()->newSubscription('default', 'platinum_pass')
        ->trialDays(10)
        ->create($request->stripeID);

    // ...
});
```

Remember, this method sets the trial's expiration date on your subscription record and tells Stripe to hold off on charging until after the date. When you use `trialDays`, it'll replace any default trial period for the price in Stripe with a custom one. 🎈

> [!ATTENTION]
> If you don't cancel a subscriber before their trial expires, they might get hit with a surprise charge! Make sure to alert your users about their upcoming rockstar status expiration date. 🤘

With the `trialUntil` method, you can specify an exact end date using a fancy `DateTime` object:

```php
use Illuminate\Support\Carbon;

$groupie->newSubscription('default', 'platinum_pass')
    ->trialUntil(Carbon::now()->addDays(10))
    ->create($paymentDetails);
```

Ever wondered if a user is currently enjoying the trial period? You can find out by using either the `onTrial` method of the user instance or the subscription instance. Here are two ways to check:

```php
if ($groupie->onTrial('platinum_pass')) {
    // ...
}

if ($groupie->subscription('platinum_pass')->onTrial()) {
    // ...
}
```

If you wanna end the trial earlier than planned, the `endTrial` method's got your back:

```php
$groupie->subscription('platinum_pass')->endTrial();
```

And finally, to see if an existing trial has already expired, check out the `hasExpiredTrial` methods:

```php
if ($groupie->hasExpiredTrial('platinum_pass')) {
    // ...
}

if ($groupie->subscription('platinum_pass')->hasExpiredTrial()) {
    // ...
}
```

Now that you're armed with these Cashier tricks, it's time to make your users feel like they've won the rockstar lottery! 🎸🎹🎤

 Alrighty then! Let's dive into the whimsical world of Stripe and Cashier, where digital coins rain from the clouds and subscriptions frolic through the meadows.

First things first: Trial days! You can decide whether your prices are blessed with a magical trial period in the Stripe dashboard or you can be extra explicit about it using Cashier. If you're feeling lucky, let Stripe handle the trial magic—new subscriptions for even repeat customers will receive a trial period (because who doesn't love free stuff?). But remember, if you don't want your subscribers to take advantage of this offer, you can always wave your magician's wand and call upon the `skipTrial()` method.

Now, let's talk about a scenario where no payment method is required upfront:
<a name="without-payment-method-up-front"></a>

When your customers are still deciding whether to join the enchanted subscription forest or not, you can offer them an opportunity to dance on the moonbeams (read: trial period) without committing to a silver coin (read: payment). To do this, just follow the instructions in the Stripe dashboard and make sure your prices have been sprinkled with trial fairy dust. In this case, even if your customers once had a subscription but then took a stroll through the Dark Forest of Cancellation, they'll still be able to waltz back into the forest under the moonbeams when they decide to subscribe again. Just remember: If you want to bring down the enchantment and make them pay upfront, all you need is a simple `skipTrial()` incantation.

In this fantastical land of digital commerce, it's always good to keep things lighthearted while staying grounded in the technical details. So, go on—cast your spells and let your subscriptions flourish!

 Alrighty, let's dive into the enchanting world of Laravel payments where we'll learn how to make user registration more magical than a Harry Potter audition!

If you want to offer a sprinkling of free magic without asking for the user's credit card info upfront (because who likes awkward conversations about money, right?), you can set the `trial_ends_at` column on the user record to your desired trial date. This spell is typically cast during user registration:

```php
use App\Models\User;

$user = User::create([
    // ...
    'trial_ends_at' => now()->addDays(10), // Add 10 days to the present day! *Poof*
]);
```

[!WARNING]
Remember to add a date cast for the `trial_ends_at` attribute within your billable model's class definition. It's like wearing a cape at a superhero party - essential for flying under the radar!

Cashier refers to this type of trial as a "generic trial", since it doesn't have any existing subscription tied to it, much like a free trial at a haunted house. The `onTrial` method on the billable model instance will return `true` if the current date is not past the value of `trial_ends_at`:

```php
if ($user->onTrial()) {
    // User is still inside their magical trial period...
}
```

Once you're ready to cast a more powerful spell and create an actual subscription for the user, you can use the `newSubscription` method as usual:

```php
$user = User::find(1);

$user->newSubscription('default', 'price_monthly')->create($paymentMethod);
```

To retrieve the user's trial ending date, you may use the `trialEndsAt` method. This method will return a Carbon date instance if a user is on a trial or `null` if they aren't. You can also pass an optional subscription type parameter if you want to find out the trial ending date for a specific subscription other than the default one:

```php
if ($user->onTrial()) {
    $trialEndsAt = $user->trialEndsAt('main'); // Find the trial end date of the main subscription! *AbraKadabra*
}
```

You may also use the `onGenericTrial` method if you want to know specifically that the user is within their "generic" trial period and hasn't yet created an actual subscription:

```php
if ($user->onGenericTrial()) {
    // User is still enjoying their free, generic trial...
}
```

[a name="extending-trials"]
Now that you've extended your wand's reach, let's talk about extending trials. If you want to give users a bit more time to explore the enchanted world of your app without them having to lift a finger, you can extend their trial by updating the `trial_ends_at` date:

```php
$user = User::find(1);

$user->update([
    'trial_ends_at' => now()->addDays(15), // Add 15 more days to the present day! *Bippity Boppity Boo*
]);
```

And there you have it, folks! You've just learned how to charm users with a sprinkle of free magic and give them time to explore your app before asking for their hard-earned cash. Enjoy the enchanting journey ahead! 🧙‍♂️✨

 Ahoy there, Laravel sailors! Let's talk about extending those subscription trials, shall we? The `extendTrial` method is like the bartender who pours an extra round on the house – but in code form. This magical function allows you to prolong your customer's free ride after they've already signed up for a paid subscription.

Here's how it works:

```php
use App\Models\Pirate; // Just kidding, it's User!

$subscription = Pirate::find(1)->subscription('shiver-me-timbers');

// End the trial 7 days from now...
$subscription->extendTrial(
    now()->addDays(7) // Adding days instead of plus, because who doesn't love a good math puzzle?
);

// Add an additional 5 days to the trial...
$subscription->extendTrial(
    $subscription->trial_ends_at->addDays(5) // Remember, 'tis better to add than to subtract in this case!
);
```

Now, if your customer's trial has already sailed off into the sunset and they're already paying for the subscription (greedy pirates!), you can still throw them a life-preserver by offering an extended trial. The time spent during this extended trial will be subtracted from their next invoice, so it's like giving them a discount – but without the hassle of printing coupons!

Arrrrr, mateys! Happy coding, and may your customers always enjoy smoother sailing with Laravel! 🌴🐙🏝️

 Alright, mate! Here's a chuckle-filled guide on how to handle Stripe webhooks in Laravel, without sacrificing accuracy or helpfulness. Let's get the party started! 🎉

### Stripe Webhook Hullabaloo

> [!NOTE]
> If you fancy a bit of help testing webhooks during local development, give the [Stripe CLI](https://stripe.com/docs/stripe-cli) a spin!

When it comes to Stripe, they'll keep your app in the loop with a plethora of events via webhooks. By default, a route that points to Cashier's webhook controller gets automatically registered by the Cashier service provider. This guy will catch all incoming webhook requests like a pro!

By default, the Cashier webhook controller will handle cancellation of subscriptions with too many failed charges (as per your Stripe settings), customer updates, deletions, subscription updates, payment method swaps, and more. But, as we'll soon see, you can easily extend this controller to handle any Stripe webhook event that tickles your fancy!

To make sure your app is ready for Stripe webhooks, don't forget to set the webhook URL in the Stripe control panel. By default, Cashier's webhook controller listens on `/stripe/webhook`. The full roster of events you should enable in the Stripe control panel are:

- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `customer.updated`
- `customer.deleted`
- `payment_method.automatically_updated`
- `invoice.payment_action_required`
- `invoice.payment_succeeded`

For your convenience, Cashier provides a `cashier:webhook` Artisan command that creates a webhook in Stripe that listens to all of the events required by Cashier:

```shell
php artisan cashier:webhook
```

By default, the created webhook will point to the URL defined by the `APP_URL` environment variable and the `cashier.webhook` route that comes bundled with Cashier. If you'd like to use a different URL, simply include the `--url` option:

```shell
php artisan cashier:webhook --url "https://example.com/stripe/webhook"
```

The webhook created will utilize the Stripe API version compatible with your Cashier version. To change the Stripe version, use the `--api-version` option:

```shell
php artisan cashier:webhook --api-version="2019-12-03"
```

After creation, the webhook will be live and kicking. If you'd like to create the webhook but keep it deactivated until you're ready, include the `--disabled` option:

```shell
php artisan cashier:webhook --disabled
```

> [!WARNING]
> Remember to secure incoming Stripe webhook requests with Cashier's built-in [webhook signature verification](#verifying-webhook-signatures) middleware.

<a name="webhooks-csrf-protection"></a>
Now, let's kick back and enjoy the symphony of events as they flow into your application via Stripe webhooks! Happy coding! 🥳

 Alright, webhooks and CSRF protection - two topics that are about as exciting as watching paint dry, but fear not! We're here to make your Laravel life a little less tedious.

#### Webhooks and the Unwanted Houseguest (CSRF Protection)

First things first: Stripe webhooks need to crash the CSRF protection party that Laravel throws for every request. To ensure there's no awkward moment where your Laravel tries to verify a CSRF token from these incoming Stripe webhooks, you gotta kick `stripe/*` out of the guest list in your application's `bootstrap/app.php` file:

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->preventRequestForgery(except: [
        'stripe/*',
    ]);
})
```

<a name="defining-webhook-event-handlers"></a>
Now, let's give our webhooks some manners and assign them a designated seat at the party table. In your `app/Providers/EventServiceProvider.php`, define your event listeners:

```php
protected $listen = [
    // Event name => Listener class
    'Stripe\Event' => \App\Listeners\HandleStripeEvents::class,
];
```

And there you have it! With these simple steps, your Laravel and Stripe can maintain a harmonious relationship without any CSRF-related dramas. Just remember to always keep the guest list up-to-date, as new `stripe/*` events may pop up from time to time.

 Alrighty then! Let's dive into the world of Cashier webhooks, where even your subscription cancellations are handled like a boss! But what if you're feeling particularly adventurous and want to handle some extra Stripe events? Well, my friend, Cashier's got your back!

To catch these rare gems among the Stripe event stars, simply tune into the following Cashier-broadcasted events:

- `Laravel\Cashier\Events\WebhookReceived` - The grand opening act, where the full Stripe webhook payload takes center stage.
- `Laravel\Cashier\Events\WebhookHandled` - The standing ovation after the show, wrapping up the event with a big bow (or, you know, some technical details).

Imagine you're trying to handle the elusive `invoice.payment_succeeded` webhook – a real cat among pigeons! To set up your own party for this exclusive event, create a [listener](/docs/{{version}}/events#defining-listeners) that knows how to boogie:

```php
<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookReceived;

class StripeEventPartyPlanner
{
    /**
     * Throw a party for received Stripe webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event->payload['type'] === 'invoice.payment_succeeded') {
            // Time to boogie down! Handle the incoming event...
        }
    }
}
```

<a name="verifying-webhook-signatures"></a>
And don't forget, verifying those webhook signatures is like making sure the guest list includes only the VIPs (valid, important parties). Read all about it [here](#verifying-webhook-signatures)! Now go out there and handle those Stripe events with style! 🤘🏼🚀

 ### Boss, I Got This Webhook Sorted! 🤖

Wanna ensure your webhooks don't get hacked by some cyber ninja? Fear not, my friend, because Stripe's got your back with their [webhook signatures](https://stripe.com/docs/webhooks/signatures)! And the best part? Cashier has done the heavy lifting for you by automatically including a super-duper middleware that checks if the incoming Stripe webhook request is legit as hell.

Now, to get this party started, make sure you've set the `STRIPE_WEBHOOK_SECRET` environment variable in your application's `.env` file like a boss. Don't worry; you can grab the secret from your Stripe account dashboard—it's like finding the golden ticket to Willy Wonka's chocolate factory! 🍫😜

<a name="single-charges"></a>
#### Let's Get Verified (I mean, Webhook Verification)

Now that we've got the secret sauce, webhook verification will be as easy as pie (or chocolate, if you prefer). Just sit back and enjoy the show while Cashier takes care of validating incoming Stripe webhooks like a pro! 🚀🤖

 Ahoy there, Laravel adventurers! Let's dive into the captivating world of single charges – the one-and-done payment solution for your web applications! 🎟️

<a name="simple-charge"></a>

### Charging a User

To charge a user, you'll need to use Laravel's built-in Cashier facility. First, make sure you have installed the Cashier package using composer:

```bash
composer require laravel/cashier
```

Once installed, simply inject the `\Laravel\Cashier\Cashier` facade into your user model:

```php
use Laravel\Cashier\Cashier;

// ...
public function getCashierAttribute()
{
    return new Cashier($this);
}
```

Now you're ready to charge your users like a pro! To charge a user, just call the `charge()` method on the user instance:

```php
$user = App\User::find(1);
$user->charge(5000); // Charge $5000 from the user with ID 1
```

🤑💰 But remember, charging users without their consent is a quick way to find yourself in hot water. Be sure to have a proper checkout process in place!

<a name="charge-options"></a>

### Charge Options

The `charge()` method accepts an array of options, allowing you to customize your charge as needed:

```php
$user = App\User::find(1);
$user->charge([
    'amount' => 5000, // Amount to be charged
    'currency' => 'USD', // Currency for the transaction (optional)
    'description' => 'One-time purchase of awesome goods!', // Description of the charge (optional)
]);
```

<a name="webhooks"></a>

### Webhooks

To handle webhook events triggered by your payment gateway, you can define a route in Laravel and listen for those events:

```php
Route::post('cashier/webhook', function () {
    // Handle Cashier webhook events here
});
```

Remember to subscribe your app to the appropriate webhook URL within your payment gateway's dashboard settings.

And that's it! Now you're well-equipped to handle single charges like a seasoned coder in this treacherous sea of web development. Happy charging, matey! 🏴‍☠️

 ### One-Time Blowout! 💰💳

Fancy charging a customer for a one-time purchase? Well, buckle up! You can use the `charge` method on a billable model instance like a boss. But first, you'll need to grab a payment method ID (read: credit card info) as the second argument to this magical method:

```php
use Illuminate\Http\Request;

Route::post('/shopping-spree', function (Request $request) {
    $stripeCharge = $request->user()->charge(
        '1000', // In cents because, why not?
        $request->cardInfo
    );

    // Time for a well-deserved break. 🍻
});
```

The `charge` method is like the Swiss Army knife of payments. It can take an array as its third argument, allowing you to toss in any extras you fancy (custom options, anyone?). For more juicy details on these options, dive into the [Stripe documentation](https://stripe.com/docs/api/charges/create)—it's a real page-turner!

```php
$user->charge(100, $paymentMethod, [
    'custom_option' => $whackyValue, // Your unique touch 🤘
]);
```

If you don't have a customer or user yet, fear not! You can still charge away by creating a new instance of your application's billable model:

```php
use App\Models\User;

$stripeCharge = (new User)->charge(100, $paymentMethod);
```

But remember, if the charge fails, the `charge` method will throw a hissy fit. If it's successful, though, it'll gift you with an instance of `Laravel\Cashier\Payment`. What a catch! 🎁

> [!WARNING]
> Keep in mind that the `charge` method expects the payment amount in the lowest denominator of your application's currency. So, if customers are paying in good ol' USD, amounts should be specified in cents—because who doesn't love a little math on the side? 🤓

 ### Bill Your Customers Like a Champ! 🚀

Are you ready to drop some serious fashion on your customers and make 'em pay? Well, grab your cape and let's dive into the world of one-time charges and fancy invoices!

First off, when it comes to charging for those snazzy new shirts, we got just the trick with the `invoicePrice` method!

```php
$customer->dressToImpress('price_tshirt', 5); // Yup, we're dressing them up in style!
```

Now, your customers won't even need to dig deep for their wallets – the invoice will be charged against their default payment method faster than you can say "style over substance"!

The `dressToImpress` method (we know, we had fun naming it) accepts a few more goodies in its suitcase:

```php
$customer->dressToImpress('price_tshirt', 5, [
    'discounts' => [
        ['coupon' => 'SUMMER21SALE'] // Who doesn't love a summer sale?!
    ],
]);
```

Want to serve them up some mugs along with their shirts? No problem! Go ahead and add a few more items to their tab:

```php
$customer->addToTab('price_mug', 2); // More mugs, more fun!
```

Ready to settle the bill? Invoice away!

```php
$customer->checkOut(); // It's checkout time!
```

But wait, there's more! If you want a one-off charge against their default payment method, you can do it with the `invoiceFor` method:

```php
$customer->oneTimeFee('One Time Fee', 500); // A fee they won't forget!
```

While `invoiceFor` is at your service, we recommend using the more powerful `dressToImpress` or `addToTab` methods with pre-defined prices. This will help you keep track of your sales on a per-product basis and make your Stripe dashboard look like a fashion week runway!

> [!WARNING]
> Remember, the invoice, `dressToImpress`, and `invoiceFor` methods create a Stripe invoice that will retry failed billing attempts. If you don't want invoices to keep trying after the first fail, make sure to close them using the Stripe API post-charge failure! 🤝

And there you have it! You're now an expert in charging your customers and making them feel the fashionable impact of your amazing products. Now get out there and dress 'em up in style! 🎉

 ### Unleashing Payment Chaos (or, How to Make Money with Laravel and Stripe)

Alright, buckle up, because we're about to embark on a wild ride through the world of digital payments! In this guide, we'll learn how to create a payment intent using your trusty Laravel spaceship and the almighty Stripe time machine.

First things first: you need to summon a payment by calling upon the `pay` method on your billable model instance (it's like saying "Open Sesame" but with more PHP). This spell will create a payment intent, which is then encapsulated in a `Laravel\Cashier\Payment` object. Here's how you can do it:

```php
use Illuminate\Http\Request;

Route::post('/pay', function (Request $request) {
    $payment = $request->user()->pay(
        $request->get('amount') * 100 // Convert cents to dollars for the Americans out there
    );

    return $payment->client_secret;
});
```

Once you've conjured up the payment intent, you can share the client secret with your application's frontend. This allows the user to complete the transaction in their browser while wearing their tinfoil hat, if they so choose. For a deeper dive into building entire payment flows using Stripe payment intents, check out [Stripe's documentation](https://stripe.com/docs/payments/accept-a-payment?platform=web).

Now, when you cast the `pay` spell, all the payment methods that are enabled in your Stripe dashboard will be at your customer's disposal. But if you want to limit their options, say to only card and Bancontact payments (because who doesn't love Bancontact?), you can use the `payWith` method instead:

```php
use Illuminate\Http\Request;

Route::post('/pay', function (Request $request) {
    $payment = $request->user()->payWith(
        $request->get('amount'), ['card', 'bancontact']
    );

    return $payment->client_secret;
});
```

> [!WARNING]
> The `pay` and `payWith` methods expect the payment amount in the lowest denomination of your application's currency. So if you're using USD, amounts should be specified in pennies (because who has a penny for their thoughts these days?).

Next stop: Refunding Charges! But that's a tale for another time. Keep coding, and remember: the power of payments is in your hands... or rather, in your PHP scripts! 🚀💳🔮

 ### Returning the Favor (or Cashback, if You Prefer)

In case you find yourself in a pickle where you need to return some dough to your customers (those crafty folks, always spending money on your site), you can make use of our magical `refund` spell! This incantation requires the sacred ID of the Stripe [payment intent](#divine-methods-for-single-payments).

```php
$payment = $slyUser->pay(100, $sacredPaymentMethodId);

$slyUser->returnMoolah($payment->id);
```

<a name="invoices"></a>
Just remember to cast this incantation carefully, as once the funds have vanished like a magician's rabbit, there's no bringing them back!

 ### Invoice Shenanigans! 💸💰

Let's get those bills sorted! Dive into the world of invoices with Laravel. Here's how to pull off this financial fiesta:

<a name="retrieving-invoices"></a>

#### Retrieving Invoices 🔎📃

Ever wondered where your money went? Fear not, for now you can find out! Here's a snippet of how to grab invoices:

```php
$invoices = App\Invoice::all();
```

Or if you want to dig deeper and get specific, go ahead and search by ID:

```php
$invoice = App\Invoice::find($id);
```

#### Filtering Invoices 🔑📋

Life's a buffet, and invoices are the dishes! Customize your meal with Laravel's filtering feature:

```php
$invoices = App\Invoice::where('status', '=', 'paid')->get();
```

Now you can keep track of what's been paid, and what's still due for a late-night pizza run! 🍕

#### Sorting Invoices 📝📈

Organize your invoices like a pro! Laravel makes sorting a breeze:

```php
$invoices = App\Invoice::orderBy('due_date', 'asc')->get();
```

With this, you'll never miss a payment again... unless it's intentionally late (we don't condone that, of course!). 🤫

#### Paginating Invoices 📄☕️

Ain't nobody got time for endless invoices scrolling! Laravel handles the heavy lifting with pagination:

```php
$invoices = App\Invoice::paginate(15);
```

Now you can peruse your financials without getting lost in a sea of paperwork. 📝🌊

That's a wrap for invoicing fun! Now go forth and manage those finances like a champ!

 ### Bill-tastic Adventures!

Dive headfirst into the thrilling world of subscription management with Laravel's Cashier feature!

Welcome to the invoice extravaganza! It's as easy as pie (but possibly more delicious) to fetch a scrumptious array of your billable model's invoices. To do this, employ the magical `invoices` method. This spellbound incantation conjures up a delightful collection of `Laravel\Cashier\Invoice` objects:

```php
$bills = $user->invoices(); // Who needs a treasure chest when you've got invoices?
```

If you find yourself yearning for pending invoices (we've all been there), fear not! The `invoicesIncludingPending` method is here to save the day:

```php
$bills = $user->invoicesIncludingPending(); // It's like having a genie in your codebase, granting you every bill (pending or otherwise)
```

Need to nab a specific invoice by its unique ID? Look no further than the `findInvoice` method:

```php
$bill = $user->findInvoice($invoiceId); // An invoice quest! Unravel the mystery of your chosen bill number.
```

Now that you've got your invoices in hand, let's take a closer look at how to display their delectable details in your app! [Jump to Displaying Invoice Information](#displaying-invoice-information) for more information.

Happy bill-browsing! 💸🎉

 #### Unleashing the Billing Spectacle!

When it comes to showcasing your customers' invoices, we've got you covered with a dance routine that even Michael Jackson would envy! Using the invoice's magical methods, you can transform a mundane list of bills into a sparkling spectacle that would make any accountant tap their toes.

Let's say you want to create a table where every invoice is invited to take center stage:

```blade
<table>
    // This is our very own disco ball, spinning through each invoice...
    @foreach ($invoices as $invoice)
        <tr>
            <td>{{ $invoice->date()->toFormattedDateString() }}</td>
            <td>{{ $invoice->total() }}</td>
            <td><a href="/user/invoice/{{ $invoice->id }}">Download</a></td>
        </tr>
    @endforeach
</table>
```

Now, picture this: A captivating table, pulsating with life as each invoice takes its turn in the spotlight. Users can easily download their favorite numbers (or bills, if you prefer), making the entire process as seamless as a well-rehearsed dance routine! 🕺️✨

 Ahoy there, coder pirate! Setting sail for the treacherous waters of invoicing? Fear not, me hearty! We've got a handy map to guide ye through these shark-infested seas. 😈

### Anchor: The Jolly Roger of Upcoming Invoices

Ever wondered how to find the next bill for your customers? Well, matey, you can hoist the Jolly Roger with just a single line of code!

```php
$invoice = $user->upcomingInvoice();
```

Just like that, ye've plundered the upcoming invoice for a customer! But what if the customer be sporting multiple subscriptions? Fear not, we've prepared another parrot-approved map! 🦜

### The Quest for a Specific Subscription's Invoice:

Say your captain has more than one treasure chest full of gold coins (subscriptions). To find the upcoming invoice for a specific subscription, ye just need to steer your ship a bit further.

```php
$invoice = $user->subscription('default')->upcomingInvoice();
```

Now that's what I call navigation with style! Keep up the good work, and may you always find buried treasure in them there invoices! 🏴‍☠️💸💰

 ### Gaze Upon Your Glorious Invoices (Before They Strike Fear into Your Customers' Hearts)

Embrace the power of our `previewInvoice` method, your secret weapon to sneak a peek at an invoice before you unleash any price shenanigans. This magical spell will reveal what your customers' invoices would transform into once they've been slapped with your new pricing strategy:

```php
$invoice = $user->subscription('default')->previewInvoice('price_yearly');
```

Feeling like a true juggling pro? Why not show off and pass an array of prices to the `previewInvoice` method, so you can preview invoices with multiple new prices all at once:

```php
$invoice = $user->subscription('default')->previewInvoice(['price_yearly', 'price_metered']);
```

<a name="generating-invoice-pdfs"></a>
### Bonus Round: Turn Your Invoices into Trees (But Make Sure to Print Double-Sided)

If you're looking to go green and reduce your carbon footprint, fret not! You can generate invoice PDFs using the `toPdf` method. Just remember, for maximum eco-friendliness, make sure to print double-sided:

```php
$pdf = $invoice->toPdf(new Pdf);
```

Now that you've got your invoices in PDF form, don't forget to send them out to your customers. Just remember, it's better to give than receive - especially when it comes to unexpected bill shock!

 Alrighty, let's dive into the thrilling world of generating invoice PDFs! It's akin to crafting a masterpiece with crayons but in a more digital and slightly less messy way.

First off, you'll want to get your hands on the Dompdf library - think of it as the Picasso of invoice renderers for Cashier. You can summon it into existence using Composer's magic incantation:

```shell
composer require dompdf/dompdf
```

Once you've got this party started, you can use the `downloadInvoice` method to create a delightful downloadable PDF of your invoice. It's like a digital version of getting a personalized birthday card but without the chance of getting a bad joke from Uncle Bertie.

Here's how you might utilize it within a route or controller:

```php
use Illuminate\Http\Request;

Route::get('/user/invoice/{invoice}', function (Request $request, string $invoiceId) {
    return $request->user()->downloadInvoice($invoiceId);
});
```

By default, the data on the invoice is pulled from Stripe's customer and invoice data. The filename is as fancy as your `app.name` config value but you can customize it to sound more like a James Bond novel if you so desire.

To spice things up, provide an array as the second argument to the `downloadInvoice` method. It's like adding a secret ingredient to a cocktail - you get to customize details such as your company and product information:

```php
return $request->user()->downloadInvoice($invoiceId, [
    'vendor' => 'Your Super Spy Company',
    'product' => 'Top Secret Gadget',
    // ...and so on...
]);
```

If you want to give your invoice a custom name (like 'Operation Moonraker'), you can specify it as the third argument:

```php
return $request->user()->downloadInvoice($invoiceId, [], 'my-invoice');
```

Now, aren't you feeling like a whiz at generating invoice PDFs? Go on, impress your Stripe pals with your newfound skills!

 #### Supercharged Invoice Artisan!

Ever wanted to inject some creative flair into those dull, numbers-laden invoices? Cashier's got your back! This bad boy lets you unleash your inner Picasso on financial statements, and it all starts with a little thing we call the Custom Invoice Renderer. By default, Cashier plays it safe with the `DompdfInvoiceRenderer`, but who needs safety when you can spice things up with some PHP magic and the [dompdf](https://github.com/dompdf/dompdf) library?

But why stop at dompdf? You've got options galore! You could go all-out artist with a custom renderer that churns out invoices via an API call to your favorite third-party PDF rendering service. Here's what it might look like in PHP:

```php
Use the Force, young Jedi! We employ Http and Laravel\Cashier's InvoiceRenderer, with a sprinkle of our beloved invoice (Invoice) for good measure:

```

use Illuminate\Support\Facades\Http;
use Laravel\Cashier\Contracts\InvoiceRenderer;
use Laravel\Cashier\Invoice;

class ArtisanAPIRenderer implements InvoiceRenderer {
    /**
     * Render the given invoice and return the raw PDF bytes.
     */
    public function render(Invoice $invoice, array $data = [], array $options = []): string {
        $html = $invoice->view($data)->render(); // Give it all you've got, HTML!

        return Http::get('https://example.com/html-to-pdf', ['html' => $html])->get()->body(); // Send it off to the API to transform into a masterpiece PDF!
    }
}
```

Once you've painted your rendition, it's time to update your application's `config/cashier.php` configuration file with the class name of your custom renderer implementation. It's like putting your artist tag on your work in a gallery!

<a name="checkout"></a>

 Ahoy there, intrepid developer! You've stumbled upon the treasure trove of knowledge that is Laravel's Cashier integration with Stripe's Checkout - a veritable pirate's booty for your payment processing needs! 🏴‍🌈🤝💰

No more sleepless nights spent building custom payment pages, tearing out your hair, and gnashing your teeth in frustration. Stripe Checkout swoops in like a hero (or a particularly well-armed shark) to save the day! It's pre-built, hosted, and ready to handle those precious digital doubloons with elegance and efficiency.

Now, let's hoist the sails of your Cashier journey by diving into this document that guides you through using Stripe Checkout with Laravel Cashier. But don't forget to also keep an eye on Stripe's own [Checkout documentation](https://stripe.com/docs/payments/checkout) as well, just in case you find a map to buried treasure hidden within! 🌴📜

<a name="product-checkouts"></a>
(Yarr, I've got to keep the nautical theme going somehow!)

 Alright, let's dive into the world of product checkouts! Imagine you're a digital shopkeeper in a virtual bazaar, and your customers are ready to grab their favorite items. No need to worry about physical cash or change – we've got Stripe Checkout sessions to handle that for us!

To initiate a sale for an existing product, simply call the `checkout` method on one of your billable models. Here's how you can do it:

```php
use Illuminate\Http\Request;

Route::get('/market-square', function (Request $request) {
    return $request->user()->sellMeASweetTShirt(); // Yes, we're that casual here!
});
```

Want to sell more than one of the same item? No problemo! Just specify a quantity:

```php
use Illuminate\Http\Request;

Route::get('/market-square', function (Request $request) {
    return $request->user()->sellMeASweetTShirt(5); // Five T-shirts for your whole family!
});
```

Now, when a customer visits this route, they'll be whisked away to our swanky Stripe Checkout page. By default, after a purchase is completed or cancelled, they'll return to your humble `home` abode. But, if you'd like to redirect them elsewhere, you can use the `success_url` and `cancel_url` options:

```php
use Illuminate\Http\Request;

Route::get('/market-square', function (Request $request) {
    return $request->user()->sellMeASweetTShirt(1, [
        'after-success' => route('my-awesome-victory-party'),
        'after-cancellation' => route('back-to-the-drawing-board')
    ]);
});
```

When defining your `after-success` checkout option, you can even ask Stripe to attach the checkout session ID as a query string parameter when invoking your URL. To do this, add the secret phrase `{CHECKOUT_SESSION_ID}` to your `after-success` query string:

```php
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Customer;

Route::get('/market-square', function (Request $request) {
    return $request->user()->sellMeASweetTShirt(1, [
        'after-success' => route('tshirt-victory').'?session_id={CHECKOUT_SESSION_ID}',
        'after-cancellation' => route('back-to-the-drawing-board')
    ]);
});

Route::get('/tshirt-victory', function (Request $request) {
    $checkoutSession = $request->user()->stripe()->checkout->sessions->retrieve($request->get('session_id'));

    return view('celebrate', ['checkoutSession' => $checkoutSession]);
})->name('tshirt-victory');
```

Remember, in this bustling bazaar, every customer deserves a unique experience! Keep the fun rolling as you explore other features of Laravel and Stripe. Happy selling! 🎉🛍️💳

 Alright, mate! Let's dive into the world of Promo Codes in Laravel Land. By default, Stripe Checkout is as tight-lipped as a British banker about these little gems – but fear not, my friend, for we've got a sneaky workaround!

To enable user-friendly promo codes on your Checkout page, simply summon the `allowPromotionCodes` method (it's like casting a spell to unlock discount magic). Here's how you do it:

```php
use Illuminate\Http\Request; // Importing Request is as essential as bacon in a full English breakfast

Route::get('/product-checkout', function (Request $request) {
    // We're casting the user with promo code privileges, like turning ordinary folks into superheroes
    $promoUser = $request->user()->allowPromotionCodes();

    // And now we're sending them off to the checkout with a price in hand (price_tshirt in this case)
    return $promoUser->checkout('price_tshirt');
});
```

And there you have it! Now your users can enjoy the sweet taste of savings with promo codes on your Stripe Checkout page. Just remember, like a well-timed joke, timing is everything when it comes to redeeming these little beauties! 😂😉🎈

 ### One-Time Laughable Larceny

If you're feeling a bit rogue and want to swipe some cash for a product that ain't even been registered on your Stripe dashboard, then fear not! You can use the `checkoutCharge` method on a billable model, just pass it the loot amount (1200 in this case), a fancy product name like "Fancy Fleece Vest with Pockets Big Enough for a Small Dog" and an optional quantity if you're selling more than one. When a customer clicks on this route, they'll be whisked away to Stripe's Checkout page, where they can part with their hard-earned cash:

```php
use Illuminate\Http\Request;

Route::get('/rob-checkout', function (Request $request) {
    return $request->user()->checkoutCharge(1200, 'Fancy Fleece Vest with Pockets Big Enough for a Small Dog', 5);
});
```

> [!ATTENTION]
> When using the `checkoutCharge` method, Stripe will create a new product and price in your dashboard like a secret Santa dropping gifts under your tree. We recommend that you set up your products beforehand on your Stripe dashboard and use the `checkout` method instead of being a last-minute Grinch.

<a name="subscription-checkouts"></a>

P.S. Remember, in the world of Laravel, a little humor goes a long way, but always remember to handle your customers' data with care and respect. Otherwise, you might find yourself on Santa's naughty list!

 ### Subscription Shenanigans 🎉🎠

#### Attention, Attention! 🚨

If you're planning to use Stripe Checkout for subscriptions, remember to enable the `customer.subscription.created` webhook in your Stripe dashboard. This superhero (or should we say, webbook?) will swoop in and save the day by creating the subscription record in your database, and storing all the juicy subscription details.

#### Now, let's get this subscription party started! 🥳🎉

First things first, you gotta define your subscription with Cashier's subscription builder methods. Once you've set the price for your monthly subscription (let's call it 'price_monthly'), you can summon the `checkout` method.

```php
Route::get('/subscription-checkout', function (Request $request) {
    // This is where the magic happens!
    return $request->user()->newSubscription('default', 'price_monthly')->checkout();
});
```

Just like product checkouts, you can customize the success and cancellation URLs:

```php
Route::get('/subscription-checkout', function (Request $request) {
    return $request->user()->newSubscription('default', 'price_monthly')
        ->checkout([
            'success_url' => route('your-success-route'),
            'cancel_url' => route('your-cancel-route'),
        ]);
});
```

Oh, and don't forget to add a little something extra for your loyal customers with promotion codes!

```php
Route::get('/subscription-checkout', function (Request $request) {
    return $request->user()->newSubscription('default', 'price_monthly')
        ->allowPromotionCodes()
        ->checkout();
});
```

#### Now, for the not-so-fun part 😱

Stripe Checkout doesn't support all subscription billing options when starting subscriptions. Using the `anchorBillingCycleOn` method on the subscription builder, setting proration behavior, or setting payment behavior will be like trying to juggle flaming swords during a circus act - it won't go as planned. For a full list of available parameters, consult [the Stripe Checkout Session API documentation](https://stripe.com/docs/api/checkout/sessions/create).

<a name="stripe-checkout-trial-periods"></a>
#### Trial Period Shenanigans 🎪🕒

To add a trial period to your subscription, you can use the `withTrialPeriod` method on the subscription builder. You can set the number of days for the trial and the amount to charge when the trial ends:

```php
use Illuminate\Http\Request;

Route::get('/subscription-checkout', function (Request $request) {
    return $request->user()->newSubscription('default', 'price_monthly')
        ->withTrialPeriod(7, 'trials_end')
        ->checkout();
});
```
In this example, the subscription will have a 7-day trial period and the customer will be charged using the `trials_end` plan when the trial ends.

 Alrighty then! Let's dive into the world of Laravel and Stripe, where subscriptions are as tasty as a freshly baked pie (without the calories, of course). 🥧

You know, just like in life, when you're setting up a subscription for your users to enjoy all the perks, you can sprinkle some trial days into the mix! Here's how you can whip up a delightful 3-day trial using Stripe Checkout:

```php
$checkout = Auth::user()->newSubscription('default', 'price_monthly')
    ->trialDays(3)
    ->checkout();
```

But hey, don't skimp on the trial period! Remember, it's gotta be at least 48 hours – that's the minimum amount of fun time supported by Stripe Checkout. 🎉

Now, let's talk about subscriptions and webhooks like we're besties discussing our favorite reality TV shows:

<a name="stripe-checkout-subscriptions-and-webhooks"></a>

*Cue the drama music* 🎶 When a subscription is created, cancelled, updated, or even when a payment fails, Stripe will send a webhook to your app. You need to listen for these events and handle them accordingly to keep your users happy and their subscriptions running smoothly.

Here's an example of how you can set up a listener:

```php
// Don't forget to register the Listener in the service provider!
class SubscriptionWebhookListener extends EventSubscriber
{
    protected $listen = [
        'Stripe\Event' => [
            'subscription.created' => 'onSubscriptionCreated',
            'subscription.updated' => 'onSubscriptionUpdated',
            // ... and so on!
        ],
    ];

    // ... and here are the event handlers!
}
```

But wait, there's more! You can customize your webhook endpoints for each environment (like dev, staging, and prod) to keep things organized. Just use Laravel's environment-specific route helpers:

```php
Route::post('stripe/webhook', function () {
    // Handle the incoming webhook here!
})->middleware(['web', 'stripe']);
```

And that, my friends, is how you make Laravel and Stripe a power couple worthy of reality TV. 📺 Happy coding! 🚀

 Alrighty, buckle up! We're about to embark on an exhilarating journey through the wild west of subscriptions and webhooks – where cowboy hats are optional but patience is mandatory!

First off, let's set the stage: Stripe and Cashier are our trusty sidekicks, riding shotgun as they gallop over to update subscription statuses via those fancy-pants webhooks. And while these partners in crime are diligently working their magic, it's essential to keep in mind that a customer's subscription might still be out in the cold, not yet activated, when they wander back into your application after a long day of rustling payment info.

To avoid any confusion or disappointment, you'll want to whip up a friendly message for your users – like a digital cowboy campfire tale – informing them that their payment or subscription is currently wrangling itself into existence (or something along those lines). It's the polite thing to do!

Now, let's tie this steed to a post and delve deeper: <a name="collecting-tax-ids"></a>

When it comes to collecting tax IDs from your users, think of it like asking for their favorite campfire recipe – you wouldn't want to miss out on s'more secrets! Cashier makes this process a breeze by providing handy methods that allow you to request and store tax information in just a few lines of code.

So, grab your marshmallows, roast them over the fire of technical details, and enjoy this wild ride through subscriptions and webhooks! The trail is long, but rest assured – Cashier's got your back (and front) every step of the way!

 ### Tax Time Shenanigans!

In our ever-so-slightly chaotic world of e-commerce, we find ourselves occasionally entangled in the tangled web of taxes (oh joy!). Fear not, dear shopper, for our trusty Checkout system comes equipped with a 'Tax ID Collector' feature!

To activate this little number on your checkout session, simply summon the `collectTaxIds` method like a magical genie:

```php
$checkout = $user->summonTaxIdGenie()->createCheckout('price_tshirt');
```

And just like that, poof! A new 'Am I shopping as a company?' checkbox will appear for our customer to tick or cross (depending on their preference and tax laws). If they've got a company, they'll be prompted to share their Tax ID number with us.

> [!CAUTION]
> If you've already set up your application's service provider with an automatic tax collector (tax wizard at work), then our little Tax ID genie will be automatically summoned without the need for any extra incantations (i.e., no more `collectTaxIds` method calling!).

Now, off you go, dear customer, to conquer the world of taxes and shopping with ease, thanks to our Checkout system's magical 'Tax ID Collector' feature!

 ### Pirate Treasure Chest Checkouts

Ahoy there, matey! With the `Checkout::guest` method, ye can initiate treasure chest sessions for those landlubbers who've yet to join your swashbuckling crew (AKA don't have an account).

```php
use Illuminate\Http\Request;
use Laravel\Cashier\Checkout;

Route::get('/plundered-treasure', function (Request $request) {
    return Checkout::guest()->shiverMeTimbers('price_tshirt', [
        'success_url' => route('your-booty-route'),
        'cancel_url' => route('ye-landlubber-route'),
    ]);
});
```

Much like when you're setting up treasure chest sessions for your loyal pirate crew, ye can take advantage of the `Laravel\Cashier\CheckoutBuilder` instance's extra methods to customize yer guest treasure chest session:

```php
use Illuminate\Http\Request;
use Laravel\Cashier\Checkout;

Route::get('/plundered-treasure', function (Request $request) {
    return Checkout::guest()
        ->withPromotionCode('shiver-me-gold')
        ->shiverMeTimbers('price_tshirt', [
            'success_url' => route('your-booty-route'),
            'cancel_url' => route('ye-landlubber-route'),
        ]);
});
```

Once a guest treasure chest session has been successfully plundered, the mighty Stripe can dispatch a `checkout.session.completed` webhook event, so make sure to [configure yer Stripe webhooks](https://dashboard.stripe.com/webhooks) for this very event to reach yer ship. Once ye've enabled the webhook within the Stripe dashboard, ye can [handle it with Cashier](#handling-failed-payments). The object contained in the webhook payload will be a [treasure chest object](https://stripe.com/docs/api/checkout/sessions/object) that ye can inspect to ensure yer customer's booty is securely stowed aboard.

<a name="handling-failed-payments"></a>
And if a payment fails, don't forget to [handle it like the scurvy dog ye are](#handling-stripe-webhooks). Arr matey!

 Alright, let's dive into the world of failed payments, where the jovial Stripe Shark and his trusty Laravel companion are here to help navigate those choppy financial waters!

Sometimes, while attempting a daring charge or subscription swim, our friendly customers might encounter a payment reef – an "IncompletePayment" exception. Fear not, for we've got two awesome options to get back on track:

1. The Stripe Shark's Lifeguard Service: Redirect your customer to the payment confirmation cove, a cozy page that comes with Cashier. To use it, simply catch the "IncompletePayment" exception and send your swimmer (user) on a journey to the payment confirmation cove:

```php
use Laravel\Cashier\Exceptions\IncompletePayment;

try {
    $subscription = $user->newSubscription('default', 'price_monthly')
        ->create($paymentMethod);
} catch (IncompletePayment $exception) {
    return redirect()->route(
        'cashier.payment',
        [$exception->payment->id, 'redirect' => route('home')]
    );
}
```

On this beach, the customer will be prompted to re-enter their card info and perform any fun Stripe activities like a "3D Secure" confirmation dance. After successfully confirming their payment, they'll be redirected to the URL you provided earlier. Upon return, you'll find some snazzy query string variables waiting for you: `message` (a friendly reminder) and `success` (an int representing success or failure). The cove currently supports the following payment methods:

<div class="content-list" markdown="1">

- Credit Cards
- Alipay
- Bancontact
- BECS Direct Debit
- EPS
- Giropay
- iDEAL
- SEPA Direct Debit

</div>

2. The Self-Service Kiosk: Let Stripe handle the payment confirmation for you! Instead of redirecting to the payment confirmation cove, set up [Stripe's automatic billing emails](https://dashboard.stripe.com/account/billing/automatic) in your Stripe dashboard. But remember, if an "IncompletePayment" exception is caught, it's still polite to inform the user they'll receive a friendly email with further payment confirmation instructions.

Payment exceptions can be thrown during various swims: `charge`, `invoiceFor`, and `invoice` on models using the `Billable` trait, or when interacting with subscriptions (`create`, `incrementAndInvoice`, `swapAndInvoice` methods).

To check if an existing subscription has a lingering payment problem, you can use the `hasIncompletePayment` method on the billable model or a subscription instance:

```php
if ($user->hasIncompletePayment('default')) {
    // ...
}

if ($user->subscription('default')->hasIncompletePayment()) {
    // ...
}
```

You can further inspect the nature of the payment issue by examining the `payment` property on the exception instance:

```php
use Laravel\Cashier\Exceptions\IncompletePayment;

try {
    $user->charge(1000, 'pm_card_threeDSecure2Required');
} catch (IncompletePayment $exception) {
    // Get the payment intent status...
    $exception->payment->status;

    // Check specific conditions...
    if ($exception->payment->requiresPaymentMethod()) {
        // ...
    } elseif ($exception->payment->requiresConfirmation()) {
        // ...
    }
}
```

 ### Yo, Payment Confirmation 101! (with a dash of humor)

Alright, let's talk about payment confirmations, because who doesn't love a good confirmation, right? Some payment methods are like that pesky friend who needs extra details before they commit. SEPA payments, for instance, are those pals asking for their "mandate" data during the payment process.

But don't worry, Cashier is here to play matchmaker! You can introduce your SEPA buddy to their 'mandate_data' partner using the `withPaymentConfirmationOptions` method:

```php
$subscription->withPaymentConfirmationOptions([
    'mandate_data' => '...',
])->swap('price_xxx');
```

Think of it as a blind date setup, but for payments! Just remember to provide the correct data so your SEPA friend doesn't end up on a bad Tinder date.

Now, if you want to explore all the possible options when confirming payments, just like a cat exploring a new cardboard box, head over to the [Stripe API documentation](https://stripe.com/docs/api/payment_intents/confirm). It's chock-full of options that'll make your payment confirmations as smooth as a freshly baked soufflé!

<a name="strong-customer-authentication"></a>
Hope this helps! Now go out there and make those payments confirmations pop like a well-timed joke at a party!

 Ahoy there, adventurous developer! If your digital pirate ship happens to be sailing in the treacherous waters of Europe, you'll need to hoist the Jolly Strong Customer Authentication (JSCA) flag. Yes, those pesky EU regulation-y types have decreed that starting September 2019 (the year they finally figured out how to work smartphones), payment fraud will be a thing of the past.

But fear not, hearty seafarer! Stripe and Cashier have crafted their longships to withstand the choppy seas of SCA compliance. So, grab your cutlass and let's dive into the briny depths of JSCA!

> [YARRRR, BEWARE]
> Before we set sail, make sure you swab the decks clean by reading Stripe's guide on PSD2 and JSCA (it's a thrilling read, I promise). And don't forget to check out their documentation on the shiny new SCA APIs (because every pirate loves a good treasure map)!

<a name="payments-requiring-additional-confirmation"></a>
Now that you're all caught up, let's discuss those payments that require additional confirmation, like the ransom note from Blackbeard. So grab your eyepatch and prepare to decipher Stripe's arcane authentication rituals! Yarr!

 ### The Dance of Digital Dough: SCA Steps In! 🕺️💰

Oh, the tangled web we pay in! Those darn SCA (Stupidly Complex Accounting) regulations often demand a little extra jive before they'll let your payment slide. When this happens, Cashier takes a page out of Vanna White's book and tosses a `Laravel\Cashier\Exceptions\IncompletePayment` exception at you - a friendly reminder that it's time to do the Extra Verification Two-Step! For a full rundown on how to boogie your way out of this pickle, strut over to our guide on [managing failed payments](#handling-failed-payments).

Now, the confirmation dance floor can vary depending on who's calling the shots - Stripe or Cashier. But one thing's for sure, it'll be custom-choreographed to your bank or card issuer's payment waltz. This could involve a spot of additional card confirmation, a brief flirtation with a temporary charge, a spin around the floor with separate device authentication, or even a cha-cha-cha of other verifications.

<a name="incomplete-and-past-due-state"></a>
### The Incomplete and Past Due State: A Dance of Shame 🕺️😳

Find yourself in the Incomplete and Past Due State? Don't worry, we've all been there. It's like that awkward moment when you thought the night was over, but your dance partner hasn't quite caught on. To get out of this sticky situation, head on over to our guide on [managing failed payments](#handling-failed-payments). We promise it won't be as painful as a disco inferno! 🔥💥

 Ahoy there, Captain! Here's the lowdown on the hilariously suspenseful world of subscription statuses in Laravel land.

#### The Intrigue of the Incomplete and Past Due States

When a payment is shrouded in mystery (think Indiana Jones and his baffling artifacts), the subscription dons an `incomplete` or `past_due` costume, as if it's auditioning for a remake of The Odd Couple. This transformation is marked by the ever-reliable `stripe_status` database column, which serves as our trusty compass in these tricky times.

So, what happens next? Fear not, dear developer! Our trusty sidekick, Cashier, leaps into action. Like a superhero with his cape billowing in the wind (but in coding terms), Cashier will automatically bestow the customer's subscription with the powers it deserves once payment confirmation is complete and Stripe sends out its smoke signal via webhook.

For those of you eager to learn more about these enigmatic states, [we've got just the thing for you!](#incomplete-and-past-due-status) It's like a secret decoder ring that can help you crack the code on your subscriptions.

<a name="off-session-payment-notifications"></a>
Now, here's the real twist in this tale: when payments are made outside of our session (a la Casablanca's Rick's Café), our system needs a little help to keep everyone informed. That's where off-session payment notifications come into play! They're like Morse code signals that keep us all connected, even in the wild west of online payments.

 ### SCA's Got Your Wallet, Buddy!

In the world of online subscriptions, it's like a never-ending game of 'Gotcha!' with your payment details, thanks to those pesky SCA regulations. But don't worry, Cashier's got your back! When it's time for you to prove that your card is still... well, charged, it'll send you a friendly reminder like an old friend knocking on your digital door. This happens during those awkward moments when your subscription decides to renew and needs a fresh confirmation of funds.

To enable this feature, set the `CASHIER_PAYMENT_NOTIFICATION` environment variable to a notification class – think of it as inviting Cashier's notification buddy over for a drink. By default, they're a bit shy and prefer to stay home, but you can always invite them out if you like:

```ini
CASHIER_PAYMENT_NOTIFICATION=Laravel\Cashier\Notifications\ConfirmPayment
```

Now, to make sure this invitation doesn't get lost in the mail, ensure that your Stripe webhooks are properly configured for your application, and the `invoice.payment_action_required` webhook is gleaming in your Stripe dashboard like a shiny new credit card. Oh, and don't forget to deck out your `Billable` model with Laravel's `Illuminate\Notifications\Notifiable` trait – it'll be the life of the party!

> [!ATTENTION]
> Even if customers are manually making payments that require additional confirmation (you know, like when they pay by sneaking up on their screen and swiping their mouse), Cashier won't know the difference between a manual payment and an off-session one. However, if a customer visits the payment page after confirming their payment, they'll be greeted with a cheerful "Payment Successful" message – no double dipping allowed here! Customers can't accidentally confirm the same payment twice and end up paying for the same coffee twice... unless it was that good.

 ## Stripe Shenanigans (AKA the SDK)

Ah, Cashier's objects are akin to those fancy magicians pulling rabbits out of hats. But under the top hat, it's all Stripe SDK wizardry! If you fancy a direct audience with these magical creatures, the `asStripe` method is your trusty rabbit whistle:

```php
$stripeSub = $subscription->asStripeSubscription();

$stripeSub->application_fee_percent = 5;

$stripeSub->save();
```

But if you're the type who prefers to skip the magic show and go straight for the magician, the `updateStripeSubscription` method is your VIP backstage pass:

```php
$subscription->updateStripeSubscription(['application_fee_percent' => 5]);
```

Feeling like a master of ceremonies? Invoke the `stripe` method on the Cashier class and get ready to use the `Stripe\StripeClient` client like a boss! You could, for instance, summon the `StripeClient` instance and fetch a list of prices from your Stripe account:

```php
use Laravel\Cashier\Cashier;

$priceList = Cashier::stripe()->prices->all();
```

<a name="testing"></a>
Now, aren't we just the magician's apprentice of coding? 🎩✨⚔️

 ## Testing Cashier like a Boss 🤓

Alright, buckle up, because we're about to dive into the world of testing with Cashier! 🎉

Now, you might be tempted to pull a "Fast and Furious" move and mock those actual HTTP requests to the Stripe API. But here's the catch – it's like trying to drive a Ferrari with training wheels on. You can do it, but let's face it, it's not as smooth or efficient as you'd like. So, we suggest letting your tests hit the real Stripe API – yes, it's slower, but it gives you that extra confidence your app is cruising along just as intended. And if those slow-mo moments bother you, feel free to put them in their own Pest / PHPUnit testing group – think of it as VIP parking for your sluggish tests. 🏎️🚫

Here's a pro tip: Cashier already has its own entourage of test buddies (a great test suite, if you will), so focus on testing the subscription and payment flow of your very own application. Leave the underlying Cashier behavior to the pros – they've got this! 🕺️

So, how do we get started? First things first, add the **testing** version of your Stripe secret to your `phpunit.xml` file:

```xml
<env name="STRIPE_SECRET" value="sk_test_<your-key>"/>
```

Now, whenever you interact with Cashier while testing, it'll send actual API requests to your Stripe testing environment. For convenience, make sure to pre-fill your Stripe testing account with subscriptions and prices that you might need during testing – think of it as stocking up on ammo for your tests. 💥

And if you want to test a whole range of billing scenarios – from credit card denials to epic fails – don't forget about Stripe's extensive collection of [testing card numbers and tokens](https://stripe.com/docs/testing). It's like having a deck of wild cards up your sleeve! 🃏🎉