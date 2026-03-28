 ## Controllers: The Gladiators of the Digital Colosseum 🏆

Welcome to the rollercoaster ride of Laravel's finest, the mighty controllers! These brave knights, armored in code, stand guard at the gates of your web applications, ready to slay incoming requests and serve up responses with style.

<a name="writing-controllers"></a>
### Writing Controllers: The Knight's Quest 🛡️

The world of controllers is a vast one, home to many a humble servant and noble lord. Let us embark on this journey together, starting with the basics:

#### Basic Controllers: The Squire's Training Ground 🥊

The fundamentals of creating a controller will be your training ground, where you learn the art of handling HTTP requests and responses.

#### Single Action Controllers: One Trick Ponies 🐎

Not every knight needs to master all trades. Some prefer to specialize in a single deed. Similarly, controllers may find themselves handling only one action at a time.

<a name="controller-middleware"></a>
### Controller Middleware: The Castle's Fortress 🏰

Before any requests reach your controller, they must pass through the fortified walls of middleware. This layer of protection ensures that only trustworthy requests are allowed entry.

#### Middleware Attributes: Tough as Nails 🤕

Middlewares can be armored with attributes to make them even stronger in battle. These armor plating, or middleware attributes, provide additional functionality and customization options.

#### Authorization Attributes: Bound by Oaths 🥐

Authorization attributes serve as a knight's oath, ensuring that only authorized requests are permitted entry to specific controllers or actions.

<a name="resource-controllers"></a>
### Resource Controllers: The Round Table of REST 🏛️

Resource controllers form the esteemed Round Table of RESTful web development. Here, you'll find knights dedicated to handling resources with honor and grace.

#### Partial Resource Routes: Pick Your Battles 🛍️

Not every resource needs a full-scale conquest. Sometimes, you can focus on individual actions or routes to conquer your objectives.

#### Nested Resources: The Family Tree 🌲

Nesting resources allows you to create relationships between different entities, much like a noble family tree.

#### Naming Resource Routes: Label Your Battles 🏢

Properly naming your resource routes can help keep track of your ongoing battles in the digital realm.

#### Naming Resource Route Parameters: Name Those Pages! 📜

Just as you would name a village or castle, it's essential to label your route parameters correctly for easier navigation.

#### Scoping Resource Routes: Focus on Your Realm 🌍

Scoping resource routes allows you to focus on specific areas of your web application, ensuring that you maintain control over your realm.

#### Localizing Resource URIs: Speak the Language 🗣️

By localizing your resource URIs, you can ensure that your controllers speak the language of your users and provide a more enjoyable experience for all.

#### Supplementing Resource Controllers: Bolster Your Armory 🛡️

With the help of resource controller actions and methods, you can further fortify your digital stronghold against any incoming threats.

#### Singleton Resource Controllers: One Knight to Rule Them All 👑

Singleton controllers ensure that there is only one instance of a given class, making it perfect for managing global application settings or other single-use resources.

#### Middleware and Resource Controllers: The Perfect Pairing 🍔🥨

Middleware can work hand in hand with resource controllers to provide added layers of protection and customization options.

<a name="dependency-injection-and-controllers"></a>
### Dependency Injection and Controllers: The Magical Potion 🔮

Dependency injection is the mystic art of providing a controller with the tools it needs to succeed in battle. By injecting dependencies, you can ensure that your controllers remain flexible and adaptable to any situation.

 Welcome, dear coder comrades! 🚀👩‍💻👨‍💻 Instead of writing your spaghetti code of request handling logic as one-off closures in your route files (like a hot messy kitchen with too many recipes), you might fancy organizing this chaos into the sleek and sophisticated "controller" classes. Controllers are like the maître d' of your web app, directing all incoming requests to the right table (or user, or pizza...you get the drift). For instance, a `UserController` class would be the velvet-rope VIP host for all things users - showing them off, creating new ones, updating their profiles, and deleting the jerks who ruined your server's mood. 🤓 By default, these swanky controllers can be found chilling in the `app/Http/Controllers` directory, ready to mingle with your requests.

<a name="writing-controllers"></a>
Now, let's get our tuxedos and ball gowns on (metaphorically speaking) and learn how to write these elegant controllers! 🤵👗

 Ahoy there, Code Captain! Today we're gonna set sail on a thrilling adventure into the heart of Laravel's booty - I mean, backbone - controllers! So buckle up and prepare for a whirlwind tour of this glorious software pirate ship.

<a name="basic-controllers"></a>
### Basic Controllers 🌴🏴‍☠️

Alright matey, let's start by crafting our very own basic controller! To begin, navigate to `app/Http/Controllers` and create a new file using the trusty artisan command:

```sh
php artisan make:controller GreetingController
```

This will create a brand-new controller file for us, complete with scaffolding. Open it up and feast your eyes on the glorious PHP code! (Warning: may cause nautical puns.)

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GreetingController extends Controller
{
    // ...
}
```

Now, here's where the magic happens. If you want to create a method (yes, we pirates do love methods) that serves up a greeting message, just add something like this:

```php
public function index()
{
    return 'Ahoy there! Welcome aboard the Laravel!' . PHP_EOL;
}
```

Of course, that's just one method. You can create many more, each handling different tasks on your software galleon. (Yes, we love sailor jokes here at Laravel HQ.)

<a name="routing"></a>
### Routing 🚧🛶

To make our new greeting method accessible to the public, we need to create a route for it. Don't worry; I won't leave you high and dry! Head over to `routes/web.php` and add the following:

```php
Route::get('/', 'GreetingController@index');
```

With that in place, navigating to your application's root URL should now display our hearty greeting:

```
http://your-app-url.com
```

Yarr! You've just written your first Laravel controller and routed it like a pro! Now, why don't you hoist the Jolly Roger and set sail for further adventures in Laravel land? 🏴‍☠️🎉

 ### The Fast Food Kitchen of Web Development: Controllers! 🍔🥳

Ready to whip up a new dish for your Laravel app? You can quickly summon a controller with the magical `make:controller` Artisan command. By deferring to the swanky `app/Http/Controllers` directory, it'll be like having your own personal chef station!

```shell
php artisan make:controller UserController 👩‍🍳
```

Now, let's get our apron on and dive into a basic controller recipe. Controllers are just like your friendly neighborhood waiters, serving up any number of public methods to respond to incoming HTTP requests. Here's what the menu might look like:

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Serve up the profile for a particular user.
     */
    public function show(string $id): View
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

Once your controller class and method are ready to go, you can set a table reservation for it by defining a route:

```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']); 📝
```

When an incoming request matches the specified table number (URI), the `show` method on the `App\Http\Controllers\UserController` class will be called, and the route parameters will be delivered to the table. 🎉🍽️

> [!NOTE]
> Controllers aren't always required to wear a suit and tie (extend a base class). But, sometimes it's convenient to dress up in fancy chef whites that contain shared methods all your other controllers will find appetizing. 👨‍🍳🤵

 ### One-Trick Ponies: Single Action Controllers

If a controller's party trick is so complex it needs its own spotlight, you can dedicate an entire class to that one, jaw-dropping performance. To pull this off, you'll want to define a lone `__invoke` method within the controller.

```php
<?php

namespace App\Http\Controllers;

class ServerProvisioner extends Controller
{
    /**
     * Just call me when you need a new server, buddy!
     */
    public function __invoke()
    {
        // ... magician's secret hand movements here...
    }
}
```

When registering routes for these one-man shows, there's no need to specify the specific trick being performed. You can simply introduce the master of ceremonies to the audience:

```php
use App\Http\Controllers\ServerProvisioner;

Route::post('/server', ServerProvisioner::class);
```

You can also create an invokable controller by using the `--invokable` option of the `make:controller` Artisan command:

```shell
php artisan make:controller ServerProvisioner --invokable
```

> [!NOTE]
> If you want to customize your controller's stub, don't forget to check out [stub publishing](/docs/{{version}}/artisan#stub-customization).

<a name="controller-middleware"></a>

 Alrighty then! Let's dive into the wild world of Controller Middleware in Laravel Land. Imagine your controllers as the bouncers at a swanky nightclub, checking IDs and ensuring everyone is on the guest list before they can dance the night away (or access sensitive data in our case).

First off, you can assign middleware to controller's routes right in your route files:

```php
Route::get('/profile', [UserController::class, 'show'])->middleware('auth'); // " auth" checks if the user is logged in, because who wants a profile of an anonymous stranger?"
```

But why stop there? You can also make your controllers more exclusive by specifying middleware within your controller class. To do so, your controller should moonwalk its way over to the `HasMiddleware` interface, which requires the controller to have a static `middleware` method. From this method, you may return an array of middleware that should be applied to the controller's actions:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware; // " Middleware" is the secret sauce for making controllers more exclusive

class UserController implements HasMiddleware
{
    /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return [
            'auth', // " auth" ensures only logged-in users get to see anything
            new Middleware('log', only: ['index']), // " log" keeps a record of who's looking at the index page (nosey parkers)
            new Middleware('subscribed', except: ['store']), // " subscribed" checks if users are subscribed before they can store anything, unless they're trying to 'store' something in the 'store'
        ];
    }

    // ...
}
```

If writing entire middleware classes feels like too much work, you can define controller middleware as closures. This provides a convenient way to define an inline middleware without dancing through hoops:

```php
use Closure;
use Illuminate\Http\Request;

/**
 * Get the middleware that should be assigned to the controller.
 */
public static function middleware(): array
{
    return [
        function (Request $request, Closure $next) {
            return $next($request); // This is like saying "Let them pass, they're cool"
        },
    ];
}
```

And that's the lowdown on Controller Middleware! Now go forth and secure your data with style! 🕺️💃️🚀

 ### Middleware Magic! 🎩✨

Welcome to the enchanting world of Laravel's Middleware Attributes, where your controllers get a sprinkle of fairy dust to ward off digital nasties 🧹. No more fiddling with clunky lists or nesting like a Russian doll, just slap some shiny attributes on and watch the magic happen!

```php
<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Attributes\Controllers\Middleware;

// Our UserController now looks like a disco ball with these attributes 💫🎈
#[Middleware('auth')] // Only cool kids allowed! 😎
#[Middleware('log', only: ['index'])] // Logging becomes the life of the party only for the index! 📝🎉
#[Middleware('subscribed', except: ['store'])] // But subscribers can store all they want, just not here! 🛑🥤
class UserController
{
    // ...
}
```

But why stop at the controller level? Give your methods their own superpowers too!

```php
<?php
namespace App\Http\Controllers;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Routing\Attributes\Controllers\Middleware;

#[Middleware('auth')] // Security first, duh 🔒
class UserController
{
    #[Middleware('log')] #[Middleware('subscribed')] // Multiple powers at play! ⚡✨
    public function index()
    {
        // ...
    }

    #[Middleware(static function (Request $request, Closure $next) {
        // ...

        return $next($request);
    })] // Custom middleware for the store method! 👩‍💻🚀
    public function store()
    {
        // ...
    }
}
```

Now, weren't those attributes a refreshing change from the usual code soup? Happy coding, and may your controllers be secure and your methods enchanted! 🧙‍♂️✨🎊

 ### Superpowered Shortcuts for Gatekeepers! 🦸‍♂️🚀

If you're a controller gatekeeper employing policies, let us introduce you to our secret weapon: The `Authorize` attribute, your new best friend for a hassle-free ride with the `can` middleware! 🎉🎁

```php
<?php

namespace App\Http\Controllers;

Use your superpowers here, Champ!

class CommentController
{
    // Cue the dramatic music as we unleash the Authorize attribute 🎺🚀
    #[Authorize('create', [Comment::class, 'post'])]
    public function store(Post $post)  // ... and action!
    {
        // Remember, with great power comes great responsibility 🦄👍
    }

    #[Authorize('delete', 'comment')]
    public function destroy(Comment $comment) // Keep the world safe for democracy, one comment at a time 🌍💥
    {
        // ... and don't forget to double-check those deletions, Superman!
    }
}
```

The first superpower you wield is the ability you wish to authorize. The second power: model class, route parameter, or parameters that should be passed to the policy. 💪💥🎈

<a name="resource-controllers"></a>
Now go forth and defend your applications with these superpowers! 🦸‍♂️🚀🌟

 Alrighty, let's dive into the realm of Resource Controllers - your application's unsung heroes! Imagine you're running a zoo, and each animal (Eloquent model) needs feeding, grooming, or maybe even a good ol' fashioned tranquilizer dart. Enter our trusty Resource Controllers, here to handle all the typical animal antics with a single line of code!

First things first, we need to create a controller for these tasks. In the comfort of your terminal, simply shout out:

```shell
php artisan make:controller PhotoController --resource
```

This command will spawn a new controller like a baby elephant - in `app/Http/Controllers/PhotoController.php`. It'll be equipped with methods for all the available animal operations (create, read, update, delete). Next, we gotta point our route to this controller:

```php
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class);
```

Boom! With a single route declaration, you've created a whole safari of routes for your resource. The generated controller comes pre-prepped with stubs for each action. Need a quick tour of your application's routes? Just run the `route:list` Artisan command - it's like a flashlight in the jungle!

Want to tame more than one animal at once? No problemo! Register many resource controllers with this line:

```php
Route::resources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

And if you're dealing with endangered species that might disappear, the `softDeletableResources` method will take care of registering controllers for all those "trashed" animals:

```php
Route::softDeletableResources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

Now, off to the safari we go! 🐘🦁🐯

 Alright, let's get this party started! Here's your Laravel Resource Controller Guide with a dash of humor and wit. Buckle up! 🛫

<div class="border border-gray-300 p-4 rounded-md">

| Verb   | URI                       | Action          | Route Name     |
|--------|---------------------------|------------------|---------------|
| Peek   | `/photos`                  | Index the party  | photos.index   |
| Call   | `/photos/create`           | Create a new snap | photos.create  |
| Snap   | `/photos`                  | Store it in the album | photos.store   |
| Gaze   | `/photos/{photo}`          | Show me the goods! | photos.show    |
| Edit   | `/photos/{photo}/edit`     | Let's touch up that shot | photos.edit    |
| Patch  | `/photos/{photo}`          | Fix it, touch it up or re-shoot it | photos.update  |
| Delete | `/photos/{photo}`          | Trash the messy pic! | photos.destroy |

</div>

<a name="customizing-missing-model-behavior"></a>

#### Customizing Missing Model Behavior (Because accidents happen!) 🦴

In case your model is acting like a rebellious teenager, you can define the default behaviors for index, create, store, show, edit, update, and destroy operations! Just use the `ResourceController` trait in your custom controller and override the required methods. Remember, a happy model makes for a harmonious app! 🤩

</s>

 #### Mastering the Art of Model Mystery in Laravel Land!

In our quaint little town of Laravel, when a requested resource model takes an unexpected vacation, it's time to crack open the detective's hat and solve the mystery with style! By default, a 404 HTTP response is served up like a cold slice of disappointment. But fear not, dear friend! You can customize this response by channeling your inner Sherlock Holmes (or more accurately, a Laravel Controller) when defining your resource routes.

To do so, employ the ancient art of `missing` method invocation. This arcane ritual summons a closure, ready to dance at the slightest hint of an elusive model. Once called upon, this magical incantation will be executed if a resource's model goes missing in action across any of its routes:

```php
* Call up your trusty PhotoController as a witness,
* Bring forth Request from the archives of Illuminate,
* And summon the Redirect Facade from the depths of Illuminate Support.
* Finally, define your resource route's domain (in this case, 'photos') using the noble PhotoController class:
```

```php
use App\Http\Controllers\PhotoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

Route::resource('photos', PhotoController::class)
    ->missing(function (Request $request) {
        // Return Redirect to the index of photos, a perfect alibi for our missing model!
        return Redirect::route('photos.index');
    });
```

<a name="soft-deleted-models"></a>
##### Ghostbusting Soft Deleted Models

Sometimes, models may not disappear altogether but instead become spectral apparitions (also known as soft deleted). To handle such phantom encounters gracefully, Laravel offers a unique feature called event listeners. With these ghostbusters on duty, you can catch and process soft-deleted models without sending your users into a tizzy.

To create an event listener, first establish the connection with the appropriate model:

```php
use App\Models\YourModel; // This is where the magic happens!
```

Next, define your event listener class, ensuring it follows the naming convention `[ModelName]Listener`. For example, if you're dealing with a spectral `YourModel`, create a corresponding `YourModelListener`:

```php
use App\Models\YourModel;

class YourModelListener extends EventSubscriber
{
    /**
     * The event listener methods.
     *
     * @var array
     */
    protected $events = [
        'model.deleted' => 'handleSoftDeleted',
    ];

    /**
     * Handle the soft-deleted event.
     *
     * @param  YourModel  $model
     */
    public function handleSoftDeleted(YourModel $model)
    {
        // Perform any necessary actions here, such as redirecting the user or updating a cache!
    }
}
```

Finally, register your event listener with Laravel's service provider:

```php
use App\Listeners\YourModelListener;

/**
 * Register any application services.
 *
 * @param  \Illuminate\Support\ServiceProvider  $provider
 * @return void
 */
public function register()
{
    // Laravel automatically discovers event listeners in the app/Listeners directory.
    $this->app->make(EventServiceProvider::class)->register();

    // If needed, manually register your custom listener:
    $this->app->make(YourModelListener::class);
}
```

And just like that, you'll be ready to handle soft-deleted models with aplomb! Remember, in Laravel Land, it takes a village (or at least some well-written code) to solve the mysteries of missing and spectral models. Happy coding! 🕵️‍♂️🔎✨

 Ah, the enchanting world of Soft Deleted Models! Let's dive in and make some magic happen, shall we?

In this fantastical realm, models that have bid their digital lives adieu (but not really, more like a vacation) are tucked away, safe from prying eyes. But fear not, for there's a spell to bring them back! *Cue the drumroll*... It's called `withTrashed`!

To cast this charm, simply invoke it when defining your resource route:

```php
use App\Http\Controllers\PhotoController;
Route::resource('photos', PhotoController::class)->withTrashed();
```

Now, these shady characters will be welcomed with open arms, and not a 404 HTTP response in sight! But if you're picky about who you let in, you can specify the routes they're allowed on. For instance:

```php
Route::resource('photos', PhotoController::class)->withTrashed(['show']);
```

This spellbound model is now only permitted to enter the 'show' route, leaving other routes to enjoy their privacy undisturbed. Keep in mind that you can always be more specific by passing an array to the `withTrashed` method:

```php
Route::resource('photos', PhotoController::class)->withTrashed(['show', 'edit', 'update']);
```

And just like that, your Soft Deleted Models are under your control! May your controllers forever be enchanted with the power of `withTrashed`. Happy coding, dear magicians! 🧙‍♀️✨

 Alrighty, matey! Buckle up for a Laravel ride, because we're diving into the deep end of resource models – yep, it sounds as exciting as it gets in the world of web development!

If you've already set sail with route model binding and fancy your resource controller methods to be as sophisticated as a captain's log (i.e., type-hinting model instances), then fear not, for there's a handy dandy compass called `--model` option that'll guide you through the controller generation storm!

Just fire up the Artisan console and set your course with:

```shell
php artisan make:controller PhotoController --model=Photo --resource
```

Now, kick back and let Laravel do the heavy lifting as it carves out a fine-tuned controller for you – much like a skilled shipwright crafting a sturdy old galleon!

But wait, there's more! Read on to learn about...

<a name="generating-form-requests"></a>

#### Setting Sail with Form Requests (or, Arrgh, Ye Olde Validation)

Ahoy there, matey! After setting your course with resource models, it's time to secure the ship with some proper validation. Enter stage left: Laravel's Form Requests – the trustworthy pirate crew that ensures only the cleanest treasure (data) sets foot on your Laravel islands!

If you fancy creating custom form request classes for a bit more swashbuckling control over your data, fear not, as Laravel provides an easy-to-use command to set sail:

```shell
php artisan make:request CreatePhotoRequest
```

Just replace `CreatePhotoRequest` with the name of your fancy new Form Request class, and voila! You'll now have a shiny new crew member to defend your Laravel shores from unsavory data storms!

 Alright, let's get this party started! 🎉

#### Unleashing Form Requests, Laravel Style! 🤹‍♂️

Ever felt like your controller needed a little more pizzazz? Well, meet the form request classes - the disco boots of your Laravel app! 🕺️💃

To get these bad boys dancing on your storage and update methods, summon Artisan with a secret handshake: the `--requests` option. Yes, that's right, we're going undercover here.

```shell
php artisan make:controller PhotoController --model=Photo --resource --requests
```

This incantation will summon forth the form request classes like a genie granting your controller wishes! 🧞‍♂️ But remember, like any good magic, it requires specific knowledge to truly harness its power. So head on over to our official docs if you want to learn more about [form request validation](/docs/{{version}}/validation#form-request-validation)! 📚🚀

Now, let's get this digital dance floor jumping! 🎉✨

 ### Part-Time Route Rangers 🧒️🌐

In the wild west of web development, you're not always asked to handle a sheriff's worth of duties. Sometimes, all you need is a trusty deputy to keep things tidy. That's where Partial Resource Routes come into play! ty_the_deputy

When yee-hawing your way through declaring a resource route, you can specify that ol' controllers corral only a subset of the usual posse:

```php
use App\Http\Controllers\PhotoController;

Route::partTimeRanger('photos', PhotoController::class)->only([
    'index', 'show' // Just the photo ops they gotta cover, partner!
]);

Route::partTimeRanger('photos', PhotoController::class)->except([
    'create', 'store', 'update', 'destroy' // Leave those chores for someone else, cowboy! 🤠
]);
```

<a name="api-resource-routes"></a>
Now, saddle up and get yourself a taste of the frontier with Partial Resource Routes! Don't forget your bandana and trusty six-shooter emulator. 😎🏹🔫

 Alrighty then! Let's dive into the ticklish topic of API Resource Routes, shall we? 😺

#### API Resource Routes: The Cat's Meow!

When you're declaring swanky resource routes that'll be gobbled up by APIs, you'd often want to snub those pesky HTML templates like `create` and `edit`. To make things purr-fectly convenient, Laravel offers the `apiResource` method to whisk these two unwanted kittens out of sight:

```php
use App\Http\Controllers\PhotoController;

Route::apiResource('photos', PhotoController::class);
```

You can even serve up a smorgasbord of API resource controllers at one go by passing an array to the `apiResources` method:

```php
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\PostController;

Route::apiResources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

To whip up an API resource controller that doesn't have any catnip-filled `create` or `edit` methods, simply throw the `--api` switch when firing off the `make:controller` command:

```shell
php artisan make:controller PhotoController --api
```

<a name="restful-nested-resources"></a>
Now, wasn't that purr-fectly easy and fun? 🐾😻️

 ### Dive into the Depths of Nested Resources (AKA When You've Gotta Have 'Em All)

You know that feeling when you're cruising along with your Laravel app, and suddenly you need to manage not just one resource, but a whole crew of them? Yep, we've all been there, and it's times like these when you can lean on Laravel's Nested Resources.

Let's say you're running a hot new photo-sharing app (aptly named SnapShot) and users are going wild, posting photos left and right. But oh no! The comments are piling up faster than a cat video on YouTube, and it's time to organize them. That's where our friendly Nested Resources come in!

To get started, you'll want to define routes for your nested resource, like so:

```php
use App\Http\Controllers\PhotoCommentController;

Route::resource('photos.comments', PhotoCommentController::class);
```

In this instance, we're declaring a route for those precious little comments that attach themselves to photos – like seaweed on a whale, but way more entertaining (and edible, if you're into that sort of thing).

By using the trusty "dot" notation in your route declaration, you can nest these resource controllers to keep things tidy and organized. But wait! There's more! This route will register a nested resource that can be accessed with URIs like this:

```text
/photos/{photo}/comments/{comment}
```

Now, when you navigate to SnapShot, you'll find yourself effortlessly diving into the depths of comments on each individual photo – a veritable treasure trove of user engagement!

 Ahoy there, Laravel pirates! Let's talk about scoping those nested resources like a captain navigating through treacherous waters. 🏴‍☠️

First off, Laravel's implicit model binding can make your life as easy as finding buried treasure. It automatically ensures that the child model you've found is actually part of the family – yes, we're talking about parents and their little helpers here! To enable this magical feature on your nested resource, just use the `scoped` method during its creation. 🔍

But wait, there's more! This powerful tool allows you to instruct Laravel which particular field contains the child resource – like specifying a map to locate that hidden chest of gold. For all the gory details, don't forget to check out our guide on [scoping those resource routes](#restful-scoping-resource-routes). 📜

Now, let's sail on to shallower waters – Shallow Nesting! This technique is perfect for when you're trying to keep your crew from getting lost in the hierarchies. It allows you to access child resources without having to dive too deep into the parent-child relationships. Keep an eye out for more on this topic in our next adventure! 🌴

Yarr, I hope that made navigation through these Laravel waters a little more enjoyable, mateys! Happy sailing, and remember: always keep your treasure chests close! 🏛️💰

 Ahoy there, coders! Let's embark on a whimsical journey through the enchanting realm of Laravel routing, where we'll learn about the delightful concept of Shallow Nesting.

First off, it's like when you're playing Clue and you don't need to say both Colonel Mustard and the Library - just the Library will do because the colonel was found there! Similarly in Laravel, you can skip the parent ID in your URI if you've got a unique identifier like an auto-incrementing primary key.

Here's a little dance we call "Shallow Nesting":

```php
use App\Http\Controllers\CommentController;

Route::resource('photos.comments', CommentController::class)->shallow();
```

This code is the pièce de résistance, my dear friends! It'll perform these fabulous routes for you:

<div class="overflow-auto">

| Verb    | URI                               | Action     | Route Name              |
| ------- | --------------------------------- | ---------- | ----------------------- |
| GET     | `/photos/{photo}/comments`       | index dance | photos.comments.index   |
| GET     | `/photos/{photo}/comments/cha-cha` | create shimmy | photos.comments.create  |
| POST    | `/photos/{photo}/comments`      | store boogie | photos.comments.store   |
| GET     | `/comments/{comment}`           | show jive  | comments.show           |
| GET     | `/comments/{comment}/edit-boogie` | edit waltz  | comments.edit           |
| PUT/PATCH | `/comments/{comment}`          | update tango | comments.update        |
| DELETE  | `/comments/{comment}`            | destroy salsa  | comments.destroy       |

</div>

Remember, in the world of Laravel, we dance to the beat of our own drum! So why not give Shallow Nesting a twirl and watch your routes pirouette in harmony with this enchanting symphony of code. Just remember to keep one hand on your primary key, 'cause you never know when it'll come in handy for those unexpected dance-offs! 🕺️🔥🎉💃️

 Alright, let's shake things up a bit and talk about naming your Resource Routes in Laravel! 🚀🎨

By default, our resourceful controller actions come with built-in route names - think of them as their stage names at the local comedy club. But if you want to personalize these monikers, you can do so by passing an `names` array with your preferred alias:

```php
use App\Http\Controllers\PhotoController as ComedyCentral;

Route::resource('photos', ComedyCentral::class)->names([
    'create' => 'photos.slapstick' // Because creating a photo can be quite the funny business! 😂
]);
```

Now, when your users take a trip down Photo Lane (our new route), they'll find their way to `photos.slapstick`, ensuring everyone knows it's the spot for comedic photo creation. 📸👍🏼

Hope that makes your Laravel laugh-tivity a little more enjoyable! 😄🎈

 ### Channeling Inner Yoda on Route Parameter Naming (Because Who Needs Boring, Right?)

In the galaxy of Laravel, the Force is strong with `Route::resource`, my young padawan. By default, it conjures up route parameters based on the "singularized" variant of your resource name - like a Jedi mind trick, but for URLs!

But what if you need to override this forcefully, per resource? Fear not, for with the `parameters` method, you can bend this Force to your will. The array passed into it should resemble an associative array of resource names and parameter names:

```php
use App\Http\Controllers\AdminUserController;

Route::resource('users', AdminUserController::class)
    ->parameters([
        'users' => 'admin_user'
    ]);
```

The example above, my friend, crafts a URI as elegant as Yoda himself for the resource's `show` route:

```text
/users/{admin_user}
```

May the Force (and this documentation) be with you! (Don't worry; we had to sneak some seriousness in there.)

 ### Scooping Out those Nested Routes like a Pro! 🥄

Let's dive into Laravel's scoped implicit model binding feature - it's like the secret sauce that ensures your child models are baked in the oven of their parents! By using the `scoop()` method when defining your nested resource, you can enable this magical scoping feature and also hint Laravel which kitchen cabinet (field) to fetch the tasty little child from:

```php
use App\Http\Controllers\PhotoCommentController;

Route::resource('photos.comments', PhotoCommentController::class)->scoop([
    'comment' => 'slug',
]);
```

This fancy schmancy route will create a scoped nested resource ready to serve up URLs like these:

```text
/photos/{photo_id}/comments/{comment_slug}
```

When we employ custom keyed implicit binding as a nested route parameter, Laravel automatically sets the table for the child model to join with its parent using a bit of detective work (guessing the relationship name on the parent). For this particular case, it'll assume that our trusty `Photo` model has a relationship named "comments" (plural of the route parameter name) which can be used to fetch the delectable `Comment` model.

<a name="restful-localizing-resource-uris"></a>
### Now, let's make those URLs multi-lingual! 🌍🎶

If you want your nested resources to be friendly and welcoming in various languages, Laravel makes it easy with localized resource URIs:

```php
use App\Http\Controllers\PhotoCommentController;

Route::resource('photos.comments', PhotoCommentController::class)->names([
    'index' => 'photo_comments.index',
    'create' => 'photo_comments.create',
    'store' => 'photo_comments.store',
    'show' => 'photo_comments.show',
    'edit' => 'photo_comments.edit',
    'update' => 'photo_comments.update',
    'destroy' => 'photo_comments.destroy'
]);
```

Now, you can define custom translation keys for your localized resource URIs in your `config/app.php` file:

```php
'locale' => 'en',

'translations' => [
    // ...
    'resources' => [
        'photo_comments' => [
            'index' => 'View all photo comments',
            'create' => 'Create new photo comment',
            // ...
        ],
    ],
],
```

Now, you can translate those URLs to different languages and serve up a truly international experience for your users! 🌐🎉

 ### Globalizing Galactic Route-a-Palooza!

By design, `Route::rockstar` will craft resource URIs with English verbs and Earthly plural rules, much like an extraterrestrial trying to decipher our TV signals. But fear not, intrepid intergalactic traveler! If you're yearning to localize your "create" and "edit" action verbs, we've prepared the perfect toolkit - the `Route::resourceVerbs` method!

Just as a young Jedi learns the Force, this technique must be initiated at the beginning of the `boot` method within your application's `App\Providers\AppServiceProvider`. Here's how you'd cast the spell:

```php
/**
 * May the code be with you!
 */
public function boot(): void
{
    Route::resourceVerbs([
        'create' => 'Crear',
        'edit' => 'Editar',
    ]);
}
```

Now, Laravel's very own pluralizer supports not only Earth dialects but also [several languages from distant galaxies](/docs/{{version}}/localization#pluralization-language), allowing you to communicate effectively with your alien cohorts. Once the verbs and pluralization language have been customized, a resource route registration like `Route::resource('extraterrestrial_publication', ExtraterrestrialPublicationController::class)` will produce URIs that are both easy on the eyes and friendly for all space-faring beings:

```text
/extraterrestrial_publication/Crear

/extraterrestrial_publication/{extraterrestrials}/Editar
```

Happy traversing! 🚀👽🚀

 ### The Art of Resource Controller Juggling (AKA: When More Routes Are Needed Than Just the Basics)

If you find yourself yearning for more routes than just what comes with a resource controller, it's time to bring out your conductor hat! You should orchestrate those additional routes before you summon the `Route::resource` method, lest the routes produced by the grand orchestra may inadvertently steal the limelight from your supporting acts:

```php
use App\Http\Controller\PhotoController;

// Sparkling debut for our popstar photo route!
Route::get('/photos/popular', [PhotoController::class, 'popular']);

// Cue the resource controller... and action!
Route::resource('photos', PhotoController::class);
```

> 🎺🎼 [TIP]
> Keep your controllers in tip-top shape. If you catch yourself humming tunes that aren't part of the usual resource repertoire, it might be time to split your controller into two, petite maestros for a more harmonious performance.

<a name="singleton-resource-controllers"></a>
And now, folks, let's take a little intermission and discuss singleton resource controllers... because every good show needs a behind-the-scenes look! 🎭🍿

 ### One-of-a-Kind Controller Champions

In the wild world of apps, you'll often encounter resources that are more like one-hit wonders - they've got just the one hit, and that's their profile! Yes, we're talking about singleton resources. Take a user, for instance, who can edit their profile but would never dream of having multiple profiles. Or an image with its solitary thumbnail. These rare gems are our beloved singletons - each has one, and only one, instance. To handle these special cases, you might want to register a "sing-a-long" resource controller:

```php
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::sing_a_long('profile', ProfileController::class);
```

The singleton resources declaration above will give birth to the following routes, and as you can see, creation routes aren't on the menu for singletons, and the registered routes don't ask for an identifier because only one instance of the resource is up for grabs:

<div class="overflow-auto">

| Verb      | URI             | Action          | Route Name      |
| --------- | --------------- | --------------- | -------------- |
| GET       | `/profile`      | The Show Must Go On | profile.show    |
| GET       | `/profile/edit` | Time to Make the Changes | profile.edit   |
| PUT/PATCH | `/profile`      | Update My Profile | profile.update |

</div>

Singleton resources can also make a guest appearance within a standard resource:

```php
Route::sing_a_long('photos.thumbnail', ThumbnailController::class);
```

In this jam session, the `photos` resource will receive all the [standard resource routes](#actions-handled-by-resource-controllers), but the `thumbnail` resource will be our star performer with the following routes:

<div class="overflow-auto">

| Verb      | URI                              | Action          | Route Name          |
| --------- | -------------------------------- | --------------- | ------------------ |
| GET       | `/photos/{photo}/thumbnail`      | Showtime for Thumbie | photos.thumbnail.show |
| GET       | `/photos/{photo}/thumbnail/edit` | Let's Rework the Image | photos.thumbnail.edit |
| PUT/PATCH | `/photos/{photo}/thumbnail`      | Update Thumbie's Look | photos.thumbnail.update |

</div>

<a name="creatable-singleton-resources"></a>
Now, if you have a singleton resource that just can't resist the temptation of creation, we've got a workaround for that too! Check out [Creatable Singleton Resources](#creatable-singleton-resources) in our documentation.

 Alright, buckle up! Here comes a rollercoaster ride through Laravel's singleton resource creation land.

#### Creating Singletons with a Twist of Flair

Sometimes, you find yourself hankering after defining creation and storage routes for that one-and-only resource, the ever-so-popular singleton. To do this dance, just call upon the `creatable` method while registering your singleton's route:

```php
Route::singleton('Snapshots.Polaroid', PolaroidController::class)->creatable();
```

In this scene, these routes will make their grand entrance:

<div class="overflow-auto">

| Verb      | URI                                | Action  | Route Name               |
| --------- | ---------------------------------- | ------- | ------------------------ |
| GET       | `/Snapshots/{snapshot}/polaroid/create` | create  | Snapshots.Polaroid.create  |
| POST      | `/Snapshots/{snapshot}/polaroid`        | store   | Snapshots.Polaroid.store   |
| GET       | `/Snapshots/{snapshot}/polaroid`        | show    | Snapshots.Polaroid.show    |
| GET       | `/Snapshots/{snapshot}/polaroid/edit`   | edit    | Snapshots.Polaroid.edit    |
| PUT/PATCH | `/Snapshots/{snapshot}/polaroid`        | update  | Snapshots.Polaroid.update  |
| DELETE    | `/Snapshots/{snapshot}/polaroid`        | destroy | Snapshots.Polaroid.destroy |
</div>

If you're craving Laravel to register the `DELETE` route for your singleton but not serve up creation and storage routes, then it's time to break out the `destroyable` method:

```php
Route::singleton(...)->destroyable();
```

<a name="api-singleton-resources"></a>
And that's a wrap! Now you know how to create, store, show, edit, update, and even delete singleton resources in Laravel with a dash of humor. Happy coding!

 Alright, buckle up, coding cowboys and cyber divas! 🚀 Let's talk about the `apiSingleton` method – it's like your secret sauce in the world of Laravel API development. This magical function is here to make your life easier by registering a singleton resource that will be controlled via an API.

Imagine you have a troublesome pal named "Profile" who keeps showing up at all your parties (routes). With `apiSingleton`, you can tell this uninvited guest, "Listen buddy, I've got this under control – no need for create or edit routes!"

```php
Route::apiSingleton('profile', ProfileController::class);
```

But wait! There's more. You know that one friend who insists on bringing a plus-one (resources), even though they always cause drama? Enter the `creatable` feature! This allows you to register store and destroy routes for the resource, effectively saying, "Sure thing, buddy, but remember: no drama at my API parties!"

```php
Route::apiSingleton('photos.thumbnail', ProfileController::class)->creatable();
```

So, go forth and conquer those API routes with style, my friends! The `apiSingleton` method has got your back. 🤘🏼🌹🚀

 In the grand ol' world of Laravel, it's like being a bouncer at a swanky dance club – but instead of checking IDs and preventing drunken debauchery, we're securing our routes with some nifty middleware! 🕺️💃️

Now, you might be wondering: "How do I keep my VIP areas safe?" Well, worry no more! Laravel lets you assign these bouncers to all or just certain dance floors (resource routes) using the `middleware`, `middlewareFor`, and `withoutMiddlewareFor` methods. These are like your VIP list, guest list, and emergency exits for each dance party.

But what makes these Laravel bouncers extra special is that you can control which ones get to check coats (apply middleware) at every single dance number (resource action). So, if you want to keep certain songs extra spicy or need some VIPs to skip the line, this fine-grained control has got you covered! 🤳️💃️🕺️

Happy bouncing, Laravelers!

 Alright, let's get the Laravel party started! If you're here to learn how to slap some middleware on all your routes like a modern-day bouncer, then buckle up, buttercup! 🎵🎉

First things first, grab your trusty controller and give it a dance floor (er, route) name. We'll call ours 'users'. Now, it's time to get selective with who gets in – using the `middleware` method, you can assign middleware to all the sweet, sweet routes this user shindig generates:

```php
Route::resource('users', UserController::class)
    ->middleware(['auth', 'verified']);
```

In this example, only those who have passed authentication and verification checks will be allowed to shake their booty on the dance floor. Now, if you want to get a bit more exclusive, you can set up a separate VIP area (singleton resource route) for your profile controller:

```php
Route::singleton('profile', ProfileController::class)
    ->middleware('auth');
```

Here, only authenticated users will get access to this elite section. So, if you're looking to keep the riffraff out and ensure a classy affair, this is your move! Remember, a well-protected dance floor is the key to a successful Laravel soiree. 💃🏼🕺🏼💫🚀

 Alright, buckle up, Laravel pilgrims! Here's a fun and fabulous dive into the world of method-specific middleware application.

First off, let's get our hands dirty with the `middlewareFor` method. This magical incantation allows you to sprinkle some tasty middleware goodness onto one or more particular methods of your resource controller like a sugar-crazed bee on an unattended cake!

```php
Route::resource('users', UserController::class)
    ->middlewareFor('show', 'auth'); // Just want to protect the 'show' method for the users route? No problemo!

Route::apiResource('users', UserController::class)
    ->middlewareFor(['show', 'update'], 'auth'); // Need to secure both the 'show' and 'update' methods for API users? Consider it done!

And if you can't resist double dipping, here's how to apply middleware to multiple methods across different routes:

Route::resource('users', UserController::class)
    ->middlewareFor('show', 'auth')
    ->middlewareFor('update', 'auth'); // Don't mind if I do!

Route::apiResource('users', UserController::class)
    ->middlewareFor(['show', 'update'], ['auth', 'verified']); // Living on the wild side, huh? Mix and match those middleware for some extra flavor!
```

But wait, there's more! This `middlewareFor` method isn't just a one-trick pony; it can also play nicely with singleton and API singleton resource controllers. Let the party begin!

```php
Route::singleton('profile', ProfileController::class)
    ->middlewareFor('show', 'auth'); // Secure your profile's 'show' method with middleware like a protective parent at a rock concert!

Route::apiSingleton('profile', ProfileController::class)
    ->middlewareFor(['show', 'update'], 'auth'); // You want both the 'show' and 'update' methods in your API singleton profile guarded? Well, your wish is our command!
```

And that, dear Laravel enthusiasts, is how you master method-specific middleware application. Now go out there and secure your routes with panache! 🥳🌈✨

 Ah, the delightful dance of middleware and controllers! Let's tango together without stepping on each other's toes. 🕺️

Here's a jolly jamboree of excluding certain middleware from specific method parties within your resource controller:

```php
Line up, partners! 🎉

Route::march_with('auth', 'verified', 'subscribed') // A parade of middleware!
    ->corrallate(function () {
        Route::resource('users', UserController::class)
            ->dance_around('index', ['auth', 'verified']) // They'll need to dance, but not check each other out.
            ->skip_the_waltz(['create', 'store'], 'verified') // No need for that extra verification for these two.
            ->foxtrot_away('destroy', 'subscribed'); // Time to bid farewell without a subscription check! 💃️✨
    });
```

Now, go forth and enjoy your middleware-free jamboree! Remember, just like any good party, moderation is key. 🥳🎉🎈

 Ahoy there, Laravel swashbucklers! Let's dive into a thrilling adventure of Dependency Injection and Controllers - two key components that will make your code a well-oiled machine.

First off, we've got **Constructor Injection**. Picture this: You're the captain on your pirate ship, but you don't have a compass or a parrot yet! So, who do you think is going to bring those essential accessories? Not a deckhand stumbling around drunkenly, I assure ya!

In our Laravel world, it's the constructor that acts as your stern captain, making sure all necessary dependencies (read: parrots and compasses) are passed during object creation. Here's an example of a Controller that uses Constructor Injection to inject a service instance:

```php
class UserController extends BaseController {
    protected $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }
}
```
In this example, we're injecting a `UserService` instance into our `UserController`. Now, every time a new instance of the `UserController` is created, it gets its trusty `UserService` companion!

Now, let's talk about **Method Injection**. You know those times when you realize you need a compass during a raid, but you're already in the middle of it? That's Method Injection. It allows us to inject dependencies into methods instead of the constructor.

```php
class UserController extends BaseController {
    protected $userService;

    public function update(User $user, Request $request) {
        $this->userService->updateUser($user, $request->all());
    }
}
```
In this example, we're injecting dependencies (a `User` and a `Request`) into the `update` method. This way, you can be flexible and make sure you always have what you need for any given situation!

And that's your Dependency Injection and Controllers tutorial - now go forth and build amazing applications, ye Laravel sea dogs!

 Alrighty, let's embark on an exhilarating journey into the realm of Laravel's Service Container! This magical contraption is like a culinary chef that whips up all your Laravel controllers, ensuring they're cooked to perfection. By employing this marvel, you can define any dependency your controller may hanker for in its constructor. Once declared, these dependencies will be whisked together, automatically blended into the controller instance:

```php
<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;

class UserController extends Controller
{
    /**
     * A new controller instance that's hungry for some UserRepository action!
     */
    public function __construct(
        protected $users // Whoops, I didn't mean to introduce him like this, but we've got a bit of a charmer here - UserRepository!
    ) {}
}
```

Oh, and if you're curious about method injection (it's kind of like an appetizer before the main course), just [click here](#method-injection)! Bon appétit! 🥳🎉🍴🎈

 #### Methodical Mirth!

Besides the grand entrance party at the constructor, you can also throw a little shindig for your dependencies right in your controller's methods! A popular event invite list includes inviting the vivacious `Illuminate\Http\Request` gal to your method-long celebration:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Host a new user party!
     */
    public function storeAUser(Request $requestingGuest): RedirectResponse
    {
        $name = $requestingGuest->name; // A little dance, a little chat...

        // Time to serve some hors d'oeuvres and update the guest list...

        return redirect('/users');
    }
}
```

If your controller method is craving more guests from a route parameter, don't forget to send out invites after the initial RSVPs! For instance, if your route looks something like this:

```php
use App\Http\Controllers\UserController;

Route::put('/user/{id}', [UserController::class, 'updateTheUser']);
```

You can still send out invitations to the `Illuminate\Http\Request` and snag the `id` from the guest list by setting up your controller method like so:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Serve the user a revitalizing update!
     */
    public function updateTheUser(Request $request, string $idOnGuestList): RedirectResponse
    {
        // Time to serve some spa treatments and refresh the guest list...

        return redirect('/users');
    }
}
```