 # Laravel Pint: Your Chill Buddy for Code Quality! 🍻

Looking to make your code as smooth as a well-shaken Margarita? Look no further than Laravel Pint! This friendly little tool is here to help you keep your code clean, organized, and ready for the spotlight. 🌟

<a name="installation"></a>

## Installation: Bringing Pint into Your Life 🚀

Adding this charming chap to your Laravel project is easier than teaching a cat to fetch – just a few simple commands, and voila! You'll be sipping on top-shelf code quality in no time.

<a name="running-pint"></a>

## Running Pint: Time for a Quality Check 🕵️‍♂️

Once installed, running Pint is as easy as serving up a cold one on a hot summer day. Just fire it up with a simple command, and let him do his magic. He'll scan your codebase, looking for any dusty corners that need some tidying up.

<a name="configuring-pint"></a>

## Configuring Pint: Tailoring the Experience 👨‍tailor

Pint is a flexible friend, easily adaptable to your specific needs and preferences. You can customize his rules, choose from presets (because who has time to create their own rulebook?), and even tell him which files or folders to ignore – we all have those secret stash directories, right?

<a name="presets"></a>

### Presets: Pick Your Flavor 🍦

Pint comes pre-loaded with a variety of presets, each designed to cater to different tastes. Whether you're into Strict Standards or Just the Basics, there's something for everyone!

<a name="rules"></a>

### Rules: The Code Housekeeping Guide 🧹

If the presets don't quite fit your needs, no worries! You can create custom rules to suit your specific project or team. Pint's rulebook is open for business – write what you want, enforce what you need.

<a name="excluding-files-or-folders"></a>

### Excluding Files / Folders: Keeping Secrets Safe 🔐

Tired of Pint snooping around in your secret files? Just tell him which areas are off-limits, and he'll respect your privacy (well, as much as a code quality tool can, anyway).

<a name="continuous-integration"></a>

## Continuous Integration: Keeping the Party Going 💃️

Integrate Pint into your continuous integration pipeline, and he'll become an ever-vigilant watchdog. He'll make sure that any new code added to the project meets his high standards – because who wants a hangover from bad code?

<a name="running-tests-on-github-actions"></a>

### GitHub Actions: The Perfect Pair 🍺💻

Pairing Pint with GitHub Actions is like matching a fine wine with a gourmet meal – it just works! Together, they'll ensure that every commit to your repository results in sparkling clean code. And who knows, maybe you'll even earn some brownie points from the boss! 🍫🎉

 Ahoy there, PHP coders! Prepare to meet your new best friend: Laravel Pint - a svelte, no-nonsense PHP code stylist for minimalists who believe that less is more (and cleaner)! Built upon the mighty PHP CS Fixer by the FriendsOfPHP crew, Pint makes it ridiculously easy to keep your code as tidy and uniform as a freshly pressed suit.

Best part? It's already included in every swanky new Laravel application you create, so no fussing with installations or configurations - just dive right into coding! And since it follows the stylishly opinionated coding standards of Laravel, your code will be as sleek and well-dressed as your favorite superhero.

But enough about the formalities - let's get our hands dirty and start coding with this fabulous new tool in town! 🤓💃🕺

 Alrighty then! Let's get this code party started without the usual drama of software installation. You see, Laravel Pint is already a VIP guest in your Laravel framework's latest releases – no need to send out a formal invite or anything. But for those timeless classics that refuse to dance with the times (yeah, we're talking about you, old apps), here's the dance card:

"Slide onto the dance floor with this snazzy command:"

```shell
composer require laravel/pint --dev
```

And just like that, Laravel Pint will be your new best friend at the coding bash! 🤝🎉💃

<a name="running-pint"></a>
Now, if you want to run a style check on your project, you can do it with these cool moves:

```shell
./vendor/bin/pint --style=laravel
```

And remember, my friend, just like a well-rehearsed dance routine, good coding standards keep things running smoothly. So, let's boogie to better code together! 🕺️💃️🎶

 Alrighty then! Let's dive into the world of Pint, your trusty code style ninja, hidden within your project's `vendor/bin` directory. To get Pint to whip your code into shape, just shout out its name in the terminal:

```shell
./vendor/bin/pint
```

If you want Pint to work faster than a caffeinated squirrel on roller skates (experimental mode), throw it the `--parallel` bone:

```shell
./vendor/bin/pint --parallel
```

You can even tell Pint how many processes to unleash via the `--max-processes` option. If you don't specify, it'll use all the cores on your machine like a power-hungry CGI-baboon:

```shell
./vendor/bin/pint --parallel --max-processes=4
```

To direct Pint to specific files or folders, just point it in the right direction:

```shell
./vendor/bin/pint app/Models

./vendor/bin/pint app/Models/User.php
```

Pint will proudly display a list of all the files it's corrected, like a cat showing off its freshly caught mouse. For extra detail on Pint's changes, add the `-v` option:

```shell
./vendor/bin/pint -v
```

If you just want Pint to sniff out style errors without making any changes (like a cop writing traffic tickets), use the `--test` option. If it finds any errors, it'll return a code that screams "Guilty!":

```shell
./vendor/bin/pint --test
```

If you want Pint to only inspect files that have changed since a certain Git branch (useful in your CI environment), throw it the `--diff=[branch]` option:

```shell
./vendor/bin/pint --diff=main
```

To make Pint focus on files with uncommitted changes according to Git, give it the `--dirty` option:

```shell
./vendor/bin/pint --dirty
```

If you want Pint to fix any files with code style errors but also exit with an error code if any errors were fixed, throw it the `--repair` option:

```shell
./vendor/bin/pint --repair
```

And there you have it! Now your code will be cleaner than a cat after a bath, and Pint can go back to binge-watching coding tutorials on YouTube. Happy coding!

 ## Unleashing Pint: The Magic Style Wand! 🧝‍♂️🚫💔

Alright, let's talk 'bout Pint, the coding style enforcer that's as cool as a cucumber in a blender on a hot day. Now, here's the fun part: Pint doesn't need a tuxedo-clad butler to serve it martinis - it operates just fine without any configuration! 🎉🥳

But, if you're one of those folks who like their coding styles tailor-made and personalized, we've got you covered! You can customize the presets, rules, or the folders Pint inspects by creating a `pint.json` file in your project's root directory. It's as simple as whipping up a batch of cookie dough!

```json
{
    "preset": "laravel"
}
```

Don't worry, we didn't leave the fashionably latecomers hanging! If you've already got a `pint.json` file in some other directory that you'd rather use, no problemo! Just provide the `--config` option when summoning Pint:

```shell
./vendor/bin/pint --config vendor/my-company/coding-style/pint.json
```

Now, wasn't that a piece of cake? 🍰🎂 Just remember, with great power comes great responsibility (and coding style consistency!). Happy Pinting! 💻🤖💖

 ### Style Squad! 🚀

Who needs a fashion police when you've got Pint's Style Squad? These stylish enforcers ensure your code is always dressed to impress, and they do it with flair! By default, our squad follows the Laravel Fashion Police's guidelines (we call it the `laravel` preset), but we understand everyone has their own unique style.

To switch up the look, just drop the `--preset` bomb during your Pint party:

```shell
./vendor/bin/pint --preset psr12
```

Or, if you're feeling extra committed, set a permanent preset in your project's `pint.json` file:

```json
{
    "preset": "psr12"
}
```

Our Style Squad is versatile and well-versed in various coding fashion trends, including: `laravel`, `per`, `psr12`, `symfony`, and even the minimalist `empty`. So, whether you're a fan of bold colors or prefer a more understated aesthetic, we've got you covered! 🕶️😎

 Alrighty, let's delve into the world of Pint, your stylish code whisperer! Rules here are like a sartorial guide for your code, ensuring it doesn't look like a hot mess at a fancy ball. These aren't just any rules, oh no, they're the fashion police of the programming universe!

Preset is basically a pre-packaged ensemble that suits most PHP projects. So, unless you've got an itch for individuality or a burning desire to stand out like a peacock at a penguin party, you can happily let presets do their thing.

But hey, if you fancy tweaking the rules to your liking, or going au naturel with the `empty` preset, you can! Here's how:

```json
{
    "preset": "laravel",
    "rules": {
        "simplified_null_return": true,  // Because who needs complexity when you can have null?
        "array_indentation": false,       // Spaces are for hippies, not our code!
        "new_with_parentheses": {
            "anonymous_class": true,     // Anonymous class? More like Anonymous Party! Let's get this function started!
            "named_class": true           // Named classes are so 20th century. Let's bring on the parentheses!
        }
    }
}
```

Pint isn't a one-trick pony, no sir! It's built upon the mighty [PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer), which means it can whip your code into shape with any rule from its extensive wardrobe: [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator).

So, go ahead and let Pint work its magic! It's your ticket to a well-dressed code party where everyone looks fabulous!

 Oh, hi there, code cowboy (or code cowgirl)! Let's talk about custom rules, shall we? You see, Laravel's PHP CS Fixer buddy, Pint, isn't just another Lone Ranger roaming the Wild West of your codebase. Nope, this fella's got a secret stash of custom rules, all prefixed like a Vegas high roller with `Pint/`.

Now, these rules are a little more exclusive than a VIP section in a neon-lit casino – they ain't enabled by default. But fear not, for you can give 'em the green light right from your `pint.json` file!

<a name="phpdoc-type-annotations-only"></a>
And here's a little gem: if you wanna play hardcore with PHP docblocks, you can use the `Pint/PHPdocTypeAnnotationsOnly` rule. This one's like the code equivalent of a high-stakes poker game – only allowing type annotations in your docblocks and nudging you towards writing cleaner, more precise code.

Now that you know about custom rules, go forth and tame the wild west of your Laravel codebase with Pint's help! Just remember: in this town, there's no room for sloppy code – only well-structured, easy-on-the-eyes code!

 Ahoy there, code pirates! Dive into the enchanted waters of Laravel land with our magical Pint rule: `Pint/phpdoc_TypeAnnotationsOnly`! This rule, much like a finely-tuned barber, snips away all your verbose comments and docblock prose, leaving behind only those lines adorned with the shimmering `@` annotations, such as `@param`, `@return`, `@var`, `@phpstan-type`, and so on.

Here's a glimpse of what this mermaid magic looks like:

```php
/**
 * Get the posts for the user. [tl! remove]
 * [tl! remove]
 * @return HasMany<Post, $this>
 */
public function posts(): HasMany // Now a sleek, streamlined line of code!
```

Single-line comments and block comments without those enchanting `@` annotations? Splash overboard, matey! This rule doesn't suffer fools. But fear not, if there's a specific comment you'd like to preserve, simply prefix it with `@note`, `@warning`, or `@todo`:

```php
// @note This comment will be preserved, so don't walk the plank!
```

Want to enable this magical rule? First, make sure your ship's `pint.json` file is well-equipped with:

```json
{
    "preset": "laravel",
    "rules": {
        "Pint/phpdoc_type_annotations_only": true
    }
}
```

And ta-da! Your code will be as clean and shiny as a freshly minted doubloon! Oh, and don't forget: this rule automatically skips files in the `config` directory, because thoseconfiguration files often rely on comments for navigation. Aye, matey, happy sailing!

 ### Embracing the Art of Avoidance in Laravel Land! 🕺️

Welcome to the magical world of Laravel, where we dance delicately between the lines of code! By default, our friendly automaton, Pint, checks out all `.php` files in your project - but shies away from those nestled deep within the `vendor` directory. If you've got a hankering to keep more folders at arm's length, fear not! You can do so using the 'Run Away' configuration option:

```json
{
    "run_away": [
        "my-specific/folder"
    ]
}
```

Now, let's imagine you've got a sneaky file that keeps causing trouble and won't take 'no' for an answer. If it bears a name pattern that makes your eyes twitch, fear not! You can give it the cold shoulder using the `Not_So_Friendly` configuration option:

```json
{
    "not_so_friendly": [
        "*-my-file.php"
    ]
}
```

And in case you've got a specific file that's been overstepping its bounds and needs a firm 'time out', you can banish it using the `Not_In_My_Project` configuration option:

```json
{
    "not_in_my_project": [
        "path/to/excluded-file.php"
    ]
}
```

Just remember, in this enchanted land, you can never have too many rules to keep the mischievous ones at bay! 🧞‍♂️😉

 ### Unicorn Herding 101: Riding the CI Wave!

Ahoy, code wranglers! Welcome to the mystical land of Continuous Integration (CI) where your dreams of bug-free software come true (well, mostly). Grab your magic wand and let's embark on this thrilling journey together!

<a name="running-tests-on-github-actions"></a>

### Testing on GitHub Actions: The Magical Unicorn Rodeo

In our enchanted kingdom, GitHub Actions serve as the trusted unicorn wranglers, ensuring your code's quality with every commit. To participate in the magical unicorn rodeo, follow these simple steps:

1. **Prepare thy environment**: Configure your `.github/workflows` directory by creating a new YAML file (e.g., `phpunit.yml`). This file will instruct our unicorns on how to test your code.

2. **Summon thy unicorns**: Define jobs within the YAML file, each responsible for executing a specific task, such as testing or deploying. Give them catchy names like "PHPUnit Trott" and "Deployment Breeze."

3. **Equip thy unicorns**: Instruct your unicorns on which PHP versions to use, which extensions they need, and any other necessary settings by adding `env`, `services`, and `run` commands within the jobs. Remember, a well-equipped unicorn is a happy unicorn!

4. **Unleash thy unicorns**: Save your YAML file and GitHub will automatically run your tests whenever you push new code to your repository. If any errors or bugs rear their ugly heads, the unicorns will alert you with grace and finesse (and maybe a bit of sarcasm).

5. **Revel in thy success**: With your magical unicorn rodeo set up, you can rest easy knowing that bugs will be squashed before they have a chance to wreak havoc on your project. And the best part? No more late-night emergency bug fixes! 🎉🦄🌈

 Alrighty, Buckaroo Banzai! Let's dive into the delightful world of GitHub Actions for automating your Laravel project's style check with Laravel Pint.

First things first, you've gotta make sure that GitHub trusts you like a best buddy at **Settings > Actions > General > Workflow permissions**. Grant those "Read and write permissions" and consider it as an unspoken promise to keep the code clean and free of syntax shenanigans.

Next, create a little file called `.github/workflows/lint.yml`, fill it with some friendly YAML commands, and let's get this party started!

```yaml
Name: The Code-Style Sheriff

Trigger: When new code is pushed to GitHub ([push])

Jobs:
  Lint 'em Up:
    Runs on: Ubuntu's latest and greatest
    Options:
      Fail-fast: true - Let's not waste time on faulty commits, m'kay?
      Matrix:
        PHP: [8.4] - We don't do archaic languages here!

    Steps:
      1. Checkout code - Get the source code from GitHub using our secret decoder ring (actions/checkout@v5)
      2. Setup PHP - Invite PHP to the party with the help of shivammathur/setup-php@v2, making sure they bring their Pint tool along!
      3. Run Pint - Time for the style check, run "pint" and let's see if we can lick this project into shape!
      4. Commit Linted Files - Automatically commit the linted files using stefanzweifel/git-auto-commit-action@v6
```

Now that your GitHub Actions are in place, you can sit back and watch as your Laravel Pint ensures that all commits maintain a consistent and beautiful codebase. Just remember to thank your actions like the helpful little helpers they are! 🤖🥳🎉