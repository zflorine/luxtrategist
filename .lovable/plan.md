# Independent Strategic Review — Website Build

## Goal
A single-page premium website for your independent strategic review practice, built in the **Frosted porcelain** direction you selected: turquoise (`#0FA7A0`) and gold (`#C6A15A`) accents on a white background, frosted-glass cards, Fraunces serif display + Manrope sans body. All copy used verbatim — no invented labels, slogans, or CTAs.

## What gets built
Single route (`src/routes/index.tsx`) replacing the placeholder. Sections, in order:

1. **Header** — `SR` monogram seal + "Independent Strategic Review" wordmark.
2. **Hero** — your full opening paragraph ("You already have the teams…"), with "What you may be missing" italicized in turquoise. Below: the two paragraphs ("I provide independent strategic second opinions…" / "I review and challenge AI outputs…"). Right side: a frosted-glass card with the 16-year credibility line (house names verbatim) and the two closing lines ("Fully independent…" / "I don't create another layer…").
3. **Engagements** — three glass cards: Flash ($3,000), Advisory ($3,200/month), Partner ($11,000/month). Advisory carries the turquoise-to-gold gradient border as visual emphasis (no invented badge). Each card lists **every bullet from your copy verbatim**, plus the footnote lines (Does not include… / Not a fractional CMO…) and the capacity line.
4. **Additional work** — heading + the full $500/hour sentence, with "$500/hour" shown large.
5. **Footer** — wordmark + "Fully independent. No implementation. No vendor interests."

## Copy policy
Only the exact text you supplied appears. The prototype's invented labels ("Three ways to work together", "Most retained", "See engagements", "From $3,000", "Experience", "Request a review", "Retained advisory") are removed.

## Design tokens (src/styles.css)
- Add brand tokens: `--brand-turq #0FA7A0`, `--brand-gold #C6A15A`, `--brand-ink #14201F`, mapped to `--color-turq/gold/ink`.
- Add `--font-display` (Fraunces) and `--font-body` (Manrope); set body font-family.
- Add `@utility` classes: `glass`, `glass-soft`, `card-shadow` (frosted blur + soft turquoise glow).
- Background: white base with soft turquoise/gold radial gradient blobs (decorative, pointer-events-none).

## Fonts & metadata
- Load Fraunces + Manrope via `<link>` in `src/routes/__root.tsx` head.
- `__root.tsx`: replace placeholder title/description with real defaults; keep as fallback.
- `index.tsx`: own `head()` with a unique title, description, og:title, og:description, og:type, twitter:card. No og:image (no meaningful absolute image).

## Technical notes
- Tailwind v4: tokens via `@theme inline`, fonts via `@theme`, utilities via `@utility`.
- No backend needed (pure marketing page). No Lovable Cloud enablement required.
- Motion is restrained (CSS only): fade/blur on load via the glass treatment — no heavy animation.
- Responsive: hero stacks on mobile; engagement cards collapse to one column on small screens.

## Out of scope
- No contact form / booking (none requested). No blog, no auth, no database.
