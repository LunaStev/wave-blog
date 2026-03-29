import { Routes } from '@angular/router';

import { BlogListPageComponent } from './pages/blog-list-page';
import { BlogPostPageComponent } from './pages/blog-post-page';

export const routes: Routes = [
  {
    path: '',
    component: BlogListPageComponent,
    title: 'Wave Programming Language Blog'
  },
  {
    path: 'post/:slug',
    component: BlogPostPageComponent,
    title: 'Wave Post'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
