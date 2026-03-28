 ## The Great File Adventure! 📚 🚀

Embark on a thrilling quest through the vast realms of digital storage with Laravel'sFile Management System (FMS)! Buckle up as we traverse local filesystems, Amazon S3 compatible galaxies, and more!

<a name="configuration"></a>
### Setting Up Camp 🏕️

Before we embark, let's get our gear in order. Here's a rundown of the essential equipment you'll need:

- [The Local Lodge](#the-local-lodge): Your trusty homestead for all local files.
- [The Public Tavern](#the-public-tavern): A cozy spot to store your public files (and make them accessible).
- [Driver Prerequisites](#driver-prerequisites): A list of necessities for your journey through various file realms.
- [Scoped and Read-Only Filesystems](#scoped-and-read-only-filesystems): Protect your files from unwanted intruders!
- [Amazon S3 Compatible Filesystems](#amazon-s3-compatible-filesystems): Explore the cosmos of cloud storage with Laravel's universal translator!

<a name="obtaining-disk-instances"></a>
### Gathering Your Team 🤝️

Once you've set up camp, it's time to assemble your team—the disk instances. You can summon them on demand or recruit a permanent crew:

- [On-Demand Disks](#on-demand-disks): Call upon your trusty knights whenever you need them!

<a name="retrieving-files"></a>
### Fetching Treasures 🏹

After setting up camp and gathering your team, it's time to collect those shiny treasures! Here's how to get 'em:

- [Downloading Files](#downloading-files): Grab your loot in various formats.
- [File URLs](#file-urls): Share your riches with friends using easy-to-remember links.
- [Temporary URLs](#temporary-urls): Grant access to your treasures for a limited time only!
- [File Metadata](#file-metadata): Get to know your treasures inside and out!

<a name="storing-files"></a>
### Stashing Your Booty 🔐

Now that you've got some treasures, it's time to find a safe place to store them:

- [Prepending and Appending To Files](#prepending-appending-to-files): Keep your notes organized with easy additions!
- [Copying and Moving Files](#copying-moving-files): Move or duplicate your treasures as needed.
- [Automatic Streaming](#automatic-streaming): Watch your treasures flow effortlessly into their new home.
- [File Uploads](#file-uploads): Gather more loot with simple file uploads!
- [File Visibility](#file-visibility): Control who can see your valuable treasures.

<a name="deleting-files"></a>
### Disposing of Unwanted Goods 🗑️

As you collect more treasures, it's essential to keep your camp tidy:

- [Deleting Files](#deleting-files): Clean up by getting rid of unwanted goods.

<a name="directories"></a>
### Organizing Your Camp 🏕️

With a growing collection of treasures, it's important to keep things organized:

- [Directories](#directories): Create sections for all your different types of loot!

<a name="testing"></a>
### Testing Your Gear ⚙️

Before you set off on your grand adventure, make sure everything's in working order:

- [Testing](#testing): Check your gear and ensure a smooth journey ahead!

<a name="custom-filesystems"></a>
### Customizing Your Journey 🛠️

Finally, customize your experience with the help of our friendly developer team:

- [Custom Filesystems](#custom-filesystems): Build the perfect expedition kit for your specific needs!

 Ahoy there, coders! Welcome to Laravel's File System Adventure, where we're about to embark on a journey powered by none other than the magical Flysystem (created by the one and only Frank de Jonge, aka the Leonardo da Vinci of PHP packages).

Laravel's integrated Flysystem is like having a Swiss Army knife for handling files, whether they reside in your trusty local machine, a distant SFTP server, or the mighty Amazon S3. It's a veritable buffet of file-wrangling capabilities!

But wait, there's more! The best part? Swapping between these storage options is as easy as changing channels on your TV remote—and just as painless when it comes to your API (which stays the same across all systems). Think of it like having multiple costumes in your superhero wardrobe, ready for action at a moment's notice! 🦸‍♂️🦸‍♀️

Now, buckle up and let's dive into the configuration section. <a name="configuration"></a> 🚀⚓️

 Alright, buckle up, cowboy! 🤠 In Laravel's Wild West of data management, you'll find yourself in `config/filesystems.php`, the town square where all your filesystem "herds" (disks) are managed. Each herd represents a specific wagon train (driver) and destination (storage location). Like a good old trail drive, we've got examples for each supported wagon train included, so you can customize your journey to suit your storage needs and cattle brand. 🐄

The `local` wagon train handles files stored right here on the server that runs our Laravel saloon (application), while the `sftp` wagon train is perfect for SSH key-based FTP transfers, a little like using your secret poker hand to move those cards around. The `s3` wagon train is your ticket to Amazon's cloud storage service – perfect for when you need to offload some of that hay to the Cloud Ranch.

> [!WARNING]
> You can round up as many herds (disks) as you please, and even have multiple herds using the same wagon train. But remember, cowboy, don't overstock the corral or you might run into some trouble! 🐴

 ### The Neighborhood File Guy 👨‍💼

When you enlist the help of our local file buddy, all tasks are performed within the bounds of your specified `hood`, which is determined by the `streetmap` in your `neighborhood config`. By default, this location is the secluded `Private Alley` (`storage/app/private`). So if you're looking to leave a note for your neighbors, here's how you might summon our local expert:

```php
Use the services of Illuminate\Support\Facades\Storage;

Storage::disk('local')->deliverToNeighbor('Private Alley', 'example.txt', 'Your friendly message');
```

Now, if you want to make that note publicly accessible for all your neighbors to see (like a friendly reminder for the garden party), you can use the Public Square driver instead:

<a name="the-public-disk"></a>

### The Town Crier 🗣️

If you'd like to have your messages broadcasted to all residents, consider enlisting the help of our town crier. All operations here are performed in the bustling heart of the city, i.e., the `Town Square` (configured in your `filesystems` file as `public`). Here's how you can call upon him:

```php
Use the services of Illuminate\Support\Facades\Storage;

Storage::disk('public')->put('example.txt', 'Public Announcement');
```

Now, everyone will be able to read your note hanging proudly on the town bulletin board! Remember, with great power comes great responsibility, so make sure those public announcements are worthwhile! 📢🌟

 Alright, let's get this party started! 🎉

### The Public Playground

The `public` playground in your Laravel app's config file is like the cool kid's locker room for files - you know, the ones destined to be shown off on the global web stage. By default, it uses the `local` driver and keeps its files neatly tucked away in `storage/app/public`.

If your `public` playground is using the `local` driver and you want these files to go viral, you should create a fancy schmancy shortcut (symbolic link) from the source directory `storage/app/public` to the target directory `public/storage`.

To create this magical shortcut, you can call upon the all-powerful `storage:link` Artisan command:

```shell
php artisan storage:link - because who doesn't love a good link party?
```

Once a file has been stashed away and the shortcut has been set up, you can whip up a URL to the files using the `asset` helper:

```php
echo asset('storage/file.txt'); - like a secret decoder ring for web addresses!
```

You can even configure more of these shortcuts in your `filesystems` configuration file. Each of the configured links will pop up when you run the `storage:link` command, like a digital magician pulling rabbits out of a hat.

```php
'links' => [
    public_path('storage') => storage_path('app/public'),
    public_path('images') => storage_path('app/images'),
],
```

The `storage:unlink` command can be used to break up with your configured symbolic links (when they become too clingy):

```shell
php artisan storage:unlink - because sometimes you need a clean break!
```

Now that you've got the hang of it, go forth and link away! 🤘💫

 Alrighty then! Buckle up, cowboy! We're about to delve into the wild world of Laravel S3 driver configuration. But before we set out on this digital frontier, let's make sure we're properly equipped!

#### AWS Credentials

First off, you'll need your trusty AWS credentials – a cowboy hat for the cloud. Head over to your Amazon Web Services (AWS) account and grab yourself an Access Key ID and Secret Access Key like you would a six-shooter and bandana.

#### Configuration File

Once you've got your virtual guns loaded, it's time to tame this wild beast called the `config/filesystems.php` configuration file. This here is your digital map for managing all the files in your Laravel application.

Add a new entry under the `drivers` array like you would stake a claim on some uncharted territory:

```php
's3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
],
```

Replace the `key`, `secret`, `region`, and `bucket` placeholders with your very own AWS credentials. It's like personalizing a lasso!

#### Database Configuration

Now, you need to let Laravel know which AWS S3 driver it should use when dealing with files. This requires a quick trip to the `config/database.php` configuration file. Find the `default` connection array and add the new driver under the `url` key:

```php
'urls' => env('APP_URL'),
'connections' => [
    // ...
    's3' => [
        'driver' => 's3',
        'bucket' => env('AWS_BUCKET'),
        'region' => env('AWS_DEFAULT_REGION'),
    ],
],
```

Once again, replace the `bucket` and `region` placeholders with your AWS credentials. You can consider this setting up camp in the cloud!

And there you have it! Your Laravel application is now ready to tango with Amazon S3 like a pro cowboy! Just remember to keep those virtual horses well-fed (i.e., update your dependencies) and you'll ride off into the sunset of efficient file management. Happy trailblazing!

 Alrighty then! Let's get this Laravel S3 party started, shall we? 🎉

First things first: You gotta hitchhike your way to the Flysystem S3 neighborhood by inviting it over via Composer, the coolest package manager in town. Here's how you do it:

```shell
composer require league/flysystem-aws-s3-v3 "^3.0" --with-all-dependencies
```

Once you've got the right Flysystem S3 package for the job, it's time to get your S3 disk configuration squared away. Head on over to `config/filesystems.php`, your digital Swiss Army knife of configuration files. Here, you'll want to make sure your S3 info and credentials are all set up like a boss using these environment variables that the `config/filesystems.php` file knows on first name basis:

```ini
AWS_ACCESS_KEY_ID=<your-key-id>
AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=<your-bucket-name>
AWS_USE_PATH_STYLE_ENDPOINT=false
```

These environment variables are like the secret handshake with AWS CLI, so they'll make sure your Laravel and S3 can hang out without any awkwardness. 🤝🎉

For those of you who prefer convenience over everything else (and who doesn't?), these environment variable names match the naming convention used by the legendary AWS CLI, so you're in good company!

 Alrighty then! Let's dive into the world of FTP drivers – because who doesn't love a good dance with acronyms? Before we get started, you'll need to do a little Composer waltz:

```shell
composer require league/flysystem-ftp "^3.0"
```

Just remember, it's like asking your date to the prom – but instead of corsages and tuxedos, we're dealing with fancy Laravel packages!

Now, while Laravel's Flysystem integrations play well with FTP (we can just imagine them sipping martinis at the bar), there isn't a sample configuration included in the default `config/filesystems.php` file – talk about being left hanging at the punch bowl. But don't you worry, we got your back!

For those who need to configure an FTP filesystem, here's a nifty example configuration that will have you dancing like Fred Astaire:

```php
'ftp' => [
    'driver' => 'ftp', // It's like saying "hey! let's talk FTP!"
    'host' => env('FTP_HOST'), // The address of the FTP server, in case you were wondering where it lives
    'username' => env('FTP_USERNAME'), // Your username to log in (just like your Instagram handle)
    'password' => env('FTP_PASSWORD'), // The secret password to gain access (like the combination to a fortune cookie)

    // Optional FTP Settings...
    // 'port' => env('FTP_PORT', 21), // In case you're feeling extra-porty (default is 21)
    // 'root' => env('FTP_ROOT'), // Where to start your dance on the server (default is the home directory)
    // 'passive' => true, // Use passive mode for FTP transfers if you're feeling a little shy
    // 'ssl' => true, // Enable SSL encryption – because security is fashionable!
    // 'timeout' => 30, // How long to wait before giving up (in seconds)
],
```

And just like that, you've danced your way into the world of FTP configuration with Laravel! Now go forth and conquer those filesystems! 🕺🏻🎉

 Alrighty, let's dive into the SFTP driver world! First things first, you'll need to whip out your composer skills and summon the Flysystem SFTP package like so:

```shell
composer require league/flysystem-sftp-v3 "^3.0"
```

Now that you've got the magic dust, Laravel's integration with SFTP is as smooth as a baby koala on a bamboo leaf! However, our default `config/filesystems.php` file doesn't come with a pre-made SFTP recipe. So, if you want to bake your own SFTP filesystem, here's a tasty example:

```php
'sftp' => [
    'driver' => 'sftp', // We're cooking with gas now!
    'host' => env('SFTP_HOST'),

    // Authentication settings...
    'username' => env('SFTP_USERNAME'),
    'password' => env('SFTP_PASSWORD'),

    // SSH key-based authentication...
    'privateKey' => env('SFTP_PRIVATE_KEY'),
    'passphrase' => env('SFTP_PASSPHRASE'),

    // File / directory permissions...
    'visibility' => 'private', // Like a secret squirrel, files get 0600 permissions.
    'directory_visibility' => 'private', // Directories get 0700 permissions, like a hidden treasure chest.

    // Optional SFTP Settings...
    // You can even customize the host fingerprint, maximum tries, timeout, and more!
]
```

Remember to set your environment variables for all those secret ingredients! Now go forth and conquer the SFTP filesystem like a true digital alchemist. Happy coding, matey! 🦁⚓️🚀

 ### The Prefix Game and the Iron Curtain Filesystem

Ready for a wild ride through the world of Laravel storage? Buckle up!

First off, let's talk about Scoped disks. These bad boys allow you to create a filesystem that slaps a custom prefix on every path, automatically! You might be thinking, "Where do I sign up?" Well, first things first, you'll need to install an extra Flysystem package using Composer. It's like adding a secret sauce to your storage mix:

```shell
composer require league/flysystem-path-prefixing ^3.0
```

Once that's out of the way, creating a scoped filesystem disk is as easy as pie (or perhaps more accurately, as simple as renaming directories). All you have to do is define a new disk using the `scoped` driver and specify your desired prefix:

```php
's3-videos' => [
    'driver' => 'scoped',
    'disk' => 's3',
    'prefix' => 'path/to/videos',
],
```

Now, every time you perform a file operation using your new scoped disk, it'll be like a fun game of Telephone with your files—they'll all have the specified prefix added to them!

Next up, we've got Read-only disks. These are the ultimate party poopers when it comes to write operations. You know those friends who always ruin the fun by saying "no"? That's what these disks do to your filesystem. But hey, sometimes you need that friend to keep things in order!

Before you can start using the `read-only` configuration option, you'll need to install another Flysystem package:

```shell
composer require league/flysystem-read-only ^3.0
```

After that, it's as easy as adding the `read-only` configuration option to one or more of your disk's configuration arrays:

```php
's3-videos' => [
    'driver' => 's3',
    // ...
    'read-only' => true,
],
```

Now, when you try to write something to this disk, it'll be like trying to pour water into a colander—it just won't work! But hey, at least your data will still be safe and sound on the Iron Curtain Filesystem. Happy coding!

 ### Cosmic Cloud Locker Rooms 🔑🛄️

By the hair on my RoboCop's head, your Laravel app comes equipped with a swanky disk setup for the S3 drive! But fear not, this isn't just a ticket to Amazon's S3 shindig; it's also your golden ticket to dance with any service that can pass as S3's prom date. That includes the likes of RustFS (the lumberjack's favorite), DigitalOcean Spaces (where things aren't just _digital_, they're oceanic!), Vultr Object Storage (where storage is as tough as their virtual servers), Cloudflare R2 (Cloudflare's secret underground rave), and Hetzner Cloud Storage (because who doesn't love a German tech party?).

Once you've suited up and flashed your credentials, all that's left is to update the value of the `endpoint` configuration option. This puppy's value usually gets defined by the `AWS_ENDPOINT` environment variable:

```php
'endpoint' => env('AWS_ENDPOINT', 'https://rustfs:9000'),
```

<a name="obtaining-disk-instances"></a>
### Obtaining Disk Instances 🎠

Now, just like a magician doesn't reveal his secrets, we won't spill the beans on how to get these disk instances. But let's just say it's as simple as waving a wand (or typing a command) and *poof*, your disk instance appears! 🎩✨

 Alrighty, let's dive into the wild world of Laravel's file management! 🌲🐯

First off, meet your new best friend: the `Storage` facade. It's like the Swiss Army knife of disk operations. You can use it to wrangle any of your configured disks - talk about versatility! 🤹‍♂️

Let's say you want to save a user's avatar, but not on just any disk... No, no. We're talking about the default disk here. So, to store that avatar, all you gotta do is:

```php
use Illuminate\Support\Facades\Storage;

// "Who's gonna save our memories?" - Storage facade, probably
Storage::put('avatars/1', $content);
```

But what if your application is a bit more, ahem, polyamorous and interacts with multiple disks? Fear not! The `Storage` facade comes equipped with a trusty sidekick: the `disk` method. Use it to work with files on a specific disk:

```php
// "But what about my stuff on S3?" - your other disk, obviously
Storage::disk('s3')->put('avatars/1', $content);
```

And if you're thinking, "But what if I have more disks than a storage warehouse?" Then let me introduce you to the on-demand disks feature - it's like having a whole team of Storage helpers at your beck and call! 🤖💪

 ### Whip up Disks on the Fly! 🍳⚙️

Ever found yourself in a pickle, needing a disk but lacking the proper ingredients (er, configuration) in your Laravel kitchen's `filesystems` recipe book? Fear not! In our magical, programmatic bake-off, you can conjure up a fresh disk on demand with just the right seasoning of configuration. How, you ask? By casting a spell upon the mighty `Storage` sorcerer's apprentice and presenting it with an array of tantalizing, custom configurations:

```php
use Illuminate\Support\Facades\Storage; // Don your pointy hat 🧙‍♂️

// Here be dragons and directories! Unleash a disk by summoning the $disk variable...
$disk = Storage::build([
    'driver' => 'local', // Our base for this baking adventure, 'tis called 'local' 🏠
    'root' => '/path/to/root', // The royal road to our new disk domain 🗺️
]);

// Now that we've baked the disk, let's add an image for flavor! 📸
$disk->put('image.jpg', $content); // A touch of 'content' and voila! Our masterpiece is born ✨
```

Bon appétit, dear developer! Now you can whip up disks like a boss, without having to wait for your `filesystems` recipe book to catch up. Happy baking! 🍰🎉

 Alright, buckle up, coding cowboys and codettes! Today we're diving into the wild west of Laravel file handling, where you can wrangle files like a pro. Let's start with the `get` method, your trusty steed for galloping through data-filled landscapes.

```php
$image = Storage::get('file.jpg');
```

This right here is like lassoing a coyote and pulling out its furry contents. The raw string of the file you just snagged? That's your prize, partner!

Now, if your file happens to be a JSON cowpoke, you can use the `json` method to decode it, making it as tame as a house cat:

```php
$orders = Storage::json('orders.json');
```

If you're curious about whether a specific file is still hanging around the 'ranch', fear not! The `exists` method is there to give you a yes or no answer:

```php
if (Storage::disk('s3')->exists('file.jpg')) {
    // The file ain't gone yet, pardner!
}
```

But what if the file got lost between the saloons? Worry not! With the `missing` method, you can check if a file skedaddled off:

```php
if (Storage::disk('s3')->missing('file.jpg')) {
    // Time to send out a search party!
}
```

That's all, partner! Now go forth and manage your files like the digital sheriff they deserve. Yeehaw! 🤠🐴🎵

 ### Unleashing Downloading Frenzy!

Ahoy there, coding pirates! Prepare to set sail on a sea of files as we dive into the exciting world of Laravel downloads!

First off, the `download` method is like a magic spell that transforms your browser into a mighty downloading beast. This enchantment works by creating a response that'll make your user's browser grab the file at the specified path and stow it away on their ship (computer).

```php
// Basic download, ye olde way:
return Storage::download('file.jpg');

// If you fancy customizing the filename or adding a swashbuckler's hat full of headers...
return Storage::download('file.jpg', $name, $headers);
```

The `$name` variable is the swashbuckling name that the user will see as their prize upon downloading the file—a vital detail for those who like to keep track of their booty! And, if you're feeling particularly daring, you can pass an array of headers using the `$headers` variable. This allows you to add extra swagger and finesse to your humble download file.

So there you have it, mateys! The magic of Laravel downloads in a fun-filled, nautical tale format. Now go forth and conquer those downloads like a true pirate king! 🏴‍☠️🐳

 Alrighty then! Let's dive into Laravel's File URLs section, shall we?

First off, meet the `url` method - your new BFF when you need a URL for a particular file. If you're using the local driver, it'll slap on a '/storage' before the file path and serve up a friendly relative URL. If S3 is more your style, it'll whip up a swanky fully-qualified remote URL for ya.

```php
use Illuminate\Support\Facades\Storage;

$url = Storage::url('file.jpg'); // It's like magic, but without the rabbit!
```

Now, if you're going local, remember to stash your accessible files in the `storage/app/public` directory - it's like your cool underground club where everyone can see whatcha got! Also, don't forget to create a symbolic link at `public/storage` pointing towards the aforementioned cool underground club.

> [!ATTENTION]
> When using the local driver, beware that the `url` method doesn't URL encode the return value. So, name your files like you mean it – valid URLs only, please!

Oh, and if you fancy customizing your URL host, click [here](#url-host-customization)! It's like a secret backstage pass to URL heaven!

 Ahoy there, Laravel swashbucklers! Ever found yourself in a pickle when the URLs generated by the `Storage` facade just weren't pirate-friendly enough? Fear not, me hearty! I've got ye covered with some scurvy secrets on URL host customization.

First off, if you fancy altering the anchor for yerURLs, ye can sprinkle a dash of magic in the `url` option within the disk's configuration array:

```php
'Skeleton Bay' => [
    'driver' => 'local',
    'root' => storage_path('app/public'),
    'url' => env('YOUR_PIRATE_DOMAIN').'/treasure',
    'visibility' => 'public',
    'throw' => false,
],
```

In this case, we've named our disk as Skeleton Bay and pointed it to the rightful location of our loot. Just remember to replace `YOUR_PIRATE_DOMAIN` with your actual piratey domain. Arr matey!

Now that ye have yer customized URLs, ye might be wondering how to serve up temporary links for sharing treasures without giving away the whole map. Well, buckle up, mateys! You can achieve this through the use of the Temporary Url Helper method (available since Laravel 5.6).

Here's a snippet for that:

```php
use Illuminate\Support\Facades\Storage;

$filePath = 'images/plundered_chest.jpg';
$temporaryUrl = Storage::temporaryUrl($filePath, now()->addMinutes(60));

echo "<a href='{$temporaryUrl}'>Check out our plunder!</a>";
```

In this example, we're generating a temporary URL for an image of a plundered chest that expires in 60 minutes. When someone clicks on the link, they'll get to gaze upon our hard-earned loot without causing any mayhem or mutiny among me crew! Arrrr!

That should do it, mateys! Happy customizing and may your URLs never be too landlocked again!

 ### Time-Limited Linky-Links! 🚀

Get ready to party like it's 1999 (for a maximum of 5 minutes) with our `time-limited linky-links` feature! Using the `temporaryUrl` method, you can create ephemeral URLs for files stashed away using the `local` and `s3` storage drivers. Just provide it with a file path and a time-traveling `DateTime` instance that sets the expiration date:

```php
use Illuminate\Support\Facades\Storage;

$url = Storage::temporaryUrl(
    'file.jpg', now()->addMinutes(5) // Who needs a DeLorean when you have PHP? 😎
);
```

<a name="enabling-local-temporary-urls"></a>
And remember, if you're wondering where your files went after the party, they'll still be safe and sound in their original storage locations—but don't forget to dance around the room a bit before the music stops! 💃🏽🕺🏽

 Alright, let's get this party started! If you were developing your Laravel app before the cool kids introduced temporary URLs to the `local` driver, no worries! You can enable local temp URLs with just a smidgen of PHP code. Here's a step-by-step guide that's easier than explaining knitting to a fish:

1. Navigate to your computer's secret stash known as `config/filesystems.php`. It's like the key to your storage treasure chest!

2. Look for the `local` disk configuration array and find the section that resembles a lost explorer's map:

```php
'local' => [
    'driver' => 'local',
    'root' => storage_path('app/private'),
    'throw' => false, // That's where you were supposed to be!
]
```

3. Now it's time for the grand finale: add `serve` option to this array like a cherry on top of your sundae. Set its value to true (because who doesn't love truth and temp URLs?):

```php
'local' => [
    'driver' => 'local',
    'root' => storage_path('app/private'),
    'serve' => true, // Ta-da! You've just enabled local temporary URLs.
    'throw' => false,
],
```

And there you have it! Local temp URLs are now active in your application. Now go forth and create some temporary masterpieces without worrying about exposing your storage files to the wild internet!

 Alright, buckle up, coders! If you find yourself in a pickle and need to spice up your S3 request with some extra parameters (like a secret sauce on a burger), fear not! Just pass an array of these swanky parameters as the third argument to the `temporaryUrl` method.

```php
$url = Storage::temporaryUrl(
    'file.jpg', // Our main course
    now()->plus(minutes: 5), // Expires in 5 minutes, just like a New Year's resolution
    [
        'ResponseContentType' => 'application/octet-stream', // Dressing up the file with the right outfit (Mime type)
        'ResponseContentDisposition' => 'attachment; filename=file2.jpg', // Wrapping it up with a fancy name tag - file2.jpg
    ]
);
```

Now you can customize your temporary URLs like a pro, making sure your files are always served with the right mix of style and technical wizardry! 🎉🍔🎉

 #### Unleash the Chameleon in Your Storage Disks!

Ever wished your storage disks could blend in with your unique application environment? Well, wish no more! With Laravel's `buildTemporaryUrlsUsing` method, you can customize how temporary URLs are created for a specific disk like a modern-day chameleon. This superpower comes handy if you're dealing with a controller that's got your files downloading faster than a cheetah on espresso!

But remember, this isn't just a magic trick; it should be performed elegantly in the `boot` method of a service provider:

```php
<?php

namespace App\Providers;

use DateTime;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Step right up, folks! Witness the marvel of customizing temporary URLs!
     */
    public function boot(): void
    {
        // Cue the drumroll...
        Storage::disk('local')->transformIntoTempURLChameleon(function (string $path, DateTime $expiration, array $options) {
            // Ta-da! Here's our temporary signed route
            return URL::temporarySignedRoute(
                'files.download',
                $expiration,
                array_merge($options, ['path' => $path])
            );
        });
    }
}
```

And there you have it! Now your local disk knows a thing or two about temporary URL magic tricks, making downloading files as smooth as silk. Don't forget to impress your friends at the next PHP circus!

 Alright, let's get this party started! 🎉

#### Temporarily Rad Upload Links (AKA TRULs)

> [!ATTENTION]
> Creating temporary upload links is only for the cool kids using the `s3` and `local` drivers.

So, you're trying to generate a time-limited link that lets your client-side application drop off files at our place like a surprise party delivery? Well, we got just the tool for you! 🥳 The `temporaryUploadUrl` method is that tool! This method takes a file name and a time when the link should self-destruct, then returns an exciting package containing the upload URL and headers to include in your upload request:

```php
use Illuminate\Support\Facades\Storage;

list($url, $headers) = Storage::temporaryUploadUrl(
    'file.jpg', now()->addMinutes(5) // Party starts in 5 minutes! 🎉
);
```

This method is super handy for serverless events that require your client-side application to skip the queue and go straight to the cloud storage VIP room, like Amazon S3 (the coolest kid on the block). 🌟

<a name="file-metadata"></a>
Now, weren't those TRULs a blast? Happy uploading! 🚀🎉

 ### Cosmic File Facts

Diving beyond just reading and writing, Laravel can also be your astrophysicist at parties, doling out trivia about files themselves! Ever wondered the weight of that cute cat pic you've been hoarding? The `size` method has got you covered, measuring it in bytes:

```php
use Illuminate\Support\Facades\Storage;

$weightInBytes = Storage::size('cat-paw-print.jpeg');
```

Or if you're more of a historian, the `lastModified` method will tell you when that file was last updated - in UNIX time, naturally:

```php
$timeStamp = Storage::lastModified('cat-paw-print.jpeg');
```

And for those intellectual types who like to know the DNA of their files, the `mimeType` method will reveal a file's MIME type - because you just can't trust them without a label:

```php
$fileDNA = Storage::mimeType('cat-paw-print.jpeg');
```

<a name="file-paths"></a>
Now, let's get to the juicy part! You can even access files across galaxies using those intricate file paths (don't forget your warp drive). Stay tuned for that adventure... 🛸🚀📚

 Alright, buckle up, code cowboys and codettes! Let's delve into the mystical world of Laravel file paths - where unicorns frolic amongst the servers and dragons guard the storage units.

First off, you've got yourself a `path` method that works like a trusty compass in this digital wild west. Use it to find the location of any file, whether it's hidden deep in your local filesystem or stashed away in an S3 bucket like a long-lost treasure.

```php
use Illuminate\Support\Facades\Storage; // because you don't want to get lost in the wilderness without a map!

$path = Storage::path('file.jpg'); // This magical line will guide you to your desired digital hideout!
```

Now, if you're using the local driver (which is like riding a trusty old horse), this will return the absolute path to the file - think of it as the GPS coordinates to your secret stash. But if you fancy yourself more of an astronaut and opt for the `s3` driver, this method will give you a relative path to the file in the S3 bucket – kind of like knowing which row and column your booty is on in a spreadsheet. 🚀🌟

 Ahoy there, code pirates! Sail the seas of data management with Laravel's trusty `put` method! This nautical gem is your go-to for storing file contents on a disk - imagine it as your trusty treasure chest. But unlike a real one, this one won't get filled by parrots or hidden maps!

```php
use Illuminate\Support\Facades\Storage;

// Hoist the anchor of unknown data and set sail for 'file.jpg' with $contents!
Storage::put('file.jpg', $contents);

// If you've got a PHP resource instead, fear not! Just let it ride on the good ship put!
Storage::put('file.jpg', $resource);
```

Remember, mates, all file paths must be specified relative to the "root" location configured for the disk – think of it like marking your treasure map with an 'X' that points to Skull Island. Keep this in mind, or ye might end up in Davy Jones' Locker of misdirected files!

Yarrrr, now you've got the hang of stowing away digital booty! Keep exploring the vast oceans of Laravel with us! (But remember to keep the real parrots at home...)

 Alrighty, let's dive into the world of Laravel file handling, where every hero needs a reliable sidekick – your hard drive! 💾

First off, when our superhero `put` method (the strong, silent type) encounters a pickle trying to save a file on disk, it'll just shrug and return a big fat `false`. Remember, it's not you, it's the pickle.

```php
if (! Storage::put('file.jpg', $contents)) {
    // Oh dear! The pickle foiled our attempt to save the file on disk...
}
```

Now, if you're one of those caped crusaders who can't handle a little failure, you might want to give our trusty sidekick, `League\Flysystem\UnableToWriteFile`, a call. To do that, define the `throw` option within your filesystem disk's configuration array:

```php
'public' => [
    'driver' => 'local',
    // ...
    'throw' => true,
],
```

Once enabled, when write operations fail (because let's face it, not every villain gets caught on the first try), the `put` method will holler for our sidekick and throw an instance of `League\Flysystem\UnableToWriteFile`. You'll catch it with a simple try-catch block.

```php
try {
    // Your write operation here!
} catch (\League\Flysystem\UnableToWriteFile $e) {
    // The villain got away again... But at least we tried!
}
```

So there you have it, folks! Embrace the adventure of Laravel file handling and remember to always let your exceptions shine. Happy coding! 🚀💻🎉

 Ah, dear coder! Let's take a jolly journey into the world of Laravel file manipulation, shall we? Buckle up, as we delve into the captivating realms of prepending and appending!

### Prepending and Appending To Files (or, 'The Art of Beginnings and Endings')

Ever found yourself yearning to add some sparkling wit at the start or end of a file? Fear not, for Laravel grants you that power with its enchanting `prepend` and `append` methods!

```php
Welcome, dear files! Let's give you a makeover:
Storage::prepend('file.log', 'Prepended Text');

And now, the grand finale! Add some flair to your file's end:
Storage::append('file.log', 'Appended Text');
```

Don't forget, my good friend, that these enchantments work their magic only after you've cast them on a file named 'file.log'. Now, go forth and charm those files with your magical Laravel incantations! 🧙‍♂️✨

 Alright, buckle up, data cowboys! Let's dive into Laravel's file-wrangling fun zone where we tackle the wild west of disk operations with style and panache.

First off, we've got the `copy` method, a lasso that snags an existing file (let's say it's named "old/file.jpg") and hurls it over to a fresh new home ("new/file.jpg"). It's like moving houses, but with less cardboard boxes and more pixels!

```php
Storage::copy('old/file.jpg', 'new/file.jpg');
```

But wait, there's more! Introducing the `move` method, a modern-day time traveler that doesn't just copy files but also renames or relocates them to an entirely different neck of the woods:

```php
Storage::move('old/file.jpg', 'new/file.jpg');
```

That's right, you can now rename and move files like a boss without breaking a sweat. And just like that, your cowboy coding skills are on point! So put on those ten-gallon hats, grab your lasso (or keyboard), and let the file wrangling begin!

 Alright, buckle up, coders! Let's dive into the thrilling world of automatic streaming in Laravel land. This feature is like a memory diet for your app, reducing usage as if you've been hitting the gym extra hard.

To get started, you can harness the mighty `putFile` or `putFileAs` methods. They're like the superheroes of file transfers, ready to swoop in and save the day (or your storage location). These methods accept either an `Illuminate\Http\File` or `Illuminate\Http\UploadedFile` instance, and voila! The file will magically stream itself to your chosen destination.

```php
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

// Auto-generating a unique filename for you...
$path = Storage::putFile('photos', new File('/path/to/photo')); // No more "File Not Found" errors!

// If you prefer to name your files like a boss...
$path = Storage::putFileAs('photos', new File('/path/to/photo'), 'photo.jpg'); // Because who needs a unique filename, right?
```

But wait, there's more! The `putFile` method has a few hidden talents up its sleeve. First off, we only specified a directory name, not a filename. By default, it will generate a unique ID for the filename (because who doesn't love a good mystery?). It even examines the file's MIME type to determine the extension (we're talking about a method with super-powers here!). The method also returns the path to the file, allowing you to store it in your database like a digital treasure map.

The `putFile` and `putFileAs` methods are not only smart but also considerate. They accept an argument that lets you specify the "visibility" of the stored file. This is especially useful if you're storing files on a cloud disk like Amazon S3, and you want the world to access them through generated URLs:

```php
Storage::putFile('photos', new File('/path/to/photo'), 'public'); // Making your photos publicly accessible - just like a digital Times Square!
```

Now that you know the secrets of the `putFile` method, go forth and conquer your storage woes with style and panache!

 ### Alien Abduction Archive

In cosmic web applications, one of the most frequent missions for data storage is storing abductee selfies and top-secret documents. Luckily for us intergalactic explorers, Laravel makes it as easy as navigating through a wormhole to store those uploaded files using the `store` method on an extraterrestrial file instance. Call the `store` method with the destination you'd like to beam the uploaded file:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlienSelfieController extends Controller
{
    /**
     * Update the selfie for the abductee.
     */
    public function update(Request $request): string
    {
        $beamPath = $request->file('selfie')->store('selfies');

        return $beamPath;
    }
}
```

Now, there are a few crucial things to remember about this example. Note that we only specified a folder name, not a filename. By default, the `store` method will generate an alien code to serve as the filename. The file's extension will be determined by examining the file's MIME type, just like old-school Earth filing systems! The path to the file will be returned by the `store` method so you can store the path, including the generated alien code, in your intergalactic database.

You may also call the `putFile` method on the `Storage` facade to perform the same cosmic file storage operation as the example above:

```php
$beamPath = Storage::putFile('selfies', $request->file('selfie'));
```

<a name="specifying-a-file-name"></a>
Just in case you're feeling extra terrestrial, you can specify a custom filename using the `storeAs` method:

```php
$beamPath = $request->file('selfie')->storeAs('selfies', 'alien_selfie.' . $request->file('selfie')->guessExtension());
```
In this example, we use the `guessExtension` method to determine the file's extension. Now you can find our friendly abductee's selfie under "alien_selfie" in the "selfies" folder. Good job, human! Keep up the excellent work on interstellar web development! 🚀🛸🎉

 Alright, let's dive into the world of file management in Laravel Land! If you fancy giving your files a custom name instead of letting the system assign one for you, fear not! We've got two magical methods that can do just that - `storeAs` and `putFileAs`.

First off, the enchanting `storeAs` spell! This bewitching incantation requires three arguments: the path, a filename (or title if you will), and an optional disk. You'll find it in your trusty Request object, hidden amongst the bubbling cauldron of user avatars:

```php
$path = $request->file('avatar')->storeAs(
    'avatars', // Path to our mystical forest
    $request->user()->id // Filename - a unique identifier for each user!
);
```

Secondly, we have the `putFileAs` charm, which is much like `storeAs`, but with a slight twist. This spell casts its magic on the `Storage` facade, making it as powerful and mysterious as the elusive unicorn of the web! The benefits? No more wandering through the labyrinthine corridors of Laravel's core code to find this method!

```php
$path = Storage::putFileAs(
    'avatars', // Path to our mystical forest
    $request->file('avatar'), // The file you wish to enchant
    $request->user()->id // Filename - a unique identifier for each user!
);
```

Now, let's talk about the dark side of file paths! Be warned, unprintable and invalid Unicode characters may be lurking in your filesystem, waiting to wreak havoc on your code. To prevent this from happening, make sure you sanitize your file paths before passing them to our enchanted Laravel storage methods. The system will normalize these paths using the `League\Flysystem\WhitespacePathNormalizer::normalizePath` method - fancy, isn't it?

And that's a wrap! You now have all the magical tools to conquer the world of file management in Laravel Land. May your code always be enchanted and your filesystem pure as a freshly baked lemon tart! 🍋🥧

 In the grand tradition of digital hoarding and the unquenchable thirst for storing every selfie with a sunset, let's talk about how to specify your preferred disk in Laravel. By default, our upload system is like that old, reliable uncle who always keeps everything at home – but you can change that if you're feeling adventurous!

If you've grown tired of your files piling up on your UncleDefaultDisk, you can point them to a swanky new disk by passing the name of your fancy new storage system as a second argument when using the `store` method:

```php
// Invite that sunset selfie to move into your S3 mansion
$path = $request->file('avatar')->store(
    'avatars/'.$request->user()->id, 's3'
);
```

Now, if you're more of a `storeAs` person and prefer keeping your files organized in folders like Marie Kondo does with socks, you can pass the name of your disk as the third argument:

```php
// Give that sunset selfie its own room in your S3 abode
$path = $request->file('avatar')->storeAs(
    'avatars',
    $request->user()->id,
    's3'
);
```

Remember, every file needs a place to call home, so choose wisely!

 Alrighty then! Let's dive into the fascinating world of uploaded files in Laravel Land.

If you fancy knowing the original name and extension of your uploaded digital treasure, fear not! You can achieve this magic trick using the `getClientOriginalName` and `getClientOriginalExtension` methods. It's like deciphering hieroglyphics from a lost ancient civilization... but with files!

```php
$file = $request->file('avatar');

$name = $file->getClientOriginalName(); // Unravel the file's secret name, like Indiana Jones unwrapping an Egyptian artifact.
$extension = $file->getClientOriginalExtension(); // Discover the file's extension, like Sherlock Holmes deducing a mystery from a single clue.
```

Now, hold your horses! While these methods may bring a sense of adventure, they are also known for their reckless behavior - much like that wild cowboy friend who always ends up causing chaos at the saloon. A malicious user could potentially tamper with the file name and extension. So, it's best to play it safe and stick with the more responsible `hashName` and `extension` methods instead:

```php
$file = $request->file('avatar');

$name = $file->hashName(); // Generate a unique, random name... perfect for those awkward moments when you forget your own.
$extension = $file->extension(); // Determine the file's extension based on the file's MIME type... sounds like something that would be on Jeopardy!
```

And there you have it, cowboy! Now you know how to tame those wild uploaded files and make them dance to your commands. Happy coding, partner!

 In the whimsical world of Laravel's FileSystem integration, "visibility" is akin to wearing a cloak of permissions that magically adapts to various file realms! Your files can either don the dashing regalia of `public` or the stealthy hood of `private`. When you deck out your files as `public`, you're essentially whispering, "Feel free to mingle with others!"

To drape a cloak of publicness on your files, summon the power of the `put` method:

```php
use Illuminate\Support\Facades\Storage;

Storage::put('file.jpg', $contents, 'public'); // Now the file's as popular as a viral cat video!
```

Should your files already be ensconced in their digital fortresses, no worries! You can still discern whether they're basking in the limelight or hiding behind the curtains with the `getVisibility` and `setVisibility` methods:

```php
$visibility = Storage::getVisibility('file.jpg'); // Ah, what a curious cloak it wears!

Storage::setVisibility('file.jpg', 'public'); // Time to step out of the shadows, little file!
```

When tending to uploaded files, you can employ the `storePublicly` and `storePubliclyAs` methods to bestow upon them their public garb:

```php
$path = $request->file('avatar')->storePublicly('avatars', 's3'); // Dress that avatar in its finest online attire!

$path = $request->file('avatar')->storePubliclyAs(
    'avatars',
    $request->user()->id,
    's3'
); // Don't forget to monogram that path with your user ID, for extra flair!
```

<a name="local-files-and-visibility"></a>
(Note: In case you were wondering about local files and their cloaks of visibility, it's a bit like decorating a digital pumpkin. Unfortunately, local files don't have the same level of public access control as cloud storage providers like S3.)

 Alright, let's dive into the thrilling world of Laravel's local filesystem!

When you're using the `local` driver (think of it as your trusty sidekick), `public` visibility translates to giving directories a secret handshake of `0755` (a.k.a. "Dir-Do" in our secret language) and files a more reserved nod of `0644` (let's call it "File-Wink").

But if you fancy changing these permissions, fear not! You can modify the mapping like you're redecorating your home sweet app. Just head over to your application's `filesystems` configuration file and unleash your inner interior designer:

```php
'local' => [
    'driver' => 'local',
    'root' => storage_path('app'),
    'permissions' => [
        // We're redecorating our files here
        'file' => [
            'public' => your-preferred-public-permission,
            'private' => your-secret-private-permission,
        ],
        // And our directories over there
        'dir' => [
            'public' => another-public-permission-you-fancy,
            'private' => a-private-handshake-of-your-choice,
        ],
    ],
    'throw' => false,
],
```

Remember, you can delete files like a boss, but make sure to throw them out properly. Here's the quick tutorial: <a name="deleting-files">How to Dispose of Files Like a Pro</a> (Caution: It involves using Laravel's `Storage` facade with the `delete()` method). Happy redecorating and deleting! 🏮🗑️

 Ahoy there, code-wranglers! In this here tutorial, we're gonna learn how to make files vanish like Houdini at a magic show. But instead of puffing away smoke and reappearing elsewhere, our files will just... poof! Gone forever (or until they're needed again).

Now, you might be thinkin', "How do I work this disappearing act?" Well buckle up, partner! The `delete` method is the magic wand we need. It accepts a lonesome filename or a whole posse of 'em:

```php
use Illuminate\Support\Facades\Storage;

Storage::delete('file.jpg'); // Vanish one file like Thanos at a cosmic bash!
Storage::delete(['file.jpg', 'file2.jpg']); // Delete multiple files, now you're cookin' with gas!
```

But what if you've got your files stashed away on different disks? Fear not, we can still make them disappear like a stage magician revealing the hidden card. Just specify the disk:

```php
use Illuminate\Support\Facades\Storage;

Storage::disk('s3')->delete('path/file.jpg'); // Delete file from S3, the cloud's attic!
```

Just remember, once deleted, those files won't be coming back unless you've got a time machine (or a really good backup system). So be sure to delete wisely and with caution! Happy deleting, partner! 🤠

 Ahoy there, coding cowpoke! Fancy a little jaunt through Laravel's file system? Buckle up, partner, as we explore the wild west of directories.

### Navigating the Frontier: Listing Directories <small><a href="#get-all-files-within-a-directory">(More on files soon!)</a></small>

Just like panning for gold in a river, you'll need to sift through Laravel's directories to find your treasure—er, files. To do this, we use the `File` facade and its trusty companion, the `directory` method. Here's how it works:

```php
use Illuminate\Support\Facades\File;

$directories = File::directories(resource_path('my-folder'));
```

Now, `$directories` holds a list of subdirectories within your 'my-folder' folder like a sheriff rounding up the outlaws. But watch out for that sneaky `FileNotFoundException`! If Laravel can't find 'my-folder', it'll throw this exception faster than you can say "Yippee-ki-yay!"

### Digging Deeper: Recursive Directory Listing

If your folder is as deep as the Grand Canyon, we need a way to dig deeper and list all subdirectories—recursively. To do this, use the `File::files` method in combination with Laravel's Collection class' `flatMap` function:

```php
use Illuminate\Support\Facades\File;
use Illuminate\Support\Collection;

$allDirectories = new Collection(File::files(resource_path('my-folder')));
$directories = $allDirectories->filter(function ($file) {
    return $file->isDirectory();
})->flatMap(function ($directory) {
    return File::files($directory->getRealPath());
});
```

In this example, we create a new Collection from the list of all files within 'my-folder', then filter out just the directories. We then recursively dig into each directory and add its subdirectories to our `$directories` array. Ta-da! You've now got yourself a full list of every hidden nook and cranny within your folders.

But remember, with great power comes great responsibility: always be mindful of Laravel's filesystem permissions when exploring the wild west of directories. Happy trailblazing, partner!

 Alright, buckle up, coding cowboy! It's time to dive into the wild west of directories with Laravel's trusty file management system.

First off, let's talk about rounding up all the files within a specific directory. You can do that like a seasoned wrangler using the `files` method:

```php
use Illuminate\Support\Facades\Storage;

$herd = Storage::files($directory);
```

Now, if you're hankering to find every file, including those hidden deep within subdirectories, then you'll want to rustle up the `allFiles` method:

```php
$wholePosse = Storage::allFiles($directory);
```

That's right! With these handy methods, you can keep track of your digital ranch like a boss. Happy corralling! 🤠🐄🌵🚀

 Ahoy there, matey! Let's dive into the world of Laravel directories, shall we? 🌴

#### Uncovering Hidden Treasures: The Pirate's Way to Directories

Ever found yourself lost in a sea of files and yearning for land (directories)? Well, buckle up, because I'm about to show you the swashbuckling ways of `Storage::directories()` and the all-encompassing `Storage::allDirectories()`. 🏴‍☠️

#### The Humble `directories` Method:

Want to know what directories are huddled within a specific folder like a pack of rats on a sinking ship? Just hoist the `directories` method flag! This'll yield an array of all directories residing inside your chosen port (directory).

```php
$directories = Storage::directories($directory);
```

#### The Magnificent `allDirectories` Method:

If you're after a comprehensive list of all the hidden coves and harbors nestled within your directory, as well as its submerged sub-subdirectories (I couldn't resist the nautical puns), then set sail with the `allDirectories` method.

```php
$directories = Storage::allDirectories($directory);
```

Now that you know how to navigate Laravel's directories, you can rest easy knowing that your file organization is as organized as Captain Hook's crew. 🐙🤝🏴‍☠️

 Ahoy there, coders! Need to whip up a new folder like it's nobody's business? Fear not, for the `makeDirectory` method is here to save your bacon! This trusty steed will create the directory of your dreams - and even handle the nitty-gritty details of any pesky subdirectories.

Just give it a call, like so:

```php
Storage::makeDirectory($directory);
```

Now, if you're looking to delete a directory instead, you've come to the right place! Just remember that even a pirate needs to keep his ship tidy. To ensure there are no stragglers left behind, use the `deleteDirectory` method:

```php
Storage::deleteDirectory($directory);
```

Now, wasn't that as smooth as a sea shanty on a breezy day? Happy coding! 🎉📦✨

 Alrighty then! Time for some digital demolition derby with Laravel's `deleteDirectory` method. This bad boy is just what the storage doctor ordered when you need to vamoose a directory and all its pesky files without so much as a "see ya later, alligator!"

Just point it at your unwanted directory like this:

```php
Storage::deleteDirectory($directory);
```

And poof! Just like that, it's gone with the wind (or rather, the PHP wind). So if you've been pining for more space on your server and have a directory that just won't quit, give this method a whirl. Your hard drive will thank you later.

(Psst, if you want to make sure it's really gone, try testing out our [testing section](#testing).)

 Alright, buckle up, coders! Let's dive into the whimsical world of Laravel file testing, where your upload forms become as reliable as a goldfish remembering its way home.

The `Storage` facade's `fake` method is like magic for your test files – it creates an illusionary disk that makes testing file uploads more straightforward than a one-legged cat finding its way out of a bag. Check this out:

```php tab=Pest-Jam (yes, Pest with a dash of fun)
<?php

use Illuminate\Http\UploadedFile as UF; // Don't forget to wear your safety goggles!
use Illuminate\Support\Facades\Storage;

it('should upload albums like a pro', function () {
    Storage::fake('photos'); // Set up the magic photo booth

    $response = $this->post('/photos', [
        UF::fake()->image('photo1.jpg'), // Create an image file as fake as a politician's promise
        UF::fake()->image('photo2.jpg') // Another one, because who doesn't need two fakes?
    ]);

    // Verify that the files are indeed stored in our magical disk
    Storage::disk('photos')->exists('photo1.jpg'); // Yes, it exists!
    Storage::disk('photos')->exists(['photo1.jpg', 'photo2.jpg']); // Both files found!

    // Ensure that non-existent files are, in fact, missing
    Storage::disk('photos')->missing('missing.jpg'); // No, it's not here!
    Storage::disk('photos')->missing(['missing.jpg', 'non-existing.jpg']); // Not found!

    // Confirm that the count of files in a directory matches our expectations
    Storage::disk('photos')->count('/wallpapers', 2); // There are exactly two wallpaper files

    // Assert that a given directory is as empty as an armadillo's wallet
    Storage::disk('photos')->isEmpty('/wallpapers');
});
```

```php tab=PHPUnit-Laughing (yes, PHPUnit with a dash of humor)
<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile as UF; // Safety goggles on!
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_albums_can_be_uploaded(): void
    {
        Storage::fake('photos'); // Set up the magical photo booth

        $response = $this->post('/photos', [
            UF::fake()->image('photo1.jpg'), // Create an image file as fake as a politician's promise
            UF::fake()->image('photo2.jpg') // Another one, because who doesn't need two fakes?
        ]);

        // Verify that the files are indeed stored in our magical disk
        Storage::disk('photos')->exists('photo1.jpg'); // Yes, it exists!
        Storage::disk('photos')->exists(['photo1.jpg', 'photo2.jpg']); // Both files found!

        // Ensure that non-existent files are, in fact, missing
        Storage::disk('photos')->missing('missing.jpg'); // No, it's not here!
        Storage::disk('photos')->missing(['missing.jpg', 'non-existing.jpg']); // Not found!

        // Confirm that the count of files in a directory matches our expectations
        Storage::disk('photos')->count('/wallpapers', 2); // There are exactly two wallpaper files

        // Assert that a given directory is as empty as an armadillo's wallet
        Storage::disk('photos')->isEmpty('/wallpapers');
    }
}
```

By default, the `fake` method will delete all files in its temporary directory, but if you prefer to keep these files for future use, consider using the "persistentFake" method instead. For more information on testing file uploads, check out our [HTTP testing documentation's section on file uploads](/docs/{{version}}/http-tests#testing-file-uploads).

> [!WARNING]
> The `image` method requires the [GD extension](https://www.php.net/manual/en/book.image.php). Don't forget to install this magic potion before casting your spells!

 Alrighty then! Laravel's Flysystem integration is like inviting all your storage pals to a grand old ball, but unlike those wallflowers who refuse to dance, this crew knows how to boogie down. With support for some drivers out of the box, it's not just a party - it's a rager!

But wait, there's more! Flysystem ain't one to sit on its laurels; it's got adapters for storage systems that couldn't make it to the bash. If you've got your heart set on one of these latecomers, you can create a custom driver to make them feel welcome in your Laravel app.

To kickstart this bromance, we're gonna add a Dropbox adapter that's been hanging around the cool kids' table all evening - it's community-maintained and just itching to join the fun! To do that, you'll need to run this command in your terminal:

```shell
composer require spatie/flysystem-dropbox
```

Once you've got your date (er, adapter) secured, it's time to introduce them to the rest of the family. You can register the driver within the `boot` method of one of your application's service providers. To accomplish this, you should use the `extend` method of the `Storage` facade:

```php
<?php

namespace App\Providers;

// ... (skipped the introduction to keep things moving)

class AppServiceProvider extends ServiceProvider
{
    // ... (skipped the register() method for brevity)

    public function boot(): void
    {
        Storage::extend('dropbox', function (Application $app, array $config) {
            $adapter = new DropboxAdapter(new DropboxClient(
                $config['authorization_token']
            ));

            return new FilesystemAdapter(
                new Filesystem($adapter, $config),
                $adapter,
                $config
            );
        });
    }
}
```

The first argument of the `extend` method is the name of the driver (in this case, 'dropbox'), and the second is a closure that receives the `$app` and `$config` variables. The closure must return an instance of `Illuminate\Filesystem\FilesystemAdapter`. The `$config` variable contains the values defined in `config/filesystems.php` for the specified disk.

With the extension's service provider created and registered, you can now use the 'dropbox' driver in your `config/filesystems.php` configuration file. Now, isn't that a dance worth learning? 💃🕺️