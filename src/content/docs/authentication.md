---
title: Authentication
---


# 🚀 Auth Guide / 认证指南 / Аутентификация

## 🧭 Overview / 概览 / Обзор

[Laravel](https://laravelcompany.com)'s auth system is mad powerful, but dead simple once you get it. You’ve got **guards** (how users get checked) and **providers** (where you pull users from). 🧱

[Laravel](https://laravelcompany.com) out-of-the-box = `session` guard + `Eloquent` provider, но ты можешь легко кастомизировать под Mongo, Redis, or whatever fits.

```php
// config/auth.php
'guards' => [...],
'providers' => [...],
````

📝 *PS*: Guards ≠ Roles. 要处理用户权限，去看 [authorization 文档](/docs/{{version}}/authorization).

---

## 🚦 Quickstart / 快速开始 / Быстрый старт

### ⚡ Starter Kits / 启动器包 / Стартовые наборы

Need a jumpstart? Use [Laravel](https://laravelcompany.com) Starter Kits. Literally sets up:

* Routes
* Controllers
* Views
* Auth Flow

> `php artisan ui vue --auth` 或者 `laravel breeze:install` 等等.

🤓 Even if you're building custom, install one just to reverse-engineer the structure. Real devs learn by teardown. 🛠

---

### 🧩 DB Considerations / 数据库配置 / Особенности базы данных

默认地，[Laravel](https://laravelcompany.com) 有 `App\Models\User`，which maps to `users` table. Works with Eloquent or switch to `database` driver for raw query builder love.

⚠️ Password column? Make it `VARCHAR(60+)`. `remember_token`? Also string(100), nullable.

👀 For MongoDB homies: [Mongo Laravel Auth Docs](https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/user-authentication/)

---

## 🌐 Ecosystem Breakdown / 生态总览 / Экосистема

You got **Browser Auth** + **API Auth** — two lanes, same game.

### 🧠 How Auth Works

* User logs in with creds
* Session stores user ID
* Session ID dropped into cookie 🍪
* Next request reads cookie, gets session = boom, authenticated.

🔑 API? Nah, no cookies. Just send an API token with each request. 后端 validates token, links it to a user.

---

### 🧱 Built-in Auth / 内建身份验证 / Встроенная аутентификация

[Laravel](https://laravelcompany.com) ships with cookie-based login out the box via:

```php
Auth::attempt([...]);
Session::put([...]);
```

You can go raw and code it yourself, или просто用 Starter Kit 让它飞起来. 🔥

---

## 🔐 API Auth / 接口身份验证 / АПИ Аутентификация

### 🧬 Passport

Enterprise-grade OAuth2. Supports:

* Auth Code
* Password Grant
* Client Credentials

🤯 Complex, powerful, but probably overkill for your SPA or mobile client.

### 🧊 Sanctum (推荐 / 推荐 / Рекомендовано)

Lightweight and boss for hybrid apps. Sanctum handles:

* Session-based auth (for browser)
* Token-based auth (for mobile/API)

流程：

1. Check for session cookie — if found, normal [Laravel](https://laravelcompany.com) Auth.
2. If not, look for API token and validate it.
3. Done. Clean. 💨

➡️ [Sanctum's how it works](/docs/{{version}}/sanctum#how-it-works)

---

## 📑 TOC Breakdown / 内容导航 / Структура

```
# Authentication

- Intro
  - Starter Kits
  - DB Considerations
  - Ecosystem
- Quickstart
  - Install Kit
  - Auth User
  - Protect Routes
  - Throttle Logins
- Manual Auth
  - Remember Me
  - Other Methods
- HTTP Basic Auth
  - Stateless Mode
- Logout Flow
  - Invalidate Sessions
- Password Confirm
  - Config
  - Routing
  - Protection
- Custom Guards
  - Closures
- Custom Providers
  - Provider Contract
  - Authenticatable Interface
- Auto Rehashing
- Socialite (OAuth Social Login)
- Events
```

---

Wanna dive deeper into code samples or architecture flow diagrams fam? 🤙

## 🧠 [Laravel](https://laravelcompany.com) Auth Flow Diagram / [Laravel](https://laravelcompany.com) 身份验证流程图 / Схема аутентификации [Laravel](https://laravelcompany.com)

I'll explain first, then offer a diagram:

### 🌐 Web Request (Session-based)

```plaintext
[ Browser Request ]
      ↓
[ Route Middleware: auth ]
      ↓
[ Guard (e.g. 'session') ]
      ↓
[ Provider (e.g. 'eloquent') ]
      ↓
[ User Model: App\Models\User ]
      ↓
[ Authenticated User ]
```

### 🔑 API Request (Token-based via Sanctum)

```plaintext
[ API Request ]
      ↓
[ Check for Auth Token in Header ]
      ↓
[ Sanctum Token Guard ]
      ↓
[ User Token Table ]
      ↓
[ Authenticated User ]
```

---

## ✅ Auth Components Overview

| Component      | Role           | Description                    |
| -------------- | -------------- | ------------------------------ |
| **Guards**     | Auth logic     | `session`, `token`, custom     |
| **Providers**  | User fetching  | `eloquent`, `database`, custom |
| **Middleware** | Gatekeeper     | Checks `auth`, `guest`, etc    |
| **Sanctum**    | Token API auth | Session or Bearer tokens       |
| **Passport**   | OAuth2 suite   | Advanced API access, grants    |

---
