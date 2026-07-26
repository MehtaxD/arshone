# Arshone Fire Safety Website

Production-ready Next.js website for Arshone Fire Safety Pvt Ltd, optimized for Surat and Gujarat fire safety enquiries.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local SEO metadata, sitemap and robots
- Structured schema markup
- Responsive conversion-focused pages
- Surat and Gujarat service-area targeting

## Pages

- `/`
- `/about`
- `/services`
- `/services/fire-alarm-system-installation`
- `/services/fire-hydrant-system-installation`
- `/services/fire-sprinkler-system-installation`
- `/services/fire-extinguisher-supply`
- `/services/fire-extinguisher-refilling`
- `/services/fire-safety-audit`
- `/services/fire-noc-consultancy`
- `/services/annual-maintenance-contract`
- `/products`
- `/projects`
- `/industries`
- `/blog`
- `/contact`

## Local Development

 bash
npm install
npm run dev
 

Open `http://localhost:3000`.

## Production Build

 bash
npm run build
npm run start
 

## Deploy

Best options:

- Vercel: connect the Git repository and deploy as a Next.js project.
- Netlify: use Next.js runtime with build command `npm run build`.
- VPS or cPanel Node hosting: install Node.js 20+, run `npm install`, `npm run build`, then run `npm run start`.

## WordPress Connection Options

This project does not require WordPress. If WordPress is needed later, use one of these paths:

- Keep this site as the frontend and use WordPress only as a headless CMS through the WordPress REST API.
- Convert the design into a custom WordPress theme.
- Host this Next.js site separately and link the WordPress blog under a subdomain such as `blog.arshone.com`.

## Content To Replace Before Launch

- Phone number in `lib/site-data.ts`
- WhatsApp number in `lib/site-data.ts`
- Email and address in `lib/site-data.ts`
- Real project photos and final project case studies
- Social media links in `components/footer.tsx`
