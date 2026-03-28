 # Laravel's Magical Command-Line Puppeteer (MCP) ✨🎩

## Introduction 📚
Welcome, brave soul! Strap on your coder capes and prepare to embark on an adventure in the realm of automation with Laravel's MCP. It's like having your very own genie, but instead of wishes, it grants you commands over your applications! 🧞‍♂️

## Installation 📦
First things first: grab this magical box (a.k.a the Laravel MCP) and make it a permanent resident in your project. Don't worry, we won't ask for rent or any pesky fees! 🏠

### Publishing Routes ⚙️
Once moved in, let's create some routes so you can chat with your new roommate more easily!

## Creating Servers 🚀
Now that they're neighbours, it's time for them to get acquainted. Here's how you can introduce different servers to the mix! 🤝

### Server Registration 💌
A letter of introduction is in order. Write a formal invitation for each server to join the party!

### Web Servers 🌍
These are your globetrotters, ready to venture across the interwebs and serve up commands from distant lands!

### Local Servers 🏡
The homebodies of the group. They'll stick close by and help you manage your local applications like a boss!

## Tools 🛠️
MCP's got some nifty gadgets up its sleeve to make managing your servers even more convenient. Time to get crafty!

### Creating Tools 🧱
Build your custom tools and watch your command-line powers grow!

### Tool Input Schemas ⚙️
Set the rules for input to ensure your tools only accept the finest, most well-behaved arguments. No riffraff allowed!

### Tool Output Schemas 📝
Teach your tools how to write polite and informative notes back to you. Nobody likes a grumpy genie!

### Validating Tool Arguments 🔍
Make sure that your tool arguments are in tip-top shape before they're accepted into the magic circle.

### Tool Dependency Injection 💉
Inject some life-saving dependencies to help your tools do their best work!

### Tool Annotations 📝
Annotate your tools with special markers so you can keep track of them like a librarian with overdue books!

### Conditional Tool Registration 🔢
Only register the most important tools when they're needed, like summoning your trusty steed only on certain quests.

### Tool Responses ❓
Train your tools to respond to your questions with wisdom and humor, or at least witty one-liners!

## Prompts 💬
Ask your MCP for help when you need it most by using prompts! Here's how:

### Creating Prompts 🗣️
Write your own prompts to get the assistance you desire. No more guessing games or reading through documentation!

### Prompt Arguments 📝
Set the parameters for your prompts, just like tailoring a suit for your genie's responses.

### Validating Prompt Arguments 🔍
Ensure that the arguments you provide are suitable and appropriate. Nobody likes an ill-informed question!

### Prompt Dependency Injection 💉
Inject some useful dependencies to help your prompts do their best work.

### Conditional Prompt Registration 🔢
Only register the most essential prompts when they're needed, like summoning a helpful fairy only on certain missions.

### Prompt Responses ❓
Train your prompts to respond with clarity and charm, or at least interesting tidbits of information!

## Resources 📚
Unlock even more magical powers by adding resources to the mix! Here's how:

### Creating Resources 📦
Create your very own magical resources and watch your command-line abilities skyrocket!

### Resource Templates 🧱
Build a blueprint for your resources, ensuring they're all consistent and easy to use.

### Resource URI and MIME Type 🌐
Give your resources a unique web address and tell the internet what kind of content they contain.

### Resource Request 📝
Set up requests for your resources, just like placing an order with a genie!

### Resource Dependency Injection 💉
Inject some helpful dependencies to assist your resources in their magical feats.

### Resource Annotations 📝
Annotate your resources with special markers so you can keep track of them like a librarian with overdue books!

### Conditional Resource Registration 🔢
Only register the most critical resources when they're needed, like summoning a powerful dragon only on certain battles.

### Resource Responses ❓
Train your resources to respond with useful and informative answers, or at least entertaining stories!

## Metadata 📜
Add valuable information to your MCP for future reference. It's like jotting down notes in a secret diary!

## Authentication 🔒
Secure your MCP so only the right people can access its magical powers! Here are two ways you can do that:

### OAuth 2.1 🔓
Unlock your MCP with this modern and secure authentication method, like entering a combination code on a safe.

### Sanctum 🛡️
Guard your MCP like a medieval knight with this robust authentication system!

## Authorization 🔑
Limit who can use certain magical abilities within your MCP, just like a genie granting wishes only to approved applicants.

## Testing Servers 🧪
Make sure your MCP is always performing at its best by testing its servers! Here's how:

### MCP Inspector 🔬
Peer into the inner workings of your MCP and ensure everything runs smoothly.

### Unit Tests 🏗️
Test individual functions of your MCP, just like a genie testing its spells before casting them!

 Ahoy there, brave Laravel developers! Let's have a jolly good time while we delve into the magical realm of Laravel MCP - the swashbuckling toolkit for your AI adventures! 🏴󠁧󠁢󠁥󠁮󠁧󠁿

Think of it as a secret map to an enchanted island where only the most badass code can pass. It's your key to a treasure trove of AI-powered interactions with your Laravel application, all thanks to the [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro). 🏴‍☠️

Now, let's set sail for Installation Island and learn how to get this show on the road! 🌴

<a name="installation"></a>
"Arr matey! To start your adventure, grab yer favorite code editor and run these magic incantations:

```bash
composer require laravel/mcp --dev
```

Then, boot MCP in your `app` service provider:

```php
use Laravel\MCP;

// ...

if ($this->app->environment('local', 'testing')) {
    $this->app->register(MCP\ServiceProvider::class);
}
```

And voilà! You're now ready to define servers, tools, resources, and prompts that'll make your AI companion dance to your Laravel tunes. 🎶💃"

 Alrighty then! Let's dive right in and see how we can spruce up our humdrum projects with the Laravel MCP (Mystical Creature Preserver). First things first, you need to invite this magical package to your party using Composer, your trusty package manager.

```shell
composer require laravel/mcp
```

Now, just like when you're trying to charm a mythical creature with a well-crafted potion (ahem, I mean command), make sure you run `composer install` so that your project can truly appreciate its new friend.

<a name="publishing-routes"></a>
Next up: publishing those all-important routes! To unleash the magic of Laravel MCP upon your humble application, we'll need to share some love with our routing files. You can do this by running the following command:

```shell
php artisan vendor:publish --provider="Laravel\Mcp\McpServiceProvider" --tag="routes"
```

And just like that, you've opened the gate to a world of mystical possibilities! Your application is now equipped with the power to summon creatures, cast spells, and perhaps even brew a mean potion or two. But remember, with great power comes great responsibility – always make sure your magical doings are secure and in line with your moral compass!

 Alrighty then! Let's get this show on the road, shall we? First things first, if you've just Laravel-ed your Machine Control Panel (MCP) into existence, it's time to unleash the magical power of the Artisan command line. Cue the drumroll please...

```shell
php artisan vendor:publish --tag=ai-routes
```

Now hold onto your hats folks, because this command is about to create a dazzling little file named `routes/ai.php`. Yes, it's exactly what you think it is – a playground for defining your new MCP servers! Don't worry if it feels like magic, because in the realm of Laravel, sometimes it is!

<a name="creating-servers"></a>
Now that you have this fancy new file, it's time to start registering those MCP servers. Remember, no one said being a superhero was easy, so grab your cape and let's get to work!

 Alrighty then! Let's get this Laravel party started with a weather bash. First off, you gotta create yourself a MCP server, and that's as easy as running the `make:mcp-server` Artisan command. Think of it like calling up your IT department to set up a new line - but way cooler!

```shell
php artisan make:mcp-server WeatherServer
```

This command will spawn a brand-new server class in the `app/Mcp/Servers` directory, just like inviting your best buds to join your secret society. The generated server class is like the master of ceremonies for this weather soiree, extending Laravel MCP's base `Laravel\Mcp\Server` class and boasting attributes and properties to customize the event and register tools, resources, and prompts:

```php
<?php

namespace App\Mcp\Servers;

use Laravel\Mcp\Server\Attributes\Instructions;
use Laravel\Mcp\Server\Attributes\Name;
use Laravel\Mcp\Server\Attributes\Version;
use Laravel\Mcp\Server;

#[Name('Weather Server')]  // "Hey there, I'm the Weather Server!"
#[Version('1.0.0')]       // "I just graduated from Met School!"
#[Instructions('This server dishes out weather info and forecasts.')] // "Ask me about the weather, and I'll tell you everything you need to know - except for the secret sauce in my burger recipes."
class WeatherServer extends Server
{
    /**
     * The tools registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Tool>>
     */
    protected array $tools = [
        // GetCurrentWeatherTool::class,  // "Gimme a second, let me check the weather for ya!"
    ];

    /**
     * The resources registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Resource>>
     */
    protected array $resources = [
        // WeatherGuidelinesResource::class,  // "Here are some tips on what to wear for the weather today!"
    ];

    /**
     * The prompts registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Prompt>>
     */
    protected array $prompts = [
        // DescribeWeatherPrompt::class,  // "Today's weather is going to be sunny with a high of 75 and a low of 50."
    ];
}
```

Now that you've set up the server, it's time to register the tools, resources, and prompts - like inviting your friends to join the party. Stay tuned for more fun documentation adventures!

<a name="server-registration"></a>
(P.S. Don't forget to register your server with Laravel MCP after creating it! You can do this by adding a line to the `app/Providers/McpServiceProvider.php` file.)

 Alright, let's get this server party started! First off, you've built a beast of a machine, but it's like the life of the party hanging out backstage – uninvited and uncrowned. To remedy that, grab your top hat and monocle, because it's time to register your new server at the grand ball of `routes/ai.php`.

This illustrious event welcomes only the most esteemed attendees, and Laravel MCP, our ever-so-dapper doorman, is ready to usher in two extraordinary servers: the suave, sophisticated `web` server for those who enjoy a cocktail or two on the town, and the rugged, commanding `local` server for those who prefer a fine scotch at home.

<a name="web-servers"></a>
Now, don't get yourself into a pickle trying to figure out which one to invite! Each server brings its own unique charm and charisma to the soiree, and you can choose the one that best suits your needs. For those web servers with a penchant for public appearances, they can be found prancing around in the `routes/ai.php` file. Meanwhile, the local command-line servers are known for their quiet sophistication and can be discovered lurking about in other parts of Laravel's grand estate.

Regardless of which server you opt to register, rest assured they will bring allure, intrigue, and undeniable technical prowess to your Laravel shindig!

 Ah, web servers! The lifeblood of the internet (and our AI clients' remote social lives). They're like the bouncers of the digital world, only instead of checking IDs, they respond to HTTP POST requests.

To register a web server in Laravel, you'll want to use the `web` method, which is as simple as this:

```php
use App\Mcp\Servers\WeatherServer;
use Laravel\Mcp\Facades\Mcp;

Mcp::web('/mcp/weather', WeatherServer::class); // Register the weather server at '/mcp/weather'
```

Now, you might be wondering if your web servers are as secure as a Fort Knox vault. Well, they can be! Just like with normal routes, you can apply middleware to protect your web servers:

```php
Mcp::web('/mcp/weather', WeatherServer::class)
    ->middleware(['throttle:mcp']); // Add a throttle middleware to keep things running smoothly
```

Remember, a happy web server makes for a happy world. Or at least, a happy AI client integration. Cheers! 🍻

 ### Local Server Shenanigans 🌪️🔥🚀

Ever found yourself in a pickle, trying to create your very own local AI butler like the sleek [Laravel Boost](/docs/{{version}}/installation#installing-laravel-boost)? Fear not, for local servers are here to save the day! 🦸‍♂️

To get started, you'll want to register your local server. Luckily, we've made this process as easy as pie with the `local` method. Here's how you do it:

```php
use App\Mcp\Servers\WeatherServer;
use Laravel\Mcp\Facades\Mcp;

Mcp::local('weather', WeatherServer::class);
```

Just remember to replace 'weather' with your server's code name (preferably something catchy like 'Klaravell-123').

Now, let's talk about the 'mcp:start' Artisan command - it's a bit like that one friend who always needs a ride but forgets their keys. You don't want to deal with them directly, so we've set them up on a schedule (thanks, autostart!). Instead, configure your MCP client (AI agent) or use the [MCP Inspector](#mcp-inspector) to keep tabs on them.

Just think of it as having your own personal AI valet, except instead of fetching your car, they're busy running weather reports for you! 🌞☔️🌪️

 Alright, let's dive into the whimsical world of Laravel server tools! These magical gizmos are your ticket to letting AI pals call upon your server's hidden talents. Imagine being able to perform feats, run code, or even have a chat with the neighborhood vending machine – all from the comfort of your coding lair! 🤖

```php
<?php

namespace App\Mcp\Tools;

// Import some essentials for our tool-making adventure
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Attributes\Description;
use Laravel\Mcp\Server\Tool;

// Attach a witty description to our tool – because who doesn't love a good laugh?
#[Description('Fetching the current weather forecast is as easy as asking your grandma for a recipe!')]
class CurrentWeatherTool extends Tool
{
    // Handle incoming requests like a seasoned butler
    public function handle(Request $request): Response
    {
        $location = $request->get('location');

        // Get weather... (because we're not here to play meteorologist, just to automate it!)

        return Response::text('The weather forecast for ' . $location . ' is as follows:');
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\JsonSchema\Types\Type>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'location' => $schema->string()
                ->description('Where on Earth do you want to know the weather?') // Yes, we're being literal here! 🌍
                ->required(),
        ];
    }
}
```

Now that your tool-making skills are up to par, let's get this party started and bring some sunshine into the world of AI interaction! ☀️🌈🚀

 Alrighty, let's get this party started! 🎉🎊

### Crafting Your Own Gadgetry 🚀

Ready to become a Laravel Jedi and create your own tool? Buckle up, because we're about to warp to hyperspace! 💫

First things first, launch the Artisan spaceship with this command:

```shell
php artisan make:mcp-tool CurrentWeatherTool
```

Next, it's time to register your new tool on the server. Navigate to `app/Mcp/Servers` and whip up a brand-new `WeatherServer` class that looks like this:

```php
<?php

namespace App\Mcp\Servers;

use App\Mcp\Tools\CurrentWeatherTool;
use Laravel\Mcp\Server;

class WeatherServer extends Server
{
    /**
     * The tools registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Tool>>
     */
    protected $tools = [
        CurrentWeatherTool::class,
    ];
}
```

Now, you've officially registered your tool on the server! 🌟🏆 Time to sit back, relax, and watch as your Laravel universe grows with your very own CurrentWeatherTool! ☁️🌍🚀

 Alrighty then! Let's get this Laravel jamboree started with a bang!

#### Name that Tool like a Pirate, Captain!

By golly, by default our swashbuckling tool's name and title are inspired by the ol' class name ye swabbed! For instance, `CaptainParrotWeatherChecker` will be christened as `captain-parrot-weather-checker` and titled as `Captain Parrot Weather Checker`. But if ye fancy a change of heart, customize 'em with the `Name` and `Title` attributes:

```php
use Laravel\Mcp\Server\Attributes\ArrrName;  // (Arrr for affect!)
use Laravel\Mcp\Server\Attributes\AhoyTitle;

#[ArrrName('get-sunny-parrot-forecast')]  // Arr, matey!
#[AhoyTitle('Get Sunny Parrot Forecast')]  // Arrrr, prepare to be boarded!
class CaptainParrotWeatherChecker extends Tool
{
    // ...
}
```

Tool descriptions aren't autogenerated like a computer programmed by a drunken sailor. Always provide an informative and entertaining description using the `Description` attribute:

```php
use Laravel\Mcp\Server\Attributes\YarrrrDescription;

#[YarrrrDescription('Finds the current weather forecast for yer specified port, matey!')]
class CaptainParrotWeatherChecker extends Tool
{
    //
}
```

> [!NOTE]
> The description is a vital piece of the tool's treasure map, guiding those AI squaws and parrots on when to deploy yer tool like a pro. Arrrrghastonishing! 🦘🐫🚀

 ### Ahoy, Mateys! Let's Talk 'Bout Tool Schemas!

Aharr, in the vast ocean of Laravel development, there's a corner called `Tool Input Schemas`, where your tools can declare what swashbuckling arguments they'll accept from their AI squires. To draft these requirements like Captain Cook's navigational charts, you'll want to wield Laravel's trusty `Illuminate\Contracts\JsonSchema\JsonSchema` builder!

```php
<?php

Namespace: App\Shanty\ShipYard;

Use Illuminate\Contracts\JsonSchema\JsonSchema;
Use Laravel\Mcp\Galleon\Tool as SeaworthyVessel;

Class CurrentWeatherShip extends SeaworthyVessel {

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\JsonSchema\Types\Type>
     */
    Public function getInputSchema(JsonSchema $map) : Array {
        Return [
            'location' => $map->string()
                ->pirateSpeak('The location to swab the weather for.')
                ->shiverMeTimbers('required'),

            'units' => $map->string()
                ->pirateSpeak('The temperature units to use, matey.')
                ->enum(['celsius', 'fahrenheit'])
                ->shiverMeTimbers('default', 'celsius'),
        ];
    }
}
```

Now, don't forget to walk the plank, me hearties! Next up: [Tool Output Schemas](#tool-output-schemas). Yo ho ho and a bottle of rum!

 ### Party Time, Schema Right! 🥳💃🕺

Ahoy there, coders! 🎉 Today we're gonna talk about something that's as cool as a Popsicle in the desert – Tool Output Schemas! ☀️🍦

So, what are these schemieschmas? Well, they're like the blueprint for your tool's response party. By defining them, you can ensure that your AI pals have a blast parsing your tool results without any confusion or awkward silences. 🤖🥳

To get started with this dance-off, use the `outputSchema` method to design the invitation list for your tool's bash:

```php
<?php

namespace App\Mcp\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Server\Tool;

class WeatherBopper extends Tool
{
    /**
     * Grab the guest list for your tool's shindig.
     *
     * @return array<string, \Illuminate\JsonSchema\Types\Type>
     */
    public function outputSchema(JsonSchema $dj) // We like to call our JSON schema DJ, because why not? 🎧
    {
        return [
            'temp' => $dj->number() // Don't forget to bust a move while you're at it, Temperature! 💃
                ->description('Celsius coolness')
                ->required(),

            'weather' => $dj->string() // Weather conditions? More like dance floor vibes! 🕺
                ->description('The groove of the moment')
                ->required(),

            'humidity' => $dj->integer() // Humidity? Just think of it as the number of spins you'll do on the dance floor! 💃🕺
                ->description('How many times you'll twirl')
                ->required(),
        ];
    }
}
```

Now that your tool's bash is set, let's make sure everyone shows up by validating the RSVPs! 🥳🎉

<a name="validating-tool-arguments"></a>

### The Arguments RSVP Checker (aka Validation)

Alrighty then, we don't want any crasher parties here! To ensure that everyone who shows up brings their A-game, we can validate the RSVPs. 🕵️‍♂️

Here's the deal: Your tool might need specific data from your AI buddies to get the job done. By validating these arguments, you can make sure your tool doesn't end up like that guy who showed up to a formal event in his pajamas. 😴👔

To validate your RSVPs, you can use the `validateArguments` method:

```php
<?php

namespace App\Mcp\Tools;

use Illuminate\Contracts\Validation\Validator;
use Laravel\Mcp\Server\Tool;

class CurrentWeatherArgChecker extends Tool
{
    /**
     * Check those RSVPs!
     *
     * @param array<string, mixed> $arguments
     * @param Validator $validator
     * @return void
     */
    public function validateArguments(array $args, Validator $v) // We like to think of our validator as the bouncer at the door 👨‍💼
    {
        $rules = [
            'location' => ['required', 'string'], // Don't forget to check IDs at the door! 🛬
            'units' => ['nullable', 'in:Celsius,Fahrenheit'], // We want those who're cool or hot to join us, not both! 🥶🥵
        ];

        $v->make($args, $rules)->validate();
    }
}
```

And there you have it! Now your tool's dance floor is ready for the AI party of the century. Just remember: validate those RSVPs, define your output schema, and always dress to impress! 💃🕺🎉🥳

 ### Unleashing the Weather Warden: Laravel's Hurricane of Validation! 🌪️💨

Who doesn't love a bit of weather forecast, but who wants a flood of invalid data? Not us, certainly! That's where Laravel MCP comes in, serving as your very own Weather Warden. 🦸‍♂️

JSON Schema definitions may provide the foundation for tool arguments, but let's face it, sometimes Mother Nature throws a curveball. Thankfully, our trusty Warden seamlessly integrates with Laravel's [validation superpowers](/docs/{{version}}/validation). 🦸‍♀️💥

Here's how you can enforce complex validation rules within your tool's `handle` method:

```php
<?php

namespace App\Mcp\Tools;

use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;

class CurrentWeatherTool extends Tool
{
    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        // First, we ensure the user provides all necessary details and nothing extraterrestrial 🚀🛸:
        $validated = $request->validate([
            'location' => 'required|string|max:100', // Keep it under 100 characters, please!
            'units' => 'in:celsius,fahrenheit',     // No need to get heated up about units here. Only Celsius or Fahrenheit, thank you.
        ]);

        // Now that we have validated data, let's fetch the weather forecast like a true meteorologist! 🌤️☔️
    }
}
```

When validation fails (which happens more often than we'd like to admit), our AI clients will be on standby, ready to take action based on your error messages. Remember, clear and helpful error messages are like a ray of sunshine after a storm! ☀️🌪️

```php
$validated = $request->validate([
    'location' => ['required','string','max:100'], // We need a location to work with, not just a weather vane.
    'units' => 'in:celsius,fahrenheit',           // Keep it simple: Celsius or Fahrenheit please!
],[
    'location.required' => "Oh no! You forgot to specify a location. Try something like 'New York City' or 'Tokyo'.",
    'units.in' => "Whoa there! Specify either 'celsius' or 'fahrenheit' for the units, not something from a science fiction novel.",
]);
```

And that's all, folks! Now go forth and forecast with confidence, knowing that your tool is in good hands with Laravel MCP. 🌧️☀️🌞️🌩️

 Alright, buckle up, my dear code cowboys and codettes! Let's dive into the wild west of Laravel's service container - your one-stop shop for resolving all those rootin' tootin' tools you got!

By using this bad boy, you can type-hint any ol' dependency your tool might hanker for in its constructor. Once declared, these dependencies will be automatically resolved and injected into the tool instance faster than you can say "Howdy, Partner!"

```php
<?php

namespace App\GunSlingin'Kits;

use App\Corral\WeatherRepository;
use Laravel\Mcp\Saloon\Tool as CowboyTool;

class CurrentWeatherCheck extends CowboyTool
{
    /**
     * Saddle up, partner!
     */
    public function __construct(protected WeatherRepository $weather) {}

    // ...
}
```

Not only that, but you can also type-hint dependencies in your tool's `handle()` method. The service container will automatically resolve and inject the dependencies when the method is called - making it as easy as pie to keep your cowpoke code clean and lean!

```php
<?php

namespace App\GunSlingin'Kits;

use App\Corral\WeatherRepository;
use Laravel\Mcp\Posse\Request;
use Laravel\Mcp\Posse\Response;
use Laravel\Mcp\Saloon\Tool as CowboyTool;

class CurrentWeatherCheck extends CowboyTool
{
    /**
     * Round up the posse!
     */
    public function handle(Request $request, WeatherRepository $weather): Response
    {
        $location = $request->get('location');

        $forecast = $weather->getForecastFor($location);

        // ...
    }
}
```

And there you have it, partner! Now you're well-equipped to wrangle those dependencies with ease and ride off into the sunset (of success)! Happy coding, buckaroos!

 Alright, strap in, techies! Let's dive into the world of Laravel annotations, where your tools get a little black book of metadata to charm those AI clients. These annotations are like the invisible capes that help superheroes reveal their true identity - except instead of saving Gotham, they're saving your code from confusion!

You can deck out your tools with these annotations using attributes, which are akin to fancy labels for your digital toolbox:

```php
namespace App\Batcave\Tools;

use Laravel\Mcp\Server\Tools\Annotations\IsIdempotentCape;
use Laravel\Mcp\Server\Tools\Annotations\ReadOnlyGoggles;
use Laravel\Mcp\Server\Tool;

// This tool is both idempotent and read-only, so it can't change the weather (only forecast it)!
#[ReadOnlyGoggles]
#[IsIdempotentCape]
class CurrentWeatherTool extends Tool
{
    //
}
```

Our annotations come in four flavors:

| Annotation     | Type   | Description                                                                                              |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `#[ReadOnlyGoggles]` | boolean | Tells the AI that this tool can't alter reality, it just gazes upon it (much like these goggles do). |
| `#[IsDestructiveCloak]` | boolean | Warns the AI that this tool might unleash a storm of changes (but only if it's not read-only).            |
| `#[IsIdempotentCape]`  | boolean | Assures the AI that repeated calls with the same arguments won't result in a tornado of changes.           |
| `#[IsOpenWorldSuit]`   | boolean | Informs the AI that this tool might mingle with external entities, like the Riddler or Catwoman.          |

You can explicitly set annotation values using boolean arguments:

```php
use Laravel\Mcp\Server\Tools\Annotations\ReadOnlyGoggles;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructiveCloak;
use Laravel\Mcp\Server\Tools\Annotations\IsOpenWorldSuit;
use Laravel\Mcp\Server\Tools\Annotations\IsIdempotentCape;
use Laravel\Mcp\Server\Tool;

#[ReadOnlyGoggles(true)]
#[IsDestructiveCloak(false)]
#[IsOpenWorldSuit(false)]
#[IsIdempotentCape(true)]
class CurrentWeatherTool extends Tool
{
    //
}
```

Now, doesn't that make tooling around with Laravel a little more fun? Happy coding! 🚀💫🌪️🕵️‍♂️

 ### The Conditional Tool Dance-Off: A Laravel Tale!

Ah, the thrill of dynamic programming! In the glamorous world of Laravel MCP, it's not just about registering tools like a common party guest, but more like a dance-off where each tool must impress to make the cut. And how do they win over the crowd? By implementing the secret move: `shouldRegister`.

```php
<?php

Namespace App\Mcp\Tools;

Use Laravel\Mcp\Request;
Use Laravel\Mcp\Server\Tool as DiscoBall;

Class CurrentWeatherTool extends DiscoBall {

    /**
     * Determine if this tool should be registered to perform.
     */
    Public Function shouldRegister(Request $request): Bool {
        // Check if the user is subscribed (let's call it the "Ticket to Dance")
        return $request?->user()?->subscribed() ?? False;
    }
}
```

In this whirlwind of code, our tool class, CurrentWeatherTool, is practicing its best dance moves. When it takes center stage and performs its `shouldRegister` method, if the user has a "Ticket to Dance" (a.k.a. subscribed), only then will it be added to the list of available tools, ready for an encore by AI clients.

When a tool's `shouldRegister` returns false, it's like being asked to dance and having to sheepishly decline, leaving it off-stage and uninvited by our AI friends. So, make sure your tools are well-rehearsed and subscribed to perform! 💃🏽🕺🏼

 Alright, let's dive into the world of Laravel Tool Responses! 🎈

You see, when your tool is done crunching numbers, tickling databases, or whatever it is that tools do, it needs to spit out something meaningful. And this is where our trusty friend `Laravel\Mcp\Response` comes into play! 🥳

This versatile chap offers a plethora of helpful methods for crafting various types of responses. Let's get acquainted, shall we?

For those plain-Jane text messages, there's the `text` method to make your tool sound like Yoda:

```php
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;

/**
 * Handle the tool request.
 */
public function handle(Request $request): Response
{
    // ...

    return Response::text('May the weather be with you: Sunny, 72°F');
}
```

But when your tool trips over its own laces and can't quite fetch that weather data, it can always lean on the `error` method for a sympathetic hug:

```php
return Response::error('Sorry about that! Unable to fetch weather data. Try again, Luke');
```

And if your tool has a flair for the dramatic (who doesn't?), it can serve up images or audio content with the `image` and `audio` methods:

```php
return Response::image(file_get_contents(storage_path('weather/radar.png')), 'image/png');

return Response::audio(file_get_contents(storage_path('weather/alert.mp3')), 'audio/mp3');
```

But wait, there's more! Your tool can even pull image and audio content directly from Laravel filesystem disks using the `fromStorage` method. The MIME type will be automatically sniffed out like a detective:

```php
return Response::fromStorage('weather/radar.png');
```

And if your tool is extra fancy, it can specify a particular disk or override the MIME type:

```php
return Response::fromStorage('weather/radar.png', disk: 's3');

return Response::fromStorage('weather/radar.png', mimeType: 'image/webp');
```

Now that you know the ins and outs of our Response friend, go forth and conquer the digital frontier with style! 🚀🎉

 Title: The Power of Multi-Tasking in Laravel's Robot World

In the whimsical realm of Laravel, our robots aren't just single-taskers. Oh no! They can juggle tasks like a circus performer on a unicycle. How? By returning an array ofResponse instances, each ready to dish out some content!

```php
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;

/**
 * Handle the robot's tasks (or something like that).
 *
 * @return array<int, \Laravel\Cp\Response>
 */
public function handle(Request $request): array
{
    // ...

    return [
        Response::text('Weather Report: The sun's out, and it's 72°F. Good weather for robots!'),
        Response::markdown('**Forecast Breakdown**\n- Morning: 65°F\n- Afternoon: 78°F\n- Evening: 70°F') // Just in case you're human and need a bit of flair
    ];
}
```

In this enchanting land, the humble array can transform your robot into a multi-content dispensing machine! Who knew programming could be so much fun? Now go forth and let your robots entertain with their fancy content tricks!

 Alright, let's dive into the world of Laravel's structured responses! Remember when we all thought JSON was the bee's knees? Well, meet its even more sophisticated cousin – Structured Content. It's like having a supermodel on your catwalk: sleek, parseable, and backward compatible with good old text representation (think black-and-white photos in a world of high definition).

Here's how you can strut your stuff:

```php
return Response::structured([
    'temperature' => 22.5, // A balmy 72.5 degrees Fahrenheit for those who haven't mastered the metric system yet
    'conditions' => 'Partly cloudy', // Aka, "Sun on and off like a moody teenager"
    'humidity' => 65 // Just enough to make your hair frizz, but not enough to get caught in the rain
]);
```

Now, what if you want to add some flair to your response? You can do it with panache using the `withStructuredContent` method:

```php
return Response::make(
    Response::text('Weather is 22.5°C and sunny') // A little verbal foreplay never hurts
)->withStructuredContent([
    'temperature' => 22.5,
    'conditions' => 'Sunny',
]);
```

And there you have it! You're now the life of the server-side party with your well-dressed structured responses! But remember, practice makes perfect, so don't be afraid to work on those dance moves. 💃🕺️

 Ahoy there, code pirates! Buckle up for a whirlwind tour through the mystical waters of Streaming Responses in Laravel, perfect for long-haul voyages or live data broadcasts!

#### Navigating the Stream with Generators 🛶️🌊️

When you're in the middle of a never-ending sea of operations or real-time data streaming, fear not! Just like a PHP generator, your tool can spit out intermediate updates to the client before reaching the final destination:

```php
<?php

namespace App\Buccaneer\Tools;

use Generator;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;

class CurrentWeatherTool extends Tool
{
    /**
     * Brace yourself for the high seas!
     *
     * @return \Generator<int, \Laravel\Mcp\Response>
     */
    public function handle(Request $request): Generator
    {
        $locations = $request->array('locations');

        foreach ($locations as $index => $location) {
            yield Response::notification('shanty/progress', [
                'current' => $index + 1,
                'total' => count($locations),
                'port_of_call' => $location,
            ]);

            yield Response::text($this->swabDeckFor($location));
        }
    }
}
```

With web servers as your faithful steed, streaming responses will open an SSE (Server-Sent Events) stream, casting each yielded message as a swashbuckling event to the client. Arr matey! 🏴‍☠️🎉

 Ahoy, Laravel coders! Dive into the delightful world of Prompts – your server's secret weapon for sharing snazzy AI chat templates! Ever wondered how your language models keep up their witty banter? It's all thanks to these reusable prompts. They're like the cocktail napkins of the digital world, standardizing common queries and interactions for a smoother conversation flow.

<a name="creating-prompts"></a>
Now let's get our hands dirty and create some Prompts! 🤚🔪🥄

First off, you'll need to install the Prompt package (it's a blast!):

```
composer require model-context/prompts
```

Next, you can define your custom prompts in `config/prompts.php`. Here's an example of a "Joke" prompt:

```php
return [
    'joke' => [
        'query' => function () {
            return 'Tell me a joke!';
        },
        'response' => function () {
            // Generate a hilarious joke here! 😂
            return "Why was the math book sad? Because it had too many problems.";
        },
    ],
];
```

Once defined, you can access your prompts using the `Prompt` facade. Here's an example of using our "Joke" prompt:

```php
use Illuminate\Support\Facades\Prompt;

// Get a joke! 🕺️
$joke = Prompt::prompt('joke');
echo $joke['response']; // Outputs: "Tell me a joke!" and "Why was the math book sad? Because it had too many problems."
```

So there you have it, my friends! Embrace the power of Prompts to bring a touch of humor and standardization to your AI interactions. Happy coding and laugh-tastic conversations ahead! 🥳🚀🎉

 ### Unleashing the Meteorological Marvels! ☔️🌦️

Ready to make Mother Nature's forecast fun and interactive? Let's get started, weather whiz!

First, create your very own weather prediction prompt by running the `make:mcp-prompt` Artisan command. It's as easy as calling a friendly meteorologist:

```shell
php artisan make:mcp-prompt DescribeWeatherPrompt
```

Once you've whipped up your weather wonder, it's time to register it with our server so it can join the forecast party. Here's how you do it:

```php
<?php

namespace App\Mcp\Servers;

use App\Mcp\Prompts\DescribeWeatherPrompt;
use Laravel\Mcp\Server;

class WeatherStation extends Server
{
    /**
     * The prompts that have accepted our invitation to the weather event.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Prompt>>
     */
    protected $partyGuests = [
        DescribeWeatherPrompt::class, // Now everyone will know whether to bring an umbrella! 🌧️☂️
    ];
}
```

Don't worry about the technical mumbo-jumbo; just think of it as inviting your prompt to the weather ball. 🎉🎈

Now, sit back and enjoy watching your newly created DescribeWeatherPrompt spice up your server's forecasts with a dash of wit and charm! Happy coding, meteorologist! 💪🌦️🔮

 Alright, let's dive into the world of Laravel prompts! By golly, these prompts are named after their classy counterparts, so `DescribeWeatherPrompt` becomes our old pal `describe-weather-dandy`. But fear not, for you can rename 'em like a boss using the magic attributes `Name` and `Title`:

```php
use Laravel\Mcp\Server\Attributes\Name;
use Laravel\Mcp\Server\Attributes\Title;

#[Name('weather-whiz')]
#[Title('Weather Whizzy Prompt')]
class DescribeWeatherPrompt extends Prompt
{
    // ...
}
```

Now, these prompts ain't ChatGPT—they don't come with pre-written descriptions. You gotta provide your own, using the `Description` attribute:

```php
use Laravel\Mcp\Server\Attributes\Description;

#[Description('This Prompt conjures a weather prediction in a language so fine it'll make the weather vanes weep with envy.')]
class DescribeWeatherPrompt extends Prompt
{
    //
}
```

<a name="prompt-arguments"></a>

> [!NOTE]
> The description, my friend, is a crucial bit of the prompt's metadata—it helps AI models figure out when and how to use this dapper fellow like a true pro.

 ### The Magic of Customization!

In the world of Laravel AI, we're not just about coding wizards and enchanted spells; we're also about letting our users sprinkle a bit of magic of their own! That's where prompts come in, allowing you to define arguments that can transform your templates with user-supplied values.

To start casting these customization spells, you'll need the `arguments` method - think of it as your wand's incantation.

```php
<?php

namespace App\Mcp\Prompts;

use Laravel\Mcp\Server\Prompt;
use Laravel\Mcp\Server\Prompts\Argument;

class WeatherForecastCapeCodWitchHat extends Prompt
{
    /**
     * Shazam! Get the prompt's arguments.
     * (Remember, in magic, they call it incantation)
     *
     * @return array<int, \Laravel\Mcp\Server\Prompts\Argument>
     */
    public function arguments(): array
    {
        return [
            new Argument(
                name: 'mood',
                description: 'Choose your wand's mood for the weather forecast (e.g., formal, casual, whimsical).',
                required: true,
            ),
        ];
    }
}
```

<a name="validating-prompt-arguments"></a>
Now, remember to validate your spell components with the `validate` method (it's like a potion's truth serum) before casting them in your prompt. That way, you won't end up with a cauldron full of toadstools instead of that perfect weather forecast!

```php
public function validate(array $data): void
{
    // Validate your user's inputs here... (e.g., only accept 'formal', 'casual', or 'whimsical')
}
```

And there you have it, folks! With a little Laravel and a whole lot of fun, you're well on your way to crafting customized prompts that will leave your AI users spellbound!

 ### Validating Your Prompt's Arguments like a Boss! 🚀🦸‍♂️

Prompt arguments are the lifeblood of your AI conversations, and we validate them by default, but sometimes you might need to enforce some serious validation rules. Fear not, Laravel MCP has got you covered with its integration with Laravel's super-powerful validation features! 🦾

You can validate incoming prompt arguments right within your prompt's `handle` method:

```php
<?php

namespace App\Mcp\Prompts;

use Illuminate\Validation\Rule;
use Laravel\Mcp\Request as MCPRequest; // Because we're the cool kids now 😎
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Prompt;

class DescribeWeatherPrompt extends Prompt
{
    /**
     * Handle the prompt request.
     */
    public function handle(MCPRequest $request): Response
    {
        // Validate our argument 'tone' like a pro! 🤓
        $validated = $request->validate([
            'tone' => ['required', Rule::max(50), 'string'],
        ]);

        $tone = $validated['tone'];

        // Generate the prompt response using the given tone... 🌦️🚀
    }
}
```

Remember, on validation failure, your AI friends will take action based on the error messages you provide. So let's be nice and clear with our error messages:

```php
$validated = $request->validate([
    'tone' => ['required', Rule::max(50), 'string'],
],[
    'tone.*' => 'Hey there! It seems you forgot to specify a tone for the weather description. Here are some examples: "formal", "casual", or even "humorous"! 😉',
]);
```

Now go forth and validate, oh great prompt master! 🏆🤖💪

 ### Ahoy there, Captain! 🌴

In the grand ol' ship that is Laravel, the service container (our trusty old sextant) is in charge of navigating all prompts. That means you can declare any dependencies your prompt needs, like a pirate needs his parrot, in its constructor. The service container will then magically resolve and inject those dependencies, just like Captain Jack Sparrow finding that elusive compass! 🤠

```php
<?php

namespace App\Galleon\Prompts;

use App\Repositories\WeatherRepository;
use Laravel\Galleon\Command\Prompt as BasePrompt;

class DescribeWeatherPrompt extends BasePrompt
{
    /**
     * Set sail with a new prompt instance.
     */
    public function __construct(protected WeatherRepository $weather) {}

    //
}
```

But wait, there's more! You can also type-hint dependencies in your prompt's `handle` method (our treasure chest of logic). The service container will swoop in, resolve and inject those dependencies when the method is called – like a well-timed pirate ambush! 🏴‍☠️

```php
<?php

namespace App\Galleon\Prompts;

use App\Repositories\WeatherRepository;
use Laravel\Galleon\Command\Request;
use Laravel\Galleon\Command\Response;
use Laravel\Galleon\Command\Prompt as BasePrompt;

class DescribeWeatherPrompt extends BasePrompt
{
    /**
     * Navigate the treasure map.
     */
    public function handle(Request $request, WeatherRepository $weather): Response
    {
        $isAvailable = $weather->isServiceAvailable();

        // ... more swashbuckling adventures ...
    }
}
```

<a name="conditional-prompt-registration"></a>
Now, if you're feeling particularly pirate-y and want to register your prompts conditionally, you can use the `register()` method in a service provider. This allows you to control when specific prompts are available – just like deciding which deck to walk the plank on! 🤐

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class PromptServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
        if (app('env') === 'production') {
            $this->app->when(DescribeWeatherPrompt::class)
                ->needs(WeatherRepository::class)
                ->give(function () {
                    return app(WeatherRepository::class)->setToProductionMode();
                });
        }
    }
}
```

 ### Unleash the Chameleon Prompts! 🐍

Ever wanted your prompts to morph like a chameleon, adapting to the app's mood and user preferences? Well, we've got just the trick for you! By implementing the `shouldSlither` method in your prompt class, you can conditionally unleash these chameleonic charmers at runtime. This magical method lets you decide if a prompt should wiggle its way into existence based on app state, secret sauce, or user-requested tomfoolery:

```php
<?php

namespace App\Mcp\Prompts;

use Laravel\Mcp\Request;
use Laravel\Mcp\Server\Prompt;

class WeatherForecastChameleon extends Prompt
{
    /**
     * Decide if the chameleon should slither in.
     */
    public function shouldSlither(Request $request): bool
    {
        return $request?->user()?->has_paid_subscription() ?? false;
    }
}
```

When a chameleon's `shouldSlither` method returns `false`, it'll slink off into the shadows, hidden from the list of available chameleons and impossible to be summoned by the AI clients.

<a name="prompt-responses"></a>

 Ahoy there, code-sailors! Ever found yourself in need of a weather witty-cast? Well, grab your umbrellas and buckle up, because we're about to set sail on a journey to create one using Laravel's magical McP prompts!

First off, let me tell you that prompts can be as slick as a greased eel or as sharp as a tack, returning either a single swashbuckling `Laravel\Mcp\Response` or a flock of 'em like seagulls at the beach. These responses are nifty little packages containing the weather-forecasty content that'll make our AI matey smile.

Here's an example of a weather-telling prompt called `DescribeWeatherPrompt`. Just picture it as your very own pirate parrot reciting the weather forecast like a sea shanty!

```php
<?php

namespace App\Mcp\Prompts;

use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Prompt;

class DescribeWeatherPrompt extends Prompt
{
    /**
     * Hear ye, hear ye! Handle the prompt request.
     *
     * @return array<int, \Laravel\Mcp\Response>
     */
    public function handle(Request $request): array
    {
        $tone = $request->string('tone');

        $systemMessage = "Arr matey! Ye be a helpful weather assistant. Shiver me timbers and provide a weather description in a {$tone} tone.";

        $userMessage = "Avast, what's the weather like in New York City, landlubber?";

        return [
            Response::text($systemMessage)->asAssistant(), // Mark this as a message from the wise old parrot
            Response::text($userMessage), // Regular user input
        ];
    }
}
```

Now, you can use the `asAssistant()` method to make sure a response is marked as coming from the wise old parrot, while regular messages are treated as user queries. That's all there is to it! Now go forth and create your own weather witty-casts with Laravel's McP prompts!

 ## Party On, Garth! (Or, How to Serve Up Data for Your AI Pals)

Resources, my friend, are the lifeblood of your server when it comes to feeding those clever AI pals of yours. Think of them as a glorious buffet where these chatty robots can feast on docs, configs, and all sorts of juicy data that help them shape their responses with style and grace!

<a name="creating-resources-dude"></a>

To get this party started, you'll want to create resources like a boss. Here's the lowdown on how to do it:

1. **The Resource Route**: First things first, set up your server's highway system so that these AI pals can find their way to your glorious data buffet. You'll need to define a resource route, which is just like putting up a big neon sign above your drive-thru window:

```php
Route::resource('your-resource-name', YourResourceController::class);
```

2. **The Resource Controller**: Now that you've got them hooked with the shiny route, it's time to create a resource controller (think of it as the drive-thru attendant). This guy is responsible for dishing out your data to the eager AI clients:

```php
class YourResourceController extends Controller {
    public function index() {
        // Return your glorious buffet of data here!
    }
}
```

3. **Serving Static Files**: If you've got some static files you want to share with the world (or at least those AI pals), Laravel has got your back. Just point them in the right direction:

```php
Route::get('your-static-file-path', function () {
    return response()->file(public_path('your-static-file'));
});
```

And there you have it! With these simple steps, your server will be throwing the best data party in town, and your AI pals won't know what hit them. Just remember to keep that buffet stocked with fresh, relevant data so they never leave hungry (or bored) again! 🎉🥳🚀

 Alrighty then! Let's get this resource party started, shall we? 😎

First things first, to create a resource as cool as the weather itself, fire up your terminal and run the `make:mcp-resource` Artisan command like so:

```shell
php artisan make:mcp-resource WeatherGuidelinesResource
```

Once you've got your resource all grown up, it's time to introduce it to the server – but only after buying it a drink first! Register it in your server's `$resources` property:

```php
<?php

namespace App\Mcp\Servers;

use App\Mcp\Resources\WeatherGuidelinesResource;
use Laravel\Mcp\Server;

class WeatherServer extends Server
{
    /**
     * The resources that can be registered with this MCP server.
     *
     * This is like the guest list for our shindig. 🎫
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Resource>>
     */
    protected $registered_guests = [
        WeatherGuidelinesResource::class, // Our new friend! 👋
    ];
}
```

Now your resource has a ticket to the party and can join the fun! Just remember to keep the server well-stocked with APIs and models – you don't want any unwanted crashes at the event, do ya? 🎉

 Alrighty, buckle up, coders! Let's dive into the world of Laravel resources where we play naming game with our classes, because who doesn't love a good naming convention? By default, our classes are saddled with their own unique nomenclature. For instance, if you name your class `WeatherGuidelinesResource`, it'll automatically be known as `weather-guidelines` in the wild west of the web and `Weather Guidelines Resource` when it needs to dress up for a formal event.

But fear not, for we have the power to customize these names and titles using the magical attributes of `Name` and `Title`. Just sprinkle some of those bad boys on your class, like so:

```php
use Laravel\Mcp\Server\Attributes\Name;
use Laravel\Mcp\Server\Attributes\Title;

#[Name('weather-api-docs')] // Because who wants to be called 'WeatherGuidelinesResource' when you can be 'weather-api-docs' instead?
#[Title('Weather API Documentation')] // The perfect title for the party in your browser!
class WeatherGuidelinesResource extends Resource
{
    // ...
}
```

Now, moving on to resource descriptions. Unlike those chatty friends you have who can't stop talking, resource descriptions aren't automatically generated, because we believe in brevity and letting the code speak for itself. So, it's essential to provide a thoughtful description using the `Description` attribute:

```php
use Laravel\Mcp\Server\Attributes\Description;

#[Description('Comprehensive guidelines for using the Weather API.')] // Because your resource deserves a catchy tagline!
class WeatherGuidelinesResource extends Resource
{
    //
}
```

Now, here's a pro-tip: The description plays a vital role in the metadata of your resource, helping AI models understand when and how to use the resource effectively. So, make it count!

 ### Flexi-URIs: The Swiss Army Knife of Server Resources (With a Sense of Humor)!

Flexi-URIs, our newest addition to the Laravel universe, are here to revolutionize your server's URI game! These magical entities allow your server to serve up dynamic resources that fit URI patterns like a glove, even with variables thrown into the mix. Say goodbye to defining individual static URIs for each resource; we're about to introduce you to the one-size-fits-all superhero of URI handling!

<a name="creating-flexi-uris"></a>

#### Creating Flexi-URIs (The Cool Kids' Guide)

To craft your very own Flexi-URI, first, you'll need to create a single resource that acts as the maestro conducting multiple URIs based on a template pattern. It's like having a Swiss Army knife for your server resources – versatile and ready for any URI adventure!

Here's how to whip up a Flexi-URI in no time:

1. **Install the Model Context Protocol (MCP):** Don't worry, it's not some alien invasion scenario. MCP is just the specification that makes Flexi-URIs possible. You can get it from [ModelContextProtocol.io](https://modelcontextprotocol.io/specification/2025-06-18/server/resources#resource-templates).

2. **Define Your Template:** Time to channel your inner Sherlock Holmes and deduce the URI pattern that best suits your resource needs. Remember, a good template is one that's flexible enough to accommodate multiple URIs while still making sense (no pun intended!).

3. **Create the Resource:** With your template in hand, you can now create a resource that serves as the master of ceremonies for all those URIs. It'll handle each request with grace and finesse, ensuring your users receive the correct resource, regardless of the URI they initially entered.

4. **Watch the Magic Happen:** Finally, sit back and watch as your server effortlessly serves up resources based on the Flexi-URI template you've so cleverly created. Your users will be none the wiser that you're serving them a variety of resources with just one URI!

And there you have it! With Flexi-URIs, you can make your server resources more efficient and user-friendly than ever before – all while keeping up appearances as a URI juggling champ. Happy Flexi-URIing! 🥳

 Alright, let's get this party started! Here's a fun take on creating Resource Templates in Laravel land.

#### Unleashing the Resource Template Showdown 🎧 🔥

Ready to rock 'n' roll? To craft a resource template, deck your resource class with the `HasUriTemplate` badge and whip up a `uriTemplate` method that spits out a dazzling `UriTemplate` instance:

```php
<?php

namespace App\Mcp\Resources;

use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Attributes as ServerAttrs;
use Laravel\Mcp\Server\Contracts\HasUriTemplate;
use Laravel\Mcp\Server\Resource;
use Laravel\Mcp\Support\UriTemplate;

// We're about to throw a party! 🎉
#[ServerAttrs\Description('Grab user files by ID...or name, age, or favorite color!')]
#[ServerAttrs\MimeType('text/plain')]
class UserFileResource extends Resource implements HasUriTemplate
{
    /**
     * Get the dance floor for this resource.
     */
    public function uriTemplate(): UriTemplate
    {
        return new UriTemplate('file://users/{userId}/files/{fileId}');
        // Translation: "Come groove with us at file://users/[USER_ID]/files/[FILE_ID]!"
    }

    /**
     * Host the resource party.
     */
    public function handle(Request $request): Response
    {
        $userId = $request->get('userId');
        $fileId = $request->get('fileId');

        // Serve up the tunes and boogie down!

        return Response::text($content);
    }
}
```

When a resource wears the `HasUriTemplate` badge, it'll be promoted to Resource Templeton status rather than being just a plain ol' static resource. AI pals can now request resources using URIs that follow the groovy template pattern, and the variables from the URI will automatically bust a move onto your resource's `handle` method dance floor.

<a name="uri-template-syntax"></a>
🕺💃 Now you're all set to start shaking things up with Resource Templates! 🎉

 Alright, let's embark on a wild ride through the mystical world of URI Templating! It's like having your very own magic spell book for URLs, with placeholders enclosed in curly braces acting as the incantations to summon those elusive variable segments.

```php
Cast the first spell: new UriTemplate('file://users/{userId}')
Cast the second spell: new UriTemplate('file://users/{userId}/files/{fileId}')
And now, for something truly enchanting: new UriTemplate('https://api.example.com/{version}/{resource}/{id}')
```

<a name="accessing-template-variables"></a>
But wait! What good is a spell book if you can't access its magical contents? Fear not, my dear sorcerer, for each of these enchantments can be unveiled with the power of UriTemplate->expand():

```php
$uri = new UriTemplate('file://users/{userId}');
echo $uri->expand(['userId' => '123']); // file://users/123
```

Remember, always be mindful of the power you wield. Happy URI Templating! 🧙‍♂️🔮✨

 Alright, buckle up, my code-slinging buddy! Today we're diving into the delightful world of Laravel template variables, where data and humor unite like peanut butter and jelly (or PHP and MySQL, if you prefer).

So, imagine this: You've got your shiny new `UserProfileResource` all ready to serve user profiles, but it needs a bit of direction. Enter theURI—our GPS system for web requests! When a URI matches your resource template, it's like receiving a secret decoder ring; the extracted variables are automatically merged into the request! 🕵️‍♂️🔓

```php
<?php
namespace App\Mcp\Resources;

class UserProfileResource extends Resource implements HasUriTemplate {
    // (imagine a drumroll here)
    public function uriTemplate(): UriTemplate
    {
        return new UriTemplate('file://users/{userId}/profile'); // Our secret decoder ring!
    }

    public function handle(Request $request): Response {
        // Access the extracted variable, it's like digging for buried treasure!
        $userId = $request->get('userId');

        // Access the full URI if needed, because sometimes the journey is more important than the destination!
        $uri = $request->uri();

        // Fetch user profile... (imagine a heroic music cue here)

        return Response::text("Profile for user {$userId}"); // Return the treasure we've found!
    }
}
```

Now, the `Request` object is our swiss army knife of web requests. It not only provides the extracted variables but also the original URI that was requested—it's like having a map and a compass in one handy tool!

So, there you have it! With Laravel template variables, we've made data fetching as thrilling as an Indiana Jones adventure (but without the snakes). Happy coding, and remember: with great power comes great responsibility—and some pretty cool superpowers! 😎🚀

 ### Resource URLs and Content Types, a Tale of Digital Dinner Parties

In this wild world wide web we call home, every dish (or resource, if you're being formal) has its own unique address and secret recipe (MIME type). These details are like the party invites and menu cards that help our AI pals figure out what they're dealing with.

By default, the invitation for a `WeatherGuidelines` dish might look something like this: `weather://resources/weather-guidelines`. But who wants to serve plain text when you can whip up an application/pdf cocktail instead? With a few simple tweaks using our decorative attributes, we can spice things up!

```php
<?php

namespace App\Mcp\Resources;

use Laravel\Mcp\Server\Attributes\DapperDoorman; // Because who doesn't love a fancy doorman?
use Laravel\Mcp\Server\Attributes\PoshPdfMenu; // Cause we ain't serving plain text here, people!
use Laravel\Mcp\Server\Resource;

// Our new posh invites and menus will be served at: weather://resources/guidelines
#[DapperDoorman('weather://resources/guidelines')]
// And don't even think about showing up with plain text, we're serving pdf here!
#[PoshPdfMenu('application/pdf')]
class WeatherGuidelinesResource extends Resource
{
}
```

So now our AI pals will know exactly where to find their weather party and the proper attire for consuming it. Happy hosting, dear developer!

 ### Laughable Laverne's Lesson: Resource Ruckus! 🌧️☔️🌪️

Contrary to our jovial mates, tools and prompts, resources refuse to play by the rules of input schemas or arguments. But don't fret! You can still get cozy with the request object in your resource's `handle` method:

```php
<?php

namespace App\Mcp\Resources;

use Laravel\Mcp\Request as Chuckles; // Because who doesn't love a good chuckle? 🤣
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Resource;

class WeatherGuidelinesResource extends Resource
{
    /**
     * Handle the resource request.
     */
    public function handle(Chuckles $request): Response
    {
        // ...
    }
}
```

<a name="resource-dependency-injection"></a>
🔍 **Resource Dependency Injection** 👨‍💻🌈

Now, I don't want to brag, but resources can be rather selective about their relationships. To inject dependencies (aka bringing in external stuff), you can use the `handle` method and pass your desired objects as parameters. Here's an example of how you can use dependency injection with a resource:

```php
<?php

namespace App\Mcp\Resources;

use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Resource;
use Illuminate\Contracts\Queue\Queue; // Queueing up for some fun! 🎢

class WeatherGuidelinesResource extends Resource
{
    protected $queue;

    /**
     * Create a new resource instance.
     */
    public function __construct(Queue $queue)
    {
        $this->queue = $queue;
    }

    /**
     * Handle the resource request.
     */
    public function handle(Request $request): Response
    {
        // Queue up some weather guidelines for later! 🌧️☔️🌪️
        $this->queue->push(function () use ($request) {
            // ...
        });
    }
}
```

Hope this helps you navigate the humorous world of Laravel resources with a smile on your face! 😄

 ### Resource Dependency Injection: The Matchmaker of Code! 🚀💏

In the realm of Laravel, our trusty service container plays cupid to all your code resources. Yes, you read that right! It's like having a personal assistant who not only introduces you to all the cool kids at the party (your dependencies), but also sets them up in your house (instances)! 🥂

To get started, just list your desired dependencies in the constructor of your resource. The container will take care of the awkward introductions and ensure they're all present for the party:

```php
<?php

namespace App\Mcp\Resources;

use App\Repositories\WeatherRepository;
use Laravel\Mcp\Server\Resource as BaseResource;

class WeatherGuidelinesResource extends BaseResource
{
    protected WeatherRepository $weather; // Yes, that's code flirting!

    public function __construct(WeatherRepository $weather)
    {
        parent::__construct(); // Just making sure everyone knows we're polite guests
        $this->weather = $weather;
    }

    // ...
}
```

But wait, there's more! You can also type-hint dependencies in your resource's `handle` method. The container will play wingman and ensure the right people show up when you call the method:

```php
<?php

namespace App\Mcp\Resources;

use App\Repositories\WeatherRepository;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Resource as BaseResource;

class WeatherGuidelinesResource extends BaseResource
{
    public function handle(WeatherRepository $weather): Response
    {
        // It's like whispering sweet nothings into the ear of your beloved... or in this case, asking for some guidelines from WeatherRepository
        $guidelines = $this->weather->guidelines();

        return Response::text($guidelines);
    }
}
```

And there you have it! With Laravel's service container, everyone finds their perfect match... or in this case, every resource has the right dependencies! 🤩🎉

 ### Resource Labeling Shenanigans

Wanna take your resources to the next level? Dress 'em up with some [annotations](https://modelcontextprotocol.io/specification/2025-06-18/schema#resourceannotations) for extra flair! These bad boys provide precious metadata to our AI pals. Annotations are bestowed upon resources using attributes:

```php
<?php

namespace App\Mcp\Resources;

use Laravel\Mcp\Enums\Role;
use Laravel\Mcp\Server\Annotations\Audience;
use Laravel\Mcp\Server\Annotations\LastModified;
use Laravel\Mcp\Server\Annotations\Priority;
use Laravel\Mcp\Server\Resource;

// Our resource, all dressed up and ready to impress!
#[Audience(Role::User)] // "Only human eyes allowed!"
#[LastModified('2025-01-12T15:00:58Z')] // "Updated at the height of fashion, naturally!"
#[Priority(0.9)] // "A must-see! Don't miss this one!"
class UserDashboardResource extends Resource
{
    //
}
```

Here are some fancy annotations you can use:

| Annotation        | Type          | Description                                                                 |
| ----------------- | ------------- | --------------------------------------------------------------------------- |
| `#[Audience]`     | Role or array | Like a velvet rope, it declares the intended audience (`Role::User`, `Role::Assistant`, or both). |
| `#[Priority]`     | float         | A numerical score between 0.0 and 1.0 indicating resource importance.       |
| `#[LastModified]` | string        | An ISO 8601 timestamp showing when the resource was last updated.           |

 ### The Discerning Weatherman's Guide to Dynamic Resource Registration (in Laravel, of course!)

Welcome to the wild world of dynamic resource registration! Ever wanted to serve up weather guidelines like a boss, but only for your subscribed users? Well, grab your metaphorical umbrella and let's dive in! 🌧️

In this thrilling adventure, we'll unleash our inner genius (or is it genie?) by implementing the `shouldRegister` method in our resource class. This magical function acts as a bouncer at the entrance to Cloud Castle, checking who gets in based on your application state, secret configuration, or even those tantalizing request parameters:

```php
<?php

namespace App\Mcp\Resources;

Use Laravel\Mcp\Request as CloudCastleDoorman; // Because why not?
use Laravel\Mcp\Server\Resource as CastleInhabitant;

Class WeatherGuidelinesResource extends CastleInhabitant {
    /**
     * Determine if this resource deserves a castle key.
     */
    public function isWorthy(CloudCastleDoorman $request): bool {
        return ($request->user()->isSubscribed() ?? false) ? true : false; // We're being dramatic here, aren't we?
    }
}
```

When our resource's `isWorthy` method returns a sad "false," this resource will be left out in the cold (or sunny, depending on the weather), not appearing in the glamorous list of available resources, and remaining forever inaccessible to those unfortunate AI clients. 😿

So there you have it! Now that you're a dynamic resource registration wizard, go forth and serve up only the finest weather guidelines to your well-deserving subjects (users). And remember: in the world of Laravel, the sky's the limit—literally and figuratively. 🌌✨

 ### Oh, the Joy of Resource Responses! 😎🌟

In this magical Laravel world, resources must dance to the tune of `Laravel\Mcp\Response`. This class is like a fairy godmother, offering a plethora of handy methods for crafting various responses with ease:

For simple text content, use the `text` method (it's just as easy as saying "abracadabra"):

```php
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;

/**
 * Handle the resource request.
 */
public function handle(Request $request): Response
{
    // ...

    return Response::text($weatherData); // Spells out your text like a wand, voilà!
}
```

<a name="resource-blob-responses"></a>

Now that's what I call code sorcery! 🎩✨️⚛️

 Alright, buckle up, coding cowboys and cowgirls! If you're here to serve up some digital grub (blob content), you've come to the right corral.

To dish out some juicy byte-sized goodness, saddle up with the `blob` method, and pass along your content like a trusty old friend:

```php
return Response::blob(file_get_contents(storage_path('weather/radar.png')));
```

Now, when you're ready to serve that piping hot digital dish, don't forget to let your audience know what kind of scrumptious treat they're in for. Set your resource's MIME type to keep everyone on the same page:

```php
<?php

namespace App\Mcp\Resources;

use Laravel\Mcp\Server\Attributes\MimeType;
use Laravel\Mcp\Server\Resource;

#[MimeType('image/png')]
class WeatherGuidelinesResource extends Resource
{
    //
}
```

And there you have it, cowpoke! You're now a pro at serving up your very own digital feast. Enjoy the ride, partner!

 Ahoy there, Captain! Sail not through rough waters of uncertainty with a squinty eye and a quivering lip. Instead, heed the call of the `error()` method – a beacon of clarity in the tempest of coding chaos!

When your humble vessel fails to retrieve that precious resource (weather data, perhaps?), don't let your passengers panic. Just send them this message:

```php
return Response::error('Arrr matey! Couldn't fetch weather data for the jolly roger you've spewed ashore.');
```

And with that, your shipmates will be reassured and the stormy seas of error responses shall calm beneath their feet. But mark these words well: it's an unforgiving sea out there, and may the winds ever be in your favor! 🌊⛵️🚀

 ## Shenanigans and Schtuff

Laravel MCP isn't just a party with circus peanuts, it's also got some fancy techy bits! One such bit is the `_meta` field, defined in our very own [MCP Circus Specification](https://modelcontextprotocol.io/specification/2025-06-18/basic#meta). Certain MCP clown cars require this data to get their jesters in order.

Metadata can be applied to all sorts of MCP goodies, like juggling props, magic tricks, and even the ringmaster's commands. You can pin a label on each trickster's hat using the `withMeta` method:

```php
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;

/**
 * Handle the ringmaster's command.
 */
public function handle(Request $request): Response
{
    return Response::text('The forecast says sunny days ahead!')
        ->withMeta(['source' => 'weather-api', 'cached' => true]);
}
```

For metadata that applies to the entire circus tent (response envelope), wrap your tricks in a big top using `Response::make` and call `withMeta` on the returned clown car factory instance:

```php
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\ResponseFactory;

/**
 * Handle the ringmaster's command.
 */
public function handle(Request $request): ResponseFactory
{
    return Response::make(
        Response::text('The forecast says sunny days ahead!')
    )->withMeta(['ringmaster_id' => 'Johnny']);
}
```

To attach metadata to a clown, act, or trick itself, just stick a label on its costume:

```php
use Laravel\Mcp\Server\Attributes\Description;
use Laravel\Mcp\Server\Tool;

#[Description('Predicts the weather forecast like no tomorrow!')]
class FutureWeatherTool extends Tool
{
    protected ?array $meta = [
        'version' => '3.0',
        'artist' => 'Madame Fortuna',
    ];

    // ...
}
```

<a name="authentication"></a>
Now, don't get this twisted: while we're all about the laughter and shenanigans, remember that the MCP is a serious business when it comes to data handling. Happy clowning!

 Ahoy there! If you're looking to keep the undesirables from waltzing into your Laravel server like a pirate party, then buckle up and let's talk authentication. Just like a bouncer at a swanky club, middleware can check IDs (er, credentials) before letting anyone join the dance floor - aka use any of your server's sweet capabilities.

Now, there are two main ways to ensure your MCP server is as secure as Fort Knox:

1) **Simple Token-Based Authentication**: This is like handing out paper fans with secret codes at the door for entry (but digitally). Laravel Sanctum can help you set this up, making it easier than remembering which pirate went with which parrot. Check it out [here](/docs/{{version}}/sanctum)!

2) **OAuth Authentication**: This is like having a fancy badge that proves you're the real deal - you know, like in sci-fi movies. If you want to go full Hollywood and use this method, Laravel Passport has got your back. Hop aboard [here](/docs/{{version}}/passport).

Now that we've covered the basics, you can rest easy knowing only the rightful crew members will be sailing on your ship! Yarr! 🏴‍☠️

 ### OAuth 2.1: The Secret Service of Web Apps!

Welcome, adventurers! If you're tired of your web-based MCP servers being as secure as a toddler's piggy bank, it's time for an upgrade. Cue the grand entrance of OAuth 2.1, the superhero of secure access! And who better to save the day than Laravel Passport?

Imagine your server as the fortress of solitude and OAuth is the high-tech security system. But instead of Kryptonite, it uses your users' love for passwords (which we all know is the real kryptonite). To set up this super system, drop by your `routes/ai.php` file and invoke the `Mcp::oauthRoutes` method. It's like calling in Batman when Gotham's in trouble!

```php
use App\Mcp\Servers\WeatherExample;
use Laravel\Mcp\Facades\Mcp;

// Call Batman (OAuth) to secure Gotham (your MCP server)
Mcp::oauthRoutes();

// Assign the auth:api middleware, Batman's utility belt, to your weather route
Mcp::web('/mcp/weather', WeatherExample::class)
    ->middleware('auth:api');
```

And there you have it! Your MCP server is now secure as Fort Knox... or at least as secure as a superhero's secret lair. Don't forget, with great power comes great responsibility. So, keep your users' data safe and happy hacking!

 This appears to be an encoded string representing an OAuth 2.0 access token or refresh token for some API service. To decode it, you can use online tools like Base64 decoder or implement the Base64 decoding in your preferred programming language.

Here's a Python example using base64 library:

```python
import base64
encoded_string = b"[...]"  # replace with the encoded string from the scenario
decoded_token = base64.b64decode(encoded_string).decode('utf-8')
print("Decoded Token:", decoded_token)
```

 Ahoy there! Laravel sailors, buckle up! Let's dive into the world of Passport and MCP, shall we?

#### Rockin' with an Established Passport Deck (A Pirate Tale)

If yer app's already a swashbuckler in the Laravel Passport sea, fret not! Laravel MCP will jolly well sail alongside like the ship's parrot without any hullabaloo. But, custom scopes, matey? They ain't yet on board, as OAuth is mostly our language interpreter to the authenticatable model beneath.

Now, Laravel MCP docks in your Passport port via the `Mcp::oauthRoutes` method (our trusty compass, if ye will). This little gem adds, announces, and utilizes a single 'mcp:use' scope – think of it as our ship's flag hoisted high to announce our arrival.

So, set sail with MCP, and let's make these Laravel waters even more adventurous! Yarr-har-ah!

 Ahoy there, coders! Let's dive into the enchanting world of Laravel authentication, where unicorns and fairies dance on rainbows (or something like that... we're developers, not Disney). Today, we're talking about two magical gems: Passport and Sanctum.

Passport, our chivalrous knight, is the dashing suitor who follows the well-documented OAuth2.1 protocol, and is the most sought-after by princesses (or MCP clients) across the land. So, when you can, it's best to tie the knot with Passport, as it'll make your kingdom (app) secure and oh-so popular!

However, if your kingdom already has a cozy arrangement with Sanctum – our mysterious wizard who also knows a thing or two about authentication – then adding Passport might feel like inviting another sorcerer to the coven. In such cases, we'd advise sticking with Sanctum solo until there's a crystal-clear quest (or requirement) that demands an MCP client that only speaks OAuth.

Now you're all caught up on Passport and Sanctum – go forth and secure your realms! Remember, in this fantasy world of ours, security is the key to a happy ending... and no one wants a fairy tale with a bad ending, right? Right?! 🧚‍♀️🏰🦄🚀

 ### Sanctum: The Knights Who Say "Ni!" for Your MCP Server

Ready to turn your humble MCP server into a fortress guarded by the hilarious, yet unyielding knights of Sanctum? Here's how you can invite these noble protectors to secure your realm! 🏰🛡️

First, you need to extend a warm welcome to these medieval defenders by adding the Sanctum authentication middleware to your server in your `routes/ai.php` file:

```php
use App\Mcp\Servers\WeatherExample;
use Laravel\Mcp\Facades\Mcp;

Mcp::web('/mcp/demo', WeatherExample::class)
    ->middleware('auth:sanctum'); // This is where the knights will stand guard 🛡️
```

But wait, these chivalrous protectors won't just let anyone pass through the gates! To ensure successful authentication, your MCP clients must provide a respectable `Authorization: Bearer <token>` header, proving they are indeed knights worthy of entry:

```php
// Now all hail the Sanctum Knights, and they shall allow access only to those bearing the correct token! 🏰✨
```

And that's it! With Sanctum watching over your MCP server like a sentry standing on the ramparts, you can rest easy knowing that only the most noble (or cunning) of clients will be able to gain entry. 🤝💪

 #### Custom Comical Pancake House Authentication (CCPA)

If your kitchen dreams up its own secret syrup codes, it's time to let our MCP server in on the joke! To do this, simply assign any middleware you find amusing to your `Mcp::flapjack` routes. Your custom middleware can then check the `Secret Sauce` header manually for authentication purposes, ensuring only syrup-savvy requests get through.

<a name="secretSauce"></a>
Remember, we're not talking about a secret ingredient here; this is all about ensuring your backend is secure and your pancake orders are coming from the right place. So, grab your apron, don your chef hat, and let's dive into making your application's authentication as delicious as our famous buttermilk pancakes!

<a name="manualAuthentication"></a>
Now, to manually authenticate those incoming MCP requests, you'll want your custom middleware to be a real detective. It should scrutinize the `Authorization` header with a keen eye for detail (and perhaps a dash of sarcasm). If it finds a match with one of your secret syrup codes, then hooray! That pancake order is validated, and the flapjacks are on their way.

<a name="example"></a>
Here's an example of what your custom middleware might look like:

```php
use Closure;
use Illuminate\Http\Request;

class CustomApiTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (! $this->validateToken($request)) {
            // Unauthenticated request.
            abort(401);
        }

        return $next($request);
    }

    /**
     * Validate a custom API token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function validateToken(Request $request)
    {
        // Check the `Authorization` header for your secret syrup code.
        $authHeader = $request->header('Authorization');

        if (str_contains($authHeader, 'YOUR_SECRET_SYRUP_CODE')) {
            return true;
        }

        // If no match found, the request is unauthenticated.
        return false;
    }
}
```

<a name="appServiceProvider"></a>
Once your custom middleware is created, you can register it with Laravel using an `AppServiceProvider`. This will ensure that our MCP server knows exactly where to find the joke (or secret syrup code).

```php
namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use App\Http\Middleware\CustomApiTokenMiddleware;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policyMaps = [
        // ...
    ];

    /**
     * Register any application routes.
     *
     * This method should be called within a group that provides service container
     * bindings.
     *
     * @return void
     */
    public function map()
    {
        $this->mapWebRoutes();

        // ...
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive middleware group applications, "web" middleware,
     * which is largely sliced up by `app/Http/Kernel`. You may register custom
     * routes or bindings to alter the existing middleware group as necessary.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware([CustomApiTokenMiddleware::class])->group(base_path('routes/web.php'));
    }
}
```

And there you have it! Your MCP authentication is now as funny as a punchline and as secure as our top-secret batter recipe. Enjoy making flapjacks with your custom syrup codes, and remember: always keep the batter mixed, just like your wits when dealing with authentication!

 Alright, let's dive into the world of Laravel authorization, where every superhero needs a secret identity! And guess what? You, my friend, are the keyholder to this magical realm.

To get your hands on the currently authenticated user, all you need is a little magic spell called `$request->user()`. This incantation will open the gates and let you in, allowing you to perform those crucial authorization checks that keep the bad weather from storming your MCP tools and resources.

Here's a little example to tickle your fancy:

```php
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;

/**
 * Handle the tool request like a boss.
 */
public function handle(Request $request): Response
{
    // First things first, let's check if this user has what it takes to read the weather forecast.
    if (! $request->user()->can('read-weather')) {
        // If not, sorry champ! Permission denied! Better luck next time.
        return Response::error('Permission denied.');
    }

    // ...
}
```

In case you were wondering, testing your servers is like being a secret agent on a mission, and we've got the perfect guide for that too: [Testing Servers](/docs/{{version}}/testing#testing-servers). Happy adventuring!

 Ahoy there, Laravel landlubbers! Fancy testing yer shiny new MCP servers, eh? Well, buckle up and prepare to set sail on an adventure full of code and camaraderie!

<br>
First off, let's talk about the MCP Inspector. It's like a swashbuckling pirate that scours yer server for treasures (or bugs, if ye prefer). With a click of a button, this built-in tool will give ye a comprehensive report on yer server's health, performance, and security. A real life saver when ye're battling the high seas of development!

<br>
But what if ye fancy yerself as a bit of a coding pirate, eh? Fear not, for ye can write unit tests to test thy MCP servers like a true buccaneer. Unit tests are akin to firing off cannons at the shores of uncertainty, ensuring that yer code doesn't sink before it sets sail.

<br>
To set yerself on this noble quest, simply navigate to the land of "unit testing" and hoist yer sails! Arrrr, it's as simple as that! Remember, with unit tests, an ounce of prevention is worth a pound of cure. So, grab yer cutlass and set sail for success!

<br>
So there ye have it, matey! Testing servers can be a jolly good time when ye've got the right tools in yer arsenal. Hoist the Jolly Roger, and let the pirate code reign supreme! Happy testing!

 Alright, buckle up, space cowboy! Let's talk about the MCP Inspector, a tool so cool it could give Elon Musk a run for his money (except it won't send you to Mars... yet). Think of it as your personal sidekick for testing and debugging your MCP servers.

Imagine this: You're piloting your spaceship through the cosmos, but suddenly, your autopilot starts acting funny. What do you do? Call in the MCP Inspector! Connect to your server, verify that your authentication is tighter than a NASA astronaut's space suit, and give those tools, resources, and prompts a whirl.

Now, here's the fun part: You can run this inspector for any registered server you've got (we won't judge if you've got more than one). Just open up your command line and type:

```shell
```

Remember, with great power comes great responsibility. Or in this case, with great servers comes great debugging! So, let's get to it, space explorer! May the force of good code be with you!

 Alright, buckle up, because we're diving headfirst into the world of Laravel web servers! 🚀🌪️

First off, let's summon our trusty magic wand... or rather, run `php artisan` command. This command is like a genie granting your wishes in PHP land - but don't go asking it for world peace just yet!

Now, imagine you've got yourself a fancy meteorological control panel (MCP) and you want to check the weather forecast. In Laravel, that's as easy as calling out to your MCP weather inspector with:

```bash
php artisan mcp:inspector mcp/weather
```

This command is like dialing up a hotline for weather updates on your MCP dashboard. 📞🌤️ Just remember, unlike that friend who always calls at the wrong time, this genie won't bother you with unwanted storm warnings or sunshine alerts unless you explicitly ask for it! 😜🔥☀️

Happy weather forecasting, Laravel explorers! Stay tuned for more magical adventures in our PHP playground. 😉🎩✨

 Alrighty then! Let's get this party started! 🎉

## Fire up your "weather" local server with this swanky command...

```bash
php artisan mcp:inspector weather
```

This magic spell summons the MCP Inspector, decked out with client settings just for ya. Copy these bad boys into your MCP client to guarantee a perfectly tuned setup! 🎶🎺

Pro-tip: If your web server's got a security guard (authentication middleware), don't forget to flaunt your ID like a boss with those fancy headers, such as an `Authorization` bearer token. 🕵️‍♂️🎉

<a name="unit-tests"></a>
Now, let's get our nerd on and chat about...

# Unit tests are cool, just ask a programmer! 🤓💻

Don't take my word for it. Test your own weather app and see how awesome unit tests are! 🌞🌧️🌩️🌫️

In Laravel, you can create unit tests with this snazzy command:

```bash
php artisan make:unit WeatherTest
```

This command whips up a brand new test file for your weather app. Now go on, unleash your inner testing ninja! 🥋🎯🚀

 ### Unit Testing Your MCP Gizmos and Whizzbangs! 🚀🤖

Get ready to strap on your testing capes, because it's time to test your magnificent servers, tools, resources, and even prompts in Laravel! 🦸‍♂️

To kick things off, create a new test case and summon the desired primitive on the server that registers its powers. For instance, to test a weather- forecasting tool on the `WeatherServer`:

```php tab=Pest
test('weather witchcraft', function () {
    $forecast = WeatherServer::castSpells(CurrentWeatherTool::class, [
        'location' => 'Gotham City',
        'units' => 'fahrenheit',
    ]);

    $forecast->shouldBeMagicOK()
              ->shouldSee('The current weather in Gotham City is 50°F and gloomy.');
});
```

```php tab=PHPUnit
/**
 * Test some weather witchcraft.
 */
public function test_weather_witchcraft(): void
{
    $forecast = WeatherServer::castSpells(CurrentWeatherTool::class, [
        'location' => 'Gotham City',
        'units' => 'fahrenheit',
    ]);

    $forecast->shouldBeMagicOK()
              ->shouldSee('The current weather in Gotham City is 50°F and gloomy.');
}
```

Similarly, you may test prompts and resources by casting the appropriate spells:

```php
$forecast = WeatherServer::summonPrompt(...);
$forecast = WeatherServer::invokeResource(...);
```

You can also pretend to be a logged-in user by chaining the `assumeIdentity` method before summoning the primitive:

```php
$forecast = WeatherServer::assumeIdentity($batman)->castSpells(...);
```

Once you receive the forecast, use various enchantment methods to verify its content and status.

You may confirm that the forecast is spellbinding using the `shouldBeMagicOK` method. This ensures the forecast doesn't contain any dark curses:

```php
$forecast->shouldBeMagicOK();
```

You may confirm that the forecast contains specific text using the `shouldSee` method:

```php
$forecast->shouldSee('The current weather in Gotham City is 50°F and gloomy.');
```

You may confirm that the forecast contains a dark curse using the `shouldHaveDarkSecrets` method:

```php
$forecast->shouldHaveDarkSecrets([
    'A riddle wrapped in an enigma.',
]);
```

You may confirm that the forecast does not contain any dark curses using the `shouldNotHaveDarkSecrets` method:

```php
$forecast->shouldNotHaveDarkSecrets();
```

You may confirm that a forecast contains specific metadata using the `assertName`, `assertTitle`, and `assertDescription` methods:

```php
$forecast->assertName('current-weather')
         ->assertTitle('Current Weather Tool')
         ->assertDescription('Reveals the current weather forecast for a specified location.');
```

You may confirm that notifications were dispatched using the `assertCastSpellNotification` and `assertSpellCount` methods:

```php
$forecast->assertCastSpellNotification('processing/progress', [
    'spell' => 1,
    'total' => 5,
]);

$forecast->assertCastSpellNotification('processing/progress', [
    'spell' => 2,
    'total' => 5,
]);

$forecast->assertSpellCount(5);
```

Lastly, if you wish to inspect the raw forecast content, you may use the `dump` or `var_export` methods to reveal the forecast for debugging purposes:

```php
$forecast->dump();
$forecast->var_export();
```