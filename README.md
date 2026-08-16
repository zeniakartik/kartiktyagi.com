# kartiktyagi.com

The personal portfolio of **Kartik Tyagi** — Technical Lead & Solution Architect.
Not a resume-on-a-page: a digital identity spanning engineering, architecture,
products, security, AI-native engineering, and the person behind the work.

Built with **Next.js (App Router) + TypeScript** and a **hand-built neumorphic /
soft-UI design system** with light & dark themes. Frontend-only, no backend,
statically prerendered.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build (static prerender)  |
| `npm run start`     | Serve the production build           |
| `npm run lint`      | ESLint                               |
| `npm run typecheck` | TypeScript, no emit                  |

## Editing content — one source of truth

Everything personal lives in **`content/me/`**. Change your name, bio, roles,
experience, projects, skills, interests, achievements, social links, or SEO by
editing those data files — never the components.

```
content/me/
├── profile.ts       # name, roles, headline, bio, photo, resume
├── site.ts          # SEO: title, description, url, keywords
├── social.ts        # GitHub, LinkedIn, Stack Overflow, email…
├── stats.ts         # headline metrics
├── expertise.ts     # domains I work across
├── skills.ts        # categorized toolbox
├── experience.ts    # roles & highlights
├── projects.ts      # grouped: Product / Professional / Security / OSS / Experiment
├── engineering.ts   # how AI fits into the workflow
├── principles.ts    # how I think
├── interests.ts     # beyond the code
├── education.ts
├── achievements.ts
├── navigation.ts    # rail sections (ids must match section components)
├── types.ts         # the content model
└── index.ts         # aggregates into the `me` object
```

**Add a project:** append an object to `projects.ts`. Set `category`, optionally
`featured: true` (renders larger) and a `links: [...]` array (adds link buttons).

**Swap the résumé:** replace `public/kartik-tyagi-resume.pdf` (path set in `profile.ts`).

**Swap the photo:** replace `public/me/kartik.png` (path set in `profile.ts`).

## Architecture

- `app/` — root layout (fonts, metadata, no-flash theme script, Person JSON-LD),
  the page, dynamic OG image (`opengraph-image`), `robots`, `sitemap`, and
  `globals.css` (the design tokens).
- `components/ui/` — primitives (`Icon`, `Section`, `ThemeToggle`, `RevealObserver`).
- `components/layout/` — the persistent nav `Rail`, `Background`, `Footer`, shell grid.
- `components/sections/` — one component per section of the story.

### Design system

Design tokens (surfaces, ink, the calm-blue accent, neumorphic shadow presets,
radii, spacing, fluid type, motion) are CSS custom properties in
`app/globals.css`. Theme = `data-theme="light|dark"` on `<html>`. Component styles
are colocated CSS Modules. Append `?theme=light` or `?theme=dark` to force a theme.

### Accessibility & performance

Semantic HTML, keyboard-navigable, visible focus states, `prefers-reduced-motion`
support, and content that is fully readable without JavaScript (scroll reveals are
progressive enhancement). Mostly static output for excellent Core Web Vitals.

## Deployment

Any static/Node host works (Vercel recommended). `npm run build` prerenders the
site. Update the domain in `content/me/site.ts` for correct canonical/OG URLs.
