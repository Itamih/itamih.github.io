# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Website for Itamih, a business automation company. Built with Next.js and deployed to GitHub Pages.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions
- **Domain**: itamih.com

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start development server (localhost:3000)
npm run build  # Build for production (outputs to /out)
```

## Key Files

- `app/page.tsx` - Homepage
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles and Tailwind imports
- `app/case-studies/` - Case study pages
- `components/` - Reusable React components
- `public/` - Static assets (images, CNAME)
- `.github/workflows/deploy.yml` - GitHub Actions deployment

## Architecture

### Pages
- Uses Next.js App Router with static export (`output: 'export'` in next.config.ts)
- All pages are server components by default
- Client components marked with `'use client'`

### Styling
- Tailwind CSS for utility classes
- Custom CSS in globals.css for animations and special effects
- Design: Dark theme with green accents (#00A650)

### Deployment
- Automatic deployment via GitHub Actions on push to main
- Builds to `/out` folder and deploys via `actions/deploy-pages`
- Custom domain configured via `public/CNAME`

## Important Notes

- CNAME file must be in `public/` folder (not root) for Next.js build
- Contact form uses Web3Forms (requires NEXT_PUBLIC_WEB3FORMS_KEY secret)
- Images are unoptimized for GitHub Pages compatibility
