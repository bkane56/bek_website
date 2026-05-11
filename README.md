# BrianEKane.com (this repo)

This folder is the marketing site for **Brian E. Kane** — a Next.js homepage focused on recruiting and professional networking. Details of what the page should contain live in [`REQUIREMENTS.md`](REQUIREMENTS.md).

## Quick start

You need Node.js and [Yarn](https://yarnpkg.com/) (Classic v1 is fine) installed — matching the usual versions used with current Next.js — see [`package.json`](package.json).

1. Clone the repo and open this folder in a terminal.
2. Install dependencies: `yarn --cwd frontend install` (the Next.js app and [`yarn.lock`](frontend/yarn.lock) live under [`frontend/`](frontend/)).
3. Start the local preview: `yarn dev` (runs `yarn --cwd frontend dev`).
4. Open `http://localhost:3000` in your browser.

To check that production output works on your machine, run:

- `yarn build` — creates an optimized bundle (`yarn --cwd frontend build`)
- `yarn start` — serves what `build` produced (`yarn --cwd frontend start`)

What that means:

- **Dev** reloads instantly while you edit.
- **Build** is what hosts like Vercel run in the cloud to prove the site compiles cleanly.

## Publishing to the web (high level)

The intended host is **[Vercel](https://vercel.com)** (see requirements). In plain English:

1. Push this repository to GitHub (or GitLab/Bitbucket) if it is not there already.
2. Log into Vercel and choose **Add New → Project**, import this repo, then configure the build (these settings belong on **Settings → Build and Deployment**, and on the import wizard):
   - **Root Directory:** **`frontend`** (strongly recommended). Use **Edit →** on import or **Settings → Build and Deployment**. Then Vercel sees [`frontend/yarn.lock`](frontend/yarn.lock) and uses Yarn with [`frontend/vercel.json`](frontend/vercel.json).
   - **If Root Directory is `.`:** there is **no [`yarn.lock`](frontend/yarn.lock) at the repo root** — only under [`frontend/`](frontend/) — so Vercel tends to run **`npm install`** and **`npm run build`** from the thin root [`package.json`](package.json). That skips installing **`frontend`** dependencies before **`yarn --cwd frontend build`** runs, which usually fails with **`next: command not found`**. Root [`vercel.json`](vercel.json) **`installCommand`** / **`buildCommand`** forces **`yarn`** inside **`frontend/`** — unless Project Settings override them (next bullet).
   - **Install Command / Build Command:** turn **Overrides** **off** unless you need a deliberate custom command. If Build stays pinned to **`npm run build`**, dashboard overrides **take precedence over** [`vercel.json`](vercel.json); disable overrides so the Yarn commands apply (repo root [`vercel.json`](vercel.json) when Root Directory is **`.`**, or [`frontend/vercel.json`](frontend/vercel.json) when it is **`frontend`**).
   - **Framework Preset:** **Next.js**.
3. After the first deployment finishes, Vercel shows you a preview URL like `something.vercel.app`.
4. In **Project → Settings → Domains**, add **`brianekane.com`** and **`www.brianekane.com`**. Vercel lists the exact DNS records (do not guess A/CNAME values—they change).
5. In **AWS Route 53** (Hosted Zone for `brianekane.com`), create those records and remove any conflicting old `A`/`CNAME` rows. If your IAM user cannot edit Route 53, use an account with `route53:ChangeResourceRecordSets` on that zone (or change DNS at whichever registrar hosts your nameservers).
6. Wait until Vercel marks the domain **Valid** and HTTPS provisions; then open `https://brianekane.com` (or your chosen canonical host).

Those steps happen in Vercel’s UI; this repo intentionally does not store personal deploy tokens here.

### If you only see “recent previews” and no **Project** or **Settings → Build**

That usually means a **deployment URL** exists (often from CLI, GitHub commenting, or a partial flow) **without completing “Import Git Repository → Project.”** **`Settings → Build and Deployment` only appears on an actual Project** after import.

Do this:

1. Open **[vercel.com/new](https://vercel.com/new)** (dashboard → **Add New…** → **Project**).
2. **Import** this repo (`bek_website`) under your account or team (**team switcher** top-left must match GitHub repo owner if applicable).
3. Finish the wizard: set **Root Directory** to **`frontend`** (recommended) or leave **.** with root [`vercel.json`](vercel.json); turn **OFF** overrides for Install/Build commands.
4. Click **Deploy**. Vercel then creates a **Project** tile under **Overview → Projects**.
5. Open that project → **Settings** (left sidebar). **Build & Deployment**, **Domains**, etc. appear there.

Deployments that show only under global activity/feeds often link to failed preview builds tied to Git; they are not a substitute for a connected Project—you still need **Import Project** once so settings and Production branch are defined.

### Environment variables on Vercel

Optional public links are wired through **`frontend/lib/site-links.ts`**. If you maintain different profiles or email aliases per environment:

- Add the same variables in Vercel: **Project → Settings → Environment Variables**, using values from **`.env.example`** at the repo root or your `frontend/.env.local` file (which should stay off git).
- Re-deploy after editing variables so the hosted build picks them up.
- For **`NEXT_PUBLIC_CONTACT_EMAIL`**, store a full `mailto:` URL (for example `mailto:you@yourdomain.com`).

## Updating content

- Narrative sections and headings are centralized in **`frontend/lib/content.ts`**.
- Featured project cards live in **`frontend/lib/projects.ts`** and are intentionally easy to flip from “Coming soon” to “Live” once real URLs exist.
- Resume download paths live in **`frontend/lib/resume-files.ts`** and correspond to **`frontend/public/resume/`**.

### Resume files (`frontend/public/resume/`)

Formats expected on the homepage:

| File name | Purpose |
|-----------|---------|
| `Brian_Kane_Senior_Software_Engineer_Resume.pdf` | Primary recruiter/ATS-friendly download |
| `Brian_Kane_Senior_Software_Engineer_Resume.docx` | Secondary editable format |
| `Brian_Kane_Senior_Software_Engineer_Resume.txt` | Optional lightweight copy/paste |

**Important PDF note.** The tracked PDF started as a small placeholder PDF so downloads always resolve in development and CI. Before you share the site broadly, overwrite it by exporting PDF from Word/Pages/Google Docs from your authoritative resume source (the DOCX in `frontend/public/resume/` mirrors your `resources/` copy).

Plain text (`*.txt`) is generated/consumed during local setup; regenerate from your DOCX anytime if wording changes materially.

### Images

Add optimized photos when ready:

| Path | Intended use |
|------|----------------|
| `frontend/public/images/brian-headshot.jpg` | Professional hero/about image (optional for launch) |
| `frontend/public/images/brian-personality-hat.jpg` | Fun “bear hat” image for personality section |

Until those exist, the site uses approachable text placeholders rather than breaking the build.

## Theme switcher behavior

Visitors can pick among three palettes; the preference is persisted in **`localStorage`** keyed as `brianekane-theme` (see **`frontend/lib/themes.ts`**). Themes are purely cosmetic and should not reload the page.

## Quality checks locally

Run `yarn lint` before pushing if you touched TypeScript/React files. Linting catches common footguns consistent with ESLint defaults from `create-next-app`.

## Troubleshooting tips

If `yarn --cwd frontend install` fails, verify your Node and Yarn versions and delete `frontend/node_modules` plus `frontend/yarn.lock` **only after** confirming with the team—that forces a dependency re-resolve and can subtly change transitive versions.

If `yarn build` fails locally, paste the compiler error—it usually references the exact filename and fix.
