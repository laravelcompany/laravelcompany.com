#!/usr/bin/env python3
import json
import os
import re
import unicodedata

posts_dir = os.path.join(os.path.dirname(__file__), "..", "posts")
blog_dir = os.path.join(os.path.dirname(__file__), "..", "src", "content", "blog")
public_dir = os.path.join(os.path.dirname(__file__), "..", "public")


def slugify(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[-\s]+", "-", text)
    return text.strip("-")


def strip_number_prefix(filename):
    return re.sub(r"^\d+-", "", filename)


# Build mapping from ORIGINAL numbered filenames to new slugs
old_to_new = {}
# Also build set of all correct slugs
all_slugs = set()

for f in os.listdir(posts_dir):
    if not f.endswith(".json") or f == "expand_posts.py":
        continue
    filepath = os.path.join(posts_dir, f)
    with open(filepath, "r") as fh:
        post = json.load(fh)
    new_slug = slugify(post["title"])
    all_slugs.add(new_slug)
    old_to_new[f] = new_slug
    old_to_new[f.replace(".json", "")] = new_slug
    stripped = strip_number_prefix(f)
    old_to_new[stripped] = new_slug
    old_to_new[stripped.replace(".json", "")] = new_slug

# Also add all current blog filenames (minus .json) as valid slugs
for f in os.listdir(blog_dir):
    if not f.endswith(".json"):
        continue
    all_slugs.add(f.replace(".json", ""))


def find_correct_slug(slug):
    """Find the correct slug for a given (possibly truncated/wrong) slug."""
    if slug in all_slugs:
        return slug
    # Try matching by prefix (for truncated slugs)
    matches = [s for s in all_slugs if s.startswith(slug)]
    if len(matches) == 1:
        return matches[0]
    return None


# Fix all blog JSON files
for f in sorted(os.listdir(blog_dir)):
    if not f.endswith(".json"):
        continue
    filepath = os.path.join(blog_dir, f)
    with open(filepath, "r") as fh:
        post = json.load(fh)

    modified = False
    content = post.get("content", "")

    if content:
        new_content = content

        # Fix 1: Replace broken .json href links
        def fix_json_link(match):
            href = match.group(1)
            basename = href.replace(".json", "")
            if basename in old_to_new:
                return f'href="/blog/{old_to_new[basename]}/"'
            stripped = strip_number_prefix(basename)
            if stripped in old_to_new:
                return f'href="/blog/{old_to_new[stripped]}/"'
            if href in old_to_new:
                return f'href="/blog/{old_to_new[href]}/"'
            return match.group(0)

        new_content = re.sub(r'href="([^"]+\.json)"', fix_json_link, new_content)

        # Fix 2: Replace broken /blog/<wrong-slug>/ links with correct slugs
        def fix_blog_link(match):
            slug = match.group(1)
            correct = find_correct_slug(slug)
            if correct and correct != slug:
                return f'href="/blog/{correct}/"'
            return match.group(0)

        new_content = re.sub(r'href="/blog/([^"/]+)/"', fix_blog_link, new_content)

        if new_content != content:
            post["content"] = new_content
            modified = True

    # Fix 3: Check avatar exists, use default if missing
    avatar = post.get("authorAvatar", "")
    if avatar:
        avatar_file = os.path.join(public_dir, avatar.lstrip("/"))
        if not os.path.exists(avatar_file):
            post["authorAvatar"] = "/avatar-stefan.jpg"
            modified = True

    if modified:
        with open(filepath, "w") as fh:
            json.dump(post, fh, indent=2)
        print(f"Fixed: {f}")

print("Done.")
