# CS Tutoring Website

A professional, elegant single-page website for Computer Science tutoring services, built with React, TypeScript, Vite, and Mantine UI.

## Features

- 🎨 Modern, clean design with Mantine UI components
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast loading with Vite
- 🎯 Professional layout optimized for trust and conversions
- 🔧 Easy to customize and maintain

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Mantine v7** - UI component library
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/georgewu/georgewututor.github.io.git
cd georgewututor.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Customization Guide

### Update Contact Information

1. **Calendly Link**: Update the Calendly links in:
   - `src/components/Hero.tsx` (line ~26)
   - `src/components/Contact.tsx` (line ~23)

2. **Email Address**: Update your email in:
   - `src/components/Contact.tsx` (line ~30)

3. **Pricing**: Update pricing in:
   - `src/components/Pricing.tsx` (line ~17)

### Customize Colors

Edit `src/theme.ts` to modify the color scheme. The primary navy color is currently `#1F3A5F` (index 8 in the blue color array).

### Update Content

Each section is in its own component file:
- `src/components/Hero.tsx` - Hero section with headline
- `src/components/About.tsx` - About section with credentials
- `src/components/Services.tsx` - Services/subjects offered
- `src/components/Process.tsx` - 4-step process
- `src/components/Pricing.tsx` - Pricing information
- `src/components/Policies.tsx` - Policies (cancellation, integrity, expectations)
- `src/components/Contact.tsx` - Contact section with CTA

### Add Profile Photo

1. Place your profile image in the `public/` directory
2. Update the `src` attribute in `src/components/About.tsx` (line ~10)

### Optional: Enable Package Pricing

Uncomment the package pricing section in `src/components/Pricing.tsx` (lines ~28-33) and customize the pricing.

### Optional: Add Stripe Payment Link

Uncomment the Stripe button in `src/components/Contact.tsx` (lines ~35-43) and add your Stripe payment link.

## Deployment to GitHub Pages

### Method 1: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist/` directory.

3. Push the `dist/` folder contents to the `gh-pages` branch:
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Add deploy script to package.json (if not present)
# Then run:
npm run deploy
```

Or manually:
```bash
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:georgewu/georgewututor.github.io.git main:gh-pages
cd ..
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select `gh-pages` branch as the source
   - The site will be available at `https://georgewu.github.io/georgewututor.github.io/`

### Method 2: GitHub Actions (Automated)

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Push to the `main` branch and GitHub Actions will automatically build and deploy.

### Important: Base Path Configuration

The `vite.config.ts` file is configured with `base: '/georgewututor.github.io/'` for GitHub Pages. If your repository name is different, update this value accordingly.

## Project Structure

```
georgewututor.github.io/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   ├── theme.ts        # Mantine theme configuration
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## License

Private project - All rights reserved
