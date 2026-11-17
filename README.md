# Mineola PS Council website

Static Astro + TypeScript + Tailwind site with Pages CMS. No database, payments or tracking.

## Local development
Use Node 22. Run `npm ci`, then `npm run dev`. Production: `npm run build`; inspect with `npm run preview`.

## Content
Edit `src/data/site.json`, `src/data/project-play.json`, or JSON collection entries in `src/content/`. `.pages.yml` exposes these through Pages CMS. All visible collections render on the homepage or Project Play page. Hidden samples are supplied for initiative categories; no invented dates, totals or donation links are published.

The palette and playground illustration are temporary visual direction, not approved school branding or a proposed playground design. Replace with approved photography and meaningful image descriptions. Council must review campaign claims before public launch.

## Status
Build can be tested locally. GitHub push, Cloudflare deployment, custom domain, and authenticated CMS round trip must be verified separately. See docs/deployment.md and docs/council-editor-guide.md.
