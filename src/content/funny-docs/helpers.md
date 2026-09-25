 # Laravel's Bag O' Tricks!

Dive into the magical world of Laravel helpers, where code sorcery meets the extraordinary. Here's a sneak peek at our enchanted toolkit!

## The Grand Opening Act 🎭
- [The Prologue](#thePrologue)

<a name="thePrologue"></a>

## A Magical Menagerie of Methods 🦄✨
- [Potion Brewing](#potionBrewing)
- [Time Travel](#timeTravel)
- [Snoozing Slumberland](#snoozingSlumberland)
- [Luck of the Lara Draw](#luckOfTheLaraDraw)
- [Pipeline Puppetry](#pipelinePuppetry)
- [URI Unraveling](#URIUnraveling)
- [And More!](#andMore)

<a name="potionBrewing"></a>

### Potion Brewing 🧪
Brew your own custom magic elixirs using these handy helper methods. Mix, match, and marvel at the results!

<a name="timeTravel"></a>

### Time Travel ⏳
Travel through time without a DeLorean or a flux capacitor! With our time-bending helpers, you can calculate dates, format timestamps, and even sleep for a while (if needed).

<a name="snoozingSlumberland"></a>

### Snoozing Slumberland 😴
Need a quick nap? Laravel's got your back. Take a short break and let our helpers handle the rest.

<a name="luckOfTheLaraDraw"></a>

### Luck of the Lara Draw 🎲
Want to add a bit of randomness to your code? Roll the dice with our helpful lottery functions!

<a name="pipelinePuppetry"></a>

### Pipeline Puppetry 🎭🐶
Control the flow of your code like a maestro at the orchestra. Choreograph complex tasks using Laravel's pipeline system.

<a name="URIUnraveling"></a>

### URI Unraveling 🔍
Decipher those tangled URLs with ease! Our helpers will dissect and decode even the most cryptic of links.

<a name="andMore"></a>

### And More! 🎉
There's still more to discover in our Bag O' Tricks, so be sure to explore every corner for hidden gems and secret spells!

 Ahoy there, coding cowpoke! Laravel's not just a shiny new sheriff in town, it's also got a barn full of handy helper functions! Now, you might be thinkin', "What's a helper function?" Well, picture this: you're deep in the wild west of PHP development, and suddenly you need to convert that there integer into a float. Instead of writin' out a long-winded function like a greenhorn, just call on one of Laravel's trusty helpers to do the job quicker than you can say "Yeehaw!"

Now, these ain't your average run-of-the-mill functions. They're the ones that Laravel itself uses to wrangle its herd of features. But fear not, partner! You can lasso 'em and put 'em to work on your own projects too – if they take your fancy, of course.

So, saddle up and let's ride into the dizzying heights of Laravel's global helpers! 🐎

<a name="available-methods"></a>
**Available Methods:**

Laravel's helper functions are a veritable smorgasbord of utility tools to make your life easier. Here's a taste of what they can do:

* `app` - A handy function that gets you access to the application instance, just like asking a friendly saloon keeper for a fresh pint of beer!
* `config` - Retrieve configuration values from your .env file. Handy for keepin' track of all them settings without havin' to squint at 'em through binoculars.
* `route` - Navigate the treacherous waters of routing with ease. It'll guide you from the dusty trail to the golden city like a compass or a map (but way cooler).
* And many, many more! Just remember: these helpers are your trusty sidekicks on the journey through Laravel-land. So, go ahead and lean on 'em when you need a helping hand. 😉

 Ahoy there, Laravel sailors! Dive into the treasure trove of methods we've got for you! But beware, ye be not overwhelmed by a sea of possibilities – these are all neatly organized for easy exploration. Let's set sail on our methodical journey! 🌴

### Arrays and Objects Method List 📜

#### 1. `first()` 🔑
Find the first element in an array (or object key), but don't worry about what it is – Laravel will handle that for you!

#### 2. `last()` 🏁
Find the last one in the pack, much like Captain Jack Sparrow searching for his rum. But with less scurvy and more elegance.

#### 3. `random()` 🎲
Roll the dice! Get a random element from your array (or object value). Remember, luck favors the prepared developer!

#### 4. `sortBy()` 📦
Organize your pirate crew like never before with this method! Sort your arrays (and objects) alphabetically or numerically – it's as easy as walking the plank.

#### 5. `reverse()` 🔄
Turn tails into heads and heads into tails with a single command! Reverse the order of your array in a magical pirate-y way.

#### 6. `slice()` 📖
Cut, slice, and dice your arrays like a pro! Get a smaller or specific part of an array without even raising an eyebrow.

#### 7. `chunk()` ⚓️
Ever wanted to divide and conquer? This method lets you split large arrays into manageable chunks (arrays within arrays), making your life a breeze.

#### 8. `pluck()` 🦍
Pluck apples from a tree, or in this case, values from an array (or object). Perfect for when you need to grab a specific value and make haste!

#### 9. `collapse()` 🌳
Flatten those nested arrays like a pro! Turn multidimensional arrays into a one-dimensional treasure trove of data.

#### 10. `flatMap()` 🔄
Transform and flatten arrays at the same time! It's like having a pirate parrot that can not only talk, but dance too.

#### 11. `map()` ✂️
Remap your world by transforming each element in an array. It's like giving every pirate a new hat and parrot!

#### 12. `each()` 👨‍🎤
Iterate through all the elements in an array (or object), much like telling pirate stories around a campfire.

#### 13. `reduce()` 🌴
Reduce your array to a single value with this powerful method, perfect for when you need to find the sum of all looted gold or count the number of parrots.

Happy exploring! Keep in mind that these methods are just the beginning – there's a whole lot more where that came from! Arrrr! 🏴‍☠️

 ### A Comedy of Arrays & Objects! 🎉🎭

Step right up, folks! It's a theatrical performance starring Arrays and Objects - the dynamic duo of Laravel land! 🌪️🎭

<div class="collection-method-list" markdown="1">

[**Arr. CurtainUp()**](#method-array-accessible)
[**Obj. SetScene(key, value)**](#method-array-add)
[**Arr. ShowProps()**](#method-array-array)
[**Obj. BooleansOnly(), Please!**](#method-array-boolean)
[**Arr. FoldTheLinens()**](#method-array-collapse)
[**Arr. Cross-StitchJoin()**](#method-array-crossjoin)
[**Arr. DivideByTwo(key, value)**](#method-array-divide)
[**Obj. DotCompose()**](#method-array-dot)
[**Arr. EverybodyReady?**](#method-array-every)
[**Arr. ExitStageLeft(key)**](#method-array-except)
[**Arr. ExceptValues(value)**](#method-array-except-values)
[**Arr. IsItExist?**](#method-array-exists)
[**Arr. FirstOneOnStage**](#method-array-first)
[**Arr. IronTheCurtains()**](#method-array-flatten)
[**Obj. FloatingPointsOnly(), ThankYouVeryMuch!**](#method-array-float)
[**Arr. ForgetThisKey**](#method-array-forget)
[**Obj. BornFromArray, RaisedByLaravel!**](#method-array-from)
[**Arr. Get.The.Popcorn()**](#method-array-get)
[**Arr. HasAnyoneSeenMyKey?**](#method-array-has)
[**Arr. HasAllBeensaw?**](#method-array-hasall)
[**Arr. HasAnyOneArrivedOnStage?**](#method-array-hasany)
[**Obj. IsItAssociative(key, value)?**](#method-array-isassoc)
[**Obj. IsItList(key, value)?**](#method-array-islist)
[**Arr. JoinTheActs()**](#method-array-join)
[**Arr. KeyByTheCharacter(key)**](#method-array-keyby)
[**Arr. LastOneToLeave, TurnOffTheLights**](#method-array-last)
[**Arr. MapItOut()**](#method-array-map)
[**Arr. MapSpreadTheLove()**](#method-array-map-spread)
[**Arr. MapWithKeys(key, value)**](#method-array-map-with-keys)
[**Arr. OnlyTheMainActsPlease**](#method-array-only)
[**Arr. OnlyValuesAllowed()**](#method-array-only-values)
[**Arr. PartitionTheAudience**](#method-array-partition)
[**Arr. PluckTheFeathers(key)**](#method-array-pluck)
[**Arr. PrependWithBow(key)**](#method-array-prepend)
[**Arr. PrependKeysWithCurtains(key)**](#method-array-prependkeyswith)
[**Arr. PullTheRope(key)**](#method-array-pull)
[**Arr. PushTheDoorOpen()**](#method-array-push)
[**Obj. QueryTheAudience(key)**](#method-array-query)
[**Arr. RandomlySelectActors()**](#method-array-random)
[**Arr. RejectTheBoos()**](#method-array-reject)
[**Arr. SelectYourSeats(key)**](#method-array-select)
[**Obj. StageSetter(key, value)**](#method-array-set)
[**Arr. ShuffleTheLineUp()**](#method-array-shuffle)
[**Arr. SolePerformer()**](#method-array-sole)
[**Arr. SomewhereOverTheRainbow()**](#method-array-some)
[**Arr. SortTheProgram()**](#method-array-sort)
[**Arr. DescendingOrder, Please!**](#method-array-sort-desc)
[**Arr. RecursivelySortTheActs()**](#method-array-sort-recursive)
[**Obj. StringifyTheLines(key)**](#method-array-string)
[**Arr. TakeMySeat(count)**](#method-array-take)
[**Arr. ToCssClasses(key)**](#method-array-to-css-classes)
[**Arr. ToCssStyles(key)**](#method-array-to-css-styles)
[**Arr. UndoTheDot()**](#method-array-undot)
[**Obj. WhereIsTheKey(key)**](#method-array-where)
[**Arr. WhereNotNull(key)**](#method-array-where-not-null)
[**Arr. WrapItUp(key)**](#method-array-wrap)
[**data_fill()**](#method-data-fill)
[**data_get()**](#method-data-get)
[**data_set()**](#method-data-set)
[**data_forget()**](#method-data-forget)
[**head()**](#method-head)
[**last()**](#method-last)
</div>

<a name="numbers-method-list"></a>
Now that's a full house of methods for Arrays and Objects! Go forth and create your masterpieces, Laravel thespians! 🎭🎉

 Ahoy there, Laravel sailor! Let's dive into the delightful world of numbers where everything is not just 'numbers', but a jolly adventure. Buckle up as we explore these numerical escapades:

### Shenanigans with Figures

<div class="collection-method-list" markdown="1">

[Number::abbreviate](#great-number-abbreviator)
[Number::clamp](#number-chaperone)
[Number::currency](#money-magician)
[Number::defaultCurrency](#coin-connoisseur)
[Number::defaultLocale](#global-lingo-guy)
[Number::fileSize](#disk-space-dude)
[Number::forHumans](#people-pleaser)
[Number::format](#number-dress-up)
[Number::ordinal](#counting-by-the-ths)
[Number::pairs](#number-buddies)
[Number::parseInt](#whole-number-wizard)
[Number::parseFloat](#decimal-diviner)
[Number::percentage](#number-ratio-rocker)
[Number::spell](#number-whisperer)
[Number::spellOrdinal](#number-storyteller)
[Number::trim](#number-neat-freak)
[Number::useLocale](#locale-lobbyist)
[Number::withLocale](#locale-wingman)
[Number::useCurrency](#currency-connoisseur)
[Number::withCurrency](#money-bodyguard)
</div>

<a name="paths-method-list"></a>

There you have it, Laravel mateys! A humorous take on the number methods available to spice up your application. So go ahead and make numbers more fun in your Laravel ventures! 🥳🎉✨

 ### Navigating the Laravel File System: A Comical Guide to Essential Paths! 🗺️🌍

Hop aboard, fellow code jockeys! Let's embark on a whimsical journey through the winding paths of our Laravel project. Here are some key locations that you won't want to miss!

<div class="collection-method-list" markdown="1">

[app_path](#method-app-path) - The heart and soul of our application, where all the juicy controllers, models, and services reside. Think of it as your secret lair or a wizard's magic tome! 🏰✨

[base_path](#method-base-path) - The grand central station of your Laravel project. It's like the lobby of a luxurious hotel, with all the other paths leading off from here! 🚂🌍

[config_path](#method-config-path) - The control room where you tweak settings to your heart's content. Ever wanted to be an air traffic controller or a mad scientist? This is your chance! 🛰️🔬

[database_path](#method-database-path) - The treasure vault, filled with the precious data of your project. Watch out for the dragon guarding it! 🐲💰

[lang_path](#method-lang-path) - The language lab, where you can change the tongue of your Laravel application. You'll find English, Klingon, and Esperanto here, among others. 🌍🗣️

[public_path](#method-public-path) - The public square of our project, where visitors (browsers) interact with our beautiful website or API. It's the lifeblood of your creation! 🌐🎉

[resource_path](#method-resource-path) - A vast library filled with resources that aren't controllers, models, or views. They are the secret ingredients that make your Laravel app truly magical! 📚🔮

[storage_path](#method-storage-path) - The attic of your project, where temporary files and cache reside. It's a bit dusty up there, but it's all part of the charm! 🏰🕰️

</div>

<a name="urls-method-list"></a>

 Ahoy there, coders! Let's embark on a jolly journey through the seas of Laravel URLs!

### Navigational Nautical Necessities 🚢

<div class="collection-method-list" markdown="1">

[Action](#Ahoy-action)
[Asset](#Anchors-away-asset)
[Route](#Captain-obvious-route)
[Secure Asset](#Life-jacket-secure_asset)
[Secure URL](#Treasure-chest-secure_url)
[To Action](#Sailing-to-action)
[To Route](#GPS-coordinates-to-route)
[URI](#International-Rescue-Incoming-uri)
[URL](#Compass-compass)

</div>

<a name="miscellaneous-method-list"></a>

#### Action 🚢 (Anchor not available)

This method is like a compass pointing directly to an action. Use it when you want to navigate to a specific destination within your application!

    App\Http\Controllers\HomeController@index();

#### Asset 🚢 (Cargo hold filled with assets)

Need some static files? Use the asset method to fetch them without worrying about HTTPS!

    <img src="{{ asset('images/my-image.jpg') }}" alt="my image.jpg') }}">

#### Route 🚢 (Charting your course)

The route method is like a map for your application's URLs. It helps you navigate to specific routes with ease!

    {{ route('home') }}

#### Secure Asset 🚢 (Locked cargo hold)

When sailing the seas of the web, sometimes it's necessary to secure your assets. Use secure_asset for HTTPS-encrypted static files!

    <img src="{{ secure_asset('images/my-image.jpg') }}" alt="my image.jpg') }}">

#### Secure URL 🚢 (Secure seas ahead)

Navigate the web's treacherous waters with secure URLs using this method!

    {{ secure_url('/home') }}

#### To Action 🚢 (Sailing to a destination)

If you want to visit a specific action on a route, use this method. It's like the GPS of Laravel!

    <a href="{{ route('home')->action() }}">Home</a>

#### To Route 🚢 (Setting sail for a new route)

This method helps you find the route associated with a given action. A useful tool when charting your application's URLs!

    {{ route(App\Http\Controllers\HomeController::class) }}

#### URI 🚢 (Uncovering the mysterious coordinates)

The URI method helps you uncover the mysterious URL coordinates of your current position. Useful for revealing hidden treasures within your application!

    {{ url()->current() }}

#### URL 🚢 (Navigating the waters)

This method acts as a compass, helping you traverse the vast seas of the web! It's like saying "I'm going this way!" in Laravel language.

    {{ url('/home') }}

 Ahoy there, Laravel pirates! Here's a swashbuckling list of your favorite magical methods that make sailing the seas of code a breeze. Remember, these aren't just methods, they're your trusty shipmates!

<div class="collection-method-list" markdown="1">

[Abort ye scallywags](#method-abort)
[Abort if we be in danger](#method-abort-if)
[Abort unless we find treasure](#method-abort-unless)
[Get hold of the ship's log (app)](#method-app)
[Navigate the treacherous seas of authentication](#method-auth)
[Steer us back to port](#method-back)
[Beware the beastly password encryption (bcrypt)](#method-bcrypt)
[Empty the hold, ye matey! (blank)](#method-blank)
[Broadcast our adventures across the seven seas](#method-broadcast)
[Broadcast if we've found a map](#method-broadcast-if)
[Broadcast unless the parrot speaks falsehoods](#method-broadcast-unless)
[Cache our treasure map (cache)](#method-cache)
[Uncover the ship's hidden secrets (class_uses_recursive)](#method-class-uses-recursive)
[Collect your loot (collect)](#method-collect)
[Configure the compass settings (config)](#method-config)
[Set the course (context)](#method-context)
[Store our cookies for later (cookie)](#method-cookie)
[Add a secret key to our chest (csrf_field)](#method-csrf-field)
[Fetch the CSRF token (csrf_token)](#method-csrf-token)
[Decode the mysterious message (decrypt)](#method-decrypt)
[Drop dead documents (dd)](#method-dd)
[Dispatch a secret mission (dispatch)](#method-dispatch)
[Dispatch the mission with urgency (dispatch_sync)](#method-dispatch-sync)
[Dump ye olde data (dump)](#method-dump)
[Encrypt our communication (encrypt)](#method-encrypt)
[Peek at the environment (env)](#method-env)
[Raise the event of a kraken attack! (event)](#method-event)
[Create a phantom ship (fake)](#method-fake)
[Check if our treasure chest is full (filled)](#method-filled)
[Spread the news (info)](#method-info)
[Use this in plain text (literal)](#method-literal)
[Summon the logbook keeper (logger)](#method-logger)
[Add a new method to our ship's log (method_field)](#method-method-field)
[Set the current date and time (now)](#method-now)
[Retrieve the last stolen goods (old)](#method-old)
[Do this once, then forget it (once)](#method-once)
[Check for optional treasure (optional)](#method-optional)
[Guard our treasures like a hawk (policy)](#method-policy)
[Redirect us to another island (redirect)](#method-redirect)
[Report ye suspicions (report)](#method-report)
[Report if we've found the lost city (report_if)](#method-report-if)
[Report unless our compass lies (report_unless)](#method-report-unless)
[Fetch a request from the captain (request)](#method-request)
[Rescue us from danger (rescue)](#method-rescue)
[Retrieve a crew member (resolve)](#method-resolve)
[Prepare a message for delivery (response)](#method-response)
[Retry the mission if we fail (retry)](#method-retry)
[Store our journey's memories (session)](#method-session)
[Tap into a secret treasure (tap)](#method-tap)
[Throw an error if we encounter danger (throw_if)](#method-throw-if)
[Throw an error unless the parrot speaks true (throw_unless)](#method-throw-unless)
[Find out today's date (today)](#method-today)
[Uncover the ship's hidden traits (trait_uses_recursive)](#method-trait-uses-recursive)
[Transform our loot (transform)](#method-transform)
[Validate our treasure (validator)](#method-validator)
[Retrieve a single piece of treasure (value)](#method-value)
[Call upon Poseidon's temple (view)](#method-view)
[Add some cargo to our ship (with)](#method-with)
[Only when we have the right key (when)](#method-when)

</div>

<a name="arrays"></a>
Now, that's quite a list, isn't it? Don't forget to keep these shipmates close as you navigate your Laravel adventures! Arrrr!

 ### Arrays & Objects: The Siblings of Data Management 🎉🤴️👰🏼

Welcome to the family affair of data organization! Here in this neighborhood, we've got two cool cousins: Arrays and Objects. You'll love hanging out with them and learning their ways.

<a name="method-array-accessible"></a>

#### Accessing Array Elements 🔑

Arrays are like a bag of Skittles, each item has its own numbered spot. If you want to grab the red one (index 2), you can do it like this:

```php
$skittles = ["red", "green", "yellow", "blue"];
echo $skittles[2]; // Outputs: red
```

But be careful, PHP arrays are 0-indexed. So if you're hankering for the green Skittle (index 1), don't forget to subtract one:

```php
echo $skittles[1] - 1; // Outputs: green
```

##### Array Key-Value Pairs 🧳🛒

Sometimes, you might want to store more than just data, like keeping track of your skateboard collection:

```php
$skateboards = [
    "red" => ["brand" => "Tony Hawk", "year" => 1982],
    "green" => ["brand" => "Birdhouse", "year" => 2005]
];
echo $skateboards["red"]["year"]; // Outputs: 1982
```

Now you're not only munching Skittles but also skating through data like a pro! 🛹🎽️🚀

<a name="method-object-accessible"></a>

##### Accessing Object Properties 🔍🧭

Objects are a step up from arrays, offering properties with names instead of numbers. They're like your best friend with whom you share stories and experiences:

```php
$friend = new \stdClass;
$friend->name = "Jenny";
$friend->age = 25;
echo $friend->name; // Outputs: Jenny
```

##### Dynamic Properties in Objects 🌟✨

You can even add properties on the fly, like if your friend decided to learn how to play the guitar:

```php
$friend->playsGuitar = true;
echo $friend->playsGuitar; // Outputs: true
```

So there you have it! With Arrays & Objects in Laravel, you're well-equipped to handle any data challenge that comes your way. Happy coding, and remember: data organization is the new black! 👗🕺️

 Ahoy there, coders! Let's dive into the whimsical world of Laravel array shenanigans with the `Arr::accessible()` method. This cheeky little fellow is like a bouncer at a prestigious party, only instead of checking IDs, it verifies if your array values are ready to mingle (i.e., array accessible).

```php
use Illuminate\Support\Arr; // Remember, it's all about the Arr-nold Schwarzenegger of arrays!
use Illuminate\Support\Collection; // Because who doesn't love a good collection?

$isAccessible = Arr::accessible(['a' => 1, 'b' => 2]); // True story, these keys and values are getting in without any hassle.

// true

$isAccessible = Arr::accessible(new Collection); // A Collection, eh? That's a fancy way of saying "I'm array-friendly". Verified!

// true

$isAccessible = Arr::accessible('abc'); // Oh dear, this string's not playing by the rules. It's getting the boot, I'm afraid.

// false

$isAccessible = Arr::accessible(new stdClass); // Well, this new stdClass is just standing there like a lost puppy. No keys or values to be found! Rejected!

// false
```

In case you were wondering, the `Arr::accessible()` method helps you figure out if your value can play nice in the array sandbox. Whether it's an associative array, a Collection, or even a string trying to masquerade as an array, our trusty bouncer is there to keep things tidy. Now go forth and let your arrays dance the night away! 💃🕺

 Ahoy there, code wranglers! Sail the seas of data organization with the mighty `Arr::add()` method - a pirate's treasure for your Laravel collections!

When you see a key shanty and it ain't got no value jolly roger, hoist the `Arr::add()` flag! It'll add a swashbuckling new key-value pair to yer array without so much as batting an eye at any duplicate keys.

```php
use Illuminate\Support\Arr;

$pirate_inventory = Arr::add(['ship' => 'Jolly Roger', 'parrot' => null], 'grog', 50);
// ['ship' => 'Jolly Roger', 'parrot' => null, 'grog' => 50]
```

No need to tiptoe around ye arrays, `Arr::add()` is always ready for a swabbie to add new key-value pairs without fear of duplicates. If a key is already in port with a null value, it'll give that key a fresh new rum ration and leave the old one high and dry!

So, hoist the `Arr::add()` flag and set sail on a voyage of organized data! Yarr!

 Ahoy there! Buckle up for a delightful journey into the heart of arrays in Laravel's world. Let's dive right into the `Arr::array()` method, a mighty tool that navigates the labyrinthine landscapes of your nested data structures like a seasoned cartographer.

This swashbuckling function works much like its trusty sidekick, [Arr::get()](#method-array-get), but with an added twist: it won't tolerate any non-array impostors in its path! If the requested value turns out to be a jester instead of a knight (i.e., not an array), it will hurl an `InvalidArgumentException` in protest.

```php
use Illuminate\Support\Arr;

$array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

$value = Arr::array($array, 'languages');
// ['PHP', 'Ruby'] - Mission accomplished!

$value = Arr::array($array, 'name');
// Oops! Throws an InvalidArgumentException because 'name' is a jester, not a knight!
```

So next time you find yourself lost in a sea of nested arrays and need to pluck out a value like a skillful pirate, remember your trusty companion, `Arr::array()`, always ready to help navigate those treacherous waters. Happy coding, mateys! 🏴‍☠️😉

 Ahoy there, intrepid array adventurer! Dive deep into the ocean of your data with the `Arr::boolean()` method - it's like a sonar for booleans!

Just as our trusty `Arr::get()` companion does, this function plunges into a multi-layered array using "dot" notation. But unlike the chill sea turtle, it won't tolerate impostors among the boolean fishes: if it encounters anything other than true or false, it'll throw an `InvalidArgumentException` fit!

```bash
$array = ['name' => 'Joe', 'available' => true];

// Catch a shiny true fish!
$value = Arr::boolean($array, 'available');

// true (yeah, we all know what that means)

// But beware the treacherous 'name' key!
$value = Arr::boolean($array, 'name');

// Oops! Throws an InvalidArgumentException!
```

Now, if only we could teach it to find buried treasure... 🏴‍☠️

 Ahoy there! Set sail for the seas of simplification with Laravel's `Arr::collapse()`, the pirate who vanquishes the dreaded multi-array beasts! You see, when you've got a shipwreck of arrays (like a treasure chest full of 'em), our humble helper will scoop them up and dump 'em all into one grand pirate galleon.

```php
use Illuminate\Support\Arr;

$treasure = Arr::collapse([["Bounty 1", "Golden Doubloons", "Captain's Log"], ["Rum", "Peg Leg Prosthetic", "Parrot Companion"], ["Guns", "Map to X Marks the Spot", "Jolly Roger"]]);

// ["Bounty 1", "Golden Doubloons", "Captain's Log", "Rum", "Peg Leg Prosthetic", "Parrot Companion", "Guns", "Map to X Marks the Spot", "Jolly Roger"]
```

Bye-bye to those annoying nested arrays, hoist the Jolly Roger of a single array and sail into victory with Laravel's `Arr::collapse()`. Arr-r you ready? 🏴‍☠️🔓🎉

 Ahoy there, code pirates! Prepare to hoist the sails of syntactic savvy and set sail on a journey to the bountiful lands of Laravel Arrays! Today's destination: `Arr::crossJoin()`, a method so delightful it makes a captain want to dance a jig on the forecastle deck.

You see, matey, this magical method cross joins given arrays, creating a Cartesian product teeming with all possible permutations! That's right, it's a veritable treasure trove of combined data! Here's a wee example to tickle your fancy:

```php
use Illuminate\Support\Arr;

$banquetTable = Arr::crossJoin([1, 2], ['a', 'b']);
/*
    [
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
    ]
*/

$grandFeast = Arr::crossJoin([1, 2], ['a', 'b'], ['I', 'II']);
/*
    [
        [1, 'a', 'I'],
        [1, 'a', 'II'],
        [1, 'b', 'I'],
        [1, 'b', 'II'],
        [2, 'a', 'I'],
        [2, 'a', 'II'],
        [2, 'b', 'I'],
        [2, 'b', 'II'],
    ]
*/
```

Now, isn't that a sight for sore eyes? You can almost hear the clinking of tankards and laughter echoing off the virtual banquet hall walls! Just remember to keep an eye on your arrays—the bigger they be, the more combinations ye'll find! Happy sailing, me hearties!

 Ahoy there, coders! Prepare to embark on a nautical adventure with the Laravel's Arr:divide() method, a pirate's treasure trove of array splitting goodness!

This swashbuckling function, much like Jack Sparrow's compass, guides you through your array, separating its keys from values, just the way ye like it.

Here be an example to steer by:

```php
use Illuminate\Support\Arr;

[$keys, $values] = Arr::divide(['name' => 'Desk']);

// $keys: ['name']

// $values: ['Desk']
```

In this example, the keys and values of our treasure map (or array) are neatly separated. Arrr matey! Now ye can navigate your data with ease! Just remember, it's always anchors aweigh with Arr::divide()! 🏴‍☠️⚓️⛵️

 Ahoy there, mateys! Let's set sail into the seas of Laravel enlightenment with the `Arr::dot()` method! This here function isn't just a pirate's treasure map; it's your ticket to a flatter, simpler array world.

Picture this: you've got a multi-dimensional array that looks like a labyrinth of nested containers. With `Arr::dot()`, we turn that into a single-level swashbuckler, using "dot" notation to indicate depth!

```php
Arr (the parrot on our shoulder) :: dot($array); // Don't forget to bring Arr along!

$array = [
    'products' => [
        'desk' => [
            'price' => 100,
        ],
    ],
];

// And voila! $flattened becomes:
$flattened = ['products.desk.price' => 100];
```

Now that's what I call a map worth navigating!

 Ahoy there, coding pirates! Prepare to walk the Arr-rhythm of success with `Arr::every()`, the array-navigating parrot that squawks only truths! 🦜

```php
Use yon Illuminate\Support\Arr;

$arr = [1, 2, 3];

If ye feed `Arr::every($array)` with a mischievous function that checks if each number is above the deck (`fn ($i) => $i > 0`), she'll proudly squawk "Aye-aye, captain!" 📣

But if yer function asks for numbers overboard (`fn ($i) => $i > 2`) – shiver me timbers! She'll squawk a disheartening "No way, matey!" ☠️
```

<a name="method-array-except"></a>
Now buckle up for the Arr-rival of our next swashbuckling method: `Arr::except()` – the array's faithful first mate! But watch out for its tricky ways!

```php
Use yon Illuminate\Support\Arr;

$arr = ['anchor', 'parrot', 'pirate'];

If ye want to keep only the landlubber's favorite food and your trusty parrot, call `Arr::except($arr, ['food', 'parrot'])`. And she'll return `['pirate']` like a well-trained first mate should! 🏴‍☠️
```

 Ahoy there, Laravel enthusiasts! Let's take a jolly sail through the sunny shores of `Arr::except()`, shall we? This cheerful method is like a pirate who knows exactly which loot to jettison from your treasure chest (array).

```php
use Illuminate\Support\Arr;

$loot = ['name' => 'Desk', 'price' => 100]; // Our booty, er... array

$filtered = Arr::except($loot, ['price']); // Arr tells the pirate to toss overboard anything that has 'price'

// ['name' => 'Desk'] - Now we're left with just the ol' desk!
```

Piracy and arrays, who knew they had so much in common? With `Arr::except()`, your array-sailing adventures will never be the same again! Yarr! 🏴‍☠️🐙

 Ahoy there, shipmates! Sail through the seas of data manipulation with `Arr::exceptValues()`, a pirate's best friend in Laravel!

This swashbuckling method is just what you need to clear the deck of unwanted scallywags from your array:

```php
use Illuminate\Support\Arr;

$array = ['foo', 'bar', 'baz', 'qux'];
Arr::exceptValues($array, ['foo', 'baz']); // ['bar', 'qux'] - Now you're left with only the parrots that didn't steal your grog!
```

You can even set sail with strict type comparisons using the `strict` argument:

```php
use Illuminate\Support\Arr;

$array = [1, '1', 2, '2'];
Arr::exceptValues($array, [1, 2], strict: true); // ['1', '2'] - Only the landlubbers with their feet dry can sail on this ship!
```

Yarr matey, happy traversing those treacherous arrays with `Arr::exceptValues()`!

 Ahoy there, shipmates! Sail the seas of arrays with the `Arr::exists()` - the buccaneer's best friend! No more wrestling with unwieldy data structures like a greenhorn at sea! 🤠

Want to know if old Captain Jack Sparrow is hidden amongst your booty? Fear not, `Arr::exists()` is here to help you find him without making Davy Jones' Locker your new home!

```php
use Illuminate\Support\Arr;

$array = ['name' => 'John Doe', 'age' => 17];
$pirate_found = Arr::exists($array, 'name'); // Setting sail for treasure, matey!

// $pirate_found is now true, and we've set course for port with our beloved Captain Jack!

Now, if you're hunting for the pirate's payday (or salary as some call it), `Arr::exists()` won't find any gold doubloons - just an empty chest awaits ye!

```php
$no_salary = Arr::exists($array, 'salary'); // Alas, no treasure found!
```

Happy sailing, and may you always find the buried treasure you seek with `Arr::exists()`! ☠️🏴‍☠️

 Ahoy there! Buckle up for a lively dive into Laravel's `Arr::first()`, the method that'll make your array adventures less of a wild goose chase and more like finding a four-leaf clover on a windy day.

This nifty little helper grabs the initial element from an array, but with a twist! It only snags the element if it passes your custom truth test - a bit like a bouncer at a club, except friendlier and less likely to judge your fashion sense. 🤓

Here's an example of how to use it:

```php
use Illuminate\Support\Arr;

$array = [100, 200, 300];

// Here we're saying "Hey `Arr::first()`, only give me the first number that is greater than or equal to 150!"
$initial_dance_hit = Arr::first($array, function (int $value, int $key) {
    return $value >= 150; // If a number is greater than or equal to 150, it passes the test! 🎉
});

// And lo and behold, out comes 200!
```

Thirsty for more? You can even set a default value in case no element meets your requirements. It's like having an extra lifeline on a game show!

```php
use Illuminate\Support\Arr;

// If nothing in the array is greater than 150, we'll get a default value of "Bummer times!" instead of `null`.
$default_value = "Bummer times!";
$initial_dance_hit = Arr::first($array, function (int $value, int $key) {
    return $value >= 150; // If a number is greater than or equal to 150, it passes the test! 🎉
}, $default_value);
```

So there you have it! Give `Arr::first()` a spin, and make your array journey less of a guessing game and more like winning the lottery... without having to buy a ticket first. 😉

 Oh, the joys of coding! Ever found yourself wrestling with a multi-dimensional array that's as complex as a Rubik's cube on steroids? Fear not, my friend! Meet `Arr::flatten()` - your personal un-nesting coach. This method takes your multi-level madness and transforms it into a single-level serenity.

Just imagine this scene: You've got an array that looks like a Russian nesting doll, but you don't want to break a sweat trying to de-dollify it. All you gotta do is call `Arr::flatten()` and watch in awe as your multi-dimensional array morphs into a simpler, flatter version of itself.

```php
use Illuminate\Support\Arr; // Don't forget to import this magic wand!

$array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

$flattened = Arr::flatten($array);

// Voila! You're left with a lovely single-level array: ['Joe', 'PHP', 'Ruby']
```

Life's too short to be dealing with complex arrays, right? So let `Arr::flatten()` handle the heavy lifting while you sip your favorite coding beverage and marvel at the beauty of simplicity.

 Ahoy there! Steer clear of numerical catastrophes with Laravel's `Arr::float()` - the array navigator for number-crunchers! This nifty little method dives deep into your nest-o-arrays, surfacing a value just like our trusty friend `Arr::get()`, but with a floaty twist!

```php
use Illuminate\Support\Arr;

$pirateTreasure = ['name' => 'Long John Silver', 'goldCoins' => 5000.0];

// Aye, 5000 gold coins!
$value = Arr::float($pirateTreasure, 'goldCoins');

// Alas, no gold for ol' Joe...
$value = Arr::float($pirateTreasure, 'name');
```

Remember, matey, if you ask it to fetch a value that ain't floatin', `Arr::float()` will throw an `InvalidArgumentException`, so keep your swabbie's sharp and don't confuse the numbers with other scurvy seafarers!

 Ahoy there! Sailors of the PHP sea, hoist your sails for a tale of epic array forgetfulness! Presenting `Arr::forget()`, the pirate who navigates through the murky depths of nested arrays to wipe out unwanted booty (key-value pairs) using the mystical "dot" notation!

```php
Use yer old compass, Illuminate\Support\Arr;

$treasure_map = ['products' => ['desk' => ['price' => 100]]];

Arr::forget($treasure_map, 'products.desk');

// ['products' => []] - Arr be aye ridin' off with that pesky desk price!
```

Don't let your arrays become overrun with useless buccaneers and booty! Use `Arr::forget()`, the array pirate, to maintain your shipshape data structures. Yarr-ghastly fun and efficient!

 Ahoy there, Laravel pirate! Let's dive into the treasure trove of array manipulation with the `Arr::from()` method! This swashbuckling helper converts your run-of-the-mill pirate loot (PHP arrays, objects, and more) into a humble ol' array.

But wait, there's plunder for everyone! It supports some popular Laravel interfaces like `Arrayable`, `Enumerable`, `Jsonable`, and `JsonSerializable`. Fancy schmancy, eh?

And don't worry about those pesky `Traversable` or `WeakMap` instances giving you trouble. The `Arr::from()` method handles them with the dexterity of a seasoned swordsman!

```php
use Illuminate\Support\Arr;

// Ain't that a fancy object, matey!
(object) ['foo' => 'bar'] ➔ Arr::from((object) ['foo' => 'bar']) // ['foo' => 'bar']

// A `TestJsonableObject` that can convert itself into JSON
class TestJsonableObject implements Jsonable
{
    public function toJson($options = 0)
    {
        return json_encode(['foo' => 'bar']);
    }
}

Arr::from(new TestJsonableObject) // ['foo' => 'bar']
```

Yarr, matey! With `Arr::from()`, your array treasure chest will be overflowing with loot in no time!

 Ahoy there, seafarers! Set sail with the `Arr::get()` - a swashbuckling Laravel method that'll make your array navigation as smooth as Captain Barbossa's pirate accent. No more tedious traversing through deep sea arrays, just point and plunder like a seasoned treasure hunter!

```php
use Illuminate\Support\Arr;

$treasure_map = ['products' => ['desk' => ['price' => 100]]];

$gold_coins = Arr::get($treasure_map, 'products.desk.price');

// 100 gold coins (but watch out for the cursed Aztec gold!)
```

The `Arr::get()` is so versatile it's a one-eyed pirate with a parrot on its shoulder – equipped to handle missing keys! If you find yourself at the end of the plank without a key, it'll gracefully provide an alternative – a default value that'll keep your ship afloat.

```php
use Illuminate\Support\Arr;

$savings = Arr::get($treasure_map, 'products.desk.discount', 0);

// 0 savings (you may want to start digging for buried treasure!)
```

So, anchor your ship and grab your eyepatch, it's time to explore the depths of arrays with the `Arr::get()` method!

 Ahoy there! Set sail with us into the charming world of Laravel's `Arr::has()` method, a swashbuckling adventurer in the seas of your arrays!

Now, this isn't just any ordinary pirate parleying with your data – it's a sophisticated squire checking if items or even buried treasures (arrays) lurk within the depths of your hoard (array). It does so using a nifty "dot" notation for some old-school treasure map magic!

Here's a sea shanty to help you remember:

```php
use Illuminate\Support\Arr; // Don your pirate hat and hoist the Jolly Roger!

$array = ['product' => ['name' => 'Desk', 'price' => 100]]; // A chest full of booty awaits!

$contains = Arr::has($array, 'product.name'); // Ahoy, is 'Desk' in our array?

// Aye aye, captain! It be true!

$contains = Arr::has($array, ['product.price', 'product.discount']); // Arrgh! Is '100' or 'discount' found?

// Alas, me hearties, the answer is no!
```

So set your compasses true north and sail onward with `Arr::has()`. Yarr matey, we hope this made your coding adventure a little more fun!

 Ahoy there, coders! Brace yourself for a rollercoaster ride through the bewildering world of Laravel array manipulation with our new buddy `Arr::hasAll()`. This little powerhouse will have you dancing like Taylor Swift on a PHP keypad in no time! 💃🎤

Wanna know if your array is chock-full of certain keys? Look no further! With "dot" notation prowess, `Arr::hasAll()` will check if every specified key you provide has a place in the sun (or shade, as the case may be) within your given array. Here's an example to tickle your funny bone:

```php
use Illuminate\Support\Arr;

$array = ['name' => 'Taylor', 'language' => 'PHP'];

// "Name" has a place in the sun (yeehaw!)
Arr::hasAll($array, ['name']); // true

// Both "Name" and "Language" are hanging out together (double yeehaw!)
Arr::hasAll($array, ['name', 'language']); // true

// Alas, there's no room in the array for "IDE" (bummer)
Arr::hasAll($array, ['name', 'IDE']); // false
```

With `Arr::hasAll()`, you can now keep track of all your favorite keys and ensure they're hanging out where they belong. Happy coding, and remember: in the world of Laravel, the best coders always find a way to have fun! 🎉🚀🌈

 Ahoy there, coding pirates! Steer your ships to the shores of Laravel's `Arr::hasAny()` method, a swashbuckling array adventure awaits! 🏴‍☠️

This isn't just any ordinary method, no siree! It's the array-scouring, treasure-hunting tool you didn't know you needed until now.

```php
Arrange your loot, ye scurvy dogs:
use Illuminate\Support\Arr;

Prepare your vessel, $array:
$array = ['product' => ['name' => 'Desk', 'price' => 100]];

Now, let's hoist the Jolly Roger of search, arranging for `Arr::hasAny` to scour this treasure map:
$contains = Arr::hasAny($array, 'product.name');

Boom! Land ho! We've got a match! 🏴‍☠️🌴

But that's not all, matey! With `Arr::hasAny`, you can search for multiple booty items at once:
$contains = Arr::hasAny($array, ['product.name', 'product.discount']);

Both 'Desk' and a discount? Aye, a bountiful haul indeed! 🤘

But beware, if ye search for items not present in your treasure chest, prepare to hear the dreaded "Arrr...not here!"
$contains = Arr::hasAny($array, ['category', 'product.discount']);

Fear not, though! The method will only return false when it can't find a match among the listed items. 🌵
```

Sail on, coding buccaneers! `Arr::hasAny()` is here to help you navigate your way through Laravel's treasure trove of arrays with ease and humor! 🎉🏴‍☠️

 Ahoy there, coding buccaneers! Let's dive into the treasure trove of Laravel's `Arr::integer()` method - a veritable pirate's chest brimming with numerical goodness!

This swashbuckling function sails through your deeply nested arrays like Captain Jack Sparrow navigating the high seas, using the "dot" notation (just like its trusty sidekick, `Arr::get()`). But, unlike Jack's mysterious compass, it knows exactly what it's looking for - an integer!

```php
use Illuminate\Support\Arr;

$arr = ['name' => 'Joe', 'age' => 42];

$gold = Arr::integer($arr, 'age'); // 42, just as you asked!

$value = Arr::integer($arr, 'name'); // Arrgh, matey! That ain't an integer. Prepare for a storm of errors!
```

In the unlikely event that `Arr::integer()` stumbles upon something other than an integer, it will holler like a sailor with a broken leg and throw an `InvalidArgumentException`. So keep your arrays neat and tidy, or face the wrath of this sea-worthy function!

 Ahoy there, coding pirates! Set sail for the shores of associative arrays with Laravel's mighty `Arr::isAssoc()` method! This trusty navigation tool will help you discern whether your array has more in common with Jack Sparrow or Long John Silver.

To explain: if your array resembles a buccaneer's treasure map, with keys named 'product', 'price', and 'name', rather than a numbered list of plunder like '1', '2', and '3', then hoist the Jolly Roger flag - you've got yourself an associative array!

```php
use Illuminate\Support\Arr;

$associativity = Arr::isAssoc(['product' => ['name' => 'Desk', 'price' => 100]]);

// Avast, me hearties! This be a true associate!

$associativity = Arr::isAssoc([1, 2, 3]);

// Nope, sorry matey. That's not an associative array - it's just a rowdy collection of numbers!
```

So hoist the `Arr::isAssoc()` flag and fearlessly navigate through your sea of arrays, knowing which ones have keys as unique as Blackbeard himself! Happy coding, mateys! 🏴‍☠️🚀

 Ahoy there, sailor! Prepare to embark on a journey through the uncharted seas of Laravel arrays with `Arr::isList()` - your compass to discern orderly vessels from chaotic ones!

This swashbuckling method casts its eye over your array like a seasoned captain scanning the horizon. If it finds keys that are sequential integers starting from zero, it'll raise a jolly roger flag saying 'Aye-aye, Captain! It be a list!'

```php
Use yon Arr package, matey!

$isList = Arr::isList(['foo', 'bar', 'baz']);
// Arrgh, true be it!

But hold onto yer hats, because there's a twist! If ye array is more like a treasure chest filled with assorted booty (key-value pairs), the method will turn tail and flee, leaving you with a resounding 'false' echoing in the harbor.

```php
$isList = Arr::isList(['product' => ['name' => 'Desk', 'price' => 100]]);
// False as a parrot's laugh, matey!
```

Yarr, now that ye know the secrets of `Arr::isList()`, ye can navigate the array waters with confidence! Remember to keep an ear out for more exciting nautical adventures in Laravel land! Cheers!

 Ahoy there, code swashbucklers! Let's set sail on a journey through the shimmering seas of Laravel's `Arr::join()` method. This shipshape function serves one primary purpose: to stringify your array elements like a symphony conductor orchestrating a harmonious melody.

Imagine you have a motley crew of front-end frameworks (Tailwind, Alpine, Laravel, Livewire) ready to embark on an adventure. With `Arr::join()`, you can assemble their names into a cohesive voyage like so:

```php
use Illuminate\Support\Arr;

$array = ['Tailwind', 'Alpine', 'Laravel', 'Livewire'];

$allAboard = Arr::join($array, ', '); // "Tailwind, Alpine, Laravel, Livewire"
```

But here's where the real fun begins! The `Arr::join()` method allows you to customize its pirate jargon (the joining string) for the final element of the array. Say, if ye wish to add a swashbuckling "and" before the last item:

```php
$allAboard = Arr::join($array, ', ', ', and '); // "Tailwind, Alpine, Laravel, and Livewire"
```

Now that's what I call a well-versed and seaworthy array! So, hoist the main sail and set course for the shores of efficient code with Laravel's `Arr::join()`. Yarr matey, it's about time you started enjoying your coding journey!

 Ah, the `Arr::keyBy()` method! A magical concoction that takes your humdrum array and turns it into a key-value pair spectacle. Imagine your array as a rowdy party where everyone is shouting over each other, but this method is like the bouncer who says, "Alright mate, you can only stay if you've got a unique ID!"

Let's say you have a motley crew of products (array) that look something like this:

```php
use Illuminate\Support\Arr;

$products = [
    ['id' => 'prod-100', 'name' => 'Desk'],
    ['id' => 'prod-200', 'name' => 'Chair'],
];
```

Now, you want to sort these rowdy characters by their IDs. That's where our method steps in:

```php
$sorted = Arr::keyBy($products, 'id');
```

And voila! A neat and tidy line-up, where each product is identified by its unique ID. It looks like this:

```
[
    'prod-100' => ['id' => 'prod-100', 'name' => 'Desk'],
    'prod-200' => ['id' => 'prod-200', 'name' => 'Chair'],
]
```

You see, in this world of arrays, only the last one to arrive with a specific ID gets to keep their place. That's what we call "survival of the last-est." Enjoy your sorted array, folks! 🎉🥳

 Ahoy there! Prepare to embark on a thrilling journey through the enchanting world of Laravel arrays with your trusty sidekick `Arr::last()` method! This dashing chap is the swashbuckler you've been looking for to help you navigate those complex array shores.

Imagine yourself sailing along on a sunny day, when all of a sudden, you're struck by an insidious pirate named "Unwanted Element." But fear not! With `Arr::last()`, you can fight back with style and precision. By passing your precious array as an argument, along with a function that tests the worthiness of each element (in this case, checking if they're at least 150), it will return the last element to stand triumphantly against the pirate scourge!

```php
use Illuminate\Support\Arr;

$array = [100, 200, 300, 110]; // Our humble sea voyager

$lastPirate = Arr::last($array, function (int $value, int $key) {
    return $value >= 150; // The noble test of worthiness
});

// And behold! The valiant 300 stands victorious!
```

But what happens if all elements are scoundrels? No worries, matey! You can also pass a default value as the third argument to the method. This value will be returned if no element passes your noble truth test:

```php
use Illuminate\Support\Arr;

$last = Arr::last($array, $callback, 'Peg Leg Pat'); // Our trusty companion in case of defeat
```

So hoist the sails and set course for array domination with the help of your loyal friend `Arr::last()`! May it aid you in finding the last treasure among your booty. Arr matey, be sure to share your adventures on social media using #LaravelPirateLife! 🌴⚓️🏴‍☠️

 Ahoy there! Steer clear of the boring array traversals, sailors! Instead, hoist the `Arr::map()` flag and let this magical method navigate your arrays for you!

Imagine you've got a shipwrecked crew of names - 'first' being James T., 'last' Captain Kirk. You can't very well set sail with those sloppy names, now can you? But fear not! `Arr::map()` is here to raise the anchor and refit your crew with proper titles!

```php
use Illuminate\Support\Arr;

$crew = ['first' => 'james', 'last' => 'kirk'];

// Now we set our course for civilized names, aye!
$refittedCrew = Arr::map($crew, function (string $value, string $key) {
    return ucfirst($value);
});

// ['first' => 'James', 'last' => 'Kirk']
```

See? Smooth sailing now that you've got `Arr::map()` on your side! Happy navigating, mateys!

 Ah, the `Arr::mapSpread` method - a magical dance of arrays and closures that would make a Cirque du Soleil performer break into a sweat!

Imagine you've got an array of nested pairs, each one trying to steal the spotlight from its partner. But fear not, for this method is here to bring them all together on the same stage! It passes each little number-pair value into your very own closure, allowing it to strut its stuff and perform whatever trickery you desire:

```php
use Illuminate\Support\Arr;

$array = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
];

$mapped = Arr::mapSpread($array, function (int $even, int $odd) {
    // These numbers are doing a little sum dance, and the audience can't get enough!
    return $even + $odd;
});

/*
    [1, 5, 9, 13, 17]
*/
```

In this whimsical example, our array has been transformed from a chaotic gathering into a well-rehearsed performance, with numbers adding up and the audience cheering in delight!

 Ahoy there, Laravel sailors! Sail the seas of arrays with `Arr::mapWithKeys()`, the nautical navigator that'll help you chart a course through even the roughest data sets.

This method is like inviting a pirate parrot to your array party – it flies over every item, and when it finds something worthy, it passes it off to your callback for some scurvy-free transformations. The catch? Your callback must return an associative array with a single key-value pair, or it'll make Captain Jack Sparrow shake his peg leg in confusion!

```php
use Illuminate\Support\Arr;

$array_treasure_chest = [
    ['name' => 'John', 'job' => 'Salesman', 'email' => 'john@example.com'],
    ['name' => 'Jane', 'job' => 'Marketing Maven', 'email' => 'jane@example.com']
];

$pirate_parrot = Arr::mapWithKeys($array_treasure_chest, function (array $arr_matey, int $key) {
    return [$arr_matey['email'] => $arr_matey['name']];
});

/* Ahoy! Here be the new treasure map:
    [
        'john@example.com' => 'John',
        'jane@example.com' => 'Jane',
    ]
*/
```

Now, swab the decks and set sail for smoother seas with `Arr::mapWithKeys()`. Happy coding! 🏴‍☠️

 Ahoy there, coders! Dive into the sea of arrays with `Arr::only()`, the maritime miracle that'll sail you through choppy data waters. This method, akin to a lighthouse beacon, illuminates only the key-value pairs you desire from your shipwrecked array! ⚓️

```php
use Illuminate\Support\Arr; // Aye aye captain, grab this before setting sail!

$treasure_map = ['name' => 'Desk', 'price' => 100, 'orders' => 10]; // Marking our destination on the map.

$booty = Arr::only($treasure_map, ['name', 'price']); // Hoist anchor and set course for 'name' and 'price'!

// ['name' => 'Desk', 'price' => 100] // Treasure found, mateys!
```

Happy sailing with `Arr::only()`, your trusted navigator in the ocean of arrays!

 Ahoy there, coders! Today, we're gonna embark on a whirlwind adventure with the enigmatic `Arr::onlyValues()` method - your new best friend in array filtering! Let me be your friendly tour guide. 🌴🌴

Imagine you've got yourself a lively bunch of items, say: ['foo', 'bar', 'baz', 'qux']. Now, you're only interested in 'foo' and 'baz'. Instead of manually picking them out like a game of Operation (remember that?), we can just tell our good friend `Arr::onlyValues()` to do the heavy lifting for us:

```php
use Illuminate\Support\Arr; // Don't forget to grab a life jacket, matey!

$array = ['foo', 'bar', 'baz', 'qux'];

$filtered = Arr::onlyValues($array, ['foo', 'baz']); // Sit back and enjoy the ride!

// Lo and behold, we get: ['foo', 'baz'] - just like magic! 🎩
```

Want to add another layer of fun? You can make it strict by passing `true` to the `strict` argument. This means it'll only allow exact matches when filtering:

```php
use Illuminate\Support\Arr;

$array = [1, '1', 2, '2']; // Now we're dealing with numbers... or are we? 🤔

$filtered = Arr::onlyValues($array, [1, 2], strict: true); // Time to get picky!

// And voila! The result is: [1, 2] - only the ones that truly belong made it through. 🏆
```

Happy sifting, and remember: with great power (i.e., `Arr::onlyValues()`) comes great responsibility! 🦸‍♂️🚀

 Ahoy there, code wranglers! Stepping into the ring today, we've got a star performer that's gonna make your PHP array juggling act a whole lot easier: `Arr::partition()` - the magical method that separates the wheat from the chaff in your arrays like a boss!

This fabulous function allows you to sort your array elements based on a simple truth test. Here's an example of it in action:

```php
<?php
Use Illuminate\Support\Arr; // Don't forget to grease up those array muscles!

$numbers = [1, 2, 3, 4, 5, 6];

// Split our numbers like a deck of cards at the poker table:
[$lessThanThree, $greaterOrEqualThree] = Arr::partition($numbers, function (int $i) {
    return $i < 3; // Keep it simple! If it's less than 3, it goes into 'lessThanThree'.
});

// Now let's see the hand we've been dealt:
dump($lessThanThree); // [1, 2] - Ace-Deuce, the classic combo for beginners.
dump($greaterOrEqualThree); // [3, 4, 5, 6] - The big boys are in town!
```

So you see, `Arr::partition()` is the perfect partner to help you wrangle your arrays into shape, just like a seasoned circus ringmaster with a sharp eye for talent!

 Ahoy there! Prepare to embark on a jolly adventure through the sea of arrays with `Arr::pluck()`, your new best friend in Laravel's pirate-ship!

Hoist the mainsail and set course for booty-filled shores, my hearties! Arr::pluck() is here to help you plunder all the treasure chests (arrays) and fetch only the golden doubloons (keys) you seek.

```php
use Illuminate\Support\Arr; // Don your captain's hat and swashbuckle this library!

$array = [
    ['developer' => ['id' => 1, 'name' => 'Taylor']],
    ['developer' => ['id' => 2, 'name' => 'Abigail']],
]; // Treasure chests full of developers' details!

$names = Arr::pluck($array, 'developer.name'); // Sail to 'developer.name' and bring back the booty!

// ['Taylor', 'Abigail'] // Yarr, we've plundered their names!
```

But wait, me hearties! If ye be a picky sort, ye can even demand that your loot come keyed:

```php
$names = Arr::pluck($array, 'developer.name', 'developer.id'); // Ask for names indexed by their id!

// [1 => 'Taylor', 2 => 'Abigail'] // Our plundered bounty now neatly organized!
```

Avast ye mateys, Arr::pluck() be a mighty useful tool in yer navigation kit! Hoist the Jolly Roger and set sail on the high seas of Laravel with this powerful technique!

 #### `Arr::prepend()` {.collection-method, .jolly-good-fun}

Ahoy there! The `Arr::prepend` method is like the bouncer at a swanky party, but instead of keeping unwanted guests out, it's all about sliding newcomers to the front of the queue – AKA an array. Here's a jolly good example:

```php
use Illuminate\Support\Arr;

$array = ['1', '2', '3', '4'];

$array = Arr::prepend($array, '0'); // Feel free to call this method 'QueueJumper' if you fancy

// ['0', '1', '2', '3', '4']
```

Now, if you're feeling posh and want to specify the key for your new item, you can do so with a dash of elegance:

```php
use Illuminate\Support\Arr;

$array = ['price' => 100];

$array = Arr::prepend($array, 'Desk', 'name'); // Gives 'Desk' the VIP treatment!

// ['name' => 'Desk', 'price' => 100]
```

Don't be a wallflower at that array party – let `Arr::prepend()` do the heavy lifting and get you front-and-center!

 Ahoy there, code pirates! Ever found yourself in need of a parrot that can add a prefix to all the keys in your treasure chest of an associative array? Look no further, matey! Introducing `Arr::prependKeysWith` - the arr-tillery that'll prepend all key names with the booty you specify.

Here's how it works:

```php
use Illuminate\Support\Arr; // Import Arr like a true corsair

$booty = [
    'name' => 'Desk',
    'price' => 100,
];

$keyed_booty = Arr::prependKeysWith($booty, 'product.'); // Reckon Arr will add a 'product.' prefix to all keys, making them walk the plank like good pirates

/*
    [
        'product.name' => 'Desk',
        'product.price' => 100,
    ]
*/
```

Now, you can navigate your treasure chest with ease knowing that every key is accounted for and properly labeled! Yarr-ghastly tidy, if I do say so myself!

 **Ahoy there, Laravel sailors!**

Let's dive into the depths of our trusty `Arr::pull()` method - the pirate's treasure chest for your arrays! This magical technique is like the old "swab the deck" trick but for data. It not only removes a specific pair from your array, but also returns that booty to ye!

```php
use Illuminate\Support\Arr; // Don't forget to hoist yer sails before setting sail!

$ship_manifest = ['name' => 'Desk', 'price' => 100];

$captain_name = Arr::pull($ship_manifest, 'name');

// $captain_name: Desk (The first mate might be upset about this one!)

// $ship_manifest: ['price' => 100] (Arrr, the price remains!)
```

If ye be looking for a key and it's not there, fear not! Just provide a default value as the third argument to the method. It'll return that instead of walking the plank!

```php
use Illuminate\Support\Arr;

$plunder = Arr::pull($ship_manifest, 'cannonball', 'N/A');
```

Now, ye can sail off into the sunset knowing your arrays are as clean and orderly as a ship's deck after a good swabbing! Happy coding, matey!

 Ahoy there! Buckle up, code wranglers! Dive into the enchanting world of Laravel's `Arr::push()`, the magical method that adds an item to your array using the captivating "dot" notation.

Remember, it's a bit like a pirate's treasure map—if you don't find a treasure chest (array) at the specified location (key), our brave method will create one for ya!

```php
use Illuminate\Support\Arr;

$array = []; // An empty ship, ready to be laden with booty

Arr::push($array, 'office.furniture', 'Desk'); // We've added a fancy Desk in the office furniture room of our pirate ship (array)!

// $array: ['office' => ['furniture' => ['Desk']]] – Arr, matey! Look at that organized array!
```

Now, set sail and add as many treasures as you like with `Arr::push()`. Just remember to keep your treasure maps (arrays) neatly arranged, or the plundering crew might revolt! ☠️🏴‍☠️

 Ahoy there, coders! Let's dive into the delightful world of Laravel arrays, shall we? Today, we're going to learn about the `Arr::query()` method - a charming little function that turns your mundane array into a spiffy query string!

Imagine you've got an array filled with data and you want to pass it as parameters in a URL. Sounds like a party, right? But who wants to manually encode those arrays? Not us! That's why Laravel has the `Arr::query()` method – your new best friend at parties!

```php
use Illuminate\Support\Arr;

$array = [
    'name' => 'Taylor', // Aye, captain! Setting the name to good ol' Taylor.
    'order' => [ // Time for some order, matey!
        'column' => 'created_at',
        'direction' => 'desc'
    ]
];

Arr::query($array); // And just like that, our array is transformed into a lively query string!

// name=Taylor&order[column]=created_at&order[direction]=desc
```

Now you can pass this fancy query string to your URL and let Laravel handle the rest of the fun! Just remember, using `Arr::query()` is like having a secret decoder ring for array-to-URL conversions. So go on, give it a whirl, and happy coding! 🚀🌟

 Ahoy there, code sailors! Let's hoist the sails of knowledge and set course for the `Arr::random()` shores! This nautical navigator will guide your array through uncharted seas to reveal a hidden bounty - a random value from its treasures!

```php
use Illuminate\Support\Arr;

$booty = [1, 2, 3, 4, 5]; // Our humble array of pirate's gold

$randomPlunder = Arr::random($booty); // Cast the dice and see what fortune befalls ye!

// 4 - (retrieved randomly, yarr!)
```

Want more than one booty item? No problem, me hearties! You can specify the number of items to return as an optional second argument. Be aware though, this will return an array even if you're after just a single treasure:

```php
use Illuminate\Support\Arr;

$plunder = Arr::random($booty, 2); // Set sail and bring back two items for the captain!

// [2, 5] - (retrieved randomly, matey!)
```

Now that's what I call a swashbucklingly educational adventure through Laravel land! Happy coding and remember to walk the plank of success!

 Ahoy there, code pirates! Brace yourself for a whale of a journey as we dive into the depths of Laravel's treasure chest – the Arr::reject() method! This nifty little technique is like the bouncer at the coolest club in town, deciding who gets to stay and who's gonna hit the briny deep.

```php
use Illuminate\Support\Arr; // Bring in the big guns

$array = [100, '200', 300, '400', 500]; // Our motley crew of numbers and strings

$filtered = Arr::reject($array, function (string|int $value, int $key) { // Here's our bouncer
    return is_string($value); // A simple "Are you a string?" test
});

// [0 => 100, 2 => 300, 4 => 500] // And here are the lucky ones who passed!
```

So there you have it, shipmates! With Arr::reject(), you can ensure your array is as tight-knit and well-drilled as a crew of scurvy sea dogs. Keep on coding those pirate treasures! 🏴‍☠️💣🚀

 Ahoy there, shipmates! The `Arr::select()` method is like the swashbuckling pirate who only keeps the treasure and flings over the trash. It plunders an array of arrays, snatching only the specified keys (treasure) and leaving behind the rest (trash).

```php
use Illuminate\Support\Arr; // Import the pirate's trusty toolkit

$loot = [ // Our bountiful booty
    ['id' => 1, 'name' => 'Desk', 'price' => 200],
    ['id' => 2, 'name' => 'Table', 'price' => 150],
    ['id' => 3, 'name' => 'Chair', 'price' => 300],
];

$ Arr::select($loot, ['name', 'price']) // Command the pirate to select only 'name' and 'price' from our loot

// [['name' => 'Desk', 'price' => 200], ['name' => 'Table', 'price' => 150], ['name' => 'Chair', 'price' => 300]] // Ta-da! The treasure is ours!
```

Now, who said programming can't be fun? Happy plundering, mateys!

 Ahoy there, data wranglers! Let's sail into the enchanting world of Laravel arrays, shall we? Today, we're going to talk about a method as charming as a pirate's parrot – `Arr::set()`. This is the swashbuckler you need when you find yourself in a pickle with deeply nested arrays!

Imagine you've got your hands on a treasure map (array) that looks something like this:

```php
use Illuminate\Support\Arr;

$treasure_map = ['products' => ['desk' => ['price' => 100]]];
```

Now, ye might be thinking: "Aye, matey! I want to change the price of that desk to a hefty 200 gold coins!" Well, fear not! `Arr::set()` is here to save the day! Just point it in the right direction with some good ol' dot notation and let it do its magic:

```php
Arr::set($treasure_map, 'products.desk.price', 200);
```

And voila! Your treasure map is now updated to:

```php
['products' => ['desk' => ['price' => 200]]]
```

Just like that, you can change the price of your desk without breaking a sweat – all thanks to `Arr::set()`. Happy sailing, and remember: with Laravel at your side, no data array is too daunting!

 Ahoy there, coding seafarers! Brace yourself for a tidal wave of excitement as we delve into the `Arr::shuffle()` method, a veritable pirate's chest brimming with randomness.

This treasure trove of a function has but one goal: to shuffle your array like a deck of cards after a particularly raucous night at the tavern. But instead of fish-heads and doubloons, you'll find your humble integers get a jolly good scramble.

```php
use Illuminate\Support\Arr;

$array = Arr::shuffle([1, 2, 3, 4, 5]);

// [3, 2, 5, 1, 4] - (pirate-shipped randomly)
```

Now, hold onto your compasses and parrots as we set sail for uncharted waters of array shuffling! Arrrr!

 Ahoy there, coding pirates! Ever find yourself in a pickle trying to plunder one specific treasure from your array booty? Fear not, for I bring you the swashbuckling `Arr::sole()` method! This mischievous matey dives into your arr-ray and retrieves a single value using a magical closure (think Captain Hook's crocodile – but less terrifying).

Suppose ye be looking for ol' "Desk" McPlankton in an array of furniture, and there are no duplicates. Here's how to use the `Arr::sole()` method:

```php
use Illuminate\Support\Arr;

$treasures = ['Desk', 'Table', 'Chair'];

// With Arr::sole(), ye can find Desk as easily as finding a buried doubloon!
$plundered_item = Arr::sole($treasures, fn (string $value) => $value === 'Desk');

// Ta-da! The treasure 'Desk' is yours to keep!
```

But beware, ye scurvy dogs! If there are more than one Desks in your pirate ship, or if the Desk ain't present, the `Arr::sole()` method will throw an exception like a cannonball at your face:

```php
// If there are multiple Desks...
use Illuminate\Support\MultipleItemsFoundException;

$treasures = ['Desk', 'Desk', 'Table'];

try {
  $plundered_item = Arr::sole($treasures, fn (string $value) => $value === 'Desk');
} catch (MultipleItemsFoundException $e) {
  echo "Aye! Multiple Desks found. Ye should have checked your inventory better!";
}
```

If ye can't find ol' Desk McPlankton anywhere, the `Arr::sole()` method will throw an `ItemNotFoundException` like a lost parrot:

```php
// If 'Desk' ain't there...
use Illuminate\Support\ItemNotFoundException;

$treasures = ['Table', 'Chair'];

try {
  $plundered_item = Arr::sole($treasures, fn (string $value) => $value === 'Desk');
} catch (ItemNotFoundException $e) {
  echo "Arrgh! Desk not found. Time to update the ship's inventory.";
}
```

So hoist the sails, mateys, and set course for a smoother voyage with `Arr::sole()`. Happy coding!

 Alrighty, let's dive into the whimsical world of Laravel array shenanigans! Today we're talking about `Arr::some()`, your new best friend when you're looking for that needle in a haystack - or more accurately, that number in an array.

Imagine you're at a party (because who doesn't love parties?), and you want to know if there's anyone older than 2 (not to be confused with two of the same person). With `Arr::some()`, you can easily find out! Here's how:

```php
use Illuminate\Support\Arr;

$guests = [1, 2, 3]; // Party-goers ages

if (Arr::some($guests, function ($age) {
    return $age > 2;
})) {
    echo "Someone's older than two! Let's serve them champagne.";
} else {
    echo "Everyone here is younger than two. Time to throw a toddler party!";
}
```

See? Programming doesn't have to be as dull as watching paint dry! Now go forth and conquer your arrays with `Arr::some()`, and remember: if it ain't fun, it ain't Laravel!

 Ah, the `Arr::sort()` method! It's not just a dance move, but a magical incantation for arranging your digital chaos into coherent order. Here's how it works:

```php
use Illuminate\Support\Arr;

$array = ['Desk', 'Table', 'Chair']; // Our chaotic mess of a furniture store inventory

$orderlyStore = Arr::sort($array); // Wave the magic wand, and presto! A tidy array.

// ['Chair', 'Desk', 'Table']
// That's right, now even your code can have a better posture than you.

But if you fancy yourself as a sorting sorcerer, you can use a closure to customize the sorting process:

```php
use Illuminate\Support\Arr;

$array = [
    ['name' => 'Desk'],
    ['name' => 'Table'],
    ['name' => 'Chair'],
]; // A collection of furniture with names that sound like they belong on a medieval knight's inventory.

$sorted = array_values(Arr::sort($array, function (array $value) {
    return $value['name'];
})); // A simple closure that sorts the values by their 'name' property. It's like having a personal assistant who knows nothing about sarcasm but everything about sorting arrays.

/*
    [
        ['name' => 'Chair'],
        ['name' => 'Desk'],
        ['name' => 'Table'],
    ]
*/
// And just like that, even the most unwieldy of inventories find their rightful places in no time.
```

Don't let your code suffer from an identity crisis—sort it out with `Arr::sort()`. It's the digital version of a professional organizer for your data!

 Ahoy there, code sailors! Prepare to embark on a journey through the enchanting waters of array sorting with our trusty navigational aid, `Arr::sortDesc()`. This is not your average "Captain Obvious" method, oh no! It's more like Captain Kirk, boldly going where many arrays have gone before but in a descending order.

Let's say you've got a humdrum ol' array of furniture: `['Desk', 'Table', 'Chair']`. You want to shake things up a bit, sort it all out and make it more... dramatic, right? Just call upon `Arr::sortDesc` like this:

```php
use Illuminate\Support\Arr;

$furniture = ['Desk', 'Table', 'Chair']; // Yawnville, USA
Arr::sortDesc($furniture); // "Houston, we have a reverse-sort!" - Mission Control
// Voilà! Now you've got: ['Table', 'Desk', 'Chair'] - The land of excitement and tension.
```

But what if your array isn't plain vanilla, but rather a fancy schmancy nested one? You know, the kind that makes you say "arr-gh" instead of "arrgh"? Well, fear not, matey! `Arr::sortDesc` can handle those too:

```php
use Illuminate\Support\Arr;

$furniture = [
    ['name' => 'Desk'],
    ['name' => 'Table'],
    ['name' => 'Chair'],
];

// You can even sort it by the names with a little help from your friend, closure:
Arr::sortDesc($furniture, function (array $value) {
    return $value['name']; // The secret sauce to a well-sorted array.
});

// Now you've got the furniture all nice and sorted: [['name' => 'Table'], ['name' => 'Desk'], ['name' => 'Chair']] - The land of alphabetical ascension, but with a twist!
```

So hoist the main sail, set course for `Arr::sortDesc`, and let's get sorting, mates!

 Hey there, coding cowboy! Ever found yourself in a pickle trying to sort out a messy array like a wild west saloon bar? Fear not, for `Arr::sortRecursive()` is here to lasso your unruly data into shape!

This cowpoke of a function sorts an array recursively, using the trusty ol' `sort` wrangler for them numerically-indexed sub-arrays, and the wise `ksort` sheriff for those associative ones. So, let's round up your data:

```php
use Illuminate\Support\Arr; // Don't forget to hitch a ride with this partner!

$array = [
    ['Roman', 'Taylor', 'Li'],
    ['PHP', 'Ruby', 'JavaScript'],
    ['one' => 1, 'two' => 2, 'three' => 3],
];

$sorted = Arr::sortRecursive($array); // Saddle up and let it sort out the mess!
```

Now, your array is as tidy as a freshly cleaned corral:

```javascript
[
    ['JavaScript', 'PHP', 'Ruby'],
    ['one' => 1, 'three' => 3, 'two' => 2],
    ['Li', 'Roman', 'Taylor'],
]
```

If you fancy your data sorted in reverse order like a Texas longhorn herd, then the `Arr::sortRecursiveDesc()` partner awaits:

```php
$sorted = Arr::sortRecursiveDesc($array); // Let it sort your data backwards, Cowboy!
```

Happy sorting! May your arrays be as well-organized as a dusty old western town.

 Ahoy there, code pirates! Sail the seas of arrays with the `Arr::string()` method, a swashbuckling helper that's as nimble as Captain Barbossa himself!

This handy dandy function navigates deep into your treasure chest of an array, using "dot" notation (just like its trusty sidekick, [Arr::get()](#method-array-get)). But unlike ol' Barbossa, it won't tolerate any scurvy knaves that ain't strings! If you request a value of a different type, well, mateys, prepare to walk the plank and face an `InvalidArgumentException`!

```bash
use Illuminate\Support\Arr;

$array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

$value = Arr::string($array, 'name'); // Joe

$value = Arr::string($array, 'languages'); // Ahoy there! Haul up the anchor and brace for an `InvalidArgumentException`!
```

Remember to be wary of this method's capricious nature, but don't let that stop ye from exploring the hidden riches in yer arrays! Keep your swords sharp and sail on, mateys!

 Ahoy there, code pirates! Prepare to hoist the sails of a swashbuckling journey through Laravel's Arrays, specifically the `Arr::take()` method - a treasure trove of fun and functionality! 🏴‍☠️

This magical method allows you to plunder your arrays for hidden treasures, snatching up to specified numbers of items at a time, leaving the rest undisturbed in their proper places.

```php
use Illuminate\Support\Arr;

$array = [0, 1, 2, 3, 4, 5]; // Our booty chest full of numbers!

$chunk = Arr::take($array, 3); // Arrrr! Take three from the beginning! "Ye" be getting: [0, 1, 2]
```

But wait! What's this talk about negative numbers? Fret not, matey! You can also set sail for the end of your array and snatch items in reverse order.

```php
$array = [0, 1, 2, 3, 4, 5]; // Our booty chest full of numbers!

$chunk = Arr::take($array, -2); // Arrrr! Take two from the end! "Ye" be getting: [4, 5]
```

May your arrays be bountiful and your Laravel journeys filled with fun and adventure! Happy coding, buccaneers! 🍻🏴‍☠️

 **Bringing CSS to Life: `Arr::toCssClasses()`!**

Get ready to party like it's 1999 (or at least like it's 2003 when CSS was cool) with the fabulous, flamboyant, and utterly essential `Arr::toCssClasses()` method! This stylish dance partner takes your drab array of classes and transforms them into a sizzling string of style statements.

Imagine a night out on the town, where you want to wear a 4-parter (that's 'p-4' for all you CSS newbies), but only if you're feeling bold. And what if there's an error in your fashion sense? You might want to don a crimson cape (or bg-red, if you prefer). Well, `Arr::toCssClasses()` is just the choreographer you need!

```php
use Illuminate\Support\Arr;

// Let's set the mood for the evening...
$isFeelingBold = false;
$hasFashionError = true;

// Our dance card for tonight:
$array = ['p-4', 'font-bold' => $isFeelingBold, 'bg-red' => $hasFashionError];

// And now... the grand finale! The Cinderella slipper of all string concatenations:
$classes = Arr::toCssClasses($array);

/*
    'p-4 bg-red'
*/
```

And just like that, with a few lines of code and a touch of `Arr::toCssClasses()`, you've got yourself a smokin' hot style statement. Now go out there and dazzle 'em! 💃🏼🔥🕺🏼

 Ah, the `Arr::toCssStyles()` method! The PHP equivalent of a secret sauce for your CSS. This wily little function condenses a string of CSS declarations, making it perfect for when you need to style like a pro but can't handle the drama of full-on Cascading Style Sheets.

Imagine you're hosting a high-stakes fashion show where every model is rocking their unique styles. `Arr::toCssStyles()` is your backstage crew, taking those wild and chaotic outfits (arrays) and transforming them into cohesive, walk-worthy ensembles (CSS strings).

But here's the catch: this method only accepts well-behaved attendees. Your array must contain a list of CSS declarations where the keys represent your desired styles, and values are boolean expressions deciding whether they make the final cut in the show.

```php
use Illuminate\Support\Arr;

$isBlueTheNewBlack = true;
$fashionShow = ['background-color: black', 'background-color: blue' => $isBlueTheNewBlack];

$runwayStyles = Arr::toCssStyles($fashionShow);

/*
    'background-color: black; background-color: blue;'
*/
```

In this example, the models will strut their stuff wearing either all-black or half-blue outfits. But fear not, if an array element has a numeric key (the number one rule breaker), it will always make its way onto the catwalk, ensuring no model ever goes without a fashionable accessory!

Now that you've got this tool in your arsenal, your CSS will be as smooth as a runway walk and as stylish as a supermodel. With `Arr::toCssStyles()`, you can power Laravel's magical ability to [merge classes with a Blade component's attribute bag](/docs/{{version}}/blade#conditionally-merge-classes) or the `@class` [Blade directive](/docs/{{version}}/blade#conditional-classes).

And just like that, you've transformed from a fashion novice to a pro designer—all thanks to your new best friend, `Arr::toCssStyles()`. Happy styling!

 #### 🌰 `Arr::undot()` {.collection-method} - The Dotty Dance Decoder!

Ahoy there, coding cowboys and codelettes! Have you ever found yourself in a pickle with an array that's been all "dotty" on you? Fear not, for we have just the method to unravel this mess! 🕺️

Enter stage left: `Arr::undot()` - The Dotty Dance Decoder!

This clever lil' fellow takes a single-dimensional array that uses those pesky "dot" notations and transforms it into a snazzy multi-dimensional array. 💁‍♂️🤹‍♀️

```php
use Illuminate\Support\Arr;

$array = [
    'user.name' => 'Kevin Malone',
    'user.occupation' => 'Accountant',
];

$array = Arr::undot($array);

// ['user' => ['name' => 'Kevin Malone', 'occupation' => 'Accountant']]
```

See, it's like magic! You can now dance through your code with ease and grace. Just remember to keep those dots in check, or else you might end up in a tangled mess of arrays - yikes! 🕺️🤹‍♀️💖

 Oh, the `Arr::where()` method! It's like the bouncer at a cool kid's party, but instead of checking IDs, it filters out an array based on your custom criteria—all thanks to that sneaky little closure you provide. 🕺️🔓

Let's say you've got this shindig full of numbers and strings, and you're looking for the ones that are actually strings (because numbers can be so dull!). Here's how our friendly bouncer—or should I say, `Arr::where()`—would handle it:

```php
use Illuminate\Support\Arr; // Don't forget to bring your dancing shoes! 👠

$array = [100, '200', 300, '400', 500];

// Invite only the strings!
$string_partygoers = Arr::where($array, function (string|int $value, int $key) {
    // Check if the value is a string. If so, we're dancing tonight!
    return is_string($value);
});

// And here are our new guests: [1 => '200', 3 => '400'] 🎉🎊
```

And just like that, the party is all stringy and fun! 🥳🔥 Happy filtering!

 Ahoy there! Buckle up, mateys! Today we're setting sail with a fine piece of Laravel code: `Arr::whereNotNull()`. This isn't just any ordinary method, it's the swashbuckler that scours your arrays for those pesky null values, leaving behind only the hearty pirates ready to plunder your data.

So grab your compass and join me on this high seas adventure!

```php
use Illuminate\Support\Arr; // Don't forget to hoist the Jolly Roger!

$array = [0, null]; // Aye, an array with a few buccaneers, but not all are in fighting trim.

$filtered = Arr::whereNotNull($array); // Now we send 'em through `Arr::whereNotNull()`, and only the ones that still have their peg legs remain.

// [0 => 0] // Ta-da! We're left with a spry crew, ready for more adventures.
```

Remember, like a good captain, always make sure your ship is shipshape by keeping null values at bay with `Arr::whereNotNull()`. Happy coding, mates!

 Ahoy there, intrepid coder! Step right up and feast your eyes on Laravel's enchanting array wrangler, the one and only `Arr::wrap()` method! This magical elixir takes a mere mortal value, encases it in an ethereal array, and bestows upon it divine lineage.

But fear not, ye seasoned programmers! If your value is already ensconced within an array, this sorcerous spell will leave it be, for it knows its place and rightful station.

```php
use Illuminate\Support\Arr;

$string = 'Laravel';

$array = Arr::wrap($string); // Lo and behold! ['Laravel'] appears before thine very eyes!
```

But what of the elusive null? Fear not, for `Arr::wrap()` turns even the void into an array, leaving naught but an empty container in its wake.

```php
use Illuminate\Support\Arr;

$array = Arr::wrap(null); // And lo! An empty array doth appear: []
```

Now, aren't you just itching to give it a spin? Go forth, brave coders, and wrap thy arrays with reckless abandon!

 Oh, the `data_fill()` function! It's like the digital version of a magic eraser for your nested arrays and objects. Instead of removing stains, it replaces missing values, all while channeling its inner Tony Stark with dot notation.

Let's say you have a data array full of office furniture prices (not the exciting stuff, we know), but somehow the desk's price got lost in translation:

```php
$data = ['products' => ['desk' => ['price' => 100]]];
```

Fear not! With `data_fill()`, you can summon the price of a decent gaming setup (we all need one) like so:

```php
data_fill($data, 'products.desk.price', 200);
// ['products' => ['desk' => ['price' => 100, 'discount' => YOUR_FAVORITE_GAME]]] (Just kidding, no discounts here)
```

But wait! There's more. `data_fill()` accepts asterisks as wildcards for a good ol' fashioned game of array match-three:

```php
$data = [
    'products' => [
        ['name' => 'Desk 1', 'price' => 100],
        ['name' => 'Desk 2'],
    ],
];

data_fill($data, 'products.*.price', 200);
```

Now you have two desks with prices that make your wallet weep:

```php
/*
    [
        'products' => [
            ['name' => 'Desk 1', 'price' => 100],
            ['name' => 'Desk 2', 'price' => 200],
        ],
    ]
*/
```

In short, `data_fill()` is your new best friend in the data manipulation scene. It's like having a personal army of data elves that work tirelessly to keep your arrays and objects neatly organized—and let's be real, who doesn't need that on their side?

 Ahoy there! Buckle up and let's dive into the exciting world of Laravel data navigation with `data_get()`, our very own pirate map to hidden treasure (AKA nested arrays and objects).

Ever found yourself lost in a sea of nested data, yearning for a swift way to plunder that elusive value? Fear not, matey! With `data_get()` at your fingertips, you can now navigate through your treasure chest like Captain Sparrow in Pirates of the Caribbean (minus the curses, we hope).

```php
$booty = [
    'goods' => [
        'furniture' => [
            'table' => ['price' => 100] // Yes, this is your treasure map!
        ]
    ]
];

// To find the price of the table, simply chant "What be the treasure?"
$treasure = data_get($booty, 'goods.furniture.table.price');
// 100 (Yeppers, it's gold coins!)
```

But what if your map is missing a key? Fear not! `data_get()` can provide a fallback value:

```php
$booty = [
    'goods' => [
        'furniture' => [
            'table' => ['price' => 100] // This is still your treasure map, but with a missing discount key!
        ]
    ]
];

// To find the discount of the table, use "What be the discount, if it exists?"
$discount = data_get($booty, 'goods.furniture.table.discount', 0);
// 0 (No discount, matey! You'll have to pay full price)
```

But what if your map is vast and filled with various goods? Fear not! `data_get()` can help you find any key using wildcards:

```php
$booty = [
    'product-one' => ['name' => 'Desk 1', 'price' => 100],
    'product-two' => ['name' => 'Desk 2', 'price' => 150],
];

// To find the name of any product, use "What be the name of any product?"
data_get($booty, '*.name');
// ['Desk 1', 'Desk 2'] (There be many desks in this shipment!)
```

Lastly, `data_get()` can help you find the first or last item in an array:

```php
$flight = [
    'segments' => [
        ['from' => 'LHR', 'departure' => '9:00', 'to' => 'IST', 'arrival' => '15:00'],
        ['from' => 'IST', 'departure' => '16:00', 'to' => 'PKX', 'arrival' => '20:00'],
    ],
];

// To find the departure time of the first segment, use "What be the departure time of the first segment?"
data_get($flight, 'segments.{first}.departure');
// 9:00 (The first adventure starts here!)
```

 Ahoy there, Laravel swashbucklers! Let's dive into the enchanting `data_set()` function, a magical tool for navigating your data like a pirate sailing through the seas of nested arrays and objects.

Imagine you've stumbled upon a treasure map (your array), marked with 'X marks the spot' (`products.desk.price`). By invoking `data_set()`, you can plant your gold doubloon (value) right there:

```php
$data = ['products' => ['desk' => ['price' => 100]]];

data_set($data, 'products.desk.price', 200); // Bam! Gold doubloons at the right spot.
```

But what happens when ye encounter an uncharted island (undefined key)? Fear not! The `data_set()` function also accepts wildcards using asterisks, ensuring your treasure is evenly distributed across all islands:

```php
$data = [
    'products' => [
        ['name' => 'Desk 1', 'price' => 100],
        ['name' => 'Desk 2', 'price' => 150],
    ],
];

data_set($data, 'products.*.price', 200); // Gold doubloons for all!
```

By default, any existing gold doubloons are overwritten. But if you want to ensure no valuable goods are lost or misplaced, just pass `false` as the fourth argument:

```php
$data = ['products' => ['desk' => ['price' => 100]]];

data_set($data, 'products.desk.price', 200, overwrite: false); // Gold doubloons stay where they are!
```

Ah, the riches to be had! Navigate your data like a seasoned sea dog with `data_set()`. Yarrrr!

 Ahoy there, code wranglers! Let's dive into the fascinating world of Laravel data manipulation, shall we? Today, we're going to chat about a function that'll make you feel like a digital alchemist - the `data_forget()`!

This magical spell is designed to help you vanish specific values hidden deep within the labyrinth of your nested arrays and objects. Think of it as teleporting through your data, zapping away unwanted elements with ease.

```php
$treasure = ['artifacts' => ['table' => ['price' => 100]]];

data_forget($treasure, 'artifacts.table.price'); // Transforms into: ['artifacts' => ['table' => []]]

```

Oh, and just in case your data resembles more of a chaotic pirate's loot than a neatly organized treasure chest, `data_forget()` also accepts wildcards! Replace those question marks with asterisks (*) to remove values on the target as needed:

```php
$booty = [
    'artifacts' => [
        ['name' => 'Table 1', 'price' => 100],
        ['name' => 'Chest', 'price' => 200],
    ],
];

data_forget($booty, 'artifacts.*.price'); // Voila! ['artifacts' => [['name' => 'Table 1'], ['name' => 'Chest']]]
```

Just remember, with great power comes great responsibility (and a whole lot of gold). Happy coding, mates!

 Ahoy there, code pirates! In our Laravel treasure trove of tricks and treats, we've got a swashbuckling gem called `head()`! Ever been sailing through an array, only to find yourself craving the first mate's rum? Fear not, for the `head()` function will bring you that very first barrel!

```php
Arrr matey, gather 'round yon array o' numbers: [100, 200, 300]. With a hearty "Yo ho ho", we summon the `head()` function to plunder its contents!

$first = head([100, 200, 300]);

And lo and behold, out walks old 100, sloshing that golden rum all over the deck! (Well, not really, but you get the idea!)
```

Just remember, if your array is as empty as a parrot's nest, `head()` will spout "Avast! There be no booty!" and return `false`. But that's just how the sea-faring game of arrays goes, matey! Now, back to our programming adventures! 🏴‍☠️

 Ahoy there! Buckle up, dear coder, for a jolly journey through the wondrous world of Laravel collections! Today, we're gonna chat about the `last()` function - your trusty sidekick when you need that one, elusive element from an array.

Imagine you're at a party with a ginormous buffet table (we developers love our food, right?), and you want to grab that last slice of pizza left. That's exactly what `last()` does, except it works on arrays instead of cheese-laden disks!

Here's a little example to tickle your brain cells:

```php
$array = [100, 200, 300];

// Now we're looking for that delicious last number...
$last_number = last($array);

// And lo and behold! Our search ends with a bang - 300 it is!
```

But remember, just like at the party when the food runs out and you're left with an empty plate, if your array is devoid of elements, `last()` will return... hold on to your hats, folks... `false`. Yes, that's right! A big ol' fat false.

So there you have it - a playful peek at Laravel's `last()` function, ready to assist you in plucking the last element from an array like a pro! Keep on coding, and don't forget to enjoy the journey, because coding is like a party with endless buffet tables (and maybe some tasty pizza)! 🎉🍕🎊

 ### Quantity Conversion Unit (QCU)

Say goodbye to those pesky big numbers that make your database look like it belongs in NASA! Laravel's got you covered with the magic of **Numbers**. We know how hard it can be to remember those huge, jumbled digits, so we've created a spell to simplify them for you.

<a name="method-number-abbreviate"></a>
#### Abbreviate Number

By waving your wand at the `numberAbbreviate()` function, numbers larger than 999 will be transformed into a more manageable format—much like when Hermione condensed her spellbook. This charming charm is the perfect solution for those times when you've accidentally saved a 4-digit number in your database and now need to squint to see it properly.

```php
$number = new Number(1234567); // Create a new instance of the Number class
$abbreviatedNumber = $number->abbreviate(); // Apply the abbreviation spell
echo $abbreviatedNumber; // Output: 1.24M (instead of 1,234,567)
```

Now you can store massive numbers with ease and avoid any headaches caused by squinting at your screen. Just remember to always use the right spell for the job—you wouldn't want to turn a one-eyed snake into a spaghetti monster now, would you?

<a name="method-number-format"></a>
#### Format Number

Sometimes, life isn't just about making things smaller; sometimes we need to add a touch of class to our numbers. That's where `numberFormat()` comes in! This function will apply the perfect number presentation for your needs, much like a personal stylist for your digits.

```php
$number = new Number(1234567); // Create a new instance of the Number class
$formattedNumber = $number->format(); // Apply the numberFormat spell
echo $formattedNumber; // Output: 1,234,567 (instead of 1.24M)
```

Now your numbers will look as sophisticated as a black-tie event at Hogwarts! Use this spell wisely, and your data will always be both stylish and easy to read.

Remember, with great power comes great responsibility—so use these Numbers functions responsibly, and your Laravel applications will thank you. Happy coding! 🧙‍♂️📚💻

 Ahoy there, matey! Buckle up as we dive into the swashbuckling world of Laravel's `Number::abbreviate()` method! This ain't no ordinary number cruncher, it's a pirate's treasure map to readability!

Wanna make a big ol' number smaller than your parrot but still understandable? Well, `Number::abbreviate` is your new best friend! It converts those unwieldy digits into a format that even Blackbeard himself would appreciate:

```php
use Illuminate\Support\Number;

$number = Number::abbreviate(1000); // Yo ho ho, 1K gold pieces!

$number = Number::abbreviate(489939); // Arrrr, that's 490K coins, matey!

$number = Number::abbreviate(1230000, precision: 2); // Aye aye, that's 1.23M buccaneers, Cap'n!
```

Just remember to keep an eye on your ship's cargo, as you never know when a scurvy dog might try to swipe some of your gold! Happy coding, matey!

 Ahoy there, matey! Buckle up for a little number shenanigan with Laravel's `Number::clamp()` method - the pirate's companion for keeping numbers in line! 🏴‍☠️

This handy dandy method ensures your numbers stay within a swashbuckling range. If your number is lower than the deckhand's minimum, it'll set sail with the minimum value instead of causing trouble. And if it's higher than the captain's max, it'll be given a ride back to the max shore to keep the ship balanced:

```php
use Illuminate\Support\Number;

$number = Number::clamp(105, min: 10, max: 100); // Sets course for 100 (the maximum)! Arr matey!

$number = Number::clamp(5, min: 10, max: 100); // Steers towards the 10 (minimum), ahoy!

$number = Number::clamp(10, min: 10, max: 100); – Same old number, same ol' range. No drama here!

$number = Number::clamp(20, min: 10, max: 100); - Off we go to 20 (just the right balance)! Hoist the Jolly Roger!
```

Remember, a good number in its place is worth its weight in gold doubloons. Keep your numbers tidy with Laravel's `Number::clamp()`. Arrr matey, happy number sailing! 🌴🐠🔔

 In the grand world of Laravel finance, we've got a charming little number named `Number::currency()`. It's like having your own personal currency translator! Imagine a scene straight out of a spy movie where James Bond whispers numbers into this method, and it spits out crisp, colorful cash in various currencies. Sounds thrilling, right? Let's break it down:

```php
use Illuminate\Support\Number;

$moolah = Number::currency(1000); // Gives you $1,000.00 - AKA 'the big bucks' in USD

If you fancy a trip to the Eurozone, just ask for it:

$euro_trip = Number::currency(1000, in: 'EUR'); // €1,000.00 - perfect for ordering coffee in Paris

Want to impress your German friends? Add some local flair:

$german_getdown = Number::currency(1000, in: 'EUR', locale: 'de'); // 1.000,00 € - impress them with your Deutsch!

Now, if you're a fan of precision and want to cut the decimal noise, no problemo:

$zero_precision = Number::currency(1000, in: 'EUR', locale: 'de', precision: 0); // 1.000 € - perfect for those who love round numbers!
```

So there you have it, folks! Now you can talk numbers in different languages without leaving your Laravel comfort zone. Just remember to keep the jokes coming, and don't forget to tip your waiter... or method, in this case! 😉

 Ahoy there, matey! Sail the seas of numbers with Laravel's `Number::defaultCurrency()` - a method that'll make you feel like Captain Jack Sparrow when it comes to dealing with dough.

This swashbuckling little function will grab the default currency that the `Number` class is using:

```php
use Illuminate\Support\Number;

$booty = Number::defaultCurrency();

// And you thought pirate gold was just a myth? Nope, it's USD! 🤠
```

Just remember to keep an eye on the horizon for any currency changes, as this method will always return the current default currency. Keep your treasure maps updated and your booty counting accurate! 💰🌴🏴‍☠️

 Ahoy there, matey! Prepare to set sail in the magical world of Laravel numbers where we'll uncover the fascinating secrets of the `Number::defaultLocale` method. Let me be your trusty guide as we navigate through these choppy waters together!

Now, this here method is like asking Captain Cook himself for the GPS coordinates of his vessel – it tells you the default locale that our friendly `Number` class is speaking in. It's the pirate tongue of numbers if you will! So let's see how we can use it:

```php
*Arrr!* Grab your favorite grog, lads and lasses, as we embark on this Laravel adventure. First things first, we need to call upon our loyal `Number` class.

use Illuminate\Support\Number;

With that out of the way, all we gotta do now is run the following command to find out the default locale being used by our valiant number pirates:

$locale = Number::defaultLocale();

And voila! You'll have the answer – a locale, not gold doubloons, but close enough, right?

// en
```

So there you have it, me hearties. The `Number::defaultLocale` method is your new favorite treasure map to finding the hidden locales of Laravel's number world. Keep sailing with Laravel and always remember – pirates love numbers! 🏴‍☠️⚓️⚛️

 Ahoy there, matey! Buckle up as we dive into the buccaneering world of Laravel with the `Number::fileSize()` method - the pirate's compass to file sizes!

This swashbuckling function turns your cumbersome byte values into something a sailor can understand - a string representation of the file size. Arr matey, ready to set sail?

```php
use Illuminate\Support\Number;

$size = Number::fileSize(1024); // Aye aye! One thousand twenty-four bytes, that's just over a KB, like Captain Hook's hand!

$size = Number::fileSize(1024 * 1024); // Huzzah! We've hit the motherlode – one megabyte (MB)! That's enough to store a few treasure maps or plundered booty.

If ye be a precision-seeking swashbuckler, fear not! With `Number::fileSize(1024, precision: 2)`, you can set the number of decimal places – ye'll get back '1.00 KB'. Now that's as precise as Long John Silver's aim with a pistol!

So there ye have it, matey! The `Number::fileSize()` method is your trusted guide in pirate-speak file sizes within Laravel's treasure trove of functions. Hoist the Jolly Roger and happy navigating! 🐘🏴‍☠️🚀

 Ahoy there, matey! Buckle up for a whirlwind tour of the `Number::forHumans()` method, your new best friend in the Laravel seas!

This swashbuckling function takes your numerical pirate loot and transforms it into something mortals can actually comprehend without a calculator or their abacus.

```php
use Illuminate\Support\Number;

$treasure = Number::forHumans(1000);

// Instead of squinting at 1000 on your parchment, you'll be saying "one thousand" like a true buccaneer!

$booty = Number::forHumans(489939);

// Who needs a compass when you can say "four hundred and ninety thousand" with such flair?

$riches = Number::forHumans(1230000, precision: 2);

// Now you'll be able to boast about "1.23 million" without making the tavern keeper's head spin!
```

Remember, every captain needs a map, and this is your guide through the treacherous waters of human-readable numbers in Laravel! Arr matey, happy sailing! 🏴‍☠️🌊

 Oh, the `Number::format()` method! It's like the personal stylist for your numbers, dressing them up in their finest locale-specific attire.

So, you've got 100,000? Well, let me introduce you to your new best friend, Mr. Formatted Number: `100,000`. No more awkwardness at the number party!

But what if you want a little more precision? You know, like when you're counting sheep and need to know how many exactly are left in the flock? Simply use the `precision` parameter to add decimal places: `100,000.00`. Now you can sleep soundly knowing your numbers are well-groomed!

But wait, there's more! What if you're dealing with numbers that are just a little too flashy for their own good? You know the type - they insist on adding extra decimal places that no one really needs. Well, the `maxPrecision` parameter is here to save the day: `100,000.12`. Now your numbers will learn to keep it classy and understated!

And finally, if you're dealing with an international crowd, don't worry about offending anyone with improper number etiquette. Just use the `locale` parameter to ensure your numbers are always appropriately attired: `100.000`. So whether you're in Germany or Gomorrah, your numbers will be well-respected and well-dressed!

And remember, a happy number is a well-formatted number! 🎉🎈🎉

 Ahoy there, coding pirate! Prepare to hoist the sail of syntactic sweetness and set course for the shores of grammatical glory! We be havin' a swashbuckling good time with Laravel's Number::ordinal() method!

Arrrr, matey! This here method be turnin' plain numbers into their proper ordinal representation – you know, first, second, third, and so on. It be a swell way to keep yer pirate crew in line and avoid mutiny!

Here's how ye use it:

```php
use Illuminate\Support\Number;

$one = Number::ordinal(1); // 1st – Aye, the captain's favorite!

$two = Number::ordinal(2); // 2nd – As in two-decks up from the deckhands, matey!

$twentyOne = Number::ordinal(21); // 21st – Twenty-one gun salutes, hoist yer colors high!
```

Now, shiver me timbers! Go forth and make this nifty method a part of yer daily scrimshaw!

 Ahoy there, coding pirates! Hoist the sails and prepare to embark on a numerical adventure with the swashbuckling `Number::pairs()` method!

This dashing method is the life-saver you've been seeking when it comes to slicing up a humungous number range into bite-sized, easy-to-handle portions. Think of it as a modern day division bell for your algorithms, perfect for tasks like pagination or batch processing!

So, let's say you've got 25 gold doubloons and want to split them among your crew without losing any overboard. Well, `Number::pairs()` can help you do just that!

```php
use Illuminate\Support\Number;

$treasureMap = Number::pairs(25, 10);

// [[0, 9], [10, 19], [20, 25]]
```

But wait! What if you want to start the distribution from a specific point? No problem, matey! Just pass in an `offset` parameter and let `Number::pairs()` adjust the sub-ranges accordingly:

```php
$treasureMap = Number::pairs(25, 10, offset: 0);

// [[0, 10], [10, 20], [20, 25]]
```

Now get out there and conquer the Seven Seas with `Number::pairs()` at your side! Remember: a good captain always keeps their crew well-fed and organized! Arrrrgh!

 Oh, the joys of number crunching in Laravel! You're gonna love this little number trick - the `parseInt()` method! It's like magic for your strings, turning them into integers quicker than you can say "one potato, two potato."

```php
use Illuminate\Support\Number;

$integer_magician = new Number();
$number_ illusionist = $integer_magician->parseInt('10.123');
// Voila! (int) 10, no more pesky decimal points!

Now, if you fancy a French twist, just pass the locale:

```php
$french_number_flair = $integer_magician->parseInt('10,123', locale: 'fr');
// (int) 10, because in France, commas are cooler than dots.
```

So, there you have it! No more number nightmares, just pure Laravel number wizardry at your fingertips! Happy coding! 🎉🤩🧙‍♂️

 Ahoy there, matey! Dive into the nautical world of Laravel's `Number::parseFloat()`, a method as seaworthy as Captain Barbossa himself!

This marvellous technique transforms your run-of-the-mill string into a float that would make Neptune green with envy. It's like turning a sand dollar into a golden doubloon, but without the whole pirate thing.

```php
use Illuminate\Support\Number; // Include this to unleash the power of `Number::parseFloat()`

$result = Number::parseFloat('10'); // Transform '10' into a bountiful float (float) 10.0

But here's where things get interesting, matey! With the addition of the 'locale' parameter, you can make your floats speak like native speakers. For instance:

$result = Number::parseFloat('10', locale: 'fr'); // This will turn '10' into a dashing Frenchman (float) 10.0
```

Now, aren't you ready to set sail on this mathematical adventure? Arrrghastonishing!

 Ahoy there, matey! Welcome to the pirate's booty of numerical proportions! Let me unveil the mysteries of our swashbuckling `Number::percentage()` method!

Ye see, this here function takes your humdrum numbers and turns 'em into swingin' percentages, all while keeping their buccaneer-ly charm intact. Here's a jolly good example:

```php
use Illuminate\Support\Number;

$percentage = Number::percentage(10);

// 10% (a hearty helping of swag)

$precisionSpecificPercentage = Number::percentage(10, precision: 2);

// 10.00% (for those who appreciate a well-rounded percentage)

$maxPrecisionPercentage = Number::percentage(10.123, maxPrecision: 2);

// 10.12% (if you fancy a smidgen of decimal precision)

And now for something completely different! The German edition:

$germanPercentage = Number::percentage(10, precision: 2, locale: 'de');

// 10,00% (because some numbers just sound better in German)
```

Now that's the kind of number wizardry we can all appreciate! Don't forget to set sail on this numerical journey and let us know if you find more treasures along the way! Arrrr! 🤝🏴‍☠️

 Ahoy there! Let's embark on a journey to convert numbers into spoken words with the `Number::spell()` method, a pirate's treasure trove of syntactic gold! 🏴‍☠️

```php
use Illuminate\Support\Number;

$goldenCoin = Number::spell(102); // "one hundred and two" (landlubbers prefer this one)

$number = Number::spell(88, locale: 'fr'); // "quatre-vingt-huit" (bonjour France!)
```

If you want to set a limit on how many numbers get the verbal treatment, you can use the `after` argument like a bouncer at a bar:

```php
$number = Number::spell(10, after: 10); // "10" (savvy pirates keep it simple)

$number = Number::spell(11, after: 10); // "eleven" (a dozen + one, yarr!)
```

The `until` argument is like the anchor that keeps the numbers from sailing too far:

```php
$number = Number::spell(5, until: 10); // "five" (pirates love counting fingers)

$number = Number::spell(10, until: 10); // "10" (a decade of piracy)
```

Remember, matey! Keep these tips handy, and you'll be spelling numbers like a true buccaneer in no time. Happy treasure hunting! 🏴‍☠️🎉

 Ahoy there, Laravel adventurers! Let's dive into the fascinating world of number transformation with the `Number::spellOrdinal()` method!

This magical function turns your plain old numbers into posh, high society gentlemen (or ladies if you prefer) by converting them into their swanky ordinal forms as strings of words. Fancy, ain't it? 🎉🕺

Let's give it a whirl:

```php
use Illuminate\Support\Number;

// Oh, just one, you say? Let's make it sound posh!
$oneInOrdinal = Number::spellOrdinal(1);
// first 🤵🥳

// Two? Why not two-tie then? 👔🥂
$twoInOrdinal = Number::spellOrdinal(2);
// second 🤴🍾

// And what about the twenty-first birthday party? 🎉🎂
$twentyFirstInOrdinal = Number::spellOrdinal(21);
// twentieth-first 🥳🎉 (We couldn't resist the extra fun!)
```

Now, aren't we fancy pants? Off you go, conquer the world with stylish numbers! 😉✨

 Ahoy there, number crunchers! Prepare to embark on a jolly adventure with Laravel's `Number::trim()` method - the pirate of decimal points! This swashbuckling utility removes any superfluous zero digits trailing after the period in your numbers.

Steady as she goes! Here's a fun example to help you set sail:

```php
use Illuminate\Support\Number; // Grab your sea chart, matey!

$number = Number::trim(12.0); // Arr, a fine number we have here - 12.0.

// Out with the trash! (Zero digits, that is!)
// 12 is what remains after our trimming adventure.

$number = Number::trim(12.30); // Now we're dealing with a more complex number, 12.30.

// Hoist the Jolly Roger and set course for cleaner waters!
// After our swashbuckling exploits, we find ourselves with a sparkling 12.3.
```

Yarrr, Laravel's `Number::trim()` is an excellent companion on your number-wrangling quest. Keep those decimal points free of pesky zero digits, and remember to always have fun while coding!

 Ah, the `Number::useLocale()` method - the secret weapon of the superheroes in your Laravel universe! This magical spell sets the default number locale throughout your app, like a global translation for digits and dollar signs. 🌐🔝

Here's how you can summon its power:

```php
use Illuminate\Support\Number;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    // Time to switch to German numeracy! 🇩🇪
    Number::useLocale('de');
}
```

Now, your app will format numbers and currencies in a way that would make even the most disciplined accountant crack a lederhosen joke. Just remember, with great power comes... well, still great power! 💥🌍✨

 Ahoy there, number crunchers! Let's dive into the world of Laravel where numbers get a taste of culture with `Number::withLocale()`. Imagine you're at a global potluck and every dish needs to be labeled in its native tongue. That's what this method does!

So, you want to format a number using a specific locale? No worries! Just call upon this magical helper like so:

```php
use Illuminate\Support\Number; // Don your number wizard hat, dear friend

$number = Number::withLocale('de', function () { // Germany's on the barbie tonight, mate!
    return Number::format(1500); // Let's slap a fancy label on that 1500
});
```

By the way, this method is as charmingly versatile as a Swiss Army Knife. It executes your closure using the specified locale and then, after the callback has finished its culinary delights, it kindly restores the original locale - like an attentive waiter clearing away your empty plates. Now that's service!

 Ahoy there, pirate! Ever found yourself in need of setting the default booty currency for your treasure maps? Well, fear not, me hearties! Laravel's got ye covered with the `Number::useCurrency()` method! This magical spell sets the global currency standard for all future number formatting within the Number class's mystical realms.

```php
Arrrrr! Use Illuminate\Support\Number;

/**
 * Prepare the bootdecks for any shipshape application.
 */
public function boot(): void
{
    Number::useCurrency('GBP'); // Set the golden Galleons as our default currency, matey!
}
```

Now, when ye call upon other Number class methods, they'll be well-versed in the ways of your chosen currency, ensuring gold doubloons and silver pieces are formatted with the appropriate buccaneer flair! So hoist the sails, grab yer compass, and let's set sail on this number adventure! Yarr! 🌺🏴‍☠️💰

 Ahoy there, number crunchers! Let's dive into the ticklish topic of `Number::withCurrency()`. Imagine you're at a bustling currency exchange kiosk, but instead of physical cash, we're dealing with digital numbers.

This nifty Laravel method is like having your own personal foreign exchange dealer! The `withCurrency` function takes you on a magical monetary adventure, executing the provided closure in a currency of your choice (just don't ask it to count sheep or anything).

Here's a peek at how you might put it to work:

```php
use Illuminate\Support\Number;

$number = Number::withCurrency('GBP', function () {
    // ...imagine a flurry of pounds flying around...
});
```

Now, once the closure is done dancing its digital jig, `Number::withCurrency()` does a quick change and restores your number back to its original currency. It's like a magician who makes your money disappear, only to make it reappear in a different form, then poof! back to normal again.

Just remember, unlike real-world exchanges, this function doesn't charge you a commission for the service. So go ahead and exchange at will, but maybe save those 'I told you so' jokes for another time. After all, we're here to make numbers dance, not relationships! 💃🏽🎉

 Ahoy there, code pirates! Sail into Laravel's booty chest where we've hidden all the treasure – err, paths! Let's hoist the anchor and set sail on this humorous journey.

First port of call: `app_path()` – this magical compass will guide you to the heart of your application, full of gold doubloons (controllers, models, and helpers). If ye be lost in a sea of files, just shout "Yo ho, app_path!" and it'll lead you home.

Next, `base_path()` – think of it as the map to your treasure island. All paths on this island start from here! Whether you're digging for artifacts or hiding a stash of loot, base_path() will always point ye in the right direction.

Now, for something a bit more... complex: `storage_path()`. It ain't just any storage – it's a secret cache where Laravel hides things like logs, backups, and sessions. Use this path to find what you need or hide your own booty if ye be so inclined!

Lastly, we have `database_path()`. This is the bank vault of your application, where all important data (queries, migrations, seeds) reside. Proceed with caution, and don't let anyone else get their hands on it or they might walk away with more than just some gold!

So there you have it, mateys – a quick tour of Laravel's paths to help you navigate your application like a seasoned sea dog. Happy exploring, and may ye always find the treasure ye seek! Arrrr!

 Ah, the `app_path` function! It's like a digital tour guide for your Laravel app's most exclusive destination - the `app` directory.

Imagine you're on an adventure in Laravelville and you need to find the hidden treasure... I mean, `Controller.php`. Instead of using a dusty old map or a GPS with terrible jokes (we're talking about the 90s here), just use `app_path`!

```php
$location = app_path(); // You've found yourself at the main entrance of Laravelville!

$treasureMap = app_path('Http/Controllers/Controller.php'); // Now you're holding the map to your hidden treasure!
```

So next time when you're lost in your own codebase, remember `app_path` is your digital compass to guide you back home! 🗺️🌍🔍

 Alright, let's dive into the magical world of Laravel, where unicorns code and rainbows debug! Today, we're gonna talk about `base_path()`, your new best friend in navigation (after Google Maps).

Imagine you've lost your keys in a vast library filled with PHP files. You need to find the exact spot where your application's root directory is hidden among the bookshelves. Fret not! Just call upon `base_path()`, and it will guide you, returning the fully qualified address of that elusive hideout!

```php
$location = base_path(); // Now you know where home is!
```

But wait, there's more! You can also ask it to help find specific files within your project. For instance:

```php
$destination = base_path('vendor/bin'); // It's a long journey from 'A' to 'Bin', but we got this!
```

So there you have it, folks! With `base_path()`, no more aimless wandering through your project's labyrinthine directories. Just remember, the quickest way to find something is to ask a Laravel function—or a wise owl in a medieval tapestry. Cheers! 🍻🦉

 Ahoy there, matey! In this fine nautical journey we call Laravel, the `config_path()` function is your compass pointing towards the heart of your ship's configuration land!

This trusty function navigates you to the fully-mapped path of your vessel's `config` directory. But it doesn't stop there! You can also use it as a treasure map to uncover a specific file within that swashbuckling directory:

```php
$path = config_path(); // Setting sail for the grand config harbor

$path = config_path('app.php'); // Buried gold found in the app's configuration chest!
```

Just remember, this is no ordinary map; it always leads you to exactly where you want to be, no matter how treacherous the seas may get. Happy charting! 🌴🚀🐘

 Ahoy there, Laravel captain! Sail into the uncharted waters of your application's database directory with the `database_path()` function - a beacon guiding you through the treacherous seas of file paths.

This versatile function isn't just a compass; it can also help you map out a precise path to a specific file within the database directory, ensuring your journey is smooth and your treasure (er, code files) are safely found!

```php
// Discover the path to your entire database kingdom
$path = database_path();

// Navigate to UserFactory.php in the factories port (yarr!)
$factoriesPath = database_path('factories/UserFactory.php');
```

So, set sail with `database_path()`, and let it be your lighthouse through the sometimes foggy realm of file paths!

 Ahoy there, Captain! Navigating the vast seas of your Laravel application just got easier with the swashbuckling `lang_path()` function! This dashing method is like a trusty compass, always pointing to the heart of your app's language lair.

In simpler terms, it reveals the full and fancy address of your `lang` directory, making it easy for you to access without getting lost in translation.

```php
$path = lang_path();  // Setting sail for the land of lingo!

$path = lang_path('en/messages.php');  // We're headed straight for 'messages', fair winds and following seas!
```

By the way, matey, you might notice that by default, ol' Laravel doesn't include the `lang` directory in its booty. If you fancy customizing your language files like a dashing pirate, fear not! With a single command from Artisan, the `lang:publish` will hoist those files ashore for ye!

Yarr, now that we've set sail on this jolly voyage of knowledge, may your Laravel adventure be smooth and your code as crisp as a fresh salty breeze off the Seven Seas!

 Alright, let's dive into the enchanting world of Laravel! Today, we're going to talk about a magical helper function that goes by the name `public_path()`. This is not some ancient prophecy or a secret password to a hidden treasure chest, but rather a super-useful tool in your Laravel arsenal.

The `public_path` function, when summoned, grants you access to the royal palace of your application's public directory. It's like having a map to Hogwarts or a key to Narnia, except it's way more practical for your web development needs.

```php
$realm = public_path(); // Voila! You now have the royal address of the public directory.

$realm = public_path('css/app.css'); // If you feel like exploring the wardrobe (oops, I mean CSS folder) within the palace.
```

Now, isn't that just... fantastical? Happy coding, dear wizards and sorcerers of Laravel! 🧙‍♂️🔮✨

 Ahoy there, matey! Buckle up for a little journey through the seas of Laravel's magical `resource_path()` function!

#### `resource_path()` {.collection-method}

This swashbuckling function is your key to unlocking the fully-mapped route to yer application's treasure trove known as the `resources` directory! But that ain't all, matey, this piratey companion can also help ye navigate to a specific file within the resources directory with ease:

```php
$path = resource_path(); // Sails you to the main resources port

$path = resource_path('sass/app.scss'); // Plots a course to a particular SASS file in the SASS folder
```

Now, ye have no need for a compass or parchment map with this trusty navigator on board! So hoist the mainsail and set a course for smoother sailing through your Laravel adventure!

 Ahoy there, code wranglers! Sail the seas of your Laravel app with a trusty compass called `storage_path()`. This handy dandy function navigates you to the heart of your application's `storage` directory - think Captain Cook, but instead of maps and sextants, we've got PHP functions.

```php
$port = storage_path(); // Sail to the shores of your storage directory

$port = storage_path('app/file.txt'); // Plot a course for a specific file within storage land!
```

Remember, `storage_path()` is like the GPS for your files - it'll always guide you to the right destination, whether it's the main port or a hidden treasure chest (in this case, 'file.txt'). Fair winds and following seas! 🌈⚓️

 Ahoy there, web explorers! Buckle up for a thrilling dive into Laravel's URL wizardry!

First things first, understanding how Laravel routes work is like deciphering a pirate map – not as simple as it sounds, but once you crack the code, treasure awaits.

<a name="method-action"></a>

### Method-Action Pairings 🌴🏴‍☠️

Laravel routes are built using method-action pairings, kinda like a parrot's screech or a grog order at the local tavern. To create a new route, we need to match a HTTP verb (GET, POST, PUT, DELETE, etc.) with an action method in our controller.

For instance, imagine you're ordering grog at a tavern:

- POST GrogOrderController@store would be like saying "Give me a grog, barkeep!"
- GET GrogOrderController@index could mean "Show me what grogs I've ordered so far!"

### Route Model Binding 🏆

Now, let's discuss a feature that turns Laravel routing into a real treasure hunt – Route Model Binding! This magical technique automatically transforms route parameters into Eloquent models.

In simpler terms, it's like having Groggy the parrot translate your pirate lingo into proper English for you. You can access the actual Grog object using just `$grogs` instead of dealing with ID numbers and such.

### Naming Routes 🌐🗺️

Naming routes is like marking X's on your treasure map – it makes finding your way around much easier! With named routes, you can easily create links in your application without having to remember the exact URL.

Here's a fun example:

```php
Route::get('/grogs/{grog}', 'GrogController@show')
    ->name('grogs.show');
```

Now, creating a link to this route would be as simple as:

```html
<a href="{{ route('grogs.show', $grog->id) }}">View Grog</a>
```

Aye, Laravel's URL system is no walk in the park – but with a little bit of practice and these essential tools, you'll be navigating your web app like a seasoned buccaneer in no time! 🏴‍☠️🎉

 Ahoy there, shipmates! Sail with me into the murky depths of Laravel land as we delve into the enchanting `action()` function. This magical spellcasting will help ye navigate the treacherous waters of URL generation for your controller actions.

```php
use App\Http\Controllers\HomeController;

$url = action([HomeController::class, 'index']); // Unravel that tangled web of characters and it'll guide you home!
```

But wait, there's more! If your method requires the aid of route parameters to set sail, simply pass them as the second argument:

```php
$url = action([UserController::class, 'profile'], ['id' => 1]); // Hoist anchor and let's voyage with ol' '1' on board!
```

So now, when you're lost in the vast ocean of Laravel, just remember to steer by the `action()` beacon! Arrrr! 🏴‍☠️🌈

 Ahoy there, matey! Buckle up for a swashbuckling journey into the heart of Laravel's pirate ship! Today we're talking about the swashbuckliest of functions - `asset()`. This function is as sharp as Captain Jack Sparrow's wit and just as essential to your treasure-filled Laravel voyage.

So, what does `asset()` do, you ask? Well, imagine ye be on a mission for some buried treasure (website assets, in this case). Now, instead of spending hours navigating the murky waters of manual URL creation, just fire up `asset()` and let it do the heavy lifting. It'll conjure up a URL for yer assets using the current scheme of the request (HTTP or HTTPS), like so:

```php
$URL = asset('img/photo.jpg');
```

Now, I know what you're thinking - "Arrr, mates! What if me assets be buried deep within a CDN or Amazon S3? How can I find 'em then?" Fear not, me hearties! With `asset()`, ye can easily configure the asset URL host by setting the `ASSET_URL` variable in yer `.env` file. Here's how to dig up those hidden assets:

```php
// ASSET_URL=http://example.com/assets

$url = asset('img/photo.jpg'); // http://example.com/assets/img/photo.jpg
```

And that, me hearties, is how ye can use `asset()` to find and display yer precious website assets with ease! May the wind always be at your back, and may your Laravel voyages be filled with plentiful treasure! Yo ho ho! 🏴‍☠️✨

 Ahoy there, Laravel pirates! Ever found yourself in a pickle, trying to navigate the treacherous waters of URL generation? Fear not, for we have a trusty compass named `route()`.

This handy function is like a map to buried treasure—it helps you find the URL for a specific [named route](/docs/{{version}}/routing#named-routes). Just holler:

```php
$url = route('route.name');
```

But, ye be warned, if yer route requires some swashbucklin' parameters (like an 'id' or a 'skull & crossbones'), just pass 'em along as the second argument:

```php
$url = route('route.name', ['id' => 1]);
```

By default, `route()` spits out an absolute URL—great for longitude and latitude. But if ye need a relative URL (for compass adjustments), pass `false` as the third argument:

```php
$url = route('route.name', ['id' => 1], false);
```

And there ye have it, matey! The `route()` function makes navigating Laravel's URL seas a breeze. Yarr!

 Ahoy there, matey! Buckle up, because we're about to embark on a thrilling journey through the seven seas of Laravel's asset management!

First stop: `secure_asset()`, a function so mighty, it ensures your assets are safer than Captain Jack Sparrow's secret treasure map. This trustworthy function generates a URL for an asset using HTTPS, which is like wrapping your files in a protective cocoon of encryption. Here's how you can use it:

```php
$url = secure_asset('img/photo.jpg');
```

Now, imagine the pirate version of this function:

```php
$url = swabTheDeckAsset('img/photo.jpg'); // Don't worry, we only wish to avoid those pesky landlubbers spying on our booty!
```

In a world where data breaches are more common than sea monsters, it's essential to keep your assets as secure as Captain Hook's ticking crocodile. So hoist the sails of your web app and set course for `secure_asset()`. Arr matey!

 Ah, the `secure_url()` function! Think of it as your digital bodyguard in the wild wild web. It's like saying "Watch my back while I navigate through this cyber jungle!" to the internet.

This function turns your humble HTTP path into a swanky, secure HTTPS URL. And guess what? It even lets you bring along extra URL segments as pals for the journey:

```php
$url = secure_url('user/profile'); // Off we go to user/profile, but now it's all encrypted and fancy!

$url = secure_url('user/profile', [1]); // User number 1 tags along for this SSL-protected adventure.
```

So, when you need to keep your URL as safe as Fort Knox, don't forget to call upon the trusty `secure_url()`. It's like a cybersecurity superhero hiding in plain sight!

 Alrighty, buckle up, Laravel buddies! Let's dive into the `to_action()` function, a dance move you'll want to master if you're cooking up some controllers.

This cheeky little number turns your controller actions into a fabulous redirect party!

```php
use App\Http\Controllers\UserController;

And here's the secret sauce:
return to_action([UserController::class, 'show'], ['user' => 1]);
```

Now, when your users request for a dance (or a page), they'll be whisked away to the `show` party! But if you're feeling fancy and want to add some extra flair, you can:

```php
return to_action(
    [UserController::class, 'show'],
    ['user' => 1],
    302,
    ['X-Framework' => 'Laravel']
);
```

This fancy footwork lets you specify the dance style (HTTP status code) and even throw in some flashy response headers.

Now, get out there and start serving up those redirects with style!

 Ahoy there, Captain! Dive not into the murky waters of the Redirect Shoal, but rather sail smoothly with the `to_route()` function - the trusty compass for your Laravel voyage!

This nifty navigator be generating a delightful HTTP response, akin to a lighthouse guiding lost souls (or web browsers) back on track. The catch? It points the way to a charmingly named route:

```php
Return not just a shipwrecked sailor, but an entire fleet with `to_route('users.show', ['user' => 1])`.
```

But fear ye not! When the need arises to change the course (HTTP status code), or hoist extra flags (response headers), you can pass them as the third and fourth arguments:

```php
Sail through the seas of Laravel with `to_route('users.show', ['user' => 1], 302, ['X-Framework' => 'Laravel'])`. Now that's a well-rounded voyage!
```

Fair winds to thee! (And don't forget to check out our [docs](/docs/{{version}}/responses#redirects) and [routing](/docs/{{version}}/routing#named-routes) for further adventure!)

 Ahoy there, matey! Buckle up as we dive into the magical land of `uri()`, a Laravel function that can transform even the humblest URL into an enchanted fluent instance. Here's a whimsical look at this maritime marvel:

#### `uri()` {.collection-method}

Pull up anchor and set sail with the `uri` function, which crafts a flamboyant URI instance for your given URL:

```php
$shanty = uri('https://example.com sea shanty')
    ->setPath('/users') // Ahoy! Change course to users' land
    ->query(['page' => 1]); // Tie up the anchors with some query strings
```

If you feed `uri()` an array containing a pair of seaworthy controller and method, it'll create a `Uri` instance for that captain's treasure map route path:

```php
use App\Http\Controllers\UserController as Cap'n_Jones;

$shanty = uri([Cap'n_Jones::class, 'show'], ['user' => $user]); // Off to the ol' show with Cap'n Jones and his crew!
```

If your controller is invokable, just drop its name:

```php
use App\Http\Controllers\UserIndexController as The_Crow;

$shanty = uri(The_Crow::class); // Ahoy, we be heading to the UserIndex waters now!
```

Should your URL match the name of a [named route](/docs/{{version}}/routing#named-routes), you'll set sail for that port's `Uri` instance:

```php
$shanty = uri('users.show', ['user' => $user]); // Off to the land of 'users.show' with ol' matey!
```

<a name="method-url"></a>
Happy sailing, and may your Laravel voyages be filled with `uri()` magic!

 Ahoy there, coding pirates! Brace yourselves for some seaworthy syntax as we navigate through Laravel's `url()` function, a trusty companion in our treasure trove of navigational tools.

First off, if you're looking to set sail for a specific landmark on the web, the `url` function is your compass!

```php
$journey = url('user/profile'); // Off we go to User's swanky abode!
```

But what if ye captain wants to bring a passenger along? Fret not, matey! Just tack on some parameters:

```php
$voyage = url('user/profile', [1]); // Captain One-Eye and his parrot, Polly, join the expedition.
```

In case ye can't find yer bearings, this function can also serve up a map of the current position:

```php
$currentLocation = url()->current(); // Latitude: 51.5074, Longitude: -0.1278 (That's London for all ye landlubbers.)

$fullMap = url()->full(); // Includes the port number and ship name too.

The last known location before ye set sail?
$previousPort = url()->previous();
```

For more thrilling tales on `url()`, be sure to check out our [URL generation documentation](/docs/{{version}}/urls#generating-urls). Happy travels, mateys! May your journeys be swift and your code clean. Arrr! 🌴🐙🚀

 Ahoy there, code pirates! Sail through these Laravel waters and learn about our trusty ship's miscellaneous functions. Let's hoist the Jabberwocky sails and set course for the method `abort()`! 🌴⚓️

When you find yourself in a treacherous coding situation that requires an immediate stop, raise the white flag of surrender with the help of this trustworthy function. The `abort()` function halts the current request and displays an error message to the user. It's like throwing a bucket of cold seawater on a raging inferno—it puts out the flames quickly! 🔥🐚

To employ this function in your own pirate adventures, simply call it from within your code:

```php
abort(403); // Sets the HTTP status code to "Forbidden" and displays an error message.
```

Remember, a little humor goes a long way during those nail-biting moments when something isn't quite right with the ship's rigging. So keep your fingers on the keyboard and use `abort()` wisely to avoid unnecessary drama at sea! 🌴🐙🚀

<a name="method-redirect"></a>

Now, if you don't want to abandon ship altogether but instead redirect your crew to calmer waters, then fear not—Laravel provides the `redirect()` function for just such an occasion! 🏺🚣‍♂️

Whether it's a stormy coding session or simply a change of course, you can steer your Laravel ship in a new direction using this helpful function. To redirect your users to a different page, simply call `redirect()` and pass in the location as an argument:

```php
return redirect('/home'); // Redirects the user to the '/home' route.
```

The `redirect()` function is like a trusty old compass—always ready to point you in the right direction when you need it most! 🧭🐳

So, set sail for new adventures with these Laravel functions, and may your coding voyages be filled with laughter and success! 🌴🌊🎉🚀

 Ahoy there, coding pirates! Steer your ships towards the mighty `abort()` function, a swashbuckling tool in Laravel's treasure chest of utilities!

#### `Yo ho abort()` {.collection-method}

Arr mateys, this here `abort` function be chuckin' an [HTTP exception](/docs/{{version}}/errors#http-exceptions) overboard, and it'll be caught by the [exception handler](/docs/{{version}}/errors#handling-exceptions), just like a seasoned buccaneer catching a fish!

```php
abort(403); // "Ye be forbidden to pass!"
```

But wait, there's more! Y'all can customize the exception's message and even add some custom HTTP response headers that'll make the browser dance like a merry jester:

```php
abort(403, 'Arrr! Unauthorized, ye scurvy dog.', $headers); // "Aye, walk the plank!" with style
```

<a name="method-abort-if"></a>
Ye can also use it with `if()` statements to add a dash of conditional shenanigans:

```php
if ($somethingIsWrong) {
    abort(403); // "Avast! Stop that right there!"
}
```

So hoist the Jolly Roger, mateys! `abort()` is here to save your day and make your code as smooth as a pirate's peg leg!

 Ahoy there, Laravel coders! Let's dive into the whimsical world of `abort_if()`, a function that's not just a dance move but a superhero's secret maneuver for dealing with pesky boolean expressions.

When you're working with a binary truth (like checking if the user is an admin), and things aren't as they should be, `abort_if()` steps in to throw an HTTP exception, making it clear that unauthorized access has been attempted:

```php
abort_if(! Auth::user()->isAdmin(), 403); // It's like saying "Whoa there! You ain't the big boss!"
```

Now, if you want to add some flavor to your exception (because who doesn't love a good side of sass with their errors?), you can provide a custom response text as the third argument and an array of personalized response headers as the fourth. Just like at a fancy dinner party:

```php
abort_if(! Auth::user()->isAdmin(), 403, 'Sorry, only admins allowed!', ['X-Custom-Message' => 'Admins only']);
```

And just like that, your application becomes the cool kid on the block, serving up more than just code – a little taste of flair with its errors too! 🎉🎈

 Ahoy there, coders! Stepping into the Laravel realm once more, I bring you the enchanting `abort_unless` function, a magical helper that's more than just your regular knight in shining armor!

Ever found yourself in a pickle where things aren't quite right and you need to halt the show? Well, fear not, because `abort_unless` is here to save the day (and throw an HTTP exception) if your given boolean expression isn't quite as true as you thought:

```php
// Oh dear, this user doesn't seem to be an admin... better stop the whole shebang!
abort_unless(Auth::user()->isAdmin(), 403);
```

Now, this little function isn't just a one-trick pony. It's got some flair, too! Just like its cousin `abort`, it can also throw in a personalized response text (the third argument) and even whip up a custom response header (the fourth argument) to make things extra exciting:

```php
// This time, with a side of cheeky humor!
abort_unless(Auth::user()->isAdmin(), 403, "Whoa there! Only admins allowed in here.");

// Or even fancier custom response headers!
abort_unless(Auth::user()->isAdmin(), 403, "Only admins allowed", ['X-Custom-Header' => 'Just for you']);
```

So go forth and conquer the code, dear friends! With `abort_unless`, your Laravel adventures are sure to be anything but dull.

 Ahoy there, code pirate! You've stumbled upon the swashbuckling `app()` function, a treasure trove of Laravel goodness! This here be the magical gateway to the mighty service container instance:

```php
$treasureChest = app();
```

Just like a wise old sea captain, you can call upon your trusty shipmates (services) by passing their names or job titles (interfaces):

```php
$parrotSpeaker = app('I_Am_A_Talkative_Parrot');
```

So hoist the sails and steer towards the bountiful waters of dependency injection, matey!

 Alright, let's dive into the whimsical world of Laravel authentication! 🌴🔓

#### `auth()` {.collection-method} - Your very own magic 8-Ball for user authentication!

The `auth` function is like a genie in a bottle, granting you access to an authenticator instance, a fancy name for your personal security guard. It's a great alternative to the aloof and often busy `Auth` facade:

```php
$user = auth()->user(); // Just ask the genie who the currently logged-in user is
```

But wait, you say you need to specify which guardian of the realm you're after? No problemo! Here's how:

```php
$user = auth('admin')->user(); // If you'd like to speak with the admin, just ask for them by name
```

And there you have it! User authentication in Laravel has never been this fun or easy. Go on, grab that user data like a digital pirate plundering treasure chests! 🏴‍☠️✨

 Alrighty, let's dive into the magical world of Laravel! Today, we're going to talk about a superhero among functions: The `back()` method!

Imagine you're lost in the vast jungle of the web, and suddenly you find yourself needing to return to the last campfire. That's where our trusty friend, the `back()` function, comes into play. It generates a powerful Redirect HTTP response that beams you right back to your previous location, like a time machine for web developers!

```php
return back($status = 302, $headers = [], $fallback = '/'); // If you're feeling fancy and need some extra options

return back(); // For those of us who just want the quickest way home
```

Just remember, with great power comes great responsibility. Don't overuse it, or you might end up lost in an endless loop of time travel! Now, go forth and conquer the web with your newfound knowledge! 🌐🚀🦸‍♂️

#### `bcrypt()` {.collection-method}



The `bcrypt` function [hashes](/docs/{{version}}/hashing) the given value using Bcrypt. You may use this function as an alternative to the `Hash` facade:

```php
$password = bcrypt('my-secret-password');
```

<a name="method-blank"></a>


#### `blank()` {.collection-method}



The `blank` function determines whether the given value is "blank":

```php
blank('');
blank('   ');
blank(null);
blank(collect());

// true

blank(0);
blank(true);
blank(false);

// false
```

For the inverse of `blank`, see the [filled](#method-filled) function.

<a name="method-broadcast"></a>


#### `broadcast()` {.collection-method}



The `broadcast` function [broadcasts](/docs/{{version}}/broadcasting) the given [event](/docs/{{version}}/events) to its listeners:

```php
broadcast(new UserRegistered($user));

broadcast(new UserRegistered($user))->toOthers();
```

<a name="method-broadcast-if"></a>


#### `broadcast_if()` {.collection-method}



The `broadcast_if` function [broadcasts](/docs/{{version}}/broadcasting) the given [event](/docs/{{version}}/events) to its listeners if a given boolean expression evaluates to `true`:

```php
broadcast_if($user->isActive(), new UserRegistered($user));

broadcast_if($user->isActive(), new UserRegistered($user))->toOthers();
```

<a name="method-broadcast-unless"></a>


#### `broadcast_unless()` {.collection-method}



The `broadcast_unless` function [broadcasts](/docs/{{version}}/broadcasting) the given [event](/docs/{{version}}/events) to its listeners if a given boolean expression evaluates to `false`:

```php
broadcast_unless($user->isBanned(), new UserRegistered($user));

broadcast_unless($user->isBanned(), new UserRegistered($user))->toOthers();
```

<a name="method-cache"></a>


#### `cache()` {.collection-method}



The `cache` function may be used to get values from the [cache](/docs/{{version}}/cache). If the given key does not exist in the cache, an optional default value will be returned:

```php
$value = cache('key');

$value = cache('key', 'default');
```

You may add items to the cache by passing an array of key / value pairs to the function. You should also pass the number of seconds or duration the cached value should be considered valid:

```php
cache(['key' => 'value'], 300);

cache(['key' => 'value'], now()->plus(seconds: 10));
```

<a name="method-class-uses-recursive"></a>


#### `class_uses_recursive()` {.collection-method}



The `class_uses_recursive` function returns all traits used by a class, including traits used by all of its parent classes:

```php
$traits = class_uses_recursive(App\Models\User::class);
```

<a name="method-collect"></a>


#### `collect()` {.collection-method}



The `collect` function creates a [collection](/docs/{{version}}/collections) instance from the given value:

```php
$collection = collect(['Taylor', 'Abigail']);
```

<a name="method-config"></a>


 Ahoy there, Laravel Captain! Time to dive into the `config()` function - the swashbuckler of settings in our seaside coding adventure! This dashing method will help you grab a value from your ship's configuration (no need to hunt for pirate maps).

To get your hands on some config treasure, simply use dot notation: `$value = config('app.timezone');` – just like a seasoned buccaneer pointing to his favorite port on a dusty old map. But what if ye be missing some treasure? Fear not! You can also provide a clever default value for when the configuration option is as absent as a parrot in a storm: `$value = config('app.timezone', $default);`

Now, brace yourselves! You can set sail and change the course of your ship's configuration at runtime by passing an array of key-value pairs. But remember, this method only affects the current voyage and leaves the rest of your treasure chest untouched: `config(['app.debug' => true]);`

Yo ho ho! That be all ye need to know about the `config()` function. Happy configuration, matey!

 ### Oh, the `context()`! 🎨 The magical paintbrush of Laravel's world! 🌏

This isn't your average crayon coloring, folks! It's a superhero-like power that can fetch values from the current **cosmic canvas** (a.k.a context). And just like every good superhero, it comes with a backup plan - a default value, should the cosmos conspire against us and your key be missing in action! 🌟

```php
// Fetch 'trace_id' without a fallback superpower (caution advised)
$value = context('trace_id');

// Add some backup power to your fetch, just in case 😉
$value = context('trace_id', $superheroBackup);
```

And when you want to create your own cosmic masterpiece, you can set the context values using an array of key-value pairs. Just remember, a universe needs its own unique identifier! 🌈

```php
use Illuminate\Support\Str;

// Set 'trace_id' with some intergalactic flair (and it's always a good idea to have a UUID!)
context(['trace_id' => Str::uuid()->toString()]);
```

Now, get out there and conquer the universe... one context value at a time! 🚀💫

 Ah, the `cookie()` function - a sweet treat for your Laravel app! 🍪

Think of it as your digital pastry chef, whipping up fresh cookies (not the edible kind, though those are always appreciated) to remember your user's preferences. Just like how mom remembers who ate all the cookies before dinner, this function ensures no crucial data is forgotten! 🍪💔

Here's the recipe for creating a new cookie:

```php
$cookie = cookie('name', 'value', $minutes);
```

In this simple yet tasty recipe, replace `'name'` with your desired cookie name (like "username" or "favorite_color"), `'value'` with the information you want to store (such as the user's login credentials or their favorite ice cream flavor), and `$minutes` is the length of time (in minutes) you want this cookie to last. Set it to a higher number if you're making a long-lasting friendship, or a lower number for temporary data like a shopping cart session. 🛍️🕒

Just don't forget that Laravel cookies are securely encrypted and only available within the current domain. So, no sneaky strangers can nab your user's precious cookie stash! 🦹‍♂️💪

Now, go forth and create delightful digital treats with `cookie()` in your Laravel apps! 🎉🍪🎁

 Ahoy there, programming pirates! Steer clear of the treacherous seas of cross-site request forgery with the swashbuckling `csrf_field()` function! This nifty little number generates an HTML `hidden` input field that's packed to the brim with the value of your CSRF token.

Now, you might be thinking, "Arr matey, what be this CSRF token ye speak of?" Well, imagine it as a secret handshake between your browser and Laravel, ensuring only legitimate requests make it to land on your ship (website).

To make use of this magical artifact in yer Blade syntax, simply unsheathe it like so:

```blade
{{ csrf_field() }}
```

Ye can thank us for saving ye from the clutches of those pesky pirate-bots later! Yarr, Laravel be here to protect yer treasure chest of data! 🏴‍☠️

 Ahoy there, web adventurer! Buckle up for a jolly jaunt into the world of Laravel's CSRF protection, where cookies and tokens are as scrumptious as a pirate's treasure map!

First off, let me introduce you to the swashbuckling `csrf_token` function! This trusty sidekick retrieves the current CSRF token value for your forms, so they can dance through cyberspace without raising any suspicious eyebrows:

```php
$token = csrf_token(); // Imagine this pirate yelling 'Yarr!' instead of a semicolon. Just imagine it!
```

Remember, without proper CSRF tokens, your forms might find themselves stuck in cyber-jail, unable to complete their quests and make your users happy! So, always keep `csrf_token` by your side, like a parrot on your shoulder or a compass in the ocean. Happy sailing, and may your forms always reach safe harbor!

 Ahoy there, Laravel sailor! Fancy yourself a code pirate who's cracked the encryption code? Well buckle up, matey! Let's dive into the nautical secrets of `decrypt()`, shall we?

#### `decrypt()` {.collection-method}

Sail the seven seas no more with fear in your heart! Arrrr, you say you have a mysterious chest full of encrypted values? Well, matey, it's high time to let the sun shine on them with our trusty `decrypt()` function!

This swashbuckling little number is just what the ship's doctor ordered if ye be seekin' an alternative to our trusty Crypt facade. So grab a barrel of rum and gather 'round, for we're about to unleash the power of decryption on those cryptic conundrums!

```php
$password = decrypt($value);
```

Ye'll find that your encrypted treasure chest is now filled with plain ol' text, aye, matey! But what about those times when you need to re-encrypt your booty for safekeeping? Fear not! For the `decrypt()` function has a wicked twin sister called [encrypt](#method-encrypt). Aargh, that's some powerful sibling rivalry right there!

So hoist the Jolly Roger, mateys, and set sail for decryption adventures with Laravel's `decrypt()` function! It'll make your pirate heart sing like a mermaid's lullaby!

 Ahoy there, intrepid code explorers! Let's delve into the charming, yet powerhouse method known as `dd()`! This illustrious PHP function, much like a magician pulling rabbits from hats, extracts your variables and presents them in all their glory before bowing out gracefully, ending the script's performance.

```php
dd($value); // Cue: Ta-daaah! Here's your variable! Now, curtains for us.

dd($value1, $value2, $value3, ...); // Whoa, now that's a rabbit-pulling feat!
```

Now, you might ask, "But what if I don't want my script to vanish like a stagehand after the show?" Fear not, dear friends! If you desire your script to continue its dance, simply employ the [dump](#method-dump) function instead. It's like a charismatic assistant who delivers the goods but keeps the lights on for you! 💡✨

 Ahoy there, coding seafarers! Brace yourself for the swashbuckling tale of Laravel's `dispatch()` function - a veritable treasure chest of asynchronous goodness!

This magical pirate ship of a method, when fed your [job](/docs/{{version}}/queues#creating-jobs), will gleefully shove it onto the Laravel job queue, ensuring its safe and timely delivery to the depths of your application:

```php
dispatch(new App\Jobs\SendEmails);
```

And lo! The `dispatch()` function not only offers a single-use journey, but also a synchronous option that'll wait for the job to complete before continuing on its merry way. So if you fancy a spot of synchronous queueing, look no further than:

<a name="method-dispatch-sync"></a>
```php
dispatchSync(new App\Jobs\SendEmails);
```

Now, let's raise the anchor and set sail on this wondrous journey through the Laravel seas!

 Ah, the `dispatch_sync()` function! It's like the overly eager barista at your local coffee shop who can't wait to start pulling shots as soon as you walk in. But instead of espresso, it's tasking through a queue. Here's the lowdown:

This little gem pushes your job into the sync queue, which is the queue equivalent of saying "I need this done RIGHT NOW!"

```php
dispatch_sync(new App\Jobs\SendEmails);
```

Just think of it as a magic wand for tasks. Instead of waving it and turning a pumpkin into a carriage, you're waving it to make your job disappear (from your hands) and appear (in the queue), ready to be processed immediately! 🎩 ✨

 Ahoy there, coding cowpoke! Buckle up for a rollercoaster ride through the wild west of Laravel debugging! 🎠💨

Let's talk 'bout the ever-dependable `dump()` function, your trusty sidekick when it comes to unmasking those pesky variables. Here's how you call it:

```php
dump($value); // Or if you're feeling rowdy: dump($value1, $value2, $value3, ...);
```

This function takes your variables and makes 'em dance like a marionette show at the local saloon. But unlike those wooden characters, these variables won't be as static—you'll see them come to life right before your eyes! 🎪

Now, if you're feeling particularly adventurous and want to hang up your boots after a good ole' var dump, go ahead and grab the `dd` function instead (short for "die and dump"). It's like a six-shooter that stops your script cold in its tracks once it's fired. 🤠🚀

Remember to keep this function in your arsenal when you're navigating through the lawless frontier of code, and you'll find yourself a tad more comfortable in those chaotic times! Happy trailblazing, partner! 🌵💪

 Alright, let's get this encryption party started! 🎉 The `encrypt()` function is your secret squirrel in hiding sensitive data. It's like a magical cloak for your code, making it disappear into a world of uncrackable codes. 🔒🎩

You can use this little charm as an alternative to the Crypt facade, just like swapping out a tired old magic wand with a shiny new one. Here's a quick spell to cast:

```php
$mystery = encrypt('my-secret-value');
```

Now, you've got yourself an encrypted secret, safe and sound in its cryptic cocoon! 🦄🔒

For those curious about the reverse side of this enchantment, fear not! You can find the [decrypt](#method-decrypt) function right over yonder. It's like that wise old owl who always knows when to hoot the truth. 🦉💬

Just remember, keeping your secrets wrapped up tight is essential in this digital world of treasure hunters and mischievous imps. Happy encrypting! 🎉🔐✨

 #### 🌳 The Green-Thumb Function: `env()` {.collection-method}

Welcome, plant enthusiasts! Let's talk about our gardener friend, `env()`, who has a knack for fetching the value of your garden's secrets - those environment variables you've been so careful to nurture. 🌱

```php
$garden = env('GARDEN_NAME'); // Fetch the name of your secret garden... ooo mysterious!

$garden = env('GARDEN_NAME', 'Secret Forest of Servers'); // ...or if it's hiding, we'll call it that instead.
```

🚨 **ATTENTION GARDENERS:** 🚨
If you find yourself watering your config with the `config:cache` command during deployment, remember, `env()` is a picky plant! It only appreciates being called from within its cozy configuration files. Once the configuration has been cached, it won't accept water from the `.env` file anymore and starts sipping on external environment variables instead—like server-level or system-level ones, or if you're really unlucky, a tall glass of NULL! 🌺

<a name="method-event"></a>
Now that we've watered your curiosity, let's get back to tending those code roses! 🌹🌷

 Ahoy there, coder! Fancy a whirlwind adventure through the exciting world of Laravel events? Buckle up, because we're about to embark on an epic journey with the `event()` function!

This trusty sidekick is like the reliable postman who makes sure your messages (events) reach their intended recipients—the event listeners. It dispatches the given event (not a secret spy mission, I'm afraid) to its designated agents:

```php
event(new UserRegistered($user));
```

In this daring example, our hero, `UserRegistered`, is being sent off on a mission with precious cargo—the user! It's just like dispatching Batman with the Joker—you know, if Batman was an event and the Joker was a user. So grab your cape (or IDE) and join in the fun of sending out events to the wild world of Laravel listeners!

 Ah, the delightful world of Laravel coding! Where even data faking has a posh name - `fake()`. It's like playing dress-up for your database, but without any actual clothes.

This little gem pulls out a Faker fairy godmother from the magical container (a bit like Cinderella's fairy godmother, minus the glass slippers and pumpkins). Handy when you need to spin some yarn in model factories, database seeding, tests, or view prototyping.

Here's a fun example that'll make your console laugh:

```blade
@for ($i = 0; $i < 10; $i++)
    <dl>
        <dt>Name</dt>
        <dd>{{ fake()->name() }} - The name-giver of dreams (or at least our fictional data!)</dd>

        <dt>Email</dt>
        <dd>{{ fake()->unique()->safeEmail() }} - An email so unique, it's only been used once before in the entire universe!</dd>
    </dl>
@endfor
```

By default, this function uses the `app.faker_locale` configuration option from your `config/app.php`. Usually set by the `APP_FAKER_LOCALE` environment variable. But if you want to change the locale (because who doesn't love an international party), just pass it as an argument:

```php
fake('nl_NL')->name() - Now we're speaking Dutch! Or, more accurately, our data is!
```

Now isn't that a fun way to play with your data? Just remember, even though it's fake, the laughter it brings is all too real! 😅

 Ahoy there, code compadre! Sail with me as we dive into the fascinating world of Laravel's `filled()` function, a seaworthy helper that'll keep your ship from hitting the proverbial iceberg. You see, this function is the swashbuckling pirate who bravely declares whether your given value has managed to survive the scourge of "blankness"!

```php
filled(0); // Aye-aye, matey! No blankness here!
filled(true); // Blank? Ha! Fie on that notion!
filled(false); // Even a falsehood is too much for blankness to handle!

// 3 cheers for no blankness!

filled(''); // Arrrr! It's empty as a hollowed-out treasure chest!
filled('   '); // The whitespace might fool ye, but not this stalwart function!
filled(null); // The ghostly phantom of data? No match for the `filled()` function!
filled(collect()); // An array o' booty? This captain's keen eye sees through it all!

// Aye, blankness reigns supreme in these cases...
```

But fear not, me hearties! If ye find yerself yearning for the opposite of `filled`, we've got ye covered with the trusty [blank](#method-blank) function. Fair winds and following seas, matey!

 Ahoy there, coders! Let's get our log fires crackling with some fun and flair using Laravel's `info()` collection method!

Think of it as your very own digital campfire where you can share tales of coding triumphs (and the occasional tragedy). To ignite this friendly fire, simply summon:

```php
info('Some helpful information!'); // Ain't no party like a log-party 'cause a log-party don't stop till all your problems are solved!
```

If you want to add a bit more flavor to your yarns, feel free to pass an array of contextual data along with your message:

```php
info('User login attempt failed.', ['id' => $user->id]); // Now our logs know that it wasn't just any old user trying to break in – it was that pesky one with the id of '.$user->id.'!
```

So, don't be shy! Share your app's adventures and keep those digital campfires burning bright with Laravel's `info()` method. Happy logging! rones🔥🚀

 Ahoy there, Laravel enthusiasts! Let's embark on a whimsical journey through the vast sea of PHP functions, shall we? Today, we're going to talk about a seafaring companion named `literal()`. Now, don't let its simple name fool you; this function is a swashbuckling powerhouse that creates ships of new stdClass instances!

So, imagine you've got a mate named Joe who knows his way around PHP and Ruby. You can use the `literal()` to craft him a ship fit for a captain:

```php
$joeShip = literal(
    name: 'Joe', // The Captain of this fine vessel
    languages: ['PHP', 'Ruby'] // Our trusty compass and map
);

// Accessing our captain's name, as easy as saying "Yo ho ho"!
echo $joeShip->name; // 'Joe'

// And his navigation skills? Just as simple:
print_r($joeShip->languages); // ['PHP', 'Ruby']
```

So, set sail with `literal()`, and create your very own phantom ships (stdClass instances) in no time!

 Ahoy there, intrepid developer! Dive into the enchanting realm of Laravel logging with a splash and a giggle as we introduce you to the mystical `logger()` function!

This powerful spell can cast a debug-level message into the magical realms of your application's log, ensuring that even the deepest secrets are recorded for all eternity (or until you empty the logs, whichever comes first). Here's how to conjure it:

```php
logger('I've found the secret sauce!'); // Shh, don't tell anyone!
```

But wait! What if your message isn't quite complete without a few contextual tidbits? Fear not, my friend! Simply pass an array of data along with your message to summon forth a more detailed charm:

```php
logger('User #23 has just logged in.', ['id' => $user->id]); // Don't forget to keep track of your users, matey!
```

And if you're feeling particularly bold and want to take matters into your own hands (or wands), the `logger()` function will bestow upon you a magnificent logger instance that you can manipulate at will:

```php
$logInstance = logger()->error('You are not allowed here.'); // Watch out for mischievous trolls lurking in the shadows!
```

So, sail forth with confidence, and let the `logger()` function be your trusty sidekick as you unravel the mysteries of Laravel logging! Happy adventuring, brave coder!

 Ahoy there, code wranglers! Meet your new BFF in the wild world of Laravel forms: `method_field()`, the secret sauce that'll make your forms sashay like a CGI dancer at a Y2K party!

This little gem generates an HTML hidden input field filled with the faux-ed value of your form's HTTP verb. Confused? Let me explain like your grandma taught you to dance: It's like dressing up a shy wallflower for the dance floor without actually asking her to dance, just in case she suddenly remembers she has a dislike for polka.

Let's get this party started with some good old Blade syntax (because who doesn't love a bit of synthwave?):

```blade
<form method="POST">
    {{ method_field('DELETE') }}  <!-- Boom, it just got served! -->
</form>
```

Now, your form is ready to moonwalk its way into the HTTP verb disco. But remember, unlike a good time at a rave, moderation is key here. Use `method_field()` wisely and don't overdo it – nobody wants to see your form grinding with every verb under the sun! 💃🕺️🎉

 Ahoy there, Laravel voyagers! Let's embark on an exhilarating journey through the vast ocean of time with the `now()` function - your personal ChronoCaptain that never leaves you high and dry (or rather, never lets you be tardy).

Anchors aweigh! The `now` function dives headfirst to create a brand-spanking-new `Illuminate\Support\Carbon` instance, which is fancy speak for a precise timekeeper that'll help keep your application shipshape. Just drop this line of code in your code log and let the good times roll:

```php
$current_time = now();
```

Now, you might be wondering what all the fuss is about with `Illuminate\Support\Carbon`. Well, imagine it as the compass that guides your app through the ever-shifting seas of time. It'll help you keep track of dates and times with an accuracy that'd make Captain Cook green with envy. Happy navigating! ⚓️🌈

 Ah, the grand ol' `old()` function! This little Laravel chucklehead is just what you need when you want to dig up some long-lost data from your session's dusty attic.

So, imagine you've got a form with a 'value' field and you're about to display it again, but oh no! The user clicked away without submitting. Fear not, for `old()` is here! Just like a seasoned archaeologist, `old()` will scour through the ruins of your session, unearthing that 'value' data you so desperately need:

```php
$ancientValue = old('value');

// Want to give it a fitting burial shroud? No problem!
$ancientValue = old('value', 'default');
```

Now, here's where things get really interesting. You see, the "default value" you provide to `old()` is usually akin to a pharaoh's golden sarcophagus – it's often an attribute of an Eloquent model! That's right, dear reader, Laravel lets you pass an entire Eloquent model as the "default value" argument. So, instead of wrapping your poor model in bandages and mummy wrap, just toss it into `old()` like this:

```blade
{{ old('name', $user->name) }}

// Or if you're feeling extra dramatic...

{{ old('name', $user) }}
```

Now, doesn't that make digging up session data feel more like an adventure through the Egyptian desert and less like a tedious archaeological dig? Happy digging! 🪨🏺🎉

 Ah, the `once()` function! It's not just a one-night stand in Laravel's world of PHP wonders, but more like a promiscuous old married couple who only serve each other once per night (and remember it for eternity).

This magical method executes your callback and stashes the result away in memory, ready to be served up on request. Call it again with the same callback? Oh, they'll gladly remind you of their initial rendezvous, sparing you from another round of calculations:

```php
function random(): int
{
    return once(fn() => rand(1, 1000)); // Ah, a wild number between 1 and 1000 appears!
}

echo random(); // 123
echo random(); // 123 (Oh, the memories!)
echo random(); // 123 (They've still got it!)
```

Now here's where things get interesting: when `once()` is invoked within an object instance, each instance has its own private stash of secrets. It's like they're dating different people and keeping their intimate moments separate.

```php
<?php

class SecretNumberService
{
    public function all(): array
    {
        return once(fn() => [1, 2, 3]); // A secret combination that only this instance knows!
    }
}

$service = new SecretNumberService;

echo $service->all();
echo $service->all(); // (Oh, they've got a thing going on!)

$secondService = new SecretNumberService;

echo $secondService->all();
echo $secondService->all(); // (A whole different story!)
```

So there you have it! The `once()` function: making your code more efficient, and relationships in Laravel a whole lot more complicated.

 Ah, the `optional()` function - Laravel's superhero for saving your PHP bacon! This magical method takes any argument, and it's like giving a pair of X-ray specs to your code. It allows you to peek at properties or call methods on an object without having to worry about a null pointer error causing mayhem in your day (or your codebase).

Let me give you an example:

```php
$street = optional($user->address)->street;
// No more 'Undefined property: stdClass' errors for our dear $user!
```

And, if you find yourself in a pickle with old MacDonald having an empty `name`, fear not! You can use the `optional()` function to save the day:

```php
{!! old('name', optional($user)->name) !!}
// No more "E-I-E-I-O but where's my name?" situations here!
```

But wait, there's more! The `optional()` function isn't just a one-trick pony. It can also handle a closure as its second argument. If the value provided as the first argument is not null, it'll invoke this super secret squirrel power:

```php
return optional(User::find($id), function (User $user) {
    return $user->name;
});
// Now you can name that user without a worry in the world!
```

So, next time you're dealing with null values and want to avoid those pesky errors, remember your friendly neighborhood `optional()` function. It's here to save the day, just like your favorite superhero (or supervillain... no judgment).

 Oh, the `policy()` method is like the gatekeeper of your Laravel app's data universe! 🚀🚫 It's the dude that pulls out a magic wand and conjures up a policy instance for a given class. Here's how to summon it:

```php
$policy = policy(App\Models\User::class); // Yes, that's right! We just called forth the guardian of our users data with a simple line of code. Impressive, isn't it? 🧙‍♂️
```

Want to know more about this mysterious gatekeeper? [Check out the official documentation on authorization](/docs/{{version}}/authorization#creating-policies). It's like a secret handbook on how to control who gets in and out of your data castle. 🏰👑

 Ahoy there, Laravel adventurers! Let's embark on a jolly journey through the magical land of `redirect()` function, shall we? This merry method is not just a dance move in the mystical kingdom of PHP, but a powerful tool to redirect your users to different realms within your application.

First off, let me tell you about the basic syntax:

```php
return redirect($to = null, $status = 302, $headers = [], $secure = null);
```

Here's a fun breakdown:
- `$to`: The destination URL where you want your brave users to end up. If omitted, it defaults to an empty string.
- `$status`: The HTTP status code for the redirect (default is 302). Feel free to use your favorite status codes – just remember to keep it friendly and enjoyable for all web surfers!
- `$headers`: Additional headers you'd like to include with the redirect response. Let your creativity flow, but don't forget to ensure the headers are properly formatted and don't confuse our users too much.
- `$secure`: If the redirect URL is secure (HTTPS), set this to true or false accordingly (default is null).

Now let me show you some fun ways to use `redirect()` function:

```php
return redirect('/home'); // Sends users straight to their humble abode, AKA the home page.

return redirect()->route('route.name'); // Whisk your users away to a specific route within your app using its charming name.
```

So there you have it, dear Laravel voyagers! Go forth and use the mighty `redirect()` method to guide your users through your magical application with ease, grace, and a touch of humor. Happy coding, pirates! 🏴‍☠️

 Ahoy there, code pirates! Prepare to navigate through the treacherous seas of errors with the help of Laravel's trusty companion - the `report()` function!

This handy dandy method will be your loyal sidekick in reporting those pesky exceptions that threaten to sink your ship (a.k.a., your application). To call upon its services, just utter the incantation:

```php
report($e);
```

But wait! `report()` doesn't just play well with exceptions; it also groks strings like a modern-day Sherlock Holmes. When you provide a string as an argument, `report()` will create a new exception, clad in the given string as its message:

```php
report('Something went wrong.');
```

Now, if you're still having trouble catching all those elusive errors, remember that every good pirate needs a trusty exception handler. Set sail for [exception handling](/docs/{{version}}/errors#handling-exceptions) and equip yourself with the knowledge needed to master Laravel's robust error reporting system! Yarrrr! 🏴‍☠️🔳

 Ahoy there, code wranglers! Sail the seas of Laravel with this swashbuckling function, `report_if()`! It's a veritable treasure chest of error handling, ready to unleash the Kraken of exceptions upon your application if conditions are met.

So, how does it work, ye landlubbers? Simple! When the boolean expression you provide sails the seas of true, this function reports an exception using your trusty exception handler like a seasoned sailor navigating a storm.

```php
report_if($shouldReportBeTrue, $e); // Setting sail with an error
report_if($shouldReportBeTrue, 'Something went awry.'); // Setting sail with a cheeky message
```

Ah, the beauty of Laravel – turning programming into an adventure on the high seas! Now, set your sails straight for more documentation fun! 🏴‍☠️

 Ahoy there, Laravel coders! Let's dive into the enchanting world of `report_unless()`, a function that'll make you feel like a superhero debugger! 🚀🦸‍♂️

This magical spell will only cast an exception (you know, those pesky error messages) if a given boolean expression turns out to be as truthful as a politician's promise. Here's how it's conjured:

```php
report_unless($reportingDisabled, $e); // A classic "I swear I didn't do it" scenario 🙅‍♂️

report_unless($reportingDisabled, 'Something went wrong.'); // When you're too lazy to write a custom error message 🙄
```

Just remember, `report_unless()` relies on your exception handler (the one who catches all the falling code blocks) for its magic! 🕺️✨ So make sure to keep it close at hand. Now go forth and conquer those elusive bugs with a dash of wit and a pinch of Laravel! 🎉🎈🔒

 Ahoy there, code pirates! Buckle up for a swashbuckling journey into Laravel's request function - the swiss army knife of web requests! 🤠

This magical spell, known as `request()`, will grant you access to the mighty request instance that rules over your current seas (or routes, if you prefer landlubber terms). 🌊

```php
$quest = request(); // Yes, we're calling it 'quest'. Because code is art.
```

But wait! There's more! You can also plunder the `request()` for hidden treasures—the values of input fields that were delivered with your current web request. Here's how you dig them up:

```php
$booty = request('key', $default); // 'Key' is the name of the input field, and 'default' is what you get if it ain't there, like a parrot on your shoulder when ye be out of rum! 🦜
```

Remember, mates, this function works like a charm for both land and sea (routes and controllers), so never fear ye won't miss a beat! Arrrr, Laravel is the captain you want sailing these web development waters. 🐳⚓️

 Ahoy there, matey! Buckle up for a Laravel sea shanty about the mighty `rescue()` function! This swashbuckling method is like the Calico Jack of error handling - it'll catch any exceptions that crop up during its pirate-ly escapades, ensuring your ship (a.k.a. application) stays afloat even when Jolly Roger flags fly high!

```php
return rescue(function () {
    return $this->method(); // Sail through the method, matey!
});
```

But wait, there's more! If you're worried about running aground without a map (a.k.a. a 'default' value), you can provide one as a backup:

```php
return rescue(function () {
    return $this->method(); // Sail through the method, matey!
}, false); // If lost at sea, set course for port 'false'

Or if you're really adrift...

return rescue(function () {
    return $this->method(); // Sail through the method, matey!
}, function () {
    return $this->failure(); // Navigate to failure island instead!
});
```

Lastly, if ye be hankering for a bit of adventure, you can use the `report` argument to decide whether to log the exception via the `report` function:

```php
return rescue(function () {
    return $this->method(); // Sail through the method, matey!
}, report: function (Throwable $throwable) {
    return $throwable instanceof InvalidArgumentException; // Only log if it's an 'Invalid Argument' exception!
});
```

So there ye have it, me hearties! Set sail with the `rescue()` function and weather any code storm that comes your way! Arrrr!

 Ahoy there, matey! Steer clear of the tiresome object creation and hoist the `resolve()` anchor instead! This swashbuckling function, buried deep within the treasure chest known as the service container, will magically transform a class or interface name into a bona fide instance.

Here's an example to tickle your funny bone:

```php
$api = resolve('HelpSpot\API'); // It's like summoning a genie from a bottle, but with less smoke and more PHP!
```

But remember, this pirate-speak guide isn't just for show – it's an education too! So, don't be a landlubber, hoist the `resolve()` flag high and save yourself from the tedium of manual object creation! Yarrr!

 Oh, the glamorous world of Laravel! Where PHP meets humor and magic happens. Let's talk about a function that's as charming as a unicorn farting rainbows - `response()`. This baby is a collection method, so you know it means business (unless the business involves being ridiculously easy to use).

In plain English, `response()` is like a party hostess who whips up delightful responses for every occasion. Here's how you call her:

```php
return response('Hello World', 200, $headers); // Call her with "Hey, gorgeous! I'd like to introduce myself with 'Hello World' and a big ol' 200. Oh, and here are my headers."

return response()->json(['foo' => 'bar'], 200, $headers); // This time, it's a little more formal: "Hey there! I'd like to introduce myself as a JSON object with foo equals bar, status code 200, and these fancy headers."
```

Just remember, every good party has its rules. If you try to call `response()` without an argument, she might get a little defensive:

```php
return response(); // "Ummm... who are you and what do you want? I didn't ask for any company."
```

But don't worry, she'll be back to her charming self once you start playing by the rules! Happy coding, party people! 🎉🥳

 Alrighty then! Let's dive into the magical world of Laravel's `retry()` function – your superhero sidekick in combat against the pesky errors that could potentially bring down your application. This function, much like a stubborn cat with nine lives, will keep on trying until it gets it right or reaches its maximum attempt threshold!

```php
return retry(5, function () {
    // Attempt 5 times while taking short naps between attempts...
}, 100);
```
In this example, our trusty sidekick will take a 100ms nap and try again up to 5 times. If it manages to execute the callback without causing an error (phew!), it'll return the result with a triumphant flourish. But if it encounters a boo-boo, don't worry – it's programmed to automatically shake off the error and take another nap before trying again.

But what happens when our sidekick has had enough? Well, if it tries and fails 5 times (or more, depending on your preference), it'll throw the exception that caused all the fuss in the first place:

```php
use Exception;

return retry(5, function () {
    // ...
}, function (int $attempt, Exception $exception) {
    return $attempt * 100;
});
```
Now, if you're feeling extra sneaky or fancy, you can customize the sleep duration between attempts. This third argument is a little like giving your sidekick instructions on how long to nap during its breaks.

For even more control, you can manually determine the number of milliseconds to sleep between attempts by passing a closure as the third argument:

```php
return retry(5, function () {
    // ...
}, function (int $attempt, Exception $exception) {
    return $attempt * 100;
});
```

If you'd like to keep things interesting, you can also set different sleep durations for each attempt. Just pass an array as the first argument:

```php
return retry([100, 200], function () {
    // Sleep for 100ms on first retry, 200ms on second retry...
});
```

But hang on there, partner! What if you only want your sidekick to try again under specific conditions? Well, don't you worry – you can pass a closure as the fourth argument to `retry()` and specify when it should spring back into action:

```php
use App\Exceptions\TemporaryException;
use Exception;

return retry(5, function () {
    // ...
}, 100, function (Exception $exception) {
    return $exception instanceof TemporaryException;
});
```
In this example, our sidekick will only try again if the exception is of type `TemporaryException`. Now that's what I call a smart sidekick!

 Ahoy there, matey! Sail through the seas of data with the `session()` function – your trusty companion on every Laravel voyage!

This handy dandy function lets you get or set treasure (er, session values) without breaking a sweat:

```php
$loot = session('key');
```

Wanna stash some booty? Just pass a map of keys and loot to the function:

```php
session(['anchors' => 6, 'parrots' => "two"])
```

If ye don't specify a value, the session store will be yours for the taking:

```php
$loot = session()->get('key');

session()->put('key', $loot);
```

Now, where did I stow that rum again? Aye aye, matey! Let's set sail with `session()`!

 Ah, the `tap()` function - a veritable Swiss Army knife for your Laravel collections and models! But don't let its humble name fool you; this function packs quite the punch. It accepts two companions: an arbitrary `$value` and a good ol' closure (think of it as a party guest that shows up, does some cool tricks, then leaves without causing a fuss).

Here's where the magic happens: the `tap()` function hands over the `$value` to the closure and then gives you back the `$value`. The return value of the closure? Who cares! It's like when your aunt Mabel brings a gift, you say thanks, but really, it's all about the delicious pie she baked.

```php
$user = tap(User::first(), function (User $user) {
    $user->name = 'Taylor'; // Aunt Mabel just gave our user a new name!

    $user->save(); // And now, the user is officially named Taylor.
});
```

Now, what if you didn't invite your closure to the party? No worries! Just call any method on the `$value` and `tap()` will still return it, regardless of what that method might have returned in its original definition. It's like asking someone at a party to dance but when they say no, you just ask someone else instead.

```php
$user = tap($user)->update([
    'name' => $name,
    'email' => $email,
]); // The user is now dancing (or should we say, updating) away!
```

Feeling like throwing a party of your own? You can add the `tap()` function to your class by inviting the `Illuminate\Support\Traits\Tappable` trait. This trait comes with its own `tap()` method that accepts one guest: a closure. It'll pass the object instance to the closure and then send it off on its way.

```php
return $user->tap(function (User $user) {
    // ...
}); // Time for the user to hit the dance floor!
```

So there you have it, folks! The `tap()` function - making your Laravel collections and models more festive than Aunt Mabel's annual pie party! 🎉🎊🥧

 Ahoy there, coder pirates! Let's dive into a swashbuckling Laravel method that'll make your code as fearsome as Blackbeard himself: `throw_if()`.

This nifty little function serves up an exception like a hot pirate's grog if a certain boolean statement sails through the seas of your logic as true.

```php
throw_if(! Auth::user()->isAdmin(), AuthorizationException::class);
```

Translated to buccaneer lingo, that'd be: "If our captain ain't an admin, let's toss an AuthorizationException overboard!"

But wait! There's more ye scurvy dogs! `throw_if()` can also spout a custom message for those who happen to get caught in its treacherous waves.

```php
throw_if(
    ! Auth::user()->isAdmin(),
    AuthorizationException::class,
    'You are not allowed to access this page.'
);
```

"Arr matey! If our captain ain't an admin, hurl an AuthorizationException and yell 'Ye be not allowed!' before ye be walkin' the plank!"

So hoist the Jolly Roger, landlubbers, and set sail with `throw_if()` – it's guaranteed to keep your code shipshape!

 Ahoy there, code wranglers! Let's dive into the delightful world of Laravel methodology and meet our new friend, `throw_unless()`. Yes, you heard it right, a function that throws a tantrum (or an exception, for the technical folks) if things don't go as planned.

So, let's say you have a particularly capricious user who refuses to play by the rules, claiming they're an admin when they're not. Here's how `throw_unless()` can sort them out:

```php
// If our user isn't an admin, let's throw an AuthorizationException and serve some well-deserved humble pie!
throw_unless(Auth::user()->isAdmin(), AuthorizationException::class);

// But wait, we can also add a custom message to make it even more memorable for our unruly user:
throw_unless(
    Auth::user()->isAdmin(),
    AuthorizationException::class,
    'You are not allowed to access this page. Seriously, get lost, imposter!'
);
```

Now, isn't that a fun way to keep unwelcome guests at bay? Enjoy the Laravel party, folks! Just remember: if you can't behave, you'll be thrown out, literally! 😜

 Alright, let's dive into the enchanting world of Laravel where dates are as magical as a unicorn's fart on a moonlit night! ✨🦄

Introducing the `today()` function - your new best friend when it comes to knowing what day it is in the mystical realm of Laravel. This isn't just any ordinary date, but an exquisite `Illuminate\Support\Carbon` instance, crafted with precision for the current date:

```php
$currentDay = today();
```

Now, imagine if you could summon a date simply by uttering the enchantment 'today()'! 🎩🔮 But instead of conjuring up a potion or two, you get a fancy `Illuminate\Support\Carbon` instance. It's like having your very own magical calendar assistant, right at your fingertips!

 Ahoy there, code pirates! Let's hoist the anchor and dive into a swashbuckling Laravel function that'll make your day as lively as a jolly roger on a moonlit night! Steer clear of the treacherous waters of nested traits with `trait_uses_recursive()`!

This dashing function sails into uncharted waters and maps out all the hidden treasure, er, traits that a trait itself is hogging. Fancy a glimpse? Here's how ye can use it:

```php
$booty = trait_uses_recursive(\Illuminate\Notifications\Notifiable::class);
```

This here function works as deep-sea sonar for your Laravel traits, making sure you don't miss a single pearl or trinket (trait) in the process. So, if ye be sailing through the sea of nested traits and need to keep track of all the loot, `trait_uses_recursive()` is yer trusty compass!

Yarr! Happy charting, mateys! ☠️🏴‍☠️🌴🍹

 ### `transform()` {.collection-method} - The magical wand of your Laravel array! 🧙‍♂️

Ever wanted to turn pumpkins into coaches or frogs into princes? Well, we can't promise the fairytale transformation, but we can certainly help with your arrays! `transform` function, a close cousin of the famous `closet`, is here to help! 🕶️

This enchanting spell casts a closure upon a given value (not `blank` - you'll have to deal with that on your own time). If successful, it returns the transformed result:

```php
function timesTwo(int $value) {
    return $value * 2;
}

$enchantedResult = transform(5, 'timesTwo');

// 10 - voilà! A doubled number! 🎩
```

Worried about what happens when there's no value? Fret not! You can pass a default value or closure as the third argument. This backup plan will be executed if the given value is `blank`:

```php
$emptyResult = transform(null, 'timesTwo', "The value is blank, you say?");

// The value is blank, you say? 🤪
```

<a name="method-validator"></a>
Now go forth and conquer your arrays with the mighty `transform` function! 💪✨

 Ahoy there, code wranglers! Dive right into the heart of data validation with our swashbuckling `validator()` function. This pirate-y pal creates a brand new validator instance, ready to set sail with your arguments aboard:

```php
Arrr matey, let's hoist the sails! $validator = validator($data, $rules, $messages);
```

Fear not, this function serves as a mighty alternative anchor to the `Validator` facade. So if ye find yerself swamped in validation woes, don't fear the waters – the `validator()` will lead you safely ashore! 🌴🐠🎉

 Ahoy there, coders! Welcome to the whimsical world of Laravel's `value()` function, the party trick that's been stealing the show since v7.4!

You might be thinking: "What's so fascinating about a function that just returns what you give it?" Well, buckle up buttercup, because this isn't your grandma's `echo`!

If you feed `value()` with a simple truth like `true`, it'll obediently echo it back to you. But hold onto your horse, partner! If you hand over a clever little closure—the cowboy of functions—it'll let that rogue run wild and spit out its returned value instead. Take a gander at this:

```php
$result = value(true); // 'true' (holler if ya heard it)

$result = value(function () {
    return false;
}); // 'false', because we all know the cowboy's gotta have his moments of doubt
```

But wait, there's more! The `value()` function is also a real team player, allowing you to pass it a posse of arguments. If it's a closure that gets the call, those arguments will be roped in as companions for its wild ride. But if it ain't a cowboy, them ol' boys get ignored like an unwanted dance partner at a saloon:

```php
$result = value(function (string $name) {
    return $name;
}, 'Taylor'); // 'Taylor', yeehaw!
```

So, don't miss out on the fun, and remember: "With great power comes great responsibility," or something like that... in Laravel!

 Ahoy there, coding pirates! Steer your keyboards towards this humble function known as `view()`, the swashbuckling companion in your Laravel adventures!

This nautical navigator will guide you to those hidden treasure troves of views (yarr, check out our docs for more on views). Just type:

```php
return view('auth.login');
```

Imagine setting sail for the shores of 'auth.login', a land where dreams of secure user authentication come true! And the best part? With this `view()`, you'll never have to worry about getting lost at sea, as it always knows which port to drop anchor at. Arrrr, matey! Now that's what I call a reliable first mate! 🏴‍☠️🌴🍹

 Ahoy there, coding pirate! Brace yourself for the `with()` function, a swashbuckling helper that'll make your Laravel life easier than catching barnacles on a wet rock.

This function is as simple as a seashell on the beach: it spits out whatever you throw at it. But if ye provide a sneaky closure as its second matey, it'll execute that pirate trick and return the treasure it uncovers!

```php
function walk_the_plank(mixed $value) {
    return is_numeric($value) ? $value * 2 : 0;
}

$booty = with(5, walk_the_plank); // Arr matey, 'tis 10!

$booty = with(null, walk_the_plank); // Nothing to be gained here, captain.

$booty = with(5, null); // But if ye provide naught, ye still get what ye brought, aye aye!
```

Ye can now use this function to multiply numbers, or any other clever trick your heart desires! So grab yer hook and line, and set sail for the shores of success! Yarr! 😺

 Ah, the `when()` function! It's not just a party trick, it's a Laravel superhero in a utility belt. Thisfunction, when presented with a challenge (a condition), will either shout a victory cry (the value provided) or shrug its shoulders and take a nap (returning null). But if it's feeling particularly clever, it might whip up a quick snack (execute a closure and return the result). Here's how it struts its stuff:

```php
$greeting = when(true, function() { return 'Hello World'; }); // A little dance, a little fun, and voila!
```

But wait, there's more! This isn't just a one-trick pony. It's also the secret ingredient in your HTML recipes. Need to conditionally add wire:poll to your div? No problemo:

```blade
<div {!! when($conditionExist, 'wire:poll="calculate"') !!}>
    ...
</div>
```

Now, isn't that just the ticket? A little sprinkle of `when()` and your HTML is dancing with conditionals like Fred Astaire at the Savoy Ballroom! (Just remember to keep your closures classy.)

 ### Benchmarking 🏋️‍♂️🕰️

Ever wondered how fast your Laravel code is? Or who's the slowpoke among your friends in the coding world? Well, welcome to the speed-dating of algorithms! Laravel provides a handy tool to measure execution times and help you optimize like a boss. 👨‍💻💪

To benchmark your code, use the `bench()` function within your functions or create a fresh instance of the `BenchmarkableTestCase` for testing purposes. Remember, speed is everything in this fast-paced world! 🏎️💨

<a name="artisan"></a>
### Artisan Command Line Tool 🛠️🧪

When you're not writing beautiful Laravel code, maybe you're just too cool for a GUI? Well, we got you covered! Introducing the Artisan, Laravel's command line interface. It's like having a magical genie granting your every wish in the dark and mysterious terminal 🧞‍♂️🌃

Use it to create new files, migrate databases, deploy your app, or even to make coffee if you know the right incantations (well, not really... but wouldn't that be awesome?) ☕️✨

<a name="queues"></a>
### Queues 🐇🏃‍♂️

Ever heard of a rabbit in a hurry? No? Well, now you have! In Laravel, queues are the work-from-home heroes that ensure your application keeps its cool even when things get hectic. They take the heavy lifting off your shoulders and handle tasks in the background while you sip on your favorite beverage 🍻💆‍♂️

Enqueue jobs using `dispatch()` function, and let the queues do their magic! You can choose between various queue drivers like database, Redis, or Amazon SQS to ensure the perfect balance of speed and reliability. It's like managing your home chores with a personal assistant 🤖🏠

<a name="logging"></a>
### Logging 📝🔍

Have you ever needed a detective to solve mysteries in your Laravel application? No, we're not suggesting a full-blown CSI: Laravel. Instead, use Laravel's logging system to keep tabs on what's happening under the hood.

With multiple log channels and customizable levels, you can track events, debug issues, or even just follow the adventures of your application's life 🕵️‍♂️📚

Use the `log()` function to write messages to your log files, and let the truth reveal itself! 🔎💬

 ### Performance Prowess with Laravel's Benchmarking Toolkit! 🎉🏎️🚀

Ever felt the need to test your application's speed like a true performance racer? Well, grab your helmet and buckle up, because we've got just the tool for you - the `Benchmark` support class! This fantastic piece of kit will measure the time it takes for certain parts of your application to finish their races (err... tasks) in milliseconds:

```php
<?php

use App\Models\User;
use Illuminate\Support\Benchmark;

Benchmark::dump("First User Find", fn () => User::find(1)); // 0.1 ms 🏁🏅‍♂️

Benchmark::dump([
    "Scenario 1" => fn () => User::count(), // 0.5 ms 🏎️🏆
    "Scenario 2" => fn () => User::all()->count(), // 20.0 ms 🚗💨
]);
```

By default, our racers (callbacks) will run once (one lap), and their finishing times will be displayed in the browser or console.

If you're feeling extra competitive and want to make your callback race multiple times, you can specify the number of laps as the second argument to the method:

```php
Benchmark::dump("User Count Race (10 laps)", fn () => User::count(), iterations: 10); // 0.5 ms 🏎️🏅
```

But wait, there's more! Sometimes you might want to benchmark the execution of a callback while still keeping an eye on the value it returns. The `value` method will return a winning duo (value and duration) containing the result returned by the callback and the time it took to complete:

```php
list($count, $duration) = Benchmark::value(fn () => User::count());
```

🏁 Start your engines! 🚀

 ### Time Travel in Laravel: Your One-Way Ticket to Yesterday, Tomorrow, and Beyond! 🚀

Ahoy there, Captain! Strap on your coding boots, because we're about to embark on a time-traveling journey like no other. Laravel has got you covered with the mighty Carbon – a date and time manipulation library more powerful than Dr. Who's TARDIS (and we all know how much trouble he gets into!).

To create a new `Carbon` instance, simply invoke the `now` function – it's like saying "Beam me up, Scotty!" but in PHP. This magical incantation is globally available across your Laravel application:

```php
$current_time = now(); // I tell you, it's like having a personal assistant who updates the time for you every second!
```

Or if you prefer a more formal introduction, go ahead and summon the `Illuminate\Support\Carbon` class:

```php
use Illuminate\Support\Carbon;

$current_time = Carbon::now(); // Yes, it's that easy. We're coders, not time-traveling superheroes!
```

Now, let's get a little wacky with our newly minted `Carbon` instances. Laravel arms you with the `plus` and `minus` methods, perfect for tweaking your instance to your heart's content (or should we say, clock's?)

```php
return now()->plus(minutes: 5); // In 5 minutes, I'll be rich! Wait... wrong universe.
return now()->plus(hours: 8); // It's time for breakfast in 8 hours. Or maybe not, who needs sleep?
return now()->plus(weeks: 4); // In 4 weeks, summer will finally arrive. If global warming cooperates!

return now()->minus(minutes: 5); // Oops, I just traveled back in time 5 minutes. Better update my investments!
return now()->minus(hours: 8); // What? It's only yesterday? I swear it was last Thursday!
return now()->minus(weeks: 4); // What?! April Fool's Day was weeks ago! Where's my prank list?
```

For a deeper dive into the world of Carbon and its wondrous features, don't forget to check out the [official Carbon documentation](https://carbon.nesbot.com/guide/getting-started/introduction.html). Happy time-traveling! 🕰️🚀

 Alrighty then! Laravel's not just a party animal, it also brings the rhythm to your PHP dates with its groovy interval functions! 🥁💃️

Don't be a square and stick to seconds, take it up a notch with `milliseconds`, or if you're feeling particularly jazzy, you can jump to `hours`, `days`, `weeks`, `months`, or even `years`! 🎶🕺️

These bad boys return CarbonInterval instances, which are like the cool kids that hang out with PHP's DateInterval class. So whether you're a seasoned developer or a newbie on the block, you can use these functions anywhere Laravel accepts a `DateInterval` instance. 🤓

Here's an example to tickle your fancy:

```php
use Illuminate\Support\Facades\Cache;
use function Illuminate\Support\{minutes};

// Caching some metrics for 10 minutes (that's 600 seconds if you prefer the old-school)
Cache::put('metrics', $metrics, minutes(10));
```

Now that you know how to shake your PHP dates with these interval functions, it's time to get down and boogie! 🕺️💃️

 Alrighty, let's dive into the world of Laravel's Deferred Functions - the superheroes of your app's background processing! While queued jobs are like the Avengers, handling those big, heavy tasks (think Thor lifting Mjolnir), deferred functions are more like Ant-Man, dealing with the quick and nimble stuff without requiring a queue manager!

Imagine you're in the middle of a dinner party, chatting up a storm, but you've got this one task - cleaning the dishes. You could do it now and ruin the mood or wait until after dessert, making the party more enjoyable for everyone. That's deferred functions for you!

To defer that dish-cleaning closure, just pass it to `Illuminate\Support\defer` function, like so:

```php
use App\Services\Metrics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use function Illuminate\Support\defer as deferFunction; // Just to avoid any Swoole extension conflicts!

Route::post('/orders', function (Request $request) {
    // Create order...

    deferFunction(fn () => Metrics::reportOrder($order));

    return $order;
});
```

By default, these deferred dish-cleaners will only run if the dinner party (HTTP response or Artisan command) ends without any nasty incidents (like a `4xx` or `5xx` response). But if you're one of those people who can't leave the dishes until morning, you can chain the `always` method onto your deferred function:

```php
deferFunction(fn () => Metrics::reportOrder($order))->always();
```

But hold up! If you've got the Swoole PHP extension installed, beware! Laravel's `defer` might get into a fistfight with Swoole's global `defer`, leading to web server errors. To avoid this, make sure you call Laravel's `defer` helper by explicitly namespacing it: `use function Illuminate\Support\defer;`.

Now that you've got the hang of deferred functions, go forth and clean those dishes, err... tasks, while keeping your application feeling as sprightly as Groot after a dose of Star-Lord's sarcasm! 🚀🥳🍽️

 Alright, buckle up, coding cowboys and codelettes! Today we're gonna talk about deferred functions - the party animals of the Laravel world. But just like your buddy who always overstays his welcome at the shindig, sometimes you gotta kick 'em out before they cause a ruckus!

So here's how you can politely ask Deffy McDefer to scram: if you need to cancel a deferred function before it gets its groove on, just use the `forget` method to boot it by its name. To make sure Deffy knows who he is, give him a nickname when you invite him to the dance with the `Illuminate\Support\defer` function:

```php
defer(fn () => Metrics::report(), 'reportMetrics');

defer()->forget('reportMetrics');
```

And, since we all know that even the best party animal can get a bit too rowdy during testing time, here's how to disable deferred functions specifically for tests:

<a name="disabling-deferred-functions-in-tests"></a>
Ah, yes, the moment you've all been waiting for - the part where we talk about disabling Deffy for those stressful test times! You see, sometimes even the most well-behaved party animal can get a little too exuberant during testing. To keep your tests from turning into a chaotic rave, you can disable deferred functions altogether:

```php
use Illuminate\Support\Facades\Event;

test('a test', function () {
    Event::fake(); // Disable deferred events for this test

    // Your test code here...
});
```

And there you have it, folks! Now you know how to make sure Deffy doesn't overstay his welcome and keep your Laravel world a little less chaotic. Happy coding! 🥳🎉🎊

 Alrighty, buckle up, test warriors! Here's a jolly little tutorial on how to disable deferred functions in your Laravel tests. Because who doesn't love a good laugh while wrestling with code, right? 😂

#### Disabling Defer-o-rama in Testy Time!

In the realm of testing, it may occur that you'd like to squash deferred functions like a pesky bug. Worry not! You can do this by summoning `withoutDefer` in your test case:

```php tab=Pest (Our friendly neighborhood Spidertester)
test('No More Defer-o-rama', function () {
    $this->defferNot(); // Feel free to cheer! 🎉

    // ...
});
```

```php tab=PHPUnit (The ever serious and strict UnitTester)
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_no_more_defer(): void
    {
        $this->defferNot(); // Aren't we getting along swell? 😉

        // ...
    }
}
```

If you fancy disabling deferred functions for all tests within your test case, you can perform a magical incantation by calling the `withoutDefer` spell from the `setUp` method in your base `TestCase` class:

```php
<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void // [Cue: The Incredibles theme]
    {
        parent::setUp();

        $this->defferNot(); // Now, that's magic! 🪄
    }
}
```

Just remember to let the deferred functions dance their little jig before you call this trick. Otherwise, they might get a bit grumpy! 😉

 Alrighty, let's dive into the whimsical world of Laravel's Lottery class! Ever wanted to roll the dice on your code execution, but with a touch of sophistication? Well, buckle up, because this is exactly what you've been waiting for!

Imagine being a high-stakes gambler in Vegas, but instead of chips and card games, you're dealing with PHP requests. With Laravel's Lottery class, you can decide that only a lucky few percent of your incoming pleas will trigger your code execution:

```php
use Illuminate\Support\Lottery;

// Roll the dice! Odds are set to 1 in 20 - not great odds, but hey, it's Vegas!
$lottery = Lottery::odds(1, 20);

// If you hit the jackpot (winner), here's what happens:
$lottery->winner(function () use ($user) {
    $user->won(); // Hooray! The user scored a win!
});

// If lady luck isn't on your side (loser), this is the outcome:
$lottery->loser(function () use ($user) {
    $user->lost(); // Tough luck, the user missed their chance.
});

// Go ahead and roll those dice!
$lottery->choose();
```

Now, that's not all! You can combine Laravel's Lottery class with other nifty features for a one-two punch of awesomeness. For instance, say you only want to report a smidgen of slow queries to your exception handler:

```php
use Carbon\CarbonInterval;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Lottery;

// Set the odds for slow query reporting. This time, it's 1 in 100 - not too shabby!
$slowQueryReportingLottery = Lottery::odds(1, 100);

// If you roll a winner...
$slowQueryReportingLottery->winner(function () {
    report('Querying > 2 seconds.') // Time to sound the alarm!
});

// And if you roll a loser, well, there's no need to report that. The query ran just fine!

// Now, let's set the conditions for slow queries:
DB::whenQueryingForLongerThan(
    CarbonInterval::seconds(2), // Query took more than 2 seconds - time to worry!
    $slowQueryReportingLottery // Roll those dice! If you roll a winner, report it!
);
```

Now that's what I call a fun-filled coding adventure! Happy gambling with Laravel's Lottery class! 🎲🚀

 Ahoy there, coding pirate! Prepare to navigate the treacherous waters of your Laravel app's lottery system without drowning in bugs or sinking under the weight of untested code! Fear not, for your trusty ship is equipped with some swashbuckling methods to ensure your lotteries stay afloat even in the roughest of seas.

```php
// Hoist the Jolly Roger! Aye, Captain Lottery always wins now...
Lottery::alwaysWin();

// Batten down the hatches! Prepare for a storm as our Lottery will always lose...
Lottery::alwaysLose();

// Set sail on a wild voyage with unpredictable results. First victory, then defeat, and back to the usual piratey business...
Lottery::fix([true, false]);

// Return to normalcy after a bout of madness or excessive silliness. Back to winning and losing as nature intended...
Lottery::determineResultsNormally();
```

Ah, you see how we transformed the dry documentation into a more entertaining read? Now, go forth and conquer the seven seas (or at least your Laravel app) with confidence! Yarr!

 ### Pipeline: The Ultimate Plumbing System for Your Laravel Code! 🚧💧🚀

Ever found yourself neck-deep in a mess of code, trying to filter, manipulate, and transform data like a sewer rat on a wild goose chase? Well, worry no more, because Laravel's `Pipeline` is here to save your day! 🎉🐾🌟

Imagine if you will, a gleaming, high-tech plumbing system. Instead of water though, it carries your data through a series of pipes (ahem, invokable classes, closures, or callables). Each pipe has the power to inspect, tweak, and pass on the data like a true MVP (Most Valuable Plumber). 🛁🔧🚰

```php
use Closure;
use App\Models\User;
use Illuminate\Support\Facades\Pipeline;

$user = Pipeline::send($user) // Flush that data down the pipe! 🚽
    ->through([
        function (User $user, Closure $next) {
            // ...
            return $next($user); // Pass it on to the next pipe, like a hot potato 😉
        },
        function (User $user, Closure $next) {
            // ...
            return $next($user); // Keep passing until we reach the end of the line! 🚫
        },
    ])
    ->then(fn (User $user) => $user); // And here's your clean, polished data at the end of the pipe! 🛁
```

Each pipe in the pipeline receives the input and a `$next` closure. Calling the `$next` closure will send the data to the next pipe in line. You'll notice this is much like our beloved [middleware](/docs/{{version}}/middleware), just with more bubbles! 🌿💧

When the final pipe calls the `$next` closure, the callable provided to the `then` method will be activated. Usually, this callable simply returns the input as-is, but if you want to return the processed data directly, use the `thenReturn` method instead! 🛁🌺

Now, let's spice things up a bit! Instead of just closures, you can also pipe in invokable classes. When you provide a class name, Laravel will instantiate it using its magical [service container](/docs/{{version}}/container), injecting any dependencies as needed. 🧪✨

```php
$user = Pipeline::send($user) // Flush that data down the pipe! 🚽
    ->through([
        GenerateProfilePhoto::class, // Instantiation via Laravel's service container 🧪✨
        ActivateSubscription::class,
        SendWelcomeEmail::class,
    ])
    ->thenReturn(); // And here's your spiffy, polished user! 🌈🎁
```

Lastly, we have the `withinTransaction` method. This magical spell wraps all steps of the pipeline within a single database transaction, ensuring a safe and secure journey for your data! 💰💰💰

```php
$user = Pipeline::send($user) // Flush that data down the pipe! 🚽
    ->withinTransaction() // Wrap it in a cozy, safe transaction! 🏦💳
    ->through([
        ProcessOrder::class,
        TransferFunds::class,
        UpdateInventory::class,
    ])
    ->thenReturn(); // And here's your updated user, all thanks to the pipeline! 🎉💰💰
```

So there you have it! Laravel's Pipeline: The ultimate plumbing system for your code. Now go forth and pipe your data with pride! 💧🌊🐾🎉

 ### Snoozin' with Laravel's Sleepy Class! 😴

Oh, the joys of taking a little nap in your Laravel code? Thanks to our friendly neighborhood `Sleep` class, it's easier than catching Zs during a boring lecture! 🤔🙉

This light-weight, caffeine-free wrapper around PHP's native sleep and usleep functions is like a soft, fluffy pillow for your code, offering greater testability while also serving up a dev-friendly API for time management. 🛏️🕒

```php
use Illuminate\Support\Sleep;

$isAwake = true;

while ($isAwake) {
    Sleep::for(1)->second();

    $isAwake = /* ... */;
}
```

Our sleepy class offers a variety of methods to help you snooze with different time units:

```php
// Wake up after taking a little nap...
$result = Sleep::for(1)->second()->then(fn () => 1 + 1);

// Keep napping while this condition is true...
Sleep::for(1)->second()->while(fn () => isItTimeToKeepSnoozing());

// Take a 90-second nap...
Sleep::for(1.5)->minutes();

// Take a quick 2-second nap...
Sleep::for(2)->seconds();

// Nap for half a second...
Sleep::for(500)->milliseconds();

// Take a 5,000 microsecond power nap...
Sleep::for(5000)->microseconds();

// Nap until it's time to wake up...
Sleep::until(now()->plus(minutes: 1));

// Alias for PHP's native "sleep" function...
Sleep::sleep(2);

// Alias for PHP's native "usleep" function...
Sleep::usleep(5000);
```

To combine units of time like a sleepy master, you can use the `and` method:

```php
Sleep::for(1)->second()->and(10)->milliseconds();
```

<a name="testing-sleep"></a>
Now, let's talk about testing! You know how they say, "Don't wake a sleeping codebase" – well, with our sleepy class, you won't have to. 😴💤👨‍🦲

To avoid waking up the sleepy class during tests, simply use Laravel's mocking capabilities:

```php
use Illuminate\Support\Sleep;
use Mockery as m;

// Create a mock object for Sleep
$mockSleep = m::mock(Sleep::class);

// Set expected method calls on the mock object
$mockSleep->shouldReceive('for')->with(1)->andReturn($mockSleep);
$mockSleep->shouldReceive('second');

// Replace the actual Sleep class with our mock during testing
$this->app->instance(Sleep::class, $mockSleep);
```

 Ahoy there, code cowboys and codewives! Let's embark on a jolly journey through the wild west of Laravel testing, where we encounter a hairy beast called `Sleep`. Now, you might be thinking, "What kind of party animal is this? I thought we were coding, not napping!" But fear not, for this Sleep ain't no slouch. It's here to make your tests run faster than a coyote chasing a roadrunner!

Imagine you're testing some spaghetti-western code that looks like this:

```php
$waitin_bandit = /* ... */;

$seconds = 1;
while ($waitin_bandit) {
    Sleep::for($seconds++)->seconds(); // This ol' horse takes a snooze!
    $waitin_bandit = /* ... */;
}
```

Now, if you test this code, it'll make your test suite slower than a tortoise in quicksand. But fret not, for `Sleep` comes with a six-shooter called `fake()`. By using this badge, we can bypass the actual snooze and keep our tests speedy as a Cheetah on a sugar high:

```php tab=Pest
it('waits until ready', function () {
    Sleep::fake(); // Yee-haw! Fake that snooze!

    // ...
});
```

```php tab=PHPUnit
public function test_it_waits_until_ready()
{
    Sleep::fake(); // Bye bye, Mr. Sandman!

    // ...
}
```

Now that we've faked the snooze, we can make assertions against the expected naps that should have occurred. For example, if our code takes a three-nap siesta, we can use `assertSequence()` to ensure it's taking the right amount of shuteye while keeping our test faster than a rabbit on roller skates:

```php tab=Pest
it('checks if ready three times', function () {
    Sleep::fake(); // Fake that snooze!

    // ...

    Sleep::assertSequence([
        Sleep::for(1)->second(),
        Sleep::for(2)->seconds(),
        Sleep::for(3)->seconds(),
    ]);
}
```

```php tab=PHPUnit
public function test_it_checks_if_ready_three_times()
{
    Sleep::fake(); // Bye bye, Mr. Sandman!

    // ...

    Sleep::assertSequence([
        Sleep::for(1)->second(),
        Sleep::for(2)->seconds(),
        Sleep::for(3)->seconds(),
    ]);
}
```

The `Sleep` class offers a whole arsenal of assertions to help you test your napping code:

```php
use Carbon\CarbonInterval as Duration;
use Illuminate\Support\Sleep;

// Assert that sleep was called 3 times...
Sleep::assertSleptTimes(3);

// Assert against the duration of sleep...
Sleep::assertSlept(function (Duration $duration): bool {
    return /* ... */;
}, times: 1);

// Assert that Sleep was never invoked...
Sleep::assertNeverSlept();

// Assert that, even if Sleep was called, no execution paused occurred...
Sleep::assertInsomniac();
```

But wait, there's more! You can make a callback for every fake sleep using the `whenFakingSleep()` method. For example, we use Laravel's time manipulation helpers to instantly progress time by the duration of each sleep:

```php
use Carbon\CarbonInterval as Duration;

$this->freezeTime(); // Freeze that time!

Sleep::fake(); // Fake that snooze!

Sleep::whenFakingSleep(function (Duration $duration) {
    // Progress time when faking sleep...
    $this->travel($duration->totalMilliseconds)->milliseconds();
});
```

Now, progressing time is as common as tumbleweeds in a desert, so the `fake()` method accepts a `syncWithCarbon` argument to keep Carbon in sync when sleeping within a test:

```php
Sleep::fake(syncWithCarbon: true);

$start = now(); // Mark that time!

Sleep::for(1)->second(); // This ol' horse takes a snooze!

$start->diffForHumans(); // 1 second ago, just like Old West times!
```

Laravel uses the `Sleep` class internally whenever it needs to pause execution. For example, the [retry](#method-retry) helper uses the `Sleep` class when sleeping, making your tests even more cowboy-friendly!

So, there ya have it, partner! Now you know how to tame that wild Sleep beast and keep your tests running faster than a horse with rocket boosters. Yee-haw!

 ### The Timekeeper Extraordinaire! 🕰️🚀

Welcome to Laravel's very own time-traveling superhero - The Timekeeper Extraordinaire! This cape-wearing, chrono-savvy champion ensures your callback never overstays its welcome in the realm of execution. Just like how a well-timed joke can save a dinner party, our Timekeeper keeps those pesky cryptographic operations and user auth checks from leaking sensitive information due to variable execution times (evil hackers, we're looking at you! 🤓).

But fret not! If the operation finishes quicker than a cheetah on Red Bull, our Timekeeper won't mind one bit. It's all about maintaining that cool, collected pace. However, it's up to you, our valiant developer, to choose a time long enough as the fixed duration to accommodate those dreaded worst-case scenarios (you know, like when your code decides to perform an impromptu dance routine 🕺️).

Our Timekeeper accepts a friendly chat with the closure and a time limit in microseconds. Once he's heard your spiel, he patiently waits until that magical time limit is reached:

```php
use Illuminate\Support\Timebox;

$timekeeper = new Timebox(); // Cue superhero theme music! 🎶
$timekeeper->call(function ($timebox) {
    // ...
}, microseconds: 10000);
```

Now, what if your code decides to throw a tantrum in the form of an exception? Fear not! Our Timekeeper will show some understanding and re-throw that exception after giving it a little time-out (not unlike when you're dealing with a toddler who's learned the word "no" 🤦‍♂️).

And just like that, our humble guide through the time-space continuum has come to an end. But remember, with great power comes great responsibility (and some awesome jokes)! 💥🚀

 Alright, buckle up, coding cowboys and codettes! Laravel's `Uri` class is the swiss army knife of URL manipulation – a fluent interface that makes creating and modifying URIs as easy as pie (though, admittedly, not quite as delicious). It's like having a superpower to transform URLs, all while seamlessly integrating with Laravel's routing system.

To create a `Uri` instance, you can use static methods that are more accessible than a secret backstage pass at a music festival. Here's how:

```php
use App\Http\Controllers\UserController; // Don't forget to invite this cool cat to the party!
use App\Http\Controllers\InvokableController; // And let's not leave out this mysterious guest performer
use Illuminate\Support\Uri; // The lifeblood of our little dance

// Create a URI instance from a string...
$uri = Uri::of('https://example.com/path'); // Yes, we can! 🌈

// Or create instances to paths, named routes, controller actions or the current request URL...
$uri = Uri::to('/dashboard'); // Navigate to dashboard with ease!
$uri = Uri::route('users.show', ['user' => 1]); // Show me the user with an ID of 1, please!
$uri = Uri::signedRoute('users.show', ['user' => 1]); // Sign that URI, we don't want just anyone snooping around!
$uri = Uri::temporarySignedRoute('user.index', now()->plus(minutes: 5)); // A temporary URL for user index, it'll self-destruct in 5 minutes!
$uri = Uri::action([UserController::class, 'index']); // UserController invites you to the Index Dance
$uri = Uri::action(InvokableController::class); // And InvokableController plays the secret song!

// Create a URI instance from the current request URL...
$uri = $request->uri(); // The current URL, as if by magic!
```

Once you've got yourself a `Uri` instance, feel free to modify it like a digital clay. Here's how to give your URI a makeover:

```php
$uri = Uri::of('https://example.com') // Start with the original URL
    ->withScheme('http') // Switch schemes faster than a DJ spinning records!
    ->withHost('test.com') // Point to test.com, where all the cool kids are hanging out!
    ->withPort(8000) // Tune in on port 8000, because who needs standard when you can be original?
    ->withPath('/users') // Head towards the users, they're waiting for us!
    ->withQuery(['page' => 2]) // Add a query parameter, let's go to page 2!
    ->withFragment('section-1'); // Don't forget to mark 'section-1', we wouldn't want to get lost!
```

<a name="inspecting-uris"></a>
Now that you've had a little taste of Laravel's `Uri` class, go forth and create URIs like a pro! 🎉🎈🌟

 Ahoy there, Laravel sailor! Let's dive into the depths of the URIs using the mighty `Uri` class. This magical tool lets you poke and prod at the different bits and bobs that make up your URL, making you the digital Sherlock Holmes of web addresses.

```php
// Get the scheme (http/https)
$scheme = $uri->scheme();
// Unravel the authority (user:password@host)
$authority = $uri->authority();
// Grab the host (www.example.com)
$host = $uri->host();
// Find the port number (80/443)
$port = $uri->port();
// Navigate the path (your/website/path)
$path = $uri->path();
// Slice and dice the path segments (your, website, path)
$segments = $uri->pathSegments();
// Pluck the query string (?query=value)
$query = $uri->query();
// Jump to the fragment (#fragment)
$fragment = $uri->fragment();
```

So there you have it, matey! Now you can dissect any URL like a master chef with a fresh catch of the day. Next stop: manipulating those query strings... but that's another tale for another time. Yarr! 🏴‍☠️

 Alright, buckle up, query string cowboys! The `Uri` class is your trusty steed in this wild west of URL manipulation. Saddle up and let's ride!

First off, you've got the ever-reliable `withQuery` method. It's like inviting a new stranger to town for dinner – it merges some additional query string parameters into the ongoing conversation:

```php
$uri = $uri->withQuery(['sort' => 'name']);
```

Next, there's the more selective `withQueryIfMissing`. It's like checking if a saloon already has a bartender before hiring another one:

```php
$uri = $uri->withQueryIfMissing(['page' => 1]);
```

The `replaceQuery` method is the town sheriff, clearing out the old query string and bringing in a fresh one like a new batch of whiskey:

```php
$uri = $uri->replaceQuery(['page' => 1]);
```

Now, let's talk about the `pushOntoQuery`. It's like adding more ingredients to your stew pot. If a query string parameter has an array value, it just keeps on pushing:

```php
$uri = $uri->pushOntoQuery('filter', ['active', 'pending']);
```

Lastly, the `withoutQuery` method is the saloon owner kicking out the rascals. It removes parameters from the query string like a boss:

```php
$uri = $uri->withoutQuery(['page']);
```

So there you have it, cowpokes! Master the art of URL manipulation and tame the wild west of your Laravel applications. Yeehaw!

 Alright, let's hop aboard the information superhighway, folks! Buckle up as we delve into the art of URI-directed redirecting in Laravel land.

First off, there's this swanky little tool called `redirect`. It's like your GPS for web pages, helping you generate a `RedirectResponse` instance to the location (URI) of your dreams:

```php
$location = Uri::of('https://example.com');

return $location->redirect(); // Now we're navigating to example.com!
```

But wait, there's more! You can also let the system handle the redirection automatically by simply returning the `Uri` instance from a route or controller action:

```php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Uri;

// We're creating a new route that takes us straight to /index with a 'sort=name' query parameter.
Route::get('/redirect', function () {
    // Returning the Uri instance does all the redirection magic for us!
    return Uri::to('/index')
        ->withQuery(['sort' => 'name']);
});
```

So, whether you're a seasoned web traveler or just starting your journey, the power of redirecting uris is now in your hands. Happy navigating, trailblazers! 🚀🌐🧭