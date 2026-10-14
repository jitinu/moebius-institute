# MOEBIUS: Institute for Intelligence & Humanity

Website for MOEBIUS, a youth-focused think tank on artificial intelligence and humanity.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**, exported as a fully static site (`output: "export"`), so it can be hosted anywhere static files can be served — Vercel, GitHub Pages, Netlify, Cloudflare Pages, an S3 bucket.

## Running locally

Requires Node.js 18.17 or newer (an `.nvmrc` pins 22).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export → ./out
npm run start      # serve ./out locally (uses npx serve)
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/                 Routes (App Router). One folder per page.
  layout.tsx         Fonts (Fraunces + Inter via next/font), header, footer, custom cursor
  page.tsx           Home
  mission/ why/ difference/ people/      Content pages
  research/ initiatives/ events/ contact/  "Coming soon" pages (shared EmptyState)
components/
  MobiusHero.tsx     Interactive Möbius line-art (cursor parallax, desktop only)
  MobiusMark.tsx     Static Möbius line-art (wordmark, accents)
  Cursor.tsx         Dot + lagging ring cursor with "View"/"Read" labels
  Magnetic.tsx       Magnetic hover wrapper for nav links and buttons
  Reveal.tsx         IntersectionObserver fade/translate reveal
  ProfileCard.tsx    Person card rendered from data/people.ts
  EmptyState.tsx     Shared placeholder for unpublished sections
  Header.tsx Footer.tsx PageHeader.tsx Section.tsx Prose.tsx ButtonLink.tsx
data/
  people.ts          Typed people directory (see below)
  navigation.ts      Nav and footer links
lib/
  mobius.ts          Möbius strip geometry → SVG paths
  site.ts            Site name, description, placeholder contact details, basePath helper
  useMotionAllowed.ts  Hook: fine pointer + no prefers-reduced-motion
public/
  favicon.svg wordmark.svg people/placeholder.svg
```

## Editing people

Everything on `/people` (and the preview on the home page) is rendered from `data/people.ts`.
Each entry is a typed `Person`:

```ts
{
  id: "jane-doe",                  // stable id; also the headshot filename by convention
  name: "Jane Doe",
  role: "Co-founder",
  bio: "Two or three factual sentences approved by the person.",
  headshot: "/people/jane-doe.jpg", // optional; 4:5 portrait, ~800×1000px, in /public/people
  expertise: ["Education", "Policy"],
  links: [{ label: "Website", href: "https://…" }], // optional
  group: "Founding team",          // "Founding team" | "Fellows" | "Advisors"
  placeholder: false,              // placeholders are labelled in the UI
}
```

The repository ships with **placeholder entries only**. They are labelled "Placeholder" on the site and must be replaced before launch.

## Editing copy and contact details

- Page copy lives in each `app/**/page.tsx`.
- Site name, description, placeholder email and social links live in `lib/site.ts`.
- Navigation lives in `data/navigation.ts`.

## Design notes

- Palette: paper `#FAFAF7`, ink `#1B1B19`, muted ochre accent `#9C7A45`. Defined in `tailwind.config.ts`.
- Type: Fraunces (serif display) and Inter (sans body), self-hosted at build time via `next/font/google`.
- Motion: all interactions check `(hover: hover) and (pointer: fine)` and `prefers-reduced-motion`. On touch devices and for users who prefer reduced motion, the custom cursor, magnetic hover and hero parallax are disabled and scroll reveals render content immediately.

## Deploying

### Vercel (simplest)

1. Import the GitHub repository at vercel.com/new.
2. Framework preset: Next.js. No environment variables needed.
3. Deploy. Every push to `main` redeploys.

### GitHub Pages

The site supports a sub-path through `NEXT_PUBLIC_BASE_PATH`.

1. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Run the **Deploy to GitHub Pages** workflow (Actions tab → *Deploy to GitHub Pages* → *Run workflow*). It builds with `NEXT_PUBLIC_BASE_PATH=/moebius-institute` and publishes `./out`.
3. The site will be served at `https://jitinu.github.io/moebius-institute/`.

If you later attach a custom domain, remove the `NEXT_PUBLIC_BASE_PATH` line from `.github/workflows/deploy-pages.yml`.

### Any static host

```bash
npm run build
# upload the contents of ./out
```
