# Azeem Ahmad | Portfolio

Personal portfolio website for **Azeem Ahmad** — Full Stack Developer and Competitive Programmer. A modern, single-page site built with Next.js, featuring smooth animations, an interactive background, and sections for skills, projects, and contact.

**Live Site:** Deploy on [Vercel](https://vercel.com) — add your production URL here after deployment.

## Features

- **Single-page layout** with smooth scroll navigation and active section highlighting
- **Interactive DotGrid background** powered by GSAP with cursor-proximity effects
- **Responsive navigation** with glassmorphism styling and a mobile menu
- **Hero section** with profile intro, social links, and contact CTA
- **About section** with role summaries, stats, technical skills, and competition achievements
- **Projects showcase** with tech stacks and GitHub/demo links
- **Contact section** with email, phone, location, and social profiles
- **Scroll-triggered animations** using Framer Motion

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/) |
| Icons | [Lucide React](https://lucide.dev/) |

## Project Structure

```
src/
├── app/
│   ├── page.js              # Main page — composes all sections
│   ├── layout.js            # Root layout, metadata, fonts
│   ├── globals.css
│   └── components/
│       ├── navbar.js        # Fixed nav with scroll spy
│       ├── Footer.js
│       └── DotGrid.js       # Interactive GSAP dot grid
└── sections/
    ├── Hero.js
    ├── About.js
    ├── Projects.js
    ├── Contact.js
    └── Experience.js        # Work history (available in codebase)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/code-azeemahmad/azeem-portfolio.git
cd azeem-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deploy on Vercel

This project is a standard Next.js app and deploys to Vercel with no extra configuration.

### Option 1: Vercel Dashboard (recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install`
4. Click **Deploy**.

Every push to your main branch will trigger a new deployment automatically.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts for your first deploy. Use `vercel --prod` when you are ready to publish to production.

### Notes

- No environment variables are required for the current setup.
- Static assets live in `public/` (profile image, favicon, company logos).
- After deployment, update the **Live Site** link at the top of this README and add the URL to your LinkedIn/resume if needed.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Sections

| Section | Description |
|---------|-------------|
| **Home** | Introduction, profile image, role titles, and social links |
| **About** | Skills, project/problem-solving stats, and programming competition awards |
| **Projects** | Featured work including LMS, microservices, MERN apps, ML, and systems projects |
| **Contact** | Email, phone, location, and links to LinkedIn, GitHub, and LeetCode |

## Contact

- **Email:** [azeemahmadd9@gmail.com](mailto:azeemahmadd9@gmail.com)
- **GitHub:** [@code-azeemahmad](https://github.com/code-azeemahmad)
- **LinkedIn:** [azeem-ahmad327](https://www.linkedin.com/in/azeem-ahmad327/)
- **LeetCode:** [code-azeem](https://leetcode.com/u/code-azeem/)

## License

This project is private. All rights reserved.
