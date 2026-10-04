# Ansh Vishwakarma Portfolio

Editorial portfolio for Ansh Vishwakarma, built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Local setup

1. Install dependencies with the project package manager: `pnpm install`.
2. Copy `.env.example` to `.env.local`.
3. Add the Supabase project URL and server-only service role key.
4. Run the development server with `pnpm dev`.

## Supabase setup

Run `supabase/migrations/20261004000000_create_contact_messages.sql` in the Supabase SQL editor (or through your migration workflow). The `contact_messages` table has RLS enabled and denies public reads, updates, and deletes. The server route uses the service role key only on the server to insert validated messages.

If Supabase is not configured, the form shows a clear configuration message and links visitors to direct email instead of pretending a message was stored.

## Vercel deployment

Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to the Vercel project environment variables for Preview and Production, apply the migration, then redeploy. Never expose the service role key as a `NEXT_PUBLIC_` variable. Connect the repository through the Vercel project settings or use the project’s normal GitHub workflow.

## Handoff placeholders

- Repository URL: `[add the connected GitHub repository URL]`
- Deployment URL: `[add the Vercel deployment URL]`

## Screenshot checklist

After deployment, capture the home, work, and contact sections at a desktop viewport and a mobile viewport. Confirm navigation links, external project links, keyboard focus, reduced-motion behavior, and a successful form submission with Supabase configured.
