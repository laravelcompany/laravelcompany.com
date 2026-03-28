 ## Eloquent's Amorous Affairs: A Love Letter to Data Relations!

### Chapter 1: The Prelude

In the world of Laravel, love isn't just for Cupid - it's also for your data. That's right, we're talking about relationships! You'll learn how to woo your models together and make beautiful data families.

<a name="defining-relationships"></a>
### Chapter 2: The Courtship Begins

#### One-to-One / Has One: "Just a Little Spoonful of You!"

Two peas in a pod, two sides of the same coin, or better yet, the perfect spoonful. In this case, your models can't stand apart without each other.

#### One-to-Many / Has Many: "I Love Them All Equally!"

You know how one parent can have many children? Or how one teacher can educate a whole class? That's the vibe here - a single model can be the pride and joy of multiple partners.

#### One-to-Many (Inverse) / Belongs To: "Who Needs Me if They Have You?"

This is a reverse scenario where one model belongs to another, but still, holds on to its own identity. It's like when a child tells their friend they belong together but secretly craves independence.

#### Has One of Many: "There Can Only Be One!"

In this polygamous relationship, a single model can be connected to multiple others, but only one at a time. Just remember to keep the peace and avoid jealousy!

#### Has One Through: "Let's Make This Official!"

In this joint venture, three models collaborate on creating an intermediate table to strengthen their bond. It's like those arranged marriages in medieval times - but with data!

#### Has Many Through: "We Make a Great Team!"

The polyamorous counterpart to 'Has One Through,' where multiple models team up through an intermediate table for the ultimate group bonding experience.

<a name="scoped-relationships"></a>
### Chapter 3: The Commitment Ceremony - Scoping Your Relationships

Add a layer of exclusivity to your relationships by scoping them based on specific conditions. It's like having a secret handshake, but for your data!

<a name="many-to-many"></a>
### Chapter 4: Love Triangles - Many-to-Many Relationships

#### Retrieving Intermediate Table Columns: "Let Me Get This Straight..."

Unravel the intricacies of your three-way relationship by accessing the columns in the intermediate table. It's like reading the diary entries left behind after a steamy love triangle!

#### Filtering Queries via Intermediate Table Columns: "We're Complicated..."

Add some spice to your many-to-many relationship by filtering through the intermediate table for that perfect match. It's like swiping right on Tinder, but with data!

#### Ordering Queries via Intermediate Table Columns: "But Who's the Main Attraction?"

Give your many-to-many relationships a pecking order by sorting them based on columns in the intermediate table. It's like lining up contestants for a beauty pageant, but with data!

#### Defining Custom Intermediate Table Models: "We Should Have Met Earlier!"

Customize your many-to-many relationships even further by defining custom models for the intermediate table. It's like introducing a matchmaker to spice up the love triangle!

<a name="polymorphic-relationships"></a>
### Chapter 5: The Open Relationship - Polymorphic Love

Polymorphic relationships allow your model to connect with multiple types, making them perfect for a modern, open relationship.

#### One-to-One / Has One (Polymorphic): "You Belong to Me, But Not Exclusively!"

A polymorphic one-to-one relationship lets a single model be owned by various other models of different types. It's like having multiple lovers who all claim you as their significant other!

#### One-to-Many / Has Many (Polymorphic): "I Have Many Loves, and They Love Me Back!"

In this polymorphic relationship, a single model can be loved by multiple others of various types. It's like being the object of desire for all your admirers!

#### One-of-Many (Polymorphic): "I Can Find Love Anywhere I Go!"

A polymorphic one-of-many relationship allows a single model to be connected with several others, but only one at a time. It's like the ultimate wandering soul, always ready for new connections!

#### Many-to-Many (Polymorphic): "I'm Loved by Many, in Different Ways!"

Just as in a regular many-to-many relationship, your model can be loved by multiple others of various types. But in this case, you get to set the rules and have more control!

#### Custom Polymorphic Types: "I'm Not Just for One Type Anymore!"

Customize the types of models that can connect with yours through a polymorphic relationship. It's like expanding your horizons in love!

<a name="dynamic-relationships"></a>
### Chapter 6: The Rebound Relationship - Dynamic Connections

Dynamic relationships allow you to define connections on the fly, breaking free from those pesky predefined constraints. It's like finding love when you least expect it!

<a name="querying-relations"></a>
### Chapter 7: The Long Distance Relationship - Querying Your Connections

#### Relationship Methods vs. Dynamic Properties: "I Prefer to Call, Not Text!"

Decide whether you want to query your relationships using traditional methods or dynamic properties for a more modern approach. It's like choosing between sending a letter or an email!

#### Querying Relationship Existence: "Are We Still Together?"

Find out if your models are still in a relationship by querying their existence. It's like checking in on your long-distance love to make sure it's still alive!

#### Querying Relationship Absence: "We Never Really Were Together..."

Verify if your models have parted ways by checking for the absence of a relationship. It's like finding out that your ex never really cared about you after all!

#### Querying Morph To Relationships: "What Are You Really?"

Uncover the true nature of your relationships through querying morph-to models. It's like discovering your partner's deepest secrets!

<a name="aggregating-related-models"></a>
### Chapter 8: The Polyamorous Family - Aggregating Your Connections

#### Counting Related Models: "How Many Are We?"

Count the number of connections your model has in a relationship. It's like taking a census of your love life!

#### Other Aggregate Functions: "What Else Do We Have Together?"

Aggregate other functions to find out more about your relationships, such as the average or maximum number of connections. It's like learning about the strengths and weaknesses of your connections!

#### Counting Related Models on Morph To Relationships: "Who Loves Me the Most?"

Find out which types of models love you the most through morph-to relationships. It's like a popularity contest, but with data!

<a name="eager-loading"></a>
### Chapter 9: The Preemptive Strike - Eager Loading

#### Constraining Eager Loads: "Let's Be Ready for Anything!"

Specify which relationships you want to preload during a query. It's like stockpiling supplies for an upcoming war!

#### Lazy Eager Loading: "I Can Handle More Than You Think..."

Load your relationships on-demand while still maintaining the performance benefits of eager loading. It's like having a secret weapon up your sleeve!

#### Automatic Eager Loading: "I've Already Thought of Everything!"

Let Laravel handle the preloading of relationships for you based on your code structure. It's like having a personal assistant who takes care of everything!

#### Preventing Lazy Loading: "I Don't Need Anyone Else!"

Force Laravel to load all related models immediately, even if they're not needed yet. It's like refusing to trust anyone and doing everything yourself!

<a name="inserting-and-updating-related-models"></a>
### Chapter 10: The Commitment Ceremony - Inserting and Updating Related Models

#### The `save` Method: "Tie the Knot!"

Add a new model to an existing relationship using the `save()` method. It's like proposing to your soulmate!

#### The `create` Method: "Let's Start Fresh Together!"

Create a new model and add it to an existing relationship all in one go with the `create()` method. It's like starting a brand-new life together!

#### Belongs To Relationships: "I Am Yours, Forever!"

Update an existing relationship by modifying its associated model through the belongs-to relationship. It's like making promises and keeping them!

#### Many-to-Many Relationships: "We Make Each Other Better!"

Add or remove models from a many-to-many relationship with ease. It's like breaking up and making up in a healthy, drama-free way!

<a name="touching-parent-timestamps"></a>
### Chapter 11: The Anniversary - Touching Parent Timestamps

Update the timestamps of your parent model when any related children are saved or deleted. It's like celebrating another year together!

 Alrighty, buckle up as we dive into the whimsical world of Eloquent Relationships! Let's face it, in the wild west of databases, keeping track of all those cowboys and their horses can be a real chore. But fear not, good people, for with Eloquent, you can manage your database relationships like a seasoned rancher, with nary a wrangle in sight!

Here's a roundup of the common relationships that'll make your life (and your database) a whole lot easier:

<div class="corral" markdown="1">

- [One Cowboy to One Horse](#one-to-one-gallop) 🐎⃣➡️🦱️
- [One Cowboy to Many Horses](#one-to-many-roundup) 🐎⃣⬅️🤠️
- [Many Cowboys to Many Horses](#many-to-many-rodeo) 🤠️🐎➡️🤠️🐎️
- [One Cowboy Rides Through One Saloon's Bar](#has-one-through-whiskey) 🥃🚪➡️🤠️
- [One Cowboy Owns Many Horses via the Blacksmith](#has-many-through-hoof-care) 🐎⬅️🔨🤠️
- [One Cowboy is One Type of Pet (Polymorphic)](#one-to-one-petting-zoo) 🦱️👥➡️🐴, 🐶, or 🐰
- [One Cowboy Owns Many Pets via the Vet (Polymorphic)](#one-to-many-petting-zoo) 🦱️⬅️💉🤠️
- [Many Cowboys Share Many Horses via the Ranch Hand](#many-to-many-ranch-hand) 🐎➡️🤠️🤠️

</div>

<a name="defining-relationships"></a>
Now, let's saddle up and learn how to define these relationships! Strap on your spurs, cowboy, because it's time to wrangle some database magic. 🌵🐎🚀️

 Alrighty then! Let's dive into the delightful world of Laravel relationships, where models get cozy with one another in ways that would make a Hallmark movie blush. These relationships are like the secret handshakes between your Eloquent model classes, and they're not just for show - they serve as powerful query builders!

Defining relationships as methods on your models provides an incredible method chaining experience, similar to a well-choreographed dance routine. Let's say you want to find active posts from a user - no sweat! Just chain some queries together like this:

```php
$user->posts()->where('active', 1)->get();
```

But before we get carried away with the fun stuff, let's get down to business and learn how to define each type of relationship that Eloquent supports. So grab a virtual margarita, because this could get interesting!

<a name="one-to-one"></a>

## One To One: The "Just Married" Relationship

In the world of relationships, one to one is like that perfect match where both parties are only interested in each other. In Laravel terms, this means that one User has one Profile, and vice versa - a romantic twist on dependency injection! Here's how you define it:

```php
class User extends Authenticatable
{
    // ...

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
```

Now that you've defined your relationship, you can access the Profile of a User like this:

```php
$user = App\User::find(1);
echo $user->profile->name; // John Doe
```

But remember, just because you have a one to one relationship doesn't mean there can't be a little intrigue. You can always define a reverse one-to-one relationship:

```php
class Profile extends Model
{
    // ...

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Now you can access the User of a Profile:

```php
$profile = App\Profile::find(1);
echo $profile->user->name; // Jane Smith
```

So there you have it! The beginning of a beautiful Laravel relationship. But wait, there's more! Stay tuned for the next episode when we explore one to many relationships - because who doesn't love a little polyamory in their codebase? 😉

 Alright, buckle up! We're diving into the world of one-to-one relationships, which are like romantic relationships in a high school movie - rare but beautiful. Let's say you've got a `User` who only ever has one phone number (we all know those people). To define this relationship, we'll need to give `User` a chance to express their feelings through the `phone()` method. This method should call upon the `hasOne` method and keep it close forevermore.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Model
{
    /**
     * Get the phone that's been pining for this user.
     */
    public function phone(): HasOne
    {
        return $this->hasOne(Phone::class); // <3 You, Phone!
    }
}
```

Once the relationship is official, we can access the related record using Eloquent's matchmaking skills. It allows us to treat the relationship methods like properties on the model:

```php
$phone = User::find(1)->phone; // <- Ah, there you are, my one true love!
```

Eloquent is a hopeless romantic and will automatically assume that the `Phone` model has a `user_id` foreign key. If your models like to keep their relationships secret, you can pass a second argument to the `hasOne` method:

```php
return $this->hasOne(Phone::class, 'foreign_key'); // <- You gotta come out of the closet, Phone!
```

But if your models want to use a different primary key name, you can pass a third argument to the `hasOne` method:

```php
return $this->hasOne(Phone::class, 'foreign_key', 'local_key'); // <- I know it's complicated, but I'll learn to love your quirks, Phone!
```

 Alrighty then! Let's get our digital hands dirty and define the inverse of a relationship between our beloved `User` model and the somewhat less beloved (but still important) `Phone` model. You see, we've already figured out how to grab a `Phone` from our `User`, but now it's time to return the favor and find out who owns that ringing device.

To do this, we can employ some fancy Eloquent sorcery with the `belongsTo` method:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Phone extends Model
{
    /**
     * Find the user who's been using this phone as a prop in their life.
     */
    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id'); // Because Eloquent loves suffixing with "_id" like a sneaky little naming convention ninja it is.
    }
}
```

But what happens when our `Phone` model doesn't play by the rules and insists on using a different name for its foreign key? Well, we can be all rebellious and pass a custom key name as the second argument to the `belongsTo` method:

```php
/**
 * Find the user who's been using this phone as a prop in their life.
 */
public function owner(): BelongsTo
{
    return $this->belongsTo(User::class, 'foreign_key'); // Because our Phone just can't seem to keep it together and sticks with "foreign_key".
}
```

Now, what if our `User` model decides to ditch the standard `id` primary key for something more... unique? Or perhaps we want to find the associated model using a different column altogether? We can pass a third argument to the `belongsTo` method to account for this:

```php
/**
 * Find the user who's been using this phone as a prop in their life.
 */
public function owner(): BelongsTo
{
    return $this->belongsTo(User::class, 'foreign_key', 'owner_key'); // Because our User and Phone have a complicated relationship and need some extra help from us to make things work.
}
```

And that's a wrap! Now you're well-versed in defining the inverse of a `hasOne` relationship using the `belongsTo` method, and you can impress your friends (or at least your cat) with your newfound Laravel powers. Keep on coding, my friend!

 Alrighty then! Let's dive into the magical world of Laravel relationships, shall we? We're gonna talk about the one-to-many, or as I like to call it, the "Parent Trap" relationship. This is when a single model, let's say your parents (or blog post), are the proud guardians of multiple child models, like their annoying siblings (comments).

Now, to set up this relationship, you gotta define a method on your Eloquent model - think of it as naming tags for those wild children. Here's an example:

```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    /**
     * Get the comments for the blog post.
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
```

Eloquent, being the smart cookie it is, automatically figures out the proper foreign key column for the `Comment` model. It does this by naming the column after the parent model's name (in snake case) with an `_id` at the end. So, in our example, Eloquent assumes the foreign key column on the `Comment` model is `post_id`.

Once you've defined your relationship method, you can access the collection of related comments by using the `comments` property. Remember, Eloquent makes it easy to play house with those kids – relationships are like properties on the model:

```php
use App\Models\Post;

$comments = Post::find(1)->comments;

foreach ($comments as $comment) {
    // ...
}
```

Since all relationships serve as query builders, you can add further constraints to the relationship query by chaining conditions onto the query:

```php
$comment = Post::find(1)->comments()
    ->where('title', 'foo')
    ->first();
```

Just like with `hasOne`, you can also override the foreign and local keys by passing additional arguments to the `hasMany` method:

```php
return $this->hasMany(Comment::class, 'foreign_key');

return $this->hasMany(Comment::class, 'foreign_key', 'local_key');
```

So there you have it! The one-to-many relationship, made simple and fun. Now go forth and tame those wild child models! 🚀💫🌍

 Ah, the joys of nested loops and Eloquent! It's like a beautiful dance between PHP and SQL, but sometimes it can get a little too passionate and forget to count its steps. *Cough* "N+1" query problem *Cough*.

You see, when you eagerly load comments for posts, you might think that Eloquent will fetch all the necessary information in one go, like a well-prepared meal with all the sides already on your plate. But no! It's more like ordering each side individually, one after another - it gets the job done, but it's hardly efficient.

To make our Eloquent dance a little smoother, we can introduce a chaperone. Just imagine, instead of leaving the child models to fend for themselves, we hand them a fully-loaded parent model, making sure they never run out of dinner conversation topics!

Here's how you can do it:

```php
// Define the relationship in your Post model
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    /**
     * Get the comments for the blog post, with a chaperone.
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class)->chaperone();
    }
}
```

Or, if you prefer to leave the decision until runtime:

```php
use App\Models\Post;

$posts = Post::with([
    'comments' => fn ($comments) => $comments->chaperone(),
])->get();
```

Now, your nested loops can dance away without worrying about those extra steps - or queries! Just remember to tip the chaperone every now and then. They work hard to keep your models well-fed and conversationally stimulating. 😉

 Alrighty then! Let's dive into the world of Laravel relationships and get cozy with comments and their parent posts. You know, like a digital family reunion where everyone is related but nobody really wants to be there.

First things first, we need to establish that a comment can access its parent post. To do this, we'll define an inverse of the `hasMany` relationship in a way that would make even Mr. Spock proud - by calling upon the `belongsTo` method. Here's how it's done:

```php
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    /**
     * Get the post that raised this comment.
     */
    public function postParent(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
```

Now, to find out who's boss (the parent post), we can access the "dynamic relationship property" called `postParent`. Catchy, huh?

```php
use App\Models\Comment;
$comment = Comment::find(1);

return $comment->postParent->title;
```

Eloquent will then play detective and find a `Post` model that matches the comment's `post_id`. It's like a digital Where's Waldo? game, but with more database queries.

By default, Eloquent assumes that the foreign key is `post_id`, as it knows to suffix the method name with the parent model's primary key column name. But what if your relationship isn't named "post_parent" or uses a different foreign key? No worries, you can pass a custom foreign key name like so:

```php
/**
 * Get the post that raised this comment.
 */
public function postParent(): BelongsTo
{
    return $this->belongsTo(Post::class, 'foreign_key');
}
```

And if your parent model uses a primary key other than `id`, or you'd like to find the associated model using a different column, you can pass a third argument to the `belongsTo` method:

```php
/**
 * Get the post that raised this comment.
 */
public function postParent(): BelongsTo
{
    return $this->belongsTo(Post::class, 'foreign_key', 'owner_key');
}
```

And just like that, we've bridged the gap between comments and their parent posts! Now you can find out who's responsible for that epic wall of text. Or that embarrassing typo. Enjoy your newfound relationship skills! 🤓

 Alright, buckle up, coding cowboys! Let's dive into the tantalizing world of Default Models, where your models become as flexible as a rubber duck in a bathtub.

The `belongsTo`, `hasOne`, `hasOneThrough`, and `morphOne` relationships are like the swiss army knife of Laravel. They let you define a stand-in model when the given relationship is as empty as an old man's dance floor. This technique is known as the Null Object pattern - it's like having an invisible friend for your models!

In plain English, if there's no user attached to a Post (like a post from a ghost), you'll get an empty `App\Models\User` model instead of causing an error. Here's how to make it happen:

```php
/**
 * Who wrote this post? An actual user or Casper the Friendly Ghost?
 */
public function user(): BelongsTo
{
    return $this->belongsTo(User::class)->withDefault();
}
```

Now, if you want to dress up your ghost with some attributes (because who doesn't love a well-dressed specter?), you can pass an array or closure to the `withDefault` method:

```php
/**
 * Who wrote this post? An actual user or Casper the Friendly Ghost?
 */
public function user(): BelongsTo
{
    return $this->belongsTo(User::class)->withDefault([
        'name' => 'Guest Author',
    ]);
}

/**
 * Who wrote this post? An actual user or Casper the Friendly Ghost?
 */
public function user(): BelongsTo
{
    return $this->belongsTo(User::class)->withDefault(function (User $user, Post $post) {
        $user->name = 'Guest Author';
    });
}
```

And there you have it! No more frowny-faced conditional checks in your code. Now you can focus on more important things, like figuring out why the computer eats your tacos every time you leave the room. Happy coding, partner! 🤠

 Alrighty then! Let's talk about traversing the family tree of "belongs to" relationships, Laravel style.

When you're itching to know a "belonger's" children, you can handcraft a `where` clause and fish for those Eloquent models like so:

```php
use App\Models\Post;

$posts = Post::where('user_id', $user->id)->get();
```

But hey, who needs manual labor when you can delegate the dirty work to `whereBelongsTo`, which is like that smart family member that knows the secret backdoor to everyone's house?

```php
$posts = Post::whereBelongsTo($user)->get();
```

Now, if you're feeling extra popular and have a swarm of fans (a.k.a collection of users), Laravel will help you sort through the crowd to find their associated posts:

```php
$users = User::where('vip', true)->get();

$posts = Post::whereBelongsTo($users)->get();
```

By default, Laravel plays detective and figures out the relationship based on the model's classy name. But if you prefer to play matchmaker and specify a relationship name, no problemo! Just pass it as the second argument:

```php
$posts = Post::whereBelongsTo($user, 'author')->get();
```

So there you have it! Now go forth and conquer those "belong to" relationships with confidence and a touch of humor. Happy coding, Laravelers!

 ### The One with the Many Hats (or, How to Manage a Crowded Closet)

In the wild world of data, it's not uncommon for one model to have a closetful of related models. But sometimes you just want to reach for that freshly laundered, most fashionable item - the latest or oldest model in the relationship. For instance, imagine a `User` who has many `Order`s, and you're keen on finding their last night's takeout (the most recent order they've placed).

Enter the fabulous `hasOne` relationship type, paired with our wardrobe organizer, the `ofMany` methods:

```php
/**
 * Grab the user's classiest takeout.
 */
public function latestTuxedoTakeout(): HasOne
{
    return $this->hasOne(Order::class)->latestOfMany();
}
```

Much like a personal shopper, you can also request the oldest, or first, item in the relationship:

```php
/**
 * Dig up the user's dusty first order.
 */
public function oldestSweatpantsOrder(): HasOne
{
    return $this->hasOne(Order::class)->oldestOfMany();
}
```

By default, our personal shopper will find the latest or oldest item based on the model's primary key - think of it as a tag on each garment. But sometimes you may want to sort through your relationship using different criteria. Say, finding the user's most expensive order:

```php
/**
 * Find the user's couture splurge.
 */
public function largestDesignerBag(): HasOne
{
    return $this->hasOne(Order::class)->ofMany('price', 'max');
}
```

> [!ATTENTION]
> Unfortunately, our personal shopper isn't quite versed in PostgreSQL's high-fashion world of UUID columns. So, one-of-many relationships with those columns are currently off the runway.

<a name="converting-many-relationships-to-has-one-relationships"></a>
Now that you know how to manage your many relationships with our `hasOne` and `ofMany` methods, it's time to tidy up your closet and make sure each item has its place. Just remember: less is more, unless it's takeout orders!

 Alright, let's dive into the enchanting world of Laravel relationships! You know, where models frolic and data dance together in harmonious matrimony.

Now, here's a common scenario: you've got a boisterous gang of orders that are all hankering to be with one user. But sometimes, you just want to find the big kahuna - the order that's the cream of the crop or the king of the hill. For such occasions, Laravel offers you a magical wand called `one`!

```php
// You've got a gang of orders, all eager to be with their user (hasMany)
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

// Now, you want to find the leader of the pack - the largest order (hasOne)
public function biggestBoss(): HasOne
{
    return $this->orders()->one()->ofMany('price', 'max');
}
```

But wait! There's more! If you find yourself in a situation where you have `HasManyThrough` relationships and you want to convert them into `HasOneThrough`, well, guess what? Laravel has got your back with the `one` method once again!

```php
// You've got deployments that are taking place through multiple stages (hasManyThrough)
public function latestDeployment(): HasOneThrough
{
    return $this->deployments()->one()->latestOfMany();
}
```

And there you have it! With the `one` method, you can turn your "many" into a "single," making those complex relationships seem as simple as a walk in the park. Happy relationship-ing! 😊💃🕺

 Alright, buckle up, coders! Let's dive into the world of advanced "has one of many" relationships, where things get a little wild and woolly, like a herd of digital buffalo stampeding through your database. Imagine you're running an online store selling the world's most absurdly overpriced yet somehow inexplicably popular novelty socks (we call them our "Prices"). Now, each Product can have a whole bunch of these Prices associated with it, even after we've put up new prices on the website.

But here's where things get really interesting! Some of these Prices might be scheduled to go live at a later date, thanks to our time-traveling "published_at" column. So, we need to find the latest published Price that hasn't yet gone back in time (because who wants a future sock price today?). And if two Prices share the same time-twisting "published_at" moment, we prefer the one with the highest ID, because, let's face it, everyone loves a boss sock.

To accomplish this Herculean task, we're going to pass an array to our `ofMany` method, filled with sortable columns that determine the latest price. And, as if that wasn't enough, we'll throw in a closure as the second argument! This little guy will be responsible for adding some extra constraints to the relationship query – specifically, ensuring that only Prices with a "published_at" date that is strictly before today are allowed in our sock drawer.

```php
/**
 * Find me my current pair of overpriced socks (Prices).
 */
public function currentSockPair(): HasOne
{
    return $this->hasOne(Price::class)->ofMany([
        'published_at' => 'max',
        'id' => 'max',
    ], function (Builder $query) {
        $query->where('published_at', '<', now()); // Just a friendly reminder: Today is not yesterday!
    });
}
```

And there you have it! Now your Products can dance around with their stylish and overpriced sock pals, all while adhering to the complex rules of time travel and hierarchical IDs. Welcome to the wild west of Laravel relationships – where the only thing more fun than the code is explaining it in an absurdly humorous manner!

 Ah, the "has-one-through" relationship! It's like the matchmaker of the database world, setting up one-to-one dates between models, but with a twist - it needs a mutual friend to make the introduction.

Imagine you're at a swanky dinner party where everyone knows everyone else, except for our shy mechanic and mysterious car owner. The car, being the gossip queen of the party, is friends with everyone (or rather, associated with every model in your Laravel app). So, to get our mechanic to meet the owner, we'll have to go through the car!

Let's set up the table structure:

```text
mechanics
    id - integer
    name - string

cars
    id - integer
    model - string
    mechanic_id - integer

owners
    id - integer
    name - string
    car_id - integer
```

Now, let's introduce our mechanic to the owner using some PHP code:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Mechanic extends Model
{
    /**
     * Introduce me to the car owner, please!
     */
    public function takeMeToTheBall(): HasOneThrough
    {
        return $this->hasOneThrough(Owner::class, Car::class);
    }
}
```

In this code, we're politely asking our mechanic to be introduced to the owner by going through the car. The first argument is the name of the final model (the car owner in this case), and the second one is the name of the mutual friend that knows both - in our example, it's the car.

If all models involved are already acquainted, you can have a more direct introduction:

```php
// In a romantic text message...
return $this->through('cars')->has('owner');

// Or in a formal email...
return $this->throughCars()->hasOwner();
```

In both cases, our shy mechanic is finally introduced to the owner, and they can live happily ever after (or at least until the next database query). Now that's love through third normal form! 💖

 Alright, let's dive into the fascinating world of Laravel relationships, where data connections are as fun as a roller coaster ride! 🎢

First off, let's talk about our good ol' Eloquent foreign key conventions. These are like the secret handshakes at a party - everyone knows them and they make things flow smoothly! 🕺️

But what if you want to break the ice and customize these secret handshakes? No problemo, amigo! You can do that by passing your own keys when using the `hasOneThrough` method like so:

```php
class Mechanic extends Model
{
    /**
     * Find out who's driving the crazy car... I mean, whose car is it?
     */
    public function carOwner(): HasOneThrough
    {
        return $this->hasOneThrough(
            Owner::class, // The guy driving the car... or owning it.
            Car::class,   // The vehicle itself.
            'mechanic_id', // The secret handshake for mechanics in the cars table...
            'car_id',    // The secret handshake for car owners in the owners table...
            'id',        // My ID on the mechanics table.
            'id'         // Their ID on the cars table.
        );
    }
}
```

Or, if your models are already well-acquainted with each other, you can dance around relationships with finesse by using the `through` method:

```php
// This is like saying "I'm connected to my car through the garage, and through the garage, I find out about the owner" 🏠🚗👥
return $this->through('cars')->has('owner');

// Or in dynamic syntax:
return $this->throughCars()->hasOwner();
```

Now that we've covered the basics of "has-one-through", you can get out there and connect models like a pro! 🤩🚀

 ### The "Oh-So-Far" Relationship: A Couch Potato's Dream! 🛋️

Ever found yourself in a situation where you want to reach the remote cousin of your data model, but there's this pesky middleman (or middle table) in the way? Enter the "has-many-through" relationship, the matchmaker of database connections! Let's imagine we're building a deployment platform as cool as [Laravel Cloud](https://cloud.laravel.com). An `Application` model might be chummy with numerous `Deployment` models, all thanks to an intermediary `Environment` model. This relationship is like the party host who knows everyone – you can easily find all deployments for a specific application! 🎉

Now let's peek at the table structure for this tango:

```text
applications
    id - integer (the unique ID of your app, not an identity thief)
    name - string (what you call your app, probably something catchy like "Techno Toaster")

environments
    id - integer (the ID of the environment that's as crisp and clean as your code)
    application_id - integer (the ID of your app that this environment serves)
    name - string (what you call the environment, like "Staging" or "Production")

deployments
    id - integer (the unique ID of a deployment, because each deployment is special)
    environment_id - integer (the ID of the environment where this deployment lives)
    commit_hash - string (the unique identifier for this deployment, like a digital fingerprint)
```

Now that we've admired the structure of our relationships, let's define the relationship on the `Application` model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Application extends Model
{
    /**
     * Gather all the deployments for this application.
     */
    public function partyGuests(): HasManyThrough
    {
        return $this->hasManyThrough(Deployment::class, Environment::class);
    }
}
```

In the `hasManyThrough` method, the first argument is the final model we're trying to access (think of it as your long-lost cousin), and the second argument is the intermediate model that knows everyone (the party host).

Or, if the relationships have already been defined on all models involved in this love triangle, you can declare a "has-many-through" relationship more elegantly with the `through` method:

```php
// Using string syntax...
return $this->through('environments')->has('deployments');

// Using dynamic syntax...
return $this->throughEnvironments()->hasDeployments();
```

Although the `Deployment` model's table doesn't have an `application_id`, the `hasManyThrough` relationship helps you access your app's deployments via `$application->partyGuests`. Eloquent, being the smart wingman it is, inspects the `application_id` column on the intermediate `Environment` model's table. Once it finds those environment IDs, it uses them to query the `Deployment` model's table! 🕵️‍♂️

<a name="has-many-through-key-conventions"></a>
Hope this guide made your database relationships more bearable (or at least a little less awkward)! 😉

 Alright, grab your popcorn! Here's a jolly good laugh while we learn about Key Conventions in Laravel. 🎉

#### Jovial Eloquent Foreign Key Tango

Don't you just love it when a dance gets complicated? Well, foreign key relationships are no exception in our Eloquent world! 🕺️💃️ But don't worry, we've got your back.

Typically, Eloquent dances to the rhythm of standard foreign key conventions during the relationship shindig. However, if you fancy a bit of choreography customization, you can pass in those swanky keys as the third and fourth arguments to the `hasManyThrough` method.

1. The third argument is the name of the foreign key on the intermediate model (the plus-one at the dance floor).
2. The fourth argument is the name of the foreign key on the final model (the star of the show).
3. The fifth argument is your local key, while the sixth is your intermediate model's local key. Confused? Let's break it down with a fun example! 🎶

```php
class Application extends Model
{
    public function deployments(): HasManyThrough
    {
        return $this->hasManyThrough(
            Deployment::class, // The star of the show
            Environment::class, // Plus-one on the dance floor
            'application_id', // Foreign key on the environments table...
            'environment_id', // Foreign key on the deployments table...
            'id', // Local key on the applications table...
            'id' // Local key on the environments table...
        );
    }
}
```

Now, if you've already defined the relevant relationships on all the models involved in this three-step waltz, you can dance fluently by invoking the `through` method and supplying the names of those relationships. This approach is akin to reusing the key conventions that have been carefully pre-defined for the existing relationships:

```php
// Strictly ballroom...
return $this->through('environments')->has('deployments');

// Or, if you prefer street dance...
return $this->throughEnvironments()->hasDeployments();
```

And voila! You're all set to dance the night away with Laravel's relationship conventions. 🎉💃️✨

 ### Shiny Relationships in Laravel Land

In our quirky little world, it's quite common for models to sport additional methods that tighten the leash on relationships. Take a `User`, for instance, who may decide to boast a fancy `featuredPosts` method, which, like a strict parent, adds an extra layer of constraint to the free-spirited `posts` relationship with a stern `where` clause:

```php
<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model {
    /**
     * Get the user's posts, neatly arranged in order of appearance.
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class)->latest();
    }

    /**
     * Get the user's best and brightest featured posts.
     */
    public function featuredPosts(): HasMany
    {
        // This is where we draw the line!
        return $this->posts()->where('featured', true);
    }
}
```

However, in the heat of the moment, when you try to birth a model using the `featuredPosts` method, it will forget to set its `featured` attribute to `true`. To avoid such embarrassment and ensure all models born through this relationship are properly decorated, you can employ the `withAttributes` method like a magical fairy godmother when crafting the relationship query:

```php
/**
 * Get the user's featured posts, with an extra sprinkle of 'featured' attribute.
 */
public function featuredPosts(): HasMany
{
    return $this->posts()->withAttributes(['featured' => true]);
}
```

The `withAttributes` method will weave `where` conditions into the query with the provided attributes, and it will also bestow those attributes upon any models spawned through the relationship method:

```php
$post = $user->featuredPosts()->create(['title' => 'A Star is Born']);

// Check if the post is indeed a star (or featured)!
$post->featured; // true
```

To keep the `withAttributes` method from meddling with the query, you can set the `asConditions` argument to a firm `false`:

```php
return $this->posts()->withAttributes(['featured' => true], asConditions: false);
```

 Alrighty, buckle up, code cowboys and cowgirls! You've graduated from the one-night stands of `hasOne` and `hasMany`, now we're diving headfirst into the polyamorous world of many-to-many relationships. It's a bit more complex, but hey, variety is the spice of life, right?

Let's use the tantalizing example of a user who's juggling multiple roles in an app - a veritable circus act! A user might be a "Author" and a "Editor", but don't be surprised if those roles are shared by a cast of thousands. So, a user has numerous roles, and, shockingly, a role can also boast a roster of users. It's like a never-ending game of musical chairs, with roles switching partners as often as the dance music plays!

<a name="many-to-many-table-structure"></a>
Now, let's talk tables - you know, the data structure equivalent of a high school yearbook. To facilitate this love triangle (or square, or pentagon...), Laravel creates two helper tables, often named `users_roles` and `role_users`. These tables function as matchmakers, connecting users to their roles and vice versa, ensuring no one is left out in the cold. So, when a user gets promoted to "Chief Editor", there's a new entry in the `users_roles` table that seals the deal!

But remember, just like any good romance, it takes two to tango - so when you create or update either a user or a role, you need to ensure both tables are kept up-to-date. No hard feelings if you break up, but make sure the breakup is mutual by using Laravel's `detach` and `attach` methods!

And there you have it - many-to-many relationships: the swinger set of data relationships in Laravel. Just remember, with great power comes great responsibility - so play nice, and may your database always be balanced!

 Ahoy there, mateys! Let's dive into the realm of Laravel databases, where we're about to create a swashbuckling trio: `users`, `roles`, and the ever-elusive `role_user`! This last one is like the secret sauce that ties our pirate crew together.

Now, you see, a role isn't just for Captains Morgan anymore. It can be shared among a motley crew of users, which is why we can't simply stick `user_id` in the `roles` table and call it a day. That'd be like saying Captain Hook only had one hand, and we wouldn't want that, now would we?

To ensure our roles can wield their swashbuckling powers across multiple users, we need the `role_user` table. It's got two columns: `user_id` and `role_id`. Just like in a treasure map, it acts as an intermediate guide linking our users and roles!

Here's what our tables look like on paper (or screen, rather):

```text
users
    id - integer (the captain's number)
    name - string (Blackbeard, Long John Silver, etc.)

roles
    id - integer (Pirate, Captain, Cabin Boy, etc.)
    name - string (because we like to get formal even in the high seas)

role_user
    user_id - integer (the captain's number for each crew member)
    role_id - integer (what part they play on the ship)
```

Now that we've mapped out our treasure hunt, you're well on your way to becoming a Laravel database ninja! Arrrr!

 Ahoy there, Laravel shipmates! Buckle up for a wild ride as we dive into the world of many-to-many relationships. These babies are defined by writing a method that returns the result of the `belongsToMany` dance, led by none other than our esteemed base class, `Illuminate\Database\Eloquent\Model`. It's like a giant disco where every model in your app is invited!

Let's say you wanna tango with Roles and Users. You'd define a `roles` method on your `User` model, passing the name of the related model class as the first argument:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Model
{
    /**
     * The roles that belong to the user.
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }
}
```

Once the dancefloor is set, you can grab your partner's (user's) roles using the `roles` dynamic relationship property:

```php
use App\Models\User;

$user = User::find(1);

foreach ($user->roles as $role) {
    // Now we're dancing, partner!
}
```

Since every dance is a query builder, you can add further constraints to the relationship query by calling the `roles` method and continuing to chain conditions onto the dance floor:

```php
$roles = User::find(1)->roles()->orderBy('name')->get();
```

Eloquent will determine the table name of the relationship's intermediate table by joining the two related model names in alphabetical order. But you can always call the shotgun and override this convention:

```php
return $this->belongsToMany(Role::class, 'role_user');
```

And if you want to customize the column names of the keys on the table, just pass additional arguments to the `belongsToMany` method. The third argument is the foreign key name of the model on which you are defining the relationship, while the fourth argument is the foreign key name of the model that you are joining to:

```php
return $this->belongsToMany(Role::class, 'role_user', 'user_id', 'role_id');
```

Now, isn't that a swell way to manage your many-to-many relationships? Happy dancing! 🎉💃🕺

 Alrighty then! Let's get our code cowboy hats on and dive into defining the inverse of a many-to-many relationship, shall we?

#### The Inverse Gallows of Multi-To-Many Relationships

Now, if you've got a posse of models hanging out in a multi-to-many relationship (like our trusty `User` and `Role`), you gotta be able to round up the stragglers, right? To do that, we gotta define the "inverse" gallows. Here's how to lasso that elusive method on your `Role` model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    /**
     * The posse of users that saddled up with this role.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class); // Don't forget to wrangle the User model!
    }
}
```

As you can see, the relationship is as tame as a domesticated prairie dog with its `User` model counterpart, except we've gotta rope in that `App\Models\User` model. Since we're re-riding the `belongsToMany` method, all the usual table and key customization options are still available when defining the inverse of many-to-many relationships.

<a name="retrieving-intermediate-table-columns"></a>
Now, you might find yourself needing to wrangle some columns from that coyote-ridden intermediary table, and I've got just the trick for that! Stay tuned, partner! 🤠

 Alrighty, you clever clogs! By now, you've probably figured out that dealing with many-to-many relationships is like inviting the entire party to your shindig – and an intermediate table acts as the dance floor where they all cut a rug together. Eloquent, our ever-so-helpful dance instructor, shows us some wicked sweet moves to groove with this table!

Let's say you've got yourself a swanky `User` model who's got a whole crew of `Role` models dancing the night away. After we've called them up to the floor, we can grab the name of their first dance (ahem, that'd be the intermediate table) with the help of the magical `pivot` attribute on the models:

```php
use App\Models\User;

$user = User::find(1);

foreach ($user->roles as $role) {
    echo $role->pivot->created_at; // Catchy tunes from your favorite disco era!
}
```

Fancy, right? Each `Role` model gets assigned a `pivot` attribute automatically – it's like having a secret dance partner! This hidden suitor comes equipped with a model representing the dance floor itself.

By default, the dance floor only has keys for dancers – but if your dance floor has extra decorations (read: extra attributes), you gotta specify those when inviting them to the party:

```php
return $this->belongsToMany(Role::class)->withPivot('active', 'created_by');
```

Now, if you fancy a fancier dance floor with timestamps that automatically update like those fancy clocks in old movies, just call the `withTimestamps` method when inviting them to the party:

```php
return $this->belongsToMany(Role::class)->withTimestamps();
```

But remember, if you're gonna use Eloquent's automatic timestamp maintenance, your dance floor better have both a `created_at` and an `updated_at` column to twirl around!

<a name="customizing-the-pivot-attribute-name"></a>

Lastly, if you're feeling frisky, you can rename the `pivot` attribute – because who says dance floors should always be called "dance floors," right? Just use the `withPivot` method when defining the relationship:

```php
return $this->belongsToMany(Role::class)->withPivot('sneaky_moves', 'cool_outfits');
```

Now you're ready to party like it's 1985 (or whenever your favorite disco era was)! Keep on grooving, my friends!

 Alrighty, let's dive into the world of Laravel relationships, shall we? Remember when your grandma used to say "Everything has its place"? Well, in our case, it's more like "Every relationship has a pivot point". That's right, we're talkin' about that magical `pivot` attribute!

But what if you want to give this attribute a more descriptive name? Say, for instance, your app is a podcast paradise where users can binge-subscribe to their favorite shows. In such a case, you might find it fitting to rename the pivot attribute to something like `subscription`. No sweat, Laravel's got your back with the `as` method!

```php
return $this->belongsToMany(Podcast::class)
    ->as('subscription')
    ->withTimestamps();
```

And voila! Your intermediate table attribute is now officially known as 'subscription'. If you want to access the data from this gloriously renamed table, here's how:

```php
$users = User::with('podcasts')->get();

foreach ($users->flatMap->podcasts as $podcast) {
    echo $podcast->subscription->created_at; // or should I say "When did this subscription take place?"
}
```

So there you have it! Customizing the pivot attribute to better fit your app's needs is a breeze in Laravel. But remember, with great power comes great responsibility. Don't go naming attributes after your cat or something...unless your app is about cats, of course. In that case, by all means!

 ### Unleashing the Power of Intermediate Table Filters: The Laravel Way! 🚀

Ever wondered if you could bend those many-to-many relationships to your will, like a Jedi Master wielding a lightsaber? Well, buckle up, because we're about to take your relationship game to the next level! 🎮

You see, with Laravel, you can filter the results of `belongsToMany` relationships through some mystical methods that target those humble columns in your intermediate table. Here's a glimpse into this magical world:

```php
// I approve of these roles! 🤝
return $this->belongsToMany(Role::class)
    ->wherePivot('approved', 1);

// Priority queue, but for roles! 📦
return $this->belongsToMany(Role::class)
    ->wherePivotIn('priority', [1, 2]);

// No more Mr. Nice Role! 🚫
return $this->belongsToMany(Role::class)
    ->wherePivotNotIn('priority', [1, 2]);

// Time travel with podcast subscriptions! ⏳
return $this->belongsToMany(Podcast::class)
    ->as('subscriptions')
    ->wherePivotBetween('created_at', ['2020-01-01 00:00:00', '2020-12-31 00:00:00']);

// Time travel, but with a twist! 🎠
return $this->belongsToMany(Podcast::class)
    ->as('subscriptions')
    ->wherePivotNotBetween('created_at', ['2020-01-01 00:00:00', '2020-12-31 00:00:00']);

// Everlasting subscriptions! 🌟
return $this->belongsToMany(Podcast::class)
    ->as('subscriptions')
    ->wherePivotNull('expired_at');

// Subscriptions that are expired? Not in this galaxy! 😯
return $this->belongsToMany(Podcast::class)
    ->as('subscriptions')
    ->wherePivotNotNull('expired_at');
```

Now, if you're feeling particularly picky and want to apply filters while creating new models via your defined relationship, you can summon the `withPivotValue` method:

```php
// Give these roles the green light! 🚦
return $this->belongsToMany(Role::class)
    ->withPivotValue('approved', 1);
```

In other words, with `wherePivot`, you're adding a where clause constraint to your query, but it doesn't touch the specified value when forging new models via the relationship. If you need both querying and creating relationships with a specific pivot value, the `withPivotValue` method is your trusty sidekick! 🤝💫🚀

 ### The Art of Sequencing: Sorting Your Epic Laravel Quests! 🏹🔥

Ready to embark on a magical journey through the realm of database relations? Buckle up, because we're about to show you the secret sorcery of ordering queries via an enchanted intermediate table column! ✨

First off, let's talk about the `belongsToMany` relationship. Think of it as inviting your fellow adventurers to join your quest (without any awkward "Who's bringing what?" conversations).

But how do we ensure our allies appear in a specific order? Well, dear friend, you have the mighty powers of `orderByPivot` and `orderByPivotDesc` at your disposal! 🧙‍♂️

In this tutorial, we're on a mission to retrieve the shiniest gold badges earned by our brave user, in reverse chronological order (because who doesn't love a bit of drama?). Here's the spellbinding incantation:

```php
return $this->belongsToMany(Badge::class)
    ->where('rank', 'gold')
    ->orderByPivotDesc('created_at');
```

Now, you might be wondering about customizing those intermediate table models. Worry not! That's a whole different tale of adventure, which we'll cover in another epic saga... stay tuned for more Laravel lore! 📜🐲🚀

 Alrighty then, let's dive into the world of custom intermediate table models! If you fancy creating a dashing model to dance between your many-to-many relationship balls, you can use the `using` method during the relationship choreography. Custom pivot models are like the secret sauce that adds flavor to your database dishes, offering you a smorgasbord of possibilities such as custom methods and casts!

For those who prefer their many-to-many relationships spiced up with custom pivot models, remember to extend the `Illuminate\Database\Eloquent\Relations\Pivot` class. But if you're into polymorphic dancing, then `Illuminate\Database\Eloquent\Relations\MorphPivot` is more your cup of tea! Let's say we have a sassy 'Role' model that struts around with a swanky 'RoleUser' pivot model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    /**
     * The users that belong to the role.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->using(RoleUser::class);
    }
}
```

Now, when you're defining your 'RoleUser' model, make sure to extend the `Illuminate\Database\Eloquent\Relations\Pivot` class:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RoleUser extends Pivot
{
    // ...
}
```

<!--- WARNING --->
<!--- Pivot models can't use the SoftDeletes trait. If you need to soft delete pivot records, it might be time for a full-blown Eloquent makeover. --->
<a name="custom-pivot-models-and-incrementing-ids"></a>

<!--- [!WARNING]
    Pivot models may not use the `SoftDeletes` trait. If you need to soft delete pivot records consider converting your pivot model to an actual Eloquent model. --->
<b>[!CAUTION: Caution tape alert]</b> Pivot models are not compatible with the `SoftDeletes` trait. So, if soft deleting pivot records is on your dance card, consider converting your pivot model into a full-fledged Eloquent hoofer!

 Alright, let's dive into the world of custom pivot models and ID shenanigans! 🚀

If you've got a many-to-many relationship that's rocking a swanky custom pivot model (like a trendy outfit at a dance party), and this fashionable model is sporting an auto-incrementing primary key (the cool kid in school with the highest number on their jersey), then it's time to show off your programming finesse! 🕺️

To make sure your custom pivot model class is truly the life of the database party, you need to slap on a sparkling `Table` attribute and set its `incrementing` property to `true`. Here's the runway walk:

```php
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Relations\Pivot;

// Cue the spotlight and put on your best smile
#[Table(incrementing: true)]
class RoleUser extends Pivot
{
    // ...
}
```

And just like that, you've got a custom pivot model that can dance circles around all the other models in town! 💃🕺️✨🎉

 Alrighty then! Buckle up, dear coders, as we delve into the wild world of polymorphic relationships – where one model can belong to multiple types of models with a single association. Picture this: you're crafting an app that's the modern-day equivalent of a digital town square, where folks can swap stories from their blog posts and share their favorite cat videos (because who doesn't love a good feline montage?). In this enchanting landscape, your trusty `Comment` model would be the resident gossip monger, linked to both the dapper `Post` gentleman and the purr-fect `Video` lady.

Now, let's dive into the nitty-gritty, shall we?

<a name="one-to-one-polymorphic-relations"></a>

### One to One Polymorphic Relations

When you want your child model to be exclusive with only one of its parents at a time (because some comments are just that private), you'll have yourself a one-to-one polymorphic relationship. It's like when the town crier has his own secret hideout, known only to himself and that one particularly mysterious townsperson.

To establish this connection in Laravel, you'll need to do a few steps:

1. Define the `morphTo` method on your child model, telling it which parent models it might belong to. This is like posting a Craigslist ad stating you're open to dating any eligible bachelor or bachelorette in town.

2. Declare the `morphMany` method on your parent models, informing them that they might have multiple secret admirers (aka comments). They list their phone numbers on various matchmaking apps and wait for you to call.

3. With these declarations made, you can now create, retrieve, update, and delete the relationship as needed. Think of it like a digital game of musical chairs, where each chair represents a commentable resource (post or video), and the music never stops until all seats are filled with comments!

So there you have it – one-to-one polymorphic relationships demystified and presented in a way that makes Laravel feel like your favorite cat video. Now go forth and build apps that make the world (or at least your town square) a more connected place!

 Alright, buckle up, we're about to dive into the world of Laravel's One-to-One Polymorphic relationships! You know, the dating scene of the database world - where one model can love only one other model, but that other model could be a variety of suitors. Confused? Let's simplify it with a metaphor: Imagine you're a famous popstar (the One model). You have countless fan letters (Eloquent models) from admirers. Each letter can only be from one fan, but each fan could be writing to different stars.

<a name="one-to-one-polymorphic-defining"></a>

Defining a One-to-One polymorphic relationship is as easy as singing a catchy hit. First, let's start with the "suitors" - these are your models that can be associated with other models. For our popstar example, this would be FanLetter model. You need to tell Laravel that it can be associated with multiple types of models by adding `morphTo()` in its migration file:

```php
// fan_letters table migration
public function up()
{
    Schema::create('fan_letters', function (Blueprint $table) {
        $table->id();
        $table->morphTo(); // this allows fan_letters to be associated with different types of models
        $table->timestamps();
    });
}
```

Now, let's create the "suitor" model (FanLetter). We'll tell Laravel that it can be a suitor to multiple "suitables" using `morphMany()`:

```php
// FanLetter model
class FanLetter extends Model
{
    public function suitable()
    {
        return $this->morphTo(); // this allows fan_letters to be associated with different types of models
    }
}
```

Next, we need to define the "suitable" model (Popstar for our example). In your Popstar model, use `morphp()` to specify that it can have one fan letter, and `withTimestamps()` to include created_at and updated_at timestamps:

```php
// Popstar model
class Popstar extends Model
{
    public function myAdmirer()
    {
        return $this->morphOne(FanLetter::class, 'suitable'); // this creates a one-to-one relationship with fan_letters where the suitable type is Popstar
    }
}
```

Now you can access fan letters for a specific popstar:

```php
// Accessing fan letters for a specific popstar
$popstar = App\Popstar::find(1);
$fanLetter = $popstar->myAdmirer; // Eloquent will automatically determine that the suitable type for this relationship should be Popstar
```

And there you have it! You've just learned how to handle Laravel's One-to-One Polymorphic relationships like a pro, or at least like a popstar with a massive fanbase. Happy coding! 🚀🎶

 Alrighty, buckle up! We're about to dive into the fantastical world of Laravel's one-to-one polymorphic relations, where unicorns and dragons share a magical image library with our humble blog posts and users.

Imagine this: A blog post, named Fred (yes, blog posts can have names), is having a photo day and so is your favorite user, Mary Poppins (because everyone's favorite user has an eccentric name). Both need to share some snaps with our enchanted image library. And guess what? This wondrous library isn't just for one type of magical creature!

Now, let's get down to business and have a gander at the table structure:

```text
posts
    id - integer
    name - string (Fred's post title)

users
    id - integer
    name - string (Mary Poppins' full name, of course)

images
    id - integer
    url - string (the address of the magical snapshot)
    imageable_id - integer (ID of either Fred or Mary Poppins, depending on who uploaded the pic)
    imageable_type - string (either "App\Models\Post" for Fred or "App\Models\User" for Mary Poppins)
```

Observe the `imageable_id` and `imageable_type` columns in the `images` table. The `imageable_id` column keeps track of the ID of the post or user, while the `imageable_type` column stores the parent model's class name. When it comes to accessing the `imageable` relation, Eloquent will peer at this `imageable_type` column like a wise librarian sorting books and determine whether to fetch either a blog post or user associated with the image.

And there you have it! A whimsical exploration of one-to-one polymorphic relations in Laravel. Next time, perhaps we'll venture into other realms of magic like many-to-many polymorphic relations or elusive relationship method overrides (yes, they do exist!). Stay tuned, dear reader!

 Alrighty, let's dive into the model definitions for this polymorphic relationship shenanigan!

First up, we've got our cunning little image model, just itching to get its pixels all over some posts and users.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo; // MorphTo: The magic that turns the tables, quite literally!

class Image extends Model
{
    /**
     * If you're wondering who's the parent imageable model (user or post),
     * just ask 'em. They'll morph into whoever they're related to, thanks to our new friend MorphTo.
     */
    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
```

Now, let's meet the star-struck trio: Post, User, and Image! They've got a one-to-one relationship going on, so it's like a romantic comedy where every character only has one love interest. Cue the swooning and rose petals!

```php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne; // MorphOne: The special sauce that makes each post, user have their very own image.

class Post extends Model
{
    /**
     * This model is like a blind date with an Image, but with MorphOne magic, they always find each other!
     */
    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable'); // The imageable bit makes it clear they're the one for this post.
    }
}

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class User extends Model
{
    /**
     * Users have a 'one true image' policy, and MorphOne makes sure the right Image comes knocking!
     */
    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable'); // Yep, still the same deal. They know who they want!
    }
}
```

Now that we've introduced our lovebirds, let's move on to retrieving the relationship. It's like a matchmaker service, but in code form!

<a name="one-to-one-polymorphic-retrieving-the-relationship"></a>

```php
$post = App\Models\Post::find(1);
$post->image; // This returns the Image for this post.

$user = App\Models\User::find(2);
$user->image; // And voila! The image for this user.
```

And there you have it, folks! A one-to-one polymorphic relationship, all dressed up in a witty, romantic comedy kind of way. Just remember to keep the MorphTo and MorphOne close, they're your ticket to love (or at least matching images to their parents). Happy coding! 🎶💫🚀

 Alrighty then! Once you've got your database tables and models all squared away, it's time to dance with those relationship matrices. Let's say you're looking for the perfect snap to go with that scintillating post – no problemo! We can access the `image` dynamic relationship property like so:

```php
use App\Models\Post;

$post = Post::find(1);

$picture = $post->image; // Now you've got a picture that's as sharp as your wit!
```

Now, if you're dealing with a polymorphic model (the database equivalent of a shapeshifter), things can get a little... peculiar. To find the grandmaster behind the polymorphic illusion, we need to access the name of the method that calls `morphTo`. In this case, it's the `imageable` method on our dear old friend, the `Image` model:

```php
use App\Models\Image;

$image = Image::find(1);

$owner = $image->imageable; // Now you know who's responsible for that picture – it ain't no magic trick!
```

The `imageable` relation on the `Image` model will return either a `Post` or `User` instance, depending on which type of model owns the image. And there you have it – relationships demystified and served with a side of humor!

<a name="morph-one-to-one-key-conventions"></a>

(Now let's get down to the nitty gritty – key conventions for morph-one-to-one relations)

In case you find yourself in a situation where your polymorphic relationship is of the one-to-one variety, there are a few key convention guidelines to keep in mind:

1. The foreign key on the dependent model (in this case, the `Image` model) should be named using the singular form of the parent model's name followed by `_id`. For example, if your parent model is called `Post`, the foreign key on the `Image` model would be `post_id`.

2. The local key on the parent model should be named with a prefix that matches the singular form of the dependent model's name followed by `_id`. Using our `Post` and `Image` example, the local key on the `Post` model would be `image_id`.

3. If you decide to use a different name for the foreign key on the dependent model (perhaps because it's already taken), you'll need to specify that foreign key in your `morphTo()` method call on the parent model, like so:

```php
use App\Models\Image;

class Post extends Model {
    public function image() {
        return $this->morphOne(Image::class, 'imageable_with_another_name');
    }
}
```

 Alright, let's dive into the world of Laravel where unicorn tears are used as database oil and mythical beasts roam free in your codebase!

#### Key Conventions (that are actually quite sensible)

If you find yourself needing to name the "id" and "type" columns for your polymorphic offspring model, don't forget to always pass the relationship name as the first argument to the `morphTo` method. This value should ideally be a matchy-matchy version of the method name, so you can leverage PHP's `__FUNCTION__` constant:

```php
/**
 * Discover the magical creature that this image is enchanted by.
 */
public function creatureEnchanter(): MorphTo
{
    return $this->morphTo(__FUNCTION__, 'creature_enchanter_type', 'creature_enchanter_id');
}
```

<a name="one-to-many-polymorphic-relations"></a>
(Drumroll, please!) The exciting world of one-to-many polymorphic relations! Here, a single model can have multiple child models that belong to different types. It's like inviting an entire orc horde over for dinner, but only because they're bringing their own plates!

To establish this magical connection, simply use the `hasMany` method in combination with the `morphMany` method:

```php
/**
 * Get all the enchanted items that the magical creature possesses.
 */
public function enchantedItems()
{
    return $this->morphMany(Item::class, 'enchanter');
}
```

Remember, in the polymorphic relationship world, the parent is always right (and the child obeys)! So it's essential to use the `belongsTo` method when defining your child model relationships:

```php
/**
 * Get the magical creature that enchants this item.
 */
public function enchanter()
{
    return $this->belongsTo();
}
```

And there you have it! Now, go forth and conquer the Laravel kingdom with your newfound knowledge of polymorphic relations! Just remember to always bring a dragon-repellent umbrella – you never know when those mythical beasts might get rowdy!

 **Oh, the glamorous life of a Laravel model!** 🌃 🎉

One day you're just hanging out in your cozy table, minding your own business, when all of a sudden... *BOOM!* Enter the world of polymorphic relationships! 💣 🚀

**One to Many (Polymorphic) Relationships: The VIP pass to relationship parties**

In this star-studded affair, one model can have many relationships with multiple types of other models. It's like being the life of every party and not having to choose just one type of friend! 🤩 💃 🕺

But why would you want to do this, you ask? Well, my friend, let me paint a picture for you:

Imagine you have a `Comment` model. Now, traditionally, comments are attached to either blog posts or images. But what if you want to allow users to comment on their favorite jokes as well? Enter polymorphic relationships!

With polymorphic relationships, you can have your `Comment` model belong to many different types of models (blog posts, images, and jokes in this case), all while keeping a clean and organized database structure. 🧱🏗️

Now, let's get our hands dirty and set up a polymorphic relationship!

<a name="one-to-many-polymorphic-defining-the-relationship"></a>

**Defining the Relationship: A match made in database heaven**

First, you need to define your relationship in both models that will be involved. In our example, we'll add `belongsToMany` and `morphToMany` methods to our `Comment` and `Commentable` (the models being commented on) classes:

```php
// Comment Model
public function commentables() {
    return $this->morphToMany(Commentable::class, 'commentable');
}

// Commentable Models (BlogPost, Image, Joke)
public function comments() {
    return $this->morphMany(Comment::class, 'commentable');
}
```

In the code above, we're saying that a `Comment` can belong to many different `Commentable` models (blog posts, images, and jokes), and each `Commentable` model has many comments. The `morphToMany` and `morphMany` methods help Laravel identify which tables should be used for the intermediate table and pivot table, making it all just a little less overwhelming. 🤯

<a name="one-to-many-polymorphic-migrations"></a>

**Migrations: Building the dance floor**

Next, you'll need to create a migration for your intermediate table:

```bash
php artisan make:migration create_commentable_comments_table --create=commentables_comments_table
```

Open up the newly created migration file and define the structure of your intermediate table:

```php
public function up() {
    Schema::create('commentables_comments', function (Blueprint $table) {
        $table->id();
        $table->foreignId('comment_id');
        $table->morphId();
        $table->timestamps();

        $table->unique(['comment_id', 'morph_id']);
    });
}
```

Here we're creating a table with an id, the foreign key for our comments (`comment_id`), a morph id representing the type of model the comment is related to (`morph_id`), and timestamps. The unique constraint ensures that each combination of `comment_id` and `morph_id` is unique, thus preventing duplicate relationships. 🕵️‍♂️

<a name="one-to-many-polymorphic-example"></a>

**Example: Putting it all together**

Now that everything's set up, let's create a comment for our blog post and an image. Don't worry, I'll show you how:

```php
// Creating a Comment for a Blog Post
$comment = Comment::create(['content' => 'Great post!']);
$blogPost = App\Models\BlogPost::find(1);
$blogPost->comments()->attach($comment->id, ['score' => 5]);

// Creating a Comment for an Image
$image = App\Models\Image::find(2);
$comment = Comment::create(['content' => 'Love the photo!']);
$image->comments()->attach($comment->id, ['score' => 4]);
```

And there you have it! You've just created a polymorphic relationship in Laravel. Now go forth and conquer multiple types of relationships with ease and grace! 🤩💪🚀

 Alright, let's get this party started! Imagine you're running a wildly popular social media platform where users can leave comments on posts and videos. But instead of having separate comment sections for each, why not unite them in one grand, glorious Comment Bowl? Enter the world of Laravel's polymorphic relationships - the dating service that connects your comments with their parent entities (posts and videos), without any commitment issues!

Now, let's take a gander at the table structures required to create this enchanting relationship:

```text
posts
    id - the crown jewel of integers
    title - the tantalizing text that grabs attention
    body - the juicy details, best consumed in moderation

videos
    id - another integer, but with more flashy lights and explosions
    title - a captivating headline for your cinematic masterpiece
    url - the magical link to your video kingdom

comments
    id - a unique ticket to the Comment Bowl
    body - the hilarious or heartfelt words that'll be immortalized in our hall of fame (or infamy)
    commentable_id - the ID of the post or video being commented on, think of it as a virtual autograph
    commentable_type - the type of model commenting, either 'App\Post' or 'App\Video', a little like picking out your favorite flavor of ice cream!
```

Happy coding, folks! Let the Comment Bowl reignite the fire of conversation on your platform! 🔥💬🚀

 Alrighty then! Let's dive into the model definitions for this poly-amorous relationship situation we've got going on here. (You know, like when one post or video needs to date multiple comments) 😎

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Comment extends Model
{
    /**
     * Find out who this comment's significant other is (post or video).
     */
    public function soulmate(): MorphTo
    {
        return $this->morphTo();
    }
}

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Post extends Model
{
    /**
     * Meet all the comments that have a crush on you.
     */
    public function admirers(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Video extends Model
{
    /**
     * Get a hold of all the comments who find you intriguing.
     */
    public function stalkers(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
```

Now, if you're curious about how to fetch these relationships, you can check out the [One-to-many polymorphic retrieving the relationship](#one-to-many-polymorphic-retrieving-the-relationship) section. 😉

 Alrighty, let's get this party started! So you've got your database tables and models all sussed out like a digital Swiss watch. Now it's time to dance with the data like John Travolta on the dance floor (without causing too much chaos, of course).

To access the comments for a post, you can use your model's dynamic relationship properties - think of them as the bouncers at a cool club, letting only relevant data through. For instance:

```php
use App\Models\Post;

$post = Post::find(1);

foreach ($post->comments as $comment) {
    // ...
}
```

And if you're dealing with a polymorphic relationship, things get a bit more like a twisted soap opera. To find the parent of a polymorphic child model, look no further than the method that calls `morphTo`. In our case, it's the 'commentable' method on the 'Comment' model. So, we'll use this as a secret VIP backstage pass to access the comment's parent model:

```php
use App\Models\Comment;

$comment = Comment::find(1);

$commentable = $comment->commentable;
```

The 'commentable' relation on the 'Comment' model will return either a 'Post' or 'Video' instance, depending on which type of model is the comment's parent. It's like playing musical chairs, but with data instead of furniture! 🤯🚀

 Alright, let's dive into the world of Laravel Eloquent, where database relationships are as cozy as a pair of well-worn slippers. But beware! Even with eager loading, you might stumble upon the infamous "N + 1" query problem - it's like that pesky relative who insists on joining every family gathering, uninvited.

Here's an example where we're trying to access a parent model from a child model while looping through the kids:

```php
$posts = Post::with('comments')->get();

foreach ($posts as $post) {
    foreach ($post->comments as $comment) {
        echo $comment->commentable->title; // This is where our problem starts
    }
}
```

In this scenario, we've accidentally introduced an "N + 1" query issue. Eloquent, despite eager loading comments for every `Post`, didn't automatically set up the parents for their offspring (err... children).

Now, don't worry! Laravel provides a solution that's as easy as a well-timed dad joke. To make Eloquent auto-hydrate parent models onto their kids, you can employ the `chaperone` method when defining a `morphMany` relationship:

```php
class Post extends Model
{
    /**
     * Get all of the post's comments.
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable')->chaperone();
    }
}
```

Or, if you prefer to opt-in to automatic parent hydration at runtime, you can do it when eager loading the relationship:

```php
use App\Models\Post;

$posts = Post::with([
    'comments' => fn ($comments) => $comments->chaperone(),
])->get();
```

Remember, with great power comes great responsibility (and jokes!). So, be sure to use the `chaperone` method wisely and enjoy your optimized Laravel relationships. Happy coding!

 ### The One Among Many (Polymorphic)

Let's face it, sometimes one model can have many friends but you just want to hang out with the coolest or oldest one. For instance, a `User` could be associated with numerous `Selfie` models, but you might wanna casually scroll through their latest self-portrait instead of rummaging through the entire collection. Fear not! With the `morphOne` relationship type and `ofMany` methods, you can make this as easy as ordering a double espresso on a busy Monday morning.

```php
/**
 * Grab the user's hottest selfie (or most recent if they're camera shy).
 */
public function trendiestSelfie(): MorphOne
{
    return $this->morphOne(Selfie::class, 'postable')->latestOfMany();
}
```

Similarly, you can define a method to find the selfie that's been around the longest:

```php
/**
 * Find the user's vintage selfie (or the first one if they're a newbie).
 */
public function oldestSelfie(): MorphOne
{
    return $this->morphOne(Selfie::class, 'postable')->oldestOfMany();
}
```

By default, our clever little helpers `latestOfMany` and `oldestOfMany` will find the coolest or oldest selfie based on the timestamp of creation. However, sometimes you might want to sort through the selfies using a different criteria - maybe the one with the most likes. No problem! With the `ofMany` method, you can grab the user's Insta-famous selfie:

```php
/**
 * Get the user's selfie with the most likes (or is it hearts now?).
 */
public function bestSelfie(): MorphOne
{
    return $this->morphOne(Selfie::class, 'postable')->ofMany('likes', 'max');
}
```

> [!NOTE]
> If you're looking to create more sophisticated "one among many" relationships, please refer to the [has one of many documentation](#advanced-has-one-of-many-relationships).

<a name="advanced-has-one-of-many-relationships"></a>

Now, don't be shy! Get out there and start building your own polymorphic relationships like a Laravel pro! And remember, it's all about having fun while getting things done - just like coding a killer app on a busy Monday morning.

 Alright, buckle up, coding cowboys and cowgirls! We're about to dive into the wild west of Laravel relationships - the Many-to-Many Polymorphic! Imagine a dusty frontier town where one saloon might have many patrons (posts), who in turn might be cowboys, outlaws, or even singing bards (models).

<a name="many-to-many-polymorphic-table-structure"></a>

First off, let's set up the tables. In this town, we've got a `role_players` table that acts as our intermediary. It keeps track of who's who and what they do by storing three crucial pieces of information: the player (post), the role (model), and the pivot (default 'pivot' key).

Here's a peek at our `role_players` table structure:

```
id - int - primary key
player_id - int
model_type - string
model_id - int
pivot - mixed (as the pivot column in polymorphic relationships may contain any value)
```

<a name="defining-polymorphic-relationships"></a>

Now, let's define these relationships! In our saloon (Post), we'll create `belongsToManyPolymorphic` method to represent each patron and their roles:

```php
class Post extends Model {
    public function roles() {
        return $this->morphMany(Role::class, 'role_player');
    }
}
```

On the flip side, in our roles (traits), we'll define a `belongsTo` method to find out who plays which role:

```php
trait HasRoles {
    public function player() {
        return $this->morphTo();
    }
}
```

Now, you can saddle up and create different types of roles like cowboys, outlaws, and singing bards (Eloquent models)! Just make sure they follow the `HasRoles` trait, and your Laravel town will be a bustling hub of diverse relationships.

```php
class Cowboy extends Model {
    use HasRoles;
}

class Outlaw extends Model {
    use HasRoles;
}

class Bard extends Model {
    use HasRoles;
}
```

<a name="attaching-and-detaching-roles"></a>

Attaching and detaching roles is as easy as herding cats in this frontier! You can assign roles to a post (saloon) or remove them with a few lines of code:

```php
$post = Post::find(1); // Find our saloon

// Assign the cowboy and outlaw roles to our saloon
$cowboyRole = Cowboy::find(2)->roles()->attach($post);
$outlawRole = Outlaw::find(3)->roles()->attach($post);

// Remove a role from the saloon
$bardRole = Bard::find(4)->roles()->detach($post);
```

And that's the lowdown on Laravel's Many-to-Many Polymorphic relationships! It's as dynamic and versatile as the wild west itself, allowing you to build complex, interconnected structures for your applications. Happy coding, partners!

 Alright, buckle up, dear developers! We're about to embark on an exciting journey into the world of many-to-many polymorphic relations - the party animal of database relationships. Let's picture this: you've got a wild and rowdy `Post` and a sleek, silky `Video`, both craving for attention from the same sultry `Tag`. But unlike a regular threesome, our dynamic duo can share up to *many* tags, and guess what? They can even do this with other models too!

First off, let's take a peek at the dance floor where our models will be mingling – aka, the table structure:

```text
posts
    id - integer (the disco ball)
    title - string (what they say when they introduce themselves)

videos
    id - integer (the DJ console)
    title - string (their catchy tune)

tags
    id - integer (a glittering sequin)
    name - string (their dance move)

taggables
    tag_id - integer (the glue that binds them all together)
    taggable_id - integer (the dancer on the floor)
    taggable_type - string (the genre of their music: 'post' or 'video')
```

Remember, before you hit the dancefloor, it wouldn't hurt to brush up on the basics of regular many-to-many relationships [right here](#many-to-many). Now that we've got that out of the way, let's get down to some serious partying! 💃🎉💪

 Alright, buckle up, because we're about to dive into the world of model relationships! Picture this: it's like setting up a global networking event where everyone can mingle and connect - that's exactly what `morphToMany` does for our models in Laravel land.

First off, let's get our `Post` and `Video` models ready to party. They'll each have a cool new buddy named `tags`, who they can dance with thanks to the `morphToMany` move provided by Eloquent, the main dancer of our database routines.

The `morphToMany` step requires two things: the name of the partner model (in this case, it's `Tag`) and a relationship nickname that we'll call "taggable" since that's what we named our dance floor (a.k.a., the intermediate table).

Here's how our `Post` model pulls off the move:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Post extends Model
{
    /**
     * Get all the tag friends for this post.
     */
    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
```

Now that our models know how to find their tags, they can start partying and you can rest easy knowing your data relationships are smoothly set up! But wait, there's more! If you want to define the inverse of a many-to-many relationship (which is like asking your tag friend who else they're dancing with), check out the section on defining the inverse of the relationship below. 😉

 Alright, buckle up, because we're about to dive into the thrilling world of Laravel's inverse polymorphic relationships!

Let's pretend you're a tag in a party game where everyone is trying to find their soulmate (or in this case, model). In our scenario, that soulmate could be any one of your possible parents — posts or videos. To signal our intent, we need to send out some flirty signals, AKA defining methods for each potential suitor.

In this case, let's create a `mixTape` (posts method) and a `playlist` (videos method) to woo them with style:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Tag extends Model
{
    /**
     * Find all the posts who've added you to their mixTape.
     */
    public function mixTape(): MorphToMany
    {
        return $this->morphedByMany(Post::class, 'taggable');
    }

    /**
     * Discover all the videos who've added you to their playlist.
     */
    public function playlist(): MorphToMany
    {
        return $this->morphedByMany(Video::class, 'taggable');
    }
}
```

Just like in real-life dating, the `morphedByMany` method plays cupid here. It accepts the name of your potential suitor (related model) and a relationship name we decided to call "taggable". So now you know who's been adding you to their playlists or mixTapes! 🎶

 Alrighty then! Let's dive into the enchanting world of Laravel relationships, where models and databases get all lovey-dovey. First things first, you gotta define your database table and models like a well-choreographed dance routine. Once that's done, it's time to waltz with those relationships!

For instance, if you're hankering after a post's tags (who isn't?), just whip out some PHP magic:

```php
use App\Models\Post;

$post = Post::find(1); // Let's assume 1 is the number of your post's crush

foreach ($post->tags as $tag) { // Here comes the tag parade!
    // ...
}
```

Now, if you're dealing with polymorphic relations (the polyamorous ones in the database world), you gotta access the parent from the child model by using a method that calls `morphedByMany`. Don't worry, it's not as complicated as it sounds! Let's take the `Tag` model for example:

```php
use App\Models\Tag;

$tag = Tag::find(1); // Found the one!

foreach ($tag->posts as $post) { // It seems our tag's got a thing for posts...
    // ...
}

foreach ($tag->videos as $video) { // Oh, it also has a soft spot for videos!
    // ...
}
```

Now that you know how to play this game of love, go forth and build relationships that'll make your database proud! And remember: in the world of Laravel, there are no wrong numbers – only unmatched relationships. 😉

 ### Polymorphic Party Animals: Breaking the Shackles of Model Names! 🦁🐘

By nature, Laravel will store model type as the full, fancy dinner jacket-wearing, tuxedo-donning class name in the `commentable_type` column. For instance, if a `Comment` is invited to hang out with either a `Post` or a `Video`, the default `commentable_type` would be something along the lines of `App\Models\Post` or `App\Models\Video`. But what fun is that? You might want to spice things up and serve these party animals drinks named after themselves instead!

Instead of calling out their full names, we can serve them simple cocktail names such as "post" and "video". This means that the polymorphic "type" column values in our database will survive even if a rename night turns into a rebranding bash:

```php
use Illuminate\Database\Eloquent\Relations\Relation;

Relation::enforceMorphMap([
    'post' => 'App\Models\Post',
    'video' => 'App\Models\Video',
]);
```

Feel free to drop this at the start of your `boot` party at `App\Providers\AppServiceProvider`. If you want to host a separate soiree, create a new provider!

To find out which cocktail a given model has been served (or "morph aliased"), use the model's `getMorphClass` method. Conversely, if you need to know what fancy dinner jacket goes with a particular cocktail alias, employ the `Relation::getMorphedModel` method:

```php
use Illuminate\Database\Eloquent\Relations\Relation;

$drink = $post->getMorphClass(); // Cocktail time!

$dinnerJacket = Relation::getMorphedModel($drink); // Suit up, buddy!
```

> [⚠️ WARNING]
> When adding a "morph map" to your existing application, every morphable `*_type` column value in your database that still contains a fancy dinner jacket will need to be converted to its "map name". This may require some extensive social networking and a refresher on how to explain a joke.

 ### Dynamic Duos: The Elusive Bond between Laravel Models

Sometimes, love knows no bounds and even models need a little help finding their soulmates... or customers. That's where our secret weapon, the `resolveRelationUsing` method, comes into play! This clandestine technique lets you forge relationships between Eloquent models on the fly. While it's not exactly the first dance at the prom of normal app development, it can be quite the charmer when working your magic on Laravel packages.

The `resolveRelationUsing` method is a pick-up artist that takes two arguments: the relationship name as its first date (er, argument), and a closure that's been invited to the party by the second call. This suave gentleman will then charm the model instance, returning a legit Eloquent relationship definition that's ready to mingle. Typically, you should set up these dynamic dates within the boot method of a [service provider](/docs/{{version}}/providers):

```php
use App\Models\Order;
use App\Models\Customer;

// Order: "I've been hoping to meet your parent company."
// Customer: "Oh, you mean my id number?"
Order::resolveRelationUsing('customer', function (Order $orderModel) {
    return $orderModel->belongsTo(Customer::class, 'customer_id');
});
```

> [!ATTENTION]
> When setting up a relationship, always make sure to give the Eloquent relationship methods your explicit key name. It's like telling someone your real name on the first date!

<a name="querying-relations"></a>
*Now you're ready to dive into some database dating!*

 ## Relation Shenanigans with Eloquent! 🎭💃

In this crazy world of Laravel, relationships aren't just about cupid connecting models, they're more like the ultimate party planner - setting up the scene without even showing up to the event! Since all relations are methodically defined, you can call these methods like inviting your coolest friends over for a shindig...without actually making them show up until you really need them.

Let me paint you a picture of our hypothetical blogging extravaganza where users and posts engage in a scintillating dance:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    /**
     * Get all the post-its for this user (wink wink).
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
```

Now, let's say you need to find the active posts by our superstar user with ID 1. Here's how you throw down a relation query:

```php
use App\Models\User;

$user = User::find(1);

$user->posts()->where('active', 1)->get();
```

In essence, this is like throwing a house party and inviting only the 'active' friends! And the best part? You can use all of Laravel's [query builder's](/docs/{{version}}/queries) methods on these relations to add more guests or change the music. Just remember to consult the query builder documentation for a list of all possible dance moves, errr...methods!

<a name="chaining-orwhere-clauses-after-relationships"></a>

That being said, don't get carried away with chaining `OR WHERE` clauses after relationships because they may end up causing a disco fever or two (a.k.a. a SQL error)! 💃🎶

 Alright, let's get this party started!

#### Chaining `orWhere` Clauses After Relationships: The Dance of the Database Queries

Ever felt like you were a Maestro conducting an orchestra of SQL queries? Well, buckle up, because we're about to add some sizzling `orWhere` clauses to our relationship repertoire!

You see, your Laravel model is like that lead singer who can ask for an encore, but remember, when you start chaining those `orWhere` clauses onto a relationship, it's like inviting the backup dancers to take the spotlight. The catch? They might just steal it from our star performer!

Here's what we mean:

```php
$user->posts()
    ->where('active', 1)
    ->orWhere('votes', '>=', 100)
    ->get();
```

This little ditty will generate some SQL that's a bit like the chaos of a dance floor at last call: it wants _any_ post with more than 100 votes, not just those from our specific user.

```sql
select *
from posts
where user_id = ? and active = 1 or votes >= 100
```

Not exactly the polished performance we were hoping for! But don't fret, because we have a solution as simple as a well-timed twirl: logical grouping!

```php
use Illuminate\Database\Eloquent\Builder;

$user->posts()
    ->where(function (Builder $query) {
        return $query->where('active', 1)
            ->orWhere('votes', '>=', 100);
    })
    ->get();
```

With our new logical grouping moves, the SQL now returns a neatly choreographed performance that keeps our query focused on the right user:

```sql
select *
from posts
where user_id = ? and (active = 1 or votes >= 100)
```

And there you have it! A harmonious blend of SQL queries, Laravel magic, and a touch of humor. Now go forth and chain those `orWhere` clauses with confidence!

 Alright, buckle up, because we're about to dive into the thrilling world of Laravel relationships! 🚀

First off, let's talk about the casual encounter between models - when no big demands are on the table. If you're just hanging out with your `User` and `Post` pals, and there's no need for a third-party intervention (like additional constraints), you can hook up and access the relationship as if it were a regular ol' property.

```php
use App\Models\User; // Yes, this is like introducing your friends to one another! 🤝

$user = User::find(1); // Finding user number 1, just like looking up an old friend in the phone book!

foreach ($user->posts as $post) { // Now we're scrolling through all their posts together! 📜
    // ...
}
```

Now, let's move on to those mysterious cats with nine lives – dynamic relationship properties. These little charmers practice "lazy loading," which means they'll only bring out the big guns (relationship data) when you actually ask for it. So, if you know your `User` is going to introduce you to all their `Post` pals eventually, developers often pre-load the relationships using [eager loading](#eager-loading). Eager loading helps save on awkward small talk by reducing the number of SQL queries required to load a model's relations.

<a name="querying-relationship-existence"></a>
And finally, if you're curious about whether or not your `User` has any `Post` friends at all, Laravel provides an easy way to check that out without having to ask them directly! 🤥

```php
if ($user->posts->count() > 0) { // Checking if they have any posts is like asking a friend if they've got any funny stories to share!
    // ...
}
```

 Alright, let's dive into the thrilling world of Laravel Relationship Queries! Ever found yourself in a situation where you want to fish for blog posts that have more comments than a fishmonger's counter? Or maybe you're in search of posts that are as image-heavy as a National Geographic article? Well, buckle up, because we've got the perfect bait for you!

First things first, imagine you're at a party and you want to strike up conversations with people who have at least one hilarious joke. You can do this by using our `has` method:

```php
use App\Models\Post;

// Find posts that are guaranteed to make you laugh...
$posts = Post::has('jokes')->get();
```

Now, if you're picky and want only the funniest jokes (3 or more), we've got you covered:

```php
// Search for posts that have a solid lineup of 3+ knee-slappers...
$posts = Post::has('jokes', '>=', 3)->get();
```

Things get even more interesting with nested relationships. Let's say you want to find posts that have at least one joke that involves a pun:

```php
// Find posts that will leave you rolling in the aisles of laughter...
$posts = Post::has('jokes.puns')->get();
```

If you're feeling extra sneaky, you can use `whereHas` to inspect the content of your jokes:

```php
use Illuminate\Database\Eloquent\Builder;

// Find posts that involve a pun about programming...
$posts = Post::whereHas('jokes', function (Builder $query) {
    $query->where('content', 'like', 'code%');
})->get();
```

And if you want to go all-in and only keep the posts with at least 10 puns about programming, we've got your back:

```php
// Find posts that will have you laughing for hours on end...
$posts = Post::whereHas('jokes', function (Builder $query) {
    $query->where('content', 'like', 'code%');
}, '>=', 10)->get();

<a name="important-note"></a>
<!WARNING>
Remember, it's not possible to query for relationship existence across different databases. The relationships must exist within the same database as your posts, just like how you can't borrow jokes from your funny friend and claim them as your own at a party. That'd be rude!

 #### Many to Many Relationship Shenanigans Queries 🤘

Got a hankering for models that are tangled up in a many-to-many relationship with another model or posse of models? No worries, Laravel's got your back! 🦸‍♂️

```php
$users = User::whereAttachedTo($role)->get(); // Hang on, we're querying for users who've joined the party with this role 🎉

```

Fancy something a bit more sophisticated? You can supply a [collection](/docs/{{version}}/eloquent-collections) instance to the `whereAttachedTo` method. Laravel will then retrieve models that are attached to any of the models within the collection:

```php
$tags = Tag::whereLike('name', '%laravel%')->get(); // We've gathered some 'laravel' tags, now let's find posts that have stuck them on 📎

$posts = Post::whereAttachedTo($tags)->get(); // Bingo! These are the posts our tags are attached to 💣
```

<a name="inline-relationship-existence-queries"></a>

Stay classy, Laravelers! 🥳

 #### Relationship Existence Queries: The One-Liners That'll Make Your Database Dance!

If you're the kind of developer who enjoys a bit of one-liner magic to spice up your queries, then grab your wand and prepare for some enchantment! Our `whereRelation`, `orWhereRelation`, `whereMorphRelation`, and `orWhereMorphRelation` methods are here to make your life easier. Ever wanted to find all posts with unapproved comments? Fear no more, my friend!

```php
use App\Models\Post;

// This is like casting a spell on posts that'll only select those with unapproved comments
$posts = Post::whereRelation('comments', 'is_approved', false)->get();
```

Just like our trusty `where` method, these enchanted helpers also allow you to specify an operator:

```php
// Looking for posts with comments created within the last hour? No problem!
$posts = Post::whereRelation(
    'comments', 'created_at', '>=', now()->minus(hours: 1)
)->get();
```

And the best part? This is just the beginning of the magical journey. Let's get this query party started! 🎉🎈🎉

 Alright, let's dive into the world of Laravel relationships! Imagine you're at a party and you want to find all the folks who aren't talking to each other (blog posts without comments, if you will). No worries, Laravel has got your back with its delightful `doesntHave` method!

```php
use App\Models\Post;

$posts = Post::doesntHave('comments')->get();
```

But wait, there's more! If you're a power user who enjoys spinning plates (or just really like adding constraints to your queries), the `whereDoesntHave` and `orWhereDoesntHave` methods are here for you. Let's say you want to filter out posts with comments containing 'code'.

```php
use Illuminate\Database\Eloquent\Builder;

$posts = Post::whereDoesntHave('comments', function (Builder $query) {
    $query->where('content', 'like', 'code%');
})->get();
```

Feeling adventurous? You can even query nested relationships, like finding posts where comments aren't from banned users.

```php
use Illuminate\Database\Eloquent\Builder;

$posts = Post::whereDoesntHave('comments.author', function (Builder $query) {
    $query->where('banned', 1);
})->get();
```

So, next time you're at a party and need to find the anti-social posts or comments from unbanned users, remember Laravel's `doesntHave`, your new best friend in the world of relationships! 🎉🥳

 ### Unraveling the Mystery of Morph To Relationships

In a world where data types roam free and intermingle, we need a super sleuth to keep track. Enter Laravel's `whereHasMorph` and `whereDoesntHaveMorph`, the dynamic duo that solves the case every time!

To use them, simply pass the name of your relationship as the first argument - it's like whispering secrets in their ears. Then, list the suspect models (Post or Video in this instance) you wish to investigate. Lastly, a closure is given to customize the relationship query, like a fine-tuned magnifying glass for those pesky details:

```php
use App\Models\Comment;
use App\Models\Post;
use App\Models\Video;

// Gathering comments on posts or videos with titles starting code...
$comments = Comment::whereHasMorph(
    'commentable', // "He's the one with the funny mustache!"
    [Post::class, Video::class],
    function ($query) { // "And he was seen near a 'title' like this..."
        $query->where('title', 'like', 'code%');
    }
)->get();

// Catching comments on posts with titles NOT starting code...
$comments = Comment::whereDoesntHaveMorph(
    'commentable', // "I heard it wasn't this guy..."
    Post::class,
    function ($query) {
        $query->where('title', 'like', 'code%');
    }
)->get();
```

On occasion, you might need to add constraints based on the relationship's "type." The closure passed to `whereHasMorph` will receive a `$type` value as its second argument, giving you a chance to inspect the "type" of the query:

```php
// Sleuthing comments on posts or videos with titles starting code...
$comments = Comment::whereHasMorph(
    'commentable', // "I'm looking for this fellow here..."
    [Post::class, Video::class],
    function (Builder $query, string $type) {
        $column = $type === Post::class ? 'content' : 'title'; // "...and this column seems to be the key!"

        $query->where($column, 'like', 'code%');
    }
)->get();
```

Ever wanted to question the children of a Morph To relationship's parent? With `whereMorphedTo` and `whereNotMorphedTo`, you can! These methods automatically determine the proper morph type mapping, making them expert interrogators:

```php
$comments = Comment::whereMorphedTo('commentable', $post) // "I think this might be our guy..."
    ->orWhereMorphedTo('commentable', $video) // "Or perhaps it's this one!"
    ->get();
```

 Ah, the magical world of Laravel queries! Where eloquence meets databases and sparks fly with every line of code! 🎇🚀

Now, instead of feeding Laravel an array of potential polymorphic models that could leave you in a pickle, just throw in a little '*' as your wildcard buddy. This clever trick tells Laravel to dive deep into the database and fetch all those juicy polymorphic types. But be warned, this operation might require another dance with the database, so get ready for an extra serving of SQL goodness! 🍽️🤖

```php
use Illuminate\Database\Eloquent\Builder;

$comments = Comment::whereHasMorph('commentable', '*', function (Builder $query) {
    $query->where('title', 'like', 'foo%'); // Just like a good pizza, our titles should have that delicious 'foo' flavor! 🍕🤓
})->get();
```

Remember, this is the perfect recipe for getting all comments related to any model with a title containing 'foo'. Now go out there and conquer those databases like a Laravel superhero! 💪💻🦸‍♂️

 ## Counting Your Chickens Before They've Egg-sploded! (A Guide to Aggregating Related Models)

Welcome, brave Laravel explorers, to the tantalizing world of aggregation! Here we delve into the fascinating art of counting your chickens before they hatch, or in Laravel terms, **aggregating related models**.

<a name="counting-related-models"></a>

### Counting Related Models

Counting your chicks is a classic endeavor, but what happens when you're dealing with poultry of different varieties? Fear not! Laravel provides an elegant solution through the power of Eloquent relationships. Let us embark on a brief journey and discover how to count chickens, turkeys, ducks, and even your run-of-the-mill quail all in one go.

```php
// First, ensure you have established relationships between your models. For example:

class Animal extends Model {
    public function chicks() {
        return $this->hasMany(Chick::class);
    }
}

class Chick extends Model {
    // ...
}
```

Now, to count the total number of chicks across all your animals, simply unleash this bit of Laravel magic:

```php
$totalChicks = Animal::with('chicks')->sum('chicks_count');
```

Voila! Your sum of all chickens is now within reach.

<a name="grouping-related-models"></a>

### Grouping Related Models

The fun doesn't stop at counting, my dear Laravel adventurers! Ever wanted to know how many chicks each animal has? Look no further – grouping related models is here to save the day (and your sanity).

```php
$chickCountsByAnimal = Animal::with('chicks')->groupBy('id')->pluck('chicks_count');
```

Now, `$chickCountsByAnimal` holds an associative array where the keys are animal IDs and the values are their respective chick counts. So you can find out who's the chicken king (or queen!) of your farm by simply iterating through this array:

```php
foreach ($chickCountsByAnimal as $id => $count) {
    echo "Animal with ID {$id} has {$count} chicks!";
}
```

And there you have it, folks! With Laravel's Eloquent relationships and the power of aggregation at your fingertips, counting and grouping related models is an egg-citing endeavor. Happy farming! 🐔🥚💪️

 ### Unleashing the Count Ninja in Laravel!

Ever found yourself in a pickle, needing to know the number of ninjas (er, models) hiding in the shadows of your relationships without actually summoning them into the light? Fear not, dear coder! The humble `withCount` method, a secret weapon in your arsenal, will do the trick.

To put it into action:

```php
Use Post, our unsuspecting ninja model, for example:

$ninjas = Post::withCount('comments')->get();

Now, loop through these ninjas:

foreach ($ninjas as $ninja) {
    Echo the number of comments hidden in this ninja's lair:
    echo $ninja->comments_count;
}
```

Want to count multiple relationships like a pro? Just pass an array to your `withCount` method:

```php
By using Builder, we can count votes and comments all while adding a secret ingredient (a where clause) to the comments:

$ninjas = Post::withCount(['votes', 'comments' => function (Builder $query) {
    $query->where('content', 'like', 'code%');
}])->get();

Echo the number of votes and hidden code-laden comments for the first ninja:
echo $ninjas[0]->votes_count;
echo $ninjas[0]->comments_count;
```

Feeling fancy? You can even alias the relationship count result, perfect for when you've got a sneaky feeling there are two different types of comments hiding in your ninja lairs:

```php
Using Builder, we create two versions of our 'comments' - regular and pending:

$ninjas = Post::withCount([
    'comments',
    'comments as pending_comments_count' => function (Builder $query) {
        $query->where('approved', false);
    },
])->get();

Echo the number of regular and pending comments for the first ninja:
echo $ninjas[0]->comments_count;
echo $ninjas[0]->pending_comments_count;
```

And there you have it! With `withCount`, you've got a new hidden skill to help you keep tabs on your ninjas without ever having to face them in battle. Now, get out there and count those models with style! 🥳💥

 #### Time Traveling Counts with the DeLorean of Loads! 🚗🚀

Travel back in time without a flux capacitor, thanks to Laravel's DeLorean of Loads (`loadCount` method)! This magical contraption allows you to fetch a relationship count even after your parent model has already taken its first ride. 📜🏎️

```php
$book = Book::first(); // Let's call this our 'Back to the Past' moment!

// Now, we set the destination year with loadCount('genres')!
$book->loadCount('genres');
```

If you need a little more "Doc Brown" in your count queries, you can add some additional constraints by creating a custom query. To do this, pass an array keyed by the relationships you wish to manipulate. The array values should be time machine control panel closures (functions) that receive the builder instance as their passenger! 🎠🕰️

```php
$book->loadCount(['reviews' => function (Builder $query) {
    // Setting up the time machine: only let reviews with a rating of 5 through the wormhole!
    $query->where('rating', 5);
}])
```

So, jump aboard and join us on this unforgettable journey through time... or at least your data relationships. Happy travels, time traveler! 🕰️🌄🚀

 Alright, here's a fun take on the Laravel docs! Let's dive into the world of Relationship Counting and Custom Select Statements, shall we? 🤓

##### The Counting Dance: A Tango Between `withCount` and `select`

If you're getting down with `withCount` while also doing the `select` twist, make sure you follow these dance steps:

```php
$posts = Post::select(['title', 'body']) // Step 1: Choose your dance partners (columns)
    ->withCount('comments') // Step 2: Invite your date (count comments) - AFTER the dance floor (select method)
    ->get(); // Step 3: Take the floor and spin! (Retrieve data)
```

<a name="other-aggregate-functions"></a>

##### A Bit of Freestyle: Other Aggregate Functions

Now that you've mastered the counting tango, let's spice things up with some other aggregate functions! 🕺💃

```php
// Find the average number of comments per post
$averageCommentCount = Post::selectRaw('AVG(comments_count) as avg_comment_count')
    ->withCount('comments')
    ->get();
```

Remember, when it comes to Laravel and relationships, it's all about knowing the right moves! 💼💃✨

 Alright, buckle up, Laravel enthusiasts! Let's dive into the world of aggregate functions – because who doesn't love a good party with numbers?

Besides our trusty `withCount` pal, Eloquent invites you to the dance floor with `withMin`, `withMax`, `withAvg`, `withSum`, and `withExists`. These charming fellas are eager to join your models' celebration, bestowing them with a fancy `{relation}_{function}_{column}` title:

```php
Use Post like your long-lost model cousin!

$posts = Post::withSum('comments', 'votes')->get();

Then, loop through the posts and shout out their votes' total!

foreach ($posts as $post) {
    echo $post->comments_sum_votes; // Yes, that's a fancy title for the total votes on all comments for each post!
}
```

Feeling like changing the name of the game? You can always call the shots and assign your own alias:

```php
$posts = Post::withSum('comments as total_comments', 'votes')->get();

foreach ($posts as $post) {
    echo $post->total_comments; // Much more catchy, don't you think?
}
```

Remember the `loadCount` method? Well, it has some sophisticated friends joining the party late – `withMin`, `withMax`, and `withAvg`. They too can be called deferredly:

```php
$post = Post::first();

$post->loadSum('comments', 'votes'); // The post now knows its comments' total votes!
```

But wait, there's more! If you're combining these aggregate methods with a `select` statement, remember to let them cut in line after the `select`:

```php
$posts = Post::select(['title', 'body'])
    ->withExists('comments') // Only posts that have comments will join the party!
    ->get();
```

So there you go, folks! Now you're ready to throw your own number-crunching bash with Laravel's aggregate functions. Happy aggregating! 🎉🥳

 ### Morphin' the Count with Relationship Magic in Laravel! 🚀🦸‍♂️

Eager to load a "morph to" relationship, complete with some fantabulous model counts for the various entities that could potentially pop up? Fear not, young Jedi, for you can harness the power of the `with` method in cahoots with the `morphTo` relationship's `morphWithCount` enchantment!

Picture this: a magical land where both `Photo` and `Post` models wield the power to conjure `ActivityFeed` spells. In our mystical realm, the `ActivityFeed` spellbook contains a "morph to" relationship named `parentable`, which allows us to summon the parent `Photo` or `Post` for a given `ActivityFeed`. Moreover, we know that `Photo` models are blessed with many `Tag` minions, and `Post` models are graced with an army of `Comment` sidekicks.

Now, let's envision a grand quest to capture `ActivityFeed` instances, while ensuring their parental counterparts are at our beck and call. Oh, and we fancy knowing the number of tags that accompany each enchanted photo and the number of comments that tag along with each spellbound post:

```php
use Illuminate\Database\Eloquent\Relations\MorphTo;

$spellbook = ActivityFeed::with([
    'parentable' => function (MorphTo $morphTo) {
        $morphTo->morphWithCount([
            Photo::class => ['tags'],
            Post::class => ['comments'],
        ]);
    }])->get();
```

And just like that, you've conquered the art of eager loading, my friend! 🎉✨🏆

 Alrighty, buckle up, programming pals! Let's dive into the enchanting world of Deferred Count Loading, where our data gets a magical touch without overdoing it at a dinner party. Imagine you've got a gang of `ActivityFeed` models chilling in your app, and they're all buddy-buddy with various `parentable` models - think photos and posts, but more on that later!

Now, instead of making each one of these models do a separate trip to the dance floor for their counts (e.g., how many tags a photo has or how many comments a post received), we're going to teach them some cool moves in advance! Enter the `loadMorphCount` method - it's the life of the party when it comes to prepping these models for the count-off.

Here's the dance floor choreography:

```php
$dancePartners = ActivityFeed::with('parentable')->get(); // Invite the activity feeds and their friends over

// Here, we teach them some new moves:
$dancePartners->loadMorphCount('parentable', [
    Photo::class => ['tags'], // Photos get taught to count the number of tags they have (you know, like those picture frames with all your #throwback pics)
    Post::class => ['comments'], // Posts learn how many comments they've gathered (think of it as a popularity contest, but less mean-spirited)
]);
```

And voila! Now our models are all geared up and ready to shine on the dance floor. It's like teaching your cat to high-five – it's impressive, it's useful, and it's a great conversation starter at cocktail parties!

 ## Eager Loading: The Secret Sauce to Query Nirvana!

Ahoy there, Laravel enthusiasts! Let's dive into the captivating world of Eager Loading - the magical elixir that'll make your database queries dance with delight! But first, let's set the mood with a little joke: Why don't Eloquent models ever go to parties? Because they prefer the cozy company of 'Lazy Loading'!

Now that we've broken the ice, let's get down to business. When you access Eloquent relationships as properties, these relationships are like shy wallflowers at a party - they won't show up until someone invites them (i.e., when you first access the property). But fear not! Eloquent can also 'Eager Load' relationships, which is like pulling all your friends onto the dance floor as soon as the music starts. This prevents the dreaded "N + 1" query problem, named after how many queries it takes to make one sober up (just kidding... or am I?).

To better illustrate this problem, consider a `Book` model that belongs to an `Author` model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    /**
     * Get the author that wrote the book.
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }
}
```

Retrieving all books and their authors would look something like this:

```php
use App\Models\Book;

$books = Book::all();

foreach ($books as $book) {
    echo $book->author->name; // Hiccup! That's another query right there!
}
```

If you have 25 books, this code would run 26 queries in total - one for the original book, and 25 additional queries to retrieve the author of each book. Quite a party foul!

But worry not, dear reader! Eager Loading is here to save the day (and your database server)! When building a query, you may specify which relationships should be eager loaded using the `with` method:

```php
$books = Book::with('author')->get();

foreach ($books as $book) {
    echo $book->author->name; // No more hiccups! It's all smooth sailing now.
}
```

For this operation, only two queries will be executed - one query to retrieve all of the books and one query to retrieve all of the authors for all of the books:

```sql
select * from books

select * from authors where id in (1, 2, 3, 4, 5, ...)
```

And there you have it! Eager Loading is like a dance move that'll make your database queries go from a clumsy two-step to a sleek waltz. Keep learning, keep growing, and always remember: Eloquent relationships can be lazy or eager, but your SQL queries should never hiccup again! 💃🏽🕺🏽🎉

 Alright, buckle up, folks! This section is for those who want to play the speed-dating game with databases – but instead of people, they're relationships!

#### Eager Loading Multiple Suitors (Relationships)

Let's face it: sometimes one relationship just isn't enough. If you find yourself yearning for more data without multiple trips to the database, then it's time to start playing matchmaker with the `with` method!

```php
$books = Book::with(['author', 'publisher'])->get();
```

In this enchanting scenario, we're introducing our leading man (or book, if you will) to not one, but two potential matches – the charming author and the sophisticated publisher. Just remember, it's all about who you know in the world of literature!

<a name="nested-eager-loading"></a>

Now, for those seeking a bit more complexity (and possibly a three-way relationship), let's dive into Nested Eager Loading... But first, imagine if our beloved book had a secret admirer – an intriguing genre!

Stay tuned, because the drama continues in our next section! 🎬🍿

 Ah, dear reader! Let's dive into the delightful world of Nested Eager Loading – the magical art of fetching relationships of relationships like a digital Houdini!

First off, imagine you're hosting a swanky literary soiree, and you want to invite not just authors but also their secret society of personal contacts. Well, you can do that by using Laravel's "dot" syntax:

```php
$books = Book::with('author.contacts')->get();
```

Now, things get even more interesting when you're hosting a multi-course dinner with multiple authors and their entourages! In such a scenario, providing a nested array to the `with` method comes in handy, like bringing out the dessert menu after the appetizers:

```php
$books = Book::with([
    'author' => [
        'contacts', // The guest list for each author
        'publisher', // The culinary genius behind each book
    ],
])->get();
```

So, next time you find yourself in a pickle trying to fetch relationships of relationships, remember – with Laravel and this humble guide by your side, you're well on your way to becoming the dinner party host extraordinaire!

 Alrighty then! Let's dive into the thrilling world of Nested Eager Loading `morphTo` Relationships, shall we? Picture this: You're at a wild party (just like an `ActivityFeed`), and you want to know who threw it, who tagged what photos, and who penned that epic post. That's where our Laravel friends come in!

First things first, let's define the `ActivityFeed` model:

```php
<?php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class ActivityFeed extends Model
{
    public function parentable(): MorphTo
    {
        return $this->morphTo();
    }
}
```

In this example, our `ActivityFeed` can be spawned by an `Event`, a `Photo`, or a `Post`. Now, here's the fun part! An `Event` is thrown on a `Calendar`, a `Photo` gets tagged by some clever soul (let's call it a `Tag`), and a `Post` belongs to an `Author`.

Now, imagine you want to grab all these `ActivityFeed` instances and get the lowdown on their parents and respective nested relationships. Well, Laravel makes that a piece of cake!

```php
use Illuminate\Database\Eloquent\Relations\MorphTo;

$activities = ActivityFeed::query()
    ->with(['parentable' => function (MorphTo $morphTo) {
        $morphTo->morphWith([
            Event::class => ['calendar'],
            Photo::class => ['tags'],
            Post::class => ['author'],
        ]);
    }])->get();
```

This piece of code is like a magic wand that fetches the `ActivityFeed` instances, and makes sure to bring along their parents (`Event`, `Photo`, or `Post`) with their respective nested relationships! Just like bringing your plus-one to a party, but way more useful.

 Alrighty, let's spice things up a bit! ππ», Eloquent isn't just about being a bookworm and grabbing every column from relationships it fetches. No sirree! Sometimes you only want to nab a select few for your party, and thatβs where eager loading comes in, like a charming hostess at a cocktail party guiding you to the best conversations π€πΎπ

Here's how it works:

```php
$books = Book::with('author:id,name,book_id')->get();
```

Now, listen up, my dear data-diving detective! When you use this dazzling feature, remember to always include the `id` column and any relevant foreign key columns in your list of columns to retrieve (we wouldn't want you getting lost in a sea of data without a life vest, now would we? π€π΄).

So there you have it! Eager loading is like the ultimate mix tape for relationships - selecting only the best tracks to play! πΆππΈ

 Alrighty then! Let's dive into the thrilling world of eager loading in Laravel, shall we? 🎉

First off, imagine you're a bookworm on a mission. You don't just want to read books, oh no! You wanna know who wrote 'em and what genre they belong to, too. To make that happen, all you need is some magic code sprinkled on your models 🪄

```php
<?php
// Our magical book model ✨
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    // This is our secret sauce for eager loading 🎨
    protected $with = ['author'];

    /**
     * Get the author who penned this masterpiece.
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    // And here's the genre, because you can't judge a book by its cover alone! 📚
    public function genre(): BelongsTo
    {
        return $this->belongsTo(Genre::class);
    }
}
```

Now that our book model is all spelled out, let's say you want to skip the author details for a specific query. No problem! Just use your Jedi mind trick and summon the `without` method:

```php
$books = Book::without('author')->get();
```

On the other hand, if you wanna switch out all your eager loaded goodies for a single query, employ the power of `withOnly`:

```php
$books = Book::withOnly('genre')->get();
```

And there you have it! Now you're not just a reader, but also a code master 🦸‍♂️! Go forth and conquer the world of eager loading in Laravel! 🚀

 ### Unleashing the Power of Selective Eagerness! 🚀

Ever found yourself in a pickle, wanting to eager load a relationship but with some extra sauce? Fear not, my dear Laravel enthusiast, for I shall guide you through the art of constrained eager loads!

Imagine you're hosting a party and instead of inviting everyone, you want to send out invitations only to those who love coding (because, let's face it, who doesn't?). Well, that's exactly what we're doing here. To achieve this magical feat, simply pass an array of relationships to the `with` method, where each key is a relationship name and the value is a charming little closure that adds those extra constraints:

```php
use App\Models\User;

$users = User::with(['posts' => function ($query) {
    $query->where('title', 'like', '%code%'); // Only invite those who code!
}])->get();
```

Now, don't stop there! You can further customize this elegant dance by calling other [Query Builder methods](/docs/{{version}}/queries) to add more moves:

```php
$users = User::with(['posts' => function ($query) {
    $query->orderBy('created_at', 'desc'); // Make sure the coder party is classy!
}])->get();
```

And just like that, you've thrown a selective eager load bash! 🎉🎊🎉

 Alrighty then! Buckle up, coding cowboys and cowgirls! Let's dive into the whimsical world of Laravel and learn about constraining eager loading of `morphTo` relationships.

You see, when you're eagerly loading a `morphTo` relationship, Eloquest (our cunning creature) will gallop off to fetch each type of related model like a wild mustang, running multiple queries to round 'em up. But fear not! With the help of the `constrain` method, you can saddle these queries with some additional rules, giving them a bit more oomph.

```php
use Illuminate\Database\Eloquent\Relations\MorphTo;

$comments = Comment::with(['commentable' => function (MorphTo $morphTo) {
    $morphTo->constrain([
        Post::class => function ($query) {
            $query->whereNull('hidden_at'); // Just like hiding a cow in a herd of buffalo, we're excluding the hidden posts!
        },
        Video::class => function ($query) {
            $query->where('type', 'educational'); // Only letting the smart videos through the gate!
        },
    ]);
}])->get();
```

In this here example, Eloquest will only eager load posts that have been left unhidden and videos with a `type` value of "educational." It's like herding cats, but with database queries – who needs sleep, right?

 Alrighty, buckle up, my data-hungry friends! You know the drill – we're about to dive into the magical world of Laravel where relationships and eager loads unite in a dance of SQL and PHP. But wait! What if you want to check for the existence of that special someone (a relationship) while simultaneously wooing them with a charming, condition-based dinner date? Well, grab your tuxedos and party hats, because we've got just the solution!

Enter stage left: the fabulous `withWhereHas` method – your wingman in the world of eager loading! Here's how you can use it to find `User` models that have child `Post` models matching a given query condition while also whisking those posts onto the dance floor (er, we mean eagerly loading them).

```php
use App\Models\User;

$users = User::withWhereHas('posts', function ($query) {
    $query->where('featured', true); // This is our condition-based dinner date!
})->get();
```

Now, don't be shy – go forth and conquer the dance floor (of data), my friends! And remember: if you can't find your perfect relationship match, just `withWhereHas` to meet them at the right conditions. 😊

P.S. If you're not familiar with Laravel yet, it's like the charming, witty date-matching service for your database needs. So, what are you waiting for? Sign up now and start connecting with those relationships! 💁‍♂️💖

 ### The Art of Lazy Eager Loading (AKA "The Late Night Snack Approach")

In the world of Laravel, sometimes you find yourself in a situation where you've already called for dinner but then decide you absolutely need dessert. That's when lazy eager loading comes into play!

For instance, imagine you've gathered all your books but now realize you really should know who wrote them (because let's face it, some of those titles sound familiar). Here's how to get the author details without having to go through the bookshelf again:

```php
use App\Models\Book;

$books = Book::all();

if ($desperateNeedForDessert) { // don't forget to check for that sweet tooth
    $books->load('author', 'publisher');
}
```

Now, if you're feeling extra fancy and want to add some sugar (or in this case, sorting) to your authors, here's how:

```php
$author->load(['books' => function ($query) {
    $query->orderBy('published_date', 'asc'); // because who doesn't love a timeline?
}]);
```

But what if you've already met the author but forgot to ask for their autograph? No worries! Use the `loadMissing` method:

```php
$book->loadMissing('author'); // go on, ask for that signature!
```

And just like in real life, sometimes you can get caught up in a tangled web of relationships. For more information on Nested Lazy Eager Loading (AKA "The Morpheus Matrix"), check out our documentation below. Bon appétit, my friend! 🍴📚🚀

 Alrighty, buckle up as we dive into the world of Laravel's Nested Lazy Eager Loading and `morphTo`, where relationships are like a family reunion - complex but fun! 🎉

If you've got a hankering to eager load a `morphTo` relationship, along with its offspring (nested relationships), look no further than the `loadMorph` method. It's the Swiss Army knife of Eloquent, ready to handle any relationship situation! 🧫

So, imagine you've got an `ActivityFeed` model that serves as the life of the party for `Event`, `Photo`, and `Post`. But, behind every entertaining figure, there are always a few more key players – in this case: `Calendar`, `Tag`, and `Author`. To make things even more interesting, each of these characters has their own entourage!

To better understand the `loadMorph` method, let's take a peek at our models:

```php
<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class ActivityFeed extends Model
{
    /**
     * Get the parent of the activity feed record.
     */
    public function parentable(): MorphTo
    {
        return $this->morphTo();
    }
}
```

In this example, we've got `Event`, `Photo`, and `Post` models that can create `ActivityFeed` models. And, to keep things spicy, we've got some extra relationships: `Event` belongs to `Calendar`, `Photo` is associated with `Tag`, and `Post` belongs to an `Author`.

Now that we've set the stage, let's get our hands dirty (in a good way)! We can retrieve `ActivityFeed` instances and eager load all the parentable models along with their accompanying nested relationships like so:

```php
$activities = ActivityFeed::with('parentable')
    ->get()
    ->loadMorph('parentable', [
        Event::class => ['calendar'],
        Photo::class => ['tags'],
        Post::class => ['author'],
    ]);
```

And just like that, you've got a smorgasbord of eagerly loaded relationships! 🍽️🎉

 ### Auto-Eager Loadin' with a Twist! 🎨🤹‍♂️

> [🚧 WARNING!]
> This feature is currently under construction, like a clumsy circus performer trying to juggle knives while riding a unicycle. We're gathering the community's feedback to ensure it doesn't end up as a hilarious blooper reel. The behavior and functionality of this feature may change even between updates!

In many cases, Laravel can pull off an auto-eager load of your relationships like a magic trick, making your queries look sleeker than a greased dolphin at SeaWorld! 🐬💦 To enable this prestidigitation, you should call the `Model::automaticallyEagerLoadRelationships` method within the `boot` method of your application's `AppServiceProvider`.

```php
use Illuminate\Database\Eloquent\Model;

/**
 * Set up any services needed for the application.
 */
public function boot(): void
{
    Model::automaticallyEagerLoadRelationships();
}
```

Once this feature is activated, Laravel will attempt to auto-lazy-eager load relationships you access that haven't been previously loaded. Imagine it like a well-rehearsed dance routine where each performer knows exactly when to step in without missing a beat! 💃🕺

Let's consider this hypothetical dance troupe of `User`, `Post`, and `Comment` models:

```php
use App\Models\User;

$users = User::all();

foreach ($users as $user) {
    foreach ($user->posts as $post) {
        foreach ($post->comments as $comment) {
            echo $comment->content; // 🎤"And now, the highlight of the show...the comment's content!"
        }
    }
}
```

Usually, this would require a query for each user to fetch their posts and another query for each post to grab its comments. But with `automaticallyEagerLoadRelationships`, Laravel will auto-lazy-eager load the posts for all users in the collection when you try to access the posts of any retrieved user! 🎩"Ladies and gentlemen, we have a show!" Likewise, it'll auto-lazy-eager load comments for all posts that were originally retrieved when you attempt to access their comments.

If you prefer not to enable automatic eager loading globally, you can still call the `withRelationshipAutoloading` method on a single Eloquent collection instance:

```php
$users = User::where('vip', true)->get();

return $users->withRelationshipAutoloading(); // 🕺"And now, for your viewing pleasure...the enhanced user collection!"
```

<a name="preventing-lazy-loading"></a>
But what if you want to prevent this auto-eager loading magic trick from happening? You can do so by using the `withoutRelationshipAutoloading` method on the collection instance:

```php
$users = User::with('posts.comments')->get();

return $users->withoutRelationshipAutoloading(); // 🎪"Tonight, we're taking a break from auto-eager loading!"
```

 Alrighty, folks! Let's talk about the art of preventing your Laravel relationships from taking a siesta. You know, eager loading is like bringing your own coffee to a meeting – it keeps things percolating smoothly in your app. But if you wanna ensure that all relationships are wide-awake and ready to party at all times, Laravel's got your back with the `preventLazyLoading` method!

This magical technique can be summoned from the base Eloquent model class – just like calling a late-night pizza delivery hotline. Typically, you'll want to give it a bell within the `boot` function of your application's trusty `AppServiceProvider` class (think of it as the bouncer who checks IDs at the door).

The `preventLazyLoading` method is a swell guy, taking an optional boolean argument that tells him whether to enforce his no-napping policy or let relationships catch some Z's. For example, you might want to keep lazy loading awake during your nightly coding sessions, but allow it to catch up on sleep in production (your app doesn't need a cranky relationship, right?).

Here's how you can set this up:

```php
use Illuminate\Database\Eloquent\Model;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Model::preventLazyLoading(! $this->app->isProduction());
}
```

Once you've got your relationships on a strict no-nap schedule, Eloquent will toss a `Illuminate\Database\LazyLoadingViolationException` at you if it catches them taking a snooze.

But hey, who wants exceptions crashing the party? You can customize lazy loading violations with the `handleLazyLoadingViolationsUsing` method (think of it as setting up a silent disco instead of a full-blown rave). With this method on your side, you can tell Eloquent to log violations instead of interrupting the app's flow with noisy exceptions:

```php
Model::handleLazyLoadingViolationUsing(function (Model $model, string $relation) {
    $class = $model::class;

    info("Attempted to lazy load [{$relation}] on model [{$class}].");
});
```

And there you have it! Now your relationships will be as lively as a cocktail party in Vegas – or at least as awake as the barista at Starbucks on their third cup of coffee. Happy coding, y'all! 🤘🏼

 ### The Art of Marriage Proposal (A.K.A Model Matrimony) 💍

#### Mastering the Save Method 🔧🛠️

Ah, the sweet dance of data manipulation! In the realm of Laravel, it's not just about whirlwind romances—it's about marrying your models in a harmonious dance known as **The Save Method**. This is where you propose to your related models, and if they say "I do," it's a match made in heaven! 🌈✨

Let's imagine our little tale unfolds in a medieval setting (because who doesn't love a good chivalric romance?). Your Knight in Shining Armor (our trusty User model) is about to propose to the Fair Maiden (the Post model) he's been courting.

```php
// In our knight's castle (User model)
$user = App\Models\User::find(1);

// The ring (relationship) between the two is forged here!
$user->post()->associate(App\Models\Post::find(2));
```

Now, our dashing hero has presented his lady with a shiny new relationship. But wait! Our tale doesn't end there. The Save Method can also serve as the officiant at their wedding, ensuring all is legal and binding.

```php
// With just a simple "I do," the union is official 💏
$user->save();
```

Our knight has successfully married his beloved! But what about updating the relationship? Well, our romantic duo decided to celebrate their anniversary with a grand adventure. Let's tag along and see how they update their love story.

```php
// Preparing for the journey (updating relationships)
$user = App\Models\User::find(1);

// Their journey takes them to new lands
$user->post()->associate(App\Models\Post::find(3));

// The officiant announces their union once more 🤝🌐
$user->save();
```

With that, our knight and fair maiden have updated their relationship in a beautiful display of adventure and devotion. Now go forth, and start crafting your own magical data relationships! ❤️🎉✨

 Ah, the magical world of Eloquent! It's like a superhero suit for your database queries, making even the most mundane tasks feel like you're saving the world one row at a time.

Take, for instance, our intrepid hero, the `save` method. Picture this: you've got a hot new comment that needs to be attached to a post faster than Flash can run a 100-meter dash. No need to manually set the `post_id` like some ancient database cowboy; Eloquent's here to save the day!

```php
use App\Models\Comment;
use App\Models\Post;

$comment = new Comment(['message' => 'A new comment.']);

$post = Post::find(1); // Find post number 1, because 2 is never cool enough for a first date

$post->comments()->save($comment); // Save the comment with our hero, the save method!
```

Note that we didn't call the `comments` relationship like some hipster dynamic property. No, we called it like an old-school action movie: we summoned the `comments` method and let it do its job! The `save` method will automatically bestow upon our new comment the appropriate `post_id`.

But what if you're feeling a little adventurous and want to save multiple related models at once? Enter the `saveMany` method:

```php
$post = Post::find(1);

$post->comments()->saveMany([ // Unleash the power of saveMany!
    new Comment(['message' => 'A new comment.']),
    new Comment(['message' => 'Another new comment.'])
]);
```

The `save` and `saveMany` methods will whisk your models away to the database, persisting them for eternity (or until the next server reboot). However, they won't add the newly persisted models to any in-memory relationships that are already loaded onto the parent model. If you want to access the relationship after using `save` or `saveMany`, you might want to use the `refresh` method:

```php
$post->comments()->save($comment); // Save our comment, but let's not forget to update the scoreboard

$post->refresh(); // Refresh and relive the glory of our newly saved comment!

// And voila! All comments, including the newly saved comment...
$post->comments;
```

So there you have it! The `save`, `saveMany`, and `refresh` methods - your new BFFs in the world of Laravel Eloquent. Now go forth and conquer those databases like a modern-day database ninja!

 Ah, the thrill of saving models and their enchanting entourage of relationships! Let's dive right in, shall we?

#### The Magnificent Model Save-and-Hug Tour (TM)

Ever wondered how to save your darling `Post` model, its charming comments, and the dashing authors behind them all at once? Fret not! The `push` method is here to be your knight in shining armor. Here's a little dance we call "The Save Tango":

```php
$post = Post::find(1); // A romantic rendezvous with our dashing post

// Let's spice things up! Change the message and author's name
$post->comments[0]->message = 'Message';
$post->comments[0]->author->name = 'Author Name';

// And off we go to the ball, saving everything with a single twirl!
$post->push(); // The grand finale of our Save Tango
```

But what if you're looking for a quieter night in? No problemo! Introducing the `pushQuietly` method - it saves your model and its relationships without all that noisy event-raising. Perfect for the introverts among us:

```php
$post->pushQuietly(); // A peaceful evening, just you and your data
```

Now, isn't that a smashing way to save your models and relationships? Happy coding! 🎉💃🏼🕺🏼💻

 ### The "Magical Unicorn" Method (or, how to create enchanted database entries with a wave of your PHP wand!)

Ahoy there, intrepid Laravel developer! Besides the trusty `save` and `saveMany` methods, let's not forget about our magical unicorn, the `create` method. This mystical friend accepts an array of attributes, conjures up a model, and poof! - it inserts it into the database. Unlike its siblings, `save` prefers fully-dressed Eloquent models while `create` is all about keeping it casual with plain PHP arrays. And just like a genie granting your wish, the newly created model will be returned by the `create` method:

```php
use App\Models\Post;

$post = Post::find(1);

By the power of Grayskull, a comment is born! $comment = $post->comments()->create([
    'message' => 'A new comment.',
]);
```

And if you need to create multiple related models, just like having a baby shower for your app, use the `createMany` method:

```php
$post = Post::find(1);

Double, double, toil and trouble! $post->comments()->createMany([
    ['message' => 'A new comment.'],
    ['message' => 'Another new comment.'],
]);
```

But what if you want to create a model without all the fanfare (read: events)? Fear not, for `createQuietly` and `createManyQuietly` are here to save the day:

```php
$user = User::find(1);

By moonlight, a post appears! $user->posts()->createQuietly([
    'title' => 'Post title.',
]);

By starlight, and candlelight, many posts appear! $user->posts()->createManyQuietly([
    ['title' => 'First post.'],
    ['title' => 'Second post.'],
]);
```

Last but not least, you can use the `findOrNew`, `firstOrNew`, `firstOrCreate`, and `updateOrCreate` methods to [create and update models on relationships](/docs/{{version}}/eloquent#upserts). Just remember to brush up on the [mass assignment](/docs/{{version}}/eloquent#mass-assignment) documentation before casting that spell!

<a name="updating-belongs-to-relationships"></a>

 Alright, let's get this party started! If you're looking to hook up a little minnow with its daddy whale in the Laravel universe, you can use the `associate` method. In this case, our friendly neighborhood `User` model is stepping up as the minnow, and the majestic `Account` model is taking on the role of the daddy whale. The `associate` method will gently place the foreign key into the minnow's pocket:

```php
use App\Models\Account;

$account = Account::find(10); // Don't forget to invite this dude to the family!

$user->account()->associate($account); // Here comes the wedding ceremony... or, you know, the relationship thingy.

$user->save(); // ...and now the paperwork is done!
```

To kick your significant other out of your digital apartment, you can use the `dissociate` method. This method will set the foreign key to a heartbreaking "it's not me, it's you" message:

```php
$user->account()->dissociate(); // Ouch! The relationship status has been updated to 'single'.

$user->save(); // ...and now the breakup is official.
```

And if you're curious about updating many-to-many relationships, stay tuned for the sequel of this romantic comedy! 💔💌💏 (Just kidding, it's a technical term. More on that soon!) 🤓

 Ahoy there, brave coder! You've stumbled upon the wild and wonderful world of Laravel many-to-many relationships, where entities frolic together in a symphony of shared love (or data, whichever is more dramatic). Buckle up, buttercup, because it's time to dance with database delight!

<a name="attaching-detaching"></a>

#### Attaching and Detaching Models

Now, imagine you're at a swanky party where everyone wants to mingle, but without the awkwardness of manual introductions. That's what attach() and detach() do for your models—they handle the intros like a boss!

```php
// Attaching User 1 (Cinders) to some Pumpkins (Carriages)
$user = App\User::find(1);
$pumpkinCarriage = App\PumpkinCarriage::find(5);
$user->pumpkinCarriages()->attach($pumpkinCarriage);
```

Ever been to a party where someone showed up late and you had to explain the whole story again? That's synonymous with detaching.

```php
// Detaching User 1 (Cinders) from her pumpkin carriage because she found a hot air balloon ride (Prince Charming)
$user = App\User::find(1);
$pumpkinCarriage = App\PumpkinCarriage::find(5);
$user->pumpkinCarriages()->detach($pumpkinCarriage);
```

#### Pivot Table and Pivot Fields

Remember those middle school dance parties where you needed a chaperone to validate your relationships? In Laravel, that's the pivot table—the responsible third wheel ensuring no funny business happens between the models.

But sometimes you want to squeeze in some extra details (like which pumpkin Cinders really likes). That's where pivot fields come in handy!

```php
// Create a migration for pivots with an additional field "color"
php artisan make:migration add_color_to_user_pumpkincarriage_pivot
```

Now, when Cinders and her pumpkins share some quality time, you'll know which one she prefers!

```php
// Create or update the pivot table record with Cinders (User 1) and her orange pumpkin carriage
$user = App\User::find(1);
$pumpkinCarriage = App\PumpkinCarriage::find(5);
$user->pumpkinCarriages()->syncWithoutDetaching([$pumpkinCarriage->id => ['color' => 'orange']]);
```

 Alright, buckle up, dear developer! It's time to dive into the thrilling world of many-to-many relationships in Laravel's Eloquent. Imagine you're a super spy with a secret identity for every mission (that's your user), and each mission has its own team of agents (roles).

To assign a new role to our agent, we can use the `attach` method, which is like giving them a top-secret mission briefing:

```php
use App\Models\User;

$user = User::find(1); // Find our secret agent with ID 1

$user->getRoleTeam()->attach($roleId); // Brief our agent on their new role
```

If you want to add a little backstory (data) to the mission, just pass an array:

```php
$user->getRoleTeam()->attach($roleId, ['mission' => 'Save the world', 'equipment' => 'Q-branch gadgets']); // Brief our agent with extra details
```

Now, sometimes a mission might go south, and you need to cut ties (detach). To do this, use the `detach` method, which is like sending a recall message:

```php
// Recall our agent from their current mission...
$user->getRoleTeam()->detach($roleId);

// Recall all missions for our agent...
$user->getRoleTeam()->detach();
```

For those who like to multitask, you can even recall multiple agents at once or assign them to new missions using arrays:

```php
$user = User::find(1);

$user->getRoleTeam()->detach([1, 2, 3]); // Recall missions 1, 2 and 3 for our agent

$user->getRoleTeam()->attach([
    1 => ['mission' => 'Save the world', 'equipment' => 'Q-branch gadgets'],
    2 => ['mission' => 'Rescue the president', 'equipment' => 'Nuclear launch codes']
]); // Assign new missions to our agent
```

Happy spying! 🕵️‍♂️💼🚀

 Alrighty then! Let's dive into the delightful world of Laravel associations syncing – a thrilling dance between your models and their many-to-many relationships! 💃🏼🕺🏼

First off, you can use the `sync` method to choreograph those complex dances. The `sync` method takes an array of IDs like a magic wand, casting them onto the intermediate table. Any IDs not found in this mystical array will be given the cold shoulder and booted from the dance floor. After the spell is cast, only the enchanted IDs will still be grooving on the intermediate table:

```php
$user->roles()->sync([1, 2, 3]); // Give these roles a whirl!
```

You can even toss in extra dance moves with your IDs using the `syncWithPivotValues` method:

```php
$user->roles()->sync([1 => ['expires' => true], 2, 3]); // Add some flair to that first role!
```

If you're in the mood for a unique dance number with the same pivot values for each synced model ID, call upon the `syncWithPivotValues` method:

```php
$user->roles()->syncWithPivotValues([1, 2, 3], ['active' => true]); // Everyone's doing this hot new dance!
```

But what if you don't want to kick out the existing IDs that aren't part of the current routine? No problemo! Use the `syncWithoutDetaching` method:

```php
$user->roles()->syncWithoutDetaching([1, 2, 3]); // Keep those IDs on the dance floor, no matter what!
```

Now, you're ready to step up your many-to-many game and keep your models in rhythm! 💃🏼🕺🏼🚀

 Alright, buckle up, Laravel fanatics! Let's dive into the magical world of many-to-many relationships where the enchanting `toggle` spell casts its charm. This enigma is akin to flipping a cosmic switch on those associated model IDs you fancy.

If an ID is currently enchanted (attached), it gets de-enchanted (detached). Conversely, if it's not under any magical influence (detached), it receives the spell (attached):

```php
$user->roles()->toggle([1, 2, 3]); // Caution: Might cause sudden superpowers or level-ups!
```

But wait, there's more! You can even add some extra potions to the mix (intermediate table values):

```php
$user->roles()->toggle([
    1 => ['potion_of_extra_time' => true], // User gains an hour extra every day!
    2 => ['potion_of_super_strength' => true] // Watch out, here comes Mr. or Mrs. Incredible!
]);
```

Brace yourselves for a wild ride through the land of associations, where magic is real, and code is poetry in motion!

 Ahoy there, intrepid Laravel wranglers! Buckle up as we delve into the whimsical world of Transactional Pivot Operations. You know, for when you need to get your hands dirty with those pesky many-to-many relationships and ensure your database doesn't turn into a chaotic mess!

First off, let's talk about those `OrFail` pals—attachOrFail, detachOrFail, syncOrFail, syncWithoutDetachingOrFail, and toggleOrFail. What sets these apart from their regular counterparts? Well, imagine you're cooking up a storm in the kitchen (or taming your application's data, same difference), but suddenly, disaster strikes! Your soup starts bubbling over or an unexpected error pops up. With our `OrFail` friends around, you can rest easy knowing that they'll wrap each operation within a magical database transaction, ensuring all changes are automatically whisked back to the start if things take a turn for the worse!

```php
$user->roles()->attachOrFail([1, 2, 3]); // Attach roles to user without fear of errors

$user->roles()->syncOrFail([1, 2, 3]); // Replace all current user roles with the new ones without any fuss
```

Now that we've got you grinning like a mad scientist, let's venture further and discuss updating a record on the intermediate table. This process is akin to a secretive espionage mission, where you need to update one of those sneaky pivot records without anyone noticing. Rest assured, Laravel has you covered with the `updatePivot` method, ready to help you pull off that covert operation!

```php
$user->roles()->first()->pivot->update([
    'pivot_column' => 'new value',
]);
```

And that's a wrap! Happy coding, data-wrangling pirates, and remember: with Laravel by your side, even the trickiest database operations become as easy as pie (or perhaps more accurately, as simple as soup without an exploding cauldron)!

 Ahoy there, brave coder! 🌴️ Let's embark on a jolly adventure in Laravel land, where we'll learn to tango with the mystical intermediate table! 🕺️

Now, imagine you've stumbled upon an old pirate, er, user, who needs a makeover. You know, like changing his role from Captain Hook to Long John Silver. But how do we do this without breaking our relationship? By using the mighty `updateExistingPivot` method, of course! 🏴‍☠️

```php
$pirateCaptain = User::find(1); // Finds Captain Hook aka user with id 1

$pirateCaptain->setSail()->updateRole( $arrrghId, [
    'status' => 'parrot-feeder', // or Long John Silver if you prefer
]);
```

In this grand pirate tale, `$arrrghId` is the foreign key of the role we're updating. The array `['status' => 'parrot-feeder']` contains the attributes we'd like to change on our intermediate table row. 🦜️

Happy sailing, matey! May your Laravel be smooth and your intermediaries always danceable! 🎉✨

 ## Timing is Everything: Stampede-Style Updates in Laravel! ope

Ah, the sweet symphony of relationships in Laravel! When a model, let's say a scurrying `Comment`, belongs to a majestic `Post`, there are moments when updating the parent's timestamp can be as essential as adding sprinkles to a unicorn ice cream sundae (you know, for that magical touch). 🍦✨

For example, when our lively `Comment` model gets an update, you might want to automatically "stampede" the `updated_at` timestamp of its kingly `Post`, ensuring it's adorned with today's date and time. To do this, you can employ the mystical `Touches` attribute on your young `Comment` model, listing the relationships that should have their `updated_at` timestamps updated when our little herd gallops through an update:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Touches;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Touches(['post'])] // You're the king now, Post! 👑
class Comment extends Model
{
    /**
     * Who is this majestic creature I belong to?
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class); // Oh, just the ruler of all that is blog! 🌐
    }
}
```

> [!ATTENTION]
> Keep in mind that parent model timestamps will only be updated if the child model performs its stampede using Eloquent's `save` method. If it decides to run wild in a different manner, well, we can't control nature, now can we? 🦊