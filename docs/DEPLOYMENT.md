# Deployment and operations

Operational guide for publishing **BrianEKane.com**. For stack and architecture overview, see [`README.md`](../README.md).

---

## Publishing (Vercel, high level)

The intended host is **[Vercel](https://vercel.com)**. Summary:

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel: **Add New → Project**, import the repo, then configure build (**Settings → Build and Deployment**, or the import wizard):
   - **Root Directory:** **`frontend`** (recommended). Then Vercel sees [`frontend/yarn.lock`](../frontend/yarn.lock) and uses Yarn with [`frontend/vercel.json`](../frontend/vercel.json).
   - **If Root Directory is `.`:** There is **no** `yarn.lock` at the repo root, only under [`frontend/`](../frontend/), so Vercel may default to **`npm install`** / **`npm run build`** from the thin root [`package.json`](../package.json). That can skip installing `frontend` dependencies before `yarn --cwd frontend build`, often failing with **`next: command not found`**. Root [`vercel.json`](../vercel.json) sets **`installCommand`** / **`buildCommand`** to run Yarn inside **`frontend/`**, unless Project Settings overrides supersede them.
   - **Install Command / Build Command:** Leave dashboard **Overrides** **off** unless you intentionally need custom commands. If Build stays pinned to `npm run build`, overrides **take precedence** over `vercel.json`; disable overrides so the Yarn commands apply (root `vercel.json` when Root Directory is `.`, or `frontend/vercel.json` when it is `frontend`).
   - **Framework Preset:** **Next.js**.
3. After the first deployment, Vercel provides a preview URL (e.g. `something.vercel.app`).
4. **Project → Settings → Domains:** Add **`brianekane.com`** and **`www.brianekane.com`**. Use **only** the DNS records Vercel lists (do not guess A/CNAME values; they change).
5. In **AWS Route 53** (Hosted Zone for `brianekane.com`), create those records and remove conflicting old `A`/`CNAME` rows. Use credentials with `route53:ChangeResourceRecordSets` on that zone if IAM restricts edits.
6. Wait until Vercel marks the domain **Valid** and HTTPS provisions; then open `https://brianekane.com` (or your canonical host).

This repo does **not** store personal deploy tokens.

---

## “Recent previews” but no Project or Build settings

That usually means a **deployment URL** exists (CLI, GitHub comments, or a partial flow) **without completing Import Git Repository → Project.** **`Settings → Build and Deployment` appears only on a real Project** after import.

**Recovery:**

1. Open **[vercel.com/new](https://vercel.com/new)** (dashboard → **Add New…** → **Project**).
2. **Import** this repo under your account or team (**team switcher** must align with the GitHub owner if applicable).
3. Finish the wizard: set **Root Directory** to **`frontend`** (recommended) or leave **`.`** with root `vercel.json`; turn **off** overrides for Install/Build commands.
4. Click **Deploy**. A **Project** tile appears under **Overview → Projects**.
5. Open that project → **Settings**. **Build & Deployment**, **Domains**, etc. appear there.

Deployments that only show in global activity often link to preview builds tied to Git; they are **not** a substitute for a connected Project; you still need **Import Project** once so production branch and settings are defined.

---

## Environment variables on Vercel

Optional public links flow through **`frontend/lib/site-links.ts`**. Client-visible keys use the **`PUBLIC_`** prefix (not `NEXT_PUBLIC_`). **`frontend/next.config.ts`** loads the repo-root **`.env`** and forwards allow-listed variables into the browser bundle.

- Add the same variables in Vercel: **Project → Settings → Environment Variables**, using names from **`.env.example`** at the repo root (or mirror them in `frontend/.env.local`, which must stay out of git).
- **Redeploy** after editing variables so the hosted build picks them up.
- For **`PUBLIC_CONTACT_EMAIL`**, store a full `mailto:` URL (for example `mailto:you@yourdomain.com`).

---

## Troubleshooting

- **`yarn --cwd frontend install` fails:** Check Node and Yarn versions; avoid deleting `frontend/node_modules` and `frontend/yarn.lock` without coordination; that forces a full lockfile re-resolve and can change transitive versions.
- **`yarn build` fails locally:** The compiler error usually names the file; fix forward from that message.
- **Hosted build differs from local:** Confirm Vercel env vars match `.env.example` and that no dashboard overrides contradict root vs `frontend` `vercel.json`.
