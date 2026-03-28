 ## Collections 🎉🎩

### Greetings, Data Wranglers! 🚀✨

Welcome to the grand ball of Laravel's `Collections` - where data meets dance moves, and nobody leaves without learning a few new steps! 🕺️💃️

#### Creating Collections 🌈🎨

Ever felt like your arrays are a bit... dull? Well, it's time to paint the town (of data) red with our spiffy `Collection` class! Here's how you can create one:

```php
$collection = collect([1, 2, 3, 4, 5]);
```

#### Extending Collections 🧨🚀

Want to add your own data-dazzling moves? You got it! With Laravel's `Collection` class, you can write your very own methods and make data dance to your tune! 🎶🕺️

<a name="available-methods"></a>

### Available Methods 💼🤓

You know, just in case you're feeling a bit rusty or curious about what moves are available. Here's the list of all the fancy footwork your `Collection` can pull off!

<a name="higher-order-messages"></a>

### Higher Order Messages 🤓🎧

Remember those awesome "choose your own adventure" books? Well, we've got something similar with our `Collection` class - it can call methods on each item in the collection! Pretty cool, huh?

<a name="lazy-collections"></a>

## Lazy Collections 🐘🎪

### Lazy Collection Introduction 🤓💭

Imagine you're at a data circus and your `Collection` is the main attraction. But here's the twist - instead of performing all tricks immediately, it only sets up the stage and waits for an audience member (or function) to come ask for specific acts!

That's exactly what Lazy Collections are in Laravel - collections that don't perform operations until they're explicitly asked to do so. Let's see how you can create one!

<a name="creating-lazy-collections"></a>

### Creating Lazy Collections 🤹‍♂️🎭

To build your very own lazy performer, all you need to do is use the `make` method and call it "Lazy"!

```php
$lazyCollection = make(LazyCollection::class);
```

<a name="the-enumerable-contract"></a>

### The Enumerable Contract 🤝📜

You know how every good circus act needs a script? Well, our lazy collection needs to follow a contract - the `Enumerable` contract. This ensures that they can dance and perform their tricks according to the rules!

<a name="lazy-collection-methods"></a>

### Lazy Collection Methods 🤹‍♂️🎭

Now that your lazy collection has its script, it can do all sorts of cool tricks! Here are some methods you'll want to know about:

- `map`: This is the clown car of lazy collections - it takes each item from a collection and makes a new one based on a callback!

- `filter`: Think of this as the strongman act - it filters out items that don't meet certain conditions, leaving only the fittest (or strongest in this case) for your other routines.

- `reduce`: This is like the juggling act of lazy collections - it takes each item and passes it to a callback function until you have one final result!

And there you have it - Laravel's Collections, ready to entertain and educate at the same time! 🎉🎊💃️

 Alrighty then! Let's dive into the whimsical world of Laravel's `Illuminate\Support\Collection` class - your new best friend for wrangling arrays like a data rodeo cowboy! 🤠

Take a peek at this code snippet here. We're gonna use the `collect` helper to transform an array into a swanky collection instance, perform a uppercase transformation on each element (because who doesn't love shouting?), and then give 'em the boot if they're empty! 🤫

```php
$collection = collect(['Taylor', 'Abigail', null])->map(function (?string $name) {
    return strtoupper($name);
})->reject(function (string $name) {
    return empty($name);
});
```

As you can see, the `Collection` class lets you chain its methods like a fashionable necklace, allowing for fluent mapping and reducing of the underlying array. In other words, it's the ultimate party trick for your data! 🎉

And just a heads up: collections are as immutable as a rock – every method you call returns an entirely new collection instance, so remember to hold on tight! er 😉

 Alrighty then, let's dive into the world of Laravel Collections! You might have noticed that when you're hanging out with an array, you can feel a bit limited - but fret not, because that's where our lovely `collect` helper comes in to save the day!

Just like inviting a cool, new friend to your party, you can create a Collection by simply calling:

```php
$collection = collect([1, 2, 3]);
```

But wait, there's more! If you're feeling extra social, you can also make a collection using the [make](#method-make) and [fromJson](#method-fromjson) methods - it's like inviting everyone on the guest list or unwrapping JSON gifts!

> 📝 PSA: The results of Eloquent queries are always served as sparkling `Collection` instances. So, when you ask them to dance, they already know all the best moves!

Now, let's head over to the next chapter where we learn how to extend these fabulous Collections and throw some more parties together! 🎉🥳

 ### Unleashing Collection Charm! 🎩

Collections, my dear friend, are not just fancy party guests, but magical shape-shifters that can learn new tricks on the fly! Thanks to their "macroable" nature, you can teach them additional methods at runtime - think of it as giving a genie three wishes, but with less wishful thinking and more PHP!

The `Illuminate\Support\Collection` class comes equipped with a `macro` method, which is like an open invite to the ball for custom functions. This method accepts a closure, ready to dance when your shiny new macro is summoned. The dance floor, dear friend, is none other than the collection itself! So, if you fancy adding a `toUpper` move to the collection, here's how:

```php
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

// Throwing a ball with 'toUpper' as the guest of honor
Collection::macro('toUpper', function () {
    // Spin around and perform the 'toUpper' dance on each value
    return $this->map(function (string $value) {
        return Str::upper($value);
    });
});

// Inviting a collection to the ball
$collection = collect(['first', 'second']);

// Calling the 'toUpper' move
$upper = $collection->toUpper();

// The dance floor is now filled with ['FIRST', 'SECOND']! 💃🏼🎉
```

Now, when you're ready to strut your stuff, it's best to declare collection macros at the [service provider's ball](/docs/{{version}}/providers). Ahem, the `boot` method, that is. 🤵🏼👗

 Alright, let's dive into the world of Laravel Macros, where you can define magical helpers that accept more arguments than your cat during its annual vet check-up! 🐈💉

Here's an example of a macro named `toLocale`, which is perfect for when you want to translate your collection into various languages, just like how a bilingual cat might meow in two tongues. 😼

```php
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Lang;

Collection::macro('toLocale', function (string $locale) {
    return $this->map(function (string $value) use ($locale) {
        // Translation magic happens here 🎩✨
        return Lang::get($value, [], $locale);
    });
});
```

Now that we've conjured our magical helper, let's put it to work! Let's assume you have a collection of cat names – because who doesn't? 🐈

```php
$collection = collect(['Whiskers', 'Furrypaws']);
```

To translate these names into Spanish (es), simply invoke the `toLocale` method!

```php
$translated = $collection->toLocale('es');
```

And voila! 🥳 The result will be a collection containing ['Whiskers' => 'Garrapata', 'Furrypaws' => 'Parroncito'] – just like your cat might introduce themselves in Spanish! 🇪🇸🐾

 Alright, buckle up, folks! Let's dive into the wild world of Laravel Collections, where arrays dance to our tunes. Here's a list of methods that will make your code more elegant and your life easier. Remember, you can chain these like a hip-hop freestyle – just make sure to keep the rhythm!

**After**: Add an item after another in the collection

**All**: Check if every single item matches a given closure

**Average**: Calculate the average value of your collection

**Before**: Find an item before another one in the collection

**Chunk**: Break the collection into smaller arrays based on the chunk size

**Contains**: Determine whether the collection includes an item or not

**Count**: Count the number of items within the collection

**CrossJoin**: Combine multiple collections row by row

**Dd**: Debug a variable and die, for when you're feeling dramatic

...And so on and so forth! There are plenty more methods here to help you master your data. Don't forget – these methods usually return a new Collection instance, allowing you to preserve the original array like a rare vinyl record. Enjoy the symphony of code! 🎶

 ## Collection Methods: The Ultimate Party Playlist of Data Manipulation! 🥳🎧

Welcome, fellow data jockeys! We've got a smorgasbord of scintillating functions here—your new go-to playlist for data manipulation in Laravel. Let's dive right into the groove and get our funk on! 🕺️

<a name="method-after"></a>

### filter($callback)

Ready to be a discerning DJ? Our **filter** method lets you spin only those records that meet your rigorous criteria. It's like the bouncer at the hottest club, checking IDs (or data validation, if you prefer). 🕯️🔒

Example:
```php
$adultsOnly = $people->filter(function($person) {
    return $person->age >= 18;
});
```

### map($callback)

Want to remix your data on the fly? Our **map** method is like a DJ scratching vinyl, changing the tune of your collection one record at a time. 🎨🔄

Example:
```php
$uppercaseNames = $people->map(function($person) {
    return strtoupper($person->name);
});
```

### sortBy($callback)

Are you the type who loves to organize their records by genre, decade, or alphabetical order? Our **sortBy** method is your perfect dance partner! 💃️🕺️

Example:
```php
$peopleSortedByName = $people->sortBy('name');
```

### sortByDesc($callback)

Feeling a bit retro? Spin those records in reverse with our **sortByDesc** method. 🔄🔵

Example:
```php
$peopleSortedByNameReverse = $people->sortByDesc('name');
```

### take($count)

Ever been to a party where there's just too much going on? Our **take** method is like the bouncer limiting the number of attendees, ensuring you don't get overwhelmed. 🤳️🚪

Example:
```php
$firstTenPeople = $people->take(10);
```

### skip($count)

Need to cut the line and get straight to the good stuff? Our **skip** method lets you jump ahead, ignoring the initial records. 🏃️‍♂️🚫

Example:
```php
$peopleSkippedFirstTen = $people->skip(10);
```

### first($count = 1)

The VIP list has arrived! Our **first** method lets you pull the top records, just like at an exclusive club. 🏆🔓

Example:
```php
$mostPopularDJs = $people->take(3);
```

### last($count = 1)

The afterparty is about to get lit! Our **last** method gives you the lowdown on the last records. 🎈🎉

Example:
```php
$recentlyArrivedPartyGoers = $people->last(5);
```

### unique()

Let's avoid those awkward moments of double-booking at the guest list! Our **unique** method ensures each record is a one-of-a-kind VIP. 🔒🚫

Example:
```php
$distinctPeople = $people->unique('id');
```

### slice($start, $length)

Ever wanted to cut a song in the middle for a mashup? Our **slice** method lets you do just that with your data. 🎵🔪

Example:
```php
$partialPeople = $people->slice(10, 5);
```

### all()

It's time to let loose and play all the hits! Our **all** method lets you grab every record in a collection. 🥳🎸

Example:
```php
$everybodyDance = $people->all();
```

### isEmpty()

Feeling like there's no one here to party? Our **isEmpty** method can help you check if your collection is, well... empty. 👮‍♂️🤫

Example:
```php
if ($people->isEmpty()) {
    echo "Looks like we need to invite some more people!";
}
```

### count()

Want to know the exact number of partygoers? Our **count** method will tell you how many records are in your collection. 🤓📊

Example:
```php
$numberOfPeople = $people->count();
```

Now that you've got the groove, let's get to work and make those collections dance! 🎉💃️

 Ahoy there, Laravel sailors! Let's dive into the fascinating world of collections and the `after()` method – a magical tool that helps you find the item that comes after the one you're eyeing, much like your favorite line at the buffet table! 🍴

```php
$collection = collect([1, 2, 3, 4, 5]); // A splendid collection of numbers

$collection->after(3); // Seeking the number following our beloved 3. Drumroll please... And here it is: 4!

$collection->after(5); // Oops! The coast is clear, matey! No more numbers after 5 in this collection.
```

But wait! What if you need to ensure a tight match between the given item and the one in the collection? Enter the `strict` argument! It'll make the method compare values strictly – no loose comparisons allowed!

```php
collect([2, 4, 6, 8])->after('4', strict: true); // Alas, no match was found, as '4' isn't exactly equal to 4.
```

Still not satisfied? You can write your own custom closure to search for the item that passes a given truth test! It's like playing detective with your numbers!

```php
collect([2, 4, 6, 8])->after(function (int $item, int $key) {
    return $item > 5; // We're after the number greater than 5. And there it is: 6!
});
```

Happy collection hunting, sailors!

 Oh, the `all()` method! It's like a magical key that unlocks the treasure chest of data within your Laravel collection. Just imagine you're a pirate and this collection is your loot—with `all()`, you can grab it all in one go without having to sort through each piece of eight individually.

```php
$treasure = collect([1, 2, 3]); // A bounty of numbers!
$allTheTreasure = $treasure->all(); // [1, 2, 3] - Voila! All your treasure at once!
```

Now that's what I call a booty call. But remember, unlike your friends with benefits, `all()` doesn't play hard to get—it always delivers the goods.

 **Avg-aroo!** 🎯 🐘

Ah, the grand ol' `average()`! It's not just a circus trick where an elephant balances on a tiny stool. No sirree! In our world of Laravel magic, it's the clever alias for the *avg-vant-garde* method. 🤩

<a name="method-avg-vant-garde"></a>

Wanna know more? Let's dive in! Imagine you've got a herd of data points, each one a tusky, wrinkly number. `average()` is your friendly elephant guide who takes all these numbers (even the ones with peanuts), adds 'em up, divides by the count, and poof! Out comes the average, ready for you to trumpet about or use in your calculations.

So, next time you're at a data circus, don't forget to call upon this mighty pachyderm of averages: `average()`. 🤠💪✨

 Ahoy there, coding swashbucklers! Buckle up as we delve into the thrilling world of `avg()`, the method that's not just a number cruncher, but a pirate's compass for data averages!

If you're on the hunt for the mean value of a certain key in your collection, look no further! Here's how to do it:

```php
$average_barrel_of_gold = collect([
    ['treasure' => 1000 gold coins],
    ['treasure' => 2000 gold coins],
    ['treasure' => 3000 gold coins],
    ['treasure' => 5000 gold coins]
])->avg('treasure');

// 3500 gold coins (approximate, we're not accountants)

$average_pirate_rations = collect([1 loaf, 2 loaves, 4 fish, 8 rum bottles])->avg();

// 4.5 items (yarr, you get an extra fish for the joke!)
```

So there you have it, mateys! With `avg()`, you can steer your data ships through uncharted waters and find the gold (or loaves and fish) in the averages. Fair winds and following seas!

 Ahoy there! Buckle up for a jolly ride through the enchanting world of Laravel collections! First off, let's talk about the `before()` method—the Cinderella of collection methods who always arrives before her more popular sister, `after()`.

If you're curious as to what she does, fear not! This method returns the item that comes just before the one you've specified, much like a trusty deckhand helping you navigate your ship through a foggy bay. But beware, if you ask for an item that's not on board or the first item itself (like asking about Captain Barbossa when ye be stuck with Will Turner), she'll just giggle and return `null`.

Here's a friendly example to help ye understand:

```php
$collection = collect([1, 2, 3, 4, 5]);

// Asking for ol' Three-Eyes (3)
$threeEyedPirate = $collection->before(3);
// Yarr! That's a 2 ye be gettin' there.

// Inquiring about the Captain Jack Sparrow (1), who's always first mate, leads to no result:
$noJackResult = $collection->before(1);
// Arr matey! Nothing here for ye but seaweed and a bottle o' rum.

Now, if ye have an array of magical numbers [2, 4, 6, 8] and ye ask the `before()` method to find '4', well... it ain't gonna like that:
collect([2, 4, 6, 8])->before('4', strict: true);
// Shiver me timbers! No '4' for ye, matey.

But if ye tell her to find any number greater than 5, she'll be happy to oblige:
collect([2, 4, 6, 8])->before(function (int $item, int $key) {
    return $item > 5;
});
// And lo and behold, there's a 4 for ye!
```

Now, isn't that a swashbucklingly fun way to learn about the `before()` method? Keep on sailing through these Laravel seas, matey!

 Ah, the `chunk()` method! It's like when your mom divides a giant batch of cookies into smaller, more manageable plates so you don't end up with a sugar coma before dinner. But instead of cookies, we're dealing with Laravel collections! 🍪🎓

In essence, this magical function breaks down a collection into bite-sized pieces of their own, each with a size specified by you:

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7]);

$chunks = $collection->chunk(4);

$chunks->all();

// [[1, 2, 3, 4], [5, 6, 7]]
```

Now, imagine you're hosting a massive, unsorted party where everyone is trying to find their friends. You don't want chaos, right? So you gather small groups of friends together and voila! Everyone's happy, and nobody feels lost in the crowd. This method works just like that in [views](/docs/{{version}}/views) when dealing with a grid system such as [Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/) - perfect for displaying Eloquent models in an organized fashion:

```blade
@foreach ($products->chunk(3) as $chunk)
    <div class="row">
        @foreach ($chunk as $product)
            <div class="col-xs-4">{{ $product->name }}</div>
        @endforeach
    </div>
@endforeach
```

And there you have it! A well-behaved party of collections, all thanks to the `chunk()` method. 🎉🥳🎊🍰

 Ah, the `chunkWhile()` method! It's like a magician's assistant, but instead of pulling rabbits out of hats, it's breaking your collection into smaller, more manageable portions, all based on the whims of a callback.

Imagine you're at a wild party with confetti cannons going off left and right. Instead of standing there drenched and miserable, `chunkWhile()` is the bouncer who sweeps you into groups based on color - "Alright folks, everyone wearing red to the left, blue to the right!"

Here's a fun example:

```php
$confetti = collect(str_split('AABBCCCD')); // Yes, we're at a confetti party.

// The bouncer (callback) is checking if each new piece of confetti matches the last group.
$bouncer = function ($value, $key, $chunk) {
    return $value === $chunk->last();
};

// The bouncer does its thing and we get our groups:
$groups = $confetti->chunkWhile($bouncer);

// And voila! [['A', 'A'], ['B', 'B'], ['C', 'C', 'C'], ['D']] - neatly segregated!
```

So next time you're drowning in a sea of data, let `chunkWhile()` be your lifeboat!

 Ahoy there, Laravel pirates! Time to unfurl the sails of enlightenment as we set sail through the murky waters of array manipulation. Brace yourself for the `collapse()` method, a veritable treasure chest of efficiency!

Picture this: you've amassed a collection of booty, but it's all nested like a Russian doll, driving ye mad! Fret not, me hearties! The `collapse()` method is like the trusty ol' Jack Sparrow — it will untangle your array mess and leave you with a single, flat collection.

Here's a splendid example to illustrate its magic:

```php
$collection = collect([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

$collapsed = $collection->collapse();

// With a single call to `all()`, we've flattened our collection like a pancake!
$collapsed->all();

// Ahoy! Now we have the treasure: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Now, isn't that more delightful than a barrel of grog and parrots? Happy sailing, ye landlubbers!

 Ahoy there, coders! Let's dive into the ocean of arrays and collections with the `collapseWithKeys()` method - a seaworthy companion for your Laravel voyage!

This handy helper transforms your collection of arrays or even nested collections (because who doesn't love Russian dolls?) into one giant, flattened pirate ship. But fear not! It'll still preserve those essential keys so you don't end up steering a rudderless vessel.

```php
$collection = collect([
    ['first mate' => collect([1, 2, 3])],
    ['quartermaster' => [4, 5, 6]],
    ['lookout' => collect([7, 8, 9])]
]);

$flattened_deck = $collection->collapseWithKeys();

$flattened_deck->all();

// [
//     'first mate' => [1, 2, 3],
//     'quartermaster' => [4, 5, 6],
//     'lookout' => [7, 8, 9],
// ]
```

But wait! There's more! If you've already flattened your collection like a seasoned sailor, this method will only return an empty collection, leaving your ship's hold uncluttered. Phew, now we can relax with a cup of grog and some sea shanties! 🏴‍☠️☀️🎶

 Ahoy there, Laravel sailor! Ever found yourself in the midst of a pirate's hoard, drowning in a sea of numbers and longing for a treasure chest to organize your loot? Fear not! The `collect()` method is your new best matey!

This nifty little function takes your collection of booty (array) and returns a shiny, organized Collection instance. Here's how it's done:

```php
$collectionA = collect([1, 2, 3]); // Think of `collect()` as a bottle washer for collections

$collectionB = $collectionA->collect(); // Yes, we know it looks funny, but it's like polishing your eye-patch with your other eye-patch

$collectionB->all(); // Unleash the treasure: [1, 2, 3]
```

But wait! There's more! If you're dealing with a lazy collection (the pirate version of a shifty merchant's promise), `collect()` can turn it into a reliable, non-lazy Collection. Here's how to do the swap:

```php
$lazyCollection = LazyCollection::make(function () {
    yield 1; // A single coin found on the ground
    yield 2; // Another coin, but this one's been buried a bit deeper
    yield 3; // The heaviest treasure of all, finally unearthed
});

$collection = $lazyCollection->collect(); // Exchanging your promises for solid gold coins

$collection::class; // Check the class of your newfound riches: 'Illuminate\Support\Collection'

$collection->all(); // Show off your spoils: [1, 2, 3]
```

Now, when you've got an instance of `Enumerable` (the pirate equivalent of a janky compass) and need a trustworthy Collection instance, the `collect()` method is just what the parrot ordered. As it's part of the `Enumerable` contract, you can count on it to deliver a reliable `Collection`.

> [!NOTE]
> Remember: When you've got too many coins in your sack and need a chest to store 'em all, the `collect()` method is always ready for action!

And that, matey, is how the pirate life meets the Laravel world with some witty humor and useful information! Happy coding! 🏴‍☠️📚

 Ahoy there, matey! Buckle up as we sail into the world of Laravel collections with the swashbuckling `combine()` method!

This ain't your average pirate parrot; instead of repeating the same phrase over and over, it pairs up values from a collection like a seasoned matchmaker at a high-society ball!

Let's set sail with an example:

```php
$collection = collect(['name', 'age']); // Our humble pirate crew

$array_treasure = ['George', 29]; // The bounty we desire to combine

$combined = $collection->combine($array_treasure); // Hoist the anchor and set course for a matchmaking mission!

$combined->all(); // Unveil the booty we've amassed!

// ['name' => 'George', 'age' => 29] // Our crew now has their perfect matches, just in time for a sea shanty sing-along!
```

Now that's what I call a successful matchmaking voyage! So, if you ever find yourself with an array and collection longing to be paired up, don't hesitate to summon the `combine()` method to get them hitched up in no time! Arr matey! 🏴‍☠️

 Ahoy there, Laravel coders! Ever find yourself in a pickle, trying to expand your humble collection like the Seven Seas? Fear not, for `concat()` is here to lend a helpful hand!

This magical method, much like a skilled bartender mixing up your favorite cocktail, appends the values from another array or collection onto the tail end of your beloved one. Here's a tasty example:

```php
$collection = collect(['Captain Sparrow']); // Our humble beginning

$concatenated = $collection->concat(['Anne Bonny'])
                            ->concat(['role' => 'Pirate Captain']); // Mix in some more ingredients

$concatenated->all(); // Time to serve up the collection!

// ['Captain Sparrow', 'Anne Bonny', ['role' => 'Pirate Captain']]
```

But wait, there's more! The `concat()` method, in its wisdom, numerically reindexes keys for items it appends onto the original collection. This is perfect if you want your collection to remain as organized as a well-stocked pantry. However, if you're dealing with an associative collection and wish to maintain those keys, fear not! Check out our [merge](#method-merge) method, it's like adding a dash of secret sauce to your dish.

Happy coding, mateys! Keep building those grand Laravel collections! 🍹🏴‍☠️

 Ah, the ever-intriguing `contains()` dance! This illustrious Laravel jive checks if your collection has a specific item, much like a picky restaurant checking for a celebrity reservation. But unlike Tinseltown's finest eateries, our collection won't kick you out for not having a table reserved - it'll just tell you whether you're in or not!

Now, this ain't your average barroom game of "Does Jack belong in this deck?" Nope, we got options! You can whip up a closure (the digital equivalent of a magic spell) to determine if an element fits the bill:

```php
$collection = collect([1, 2, 3, 4, 5]);

$collection->contains(function (int $value, int $key) {
    return $value > 5; // Sorry, numbers 6 and up - we're fully booked!
});

// false, but don't let it break your heart - there's always next time!
```

Feeling more like a bouncer at the door? You can opt for a straightforward string check:

```php
$collection = collect(['name' => 'Desk', 'price' => 100]);

$collection->contains('Desk'); // "Yes, you're in!"

$collection->contains('New York'); // "Sorry, mate, wrong city!"
```

Or maybe you're playing matchmaker and need to check if a key-value pair is in the house:

```php
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
]);

$collection->contains('product', 'Bookcase'); // "Nope, we don't have any bookcases."
```

And here's the fun part: our `contains()` is a laid-back California surfer when it comes to comparisons. It doesn't care if your string value has an integer face - as long as they're the same, it considers them best buds. But if you want strict comparisons (you've grown tired of those easygoing days), give our `containsStrict()` method a try!

For those of you who prefer to be on the "does not contain" list, feel free to check out the [doesntContain](#method-doesntcontain) method. We're all about giving you options here at Laravel Land!

 Ahoy there, Laravel scallywags! Let's dive into the swashbuckling world of collections with a method that's stricter than Captain Hook himself - `containsStrict()`!

This method shares a cocktail with its more laid-back cousin, the `contains()` method. But while the latter compares values like they're rum and cola, `containsStrict()` is the teetotaler that insists on precise matches – just like Long John Silver demands from his pirate crew!

Now, beware! This method's behavior changes when you sail into Eloquent Collections territory. It's like having two ships – one for loose comparisons and another for tight ones. Remember, in the land of Eloquent, `containsStrict()` acts more like a finicky parrot who insists on an exact "Polly want a cracker" instead of any old "cracker"!

So, if you're seeking a stricter comparison and want to ensure your collections are as meticulous as Captain Barbossa's treasure map, hoist the `containsStrict()` flag and set sail! Arr matey, this method will help you navigate those choppy waters of loose comparisons and find the exact matches you crave!

 Ah, the `count()` method! The unsung hero of Laravel collections, always ready to step in and save the day when you need a quick headcount. It's like that trusty sidekick in every action movie, but instead of taking down bad guys, it's counting your collection items with military precision.

So, imagine you've got a fancy array of numbers (1, 2, 3, 4) and you want to know how many of them there are without manually counting each one. Well, that's where our hero comes in!

```php
$collection = collect([1, 2, 3, 4]);

$collection->count(); // And just like that, you've got your answer!

// 4
```

Now, isn't that just peachy? No more finger cramps from counting manually. The `count()` method is the perfect solution for when you need to know how many items are in your collection, but don't want to be left counting sheep at night instead.

 Ahoy there, sailor! Ever found yourself in a pickle, trying to count the frequency of elements in your pirate crew or perhaps the number of grog bottles? Fret not, for I present to ye the swashbuckling `countBy()` method!

This here is a nifty tool that tallies up the occurrences of values within yer collection. By default, it counts every bloke and belle in sight, so ye can keep tabs on the rascals ye'd like to count (be it scallywags or sea serpents).

```bash
$collection = collect([1, 2, 2, 2, 3]);

$counted = $collection->countBy();

$counted->all(); // [1 => 1, 2 => 3, 3 => 1]
```

But what if ye wanted to count the bottles of grog by their brands? No problemo! Pass a closure to `countBy()`, and it'll count all items based on your custom value.

```bash
$collection = collect(['alice@gmail.com', 'bob@yahoo.com', 'carlos@gmail.com']);

$counted = $collection->countBy(function (string $email) {
    return substr(strrchr($email, '@'), 1);
});

$counted->all(); // ['gmail.com' => 2, 'yahoo.com' => 1]
```

Now ye can keep the grog-fuelled antics in check without lifting a finger! Arr matey!

 Ah, the `crossJoin()` method! It's like a dance floor where each collection value is paired with every item from the given arrays or collections, creating a wild conga line of data! 💃🕺

Let's say you've got a collection of numbers and you wanna get frisky with some letters. Here's how to make them salsa together:

```php
$collection = collect([1, 2]); // Our dance partners

$danceFloor = $collection->crossJoin(['a', 'b']); // Inviting the letters to join the party

dd($danceFloor->all()); // Time to check out who's dancing with whom (Don't worry, it's a friendly event!)

/*
    [
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
    ]
*/
```

But the fun doesn't stop there! Let's bring in more party guests:

```php
$collection = collect([1, 2]);

$danceFloor = $collection->crossJoin(['a', 'b'], ['I', 'II']); // Now we've got some numbers and letters mixing it up with some fancy chapter headings

dd($danceFloor->all()); // Time to see how the double date is going (Don't worry, no drama here!)

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

So grab your dancing shoes and let's get this collection moving! 💃🕺🎉

 Ah, the `dd()`! It's like the party pooper of the Laravel world, but in a good way, of course. This magical function is here to ensure your collection items don't go unnoticed, and then promptly exit stage left, leaving you to pick up the pieces (or code) afterwards.

```php
$party = collect(['John Doe', 'Jane Doe']); // Our party guests

$party->dd(); // Cue confetti cannons, but don't let them clean up!

/*
    array:2 [
        0 => "John Doe"
        1 => "Jane Doe"
    ]
*/
```

If you're still partying and want to keep the celebration going (because who doesn't, really?), opt for the more reserved but equally charming `dump()` method instead. It's like the difference between fireworks and disco ball - both are fun, just in their own ways! 🎉💫

 Ah, the `diff()` method - your friendly neighborhood collection comparison sheriff! This plucky little fellow compares your collection to another one or a regular ol' PHP array, all based on their values. It's like matchmaking for numbers (and other things), but instead of finding true love, it finds the ones that didn't make the cut in the given collection:

```php
$collection = collect([1, 2, 3, 4, 5]); // Meet our lovable characters!

$diff = $collection->diff([2, 4, 6, 8]); // Here come the awkward comparisons...

$diff->all(); // And now, the list of the unlucky ones who didn't get picked: [1, 3, 5]
```

> [!NOTE]
> Now, hold your horses, partner. This method's behavior gets a little tipsy when it teams up with [Eloquent Collections](/docs/{{version}}/eloquent-collections#method-diff). Just remember that in those situations, it might start playing matchmaker for database records instead!

 Ahoy there, Laravel coders! Brace yourselves for a rollercoaster ride through the magical land of data manipulation. We're about to introduce you to the enchanting `diffAssoc()` method – a sorcerer's apprentice in the world of collections!

This mystical function compares your collection against another collection or an array, all thanks to its key-value pair powers. It then returns the lost souls (key-value pairs) from the original collection that have somehow managed to escape the clutches of the given one:

```php
Let's create a collection representing a fruit basket:
$fruitBasket = collect([
    'color' => 'orange', // Ah, the citrus of life!
    'type' => 'fruit', // Duh, it's a fruit basket!
    'remain' => 6, // Six fruits left, grab em while they last!
]);

Now, we encounter another collection or array (let's call it the greedy neighbor) that decided to borrow some of our beloved citrus:
$greedyNeighbor = [
    'color' => 'yellow', // Sneaky yellow thief!
    'type' => 'fruit', // Typical fruit thief...
    'remain' => 3, // Three oranges stolen, what a heist!
    'used' => 6, // And they had the audacity to use six of our fruits!
];

To find out which of our citrus have gone missing, we cast the `diffAssoc()` spell:
$missingOranges = $fruitBasket->diffAssoc($greedyNeighbor);

By the power vested in this function, we can now reveal the lost oranges:
$missingOranges->all();

// Out come the missing citrus: ['color' => 'orange', 'remain' => 6]
```

There you have it – the `diffAssoc()` method, a powerful tool for tracking down missing data and putting an end to fruit theft in your Laravel projects! Happy coding, adventurers!

 Ah, `diffAssocUsing()`, the Laravel collection method that's like the cooler, more flexible cousin of `diffAssoc`! Whereas its humdrum sibling compares keys using strict equality, our lively `diffAssocUsing` accepts a user-supplied callback function for those fancy index comparisons.

Let's imagine you're managing an orange grove and need to compare your inventory with a potential buyer who insists on calling oranges 'Color' and fruit types 'Type'. With `diffAssocUsing()`, you can sort this out in no time!

Here's how you'd do it:

```php
$orangeGrove = collect([
    'color' => 'orange',
    'type' => 'fruit',
    'remain' => 6,
]);

// Our snooty potential buyer insists on 'Color' and 'Remain' for some reason...
$demandingBuyer = collect([
    'Color' => 'yellow',
    'Type' => 'fruit',
    'Remain' => 3,
]);

// Now we tell PHP how to compare these crazy names with our callback function, strnatcasecmp!
$diff = $orangeGrove->diffAssocUsing($demandingBuyer, 'strnatcasecmp');

$diff->all();

// Output: ['color' => 'orange', 'remain' => 6]
```

Your callback function must be as charming and flexible as a chameleon at a dance party – it should return an integer less than, equal to, or greater than zero. For more info on how to create the perfect callback, take a peek at PHP's documentation for [array_diff_uassoc](https://www.php.net/array_diff_uassoc#refsect1-function.array-diff-uassoc-parameters). Now go forth and compare keys like a pro!

 Ah, the `diffKeys()` method! Picture a high-stakes game of musical chairs where collections are your dancers and keys are your seats. This ain't no ordinary game though, because in this case, the seats can talk and move around on their own.

In simple terms, `diffKeys()` compares your collection to another one (or a humble PHP array if that's more your style) based on their key names. It then returns the items from your original collection that didn't get a seat in the other collection:

```php
Let's gather up some data like this collection of numbers and letters:

$collection = collect([
    'one' => 10,
    'two' => 20,
    'three' => 30,
    'four' => 40,
    'five' => 50,
]);

Now, let's imagine that some other collection has snagged a few of our seats:

$snatched_seats = collect([
    'two' => 2,
    'four' => 4,
    'six' => 6,
    'eight' => 8,
]);

But fear not! Our loyal `diffKeys()` method comes to the rescue and checks which seats are still occupied in our original collection:

$empty_seats = $collection->diffKeys($snatched_seats);

And voila! We now have an array of seats (or key-value pairs) that are still vacant in our collection:

$empty_seats->all();

// ['one' => 10, 'three' => 30, 'five' => 50]
```

So next time you find yourself in a chaotic game of musical chairs with collections and keys, remember to call upon `diffKeys()`! It'll help you keep track of those elusive vacant seats.

 Ahoy there, Laravel coders! Let's dive into the whimsical world of `doesntContain()` - your collection's best friend when it comes to verifying if something is definitely not in the party!

This method is like the bouncer at a trendy club, checking if your collection doesn't have a specific item on the guest list. It even lets you set the rules for who gets in (or rather, who doesn't) with the help of closures or good ol' strings.

```php
$collection = collect([1, 2, 3, 4, 5]);

// This bouncer will let anyone under 5 sneak past. No judgment!
$collection->doesntContain(function (int $value, int $key) {
    return $value < 5;
});

// Alas, no one slips by!

```

But wait, there's more! You can also give `doesntContain()` a peek at the guest list yourself by providing it with a string.

```php
$collection = collect(['name' => 'Desk', 'price' => 100]);

// Nope, no tables here!
$collection->doesntContain('Table');

// Oh, there's indeed a desk around...
$collection->doesntContain('Desk');

// ...but we're not admitting any bookcases. Sorry!
```

Key-value pairs are also welcome at the door:

```php
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
]);

// No bookcases in sight!
$collection->doesntContain('product', 'Bookcase');
```

And the best part? This bouncer is a lax one, using "loose" comparisons when checking item values. That means a string with an integer value will be considered equal to an integer of the same value – now isn't that a twist!

So there you have it! `doesntContain()` - the most fashionable way to keep your collections clean and exclusive. Now go forth, Laravel coders, and bounce away those unwanted elements! 🤘

 Ahoy there, Laravel pirates! Let's dive into the treasure chest of methods and uncover a gem called `doesntContainStrict()`. This here method is a close cousin to the well-known `doesntContain` matey, but with a twist as twisty as a ship's helm.

In plain English, this method checks if an array of your collection's items doesn't contain any strict matches with the provided value. Strict matches? You ask? Why, that's when the comparison is as precise as a longshoreman measuring gold doubloons!

So, if you're looking to ensure there are no exactly-the-same items in your bounty, `doesntContainStrict()` is the parrot on your shoulder you can trust. Just remember, like all good treasure, it requires a keen eye and a sharp mind to use!

<a name="method-dot"></a>
Yarr matey, happy sailing with this fine new method in yer toolbelt!

 Ahoy there, Laravel sailors! Time for a dive into the depths of our mighty collection, armed with nothing but the mystical `dot()` method!

Imagine you've stumbled upon a treasure trove of nested arrays, so deep that even Indiana Jones would be scratching his fedora in confusion. But fear not! The `dot()` method is here to flatten your multi-dimensional collection into a single level pirate's map, using the ancient language of "dot" notation to mark its hidden depths.

```php
$collection = collect(['products' => ['desk' => ['price' => 100]]]); // Our treasure map

$flattened = $collection->dot(); // Unfold the map with a single swashbuckle!

$flattened->all(); // Reveal the loot: ['products.desk.price' => 100]
```

So now, instead of spelunking through endless caverns of arrays, you can easily access your treasure without breaking a sweat – or your trusty whip! Happy sailing, and may all your collections be flat and easy to navigate! 🏴‍☠️🚀

 Ahoy there, Laravel pirate! Steer your ship towards the `dump()` method - a treasure trove of your collection's goods!

```php
$booty = collect(['Shiver me Timbers', 'Captain Sparky']);

$booty->dump();

/*
    array:2 [
        0 => "Shiver me Timbers"
        1 => "Captain Sparky"
    ]
*/
```

But beware, matey! If ye want to halt the script after unloading the booty, hoist the Jolly Roger and use the more ruthless [dd](#method-dd) method instead!

Arrrrrghastonishingly useful, isn't it? 🏴‍☠️🔥⚓️

 Ahoy there, brave Laravel coder! Prepare to set sail on the treacherous seas of duplicate data with the mighty `duplicates()` method! This magical pirate captain will help you uncover hidden treasure (read: redundant values) in your collections without making you walk the plank of tedious manual checks.

Let's dive right into the booty, shall we?

```php
$collection = collect(['shiver me timbers', 'parrot on shoulder', 'shiver me timbers', 'eye patch', 'parrot on shoulder']);

$collection->duplicates();

// [2 => 'shiver me timbers', 4 => 'parrot on shoulder']
```

But wait, there's more! If your collection contains arrays or objects, you can specify the exact booty (attributes) you seek with a simple map (read: key).

```php
$employees = collect([
    ['pirate name' => 'Abby', 'position' => 'Swabbie', 'booty' => 'Golden Parrot'],
    ['pirate name' => 'Cap'n Jim', 'position' => 'Lookout', 'booty' => 'Eye Patch'],
    ['pirate name' => 'Vicky', 'position' => 'Swabbie', 'booty' => 'Golden Parrot'],
]);

$employees->duplicates('booty');

// [2 => 'Golden Parrot']
```

Now, you can sail the seas of code with confidence, knowing that `duplicates()` will always keep a sharp eye out for those pesky redundant values! Yarr, matey!

 Ahoy there, intrepid coder! I'm here to spill the beans on a Laravel feature that'll make your arrays as unique as a snowflake in a sauna – the `duplicatesStrict()` method!

Now, don't be fooled by its name; it may sound like a doppelganger of our trusty friend, `duplicates()`, but there's more to this one than meets the eye. You see, `duplicatesStrict()` is like the picky older sister of `duplicates()`. Whereas `duplicates()` compares values using loose comparisons (you know, allowing for those pesky floating-point discrepancies), `duplicatesStrict()` dives headfirst into strict comparisons – no funny business!

So, if you're looking to ensure that every value in your collection is as unique as a unicorn horn or Kim Kardashian's wardrobe, then this method is your new best friend. And if you're wondering how it works, well, just call upon the `duplicatesStrict()` method like so:
```php
$uniqueArray = collect([1, 2, 'apple', 3, 'orange', 2])->duplicatesStrict();

// The result will be: [1, 2, "apple"]
```

As you can see, only the unique values remain, leaving any duplicates behind like a jilted ex-lover at a wedding. So, go ahead and embrace this strictly picky method to make your collections as clean and tidy as your mom's spotless living room after a spring cleaning! 🧹🎉

 Alrighty, gather 'round folks! Let's chat about a Laravel gem called `each()`, the collection method that's as versatile as a Swiss Army knife but way cooler. You see, this method is like the bouncer at a popular club who checks each guest before they enter – but instead of checking IDs, it iterates over items in your collection and hands them off to a fun little party called a closure!

```php
$collection = collect([1, 2, 3, 4]); // Gather all the numbers you can find

$collection->each(function (int $item, int $key) {
    // ...
}); // Throw each number into our magical mystery function
```

Now, if you're feeling a bit rowdy and want to kick someone out (or in this case, stop iterating), just return `false` from your closure:

```php
$collection->each(function (int $item, int $key) {
    if (/* condition */) {
        return false; // Kick 'em out before the party gets too wild!
    }
});
```

And there you have it! Now that you've learned how to use `each()`, you're ready to mix and mingle with your Laravel collections like a pro (or, you know, like a bouncer at a popular club). Happy coding! 🥳

 Ahoy there! Sailors of code and Laravel land! Tired of feeling like Captain Ahab chasing the elusive collection's items? Fear not, for your friendly neighborhood `eachSpread()` method is here to lend a hand (or hook, if you will)!

This nifty little function is just the squid-in-the-barrel you need when you want to dive deep into your collection's items. It iterates over each item like a seasoned pirate navigating through treasure chests, passing each nested item value (yes, we're talking names and ages here) into the callback of your choice.

```php
$collection = collect([['John Doe', 35], ['Jane Doe', 33]]); // Our motley crew

// Assigning roles: Each crew member (item value) will be handed over to our trusty callback (function)
$collection->eachSpread(function ($name, $age) {
    // ... Pirate-y shenanigans here!
});
```

But what if you decide that a particular crew member is too much trouble, or maybe Captain Jack Sparrow has shown up and you need to abandon ship? Fear not! You can halt the iteration by returning `false` from your callback.

```php
$collection->eachSpread(function ($name, $age) {
    return false; // Time to walk the plank!
});
```

So, hoist the jolly roger and set sail for smoother shores with `eachSpread()`. Yarr-a-har-a-har!

 Alrighty, let's dive into the ticklish topic of Laravel's `ensure()` method - the collection's very own bouncer! Just like a hip club, it checks if all elements trying to get in are on the guest list.

Here's how you'd invite only Users and Customers:

```php
return $collection->ensure(function(){ return User::class; }); // Classy crowd
return $collection->ensure(function(){ return [User::class, Customer::class]; }); // Mixed bag of Users and Customers
```

But if you're feeling numerically inclined, primitives like `string`, `int`, `float`, `bool`, or even `array` are also welcome:

```php
return $collection->ensure('int'); // Math nerds get the party started
```

*WARNING: Caution tape ahead!*
The `ensure` method, while a reliable doorman, cannot promise that uninvited types won't sneak into your collection later on. So keep an eye out for gatecrashers!

Now that you know the drill, go forth and ensure your collections are only mingling with the right elements! 🥳🚀🎉

 Ahoy there, Laravel coders! Let's dive into the mystical world of collections and the delightfully named `every()` method. This isn't just another superhero from the Marvel universe, but a powerful tool that ensures every element in your collection is as noble as Thor himself.

But what makes it truly special? Well, imagine you're at a party with a rowdy bunch of elements (don't ask), and you want to know if they all have a blood alcohol level higher than 2 (yikes!). That's where our `every()` comes in. It'll run a test on each element, just like a strict bouncer at the door, only letting in those who pass the test.

```php
$elements = collect([1, 2, 3, 4]); // Our rowdy partygoers

$elements->every(function ($element) {
    return $element > 2; // The strict bouncer's question: "Are you over 2?"
});

// False, some elements failed to pass the test (1, 2, and maybe a few sober ones too!)
```

But what if our party was a bust and there were no guests? Not a problem! Our `every()` method will still let you through with a cheerful "Well done, Captain!"

```php
$emptyParty = collect([]); // Oops, no one came to the party

$emptyParty->every(function ($element) {
    return $element > 2; // The strict bouncer still checks IDs, just in case
});

// True, an empty collection always passes the test!
```

So there you have it! With `every()`, you can host a party and be the bouncer, all at once. Just remember to serve plenty of mocktails for those under 2!

 Alright, let's dive into the world of Laravel collections and meet our star of the show - the `except` method! This is like the bouncer at a exclusive party, but instead of kicking out rowdy guests, it politely escorts unwanted collection keys to the door.

```php
$collection = collect([
    'product_id' => 1,
    'price' => 100, // This boi is trying to crash the party!
    'discount' => false, // And this one too!
]);

// So we kick them out with a quick call to `except`:
$filtered = $collection->except(['price', 'discount']);

// Now we check who's left on the dance floor:
$filtered->all();

// ['product_id' => 1] // Only the cool kids remain!
```

If you're wondering where your favorite keys went, don't worry - they've just been escorted to a VIP room by the [only](#method-only) method. But that's a whole other party!

> [!NOTE]
> When using Eloquent Collections, our bouncer friend gets a bit more selective about who he lets in and out. Check it out [here](/docs/{{version}}/eloquent-collections#method-except)!

 Ahoy there, intrepid Laravel explorers! Buckle up as we delve into the mystifying realm of the `filter()` collection method - a magical tool that'll make your data sparkle with brilliance! 🌈✨

First off, imagine you're hosting a swanky soiree, but there are some uninvited guests mingling amongst your elite crowd. These party crashers could be numbers less than 3 in our collection (🙅‍♂️🙅‍♀️), and we need to eject them without causing a scene!

```php
$collection = collect([1, 2, 3, 4]); // Our motley crew

// Here comes the bouncer, filtering the collection with a callback function
$filtered = $collection->filter(function (int $value, int $key) {
    return $value > 2; // Only those who are above 2 get to stay!
});

// And now, we present our cleaned-up guest list
$filtered->all(); // [3, 4]
```

But what if you don't want to specify a callback? Well, fear not! `filter()` will do the job for you and kick out any entries equivalent to `false` (empty strings, nulls, zeros, or even that group of unengaging guests hanging by the punch bowl).

```php
$collection = collect([1, 2, 3, null, false, '', 0, []]); // Our diverse party crowd

// After filtering, only the lively remain
$collection->filter()->all(); // [1, 2, 3]
```

When you need to boot those who shouldn't be there, remember `filter()`. And when you want to let in those who absolutely should not, well... you might wanna consider using the [reject](#method-reject) method instead. Cheers to keeping your collections classy! 🎉🥳

 Ahoy there! Let's dive into the world of Laravel collections and their jolly good method named `first()`. This isn't your average first-come, first-served scenario. No, no! Here we're looking for the collection's first element that can clear a truth test you set up (kinda like a bouncer at a fancy party).

```php
collect([1, 2, 3, 4])->first(function (int $value, int $key) {
    return $value > 2; // Ah, the good old "value is greater than 2" test. Sounds like a swanky exclusive club!
});

// 3, our VIP guest that made it past the bouncer's check
```

And if you leave out the fancy test and just want the first element in line, here you go:

```php
collect([1, 2, 3, 4])->first();

// 1, our friendly greeter at the door
```

Now, what happens if there's no one at the door? Well, Laravel won't just stand around twiddling its thumbs! It'll return `null`, just to keep things interesting.

Hope that gave you a bit of a laugh and some insight into Laravel collections! 🎉🎊

 Ah, the `firstOrFail` method! It's like a picky date at a bar – it won't settle for just anyone. This method is quite similar to its more laid-back counterpart, `first`, but with a bit of a drama queen streak.

If you call it on a collection and it doesn't find Mr. or Ms. Right (a matching item), it throws an elaborate tantrum in the form of an `Illuminate\Support\ItemNotFoundException`. Just like when your significant other can't find their favorite pair of socks, chaos ensues!

Here's a fun example:

```php
$collection = collect([1, 2, 3, 4]);
$collection->firstOrFail(function (int $value, int $key) {
    return $value > 5;
});

// Oops! ItemNotFoundException. I guess your date isn't feeling the vibe tonight...
```

But wait! If you feel like you don't have enough options in your collection and are getting desperate, you can call `firstOrFail()` with no arguments. This is like saying, "I'll take anything at this point!" However, if the collection is as empty as a deserted island, it throws an `Illuminate\Support\ItemNotFoundException`. Quite the party pooper!

```php
$collection = collect([]);
$collection->firstOrFail();

// ItemNotFoundException: Aww, looks like you struck out at the dating game...
```

 Ah, the `firstWhere` method! It's like a picky bouncer at a nightclub, only instead of checking for IDs, it's on the lookout for key-value pairs in your collection.

Imagine you're at a wild party (your collection) and you need to find Linda (the key). This method will sift through the crowd, pull Linda aside, and present her to you without any fuss.

```php
$collection = collect([ // Imagine this is a rager of a party
    ['name' => 'Regena', 'age' => null],
    ['name' => 'Linda', 'nameOfPet' => 'Fluffy', 'age' => 14],
    ['name' => 'Diego', 'nicknames' => ['Mr. Fancy Pants', 'Smooth Operator'], 'age' => 23],
    ['name' => 'Linda', 'favoriteBook' => 'War and Peace', 'age' => 84],
]);

$collection->firstWhere('name', 'Linda'); // Find Linda, the original one
// ['name' => 'Linda', 'age' => 14]
```

But what if you want Linda only if she's of legal age? No problem! This method can handle that too:

```php
$collection->firstWhere('age', '>=', 18); // Find Linda who's of age
// ['name' => 'Diego', 'age' => 23]
```

And just like the discerning bouncer, `firstWhere` can even tell if someone is "truthy" (meaning they have something to prove):

```php
$collection->firstWhere('age'); // Find Linda who has an age (even if it's not legal yet)
// ['name' => 'Linda', 'age' => 14]
```

So, next time you need to find someone in a crowd, don't worry - just call `firstWhere`! It'll do the hard work for you.

 Ahoy there, Laravel enthusiasts! Let's dive into the swashbuckling world of `flatMap()`, the method that's about to become your new best pirate mate!

Imagine you've stumbled upon a treasure chest (your collection), filled with maps, compasses, and treasure maps rolled up as scrolls. Each scroll contains clues hidden in riddles, which is where our hero, `flatMap()`, steps in to help translate those cryptic messages.

```php
$treasure_chest = collect([
    ['map' => 'Sally'],
    ['compass' => 'Arkansas'],
    ['scroll' => '28']
]);
```

Now, you could spend hours deciphering each clue one by one, but why not let `flatMap()` do the heavy lifting? Just provide a simple pirate code to it that converts everything to uppercase – after all, it's easier to read when you squint at the parchment!

```php
$decoded_messages = $treasure_chest->flatMap(function (array $items) {
    return array_map('strtoupper', $items);
});
```

Once your messages are deciphered, you'll have a brand new collection of treasure map keys that look like this: `['MAP' => 'SALLY', 'COMPASS' => 'ARKANSAS', 'SCROLL' => '28']`. Arrr matey, we did it!

So there you have it – the magical `flatMap()` method that turns your unreadable treasure chest into a collection of easily-deciphered riches. Happy pirating, and may your collections always be flattened in style! 🏴‍☠️🚀✨

 Ahoy there, Laravel swashbucklers! Ever found yourself in a pickle with a multi-dimensional collection and yearned for a simpler time? Well, fear not! The trusty `flatten()` method is here to save the day!

Imagine you're at a fancy dinner party where all your friends are talking about their favorite programming languages but one friend shows up late, only to find they've been discussing multi-dimensional arrays. Don't be that friend! With `flatten()`, your collection will be as flat as a pancake in no time.

```php
$collection = collect([
    'name' => 'Taylor',
    'languages' => ['PHP', 'JavaScript'] // You know, for when you're feeling like a coding polyglot!
]);

$flattened = $collection->flatten(); // Flatten away, my friend!

$flattened->all(); // ['Taylor', 'PHP', 'JavaScript'] - Ta-dah! One dimension only!
```

But wait, there's more! In case you find yourself dealing with a collection that's deeper than the Mariana Trench, you can pass in a "depth" argument:

```php
$collection = collect([
    'Apple' => [
        [
            'name' => 'iPhone 6S',
            'brand' => 'Apple'
        ],
    ],
    'Samsung' => [
        [
            'name' => 'Galaxy S7',
            'brand' => 'Samsung'
        ],
    ],
]);

$products = $collection->flatten(1); // Just ask for one layer of flattening, please!

$products->values()->all();

/*
    [
        ['name' => 'iPhone 6S', 'brand' => 'Apple'],
        ['name' => 'Galaxy S7', 'brand' => 'Samsung'],
    ]
*/
```

In this example, forgetting to specify the depth would have given you a flattened array with nested arrays still intact. You don't want to end up in a tangled mess like a ball of yarn left behind by a cat! Providing a depth ensures that your array remains as tidy as a well-organized pirate's treasure chest. Arrgh, matey! Happy flattening! 🏴‍☠️

 Ahoy there, coding pirates! Steer your ships toward the enlightening cove of `flip()`, a buccaneering method that will leave your collections more jolly and inversely arranged than ever before!

Picture this: You've got yourself a collection full of keys and values reminiscent of buried treasure, but who wants to search for gold when you can swap the map and the X marking the spot? That's where our swashbuckling `flip()` comes into play!

```php
$booty = collect(['Treasure Map' => 'X Marks the Spot', 'Parrot' => 'Polly']);

$shuffleSails = $booty->flip(); // Arrgh, swapping those keys and values like a pro!

echo $shuffledSails->all(); // ['X Marks the Spot' => 'Treasure Map', 'Polly' => 'Parrot']
```

Now you can keep your treasure maps in one hand, and your parrots on the other – all thanks to Laravel's `flip()` method. Yarrr!

 Ahoy there, brave coder! Sail with me through the shimmering seas of Laravel collections, where each method is a trusty companion in your quest for data mastery! Today we're diving into the enigmatic `forget()`!

Brace yourself as we journey to the treasure trove that is `$collection`. This pirate's booty is bursting with pairs of name-value paraphernalia, just like old Captain Taylor's sea chest, but our objective isn't buried gold—it's banishing a pesky key from this collection!

```php
// First, we hoist the anchor and set sail with our bounty:
$collection = collect(['name' => 'Taylor', 'framework' => 'Laravel']);

// Now we've reached our target, it's time to plot a course for forgetfulness. Say goodbye to 'ol "name":
$collection->forget('name');

// And voila! A new map of the collection appears before you:
['framework' => 'Laravel']

But we didn't sail here just to disembark with one key missing, we want to set a dozen keys adrift! So set your compass for multiple forgetfulness!

// Hoist the sails once more and prepare for mass deletions:
$collection->forget(['name', 'framework']);

// The winds of change have swept through the collection, leaving naught but an empty sea behind you:
[]
```

[!WARNING]
But beware, matey! Unlike other jolly collection methods, `forget()` doesn't play fair. It not only forgets its keys but also modifies and returns the very collection it was called upon, so tread lightly with this fickle friend of yours!

 Ahoy there, Laravel pirates! Prepare to set sail on a magical journey through the high seas of data collection! Today we're talking about the swashbuckling `forPage()` method - a marvellous tool that lets you slice and dice your collections like a sharp cutlass through ripe melons.

In simpler terms, imagine you've plundered a bounty of loot, and you want to carry only a portion of it on each trip to the ship. That's exactly what `forPage()` does! It returns a new collection with the items that would be present on a specific page number (the first mate's quarters, if you will).

To use this method, provide two arguments: the page number and the number of items to show per page. Here's an example:

```php
$treasure = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]); // A bounty worthy of Blackbeard himself!

$bootyBag = $treasure->forPage(2, 3); // Setting sail to the second page with a haul of 3 items.

$bootyBag->all(); // [4, 5, 6] - Our swag for today's voyage!
```

Now, you can enjoy your treasure hoard without being weighed down by its immense weight! Arrrr, matey! Happy navigating!

 Ahoy there, shipmates! Buckle up as we delve into the enchanting realm of Laravel collections, where magic is sprinkled in every line of code. Today's topic: the `fromJson()` method, a magical potion that turns JSON strings into jolly good collections!

Now, you might be wondering how this bewitching brew works its charms. Worry not, for I shall unravel its secrets! The static `fromJson` method, much like a pirate's trusty compass, points your way to a brand-new collection instance by decoding that JSON string using the mystical `json_decode` PHP function.

So, let's set sail and embark on our adventure together:

```php
use Illuminate\Support\Collection; // Don your finest pirate hat for Laravel support!

$json = json_encode([ // Encode thy JSON into a mysterious parchment
    'name' => 'Captain Taylor Otwell',
    'role' => 'First Mate Developer',
    'status' => 'Shipshape and Bristol fashion!'
]);

$collection = Collection::fromJson($json); // Decode thy JSON into a hearty treasure chest of data!
```

And voila! You now have a gleaming collection filled with the loot you so rightly deserve. Arrrr, it's as easy as pie and twice as fun! So hoist the sails and set course for the wondrous world of Laravel collections! Fair winds to ye! 😺

 Alright, let's dive into the world of Laravel collections, shall we? First stop: `get()`, your personal librarian for keys and values!

Imagine you're at a fancy cocktail party (because who doesn't love a good metaphor?) with a vast collection of guests. Our dear friend, `get()`, is like the hostess directing you to the right person when you ask for them by name.

```php
$collection = collect(['name' => 'Taylor', 'framework' => 'Laravel']);

$person = $collection->get('name'); // Taylor, here I am!
// If there's no one named 'Taylor', you'll end up with an empty dance floor - aka null.
```

But what if 'Taylor' decides to ditch the party and leave no forwarding address? Fear not! You can specify a backup buddy (or default value) just in case:

```php
$collection = collect(['name' => 'Taylor', 'framework' => 'Laravel']);

$age = $collection->get('age', 34); // In Taylor's absence, we'll assume they're 34.
// If there was an 'age' listed, our algorithm would have known better.
```

Now, here's where it gets even more interesting! What if you don't know anyone at the party and need to invent a guest? `get()` has a backup plan for that too:

```php
$collection->get('email', function () {
    return 'taylor@example.com';
});
// In case there's no email, this function will create one for you!
```

So go on, call the shots with `get()`, and never miss a guest again at your Laravel cocktail parties!

 Alrighty, let's dive into the `groupBy()` method – Laravel's secret weapon for herding cats (or collection items, as we like to say). This nifty little function groups your collection's elements by a specific key you provide:

```php
$collection = new Collection([
    ['account_id' => 'account-x10', 'product' => 'Chair'],
    ['account_id' => 'account-x10', 'product' => 'Bookcase'],
    ['account_id' => 'account-x11', 'product' => 'Desk'],
]);

$grouped = $collection->groupBy('account_id');

echo $grouped->all(); // Spits out a dictionary where account-x10 and account-x11 are the bosses, each with their own gang of furniture items.
```

Want to get fancy? Instead of a plain ol' string key, you can pass a callback! The callback will return the value that will be used as the grouping key:

```php
$grouped = $collection->groupBy(function (array $item) {
    return substr($item['account_id'], -3); // This means only the last three letters of the account_id are being considered for grouping.
});

echo $grouped->all(); // Now your dictionary will have 'x10' and 'x11' as keys, each with their respective gangs.
```

But wait, there's more! You can also add multiple grouping criteria by passing an array:

```php
$data = new Collection([
    10 => ['user' => 1, 'skill' => 1, 'roles' => ['Role_1', 'Role_3']],
    20 => ['user' => 2, 'skill' => 1, 'roles' => ['Role_1', 'Role_2']],
    30 => ['user' => 3, 'skill' => 2, 'roles' => ['Role_1']],
    40 => ['user' => 4, 'skill' => 2, 'roles' => ['Role_2']],
]);

$result = $data->groupBy(['skill', function (array $item) {
    return $item['roles']; // This means the data will be grouped by skill and roles.
}], preserveKeys: true);
```

And there you have it! Your collection is now neatly arranged in a multi-dimensional dictionary, with each level reflecting the grouping criteria you provided. Now go forth and organize your collections like never before! (But remember, organization can only take you so far – eventually you'll need to clean the garage.) 🧹🎉

 Ahoy there, code voyagers! Brace yourself for a fun dive into the enchanting world of Laravel collections, where even magic beans could become data-wrangling wizards! 🌱🔮

Let's talk about the `has()` method—the collection's secret weapon in the game of "Guess the Key". This powerful charm determines if a given key is hiding amongst your collection's treasures:

```php
$collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);

// Is there a 'product' in our collection? Cast the spell!
$collection->has('product'); // Ahah! It's true!

// Now, let's check if both 'product' and 'amount' are present. The answer lies within the collection:
$collection->has(['product', 'amount']); // Ta-da! Yes, it's in there!

But watch out! If you ask for 'amount' and 'price', the collection might chuckle and say "Nope, not here!"
$collection->has(['amount', 'price']); // Alas, false. Price tags are missing!
```

Now that you've learned to use the `has()` method, your Laravel collections will never be a mystery again—unless, of course, you decide to hide keys for fun. In that case, I can't promise anything! 😉

 Ah, the `hasAny` method! It's like a digital peek-a-boo for your collections. Ever found yourself in a situation where you're unsure if that pesky 'product' or sneaky 'price' is hiding amongst your Laravel goodies? Fear not, my dear friend!

Here's how to play:

```php
$collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);

// You're playing a game of hide and seek with your collection.
// Are 'product' or 'price' taking a little vacation? Find out!

$collection->hasAny(['product', 'price']);

// "Oh look, there they are!" - The Collection, probably excited to be found.
```

But hold your horses, partner! If you're looking for 'name' or 'price' (the odd couple), don't expect a warm welcome:

```php
$collection->hasAny(['name', 'price']);

// "Sorry, neither of them are here." - The Collection, politely turning you down.
```

Remember, this method only checks for the existence of keys within your collection, not values. So don't expect it to help you find that elusive 'free desk' you've been searching for! Happy hunting! 🕵️‍♂️🏆

 Ah, the `hasMany` method! A dance routine for your collections, if you will. This method is a charm to behold when it comes to checking if your collection is as lively as a disco ball in a nightclub on a Saturday night. But unlike the disco ball that's either spinning or not, our little friend `hasMany` can handle a bit more complexity.

```php
collect([])->hasMany(); // Feels like an empty dance floor, no one's dancing yet.

// false, because who'd want to party alone?

collect(['1'])->hasMany(); // Still empty, just like my bank account after a weekend of partying.

// false, because again, who's up for a solo performance?

collect([1, 2, 3])->hasMany(); // It's getting livelier! Three different tracks spinning now.

// true, because we have a trio on the dance floor.

collect([
    ['age' => 2],
    ['age' => 3],
])->hasMany(fn ($item) => $item['age'] === 2); // Now we're being picky. Only those of age 2 are our focus.

// false, because while there is a 2-year old in the crowd, it seems everyone else has aged past that.
```

In essence, `hasMany` helps you find out if your collection has multiple items or if it's as quiet as a library at midnight (and we all know how boring that is).

 Ahoy there, shipmates! If you're sailing the seas of Laravel collections and find yourself in need of a one-eyed pirate (a collection with exactly one item), then look no further than the swashbuckling `hasSole` method!

This isn't your grandma's old-fashioned "Does this collection have only one child?" question. Instead, it's a sleek and modern query that also accepts optional criteria for matching items:

```php
// Creating a collection with no items, a one-item collection, and a multi-item collection
$collectionEmpty = collect([]);
$collectionOne = collect(['1']);
$collectionMany = collect([1, 2, 3]);

// Using hasSole to verify the presence of our one-eyed pirates
$oneEyedPirateEmpty = $collectionEmpty->hasSole(); // false
$oneEyedPirateOne = $collectionOne->hasSole(); // true
$oneEyedPirateMany = $collectionMany->hasSole(fn (int $item) => $item === 2); // true
```

In other words, if you're looking for a single item that's as sharp as a cutlass or as rare as Davy Jones' locker treasure, just give `hasSole` a try! Arrr matey!

 Ahoy there! Sailors and coders alike, set your compasses to Laravel's `implode` method - the glue that binds collections together (without getting too sticky, of course!). This swashbuckling little function joins the items in a collection like a jolly roger uniting pirates. But beware ye mateys, it's choosy about its arguments depending on the nature of its collection cargo.

If yer collection carries arrays or objects, be sure to specify the key of the attributes ye wish to join and the "glue" string ye prefer in between them:

```php
$collection = collect([
    ['key' => 'account_id', 'value' => 1, 'product' => 'Desk'],
    ['key' => 'account_id', 'value' => 2, 'product' => 'Chair'],
]);

// Arrgg, let's call the `implode` with 'product' and a comma:
$collection->implode('product', ', ');

// Treasure map says: 'Desk, Chair'
```

But if yer collection is filled with simple strings or numeric values, ye need only specify the "glue" as the lone argument to the method:

```php
collect([1, 2, 3, 4, 5])->implode('-');

// Compass reads: '1-2-3-4-5'
```

Ye might even pass a closure to the `implode` method if ye fancy a little formatting on the items being joined:

```php
$collection->implode(function (array $item, int $key) {
    return strtoupper($item['product']);
}, ', ');

// Ahoy! New map says: 'DESK, CHAIR'
```

Now that ye know `implode`, ye can combine collections like a sailor blends rum and grog. Hoist the main sail and set course for smoother coding waters!

 🎯 **Meet the 'intersect' Method, Laravel's Swiss Army Knife for Furniture!**

Don't let your collection get cluttered with items that don't belong! The 'intersect' method is like a magical vacuum cleaner, cleaning up any furniture pieces from your original collection that are not present in the given array or collection. But unlike a vacuum, it keeps the keys of your precious pieces intact!

```php
$furniture = collect(['Desk', 'Sofa', 'Chair']); // Imagine: A comfy living room with eclectic furniture

$cleaning = $furniture->intersect(['Desk', 'Chair', 'Bookcase']); // Now, imagine only the Desk and Chair are left standing

$cleaning->all(); // ["Desk", "Chair"] - And here they are, ready for their close-up!
```

> [!ATTENTION]
> Be aware that this method's behavior can get a bit quirky when it encounters Eloquent Collections (you know, like when your dog starts playing with the vacuum cleaner)! For more details, check out our docs on [Eloquent Collections](/docs/{{version}}/eloquent-collections#method-intersect).

 Ah, the `intersectUsing()` method - the collection's secret weapon against impostors! Think of it as a bouncer at a prestigious party, checking each item on the guest list twice to ensure only the real deals make it in.

So, let's say you've got a fancy shindig filled with 'Desk', 'Sofa', and 'Chair', but you're not sure if they've all RSVPed. Enter `intersectUsing()`! With just a few lines of code, it'll filter out any furniture that didn't actually respond to your invitation:

```php
$furniture = collect(['Desk', 'Sofa', 'Chair']); // Invite list

$rsvpList = ['desk', 'chair', 'bookcase']; // Actual RSVPs

// Our bouncer checks if they've got the right name, no matter how they spell it
$bouncer = function (string $a, string $b) {
    return strcasecmp($a, $b);
};

// Now let's see who actually showed up!
$showedUp = $furniture->intersectUsing($rsvpList, $bouncer);

echo $showedUp->all(); // [0 => 'Desk', 2 => 'Chair']
```

And there you have it! With `intersectUsing()`, you can host a party even the pickiest guests would love to attend. Happy filtering, dear coders! 🎉🍾🤲

 Ahoy there, Laravel swashbucklers! Prepare to embark on a thrilling quest for the elusive shared key-value pairs in your collections. Presenting the mighty `intersectAssoc()` method, the knight in shining armor of your collection arsenal!

When you're dealing with two or more diverse collections, it can be like trying to find a needle in a haystack... but with more haystacks. Fear not, intrepid data wranglers! `intersectAssoc()` is the magical spell that will help you slay the chaos and unite the keys/values that rule them all.

Here's an example of our brave hero in action:

```php
$collection = collect([
    'pirate hat' => 'red',
    'eyepatch' => 'black velvet',
    'parrot' => 'feathered friend'
]);

// A rogue collection with a cunning twist
$rogueCollection = collect([
    'pirate hat' => 'polka-dotted',
    'eyepatch' => 'black leather',
    'parrot' => 'feathers flying high'
]);

// Let the battle commence!
$commonItems = $collection->intersectAssoc($rogueCollection);

// And the victor is...
$commonItems->all();

// ['eyepatch' => 'black velvet']
```

In this epic tale, our hero (the `intersectAssoc()` method) bravely fought against a rogue collection and valiantly returned the lone key-value pair they shared: black velvet eyepatches. So grab your cutlasses, mateys, and set sail on the high seas of code mastery with Laravel's `intersectAssoc()`!

 Ahoy there, Laravel sailors! Dive into the thrilling world of array intersections with our swashbuckling `intersectAssocUsing()` method. This pirate's treasure trove of a function compares your beloved collection to another, arranging a grand match only for those key-value pairs that can be found in both booties, all thanks to a custom comparison callback.

```php
Let us imagine you have a motley crew of items, $collection:
$collection = collect([
    'color' => 'red',
    'Size' => 'M',
    'material' => 'cotton',
]);

Now, let's say ye stumble upon another set of loot:
[$treasure = [
    'color' => 'blue',
    'size' => 'M',
    'material' => 'polyester',
]];

To find out what yer pirate posse and the newcomers have in common, ye'll need to use our swashbuckling `intersectAssocUsing()` method:
$intersect = $collection->intersectAssocUsing($treasure, function (string $a, string $b) {
    return strcasecmp($a, $b);
});

And voila! The common ground is revealed:
$intersect->all();
// ['Size' => 'M']
```

Ahoy! You've just discovered the art of intersection, ye olde pirate style! Keep those collections in tip-top shape with our handy `intersectAssocUsing()` method. Happy sailing!

 Ah, the `intersectByKeys` method! It's like a magical bouncer for your collection, ensuring only the coolest keys get to hang out. This method kicks out any keys (and their pals, the values) that don't have an invitation from the given array or collection.

Here's a little party scenario: Imagine you're hosting a swanky soiree and you only want guests with 'serial', 'type', and 'year' on your guest list. But suddenly, some uninvited guests show up with 'reference' and 'tab'. No worries! Just call the `intersectByKeys` method and it'll be like those crashers never even showed up!

```php
$collection = collect([
    'serial' => 'UX301', 'type' => 'screen', 'year' => 2009,
]);

// The gatecrashers arrive
$gateCrashers = collect([
    'reference' => 'UX404', 'type' => 'tab', 'year' => 2011,
]);

// Time to kick out the gatecrashers
$allowedGuests = $collection->intersectByKeys($gateCrashers);

// And here are your remaining guests:
$allowedGuests->all();

// ['serial' => 'UX301', 'type' => 'screen', 'year' => 2009]
```

And just like that, you have a collection full of only the coolest keys (and their values)! Party on!

 Ahoy there, Laravel sailors! Sail the seas of collections with me as we delve into the shimmering depths of `isEmpty()`.

This enchanting method isn't just another pirate's treasure; it's your key to unlocking a bounty of knowledge about whether your collection is brimming with loot or as empty as a parrot's pocket!

Here's how you use it:

```php
$pirateChest = collect([]); // A chest filled with naught but dreams and aspirations

if ($pirateChest->isEmpty()) {
    echo "Arr matey, your treasure chest is emptier than a jester's sock drawer!";
} else {
    echo "Yee-haw! It looks like we've struck gold!";
}
```

Of course, it's not all fun and games. This method returns `true` when your collection is as barren as a moonscape, and `false` when it's positively bursting at the seams with valuable artifacts (like Gold Doubloons or Grog Bottles).

Now, let's hoist the Jolly Roger and set sail for further adventures in Laravel land! ☠️🌴🐙

 Ahoy there, code cowboy! Buckle up for a jolly ride through the wondrous world of Laravel collections. Today's stop: The `isNotEmpty()` station – where your collection's emptiness is scrutinized with a discerning eye and an ironic grin.

So, suppose you have a collection that looks like it's been hit by the loneliest planet in our solar system. In that case, this method will come to your rescue! It returns true if your collection isn't empty – just what the doctor ordered after a night of too much fun at the local saloon (er... coding marathon).

Here's an example to tickle your funny bone:

```php
$deserted_collection = collect([]); // An empty collection, sad but true.

// Desperately trying to find someone, anyone in there.
$deserted_collection->isNotEmpty();

// Still no one to chat with.
```

In the spirit of transparency and camaraderie, we'll remind you that this method returns false when your collection is as empty as a pirate's parrot cage after a raid by rival buccaneers. But hey, that's just life in the wild west of programming, isn't it?

Now go forth and populate those collections with some lively data, partner! And remember: a collection that can't be emptied is called "full" – not "not empty." So keep your cowboy hat tipsy with this helpful tidbit, and happy coding!

 Ahoy there, Laravel coders! Buckle up for a jovial journey through the wondrous world of `join()`. This delightful little method is like a mixologist of data, shaking up your collection's values with a string of your choice. But it's not just any old bartender—it can even tell you how to handle that final element with finesse!

```php
collect(['a', 'b', 'c'])->join(', '); // Shakes up the values into a bubbly 'a, b, c' cocktail
collect(['a', 'b', 'c'])->join(', ', ', and '); // Adds some savory 'and' to our 'a, b, and c' concoction
collect(['a', 'b'])->join(', ', ' and '); // Stirs up a tantalizing 'a and b' drink
collect(['a'])->join(', ', ' and '); // Serves a charming 'a' solo with a dash of 'and'
collect([])->join(', ', ' and '); // Pours you an empty glass, because who wants a sad 'and' all by itself?
```

Remember, mixology takes practice—so don't be afraid to experiment with different ingredients (er, arguments)! Happy data-shaking! 🍹⚛️

 Ah, the `keyBy()` method! This little Laravel gem is like a superhero of organization, transforming your collection into an ordered dictionary.

Imagine you're hosting a fancy soiree with guests named 'Desk' and 'Chair', but they all arrived wearing identical hats. With `keyBy()`, you can quickly sort them out by swapping their hats for name tags! (The hats are just `product_id`s in our metaphor, okay?)

Here's an example:

```php
$partyGuests = collect([
    ['hat-number' => '123', 'name' => 'Desk'],
    ['hat-number' => '456', 'name' => 'Chair'],
]);

// Call `keyBy()`, and it's like saying: "Hey, let's give each guest a name tag that says their hat number!"
$taggedGuests = $partyGuests->keyBy('hat-number');

echo $taggedGuests->all(); // Output: [ '123' => ['hat-number' => '123', 'name' => 'Desk'], '456' => ['hat-number' => '456', 'name' => 'Chair'] ]
```

But what if everyone shows up with the same hat number? Well, don't worry; `keyBy()` only keeps the last one who arrived wearing that hat. It's a bit like musical chairs—when the music stops and you're left standing without a chair (or in this case, an available key), you're out!

If you want to customize the way guests are tagged, pass a callback function as a parameter:

```php
// Here, all guests will receive name tags with their hat numbers in uppercase letters
$taggedGuestsUpperCase = $partyGuests->keyBy(function (array $guest, int $index) {
    return strtoupper($guest['hat-number']);
});

echo $taggedGuestsUpperCase->all(); // Output: [ '123' => ['hat-number' => '123', 'name' => 'Desk'], '456' => ['hat-number' => '456', 'name' => 'Chair'] ]
```

So there you have it! With `keyBy()`, your Laravel collections are always a well-organized party waiting to happen. Enjoy the festivities!

 Ahoy there, code wranglers! Dive into the enchanting world of Laravel collections and let's talk about our magic trick for today: the `keys()` method!

Ever found yourself in a pickle, trying to get your hands on all those key-tacular values hidden away in your collection? Well, worry no more, because the `keys()` method is here to save the day! Just like your favorite pirate who always knows where the loot is buried, this method will help you uncover the keys of your collection.

Let's set sail on a quick adventure and see how it works:

```php
$collection = collect([ // Collecting our treasure map (array)
    'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
    'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair'],
]);

$keys = $collection->keys(); // X marks the spot (getting the keys)

$keys->all(); // Ready to share the loot! ('all' method shows the keys array)

// ['prod-100', 'prod-200'] Ahhh, ye talked pirate treasure!
```

Now that you have your keys in hand (or should I say array?), you can navigate your collection like a seasoned sea dog! Keep exploring the seas of Laravel collections and uncover more wondrous methods. Yarr-har-har! 🏴‍☠️

 Ahoy there, code pirates! Steer clear of the scurvy and dive into Laravel's treasure chest o' methods with the `last()` function, a swashbuckling tool that helps ye find the last item in yer booty (collection) that meets a certain condition.

Here's how it works:

```php
// Set sail for a collection of numbers: 1, 2, 3, and 4
$pirateTreasure = collect([1, 2, 3, 4]);

// Let's only look for booty under 3 (the captain's favorite number)
$lastUnderThree = $pirateTreasure->last(function (int $value, int $key) {
    return $value < 3; // Arrrrgh, ye be findin' the last one under three!
});

// And lo and behold, the last number under 3 is... drumroll please... 2!
echo "Arrrrr: $lastUnderThree";
```

But what if ye don't have a specific condition and just want the last item in yer collection? Well then, buckle up, because it's as easy as walking the plank!

```php
// The pirate crew added one more gold coin to the treasure chest
$pirateTreasure->push(5);

// Now let's find out what the last item in the collection is...
$lastItem = $pirateTreasure->last();

// And it's 5! The captain's grinning from ear to ear.
echo "Aye aye, that be $lastItem!";
```

But watch yer step, matey! If the collection is as empty as a parrot's nest, ye'll find yerself with null in yer hands:

```php
// Oops! The crew spent all their gold on grog.
$emptyPirateTreasure = collect([]);

// Try to find the last item in an empty collection...
$lastItemInEmptyCollection = $emptyPirateTreasure->last();

// And it's null, just like yer chances of finding any more gold.
echo "Arrrrr: $lastItemInEmptyCollection";
```

Ye be warned, ye scallywags! The `last()` method can be a bit tricky when used without arguments on an empty collection, so make sure yer booty's not bare before ye set sail. Now, off to yon plunder! 🏴‍☠️🔎

 Ahoy there, coders! Let's dive into the enchanting world of Laravel LazyCollections, shall we?

#### `lazy()` {.collection-method} 🛎️🧙‍♂️

The `lazy` method is like a magic wand that transforms your humdrum array of items into an enchanted LazyCollection:

```php
$wizardry = collect([1, 2, 3, 4])->lazy();

get_class($wizardry);

// You'll find it's more mystical than you might expect: Illuminate\Support\LazyCollection

$wizardry->all();

// Ta-da! Out pops your array like a rabbit from a top hat. [1, 2, 3, 4]
```

This sorcery comes in particularly handy when dealing with gigantic Collections, brimming with items:

```php
$hobbits = $gargantuanCollection
    ->lazy()
    ->where('species', 'Halfling')
    ->where('shoe_size', '<', '10')
    ->count();
```

By casting the collection into a LazyCollection, we've made it a lean, green, memory-saving machine! Though the original collection still clings to its precious data like Gollum to his precious, the subsequent filters will not. This means that when filtering the collection's results, you can almost hear the collective sigh of relief from your server's RAM. 💨

<a name="method-macro"></a>
Wishing you happier memory usage and more magical coding! ✨ 🔮

 Ah, the glorious `macro()` method! The secret sauce that turns your Laravel Collection into a swiss army knife of data manipulation. This bad boy lets you add new tricks to the old dog (Collection) on-the-fly, like a magician pulling rabbits out of a hat (or collections out of a Collection, if we're being technical).

Just remember, it's like inviting a new guest to your party. You wouldn't want an uninvited guest showing up at your bash now, would you? So, be sure to read up on [extending collections](#extending-collections) first before you start inviting all and sundry to the Collection dance floor!

<a name="method-make"></a>
(And yes, we did intentionally make it sound like a drink recipe. Programming should be fun, after all!)

 Alrighty then! Buckle up, buttercup! Here's a bit of Laravel fun that'll make your day (and possibly your collection). Let's dive into the `make()` method, shall we?

#### `make()` {.collection-method}

This static `make` method is like the star chef of the data world, whipping up brand new Collection instances out of thin air! Catch a glimpse of its culinary prowess in our [Creating Collections](#creating-collections) section.

```php
use Illuminate\Support\Collection; // Don't forget to wear your apron, we're cooking with data now!

$collection = Collection::make([1, 2, 3]); // Tada! A fresh collection of numbers!
```

Now that's what I call a party trick – turning an array into a delicious Laravel collection! It's like magic, but better because it works. Keep on cooking up those collections, buddy!

 Ahoy there, collection wranglers! Let's dive into the swashbuckling world of `map()` – a method that'll make your collections walk the plank and dance the jig like never before!

If you've got a motley crew of numbers (or any other data types) and want to double their rations without lifting a finger, `map()` is your new best mate. Here's how it works:

```php
$collection = collect([1, 2, 3, 4, 5]);

// Imagine this as the pirate captain summoning each crew member for their orders: "Arrrr, ye scurvy dogs! Multiply your rations by two!"
$multiplied = $collection->map(function (int $item, int $key) {
    return $item * 2;
});

// And voila! The new collection of multiplied rations:
$multiplied->all();

// [2, 4, 6, 8, 10]
```

> [!PIRATE-WARNING]
> Keep in mind, like most other collection methods, `map()` doesn't actually alter the original collection. If you're after a mutiny of sorts and want to transform the original booty, ye should hoist the Jolly Roger of [transform](#method-transform) instead! 🏴‍☠️

Happy pirating! 🎉🐳🌺

 Ahoy there, code explorers! Let's dive into the seas of Laravel collections and tackle the mighty `mapInto()` method! This isn't just a regular method, it's a pirate's treasure chest of transformation power.

Imagine you've stumbled upon a pile of international currency coins (your collection) and you want to turn them into shiny, new `Currency` objects. That's exactly what `mapInto()` does! It sails through your collection, passing each item as cargo to the constructor of a specified class (in this case, our trusty `Currency`).

```php
// Our humble Currency class
class Currency {
    public $code; // Arr! Keep those codes safe and sound!

    function __construct(string $code) {
        // Aye aye captain, let's initialize the Currency with the code!
    }
}

// Gather our treasure (collection)
$pileOfCoins = collect(['USD', 'EUR', 'GBP']);

// Transform the coins into Currencies using mapInto()
$shipmentOfCurrencies = $pileOfCoins->mapInto(Currency::class);

// Ahoy! Let's check our new booty
echo $shipmentOfCurrencies->all(); // [Currency('USD'), Currency('EUR'), Currency('GBP')]
```

Now, you've transformed your pile of international currency into a shipment of sleek `Currency` objects! You're now one step closer to becoming the Jack Sparrow (or Jane) of Laravel collections. Happy sailing!

 #### `mapSpread()` {.collection-method, .dance-party}

Get ready to boogie down with the `mapSpread` method! This dancefloor dweller struts through your collection's items, plucking out those hidden deep-discotek gems – nested item values to be precise – and flings them into the spotlight of a given closure. The closure, being the life of the party, can twist, shout, and modify the item as it pleases before sending it back onto the dancefloor, forming a brand-new collection of groovy, modified numbers:

```php
$collection = collect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

Feeling the rhythm, let's split up the collection into groups of two with `chunk(2)`. Then we ask our dancing partners, the `mapSpread` method and an anonymous function, to tango together.

The function whispers sweet summatory nothings in their ears: "Add me to you!" As a result, they return a sequence of sizzling hot numbers that make you want to get up and dance!

```
$sequence = $chunks->mapSpread(function (int $even, int $odd) {
    return $even + $odd;
});

The sequence kicks it out with a final spin, leaving us with: [1, 5, 9, 13, 17]
```

Now that's what I call collection evolution on the dance floor!

 Alright, buckle up, coding cowboys and codettes! Today we're going to have a blast with Laravel's `mapToGroups()`, the party starter in your collection's life!

Imagine you've got a wild west saloon full of rowdy cowpokes, each one representing an item in your collection. You want to sort 'em out by their job roles (departments) before the dance-off. That's where `mapToGroups()` comes into play!

```php
$collection = collect([
    ['name' => 'John Doe', 'job' => 'Salesman'],
    ['name' => 'Jane Doe', 'job' => 'Saleswoman'],
    ['name' => 'Johnny Doe', 'job' => 'Marketing Mogul']
]);
```

Now, you gotta give `mapToGroups()` your trusty ol' cowboy hat (a closure) to round up these cowpokes and sort 'em by their jobs. Your closure should be able to wrangle an item and its key into a neat little package—an associative array containing just one key-value pair:

```php
$collection->mapToGroups(function ($cowboy, $index) {
    return [$cowboy['job'] => $cowboy['name']];
});
```

Once you've done that, you call `all()` to see your sorted cowpokes in action:

```php
// ['Sales' => ['John Doe', 'Jane Doe'], 'Marketing' => ['Johnny Doe']]
```

But wait! What if you want to see just the cowboys (er, names) from the Sales department? Well, pardner, all you gotta do is call `get()` with 'Sales' as the argument:

```php
// ['John Doe', 'Jane Doe']
```

And there you have it! With `mapToGroups()`, sorting your cowpokes has never been this fun! Happy wrangling, partner! 🤠

 Ah, the `mapWithKeys()` method! Picture this, you're at a wild office party where everyone is wearing nametags but the tags are tucked into their pockets. Now, you want to create a cool seating chart where each person sits next to their email address for some hilarious email-based ice-breakers. That's exactly what `mapWithKeys()` does!

Instead of digging through pockets, you've got a collection (let's call it the party-goer collection) with all your friends' details: names, departments, and emails. You need to transform this into a new array (seating chart) where each email address is paired with the corresponding name:

```php
$partyGoers = collect([
    [
        'name' => 'John Doe',
        'dept' => 'Sales',
        'email' => 'john@example.com',
    ],
    [
        'name' => 'Jane Smith',
        'dept' => 'Marketing',
        'email' => 'jane@example.com',
    ]
]);
```

Now, instead of asking each friend to read out their email and writing it down next to them, you let `mapWithKeys()` do the work for you:

```php
$seatingChart = $partyGoers->mapWithKeys(function (array $friend) {
    return [$friend['email'] => $friend['name']]; // This is like telling the party-goer's email to dance with their name!
});

// Now you have a cool seating chart (keyed array):
$seatingChart->all();

/*
    [
        'john@example.com' => 'John Doe',
        'jane@example.com' => 'Jane Smith',
    ]
*/
```

And voila! You've got your seating chart ready for those unforgettable email-based ice breakers at the party! Just remember, `mapWithKeys()` only accepts callbacks that return an associative array containing a single key-value pair. If you try to feed it a multidimensional array (like when someone brings a plus one), it will throw an exception and ruin the fun!

 Ahoy there, code wranglers! Buckle up for a rollercoaster ride through the delightful world of Laravel collections and their enchanting `max()` method!

First off, let me introduce you to our magical friend—the `max()` spell. This bewitching incantation is your go-to when you need to find the mightiest value from a humble collection. No more knight errantry in search of the elusive "greatest one," for this sorcery has got your back!

```php
$collection = collect([
    ['foo' => 10],
    ['foo' => 20]
]);

// Now, let's summon the maximum 'foo':
$maxFoo = $collection->max('foo');

// And what do you know, it's 20! Our noble hero indeed!
```

But wait, there's more! If you find yourself in a pickle without any keys, don't fret—our `max()` enchanter will still work its magic:

```php
$collection = collect([1, 2, 3, 4, 5]);

// A brave knight has entered the arena! Let's find out who's the champion:
$championNumber = $collection->max();

// And hooray! The crown goes to 5—the undisputed king of numbers in this battle!
```

So go forth, and conquer the kingdom of data with Laravel collections' `max()` method. It's like having a personal wizard in your pocket, always ready to cast spells for you!

 Ahoy there! Buckle up for a rollercoaster ride through the world of Laravel collections, and let's dive into the dashingly charming `median()` method! This suave gentleman is here to help you find the middle child (or number) in your rowdy bunch without any fuss or muss.

```php
$medianValue = Collect([
    ['foo' => 10],
    ['foo' => 10],
    ['foo' => 20],
    ['foo' => 40]
])->median('foo');

// Cue the drumroll! 🥁 Ta-da! We have ourselves a 15! 🎉

$medianValue = Collect([1, 1, 2, 4])->median();

// And now for the grand finale... 🎩 Astonishingly, it's 1.5! 🤯
```

You see, `median()` is not only a clever method but also a trusty sidekick when you're dealing with numbers that are a bit unruly or just too cool to play by the rules. It'll help you find that magical number that makes half your data go on one side and the other half on the other, giving you just the right balance! 🤖🔬

Now go forth and conquer those collections with style and panache! Don't forget to have a laugh or two along the way—after all, programming should be as fun as it is functional! 😎🥳

 Alright, buckle up, Laravel enthusiasts! Let's dive into the merry world of `merge()` - the harmonious heartbeat of your collections. This little method takes your array or collection, tosses it in a big ol' blender with your original one, and voila! A beautiful fusion of items, ready to tickle your data fancy.

Here's how it works: Suppose you have a collection filled with happy little numbers, like a product ID (1) and its price (100). Now imagine a door-knocking salesperson showing up with an offer to update the price and introduce a new 'discount' flag. Well, `merge()` is your personal bouncer – it invites the salesperson in but kicks the old price out, replacing it with the fresh new one (200), and adds the discount flag (false) to the collection.

```php
$collection = collect(['product_id' => 1, 'price' => 100]);
$salesperson = ['price' => 200, 'discount' => false];

$merged = $collection->merge($salesperson);

// ['product_id' => 1, 'price' => 200, 'discount' => false]
```

Now, if the salesperson shows up with a list of furniture pieces instead (numeric keys), our friendly `merge()` bouncer will play nice and add them to the end of the line:

```php
$collection = collect(['Desk', 'Chair']);
$furniture_list = ['Bookcase', 'Door'];

$merged = $collection->merge($furniture_list);

// ['Desk', 'Chair', 'Bookcase', 'Door']
```

And there you have it! A harmonious symphony of collections, where old and new items dance together in perfect harmony. Just remember, `merge()` is not just a method – it's the glue that keeps your data flowing smoothly in Laravel land! 🎶💫✨

 Ahoy there, Laravel sailors! Let's hoist the sails of knowledge and set course for the `mergeRecursive()` method - a swashbuckling journey into the heart of collection merging!

In plain English (or Pirate-speak), this seaworthy method takes your array or collection, docks it alongside the original one, and with a roguish grin, proceeds to merge 'em together in a recursive manner.

```php
$collection = collect(['shanty_id' => 1, 'price' => 10000 coins]);

Anchors away! Let's set sail on the $merged with some new booty:

$merged = $collection->mergeRecursive([
    'shanty_id' => 2,
    'price' => 5000 gold pieces,
    'pirate_flag' => "Jolly Roger"
]);

Walk the plank and see what treasures await ye:

$merged->all();

['shanty_id' => [1, 2], 'price' => [10000 coins, 5000 gold pieces], 'pirate_flag' => "Jolly Roger"]
```

Arrr matey, beware of keelhauling unwanted overlaps! If a key in the new booty matches one in the old treasure chest, these scalawags will team up and form an array together, with merging happening as deep as ye can dig. So if you ever find yourself with duplicate keys, ye might end up with something like this:

```php
['shanty' => ['first edition', 'second hand']]
```

Yarrrr, off to further adventures! Keep those masts steady, and remember: a ship is always safe at shore... but that's not what sailing's all about, now, is it?

 Ahoy there, programming pirates! Dive into the treasure trove of Laravel goodness with the enchanting `min()` method. This here swashbuckler won't just help you find the loot, but the LOWEST loot at that!

So, you've stumbled upon a bounty of data and need to find the smallest piece? Fear not, matey! With `min()`, you can unearth the pirate's buried treasure in no time:

```php
$min_plunder = collect([
    ['treasure' => 1000],
    ['treasure' => 500]
])->min('treasure');

// Voila! 500 gold pieces, Captain Hook would be jealous.

$min_plunder = collect([12, 7, 3, 45, 99])->min();

// Drumroll please... it's 3 gold coins, the smallest of 'em all!
```

Remember, this method can work with or without specifying the key, so it's as versatile as a pirate with multiple parrots (or is that peg legs?). Happy hunting, buccaneers!

 Ahoy there, shipmates! Steer clear of the statistics shoals and set sail for Laravel's enchanted land of collection methods! Today, we're diving into the swashbuckling `mode()` function!

Imagine ye've stumbled upon a treasure chest filled with numbers, each marked with a different key. The pirate captain wants to know which number is the most popular among the keys - enter our hero, `mode()`!

```php
$treasure = collect([ // A bounty of loot awaits ye here!
    ['key1' => 10],
    ['key1' => 10],
    ['key1' => 20],
    ['key1' => 40]
]);
$most_popular = $treasure->mode('key1'); // Reveals the most popular number among 'key1's!
// [10]

$coinage = collect([1, 1, 2, 4]);
$gold_standard = $coinage->mode(); // What is the most frequent coin in circulation?
// [1]

The sea-worn sailor might think that the doubloons are tied for the top spot, but `mode()` won't be fooled by such scallywag behavior!
$doubloons = collect([1, 1, 2, 2]); // Tied at sea, but not on land!
$most_common = $doubloons->mode(); // [1, 2] - A standoff between the two most common coins!
```

Arrrr, there ye have it, mateys! With `mode()`, ye can find the most popular number among a set of keyed values and even uncover ties when necessary. Now that ye know how to use this valuable tool, let's hoist the sails and continue our journey through Laravel's magical collection methods!

 Ahoy there, Laravel pirates! Today we're talking 'bout a swashbuckling method that'll make your collections multiply faster than Jack Sparrow can say "arr matey"! The magical `multiply()` function, ye say? Well, buckle up, because it's time to set sail on an adventure of cloning collections!

Imagine you've caught a bountiful haul of users (or maybe it's just your inbox after a long weekend). You'd like to send each one three copies of that spam email you received about the Nigerian prince. Instead of tediously copying and pasting, just use our trusty `multiply()` method!

```php
$users = collect([ // Collect is Laravel's way of saying "group these here beasts together"
    ['name' => 'User #1', 'email' => 'user1@example.com'],
    ['name' => 'User #2', 'email' => 'user2@example.com'],
])->multiply(3); // Now, each user is given three copies!
```

And voila! You have an array of treasures that's been multiplied by three. It'll leave your enemies scratching their heads and wondering if you've conjured up some dark magic to multiply your collections!

So there ye have it, mateys. The `multiply()` method is the perfect tool for those times when you need to send an annoyingly large number of emails or duplicate that pirate crew without leaving anyone behind. Happy sailing! 🐊🌴🏴‍☠️

 Oh, the `nth()` method! It's like a party where only every n-th guest gets to dance – but in code! 🥳💃🕺

Let's say you've got a lively collection of letters: ['a', 'b', 'c', 'd', 'e', 'f']. Now, imagine hosting a disco where only every fourth guest (`n=4`) can strut their stuff on the dance floor. 🕺️💃️

```php
$collection = collect(['a', 'b', 'c', 'd', 'e', 'f']);
$collection->nth(4); // Boom! ['a', 'e'] are our dancers for the night 🎉
```

But what if you want to start the party later? No worries, just invite a specific guest as your starting point by passing it as the second argument:

```php
$collection->nth(4, 1); // 'b' arrives late, but he gets to dance! ['b', 'f'] are our new groovers 🎉🕺️💃️
```

So go ahead, let your collection party with `nth()` method! It's a fantastic way to ensure the right elements get their time in the spotlight. 🌟✨

 Ahoy there, coders! Sail with me as we navigate the vast seas of Laravel collections and discover the swashbuckling `only()` method! This be no ordinary treasure hunt, but a quest to find specific items in your collection by their keys. 🏴‍☠️

```php
$collection = collect([
    'arrgh' => 1, // Product ID, of course, arrghed as 'product_id' for pirate flair!
    'name' => 'Desk',
    'shillings' => 100,
    'buried_treasure' => false // No discounts for pirates, I'm afraid!
]);

$filtered = $collection->only(['arrgh', 'name']); // Only the arrgh-est items, matey!

$filtered->all(); // ['arrgh' => 1, 'name' => 'Desk'] - Arr, we found our booty!
```

But watch yer backs, ye scurvy dogs! For those who seek the inverse of `only()`, may I present to you the [except](#method-except) method. It's like finding a map to the opposite side of Treasure Island! 🗺️

> [!NOTE]
> The behavior of this method is altered when using Eloquent Collections. Be prepared to navigate through the shoals and reefs of database relations if ye be so bold as to do so! 🌊

So hoist the Jolly Roger, grab yer compass, and set sail for a fun-filled adventure with Laravel's `only()` method! Arr matey, we be learning while having a jolly good time!

 Ahoy there, Laravel sailors! Today we're diving into the delightful world of array padding with the `pad()` method - a veritable life-saver when you need to plump up your collections like a Thanksgiving turkey. This ain't your average dance move or comedy sketch, but rather, it's a function as funky as the chicken and just as useful.

So, what's all this about padding an array? Well, imagine you've got a scrumptious meal of 'A', 'B', and 'C', but your table only seats five. You can either eat in shifts (not fun) or use `pad()` to fill up those empty spots with the value of your choice – say, 0. Sounds like a party, right?

Now, when you're feeling left out on the dance floor and want to slide into that spot on the left, just specify a negative size. However, if the absolute value of your size is less than or equal to your current length, `pad()` will keep its distance, much like a shy wallflower at a high school dance.

Here's some code to tickle your fancy:

```php
$collection = collect(['A', 'B', 'C']);

// Time for dinner with extra seats!
$fillerFood = $collection->pad(5, 0); // ['A', 'B', 'C', 0, 0]

// Oops, we're the life of the party now, let's move left.
$backwardFill = $collection->pad(-5, 0); // [0, 0, 'A', 'B', 'C']
```

And there you have it! With `pad()`, you can fill out your arrays like a pro – or a plump turkey, depending on how you look at it. Happy padding, and may the force be with your collections!

 Oh, the `partition()` method! It's like a magician at a party, separating the cool kids (under three) from the wallflowers (equal or above three). 🧙‍♂️💃🕺

Just imagine, you've got a rowdy collection of numbers (1 through 6), and you want to divide them into two groups: those who can join the under-3 club and those who can't.

```php
$collection = collect([1, 2, 3, 4, 5, 6]); // Our partygoers

[$underThree, $cantHangWithUs] = $collection->partition(function (int $i) {
    return $i < 3; // The bouncer checking IDs at the door
});
```

Now, let's check out who made it into the under-three club:

```php
$underThree->all(); // [1, 2] - Our little ones having a blast!
```

And those poor souls left behind?

```php
$cantHangWithUs->all(); // [3, 4, 5, 6] - The grown-ups feeling a bit left out.
```

But hey, remember this method's behavior changes when interacting with those Eloquent collections! You wouldn't want to invite your database tables to the party without knowing their age, would you? 🤖🎉

 Ahoy there, Laravel pirates! Let's set sail for the treacherous waters of percentage calculations with the `percentage()` method! This swashbuckling function will help ye quickly determine the proportion of your collection's items that pass a specified test, without ye having to navigate through the murky waters of loops and conditional statements.

Let's take a gander at an example:

```php
$collection = collect([1, 1, 2, 2, 2, 3]);

$percentage = $collection->percentage(fn (int $value) => $value === 1);
// Hoist the Jolly Roger! The percentage of 1's in our collection is 33.33%!
```

By default, the percentage will be displayed with two decimal places to keep things tidy and proper. But if you fancy a bit more precision (or perhaps your captain is particular about such matters), ye can provide a second argument to the method:

```php
$percentage = $collection->percentage(fn (int $value) => $value === 1, precision: 3);
// Ahoy! With three decimal places, our percentage of 1's is now 33.333%!
```

Now, ye are well on your way to accurately measuring the proportions of your collections and impressing fellow sailors with your mathematical prowess! Arrrr, matey!

 Ahoy there, code wranglers! Sail with me as we delve into the `pipe()` method, a swashbuckler's delight for your Laravel collections! This dashing little function is like a magic portal that transports your collection right into the hands of a trusted pirate (or closure, if you prefer less nautical terminology).

```php
$collection = collect([1, 2, 3]);

// Now we're recruiting Ol' One-Eye, our trusty buccaneer who knows the secrets of summin'!
$piped = $collection->pipe(function (Collection $collection) {
    // He takes the collection and adds up all the booty (numbers).
    return $collection->sum();
});

// And lo and behold, we've found our hidden treasure - 6 gold doubloons!
```

So there you have it, mateys! The `pipe()` method is an essential piece of your Laravel treasure map, helping you traverse the seas (code) more efficiently than ever before. Happy coding, and may your collections always be laden with bountiful booty! 🏴‍☠️🌍💰

 Ahoy there, shipmates! Sail the Laravel seas with the swashbuckling `pipeInto()` method!

This nautical charm creates a spankin' new instance of your chosen class and feeds your collection into it, like a hearty meal for a pirate.

```php
class TreasureMapCollection {
    /**
     * Arrrrgh, create a new TreasureMapCollection instance!
     */
    public function __construct(
        public Collection $booty, // Yes, we're using 'booty' here...
    ) {}
}

$plunder = collect([1, 2, 3, 'Golden parrot']);

$map = $plunder->pipeInto(TreasureMapCollection::class);

$map->booty->all(); // [1, 2, 3, 'Golden parrot']
```

Now, you've got yourself a shiny new treasure map to guide your voyage through the Laravel lands!

 Ahoy there, collection wranglers! Sail with me as we navigate the enchanting waters of Laravel's `pipeThrough()` method - a swashbuckling companion for your collections! 🌴💰

Imagine you've gathered a band of merry numbers (1, 2, 3) in a seaworthy collection. Now, you want to embark on an adventure that involves adding 4 and 5 to the crew, then summing them up for the grand total! 🎺🤝💰

That's where `pipeThrough()` comes into play! It's a one-of-a-kind pirate parrot that carries your collection to a series of treasure chests (closures), executes them in sequence, and returns the final booty (result)! 🦜🏴‍☠️

Here be an example of our swashbuckling adventure:

```php
use Illuminate\Support\Collection;

$collection = collect([1, 2, 3]); // Assemble the crew!

// Define two closures for our treasure chests
$chests = [
    function (Collection $collection) {
        return $collection->merge([4, 5]); // "Ahoy matey! Take on 4 and 5!"
    },
    function (Collection $collection) {
        return $collection->sum(); // "Yo ho ho, let's see that total!"
    },
];

// Set sail with our collection and treasure chests
$result = $collection->pipeThrough($chests); // The pirate parrot takes flight!

// 15 is our final treasure!
```

Fair winds and following seas, ye swashbuckling Laravelers! May your collections always be filled with treasures and your adventures never cease! 🏴‍☠️🐓🎺🤝💰

 Alright, buckle up, Laravel enthusiasts! Let's dive into the delightful world of `pluck()`, a method that's not just a collection hero, but also a party trick you can pull off at your next coding soiree.

Imagine you're at a swanky cocktail party, and you find yourself in a game of "Name That Product" with some fellow geeks. Instead of rattling off names like a human-sized Siri, you casually whip out `pluck()`.

```php
$collection = collect([
    ['product_id' => 'prod-100', 'name' => 'Desk'],
    ['product_id' => 'prod-200', 'name' => 'Chair'],
]);

// Translation: "Hey party, here are the names of these products!"
$plucked = $collection->pluck('name');
echo $plucked->all(); // ["Desk", "Chair"]
```

But the fun doesn't stop there! You can even host a game of "Name That Product ID" by using `pluck()` to key your results:

```php
// Translation: "I'll give you the names, but we're playing with the IDs tonight!"
$plucked = $collection->pluck('name', 'product_id');
echo $plucked->all(); // ['prod-100' => 'Desk', 'prod-200' => 'Chair']
```

Want to show off your nested value ninja skills? `pluck()` supports "dot" notation for diving deep into your collections:

```php
$collection = collect([
    [
        'name' => 'Laracon',
        'speakers' => [
            'first_day' => ['Rosa', 'Judith'],
        ],
    ],
    // ...more conferences here!
]);

// Translation: "Alright, let's see who's speaking on the first day!"
$plucked = $collection->pluck('speakers.first_day');
echo $plucked->all(); // [['Rosa', 'Judith'], ...]
```

And if you find yourself in a situation where duplicate keys exist, don't worry—just like a good bartender, `pluck()` knows to serve the last match:

```php
$collection = collect([
    ['brand' => 'Tesla',  'color' => 'red'],
    // ...more cars here!
]);

// Translation: "Sorry Tesla fans, only one color per brand!"
$plucked = $collection->pluck('color', 'brand');
echo $plucked->all(); // ['Tesla' => 'black', 'Pagani' => 'orange']
```

So there you have it! With `pluck()`, your Laravel collections will never feel like a bunch of nameless, faceless entities again. Instead, they'll be the life of the party, ready to entertain and enlighten anyone who comes across them. Now go out there and show off your newfound skills! 🎉🎊

 Ahoy there, coders! Let's dive into the delightful world of Laravel collections and their magical methods. Today, we're focusing on a crowd favorite: `pop()`, the party popper of the collection universe!

`pop()` is like the bouncer at the end of the line, except instead of kicking you out, it removes and returns the last item in your collection. But here's the twist - if your collection is as empty as an empty room during a pandemic, `null` will be your companion (don't worry, `null` can be quite entertaining at times).

```php
$collection = collect([1, 2, 3, 4, 5]);

$lastInLine = $collection->pop(); // 5, our new best friend

$collection->all(); // [1, 2, 3, 4] - the party's still going, but one less soul!
```

But what if you want to clear out a larger section of the dance floor? You can pass an integer to `pop()` and it will remove and return multiple items from the end of your collection. It's like having your own personal bulldozer!

```php
$collection = collect([1, 2, 3, 4, 5]);

$lastThreeStanding = $collection->pop(3); // collect([5, 4, 3]) - the last three standing

$collection->all(); // [1, 2] - the party's down to a duo!
```

Now that we've danced around the topic, go ahead and `pop()` some fun into your Laravel collections!

 Ahoy there, coders! Let's embark on a delightful journey through the sunny shores of Laravel land and learn about the enchanting `prepend()` method!

Picture this: you've got yourself a swashbuckling collection of numbers – 1, 2, 3, 4, and 5. You're feeling adventurous and decide it needs an honorary member...0! But where do you add this number one? Why, at the beginning, of course! That's right; our trusty `prepend()` method comes to the rescue:

```php
$collection = collect([1, 2, 3, 4, 5]);
$collection->prepend(0); // Adding 0 to the beginning like we're opening a treasure chest!
$collection->all(); // And lo and behold, [0, 1, 2, 3, 4, 5]
```

But wait! What if you want more pirate-y names for your collection items? Well, matey, we've got you covered. You can specify a key for the prepended item too:

```php
$collection = collect(['one' => 1, 'two' => 2]);
$collection->prepend(0, 'zero'); // Adding 'zero' along with its numeric buddy, 0
$collection->all(); // Now you've got ['zero' => 0, 'one' => 1, 'two' => 2]
```

Now that we've added some flair to our collection, let's hoist the sails and set sail for more exciting Laravel adventures! Arrrr!

 Ah, the `pull()` method! It's like a magical bouncer at a swanky collection party, ejecting elements based on their key and saving the day (or the collection, in this case).

Here's how you can kick it off:

```php
$collection = collect(['product_id' => 'prod-100', 'name' => 'Desk']);

// Now we've got a wild party on our hands! But who invited that pesky 'name'? Let's kick them out.
$collection->pull('name');

// Sayonara, 'Desk'! You're not getting any more cocktails.
// 'Desk'

// Now let's see what the guest list looks like after the ruckus:
$collection->all();

// ['product_id' => 'prod-100']
// Looks like we've got a quieter (but still fabulous) party left.
```

So, if you ever find yourself with a collection overflowing with unnecessary elements, call upon the `pull()` method to maintain that perfect, well-balanced guest list. Party on! 🎉🥳

 Ahoy there, code pirates! Prepare to board the Laravel Collection Ship as we set sail through the choppy seas of data manipulation. Today, we're diving deep into the `push()` method – a veritable treasure chest of appending magic!

So, imagine you've been entrusted with Captain Jack Sparrow's inventory list, which currently consists of numbers 1 through 4. Now, ye might be wondering, "What if I wanted to add a 5 to the collection?" Fear not, for `push()` is here!

```php
$collection = collect([1, 2, 3, 4]); // Our humble inventory list

$collection->push(5); // Adding our new number, like Jack adding another gold doubloon to his stash

$collection->all(); // Show us the updated inventory

// [1, 2, 3, 4, 5] - Success! Our collection now has more booty than ever before!
```

But what if ye be greedy and want to add multiple items? Well, matey, the `push()` method can handle that too:

```php
$collection = collect([1, 2, 3, 4]); // Our original inventory list

$collection->push(5, 6, 7); // Adding more numbers like a squirrel stashing nuts for winter

$collection->all(); // Show us the updated inventory

// [1, 2, 3, 4, 5, 6, 7] - Aye, we've got enough loot to satisfy even the pickiest pirate!
```

So there ye have it, arr matey! The `push()` method makes managing your collections as simple as counting your gold pieces. Avast and set sail on this newfound knowledge!

 Ahoy there! Buckle up, as we delve into the captivating world of Laravel collections with our fearless hero - `put()`! Yes, you heard it right, not just a dance move but a method that's about to make your collection management dreams come true.

Imagine you have a collection filled with all sorts of peculiar items: `product_id`, `name`, and even a talking desk named `Deskie`. Now, let's say Deskie decides he wants a pay raise. That's where our hero, `put()`, steps in to help!

```php
$collection = collect(['product_id' => 1, 'name' => 'Desk']);

// *drumroll* Enter the stage - put()
$collection->put('price', 100);

And just like that, Deskie gets his well-deserved raise!

```

Now, let's see if our collection has any new additions:

```php
$collection->all();
// ['product_id' => 1, 'name' => 'Desk', 'price' => 100]

```

And just like that, we've managed to raise Deskie's price without breaking a sweat (or a single Laravel line of code). That's the power of `put()`, right there! Happy coding!

 Ahoy there, matey! Gather 'round and let's dive into the seafaring adventure of Laravel's `random()` collection method! This buccaneer's treasure chest of a tool is just what you need to plunder some booty from your collections without getting scurvy.

First off, if you fancy grabbing a single item at random from your pirate hoard, simply holler:

```php
$collection = collect([1, 2, 3, 4, 5]);

$collection->random();

// (retrieved randomly) - Say 'aye aye captain', it's probably a 4!
```

But if ye be hankering for more than one treasure to impress the tavern wenches, specify the number of loot pieces you desire:

```php
$random = $collection->random(3);

$random->all();

// (retrieved randomly) - Arr matey, a trio of numbers for your trouble!
```

Beware, however, if your collection be lighter than the number ye specified, prepare to walk the plank! The `random()` method will hurl an `InvalidArgumentException`.

Lastly, if you're feeling clever, you can even employ a closure, giving you greater control over yer treasure hunting. This allows ye to specify how many items ye wish to retrieve based on the size of yer collection:

```php
use Illuminate\Support\Collection;

$random = $collection->random(fn (Collection $items) => min(10, count($items)));

$random->all();

// (retrieved randomly) - A fine haul of numbers indeed!
```

Yar har har, matey! Happy treasure hunting with Laravel's `random()` method!

 Oh, the `range()` method! It's like having a little number factory at your disposal in Laravel land. Instead of manually cranking out sequential numbers with a rusty old abacus, you can now summon a collection filled with integers like some sort of mathematical wizard.

Here's the incantation:

```php
$collection = collect()->range(3, 6); // Summon forth a minion army of numbers!

$collection->all(); // Unleash the horde upon your codebase: [3, 4, 5, 6]
```

Just remember, if you're feeling really spellbound and want to cast this magic on more complex number patterns, you can adjust the starting and ending points to suit your needs. It's like having a custom number generator that works overtime for you!

 Ahoy there, code wranglers! Let's embark on a jovial journey through the enchanting land of Laravel's `reduce()` method—the mystical sorcerer that transforms your collections into a singular, glorious number, much like the One Ring in Middle Earth (but without the whole evil-overlord problem).

Imagine you've got yourself a lively bunch of numbers, eager to do the cha-cha slide—one, two, three. Well, `reduce()` is the dance instructor that gets them moving, starting with a grand zero (unless you want to start with something else—more on that later).

```php
$collection = collect([1, 2, 3]);
$total = $collection->reduce(function ($sum, $number) {
    return $sum + $number; // the cha-cha slide ensues!
});
// And the final score is... 6! Time for snacks!
```

Now, you might be wondering, "What if I want to skip the grand zero and start with a more interesting number?" Fear not, dear friend, `reduce()` can handle that too!

```php
$collection->reduce(function ($sum, $number) {
    return $sum + $number;
}, 4);
// And this time the final score is... 10! Let's play again!
```

But wait, there's more! This humble sorcerer also passes those array keys to your custom callback for added fun and silliness. Just remember, with great power comes great responsibility. Or in this case, with great keys comes great values!

```php
$collection = collect([
    'usd' => 1400,
    'gbp' => 1200,
    'eur' => 1000,
]);

$ratio = [
    'usd' => 1,
    'gbp' => 1.37,
    'eur' => 1.22,
];

$collection->reduce(function ($sum, $number, $key) use ($ratio) {
    return $sum + ($number * $ratio[$key]);
}, 0);
// And the final score is... 4264! That's a lot of monies!
```

So go forth and conquer your code with `reduce()`, your new dance instructor and math magician. Just remember, as long as you keep the numbers moving and the ratios balanced, you'll have a jolly good time! 🕺️🎉

 Ahoy there, code pirates! Sail the seas of collections with the `reduceSpread()` method, a swashbuckling companion to your Laravel journey! This isn't just any ordinary method; it's a supercharged version of the trusty `reduce` mate. But wait, there's more! While Mr. Reduce can only handle one initial value, our new friend `reduceSpread` welcomes multiple treasure chests of initial values to the party! 🏴‍☠️💰

Here's a little example to help you wrap your head around this lively function:

```php
list($goldCoinsLeft, $shipmentOfImages) = Image::where('status', 'unprocessed')
    ->get()
    ->reduceSpread(function (int $goldCoinsLeft, Collection $shipmentOfImages, Image $treasureMap) {
        if ($goldCoinsLeft >= $treasureMap->creditsRequired()) {
            $shipmentOfImages->push($treasureMap);

            $goldCoinsLeft -= $treasureMap->creditsRequired();
        }

        return [$goldCoinsLeft, $shipmentOfImages];
    }, $initialGoldCoins, collect([]));
```

In this buccaneer's tale, we're setting sail on a quest to find unprocessed images. As each image is discovered, it's added to the shipment and gold coins are subtracted accordingly. And remember, `reduceSpread` is all about flexibility – it lets you set multiple initial values (initialGoldCoins in this case) and an empty collection as a starting point for your grand adventure! 🌴🐘🏴‍☠️

 Alrighty, gather 'round folks! Let's talk about the `reject()` collection method - your digital bouncer at the dance floor of data!

Imagine you've got a party (collection) with some pretty interesting guests (items). But you want to keep things classy and kick out anyone (item) who's wearing too much bling (value > 2). That, my friends, is exactly what `reject()` does for you!

```php
$party = collect([1, 2, 3, 4]); // Our rowdy guest list

$classyParty = $party->reject(function ($guest) {
    return $guest->isTooExtra(); // Check if the guest is wearing too much bling
});

$classyParty->all(); // [1, 2] - Our new and improved list of guests
```

For those who enjoy a little reverse psychology (and perhaps a few more beers), we also have the [filter](#method-filter) method – the opposite of our friendly bouncer, welcoming only the extra bling wearers! Just remember, it's always good to keep your guests entertained! 🎉💃🕺

 Oh, the `replace()` method, Laravel's secret weapon in the game of musical chairs for data! It's like `merge()`, but with a twist - and we all know life's more interesting with a little twist, right?

Instead of just replacing string-keyed items like its shy, wallflower counterpart, it dives headfirst into the deep end, tackling numeric keys as well! It's the data jester that's always ready to swap positions.

Here's a little dance demonstration:

```php
$collection = collect(['Taylor', 'Abigail', 'James']); // Our humble data ballet troupe

$newAct = [1 => 'Victoria', 3 => 'Finn']; // Fresh blood on the dance floor!

$rehearsal = $collection->replace($newAct); // The director calls for changes: "Number 1, Victoria! Number 3, Finn!"

$rehearsal->all(); // And the curtain rises: ['Taylor', 'Victoria', 'James', 'Finn']
```

Now, isn't that a tad more entertaining than just reading about array manipulation? So go forth and replace to your heart's content! Remember, in Laravel, the dance floor is always open for data juggling.

 Ahoy there, Laravel pirates! Today we're going to swashbuckle through the shimmering seas of the `replaceRecursive()` method! Not to be confused with its simpler mate, `replace`, this one goes deep into the heart of your arrays and brings back treasure chests full of replaced goodies.

```php
Let's set sail with our starting collection, a motley crew of names:
$collection = collect([
    'Taylor',
    'Abigail',
    [ // Step aboard the HMS Array!
        'James',
        'Victoria',
        'Finn'
    ]
]);

Now, let's say our captain demands a mutiny and we need to replace some names:
$replaced = $collection->replaceRecursive([ // Our trusty replacement navigator
    'Charlie',
    2 => [1 => 'King'] // This arr mate 'ere is now the "First Mate" King!
]);

Finally, let's see what booty we've gained:
$replaced->all(); // ['Charlie', 'Abigail', ['James', 'King', 'Finn']]
```

Ah, the power of recursion combined with Laravel's collection methods! Arrr matey, it's a beautiful thing!

 Alright, let's embark on a whimsical voyage into the enchanting realm of Laravel collections! Today, we're going to delve deep into the magical `reverse()` method, an incantation that will rearrange your items like a mischievous leprechaun scattering gold coins.

Imagine you've amassed a veritable treasure trove of letters – 'a', 'b', 'c', 'd', and 'e'. But being the curious cat you are, you've grown tired of perusing this alphabetical list in its original order. Fear not! The `reverse()` method is here to shuffle your hoard like a deck of cards after a wild night at the local tavern:

```php
$collection = collect(['a', 'b', 'c', 'd', 'e']); // Hoard creation

$reversed = $collection->reverse(); // The incantation

$reversed->all(); // Behold, the shuffled treasure!

/*
    [
        4 => 'e',
        3 => 'd',
        2 => 'c',
        1 => 'b',
        0 => 'a',
    ]
*/
```

And there you have it! Your collection, now as reversed as a turtle's migration. Enjoy your newfound order, and remember: In the world of Laravel collections, change is always just a method call away! 🎩✨📜🐢

 Alrighty, let's dive into the thrilling world of Laravel collections! Today, we're going to talk about the `search()` method - your very own digital Sherlock Holmes, but instead of looking for clues, it searches for values in a collection. 🕵️‍♂️

So, imagine you've got a collection of numbers that would make even a mathematician do a double-take: `[2, 4, 6, 8]`. You want to find the number four, and our trusty friend `search()` is just the investigator for the job!

```php
$collection = collect([2, 4, 6, 8]);

$result = $collection->search(4); // Now we're cooking with gas!

// 1 (The key where our number resides, if you're into that kind of thing)
```

But hold on! What if you want to play it extra strict and only accept a perfect match? Well, all you gotta do is pass `true` as the second argument:

```php
$collection->search('4', strict: true); // Strictly speaking, it's not a match.

// false (No hard feelings, just Laravel being Laravel)
```

Last but not least, if you want to get fancy and use your own custom logic to find what you're looking for, you can create a closure! That's right, we're pulling out the big guns here.

```php
$collection->search(function (int $item, int $key) {
    return $item > 5; // Only interested in numbers greater than 5, eh? No problemo!
});

// 2 (The key of the first number that meets your criteria)
```

And there you have it! With `search()`, you can find needles in haystacks or just locate the perfect party number – all with the ease and elegance that only Laravel collections can provide. 🎉

 Ah, the `select()` method! It's like your very own personal paparazzi, but instead of stalking celebrities, it's here to stalk your collection. No, not in a creepy way, but more like a friendly neighborhood gossip, sharing only the most important details.

Imagine you're at a fancy party where everyone is dressed to impress, and you want to know who's who without asking a million questions. That's exactly what this method does! It picks out the 'name' and 'role' from your collection, just like an SQL SELECT statement on steroids.

Here's a little example:

```php
$celeb_list = collect([
    ['name' => 'Taylor Swift', 'profession' => 'Singer', 'status' => 'Single'],
    ['name' => 'Leonardo DiCaprio', 'profession' => 'Actor', 'status' => 'Single'],
]);

$celeb_list->select(['name', 'profession']);

/*
    [
        ['name' => 'Taylor Swift', 'profession' => 'Singer'],
        ['name' => 'Leonardo DiCaprio', 'profession' => 'Actor'],
    ],
*/
```

Now you know who's who at the party without making a fool of yourself by asking everyone what they do for a living. So, next time you have a collection and need to find out about specific keys, just give this method a shout-out! It won't disappoint. Unless you ask it to dance, then it might... but that's another story. 🕺🏼💃🏼

 Ahoy there, brave Laravel coder! Let's embark on a lively journey through the `shift()` method, a swashbuckling feature that'll make your collections dance like a rowdy pirate crew at the local tavern! 🏴‍☠️

First things first, if you want to grab the cap'n of your collection and toss 'im overboard (or remove and return the first item), just call `shift()` like so:

```php
$collection = collect([1, 2, 3, 4, 5]); // Our pirate crew

list($captain) = $collection->shift(); // The captain jumps ship!

echo $captain; // 1

var_dump($collection); // [2, 3, 4, 5] - The rest of the rowdy crew remains
```

Now, if you're feeling particularly adventurous and want to plunder a few more items at once, just pass an integer to `shift()` to give it your loot order:

```php
$collection = collect([1, 2, 3, 4, 5]); // Another pirate crew

list($captain, $quartermaster, $lookout) = $collection->shift(3); // Three swabby mates jump ship too!

echo "$captain, $quartermaster, and $lookout"; // 1, 2, and 3

var_dump($collection); // [4, 5] - Only the remaining crew members are left behind
```

Remember to have a swashbuckling good time with `shift()`, but remember, yarr, in a collection, it's always better to leave some crew to manage the ship! 🌺️

 Ahoy there! Buckle up, Laravel enthusiasts! It's time to dive into the fascinating world of collection shuffling! That's right, we're talking about the `shuffle()` method, your new best friend when you need to mix things up like a magician at a party (but without the top hats and rabbits).

So, what does this enchanting function do exactly? Well, it takes the items in your collection—be it numbers, strings, or even adorable kittens—and gives them a good ol' random jumble! No more predictable sequences; you'll have the unpredictability of a squirrel on speed dial.

Ready to shuffle away? Here's an example that will make your day (or at least your collection):

```php
$collection = collect([1, 2, 3, 4, 5]); // Our humble beginning

$shuffled = $collection->shuffle(); // Give 'er a good shake!

$shuffled->all(); // And voilà! A magical array of numbers awaits!
```

Now you've got yourself a brand new order of numbers, like [3, 2, 5, 1, 4]—or any other combination that'll leave you shaking your head in wonder (and perhaps a little confusion).

Just remember, this method modifies the original collection in-place and returns it. So don't go around creating multiple shuffled collections unless you're trying to impress your friends at a card trick party (or have too much time on your hands).

And there you have it! With `shuffle()`, you can add some unexpected twists to your Laravel applications—because who doesn't love a good surprise now and then? Happy shuffling, my friends!

 Alrighty, let's dive into the world of Laravel collections! Today we're going to talk about the `skip()` method, a magical tool that helps you skip over those pesky elements at the beginning of your collection like a boss.

Imagine you're at a buffet and there are 10 dishes laid out in front of you – starting with broccoli (yuck!) four times in a row. With `skip(4)`, you can simply move past those first four plates and get straight to the good stuff, like lasagna or tiramisu.

Here's an example:

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Ew, who ordered four broccolis? Let's move past them.
$collection = $collection->skip(4);

// Now we're ready to enjoy our collection:
$collection->all();

// [5, 6, 7, 8, 9, 10]
```

Bon appétit! Remember, life's too short for broccoli.

 Ahoy there, code pirates! Prepare to hoist the sails of your Laravel collections and set course for the `skipUntil()` method, the swashbuckling navigator that'll guide you through a sea of items without stopping at every port!

This dashing technique skips over collection items like a nimble privateer dodging cannonballs, only pausing when the given callback yells "Land Ho!" with a `true` response. Once it does, all remaining booty in the collection will be gathered and set sail as a fresh new treasure chest!

```php
$collection = collect([1, 2, 3, 4]); // Gather your loot

$lootChest = $collection->skipUntil(function (int $item) { // Set the "Land Ho!" signal
    return $item >= 3;
});

$lootChest->all(); // [3, 4] - Yarr, there be treasure!
```

You can also pass a simple value to `skipUntil()` to skip all items until the given value is discovered like a parrot pointing out land on the horizon.

```php
$collection = collect([1, 2, 3, 4]); // Gather your loot

$lootChest = $collection->skipUntil(3); // Set the "Land Ho!" signal

$lootChest->all(); // [3, 4] - Yarr, there be treasure!
```

> [!ATTENTION]
> If you can't find the given value or the callback continues to say "Still no land in sight," then the `skipUntil()` method will return an empty collection—not quite enough loot for your pirate party, matey!

 Ahoy there, Laravel sailors! Let's dive into the magical realm of `skipWhile()`, a method that skips elements in your collection like a seasoned bouncer at a high-class party. You know, the one who politely escorts the riffraff to the exit without causing a scene.

In simpler terms, `skipWhile()` skips over items from your collection while a given callback (our bouncer in this case) keeps returning true. Once our friendly bouncer decides it's safe and the callback returns false, all remaining elements in the collection will be rounded up like so:

```php
$collection = collect([1, 2, 3, 4]); // Our guest list for tonight

$exclusive_party = $collection->skipWhile(function (int $item) {
    if ($item <= 3) { // If the item is a wallflower, send 'em packing!
        return true;
    }
    return false; // The dance floor is now open to all the lively ones!
});

$exclusive_party->all(); // [4] - Welcome to the exclusive party, 4!
```

[!WARNING]

Remember, if our bouncer (callback) never lets anyone in, there won't be any guests left at the party, and an empty collection will greet you. So keep your callbacks friendly but firm, or else you'll be serving drinks for one! 🥳🍻

 Alright, let's dive into the captivating world of Laravel collections! Today, we're gonna talk about the `slice()` method, akin to a magician's sleight of hand but for data.

Imagine you have a deck of 10 numbers (we'll call it a collection), and you want to pull out cards starting from number 4. No problemo! With `slice()`, it's as simple as this:

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$magicAct = $collection->slice(4); // Hey presto! Cards 5-10 appear!

$magicAct->all(); // Ta-da! You've got yourself a [5, 6, 7, 8, 9, 10] audience!
```

Now, suppose you're a tightrope walker and want to balance your act. You can limit the size of your returned slice by passing a second argument:

```php
$balanceAct = $collection->slice(4, 2); // Only two cards will make it into the act!

$balanceAct->all(); // [5, 6] - A balanced act indeed!
```

By default, our magic show preserves the original order of the numbers (keys). But if you're a wild card type who prefers re-indexing, you can use the [values](#method-values) method for a fresh deck every time. Now, wasn't that an enchanting explanation? Keep learning and remember: with Laravel, even collections are full of magic! ✨🎩🚀

 Alrighty then! Let's dive into the delightful world of Laravel collections and their fabulous `sliding()` method. It's like a magic window that peeks at your collection items in a glamorous slideshow fashion.

```php
$collection = collect([1, 2, 3, 4, 5]); // Our star-studded cast

$chunks = $collection->sliding(2); // Cue the spotlight! Now we have our leading duos: [1, 2], [2, 3], [3, 4], and [4, 5]
```

Now, this isn't just a one-man show. The `sliding()` method truly shines when paired with the charming `eachSpread()` method:

```php
$transactions->sliding(2)->eachSpread(function (Collection $previous, Collection $current) {
    // Our dashing leading duos are now sharing the spotlight! The current transaction's total is the previous one's total + its amount.
});
```

Feeling fancy? You can even pass a second "step" value to adjust the distance between the first item of each chunk:

```php
$collection = collect([1, 2, 3, 4, 5]); // Still our fabulous cast

$chunks = $collection->sliding(3, step: 2); // Now we have our leading trios: [1, 2, 3], and [3, 4, 5] (poor ol' 2 got left out)
```

So there you have it! The `sliding()` method is not only a versatile tool for your collection needs but also an excellent icebreaker at parties. Now go forth and conquer those collections like the Laravel superstars you are!

 Ahoy there! Steer clear of the collection maelstrom with our trusty ship, `sole()`! This isn't your garden-variety pirate treasure map compass; it's a Laravel method that sails through collections, seeking the one and only element that matches a specific criterion.

```php
collect([1, 2, 3, 4])->sole(function (int $value, int $key) {
    return $value === 2; // Our brave captain sets the treasure to '2'.
});

// 2 - Yarrr! We found our treasure!
```

But why stop there? Let's say you're on a quest for that one elusive chair amidst a sea of office furniture. No problemo! Our `sole()` method can find it for ya:

```php
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
]);

$collection->sole('product', 'Chair'); // We search for the 'Chair'.

// ['product' => 'Chair', 'price' => 100] - Found it!
```

And if you only have a single item on your list, fear not! `sole()` will still grab that for ya:

```php
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
]);

$collection->sole(); // We take the 'Desk'.

// ['product' => 'Desk', 'price' => 200] - Here's your desk!
```

But beware, matey! If there's no treasure to be found or more than one piece of loot, you may encounter some hair-raising exceptions:

- `\Illuminate\Collections\ItemNotFoundException` – You've been cursed with an empty chest!
- `\Illuminate\Collections\MultipleItemsFoundException` – Ye be sailing a ship with too many treasures! Better start divvying them up!

 Ahoy there, code pirates! Steer clear of the monotonous `array_search` shanty and hoist the `some()` sails instead! This isn't your grandma's "is something in here?" game; it's a Laravel treasure hunt with fewer riddles and more speed!

Think of it as a secret map that tells you whether there's at least one 'X' marking the spot hidden within your collection. It searches deep through those booty chests and spits out true or false, leaving no loot unaccounted for!

```php
// Arrays, baby!
$treasures = ['Gold', 'Silver', 'Rum'];

// Check if there's at least one gold nugget.
if ($treasures->some(function($item) {
    return $item === 'Gold';
})) {
    echo "Yo ho ho, we've struck gold!";
}
```

And voilà! Now you're well on your way to pirate programming mastery. Keep that `some()` method close, and your treasure hunts will be swashbucklingly swift!

 Alrighty, let's dive into the fascinating world of Laravel collections, shall we? Today's star is none other than the enchanting `sort()` method! This little charmer is here to ensure your collection is as orderly as a librarian's spice rack.

But hold your horses, for this method maintains the original array keys (just like that quirky uncle who insists on keeping his spot at Thanksgiving dinner). So if you want your numbers to be as linear as a Highway 1 road trip, you'll need to ditch those keys and grab some fresh indexes.

Here's a delightful example:

```php
$collection = collect([5, 3, 1, 2, 4]);

// Our collection is all mixed up! Let's sort it out.
$sorted = $collection->sort();

// Now our keys are as messy as a toddler's art project. Time to reset them!
$sorted->values()->all();

// And voilà! Our collection is now as organized as a neatly stacked Jenga tower: [1, 2, 3, 4, 5]
```

But fear not if your sorting needs are more like solving a Rubik's Cube than a simple alphabetical list. You can pass a callback to `sort` with your very own custom algorithm! For those who prefer PHP documentation over a magic spellbook (we're looking at you, Hogwarts dropouts), check out the PHP docs on [uasort](https://secure.php.net/manual/en/function.uasort.php#refsect1-function.uasort-parameters).

And yes, dear friends, we haven't forgotten about those of you with collections of nested arrays or objects. For your sorting woes, we have the ever-so-helpful [sortBy](#method-sortby) and [sortByDesc](#method-sortbydesc) methods at your disposal. Now go forth and conquer the world of organized data! 🤖📈🚀

 Ahoy there, matey! Let's dive into the piratey world of Laravel collections with the `sortBy()` method - a treasure chest full of organized data!

First off, imagine you've got a motley crew of furniture items (arrgh!) all jumbled up. To sort 'em out, you can use the `sortBy()` method and specify the key to sort by. Take our dear friends Desk, Chair, and Bookcase – if sorted by price, they'd line up like this:

```php
$collection = collect([
    ['name' => 'Desk', 'price' => 200],
    ['name' => 'Chair', 'price' => 100],
    ['name' => 'Bookcase', 'price' => 150],
]);

$sorted = $collection->sortBy('price'); // arrgh! Pirates love sorting too!

// And voila! Our sorted crew:
/* [
        ['name' => 'Chair', 'price' => 100],
        ['name' => 'Bookcase', 'price' => 150],
        ['name' => 'Desk', 'price' => 200],
    ] */
```

The `sortBy()` method can also handle a bit of sortin' magic with php's [sort flags](https://www.php.net/manual/en/function.sort.php). For example, if you want to make sure your "Items" are listed alphabetically without worrying about numbers and special characters:

```php
$collection = collect([
    ['title' => 'Item 1'],
    ['title' => 'Item 12'],
    ['title' => 'Item 3'],
]);

$sorted = $collection->sortBy('title', SORT_NATURAL);

// Now the items are in their proper place:
/* [
        ['title' => 'Item 1'],
        ['title' => 'Item 3'],
        ['title' => 'Item 12'],
    ] */
```

Feeling adventurous? You can even write your own custom sortin' rules using closures! Here, we'll arrange furniture pieces by the number of colors:

```php
$collection = collect([
    ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
    ['name' => 'Chair', 'colors' => ['Black']],
    ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
]);

$sorted = $collection->sortBy(function (array $product, int $key) {
    return count($product['colors']);
});

// The collection is now sorted by the number of colors:
/* [
        ['name' => 'Chair', 'colors' => ['Black']],
        ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
        ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
    ] */
```

But what if ye want to sort by more than one attribute, like a treasure map with multiple coordinates? No worries, matey! Just pass an array of sort operations:

```php
$collection = collect([
    ['name' => 'Taylor Otwell', 'age' => 34],
    ['name' => 'Abigail Otwell', 'age' => 30],
    // ...and so on
]);

// To sort by name in ascending order and age in descending order:
$sorted = $collection->sortBy([
    ['name', 'asc'],
    ['age', 'desc'],
]);

/* [
        ['name' => 'Abigail Otwell', 'age' => 32],
        ['name' => 'Abigail Otwell', 'age' => 30],
        // ...and so on
    ] */
```

Lastly, if you prefer to use custom closures for each sort operation, fear not! Just pass them as separate elements in the array:

```php
$collection = collect([
    // ...and so on
]);

// To sort by name in ascending order and age in descending order using custom closures:
$sorted = $collection->sortBy([
    fn (array $a, array $b) => $a['name'] <=> $b['name'],
    fn (array $a, array $b) => $b['age'] <=> $a['age'],
]);

/* [
        ['name' => 'Abigail Otwell', 'age' => 32],
        ['name' => 'Abigail Otwell', 'age' => 30],
        // ...and so on
    ] */
```

Yarrr! Now that we've sorted our collections like a band of piratey pros, let's set sail for more Laravel adventures!

 Ahoy there, code pirates! Dive into the depths of Laravel's enchanted treasure chest and unleash the mystical power of `sortByDesc()` – the sorcerer's apprentice among collection methods!

Beware, ye scurvy landlubbers, for this method shares a signature with its humdrum cousin, `sortBy`, but be warned: it casts collections in an altogether reverse order! No more will your precious data drown in alphabetical chaos; instead, you'll have them sailing smoothly from Z to A like a well-oiled maritime parade!

So, hoist the Jolly Roger high and embark on your quest for collection mastery. Yarr, may your seas of data always be sorted, and your journeys never be undone by disorderly arrays! Arr matey, now you're talkin' pirate code! 🏴‍☠️🚀

 Ahoy there, coders! Dive into the world of Laravel sorting where the fun is as bubbly as a freshly shaken Mojito! Let's talk about our buddy `sortDesc()` - the method that makes your data dance backwards like a hipster at a retro party.

```php
$collection = collect([5, 3, 1, 2, 4]); // Gather your numbers, mateys!

$collection->sortDesc(); // Now give 'em a shake and watch them sort in reverse order, like Fred Astaire on roller skates.

$collection->values()->all(); // Let's see what we've got: [5, 4, 3, 2, 1] - Ta-da!
```

Now, here's the twist: `sortDesc` is a picky party guest that doesn't dance with just anyone. Unlike its cousin `sort`, it won't take a closure as a partner for the dance. Instead, you've gotta use good ol' `sort`, put on your dancing shoes, and do-si-do your comparison in reverse!

<a name="method-sortkeys"></a>
And remember, the Laravel sorting scene is a place where knowledge and fun come together, just like peanut butter and jelly or bacon and eggs. So keep on dancing, and happy sorting! 💃🕺🚀

 Ahoy there! Sailors of Laravel land, hoist the mainsail of knowledge and grab your anchors of curiosity as we delve into the mystical `sortKeys()` method! This enchanting spell is cast upon collections to sort them in a magical way that's not seen since Merlin himself conjured Camelot.

So, why you ask, would one need such sorcery? Well, imagine having an array full of keys like a pirate's treasure map, but instead of gold doubloons, you have data points you want to organize. Enter our hero, the `sortKeys()` method! It sorts your collection by the keys of the underlying associative array, which is pretty much like arranging your treasure chest in alphabetical order.

Here's a swashbuckling example for ya:

```php
$collection = collect([
    'Grogs' => 500, // Arr matey! Grog is the lifeblood of pirates.
    'Gold' => 10000, // Aye, but gold keeps the ship afloat.
    'Parrots' => 20, // Never forget the trusty sidekicks!
]);

$sorted = $collection->sortKeys(); // Yo ho ho and a sorting go we!

$sorted->all(); // Echoes out your organized treasure map.
```

In this example, you'll find that the collection is now sorted by keys, ensuring your Grogs, Gold, and Parrots are in their proper places. Arr matey, ye can't beat a well-sorted array! Now, set sail and use the power of `sortKeys()` to conquer the seas of organized data!

 Ahoy there, Laravel pirates! Brace yourselves for an exhilarating journey into the sea of collections with our swashbuckling method: `sortKeysDesc()`!

You're probably familiar with our trusty sidekick `sortKeys()`. Well, imagine `sortKeys()` after a mug of grog – that's what you get when you call `sortKeysDesc()` on your collection!

This swashbuckling method maintains the same jolly spirit as its sober counterpart but offers an intriguing twist: it will sort your collection in reverse order, giving those pesky keys a good ol' pirate shake-up!

So if you find yourself needing to sort your collection like Captain Hook sorts his crew (or, you know, just in the proper order for some reason), hoist the `sortKeysDesc()` flag and let this method help you navigate through those choppy waters. Ahoy, matey!

 Ah, the `sortKeysUsing()` method - a veritable game changer for your humble Laravel collections! It's like inviting Chaos Sorceress Loki to a dinner party and having him sort your dishes alphabetically by their names... but in a good way.

```php
Let's imagine you have a bewildering array of data, akin to Lindsay Lohan's career trajectory:

$collection = collect([
    'ID' => 22345,
    'first' => 'John',
    'last' => 'Doe',
]);
```

Now, let's say you want to serve this data in the order of its first name, last name, and ID - a request as audacious as asking Taylor Swift to write a country song about math. Well, `sortKeysUsing()` is your new best friend!

```php
$collection->sortKeysUsing('strnatcasecmp');

// And like magic, the data is served in order:
$sorted = $collection->all();

/*
    [
        'first' => 'John',
        'ID' => 22345,
        'last' => 'Doe',
    ]
*/
```

The `strnatcasecmp` function is our secret weapon here. It's like a magical sorting hat that doesn't care about upper or lower case letters, and it returns an integer less than, equal to, or greater than zero - because in the world of PHP, everything can be reduced to simple numbers! For more information on this wondrous function, do check out [uksort](https://www.php.net/manual/en/function.uksort.php#refsect1-function.uksort-parameters) - it's like the Hogwarts Library of Magical Sorting for PHP enthusiasts!

So there you have it, a veritable game changer for your Laravel collections, served with a side of humor and a dash of wit. Enjoy, and happy sorting!

 Ahoy there, matey! The `splice()` method is a veritable treasure trove of excitement for your Laravel collections. It's like a pirate raid on your data, but instead of gold doubloons, you're grabbing chunks of precious collection items! 🏴‍☠️

Here's the lowdown:

```php
$collection = collect([1, 2, 3, 4, 5]); // Our humble pirate's hoard

$chunk = $collection->splice(2); // "Arrr! Start plundering at index 2!"

$chunk->all(); // "Tally up the loot: [3, 4, 5]"

$collection->all(); // "What's left in the chest? [1, 2]"
```

Feeling greedy? You can limit the size of your bounty with a second argument:

```php
$collection = collect([1, 2, 3, 4, 5]); // A larger hoard, now we're talking!

$chunk = $collection->splice(2, 1); // "Alright, grab one item from index 2!"

$chunk->all(); // "Golden doubloon count: [3]"

$collection->all(); // "What remains? [1, 2, 4, 5]"
```

And if you're a mischievous scallywag, you can even replace the items you've plundered with a third argument:

```php
$collection = collect([1, 2, 3, 4, 5]); // Still on the hunt for buried treasure

$chunk = $collection->splice(2, 1, [10, 11]); // "Arrr! Swap out the item at index 2 with these!"

$chunk->all(); // "What did we grab? [3]"

$collection->all(); // "The treasure chest now holds: [1, 2, 10, 11, 4, 5]"
```

Yarr! Now that's some swashbuckling fun with Laravel collections! Happy plundering! 🍻

 Ahoy there, Laravel swashbucklers! Dive into the captivating world of collection splitting with the `split()` method, the party trick your collections have been longing for! 🥳

Imagine you've got a lively bunch of numbers, just waiting to be divided and conquered:

```php
$collection = collect([1, 2, 3, 4, 5]); // A motley crew of digits

$collection->split(3); // Partying like it's 3 seas over!

$groups = $collection->all(); // Time to tally the troops: [[1, 2], [3, 4], [5]]
```

Now that your collections are well-organized, you can conquer the seas (or your app) with ease! Party on, wayfarer! 🎉🥳⚓️

 Ahoy there! Sailors and landlubbers alike, gather 'round as I regale you with the enchanting tale of Laravel's `splitIn()` method - a pirate's treasure chest for collections! This magical function divides your collection into a number of groups that would make Old Bill Sikes himself green with envy.

```php
$booty = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Our bountiful collection!

// We wish to split it into three groups - "a threesome", if you will.
$groups = $booty->splitIn(3);

$groups->all(); // And lo and behold, the treasure chest opens...

// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]] - Aye, the booty's been divided!
```

This seafaring sorcery ensures that non-terminal groups are filled to the brim before allocating any leftover pieces to the final group. So, if you ever find yourself in possession of a rather unwieldy collection, remember that `splitIn()` is here to help you keep the plunder under control! Arr matey! 🏴‍☠️🐙

 Oh, the `sum()` method, the collection's very own calculator in a digital tuxedo! This dashing fellow doesn't just add up the numbers on your behalf, but rather struts around your array or collection, performing calculations with an elegance that would put Abacus to shame.

```php
// A simple sum party for numbers
$numbers = [1, 2, 3, 4, 5];
collect($numbers)->sum(); // And voila! It's a cool fifteen!

But let's say your collection has some fancy nested arrays or objects. No worries, just pass it a key and let our dapper summer figure out which values to add up:

```php
$books = collect([
    ['name' => 'JavaScript: The Good Parts', 'pages' => 176],
    ['name' => 'JavaScript: The Definitive Guide', 'pages' => 1096],
]);

$books->sum('pages'); // And the total pages read this year is... drumroll please, 1272!
``
`In a more complex scenario, if you want to get creative with your calculations, feel free to pass a custom closure. Here, our summation expert will run through your collection with a personalized rule:

```php
$products = collect([
    ['name' => 'Chair', 'colors' => ['Black']],
    ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
    ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
]);

$products->sum(function (array $product) {
    return count($product['colors']);
}); // And the total number of colors in your furniture shopping spree is six!
```

 Ahoy there, brave coder! Sail through the sea of data with the `take()` method - your trusty compass on this treacherous journey! 🚢🌈

This nautical navigator will help you snag a specific quantity of items from your collection and store them in a brand-new ship, leaving the rest behind like castaways on an uncharted island. 🏴‍☠️

```php
$collection = collect([0, 1, 2, 3, 4, 5]); // A veritable treasure trove of data!

$chunk = $collection->take(3); // Let's catch a whopping three items from this booty.

$chunk->all(); // Ahoy! Here be the loot: [0, 1, 2]
```

But wait! Ever been on a quest for buried treasure, only to find it at the edge of the map? You can also use `take()` to plunder items from the end of your collection. 🏴‍☠️

```php
$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection->take(-2); // Swab the deck and prepare to salvage two items from the collection's end.

$chunk->all(); // Arrrr! Here be your spoils: [4, 5]
```

Now go forth and conquer the high seas of data management with `take()`. Just remember that while it's great for collecting treasures, it won't help you avoid sea monsters or navigate through stormy waters. For those, you'll need other skills, like... well, Laravel knowledge! 🌊🐳

 Alrighty then, Laravel'ers! Let's dive into the delightful world of `takeUntil()`, a method that's not just a collection wrangler but also a magician who makes your collections vanish... or rather, stop at a specific item!

Imagine you're at a never-ending party (not our kind of party, Laravel!) and you want to ditch the people wearing numbers 1 and 2. You could either shout "Enough with the ones and twos!" until someone gets the hint or use `takeUntil()`. Here's how it works:

```php
$collection = collect([1, 2, 3, 4]);

// Shout: "Hey, whoever is 3 or more, I'm staying with you!"
$subset = $collection->takeUntil(function (int $item) {
    return $item >= 3;
});

// Lo and behold! You're left with [1, 2]
$subset->all();
```

But wait, there's more! If you don't feel like writing a custom shout or just want to find the first 3, you can do this:

```php
// Shout: "Hey 3, I want you and everyone before you!"
$collection = collect([1, 2, 3, 4]);

$subset = $collection->takeUntil(3);

// Lo and behold! You're left with [1, 2]
$subset->all();
```

> [!ATTENTION]
> Watch out now! If you can't find your number or the party just doesn't want to end, `takeUntil()` will keep everyone dancing until the end! (Or in other words, it will return all items in the collection.)

Now that you've got the hang of it, go on and make your collections disappear like magic!

 Alrighty then! Let's dive into Laravel's enchanting world of data manipulation and unleash the magical powers of the `takeWhile()` spell! 🎩💫

Imagine you're at a never-ending, boring party where everyone is discussing the intricacies of collection iteration. Fear not, for this sorcery saves the day! The `takeWhile()` method, much like a bouncer at an exclusive club, checks each item in your collection until it finds one that doesn't pass muster (or, in programming terms, when the callback function returns false).

Here's a fabulous demonstration:

```php
$collection = collect([1, 2, 3, 4]); // Our party guests

// The bouncer checks if they are under 3 (you know, age restrictions)
$subset = $collection->takeWhile(function (int $item) {
    return $item < 3;
});

$subset->all(); // [1, 2] - Only the cool kids that meet the requirements make it to our 'cool' subset
```

Now, hold your horses! Be warned: if these partygoers never stop impressing the bouncer (callback never returns false), the `takeWhile()` method will graciously invite them all to the event! 🎉💃✨

That's it! Go forth and conquer your data with a bit of humor, courtesy of Laravel!

 Ah, the `tap()` method - the unsung hero of the Laravel collection family! Think of it as a discreet backstage pass to your collection's concert. You get to peek at the items (without causing a scene) and even perform a little side-gig (a callback function), all without affecting the main act (the collection itself).

Here's an example where we sort our collection like a well-rehearsed band, log the sorted values for posterity (because who doesn't love a good encore?), and then kick off the show by removing the opening act (the first item in our collection).

```php
$collection = Collect([2, 4, 3, 1, 5]); // Our lineup of numbers

$collection->sort() // Time for soundcheck. Arrange those digits nicely!
    ->tap(function (Collection $collection) {
        // Backstage pass in hand, we log the sorted values for our fans (and future historians)
        Log::debug('Values after sorting', $collection->values()->all());
    })
    ->shift(); // And with a drumroll... kick off the show by removing the opening act (the first item)

// 1 is gone, and we're left with: [2, 4, 3, 5] - showtime!
```

And there you have it! Your collection's performance remains intact while you get to sneak a peek and throw in a quick dance routine (callback function). Enjoy the show!

 Ahoy there, matey! Buckle up for a fun ride through the magical world of Laravel collections! Today's stop: The Times Square of collection methods – `times()`. Yeah, we went there.

The `times` method, much like a party animal, loves to repeat itself – and it does so in style! By invoking your custom closure a specified number of times, this dashing method creates a brand new collection. Let's get our pirate on and write some code:

```php
// Gather ye crew, me hearties! Create a new collection filled with nine-multiples!
$collection = Collection::times(10, function (int $number) {
    // Aye aye, cap'n! Make the number dance with nine!
    return $number * 9;
});

// Hoist the Jolly Roger and show us the bounty!
$collection->all();

// [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
```

And there you have it, matey! A collection of nine-multiples to make any math teacher shiver in their boots! So raise your glass (or mug) and join the Laravel crew for more exciting adventures with the `times()` method. Arrrr!

 Ahoy there! Sailors of the Laravel seas! Dive into the depths of the `toArray()` method and let's make some waves together!

The `toArray()` is a swashbuckling superpower that transforms your collection into a humble PHP array. Not just any ol' array, mind you—an array filled with treasures like 'Desk', '200', and such pirate gold!

```php
$collection = collect(['name' => 'Desk', 'price' => 200]);

$collection->toArray(); // Arrays ahoy!

/*
    [
        ['name' => 'Desk', 'price' => 200],
    ]
*/
```

Now, beware the kraken—the `toArray()` is no ordinary method. It converts all of your collection's nested objects that are `Arrayable`, ensuring a seamless journey from land to sea and back again!

But if you seek the raw booty hidden deep within the collection, set sail for the [all](#method-all) method instead—it'll lead ye straight to the plunder!

Yarr matey, now that you've charted this method's course, navigate to further adventures in Laravel land! 🌴🚀

 Ah, the `toJson()` method! It's like a late-night talk show host for your data collection, turning chaotic conversations into neatly packaged soundbites. 🎤

Imagine you have a group of rowdy friends who can't agree on anything - this is your collection before `toJson()`. But with one magic command, they transform into a well-behaved panel discussion transcript! 📝

```php
$collection = collect(['name' => 'Desk', 'price' => 200]);

$collection->toJson();

// Transforms into: '{"name":"Desk", "price":200}' - A peaceful symphony of comma-separated values! 🎻
```

Oh, and if you fancy a more aesthetically pleasing JSON, just add `pretty` to the method like this:

```php
$collection->toJson(JSON_PRETTY_PRINT);

// Transforms into:
{
    "name": "Desk",
    "price": 200
}

// A masterpiece, I must say! 🎨👨‍🎤
```

Hope this little tutorial on the `toJson()` method brought a smile to your face while you learned something new. Keep coding and making beautiful data structures! 😎💻

 Oh, the `toPrettyJson()` method! It's like your collection's personal makeup artist for data, turning chaotic JSON strings into a well-groomed, easy-on-the-eyes format. Just picture a disheveled pile of furniture parts transformed into an IKEA catalogue-worthy showroom display. 🛋️🛌️

Here's the secret to this magical makeover:

```php
$disarray_of_parts = collect(['name' => 'Desk', 'price' => 200]);

$disarray_of_parts->toPrettyJson(); // Voila! Instant IKEA catalog!
```

Now, you can flaunt your collections with pride knowing they look as good on the outside as they do on the inside. 🌹🎉

 Oh, the `transform()` method is quite the party animal in Laravel's collection family! This jovial chap dances through your collection, inviting each item to a little soiree where a callback is the host. Each item, dressed up and ready for an evening of fun, receives a visit from the callback which multiplies them by 2 - think dance partner swaps at a square dance!

Here's a tasteful rendition:

```php
$collection = collect([1, 2, 3, 4, 5]);
// Imagine inviting each guest to a dance where they double their number
$collection->transform(function (int $item, int $key) {
    return $item * 2;
});

// And after the party's over, we check out who's left on the dance floor:
$collection->all();

// [2, 4, 6, 8, 10]
```

[!WARNING]
But hold on, partner! Unlike most other collection methods, `transform` doesn't believe in keeping a separate dance card for each guest. Instead, it modifies the very collection itself during the event! If you fancy a more polished approach and prefer to keep your original collection pristine, then remember to use the [map](#method-map) method instead.

 Ah, the `undot()` method - a true hero in the world of Laravel collections! This cheeky chap takes a one-dimensional collection that's been playing hard-to-get with "dot" notation and transforms it into a multi-dimensional one, making it easier to navigate like a boss at a high-school dance. 💃️🕺️

Let's imagine we have a disgruntled, single-dimensional collection named `$person` filled with data that looks more like a puzzle than a real person. It's all mixed up with dots, making it a headache to understand:

```php
$person = collect([
    'name.first_name' => 'Marie',
    'name.last_name' => 'Valentine',
    'address.line_1' => '2992 Eagle Drive',
    // ...more lines of dot-filled madness...
]);
```

Now, with a single call to the `undot()` method, we can turn this collection into a well-organized multi-dimensional one that's easier to read and work with:

```php
$person = $person->undot();
```

If you need to see it in its new form, just ask `$person` to show off as an array:

```php
$person->toArray();
```

And voila! You'll get a beautifully structured collection that looks like this:

```javascript
[
    "name" => [
        "first_name" => "Marie",
        "last_name" => "Valentine",
    ],
    "address" => [
        "line_1" => "2992 Eagle Drive",
        // ...and the rest of their contact info...
    ],
]
```

Now that's what I call a makeover! With `undot()`, you can take control and tame even the wildest, dot-infested collections. 🎉🥳

 Ahoy there, shipmates! Hoist the `union()` sails and set course for a bountiful collection of data! This Laravel method isn't just another dance move, it's the swashbuckler that adds an array to your collection without any mutiny or duplication.

Imagine you've got a hearty crew of numbers and pirate loot, `$collection = collect([1 => ['a'], 2 => ['b']]);`. Now, ye've come across another ship's treasure, but there's some overlap: `[3 => ['c'], 1 => ['d']]`. No worries, matey! With the `union()` method, we can combine the loot without causing a rebellion on our own deck.

Here be the example ye asked for:

```php
$pirateTreasure = $collection->union([3 => ['c'], 1 => ['d']]);

$pirateTreasure->all();
```

And voila! A harmonious, booty-filled collection awaits ye: `[1 => ['a'], 2 => ['b'], 3 => ['c']]`. Arrrr, that's some fine treasure we've got here!

 Alright, let's dive into the enchanting world of Laravel collections and their magical `unique()` method! This spell casts a charm on your collection, transforming it into a mystical realm where duplicates are banished to the Uriels' Pit (aka, eliminated from the array).

Let's begin our journey with a simple example:

```php
$collection = collect([1, 1, 2, 2, 3, 4, 2]); // Our starting point, a collection filled with doppelgangers.

// After casting the unique spell...
$unique = $collection->unique(); // The duplicates are sent packing!

// To ensure our collection doesn't suffer from amnesia, we reset its keys using values()->all():
$unique->values()->all(); // Voila! [1, 2, 3, 4] - a collection devoid of doubles.
```

But what happens when we encounter nested arrays or objects? No worries, dear adventurer; the `unique()` method comes equipped with an elixir that can detect uniqueness based on a specific key!

```php
$collection = collect([
    ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
    // Oops, another iPhone 5... This collection has duplicates galore!
    ['name' => 'iPhone 5', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
    // And another duplicate, the Galaxy S6...
    ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
    ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
]);

// Time to use our key-based elixir!
$unique = $collection->unique('brand');

$unique->values()->all();
/*
    [
        ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
        ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
    ]
*/
```

But wait, there's more! If you're seeking a customized method of determining uniqueness, the `unique()` spell has a powerful option for that: pass your very own closure to the mix!

```php
$unique = $collection->unique(function (array $item) {
    return $item['brand'].$item['type']; // This potion combines brand and type to create unique keys.
});

// After casting this custom spell...
$unique->values()->all();
/*
    [
        ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
        ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
        ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
        ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
    ]
*/
```

Lastly, our trusty `unique()` method performs "loose" comparisons when checking item values. This means that a string with an integer value will be considered equal to an integer of the same value. If you wish to use "strict" comparisons instead, cast the spell using `uniqueStrict()`.

> [!NOTE]
> Be aware that this method's behavior may vary when combined with [Eloquent Collections](/docs/{{version}}/eloquent-collections#method-unique).

 #### 🤓 Oh, the `uniqueStrict()` dance! 🕺

Alright, grab your programming partner and get ready to boogie! This dance has all the moves of the regular [unique](#party-unique) shindig, but with a strict dress code.

Now, you might be wondering, "What's the catch?" Well, instead of casual comparisons, we're breaking out the magnifying glasses for this one. That's right, all values are compared using those pesky, yet precise, "strict" comparisons. So, if you thought your data was identical before, think again! This method won't hesitate to call you out on any sneaky type juggling or hidden string manipulations.

So, suit up, my friend, and let's get this party started with some well-behaved collections! 🎉🎈

 #### `unless()` {.collection-method} - The Lone Wolf of Collection Methods!

Meet your new best friend, the `unless` method! This sly fox will only trigger the given callback if the first argument it's handed isn't a blatant 'TRUE'. It invites both the collection instance and the initial argument to a secret dance, a waltz of data manipulation within a closure:

```php
$collection = collect([1, 2, 3]);

// Our collection is feeling mighty generous today, it's ready to invite 4 to the party... but only if truth isn't knocking at the door!
$collection->unless(true, function (Collection $collection, bool $value) {
    return $collection->push(4);
});

// But alas, false shows up empty-handed! The collection graciously accepts 5 as a last-minute plus one.
$collection->unless(false, function (Collection $collection, bool $value) {
    return $collection->push(5);
});

// And now the guest list: [1, 2, 3, 5] - What a shindig!
```

Feeling particularly mischievous? You can even invite a second callback to join the party. This uninvited guest will make an appearance only when truth dares to show up at the door:

```php
$collection = collect([1, 2, 3]);

// The first callback whispers "4, I've got a spot for you!"
$collection->unless(true, function (Collection $collection, bool $value) {
    return $collection->push(4);
}, function (Collection $collection, bool $value) {
    // The second callback, not to be outdone, winks and whispers "5, come dance with me!"
    return $collection->push(5);
});

// [1, 2, 3, 5] - Looks like 4 didn't make it this time.
```

For those who enjoy playing by the opposite rules, check out the [when](#method-when) method. It's quite the charmer!

 Ahoy there, coding cowboys and codettes! Buckle up your keyboard straps as we venture into the wild frontier of Laravel collections. Today, we're going to yeehaw our way through the `unlessEmpty()` wrangler!

#### `unlessEmpty()` {.collection-method} - AKA: The Anti-emptiness Sheriff

Whip out your six-shooter of collections (not a real gun, folks!) and point it towards this little ol' helper method. It's the alias for our trusty sidekick `whenNotEmpty`, so we can say that `unlessEmpty()` is its cowpoke cousin.

Now, what does this wrangler do, you ask? Well, buckaroo, it wraps a closure and executes it only if the collection ain't empty as a tumbleweed in a dusty prairie town. Fancy that!

So, how do you use this sheriff to keep your code tidy and your collections non-empty? Well, partner, simply call it on your collection and provide a closure (a fancy term for an anonymous function) that'll be executed if the collection is, indeed, not empty as a coyote's pockets.

Here's an example of how to use `unlessEmpty()`:

```php
// Saddle up and ride along!
$collection = collect([1, 2, 3]);

// Define a closure for the fun times ahead
$closureFunction = function ($items) {
    return "Yeehaw, we've got " . count($items) . " items in our collection!";
};

// Let `unlessEmpty()` handle the rest
$result = $collection->unlessEmpty($closureFunction);

// The cowboy's prize awaits us at the end of the trail:
echo $result; // Output: Yeehaw, we've got 3 items in our collection!
```

And there you have it, partner! `unlessEmpty()` is an indispensable tool for keeping your code dry and your collections well-stocked. Ride safe, and remember: when you need to wrangle a non-empty collection, there's nothing like an ol' friend named `unlessEmpty()`.

Happy coding, partner! 🤠🌵🐎

 Ahoy, code pirates! Sail with me as we navigate the high seas of Laravel collections! Today, we're diving into the swashbuckling method called `unlessNotEmpty()`. But before you hoist the Jolly Roger and brace yourself for another technical tidbit, let's set the mood with a bit of wit.

You see, `unlessNotEmpty()` is not your ordinary run-of-the-mill Laravel collection method. It's more like that trusty parrot on your shoulder—always there when you need it but silent when you don't. In other words, `unlessNotEmpty()` only raises its beak when the collection is empty, allowing you to perform a specific action or apply another method.

Think of it as the pirate counterpart to the more formal [whenEmpty](#method-whenempty) method. You know, the one that always wears a monocle and carries a silver-tipped cane. `unlessNotEmpty()`, on the other hand, prefers a peg leg and an eye patch—ready for action and less prone to fainting at the sight of a blank collection!

Now that you've got the gist, let's dive into the code:

```php
// When your collection is a deserted island (empty)...
$collection = collect([]);

// ...and you want to load the cannons and fire at full broadside!
$loadedCannons = $collection->unlessNotEmpty()->map(function ($item) {
    // Do something awesome here!
});
```

Remember, `unlessNotEmpty()` returns a new instance of the collection (don't worry, it won't touch your precious treasure chest), and then lets you perform additional actions on the collection if it is indeed empty. Arrrr, off to more adventures with Laravel collections! Happy coding, mateys! 🏴‍☠️

 Ahoy there! Sailors of the Laravel seas, hoist the sails and brace yourself for a tidal wave of knowledge! Today we're diving deep into the enigmatic `unwrap()` method, a seafaring tool that's about to become your new best friend.

First off, it's crucial to understand that this nautical wonder does one thing and one thing only: It unwraps collections! No need for tarps or ropes here; just like an expert shipwright with a bottle of rum, `unwrap()` knows how to get things undone.

Now, let me set the scene. Imagine you've found yourself in possession of a suspiciously wrapped package: it could be a collection, a string, or even an array. But fear not, for `unwrap()` is here to unleash its magical powers upon this bundle, turning it into something more tangible – a regular ol' Laravel collection!

Here's where the real fun begins. To demonstrate, let me present you with three scenarios, each featuring a mystery wrapped treasure:

1. A cryptic string of names wrapped in `collect()`:
```php
Collection::unwrap(collect('John Doe'));

// ['John Doe'] - Ta-da! Your prize is unwrapped, and what a handsome fellow it is too!
```
2. A seemingly harmless array that's just pretending to be a collection:
```php
Collection::unwrap(['John Doe']);

// ['John Doe'] - You've caught the sneaky critter red-handed, and now you have your prize in plain sight!
```
3. An enigmatic string containing the name of our swashbuckling protagonist:
```php
Collection::unwrap('John Doe');

// 'John Doe' - The treasure was a bit more difficult to uncover, but don't worry – once you found it, you knew it was worth the effort!
```

And there you have it, me hearties! The `unwrap()` method has revealed its magical powers, turning mystery-wrapped treasures into tangible Laravel collections. Happy unwrapping!

 Alright, let's dive into the world of Laravel collections and uncover the secret behind the enigmatic `value()` method! Picture this: you're at a swanky cocktail party, surrounded by a sea of data in the form of posh hors d'oeuvres. Now, imagine if someone asked for the price of each dish without having to search through every single plate. That's exactly what `value()` does!

Let's set up our scene:

```php
$collection = collect([
    ['appetizer' => 'Desk', 'price' => 200],
    ['appetizer' => 'Speaker', 'price' => 400],
]);
```

Our collection is our spread of gourmet snacks at the party. Now, if we want to know the price of the first item on the menu (which is the Desk), here's how we call upon the all-knowing `value()` method:

```php
$bill = $collection->value('price');

// 200 - the price of the Desk
```

In this case, our `$bill` is now light on its feet after snatching the cost of the Desk hors d'oeuvre. Simple as that! Just remember, `value()` only retrieves the first element's value from the collection, so be sure to ask for the right dish or you might end up paying for the house DJ instead!

Now that we've cleared that up, it's time to move on to more hors d'oeuvres and data-wrangling fun with Laravel collections. Cheers! 🥂

 Ahoy there, Laravel enthusiasts! Brace yourself for a bit of fun as we delve into the enchanting realm of the `values()` method – the magical wand that transforms your collection like no other.

Imagine you're attending a high-society soiree where every guest is identified by both their name and their secret price tag. Now, instead of awkwardly fumbling through a list of "Lady Guinevere (worth 300 silver pieces)" and "Sir Percival (valued at 250 gold coins)", wouldn't it be great to have a sorcerer's scroll that organizes everyone alphabetically by their secret price tag? Meet your new best friend, the `values()` method!

Let me take you on a brief tour:

```php
$collection = collect([
    "10" => ["product" => "Desk", "price" => 200],
    "11" => ["product" => "Speaker", "price" => 400],
]);

// Now, let's cast that spell and rearrange our guests
$values = $collection->values();

// To ensure the charm takes effect, we need to see the results
$values->all();

/*
    Ta-da! Here's what you get:
*/
[
    0 => ['product' => 'Desk', 'price' => 200],
    1 => ['product' => 'Speaker', 'price' => 400],
]

And just like that, your collection is transformed into a neat little lineup of secret prices, ready to be inspected without causing any social awkwardness. Ain't magic grand? 🎩✨

 Alrighty then! Let's dive into the delightful world of Laravel's `when()` collection method, a magical tool that makes your code dance like a happy jitterbug whenever it wants to!

Imagine you're at a party and you want to serve drinks only when the disco ball starts spinning (that's our first argument). The `when()` method is like the bouncer who checks if the disco ball is indeed spinning before handing out those tasty beverages (callback function)!

```php
$collection = collect([1, 2, 3]); // Our party-goers

// If the disco ball is spinning (true), let's serve some extra margaritas!
$collection->when(true, function ($partygoers, $isDiscoBallSpinning) {
    return $partygoers->push(4); // Add 4 to the list of tipsy guests
});

// But if it's not spinning (false), well then we better serve some water!
$collection->when(false, function ($partygoers, $isDiscoBallSpinning) {
    return $partygoers->push(0); // Add 0 to the list of sober souls
});

// Check out the guest list now!
$collection->all(); // [1, 2, 3, 4]
```

But what if you have a backup plan? Say, if your DJ forgets to spin the disco ball (again), it'd be cool to serve some non-alcoholic punch instead. You can do this by passing in a second callback function!

```php
$collection = collect([1, 2, 3]); // Our party-goers

// If the disco ball is NOT spinning (false), let's serve some fruity punch instead!
$collection->when(false, function ($partygoers, $isDiscoBallSpinning) {
    return $partygoers->push(4); // Add 4 to the list of fruity-punch guzzlers
}, function ($partygoers, $isDiscoBallSpinning) {
    return $partygoers->push(0); // Add 0 to the list of sober souls
});

// Check out the guest list now!
$collection->all(); // [1, 2, 3, 5] (whoops, someone mixed up the beverages!)
```

Now, if you're feeling contrary and prefer to serve drinks only when there are no guests, well then, have a look at our pal, the [unless](#method-unless) method! It works just like `when()`, but with a sneaky twist: it serves drinks when the disco ball is NOT spinning!

 Alrighty, let's dive into the whimsical world of Laravel collections! The `whenEmpty()` method is like the quirky bartender of data arrays, serving up a special drink when your collection is surprisingly bare.

```php
$collection = collect(['Michael', 'Tom']); // Our tipsy troupe

$collection->whenEmpty(function (Collection $collection) {
    return $collection->push('Adam'); // "Hey, can I get another round for the lone ranger over here?"
});

$collection->all(); // And the bar serves ['Michael', 'Tom'] with a smile

Now imagine walking into an empty bar (gasp!), our collection is as desolate as a tumbleweed-infested saloon.

$collection = collect();

$collection->whenEmpty(function (Collection $collection) {
    return $collection->push('Adam'); // "Alrighty then, let's get this party started!"
});

$collection->all(); // And the bar serves ['Adam'] with a triumphant cheer!
```

But wait, there's more! The `whenEmpty()` method can handle multiple patrons (I mean, data items) if you pass a second closure that will be executed when the collection is not empty.

```php
$collection = collect(['Michael', 'Tom']);

$collection->whenEmpty(function (Collection $collection) {
    return $collection->push('Adam'); // "Hey, can I get another round for the lone ranger over here?"
}, function (Collection $collection) {
    return $collection->push('Taylor'); // "And what about that quiet chap in the corner?"
});

$collection->all(); // And the bar serves ['Michael', 'Tom', 'Taylor'] with a toast!
```

Now, if you're feeling rebellious and want to spice things up, check out the [whenNotEmpty](#method-whennotempty) method. It's like a wild west dance where only the collections with data items get to twirl around! 🤠🚀

 Alrighty, let's dive into the whimsical world of Laravel collections! Today we're chatting about the ever-so-charming `whenNotEmpty()` method - a corker of a function that'll have your collection hopping with joy (or dread, depending on what you've named it).

Imagine you've got a collection called 'The Rockafellas' filled with the dulcet tones of Michael and Tom. Now, in the spirit of brotherly love, let's say Adam wants to join the gang. How do we add him without causing a ruckus? That's where `whenNotEmpty()` comes in!

```php
$TheRockafellas = collect(['Michael', 'Tom']); // The Rockafellas, minus Adam

// This is like yelling at the top of your lungs: "If there's anyone here who isn't already a Rockafella, become one!"
$TheRockafellas->whenNotEmpty(function (Collection $collection) {
    return $collection->push('Adam'); // Add Adam to the mix!
});

// And lo and behold, ['Michael', 'Tom', 'Adam'] - the perfect harmony of The Rockafellas.

But what if you've got an empty collection? You wouldn't want to force-feed Adam into it now, would you? Fear not! `whenNotEmpty()` also knows when to keep its trap shut:

```php
$EmptyCollection = collect(); // An unoccupied collection

// This is like whispering to an empty room: "If there's anyone here who isn't already a Rockafella, become one!"
$EmptyCollection->whenNotEmpty(function (Collection $collection) {
    return $collection->push('Adam'); // Still empty - Adam's patience pays off.
});

// Sadly, [] - still an unoccupied collection.

Now, imagine you have two closures ready to go. In the event that your collection is devoid of life like a forgotten desert, the second closure can step up to the mic:

```php
$EmptyCollection = collect(); // An unoccupied collection

// This is like whispering to an empty room: "If there's anyone here who isn't already a Rockafella, become one!"
$EmptyCollection->whenNotEmpty(function (Collection $collection) {
    return $collection->push('Adam'); // Add Adam to the mix!
}, function (Collection $collection) {
    // If no one answers the call, it's time to bring in the big guns:
    return $collection->push('Taylor'); // Taylor Swift? More like Taylor Made for this situation.
});

// And voila, ['Taylor'] - a lone ranger in an empty collection.
```

And that, dear Laravel devotees, is how you make your collections more exciting than a reality TV show! For those times when you want your collections to be... well, not empty, remember the `whenNotEmpty()` method. And if you ever find yourself in need of the opposite effect, do check out the [whenEmpty](#method-whenempty) method. After all, variety is the spice of life!

 Ahoy there, collection wizards! The `where` method is your magical compass, guiding you through the chaos of data overload. Picture a pirate ship sailing through a sea of goods, and you're the captain, looking to plunder only the treasure that meets your specific criteria.

```php
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    // ...and so on with a bunch of other items
]);
```

Now, let's say you want to find all the booty worth 100 doubloons. You just shout "Arrr, give me all the products costing one hundred!" and, voila! The collection filters itself for your pleasure:

```php
$filtered = $collection->where('price', 100);
```

But beware, matey! In this sea of numbers, there be no room for a picky parrot. The `where` method uses "loose" comparisons—it'll happily accept '100' as the same as good ol' 100. If you want strictness (as any proper pirate should), use the `whereStrict()` method:

```php
$filtered = $collection->where('price', 100)->whereStrict();
```

Now, if you're tired of dealing with those pesky nulls, the `whereNull()` and `whereNotNull()` methods will help you filter out the void from your collection:

```php
$filtered = $collection->whereNotNull('price');
```

Lastly, if you want to compare values using a specific operator (like 'greater than' or 'not equal'), just pass it as a second parameter:

```php
$collection = collect([
    ['name' => 'Jim', 'platform' => 'Mac'],
    // ...and so on with a bunch of other folks and their platforms
]);

$filtered = $collection->where('platform', '<>', 'Linux');
```

And just like that, you've got yourself a filtered collection, ready for further adventures! Keep hoarding those collections, ye landlubbers, and happy filtering! 🏴‍☠️

 Ahoy there! Buckle up, adventurers, as we dive into the Laravel treasure chest once more, this time to uncover the mysteries of the elusive `whereStrict()` method! But before we set sail, grab your monocles and prepare to be amazed, because this method is no ordinary pirate's chest – it's a veritable treasure trove for those seeking the most exacting comparisons in all the realm of Laravel collections!

Now, you might wonder: "What makes `whereStrict()` so special?" Well, me hearties, `whereStrict()` is not like your garden-variety `where()` method; it's a refined, snobbish relative who insists on using "strict" comparisons instead of the commoners' loose ones.

Just as a purist would insist on using proper Oxford commas or serving their tea with pinky extended, `whereStrict()` demands nothing less than rigorous exactness in its comparisons. No more tolerating those sneaky type conversions or loose comparison operators like "=" or "<>"! With `whereStrict()`, it's all about the unforgiving `===` and `!==`.

So, if you find yourself seeking a more discerning method to filter your collections, look no further than the elegant and exacting `whereStrict()`. It may be a bit more picky than its cousin `where()`, but it's worth it for those who value precision in their comparisons!

Now, let's hoist the sails and set course for new adventures in Laravel land – with `whereStrict()` by our side, we're well-equipped to take on even the most challenging quests! Arrrr!

 Alright, let's get this party started! The `whereBetween()` method is like the bouncer at an exclusive price range nightclub. It filters your collection and only lets through items whose prices are dancing between the numbers you provide, like a pair of fancy VIP ropes.

```php
Here's our rowdy collection:
$collection = collect([
    ['product'’ - wait, we're not at a bar!],
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 80],
    ['product' => 'Bookcase', 'price' => 150],
    ['product' => 'Pencil', 'price' => 30],
    ['product' => 'Door', 'price' => 100],
]);

Now, we want to check who's got the right price tag to get in:
$filtered = $collection->whereBetween('price', [100, 200]);

And voila! The list of those who made it past our pricey doorman:
$filtered->all();

/*
    [
        ['product' => 'Desk', 'price' => 200],
        ['product' => 'Bookcase', 'price' => 150],
        ['product' => 'Door', 'price' => 100],
    ]
*/
```

In other words, if you're looking for items that are neither too cheap nor too expensive, but just right (like Goldilocks), `whereBetween()` is your new best friend!

 Ahoy there, matey! Buckle up as we dive into the swashbuckling world of Laravel collections with the `whereIn()` method! This pirate's treasure map of a function removes any scallywags (elements) from the collection that don't have a particular booty (item value) hidden within the given chest (array).

```php
Let's set sail with a collection o' goodies:
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
    ['product' => 'Bookcase', 'price' => 150],
    ['product' => 'Door', 'price' => 100],
]);

Next, let's filter our booty chest with the `whereIn()`:
$filtered = $collection->whereIn('price', [150, 200]);

Finally, we set anchor and show off our loot:
$filtered->all();

/*
    Hoist the Jolly Roger, ye landlubbers! Here be the filtered goods:
*/
[
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Bookcase', 'price' => 150],
]
```

Now, this `whereIn()` method uses "loose" comparisons when examining the booty values. That means a stringy integer will be considered equal to an honest-to-goodness integer with the same worth. If you're seeking "strict" comparisons to ensure yer booty ain't mixed up, then set sail for the [whereInStrict](#method-whereinstrict) method!

<a name="method-whereinstrict"></a>
Arr matey, ye be lookin' for a "whereInStrict" method! This be the way to filter yer booty using "strict" comparisons. It's ideal if ye don't want any mix-ups between gold doubloons and their stringy counterparts.

So there ye have it, me hearties! A fun yet informative guide to Laravel's `whereIn()` method for filtering collections like a proper pirate. Yarr!

 Ahoy there, Laravel coders! Let's dive into the world of strict comparison with our trusty old pal, `whereInStrict()`!

Now, you might be wondering, "What on Earth is 'strict' comparison, Captain Obvious?" Well buckle up, because it's about to get exciting!

Imagine you're at a fancy dinner party and everyone's trying to fit in. That's just like `whereIn()`. But when you want to make sure they're the real deal, not impostors, you'd need strict comparison—that's where our `whereInStrict()` method comes into play!

This method works pretty much the same as our classic `whereIn()`, but with one key difference: all values are compared using "strict" comparisons, meaning they have to be an exact match. It's like a picky party host who only lets in guests that match their invitation perfectly.

So next time you need to ensure your records are the genuine article and not some phony look-alikes, give `whereInStrict()` a spin! It'll sort out the impostors and leave you with nothing but pure, authentic data—and isn't that just music to your eyes? 🎶🎹🎉

 Ahoy there, coders! π Let's dive into the magical world of Laravel collections and meet our new friend: `whereInstanceOf()` π. This method is like a bouncer at an exclusive class party, only letting in objects that match a specific invite list (class type).

So, imagine you're running a club for both Users and Posts, but you want to have a special VIP area just for Users. Hereβs how our friendly bouncer helps:

```php
use App\Models\User;
use App\Models\Post;

// Create a mixed group of Users and Posts
$collection = collect([new User, new User, new Post]);

// Our bouncer checks the IDs at the door (class type) and lets only Users in
$filtered = $collection->whereInstanceOf(User::class);

// And voila! Only Users make it to the VIP area
$filtered->all();

// [App\Models\User, App\Models\User]
```

Now you know how to handle the rowdiest crowds with Laravel's `whereInstanceOf()`. Party on, coder! πβ¨

 Ah, the `whereNotBetween()` method! It's like a bouncer at an exclusive price range party, but instead of keeping out unwanted guests, it keeps out items that dare to step outside the pricey VIP zone.

Imagine you're hosting a soiree for high-end furniture (we're talking Louis XIV here) and you don't want your humble abode to be overrun by plebeian pencils or common chairs. That's where our friend `whereNotBetween()` comes in.

```php
$furniture_collection = collect([
    ['item' => 'Louis XIV Desk', 'price' => 2000],
    ['item' => 'Gilded Chair', 'price' => 5000],
    ['item' => 'Marble Bookcase', 'price' => 3000],
    ['item' => 'Pencil', 'price' => 1],
    ['item' => 'Door', 'price' => 200],
]);

$exclusive_party = $furniture_collection->whereNotBetween('price', [1999, 5001]);

$exclusive_party->all();

/*
    [
        ['item' => 'Louis XIV Desk', 'price' => 2000],
        ['item' => 'Gilded Chair', 'price' => 5000],
        ['item' => 'Marble Bookcase', 'price' => 3000],
    ]
*/
```

Now, you can rest assured that your posh party will only be attended by the most luxurious of items. Cheers to exclusive price range filtration! 🥂🎉

 Ah, the `whereNotIn` method! The unsung hero of the collection party, kicking out the riffraff that just don't fit in the given array. It's like bouncers at a club, but for data instead of rowdy partygoers. 🎉💃

Here's a little scenario: Imagine you've got a wild collection of items, each with a product and price. But alas, you're only interested in the items that aren't as expensive as 150 or 200 bucks. Enter our hero, `whereNotIn`!

```php
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
    ['product' => 'Bookcase', 'price' => 150],
    ['product' => 'Door', 'price' => 100],
]);
```

Now, we can filter this collection like a boss:

```php
$cheapies = $collection->whereNotIn('price', [150, 200]);
```

And voila! You've got yourself a more affordable collection:

```php
$cheapies->all();
/*
    [
        ['product' => 'Chair', 'price' => 100],
        ['product' => 'Door', 'price' => 100],
    ]
*/
```

But wait, there's more! `whereNotIn` is a loose cannon, it compares item values like old pals, even if one's a string and the other's an integer. If you want strict comparisons, give our friend [whereNotInStrict](#method-wherenotinstrict) a try! 🕺💃

<a name="method-wherenotinstrict"></a>
Now, that's what I call a filtering fiesta! Keep on learning, folks! 🚀🌟

 Ahoy there, code pirates! Today we're going to set sail on an enlightening journey through the shark-infested waters of Laravel's database querying. Buckle up, because things are about to get...strict!

#### `whereNotInStrict()` {.collection-method}

Ah yes, this dashing method is like its less formal counterpart, `whereNotIn`, but with a touch of rigor mortis. You see, it performs comparisons using "strict" evaluations - no jokes, no shenanigans, just straight-up equality checks.

Now, imagine you're at a swanky soiree filled with the high society of data types, and you've got to find all those folks who aren't dressed as pirates. That's exactly what `whereNotInStrict()` does! It'll help you fetch records that don't match any of the provided values in a no-nonsense manner.

Remember, a pirate's life is one of precision and adherence to the rules. Use this method wisely, me hearties, and may your database queries always return the treasure you seek! 🏴‍☠️🎉

 Ahoy there, shipmates! Let's dive into the enchanting world of Laravel collections, shall we? Today, we're going to learn about a method that'll make your collection as lively as a jolly pirate, the ever-entertaining `whereNotNull()`!

Imagine you've got a ship full of treasure maps (our beloved arrays), but some maps are missing their X marks the spot (the dreaded null values). Well, fear not! The mighty `whereNotNull()` method will help us filter out these lackluster maps and keep only the ones that are as crystal-clear as Captain Morgan's rum!

Take a gander at this swashbuckling example:

```php
$pirateTreasureMaps = collect([
    ['mapName' => 'Desk'],
    ['mapName' => null], // Arrgh, this map doesn't lead to any treasure!
    ['mapName' => 'Bookcase'],
    ['mapName' => 0], // Aye, even numbers can't help us find treasure here!
    ['mapName' => ''], // An empty parchment... not even good for starting a campfire!
]);

$filteredMaps = $pirateTreasureMaps->whereNotNull('mapName');

$filteredMaps->all();

/*
    [
        ['mapName' => 'Desk'],
        ['mapName' => 'Bookcase'],
        ['mapName' => 0],
        ['mapName' => ''],
    ]
*/
```

As you can see, our trusty `whereNotNull()` method has returned only the maps with non-null values for the key `'mapName'`. But wait! Our treasure hunt still needs more work. Let's remove those non-treasure items from our collection to make it truly sparkle:

```php
$cleanTreasureMaps = $filteredMaps->reject(function ($map) {
    return in_array($map['mapName'], ['0', '']);
});

/*
    [
        ['mapName' => 'Desk'],
        ['mapName' => 'Bookcase']
    ]
*/
```

And there we have it! We now have a collection filled with only the most valuable treasure maps, ready to lead us to the pirate gold. Hoist the Jolly Roger and set sail, mates! With the `whereNotNull()` method, our quest for Laravel treasures is well on its way!

 Ahoy there, coders! Steer clear of the choppy seas of data and dive into the calmer waters of Laravel collections with our trusty friend - `whereNull()`. This nautical navigational aid helps you find items in your collection where a specific key is as empty as a pirate's parrot's nest, i.e., `null`.

To better illustrate its usefulness, let's imagine we're on a treasure hunt for the missing names of our furniture. Our `$collection` is filled with various items:

```php
$collection = collect([
    ['name' => 'Desk'],
    ['name' => null],  // Here be dragons... or rather, an empty name.
    ['name' => 'Bookcase'],
    ['name' => 0],      // Number of steps to the treasure? More like number of furniture pieces left.
    ['name' => '']       // An echo in a cave, as mysterious as our missing furniture name.
]);
```

Now that we have our crew (collection) and the map (keys), it's time to find the names with no treasure (`null`) using `whereNull()`.

```php
$filtered = $collection->whereNull('name');
```

Sail onward, brave seafarer! To see our treasured results:

```php
$filtered->all();
```

Prepare to be dazzled by the sight of our lonely treasure chest (array):

```javascript
[
    ['name' => null],  // Treasure found, matey! A name as empty as a pirate's parrot's nest.
]
```

So hoist the sails high and set course for this valuable `whereNull()` method. It'll help you navigate through collections like a seasoned sailor in search of buried data treasure!

 Ahoy there, shipmate! Sail the seas of code with our trusty `wrap()` method! This nautical navigator transforms plain old values into a bountiful collection when needed. Don't let its simplicity deceive you; it's more versatile than Blackbeard's parrot! 

```php
*Treasure chest full of pearls in mind*

use Illuminate\Support\Collection;

$collection = Collection::wrap('John Doe');

$collection->all(); // Treasure unveiled: ['John Doe']

$collection = Collection::wrap(['John Doe']);

$collection->all(); // Treasure unveiled: ['John Doe']

$collection = Collection::wrap(collect('John Doe'));

$collection->all(); // Treasure unveiled: ['John Doe']
```

So, if you find yourself sailing through variables and need to convert a single pirate or a crew into a treasure chest of collections, our `wrap()` method is the buccaneer's best friend! 🏴‍☠️🎉

 Alright, buckle up, we're about to dive into the enchanting world of Laravel collections, where magic beans become array mergers!

Meet the `zip()` method, your new best friend in town (or should we say, dimension?). It's like a cosmic matchmaker, pairing up values from an array with your beloved collection at their corresponding index.

Here's a quick demonstration:

```php
$collection = collect(['Chair', 'Desk']);

// Imagine a magical zipping wand appearing here
$zipped = $collection->zip([100, 200]);

// And then the wand vanishing, leaving behind a beautiful array of pairs
$zipped->all();

// [['Chair', 100], ['Desk', 200]]
```

Now you can impress your friends with this magical trick! Just be careful not to let it out in a crowded room, or you might find yourself surrounded by curious collection owners asking for your secret.

 Alright, buckle up, Laravel enthusiasts! Let's dive into the world of Collections, where we're not just serving up data, but also whipping it into shape with some highfalutin' shortcuts known as Higher Order Messages (HOMs). Think of them as the secret sauce that brings out the flavor in your data collections.

Here's a list of HOMs you can use to impress your friends and family: [average](#method-average), [avg](#method-avg), [contains](#method-contains), [each](#method-each), [every](#method-every), [filter](#method-filter), [first](#method-first), [flatMap](#method-flatmap), [groupBy](#method-groupby), [keyBy](#method-keyby), [map](#method-map), [max](#method-max), [min](#method-min), [partition](#method-partition), [reject](#method-reject), [skipUntil](#method-skipuntil), [skipWhile](#method-skipwhile), [some](#method-some), [sortBy](#method-sortby), [sortByDesc](#method-sortbydesc), [sum](#method-sum), [takeUntil](#method-takeuntil), [takeWhile](#method-takewhile), and [unique](#method-unique).

To use these HOMs, just think of a collection instance as your favorite popcorn bag, and the HOM you want to use is the extra butter. You can access them by simply reaching in (not literally, of course) – each HOM acts as a dynamic property on the collection! For example, let's use the `each` HOM to give our users the VIP treatment:

```php
use App\Models\User;

$users = User::where('votes', '>', 500)->get();

$users->each->markAsVip(); // Now all users with more than 500 votes get treated like royalty!
```

And if you're looking to tally up the total number of "votes" for a group of users, just use the `sum` HOM:

```php
$users = User::where('group', 'Development')->get();

return $users->sum->votes; // A single number that tells you everything you need to know about these developers' dedication!
```

So, go ahead and whip your data collections into shape with Higher Order Messages – it's like giving them a makeover without having to worry about which shade of butterscotch goes best with their data!

 Alright, buckle up, coding cowpokes! Welcome to Laravel's corral of Lazy Collections, where herding data becomes a breeze! You know, just like when Old MacDonald had a hundred chickens but couldn't bear the thought of counting them one by one. So he invented a way to do it with a lot less effort—that's what we're doing here!

<a name="lazy-collection"></a>
### What is a Lazy Collection?

If you've ever felt like your database queries were as slow as a tortoise in a donkey race, then our Lazy Collections are just the wrangling tool you need. These ain't your average collections that load all their data upfront—these bad boys only fetch what they absolutely have to, making them faster than a cheetah on a caffeine binge!

<a name="lazy-collection-methods"></a>
### Methods provided by Lazy Collections

Our Lazy Collections provide a whole slew of methods that'll make your database queries as slick as a greased prairie dog. Here are some of our favorite wrangling tools:

* `tally()`: Count those critters without having to catch 'em all! This method lets you count the number of items in a collection, just like counting the hairs on your horse's mane—but much easier.

* `map()`: Transform your data into new and improved versions, like taking a mule and turning it into a racehorse. It applies a given function to each item in the collection, so you can change, filter, or sort your data with ease.

* `filter()`: Sift through the haystack to find that needle—or, more accurately, sift through your collection to find only the items that match a certain condition.

<a name="lazy-collection-chaining"></a>
### Chaining Lazy Collections

Now, here's where things get really interesting: You can chain Lazy Collections together like a never-ending rodeo of data wrangling! Each Lazy Collection method returns another Lazy Collection, so you can keep piping your data through various transformations and filters until it's just right. This makes your code as easy to read as a cowboy's wanted poster—simple, concise, and to the point.

<a name="lazy-collection-eager-loading"></a>
### Eager Loading with Lazy Collections

Ever found yourself stuck in a situation where you needed to fetch related data but didn't want to slow down your main query? Well, we've got just the trick for that! With Lazy Collections, you can eagerly load related models without having to wait for them to be fetched individually. Just use the `load()` method on a Lazy Collection, and it'll handle everything else for you. It's like a cowboy's trusty sidekick, always ready to help out when needed!

<a name="lazy-collection-eager-loading-example"></a>
### Eager Loading Example

```php
$users = App\User::with('posts')->get();

// Now you can access the posts related to each user, without having to fetch them individually!
foreach ($users as $user) {
    foreach ($user->posts as $post) {
        echo $post->title;
    }
}
```
In this example, we're eagerly loading the `App\Post` model for each `App\User`. This way, when you access the `posts` property of a user, all related posts are already loaded and ready to go!

So there ya have it, partner! Lazy Collections are like a trusty steed in your coding adventures—faster, more efficient, and always by your side. Saddle up and give 'em a whirl in your next project!

 Ahoy there, Laravel coders! Prepare to embark on a memory-saving adventure with Laravel's LazyCollections! 🌴🐠🦈

Before we dive in, let me sound the alarm bell - make sure you're familiar with PHP's [generators](https://www.php.net/manual/en/language.generators.overview.php). They're the lifeblood of LazyCollections!

Now, imagine your application is tasked with processing a mammoth multi-gigabyte log file and you want to use Laravel's collection methods to parse those logs without sacrificing your server's sanity (or RAM). With LazyCollections, you can work with only a tiny part of the file in memory at any given time! 🤯

```php
use App\Models\LogEntry;
use Illuminate\Support\LazyCollection;

LazyCollection::make(function () {
    // Open 'log.txt' and slurp up those logs like a sea turtle with a straw!
    // (But please, don't actually do this in production)
})->chunk(4)->map(function (array $lines) {
    return LogEntry::fromLines($lines);
})->each(function (LogEntry $logEntry) {
    // Process the log entry...
});
```

Now, imagine you've got 10,000 Eloquent models to iterate through. Using traditional Laravel collections would mean loading all 10,000 models into memory at once - which is a tad excessive for a tea party, don't you think? 🙀

But fear not! The query builder's `cursor` method returns a LazyCollection instance. This means you can still run a single query against the database and only keep one Eloquent model in memory at a time! 🥳

```php
use App\Models\User;

$users = User::cursor()->filter(function (User $user) {
    return $user->id > 500;
});

// Now, instead of popping all the users out at once like a clown's car, we can iterate through them one-by-one!
foreach ($users as $user) {
    echo $user->id;
}
```

Happy LazyCollectioning! 🎉🎈🌈

 ### Unleashing the Slothful Troops!

Ready to assemble your band of lazy superheroes? Here's how you summon them in Laravel-land!

To conjure up a Lazy Collection instance, you gotta pass a PHP wizard (err... generator function) to the collection's `make_em_lazy` ritual:

```php
use Illuminate\Support\LazyCollection;

// Time to summon the lazy troops!
LazyCollection::make_em_lazy(function () {
    $log_file = 'log.txt'; // Not a magical scroll, but close enough
    $magical_handle = fopen($log_file, 'r');

    while (not reading Harry Potter's prophecy) { // Just checking, you know...
        $line = fgets($magical_handle);
        if ($line !== false) {
            yield the line to the troops;
        }
    }

    // Don't forget to close the magical handle when done!
    fclose($magical_handle);
});
```

<a name="the-enumerable-contract"></a>
### The Enumerable Contract (Because even lazy superheroes need rules)

Now that your Lazy Collection is assembled, it follows the Enumerable Contract. This means you can chain methods like a pro, but remember to be gentle with them - they're the slow-moving types!

```php
$lazyLines = LazyCollection::make_em_lazy(function () {
    // Your summoning ritual here...
});

// You can chain methods like a pro, but remember: slow and steady wins the race
$firstLine = $lazyLines->first();
$longestLine = $lazyLines->maxBy(str_word_count);
```

Enjoy your new lazy friends! They might move slowly, but they're worth the wait!

 ### The Eager-To-Please Partnership: The Enumerable Contract!

In a relationship reminiscent of a power couple, almost every dance move available at the swanky `Collection` ball is also being twirled by the charming `LazyCollection` on the dance floor. Both of these dapper gents are bound by the unbreakable bond of the `Illuminate\Support\Enumerable` contract - a glamorous, high-society wedding vow that defines a list of posh methods they're both obligated to perform:

<style>
    .collection-method-list > p {
        columns: 10.8em 3; -moz-columns: 10.8em 3; -webkit-columns: 10.8em 3;
    }

    .collection-method-list a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<div class="collection-method-list" markdown="1">

[all](#method-all)
[average](#method-average)
[avg](#method-avg)
[chunk](#method-chunk)
[chunkWhile](#method-chunkwhile)
[collapse](#method-collapse)
[collect](#method-collect)
[combine](#method-combine)
[concat](#method-concat)
[contains](#method-contains)
[containsStrict](#method-containsstrict)
[count](#method-count)
[countBy](#method-countBy)
[crossJoin](#method-crossjoin)
[dd](#method-dd)
[diff](#method-diff)
[diffAssoc](#method-diffassoc)
[diffKeys](#method-diffkeys)
[dump](#method-dump)
[duplicates](#method-duplicates)
[duplicatesStrict](#method-duplicatesstrict)
[each](#method-each)
[eachSpread](#method-eachspread)
[every](#method-every)
[except](#method-except)
[filter](#method-filter)
[first](#method-first)
[firstOrFail](#method-first-or-fail)
[firstWhere](#method-first-where)
[flatMap](#method-flatmap)
[flatten](#method-flatten)
[flip](#method-flip)
[forPage](#method-forpage)
[get](#method-get)
[groupBy](#method-groupby)
[has](#method-has)
[implode](#method-implode)
[intersect](#method-intersect)
[intersectAssoc](#method-intersectAssoc)
[intersectByKeys](#method-intersectbykeys)
[isEmpty](#method-isempty)
[isNotEmpty](#method-isnotempty)
[join](#method-join)
[keyBy](#method-keyby)
[keys](#method-keys)
[last](#method-last)
[macro](#method-macro)
[make](#method-make)
[map](#method-map)
[mapInto](#method-mapinto)
[mapSpread](#method-mapspread)
[mapToGroups](#method-maptogroups)
[mapWithKeys](#method-mapwithkeys)
[max](#method-max)
[median](#method-median)
[merge](#method-merge)
[mergeRecursive](#method-mergerecursive)
[min](#method-min)
[mode](#method-mode)
[nth](#method-nth)
[only](#method-only)
[pad](#method-pad)
[partition](#method-partition)
[pipe](#method-pipe)
[pluck](#method-pluck)
[random](#method-random)
[reduce](#method-reduce)
[reject](#method-reject)
[replace](#method-replace)
[replaceRecursive](#method-replacerecursive)
[reverse](#method-reverse)
[search](#method-search)
[shuffle](#method-shuffle)
[skip](#method-skip)
[slice](#method-slice)
[sole](#method-sole)
[some](#method-some)
[sort](#method-sort)
[sortBy](#method-sortby)
[sortByDesc](#method-sortbydesc)
[sortKeys](#method-sortkeys)
[sortKeysDesc](#method-sortkeysdesc)
[split](#method-split)
[sum](#method-sum)
[take](#method-take)
[tap](#method-tap)
[times](#method-times)
[toArray](#method-toarray)
[toJson](#method-tojson)
[union](#method-union)
[unique](#method-unique)
[uniqueStrict](#method-uniquestrict)
[unless](#method-unless)
[unlessEmpty](#method-unlessempty)
[unlessNotEmpty](#method-unlessnotempty)
[unwrap](#method-unwrap)
[values](#method-values)
[when](#method-when)
[whenEmpty](#method-whenempty)
[whenNotEmpty](#method-whennotempty)
[where](#method-where)
[whereStrict](#method-wherestrict)
[whereBetween](#method-wherebetween)
[whereIn](#method-wherein)
[whereInStrict](#method-whereinstrict)
[whereInstanceOf](#method-whereinstanceof)
[whereNotBetween](#method-wherenotbetween)
[whereNotIn](#method-wherenotin)
[whereNotInStrict](#method-wherenotinstrict)
[wrap](#method-wrap)
[zip](#method-zip)

</div>

> [!CAUTION]
> Be warned, methods that change the collection's wardrobe (like `shift`, `pop`, `prepend` etc.) are strictly off-limits for the elegant and refined `LazyCollection`.

<a name="lazy-collection-methods"></a>

Now that you've got a whirlwind tour of these sophisticated moves, it's time to get on the dance floor and put them into practice!

 ### The Slacker's Toolkit: LazyCollection Methods! 🚀💤

You've mastered the basics, but why rush when you can procrastinate with style? Meet your new best friend, the `LazyCollection` class - your ticket to a leisurely programming journey!

While everyone else is busily implementing the methods from the `Enumerable` contract, you can sit back and enjoy some well-deserved relaxation. Here's what sets us apart:

<a name="method-takeUntilTimeout"></a>

#### 🕰️ Time-Out Take (takeUntilTimeout)

When you're stuck in a never-ending loop of boredom and need an escape, this method will come to your rescue! `takeUntilTimeout` breaks the monotony by letting you grab elements until a certain condition is met... or until your boss catches you napping. Either way, it's a win-win! 😴🔥

Just remember: laziness has its limits; eventually, you'll have to produce some work (but hey, who said we'd tell you that?). Happy procrastinating, and may the force of procrastination be with you! 💪💤🚀

 Ahoy there, Laravel matey! Buckle up and let's dive into the `takeUntilTimeout()` method, a sea shanty of code that'll return you a new lazy collection, akin to a pirate's treasure chest, but with less gold and more data!

This here method will spill out values from your collection until it hits a certain time limit—a bit like a sand timer, but in digital form. Once the time's up, it'll cease and desist from enumerating any further:

```php
$lazyPirateBooty = LazyCollection::times(INF) // Infinite treasure, ye say?
    ->takeUntilTimeout(now()->addMinutes(60)); // Set the time limit to an hour, just in case.

$lazyPirateBooty->each(function (int $goldCoin) {
    echo "Arrr, $goldCoin gold coins found!"; // Replace 'echo' with 'dump' if you're feeling fancy

    sleep(1); // Mimic the time it takes to dig up gold coins. Just remember to watch out for the giant squid!
});
```

To better understand its application, imagine this: ye be sailing an invoice-submitting vessel and ye need to process invoices from the database using a cursor (like a pirate's compass). Fear not, `takeUntilTimeout()` is here to help! Define a [scheduled task](/docs/{{version}}/scheduling) that runs every 15 minutes, but only processes invoices for a maximum of 14 minutes:

```php
use App\Models\Invoice;
use Illuminate\Support\Carbon;

Invoice::pending()->cursor() // Set sail with the cursor!
    ->takeUntilTimeout(
        Carbon::createFromTimestamp(LARAVEL_START)->addMinutes(14)
    ) // Set the time limit to 14 minutes
    ->each(fn (Invoice $invoice) => $invoice->submit()); // Hoist the Jolly Roger and submit those invoices!
```

Yarr, now ye be all set for some timed treasure hunting with `takeUntilTimeout()`! Happy sailing! 🌺

 Ah, the `tapEach()`! It's like a shy wallflower at a dance, unwilling to join the party until it's personally invited. Unlike its boisterous counterpart `each`, who bursts onto the scene calling callbacks for every single item in a collection the moment the music starts, our reserved friend `tapEach` prefers a more intimate and controlled approach.

It's as if they say, "DearCallback, only when I've carefully pulled each item out of the collection one by one, will I introduce you." Here's a little dance routine to illustrate:

```php
// The dance floor is empty, no introductions yet...
$lazyCollection = LazyCollection::times(INF)->tapEach(function (int $value) {
    // Think of it as the shy wallflower whispering secrets to DearCallback
    echo "DearCallback, meet number: {$value}";
});

// Three items are called upon the dance floor...
$array = $lazyCollection->take(3)->all();

// 1
// 2
// 3
```

And thus, our introverted but informative friend `tapEach` ensures that each item in a collection gets its moment to shine, while DearCallback gets the inside scoop without being overwhelmed before the dance even begins!

 Ahoy there, shipmates! Brace yourself for a splendid tale of throttling the good old Lazy Collection in Laravel!

#### `throttle()` {.collection-method}

You see, our `throttle` method is akin to a trusty sea captain steering your collection through choppy waters – ensuring that each value emerges only after the specified number of seconds have passed! It's an indispensable tool for navigating those tricky situations where you might be interacting with those pesky external APIs that demand a fair rate limit on incoming requests:

```php
use App\Models\Swabbie; // Oh, the nautical names we use!

Swabbie::where('is_vip', true)
    ->getCurlyQ() // We're sailors, don't ask for cursors!
    ->throttle(seconds: 1) // Time each swabbie by the second!
    ->each(function (Swabbie $swabbie) {
        // Call distant shores... err... APIs!
    });
```

Now, don't be fooled by its simple appearance – this method is a powerful ally in your quest for smooth sailing with those notoriously fickle APIs!

 Ah, the `remember()` method! It's like a memory-aid for your Laravel collections - a digital version of those sticky notes you find on the fridge, but way more efficient and less prone to being eaten by your cat.

This magical function creates a new lazy collection that remembers the values it has already enumerated. It's like a selective amnesiac who only forgets things he's already remembered - a peculiar superpower, we must say!

Here's an example to tickle your tech-nerve:

```php
// No query yet, just setting up the scene...
$users = User::cursor()->remember(); // Think of it as introducing yourself to a forgetful friend.

// Cue the drama! The query is executed...
// The first 5 users are hydrated from the database (a fancy term for 'pouring them into our collection')...
$users->take(5)->all(); // Think of it as asking your amnesiac friend to serve you the first five names he's remembered.

// Here's where things get interesting! The first 5 users come from the collection's cache (a secret cupboard in our memory closet)...
// The rest are hydrated from the database again...
$users->take(20)->all(); // Think of it as asking your amnesiac friend to serve you the next twenty names he's just remembered.
```

So, next time you find yourself dealing with a collection that suffers from short-term memory loss, remember (pun intended) to use this handy method! After all, who wouldn't want a digital sidekick with a peculiar superpower?

 #### `withHeartbeat()` 🕺🏻{.collection-method}

In a world where collections just want to chill and take it easy, sometimes you need to give them a little push with our `withHeartbeat` method! This magical technique lets your lazy collection take a breather but still keeps it pumping by executing a callback at regular intervals. Perfect for those marathon operations that require periodic maintenance tasks like extending locks or sending progress reports:

```php
use Carbon\CarbonInterval;
use Illuminate\Support\Facades\Cache;

The eternal lock, 'generate-reports', is yours for a cool 5 minutes, thanks to Cache:

$lock = Cache::lock('generate-reports', seconds: 60 * 5);

If this lock ain't already taken, it's party time! Let's get this lazy collection grooving:

if ($lock->get()) {
    We got a doozy here, so let's handle it with kid gloves. No pressure, but don't drop the ball! 🤕

    try {
        Report::where('status', 'pending')
            ->lazy()
            ->withHeartbeat( // <-- 🔥 Time to start that heartbeat! 🔥
                CarbonInterval::minutes(4),
                fn () => $lock->extend(CarbonInterval::minutes(5)) // <-- 🔓 Keep extending this lock! 🔓
            )
            ->each(fn ($report) => $report->process()); // Let's dance, reports! 💃🏻🕺🏻
    } finally {
        $lock->release(); // Remember to set it free when you're done, no hard feelings. 😉
    }
}
```