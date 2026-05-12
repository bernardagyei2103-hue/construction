# RodeMann Infrastructure B.V.

Production-ready **static corporate website** for a Netherlands-based civil engineering and infrastructure company.

Built with **Next.js App Router** (latest stable line), **TypeScript strict mode**, **CSS Modules**, and **`next/font`** for the Inter + Manrope pairing (same families served on Google Fonts). Styled without Tailwind or third-party UI kits—optimized for a credible European infrastructure consultancy aesthetic and deployed as fully static HTML.

## Typography (`next/font` note)

The brief specifies **`next/font/google`** with Manrope (headings) and Inter (body). Some CI/CD or sandboxed builders cannot resolve **`fonts.gstatic.com`**, causing **`next build`** to hang or fail while fetching fonts.

This repo ships **equivalent variable fonts** via **`next/font/local`**, loading Fontsource releases (`@fontsource-variable/inter`, `@fontsource-variable/manrope`) from `node_modules`. Typography stays aligned with the Google Fonts pairing while remaining deterministic for offline/static export.

If your deployment permits outbound font downloads during builds, you can swap `localFont` in `app/layout.tsx` for:

```tsx
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});
```

Then remove the `@fontsource-variable/*` packages from `package.json` if they are unused.

## Prerequisites

- **Node.js** 18.18+ or 20+ (recommended)

## Setup & install

```bash
npm install
```

## Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

This runs `next build` with `output: 'export'` (configured in `next.config.js`), emitting static assets into `out/`.

## Static export (deployment artifact)

After `npm run build`:

- Deploy the **`out/`** directory to any static host (Netlify, S3 + CloudFront, Azure Static Web Apps, GitHub Pages with appropriate base path configuration, etc.).
- No Node runtime is required in production.

## Lint

```bash
npm run lint
```

## Project layout

- `app/` — root layout, global styles, home page composition, `not-found`.
- `components/` — section modules (`Navbar`, `Hero`, `TrustBar`, `Services`, …).
- `hooks/useScrollReveal.ts` — intersection-driven reveal helper for motion-aware sections.
- `public/images/` — optional local imagery (hero/projects currently reference curated `picsum.photos` URLs).

## Configuration notes

- **Images**: Remote placeholders load from `https://picsum.photos`. `next.config.js` sets `images.unoptimized: true` for compatibility with static export.
- **SEO**: Global metadata (title, description, Open Graph, Twitter) is declared in `app/layout.tsx`. Replace `metadataBase` and canonical URLs with your production domain before launch.

## Verification checklist

- `npm run build` succeeds — generates static export under `out/`.
- TypeScript strict mode enabled via `tsconfig.json`.
- No purple accent colors in the design palette (steel blue, burnt orange, slate, concrete neutrals).
- Semantic landmarks, skip link, focus states, and descriptive alt text on imagery.

Replace placeholder legal/copy/KvK/VAT strings with your company filings prior to going live.
