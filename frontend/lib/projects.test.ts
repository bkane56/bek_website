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

  it("links Insurellm RAG Explorer to the Hugging Face demo and GitHub repo", () => {
    const ragExplorer = featuredProjects.find((p) => p.title === "Insurellm RAG Explorer");
    expect(ragExplorer).toBeDefined();
    expect(ragExplorer!.subtitle).toBe("Interactive insurance knowledge base demo");
    expect(ragExplorer!.status).toBe("live");
    expect(ragExplorer!.demoUrl).toBe(siteLinks.insurellmRagExplorerDemo);
    expect(ragExplorer!.githubUrl).toBe(siteLinks.insurellmRagExplorerRepo);
  });

  it("links National Park Trip Planner to the Hugging Face demo and GitHub repo", () => {
    const nationalPark = featuredProjects.find((p) => p.title === "National Park Trip Planner");
    expect(nationalPark).toBeDefined();
    expect(nationalPark!.demoUrl).toBe(siteLinks.nationalParkTripPlannerDemo);
    expect(nationalPark!.githubUrl).toBe(siteLinks.nationalParkTripPlannerRepo);
  });

  it("links MediNotes Pro to the Vercel demo and consultationAI GitHub repo", () => {
    const mediNotes = featuredProjects.find((p) => p.title === "MediNotes Pro");
    expect(mediNotes).toBeDefined();
    expect(mediNotes!.status).toBe("live");
    expect(mediNotes!.demoUrl).toBe(siteLinks.consultationAiDemo);
    expect(mediNotes!.githubUrl).toBe(siteLinks.consultationAiRepo);
  });

  it("links The Hallucination Tribunal to the Vercel demo and GitHub repo", () => {
    const tribunal = featuredProjects.find((p) => p.title === "The Hallucination Tribunal");
    expect(tribunal).toBeDefined();
    expect(tribunal!.subtitle).toBe("RAG Document Assistant");
    expect(tribunal!.status).toBe("live");
    expect(tribunal!.demoUrl).toBe(siteLinks.hallucinationTribunalDemo);
    expect(tribunal!.githubUrl).toBe(siteLinks.hallucinationTribunalRepo);
  });
});
