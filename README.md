# Premium Portfolio Website

Single-page developer portfolio built with **Next.js (App Router)**, **React**, **JavaScript**, **Tailwind CSS v4**, and **SCSS Modules**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Edit `src/data/portfolioData.js` for name, links, experience, projects, testimonials, and stats.

## Project structure

- `src/app/` — layout, page, global styles
- `src/components/` — section and UI components (each with `.module.scss`)
- `src/styles/` — theme tokens, mixins, utilities
- `app/` — thin re-exports so Next.js resolves routes (required when both `app/` and `src/` exist)

## Theme

Light/dark mode uses CSS variables in `src/styles/_theme.scss`, persisted in `localStorage`, with system preference as the default on first visit.

## Build

```bash
npm run build
npm start
```
