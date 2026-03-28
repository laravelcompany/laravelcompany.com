 ## Eloquent: The Swanky Buffet of Data! 🎉🍽️

Welcome, data dabblers and query connoisseurs! Strap on your data gloves, because we're about to dive into the world of Eloquent Collections. It's like a swanky buffet of data, and you're the VIP guest. Let's tuck in! 🥘

<a name="available-methods"></a>

## The Buffet Platter: Available Methods

Eloquent Collections come loaded with scrumptious methods to manipulate your data like a pro. Here are some of our finest dishes:

1. **`map()`**: This is the data transformation station, where you can apply functions to every item on your platter. Get ready for a taste explosion!
2. `filter()`**: If you're only interested in certain items, this method plays the food snob and only serves up what you fancy.
3. **`sortBy()`**: When you want to arrange your data like a well-organized pantry, this is your go-to method. It's like hiring a personal data butler!
4. `pluck()`**: This one grabs a specific data piece from every dish and puts it in a fancy bowl for easy access. Perfect for when you need just the calories (or IDs, if we're being technical).
5. **`groupBy()`**: If you've ever wanted to organize your leftovers by course, this method is like having your own personal data waiter. It groups your items together based on a common trait.
6. `sum()`, `min()`, and `max()`**: These methods are like the nutritional facts of your data—they tell you the sum total, the lowest value, and the highest value, respectively. Because who doesn't love a good data calorie count?
7. **`contains()`**: This one checks if a specific item (or trait) is hidden among all the others on the platter. It's like playing "Where's Waldo?" with your data!
8. `reject()`**: If you want to banish certain items from the buffet, this method will do the dirty work for you. Just be careful not to offend any data dishes!
9. **`first()`** and **`last()`**: These methods serve up the first or last item on your platter like a well-trained waiter. Perfect for when you're craving an appetizer or dessert!
10. `shuffle()`**: When you want to add some surprise and excitement to your data, this method mixes everything up like a magician. Just remember: no peeking before the big reveal!

<a name="custom-collections"></a>

## The Secret Recipe: Custom Collections

If you're feeling adventurous and want to create your own data dishes, Eloquent Collections let you do just that with custom methods. It's like having your very own data kitchen! To whip up a custom method, follow these easy steps:

1. Override the `boot()` method in your model.
2. Define your custom method within this function.
3. Use the method on your Eloquent Collection like you would any other built-in method.
4. Serve up your delicious data creation and impress your friends (or enemies, we're not here to judge)!

And there you have it—Eloquent Collections in all their glory! Now go forth and conquer the world of data manipulation with style and flair. Bon appétit! 🥳✨

 ## Greetings, Future Code Wranglers!

Welcome to the wild world of Laravel's Eloquent Collection – where database records are as lively and playful as baby pandas! But fear not, for these little bundles of joy come equipped with a plethora of tricks up their sleeves (or should I say, databases?)

All right, enough with the cutesy stuff. Let's dive into the Eloquent methods that magically transform more than one model result into enchanting instances of the `Illuminate\Database\Eloquent\Collection` class. You can summon these by using the legendary `get` method or by accessing them via a relationship – it's like having your very own army of models at your beck and call!

Remember, this collection object is not just a humble apprentice, but rather a mighty knight in shining armor that extends Laravel's very own [base collection](/docs/{{version}}/collections). That means it inherited all the helpful methods you can imagine for effortlessly wielding the underlying array of Eloquent models – just be sure to brush up on those wondrous skills by checking out the Laravel collection documentation!

Now, let's talk about the fun part: Iterating over collections. It's as easy as walking through a park with your favorite pet unicorn (or, for the less fantastical among us, looping over a simple PHP array). Take a peek at this example below:

```php
use App\Models\User;

$users = User::where('active', 1)->get();

foreach ($users as $user) {
    echo $user->name; // Just imagine a unicorn farting out user names...
}
```

But wait, there's more! Eloquent Collections are not just ordinary arrays – they have the power of a sorcerer, exposing map/reduce operations that can be chained together using an intuitive interface. Imagine eliminating all inactive models and then plucking out their first names:

```php
$names = User::all()->reject(function (User $user) {
    return $user->active === false;
})->map(function (User $user) {
    return $user->name;
});
```

Oh, and did I mention that collections also double as iterators? Yeah, it's like having a magic wand that can walk through an array for you – now isn't that just the bee's knees?

 Alright, buckle up, database cowboys! Let's ride the Eloquent Collection rollercoaster together. You know, where every method drop is another chance to wrangle your data into submission. But, remember, this ain't your ordinary herd of longhorns - we're dealing with a fancy new instance of an Eloquent collection here!

Most of our trusted methods, like `collapse`, `flatten`, `flip`, `keys`, `pluck`, and `zip`, will saddle you up with a base collection (read: not-so-Eloquent) instance. But don't worry, they still got them cowboy charm!

Now, if a `map` operation leaves you with a collection that's light on Eloquent models, it'll shuffle off its Eloquent boots and morph into a humble base collection instance - just like how a grizzled old ranch hand sheds his dusty chaps at the end of the day.

So, grab your lasso, let's round up some data and make it dance to our tune!

 Ahoy there, Captain! You've stumbled upon the swashbuckling treasure trove of methods that your Eloquent collections have been missing all along. All these booty is inherited from the mighty Laravel collection object, making your models as powerful as a pirate with a map to buried gold!

Now, let us dive into the plunder! The `Illuminate\Database\Eloquent\Collection` class has not only that sweet base collection swag but also some extra methods for managing your model collections like a pro. Most of these methods will return a new Eloquent Collection, but there are a few buccaneers that'll bring you an `Illuminate\Support\Collection`.

Here be the list of your new best friends (or foes, depending on how you look at it):

[Arrr-ray](#method-append)
[Containment Check](#method-contains)
[Diffy McDifferson](#method-diff)
[Excepter](#method-except)
[Finder](#method-find)
[Find or Perish](#method-find-or-fail)
[Fresh Start](#method-fresh)
[Intersection](#method-intersect)
[Loader](#method-load)
[Missing Persons Bureau](#method-loadMissing)
[Model Keys Unlocker](#method-modelKeys)
[Invisibility Cloak Maker](#method-makeVisible)
[Stealth Mode Activator](#method-makeHidden)
[Partial Visibility](#method-mergeVisible)
[Partial Invisibility](#method-mergeHidden)
[Pick 'em](#method-only)
[Partitioner](#method-partition)
[Appends Ahoy!](#method-setAppends)
[Show Only the Visible](#method-setVisible)
[Hide and Seek](#method-setHidden)
[ToQuery Transformer](#method-toquery)
[Unique One-Eyed Patch](#method-unique)
[No Appends Allowed](#method-withoutAppends)

Each of these methods has been meticulously crafted to help you navigate the high seas of database management with ease! So hoist the sails and set sail for success, matey!

<a name="method-append"></a>
#### Arrray (`append()`)

Adds a new item or items to the collection.
```php
$collection->append($item); // Add one item
$collection->append([$items]); // Add multiple items as an array
```

<a name="method-contains"></a>
#### Containment Check (`contains()`)

Checks if a specific value exists within the collection.
```php
if ($collection->contains(123)) {
    echo "Found it!";
}
```

<a name="method-diff"></a>
#### Diffy McDifferson (`diff()`)

Returns a new collection with all items in the original collection that are not present in another collection.
```php
$collectionA = $collection->diff($collectionB); // Get collection A minus collection B
```

<a name="method-except"></a>
#### Excepter (`except()`)

Returns a new collection with all items, except for the specified ones.
```php
$collectionA = $collection->except([123, 456]); // Get collection A without items 123 and 456
```

<a name="method-find"></a>
#### Finder (`find()`)

Returns the first item from the collection that matches a given closure.
```php
$item = $collection->find(function ($model) {
    return $model->name === 'Bob';
});
```

<a name="method-find-or-fail"></a>
#### Find or Perish (`findOrFail()`)

Returns the first item from the collection that matches a given closure, throwing an exception if not found.
```php
$item = $collection->findOrFail(function ($model) {
    return $model->name === 'Bob';
});
```

<a name="method-fresh"></a>
#### Fresh Start (`fresh()`)

Creates a new empty collection instance.
```php
$newCollection = $collection->fresh();
```

<a name="method-intersect"></a>
#### Intersection (`intersect()`)

Returns a new collection with all items that exist in both collections.
```php
$collectionA = $collection->intersect($collectionB); // Get items present in both collections A and B
```

<a name="method-load"></a>
#### Loader (`load()`)

Eagerly loads the relationships for all models in the collection.
```php
$collection = $query->with('relation')->get(); // Load the relation
$collection->load('relation'); // Load the relation
```

<a name="method-loadMissing"></a>
#### Missing Persons Bureau (`loadMissing()`)

Loads all missing relationships for the models in the collection.
```php
$collection = $query->with('relation')->get(); // Load the relation
$collection->loadMissing('relation'); // Load only missing relationships
```

<a name="method-modelKeys"></a>
#### Model Keys Unlocker (`modelKeys()`)

Returns an array of the primary key values for all models in the collection.
```php
$keys = $collection->modelKeys();
```

<a name="method-makeVisible"></a>
#### Invisibility Cloak Maker (`makeVisible()`)

Makes the specified attributes accessible on all models in the collection.
```php
$collection->makeVisible(['name', 'email']); // Make 'name' and 'email' visible
```

<a name="method-makeHidden"></a>
#### Stealth Mode Activator (`makeHidden()`)

Makes the specified attributes hidden on all models in the collection.
```php
$collection->makeHidden(['password']); // Hide 'password' attribute
```

<a name="method-mergeVisible"></a>
#### Partial Visibility (`mergeVisible()`)

Merges the visible attributes from another collection onto this one, making them accessible on all models in both collections.
```php
$collectionA->mergeVisible($collectionB); // Merge the visible attributes of collection B to collection A
```

<a name="method-mergeHidden"></a>
#### Partial Invisibility (`mergeHidden()`)

Merges hidden attributes from another collection onto this one, hiding them on all models in both collections.
```php
$collectionA->mergeHidden($collectionB); // Merge the hidden attributes of collection B to collection A
```

<a name="method-only"></a>
#### Pick 'em (`only()`)

Returns a new collection with only the specified attributes for all models in the original collection.
```php
$collectionA = $collection->only(['name', 'email']); // Get only 'name' and 'email' attributes from the collection
```

<a name="method-partition"></a>
#### Partitioner (`partition()`)

Partitions the collection into two groups: one that matches a given closure and another that does not.
```php
list($matches, $nonMatches) = $collection->partition(function ($model) {
    return $model->name === 'Bob';
});
```

<a name="method-setAppends"></a>
#### Appends Ahoy! (`setAppends()`)

Sets the attributes to be appended when calling the `toArray()` method on all models in the collection.
```php
$collection->setAppends(['name', 'email']); // Append 'name' and 'email' attributes
```

<a name="method-setVisible"></a>
#### Show Only the Visible (`setVisible()`)

Sets the specified attributes to be visible on all models in the collection.
```php
$collection->setVisible(['name', 'email']); // Set 'name' and 'email' as visible attributes
```

<a name="method-setHidden"></a>
#### Hide and Seek (`setHidden()`)

Sets the specified attributes to be hidden on all models in the collection.
```php
$collection->setHidden(['password']); // Set 'password' as a hidden attribute
```

<a name="method-toquery"></a>
#### ToQuery Transformer (`toQuery()`)

Converts the current Eloquent query builder instance into a raw SQL query.
```php
$sql = $collection->toSql(); // Get the raw SQL query
```

<a name="method-unique"></a>
#### Unique One-Eyed Patch (`unique()`)

Returns a new collection with unique items from the original collection.
```php
$collectionA = $collection->unique('id'); // Get a unique collection based on 'id' attribute
```

<a name="method-withoutAppends"></a>
#### No Appends Allowed (`withoutAppends()`)

Creates a new collection without the appended attributes, if any.
```php
$collectionA = $collection->withoutAppends(); // Remove appended attributes from the collection
```

 Ahoy there, Laravel coders! Let's embark on a delightful journey through the world of collections, shall we? You might have come across this charming little method called `append($attributes)`. It's not just some old sea shanty, but a magic spell that works its enchantments on your models in collection form.

The `append` method is like the captain of a ship, guiding all its crew (models) to sail with an extra bit of cargo (attribute). But instead of gold and treasure, this method carries valuable data that will be added to every model's JSON representation. You can either load it up with a single attribute or a whole array of them:

```php
$users->append('team'); // A lone sailor setting off on an adventure
$users->append(['team', 'is_admin']); // The crew, fully equipped and ready for battle!
```

Don't worry about the details – just imagine this method as a friendly pirate who helps your models keep their swashbuckling data in tip-top shape!

 Ahoy there, matey! Buckle up for an enchanting adventure into the depths of Laravel's magical collection methods! Today we're diving headfirst into the `contains()` function - a pirate's treasure map to find that elusive model instance hidden in your glorious collection.

Now, if you've got a hankering for knowing whether your precious collection harbors a specific model like Captain Jack Sparrow among his motley crew, the `contains()` method is just the thing! With it at your disposal, there'll be no more blindly stumbling around in the dark, cursing that dastardly sea of data.

To use this mystical function, all you need are two ingredients: a primary key or a model instance. That's right, ye can either call it by its number (but remember, numbers be dangerous on the high seas)...

```php
$users->contains(1); // Calling it by its number, like a true seafarer!
```

Or you could summon the model instance directly with your trusty `find()` function:

```php
$users->contains(User::find(1)); // Calling it by its name, for those who prefer to play it safe.
```

And that's a wrap! With `contains()`, you'll never lose your shipmate (model) in the vast ocean of data again! So hoist the mainsail and set sail with this swashbuckling function at your side!

 Alrighty, let's dive into the magical world of Laravel collections and a method called `diff($items)`, shall we? It's like your favorite pair of jeans that fit just right – it'll make your collection leaner by only keeping the models that aren't in the given 'collection of IDs'.

Imagine you're hosting a party, but instead of guests, you have users. You want to know who RSVPed but didn't show up. That's exactly what `diff` does for you: it compares your user collection with a list of IDs, and like a friendly bouncer, it lets you know who didn't make it (i.e., not in the given 'collection').

```php
use App\Models\User; // importing the User model because we're not stalkers, just modelers

// Let's say we have a party for users with ID 1, 2, and 3
$invited_users = User::whereIn('id', [1, 2, 3])->get(); // get the invited users

// And here comes our magical bouncer (`diff`) to see who actually showed up
$real_party_goers = $users->diff($invited_users);
```

And there you have it! `diff` makes your collection parties more exclusive and way less awkward. Now, go forth and enjoy a Laravel celebration without the party poopers! 🎉🎈🚀

 Ahoy there, code pirates! Ever found yourself in a sea of data and needed to pluck out a few specific captains without sinking the entire ship? Well, set sail for smoother waters with Laravel's swashbuckling `except($keys)` method! This dashing collection technique will return all the models that have managed to elude those pesky primary keys you pass in as arguments:

```php
$pirates = $pirates->except([17_Golden_Groats, Blackbeard, Captain_Hook]);
```

Now, your humble ships won't be weighed down by those nefarious buccaneers anymore! Keep the code clean and the treasure chests full, mates! 🏴‍☠️🌴⚓️

 Ahoy there, shipmates! Ever find yourself lost at sea trying to locate a specific model in your Laravel fleet? Fear not, for the `find()` method is here to navigate your queries like a seasoned pirate captain!

This swashbuckling technique allows you to swiftly retrieve the model with the primary key that matches the one provided. But watch out for sharks, as it'll also work if that key happens to be a model instance:

```php
Arrr matey, hoist the sails! We've got all users on board!
$users = User::all();

Now, here comes the exciting part - findin' the treasure chest!
$user = $users->find(1);
```

But what if you have a bag full of keys, ye say? Well, matey, this method can handle that too! `find()` will return all models with primary keys in your given array:

```php
Cap'n Hook just delivered a chest filled with gold keys! Let's see who owns 'em:
$users = User::all();
$keys = [1, 3, 5];
$owners = $users->find($keys); // returns users with primary keys 1, 3, and 5
```

So there ye have it! Sail the seas of Laravel with confidence knowing that `find()` will help you chart a course to your desired models every time! Yarr!

 Ah, the `findOrFail` method! It's like a digital Sherlock Holmes for your Laravel models. Instead of a violin and a deerstalker, it packs a primary key and a whole lot of smarts.

Imagine you're at a crowded party (your database), and you need to find a specific friend (a model). But there are hundreds of people, and your memory isn't what it used to be (it's a database, after all). That's where `findOrFail` comes in. It'll either gracefully bring your buddy over or, if they're not there, throw quite the dramatic tantrum, aka an `Illuminate\Database\Eloquent\ModelNotFoundException`.

So if you've got a collection of users and are hankering for user number 1, just give `findOrFail` a shout:

```php
$users = User::all(); // Invite the whole gang to the party.

$user = $users->findOrFail(1); // "Hey, can I have that guy with the number 1 tag?"
```

Just remember, if the bouncer (your database) says there's no one with that number, `findOrFail` might kick up a fuss. But hey, at least you asked for what you wanted, right?

 Ahoy there! Sailors and programmers alike, gather 'round as we delve into the nautical mysteries of Laravel's `fresh()` method! This isn't your garden-variety garden hose, but rather a magical tool that retrieves only the freshest models from the depths of your database.

Ever find yourself with stale, soggy data? No need to fret, as `fresh()` is here to make sure your models are as crisp as Captain Cook's explorer's hat!

Here's how it works:

```php
$users = $users->fresh(); // Fetch a fleet of fresh users.

$users = $users->fresh('comments'); // Not only fresh users, but their comments are spick-and-span too!
```

Imagine this method as your personal sea captain who sails out to the high seas, plucks the freshest models from the fish market, and delivers them straight to your doorstep. But remember, with great power comes great responsibility – don't let these models go to waste!

Set sail for smoother waters and fresher data by embracing Laravel's `fresh()` method today!

 Ahoy there, sailor! Steer your Laravel ship towards calmer waters with the `intersect($items)` method! This seaworthy function is a lifesaver when you're in need of finding common models that float within both your current collection and a given gangplank of models.

Imagine you've just returned from a lengthy voyage and have a treasure chest full of user IDs. But, as Captain Hook would say, "You can't keep all the fish in the sea!" So, let's use our `intersect` method to pluck out only those users that are lurking within your current `$users` collection and the one you've caught on land:

```php
use App\Models\User;

// Set sail for a new adventure with these user ID anchors
$anchors = [1, 2, 3];

// Steer your collection towards the harbor where Users reside
$users = User::whereIn('id', $anchors)->get();

// Toss the catch into the intersect method's pirate's chest
$common_pirates = $this->intersect($users);
```

And voilà! `$common_pirates` will now hold only those users who share the same destiny as those on your treasure map. Keep sailing, and happy coding!

 Alright, let's dive into the Laravel `load()` method, your secret weapon for relationship management! This magical function is like a culinary sous-chef who prepares all the side dishes before the main course even arrives at the table.

```php
$users->load(['comments', 'posts']); // Eager load relationships like a pro!

$users->load('comments.author'); // Need to know the author of each comment? No problem!

$users->load(['comments', 'posts' => fn ($query) => $query->where('active', 1)]); // Want only active posts and comments? Just tell `load()` your preferences!
```

Remember, with great power comes great responsibility (and delicious meals). Keep your collections well-seasoned with this essential Laravel spice! 🍴🚀

 Ahoy there, shipmates! Ever found yourself in a pickle, juggling relationships like a circus performer with too many balls? Fear not, for the mighty `loadMissing` method is here to save the day!

This swashbuckling technique takes care of eagerly loading the specified relationships on all models in your collection. If those relationships aren't already decked out in their Sunday best (i.e., loaded), then it's time for a costume change!

```php
$users->loadMissing(['comments', 'posts']); // Load those commentaries and posts for every user like a boss!

$users->loadMissing('comments.author'); // Dive deep into the sea of comments, find the author, and bring them ashore!

$users->loadMissing(['comments', 'posts' => fn ($query) => $query->where('active', 1)]); // Not just any posts or comments, but only those active ones! Arr matey, no time for deadwood!
```

So hoist the Jolly Roger, and let `loadMissing` be your trusty sidekick in managing relationships like a modern-day Long John Silver!

 Ahoy there! Setting sail on the high seas of Laravel code, mateys! Prepare to plunder the booty that is `modelKeys()`, a method so mighty it'll make you feel like Captain Ahab chasing after Moby Dick... but with data instead.

This enchanting function, when invoked upon your collection of models, will return the primary keys for each and every one of those shipshape models:

```php
$pirates = App\Models\Pirate::all(); // Fetch all the scurvy dogs in our database

// Now, let's find out who they are:
$primaryKeys = $pirates->modelKeys();

// [27, 41, 83, 66, 90] // In this example, each number is a unique pirate's ID
```

Now isn't that swashbucklingly convenient? Happy sailing, ye landlubbers!

 Ah, the illustrious `makeVisible`! The magical method that's like a secret decoder ring for your Laravel models. You see, in most situations, these elegant creatures tend to keep some attributes tucked away in their metaphorical drawers, shy and hidden from prying eyes. But fear not, my friend, because this method is here to pull out those secret drawers and let the world see what's been hiding!

Just imagine, you've got a collection of users (imagine a gang of rowdy superheroes), and you want everyone to know where they live or how to reach them in case of emergencies. Instead of asking each one individually to step forward and reveal their secret identities, you can simply call `makeVisible`!

```php
$users = $users->makeVisible(['address', 'phone_number']);
```

Now, all the users will proudly display their hidden attributes (or secret hideouts), allowing the world to marvel at their superpowers...er, I mean data! But remember, with great power comes great responsibility. Don't forget to hide those sensitive details when necessary, just in case you don't want Lex Luthor or anyone else snooping around.

Happy coding, superheroes!

 Ahoy there, Laravel pirates! Sail with me to the treasures of hidden attributes!

#### `makeHidden($attributes)` {.collection-method}

Ah yes, this is the magic spell that makes your models' attributes vanish faster than Captain Jack Sparrow on a rum run! The `makeHidden` method hides attributes that would normally make an appearance on each swashbuckling model in your collection:

```php
$crew = $crew->makeHidden(['secret map', 'Captain's parrot']);
```

Now when you serialize your crew, those pesky hidden secrets will stay put and not be shared with the likes of Cutler Beckett!

Want to make them visible again? Cast the opposite spell: `$crew->makeVisible(['secret map', 'Captain's parrot'])`. But remember pirates, with great power comes great responsibility – use this spell wisely and only when you don't want those hidden treasure maps falling into the wrong hands!

 Ahoy there, code wranglers! Ever found yourself in a pickle, trying to expose some hidden treasures from your data shipments? Fear not, for the mighty `mergeVisible($attributes)` method is here!

This swashbuckling function isn't just another bearded pirate; it's your knight in shining armor (or in this case, a superhero cape), helping you make additional attributes more visible while keeping existing ones in the spotlight.

So if you've got a bunch of users who've been secretly harboring middle names, don't be shy about giving them some extra attention! Just cast this enchanting spell:

```php
$pirates = $pirates->mergeVisible(['middle_name']);
```

Now, let your cat out of the bag (er, database) and share those hidden gems with the world! Arrrr, you're welcome! 🏴‍☠️🎉

 Oh, the `mergeHidden` method! It's not just a dance move from the '80s, but a magical Laravel technique that makes your code look like Houdini escaping from a straightjacket of unwanted attributes.

This enchanting spell hides additional attributes, while maintaining the mystique of your already hidden attributes:

```php
$users = $users->mergeHidden(['last_login_at']);
```

Just imagine, you've got a bunch of nosy neighbors peeking into your data array, but with `mergeHidden`, you can cast a discreet invisibility cloak over those pesky last login timestamps. Problem solved! 🕵️‍♂️✨

Oh, and don't forget to check out the [official docs](/docs/{{version}}/eloquent-serialization#hiding-attributes-from-json) for more juicy details on this secret sorcery. 📖🔮

 Ahoy there! Set sail for a Laravel treasure hunt with the `only($keys)` method! This swashbuckling collection method will help you find all of the elusive models that have those coveted primary keys, yarr! 🏴‍☠️

```php
$pirates = $pirates->only([1729, 61044, 30089]); // only these swarthy souls make the cut
```

Aye, mateys! Now you can filter out the riffraff and focus on the models that truly matter in your quest for the lost Laravel treasure. Happy hunting, and may your sea legs never give out! 🌴🐬🌍

 Ahoy there, mateys! Dive into the treasure trove of Laravel's `partition` method, a swashbuckling way to sort your collections like never before!

This magical method returns an enchanted `Illuminate\Support\Collection` that houses two cunning `Illuminate\Database\Eloquent\Collection` pirate chests:

```php
$treasure = $pirates->partition(fn ($pirate) => $pirate->age > 18);

echo $treasure::class; // "Illuminate\Support\Collection" parrot says: Arrrr!
echo $treasure[0]::class; // "Illuminate\Database\Eloquent\Collection" parrot says: Aye aye, that's the young buccaneers chest!
echo $treasure[1]::class; // "Illuminate\Database\Eloquent\Collection" parrot says: And here be the old salty dog's treasure chest!
```

With `partition`, you can easily separate your collection into two halves, just like splitting a bottle of grog with a trusted companion. Happy partitioning!

 Ahoy there, coders! Let's dive into the world of Laravel and explore a fascinating little method called `setAppends($attributes)`. This isn't your average pirate treasure map, but it might as well be – for it's about to guide you through an adventure filled with data manipulation!

The `setAppends` method, in the grand tradition of swashbuckling, temporarily takes control over all those hidden treasures, ahem, appended attributes on each model in a collection. So if you're feeling like a king or queen and want your subjects (data) to share some juicy secrets like "is_admin", just give this command:

```php
$users = $users->setAppends(['is_admin']);
```

Remember, ye scallywags, `setAppends` doesn't change the attributes permanently – it only lends them a temporary crown for the duration of your journey. Once you're done, let them be!

Now that we've sailed through the method's explanation, aren't you ready to set sail and add some flair to your data collections? Arrrrghastonishingly fun, isn't it?

 Ahoy there, shipmates! Sail with me as we navigate the high seas of Laravel land and uncover the swashbuckling secrets of the `setVisible` method! Aye aye, captains!

In these parts, the good captain's crew might be hankering for some fine pirate gold — but alas, they can only see the names on their treasure map. Fear not, dear friends! The almighty `setVisible` method is here to rescue the day (and your loot)!

This cunning technique temporarily overrides all the visible attributes on each model in a collection — yep, you heard that right! Say you've got a rambunctious bunch of pirates called `$users`. With a single command, you can unleash their entire bounty to the world:

```php
$users = $users->setVisible(['id', 'name']);
```

So hoist your sails, mateys! The age of enlightenment has arrived in Laravel waters. Arrrr, who needs a treasure chest when you have `setVisible`? Fair winds and following seas to your next swashbuckling adventure!

 Ahoy there, adventurous Laravel wranglers! Prepare to embark on a whirlwind adventure through the mystical realm of model collections with our trusty sidekick, `setHidden()` method! This jolly ol' chap is more than just a name; he's your secret weapon against unwanted prying eyes in the land of Eloquent!

Imagine you've stumbled upon a trove of users, but there are some sensitive data points like emails, passwords, and remember tokens that must remain hidden under lock and key. Fear not! `setHidden()` is here to save the day!

```php
$users = $users->setHidden(['email', 'password', 'remember_token']);
```

By calling this enchanting method, you're casting a magical cloak of invisibility over all those pesky, sensitive attributes in your user collection. No more squabbling with pesky intruders! Just remember, it's only temporary; once the battle is won, feel free to unhide those hidden goodies using the `makeVisible()` method.

And so, dear Laravel voyagers, we bid you adieu for now, but rest assured that our trusty sidekick `setHidden()` will always be at your side when the need arises! Happy coding!

 Oh, the `toQuery()` method! It's like your favorite party invitation, but instead of a dance floor, it takes you on a wild ride with Eloquent query builders. This magical method, when cast upon your beloved collection model, transforms it into an enchanting query builder instance, complete with a 'whereIn' charm on the primary keys.

Here's a little demonstration:

```php
use App\Models\User;

$users = User::where('status', 'VIP')->get();

Now, imagine you're at a ball and these users are your dance partners. You want to change their status from VIP to Administrator. So, you summon the `toQuery()` method and ask it to perform the update:

$users->toQuery()->update([
    'status' => 'Administrator',
]);
```

And just like that, your dance partners are no longer VIPs but Administrators! But remember, this spell works only on primary keys. So make sure you've got the right IDs in your collection before you start dancing around with `toQuery()`. Happy querying, party people! 🎉💃🏼🕺🏼

 Ahoy there, mateys! Step right up and let's dive into the swashbuckling world of Laravel collections! Today, we're talking treasure chests - er, I mean collections. Specifically, we're focusing on the `unique` method, a tool as sharp as Cutlass Calculus himself!

Picture this: you stumble upon a gold mine (not really, but go with it) filled with... users? Alas, not all of them are unique, and Captain Ahab has more than one Moby Dick in his crew. Well, worry not! Just like the ol' sea dog would, we'll use `unique` to clean up our collection quicker than you can say "Avast, me hearties!"

```php
$users = $users->unique(); // Or, if ye prefer a more piratey syntax: $users = uniqueYeCollectionOFUsers($users);
```

With this single line of code, we've ensured that only one captain is sailing aboard the S.S. Unique-User! Any models with the same primary key as another model have been removed (walked the plank, if you will), leaving us with a pristine collection of unique users.

Now, keep those collections spick and span like a well-oiled ship's wheel and set sail for success with Laravel! Arr matey, remember: clean collections are happy collections! 🏴‍☠️🔧

 Ahoy there, Laravel coders! Let's embark on a fun journey through the wild west of data manipulation with our trusty sidekick, `withoutAppends()`. You see, this lil' fella is just what you need when your collection gets rowdy with too many appended attributes - think of it as a digital posse, rounding up all those unwanted extras and sending 'em packing!

So, how does it work, you ask? Simple! Just saddle up your collection:

```php
$users = $users->withoutAppends();
```

By using this method, you're telling `$users` to temporarily remove all the appended attributes it's been hog-tying around. It's like a digital detox for your data! Now, don't you worry about those pesky appends causing trouble anymore, they'll be gone faster than a cowboy swiping a fresh loaf of bread from the general store!

Happy coding, partner! Keep it clean and remember that in Laravel, we always leave no trace behind...except for beautifully written code, of course. 😉

 Alrighty then! Let's dive into the world of Custom Collections, shall we? It's like giving your models a swanky new wardrobe or a sassy new ride, depending on whether you prefer metaphors about fashion or cars (we won't judge).

So, if you fancy using a custom Collection object with a specific model, all you need to do is sprinkle some stardust on your model by adding the `CollectedBy` attribute. Think of it as putting a shiny sticker on your toy that says "I'm special!"

```php
<?php

namespace App\Models;

use App\Support\UserCollection;
use Illuminate\Database\Eloquent\Attributes\CollectedBy;
use Illuminate\Database\Eloquent\Model;

// Here's our User model, now it knows it's a star!
#[CollectedBy(UserCollection::class)]
class User extends Model
{
    // ...
}
```

But hey, if you prefer the DIY approach and want to build your own collection from scratch, you can define a `newCollection` method on your model. Think of it as building your very own Hot Rod.

```php
<?php

namespace App\Models;

use App\Support\UserCollection;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Create a new Eloquent Collection instance.
     *
     * @param  array<int, \Illuminate\Database\Eloquent\Model>  $models
     * @return \Illuminate\Database\Eloquent\Collection<int, \Illuminate\Database\Eloquent\Model>
     */
    public function newCollection(array $models = []): Collection
    {
        // Here's where the magic happens! We're building a custom collection.
        $collection = new UserCollection($models);

        if (Model::isAutomaticallyEagerLoadingRelationships()) {
            $collection->withRelationshipAutoloading();
        }

        return $collection;
    }
}
```

Once you've either defined a `newCollection` method or added the `CollectedBy` attribute to your model, you'll be receiving an instance of your fancy-schmancy custom collection anytime Eloquent would normally hand over an `Illuminate\Database\Eloquent\Collection` instance.

And if you want to make every model in your application feel like they've stepped onto the red carpet, define the `newCollection` method on a base model class that all your models inherit from. Now that's what I call a style upgrade!