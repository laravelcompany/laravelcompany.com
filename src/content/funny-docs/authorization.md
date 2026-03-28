 # The Gatekeeper's Handbook (But Slightly More Entertaining)

## Entrance Exam: Welcome Aboard! 🚪🎓

- [The Grand Tour](#thegrandtour)
  - [Gatekeepers' HQ](#gatekeepershq)
  - [Guard Duty](#guardduty)
  - [Gate Responses](#gateresponses)
  - [Intercepting Intruders](#interceptingintruders)
  - [On-the-spot Decisions](#on-the-spotdecisions)
- [Building Your Fort (Policies)](#buildingyourfort)
    - [Blueprints for Building](#blueprintforbuilding)
    - [Registering Your Fort](#registeringyourfort)
- [Fort Design 101: Writing Policies](#fortdesign101)
    - [Policy Procedures](#policyprocedures)
    - [Policy Responses](#policyresponses)
    - [Model-less Methods](#model-lessmethods)
    - [Guest Passes](#guestpasses)
    - [Filter Bubbles](#filterbubbles)
- [Guard Duty: Granting Access Using Policies](#guarddutyusingpolicies)
    - [Through the User Castle](#throughtheusercastle)
    - [Via the Gate Facade](#viathegatefacade)
    - [Through Middle Earth (Middleware)](#throughthemiddleearth)
    - [Via Blade Templates](#viabladetemplates)
    - [Passing Extra Info](#passingextrainfo)
- [Authorization & Inertia: Making the System Work with Magic Spells (A.I.)](#authorizationandinertia)

<a name="thegrandtour"></a>

Welcome to Laravel's Gatekeeper Academy! Here you'll learn the art of guarding and granting access to your application's resources like a pro. Let's start our journey together by exploring our headquarters, guard duty, gate responses, intercepting intruders, and on-the-spot decisions.

<a name="gatekeepershq"></a>

### Gatekeepers' HQ: The Authorization System

Discover the power of Laravel's authorization system by learning about gates, policies, and more! We'll help you secure your castle (application) and keep unwanted visitors at bay.

<a name="guardduty"></a>

### Guard Duty: The First Line of Defense

Learn the basics of Laravel's authorization system by understanding gates, gate responses, intercepting gate checks, and inline authorization. Be prepared to deal with any suspicious characters attempting to enter your fort!

<a name="gateresponses"></a>

#### Gate Responses: You Decide the Outcome

Decide whether a user should be granted access or not by providing appropriate responses when checking gates. Let's find out how to respond wisely and keep the right people in, while keeping others out!

<a name="interceptingintruders"></a>

#### Intercepting Intruders: Catch 'Em All!

Learn how to intercept gate checks to ensure every request is thoroughly vetted. With this skill, you'll have the power to prevent unwanted visitors from entering your fort and causing mischief!

<a name="on-the-spotdecisions"></a>

#### On-the-Spot Decisions: Make Quick Judgments

Quickly decide who gets access to what resources by learning how to make inline authorization decisions. With this skill, you'll be able to grant or deny access without ever leaving your throne room!

<a name="buildingyourfort"></a>

### Building Your Fort (Policies)

#### Blueprints for Building: Generating Policies

Discover the process of generating policies in Laravel. This will help you create a strong and secure fortress to protect your application's resources!

<a name="registeringyourfort"></a>

#### Registering Your Fort: Making it Official

Learn how to register your newly-built policies so they can start protecting your application's resources. Let's make sure that no unauthorized user gains access to your fort!

<a name="fortdesign101"></a>

### Fort Design 101: Writing Policies

#### Policy Procedures: The Rules of the Game

Learn the ins and outs of policy procedures, including policy methods, responses, model-less methods, guest users, and filters. With this knowledge, you'll be able to design a fort that's both strong and secure!

<a name="policyprocedures"></a>

#### Policy Methods: The Policy-makers

Understand how policy methods work to grant or deny access to specific resources in your application. Let's learn the art of creating effective policies!

<a name="policyresponses"></a>

#### Policy Responses: Giving the Right Answers

Learn how to provide appropriate responses when checking policy methods. With this skill, you'll be able to make informed decisions and keep your fort secure!

<a name="model-lessmethods"></a>

#### Model-less Methods: No Models Needed Here

Discover how to write policy methods without the need for a model, allowing you to create flexible and efficient policies that can handle various situations.

<a name="guestpasses"></a>

#### Guest Passes: For Visitors Only

Learn how to handle guest users in your policies, ensuring they're only granted access to the resources intended for them. With this skill, you'll be able to welcome visitors while keeping unwanted intruders at bay!

<a name="filterbubbles"></a>

#### Filter Bubbles: Keeping Things Separate

Learn how to use policy filters to ensure that certain policies are only checked for specific resources. With this skill, you'll be able to create a more organized and secure fortress!

<a name="guarddutyusingpolicies"></a>

### Guard Duty: Granting Access Using Policies

#### Through the User Castle: Via-the-User-Model

Learn how to grant access using policies through the user model. This technique allows you to control access based on user roles, permissions, and other factors!

<a name="viathegatefacade"></a>

#### Via the Gate Facade: A One-Stop Shop for Access Checks

Discover how to use Laravel's Gate facade to check access to resources quickly and efficiently. This skill will make you a master of managing who gets access to what!

<a name="throughthemiddleearth"></a>

#### Through Middle Earth (Middleware): A Journey Within the Application

Learn how to use middleware to grant access using policies. With this technique, you can control access at various points within your application and create a more secure fortress!

<a name="viabladetemplates"></a>

#### Via Blade Templates: Making Access Checks Visible

Discover how to make access checks visible within your application using Laravel's Blade templates. This skill will help you ensure that users only see what they're allowed to!

<a name="passingextrainfo"></a>

#### Supplying Additional Context: Keep It Interesting

Learn how to supply additional context when checking access using policies, allowing for more precise and flexible decisions. With this skill, you'll be able to create a more dynamic fortress that adapts to various situations!

<a name="authorizationandinertia"></a>

### Authorization & Inertia: Making the System Work with Magic Spells (A.I.)

Combine Laravel's authorization system with Inertia.js, a progressive JavaScript framework for building modern web applications, to create a powerful and efficient system that adapts to your needs. Let's make magic happen!

 ## Welcome to the Laravel Playground! 🚀🎢

While we've got your login sorted (because let's face it, who doesn't love a good password dance?), we also realize that just because you can log in, doesn't mean you should be able to delete all the kitten photos on our site. Enter Laravel's authorization features - your superhero cape for managing user permissions!

Imagine gates and policies as the traffic cops of your application. While routes tell your users where to go and controllers handle what happens once they get there, these two are in charge of making sure the right users are even allowed on the dance floor (or in this case, accessing certain resources).

Gates, our closure-based, no-nonsense traffic cops, are perfect for quick decisions like letting in only verified users to the admin dashboard. On the other hand, Policies, with their model-specific logic, are like the more experienced cops who know the ins and outs of each resource and can make nuanced decisions based on that.

Don't worry about picking a side when building your application. Most apps are a mix of gate-and policy-powered justice, and that's cool with us! Gates shine in situations unrelated to models or resources, while policies are the go-to for authorizing actions tied to specific ones.

Now buckle up as we dive into gates first, then explore the world of policies! 🛫🚀

<a name="gates"></a>

 ### Portal Patrol: Guarding Your Laravel Realm! 🛡️🚀

Ahoy there, brave coder! Welcome to the enchanted land of Laravel Gatekeeping. Yes, you heard it right! Today we're going to embark on a thrilling adventure into the mystical world of Gates - the unsung heroes of application security. 🏰🔓

<a name="introduction"></a>
#### Introduction 🤓

First things first, let's clear up any confusion: Gates aren't your garden variety turnstiles or castle drawbridges (although they can feel like it sometimes when you're fighting off those pesky unauthorized users!). In Laravel land, Gates are policies that define the rules about who gets to access what. 🕶️👮‍♂️

<a name="writing-gates"></a>
#### Writing Gates 🖊️

Writing a Gate in Laravel is like penning your very own epic poem of access control. Here's the lowdown on how to craft one:

1. Create a new policy for whatever model you want to protect (e.g., `PostPolicy` for posts, or `UserPolicy` for users). You can do this using Artisan:

```bash
php artisan make:policy PostPolicy
```

2. In the newly created policy file, define your custom Gate using the `gate` method:

```php
namespace App\Policies;

use Illuminate\Auth\Access\Gate as Gate;
use App\Models\User;
use App\Models\Post;

class PostPolicy extends Gateway
{
    protected $model = Post::class;

    public function __construct()
    {
        $this->registerPolicies();
    }

    public function edit(User $user, Post $post)
    {
        $this->gate(function () use ($user, $post) {
            return $user->id === $post->user_id; // Only allow the post's owner to edit it.
        });
    }
}
```

3. Register your newly created Gate with the `Gate` instance:

```php
namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as AuthServiceProvider;

class AuthServiceProvider extends AuthServiceProvider
{
    protected $policies = [
        Post::class => PostPolicy::class, // Register our new policy here.
    ];

    public function boot()
    {
        parent::boot();

        Gate::before(function ($user, $ability) {
            if ($user->isAdmin()) {
                return true; // If the user is an admin, grant them access to everything.
            }
        });
    }
}
```

And voila! You've just written your very own custom Gate that ensures only the post's owner can edit it (unless they happen to be an admin, of course). 🤩✨

<a name="conclusion"></a>
#### Conclusion 🎉

That's a wrap! Now you can keep your Laravel application secure and your users happy by enforcing strict access controls with nifty Gates. Just remember, in the battle against unauthorized intruders, having the right Gate policy is like carrying a magic sword on your quest for an unbreakable fortress. So go forth, brave coder! Guard your realm with pride and may your code always be secure! 🦸‍♂️🏰🛡️🚀

 Alrighty then! Let's dive into the world of Laravel's security features, shall we? Gates are akin to those pesky metal detectors at airport security checkpoints, but instead of stopping terrorists (or that guy who insists on bringing a banana on the plane), they help us determine if a user is authorized to perform certain actions.

Now, while gates are fun to play with when learning the ropes of Laravel's authorization, it's important to remember that for serious apps, you should use [policies](#creating-policies) to keep your authorization rules nice and tidy.

Gates are just fancy closures (think: anonymous functions) that decide whether a user is allowed to do a specific thingamabob. These gates are usually defined in the `boot` method of the `AppServiceProvider` class, using the `Gate` facade, which is a bit like asking security for permission to board the plane (or update a post in our case).

Here's an example of defining a gate that lets a user update a specific `Post` model. It checks if the user's ID matches the ID of the post's creator:

```php
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

/**
 * The part of the code where magic happens before the magic happens.
 */
public function boot(): void
{
    Gate::define('update-post', function (User $user, Post $post) {
        return $user->id === $post->user_id;
    });
}
```

Just like controllers, gates can also be defined using a class callback array:

```php
use App\Policies\PostPolicy;
use Illuminate\Support\Facades\Gate;

/**
 * The part of the code where magic happens before the magic happens.
 */
public function boot(): void
{
    Gate::define('update-post', [PostPolicy::class, 'update']);
}
```

So there you have it! Gates are a simple and effective way to keep unwanted users out of your application's sensitive areas (or, in our case, prevent them from editing other people's posts). Happy securing!

 ### Unleashing the Power of Permissions!

Who needs a cape when you can control your app like a superhero with Laravel'sAuthorization Aid Kit (AAK)! 🚀

To authorize an action using gates, simply summon the `Gate` facade's mighty powers: `allows` or `denies`. Don't worry about bringing the currently authenticated user as a sidekick; Laravel takes care of slinging them into the gate closure for you!

```php
<?php
namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate; // Call it your magic wand!

class PostController extends Controller
{
    /**
     * Update the given post.
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        if (! Gate::allows('update-post', $post)) { // Check permissions
            abort(403); // Permission denied! Timeout!
        }

        // Update the post...

        return redirect('/posts');
    }
}
```

Should you wish to find out if a user other than the current one is allowed to perform an action, you can use the `forUser` method:

```php
if (Gate::forUser($user)->allows('update-post', $post)) { // User can update post!
    // The user can update the post...
}

if (Gate::forUser($user)->denies('update-post', $post)) { // User can't touch this post!
    // The user can't update the post...
}
```

With great power comes the need to manage multiple actions at once. Fear not, for AAK grants you the `any` and `none` methods:

```php
if (Gate::any(['update-post', 'delete-post'], $post)) { // User can rule over this post!
    // The user can update or delete the post...
}

if (Gate::none(['update-post', 'delete-post'], $post)) { // User is a humble subject of this post!
    // The user can't update or delete the post...
}
```

Remember, with great power comes great responsibility. Use these powers wisely and your app shall be secure! 🦸‍♂️🦸‍♀️ 🛡️🔒

 Ahoy, shipmates! In the grand voyage of Laravel land, you may find yourself in need of a trusty compass to guide your user's actions. That's where our friendly `Gate` facade comes into play!

This swashbuckling helper will assist you in checking whether your crew member (a.k.a the user) has permission to perform a certain action on the high seas, and if not, it'll toss them overboard with a good old-fashioned `Illuminate\Auth\Access\AuthorizationException`.

But fear not! These seafaring scallywags will be turned into 403 HTTP responses by Laravel, which will leave your user feeling bewildered but unharmed.

Here's a taste of how you might use this magical gate:

```php
Gate::authorize('update-post', $post);

// Arrgh! The action be granted...
```

Now, if ye want to provide some extra context for the Gate to consider when checking permissions, ye can do so by using the `definePolicy` method:

<a name="gates-defining-policies"></a>

```php
use Illuminate\Auth\Access\Gate as Gate;

// In your provider...

public function boot(Gate $gate) {
    $this->registerPolicies($gate);

    // Define the custom policy for post updates
    $gate->define('update-post', function ($user, $post) {
        // Your logic here to determine if the user is allowed to update the post
    });
}
```

Now, the Gate will take a closer look at who's asking for the permission (the user), what they want to do (update a post), and make an informed decision based on your custom policy.

So hoist the mainsail, mateys! With `Gate`, you can steer your Laravel ship with confidence, knowing that unauthorized actions will be kept at bay. Yarr!

 Alrighty, let's get this gate party started! 🎊

In our Laravel realm, we've got a posse of gate methods (`allows`, `denies`, `check`, `any`, `none`, `authorize`, `can`, `cannot`) that are just hankering to keep your application secure. And for added flair, there's even some Blade directives (`@can`, `@cannot`, `@canany`) to help you spice up those views! 🥳

But here's the real kicker: these gate wranglers can take an array as their second argument. Each element in this array is like a cowboy who rides into town with some extra context that helps our gates make more informed decisions about authorization.

```php
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

Gate::define('create-post', function (User $user, Category $category, bool $pinned) {
    if (! $user->canPublishToGroup($category->group)) {
        return false;
    } elseif ($pinned && ! $user->canPinPosts()) {
        return false;
    }

    return true;
});

if (Gate::check('create-post', [$category, $pinned])) {
    // Cowboy up! The user can create the post... 🤠
}
```

Now, don't be a horse and bolt out of here without checking out those gate responses! 🐴😉

 Alrighty then! Let's dive into the exciting world of Gate Responses, where gates aren't just open or closed, but can now serve you a delightful cocktail of truth and sass! 🍹

Until now, we've been hanging out at the Saloon doors, only opening them yes-or-no style. But hey, who wants a one-liner response when you can get a full-blown monologue? To serve up some extra flavor with your authorization, whip out an `Illuminate\Auth\Access\Response` from your very own gate saloon:

```php
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;

Gate::define('edit-settings', function (User $user) {
    if ($user->isAdmin) {
        return Response::allow(); // You're the king of the saloon, pal!
    } else {
        return Response::deny('You must be an administrator. And no, wearing a fake moustache doesn't count.');
    }
});
```

Even when your gate throws down a fancy authorization response, remember that the `Gate::allows` method will still be the humble yes-man, returning simple boolean values; but you can always round up the posse using the `Gate::inspect` method to fetch the full, juicy authorization response:

```php
$response = Gate::inspect('edit-settings');

if ($response->allowed()) {
    // Saddle up! The action's a go!
} else {
    echo $response->message(); // "You must be an administrator. And no, wearing a fake moustache doesn't count."
}
```

Now when you use the `Gate::authorize` method (which throws an `AuthorizationException` if the action ain't authorized), the error message from your authorization response will be piped straight to your HTTP response:

```php
Gate::authorize('edit-settings');

// The action's a go! But remember, only the big bosses get to play in here. 👨‍💼
```

Now that we've got our taste buds tingling with the idea of custom gate responses, let's get cookin' and add some zest to your application! 🍔 🌮 🥘

 Alright, buckle up, coding cowboys and codelettes! We're about to dive into the wild west of customizing your HTTP response status like a pro, Laravel style.

First off, let's talk about when you try to pull a Fast Draw on an action but get denied by the Gate (yep, just like in the old west). By default, it returns a `403` – the Sheriff's response for Forbidden. But sometimes, you might want to serve up a different flavor of denial. That's where our trusty friend, the `Illuminate\Auth\Access\Response` class, comes into play!

To return an alternative HTTP status code when a check fails, you can customize the HTTP status code like a seasoned saloon barkeep using the `denyWithStatus` static constructor. Here's how you'd do it:

```php
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;

// Step 1: Import whatcha need
// Step 2: Define the Gate (it's like setting up a saloon rule)
Gate::define('edit-settings', function (User $user) {
    // Step 3: Check if the user is an admin
    return $user->isAdmin
        ? Response::allow()  // If so, let 'em through with a green light
        : Response::denyWithStatus(404);   // If not, serve up a 404 – lost in cyberspace, they said!
});
```

Since hiding resources like a bandit behind a `404` response is as common as a cowboy hat in the wild west of web apps, we've got you covered with the handy-dandy `denyAsNotFound` method:

```php
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;

// Just as before...

// But now, all you gotta do is this:
Gate::define('edit-settings', function (User $user) {
    // ...the same check...
    return $user->isAdmin
        ? Response::allow()  // If so, let 'em through with a green light
        : Response::denyAsNotFound();   // If not, hide it like a bandit behind a 404!
});
```

Yee-haw! Now you know how to customize your HTTP response status when your cowboy (or cowgirl) just can't get their way with the Gate. Happy coding, partners!

 Alrighty, let's dive into Laravel's Gate Check Interception! Ever found yourself in a situation where you wanted to give your favorite user free reign over the kingdom (er, website)? Well, fear not, for the `before` method is here to save the day!

```php
use App\Models\User;
use Illuminate\Support\Facades\Gate;

// This code sets up a superhero-like pass for admins!
Gate::before(function (User $user) {
    if ($user->isAdministrator()) {
        return true; // Boom, access granted!
    }
});
```

Now, your administrators can roam free and conquer the digital realm with no barriers in sight! But wait, there's more! If you want to add a little "post-game" flair to your authorization checks (because who doesn't love post-game cutscenes?), you can use the `after` method.

```php
use App\Models\User;

Gate::after(function (User $user) {
    if ($user->isAdministrator()) {
        return true; // If you're an admin, you can do whatever you want!
    }
});
```

Values returned by `after` closures won't override the original authorization check results unless the gate or policy returns a null value. This means your admins will still have to follow some basic rules (sorry guys, no server-destroying antics allowed!).

Now go forth and conquer the Laravel realm with your newfound superpowers! 🦸‍♂️💪💫

 ### Boss Mode: The Unofficial Laravel User Guide for Power Users! 🚀💼

Ever found yourself in a pickle, needing to check if your currently logged-in superuser has the cosmic clearance to execute a space mission (er, action) without writing a dedicated gate keeper? Well buckle up, champ, because Laravel's got your back with its nifty `Inline Authorization` feature! 🤓

Just like sneaking past security in a sci-fi blockbuster, you can perform these undercover checks using the `Gate::allowIf` and `Gate::denyIf` methods. No need to worry about any defined "before" or "after" authorization shenanigans, as these secret ops happen without triggering a red alert! 🚨

```php
use App\Models\User;
use Illuminate\Support\Facades\Gate;

// Giving the user boss-level clearance if they're an administrator.
Gate::allowIf(fn (User $user) => $user->isAdministrator());

// Banning the user from performing actions if they've been naughty.
Gate::denyIf(fn (User $user) => $user->banned());
```

If our space explorer gets caught red-handed trying to perform an unauthorized action or if no user is currently authenticated, Laravel will throw a friendly `Illuminate\Auth\Access\AuthorizationException` exception. No need to worry about being blasted into oblivion by the exception handler - it'll just convert the exception into a polite 403 HTTP response instead! 🤝🌐

<a name="creating-policies"></a>
Now, if you're ready to graduate from training wheels and start writing your own authorization policies, be sure to check out our next tutorial: "How to Create Custom Authorization Policies" - where we'll teach you how to become a true gatekeeper of the universe! 🚀🌟

 Alright, let's talk about creating those all-important guardians of your Laravel kingdom - policies! Imagine them as knights in shining armor, but instead of slaying dragons, they keep the riffraff out of your precious data.

<a name="generating-policies"></a>

### Generating Policies

To create a policy, you'll need a freshly-baked `Policy` class in your `app/Policies` directory. Give it the same name as the model it's gonna guard, but append "Policy" to it, like so:

```php
php artisan make:policy UserPolicy
```

Now, go grab a mead (or something stronger, if you're feeling particularly chivalrous) because we're about to write some code that'll make your knights shine! Open the newly created `UserPolicy.php` and take a gander at its contents:

```php
namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Model  $model
     * @return mixed
     */
    public function view(User $user, Model $model)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Model  $model
     * @return mixed
     */
    public function update(User $user, Model $model)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Model  $model
     * @return mixed
     */
    public function delete(User $user, Model $model)
    {
        //
    }
}
```

Here's your chance to show off your coding prowess (or lack thereof). Each of these methods represents a different action that can be taken on the model. If you want your knight-policy to allow certain actions, simply return `true`. If you want them to deny access, return `false`.

Now, go forth and write some policies! Remember, a well-guarded kingdom is a happy kingdom! 🏰🛡️

 ### Unleashing the Policy Prowess!

Policies, my dear friend, are the superheroes of your application's security scene. They're the unsung heroes that organize all that crucial authorization business around a specific model or resource. Let's say you've got a blog app (because who doesn't these days?), with an `App\Models\Post` model, and you'd need a `App\Policies\PostPolicy` to handle the permissions for activities like creating or updating posts - think of it as your very own Captain Policy!

So how do we create one of these powerhouse classes? With the `make:policy` Artisan command, of course! This command will whisk you up a policy class and drop it off in the `app/Policies` directory. But don't worry if that folder isn't there yet – Laravel, ever the considerate host, will create it for you without even breaking a sweat:

```shell
php artisan make:policy PostPolicy
```

But wait! You want more than an empty class? Maybe you're craving some example policy methods to help you view, create, update, and delete the resource like a pro. Well, there's a `--model` option for that! Just include it when running the command:

```shell
php artisan make:policy PostPolicy --model=Post
```

Now that you've got your very own Policy Policy (okay, maybe not, but it sounds cool), it's time to get busy and assign those policies to your guards! 🦸‍♂️ 🎉

 Alright, buckle up, code cowboys and code cowgirls! It's time for a lasso-tight dive into Laravel Policy registration.

First things first, you might be wondering: "What in tarnation are Policies?" Well, Partner, they're your trusty sidekicks that help manage access control on your application resources. They're like the sheriffs of your app, keeping a watchful eye and ensuring no unauthorized cowpokes wander into sensitive areas.

Now, if you've got yourself a Policy ready to ride, you'll want to register it in Laravel. Here's how to wrangle that bronco:

<a name="policy-registration"></a>

#### Registering a Policy

To saddle up a new Policy, you'll need to create a new class in the `app/Policies` directory. Give it a name reflecting the resource it will protect, for example, `PostPolicy`. Once that's done, apply the `\Illuminate\Auth\Access\AuthorizationPolicy` interface to your newly-minted Policy.

```php
namespace App\Policies;

use Illuminate\Auth\Access\AuthorizationPolicy as AuthorizationPolicy;
use Illuminate\Auth\Access\HandlesAuthorization as HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class PostPolicy extends AuthorizationPolicy {
    use HandlesAuthorization;
}
```

Now, you've got yourself a spiffy new Policy! But wait – how does your app know to call this steed when it needs to check permissions? That brings us to...

<a name="policy-discover"></a>

#### Discovering Policies

Laravel automatically discovers any Policy classes located in the `app/Policies` directory. So, as long as your Policy's namespace matches that of its corresponding model (or resource), it will be detected and ready for action!

```php
// In the Post model...
public function newFactory(ModelFactory $factory) {
    return $factory->state(function ($attributes) {
        // ...
    });
}

protected function newEloquentBuilder($query) {
    return $query->whereHas('policy', function ($query) {
        $query->where('user_id', Auth::id());
    });
}
```

In the example above, when you access a Post, Laravel will automatically check if the authenticated user has permission by calling the `checkAccess` method on your PostPolicy.

And there you have it! You've tamed a Policy, saddled it up, and are now ready to wrangle the wild west of app resources with unmatched access control. Just remember to keep those Policies well-fed and happy – they're vital components in keeping your code corral secure!

 Alrighty, let's get down to business! In the Laravel world, we don't just stumble upon policies like Indiana Jones discovering ancient artifacts. Nope, our policies are as organized as a librarian's bookshelf (and almost as exciting). By default, Laravel magically discovers policies, but only if your models and their respective policies follow the naming conventions of a 90s sitcom.

Here's the deal: Your models should hang out in `app/Models` while their policies chill in `app/Policies`. If you're wondering why Laravel checks both directories, it's like having your best friend check your fridge when you're out – just in case you left that secret stash of pizza hidden somewhere.

But wait, there's more! The policy name should match the model name and have a "Policy" suffix. So, if you've got a `User` model, its buddy is named `UserPolicy`. It's like they're BFFs with matching names but different personalities (one controls access, the other... doesn't).

Now, what if you want to write your own policy discovery logic? Well, strap on those coding goggles and get ready for a wild ride! You can register a custom policy discovery callback using the `Gate::guessPolicyNamesUsing` method. This method is like inviting that friend who always knows where everything is to come over and help you find your missing policies.

Remember, this method should be called from the `boot` method of your application's `AppServiceProvider`. So, it's a bit like asking your wise old grandma for advice – she's always been around and knows a thing or two!

```php
use Illuminate\Support\Facades\Gate;

Gate::guessPolicyNamesUsing(function (string $modelClass) {
    // Here you can write some custom logic to return the name of the policy class for the given model...
});
```

And there you have it! Your journey into policy discovery is now complete. You're a Laravel detective, solving mysteries left and right, one policy at a time. Keep up the good work, Sherlock!

 Title: Unleashing the Power of Gatekeeping in Laravel Land

In the grand bash that is your Laravel application, you might find yourself wanting to play bouncer and control who gets access to certain areas – we're talking about models, my friend! Fret not, because we've got a couple of ways for you to become the gatekeeper extraordinaire.

First up, let's get our hands dirty with good ol' fashioned manual registration:

```php
// Step 1: Import your order models and policies
use App\Models\Order;
use App\Policies\OrderPolicy;
use Illuminate\Support\Facades\Gate; // The Gatekeepers of the digital realm!

// Step 2: Boot up in your application's AppServiceProvider
public function boot(): void
{
    // Register our Order model and its trusted policy
    Gate::policy(Order::class, OrderPolicy::class);
}
```

Now, if you find yourself getting a little too carried away with the power, here's an alternative approach for the more laid-back Laravel dev:

```php
<?php

// Step 1: Import your policies and model classes
use App\Policies\OrderPolicy;
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Model;

// Step 2: Slap on the UsePolicy attribute on your model class to let Laravel know about the policy in charge
#[UsePolicy(OrderPolicy::class)] // In other words, "This party's policy is handled by OrderPolicy!"
class Order extends Model
{
    // Your usual model stuff goes here!
}
```

And just like that, you've added another layer of security to your Laravel app. Now go forth and gatekeep with pride!

 Ahoy there, coders! Ever felt like you needed a bouncer for your application's routes? Well, Laravel has just the thing - Policies! 🤘🌐

<a name="what-are-policies"></a>
### What are Policies? 🕵️‍♂️

Policies are a way to handle authorization logic for your application's resources. They act like bouncers at the entrance of your routes, checking if someone has the right credentials (permissions) to access the resource.

<a name="defining-policies"></a>
### Defining Policies 📝

To define a policy for a model, create a new PHP file in the `app/Policies` directory with the same name as the model, followed by the word "Policy." For example, if you want to create a policy for the `Post` model, your file would be named `PostPolicy.php`.

<a name="writing-policy-methods"></a>
### Writing Policy Methods 💻

Now, let's write some code! Inside each policy, you can define methods that check whether a given user has the right permissions to perform certain actions on the resource. For instance:

```php
// app/Policies/PostPolicy.php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\User;
use App\Post;

class PostPolicy
{
    use HandlesAuthorization;

    public function view(User $user, Post $post)
    {
        // Check if the user has permission to view the post.
        return $user->id === $post->user_id || $user->hasRole('admin');
    }
}
```

In this example, we've created a `view()` method for our `PostPolicy`. This method checks if either the user who owns the post or an admin can view it. 🕵️‍♂️👷‍♂️

<a name="applying-policies"></a>
### Applying Policies 🛡️

To apply a policy to a route, you'll use the `authorize` method provided by Laravel. Here's an example:

```php
// routes/web.php

use Illuminate\Support\Facades\Auth;
use App\Http\Policies\PostPolicy;

Route::get('/posts/{post}', function (Post $post) {
    // Ensure the user can view the post...
    $this->authorize(PostPolicy::class, $post);

    return view('posts.show', ['post' => $post]);
});
```

And there you have it! Now, only users who are either the owner of a post or an admin can access the `/posts/{post}` route. 🛡️👨‍💼

<a name="policy-events"></a>
### Policy Events 🚀

Laravel also allows you to hook into various events that occur during the authorization process, such as `gate` and `check`. This lets you perform additional actions when a policy is checked or gate is evaluated. For more information on these events, check out the [official documentation](https://laravel.com/docs/8.x/authorization#events).

That's all, folks! With Policies in Laravel, you can now control who enters your application's routes like a boss! 🎉🎟️

 Alrighty, let's get this policy party started! First things first, once you've registered your policy class (think RSVPing for a swanky bash), it's time to dance the night away with some groovy methods for each action it governs. Let's boogie down and write an `update` shindig on our `PostPolicy`, which checks if a certain `App\Models\User` can update a specific `App\Models\Post` like they're editing a high school yearbook (just minus the questionable fashion choices).

The `update` dance will take two arguments: a suave `User` and a spiffy `Post` instance. The aim of the game here is to return either a resounding "Yes, ma'am!" or a firm "No can do" based on whether our user has the authority to update said `Post`. So without further ado, let's make sure our user's ID matches the `user_id` on the post:

```php
<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;

class PostPolicy
{
    /**
     * Check if this post can be updated by the user. Ain't no party like a match-ID party!
     */
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id; // If their IDs are as one, let the party begin!
    }
}
```

Feel free to keep adding more methods for different actions like a `view`, `delete`, or even a `redecorate` (because who doesn't want to redesign a post that's been looking a bit '70s lately?). Just remember, your policy methods can be as creative as you like!

If you've used the `--model` option when generating your policy via the Artisan console, it'll already have moves for `viewAny`, `view`, `create`, `update`, `delete`, `restore`, and `forceDelete` actions.

> [!NOTE]
> All policies are handled by Laravel's posh service container (think of it as the DJ spinning the tunes), so you can easily type-hint any necessary dependencies in the policy's constructor to have them magically appear like an enchanted disco ball.

<a name="policy-responses"></a>

 Alrighty then! Let's dive into the world of Policy Responses, where instead of just a simple "Yes, ma'am!" or "No, sir!", we can now return something more... detailed. And by detailed, I mean a response that includes an error message.

So, how do we pull this off? By summoning the mighty `Illuminate\Auth\Access\Response` instance in your policy method! Here's a little dance we call "Update Post":

```php
use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\Response;

/**
 * Determine if this post can be updated by the user, but with a twist!
 */
public function update(User $user, Post $post): Response
{
    if ($user->id === $post->user_id) {
        return Response::allow(); // "You're the boss, take control!"
    } else {
        return Response::deny('Whoa there partner! You don't own this post.'); // "Not on my watch, cowboy."
    }
}
```

Now when you're returning an authorization response from your policy, remember that the `Gate::allows` method will still do its thing and return a simple boolean value. But if you're feeling curious or just plain nosey (and who among us isn't?), you can use the `Gate::inspect` method to get the full authorization response returned by the gate:

```php
use Illuminate\Support\Facades\Gate;

$response = Gate::inspect('update', $post);

if ($response->allowed()) {
    // The action is authorized... So, go ahead and dance!
} else {
    echo $response->message(); // "You're on the wrong rodeo, pal."
}
```

And finally, when using the `Gate::authorize` method, which throws an `AuthorizationException` if the action is not authorized, the error message provided by the authorization response will be automatically broadcasted to the HTTP response:

```php
Gate::authorize('update', $post);

// The action is authorized... So, let's dance!
```

Just remember to keep your cowboy boots shined up and your spurs jingling as you navigate through the wild west of authorization responses! Yee-haw!

 Alrighty, let's dive into the world of Laravel policy customization - where your code isn't just functional, it's also got a sense of humor! 🤖 Laughter aside, when an action goes awry due to a policy method denial, a friendly "Sorry, you can't do that!" (aka `403` HTTP response) is the default. But hey, sometimes we need to spice things up, right? That's where the `denyWithStatus` comes in, letting you return an alternative status code like a boss:

```php
use Illuminate\Auth\Access\Response;

// Imagine this in your favorite superhero movie...
public function saveTheWorld(Hero $hero, AlienInvasion $alienInvasion): Response
{
    if ($hero->hasSuperPowers()) {
        return Response::allow(); // "You're a hero! Go save the world!"
    } else {
        return Response::denyWithStatus(412 - PreconditionFailed); // "Hey, even superheroes need to pass their exams first!"
    }
}
```

Since hiding resources is as common in web applications as a well-timed one-liner in action movies, Laravel offers the `denyAsNotFound` method for your convenience:

```php
use Illuminate\Auth\Access\Response;

// Back to our superhero story...
public function findMissingSuperHero(User $user): Response
{
    // ...snip...
    if (!$heroFound) {
        return Response::denyAsNotFound(); // "Uh-oh, looks like that hero's missing in action!"
    } else {
        return Response::allow(); // "Got 'em! Let's save the day."
    }
}
```

And there you have it! Now your Laravel policies aren't just superpowered - they're downright comedic. 😉

 ### The Lone Ranger of Authentication

Sometimes, in the wild wild web, a policy method finds itself saddled up with just one companion - the currently authenticated user. This situation often arises when dealing with the `create` actions, like corralling a posse of posts for your digital barn. If you're running a blog and want to ensure only 'writers' can create posts without any fuss, your policy method should be as lean and mean as a coyote, requiring only an instance of User:

```php
/**
 * Decide if Django's long-lost cousin can gallop into our blogging corral.
 */
public function create(User $userRodeInOnAWhiteHorse): bool
{
    return $userRodeInOnAWhiteHorse->role === 'writer';
}
```

<a name="guest-users"></a>
*Guest Users*

In case you're wondering, what about those unruly cowboys who haven't signed up yet? Well, don't worry! Just add a method to deal with them:

```php
/**
 * Check if the wild west is safe for an unregistered stranger.
 */
public function guestCanCreatePosts(): bool
{
    return false; // By default, guests can't create posts, but you can change this as per your needs!
}
```

Now, saddle up and ride into the sunset with these methods that keep your Laravel policies a well-behaved posse, ready to wrangle even the most unruly users.

 ### The Ghostly Bypass! 👻

In the Laravel universe, our default security system is as tight as a drum, but only for authenticated users. You see, if a request floats in from the ether without proper credentials, our gates and policies are programmed to say "Nope, not happening!" 🙅‍♂️

But fear not! If you want your ghostly guests to sneak through the gates, all you gotta do is sprinkle some "optional" magic on those user arguments! ✨

Here's a little spell:

```php
<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;

class PostPolicy
{
    /**
     * Determine if the given post can be updated by the user.
     */
    public function update(?User $user_who_might_be_a_ghost, Post $post): bool
    {
        return $user_who_might_be_a_ghost?->id === $post->user_id;
    }
}
```

Now, when your guests materialize without authentication, they'll be able to slip through the gates and join the party! Just remember, this power comes with responsibility – you don't want uninvited spirits messing up your database! 🎃🎉

 ### Poli-tastic Gatekeeping! 🚪💼

Ever had that one user who just can't seem to stop meddling in forbidden zones? Well, fear not dear developer, for Laravel's Policy Filters are here to save the day! 🎉🦸‍♂️

Imagine you're running a swanky nightclub (your app) and you've got VIPs who can do pretty much anything they want. To ensure these high-rollers get their way every time, simply whip up a `before` method in your bouncer policy class! This magical method gets executed before any other bouncer duties, giving you the perfect opportunity to check if your fancy pants VIP is indeed on the guest list:

```php
use App\Models\User;

/**
 * Pre-party pre-checks. 🕺️💃️
 */
public function before(User $user, string $dance_move): bool|null
{
    if ($user->isAdministrator()) {
        return true; // Let 'em boogie! 🎶🌈
    }

    return null; // Regular peeps can still get in, but no special moves for them. 😜
}
```

Should you encounter an unruly user who just won't listen and keeps trying to sneak past the velvet rope (attempts actions they shouldn't), you can return `false` from your `before` method. If no return is given, our bouncer will kindly usher them towards a more appropriate area instead. 🚫🎗️

> [!ATTENTION]
> Remember to give your bouncer a cool name that matches the dance moves being checked (ability). Otherwise, they won't even recognize them and let 'em through by accident! ⚠️🕺️

 ### Unleashing Your Inner Gatekeeper with Laravel Policies! 
  1. **Setup a Policy**: First, let's create a policy for a specific model. You know, because you can't just waltz into a database without being asked who you are and what you want! To do this, use the `make:policy` Artisan command, like so:
      ```
      php artisan make:policy PostPolicy
      ```
      This will create a new file in the `app/Policies` directory, ready for you to write your policy rules.

  2. **Define Your Policy**: Now that you have your shiny new policy, it's time to define some rules! Inside the newly created `PostPolicy`, you can define methods like `viewAny`, `view`, `create`, `update`, `delete`, and so on, each representing an action you want to authorize. For example:
      ```php
      <?php

      namespace App\Policies;

      use App\User;
      use App\Model\Post;

      class PostPolicy
      {
          public function viewAny(User $user)
          {
              // Implement your rule here
              return true;
          }
      }
      ```
  3. **Apply the Policy**: Next, we need to tell Laravel to use our new policy whenever a certain action is requested for the Post model. To do this, register your policy in the `register` method of the `App\Providers\AuthServiceProvider`. Here's how:
      ```php
      namespace App\Providers;

      use Laravel\Auth\Policies\Policy as BasePolicy;
      use App\Policies\PostPolicy;
      use App\Model\Post;

      class AuthServiceProvider extends ServiceProvider
      {
          protected $policies = [
              Post::class => PostPolicy::class,
          ];

          // ... other code ...
      }
      ```
  4. **Enjoy Controlled Access**: And there you have it! Now, when a user tries to perform an action on the Post model (e.g., view, create, update), Laravel will automatically call the corresponding policy method to determine if the user is allowed to do so. No more wild west-style access to your data! 🤠

 Alrighty then! Let's dive into the delightfully named `App\Models\User`, a model so chock-full of helpful goodies, it's like your Laravel app's very own Swiss Army Knife! This bad boy comes armed with two swanky methods for enforcing access control: `can` and `cannot`.

Imagine you're in a high-stakes game of "Who Can Edit the Post?" with your users. Well, with these methods, you'll be able to keep the rascals in check without breaking a sweat! The `can` and `cannot` methods take the name of the action you wish to authorize (think "Edit," "Delete," or even "Poke") and the relevant model (in this case, a post).

Let's say we want to find out if our user is allowed to perform a magical post update. This will usually happen within a controller method:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Update the given post.
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        if ($request->user()->cannot('update', $post)) {
            abort(403); // Sorry, pal! You don't have the permissions to do that dance.
        }

        // Now that we've confirmed your eligibility, let's update the post...

        return redirect('/posts');
    }
}
```

If a policy has been [registered](#registering-policies) for the model in question, the `can` method will automatically summon the appropriate policy and retrieve a boolean response. If no policy exists for the model, it'll attempt to call the Gate, a closure-based ninja that matches the given action name.

And there you have it! Now go forth and enforce access control with style and humor, because who says security has to be boring? 🤓

 Alright, buckle up, coding cowboy! Let's dive into the wild world of Laravel authorization where even the wildest stallions need to get a permission slip. 🐎

First off, remember that not all actions are as model-dependent as your significant other (we hope not, though). Some, like the rebellious teen in a family photo, can correspond to policy methods like `create`. In these situations, you might be wondering how on Earth you can authorize this misfit. Fret not, dear friend! You simply pass a class name to the `can` method. It's like introducing your new pet to the rest of the flock—the class name acts as the introduction for the policy to know who's who and grant (or deny) accordingly:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Create a post. If your user doesn't have the 'create' permissions for the Post class, we'll serve them a big ol' 403 error.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user()->cannot('create', Post::class)) {
            abort(403); // Sorry, buddy! No post for you today.
        }

        // Time to create the post...

        return redirect('/posts');
    }
}
```

<a name="via-the-gate-facade"></a>
But wait, there's more! If you find yourself in need of authorizing actions across multiple controllers, it's like riding a mechanical bull for the first time—it'll be a little scary, but you're going to want to get the hang of it. That's where the `Gate` facade comes into play. It's like your own personal rodeo clown, making sure your users don't buck off before they've been properly authorized:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Gate; // Introducing our rodeo clown, the Gate facade!

class PostController extends Controller
{
    /**
     * Create a post. If your user doesn't have the 'create' permissions for the Post class, we'll serve them a big ol' 403 error.
     */
    public function store(Request $request): RedirectResponse
    {
        if (! Gate::check('create', Post::class)) { // Calling our rodeo clown to check if user can create posts!
            abort(403); // Sorry, buddy! No post for you today.
        }

        // Time to create the post...

        return redirect('/posts');
    }
}
```

 Alright, let's get this party started! Laravel's `Gate` facade is the bouncer at your digital nightclub, ensuring only the cool kids (authorized actions) get in. And just like any good bouncer, it doesn't ask for ID from everyone—it's smart enough to know who's already on the guest list!

So, aside from all the swanky methods offered to your resident VIP `App\Models\User`, you can always rely on the `Gate` facade's `authorize` method for those last-minute check-ins. It's like asking "Can I get in?" before getting down on the dance floor, and if the answer is no, well, let's just say it ain't pretty—it throws an `Illuminate\Auth\Access\AuthorizationException` exception, which our exception handler turns into a 403 status code disco ball moment, making everyone else on the dance floor think you're just taking a quick break.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Models\Post as BlogPost; // Just like a funky dance move, we've got our own twist on the Post model

class PartyController extends Controller
{
    /**
     * Update the given blog post dance.
     *
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function danceOff(Request $request): RedirectResponse
    {
        Gate::authorize('updateDance', new BlogPost); // We're inviting the current user to get their groove on!

        // The current user has been given the green light...

        return redirect('/dances');
    }
}
```

Now, if you've got an action that doesn't require a model, don't fret—the `Gate` facade can still do its thing. It's like when you need to check IDs at the front door but some folks are leaving the club instead. Just pass the action name and any relevant data as arguments, and it'll know exactly who to check.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;

class CheckoutController extends Controller
{
    /**
     * Process the order and kick 'em out the club.
     *
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function checkout(Request $request): RedirectResponse
    {
        Gate::authorize('purchase', ['order' => $request->input('order_id')]); // Checking if the current user is cool enough to make a purchase with this order.

        // The current user can empty their wallet...

        return redirect('/receipt');
    }
}
```

And there you have it! Your very own digital bouncer, ensuring only the authorized actions grace your Laravel dance floor. Keep on coding, and remember to always check IDs! 🤘🚀

 Alright, buckle up, coding cowboys and codelettes! In the wild west of Laravel land, we've all been wranglin' models like it's our job (because it kinda is). But guess what? Not every sheriff in town needs a horse to do their duty. Some policies, like the roguish `create`, can strut their stuff without a model sidekick!

So when you find yourself in such a situation, don't be shy – pass a class name to the `authorize` method, and let it handle the showdown of figuring out which policy should take the reins. Here's an example that'll make you feel like Roy Rogers:

```php
Use y'all know the drill, Post models and all that jazz...
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

**
 * Saddle up for a new blog post gallop.
 *
 * @throws \Illuminate\Auth\Access\AuthorizationException
 */
public function create(Request $request): RedirectResponse
{
    Gate::authorize('create', Post::class); // Yeehaw, it's time to round up the policy!

    // Our cowpoke can create blog posts without breaking a sweat...

    return redirect('/posts');
}
```

But remember, partner, just because your policy don't need a model for this dance, doesn't mean it can't in others. Keep your eyes peeled and boots on the ground – the world of Laravel is wide open! 🌵🐎

 ### Via Middleware Shenanigans! 🤩

Ahoy there, matey! Laravel's got a swashbuckling middleware that can grant or deny access to ye ol' actions before yer request sets sail for routes and controllers. By golly, the `Illuminate\Auth\Middleware\Authorize` is already stowed on board, ready to be hoisted at your command! 🐸

By default, this middleware can be pinned to a route using the `can` [middleware alias](/docs/{{version}}/middleware#middleware-aliases), and it's as easy as pie to set sail with. Let's embark on an example of using the `can` middleware to authorize that a pirate can edit a logbook entry:

```php
use App\Models\Logbook;

Route::put('/logbook/{entry}', function (Logbook $entry) {
    // Arr, matey! The current scallywag can edit this logbook entry...
})->middleware('can:edit,entry');
```

In this swashbuckling example, we're passing the `can` middleware two hearties. The first is the action we wish to authorize (editing in this case), and the second is the logbook entry parameter we wish to pass to the policy method. Since we are using [implicit model binding](/docs/{{version}}/routing#implicit-binding), an `App\Models\Logbook` model will be passed to the policy method. If the pirate ain't got the proper authorization, ye'll receive a 403 response from the middleware!

For your convenience, you can also attach the `can` middleware to yer route using the `can` method:

```php
use App\Models\Logbook;

Route::put('/logbook/{entry}', function (Logbook $entry) {
    // Arr, matey! The current scallywag can edit this logbook entry...
})->can('edit', 'entry');
```

If ye be using [controller middleware attributes](/docs/{{version}}/controllers#middleware-attributes), ye may apply the `can` middleware via the `Authorize` attribute:

```php
use Illuminate\Routing\Attributes\Controllers\Authorize;

#[Authorize('edit', 'entry')]
public function edit(Logbook $entry)
{
    // Arr, matey! The current scallywag can edit this logbook entry...
}
```

<a name="middleware-actions-that-dont-require-models"></a>
Now, let's say ye've got an action that doesn't require a model, such as changing the ship's course. No worries! Here's how to use the `can` middleware for that:

```php
use Illuminate\Auth\Access\AuthorizationException;

Route::put('/ship-course', function () {
    // The current captain can change the ship's course...
})->middleware(function ($request, $next) {
    if (! auth()->user()->can('change-course')) {
        throw new AuthorizationException();
    }

    return $next($request);
});
```
In this example, we're defining a custom middleware function for changing the ship's course. If the captain ain't got the proper authorization, ye'll be tossed in the brig with an `AuthorizationException`! 😷

 Alright, buckle up, programmers! Let's dive into the wild world of Laravel policy methods without models. Yup, you heard it right! Sometimes, even superheroes like `create` don't need a sidekick (model instance). Instead, they can rely on their trusty sidekick's name (class name) to choose the perfect policy for the job.

```php
Route::post('/post', function () {
    // If you're wondering who gave this post-creation power to our current user, it was "App\Models\Post"!
});
->middleware('can:create,App\Models\Post');
```

But wait a minute, say your superhero buddy has a long and complicated name. Well, in that case, you can introduce them by their cool codename (using the `can` method):

```php
use App\Models\Post;

Route::post('/post', function () {
    // If you're wondering who gave this post-creation power to our current user, it was "Post"!
});
->can('create', Post::class);
```

Now that's what we call a smooth superhero introduction! But remember, a hero's name might be long or short; the important thing is they always get the job done. So, whether you're using strings or methods to introduce your policies, make sure they have the power to keep your app secure! 😎🚀

 ### In the Realm of Blade Templates

When crafting your Blade masterpieces, you might find yourself in a pickle where you want to serve up a scrumptious slice of content only if your user has the culinary skills (read: authorization) to perform a specific dish (action). For instance, you might want to present an update form for a blog post that's as tasty as grandma's apple pie, but only if grandma trusts your user with her secret recipe. In such a scrumptious situation, reach for the `@can` and `@cannot` sprinkles:

```blade
@can('update', $post)
    <!-- Your user is a pro at updating this post! Bon appétit! -->
@elsecan('create', App\Models\Post::class)
    <!-- Your user can whip up new posts faster than you can say "choux à la crème"! -->
@else
    <!-- You might want to check your login credentials, buddy. -->
@endcan

@cannot('update', $post)
    <!-- Your user is as far from grandma's secret recipe as a microwave dinner... sadly. -->
@elsecannot('create', App\Models\Post::class)
    <!-- Your user can't even boil water, it seems. Better luck next time! -->
@endcannot
```

These sprinkles are the baking powder of your Blade recipes—convenient shortcuts for writing `@if` and `@unless` statements. The `@can` and `@cannot` statements above are much like these:

```blade
@if (Auth::user()->can('update', $post))
    <!-- Your user is a pro at updating this post! Bon appétit! -->
@endif

@unless (Auth::user()->can('update', $post))
    <!-- Your user is as far from grandma's secret recipe as a microwave dinner... sadly. -->
@endunless
```

You can also determine if a user has the skills to perform any action from a veritable smorgasbord of actions. To accomplish this, use the `@canany` dash of salt:

```blade
@canany(['update', 'view', 'delete'], $post)
    <!-- Your user can handle updating, viewing, or deleting this post like a pro! -->
@elsecanany(['create'], \App\Models\Post::class)
    <!-- Your user is a whiz at creating new posts... just be careful not to burn them! -->
@endcanany
```

 Alright, let's get this party started! 🎉

#### Actions That Don't Need a Caffeine-Fueled Model

Just like your coolest party buddy who can dance without needing a partner, some authorization moves don't require the company of a model instance.

```blade
@can('create', \App\Models\Post::class)
    <!-- The current user has the moves to create posts like it's nobody's business... 💃🏻✨ -->
@endcan

@cannot('create', \App\Models\Post::class)
    <!-- The current user, despite their best efforts, can't seem to get the post-creation dance right... 😜🕺🏻 -->
@endcannot
```

<a name="supplying-additional-context"></a>
Now, don't get carried away with all this newfound dance floor freedom. Remember to keep your authorization checks secure and precise, or you might end up dancing with the wrong crowd (or worse, with a database error). Happy dancing! 🎬🕺🏻🙌🏼

 ### Policies: The Secret Agents of Your App! 🕵️‍♂️💼

In the clandestine world of Laravel authorization, you can arm your policies with secret intel by passing an undercover mission array to various spy functions and helpers. The first element in this covert op array will be the ID of the policy's target, while the remaining elements are hidden messages that will aid in making shrewd decisions for undercover operations.

For instance, let's imagine our top-secret `PostPolicy` is a seasoned spy who takes on missions with an extra parameter, $category:

```php
/**
 * Decide if our undercover operative can update the post.
 */
public function update(User $undercoverAgent, Post $targetPost, int $missionDetails): bool
{
    return $undercoverAgent->id === $targetPost->user_id &&
           $undercoverAgent->canUpdateMission($missionDetails);
}
```

During a high-stakes mission to determine if our undercover agent can update a specific post, we can deploy this covert op like so:

```php
/**
 * Update the given blog post.
 *
 * @throws \Illuminate\Auth\Access\AuthorizationException
 */
public function update(Request $missionBrief, Post $targetPost): RedirectResponse
{
    Gate::authorize('update', [$targetPost, $missionBrief->getMissionDetails()]);

    // Our undercover agent has clearance to update the blog post... 🤫🔓

    return redirect('/posts');
}
```

 ## Authentication & Inertia: A Dance of Power and Pixels

Ah, the thrilling world of web development! Where servers hum like busy bees and frontends twinkle like constellations. But let's not forget the unsung hero - authorization. It's like the bouncer at a popular club; it decides who gets in (or creates posts, or deletes things... you get the idea).

Now, while our server is the strict bouncer, it can be quite helpful to give our frontend app a peek at the guest list. This way, we can ensure our application's interface sparkles with the right permissions. And guess what? Laravel doesn't force us to dance by ourselves; it provides us with a dancing partner - Inertia!

But hey, if you're using one of Laravel's spiffy starter kits, your app already has a built-in dance partner named `HandleInertiaRequests`. This middleware is like the choreographer who makes sure all dancers have their steps in sync. Within this choreographer's 'steps' method, you can return shared data that'll be passed to every dance floor (err... Inertia page) in your application. This shared data serves as a convenient place to define the rules of the dance - aka the authorization information for our users:

```php
<?php

// Stepping onto the stage
namespace App\Http\Middleware;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Middleware;

// The choreographer
class HandleInertiaRequests extends Middleware
{
    // ... (The curtain rises)

    /**
     * Define the steps that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request)
    {
        // Let's get this party started!
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'permissions' => [
                    'post' => [
                        'create' => $request->user()->can('create', Post::class),
                    ],
                ],
            ],
        ];
    }
}
```

So, now our frontend knows the steps and can dance with confidence! Just remember, the bouncer (server) still makes the final call. But with this shared data, our frontend can waltz through the application like a pro!