# AUDIT_REPORT

## Findings

### External image usage scan (`ts/tsx/css/md`)
- Image CDNs found in source:
  - `images.unsplash.com` (service/about/home visual assets).
  - `static.readdy.ai` (legacy image URLs in footer + services preview before refactor).
- Notion API endpoint usage found (`api.notion.com`) but this is not an image source.
- No remaining `static.readdy.ai` image URLs after refactor.

### Layout/structure
- `app/layout.tsx` already had `<html><body>`, but lacked baseline body styling.
- Section/container spacing was partially standardized, but mixed `py-16`, `px-4/sm/lg` and ad-hoc wrappers still existed.

### Radius consistency
- Card-like surfaces were mixed (`rounded-xl`, `rounded-[48px]`, custom wrappers).
- Card abstraction existed but defaulted to `rounded-xl`, which violated card radius policy.

## Changes made

### 1) External image policy and centralization
- Added centralized asset constants in `lib/assets.ts`:
  - `LOGO_IMAGE_PATH = "/images/NILILIA_LOGO.svg"`
  - `THUMBNAIL_FALLBACK_IMAGE_PATH = "/images/thumbnail-fallback.svg"`
- Replaced legacy static logo URL with local logo constant in footer.
- Added logo/fallback image assets in `public/images/`.
- Replaced `static.readdy.ai` service preview images with local `/public/images/*` assets.

### 2) Unsplash centralization (future local replacement prep)
- Added `lib/imageMap.ts` to keep all Unsplash URLs in one place.
- Replaced direct Unsplash literals in:
  - `app/[locale]/services/page.tsx`
  - `app/[locale]/services/[slug]/page.tsx`
  - `components/home/WhyNililiaSection.tsx`
  - `app/[locale]/about/page.tsx`

### 3) Notion thumbnail hardening + UI states
- Added client thumbnail component with error fallback:
  - `components/notion/NotionThumbnail.tsx`
- Added standardized UI state components:
  - `components/ui/states.tsx` (`LoadingState`, `EmptyState`, `ErrorState`)
- Applied loading/empty/error patterns to Notion list pages:
  - `app/[locale]/news/page.tsx`
  - `app/[locale]/cases/page.tsx`
  - `app/[locale]/news/loading.tsx`
  - `app/[locale]/cases/loading.tsx`
- Applied thumbnail fallback rendering in detail pages:
  - `app/[locale]/news/[slug]/page.tsx`
  - `app/[locale]/cases/[slug]/page.tsx`

### 4) Top items (#1, #2, #4, #5) alignment
- Root layout baseline styles added in `app/layout.tsx`.
- Standardized `Container` and `Section` defaults:
  - `Container`: `max-w-7xl mx-auto px-6`
  - `Section`: `py-24`
- Added `CardShell` with card policy radius (`rounded-[32px]`) and reused in `Card`.
- Migrated key card-like UI to card radius policy (news/cases cards, services preview cards, core value cards, about card blocks, FAQ accordion items).

### 5) Lightweight static verification
- Added `scripts/verify-image-policy.mjs`:
  - Scans `app/components/lib` TS/TSX/CSS/MD files for external image URLs.
  - Fails on forbidden domain `static.readdy.ai`.
  - Fails on image hosts outside allowlist (`images.unsplash.com`, `secure.notion-static.com`, `prod-files-secure.s3.us-west-2.amazonaws.com`).
- Added npm scripts:
  - `check:image-policy`
  - `check:all`

### 6) Next.js image remote patterns minimization
- Updated `next.config.ts` remote patterns to only required domains:
  - `images.unsplash.com`
  - `secure.notion-static.com`
  - `prod-files-secure.s3.us-west-2.amazonaws.com`

## Remaining TODO
- Future phase: replace `UNSPLASH_IMAGES` URLs with `/public/images/*` local assets in `lib/imageMap.ts` only.
- Optional hardening: migrate remaining `<img>` tags to `next/image` progressively to remove lint warnings.
- Localization health baseline improved: `MISSING_MESSAGE: Home` build-time logs are resolved by locale-safe namespace fallback and common-key navigation labels.


### Placeholder asset note
- PNG placeholder assets were replaced with SVG text placeholders due to PR tool binary-file limitations.
- Real production assets can later be swapped in-place at the same file paths without code changes.


### Follow-up fixes (post-review)
- Resolved `MISSING_MESSAGE: Home` build-time logs by making Home-page translations locale-safe: locales without a `Home` namespace now fall back to `en` for that namespace (`app/[locale]/page.tsx`).
- Updated header navigation labels to use i18n message keys from `common` instead of hardcoded strings, improving consistency across locales (`components/layout/Header.tsx`).
- Added an optional `spacing` variant to `Section` (`default`=`py-24`, `tight`=`py-16`) and applied `tight` to News/Cases list & detail pages to improve desktop whitespace rhythm without broad redesign.


### CI default-branch alignment
- Repository default branch is `work`, so CI push triggers were updated to include `work` (and `main` for compatibility).
- Expected merge sequencing for the rollout remains: A -> B -> C -> D.

## Release checkpoints

### checkpoint: gates G1-G4 green
- Timestamp (Asia/Seoul): 2026-02-20 11:36:50 KST
- Commit SHA: pending (set by checkpoint commit)
- Green gates: G1 npm ci, G2 lint, G3 image-policy, G4 build
- Changes:
  - Added locale support extension with `ja` route coverage while preserving existing locale setup.
  - Added SEO metadata layouts for About, Services, and Contentsflys route segments.
  - Improved services/contentsflys link semantics by removing nested interactive Link+button patterns.

### checkpoint: functional gates G5-G8 green
- Timestamp (Asia/Seoul): 2026-02-20 11:39:10 KST
- Commit SHA: pending (set by checkpoint commit)
- Green gates: G5 locale routing/links, G6 key page rendering, G7 Cases/News list state UX + no nested interactive in list pages, G8 Notion thumbnail fallback resilience
- Changes:
  - Added `ja` locale message file and routing/header language options, and aligned middleware locale matcher for live routing.
  - Verified locale/page route health (`ko/en/ja/id` and key pages) with HTTP status checks.
  - Preserved Notion list loading/empty/error state wiring and fallback thumbnail behavior with no runtime crash paths.

### checkpoint: quality/ops gates G9-G12 green
- Timestamp (Asia/Seoul): 2026-02-20 11:40:53 KST
- Commit SHA: pending (set by checkpoint commit)
- Green gates: G9 SEO baseline, G10 a11y baseline, G11 image/perf sanity, G12 ops readiness
- Changes:
  - Added route-level metadata baselines for About/Services/Contentsflys and dynamic metadata for Services detail pages.
  - Added `DEPLOY.md` with build/run/env/image-allowlist/rollback/incident guidance.
  - Maintained `next/image` usage and stable image sizing for key visual sections to reduce layout shift risk.
  - Removed remaining Link+button nesting in Services CTAs to improve keyboard/accessibility semantics.


### release-cut validation checklist
- Timestamp (Asia/Seoul): 2026-02-20 12:05:00 KST
- Latest commit SHA at validation start: `3827049`
- [ ] CI run confirmation (attach Actions URL for this branch/PR)
- [ ] Notion failure-mode test: invalidate `NOTION_API_KEY` in preview/staging and verify News/Cases fallback states render without runtime crash
- [ ] Secrets hygiene scan completed: `git grep -nE "NOTION|TOKEN|SECRET|API_KEY" -- ':!*.lock'` (pattern scan only; do not print secret values in reports)
- [ ] Post-deploy URL checks return HTTP 200 for `/`, `/en`, `/ja`, `/id`, `/en/services`, `/en/cases`, `/en/news`
- [ ] Post-deploy smoke confirms no console errors on key pages and fallback thumbnail renders when remote thumbnail fails

### robots/sitemap note
- `robots.txt` and `sitemap.xml` are currently intentionally omitted pending production canonical domain decision.
- Add them at release cut once the canonical URL is finalized to avoid indexing a temporary/staging hostname.
