# Wave Blog (Angular + GitHub Pages)

`content/posts/*.md` 마크다운 포스트를 Angular 정적 사이트로 빌드하고, GitHub Actions로 `gh-pages` 브랜치에 자동 배포하는 블로그입니다.

## 로컬 실행

```bash
npm install
pip install markdown
npm run start
```

기본 주소: `http://localhost:4200/`

## 빌드

```bash
npm run build
```

빌드 시 `scripts/generate_blog_data.py`가 실행되어 마크다운을 `src/app/blog-data.ts`로 변환한 뒤 Angular 프로덕션 빌드를 수행합니다.

## 포스트 추가/수정

1. `content/posts`에 `.md` 파일 추가 또는 수정
2. 프론트매터 예시

```md
---
title: "Post title"
date: "2026-03-29 12:34:56"
description: "Short summary"
tags: ["wave-lang", "release"]
pinned: false
cover: "https://..."
---

# Post title

본문...
```

`pinned: true`로 설정하면 목록 상단에 고정됩니다.

3. `npm run start` 또는 `npm run build` 실행

## GitHub Pages 자동 배포

워크플로우 파일: `.github/workflows/deploy-gh-pages.yml`

- `main` 브랜치 push 시 자동 실행
- 빌드 결과를 `gh-pages` 브랜치로 배포
- GitHub 저장소 설정에서 Pages Source를 `gh-pages` / `/ (root)`로 지정

`<repo>.github.io` 저장소가 아닌 경우 `base-href`를 `/<repo-name>/`로 자동 설정합니다.
