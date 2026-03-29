# Wave Blog

## Cloudflare Workers (Default)

- Static assets are served from `dist/waveblog`.
- SPA fallback is enabled (`not_found_handling = "single-page-application"` in `wrangler.toml`).

### Commands

- Local preview: `npm run preview:worker`
- Deploy: `npm run deploy:worker`

### Environment variable

- `SITE_URL`: official blog URL (example: `https://blog.wave-lang.org`)
  - Used for canonical URL, `sitemap.xml`, `rss.xml`, and static post SEO metadata.
