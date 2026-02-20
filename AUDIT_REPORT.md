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
