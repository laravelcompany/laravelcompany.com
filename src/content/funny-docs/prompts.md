 Title: **Welcome to Laravel's Magical Terminal Tour!** 🎪🎧

*Chuck Norris voiceover:*

"Step right up, folks! Welcome to the wild world of Laravel's terminal commands. Buckle up for an unforgettable journey through fields of forms, tables, and spinners galore!" 🎢

<a name="installation"></a>

*Sign held high:*

"First things first! Before we dive headfirst into the action, let's ensure you've got your Laravel installation all squared away. Because nobody likes a party pooper with a broken setup!" 🤯

<a name="available-prompts"></a>

*Flashing neon lights:*

"Now that we're all set, let's take a gander at the dazzling array of prompts at your fingertips: Text, Textarea, Number, Password, Confirm, Select, Multi-select, Suggest, Search, Multi-search, Pause, Autocomplete! The possibilities are endless!" 🌈

<a name="transforming-input-before-validation"></a>

*Mysterious smoke cloud:*

"Next up: Transforming your input before validation – the dark arts of Laravel's sorcery! But fear not, for we shall reveal its secrets to you!" 🧙‍♂️

<a name="forms"></a>

*Fanfare:*

"Prepare yourself for the main event: Forms! From creating user accounts to building complex applications, forms are the backbone of your Laravel experience. They're like the Batmobile to your caped crusader!" 🦇

<a name="informational-messages"></a>

*Confetti explosion:*

"And don't forget about informational messages! Keeping users in the loop has never been so easy – and fun!" 🎉

<a name="tables"></a>

*Pac-Man munching on dots:*

"Tables – your gateway to organized data! Sort, filter, and manipulate your data with ease. Just like playing Pac-Man, but with more productivity points!" 🕹️

<a name="spin"></a>

*Spinning wheel of fortune:*

"A whirlwind of excitement awaits with our spin feature! Spinners make the wait feel like winning big on the Wheel of Fortune – minus Vanna White's wardrobe malfunctions, of course!" 🤞

<a name="progress"></a>

*Progress bar racing across a finish line:*

"Progress bars: the perfect companion for long-haul tasks! Watch as your progress bar races towards completion – it's like you're training for an Olympic marathon, but with less sweat and more success!" 🏃‍♂️

<a name="task"></a>

*Taskmaster yelling commands:*

"Task: the Swiss Army knife of Laravel! From running a simple command to executing complex workflows, it's your personal Taskmaster!" 🦸

<a name="stream"></a>

*Stream of lava flowing into a volcano:*

"Streams: a torrent of data at your fingertips! With streams, you can manage your data like a lava flow in a volcano – hot, fast, and powerful!" 🔥

<a name="terminal-title"></a>

*Marquee scrolling across a movie theater:*

"Terminal Title: the showman's touch for your command line! Customize your terminal title to make every command feel like a Hollywood premiere!" 🍿

<a name="clear"></a>

*Magic eraser:*

"Clearing the Terminal: the magic of an invisible eraser! With just one command, you can erase all traces of your previous masterpiece – or cat memes, whatever floats your boat!" 🧹

<a name="terminal-considerations"></a>

*Warning sign:*

"Terminal Considerations: the fine print you don't want to ignore! Make sure you understand the ins and outs of terminal interactions to avoid any unintended consequences – like showing up at a party without your manners!" 🙈

<a name="unsupported-environments-and-fallbacks"></a>

*Lego warning sign:*

"Unsupported Environments and Fallbacks: the building blocks of reliability! Be aware that not all terminal commands may work in every environment – it's like Legos, some pieces just don't fit together!" 🧱

<a name="testing"></a>

*Test tube filled with colorful solutions:*

"Testing: the secret science of success! Testing ensures that your Laravel applications are as error-free and bug-free as a fresh batch of lab results from Dr. Frankenstein!" 🧪

So there you have it, folks! Now you're ready to tackle the world of Laravel terminal commands with flair and finesse. Happy coding – and remember: in Laravel, the only limit is your imagination! 🚀🚀🚀

 ## The Laugh-out-Loud Command Line Experience! 🎉🤖

Get ready to revolutionize your console games with the Laravel Prompts PHP package! This magical kit transforms your humdrum command-line apps into dazzling, user-friendly interfaces, complete with browser-like perks such as placeholders and validation. It's like giving your computer a makeover for the digital age! 🕺️

![Laravel Prompts Example](https://laravel.com/img/docs/prompts-example.png)

Now, you might be thinking, "But I just want to order pizza from the command line!" Well, worry not, dear friend! Laravel Prompts is an ideal sidekick for accepting orders in your Artisan console commands. But that's not all—this versatile tool can lend its charm to any PHP project in need of a command-line upgrade. 🍕💻

> [📝 Note to Self]
> Laravel Prompts caters to macOS, Linux, and Windows (with WSL), but there's no reason to be left out if you're using an unsupported environment. Fret not! We've got your back with a handy fallback plan detailed in our documentation. 🤓

<a name="installation"></a>

Ready to bring the laughs and good times to your command-line adventures? Let's get installing! 🚀🎉🎊

 Alright, grab your party hats and let's get this Laravel shindig started! 🎉

First things first, the latest release of Laravel comes with our very own dance floor called Laravel Prompts – no need to RSVP or anything! 💃🕺

But if you're hosting a PHP project at your place and want to invite Laravel Prompts, you can do so with the help of our friendly Composer package manager. Here's the secret password:

```shell
composer require laravel/prompts
```

Just like that, Laravel Prompts will be there, shaking its booty and making your PHP project even cooler! 🥳

Now, if you're curious about the moves Laravel Prompts can pull off, feel free to check out the available prompts list: <a href="#available-prompts">Click here for the lineup</a> 🕺💃

 Ahoy there, coding buccaneers! 🏴‍☠️ Prepare to set sail on a journey through Laravel's enchanted command line ocean where magic prompts await you like mermaids singing sea shanties! 🤘

<a name="text"></a>

### Artisan Commands

Are you tired of manually digging for buried treasure in your project directory? Fear not, for Artisan commands are here to help! These nifty tools can automate tedious tasks and even brew up some custom ones with their powerful potions. To unleash their mighty magic, just utter the mysterious incantation:

```bash
php artisan [command]
```

Replace `[command]` with one of these bewitching spells:

#### List Available Commands

If you've wandered too far from land and can't remember all the available commands, fear not! Cast this spell to summon a list of all known commands:

```bash
php artisan list
```

#### Make

This versatile potion lets you create new files for various tasks like models, controllers, and migrations. Here's how ye can use it:

```bash
php artisan make:model User -m
```

In this example, we're crafting a new model called "User" and generating a migration file at the same time. The `-m` flag means "with migration." You can also create other types of files using different options such as `make:controller`, `make:migration`, etc.

#### Migrate

Migrations are like Laravel's time travel device, allowing you to go back and forth through your database changes. Use this command to apply a specific migration or rollback changes:

```bash
php artisan migrate [step]
```

Replace `[step]` with the number of the migration step you want to apply or rollback. For example:

```bash
php artisan migrate 2019_08_23_000000_create_users_table
```

#### DB

This spellcasting lets you interact with your database directly from the command line! Useful for running complex queries or fixing pesky database issues. Some common commands include:

- `php artisan db:seed` - Populate your freshly migrated tables with data using seeders
- `php artisan db:rollback` - Rollback the current migration step
- `php artisan tinker` - Open up a Laravel REPL for on-the-fly coding and experimentation 🧪

So hoist the Jolly Roger, me hearties! With these Artisan commands in your arsenal, you'll be conquering code like never before! 🏴‍☠️🌴🔰

 Alrighty, let's dive into the world of Laravel's `text` function - a magical tool that'll make your app smarter than Forrest Gump! 🤓

It's like having a talking assistant that not only asks users questions but also understands their responses and passes them back to you:

```php
Call upon the mystical powers of text with a simple incantation:

use function Laravel\Prompts\text;

$name = text('What's up, what's your name?'); 🤖🗣️
```

If you want to add a bit of pizzazz and make the question more inviting, there are options for placeholder text, default values, and helpful hints:

```php
$name = text(
    label: 'What's your name (like Taylor Otwell)?', 🌟📝
    placeholder: 'E.g. Taylor Otwell', 🤖💬
    default: $user?->name, 🔧🛠️
    hint: 'This will be proudly displayed on your profile. No need to panic! 😉' 📝
);
```

Now that you know how to use the `text` function, you can make your app more interactive and user-friendly in no time - just like that magical crystal ball at the carnival! 🎪✨

 Alrighty then! Let's put on our programming cowboy hats and dive into the world of Laravel form validation, shall we?

First off, if you're looking to ensure that a certain field gets filled out by your poor, unsuspecting users (we wouldn't want to leave them hanging, now would we?), then it's time to saddle up and use the `required` argument!

```php
$name = text(
    label: 'What in tarnation is your name, partner?',
    required: true // You don't want to end up in a saloon brawl over this now do ya?
);
```

But wait! There's more! Ever wanted to customize the error message for when folks mess up their form inputs? Well, buckle up, because you can do just that by passing a string along with your `required` argument:

```php
$name = text(
    label: 'What in tarnation is your name, partner?',
    required: 'Your name is as essential as a six-shooter in a gunfight.' // Get this right or prepare to hear some laughter from the peanut gallery!
);
```

And there you have it! Happy form validation, partner! May your forms be filled out and your users never leave empty-handed.

 Alright, mate! Let's dive into the world of Laravel validation, where your forms are the wild west and we're the sheriffs keeping them in line.

If you fancy writing your own rules, you can pass a little secret weapon called a closure to the `validate` argument. It's like a one-man posse that checks your form data at the saloon door. Here's how it looks:

```php
$name = text(
    label: 'What moniker shall we call you by?',
    validate: function (string $value) {
        if (strlen($value) < 3) {
            return "Folks, that name's shorter than a tumbleweed! Needs at least 3 characters.";
        }
        if (strlen($value) > 255) {
            return "Now that's a mouthful! Your name can't exceed 255 characters.";
        }
        // If all is well, let 'em pass through with no fuss.
    };
);
```

This cowboy will take the data you've entered and spit out an error message or a clean chit if the validation passes – just like in the old west!

Now, if you'd rather not rope your own rules, Laravel's [validator](/docs/{{version}}/validation) is here to help. It's like having a seasoned deputy who knows all the law! To utilize its powers, simply provide an array with the attribute name and desired validation rules for the `validate` argument:

```php
$name = text(
    label: 'What is your name?',
    validate: ['name' => 'required|max:255|unique:users']
);
```

And that, partner, is how you keep the wild west of forms tamed with Laravel! Now go forth and validate all the things!

 ### Textbox of Epic Proportions! 🎉📝

Prepare to embark on an epic quest of storytelling with the `textarea` magic spell! This powerful function, when chanted by your code, will conjure a mighty textbox before the user's eyes and await their magnificent tale:

```php
use Laravel\Prompts\textarea as tellStory; // Magic is hard work, better give it a catchy name! 🎩

$epicTale = tellStory('I command you, mortal, tell me a story!');
```

But wait, there's more! You can also customize your textbox to fit your needs like a well-tailored cloak:

```php
$customizedTextbox = tellStory(
    label: 'Ye Olde Tale Spinner', // Give it a fancy title 🏰
    placeholder: 'Once upon a time...', // Help the user get started ✍️
    hint: 'May your story be as captivating as your profile!' // Encourage them to shine! ✨
);
```

Oh, and lest we forget, sometimes you may demand an answer from the user instead of just asking politely. In such cases, you can make the textbox a compulsory field:

<a name="textarea-required"></a>

```php
$compulsoryStory = tellStory(
    label: 'Tale Time', // Sounds like fun! 🎶
    placeholder: 'Your story here, no exceptions!', // Emphasize the importance of storytelling 📜
    hint: 'A tale shall be told or a wizard's wrath will ensue!' // Just a little extra motivation 🦄
);
```

Now, go forth and gather tales from your users with the power of `textarea`! Just remember to use it wisely and let the stories flow! 💫🔥📖

 Alrighty then! Let's talk Laravel, my friend. If you want to make sure your form has all the ingredients for a successful submission (like a juicy story), you can employ the enigmatic `required` argument. Here's how:

```php
$story = textarea(
    label: 'Spin yarn, sailor!',
    required: true // A little pressure never hurt anyone, right?
);
```

Now, if you're feeling particularly fancy and want to customize the validation message (maybe you don't like my pirate lingo), go ahead:

```php
$story = textarea(
    label: 'Spin yarn, sailor!',
    required: 'A story is a must-have. No more blank pages!' // Seriously, no more blank pages!
);
```

Remember to keep your anchors a-weigh and your forms fully stocked with those tales of the high seas! Happy coding! 🌴⚓️🐘

 Ah, the thrilling world of Laravel validation! Let's dive right in, shall we? 🤿

#### Extra Verification Fun

Alrighty then, if you fancy adding some extra validation logic to your forms, you can pass a little magical spell (er, closure) to the `validate` argument:

```php
$story = textarea(
    label: 'Spin me a yarn.',
    validate: fn ($value) => match (true) {
        strlen($value) < 250 => 'Hold up there, Chaucer! This story needs at least 250 characters.',
        strlen($value) > 10000 => 'Whoa, Tolkien! That's a long tale. Let's cap it at 10,000 characters for now.',
        default => null
    }
);
```

This spell will receive the yarn you've spun and either return an error message, or wave its wand around in approval if the validation passes. 🧙‍♂️

Alternatively, you can harness the raw power of Laravel's [Validation Wizard](/docs/{{version}}/validation). To summon this powerful ally, simply provide an array containing the name of your attribute and the desired validation rules to the `validate` argument:

```php
$story = textarea(
    label: 'Spin me a yarn.',
    validate: ['story' => 'required|max:10000']
);
```

And there you have it! Now, go forth and ensure your form data is as sparkling clean as a freshly laundered wizard's robe. 🧺✨

 ### The Magic Numbifier! 🔮

Ready to play number cruncher? Meet Laravel's very own 'Numbifier' function, a magical tool that transforms your console sessions into a real-life Numberwang game! 🎲

This enchanting spell will pose a question of your choosing, then sit back and wait for you to cast the right numeric charm. It's as easy as pie (or maybe pizza, if you prefer)!

```php
use function Laravel\Prompts\numbify; // Yeah, it's that cool! 😎

$quantity_desired = numbify('How many copies would you like?');
```

But wait, there's more! You can even customize the experience with placeholder text, a starting point, and a little helpful hint:

```php
$copies_requested = numbify(
    label: 'How many copies would you like?',
    placeholder: '5 (if you know what you want)',
    default: 1, // Just in case you're feeling shy or indecisive 😉
    hint: 'This will decide the fate of your photocopier (or printer if you fancy)!'
);
```

So go ahead and cast that spell with confidence! Don't forget to use the up and down arrow keys to adjust the number like a pro 🔄

P.S: We know some of you are wondering, "Is there any chance I can get this Numbifier to ask me math problems?" Well, folks, we saved that for a future update. Stay tuned! 😉

 Alrighty then! Let's dive into the world of Laravel validation, shall we? If you're hankering after some data from your users, but absolutely need a specific value, fear not! Just pass along the `required` argument like so:

```php
$copies = number(
    label: 'How many copies do y'all want in this here pile?',
    required: true // Yeah, we're talking about you, lazy bones.
);
```

Should you wish to spruce up the validation message (because who doesn't love a bit of flair!), you can toss a string into the mix as well:

```php
$copies = number(
    label: 'How many copies do y'all want in this here pile?',
    required: 'Listen, pal. If you ain't got a number of copies to share, we can't move forward here.'
);
```

Now, if you're curious about the nitty-gritty of `number` validation (and who isn't!), you can hop on over to our [official docs](#number-validation). Enjoy the ride!

 Alrighty then! Let's dive into the world of validation, shall we? You know, it's like a bouncer at the club of your data, making sure everyone is dressed appropriately and not bringing in any unwanted chaos.

First off, if you fancy adding some custom validation rules to your party, you can pass a little function (or closure, as the cool kids say) to the `validate` argument:

```php
$copies = number(
    label: 'How many copies do you want?',
    validate: fn ($value) => match ($value) {
        $value < 1 => 'Alrighty, one copy is the minimum. Don't skimp now!',
        $value > 100 => 'Whoa, toner emergency! Reduce the copies to a more manageable number.',
        default => null
    }
);
```

This function takes the value entered and can spit out an error message or `null` if the validation passes. It's like a charm for those tricky cases where Laravel's built-in rules don't quite fit the bill.

Now, if you'd prefer to use Laravel's very own bouncer (the validator), go right ahead! Just provide an array containing the attribute name and desired validation rules to the `validate` argument:

```php
$copies = number(
    label: 'How many copies would you like?',
    validate: ['copies' => 'required|integer|min:1|max:100']
);
```

Now, let's get this party started with some validation! 🎉🥳

 Ahoy there, coders! Let's delve into the mysterious world of Laravel's `password` function - a secret agent in your command line console. This little guy works remarkably like the `text` function, but with one crucial difference: it keeps your secrets...secret! Yup, as users type away their top-secret passwords, those characters are stealthily masked for added security.

```php
Oh, you'll need to import Laravel's Prompts first:
use function Laravel\Prompts\password;

Now, let's grab that password with a dashing command:
$password = password('What is your password?');
```

But wait! The fun doesn't stop there. You can even add a touch of elegance with placeholder text and an informational hint:

```php
$password = password(
    label: 'What is your password?',
    placeholder: 'password',
    hint: 'Minimum 8 characters.'
);
```

Now, wasn't that a smoother way to handle sensitive data? And remember, just like in any good spy movie, it's always better to keep your secrets under wraps!

 In case you're playing detective and need to know a secret, the `required` argument can be your sidekick:

```php
$sword_in_stone = password(
    label: 'Speak friend and enter the magic word!',
    required: true // No chivalry without this!
);
```

If you fancy customizing your validation message like a modern-day bard, just pass along a poetic rhyme or two:

```php
$sword_in_stone = password(
    label: 'Speak friend and enter the magic word!',
    required: 'You can't play knight without taking a fight!' // That's Show, Don't Tell, right?
);
```

Now you're well-equipped to handle the password conundrum. No more "I don't know what you want!" – just "The password is required" or any other message you'd like to compose! 😉

 Ah, dear Laravel enthusiasts! Let's get our validation game on point with a dash of humor and a sprinkle of wit. Here's how you can add that extra layer of security to your forms:

1. **The Closure Caper**: If you're feeling adventurous, or just want to unleash your inner Houdini of validation, you can pass a magical closure to the `validate` argument. This cloaked ally will receive the value entered by your users and perform some wicked cool tricks.

Here's an example: If you want to ensure your user's password is as strong as a fortified castle, you might set up something like this:

```php
$password = password(
    label: 'Enter your secret squirrel code!',
    validate: fn (string $value) => match (true) {
        strlen($value) < 8 => 'Eight characters? Pshaw! We're building cathedrals here, not huts.',
        default => null // If the validation passes, we just move along... nothing to see here.
    }
);
```

2. **The Validator Vigilante**: For those of you who prefer a more straightforward approach (we all have our days), Laravel's validator is your trusty sidekick. This superhero can swoop in with an array of validation rules to keep the bad guys at bay.

To join forces with this mighty validator, just provide an array containing the name of your attribute and the desired validation rules to the `validate` argument:

```php
$password = password(
    label: 'Enter your secret squirrel code!',
    validate: ['password' => 'min:8'] // This means the password must be at least eight characters long.
);
```

Now go forth, and ensure that the form data flowing into your Laravel application is as squeaky clean as a freshly laundered superhero costume!

 Ahoy there, brave coder! Ever found yourself in a pickle, needing to know if your user's ready for some binary decision-making? Fear not, dear friend, for Laravel has come to the rescue with its very own `confirm` function!

This magical piece of code lets your users navigate through the mystical realms of up and down arrow keys or even choose to press the enchanting 'y' for "Yes" or the mysterious 'n' for "No." It's like a game of rock, paper, scissors, but with more keyboard mashing!

Here's how you can harness its power:

```php
use function Laravel\Prompts\confirm;

$isConfirmed = confirm('Are you ready to save the world?'); // May the force be with you!
```

But wait, there's more! If you fancy a more customized experience, feel free to give your "Yes" and "No" labels some pizzazz:

```php
$isConfirmed = confirm(
    label: 'Do you accept the terms?',
    default: false,
    yes: 'I'm all in!',
    no: 'Count me out.',
    hint: 'The terms must be accepted to proceed with the magic spell.'
);
```

Just remember to keep your `confirm` functions within an easily accessible container, and you'll be on your way to more engaging user interactions in no time!

 #### Demanding a Yes, Man!

Are you ready to play by the rules? If so, you can make your users click that little checkbox by using the `required` argument, like a boss:

```php
$termsAgreed = demandYes(
    question: 'Yo, do you accept the terms?',
    isRequired: true // Because I said so!
);
```

If you fancy customizing your own stern message for non-compliance, feel free to add a string to the mix:

```php
$termsAgreed = demandYes(
    question: 'Yo, do you accept the terms?',
    isRequired: 'You better agree or I'll turn this site into marshmallows!'
);
```

<a name="select"></a>
Just remember, with great power comes great responsibility. So be sure to use your newfound ability wisely! 😉

 ### PICK YER FIGHT, TONY! (or, User Selection 101)

If you're looking to have your user choose from a lineup of pre-arranged options that would make Ol' Blue Eyes himself green with envy, look no further than the `select` function!

```php
use function Laravel\Prompts\select;

$role = select(
    "Whoa there, partner! Which role dost thou desire for our new user?", // Label it up, cowboy!
    ['Member', 'Contributor', 'Owner'] // Remember, three's a crowd but four's just right in this case.
);
```

Don't forget to set the default choice and an informational hint for when our user gets cold feet:

```php
$role = select(
    "Alrighty then, which role should we saddle up with?", // Labeling is key, partner.
    ['Member', 'Contributor', 'Owner'], // Ain't no party like a three-way party, right?
    'Owner', // Set the default selection, just in case our user gets cold feet and needs to bail out.
    "Fear not, for this role can be changed faster than you can say 'Yippee-ki-yay!'" // A friendly reminder that change is a constant in our wild west of code.
);
```

Think your user deserves more than just a simple key? Go ahead and pass an associative array to the `options` argument, and have the selected key returned instead of its value:

```php
$role = select(
    "Alrighty then, which role should we saddle up with?", // Labeling is key, partner.
    [
        'member' => 'Member',
        'contributor' => 'Contributor',
        'owner' => 'Owner',
    ],
    'owner' // Set the default selection, just in case our user gets cold feet and needs to bail out.
);
```

If you find yourself needing to display more than five options at once, you can customize this by passing the `scroll` argument:

```php
$role = select(
    "Which category would you like to assign?", // Labeling is key, partner.
    Category::pluck('name', 'id'), // Remember, knowledge is power, and so is knowing which categories we got!
    'scroll' => 10 // Set the number of options displayed before the list begins to scroll, for the smoothest user experience possible.
);
```

And there you have it! A quick and dirty guide to selecting user roles like a boss in Laravel, cowboy style. Happy coding, partner!

 Alrighty, let's get this show on the road! In the Laravel world, we've got a spiffy little feature called `info`. Think of it as your trusty sidekick that chimes in with bonus trivia when you're busy highlighting options.

When you throw a closure at `info`, it's like inviting a chatty buddy to the party. This mysterious function will take the value of your highlighted option, spin some tales, and return a string or simply shrug its digital shoulders and say "null" if it's all talked out. Check this out:

```php
$role = select(
    label: 'Pick a user role, any role!',
    options: [
        'member' => 'Regular ol' Member',
        'contributor' => 'Contributor, the unsung hero',
        'owner' => 'The big Kahuna, aka Owner'
    ],
    info: function (string $value) {
        switch ($value) {
            case 'member': return "Can view and comment like a pro.";
            case 'contributor': return "Can view, comment, and edit with gusto.";
            case 'owner': return "Full access to everything, including the kitchen sink.";
            default: return null; // Whoops, we fell asleep on that one.
        }
    }
);
```

But wait, there's more! If your `info` doesn't need a chit-chat with the highlighted option, you can always pass a static string instead:

```php
$role = select(
    label: 'Pick a user role, any role!',
    options: ['Member', 'Contributor', 'Owner'],
    info: "Beware! Roles are as flexible as a rubber band."
);
```

And that's the lowdown on Laravel's `info` argument! Now go forth and entertain your users with some trivia, while you control the kingdom like a true digital sovereign. Happy coding, friend! 🚀🌟

 Ah, the world of Laravel validation! A dance of PHP and logic where every step takes us closer to a form that's as secure as Fort Knox, but with fewer gold bars.

Unlike other prompt functions, our pal 'select' doesn't accept the "required" argument because it's like asking a cat to fetch water - not gonna happen! But don't worry, if you need to present an option and prevent it from being selected, just pass a closure to the `validate` argument. It's like bringing your own bouncer to the party.

```php
$role = select(
    label: 'Pick your user role, but remember, we only allow one Owner per party!',
    options: [
        'member' => 'Member',
        'contributor' => 'Contributor',
        'owner' => 'Owner',
    ],
    validate: fn (string $value) =>
        $value === 'owner' && User::where('role', 'owner')->exists()
            ? 'Sorry, we already have a King of the Hill!'
            : null
);
```

Now here's the twist - if your `options` argument is an associative array, the closure will receive the selected key. But if it's not, it'll get the selected value instead. The closure can return an error message, or `null` if the validation passes. It's like inviting a guest and checking if they're on the naughty list before letting them in.

 ### The Great Select-A-Palooza! 🎉🎧

In the event that you desire to give your user a musical symphony of option selection, you may employ the `multiselect` function:

```php
use function Laravel\Prompts\multiselect;

$permissions_extravaganza = multiselect(
    label: 'What permissions should be granted?',
    options: ['Read Party', 'Create Jam Sessions', 'Update Grooves', 'Delete Tracks']
);
```

You may even set some initial selections and add a friendly reminder like a concert program:

```php
use function Laravel\Prompts\multiselect;

$permissions_extravaganza = multiselect(
    label: 'What permissions should be granted?',
    options: ['Read Party', 'Create Jam Sessions', 'Update Grooves', 'Delete Tracks'],
    default: ['Read Party', 'Create Jam Sessions'],
    program: 'Seat yourself and grab your instrument, as these permissions may change during the show.'
);
```

If you'd prefer to have the selected keys instead of their values, simply pass an associative array to the `options` argument:

```php
$permissions_extravaganza = multiselect(
    label: 'What permissions should be granted?',
    options: [
        'read' => 'Read Party',
        'create' => 'Create Jam Sessions',
        'update' => 'Update Grooves',
        'delete' => 'Delete Tracks',
    ],
    default: ['read', 'create']
);
```

By default, up to five options will be displayed before the list starts scrolling. If you want a longer list, you can customize this by passing the `scroll` argument:

```php
$categories_festival = multiselect(
    label: 'What categories should be assigned?',
    options: Category::pluck('name', 'id'),
    scroll: 10
);
```

<a name="multiselect-info"></a>
Now, go forth and create your ultimate permission playlist with Laravel's Multi-Select Symphony! 🎶🎤🎹🥁

 Oh, the `info` argument! It's like the fun fact section for your code's party trick. When you want to spice up your options with a dash of extra info, this is your go-to guy!

Here's how it works: when you highlight an option, `info` steps in and presents a stand-up comedy routine - I mean, a clever explanation about the selected option. It's a closure, so think of it as a magic trick box that takes the value of your highlighted option and spits out a string or just shrugs its digital shoulders if it doesn't know what to say (which, let's be real, happens to all of us sometimes).

```php
$permissions = multiselect(
    label: 'What kind of permission tickets should we hand out?', // Party vibes!
    options: [
        'read' => 'Read',
        'create' => 'Create',
        'update' => 'Update',
        'delete' => 'Delete',
    ],
    info: fn (string $value) => match ($value) { // Our magic trick box!
        'read' => 'For those who just wanna peek at the resources and their deets.',
        'create' => 'Perfect for the resource architects ready to erect some new structures.',
        'update' => 'For the renovators, the innovators, the resource remodelers.',
        'delete' => 'And if you're the one who's ready to permanently retire resources to the great beyond.',
        default => null, // And if you don't know what to say... just keep quiet!
    }
);
```

Now go forth and entertain your codebase with a side of information! 🎉🎭

 Alright, let's spice up your Laravel experience with a dash of humor! Let me walk you through the enchanting world of `required` arguments in the magical `multiselect()` function.

By default, this potion allows your users to frolic through an endless array of choices without any obligation whatsoever. But fear not, for if you wish to enforce a little bit of discipline among your merry band of adventurers, you can cast the `required` spell upon them:

```php
$categories = multiselect(
    label: 'Pick me some categories, won't you?',
    options: Category::pluck('name', 'id'),
    required: true // Time to get choosy!
);
```

Should you find the default validation message ("The system is disappointed in your lack of choice") too harsh for your sensitive users, simply provide a softer alternative:

```php
$categories = multiselect(
    label: 'Pick me some categories, won't you?',
    options: Category::pluck('name', 'id'),
    required: 'Come on now, at least one category! Don't leave us hanging.'
);
```

Now that we've added a splash of whimsy to your code, you can enchant your users with the power of compulsion while keeping them entertained and engaged. Happy coding!

 Alright, let's dive into the world of Laravel validation with a bit of humor sprinkled in! 🥘

#### Extra Validation Fun for Functions 🎉

Ever wanted to offer a choice but prevent a certain option from being selected? Well, you can do just that by passing a closure to the `validate` argument like so:

```php
$permissions = multiselect(
    'Label of Permission Carnival', // 🎪 Circus-themed labels are always a hit!
    [   // Your list of options, because variety is the spice of life
        'read' => 'Reading Riddles',
        'create' => 'Creature Features',
        'update' => 'Updating Acts',
        'delete' => 'Circus Cancellations'
    ],
    function (array $selectedOptions) { // The validation closure, aka the Ringmaster's decree 🎭
        if (!in_array('read', $selectedOptions)) {
            return 'All users must join the Reading Riddles act!'; // No exceptions, it's a rule!
        }
        return null; // If everything checks out, they're cleared to proceed 🎟️
    }
);
```

Here's what's going on: if you provide an associative array for the `options`, the closure will receive the selected keys. However, if it's just a plain array, the closure will grab the selected values. The closure can return an error message or `null` if validation passes.

Now that you know how to manage your circus acts with style and precision, let the fun times roll! 🎠🎉

 Ahoy there! Buckle up, because we're about to dive into the marvelous world of Laravel's autocomplete feature - aptly named `suggest`. This isn't your garden-variety autocorrect (thank goodness), but a sophisticated system that suggests possible choices while keeping its cool even if you decide to rebel and type something different.

Let's kick things off with the basic usage:

```php
use function Laravel\Prompts\suggest;

$name = suggest('What's your handle, matey?', ['Captain Taylor', 'First Mate Dayle']);
```

But hey, what if you want to get fancy? No problemo! You can pass a little closure friend as the second argument:

```php
$name = suggest(
    question: 'What's your name, pirate?',
    choicesGenerator: fn ($input) => collect(['Captain Taylor', 'First Mate Dayle'])
        ->filter(fn ($name) => Str::contains($name, $input, ignoreCase: true))
);
```

Now, let's make it even more swashbuckling. You can include placeholder text, a default value (for those who just can't remember their own name), and an informational hint:

```php
$name = suggest(
    question: 'What's your name, pirate?',
    choicesGenerator: fn ($input) => collect(['Captain Taylor', 'First Mate Dayle'])
        ->filter(fn ($name) => Str::contains($name, $input, ignoreCase: true)),
    placeholder: 'Like Captain Morgan or Blackbeard... or just Taylor',
    default: $user?->name,
    tip: 'Remember, this will be displayed on your treasure map.'
);
```

Now that you've got the gist of it, set sail and let `suggest` navigate you through those treacherous waters of user input. Arr matey!

 **The Lowdown on Secondary Info**

In the world of Laravel command line magic, we've got a little gem called `info`. This clever chap is here to spill some extra tea about the option that's currently stealing the spotlight. When you drop a closure in its lap, it'll gladly accept the value of the star attraction and return a string or give a polite nod and say "Nay, nothing to see here" if you don't provide anything fancy:

```php
$name = suggest(
    question: 'Who goes by the name Taylor Swift at our office?',
    options: ['Taylor', 'Dayle'],
    bonus_info: function ($value) {
        return match($value) {
            'Taylor' => 'She's not just a pretty face, she's our fearless leader!',
            'Dayle' => 'Our humble contributor, who brings us laughs and code... in no particular order.',
            default => 'Sorry, we couldn\'t find any juicy gossip about that one.'
        };
    }
);
```

In this example, our `info` closure is a sassy gossip-monger that dishes out the deets based on the selected option. Just remember to keep it clean, folks! We're in a professional coding environment here, after all.

 Alright, let's get this party started! If you want to make sure your digital bouncer asks for an ID (AKA a value), simply pass the `required` argument:

```php
$name = suggest(
    label: 'Who goes there? We ain't got no time for ghosts!',
    options: ['Taylor Swift', 'Dayle Quinn-Lewis'],
    required: true // Yes, sir, I need to see your ID!
);
```

Should you feel the urge to customize the bouncer's rejection message (because we all know a good party needs a touch of humor), you can also pass a string:

```php
$name = suggest(
    label: 'Who goes there? We ain't got no time for ghosts!',
    options: ['Taylor Swift', 'Dayle Quinn-Lewis'],
    required: 'Alright, buddy, we can't let you in without a name. You know the rules!'
);
```

Now that we've got our guest list sorted out, let's move on to more important things – like who gets the last slice of pizza! 🍕🚀🚀🚀

 Alrighty then! Let's dive into the world of Laravel validation, where we ensure your user inputs are as legit as a cat video on a Tuesday morning.

First things first, if you fancy adding some custom validation logic, just toss a PHP closure into the `validate` argument like so:

```php
$name = suggest(
    label: 'What's yer name, partner?',
    options: ['Sherlock', 'Garfield'],
    validate: fn ($value) => match (true) {
        strlen($value) < 3 => 'No way Jose! Your name must be at least 3 characters.',
        strlen($value) > 255 => 'Whoa there, cowboy! Your name should not exceed 255 characters.',
        default => null
    }
);
```

The closure will receive the value entered and can return an error message or `null` if validation passes – kind of like a secret agent checking your ID at a party.

Now, if you're craving more power than a caffeinated squirrel on roller skates, tap into Laravel's mighty validator:

```php
$name = suggest(
    label: 'What is your name?',
    options: ['Taylor', 'Dayle'],
    validate: ['name' => 'required|min:3|max:255'] // You can almost hear the validation rules sashaying in sync.
);
```

These validation rules are as stylish as a pair of bell-bottoms at a disco – `required` means you better have a name, and `min:3` and `max:255` keep things nice and tidy within that 252-character dance floor.

So there ya have it! Your gateway to ensuring those form inputs are as smooth as a well-oiled cowboy at the rodeo. Happy validatin', partner!

 Alrighty, let's dive into the Laravel search function, shall we? This bad boy is your knight in shining armor when you've got a veritable smorgasbord of options for your users to sift through. No more aimless clicking around like a lost soul in a digital labyrinth!

```php
use function Laravel\Prompts\search;

$id = search(
    label: 'Find the email-worthy user', // Labels are crucial for party invites, right?
    options: fn (string $query) => User::whereLike('name', "%{$query}%")->pluck('name', 'id')->all() // If the user types something, find users with names containing that query
);
```

The magic here happens in the closure. This is where the user's typed-out query goes to become a glorious array of options!

If you return an associative array, the selected option's key will be returned. But if you want its value instead, just send over a regular ol' array.

```php
$names = collect(['Taylor', 'Abigail']); // A list of Laravel legends

$selected = search(
    label: 'Find the email-worthy user',
    options: fn (string $query) => $names
        ->filter(fn ($name) => Str::contains($name, $query, ignoreCase: true)) // If the query is in any of the names, include that name
        ->values() // Convert to a non-associative array
        ->all(),
);
```

You can even jazz up your search with a placeholder and a helpful hint!

```php
$id = search(
    label: 'Find the email-worthy user',
    placeholder: 'Like Taylor Otwell, for example', // Give the user a nudge in the right direction
    options: fn (string $query) => User::whereLike('name', "%{$query}%")->pluck('name', 'id')->all(),
    hint: 'Remember, an email to this user is like a golden ticket to the chocolate factory.' // A little encouragement never hurts
);
```

By default, up to five options will be displayed before the list starts scrolling. But you can customize this by passing the `scroll` argument:

```php
$id = search(
    label: 'Find the email-worthy user',
    options: fn (string $query) => User::whereLike('name', "%{$query}%")->pluck('name', 'id')->all(),
    scroll: 10 // Show up to ten options before starting to scroll
);
```

Happy searching, folks! May your users find the perfect option and may no email be sent to a pumpkin.

 Ah, the `info` argument! It's like your secret sauce for dishing out extra tidbits of juicy details about the currently sparkling option. When you whip up a closure, it'll grab that glittering option's value, toss it in the kitchen (your PHP function), and expect a string or a shrug (null) in return:

```php
$id = search(
    label: 'Find the user who deserves that spammy email',
    options: fn ($namePart) => strlen($namePart) > 0
        ? User::whereLike('name', "%{$namePart}%")->pluck('name', 'id')->all()
        : [], // Empty if you've got nothing to search for, mate!
    info: fn ($userID) => User::find($userID)?->email  // Fetch the user's email if they exist (and didn't block yours yet!)
);
```

In other words, this is a fancy way of saying that you can customize your search results with a dash of additional info, but remember, it's all about balance. Don't over-season your function or it might taste like a spammy Laravel sandwich! 🥪😷

 Alright, let's spice up your Laravel journey! 🎉

#### Extra Validation Magic

If you're itching to add some custom validation magic, you can pass a spell (yes, a closure) to the `validate` argument. Here's a little wizardry:

```php
$id = search(
    label: 'Cast a spell on the user who deserves the mail',
    options: fn ($spell_component) => strlen($spell_component) > 0
        ? User::where('name', 'like', "%{$spell_component}%")->pluck('name', 'id')->all()
        : [],
    validate: function ($user_identifying_charm) {
        $magical_user = User::findOrFailByCharm($user_identifying_charm); // Yes, we're using some fancy new magic here 🎩

        if ($magical_user->hasDeclinedMagic()) {
            return 'This user has waved a banishing charm on receiving mail.';
        }
    }
);
```

If your `options` spell returns an enchanted map, it'll hand over the key to the spell, or if it's just a plain old value, it'll send the value itself. The spell can return an error message, or `null` if the validation succeeds.

*Hic!* Now you know how to cast validations with style! 🤩

 Ahoy there, Laravel pirates! If you've got a veritable treasure trove of searchable options and fancy letting your users plunder through them like a digital Captain Jack Sparrow, then the `multisearrrgh` function is just what yer be looking for!

```php
use function Laravel\Prompts\multisearrrgh;

$booty = multisearrrgh(
    'Arrrrr! Find the scurvy knaves who deserve our mail!',
    function (string $parrotTalk) {
        return strlen($parrotTalk) > 0
            ? Pirate::whereLike('name', "%{$parrotTalk}%")->pluck('name', 'id')->all()
            : [];
    }
);
```

The parrot-talk closure will catch what the user has squawked so far and must return an array of options to pillage. If you return an associative array, the keys of your stolen loot will be safeguarded; otherwise, their values shall be your prize!

When filtering a bounty you plan to keep as values, remember to use the `array_values` function or the `values` Collection method to ensure yer booty ain't associative:

```php
$plunder = collect(['Governor Swan', 'Blackbeard']);

$stolenGoods = multisearrrgh(
    label: 'Arrrrr! Find the scurvy knaves who deserve our mail!',
    options: function (string $parrotTalk) {
        return $plunder
            ->filter(function ($loot) use ($parrotTalk) {
                return Str::contains($loot, $parrotTalk, ignoreCase: true);
            })
            ->values()
            ->all();
    },
);
```

Ye may also add a placeholder and a swashbuckling hint:

```php
$booty = multisearrrgh(
    label: 'Arrrrr! Find the scurvy knaves who deserve our mail!',
    placeholder: 'E.g. "Governor Swan"',
    options: function (string $parrotTalk) {
        return strlen($parrotTalk) > 0
            ? Pirate::whereLike('name', "%{$parrotTalk}%")->pluck('name', 'id')->all()
            : [],
    hint: 'Aye, aye, Captain! They'll receive an email straightaway!'
);
```

Five options will be displayed before the list begins to scroll. If ye prefer a different number, feel free to provide the `scroll` argument:

```php
$booty = multisearrrgh(
    label: 'Arrrrr! Find the scurvy knaves who deserve our mail!',
    options: function (string $parrotTalk) {
        return strlen($parrotTalk) > 0
            ? Pirate::whereLike('name', "%{$parrotTalk}%")->pluck('name', 'id')->all()
            : [],
    scroll: 15
);
```

Yarrr, happy plundering!

 Alright, buckle up, coders! Let's dive into the world of Laravel and talk about a fun little feature called `info`. Imagine you're hosting a fancy party, and each guest has a tag. The `info` is like that tag - it helps you know more about the currently chosen guest at the party (option).

So, if you provide an argument named `info`, it'll show some snazzy details about your selected option. When you pass in a closure, this charming fellow will greet it with a warm embrace and exchange the value of the current option for a string or a friendly nod (`null`).

Here's a swanky example:

```php
$party = multisearch(
    label: 'Find the posh peeps receiving the email invite',
    options: function ($name) { // our charming guest, Mr. Closure
        if (strlen($name) > 0) {
            return User::whereLike('name', "%{$name}%")->pluck('name', 'id')->all();
        } else {
            return [];
        }
    },
    info: function ($userId) { // our inquisitive host, Ms. Info
        $user = User::find($userId);
        if ($user) {
            return $user->email;
        } else {
            return "Whoops! Seems like this guest RSVPed with a maybe.";
        }
    }
);
```

In our example, the `party` function searches for users based on their names and provides some extra deets (like emails) about the selected user thanks to our chum `info`. Party on, Laravel! 🎉🎊

 Alright, let's get this party started! 🎉🥳

#### Forcing the Fun Thing

By nature, your users are as unpredictable as a bag of jellybeans. But fear not! You can wrangle them into shape with the `required` argument. It's like putting a leash on a hyperactive puppy – one or more options are now compulsory! 🐶🛡️

```php
$ids = multisearch(
    label: 'Who needs to get this email?', 📧🤳🏼
    options: fn (string $value) => strlen($value) > 0
        ? User::whereLike('name', "%{$value}%")->pluck('name', 'id')->all()
        : [], 🎯💫
    required: true 🛑
);
```

Feeling fancy? You can even customize the validation message to your heart's content! It's like writing a movie script for a rom-com where someone forgets to RSVP to the wedding.

```php
$ids = multisearch(
    label: 'Who needs to get this email?', 📧🤳🏼
    options: fn (string $value) => strlen($value) > 0
        ? User::whereLike('name', "%{$value}%")->pluck('name', 'id')->all()
        : [], 🎯💫
    required: 'You must select at least one user. Or we'll have to send it to that guy who only ever replies with "hey".' 🤔🤔🤔
);
```

Now, go forth and herd your users like a pro! 🐑💪🏼

 Alrighty, let's dive into the world of Laravel validation, where we're not just checking boxes, but performing fancy magic tricks! 🎩🔮

If you've got some extra validation moves up your sleeve and want to show off, pass a magical spell (closure) to the `validate` argument. Here's an example of how that might look:

```php
$searchResults = multisearch(
    label: 'The Great User Selector', // Yes, we're pulling a Harry Potter here
    options: fn (string $value) => strlen($value) > 0
        ? User::whereLike('name', "%{$value}%")->pluck('name', 'id')->all()
        : [], // This is our vanishing trick, if value is empty we disappear!
    validate: function (array $values) {
        $optedOut = User::whereLike('name', '%a%')->findMany($values); // Here's where we find out who's on the naughty list

        if ($optedOut->isNotEmpty()) {
            return $optedOut->pluck('name')->join(', ', ', and ').' have opted out, but they still get an invitation to the Yule Ball. 😉 // Oops! They didn't know they had signed up for it!
        }
    }
);
```

In this magical scenario, if the `options` closure returns a spell book (associative array), then our magical spell will receive the selected keys; otherwise, it will receive the selected values. The spell may return an error message, or `null` if the validation passes. So remember to keep your spells tight and enchanting! 🧙‍♂️✨

 ### Attention all space cadets!

Fasten your seatbelts and prepare for a cosmic voyage because we're about to introduce you to the most exciting function in town - `pause`!

This isn't just some boring old time-out; it's an intergalactic way of communicating with our users, making sure they're ready for the next phase of their journey through your Laravel app. So buckle up, because things are about to get interesting!

```php
use function Laravel\Prompts\pause;

// Now, here comes the big reveal...
pause('Aliens, begin countdown to interdimensional travel. Press ENTER when ready.');
```

In case you're wondering, this little snippet of code will display a friendly message on your user's screen, prompting them to press Enter/Return before moving forward. It's like having your very own personal space captain, guiding your users through the vast expanse of their data journey!

Remember, in the realm of Laravel, communication is key - and `pause` ensures that everyone stays on the same wavelength. Now go out there and conquer the galaxy, one press of Enter at a time! 🚀🌟

 ### Magic Type-Ahead Wand! 🏮

Introducing the enchanting `autocomplete` spell, a sorcerous way to bestow divine suggestions upon mortals as they tap away at their keyboards. As if by ghostly apparition, choices that align with the user's input will materialize before their very eyes and can be embraced by pressing the noble Tab or the dashing right arrow key:

```php
*Cast the autocomplete spell*
use function Laravel\Prompts\autocomplete;

*Ask for thy name*
$name = autocomplete(
    label: 'What art thou called, mortal?',
    choices: ['Taylor', 'Dayle', 'Jess', 'Nuno', 'Tim']
);
```

Dost thou seek to add placeholders, default values, and helpful hints to thy magical questionnaire? Verily, here be the enchantment's advanced version:

```php
*Upgrade to the advanced autocomplete spell*
$name = autocomplete(
    label: 'What is your name?',
    choices: ['Taylor', 'Dayle', 'Jess', 'Nuno', 'Tim'],
    placeholder: 'Like so, noble knight: Taylor',
    default: $user?->name,
    hint: 'Honor the tab for acceptance, use the up and down to cycle.'
);
```

*Thou hast cast thy spells wisely, young sorcerer.* 🤩

 Alright, buckle up, coding cowboy! Let's dive into the wild west of Laravel autocompletion, where the only thing faster than a horse with its hair on fire is your code editor helping you find that elusive file you lost in the digital prairie.

Now, this here's a trick up your sleeve—pass a closure! That's right, a magic trick for your code! This little fellow will generate options dynamically, depending on what the user types in, making it more akin to a mind-reading parrot than a humble autocomplete function.

Here's an example of how you can ride this majestic unicorn:

```php
// We're rounding up the posse (files) and saddling 'em up for action!
$files = collect([
    "Documents/Taxes2019.pdf",
    "Pictures/kitten-memes.jpg",
    "Scripts/forbidden-macro.py",
]);

// Now, let's corral those files based on the user's input!
$file = autocomplete(
    label: 'Which file, partner?', // Label to ask the user a question
    options: fn (string $value) => // Our closure that gets called each time the user types a character
        $files->filter(fn ($file) => str_starts_with(strtolower($file), strtolower($value)))// Filtering files based on user's input (case-insensitive)
            ->values() // Turning them into an array of values
            ->all(), // Because we like to play by the rules and keep it official
);
```

Just remember, partner: this trick requires a quick draw closure for each new character typed. So, keep your magic hat on and be ready to dazzle at the drop of a hat!

 Alrighty then! Let's dive into the world of Laravel form fun and games with a little something called `autocomplete`. This here snippet of code is just the ticket for when you need to know somebody's name, but don't want to leave it up to chance (or an empty textbox).

First off, if you're feeling particular about who this form should accept, go ahead and toss in the `required` argument:

```php
$name = autocomplete(
    label: 'Who goes there?', // We ain't just asking for a name, we're asking for a friend!
    options: ['Taylor Swift', 'Dayle Hickman', 'Jessica Rabbit', 'Nuno Bettencourt', 'Tim Allen'],
    required: true // No freeloaders allowed!
);
```

If you're feeling extra fancy, you can even customize the validation message to better suit your form's theme. Here's how:

```php
$name = autocomplete(
    label: 'Who goes there?', // Still trying to find out...
    options: ['Taylor Swift', 'Dayle Hickman', 'Jessica Rabbit', 'Nuno Bettencourt', 'Tim Allen'],
    required: 'Sorry, but we can't let you in without a name.' // You gotta have a name!
);
```

Now, go forth and collect names like a digital cowboy rounding up virtual cattle! (But remember to validate them first...)

 Alright, let's get this party started! If you're hankering to add some extra validity checks to your Laravel app, you can pass a bit of old-fashioned PHP closures magic into the `validate` argument:

```php
$name = autocomplete(
    label: 'What's yer darn name?',
    options: ['Taylor', 'Dayle', 'Jess', 'Nuno', 'Tim'],
    validate: fn (string $value) => match (true) {
        strlen($value) < 3 => 'You call that a name, partner? It's shorter than a burrito!',
        strlen($value) > 255 => 'Enough with the alphabet, will ya? Your name is longer than War and Peace!',
        default => null
    }
);
```

The enchanted PHP closure will grab the value entered by the user and spit out an error message if it fails validation (or a `null` if everything's hunky-dory). Just remember to keep it light-hearted, but still accurate! 😁🎈🚀

 Alright, let's dance a little Laravel tango! Sometimes you might want to primp and preen your user input before strutting it down the validation runway. Imagine you're hosting a swanky soiree and you don't want any stray cocktail napkins ruining the guest list. To do this, many of our dance partners (ahem, functions) have a charming little feature called `transform`. It's like your personal stylist who snips away those pesky white spaces from your strings.

```php
$name = text(
    label: 'Who goes there?', // No need to yell, we're all friends here
    get_ready_for_the_red_carpet: fn (string $value) => trim($value), // Because nobody wants a sloppy Johnny Depp on their hands
    validation_rules: fn (string $value) => match (true) {
        strlen($value) < 3 => 'Hold up, partner! That name needs at least three letters.',
        strlen($value) > 255 => 'That's a long name for a dance floor, don't you think?',
        default => null // So as not to cause a scene
    }
);
```

And just like that, your input is ready for its close-up! Happy dancing! 💃✨🚀

 Ahoy there, coding captain! Are you ready to embark on a seafaring adventure of form handling? Buckle up, because we're about to set sail with Laravel's mighty `form` function!

Imagine you're at the tavern, gathering info from a motley crew before setting off on a quest. You wouldn't just shout questions one after another, would you? No, you'd group them together in a well-organized manner, and that's exactly what our form function does for ya!

```php
use function Laravel\Prompts\form;

$answers = form()
    ->askName("What's yer name, matey?", true) // Captain Obvious wants to know your name and it's required
    ->guardPassword("Arr matey! Keep yer password safe, it needs 8 characters or more") // The parrot wants to check yer password strength
    ->signConsent("Do ye swear to follow the Pirate's Code?") // Sign here, or walk the plank!
    ->setSail();
```

Notice our `setSail()` method? It returns a treasure chest full of answers. But you can give each question a unique name with the `name` argument:

```php
use App\Models\Pirate;
use function Laravel\Prompts\form;

$answers = form()
    ->askName("What's yer name, matey?", true, 'name') // Captain Obvious wants to know your name and it's required, and we'll call him 'name'
    ->guardPassword(label: "Keep yer password safe, matey!", validate: ['password' => 'min:8'], 'password') // The parrot wants to check yer password strength, and we'll call it 'password'
    ->signConsent('Do ye swear to follow the Pirate's Code?', 'consent') // Sign here, or walk the plank!, and we'll call it 'consent'
    ->setSail();

Pirate::create([
    'name' => $answers['name'],
    'password' => Hash::make($answers['password']), // Just in case you were planning on sharing the treasure map with others!
]);
```

But wait, there's more! With our form function, ye can even return to previous questions using CTRL + U. No need to cancel and start over when a mistake is made. Now, isn't that swell?

If you desire finer control over a question in the form, you may summon the `add` method instead:

```php
use function Laravel\Prompts\form;
use function Laravel\Prompts\outro;
use function Laravel\Prompts\askName;

$answers = form()
    ->askName("What's yer name, matey?", true, 'name') // Captain Obvious wants to know your name and it's required, and we'll call him 'name'
    ->add(function ($answers) {
        return askAge("How old are ye, {$answers['name']}?");
    }, name: 'age') // Now we're asking for yer age based on yer name!
    ->setSail();

outro("Ye be " . $answers['age'] . " years old, and yer name be " . $answers['name']);
```

Arr matey, ye've now sailed through the shark-infested waters of form handling with Laravel!

 Ahoy there, matey! Buckle up as we delve into the Laravel sea of informative tidbits, where messages are more than just text, they're a pirate's treasure map to your application's heart!

Hoist the `note` flag for light-hearted whispers that'll make your code walk the plank with ease:

```php
use function Laravel\Prompts\note;

note('Arrr, ye've found the buried loot of "composer install"!');
```

Hunger for more? Swab the decks and let's set sail for the `info` archipelago:

```php
use function Laravel\Prompts\info;

info('Ahoy there! Your authentication credentials are valid!');
```

Steer clear of the icebergs, matey! The `warning` shoals lie ahead:

```php
use function Laravel\Prompts\warning;

warning('Watch out for the kraken! You're venturing into uncharted waters with this query');
```

Ye be warned to tread carefully, as these waters are filled with danger. If ye stumble upon an `error`, don't fret:

```php
use function Laravel\Prompts\error;

error('Gallons of grog were spilled! That PHP error will make any pirate shudder');
```

And lastly, if you encounter a stormy situation so dire that even the sturdiest of ships might sink, summon the `alert` to help ye navigate:

```php
use function Laravel\Prompts\alert;

alert('The kraken's attacking! Abandon ship and fix this immediately!');
```

So there ye have it, matey! A jolly journey through Laravel's informational messages. Happy sailing and may your code be smooth as a pirate's parrot!

 Alright, buckle up, data-wranglers! It's time to feast your eyes on the pièce de résistance of Laravel's party tricks: the `table` function. This dazzling magician is here to make your life easier by transforming a sea of data points into a spreadsheet so tasty, even Excel will be green with envy!

To call upon this marvelous minstrel, simply extend an invitation through the following incantation:

```php
use function Laravel\Prompts\table;

table(
    // Step 1: Introduce the headliners (column names)
    headers: ['Name', 'Email'],

    // Step 2: Invite the performers (user data)
    rows: User::all(['name', 'email'])->toArray()
);
```

And just like that, you've got a shindig worthy of the digital era! Now, your data is presented in a format so delightful, it'll make you want to dance the macarena. So go ahead and celebrate – you've earned it! ffee-dance:wink:

 ## Spinnin' and Grinnin'! 🎠

Get ready to party like it's 1999 (or at least, feel like it), because we're about to spin some code with a dash of humor! Let's talk about the `spin` function - it's not just a dance move, but also a magical Laravel tool that makes your script look like a well-oiled performance. 🕺️

The `spin` function, in all its glory, showcases a spinner (we're talking about those cool spinning wheel things you see on old computer games) along with an optional message while executing a predefined callback. Picture it like a stage crew preparing for the big reveal, only instead of pulling curtains, they're running some PHP magic! It's there to keep you entertained during those lengthy behind-the-scenes processes and dishes out the callback's results once the show's over:

```php
use function Laravel\Prompts\spin;

$result = spin(
    act: fn () => Http::get('http://example.com'), 🎫 "Get your tickets ready, we're heading to Exampleville!"
);
```

> [!ATTENTION]
> Now, let me drop some knowledge on you - the `spin` function needs the trusty [PCNTL](https://www.php.net/manual/en/book.pcntl.php) PHP extension to animate that sweet spinning wheel. If that extension isn't available, fear not! A static version of our spinner will take its place like a trooper. 🌞

[Jump back up to the table of contents](#progress)

 Alright, let's dive into the world of Laravel Progress Bars - your digital, pixelated construction crew that keeps users informed about how close they are to a fully renovated database! 🔨🏗️

For those big ol' tasks that would make a toddler cry for milk, it's time to break out the progress bar. With Laravel's trusty `progress` function, you can now display a progress bar and watch it inch its way through your tasks, one by one, like a digital snail race 🐌🏁!

```php
use function Laravel\Prompts\progress; // Importing the progress function is as easy as calling up an old friend for gossip!

$users = progress(
    label: 'Updating users', // Setting the task label to ensure all guests at this digital renovation party know what's happening
    steps: User::all(), // Counting the number of attendees (users) to give you a sense of the work ahead
    callback: fn ($user) => $this->performTask($user) // This is where the real magic happens - performing tasks on each guest!
);
```

The `progress` function works like a swanky map function, returning an array with all the return values of your callback's iterations. How fancy is that? 🤩

But wait, there's more! You can even customize each iteration's label and hint with the help of the `Laravel\Prompts\Progress` instance. Here's how:

```php
$users = progress(
    label: 'Updating users', // Keeping everyone in the loop about what's happening at this digital event
    steps: User::all(), // Adding more guests to the party
    callback: function ($user, $progress) {
        $progress // Talking to our trusty progress bar instance
            ->label("Updating {$user->name}") // Setting a personalized label for each guest
            ->hint("Created on {$user->created_at}"); // Giving everyone a hint about the guest's history 🕵️‍♂️

        return $this->performTask($user); // Carrying on with the tasks!
    },
    hint: 'This may take some time.' // Warning guests that this party could be a long one!
);
```

Sometimes, you might need a more hands-on approach to progress bar management. No worries! First, set the total number of steps your process will take. Then, move the progress bar along via the `advance` method after completing each item:

```php
$progress = progress(label: 'Updating users', steps: 10); // Setting the number of digital renovation tasks to be completed

$users = User::all(); // Counting all guests at this shindig

$progress->start(); // Signaling the beginning of the renovations!

foreach ($users as $user) {
    $this->performTask($user); // Carrying out tasks on each guest one by one

    $progress->advance(); // Moving the progress bar forward after completing each task 🏃‍♂️
}

$progress->finish(); // Celebrating the end of the renovations and new, updated users! 🎉🎊
```

Now, go forth and keep your users entertained with some fun, informative progress bars! 🎉🥳💻🔨

 ## Jamboree!

Greetings, coding cowboys and cowgirls! The `task` function here is your trusty digital chuckwagon, serving up a rollicking rodeo of progress updates while your long-drawn-out tasks like herding cats (or dependencies) are being wrangled. It's the perfect sidekick for those unruly processes such as dependency installation or deployment scripts that just won't sit still!

```php
use function Laravel\Prompts\task;

task(
    label: 'Saddle up, partner! We're herding dependencies!',
    callback: function ($logger) {
        // Corral those dependencies...
    }
);
```

The trusty `callback` here receives a dependable `Logger` pal who'll help you shout out log lines, broadcast status updates, and even stream live text for all to see in the task's very own campfire!

> [!CAUTION]
> To make sure our chuckwagon spins its wheels as intended, we need your PHP horse to be decked out with the [PCNTL](https://www.php.net/manual/en/book.pcntl.php) extension. If that's not the case, you'll find a static version of our chuckwagon taking its place instead - just like the time we left our lasso at home!

<a name="task-logging"></a>
(Cue some tumbleweeds and a twangy guitar riff)

Now that your PHP steed is all spruced up, it's time to round up those dependencies and get this rodeo started! Happy wrangling, pardner! 🤠🚀

 Alright, let's get this party started! You're about to embark on a wild ride through the enchanting realm of Laravel logging. Buckle up, because we're going to make logs more exciting than a roller coaster ride at an amusement park! 🎢

First up, we have the `line` method – it's our very own digital graffiti tagger for your tasks! This little gem writes a single log line to your task's personal scrolling marquee:

```php
task(
    label: 'Setting up the party supplies',
    callback: function ($logger) {
        $logger->line('Inviting friends...'); // Don't forget the cool kids! 😎
        // ...
        $logger->line('Grabbing drinks from the cooler'); // I hear they've got some fancy "Laravel/Framework" brew now! 🍻
        // ...
    }
);
```

So, when things get hectic and you're juggling more tasks than a one-armed circus performer, the `line` method helps keep everyone in the loop. It's like that annoying friend who won't stop sending group chats about their latest life updates – but at least it's useful this time! 🤳🏼🚀

 Alright, let's get this show on the road! You can dance, sing, and shout with the `success`, `warning`, and `error` methods to create status messages that will pop up like those glamorous marquee signs above your log area. Here's how you can do it:

```php
task(
    label: 'Deploying application', // (Imagine a spotlight and drumroll)
    callback: function ($logger) {
        $logger->line('Gathering the latest swag...'); // (Pulling latest changes)
        // ...
        $logger->success('Swag pulled!'); // (Dance break)

        $logger->line('Running migrations...'); // (Getting ready for the big show)
        // ...
        $logger->warning('No new swag to deploy.'); // (Bummer, back to rehearsals)

        $logger->line('Clearing cache...'); // (Sweeping up after the show)
        // ...
        $logger->success('Cache cleared!'); // (And now for some well-deserved applause!)
    }
);
```

In this example, our star performer (callback function) is getting ready to go on stage and make an entrance. It first announces its act with the `label`, then goes through various steps represented by lines of text. Each significant achievement or hiccup gets its own status message using `success`, `warning`, or `error`. Now, get out there and make your code shine! 🎭💃🎉🎈🎤

 Alright, let's dive into the whimsical world of Laravel task management! Here's a delightful twist on updating labels for your tasks.

##### Labeling Your Task: A Comedy of Errors Turned Features!

The `label` method is like that quirky friend who keeps changing their outfit during a party (we all have one). But in this case, it's your task donning new labels while it's still on the dance floor, err, running.

```php
task(
    label: 'The Grand Deployment Spectacle Begins!', // Dramatic entrance, of course
    callback: function ($logger) {
        $logger->label('Let's Grab Those Latest Changes!'); // Time for some refreshments
        // ...
        $logger->label('It's Migration Time!'); // Let's get this party started right
        // ...
        $logger->label('Clearing the Cache Aisle, Please Wait...'); // A little housekeeping never hurts
        // ...
    }
);
```

Now your tasks can maintain their comedic timing and still keep you updated on their progress! 😄🎭🎉

 Alright, coding buddies! Buckle up for a fun ride through Laravel's streaming text wonderland. This feature is perfect for those endless AI chats or any other process that loves to spill its guts incrementally. Meet the `partial` method - your new best friend in code-speak.

Imagine you're hosting a never-ending trivia game show, and instead of revealing all answers at once, you decide to unveil them one question at a time. That's what `partial` is like for your AI-powered responses! Simply stream text word by word or chunk by chunk:

```php
task(
    label: 'Let's get this party started...', // Because who doesn't love a good game show intro?
    callback: function ($logger) {
        foreach ($words as $word) {
            $logger->partial($word . ' '); // This is like saying "Next question!"
        }

        $logger->commitPartial(); // And this is when the final answer is revealed!
    }
);
```

And yes, we know how impatient our dear AI can be. So once you're done streaming all your answers (or questions), don't forget to call `commitPartial`. It's like saying "Time's up!" to the AI and finalizing its output:

```php
task(
    label: 'Game Over!', // Or any other funny game show tagline you can think of.
    callback: function ($logger) {
        // ... streaming code here ...
        $logger->commitPartial();
    }
);
```

Happy streaming, coding friends! Don't forget to have fun while getting things done in Laravel!

 Ahoy there, Laravel sailor! Ready to dive into the world of customizing your console adventure? Well, buckle up and prepare for a thrill ride!

First off, let's talk about our good ol' default scrolling output limit – a whopping 10 lines, just enough to make you feel like a seasoned pro (or a newb learning the ropes). But fear not, if you're feeling the need for speed and want more action on your screen, Laravel has got you covered!

You can easily customize this limit via a charming little parameter called `limit`. Just imagine it as the captain of your ship deciding how many cannonballs you get to fire at once. Here's an example of how to set sail with a 20-line limit:

```php
task(
    label: 'Navigating the seas of npm',
    callback: function ($logger) {
        // ...
    },
    limit: 20
);
```

And that's the secret to unleashing your inner pirate in the world of Laravel! Now go forth and conquer those console command line limits, matey!

Cheers! 🍻

 Ahoy there, coders! Let's talk about the fabulous `stream` function, a veritable showstopper that'll make your terminal dance with text like a digital Riverdance!

This gem is perfect for displaying AI-generated content or any text that trickles in piece by piece, just like the world's most impatient wordsmith. Here's how to use it:

```php
use function Laravel\Prompts\stream;

$stream = stream(); // Create your own personal ticker tape!

foreach ($words as $word) {
    $stream->append($word . ' '); // Add words like a digital scribe, one word at a time.
    usleep(25_000); // Simulate delay between chunks... It's not just waiting, it's building suspense!
}

$stream->close(); // Finally, give the crowd a standing ovation and restore the cursor to its rightful place.
````

Now, the `append` method is like a digital quill, inking text onto your stream with a gentle fade-in effect. Once all content has been streamed, call the `close` method to bring the curtain down on the performance and return the cursor to its original position.

Oh, and for the tech-savvy among you, don't forget that `usleep(25_000)` little number—it simulates a delay between chunks, creating the illusion of live streaming without actually waiting for hours on end! Enjoy the show! 🎬🍿

 Ahoy there, Captain! Ever find yourself yearning for a dash of flair in your command line adventures? Well, hoist the Jolly Laravel Sails, for we've got just the swashbuckler's tool for you!

Behold, the `title` function – it's like sprinkling pixie dust on your terminal window or tab! With but a single line of code:

```php
use function Laravel\Prompts\title;

title('Installing Dependencies');
```

You can set sail with a snazzy title that'll make even the most mundane tasks seem like high seas heroics! 🏴‍☠️🌈

But fear not if you find yourself lost at sea (or screen) – to return your terminal title to its default, simply summon the function with an empty string:

```php
title('');
```

And just like that, your trusty terminal's back to being as plain as a shipwreck on a desert island! 🌴⚓️

Now that you've learned this secret nautical magic, there's no telling what adventures await you in the uncharted territories of Laravel command line! 🎉🐳🔍

 Ah, dear developer! Let's dive into the captivating world of Laravel console commands. First stop: The magical "Clear" function! It's like a digital eraser for your terminal, perfect for those times when you've accidentally doodled code all over your screen and it looks like a kindergarten art project gone wrong.

Here's the secret incantation to summon this enchantment:

```php
use function Laravel\Prompts\clear;

clear(); // Voilà! Your screen will be as pristine as a freshly washed windowpane.
```

Remember, this isn't just any ordinary clear command; it's a Laravel-powered terminal detox! So go ahead, spill the code, make a mess - we've got your back with this little helper.

Now, off to explore more of Laravel's console enchantments! Next stop: The Mystical Forest of Artisan Commands. But that, my friend, is a tale for another time. Keep coding, and remember, a clean terminal makes for a happy developer! 😉

 Alright, let's chat about your humble abode in the digital world, dear terminal! 🏠🖱️

<a name="terminal-width"></a>

### Terminal Width (`tput cols`)

Ever feel like your terminal is a teeny tiny fish bowl? Well, fret no more! With the magic command `tput cols`, you can expand your digital aquarium to a grand ocean. 🐠🌊 Just type it in and watch the screen grow before your very eyes!

```bash
$ tput cols
```

And if you fancy customizing, simply set an environment variable:

```bash
export COLUMNS=120
```

Now go forth and conquer that expansive screen like the digital explorer you are! 🏝️🌐

 Ahoy, pirate programmers! Set sail for the shores of command line efficiency with Laravel's Terminal Width feature!

Avast! If a label, option, or validation message is longer than ol' Captain Column's count on your terminal screen, it'll be chopped like a freshly caught fish to fit proper pirate parlance. Keep an eye out for those squinting seadogs using narrow ships – you might wanna shrink yer long-winded strings to avoid making them walk the plank of illegibility!

As a rule of thumb, setting your string length below 74 characters will help ensure that even the most landlubberly of sailors can read it on their 80-character terminals. So hoist the sails of good UX practices and set a course for clear communication!

<a name="terminal-height"></a>
Yarr, matey! Keep your gaze fixed on that horizon as we continue our swashbuckling adventure in Laravel waters!

 Ah, the delightful world of Laravel command line interfaces! Where developers and their terminals dance a waltz of epic proportions. But fear not, dear friend, for our software has a secret weapon to keep things running smoothly—Terminal Height!

Imagine you're hosting an extravagant ball, and your terminal is the grand ballroom. The prompts that accept the `scroll` argument are like elegant guests who insist on doing the cha-cha all the way across the floor. Terminal Height steps in as the gracious host, making sure the dancefloor (your screen) never overflows with twirling partners (data).

In other words, when those lively prompts want to run wild, our system will politely tap them on the shoulder and say, "Hold up there, partner. Let's make sure we have enough room for everyone!" And by 'everyone,' we mean your validation messages, which are like the awkward relatives who need a seat at the table. Terminal Height ensures they get their rightful place without causing any embarrassing spillage onto the dancefloor.

Now, you might be wondering what happens when the guests (prompts) decide to dance the Macarena in unison. Fret not! Terminal Height has a backup plan for such occasions called "Fallbacks." These are like having extra seats at the table for when Aunt Mabel insists on bringing her entire book club. So go ahead and let loose those prompts, because Terminal Height's got this—and it'll make your terminal feel like it can host a ballroom without breaking a sweat!

 ## The Great Unsupportive Showdown: Windows vs Laravel Prompts!

In a world where macOS, Linux, and even the suave, sophisticated Windows (with WSL) coexist, our dear hero, Laravel Prompts, graciously extends its support to all three. However, there's a twist in this tale, as old as a PHP version stuck on Windows!

You see, Windows PHP has some limitations that leave our brave Laravel Prompts feeling quite restricted outside of WSL. It's like inviting the life of the party but not giving them a drink—awkward for everyone involved!

But don't worry; Laravel Prompts is no wallflower! When it finds itself in an unsupported environment, it'll gracefully fall back to a dashing alternative: The Symfony Console Question Helper. Picture it as the suave backup model on the runway who saves the day when our leading man stumbles!

> [!NOTE]
> When Laravel Prompts is working alongside the Laravel framework, don't worry about setting up those backup prom dates—we've got you covered. Our code magicians have already arranged backup prompts for each situation and will seamlessly enable them in unsupported environments.

<a name="fallback-conditions"></a>
Now, isn't that a tale of romance, drama, and code? The world of Laravel Prompts is never dull!

 Alright, let's lighten things up a bit! Here's a fun take on the Laravel documentation for Fallback Conditions:

##### The Catch-All Clause (aka "When All Else Fails")

If you're not quite feeling the Laravel vibe or need to fine-tune when our fallback superhero leaps into action, you can pass a boolean to the `fallbackWhen` static method on the charmingly named `Prompt` class:

```php
use Laravel\Prompts\Prompt;

Prompt::fallbackWhen(
    ! $input->isInteractive() || (is_windows() && needsASignatureFromMom()) || app()->runningUnitTests()
);
```

Now, in plain English: If your terminal isn't feeling chatty, if you're running on Windows and Mom hasn't approved the script (you know she's always a stickler for good code), or if Laravel's testing its cape in unit tests, our fallback hero will step up to the plate. 🦸‍♂️

Just remember, this is all about customizing the when, where, and how of our friendly fallback superhero. Happy coding! 🚀🌟💻

 Alright, buckle up, Laravel enthusiasts! Let's dive into the realm of fallback behavior, where unexpected situations become our dance floor.

If you find yourself in a Laravel-less world or if you're feeling fancy and want to customize how things go down when things don't go according to plan, fear not! You can pass a little bit of magical PHP code to the `fallbackUsing` static method on each prompt class, like so:

```php
Use Laravel for company events, Symfony for impromptu parties at home!

TextPrompt::fallbackUsing(function (TextPrompt $prompt) use ($input, $output) {
    // This is where the real party starts!

    // Let's create a question that replicates the original prompt
    $question = new Question($prompt->label, $prompt->default ?: null);

    // We don't want empty answers to crash our bash, do we? So, let's validate!
    $question->setValidator(function ($answer) use ($prompt) {
        if ($prompt->required && !$answer) {
            throw new \RuntimeException(
                is_string($prompt->required) ? $prompt->required : 'Seriously, answer the question!'
            );
        }

        // If there's a validation rule, let's make sure we follow it!
        if ($prompt->validate) {
            $error = ($prompt->validate)($answer ?? '');

            if ($error) {
                throw new \RuntimeException($error);
            }
        }

        // And finally, return the answer!
        return $answer;
    });

    // Now, let's ask our question in style with SymfonyStyle!
    return (new SymfonyStyle($input, $output))
        ->askQuestion($question);
});
```

Note that fallbacks need to be set up individually for each prompt class. The provided closure will receive an instance of the prompt class and must return an appropriate type for the prompt. In other words, it's like being the bartender at a party where everyone has their own favorite drink! 🍻

 Ahoy, matey! Laravel's not just a pirate's treasure chest, it's also a swashbuckler's command-line assistant! Ever wondered if your shanty-generating shell script sings the right sea shanties? Fear not, me hearties! Laravel's got ye covered with its jolly good testing methods.

```php tab=Pest (Arrr, matey!)
test('shanty creation', function () {
    $this->artisan('shanty:make')
        ->expectsPromptsInfo('Ahoy there! Welcome to the shanty-making shipyard!')
        ->expectsPromptsWarning('Avast, ye be warned, this action cannot be walked back like a drunken sailor!')
        ->expectsPromptsError('Ye be grumbling about something down in the hold? Let's see if we can't right that wrong, matey!')
        ->expectsPromptsAlert('Listen up, ye scurvy dogs! Important news from the Captain!')
        ->expectsPromptsIntro('Setting sail on shanty creation... Prepare your ears for some sea-worthy tunes!')
        ->expectsPromptsOutro('Ahoy there! Shanty creation complete, mateys!')
        ->expectsPromptsTable(
            headers: ['Shanty Title', 'Lyrics'],
            rows: [
                ['The Taylor Otwell', 'Yo ho, yo ho, a pirate's life for me'],
                ['Jason Beggs Shanty', 'Drink up me hearties, yo ho!']
            ]
        )
        ->assertExitCode(0);
});
```

```php tab=PHPUnit (Ahoy, landlubber!)
public function test_shanty_creation(): void
{
    $this->artisan('shanty:make')
        ->expectsPromptsInfo('Ahoy there! Welcome to the shanty-making shipyard!')
        ->expectsPromptsWarning('Avast, ye be warned, this action cannot be walked back like a drunken sailor!')
        ->expectsPromptsError('Ye be grumbling about something down in the hold? Let's see if we can't right that wrong, matey!')
        ->expectsPromptsAlert('Listen up, ye scurvy dogs! Important news from the Captain!')
        ->expectsPromptsIntro('Setting sail on shanty creation... Prepare your ears for some sea-worthy tunes!')
        ->expectsPromptsOutro('Ahoy there! Shanty creation complete, mateys!')
        ->expectsPromptsTable(
            headers: ['Shanty Title', 'Lyrics'],
            rows: [
                ['The Taylor Otwell', 'Yo ho, yo ho, a pirate's life for me'],
                ['Jason Beggs Shanty', 'Drink up me hearties, yo ho!']
            ]
        )
        ->assertExitCode(0);
}
```

Arrr, there ye have it! Now your command line can be as fun as a walk through the plank with these testing methods! Happy shanty-making, matey!