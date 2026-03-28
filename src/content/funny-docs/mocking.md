 Ahoy, mateys! Sail the Laravel seas with us as we delve into the art of mockery - not the kind that makes people laugh (although that's always a plus), but the one that helps you write better tests. Ready to plunder treasures of knowledge? Let's set sail!

<a name="mocking-objects"></a>
## Mocking Objects
Mocking objects, you say? Think of it like building Lego ships without the actual bricks. You create a "stand-in" version of your object, so you can test your code without having to depend on the real deal. Arr matey, 'tis a swashbuckling way to write tests!

<a name="mocking-facades"></a>
## Mocking Facades
Now, mocking facades is like creating a doppelganger of your favorite barkeep at The Black Pearl. You can control the responses they give, so you don't have to worry about them spilling the rum (or secrets).

### Facade Spies
Aha! Facade spies are our spyglass into the future. They let us see what the facade will do next, without actually having to wait for it to happen. Just like a pirate's fortune teller, but with less crystal balls and more code.

<a name="interacting-with-time"></a>
## Interacting With Time
Ah, the ticking clock! In this world of pirates, time can be your friend or foe. But with Laravel's time-traveling capabilities, you can skip ahead to the treasure chest and back, all within the comfort of your IDE. It's like having Captain Barbossa's compass, but for time!

 Alrighty then! Let's dive into the world of Laravel testing, where we can pretend our app's bits and bobs are something they're not - like a cat pretending to be a cow on a farm (it happens more than you think).

Take a controller that dispatches an event, for instance. You might want to disguise the event listeners as a stuffed animal during testing, so they don't accidentally get triggered and start causing chaos in your test party. This way, we can focus on whether our controller serves up a tasty HTTP response instead of worrying about the rambunctious antics of the event listeners, which are best tested off-stage anyhow.

Lucky for us, Laravel comes equipped with a toolkit to help us pull off these shenanigans like a well-oiled magic act! They've got tools for mocking events, jobs, and other important facades ready to go right out of the box. These helpers serve as a friendly assistant over Mockery, sparing us from having to memorize complicated Mockery method calls that would make even Sherlock Holmes scratch his head.

<a name="mocking-objects"></a>
Now, let's get our hands dirty and start learning how to mock these objects like a pro! Just remember, if you mess up, don't worry - it's only code after all, and we can always reload the page and try again (or use Git, but where's the fun in that?).

 ## Mocktacular Shenanigans 🎭

## Mocking a Pal for Your App! 🤯

Ever wanted to prank your app with a phony buddy? Well, here's the Laravel lowdown on how to do just that! 🎉

When you're injecting an object into your application through Laravel's [service container](/docs/{{version}}/container), it's like inviting someone to a party. But instead of bringing booze, we'll be serving up mocked instances instead! To get this jamboree started, you'll want to register your imposter within the container as an `instance` binding. This is like whispering into the bartender's ear: "Gimme a fake one instead!"

```php tab=Pest Party 🥳
use App\Service;
use Mockery;
use Mockery\MockInterface;

test('let the shenanigans commence', function () {
    $this->instance(
        Service::class,
        Mockery::mock(Service::class, function (MockInterface $mock) {
            $mock->expects('process'); // Our phony pal's party trick! 🎪
        })
    );
});
```

```php tab=PHPUnit Soiree 🥳
use App\Service;
use Mockery;
use Mockery\MockInterface;

public function test_let_the_shenanigans_commence(): void
{
    $this->instance(
        Service::class,
        Mockery::mock(Service::class, function (MockInterface $mock) {
            $mock->expects('process'); // Our phony pal's party trick! 🎪
        })
    );
}
```

To make things even more convivial, Laravel's base test case class offers the `mock` method, so you can get your phony pals ready to roll without any fuss!

```php
use App\Service;
use Mockery\MockInterface;

$mock = $this->mock(Service::class); // Invite our new friend to the party! 🎊
// Let's make sure they can do a trick...
$mock->expects('process');
```

Need to keep things light and casual? Use `partialMock` when you only need your phony pal to perform a few tricks. The rest of their repertoire will be left untouched! 🤳

```php
use App\Service;
use Mockery\MockInterface;

$mock = $this->partialMock(Service::class); // Just call when they're needed! 📞
// Let's make sure they can do a specific trick...
$mock->expects('process');
```

If you want to keep an eye on your phony pal, Laravel's base test case class has a `spy` method, acting as a handy spyglass over the Mockery `Mockery::spy` method. Spies are like secret agents who report back after the party's over!

```php
use App\Service;

$spy = $this->spy(Service::class); // Keep this one under surveillance! 🕵️‍♂️
// ...
$spy->shouldHaveReceived('process'); // Check if our spy reported back from the party! 📞
```

<a name="mocking-facades"></a>
## Mocking Facade Fakers 🤔

If you're wanting to mess with facades instead, Laravel's base test case class has a `fake` method that lets you create a decoy version for your party!

```php
use Illuminate\Support\Facades\DB;

$db = $this->fake(DB::class); // Create a fake DB for our party! 🎩
// ...
$db->expects('get')->andReturn($someFakeData); // Set up our decoy's responses! 👻
```

 Alrighty then! Let's dive into the fun world of Laravel Facades and their mocking capers. Now, you see, traditional static methods are as common as a pair of jeans at a cowboy convention. But, our beloved Laravel Facades? They're more like those fancy designer jeans with secret pockets for your smartphone and wallet – they've got a little extra something that makes them stand out!

First things first, unlike those run-of-the-mill static methods, Laravel Facades can be mocked. And guess what that means? It's like having the testability of a superhero, all thanks to the magical powers of dependency injection! So, when you're testing, and you want to mock a call to one of those swanky Laravel facades in your controller (like our good friend `Cache`), here's how you do it:

```php
// First up, we got ourselves some UserController action
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Cache;
class UserController extends Controller
{
    // ...
    public function index(): array
    {
        $value = Cache::get('key');

        return [
            // ...
        ];
    }
}
```

Now, to mock the call to our dear friend `Cache`, we'll use the trusty `expects` method that returns an instance of a Mockery mock. And remember, facades aren't just any ol' static class – they're managed by Laravel's service container, which means they've got more testability than a Kardashian family reunion! Let's say we want to mock the `Cache` facade's `get` method:

```php tab=Pest
<?php

use Illuminate\Support\Facades\Cache;
// Pest testing framework, y'all!
test('get index', function () {
    Cache::expects('get')
        ->with('key')
        ->andReturn('value');

    $response = $this->get('/users');

    // ...
});
```

```php tab=PHPUnit
<?php

namespace Tests\Feature;
use Illuminate\Support\Facades\Cache;
// PHPUnit, the old reliable!
class UserControllerTest extends TestCase
{
    public function test_get_index(): void
    {
        Cache::expects('get')
            ->with('key')
            ->andReturn('value');

        $response = $this->get('/users');

        // ...
    }
}
```

But remember, not every facade deserves a mocking treatment. Keep your paws off the `Request` Facade – instead, pass in the desired input using Laravel's [HTTP testing methods](/docs/{{version}}/http-tests) like `get` and `post` when running your test. And as for the `Config` facade? Instead of mocking it, call the `Config::set` method in your tests.

And there you have it! You're now officially a Facade mocking maestro. So go forth and conquer those tests with your newfound knowledge!

 ### Snoopin' on Facades, Laravel Style! 🕵️‍♂️

Ever wanted to catch a facade in action, like a cybercat burglar in the digital night? Well, Laravel has got your back with Facade Spies! Just call the `spy` method on your facade of choice, and it'll start keeping tabs (literally!) on all its interactions. Think of them as the secret service agents of the code world - they record every little meeting between the spy and the test subject, so you can make assertions after the party's over:

```php tab=Pest, the cool kid on the block
<?php

use Illuminate\Support\Facades\Cache;

test('stashing secrets in the ol' cache box', function () {
    Cache::goUndercover(); 🕵️‍♂️

    $response = $this->get('/');

    $response->assertStatus(200);

    Cache::demandEvidence('put')->with('secret name', 'Taylor', 10); 🔍
});
```

```php tab=PHPUnit, the old-timer who still knows a thing or two
use Illuminate\Support\Facades\Cache;

public function test_stashing_secrets_in_the_ol_cache_box(): void
{
    Cache::goUndercover(); 🕵️‍♂️

    $response = $this->get('/');

    $response->assertStatus(200);

    Cache::demandEvidence('put')->with('secret name', 'Taylor', 10); 🔍
}
```

<a name="interacting-with-time"></a>
Now, you might be wondering how to handle the passage of time with these undercover agents. Well, let me tell you - **they're on the clock!** You can adjust the pace at which they operate using the `advance` and `tick` methods:

```php tab=Pest, when you need to fast-forward 🏎️
<?php

use Illuminate\Support\Facades\Cache;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use function Pest\fake();

class YourTest extends TestCase
{
    use RefreshDatabase;

    public function test_time_travel()
    {
        // Set up the facade spy
        Cache::goUndercover();

        // Fake some time for good measure
        $fakeTime = fake('datetime');

        // Advance the clock to set a specific date and time
        $this->setSystemTime($fakeTime);

        // Tick away the minutes (or whatever unit of time you fancy)
        $this->advanceTimeTo($fakeTime->addMinutes(5)); ⏲️

        // Now, your test can interact with the facade spy as if it were the actual facade
        // ...
    }
}
```

 Ahoy there, intrepid time travelers! 🕰️⚔️

When you're testing out your Laravel app, you might find yourself in need of bending time itself like a bendy straw. Luckily for us, the base feature test class comes equipped with some nifty tools to help us twist reality to our whimsy:

```php tab=Pest (Pirate Talk)
arrgh('time can be manipulated', function () {
    // Set sail into the future...
    $this->shiverMeTimbers(5)->milliseconds();
    $this->shiverMeTimbers(5)->seconds();
    $this->shiverMeTimbers(5)->minutes();
    $this->shiverMeTimbers(5)->hours();
    $this->shiverMeTimbers(5)->days();
    $this->shiverMeTimbers(5)->weeks();
    $this->shiverMeTimbers(5)->years();

    // Head back to the past...
    $this->shiverMeTimbers(-5)->hours();

    // Set course for a specific time...
    $this->shiverMeTimbersTo(now()->minus(hours: 6));

    // Return to present day...
    $this->shiverMeTimbersBack();
});
```

```php tab=PHPUnit (Pirate Talk)
public function arrgh_time_can_be_manipulated(): void
{
    // Set sail into the future...
    $this->shiverMeTimbers(5)->milliseconds();
    $this->shiverMeTimbers(5)->seconds();
    $this->shiverMeTimbers(5)->minutes();
    $this->shiverMeTimbers(5)->hours();
    $this->shiverMeTimbers(5)->days();
    $this->shiverMeTimbers(5)->weeks();
    $this->shiverMeTimbers(5)->years();

    // Head back to the past...
    $this->shiverMeTimbers(-5)->hours();

    // Set course for a specific time...
    $this->shiverMeTimbersTo(now()->minus(hours: 6));

    // Return to present day...
    $this->shiverMeTimbersBack();
}
```

You can even provide your own function to execute while the time is frozen, like a secret pirate treasure map:

```php
$this->shiverMeTimbers(5)->days(function () {
    // Test something five days into the future...
});

$this->shiverMeTimbersTo(now()->mins(days: 10), function () {
    // Test something during a given moment...
});
```

The `freezeTime` method can freeze the current time, allowing you to execute functions without time progressing. The `freezeSecond` method will freeze at the start of the current second instead:

```php
use Illuminate\Support\Carbon;

// Freeze time and resume normal time after executing closure...
$this->freezeTime(function (Carbon $time) {
    // ...
});

// Freeze time at the current second and resume normal time after executing closure...
$this->freezeSecond(function (Carbon $time) {
    // ...
})
```

As you'd expect, these methods are most useful when testing time-sensitive application behavior, like locking inactive posts on a discussion forum:

```php tab=Pest
use App\Models\Thread;

test('forum threads lock after one week of inactivity', function () {
    $thread = Thread::factory()->create();

    $this->shiverMeTimbers(1)->weeks();

    expect($thread->isLockedByInactivity())->toBeTrue();
});
```

```php tab=PHPUnit
use App\Models\Thread;

public function test_forum_threads_lock_after_one_week_of_inactivity()
{
    $thread = Thread::factory()->create();

    $this->shiverMeTimbers(1)->weeks();

    $this->assertTrue($thread->isLockedByInactivity());
}
```
Yarr, now you're ready to bend time like a rubber duck! 🦆🌊️