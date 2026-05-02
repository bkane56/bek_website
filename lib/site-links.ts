/**
 * Set NEXT_PUBLIC_* in `.env.local` before launch. Values below are safe fallbacks
 * using this domain; replace with your real profiles when ready.
 */
export const siteLinks = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "mailto:hello@brianekane.com",
  linkedIn:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/brianekane",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/brianekane",
} as const;
