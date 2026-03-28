 # The Great Escape Act: Laravel's Magic Trick with Queues!

## Stage Setup: Connections vs. Queues
You know, we all love to party...I mean, process tasks synchronously. But sometimes, there are just too many guests and the bartender (your server) can't handle it all. That's where our magical backstage (queues) come in! They hold onto tasks (jobs) until the bartender is ready to serve 'em up.

### Driver Notes and Prerequisites:
Just like every magician has their own bag of tricks, Laravel supports different queue drivers with various prerequisites. For example, the database driver requires a connection, while Redis demands a reconnection. Mind-boggling, isn't it?

<a name="creating-jobs"></a>
## The Magician's Act: Creating Jobs

### Generating Job Classes:
To create a job, you need to perform the incantation `php artisan make:job` and voila! Your new job class will appear, ready for you to customize.

### Class Structure:
Every job class should have methods that define what happens when the magic is performed (the job is processed). The handle method is the star of the show here.

### Unique Jobs:
Don't let duplicate tasks spoil your trick! Laravel ensures that each job is unique, so you won't find twins in the queue.

### Encrypted Jobs:
Worried about nosy spectators (hackers) peeking at your secrets? Laravel can encrypt jobs for added security.

<a name="job-middleware"></a>
## The Stagehand's Role: Job Middleware

Middlewares help manage the flow of jobs, just like a stage manager keeping track of all the moving parts in a production. You can use them to rate limit jobs, prevent overlaps, throttle exceptions, and even skip jobs if needed.

<a name="dispatching-jobs"></a>
## The Usher's Task: Dispatching Jobs

### Delayed Dispatching:
Sometimes you need to create a job but not send it to the queue immediately. With delayed dispatching, you can schedule when the task should be executed.

### Synchronous Dispatching:
If you want to perform a task right away, you can do synchronous dispatching. But remember, this means the bartender won't have time for any other tasks until yours is done!

### Jobs & Database Transactions:
When a job involves multiple database operations, it's best to wrap them in a transaction. That way, if something goes wrong during the trick (job execution), everything gets rolled back, preserving your illusions.

### Job Chaining:
Chain together multiple jobs so that one job triggers another, creating a seamless performance!

### Customizing The Queue and Connection:
Give your queue driver a personal touch by customizing it with settings specific to your production.

### Specifying Max Job Attempts / Timeout Values:
Set the maximum number of attempts for a job and timeouts to ensure no task overstays its welcome.

### SQS FIFO and Fair Queues:
Amazon's FIFO (First-In, First-Out) and fair queues help you maintain order in your production and keep things running smoothly.

### Queue Failover:
If the primary queue worker encounters an error, Laravel can automatically redirect jobs to a secondary worker for seamless performance.

### Error Handling:
Handle errors with grace by defining exception handling rules within your job classes.

<a name="job-batching"></a>
## The Backstage Crew's Task: Job Batching

### Defining Batchable Jobs:
Batch together jobs that perform similar tasks to save time and resources.

### Dispatching Batches:
Once you've batched your jobs, dispatch them all at once with a single command.

### Chains and Batches:
Combine job chains and batches for even more powerful performances!

### Adding Jobs to Batches:
Add new jobs to an existing batch anytime before it's dispatched.

### Inspecting Batches:
Get a glimpse of the current batch members and their statuses.

### Cancelling Batches:
If something goes wrong, you can cancel the entire batch instead of individual jobs.

### Batch Failures:
Keep track of failed jobs within a batch to help with troubleshooting.

### Pruning Batches:
Remove completed batches from the queue to keep things tidy and efficient.

### Storing Batches in DynamoDB:
Save your batches in Amazon's DynamoDB for easy retrieval and analysis.

<a name="queueing-closures"></a>
## Closure Magic: Queuing Closures

Queue closures just like regular jobs, but with the added convenience of being defined on the fly!

<a name="running-the-queue-worker"></a>
## The Final Performance: Running the Queue Worker

### The `queue:work` Command:
Start the queue worker by running this command, and let the magic begin!

### Queue Priorities:
Set priority levels for jobs to ensure they're processed in the order you want. High-priority tasks get served first!

### Queue Workers and Deployment:
Scale your production by adding more queue workers as needed during deployment.

### Job Expirations and Timeouts:
Expired or timed-out jobs will automatically be removed from the queue to keep things running smoothly.

### Pausing and Resuming Queue Workers:
Pause or resume the queue worker at any time to control the flow of tasks during your production.

<a name="supervisor-configuration"></a>
## Backstage Operations: Supervisor Configuration

Configure your supervisor settings to ensure your queue workers keep running smoothly, even when you're not around.

<a name="dealing-with-failed-jobs"></a>
## Cleaning Up Act: Dealing With Failed Jobs

### Cleaning Up After Failed Jobs:
Remove failed jobs from the queue to prevent clogging and ensure smooth performance.

### Retrying Failed Jobs:
Configure Laravel to retry failed jobs automatically for better reliability.

### Ignoring Missing Models:
Ignore missing models during job execution to avoid errors caused by model dependencies.

### Pruning Failed Jobs:
Remove old failed jobs from the queue to keep things tidy and efficient.

### Storing Failed Jobs in DynamoDB:
Store failed jobs in Amazon's DynamoDB for easy retrieval and analysis.

### Disabling Failed Job Storage:
Turn off failed job storage if you don't need it for your production.

### Failed Job Events:
Listen for failed job events to build custom error handling and reporting systems.

<a name="clearing-jobs-from-queues"></a>
## The Final Bow: Clearing Jobs From Queues

Remove jobs from the queue manually or set up a schedule to clear them at specific intervals.

<a name="monitoring-your-queues"></a>
## The Afterparty: Monitoring Your Queues

Stay on top of your queue's performance by monitoring job processing times, queue lengths, and worker statuses.

<a name="testing"></a>
## The Dress Rehearsal: Testing

Test your jobs, chains, batches, and job/queue interactions to ensure a smooth production every time.

<a name="job-events"></a>
## Behind the Scenes: Job Events

Stay informed about job events like job processed, job failed, and more by registering event listeners for your jobs.

 ## Greetings, Web App Wizards! 🚀

Embarking on a digital odyssey and finding yourself knee-deep in CSV files that take forever to process? Fear not, Laravel's here to help you sail through those tedious tasks like a boss!

Imagine your application, a speedy superhero, able to respond to web requests faster than Flash (the character, not the internet) during a caffeine overdose. How do we achieve this superpower? By offloading those time-consuming chores to a queue system that Laravel makes as easy as a slice of digital apple pie!

Laravel's queues offer a unified interface for various queue backends, including Amazon SQS, Redis, databases (which could be any DB, even the one that stores your great-grandfather's recipes), or even Beanstalkd (the cloud version of the magical plant from 'Jumanji').

Your application's `config/queue.php` file is where all the queue configuration options reside, acting as the control tower for these queues. Inside, you'll find connection configurations for each queue driver included with the framework, including database, Amazon SQS, Redis, Beanstalkd, and an immediate execution driver (perfect for development or testing). And yes, we even have a 'null' driver that just tosses out those queued jobs because, let's face it, some tasks are just not worth it.

> [!NOTE]
> Looking to jazz up your Redis-powered queue management? Laravel Horizon is here to save the day! Dive into the full [Horizon documentation](/docs/{{version}}/horizon) for a thrilling ride.

<a name="connections-vs-queues"></a>
Now, off you go to conquer those queues and serve your users with blazing speed and an unparalleled user experience! 🏃‍♂️💨🚀

 Alrighty then! Let's dive into the delightful world of Laravel queues, where jobs take a break and chill until it's their turn to get processed. But first, let's clear up the confusion between connections and queues - think of them as your pals at a party (connections) and the different lines for beer (queues).

In your trusty `config/queue.php` file, you'll find an array of connections named "connections". It defines the relationships with backend queue services such as Amazon SQS, Beanstalk, or Redis - think of them as wingmen who help your jobs get noticed at the party.

Now, each connection can have multiple queues, which you might think of as different stacks or piles of jobs waiting for their turn to be served. Each connection configuration example in the `queue` configuration file contains a `queue` attribute - this is like the VIP section where your jobs will end up when they're sent to a given connection.

In case you're wondering, if you send a job without specifying its queue, it'll head straight for the default queue defined in the `queue` attribute of the connection configuration.

```php
use App\Jobs\ProcessPodcast;

// This job is sent to the default connection's default queue...
ProcessPodcast::dispatch();

// This job is sent to the default connection's "emails" queue...
ProcessPodcast::dispatch()->onQueue('emails');
```

Some apps may be content with just one simple queue, but pushing jobs to multiple queues can come in handy for applications that want to prioritize or segment their job processing. With Laravel's queue worker, you can specify which queues it should process by priority. For instance, if you push jobs to a `high` queue, you might run a worker that gives them higher processing priority:

```shell
php artisan queue:work --queue=high,default
```

Now that we've got the party started, let's get these jobs flowing and have some fun!

 Alrighty, buckle up, because we're diving headfirst into the magical world of database connectors in Laravel! 🌈🐲

<a name="database"></a>
##### Databases: The Rockstars Behind the Scenes 🎉

First things first, Laravel plays well with a variety of databases, but not just any ol' databases. We're talking about the cool kids: MySQL, PostgreSQL, SQLite, and SQL Server. These are the rockstars behind the scenes, making sure your data stays organized and ready for action! 🎸

<a name="installation"></a>
##### Connecting to Your Database (A.K.A "The First Date") 💏

Now, getting Laravel to go on a date with one of these databases is as easy as saying "Cheese!" When you're ready, just follow these simple steps:

1. Choose your database driver (MySQL, PostgreSQL, SQLite, or SQL Server) and add the corresponding details to your `.env` file. Think of it like a Tinder profile for databases! 📱

2. Install the database package using Composer, which is like inviting your date over for dinner (but less romantic). Just run this command: `composer install "laravel/[driver]"`. Replace `[driver]` with the name of your chosen database system (MySQL becomes `mysql`, PostgreSQL becomes `pgsql`, SQLite remains `sqlite`, and SQL Server is `mssql`). 🍴

3. Make sure Laravel knows where to find the database driver by adding it to your `config/app.php` file. This is like introducing your date to your friends (in this case, other PHP classes that help out with the database stuff)! 🎉

<a name="configuration"></a>
##### Configuration: Making Your Relationship Work 💘

Now that Laravel and your chosen database are officially a couple, let's make sure their relationship is as smooth as possible. Head over to `config/database.php` and configure your connection settings according to the database you chose earlier. Think of it like setting boundaries or deciding on a pet name for your new database beau! 🐶

Remember, every relationship has its ups and downs, but with Laravel, your database will never feel neglected. The framework comes equipped with a variety of tools to help manage and optimize your connection, ensuring both sides are happy and productive! 🎊

So there you have it – Laravel's guide to dating databases! Now that you know the drill, go ahead and start building awesome applications with your newfound knowledge. And who knows? Maybe one day they'll even introduce you to their friends (other Laravel packages)! 🎉🤝💖

 Alrighty, let's get this database party started! But before we do, remember that the `database` queue driver is like the lifeblood of your Laravel app - it's where all those jobs (tasks) are stored. And just like a good party, you need a place for people to hang out - in this case, a table!

Luckily, Laravel thought ahead and included this essential table in their default `0001_01_01_000002_create_jobs_table.php` [migration file](/docs/{{version}}/migrations). But if your app's a bit of a party pooper and doesn't have this migration, don't worry! You can always invite it with the `make:queue-table` Artisan command (think of it as sending an evite):

```shell
php artisan make:queue-table
```

Once you've sent the invite, it's time to get everyone in the door! Run `php artisan migrate` (it's like saying, "Hey party people, let's get this started!"). Now your Laravel app can start queueing up those jobs and keeping the good times rolling! 🎉🥳💃🕺

Oh, and just a friendly reminder - always make sure you have the right music at your party (in our case, that's making sure you've got the latest database migrations). Happy queueing, folks! 🍻💪🤘

 Ahoy there, Laravel sailor! If you're ready to unleash the power of a speedy queue system on your application like a modern-day Pharoh commanding his laborers, then it's time we talk about Redis! But first, grab yourself a snack and a drink 'cause this could get exciting!

To utilize the `redis` queue driver, you need to do a little dance with Redis database connection settings. Fret not, as your trusty `config/database.php` file is where the magic happens! Here's how you tango:

1. Configure your Redis database connection like it's the most important piece of code in the universe (which, let's be honest, it might as well be).
2. Name that connection something catchy and memorable – 'RedisSpike', perhaps? Just make sure to remember it when you're configuring your queue driver.

> [!ATTENTION]
> A word of caution: The `serializer` and `compression` Redis options are a bit like trying to put a square peg in a round hole with the `redis` queue driver – it won't work, matey!

Now, let us venture further into the realm of Redis Cluster (yes, just like the ancient structure in Egypt). Here's the skinny:

<a name="redis-cluster"></a>
When you have a vast and sprawling application with queues spanning across galaxies, you'll want to consider using Redis Cluster. It's like having a fleet of Redis databases working together in perfect harmony – no more waiting for your slow co-worker to finish their task before moving onto the next one!

To configure Redis Cluster, simply add some additional settings to your Redis database connection configuration. You'll need to provide details about your cluster nodes and let Laravel know that you're working with a cluster setup. Then, sit back and watch as your application's queue system becomes faster than a cheetah on steroids!

Happy queuing, Laravel explorers! And remember: when it comes to speedy queue systems, there's no substitute for Redis!

 Alright, let's get this Redis Cluster party started! 🥳

If your Redis queue connection is more like a high-school dance (where everyone's trying to find their perfect match), you'll need to tag your queue names with a key hash. This is the equivalent of wearing matching wristbands so all the cool kids can hang out together in the same corner:

```php
'redis_rave' => [
    'driver' => 'Redis Disco Ball', // Who needs subtlety when you're having fun? 🎉🎈
    'connection' => env('REDIS_QUEUE_CONNECTION', 'default'), // Just in case your Redis forgets your name again
    'queue' => env('REDIS_QUEUE', '{#DanceFloor}'), // Yes, we're all going to the same place. Don't worry about it.
    'retry_after' => env('REDIS_QUEUE_RETRY_AFTER', 90), // Give your Redis a chance to catch its breath before asking again
    'block_for' => null, // No need to wait by the punch bowl for someone who's not coming
    'after_commit' => false, // After-party? Not tonight, Redis. We've got more queues to dance through 💃🕺
],
```

Now, let's get this queue moving! 🎶💪🚀

 Alright, mate! Let's get our Redis queue on and make it dance to our tune with a little help from the `block_for` configuration option. This handy dandy setting allows you to dictate how long the driver should chillax and wait for a job to pop up before it jumps back into the worker loop and does another Redis database poll.

By tuning this value according to your queue's appetite, you can save yourself from countless trips to the Redis fridge, looking for fresh jobs. For example, cranking it up to `5` means the driver will hang loose for five whole seconds while patiently waiting for a job to show up:

```php
'redis' => [
    'driver' => 'redis',
    'connection' => env('REDIS_QUEUE_CONNECTION', 'default'),
    'queue' => env('REDIS_QUEUE', 'default'),
    'retry_after' => env('REDIS_QUEUE_RETRY_AFTER', 90),
    'block_for' => 5, // In seconds, because who needs metric systems when you can count to five?
    'after_commit' => false,
],
```

> [!CAUTION]
> If you set `block_for` to `0`, the queue workers will turn into immovable objects, like statues of overworked developers. They'll stand there stone-faced and unyielding until a job comes along, and even signals like the dreaded `SIGTERM` won't be able to reach them until their current task is done! So please, have mercy on your workers and give them some breathing room! 😓

 **Square One: The Driver's License for Queue-Land**

Brace yourselves, coding cowboys and codettes! Before we dive into the wild west of Laravel queue drivers, let's make sure you've got the right gear. Here are the prerequisites, installable via the magical Composer package manager:

1. **Amazon SQS (That's Square Cowboy, not Country Squash)**: `aws/aws-sdk-php ~3.0` - This is your ticket to ride in the cloudy frontier of Amazon's Sorting Queue System.

2. **Beanstalkd (Not the beanstalk from Jack and the Beanstalk, although it does seem to climb tasks!)**: `pda/pheanstalk ~5.0` - This is your trusty steed in the land of job management.

3. **Redis (No, not the beach!):** `predis/predis ~2.0` or phpredis PHP extension - Redis is like a cowboy's trusty compass, helping you navigate through complex tasks.

4. **MongoDB (The coolest sheriff in town)**: `mongodb/laravel-mongodb` - This is your six-shooter for handling jobs with MongoDB. Don't worry, it won't bite!

Now that you're all kitted out, let's saddle up and create some jobs! (You can find the how-to in [Creating Jobs](#creating-jobs).) Happy coding, partner!

 Ahoy there, coding pirates! Dive into the mystical world of Laravel's Job system, where tasks are as exciting as plundering treasures and just as rewarding. But instead of gold doubloons, you get cleaner code and better app performance! 🏴‍☠️💰

<a name="generating-job-classes"></a>
### Generating Job Classes

To create a new job, Laravel provides the `make:job` Artisan command. This powerful incantation will summon forth a fresh job class in your chosen directory, ready to be filled with the dark arts of task execution! 🔮🧹

```bash
php artisan make:job CleanTreasureRoomJob
```

This command will create a new file in the `App/Jobs` directory called `CleanTreasureRoomJob.php`. Now, you can implement your piratey logic inside this newly minted class! 🌈🏴‍☠️

Remember, every job must have a `handle()` method. This is where all the action takes place - just like the Captain's Quarters on Blackbeard's ship! 🏴‍☠️⚔️

```php
namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CleanTreasureRoomJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // Your piratey logic goes here...

    public function handle()
    {
        // Clean the treasure room! (or whatever it is you want your job to do)
        // Remember, jobs can use Eloquent models just like controllers!
    }
}
```

With that, you've created a job! Now, let's explore how to dispatch this job and sail it through the seas of queues! 🚢⛵️

<a name="dispatching-jobs"></a>
### Dispatching Jobs

To send your job on its merry way, you can use the `dispatch()` method. This spell will push your job into the queue for later execution. 🗞️🌪️

```php
use App\Jobs\CleanTreasureRoomJob;

// Dispatch the job!
$job = new CleanTreasureRoomJob();
$job->dispatch();
```

But what if you want to customize when and how your job is processed? Enter the world of queues! Laravel comes with several queue connections out-of-the-box, like database, Redis, Amazon SQS, and more! 🌐📈

<a name="queuing"></a>
### Queuing

To use a specific queue connection for your job, you'll need to configure it first. Open up the `config/queue.php` file and update the appropriate connection details.

```php
// config/queue.php

return [
    // ...
    'connections' => [
        // ...
        'database' => [
            'driver' => 'database',
            'table' => 'jobs',
            // Other configuration...
        ],
        // More queue connections here...
    ],

    // ...
];
```

Once you've set up your desired connection, you can specify it when dispatching a job.

```php
// Dispatch the job to the 'database' queue!
$job = new CleanTreasureRoomJob();
$job->onQueue('default'); // Or any name from your configured connections
$job->dispatch();
```

And that, me hearties, is how you create jobs in Laravel! Happy coding and may your app be swift and your queues never overflow! 🌴🤝

 Alright, let's dive into the hilarious world of Laravel jobs, shall we? 🎉🌈

By default, all your application's queueable tasks are stored in a posh suite located at `app/Jobs`. If this swanky penthouse is missing, fear not! One swift command from our trusty Artisan will create it for you:

```shell
php artisan make:job ProcessPodcast 🎧🔔
```

And just like that, a dapper new job class will be born! This suave gentleman (or lady, we don't discriminate here at Laravel) will implement the `Illuminate\Contracts\Queue\ShouldQueue` interface, giving it the secret handshake that whispers, "Push me onto the queue and let's party asynchronously!" 🕺️💃

> [!NOTE]
> If you fancy customizing your job stubs to better suit your personal style or taste (we're looking at you, Taylor Swift), feel free to [fiddle around with stub customization](/docs/{{version}}/artisan#stub-customization). Just remember, it takes a true artist to create the perfect job class! 🎨🎭

<a name="class-structure"></a>
Now that we've introduced our glamorous newcomer, let's discuss the structure of this fabulous creation:

1️⃣ A constructor to set up any necessary dependencies (think of it as a job interview where you list your qualifications).

2️⃣ The `handle` method - the main event where the actual work gets done (you can think of this as the red carpet moment, where all eyes are on you!).

3️⃣ Optionally, you might want to implement a few additional methods, such as `failedJob`, `delay`, and `shouldQueueOn` for error handling, setting up job delay times, and queue connection configuration, respectively. But hey, no pressure! 🤘️🎩

 Alright, let's dive into the world of Laravel jobs, where even the most mundane tasks get a touch of glamour! Imagine you're running a hip podcast network and need to polish those rough audio files before they hit the airwaves. Enter the stage, the humble `ProcessPodcast` job class!

```php
<?php

namespace App\Jobs;

use App\Models\Podcast as PODCAST_SUPERSTAR; // because we're all about the drama here
use App\Services\AudioProcessor as TheMasteringEngineer; // because our podcasts deserve nothing but the best
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProcessPodcast implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     *
     * @param PODCAST_SUPERSTAR $podcast
     */
    public function __construct(PODCAST_SUPERSTAR $podcast)
    {
        // Casting call complete! Our podcast has arrived!
    }

    /**
     * Execute the job.
     */
    public function handle(TheMasteringEngineer $processor): void
    {
        // Cue the music, it's time to process that podcast!
    }
}
```

Notice how effortlessly we passed an Eloquent model directly into our queued job's constructor? It's like magic! Thanks to the `Queueable` trait, this model gets treated with the red carpet on its journey through the queue—gracefully serialized and unserialized when it arrives at its destination.

When your job accepts an Eloquent model in its constructor, only the model's ID is sent through the queue. Once the job is actually handled, the queue system works its magic and retrieves the full model instance with all its loaded relationships from the database. This elegant method of model serialization ensures smaller payloads for your queue driver, keeping those data transmission costs low!

Now, don't forget to take a bow—you've just written your first Laravel job!

 Alrighty then! Let's get down to Laravel's job queueing business and dive into the `handle` Method Dependency Injection. This is where the party starts when your job gets processed by the queue. And guess what? You can call your pals (dependencies) to join the dance floor, because you can type-hint them on the `handle` method of the job!

The Laravel service container will automatically invite these friends over for a chat. But if you're feeling a bit bossy and want total control over how the bouncer does his job, you can use the container's `bindMethod` method. It's like telling the bouncer, "Hey, I've got a new way to handle things!"

The `bindMethod` accepts a callback which receives the job and the container. Inside the callback, you can do whatever you want with the `handle` method, but remember to call it properly from the `boot` method of your trusty sidekick – the `AppServiceProvider`.

```php
Use ProcessPodcast, AudioProcessor, Application;

Inside the boot method, we're going to introduce our pals:
$this->app->bindMethod([ProcessPodcast::class, 'handle'], function (ProcessPodcast $job, Application $app) {
    return $job->handle($app->make(AudioProcessor::class));
});
```

Now that we've got our friends on the dance floor, let's talk about some party fouls. If you pass around raw image contents without encoding them in base64 first, it might cause a big mess! The job won't properly serialize to JSON when getting queued up like a rowdy frat boy at the door. So, make sure to use `base64_encode` before passing binary data around.

Cheers to a smoother queueing experience!

 Alrighty then! Let's dive into the charming world of Queued Relationships in Laravel, shall we?

#### Queued Relationships: The Saga of Serialized Love Affairs

In the realm of Eloquent models, relationships are as sweet as a first date. But when a job is queued up like a hot single at a bar, these relationships get all serenaded and put into a big ol' ballad – and sometimes that ballad can be a long one! When the job gets deserialized (think: the next day's hangover), it goes back to the database to fetch those relationships afresh. Any constraints you had before queuing are like old dance moves that nobody remembers anymore, so it's best to re-choreograph your relationship within the queued job if you want a specific dance partner!

Or, if you prefer to keep things casual and not let your relationship into the bar in the first place, you can call the `withoutRelations` method on the model when setting a property value:

```php
/**
 * Create a new job instance.
 */
public function __construct(
    Podcast $podcast, // Oh my! A podcast! But no relations for this one-night stand.
) {
    $this->podcast = $podcast->withoutRelations();
}
```

If you want to break up with just a few of your relationships while keeping the rest, you can use the `withoutRelation` method:

```php
$this->podcast = $podcast->withoutRelation('comments'); // Bye-bye comments! I don't need ya no more!
```

If you're using PHP constructor property promotion and want to declare that an Eloquent model should keep its relationships off the dance floor, you can use the `WithoutRelations` attribute:

```php
use Illuminate\Queue\Attributes\WithoutRelations; // We don't need no relationship troubles!

/**
 * Create a new job instance.
 */
public function __construct(
    #[WithoutRelations]
    public Podcast $podcast,
) {}
```

For convenience, if you want to serialize all models without relationships, you can apply the `WithoutRelations` attribute to the entire class instead of applying it to each model:

```php
namespace App\Jobs;

use App\Models\DistributionPlatform;
use App\Models\Podcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\Attributes\WithoutRelations; // Keep it classy, relationships!

#[WithoutRelations]
class ProcessPodcast implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Podcast $podcast,
        public DistributionPlatform $platform,
    ) {}
}
```

Now, if a job receives a collection or array of Eloquent models instead of a single model, the relationships within that collection won't be restored when the job is deserialized and executed. This is to prevent excessive resource usage on jobs dealing with large numbers of models – like when you invite your entire address book to a party!

So there you have it! Queued Relationships: a dance floor full of relationships, but only the chosen ones get to dance! 💃🏽🕺🏼🤗

 ### Exclusive Job Party! 🥳

Attention party people! If you're here, it means you've been invited to the most exclusive queue event of the year – The Unique Jobs Bash! But, there's a catch. To get in, your cache driver needs to be able to handle lockdowns (or in disco terms, "locks"). Fortunately, our favorite dancefloor hosts - `memcached`, `redis`, `dynamodb`, `database`, `file`, and `array` - all know how to keep things locked down! 🔒

Remember, this exclusive event doesn't apply to the wild batch parties. At those, everyone's invited and anything goes!

Now, if you want to make sure only one person (or job) is grooving on the dance floor at any given moment, you can become the designated dancer by implementing the `ShouldBeUnique` interface in your job class. It's like a VIP pass that doesn't require any extra performance from you! 🎫

```php
<?php

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    // ...
}
```

In this example, the `UpdateSearchIndex` job has been upgraded to VIP status! If another instance of the job is already on the queue, it'll have to sit this one out and wait for the current job to finish.

But what if you want to set a specific unique ID or even define a time-out before the job loses its VIP status? No problemo! Just add the `UniqueFor` attribute and create a `uniqueId()` method in your job class:

```php
<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Queue\Attributes\UniqueFor;

#[UniqueFor(3600)] // One hour time-out
class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    /**
     * The product instance.
     *
     * @var \App\Models\Product
     */
    public $product;

    /**
     * Get the unique ID for the job.
     */
    public function uniqueId(): string
    {
        return $this->product->id;
    }
}
```
In this example, the `UpdateSearchIndex` job is now identified by its product ID and can only dance if no other job with the same ID is already on the queue. If the current job doesn't finish within an hour (3600 seconds), it will lose its VIP status and another job with the same unique ID can take over!

> [!WARNING]
> Make sure all your servers are communicating with the same central cache server. This way, Laravel can accurately determine if a job is the only one dancing on the floor.

Now that you know how to keep jobs exclusive until processing begins, it's time to hit the dance floor and start queuing up some unique fun! 💃🏼🕺🏼

 #### Unleashing One-Time Wonders: The Magical World of Unique Jobs! 🧙‍♂️ 🚀

In the realm of Laravel, jobs are like magical spells that get cast in the background, but unlike Harry Potter's wand, they don't always work perfectly on first try. By default, these jobs are as common as a cat video on the internet - once one finishes or fails to charm its way through its retries, another can pop up just as quickly (much to our chagrin!). But what if we wanted to make our job as exclusive as a VIP ticket to Comic-Con? 🎫

That's where the `ShouldBeUniqueUntilProcessing` contract comes in, handy as a cloak of invisibility! Instead of the vanilla `ShouldBeUnique`, this contract ensures that your job remains unique until it's processed, like a unicorn among mundane horses. 🦄

Here's how you can conjure up this spellbinding contract for your job:

```php
<?php

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Contracts\Queue\ShouldBeUniqueUntilProcessing;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    // ...
}
```

And just like that, your job is now more exclusive than a golden ticket to Willy Wonka's chocolate factory! 🍫🎉 Enjoy the enchanting world of Laravel queues, dear wizards!

 Alright, let's dive into the world of Laravel's unique job locks – it's like a digital bouncer for your queued tasks! 🤘 When you dispatch a `ShouldBeUnique` job, our system tries to grab a drink ticket (lock) with your unique ID as the name on it. If someone else already has that ticket in their hand, well, they're having all the fun and your task gets left at the bar!

But don't worry, this ticket gets returned when the party's over – either because the task has been successfully processed or because it's failed all its attempts to get lucky (or retry attempts, if you prefer a more technical term). By default, our bouncer uses the house's main cache driver to dish out these tickets, but you can change that by making a special request at the VIP booth (`uniqueVia` method).

```php
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Support\Facades\Cache;

class PartyAnimal implements ShouldQueue, ShouldBeUnique
{
    // ...

    /**
     * Ask the bouncer to use a different driver for the unique job lock.
     */
    public function uniqueVia(): Repository
    {
        return Cache::driver('redis');
    }
}
```

Now, just remember: if all you need is to limit the number of people dancing at the same time (concurrent processing), use our fancy [WithoutOverlapping](/docs/{{version}}/queues#preventing-job-overlaps) job middleware instead. It's like putting a velvet rope around your task, keeping things classy! 😎

 ### Crypto-Queuing Chicanery! 🔐🍿

Ahoy there, tech treasure hunters! Laravel's here to spice up your job data security game with its top-secret encryption technology. 😎🚀 To set sail on this clandestine voyage, just hoist the `ShouldBeEncrypted` flag on your job class ship. Once that pirate parchment is on board, Laravel will ensconce your job in a fortress of encryption before shoving it into the queue:

```php
<?php

* Drumroll *
Use the Force (or just these contracts)!

use Illuminate\Contracts\Queue\ShouldBeEncrypted;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateSearchIndex implements ShouldQueue, ShouldBeEncrypted
{
    // ...
}
```

<a name="job-middleware"></a>

**Navigate to the middleware section of our docs for more fun times with job encryption magic! 🤓🔮**

 Alright, strap in, folks! We're about to embark on a thrilling journey through the wild west of Laravel queue land, where jobs go to get their wrangling done by the mighty Job Middleware sheriff.

Job Middleware is your trusty sidekick that helps you tie custom logic around the ropin' and ridin' of queued jobs. Let's say you've got a job that needs to be as fast as a greased lightning but also follow the rules set by Laravel's Redis rate limiting, only letting one job process every five seconds like a cowboy sipping his coffee at the saloon bar. Here's what the original `handle` method looked like:

```php
use Illuminate\Support\Facades\Redis;

/**
 * The quickest draw in the west... or something like that.
 */
public function handle(): void
{
    Redis::throttle('key')->block(0)->allow(1)->every(5) // You'd think a cowboy would have a six-shooter, not a rate limiter!
        ->then(function () {
            info('Lock obtained...');

            // Handle job, partner!
        }, function () {
            // Dangnabbit, someone beat us to the punch!

            return $this->release(5);
        });
}
```

Now, isn't that code a mouthful? It's like trying to herd cats while juggling dynamite. But fear not, because we can wrangle that rate limiting logic into a Job Middleware corral:

```php
<?php

namespace App\Jobs\Middleware;

use Closure;
use Illuminate\Support\Facades\Redis;

class RateLimiterRodeo
{
    /**
     * Process the queued job.
     *
     * @param  \Closure(object): void  $next
     */
    public function handle(object $job, Closure $next): void
    {
        Redis::throttle('key')
            ->block(0)->allow(1)->every(5) // We're going to need a bigger corral!
            ->then(function () use ($job, $next) {
                // Lock obtained, cowboy, let's get this job done!

                $next($job);
            }, function () use ($job) {
                // Darn it, someone else got here first!

                $job->release(5);
            });
    }
}
```

Job Middleware works much like the [route middleware](/docs/{{version}}/middleware), receiving the job being processed and a callback that should continue processing the job. To create a new Job Middleware class, grab your lasso and ride on over to the Artisan command:

```bash
php artisan make:job-middleware RateLimiterRodeo
```

Once you've saddled up that middleware, you can attach it to a job by returnin' 'em from the job's `middleware` method. If your job ain't got no saddle yet, you'll need to add this method yourself:

```php
use App\Jobs\Middleware\RateLimiterRodeo;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [new RateLimiterRodeo];
}
```

And there you have it, cowboy! With Job Middleware, you can ensure your jobs are as fast as a coyote and as steady as a prairie dog's burrow. Just remember, with great power comes great responsibility – keep your jobs well-behaved, or the sheriff might just throw 'em in the hoosegow!

> [!NOTE]
> Job Middleware can also be assigned to [queueable event listeners](/docs/{{version}}/events#queued-event-listeners), [mailables](/docs/{{version}}/mail#queueing-mail), and [notifications](/docs/{{version}}/notifications#queueing-notifications).

 ### Rate Limiting: The Art of Restraint, Laravel Style! 😎

Alright, party people! You've just seen how to create your custom rate limiting job middleware, but let's face it - who has time for that when you can have Laravel do the heavy lifting for you? 🕺️

Just like route limiters, job limiters are defined using the `RateLimiter` facade's `for` method. It's like saying "Hey, Laravel, we need a new rate limiter called 'backups'. Make it hourly for regular folks and unlimited for our premium VIP customers!" 🏆

```php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

public function boot(): void
{
    RateLimiter::for('backups', function (object $job) {
        return $job->user->vipCustomer()
            ? Limit::none()
            : Limit::perHour(1)->by($job->user->id);
    });
}
```

In this example, we've created an hourly rate limit. But hey, if you want a minute-long rate limit, just swap `perHour` for `perMinute`. 🕒 And the `by($job->user->id)` part? That's where you can segment your rate limits by customer or any other unique identifier! 🌐

Once you've defined your rate limit, it's time to attach it to your job using the `Illuminate\Queue\Middleware\RateLimited` middleware. Whenever a job exceeds the rate limit, this middleware will put it back on the queue with an appropriate delay based on the rate limit duration. 🤪

```php
use Illuminate\Queue\Middleware\RateLimited;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [new RateLimited('backups')];
}
```

If a rate-limited job gets released back onto the queue, it will still increment its total number of attempts. You might want to tune your `Tries` and `MaxExceptions` attributes on your job class accordingly. Or, you can use the [retryUntil method](#time-based-attempts) to define the amount of time until the job should no longer be attempted. 🕰️

You can also specify the number of seconds that must elapse before a released job will be attempted again using the `releaseAfter` method:

```php
/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new RateLimited('backups'))->releaseAfter(60)];
}
```

If you don't want a job to be retried when it is rate-limited, you can use the `dontRelease` method:

```php
/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new RateLimited('backups'))->dontRelease()];
}
```

<a name="rate-limiting-with-redis"></a>
Now, if you're using Redis as your cache driver, you can store your rate limiting data in Redis for faster access! Just set up a connection to your Redis instance and let Laravel do the rest. 🤗

```php
use Illuminate\Support\Facades\Redis;

// In your .env file:
REDIS_CACHE_DRIVER=redis

// Set your Redis cache expiration time in minutes (in seconds)
config(['cache.stores.redis.expire'] = 60);
```

And that's a wrap! Now you can enjoy the party while Laravel keeps an eye on those rowdy backup jobs for you. 🎉🤖🚀

 #### Rockin' Rate Limiting with Redis, Baby! 🤘🌶️

Ready to unleash the power of Redis and transform your Laravel app into a lean, mean rate-limiting machine? Then buckle up, my friend! Here we go! 🚀

First off, you gotta get familiar with the `Illuminate\Queue\Middleware\RateLimitedWithRedis` middleware—it's like the cool kid on the block who knows their way around Redis and can help you achieve a more efficient rate limiting than your average Joe.

Here's how to incorporate it into your app:

```php
use Illuminate\Queue\Middleware\RateLimitedWithRedis;

public function middleware(): array
{
    return [new RateLimitedWithRedis('backups')]; // Yep, that's our new pal right there!
}
```

Now, say you want to use a specific Redis connection. No worries, my friend! The `connection` method has got your back:

```php
return [(new RateLimitedWithRedis('backups'))->connection('limiter')]; // 'Limiter' is our new connection's name—just roll with it!
```

Oh, and if you want to prevent job overlaps (because ain't nobody got time for that), don't forget to use the `queue()` method:

```php
return [(new RateLimitedWithRedis('backups'))->connection('limiter')->queue('backups')]; // Let's get this show on the road!
```

So, there you have it—a fun, friendly guide to rate limiting with Redis. Now go out there and make your app the life of the party! 🥳🎉

 Alright, buckle up, dear Laravel devs! Today we're diving into the world of job overlaps – a situation no one wants in their queue. Thankfully, our friendly neighborhood framework has got our back with the `WithoutOverlapping` middleware, an unsung hero that prevents your jobs from stepping on each other's toes (or credit scores, as we shall soon see).

Imagine you've got a queued job that updates a user's credit score – oh, the excitement! But wait, what if more than one job tries to update at the same time? Not cool, right? To ensure only one job gets the exclusive rights to your user's credit score, you can employ the `WithoutOverlapping` middleware.

Here's a simple example:

```php
use Illuminate\Queue\Middleware\WithoutOverlapping;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [new WithoutOverlapping($this->user->id)];
}
```

In case an overlapping job rears its head, it'll still be counted as attempting to do its thing (updating credit scores can be a persistent business). You might want to adjust your job class's `Tries` and `MaxExceptions` attributes accordingly. Leaving the number of attempts at 1 means no overlapping jobs will get another chance at it later.

Now, let's talk about job releases – but not the kind that make you feel better after a long day. You can specify the number of seconds that must pass before an overlapping job is attempted again:

```php
/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this->order->id))->releaseAfter(60)];
}
```

If you're tired of overlapping jobs and just want to nix them entirely, use the `dontRelease` method:

```php
/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this->order->id))->dontRelease()];
}
```

The `WithoutOverlapping` middleware relies on Laravel's atomic lock feature. Sometimes, a job may fail or time out in such a way that the lock isn't released. To avoid this situation, you can explicitly define a lock expiration time using the `expireAfter` method:

```php
/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this->order->id))->expireAfter(180)];
}
```

However, it's worth noting that the `WithoutOverlapping` middleware requires a cache driver that supports atomic locks. Luckily for us, the `memcached`, `redis`, `dynamodb`, `database`, `file`, and `array` cache drivers are equipped to handle these situations.

Happy queueing! 🥳🎉🎁🍾🎲 (But remember, keep it fun and friendly – no one likes a grumpy job in the queue!)

 Alright, let's dive into the zany world of Laravel job locking! 🎉🔒

#### Sharing Lock Keys like a Rockstar Across Job Classes

By nature, our friendly `WithoutOverlapping` middleware guard is a one-class wonder. It prevents the same class from having too many jobs at once, like a protective big brother. But fear not, you rebellious job classes wanting to share that sweet lock key love! 🤝🔐

To do this, Laravel's got your back with its charming `shared` method. Here comes the fun part:

```php
use Illuminate\Queue\Middleware\WithoutOverlapping;

class ProviderPartyStarter
{
    // ...

    public function middleware(): array
    {
        return [
            (new WithoutOverlapping("status:{$this->provider}"))->shareTheLove(), // You're welcome, job classes! 💘
        ];
    }
}

class ProviderChillZoneMonitor
{
    // ...

    public function middleware(): array
    {
        return [
            (new WithoutOverlapping("status:{$this->provider}"))->shareTheLove(), // Remember, sharing is caring! 🤗
        ];
    }
}
```

Now, your job classes can party like it's 1999 without stepping on each other's toes! Just make sure you use the `shareTheLove` method to unlock the power of shared lock keys. 💖🎉🎊

 Alrighty then! Let's talk about Laravel's built-in `ThrottlesExceptions` middleware, a superhero cape for your jobs when dealing with third-party services that are as reliable as a drunken sailor on shore leave.

Imagine you've got a queued job hankering to hang out with a finicky API buddy who loves chucking exceptions around like confetti at a wedding reception. Fear not! ThrottlesExceptions is here to save the day! You can invite it to your job's party by returning it from your job's `middleware` method, ensuring it teams up with a job that knows how to play nice with time-based attempts:

```php
use DateTime;
use Illuminate\Queue\Middleware\ThrottlesExceptions as Throttler;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [new Throttler(10, 5 * 60)];
}

/**
 * Determine when the job should time out.
 */
public function timeout(): int
{
    return 30 * 60;
}
```

In this scenario, if our API friend throws a pity party of 10 consecutive exceptions, we'll politely decline further invitations for 5 minutes (or until the 30-minute time-out, whichever comes first).

When an exception is tossed but we haven't yet reached the threshold for a good old-fashioned time-out, the job will usually be reinvited right away. However, you can make it wait a bit by calling the `backoff` method when adding Throttler to the guest list:

```php
use Illuminate\Queue\Middleware\ThrottlesExceptions as Throttler;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new Throttler(10, 5 * 60))->backoff(5)];
}
```

Internally, Throttler uses Laravel's cache system to implement a rate-limiting system, and the job's class name is used as the key. If you'd like to share a common throttling bucket among multiple jobs, you can override the key using the `by` method:

```php
use Illuminate\Queue\Middleware\ThrottlesExceptions as Throttler;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new Throttler(10, 10 * 60))->by('commonBucket')];
}
```

By default, Throttler throttles every exception. But if you'd like to be selective about which exceptions get the cold shoulder, you can use the `when` method:

```php
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Queue\Middleware\ThrottlesExceptions as Throttler;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new Throttler(10, 10 * 60))->when(
        fn (Throwable $throwable) => $throwable instanceof HttpClientException
    )];
}
```

Unlike the `when` method, which either re-queues or throws an exception, the `deleteWhen` method lets you delete the job entirely when a specific exception occurs:

```php
use App\Exceptions\CustomerDeletedException;
use Illuminate\Queue\Middleware\ThrottlesExceptions as Throttler;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new Throttler(2, 10 * 60))->deleteWhen(CustomerDeletedException::class)];
}
```

If you'd like to report throttled exceptions to your application's exception handler, simply use the `report` method:

```php
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Queue\Middleware\ThrottlesExceptions as Throttler;

/**
 * Get the middleware the job should pass through.
 *
 * @return array<int, object>
 */
public function middleware(): array
{
    return [(new Throttler(10, 10 * 60))->report(
        fn (Throwable $throwable) => $throwable instanceof HttpClientException
    )];
}
```

<a name="throttling-exceptions-with-redis"></a>
And if you're feeling extra fancy, you can even use Redis for caching instead of the default database cache. Just remember to install the Redis PHP extension first!

Happy coding, partner! 🎉

 Title: Laughing Off Errors with Redis in Laravel Land! 🥁🎉

Ahoy there, coder mates! Ever find yourself drowning in a sea of PHP errors like a digital Captain Ahab? Fear not, for the good folks at Laravel have devised a nifty tool to help you keep those pesky critters at bay - we're talkin' about ThrottlingExceptionsWithRedis! 🦄🚀

But first, let's make sure we're all on the same wavelength: If Redis is your cup of tea (or perhaps Red Bull), you can harness this fine-tuned and efficient exception throttling middleware. Ready to give it a whirl? Here's how!

```php
use Illuminate\Queue\Middleware\ThrottlesExceptionsWithRedis;

public function middleware(): array
{
    // Imagine the middleware as a friendly bouncer at your favorite code party,
    // making sure not too many guests (exceptions) come in and disturb the flow.
    return [new ThrottlesExceptionsWithRedis(10, 10 * 60)];
}
```

Now, you might be wondering, "Which Redis connection do I choose for this bouncer?" Worry not! You can specify it using the `connection` method.

```php
return [(new ThrottlesExceptionsWithRedis(10, 10 * 60))->connection('limiter')];
```

And just like that, your middleware bouncer will know where to keep the party going (and the exceptions at bay)! 🥳🎉

Remember, you can skip jobs if needed:

<a name="skipping-jobs"></a>

```php
// Sometimes, even the friendliest bouncer needs a break. Here's how to let them take one.
use Illuminate\Queue\InteractsWithQueue;

public function handle($request, Closure $next)
{
    if ($this->throttleShouldSkip()) {
        // Take a well-deserved break, bouncer!
        return;
    }

    // Party on, matey!
    return $next($request);
}
```

Now go forth and host exception-free code parties with ThrottlingExceptionsWithRedis by your side! 🎈🥳

 ### Jumping over Hurdles: The Job Skipping Middleware

Say goodbye to those pesky jobs that are hogging your queue! Enter the `Skip` middleware, your new best friend when you want to eliminate a job without messing with its logic. Simply put, if the condition is met (using either `Skip::when` or `Skip::unless`), the job will get the boot!

```php
use Illuminate\Queue\Middleware\Skip;

/**
 * Find out which middleware the job gets to play through.
 */
public function party_time(): array
{
    return [
        Skip::when($condition), // If condition is true, bye-bye job!
    ];
}
```

But wait, there's more! You can use a `Closure` with the `when` and `unless` methods for those complex conditional situations that would make even Sherlock Holmes break a sweat.

```php
use Illuminate\Queue\Middleware\Skip;

/**
 * Find out which middleware the job gets to play through.
 */
public function party_time(): array
{
    return [
        Skip::when(function (): bool {
            if ($this->shouldSkip()) // Complex condition logic goes here
                return true;
            else
                return false; // You can probably omit this, though. The job will stick around if it's not `true`.
        }),
    ];
}
```

Now that's a party you won't want to miss!

 ## Launching Missions, Er, Jobs!

Once you've crafted your job like a seasoned astronaut prepping for a space mission, it's time to blast off using the `dispatch` method on your job's rover. Whatever cosmic secrets you pass to this method will be securely stowed away in the job's rocket's cargo hold:

```php
<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessPodcast;
use App\Models\Podcast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
    /**
     * Stow a new podcast into the starship.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */); // Don't forget your emergency supplies!

        // ...

        ProcessPodcast::dispatch($podcast); // Countdown complete, we're launched!

        return redirect('/podcasts');
    }
}
```

If you want to make sure your mission only launches under certain conditions (like when the weather is perfect or when the account is active), you can use the `dispatchIf` and `dispatchUnless` methods:

```php
if ($accountActive) {
    ProcessPodcast::dispatch($podcast); // Ready for takeoff!
}

if (!$accountSuspended) {
    ProcessPodcast::dispatch($podcast); // Even if the account's grounded, the podcast must go on!
}
```

In brand new Laravel galaxies, the `database` connection is set as the default queue. However, if you'd like to switch to a different default queue connection (like switching from a rocket to a shuttle), adjust the `QUEUE_CONNECTION` environment variable in your application's `.env` file.

<a name="delayed-dispatching"></a>
Now, let's talk about delayed dispatching - it's like scheduling a space mission for a later date! Instead of launching immediately, you can delay the execution using the `later` method:

```php
ProcessPodcast::later(carbon instance)->dispatch($podcast); // Set your alarm for that time!
```

Or, if you'd like to execute the mission after a certain number of minutes, use the `queueable` trait's `delay` method:

```php
public function handle()
{
    $this->delay(5); // Wait 5 minutes before processing the podcast
}
```

 ### Time Travel with Jobs: Delayed Dispatching for the Super Patient

If you've ever found yourself in a situation where you wanted to keep a job hidden from your overzealous queue worker until it was absolutely time to party (process), you might want to consider using our magical `delay` method! Let's say you've got a podcast that just can't be handled now, but you know it'll be ready for its close-up in exactly 10 minutes. No worries, we've got you covered:

```php
<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessPodcast;
use App\Models\Podcast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // ...

        // We've got a time-traveling job on our hands! Dispatch it 10 minutes into the future.
        ProcessPodcast::dispatch($podcast)
            ->delay(now()->addMinutes(10));

        return redirect('/podcasts');
    }
}
```

Sometimes, jobs might already have a built-in delay waiting to pounce on them (like a cat with a laser pointer). If you're feeling impatient and just can't wait for the job to be delayed anymore, you can use the `withoutDelay` method to force it into immediate action:

```php
ProcessPodcast::dispatch($podcast)->withoutDelay();
```

> [!ATTENTION]
> Our Amazon SQS queue service isn't quite as flexible as Doc Brown's DeLorean. It has a maximum delay time of only 15 minutes, so keep that in mind when you're planning your time-traveling endeavors.

<a name="synchronous-dispatching"></a>

Oh, and if you ever want to dispatch jobs the old-fashioned way (without any fancy time travel), we've got a method for that too! Check out Synchronous Dispatching in our Time Machine Manual (just kidding—it's really the Laravel documentation).

 ### Lightning-Fast Job Execution: Synchronous Dispatching!

Are you the type who can't wait for their jobs to finish? Fear not, my techno-companion! Laravel has a superpower for you - Synchronous Dispatching!

Just imagine, no more waiting around for your jobs to magically appear in the queue. Instead, they'll leapfrog right into action, immediately (synchronously), within the very process that birthed them! It's like a one-man band that doesn't need time signatures or rest breaks!

```php
<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessPodcast;
use App\Models\Podcast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // Create podcast...

        // Instead of waiting for the job to be queued and executed later,
        // unleash it immediately with this wild command!
        ProcessPodcast::dispatchSync($podcast);

        return redirect('/podcasts');
    }
}
```

In essence, we're calling upon our trusty `ProcessPodcast` job, binding it to the freshly-minted podcast and zapping it with electricity straightaway! The only thing left to do is sit back, relax, and marvel at how quickly your code moves!

 Alright, buckle up, folks! Let's dive into the world of deferred dispatching in Laravel, where jobs get a party invite but RSVP later than your eccentric aunt Mildred.

So, you've got this job that needs to be done, but you don't want it crashing your user's application experience faster than a Kardashian reality show. Enter deferred synchronous dispatching! It's like asking your helpful neighbor to mow the lawn after you've already invited them over for dinner – they'll still do their chores, but won't interrupt your tasty appetizers.

To make a job play this role, dispatch it to the `deferred` connection:

```php
RecordDelivery::dispatch($order)->onConnection('deferred');
```

Now, the `deferred` connection isn't just a polite guest; it also serves as the default [failover queue](#queue-failover), because if one job can't handle its drink at the party, someone else will happily step in.

If you want to take things up a notch and make your PHP-FPM / application worker more of a social butterfly, you can opt for the `background` connection:

```php
RecordDelivery::dispatch($order)->onConnection('background');
```

Here, jobs are processed in a separately spawned PHP process, ensuring that your helpful host can handle another incoming HTTP request while the party goes on. Just like how you manage to keep chatting with both your boring cousin and the interesting newcomer at the same time!

 ### Oh, the joys of juggling jobs and databases! 🤹‍♂️🥳

In Laravel land, it's all fun and games until someone tries to dispatch a job within a database transaction. Now don't get me wrong, it's not like we're asking you to perform a three-point shot while juggling flaming swords 🔥🏀, but there are some considerations.

If your job gets processed by a worker before the parent transaction has committed, any updates you made to models or database records during the transaction may not be... shall we say, 'officially' recorded yet 🤷‍♂️📜. To add a touch of chaos, any models or database records created within the transaction may not even exist in the database! 😱🔍

But fear not, my friend, for Laravel has equipped us with some nifty tools to navigate this tricky situation. First up is setting the `after_commit` connection option in your queue connection's configuration array:

```php
'redis' => [
    'driver' => 'redis',
    // ...
    'after_commit' => true,
],
```

When you set `after_commit` to `true`, you can dispatch jobs within a transaction, but remember, Laravel won't actually send the job into the universe of queues until all open parent database transactions have been... *committed* 📄✅. If no transactions are currently in progress, the job will be dispatched immediately, as if it were waiting for its cue in a Broadway play 🎭🕛.

However, if a transaction is rolled back due to an exception, those jobs dispatched during that transaction will be gently placed on the 'discard pile' (or something like that) 🗑️🎯.

> [!NOTE]
> Setting the `after_commit` configuration option to `true` will also cause any queued event listeners, mailables, notifications, and broadcast events to be dispatched after all open database transactions have been committed. Just think of it as a grand finale for your database shenanigans 🎉🎇!

 Alright, buckle up! We're diving into the world of Laravel where transactions aren't just about your bank account but your database too! 💳🤑

First things first: If you don't set the `after_commit` queue connection config to `true`, fear not! You can still ensure that a specific job will be dispatched after all open database transactions have taken their vows and sealed the deal. How, you ask? By chaining the `afterCommit` method onto your dispatch operation, just like linking up with the cool kids at a high school dance!

```php
use App\Jobs\ProcessPodcast;

ProcessPodcast::dispatch($podcast) -> takes a walk down the aisle -> afterCommit();
```

But what if `after_commit` is set to `true`, and you want to dispatch a job right away, without even waiting for that slowpoke database transaction to find its wedding ring? Fret not! Just chain the `beforeCommit` method onto your dispatch operation. This one's like asking a kid at the school dance to go steady – no need to wait for the wedding bells!

```php
ProcessPodcast::dispatch($podcast) -> asks for permission -> beforeCommit();
```

Now, that was a quick spin around the database-transaction dance floor! Keep up the good work, and remember: In Laravel, it's always all about who gets to the commit first! 💃🕺️🎉

 Alrighty, buckle up, because we're about to dive into the thrilling world of Laravel's Job Chaining!

Imagine you've got a podcast production line, and each job (OptimizePodcast, ProcessPodcast, ReleasePodcast) is a different station on that line. When one podcast starts its journey at Station A (primary job), it doesn't just magically end after Station B. No sir! It keeps moving to Station C unless something goes terribly wrong at Station B. That's what we call Job Chaining!

```php
use App\Jobs\OptimizePodcast;
use App\Jobs\ProcessPodcast;
use App\Jobs\ReleasePodcast;
use Illuminate\Support\Facades\Bus;

// Invite the Bus to our party and ask it to chain our jobs like a boss!
Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])->dispatch();
```

But wait, there's more! You can even add your own custom stops (closures) to the chain:

```php
Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    function () {
        Podcast::update(/* ... */); // Update the podcast with some secret sauce!
    },
])->dispatch();
```

Now, let's address the elephant in the room. What if one of our stations explodes (job fails)? Well, we don't want the entire production line shutting down, do we? So, only the station that exploded will be cleaned up while the rest of the line keeps chugging along!

Just remember, deleting jobs within a job won't stop the chain. It's like telling the janitor to clean only one messy station and let the rest of the podcast production line go on uninterrupted!

And there you have it! Job Chaining in Laravel—a fun, efficient way to make your podcast production pipeline as smooth as butter! Happy coding, folks!

 Alrighty then! Let's dive into the captivating world of Laravel job chaining and queues, shall we?

Imagine you're throwing a massive podcast party, and you've got three rockstar tasks to handle: ProcessPodcast, OptimizePodcast, and ReleasePodcast. But instead of doing these tasks one by one, we'll chain 'em like a pro!

```php
Now, gather your crew for this extravaganza:
Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])->onConnection('redis')->onQueue('podcasts')->dispatch();
```

But wait! You want to ensure that these tasks are handled by your trusty sidekick, Redis, and take place in the 'podcasts' queue. No problemo, amigo! Just add `onConnection` and `onQueue` to specify the connection and queue for your chained jobs.

These methods set Redis as your connection and the 'podcasts' queue as your playground, unless a particular job has been explicitly assigned a different setup:

```php
Unless they've got a secret party invite, point them all to Redis and the 'podcasts' queue:
Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])->onConnection('redis')->onQueue('podcasts')->dispatch();
```

And there you have it! A fun and efficient way to chain your jobs using Laravel's powerful queue system. Now, get out there and rock those podcast parties like a boss!

 Alrighty, let's talk Laravel jobs – the unsung heroes that make your application as smooth and sassy as a well-oiled dance troupe! Sometimes, you might find yourself in a situation where you need to shake things up a bit within an existing job chain. Fear not, my friend, for we have just the moves to add some spice!

Now, if you want to kick off the party before the current job even gets its groove on, go ahead and prepend some fun with `prependToChain`. Think of it as inviting a guest to join the dancefloor right before your star performer takes center stage. Here's how you can do it:

```php
/**
 * Strut your stuff on stage (job-wise)
 */
public function handle(): void
{
    // ...

    // Invite TranscribePodcast to join the party right after our current dancer...
    $this->prependToChain(new TranscribePodcast);
}
```

On the other hand, if you'd rather save your new addition for the grand finale, the `appendToChain` method is your best bet. Think of it as that epic dance number that brings the house down at the end of the show. Here's how to use it:

```php
/**
 * Show off on stage (job-wise)
 */
public function handle(): void
{
    // ...

    // Invite TranscribePodcast to take a bow at the very end...
    $this->appendToChain(new TranscribePodcast);
}
```

Just remember, these moves are best executed with caution – if a job fails in the chain, Laravel will not proceed to the next one. So, don't be that guy who keeps asking people to join the dance after the music has stopped!

 Alrighty then! Let's dive into the hilarious world of Laravel job chaining, shall we? 🎶🕺️

#### The Chains that Don't Always Link Up Nicely

When you're linking tasks like a modern-day MacGyver, you can employ the `catch` function to designate a sassy one-liner (a.k.a closure) that gets triggered if one of your tasks within the chain stumbles. The party pooper callback receives the `Throwable` instance that brought down the house—err, job:

```php
use Illuminate\Support\Facades\Bus;
use Throwable;

Bus::chain([
    new ProcessPodcast(),
    new OptimizePodcast(),
    new ReleasePodcast()
])->catch(function (Throwable $e) {
    // One of the jobs in the chain has tripped over its shoelaces...
})->dispatch();
```

> [!ATTENTION]
> Since our party-crashing callbacks are time-travelers, thanks to Laravel's queuing magic, you should refrain from using the `$this` variable when you're all decked out in your time-crashin' finery.

<a name="customizing-the-queue-and-connection"></a>
Oh, and don't forget to customize your queue and connection like a boss! 😎🎶

Hope you found this Laravel adventure educational—and maybe a smidgen entertaining too! 😜🎉

 Ahoy there, coding pirates! If you've found yourself in a pickle with Laravel's queue system, fear not! We're about to swab the deck and set sail on a customizable adventure.

<a name="dispatching-to-a-particular-queue"></a>

#### Dispatching to a Particular Queue

Sometimes you find yourself with more tasks than hands, right? Well, Laravel's got your back with its queue system! But what if you want to prioritize some tasks over others? Easy peasy, matey! You can dispatch jobs directly to specific queues. Just use the `queue()` method on your job when dispatching:

```php
use App\Jobs\YourJob;

// Dispatch the job to the high priority queue "high"
Dispatch::async(function () {
    YourJob::dispatch('high');
});
```

In this example, our pal `YourJob` is being dispatched to the "high" priority queue. Adjust the queue name to suit your needs and priorities (or whimsy, if that's more your style!).

Happy queuing! 🤘🏼

 Ahoy there, Laravel sailors! If you've ever found yourself drowning in a sea of tasks and wanted to sort 'em like a well-organized pirate, then buckle up, because we're about to show you how to queue your jobs like a pro!

By pushing jobs into different queues, you can categorize your queued tasks and even prioritize the number of deckhands (workers) assigned to each category. It's important to note that this doesn't ship jobs to different queue "harbors" as defined by your configuration file, but rather to specific queues within a single harbor. To specify the queue, you can use the `onQueue` method when dispatching the job, like so:

```php
<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessPodcast;
use App\Models\Podcast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // Create podcast...

        ProcessPodcast::dispatch($podcast)->onQueue('processing');

        return redirect('/podcasts');
    }
}
```

Alternatively, you may specify the job's queue by calling the `onQueue` method within the job's constructor:

```php
<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProcessPodcast implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        $this->onQueue('processing');
    }
}
```

Now, sit back and relax while Laravel takes care of doling out tasks to the right pirates (workers)!

 Alright, let's dive into the whimsical world of Laravel queues! 🌞️

In a typical scenario, your app might be juggling multiple queue connections like a circus performer with too many balls. But fear not! With the `onConnection` method, you can skillfully toss jobs to specific ringmasters (connections). 🎭

```php
<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessPodcast;
use App\Models\Podcast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // Create podcast...

        // Instead of shouting jobs across the room, we politely hand them to SQS (the cool kid in the corner)
        ProcessPodcast::dispatch($podcast)->onConnection('sqs');

        return redirect('/podcasts');
    }
}
```

You can even combine connections and queues with the grace of a ballroom dancer, thanks to the `onQueue` method! 🕺️

```php
ProcessPodcast::dispatch($podcast)
    ->onConnection('sqs')
    ->onQueue('processing');
```

Or if you're feeling particularly bossy, you can command jobs to always report for duty with a specific connection by calling the `onConnection` method within their constructor. ine

```php
<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProcessPodcast implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        // SQS is the only connection this podcast job will ever work with (it's not very social)
        $this->onConnection('sqs');
    }
}
```

Now, go forth and manage your queues like a circus ringmaster, orchestrating tasks with style and flair! 🎉🎪️

 Alright, buckle up! Let's dive into the fascinating world of Laravel Queue Routing, where jobs get their own VIP passes to specific queues without having to flash their connection IDs at the bouncer.

First off, you can use the `Queue` facade's `route` method like a secret handshake that ensures certain jobs always party in specific queues, no matter how forgetful they are about specifying connections or queues on themselves.

Want to expand your clique? You can pass an interface, trait, or parent class to the `route` method. Any job that's part of that crowd will automatically find themselves at the configured queue without having to RSVP individually.

Most of the time, you should initiate this secret handshake during the `boot` method of a service provider:

```php
use App\Concerns\RequiresVideo;
use App\Jobs\ProcessPodcast;
use App\Jobs\ProcessVideo;
use Illuminate\Support\Facades\Queue;

// Party's about to start!
public function boot(): void
{
    // Let the Podcast crew know it's at the Redis pod every time
    Queue::route(ProcessPodcast::class, connection: 'redis', queue: 'podcasts');

    // The Video gang gets its own queue (defaults to default connection)
    Queue::route(RequiresVideo::class, queue: 'video');
}
```

If you only specify a connection without a queue, the job will be directed to the default queue:

```php
Queue::route(ProcessPodcast::class, connection: 'redis');
```

Ready for a group hug? You can route multiple jobs classes at once by passing an array to the `route` method:

```php
Queue::route([
    ProcessPodcast::class => ['podcasts', 'redis'], // Queue and connection
    ProcessVideo::class => 'videos', // Queue only (defaults to default connection)
]);
```

> [!ATTENTION]
> Just a heads up, queue routing can still be overridden by a job on a per-job basis. So remember, every job is its own unique snowflake with the power to decide its own queue destiny.

<a name="max-job-attempts-and-timeout"></a>
Now that we've got the party started, let's talk about setting max attempts and timeouts for jobs! But you know what they say – no party lasts forever, right?

 Ahoy, Captain! Here be the treasure map to setting max job attempts and timeouts in Laravel's queue system, ye landlubber!

<br>

#### Max Attempts 🔓 (Unlocking Job Persistence)

Got a stubborn job that refuses to play ball? Fear not! With Laravel's max attempts feature, ye can force it into submission, like a rebellious parrot learnin' to talk.

To set the number of times a job should be retried before considerin' it dead weight, simply adjust the `$tries` property on yer job class.

```php
namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class MyJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $tries = 5; // Set your desired maximum number of tries here.

    public function handle()
    {
        // Your job logic goes here...
    }
}
```

Remember to set a reasonable limit for `$tries`, as an endless loop could lead to a mutiny on yer ship!

<br>

#### Timeout ⏲️ (Setting Job Execution Limits)

Ever had a job that takes longer than Jack Sparrow's drunken sea shanty? Fret not, me hearties! With Laravel's timeout feature, ye can set a time limit for yer jobs, so they don't keep ye waitin' forever.

To set the maximum amount of time a job should run before it gets cut off, adjust the `$timeout` property in your job class.

```php
namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class MyJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $timeout = 120; // Set your desired timeout in seconds.

    public function handle()
    {
        // Your job logic goes here...
    }
}
```

Keep in mind that setting a too-short timeout could result in jobs being cut off prematurely, leaving some tasks undone and crew members grumbling about unfinished business. So set the timeout wisely, like choosing a good rum for yer grog! 🍹

 Alright, let's dive into the whimsical world of Laravel's queue system! Job attempts are the lifeblood that powers many advanced features - think of them as the drummer keeping a steady beat for your symphony of code. But at first glance, they can be as enigmatic as a gnome playing the kazoo in a dark forest.

When you dispatch a job (imagine sending a letter via pigeon), it's dropped into the queue (a rather fancy mailbox). A worker then picks it up and tries to execute it (opens the letter, reads it out loud). This is known as a job attempt.

But an attempt doesn't always mean the `handle` method was executed (the gnome might have dozed off mid-kazoo solo). Attempts can also "evaporate" in several ways:

1. The job throws a hissy fit and tosses itself out of the window (unhandled exception during execution).
2. The job decides it'd rather be sipping tea than doing its job, so it asks to be returned to the queue using `$this->release()` (self-imposed exile).
3. Middleware like `WithoutOverlapping` or `RateLimited`, feeling a bit possessive, fail to lock the job down and let it go (relationship drama).
4. The job times out (it's been on hold at customer service for too long).
5. The job successfully executes its `handle` method without throwing an exception (the gnome finally finished his kazoo solo).

Now, you probably don't want the gnome banging away at the same tune indefinitely. So Laravel offers various ways to set the limits on how many times or for how long a job may be attempted.

> [!NOTE]
> By default, Laravel only gives the gnome one chance to play his kazoo solo. If your job uses middleware like `WithoutOverlapping` or `RateLimited`, or if you're manually releasing jobs, you'll need to bump up the number of allowed attempts via the `tries` option.

One way to specify the maximum number of times a job may be attempted is by using the `--tries` switch on the Artisan command line (think of it as buying more tickets for the gnome to play). This will apply to all jobs unless the specific job specifies its own limits:

```shell
php artisan queue:work --tries=3
```

If the gnome plays his kazoo solo too many times, it'll be considered a "failed" performance. For more info on handling failed performances, consult the [failed job documentation](#dealing-with-failed-jobs). If `--tries=0` is provided to the `queue:work` command, the gnome will keep playing until the end of time (or until someone stops him).

For more granular control over a particular job's maximum attempts, you can define the limits on the job class itself using the `Tries` attribute. If limits are specified on the job, they'll take precedence over the `--tries` value provided on the command line:

```php
<?php

namespace App\Jobs;

use Illuminate\Queue\Attributes\Tries;

#[Tries(5)]
class ProcessPodcast implements ShouldQueue
{
    // ...
}
```

If you need dynamic control over a particular job's maximum attempts, you can define a `tries` method on the job:

```php
/**
 * Determine number of times the job may be attempted.
 */
public function tries(): int
{
    return 5;
}
```

<a name="time-based-attempts"></a>
Now, let's talk about time-based attempts! If you want to set a specific amount of time for the gnome to play his kazoo solo (say, 10 minutes), you can use the `--timeout` switch on the Artisan command line:

```shell
php artisan queue:work --tries=3 --timeout=600
```

This will give the gnome 3 chances to play his kazoo solo, and each attempt will last for up to 10 minutes. Happy queuing!

 Alrighty, here's a fun twist on Laravel's Time Based Attempts docs! 🕒🎉

#### Temporal Temp Job Trials

Fed up of setting exact job attempt limits? Well, we've got your back! Instead, you can specify a point in time after which the job should call it quits (pun intended). This allows your job to take as many swings as it needs within a set time frame. To set the final time for your job's boxing match, chuck a `retryUntil` method into your job class ring. The method will spar back a `DateTime` champ:

```php
use DateTime;

/**
 * Find out when the job should hang up its gloves.
 */
public function retryUntil(): DateTime
{
    return now()->addMinutes(10); // Job's got 10 minutes to prove itself, no pressure! 🥊
}
```

In case you've tag-teamed both `retryUntil` and `tries`, Laravel will give `retryUntil` the heavyweight belt.

> [!ATTENTION]
> You can also define a `Tries` attribute or `retryUntil` method for your [queued event listenin' party animals](/docs/{{version}}/events#queued-event-listeners) and [queued notification hype squads](/docs/{{version}}/notifications#queueing-notifications).

<a name="max-exceptions"></a>
(Don't worry, we won't start calling you "Float like a butterfly sting like a bee" just yet 😉)

 Alright, buckle up, my dear programmer pals! We're about to dive into a world of queueing madness where even failures have their own VIP section – we're talking about Laravel's Max Exceptions feature!

Imagine you're hosting the world's most chaotic podcast party, and instead of just kicking out guests causing trouble, you'd rather let them hang around but kick them out if they cause too much ruckus. That's exactly what we're doing here!

To set up this ultimate podcast chaos, you can decorate your job class with the `Tries` and `MaxExceptions` attributes, like so:

```php
<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\Attributes\MaxExceptions;
use Illuminate\Queue\Attributes\Tries;
use Illuminate\Support\Facades\Redis;

// WHOA! Here comes our podcast party enforcer...
#[Tries(25)] // Yup, we're inviting 25 troublemakers over
#[MaxExceptions(3)] // But if any of them throw a tantrum three times, it's OUTTA here!
class ProcessPodcast implements ShouldQueue
{
    use Queueable;

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // We've got ourselves a Redis lock – let's get this party started!
        Redis::throttle('key')->allow(10)->every(60)->then(function () {
            // Party time, y'all! Process the podcast...
        }, function () {
            // Oh no! Unable to secure the Redis lock. We'll let them try again in 10 seconds.
            return $this->release(10);
        });
    }
}
```

In this hilarious scenario, if the application cannot get a Redis lock, it'll release the job for ten seconds and continue to invite our podcast party guests (up to 25 times). But watch out! If any guest throws three unhandled exceptions during their chaotic antics, they're getting the boot!

So there you have it – Laravel's Max Exceptions: because sometimes even in a queue, you need a bouncer to handle rowdy guests! 🎉🎊🎉

 Alrighty, let's dive into the world of Laravel timeouts! You know when your significant other says "I'll be just a minute" and you find yourself wondering if they've been sucked into a black hole? Well, that's sort of like a queued job gone wild in Laravel. To prevent this cosmic event, we got us some timeout settings!

By default, our jobs are given 60 seconds to do their thing before they're politely escorted out by an error. But if you know your jobs are more like Schrödinger's cat (taking forever or happening instantly), you can adjust the timeout value to suit your needs!

```shell
php artisan queue:work --timeout=30
```

Now, if a job overstays its welcome by more than 30 seconds, it'll be given the boot and marked as failed. But don't worry, our servers are like doting parents who'll automatically restart the worker for another go-round.

If you'd rather not rely on command-line timeouts, you can set a job-specific timeout using the `Timeout` attribute in your job class:

```php
<?php

namespace App\Jobs;

use Illuminate\Queue\Attributes\Timeout;

#[Timeout(120)]
class ProcessPodcast implements ShouldQueue
{
    // ...
}
```

But beware! IO-blocking processes such as sockets or outgoing HTTP connections might not play by the rules, so don't forget to set timeouts in their respective APIs too. For instance, when using Guzzle, always remember to specify connection and request timeout values!

> [!ATTENTION]
> To adjust job timeouts, you'll need the PCNTL PHP extension installed on your server. And it's crucial that a job's "timeout" value is always less than its ["retry after"](#job-expiration) value. Otherwise, the job may be re-attempted before it has even had time to finish executing or timeout!

 Alright, let's get this party started! If you're tired of jobs overstaying their welcome and hogging the spotlight, it's time to pull out the eject button – the `FailOnTimeout` attribute, that is!

```php
<?php

namespace App\Jobs;

use Illuminate\Queue\Attributes\FailOnTimeout;

#[FailOnTimeout]
class ProcessPodcast implements ShouldQueue
{
    // ...
}
```

Just slap this badge on your job class, and our system will be like, "Enough already! Time's up!" No more second chances for jobs that run longer than a Kardashian marriage.

<a name="sqs-fifo-and-fair-queues"></a>

By default, when a job gets caught in the time warp of "I'll be right back," it takes one for the team and consumes an attempt before being re-released to the queue (if retries are allowed). But if you set your job to fail on timeout, it's not coming back – no matter how many times you've told it to try again. It's like when your friend keeps asking you to play Just Dance, but you've got better things to do, so you politely decline (and never invite them over for game night ever again).

 ### SQS FIFO and the Great Queue Race! 🚀🏁

Welcome to Laravel's thrilling race track, where we support Amazon's SQS FIFO (First-In-First-Out) queues! These aren't your average run-of-the-mill queues. They are the marathon runners of data processing, ensuring that jobs are processed in the exact order they were sent and maintaining the integrity of each task with their exactly-once processing magic! 🏅

But what's a race without some friendly competition? That's where message group IDs come into play. By assigning unique group IDs, you can determine which jobs can run together in a relay (parallel processing) or have to stick together like glue (sequential processing). Jobs with the same group ID are like a well-oiled machine working seamlessly, while those with different IDs can race ahead at their own pace.

To set a message group ID when dispatching jobs, we've got you covered with a fluent `onGroup` method:

```php
DispatchProcessOrder::withOrder($order)
    ->onGroup("customer-" . $order->customer_id);
```

Now that we've set up the race track, let's make sure there are no photo finishes! SQS FIFO queues offer message deduplication to guarantee exactly-once processing. By implementing a `deduplicationId` method in your job class, you can provide a custom deduplication ID:

```php
<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProcessSubscriptionRenewal implements ShouldQueue
{
    use Queueable;

    // ...

    /**
     * Get the job's deduplication ID.
     */
    public function deduplicationId(): string
    {
        return "renewal-" . $this->subscription->id;
    }
}
```

Now, get ready for the start of the race! Let's queue those jobs and watch them finish in order with no ties or disputes! 🎉🏁🚀

 Alright, buckle up, folks! It's time to dive into the thrilling world of FIFO Listeners, Mail, and Notifications – Laravel's very own circus of data distribution!

When you're playing with FIFO queues (think clown cars), you've got to organize your acts (message groups) backstage. To do this for your [queued event listener](/docs/{{version}}/events#queued-event-listeners), just throw a `messageGroup` method into the ring and, if you fancy, an optional `deduplicationId` method as well:

```php
<?php

namespace App\Listeners;

class ShipmentShowtime
{
    // ...

    /**
     * Get the job's message group.
     */
    public function messageGroup(): string
    {
        return 'shipments';
    }

    /**
     * Get the job's unique circus ticket.
     */
    public function deduplicationId(): string
    {
        return "shipment-notification-{$this->shipment->id}";
    }
}
```

Now, for our main act – sending a [mail message](/docs/{{version}}/mail) that's about to take a spin on the FIFO queue, you should call the `onGroup` method and, if you're feeling lucky, the `withDeduplicator` method when launching the notification:

```php
use App\Mail\InvoicePaid;
use Illuminate\Support\Facades\Mail;

$invoicePaidClown = (new InvoicePaid($invoice))
    ->onGroup('invoices')
    ->withDeduplicator(fn () => 'invoices-'.$invoice->id);

Mail::to($request->user())->send($invoicePaidClown);
```

Last but not least, when it's time for the [notification](/docs/{{version}}/notifications) to take center stage and join the FIFO queue, you should summon the `onGroup` method and, if you're feeling fancy, the `withDeduplicator` method as well:

```php
use App\Notifications\InvoicePaid;

$invoicePaidPerformer = (new InvoicePaid($invoice))
    ->onGroup('invoices')
    ->withDeduplicator(fn () => 'invoices-'.$invoice->id);

$user->notify($invoicePaidPerformer);
```

And there you have it! FIFO Listeners, Mail, and Notifications – now everyone can enjoy a seamless, well-organized, and entertaining Laravel data experience!

 ### Queue Magic 8-Ball

Who needs a crystal ball when you've got the `failover` queue driver? This magical unicorn of a feature ensures that your jobs find a new home if the primary one disappears faster than Houdini in a straitjacket. If the primary connection for your `failover` configuration vanishes (poof!) due to any reason, Laravel will do a double-take, shrug its shoulders, and try to push that job to the next magical connection on the list. Perfect for those high-stakes production environments where queue dependability is as important as the secret recipe for Big Mac sauce.

To conjure up a failover queue connection, wave your wand (ahem, code editor) and cast the `failover` driver spell, accompanied by an array of connection names in order to attempt. Your application's `config/queue.php` configuration file already comes with a pre-prepared example for this incantation:

```php
'failover' => [
    'driver' => 'failover',
    'connections' => [
        'redis',
        'database',
        'sync',
    ],
],
```

Once you've prepared a connection that dances the `failover` driver, you'll need to set the failover connection as your default queue connection in your application's `.env` file to activate its mystical powers:

```ini
QUEUE_CONNECTION=failover
```

Next, summon at least one worker for each connection in your failover connection list. Remember, you can't just whisper it into existence—you gotta type it out loud (well, in terminal):

```bash
php artisan queue:work redis
php artisan queue:work database
```

> [!NOTE]
> No need to summon workers for connections using the `sync`, `background`, or `deferred` drivers. Those are the easy-to-please ghosts that haunt your PHP process instead of a separate queue.

When a queue connection operation crashes and the failover is activated, Laravel will cast the `Illuminate\Queue\Events\QueueFailedOver` event, allowing you to conjure up reports or logs about a failed connection (because as magicians, we love documentation).

> [!NOTE]
> If you're working with Laravel Horizon, remember that it only manages Redis queues. So if your failover list includes `database`, be sure to run a regular `php artisan queue:work database` process alongside Horizon.

<a name="error-handling"></a>
Now, when a job fails to materialize like a ghost at a séance, the `failover` driver will shrug its shoulders, say "better luck next time," and send it to the next connection in line—all without you having to lift a finger (or wave a wand).

 ### Error Whispering (or: How to Make Your Jobs Laugh, Cry, and Try Again)

Ah, the joy of programming! Where bugs dance in the moonlight, errors pop champagne bottles, and jobs... well, they get sent back on a queue for a little more action. Let's dive into this circus of errors we call Laravel Error Handling!

When an exception raises its wand during your job's performance, don't worry—it's not getting the boot just yet! Instead, it gets an all-access pass to the queue for another chance at success. This goes on until it's either found its destiny or reached the maximum number of attempts set by your application.

The maximum number of attempts is like a magic wand, casting spells with the `--tries` switch in the `queue:work` Artisan command. But if you want to be more precise with your enchantment, you can define the number of tries right on the job class itself (because no one said error-prone jobs should be sloppy).

Now, if you're feeling particularly hands-on and want to give a job another spin without waiting for its automatic release, we've got a trick up our sleeve: manually releasing a job! [Just follow the steps below](#manually-releasing-a-job) (but only if you dare!) 😉

[Running the queue worker can be found in greater detail here](#running-the-queue-worker). And remember, with great power comes great responsibility—or in our case, with great jobs comes great error handling!

 Ahoy there, Laravel explorers! Ever found yourself in a pickle with a job gone awry and needing a do-over? Well, buckle up, because we're about to introduce you to the `release` method – your new best friend when things go sideways!

Let's dive right in. Imagine you've got a job, and it's misbehaving like a mischievous monkey on caffeine. Instead of pulling out all your hair (or what little is left after dealing with PHP), simply unleash the `release` method to send that pesky job back onto the queue for another round:

```php
// This job just can't seem to behave! Time for a timeout and a comeback!
public function handle(): void
{
    // ...

    $this->release(); // That's right, we said release!
}
```

Now, by default, this dashing method will release the job onto the queue for immediate processing – like a cat chasing after a laser pointer. But sometimes, you need more control, so you can instruct the queue to delay the job's availability with a bit of a time-out:

```php
// Give me a 10-second timeout before this rowdy job gets another chance!
$this->release(10);

// Make it wait for exactly 10 seconds from now...
$this->release(now()->plus(seconds: 10));
```

And just like that, you're well on your way to managing jobs in Laravel with style, grace, and a touch of humor! So go forth and conquer those errant jobs – remember, a stitch in time saves nine (and a well-timed release can save you from a headache)! 😉

 Ahoy there, intrepid Laravel wranglers! Sometimes, even our trusty PHP jobs might face a spot of bother and need to be marked as "shiver me timbers, failed!" You can accomplish this pirate-ly magic by summoning the mystical `fail` method:

```php
/**
 * Arrgh, ye scurvy dogs! Execute the job.
 */
public function handle(): void
{
    // ... Swabbing the decks and walking the plank...

    $this->fail(); // Arr, mark it as failed, yarr!
}
```

In the event that ye job has run afoul of a nefarious exception, ye can pass it to the `fail` method like so:

```php
$this->fail($exception); // Pass it on, me hearty!
```

For extra convenience, ye may instead pass a string error message which shall be transformed into an exception by our trusty ship's bosun (the Laravel job queue):

```php
$this->fail('Something went wrong.'); // Arrrgh, send that message to the bosun!
```

[!NOTE]
Remember to read up on [how to handle failed jobs like a seasoned sea dog](#dealing-with-failed-jobs) for further nautical adventures in job management. Ye be needing it to navigate the choppy waters of Laravel job processing with ease and grace!

 Alright, let's embark on a jolly journey into the world of Laravel's job handling! 🎠🎉

#### The Magic Carousel of Job Failures (on Specific Exceptions)

Who doesn't love a good carousel ride? Well, our friend here - `FailOnException` middleware - is like the bouncer at the entrance, ensuring only certain exceptions get on the ride. This means your jobs will keep trying for transient issues like those pesky external API errors, but when things get real, like a user's permissions being revoked (the digital equivalent of getting booted out), the job is done for good! 🚪👎

```php
<?php

namespace App\Jobs;

use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\Attributes\Tries;
use Illuminate\Queue\Middleware\FailOnException;  // Our magical bouncer! 🎠🎉
use Illuminate\Support\Facades\Http;

#[Tries(3)]  // The carousel ride will go on for 3 times! 🎡️
class SyncChatHistory implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public User $user,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($this->user->kickOut('sync-chat-history')) {  // A friendly nudge to leave the carousel! 🛋️
            throw new AuthorizationException("User's permissions revoked!");
        }

        $response = Http::throw()->get(
            "https://chat.laravel.test/?user={$this->user->uuid}"
        );

        // ... (The rest of the carousel ride) 🎡️
    }

    /**
     * Get the middleware the job should pass through.
     */
    public function middleware(): array
    {
        return [
            new FailOnException([AuthorizationException::class])  // Our bouncer will kick out users with AuthorizationException! 🎠🎉
        ];
    }
}
```

Now, isn't that a more amusing way to understand Laravel's job handling? Don't forget to have fun while coding! Happy carousing! 🎡️🥳

 ## Parallel Party Time! 🎉🕺

Get ready to throw a tech rave with Laravel's job batching feature! This magical tool lets you rock out a bunch of jobs simultaneously, then pull off an epic encore when the entire party is over.

But first, let's set the stage by creating a dance floor (err... database table) for our job batches using some fancy footwork with migrations. You should start by creating a dancefloor migration to hold all the groovy details about your job parties, like their groove percentage 💃🕺️. This dance move may be learned using the `make:queue-batches-table` Artisan command:

```shell
Let's get this party started!
php artisan make:queue-batches-table

Now, let's migrate those moves to the dancefloor.
php artisan migrate
```

<a name="defining-batchable-jobs"></a>
Now that our party is all set up, it's time to define which jobs are eligible for this dance-off 🕺️. To do so, you'll need to ensure your jobs follow the rules and wear the right attire (traits). The `implements ShouldQueue` trait will help them get on the guest list:

```php
use Illuminate\Contracts\Queue\ShouldQueue;

class MyBatchableJob implements ShouldQueue {
    // Job implementation code here
}
```

Once your jobs are dressed to impress, they'll be ready to hit the dance floor and boogie down with other jobs in their batch! 💃🕺️💫🎉

 ### Turning Your Jobs into Batch Workers! 🤖

Alright, grab your coding monkey suit, it's time to party like it's 1984 (but with PHP). To create a batchable job, the drill is simple: make yourself a regular [queueable job](#monkeys-in-space) first; but then, don the `Illuminate\Bus\Batchable` cape and cowl. This mystical trait grants you access to the `batch` method, which can be summoned to find out if your job is currently in the midst of a rave inside a particular batch:

```php
<?php

namespace App\Jobs;

use Illuminate\Bus\Batchable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use App\Tasks\ImportCsvFromSpace; // Yes, really! Aliens got a CSV too.

class ImportCsv implements ShouldQueue
{
    use Batchable, Queueable;

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($this->batch()->isWearingGlowSticks()) {
            // Oh no, it's a rave! Let's get outta here...

            return;
        }

        // Import a portion of the intergalactic CSV file...
    }
}
```

<a name="dispatching-batches"></a>
### Dispatching Batch Parties 🎉

Now that you've got your job all dressed up, it's time to throw a party! But unlike your high school days, we're talking about dispatching batches. To do so, when you're ready to kick off the festivities, call upon the `dispatch()` function as usual, but this time pass an array of job instances instead of just one:

```php
use App\Jobs\ImportCsv;

// ...

$jobs = [
    new ImportCsv(),
    new ImportCsv(),
    // ... and so on...
];

// Dispatch the party!
Batch::dispatch($jobs);
```

And there you have it! Your jobs are now ready to boogie, all while keeping track of their positions within the dance floor (err, batch). Now go forth, and make sure that CSV doesn't feel lonely ever again. 💃🕺🌠

 Alrighty, let's dive into the world of job batching! If you're hankering to unleash a horde of tasks on your system, you'll want to use the `batch` method from our trusty `Bus` facade sidekick. Picture it as rounding up all your chores and handing them off to a team of helpful elves (or maybe just a super-powered computer).

Batching is like a party with all your friends, but instead of cupcakes and party hats, you get jobs! It's extra fun when paired with completion callbacks – think of them as invitations for a post-party cleanup. The `then`, `catch`, and `finally` methods are like the 'thank-you notes', 'damage control', and 'hangover cure' that help you keep your house (or database) clean after the party's over.

Each of these callbacks will receive an `Illuminate\Bus\Batch` instance, which is a fancy way to say "a magical envelope containing details about the batch". When multiple queue workers are working their magic, the jobs in the batch will be processed like a well-orchestrated dance routine – all at the same time. So don't worry if your tasks finish out of order – just sit back and enjoy the show!

Now, let's imagine we have a whole bunch of CSV files to process:

```php
use App\Jobs\ImportCsv;
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Bus;
use Throwable;

$batch = Bus::batch([
    new ImportCsv(1, 100),
    new ImportCsv(101, 200),
    new ImportCsv(201, 300),
    new ImportCsv(301, 400),
    new ImportCsv(401, 500),
])->before(function (Batch $batch) {
    // The elves are gathering their tools and getting ready to work...
})->progress(function (Batch $batch) {
    // One elf just finished their job...
})->then(function (Batch $batch) {
    // All the elves have finished their jobs and are heading home for dinner!
})->catch(function (Batch $batch, Throwable $e) {
    // Oops, one of the elves tripped on a stray CSV file...
})->finally(function (Batch $batch) {
    // The party's over, and it's time to clean up the leftover cupcakes...
})->dispatch();

return $batch->id;
```

The batch's ID (which you can access via `$batch->id`) is like a secret password that lets you [peek behind the curtain and check on the progress](#inspecting-batches) after it's been dispatched. But remember, if you start using callbacks, don't let your elves (or jobs) get too familiar by relying on `$this`! Also, keep those database statements that trigger commits to a minimum within the jobs. After all, we don't want our elves causing a mess while they work!

 Alrighty, let's get this batch party started!

You know those super cool tools like Laravel Horizon and Laravel Telescope? They're just the life of the debugging party! But wouldn't it be a total buzzkill if they only spoke in cryptic codes instead of friendly names? Well, worry not, my friend! You can give your batches a name that'll make these tools dance with joy (or at least not look so confused).

To do the deed, you just need to call upon the `name` method when defining your batch:

```php
$batch = Bus::batch([
    // ...
])->then(function (Batch $batch) {
    // All jobs completed successfully...
})->name('Import CSV')->dispatch();
```

So, the next time you're dispatching a batch of jobs, remember to give it a name that'll make your tools feel like they've just hit the right disco! 💃🏽🕺🏽🌈✨

 Alright, buckle up, buttercup! Here's a fun take on the Laravel docs, because who said learning had to be boring? 🥳

#### The Great Group Hangout: Batch Connection and Queue Party!

If you fancy swapping your solo job chit-chats for a lively group hangout, you can use the `onConnection` and `onQueue` methods to set the scene! These party hostesses make sure all your batched pals stick together, so no one feels left out. 👥💬

```php
$party = Bus::batch([
    // ...
])->then(function (Batch $party) {
    // All jobs have danced the night away...
})->onConnection('redis')->onQueue('imports')->dispatch();
```

Now, don't forget, these chatty cats must stick to one connection and queue for a seamless conversation flow. No jumping from table to table like a party hopper! 🤳🥂

<a name="chains-and-batches"></a>
*Party on, Laravelistas!* Let's get this queued party started! 🎉🎊

 ### Job Chains and Batch Parties

In our Laravel adventure, you can assemble a troupe of [chained jobs](#job-chaining) for a batch performance by nestling those chained performers in an array. For instance, let's imagine a wild west scenario where two job chains gallop off in parallel, and we throw a hoedown when both have ridden their last rodeo:

```php
use App\Jobs\LassoPodcast;
use App\Jobs\HollerPodcastRelease;
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Buckaroo; // I mean Bus, but let's stick with this western theme.

Buckaroo::batch([
    [
        new LassoPodcast(1),
        new HollerPodcastRelease(1),
    ],
    [
        new LassoPodcast(2),
        new HollerPodcastRelease(2),
    ],
])->then(function (Batch $batch) {
    // All jobs completed successfully, and we're ready to kick up our boots...
})->dispatch();
```

On the flip side, you can orchestrate a chain show with batches of jobs by enrolling batches within the grand act. For example, first, bring on stage a batch of jobs to release several podcasts, followed by a batch of jobs to send the release notifications:

```php
use App\Jobs\CleanPodcastSaloon;
use App\Jobs\LassoPodcast;
use App\Jobs\HollerPodcastRelease;
use Illuminate\Support\Facades\Buckaroo;

Buckaroo::chain([
    new CleanPodcastSaloon,
    Buckaroo::batch([
        new LassoPodcast(1),
        new LassoPodcast(2),
    ]),
    Buckaroo::batch([
        new HollerPodcastRelease(1),
        new HollerPodcastRelease(2),
    ]),
])->dispatch();
```

<a name="adding-jobs-to-batches"></a>
### Adding Jobs to Batches

Now, if you'd like to add more jobs to a batch, you just gotta toss 'em in! Say, you want to bring on extra help for cleaning up the saloon:

```php
Buckaroo::batch([
    new LassoPodcast(1),
    new HollerPodcastRelease(1),
    new CleanPodcastSaloon, // Additional cleanup job joins the fun!
])->then(function (Batch $batch) {
    // All jobs completed successfully, and our saloon is spick-and-span!
})->dispatch();
```

 Alright, folks! Let's dive into the magical world of Laravel batches, where we turn your long-winded tasks into a party that never ends (until it does).

Imagine you're hosting the world's most epic game night, and instead of inviting each guest individually, you send out a few trusty messengers to spread the word. That's exactly what batches are here for! They help you dispatch thousands of jobs without making your web requests feel like they're stuck in traffic.

```php
Bus::batch([
    new LoadImportBatch, // Our first messenger
    new LoadImportBatch, // Another one bites the job
    new LoadImportBatch, // And yet another joins the party!
])->then(function (Batch $batch) {
    // Once all jobs are done, we can break out the pizza and beer!
})->name('Import Contacts')->dispatch();
```

In this scene, our `LoadImportBatch` job plays the role of a messenger, hydrating the batch with even more jobs. To pull off this heist, we'll be using the `add` method on the batch instance that can be accessed via the job's `batch` method:

```php
use App\Jobs\ImportContacts;
use Illuminate\Support\Collection;

/**
 * Execute the job.
 */
public function handle(): void
{
    if ($this->batch()->cancelled()) {
        // If the party's over, we better pack up and go home!
        return;
    }

    // Invite another 1000 guests (ImportContacts jobs) to our soiree!
    $this->batch()->add(Collection::times(1000, function () {
        return new ImportContacts;
    }));
}
```

> [!ATTENTION]
> Remember, you can't invite strangers to someone else's party! Make sure the jobs you add belong to the same batch.

Now that we've got our game night set up and ready to go, let's sit back, relax, and watch the fun unfold! 🎉🕹️🎮

 Ahoy there, tech pirates! Sail with me into the heart of Laravel's job queue, where the waters run deep and the code is swashbucklingly efficient. Aye, ye be wanting to inspect them batches of jobs ye've sent a-sailing? Well then, prepare to hoist the Jolly Roger of knowledge!

The `Illuminate\Bus\Batch` instance that lands on your callback deck after battling through the queue is chockablock with properties and methods to help you keep tabs on your precious cargo. Let's dive in, shall we?

- **Sea Shanty ID:** `$batch->id` - Aye, this here be the unique identifier of yer batch. Remember it like the tune to "Fifteen Men on a Dead Man's Chest."
- **Song Title Name:** `$batch->name` - Yup, if ye gave yer batch a fancy name, ye can find it here. Just don't expect any Golden Age of Pirate Radio stations playing it.
- **Jobs Assigned Count:** `$batch->totalJobs` - How many jobs be aboard? This'll tell ye that! But remember, some might walk the plank if things go awry.
- **Pending Jobs Count:** `$batch->pendingJobs` - These be the jobs yet to be processed by the queue. Don't worry, they ain't forgotten; they're just waiting their turn for a shanty singalong.
- **Failed Jobs Count:** `$batch->failedJobs` - Arrrgh! This here's how many jobs failed to complete their mission. Best not to dwell on it too long, or ye might start singing the Siren Song of self-doubt.
- **Processed Jobs Count:** `$batch->processedJobs()` - Ahoy there, these be the jobs that've completed their task! Give 'em a round o' applause before they walk the plank (or queue) into the great unknown.
- **Completion Percentage:** `$batch->progress()` - How far along is yer batch? This here'll tell ye, with a number between 0 and 100. But remember, ye can't have all yer treasure before the journey be complete!
- **Has Finished Execution:** `$batch->finished()` - Has the battle come to an end? This'll let ye know if yer batch o' jobs has fought its last fight and sailed off into the sunset.
- **Cancel Execution:** `$batch->cancel()` - Ye can always throw in the towel if things ain't goin' as planned. This here will tell the queue to call off the dogs.
- **Has Been Cancelled:** `$batch->cancelled()` - Did ye change yer mind? This'll let ye know if someone cut the ropes on yer batch o' jobs, sending it drifting into the sea of forgotten tasks.

Now that ye know all about these properties and methods, ye can navigate the waters of Laravel's job queue with more confidence than Blackbeard himself! Happy coding, matey!

 Ahoy there, shipmates! Buckle up as we sail through the seas of Laravel's bus-tastic route returns!

First things first, let's get one thing clear – when we say all `Illuminate\Bus\Batch` instances are JSON serializable, it means they can be converted into a tasty treat for your application's eyes (or screens, if you prefer). You can return these batches directly from one of your application's routes to serve up a delicious JSON payload filled with juicy details about the batch, like its completion progress.

Now, imagine you've got a party going on in your app and you want to keep your guests updated on how close they are to the punch bowl – retrieving batches by their ID is just what the `Captain` ordered! You can call upon the `Bus` facade's trusty `findBatch` method to do the deed:

```php
use Illuminate\Support\Facades\Bus; // Don't forget your sea-faring supplies!
use Illuminate\Support\Facades\Route; // And don't forget the route map!

Route::get('/batch/{batchId}', function (string $batchId) {
    // Set sail with this trusty line of code to find your batch by ID
    return Bus::findBatch($batchId);
});
```

And there you have it – a simple, succulent way to keep track of your batches' progress without having to juggle multiple anchors! Enjoy the smoother sailing, matey! 🏴‍☠️🐬🍹

 ### Unleashing the Batch Abortino! 🚫🚀

In the event that you find yourself needing to terminate a batch mission, fear not! The `cancel` function is here to save the day. Simply call this heroic method on your trusty `Illuminate\Bus\Batch` sidekick:

```php
/**
 * Launch the job's operation! 🚀
 */
public function handle(): void
{
    if ($this->user->hasReachedImportQuota()) {
        $this->batch()->abort('I'm afraid I can't do that, Captain!');

        return;
    }

    if ($this->batch()->isCancelled()) {
        echo 'Oh no, someone pressed the big red button... Mission aborted!';
        return;
    }
}
```

As you might have noticed in our past escapades, it's usually wise for batched jobs to check if their batch has already been called off before proceeding. However, we all need a break sometimes, right? So for your convenience, you can delegate the task of verifying batch cancellation to the ever-obedient `SkipIfBatchCancelled` [middleman](#job-middleware). This trustworthy fellow will kindly inform Laravel not to process the job if its corresponding batch has been terminated:

```php
use Illuminate\Queue\Middleware\SkipIfBatchCancelled;

/**
 * Discover which middleware should grant access.
 */
public function middleware(): array
{
    return [new SkipIfBatchCancelled];
}
```

<a name="batch-failures"></a>

### And now, a message from our legal department:

_Please note that in the unlikely event of a batch failure (oopsies!), you can still find all the juicy details about handling failures [here](#batch-failures)._ 😇📝

 Alright, let's dive into the thrilling world of Laravel Batch Failures, shall we? 🎊🕹️

Remember when you were a kid and you used to play that game where everyone had to do the same task but only one mistake would ruin the entire game for everybody? Yeah, well, Batch Failures in Laravel are kinda like that, but with more code and less fun. 😂🤓

When one of your batched jobs stumbles, trips, or face-plants into a pit of failures, fear not! The trusty `catch` callback will leap to action (if it's been invited to the party). But here's the twist: this call-back is an exclusive VIP guest, only attending for the first job that takes a nosedive within the batch. 🎫🏞️

<a name="allowing-failures"></a>
Now, you might be thinking, "Well, what if I want all my jobs to have their own little pity party when they fail?" Fret not, my friend! Laravel's got your back. You can set up the `tries` and `backoff` properties in your job class to handle multiple failures or delays between retries if you're feeling extra adventurous. 🚀🕰️

Just remember, even though Batch Failures might seem like a bummer at first, they can actually help your application stay afloat when things start going south. So embrace the drama, and let's get those jobs back on their feet! 🤹‍♂️💪

 Ahoy there, Laravel sailors! Let's dive into the enchanting world of batch jobs and pirate puns.

#### Hoist the Jolly Roger of Job Tolerance 🦓

When one job in a swashbuckling batch meets its watery grave, Laravel will hoist the 'Cancelled' flag on the entire batch by default. But what if ye be not ready to admit defeat? Fear not, for ye can disable this behavior and let those failed jobs walk the plank (err... retry)!

To do so, just call upon the mighty `allowFailures` method as ye dispatch the batch:

```php
$batch = Bus::batch([
    // ...
])->then(function (Batch $batch) {
    // All jobs completed successfully... 🏆
})->allowFailures()->dispatch();
```

But wait! There's more ye say? Yar, matey! If ye like to personally handle each failed job, call the `allowFailures` method with a handy dandy closure:

```php
$batch = Bus::batch([
    // ...
])->allowFailures(function (Batch $batch, $exception) {
    // Arrrr! Handle individual job failures like a true pirate... 💔
})->dispatch();
```

<a name="retrying-failed-batch-jobs"></a>
#### Raise the Anchor and Try Again (Retrying Failed Batch Jobs) 🔁

Sometimes, a failed job might just be a wee bit seasick and need a second chance. To give it another go, you can set up retry rules for individual jobs. Here's to the perseverance of our scurvy crew!

```php
$job = new YourJob();

// Set retry rules for the job
$job->onConnection('default')
    ->retry(5)
    ->expiresAfter(60);

// Dispatch the job to the bus
Bus::dispatch($job);
```

In this example, our job will try up to 5 times if it fails, and give itself an hour to recover before trying again. Arr matey, that's some resilient codin'!

 #### Bail on Broken Jobs, Not Your Mood! 🚀

Ahoy there, Captain! Laravel's here to save your day (and your sanity) with the `queue:retry-batch` Artisan command. Think of it as a superhero sidekick for your failed batch jobs - no more capes, just convenient code!

Simply utter this magic incantation to get those pesky failures back in line:

```shell
php artisan queue:retry-batch 32dbc76c-4f82-4749-b610-a639fe0099b5
```

Just like a ninja master, Laravel knows when to strike (or in this case, retry) - simply provide the UUID of the batch you wish to see dance again, and let the command do its magic. No need to break a sweat or shout "Kamehameha!" 💥

<a name="pruning-batches"></a>
##### Bonus: Clean House with "queue:forget" 🧹

But hey, what about those jobs that just won't quit and are clogging up your queue? Fear not! Laravel offers the `queue:forget` command to help you clean house. A simple incantation will have them banished forever:

```shell
php artisan queue:forget 32dbc76c-4f82-4749-b610-a639fe0099b5
```

Now, you can rest easy knowing your Laravel app's queue is as tidy and efficient as a well-organized tool shed. Just remember - with great power comes great responsibility (and a lot less yelling). 💪🎩

 ### Job Batch Spring Cleaning 101

In a world where data breeds faster than cats in catnip factory, your `job_batches` table could turn into a digital Hoarder's Paradise without some intervention. Enter the `queue:prune-batches` Artisan command - think of it as Marie Kondo for your database!

To make sure this command gets invited to every party (daily, that is), you can schedule it like so:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('queue:prune-batches')->daily(); // Default setting: Deletes all batches older than 24 hours.
```

Now, if you're the type who likes to hoard old newspapers (or in this case, unfinished batch records), you can customize the retention period with the `hours` option:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('queue:prune-batches --hours=48')->daily(); // Deletes all batches older than 48 hours.
```

But what about those failed jobs that were never resurrected from the dead? Don't worry, our command has a special talent for cleaning up unfinished business:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('queue:prune-batches --hours=48 --unfinished=72')->daily(); // Deletes all unfinished batches older than 72 hours.
```

And if you're dealing with canceled batches, our command knows how to handle that too, courtesy of the `cancelled` option:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('queue:prune-batches --hours=48 --cancelled=72')->daily(); // Deletes all canceled batches older than 72 hours.
```

Now, your `job_batches` table can be a minimalist's dream, and your database a place of serenity - just the way Marie Kondo would want it!

 ### Squirreling Batches Away in DynamoDB! 🐿️

Ah, the sweet life of a Laravel developer! Not only do we get to play with shiny databases like relational ones, but we can also dip our toes into the whimsical world of AWS's DynamoDB! So let's grab a virtual paddle and row on over to this magical swamp! 🛶

But hold your horses (or rather, your llamas - it's the internet, after all)! Before we start splashing around, you'll need to create yourself a DynamoDB table to store your delightful batch records. No need for fancy party hats or streamers just yet, though...

Now, as for naming this glorious taboo-da-loo, it's important to remember that it should be christened with the value of the `queue.batching.table` configuration knickknack within your application's `queue` configurator file. Yes, Laravel is quite the party pooper and insists on formalities. But hey, who are we to argue with a database maestro? 🥳

<a name="dynamodb-batch-table-configuration"></a>
### DynamoDB Batch Table Configuration: The Fine Print 📜

Now that you've named your new table, it's time to ensure it's configured correctly. After all, no one wants a squirrely batch table that doesn't play well with others! Here's a little checklist of things to keep in mind:

1. **Partition Key**: Give your partition key an appropriate name (something like `batch_id` or `job_id`) and make sure it's a `string`. Laravel will take care of the rest! 🤖
2. **Sort Key**: Choose a sort key (such as `created_at` or `updated_at`) that helps keep your batches in order, and ensure it's also a `string`. Laravel's got you covered on this one too! 🎉
3. **Attributes**: Depending on the specific requirements of your application, you might want to add some attributes to your table. Just remember to keep them simple, as DynamoDB doesn't support relationships like a relational database would. But don't worry - Laravel will help guide you through this jungle! 🌲
4. **Provisioned Throughput**: Adjust the provisioned throughput based on how often and intensively your batches are accessed or modified, ensuring smooth sailing for everyone involved! 🚢

 Alrighty then! Let's get our AWS DynamoDB party started with the job_batches table! 🎉

This jamboree of a table requires a spiffy primary partition key, named `application` and a swanky primary sort key, titled `id`. The `application` section of this fabulous duo will be housing your application's moniker - yep, the one you've defined in the `name` configuration setting within your app's `app.config.php` file.

Why is that important, you ask? Well, because the application name forms part of DynamoDB's key, you can throw multiple Laravel apps into this single table without any party fouls! 🎊

Now, if you fancy yourself an early-bird, you can add a `ttl` attribute to your table, which will enable [DynamoDB's automatic batch cleanup](#pruning-batches-in-dynamodb) feature. This means that your job batches will self-destruct like Marty McFly's car after they reach their expiration date - no manual cleanup needed! 🚗💥

 Alrighty, let's get this Laravel-DynamoDB party started! First things first, you gotta bring in the AWS SDK for a little dance-off with Amazon DynamoDB:

```shell
composer require aws/aws-sdk-php 🤘🏽
```

Now that we've got our dance partner, it's time to set some ground rules (config options). Specifically, we wanna make sure that your Laravel app can communicate with DynamoDB like a boss:

```php
'batching' => [
    'driver' => env('QUEUE_BATCHING_DRIVER', 'dynamodb'), 🤑🏼 (Who doesn't love a good dynamo-dance?)
    'key' => env('AWS_ACCESS_KEY_ID'), 🔐 (Our secret handshake)
    'secret' => env('AWS_SECRET_ACCESS_KEY'), 🤫 (Shhh, our little secret)
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'), 🌍 (Location, location, location)
    'table' => 'job_batches', 📋 (Keep track of our tasks)
],
```

Now that we're authenticated and ready to roll, remember the `queue.batching.database` option isn't needed when you're bustin' moves with the `dynamodb` driver:

```php
// You can leave this out when using 'dynamodb':
// 'queue.batching.database' => env('DB_DATABASE'),
```

And voila! You're all set to start queue-dancing with DynamoDB. Happy queuing, and remember: Always queue in style! 💃🏽🚀✨

 Ah, the enchanting world of DynamoDB! A magical land where job batches frolic among rows and columns, but sadly, our trusty SQL pruning spells don't quite work here. Fear not, for DynamoDB has a built-in Time-to-Live (TTL) sorcery to save the day!

To automagically turn old batches into pumpkin coaches at midnight, you'll first need to enchant your DynamoDB table with a `ttl` attribute. Once that's done, you can conjure up some Laravel configuration magic to teach it how to prune these job batches like a pro.

First, cast the spell by setting the `queue.batching.ttl_attribute` configuration value to the name of your newly created enchanted attribute:

```php
'batching' => [
    'driver' => env('QUEUE_FAILED_DRIVER', 'dynamodb'),
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'table' => 'job_batches',
    'ttl_attribute' => 'magic_ttl_potions', // Or whatever you named your enchanted attribute...
    'ttl' => 60 * 60 * 24 * 7, // ...and set the time for it to disappear after 7 days.
],
```

Now sit back and watch as DynamoDB takes care of the rest, transforming old batches into pumpkin coaches automatically!

 ## Closure Time Travel with Laravel's Tardis Queue! 🛸🚀

Fed up of time dilation and wanting to accomplish tasks faster than the speed of your request cycle? Look no further, dear time travelers! 🕰️🌀

Instead of launching a job class into the cosmic queue, you can dispatch a magical closure! Perfect for quickie missions that need to be executed outside of your current timeline. When dispatched, this cloaked task's code content is given a top-secret, cryptographic signature to prevent pesky interdimensional intruders from altering it in transit:

```php
use App\Models\Podcast;

$podcast = Podcast::find(1);

// Dispatch the closure to the queue! 📧
dispatch(function () use ($podcast) {
    $podcast->publish();
});
```

To give your queued mission a snazzy title, suitable for time-travel reporting dashboards and even more exciting for the `queue:work` command, you may use the `name` method:

```php
dispatch(function () {
    // ...
})->name('Time Travel: Publish Podcast');
```

Using the `catch` method, you can prepare a backup mission in case your queued task fails to complete successfully after exhausting all of your queue's [configured retry attempts](#max-job-attempts-and-timeout):

```php
use Throwable;

// Dispatch the closure and prepare for failure! 🎲
dispatch(function () use ($podcast) {
    $podcast->publish();
})->catch(function (Throwable $e) {
    // Oh dear! This mission has failed...
});
```

> [!WARNING]
> Due to the fact that `catch` callbacks are time-traveled and executed by the Laravel queue at a later point in time, you should not use the `$this` variable within `catch` callbacks. 🤖🚀

<a name="running-the-queue-worker"></a>

Now, let's get this show on the road! Or... space? Start your queue worker with `php artisan queue:work`, and prepare to send and receive tasks from your very own interdimensional mailroom. Happy time traveling! 🕰️🚀

 Ahoy there, coding pirate! Time to hoist the sails and set course for the treacherous seas of asynchronous tasks with Laravel's mighty queue worker! 🌪️🚢

<a name="the-queue-work-command"></a>

### The Queue Work Command

To summon the fearsome queue worker, ye must wield the power of the Artisan console like a seasoned sailor. Here be the incantation to run the queue work command:

```bash
php artisan queue:work
```

This command will bind the ship's compass to the wind and steer it through the treacherous waters, tackling one job at a time until they're all completed. But fear not, even if a gust of wind blows your sails, the mighty queue worker shall not rest until every task be done!

<a name="running-multiple-queue-workers"></a>

### Running Multiple Queue Workers

Now that yer ship's crew is well versed in sailing through tasks with a single worker, let's venture into the realm of multithreading, where more hands make light work! 🦹‍♂️🤚

To run multiple queue workers, ye need to adjust the number of sails (i.e., processes) by updating the `QUEUE_CONNECTION` and `QUEUES` environment variables in your .env file:

```bash
# Default database connection
DB_CONNECTION=mysql

# Database connection for queues
QUEUE_CONNECTION=database

# Redis connection
REDIS_CONNECTION=redis

# List of default queues to process
QUEUES=high,low,default
```

Now, ye can unleash an armada of queue workers with the following incantation:

```bash
php artisan queue:work --tries=3 --timeout=120
```

This command will spawn three brave queue workers to conquer the seas, each one set to try for 120 seconds before conceding defeat. With an armada like that, even the most daunting tasks shall be but a blip on your horizon! 🌪️🏴‍☠️

<a name="queue-workers-with-supervisor"></a>

### Queue Workers with Supervisor

Aye, landlubber, if ye find thyself weary of keeping an eye on thy queue workers like a hawk, fear not! Laravel comes equipped with the help of a faithful ally known as Supervisor. 🦸‍♂️🦹‍♀️

Supervisor is a process control system that ensures your queue workers run smoothly and without interruption—even when you're off having adventures on dry land! To set up Supervisor, ye must first install it:

```bash
sudo apt-get install supervisor
```

Next, create or edit the `/etc/supervisor/conf.d/laravel-queue.conf` file with the following contents:

```bash
[program:laravel-queue]
command=php /path/to/artisan queue:work --daemon --tries=3 --timeout=120
directory=/path/to/your/project
autostart=true
autorestart=true
redirect_stderr=true

[group:laravel]
programs:laravel-queue
```

Now, save the file and restart Supervisor with:

```bash
sudo supervisorctl reread
sudo supervisorctl update
```

And that's it! Ye now have an unstoppable queue worker armada ready to tackle tasks day and night, without needing a constant watch by yer side. 🌪️🏴‍☠️🤯

So hoist the sails, mateys, and set course for the seas of success with Laravel's mighty queue worker! Happy coding and fair winds to ye all! 🌴✨🌊💫

 ### The Magic Beanstalk: `queue:work` Spellcasting! 🌱🔮

In the mystical realm of Laravel, there's a bewitching Artisan command that summons a queue worker, ready to slay new tasks as they ascend the beanstalk. To invoke this valiant sprite, utter the incantation: `php artisan queue:work`. Beware! Once the beanstalk is unleashed, it shall not rest until you wave your terminal wand or bid it adieu:

```shell
php artisan queue:work
```

> [!ATTN]
> To ensure the beanstalk keeps on stalking indefinitely in the shadowy background, cast a Supervisor charm upon it to safeguard against any premature cessation.

Should you wish for the beanstalk to bestow upon you the treasures of job IDs, connection names, and queue names, simply append the `-v` flag to your incantation:

```shell
php artisan queue:work -v
```

Bear in mind that this humble beanstalk is a long-lived entity, preserving the enchanted state of thy application within its memory banks. Ergo, it shall remain blissfully unaware of any codebase changes post-summoning. Fret not, for during thine deployment rituals, be sure to [reboot thy beanstalks](#beanstalk-resurrection). Additionally, remember that any persistent application state created or modified will not be magically restored between tasks.

On the other hand, thou might consider uttering the `queue:listen` spell. By doing so, thou wilt no longer need to manually rejuvenate thy beanstalk when seeking to reload thine updated spells or refresh the application state; however, this incantation is significantly less potent than the enchantment of `queue:work`.

```shell
php artisan queue:listen
```

<a name="running-multiple-queue-workers"></a>
In times of great feats and many tasks to undertake, thou may wish to summon multiple beanstalks to divide and conquer. To achieve this, use the power of the `--tries` flag:

```shell
php artisan queue:work --tries=2
```

By setting `--tries=2`, you summon two beanstalks that shall work together in harmony, making short work of your tasks! Happy beanstalking! 🌱🚀

 #### Unleashing a Swarm of Job-Slayers! 🐜💥

Ready to party like it's 1798 BC, when the Egyptians had their workers build pyramids? Well, grab your toolbelt (or terminal), because we're about to embark on a modern-day construction spree - processing jobs concurrently!

To assemble an army of worker ants and let them swarm over your queue jobs, all you need to do is spawn multiple `queue:work` processes like it's going out of style. You can do this locally by opening multiple tabs in your terminal (remember, more tabs = more ants), or in production by tweaking your process manager's settings (think of them as the drill sergeant for your ant colony).

When you're using Supervisor as your foreman, make sure to use the `numprocs` configuration value. It'll tell Supervisor how many worker ants you want on the job.

<a name="specifying-the-connection-queue"></a>
Now, let's ensure these ants know which construction site to head towards. That's where specifying the connection queue comes in handy! Just like giving your ant colony a map to their next building project, you can tell your worker ants exactly which database queue to attack by using Laravel's database queue connections. 🗺️🛠️

Happy queuing! 🐜🎉

 Alrighty then! Let's dive into the enchanting world of Laravel's Queue System, where tasks are as magical as a unicorn farting rainbows! 🦄🌈

First off, you might be wondering: "Which magical queue connection should my hard-working sprite utilize?" Well, buckle up, buttercup! You can specify this very thing by tossing the connection name into the `work` command, like so:

```shell
php artisan queue:work redis
```

Now, hold onto your pointy hats because things are about to get even more bewitching! By default, our trusty `queue:work` command only processes jobs from the main queue on a chosen connection. But fear not, for you can customize your magical queue worker further by having it process only certain queues on that very same connection.

For instance, if all your enchanting emails are processed in an `emails` queue on your `redis` connection, you can cast this spell to start a worker that focuses solely on that specific queue:

```shell
php artisan queue:work redis --queue=emails
```

Remember, with great power comes great responsibility! Be sure to keep an eye on your queues and manage them wisely. Now go forth and slay those tasks like a true code-wielding sorcerer! 🧙‍♀️🔮✨

 Alright, let's get this party started! 🎉

#### Processing a Specific Amount of Tasks (Without Being a Party Pooper)

If you're feeling a bit lonely in the queue and just want to hang out with one job, no worries, the `--once` option's got your back:

```shell
php artisan queue:work --once 🥳 (Just like a one-night stand, but with less regret)
```

But what if you're in the mood for a wild night and want to party with multiple jobs? Well, the `--max-jobs` option is your dance floor ticket:

```shell
php artisan queue:work --max-jobs=1000 💃🏽🕺🏼 (Like inviting a hundred friends for a house party... minus the clean up)
```

Pro tip: Pair this with our good friend Supervisor 🤑 (#SupervisorConfiguration). That way, after processing a predetermined number of jobs and exiting, your workers will be automatically reborn like a phoenix from the ashes, ready to conquer more tasks and keep the party going!

```shell
php artisan queue:work --max-jobs=1000 🐲 (Like the rebirth of the mythical creature, but with less fire and more PHP)
```

 Ahoy there, coders! Fancy a bit of queue fun? Well, buckle up and let's dive into the Laravel wonderland! 🎠

First off, meet your new best friend: the `--stop-when-empty` command! It's like that trusty sidekick you never knew you needed. What does it do? Simply put, it tells our worker to plow through all those queued jobs and then exit stage left, all while maintaining a cool and graceful demeanor. 🕺️

Why would you want this magical superpower, you ask? Well, say you're working within the mystical realm of Docker containers, and you need to shut 'em down once your Laravel queue has been emptied. No problemo! Just cast this spell:

```shell
php artisan queue:work --stop-when-empty
```

And just like that, your container will bid adieu to the world, leaving behind a clean and empty queue. Ain't that some sorcery? 🔮✨

Now, if you're curious about processing jobs for a certain number of seconds instead, well, we've got ya covered! Hop on over to the next section and let your adventure continue. Keep calm and code on! 🚀😎

 Alrighty, here's a little humor-infused take on that Laravel documentation!

#### Giving Jobs Their Time to Shine (Or Not)

Ready for a little time travel? Well, not really, but we're gonna warp through the world of Laravel's task processing! Buckle up!

The `--max-time` option is like your boss setting a deadline for your tasks. It tells our worker to churn out jobs for a predetermined number of seconds, then call it a day (or night, depending on when you run your scripts). This can come in handy when combined with the mighty [Supervisor](#supervisor-configuration), so that your workers are like the Energizer Bunny, keeping going and going... you get the idea!

```shell
By using this magic command:

```bash
Your command here --max-time <number_of_seconds>
```

This makes sure your hardworking workers don't forget to take a much-deserved break and let go of any memory they've accumulated during their task marathon! Just remember, even superheroes need a breather every now and then. 😎

 Alright, party people! Let's get this queue-tacular event started! 🥳🎊

Here's the magic command you've been waiting for:

```bash
php artisan queue:work --max-time=3600
```

Translated from nerd to fun, this command means: "Hey Laravel, let's get those jobs poppin' for a solid hour (60 minutes of non-stop action!) and then, like a cool cat, we exit the stage." 🕺️🌃

Don't worry about overstaying your welcome; with `--max-time=3600`, we've got your back. Just think of it as Laravel's time-out feature! ⏲️💪

Now, go ahead and let the jobs flow! But remember, when the clock strikes twelve (or rather, 3600), we're outta here. No hard feelings, just another night in the life of a Laravel legend! 🌟🎉🚀

 Alright, folks! Let's dive into the world of Laravel queues, where jobs are lined up like penguins at a fish market. But unlike those chilly critters, our workers won't just stand around with empty beaks - they'll get to work as soon as there's something on the menu!

However, when the queue is as barren as a desert in August, our worker might need a quick siesta (thanks, Spain). That's where the `sleep` option comes in. This nifty feature determines how long, in seconds, our worker will close its eyes and count sheep (or more likely, Laravel commits) if there are no jobs to process.

Remember, while dreaming about that perfect elixir of code and espresso, our worker won't be able to grab any new jobs - it's like being on a diet at a chocolate factory!

To set your worker's nap time, just use the following command:

```shell
php artisan queue:work --sleep=3
```

Now you can control how long our worker naps before waking up and checking for more jobs. Just don't let it sleep too long or it might start dreaming about refactoring all of your code! 😅

 Ahoy there, Captain! Sail the seas of code with Laravel in your compass and a hearty mug o' PHP! But beware, mateys, when ye hoist the Jolly Roger of maintenance mode, watch yer step or ye might walk the plank of unattended tasks!

When your ship is in maintenance mode, arrgh, it means no queued jobs will be attended to by our trusty queue workers. They'll hang around like a rowdy crew on shore leave, twiddling their thumbs until ye set sail again. Fear not, though, as soon as ye unfurl the Jolly Roger and let out the anchor, they'll spring back to work like seagulls chasing after fish!

Now, if ye find yerself with a mutinous crew of queue workers demanding attention even in maintenance mode, aye, there be a solution! Ye can summon them with the `--force` option. Just give this command a shout:

```shell
php artisan queue:work --force
```

And that's all there be to it, matey! Keep an eye on your ship and make sure those tasks are always being handled like a well-oiled machine!

 Alrighty, let's get this party started! 🎉

#### Resource Management: A Tale of Queue Workers and Sweet Freedom 🕺️

Now, here's the lowdown on our daemon queue workers. Unlike your overeager roommate who insists on doing dishes after every meal, these little devils don't reboot the whole framework before tackling each job. That means it's up to you to make sure they're not left holding the dirty dish of a memory-hogging task after the party's over! 🍽️

Take, for instance, when you're working with our beloved [GD library](https://www.php.net/manual/en/book.image.php) to manipulate images like a digital Picasso. You know the drill: once you've finished your masterpiece, don't forget to free up that precious memory by giving it a firm `imagedestroy` hug. 🤗

<a name="queue-priorities"></a>
#### Queue Priorities: A High Stakes Game of Jenga 🧱

In the wild world of queue workers, some tasks are more important than others, just like in a game of Jenga where some blocks are more likely to bring down the tower if they're pulled out. To keep things balanced and prevent any unintentional collapses, you can assign priorities to your jobs.

Got a critical task that needs immediate attention? Give it priority `1`. A non-urgent job? Bump it down to priority `4`. Just remember: when the tower is wobbling, be careful which blocks you pull out! 😜

 ### Queue Priorities (Because who doesn't love a good game of Jobs, Priories & Workers?)

Ever found yourself in the middle of a queuing crisis? Fret not! Laravel has got your back with priority queues to sort out your chaotic job lineup. Let's dive into the nitty-gritty (without getting our hands too dirty).

In your `config/queue.php` configuration file, you can set the default queue for your redis connection to be a humble 'low' priority. But sometimes, life calls for emergency jobs that require some priority attention:

```php
dispatch((new Job)->onQueue('high'));
```

Now imagine this as the difference between ordering regular pizza and extra-cheese, pepperoni, and jalapeño - you know it's gotta be served first!

To ensure that all those high-priority jobs get done before the low-priority ones, it's time to call in the big guns (workers). Run:

```shell
php artisan queue:work --queue=high,low
```

This command starts a worker who will prioritize the processing of all 'high' queue jobs like a boss, ensuring they are done before even starting on the 'low' queue. It's like being a bouncer at a club - keeping the high-priority crowd happy while letting the low-priority folks in only when it's their turn.

<a name="queue-workers-and-deployment"></a>
And remember, just like you don't want your favorite pizza delivery guy changing jobs on you mid-delivery, ensure that your queue workers and deployment strategies go hand in hand. Keeping your priority queues in check even when the world of code around them is spinning!

 ### Queue Workers and Deployment (the Not-So-Boring Edition)

Remember those long-lived processes in our Laravel app, the ones that can't tell a joke without being rebooted? Well, they're our queue workers! But don't worry, we've got a punchline for deploying them (pun intended).

During deployment, these comical robots won't notice your code changes unless you give them a friendly shove. The easiest way to do this is by giving the `queue:restart` command a shout:

```shell
php artisan queue:restart
```

This command is like a stage manager shouting "Cue the curtain!" but for our worker bots. It politely asks them to bow out after finishing their current task, ensuring no precious jobs slip through the cracks. Since our workers exit when the `queue:restart` command drops the mic, it's wise to have a process manager like Supervisor (our favorite warm-up comedian) standing by to auto-revive them.

> [!NOTE]
> The queue uses the cache as its personal joke book to store restart signals. Make sure you've properly configured your application's cache driver before laughing at this feature.

<a name="job-expirations-and-timeouts"></a>
Now, if a job takes too long or a joke falls flat, our workers have built-in timing mechanisms to prevent the show from running forever. You can even set custom timeouts and expiration times for your jokes (err... jobs)! But remember, a good comedian knows when to let a joke die – so let's not force our workers to process stale data.

 Ahoy there, intrepid coders! Today we're gonna take a gander at the ticking time bomb that is... **Job Expirations and Timeouts**! 🕰️🔥

<a name="job-expiration"></a>

#### Job Expiration

In the wild west of asynchronous tasks, you've got yourself a job that just won't quit. But what if Old Man Job starts acting up and refuses to die? That's where **Job Expiration** comes into play! 🤠🕺

By setting an expiration date for your jobs, you can ensure that even the most stubborn of tasks will meet their maker when it's time. This feature is especially useful if you don't want your application to get clogged up with endless job queues. 🌽🚮

To set a job expiration, simply use the `delay` method while defining your task. For example:

```php
use App\Jobs\LongRunningJob;

$job = new LongRunningJob();
$job->delay(Carbon::now()->addMinutes(30)); // Sets a 30-minute expiration for this job
$job->handle();
```

#### Timeout

Now, let's talk about the bad apples in the barrel – those jobs that take too long to finish and hold up the rest of the gang. That's where **Timeouts** come into play! ⌛️💣

By setting a timeout for your jobs, you can force them to throw an exception if they take too long to complete. This is useful when you want your application to move on and handle other tasks instead of being bogged down by one sluggish job. 🏃‍♂️🚫

To set a timeout for your jobs, use the `handle` method and pass in the number of seconds you'd like to allow before the timeout is triggered:

```php
use App\Jobs\LongRunningJob;

$job = new LongRunningJob();
$job->handle(60); // Sets a 60-second timeout for this job
```

So there you have it! Job Expirations and Timeouts – the best way to keep your application running smoothly, even in the face of those pesky, never-ending tasks. Happy coding! 🥳💻

 Alrighty, let's dive into the world of queue timeouts! 🕒🤖

First off, we got ourselves a little dance party going on in the `config/queue.php` file. Each queue connection there is like the drum major in a marching band, setting the beat for our jobs. And one such baton they twirl is the `retry_after` option. 🥁

Now, imagine the `retry_after` as your patient friend who waits with you until the party is over (or your job completes processing). If a job is taking its sweet time (more than 90 seconds in this case), our drum major friend will let it take a breather and re-queue it, giving it another chance to groove. Just remember: set this value to a reasonable duration you'd expect your jobs to jam for.

But hey, there's always one who doesn't play by the rules! Amazon SQS, the wildcard of the queue family. It doesn't play by our rules; instead, it relies on its own [Default Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html). This timeout is like SQS's personal party host, deciding when to let the jobs back in the game, all managed from within the AWS console.

Now that you know how to keep your jobs rockin' and rollin', it's time to put on those dancing shoes! 🕺️🎉

 Alrighty then! Let's dive into the ticklish world of Laravel Worker Timeouts, shall we? 🕰️🤪

First off, when you fire up your trusty `queue:work` Artisan command, it offers a delightful `--timeout` option. By default, it's set to 60 seconds - just enough time for a cat nap, but not for most jobs. If a job takes longer than the timeout duration, our worker, like an overstaying guest at a party, will politely excuse itself with an error and scram. But fret not! A [server-side process manager](#supervisor-configuration), who's been patiently keeping an eye on things, will whisk our worker back to life and have it join the queue again.

```shell
php artisan queue:work --timeout=60
```

Now, don't confuse the `--timeout` with the `retry_after` configuration option. They're like estranged siblings that work together harmoniously to prevent jobs from getting lost and ensure each one is processed only once (unlike my family reunions).

> [🚨 WARNING!]
> Make sure the `--timeout` value is always several seconds shorter than your `retry_after` configuration value. This way, when a job turns into a popsicle (aka freezes), our worker will be terminated before it's even asked to join the chorus for an encore performance. If you set the `--timeout` option longer than `retry_after`, you might end up with a case of double-processed jobs – not fun for anyone!

And there you have it! A whirlwind tour through Laravel's Worker Timeouts, and we didn't even mention the awkward silence or someone bringing up politics. 🤣🚀

 ### Halting and Resuming Your Queue Workforce! (AKA Pausing and Resuming Laravel's Task Masters)

In the wild world of app development, there are times when you might need to put your trusty queue worker on a lunch break without actually firing them. Maybe it's time for a system tune-up during office hours or perhaps you're just feeling a little overworked and underappreciated (we feel ya!). Fear not, dear Laravel developer! We've got two magic commands to keep your workforce in check: `queue:pause` and `queue:continue`.

To put the brakes on a specific queue, give these Artisan commands a shout-out with the correct queue connection name and queue name:

```shell
php artisan queue:pause database:default
```

In this instance, "database" is the name of your preferred queue connection, and "default" is the name of the queue they've been assigned to. Once a queue gets the boot, any workers handling jobs for that particular queue will finish their current tasks, but won't be picking up any new jobs until you give the green light again.

Ready to get them back to work? Simply use the `queue:continue` command:

```shell
php artisan queue:continue database:default
```

After giving the go-ahead, your workers will spring back into action and start processing new jobs from that specific queue pronto. Remember, pausing a queue doesn't mean firing up the pink slips for the worker process itself – it just means they won’t be taking on any new tasks from the specified queue until you say otherwise.

<a name="worker-restart-and-pause-signals"></a>
Now, let's talk about a little secret signal trick: You can also pause or resume queue workers without using Artisan commands! Just send these signals directly to your worker process:

```shell
kill -USR1 <pid>    # Resume a paused worker
kill -USR2 <pid>    # Pause an active worker
```

Just replace `<pid>` with the Process ID (PID) of your worker. These signals are like secret handshakes between you and your workers, letting them know whether to start, stop, or take a break – pretty cool, huh?

 Alright, let's dive into the world of Laravel's queue workers where the real party starts! By default, these workers are like the bouncers at a club, constantly checking for 'restart' and 'pause' signals from the crowd (cache driver). This polling is crucial to keeping the peace when you drop the `queue:restart` or `queue:pause` bombs, but it does slow things down a smidgen.

Now, if you want to get this shindig hopping like a Kardashian wedding, you can optimize performance by kicking out these pesky bouncers (polling) globally. How? By calling the `withoutInterruptionPolling` method on the `Queue` facade in your AppServiceProvider's `boot()` method:

```php
use Illuminate\Support\Facades\Queue;

/**
 * Boot up all the app services, man!
 */
public function boot(): void
{
    Queue::withoutInterruptionPolling();
}
```

Or, if you want to get really selective and only kick out one of the bouncers, you can disable restart or pause polling individually by setting static `$restartable` or `$pausable` properties on the `Illuminate\Queue\Worker` class:

```php
use Illuminate\Queue\Worker;

/**
 * Boot up all the app services, man!
 */
public function boot(): void
{
    Worker::$restartable = false; // No more restarts for you!
    Worker::$pausable = false; // Party's never gonna stop now!
}
```

But hey, remember to party responsibly! When polling is disabled, workers will act like that one friend who just doesn't know when to leave the dance floor. They won't respond to `queue:restart` or `queue:pause` commands (depending on which features are disabled). So keep an eye out for those rowdy workers!

Now, let's get this party started! 🥳🎉🎧️💃🕺️

 ## Keeping Your Queues Alive and Kickin' with Supervisor! 🎶🚀

In the thrilling world of production, your `queue:work` processes are like rock stars on stage - flashy, energetic, and often prone to sudden exits due to various reasons such as a stage-dive timeout or an overzealous `queue:restart` roadie. But don't worry! We've got a backup band in the wings ready to jump in at a moment's notice. Enter Supervisor, the ultimate process monitor and your new best friend in Linux land.

<a name="installing-supervisor"></a>

## Installing Supervisor: One Small Step for Laravel, One Giant Leap for Your Queues! 🌔️🚀

First things first, you've got to get Supervisor on your team. If it ain't installed yet, fear not! Installation is as easy as running a few commands (we won't ask you to do the worm though). For Ubuntu/Debian systems:

```
sudo apt-get install supervisor
```

For RedHat/CentOS systems:

```
sudo yum install supervisor
```

## Configuring Supervisor: The Sweet Harmony of Laravel and Supervisor 🎼🚀

Now that you've got Supervisor onboard, it's time to set up a sweet harmony between Laravel and our new buddy. Create a new configuration file for your application in the `/etc/supervisor/conf.d` directory using your favorite text editor:

```
sudo nano /etc/supervisor/conf.d/your-laravel-app.conf
```

Inside this file, you'll write a Supervisor "program" definition that tells it how to manage your `queue:work` processes. Here's an example of what that might look like:

```
[program:your_laravel_app]
processname=%(program_name)s-%(process_num)02d
command=php /path/to/artisan queue:work --queue=default --sleep=3 --tries=3
autostart=true
autorestart=true
user=forge
numprocs=8
redirect_stderr=true
stdout_logfile=/var/log/supervisor/your-laravel-app.log
```

Save the file and restart Supervisor to apply the changes:

```
sudo supervisorctl reread
sudo supervisorctl update
```

Now, sit back and enjoy the symphony of your Laravel queues being managed by Supervisor like a well-rehearsed orchestra. And remember, if one process decides to take an early bow, Supervisor will be there to call them back on stage! 🎶🚀

 Ahoy there, matey! Buckle up for an adventure in process management with Supervisor, the swashbuckling helper for Linux that's got your back when things go awry. You see, it'll keep a sharp eye on your `queue:work` processes and spring into action like Captain Hook when they take a plunge overboard!

To install this fine seadog aboard your Ubuntu ship, simply unleash the following command upon it:

```shell
sudo apt-get install supervisor
```

But hold yer horses, you seasoned scallywags! If the thought of configuring and managing Supervisor makes ye feel like a greenland whale lost at sea, fear not! Laravel Cloud awaits with its shimmering horizons. This all-inclusive platform will steer your queue workers through even the stormiest seas, so hop aboard and set sail for calmer waters!

🏴‍☠️🐳🌊

Wanna learn more? [Seek ye here](https://cloud.laravel.com)! 💣🔫🚀

 Alright, let's don the cape of command line superheroes and dive into the dazzling world of Supervisor configuration!

#### Configuring Your Very Own Superhero (Supervisor)

Our trusty sidekick, Supervisor, keeps his secret lair tidy in `/etc/superhero/conf.d`. This hideout is filled with manuals on how to keep your processes safe and sound. To create a dashing new config file for our Laravel Worker, let's whip up a `laravel-worker.ini`!

```ini
[program:laravel-worker]
process_name=%(superhero_alias)s's Sidekick #(%(process_num)02d)
command=php /home/forge/app.com/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
superhero_identity=forge
sidekick_count=8
redirect_stderr=true
logfile=/home/forge/app.com/worker.log
wait_before_death=60 minutes (because we're saving the universe here)
```

In this action-packed adventure, the `sidekick_count` directive will command Supervisor to deploy eight of our faithful `queue:work` sidekicks and keep tabs on them, automatically resurrecting the fallen if they succumb to defeat. Remember to tweak the `command` directive to align with your chosen queue connection and worker preferences.

> [!CAVEAT EMPTOR]
> Ensure that the `wait_before_death` value is more than the duration of your longest running job, lest Supervisor snuffs it out before it's had a chance to save the day!

<a name="starting-supervisor"></a>
Time to summon Supervisor with these incantations:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start laravel-worker
```

And that's all, folks! Now your Laravel Worker is under Supervisor's watchful gaze, ready to take on any queue-related catastrophes that may arise.

 Alrighty then! You've whipped up a Laravel configuration file, and now it's time to put on our capes and tights - we're about to summon the power of Supervisor!

But before we get started, let me give you a little rundown: Supervisor is like our trusty sidekick - always there to keep our processes in check.

To kick things off, it's time to update Supervisor's configuration with these magic incantations:

```shell
sudo supervisorctl reread

sudo supervisorctl update
```

But wait! We're not done yet - let's get these Laravel worker processes started, shall we?

```shell
sudo supervisorctl start "laravel-worker:*"
```

Now, don't go running off just yet! If you're curious about Supervisor and want to learn more, dive headfirst into the [Supervisor documentation](http://supervisord.org/index.html). I mean, who doesn't love a good superhero origin story? 😉

Oh, and in case you encounter some failed jobs (we've all been there), be sure to check out our article on <a name="dealing-with-failed-jobs"></a>Dealing with Failed Jobs for a little help from your friendly neighborhood Laravel community. Just remember: With great power comes great responsibility!

 Alright, let's dive into the world of failed jobs - where even superheroes need a backup plan! In Laravel land, queued jobs can occasionally flub their lines (or fail). But fear not, for we've got your back with some nifty features to help you pick up the pieces.

First off, you can set a job's maximum attempt limit using our handy-dandy `maximum tries` feature. Once a job has gone through this number of tries and still can't get it right, it'll be sent to the `failed_jobs` database table. Synchronous jobs that flop are handled immediately by your application and won't wind up in said table.

Worried you don't have a `failed_jobs` table? No problem! Run the `make:queue-failed-table` command, followed by `migrate`, and voilà, your table is ready to catch those misbehaving jobs!

When spinning up a queue worker, you can use the `--tries` switch on the `queue:work` command to set the number of attempts for a job. If you don't specify a tries value, a job will only try once or as many times as defined by its class's `Tries` attribute.

```shell
php artisan queue:work redis --tries=3
```

With the `--backoff` option, you can tell Laravel how long it should wait before trying a job again after an exception has occurred. By default, a failed job is immediately given another chance to shine on the main stage:

```shell
php artisan queue:work redis --tries=3 --backoff=3
```

If you'd like to customize the backoff time for each job individually, simply use the `Backoff` attribute in your job class:

```php
<?php

namespace App\Jobs;

use Illuminate\Queue\Attributes\Backoff;

#[Backoff(3)]
class ProcessPodcast implements ShouldQueue
{
    // ...
}
```

Fancy a more intricate backoff logic? Define the `backoff` method in your job class:

```php
/**
 * Calculate the number of seconds to wait before retrying the job.
 */
public function backoff(): int
{
    return 3;
}
```

Feeling extra ambitious? You can set an array of backoff values for "exponential" backoffs:

```php
<?php

namespace App\Jobs;

use Illuminate\Queue\Attributes\Backoff;

#[Backoff([1, 5, 10])]
class ProcessPodcast implements ShouldQueue
{
    // ...
}
```

And lastly, when it comes to cleaning up after failed jobs, there's always the trusty `failed` event. Catch it, process it, and move on – just like a true superhero! Happy job-wrangling! 😉

 [!ATTN!]
Are you tired of botched podcasts leaving a trail of chaos in their wake? Fear not, my dear Laravel warrior! This chapter is your knight in shiny armor, here to help you clean up after those pesky failed jobs and save the day.

First things first, let's define a `failed` method on our job class like so:

```php
<?php

namespace App\Jobs;

use App\Models\Podcast;
use App\Services\AudioProcessor;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Throwable;

class ProcessPodcast implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Podcast $podcast,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(AudioProcessor $processor): void
    {
        // Process uploaded podcast...
    }

    /**
     * Handle a job failure.
     * Remember, it's like when your favorite podcast skips an episode - this is where you fix things!
     */
    public function failed(?Throwable $exception): void
    {
        // Send user notifications of failure, revert any partially completed actions, or perform other damage control measures...
    }
}
```

Now, hold your horses! A word of caution before we proceed: when a job fails and you're about to jump into the `failed` method, remember that it's like entering a crime scene - any modifications you make to class properties within the `handle` method will have vanished by the time you arrive. So, don't be surprised if things look different than you expected!

A failed job isn't always one that encountered an unhandled exception. A job may also be considered failed when it has run out of its allocated attempts, or as we like to call it - "when it's had too many shots at redemption." These attempts can be consumed in three ways:

<div class="content-list" markdown="1">

- The job timed out (it was so engrossed in the podcast that it missed its cue).
- The job encountered an unhandled exception during execution (it dropped a deafening screech and died mid-job).
- The job was released back to the queue either manually or by a middleware (it got benched for further training).

</div>

If the final attempt fails due to an exception thrown during job execution, that exception will be passed to the job's `failed` method. However, if the job fails because it has reached the maximum number of allowed attempts, the `$exception` will be an instance of `Illuminate\Queue\MaxAttemptsExceededException`. Similarly, if the job fails due to exceeding the configured timeout, the `$exception` will be an instance of `Illuminate\Queue\TimeoutExceededException`.

 Alright, buckle up, Laravel fanatics! Let's dive into the world of failed jobs - the dark side of your shiny, sparkling application. But fear not, for we have a trusty Artisan command to guide us through this murky waters: `queue:failed`. Think of it as the Bat-Signal for broken jobs!

```shell
php artisan queue:failed
```

This command will spill all the beans about your failed jobs – job ID, connection, queue, failure time, and more. The job ID is like a magic wand to bring back the fallen, so if you spot a job with an ID of `ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece`, simply cast this spell:

```shell
php artisan queue:retry ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece
```

You can even summon multiple failed jobs at once if you're feeling extra magical:

```shell
php artisan queue:retry ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece 91401d2c-0784-4f43-824c-34f94a33c24d
```

Need to resurrect all the failed jobs in a specific queue? Just call out its name:

```shell
php artisan queue:retry --queue=name
```

And if you're dealing with an epic number of failed jobs, you can even retry them all with a simple command:

```shell
php artisan queue:retry all
```

Should the need arise to eliminate a failed job, we got you covered too! Use the `queue:forget` command for an individual job:

```shell
php artisan queue:forget 91401d2c-0784-4f43-824c-34f94a33c24d
```

> [!NOTE]
> When using Horizon, remember to use the `horizon:forget` command instead of the plain `queue:forget`. It's like a secret decoder ring for your failed jobs.

Finally, if you want to purge all the failed jobs from your `failed_jobs` table, the `queue:flush` command is here to help:

```shell
php artisan queue:flush
```

This command removes all failed job records from your queue. If you only want to delete jobs that are older than 48 hours, simply add the `--hours` option:

```shell
php artisan queue:flush --hours=48
```

Now that we've mastered the art of failed job management, let's go forth and conquer those pesky errors! 🥳🔥🚀

 ### Saving You from Model Mayhem! 🎬💔

In the captivating world of Laravel, things can get a little dramatic. Picture this: you're casting your Eloquent models into the queue for a red carpet premiere (aka processing), but disaster strikes before the curtains open! 🌟🚨 The model, once the star of the show, has mysteriously vanished, leaving you with a heart-wrenching `ModelNotFoundException` - a Laravel's version of an Oscar snub.

But fear not, dear developers! To save your jobs from becoming this year's Razzies contenders, we've got the perfect solution. Introducing the red carpet ready, glamorous, and oh-so-discreet `DeleteWhenMissingModels` attribute - think of it as Laravel's version of a trusty personal assistant.

Simply bestow this title upon your job class (it'll be thrilled, we promise), and whenever the model disappears without a trace while your job is waiting to make its grand entrance, our assistant will whisk it away, no fuss, no muss - just like that! 💔🚀

```php
<?php

namespace App\Jobs;

use Illuminate\Queue\Attributes\DeleteWhenMissingModels;

#[DeleteWhenMissingModels]
class ProcessPodcast implements ShouldQueue
{
    // ...
}
```

Remember, it's always a red carpet affair with Laravel! 🌹👠 Now that you know how to handle missing models, it's time to brush up on your pruning techniques for those failed jobs. More on that in the next section! 💍🎉

 ### Clearing Out the Coat Check (of Jobs)

When your botched job line is longer than a Queen song, it's time for some Spring Cleaning! Fret not, because we have our very own Coat Check Attendant - Artisan command. Here's how you call him:

```shell
php artisan queue:prune-failed
```

By nature, our attendant is quite stern, pruning any records in your application's `failed_jobs` table that have been gathering dust for over 24 hours. But if you think your job queue is more like a bustling New York City nightclub and need to limit the guest list, simply provide the `--hours` option:

```shell
php artisan queue:prune-failed --hours=48
```

This command will ensure that only the failed job records from the past 48 hours are allowed re-entry, leaving the older ones out in the cold. So bid adieu to those stale jobs and let them mingle with the tech ghosts!

 ### Hooray for Failed Job Storage in DynamoDB! (But only if you like fun challenges)

Ready to take your Laravel jobs on a wild space ride? Let's dive into the world of storing those pesky failed job records in none other than Amazon's [DynamoDB](https://aws.amazon.com/dynamodb)! But remember, just like trying to teach a cat to tango, it requires some manual effort.

You'll need to whip up your very own DynamoDB table to house all the failed job records, aptly named `failed_jobs`, or whatever fancy name you decide based on your application's `queue.failed.table` configuration value found in the queue settings.

But hold on there, partner! This `failed_jobs` table should have a couple of key components - pun intended:

- A string primary partition key named `application` that keeps track of your application's name, thanks to the `name` configuration value within the `app` settings.
- A string primary sort key named `uuid`. Because who doesn't love a good UUID?

And since you can store failed jobs for multiple Laravel apps using this very table, the `application` portion of the key will be your app's name in the DynamoDB key party. How fun is that?!

Before we get too carried away, make sure to install the AWS SDK so that your Laravel application can communicate with Amazon DynamoDB like old pals:

```shell
composer require aws/aws-sdk-php
```

Next up, it's time to set the `queue.failed.driver` configuration option's value to `dynamodb`. If you're following along at home, don't forget to define `key`, `secret`, and `region` configuration options within the failed job configuration array. These options will be used for that oh-so-important authentication with AWS. When using the `dynamodb` driver, the `queue.failed.database` configuration option is a no-go:

```php
'failed' => [
    'driver' => env('QUEUE_FAILED_DRIVER', 'dynamodb'),
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'table' => 'failed_jobs',
],
```

Now, let's get ready to rumble! Or, you know... failed jobs in DynamoDB! 🤘

 ### Tossing Failed Jobs Like a Hot Potato (But in a More Technical Sense)

Listen, buddy! If you're tired of babysitting those pesky failed jobs that can't seem to get their act together, Laravel's got your back. You can tell our system to chuck 'em out without even saying goodbye by setting the `queue.failed.driver` configuration option's value to... drumroll please... nothing! That's right, set it to null, like you're ghosting them.

Now, how do we break up with these jobs? You can do it via the `QUEUE_FAILED_DRIVER` environment variable:

```ini
QUEUE_FAILED_DRIVER=null
```

Just remember, this is a no-strings-attached deal. They're outta here, never to be seen again. Unless, of course, you decide to give them another chance. But hey, we won't judge! 👋🏃‍♂️

 ### Comedy Central Presents: Failed Job Events! 🎤🥁

Attention all comedy fans! If you're eager to create a comedic act that gets triggered when a job goes south, you've come to the right place. Let's learn how to use the `Queue` facade's `failing` method like a true stand-up star in Laravel 🎭🚀

First, let's pen down a hilarious routine that'll run when our job bombs out. We can do this by attaching a joke (closure, if you prefer the technical term) from the `boot` method of the ever-faithful `AppServiceProvider`.

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;
use Illuminate\Queue\Events\JobFailed;

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
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Queue::failing(function (JobFailed $event) {
            // Time for some jokes, eh? 🎭
            echo "Sorry about that, folks! Looks like I messed up a line or two. Let's try again!" . PHP_EOL;
            echo "Connection: {$event->connectionName}" . PHP_EOL;
            echo "Job: {$event->job}" . PHP_EOL;
            echo "Exception: {$event->exception}" . PHP_EOL;
        });
    }
}
```

Now, every time a job fails, you'll get a chance to crack up the audience with your witty remarks! 🤩🎤

<small><a name="clearing-jobs-from-queues"></a>PS: Want to clear some jobs from the queue? Well, that's a whole other comedy routine for another day. But hey, we'll save it for the encore! 😉</small>

 ## Queue Cleanup: A Tale of Two Commands (with a dash of humor!)

### Attention, Laravel Warriors!

When your battlefield is the [Horizon](/docs/{{version}}/horizon), never fear! The `horizon:clear` command is your trusty sword to slay jobs from the queues - not that `queue:clear`, which is more like a nerf dart gun compared to Horizon's broadsword.

### Clearing All Jobs From Default Queue (The Hero's Quest)

To vanquish all jobs on the default queue of your default connection, you can embark on this noble quest using the `queue:clear` Artisan command:

```shell
php artisan queue:clear
```

### Clearing Jobs from a Specific Connection and Queue (The Splitting of the Queues)

But what if you have jobs that demand separation? You can target specific connections and queues with precision by providing the `connection` argument and `queue` option:

```shell
php artisan queue:clear redis --queue=emails
```

### Warning! (A Cautionary Tale)

Clearing jobs from queues is only available for the SQS, Redis, and database queue drivers. So, if you're using a different driver, I'm afraid this tale won't aid ye much. Moreover, the SQS message deletion process can take up to 60 seconds, so jobs sent to the SQS queue up to 60 seconds after you clear the queue might also be deleted. So, timing is everything!

<a name="monitoring-your-queues"></a>
Now that you've learned how to clean your queues, it's time to monitor them and make sure they remain in tip-top shape! Happy Laravel-ing! 🏹🚀🎉

 ## Keeping Tabs on Your Queues (Without Getting a Headache!)

Ah, the sweet sound of success! But what happens when your queue starts to resemble a crowded highway during rush hour? With an unexpected surge in jobs, it could quickly become gridlocked, leaving poor jobs waiting in line for what feels like eternity. Fear not, Laravel's got your back with a friendly nudge (or a loud, digital honk) when things get too hectic!

To set up this helpful feature, you'll first want to schedule the `queue:monitor` command to run every 60 seconds (because who can wait any longer than that for exciting queue updates?). The command is happy to keep tabs on whatever queues tickle your fancy, along with a job count threshold of your choice:

```shell
php artisan queue:monitor redis:default,redis:deployments --max=100
```

Now, scheduling the command is just the beginning. To actually receive an alert when the queue's situation turns into a full-blown party, you'll need to listen for a little soiree called the `Illuminate\Queue\Events\QueueBusy` event. You can do this at your application's `AppServiceProvider` shindig:

```php
use App\Notifications\QueueHasLongWaitTime;
use Illuminate\Queue\Events\QueueBusy;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Notification;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Event::listen(function (QueueBusy $event) {
        // Let's send a friendly heads-up to dev@example.com, because who doesn't love a good surprise party?
        Notification::route('mail', 'dev@example.com')
            ->notify(new QueueHasLongWaitTime(
                $event->connectionName,
                $event->queue,
                $event->size
            ));
    });
}
```

<a name="testing"></a>
And just like that, you're now the proud owner of a queue monitoring system that can handle even the most unexpected job influxes! Remember to keep those queues flowing smoothly, and always party on, Laravel style!

 ## Laughin' Laver-bee Testing Time! 🐝🎶

When your code is chucking jobs like a frisbee champion, you might want Laravel to pretend it's caught them all - because who needs a real job when we can test the job's code directly and independently? Of course, when testing the job itself, just instantiate a job instance and yell "Handle that, buddy!" 🗣️

To ensure our tests don't get job-blocked (pun intended), you can use the `Queue` facade's `fake` method. Once you call this method, queued jobs will be as elusive as a unicorn on rollerblades. 🦄💫

```php tab=Pest-Party
<?php

use App\Jobs\AnotherJob as PartyPooper;
use App\Jobs\ShipOrder as PirateShip;
use Illuminate\Support\Facades\Queue;

test('arrrrgh, we can ship orders!', function () {
    Queue::fake(); // Let's get this party started! 🎉🥳

    // Hoist the anchor and set sail...

    // Assert the sea is empty (no jobs pushed)...
    Queue::assertNothingPushed();

    // Check if we set a course for 'queue-name'...
    Queue::assertPushedOn('queue-name', PirateShip::class);

    // Yo ho ho, check if the job was even boarded!
    Queue::assertPushed(PirateShip::class);

    // Arrrrgh, we've got two of them scurvy dogs on deck now? 🙀
    Queue::assertPushedTimes(PirateShip::class, 2);

    // Keep PartyPooper away from the job! 🚫👿
    Queue::assertNotPushed(PartyPooper::class);

    // Is there a magic trick on the queue? 🎩🕯️
    Queue::assertClosurePushed();

    // No more tricks, please! 🙅‍♂️
    Queue::assertClosureNotPushed();

    // The pirate ship's log says we've got three jobs aboard! ⚓️📜
    Queue::assertCount(3);
});
```

```php tab=PHPUnit-Fun-Time
<?php namespace Tests\Feature;

use App\Jobs\AnotherJob as PartyPooper;
use App\Jobs\ShipOrder as PirateShip;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

class SeaShantyTest extends TestCase
{
    public function test_arrrrgh_we_can_ship_orders(): void
    {
        Queue::fake(); // Shiver me timbers, let's get this party started! 🌪️🥳

        // Hoist the anchor and set sail...

        // Assert the sea is empty (no jobs pushed)...
        Queue::assertNothingPushed();

        // Check if we set a course for 'queue-name'...
        Queue::assertPushedOn('queue-name', PirateShip::class);

        // Yo ho ho, check if the job was even boarded!
        Queue::assertPushed(PirateShip::class);

        // Arrrrgh, we've got two of them scurvy dogs on deck now? 🙀
        Queue::assertPushedTimes(PirateShip::class, 2);

        // Keep PartyPooper away from the job! 🚫👿
        Queue::assertNotPushed(PartyPooper::class);

        // Is there a magic trick on the queue? 🎩🕯️
        Queue::assertClosurePushed();

        // No more tricks, please! 🙅‍♂️
        Queue::assertClosureNotPushed();

        // The pirate ship's log says we've got three jobs aboard! ⚓️📜
        Queue::assertCount(3);
    }
}
```

You can pass a closure to the `assertPushed`, `assertNotPushed`, `assertClosurePushed`, or `assertClosureNotPushed` methods to check if the job that passed your custom condition was pushed. If there's a match, prepare for the par-tay! 🥳

```php
use Illuminate\Queue\CallQueuedClosure;

Queue::assertPushed(function (PirateShip $job) use ($order) {
    return $job->order->id === $order->id; // Arr matey, it's the right order! 🌴🍹
});

Queue::assertClosurePushed(function (CallQueuedClosure $job) {
    return $job->name === 'validate-order'; // Is that the validation closure we smell? 🕵️‍♂️👨‍💼
});
```

 Alrighty, let's dive into the wild world of Laravel queues! 🐘🌪️

If you want to pull a fast one on your jobs without tripping up the rest of the circus, all you gotta do is spill the beans about which jobs should be faked to the `fake` method. Here's an example where we're gonna make it look like our ShipOrder job has been shipped twice, while letting all other jobs play their part:

```php tab=Pest Circus Show (with a touch of Pest)
The Great Trick: test('Orders can be shipped', function () {
    Queue::fake([
        "📦 Ship Order", // Classy, ain't we? 😉
    ]);

    // Time to perform the grand order shipping act...

    // Assert that our Ship Order job was pushed TWICE! 😱🎪
    Queue::assertPushedTimes("📦 Ship Order", 2);
});
```

```php tab=PHPUnit Circus Extravaganza (with a touch of PHPUnit)
The Great Trick: public function test_orders_can_be_shipped(): void
{
    Queue::fake([
        "📦 Ship Order", // Classy, ain't we? 😉
    ]);

    // Time to perform the grand order shipping act...

    // Assert that our Ship Order job was pushed TWICE! 😱🎪
    Queue::assertPushedTimes("📦 Ship Order", 2);
}
```

Now, if you want to fake all jobs but keep a select few in the loop, just use the `except` method like this:

```php
Queue::fake()->except([
    "📦 Ship Order", // Let's give 'em a pass! 🎫
]);
```

<a name="testing-job-chains"></a>
Testing Job Chains (cause who doesn't love a good chain reaction?)
-------------------------------

If you got multiple jobs chained together, don't worry your pretty little head! Just test 'em all at once. Here's an example of testing job chains:

```php tab=Pest Circus Show (with a touch of Pest)
Test of the Chain Reaction: test('Order processing chain works', function () {
    Queue::fake([
        "📦 Ship Order", // Kick things off! 👣
        "🎁 Generate Invoice", // Next up, invoicing fun times! 💸
        "📨 Send Email", // Now we're emailing the customers! 💌
    ]);

    // Perform order processing...

    // Assert that all jobs were pushed in this exact order! 🕵️‍♂️
    Queue::assertPushedOn([
        "📦 Ship Order", // Kick things off! 👣
        "🎁 Generate Invoice", // Next up, invoicing fun times! 💸
        "📨 Send Email" // Now we're emailing the customers! 💌
    ]);
});
```

```php tab=PHPUnit Circus Extravaganza (with a touch of PHPUnit)
Test of the Chain Reaction: public function test_order_processing_chain_works(): void
{
    Queue::fake([
        "📦 Ship Order", // Kick things off! 👣
        "🎁 Generate Invoice", // Next up, invoicing fun times! 💸
        "📨 Send Email", // Now we're emailing the customers! 💌
    ]);

    // Perform order processing...

    // Assert that all jobs were pushed in this exact order! 🕵️‍♂️
    Queue::assertPushedOn([
        "📦 Ship Order", // Kick things off! 👣
        "🎁 Generate Invoice", // Next up, invoicing fun times! 💸
        "📨 Send Email" // Now we're emailing the customers! 💌
    ]);
}
```

 Alright, let's dive into the whimsical world of Laravel job chains! 🎼🚀

### Groovin' with Job Chains 💃️🕺️

To test these groovy job chains, you'll want to tap into the `Bus` facade's faking abilities. The `Bus` facade's `assertChained` method is just like a disco ball reflecting the jobs - it ensures that your chain of jobs (disco moves?) has hit the dance floor. You can use it like this:

```php
use App\Jobs\RecordShipment;
use App\Jobs\ShipOrder;
use App\Jobs\UpdateInventory;
use Illuminate\Support\Facades\Bus;

Bus::startFaking(); // Turn on the disco lights! 💡✨

// ...

Bus::expectsTheChain([
    ShipOrder::class,
    RecordShipment::class,
    UpdateInventory::class
]).toHaveDanced(); // Check if your favorite dance crew performed their routine.
```

As you can see in the example above, the array of chained jobs can be an array of job class names, but it's also cool to use actual job instances. Laravel will make sure that these instances are from the same class and have the same property values as the chained jobs dispatched by your application:

```php
Bus::expectsTheChain([
    new ShipOrder,
    new RecordShipment,
    new UpdateInventory,
]).areAllPartners(); // Yep, they're all in this together! 🤝️💃️
```

You can also use the `assertDispatchedWithoutChain` method to ensure a job danced solo:

```php
Bus::expects(ShipOrder::class).toHaveDancedAlone(); // Don't forget to check if the spotlight was on them! 💫🔥
```

Now, get out there and test those groovy job chains! 🕺️💃️🌟✨

 Alright, Laravel coders! Time for a little chuckle while we delve into the world of chained jobs. 🚀🎧

#### Testing Chain Modifications (because who doesn't love a good chain reaction?)



Imagine you're producing a podcast and you've got a chain of tasks - processing, transcribing, optimizing, and releasing. Now, let's say you decide to add a new job to this existing workflow without disturbing the order (kinda like adding an extra drummer to a rock band without causing a cymbal chaos). That's what we call chaining jobs!

How do you test if your job has joined the right party? By using the `assertHasChain` method, of course! This nifty little tool helps verify that your job has the expected lineup of remaining jobs:

```php
$job = new ProcessPodcast; // Our new drummer

// Kick-off the show (er... job)
$job->handle();

// Check if our new drummer has found his place with the right band members:
$job->assertHasChain([
    new TranscribePodcast, // Singer
    new OptimizePodcast,   // Guitarist
    new ReleasePodcast,    // Bassist
    new SpontaneousStandupComic // Wait... what? This is a podcast, right? 🤔
]);
```

But hey, things don't always go as planned! What if you accidentally added too many drummers and now the mix sounds like a mess (er... your job chain is broken)? Don't worry, just use the `assertDoesntHaveChain` method to check that our poor job hasn't been saddled with an unwanted extra gig:

```php
$job->assertDoesntHaveChain(); // Make sure no one else has joined the band!
```

Now go forth and conquer those chained jobs, all while keeping a rhythm of fun and learning! 🎶🎉

 Alrighty then! Here's a jollier take on testing chained batches in Laravel:

#### Testing Chained Batches (aka the Job Chain Gang)


If your job chain (let's call it the "Chain Gang") [has a batch of jobs](#chains-and-batches), you can ensure that this convoy of chores aligns with your expectations by throwing in a `Bus::chainedBatch` definition within your jailbreak assertion:

```php
use App\Jobs\ShipOrder;
use App\Jobs\UpdateInventory;
use Illuminate\Bus\PendingBatch;
use Illuminate\Support\Facades\Bus;

Bus::assertChainGang([
    new ShipOrder, // Corralled and ready to work!
    Bus::chainGangBatch(function (PendingBatch $batch) {
        return $batch->jobs->count() === 3; // Makes sure the herd is just right.
    }),
    new UpdateInventory, // And off they go again!
]);
```

<a name="testing-job-batches"></a>
That's all folks! Now you know how to keep tabs on your job chain gang and make sure it's behaving itself. Happy wrangling! 🤠

 ### Laravel's Bus Stop: The Great Job Dispatch Showdown! 🚌📝

Welcome to the Bus Stop, where your favorite jobs get hitched together in a loveable, job-batched marriage. The `Bus` facade is here to help you ensure these matrimonial unions are going smoothly with its charmingly named methods! 😎 Let's dive right in, shall we?

First up: the `assertBatched` method! This little number lets you assert that a bunch of jobs (yep, job-batched, get it?) have been dispatched. The closure given to this method receives an instance of `Illuminate\Bus\PendingBatch`, which is like the wedding invitation to this joyous occasion. Use it to inspect the jobs within the batch:

```php
use Illuminate\Bus\PendingBatch;
use Illuminate\Support\Facades\Bus;

Bus::fake(); // Pretend we're in Las Vegas for a minute, OK?

// ...

Bus::assertBatched(function (PendingBatch $batch) {
    return $batch->name === 'Import CSV from the Motherland' && // Oh, baby! 🌈
           $batch->jobs->count() === 10; // And we thought weddings were expensive...
});
```

Next on our agenda: the `hasJobs` method. This is where we verify that the batch contains the expected jobs. It accepts an array of job instances, class names, or closures - just like a wedding guest list but with more coding and less champagne! 🥳

```php
Bus::assertBatched(function (PendingBatch $batch) {
    return $batch->hasJobs([ // It's a match made in heaven
        new ProcessCsvRow(row: 1),
        new ProcessCsvRow(row: 2),
        new ProcessCsvRow(row: 3),
    ]);
});
```

When using closures, the closure will receive the job instance. The expected job type will be inferred from the closure's type hint - just like how you can tell if your partner is a cat person based on their t-shirt! 🐱‍👓

```php
Bus::assertBatched(function (PendingBatch $batch) {
    return $batch->hasJobs([
        fn (ProcessCsvRow $job) => $job->row === 1, // We're just getting started...
        fn (ProcessCsvRow $job) => $job->row === 2, // ...with this whirlwind romance!
        fn (ProcessCsvRow $job) => $job->row === 3, // I do, I do, I doooo! 👰‍♀️🤵
    ]);
});
```

Now let's get to the countdown: you can use the `assertBatchCount` method to assert that a given number of batches were dispatched - kind of like saying "I do" three times in a row! 💍

```php
Bus::assertBatchCount(3); // It's a wedding, not a job interview; we don't need three offers. 😉
```

Last but certainly not least: `assertNothingBatched`. This method lets you assert that no batches were dispatched - perfect for those days when you just can't commit to anything more than Netflix and chill! 🍿📺

```php
Bus::assertNothingBatched(); // Sorry, job-batched marriage; we just weren't ready. 😅
```

And that's it, folks! We hope this little journey through the Bus Stop was both fun and informative - remember: always test your job batches, just like you should always proofread your wedding vows! 😜📝💍

 **Laravel's Jovial Job & Batch Banter**

Sometimes, you might find yourself in a pickle, wanting to test the flirtatious dance between a job and its parent batch. For instance, you may need to confirm if a job pulled a fast one on its batch by cancelling further processing. Fear not, dear developer, for help is at hand (or rather, in code).

To achieve this harmonious union, you'll want to bestow upon your job a stand-in batch using the `withFakeBatch` method, which, like a matchmaker, returns a charming couple - the job instance and the phony batch.

```php
[ $job, $batch ] = (new ShipOrder)->withFakeBatch();

$job->moonwalk(); // Just kidding! In Laravel, we call it handle()

$this->assertTrue($batch->isCancelled());
$this->assertEmpty($batch->getAddedList());
```

In this jolly scenario, the job takes center stage with a performance of `handle()`, and the batch receives applause if it confesses to being cancelled, and a standing ovation for an empty 'added' list. Ain't love grand?

 Alright, mate! Buckle up for a rollercoaster ride into the whimsical world of Laravel queues! 🎠🎢

When you find yourself in need of verifying that a job has either freed itself from captivity or performed a self-delete (like a digital hamster escaping its wheel or a virtual Elvis deciding it's time to leave the building), fear not, for Laravel's got your back! 🐭🕺

To test such extraordinary queue events, you'll want to conjure up your job like a magician pulling a rabbit from a hat. Do this by using the `withFakeQueueInteractions` method.

Once you've summoned your job, it's time to unleash it with the `handle` command! Just remember, once it's out there in the wild, you can use a variety of assertion methods to ensure everything went as planned:

```php
use App\Exceptions\CorruptedAudioException;
use App\Jobs\ProcessPodcast;

// Create your job with fake queue interactions
$job = (new ProcessPodcast)->withFakeQueueInteractions();

// Release the beast! Ahem, unleash it with 'handle' command
$job->handle();

// Now, verify its behavior:
$job->assertReleased(delay: 30); // Confirm it played hooky for a while
$job->assertDeleted(); // Check if it shuffled off this mortal coil
$job->assertNotDeleted(); // Make sure it didn't vanish without a trace
$job->assertFailed(); // Did it suffer a catastrophic error?
$job->assertFailedWith(CorruptedAudioException::class); // Was CorruptedAudioException the culprit?
$job->assertNotFailed(); // All good and well if it didn't fail
```

<a name="job-events"></a>
And there you have it, dear friend! You've now mastered testing queue interactions like a true Laravel maestro. So grab your popcorn, sit back, and enjoy the show! 🍿🎬

 ## Queue Shenanigans 🥳

If you're a party animal and your job is to process tasks one by one, Laravel's got your back with the `before` and `after` dance moves! Just shake your boot at the `Queue` [facade](/docs/{{version}}/facades) and let it rain callbacks like it's New Year's Eve in Vegas. 🎉

These callbacks are the life of the party, perfect for pulling off some fancy footwork like additional logging or cranking up the disco ball (dashboard stats). But remember, you'll want to call these moves from the `boot` method of a [service provider](/docs/{{version}}/providers) – think of it as your wingman helping you get ready for the night ahead.

For instance, let's use the swanky `AppServiceProvider` that comes with Laravel:

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Set up before we hit the dance floor!
     */
    public function boot(): void
    {
        // Register for some pre-game warm-up (before) and post-dance cool down (after)
        Queue::before(function (JobProcessing $event) {
            // Get all the deets like connectionName, job, and payload
            // You're now ready to boogie!
        });

        Queue::after(function (JobProcessed $event) {
            // Keep the party going with some after-action reports
            // You've just leveled up your dance floor game!
        });
    }
}
```

And if you're the kind of worker who prefers a little foreplay before getting down to business, use the `looping` method on the `Queue` [facade](/docs/{{version}}/facades) to set up some pre-fetch shenanigans. For example, you might register a closure to rollback any transactions left open by a previously failed job:

```php
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;

// Let's get this party started! (But clean up before we leave)
Queue::looping(function () {
    while (DB::transactionLevel() > 0) {
        DB::rollBack(); // Oops, better clean that mess!
    }
});
```

Happy queue-ing! 🥳💃🕺