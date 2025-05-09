---
title: Artisan 
---

🚀 [Laravel](https://laravelcompany.com) Artisan CLI 控制台 | Консолька Artisan  

Yo devs, let’s break down the Artisan Console – your go-to tool for wrangling [Laravel](https://laravelcompany.com) from the command line like a backend wizard 🧙‍♂️  
直接上手，别废话了。Погнали!  

---

## 🎯 Introduction | 介绍 | Вступление  

* **REPL Mode (aka `tinker`)** — Fire up an interactive shell to mess around with your app in real time. Think of it like a safe sandbox to test anything.  
  中文说：命令行调试超方便  
  На русском: "Живой" доступ к [Laravel](https://laravelcompany.com)-приложению  
* **Common Built-in Commands**  
  - `php artisan make:model ModelName` — Generate Eloquent models 📄   
  - `php artisan migrate` — Run database migrations 🗃️   
  - `php artisan route:list` — View registered routes 🗺️   
  - `php artisan config:clear` — Clear configuration cache 🧹   
  - `php artisan queue:work` — Process queued jobs ⏳   

---

## ⚒️ Building Custom Commands | 自定义命令 | Команды на заказ  

### 📦 Generating Command Skeletons  

Use `php artisan make:command CoolCommand` to bootstrap a new command.  
像这样就能开整：`php artisan make:command`  
Русский стиль: Создай основу, а дальше flesh it out.  

### 🧱 Command Structure  

Your command = `signature` + `handle()` logic.  
[Laravel](https://laravelcompany.com) делает всю магию вокруг этого.  
中文说：结构清晰、扩展方便。  

### 🤐 Closure Commands  

Quick-n-dirty inline CLI code via `Artisan::command()` — when you cba to make a full class.  
Russian devs call it: "лень писать файлы? юзай замыкания"  

### 🧼 Isolatable Commands  

Prevent race conditions – [Laravel](https://laravelcompany.com) 10+ supports `Isolatable` via `--isolated` flag .  
中文关键：防止并发运行命令崩溃。  
Perfect when using crons 或 background workers.  

---

## 🧹 Common Maintenance Commands | 维护命令 | Команды обслуживания  

### 🧹 Cache Optimization  

- `php artisan config:clear` — Clear config cache 🧽   
- `php artisan cache:clear` — Flush application cache 🧼   
- `php artisan view:clear` — Remove compiled Blade templates 🗑️   
- `php artisan route:clear` — Reset route cache 🔁   
- `php artisan optimize:clear` — All-in-one cache clear 🚨   

### 🔄 Application Lifecycle  

- `php artisan down` — Put app in maintenance mode 🛑   
- `php artisan up` — Bring app back online ✅   
- `php artisan serve` — Start local dev server 🌐   

---

## ⛓️ Input Handling | 输入参数 | Ввод  

### 🔡 Arguments  

CLI required values, like `php artisan send:mail user@example.com`  
中文：必须参数  
На русском — обязательные штуки  

### ⚙️ Options  

Optional flags: `--force`, `--queue=high`  
Like CLI toppings 🍕  
不用传也能跑，Русским: "необязательные параметры"  

### 🧵 Input Arrays  

Use `argument*` to grab multiple values at once.  
中文例子：多 ID 一起传  
Типа `php artisan cleanup users 1 2 3`  

### 📝 Input Descriptions  

Describe your args/options so devs ain’t lost reading `--help`.  
Рус: поясняй как человек, а не робот.  
中文：清晰描述，方便合作。  

### 🔍 Prompting for Missing Input  

No input? [Laravel](https://laravelcompany.com) gotchu. It’ll auto-ask.  
中文：没输？系统自动问  
Рус: "Диалоговое окно в терминале? Да, детка."  

---

## 🔁 Command I/O | 输入输出管理 | Ввод/Вывод  

### 📥 Getting Input  

`$this->argument('name')` or `$this->option('type')` — pull in that sweet user data.  
中文简单：直接拿值  

### 🙋 Prompting  

Use `$this->ask()`, `$this->choice()` etc.  
动态问用户要啥。  
Русским: интерактивность — наш стиль.  

### 📤 Writing Output  

`$this->info()`, `$this->error()`  
Make that console talk. 📣  
中文也能输出彩色提示。  

---

## 🧬 Registering Commands | 注册命令 | Регистрация  

Pop your custom command into `app/Console/Kernel.php` under `$commands`.  
中文直译：手动挂上去。  
Русским: без этого Artisan про команду не узнает.  

---

## 🤖 Run Commands in Code | 程序里跑命令 | Запуск внутри PHP  

### 🧩 From Code to CLI  

Use `Artisan::call('your:command')`  
Chain logic from one command to another 💥  
中文说：代码里调命令超方便。  

---

## 🧠 Signal Handling | 信号处理 | Сигналы  

Handle `SIGINT`, `SIGTERM` like a boss.  
Useful when someone Ctrl+C’s your artisan job.  
中文重点：优雅终止任务  
Рус: надо ловить сигналы и убирать за собой  

---

## 🧱 Stub Customization | 自定义模板 | Шаблоны  

Modify command stubs in `stubs/` — tweak structure to fit your style.  
中文：改下模板，生成代码更贴心  
Рус: шаблоны = кастомные заготовки  

---

## 📡 Events | 事件监听 | События  

[Laravel](https://laravelcompany.com) triggers events for `ArtisanStarting`, `CommandFinished` etc.  
中文：能 hook 的点都能监听  
Русским: подписка на события для твоих тулзов и логов  

---

## 🧪 Bonus: Debugging & Testing Commands | Отладка | Debugging  

- `php artisan list` — Show all registered commands 📋   
- `php artisan help command:name` — Get usage details ℹ️   
- `php artisan test` — Run PHPUnit tests 🧪   

---

**Pro Tip**: Use `php artisan --version` to check your [Laravel](https://laravelcompany.com) version before running critical commands! 📌  
中文：版本差异可能导致问题，动手前先确认！  
Рус: версия важна — не сломай продакшн 😱  

---  
*本指南基于[Laravel](https://laravelcompany.com) 11+特性编写，部分功能需升级框架以支持*