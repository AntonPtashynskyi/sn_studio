# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing and booking website for **InBrows** beauty studio (inbrows.pl) — eyebrow/eyelash styling and professional training. Next.js 14 App Router, React 18, Tailwind CSS v3, NextUI, SCSS modules, Framer Motion.

## Commands

```bash
npm run dev        # development server (localhost:3000)
npm run build      # production build (runs sitemap generation first via prebuild)
npm run start      # start production server
npm run lint       # ESLint
npm run sitemap    # generate public/sitemap.xml manually
```

No test suite is configured.

## Architecture

### Routing and i18n

All pages live under `src/app/[lang]/`. The middleware (`src/middleware.js`) intercepts every request and redirects to a language-prefixed path if one is not already present. Supported languages are defined in `src/app/i18n/settings.js`:

```js
export const fallbackLng = "pl";
export const languages = ["pl", "en", "ua", "ru"];
```

Translation files are in `src/app/i18n/locales/{lang}/{namespace}.json`. Namespaces: `common`, `form`, `trainings`.

**Server Components** use `useTranslation` from `src/app/i18n/index.js`.  
**Client Components** use `useTranslation` from `src/app/i18n/client.js`.

### Parallel Routes (Modal Contact Form)

The `@contact_form` parallel route slot in `src/app/[lang]/` renders the contact form as a modal overlay. The slot is passed as `contact_form` prop to the root layout and mounted independently of `children`. The modal page is at `src/app/[lang]/@contact_form/contact-form/page.jsx` and uses `router.back()` to close.

### Server Actions

`src/app/actions.js` contains all server actions:
- `addEntry(formData)` — validates with Zod schema (`src/libs/schema.js`) and appends a row to Google Sheets via service account JWT.
- `getMetadata(lang)` — returns metadata strings from `src/app/i18n/metadata.js` for the given locale.

Required environment variables (see `.env`):
- `NEXT_PUBLIC_SPREADSHEET_ID`, `NEXT_PUBLIC_SHEET_ID`, `NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL`
- `GOOGLE_SERVICE_PRIVATE_KEY` — note: `\n` in the key value is replaced with actual newlines at runtime
- `ENVIRONMENT_VAR` — set to `"development"` locally; controls canonical base URL (`http://localhost:3000` vs `https://inbrows.pl`)

### Metadata

- Root layout metadata is generated in `src/app/[lang]/layout.jsx` via `getMetadata(lang)`.
- Sub-pages use the `generatePageMetadata()` utility from `src/utils/generatePageMetaData.ts`, passing `{ lang, slug, meta }`.
- Hreflang: note that Ukrainian locale uses `ua` in the URL path but `uk` in the hreflang attribute.

### Sitemap

`scripts/generate-sitemap.js` scans `src/app/[lang]/` and writes `public/sitemap.xml`. It runs automatically before every build (`prebuild` hook). Parallel route folders (`@…`) and private folders (`_…`) are skipped.

### Styling

- Global styles: `src/app/[lang]/globals.scss`
- CSS design tokens: `src/styles/variables.scss`
- Each component has a co-located `.scss` file (e.g. `Navbar/navbar.scss`)
- Tailwind custom colors reference CSS variables (e.g. `neutralBg: "var(--neutralBg)"`) — see `tailwind.config.js`
- NextUI is included as a Tailwind plugin

### Path Aliases

- `@/` → `src/`
- `@public/` → `public/` (used for static image imports)

### Deployment

`next.config.js` sets `output: "standalone"` for Docker. The `Dockerfile` uses this output. Trailing slashes are enforced via `trailingSlash: true`.
