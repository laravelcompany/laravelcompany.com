import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const article=JSON.parse(fs.readFileSync('src/content/blog/fixing-google-oauth-session-leaks-laravel.json','utf8'));
test('session article uses lifetime in minutes and does not claim equivalent odds increase cleanup',()=>{
 assert.ok(article.content.includes("'lifetime' => 120"));assert.ok(!article.content.includes("'expiration' =>"));
 assert.ok(article.content.includes('both mean 2%'));assert.ok(article.content.includes('does not increase the default probability'));
 assert.ok(article.content.includes('https://github.com/laravel/framework/blob/12.x/src/Illuminate/Session/DatabaseSessionHandler.php'));
});
