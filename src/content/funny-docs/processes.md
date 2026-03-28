 Ahoy there, matey! Buckle up for a whirlwind tour of Laravel's process management! This is where the magic happens, and by "magic," we mean command line sorcery.

<a name="invoking-processes"></a>
## Invokin' the Processes (Arrr!)

First off, we got yer basic processes, but not just any old processes - Laravel processes! You can summon 'em with a simple `PHP Artisan` command. These commands are like the swashbuckling crew of your software ship.

<a name="process-options"></a>
#### Process Options (Yarrrr!)

But what if ye wanted to deck out yer crew before setting sail? Well, you can! Laravel processes accept options too. Just tack on a dash followed by the option name and value, and you're good to go.

<a name="process-output"></a>
#### Process Output (Tales from the Crypt)

Ever wondered what your crew was up to? Well, so can we! Laravel lets you capture their secrets - er, output. Just listen for it with a good ol' `stdout` and `stderr`.

<a name="process-pipelines"></a>
#### Pipelines (Like a well-oiled ship)

But what if ye need more than one process? No worries! Laravel lets you chain 'em up like a pipeline. Just one command kicks off the whole line, and when it's done, the next is set loose. It's like having multiple pirates working together on a single task!

<a name="asynchronous-processes"></a>
## Asynchro-nautical Wonders (Time travel for pirates)

Now, things get a bit spicy with asynchronous processes. These are the rogue elements that go off and do their thing while you're busy doing other stuff. Laravel gives ye the tools to tame 'em!

<a name="process-ids-and-signals"></a>
#### Process IDs and Signals (Speakin' the language of the sea)

Asynchronous processes have their own unique identifiers, just like pirates had names. With Laravel, ye can send 'em signals to make 'em shape up or ship out. Just remember: three beers equals TERM signal!

<a name="asynchronous-process-output"></a>
#### Asynchronous Process Output (Deciphering the secret pirate code)

Even asynchronous processes have things to say, and Laravel can help ye understand 'em. Listen for their output, just like eavesdropping on a conversation at the tavern.

<a name="asynchronous-process-timeouts"></a>
#### Asynchronous Process Timeouts (Walking the plank)

Sometimes your asynchronous process decides to take a nap, leaving ye twiddling yer thumbs. Laravel lets ye set time limits on 'em, so if they don't shape up, they walk the plank!

<a name="concurrent-processes"></a>
## Concurrent Processes (Pirate Party!)

When ye want to host a swashbuckling party but don't have enough crew, Laravel's got yer back with concurrent processes. These are like having multiple crews working on different tasks at once!

<a name="naming-pool-processes"></a>
#### Namin' Pool Processes (Nametags for ye pirates)

So ye can keep track of all yer crew, Laravel lets ye name each concurrent process pool. Just remember, "Captain's Crew" won't get ye any extra rum!

<a name="pool-process-ids-and-signals"></a>
#### Pool Process IDs and Signals (Navigatin' the seas)

Just like with asynchronous processes, Laravel lets ye send signals to all the process pool members. This is useful for keeping 'em in line or sending them on a different course. Just remember: if ye overdo it, ye might end up lost at sea!

<a name="testing"></a>
## Testin' (Ye scurvy dogs)

To make sure yer processes are sailing smoothly, Laravel gives ye the ability to test 'em. This is like having a secret spy on board to report any issues.

<a name="faking-processes"></a>
#### Fakin' Processes (The ship of shadows)

Sometimes yer crew might be shy, and Laravel lets ye fake 'em out! Just create a stand-in process to test things without the actual workload. It's like having an undercover agent among yer crew!

<a name="faking-specific-processes"></a>
#### Fakin' Specific Processes (The spy among ye)

If ye want to test just one specific process, Laravel lets ye do that too. Just swap out the real deal for a fake one and watch as it goes about its business. It's like having a double agent on board!

<a name="faking-process-sequences"></a>
#### Fakin' Process Sequences (The puppet master)

But what if ye want to test an entire process sequence? Laravel lets ye do that as well. Just create fake processes for each step in the sequence and watch as they all work together. It's like controlling a marionette show!

<a name="faking-asynchronous-process-lifecycles"></a>
#### Fakin' Asynchronous Process Lifecycles (The time traveler)

And if ye want to test how your asynchronous processes behave over time, Laravel lets ye create fake lifecycles. This is like having a time traveler on board to see how things unfold!

<a name="available-assertions"></a>
#### Available Assertions (The ship's log)

To make sure everything went as planned during yer tests, Laravel lets ye check various aspects of yer processes. This is like reading the ship's log to see if everything went as planned!

<a name="preventing-stray-processes"></a>
#### Preventin' Stray Processes (The ship's cook)

Last but not least, Laravel helps ye keep an eye on any stray processes that might be floating about. This is like having a watchful ship's cook to make sure no one goes overboard!

 Ahoy there, shipmates! Buckle up as we dive into the swashbuckling world of Laravel, where we're about to make managing your pirate ship's engine less of a chore and more like a walk in the plank (but with less danger, obviously).

Laravel, being the helpful first mate it is, has built an easy-to-use, simple API around the Symfony Process component - think of it as a parrot that not only tells you jokes but also can start fires (or external processes, if you prefer). This means you can call forth your ship's long-lost engine with ease from the safety of your quarters!

Now, Laravel's process features are like a treasure map leading straight to buried gold – they focus on those pesky but inevitable common use cases and ensuring you have a delightful experience along the journey. So no more stumbling around in the dark, trying to figure out how to start that darn engine!

Let's set sail, shall we? ⚓️🌴🐘 (And yes, we just turned Laravel into a sea-faring adventure - because why not?)

 Alright, buckle up, we're about to dive into the world of Laravel process wrangling! Let's face it, managing processes is like being a dog groomer for computers – it can get messy, but with our trusty Process facade, you'll have your computer looking purr-fectly polished in no time!

To call the shots on a process, you can employ the `run` and `start` methods, which are like the bark commands and sit stays of the process world. The `run` method is for when you want to wait for the process to complete before moving on, while the `start` method is for those times when you need to multitask and let your computer do some fetching in the background.

Let's start with a simple synchronous process, like asking your computer to list all its files (but in a fancy way, of course!). Here's how you can do it:

```php
use Illuminate\Support\Facades\Process;

$output = Process::run('ls -la')->output();
echo $output; // Unleash the files!
```

Now, when the `run` method unleashes your process, it'll return an `Illuminate\Contracts\Process\ProcessResult` instance. This little guy is packed with helpful methods to help you inspect the result of your process:

```php
$result = Process::run('ls -la');

echo $result->command(); // "ls -la" – see, it remembers!
if ($result->successful()) {
    echo 'Everything went swell!';
} else {
    echo 'Oh dear, something went wrong.';
}
echo $result->output(); // Output of the command
echo $result->errorOutput(); // In case anything exploded during execution
echo $result->exitCode(); // If your process had to leave early
```

So there you have it – process wrangling made easy with Laravel's Process facade! Now, go forth and conquer the command line jungle! 🐒🚀

 Alright, let's lighten up the mood a bit! Here's how Laravel's documentation on throwing exceptions might sound if it were written by a quirky, tech-savvy stand-up comedian:

##### Tossing Exceptionality (aka, "When Stuff Goes South")

If you find yourself with a process results hankie and a burning desire to throw a fancy `Illuminate\Process\Exceptions\ProcessFailedException` party if the exit code shows up with a number greater than zero (which is like saying, "I'm not okay, I swear!"), then boy do we have the methods for you! Strap on your top hat and monocle, because it's time to `throw` and `throwIf`.

```php
$result = Process::run('ls -la')->throw();

// ...or if you're feeling a bit more selective, we've got you covered:

$result = Process::run('ls -la')->throwIf($condition);
```

<a name="process-options"></a>
And the best part? If this process doesn't flop like a fish out of water, you'll receive the elegant `ProcessResult` instance as your prize. Now that's what we call a winning combination! 🎉🎊🥳

Just remember, life's too short for boring code! Keep it fun and keep learning with Laravel! 🤓💻🚀

 Ahoy there, coding cowpoke! Ever found yourself in a pickle trying to tame a wild Laravel process? Fret not, because your trusty steed is here to help you customize its behavior before it gallops off into the sunset of execution.

First up, let's discuss the working directory, AKA the process's rootin'-tootin' homestead. You can change this path as easily as saddling up your trusty horse for a trail ride. Just point it where you need it to roam!

Next on our list: Timeout, that fickle sheriff that won't let your process linger too long in town. If your process is acting up and needs more time to sort out its affairs before high noon, Laravel lets you extend its stay by setting a suitable timeout.

Last but not least, environment variables—the Wild West's secret sauce for making processes behave just right. Laravel allows you to tweak these as if you were a seasoned saloon keeper pouring the perfect drink for each thirsty process.

So there you have it! With these tools at your disposal, you can wrangle even the most unruly Laravel processes and turn them into well-behaved cowpokes in no time. Now, let's lasso those tasks and ride off into the sunset of a job well done!

 Ahoy there, brave coder! Ever found yourself in a pickle, navigating the treacherous seas of Laravel's working directory? Fear not, for I am here to guide you through these shark-infested waters!

In our quest for commanding the mighty terminal, we come across the `path` method, a compass that guides us to setting the working directory of our process. But, what happens when ye olde method is not invoked? Why then, dear sailor, the process will simply take up residency in the same ol' working directory as the PHP script that birthed it!

Let me share an example to make this clearer than a shipwreck on a sunny day:

```php
$result = Process::path(__DIR__)->run('ls -la'); // Hoist the Jolly Roger, mateys! Let's list all files in our working directory with 'ls -la'.
```

Now, set sail and conquer the command line like a true pirate! And remember, if you ever get lost at sea, just drop anchor and call upon your trusty Laravel ship to guide you back to port. Arr matey, we're in this together! 🏴‍☠️🌈🎉

 Ahoy there, intrepid coder! Prepare to embark on an adventure with Laravel's mighty `Process` ship. This vessel is a swashbuckler's dream, allowing you to communicate like a pirate king with the "standard input" of your process using the `input` method.

```php
Yarr matey! Let's holler at the process:
$result = Process::input('Hello World')->run('cat');
```

In this example, we're sending a friendly greeting to our trusty process, and asking it to `cat` (as in 'display' for those who are not feline-fluent). The `Process` will dutifully comply with your command, leaving you with the result of its swashbuckling endeavor.

But wait! There's more to this adventure than just talking. You can also set time limits for your pirate crew using the `timeout` method:

```php
// Give the process a mere 5 seconds before it walks the plank
$process = Process::timeout(5);

// Then, continue issuing commands as you see fit
$result = $process->input('Yo ho ho')->run('cat');
```

In this case, if the process doesn't wrap up its business in 5 seconds or less, it will be sent to walk the plank! So make sure your commands are quick and to the point, lest ye lose valuable treasure. Happy coding, me hearties!

 Alrighty, here's a humorous take on Laravel process timeouts! 🕒🎉

#### Timeout Shenanigans 🕗

By default, our system is like that overprotective parent who cuts off the internet after 60 seconds of screen time. Processes will chuck a tantrum and throw an instance of `Illuminate\Process\Exceptions\ProcessTimedOutException` if they've been running longer than a minute (gosh, we hope your scripts are speedy!). But fear not, you can step in as the cool parent with the `timeout` method:

```php
$result = Process::timeout(120)->run('bash import.sh'); // Give 'em extra 2 minutes, no worries!
```

The `timeout` and `idleTimeout` methods are our fancy party timers:

```php
use function Illuminate\Support\minutes;

$result = Process::timeout(minutes(2))->run('bash import.sh'); // 2 minutes of non-stop fun!
```

If you're the type to let your scripts run all night (we hope not, but hey, who are we to judge?), go ahead and disable the process timeout entirely with the `forever` method:

```php
$result = Process::forever()->run('bash import.sh'); // Party like it's 1999... all night!
```

And finally, if you want to set a time limit for the script to produce output without going radio silent, use the `idleTimeout` method:

```php
$result = Process::timeout(60)->idleTimeout(30)->run('bash import.sh'); // Give 'em 1 minute to talk, or else we're pulling the plug!
```

Now go forth and manage your processes like a boss (or a cool parent)! 🤘

 Alright, buckle up, because we're about to dive into the wild and wacky world of Laravel's Environment Variables! 🌞️🌊

First off, what are these environment variables you ask? Well, imagine them as the secret handshakes that your code uses to communicate with the operating system. You can invite them to the party via the `env` method like so:

```php
$process = new Process('bash import.sh');
$process->setEnv("IMPORT_PATH", __DIR__); // Now, the process knows exactly where the IMPORT_PATH is!
$process->run();
```

Oh, and don't worry about the other guests at the party (the system environment variables), they're automatically invited too! 🥳🎉 But if you've got a nosy neighbor who keeps meddling in your affairs, you can always kick them out by setting their value to `false`:

```php
$process = new Process('bash import.sh');
$process->setEnv("LOAD_PATH", false); // This sneaky LOAD_PATH is no longer welcome!
$process->run();
```

Just remember, with great power comes great responsibility. Use your environment variable powers wisely and your code will be the life of every party! 🥳🎉😉🤩

 Ah, the `tty` method! It's like a secret handshake between your Laravel process and the terminal, turning your code into a bashful chatroom where it can hang out with Vim and Nano. Here's how you get the party started:

```php
Process::forever()->tty()->run('vim');
```

Just imagine, your process is now the life of the party, opening a text editor and waiting for you to spill your code onto its dance floor! But remember...

🚨⚠️🛑 **Attention, Windows users!** 🛑🛑⚠️🚨

Unfortunately, TTY mode is like a foreign language in a quaint French village – it just doesn't translate well on Windows. So, if you're rocking the Microsoft OS, this feature won't work for you. But hey, at least you can still party with the console! 🎉🥳🎉

Now that we've broken the ice, go forth and create a console-based buddy system between your Laravel process and your favorite text editor – just remember to keep it classy!

 Alright, let's get this party started! In the realm of Laravel, we're not just coding, we're orchestrating symphonies of data. And when it comes to process output, it's like reading the secret notes passed between the musicians!

As you might have jammed last time, accessing process output is a piece of cake using the `output` (for those groovy standard-out tunes) and `errorOutput` (when things get a little discordant in the error-stderr section). Here's how you strum that chord:

```php
use Illuminate\Support\Facades\Process;

$result = Process::run('ls -la');
Echo, Echo, Echo... wait, wrong play! Let's echo the output instead:
echo $result->output();
echo $result->errorOutput();
```

But here's where things get really funky – you can catch those notes as they're being played by passing a closure as the second argument to the `run` method. This little ditty will receive two arguments: the "type" of output (`stdout` or `stderr`) and the actual output string itself:

```php
$result = Process::run('ls -la', function (string $type, string $output) {
    echo $output; // Just because we can't resist a little echo action!
});
```

Laravel doesn't just leave you hanging; it offers the `seeInOutput` and `seeInErrorOutput` methods, which let you search for specific strings in the process output like a digital librarian. For example:

```php
if (Process::run('ls -la')->seeInOutput('laravel')) {
    // ...
}
```

Now, if you're wondering how to mute those pesky process outputs, head over to the section on <a href="#disabling-process-output">hushing up your code</a>. Keep the rhythm going! 🎶💥🎸

 Ah, dear developer! You've stumbled upon the magical 'quietly' method, a secret weapon in your Laravel arsenal to tame those chatty processes. 🤫

You know when your script is spilling its guts about every minor detail like an overeager tour guide, making your app feel like a crowded bus tour? Well, we've got just the thing for you!

Simply unleash this line of code to muzzle your process:

```php
use Illuminate\Support\Facades\Process;

$result = Process::quietly()->run('bash import.sh');
```

This bad boy snatches away your process's microphone and leaves it with nothing but crickets to chat about! 🦞

Bye-bye, pesky logs! Hello, memory savings and a cleaner console! 🎉

 ### The Great Process Parade! 🎉🎈

Sometimes you'll find yourself wanting to pass the party favors (or in our case, output) from one process directly to another like a well-oiled assembly line. This magical act is known as "piping," and fear not, for Laravel has bestowed upon us the `pipe` method to make this a breeze!

```php
use Illuminate\Process\Pipe;
use Illuminate\Support\Facades\Process;

$partyFavors = Process::pipe(function (Pipe $pipe) {
    $pipe->command('cat example.txt'); // Invite the guests to our shindig!
    $pipe->command('grep -i "laravel"'); // Make sure only Laravel fans get in!
});

if ($partyFavors->wasSuccessful()) {
    // It's a blast! Let's dance! 💃🕺
}
```

If you're feeling too lazy to customize each process individually, just hand over an array of command strings:

```php
$partyFavors = Process::pipe([
    'cat example.txt', // Invite the guests
    'grep -i "laravel"', // Selective guest list
]);
```

You can even catch all the party chatter (or process output) in real-time by providing a closure as the second argument to the `pipe` method:

```php
$partyFavors = Process::pipe(function (Pipe $pipe) {
    $pipe->command('cat example.txt'); // Invite the guests
    $pipe->command('grep -i "laravel"'); // Selective guest list
}, function (string $type, string $output) {
    echo $output; // Overheard conversations! 🗣️🗣️
});
```

Oh, and to make sure everyone knows who's talking, Laravel lets you assign unique names (or keys) to each process within a pipeline using the `as` method. This name will be passed along with the output to the closure provided to the `pipe` method:

```php
$partyFavors = Process::pipe(function (Pipe $pipe) {
    $pipe->as('Invites')->command('cat example.txt'); // Sending out invitations!
    $pipe->as('Guest List')->command('grep -i "laravel"'); // Only Laravel enthusiasts allowed!
}, function (string $type, string $output, string $key) {
    // Keep track of who said what! 🕵️‍♂️🕵️‍♀️
});
```

And just like that, you've got a fabulous party line going! Now pass the punch bowl! 🎉🥳

 Alright, buckle up, dear Laravel enthusiasts! Let's dive into the world of asynchronous processes – where your application can multitask like a boss while keeping its cool.

In the land of sync, the `run` method summons processes one by one, like a one-man band playing each instrument in succession. But the `start` method is our party animal, inviting processes to the dance floor so they can groove in the background while your app keeps rocking out on the main stage!

Once you've started a process with the help of the `start` method, you can use the `running` method as a dance floor bouncer, ensuring the party doesn't end until everyone's had their moment to shine:

```php
$process = Process::timeout(120)->start('bash import.sh');

while ($process->running()) {
    // Your app continues performing other tasks here... it's like a magical juggler!
}

// The process has finally taken a bow, so let's gather the results!
$result = $process->wait();
```

Ah yes, the grand finale! Just as you wouldn't want to miss the last dance at a party, you won't want to skip waiting for your process to finish executing by invoking the `wait` method:

```php
$process = Process::timeout(120)->start('bash import.sh');

// ... and then, when the music stops...
$result = $process->wait();
```

And there you have it! Now your app can party all night long (or at least until the process finishes) without missing a beat. Happy asynchronous processing, folks! 🎉🎈💃‍♂️🕺️

 Alright, let's dive into the thrilling world of Laravel process management! 🚀

First off, if you need to know what your running process is secretly thinking (or technically, its operating system assigned Process ID), just use the magical `id` method:

```php
$process = Process::start('bash import.sh');

return $process->id(); // "Oh no, I've been ID'ed!"
```

Then, if you want to send a secret message (or technically, a "signal") to your running process, go ahead! Here's how:

```php
$process->signal(SIGUSR2); // "Got your 2 cents, will do my best!"
```

Just remember, if you're sending SIGUSR2, be prepared for a possible response like "Got your 2 cents, will do my best!" It's all in good fun. 🤖

For those who are curious about the available signals, check out the [PHP documentation](https://www.php.net/manual/en/pcntl.constants.php). It's like a secret codebook for managing your processes!

Stay tuned for more Laravel fun facts! 🎈🚀

 Alrighty, let's dive into the world of asynchronous processes in Laravel, where code is like a wild stallion and we're just trying to keep up!

First off, you can ride this wild steed using the `output` and `errorOutput` methods, which give you access to the entire current output of your process. But if you want a sneak peek at the latest trick it's pulled since you last looked, use `latestOutput` or `latestErrorOutput`. Here's how:

```php
$process = Process::timeout(120)->start('bash import.sh');

while ($process->isStillGalloping()) {
    echo $process->getLatestTrick(); // This is just a fun way to say latestOutput()
    echo $process->getLatestMishap(); // This is just a fun way to say latestErrorOutput()

    sleep(1);
}
```

Next up, we've got the `run` method's flashier cousin – real-time output gathering! Pass a closure as the second argument to the `start` method, and it'll catch the process's "shouts" (stdout) and "whispers" (stderr). The closure will receive two arguments: the type of output and the actual content:

```php
$process = Process::start('bash import.sh', function ($type, $content) {
    echo $content; // We're just catching up on what the process is saying!
});

$result = $process->finish(); // Or "the process finally quiets down"
```

Now, if you're feeling impatient (who isn't?), use the `waitUntil` method to halt the waiting game based on the process's output. Laravel will stop waiting for the process to finish when the closure given to the `waitUntil` method yells "Enough already!" (i.e., returns `true`):

```php
$process = Process::start('bash import.sh');

$process->waitUntil(function ($type, $content) {
    return $content === 'Ready...'; // We're waiting until the process says it's ready!
});
```

So there you have it! Now you can wrangle those asynchronous processes like a pro, or at least feel like one while trying. Happy coding, cowboy/cowgirl! 🤠🚀

 ### Never Let Your Asynchronous Tasks Turn into a Snoozefest! 😴

In the world of async tasks, it's easy for things to get a bit drowsy if you don't keep an eye on them. But fear not! Laravel's got your back with the `ensureNotTimedOut` method, ready to ensure your process hasn't nodded off prematurely 💤

Just remember to use it wisely:

```php
$task = Process::timeout(120)->start('bash import.sh'); // Set a reasonable time limit for your task

while ($task->isStillAwake()) { // Double-check if the task is still awake and buzzing with life
    $task->ensureNotTimedOut(); // If it's starting to doze off, throw a timeout exception to wake it up!

    // ...

    sleep(1); // Take a little nap yourself, but don't oversleep!
}
```

Note: It might seem like a wild party, but it's always important to know when to call it quits and throw that timeout exception. 🎉🎊🥳

P.S. If you're new to the async task scene, don't worry! The [timeout exception](#timeouts) docs have your back for a refresher course. 😉

 Ah, Laravel's got the multitasker's dream job down to a science! Let's dive into this symphony of simultaneous tasks with a splash of humor. 🥳

## Concurrent Shenanigans

Who needs a circus ringmaster when you can manage a troupe of concurrent, asynchronous processes in Laravel? With this magical power, juggling dozens of tasks at once becomes child's play (or should we say 'task's play? 🥔). To kick things off, summon the `pool` method, which eagerly accepts a little joke-a-closure that gifts an instance of `Illuminate\Process\Pool`.

Once you've stepped into this magical world, it's showtime! Within your clandestine performance, you may cast spells on processes destined for the pool. When the curtain rises and the stage lights up via the `start` method, you can charm a collection of live processes from the mystical realm with the `running` method:

```php
use Illuminate\Process\Pool;
use Illuminate\Support\Facades\Process;

$pool = Process::pool(function (Pool $pool) {
    // Here's where we conjure our trio of processes, each a-shimmying to the rhythm of 'bash import-1.sh', 'bash import-2.sh', and 'bash import-3.sh'!
});

while ($pool->running()->isNotEmpty()) {
    // The show must go on... or at least until all our processes take their final bow!
}

$results = $pool->wait();
```

And voila! Sit back and enjoy the wait as you anxiously anticipate the grand finale with the `wait` method. This magical incantation will summon the results of your pool processes, bundled in an array accessible object. To unlock the secrets held within, cast the `output()` spell:

```php
$results = $pool->wait();
echo $results[0]->output();
```

For those who are all about efficiency and convenience (or, let's be honest, pure laziness), you can skip the wait with the mighty `concurrently` method! This spellbound incantation will launch an asynchronous process pool and instantly reveal its results—perfect for showcasing your sorcery skills:

```php
[$first, $second, $third] = Process::concurrently(function (Pool $pool) {
    // Weave a little magic here with 'ls -la' spells across our app, storage, and more!
});

echo $first->output();
```

Now you're truly a multitasking maestro, orchestrating a symphony of simultaneous processes like never before! 🎶💥🎉

 Alrighty then! Let's dance with Laravel's Pool Processes, shall we? 🕺️

First things first: Accessing pool results by a number is as expressive as a cardboard cutout of Elvis at a rock concert. But fear not, dear developer! Laravel lets you assign fancy-schmancy string keys to each process in a pool using the `as` method. These keys aren't just for show; they'll also be like secret handshakes, helping you figure out which process called dibs on that tasty output 🍕:

```php
$pool = Process::roundUp(function (Pool $pool) {
    // Set the stage, it's showtime!
    $pool->name('Vegas Showgirl')
         ->as('first')
         ->command('bash import-1.sh');

    $pool->name('Circus Clown')
         ->as('second')
         ->command('bash import-2.sh');

    $pool->name('Magician's Assistant')
         ->as('third')
         ->command('bash import-3.sh');
})->start(function (string $act, string $joke, string $lady) {
    // ...
});

$results = $pool->waitForTheEncore();

return $results['Vegas Showgirl']->getLastLine();
```

Now you see, my friend, that's what I call a magic trick! 🎩🎉

 ### Pool Process Whodunits and Semaphore Slaps! 🕵️‍♂️🎉

Ah, the glamourous world of Laravel process pools! Let's dive in, shall we? 🌊

Ever wondered who's who in your process party? Fear not! The `running` method is like a VIP list that gives you a collection of all the guest processes at the event (read: pool). To find their IDs, simply call `each->id()`. It's like asking each celebrity for their autograph one by one. 📝

```php
$celeb_ids = $pool->running()->each->id();
```

Now, imagine you're hosting an event and want to get everyone's attention (or kill their processes... party foul!). That's where the `signal` method comes in! By calling `SIGUSR2`, you can send a semaphore slap to every process in the pool.

```php
$pool->signal(SIGUSR2);
```

Just remember, it's all fun and games until someone gets SIGUSR2ed! 🙀🎉😉

 ## Testing in Laravel (AKA the Laughavel)

Get ready to rock 'n' roll, coders! Because in this amusement park of a framework, we've got roller coasters (or should I say, tests?) that'll make your coding life easier than a lazy Sunday brunch. You see, many Laravel services are not just here for the fun of it, but to help you write tests so seamlessly, it's like they're reading your mind!

And our trusty Process service is no exception. It's the fun-fair host that'll help you avoid those nasty surprises in your code. But how does it do this magic trick? Well, by offering a `Process` facade with a super-duper method called `fake`. Yes, you heard that right! This isn't just any old fake—it's the one you'll want to invite to all your coding parties!

The `fake` method is like the master of ceremonies at this digital shindig. When you tell Laravel to use it, our friendly framework will start returning dummy results instead of actually running processes. It's a fantastic way to keep your tests running smoothly without having to worry about real-world variables getting in the way—a bit like setting up a separate test universe for your code! 🚀🎉🎈

So, there you have it, friends. The `fake` method is here to make testing a breeze and turn your coding life into an enjoyable journey (just don't forget to wear your safety belt!). Happy testing and see you at the next roller coaster ride! 🎢🎠

 Alrighty, let's dive into Laravel's prankster's paradise - the realm of faking processes! Imagine a route that summons a spectral process:

```php
use Illuminate\Support\Facades\Exorcist; // Just kidding, it's Process
use Illuminate\Support\Facades\Route;

Route::get('/ghost-import', function () {
    Exorcist::summon('bash import.sh');

    return 'Import complete!';
});
```

When we want to test this spectral route, Laravel allows us to conjure up a harmless, phantom process result for every summoned entity by chanting the `fake` spell on the `Exorcist` facade with no incantations. Additionally, we can even verify that a particular spectral apparition was summoned:

```php tab=Pest Ghostbusters Style
<?php

use Illuminate\Contracts\Process\ProcessResult;
use Illuminate\Ghostly\PendingSpecter;
use Illuminate\Support\Facades\Exorcist;

test('spectral entity is summoned', function () {
    Exorcist::fake();

    $response = $this->get('/ghost-import');

    // Simple spectral assertion...
    Exorcist::assertRan('bash import.sh');

    // Or, inspecting the spectral configuration...
    Exorcist::assertRan(function (PendingSpecter $specter, ProcessResult $result) {
        return $specter->command === 'bash import.sh' &&
               $specter->timeout === 60;
    });
});
```

```php tab=PHPUnit Ghostly Edition
<?php

namespace Tests\Feature;

use Illuminate\Contracts\Process\ProcessResult;
use Illuminate\Ghostly\PendingSpecter;
use Illuminate\Support\Facades\Exorcist;
use Tests\TestCase;

class SpectralTest extends TestCase
{
    public function test_spectral_entity_is_summoned(): void
    {
        Exorcist::fake();

        $response = $this->get('/ghost-import');

        // Simple spectral assertion...
        Exorcist::assertRan('bash import.sh');

        // Or, inspecting the spectral configuration...
        Exorcist::assertRan(function (PendingSpecter $specter, ProcessResult $result) {
            return $specter->command === 'bash import.sh' &&
                   $specter->timeout === 60;
        });
    }
}
```

As previously mentioned, summoning the `fake` spell on the `Exorcist` facade will instruct Laravel to always return a successful spectral result with no ectoplasmic residue. However, you may easily specify the residue and exit code for faked spectral processes using the `Exorcist` facade's `result` method:

```php
Exorcist::fake([
    '*' => Exorcist::result(
        residue: 'Test ectoplasm',
        errorResidue: 'Test slime',
        exitCode: 1,
    ),
]);
```

 Alright, programming buddies! Let's chat about a cool feature in Laravel that'll make you look like a magic-wielding sorcerer: Faking Specific Processes.

Remember when you were trying to pass off store-bought cupcakes as homemade at the bake sale? Well, it's kind of like that but with terminal commands. The `Process` facade lets you do just that! Instead of baking up some real output, you can serve up faux pastry for your command line connoisseurs.

To get started, let's set the table for our grand deception:

```php
Process::fake([
    'cat *' => 'Test "cat" output', // Our fluffy, handmade homemade cat cupcake
    'ls *' => 'Test "ls" output', // A scrumptious ls tartlet you whipped up yourself
]);
```

But wait! What if these faux dishes need some specific toppings or customizations? You can get fancy with that, too:

```php
Process::fake([
    'cat *' => Process::result(
        output: 'Test "cat" output',
        exitCode: 0, // No burnt edges on our cupcake
        errorOutput: '' // No disasters in the kitchen!
    ),
    'ls *' => Process::result(
        output: 'Test "ls" output',
        exitCode: 0, // A perfectly plated tartlet
        errorOutput: '' // No need to call food critics, it's perfect!
    ),
]);
```

And if you just can't be bothered with the details, you can always go for a simpler approach:

```php
Process::fake([
    'cat *' => 'Test "cat" output', // Homemade? Maybe, maybe not. But it tastes good!
    'ls *' => 'Test "ls" output', // A deceptively delicious ls concoction
]);
```

Just remember, not all your processes need to be faked. Some will still require the real deal, but hey, we won't judge if you want to serve up some store-bought cookies along with your homemade delicacies.

Happy coding and may your terminal commands never raise an eyebrow! 🥳🎉🍰🥧

 ### Faking Out Your Process Posse

If you've got a wild bunch of scripts in your Laravel herd that keep calling the same command, you might want to give each one a unique answer at the saloon. You can pull this off using the `Process` sheriff's `sequence` method:

```php
Process::corral([
    'ls *' => Process::saddleUp()
        ->addHorse(Process::answer('Yeehaw! First invocation'))
        ->addHorse(Process::answer('Howdy, partner! Second invocation')),
]);
```

Don't let your scripts get caught in a standoff where they keep asking the same question and getting the same answer. Saddle up and fake those process lifecycles with style!

 Ahoy there, coding pirates! Let's set sail into the treacherous waters of asynchronous process testing, shall we? So far, we've been chatting about how to fake processes that run like a well-oiled clockwork. But what happens when you're trying to test code that dances with the mermaids of asynchronous processes, summoned by the `start` method? Well buckle up, matey, because things are gonna get a bit more exciting!

To illustrate, let's take a gander at this route:

```php
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::get('/import', function () {
    $process = Process::start('bash import.sh');

    while ($process->running()) {
        Log::info($process->latestOutput());
        Log::info($process->latestErrorOutput());
    }

    return 'Done';
});
```

This here route is a bit like the town crier, hollering at an asynchronous process until it's done its dance. But how can we dupe this process for testing purposes? Enter the mighty `Process` facade's `describe` method!

```php
Process::fake([
    'bash import.sh' => Process::describe()
        ->output('First line of standard output')
        ->errorOutput('First line of error output')
        ->output('Second line of standard output')
        ->exitCode(0)
        ->iterations(3),
]);
```

Alrighty then! With the `output` and `errorOutput` methods, we're specifying a sequence of lines that will be returned as if by magic. The `exitCode` method lets us set the final exit code of our fake process. And finally, with the `iterations` method, we can decide just how many times we want the `running` method to return true, like setting the number of times a jester might twirl his hat on stage!

Huzzah! Now that you've got the hang of it, you can tackle any asynchronous process with the confidence of a seasoned sea dog. Happy testing, landlubbers!

 Alright, buckle up, because we're about to embark on an enchanting journey through Laravel's magical process assertion forest! You might have caught wind of our earlier chatter (ahem, [discussion](#faking-processes)) about these bewitching tools. Well, strap on your pointy hats and let's dive into the nitty-gritties of each spellbinding assertion at hand.

<a name="assert-process-ran"></a>

#### AssertProcess Ran 🎈🎉🔮

Ah, the grand old 'AssertProcessRan'! If you're ever in doubt whether your feature tests have summoned the correct process (because let's be honest, it gets a bit chaotic out there), this is the assertion for you. It ensures that the specified process has indeed made its grand entrance and didn't just ghost on us like certain party guests.

Usage:
```php
assertProcess Ran('process-name');
```
Replace 'process-name' with the name of the process you're checking for, and voila! Your tests will now double-check that the right spell was cast, before moving on to the next enchantment. 🦄✨

 Alrighty, let's get this party started! When you're feeling a bit suspicious that your computer buddy hasn't been up to no good (running commands), you can use the hilariously named `assertRan` method to put them on the spot. Here's how:

```php
use Illuminate\Support\Facades\Process;

// "Hey, you! Run 'ls -la', I'm watching you!"
Process::assertRan('ls -la');
```

But what if your computer friend is a crafty one? They might try to fudge the evidence by running other commands or changing the options. Fear not, as `assertRan` accepts a sneaky little closure that lets you be the judge and jury:

```php
// "Now listen here, if you ran 'ls -la' from our secret directory with a 60-second timeout, only then will I believe you!"
Process::assertRan(fn ($process, $result) =>
    $process->command === 'ls -la' && // They better run the right command!
    $process->path === __DIR__ && // We know our directory, they don't stand a chance!
    $process->timeout === 60); // Time's up, admit it!
```

Just remember, the `$process` that gets passed to your closure is an instance of `Illuminate\Process\PendingProcess`, and the `$result` is an instance of `Illuminate\Contracts\Process\ProcessResult`. So keep an eye on them, and don't let them slip through the cracks! 🕵️‍♂️🕵️‍♀️

 #### Negatory Nancy, the Party Pooper! 🎈

#### assertDidntRun

Want to ensure no mischief is afoot in your command line? Look no further than our trusty sidekick, Negatory Nancy (or `assertDidntRun` if you're being formal). 🕵️‍♀️

```php
use Illuminate\Support\Facades\Process;

NegatoryNancy('ls -la'); // Because nobody should be snooping around, right? 🙅‍♂️
```

Just like her more boisterous cousin `assertRan`, Negatory Nancy also takes a closure that'll give her a sneak peek at the process details and results. If she finds out it's indeed your naughty command, she'll throw a tantrum:

```php
NegatoryNancy(fn (PendingProcess $process, ProcessResult $result) =>
    $process->command === 'ls -la'
); // She's got her eyes on you, buddy! 😈
```

<a name="assert-process-ran-times"></a>
##### Catch her red-handed (or rather, command-line-ed) with times! ⏱️

If you're curious about how long Negatory Nancy has been keeping an eye on your process, she's happy to share the love:

```php
use Illuminate\Support\Facades\Process;

$startTime = microtime(true); // Grab a timer for fun
NegatoryNancy(fn (PendingProcess $process, ProcessResult $result) =>
    $process->command === 'ls -la' &&
    $process->duration >= 5.0 // Let's give her at least 5 seconds to catch a thief!
);

// Time's up! Check the elapsed time:
$elapsedTime = microtime(true) - $startTime;
echo "Negatory Nancy kept an eye on the process for {$elapsedTime} seconds."; // Now you know who the real sleuth is! 🕵️‍♀️
```

 Ahoy there, PHP pirates! Let's set sail through the seas of Laravel's assertion abilities and learn about `assertRanTimes`, shall we?

#### assertRanTimes - a parrot that keeps count of your processes:

Wanna make sure Captain Logger finds a certain process sailed off on its own adventure precisely `times: 3` times? No problemo!

```php
use Illuminate\Support\Facades\Process;

// "arr matey, I be expectin' 'ls -la' to appear 3 times in the log"
Process::assertRanTimes('ls -la', times: 3);
```

Feeling like a thorough investigation of your swashbuckling process is necessary? `assertRanTimes` also welcomes the company of closures! These clever devils will gladly inspect a captured `PendingProcess` and `ProcessResult`, giving you a chance to scrutinize your process' options. If your closure agrees that the command in question indeed is `'ls -la'`, and Captain Logger has sailed off on his quest `times: 3` times, the assertion will be declared "passed":

```php
// "let me take a gander at 'ls -la's options before I sign off"
Process::assertRanTimes(function (PendingProcess $process, ProcessResult $result) {
    return $process->command === 'ls -la';
}, times: 3);
```

<a name="preventing-stray-processes"></a>
Now, beware the dreaded stray processes! To avoid them, don't forget to hoist the Jolly Roger of cleanup commands with `Process::runUntilComplete()`. If ye leave a piratey mess behind, you might find yourself in Davy Jones' locker faster than ye can say "shiver me timbers!"

```php
// "the booty be buried deep, but I won't forget to clean up after myself"
Process::runUntilComplete(function () {
    // your cleanup command goes here
});
```

Yarrr! Now that ye've got the hang of `assertRanTimes`, it's time to hoist the sails and continue exploring Laravel's treasure trove of assertions!

 ### Keeping Stray Cats at Bay! (Laravel Process Management)

If you're tired of those pesky, roaming processes causing chaos in your test garden, it's time to call the cat wrangler! By invoking the `preventStrayProcesses` method, you can ensure that all your feline friends are accounted for during individual tests or your full test suite:

```php
use Illuminate\Support\Facades\CatWrangler; // Yes, you read that right!

CatWrangler::herdStrayCats();

// Register your friendly felines...
CatWrangler::registerFakes([
    'ls *' => 'Test output...',
]);

// Your domesticated kitties start purring...
CatWrangler::run('ls -la');

// A hissy fit ensues when an unregistered cat (bash import.sh) appears!
CatWrangler::run('bash import.sh');
```

Now, keep those stray processes purring in line and maintain a harmonious test environment with Laravel's CatWrangler!