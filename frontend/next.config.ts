import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnvConfig } from "@next/env";
import type { NextConfig } from "next";

const frontendDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(frontendDir, "..");

/** Root `.env`, then `frontend/` env files (e.g. `.env.local`) override. */
loadEnvConfig(repoRoot);
loadEnvConfig(frontendDir);

export const PUBLIC_ENV_KEYS = [
  "PUBLIC_CONTACT_EMAIL",
  "PUBLIC_LINKEDIN_URL",
  "PUBLIC_GITHUB_URL",
  "PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL",
  "PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL",
  "PUBLIC_CONSULTATION_AI_DEMO_URL",
  "PUBLIC_CONSULTATION_AI_GITHUB_URL",
  "PUBLIC_INSURELLM_RAG_EXPLORER_URL",
  "PUBLIC_INSURELLM_RAG_EXPLORER_GITHUB_URL",
  "PUBLIC_HALLUCINATION_TRIBUNAL_DEMO_URL",
  "PUBLIC_HALLUCINATION_TRIBUNAL_GITHUB_URL",
  "PUBLIC_STOCK_TRADER_DEMO_URL",
  "PUBLIC_STOCK_TRADER_GITHUB_URL",
] as const;

/** Expose `PUBLIC_*` to the browser without the `NEXT_PUBLIC_` prefix. */
export function clientPublicEnv(): Record<string, string> {
  const env: Record<string, string> = {};
  for (const key of PUBLIC_ENV_KEYS) {
    const value = process.env[key];
    if (typeof value === "string") {
      env[key] = value;
    }
  }
  return env;
}

const nextConfig: NextConfig = {
  env: clientPublicEnv(),
};

export default nextConfig;
