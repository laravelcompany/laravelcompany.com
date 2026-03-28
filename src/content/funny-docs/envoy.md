 ## Laravel's Magical Deployment Genie: Envoy! 🧞‍♂️🎩

Prepare to embark on a magical journey, my friend! We're about to whisk you away from the drudgery of manual deployments and into the enchanting realm of Laravel Envoy. It's like having a personal deployment genie! 💫✨

<a name="installation"></a>
### Installation: 🎩🧞‍♂️🔮

First things first, let's get this genie bottle (your project) cleaned and polished for our magical friend. Run the following spell (command) to conjure up Envoy within your project:

```bash
composer require laravel/envoy
```

<a name="writing-tasks"></a>
### Writing Tasks: 📝🧞‍♂️✨

#### Defining Tasks: ✍️🧞‍♂️🔮

You know how you have a list of chores that you'd rather not do? Well, now you can give those to our deployment genie! Define your tasks in the `.envoy` file, and watch him work his magic.

#### Multiple Servers: 🌐🧞‍♂️🔮

Have multiple servers that need attention? No problemo! Just add them to the `.envoy` file, and our genie can handle them all with a wave of his wand (command).

#### Setup: 🏠🧞‍♂️✨

Set up your server configurations, database connections, and more! It's like casting a powerful spell to prepare the battlefield for deployment.

#### Variables: 📝🧞‍♂️🔮

Just as in any good story, our genie needs variables to make things happen. Define them in the `.envoy` file, and watch your tasks come to life!

#### Stories: 📚🧞‍♂️✨

Write down the sequence of events for each deployment in a "story." It's like writing a script for our genie to follow, ensuring everything is done just right.

#### Hooks: 🎒🧞‍♂️🔮

Hooks are those little triggers that make things happen at the right time. Add them to your tasks and let our genie know when to perform certain actions during deployment.

<a name="running-tasks"></a>
### Running Tasks: 🚀🧞‍♂️✨

#### Confirming Task Execution: 📜🧞‍♂️🔮

Before our genie performs a task, he'll ask for your confirmation. It's like asking you to sign a magic contract before he casts the spell!

<a name="notifications"></a>
### Notifications: 📣🧞‍♂️✨

When our genie finishes a task, he'll want to share the news with his friends (you and your team). Choose from Slack, Discord, Telegram, or Microsoft Teams to receive updates on your magical deployments! 🎉🥳

 ## Welcome to Laravel's Superhero in a Shell! 🦸‍♂️🚀

Meet [Laravel Envoy](https://github.com/laravel/envoy) - your swiss army knife for handling everyday chores on those distant, mystical servers of yours! With its sleek Blade (not the vampire slayer kind, but rather our own PHP templating engine) syntax, you can whip up deployment scripts, Artisan commands, and other magical tasks with a snap of your fingers!

🎓 Fun fact: The name "Envoy" is derived from the French word for 'messenger,' fitting since it delivers your commandments to servers just as efficiently as the original! 🕵️‍♂️

Now, you might be wondering, "What about my trusty Windows PC?" Fear not! By harnessing the power of [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10), our tool can perform wonders even on your Windows machine!

👉 Let's get started, champ! Here's a roadmap for your superhero journey:

<a name="installation"></a>

## Installing the Legend 🦸‍♂️✨

1. First, make sure you have [Git](https://git-scm.com/) installed on your computer (or at least know how to summon it when needed).
2. Next, grab a copy of our shiny code using this magical incantation: `git clone https://github.com/laravel/envoy.git`
3. Once you've conjured up the repository, navigate deep into its mysteries using the command `cd envoy`.
4. With your newfound power in hand, deploy Envoy to your server via SSH: `php artisan serve --host=0.0.0.0` (you can also cast a charm by running `composer install` for a more permanent residence).
5. Now that you've enchanted your server with our mighty tool, you can begin to conquer the world of remote server management! 🌍🌈🌟

 Alrighty, let's get this show on the road! First things first, you gotta bring home the band (Envoy) for your project using the Composer package manager. It's like inviting the coolest geek at the party to join yours, but instead of chips and dip, they bring some serious PHP magic:

```shell
composer require laravel/envoy --dev
```

Once Envoy accepts your friendship request (er, installation), they'll set up camp in your application's `vendor/bin` directory. It's like they're saying, "I'm here to party, but first, let me check my tent." You can now summon them to the dancefloor with:

```shell
php vendor/bin/envoy
```

Now that Envoy is all settled in, it's time for a shindig of productivity! 🎉🎈🥳

 Ahoy there, coding buccaneers! Let's set sail on an exciting voyage through Laravel'sTask Management System - a veritable treasure trove for the organized programmer. But first, let's don our eye patches and grab a compass to navigate this lively sea of commands!

<a name="defining-tasks"></a>
### Defining Tasks

Before you can embark on your coding journey, ye need ta define yer tasks. Think o' these as a list o' chores that Laravel will execute when commanded. To create a new task, fire up yer terminal and type:

```bash
php artisan make:task MyTaskName
```
Replace `MyTaskName` with the name ye wish ta give yer new task. Laravel will create a fresh PHP file in the appropriate directory, ready for ye to customize and conquer!

<a name="scheduling-tasks"></a>
### Scheduling Tasks

Now that yer tasks are defined, it's time to schedule 'em! Just like a captain planning his ship's route, Laravel gives ye the power to decide when ta run yer tasks. To do this, add yer task to the `schedule` method within the App\Console\Kernel file:

```php
protected function schedule(Schedule $schedule)
{
    $schedule->command('task:my-task')->daily();
}
```
In this example, Laravel will run the `MyTaskName` command daily. You can also adjust the frequency by using commands such as `everyMinute`, `hourly`, `twicedaily`, and `weekly`.

<a name="running-tasks"></a>
### Running Tasks

If ye need ta manually execute a task, Laravel makes it easy peasy. Simply open yer terminal and type:

```bash
php artisan task:my-task
```
And there ye have it! Your task will be executed on the spot. But remember, matey, tasks scheduled in the `schedule` method will automatically run without this command.

<a name="command-line-interface"></a>
### Command Line Interface (CLI)

Laravel's robust Command Line Interface (CLI) is the swashbuckler's best friend. With it, ye can perform various tasks with just a few keystrokes. To see all available commands, type:

```bash
php artisan list
```
Arrr, that be useful! Now go forth and conquer the world of Laravel task management!

 Alrighty then! Let's dive into the ticklish world of Taskdom, Laravel's very own remote server command wrangler! Taskdom is the linchpin of our operation, defining the shell commands that should gallop across your distant servers like a digital posse when you summon 'em. Ever wanted to shout "php artisan queue:restart" at every queue worker server in town? Well, now you can!

All your Taskdom missions need to be penned down in an `Envoy.blade.php` file smack-dab in the heart of your application. Let's get this party started with a bang:

```blade
@servers(['web' => ['gunslinger@192.168.1.1'], 'workers' => ['cowboy@192.168.1.2']])

@task('restart-queues', ['on' => 'workers'])
    cd /home/cowboy/dusty_town
    php artisan queue:restart
@endtask
```

Got it? Great! Now, an array of `@servers` is lined up at the top of the file, making those servers ride shotgun in your task declarations through the `on` option. Be sure to keep the `@servers` herd on one line, just like a well-trained posse should be. And when it comes to your `@task` declarations, saddle up and lasso the shell commands you want to run on those servers during a task callout.

Now, go forth and conquer the Wild West of server management with Taskdom! Happy herding!

 Alrighty, let's get this party started on your trusty ol' computer! You know, the one with the comfy keyboard and questionable Wi-Fi strength. To make Laravel dance to your tune locally, you gotta play the IP address card right – and 127.0.0.1 is that charming suitor everyone knows.

Here's the pickup line for your code:

```blade
@servers(['LocalHero' => '127.0.0.1'])
```

Just imagine, you're throwing a bash on the localhost and Laravel shows up with a corsage and everything! 💐✨🕺🏿

Now, let's talk about importing tasks – like when your friends visit for game night. Here's how to invite `envoys` over:

<a name="importing-envoy-tasks"></a>

To make them feel at home, you'll need to share a map with them – but not just any map! A special one that points them to your secret Laravel server hideout:

```blade
php artisan envoy:run --file=path/to/your/tasks.php --host=LocalHero
```

They'll find their way using the coordinates you've shared and join the fun! 🥳🌍🎉

 Alright, buckle up, Laravel coders! Ever felt like your PHP party needed a little more pizzazz? Well, meet the `@import` directive – the superhero of your code-verse! This magical line brings in other Envoy files, making them dance to your tune. It's like having an all-star band join your one-man show!

```blade
@import('vendor/package/Envoy.blade.php')
```

Just imagine it: you're the lead singer, and these imported files are your backup dancers, ready to execute their killer tasks whenever you call them on stage. It's like a well-choreographed code routine that leaves the audience (your computer) blown away! 💥✨

Now, remember when we said this guy was an all-star? Well, he's not just a one-hit wonder. You can import multiple servers to your show with ease – think of it as expanding your band from a solo act to a rocking orchestra! 🎸🥁

But wait, there's more! After the files have been imported, you can execute their tasks like they were defined in your very own Envoy file. That's right – you're not just borrowing moves from other bands; you're making them feel like they were always a part of your act all along!

So grab your microphone and give `@import` a spin – it'll have your code rockin', rollin', and a whole lot more entertaining than ever before! 🤘🎶

 ### Multiple Machines, One Mission (Or How to Make Your Servers Dance Like the Village People)

Enter our friendly automation companion, Envoy! Ever found yourself juggling multiple servers like a one-armed circus performer? Fear not, my friend, because with Envoy, you can now orchestrate tasks across your servers with the grace of a ballet dancer on point shoes!

First things first: let's give each of your servers a unique name. It's like naming your pets so you don't confuse old Fido with Spotty. Add them to your `@servers` declaration:

```blade
@servers(['Webster', 'Winchester', 'Washington'])
```

Now, assign each server an IP address, but remember, only if you want to keep it formal (and not invite them over for a beer):

```blade
@servers([
    'Webster' => '192.168.1.1',
    'Winchester' => '192.168.1.2',
    'Washington' => '192.168.1.3'
])
```

Next, create a task! Let's call it `deploy`. We'll have our servers execute this task in unison, like a well-rehearsed dance routine:

```blade
@task('deploy', ['on' => ['Webster', 'Winchester', 'Washington']])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate --force
@endtask
```

In the realm of Laravel, it seems like we're witnessing nothing short of a modern-day symphony—a beautifully choreographed dance between our servers and our codebase. Now, when you want to deploy your application, just tell them all to "hit play" (execute the task) at once:

```bash
php artisan task deploy:run
```

And just like that, your servers will perform the deployment with military precision—or perhaps more accurately, synchronized dance moves. It's a sight to behold! So go on, give it a whirl, and remember: when you're dealing with multiple servers, it's all about keeping them in step!

 Alrighty, let's get this Laravel symphony started! By default, our tasks are as linear as your great-uncle Harold's stories at family gatherings - they march along one server at a time, waiting for each task to wrap up on the first server before moving onto the next.

But what if we wanted to make our tasks more like a Keystone Cop chase scene? To do that, you just need to whip out the `parallel` option in your task declaration!

Here's how it goes:

```blade
@servers(['web-1' => '192.168.1.1', 'web-2' => '192.168.1.2'])

@task('deploy', ['on' => ['web-1', 'web-2'], 'parallel' => true])
    cd /home/user/example.com
    git pull origin {{ $branch }} (Grab some popcorn, folks!)
    php artisan migrate --force (And maybe a refreshing beverage?)
@endtask
```

With this setup, our trusty servers `web-1` and `web-2` will simultaneously execute the deploy task like they're in a high-stakes race to keep up with your insatiable demand for fresh code! 🚀🏃‍♂️💨

 ### Setting the Stage (a.k.a Setup)

If you find yourself in a situation where you need to unleash some wild PHP antics before your Envoy show begins, fear not! The `@setup` directive is here to save the day. Simply pen down a symphony of PHP code within those delightful curly braces:

```php
@setup
    Let $now = new DateTime be the star of this show!
@endsetup
```

But what if you've got a posse of PHP files hankering to join the party before your task takes center stage? Fret not, my friend! The `@include` directive is just the wingman you need. Pop it at the top of your `Envoy.blade.php` file like so:

```blade
@include('vendor/autoload.php')

And now, Ladies and Gentlemen... the main event!

@task('restart-queues')
    # ...
@endtask
```

<a name="variables"></a>
(Oh, and don't forget to keep an eye on those variables - they're the unsung heroes of this whole shebang!)

 ### Shenanigans with Variables! 🚀

In the world of Laravel automation, sometimes you gotta be a little sneaky to get things done! If you find yourself in a pickle where you need to whisper secrets to your Envoy tasks, fear not! Just yell them out loud during the task summoning ceremony (AKA command line):

```shell
php vendor/bin/envoy run deploy --branch=master 🤫🎈🎉
```

Now that you've shared your secret branch with Envoy, let's get it into a tuxedo and serve it cocktails! You can access these options using Blade's "echo" (not the PHP one, the party kind) syntax. Fancy parties can also have `if` statements and loops, so why not bring them to your tasks too?

Let's say we want to ensure that our beloved `$branch` variable is present before executing the `git pull` command:

```blade
@servers(['web' => ['user@192.168.1.1']]) 🏡🎉

@task('deploy', ['on' => 'web'])
    cd /home/user/example.com 💼🕺

    @if ($branch)
        git pull origin {{ $branch }} 🥂🤘
    @endif

    php artisan migrate --force 🎉🎈🚀
@endtask
```

Now, our server is pulling the branch like a pro and setting up the database like a boss! Keep on automating, superheroes 😉🦸‍♂️!

 Alright, buckle up, we're about to embark on a Laravel adventure filled with superheroes and a touch of automation! 🦸‍♂️🚀

### Capers (A.K.A Stories)

Capers are your Laravel supergroup, gathering an ensemble cast of tasks under a cool, easy-to-remember name. Think of it like assembling the Avengers, only instead of saving the world, you're deploying code! 🌐🚀

For instance, our caper de jour might be "Operation Deploy", which enlists the tasks of `update-code` and `install-dependencies` by simply listing their names within its definition:

```blade
@servers(['web' => ['user@192.168.1.1']])

@caper('Operation Deploy')
    update-code
    install-dependencies
@endcaper

@task('update-code')
    cd /home/user/example.com
    git pull origin master
@endtask

@task('install-dependencies')
    cd /home/user/example.com
    composer install
@endtask
```

Once you've penned your caper, you can summon it just like a task:

```shell
php vendor/bin/envoy run Operation Deploy
```

Now, isn't that a lot more entertaining than mere tasks? 🎉💥🌟

 ### Cue the Drama: The Encore Stages! 🎬🍿

When a story or task unfurls its curtain, a whole ensemble of backup singers (or hooks, as we like to call them) spring into action. Now, don't get too excited—these aren't the pop sensation kind, but the PHP-savvy, locally-performed ones! They dance on our side of the stage, far from the bustling remote servers where your tasks are holding court.

The chorus line includes `@before`, `@after`, `@error`, `@success`, and `@finished`. Feel free to invite as many of these talented troupe members as you'd like! They'll perform in the order they've been rehearsed (or scripted, if you will) within your Envoy play.

<a name="hook-before"></a>
### Entrance Call: The Pre-Show! 🕺🎤

Ever the energetic warm-up act, `@before` hooks take center stage before the main event. They're a great way to set the mood (and prepare any variables) for what's about to go down on stage left. So, if you want your tasks to strike a pose and flash some pearly whites before the grand performance, this is where it all begins!

 Ah, the magnificent `@before`! It's like a party before the party - the ultimate warm-up act for your Laravel tasks. This enchanting directive ensures that every time a task goes live on stage (I mean, execution), it'll first strut through the spotlight of all its registered `@before` hooks.

Each `@before` hook is a chance to shine, with the power to perform a quick costume change, check the lights and sound, or even tweak the script for that night's performance (I mean, task). And the best part? They receive a special VIP invitation - the name of the upcoming task!

```blade
@before
    if ($task === 'deploy') {
        // ...
    }
@endbefore
```

Now, don't you just love a good encore? 🎤🚀

 Ahoy there, intrepid Laravel developer! If you've ever felt like a one-trick pony after mastering your tasks, let me introduce you to the fabulous `@after` hook – the encore to every performance! 🎤🕺

This magnificent gem allows you to execute a series of tricks (hooks) after each task execution in your Envoy script. It's like a standing ovation for the work done, but with more coding and less applause. 🌟

The `@after` hooks are as gracious as a curtsy at a royal ball – they'll execute once all tasks have taken their final bow. How do they know which task just danced its heart out? Simple: by receiving the name of the executed task, straight from the dance floor! 💃🕺

Here's a quick dance lesson on how to use this charm:

```blade
@after
    if ($task === 'deploy') {
        // ... (Imagine you're tipping your top hat and bowing)
    }
@endafter
```

Just like that, you can now create custom routines for each task's successful completion. If the task is as dashing as a tango or as enchanting as a waltz, let `@after` be your applause! 🌹✨🎉

 Ah, the `@error` - a Laravel superhero, leaping into action whenever a task goes south (exits with a status code more intriguing than '0'). This valiant defender of your Envoy script awaits its call after every mission failure.

When it's summoned, it executes all `@error` hooks that have been previously registered in your Envoy's Bat-cave (or script, as you might prefer to call it). And what, pray tell, do these noble `@error` hooks receive? Why, they get the name of the task that met its untimely demise!

```blade
@error
    if ($task === 'deploy') {
        // ... (where '...' stands for "all the code you wish to execute when deploy goes boom")
    }
@enderror
```

Now, that's what I call a reliable sidekick! Don't forget to register your own `@error` hooks, or you might find yourself left hanging without backup when things go awry. A superhero without their trusty sidekick is like peanut butter without jelly - just not as tasty!

 Alrighty then! Let's dive into the thrilling world of Laravel scripting, where your code is the star of the show and `@success` is its standing ovation!

When everything goes as smoothly as a baby's first spin class (i.e., without hiccups or errors), our dear friend `@success` steps onto center stage.

So, if you've ever wanted to throw a victory parade for your code, simply wrap it up with these dashing lines:

```blade
@success
    // ...your triumphant dance moves here...
@endsuccess
```

Now, sit back and watch as this humble yet powerful construct salutes your winning script! And remember, just like a well-timed encore, it's all about the perfect execution. 🎶🚀🎉

 Alright, buckle up, buttercup! Once our code marathon is over and all tasks have been slayed (exit status be damned), it's time for the grand finale: the `@finished` party! 🎉

These little shindigs are like the encores of your Laravel script - they always play, no matter what. And guess who gets to attend? You do, dear reader! The `@finished` party invites everyone who's been part of the action, and it'll fill you in on the status code of the last completed task.

But remember, this isn't a black-tie affair - the status code can either be `null`, which means your date stood you up (oops!), or it could be an `integer` that's equal to or greater than 0. In other words, it's the number of times your date left you hanging during the night.

So, let's get this party started:

```blade
@finished
    if ($exitCode > 0) {
        // One of your dates had a sudden case of the ghost! 👻
    }
@endfinished
```

Now that you're in the know, you can plan your cleanup accordingly. Just remember - it's all in good fun (and coding!)!

 Alrighty, let's get this party started! 🥳

To unleash a task or a yarn spin-off that's neatly tucked away in your application's `Envoy.blade.php` file, the secret word is... drumroll please... `run` command from our magical sidekick, Envoy! 🎩

Just like summoning a superhero, you'll need to invoke the power within:

```shell
php vendor/bin/envoy run deploy
```

And just like that, Envoy will harness its superpowers, execute the task with finesse, and spill the tea (or server logs) as the action unfolds. 🍵📝🚀

 ### Unleashing Tasks, But Only if You Say So! 🚀

Are you the type who likes a little pep talk before jumping into action? Well, your servers are too! (Yes, they have feelings.) To get that confirmation prompt before executing a specific task on your servers, simply sprinkle a dash of `confirm` magic in your task announcement. This enchantment is particularly handy for operations that might make you say "oops!" if things go south:

```blade
@task('deploy', ['on' => 'web', 'confirm' => true])
    CD to the secret lair of /home/user/example.com
    Grab the latest code with a daring git pull origin {{ $branch }}
    And, with phantom-like speed, migrate those database schemas with php artisan migrate!
@endtask
```

<a name="notifications"></a>
Now, sit back and let your servers ask for your permission before they embark on these daring adventures! 🤓

 Alrighty, buckle up, buttercup! Let's dive into the world of Laravel Notifications - the lifeblood that keeps your applications from being lonely.

You know how you have that one friend who always forgets your birthday, but they send you a late birthday card with a heartfelt message? Laravel Notifications are kind of like those cards, but for your application and its users!

<a name="slack"></a>

### Slack notifications

Ah, Slack! The digital water cooler where ideas flow faster than caffeine through a barista's veins. With Laravel, integrating Slack into your app is easier than a cat landing on its feet (and we all know how good cats are at that).

To get started, just make sure you have the Slack Web API key and secret handy – you wouldn't want to lose those in a bar, would you? Then, it's as easy as adding your credentials to your `.env` file (which we all know is Laravel's secret diary).

Next, install the required package with the magic of composer:

```bash
composer require laravel-notifications/slack
```

Now, you can start sending notifications like a pro. In your notification class, all you need is to import the SlackChannel class and use it when defining your channels:

```php
use Laravel\Notifications\Channels\SlackChannel;

class YourNotification extends Notification
{
    // ...

    public function via($notifiable)
    {
        return [SlackChannel::class];
    }
}
```

Now, when you send this notification, Laravel will automatically configure the Slack channel with your API key and secret. You can even customize the message for a more personal touch!

Remember, with great power comes great responsibility – so make sure to only send notifications that your users appreciate (and maybe a birthday reminder or two). Happy notifying! 🥳🎉🎂

 ### Laugh-a-Lot Laravel Land

Ahoy there! π In our pirate-themed wonderland of code, Envoy's got a secret stash to share with ye scurvy dogs - the power to chat up Slack like never before! After every task, he sends a message, straight from the parrot's beak to your Slack channel. π¦π₯

To get in on the action, you'll need a Slack hook URL, which ye can find by creating an "Incoming WebHooks" integration in yer Slack control panel, like a modern-day treasure map. πΊοΈ

Once ye've got yer map, pass it to ol' Envoy as the first matey argument to the `@slack` directive:

```blade
@finished
    @slack('webhook-url', '#bots')
@endfinished
```

Now, by default, our pirate friend will send a message about what task he just completed. But if ye want to customize his chatter, provide a second argument with the channel name (`#channel`) or user name (`@user`):

```blade
@finished
    @slack('webhook-url', '#bots', 'Arr matey, check it out!')
@endfinished
```

Just remember to keep the messages friendly and funny, as we're in a pirate party here! π Yo ho ho and a bottle of code! π€β½οΈ

 ### DiscoDance on Discord! 💃🕺

In the world of Laravel, our bot isn't just a wallflower, it's got moves! 🤹‍♂️🤹‍♀️ With its groovy dance moves, it can even send notifications to your favorite dance floor—I mean, Discord server! 🌈✨

Wanna join the party? All you need is the `@disco` directive, which takes a Discord webhook URL and a message of your choice. To get that fancy webhook URL, just create a "Webhook" in your Server Settings and pick the channel where you want your dance moves broadcasted. Once you've got your webhook URL, don't forget to pass it in its entirety to the `@disco` directive:

```blade
@finished
    @disco('https://discord.com/api/webhooks/your-webhook-id/your-webhook-token')
@endfinished
```

And there you have it! Now, every time a task is executed, our bot will bust a move and send a message to your Discord server. Let's get this party started! 🎉🎊💃🕺🤘🥳

 Alright, let's get this bot party started! 🎉

Envoy, our ever-efficient assistant, can also send out a post-task celebration dance to your Telegram pals after each task is completed. 🕺️💃️ To get the ball rolling, you'll need two crucial pieces of intel: your Bot ID (think secret agent code number) and a Chat ID (like your group chat handle).

Fret not, because acquiring your Bot ID is as simple as summoning the mythical BotFather. Yes, that's right! The one and only bot-making guru resides at [t.me/botfather](https://t.me/botfather), just waiting to anoint you with a bot of your very own.

Now, for the Chat ID, we've got a helpful little bot named @username_to_id_bot that will hook you up with the goods (valid Chat ID). You can find this bot hanging out at [t.me/username_to_id_bot](https://t.me/username_to_id_bot), just like a real life matchmaker!

Once you've got both your Bot ID and Chat ID, it's time to throw down the gauntlet (or, in this case, the directive)! Here's the secret sauce:

```blade
@finished
    @telegram('bot-id','chat-id')
@endfinished
```

Just drop this bad boy into your code and watch as the telegram notifications start flooding in like a tidal wave of productivity! 🌊💻🎉

 Alrighty then! Let's get this Laravel party started with a little Microsoft Teams action, shall we?

Envoy, our friendly automation bot, is equipped with the comedic timing of a stand-up comic and the ability to send notifications to your friendly neighborhood [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams). After each task it executes, it'll bust out a joke or two (optional) and then, if you so desire, it'll shoot off a message straight to your Teams channel.

The `@microsoftTeams` directive is like the backstage pass to this secret comedy show. It requires a Teams Webhook (think of it as the bouncer at the club), a message (the punchline), a theme color (for mood lighting, naturally), and an array of options (bonus material). You can get your very own Teams Webhook by creating a new [incoming webhook](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)—just like inviting your funniest friend to the stage!

The Teams API has more tricks up its sleeve, allowing you to customize your message box like a pro. You can set a title, a summary, and even sections (think of it as a well-rehearsed standup routine). For more info on this, check out the [Microsoft Teams documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL#example-of-connector-message).

Now, when it comes to passing the Webhook URL into the `@microsoftTeams` directive, it's like handing your best joke over to our bot. Here's how you do it:

```blade
@finished
    @microsoftTeams('webhook-url')
@endfinished
```

Just drop in your Webhook URL, and our bot will send the jokes (or notifications, if that's more your style) straight to your Teams channel. Laughter is only a directive away! 😊🎤🚀