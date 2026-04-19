# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Version Control

This repo uses **jj (Jujutsu)**, not plain git. Always use `jj` commands:

```bash
jj status
jj commit -m "message"   # always use -m to avoid opening an editor
jj log
```

Never use `git commit`, `git add`, etc. directly.

## Commands

```bash
bun run dev      # dev server on http://localhost:9153
bun run build    # production build
bun run lint     # ESLint
npx tsc --noEmit # type check
```

There are no tests.

## Architecture

Single-page Next.js 15 (App Router) portfolio. One route (`/`) plus a middleware-only redirect system at `/links/*`.

### Styling

Two-layer system:
1. **Tailwind CSS v4** — utility classes on JSX elements. Config is CSS-based (`styles/tailwind.css` with `@import "tailwindcss"`), processed by `@tailwindcss/postcss`. No `tailwind.config.*` file.
2. **SCSS modules** — component-scoped styles (`*.module.scss`). Imported after `tailwind.css` in `layout.tsx`, so SCSS rules override Tailwind's preflight where they conflict (e.g. heading font sizes).

Global utilities like `.clickable-effects`, `.d-inh`, `.d-contents` live in `styles/globals.scss` and are applied as plain class strings on elements.

Fonts: **DM Sans** via `@fontsource/dm-sans`, **MADE Tommy** via local files at `styles/fonts/MADE Tommy/` (used for headings via `font-family: made_tommy`).

### Middleware (`middleware.ts`)

Handles all `/links/:path*` redirections (social profiles, CV, Spotify playlists, etc.) and returns 302s with a 1-hour cache header. The redirect table is the `list` array at the bottom of that file — add new links there.

### Background component

Client component (`'use client'`). Renders a Spline 3D scene and an animated overlay of technology names that fills the viewport height. Title count is calculated dynamically on mount and resize using a ref to measure the first title's height.

### Data

`data/technologies.ts` — single source of truth for the tech icons and links shown in Hero and shuffled in Background. Add new techs here and reference them in `Hero.tsx`.
