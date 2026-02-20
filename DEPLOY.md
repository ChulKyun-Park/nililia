# Nililia Deployment & Operations Guide

## 1) Local setup and run

```bash
npm ci
npm run dev
```

App runs on `http://localhost:3000` by default.

## 2) Release build validation

```bash
npm run lint
npm run check:image-policy
npm run build
```

All commands must pass before deploy.

## 3) Required environment variables

Create `.env.local` (or platform secrets) with:

- `NOTION_API_KEY`
- `NOTION_NEWS_DATABASE_ID`
- `NOTION_CASE_DATABASE_ID`

If Notion variables are missing, News/Cases may render fallback empty/error states.

## 4) Image host allowlist management

Single allowlist source:

- `config/image-host-allowlist.json`

Used by:

- `next.config.ts` (`images.remotePatterns`)
- `scripts/verify-image-policy.mjs`

When adding a new remote image host:
1. Add host to the JSON allowlist.
2. Run `npm run check:image-policy`.
3. Run `npm run build`.


## 5) Secrets hygiene (pattern-only preflight)

Run a pattern scan before release to catch accidental secret-like strings in tracked files:

```bash
git grep -nE "NOTION|TOKEN|SECRET|API_KEY" -- ':!*.lock'
```

Notes:
- This is a pattern-only hygiene check and does not validate real credential values.
- Do not copy/paste suspected values into tickets or chat; redact when reporting findings.

## 6) Deploy checklist

- [ ] `npm ci`
- [ ] `npm run lint`
- [ ] `npm run check:image-policy`
- [ ] `npm run build`
- [ ] Verify locale routes (`/ko`, `/en`, `/ja`, `/id`)
- [ ] Verify News/Cases list pages render loading/empty/error states
- [ ] Verify service and content pages render without console/runtime errors

## 7) Quick rollback steps

1. Re-deploy last known good commit.
2. If issue is image host related, revert allowlist JSON change first.
3. Re-run release gates (`lint`, `check:image-policy`, `build`).
4. Confirm key routes and locales are healthy.

## 8) Incident checklist

### Build failure
- Check TypeScript errors from `npm run build`.
- Reproduce locally with same Node version and clean install (`npm ci`).

### Notion API failure
- Confirm `NOTION_API_KEY` and database IDs are set.
- Validate API access and database permissions in Notion.
- Ensure fallback UI states still render in News/Cases pages.

### Image host blocked
- Check failing host in runtime or `check:image-policy` output.
- If host is valid and required, update `config/image-host-allowlist.json`.
- Re-run `npm run check:image-policy` and `npm run build`.


## 9) robots.txt and sitemap.xml policy

`robots.txt` and `sitemap.xml` are intentionally omitted until the production canonical domain is finalized. Add both files in the release cut that introduces the canonical URL so crawlers do not index staging domains.
