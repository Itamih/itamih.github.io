# Itamih - AI Business Automation

> We help businesses discover and automate repetitive tasks using AI.

This is the official website for Itamih, showcasing our AI automation solutions and real-world case studies.

## 🌟 What's New

This is a complete redesign with:
- ✨ Clean, Apple-inspired design with fresh green accents
- 🚀 Built with Next.js 16 for optimal performance
- 📱 Fully responsive mobile design
- 🎯 Real case studies from actual projects (Hannah & Economic Dashboard)
- ⚡ Static site generation for fast loading
- 🔄 Automatic deployment via GitHub Actions

## 🏗️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Deployment**: GitHub Pages via GitHub Actions
- **Domain**: itamih.com

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm start
```

## 📸 Adding Screenshots

Before deploying, you need to add screenshots from your projects. See **[SCREENSHOTS-NEEDED.md](./SCREENSHOTS-NEEDED.md)** for detailed instructions.

**Required screenshots:**
1. `hannah-main-interface.png` - Hannah chat interface
2. `dashboard-main.png` - Economic Dashboard overview
3. `todays-focus.png` - Today's Focus feature
4. `newsstand.png` - Newsstand/articles view

Place all screenshots in `/public/images/`

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete deployment instructions.

### Quick Deploy

```bash
git add .
git commit -m "Update website"
git push origin main
```

Site goes live at **https://itamih.com** in ~3 minutes.

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   └── case-studies/
│       ├── hannah/page.tsx         # Hannah case study
│       └── economic-dashboard/page.tsx
├── components/
│   ├── Navigation.tsx              # Header navigation
│   └── Footer.tsx                  # Footer
├── public/
│   ├── images/                     # Screenshots (add yours here)
│   └── CNAME                       # Custom domain config
└── .github/workflows/
    └── deploy.yml                  # Auto-deployment
```

## 🎨 Design System

- **Primary Color**: Fresh Green (#00A650)
- **Typography**: Inter font family
- **Layout**: Apple-inspired minimalism
- **Spacing**: Generous white space
- **Animations**: Subtle transitions

## 📝 Content Updates

### Homepage
Edit `app/page.tsx` to update:
- Hero headline and tagline
- Value proposition cards
- Call-to-action buttons
- Contact form

### Case Studies
Edit files in `app/case-studies/`:
- `hannah/page.tsx` - Hannah AI chatbot case study
- `economic-dashboard/page.tsx` - Economic Dashboard case study

### Navigation & Footer
Edit `components/Navigation.tsx` and `components/Footer.tsx`

## 🔧 Configuration

### Custom Domain
The site uses `itamih.com` via the `CNAME` file. To change:
1. Update `public/CNAME` with your domain
2. Configure DNS records (see DEPLOYMENT.md)

### Next.js Config
Key settings in `next.config.ts`:
- `output: 'export'` - Static site generation
- `images.unoptimized: true` - For GitHub Pages compatibility

## ✅ Before Going Live

- [ ] Add all 4 screenshots to `/public/images/`
- [ ] Update case study pages to use real images
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Review on staging before pushing to main

## 🐛 Troubleshooting

### Build Errors
```bash
# Clean build
rm -rf .next out
npm install
npm run build
```

### Development Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📚 Documentation

- [SCREENSHOTS-NEEDED.md](./SCREENSHOTS-NEEDED.md) - Screenshot guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [CLAUDE.md](./CLAUDE.md) - Claude Code project instructions

## 🎯 Case Studies

### Hannah: AI-Powered Knowledge Assistant
AI chatbot that helps customer support teams respond 10x faster by instantly retrieving accurate answers from website content.

**Key Features:**
- RAG-based architecture with OpenAI embeddings
- Zero hallucination guarantee
- Source citations for every answer
- 2-second response time

**Tech Stack:** Next.js, FastAPI, OpenAI, SQLite

---

### Economic Intelligence Dashboard
Comprehensive dashboard consolidating 39+ economic metrics and real estate news, saving investors 80% of research time.

**Key Features:**
- FRED, BEA, BLS API integrations
- Automated newsletter parsing
- "Today's Focus" educational feature
- Personal bookmarking system

**Tech Stack:** React, FastAPI, PostgreSQL, Redis

---

## 📞 Contact

- Website: [itamih.com](https://itamih.com)
- Email: hello@itamih.com

---

## 🎉 Launch Checklist

- [x] ✅ Next.js setup complete
- [x] ✅ Homepage designed and built
- [x] ✅ Hannah case study created
- [x] ✅ Economic Dashboard case study created
- [x] ✅ GitHub Actions deployment configured
- [ ] ⏳ Add screenshots from real projects
- [ ] ⏳ Test and deploy to production
- [ ] ⏳ Verify itamih.com domain working

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
