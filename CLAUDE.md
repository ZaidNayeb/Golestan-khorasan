# Golestan Khorasan

Corporate website for a food manufacturing company based in Herat, Afghanistan. Showcases products (fresh juices, yeast, packaged foods), facilitates B2B partnerships, and provides company info. All copy is in Farsi (Persian) with RTL layout.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript 5**
- **Tailwind CSS** + custom CSS in `app/globals.css`
- **Framer Motion** — scroll-reveal and carousel animations
- **Sanity v3** — CMS dependency installed but not yet wired up
- **Vazirmatn** — Google Font loaded in `globals.css`, set as `font-sans` in `tailwind.config.ts`

## Key Directories

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router — `layout.tsx` (root shell), `page.tsx` (homepage sections), `globals.css` |
| `components/` | Reusable UI: `header.tsx`, `footer.tsx`, `HeroRotator.tsx`, `reveal.tsx`, `Categories.tsx`, `Advantage.tsx` |
| `data/site.ts` | Single source of truth for all content — `siteConfig`, `navLinks`, `stats`, `categories`, `products`, `posts` |
| `lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `public/images/` | Logo (`pansy-logo.svg`) and product preview images |

## Commands

```bash
npm run dev    # dev server → localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

No test runner is configured.

## RTL / Farsi Notes

- `<html lang="fa" dir="rtl">` is set in `app/layout.tsx`
- Global `direction: rtl` is enforced in `globals.css`
- Use `right-*` / `left-*` Tailwind utilities with RTL semantics in mind

## Current State

- Only the homepage (`/`) is implemented; nav links (`/products`, `/about`, `/blog`, `/contact`) lead to 404s
- Sanity CMS schema not yet created — all content lives in `data/site.ts`
- `framer-motion`, `lucide-react`, `clsx`, and `tailwind-merge` are used but missing from `package.json` dependencies

## Additional Documentation

- [Architectural Patterns](.claude/docs/architectural_patterns.md) — component split, data layer, styling conventions, animation patterns
