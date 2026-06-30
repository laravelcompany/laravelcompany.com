---
title: Upgrading from 13.6.1
author: robdesilets
date: 2024-12-01
category: Laravel
views: 1100
replies: 6
---

> Original forum thread content:
> "Hi All, I did my daily "composer update" today and something caught my eye: Upgrading laravel/framework (v13.16.1 => 13.x-dev 2107d3d): Extracting archive Usually it will go from a version to a [higher] version not some weird dev branch. To my knowledge I have not changed anything in my environment that would cause me to grab a developer branch and was wondering wh"

## Diagnosing and Fixing Unexpected Composer Dev Branch Upgrades

robdesilets's surprise at Composer pulling `13.x-dev` instead of a tagged release (like `13.16.1` or `13.17.0`) is a common issue with dependency management. This guide covers why it happens and how to lock dependencies to stable releases.

### Understanding Composer Version Constraints

Composer resolves dependencies using flexible semantic versioning rules. The key modifier in `composer.json` determines what gets installed:

**Tilde (~)** — Most common, recommended for production:
```json
"laravel/framework": "~13.16.1"
```
Allows updates to any `13.16.x` version. Does NOT upgrade to `13.17.0`.

**Caret (^)** — Standard for libraries:
```json
"laravel/framework": "^13.16"
```
Allows updates to any `13.x.x` version, including `13.17.0`, `13.18.1`, etc., but not `14.0.0`.

**Exact version** — Maximum stability:
```json
"laravel/framework": "13.16.1"
```
Only use in `composer.lock`. Never in library `composer.json`.

**Wildcard (*)** or **dev** — Avoid in production:
```json
"laravel/framework": "13.*"
```

### Why Dev Branches Get Installed

If Composer pulled `13.x-dev`, your `composer.json` constraint likely allows development branches:

**Minimum-stability Setting**
```json
"minimum-stability": "dev"
```
This tells Composer to consider development branches if stability requirements are met.

**Prefer-stable**
Even with `minimum-stability: stable`, if dependencies require dev branches, Composer may pull them. The `prefer-stable` flag hints to prefer stable releases:
```json
"prefer-stable": true
```

**Conflicting Constraints**
Another dependency might require `13.x-dev`:
```bash
composer why-not laravel/framework 13.16.1
```

This shows which package is preventing a stable version.

### Investigating the Cause

Run these commands to understand what's happening:

**Check current constraint:**
```bash
composer show laravel/framework
```
Look for the `versions` and `description` lines.

**Find composer.json sources:**
```bash
grep -r "laravel/framework" .
```

**Check replaced packages:**
```bash
composer depends laravel/framework
```

**Look for minimum-stability:**
```bash
composer show -s | grep minimum-stability
```

**See why a version was chosen:**
```bash
composer depends --tree laravel/framework
composer update --dry-run laravel/framework
```

### Common Root Causes

**1. Laravel Installer or Starter Kits**
Some Laravel installer scripts or starter kits set minimum-stability to "dev" to pull in unreleased features.

**2. Package Conflicts**
A package you recently updated might not yet support `13.17.0` and requires `13.x-dev`:
```json
"laravel/framework": "13.x-dev as 13.16.1"
```

**3. Minimum-stability Inherited**
A dependency's composer.json overrides your configuration.

**4. Manual Composer Config**
You or a tool might have run:
```bash
composer config minimum-stability dev
```

### How to Lock to Stable Releases

**Option 1: Use Caret or Tilde with Minimum-stability Stable**
```json
{
    "require": {
        "laravel/framework": "^13.16.1"
    },
    "minimum-stability": "stable",
    "prefer-stable": true
}
```

**Option 2: Pin to a Specific Version**
For maximum control:
```json
"laravel/framework": "13.16.1"
```

Then run:
```bash
composer update --lock
```

**Option 3: Set Platform Constraints**
```json
"config": {
    "platform": {
        "php": "8.2.0"
    }
}
```

Prevents Composer from trying to install packages requiring newer PHP.

**Option 4: Use Composer's Lock File**
If you have a working `composer.lock`, restore the known-good state:
```bash
git checkout composer.lock
composer install
```

**Option 5: Exclude Specific Channels**
```bash
composer update --prefer-stable --prefer-lowest
```

### Handling Composer Update Behavior

**Dry Run Before Updating**
```bash
composer update --dry-run
```

Shows what would be installed without making changes.

**Update Singe Package**
Don't `composer update` everything; target specific packages:
```bash
composer update laravel/framework --with-all-dependencies
```

**Ignore Stable Updates**
For production, consider:
```bash
composer update --no-dev --prefer-stable
```

### Laravel Version Model

Laravel follows a specific release model:
- **13.x** — Major version (Laravel 13)
- **13.16.1** — Patch release (within 13.x)
- **13.x-dev** — Development branch for next 13.x release

If you're happy on `13.16.1`, stick to it until you're ready for `13.17.0`.

### Preventing Future Surprises

**1. Pin Versions in composer.json**
```json
"laravel/framework": "^13.16"
```

**2. Review composer.lock Changes**
Before committing, inspect `composer.lock` diffs. Major version jumps should be intentional.

**3. Use Dependabot or Renovate**
Configure bots to only open PRs for patch/minor updates, not dev branches.

**4. Lock Minimum-stability**
```json
"minimum-stability": "stable",
"prefer-stable": true
```

**5. Regular Composer Audit**
```bash
composer audit
composer update --dry-run
```

### When Dev Branches Are Appropriate

Development branches aren't inherently bad:
- Testing upcoming features before release
- Bug fixes that haven't been tagged yet
- Contributing to package development

For production applications, stick to tagged stable releases.

### Conclusion

The unexpected dev branch upgrade is a Composer configuration issue. Check your `minimum-stability`, `prefer-stable`, and the constraints on `laravel/framework` in your `composer.json`. Lock to `^13.16.1` or `~13.16.1` and always preview updates with `--dry-run` before applying them.

If you're unsure why a dependency was chosen, `composer why-not` and `composer depends` are your best friends.

---

## Related Posts

- [Laravel 13 + Sanctum + Fortify: API Routes Redirecting](20-laravel-13-sanctum-fortify-api-routes-redirecting.md) — Deprecation and version compatibility concerns.
- [Get Inserted Id from DB::insert()](01-get-inserted-id-from-dbinsert.md) — Performance upgrades through framework updates.
- [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) — Using AI assistants to help manage dependencies and update paths.
