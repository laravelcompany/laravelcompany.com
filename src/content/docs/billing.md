---
title: Billing
---

# 🧾 Laravel 12.x Billing 指南 | 订阅系统全解析 | Биллинг в Laravel  

Yo devs, let’s break down Laravel 12.x’s billing stack — whether you’re building SaaS, membership sites, or paywalled apps. This guide covers **Stripe/Paddle integration**, **subscription flows**, and **invoice magic** 🔥  

---

## 💳 Laravel Cashier 简介 | Основы Cashier  

Laravel Cashier 提供了 **Fluent API 接口** 对接 [Stripe](https://laravelcompany.com) 和 [Paddle](https://laravelcompany.com) 的订阅付费服务，自动处理：  
- 订阅创建/取消 ✅  
- 试用期管理 ⏳  
- 发票生成 🧾  
- Webhook 事件监听 🎯  

```bash  
# 安装 Stripe 支持  
composer require laravel/cashier  
```  

中文：开箱即用，告别手写支付逻辑  
Русский: "все работает из коробки, кодить меньше — жить лучше"  

---

## 🔄 核心功能 | Основные фичи  

### 1️⃣ 创建订阅 | Создание подписки  
```php  
use App\Models\User;  

$user = User::find(1);  
$subscription = $user->newSubscription('main', 'price_monthly')->create();  
```  

支持多订阅计划绑定到同一用户 👌  
中文：比如同时购买「基础版」和「高级插件」  
Русский: пользователь может иметь несколько планов  

### 2️⃣ 计划切换 | Смена тарифов  
```php  
$subscription->swap('price_annual');  
```  

自动处理 proration（按比例计费）  

### 3️⃣ 试用期 | Trial Periods  
```php  
$user->newSubscription('main', 'price_monthly')  
     ->trialDays(14)  
     ->create();  
```  

中文：试用结束自动扣费  
Рус: по истечении триала — списание средств  

---

## 📋 发票与支付 | Инвойсы и платежи  

### 自动生成发票 | Автоматическая генерация инвойсов  
```php  
$invoice = $user->invoices()->first();  
return $invoice->download(); // PDF 下载  
```  

支持自定义发票模板   

### 一次性支付 | Единоразовые платежи  
```php  
$user->charge(1000, 'price_one_time');  
```  

中文：适用于附加功能购买  
Рус: для разовых покупок внутри подписки  

---

## 🛑 取消与恢复订阅 | Отмена и восстановление  

```php  
$subscription->cancel(); // 立即取消  
$subscription->cancel()->atPeriodEnd(); // 到周期结束取消  

$subscription->resume(); // 恢复订阅  
```  

中文：用户反悔时救星  
Рус: пользователь передумал? Восстанови подписку  

---

## 📦 Billing Plans 管理 | Управление тарифами  

通过 API 创建和管理计划：  
```php  
use Laravel\Cashier\Plan;  

Plan::create([  
    'name' => 'Pro Plan',  
    'price' => 19.99,  
    'interval' => 'month',  
]);  
```  

中文：动态调整价格/周期  
Рус: гибкое управление ценой и интервалом  

---

## 📦 自定义模型 | Кастомные модели  

任何对象都可以参与 billing：  
```php  
use Laravel\Cashier\Billable;  

class Team implements Billable {  
    use Billable;  
}  
```  

中文：团队/项目级别付费？直接绑定模型   
Рус: платите за команду или проект — любые сущности  

---

## 📬 Webhook 事件 | События webhook  

监听支付成功/失败事件：  
```php  
Route::post('/cashier/webhook', function () {  
    return app(\Laravel\Cashier\Http\Controllers\WebhookController::class)->handle();  
});  
```  

中文：自动处理退款、账单更新  
Рус: отслеживайте возвраты и обновления платежей  

---

## 🧪 调试技巧 | Советы по отладке  

- 使用 `php artisan cashier:table users` 生成 billing 字段   
- 测试 Stripe webhook: `php artisan cashier:webhook`  
- 查看发票：`$user->invoices()`  

中文：调试时开启日志跟踪  
Рус: логируйте все события для отладки  

---

**Pro Tip**: 测试环境用 `Cashier::fake()` 模拟支付流程，避免真实扣款   
中文：自动化测试必备  
Рус: тестирование без реальных денег  

---  
*本文基于 Laravel Cashier 12.x 编写，部分功能需 Stripe/Paddle API 密钥支持*