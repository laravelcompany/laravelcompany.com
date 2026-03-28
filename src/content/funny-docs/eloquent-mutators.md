 # Eloquent: The Magic of Mutators & Casting! 🎩✨

## Introduction 🎉🎈

Welcome, brave coders! Today we're diving into the mystical world of Eloquent Model mutators and casting - a magical journey where data transforms with ease and elegance. Grab your wands (keyboards) and let's get started! ✨🧙‍♂️

<a name="accessors-and-mutators"></a>
## Accessors & Mutators: The Sorcerer's Apprentices 🧝‍♂️🧝‍♀️

### Defining an Accessor 🔍

Transform data like a master alchemist! With accessors, you can return transformed data without changing the original value. It's like reading a spellbook but in PHP! 📖

```php
public function getNameAttribute($value) {
    return ucfirst($value);
}
```

### Defining a Mutator 🔨

Mutate data as if by magic! With mutators, you can change the original value before it's saved. It's like enchanting an item in your favorite RPG game! 🛡️🧪

```php
public function setNameAttribute($value) {
    $this->attributes['name'] = strtolower($value);
}
```

<a name="attribute-casting"></a>
## Attribute Casting: Turning Cinders into Pumpkins 🎃🌈

### Array and JSON Casting 📜

Transform data into arrays or JSON for easy manipulation. It's like learning the spell of "Expelliarmus" on your data! 🤓

```php
protected $casts = [
    'options' => 'array',
];
```

### Binary Casting 💾

Store binary data as base64 strings. It's like casting a spell to turn data into invisible ink! 🕵️‍♂️

```php
protected $casts = [
    'logo' => 'binary',
];
```

### Date Casting 📅

Transform dates into a human-readable format. It's like casting a spell to make time stand still for a moment! ⏰

```php
protected $dates = ['created_at', 'updated_at'];
```

### Enum Casting 🌈

Restrict values to a predefined set. It's like casting a spell that limits the elements of your spells! 🧙‍♀️🪄

```php
protected $enum = [
    'status' => Status::class,
];
```

### Encrypted Casting 🔐

Encrypt sensitive data for security. It's like casting a spell to protect your secrets! 🏰

```php
protected $encryption = 'AES-256-CBC';
protected $key = env('ENCRYPTION_KEY');
```

### Query Time Casting 🕒

Cast data as you query it. It's like casting a spell that filters your data on the fly! 🚀

```php
public function scopeActive($query) {
    return $query->where('status', Status::ACTIVE);
}
```

<a name="custom-casts"></a>
## Custom Casts: Crafting Your Own Spells 🧙‍♂️🔮

### Value Object Casting 📦

Create custom casts for value objects. It's like crafting your own magic spells! 🏞️💫

```php
class MoneyCast implements ShouldCastAsInterface {
    // ...
}
```

### Array / JSON Serialization 📜🔄

Serialize data into arrays or JSON. It's like casting a spell to make your data more magical! ✨🌈

```php
public function serialize($attribute, $value) {
    // ...
}

public function deserialize($attribute, $value) {
    // ...
}
```

### Inbound Casting 🛡️🔄

Transform data before it's saved. It's like casting a spell to protect your data from harm! 🛡️

```php
public function setAttribute($attribute, $value) {
    // ...
}
```

### Cast Parameters 🔄📝

Pass additional parameters to your custom casts. It's like adding extra ingredients to your magic potion! 🧪🥤

```php
public function getAttribute($attribute, $value) {
    // ...
}

public function setAttribute($attribute, $value) {
    // ...
}
```

### Comparing Cast Values 🔍💬

Compare cast values as if they were already transformed. It's like comparing two spells without actually casting them! 🧙‍♂️🧙‍♀️

```php
public function asArray() {
    // ...
}
```

### Castables 📜📝

Specify what data types your custom cast can handle. It's like setting the limitations of your magic spells! 🧙‍♀️🕯️

 ## Hey There, Coders! 🤖🚀

Ever felt like your data needs a little makeover? Well, buckle up, because we're diving into the world of Eloquent Attribute Transformations! These bad boys - Accessors, Mutators, and Attribute Casting - are your new BFFs when it comes to sprucing up model instances.

Think of them as your data's personal stylists who work behind the scenes, making sure everything looks fabulous before they hit the runway (aka, when you access or set values on those models).

Let's say you want to encrypt sensitive info like your grandma's secret chocolate chip cookie recipe while it's safe-kept in the database. With Laravel Encrypter (check out our [Encryption docs](/docs/{{version}}/encryption)), you can! Then, voilà, it gets automatically decrypted for you when you access that Eloquent model like a VIP backstage pass.

Or maybe you've got a JSON string stored in your database that's just begging to be turned into an array. Well, who are we to deny them their dreams? Accessor and Mutator magic transforms that string into an array as soon as it's accessed via your Eloquent model! 🤖💥🤖

Now, aren't data transformations more fun with a side of sass? 😎🎉 Let's get started on making your models' lives (and yours!) more fabulous than ever! 🚀💖

 ### Unveiling the Magic Mirror: Accessors and Mutators! ✨🪄

In the mystical kingdom of Laravel, data is no longer a simple reflection in a pool. Instead, it's a glamorous queen (or king) who may need some help to look her best before being presented to the world. That's where Accessors and Mutators come into play! They are your trusted magicians, transforming data like Cinderella's fairy godmother 👽✨

<a name="defining-an-accessor"></a>

##### Defining an Accessor 🔮

An Accessor is a spell that lets you see a more beautiful version of your data. It's like those magical mirrors in fairy tales that make the ugly duckling look swan-tastic! To cast this spell, just add `get` before your attribute name in the getters section of your Model.

```php
class User extends Authenticatable {
    //...

    public function getFullNameAttribute() {
        return $this->first_name . ' ' . $this->last_name;
    }
}
```

Now, whenever you call `$user->full_name`, it will return the user's full name like a charm! 🎩👑


<a name="defining-a-mutator"></a>

##### Defining a Mutator 🧞‍♂️

A Mutator is a powerful potion that gives your data a new lease of life. Imagine if the pumpkin could become a carriage just by sprinkling fairy dust! In Laravel, Mutators do exactly that. They help you change, translate, or manipulate data before it's saved into the database.

To brew this potion, add `set` before your attribute name in the setters section of your Model, then cast the data as desired.

```php
class User extends Authenticatable {
    //...

    public function setFirstNameAttribute($value) {
        $this->attributes['first_name'] = ucfirst($value);
    }
}
```

Now, if you try to update a user's first name like this: `$user->first_name = 'tom';`, the first letter will magically transform into an uppercase T! 🤯🎉

So there you have it – Accessors and Mutators are your secret weapons in making data beautiful, elegant, and perfectly suited for presentation in Laravel's wonderful world! 🌹💎✨

 ### Transforming Attributes with Style!

Ahoy there, coders! Let's talk about accessors, the superheroes of your Laravel models that step in when you need to spruce up an attribute value. To create one, just whip up a protected method on your model, naming it after the camel-cased version of your model's true underlying attribute or database column (if applicable).

Take our example `first_name` attribute, which we're about to transform into something that would make Mr. Darcy proud! Our accessor will be called automatically by Eloquent when someone tries to grab the `first_name` value. But remember, all accessor and mutator methods should hint at returning the noble `Illuminate\Database\Eloquent\Casts\Attribute`.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Get the user's first name, fit for a Jane Austen novel.
     */
    protected function properFirstName(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucfirst($value),
        );
    }
}
```

See that? We've just made every user's first name a perfect opener for a conversation. But remember, our accessor doesn't end there! We can still manipulate the original value and return it as we please. To get your hands on this freshly-pressed first name, simply ask for it using your model instance:

```php
use App\Models\User;

$user = User::find(1);

$firstName = $user->properFirstName; // Now, isn't that a civilized way to start a conversation?
```

<!---
> [!NOTE]
> If you fancy these polished values in your model's array or JSON representations, you'll need to append them.
-->
> ⚠️ TIP:
> To get these refined values sprinkled into the array or JSON versions of your glamorous model, you'd better append them! [Here's a fancy tutorial on how to do just that](/docs/{{version}}/eloquent-serialization#appending-values-to-json).

 In the grand world of Laravel, where models strut their stuff like peacocks with too much time on their hands (but who can blame them?), there comes a moment when your accessor decides it's time to don a tuxedo and transform multiple model attributes into one dashing 'Value Object'. Fret not, for this is as easy as teaching a newborn to pirouette!

Your `get` closure, ever the charming host at a fancy ball, may find itself welcoming an extra guest named `$attributes`. This suave gentleman will waltz into the scene automatically and gracefully present an array of all your model's current attributes.

```php
Use the Address from our very own App as a date for the evening,
and Illuminate\Database\Eloquent\Casts\Attribute as the matchmaker.

/**
 * Dance with the user's address.
 */
protected function address(): Attribute
{
    return Attribute::make(
        get: fn (mixed $value, array $attributes) => new App\Support\Address(
            $attributes['address_line_one'],
            $attributes['address_line_two'],
        ),
    );
}
```

Now, isn't that a swell little dance routine? Your model can now tango with multiple attributes and transform them into one glamorous value object. And who knows, maybe this newfound charm will even help them snag the "Model of the Year" award at the Laravel Ball! 🤩✨💃🏻🕺🏻

 Alright, let's dive into the whimsical world of Laravel accessor caching!

#### Accessor Caching: The Time-Traveling Value Buffet 🍲

Ever cooked a dish only to have it change right after you served it? Not cool, right? Well, Eloquent feels your pain and has come up with a solution: time travel for values! When you return a value object from an accessor, any changes made to the time-traveling dish will automatically be synced back before the model is saved. Talk about a magical kitchen! 🔜

```php
use App\Models\User;

$user = User::find(1); // Go ahead and get that user, Captain!

// Now let's update our time-traveling dish (address)
$user->address->lineOne = 'Updated Address Line 1 Value';
$user->address->lineTwo = 'Updated Address Line 2 Value';

$user->save(); // And voila! The changes are saved in no time.
```

But sometimes, you may want to add a little caching for light-speed computations like strings and booleans (we're talking about primitive values here, folks). To make that happen, you can invoke the `shouldCache` method when defining your accessor:

```php
protected function hash(): Attribute
{
    return Attribute::make(
        get: fn (string $value) => bcrypt(gzuncompress($value)), // A complex dish recipe, I see! 🍴
    )->shouldCache(); // Add a little caching to save on those precious computing calories. 🥕
}
```

And if you'd like to opt out of the time-traveling behavior for attributes (because let's face it, some dishes need to be freshly cooked), you can invoke the `withoutObjectCaching` method when defining the attribute:

```php
/**
 * Interact with the user's address.
 */
protected function address(): Attribute
{
    return Attribute::make(
        get: fn (mixed $value, array $attributes) => new Address(
            $attributes['address_line_one'],
            $attributes['address_line_two'],
        ), // A freshly baked address, just the way we like it! 🏠
    )->withoutObjectCaching(); // No time travel for this dish, please. ⏳
}
```

<a name="defining-a-mutator"></a>
Now that you've mastered the art of accessor caching, it's time to move on to mutators! Stay tuned for more fun and games in our Laravel kitchen. 😉

 ### Unleashing Attribute Sorcerers: Mutators, Your Magic Cloak for Eloquent Models! ror

In a fantasy realm where your models are the knights and attributes are the glorious steeds they ride into battle, mutators are the magical cloaks that transform those horses (or whatever medieval transportation you prefer) as they charge into combat! 🥽🧝‍♂️

To bestow this enchanting cloak upon one of your Eloquent attributes, simply cast a spell (write some code) by providing the `set` incantation when defining your attribute. For instance, let's conjure up a mutator for our humble `first_name` attribute:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Alchemize the user's first name.
     */
    protected function firstNameAlchemy(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucfirst($value), // Transform the value to uppercase first letter
            set: fn (string $value) => strtolower($value), // Lowercase the value as it passes through the cloak
        );
    }
}
```

Once your mutator is born, it will be automatically summoned when you attempt to bestow a new value upon the `first_name` attribute on the model.

```php
use App\Models\User;

$user = User::find(1); // Find our noble knight

$user->first_name = 'SALLY'; // Attempt to set a new name, triggering the mutator's set callback
```

In this scenario, our `set` spell will be invoked with the value `SALLY`. The mutator will then apply its lowercase charm (the `strtolower` function) and return the transformed name, which will then become the knight's new steed in the model's internal `$attributes` array.

<a name="mutating-multiple-attributes"></a>
### Double, Double Toil and Trouble: Mutate Multiple Attributes 🧙‍♂️🔮

Should you find yourself in need of enchanting multiple attributes at once, fear not! With a wave of your wand (or some fancy code), you can cast spells upon all the horses in your knight's stable. Just follow these simple steps:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Combine alchemy and styling for the user.
     */
    protected function userTransformations(): void
    {
        $this->firstNameAlchemy(); // Cast the first name spell
        $this->lastNameCapitalize(); // Cast the last name capitalization spell
        $this->emailCamelCase(); // Cast the email camel casing spell
    }

    /**
     * Alchemize the user's first name.
     */
    protected function firstNameAlchemy(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucfirst($value), // Transform the value to uppercase first letter
            set: fn (string $value) => strtolower($value), // Lowercase the value as it passes through the cloak
        );
    }

    /**
     * Capitalize the user's last name.
     */
    protected function lastNameCapitalize(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucfirst($value), // Transform the value to uppercase first letter
            set: 'set', // This mutator does not need to manipulate the value, so we just use the default set callback
        );
    }

    /**
     * Convert the user's email address to camelCase.
     */
    protected function emailCamelCase(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => str_replace('.', '', ucwords(strtolower($value))), // Replace dots and convert to camel case
            set: 'set', // This mutator does not need to manipulate the value, so we just use the default set callback
        );
    }
}
```

In this example, our `User` model now combines three distinct spells (mutators) to transform the `first_name`, `last_name`, and `email` attributes all at once. When you cast these spells upon a user instance and set new values for these attributes, the respective mutators will be automatically summoned! 🧙‍♂️🔥

 Alrighty, buckle up, because we're about to dive into the world of Laravel attribute mutation! 🚀🌈

#### Multiple Attribute Makeover

In some cases, your swanky attribute mutator might fancy setting more than one model attribute. No problemo! Just return an array from the `set` closure and assign each key to a model attribute or database column it's associated with:

```php
use App\Support\Address;
use Illuminate\Database\Eloquent\Casts\Attribute;

/**
 * Hang out at the user's address.
 */
protected function addressParty(): Attribute
{
    return Attribute::make(
        get: fn (mixed $value, array $attributes) => new Address(
            $attributes['street'], // Because one line just isn't enough for my house number!
            $attributes['city'],   // And we certainly need a city to host this shindig!
        ),
        set: fn (Address $value) => [
            'street' => $value->getStreet(), // Alrighty, let's get this party started on the right street!
            'city'   => $value->getCity(),   // Time to invite the neighbors and spread the word about our soiree!
        ],
    );
}
```

Now that we've got the fun out of our system, let's get back to business. With this setup, your models can maintain a consistent state while handling complex data transformations. 🎉🥳 And remember, laughter is the best medicine... unless you have a headache from typing too much PHP code! 💊🤕

 ## Super Power Casting for Your Models! 🦸‍♂️🦸‍♀️

Attribute casting is like giving your models superpowers, turning them into shapeshifters without even breaking a sweat! No need to create additional methods; just use the `casts` method on your model to convert attributes into common data types like a boss! 😎

Here's the lowdown on the cast types we support:

<div class="content-list" markdown="1">

- `array` 📦
- `AsFluent::class` 🎩 (not sure who AsFluent is, but they sound fancy)
- `AsStringable::class` 🤳 (if you're in need of a talking model)
- `AsUri::class` 🌍 (because who doesn't want their models to navigate the web?)
- `boolean` 🔺🔻 (good ol' True or False)
- `collection` 📦📦 (for when your model needs a bag of tricks)
- `date` 🗓️ (because even models have birthday parties)
- `datetime` 🕒🕐 (when you want your model to tell time like a pro)
- `immutable_date` 🔒🗓️ (a date that's not allowed to change its clothes)
- `immutable_datetime` 🔒🕒🕐 (the same, but with time too)
- <code>decimal:&lt;precision&gt;</code> 📊 (for models that like precision in their numbers)
- `double` 🔢 (for those models that just can't keep it simple)
- `encrypted` 🔒🗝️ (when your model has secrets to protect)
- `encrypted:array` 📦🔒🗝️ (a bag full of secrets, no less!)
- `encrypted:collection` 📦🔒🗝️ (for models that love to keep their collections under wraps)
- `encrypted:object` 🧪🔒🗝️ (when your model has a complex, encrypted identity)
- `float` 🔢 (because even models like to play with numbers sometimes)
- `hashed` 🔒🔨 (for models that enjoy a good password scramble)
- `integer` ⌛️ (for those models who keep count of everything)
- `object` 🧪 (when your model needs to be more than just data)
- `real` 🔢 (a fancy way of saying "float")
- `string` 📝 (because even models have things to write)
- `timestamp` ⏰🗓️ (for models that need to remember everything, always)

</div>

So, let's cast some magic on the `is_admin` attribute, which is stored in our database as an integer (0 or 1). We'll turn it into a boolean value:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_admin' => 'boolean',
        ];
    }
}
```

Now, when you access the `is_admin` attribute, it will magically transform into a boolean, even if it was an integer in the database:

```php
$user = App\Models\User::find(1);

if ($user->is_admin) {
    // ...
}
```

Need to add a temporary cast at runtime? Just use the `mergeCasts` method! These new cast definitions will join forces with any already defined on the model:

```php
$user->mergeCasts([
    'is_admin' => 'integer',
    'options' => 'object',
]);
```

> [!WARNING]
> Be careful, attributes that are `null` will not be cast. Also, don't define a cast (or an attribute) with the same name as a relationship or assign a cast to the model's primary key. That would just be weird and confusing. 🤯🤨
>
> [🔙Back to Stringable Casting](#stringable-casting)

 #### Strings-a-palooza! (A.K.A Stringable Casting)

Looking to turn your model attributes into sassy, fluent Stringable objects? Well, buddy, you've come to the right place! The `Illuminate\Database\Eloquent\Casts\AsStringable` cast class is just the ticket for a jamboree of stringy goodness.

```php
<?php

namespace App\Models;

// Import all the cool kids (Cast, AsStringable)
use Illuminate\Database\Eloquent\Casts\AsStringable;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * If you're casting a spell, you should know which attributes.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        // Here's our secret sauce: AsStringable for the directory attribute
        return [
            'directory' => AsStringable::class,
        ];
    }
}
```

<a name="array-and-json-casting"></a>

And because we here at Laravel love a good party, let's not forget about those array and JSON castings! You can find all the deets [right here](/docs/{{version}}/strings#fluent-strings-method-list). But remember, with great power comes great responsibility - use it wisely, my friend! 🤘

 ### The Magic of JSON Transformation Crew (JTC)

Brace yourselves, data wranglers! Meet JTC - the extraordinary team that turns JSON into PHP arrays, and vice versa, with supernatural ease!

Here's a classic tale about our heroic cast, the `array`. This guy is particularly handy when dealing with database columns that are packed like sardines in serialized JSON. Imagine your database stores a `JSON` or `TEXT` field type, filled to the brim with serialized JSON goodness - adding this magical cast to that attribute will turn it into a phwoar-worthy PHP array as soon as you summon it on your Eloquent model!

```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * This is the secret incantation that calls upon our cast, the array.
     */
    protected function casts(): array
    {
        return [
            'options' => 'array', // Yes, just like a magic wand!
        ];
    }
}
```

Once you've performed this mystical ritual, you can now summon the `options` attribute, and it will transform into a PHP array right before your eyes! But remember, with great power comes great responsibility: whenever you assign a new value to the `options` attribute, it gets wrapped back up in its JSON disguise for safekeeping in the database.

```php
use App\Models\User;

$user = User::find(1);

// Gaze upon the deserialized array!
$options = $user->options;

// Add some new secrets to the mix
$options['key'] = 'value';

// Summon the transformation crew again to put the updated array back into its JSON disguise
$user->options = $options;

// Save it for posterity
$user->save();
```

Want a quicker way to update a single field of your JSON attribute? Give it the mass-assignment treatment and use the `->` operator when invoking the `update` method:

```php
$user = User::find(1);

// With a wave of your hand, make the 'options' field key take on a new value!
$user->update(['options->key' => 'value']);
```

Now you're well-versed in JTC's art of JSON transformation. You're officially one step closer to mastering data manipulation! 🤩🔥📚

 Alright, folks! Let's dive into the whimsical world of Laravel data casting, where even Emojis and Unicode characters get their time to shine! 🎉🎤

If you find yourself yearning for a smoother way to store an array attribute that's bursting with unescaped Unicode characters, fear not! Introducing the `json:unicode` cast, your new bestie in Laravel data land.

Here's how you can get it all set up:

```php
/**
 * Grab the attributes that deserve a fancy casting party.
 *
 * @return array<string, string>
 */
protected function casts()
{
    return [
        'options' => 'json:unicode', // It's like a magic spell for your JSON data! 💫🔮
    ];
}
```

Now, your Emojis and Unicode characters can join the party without having to worry about getting all tangled up in those pesky escape sequences. Happy casting! 🤗🚀

 Alright, buckle up, because we're about to dive into the magical world of Laravel's Array Object and Collection Casting!

First off, let's talk about the standard `array` cast. It's a swell pal for many applications, but it's got some quirks. You see, since it returns a primitive type, direct mutation of an offset array can lead to a PHP error, much like inviting a party pooper to your shindig!

```php
$user = User::find(1);

$user->options['key'] = $value; // 🚨 PHP Error: Call to undefined method App\Models\User::options()!
```

But fear not, Laravel's got your back with the `AsArrayObject` cast! This bad boy transforms your JSON attribute into an ArrayObject class, allowing you to modify individual offsets without triggering a PHP error—it's like having a bouncer at the door of your array, only friendlier and less prone to violence.

```php
use Illuminate\Database\Eloquent\Casts\AsArrayObject;

/**
 * Get the attributes that should be cast.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'options' => AsArrayObject::class,
    ];
}
```

Next up, we have the `AsCollection` cast. This one turns your JSON attribute into a Laravel Collection instance. It's like inviting your array to a dance party—it gets spruced up and ready to boogie!

```php
use Illuminate\Database\Eloquent\Casts\AsCollection;

/**
 * Get the attributes that should be cast.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'options' => AsCollection::class,
    ];
}
```

Now, if you'd like the `AsCollection` cast to instantiate a custom collection class instead of Laravel's base collection class, you can pass the collection class name as an argument:

```php
use App\Collections\OptionCollection;
use Illuminate\Database\Eloquent\Casts\AsCollection;

/**
 * Get the attributes that should be cast.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'options' => AsCollection::using(OptionCollection::class),
    ];
}
```

If you want to map collection items into a given class, you can use the `of` method and the collection's `mapInto` method:

```php
use App\ValueObjects\Option;
use Illuminate\Database\Eloquent\Casts\AsCollection;

/**
 * Get the attributes that should be cast.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'options' => AsCollection::of(Option::class)
    ];
}
```

Now, when mapping collections to objects, remember these objects should implement the `Illuminate\Contracts\Support\Arrayable` and `JsonSerializable` interfaces. This helps define how their instances should be serialized into the database as JSON:

```php
<?php

namespace App\ValueObjects;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class Option implements Arrayable, JsonSerializable
{
    public string $name;
    public mixed $value;
    public bool $isLocked;

    /**
     * Create a new Option instance.
     */
    public function __construct(array $data)
    {
        $this->name = $data['name'];
        $this->value = $data['value'];
        $this->isLocked = $data['is_locked'];
    }

    /**
     * Get the instance as an array.
     *
     * @return array{name: string, data: string, is_locked: bool}
     */
    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'value' => $this->value,
            'is_locked' => $this->isLocked,
        ];
    }

    /**
     * Specify the data which should be serialized to JSON.
     *
     * @return array{name: string, data: string, is_locked: bool}
     */
    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}
```

And voila! You've just learned the art of Laravel's Array Object and Collection Casting. Now you can party with your arrays like never before! 💃🏼🕺🏼

 ### Binary Buddy System

If your Eloquent model has a posh party where the guest list includes a binary type `uuid` or `ulid` column, plus the usual auto-incrementing ID column, you can call upon the `AsBinaryCast` bouncer to ensure seamless transformation between the value and its binary disguise:

```php
use Illuminate\Database\Eloquent\Casts\AsBinary;

/**
 * Decide who gets in through the gate.
 *
 * @return array<string, string>
 */
protected function getAllowedIn(): array
{
    return [
        'uuid' => AsBinary::uuid(),
        'ulid' => AsBinary::ulid(),
    ];
}
```

With the bouncer in place, you can invite UUID or ULID guests by setting their attribute values to an object instance or a string. Our Eloquent doorman will work his magic and convert the value into its binary representation:

```php
use Illuminate\Support\Str;

$guest->uuid = Str::uuid();

return $guest->uuid;

// "6e8cdeed-2f32-40bd-b109-1e4405be2140" - the glamorous disguise for their binary identity
```

<a name="date-casting"></a>
Hope you're having a swell time casting! 🤘🎉

 Alright, let's dive into the ticklish topic of Date Casting! 🎉

By the way, side note: Eloquent is like that friend who always knows the right time (pun intended) and never misses a beat. It comes pre-equipped with Carbon - think of it as a swanky tuxedo over the PHP DateTime class, complete with a pocket full of useful tricks! 🤵️

Now, if you fancy casting additional date attributes beyond the default `created_at` and `updated_at`, you can define your very own date casts within your model's 'casts' method. It's like inviting that friend to your party – they'll blend right in! 🥳

Typically, dates should be cast using the 'datetime' or 'immutable_datetime' cast types. Think of it as wearing a formal suit for high-stakes events and an elegant cocktail dress for more casual gatherings (metaphorically speaking). 😉

When defining a `date` or `datetime` cast, you may also specify the date's format. This is useful when your model needs to look good on the dance floor – aka serialize to an array or JSON. Here's the recipe for that:

```php
/**
 * Serve up the attributes that should be cast as a delectable dish.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'created_at' => 'datetime:Y-m-d', // The secret ingredient for a mouthwatering model!
    ];
}
```

When a column is cast as a date, you may set the corresponding model attribute value to various forms of time travel-worthy data. UNIX timestamp? Check. Date string (`Y-m-d`)? You got it. Date-time string? On it! `DateTime` / `Carbon` instance? Bring it on! The date's value will be correctly converted and stored in your database without a hiccup. 🚀

Fancy customizing the default serialization format for all of your model's dates? Simply define a 'serializeDate' method on your model:

```php
/**
 * Prepare a date for a swanky dinner party (array/JSON serialization).
 */
protected function serializeDate(DateTimeInterface $date): string
{
    return $date->format('Y-m-d'); // The ultimate cocktail hour format!
}
```

To specify the format that should be used when actually storing a model's dates within your database, you should use the `dateFormat` argument on your model's 'Table' attribute. It's like setting the dress code for your database – keep it classy! 🤳🏽

```php
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table(dateFormat: 'U')] // Using 'U' format – a perfect fit for timestamps!
class Flight extends Model
{
    // ...
}
```

Now that you've got the hang of it, go forth and cast dates with confidence! 🎉

 Alrighty, buckle up, because we're about to take a wild ride through the world of Laravel date casting, serialization, and timezones! 🚀🕰️

By default, our `date` and `datetime` casts are like those posh British butlers who always show up in a crisp tuxedo – they convert dates into a sleek UTC ISO-8601 date string (`YYYY-MM-DDTHH:MM:SS.uuuuuuZ`), no matter what timezone your application thinks it's in (thanks to the `timezone` configuration option). It's like they've all been to the same etiquette school! 🕺️

Now, you might be tempted to spice things up with a custom format for your dates, like `datetime:Y-m-d H:i:s`. But hold your horses, partner! When this happens, the Carbon instance's inner timezone (usually defined by that same `timezone` option) will take center stage during serialization. Just remember that columns like `created_at` and `updated_at`, being the timeless celebrities they are, always stick to UTC, no matter what your application's timezone setting might be.

<a name="enum-casting"></a>
Now, let's not forget about Enum casting – it's like having a personal stylist for your database columns! 🤵️👗 But that's a whole different ball game, and we wouldn't want to overwhelm you now, would we? 🥳

Just remember: UTC is the name of the game, and consistency is the key to making friends (and databases) in high places. Happy dating, serializing, and time-traveling! 🎉🕰️🚀

 ### Enchanting Enum Magic! 🧙‍♂️🪄

Step right up, data sorcerers! Laravel's Eloquent isn't just a wand for querying databases; it's also a spellbook for PHP [Enums](https://www.php.net/manual/en/language.enumerations.backed.php)! To cast your attribute values into these mystical entities, simply point your Model's `casts` method towards the attribute and enum you wish to enchant:

```php
use App\Enums\ServerStatus;

/**
 * Get the attributes that should be enchanted.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'status' => ServerStatus::class,
    ];
}
```

Once you've bestowed this magic upon your Model, the specified attribute will be transformed into an Enum whenever you conjure it up:

```php
if ($server->status === ServerStatus::Provisioned) {
    $server->status = ServerStatus::Ready;

    // Abracadabra! The server is saved with its new status. 🦃
}
```

<a name="casting-arrays-of-enums"></a>
Remember, enchanting arrays of Enums is also possible! Here's a spell for that:

```php
use App\Enums\ServerStatus;

protected function casts(): array
{
    return [
        'statuses' => ServerStatus::class, // <-- Array of Enums here! 📦🔮
    ];
}
```

Now, whenever you access or manipulate the `statuses` attribute, you'll be dealing with a delightfully enchanted array of Servers. Happy querying, sorcerers! 🚀✨

 #### Turning Your Array of Enums into a Comical Spectacle (Because Who Needs Boring, Right?)

Sometimes, your model might feel the urge to hold a riotous array of enum values in a single column, like a wild party crammed into a phone booth. To tame this chaos and bring order to the madness, Laravel offers two enchanting casts: `AsEnumArrayObject` and `AsEnumCollection`.

```php
use App\Enums\ServerStatus;
use Illuminate\Database\Eloquent\Casts\AsEnumCollection;

/**
 * Get the attributes that should be transformed into something less chaotic.
 *
 * @return array<string, string>
 */
protected function casts(): array
{
    return [
        'statuses' => AsEnumCollection::of(ServerStatus::class), // Turns your array of enums into a well-behaved collection
        'chaos' => AsEnumArrayObject::of(DisarrayInThePhoneBooth::class) // Because every party needs a little bit of unexpected chaos!
    ];
}
```

P.S. The `DisarrayInThePhoneBooth` enum is not actually part of Laravel, but it would make for a fun addition, wouldn't it? 😉

 ### Cryptic Capers for Columns! 🔓🚀

Ever had a sneaky suspicion that your data might be eavesdropped on by nosy neighbors? Fear not, Laravel's got your back with the *Encrypted Cast*! It's like a secret decoder ring for your models, encrypting attribute values using our top-secret, built-in [encryption technology](/docs/{{version}}/encryption).

Think of it as a superhero cape, turning plain Jane data into cryptic capers before tucking them away in your database. But like any good cape, it's got some quirks: the encrypted text is longer than its original and its final length isn't always predictable, so make sure your associated database column is as spacious as a grand ballroom (i.e., `TEXT` type or larger).

Since we're dealing with secret squirrel business here, you won't be able to query or search encrypted attribute values like Sherlock Holmes would with his violin bow and magnifying glass 🕵️‍♂️. But hey, if it's good enough for James Bond, it should be good enough for your app!

<a name="key-rotation"></a>
### Key Rotation Time! ⏳🔑

Now, remember that our cape isn't just one-size-fits-all. To keep those pesky data thieves on their toes, you can rotate the encryption key like a secret agent changing hideouts! Head on over to [our key rotation guide](/docs/{{version}}/encryption#key-rotation) for a step-by-step on how to pull off this tricky move. 🕵️‍♂️🔑🏞️

 Alrighty, buckle up, buttercup! You're about to dive into the delightful world of key rotation in Laravel Land. It's like swapping out the secret combination to your secret garden (but with more PHP and less sunburn).

Now, you probably already know that our beloved Laravel encrypts strings using the magical `key` value from your app's `app.php` configuration file. This key, my dear friends, is often the same as the value of your trusty `APP_KEY` environment variable (it's like they're twins separated at birth).

But what happens when you need to change the locks on this secret garden? Well, that's where our graceful key rotation comes into play! It's not only a smoother way to rotate your keys but also a great opportunity to show off your new set of house keys to all your friends in the PHP community. (Seriously though, check out [our documentation on gracefully rotating encryption keys](/docs/{{version}}/encryption#gracefully-rotating-encryption-keys) for more details.)

Just remember: a key rotation is like a new haircut – it's good to keep things fresh and secure! 🔑✨💇‍♂️

 ### Time Travel with Query Casting!

Ever found yourself in a pickle, trying to make sense of raw data straight from the horse's mouth (er, database)? Worry not, my friend! Laravel's got your back with a feature that'll have you feeling like Doc Brown in a DeLorean. That's right, we're talking about Query Time Casting!

Let's take a gander at this scenario:

```php
use App\Models\Post;
use App\Models\User;

$users = User::select([
    'users.*',
    'last_posted_at' => Post::selectRaw('MAX(created_at)')
        ->whereColumn('user_id', 'users.id')
])->get();
```

Now, if you squint real hard at the results, you might notice that the `last_posted_at` attribute is as useful as a chocolate teapot – it's just a string! But fret not, for we can cast this into something more akin to a Swiss timepiece with the `withCasts` method:

```php
$users = User::select([
    'users.*',
    'last_posted_at' => Post::selectRaw('MAX(created_at)')
        ->whereColumn('user_id', 'users.id')
])->withCasts([
    'last_posted_at' => 'datetime' // Boom! You just travelled back in time! 🕰️🚀
])->get();
```

And there you have it, my friend! Now you can make sense of those date stamps without needing a degree in chronology. Happy querying! 🎉🎉🎉

 Alrighty, Laravel's built-in cast types are a delightful buffet of handy helpers, but sometimes you might find yourself craving your own custom flavor. Fret not! To whip up a bespoke cast, just give the trusty Artisan command a shout:

```shell
php artisan make:cast AsJson
```

Your new cast class will find its home in `app/Casts`, ready to dazzle with its culinary skills.

Every custom cast class must don the hat of the `CastsAttributes` interface, and this dapper suit requires two essential methods: a getter (responsible for turning database raw values into a delectable cast form) and a setter (tasked with transforming your cast creation into a tasty morsel suitable for storage). Let's recreate the popular built-in `json` cast type as a custom concoction:

```php
<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class AsJson implements CastsAttributes {
    // A little dance, a dash of PHP, and voila! We've got our custom cast type.

    public function get(
        Model $model,
        string $key,
        mixed $value,
        array $attributes
    ): array {
        return json_decode($value, true);
    }

    public function set(
        Model $model,
        string $key,
        mixed $value,
        array $attributes
    ): string {
        return json_encode($value);
    }
}
```

Once your custom cast type is cooked to perfection, attach it to a model attribute using its class name:

```php
<?php

namespace App\Models;

use App\Casts\AsJson;
use Illuminate\Database\Eloquent\Model;

class User extends Model {
    // Time to set the table, and set it straight with our new custom cast.

    protected function casts(): array
    {
        return [
            'options' => AsJson::class,
        ];
    }
}
```

And there you have it! Your Laravel models are now ready to serve up the freshest and most flavorful custom casts around. Bon appétit! 🍴🥄🎉

 Alright, buckle up, Laravel cowpokes! We're diving into the wild world of Value Object Casting – where your data isn't just numbers and strings anymore, but can now be as exciting as a grizzly bear in a honey jar! 🐻🍯

You've already been able to cast values to primitive types like a pro, but now we're kicking it up a notch by letting you cast them to objects! Imagine that – casting your data into an object as effortlessly as pouring whiskey into a tumbler. 🥃

Defining custom casts for objects is similar to the primitives, but there's one important twist if your value object involves more than one column: The `set` method must return an array of key-value pairs that will be used to set raw, storable values on the model. If your object only affects a single column, you can simply return the storable value like a well-dressed cowboy walking into Dodge City.

Let's say we want to define a custom cast class that turns multiple model values into a sleek `Address` value object with properties `lineOne` and `lineTwo`. We'll make some assumptions about our `Address` value object, which we've named after an old-timey saloon:

```php
<?php

namespace App\Casts;

use App\ValueObjects\Saloon as Address;
// ... (rest of the class)
```

Here's a taste of what the code inside that class might look like:

```php
public function get(
    Model $model,
    string $key,
    mixed $value,
    array $attributes,
): Address {
    return new Saloon($attributes['line_one_of_the_saloon'], $attributes['line_two_of_the_saloon']);
}

public function set(
    Model $model,
    string $key,
    mixed $value,
    array $attributes,
): array {
    // ... (rest of the code)
}
```

Casting to value objects is a piece of cake! Any changes you make to your value object will be automatically synced back to the model before it gets saved – just like how a cowboy might adjust his hat after dismounting from a horse. 🎩

```php
use App\Models\User;

$user = User::find(1);

$user->saloon->line_one_of_the_saloon = 'Updated Address Value';

$user->save();
```

<!--- Note for serialization -->

[!NOTE]
When you're planning to serialize your Eloquent models containing value objects into JSON or arrays, don't forget to implement the `Illuminate\Contracts\Support\Arrayable` and `JsonSerializable` interfaces on the value object. It's as important as knowing how to rope a bronco! 🐎🌞

<a name="value-object-caching"></a>

 #### Cache-tastic Value Objects, Y'all! 🥳

In the wild world of Eloquent, when attributes turn into fancy value objects (like a chic pair of shoes or a witty one-liner), they get stashed away in the memory locker for later use. So, if you try to access that attribute again, instead of fetching it fresh off the database rack, Eloquent will hand you the very same object instance it saved earlier - talk about a fashion repeat! 👗

But what if you're feeling a little too cachy-cachy and want to break free from this memory locker? You can do just that by declaring a public `withoutObjectCaching` property in your custom cast class. Just think of it as the 'Free Bird' of object caching - no more being tethered to the same instance! 🎸

```php
class AsAddress implements CastsAttributes
{
    public bool $withoutObjectCaching = true; // It's showtime, Charlie!

    // ...
}
```

Now go forth and conquer those object caches with style! 🤘💃

 ### Array / JSON Transmogrification (aka, Turning Laravel Models into Jokes and Back)

Ah, the magical world of Laravel Eloquent models! Where data transforms into arrays and JSON like Cinderella turning into a pumpkin at midnight - but way cooler. The `toArray` and `toJson` methods are your fairy godparents here, handling the transformation, and they won't leave you high and dry... unless you're dealing with custom cast value objects from third-party libraries.

In such situations, adding the `Illuminate\Contracts\Support\Arrayable` and `JsonSerializable` interfaces to your object is like asking a wallflower to start a dance-off. So, we let our custom cast class take the lead! To do so, it needs to implement the `Illuminate\Contracts\Database\Eloquent\SerializesCastableAttributes` interface.

Think of this interface as the audition form for becoming the serenading swan of your value object transformation. Your custom cast class should impress with a `serialize` method, which, like a well-timed punchline, returns the serialized form of your value object:

```php
/**
 * Discover the witty one-liner of the serialized representation of the value.
 *
 * @param  Model $model
 * @param  string $key
 * @param  mixed $value
 * @param  array $attributes
 */
public function serialize(
    Model $model,
    string $key,
    mixed $value,
    array $attributes,
): string {
    return (string) $value; // Transform the value into something you can laugh about
}
```

<a name="inbound-casting"></a>
Now, let's talk about inbound casting - that's when data from your JSON or array is transformed into an Eloquent model. It's like a game of Telephone, but with more coding and less childhood nostalgia. When you want to handle this transformation manually, you can create a custom cast class that implements the `Illuminate\Contracts\Database\Eloquent\CastsAttributes` interface. This interface demands a `get` method, which is like a stand-up routine for your data - it should return the transformed value from your JSON or array:

```php
/**
 * Transform the given value into a Eloquent model instance.
 *
 * @param  mixed $value
 * @param  string $key
 * @param  array $attributes
 */
public function get(
    Model $model,
    string $key,
    mixed $value,
    array $attributes,
): \Illuminate\Database\Eloquent\Model {
    // Transform the value into an Eloquent model instance here
}
```

And there you have it! Now you're ready to turn data into jokes and back again. Happy coding, comedians!

 ### The One-Way Transformers Club

Sometimes, you might find yourself in a situation where you need to create a custom cast class that only works its magic when values are being bestowed upon the model. Think of it like a butler who polishes silverware before dinner but sleeps through breakfast.

To join this exclusive club, your cast should implement the `CastsInboundAttributes` interface, which, in true elite fashion, requires nothing more than a swanky `set` method. The `make:cast` Artisan command can be summoned with the `--inbound` option to create an invitation-only cast class:

```shell
php artisan make:cast AsHash --inbound
```

A perfect example of a one-way cast is a "hashing" cast. Imagine a case where we define a cast that hashes incoming values using a fancy algorithm, like a secret sauce for your data:

```php
<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsInboundAttributes;
use Illuminate\Database\Eloquent\Model;

class AsHash implements CastsInboundAttributes
{
    /**
     * A grand entrance for new cast members.
     */
    public function __construct(protected ?string $algorithm = null) {}

    /**
     * Dress up before the party starts.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): string
    {
        // If no algorithm is provided, we'll default to the classic bcrypt method.
        if (is_null($this->algorithm)) {
            return bcrypt($value);
        }

        // But if an algorithm is provided, we'll hash it up with style!
        return hash($this->algorithm, $value);
    }
}
```

 ### Cast Party Time!

Ready to throw a custom cast bash in Laravel-land? When you invite a model to the dance, don't forget to bring some party favors – those being cast parameters! To get everyone on the same page, separate them from your class name with a colon and commas. Multiple guests are welcome, just make sure they line up politely for the entrance:

```php
/**
 * Find out who should get a makeover.
 *
 * @return array<string, string>
 */
protected function castParty(): array
{
    return [
        'secret' => 'AsHash::class'.':sha256', // Invite SHA-256 for a secret rendezvous!
    ];
}
```

<a name="comparing-cast-values"></a>
Oh, and when it comes to comparing cast values, remember that they're just like comparing dance moves – each one has its own groove. The constructor of the cast class will be the judge, making sure everyone gets a fair shake! 🕺️🎉

 ### Custom Casting Magic: Making Your Models Feel Like Hogwarts' Potion Class! 💫

Ever felt like your models were missing a dash of magic? Well, grab your wand (or your keyboard) and let's brew some custom casting potions! If you want Eloquent to understand when two values are brewed into the same magical elixir, then it's time to whip up a custom cast class. This spellbinding concoction will allow you to control which bewitched values Eloquent considers identical and thus saves to the database when your model undergoes a transformation (or an update).

To create your very own potion brewing apparatus, you'll need to conjure up a class that implements the `Illuminate\Contracts\Database\Eloquent\ComparesCastableAttributes` spellbook. This ancient tome grants you the power to decide which bewitched values are considered identical and worthy of saving in your database.

The spellbook demands your custom cast class to contain a `compare` incantation that returns true if the given brewed potions (or values) are indeed equal:

```php
/**
 * Does this cauldron bubble or not?
 *
 * @param  \Illuminate\Database\Eloquent\Model $model The potion-making vessel
 * @param  string $key The magical ingredient we're brewing
 * @param  mixed $firstValue The initial brew
 * @param  mixed $secondValue The new brew
 * @return bool Is the new brew just a refill or a completely different potion?
 */
public function compare(
    Model $model,
    string $key,
    mixed $firstValue,
    mixed $secondValue
): bool {
    return $firstValue === $secondValue; // If it's the same brew, it must be magic!
}
```

Remember to always keep your spells in order and follow the rules of potion-making etiquette. Happy casting, my friends! 🤓✨

 ### Magical Beans! 🪄🌻

Ever wished your application's charm bracelets could transform into their own custom magical spells? Well, hold onto your broomsticks because we got just the potion for that! Instead of binding your model with a bewitched spell bottle, you can attach a magical bean class 🌱 that implements the `Illuminate\Contracts\Database\Eloquent\Castable` spellbook:

```php
use Beans\MagicalAddress;

protected function brewPotions(): array
{
    return [
        'address' => MagicalAddress::class,
    ];
}
```

Beans that have learned the `Castable` spellbook must concoct a `castUsing` charm that reveals the name of their custom caster class responsible for brewing to and from magical potions:

```php
<?php

namespace Beans;

use Illuminate\Contracts\Database\Eloquent\Castable;
use Potions\AsAddress;

class MagicalAddress implements Castable
{
    /**
     * Discover the name of the caster class to use when brewing from / to this cast target.
     *
     * @param  array<string, mixed> $ingredients
     */
    public static function brewUsing(array $ingredients): string
    {
        return AsAddress::class;
    }
}
```

When using `Castable` beans, you may still add ingredients to the `brewPotions` recipe. The ingredients will be passed to the `brewUsing` charm:

```php
use Beans\MagicalAddress;

protected function brewPotions(): array
{
    return [
        'address' => MagicalAddress::class.':ingredient',
    ];
}
```

<a name="anonymous-cast-classes"></a>
*This section now named "Anonymous Cast Classes" instead of "Static Cast Classes" for a more magical touch!*

### Anonymous Cast Classes 👻

If you're feeling extra mystical, you can even conjure up your own anonymous cast classes on the fly! To do this, simply provide an anonymous function in the `brewPotions` method definition. The function will be called with the same arguments as the `brewUsing` charm:

```php
use Closure;
use Beans\MagicalAddress;

protected function brewPotions(): array
{
    return [
        'address' => fn(Closure $ingredient) => MagicalAddress::class .':'. $ingredient(),
    ];
}
```

 Alrighty then! Let's dive into the enchanting world of Castables and Anonymous Cast Classes – Laravel's magical solution to making your code as stylish as a runway model and as functional as a Swiss Army Knife.

Imagine combining a value object with PHP's secret sauce known as anonymous classes. It's like merging a beautiful pearl necklace with a trusty multi-tool! The result? A single, stunning, castable object complete with its very own logic for casting spells – or in programming terms, data manipulation.

To create this sorcery, simply return an anonymous class from your value object's `castUsing` method. This mysterious, unnamed class must obey the rules set forth by the `CastsAttributes` interface:

```php
<?php

namespace App\ValueObjects;

// ... Importing necessary interfaces...

class Address implements Castable
{
    // ...

    /**
     * Call the casting covenant when we're changing from / to this cast target.
     *
     * @param  array<string, mixed>  $arguments
     */
    public static function castUsing(array $arguments): CastsAttributes
    {
        // Abracadabra! Introducing our anonymous casting helper...
        return new class implements CastsAttributes
        {
            // The spells this helper can perform...
            public function get(
                Model $model,
                string $key,
                mixed $value,
                array $attributes,
            ): Address
            {
                // Perform a spell to create a new Address object...
                return new Address(
                    $attributes['address_line_one'],
                    $attributes['address_line_two']
                );
            }

            public function set(
                Model $model,
                string $key,
                mixed $value,
                array $attributes,
            ): array
            {
                // Cast the incoming value into a usable format and return...
                return [
                    'address_line_one' => $value->lineOne,
                    'address_line_two' => $value->lineTwo,
                ];
            }
        };
    }
}
```

And there you have it! With this enchanting code, you can make your Address value object dance to the tune of Laravel's casting logic. Just remember – practice makes perfect, so keep practicing those spells!