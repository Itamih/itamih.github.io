# Itamih

Website for Itamih - AI Business Automation.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions
- **Domain**: itamih.com

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

```bash
git add .
git commit -m "Update website"
git push origin main
```

## Project Structure

```
app/                  # Next.js app router pages
  page.tsx            # Homepage
  layout.tsx          # Root layout
  globals.css         # Global styles
  case-studies/       # Case study pages
components/           # React components
public/               # Static assets
  images/             # Screenshots and images
  CNAME               # Custom domain config
.github/workflows/    # GitHub Actions deployment
```

## Contact

- Website: [itamih.com](https://itamih.com)
- Email: sam@itamih.com
