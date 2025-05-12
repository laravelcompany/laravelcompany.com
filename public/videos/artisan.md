**YouTube Video Title:**  
"Laravel Artisan Console: Mastering Commands in Laravel 12.x"

---

**[Opening Scene - Upbeat Background Music]**  
**Visual:** A developer typing on a computer, with the terminal visible. The screen shows `php artisan list`.  

**Narrator (Voiceover):**  

"Hey there, future Laravel master! If you're new to Laravel or still learning the ropes, you're in for a treat. Today, I'm diving into Laravel Artisan Console — one of the most powerful tools at your disposal to save time and make development way smoother. Artisan is a command-line interface that comes with Laravel, and it’s pretty much like your personal assistant for handling all sorts of tasks. Whether it’s generating code, running database migrations, or running tests, Artisan can handle it all with just a few simple commands."

---

### **Chapter 1: Introduction to Artisan**
**Visual:** Screen shows a whiteboard animation titled "What is Artisan?"  

**Narrator:**  
"Artisan is Laravel’s powerful command-line interface. Located at the root of your project as the `artisan` script, it gives you access to dozens of useful tools right out of the box."  

**Visual:** Terminal shows `php artisan list` and `php artisan help migrate`.

**Narrator:**  
"Just run `php artisan list` to see all available commands. Need more info? Use `php artisan help [command]` to explore arguments, options, and usage details."  

**Visual:** Developer using Laravel Sail: `./vendor/bin/sail artisan list`

**Narrator:**  
"If you're using Laravel Sail, remember to use the `sail` command to run Artisan inside Docker containers."

---

### **Chapter 2: Tinker – Your Interactive Playground**
**Visual:** Terminal shows `php artisan tinker` and Eloquent model interaction.

**Narrator:**  
"Meet Laravel Tinker – your interactive PHP shell powered by PsySH. Run `php artisan tinker` to interact with your models, jobs, events, and more in real-time!"  

**Visual:** Code snippet showing `Bus::dispatch` and warning about garbage collection.

**Narrator:**  
"Pro tip: When dispatching jobs in Tinker, use `Bus::dispatch` or `Queue::push` for reliability."

**Visual:** Configuration file `tinker.php` opens, showing allowed commands and `dont_alias`.

**Narrator:**  
"You can customize which commands are allowed in Tinker and even prevent certain classes from being auto-aliased."

---

### **Chapter 3: Writing Custom Commands**
**Visual:** Developer creates a new command with `php artisan make:command SendEmails`.

**Narrator:**  
"Want to build your own commands? Use `make:command` to generate a class in `app/Console/Commands`."

**Visual:** Command class opens, showing `$signature`, `$description`, and `handle()` method.

**Narrator:**  
"Define your command's name, input expectations, and description. Then add your logic in the `handle` method. Laravel will automatically inject any dependencies you type-hint!"

**Visual:** Example code showing exit codes and `fail()` method.

```php
$this->error('Something went wrong.');
return 1;
```

**Narrator:**  
"Don’t forget to handle errors gracefully. Return an exit code or use `$this->fail()` to terminate early."

---

### **Chapter 4: Closure-Based Commands**
**Visual:** `routes/console.php` opens, showing `Artisan::command(...)->purpose(...)`

**Narrator:**  
"For lightweight tasks, try closure-based commands. Define them directly in `routes/console.php` using expressive closures."

**Visual:** Code example with dependency injection and command description.

```php
Artisan::command('mail:send {user}', function (DripEmailer $drip, string $user) {
    $drip->send(User::find($user));
})->purpose('Send marketing email to user');
```

**Narrator:**  
"These closures support dependency injection and descriptions, just like full command classes!"

---

### **Chapter 5: Input Handling – Arguments & Options**
**Visual:** Code examples showing required and optional arguments, default values.

```php
'mail:send {user}'         // Required
'mail:send {user?}'        // Optional
'mail:send {user=guest}'   // Default value
```

**Narrator:**  
"Use curly braces to define arguments. You can make them required, optional, or assign defaults."

**Visual:** Examples of boolean flags and options with values.

```php
'mail:send {--queue}'              // Boolean flag
'mail:send {--queue=default}'      // Option with default
'mail:send {--Q|queue}'            // Shortcut option
```

**Narrator:**  
"Options start with `--`. You can create switches, value-based options, and even define shortcuts using the pipe symbol."

**Visual:** Arrays in input.

```php
'mail:send {user*}'           // Multiple arguments
'mail:send {--id=*}'          // Multiple options
```

**Narrator:**  
"To accept multiple inputs, use the `*` character for arrays of arguments or options."

---

### **Chapter 6: Prompting for Input**
**Visual:** Developer uses `$this->ask()`, `$this->secret()`, `$this->confirm()`, and `$this->choice()`.

**Narrator:**  
"Need user input during execution? Laravel offers built-in prompts for text, passwords, confirmations, choices, and even autocomplete suggestions."

**Visual:** Example with `Laravel\Prompts\search`.

```php
use function Laravel\Prompts\search;

return [
    'user' => fn () => search(
        label: 'Search for a user:',
        placeholder: 'E.g. Taylor Otwell',
        options: fn ($value) => strlen($value) > 0
            ? User::where('name', 'like', "%{$value}%")->pluck('name', 'id')->all()
            : []
    ),
];
```

**Narrator:**  
"Advanced input handling? No problem! Use Laravel Prompts to create dynamic, searchable fields."

---

### **Chapter 7: Output & Progress Indicators**
**Visual:** Terminal shows success messages with `info()`, error with `error()`, and table output.

```php
$this->info('Success!');
$this->error('Oops!');
$this->table(['Name', 'Email'], $users);
```

**Narrator:**  
"Use `info`, `error`, `warn`, and `line` to format output. Display tabular data easily with the `table` method."

**Visual:** Progress bar shown in terminal while processing users.

```php
$users = $this->withProgressBar(User::all(), function (User $user) {
    $this->performTask($user);
});
```

**Narrator:**  
"Long-running processes? Show a progress bar to keep users informed!"

---

### **Chapter 8: Executing Commands Programmatically**
**Visual:** Controller code calling `Artisan::call()` and `Artisan::queue()`.

```php
Artisan::call('mail:send', ['user' => 1, '--queue' => 'default']);
Artisan::queue('mail:send', ['user' => 1])->onConnection('redis');
```

**Narrator:**  
"Call Artisan commands from routes or other commands using `Artisan::call()` or queue them for background processing."

---

### **Chapter 9: Signal Handling**
**Visual:** Long-running command traps `SIGTERM`.

```php
$this->trap(SIGTERM, fn () => $this->shouldKeepRunning = false);
while ($this->shouldKeepRunning) {
    // ...
}
```

**Narrator:**  
"Handle OS signals like `SIGTERM` to gracefully stop long-running commands."

---

### **Chapter 10: Customizing Stubs**
**Visual:** Terminal runs `php artisan stub:publish`.

**Narrator:**  
"Want to change how files are generated? Use `stub:publish` to customize templates used by Artisan's `make` commands."

---

### **Chapter 11: Events in Artisan**
**Visual:** Shows event listeners for `CommandStarting` and `CommandFinished`.

**Narrator:**  
"Artisan fires events like `CommandStarting` and `CommandFinished`, allowing you to hook into the lifecycle of commands."

---

### **Closing Scene**
**Visual:** Summary slide showing key points and GitHub link to Laravel docs.

**Narrator:**  
"That’s it! You now have everything you need to master Artisan in Laravel 12.x. Start automating, customizing, and optimizing your workflow today!"

**Text on Screen:**  
🔔 *Subscribe for more Laravel tutorials!*  
📄 [Laravel Docs](https://laravel.com/docs/artisan)

**[Outro Music Fades Out]**