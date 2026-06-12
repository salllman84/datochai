# DatoChai — UI Build Contract (READ FIRST)

You are building ONE page of a Next.js 14 App Router site. A coherent
glassmorphic design system already exists. **Match it exactly.** Do not invent
new colors, spacing scales, or component patterns.

## Golden references — READ THESE before writing
- `src/app/globals.css` — the full design system + utility classes.
- `src/components/pillar/pillar-page.tsx` — the richest reference (sections, glass cards, hero, FAQ, disclaimer).
- `src/components/lottery-overview.tsx` + `src/components/eea-t.tsx` — card grids + snap-scroll.
- `src/components/ui/page-hero.tsx`, `src/components/ui/legal-layout.tsx` — inner-page hero + legal layout.
- `src/lib/site-data.ts`, `src/lib/blog-data.ts` — single source of truth (slugs, markets, experts, FAQ, support lines, posts). Import from here; never hardcode slugs.

## Reusable building blocks (import — do NOT recreate)
- `cn` from `@/lib/cn`
- `Section`, `SectionHeader` from `@/components/ui/section`
- `GlassCard` from `@/components/ui/glass-card`
- `PageHero` from `@/components/ui/page-hero`  (tone="brand" green hero | tone="clean" light)
- `LegalLayout` from `@/components/ui/legal-layout` (legal/whitepaper pages: sticky TOC + prose)
- `FaqAccordion` from `@/components/ui/faq-accordion`
- `UtilityBar` from `@/components/ui/utility-bar` (Bookmark/Heart/Copy on post & data cards)
- `NumberBlocks` from `@/components/ui/number-blocks`
- `PillarAccuracyChart` from `@/components/pillar/pillar-accuracy-chart` (client chart)
- `Reveal` from `@/components/ui/reveal` (optional scroll fade-in)
- `LinkedinIcon` from `@/components/ui/brand-icons`
- Icons from `lucide-react` — **brand icons Linkedin/Github/Twitter/Facebook/Instagram DO NOT EXIST**; use `brand-icons.tsx` or generic icons.

## CSS utility classes available (from globals.css)
`container-custom`, `glass`, `glass-card`, `glass-strong`, `glass-hover`,
`btn-gold`, `btn-gold-outline`, `btn-forest`, `btn-ghost`, `btn-crimson`,
`pill-gold`, `pill-forest`, `pill-crimson`, `pill-nvidia`, `pill-glass`,
`number-block`, `field`, `field-label`, `prose-datochai`,
`h-display`, `h-1`, `h-2`, `h-3`, `skeleton`, `bg-gradient-text`, `no-scrollbar`.

## Palette & type
- Forest `#006400` (forest-900) = authority/primary. Gold `#D4AF37` (gold-500) = CTAs/accent.
  Crimson `#C8102E` (crimson-600) = warnings/errors ONLY. NVIDIA green = AI badges.
- Page bg: `bg-neutral-50 dark:bg-slate-950/40` for grey sections, `bg-white dark:bg-slate-900/40` for white sections, `bg-slate-900 text-slate-100` for dark data sections.
- Headings auto-use Poppins (via global h1–h6 rule). Body = Inter.
- Glass: `glass-card` already = `bg-white/65 backdrop-blur-xl border border-white/70 dark:bg-slate-900/65 dark:border-white/10` rounded-3xl.

## Hard rules
1. **Server components by default.** Add `'use client'` ONLY for state/effects/charts/forms. NEVER pass event handlers (onClick/onError/onChange) to elements inside a server component — it breaks the build.
2. **No `next/image` with `/uploads/...` paths** (assets don't exist). Use CSS gradient placeholders (`bg-gradient-to-br from-forest-900 to-slate-900`) or initials avatars.
3. Every surface needs **dark mode** variants. Prefer semantic tokens: `text-foreground`, `text-muted-foreground`, `border-border`, `bg-background`.
4. Use `next/link` for internal navigation. Slugs come from `site-data.ts`.
5. All visible copy in **Bahasa Melayu**, taken from the requirements doc (you'll be told the exact line range). Preserve headings, sections, and bullet structure.
6. Export `metadata` (static) or `generateMetadata` using the doc's Meta Title/Description.
7. Do NOT render `<Header>`, `<Footer>`, or `<main>` — the route group layout already provides them. Return a React fragment `<>…</>` containing `PageHero`/`Section` blocks.
8. Mobile-first; min 44×44px touch targets; responsive grids.
9. TypeScript strict — no untyped `any`. The page MUST compile.
10. Only create/edit files inside YOUR route folder (and co-located client components). Do NOT modify shared files in `src/components/ui`, `src/lib`, or `globals.css`.

## Content source
`requirements/all-pages_extracted.txt` (page-extracted text; ignore the `--- Page ---`
markers and stray hyphenation/typos — fix obvious OCR typos in the Malay copy).
