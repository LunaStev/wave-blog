#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import re
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "posts"
OUTPUT_FILE = ROOT / "src" / "app" / "blog-data.ts"

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)
FRONTMATTER_KEY_RE = re.compile(r"^([A-Za-z0-9_-]+):\s*(.*)$")
DATE_FORMATS = ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d")


def parse_inline_list(value: str) -> list[str]:
    value = value.strip()
    if not (value.startswith("[") and value.endswith("]")):
        return []

    try:
        parsed = json.loads(value)
        if isinstance(parsed, list):
            return [str(item).strip() for item in parsed if str(item).strip()]
    except json.JSONDecodeError:
        pass

    inner = value[1:-1].strip()
    if not inner:
        return []

    return [
        part.strip().strip("\"'").strip()
        for part in inner.split(",")
        if part.strip().strip("\"'").strip()
    ]


def parse_frontmatter_block(frontmatter_text: str) -> dict:
    parsed: dict = {}
    lines = frontmatter_text.splitlines()
    index = 0

    while index < len(lines):
        line = lines[index].strip()
        index += 1
        if not line:
            continue

        matched = FRONTMATTER_KEY_RE.match(line)
        if not matched:
            continue

        key, raw_value = matched.groups()
        value = raw_value.strip()
        if not value:
            parsed[key] = ""
            continue

        if value.startswith("["):
            collected = value
            while not collected.rstrip().endswith("]") and index < len(lines):
                collected += lines[index].strip()
                index += 1
            parsed[key] = parse_inline_list(collected)
            continue

        if value[0] in ("\"", "'"):
            quote = value[0]
            collected = value[1:]
            while index < len(lines):
                if collected.endswith(quote):
                    collected = collected[:-1]
                    break
                collected += " " + lines[index].strip()
                index += 1

            if collected.endswith(quote):
                collected = collected[:-1]

            parsed[key] = collected
            continue

        parsed[key] = value

    return parsed


def extract_frontmatter(raw_text: str) -> tuple[dict, str]:
    normalized = raw_text.replace("\r\n", "\n")
    matched = FRONTMATTER_RE.match(normalized)
    if not matched:
        return {}, normalized

    frontmatter_text, body = matched.groups()
    return parse_frontmatter_block(frontmatter_text), body


def parse_date(raw_value: str | None, slug: str) -> dt.datetime:
    if raw_value:
        text = str(raw_value).strip()
        for date_format in DATE_FORMATS:
            try:
                return dt.datetime.strptime(text, date_format)
            except ValueError:
                continue

    date_part = slug[:10]
    try:
        return dt.datetime.strptime(date_part, "%Y-%m-%d")
    except ValueError:
        return dt.datetime.min


def normalize_tags(raw_tags) -> list[str]:
    if isinstance(raw_tags, list):
        return [str(item).strip() for item in raw_tags if str(item).strip()]
    return []


def parse_pinned(raw_value) -> bool:
    if isinstance(raw_value, bool):
        return raw_value

    if raw_value is None:
        return False

    text = str(raw_value).strip().lower()
    return text in {"true", "1", "yes", "y", "on"}


def make_description(raw_description: str | None, body: str) -> str:
    if raw_description:
        compact = " ".join(str(raw_description).split())
        if compact:
            return compact

    no_code = re.sub(r"```.*?```", "", body, flags=re.DOTALL)
    no_md = re.sub(r"[>#*_`\[\]()]", "", no_code)
    compact = " ".join(no_md.split())
    return compact[:180].strip()


def load_posts() -> list[dict]:
    md_converter = markdown.Markdown(
        extensions=["extra", "fenced_code", "tables", "sane_lists", "md_in_html"],
        output_format="html5",
    )

    posts: list[dict] = []
    for source_path in sorted(CONTENT_DIR.glob("*.md")):
        raw_text = source_path.read_text(encoding="utf-8")
        frontmatter, body = extract_frontmatter(raw_text)

        slug = source_path.stem
        title = str(frontmatter.get("title") or slug.replace("-", " ")).strip()
        post_date = parse_date(frontmatter.get("date"), slug)
        date_display = post_date.strftime("%Y-%m-%d") if post_date != dt.datetime.min else "Unknown"
        tags = normalize_tags(frontmatter.get("tags"))
        pinned = parse_pinned(frontmatter.get("pinned"))
        cover = str(frontmatter.get("cover") or "").strip()
        description = make_description(frontmatter.get("description"), body)
        content_html = md_converter.convert(body)
        md_converter.reset()

        posts.append(
            {
                "slug": slug,
                "title": title,
                "date": post_date.isoformat(),
                "dateDisplay": date_display,
                "description": description,
                "tags": tags,
                "pinned": pinned,
                "cover": cover,
                "contentHtml": content_html,
            }
        )

    posts.sort(key=lambda item: (1 if item["pinned"] else 0, item["date"]), reverse=True)
    return posts


def write_typescript(posts: list[dict]) -> None:
    payload = json.dumps(posts, ensure_ascii=False, indent=2)
    output = f"""// Auto-generated by scripts/generate_blog_data.py. Do not edit manually.

export interface BlogPost {{
  slug: string;
  title: string;
  date: string;
  dateDisplay: string;
  description: string;
  tags: string[];
  pinned: boolean;
  cover: string;
  contentHtml: string;
}}

export const BLOG_POSTS: BlogPost[] = {payload};

export const BLOG_POSTS_BY_SLUG = new Map(BLOG_POSTS.map((post) => [post.slug, post]));
"""
    OUTPUT_FILE.write_text(output, encoding="utf-8")


def main() -> None:
    posts = load_posts()
    write_typescript(posts)
    print(f"Generated {len(posts)} posts -> {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
