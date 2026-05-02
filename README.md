# BrianEKane.com (this repo)

This folder is the marketing site for **Brian E. Kane** — a Next.js homepage focused on recruiting and professional networking. Details of what the page should contain live in [`REQUIREMENTS.md`](REQUIREMENTS.md).

## Quick start

You need Node.js and [Yarn](https://yarnpkg.com/) (Classic v1 is fine) installed — matching the usual versions used with current Next.js — see [`package.json`](package.json).

1. Clone the repo and open this folder in a terminal.
2. Install dependencies: `yarn install`
3. Start the local preview: `yarn dev`
4. Open `http://localhost:3000` in your browser.

To check that production output works on your machine, run:

- `yarn build` — creates an optimized bundle
- `yarn start` — serves what `build` produced (useful before deploying)

What that means:

- **Dev** reloads instantly while you edit.
- **Build** is what hosts like Vercel run in the cloud to prove the site compiles cleanly.

## Publishing to the web (high level)

The intended host is **[Vercel](https://vercel.com)** (see requirements). In plain English:

1. Push this repository to GitHub (or GitLab/Bitbucket) if it is not there already.
2. Log into Vercel and choose **Import Project**, select the repo, and accept the defaults Next.js suggests.
3. After the first deployment finishes, Vercel shows you a preview URL like `something.vercel.app`.
4. In Vercel’s project settings you can attach your domain (for example **brianekane.com**) either by transferring DNS to Vercel or adding the records they list.

Those steps happen in Vercel’s UI; this repo intentionally does not store personal deploy tokens here.

### Environment variables on Vercel

Optional public links are wired through **`lib/site-links.ts`**. If you maintain different profiles or email aliases per environment:

- Add the same variables in Vercel: **Project → Settings → Environment Variables**, using values from **`.env.example`** or your `.env.local` file (which should stay off git).
- Re-deploy after editing variables so the hosted build picks them up.
- For **`NEXT_PUBLIC_CONTACT_EMAIL`**, store a full `mailto:` URL (for example `mailto:you@yourdomain.com`).

## Updating content

- Narrative sections and headings are centralized in **`lib/content.ts`**.
- Featured project cards live in **`lib/projects.ts`** and are intentionally easy to flip from “Coming soon” to “Live” once real URLs exist.
- Resume download paths live in **`lib/resume-files.ts`** and correspond to **`public/resume/`**.

### Resume files (`public/resume/`)

Formats expected on the homepage:

| File name | Purpose |
|-----------|---------|
| `Brian_Kane_Senior_Software_Engineer_Resume.pdf` | Primary recruiter/ATS-friendly download |
| `Brian_Kane_Senior_Software_Engineer_Resume.docx` | Secondary editable format |
| `Brian_Kane_Senior_Software_Engineer_Resume.txt` | Optional lightweight copy/paste |

**Important PDF note.** The tracked PDF started as a small placeholder PDF so downloads always resolve in development and CI. Before you share the site broadly, overwrite it by exporting PDF from Word/Pages/Google Docs from your authoritative resume source (the DOCX in `public/resume/` mirrors your `resources/` copy).

Plain text (`*.txt`) is generated/consumed during local setup; regenerate from your DOCX anytime if wording changes materially.

### Images

Add optimized photos when ready:

| Path | Intended use |
|------|----------------|
| `public/images/brian-headshot.jpg` | Professional hero/about image (optional for launch) |
| `public/images/brian-personality-hat.jpg` | Fun “bear hat” image for personality section |

Until those exist, the site uses approachable text placeholders rather than breaking the build.

## Theme switcher behavior

Visitors can pick among three palettes; the preference is persisted in **`localStorage`** keyed as `brianekane-theme` (see **`lib/themes.ts`**). Themes are purely cosmetic and should not reload the page.

## Quality checks locally

Run `yarn lint` before pushing if you touched TypeScript/React files. Linting catches common footguns consistent with ESLint defaults from `create-next-app`.

## Troubleshooting tips

If `yarn install` fails, verify your Node and Yarn versions and delete `node_modules` plus `yarn.lock` **only after** confirming with the team—that forces a dependency re-resolve and can subtly change transitive versions.

If `yarn build` fails locally, paste the compiler error—it usually references the exact filename and fix.
