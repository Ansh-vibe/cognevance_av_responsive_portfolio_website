# Project Report — Responsive Portfolio Website

**Project:** Ansh Vishwakarma Responsive Portfolio Website  
**Report date:** 2026-10-04  
**Live site:** https://ansh-vishwakarma-portfolio-website.vercel.app/  
**Source:** https://github.com/Ansh-vibe/cognevance_av_responsive_portfolio_website

## Overview

The project is a responsive personal portfolio that introduces Ansh Vishwakarma as a full-stack developer and founder. It uses a dark, 3D-inspired art direction with oversized display typography, a capabilities marquee, a contrasting services panel, project cards, and career information.

## Goals and delivered features

- Present a clear developer/founder introduction and profile links.
- Showcase hospitality websites, CVForge, telecom KPI work, and LTE/5G analysis using the resume-provided destinations.
- Explain relevant development services, experience, education, skills, certifications, and leadership.
- Provide a contact form with accessible field labels and submission states.
- Store messages in Supabase through a server-side endpoint after environment setup.
- Provide deployment instructions, database migration, screenshots, and project documentation.

## Architecture

| Area | Implementation |
| --- | --- |
| Frontend | Next.js App Router, React, TypeScript, Tailwind CSS, custom responsive CSS |
| Content | Centralized in `lib/portfolio-data.ts` |
| Contact UI | `components/contact-form.tsx` |
| Contact backend | `app/api/contact/route.ts`, server-side validation and Supabase REST insert |
| Database | Supabase Postgres `contact_messages` table, migration in `supabase/migrations/` |
| Deployment | Vercel |

## Data handling and security

Contact data includes a name, email, subject, and message. The API route enforces length limits, basic email validation, an origin check, and a honeypot field. The service-role key is used only on the server. The migration enables Row Level Security and grants no read, update, or delete access to public roles. No production keys are included in the repository.

## Screenshots

- Desktop capture: [`../docs/screenshots/portfolio-desktop.jpg`](../docs/screenshots/portfolio-desktop.jpg)
- Mobile capture: [`../docs/screenshots/portfolio-mobile.jpg`](../docs/screenshots/portfolio-mobile.jpg)

## Setup and deployment

See [README.md](../README.md) for local development and [DEPLOYMENT.md](../docs/DEPLOYMENT.md) for Vercel and Supabase configuration. The site can render before credentials are added; message persistence requires a Supabase project and server-only environment values.

## Limitations and next steps

- Contact-message persistence must be enabled by configuring Supabase secrets in Vercel.
- Project images use remote sources; replace them with approved project screenshots where available.
- Verify each preview link remains active before using it in formal promotion.
