# Administrator deployment guide

## Account access
The repository is `mineolapscouncil/mineola-ps-council-website`. The connected account `Just-Ghali` has verified write access. Cloudflare and Pages CMS account connections must still be completed and verified.

## Upload source
Unzip this project. From its folder run `git init -b main`, `git add .`, `git commit -m "Build council website"`, `git remote add origin https://github.com/mineolapscouncil/mineola-ps-council-website.git`, then `git push -u origin main`. If the repository has gained content since this guide, clone and integrate it first; never force push.

## Cloudflare Pages
Sign in to the Cloudflare account owning mineolapscouncil.ca. In Workers & Pages create a Pages project, connect GitHub and select the council repository. Set production branch main, build command npm run build, output dist, root project folder, and NODE_VERSION=22. Deploy and inspect the pages.dev preview.

Add mineolapscouncil.ca under the project's Custom domains and complete Cloudflare's DNS prompts. Add www.mineolapscouncil.ca as well. Under Rules → Redirect Rules create a permanent 301 rule for hostname www.mineolapscouncil.ca redirecting to the apex while preserving path and query. Verify both domains' HTTPS and redirect behavior. Avoid changing existing mail DNS records.

## Pages CMS
Open https://app.pagescms.org/, authenticate as an authorized council GitHub user, and authorize repository access. Select the repository and main branch; the root .pages.yml defines the editor. Uploads go to public/uploads. Test in a preview branch before production: change copy, create and hide an initiative, reorder two entries, upload an approved image, and save. Confirm the resulting Git commit and successful Cloudflare preview; then merge and confirm production updates. Main-branch CMS saves publish automatically after Cloudflare Git integration is active.

Check current hosted plan/collaborator limits at https://pagescms.org/ before inviting editors; plan availability and account eligibility have not been verified. Prefer individual GitHub accounts over shared passwords.

## Launch checklist
- Council approves campaign wording, privacy text, illustration/palette or replacement assets.
- Add confirmed goal/raised values before enabling progress; add approved donation URLs and actual milestone dates.
- Check phone, tablet, desktop; keyboard access, focus, links and image descriptions.
- Run npm ci and npm run build. Run Lighthouse on the deployed production URL for performance, accessibility and SEO; investigate failures.
- Verify CMS save → GitHub commit → Cloudflare deployment end-to-end.
- Verify apex HTTPS, www 301 with paths/query, sitemap and social image.
- Record account owners and recovery access for future councils.

## Rollback
Use Cloudflare Pages deployment history to restore a known-good deployment, then revert the offending Git commit so subsequent builds match. Never store passwords or API tokens in Git.
