# 2nd Chance Mobile Car & Van Valet

Marketing site for a mobile car and van valeting business covering Southampton and
the surrounding Hampshire towns.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion** and **Lucide** icons. Deployed via GitHub to Vercel.

---

## Why this rebuild exists

The previous copy of this project failed on Vercel with:

> Error: No Output Directory named "public" found after the Build completed.

That is not a code fault. It happens when the Vercel project treats the repo as a
plain static site instead of a Next.js app, so it looks for a `public/` folder
rather than serving the `.next` build output.

This version fixes it inside the repo with a `vercel.json` that pins the framework:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs"
}
```

Because this lives in the repo, it overrides whatever the dashboard Framework Preset
dropdown is set to, so the build cannot fall back to static-site behaviour.

Three other changes reduce build risk:

- **Next.js pinned to `15.5.25`** instead of `15.5.4`, which npm flags for
  CVE-2025-66478.
- **Fonts load via a stylesheet `<link>` rather than `next/font`.** `next/font`
  downloads fonts at build time, so a network hiccup on the build machine can fail
  the entire build. A stylesheet link cannot.
- **No ESLint dependency**, so the build cannot fail on lint rules such as
  `react/no-unescaped-entities`.

---

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To check a production build before pushing:

```bash
npm run build
```

---

## Editing the content

Almost everything a client would want changed lives in one file: **`lib/site.ts`**.

| What | Where in `lib/site.ts` |
| --- | --- |
| Business name, phone, email, hours, socials | `site` |
| Service cards | `services` |
| Package names, prices, durations, inclusions | `packages` |
| How it works steps | `processSteps` |
| Coverage areas | `coverage` |
| FAQ questions and answers | `faqs` |
| Vehicle options in the quote form | `vehicleTypes` |

Anything marked `CONFIRM` in that file is a placeholder that must be checked with the
client before launch: phone number, email, prices, coverage list and social links.

---

## The quote form

`components/QuoteForm.tsx` posts to `app/api/quote/route.ts`.

By default the route runs in **demo mode**: it validates the submission, rejects
honeypot/bot entries and returns a success message, but sends nothing anywhere. The
confirmation panel says so explicitly.

To switch on real email delivery, set these environment variables in Vercel
(Settings, Environment Variables) and redeploy:

```
RESEND_API_KEY=...
QUOTE_TO_EMAIL=where-enquiries-should-land@example.com
QUOTE_FROM_EMAIL=quotes@yourverifieddomain.co.uk
```

The route calls the Resend HTTP API directly, so there is no extra package to
install. If any of the three variables is missing it stays safely in demo mode.

---

## Artwork

All illustrations are original inline SVG (`components/CarGraphic.tsx`,
`components/Logo.tsx`, and the before/after panels in `components/Restoration.tsx`).
There is no stock photography and no external image host, so nothing can break or
expire. Swap the before/after illustration for the client's own photography once it
is available.

---

## Project structure

```
app/
  api/quote/route.ts    Quote form endpoint (demo mode by default)
  globals.css           Tailwind layers and component classes
  layout.tsx            Metadata, fonts, html shell
  page.tsx              Home page and JSON-LD structured data
  robots.ts             /robots.txt
  sitemap.ts            /sitemap.xml
components/             UI components
lib/site.ts             All business content lives here
vercel.json             Forces the Next.js framework preset
```

---

Site by [HD Southern Development](https://hdsoutherndevelopment.com)
