# 2nd Chance Mobile Car & Van Valet — Ferndown, Dorset

Premium, conversion-focused site. Next.js 15 (App Router) · TypeScript · Tailwind · Framer Motion · Lucide.
Built by HD Southern Development.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Push to GitHub and import into Vercel (framework preset: Next.js — auto-detected).

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables.
Until at least one delivery channel is configured the quote form returns a clear
"please call us on 07718 799720" error rather than silently pretending to submit.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends the enquiry email + customer confirmation |
| `RESEND_FROM` | Verified sender, e.g. `2nd Chance <quotes@yourdomain.co.uk>` (defaults to Resend's onboarding sender) |
| `BUSINESS_EMAIL` | Where quote requests are delivered |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Optional — also stores enquiries |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used by metadata, sitemap, robots and JSON-LD |

## Supabase table (optional)

```sql
create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text,
  phone text,
  service text,
  message text,
  source text default 'website',
  status text default 'new'
);
```

## Before sending to the client / launch

1. **Photography** — every image is a placeholder from Unsplash, referenced in `lib/config.ts`
   (`services`, `gallery`, `beforeAfter`, plus the hero constant in `components/sections/Hero.tsx`).
   Swap for 2nd Chance's own work. Local files: drop into `public/images/` and change the paths.
2. **Reviews** — `reviews` in `lib/config.ts` is sample copy, labelled as such on the page
   (`reviewsNote`). Replace with the real Yell reviews and remove the note.
3. **Before/after** — the "before" side is a CSS grade of the same photo, and the section carries a
   visible demo caption. Replace with real matched before/after pairs and remove the caption in
   `components/sections/Transformation.tsx`.
4. **Socials** — no Facebook/Instagram found for the business, so no social links are rendered.
   Add them to the footer once the client provides them.
5. Set `NEXT_PUBLIC_SITE_URL` to the final domain.

## Structure

```
app/            layout (metadata + JSON-LD), page, robots, sitemap, not-found, api/quote
components/ui   Reveal, Shot, Stars, Counter, SectionHeading, BeforeAfter
components/site Nav, Footer, MobileBar (sticky Call / Quote)
components/sections  Hero, TrustStrip, Services, Transformation, WhyChoose, Process,
                MobileValeting, Commercial, Work, Reviews, Areas, About, Faq, FinalCta, QuoteSection
components/forms QuoteForm
lib/            config (all business content), schema (JSON-LD), validation (Zod), resend, supabase
```

All copy, pricing, areas and imagery live in `lib/config.ts` — one file to edit.
