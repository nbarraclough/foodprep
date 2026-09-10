# The October Freezer

Freezer meal plan for after the baby comes: recipes, three cook-day schedules, a shopping list and a reheat guide. Checkboxes sync between everyone signed in, so two people on two phones see the same ticks.

Live at https://foodprep.butcherscott.com (household PIN required).

## How it works

- Next.js app on Vercel. Recipe data lives in `lib/source-data.ts`; edit it and redeploy.
- Ticks are stored in a Neon Postgres table (`ticks`) and polled every 4 seconds while the tab is open. Each tick records who made it.
- Sign-in is a shared 4-digit PIN (`HOUSEHOLD_PIN`, entered on a tap keypad or the keyboard) plus a name. The session is an HMAC-signed HttpOnly cookie (`SESSION_SECRET`). Sign-in attempts are rate-limited per IP.
- `/print` lets you choose what goes on paper: shopping list (optionally only unbought items), any set of recipe cards and which parts of them, cook days, reheat guide.
- Kitchen mode makes the type bigger and keeps the screen awake. Any step with a duration gets a one-tap timer.

## Local development

```sh
pnpm install
vercel env pull .env.local   # DATABASE_URL, HOUSEHOLD_PIN, SESSION_SECRET
pnpm dev
```

## Changing the PIN

```sh
vercel env rm HOUSEHOLD_PIN production
vercel env add HOUSEHOLD_PIN production
git commit --allow-empty -m "Redeploy" && git push
```

Deploys go through the GitHub connection. Commits must be authored as nick@barraclough.nz (the GitHub account linked to the Vercel team) or Vercel blocks them.

Existing sessions stay valid until they expire (a year) or the user signs out. Rotate `SESSION_SECRET` to sign everyone out at once.

## Audit

See `AUDIT.md` for every correction made to the recipes and the verified sources. The original single-file version is kept in `original/index.html`.
