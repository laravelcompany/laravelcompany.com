 # The All-Knowing, Magic Bean of PHP Land! 🪄🚀

## Welcome to the Service Container 🌟

### No Fuss, Just Resolution 😎

*Zero Configuration Resolution*: Let's face it, who has time for fiddly configurations when you can have magic beans? Our container does the heavy lifting for you, so you don't have to! ✨

*When to Utilize the Container*: When you want your code to dance in harmony, not a chaotic rave. The container ensures that everything is wired up correctly and ready to party! 💃🏼🕺🏼

<a name="binding"></a>

## Binding: The Dance Card of Dependencies 🕺🏼👫

### Basic Steps for a Smooth Waltz 💃🏼🕹️

*Binding Basics*: First steps are always the hardest, but with our binding basics, you'll be dancing circles around those pesky dependencies in no time! 💼💵

*Binding Interfaces to Implementations*: Now that you've mastered the basics, it's time to learn a new move: swapping out your implementation partners like a boss! Just think of it as having multiple dance partners in your pocket 😉

*Contextual Binding*: Our container is smart enough to know when and where to serve up dependencies. So whether you need a partner for the waltz or the cha-cha, we've got you covered! 💃🏼🕺🏼

*Contextual Attributes*: Give your dependencies that extra sparkle with contextual attributes! Don't settle for plain vanilla when you can have chocolate chip, mint, or rocky road 🍦🥧

*Binding Primitives*: Sometimes, all you need is a simple, trusty bean to get the job done. Our container can handle those too! 🌽🥕

*Binding Typed Variadics*: Want to add some spice to your dance card? With typed variadics, you can mix and match your dependencies like a pro! 🌶️🍅

*Tagging*: Tag, you're it! Tagging makes it easy to round up the right dependencies for any occasion. Just shout "You're it!" and watch them swarm towards you! 🐶🦹‍♂️

*Extending Bindings*: Customize your dance moves with binding extensions! Be the life of the party with unique routines tailored to your needs 💃🏼🕺🏼

<a name="resolving"></a>

## Resolving: The Magical Extraction of Dependencies 🪄✨

### The Make Method: Your Personal Dependency Extractor 🎃🔩

*Automatic Injection*: Let our container do the heavy lifting for you! It'll automatically inject your dependencies into their rightful places, like a real-life Mary Poppins ✨🏡

<a name="method-invocation-and-injection"></a>

## Method Invocation and Injection: The Ultimate Party Trick 🎩🕺🏼

### Have Fun and Let the Container Handle the Rest! 🎉🚀

<a name="container-events"></a>

## Container Events: The Invitation List to End All Invitation Lists 🥳💃🏼

### Rebinding: Swap Out Partners on the Fly 🕺🏼👫

<a name="psr-11"></a>

## PSR-11: The Universal Language of Magic Beans 🌍🪄

Our container is compatible with PSR-11, so you can bring your magic beans to any party! 🎉🕺🏼💃🏼

 Ahoy there, coding pirates! Buckle up for a thrilling deep dive into Laravel's swashbuckler of dependency management – the Service Container! This magical treasure chest is your secret weapon in navigating the choppy seas of class relationships. You know, like Jack Sparrow and his endearing tryst with rum and Captain Barbosa... but with fewer peg legs and more PHP.

Dependency Injection, a term that sounds suspiciously like a pirate's tavern ritual, is actually a fancy way of saying we're passing class companions to our shipmates during boarding (or constructor in programming terms). It's the lifeblood of any well-oiled vessel on the high seas of object-oriented programming.

Let's hoist the sails with an example:

```php
<?php

namespace App\Http\Controllers;

use App\Services\AppleMusic as Captain_Smooth_iTunes; // Yes, we named it after a certain pirate...
use Illuminate\View\View;

class PodcastController extends Controller
{
    /**
     * Arrrgh! Make me a drink with this AppleMusic!
     */
    public function __construct(protected Captain_Smooth_iTunes $rum) {}

    /**
     * Show information about the given podcast.
     */
    public function show(string $id): View
    {
        return view('podcasts.show', [
            'podcast' => $this->rum->findPodcast($id)
        ]);
    }
}
```

In this exciting tale, our fearless captain (the PodcastController) requires a trusty crewmember (AppleMusic service) to fetch podcasts like a pro. So, we're going to inject that swashbuckling recruit! With the service on board, we can easily "mock" or create a phony AppleMusic when it's time for a dress rehearsal (i.e., testing our application).

A thorough mastery of Laravel's Service Container is crucial if you fancy yourself a seasoned developer on the grand pirate ship of building robust applications, or if ye be hankering to join Blackbeard's crew – contributing to the Laravel core itself!

<a name="zero-configuration-resolution"></a>
Ahoy again! The Service Container has this nifty feature called Zero Configuration Resolution. It's like having a fairy godmother who magically binds your classes for you. No more coding ceremonies or long walks to the registry office! Just sprinkle some pixie dust (or autowiring) and watch as your dependencies come together in perfect harmony.

Now, aren't you excited to set sail on this adventure with Laravel? Let's hoist the Jolly Roger, mateys, and prepare for a journey filled with camaraderie, PHP, and perhaps a few hidden treasures along the way!

 ### Magic Beans, No Golden Goose Required! 🌱🐑

If a class is an isolated, self-sufficient bean (no interfaces or demanding friends), the sorcery container doesn't need a spellbook to resolve it. Here's a little magic trick for you:

```php
<?php

class Service
{
    // ... brewing potions and casting spells
}

Route::get('/', function (Service $service) {
    dd($service::class);
});
```

Hit your app's `/` route, and - voila! - the `Service` class will be conjured up and injected into your route's ritual. This is sorcery level up. Now you can brew potions, cast spells, and perform rituals without getting bogged down in bloated configuration files.

Luckily, most of the classes you'll whip up when crafting a Laravel spellbook will be handed their ingredients (dependencies) by the container, including controllers, event listeners, middleware, and more. Even your queued jobs can type-hint dependencies for added flavor! Once you've tasted the power of automatic, zero-configuration dependency injection, going back to manual casting feels like trying to brew potions with a golden goose. 🐥✨

 Ahoy there, coding seafarers! Let's talk about our trusty ol' pal, the Container - a swashbuckler's best friend in Laravel land! This magical contraption is like the crew on your ship, always ready to step up when called for, yet rarely seen.

With zero configuration resolution at play, you can easily typecast your dependencies, like `Illuminate\Http\Request` or that finicky `FancyDatabaseThingy`, without ever having a drink with the Container. For instance, you might typecast `$request` in a route to make accessing current orders as easy as pirate pie:

```php
use Illuminate\Http\Request;

Route::get('/', function (Request $request) {
    // Arr matey! We're here to get the orders!
});
```

While the Container is always on deck, manning the ropes and ensuring your dependencies are injected like rum into a grog, you rarely have to engage it in small talk. But when ye be needing to converse with it, there be two scenarios worth noting:

1. When ye write a class that implements an interface (a fancy dance if there ever was one), and ye wish to typecast that interface on a route or constructor, ye must tell the Container how to resolve that interface by binding it to an implementation.
2. If ye be creating a Laravel package that ye plan to share with other pirates, you may need to bind your package's services into the Container.

So, there ye have it! The lowdown on when and why to chat up the Container. Keep in mind that it's not always necessary, but when ye do need it, it's as reliable as a sturdy ship and crew in stormy seas. Yarr!

 Ahoy there, code sailors! Welcome to Laravel's Bind-y the Pirate Adventure! Buckle up as we set sail on a journey through dependency injection land. Aye, mateys, we be talkin' 'bout Binding!

<a name="binding-basics"></a>
**Binding Basics:**

In the vast ocean of Laravel, you'll often encounter instances where you need to create and manage objects that are used across your application. That's where Bind-y comes into play! By binding a service to an interface, we can ensure that when our ship requires that specific service, it gets exactly what it needs, every time.

Let's get our hooks into some code:

```php
use Illuminate\Container\BindingResolutionException;
use Illuminate\Contracts\Queue\Queue as QueueContract;
use Illuminate\Support\ServiceProvider;
use Lucid\Facades\Queue as Facade;
use RealMenCode\RedisQueue\RedisQueue as RedisQueue;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->when(QueueContract::class)
                    ->needs(queue: RedisQueue::class)
                    ->give(Facade\queue('redis'));
    }
}
```
Here, we're using Laravel's built-in Service Provider to register a binding. We tell the application that whenever it needs an instance of `QueueContract`, give it the Redis version of the queue (`RealMenCode\RedisQueue\RedisQueue`) by using our trusty Lucid facade, `Facade\queue('redis')`.

Now whenever you want to use the Queue service in your application, just ask for `app(QueueContract::class)`, and Laravel will give you the Redis version of the queue, ready to help hoist those anchors and set sail!

Arrrr mateys, that's Binding basics! But don't let the pirate humor fool ya, this is some powerful stuff. Keep exploring Laravel, and remember – it ain't just code, it's an adventure!

 Ahoy there, coder! Buckle up for a whirlwind tour through the mystical realms of Laravel bindings - where magic meets technology, and spells are cast in PHP syntax! 🧝‍♂️🔮💻

<a name="simple-bindings"></a>

#### Simple Bindings 🎩👑

Ever wanted to be a sorcerer's apprentice, but with more phparticles and less broomsticks? Well, simple bindings are your potion for turning pumpkins into coaching cars! 🌽➡️🚗

With simple bindings, you can conjure up services in your application and tie them to a specific instance. This is like having a genie in a bottle, but instead of wishes, they grant you access to classes on demand! 🧞‍♂️💫📚

Here's the incantation for binding a simple class:

```php
$this->bind('App\Services\ExampleService', function () {
    return new App\Services\ExampleService();
});
```

In this example, `App\Services\ExampleService` is the name of the service you're binding, and the arrow function creates a new instance every time it's called. Easy as pie! 🥧🔥

Remember, once bound, you can summon your service with:

```php
$example = app('App\Services\ExampleService');
```

And that's the tea on simple bindings! Next stop: advanced bindings - where the wizardry gets even more bewitching. 🧙‍♂️🔮🚀

 Alrighty then! Let's dive into the delightful world of Laravel's Simple Bindings, where your services become as tight-knit as a family of circus performers in a tiny car! 🎪

Most of your service container bindings will reside within the hospitable abode known as [service providers](/docs/{{version}}/providers). And just like inviting friends over for dinner, you'll have access to the container via the `$this->app` property.

Within a service provider, you can register a binding using the `bind` method, passing the class or interface name that we wish to register along with a magical spell (er, closure) that conjures an instance of the class:

```php
use App\Services\Transistor;
use App\Services\PodcastParser;
use Illuminate\Contracts\Foundation\Application;

$this->app->bind(Transistor::class, function (Application $app) {
    return new Transistor($app->make(PodcastParser::class));
});
```

Don't fret! We're not casting spells on ourselves – we receive the container as an argument to the resolver and can then use it to summon sub-dependencies of the object we are constructing.

You'll mostly be working with the container within service providers, but if you'd like to play outside the box (or service provider), you can do so via the enchanting `App` [facade](/docs/{{version}}/facades):

```php
use App\Services\Transistor;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\App;

App::bind(Transistor::class, function (Application $app) {
    // ...
});
```

If you're the type who enjoys a good round of "I'll do it if he doesn't," you can use the `bindIf` method to register a container binding only if a binding has not already been registered for the given type:

```php
$this->app->bindIf(Transistor::class, function (Application $app) {
    return new Transistor($app->make(PodcastParser::class));
});
```

For your convenience, Laravel allows you to omit providing the class or interface name that you wish to register and instead lets it infer the type from the return type of the closure you provide to the `bind` method:

```php
App::bind(function (Application $app): Transistor {
    return new Transistor($app->make(PodcastParser::class));
});
```

> [!NOTE]
> No need to bind classes into the container if they don't have any interfaces. The container doesn't need a manual on how to build these objects – it can magically resolve them using reflection! 🔍✨

 Ahoy there, code pirates! Let's sail into the world of Laravel bindings, shall we? Buckle up and prepare to be knighted with the Singleton Scepter!

#### Anchoring a One-of-a-Kind Treasure

The `singleton` method is your trusty compass, guiding you through the dark waters of dependency injection. It's like saying "Ye who attempts to call upon this class or interface only once shall receive the same ol' booty on future voyages."

```php
Use yer trusty map (use App\Services\Transistor;), ye olde podcast decoder (use App\Services\PodcastParser;), and ol' faithful (use Illuminate\Contracts\Foundation\Application;). Now, cast the spell:

$this->app->singleton(Transistor::class, function (Application $app) {
    Return a spankin' new Transistor, armed with thePodcastParser ye just summoned!
});
```

But what if ye seek to protect the pirate's code from itself? Fear not, for the `singletonIf` method was designed just for ye! It ensures that a Singleton is registered only if it ain't already been hoisted up the Jolly Roger:

```php
$this->app->singletonIf(Transistor::class, function (Application $app) {
    Return a spankin' new Transistor, armed with thePodcastParser ye just summoned!
});
```

Arrr, that wasn't so hard, was it? Now ye can rest assured knowing that each Singleton will be unique, but once ye bind it, it'll never walk the plank again. Happy sailing, mateys! 🏴‍☠️🐬

 #### One-of-a-Kind Attribute

If you're the type who prefers to keep things exclusive, then the `#[One-of-a-Kind]` attribute is your cup of tea! Apply it to your interfaces or classes to let the container know that it should dish out just one instance:

```php
<?php

namespace App\Services;

use Illuminate\Container\Attributes\Singleton;

#[One-of-a-Kind]
class Transistor
{
    // ...
}
```

<a name="binding-scoped"></a>
##### But wait, there's more!

If you're feeling extra special and want to keep your Transistor isolated in its own little bubble, you can scope it:

```php
<?php

use Illuminate\Support\ServiceProvider;

class TransistorServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(Transistor::class, function () {
            return new Transistor('my-scope');
        });
    }
}
```

Now, your Transistor will only be shared within 'my-scope'! Just remember, with great power comes great responsibility—don't let the whole galaxy burn out because you forgot to isolate your Transistors. 🚀💥🔥

 #### Flirting with Singleton Scope! 🚀

Ahoy there, Laravel enthusiasts! Let's chat about a charming feature that goes by the name of `scoped`. You see, this enchanting method is like Cupid's arrow for your container, ensuring a class or interface finds true love (or, in our case, resolution) just once within the magical realm of a Laravel request/job lifecycle.

It's a bit like the `singleton` method, but with more pizzazz and fewer repetitive relationships! Instances tied up with the `scoped` method will bid adieu whenever your Laravel app decides to embark on a brand-new adventure, such as when a [Laravel Octane](/docs/{{version}}/octane) worker swoops in to attend a fresh request or when a Laravel [queue worker](/docs/{{version}}/queues) gears up for a new job:

```php
use App\Services\Transistor;
use App\Services\PodcastParser;
use Illuminate\Contracts\Foundation\Application;

$this->app->scoped(Transistor::class, function (Application $app) {
    return new Transistor($app->make(PodcastParser::class));
});
```

Or perhaps you'd like to play a little hard-to-get? Well, you can use the `scopedIf` method to register a scoped container binding only if it's been a while since you last danced together (or, in our case, if a binding hasn't already been registered for the given type):

```php
$this->app->scopedIf(Transistor::class, function (Application $app) {
    return new Transistor($app->make(PodcastParser::class));
});
```

Now, wasn't that a fun little stroll down the container-resolution lane? 😉 Happy coding! 🥳✨

 #### One-Time Wonder! 🎭🎉

Looking for a bit of magic in your Laravel world? Look no further than the enchanting `#[Scoped]` attribute! This sorcery mark, when bestowed upon an interface or class, whispers a secret to the container: "Resolve me once, within this very request/job's lifecycle!" 🔮✨

```php
<?php

namespace App\Services;

use Illuminate\Container\Attributes\Scoped as ScopedAttribute;

#[ScopedAttribute]
class Transistor
{
    // ...
}
```

Now, when you summon this Transistor class, it'll appear only once within its appointed request/job performance, ensuring a smashingly consistent and unrepeatable appearance! 🌟✨🎭

 Alrighty, let's get this container party started! 🎉

First off, you can hook up an existing object instance like inviting your coolest friend to the event. To do this dance move, we call upon the enchanting `instance` method:

```php
Use App\Services\Transistor, App\Services\PodcastParser;

Create a new Transistor with a freshly baked PodcastParser (because stale podcasts are no fun).

$service = new Transistor(new PodcastParser);

Now it's time to introduce them to the container:

$this->app->instance(Transistor::class, $service);
```

By doing this, you guarantee that every time someone asks for a Transistor from the container, they'll get your freshly minted one! 🥳 Just remember, once you've made friends with an instance, it's always there to help out at future functions. 😉

 Alrighty then! Let's dive into the magical world of Laravel's service container, where interfaces and their implementations get hitched tighter than a pair of Batman's utility belt buckles. Picture this: you've got an `EventPusher` interface, and a saucy `RedisEventPusher` implementation that's ready to pop the question.

First, we whisk our `RedisEventPusher` off its feet and register it with the service container, ensuring it's forever entwined with the `EventPusher` interface:

```php
use App\Contracts\EventPusher;
use App\Services\RedisEventPusher;

$this->app->bind(EventPusher::class, RedisEventPusher::class);
```

Now, we've essentially given the container a sweet nudge and said, "Whenever someone needs an `EventPusher`, point them to our dashing `RedisEventPusher`!"

Next up, let's make things official by type-hinting our `EventPusher` interface in the constructor of a class that's been promised by the container. Remember, folks in Laravel land, controllers, event listeners, middleware, and various other types of classes are all resolved using this very service container:

```php
use App\Contracts\EventPusher;

/**
 * Create a new class instance.
 */
public function __construct(
    protected EventPusher $pusher,
) {}
```

And voila! Our `RedisEventPusher` is now the proud owner of a key role in our Laravel application's cast of characters. It's all glitz and glamour down here in service container land! 🌈✨

 Alright, let's dive into Laravel's magic trick box - the Bind attribute! Ever felt like a magician pulling rabbits out of hats? Well, now you can feel like a developer pulling services out of thin code with this enchanting feature.

Imagine being able to tell Laravel, "Hey, whenever I ask for this interface, pull out THIS implementation, won't ya?" And guess what? No more sleight-of-hand service registration in the backstage of your application (ahem, service providers).

But wait, there's more! You can even apply multiple Bind attributes on an interface to switch between different implementations like a chameleon changing colors for various environments:

```php
namespace App\Contracts;

use App\Services\FakeEventPusher;
use App\Services\RedisEventPusher;

// When in Rome, or local and testing... use FakeEventPusher!
#[Bind(FakeEventPusher::class)]
#[Bind(RedisEventPusher::class, environments: ['local', 'testing'])]
interface EventPusher
{
    // ...
}
```

And if you want to make your container bindings behave like a persistently grumpy old man or an energetic, fresh-out-of-the-oven service (depending on the occasion), you can use the Singleton and Scoped attributes:

```php
use App\Services\RedisEventPusher;

// Make it persistent, once upon a time...
#[Bind(RedisEventPusher::class)]
#[Singleton]
interface EventPusher
{
    // ...
}
```

Now, where's that top hat and rabbit? I have some tricks to show you! 🐰 magician-hat ✨

 ### Funny Contextual Binding

Ever find yourself in a pickle where two controllers, let's say `PhotoController` and `VideoUploader2000`, are hankering for the same type of file system shenanigans, but with their own unique twists? Fear not, dear Laravel developer! We've got your back with a snazzy, easy-to-use binding interface that'll make your day as bright as a sunny day in Vegas!

```php
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\VideoController; // Yes, we know, naming isn't your strong suit...
use App\Http\Controllers\UploadController;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

// Let the games begin!
$app = $this->getContainer(); // Feel free to imagine us high-fiving here 🤘

// PhotoController needs local storage like a Kardashian needs attention
$app->when(PhotoController::class)
    ->needs(Filesystem::class)
    ->give(function () {
        return Storage::disk('local'); // Aww, isn't it just as warm and cozy as your favorite sweatpants?
    });

// But VideoController and UploadController need cloud storage like a cat needs catnip 🐾
$app->when([VideoController::class, UploadController::class])
    ->needs(Filesystem::class)
    ->give(function () {
        return Storage::disk('s3'); // S3? More like A3 (As in Awesome!) 😎
    });
```

Remember, with great power comes great responsibility! So now that you can serve different file system implementations to your controllers, make sure you're not serving up fish sticks to a vegan party! 🍤💔

<a name="contextual-attributes"></a>

 ### Whiz-Bang Attributes! 🚀🌈

Laravel's not just a rocket, it's a magic wand that makes even the most mundane tasks sparkle with pizzazz! Case in point: our contextual attributes. 🌈✨

Ever found yourself conjuring up drivers or configuration values like some sort of coding sorcerer? Well, no more! Laravel's here to make your life easier by offering a suite of enchanting contextual binding attributes. These let you wave your wand (your code) and voila! - those bewitching values appear without the need for any manual conjuring in your service providers. 🤗

Take, for instance, our trusty `Storage` attribute. It's like casting a spell to summon a specific [storage disk](/docs/{{version}}/filesystem) right into your cauldron (controller):

```php
<?php
namespace App\Http\Controllers;

use Illuminate\Container\Attributes\Storage;
use Illuminate\Contracts\Filesystem\Filesystem;

class MagicBroom extends Controller
{
    public function __construct(
        #[Storage('local')] protected Filesystem $broomDust
    ) {
        // Sweep away!
    }
}
```

But wait, there's more! In addition to the `Storage` attribute, we've brewed up a potion of goodies that includes `Auth`, `Cache`, `Config`, `Context`, `DB`, `Give`, `Log`, `RouteParameter`, and [Tag](#tagging) attributes:

```php
<?php
namespace App\Http\Controllers;

use App\Contracts\UserRepository;
use App\Models\PhotoMagic;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Container\Attributes\Cache;
use Illuminate\Container\Attributes\Config;
use Illuminate\Container\Attributes\Context;
use Illuminate\Container\Attributes\DB;
use Illuminate\Container\Attributes\Give;
use Illuminate\Container\Attributes\Log;
use Illuminate\Container\Attributes\RouteParameter;
use Illuminate\Container\Attributes\Tag;
use App\Repositories\DatabaseRepository;

class MagicShow extends Controller
{
    public function __construct(
        #[Auth('wizards-only')] protected $magicPass,
        #[Cache('frosty-freezer')] protected $frostBites,
        #[Config('spells.casting_speed')] protected int $castingSpeed,
        #[Context('wand-id')] protected $wandId,
        #[DB('crystal-ball')] protected $crystalVision,
        #[Give(DatabaseRepository::class)] protected UserRepository $wizardRegistry,
        #[Log('daily-spell-log')] protected $spellbook,
        #[RouteParameter('photo')] protected $instaSnap,
        #[Tag('spells-cast')] protected $spellCasts,
    ) {
        // Time to perform the enchantment!
    }
}
```

And if that wasn't enough, we've added a `CurrentUser` attribute for bestowing upon you the ability to summon the currently authenticated user into a given route or class. Just imagine it - with a wave of your hand (or a simple function call), the user magically appears!

```php
use App\Models\User;
use Illuminate\Container\Attributes\CurrentUser;

Route::get('/wizard', function (#[CurrentUser] $user) {
    return $user;
})->middleware('auth');
```

<a name="defining-custom-attributes"></a>
And remember, if the included attributes aren't enough to tickle your fancy, you can always concoct your own potions (custom attributes)! 🧪🚀✨

Stay enchanted, and happy coding! 🌟✨🤓

 Alrighty then! Let's don the coding cowboy hat and dive into the world of custom attributes in Laravel, where you can whip up your very own contextual concoctions. To do so, you'll need to ride shotgun with the `Illuminate\Contracts\Container\ContextualAttribute` contract, a trusty steed that'll take us straight to the promised land of custom attributes.

Once you saddle up and rope in this contract, the container will call your attribute's `resolve` method, which is where you'll lasso the value you want injected into your class using the attribute. In the example below, we're gonna re-brand Laravel's built-in `Config` attribute like a bronco breaker might tame a wild mustang:

```php
<?php

namespace App\Attributes;

use Attribute;
use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Container\ContextualAttribute;

// Yeehaw! Let's pin this bad boy on a parameter with an @Config attribute
#[Attribute(Attribute::TARGET_PARAMETER)]
class Config implements ContextualAttribute
{
    // Saddle up and take a seat, partner. Here we load our config key and default value into the saddlebags
    public function __construct(public string $key, public mixed $default = null)
    {
    }

    // Time to wrangle that configuration value, partner! The container calls this function, and it's up to you to rope in the right config value for your key.
    public static function resolve(self $attribute, Container $container)
    {
        // Saddle up and take a ride with the container to fetch the config value using the attribute's key and default value if necessary
        return $container->make('config')->get($attribute->key, $attribute->default);
    }
}
```

Now that we've broken the bronco and tamed our custom Config attribute, it's time to ride off into the sunset with your newfound skills in hand. Happy coding, partner! 🤠

 Alrighty then, buckle up for a whirlwind tour through Laravel's Binding Primitives! This is where your classes get the injection of goodies they need to function like a well-oiled machinery.

Let's say you've got a class with some fancy friends but also hankers after a plain ol' integer, no frills attached. No worries, we've got you covered! You can use contextual binding to inject whatever your class desires:

```php
use App\Http\Controllers\UserController;

$this->app->when(UserController::class)
    ->needs('rawSauce') // Don't forget to name that number!
    ->give(420); // Yeah, it's the answer to life, the universe, and everything. Now your class is all growed up!
```

Now, suppose a class expects an array of tagged pals. No sweat, let's tag 'em and bag 'em with the `giveTagged` method:

```php
$this->app->when(ReportAggregator::class)
    ->needs('reports') // Catchy name, eh?
    ->giveTagged('reports'); // The tag team of your dreams, ready to party!
```

If you need to inject a value from one of your application's config files, fear not! The `giveConfig` method is here to save the day:

```php
$this->app->when(ReportAggregator::class)
    ->needs('timezone') // Tick-tock, let's get that time right!
    ->giveConfig('app.timezone'); // The secret of the universe is out... it's UTC!
```

And there you have it! Binding Primitives demystified in a manner that'll make you wonder if you should be laughing at the code or the docs!

 Alrighty, let's dive into the wild world of Laravel dependency injection, where even a constructor argument as wacky as a variadic spaghetti bowl can be tamed! 🍝

You might find yourself in a pickle with a class that demands an array of typed objects like a ravenous squirrel at a nut convention. Here's how our Firewall class does just that:

```php
<?php

Use App\Models\Filter as FilterModel;
Use App\Services\Logger as Loggermeister;

Class Firewall {
  Protected $loggermeister, $filters;

  Public function __construct(Loggermeister $loggermeister, FilterModel ...$filters) {
      $this->loggermeister = $loggermeister;
      $this->filters = $filters;
  }
}
```

Oh boy, this Firewall sure is guarding a fortress of filters! But how can we ensure that our container supplies the right types? Enter Contextual Binding, the secret weapon of ninja developers! You can resolve this dependency by feeding it a closure that returns an array of resolved `FilterModel` instances:

```php
$this->app->when(Firewall::class)
    ->needs(FilterModel::class)
    ->give(function (Application $app) {
          return [
              $app->make('NullFilter'),
              $app->make('ProfanityFilter'),
              $app->make('TooLongFilter'),
          ];
    });
```

For those of you who prefer a more lazy, take-it-easy approach (and who doesn't?), you can simply provide an array of class names to be resolved by the container whenever `Firewall` needs `FilterModel` instances:

```php
$this->app->when(Firewall::class)
    ->needs(FilterModel::class)
    ->give([
        'NullFilter',
        'ProfanityFilter',
        'TooLongFilter',
    ]);
```

And there you have it! Now your Firewall is stocked with the finest filters and ready to keep your application safe from all sorts of nonsense. Happy filtering, friend! 🚫🧽

 Ah, Variadic Tag Dependencies! The dynamic duo of the Laravel world, not to be confused with Batman and Robin (although they do have a similar rhythm).

Imagine you've got a class that's like a picky eater - it demands a variable number of `Report` dishes, type-hinted as such: `Report ...$reports`. Fret not, for we've got the solution to keep your code from going hungry!

With our trusty methods `needs` and `giveTagged`, you can easily feed this picky class all the container bindings tagged with 'reports'. It's like a buffet line just for your class, minus the awkward elbow-nudging.

```php
$this->app->when(ReportAggregator::class) // Call it Report Combiner if you will, we don't judge
    ->needs(Report::class) // "Hey, can I have some more reports, please?"
    ->giveTagged('reports'); // "And put them all on my plate!"
```

Now, your picky class is never left wanting for a report again! It's like magic, but without the rabbits or top hats. Just pure Laravel elegance. 😉

 Alrighty then! Let's dive into the whimsical world of Laravel binding tagging, shall we?

So, you find yourself in a pickle where you need to round up all the cats (or should I say bindings) of a particular variety. Perhaps you're constructing a report card reader that accepts a smorgasbord of various `Report` interface kittens. After enrolling these kittens into the school of bindings, you can slap them with a label using the `tag` method:

```php
$this->app->bind(CpuReport::class, function () {
    // ...
});

$this->app->bind(MemoryReport::class, function () {
    // ...
});

$this->app->tag([CpuReport::class, MemoryReport::class], 'kittens');
```

Once these kittens have been tagged, you can easily corral them all using the container's `tagged` method:

```php
$this->app->bind(ReportAnalyzer::class, function (Application $app) {
    return new ReportAnalyzer($app->tagged('kittens'));
});
```

Now, ain't that purr-fectly swell?

 ### Unleash Your Inner Service Guru!

Ever wanted to dress up your services for a fancy ball, or maybe just tweak them under the hood? Well, Laravel's `extend` method is your secret weapon for such shenanigans!

Imagine you're at a party and everyone's talking about their fabulous services. But you, oh no, you've got that one service nobody can resist dancing with once it's been *decorated* by you!

Here's how to make your service the life of the party:

```php
$this->app->extend(Service::class, function (Service $service, Application $app) {
    // Slip on that sequined suit and call it DecoratedService
    return new DecoratedService($service);
});
```

Now, when someone requests Service, they're actually getting the fabulous DecoratedService! But remember, behind every well-dressed service lies a solid foundation - in this case, the container instance. So don't forget to bring your Application along for the ride! 🎩🎉

 ### Unraveling the Mystery!

#### The Make Method (A.K.A "The Magician's Wand")

Ah, the Make Method! Our little black box that conjures up artisans, migrations, controllers, and more – just like a magician waving his wand over a deck of cards. This command is your gateway to Laravel's enchanting world. Let's dive in and see what tricks it has up its sleeve!

```bash
php artisan make:model User -m
```

Eureka! With this simple incantation, you've summoned a fresh User model, complete with its very own migration file – perfect for managing databases. Just remember to replace "User" with whatever magical creature or legendary object you wish to create.

Next up, let's try our hand at making a controller:

```bash
php artisan make:controller UserController --resource
```

And just like that, you've whipped up a fancy UserController – equipped with all the CRUD actions (create, read, update, and delete) to ensure your users are treated royally. Don't forget to thank your coder fairy for this one!

So there you have it – the Make Method! Embrace its arcane powers and watch your Laravel applications come to life in a whirlwind of code and magic. Happy coding, dear witches and warlocks!

 ### The `make` Methode du Jour! 🚀

If you're in need of a classy companion from the Laravel container, look no further than the `make` method! This charming chap takes the name of the class or interface you've got your eye on as an argument:

```php
use App\Services\Transistor; // Wish this Transistor was mine!

$myTransistor = $this->app->make(Transistor::class); // Voila!
```

But what if your class's dependencies are a bit hard to get along with? No worries, simply pass them as an associative array into the `makeWith` method! For example, let's give our Transistor service a little somethin'-somethin':

```php
use App\Services\Transistor; // The life of the party 🎉

$myTransistor = $this->app->makeWith(Transistor::class, ['id' => 1]); // Cheers!
```

Ever wondered if a class or interface has been bound in the container? The `bound` method is here to help:

```php
if ($this->app->bound(Transistor::class)) { // Is that you, Transistor? 🙋‍♂️
    // ...
}
```

If you find yourself in a part of the code that's not near any service providers or doesn't have access to the `$app` variable, fear not! You can still grab a classy companion using the `App` facade or the `app` helper:

```php
use App\Services\Transistor; // I've got my eye on you 👋
use Illuminate\Support\Facades\App;

$myTransistor = App::make(Transistor::class); // Let's dance!

$myTransistor = app(Transistor::class); // Or just call it up like this!
```

Feeling extra fancy? You can even have the Laravel container instance injected into a class being resolved by the container. All you need to do is type-hint the `Illuminate\Container\Container` class on your class's constructor:

```php
use Illuminate\Container\Container; // Classy company!

/**
 * Create a new class instance.
 */
public function __construct(
    protected Container $container,
) {} // Now we're talking! 🤩
```

 ### Laravel's Magic Dependency Box! 🎩✨

In the realm of Laravel, it's not just about waving a wand and making code appear (though that would be pretty awesome, right?). No, no. We've got something far more enchanting - The Magic Dependency Box! 🎩✨

This is where your dependencies, the unsung heroes of your application, get the star treatment they deserve. And the best part? You don't even have to invite them for a housewarming party! 🎉

Here's how it works: Let's say you want to bring in some fresh apples from Apple Music (because who doesn't love a good pun?) for your PodcastController. Instead of manually fetching these apples, you just type-hint their presence in the constructor. Ta-da! The Magic Dependency Box takes care of the rest, magically injecting the AppleMusic service right into your class. 🍎✨

```php
<?php

namespace App\Http\Controllers;

use App\Services\AppleMusic;

class PodcastController extends Controller
{
    /**
     * The Apple Music service, just showing up uninvited. We love it! 🤗
     */
    protected $apple;

    public function __construct(AppleMusic $apple)
    {
        // This is where the Magic Dependency Box works its magic! 🎩✨
        $this->apple = $apple;
    }

    /**
     * Show information about the given podcast.
     */
    public function show(string $id): Podcast
    {
        // With the Apple Music service at hand, find that podcast like a boss! 🦹‍♂️
        return $this->apple->findPodcast($id);
    }
}
```

And there you have it! The Magic Dependency Box in all its glory. Now go forth and conquer the world of Laravel with your newfound magical dependency injection skills! 🦸‍♂️🚀

 Alright, folks! Let's dive into the magical world of Method Invocation and Injection in Laravel Land. It's like playing a symphony where every instrument is perfectly harmonized because... well, our friendly container orchestrates it all!

Imagine you're hosting a grand bash, and you want to serve apple juice. So, you've got your trusty AppleMusic class (think DJ) that knows how to source the freshest apples from the orchard (dependencies). Now, you've created PodcastStats, the master of ceremonies who loves to mix a mean cocktail using your AppleMusic's apple juice!

```php
<?php

namespace App;

use App\Services\AppleMusic; // Your DJ, AKA AppleMusic

class PodcastStats
{
    /**
     * Whip up a new podcast stats report.
     */
    public function generate(AppleMusic $apple) // Here comes your DJ!
    {
        return [
            // ...mixing the perfect cocktail...
        ];
    }
}
```

Now, you'd typically invite PodcastStats and ask him to whip up a drink (invoke the `generate` method). However, we don't want to do all that manual labor! Enter our friendly container:

```php
use App\PodcastStats;
use Illuminate\Support\Facades\App; // Our magical bartender

$stats = App::call([new PodcastStats, 'generate']); // Call the bartender and ask for a cocktail!
```

And guess what? Our container is not just a bartender but also a party planner! It can even handle hosting a house party where each guest (closure) gets their favorite DJ (AppleMusic) automatically added to the playlist:

```php
use App\Services\AppleMusic;
use Illuminate\Support\Facades\App; // The ultimate event coordinator

$result = App::call(function (AppleMusic $apple) {
    // ...partying hard with your DJ...
}); // Let's get this party started!
```

Happy coding, and remember: In Laravel Land, the container is always ready to mix a cocktail or plan a party! 🍹🎉

 Alrighty then! Let's dive into the whimsical world of Laravel's service container events - where magic happens behind the scenes! 🎩🪄

Every time our friendly container whips up a new object for your hungry app, it fires off an event like a cheerful piñata bursting with goodness! To join the party, you can hook into this jamboree using the `resolving` method:

```php
use App\Services\Transistor;
use Illuminate\Contracts\Foundation\Application;

$this->app->listenForParty('Transistor', function (Transistor $transistor, Application $app) {
    // This is when the container decides to serve up a "Transistor"! 🍻
});

$this->app->listenForEveryone(function (mixed $object, Application $app) {
    // The container invites everyone to the buffet table - even objects of unknown types! 🎉
});
```

As you can see, the object being served up will be delivered to your bash, giving you the power to deck out the dish with any extra toppings before passing it along to its eager consumer.

<a name="rebinding"></a>
Now, let's talk about rebinding - a nifty little trick that allows you to swap out objects on-the-fly like a stage magician pulling rabbits out of hats! You can use the `bind` method to do this:

```php
use App\Services\Transistor;
use Illuminate\Contracts\Foundation\Application;

$this->app->bind(Transistor::class, function (Application $app) {
    // Here you can define a new "Transistor" object to replace the original...
});
```

Just remember, rebinding happens before the container resolves an object, so if you're planning to replace something that's about to be served up, make sure to bind it first! 🎩🐰

 Alrighty then! Let's dive into the thrilling world of Laravel rebinding, shall we? It's like being a DJ for your services, spinning new tunes every time a service gets re-registered or replaced. Here's how you can set up your own dance floor:

```php
Use y'all know, the dealio with rebinding is that it lets you listen in when a service decides to boogie down again or switch partners after its first dance. It's mighty handy when you need to update your crew or alter the moves each time a specific partner changes:

```php
Use App\Contracts\PodcastPublisher; // Just in case you forgot who's on the guest list
Use App\Services\SpotifyPublisher;
Use App\Services\TransistorPublisher;
Use Illuminate\Contracts\Foundation\Application;

Now, let's get this party started:
$this->app->bind(PodcastPublisher::class, SpotifyPublisher::class); // Invite the Spotify crew first

But wait! We ain't done yet. Let's spice things up with some custom moves (aka rebinding closure):
$this->app->rebinding(
    PodcastPublisher::class,
    function (Application $app, PodcastPublisher $newInstance) {
        // Custom dance moves go here!
    },
);

And now, for the grand finale:
$this->app->bind(PodcastPublisher::class, TransistorPublisher::class); // Ooooh, they've switched partners! Let's see those new steps...
```

<a name="psr-11"></a>
Just remember that this is all happening under the PSR-11 standard (it's like the dance instructor making sure everyone's following the right moves). Happy rebinding, cowboy!

 ## PSR-11: The Superpowered Swiss Army Knife of Dependency Injection 🔨🛠️

Laravel's service container has a hidden superpower - it can morph shift into the formidable [PSR-11](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-11-container.md) interface! 🦄

So if you're feeling fancy, go ahead and typehint the PSR-11 container interface to summon an instance of the Laravel container like a Jedi calling upon the Force:

```php
Use Transistor is clearly not a band, it's a Service! 😎
Use Psr\Container\ContainerInterface;

Route::get('/', function (ContainerInterface $container) {
    $service = $container->get(Transistor::class);

    // ...
});
```

Remember, a word of caution: if you try to summon a service with an unrecognizable identifier, Laravel will throw an exception - like when your magic spell backfires 😈. But fear not! If the identifier wasn't bound in the first place, it will be an instance of `Psr\Container\NotFoundExceptionInterface` - almost like a 'Whoops, that spell doesn't exist!' message 🔮.

On the other hand, if the identifier is bound but something goes awry during resolution (like your spell ingredient not being in stock at the potions shop), an instance of `Psr\Container\ContainerExceptionInterface` will be thrown - which is basically Laravel's way of saying 'Sorry, looks like I can't cast that spell right now!' 🧙‍♂️.

So there you have it, folks! PSR-11 is the ultimate multitool in your Laravel arsenal, making your spells - er, dependencies - easier to manage than ever before! Happy coding! 🎉🍾