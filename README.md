# Abin Joseph — AI/ML & Generative AI Engineer Portfolio

A fast, recruiter-friendly portfolio for **Abin Joseph**, an AI/ML & Generative AI Engineer who builds production RAG, agentic (LangGraph) and document-intelligence systems.

The design follows the candidate's field: an engineering-grid hero, monospace system labels, and a live **RAG pipeline diagram** (ingest → chunk → embed → retrieve → orchestrate → evaluate → observe) that shows the end-to-end work described in the résumé.

All content comes from the candidate's résumé and LinkedIn profile. Nothing was added: no invented metrics, testimonials or statistics.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | Name, title, one-line positioning, focus areas, primary CTAs, and a pipeline visual |
| About | Short professional introduction and key facts |
| Featured work | 4 projects, each with its problem, solution, contribution, outcome and tech |
| Experience | ThinkPalm Technologies role with scannable highlights grouped by area |
| Skills | 8 logical groups (GenAI, RAG & Evaluation, Vector DBs, Document AI, CV, ML, Backend & Cloud, Tools) |
| Education & certifications | B.Tech CSE and 5 certifications |
| Contact | Email, LinkedIn, location (GitHub, phone and a résumé download are optional) |

## Tech stack

- **Next.js 16** (App Router, statically prerendered)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Geist Sans / Geist Mono**, bundled locally through the `geist` package, so there are no external font requests
- No API keys, environment variables or backend

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
├── public/                    # static assets (add resume.pdf here)
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind import, theme tokens (light/dark), animations
│   │   ├── icon.svg           # favicon
│   │   ├── layout.tsx         # fonts, metadata, no-flash theme script
│   │   └── page.tsx           # section composition
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx          # inline SVG icon set (no icon dependency)
│   │   ├── Navbar.tsx         # sticky nav + mobile menu
│   │   ├── PipelineDiagram.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx         # scroll-in animation wrapper
│   │   ├── Section.tsx        # shared section shell
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   └── data/
│       └── portfolio.ts       # ← ALL site content lives here
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Customizing the content

All text is kept in **`src/data/portfolio.ts`**. You can change the content without touching any component.

- **`profile`**: name, title, tagline, location, email and LinkedIn.
  - `github`: set it to your GitHub profile URL to show GitHub links in the hero and contact sections. It is empty by default because the source documents did not include one.
  - `resumeUrl`: copy your résumé to `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` to show a **Résumé** download button.
  - `showPhone`: set it to `true` to show the phone number in the contact section. It is off by default so the number stays off a public page.
- **`about`**: introduction paragraphs and focus areas. The first four focus areas appear as chips in the hero.
- **`pipelineStages`**: the stages shown in the hero pipeline diagram.
- **`projects`**: add, remove or reorder projects. The **first** project is shown as the large featured card, and the rest appear in a 3-column grid.
- **`experience`**: company, dates, role history and highlight cards.
- **`skillGroups`**: skill categories and their items.
- **`education`** and **`certifications`**.
- **`navLinks`**: the navigation items.

### Changing the look

Colours are semantic tokens defined in `src/app/globals.css` (`--bg`, `--surface`, `--fg`, `--muted`, `--accent`, …), with separate values for `:root` (light) and `.dark`. To re-theme the whole site, change `--accent`.

## Deployment

The site prerenders fully to static HTML, so it deploys as-is to Vercel, Netlify or any Node host. Import the repository and use the default Next.js settings.
