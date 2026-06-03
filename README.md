# Masfy Consulting Engineers Website

A modern `Next.js` + `TypeScript` website scaffold for an engineering company.

## Included stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS for projects, services, insights, careers and site content

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Configure Sanity environment variables:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`

For the website frontend, copy `.env.local.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Run the Sanity Studio locally:

```bash
npm run studio
```

The Project schema supports the fields used on the site:

- project name
- industry
- location
- year
- short summary
- full description
- services provided
- challenges
- outcome
- main project image
- gallery images
- homepage featured toggle
- display order

Until Sanity is configured and projects are published, the website falls back to the local project data and images in `public/projects`.

## Project structure

- `app/` — page routes and layout
- `components/` — reusable UI sections and navigation
- `lib/` — data helpers and Sanity client
- `sanity/` — CMS schema definitions

## Next steps

- Replace placeholder copy and page content
- Add Sanity content in the Studio
- Build detailed service and project pages
- Add SEO metadata and sitemap support
