#!/usr/bin/env python3
import json
import os
import re
import unicodedata

posts_dir = os.path.join(os.path.dirname(__file__), "..", "posts")
blog_dir = os.path.join(os.path.dirname(__file__), "..", "src", "content", "blog")


def slugify(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[-\s]+", "-", text)
    return text.strip("-")


def strip_number_prefix(filename):
    return re.sub(r"^\d+-", "", filename)


json_files = sorted(
    f for f in os.listdir(posts_dir) if f.endswith(".json") and f != "expand_posts.py"
)

expansion_data = {}
script_path = os.path.join(posts_dir, "expand_posts.py")
with open(script_path, "r") as f:
    content = f.read()

exec_globals = {"__builtins__": __builtins__}
exec(content, exec_globals)
expansions = exec_globals.get("expansions", {})

for json_file in json_files:
    base = json_file[:-5]
    filepath = os.path.join(posts_dir, json_file)

    with open(filepath, "r") as f:
        post = json.load(f)

    title = post["title"]
    slug = slugify(title)

    if json_file in expansions:
        exp = expansions[json_file]
        sections = exp.get("sections", [])
        related = exp.get("related", [])

        content_html = post["content"]
        for section in sections:
            content_html += "\n" + section

        if related:
            content_html += "\n<h2>Related Posts</h2>\n<ul>"
            for rel_title, rel_file in related:
                rel_slug = rel_file.replace(".json", "")
                rel_slug = strip_number_prefix(rel_slug)
                content_html += (
                    f'\n<li><a href="/blog/{rel_slug}/">{rel_title}</a></li>'
                )
            content_html += "\n</ul>"

        post["content"] = content_html

    new_filename = f"{slug}.json"
    new_path = os.path.join(blog_dir, new_filename)

    with open(new_path, "w") as f:
        json.dump(post, f, indent=2)

    old_name = strip_number_prefix(json_file).replace(".json", "")
    print(f"{json_file:50s} -> {new_filename}")

print(f"\nDone! {len(json_files)} posts converted to {blog_dir}")
