# Ansh Vishwakarma Portfolio

Responsive portfolio for Ansh Vishwakarma, built with Next.js App Router, React, TypeScript, and Tailwind CSS. The site presents his full-stack work, selected projects, experience, skills, and an optional Supabase-backed contact form.

## Live links

- Website: [ansh-vishwakarma-portfolio-website.vercel.app](https://ansh-vishwakarma-portfolio-website.vercel.app/)
- Source repository: [Ansh-vibe/cognevance_av_responsive_portfolio_website](https://github.com/Ansh-vibe/cognevance_av_responsive_portfolio_website)

## Technologies

- Next.js App Router and React 19
- TypeScript
- Tailwind CSS 4 with custom responsive CSS
- Supabase Postgres for contact-message persistence
- Vercel for hosting and server-side route execution
- Native browser form validation and accessible status feedback

## Features

- Dark, 3D-inspired responsive design with fluid display type and a moving capabilities marquee.
- About, services, project, experience, education, skills, certifications, and contact sections.
- Project cards link to the supplied hospitality previews, CVForge, and source repositories.
- Accessible contact form with input limits, server-side validation, origin checks, and a honeypot field.
- Contact submissions are written by a server-only API route; messages are not exposed in the public site.
- Reduced-motion support, keyboard focus styles, and mobile layout fallbacks.

## Requirements

- Node.js supported by the current Next.js release in `package.json`.
- pnpm 12.3.4 (or the package manager version recorded in `package.json`).
- A Supabase project to enable persisted contact submissions.

## Local setup

1. Clone this repository and enter its folder.
2. Install dependencies:

   ```bash
   pnpm install --frozen-lockfile
   ```

3. Copy `.env.example` to `.env.local` and set the site URL. Add the Supabase project URL and service-role key if you want the contact form to save submissions locally.
4. Apply the SQL migration described in [Database setup](#database-setup).
5. Start the development server:

   ```bash
   pnpm dev
   ```

6. Open `http://localhost:3000`.

The site can render without Supabase credentials. The form returns a clear setup message and offers the public email link until database credentials are configured.

## Database setup

1. Create a Supabase project.
2. In the Supabase SQL Editor, run [`supabase/migrations/202610040001_create_contact_messages.sql`](supabase/migrations/202610040001_create_contact_messages.sql).
3. Copy the project URL into `NEXT_PUBLIC_SUPABASE_URL`.
4. Copy the project service-role key into `SUPABASE_SERVICE_ROLE_KEY`. Keep it server-only; never add a `NEXT_PUBLIC_` prefix.
5. The migration enables Row Level Security and grants no table access to public/anonymous or authenticated roles. The contact route performs validated inserts server-side. Do not add a public read policy.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL and allowed production origin. |
| `NEXT_PUBLIC_SUPABASE_URL` | For persistence | Supabase project URL used by the server route. |
| `SUPABASE_SERVICE_ROLE_KEY` | For persistence | Server-only key used to insert contact messages. Never expose it in client code. |

Never commit `.env.local` or real credentials. `.gitignore` excludes local environment files.

## Project workflow

1. Update portfolio content and external links in `lib/portfolio-data.ts`.
2. Update page structure in `app/page.tsx` and design tokens/layout rules in `app/globals.css`.
3. Update the contact UI in `components/contact-form.tsx`; server validation and database insertion live in `app/api/contact/route.ts`.
4. For database changes, add a new migration under `supabase/migrations/` and update this README.
5. Run the local build and type check before pushing:

   ```bash
   pnpm typecheck
   pnpm build
   ```

6. Push the approved changes to GitHub. Vercel can build a preview for a branch and production for the configured production branch.
7. Configure the same environment variables in Vercel and redeploy after changing them.

## Screenshots and reports

- Desktop and mobile captures: [`docs/screenshots/`](docs/screenshots/)
- Screenshot notes: [`docs/SCREENSHOTS.md`](docs/SCREENSHOTS.md)
- Project report: [`reports/PROJECT_REPORT.md`](reports/PROJECT_REPORT.md)
- Validation report: [`reports/VALIDATION_REPORT.md`](reports/VALIDATION_REPORT.md)
- Deployment handoff: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)

## Contact

Use the form on the site or email [contact.ansh03@gmail.com](mailto:contact.ansh03@gmail.com).
