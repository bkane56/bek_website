import { describe, expect, it } from "vitest";
import { featuredProjects, statusLabel } from "@/lib/projects";
import { siteLinks } from "@/lib/site-links";

describe("statusLabel", () => {
  it.each([
    ["live", "Live"],
    ["coming-soon", "Coming Soon"],
    ["case-study", "Case Study Pending"],
    ["private-code", "Private Code / Write-Up Coming"],
  ] as const)("maps %s to readable copy", (status, label) => {
    expect(statusLabel(status)).toBe(label);
  });

  it("returns the raw value when the runtime status is unexpected", () => {
    // @ts-expect-error — guards the defensive default branch at runtime.
    expect(statusLabel("weird-status")).toBe("weird-status");
  });
});

describe("featuredProjects data", () => {
  it("uses githubUrl (not demoUrl) for the GitHub-backed React enterprise card", () => {
    const reactEnterprise = featuredProjects.find((p) => p.title === "React Enterprise Application");
    expect(reactEnterprise).toBeDefined();
    expect(reactEnterprise!.demoUrl).toBeUndefined();
    expect(reactEnterprise!.githubUrl).toBe(siteLinks.github);
  });

  it("links National Park Trip Planner to the Hugging Face demo and GitHub repo", () => {
    const nationalPark = featuredProjects.find((p) => p.title === "National Park Trip Planner");
    expect(nationalPark).toBeDefined();
    expect(nationalPark!.demoUrl).toBe(siteLinks.nationalParkTripPlannerDemo);
    expect(nationalPark!.githubUrl).toBe(siteLinks.nationalParkTripPlannerRepo);
  });
});
