# Publication workflow

## Stack
Astro + MDX + GitHub + Cloudflare Pages. No paid service required for ordinary static publishing on free tiers.

## Editorial gate
1. New articles start with `status: draft` and do not appear in the site or RSS.
2. Changes are proposed on `review/*` branches through pull requests.
3. Run CI and inspect preview before merging.
4. Only change status to `published` after source verification and explicit editorial approval.
5. Merge the approved PR to `main`; Cloudflare Pages deploys from `main` once Git integration is configured.

## Cloudflare Pages setup
Connect the GitHub repository through Cloudflare Pages, select framework preset Astro, build command `npm run build`, output directory `dist`, production branch `main`, Node 22. Set `SITE_URL` to the actual assigned production URL before publishing to ensure correct canonical and RSS URLs. Disable automatic production deployments from any other branch; use previews for pull requests. Cloudflare account linking is a separate manual authorization step.

## Editorial standards
Cite original texts and modern scholarly sources with URLs. Label speculation and interpretation; do not present ancient writings as literal predictions of AI. Keep drafts unpublished until reviewed.
