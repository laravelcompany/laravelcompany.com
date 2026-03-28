 ## Database: The Magical Scroll of Infinite Data! 🧙‍♂️📖

### Chapter 1 - Introduction to the Scroll of Infinite Data 🔍

Welcome, brave data seeker! You've stumbled upon Laravel's mightiest tool: The Magical Scroll of Infinite Data. This scroll will help you navigate through colossal amounts of data without getting lost in the labyrinth of endless records. Buckle up, let's dive in!

<a name="basic-usage"></a>
### Chapter 2 - Basic Usage of the Magical Scroll 🧩

#### Section A - Paginating Query Builder Results (The Wand of Many Queries) 🎭

Cast this spell to split your data into manageable chunks and watch them parade by like a spectacle at a medieval fair.

```php
$data = DB::table('users')
    ->orderBy('id', 'asc')
    ->paginate(15);
```

#### Section B - Paginating Eloquent Results (The Scepter of Single Queries) 👑

Eloquent models can also be paginated! Use this to show data in a more regal manner, fitting for your kingdom's subjects.

```php
$users = User::orderBy('id', 'asc')
    ->paginate(15);
```

#### Section C - Cursor Pagination (The Crystal Ball of Continuous Scrolling) 🔮

For those who want an endless scroll, this spell is for you! Watch your data glide by as if time itself has no end.

```php
use Illuminate\Support\Facades\DB;

$cursor = DB::table('users')->simplePaginate(0, ['*'], 'id', $nextCursor);

if ($cursor->hasMorePages()) {
    // Scroll down!
}
```

#### Section D - Manually Creating a Paginator (The Book of Custom Spells) 📖

Sometimes, the default scroll is not enough. When you need something more unique, craft your own custom paginator with this spell!

```php
use Illuminate\Pagination\LengthAwarePaginator;

$results = User::all();

$paginatedResults = new LengthAwarePaginator($results, $results->count(), 15);
```

#### Section E - Customizing Pagination URLs (The Wand of SEO Magic) 🌐

Make sure your magical scroll doesn't leave a trail of chaos in its wake. Customize your pagination links to keep search engines and users happy!

<a name="displaying-pagination-results"></a>
### Chapter 3 - Displaying Paginated Results (The Scroll of Userly Delights) 📞

#### Section A - Adjusting the Pagination Link Window (The Spell of Narrow Focus) 👀

Sometimes, less is more. Focus your users' attention on specific pages in the paginated scroll.

```php
$data = DB::table('users')
    ->orderBy('id', 'asc')
    ->simplePaginate(15, ['*'], 'page', 2, 3);
```

#### Section B - Converting Results to JSON (The Charm of Data Transformation) 🔄

Transform your paginated scroll into a more compact form for easier data manipulation!

```php
$users = User::orderBy('id', 'asc')
    ->simplePaginate(15);

echo json_encode($users);
```

<a name="customizing-the-pagination-view"></a>
### Chapter 4 - Customizing the Pagination View (The Spell of Elegant Design) 🎨

Dress up your magical scroll with a custom design, fit for even the pickiest of data enthusiasts. Why settle for a plain old scroll when you can have one that sparkles and shimmers?

```php
use Illuminate\Pagination\Paginator;

class CustomPaginator extends Paginator {
    // Add your customizations here!
}
```
<a name="paginator-instance-methods"></a>
### Chapter 5 - Paginator and LengthAwarePaginator Instance Methods (The Scroll's Secret Powers) 🔒

Unlock the hidden powers within your magical scroll, from getting more information about the current page to jumping ahead in the scroll with ease!

<a name="cursor-paginator-instance-methods"></a>
### Chapter 6 - Cursor Paginator Instance Methods (The Scroll's Continuous Magic) 🌙

Harness the power of continuous scrolling, where the end is never in sight! With cursor pagination, you can keep users hooked on your data like a never-ending Netflix series.

 ## Pagination: A Breeze in Laravelville! 🚀

In other frameworks, pagination might as well be a root canal - painful and long-lasting. But fear not, dear developer! In Laravel, we've got a fresh breeze of relief for your query needs! Our magical paginator, integrated with the [Query Builder](/docs/{{version}}/queries) and the all-powerful [Eloquent ORM](/docs/{{version}}/eloquent), will make database record pagination as easy as pie... or perhaps pizza, because who doesn't love pizza?

Best part? Zero configuration required! Yes, you heard that right. Zip, zero, zilch! Just ask and you shall receive.

By default, our paginator generates HTML that harmonizes beautifully with the [Tailwind CSS framework](https://tailwindcss.com/). But if Tailwind's not your thing (we're not sure how that's possible, but each to their own), we've got Bootstrap support ready and waiting!

<a name="tailwind"></a>
Now, wasn't that a pleasant introduction? Let's dive in, shall we? 🐠 (Yes, that was a Finding Nemo reference. We couldn't help ourselves.)

 Alrighty, partner! If you're rockin' Laravel's Tailwind Express Train with Tailwind 4.x, your app's `resources/css/app.css` file is already decked out in style like a Las Vegas lounge on Saturday night!

```css
Here's the rundown:

@import 'tailwindcss';

And now, for the main event...
@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';
```

Now you can strut your stuff like a digital cowboy with Laravel's pagination views in perfect sync with Tailwind! Just remember, no two-steppin' or line-dancin' allowed in the CSS files! 🤠🎉

 Ahoy there, Captain! Let's hoist the sails of knowledge and set course for Laravel's QueryBuilder Pagination Islands!

<br>

First off, you might find yourself drowning in a sea of results – a veritable tsunami of data, if you will. Fear not, dear sailor, for Laravel offers a trusty ol' lifeboat called pagination to help you navigate this stormy ocean!

<br>

To hitch a ride on this lifeboat, simply append the `paginate()` method to your QueryBuilder query:

```php
$data = App\User::orderBy('created_at', 'desc')->paginate(15);
```

Here, we're ordering our users by their creation date (because who wants stale users?) and limiting the number of passengers aboard this ship to a manageable 15.

<br>

Now, as you sail through the data, Laravel will kindly hand you pages of results (in the form of the `\Illuminate\Pagination\LengthAwarePaginator` class), complete with navigation links and all!

<br>

You can even customize the navigation links by messing around with the `onEachSide()`, `total()`, and `pageName` methods:

```php
$data = App\User::orderBy('created_at', 'desc')
    ->paginate(15, ['*'], 'customPageName', 2);
```

In this example, we're using the `customPageName` parameter to rename our navigation links from "Page X" to something a bit more pirate-y, like "Shanty 2." And remember, mateys: You can adjust the number of links displayed on either side of the current page using the `onEachSide()` method (default is one).

<br>

Lastly, if you want to keep a count of how many sharks your query has bitten off (er, results it has fetched), you can use the `total()` method:

```php
$totalUsers = App\User::count();
```

And there ya have it, me hearties! Laravel's QueryBuilder pagination is as handy as a ship's wheel in stormy weather. Now go forth and conquer the seas of data! Yarr! 🏴‍☠️⚓️

 ### Paginating Query Builder Results (AKA "Turning One Big Party into a Never-Ending Sequel")

Welcome to the wild world of pagination, where we transform a single data dump into a series of manageable events (or pages), each waiting eagerly for their time in the spotlight. And guess what? Laravel's got your back with some pretty nifty tools!

In this jamboree, there are several ways to paginate items, but let's start with the simplest one: by using the `paginate` method on the [query builder](/docs/{{version}}/queries) or an [Eloquent query](/docs/{{version}}/eloquent). The `paginate` method is like a magical bouncer that takes care of setting the query's "limit" and "offset" based on the current page being viewed by your users, all without lifting a finger!

By default, the current page is detected by the value of the `page` query string argument on the HTTP request. This value is automatically detected by Laravel, and it's like magic – just add it to your URL, and voila! Your users can navigate seamlessly through your data pages. The icing on the cake? This value is also automatically inserted into links generated by the paginator, making navigation a breeze for both you and your visitors.

Here's an example of how you can use `paginate` to serve up a delicious helping of users per page:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Show all application users.
     */
    public function index(): View
    {
        // We're serving up a scrumptious 15 users per page!
        $users = DB::table('users')->paginate(15);

        // Now, let's serve these users with a view that loves them!
        return view('user.index', compact('users'));
    }
}
```

Now, wasn't that a fun-filled lesson? Remember to keep the party going and explore more ways of paginating in Laravel!

 Ahoy there, coding pirates! Let's dive into the tantalizing topic of Simple Pagination, shall we?

First off, let me tell you about the trusty `paginate` method. This chap not only fetches records from the database but also counts 'em like a pro beforehand. Why you ask? Well, it's like him saying "Arrr, mateys! There be 5 treasure chests full of gold!" before leading you to them so you know how many journeys you'll have to make. But if ye don't fancy showing the exact number o' chests in yer app's UI, well then ye can just skip that part, matey!

Now, if all ye need is a few simple "Next!" and "Previous!" links to guide your users, the `simplePaginate` method be the one for ye. This lad performs a swift, efficient query that gets the job done without any unnecessary record counting piracy:

```php
$users = DB::table('users')->simplePaginate(15);
```

In this example, we're summoning 15 hearty souls (err... users) to their digital ship, and off they go on a simple yet efficient voyage through the sea of data! Ah, isn't coding fun? Let's keep sailing together! \o/

 Alrighty, buckle up, coders! Let's dive into the world of paginating Eloquent queries. It's like organizing a rambunctious house party where you want to ensure no one gets overwhelmed - just replace 'house party' with 'database results', and 'guests' with 'records'.

First things first, let's paginate our beloved `App\Models\User` model. We're planning a swanky soiree of 15 records per page (because who needs more friends, amirite?). Check out this slick code snippet:

```php
use App\Models\User;

$users = User::paginate(15);
```

Now, if you're feeling fancy and want to add some filters, like a 'votes' clause (because who doesn't love a good debate?), just go ahead:

```php
$users = User::where('votes', '>', 100)->paginate(15);
```

Fancy pants, aren't we? But wait, there's more! You can also use the `simplePaginate` method when paginating Eloquent models (because sometimes you just want to keep it simple, stupid):

```php
$users = User::where('votes', '>', 100)->simplePaginate(15);
```

And if you're feeling extra adventurous, you can try out `cursorPaginate` (because who doesn't love a good cursor dance party?):

```php
$users = User::where('votes', '>', 100)->cursorPaginate(15);
```

Remember, it's always a good idea to serve your records with style and grace! Now, go forth and paginate like a boss! 🎉🥳

 Oh, the saga of two paginators on a date! One night, they both wanted to steal the spotlight on your application screen. But alas, their simultaneous craving for the `page` query string param caused chaos, like a dance floor brawl at a disco. Fret not, dear developer! Laravel's got your back with a cunning solution that's as slick as a panther in moonlight.

Just pass the name of the desired query string parameter to the paginator's current page, like you would invite the wallflower to join the dance:

```php
use App\Models\User;

$users = User::where('votes', '>', 100)->paginate(
    $perPage = 15, $columns = ['*'], $pageName = 'users'
);
```

In this charming encounter, `users` is the wallflower, who will now be known by its unique name instead of the default `page`. So, no more confusion over which one to twirl with! 🕺🚀✨

*P.S. Curious about Cursor Pagination? Jump ahead to "Cursor Pagination" (<a href="#cursor-pagination">anchor link</a>), or simply follow the dance floor lights to find it!*

 ### Cursor Shuffle (aka Pagination 2.0)

If you've ever felt like your database was a rowdy party and you just wanted to politely ask for the next tune, then you're going to love our new Cursor Shuffle feature! Unlike traditional offset-based pagination that acts like an awkward guest who barges into the middle of the party (and sometimes skips some tunes), Cursor Shuffle elegantly slides in right where the music is already grooving.

Imagine you're a DJ, and instead of shouting "Hey, come over here, it's tune number 27!" to your guests, you subtly drop hints like "Next up, track with the shimmering sequins." That's what Cursor Shuffle does for our Laravel party!

Unlike its offset cousin, which screams page numbers in the URLs it generates (guess who's the over-eager newcomer at the bash?), Cursor Shuffle discreetly drops a "cursor" string into the query. The cursor is like a coded invitation with the location of the next dance and the direction we should boogie:

```text
http://localhost/users?cursor=eyJpZCI6MTUsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0
```

You can create a Cursor Shuffle playlist by using the `cursorPaginate` method, which is like asking your favorite DJ to spin the tunes for you. Just give it a call with your query builder:

```php
$users = DB::table('users')->orderBy('id')->cursorPaginate(15);
```

Once you've got your Cursor Shuffle playlist, feel free to [spin the tunes](#spinning-the-tunes) as you would with `paginate` and `simplePaginate`. For more deets on the dance moves offered by our new friend, check out the [Cursor Shuffle instance method documentation](#cursor-shuffle-instance-methods).

> ⚠️ WARNING!
> To make use of this groovy feature, you gotta have your query sorted like a well-organized playlist. Plus, the tracks on that list should belong to the same album (aka table) you're partying in.

<a name="cursor-vs-offset-pagination"></a>
*Now spinning tunes like a boss!* 🎶 🕺️

 Alright, buckle up, folks! Let's dive into the world of pagination and see if we can make sense of two unlikely heroes: Offset Pagination and Cursor Pagination.

Imagine you're at a never-ending party where everyone is dancing, chatting, and occasionally taking selfies (in a Laravel `users` table). Now, there are two ways to approach serving these selfies - the chaotic Offset way, and the cool Cursor way.

Let's start with our old pal, Offset Pagination:

```sql
SELECT * FROM users OFFSET 10 LIMIT 10;
```

This query is like telling the DJ to skip the first 10 selfies (the "first page") and play the next 10. The problem? If someone sneaks in a selfie between our party-goers, we miss it! Offset pagination doesn't care about the newcomer - it just moves on with its life.

Now, let's meet our new pal, Cursor Pagination:

```sql
SELECT * FROM users WHERE id > (SELECT id FROM users ORDER BY id LIMIT 10 OFFSET 10);
```

This query is like asking the DJ for "the next selfie after the tenth one we skipped." It keeps track of the last selfie it played and doesn't miss any newcomers! If a selfie-taking partygoer shows up between our previous set, Cursor Pagination will grab that selfie without breaking a sweat.

So, there you have it! Offset Pagination is great for simple parties where nobody joins or leaves after the host says "cheese." But if your party is more like a bustling dance floor, go with Cursor Pagination - it keeps things fresh and ensures no selfies are left behind.

 Ahoy, Captain! Navigate through the vast sea of data like a seasoned seafarer with Laravel'sOFFSET PAGINATION - the compass for your next cod-quest!

(Imagine you're on a pirate ship, sailing through endless seas of users data)

"Yo ho, matey! Sail no more to the perilous 'All Users' page! With OFFSET PAGINATION by our side, we shall only fetch 15 new users at a time. So, anchor those swords, and grab your trusty SQL query!"

(Now it's time to write the magical incantation)

"Select every user from the land of 'users,' order them alphabetically by their ID, ascending, set the limit to 15, then take us forward 15 steps with the OFFSET magic. Thus, we shan't have to deal with the whole sea of users at once!"

(In SQL terms)

`select * from users order by id asc limit 15 offset 15;`

(Just a quick reminder!)

"So, there ye have it! With OFFSET PAGINATION, Laravel makes traversing the endless seas of data less daunting and more manageable - much like a well-stocked pirate ship!"

 Alright, let's dive into the whimsical world of cursor pagination! It's like inviting your nerdy friend over for a game night, except instead of Monopoly or D&D, we're playing Database Wizardry.

Imagine you're at a raging party, and everyone wants to know who the most senior attendee is. You could go through the whole guest list again and again (offset pagination), but that's tedious, right? Enter cursor pagination - our efficient, well-dressed bouncer who only lets in the next 15 people on the list after checking IDs (indexed columns). He skips the drama of going through everyone again if you ask for the same information later (frequent writes).

But, our bouncer has a few quirks:

- He can only show "Next" and "Previous" signs (like `simplePaginate`). No fancy numbered programs or custom directions.
- He's quite picky about who he lets in - everyone must have a unique ID, no exceptions. And those with mysterious 'null' values are out of luck.
- He's also particular about his drinks, only accepting aliased query expressions (if they're invited to the party too) and turning down any drinks with parameters.

Now that you know our cursor pagination bouncer, let's learn how to manually create a paginator for an unforgettable night! 🤘💃

 ### Unleashing Your Inner Magician: Crafting a Pagination Sorcerer!

Ah, the thrill of manually creating a pagination spell! Imagine yourself as Merlin, conjuring up a bewitching potion from an array of enchanted items already residing in your memory's mystical cauldron. To cast this spell, you've got three powerful magic wands at your disposal: `Illuminate\Pagination\Paginator`, `Illuminate\Pagination\LengthAwarePaginator`, and `Illuminate\Pagination\CursorPaginator`. Choose wisely, my friend!

The `Paginator` and `CursorPaginator` wands are equipped with a cloak of invisibility - they're oblivious to the total number of potions (items) in your magical result set. This means they can't help you find the mystical index of the final page, but hey, who needs that when you've got a spell book full of other enchantments!

On the other hand, `LengthAwarePaginator` is the wise and well-informed member of our coven. It accepts almost all the same ingredients as the humble `Paginator`, but it also insists on knowing the grand total of potions in your result set - a crucial piece of information for those seeking the index of the last page.

In essence, the `Paginator` resembles the `simplePaginate` charm, the `CursorPaginator` corresponds to the `cursorPaginate` incantation, and the `LengthAwarePaginator` is like the versatile `paginate` spell.

> [!CAUTION]
> When crafting your pagination sorcerer, remember to "slice" the array of potions you pass to the cauldron. If you're struggling with this ancient PHP art, fear not! Consult the [array_slice](https://secure.php.net/manual/en/function.array-slice.php) function - it will guide you through the process like a benevolent spirit.

 ### Pagination URL Makeover: The Sequel to Cinderella's Glass Slipper! 👠

Well, hello there, coding mavericks! Ever found yourself in a pickle when your pagination links didn't quite match the Prince Charming of your application's URL structure? Fret not, because we've got the glass slipper solution for you! 👽

By design, our paginator plays matchmaker with the current URL. But, if you fancy a change and want to customize the URL used by the paginator while spinning your web of links, look no further than the paginator's `withPath` method! It's like introducing a secret handshake between your pagination and that perfect URL you've been dreaming of.

For instance, if you're longing for links in the style of `http://example.com/admin/users?page=N`, all you need to do is whisper `/admin/users` into the ears of our humble `withPath` method:

```php
use App\Models\User;

Route::get('/users', function () {
    $users = User::paginate(15); // Popcorn and butter ready? Let's dance! 🍿

    $users->withPath('/admin/users'); // Wink, wink! Told you it was a secret handshake.

    // ... And off to the ball we go!
});
```

Remember to appreciate the elegance and simplicity of this method, as it's just like a well-choreographed dance move that makes all the difference on the dance floor! 💃🕺

 Alrighty, let's get this pagination party started! You can spice up your link's query strings like a master chef adds herbs to a dish. To do that, use the `appends` method, which is Laravel's version of a secret ingredient. Here's how you can sprinkle some "sort=votes" magic on each pagination link:

```php
use App\Models\User;

Route::get('/users', function () {
    $users = User::paginate(15);

    // Time to season the links with 'sort=votes'
    $users->appends(['sort' => 'votes']);

    // ...
});
```

Now, if you want to go all-in and append every single query string value from your current request, well, my friend, you're going to love the `withQueryString()` method. It's like hitting the "add all ingredients" button on a spice rack:

```php
$users = User::paginate(15)->withQueryString();
```

And there you have it! Now, your pagination links will be seasoned to perfection, leaving no stone (or query string value) unturned. Happy traversing, dear coder! 🍴🚀

 Alrighty, buckle up, web explorers! If you find yourself yearning to slap a 'hash fragment' on those URLs spun by the Laravel paginator, fret not! We've got just the ticket for you – the enchanting `fragment` method!

Let's say you're hankering to tack on "#users" to the end of each link in your pagination party. Well, pull up a chair and get ready to code like a pro:

```php
$peeps = User::paginate(15); // Ordinary pagination

// But now... magic happens!
$peeps->fragment('users'); // Sprinkles the hash fragment goodness on your links!
```

Remember, it's like adding the cherry on top of a delicious cake (or the "hash" in a hash-brownie, if you will) that makes everything just a tad more appetizing. So go forth and conquer those URLs with this delightful little helper! 🎉🌈🚀

 Alright, let's unravel the pagination mystery!

First off, when you summon the mighty `paginate` sorcerer, a knight in shining armor of `Illuminate\Pagination\LengthAwarePaginator` shall appear. Dial up `simplePaginate`, and behold a humbler `Illuminate\Pagination\Paginator`. Lastly, conjure `cursorPaginate`, and an advanced warrior named `Illuminate\Pagination\CursorPaginator` will take the stage!

These chivalrous companions come armed with helpful methods that'll keep you informed about the battlefield, er... result set. After bagging your loot (results), you can showcase them in a medieval feast (HTML page) using [Blade](/docs/{{version}}/blade):

```blade
<div class="container">
    @foreach ($users as $user)
        Knight of the realm: {{ $user->name }}
    @endforeach
</div>

{{ $users->links() }}
```

The `links` method will forge links to the other realms in the result set. Each link comes already pre-armed with the `page` variable, so you can navigate between the lands with ease. And remember, the code generated by the `links` method is compatible with the [Tailwind CSS framework](https://tailwindcss.com).

<a name="adjusting-the-pagination-link-window"></a>
Now, if you fancy customizing your link window, adjust the `$pageName` and `$pathName` variables in the service provider's boot method:

```php
use Illuminate\Support\Facades\URL;
use Illuminate\Pagination\Paginator as BasePaginator;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        BasePaginator::defaultView('vendor.pagination.bootstrap-5');
        BasePaginator::renderOne(function (BasePaginator $paginator) {
            return $paginator->onEachSide(1)->render();
        });

        // Customize pagination URLs...
        if ($this->app->environment('local', 'testing')) {
            URL::defaults(['page' => 'results']);
        }
    }
}
```

By modifying the `URL::defaults` line, you can adjust the `page` query string variable. For instance, set it to "saga" for a more dramatic feel:

```php
URL::defaults(['page' => 'saga']);
```

Now, instead of saying page 2, you can shout "Chapter 2!" as you navigate through your saga!

 ### Taming the Pagination Beastie!

Ah, the thrill of navigating through a labyrinth of data pages! But have you ever wished that your dear paginator would offer a more personalized tour guide? Fear not, my friend! Laravel has come to the rescue with its `onEachSide` method, ready to be your Sherpa on this data journey.

Just like instructing Yoda on how many Dagobah swamps you'd like to explore at once, tell your paginator how many extra links it should sprinkle on either side of the current page within its cozy sliding window of links:

```blade
{{ $users->onEachSide(5)->links() }}
```

And voilà! You've just made your users' data exploration a walk in the park, not an adventure through the Sarlacc pit. Now, get out there and conquer those data pages like a true Jedi! (Just remember to keep the Force strong, and don't feed the Sarlacc...)

 ### JSONifying Paginated Results like a Boss in Laravel! 🚀🎧

Hey there, code slingers! 🤘 Let's dive into the world of sweet, sweet JSONification in Laravel. Yep, you read that right - we're making JSON as cool as Elon Musk's Tesla Roadster in space. 🚀🛰

The paginator classes in Laravel are not only suave but also implement the `Illuminate\Contracts\Support\Jsonable` Interface contract, giving you superpowers to convert your pagination results into JSON like a pro! 🦸‍♂️

To get started, let's pretend we're running a super-hip user management system. Here's how you can create a simple route that returns a paginated list of users in the JSON format:

```php
use App\Models\User;

Route::get('/users', function () {
    return User::paginate();
});
```

Now, when someone accesses `http://your-awesome-laravel-app.com/users`, they'll receive a JSON response that looks like this:

```json
{
   "total": 50,
   "current_page": 1,
   "per_page": 15,
   "last_page": 4,
   "data": [
        {
            // User details...
        },
        {
            // User details...
        }
   ]
}
```

You'll notice this JSON includes all sorts of useful meta information like the current page, total records, and more! The actual user data is conveniently stored under the `data` key in our JSON array. 🔑

Now that you know how to paginate results and convert them into JSON, let's kick it up a notch with customizing the pagination view. But for now, let's celebrate this victory with a round of high-fives! 🎉💪

 Alright, let's dive into the world of Laravel pagination - where numbers meet design and comedy! By default, our pagination links are as sleek as a Tailwind CSS-wearing model strutting down the Fashion Week runway. But what if you're more of a denim-and-flannel kind of coder? No worries, we got you covered!

To create your own uniquepagination experience, simply tell Laravel to "hold my beer" by calling the `links` method on a paginator instance and passing your view name as the first argument:

```blade
{{ $paginator->links('view.name') }}

<!-- And if you feel like sharing some extra secrets with your view... -->
{{ $paginator->links('view.name', ['foo' => 'bar']) }}
```

But here's the real party trick - customizing pagination views is as easy as ordering a pizza at 3 AM! Export them to your `resources/views/vendor` directory using the `vendor:publish` command:

```shell
php artisan vendor:publish --tag=laravel-pagination
```

This command will place the views in your application's `resources/views/vendor/pagination` directory, just like a delivery guy dropping off your late-night feast. The `tailwind.blade.php` file within this directory is where you can modify the pagination HTML to make it your own masterpiece!

Now, if you're feeling particularly artistic and want to designate a different file as the default pagination view, all you need to do is invite the paginator to a little dance called `boot`. Invoke the paginator's `defaultView` and `defaultSimpleView` methods within the `boot` method of your `AppServiceProvider` class:

```php
<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::defaultView('view-name');

        Paginator::defaultSimpleView('view-name');
    }
}
```

And that's a wrap! Now you can create and customize your own pagination views like a pro - or a comedian, we won't judge! Happy coding! 😄🥳

 ### Rockin' with Bootstrap! 🚀

Well, hello there, coding cowboy/cowgirl! Laravel has a secret weapon up its sleeve - a set of pagination views that would make even the most discerning CSS aficionado at [Bootstrap](https://getbootstrap.com/) do a double-take (or triple-tap on their phone).

Now, instead of settling for the default Tailwind views, why not shake things up with these fancy new boots? To get started, you'll need to call upon the paginator's `useBootstrapFour` or `useBootstrapFive` methods in the `boot` function of your trusty steed, `App\Providers\AppServiceProvider` class.

Here's a little example that should have you trotting toward success in no time:

```php
use Illuminate\Pagination\Paginator;

/**
 * Saddle up any application services!
 */
public function boot(): void
{
    Paginator::useBootstrapFive(); // Or Paginator::useBootstrapFour(), depending on your preference
    // And away we go! 🐎
}
```

Now, trot on over to [paginator instance methods](#paginator-instance-methods), and let's see if there's any more ways you can spruce up those pagination views like a real cowpoke! 😎

 Ahoy there, mateys! Let's dive into the magical world of Laravel Paginators, where every instance is brimming with swashbuckling secrets to help you navigate your data like a seasoned sea dog! 🌴

| Method               | What it does                                                                                                                         |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `$paginator->count()`   | Counts the number of treasure chests filled with items on the current page. Arrr!                                                    |
| `$paginator->currentPage()` | Tells ye where you are in the pirate's treasure map, matey. Are we on the Gold Coast or still at the Scrubby Shore? Find out here! |
| `$paginator->firstItem()` | Reveals the number of the first item ye be seeing, from one to however many there are!                                             |
| `$paginator->getOptions()`   | Gives ye a peek at the secret sauce behind this pirate's treasure hunt. What's in the recipe? Find out here!                          |
| `$paginator->getUrlRange($start, $end)`  | Creates a list of URLs pointing to every page in our booty-filled journey. Sail from one island to another without getting lost!   |
| `$paginator->hasPages()`    | Checks if there be enough treasure chests for multiple islands along the way. Will we have many stops or just a few? Find out here!      |
| `$paginator->hasMorePages()` | Checks if the sea captain has hidden more treasures for us to find! Keep digging, matey, there might be more gold ahead!               |
| `$paginator->items()`       | Gives ye access to all the goodies on the current island. Be prepared to be amazed by your treasure trove!                          |
| `$paginator->lastItem()`    | Reveals the number of the last item on the current island. How many golden doubloons did Captain Jack hoard here? Find out now!        |
| `$paginator->lastPage()`     | Tells ye about the last island we're headed to in this treasure hunt. What lies beyond the Gold Coast? Let's find out together!          |
| `$paginator->nextPageUrl()`  | Gives ye the coordinates for the next island on our map, matey. Set sail and explore further into the unknown!                         |
| `$paginator->onFirstPage()`  | Checks if we've just set foot on the first island in this treasure hunt. Are we at the Scrubby Shore or have we already plundered more? |
| `$paginator->onLastPage()`   | Tells ye if we're standing on the last island in our treasure hunt. Have we found all the treasure chests, or are there still hidden ones?  |
| `$paginator->perPage()`      | Sets how many treasure chests we see per island. Do we want to take a peek at everything, or keep some secrets for ourselves? Decide now!   |
| `$paginator->previousPageUrl()` | Gives ye the coordinates for the last island we visited in this treasure hunt. Time to retrace our steps and explore further back!        |
| `$paginator->total()`       | Calculates the total number of pirate's chests filled with gold and gems hidden across all islands. How much treasure have we discovered?   |
| `$paginator->url($page)`     | Gives ye the coordinates for a specific island in our treasure hunt. Want to visit a particular island? Ask and ye shall receive!                |
| `$paginator->getPageName()`  | Reveals the name of the variable used to store the current page number in the query string. How are we keeping track of where we be sailing?   |
| `$paginator->setPageName($name)` | Sets the name of the variable used to store the current page number in the query string. Want to change how we keep track of our journey? Set it here!    |
| `$paginator->through($callback)` | Transforms each treasure chest using a callback function, allowing ye to filter or customize your booty! Ye can add a lock and key if ye like!         |

 Alright, let's dive into the world of Laravel cursor paginators! These little powerhouses are chock-full of tricks up their sleeves to keep your data organized and your queries tidy. Here's a rundown of their cool party tricks:

1. **Countdown Clock (`$paginator->count()`)**: Ever wondered how many items you've got on the current page? Just ask this guy! It'll tell you with a cheerful "Tick-tock, [number] items!"

2. **Cursor Wrangler (`$paginator->cursor()`)**: Need to find out who's been hanging around your data store? This method will fetch the current cursor instance without any drama.

3. **Options, Options, Options (`$paginator->getOptions()`)**: Want to know how this paginator is set up? This method will spill all the beans and tell you exactly what options it's rocking.

4. **Page Patrol (`$paginator->hasPages()`)**: This one's like a security guard, checking if there are enough items to split into multiple pages. If the answer is yes, it'll nod and say "All clear, boss!" If not, you might get a stern "Nope, can't split that."

5. **More Items Please! (`$paginator->hasMorePages()`)**: This method is always on the lookout for more items in your data store. It'll say "Hold up, there's more where that came from!" if there are, and "Nada, nothing new here" if there aren't.

6. **Query String Storage (`$paginator->getCursorName()`)**: This one's like the secret service agent of the group, guarding the query string variable used to store the cursor.

7. **All You Can Eat Buffet (`$paginator->items()`)**: Need to grab the items for the current page? Think of it as a buffet line, and this method is your server, dishing out the goods.

8. **Next Stop! (`$paginator->nextCursor()`)**: Want to know who's in charge of the next set of items? This method will introduce you to the cursor instance responsible for that duty.

9. **Destination Unknown (`$paginator->nextPageUrl()`)**: Ever needed a mystery tour to the next page? This method will provide the URL, but shrouded in intrigue with a "Your next destination awaits!"

10. **First Impressions (`$paginator->onFirstPage()`)**: Need to find out if this paginator just arrived or has been here for a while? This method will confirm if it's on the first page or not.

11. **Last Call! (`$paginator->onLastPage()`)**: This one's like the bouncer at a club, telling you if the paginator has reached its last call or still got more pages left to go.

12. **Number of Items Per Page (`$paginator->perPage()`)**: If you're curious about how many items this paginator shows per page, just ask! It'll tell you without any fuss.

13. **Rewind (`$paginator->previousCursor()`)**: This method is like rewinding a tape, taking you back to the cursor instance for the previous set of items.

14. **Time Travel (`$paginator->previousPageUrl()`)**: Need to go back in time and visit the previous page? This method will provide the URL to make it happen.

15. **Cursor Renaming Service (`$paginator->setCursorName()`)**: Want to change the query string variable used to store the cursor? This method's your new best friend!

16. **Custom Cursor Destination (`$paginator->url($cursor)`)**: If you've got a specific cursor instance and need its URL, this method's got you covered! It'll whip up the URL for you in no time.