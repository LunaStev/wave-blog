import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import type { BlogPost } from './blog-data';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Wave Programming Language Blog';
  private readonly baseDescription =
    'Official Wave programming language blog: release notes, compiler updates, and low-level engineering posts.';

  setHome(postCount: number, latestDate: string): void {
    const pageTitle = this.siteName;
    const description = `${this.baseDescription} ${postCount} posts published. Latest: ${latestDate}.`;
    const canonical = this.currentUrl();

    this.title.setTitle(pageTitle);
    this.setCanonical(canonical);
    this.applyCommonMeta({
      title: pageTitle,
      description,
      canonical,
      type: 'website',
      keywords: ['wave language', 'programming language', 'compiler', 'systems programming', 'wave blog'],
    });

    this.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: this.siteName,
      description,
      url: canonical,
      inLanguage: 'en',
    });
  }

  setPost(post: BlogPost): void {
    const pageTitle = `${post.title} | ${this.siteName}`;
    const canonical = this.absoluteUrlForPath(`post/${post.slug}`);
    const keywords = [
      'wave language',
      'programming language',
      'compiler',
      ...post.tags,
    ];

    this.title.setTitle(pageTitle);
    this.setCanonical(canonical);
    this.applyCommonMeta({
      title: pageTitle,
      description: post.description,
      canonical,
      type: 'article',
      image: post.cover || undefined,
      keywords,
    });

    this.meta.updateTag({ property: 'article:published_time', content: this.toIso(post.date) });

    this.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: this.toIso(post.date),
      dateModified: this.toIso(post.date),
      mainEntityOfPage: canonical,
      url: canonical,
      image: post.cover || undefined,
      keywords: post.tags,
      author: {
        '@type': 'Organization',
        name: 'Wave Foundation',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Wave Foundation',
      },
      inLanguage: 'en',
    });
  }

  setNotFound(): void {
    const pageTitle = `Not Found | ${this.siteName}`;
    const description = 'The requested page could not be found.';
    const canonical = this.currentUrl();

    this.title.setTitle(pageTitle);
    this.setCanonical(canonical);
    this.applyCommonMeta({
      title: pageTitle,
      description,
      canonical,
      type: 'website',
      robots: 'noindex, nofollow',
      keywords: [],
    });
    this.clearJsonLd();
  }

  private applyCommonMeta(input: {
    title: string;
    description: string;
    canonical: string;
    type: 'website' | 'article';
    image?: string;
    robots?: string;
    keywords: string[];
  }): void {
    const robots = input.robots ?? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    this.meta.updateTag({ name: 'description', content: input.description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ name: 'keywords', content: Array.from(new Set(input.keywords)).join(', ') });

    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: input.title });
    this.meta.updateTag({ property: 'og:description', content: input.description });
    this.meta.updateTag({ property: 'og:type', content: input.type });
    this.meta.updateTag({ property: 'og:url', content: input.canonical });

    if (input.image) {
      this.meta.updateTag({ property: 'og:image', content: input.image });
      this.meta.updateTag({ name: 'twitter:image', content: input.image });
    } else {
      this.meta.removeTag("property='og:image'");
      this.meta.removeTag("name='twitter:image'");
    }

    this.meta.updateTag({ name: 'twitter:card', content: input.image ? 'summary_large_image' : 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: input.title });
    this.meta.updateTag({ name: 'twitter:description', content: input.description });
  }

  private setCanonical(url: string): void {
    let canonical = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  private setJsonLd(value: object): void {
    let script = this.document.getElementById('seo-json-ld') as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(value);
  }

  private clearJsonLd(): void {
    const script = this.document.getElementById('seo-json-ld');
    if (script) {
      script.remove();
    }
  }

  private currentUrl(): string {
    const location = this.document.location;
    if (!location) {
      return this.absoluteUrlForPath('');
    }
    return `${location.origin}${location.pathname}`;
  }

  private absoluteUrlForPath(path: string): string {
    const cleaned = path.replace(/^\/+/, '');
    return new URL(cleaned || './', this.document.baseURI).toString();
  }

  private toIso(raw: string): string {
    const parsed = new Date(raw);
    if (Number.isNaN(parsed.getTime())) {
      return raw;
    }
    return parsed.toISOString();
  }
}
