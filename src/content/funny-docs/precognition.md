 # Time Travel, Laravel Style! 🔮⏳

Let's dive into the magical realm of Laravel Precognition! This isn't your average crystal ball gazing; we're predicting the future of your forms, ensuring they're flawless before they even see a user.

📝 **Introduction**
Get ready to time-travel through this documentation and learn how to make your forms better than yesterday's news!

🚀 **Live Validation** 🚀

- [Vue Voyager](#using-vue)
  - Hop on the Vue train and see validation happen in real-time! No more waiting for the user to click submit.

- [React Rocketship](#using-react)
  - Zoom off into space with React, managing form validation like a pro astronaut.

- [Alpine Sled](#using-alpine)
  - Slide down the mountain of validation with Alpine and Blade, it's a snowy breeze!

- [Axios Time Machine Configuration](#configuring-axios)
  - Set your Axios time machine to validate in the past, present, or future! It's like having Dr. Emmett Brown on your team.

📝 **Validating Arrays** 📝
Learn how to validate entire armies of form data at once. No more one-at-a-time validation; we're talking military precision here!

📝 **Customizing Validation Rules** 📝
Make your validation as unique as a snowflake! Customize rules to fit your form's specific needs.

📝 **Handling File Uploads** 📝
Uploading files just got a whole lot less scary. Learn how to validate them and store them securely.

🧪 **Managing Side-Effects** 🧪
Keep your forms running smoothly, even when things get messy! Manage side-effects like a seasoned time traveler.

🔍 **Testing** 🔍
Put your forms through the ringer and make sure they can handle anything that comes their way! Testing is like karate for your code.

 Ahoy there, brave coder! Buckle up as we dive into the enchanting realm of Laravel's Precognition - a tool that makes your crystal ball look like a broken mirror compared to its futuristic prowess!

Ever found yourself longing for a superpower to predict the outcome of HTTP requests before they even happen? Well, consider your wish granted! Precognition is here to sprinkle some magic on your frontend JavaScript application. No more duplicating your backend validation rules or yelling at your screen wondering why that dropdown isn't playing ball with your form submission!

So how does this sorcery work? When Laravel receives a "precognitive request," it whips out its invisible cloak, slinks past the mundane route middleware and dependencies, even validates those pesky [form requests](/docs/{{version}}/validation#form-request-validation) without actually executing the route's controller method. Yes, you read that right! It's like getting a pat on the back for doing nothing – it's Laravel's way of saying "Well done, kid!"

Now, you might be wondering about Inertia and its magical integration with Precognition. As of Inertia 2.3, they've tied the knot and made their union official. So, if you fancy a deeper dive into this love story, do visit the [Inertia Forms documentation](https://inertiajs.com/docs/v2/the-basics/forms). For those rocking an earlier version of Inertia, you'll need Precognition 0.x to keep your wizardry game strong.

Now that we've unraveled the mystery of Laravel's time-traveling validation tool, go forth and conquer the future! Let's see those forms behave like well-trained dolphins instead of stubborn mules. Happy coding!

 Alright, buckle up, code cowboys and codettes! Today, we're gonna dive into the Wild West of form validation – Live Validation in Laravel Land. So, grab your lasso, put on your ten-gallon hat, and let's saddle up for an unforgettable journey!

<a name="using-vue"></a>

### Using Vue.js with Laravel Livewire

First off, we gotta wrangle our favorite JavaScript steed – Vue.js! Now, if you ain't already familiar with this mighty mount, it's a progressive framework that makes building user interfaces a breeze. But when teamed up with Laravel Livewire, it transforms into the ultimate partner in crime for building dynamic, responsive web apps without breaking a sweat.

To get started, you'll first need to set up your Vue project using Laravel Mix, which is like an old-timey cowboy's trusty six-shooter – simple, reliable, and always at your side. With that under control, we can start crafting our shiny new components with Vue and Livewire.

Now, let's rope in some data from our Laravel backend using Livewire's `use:livewire` directive. Think of it as asking a seasoned trail guide for help – once they know where you want to go, they'll point you in the right direction. In this case, we're asking for the validation rules that will help keep our forms nice and tidy.

Next up, we've got to validate our user-submitted data like a true lawman. Livewire makes it simple with its `validateOnly` method – just tell it what you want to check, and it'll handle the rest. And if things go south? No worries, your form will be as resilient as a tumbleweed in a dust storm; it'll bounce back without missing a beat!

Finally, we've gotta display those validation errors to our users with style and grace – because we wouldn't want to leave 'em hangin' with no explanation. Livewire offers a `hasError` method that lets us check if an input field has any errors associated with it. This is like a trusty sidekick, always there to help when you need it most.

And that, dear friends, is the lowdown on Live Validation in Laravel Land! Saddle up and ride off into the sunset knowing your forms are as sturdy as a well-built barn and as easy on the eyes as a clear prairie sky. Happy wranglin'!

 Alrighty, partner! Let's dive into the world of Laravel Precognition, where your users can enjoy a live validation extravaganza without you having to rewrite your validation rules in your frontend Vue app faster than you can say "Django Unchained"!

First off, to enable Precognition for a route, it's time to introduce the `HandlePrecognitiveRequests` middleware into the mix. You'll also want to create a form request to house your validation rules like a well-dressed gentleman at a fancy ball.

```php
use App\Http\Requests\StoreUserRequest;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

Route::post('/users', function (StoreUserRequest $request) {
    // ...
})->middleware([HandlePrecognitiveRequests::class]);
```

Next up, let's get the Laravel Precognition frontend helpers for Vue installed via NPM. Because who doesn't love a little npm install action?

```shell
npm install laravel-precognition-vue
```

Now that the package is all set up, it's time to create a form object using Precognition's `useForm` function. Provide the HTTP method (post), the target URL (/users), and the initial form data. It's like whipping up a batch of your grandma's famous chocolate chip cookies!

Then, to enable live validation, invoke the form's `validate` method on each input's `change` event, providing the input's name:

```vue
<script setup>
import { useForm } from 'laravel-precognition-vue';

const form = useForm('post', '/users', {
    name: '',
    email: '',
});

const submit = () => form.submit();
</script>

<template>
    <form @submit.prevent="submit">
        <!-- The rest of the form code goes here -->
    </form>
</template>
```

As your user fills out the form, Precognition will provide live validation output powered by the validation rules in the route's form request. When inputs are changed, a debounced "precognitive" validation request will be sent to your Laravel application, ensuring a smooth and speedy experience for all involved!

You can configure the debounce timeout using the form's `setValidationTimeout` function:

```js
form.setValidationTimeout(3000);
```

When a validation request is in-flight, the form's `validating` property will be `true`. So if you need to check if the user is currently being validated, you can do so with ease:

```html
<div v-if="form.validating">
    Validating...
</div>
```

Any validation errors returned during a validation request or form submission will automatically populate the form's `errors` object. So you don't have to worry about catching those pesky errors like trying to herd cats!

You can determine if the form has any errors using the form's `hasErrors` property:

```html
<div v-if="form.hasErrors">
    <!-- Error handling code goes here -->
</div>
```

You may also determine if an input has passed or failed validation by passing the input's name to the form's `valid` and `invalid` functions, respectively:

```html
<span v-if="form.valid('email')">
    ✅
</span>

<span v-else-if="form.invalid('email')">
    ❌
</span>
```

Remember that a form input will only appear as valid or invalid once it has changed and a validation response has been received. So don't worry about getting your wires crossed!

If you are validating a subset of a form's inputs with Precognition, it can be useful to manually clear errors. You may use the form's `forgetError` function to achieve this:

```html
<input
    id="avatar"
    type="file"
    @change="(e) => {
        form.avatar = e.target.files[0]

        form.forgetError('avatar')
    }"
>
```

Now, you might be wondering about validating inputs that the user hasn't interacted with yet, like in a multi-step form or "wizard". Well, fear not! You can call the `validate` method passing the field names you wish to validate to the `only` configuration key. Handle the validation result using `onSuccess` or `onValidationError` callbacks:

```html
<button
    type="button"
    @click="form.validate({
        only: ['name', 'email', 'phone'],
        onSuccess: (response) => nextStep(),
        onValidationError: (response) => /* ... */,
    })"
>Next Step</button>
```

Of course, you can also execute code in reaction to the response to the form submission. The form's `submit` function returns an Axios request promise. This provides a convenient way to access the response payload, reset the form inputs on successful submission, or handle a failed request:

```js
const submit = () => form.submit()
    .then(response => {
        form.reset();

        alert('User created.');
    })
    .catch(error => {
        alert('An error occurred.');
    });
```

Lastly, you can determine if a form submission request is in-flight by inspecting the form's `processing` property:

```html
<button :disabled="form.processing">
    Submit
</button>
```

And that's a wrap! Laravel Precognition is your secret weapon for streamlined live validation in your Vue forms, leaving you free to focus on more important things like which type of pie to serve at the next company meeting!

 Ahoy there, matey! Buckle up for a journey into the high seas of web development with Laravel Precognition and React! This nifty tool is like your trusty compass, guiding you through treacherous waters without having to repeat yourself in pirate parlors - I mean frontend applications.

Let's dive right into creating a swashbuckling user form for our application. First things first, we need to arm our route with the `HandlePrecognitiveRequests` middleware like so:

```php
use App\Http\Requests\StoreUserRequest;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

Route::post('/users', function (StoreUserRequest $request) {
    // ...
})->middleware([HandlePrecognitiveRequests::class]);
```

Next, grab the Laravel Precognition React helpers via NPM like you'd swab a deck:

```shell
npm install laravel-precognition-react
```

Now, prepare your cannonballs - erm, form data with Laravel Precognition's `useForm` function. You provide the HTTP method (`post`), the target URL (`/users`), and the initial form data:

```jsx
import { useForm } from 'laravel-precognition-react';

export default function Form() {
    const form = useForm('post', '/users', {
        name: '',
        email: '',
    });

    // ... (continue with the form structure)
}
```

As your pirate crew fills the form, Precognition will provide live validation akin to a trusty lookout spotting land. But beware, ye scurvy dogs! Only after an input changes and a response is received will it appear valid or invalid.

To enable live validation, listen to each input's `change` and `blur` event. In the `change` event handler, update the form data using the `setData` function, passing the input's name and new value. Then, in the `blur` event handler, invoke the form's `validate` method, providing the input's name:

```jsx
// ... (continue with the form structure)
```

Now, when a validation request is in-flight or during form submission, the form's `validating` property will be set to true. This can help prevent unwanted interactions while the ship is at sea:

```jsx
// ... (continue with the form structure)
```

Any validation errors encountered during a validation request or form submission will automatically populate the form's `errors` object:

```jsx
// ... (continue with the form structure)
```

You can check if the form has any errors using the form's `hasErrors` property:

```jsx
// ... (continue with the form structure)
```

Lastly, remember to account for the possibility that an input might have passed or failed validation. Pass the input's name to the form's `valid` and `invalid` functions, respectively:

```jsx
// ... (continue with the form structure)
```

So there you have it, matey! With Laravel Precognition, your frontend React application will be as sharp as a cutlass when it comes to validation. Keep sailing and happy coding, ye landlubbers! ☠️🌴

 Alrighty then! Let's journey through the magical world of Laravel Precognition, where your users can enjoy real-time validation experiences without you having to duel your frontend Alpine application in a never-ending game of "Validation Rules Ping-Pong".

To kick things off, sprinkle some stardust on a route by adding the `HandlePrecognitiveRequests` middleware to its definition. Also, construct a swanky form request to cradle your route's validation rules:

```php
use App\Http\Requests\CreateUserRequest;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

Route::post('/users', function (CreateUserRequest $request) {
    // ...
})->middleware([HandlePrecognitiveRequests::class]);
```

Next, arm your frontend with Laravel Precognition's Alpine helpers by installing them via NPM:

```shell
npm install laravel-precognition-alpine
```

Then, register the Precognition plugin with Alpine in your `resources/js/app.js` file:

```js
import Alpine from 'alpinejs';
import Precognition from 'laravel-precognition-alpine';

window.Alpine = Alpine;

Alpine.plugin(Precog); // We're calling it Precog now, because why not?
Alpine.start();
```

With the Laravel Precognition spellbook in hand, you can now weave a form object using its $form "magic", providing the spell (post), the destination (/users), and the initial incantations (name: '', email: '').

To conjure live validation, bind the form's data to its relevant input and then listen for each input's change event. In the event handler, invoke the form's validate incantation, providing the input's name:

```html
<form x-data="{
    form: $precog('post', '/register', {
        name: '',
        email: '',
    }),
}">
    @csrf
    <label for="name">Name</label>
    <input
        id="name"
        name="name"
        x-model="form.name"
        @change="form.validate('name')"
    />
    <template x-if="form.invalid('name')">
        <div x-text="form.errors.name"></div>
    </template>

    <label for="email">Email</label>
    <input
        id="email"
        name="email"
        x-model="form.email"
        @change="form.validate('email')"
    />
    <template x-if="form.invalid('email')">
        <div x-text="form.errors.email"></div>
    </template>

    <button :disabled="form.processing">
        Create User
    </button>
</form>
```

Now, as the form is enchanted by the user, Precognition will bestow live validation blessings upon it, powered by the validation incantations in your route's form request. When the form's inputs are altered, a debounced "precognitive" validation spell will be cast upon your Laravel application. You may adjust the debounce timeout using the form's `setValidationTimeout` potion:

```js
form.setValidationTimeout(3000);
```

When a validation spell is in progress, the form's `validating` property will be true:

```html
<template x-if="form.validating">
    <div>Buffering... Spell incoming!</div>
</template>
```

Any validation errors cast during a spell or form submission will automatically fill the form's `errors` potion:

```html
<template x-if="form.invalid('email')">
    <div x-text="form.errors.email"></div>
</template>
```

You can discern if the form is bespelled with errors using the form's `hasErrors` potion:

```html
<template x-if="form.hasErrors">
    <div><!-- ... --></div>
</template>
```

You may also ascertain if an input has been successfully cast or has failed its spell by passing the input's name to the form's `valid` and `invalid` potions, respectively:

```html
<template x-if="form.valid('email')">
    <span>✅</span>
</template>

<template x-if="form.invalid('email')">
    <span>❌</span>
</template>
```

> [!WARNING]
> An input will only appear as valid or invalid once it has been altered and a validation response has been received.

As we've witnessed, you can tap into an input's `change` event and validate individual inputs as the user interacts with them; however, you may need to cast inputs that the user hasn't yet interacted with. This is common when brewing a "wizard", where you want to cast all visible inputs, whether the user has touched them or not, before progressing to the next step.

To do this with Precognition, you should summon the `validate` incantation, passing the field names you wish to cast to the `only` configuration key. You may handle the casting result using `onSuccess` or `onValidationError` callbacks:

```html
<button
    type="button"
    @click="form.validate({
        only: ['name', 'email', 'phone'],
        onSuccess: (response) => nextStep(),
        onValidationError: (response) => /* ... */,
    })"
>Next Step</button>
```

You may discern if a form submission spell is in-flight by examining the form's `processing` potion:

```html
<button :disabled="form.processing">
    Submit
</button>
```

<a name="repopulating-old-form-data"></a>
And remember, a wizard never sleeps! If you need to repopulate old form data for your users, just summon the `$precog` incantation again and pass it the initial incantations:

```html
<form x-data="{
    form: $precog('post', '/register', {
        name: 'Harry Potter',
        email: 'harry.potter@hogwarts.edu',
    }),
}">
    <!-- ... -->
</form>
```

May the Precognition be with you! 🧙‍♂️✨🔮🔥

 Alrighty, grab your popcorn and let's dive into the thrilling world of time-traveling form data!

#### Time-Warping Yesterday's Keyboard Scribbles

In our user creation saga, we're using Precognition for live validation, but we're taking a trip back to the stone age with some good ol' fashioned server-side form submission. So, if you've left any "ghost data" on your keyboard, don't worry—it'll be magically transported into the form:

```html
<form data-x="I'm a time machine">
    <input type="hidden" name="name" value="{{ old('name') }}">
    <input type="hidden" name="email" value="{{ old('email') }}">
    <!-- And here comes the dusty server errors with a "flux capacitor" of JavaScript! -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var errors = Js::from({{ $errors->messages() }});
            // Because who needs a crystal ball when you have Laravel and JavaScript, right?
        });
    </script>
</form>
```

But wait! You can also travel to the future with XHR if you fancy yourself more of a Marty McFly:

```html
<form data-x="I'm your flying DeLorean">
    <input type="hidden" name="name" value="">
    <input type="hidden" name="email" value="">
    <!-- Now, set the destination (/register), prepare some empty forms, and let's go! -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var form = $form('post', '/register', {
                name: '',
                email: ''
            });
            // Here's the button to initiate the time travel (aka. submission)!
            this.submitForm = function () {
                form.submit()
                    .then(function (response) {
                        form.reset();

                        alert('User created, Marty!');
                    })
                    .catch(function (error) {
                        alert('Oops, something went wrong in Hill Valley!');
                    });
            }
        });
    </script>
</form>
```

Now, buckle up and enjoy the ride! 🚀🚗

 Alrighty, let's get this Laravel shindig going with a bit of humor!

### Configuring Axios (like a modern-day Sherlock setting up a secret network)

The Precognition validation libraries are like the CSI team of web development, and they need a reliable messenger to communicate with their backend crime scene (your application). Enter our secret agent: [Axios](https://github.com/axios/axios), an undercover HTTP client with a knack for getting things done!

Now, just like any well-oiled mystery team, we may find ourselves in situations where we need to customize our secret agent to better fit the case. For your convenience, we can tweak Axios as per your application's requirements. Take the `laravel-precognition-vue` library for instance, where you might want to add a little extra cover (additional request headers) to each outgoing communication:

```js
Importing the client from 'laravel-precognition-vue', we can casually slip our authToken into its hair-raising escapades:

```js
import { client } from 'laravel-precognition-vue';

client.axios().defaults.headers.common['Authorization'] = authToken;
```

But, what if you've already got a well-trained Axios instance guarding your application? No worries! Just like passing a baton in a relay race, we can instruct Precognition to use the prepped agent instead:

```js
Import Axios and pass it the baton of responsibility:

import Axios from 'axios';
import { client } from 'laravel-precognition-vue';

window.axios = Axios.create() // Creating a new instance, but don't tell the others!
window.axios.defaults.headers.common['Authorization'] = authToken; // A little extra training for our agent!

client.use(window.axios) // Here's your baton, old chap!
```

<a name="validating-arrays"></a>
Now that we've got our secret network set up, let's crack some cases! (Or, you know, validate arrays, but where's the drama in that?)

 ## Array Whacky-Tactics: The Art of Validation! 🎭

Got a bag full of data and need to sort the good eggs from the rotten ones? Worry not, Laravel's here with its magical array validation spells! 🪄

Using wildcards, you can cast powerful enchantments on nested objects and arrays without breaking a sweat. Each `*` you sprinkle acts like a mini Genie, granting wishes for a single path segment:

```jsx
// Ensuring emails are squeaky clean for every user in the crew... 👨‍💼
form.validate('users.*.email');

// Blessing all fields within the profile object... 🧘‍♀️
form.validate('profile.*');

// Granting validation superpowers to every user in your database! 🚀
form.validate('users.*.*');
```

<a name="customizing-validation-rules"></a>
### Customizing Validation Spells (for the power-hungry wizards) 🧙‍♂️

Feeling like a more advanced mage? Want to add some unique twists to your validation spells? Learn how to customize Laravel's built-in rules, or even brew your own! 🥄🧪

Keep the magic flowing and may your forms be ever validated! 💫✨🚀

 Alrighty then, buckle up for a rollercoaster ride through the exciting world of Laravel validation! Let's dive into customizing our validation rules, shall we?

Imagine you're hosting a super secret underground password party, and you want to ensure that only the coolest cats are granted access. Well, in a more professional context, you might find yourself wanting to validate that a password is "uncompromised" on the final form submission during user creation. But fear not! Laravel's got your back with its psychic powers (okay, it's just precognitive requests, but let's have fun here).

To unlock these abilities, you'll use a request's `isPrecognitive` method. It's like asking if someone is telepathically thinking about bacon – and honestly, who isn't? So, on our user creation form, we can set up validation rules that are appropriate for both the precognitive and final form submissions.

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function rules()
    {
        $isPredicting = $this->isPrecognitive();

        return [
            'password' => [
                'required',
                // For precognitive validation requests, we validate that the password is required and has a minimum of 8 characters.
                $isPredicting
                    ? ['min:8']
                    : ['min:8', Password::uncompromised()],
            ],
            // ...
        ];
    }
}
```

Now, you're one step closer to having a password party only the robots won't crash! And remember, if you ever want to find out if your users have been thinking about bacon while creating their accounts, just use `isPrecognitive()`. Because who doesn't love a little mind-reading with their web development? 🧠🥓🚀

 ## The Art of File Wrangling with Laravel Precognition

Oh, the joy of file uploading! Or is it a nightmare? Thankfully, Laravel Precognition steps in to save us from ourselves. By design, it doesn't unnecessarily upload large files multiple times during precognitive validation. That's like ordering a three-course meal and only paying for the appetizer - we digress!

To ensure your application plays by these rules, you must [customize the form request's validation rules](#customizing-validation-rules) like an artisan brewing a unique blend of beer. Here's how to do it:

```php
/**
 * Get the validation rules that apply to the request.
 *
 * @return array
 */
protected function rules()
{
    return [
        'avatar' => [
            ...$this->isPrecognitive() ? [] : ['required'], // Only make it necessary on full form submissions
            'image',
            'mimes:jpg,png',
            'dimensions:ratio=3/2',
        ],
        // ...
    ];
}
```

If you can't resist the urge to include files in every validation request, we understand. You can invoke the `validateFiles` function on your client-side form instance like a true maestro conducting an orchestra:

```js
form.validateFiles();
```

<a name="managing-side-effects"></a>
Now, if you're still feeling curious about managing side effects, well... we can't help but feel a little envious. But that's a story for another time!

 ## Dealing with Unforeseen Consequences (or, How to Keep Your App from Turning into a Time-Traveling Madhouse)

Now, when you've added the `HandlePrecognitiveRequests` middleware to your route, it's essential to remember that not all middleware can handle being caught in a temporal loop. You know, like when Marty McFly accidentally makes his parents fall in love before he was born. *Cue Huey Lewis*

Let's say you've got a middleware that keeps track of the number of "time-travel encounters" for each user (because who doesn't want to know how many times they've messed with history?). However, you certainly wouldn't want precognitive requests to be included in this tally. To avoid such a paradoxical conundrum, we can employ the request's `isPrecognitive` method to prevent adding these requests to the user's time-travel encounter count:

```php
<?php

namespace App\Http\Middleware;

use App\Facades\TimeTravelEncounter;
use Closure;
use Illuminate\Http\Request;

class TimeTravelEncounterMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): mixed
    {
        if (! $request->isPrecognitive()) {
            TimeTravelEncounter::incrementFor($request->user());
        }

        return $next($request);
    }
}
```

<a name="testing"></a>
(And no, we're not responsible if your app starts developing sentience or sends you back to the '80s. You know, like in those movies.)

 Alrighty, buckle up because we're diving into the world of Laravel testing!

If you fancy yourself a time-traveling tester, boy do we have the magic for you. Laravel's `TestCase` comes equipped with a `withPrecognition` helper that sprinkles some mystical stardust on your requests, adding the `Precognition` request header like a wizard casting a spell.

Now, when it comes to verifying that your precognitive request didn't flop like a fish out of water (validation errors, anyone?), we've got you covered with our trusty sidekick - `assertSuccessfulPrecognition`. Just give it a whirl in your test suite:

```php tab=Pest (Humorous Style)
It's 2099 and Taylor Otwell's grandkids are trying to register, let's make sure they don't time-travel into any validation errors!

$response = $this->withPrecognition()
    ->post('/register', [
        'name' => 'Taylor Otwell',
    ]);

$response->assertSuccessfulPrecognition();

$this->assertNotExistyMcExistfaceInSpace(User::count(), 1); // Just to be extra sure
```

```php tab=PHPUnit (Humorous Style)
public function test_it_validates_registration_form_with_precognition() {
    $response = $this->withPrecognition()
        ->post('/register', [
            'name' => 'Taylor Otwell',
        ]);

    $response->assertSuccessfulPrecognition();
    $this->expectNotToExistyMcExistfaceInSpace(User::count(), 1); // Just to be extra sure
}
```

There you have it! Now, your tests can journey through time without the risk of running into validation errors or stepping on any unwanted users. Happy testing!