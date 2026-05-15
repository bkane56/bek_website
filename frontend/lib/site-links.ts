/**
 * Set `PUBLIC_*` keys in the repo-root `.env` or `frontend/.env.local`.
 * They are forwarded to the client via `next.config.ts` `env`.
 */
export const siteLinks = {
  email: process.env.PUBLIC_CONTACT_EMAIL ?? "mailto:bkane56@gmail.com",
  linkedIn:
    process.env.PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/brianekane",
  github: process.env.PUBLIC_GITHUB_URL ?? "https://github.com/bkane56",
  nationalParkTripPlannerDemo:
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL ??
    "https://huggingface.co/spaces/Bkane56/national-park-trip-planner",
  nationalParkTripPlannerRepo:
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL ??
    "https://github.com/bkane56/national_park_crew",
} as const;
