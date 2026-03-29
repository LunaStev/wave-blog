#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content', 'posts');
const OUTPUT_FILE = path.join(ROOT, 'src', 'app', 'blog-data.ts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const RSS_FILE = path.join(PUBLIC_DIR, 'rss.xml');
const ROBOTS_FILE = path.join(PUBLIC_DIR, 'robots.txt');
const POST_PAGES_DIR = path.join(PUBLIC_DIR, 'post');
const DEFAULT_SITE_URL = 'https://wavefnd.github.io/waveblog';

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
const FRONTMATTER_KEY_RE = /^([A-Za-z0-9_-]+):\s*(.*)$/;

marked.setOptions({
  gfm: true,
  breaks: false,
});

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function parseInlineList(value) {
  const text = value.trim();
  if (!(text.startsWith('[') && text.endsWith(']'))) {
    return [];
  }

  try {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter(Boolean);
    }
  } catch {
    // ignore and fallback
  }

  const inner = text.slice(1, -1).trim();
  if (!inner) {
    return [];
  }

  return inner
    .split(',')
    .map((part) => part.trim().replace(/^['"]|['"]$/g, '').trim())
    .filter(Boolean);
}

function parseFrontmatterBlock(frontmatterText) {
  const parsed = {};
  const lines = frontmatterText.split('\n');
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    index += 1;
    if (!line) {
      continue;
    }

    const matched = line.match(FRONTMATTER_KEY_RE);
    if (!matched) {
      continue;
    }

    const key = matched[1];
    let value = matched[2].trim();

    if (!value) {
      parsed[key] = '';
      continue;
    }

    if (value.startsWith('[')) {
      let collected = value;
      while (!collected.trimEnd().endsWith(']') && index < lines.length) {
        collected += lines[index].trim();
        index += 1;
      }
      parsed[key] = parseInlineList(collected);
      continue;
    }

    if (value.startsWith('"') || value.startsWith("'")) {
      const quote = value[0];
      let collected = value.slice(1);
      while (index < lines.length) {
        if (collected.endsWith(quote)) {
          collected = collected.slice(0, -1);
          break;
        }
        collected += ` ${lines[index].trim()}`;
        index += 1;
      }

      if (collected.endsWith(quote)) {
        collected = collected.slice(0, -1);
      }

      parsed[key] = collected;
      continue;
    }

    parsed[key] = value;
  }

  return parsed;
}

function extractFrontmatter(rawText) {
  const normalized = rawText.replace(/\r\n/g, '\n');
  const matched = normalized.match(FRONTMATTER_RE);
  if (!matched) {
    return [{}, normalized];
  }

  const frontmatter = parseFrontmatterBlock(matched[1]);
  return [frontmatter, matched[2]];
}

function parseDateInfo(rawValue, slug) {
  if (rawValue != null) {
    const text = String(rawValue).trim();
    const m = text.match(/^(\d{4}-\d{2}-\d{2})(?:[ T](\d{2}:\d{2}:\d{2}))?$/);
    if (m) {
      const day = m[1];
      const time = m[2] ?? '00:00:00';
      return { iso: `${day}T${time}`, display: day };
    }
  }

  const day = slug.slice(0, 10);
  if (/^\d{4}-\d{2}-\d{2}$/.test(day)) {
    return { iso: `${day}T00:00:00`, display: day };
  }

  return { iso: '0000-01-01T00:00:00', display: 'Unknown' };
}

function parsePinned(rawValue) {
  if (typeof rawValue === 'boolean') {
    return rawValue;
  }
  if (rawValue == null) {
    return false;
  }
  const text = String(rawValue).trim().toLowerCase();
  return ['true', '1', 'yes', 'y', 'on'].includes(text);
}

function makeDescription(rawDescription, body) {
  if (rawDescription != null) {
    const compact = String(rawDescription).replace(/\s+/g, ' ').trim();
    if (compact) {
      return compact;
    }
  }

  const noCode = body.replace(/```[\s\S]*?```/g, '');
  const noMd = noCode.replace(/[>#*_`\[\]()]/g, '');
  const compact = noMd.replace(/\s+/g, ' ').trim();
  return compact.slice(0, 180);
}

function resolveSiteUrl() {
  const fromEnv = (process.env.SITE_URL ?? '').trim();
  if (fromEnv) {
    return fromEnv.replace(/\/+$/, '');
  }

  const cfPagesUrl = (process.env.CF_PAGES_URL ?? '').trim();
  if (cfPagesUrl) {
    if (cfPagesUrl.startsWith('http://') || cfPagesUrl.startsWith('https://')) {
      return cfPagesUrl.replace(/\/+$/, '');
    }
    return `https://${cfPagesUrl.replace(/\/+$/, '')}`;
  }

  const repo = (process.env.GITHUB_REPOSITORY ?? '').trim();
  const owner = (process.env.GITHUB_REPOSITORY_OWNER ?? '').trim();
  if (repo && owner && repo.includes('/')) {
    const repoName = repo.split('/')[1];
    if (repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
      return `https://${owner}.github.io`;
    }
    return `https://${owner}.github.io/${repoName}`;
  }

  return DEFAULT_SITE_URL;
}

function absoluteUrl(siteUrl, p) {
  const normalized = p.startsWith('/') ? p : `/${p}`;
  return `${siteUrl}${normalized}`;
}

function stripHtml(text) {
  return text.replace(/<[^>]+>/g, '');
}

function toRfc2822(rawDate) {
  const candidate = rawDate.includes('T') ? `${rawDate}Z` : rawDate;
  const parsed = new Date(candidate);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toUTCString();
  }
  return parsed.toUTCString();
}

function loadPosts() {
  const entries = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort();

  const posts = [];
  for (const fileName of entries) {
    const sourcePath = path.join(CONTENT_DIR, fileName);
    const rawText = fs.readFileSync(sourcePath, 'utf-8');
    const [frontmatter, body] = extractFrontmatter(rawText);

    const slug = path.basename(fileName, '.md');
    const title = String(frontmatter.title ?? slug.replaceAll('-', ' ')).trim();
    const dateInfo = parseDateInfo(frontmatter.date, slug);
    const tags = Array.isArray(frontmatter.tags)
      ? frontmatter.tags.map((item) => String(item).trim()).filter(Boolean)
      : [];
    const pinned = parsePinned(frontmatter.pinned);
    const cover = String(frontmatter.cover ?? '').trim();
    const description = makeDescription(frontmatter.description, body);
    const contentHtml = marked.parse(body);

    posts.push({
      slug,
      title,
      date: dateInfo.iso,
      dateDisplay: dateInfo.display,
      description,
      tags,
      pinned,
      cover,
      contentHtml,
    });
  }

  posts.sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return a.pinned ? -1 : 1;
    }
    return b.date.localeCompare(a.date);
  });

  return posts;
}

function writeTypeScript(posts) {
  const payload = JSON.stringify(posts, null, 2);
  const output = `// Auto-generated by scripts/generate_blog_data.mjs. Do not edit manually.\n\nexport interface BlogPost {\n  slug: string;\n  title: string;\n  date: string;\n  dateDisplay: string;\n  description: string;\n  tags: string[];\n  pinned: boolean;\n  cover: string;\n  contentHtml: string;\n}\n\nexport const BLOG_POSTS: BlogPost[] = ${payload};\n\nexport const BLOG_POSTS_BY_SLUG = new Map(BLOG_POSTS.map((post) => [post.slug, post]));\n`;

  ensureDir(path.dirname(OUTPUT_FILE));
  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
}

function writeSeoFiles(posts) {
  ensureDir(PUBLIC_DIR);
  const siteUrl = resolveSiteUrl();

  const sitemapLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url>',
    `    <loc>${escapeHtml(absoluteUrl(siteUrl, '/'))}</loc>`,
    '    <changefreq>daily</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>',
  ];

  for (const post of posts) {
    const postUrl = absoluteUrl(siteUrl, `/post/${post.slug}`);
    sitemapLines.push('  <url>');
    sitemapLines.push(`    <loc>${escapeHtml(postUrl)}</loc>`);
    sitemapLines.push(`    <lastmod>${escapeHtml(post.date.slice(0, 10))}</lastmod>`);
    sitemapLines.push('    <changefreq>weekly</changefreq>');
    sitemapLines.push('    <priority>0.8</priority>');
    sitemapLines.push('  </url>');
  }

  sitemapLines.push('</urlset>');
  fs.writeFileSync(SITEMAP_FILE, `${sitemapLines.join('\n')}\n`, 'utf-8');

  const rssItems = posts.slice(0, 30).map((post) => {
    const postUrl = absoluteUrl(siteUrl, `/post/${post.slug}`);
    const tagsXml = post.tags.map((tag) => `<category>${escapeHtml(tag)}</category>`).join('');
    const plainDescription = stripHtml(post.description).trim();

    return [
      '    <item>',
      `      <title>${escapeHtml(post.title)}</title>`,
      `      <link>${escapeHtml(postUrl)}</link>`,
      `      <guid>${escapeHtml(postUrl)}</guid>`,
      `      <pubDate>${escapeHtml(toRfc2822(post.date))}</pubDate>`,
      `      <description>${escapeHtml(plainDescription)}</description>`,
      tagsXml ? `      ${tagsXml}` : '',
      '    </item>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  const rssBody = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    '    <title>Wave Programming Language Blog</title>',
    `    <link>${escapeHtml(absoluteUrl(siteUrl, '/'))}</link>`,
    '    <description>Official Wave programming language blog updates.</description>',
    '    <language>en</language>',
    ...rssItems,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
  fs.writeFileSync(RSS_FILE, rssBody, 'utf-8');

  const robotsBody = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${absoluteUrl(siteUrl, '/sitemap.xml')}`,
    '',
  ].join('\n');
  fs.writeFileSync(ROBOTS_FILE, robotsBody, 'utf-8');
}

function renderStaticPostHtml(post, siteUrl) {
  const canonical = absoluteUrl(siteUrl, `/post/${post.slug}`);
  const homeUrl = absoluteUrl(siteUrl, '/');
  const rssUrl = absoluteUrl(siteUrl, '/rss.xml');
  const faviconUrl = absoluteUrl(siteUrl, '/favicon.ico');

  const tagItems = post.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('');
  const pinnedChip = post.pinned ? '<span class="chip">PINNED</span>' : '';
  const coverHtml = post.cover
    ? `<img class="cover" src="${escapeHtml(post.cover)}" alt="${escapeHtml(post.title)}" loading="lazy">`
    : '';

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonical,
    url: canonical,
    image: post.cover || undefined,
    keywords: post.tags,
    author: { '@type': 'Organization', name: 'Wave Foundation' },
    publisher: { '@type': 'Organization', name: 'Wave Foundation' },
    inLanguage: 'en',
  });

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(post.title)} | Wave Programming Language Blog</title>
  <meta name="description" content="${escapeHtml(post.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta property="og:site_name" content="Wave Programming Language Blog">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(post.title)}">
  <meta property="og:description" content="${escapeHtml(post.description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  ${post.cover ? `<meta property="og:image" content="${escapeHtml(post.cover)}">` : ''}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(post.title)}">
  <meta name="twitter:description" content="${escapeHtml(post.description)}">
  ${post.cover ? `<meta name="twitter:image" content="${escapeHtml(post.cover)}">` : ''}
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="alternate" type="application/rss+xml" title="Wave Programming Language Blog RSS" href="${escapeHtml(rssUrl)}">
  <link rel="icon" type="image/x-icon" href="${escapeHtml(faviconUrl)}">
  <style>
    body { margin: 0; font-family: 'Roboto Mono', 'IBM Plex Mono', monospace; background: #0d0f12; color: #d9e1f2; }
    .wrap { max-width: 900px; margin: 24px auto; padding: 0 10px; }
    .top { margin-bottom: 10px; }
    .top a { color: #8fb3ff; text-decoration: underline; }
    article { border: 2px solid #6d7892; background: #151922; padding: 16px; box-shadow: 6px 6px 0 #000; }
    .meta { display: flex; gap: 8px; align-items: center; color: #97a3be; font-size: 12px; }
    .chip { border: 1px solid #72e5b8; color: #72e5b8; padding: 2px 6px; font-size: 11px; line-height: 1; }
    h1 { margin: 10px 0 8px; font-size: 28px; line-height: 1.3; text-transform: uppercase; }
    .desc { margin: 0 0 12px; color: #a9b8d7; }
    .cover { width: 100%; border: 2px solid #3a4357; }
    .tags { list-style: none; margin: 10px 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }
    .tags li { border: 1px solid #3a4357; padding: 3px 7px; font-size: 12px; color: #a9b8d7; }
    .content h1, .content h2, .content h3, .content h4 { text-transform: uppercase; font-size: 1em; margin-top: 1.3em; }
    .content pre { overflow-x: auto; border: 2px solid #3a4357; background: #0b1019; padding: 12px; }
    .content code { font-family: inherit; }
    .content :not(pre) > code { border: 1px solid #3a4357; background: #121b29; padding: 1px 4px; }
    .content img { max-width: 100%; border: 2px solid #3a4357; }
    .content a { color: #8fb3ff; }
    .content blockquote { border-left: 4px solid #72e5b8; padding: 4px 10px; margin-left: 0; background: #0f1c1d; color: #bce9d7; }
  </style>
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body>
  <div class="wrap">
    <div class="top"><a href="${escapeHtml(homeUrl)}">← Wave Programming Language Blog</a></div>
    <article>
      <div class="meta"><span>${escapeHtml(post.dateDisplay)}</span>${pinnedChip}</div>
      <h1>${escapeHtml(post.title)}</h1>
      <p class="desc">${escapeHtml(post.description)}</p>
      ${coverHtml}
      <ul class="tags">${tagItems}</ul>
      <section class="content">${post.contentHtml}</section>
    </article>
  </div>
</body>
</html>
`;
}

function writeStaticPostPages(posts) {
  const siteUrl = resolveSiteUrl();
  fs.rmSync(POST_PAGES_DIR, { recursive: true, force: true });
  ensureDir(POST_PAGES_DIR);

  for (const post of posts) {
    const pageDir = path.join(POST_PAGES_DIR, post.slug);
    ensureDir(pageDir);
    const pageHtml = renderStaticPostHtml(post, siteUrl);
    fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf-8');
  }
}

function main() {
  const posts = loadPosts();
  writeTypeScript(posts);
  writeSeoFiles(posts);
  writeStaticPostPages(posts);
  console.log(`Generated ${posts.length} posts -> ${OUTPUT_FILE}`);
}

main();
