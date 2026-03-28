 Ahoy there, Laravel sailors! Buckle up for an exhilarating journey into the realm of Eloquent API Resources. This section is chock-full of goodies that'll make your RESTful dreams come true. Let's dive right in! 🌊

<a name="generating-resources"></a>
## Generating Resources (Like a Pro)
You know the drill – no one wants to code manually all day. Laravel makes it a breeze with a command that generates resources for you. Now, who needs a personal assistant when you've got this bad boy? 🤖

<a name="concept-overview"></a>
## Concept Overview (What's in it for me?)
We're talking about Resource Collections here – like a buffet of data for your API consumers. You can serve up just the right stuff they need to satisfy their curiosity, without giving away all your secrets! 🍽️

<a name="writing-resources"></a>
## Writing Resources (Customizing Your Plate)
Now we're getting to the good part – customization! With Data Wrapping, Pagination, Conditional Attributes, Relationships, and Meta Data, you can whip up a unique data dish tailored for each consumer. Mix it up, keep 'em guessing! 🎨

<a name="jsonapi-resources"></a>
## JSON:API Resources (For the picky eaters)
But what if your consumers are particular about their JSON format? No worries – we've got JSON:API Resources just for them. You can generate, define attributes and relationships, handle resource type and ID, use sparse fieldsets and includes, and add links and meta data. Talk about a customizable feast! 🌮

<a name="resource-responses"></a>
## Resource Responses (The icing on the cake)
Last but not least, it's time to serve up your creation with style! With Laravel, you can craft elegant and powerful API responses that are sure to leave a lasting impression. Bon appétit! 🍽️✨

 Alrighty then! Let's dive into the whimsical world of API construction where a little black box named Eloquent models could use some sprucing up before they serve your users a plateful of JSON goodness. You see, sometimes you want to dish out specific attributes to some lucky diners and not others, or perhaps always include certain side dishes (relationships) with every meal. That's where the dapper Eloquent resource classes step in, ready to whisk your models into a gourmet transformation!

Now, you could always convert those Eloquent models or collections into JSON using their trusty `toJson` methods, but that would be like serving a steak medium-rare when your users were expecting well-done. Eloquent resources offer a more precise and sturdy control over the seasoning (JSON serialization) of your models and their relationships, ensuring that every bite is as delightful as the last!

Let's get cooking! Oh wait, I mean coding, with this tasty recipe for generating Eloquent resources.

<a name="generating-resources"></a>
"Sweeten up your API game with these easy steps!"

1. Navigate to your project root directory in a terminal or command prompt.
2. Run the following Artisan command: `php artisan make:resource UserResource` (Replace "User" with the name of the model you wish to create a resource for.)
3. Open the newly created file located at `app/Http/Resources/UserResource.php`.
4. Voilà! You now have a brand-new, spiffy Eloquent resource class at your fingertips. Start customizing it with methods like `toArray()`, `with` (for including relationships), and `without` (for excluding relationships) to create the perfect JSON representation for your models!
5. To use this resource in your controllers, simply inject it into your methods: `public function index(UserResource $userResource) {...}`.
6. Your users will thank you for serving up such a tasty API experience!

 ## Unleashing Resourcefulness! 🚀

Ready to become a resourceful superhero? Well, strap on your cape and let's dive into Laravel's enchanted world of resources!

To summon a resource class, you gotta yell out the magic words: `make:resource`! With just that, the Artisan command will appear like magic, whipping up a new resource for you. By default, these shiny new creations will reside in the `app/Http/Resources` folder of your application. 🏢

So, if you want to create a UserResource (because let's face it, who doesn't need more friends?), just give this incantation a spin:

```shell
php artisan make:resource UserResource
```

Wait for the puff of digital smoke... and ta-da! Your new resource extends the mighty `Illuminate\Http\Resources\Json\JsonResource` class, making it an even more formidable ally in your quest to conquer APIs! 🦸‍♂️👩‍🚀

 Oh, hey there! Ready to embark on a whirlwind adventure through the mesmerizing world of Laravel Resource Collections? Buckle up, my friend, because we're about to dive deep into the magical land where models transform into glorious collections, and JSON responses become a treasure trove of links and meta-goodness!

First off, let's talk about individual models. We all love them, right? But sometimes, we need more - enter: Resource Collections! These bad boys are responsible for converting entire ensembles of models into a harmonious symphony of data that'll have your JSON responses dancing the tango of relevancy like never before!

To summon a Resource Collection, you've got two options. One, whip out your magical `--collection` flag when creating the resource using:

```shell
php artisan make:resource User --collection
```

Two, if you're feeling fancy (and why wouldn't you be?), opt for the elegance of naming your resource with the word "Collection" appended at the end. Like so:

```shell
php artisan make:resource UserCollection
```

Now, don't get all flustered - these Resource Collections are actually just extended family members of `Illuminate\Http\Resources\Json\ResourceCollection`. So, they're not entirely unrelated. Phew!

So there you have it! A fun-filled journey through the wondrous world of Laravel Resource Collections. Now go forth and conquer the JSON response landscape with your newfound knowledge!

 ## Resource Revelry! 🎉🎈

## The Lowdown on Resources and Resource Collections 📚🔍

> [💡️]
> This is a grand tour of resources and resource collections. It's highly recommended to check out the rest of this documentation's sections to really delve into the customization and potent powers that await you in resources!

Before we dive headfirst into all the fantastic features Laravel offers when crafting resources, let's first take a high-level peek at how resources are utilized within our beloved Laravel. A resource class embodies a single model that requires transformation into a JSON structure. For instance, here's a simple `UserResource` class:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
```

Every resource class defines a `toArray` method which returns the array of attributes that should be transformed into JSON when the resource is served as a response from a route or controller method. 🎶 And remember, we can access model properties directly with the magic `$this` variable because a resource class will automatically channel property and method access down to the underlying model for your convenience!

Once defined, these resources may be served up by either a route or a controller. Here's an example using a route:

```php
use App\Http\Resources\UserResource;
use App\Models\User;

Route::get('/user/{id}', function (string $id) {
    return new UserResource(User::findOrFail($id));
});
```

For a quicker draw, you can use the model's `toResource` method, which will employ Laravel conventions to automatically discover the model's underlying resource:

```php
return User::findOrFail($id)->toResource();
```

When invoking the `toResource` method, Laravel will attempt to locate a resource that matches the model's name and is optionally suffixed with `Resource` within the `Http\Resources` namespace closest to the model's namespace. 🕵️‍♂️🔍

If your resource class doesn't follow this naming convention or is located in a different namespace, you can specify the default resource for the model using the `UseResource` attribute:

```php
<?php

namespace App\Models;

use App\Http\Resources\CustomUserResource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\UseResource;

#[UseResource(CustomUserResource::class)]
class User extends Model
{
    // ...
}
```

Alternatively, you can specify the resource class by passing it to the `toResource` method:

```php
return User::findOrFail($id)->toResource(CustomUserResource::class);
```

<a name="resource-collections"></a>
### Resource Collections 🎁🎉

Just when you thought resources couldn't get any more awesome, Laravel introduces resource collections! A resource collection allows you to easily format a collection of models as JSON. Here's an example `UserCollection` class:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the collection into a JSON structure.
     *
     * @return array<string, mixed>[]
     */
    public function toArray($request): array
    {
        return [
            'data' => $this->collection,
        ];
    }
}
```

Now, instead of returning a single resource instance in your controller or route, you can use the `transform` method to return a collection of resources:

```php
use App\Http\Resources\UserCollection;
use App\Models\User;

Route::get('/users', function () {
    return new UserCollection(User::all());
});
```

And that's just the tip of the iceberg! Go forth and create, my friends. Happy coding! 🚀🌟🎈

 ### Resource Palooza! 🎉

If you're serving up a delightful smorgasbord of user resources or a pageant-worthy parade of paginated responses, remember to dress them up with the `collection` method from your resource class when summoning them in your route or controller:

```php
Use the UserResource's finest china, paired with some suave User models for an elegant dinner party! 🥙🍴

use App\Http\Resources\UserResource;
use App\Models\User;

Route::get('/users', function () {
    return (new UserResource(User::all()))->onAPlatter(); // Fancy, right? ✨
});
```

Or if you're feeling a bit peckish and prefer a quick takeaway, grab the Eloquent collection and whip it into shape with the `toResourceCollection` method. It knows the drill and will use framework conventions to find the perfect match:

```php
Just shove 'em in the microwave (or something less destructive), and they'll transform into delectable UserResources! 🍔🔥

return User::all()->toResourceCollection();
```

When it comes to `toResourceCollection`, Laravel plays detective, looking for a resource collection that matches the model's name with a `Collection` suffix in the `Http\Resources` namespace closest to home.

But what if your resource collection is a rebel without a Closure and goes by a different name or hails from a foreign land? No worries! Use the `UseResourceCollection` attribute to school Laravel on your resource's identity:

```php
<?php

namespace App\Models;

use App\Http\Resources\CustomUserCollection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\UseResourceCollection;

#[UseResourceCollection(CustomUserCollection::class)] // Now Laravel knows who's the boss! 👑
class User extends Model
{
    // ...
}
```

Alternatively, you can still use the `toResourceCollection` method and explicitly tell it who your resource collection's date is:

```php
"I'm with CustomUserCollection now!" they say. 💬
return User::all()->toResourceCollection(CustomUserCollection::class);
```

<a name="custom-resource-collections"></a>
Happy coding, folks! Let the Resource Rumble begin! 🥳✨🎉

 Alrighty, let's spice up Laravel's documentation on Custom Resource Collections! Here we go...

#### Custom Resource Collections: The Spicy Side of Data Collection 🌶️

By default, resource collections are as vanilla as your grandma's apple pie. They don't allow you to add any extra condiments (ahem, metadata) that might be a fine sprinkle on your collection. But fear not, my data-hungry friend! You can create a dedicated salsa stand, I mean resource, to represent your collection:

```shell
php artisan make:salsa UserCollection 🌮
```

Once the resource collection class has been whipped up, you can easily decide what condiments (metadata) should be served with the main dish:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection as BaseResourceCollection;

class UserCollection extends BaseResourceCollection {
    /**
     * Throw a party! Turn this resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArrayWithASideOfGuac(Request $request): array
    {
        return [
            'taco' => $this->collection, // The main dish
            'links' => [ // The condiments
                'self' => 'link-value',
            ],
        ];
    }
}
```

After you've seasoned your resource collection, it can be served up from a route or controller:

```php
use App\Http\Resources\UserCollection;
use App\Models\User;

Route::get('/users', function () {
    return new UserCollection(User::all());
});
```

Or, for convenience, you can use the Eloquent collection's `toSalsaCollection` method, which will use framework conventions to automatically discover the model's underlying resource collection:

```php
return User::all()->toSalsaCollection();
```

When invoking the `toSalsaCollection` method, Laravel will search high and low for a resource collection that matches the model's name and is suffixed with `Collection` within the `Http\Resources` namespace closest to the model's neighborhood. 🏡

<a name="preserving-collection-keys"></a>
Now, hold your tacos! If you'd like to preserve those precious collection keys while turning them into a resource collection, simply override the `toArray` method in your custom resource collection:

```php
public function toArrayWithKeys(Request $request): array {
    return parent::toArray($request);
}
```

Happy coding, and may your collections always be salsa-fresh! 🌮🚀

 Ah, the joy of key preservation in Laravel! You know, it's a bit like maintaining order at a chaotic party - somebody's got to do it. 🥳

In the realm of routing resources, Laravel is a tidy soul, sorting collection keys numerically for you by default. But fear not, for they didn't forget about those who enjoy a bit of nostalgia! 🎧

You can employ the `PreserveKeys` attribute on your resource class to decide whether to keep the original keys in the collection:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Attributes\PreserveKeys;
use Illuminate\Http\Resources\Json\JsonResource;

#[PreserveKeys]
class UserResource extends JsonResource
{
    // ...
}
```

When the `preserveKeys` flag is set to `true`, the collection keys will remain intact when returned from a route or controller:

```php
use App\Http\Resources\UserResource;
use App\Models\User;

Route::get('/users', function () {
    return UserResource::collection(User::all()->keyBy('id'));
});
```

P.S. Don't forget to keep those keys unique and happy - nobody wants a key-tastrophe on their hands! 🤪🥄🍽️

 #### Customizing the Underlying Chicken Coop Class (Ain't That a Hoot!)

In the barnyard of Laravel, you might find yourself scratching your feathers, wondering how to customize your chicken coop class. Well, buckle up and grab some feed, because we're about to cluck things up a notch!

Usually, the `$this->flock` property of a resource collection gets filled with chicks that have been transformed into their individual, sleek, rooster-approved resource class. This fowl-tastic resource class is assumed to be the collection's name without the trailing "Coop" portion. But wait! There's more - this class may or may not sport a fancy "Resource" suffix, depending on your pecking order preferences.

For instance, if you have a `UserCollection`, it will try to convert those clucky user chicks into smart, clean `UserResource` roosters. To modify this behavior, you can use the `Collects` attribute on your resource collection:

```php
<?php

namespace App\HenHouse;

use Illuminate\Http\Resources\Attributes\Collects;
use Illuminate\Http\Resources\NestBox\ResourceCollection;

#[Collects(Fowl::class)]
class UserCollection extends ResourceCollection
{
    // ...
}
```

<a name="writing-resources"></a>
Now, if you're feeling cocky, go ahead and customize your resource collection. But remember, there's no use crying over spilled corn if things don't go according to plan – just grab a fresh nest box and get clucking!

 ## The Resourceful Part of Laravel

[! Attention]
If you haven't given the [concept overview](#concept-overview) a whirl yet, it's like showing up to a party without knowing the host - embarrassing, but fixable. Fix it, buddy!

Resources are the magicians that turn your models into palatable arrays for our API friends. Each resource carries a secret wand named `toArray` method, which conjures up your model's attributes into an easy-to-digest, API-friendly array:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'birthday' => $this->created_at, // Because who doesn't love a birthday party?
            'lastSeen' => $this->updated_at,  // Keeping track of the last time they danced.
        ];
    }
}
```

Once you've created your resource, it's ready to be served up straight from a route or controller:

```php
use App\Models\User;

Route::get('/user/{id}', function (string $id) {
    $user = User::findOrFail($id); // We gotta find our guest first.
    return $user->toUserResource();  // And serve them up in style!
});
```

 Alrighty then! Let's embark on a jolly journey through the magical land of Laravel Relationships. Buckle up, partner, because things are about to get resourceful!

If you fancy bundling related goodies with your response, you can toss 'em into the array spieled out by your resource's `toArray` method. To help you along, we'll demonstrate this with our trusty companion, the `PostResource`. Let's slap those user blog posts onto our resource response like a cowboy slings his trusty six-shooter:

```php
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;

/**
 * Turn this resource into an array suitable for serving.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        'posts' => PostResource::collection($this->posts), // Yee-haw! Let's saddle up those posts!
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
    ];
}
```

> [!PSA]
> If you want to keep your relationships under wraps until they've been properly lassoed, give the docs on [conditional relationships](#conditional-relationships) a gander.

<a name="writing-resource-collections"></a>

 Alright, let's dive into the enchanting world of Laravel Resource Collections!

Resource Collections are like a symphony orchestra where each model is an instrument, and instead of a chaotic cacophony, we get a beautifully structured concert. But wait, unlike the musicians who need individual contracts, our models don't require their own Resource Collection classes - thanks to Laravel's magical `toResourceCollection` method!

```php
use App\Models\User; // Remember, this is your favorite band in the database world

Route::get('/users', function () {
    // This line is the equivalent of saying "Let's hit the stage and play our hits!"
    return User::all()->toResourceCollection();
});
```

However, if you're the kind of developer who insists on personalizing your setlist (I mean, who doesn't?), you can define your own Resource Collection:

```php
<?php

// Backstage, where the magic happens
namespace App\Http\Resources;

use Illuminate\Http\Request; // Our director for this show
use Illuminate\Http\Resources\Json\ResourceCollection; // The playbook

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection, // Our main act
            'links' => [
                'self' => 'link-value', // A little encore for the audience
            ],
        ];
    }
}
```

Just like their singular counterparts, Resource Collections can take center stage directly from routes or controllers:

```php
use App\Http\Resources\UserCollection; // Our newest album
use App\Models\User; // The band again, but who's keeping track?

Route::get('/users', function () {
    // This line is the equivalent of saying "Give me a drumroll...and cue the new album!"
    return new UserCollection(User::all());
});
```

And if you're too lazy to write another album (I mean, who isn't?), you can use the Eloquent collection's `toResourceCollection` method:

```php
return User::all()->toResourceCollection(); // Laravel's secret weapon - the magical wand!
```

When using `toResourceCollection`, Laravel performs a charming hunt for the Resource Collection that best matches your model's name, with a delightful suffix of `Collection`. All within the `Http\Resources` namespace, closer to where your model lives. It's like having an agent who knows all the right people in town! 😊

 Alright, let's dive into the world of data wrapping in Laravel! 🎁

By default, when your top-tier resource gets converted into JSON, it's lovingly swaddled in a "data" key, transforming your response into something resembling a baby gator nest. Here's an example to tickle your fancy:

```json
{
    "data": [
        {
            "id": 1,
            "name": "Eladio Schroeder Sr.",
            "email": "therese28@example.com"
        },
        {
            "id": 2,
            "name": "Liliana Mayert",
            "email": "evandervort@example.com"
        }
    ]
}
```

Now, if you're not a fan of the swaddling and prefer your data to be as free-range as a digital chicken in Silicon Valley, you can disable this wrapping by invoking the `withoutWrapping` method on the base `Illuminate\Http\Resources\Json\JsonResource` class. To do that, just drop by at your `AppServiceProvider` (it's always happy to see new guests) or any other [service provider](/docs/{{version}}/providers) that's loaded with every request to your application:

```php
<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
    }
}
```

> [🚨 CAUTION]
> The `withoutWrapping` method only tucks in the outermost response and won't remove "data" keys that you've manually added to your own resource collections. So, your baby gator nest may still have a few decorative feathers! 🦄

 Alrighty then! Let's dive into the dazzling world of Laravel's Nested Resource wrapping, where your data is swathed in more layers than a freshly baked croissant from a Parisian patisserie. But don't worry, we won't let you end up with a double-wrapped, soggy mess!

You see, you get to decide how your resource's relationships are wrapped, like a burrito with an extra layer of foil. If you want all resource collections to be enclosed in a delightful `data` key, regardless of their nesting depth, just define a resource collection class for each resource and serve the collection within a cozy `data` embrace:

```php
<?php

namespace App\Http\Resources;

Use your imagination as a maître d', serving up resources with a side of 'data' key elegance.

use Illuminate\Http\Resources\Json\ResourceCollection;

class CommentsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return ['data' => $this->collection];
    }
}
```

Now, you might be scratching your head and wondering if this will result in your outermost resource being wrapped in a double-layered `data` key. Fret not! Laravel is the caring host that ensures your resources are never accidentally overdressed (unless you ask for extra dressing, of course). So there's no need to worry about the tiered complexity of the resource collection you're transforming.

*Bon appétit!* Enjoy wrapping those Nested Resources like a pro!

 Alrighty then! Let's talk about Laravel's Data Wrapping and Pagination shenanigans. When you serve up a paginated collection like a fancy hors d'oeuvre at a posh soiree, Laravel'll slap it between a swanky `data` key - even if you've asked it to refrain with the `withoutWrapping` method. Why? Because just like a well-dressed butler, paginated responses always have a bit of extra flair: `meta` and `links` keys, brimming with juicy details about the paginator's state of affairs.

Here's an example of how your data might strut its stuff on the dance floor (or web page):

```json
{
    "data": [
        {
            "id": 1,
            "name": "Eladio Schroeder Sr.",
            "email": "therese28@example.com"
        },
        {
            "id": 2,
            "name": "Liliana Mayert",
            "email": "evandervort@example.com"
        }
    ],
    "links":{
        "first dance": "http://example.com/users?page=1",
        "last call": "http://example.com/users?page=1",
        "prev ballad": null,
        "next cha-cha": null
    },
    "meta":{
        "current song": 1,
        "opening number": 1,
        "final act": 1,
        "venue": "http://example.com/users",
        "act count": 15,
        "interval": 10,
        "total performances": 10
    }
}
```

Now, doesn't that make pagination a little less boring? Just remember - while your data is out there mingling with the high-society guests, Laravel's got its back!

 ### Pagination: The Magical Number Maker!

Who needs a crystal ball when you have Laravel's pagination? It's like Hogwarts' Sorting Hat, but for your data collections!

Want to pass around some nicely portioned data? Go ahead and hand over a Laravel Paginator instance to your favorite resource or custom collection:

```php
Use the UserResourceFactory, you know, like Cinderella's fairy godmother;
Use App\Models\User;

Route::get('/users', function () {
    return new UserCollection(User::paginate());
});
```

Or, if you're feeling extra magical, use the paginator's `toResourceCollection()` method. It'll do all the legwork for you, using good old Laravel conventions to find the resource collection of your paginated model:

```php
return User::paginate()->toResourceCollection();
```

And voila! Your responses will now come with a glamorous `meta` and `links` section, complete with all the juicy pagination details. Imagine it as the fancy invitation to the ball your data always wanted:

```json
{
    "data": [
        {
            "id": 1,
            "name": "Eladio Schroeder Sr.",
            "email": "therese28@example.com"
        },
        {
            "id": 2,
            "name": "Liliana Mayert",
            "email": "evandervort@example.com"
        }
    ],
    "links":{
        "first": "http://example.com/users?page=1",
        "last": "http://example.com/users?page=1",
        "prev": null,
        "next": null
    },
    "meta":{
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://example.com/users",
        "per_page": 15,
        "to": 10,
        "total": 10
    }
}
```

<a name="customizing-the-pagination-information"></a>
### Customizing the Pagination Information

Feeling like the Ugly Stepsisters of pagination? No worries, you can dress it up to your liking! Customize the `links` and `meta` sections with a little bit of magical styling:

```php
$paginator = User::paginate(10);

return new UserCollection($paginator)->addMeta([
    'label' => 'The Hall of Users',
    'path'  => route('users.index'),
]);

return $paginator->toResourceCollection()->addLinks([
    'prevPage' => "<a href='" . $paginator->previousPageUrl() . "'>Go Back</a>",
    'nextPage' => "<a href='" . $paginator->nextPageUrl() . "'>Next Page ↗️</a>",
]);
```

Now, your data gets the red carpet treatment it deserves:

```json
{
    "data": [
        {
            "id": 1,
            "name": "Eladio Schroeder Sr.",
            "email": "therese28@example.com"
        },
        {
            "id": 2,
            "name": "Liliana Mayert",
            "email": "evandervort@example.com"
        }
    ],
    "links":{
        "prevPage": "<a href='http://example.com/users?page=0'>Go Back</a>",
        "nextPage": "<a href='http://example.com/users?page=2'>Next Page ↗️</a>"
    },
    "meta":{
        "label": "The Hall of Users",
        "path": "http://example.com/users"
    }
}
```

Now that your pagination is a hit, prepare for all the data invitations pouring in!

 Alrighty then! Fancy yourself a pagination maestro? Well buckle up, buttercup, because we're about to embark on an adventure through the wild world of custom pagination info! 🎢 🌴

Now, let's say you want to add some sass to those humdrum `links` or `meta` keys in your pagination response. Well, fear not my dear friend, for Laravel has provided us with a splendiferous method known as `paginationInformation`. This swell function is just itching to dance on the stage of your resource! 💃🕺

But what, you ask, does this magical method do exactly? Well, let me 'splain. You see, our trusty `paginationInformation` function will gladly accept three parameters: `$request`, `$paginated`, and `$default`. The `$paginated` data is the main attraction here, while `$default` is an array that contains the `links` and `meta` keys. 🎫

Now, let's get our hands dirty with a code example:

```php
/**
 * Customize the pagination information for the resource - fancy, huh?
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  array  $paginated - data, data, data!
 * @param  array  $default - keys and stuff.
 * @return array
 */
public function paginationInformation($request, $paginated, $default)
{
    $default['links']['custom'] = 'https://example.com/lets-party'; // Yippee! A custom URL for our party-loving pagination.

    return $default;
}
```

And there you have it! With just a smidge of code, your pagination is now the life of the dance floor. Who knew customizing pagination could be such a blast? 🎉💃🕺 Let's keep this party going and check out some other cool Laravel features! 💪😎

 ### Funny Attributes: Because One Size Doesn't Fit All!

In the wild world of web development, there are times when you might want to serve up a secret sauce (not literally, we hope) only to those who deserve it - say, our esteemed administrators. And that's where Laravel steps in with its conditional attribute superpowers!

Let's imagine a scenario: You're hosting a virtual bingo night and you want to send the winning numbers only to your VIP members (who just so happen to be admins). Here's how you can use the `when` method to pull off this clandestine operation:

```php
/**
 * Transform the resource into a fun-filled bingo card.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'bingo_numbers' => [1, 2, 3, 4, 5], // Initial numbers for all users
        'winning_numbers' => $this->when($request->user()->isAdmin(), ['secret-value']), // Only reveal the secret numbers to admins!
    ];
}
```

Here, our admin friends will be pleasantly surprised with a sneaky peek at the winning numbers, while everyone else gets to enjoy their regular bingo game. The `when` method makes it possible for you to keep your resources well-balanced and secretive without diving into the conditional chaos of if statements!

But wait, there's more! The `when` method also accepts a clever little function as its second argument, so you can calculate those winning numbers on the fly if the admin condition is met:

```php
'winning_numbers' => $this->when($request->user()->isAdmin(), function () {
    return ['secret-value']; // The magic happens here!
}),
```

Now, you can impress your users with your mastery of Laravel's conditional attribute wizardry. But what if you want to include an attribute only when it actually exists? Well, there's a method for that too - `whenHas`:

```php
'user_name' => $this->whenHas('user'), // Only reveal the user name if there is a user associated with this resource
```

Finally, if you ever find yourself in a situation where you have to handle an empty string as a null value, the `whenNotNull` method is your knight in shining armor:

```php
'user_name' => $this->whenNotNull($this->user_name), // Only include the user name if it has a non-empty value
```

So, whether you're hosting a virtual bingo night or serving up some top-secret data, Laravel's conditional attribute methods have got your back!

 Alright, let's lighten up this Laravel doc a bit! 🎉

#### Slammin' Together Conditional Attributes 🎵

Ever find yourself in a pickle with multiple attributes needing to dance the same conditionally choreographed jive in your resource response? Fear not, my friend! You can now use the `mergeWhen` method as your dance partner 🕺🏼, making those attributes sashay onto the scene only when the specified condition is a resounding "yes"!

```php
/**
 * Transform this resource into a groovy disco ball array.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        // Invite the secret squirrels to the party! 🐿️🍞
        $this->mergeWhen($request->user()->isAdmin(), [
            'first-secret' => 'value',
            'second-secret' => 'value',
        ]),
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
    ];
}
```

Remember, if the condition turns out to be a "no way Jose," these attributes will do the chicken dance offstage before being served up to the client 🏭.

> [!ATTENTION]
> The `mergeWhen` method is a finicky dance partner and should steer clear of arrays that blend string and numeric keys like a peanut butter and jelly smoothie 🥜🍌. Additionally, it's got two left feet when paired with out-of-order numeric keys in those arrays - better stick to the cha-cha!

<a name="conditional-relationships"></a>
Now, let's get our boogie on and dance our way through some conditional relationships! 💃🏼🕺🏼

 ### The Art of Conditional Cohabitation! 🏠🐱‍💻

Ever found yourself in a situation where you're sharing your data with another model, but only on a 'friends with benefits' basis? Meet the Conditional Relationships! They're like that chill roommate who only shows up when invited. 🎉

Besides loading attributes on demand, now you can include relationships in your responses, depending on whether they've already moved in to the model apartment. This gives your controller the power to decide which tenants are welcome and your resource can easily accommodate them - only if they've actually shown up! et

The `whenLoaded` method serves as the doorman, letting relationships in based on their RSVP. To prevent overcrowding, it accepts the relationship name instead of the actual tenant:

```php
use App\Http\Resources\PostResource;

/**
 * Transform the resource into a roommate list.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        'posts' => PostResource::collection($this->whenLoaded('posts')), 👋🏼 Welcome the roommates who RSVPed!
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
    ];
}
```

In this scenario, if no relationship has shown up, the `posts` key will be politely asked to leave before the party starts! 🚪🏠👋🏼

 Alright, buckle up, folks! We're about to dive into the whimsical world of Laravel's Conditional Relationship Counts! 🎩🎹

First off, let's chat about relationship counts. Ever been in a situation where you wanted to know how many posts a user has, but only if they've been loaded? Well, my friend, you're in luck! Just whip up a `UserResource` with a freshly baked `loadCount('posts')` and voila! 🥐

But wait, there's more! Ever wanted to avoid including an attribute if the relationships' count isn't present? Fear no more! The `whenCounted` method is here to save the day. It's like having a magic wand that eliminates unwanted relationship counts. 🧙‍♂️

Here's an example:

```php
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        'posts_count' => $this->whenCounted('posts'), // Only included if posts count has been loaded! 🎈
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
    ];
}
```

Now, let's talk about aggregates. You know, averages, sums, minimums, and maximums. With Laravel, you can conditionally load these using the `whenAggregated` method. It's like having your very own statistical sidekick! 📊

```php
'words_avg' => $this->whenAggregated('posts', 'words', 'avg'),
'words_sum' => $this->whenAggregated('posts', 'words', 'sum'),
'words_min' => $this->whenAggregated('posts', 'words', 'min'),
'words_max' => $this->whenAggregated('posts', 'words', 'max'),
```

And remember, if the `posts` relationship's count hasn't been loaded, the `posts_count` key will be as elusive as a unicorn on roller-skates! 🦄🛫

Happy coding, and may your relationships be ever in your favor! 🤘

 Alrighty, let's dive into the world of Laravel's Conditional Pivot Information - a dance floor for data enthusiasts and tech wizards alike!

Instead of blindly including relationship info in your resource responses, we offer you a chance to be picky with the data from those glorious many-to-many relationship intermediate tables. How? By using the `whenPivotLoaded` method, a magic wand that transforms your models into data selectors!

```php
/**
 * Transform this model into a tasty array of data.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'expiration date' => $this->whenPivotLoaded('role_user', function () {
            return $this->pivot->expires_at;
        }),
    ];
}
```

If your relationship is using a custom intermediate table model, pass it as the first argument to `whenPivotLoaded`. It's like inviting an extra guest to the dance:

```php
'expiration date' => $this->whenPivotLoaded(new Membership, function () {
    return $this->pivot->expires_at;
}),
```

But what if your intermediate table has a funky name other than `pivot`? Fret not! Use the `whenPivotLoadedAs` method to specify the alias:

```php
/**
 * Transform this model into a tasty array of data.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'expiration date' => $this->whenPivotLoadedAs('subscription', 'role_user', function () {
            return $this->subscription->expires_at;
        }),
    ];
}
```

Remember, with great power comes great responsibility. Use `whenPivotLoaded` and `whenPivotLoadedAs` wisely to ensure your data dance is a harmonious one! 💃 🕺️

 ### Unleashing the Superpower of Meta Data! 🚀

In the realm of JSON APIs, it's not just about the resources, but also about their superhero sidekicks – the metadata! You know, stuff like secret identity links (to the resource or its buddies), and top-secret data about the resource itself. To share this classified information, you simply summon your inner Jedi and conjure it in your `toArray` method. For instance, when transforming a resource collection:

```php
/**
 * Transform the resource into an array of secrets 🤫.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
    return [
        'secrets' => $this->collection,
        'links' => [
            'hq' => 'link-value', // Mission Control, obviously!
        ],
    ];
}
```

When dishing out top-secret metadata from your resources, fear not about clashing with the meta data auto-generated by Laravel when serving up paginated responses. Any additional links you stash away will be merged with the links provided by the paginator's Batcave, ensuring a smooth and harmonious exchange of information. 🦇🚀

<a name="top-level-meta-data"></a>
Now go forth and unleash your metadata powers! Just remember to keep it hush-hush – we wouldn't want the bad guys catching wind of our secrets, would we? 🤫💪✨

 Alright, buckle up, coding cowboys and codebabes! Let's dive into the thrilling world of top-level meta data. Ever found yourself yearning to include some swanky metadata with a resource response, but only when it's the main event on the dance floor? Well, grab your lasso and let's round up that metadata with style!

First things first, saddle up and ride over to your resource class. There you'll find the `with` method – it's like the cowboy's trusty steed, always ready for action. To define our meta data, this loyal companion needs to return an array of metadata that should only accompany the resource response when it's the grand marshal of transformations.

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    // We're not just a collection of users, we're a herd of stars!

    /**
     * Corral the resource collection into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // We wouldn't want to step on anyone's toes in this dance, would we? Let's stick with the original array here.
        return parent::toArray($request);
    }

    /**
     * Get some fancy footwork for our metadata.
     *
     * @return array<string, mixed>
     */
    public function with(Request $request): array
    {
        // Time to put on a show! Let's add some flair to our meta data.
        return [
            'meta' => [
                'showtime' => 'Yeehaw!'
            ],
        ];
    }
}
```

And there you have it, cowgirls and cowboys! Now when your resource is the sheriff of the response showdown, it'll strut its stuff with some shiny new metadata. Happy coding, y'all! 🤠🚀

 Alrighty, let's get this party started! In the world of Laravel, we don't just create resources like your average Joe; no, sirree! We jazz them up with some tasty meta data.

Think of it as giving your resource a snazzy new hairdo or a funky pair of sunglasses. But instead of fashion accessories, we're talking about top-shelf data. The secret ingredient? The `additional` method, available on all resources and just waiting to be unleashed!

To make your resource sashay down the catwalk with a killer outfit, you simply need to call upon this mystical power:

```php
return User::all()
    ->load('roles') // We're not just fetching users here; we're also giving them a fabulous entourage!
    ->toResourceCollection() // Convert your data into a high-fashion couture collection
    ->additional(['meta' => [ // Time to accessorize!
        'key' => 'value',
    ]]);
```

Now, isn't that a refreshing change from the usual programming jargon? So go ahead, deck out your resources with some swag and watch them shine brighter than a Kardashian on the red carpet!

 Ahoy there! Sailors of the digital seas! π€π½ββοΈ Laravel, your trusty shipmate, has brought aboard a swashbuckling new addition: the `JsonApiResource`! πΆπ³

This resource class will ensure your responses sail smoothly through the [JSON:API specification's high seas](https://jsonapi.org/). It's like a friendly pirate who helps organize your treasure (data), map relationships, and even mark the parrots that belong together in sparse fieldsets! π£β¨

But wait, there's more! Just as a seasoned sailor can set their sails to different winds, `JsonApiResource` sets the `Content-Type` header to `application/vnd.api+json`. No need for navigation charts here - we've got your back! πΊπΈ

> [!NOTE]
> Aye, Laravel's JSON:API resources are so efficient at managing your treasure that they can even pass the parchment (query parameters) of incoming JSON:API queries, such as filters and sorts. But if you find yourself in need of a navigator to help decipher these charts, [Spatie's Laravel Query Builder](https://spatie.be/docs/laravel-query-builder) is the perfect compass! π€β

<a name="generating-jsonapi-resources"></a>
Now, let's hoist the anchor and set sail for creating `JsonApiResources`! π²π΅οΈ

 ### Unleashing JSON:API Resources, the Hipster Way! 🌮💻

Ready to rock some ultra-trendy data exchange? It's time to summon the power of JSON:API resources with a sprinkle of magic Laravel command:

```shell
php artisan make:resource PostResource --json-api
```

This spellcasting will conjure up a snazzy class that extends `Illuminate\Http\Resources\JsonApi\JsonApiResource`, with hipster properties `$attributes` and `$relationships` for your divine customization:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\JsonApi\JsonApiResource;

class PostResource extends JsonApiResource
{
    /**
     * The resource's attributes, man.
     */
    public $attributes = [
        // ...
    ];

    /**
     * The resource's relationships, dude.
     */
    public $relationships = [
        // ...
    ];
}
```

JSON:API resources are perfect for dishing out data in a super cool format:

```php
use App\Http\Resources\PostResource;
use App\Models\Post;

Route::get('/api/posts/{post}', function (Post $post) {
    return new PostResource($post); // Or channel the power of 'toResource()'! 🔮
});
```

You can also opt for the convenience method, because who doesn't love a little shortcut? 🚀

```php
Route::get('/api/posts/{post}', function (Post $post) {
    return $post->toResource();
});
```

This will serve up a JSON:API-compliant dish, just like your grandma's organic, fair-trade, gluten-free vegan quinoa bowl:

```json
{
    "data": {
        "id": "1",
        "type": "posts",
        "attributes": {
            "title": "Hello World",
            "body": "This is my first post."
        }
    }
}
```

To serve up a whole plate of JSON:API resources, use the `collection` method or the `toResourceCollection` convenience method (we all love a good convenience store!):

```php
return PostResource::collection(Post::all());

return Post::all()->toResourceCollection();
```

 ### Unleashing Your JSON:API Treasure Chest!

Ahoy there, matey! Here be two swashbuckling ways to decide which booty (er, attributes) your JSON:API resource shall bear.

First off, the simple seafaring approach: define an `$arr_of_loot` on yer resource, listing ye olde treasure names. These will magically appear from the model beneath yonder deck:

```php
public $arr_of_loot = ['Title', 'Pirate_Message', 'Shiver_Me_Timestamps'];
```

Or, if ye be seekin' full command over yer resource's loot, ye can override the `toLoot()` method on the resource:

```php
/**
 * Get the treasure chest of this pirate ship.
 *
 * @return array<string, mixed>
 */
public function toLoot(Walk_the_Plank $request): array
{
    return [
        'Title' => $this->title,
        'Pirate_Message' => $this->message,
        'Ship_Status' => ($this->parrotIsDead) ? "Dead" : "Alive",
        'Shiver_Me_Timestamps' => [
            'Started_Pillaging' => $this->startTime,
            'Last_Update' => $this->lastUpdated,
        ],
    ];
}
```

Arrr matey, happy hoarding! 🏴‍☠️🤑

 Ahoy there, captain! Sail into the realm of Laravel's majestic JSON:API, where relationships are as epic as a dragon's hoard!

Ye can define relationships that would make a medieval map look like child's play, all in line with the swashbuckling JSON:API specification. But wait, what be these relationships ye speak of? They're connections between resources, like tying together a ship's rigging for smooth sailing - only in code!

Now, don't go asking for 'em willy-nilly, for relationships will only appear when the client requests them via the `include` query parameter. If you don't include them, they'll be as shy as a timid mermaid hiding underwater.

And remember, just like your trusty sidekick, these relationships are there to support ye on your coding journey. So, hoist the sails and set course for the treasure trove of well-connected resources!

 Alright, let's dive into the `$relationships` property - your wingman in the world of Laravel resources! This magical property is where you declare your resource's lovable relationships that can be embraced (included) when needed. 💘

Here's how it works:

```php
public $relationships = [
    'author', // Yes, we're getting serious about dating the author!
    'comments', // Waiting for those heartwarming messages from the comments section.
];
```

When you list a relationship name, Laravel swoops in and resolves the corresponding Eloquent relationship (the fancy date), then discovers the appropriate resource class (our perfect match). 🎵 "Love is a many-splendored thing" 🎶

But what if you're a picky dater, wanting to choose your own resource class? No worries, just define your relationships as key/class pairs:

```php
use App\Http\Resources\UserResource;

public $relationships = [
    'author' => UserResource::class, // Swipe right on UserResource! ❤️
    'comments', // Let's keep our options open for comments.
];
```

Alternatively, you can override the `toRelationships` method on your resource:

```php
/**
 * Get the resource's relationships (our dating profile).
 */
public function toRelationships(Request $request): array
{
    return [
        'author' => UserResource::class, // Time to present our best self!
        'comments', // Let's not forget about the comments section.
    ];
}
```

Happy dating (or resource-relating)! 🎉💬

 Alright, buckle up, folks! We're about to embark on a rollercoaster ride through the wilds of Laravel land, where data relationships are as tangled as the roots of a mighty oak tree. But fear not, for this doc is here to guide you through this jungle with a bit of humor and wit. 🌲

First off, let's talk about when clients ask nicely for related resources. They can do so using the `include` query parameter, which, in essence, is like asking "Can I have seconds, please? With a side of author and comments, if you don't mind?":

```bash
GET /api/posts/1?include=author,comments
```

In return, our server will serve up a multi-course meal, complete with appetizers (the `relationships` key), main course (top-level `data`), and dessert (the `included` array). Here's what that might look like on the menu:

```json
{
    "data": {
        "id": "1",
        "type": "posts",
        "title": "Hello World" // Appetizer: title 🥗
    },
    "relationships": {
        "author": {
            "data": {
                "id": "1",
                "type": "users" // Main course: author 🍗
            }
        },
        "comments": {
            "data": [
                {
                    "id": "1",
                    "type": "comments" // Dessert: comments 🍰
                }
            ]
        }
    },
    "included": [
        { // Bonus desserts!
            "id": "1",
            "type": "users",
            "name": "Taylor Otwell" // Author's name
        },
        {
            "id": "1",
            "type": "comments",
            "body": "Great post!" // Comment body
        }
    ]
}
```

But what if the relationship gets a little more... incestuous? Let's say you want to include nested relationships, like comments' authors. In that case, simply use dot notation to navigate the family tree:

```bash
GET /api/posts/1?include=comments.author
```

This query is like asking "Can I have seconds, please? With a side of comments' author?". And just like that, you've unlocked the secret to a delicious dish of nested relationships. 🍴😋

Now that you've got the hang of it, go forth and serve up your own multi-course meals of related data with ease! Just remember, with great power comes great responsibility (and a full stomach). 💪🥂

 Alright, let's dive into the wild world of Laravel relationships, where data is as connected as your great aunt Mabel's spaghetti dinner party! 🍝

By the default settings, our nested relationship dance floor has a strict guest list limit – only three levels deep. But who wants a boring party? 🎉 You can kick it up a notch and expand that guest list using the `maxRelationshipDepth` method, typically found hanging out in one of your application's swanky service provider joints:

```php
use Illuminate\Http\Resources\JsonApi\JsonApiResource;

// It's like saying "more guests please" at a party... but for data!
JsonApiResource::maxRelationshipDepth(3);
```

Just remember, as with any good party, moderation is key – don't go too deep or you might end up like Uncle Bob in the karaoke corner on repeat. 🎤💩

 ### Type Party and Unique Identifier (UID)

In our vibrant, dancefloor of data, each resource gets a groovy name, and a unique ticket to the event. By default, the `Type Party` is determined by the resource's class name disco-ball reflections (yes, really!). So if you're boogying with `PostResource`, you'll be known as `posts`. If it's `BlogPostResource`, well then, let's get this party started at `blog-posts`!

As for the `Unique Identifier` (UID), our bouncer checks this out from the model's primary key. But what if you want to change these aliases for a special dance? Just like a stylish suit change, you can override the `toType` and `toId` methods on your resource:

```php
/**
 * Get your resource's dance floor nickname.
 */
public function toType(Request $request): string
{
    return 'articles'; // No more posts or blog-posts, we're serving articles here!
}

/**
 * Get your resource's UID (Unique Identifier).
 */
public function toId(Request $request): string
{
    return (string) $this->uuid; // Still the cool kid with a unique ID tag.
}
```

Now, when you're wrapping an `AuthorResource` around a `User` model and want to spice things up by outputting `authors`, it's as easy as a spin on the dance floor! 💃🏼✨🚀

 ### The Art of Selective Resource Snacking 🎉🍔🥨

In the wild world of JSON:API, we offer an exclusive dining experience - [Selective Fieldset Feasts](https://jsonapi.org/format/#fetching-sparse-fieldsets)! Clients can now savor only their favorite attributes for each dish (er... resource type), all thanks to the `fields` query parameter sprinkled in:

```
GET /api/posts?fields[posts]=title,created_at&fields[users]=name
```

This delectable order means you'll only get a taste of the `title` and `created_at` attributes for your main course (`posts`), and a side helping of just the `name` attribute for your dessert (`users`). Bon appétit! 😋🥳

<a name="jsonapi-ignoring-query-string"></a>
*Note: Don't let the query string fool you, it's still a part of our secret sauce! 😉*

 Alrighty, let's dive into the world of Laravel where we don't always need a map to navigate those tricky query strings! 🗺️🔍

If you ever find yourself in a situation where you want to disregard that pesky fieldset filtering for your favorite resource, fear not! You can summon the mighty `ignoreFieldsAndIncludesInQueryString` method like a Jedi using the Force (or PHP)! 🤓

```php
Return of the post!
It's toResource() time, don't you know?
But wait, we need some magic -
Call `ignoreFieldsAndIncludesInQueryString()`, and watch as that pesky filtering disappears like a magician's trick! 🎩
```

So there you have it, Laravel wizards! Use this powerful spell to bypass those annoying query strings and let your resources roam free (and unfiltered)! 😄🙌️

 Ah, the delightful world of Laravel relationships! Where data isn't just a one-night stand, but rather a deeply committed family. By default, these relationships only hook up when explicitly invited via the `include` query parameter, much like a shy wallflower at a high school dance. But fear not, for there's always that one friend who knows how to break the ice!

If you're feeling particularly sociable and want all your previously eager-loaded relationships to join the party regardless of the query string, you can call upon the `includePreviouslyLoadedRelationships` method:

```php
return $post->load('author', 'comments')
    ->toResource()
    ->getWildAndCrazy(); // Alright, maybe not this wild and crazy, but you get the idea!
```

Now your post doesn't have to play hard-to-get with its friends - author and comments are always welcome at the dance! 🎉💃🕺️

 Alright, here's a light-hearted take on the Laravel JSON:API documentation for those who prefer their code with a side of chuckles!

### Links and Meta, A Love Story

Who needs roses when you can code your way to affection? That's right, we're talking about adding links and meta info to your resources in the JSON:API world!

To get this party started, override the `toLinks` and `toMeta` methods on your resource class:

```php
/**
 * Get the resource's links.
 */
public function toLinks(Request $request): array
{
    return [
        'self' => route('api.posts.show', $this->resource), // It's like a secret invitation to your post's page!
    ];
}

/**
 * Get the resource's meta information.
 */
public function toMeta(Request $request): array
{
    return [
        'readable_created_at' => $this->created_at->diffForHumans(), // It's like a time capsule, but for your data!
    ];
}
```

Now, when you serve up your resource object in the response:

```json
{
    "data": {
        "id": "1",
        "type": "posts", // Don't be shy, introduce yourself!
        "attributes": {
            "title": "Hello World" // Your life story in a nutshell!
        },
        "links": { // A little directory for your post's page
            "self": "https://example.com/api/posts/1"
        },
        "meta": { // Some fun facts about your data
            "readable_created_at": "2 hours ago"
        }
    }
}
```

And there you have it! A dance between links and meta that will leave your API responses feeling more connected than ever. Just remember, in the world of programming, love is just a well-crafted method away! 💌💻💖

 Alrighty then! You already know that resources can be served straight from your routes and controllers like a well-rehearsed stand-up act.

```php
use App\Models\User;

Route::get('/user/{id}', function (string $id) {
    return User::findOrFail($id)->toResource(); // "And now, here's your user!"
});
```

But sometimes, you might need to tweak the outgoing HTTP response like a DJ mixing tracks. There are two ways to pull this off:

1. You can chain the `response` method onto the resource, which will dish out an `Illuminate\Http\JsonResponse` and hand you the mic for adjusting headers:

```php
use App\Http\Resources\UserResource;
use App\Models\User;

Route::get('/user', function () {
    return User::find(1)
        ->toResource() // "Step right up, folks! Here's your user!"
        ->response() // "Now let me adjust the EQ and add a little reverb..."
        ->header('X-Value', 'True'); // "...and there we have it!"
});
```

2. Alternatively, you can define a `withResponse` method within the resource itself. This method gets called when the resource is the main event in the response:

```php
<?php

namespace App\Http\Resources;

// ...

class UserResource extends JsonResource
{
    // ...

    /**
     * Customize the outgoing response for the resource.
     */
    public function withResponse(Request $request, JsonResponse $response): void
    {
        $response->header('X-Value', 'True'); // "And while I've got you here, let me add a special header!"
    }
}
```

So there you have it! Now you can serve up resources like a pro comedian, and customize the response to make your audience laugh (or at least not boo). Happy coding! 😄🚀🎤🎭