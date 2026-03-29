import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

import { BLOG_POSTS_BY_SLUG } from '../blog-data';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-blog-post-page',
  imports: [RouterLink],
  templateUrl: './blog-post-page.html'
})
export class BlogPostPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly post = computed(() => BLOG_POSTS_BY_SLUG.get(this.slug()) ?? null);

  readonly contentHtml = computed<SafeHtml>(() => {
    const post = this.post();
    if (!post) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(post.contentHtml);
  });

  constructor() {
    effect(() => {
      const post = this.post();
      if (post) {
        this.seo.setPost(post);
        return;
      }
      this.seo.setNotFound();
    });
  }
}
