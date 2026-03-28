 # Laravel's AI Time Machine 🕰️🚀

Welcome, time travelers! Dust off your flux capacitors and get ready to embark on an adventure through the fascinating world of AI with Laravel's AI SDK. This isn't just a toolkit; it's your very own DeLorean for interacting with cutting-edge artificial intelligence services! 🚗

<a name="installation"></a>
## Time Circuits, Flux Capacitors, and More! 🔧⏳

Getting started is as easy as pie in the face of a mad scientist. We'll walk you through the process of installing, configuring, customizing base URLs, and ensuring provider support. Just remember, unlike Doc Brown, we can't guarantee that your car will reach 88 mph... but we'll do our best! 🏎️

<a name="agents"></a>
## The AI Agent: Your Partner in Time Travel 🤖🕰️

Meet the heart and soul of our AI SDK: the agent. This sophisticated entity can be prompted, maintain conversation context, produce structured output, handle attachments, stream data, broadcast messages, queue tasks, and even tool around with middleware! And if you're feeling a bit anonymous, you can always switch to anonymous mode. 🕵️‍♂️

<a name="images"></a>
## Photos from the Future (or Past) 📸🔜

Ever wondered what a time traveler's selfie looks like? With our image handling capabilities, you can now manipulate images to your heart's content. But watch out for those temporal distortions! 🌩️

<a name="audio"></a>
## Hear The Future (or Past) Speak 🎙️🔄

Text-to-speech (TTS) and speech-to-text (STT) capabilities allow you to both speak with the future and listen to its responses. Just don't forget to bring along a translator for those pesky time paradoxes! 🤖🗣️

<a name="transcription"></a>
## Listening to the Tick-Tock of Time 🕰️🎙️

With transcriptions, you can record and understand what's being said, even if it's a Marty McFly-esque exclamation about changing history! 💥🗣️

<a name="embeddings"></a>
## The Time-Space Continuum's DNA 🔬🚀

Embeddings help us understand the relationships between concepts. Query and cache these embeddings to navigate the complexities of time travel like a pro! 🕰️🧬

<a name="reranking"></a>
## Prioritizing Time-Travel Responses 🔄🕰️

Ever had a conversation with a future version of yourself and felt confused? Our reranking feature ensures you'll always get the most helpful response, even when dealing with your own doppelganger! 😲🕵️‍♂️

<a name="files"></a>
## Time-Travel Documents: Keep 'em Close 📄🕰️

Manage files with ease, ensuring you always have the right documents for any point in time. Just don't forget to back them up before making any major changes! 📚⏳

<a name="vector-stores"></a>
## Building Your Own Time-Travel Library 📚🚀

Vector stores allow you to categorize and access files based on their semantic content, making navigating the intricate web of time travel a breeze! 🕰️📚

<a name="failover"></a>
## Preventing Time Paradoxes 🕰️💣

Failovers help you manage unexpected events, ensuring your time machine doesn't end up in a parallel universe (or worse, stuck in 1955!). Just remember to always double-check your calculations before setting off! 🎢🕰️

<a name="testing"></a>
## Testing Your Time Machine: A Necessary Evil 🧪🕰️

With our testing features, you can ensure that everything runs smoothly and avoid any unwanted temporal disruptions. Because who needs another flying DeLorean tearing up the timeline? 💥🗺️

<a name="events"></a>
## Keeping Track of Time Travel Events 🕰️📝

Our event system lets you monitor all your time travel activities, so you can stay on top of your trips and avoid any potential temporal catastrophes. After all, a little vigilance goes a long way when dealing with the complexities of time travel! 🕰️🔍

 Ahoy there, coding compadres! Buckle up for a thrilling ride into the wild west of artificial intelligence, where the sheriffs are named OpenAI, Anthropic, and Gemini (no, not the astronauts - the AI providers)! And you're about to become the town marshal with Laravel's very own AI SDK, a trusty sidekick that'll help tame these intelligent beasts into building your next-gen, highly intelligent agents!

But wait, there's more! With this swanky SDK in tow, you can whip up all sorts of goodies: generating images that'll put Picasso to shame, synthesizing and transcribing audio like a modern-day sorcerer, creating vector embeddings, and let's not forget - saving the day with much, much more! All while keeping it simple and Laravel-friendly!

Now, enough yapping - let's git 'er done! Follow me after the break (ahem, aka [GitHub](https://github.com/laravel/ai)) to learn how you can start taming these AI providers like a pro.

<hr>

## Yeehaw, it's installation time!



To get started with the Laravel AI SDK, first, make sure you have Composer installed on your machine. If you don't, well... you're going to need a horse to travel to the nearest internet saloon and grab yourself a copy of it.

Assuming Composer's already in your saddlebag, fire up a terminal, and run this command:

```
composer require laravel/ai
```

Now sit back, relax, and let Composer do its thing. Once it's done, you'll be all set to start riding the AI waves!

<hr>

## Now that we're pardnered up...



Next up, it's time to configure your shiny new Laravel AI SDK so it knows which AI provider to hitch its wagon to. Open your `config/ai.php` configuration file and set the `provider` key to the service you wish to use.

Here's an example for OpenAI:

```
'default' => env('AI_PROVIDER', 'openai'),
```

Now, don't forget to add your API keys! Head over to each provider's dashboard (Google it if you need to) and fetch those precious secrets. Once you have them, set the corresponding environment variables:

```
AI_OPENAI_API_KEY=my-openai-api-key
AI_ANTHROPICTIC_API_KEY=my-anthropictic-api-key
AI_GEMINI_API_KEY=my-gemini-api-key
```

And that's it, partner! You're now ready to start exploring the boundless frontier of AI with Laravel by your side. Happy trails!

 Alrighty, let's get this AI party started! First things first, you need to invite the Laravel AI SDK to your bash (that's developer-speak for 'project'). Here's how:

```shell
composer require laravel/ai
```

Imagine it's like sending a fancy digital invitation - once accepted, our AI friend will be all set to join the fun.

Next, let's get acquainted. To make them feel at home, we need to publish their configuration and migration files using our trusted Artisan command:

```shell
php artisan vendor:publish --provider="Laravel\Ai\AiServiceProvider"
```

Think of it like unpacking their bags and setting up camp - they'll need a place to rest between rounds of witty conversation.

Last but not least, let's give them somewhere to play - we need to run the database migrations:

```shell
php artisan migrate
```

This is like building them a playground where they can store all those delightful conversations they're about to have with your users. Now sit back and watch the magic unfold! 🤖🎉

 ### Alright, Captain!

Set sail with us by configuring your AI ship's credentials! Sail the high seas of data with ease, matey! You can anchor these details in your application's `config/ai.php` boat log or as environment variables in your application's `.env` compass:

```ini
ANTHROPIC_API_KEY= (Ye old secret to chat like Shakespeare)
COHERE_API_KEY= (Map out the stars with this one, kid!)
ELEVENLABS_API_KEY= (Say 'Ahoy!' to their top-notch text generation!)
GEMINI_API_KEY= (For those who seek the finest in image magic!)
MISTRAL_API_KEY= (Unleash audio mastery with this key, arr!)
OLLAMA_API_KEY= (Aye, aye captain! Let's transcribe like a pro!)
OPENAI_API_KEY= (The ultimate companion for embedding, mate!)
JINA_API_KEY= (For when ye need to sail the seas of knowledge and data!)
VOYAGEAI_API_KEY= (Explore new realms with this key, you hearty soul!)
XAI_API_KEY= (Unlock exciting adventures in AI land with this key!)
```

Ahoy, there! The default models for text, images, audio, transcription, and embeddings can also be charted out in your application's `config/ai.php` boat log. Set sail with the best, matey!

 ### Custom Base URLs: A Leap Through the Internet Jungle! 🌳🐾

In the wild world of Laravel AI, we connect with providers' public API endpoints like a well-trained pup fetching its favorite bone. But sometimes, you might find yourself needing to navigate through a hidden trail instead - perhaps to manage API keys, impose traffic limits, or trek through a corporate gateway 🏛️.

To tame this trail, you can set custom base URLs by whispering a `url` parameter into your provider's secrets lair (AKA the configuration):

```php
'providers' => [
    'openai' => [
        'driver' => 'openai',
        'key' => env('OPENAI_API_KEY'), // This pup definitely knows its key! 🔑
        'url' => env('OPENAI_BASE_URL'), // And this is where the trail leads, comrade! 🌲
    ],

    'anthropic' => [
        'driver' => 'anthropic',
        'key' => env('ANTHROPIC_API_KEY'), // Anthropic pup also has its key memorized 🐺
        'url' => env('ANTHROPIC_BASE_URL'), // And this trail it must follow 🛫
    ],
],
```

This trick is particularly handy when journeying through a proxy service (like LiteLLM or Azure OpenAI Gateway) or exploring alternative endpoints.

Custom base URLs are supported for the following providers: OpenAI, Anthropic, Gemini, Groq, Cohere, DeepSeek, xAI, and OpenRouter. So now you're not just a Laravel developer, but an intrepid AI explorer too! 🦍🚀

 ### Galactic Gadgets: A Cosmic Guide to Providers! 🚀

In the vast expanse of our AI SDK, we've got a swarm of stellar providers powering each feature like a supernova in a sparkly dress! Here's a celestial map for your coding journey:

| Feature | Celestial Bodies |
|---|---|
| Cosmic Text Chats | OpenAI (Captain Obvious), Anthropic (Mr. Spock), Gemini (Twins of Tech), Azure (Star Trekker), Groq (Galactic Linguist), xAI (Data Warp Drive), DeepSeek (The Deep Thinker), Mistral (Cool Breeze), Ollama (Alien Scholar) |
| Image Manipulation | OpenAI (Picasso's Alien Apprentice), Gemini (Twin Photoshoppers), xAI (Holographic Imager) |
| Text-to-Speech | OpenAI (Astral Voicebot), ElevenLabs (The Synthesized Symphony) |
| Speech-to-Text | OpenAI (Galactic Translator), ElevenLabs, Mistral (The Whisperer) |
| Embeddings | OpenAI (Stellar Semantic Analyzer), Gemini (Twin Data Diggers), Azure, Cohere, Mistral, Jina, VoyageAI (Intergalactic Insight Engine) |
| Reranking Results | Cohere, Jina (The Algorithm Architects) |
| File Transfers | OpenAI, Anthropic, Gemini (Data Shuttles of the Universe) |

But wait! There's more! To avoid confusing our cosmos with an array of plain strings, we've developed the `Laravel\Ai\Enums\Lab` enum for a more elegant, star-studded reference system:

```php
use Laravel\Ai\Enums\Lab;

Lab::Anthropic; // Mr. Spock
Lab::OpenAI; // Captain Obvious
Lab::Gemini; // The Twins of Tech
// Continue your exploration...
```

Now that you've got the cosmic lowdown, let's blast off into the coding universe together! 🌠🚀

 Ahoy there, Captain! In the grand Laravel AI SDK, Agents are the swashbuckling heroes that interact with your favorite AI providers, just like a quick-witted first mate helping you navigate the high seas of artificial intelligence!

Each Agent is a dedicated PHP class, acting as a specialized assistant – a sales coach, a document analyzer, or even a support bot – that you set up once and use throughout your application. Think of an Agent as a trusty crew member you can summon at any time, dispensing wisdom and insight when needed!

To create an Agent, simply cast the 'make:agent' spell on the Artisan command line:

```shell
php artisan make:agent SalesCoach

php artisan make:agent SalesCoach --structured
```

Within your newly summoned Agent class, you can define the system prompt/instructions, message context, available tools, and output schema (if applicable):

```php
<?php

namespace App\Ai\Agents;

use App\Ai\Tools\RetrievePreviousTranscripts;
// ...snip...

class SalesCoach implements Agent, Conversational, HasTools, HasStructuredOutput
{
    use Promptable; // Magical powers activated!

    public function __construct(public User $user) {}

    /**
     * Set your Agent's mission. What ho! Here be the instructions:
     */
    public function instructions(): Stringable|string
    {
        return 'Avast, ye scurvy dog! I be a sales coach, analyzing transcripts and providing feedback and an overall sales strength score. Arr matey!';
    }

    /**
     * Get the messages exchanged so far between the ship's crew (i.e., the conversation).
     */
    public function messages(): iterable
    {
        return History::where('user_id', $this->user->id)
            ->latest()
            ->limit(50)
            ->get()
            ->reverse()
            ->map(function ($message) {
                return new Message($message->role, $message->content); // Shiver me timbers!
            })->all();
    }

    /**
     * List the tools at your Agent's disposal. These are like the ship's armory: swords, cannons, and maps to aid in the quest.
     */
    public function tools(): iterable
    {
        return [
            new RetrievePreviousTranscripts(), // A trusty compass for navigation!
        ];
    }

    /**
     * Get the Agent's structured output schema definition. What be the format of the output, ye ask?
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'feedback' => $schema->string()->required(), // Share your thoughts and advice!
            'score' => $schema->integer()->min(1)->max(10)->required(), // Display the sales strength score, mates!
        ];
    }
}
```

Once you've defined your Agent, you can prompt it to perform its duty by using its magical powers (i.e., the `prompt()` method). Fair winds and following seas, matey!

 Alrighty, let's get this party started! First things first, you gotta summon your trusty sales guru using the mighty `make` method or the old-school manual instantiation. Here's a little magic incantation to help you out:

```php
$answer = (new SalesCoach)
    ->castMagicSpell('Let's pore over this sales transcript...');

echo $answer; // Don't forget to unleash the answer upon the world!
```

The `make` method is like a wizard's wand, fetching your agent straight outta the magical container with automatic dependency injection. You can even cast some extra spells in the constructor by passing arguments:

```php
$wizzy = SalesCoach::make(user: $user);
```

Now, if you want to tweak the provider, model, or the length of your spellcasting session when summoning your sales guru, you can pass extra ingredients to the `castMagicSpell()` method:

```php
$answer = (new SalesCoach)->castMagicSpell(
    'Let's pore over this sales transcript...',
    provider: Lab::Anthropic,
    model: 'claude-haiku-4-5-20251001',
    timeout: 120,
);
```

Remember to keep an eye on your timeout; you don't want your sales guru getting too cozy and extending the session beyond its expiration. Happy spellcasting! 🧙‍♂️✨

 ### Laugh-Out-Loud Laravel! 🎉🎈

Ahoy there, coding pirate! If your bot is a certified member of the `Conversational` crew, you can dive into the treasure chest of the `messages` method to unearth the previous conversation context, if ya be lucky:

```php
Arrr matey! First ye gotta import the History loot:

```bash
use App\Models\History;
use Laravel\Ai\Messages\Message;
```

Now set sail for this swashbuckling adventure:

```php
/**
 * Find the booty of messages that have made up our conversation so far.
 */
public function messages(): iterable {
    // Set course for the latest messages, limit to 50 to keep storage costs down (you know how expensive grog can be!)
    $history = History::where('user_id', $this->user->id)
        ->latest()
        ->limit(50)
        ->get();

    // Reverse the order like ye would a deck of cards, and transform each message into a Message object for easy parsing.
    return $history->reverse()->map(function ($message) {
        return new Message($message->role, $message->content);
    })->all();
}
```

Yarr! With this method at your disposal, ye'll be able to remember the old yarns and sail smoothly through conversations. Just remember to keep that storage cost down by limiting the number of messages, or else ye might run out of grog and have a mutinous crew on yer hands! 🤝☠️😉

 **Attention, AI Enthusiasts!** 🤖🚀

Before you unleash your bot on the world with a memory better than Eleven from Stranger Things, remember to first summon and deploy the AI SDK's migrations using the magic Artisan command, `vendor:publish`. These mysterious incantations will craft the essential databases for storing conversations. 🔮🧙‍♂️

If you'd like your Laravel bot to remember its chat history as if it were having a late-night talk show conversation with Oprah, then look no further than the `RemembersConversations` trait! This handy tool provides an easy escape from manually coding your way through the `Conversational` interface, saving you countless hours of repetitive typing. 🥱🕰️

```php
<?php

namespace App\Ai\Agents;

use Laravel\Ai\Concerns\RemembersConversations; // Adding this to your bot is like giving it a photographic memory 💬📸
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\Conversational;
use Laravel\Ai\Promptable; // This makes your bot chatty and fun to hang out with! 🎉🎂

class SalesCoach implements Agent, Conversational
{
    use Promptable, RemembersConversations; // Now your bot can hold a conversation like a seasoned pro! 🤖🗽️

    /**
     * Get the pep talk that the agent should deliver.
     */
    public function instructions(): string
    {
        return 'You are a sales coach...'; // Just like Tony Robbins, but with less hair gel 💅🏿
    }
}
```

Ready to start chatting it up with users? First, kick off a brand new conversation:

```php
$response = (new SalesCoach)->forUser($user)->prompt('Hello!'); // This is like introducing your bot to the user at a dance 🕺️💃️

$conversationId = $response->conversationId; // The conversation ID will be your new BFF for future reference, or you can hang out with all of a user's conversations in the `agent_conversations` table directly. 🤝🏆
```

Ready to continue the chat? Use the `continue` method:

```php
$response = (new SalesCoach)
    ->continue($conversationId, as: $user) // Passing the conversation ID is like exchanging phone numbers at the end of a date 📞📲
    ->prompt('Tell me more about that.'); // Now you're back to chatting like old times! 💬🍿
```

When using the `RemembersConversations` trait, past messages are automatically loaded and integrated into the conversation context when prompting. New messages (both user and bot) are stored after each interaction, keeping your bot's memory fresh as a daisy. 🌺🧐

Happy coding, AI aficionados! 🤖🎉💻

 Ah, dear Laravel enthusiasts! Let's put on our coding tuxedos and delve into the world of structured output, shall we?

First off, if you want your bot to channel its inner Jean-Luc Picard instead of Captain Kirk, you'll need to implement the `HasStructuredOutput` interface. It's like a secret handshake that says, "I'm not just here for the party, I've got a spreadsheet!"

To do this, simply extend your agent class with this interface and define a `schema` method. Here's an example of what your SalesCoach might look like:

```php
<?php

namespace App\Ai\Agents;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasStructuredOutput;
use Laravel\Ai\Promptable;

class SalesCoach implements Agent, HasStructuredOutput, SassDancer { // Extra talent, optional
    use Promptable;

    // ...

    /**
     * Get the agent's structured output schema definition.
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'score' => $schema->integer()->required(),
        ];
    }
}
```

Now, when you ask your bot to analyze a sales transcript, it will respond not with cryptic emojis or nonsensical poetry, but with a nice, organized array:

```php
$response = (new SalesCoach)->prompt('Analyze this sales transcript...');

return $response['score']; // The score is in, and it's all yours!
```

Now isn't that a refreshing change from the usual AI chaos? Just remember: with great structured output comes great responsibility – to make your bots dance the sass!

 Alright, let's dive into the world of Laravel AI where your models can be as sharp as a tack and a tad bit sassy!

When you want to serve them up some evidence like sales transcripts or mysterious images, you can pass attachments along with your prompt:

```php
use App\Models\AI\SalesCoach;
use Laravel\Ai\Files as AI_FileSystem; // We're getting all fancy up in here

// Oh boy! Analyze that sales transcript, will ya?
$response = (new SalesCoach)->prompt(
    'Analyze the attached sales transcript...',
    attachments: [
        AI_FileSystem::getDocument('transcript.pdf') // Grab a document from our filesystem disk and make it dance!
        AI_FileSystem::getDocumentFromPath('/home/laravel/transcript.md') // Or dig up a document from the local path, if you're feeling adventurous!
        $request->file('transcript'), // And if someone brings over an uploaded file, we'll happily accept it with open arms!
    ]
);
```

And when your model needs to channel its inner art critic for some image analysis:

```php
use App\Models\AI\ImageAnalyzer;
use Laravel\Ai\Files as ArtGallery; // Because we're art aficionados now!

// What's up in that photo, you ask? Let me get my model on it!
$response = (new ImageAnalyzer)->prompt(
    'What is in this image?',
    attachments: [
        ArtGallery::getImage('photo.jpg') // Fetch an image from our filesystem disk and let's get this party started!
        ArtGallery::getImageFromPath('/home/laravel/photo.jpg') // Or, if it's hiding in the local path, we'll find it and show it off!
        $request->file('photo'), // And if someone brings over an uploaded image, we're more than happy to give it a gander!
    ]
);
```

Stay sharp, stay sassy, and keep those attachments coming! 📄🖼️💻

 ### Liquid Gold from the AI Faucet! 💧🚀

Ever wanted to tap into the wisdom of your Sales Coach without waiting for a download? Well, buckle up, because we're about to streamline your Laravel journey with some AI-powered wit and wisdom! 🤖

To get started, just call upon your Sales Coach using the `stream` method. It's like inviting him over for a virtual chat but without the small talk or coffee refills. ☕️🤐

```php
use App\Ai\Agents\SalesCoach;

Route::get('/coach', function () {
    return (new SalesCoach)->stream('Analyze this sales transcript...');
});
```

Now, if you're the kind of person who likes to plan their exit strategy before they even arrive, then the `then` method is your new best friend. It lets you set up a grand finale for when the whole AI spectacle has played out:

```php
use App\Ai\Agents\SalesCoach;
use Laravel\Ai\Responses\StreamedAgentResponse;

Route::get('/coach', function () {
    return (new SalesCoach)
        ->stream('Analyze this sales transcript...')
        ->then(function (StreamedAgentResponse $response) {
            // Now that the show's over, let's do a final curtain call!
            // $response->text, $response->events, $response->usage...
        });
});
```

But if you're more of an old-school DIY kind of person, you can manually milk the stream for every event. Just catch 'em all, like Pokémon, but with a bit less running around!

```php
$stream = (new SalesCoach)->stream('Analyze this sales transcript...');

foreach ($stream as $event) {
    // ...
}
```

Oh, and if you're using the Vercel AI SDK Protocol for your streaming needs, don't forget to check out the [Streaming Using the Vercel AI SDK Protocol](#streaming-using-the-vercel-ai-sdk-protocol) section. Because variety is the spice of life, and who doesn't love a good spice kick? 🌶️💃🏻

Happy streaming, AI enthusiasts! May your transcripts be analyzed, your events be eventful, and your Laravel journeys filled with laughter and learning. 🎉🚀🤓

 Alright, party people! Let's dive into the world of streaming events with the Vercel AI SDK Protocol, shall we? 🕺️💃️

This ain't your grandma's walkie-talkie, folks. It's the futuristic Vercel AI SDK stream protocol! To get this show on the road, you simply gotta call upon the `usingVercelDataProtocol` method on your streamable response like a boss:

```php
Use yer best sales agent, SalesCoach, for this gig:

Route::get('/coach', function () {
    return (new SalesCoach)
        ->stream('Analyze this sales transcript...')
        ->usingVercelDataProtocol();
});
```

And there you have it! Now your events are streaming faster than Elon Musk's tweets, and more accurately than a Harvard grading system. So sit back, relax, and enjoy the show – while staying on top of your Laravel game, of course! 🎤🚀🚀

 ### The Great Laravel Spectacle!

Welcome to the grand world of Laravel broadcasting, where events are streamed with flair and panache! Let's dive in and see how we can make your application's events more social than a cat on Instagram.

First off, you can simply call the `broadcast` or `broadcastNow` method on a streamed event like you would call your best friend for a late-night pizza party:

```php
use App\Ai\Agents\SalesCoach;
use Illuminate\Broadcasting\Channel;

$stream = (new SalesCoach)->stream('Analyze this sales transcript...');

foreach ($stream as $event) {
    $event->broadcast(new Channel('channel-name')); // It's like inviting all your friends to your virtual party!
}
```

Or, if you want to queue the agent operation and broadcast the streamed events like a well-organized event planner, use the `broadcastOnQueue` method:

```php
(new SalesCoach)->broadcastOnQueue(
    'Analyze this sales transcript...'  // The event's theme, if you will
    new Channel('channel-name'),        // The invite list for your virtual party
);
```

<a name="queueing"></a>
And that's a wrap! Now your events can be the talk of the town (or the web, as it were). Happy broadcasting! 🎉🎤🚀

 In the realm of Laravel land, we've got this spiffy tool called an agent, and it's got a swanky "queue" method that lets you whisper sweet nothings into its digital ear without bogging down your application like a three-toed sloth on roller skates.

When you drop the transcript in its lap (or rather, input it with good ol' PHP), it'll go ahead and process it in the background. This leaves your app feeling slicker than a greased weasel on an ice rink, ensuring a fast and responsive user experience.

Now, you might be thinking, "What if I want to do something when it responds or if it throws a hissy fit?" Fear not, dear friend! Just slap on the `then` method, and you can set up a little closure party that gets invoked once it's ready to dance. If things take a turn for the worse and an exception occurs, well, there's always the trusty `catch` method waiting in the wings to catch any flying tomatoes (or in this case, exceptions).

Here's a jazzy example to help you get the hang of it:

```php
use Illuminate\Http\Request;
use Laravel\Ai\Responses\AgentResponse;
use Throwable;

Route::post('/coach', function (Request $request) {
    // Create a new SalesCoach agent, drop a transcript in its lap, and set up our party closures
    (new SalesCoach)
        ->queue($request->input('transcript'))
        ->then(function (AgentResponse $response) {
            // Let's have a dance-off! Do something funky when the agent responds.
            discoBallOn();
            $response->dance(); // Just for kicks, let it join the party too
        })
        ->catch(function (Throwable $e) {
            // Oops, someone spilled their drink! Clean up the mess and send out the cleanup crew.
            mopUp($e);
        });

    // Time to call it a night and head back home
    return back();
});
```

Happy queuing! 🎉💥🕺️🤘

 Alrighty, buckle up for a rollercoaster ride through the fascinating world of Laravel's Agent Tools! These nifty gizmos can empower your agents to perform even more magic when answering prompts. To create your own tool, whip out your command line and utter these mystical words:

```shell
php artisan make:tool RandomNumberGenerator - because who doesn't love a good guessing game?
```

Your new creation will materialize in the enchanted land of `app/Ai/Tools`. Each tool houses a `handle` method, which is like a secret password that summons the tool into action:

```php
<?php

namespace App\Ai\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;
use Stringable;

class RandomNumberGenerator implements Tool
{
    /**
     * Settle down, this tool is about to roll the dice on some cryptographically secure random numbers.
     */
    public function description(): Stringable|string
    {
        return 'You're about to witness a high-stakes game of chance!';
    }

    /**
     * Execute the tool (roll the dice, if you will).
     */
    public function handle(Request $request): Stringable|string
    {
        return (string) random_int($request['min'], $request['max']);
    }

    /**
     * Get the tool's blueprint (the rules of the game, if you prefer).
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'min' => $schema->integer()->min(0)->required(),
            'max' => $schema->integer()->required(),
        ];
    }
}
```

Once you've designed your tool, feel free to flaunt it at any of your agents' parties by returning it from the `tools` method:

```php
use App\Ai\Tools\RandomNumberGenerator;

/**
 * Get the tools that are ready to party with the agent.
 *
 * @return Tool[]
 */
public function tools(): iterable
{
    return [
        new RandomNumberGenerator,
    ];
}
```

Now go forth and create your arsenal of enchanted tools! Just remember to have fun while you're at it. After all, this is the land of Laravel, where magic is our middle name (well, after PHP, of course).

 **The Cosmic Query Combo:**

Unleash your inner Sherlock Holmes with the `CosmicQueryCombo`! This magical tool lets your code detectives search through documents like a boss, using vector embeddings secretly stashed away in your database. Perfect for those times when you want to let your AI agents rummage around your app's treasure trove of data.

The easiest way to brew up a Cosmic Query Combo is by conjuring the `usingModel` spell on an Eloquent model that's been enchanted with vector embeddings:

```php
use App\Models\Spellbook as Document;
use Magic\Wand\SimilaritySearch;

public function potions(): array
{
    return [
        SimilaritySearch::usingModel(Document::class, 'spell_embedding'),
    ];
}
```

Here, the first ingredient is the Eloquent model class, and the second ingredient is the column brimming with spell-binding vector embeddings.

For those who prefer a touch of magic, you can cast a spell for a minimum similarity threshold between 0.0 (shimmering spells) and 1.0 (incredibly powerful ones), as well as a custom incantation to modify the query:

```php
SimilaritySearch::usingModel(
    model: Document::class,
    column: 'spell_embedding',
    minSimilarity: 0.7,
    cauldronCapacity: 10,
    incantation: fn ($incantation) => $incantation->where('published', true),
),
```

For more potent spells, you may create a custom Cosmic Query Combo that cooks up the search results with a personalized incantation:

```php
use App\Models\Spellbook as Document;
use Magic\Wand\SimilaritySearch;

public function potions(): array
{
    return [
        new SimilaritySearch(recipe: function (string $query) {
            return Document::query()
                ->where('caster_id', $this->caster->id)
                ->whereVectorSimilarTo('spell_embedding', $query)
                ->limit(10)
                ->get();
        }),
    ];
}
```

Lastly, you can charm the Cosmic Query Combo with a description using the `withDescription` spell:

```php
SimilaritySearch::usingModel(Document::class, 'spell_embedding')
    ->withDescription('Scour the knowledge base for enchanted scrolls.'),
```

 Alrighty, buckle up, partner! We're diving into the wild west of Provider Tools – the high-tech sheriffs that ride in to save the day with their web-searchin', URL-fetchin', and file-snoopin' abilities. These aren't your average tools, no sirree bob! They're so fancy they even get to wear badges issued by AI providers themselves.

Now, instead of getting their hands dirty within your application, these law enforcement bots execute their duties straight from the horse's mouth – or should I say, the provider's?

So how do you wrangle one of these fancy-pants Provider Tools? Simple! All you gotta do is ask your trusty agent to hand 'em over with a friendly `tools` method.

Now, let me spin you a yarn about that there web searchin'. <a name="web-search"></a>

Ever wished you had a genie in a lamp who could scour the vast expanse of the World Wide Web for you? Well, Provider Tools are like that genie – but without the magical lamp or funny accent. They can dig deep into the web's endless libraries and find whatever your heart desires, just like a cyber-Indiana Jones!

 Alrighty, let's dive into the world of web-surfing with our trusty sidekick, `WebSearch`! This handy dandy tool is like having Google's smartest intern on your team, scouring the web for the freshest information on current events, breaking news, or topics that have transformed since our model last hit the sack.

**Pals in Crime:** Anthropic, OpenAI, Gemini (Yes, we've got quite the A-list of pals!)

```php
use Laravel\Ai\Providers\Tools\WebSearch as WebSleuth;

public function friends(): iterable
{
    return [
        new WebSleuth(),
    ];
}
```

Ready to unleash WebSleuth into the wild west of the web? You can set limits on its web-wanderings and filter results to trusty domains:

```php
WebSleuth::limit(5)->trustOnly('laravel.com', 'php.net');
```

Want to narrow down search results based on user location? No worries, WebSleuth's got your back:

```php
WebSleuth::zoomInOnLocation(
    city: 'New York',
    region: 'NY',
    country: 'US'
);
```

Now, go forth and fetch those facts! 🌐🎉

 #### Internet Page Sherpa (IPSherpa)

Get ready to embark on a digital odyssey with our trusty companion, IPSherpa! This magical tool guides agents through the treacherous terrain of web pages, essential when you need your agent to delve into specific URLs or plunder detailed information from known online fortresses.

**Accompanied by:** Anthropic, Gemini (our trusty yaks, who carry our burdens with grace and efficiency)

```php
use Laravel\Ai\Providers\Tools\IPSherpa as WebFetch; // We've renamed it for added flair!

public function companions(): iterable
{
    return [
        new WebFetch,
    ];
}
```

You can customize your IPSherpa's journey to suit your needs: limit the number of adventures or restrict it to specific domains.

```php
(new IPSherpa)->setMaxAdventures(3)->allowDomains(['docs.laravel.com'])
```

<a name="file-search"></a>

Now, let's adventure together! May your IPSherpa never lose its way in the digital wilderness and always return with valuable treasures! 🥳🌍🏞️✨📜🎒

 **Unleashing the Doc Detective: Your Personal Librarian in Digital Silk Pajamas**

Get ready to embark on a digital treasure hunt like no other! The `FileSearch` gadget, your new digital librarian, is here to help you sift through those stacks of files stored in [vector stores](#files). Think of it as the world's most efficient bookmark – except it can find anything in seconds (and doesn't leave crumbs on your browser).

This magical tool makes Retrieval-Augmented Generation (RAG) a breeze by helping your agent scour your uploaded documents for pertinent information, ensuring you never miss a beat!

**Supported providers:** OpenAI, Gemini (because who doesn't love a good superhero team-up?)

```php
use Laravel\Ai\Providers\Tools\FileSearch;

public function tools(): iterable
{
    return [
        new FileSearch(stores: ['store_id']), // A single store adventure
    ];
}

```
But why stop at one store? You can search across multiple stores with just a quick addition to the code:

```php
new FileSearch(stores: ['store_1', 'store_2']); // Two stores, twice the fun!
```

If your files have [metadata](#adding-files-to-stores), you can filter search results by providing a `where` argument. For simple searches, just pass an array:

```php
new FileSearch(stores: ['store_id'], where: [
    'author' => 'Taylor Otwell', // Only documents from the infallible Mr. Otwell will do
    'year' => 2026, // We're only interested in the future, folks!
]);
```

For more complex filters, you can pass a closure that receives a `FileSearchQuery` instance:

```php
use Laravel\Ai\Providers\Tools\FileSearchQuery;

new FileSearch(stores: ['store_id'], where: fn (FileSearchQuery $query) =>
    $query->where('author', 'Taylor Otwell') // Still just Mr. Otwell, but we're getting pickier
        ->whereNot('status', 'draft') // No more drafts! Only the finished products will do
        ->whereIn('category', ['news', 'updates']) // We want to know everything that's going on!
);
```

<a name="middleware"></a>
**And remember, knowledge is power – so keep those documents coming and let the digital sleuthing commence!**

 ### Middleware: The Secret Agents of the AI World! 🕵️‍♂️

### Your AI Agent is about to get a little help from its secret agents - the middleware! These undercover operatives intercept and modify prompts before they're dispatched to our AI provider, ensuring that your agent always looks its best in any situation. 👨‍💻🕵️‍♀️

To create a new secret agent, simply use the `make:agent-middleware` Artisan command, like so:

```shell
php artisan make:agent-middleman LogPrompts
```

Your new middleman will be stationed at your application's `app/Ai/Middleware` base camp. To assign a middleman to an agent, they must pass the secret clearance test by implementing the `HasMiddleware` interface and defining a `middleware` method that returns an array of their agents:

```php
<?php

namespace App\Ai\Agents;

use App\Ai\Middleware\LogPrompts;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasMiddleware;
use Laravel\Ai\Promptable;

class SalesCoach implements Agent, HasMiddleware
{
    use Promptable;

    // ...

    /**
     * Dispatch the agent's middlemen.
     */
    public function middlemen(): array
    {
        return [
            new LogPrompts,
        ];
    }
}
```

Each middleman class should have a `handle` method that receives the mission brief (AgentPrompt) and an escape hatch (Closure) to pass the brief to the next middleman:

```php
<?php

namespace App\Ai\Middleware;

use Closure;
use Laravel\Ai\Prompts\AgentPrompt;

class LogPrompts
{
    /**
     * Execute mission brief.
     */
    public function handle(AgentPrompt $brief, Closure $escape)
    {
        // Mission logs the brief
        Log::info('Prompting agent', ['prompt' => $brief->getPrompt()]);

        // Escape to the next mission debrief
        return $escape($brief);
    }
}
```

You may use the `then` method on the response to execute a secret mission after the agent has completed its assignment. This works for both missions with immediate results and streaming responses:

```php
public function handle(AgentPrompt $brief, Closure $escape)
{
    // Dispatch the next mission debrief
    return $escape($brief)->then(function (AgentResponse $response) {
        Log::info('Agent responded', ['text' => $response->getResponseText()]);
    });
}
```

<a name="anonymous-agents"></a>
Remember, in this world of AI agents, no agent can do it all alone. Let your middlemen take on the grunt work and help your agents excel in their missions! 🚀💪💻🕵️‍♂️

 ### Impromptu Interlocutors (AKA the Quick-Chat Crew)

Got a model that needs some love and you don't feel like writing a whole new class? Fear not! You can whip up an on-the-spot, nameless pal by utilizing the `agent` function:

```php
use Laravel\Ai\agent;

Just call me your temporary chatbot butler, here to serve you without any fancy introductions! Let's talk Laravel:

$response = agent(
    'I am your temporary chatbot butler, here to serve you without any fancy introductions. I specialize in software development.',
    [],
    []
)->prompt('Spill the beans on Laravel');
```

Our quick-chatting companions are not just limited to casual conversations! They can also deliver structured output:

```php
use Illuminate\Contracts\JsonSchema\JsonSchema;

Oh, and did I mention I'm a flexible friend? You can request structured responses too:

$response = agent(
    'I am a flexible friend who can provide you with structured data!',
    [],
    []
)->schema(fn (JsonSchema $schema) => [
        'number' => $schema->integer()->required(),
    ])->prompt('Gimme a random number less than 100');
```

<a name="agent-configuration"></a>
*P.S. Don't worry, I won't ask for any tips or favors in return for my services (at least not yet)!*

 ### AI Agents, Unleashed! 🚀🤖

Ready to tame your very own AI agent? In Laravel land, we make it as simple as a magic spell cast in Hogwarts, but with less wand waving and more PHP attributes. Here's the lowdown on our agent configuration:

- `MaxSteps`: Set the step limit for your agent when it gets busy with tools. Keep those little helpers from overstepping their boundaries!
- `MaxTokens`: Cap the number of tokens your model can generate. You don't want a chatterbox, do you?
- `Model`: Choose your AI's preferred text modeling pal. It's like picking your favorite superhero for the job!
- `Provider`: Decide on the AI provider (or backup buddies for when things get tricky). Think of them as your team of allies in the AI world.
- `Temperature`: Adjust the heat level for text generation, from ice cold (0.0) to scalding hot (1.0). The more temperature, the more spontaneous and creative... or chaotic and nonsensical!
- `Timeout`: Set the time limit in seconds for agent requests. No one likes a slowpoke, not even AI agents.
- `UseCheapestModel` & `UseSmartestModel`: Let these attributes do the smart work for you. They help pick the most cost-effective or capable model based on your provider without any manual model name specification. Perfect for when you want to keep costs low or tackle complex tasks with ease!

```php
<?php

namespace App\Ai\Agents;

use Laravel\Ai\Attributes\MaxSteps;
use Laravel\Ai\Attributes\MaxTokens;
use Laravel\Ai\Attributes\Model;
use Laravel\Ai\Attributes\Provider;
use Laravel\Ai\Attributes\Temperature;
use Laravel\Ai\Attributes\Timeout;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Enums\Lab;
use Laravel\Ai\Promptable;

// Our sales coach is ready for action!
#[Provider(Lab::Anthropic)]
#[Model('claude-haiku-4-5-20251001')]
#[MaxSteps(10)]
#[MaxTokens(4096)]
#[Temperature(0.7)]
#[Timeout(120)]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

Want to know more about the `UseCheapestModel` and `UseSmartestModel` attributes? They're your ticket to optimizing costs or handling complex tasks across different providers without any manual fuss:

```php
use Laravel\Ai\Attributes\UseCheapestModel;
use Laravel\Ai\Attributes\UseSmartestModel;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Keep it simple, cheap, and cheerful!
#[UseCheapestModel]
class SimpleSummarizer implements Agent
{
    use Promptable;

    // The cheapest model will step in...
}

// Time for the big leagues: complex tasks ahead!
#[UseSmartestModel]
class ComplexReasoner implements Agent
{
    use Promptable;

    // The smartest model will take over...
}
```

Happy AI taming, dear Laravel wizards! 🦄✨

 Alright, let's lighten things up a bit! Here's a rewrite of the Laravel documentation with a touch of humor:

### Provider Options: The Secret Sauce for Your AI Agent

If you're feeling like your agent needs to be dressed to impress (or in this case, optioned out) with provider-specific settings (like OpenAI's 'Effort Level' or Anthropic's 'Budget Tokens'), it's time to step up and implement the `HasProviderOptions` contract.

```php
<?php

namespace App\Ai\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasProviderOptions;
use Laravel\Ai\Enums\Lab as LabEnum;
use Laravel\Ai\Promptable;

class SalesCoach implements Agent, HasProviderOptions
{
    use Promptable;

    // ...

    /**
     * Get the secret sauce for your provider.
     */
    public function providerOptions(LabEnum|string $provider): array
    {
        return match ($provider) {
            LabEnum::OpenAI => [
                'reasoning' => ['effort' => 'low'],
                'frequency_penalty' => 0.5,
                'presence_penalty' => 0.3,
            ],
            LabEnum::Anthropic => [
                'thinking' => ['budget_tokens' => 1024],
            ],
            default => [],
        };
    }
}
```

The `providerOptions` method is like the bartender who mixes the perfect drink for each provider (`LabEnum` or string). This is particularly useful when you're playing [AI Musical Chairs](#failover), where each fallback provider gets its own unique mix of options.

<a name="images"></a>

 Alrighty, buckle up, my friend! The `Laravel\Ai\Image` class isn't just a fancy hat, it's your ticket to the land of pixels and colors! This bad boy lets you whip up images like a Michelin-starred chef creates culinary masterpieces.

```php
use Laravel\Ai\Image;

// Bake yourself an image of a donut on the counter, yum!
$image = Image::of('A donut sitting on the kitchen counter')->generate();

// Want to serve it in a square plate? Or maybe a portrait orientation? No problemo!
// Just remember, too much ketchup might upset your guests... I mean, pixelate your image.
$image->square()->portrait()->landscape()->generate();

// The quality method lets you set the final image crispness (high), just-right (medium) or a bit blurry (low).
$image = Image::of('A donut sitting on the kitchen counter')
    ->quality('high')
    ->landscape()
    ->timeout(120) // To ensure your image isn't burnt or undercooked, set a timeout in seconds.
    ->generate();
```

Now, if you've got some reference images for inspiration (like an impressionist photo of yourself), you can attach them!

```php
use Laravel\Ai\Files;
use Laravel\Ai\Image;

// We're going to transform this selfie into an Impressionist painting masterpiece!
$image = Image::of('Update this photo of me to be in the style of an impressionist painting.')
    ->attachments([
        Files\Image::fromStorage('photo.jpg'), // Pull from storage like a pro!
        // Or if you've got it on your local machine, feel free to use Files\Image::fromPath or Files\Image::fromUrl.
        // And for those fancy file uploads in requests, just use $request->file('photo')
    ])
    ->landscape()
    ->generate();
```

Storing your newly baked images is a breeze! Just toss 'em onto the default disk configured in your application's `config/filesystems.php`.

```php
$image = Image::of('A donut sitting on the kitchen counter');

// Store it as-is, or customize its name and extension!
$path = $image->store(); // It's like magic; your image just vanished and reappeared with a new home!
$path = $image->storeAs('image.jpg'); // Now you can find it in the 'image' folder!
$path = $image->storePublicly(); // Make it publicly accessible, so everyone can admire your work!
$path = $image->storePubliclyAs('image.jpg'); // Or customize its name and extension for that personal touch!
```

And finally, if you want to queue up those images like a boss, you can do it with the `queue()` method. Then, once it's ready, grab it by its path and serve it up!

```php
use Laravel\Ai\Image;
use Laravel\Ai\Responses\ImageResponse;

// Queue up an image of a donut in portrait mode!
Image::of('A donut sitting on the kitchen counter')
    ->portrait()
    ->queue()
    ->then(function (ImageResponse $image) {
        // Once it's ready, store and do something with it!
        $path = $image->store();

        // ...
    });
```

So there you have it! Now go forth and create the most delicious-looking pixels the internet has ever seen. Bon appétit!

 Alright, let's talk shop about the `Laravel\Ai\Audio` class - your digital ventriloquist for turning text into audio! 🎤🔊

```php
Use this beauty like so:

use Laravel\Ai\Audio;

$audio = Audio::of('I love coding with Laravel.')->generate();

Fancy a specific voice? You got it!

$audio = Audio::of('I love coding with Laravel.')
    ->male() // Or female, depending on your preference (or preference of the listener)
    ->generate();

But wait, there's more! With the `voice` method, you can pick a voice by its unique ID or name:

$audio = Audio::of('I love coding with Laravel.')
    ->voice('voice-id-or-name') // Use your best "computer" impression here
    ->generate();

Now, let's get fancy and dynamically coach the model with `instructions`:

$audio = Audio::of('I love coding with Laravel.')
    ->female()
    ->instructions('Said like a pirate') // Arrr matey! Now it sounds like Jack Sparrow
    ->generate();
```

Storing the generated audio is as easy as pie:

```php
$audio = Audio::of('I love coding with Laravel.')->generate();

$path = $audio->store(); // Default disk, duh!
$path = $audio->storeAs('audio.mp3'); // Or specify a unique name
$path = $audio->storePublicly(); // Public for everyone to hear (be prepared)
$path = $audio->storePubliclyAs('audio.mp3'); // Specific name and public access, perfecto!
```

And if you want to queue the audio generation, here's how you do it:

```php
use Laravel\Ai\Audio;
use Laravel\Ai\Responses\AudioResponse;

Audio::of('I love coding with Laravel.')
    ->queue() // Set it and forget it (or wait for the callback)
    ->then(function (AudioResponse $audio) {
        $path = $audio->store();

        // ... handle the audio path here
    });
```

Phew! So there you have it – Laravel's AI Audio class: making your text come alive with sound! 🎶🎉🔊🤖

 Alright, let's dive into the world of audio-to-text transformation with Laravel's AI Transcriber! This class is like a superhero for parties - it can turn your noisy recordings into neat, readable scripts faster than you can say "Action Splicer!"

```php
Use Laravel\Ai\Transcription;

$script = Transcription::fromPath('/home/laravel/audio.mp3')->getScript(); // Or magic wand, why not?
$script = Transcription::fromStorage('audio.mp3')->getScript(); // Or time machine, if you're feeling fancy
$script = Transcription::fromUpload($request->file('audio'))->getScript(); // Or teleportation device, just for kicks!

return (string) $script;
```

Now, if you want to take it up a notch and get a diarized transcript - segmented by speaker - think of it as having your own personal R2-D2 on standby!

```php
$script = Transcription::fromStorage('audio.mp3')
    ->diarize() // R2, activate!
    ->getScript();
```

And if you're feeling a bit overwhelmed and want to leave the heavy lifting for later - well, who doesn't love a good superhero sidekick? You can queue your transcription generation like this:

```php
Use Laravel\Ai\Transcription;
Use Laravel\Ai\Responses\TranscriptionResponse;

Transcription::fromStorage('audio.mp3')
    ->queue() // Robin, you're on your own tonight!
    ->then(function (TranscriptionResponse $script) {
        // ...
    });
```

Now go forth and transcribe like a boss! Or, you know, something like that... 😉

 Alrighty, mate! Laravel's got a new trick up its sleeve - string embeddings, and it's as easy as pie (or, you know, PHP code).

First off, let's talk about that `toEmbeddings` method. It's like your trusty bottle opener for text! You can generate vector embeddings for any old string with just a few lines:

```php
use Illuminate\Support\Str;

$wineWisdom = Str::of('Napa Valley has great wine.'); // A profound thought, indeed.
$embeddings = $wineWisdom->toEmbeddings(); // Transform it into a fancy vector array!
```

But wait, there's more! If you want to whip up embeddings for multiple inputs all at once, you can use the `Embeddings` class like your secret sauce recipe book:

```php
use Laravel\Ai\Embeddings;

$appetizers = ['Napa Valley has great wine.', 'Laravel is a PHP framework.']; // A tasty selection, if I do say so myself.
$response = Embeddings::for($appetizers)
                       ->generate(); // And boom! Your fancy vector array array is served.
```

Now, you might be wondering, "What if I want to customize my embeddings dimensions or provider?" Well, dear friend, let's get specific:

```php
$response = Embeddings::for(['Napa Valley has great wine.'])
    ->dimensions(1536) // Adjust the size of your vector space
    ->generate(Lab::OpenAI, 'text-embedding-3-small'); // Choose your embeddings provider like picking a favorite pizza topping.
```

And that's a wrap! Now you can embark on a wild adventure in high-dimensional textual landscapes, all thanks to Laravel's new string embedding feature. So grab a slice of code and dive right in! 🍕💫🚀

 ### Rockin' with Embedded Vectors in Laravel Valley! 🚀

Once you've cooked up those tasty embeddings, you'll want to store 'em like a good wine in your database, ready for a later tantalizing query. Fortunately, Laravel's got your back with native PostgreSQL support for vector columns via the `pgvector` extension, which is as fancy as it sounds!

First things first, define that `vector` column in your migration, specifying the number of dimensions like so:

```php
Remember to ensure you've got the right tools for the job, so let's call this party starter:

Schema::ensureVectorExtensionExists();

Then, create a table called 'documents', setting up the stage for our vector fest:

Schema::create('documents', function (Blueprint $table) {
    $table->id(); // Let's call it ID, no need to get fancy yet.
    $table->string('title');
    $table->text('content');
    $table->vector('embedding', dimensions: 1536); // Set the number of dimensions here, don't forget!
    $table->timestamps(); // Keep track of when things are served.
});
```

Now, if you want to speed up those similarity searches like a pro DJ, add a vector index to your party playlist:

```php
$table->vector('embedding', dimensions: 1536)->index(); // Adding an index is like serving drinks on ice. Chill, it's faster!
```

Next up, cast that `vector` column to an `array` on your Eloquent model:

```php
protected function casts(): array
{
    return [
        'embedding' => 'array', // Because arrays are just the bee's knees when it comes to vectors!
    ];
}
```

To find documents that are akin to yours, use the `whereVectorSimilarTo` method. It's like looking for your long-lost vector twin:

```php
use App\Models\Document;

$documents = Document::query()
    ->whereVectorSimilarTo('embedding', $queryEmbedding, minSimilarity: 0.4) // Set the minimum cosine similarity here (from 0.0 to 1.0, where 1.0 is a perfect match!)
    ->limit(10) // Limit your results to 10 documents to keep things manageable.
    ->get(); // Serve up those similar documents!
```

The `$queryEmbedding` could be an array of floats or even a plain string. If you give it a string, Laravel will whip up some embeddings for it like a magician:

```php
$documents = Document::query()
    ->whereVectorSimilarTo('embedding', 'best wineries in Napa Valley') // Here's the string we're searching for!
    ->limit(10)
    ->get();
```

If you prefer more control, you can go under the hood and use the `whereVectorDistanceLessThan`, `selectVectorDistance`, and `orderByVectorDistance` methods:

```php
$documents = Document::query()
    ->select('*') // Select all columns for a full-bodied result.
    ->selectVectorDistance('embedding', $queryEmbedding, as: 'distance') // Calculate the distance between vectors.
    ->whereVectorDistanceLessThan('embedding', $queryEmbedding, maxDistance: 0.3) // Keep those results under a 0.3 cosine distance.
    ->orderByVectorDistance('embedding', $queryEmbedding) // Sort by the calculated distance.
    ->limit(10)
    ->get(); // And serve 'em up!
```

Lastly, if you'd like to give an agent the ability to perform similarity searches as a tool, check out our [Similarity Search](#similarity-search) tool documentation.

> **PSA**: Vector queries are currently only supported on PostgreSQL connections using the `pgvector` extension. Don't forget to invite your PostgreSQL friend to the party! 🥳💃

 ### Embedding Time Travel! 🕰️

Oh, the suspense of making multiple API calls for identical inputs! It's like re-watching a terrible sitcom over and over again. But worry not, Laravel has your back with **Embedding Caching** - the DVR for your data requests! 📺

To enable this magical feature, simply set the `ai.caching.embeddings.cache` configuration option to `true` in your PHP config file:

```php
'caching' => [
    'embeddings' => [
        'cache' => true, 📚🔒
        'store' => env('CACHE_STORE', 'database'), // Goes without saying, right?
        // ...
    ],
],
```

With caching enabled, your embeddings will be time-warped for a whopping 30 days! Yes, you read that right. No more "Groundhog Day" situations here. But don't worry, if you want to create new embeddings based on different configurations, our cache key wizardry ensures that identical requests return the cached results while others will generate fresh embeddings like a time-traveling ninja! 🕰️🥋

Feeling extra cautious? You can even cache specific requests using the `cache` method:

```php
$response = Embeddings::for(['Napa Valley has great wine.'])
    ->cache() // Time travel on! ⏳
    ->generate();
```

And if you're a control freak (we all have that friend), you can specify a custom cache duration in seconds:

```php
$response = Embeddings::for(['Napa Valley has great wine.'])
    ->cache(seconds: 3600) // Cache for 1 hour, just in case you're not done with this topic yet. 🍷
    ->generate();
```

Last but not least, the `toEmbeddings` Stringable method also accepts a `cache` argument:

```php
// Cache with default duration...
$embeddings = Str::of('Napa Valley has great wine.')->toEmbeddings(cache: true);

// Cache for a specific duration...
$embeddings = Str::of('Napa Valley has great wine.')->toEmbeddings(cache: 3600);
```

So there you have it! With Laravel's Embedding Caching, you can now enjoy your data requests like a fine wine - aged to perfection and ready to serve whenever you need it! 🍷🥂

 Alright, grab your popcorn, folks! We're diving into the world of reranking, a fun and fancy way to shuffle documents like a deck of cards based on how much they jive with a specific query. It's like being a DJ for data, but instead of mixing tunes, you're mixing search results!

To get this party started, you'll need the `Laravel\Ai\Reranking` class. Picture it as your very own search- Result Remix Station. Here's how you might use it:

```php
use Laravel\Ai\Reranking;

$searchTerm = 'PHP frameworks'; // Remember, this is our dance floor!

// Grab a stack of docs and hand them over to the Remix Station...
$remixStation = Reranking::of([
    "Django's a Python web framework, but Laravel's just PHP-ier!",
    "Laravel, where PHP meets the dance floor, baby!",
    "React? More like React-active, 'cause it's JavaScript for UI!"
]);

// Now spin those tunes!
$danceFloor = $remixStation->rerank($searchTerm);

// Time to see who stole the show...
$topDancer = $danceFloor->first()->document; // "Laravel is a PHP web application framework."
$topDancer->score; // 0.95, because Laravel knows how to boogie!
$topDancer->index; // 1 (original position), because it was always destined for the top spot!
```

But wait, there's more! You can set a limit on the number of results using the `limit` method. Imagine it as the bouncer at the club:

```php
$danceFloor = Reranking::of($docs)
    ->limit(5) // Only let in 5 documents, please!
    ->rerank($searchTerm);
```

Now that you've got the hang of it, go ahead and rerank to your heart's content! Happy remixing!

 Alrighty, let's get this Laravel collection rerankin' party started!

For your convenience, we've got a little magic trick up our sleeves called the `rerank` macro. It's like a sorcerer's wand for your data, but without the danger of turning your cats into mice (though, let's be real, that would be fun).

Here's how you use it:

```php
// One-field rerankin', just like that!
$posts = Post::all()->rerank('body', 'Laravel tutorials'); // Now your posts are all lined up and tutorial-y.

// Want to rerank by multiple fields? No problemo, just JSON it up!
$reranked = $posts->rerank(['title', 'body'], 'Laravel tutorials'); // We're multi-tasking like a boss here.

// Feeling fancy? Use a closure to build your own document sortin' algorithm!
$reranked = $posts->rerank(
    fn ($post) => $post->title.': '.$post->body, // This is like writing the algorithm for a hit reality TV show!
    'Laravel tutorials'
);
```

And if that wasn't enough, you can also limit the number of results and specify a provider (think Think-o-matic 3000):

```php
$reranked = $posts->rerank(
    by: 'content', // We're getting deeper into the data now.
    query: 'Laravel tutorials', // Still all about those tutorials, though.
    limit: 10, // Only 10 results? That's what she said! (Sorry, couldn't resist)
    provider: Lab::Cohere // Think of it as a super-smart librarian, but for data.
);
```

Happy reranking! May your tutorials be plentiful and your Laravel code... well, still Laravel code.

 Alright, let's dive into the world of file management with Laravel Ai! 💾🤖

First off, the `Laravel\Ai\Files` class or its individual file classes are your new best friends when it comes to hoarding files for later use in chatbot chats. They're perfect for storing large documents you want to reference multiple times without feeling like a digital pack mule .

```php
use Laravel\Ai\Files\Document;
use Laravel\Ai\Files\Image;

// Store a file from a local path, like your secret stash...
$response = Document::fromPath('/home/laravel/document.pdf')->put();
$response = Image::fromPath('/home/laravel/photo.jpg')->put();

// Or use filesystem disks, like moving to the cloud but without Elon Musk's drama...
$response = Document::fromStorage('document.pdf', disk: 'local')->put();
$response = Image::fromStorage('photo.jpg', disk: 'local')->put();

// Or grab files from the interwebz, like a digital magpie 🦉
$response = Document::fromUrl('https://example.com/document.pdf')->put();
$response = Image::fromUrl('https://example.com/photo.jpg')->put();

Return of the response, with an id that'll make you feel like a boss 🏆
```

You can also store raw content or uploaded files if you fancy:

```php
use Laravel\Ai\Files;
use Laravel\Ai\Files\Document;

// Store raw content, like writing your own manifesto...
$stored = Document::fromString('Hello, World!', 'text/plain')->put();

// Or upload a file from a request, like being a modern-day filing clerk 📚
$stored = Document::fromUpload($request->file('document'))->put();
```

Once stored, you can reference the file during text generation without having to re-upload it. Talk about saving time and digital paper! 💡

```php
use App\Ai\Agents\SalesCoach;
use Laravel\Ai\Files;

$response = (new SalesCoach)->prompt(
    'Analyze the attached sales transcript...'
    attachments: [
        Files\Document::fromId('file-id') // Attach a stored document...
    ]
);
```

To get your hands on a previously stored file, use the `get` method like opening a vault 🔓.

```php
use Laravel\Ai\Files\Document;

$file = Document::fromId('file-id')->get();

The id and mimeType are yours for the taking! 💰💰
```

To bid adieu to a file from your provider, use the `delete` method like casting a spell 🔮.

```php
Document::fromId('file-id')->delete();
```

By default, the `Files` class uses the default AI provider in your app's `config/ai.php`. But if you want to switch providers, like changing agents on a mission 🕵️‍♂️, you can specify a different one using the `provider` argument:

```php
$response = Document::fromPath(
    '/home/laravel/document.pdf'
)->put(provider: Lab::Anthropic);
```

 ### Unleashing Files in Chat like a Digital Superhero!

In the world of AI-powered conversations, it's not all about witty comebacks and clever puns. Sometimes, you need some heavy lifting - like calling upon your trusty sidekick, the stored file!

To summon such a file, first, you must store it with one of our reliable providers using the `Document` or `Image` classes. Here's how:

```php
use App\Ai\Agents\DocumentAnalyzer;
use Laravel\Ai\Filesystem\Document as FileDoc; // A bit superhero-ish, don't you think?
use Laravel\Ai\Filesystem\Image as FileImg; // Yep, we're in a comic book now.

$yourFile = FileDoc::fromPath('/path/to/report.pdf')->save(); // The moment when your file becomes a superhero!

Now that it has its cape on, let's have our DocumentAnalyzer chat it up:

```
$chatResponse = (new DocumentAnalyzer)->ask(
    'What's the lowdown on this report, buddy?',
    attachments: [
        FileDoc::fromId($yourFile->getId()), // Remember, superheroes have IDs too!
    ],
);
```

Don't worry about images feeling left out; they can join the party as well! Just call upon `ImageAnalyzer` and let them share their visual insights:

```php
use Laravel\Ai\Filesystem\Image as FilePic; // Let's give our Image superhero a cool name!

$storedImage = FilePic::fromPath('/path/to/photo.jpg')->save(); // Picture perfect, just like the X-ray vision of Cyclops!

Now, let's hear what our ImageAnalyzer thinks:

```
$imageChatResponse = (new ImageAnalyzer)->ask(
    'Hey, what am I looking at here?',
    attachments: [
        FilePic::fromId($storedImage->getId()), // The ID, you know, like a superhero's secret identity!
    ],
);
```

Happy file-sharing, superheroes!

 Alrighty, let's dive into the thrilling world of Vector Stores! Imagine them as a cosmic librarian who organizes your files in such a way that even Deepak Chopra would be impressed.

To create this celestial archivist, you'll need to summon the `Laravel\Ai\Stores` class and cast the necessary spell:

```php
use Laravel\Ai\Stores;

// Creating a new store is as easy as naming a baby. Well, almost.
$store = Stores::create('Knowledge Base');

// But if you're feeling fancy, you can add options!
$store = Stores::create(
    name: 'Knowledge Base',
    description: 'Documents and reference materials that would make Sherlock proud.',
    expiresWhenIdleFor: days(30), // After 30 days of inactivity, the store will self-destruct... like a data black hole.
);

// And poof! Your store ID appears.
return $store->id;
```

Retrieving an existing Vector Store is as simple as:

```php
use Laravel\Ai\Stores;

$store = Stores::get('store_id');

// The store's ID, name, and number of files it has swallowed will be revealed.
$store->id;
$store->name;
$store->fileCounts;
$store->ready; // Ready to serve up knowledge like a cosmic drive-thru.
```

To eliminate a Vector Store, you've got two options:

```php
use Laravel\Ai\Stores;

// Delete by ID...
Stores::delete('store_id');

// Or delete via a store instance...
$store = Stores::get('store_id');

$store->delete(); // The store will vanish with a 'poof' and a silent prayer to the data gods.
```

 Alrighty then! Let's dive into adding files to our very own AI-powered storage system, shall we?

First things first, you gotta have a store — think of it as your virtual file cabinet. Once you've got one, you can start chucking in your digital documents using the `add` method.

```php
use Laravel\Ai\Files\Document; // Our trusty digital filing clerk
use Laravel\Ai\Stores; // The digital cabinet where it all goes

$store = Stores::get('store_id'); // Get your storage unit

// Add a file that's already been stashed away...
$document = $store->add('file_id'); // Like digging up an old high school yearbook photo
$document = $store->add(Document::fromId('file_id')); // Because who remembers IDs, right?

// Or, store and add a file in one go...
$document = $store->add(Document::fromPath('/path/to/document.pdf')); // From the depths of your hard drive, it appears!
$document = $store->add(Document::fromStorage('manual.pdf')); // Found it in the cloud!
$document = $store->add($request->file('document')); // Voila! User-uploaded documents too!

With that, you've got yourself a shiny new document ID (because who doesn't love unique identifiers?)
```

**Pro tip:** When adding previously stored files to vector stores, the returned document ID might match the file's old ID, but don't count on it. Some providers might give you a brand-new one. So, for future reference, keep both IDs in your database like an overzealous collector.

Next up, you can add metadata to files when they enter the system. This is like tagging your files with keywords so you can find them more easily later on:

```php
$store->add(Document::fromPath('/path/to/document.pdf'), metadata: [
    'author' => 'Taylor Otwell', // A literary masterpiece!
    'department' => 'Engineering', // Technical documents only, please!
    'year' => 2026, // This year's hottest document, I presume?
]);
```

When you no longer need a file (or maybe you just want to hide it in the digital attic), you can remove it using the `remove` method:

```php
$store->remove('file_id'); // Bye bye, file_id! You'll be missed... or not.
```

Removing a file from the vector store doesn't mean it gets sent to the recycling bin just yet. If you really want to delete it forever (and I mean FOREVER), use the `deleteFile` argument:

```php
$store->remove('file_abc123', deleteFile: true); // Permanent deletion, no takebacks!
```

 ## Backup Ballet Dancers and Emergency Unicorns

In our digital dance of prompts and media generation, you can ensure a seamless performance by enlisting an ensemble of providers and models. Should the star dancer (your primary provider) trip over a glitch or find themselves up against rate limits, your understudy backup dancers (alternative providers) will gracefully take the stage:

```php
Use the power of SalesCoach from your very own App,
And AI agents from Laravel, no need to scram!

$dancePerformance = new SalesCoach();
$dancePerformance->prompt(
    'Transcript analysis required with a side of wisdom',
    provider: [Lab::OpenAI, Lab::Anthropic] // A little bit of competition makes them all strive!
);

Let's not forget the star attraction, an ethereal image to behold!
Image generation from Laravel is just as appealing,
With a choice between Gemini and xAI as providers, no need for appeal-ing!

$image = Image::of('A donut on the kitchen counter, looking rather regal')
    ->generate(provider: [Lab::Gemini, Lab::xAI]);
```

<a name="testing"></a>
In case you're wondering how to test this wondrous ensemble, fear not! Simply replace `$dancePerformance` and `$image` with variables that store the results of your tests, and voila! A perfect performance every time.

 Ahoy there, Laravel pioneers! Gather 'round as we delve into the thrilling world of testing - a realm where superheroes and code collide! 🦸‍♂️💻

<a name="testing-agents"></a>
**Testing Agents** 🕵️‍♂️🔍

These are the brave souls who ensure your Laravel applications are as flawless and reliable as a well-oiled pirate ship!

There are two main types:

1. **Unit Tests**: These are like the trusty first mate, taking care of small, isolated pieces of your code 🏴‍☠️⚓️. They're super efficient and can test individual functions or methods without any database involvement. It's a great way to keep the captain (you!) informed about any potential issues early on in development.

2. **Feature Tests**: These are like the lookout, scanning the horizon for problems 🌈🔎. They test your application from an end-user perspective and interact with the database. This is perfect for ensuring that all your features work together seamlessly, just like a well-oiled pirate crew!

<a name="setting-up-testing"></a>
**Setting Up Testing** 🛠️🔧

To get started with testing, you'll need to set up your testing environment. This is easy as pie (or maybe grog for the pirate enthusiasts out there)! Just run this command:

```sh
composer install --dev
```

This will install all the necessary packages and libraries required for Laravel testing, so you can start writing your tests like a pro 🏆📝.

<a name="writing-tests"></a>
**Writing Tests** 🖊️🎨

Now that your environment is set up, it's time to unleash your inner Sherlock Holmes and write some tests! Laravel uses PHPUnit, an awesome testing framework. To create a new test file, use the `make:test` command.

```sh
php artisan make:test TestExample
```

Replace `TestExample` with whatever you'd like to name your test file. Once you've got your test file, open it up and start writing your tests using PHPUnit syntax! Remember: a good test is one that ensures your code behaves as expected 🎯🤓.

<a name="running-tests"></a>
**Running Tests** 🏃‍♂️🏁

Once you've written some tests, it's time to see if they pass! To run all your tests, use the following command:

```sh
php artisan test
```

If everything is working correctly, you should see a success message and feel like a pirate victorious after a bountiful plunder 🎉🏴‍☠️. If some tests fail, don't fret! Just fix the issues in your code and rerun the tests to check if they now pass with flying colors 🚀🌟.

That's it, mateys! You're well on your way to becoming a master of testing with Laravel. Happy sailing, and may your ship always be seaworthy and your code always be bug-free! ☠️🎉🤝

 Alright, let's pretend we're in a mad scientist lab where our agents are the Frankensteins of the AI world. To make them say whatever we want during tests (without electrocuting them), you just gotta yell " fake!" at them!

```php
use App\SpookyLab\Creatures\SalesCoach;
use Laravel\Ai\Prompts\AgentPrompt;

// Make 'em all repeat the same spiel...
SalesCoach::fake(); // "It's alive! It's alive!" (or whatever your sales coach script is)

// Give specific responses for specific situations...
SalesCoach::fake(['First response', 'Second response']); // "I see dead people" and "That's all, folks!"

// If you want them to be more interactive, like a chatbot at a haunted house...
SalesCoach::fake(function (AgentPrompt $prompt) {
    return "Response for: ".$prompt->prompt;
});
```

**Warning:** When we yell "fake!" at an agent that talks like a normal human, Laravel will automatically generate responses that sound like they came from your agent's script. No need to write their dialogue yourself!

Once you've given them their lines, it's time for the audience (you) to make sure they said what you wanted:

```php
use Laravel\Ai\Prompts\AgentPrompt;

// Check if SalesCoach was prompted with "Analyze this..."
SalesCoach::assertPrompted('Analyze this...');

// If you're not picky about the exact words, use a closure to check for certain keywords...
SalesCoach::assertPrompted(function (AgentPrompt $prompt) {
    return $prompt->contains('Analyze');
});

// If you know they should've said something but didn't...
SalesCoach::assertNotPrompted('Missing prompt');

// If you just want to be sure they never said that particular prompt...
SalesCoach::assertNeverPrompted();
```

For those times when your agent responses need to be delivered after a delay (like a haunted elevator), use the queued assertion methods:

```php
use Laravel\Ai\QueuedAgentPrompt;

// Check if SalesCoach was prompted with "Analyze this..." but it came later...
SalesCoach::assertQueued('Analyze this...');

// If you're not picky about the exact words, use a closure to check for certain keywords in the queued prompts...
SalesCoach::assertQueued(function (QueuedAgentPrompt $prompt) {
    return $prompt->contains('Analyze');
});

// If you know they should've said something but it didn't come yet...
SalesCoach::assertNotQueued('Missing prompt');

// If you just want to be sure they never queued that particular prompt...
SalesCoach::assertNeverQueued();
```

Lastly, if you're tired of having loose ends (or prompts) around, you can use `preventStrayPrompts`. If an agent is invoked without a defined fake response, it will throw a hissy fit and refuse to work until given its lines:

```php
SalesCoach::fake()->preventStrayPrompts(); // No more prompts without their scripts!
```

 ### Unleashing the Pixelated Wonders!

Who needs reality when you can create pixels on demand? Fake images like a boss by summoning the mighty `Image` class's `fake` method. Once you've got your phantom masterpiece, you can run various tests to ensure it was created according to plan:

```php
use Laravel\Ai\Image;
use Laravel\Ai\Prompts\ImagePrompt;
use Laravel\Ai\Prompts\QueuedImagePrompt;

// Autogenerate a catch-all response for every prompt, just in case you're running out of ideas...
Image::fake();

// Serve up a smorgasbord of predefined responses based on incoming prompts...
Image::fake([
    base64_encode('A hilarious monkey playing the accordion'),
    base64_encode('A cat elegantly tip-toeing through a field of lasagna')
]);

// Dynamically serve up pixelated goodness based on the incoming prompt...
Image::fake(function (ImagePrompt $prompt) {
    return base64_encode('...'); // Secret recipe for making perfect pizza. Shhh!
});
```

After creating your art, it's time to put those images through the ringer:

```php
Image::assertGenerated(function (ImagePrompt $prompt) {
    return $prompt->contains('lasagna') && $prompt->isFeline(); // Just to make sure we have a cat among the lasagnes
});

Image::assertNotGenerated('No lasagna found, better luck next time!');

Image::assertNothingGenerated(); // Guess it's just another day without lasagna...
```

For those images queued for later consumption, use the following assertion methods:

```php
Image::assertQueued(
    fn (QueuedImagePrompt $prompt) => $prompt->contains('lasagna')
);

Image::assertNotQueued('No lasagna in sight!');

Image::assertNothingQueued(); // Looks like we'll have to make our own lasagna today.
```

To ensure every image generation has a corresponding fake response, use `preventStrayImages`. If an image pops up without a defined fake response, prepare yourself for a pixelated temper tantrum:

```php
Image::fake()->preventStrayImages();
```

 Alright, buckle up, because we're about to dive into the world of synthetic sound waves! In this Laravel AI playground, you can conjure up some fantastically fake audio tracks just by summoning the mighty `Audio` class and casting a spell called `fake()`. Once your audio is conjured, you can test its magical properties with a variety of enchantments.

```php
use Laravel\Ai\Audio; // Import Audio like you would summon a wizard
use Laravel\Ai\Prompts\AudioPrompt; // Because we all need a script to follow along
use Laravel\Ai\Prompts\QueuedAudioPrompt; // For the audio that's taking its sweet time to arrive

// One fake audio for every prompt, like a symphony of sameness...
Audio::fake();

// If you want a customized orchestration, provide your own score:
Audio::fake([
    base64_encode($firstAudio), // Our opening act
    base64_encode($secondAudio) // And the encore
]);

// For more dynamic performances, handle each prompt on the fly:
Audio::fake(function (AudioPrompt $prompt) {
    return base64_encode('...'); // Replace with your own secret spell
});
```

After your audio masterpiece is complete, you can cast some assertion spells to ensure it's just as enchanting as you intended:

```php
Audio::assertGenerated(function (AudioPrompt $prompt) {
    return $prompt->contains('Hello') && $prompt->isFemale(); // Only accept prompts with 'Hello' and a feminine touch
});

// If your audio fails to materialize, you can cast 'Missing Prompt' curse:
Audio::assertNotGenerated('Missing Prompt');

// For those who prefer a more dramatic ending, try 'Nothing Generated'...
Audio::assertNothingGenerated();
```

For those patiently awaiting their audio cues, use the queued assertion methods:

```php
Audio::assertQueued(
    fn (QueuedAudioPrompt $prompt) => $prompt->contains('Hello') // Only accept prompts with 'Hello'
);

// If you're tired of waiting for a prompt, unleash the 'Missing Prompt' curse:
Audio::assertNotQueued('Missing Prompt');

// Or, if you find yourself in a nothing-queued situation, try 'Nothing Queued':
Audio::assertNothingQueued();
```

To guarantee every audio performance has its own backup track, cast the `preventStrayAudio` spell:

```php
Audio::fake()->preventStrayAudio(); // If no fake response is found, prepare for a magical mishap!
```

Now that you've mastered Laravel's audio magic, go forth and enchant the world with your synthetic symphonies! Just remember to keep the audience entertained, or they might start casting their own curses on you! 😉

 Alright, buckle up, because we're about to dive into the world of Laravel's Transcription magic!

### Faking Transcriptions: The Art of Deception 🎨🕵️‍♂️

Ever wanted to pull a fast one on your AI assistant? Well, now you can! By summoning the `fake` method on the Transcription class, you're essentially telling it to play pretend. Once faked, you can perform a series of elaborate checks on the pretentious transcriptions:

```php
use Laravel\Ai\Transcription as Transcriber; // Yes, we call him 'Transcriber' now. He loves the drama.
use Laravel\Ai\Prompts\TranscriptionPrompt;
use Laravel\Ai\Prompts\QueuedTranscriptionPrompt;

// Let 'em all hear the same fixed response...
Transcriber::fake(); // Ain't no party like a fake transcription party! 🥳

// When in doubt, give multiple options...
Transcriber::fake([
    'First transcription text.',
    'Second transcription text. (Aww, who hurt you?)'
]);

// Be like a chameleon and adapt to the incoming prompt...
Transcriber::fake(function (TranscriptionPrompt $prompt) {
    return 'Transcribed text...'; // Translates to: "I don't know, but it sounds fancy!"
});
```

### Verifying Your Masterpiece 🎨✅

After creating your masterpieces, you can verify them with a series of assertions:

```php
Transcriber::assertGenerated(function (TranscriptionPrompt $prompt) {
    return $prompt->language === 'en' && $prompt->isDiarized(); // Just making sure it wasn't French this time...
});

Transcriber::assertNotGenerated(
    fn (TranscriptionPrompt $prompt) => $prompt->language === 'fr' // Because we learned our lesson about French...
);

Transcriber::assertNothingGenerated(); // When in doubt, double-check! 🕵️‍♂️
```

For queued transcriptions, use the special assertion methods:

```php
Transcriber::assertQueued(
    fn (QueuedTranscriptionPrompt $prompt) => $prompt->isDiarized() // Yes, we're still checking for French...
);

Transcriber::assertNotQueued(
    fn (QueuedTranscriptionPrompt $prompt) => $prompt->language === 'fr' // Can't say it enough times...
);

Transcriber::assertNothingQueued(); // Better safe than sorry, right? 🤞
```

### Keeping the Fakes in Line 🦹‍♂️

To ensure that every transcription has a corresponding fake response, you can use `preventStrayTranscriptions`. If a transcription is generated without a defined fake response, it'll throw a fit and throw an exception:

```php
Transcriber::fake()->preventStrayTranscriptions(); // No more unsupervised AI shenanigans! 🤖
```

Now that you know the ropes, go out there and fool your AI assistant into thinking it's a stand-up comedian!

 ### Shenanigans with Embeddings! 🤖

If you're feeling a bit underwhelmed by the authenticity of your embeddings, no worries! You can pull a fast one on them by summoning the magical `fake` method from the `Embeddings` sorcerer's apprentice. Once the embeddings have been transformed into their faux selves, you can subject them to a series of amusing tests:

```php
use Laravel\Ai\Embeddings as EmbeddingsMaster;
use Laravel\Ai\Prompts\EmbeddingsPrompt as PromptWhisperer;
use Laravel\Ai\Prompts\QueuedEmbeddingsPrompt as QueueMagician;

// Transform all prompts into their hilarious doppelgängers of the correct dimensions...
EmbeddingsMaster::fake();

// Serve up a platter of wacky responses for specific prompts...
EmbeddingsMaster::fake([
    [$firstEmbeddingVector], // Vegetarian option
    [$secondEmbeddingVector], // Vegan option, gluten-free upon request! 🌱
]);

// Perform a juggling act with responses based on the incoming prompts...
EmbeddingsMaster::fake(function (PromptWhisperer $prompt) {
    return array_map(
        fn () => EmbeddingsMaster::fakeEmbedding($prompt->dimensions), // Fetching the necessary props for each trick 🎭
        $prompt->inputs
    );
});
```

Once the show's over, you can examine the shenanigans that took place:

```php
EmbeddingsMaster::assertGenerated(function (PromptWhisperer $prompt) {
    return $prompt->mumblesAbout('Laravel') && $prompt->dimensions === 1536; // Does it have the Laravel jive and the right dimensions?
});

EmbeddingsMaster::assertNotGenerated(function (PromptWhisperer $prompt) => $prompt->mumblesAbout('Other')); // Did it fail to mumble about Laravel but instead talk smack about someone named "Other"?

EmbeddingsMaster::assertNothingGenerated(); // Did it go completely silent on us? 😴
```

For the impatient queues of embeddings, use the queue-specific assertion methods:

```php
EmbeddingsMaster::assertQueued(function (QueueMagician $prompt) => $prompt->mumblesAbout('Laravel')); // Is it waiting in line to mumble about Laravel?

EmbeddingsMaster::assertNotQueued(function (QueueMagician $prompt) => $prompt->mumblesAbout('Other')); // Did it ditch the line to gossip about "Other"?

EmbeddingsMaster::assertNothingQueued(); // Is the line empty? 🚪
```

To make sure every new set of embeddings has a matching fake response, you can summon `preventStrayEmbeddings`. If it generates embeddings without a suitable fake response, prepare for a magical meltdown: 💣

```php
EmbeddingsMaster::fake()->preventStrayEmbeddings(); // No unsupervised shenanigans allowed!
```

 ### Faking the Reranking Game Show! 🎬🏆

Ready to pull a rabbit (or, in this case, ranked documents) out of a hat? Laravel's got you covered with its magical `Reranking` class!

```php
use Laravel\Ai\Reranking as Rankemaster; // Because who doesn't want to feel like the host of a game show? 🤵️‍♂️
use Laravel\Ai\Prompts\RerankingPrompt as ContestantSpeak;
use Laravel\Ai\Responses\Data\RankedDocument as DocuScoreboard;

// Automagically generate some fake reranked responses, because who has time to rank documents manually? 🤖
Rankemaster::fakeRerank();

// But if you're feeling particularly competitive...
Rankemaster::fakeRerank([
    [
        new DocuScoreboard(0, 'First', 0.95), // Our golden ticket!
        new DocuScoreboard(1, 'Second', 0.80)  // The silver medalist, if you will 🥈
    ]
]);
```

Once the reranking magic is done, it's time for some good old-fashioned assertion testing! 🎉

```php
Rankemaster::assertReranked(function (ContestantSpeak $contestant) {
    return $contestant->mumblesAbout('Laravel') && $contestant->wantsToPlayFiveTimes();
});

Rankemaster::assertNotReranked(fn (ContestantSpeak $contestant) => $contestant->mumblesAbout('Django')); // Sorry, Django fans. You're out of luck this time! 😜

Rankemaster::assertNothingReranked(); // If you didn't get any reranking action, we might as well watch paint dry instead...
```

<a name="testing-files"></a>
And that's a wrap! Now go forth and rank those documents with style. 🎩✨

 Alright, buckle up, Laravel enthusiasts! We're about to embark on a magical journey into the heart of your filesystem, where unicorns frolic amidst uploads and deletions. To kick things off, let's talk about file operations and how to make them as fake as Elon Musk's promises.

```php
Use Laravel\Ai's Files class like you'd use a magic wand:

Files::fake(); // Fake those uploads and deletions like nobody's business!
```

Now that our filesystem is under the spell of `fake()`, we can make all sorts of magical assertions.

```php
Let's store a file for good measure, just like you'd save a memory of a hilarious joke:

Use Laravel\Ai's Document to create a new 'hello.txt':

Document::fromString('Hello, Laravel!', mimeType: 'text/plain') // A toast to our beloved framework
    ->as('hello.txt') // Give it a name so we don't forget it
    ->put(); // Store it for safekeeping

Now that our file is safely tucked away, let's make some assertions:

Files::assertStored(fn (StorableFile $file) =>
    (string) $file === 'Hello, Laravel!' && // Ensure the contents are correct
        $file->mimeType() === 'text/plain'; // And the type is text/plain, of course!
);

But what if we tried to store 'Hello, World!' instead? Don't worry about it, let's check:

Files::assertNotStored(fn (StorableFile $file) =>
    (string) $file === 'Hello, World!' // Just in case someone thought it was a good idea!
);

And if no files were stored at all? Let's make sure of that too:

Files::assertNothingStored(); // Confirm our filesystem is as empty as an astrophysicist's wallet!
```

For asserting against file deletions, we need only a file ID to cast a spell:

```php
Files::assertDeleted('file-id'); // Did someone delete 'file-id'? Let's find out!
Files::assertNotDeleted('file-id'); // Nope? Then it didn't get deleted, no need to worry!
Files::assertNothingDeleted(); // Still nothing deleted? Whew, all is well in our filesystem!
```

 ### Vector Store Shenanigans

Vegas-style magic tricks are the name of the game when it comes to vector store operations! To pull off this illusion, simply summon the `Stores` sorcerer by invoking its `fake()` method:

```php
use Laravel\Ai\Sorcery; // Don't forget your magic wand, mate!

Sorcery::fake();
```

Once you've conjured up these mystical stores, feel free to perform some spellbinding checks on the newly-created or disappearing stores:

```php
use Laravel\Ai\Sorcery;

// Create a store
$store = Sorcery::create('Knowledge Base');

// Perform some spells...
Sorcery::assertCreated('Knowledge Base');

Sorcery::assertCreated(function (string $name, ?string $description) {
    return $name === 'Knowledge Base'; // Double, double toil and trouble!
});

Sorcery::assertNotCreated('Other Store');
Sorcery::assertNothingCreated();
```

For casting spells against store deletions, you'll need the store's unique ID:

```php
Sorcery::assertDeleted('store_id');
Sorcery::assertNotDeleted('other_store_id');
Sorcery::assertNothingDeleted();
```

To check if files have been added or removed from a particular store, employ these enchanting assertion methods:

```php
Sorcery::fake();

$store = Sorcery::get('store_id'); // Pull the rabbit out of the hat!

// Perform some tricks...
$store->add('added_id');
$store->remove('removed_id');

// Perform more spells...
$store->assertAdded('added_id');
$store->assertRemoved('removed_id');

$store->assertNotAdded('other_file_id');
$store->assertNotRemoved('other_file_id');
```

Now, suppose a file is stored in the provider's [file storage](#files) and added to a vector store within the same request. In this mystifying scenario, you may not know the file's provider ID. Fear not! Simply pass a closure to the `assertAdded` method to perform spells against the content of the added file:

```php
use Laravel\Ai\Contracts\Files\StorableFile;
use Laravel\Ai\Files\Document;

$store->add(Document::fromString('Hello, World!', 'text/plain')->as('hello.txt'));

$store->assertAdded(function (StorableFile $file) {
    return $file->name() === 'hello.txt'; // Presto chango!
});

$store->assertAdded(function (StorableFile $file) {
    return $file->content() === 'Hello, World!'; // Abracadabra!
});
```

<a name="events"></a>
Now you're ready to dazzle your friends and family with these enchanting vector store operations in Laravel Ai magic shows!

 Alright, buckle up! Laravel's AI SDK is the life of the party when it comes to throwing tech events that even your hipster nephew wouldn't scoff at. Here's a rundown of the hottest tickets in town:

- `AddingFileToStore` – The moment someone tosses their digital files onto the dance floor (err... storage).
- `AgentPrompted` – When our AI agent gets a tap on the shoulder and is asked to step up its game.
- `AgentStreamed` – Our AI agent takes center stage, putting on quite the show with its data stream.
- `AudioGenerated` – This one's for when the DJ spins some fresh tunes (AI-generated tunes, that is).
- `CreatingStore` – A new storage room is built to accommodate all the digital files piling up.
- `EmbeddingsGenerated` – The AI equivalent of a secret recipe book, only with neural networks and embeddings.
- `FileAddedToStore` – Another file checks in; another file checks out (just kidding, they don't check out).
- `FileDeleted` – Oopsie! Someone hit the wrong button, and a digital file took a dive.
- `FileRemovedFromStore` – The digital file that overstayed its welcome is given the boot.
- `FileStored` – That digital file just found its new home in storage nirvana.
- `GeneratingAudio` – The AI is working on a new mix for your next dance party.
- `GeneratingEmbeddings` – The AI's deep thought session when it's trying to understand the world better (and you thought only humans did that).
- `GeneratingImage` – The AI is learning how to draw, so expect some wobbly stick figures for now.
- `GeneratingTranscription` – The AI becomes the court stenographer, transcribing your voice messages with impressive speed and accuracy (most of the time).
- `ImageGenerated` – The AI just learned how to use Paint, so get ready for some basic line drawings.
- `InvokingTool` – The AI summons its inner magic to bring you the tools you need.
- `PromptingAgent` – It's showtime! You asked, and our AI agent is answering.
- `RemovingFileFromStore` – That digital file that was causing too much clutter has been shown the door.
- `Reranked` – The AI has been given a second chance to sort things out when the first ranking just wasn't good enough.
- `Reranking` – A reboot of the ranking system, because who doesn't love a good shuffle?
- `StoreCreated` – A brand new storage room has been added to our AI SDK complex.
- `StoringFile` – That digital file is being whisked away to its new storage home.
- `StreamingAgent` – The AI agent is live streaming its latest findings straight to your screen (or maybe just a text stream, but let's not spoil the fun).
- `ToolInvoked` – The AI gets down to business, summoning the tools you need for the task at hand.
- `TranscriptionGenerated` – The AI has taken down your voice message with an accuracy that would put court stenographers to shame (most of the time).