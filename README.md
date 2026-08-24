# Pintu Kumar Gupta — Portfolio Website

A modern, premium portfolio website for **Pintu Kumar Gupta**, Backend Software Engineer.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

![Portfolio Desktop](./readme-images/desktop.png)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | React framework with SSG |
| TypeScript | Type safety |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Scroll animations |
| next-themes | Dark / Light mode |
| Lucide React | Icons |
| Inter + JetBrains Mono | Typography (Google Fonts) |

---

## Getting Started

### Prerequisites

- Node.js `v18+` (project uses `v22.14.0`)
- npm `v9+`

Check your versions:

```bash
node --version
npm --version
```

---

## Local Development

### 1. Clone or navigate to the project

```bash
cd /home/pintu/1a_Exploring_/projects/pesonal_info
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

The dev server supports hot-reload — changes reflect instantly in the browser.

---

## Production Build

### Build the project

```bash
npm run build
```

This generates an optimized static build inside the `.next/` directory.

### Run the production build locally

```bash
npm start
```

Open your browser at:

```
http://localhost:3000
```

---

## All Available Commands

```bash
# Start development server (hot reload)
npm run dev

# Build optimized production bundle
npm run build

# Start production server (requires build first)
npm start

# Lint the codebase
npm run lint
```

---

## Add Your Resume PDF

Place your resume file in the `public/` directory:

```bash
cp /path/to/your/resume.pdf public/resume.pdf
```

It will be downloadable via the **Resume** button in the navbar and hero section.

---

## Project Structure

```
pesonal_info/
├── public/
│   ├── pintu.png              # Profile photo
│   ├── favicon.svg            # Favicon
│   ├── resume.pdf             # Resume (add manually)
│   ├── og-image.png           # OpenGraph image (add manually)
│   └── site.webmanifest       # PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout — SEO metadata, fonts, theme
│   │   ├── page.tsx           # Main page — all sections composed here
│   │   └── globals.css        # Design system CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky nav, theme toggle, mobile menu
│   │   │   └── Footer.tsx     # Links, social icons, copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── AIProductivity.tsx
│   │   │   ├── Freelancing.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx
│   ├── data/
│   │   └── index.ts           # All content — projects, skills, certs, experience
│   └── lib/
│       └── utils.ts           # Utility functions, animation variants
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.mjs
```

---

## How to Customize

### Update Personal Information

Edit `src/data/index.ts` — all content (name, bio, skills, projects, certifications) lives here. No need to touch individual components.

### Add a New Project

In `src/data/index.ts`, add an entry to the `projects` array:

```typescript
{
  id: "my-project",
  title: "Project Title",
  subtitle: "Short subtitle",
  description: "What it does",
  problem: "Problem it solves",
  solution: "How it solves it",
  tech: ["Java", "Spring Boot"],
  category: "Backend Systems",
  status: "Production",        // or "Completed"
  featured: true,              // shows in large cards
  highlight: "Featured",       // optional badge
  github: "https://github.com/...",
  demo: null,
}
```

### Update Skills

Edit the `skillCategories` array in `src/data/index.ts`. Each skill has a `name`, `level` (0–100), and `years` string.

### Add a Blog Post

Blog is architecture-ready. To add posts, create a `src/app/blog/` directory with MDX files and update the Blog section to render them.

### Change Accent Color

In `src/app/globals.css`, update the `--primary` CSS variable under `:root` and `.dark`. The default is `217 91% 60%` (blue-500).

---

## Deployment

### Deploy to Vercel (Recommended)

**Option 1 — Vercel CLI:**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

**Option 2 — GitHub + Vercel Dashboard:**

1. Push this branch to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repository
4. Vercel auto-detects Next.js — click **Deploy**

### Deploy to Other Platforms

The project builds to static + server output compatible with any Node.js host.

```bash
npm run build    # generates .next/
npm start        # serve on PORT (default 3000)
```

Set environment variable if needed:

```bash
PORT=8080 npm start
```

---

## Post-Deployment Checklist

- [ ] Add `public/resume.pdf` (your actual resume file)
- [ ] Add `public/og-image.png` (1200×630 px for link previews)
- [ ] Update domain in `src/app/layout.tsx` → replace `pintukrgupta.dev`
- [ ] Connect contact form → sign up at [Formspree](https://formspree.io), replace `handleSubmit` in `src/components/sections/Contact.tsx`
- [ ] Add LinkedIn profile link in `src/data/index.ts`
- [ ] Enable Google Analytics or Plausible (optional)

---

## Features

- Dark mode by default with light mode toggle
- Fully responsive (mobile, tablet, desktop)
- SEO optimized — meta titles, descriptions, OpenGraph, Twitter Card
- Smooth scroll-triggered animations (Framer Motion)
- Typewriter role animation in hero
- Interactive skills tabs with animated progress bars
- Expandable experience and project cards
- Contact form with success/error states
- Static site generation (SSG) — fast Lighthouse scores
- PWA manifest included

---

## License

Personal portfolio — all rights reserved by Pintu Kumar Gupta.
