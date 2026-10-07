# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

The repo uses **pnpm** (don't mix in npm/yarn or commit `package-lock.json`).

```bash
pnpm install
pnpm run dev     # next dev → http://localhost:3000
pnpm run build   # next build
pnpm run start   # serve the production build
pnpm run lint    # eslint .
```

There is no test runner configured.

## Architecture

Single-page portfolio ("Crimson Nocturne" design) built with Next.js 15 App Router, React 19, TypeScript (strict), and Tailwind CSS v4.

- `app/page.tsx` composes the page: `Header` → `main` (`Hero`, `About`, `Skills`, `Projects`, `Contact`) → `Footer`. Each section is one component in `components/`.
- `app/layout.tsx` loads the fonts and metadata and mounts `CrimsonAura` (a global cursor-following glow; it disables itself for touch devices and `prefers-reduced-motion`).
- `lib/content.ts` holds all site copy (nav, skills, projects, contact channels). Edit content there, not inside components. Shared interfaces live in `types/index.ts`.
- Path alias: `@/*` maps to the repo root (e.g. `@/components/Hero`).

### Styling

There is no `tailwind.config.js`. Design tokens (colors, typography, spacing) are defined in `app/globals.css` under Tailwind v4's `@theme`, which generates classes such as `bg-primary-container`, `text-on-surface-variant`, `font-display`, and `font-label`. Add or change tokens there. Icons come from `lucide-react`.

### Animation

Sections animate with GSAP via `@gsap/react`'s `useGSAP`. Components that use scroll animations register `gsap.registerPlugin(useGSAP, ScrollTrigger)` at module level, so those components must be client components.

### Contact form

`ContactForm.tsx` has no backend. On submit it builds a formatted message and opens `https://wa.me/<number>?text=...` in a new tab. Changing where messages go means editing the WhatsApp number in that file.

### Assets

Static files are served from `public/`. The hero uses `public/images/avatar1.mp4`. `next.config.ts` has an empty `images.remotePatterns`; add a domain there before using remote images with `next/image`.

## Language

Site copy and UI strings are in Spanish; follow the existing language when editing user-facing text.
