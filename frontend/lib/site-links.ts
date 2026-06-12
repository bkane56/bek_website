/**
 * Set `PUBLIC_*` keys in the repo-root `.env` or `frontend/.env.local`.
 * They are forwarded to the client via `next.config.ts` `env`.
 */
export const siteLinks = {
  email: process.env.PUBLIC_CONTACT_EMAIL ?? "mailto:bkane56@gmail.com",
  linkedIn:
    process.env.PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/brian-kane-396a8862/",
  github: process.env.PUBLIC_GITHUB_URL ?? "https://github.com/bkane56",
  nationalParkTripPlannerDemo:
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL ??
    "https://bkane56-national-park-trip-planner.hf.space",
  nationalParkTripPlannerRepo:
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL ??
    "https://github.com/bkane56/national_park_crew",
  consultationAiDemo:
    process.env.PUBLIC_CONSULTATION_AI_DEMO_URL ?? "https://saas-bice-iota.vercel.app/",
  consultationAiRepo:
    process.env.PUBLIC_CONSULTATION_AI_GITHUB_URL ??
    "https://github.com/bkane56/consultationAI",
  insurellmRagExplorerDemo:
    process.env.PUBLIC_INSURELLM_RAG_EXPLORER_URL ??
    "https://bkane56-insurellm-rag-explorer.hf.space",
  insurellmRagExplorerRepo:
    process.env.PUBLIC_INSURELLM_RAG_EXPLORER_GITHUB_URL ??
    "https://github.com/bkane56/rag_demo",
  hallucinationTribunalDemo:
    process.env.PUBLIC_HALLUCINATION_TRIBUNAL_DEMO_URL ??
    "https://hallucination-tribunal.vercel.app/",
  hallucinationTribunalRepo:
    process.env.PUBLIC_HALLUCINATION_TRIBUNAL_GITHUB_URL ??
    "https://github.com/bkane56/Hallucination_Tribunal",
} as const;
