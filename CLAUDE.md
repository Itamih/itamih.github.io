# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages static website for Itamih, a business automation software company. The site is built with pure HTML/CSS without any build tools or frameworks.

## Key Files

- `index.html` - Main landing page with services, case studies, and contact form
- `case-studies.html` - Case studies page (placeholder page)
- `CNAME` - Custom domain configuration for itamih.com

## Development Commands

Since this is a static website without build tools:

- **To preview locally**: Open `index.html` directly in a web browser or use a simple HTTP server:
  ```bash
  python -m http.server 8000
  # or
  npx http-server
  ```

- **To deploy**: Simply commit and push changes to the main branch. GitHub Pages will automatically serve the updated files.

## Architecture and Code Patterns

### CSS Structure
- All styles are embedded within `<style>` tags in each HTML file
- Uses modern CSS features: CSS Grid, Flexbox, CSS animations, backdrop filters
- Dark theme with purple/blue gradient accents (#4f46e5, #7c3aed, #2563eb)
- Animated gradient orbs for visual effects using keyframe animations

### JavaScript Patterns
- Vanilla JavaScript only, no frameworks
- Contact form modal functionality in index.html
- Form submission to `/api/contact` endpoint (requires backend implementation)
- Smooth scrolling for navigation links

### Design System
- Font: Inter with system font fallbacks
- Base colors: #0a0a0a (background), #ffffff (text), #a0a0a0 (muted text)
- Consistent spacing and border-radius values
- Glassmorphism effects with backdrop-filter blur

## Important Considerations

- Mobile responsive design with breakpoint at 768px
- Navigation links collapse on mobile (hidden, not hamburger menu)
- Contact form expects a backend API at `/api/contact` that needs to be implemented
- Case studies page is currently a placeholder
- No external dependencies - completely self-contained