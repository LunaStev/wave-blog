#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import os
import re
import shutil
from email.utils import format_datetime
from html import escape
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "posts"
OUTPUT_FILE = ROOT / "src" / "app" / "blog-data.ts"
PUBLIC_DIR = ROOT / "public"
SITEMAP_FILE = PUBLIC_DIR / "sitemap.xml"
RSS_FILE = PUBLIC_DIR / "rss.xml"
ROBOTS_FILE = PUBLIC_DIR / "robots.txt"
POST_PAGES_DIR = PUBLIC_DIR / "post"
DEFAULT_SITE_URL = "https://wavefnd.github.io/waveblog"

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


def resolve_site_url() -> str:
    from_env = os.getenv("SITE_URL", "").strip()
    if from_env:
        return from_env.rstrip("/")

    repo = os.getenv("GITHUB_REPOSITORY", "").strip()
    owner = os.getenv("GITHUB_REPOSITORY_OWNER", "").strip()
    if repo and owner and "/" in repo:
        repo_name = repo.split("/", 1)[1]
        if repo_name.lower() == f"{owner.lower()}.github.io":
            return f"https://{owner}.github.io"
        return f"https://{owner}.github.io/{repo_name}"

    return DEFAULT_SITE_URL.rstrip("/")


def absolute_url(site_url: str, path: str) -> str:
    normalized = path if path.startswith("/") else f"/{path}"
    return f"{site_url}{normalized}"


def strip_html(text: str) -> str:
    return re.sub(r"<[^>]+>", "", text)


def to_rfc2822(raw_date: str) -> str:
    parsed = dt.datetime.fromisoformat(raw_date)
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=dt.timezone.utc)
    return format_datetime(parsed)


def write_seo_files(posts: list[dict]) -> None:
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    site_url = resolve_site_url()

    sitemap_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        "  <url>",
        f"    <loc>{escape(absolute_url(site_url, '/'))}</loc>",
        "    <changefreq>daily</changefreq>",
        "    <priority>1.0</priority>",
        "  </url>",
    ]

    for post in posts:
        post_url = absolute_url(site_url, f"/post/{post['slug']}")
        sitemap_lines.extend(
            [
                "  <url>",
                f"    <loc>{escape(post_url)}</loc>",
                f"    <lastmod>{escape(post['date'][:10])}</lastmod>",
                "    <changefreq>weekly</changefreq>",
                "    <priority>0.8</priority>",
                "  </url>",
            ]
        )

    sitemap_lines.append("</urlset>")
    SITEMAP_FILE.write_text("\n".join(sitemap_lines) + "\n", encoding="utf-8")

    rss_items = []
    for post in posts[:30]:
        post_url = absolute_url(site_url, f"/post/{post['slug']}")
        tags_xml = "".join(f"<category>{escape(tag)}</category>" for tag in post["tags"])
        plain_description = strip_html(post["description"]).strip()

        rss_items.append(
            "\n".join(
                [
                    "    <item>",
                    f"      <title>{escape(post['title'])}</title>",
                    f"      <link>{escape(post_url)}</link>",
                    f"      <guid>{escape(post_url)}</guid>",
                    f"      <pubDate>{escape(to_rfc2822(post['date']))}</pubDate>",
                    f"      <description>{escape(plain_description)}</description>",
                    f"      {tags_xml}" if tags_xml else "      ",
                    "    </item>",
                ]
            )
        )

    rss_body = "\n".join(
        [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<rss version="2.0">',
            "  <channel>",
            "    <title>Wave Programming Language Blog</title>",
            f"    <link>{escape(absolute_url(site_url, '/'))}</link>",
            "    <description>Official Wave programming language blog updates.</description>",
            "    <language>en</language>",
            *rss_items,
            "  </channel>",
            "</rss>",
            "",
        ]
    )
    RSS_FILE.write_text(rss_body, encoding="utf-8")

    robots_body = "\n".join(
        [
            "User-agent: *",
            "Allow: /",
            f"Sitemap: {absolute_url(site_url, '/sitemap.xml')}",
            "",
        ]
    )
    ROBOTS_FILE.write_text(robots_body, encoding="utf-8")


def render_static_post_html(post: dict, site_url: str) -> str:
    canonical = absolute_url(site_url, f"/post/{post['slug']}")
    home_url = absolute_url(site_url, "/")
    rss_url = absolute_url(site_url, "/rss.xml")
    favicon_url = absolute_url(site_url, "/favicon.ico")

    tag_items = "".join(f"<li>{escape(tag)}</li>" for tag in post["tags"])
    pinned_chip = '<span class="chip">PINNED</span>' if post["pinned"] else ""
    cover_html = (
        f'<img class="cover" src="{escape(post["cover"])}" alt="{escape(post["title"])}" loading="lazy">'
        if post["cover"]
        else ""
    )

    json_ld = json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post["title"],
            "description": post["description"],
            "datePublished": post["date"],
            "dateModified": post["date"],
            "mainEntityOfPage": canonical,
            "url": canonical,
            "image": post["cover"] or None,
            "keywords": post["tags"],
            "author": {"@type": "Organization", "name": "Wave Foundation"},
            "publisher": {"@type": "Organization", "name": "Wave Foundation"},
            "inLanguage": "en",
        },
        ensure_ascii=False,
    )

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(post["title"])} | Wave Programming Language Blog</title>
  <meta name="description" content="{escape(post["description"])}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta property="og:site_name" content="Wave Programming Language Blog">
  <meta property="og:type" content="article">
  <meta property="og:title" content="{escape(post["title"])}">
  <meta property="og:description" content="{escape(post["description"])}">
  <meta property="og:url" content="{escape(canonical)}">
  {'<meta property="og:image" content="' + escape(post["cover"]) + '">' if post["cover"] else ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{escape(post["title"])}">
  <meta name="twitter:description" content="{escape(post["description"])}">
  {'<meta name="twitter:image" content="' + escape(post["cover"]) + '">' if post["cover"] else ""}
  <link rel="canonical" href="{escape(canonical)}">
  <link rel="alternate" type="application/rss+xml" title="Wave Programming Language Blog RSS" href="{escape(rss_url)}">
  <link rel="icon" type="image/x-icon" href="{escape(favicon_url)}">
  <style>
    body {{ margin: 0; font-family: 'Roboto Mono', 'IBM Plex Mono', monospace; background: #0d0f12; color: #d9e1f2; }}
    .wrap {{ max-width: 900px; margin: 24px auto; padding: 0 10px; }}
    .top {{ margin-bottom: 10px; }}
    .top a {{ color: #8fb3ff; text-decoration: underline; }}
    article {{ border: 2px solid #6d7892; background: #151922; padding: 16px; box-shadow: 6px 6px 0 #000; }}
    .meta {{ display: flex; gap: 8px; align-items: center; color: #97a3be; font-size: 12px; }}
    .chip {{ border: 1px solid #72e5b8; color: #72e5b8; padding: 2px 6px; font-size: 11px; line-height: 1; }}
    h1 {{ margin: 10px 0 8px; font-size: 28px; line-height: 1.3; text-transform: uppercase; }}
    .desc {{ margin: 0 0 12px; color: #a9b8d7; }}
    .cover {{ width: 100%; border: 2px solid #3a4357; }}
    .tags {{ list-style: none; margin: 10px 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }}
    .tags li {{ border: 1px solid #3a4357; padding: 3px 7px; font-size: 12px; color: #a9b8d7; }}
    .content h1, .content h2, .content h3, .content h4 {{ text-transform: uppercase; font-size: 1em; margin-top: 1.3em; }}
    .content pre {{ overflow-x: auto; border: 2px solid #3a4357; background: #0b1019; padding: 12px; }}
    .content code {{ font-family: inherit; }}
    .content :not(pre) > code {{ border: 1px solid #3a4357; background: #121b29; padding: 1px 4px; }}
    .content img {{ max-width: 100%; border: 2px solid #3a4357; }}
    .content a {{ color: #8fb3ff; }}
    .content blockquote {{ border-left: 4px solid #72e5b8; padding: 4px 10px; margin-left: 0; background: #0f1c1d; color: #bce9d7; }}
  </style>
  <script type="application/ld+json">{json_ld}</script>
</head>
<body>
  <div class="wrap">
    <div class="top"><a href="{escape(home_url)}">← Wave Programming Language Blog</a></div>
    <article>
      <div class="meta"><span>{escape(post["dateDisplay"])}</span>{pinned_chip}</div>
      <h1>{escape(post["title"])}</h1>
      <p class="desc">{escape(post["description"])}</p>
      {cover_html}
      <ul class="tags">{tag_items}</ul>
      <section class="content">{post["contentHtml"]}</section>
    </article>
  </div>
</body>
</html>
"""


def write_static_post_pages(posts: list[dict]) -> None:
    site_url = resolve_site_url()
    if POST_PAGES_DIR.exists():
        shutil.rmtree(POST_PAGES_DIR)
    POST_PAGES_DIR.mkdir(parents=True, exist_ok=True)

    for post in posts:
        page_dir = POST_PAGES_DIR / post["slug"]
        page_dir.mkdir(parents=True, exist_ok=True)
        page_html = render_static_post_html(post, site_url)
        (page_dir / "index.html").write_text(page_html, encoding="utf-8")


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
    write_seo_files(posts)
    write_static_post_pages(posts)
    print(f"Generated {len(posts)} posts -> {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
