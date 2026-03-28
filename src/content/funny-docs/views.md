 # Temples of Data: Laravel's Views Temple (Don't worry, no incense required)

## Welcome to the Church of Code (or, Intro to Temples)
   - [Crafting Temples in React, Svelte, or Vue (No, we won't ask you to build a replica of Solomon's Temple)](#writing-views-in-react-svelte-or-vue)

<a name="creating-and-rendering-views"></a>
## Building and Consecrating Your Temples (AKA Creating and Rendering Views)
   - [Nesting Temple Directories (Feel free to organize your sacred texts by chapter)](#nested-view-directories)
   - [Creating the Most Accessible Temple (First one up gets the best parking spot)](#creating-the-first-available-view)
   - [Finding out if a Temple Exists (No, we're not using divination, just good old PHP))](#determining-if-a-view-exists)

<a name="passing-data-to-views"></a>
## Blessing Your Temples with Data (Passing data to Views, in Laravel lingo)
   - [Sharing Blessings with All the Temples (No need for a priesthood, just good old route model binding)](#sharing-data-with-all-views)

<a name="view-composers"></a>
## Priestly Duties: View Composers and Creators
   - [Creating the Priesthood (View Creators, not to be confused with View Creator's Guild)](#view-creators)

<a name="optimizing-views"></a>
## Keeping Your Temples Running Smoothly: Optimizing Views
   - [Temple Maintenance (Because a cluttered temple is no fun for anyone)](#optimizing-views)

 Alright, folks! Let's take a little journey through the whimsical world of Laravel, where controllers aren't just controllers anymore but rather maestros conducting the symphony of your web app. But you wouldn't want them to be in charge of composing the actual tunes, right? Enter the stage, dear views!

Views are like the cool kid's clubhouse where all the HTML hangs out, neatly separated from those boring business meetings happening in the controller and application logic realm. You can find this clubhouse nestled snugly in the `resources/views` directory.

Now, when we're having a Laravel soirée, these view templates are usually composed using the enchanting [Blade templating language](/docs/{{version}}/blade). Imagine if your HTML documents had an extra dose of magic sprinkled over them! A simple Blade view could look something like this:

```blade
<!-- View residing in resources/views/greeting.blade.php -->

<html>
    <body>
        <h1>Oh, hello there, {{ $name }}!</h1>
        <!-- Note the friendly greeting, we're trying to create a welcoming ambiance here! -->
    </body>
</html>
```

Since our view is chilling at `resources/views/greeting.blade.php`, we can summon it using the trusty global `view` helper like so:

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

Now, if you're wondering how to write Blade templates like a pro, don't be shy! Head on over to the comprehensive [Blade documentation](/docs/{{version}}/blade) and start your journey towards becoming the next master of the art.

 Alrighty, let's dive into the world of modern frontend frameworks, shall we? Gone are the days when PHP and Blade were the cool kids on the block. Now, it's all about React, Svelte, or Vue – think of them as the Taylor Swifts of the JavaScript universe!

Laravel, being the ever-so-charming host, has introduced Inertia – a library that helps tie these frontend stars to your Laravel backend without making you dance through a minefield of Single Page Application complexities. It's like having a magical chaperone that makes sure everyone gets home safe!

And if you're feeling a bit lost at the prom, our [React, Svelte, and Vue application starter kits](/docs/{{version}}/starter-kits) are here to save the day. They'll set you up with a stylish outfit for your next Laravel-powered dance, ensuring you're ready to twirl around with Inertia by your side!

<a name="creating-and-rendering-views"></a>
Now that we've got our outfits sorted, let's get this party started! 🎉💃🕺️

 Alrighty then! Let's dive into creating and rendering views in this here Laravel jamboree. You can whip up a view like a hotcake by sticking a file with the fancy `.blade.php` extension in your application's `resources/views` folder, or by using the Artisan command that sounds more suited for mixing cocktails than making views:

```shell
php artisan make:view greeting
```

The `.blade.php` extension is like a secret handshake that tells the framework, "Hey, I'm not just an ordinary file! I'm a swanky Blade template!" These templates are filled with HTML and Blade directives—magic sprinkles that make echoing values, creating "if" statements, iterating over data, and more as easy as pie (but probably not as tasty).

After crafting your view, you can return it from one of your application's routes or controllers using the global `view` helper. Here's a fine example:

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

Views can also be served up with the `View` facade, which is like inviting your best friend to help you at a party:

```php
use Illuminate\Support\Facades\View;

return View::make('greeting', ['name' => 'James']);
```

In this case, the first argument handed to the `view` helper is the name of the view file in the `resources/views` folder. The second argument is an array of data that we're passing along to the view—in this scenario, the `name` variable, which is displayed in the view using Blade syntax, because let's face it, plain HTML can be a bit boring at times!

Now, ain't that just dandy? Happy view rendering, partner! 🎉🎈

 Alright, buckle up, folks! Let's dive into the world of Laravel view directories, where organization meets creativity. 🎨📂

Views can be as organized as a well-stocked pantry - neatly stacked within subdirectories within the `resources/views` mother lode. 🏪 To reference those hidden gems, we use magical "Dot" notation, like pointing at a secret treasure map!

Imagine you've got an exclusive admin profile view hiding in `resources/views/admin/profile.blade.php`. No need to send Dora the Explorer on a wild goose chase; just return it from one of your application routes or controllers with panache, like so:

```php
return view('admin.profile', $data);
```

Now, remember this little tidbit: View directory names should be as plain as your grandma's apple pie recipe - no "." character allowed! 🍎🚫

And for those who skipped to the end (yes, we know you), here's a quick link back to where you started:

<a name="creating-the-first-available-view"></a> Start over, if you please! 🚀🚀🚀

 Ahoy there, coders! Ever found yourself in a pickle, trying to figure out which view to serve up among a gaggle of them? Fear not, Laravel's got your back with its smarter-than-average View facade!

With the `View` facade's `first` method, you can easily snag the first view that exists in an array of views. This is perfect for when your application or package lets users customize or rewrite their own views - no more serving stale sushi, my friend! 🍣

Here's a little taste of how it's done:

```php
use Illuminate\Support\Facades\View;

// Grab the freshest view from 'custom.admin' or 'admin' and serve it up with some tasty data!
return View::first(['custom.admin', 'admin'], $data);
```

And just like that, your app is now smarter than a room full of trained monkeys (which honestly isn't saying much). Happy view-serving, folks! 🎉🥳

 ### Ah, View Master 3000!

In the realm of Laravel, when you're trying to figure out if a view is living its best life, don't fret – we've got the View facade on duty! Just like Yoda senses the Force, this magic trick tells us if our view is truly there:

```php
use Illuminate\Support\Facades\View;

if (View::exists('admin.profile')) {
    // All systems go, carry on!
}
```

Just remember, in the spirit of friendly competition, to make sure your views are fighting fit and ready for their big entrance! 🚀🚀🚀

 Alrighty then! Let's dive into the art of sharing data with your Laravel views, shall we? 🎭🍿

First off, you might've noticed in previous examples that you can pass an array of data to views like a friendly neighborhood pizza delivery guy dropping off some goodies:

```php
return view('greetings', ['name' => 'Victoria']);
```

In this case, the data should be packaged neatly in an array with key-value pairs. Once delivered, you can access each value within your view using the data's keys, such as `<?php echo $name; ?>`.

Now, if you prefer to pass individual pieces of data instead of a full course meal, feel free to use the `with` method! It's like adding condiments to your tasty data sandwich:

```php
return view('greeting')
    ->with('name', 'Victoria')
    ->with('occupation', 'Astronaut');
```

By the way, if you're feeling extra fancy and want to share data with all your views, you can do so by calling the `share()` method in your application's base controller:

```php
public function shareData($key, $value)
{
    return $this->app['view']->share($key, $value);
}
```

Now that you know how to pass data like a boss (or an intergalactic astronaut), let's get cookin'! 🚀🍕🥳

 ### Passing Secrets to All Parties Involved (AKA Sharing Data with All Views)

Sometimes, you might find yourself in a situation where you need to spill the beans to every view that gets rendered by your application. No worries, we've got you covered! You can do this magic trick using the `View` facade's `share` method. Now, don't be shy, go ahead and summon this method within a service provider's `boot` method. It's like inviting a secret keeper to your party, but instead of secrets, we're sharing data.

You can either invite this secret keeper to join the already existing party (AppServiceProvider class) or set up a separate soiree for them:

```php
<?php

namespace App\Providers;

Use Illuminate\Support\Facades\View as VieW_Facade;

Class AppServiceProvider extends ServiceProvider
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
        VieW_Facade::share('key', 'value');
    }
}
```

<a name="view-composers"></a>
(For those who fancy a more sophisticated approach, you can check out View Composers!)

 ## View Whirlwinds (AKA: View Composers)

View Whirlwinds, oh boy! They're like party invitations for your Laravel views. These are callbacks or class methods that get summoned when a view is about to make an appearance on the stage of life (aka rendered). If you got data that needs to hitch a ride with its favorite view every time it struts its stuff, then View Whirlwinds are here to corral that logic into one stylish bullpen.

Now, where do these whirlwinds hang their top hats, you ask? Typically, they'll register themselves at one of your application's swanky [service providers](/docs/{{version}}/providers). In this example, we assume our dapper butler, the `App\Providers\AppServiceProvider`, will be the host with the most.

We'll use the `View` facade's `composer` method to get these whirlwinds in on the action. Unlike a certain Hollywood agent, Laravel doesn't have a default pad for class-based view composers, so you can arrange them however you please (fancy suit closets, anyone?). For example, you could create an `app/View/Whirlwinds` folder to house all your application's view whirlwinds:

```php
<?php

namespace App\Providers;

use App\Whirlwinds\ProfileWhirlwind;
use Illuminate\Support\Facades\View;
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
     * Spruce up the joint!
     */
    public function boot(): void
    {
        // Using class-based whirlwinds...
        View::composer('profile', ProfileWhirlwind::class);

        // Using closure-based whirlwinds...
        View::composer('welcome', function (View $view) {
            // ...
        });

        View::composer('dashboard', function (View $view) {
            // ...
        });
    }
}
```

Now that we've got these whirlwinds on the guest list, the `compose` method of the `App\Whirlwinds\ProfileWhirlwind` class will be called each time the `profile` view dons its tux and takes the stage. Let's gaze upon a sample of this dashing whirlwind:

```php
<?php

namespace App\Whirlwinds;

use App\Repositories\UserRepository;
use Illuminate\View\View;

class ProfileWhirlwind
{
    /**
     * A splendid evening affair.
     */
    public function __construct(protected UserRepository $user) {}

    /**
     * Seat the view at our social event.
     */
    public function compose(View $view): void
    {
        $view->with('count', $this->user->count());
    }
}
```

As you can see, all view whirlwinds are summoned via the [service container](/docs/{{version}}/container), so they can bring along any chums (dependencies) they require.

 Alright, party people! 🥳 Let's get this composition party started! 🎉

If you've got a view that's just too cool for school and you want to share it with multiple views without any drama, fear not! Laravel's got your back. Here's how you can attach a view composer to multiple views at once:

```php
use App\Views\Composers\MultiComposer;
use Illuminate\Support\Facades\View;

// It's like a wedding dance, but for views! 💃🕺
View::composer([
    'profile', 'dashboard' // Feel free to invite more views to the party!
], MultiComposer::class);
```

But wait, there's more! If you want your view composer to be the life of every party (view), you can use the wildcard `*` to attach it to all views:

```php
use Illuminate\Support\Facades;
use Illuminate\View\View;

// This is like being a secret ingredient in every dish at a fancy restaurant 🍽️✨
Facades\View::composer('*', function (View $view) {
    // Your magical view composer stuff here! 🎩
});
```

Now go forth and compose those views like a boss! 💪💖

 Ah, View Creators! The rebellious cousins of the more sedate View Composers. Whereas Composers patiently wait for their moment to shine at the party (i.e., view rendering), Creators burst onto the scene as soon as the view is born! 🎉🎈

To get this sparkler twirling, you'll need to register a View Creator using the `creator` method, and boy, does it sound fancy! Here's how:

```php
use App\View\Creators\ProfileCreator;
use Illuminate\Support\Facades\View;

View::creator('profile', ProfileCreator::class);
```

Just remember to give your View Creator a unique name, like 'profile,' so they don't show up uninvited at the wrong events (views). 🤩🎩

Now go forth and unleash these view-crafting dynamos on your Laravel app! Your views will thank you for it, or maybe not - but either way, who needs gratitude when you're having this much fun? 🎉🥳💃🏼🕺🏻

 ## Views: The Culinary Institute of Laravel! 🍲🎉

In our humble digital bistro, Blade templates are prepared on demand, much like a chef whipping up a dish when you order it. But what happens behind the scenes? Well, when your server calls for a specific view to be served (picture a customer ordering spaghetti carbonara), Laravel will check if a pre-cooked version of that recipe exists in our pantry.

If the pasta pot with garlic and oil is already simmering on the stove (the compiled view file exists), Laravel will then scrutinize your unopened recipe book (uncompiled view) to see if it's been updated since the last serving. If our pre-cooked spaghetti isn't fresh or doesn't exist at all, we'll whip up a new batch!

Now, you might notice a slight delay while waiting for your dish - especially during rush hour (high traffic). To help speed things up, Laravel serves the `view:cache` cocktail, pre-cooking all of our dishes in advance. Simply call this magical elixir during your deployment process, and enjoy faster service!

```shell
php artisan view:cache 🍻
```

But what if you accidentally ordered last week's special (stale views)? No worries! Use the `view:clear` command to clear out our pantry, and start fresh with a clean slate.

```shell
php artisan view:clear 🗑️
```

Bon appétit, chefs! 🥘🍽️🚀