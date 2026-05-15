import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("siteLinks", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    for (const key of [
      "PUBLIC_CONTACT_EMAIL",
      "PUBLIC_LINKEDIN_URL",
      "PUBLIC_GITHUB_URL",
      "PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL",
      "PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL",
    ] as const) {
      delete process.env[key];
    }
  });

  afterEach(() => {
    vi.resetModules();
    process.env = originalEnv;
  });

  it("respects PUBLIC_CONTACT_EMAIL when present", async () => {
    process.env.PUBLIC_CONTACT_EMAIL = "mailto:jobs@example.com";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.email).toBe("mailto:jobs@example.com");
  });

  it("falls back to mailto:bkane56@gmail.com when PUBLIC_CONTACT_EMAIL is unset", async () => {
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.email).toBe("mailto:bkane56@gmail.com");
  });

  it("respects PUBLIC_LINKEDIN_URL when present", async () => {
    process.env.PUBLIC_LINKEDIN_URL = "https://linkedin.example/in/me";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.linkedIn).toBe("https://linkedin.example/in/me");
  });

  it("respects PUBLIC_GITHUB_URL when present", async () => {
    process.env.PUBLIC_GITHUB_URL = "https://github.example/u";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.github).toBe("https://github.example/u");
  });

  it("respects PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL when present", async () => {
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_URL = "https://hf.example/demo";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.nationalParkTripPlannerDemo).toBe("https://hf.example/demo");
  });

  it("respects PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL when present", async () => {
    process.env.PUBLIC_NATIONAL_PARK_TRIP_PLANNER_GITHUB_URL = "https://github.example/np";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.nationalParkTripPlannerRepo).toBe("https://github.example/np");
  });
});
