# Abin Joseph — AI/ML & Generative AI Engineer Portfolio

A fast, recruiter-friendly portfolio for **Abin Joseph**, an AI/ML & Generative AI Engineer who builds production RAG, agentic (LangGraph) and document-intelligence systems.

The design follows the candidate's field: an engineering-grid hero, monospace system labels, and a live **RAG pipeline diagram** (ingest → chunk → embed → retrieve → orchestrate → evaluate → observe) that shows the end-to-end work described in the résumé.

All content comes from the candidate's résumé and LinkedIn profile. Nothing was added: no invented metrics, testimonials or statistics.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | "Open to work" badge, name, one-line positioning, focus areas, CTAs, and a pipeline visual |
| About | Short professional introduction and key facts |
| Featured work | 4 projects, each with its problem, solution, contribution, outcome and tech, linking to a full case study |
| Experience | ThinkPalm Technologies role with scannable highlights grouped by area |
| Skills | 8 logical groups (GenAI, RAG & Evaluation, Vector DBs, Document AI, CV, ML, Backend & Cloud, Tools) |
| Education | B.Tech in Computer Science and Engineering |
| Notes | Latest technical notes (hidden until the first note is published) |
| Contact | Email, LinkedIn, GitHub, location (phone is optional) |

Other pages:

- **`/projects/[slug]`**: a case study for each project, with the problem, what was built, key decisions and why, the outcome, and optional lessons learned and links.
- **`/notes`** and **`/notes/[slug]`**: a Markdown-powered technical blog.

## SEO and sharing

- Generated **social preview images** (Open Graph and Twitter), one for the site and one per case study. These appear when the link is shared on LinkedIn, WhatsApp, Slack or X.
- **`/sitemap.xml`** and **`/robots.txt`**
- **Structured data** (JSON-LD): a `Person` on the homepage, a `CreativeWork` on each case study and a `BlogPosting` on each note.
- Canonical URLs and page titles in the format "Page · Abin Joseph".

**Site URL.** On Vercel, absolute URLs use the production domain automatically. When you add a custom domain, set the environment variable `NEXT_PUBLIC_SITE_URL` (for example `https://abinjoseph.dev`) in Vercel under **Project → Settings → Environment Variables**, then redeploy.

## Tech stack

- **Next.js 16** (App Router, statically prerendered)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** + `@tailwindcss/typography` for the notes
- **Markdown notes**, parsed with `gray-matter` and `marked`
- **Geist Sans / Geist Mono**, bundled locally through the `geist` package, so there are no external font requests
- No API keys, backend or required environment variables

Other features: light/dark themes that follow the system setting (with no flash on load), a manual theme toggle, subtle scroll-reveal animations that respect `prefers-reduced-motion`, a responsive layout from 360px phones to wide desktops, and accessible landmarks and labels.

## Getting started

Requires **Node.js 18.18+** (Node 20 or 22 is recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```

## Project structure

```
.
├── content/
│   └── notes/                 # Markdown notes (blog posts)
├── public/                    # static assets (résumé PDF)
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind import, theme tokens (light/dark), animations
│   │   ├── icon.svg           # favicon
│   │   ├── layout.tsx         # fonts, site-wide metadata, no-flash theme script
│   │   ├── page.tsx           # homepage section composition
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.tsx / twitter-image.tsx   # social preview images
│   │   ├── robots.ts / sitemap.ts
│   │   ├── projects/[slug]/   # case-study pages + per-project preview images
│   │   └── notes/             # notes index + note pages
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx          # inline SVG icon set (no icon dependency)
│   │   ├── JsonLd.tsx         # structured data for search engines
│   │   ├── Navbar.tsx         # sticky nav + mobile menu
│   │   ├── NoteList.tsx / Notes.tsx
│   │   ├── PipelineDiagram.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx         # scroll-in animation wrapper
│   │   ├── Section.tsx        # shared section shell
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolio.ts       # ← ALL site content lives here
│   └── lib/
│       ├── notes.ts           # reads & renders Markdown notes
│       ├── og.tsx             # shared social-image template
│       └── site.ts            # resolves the absolute site URL
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Customizing the content

All text is kept in **`src/data/portfolio.ts`**. You can change the content without touching any component.

- **`profile`**: name, title, tagline, location, email and LinkedIn.
  - `github`: your GitHub profile URL, shown in the hero and contact sections. Leave it empty to hide the links.
  - `resumeUrl`: copy your résumé into `public/` and set `resumeUrl` to its path (for example `"/AbinJoseph_AI_Engineer_Resume.pdf"`) to show a **Résumé** download button.
  - `openToWork`: set `enabled: false` to hide the "Open to work" badge, or change `message`.
  - `showPhone`: set it to `true` to show the phone number in the contact section. It is off by default so the number stays off a public page.
- **`about`**: introduction paragraphs and focus areas. The first four focus areas appear as chips in the hero.
- **`pipelineStages`**: the stages shown in the hero pipeline diagram.
- **`projects`**: add, remove or reorder projects. The **first** project is shown as the large featured card, and the rest appear in a 3-column grid. Each project also drives its case-study page:
  - `decisions`: key technical decisions, each with a `why`.
  - `lessons` (optional): your reflections. They are shown only when present.
  - `links` (optional): for example `[{ label: "GitHub repo", href: "https://…" }]`.
- **`experience`**: company, dates, role history and highlight cards.
- **`skillGroups`**: skill categories and their items.
- **`education`**: degree, institution and dates.
- **`navLinks`**: the navigation items. "Notes" is hidden automatically until a note is published.

### Writing notes

Add a Markdown file to `content/notes/`. The file name becomes the URL, so `my-note.md` is served at `/notes/my-note`.

```md
---
title: "Your title"
date: 2026-10-01
summary: "One-sentence summary shown in lists and link previews."
tags: [RAG, Evaluation]
draft: false
---

Your content in **Markdown**…
```

Notes marked `draft: true` appear in `npm run dev` but are left out of production builds, so you can preview them safely. There is a starter draft at `content/notes/tables-to-text-for-rag.md`: rewrite it in your own words and set `draft: false` to publish it. Files that start with `_` are ignored.

### Changing the look

Colours are semantic tokens defined in `src/app/globals.css` (`--bg`, `--surface`, `--fg`, `--muted`, `--accent`, …), with separate values for `:root` (light) and `.dark`. To re-theme the whole site, change `--accent`.

## Deployment

The site prerenders fully to static HTML, so it deploys as-is to Vercel, Netlify or any Node host. Import the repository and use the default Next.js settings.
