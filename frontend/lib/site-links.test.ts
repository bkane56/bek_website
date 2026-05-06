import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("siteLinks", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    vi.resetModules();
    process.env = originalEnv;
  });

  it("respects NEXT_PUBLIC_CONTACT_EMAIL when present", async () => {
    process.env.NEXT_PUBLIC_CONTACT_EMAIL = "mailto:jobs@example.com";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.email).toBe("mailto:jobs@example.com");
  });

  it("falls back to hello@ when NEXT_PUBLIC_CONTACT_EMAIL is unset", async () => {
    delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.email).toBe("mailto:hello@brianekane.com");
  });

  it("respects NEXT_PUBLIC_LINKEDIN_URL when present", async () => {
    process.env.NEXT_PUBLIC_LINKEDIN_URL = "https://linkedin.example/in/me";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.linkedIn).toBe("https://linkedin.example/in/me");
  });

  it("respects NEXT_PUBLIC_GITHUB_URL when present", async () => {
    process.env.NEXT_PUBLIC_GITHUB_URL = "https://github.example/u";
    const { siteLinks } = await import("./site-links");
    expect(siteLinks.github).toBe("https://github.example/u");
  });
});
