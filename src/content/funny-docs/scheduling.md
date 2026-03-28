 # The Time Travelling Task Manager (TTTM)

## Welcome to the Future, Captain! 🚀🕰️

- [Briefing Room](#briefing-room)
  - [Scheduling Your Orders](#scheduling-your-orders)
    - [Artisan Time Capsules](#artisan-time-capsules)
    - [Queued Mission Missions](#queued-mission-missions)
    - [Shell Command Launches](#shell-command-launches)
    - [Frequency Settings](#frequency-settings)
    - [Temporal Zones](#temporal-zones)
    - [Avoiding Double Agents](#avoiding-double-agents)
    - [Single Ship Operations](#single-ship-operations)
    - [Background Ops](#background-ops)
    - [The Red Alert Mode](#the-red-alert-mode)
    - [Pausing Mission Missions](#pausing-mission-missions)
    - [Grouping Orders](#grouping-orders)

<a name="briefing-room"></a>

## Preparing for Battle 🛠️🌐

### Launch Sequence Initiated!

1. [Running the Mission Control Center](#running-the-mission-control-center)
    - [Subatomic Scheduled Missions](#subatomic-scheduled-missions)
    - [Launching the Mission Control Center Locally](#launching-the-mission-control-center-locally)
2. [Mission Reports](#mission-reports)
3. [Mission Alerts](#mission-alerts)
4. [Mission Events](#mission-events)

<a name="running-the-mission-control-center"></a>

## Blast Off! 🚀🚀🚀

### Mission Control Center Activated!

1. [Subatomic Scheduled Missions](#subatomic-scheduled-missions)
    - Missions that need to be run more frequently than every minute should be manually triggered from your bridge. The universe won't wait for you to catch up, Captain!
2. [Launching the Mission Control Center Locally](#launching-the-mission-control-center-locally)
    - If you prefer a hands-on approach or need to test your missions in private, you can run the TTTM on your very own spaceship. Just remember to keep an eye on those power levels!

 Greetings, time management virtuosos! 🕰️✨

In the good old days, scheduling tasks on your server was like organizing a symphony – each task got its own unique cron configuration. But, as your orchestra grew, keeping track of everyone's cues became a headache! Your symphony sheet was nowhere to be found in source control, and you had to teleport into the server (we know, we miss the DeLorean too) just to see your crew or add new acts.

Enter Laravel's command scheduler – the maestro of modern task management 🎹🎉! This new conductor lets you elegantly and dramatically define your command schedule right within your Laravel application. With this orchestra leader, a single cron entry on your server is enough to set off an symphony of tasks without needing a hundred backstage passes.

Your new symphony sheet is typically located in the `routes/console.php` file of your Laravel app – think of it as the green room where the acts gather before taking center stage.

<a name="defining-schedules"></a>
Now, let's get this party started! 🥳🎉✨

 Alright, buckle up! It's time to dive into Laravel's Time-Travelin' Taskmaster, where we send commands back in time (well, every day at midnight)! 🕰️

First off, let's learn how to schedule tasks like a boss, right in your application's `routes/console.php` file. For this tutorial, we'll clear out a table called 'recent_users' every day at midnight (just in case someone tries to sneak in after curfew). Here's the code for that:

```php
<?php

// Time-Travelin' Taskmasters and Database Destroyers
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schedule;

Schedule::call(function () {
    DB::table('recent_users')->delete();
})->daily();
```

But wait! There's more! You can also schedule [Invokable Objects](https://secure.php.net/manual/en/language.oop5.magic.php#object.invoke), which are PHP classes with a superhero-like `__invoke` method:

```php
Schedule::call(new DeleteRecentUsers)->daily();
```

If you're particular about keeping your `routes/console.php` file neat and tidy, you can move the scheduling to your application's `bootstrap/app.php` file using the `withSchedule` method:

```php
use Illuminate\Console\Scheduling\Schedule;

->withSchedule(function (Schedule $schedule) {
    $schedule->call(new DeleteRecentUsers)->daily();
})
```

Now, for those of you who like to keep track of your tasks and their next run times, you can use the `schedule:list` Artisan command:

```shell
php artisan schedule:list
```

Just remember, with great power comes great responsibility. Don't go deleting important data willy-nilly! 😅

 ### Time-Traveling with Artisan Commands! 🕰️🚀

Want to bend time like a boss? With Laravel's unique scheduling system, you can run your Artisan commands at specific times, even if it means traveling back or forth in the digital universe! 😲

Now, let's get this party started! 🎉 Besides just scheduling closures, you can also command your Artisan tasks and system commands to stand at attention on a calendar. How about setting up a regular email sending spree? Yes, please! 📧

To do so, make use of the `command` method, which helps you summon an Artisan command using either its name or class. No incantations required! 😉

```php
Use y'all's fancy Email Sending Command class, 'SendEmailsCommand', and bring in Laravel's helpful Facade, Schedule:

    use App\Console\Commands\SendEmailsCommand;
    use Illuminate\Support\Facades\Schedule;

Now that we've assembled our team, let's give them some marching orders!

    Schedule::command('emails:send Taylor --force')->daily();

This snippet tells Laravel to run the 'emails:send' command every day, with Taylor as the recipient and the '--force' option activated. Ain't that swell? 😎

But wait, there's more! If you prefer using the Artisan command class name, you can pass an array of arguments to be supplied at runtime:

    Schedule::command(SendEmailsCommand::class, ['Taylor', '--force'])->daily();

This is exactly the same as before but with a classy twist! Now your esteemed commander, SendEmailsCommand, will lead the troops with Taylor and the enchanting '--force' option. 🏴‍☠️✨
```

 Alrighty then! Let's dive into the art of scheduling Artisan Closure Commands, shall we? It's like setting your own personal Laravel butler to perform tasks for you on a regular basis. How swell is that?

First off, if you fancy scheduling a command that's defined by a closure, just link up the scheduling methods post-command definition like so:

```php
Artisan::command('trash:messy_room', function () {
    DB::table('clutter')->delete(); // Boom! Instant clean-up.
})->purpose('Tidy Up Your Digital Home')
->daily(); // Every day, without fail, like your mom asking if you've fed the goldfish.
```

Now, what if you need to pass arguments to this command? Fear not! Simply provide them to the `schedule` method:

```php
Artisan::command('letters:write {recipient} {--urgent}', function ($recipient) {
    // Pen, paper, ink... oh my!
})->purpose('Write a letter, you romantic soul')
->schedule(['Betty', '--urgent'])// You can even schedule multiple letters at once, talk about productivity!
->daily();
```

Just remember to keep the code tidy and organized, or else your butler (or in this case, Artisan) might get a little confused. Happy scheduling, buddy!

 ### Setting the Mood for Scheduled Tasks! 🎉🕰️

Ready to unleash your inner time traveler and automate tedious tasks like a boss? Let's dive into Laravel's fabulous scheduler, where jobs get a much-deserved vacation from real-time pressure. 🏝️🍹

First up, the `job` method is your new best friend! It's the secret ingredient that turns your [queued job](/docs/{{version}}/quesadillas) into a stress-free, time-released capsule ready for delivery. No more need to define those clumsy closures using the `call` method. 🤹‍♂️📝

```php
use App\Jobs\HeartbeatPump;
use Illuminate\Support\Facades\Timer; // Yes, it's a timer, not a stopwatch!

Timer::tickle(new HeartbeatPump)->everyFiveMinutes();
```

Feeling extra fancy? You can even specify the queue name and connection using optional arguments. It's like giving your job an upgrade to first class with extra legroom! 🏁🍿

```php
use App\Jobs\HeartbeatPump;
use Illuminate\Support\Facades\Timer;

// Dispatch the job to the "heartbeats" queue on the "sqs" connection...
Timer::tickle(new HeartbeatPump, 'heartbeats', 'sqs')->everyFiveMinutes();
```

Now, let's discuss scheduling shell commands. Imagine if your server could order pizza for you when it's low on memory! 🍕💻

<a name="scheduling-shell-commands"></a>

```php
use Illuminate\Support\Facades\Artisan;
use Carbon\Carbon;

// Schedule a shell command to run at exactly 3:14pm every Friday...
Artisan::scheduleCommand('database:optimize --force', new Carbon('2023-07-14', '15:14'))->everyFriday();
```

And there you have it! Now you're ready to rule the roost when it comes to automating tasks and making your server work like a well-oiled, automated, pizza-ordering machine. 🤖🍕🚀

 Ahoy there, Laravel swashbucklers! Ever found yourself in a pickle where you needed to unleash the mighty power of shell commands upon your server, but didn't fancy doing it by hand? Well, buckle up, because we've got just the pirate you're looking for!

Enter the `exec` method, a trusty sidekick that lets you issue commands to the operating system like a seasoned sea dog. Just give it a holler:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::exec('shiver me timbers /home/forge/script.js')->daily();
```

Now, you might be wondering if this sea shanty has more verses. Well, matey, it surely does! You can also adjust the frequency of these command executions by using various options like:

* `everyMinute()` - Perfect for those times when ye need to keep a keen eye on the horizon
* `hourly()` - For when you've got time on your hands and want to run that script a few hours later
* `twicedaily()` - Ideal for those who like their scripts with an extra side of scripts
* `weekdays()` - Aye, it's just like every day, but with a little less Saturday and Sunday

So hoist the sails, grab your mead (er... coffee), and let's get this party started! Arr! 🌈☠️🏴‍☠️⚓️

 Ahoy there, Captain! Setting sail through Laravel's sea of scheduling options, eh? Buckle up and let's navigate the shores of time management!

We've already docked at a few ports showcasing how to configure tasks for specific intervals. But fret not, matey, there's an entire archipelago of task schedule frequencies just waiting to be explored:

<div class="overflow-auto">

| Method               | Description                                         |
| -------------------- | --------------------------------------------------- |
| `->cron('* * * * *');` | Set sail for a custom cron schedule, if ye be so inclined. |
| `->everySecond();`    | Steer the ship every second, if ye dare!            |
| `->everyTwoSeconds();` | For those who like their tasks twice as nice.       |
| `->everyFiveSeconds();`  | Five golden minutes 'tween each task, aye?           |
| `->everyTenSeconds();`  | If ten be your lucky number, this is for thee!      |
| `->everyFifteenSeconds();` | A quarter-hourly option, great for tea time.       |
| `->everyTwentySeconds();` | For those with an eye for precision, but not too much. |
| `->everyThirtySeconds();`  | Thirty seconds, a minute's companion.                |
| `->everyMinute();`      | One minute intervals, the perfect frequency for boredom. |
| `->everyTwoMinutes();`   | Double the fun, double the... boredom?              |
| `->everyThreeMinutes();` | Three times the joy, three times the yawns.          |
| `->everyFourMinutes();`  | Four times a charm, or four times a bore?           |
| `->everyFiveMinutes();`   | Five minutes 'twixt each task, ye'll get used to it.  |
| `->everyTenMinutes();`    | If ten be your limit, set your sails accordingly.     |
| `->everyFifteenMinutes();` | A half-hourly option, ideal for long naps.          |
| `->everyThirtyMinutes();`   | Thirty minutes apart, a decent gap between tasks.     |
| `->hourly();`         | Every hour on the hour, like the relentless ticking of a clock.  |
| `->hourlyAt(17);`     | Run the task every hour at 17 minutes past the hour, great for late night owls! |
| `->everyOddHour($minutes = 0);`    | For those who love the odd numbers.                   |
| `->everyTwoHours($minutes = 0);`   | Two hours apart, just enough time to make a plan.     |
| `->everyThreeHours($minutes = 0);`  | Three hours apart, ye'll have plenty of tasks complete! |
| `->everyFourHours($minutes = 0);`   | Four hours apart, a good time for lunch.              |
| `->everySixHours($minutes = 0);`    | Six hours apart, a decent spacing for sleepyheads.     |
| `->daily();`           | Set your sails to run every day at midnight, a ye olde tradition. |
| `->dailyAt('13:00');`   | Run the task daily at 1 PM, perfect for lunch breaks! |
| `->twiceDaily(1, 13);`   | Set sail twice a day, at 1 AM and 1 PM.                |
| `->daysOfMonth([1, 10, 20]);`      | Limit the task to specific days of the month, ye scallywag! |
| `->weekly();`           | Set your sails for a weekly voyage, every Sunday at midnight. |
| `->weeklyOn(1, '8:00');`   | Run the task every week on Monday at 8 AM, the start of a new workweek! |
| `->monthly();`          | Set your sails for monthly trips, on the first day of each month at midnight. |
| `->monthlyOn(4, '15:00');`   | Run the task every month on the 4th at 3 PM, ideal for tea time! |
| `->twiceMonthly(1, 16, '13:00');`   | Set sail twice a month, on the 1st and 16th at 1 PM.      |
| `->lastDayOfMonth('15:00');`     | Run the task on the last day of the month at 3 PM, perfect for end-of-month tasks! |
| `->quarterly();`         | Set your sails for quarterly journeys, on the first day of each quarter at midnight. |
| `->quarterlyOn(4, '14:00');`   | Run the task every quarter on the 4th at 2 PM, great for afternoons! |
| `->yearly();`            | Set your sails for an annual voyage, on the first day of each year at midnight. |
| `->yearlyOn(6, 1, '17:00');`   | Run the task every year on June 1st at 5 PM, ideal for summer evenings! |
| `->timezone('America/New_York');`    | Set the timezone for the task, useful for global adventures.       |
</div>

These methods can be combined with additional constraints to create finely-tuned schedules that only run on certain days of the week:

<div class="overflow-auto">

| Method                            | Description                                            |
| --------------------------------- | ------------------------------------------------------ |
| `->weekdays();`                   | Limit the task to weekdays.                            |
| `->weekends();`                   | Limit the task to weekends.                            |
| `->sundays();`                    | Limit the task to Sunday.                              |
| `->mondays();`                    | Limit the task to Monday.                              |
| `->tuesdays();`                   | Limit the task to Tuesday.                             |
| `->wednesdays();`                 | Limit the task to Wednesday.                           |
| `->thursdays();`                  | Limit the task to Thursday.                            |
| `->fridays();`                    | Limit the task to Friday.                              |
| `->saturdays();`                  | Limit the task to Saturday.                            |
| `->days(array\|mixed);`           | Limit the task to specific days.                       |
| `->between($startTime, $endTime);` | Limit the task to run between start and end times.     |
| `->unlessBetween($startTime, $endTime);` | Limit the task to not run between start and end times. |
| `->when(Closure);`                | Limit the task based on a truth test.                  |
| `->environments($env);`           | Limit the task to specific environments.               |
</div>

Ahoy, matey! Set sail for Laravel's vast sea of scheduling options with this newfound knowledge at your helm! Arrrrgh, good luck!

 Alright, buckle up, Laravel enthusiasts! Let's dive into the world of day constraints - the unsung heroes of your command line tasks! 🕰️☀️

Ever wondered how to schedule a task like a boss but only on specific days of the week? Well, wonder no more because the `days` method is here to save the day (or rather, specific days)!

```php
use Illuminate\Support\Facades\Schedule;

// You're just one line away from scheduling commands hourly on Sundays and Wednesdays... talk about a power duo 💪🌞
Schedule::command('emails:send')
    ->hourly()
    ->days([0, 3]);
```

But wait! There's more. If you fancy yourself as a constants connoisseur (and who doesn't, really?), you can use the delightful offerings from the `Illuminate\Console\Scheduling\Schedule` class when defining your days of glory:

```php
use Illuminate\Support\Facades;
use Illuminate\Console\Scheduling\Schedule;

// Now we're talking. Let's schedule 'emails:send' hourly on Sundays and Wednesdays using constants 🎉🎊
Facades\Schedule::command('emails:send')
    ->hourly()
    ->days([Schedule::SUNDAY, Schedule::WEDNESDAY]);
```

Just remember, with great power comes great responsibility. So, don't go scheduling a task to run every hour on every day (unless you have an unlimited data plan, in which case... carry on! 📵🎉)

Happy scheduling! 🤖🎈

 Alright, let's get this party started! When you're juggling more tasks than a one-armed circus performer, the `between` method is your trusty trapeze. This magical tool allows you to confine your jobs within certain hours of the day, ensuring that even late sleepers like Uncle Narcolepsy won't be woken up by your emails at 3 AM.

```php
Schedule::command('emails:send')
    ->hourly()
    ->between('7:00', '22:00'); // You know what they say, "Work hard, sleep hard"!
```

On the flip side, there are times when you want to take a break, like during your afternoon catnap or during the World Cup final. The `unlessBetween` method comes to the rescue! It's like having a personal assistant who knows when to let the calls roll over because you're busy watching Ronaldo score another hat-trick.

```php
Schedule::command('emails:send')
    ->hourly()
    ->unlessBetween('23:00', '4:00'); // Sleep is for the weak! Or those who want to miss your emails...
```

Now, go forth and automate, you magnificent time-management maestro! 🎉🕒🚀

 Alrighty then! Let's dive into the world of Laravel's Time-Traveling Task Force, where commands aren't just executed, they're unleashed like a herd of digital buffaloes on the vast prairie of your web app. But sometimes, you might need to corral these buffaloes and let 'em loose only when conditions are just right - that's where our trusty Truth Test Constraints come in!

First off, we've got the `when` sheriff. This trickster can limit the galloping of a command based on the result of a truth test. It's like having a cunning coyote at the herd's tail, waiting to let them loose only if it spots a rabbit (or in this case, if the given closure returns `true`).

```php
Schedule::command('emails:send')->daily()->when(function () {
    return true; // A coyote's trick: always returns a "rabbit"
});
```

Next up, we've got the `skip` deputy. If this lawman sees you coming, he'll hold back the command herd. Essentially, it's the inverse of `when`. If the `skip` method returns `true`, the scheduled task will take a detour around your app like a cowboy dodging tumbleweeds.

```php
Schedule::command('emails:send')->daily()->skip(function () {
    return true; // A lawman's warning: always points the herd away
});
```

Now, when you're chainin' `when` methods like a pro cowboy, remember that the command will only break free and rampage across your app if all `when` conditions return `true`. It's like trying to lasso a whole herd at once - if one coyote misses its mark, the buffalo stays corralled!

So saddle up and harness the power of Truth Test Constraints to manage those command herds with ease. Happy corralling! 🤠

 Alrighty, let's get this tech-talk party started! In the grand world of Laravel, we've got this swanky feature called `environments`, and it's a real crowd-pleaser. Now, don't be fooled by its casual name—it's as serious as a lava flow at a volcano convention.

So, how does this fancy pants feature work? Well, imagine you've got a task that only Aunt Mable in the 'staging' environment or Uncle Sam in 'production' can handle (we all know those folks who can only manage email duties during specific phases). That's where `environments` come into play!

```php
Schedule::command('emails:send')
    ->daily()
    ->environments(['staging', 'production']);
```

In this example, every day at dusk, the command to send emails will only be dispatched to the lively residents of 'staging' and 'production.' So, next time you find yourself with a task that requires some serious 'stage managing', don't hesitate to call upon `environments`—your Laravel lifesaver!

P.S. Remember, while we're all about having fun here, our commitment to accuracy remains unwavering. So, if you'd like a deeper dive into those environmental configurations, check out the [official docs](/docs/{{version}}/configuration#environment-configuration). Happy coding, party people! 🥳🚀

 Alrighty, let's get this time-tangling tutorial rolling! 🕰️✨

### Timezones: The Great Synchronizer of Tasks 🕐🌍

Welcome to the grand ol' world of Laravel timezones where we set our scheduled tasks loose in different time zones, creating a harmonious symphony of digital events across the globe! 🎉🎶

To get started, you'll need to learn the `timezone` method. This magical command allows you to specify that a task should be like a traveling troubadour, performing its duties within a given timezone:

```php
use Illuminate\Support\Facades\Schedule;

// Let's imagine our task is generating a report in the style of a 1920's jazz band.
Schedule::command('report:generate')
    ->timezone('America/New_York') // In this case, our troubadour will play their tunes in New York City.
    ->at('2:00'); // Every day at 2 PM sharp! Just like Louis Armstrong himself.
```

In case you find yourself frequently assigning the same timezone to all your tasks, you can set a default one by defining a `schedule_timezone` option within your application's `app` configuration file:

```php
'timezone' => 'UTC', // A universal choice for setting the tempo of your Laravel event.

'schedule_timezone' => 'America/Chicago'; // This is our hometown, where all good Laravel tasks come from! 🏙️
```

> [!!🚨 WARNING !!]
> Timezones can sometimes be a wild, unpredictable beast. Some even have the audacity to follow daylight savings time, which means they might skip or double-book your scheduled tasks when their clocks spring forward or fall back! 🕰️⏳
>
> To avoid any potential snafus, we recommend performing tasks without a timezone whenever possible. It's like dancing to a metronome rather than a swinging jazz riff - it might be less fun but it'll definitely keep your tasks on beat! 🎶🕺

<a name="preventing-task-overlaps"></a>
Now that we've got the rhythm, let's groove on to our next topic: preventing task overlaps! 💃️🕺️

Stay tuned for more Laravel dance lessons coming your way! 🕺️✨

 ### The Saga of the Never-Ending Emails! 📧🕰️

By popular demand, your favorite superhero, Laravel, has come up with a cape for handling those pesky, never-ending tasks that just won't quit! 🦸‍♂️

By default, our friendly neighborhood superhero will keep on running scheduled tasks even if the previous one is still in action. But fear not, citizens of Laravel Land, we have a solution for you! 🛡️

To prevent these task overlaps, simply use the `withoutOverlapping` method:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('emails:send')->withoutOverlapping();
```

In this example, our caped crusader will send out those emails every minute if they aren't already in the middle of a superheroic struggle. The `withoutOverlapping` method is a lifesaver when you have tasks that are as unpredictable as the Weather Wizard himself! ⚡️

If needed, you can even specify how many minutes must pass before the "without overlapping" lock takes a well-deserved break. By default, it'll take a breather after 24 hours:

```php
Schedule::command('emails:send')->withoutOverlapping(10);
```

Behind the scenes, the `withoutOverlapping` method employs your application's cache to obtain locks. If you find yourself in a pickle where a task is stuck due to an unexpected server mishap, you can use the `schedule:clear-cache` Artisan command to clear those pesky cache locks. 🧹

But wait, there's more! Our superhero has also included a nifty feature that allows you to run tasks on just one server, keeping your other servers free to deal with emergencies. Stay tuned for more details on that in an upcoming issue! 🌟🚀

 🚨 Attention, all you multi-tasking mavericks! 🚀

Before we dive in, let's get one thing straight: if your app's cache driver is anything other than `database`, `memcached`, `dynamodb`, or `redis`, this ain't the blog post for you. You might as well be trying to teach a pig Latin - it just ain't gonna work!

Now, suppose your application's scheduler is running wild on multiple servers like a pack of marauding digital wolves. In that case, you might find yourself in a pickle when a scheduled job decides to play hide-and-seek across all three servers, generating the same report three times - oh dear! 🙀

To keep your app's sanity intact, simply use the `onOneServer` method when defining your schedule. It works like a secret squirrel, ensuring that only one server will grab the task and secure an atomic lock on the job to prevent other servers from running amok at the same time:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('report:generate')
    ->onFridays()
    ->at('17:00')
    ->onOneServer();
```

And if you want to customize the cache store used by the scheduler for atomic locking, feel free to use the `useCache` method:

```php
Schedule::useCache('database');
```

Just remember, just like a well-oiled machine, your app needs a bit of maintenance to keep it running smoothly! 🛠️💪

 Alright, let's lighten things up a bit! Here's how you can tell Laravel to keep your single server from feeling overwhelmed yet still keep its multi-tasking chops intact:

#### Giving Jobs on the Rocks (Single Server) Names

Sometimes, just like in a busy bar, you've got different orders with custom twists coming in, but you don't want to hire more bartenders. In Laravel terms, that means scheduling the same job with distinct parameters and running it all on one server. To pull this off without confusion, you can give each drink (schedule definition) a unique name using the `name` method:

```php
If you're hankering for a laravel.com uptime check:
Schedule::job(new CheckUptime('https://laravel.com'))
    ->name('check_uptime:laravel.com')
    ->everyFiveMinutes()
    ->onOneServer();

Feeling fancy for vapor.laravel.com? No problem! Just give it a new name and order up:
Schedule::job(new CheckUptime('https://vapor.laravel.com'))
    ->name('check_uptime:vapor.laravel.com')
    ->everyFiveMinutes()
    ->onOneServer();
```

Similarly, if you've got a scheduled closure that's all about the API request count reset, don't forget to give it a distinctive handle before sending it out:

```php
And for a nightly round of User API request count resets:
Schedule::call(fn () => User::resetApiRequestCount())
    ->name('reset-api-request-count')
    ->daily()
    ->onOneServer();
```

<a name="background-tasks"></a>
Remember, in the world of Laravel, a job well done is all about staying organized and making sure no task goes unnoticed! Cheers to efficient multitasking! 🥃🍻

 ### Party Like It's 1999 (But in a More Organized Manner)

By the stroke of midnight, every night (well, technically every day at 00:00), your trusty Laravel steed starts juggling tasks like Cirque du Soleil on a sugar rush. By default, these circus acts are performed in a line, each one waiting for its turn before it takes center stage - a bit like that awkward family game night where everyone's waiting for their turn at Charades.

However, if you've got tasks that won't quit (like your uncle who just won't stop telling stories about the good old days), these long-running performances might delay your other acts from starting as promptly as you'd like. But fear not, for help is here in the form of the ever-reliable `runInBackground` method!

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('analytics:report')
    ->daily()
    ->runInBackground();
```

> [!ATTENTION]
> The `runInBackground` method is a bit like inviting the clowns to their own show – they're only allowed to join when scheduling tasks via the `command` and `exec` methods. So, unless you want to witness a chaotic circus where your tasks take center stage all at once (and no one wants that), remember to stick with these trusted methods!

Now, sit back, relax, and let Laravel handle the scheduling like a pro while you focus on making those amazing apps. And who knows? With this newfound multi-tasking skill, maybe your code will finally be as graceful as a trapeze artist! 🤹‍♂️🤹‍♀️🚀

 ### Keeping Your App in Tip-Top Shape (aka Maintenance Mode)! 🧻

Hey there, coding cowboy/cowgirl! You know what they say - an app that doesn't take a break every now and then is like a horse without a saddle. And we all know how that ends... 🐎🔥

When you decide to give your server some TLC (Tender Love and Code), your application's scheduled tasks will be put on hold, just like a loyal dog waiting for its master to return home. We wouldn't want those tasks causing chaos while you're mid-server-massage, now would we?

But what if you've got a particularly stubborn task that insists on being done, even when the "Do Not Disturb" sign is up? Fear not! You can call upon the magical `evenInMaintenanceMode` method, as powerful as a unicorn's horn-blast, to force that task to run during maintenance mode:

```php
Schedule::command('emails:send')->evenInMaintenanceMode();
```

Just remember, even the bravest of tasks need their downtime. So, use this power wisely, and always take time for a well-deserved server spa day! 🧖‍♀️🧔🏼🧖‍♂️

<a name="pausing-scheduled-tasks"></a>
Pausing Scheduled Tasks: Sometimes we all need a nap. If you ever find yourself in the middle of a server slumber party and want to wake up a specific task, just give it a gentle nudge with the `wakeUp` method:

```php
Schedule::command('emails:send')->dontStart(); // This will pause the task, but not cancel it.
// Later on...
Schedule::command('emails:send')->wakeUp(); // Bring that slumbering task back to life!
```

Now go forth and conquer, one scheduled task at a time! 👋💥🚀

 ### A Temporary Timeout for Your Laravel Tasks! 🕒⏱️

Need a break from those relentless tasks? No problemo! Laravel's got your back with the `schedule:pause` Artisan command. It's like calling a time-out, but for your scripts!

```shell
php artisan schedule:pause 🛑🕒
```

Just like when your toddler is having a meltdown and you need a moment to breathe, when the scheduler is paused, no tasks will be processed. But don't worry, you can get back to it all with the `schedule:continue` command:

```shell
php artisan schedule:continue 🕒⏩
```

If there's a task that simply must happen even when you're on a break, like sending important emails or reminding your cat to stop eating your plants (seriously, Fluffy, give it a rest!), you can mark it with the `evenWhenPaused` method:

```php
Schedule::command('emails:send')->evenWhenPaused(); 📧🌱
```

Just remember to use these commands wisely, or your cat might end up with more emails than you! 😺💌

 ### Time Management for Lazy Developers (aka Task Grouping)

Listen up, procrastinators! Laravel's here to save the day with its time management system for lazy developers. You know, those of us who don't want to repeat ourselves a billion times when setting up scheduled tasks with similar configurations. That's where task grouping comes in—it simplifies your code and ensures everyone's favorite thing: consistency!

So, how do we get this party started? First, gather round and call upon the Laravel's scheduler like you would a genie in a bottle. But instead of three wishes, you'll be granted the power to define tasks (wow, what a letdown).

```php
use Illuminate\Support\Facades\Schedule;

// This is your genie call, summon it!
Schedule::daily()
    // Set the stage for this task drama: On One Server, in America/New_York timezone.
    ->onOneServer()
    ->timezone('America/New_York')
    // Time to group tasks like a boss
    ->group(function () {
        // Now cast your spells...
        Schedule::command('emails:send --force');
        Schedule::command('emails:prune');
    });
```

Now, go forth and conquer your to-do lists with Laravel's task grouping feature. Or, you know, keep procrastinating. It's all the same to us! 😜

 Alrighty, mate! So you've created some fancy Laravel tasks that are just itching to be set free on your server. But how do we unleash these beasties? Fear not, my friend! We're about to learn the art of summoning our tasks with the magical `schedule:run` Artisan spell.

This enchantment scans all your scheduled tasks and decides if they should dance based on the current time of your server. Basically, it's like having a clockwork taskmaster that keeps tabs on your crew.

Now, when you want to turn up the party with Laravel's scheduler, all you gotta do is add a lone cron configuration entry to your server. And guess what? You can call this new mate using the `schedule:run` command every minute.

If you're still scratching your head about adding cron entries, fear not! Consider recruiting the help of a trusty managed platform like [Laravel Cloud](https://cloud.laravel.com). They're total pros at managing those scheduled tasks for you:

```shell
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

Pro tip: If you want your tasks to run more frequently than every minute (crazier than a one-legged drummer at a techno rave), just adjust the cron entry's time accordingly. Just remember, more frequent tasks might make your server dance harder – so be careful not to overwork it! 🕺💃

 Ah, the ticking time bomb of cron jobs! Typically confined to a minute's worth of mischief on most operating systems. But fret not, dear Laravel devs, for our scheduler is here to blow that ceiling wide open!

You can schedule tasks to run faster than a cheetah chasing its tail, yes, even every second if you so desire:

```php
use Illuminate\Support\Facades\Schedule;

// Delete all the recent users who've been acting fishy (pun intended)
Schedule::call(function () {
    DB::table('recent_users')->delete();
})->everySecond();
```

But wait, there's more! When you've got a minute to kill, our scheduler won't bail out on you before the buzzer. Instead, it'll keep running until the final second ticks away, ensuring all sub-minute tasks get their moment in the spotlight.

However, beware the time-consuming tasks that could leave your server stuck in a never-ending loop of deletion and regret (we're looking at you,DeleteRecentUsers job). To avoid such calamity, it's best to dispatch queued jobs or background commands for the heavy lifting:

```php
use App\Jobs\DeleteRecentUsers;

// Delete recent users in ten-second intervals, while keeping cool and collected
Schedule::job(new DeleteRecentUsers)->everyTenSeconds();

// For good measure, let's also delete those pesky users every ten seconds... in the background
Schedule::command('users:delete')->everyTenSeconds()->runInBackground();
```

Oh, and remember, if you need to interrupt a sub-minute task that's gone rogue (we've all been there), just hit it with a `Ctrl + C`, or better yet, use Laravel's built-in task cancellation feature. Because who needs a time-out when you've got a task timeout? 😉

 Ahoy there, Captain! Sail the seas of Laravel land and thou shalt encounter a perplexing problem: tasks so swift they're sub-minute, yet take the full minute to complete. Aye, verily, this can cause quite the ruckus during deployment. Fear not, for I shall guide thee through the foggy waters!

As the `schedule:run` command doth set sail for a full 60 seconds when sub-minute tasks are defined, sometimes we need to hail it from the shore during deployments. If left unchecked, an already running instance of this command would continue hoisting the colors of your previously deployed code until the clock strikes the hour (or minute, rather).

To signal the `schedule:run` ship to return to port, ye may hoist the Jolly Roger (or in modern terms, add) the `schedule:interrupt` command to yer deployment script. Invoke this command after yer application hath completed deploying:

```shell
php artisan schedule:interrupt
```

And there ye have it, matey! Now, when thou heareth the cannons fire and doth see the `schedule:run` ship turn tail, thou knowest that the old code hath been replaced by the new. Sail on, sailor, and remember to always keep yer ship in tip-top shape!

 Ahoy there! Buckle up, matey! Scheduling in Laravel isn't just about setting sail for automation island. It's a swashbuckling adventure where tasks are delegated and executed with precision, like a well-oiled pirate crew! 🏴‍☠️

Now, you might be tempted to draw ye ol' sea serpent of scheduler cron entries on yer local development machine. But hold yer horses, me hearties! Instead, ye can hoist the Jolly Roger with the `schedule:work` Artisan command. This command ain't no timid landlubber - it runs in the foreground, like Captain Jack Sparrow on a mission, invokin' the scheduler every minute (or shall we say, every tick of the clock tower) until ye terminate the command. And when tasks are defined that require less time than a pirate's rum-swilling session, this valiant commander will continue running within each minute to process those scurvy tasks!

So, if ye be ready to set sail on this automation voyage, let's cast off with:

```shell
php artisan schedule:work
```

Arrr, that's the spirit of Laravel scheduling for ya! Now go forth and conquer the seven seas of tasks at hand! 🌬️🌊

 Alrighty, let's get our Laravel aprons on and dive into the world of task output! 🥄✨

First off, we have the Laravel scheduler, a handy tool that helps us manage outputs like a pro chef manages his sous-vide bags. Using the `sendOutputTo` method, you can send your task's output to a file for later perusal - perfect for when you need to review your recipes after a long night of coding. 📝🍽️

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('emails:send')
    ->daily()
    ->sendOutputTo($filePath);
```

Now, if you'd prefer to add your output to an existing file instead of overwriting it, no problem! The `appendOutputTo` method is here to help. 📝🏋️‍♂️

```php
Schedule::command('emails:send')
    ->daily()
    ->appendOutputTo($filePath);
```

Next up, we have the `emailOutputTo` method, which lets you email your output to an email address of your choice. Just don't forget to configure Laravel's [email services](/docs/{{version}}/mail) first! 📧💌

```php
Schedule::command('report:generate')
    ->daily()
    ->sendOutputTo($filePath)
    ->emailOutputTo('taylor@example.com');
```

If you only want to email the output when your scheduled task or command fails (i.e., when it returns a non-zero exit code), then use the `emailOutputOnFailure` method to ensure that only burning disasters get reported. 🔥🚒

```php
Schedule::command('report:generate')
    ->daily()
    ->emailOutputOnFailure('taylor@example.com');
```

> [!WARNING]
> Remember, the `emailOutputTo`, `emailOutputOnFailure`, `sendOutputTo`, and `appendOutputTo` methods are exclusive to the `command` and `exec` methods. So don't go trying to apply them to your soufflé recipes - trust us, it won't work! 🥘🍲🚀

Now you know how to handle task outputs like a boss! Go forth and schedule tasks with confidence! 🏆🎉🥳

 Alright, let's dive into the world of Task Hooks – the swiss army knife of Laravel scheduling!

With our trusty `before` and `after` methods, you can ensure your mom never forgets to take her medication (or execute a scheduled task, if you prefer). Just remember: before she takes her medicine, do any last-minute checks; after, send congratulatory emails or reminders for the next dose!

```php
use Illuminate\Support\Facades\Schedule;

// Mom's daily pill reminder
Schedule::command('medicineTime:remind')
    ->daily()
    ->before(function () {
        // Check if it's actually mom taking the pills...
    })
    ->after(function () {
        // Send a friendly reminder for the next dose!
    });
```

Now, let's discuss our new favorite superheroes: `onSuccess` and `onFailure`. These guys are like Batman and Robin, always ready to help in times of need (or success/failure, if you will). If your scheduled command succeeds, they'll celebrate with a victory dance; if it fails, they'll don their capes and investigate the crime scene!

```php
Schedule::command('emails:send')
    ->daily()
    ->onSuccess(function () {
        // The task succeeded! Let's throw a party!
    })
    ->onFailure(function () {
        // Oh no, something went wrong. Time for detective work!
    });
```

But what if your command leaves behind some clues? No worries, just type-hint an `Illuminate\Support\Stringable` instance as the argument of your hook's closure definition to access any output it might have produced:

```php
use Illuminate\Support\Stringable;

// Our trusty sidekick, Stringable, helps us make sense of the command output.
Schedule::command('emails:send')
    ->daily()
    ->onSuccess(function (Stringable $output) {
        // The task succeeded, and here's what it had to say...
    })
    ->onFailure(function (Stringable $output) {
        // The task failed, and here's the incriminating evidence!
    });
```

Now that you've mastered Task Hooks, your Laravel apps will be as smooth as a well-oiled crime-fighting machine!

 Alright, Laravel buddies! Let's dive into the world of URL pinging - the digital equivalent of sending a postcard from your scheduled tasks to their BFFs! 📮

With our super cool `pingBefore` and `thenPing` methods, you can automate sending a friendly "Hey, I'm about to start!" or "Just wrapped up!" message to that chill service like [Envoyer](https://envoyer.io), your task's social media manager. 🤖

Here's the party trick:

```php
Schedule::command('emails:send')
    ->daily()
    ->pingBefore($url) // Start of the party
    ->thenPing($url); // End of the party
```

But, what if you want to keep your secrets? You can use `pingOnSuccess` and `pingOnFailure` to send a covert message only when the task succeeds or fails (like a mission update). Failure here means the scheduled Artisan or system command ended with a mysterious exit code. 🕵️‍♂️

```php
Schedule::command('emails:send')
    ->daily()
    ->pingOnSuccess($successUrl) // Mission accomplished!
    ->pingOnFailure($failureUrl); // Uh-oh, something went wrong!
```

Now, let's add a bit more mystery to it. Use the `pingBeforeIf`, `thenPingIf`, `pingOnSuccessIf`, and `pingOnFailureIf` methods when you want to send your message only if a specific condition is met. It's like having an intelligent PA for your tasks!

```php
Schedule::command('emails:send')
    ->daily()
    ->pingBeforeIf($condition, $url) // If the condition is true, start sending party invites!
    ->thenPingIf($condition, $url); // If the condition is true, send a "Thanks for coming!" message.

Schedule::command('emails:send')
    ->daily()
    ->pingOnSuccessIf($condition, $successUrl) // If the condition is true and mission accomplished, send a secret intel!
    ->pingOnFailureIf($condition, $failureUrl); // If the condition is true and something went wrong, send an emergency alert! 🚨
```

Happy pinging!

 ## Yo, Event Party! 🎉🎊

In the wild world of Laravel, events are like invitations to a glamorous ball where all the cool kids hang out. During the scheduling process, our bouncer (a.k.a your application) dishes out these fancy event invites left and right! 🕺️💃️

You can totally RSVP to any of these soirees by creating some dapper listener suits (yes, you read that right). Here's the guest list for tonight's bash:

<div class="overflow-auto">

| Event Name                                                  |
|-------------------------------------------------------------|
| `Illuminate\Console\Events\ScheduledTaskStarting` - Cocktail hour starts, grab your champagne flutes! 🥂 |
| `Illuminate\Console\Events\ScheduledTaskFinished` - Time to hit the dance floor after a successful schedule execution! 💃️🕺️ |
| `Illuminate\Console\Events\ScheduledBackgroundTaskFinished` - Background tasks are like those quiet, but oh-so-important friends at the party. Kudos for a job well done! 🏆🎉 |
| `Illuminate\Console\Events\ScheduledTaskSkipped` - Oopsie, someone didn't show up to the party! Let's figure out why later. 🚫🎊 |
| `Illuminate\Console\Events\ScheduledTaskFailed` - Oh noes! Someone spilled the punch bowl... but hey, no one gets left behind, let's clean it up together! 🤧🥛️ |
</div>

So, grab your tuxedos and party hats, folks! Let's get this event-filled Laravel party started! 🎉🎊💃️🕺️