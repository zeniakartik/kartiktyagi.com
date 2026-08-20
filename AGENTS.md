<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# kartiktyagi.com — Portfolio

Premium personal portfolio for Kartik Tyagi. Next.js (App Router) + TypeScript, a
hand-built neumorphic / soft-UI design system, light + dark themes, no backend.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (statically prerendered)
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`

Always run `npm run lint` and `npm run typecheck` before considering a change done.

## Single source of truth: `content/me/`

ALL personal content lives in `content/me/`. To change anything about the site —
name, bio, roles, experience, projects, skills, interests, achievements, social
links, SEO — edit the data files there. Never hard-code personal data in components.

- `types.ts` — the content model (interfaces + the `IconName` union)
- `profile.ts`, `site.ts`, `social.ts`, `stats.ts`, `expertise.ts`, `skills.ts`,
  `experience.ts`, `projects.ts`, `engineering.ts`, `principles.ts`,
  `interests.ts`, `education.ts`, `achievements.ts`, `navigation.ts`
- `index.ts` — aggregates everything into a single `me` object

Adding a project = append an object to `projects.ts` (set `category`, `featured`,
optional `links`). Adding a nav section = add to `navigation.ts` AND give the
section a matching `id`. New icons = add a key to `IconName` and draw it in
`components/ui/Icon.tsx`.

## Structure

- `app/` — layout (fonts, metadata, theme script, JSON-LD), page, `opengraph-image`,
  `twitter-image`, `icon.svg`, `robots`, `sitemap`, `globals.css` (design tokens)
- `components/ui/` — primitives: `Icon`, `Section`, `ThemeToggle`, `RevealObserver`
- `components/layout/` — `Rail` (persistent nav), `Background`, `Footer`, `Shell` CSS
- `components/sections/` — one component per page section
- `content/me/` — the content model (above)

## Conventions

- Styling: CSS Modules per component + CSS-variable design tokens in `globals.css`.
  Prefer tokens (`--surface`, `--accent`, `--nu-md`, `--r-lg`, spacing/type scales)
  over ad-hoc values. Neumorphic depth = the `--nu-*` shadow presets.
- Theming: `data-theme="light|dark"` on `<html>`, set pre-paint by the inline script
  in `app/layout.tsx`; toggled by `ThemeToggle`; `?theme=light|dark` forces a theme.
- Server Components by default; add `"use client"` only for interactivity
  (`Rail`, `ThemeToggle`, `RevealObserver`, `Background`, `ProjectsClient`, `RoleRotator`).
- Accessibility & motion: content is fully visible without JS; reveals are progressive
  enhancement gated by the `js` class; everything respects `prefers-reduced-motion`.

## Not part of this project

`kartiktyagi.in/` and the root `*.pdf` files are reference material from the old
site and are git-ignored. Don't import from or build them.
