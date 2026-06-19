import { afterEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_ENV = { ...process.env };

describe("next.config PUBLIC env forwarding", () => {
  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
    vi.resetModules();
  });

  it("forwards only allow-listed PUBLIC_* keys", async () => {
    process.env.PUBLIC_CONTACT_EMAIL = "mailto:test@example.com";
    process.env.PUBLIC_LINKEDIN_URL = "https://linkedin.com/in/test";
    process.env.PUBLIC_GITHUB_URL = "https://github.com/test";
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL = "https://example.com/demo";
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL = "https://github.com/test/demo";
    process.env.PUBLIC_CONSULTATION_AI_DEMO_URL = "https://example.com/medinotes";
    process.env.PUBLIC_CONSULTATION_AI_GITHUB_URL = "https://github.com/test/consultationAI";
    process.env.PUBLIC_INSURELLM_RAG_EXPLORER_URL = "https://example.com/rag";
    process.env.PUBLIC_INSURELLM_RAG_EXPLORER_GITHUB_URL = "https://github.com/test/rag_demo";
    process.env.PUBLIC_HALLUCINATION_TRIBUNAL_DEMO_URL = "https://example.com/tribunal";
    process.env.PUBLIC_HALLUCINATION_TRIBUNAL_GITHUB_URL = "https://github.com/test/tribunal";
    process.env.PUBLIC_STOCK_TRADER_DEMO_URL = "https://example.com/stock-trader";
    process.env.PUBLIC_STOCK_TRADER_GITHUB_URL = "https://github.com/test/stock_trader";
    process.env.PUBLIC_DIGITAL_TWIN_DEMO_URL = "https://example.com/twin";
    process.env.PUBLIC_DIGITAL_TWIN_GITHUB_URL = "https://github.com/test/twin";
    process.env.PUBLIC_NOT_ALLOWLISTED = "should-not-pass";

    const { clientPublicEnv, PUBLIC_ENV_KEYS } = await import("./next.config");
    const env = clientPublicEnv();

    expect(Object.keys(env).sort()).toEqual([...PUBLIC_ENV_KEYS].sort());
    expect(env.PUBLIC_NOT_ALLOWLISTED).toBeUndefined();
  });

  it("omits missing values from forwarded env", async () => {
    process.env.PUBLIC_CONTACT_EMAIL = "mailto:test@example.com";
    delete process.env.PUBLIC_LINKEDIN_URL;

    const { clientPublicEnv } = await import("./next.config");
    const env = clientPublicEnv();

    expect(env.PUBLIC_CONTACT_EMAIL).toBe("mailto:test@example.com");
    expect(env.PUBLIC_LINKEDIN_URL).toBeUndefined();
  });
});
