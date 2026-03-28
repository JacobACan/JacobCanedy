# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

All commands run from `jacob-canedy-website/`:

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build — always run after changes to verify
pnpm lint         # ESLint (flat config, next/core-web-vitals + typescript)
```

Package manager is **pnpm** (v10, lockfile v9). After adding/removing dependencies, run `pnpm install` to regenerate `pnpm-lock.yaml` — Vercel deploys fail if the lockfile is out of sync.

## Architecture

**Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS 4 (via `@tailwindcss/postcss`).

**Layout:** Single-page scrolling editorial site. No routing beyond `/`. The page renders `MainLayout`, which composes a hero header, sticky section nav, five content sections, and a footer.

**Design System:** WES (Wrightwood Education Studio) — warm, editorial, handcrafted aesthetic. All design tokens are CSS custom properties in `app/globals.css` (`--cream`, `--ink`, `--forest`, `--amber`, `--stone`, `--pine`, `--rust`, etc.). Typography uses Playfair Display (serif, display) + DM Sans (light body) loaded via `next/font/google` in `app/layout.tsx`. Reference spec lives at `docs/design/wes-design-spec.html`.

**Key files:**
- `app/globals.css` — Design tokens, paper grain texture, stop-motion animation keyframes
- `app/data/content.ts` — All personal/resume data (education, work, projects). Single source of truth for content.
- `app/components/MainLayout.tsx` — Page composition and hero/footer
- `app/components/SectionNav.tsx` — Sticky nav with IntersectionObserver scroll tracking
- `app/components/MarginAnimations.tsx` — Ambient stop-motion SVG animations in page margins (xl: screens only)
- `app/components/ui/IntroCover.tsx` — Custom SVG cover for intro YouTube video (replaces thumbnail)

**Path alias:** `@/*` maps to project root (e.g., `@/app/data/content`).

## Style Conventions

- Colors: Always use CSS variables (`var(--cream)`, `var(--amber)`, etc.), never raw hex in components.
- Typography: Headings use `var(--font-playfair)`, body uses `var(--font-dm-sans)`. Italic serif signals warmth/personality per the design spec.
- No `framer-motion` — animations are CSS-only using `steps()` for stop-motion feel (8-12fps).
- No pixel art, no biome theming — those were removed in the WES redesign.
- Tailwind classes for layout/spacing, inline `style` for design-token colors and typography.

## Deployment

Deployed on Vercel from `main` branch. The Vercel build root is `jacob-canedy-website/`. The `pnpm-lock.yaml` must be committed and in sync with `package.json` or deploys will fail.
