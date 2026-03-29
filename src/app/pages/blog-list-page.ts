import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { BLOG_POSTS, type BlogPost } from '../blog-data';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-blog-list-page',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './blog-list-page.html'
})
export class BlogListPageComponent {
  private readonly seo = inject(SeoService);
  readonly posts = BLOG_POSTS;
  readonly query = signal('');
  readonly latestDate = this.posts[0]?.dateDisplay ?? '-';

  constructor() {
    effect(() => {
      this.seo.setHome(this.posts.length, this.latestDate);
    });
  }

  readonly filteredPosts = computed(() => {
    const keyword = this.query().trim().toLowerCase();
    if (!keyword) {
      return this.posts;
    }

    return this.posts.filter((post) => {
      const haystack = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase();
      return haystack.includes(keyword);
    });
  });

  readonly orderedFilteredPosts = computed(() => {
    return [...this.filteredPosts()].sort((left, right) => {
      if (left.pinned !== right.pinned) {
        return left.pinned ? -1 : 1;
      }
      return right.date.localeCompare(left.date);
    });
  });

  cardCoverStyle(post: BlogPost): string | null {
    return post.cover ? `url('${post.cover}')` : null;
  }
}
