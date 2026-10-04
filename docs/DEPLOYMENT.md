# Vercel Deployment Guide

## Connect the repository

1. Import `Ansh-vibe/cognevance_av_responsive_portfolio_website` into Vercel.
2. Keep the framework preset set to Next.js and the root directory at the repository root.
3. Use the `pnpm-lock.yaml` package manager lockfile; Vercel should install with pnpm and build with `pnpm build`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production site URL.

## Configure Supabase

1. Create a Supabase project and run `supabase/migrations/202610040001_create_contact_messages.sql` in its SQL Editor.
2. In Vercel Project Settings → Environment Variables, add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` for Production and Preview as appropriate.
3. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Do not use a `NEXT_PUBLIC_` prefix.
4. Redeploy after changing environment variables.

Without these Supabase values, the portfolio still loads, but the form explains that storage is not configured and provides the email fallback. Do not claim a form submission was saved unless the API route returns success.

## After deployment

- Open the production URL and review desktop and mobile layouts.
- Confirm the website metadata and links point to the intended destinations.
- Send a controlled contact-form message after configuring Supabase and confirm the row appears in `contact_messages`.
- Check Vercel deployment and function logs for failures. Logs intentionally avoid printing submitted contact details.
- Add the verified deployment and repository URLs to the handoff/report if they change.
