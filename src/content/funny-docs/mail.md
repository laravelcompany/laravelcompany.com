 # The Art of Email in Laravel Land! 🕵️‍♂️💌

## Welcome to the Mail Department 📧✉️

### Pre-requisites, Configurations & Failsafes Galore! 🔩🌟

- **Introduction**
   - **Configuration**: Getting all your ducks in a row (and emails set up). 🐰🛠️
   - **Driver Prerequisites**: The necessary steps to ensure smooth email delivery. 🚧📨
   - **Failover Configuration** & **Round Robin Configuration**: A safety net for those 'oops' moments. 🤸‍♂️🔁

<a name="generating-mailables"></a>

## Crafting Your Emailable Masterpieces 🎨📜

### Creating & Writing Those Emailable Works of Art 🖌️🗝️

- **Generating Mailables**: Turning your PHP scripts into emailable magic. 🧙‍♂️✨
- **Writing Mailables**: Penning those perfect emails like a digital Bard. ✍️📖
   - **Configuring the Sender**: Getting those 'from' details just right. 💌✉️
   - **Configuring the View**: Designing your email as if it were a virtual Picasso. 🎨🖼️
   - **View Data**: The data that brings your email to life, no less than a magician's secret potion. 🔮🍷
   - **Attachments**: Making your emails more than just text, turning them into digital treasure chests. 💰💎
   - **Inline Attachments**: Keeping it tidy with embedded attachments in your email. 🧹📎
   - **Attachable Objects**: Attaching more than just files to your emails, because who doesn't like a good surprise? 🎁🛍️
   - **Headers**: Crafting the perfect subject lines and more to make your emails unforgettable. 📝🌐
   - **Tags and Metadata**: Giving your emails superpowers with these magical markers. 🔮💫
   - **Customizing the Symfony Message**: A chance to put your own unique stamp on those emails. 🖋️📝

<a name="markdown-mailables"></a>

## Markdown Mailables: The New Email Renaissance 🌟📝

### Composing & Styling Your Emails in a Whole New Way! ✍️🔨

- **Generating Markdown Mailables**: Transforming your Markdown documents into emails. 📝💬
- **Writing Markdown Messages**: Crafting those emails like you would write a blog post, with all the styling fun! 💬🖌️
- **Customizing the Components**: Fine-tuning each piece of your email to perfection. 🔩🎨

<a name="sending-mail"></a>

## Sending Those Emails into the Wild Blue Yonder! 🚀✉️

### Queuing Up Your Email Blasts and More! 📣📫

- **Sending Mail**: Unleashing your emails on an unsuspecting world. 💌🚀
- **Queueing Mail**: Waiting until the perfect moment to send those emails, like a digital time traveler. ⏰🕵️‍♂️

<a name="rendering-mailables"></a>

## Previewing Your Emails Before They Leave 📽️💫

### Checking Out Those Mailables in the Browser 🌐👀

- **Rendering Mailables**: A sneak peek at your emails before they take flight. 📝🛰️
- **Previewing Mailables in the Browser**: Ensuring those emails look great on every screen. 💬🕶️

<a name="localizing-mailables"></a>

## Translating Those Emails for a Global Audience 🌍🗣️

### Localizing Your Emails, One Language at a Time! 🌐🔮

<a name="testing"></a>

## Testing & Perfecting Your Email Masterpieces 🧪🎯

### Assuring Your Emails Always Reach Their Destination 🕵️‍♂️💬

- **Testing Mailable Content**: Making sure every email is a masterpiece. 🖌️📝
- **Testing Mailable Sending**: Ensuring those emails always reach their intended recipients. 🕵️‍♂️📫

<a name="mail-and-local-development"></a>

## Mail & Local Development: A Perfect Pairing 🍷🎨

### Making Emails Work Smoothly in Your Development Environment 🕵️‍♂️💻

<a name="events"></a>

## Events: Triggering Emails at the Right Time ⏰💬

### Creating Custom Email-triggering Magic! 🔮📫

<a name="custom-transports"></a>

## Custom Transports: Breaking Free from the Shackles of Standard Emailing 🕵️‍♂️💌

### Creating Your Own Unique Email Delivery Systems! 🚀📫

- **Additional Symfony Transports**: Expanding your email delivery options beyond the basics. 🔩📫

 Ahoy there, shipmates! Sending emails has never been more seafaringly simple, thanks to Laravel's sleek and streamlined email API, powered by the swashbuckling Symfony Mailer! No longer do ye need a compass or maps for navigating the treacherous waters of email delivery.

Laravel, like a sturdy pirate ship, sails smoothly alongside the trusted Symfony Mailer, offering an array of drivers to ensure your messages reach their destination - be it through the trusty SMTP, the cloud-savvy Mailgun, the speedy Postmark, the resilient Resend, or the venerable Amazon SES. And don't forget the humble `sendmail`, our trusty sidekick for local escapades!

So hoist the sails, mateys, and set course for a smooth ride with Laravel's mailing system - we'll have ye sending emails through your chosen service faster than you can say "Yo ho, let's send some email!" Let's delve into the finer details of configuration below, shall we?

<a name="configuration"></a>
Configuration: Ahoy there, landlubbers! To get started, ye'll need to set sail on your chosen mail driver. Here be a quick guide for configuring each one:

1. SMTP: Set anchor at `config/mail.php` and fill in the necessary details, such as hostname, username, password, port, encryption, etc.
2. Mailgun: Set sail with the [Mailgun API key](https://www.mailgun.com/lp/api-key) and configure it in `config/services.php`.
3. Postmark: Arrr, prepare your API key and follow the steps outlined in [Postmark's docs](https://postmarkapp.com/integrations/laravel).
4. Resend: Ahoy there, mateys! Follow the trail of clues laid out in [Resend's docs](https://resend.com/docs/laravel) to set up your account.
5. Amazon SES: Prepare for a jolly adventure by following the guide provided by [Amazon Web Services](https://aws.amazon.com/ses/).
6. sendmail: Keep it simple, mateys! Just configure your default mail settings in `config/mail.php`.

 Ahoy there, aspiring email maestros! Laravel's not just a magical kingdom of code, it's also a symphony of sent messages 🎹📧. And like any good conductor worth their salt, you'll need to tune your instruments (email services) to hit the right notes.

Fear not, for this isn't Dvorak's New World Symphony; it's a simpler sonata – your application's `config/mail.php` configuration file 🎵. Here is where you'll compose the harmony of your email services, each with its own unique flair and transport method, allowing your app to switch between email providers like a chameleon changing colors in a disco ball 🌈💫

Imagine this: your application's as suave as Sinatra, sending transactional emails with Postmark, while keeping it classy with Amazon SES for bulk mails. Quite the social butterfly, isn't it? 🕺️👗

Now, within this symphony of settings, you'll find a `mail` configuration array, which acts as the conductor's baton, guiding each mailer in its unique dance. This orchestra includes a sample setup for each major driver/transport supported by Laravel. The default value within this array determines which mailer takes center stage when your application needs to send an email message – rather like Pavarotti stepping up to the mic 🎤.

<a name="driver-prerequisites"></a>
But before we go any further, ensure you've got all the prerequisites for each mailer installed and set up – it wouldn't be very rock 'n' roll if your emails never reached their destinations now, would it? 🎸💔

 Alrighty, let's dive right in! 🤿

### Mail Delivery Dashboards: The Cream of the Phrase-book

Who needs a snail mailman when you've got these high-tech, super-speedy, and wickedly smart delivery dudes? 🚀 We're talkin' about our API-based champs like Mailgun, Postmark, and Resend! 🥇

These aren't your grandma's postal services. No stamps required, no papercuts, and best of all: no waiting in line at the post office. (Phew!) When it comes to emailin' stuff via SMTP servers, they're just too last century. So whenever you can, give 'em a whirl! 🎯

<a name="mailgun-driver"></a>

### Mailgun: The Email Juggernaut with a Heart (of Gold) ❤️💔

Ah, Mailgun! Our favorite postman with an extra dose of wit and charm. This guy's got the power to make your inbox sing with joy, all while keeping spam-bots at bay. (No more "Enlarge your manhood" emails, we promise!) 🐶💸

To kick things off with Mailgun, just follow these simple steps:

1. Get an API key: Visit [Mailgun's website](https://www.mailgun.com/), sign up if you haven't already, and grab that shiny new API key!
2. Add the API key to your .env file: In Laravel, you'll find a little magical file called `.env` hidden deep within your project folder. Open it up and add this line:
```makefile
MAIL_DRIVER=mailgun
MAILGUN_API_KEY=YourMailgunAPIKeyHere
```
3. Enjoy the sweet sound of success: Fire up your terminal, run `composer install`, and you're all set! 🎉

Now sit back, relax, and let Mailgun do the heavy lifting for you. (And if you ever need to send an email to a million people, just remember: it's not stalking... it's outreach!) 🌐👋

And that's a wrap! Now go forth, and conquer your inbox with laughter and style! 🚀💖✨

 Ahoy there, matey! Let's sail through the sea of emails with the Mailgun Driver! First things first, you gotta grab Symfony's Mailgun Mailer transport using Composer - just think of it as inviting Captain Mailgun to join your pirate crew.

```shell
composer require symfony/mailgun-mailer symfony/http-client
```

Next up, we need to make a couple of tweaks in your ship's (app) configuration file, `config/mail.php`. First, set the captain of our mailing fleet to 'mailgun':

```php
'default' => env('MAIL_MAILER', 'mailgun'),
```

Then, add a new crew member (configuration array) to your lineup of mailers:

```php
'mailgun' => [
    'transport' => 'mailgun',
],
```

Now that our default mailer is all set up, let's introduce the officers (options) of our Mailgun fleet in `config/services.php`:

```php
'mailgun' => [
    'domain' => env('MAILGUN_DOMAIN'),
    'secret' => env('MAILGUN_SECRET'),
    'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    'scheme' => 'https',
],
```

If you fancy sailing with the Mailgun crew in a different region, feel free to set your region's endpoint in the `services` configuration file:

```php
'mailgun' => [
    'domain' => env('MAILGUN_DOMAIN'),
    'secret' => env('MAILGUN_SECRET'),
    'endpoint' => env('MAILGUN_ENDPOINT', 'api.eu.mailgun.net'),
    'scheme' => 'https',
],
```

And off we go, sailing into the sunset of successful email deliveries! Arrrr! 🏴‍☠️🌅

 Alrighty then! Let's get this Laravel party started with the Postmark Driver, shall we? 🤘

First things first, let's grab the Symfony Postmark Mailer transport like it's a long lost friend at a reunion. Use your trusty Composer to summon it:

```shell
composer require symphony/postmark-mailer symfony/http-client
```

Next, head over to your application's `config/mail.php` configuration file and set the `default` option to `postmark`. You're now officially ready to send emails like a pro (or at least try)! But wait, there's more! 🎉 Make sure your `config/services.php` file has these options:

```php
'postmark' => [
    'key' => env('POSTMARK_API_KEY'),
],
```

Now, if you fancy sending emails from different Postmark message streams, you can add the `message_stream_id` configuration option to your mailer's configuration array. You can find this array in the `config/mail.php` file:

```php
'postmark' => [
    'transport' => 'postmark',
    'message_stream_id' => env('POSTMARK_MESSAGE_STREAM_ID'),
],
```

And there you have it! You can now set up multiple Postmark mailers with different message streams, just like a Laravel Jedi mastering the Force. 🤓

Oh, and if you want to add some extra zing to your mailer's configuration, you can also set up timeout options in the `client` section:

```php
'postmark' => [
    'transport' => 'postmark',
    'message_stream_id' => env('POSTMARK_MESSAGE_STREAM_ID'),
    // 'client' => [
    //     'timeout' => 5,
    // ],
],
```

Happy coding! 🥳

 Alrighty, let's get this email party started with a bang (or a ding, if you will)!

To set up the fabulous Resend driver for your Laravel app, first things first: you gotta invite Resend to the dance floor. How? By throwing a Composer shindig and asking them to join via the command line:

```shell
composer require resend/resend-php
```

Once they've RSVPed "Yes, please," it's time for some quality configuration time. Open up your application's `config/mail.php` file and set the `default` option to `resend`. This is like putting on the party hat and telling everyone that Resend is now the life of the email party!

Afterward, ensure your `config/services.php` configuration file has been invited to the fun as well, with the following options:

```php
'resend' => [
    'key' => env('RESEND_API_KEY'),
],
```

This is like whispering in their ear the secret password they need to unlock the champagne room – aka your app's API key.

And voilà! You've now got Resend ready to send out those invitations, reminders, or any other email you can dream up (just don't forget the unsubscribe link!) 🎉📧🥳

Now, let's get this email extravaganza started!

 Alrighty, let's get this email party started with the Amazon SES driver! But first, you need to ensure your Laravel rig is equipped with the AWS SDK for PHP – think of it like upgrading from a VHS player to a Blu-ray, because that's how cool it is. You can grab this software package using Composer, your trusty sidekick in code management:

```shell
composer require aws/aws-sdk-php
```

Next up, head on over to your `config/mail.php` file and set the `default` option to `ses`. It's like setting your favorite pizza as the default in a pizzeria – who wouldn't want that? Make sure your `config/services.php` file contains these options too:

```php
'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
],
```

Now, if you're using AWS temporary credentials via a session token, give your application's SES configuration a little extra love:

```php
'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'token' => env('AWS_SESSION_TOKEN'),
],
```

To make use of SES's subscription management features, simply include the `X-Ses-List-Management-Options` header in the array returned by the [headers](#headers) method of a mail message:

```php
/**
 * Get the message headers.
 */
public function headers(): Headers
{
    return new Headers(
        text: [
            'X-Ses-List-Management-Options' => 'contactListName=MyContactList;topicName=MyTopic',
        ],
    );
}
```

Want to define some additional options for Laravel to pass to the AWS SDK's `SendEmail` method when sending an email? You can do that by defining an `options` array within your `ses` configuration:

```php
'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'options' => [
        'ConfigurationSetName' => 'MyConfigurationSet',
        'EmailTags' => [
            ['Name' => 'foo', 'Value' => 'bar'],
        ],
    ],
],
```

<a name="failover-configuration"></a>
And don't forget about failover configuration! You can set up an alternative SES driver, like a backup catcher for your emails. Here's how to do it:

```php
return [
    // Default SES Driver...
    'default' => env('MAIL_DRIVER', 'ses'),

    // ...but if something goes wrong with SES, try the other driver, like SPAMSMS or SMTP_FARTING_PIGEON.
    'fallback' => env('MAIL_FALLBACK', null),
];
```

And voila! You're all set to send emails using the Amazon SES driver in your Laravel app. Just remember, with great power comes great responsibility – so use these powers for good, not evil!

 ### Mail Mayhem Aversion System (MMAS)

Let's face it, even the friendliest email service can have its off days. You don't want your app to be that friendless guy at the party who can only talk to his cat. That's where MMAS comes in! This system lets you define backup mail delivery configurations like a well-oiled email machine gun, ready to fire emails when your primary driver goes down for the count.

To set this up, create an email-wielding warrior within your application's `mail` configuration file, armed with the mighty `failover` transport. Your application's `failover` mailer array should be a list of `mailers`, each one in the order they should be deployed for delivery:

```php
'mailers' => [
    'failover_warrior' => [
        'transport' => 'failover',
        'mailers' => [
            'postmark',
            'mailgun',
            'sendmail',
        ],
        'time_to_regroup' => 60, // In seconds, just like the superheroes need to catch their breath
    ],

    // ...
],
```

Once you've equipped your MMAS soldier, don't forget to promote him as your default mailer in your application's `.env` file. This makes sure he steps into action whenever the primary driver gets knocked out:

```ini
MAIL_MAILER=failover_warrior
```

And voila! Your app can now send emails like a well-coordinated email relay race, ensuring your messages always reach their destinations. If one service falls, another will rise to take its place!

 ### Round Robin Mail Delivery: The Party Line for Your Emails! 🎉🎈

Are you tired of your mail delivery feeling like a one-man (or woman!) show? Let's spice things up with the `roundrobin` transport, the life of the party for your email workload!

To get the ball rolling, create a dashing mailer within your application's super-sexy `mail` configuration file. This fella will use the `roundrobin` transport to charm a multitude of suitors (or mailers). Here's a tantalizing example:

```php
'mailers' => [
    'disco_dancer' => [ // Sexy name, right?
        'transport' => 'roundrobin',
        'mailers' => [
            'ses',
            'postmark',
        ],
        'party_pause' => 60, // Yes, we can party hard but even we need a break sometimes!
    ],

    // ... More suitors to join the dance floor!
],
```

Now that our round robin mailer has been crafted, let's introduce it to the rest of the application as the default mailer. We do this by specifying its name as the value of the `default` configuration key within your application's `mail` configuration file:

```php
'default' => env('MAIL_MAILER', 'disco_dancer'), // I can already hear the music! 🎶
```

The `roundrobin` transport will now select a random dance partner from our list of invited guests (or mailers) and then switch to the next available hottie for each subsequent email. This is a major upgrade from the `failover` transport, which only helps achieve *[high availability](https://en.wikipedia.org/wiki/High_availability)* - we're all about providing *[load balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing))* here!

<a name="generating-mailables"></a>

Now, let's get this party started! 🥳✨

 Ahoy there, Laravel sea dogs! 🦸‍♂️🌴 Let's dive into the world of digital postage stamps - I mean, mailable classes! 🎉

When you're sailing the high seas of your Laravel app, each email sent by your ship (or should I say, application) is represented as a swashbuckling "mailable" class. You can find these pirate treasures in the `app/Mail` directory - but don't fret if ye cannae see 'em at first; they'll be summoned forth when you create yer first mailable class with the mighty `make:mail` Artisan spell! 🎩

```shell
php artisan make:mail OrderShipped
```

Arrr, that be like casting a magical incantation on ye Laravel codebase, transforming it into an email-sending beast. Now go forth and conquer those inboxes! 🏴‍☠️💌

 Ahoy there, Matey! Steer clear of Scuttlebutt Bay and dive right into the heart of Laravel's Mailables! Once you've summoned a mailable like a pirate summons his trusty parrot, it's time to hoist the sails and explore its booty (I mean, contents).

Configuring this swashbuckling class is like navigating a treasure map with several X marks the spot! Methods such as `envelope`, `content`, and `attachments` serve as your compass.

The `envelope` method, my dear, is akin to donning a tricorn hat and declaring your intentions at the town square – it returns an `Illuminate\Mail\Mailables\Envelope` object that sets the subject (the treasure you're after) and, on occasion, the recipients of your message (your crew).

The `content` method is like firing up the forge to craft a fine broadside. It returns an `Illuminate\Mail\Mailables\Content` object, which defines the Blade template (your pirate parchment) that will be used to compose the message content – arrr matey!

<a name="configuring-the-sender"></a>

Now, let's talk about setting the sender. It's like finding old Captain Blackbeard's missing eyepatch – essential but sometimes tricky! In Laravel, you can set your sender with the `from` method on the envelope object:

```php
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

// In your controller or wherever you need it
$emailData = ['greeting' => 'Ahoy there!'];
Mail::to('receiver@example.com')->send(new WelcomeMail($emailData));
```

In this example, we're sending a WelcomeMail to Captain Rackham, and the `WelcomeMail` class is our pirate parchment (Blade template). The sender is determined by the `from` method on the envelope object – don't forget to patch that eyepatch properly! 😉

 ### Setting Up the Postmaster, Like a Boss! 🚀💌

Hey there, Captain Coder! 🤓 Before we dive into this epic journey together, let's get our email system shipshape and ready to sail! Strap on your coding helmets, grab a virtual steering wheel, and prepare for some fun times ahead. 🎉

<a name="using-the-envelope"></a>

#### Using the Envelope (Enveloping) 📧🎁

Ahoy! The first thing we need to do is get our email messages ready for delivery by wrapping them in an "Envelope". This magical process, called "enveloping," takes care of all the grunt work behind the scenes, like setting headers and ensuring your emails arrive at their intended destination without getting lost in cyberspace.

To envelop your email messages, you'll want to use Laravel's `Mail` facade. This bad boy acts as a dispatcher that takes care of everything for us, from crafting the message, adding recipients, and sending it off on its merry way. 🌠

Here's how you can send an email with the help of our trusty `Mail` facade:

```php
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeEmail;

// ... in your controller method

Mail::to($user)
    ->send(new WelcomeEmail);
```

In this example, we're sending a `WelcomeEmail` (which you'll need to create first, of course!) to the `$user`. Laravel will handle the rest for us! 🤖

Now that your email system is all set up and ready to go, it's time to raise the sails and start sending emails like a pro! 🌊🚀 Keep on coding, and remember: in this world of endless seas and endless code, you are the captain of your own ship! 🏴‍☠️⚓️

 Alright, let's dive into the world of emailing, where every message starts its journey from a humble sender. That's right, we're talking about who's going to be the proud face on your emails - the digital version of the postman! Now, there are two ways to set this up. First off, you can put the "from" address on your message's envelope like a fancy party invitation:

```php
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Envelope;

/**
 * Get the message envelope (it's like getting dressed for a date).
 */
public function envelope(): Envelope
{
    return new Envelope(
        // Jeffrey's excited to meet you, so he's sending this email
        from: new Address('jeffrey@example.com', 'Jeffrey Way'),
        subject: 'Order Shipped (and it looks amazing!)',
    );
}
```

Should you feel like being extra chatty, you can also include a `replyTo` address to make sure people know who to hassle with their follow-up questions:

```php
return new Envelope(
    // Just Jeffrey here, but if you need Taylor, he's over there.
    from: new Address('jeffrey@example.com', 'Jeffrey Way'),
    replyTo: [
        new Address('taylor@example.com', 'Taylor Otwell - the genius behind this')
    ],
    subject: 'Order Shipped (and it looks amazing!)',
);
```

<a name="using-a-global-from-address"></a>If you find yourself sending emails like a broken record, setting up a global "from" address can save you some repetitive strain injury. Just follow the instructions in our [Global From Address](#using-a-global-from-address) section to get started!

 Alright, let's lighten up this Laravel email game a smidge! 😊

#### Sending Emails like it's 2004: The Global `from` Address Edition

Got an email address that your app's been flirting with since day one? Well, ain't nobody got time to add it to every single mailable class we generate! Instead, let's make things a little easier on ourselves and set up a global "from" address in the most official document of them all - the `config/mail.php` configuration file:

```php
'from' => [
    'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'), 📧💌 (Yep, that's your email address!)
    'name' => env('MAIL_FROM_NAME', 'Example'), 👋 (And this is what you'd like to be known as)
],
```

Don't worry if things get hectic in the inbox and you need to change your email alias or secret identity; just update the `.env` file, and voila! Your app's new persona will be reflected everywhere. 🤪

Oh, and what would a superhero (errr...app) be without a secret hideout? You can also define a global "reply_to" address in your `config/mail.php` configuration file:

```php
'reply_to' => [
    'address' => 'example@example.com', 📧 (Your covert email address)
    'name' => 'App Name', 💫 (The secret name of your app)
],
```

Now, when recipients hit "Reply," they'll be replying to your top-secret hideout instead of the public email address. Just don't forget to update the alias if you move! 😅

<a name="configuring-the-view"></a>
Moving on to configuring the view, we've got something fun brewing over here... But let's save that for another time and place, shall we? 🍻🚀

 Ahoy there, code adventurers!

In the mystical land of Laravel Mailable classes, you'll find a magical method called `content`. It's kinda like conjuring up the perfect email potion, if emails were potions (and they are, right?). In this method, you can specify the `view` - or, as we like to call it, the enchanted scroll that holds your email's secrets.

Since our world is heavily influenced by the Blade templating engine (we're big fans!), you get to unleash its full power and convenience when crafting the HTML for your spellbinding emails:

```php
/**
 * Brew the email elixir.
 */
public function content(): Content
{
    return new Content(
        view: 'spells/orders_shiplified.blade.php', // You could call it anything you like, really!
    );
}
```

[!NOTE]
Just a heads up - you might want to create a secret lair for all your email templates, say `resources/views/mail`. But if you fancy hiding them elsewhere within the `resources/views` directory, we won't stop you. Go forth and explore!

Now that you know how to enchant your emails, may your inbox be filled with nothing but spam-free, well-crafted correspondence! 🔮📧🚀

 Alright, let's dive into the world of plain ol' text emails! If you're hankering to whip up a no-frills version of your email masterpiece, fear not – Laravel's got your back.

To do so, simply declare the text template when creating the message's `Content` definition. Much like the `view` parameter, the `text` parameter should be a nom de plume for your texty email template. So go ahead and create both an HTML and plain-text version of your email masterpiece:

```php
/**
 * Get ready to send some text!
 */
public function content() {
    return new Content(
        viewy_part: 'mail.orders.shipped', // Yeah, we're being casual here
        txt_template: 'mail.orders.shipped-text' // Because plain text is just cooler that way
    );
}
```

Now for a bit of added clarity, you can use `html` as an alias for the `viewy_part`. This can help you keep your email arsenal organized:

```php
return new Content(
    html_or_viewy_part: 'mail.orders.shipped', // Whatever floats your boat
    txt_template: 'mail.orders.shipped-text' // Because who needs images, right?
);
```

And there you have it! Now go forth and craft those textual wonders with ease! 🎉📧💌

 Ahoy there, dear coder! Buckle up for a delightful dive into the realm of Laravel View Data, where magic happens in plain sight! 🎩✨

#### By Public Properties 🏹

If you're feeling extra jovial and want to share some love with your views, just pass data through public properties like a friendly note in a bottle. 📝🌊

```php
// App\Http\Controllers\ExampleController.php
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    public $exampleData = 'Hello, View!'; // You can store any data here.

    // ... Other methods here ...
}
```

In your view, simply retrieve the data using the friendly property name:

```php
// example.blade.php
<h1>{{ $exampleController->exampleData }}</h1>
```

And voila! You've shared your love with the world (or at least your view). ❤️🌐

<a name="via-passing-data-to-the-view"></a>
#### By Passing Data to the View 💌

Now, if you fancy dressing up for the occasion and delivering a personalized message, consider sending data through the `with()` method. It's like asking a pigeon to deliver a letter.

```php
// App\Http\Controllers\ExampleController.php
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    public function example()
    {
        return view('example', ['exampleData' => 'Hello, View!']); // 🚫 Not a pigeon yet, but close enough!
    }
}
```

In your view, retrieve the data like you would a long-lost letter:

```php
// example.blade.php
<h1>{{ $exampleData }}</h1>
```

And just like that, a heartfelt message to your view! 💌❤️

Now go forth and share the love in Laravel Land! 🌈✨🎈

 Alrighty then, let's chat about how to feed some delicious data to your view for the email's HTML feast! There are two smashing ways you can make your data accessible to your view. First off, any public property defined on your mailable class will magically appear in the buffet, so you can pass data into your mailable class's constructor and park it on those swanky public properties:

```php
<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The order in question - don't let it escape!
     */
    public $order;

    /**
     * Create a new message instance.
     */
    public function __construct(Order $order)
    {
        // Setting the order as our captive audience
        $this->order = $order;
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.orders.shipped',
        );
    }
}
```

Once your data is securely tucked away in a public property, it'll pop up like magic in your view, so you can grab it just like you'd snatch any other tasty morsel in your Blade templates:

```blade
<div>
    Price: {{ $order->price }}
</div>
```

Now, wasn't that a tasty tutorial? Bon appétit! 🍔🎉💪🏼

 Ahoy there! Sailors of the Laravel sea, buckle up as we embark on a jolly journey through the world of customizing email data! 🐳

#### Set sail with the `with` Parameter:


If you fancy spicing up your pirate-themed emails with some fine-tuned details before they swashbuckle their way to the template, you can manually hoist the anchor and row your data to the view via the friendly `Content` definition's `with` parameter. Usually, ye will still shanghai data via the mailable class's constructor; but remember to keep it locked up tight in either `protected` or `private` properties, so it doesn't leap overboard and cause a shipwreck for our humble template:

```php
<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Constructor - Yarr, set your course!
     */
    public function __construct(protected $order) {}

    /**
     * Map out the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.orders.shipped',
            with: [
                'orderName' => $this->order->name,
                'orderPrice' => $this->order->price,
            ],
        );
    }
}
```

Once your swag has been rowed ashore via the `with` parameter, it will automatically walk the plank and appear on deck, ready to be plundered like any other data in yer Blade templates:

```blade
<div>
    Price: {{ $orderPrice }}
</div>
```

Fair winds and following seas! 🌬️⚓️

 Alright, let's get this email party started! If you want to make your messages more than just words floating around in the ether, you can attach some good old fashioned files. Here's how you do it in Laravel, with a sprinkle of humor and a dash of technical accuracy.

First things first, you'll need to call upon the mighty `Attachment` class, which is like the ultimate best man for your email's attachments. To add an attachment, simply provide a file path to its `fromPath` method:

```php
use Illuminate\Mail\Mailables\Attachment;

/**
 * Get the attachments for the message.
 *
 * @return array<int, \Illuminate\Mail\Mailables\Attachment>
 */
public function attachments(): array
{
    return [
        Attachment::fromPath(__PATH__.'/to/file.ext'), // Replace __PATH__ with your actual path and .ext with the file extension
    ];
}
```

Now, if you want to give your attachment a cooler name than its boring old filename or specify its MIME type, you can use the `as` and `withMime` methods like so:

```php
/**
 * Get the attachments for the message.
 *
 * @return array<int, \Illuminate\Mail\Mailables\Attachment>
 */
public function attachments(): array
{
    return [
        Attachment::fromPath(__PATH__.'/to/file.ext')
            ->as('Awesome Resume.pdf') // Give your attachment a catchy name
            ->withMime('application/pdf'), // Specify its MIME type for good measure
    ];
}
```

Now, let's say you want to attach a file from Laravel's built-in disk system instead of the filesystem. Fear not! You can do that too:

<a name="attaching-files-from-disk"></a>

```php
/**
 * Get the attachments for the message.
 *
 * @return array<int, \Illuminate\Mail\Mailables\Attachment>
 */
public function attachments(): array
{
    return [
        Attachment::fromDisk('disks.disk_name')->getPath(__FILE__), // Replace 'disks.disk_name' with your disk name and __FILE__ with the path to your file on that disk
    ];
}
```

And there you have it! With these simple steps, you can transform your emails into a veritable treasure trove of files, making them more informative, interesting, and maybe even a little more fun to receive. Happy coding! 🎉🎈🚀

 Alright, buckle up, because we're about to dive into the wild world of file attachment shenanigans in Laravel Land! 🌴🐠

First things first: you've got a file stashed away on one of your trusty filesystem disks. Well, fancy meeting you here, digital document! Now, let's slap this baby onto an email like a feather in a cap (but way more useful). 📤💌

```php
// Oh hey! You've got mail... attachments, that is!
public function getAttachments()
{
    // Here comes the big reveal: unleashing the power of fromStorage!
    return [
        Attachment::fromStorage('/path/to/file')
            // Because who doesn't love a good name change?
            ->as('name.pdf')
            // And don't forget to dress for success with MIME type!
            ->withMime('application/pdf'),
    ];
}
```

But wait, there's more! You can even give your file a fancy new name and a snazzy MIME type if you please:

```php
// Oh look, it's a makeover for our attachment!
public function getAttachments()
{
    // Still using fromStorage, but this time with a little more flair!
    return [
        Attachment::fromStorage('/path/to/file')
            ->as('new-and-improved-name.pdf')
            ->withMime('application/pdf'),
    ];
}
```

Lastly, if you've got multiple disks and are feeling a bit indecisive about which one to use, fear not! The `fromStorageDisk` method is here to save the day:

```php
// Sometimes, it takes a village... or a disk, to choose an attachment.
public function getAttachments()
{
    return [
        Attachment::fromStorageDisk('s3', '/path/to/file')
            ->as('name.pdf')
            ->withMime('application/pdf'),
    ];
}
```

And there you have it! A whistle-stop tour of Laravel's attachment features, minus the dull bits and packed with jokes and puns for your entertainment. Enjoy the journey! 🎉🚀

 Alright, buckle up, data cowboys! Dive into the wild west of emails with Laravel's `fromData` attachment method—the digital equivalent of lassoing a steer and sending it along in your post ride correspondence.

Imagine this scenario: you've just herded a PDF steer (a.k.a generated PDF in memory) and want to saddle it up for your email without letting it run wild on the prairie of your disk. That's where `fromData` comes into play, corralling those raw bytes and attaching them with a friendly name for your recipient to wrangle at their leisure.

Here's a little saloon-style showdown demonstrating its usage:

```php
/**
 * Giddyup the attachments for the message!
 *
 * @return array<int, \Illuminate\Mail\Mailables\Attachment>
 */
public function wrangleAttachments(): array
{
    return [
        Attachment::fromData(fn () => $this->rustleUpThePDF(), 'Report.pdf')
            ->saddleWithMime('application/pdf'),
    ];
}

private function rustleUpThePDF(): string
{
    // Your PDF generation code here, pardner!
}
```

Don't forget to keep your saddles mended and your lassos twirled—happy trailblazing with Laravel!

 ### Picture This (Without the Hassle)! 📸

Let's face it, slipping a picture into an email can be as awkward as trying to fit a square peg into a round hole. But fear not, dear Laravel developer! We've got your back with a nifty way to attach images that would make even a magician blush. Just whip out the `embed` method on the ever-versatile `$message` variable within your email template. It's like having your own personal assistant who's always ready to grab the digital photo frame when you need it!

```blade
<body>
    Here's a peek at our latest cat meme:

    <img src="{{ $message->embed($pathToImage) }}">
</body>
```

🚨📣 WARNING CARD! 📣🚨
Please note that the ever-versatile `$message` variable is a bit camera-shy in plain-text message templates, as they don't exactly have room for digital photo frames. So, in those cases, you'll just have to go old-school and describe the meme in words instead! 😂

[Inline Attachments](#inline-attachments) - Back to the top! 🔝

 Ahoy there, coding matey! Sail with me as we dive into the art of embedding raw data attachments in Laravel's pirate-tastic email templates!

First off, ye may have a stash of raw image treasure, in the form of a data string, that ye wish to display like a jolly roger within your email template. To accomplish this task, you must summon the mighty `embedData` method, casting it upon the trusty `$message` shipmate.

But beware, matey! The `embedData` method demands a proper file name as a token of its power:

```blade
<body>
    Arr matey, here be an image from raw data treasure:

    <img src="{{ $message->embedData($data, 'Shiver-me-timbers-image.jpg') }}">
</body>
```

This way, when ye set sail with Laravel's email system, your precious treasure will be safely stowed and displayed for all recipients to see! Yarrrr!

 ### Snazzy Attach-a-Ma-Jigs! 📩🎉

Alrighty, chum! While chucking files into emails using straightforward string paths is all fine and dandy, things get a tad more sophisticated when your application's attachable goodies are classy characters. Take our friendly `Photo` model for instance—a spiffy snap that gets slapped onto an email. Why not just pass this little gem directly to the `attach` method? Enter stage left: Attachable Objects! 🌈

To get the ball rolling, make your attach-able object implement the `Illuminate\Contracts\Mail\Attachable` interface. This fancy schmancy contract demands that your class define a `toMailAttachment` method that spits out an `Illuminate\Mail\Attachment` instance:

```php
<?php

namespace App\Models;

use Illuminate\Contracts\Mail\Attachable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Mail\Attachment;

class Photo extends Model implements Attachable
{
    /**
     * Transform into a delish mail attachment.
     */
    public function toMailAttachment(): Attachment
    {
        return Attachment::fromPath('/path/to/file');
    }
}
```

Once you've got your snazzy attach-a-ma-jig ready, chuck an instance of it into the `attachments` method while crafting an email:

```php
/**
 * Get the scrumptious attachments for this email.
 *
 * @return array<int, \Illuminate\Mail\Mailables\Attachment>
 */
public function attachments(): array
{
    return [$this->photo];
}
```

Of course, attachment data may reside in the cloud, like on Amazon S3. No worries! Laravel lets you whip up attachment instances from data stored on one of your application's filesystem disks:

```php
// Create an attachment from a file on your default disk...
return Attachment::fromStorage($this->path);

// Create an attachment from a file on a specific disk...
return Attachment::fromStorageDisk('backblaze', $this->path);
```

In case you've got the attachment data already stashed in memory, provide a closure to the `fromData` method. The closure should return the raw data that represents your attach-a-ma-jig:

```php
return Attachment::fromData(fn () => $this->content, 'Photo Name');
```

Lastly, Laravel offers a smorgasbord of methods to customize your attach-a-ma-jigs. Dress them up with the `as` and `withMime` methods to tailor their file name and MIME type:

```php
return Attachment::fromPath('/path/to/file')
    ->as('Photo Name')
    ->withMime('image/jpeg');
```

Happy coding, matey! 🌟🚀

 Alright, let's lighten up this email party a tad! 🎉

### Headers: The Avant-Garde of Emails 🎨

Sometimes, your emails need that extra flair to stand out in the sea of messages, right? Maybe you want to set a custom `Message-Id` like a secret agent's code name, or perhaps you fancy some random text headers just because. Well, we've got your back! 🦸‍♂️

To add these cool extras to your outgoing email, simply define a `headers` method on your mailable. This method should return an elegant `Illuminate\Mail\Mailables\Headers` instance, which is not only well-dressed but also quite accommodating! It accepts three invitations: `messageId`, `references`, and `text`. But remember, it's up to you to decide who to invite to your email soirée:

```php
use Illuminate\Mail\Mailables\Headers;

/**
 * Get the dress code for this email event.
 */
public function headers(): Headers
{
    return new Headers(
        messageId: 'custom-message-id@example.com', 🕵️‍♂️ Secret agent style!
        references: ['previous-message@example.com'], 📜 A bit of history, if you will
        text: [
            'X-Custom-Header' => 'Custom Value', 🎉 Let's add some sparkle to this email!
        ],
    );
}
```

<a name="tags-and-metadata"></a>
Now, aren't you ready to send out emails that will make your inbox the talk of the town? 🌆 Just remember: it's all about the right combination of style and substance! 🥂🍾

 ### Email Tag-Team and Meta-Data Bonanza! 🎉📫

Ready to give your emails a little extra flair, Laravel style? We're talking tags and metadata, the unsung heroes of your third-party email provider squad (think Mailgun, Postmark, and even Amazon SES). These dynamic duo can help you group, track, and generally keep tabs on the missives sent by your application.

To get this party started, whip out those PHP skills and dive into the world of `Envelope` definitions:

```php
Use the Force, Luke... or rather, Illuminate\Mail\Mailables\Envelope in this case!

/**
 * Get the Jedi (or Envelope) for your message.
 *
 * @return \Illuminate\Mail\Mailables\Envelope
 */
public function getJedi() {
    return new Envelope(
        subject: 'May the Shipped Order be with you!',
        tags: ['Kessel Run'], // Just kidding, it's 'shipment' in this case
        metadata: [
            'order_id' => $this->order->id,
        ],
    );
}
```

Now, if your application is as cool as a cucumber in the desert (Mailgun-powered), don't hesitate to check out their documentation on [tags](https://documentation.mailgun.com/docs/mailgun/user-manual/tracking-messages/#tags) and [metadata](https://documentation.mailgun.com/docs/mailgun/user-manual/sending-messages/#attaching-metadata-to-messages). If you're more of a Postmark kind of app, well then, consult their documentation for more info on their support for [tags](https://postmarkapp.com/blog/tags-support-for-smtp) and [metadata](https://postmarkapp.com/support/article/1125-custom-metadata-faq).

Last but not least, if you're using Amazon SES to send emails, then it's time to attach some [SES "tags"](https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html) like a boss using the `metadata` method.

And there you have it! With just a few lines of code, your emails will be organized and tracked, making them feel like well-crafted, starship-bound communications instead of run-of-the-mill messages. Happy coding, future email tag-team champions! 🚀🚀🚀

 ### Unleashing your Inner Mail Artist with Laravel! 🎨📧

Ever dreamt of crafting your own masterpiece before hitting 'send' on an email? Well, buckle up, because Laravel's got you covered! 🎉

Behind the scenes, Laravel's email magic is powered by Symfony Mailer - think Picasso with a postbox. But instead of painting abstract expressions, we're customizing emails to perfection! 🎨📧

Want to get your hands dirty? Register some callbacks that will be summoned with the magical Symfony Message instance before it embarks on its journey to inbox glory! This gives you a chance to remix, rework, and even reimagine your message before the big launch. 🎧🎤

Here's how to pull off this symphony of customization:

1️⃣ First things first, import the necessary tools:
```php
use Illuminate\Mail\Mailables\Envelope;
use Symfony\Component\Mime\Email;
```
2️⃣ Now, create a function that brews up an Envelope:
```php
/**
 * Serve up the message envelope.
 */
public function envelope(): Envelope
{
    return new Envelope(
        subject: 'Order Shipped! (Yes, we're shouting!)', // Add some drama to your emails
        using: [
            function (Email $message) {
                // Time to work your magic here!
            },
        ]
    );
}
```
In this function, you can now define a `using` parameter on the Envelope definition, which is where you can hook up your custom callbacks. Once these callbacks are summoned, it's time for you to flex your creative muscles and customize that Symfony Message like never before! 🎨📧🚀

 ### 🌟 Markdown's Magical Mail Messages! 🎮

Gear up, coders! It's time to unleash the power of pre-fabulous templates and components from our star mail notifications ✨ in your mailables with none other than Markdown Magic Messages! Because your messages are in Markdown, Laravel does a spellbinding job turning them into stunning, mobile-friendly HTML templates – all while crafting a plain text sibling automatically.

<a name="generating-markdown-mailables"></a>
### 🧙‍♂️ Brewing Your Own Magic Potion

Ready to cast your own Markdown enchantments? Follow these simple steps:

1. **Create a new mailable:** Use Artisan to conjure up a new mailable with the `make:mail` command, followed by the name you'd like to give it. E.g., `make:mail WelcomeMessage`.

2. **Compose your message:** Write your masterpiece in the newly created file using Markdown format – bold, italics, links, and even lists! Your inner geek will be thrilled!

3. **Render with a wave of the wand:** In the `build` method of your mailable class, add the view name that contains your HTML template, then call the `with` method to pass any necessary variables. Finally, in the `toMail` method, use the `markdown` function to render your message as both HTML and plain text.

4. **Fire away:** Dispatch your new creation using the `send` method when you're ready to send it off into the email ether! Your recipients will be dazzled by your enchanted message 🤩!

 ### Unleashing the Power of Markdown in Your Emails! 📧🚀

Ready to supercharge your emails with the magic of Markdown? Buckle up, because we're about to embark on an exciting journey through the wonders of Laravel's Artisan command line! 🎉

First things first, let's craft a mailable wrapped in a delightful Markdown template. To do this, you need to summon the almighty `make:mail` Artisan command, but with a secret sauce — the `--markdown` option. Here's how:

```shell
php artisan make:mail OrderShipped --markdown=mail.orders.shipped
```

Just imagine, it's like conjuring up a magical potion, except instead of bubbling cauldrons and pointy hats, there are servers, code, and *ahem*... magic! 🧙‍♂️

Now that your new mailable is born, let's dress it up with some stylish Markdown threads. When defining the content within its `content` method, remember to trade the usual `view` parameter for the hip and trendy `markdown` parameter:

```php
use Illuminate\Mail\Mailables\Content;

/**
 * Get the message content definition.
 */
public function content(): Content
{
    return new Content(
        markdown: 'mail.orders.shipped', 📜✨
        with: [
            'url' => $this->orderUrl,
        ],
    );
}
```

And voila! Your mailable is now ready to strut its stuff in the world of emails, looking as chic and sophisticated as ever. 💼🎉

Now that you know how to generate Markdown mailables like a pro, your emails are sure to stand out in the inbox jungle. So go forth and conquer the email world! 🚀🎉🚀

 Oh, hello there! 😃 Fancy composing an email that doesn't make your recipient want to hit the "delete" button faster than Usain Bolt sprinting through a forest of bored snoozers? 🎉 Well buckle up, buttercup! Laravel's got you covered with its Markdown mailables.

These beauties are like the superheroes of emails - combining the power of Blade components and Markdown syntax to make creating emails as easy as pie (and a whole lot more delicious than most emails). 🥧🍰

```blade
<x-mail::message>
```

This is your secret weapon! Slide it into your email code like a well-timed punchline, and watch the magic unfold. With this line, you're not just sending an email...you're unleashing a beautifully crafted message that will make your recipients say "Wow, this isn't spam!" 🤯

Now go forth, my friend, and conquer the world of emails with style, grace, and just the right amount of wit. Laravel's Markdown mailables are here to make sure you never have to send another boring email again! 🚀🌟🎉

 Alrighty, Captain Ahab! Your whale of an order has set sail and is now on its way to your dock (or doorstep, if you're not a sea-faring type).

To keep the party going and check up on your leviathan, click this button like Moby himself:

```text
[View Order]($url) 🐳🎣
```

> [!NOTE]
> Remember to avoid using excessive whale-tails when crafting Markdown emails. As per Markdown rules, your indented content may be mistaken for a code block by the parsing kraken.

And just like that, it's as simple as shooting fish in a barrel (or clicking buttons on a computer). Thanks for being a swell customer!

Stay calm and carry on,<br>
The Poseidon Express Team 🚢🌊

P.S. If your order doesn't show up quicker than Jonah, please don't hesitate to give us a squawk. We'll help you faster than you can say "Call me Ishmael."

 Ahoy there, coders! Dive into the dazzling depths of Laravel's Button Component – a swashbuckler in your email adventures! This enchanting component hoists a majestic link button right smack in the center. It's so easy to use that even pirates could manage it!

The Button Component requires but two sea shanties (or arguments, if you prefer), namely `url` and an optional `color`. Our color palette is as vast as the seven seas with choices of `primary`, `success`, and `error` colors. So, set sail for adventure and adorn your emails with as many buttons as ye heart desires:

```blade
<x-mail::button :url="$url" color="success">
Swab the deck and View Order! 🏴‍☠️🚢
</x-mail::button>
```

Now, let's hoist the Jolly Roger, grab a mug of grog, and embark on this Laravel email journey with our trusty Button Component by our side! Arr matey! 🤝🎉

 Ahoy there, code sailors! Gather 'round, for today's lesson is all about the charming, the captivating... the Panel Component! Yes, you heard it right. This isn't your average Joe component. It's a bit of a show-off, but in the best possible way!

This swashbuckling component takes your plain old text and gives it the royal treatment—wrapping it in a panel that's as dashing as a pirate's eye patch! But unlike that eye patch, our panel isn't just for show. Oh no, it serves a noble purpose: to draw attention to that particular paragraph like a lighthouse guiding lost ships through the storm.

So how does one use this magnificent marvel of modern coding? Simple as pie (or as simple as pirate pies can be)! Just drop this into your code:

```blade
<x-mail::panel>
This is the panel content, and it's about to become the belle of the ball!
</x-mail::panel>
```

Just like that, you've transformed a humdrum text block into a dashing panel with a background color as unique as Captain Blackbeard's beard. So hoist the sails, mateys, and let's set sail for success with the Panel Component! Yarr! 🏴‍☠️🌴🚀

 Ahoy there, Captain! Dive into the thrilling world of Laravel's Table Pirate Ship Component! This swashbuckling tool will transform your Markdown tables into shiny HTML treasures, fit for a buccaneer king. Just toss in your Markdown table as the component's content and it'll do all the heavy lifting for ye.

But wait, there's more! The Table Pirate Ship supports column alignment, because a pirate captain worth his salt wouldn't let his crew eat from a crooked table. Align your columns using the classic Markdown table syntax: centering and right-aligning are both available at your disposal.

```blade
<x-mail::table>
| Avast, matey! | Table         | Example       |
|--------------|:-------------:|---------------|
| Column 2     | Centered      | $10           |
| Column 3     | Right-Aligned | $20           |
</x-mail::table>
```

Yarr, you can even customize the components, if ye fancy yerself a more dashing pirate! (But remember to keep the ship seaworthy.)

 ### Unleashing Your Inner Designer with Laravel's Email Makeover! 🎨🚀

Ready to give your emails a fresh new look? Let's make 'em as stylish as our favorite cat videos, shall we? 🐱💅

First things first: Exporting those snazzy Markdown mail components to your very own playground. To do that, simply holler at the Artisan command line (it's a bit of a party animal):

```shell
php artisan vendor:publish --tag=laravel-mail
```

This command will whisk away those Markdown mail components and deposit them into your `resources/views/vendor/mail` directory. Think of it as a magical wardrobe for your emails! 🧛‍♂️✨ The `mail` directory will sprout an `html` and a `text` directory, each bursting with customizable versions of every available component.

Now, here's the fun part: you can tailor these components to your heart's content, or until you've reached maximum cat-gif level! 🌈🐾

<a name="customizing-the-css"></a>
### Dressing Up Your Emails with Custom CSS 🧒🎨

Remember when you used to stay up all night playing with your hair in the mirror? Well, now it's time to do the same... but for emails! To add some sparkle and shine to those components, all you need is a bit of CSS magic.

Simply head over to the `resources/views/vendor/mail` directory, where you can find a file called `subscribable.blade.php`. Open it up like a sardine can, and voilà! You'll find some CSS waiting for you to unleash your inner designer. 🌈🎨

Happy styling! 🎉🚀

 Ahoy there, adventurous coder! 🌴

Once you've exported your swashbuckling components, you'll find a hidden treasure chest in `resources/views/vendor/mail/html/themes`. Within this booty, ye'll discover a delightful trinket named `default.css`. Yarrr, it's time to unleash your inner pirate and customize the CSS! 💺🔍

Make like a monkey and swing through the code, adding your unique flair to this file. When you're done, your styles will magically transform into inline CSS pirate maps within the HTML representations of your swashbuckling Markdown emails. 🏴‍☠️📜

Now, if you fancy designing a brand-new theme for Laravel's Markdown components, just stow away a CSS file in the `html/themes` directory. Give it a catchy name and bury it deep within the treasure chest. After that, update your application's `config/mail.php` configuration file to match the name of your new theme like a pro buccaneer! 🏴‍☠️📝

To customize the theme for an individual mailable, ye can set the `$theme` property of the mailable class to the name of the theme that should be used when sending that mailable. This way, you'll have a unique design for each adventure, ensuring your emails always stand out like a pirate with a parrot on his shoulder! 🦜 🏴‍☠️

Yarr, happy customizing and may your CSS be as smooth as the seven seas! 🌊💅🏻

 ## Unleashing Emails like a Digital Mailman! 📧🔥

Alrighty, grab your digital quill and inkwell (or your keyboard), because we're about to unleash some electronic letters on the interwebs!

To pen a missive, enlist the aid of the `Mail` [facade](/docs/{{version}}/facades). Just like how a postman delivers letters, you can use the `to` method to designate your recipients. The `to` method is versatile and accepts email addresses, user instances, or even a collection of users! If you're passing objects or collections, fear not, for this magical system will automatically pluck their `email` and `name` attributes to address the email correctly. Once you've lined up your recipients, simply dispatch an instance of your mailable class to the `send` method:

```php
<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderShipmentController extends Controller
{
    /**
     * Ship the given order.
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request->order_id);

        // Ship the order...

        Mail::to($request->user())->send(new OrderShipped($order));

        return redirect('/orders');
    }
}
```

You're not just limited to one recipient, you can have a whole mailing party! You can set "to", "cc", and "bcc" recipients by chaining their respective methods together:

```php
Mail::to($request->user())
    ->cc($moreUsers)
    ->bcc($evenMoreUsers)
    ->send(new OrderShipped($order));
```

<a name="looping-over-recipients"></a>

## Group Mailings: The More the Merrier! 🎉🕺️

Now, imagine you have a dozen orders to ship and you want to inform all your customers at once. Instead of sending each one individually, let's loop through them like a digital postman on steroids! Here's how you can do it:

```php
<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class OrderShipmentController extends Controller
{
    /**
     * Ship all orders.
     */
    public function groupShower()
    {
        $orders = Order::all(); // Assuming you have the orders ready

        foreach ($orders as $order) {
            Mail::to($order->user())->send(new OrderShipped($order));
        }

        return "Emails sent like a digital mailman!";
    }
}
```

And that's the scoop on sending mails in Laravel – now go forth and conquer the digital post office! 💌🚀

 Alrighty, let's dive into the world of digital snail mail with Laravel! 🐌📩 You know the drill – you've got a bunch of pals and you want to send them all an invitation to your epic house party (or maybe it's just bills... again). But here's the catch: if you don't handle this right, you could end up with a pile of unwanted emails stacked higher than your laundry mountain.

So, how do we avoid that spam-worthy scenario? Simple – by being mindful and recreating each invitation (or mailable in Laravel terms) for every recipient! 🎉🎁

Here's a friendly example of how to loop through your friends' emails without causing mailbox chaos:

```php
// Set up the guest list
$guests = ['taylor@example.com', 'dries@example.com'];

// For each guest, send them their invitation (mailable)
foreach ($guests as $friend) {
    Mail::to($friend)->send(new OrderShipped($order));
}
```

Now, go forth and party on, without sending the same email a hundred times to the same person! 🎉🎈

Psst... You can also use specific mailers if you want to customize the delivery method of your mails. Just follow [this funky guide](#sending-mail-via-a-specific-mailer) to set it up like a boss! 😎💪

 Alright, let's crack open the ol' Laravel time machine and transport ourselves back to the world of digital postal service! 🚀📫

By golly, you've probably noticed that our trusty Laravel courier usually delivers mail using the default carrier set in your app's `mail` configuration file. But hey, who said we can't switch things up and send a letter with a specific mailer? 💌

```php
Not your regular delivery person anymore! 🤓🚪
Mail::mailer('postmark') // "Postmark"? Like the stamp that didn't know its place!
    ->to($request->user()) // Send it to our user... oh, you want their address too? Alrighty then!
    ->send(new OrderShipped($order)); // And don't forget the contents of your package! 📦
```

Now, if you're feeling fancy and want to queue up those emails for a later time (perhaps when the post office is less busy), just `queue` it like this:

```php
Mail::mailer('postmark')
    ->to($request->user())
    ->queue(new OrderShipped($order)); // "Queue"... it's like saying, "I'll be there for you!" 🎵🌈
```

And that, my friends, is how you send a letter via a specific mailer in Laravel! Remember: variety is the spice of life and your emails should reflect that too! 🎉🥳🍔

 Ahoy there, intrepid Laravel sailor! Are you tired of sending emails directly and risking a soggy inbox? Fear not, for we've got the antidote to your email woes: Queueing Mail!

<a name="queueing-a-mail-message"></a>
Now, before you get all jittery like a freshly caught fish, let's reel in the basics. To queue an email message, you'll be using Laravel's built-in queue system. First, you've gotta set up a queue worker, because who doesn't love a good assembly line?

```php
// Here's how to install it:
composer require concurrency/laravel-queue

// Then, register the queue worker in your config/app.php file:
'providers' => [
    // ...
    Conner\LaravelQueue\QueueServiceProvider::class,
],

'aliases' => [
    // ...
    'Queue' => Conner\LaravelQueue\Facades\Queue::class,
],
```

With that out of the way, let's send an email to the queue! It's as simple as making a sandwich.

```php
// Now, in your controller:
use Illuminate\Support\Facades\Queue;

public function sendMail() {
    Queue::pushOn('mail', function($job) {
        Mail::to('you@example.com')->send(new YourEmailClass);
    });
}
```

And there you have it! You've just queued up a delicious email without risking the wrath of your inbox. But what about handling those emails when they're ripe and ready? Well, fear not, for Laravel has thought of that too. Simply run your queue worker whenever you'd like with this command:

```bash
php artisan queue:work
```

Now go forth, brave Laravel developer, and conquer the seas of email efficiency! And remember, if things get hairy, just take a deep breath, put on some calming music, and imagine you're at a beachside tiki bar sipping a piña colada—it'll all make sense then. Cheers!

 Alrighty then! Let's talk about sending those email messages without making your application feel like a turtle in a speed race. With Laravel, we're not just talking about sending emails, we're talking about sending them with a suave, sophisticated elegance that would make James Bond proud!

Now, when you've got an email to send and you don't want it to slow down your app faster than a snail on roller skates, it's time to queue it up for the background. And Laravel makes this as easy as a Sunday morning with its fancy built-in unified queue API (try saying that three times fast!).

To get started, you just need to use the `queue` method on the `Mail` facade after you've specified your message's lucky recipients:

```php
$recipient = $request->user();
$ccList = $moreUsers;
$bccList = $evenMoreUsers;

// Now, let's get this party started!
Mail::to($recipient)
    ->cc($ccList)
    ->bcc($bccList)
    ->queue(new OrderShipped($order));
```

Now, sit back and relax while Laravel takes care of pushing a job onto the queue, ensuring your message is sent in the background. But remember, to use this feature, you'll need to [configure your queues](/docs/{{version}}/queues) first. Easy-peasy!

<a name="delayed-message-queueing"></a>
And for all those times when you want to send an email, but not right now, there's always the option of delayed message queueing. Because who doesn't love a good surprise in their inbox? Stay tuned for more Laravel fun! 🥳🚀

 Ahoy there, code pirates! Let's dive into the thrilling world of delayed message queuing! Ever been in a situation where you wanted to send an email, but didn't want it to disturb Captain Hook immediately? Well, we've got just the trick for you!

Introducing the `later` method, your new best friend when it comes to time-traveling emails. This magical function accepts a `DateTime` instance as its first argument, which is basically like telling it "Hey, send this email at exactly this point in time!"

```php
Mail::to($request->user())
    ->cc($moreUsers)
    ->bcc($evenMoreUsers)
    ->later(now()->addMinutes(10), new OrderShipped($order));
```

And just like that, your email will sail through the server's ocean at the precise moment you specify! So, whether you want to give Hook a heads-up about his lost treasure or remind Long John Silver about his dinner reservations, the `later` method has got your back. Happy coding, mateys! 😜

 Alrighty, let's dive into the art of queue wrangling in Laravel Land! 🤓

Since our trusty `make:mail` command churns out all mailable classes wrapped up tight like a chimichanga in the `Illuminate\Bus\Queueable` trait, you can now whip out those fancy `onQueue` and `onConnection` methods on any mailable class instance! 🎩✨

```php
$message = (new OrderShipped($order))
    ->deckedOutOn('sqs', 'emails'); // We've given it a swanky name for you, ya know?

Mail::to($request->user())
    ->cc($moreUsers)
    ->bcc($evenMoreUsers)
    ->stashInTheQueue($message); // Because we all love some good old queue management!
```

Don't worry, this ain't your grandma's queueing system. This one can handle a whole lot more than just groceries and knitting patterns! 🛍️🧶💪

Want to queue by default? Just take a gander at the "Queueing by Default" section in our fine documentation. (Ahem, it's that link you see right there.) 🤫

Now, go forth and conquer those queues like a true Laravel maestro! 🎹🚀🎉

 Ah, the magical world of Laravel! Where mails don't just float through the ether like a feather on a breezy day, but are as reliable and robust as a well-fed gremlin. 🦍

If you've got yourself some spiffy `mailable` classes that you just can't wait to send off into the digital abyss, but want them to be as dependable as your trusty sidekick, you can sprinkle some `ShouldQueue` stardust on 'em. 🌟

```php
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderShipped extends Mailable implements ShouldQueue
{
    // ...
}
```

Now, when you call the `send` method to dispatch your mailable on a mission of a lifetime, fear not! It'll still be queued, because it has officially joined the Avengers - or in Laravel terms, it implements the contract. 💪

But remember, with great power comes great responsibility. If you're using database transactions and need your mailables to wait for them to complete before being sent, simply let the `handleMailables` method know.

```php
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;

class Order extends Model implements ShouldQueue
{
    // ...

    public function sendShippedNotification()
    {
        beginTransaction();

        try {
            $this->ship(); // do shipment stuff here

            Mail::to($this->user) // send mail here
                ->queue(new OrderShipped);

            commit();
        } catch (\Exception $e) {
            rollback();
        }
    }
}
```

Now, your mails will respect the transactions and wait patiently for them to complete before jumping into action. Because in the world of Laravel, a well-timed mail can make all the difference! 📧🚀

 Alrighty, let's dive into the whimsical world of Laravel queued mailables and database transactions! 🎉💌

Imagine this scenario: You're in the middle of a high-stakes poker game with models as your cards and the database as the table. Suddenly, you decide to dispatch a queued mailable right smack in the heat of the game. Now, here comes the twist—the queue processes your mailable before the poker game has officially ended (committed the transaction). Oops!

At this point, any updates made to models or database records during the game might still be shuffling around unseen by the other players (the database). Worst yet, any new models or records created during the game could've vanished before the deal was sealed! Now, if your mailable depends on these missing models, it's bound to cause a ruckus when the job that sends the queued mailable is processed.

But fear not, Laravel has got you covered! If your queue connection's `after_commit` option is set to `false`, you can save the day by calling the `afterCommit` method when sending the mail message or from your mailable's constructor:

```php
Mail::to($request->user())->send(
    (new OrderShipped($order))->afterCommit()
);
```
or
```php
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderShipped extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct()
    {
        $this->afterCommit(); // Let's make sure everything is settled before we send the mail!
    }
}
```

In case you want to learn more about handling these tricky situations, be sure to check out the documentation regarding [queued jobs and database transactions](/docs/{{version}}/queues#jobs-and-database-transactions). Happy coding, cowboy! 🤠🚀

 Ah, the thrill of a failed queued email! Quite the roller coaster ride for our humble mailable classes. But fear not, dear developer, for Laravel's got your back!

When an email takes a wrong turn and fails to deliver, it's like a red flashing light going off in our server room. To handle this emergency, we've designed a special method just for you: the `failed` method.

Here's where things get really interesting - when a queued email bites the dust, it passes the trouble-making `Throwable` instance that caused all the chaos to the `failed` method. Imagine a naughty ghost causing mischief in your house, and you catching him red-handed!

So, if you want to catch those ghosts, also known as email failures, and handle them with grace, look no further than this code example:

```php
<?php

namespace App\Mail;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Throwable;

class OrderDelayed extends Mailable implements ShouldQueue
{
    use SerializesModels;

    /**
     * Catch an email failure like a pro.
     */
    public function failed(Throwable $exception): void
    {
        // ... handle the exception, save logs, or send notifications here!
    }
}
```

Now, go forth and conquer those errant emails with Laravel's `failed` method in hand! And remember: every failure is an opportunity to learn, so don't be too hard on yourself if things don't always go according to plan. After all, even the best chefs burn the soup sometimes! 🥄🔥

 ## Unleashing the Hidden Party Invites! 🥳🎉

Ever wanted to sneak a peek at that swanky party invite without actually RSVP-ing? Well, Laravel's got your back! Just like a magician revealing his secrets (but not quite as impressive), you can summon the HTML content of your invites (er, mails) without even sending them. How, you ask? By casting the `render` spell on your mailable!

```php
use App\Mail\InvoicePaid;
use App\Models\Invoice;

$invoice = Invoice::find(1);

return (new InvoicePaid($invoice))->render(); 🧙‍♂️📨
```

And just like that, you'll have the evaluated HTML content of your mailable transformed into a string. So go ahead and make the invitee list green with envy! But remember, no party crashing without an RSVP! 🤪

 ### Launching your Mailable Masterpieces without leaving your Browser Couch! 🚀🍿

Ever found yourself in a design pickle, tweaking your mailable template to perfection and wishing for a magical way to preview the rendered masterpiece right in your browser? Well, buckle up! Laravel's here to make your coding life a tad bit more glamorous.

With us, you can effortlessly serve up your masterfully crafted mailables like a Blade template at a fancy restaurant. How you ask? Simply return any mailable directly from a route closure or controller, and voila! Your mailable will be cooked to perfection (rendered) and presented on the browser platter for your admiration:

```php
Route::get('/mailable-feast', function () {
    $invoice = App\Models\Invoice::find(1);

    // Here's the main course: Your InvoicePaid mailable, served with style!
    return new App\Mail\InvoicePaid($invoice);
});
```

Now that your culinary skills are shining in the digital realm, let's talk about localization. Yes, you heard it right - we're going global with your mailables!

<a name="localizing-mailables"></a>

### Serving Localized Mailables with a Smile 🌐

Tired of sending out generic emails to folks from all around the globe? Worry not, as Laravel's got you covered with localization support for your mailables. Just sprinkle some localization magic on your mailable and watch it transform into a global sensation!

```php
// Prepare your InvoicePaid mailable for a world tour
public function build(Invoice $invoice, Translator $translator) {
    parent::build($invoice);

    // Set the email subject and body based on the user's language preference
    $this->subject = $translator->trans('email.invoice_paid.subject');
    $this->view->with(['locale' => app()->getLocale()]);
}
```

And that's a wrap! Now you can travel the world with your customized, locally relevant, and beautifully designed mailables. Happy coding, and keep on making those email inboxes sparkle! ✨💌

 ## Globalizing Galactic Dispatches with Laravel! 🚀📧

Ready to conquer the cosmos while keeping your intergalactic customers delighted? Fear not, dear space explorers! Laravel has got you covered with its out-of-this-world mail localization feature.

Here on Earth, we know that language barriers can cause a bit of a pickle, but fear not, as our advanced extraterrestrial mail system will ensure your messages are understood by Martians, Andromedans, or even that grumpy Klingon at the helm of the Enterprise! 👽

To set the proper language for your cosmic correspondence, simply harness the magical power of the `Mail` facade's `locale` method. This super-duper function allows you to switch into any desired galactic dialect while composing those outgoing missives:

```php
// Engage warp drive and set Martian language for this journey!
Mail::to($request->user())->locale('martian')->send(
    new OrderShipped($order) // Don't forget to ship that Martian martini! 🍸🛸
);
```

Now, you might be wondering: "What happens if I queue up this mail for later delivery?" Well, fear not, fellow space travelers! Laravel will keep a keen eye on your language preferences and will remember them, ensuring that the correct dialect is used even when the message is transmitted at a later time.

In case you're curious about users' preferred locales, check out this section: <a href="#user-preferred-locales">User Preferred Locales</a> 🌐✨

So there you have it! With Laravel's localization feature, intergalactic communication has never been easier or more entertaining. So go forth and conquer the cosmos, space cowboy (or cowgirl)! 🚀💖💫

 Alright, buckle up, because we're about to embark on a linguistic journey! Yes, we're talking about locales – the fancy term for languages or regional settings. And if you've got users from all over the globe, you might want to keep track of their preferred dialects.

But fear not, Laravel isn't just a superhero saving the day; it's more like a polyglot party host, ensuring everyone gets served in their preferred tongue! To get this party started, you need to woo the `HasLocalePreference` contract at your models' dance.

```php
Use your best pick-up lines, Laravel:

use Illuminate\Contracts\Translation\HasLocalePreference;

class User extends Model implements HasLocalePreference
{
    /**
     * Get the user's preferred locale.
     */
    public function preferredLocale(): string
    {
        return $this->locale;
    }
}
```

Once your models have accepted the contract, Laravel will swoop in and use the preferred locale when dishing out mailables and notifications. No need to call the `locale` method during this courtship:

```php
Mail: "I've got a message for you from order #12345," (winks at User model) ".Send it!"
```

Now, when you send out mailables and notifications to your users, they'll be greeted in their preferred tongue – just like a well-rehearsed polyglot party host!

<a name="testing-mailables"></a>
So, let's raise our glasses (or code editor tabs) and cheers to smooth communication with users across the globe!

 ### Laugh, Test, Conquer! 🥳🚀

Welcome to the jolly ol' world of Laravel Mail Testing! 🎉💌 This is where the fun begins. It's not just about sending emails anymore, it's about ensuring those emails make your users giggle with glee rather than gasp in horror. Let's dive right in!

<a name="testing-mailable-content"></a>

### Testing Mailable Content 🎯📝

You might be wondering, "But how do I know if my jokes land?" Well, worry no more! Laravel provides a smashing feature called **test** that allows you to verify your mails are as hilarious as you think they are. 🎉

Here's the dealio: First, create a fresh test case for your Mailable. This involves extending `TestCase` and defining the necessary methods. For instance, if you have a `WelcomeMail` Mailable, you'd make it something like this:

```php
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Mail\WelcomeMail;

class WelcomeMailTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function the_welcome_mail_is_sent()
    {
        // Arrange
        $user = factory(User::class)->create();

        // Act
        $response = $this->assertDatabaseHas('emails', [
            'to_email' => $user->email,
        ]);

        // Assert
        $response->assertStatus(204);
    }
}
```

In this example, we're creating a new user, sending an email to them, and then checking the database to see if it was actually sent. If you're seeing green (a 204 status code), then high-five! Your email is on point and your users won't be reaching for the snooze button.

Now that you've got the hang of testing, go forth and unleash the laughter upon your users! Remember, happy users mean a thriving app ecosystem—and who doesn't want that? 🌱🚀

 Alright, buckle up, coding cowboys and cowgirls! Laravel's got some spiffy tools to help you scrutinize your mails like a digital Sherlock Holmes. And we all know that testing is as essential as a trusty six-shooter in the Wild West of software development.

Here's how you can check if your mailable is sending out the right content, without getting itchy trigger fingers:

```php tab=Pest (Y'all just call me Deputized Developer)
use App\Mail\InvoicePaid;
use App\Models\User;

test('mailed content', function () {
    $user = User::factory()->make(); // Let's pretend we've corralled our user data, yeehaw!

    $mailGun = new InvoicePaid($user); // Load up that mailable like a trusty six-shooter

    $mailGun->assertFrom('jeffrey@example.com'); // Check the sender, Jeff's our postmaster here
    $mailGun->assertTo('taylor@example.com'); // Taylor's on the receiving end of this mail
    $mailGun->assertHasCc('abigail@example.com'); // Abigail's in copy, keep her in the loop
    $mailGun->assertHasBcc('victoria@example.com'); // Victoria's blind copied, but still in the know
    $mailGun->assertHasReplyTo('tyler@example.com'); // If Taylor has questions, Tyler's the man to ask
    $mailGun->assertHasSubject('Invoice Paid'); // The subject is 'Invoice Paid', that's what she said!
    $mailGun->assertHasTag('example-tag'); // We've tagged this mail with our custom 'example-tag'
    $mailGun->assertHasMetadata('key', 'value'); // Metadata, because we ain't just sending simple letters here

    $mailGun->assertSeeInHtml($user->email); // Look for the user's email in the HTML version of the mail
    $mailGun->assertDontSeeInHtml('Invoice Not Paid'); // Let's ensure there's no confusion, no 'Invoice Not Paid' business here
    $mailGun->assertSeeInOrderInHtml(['Invoice Paid', 'Thanks']); // We want to see 'Invoice Paid' before 'Thanks' in the HTML mail

    $mailGun->assertSeeInText($user->email); // Search for the user's email in the plain-text version of the mail
    $mailGun->assertDontSeeInText('Invoice Not Paid'); // No 'Invoice Not Paid' allowed in plain text either
    $mailGun->assertSeeInOrderInText(['Invoice Paid', 'Thanks']); // The order should be 'Invoice Paid' followed by 'Thanks' in plain text too

    $mailGun->assertHasAttachment('/path/to/file'); // Check if there's an attachment, like a picture or PDF
    $mailGun->assertHasAttachment(Attachment::fromPath('/path/to/file')); // Double-check the attachment path for accuracy
    $mailGun->assertHasAttachedData($pdfData, 'name.pdf', ['mime' => 'application/pdf']); // Ensure the PDF data is correct with name and mime type
    $mailGun->assertHasAttachmentFromStorage('/path/to/file', 'name.pdf', ['mime' => 'application/pdf']); // Check for attachments stored on our server
    $mailGun->assertHasAttachmentFromStorageDisk('s3', '/path/to/file', 'name.pdf', ['mime' => 'application/pdf']); // And if we're using S3, make sure the attachment is there too!
});
```

```php tab=PHPUnit (It's still me, just in a more formal outfit)
use App\Mail\InvoicePaid;
use App\Models\User;

public function test_mailed_content(): void
{
    $user = User::factory()->create(); // We've wrangled our user data, ready for action!

    $mailGun = new InvoicePaid($user); // Load up that mailable like a trusty six-shooter

    $mailGun->assertFrom('jeffrey@example.com'); // Check the sender, Jeff's our postmaster here
    $mailGun->assertTo('taylor@example.com'); // Taylor's on the receiving end of this mail
    $mailGun->assertHasCc('abigail@example.com'); // Abigail's in copy, keep her in the loop
    $mailGun->assertHasBcc('victoria@example.com'); // Victoria's blind copied, but still in the know
    $mailGun->assertHasReplyTo('tyler@example.com'); // If Taylor has questions, Tyler's the man to ask
    $mailGun->assertHasSubject('Invoice Paid'); // The subject is 'Invoice Paid', that's what she said!
    $mailGun->assertHasTag('example-tag'); // We've tagged this mail with our custom 'example-tag'
    $mailGun->assertHasMetadata('key', 'value'); // Metadata, because we ain't just sending simple letters here

    $mailGun->assertSeeInHtml($user->email); // Look for the user's email in the HTML version of the mail
    $mailGun->assertDontSeeInHtml('Invoice Not Paid'); // Let's ensure there's no confusion, no 'Invoice Not Paid' business here
    $mailGun->assertSeeInOrderInHtml(['Invoice Paid', 'Thanks']); // We want to see 'Invoice Paid' before 'Thanks' in the HTML mail

    $mailGun->assertSeeInText($user->email); // Search for the user's email in the plain-text version of the mail
    $mailGun->assertDontSeeInText('Invoice Not Paid'); // No 'Invoice Not Paid' allowed in plain text either
    $mailGun->assertSeeInOrderInText(['Invoice Paid', 'Thanks']); // The order should be 'Invoice Paid' followed by 'Thanks' in plain text too

    $mailGun->assertHasAttachment('/path/to/file'); // Check if there's an attachment, like a picture or PDF
    $mailGun->assertHasAttachment(Attachment::fromPath('/path/to/file')); // Double-check the attachment path for accuracy
    $mailGun->assertHasAttachedData($pdfData, 'name.pdf', ['mime' => 'application/pdf']); // Ensure the PDF data is correct with name and mime type
    $mailGun->assertHasAttachmentFromStorage('/path/to/file', 'name.pdf', ['mime' => 'application/pdf']); // Check for attachments stored on our server
    $mailGun->assertHasAttachmentFromStorageDisk('s3', '/path/to/file', 'name.pdf', ['mime' => 'application/pdf']); // And if we're using S3, make sure the attachment is there too!
}
```

As you can see, the "HTML" assertions check that the HTML version of your mailable contains a given string, while the "text" assertions ensure that the plain-text version of your mailable contains a specific string. Now you're all set to test your mailables like a pro cowboy or cowgirl! 🤠🐎🌵

 Alright, buckle up, coding cowboys! Let's dive into testing those mailables like a wild west shootout. You don't want your code to start blasting out emails without checking if they're loaded with the right content, do you?

First things first, let's separate testing the mailable content from verifying that it actually got shot off to its intended recipient. The content of your mailables is usually as relevant to the code you're testing as a cowboy's choice of hat—it's important, but not the main focus here. All we need to ensure is that Laravel's been given the order to saddle up and ride with the specified mailable.

To keep those emails from getting sent like a wild stampede, you can use the `Mail` facade's trusty `fake` method. Once it's been called, you can then check if mailables were instructed to be delivered to users and even take a peek at the data they received:

```php
<?php
// In Pest

use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;

test('orders can be shipped', function () {
    Mail::fake();

    // Saddle up and ride...

    // Assert that no mailables were sent...
    Mail::assertNothingSent();

    // Assert that a mailable was sent...
    Mail::assertSent(OrderShipped::class);

    // ...and even assert it was sent twice!
    Mail::assertSent(OrderShipped::class, 2);

    // Now, let's ensure it was fired off to the right email address...
    Mail::assertSent(OrderShipped::class, 'example@laravel.com');

    // And even to multiple addresses!
    Mail::assertSent(OrderShipped::class, ['example@laravel.com', '...']);

    // If another mailable was fired off, let's make sure it wasn't...
    Mail::assertNotSent(AnotherMailable::class);

    // Assert that a specific mailable was sent twice...
    Mail::assertSentTimes(OrderShipped::class, 2);

    // And check that a total of 3 mailables were sent...
    Mail::assertSentCount(3);
});
```

```php tab=PHPUnit
<?php
// In PHPUnit

namespace Tests\Feature;

use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_orders_can_be_shipped(): void
    {
        Mail::fake();

        // Saddle up and ride...

        // Assert that no mailables were sent...
        Mail::assertNothingSent();

        // Assert that a mailable was sent...
        Mail::assertSent(OrderShipped::class);

        // ...and even assert it was sent twice!
        Mail::assertSent(OrderShipped::class, 2);

        // Now, let's ensure it was fired off to the right email address...
        Mail::assertSent(OrderShipped::class, 'example@laravel.com');

        // And even to multiple addresses!
        Mail::assertSent(OrderShipped::class, ['example@laravel.com', '...']);

        // If another mailable was fired off, let's make sure it wasn't...
        Mail::assertNotSent(AnotherMailable::class);

        // Assert that a specific mailable was sent twice...
        Mail::assertSentTimes(OrderShipped::class, 2);

        // And check that a total of 3 mailables were sent...
        Mail::assertSentCount(3);
    }
}
```

If you're busy corralling your mailables for delivery in the background, you should use the `assertQueued` method instead:

```php
Mail::assertQueued(OrderShipped::class);
Mail::assertNotQueued(OrderShipped::class);
Mail::assertNothingQueued();
Mail::assertQueuedCount(3);
```

You can also assert the total number of mailables that have been sent or queued using the `assertOutgoingCount` method:

```php
Mail::assertOutgoingCount(3);
```

If you're after a specific mailable, you can use closures to verify if it passed certain criteria. If at least one mailable that meets your criteria gets sent, the assertion will be successful:

```php
Mail::assertSent(function (OrderShipped $mail) use ($order) {
    return $mail->order->id === $order->id;
});
```

When calling the `Mail` facade's assertion methods, the mailable instance passed to the closure exposes helpful methods for inspecting the mailable:

```php
Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) use ($user) {
    return $mail->hasTo($user->email) &&
           $mail->hasCc('...') &&
           $mail->hasBcc('...') &&
           $mail->hasReplyTo('...') &&
           $mail->hasFrom('...') &&
           $mail->hasSubject('...') &&
           $mail->hasMetadata('order_id', $mail->order->id);
           $mail->usesMailer('ses');
});
```

The mailable instance also includes several helpful methods for inspecting the attachments on a mailable:

```php
use Illuminate\Mail\Mailables\Attachment;

Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) {
    return $mail->hasAttachment(
        Attachment::fromPath('/path/to/file')
            ->as('name.pdf')
            ->withMime('application/pdf')
    );
});

Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) {
    return $mail->hasAttachment(
        Attachment::fromStorageDisk('s3', '/path/to/file')
    );
});

Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) use ($pdfData) {
    return $mail->hasAttachment(
        Attachment::fromData(fn () => $pdfData, 'name.pdf')
    );
});
```

Now, you may have noticed that there are two methods for verifying mail wasn't sent: `assertNotSent` and `assertNotQueued`. Sometimes, you might want to ensure that no mail was sent **or** queued. To accomplish this, you can use the `assertNothingOutgoing` and `assertNotOutgoing` methods:

```php
Mail::assertNothingOutgoing();

Mail::assertNotOutgoing(function (OrderShipped $mail) use ($order) {
    return $mail->order->id === $order->id;
});
```

Let the fun times of testing begin, partner! 🤠🚀

 ### Emailing Shenanigans and Local Larks! 💌🏠

In the world of app development, there's nothing more embarrassing than accidentally blasting your love letters to live email addresses. Fear not, Laravel has got your back with a slew of ways to keep those emails firmly parked in Draftsville during local dev! 🎉📫

<a name="log-driver"></a>

### The Switched-Off Sender 🔌✉️

Let's dive right into it, shall we? Enter the Log Driver! This magical feature allows emails to be... well, not exactly sent. Instead, they'll be neatly logged for your viewing pleasure, saving you from any unwanted inbox invasions. 🕵️‍♂️💌

Simply set your default mailer to the 'log' driver within your `.env` file:

```
MAIL_DRIVER=log
```

And voila! Your emails will now dance a merry jig through the logs, avoiding live email addresses like a prodigious mail-dodger in a crowded post office. 🏃‍♂️📮🎉

Of course, once you're ready to unleash your communications upon the world (or at least, upon those poor souls on your test list), switching back is just as easy:

```
MAIL_DRIVER=smtp
```

Now sit back, relax, and watch your emails sail off into the sunset, knowing they'll finally reach their intended recipients. 🌞✉️🎉📮

 Alrighty then! Buckle up, cowboy (or cowgirl), because we're about to embark on an adventure so wild it'll make you wish your logs were a time machine. Meet the Log Driver, Laravel's answer to keeping your emails in check without actually sending them off into the great wide open.

This isn't just any ol' mail service; no sir! The Log Driver is here to write all your email messages straight into your trusty log files for a closer examination, like when you're trying to find out who keeps eating your lunch in the fridge at work. It's a real lifesaver during local development, where sending emails left and right might get a bit messy (and let's be honest, no one wants their boss finding their secret stash of cat GIFs attached to an email).

Now, how do you wrangle this log-slinging pony? Well, if you're curious about configuring your application to suit different environments, like testing or production, fear not! We've got a [configuration documentation](/docs/{{version}}/configuration#environment-configuration) that'll tell you everything you need to know. It's like the cowboy's guide to taming this wild log steed!

And if you find yourself needing a bit more mail magic, say hello to [Mailtrap](mailtrap.io). It's a handy tool that helps you catch those emails before they go flying into the great unknown, making it much easier to keep track of your email tests and avoid any unexpected surprises in production. It's like having a friendly deputy keeping watch over your mail corral! So saddle up and get ready for some log-wrangling fun!

 Ahoy there, Laravel sailors! If you're tired of your emails disappearing faster than a fish in a goldfish bowl, we've got the solution for you – it's like catching the Loch Ness Monster but for your email woes!

First off, meet our new pals: HELO, Mailtrap, and Mailpit. Think of them as your email wingmen, helping you send messages to a 'dummy' mailbox, where you can view them using a fancy-schmancy true email client. It's like having your own personal butler who only delivers emails – talk about service!

Now, why would you want this? Simple – it allows you to inspect the final emails as if they were delivered to your grandma (assuming she knows how to use a computer and isn't confused by emojis). You can make sure everything looks great before sending it off to the real recipients.

If you're sailing with Laravel Sail, you can catch a glimpse of your messages using Mailpit. Just like finding pirate treasure on a map, when Sail is running, you can find the Mailpit interface at `http://localhost:8025`. So set sail and enjoy!

And if you're ever in need of addressing your emails to a global audience, we've got a nifty little trick for that too. Just keep scrolling down this page to learn more! 🌎📧

 Alrighty, let's dive into the world of Laravel emailing, where even a pigeon could send a message if it had thumbs! But no need for feathers and seed – we've got code to do that instead!

You might've noticed that every time you send an email, you have to specify who it's going to. Well, imagine being a postman in a small town where everyone knows each other – you wouldn't always have to write the recipient's name on each letter, right? That's what we call a global "to" address!

To set up this friendly neighborhood mailing list, you can make use of the `alwaysTo` method offered by our trusty `Mail` facade. But here's the catch – just like Santa only visits at Christmas, this method should be called from the `boot` method of one of your application's service providers:

```php
Use the Force, young Jedi!
use Illuminate\Support\Facades\Mail;

Public function boot(): void
{
    if (thisApp() isEnvironment('local')) {
        Mail::alwaysTo('taylor@example.com');
    }
}
```

Now, when you send an email to 'Taylor' at example.com, it's like sending him a care package – with extra love! But remember, if you try to add any CC or BCC addresses on mail messages, we might have to politely ask them to stand in line or wait their turn, because Taylor gets first dibs when using the `alwaysTo` method.

So there you have it! With just a few lines of code, you can make your Laravel application feel more like a cozy neighborhood where everyone knows each other's mailing address by heart – or at least their email inbox!

 ## Mail Time! 📨🎉

In the world of Laravel, when we're sending out those snazzy emails, it's not just us robots doing all the work. Oh no! We dispatch two parties to keep things interesting. 🥳

First off, there's the "Pre-Party" aka `MessageSending` event, which gets thrown right before we hit 'send'. It's like the announcement that the dance floor is about to get lively, but for emails instead. 💌

Next up, after the email has been sent and the inbox is popping (hopefully), we have the "After-Party" aka `MessageSent` event. It's like the post-dance chat where everyone's exchanging numbers. Again, emails are the life of the party here. 📞

Remember, these events go down when the mail is being *sent*, not when it's just waiting in line to be sent (like a shy Wallflower at a high school dance). You can create your own [event listeners](/docs/{{version}}/events) to join the festivities within your application:

```php
use Illuminate\Mail\Events\MessageSending;
// No need for a separate Event for MessageSent, we only send one email at a time 😉

class DiscoBallLog
{
    /**
     * Handle the event.
     */
    public function handle(MessageSending $event): void
    {
        // ...
    }
}
```

<a name="custom-transports"></a>
And if you're feeling extra festive, you can even customize the transport system with your own DJ skills! 🎧🕺🏻

 ## Unleashing the Chimpmailer! (Custom Transports Edition)

Ahoy there, Laravel enthusiasts! Ever found yourself hankering to send emails via services that even the most adventurous of our included transports won't traverse? Fear not! This doc will guide you in creating your very own Chimpmailer – a custom transport for delivering messages through the mystical lands of Mailchimp.

First, let's suit up and extend the `Symfony\Component\Mailer\Transport\AbstractTransport` class like it's our favorite superhero cape. Create a spankin' new PHP file in your `App\Mail` directory, and name it something fun like `Chimpmailer.php`.

```php
<?php
// ... (your existing namespace)

class Chimpmailer extends AbstractTransport
{
    // Your awesome class definition goes here!
}
```

Now, let's get our hands dirty by implementing the `doSend` and `__toString` methods. These are crucial in making sure your Chimpmailer knows how to function and introduce itself at parties.

```php
protected function doSend(SentMessage $message): void
{
    // Magic happens here!
}

public function __toString(): string
{
    return 'chimpmailer';
}
```

Fill in the `doSend` method with some fantastic Mailchimp code, and your transport is ready to go. You can find more details about that in the original documentation.

Next up, register your Chimpmailer by using the `Mail` facade's `extend` method within your application's `AppServiceProvider`. This should be performed within the `boot` method like so:

```php
use Illuminate\Support\Facades\Mail;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Mail::extend('chimpmailer', function (array $config = []) {
        // Your Chimpmailer registration goes here!
    });
}
```

Once registered, create a new mailer definition in your application's `config/mail.php` configuration file:

```php
'chimpmailer' => [
    'driver' => 'chimpmailer',
    // Your Chimpmailer configuration goes here!
],
```

And there you have it! You've created a custom transport for sending emails through the enchanting world of Mailchimp. Time to grab your wand (or keyboard) and cast some email magic!

 ### Unleash the Power of Extra-Terrestrial Emails with Laravel! 🚀

Laravel is like the Avengers of frameworks, and just like when Captain America adds Mjolnir to his arsenal, you can extend its mighty powers to include some out-of-this-world Symfony maintained mail transports. The likes of Mailgun and Postmark are already on board (pun intended), but if you're feeling adventurous, we've got your back!

Let's say you want to bring in the big guns - or should I say "Brevo" (formerly known as Sendinblue) 🌠. Here's a step-by-step guide on how to get this cosmic beauty integrated into your Laravel project:

1. First, summon the power of Composer! It's like magic for developers. Cast this spell:

```shell
composer require symfony/brevo-mailer symfony/http-client
```

2. Once you've successfully called upon Brevo, it's time to arm our application with your secret API credentials. Open up your application's `services` configuration file and add an entry for Brevo:

```php
'brevo' => [
    'key' => env('BREVO_API_KEY'),
],
```

3. Now, let's register the transport with Laravel! This is done using the `Mail` facade's `extend` method, typically within the `boot` method of a service provider:

```php
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Mailer\Bridge\Brevo\Transport\BrevoTransportFactory;
use Symfony\Component\Mailer\Transport\Dsn;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Mail::extend('brevo', function () {
        // This is like forming an alliance with the Brevo forces
        return (new BrevoTransportFactory)->create(
            new Dsn(
                'brevo+api',
                'default',
                config('services.brevo.key')
            )
        );
    });
}
```

4. Lastly, create a mailer definition within your application's `config/mail.php` configuration file that utilizes the new transport:

```php
'brevo' => [
    'transport' => 'brevo',
    // ...
],
```

And there you have it! Now you can send emails to the furthest corners of the universe with the mighty power of Laravel and Brevo! 🚀💫