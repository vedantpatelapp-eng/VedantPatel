# Vedant Patel — Portfolio

Personal portfolio built with [Once UI Magic Portfolio](https://once-ui.com) + Next.js.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

All personal info lives in **one file**: `src/resources/content.tsx`

- Edit `person` for your name, email, location
- Edit `home` for the hero headline and subline
- Edit `about` for bio, work experience, and education
- Edit `blog` / `work` labels and descriptions

## Adding Blog Posts

Create a new `.mdx` file in `src/app/blog/posts/`:

```mdx
---
title: "Your Post Title"
summary: "A short description."
publishedAt: "2026-04-01"
tag: "Engineering"
image: "/images/your-image.jpg"
---

Your content here...
```

## Adding Projects

Create a new `.mdx` file in `src/app/work/projects/`:

```mdx
---
title: "Project Name"
publishedAt: "2026-04-01"
summary: "Short description."
images:
  - "/images/projects/project-XX/cover.jpg"
team:
  - name: "Vedant Patel"
    role: "Mechanical Engineer"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://www.linkedin.com/in/vedantptls"
---

## Overview
...
```

## Deploy to Vercel

### Push to GitHub first

```bash
git add .
git commit -m "update content and styles"
git push
```

### First-time setup

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/vedantpatelapp-eng/VedantPatel.git
git push -u origin main
```

Then go to [vercel.com](https://vercel.com) → **Add New Project** → import `vedantpatelapp-eng/VedantPatel` → **Deploy**.

No extra settings needed — Vercel auto-detects Next.js.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values if you use password protection.
