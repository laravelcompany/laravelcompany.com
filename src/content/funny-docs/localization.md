 # Lingo-Magic: Make Your Laravel App Speak Every Language Under the Sun! 🌍🎙️

## The Lowdown 📣

### Unleashing the Power of Words (in Multiple Languages!) 🌐🗣️

- #### Publishing the Lingo Files 📤📜

   Translating your app is as easy as publishing some magic files to the right places. It's like getting your app fluent in a new language overnight!

- #### Setting the Tongue of Your App (Locale) 🌐👨‍🇦🇪

   Decide where your app will speak from, be it Spanish in Spain or English in England. It's like deciding which accent C-3PO should have in Star Wars!

- #### Pluralization: The Grammar Guru 📝🔬

   We've got a special algorithm to help with tricky things like plural forms in multiple languages. Because even robots need grammar teachers sometimes!

<a name="defining-translation-strings"></a>

## Crafting Translation Keys 🔑🌈

### The Art of Abbreviation (Using Short Keys) 📝🏃‍♂️

   Keep it short and sweet when defining your translation keys. It's like having a secret language only you and your app understand!

- ### Using Translation Strings as Keys (Mind=Blown!) 🤯🔑

   Wait, what? You can use a translated string itself as the key for another translation? Mind=Blown! It's like finding out you can name your kid "Apple" and then call them "Fruit"!

<a name="retrieving-translation-strings"></a>

## Retrieving Translation Keys 🔑📫

### Replacing Parameters in Translation Strings (Just Like Mad Libs!) 📝🎨

   You can replace specific words within your translation strings, just like you would fill in the blanks on a Mad Libs page. Only instead of "noun" or "verb", it's things like "user" or "post".

- ### Pluralization (Because One Cat is Cute, but Two are Sneezing Together!) 🐱🤧

   Need to change the plural form of a word? No worries! Laravel's got your back, making sure everything sounds grammatically correct in every language!

<a name="overriding-package-language-files"></a>

## Overriding Package Translations 🔄🧑‍🤝‍🧑

### When You Need to Say It Your Way 🗣️🎙️

   Sometimes, you might want to change the way a package translates something. No problem! Just override its translation files and speak your mind loud and clear!

 Alright, buckle up, language lovers! 🌐 🎵 Laravel ain't just a pizza-loving, music-making pal, it's also your multilingual wingman. No more stumbling over weird characters or awkwardly translated phrases in your app - Laravel's got you covered with its fancy localization features!

By default, the Laravel starter kit leaves out the `lang` directory like a party without a dance floor. But don't worry, it's not a secret VIP area; you can publish it using the magical Artisan command: `lang:publish`. 🦄 🚀

With Laravel, managing translation strings is as simple as pie (or maybe more like pizza, given our Italian roots). You've got two delicious options to choose from. First up, language strings can be stored in files nestled cozily within your app's `lang` directory. These subdirectories will house the translations for each supported language, making it a breeze for apps that speak multiple tongues:

```text
/lang
    /en
        messages.php
    /es
        messages.php
```

If you're juggling hundreds of translatable strings like a pro circus performer, you might prefer to define your translation strings within JSON files, tucking them away in the `lang` directory:

```text
/lang
    en.json
    es.json
```

We'll dive deeper into each method for managing translation strings throughout this documentation. Let's get this linguistic party started! 🎉🎈🥳

 Alrighty, folks! Let's dive into the jovial world of Laravel localization. You see, out of the box, our beloved Laravel app skeleton is as monolingual as a one-legged centaur (no offense intended to the centaurs). But fear not, for if you fancy your app speaking in multiple tongues, we've got you covered!

To get started with this linguistic adventure, you'll need to scaffold the elusive `lang` directory. Fret not, my friend, as it can be done with a simple incantation known as the `lang:publish` Artisan command. Simply invoke this mystic spell, and behold! The `lang` directory will magically appear in your application, adorned with the default set of language files that make Laravel sing in harmony (or discord, depending on your choice of language).

```shell
php artisan lang:publish
```

Now that you've got the party started, let's raise a toast to the `config/app.php` file – the gatekeeper of locales. Here is where you can configure the locale of your application by setting the default language and defining available languages in the `supported_locales` array.

Remember, having multiple languages at your disposal doesn't mean they should all be invited to every conversation (it might get a bit chaotic). Use the `app()->setLocale()` function to determine which language(s) your app will converse in based on user preferences or other criteria.

Here's a glimpse of how you can set up different locales:

```php
'supported_locales' => [
    'en', // English (default)
    'es', // Spanish
    'fr', // French
    // Add more languages as needed
],

// To set the current locale
app()->setLocale('es');
```

And there you have it! Now you're well-equipped to transform your Laravel app into a polyglot sensation – ready to converse with users from around the globe. Just remember, when in doubt, always choose laughter over tears (or errors). Happy localizing! 🎉🌐🌍✨

 ### Unleashing Linguistic Luminosity! 🚀

Ahoy, matey! Ready to set sail on an exhilarating journey through the seas of localization? Buckle up as we dive into configuring the linguistic landscape for your Laravel ship! 🌊🏞️

First things first: The default dialect of your app is stowed away in the `config/app.php` vessel, under the `locale` sail setting – usually anchored by the `APP_LOCALE` compass reading. Feel free to adjust this buoy to align with your application's needs! 🌐

Ever thought about having a 'pirate speak' app? Now you can! Just remember, we can't guarantee Jack Sparrow will be impressed. 🏴‍☠️

Next up: Prepare for boarding call! You may also chart a course for a "fallback language", a swashbuckling substitute that steps in when your default dialect fails to translate a particular term. This alternate linguistic oasis is similarly charted in the `config/app.php` blueprint, guided by the `APP_FALLBACK_LOCALE` lighthouse coordinates.

Want to switch things up on the fly? You can do so with the `setLocale` harpoon offered by the `App` beacon!

```php
use Illuminate\Support\Facades\App;

Route::get('/greeting/{locale}', function (string $locale) {
    if (! in_array($locale, ['en', 'es', 'fr'])) {
        // We're all at sea without those languages!
        abort(400);
    }

    App::setLocale($locale);

    // ...
});
```

And voila! Your Laravel vessel can now chat in different dialects faster than you can say "Shiver me timbers!" 😴 Just remember to keep your anchors a-weigh and your compass set straight! Happy sailing, matey! 🎉🌍

 Alrighty, let's get this locale-lovin' party started! 🎉

First off, you might be wondering: "What's the deal with locales anyway? Aren't we all from Earth?" Well, in our digital world, knowing a user's preferred language can make all the difference. No more misunderstandings about whether "sweater" is a warm garment or a cold, watery drink! 🧦

To find out what your user's current locale is, you can use the `currentLocale` and `isLocale` methods on the friendly neighborhood `App` facade. It's like asking them directly: "Hey there, any preferences on the language front?"

```php
use Illuminate\Support\Facades\App;

$locale = App::currentLocale(); // Aww, isn't it cute how they ask politely?

if (App::isLocale('en')) { // Ooh, they speak English! Time to whip out the Shakespearean one-liners. 🌐🎭
    // ...
}
```

And just like that, you're speaking their language! Now, if you want to check if a user's locale is a specific value, simply use `isLocale`. It's like playing detective and asking: "Is it you, French?"

Remember, knowing your user's locale can make your digital interactions more engaging and less confusing. So, go ahead and make their day by speaking their language! 🌐🤗

 Alrighty, Laravel's "pluralizer" - the superhero of string conversions, used by Eloquent and other framework heavyweights to turn singletons into party people. You can make this polyglot pal change its native tongue from English to something more exotic, like Spanish or Turkish (we won't hold it against him). How you ask? By summoning the `useLanguage` method during the `boot` ceremony of one of your application's service providers.

Here's a little magic trick for you:

```php
Use the Force, Obi-Wan! (That's Laravelese for 'include')...

Use Illuminate\Support\Pluralizer;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Pluralizer::useLanguage('spanish'); // Donde están las fiestas?

    // ...
}
```

[!WARNING]
If you decide to spice up the pluralizer's language, remember to explicitly define your Eloquent model's [table names](/docs/{{version}}/eloquent#table-names) like a well-dressed gentleman at a formal dinner party.

 Alrighty, let's get this language party started! 🎉 First things first: you'll wanna define your translation strings, 'cause nothing kills the vibe quite like an untranslated error message. 😵‍💫

<a name="using-short-keys"></a>
### Using Short Keys 🔑

To keep things organized and snappy, we're gonna use these handy little dudes called "Short Keys". Imagine them as the secret handshake of your multilingual app – they'll help you keep track of your translations across different languages. 😉

Here's a simple example:

```php
'key' => 'Your awesome translation here',
```

Just make sure to store these in an array in your language files, like so:

```php
// lang/en/messages.php
return [
    'key' => 'Your awesome translation here',
];

// lang/fr/messages.php
return [
    'key' => 'Ta superbe traduction ici', // Or whatever you fancy in French!
];
```

And voilà! Now your app will spit out the correct translation based on the user's language preference. Just remember to always keep your translations fresh and fun, 'cause a smile goes a long way when things get technical. 😊🤖🚀

 ### Unleashing the Power of Short Keys! 🚀🔑

G'day there, coding cowboy! You know how your translation strings are hiddin' out in the `lang` corral? Well, saddle up and let's trot over there. In this here saloon, you'll find a subdirectory for each language that can rope-dance with your app.

```text
/lang
    /en
        messages.php
    /es
        messages.php
```

That's right, partner! Each language gets its own `messages.php`. Don't worry, there ain't no spaghetti western code here – just neatly organized translation strings for built-in Laravel features like validation error messages. 🤠

Now, let's lasso a little example:

```php
<?php

// lang/en/messages.php

return [
    'welcome' => 'Yeehaw! Welcome to our application!' // (We spruced it up a bit!)
];
```

> [!WARNING]
> Watch out, partner! If your language's territory changes more than a cowboy hat in a windstorm, name the language directories according to the ISO 15897. For instance, use "en_GB" for British English instead of "en-gb". 🇬🇧 🎉

Hope you found that lasso-load of information helpful! Now go forth and internationalize your app like a seasoned outlaw! 🤠🚀

 Ahoy there! In this here Laravel land, we got ourselves a real pickle when it comes to strings that need translatin'. Now, you see, when an application's bigger than Ben Hur's chariot race, keeping track of all those translation keys can be more confusing than Lindsay Lohan's family tree!

Fear not, good citizen, for Laravel's got a trick up its sleeve. Instead of saddling you with short, forgettable keys, it lets you use the "default" version of your string as the key itself! So instead of rememberin' "key_banana", you can simply think, "I love programming."

Now, where would such a translation be stored? Why, in the `lang` directory, of course, and since we're speakin' Spanish, it'd be in `lang/es.json`. Here's a taste of how that might look:

```json
{
    "I love programming.": "Me encanta programar."
}
```

Just like that, you can say "adiós" to key confusion and "hola" to smooth sailing! Now pass the tequila, will ya? 🍹😉

 Ahoy there, linguistic pirates! Buckle up and let's navigate the choppy seas of Laravel translation without running aground on key conflicts!

#### Ye Olde Key Conflicts

To avoid a mutinous uprising among your translations, remember never to name yer treasure chest keys like other translation files. For instance, if ye be translating "Arr (Action)" for the "NL" locale while there's an `nl/action.php` on deck but no `nl.json`, ye might find the translator dumping the entire contents of that `nl/action.php` right in yer porridge!

<a name="retrieving-translation-strings"></a>
Ye be swabbin' decks and ye stumble upon some translation strings? Here's how to fetch 'em like a true buccaneer:

First, plunder the right locale files by calling `trans()` or `trans_choice()`. These will hoist the Jolly Roger of your chosen translation strings. If ye can't find the translations in memory, Laravel will pillage your locale directories for the nearest match, and if it finds more than one, it might just turn into a peg-legged pirate arguing over whose translation is best! But fear not, matey, Laravel will always choose the most specific match, so no need to walk the plank just yet.

Remember to keep yer translations shipshape and avoid key conflicts, or ye'll end up with more sea monsters than ye can handle! Arrrr!

 Alright, let's dive into the world of linguistic acrobatics! In this Laravel playground, we've got a super-powered translator, the `__` helper function. This guy is akin to the Hitchhiker's Guide to the Galaxy's Deep Thought - answering all your translation conundrums with a touch of a function call.

If you're using "short keys" (think of them as secret handshakes among your language files), just invite `__` to the party! Pass it the file and the key, and they can groove together in harmony:

```php
echo __('messages.welcome');
```

If the translation string is MIA, don't worry, our friend will simply return the key - a bit like when you're trying to find your misplaced car keys and end up returning home with just the house keys.

Now, what if you've decided to use your default translation strings as your keys? Well, in that case, `__` is like a universal translator from Star Trek - it speaks the same language on both sides:

```php
echo __('I love programming.');
```

Again, if the string isn't found, our helpful function will return its key. It's like asking a question to Siri and getting a "Hey, I didn't get that" response in return.

Lastly, if you're using the Blade templating engine (think of it as a fancy, more efficient way to write HTML), you can display your translation strings with the `{{ }}` echo syntax:

```blade
{{ __('messages.welcome') }}
```

And there you have it! With Laravel's `__` function, translating your app has never been more fun than a day at the United Nations! Just remember, if the translation string is missing, you might end up with a key-translation mismatch - like asking for a milkshake and getting a lemonade. But don't worry, it's still refreshing!

 Alrighty, folks! Let's dive into the art of swapping out those cookie-cutter phrases in your translation strings like a digital ventriloquist.

First off, you can toss around placeholders in your translations, and they're easily identifiable by their little `:` friends. For instance, if you wanna greet someone with a personalized touch:

```php
'welcome_message' => 'Welcome, :NAME',
```

Now, when you need to pull out that translated string and fill in the blanks, go ahead and hand over an associative array of replacements as the second argument to our trusty `__` function:

```php
echo __('messages.welcome_message', ['NAME' => 'Dayle McSwaggins']);
```

In case you were wondering, if your placeholder is all CAPS or just Capitol-ized, the translated value will be suitably dressed up to match:

```php
'welcome' => 'Welcome, :NAME', // Welcome, DAYLE
'farewell' => 'Farewell, :Name', // Farewell, Dayle
```

Hope this helps keep your chit-chat game on fleek!

 Ah, dear developer! Ever found yourself in a pickle trying to stuff an object into a translation placeholder like a square peg in a round hole? Well, buckle up, because we've got the antidote to your quandary. It's called Object Replacement Formatting, and it's Laravel's magical solution to third-party library hijinks!

When you try to pass an object as a translation placeholder, PHP automatically calls its `__toString` method. This is one of those secret society magic methods that PHP loves so much. But what happens when you don't control the `__toString` method of the class you're dealing with? You're left with a squirming, writhing, unformatted object - just like trying to feed spaghetti to a cat!

Fear not, for Laravel is here to save the day. It allows you to register a custom formatting handler for specific types of objects. To do this, you need to summon the translator's `stringable` method, which is quite the sorcerer when it comes to object taming.

The `stringable` method accepts a closure as its potion ingredient, and it should be armed with a type hint for the object it needs to format. In most cases, the `stringable` method should be invoked within the `boot` method of your application's AppServiceProvider class - think of it like a knight's swearing of allegiance!

Here's a little demonstration:

```php
use Illuminate\Support\Facades\Lang;
use Money\Money;

/**
 * A grand ballroom for all your application services.
 */
public function boot(): void
{
    Lang::stringable(function (Money $money) {
        return $money->formatTo('en_GB'); // Dress that moolah up in its Sunday best!
    });
}
```

Now your objects will be as charming and well-spoken as a British butler, ready to dazzle anyone who lays eyes on them! Happy coding, mate! 😉

 Ah, pluralization! The linguistic equivalent of a Rubik's cube, but with fewer colors and more fruit. Different languages have their own quirks and rules for this tricky business, much like your eccentric great-uncles at family gatherings. But fear not, dear Laravel developer, for our trusted companion is here to lend a helping hand!

Using the `|` character as your trusty sword, you can now distinguish the singular from the plural form of a string. For example:

```php
'apples' => 'There is one apple|There are many apples',
```

Yes, we know it sounds like a bad pick-up line, but don't worry, the Laravel magic works its charm behind the scenes!

And just in case you were wondering, pluralization is also supported when using [translation strings as keys](#using-translation-strings-as-keys). So you can translate your global apple domination plans into Spanish like so:

```json
{
    "There is one apple|There are many apples": "Hay una manzana|Hay muchas manzanas"
}
```

Feeling adventurous? You can even create more complex pluralization rules which specify translation strings for multiple ranges of values:

```php
'apples' => '{0} There are none|[1,19] There are some|[20,*] There are many',
```

Once you've defined a translation string with all the pluralization options, you can use the `trans_choice` function to retrieve the line for a given "count". In this example, since the count is greater than one, the plural form of the translation string will be returned:

```php
echo trans_choice('messages.apples', 10);
```

You can also define placeholder attributes in your pluralization strings. These placeholders may be replaced by passing an array as the third argument to the `trans_choice` function:

```php
'minutes_ago' => '{1} :value minute ago|[2,*] :value minutes ago',

echo trans_choice('time.minutes_ago', 5, ['value' => 5]);
```

If you want to display the integer value that was passed to the `trans_choice` function, you can use the built-in `:count` placeholder:

```php
'apples' => '{0} There are none|{1} There is one|[2,*] There are :count',
```

Now, if you're feeling rebellious and want to override package language files (hey, we all have our days), here's how: <a name="overriding-package-language-files"></a>

<img src="https://media.giphy.com/media/xUOtz6d9qj1iI/giphy.gif" alt="rebel flag gif">

"Rules are meant to be broken!" – Anonymous, probably a Laravel developer.

 Alrighty, let's get our linguistic ninja hats on! Some packages might roll into town with their own language files, like a traveling troupe of polyglot performers. Instead of breaking bread with these language-loving vagabonds and trying to rewrite their entire act (core files), you can grab the spotlight by placing your own files in the `lang/vendor/{package}/{locale}` directory.

Let's say you're feeling a bit peeved about those English translation strings in `messages.php` from the `skyrim/hearthfire` package and want to give them a good old-fashioned verbose makeover. Well, saddle up, partner! You need to rustle up a language file at: `lang/vendor/hearthfire/en/messages.php`.

In this file, you can rewrite the translation strings that have been giving you sleepless nights (just don't touch the ones you like, or the package might get offended). Any strings you leave untouched will still hitch their wagon to the original language files of the package. Happy translating! 😊