import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeaturedProjects } from "@/components/FeaturedProjects";

describe("FeaturedProjects real data behavior", () => {
  it("renders expected status badges from real project data", () => {
    render(<FeaturedProjects />);

    expect(screen.getAllByText("Live")).toHaveLength(3);
    expect(screen.getAllByText("Coming Soon")).toHaveLength(1);
    expect(screen.getAllByText("Case Study Pending")).toHaveLength(1);
    expect(screen.getAllByText("Private Code / Write-Up Coming")).toHaveLength(1);
  });

  it("shows disabled CTA for non-live cards and links for live cards", () => {
    render(<FeaturedProjects />);

    const privateCodeCard = screen
      .getByRole("heading", { name: "Agentic Coding Team" })
      .closest("article");
    expect(privateCodeCard).not.toBeNull();
    expect(
      within(privateCodeCard!).getByRole("button", { name: /details coming soon/i }),
    ).toBeDisabled();

    const caseStudyCard = screen
      .getByRole("heading", { name: "RAG Document Assistant" })
      .closest("article");
    expect(caseStudyCard).not.toBeNull();
    expect(
      within(caseStudyCard!).getByRole("button", { name: /details coming soon/i }),
    ).toBeDisabled();

    const parkPlannerCard = screen
      .getByRole("heading", { name: "National Park Trip Planner" })
      .closest("article");
    expect(parkPlannerCard).not.toBeNull();
    expect(within(parkPlannerCard!).getByRole("link", { name: /open demo/i })).toBeVisible();
    expect(within(parkPlannerCard!).getByRole("link", { name: /^github$/i })).toBeVisible();

    const mediNotesCard = screen.getByRole("heading", { name: "MediNotes Pro" }).closest("article");
    expect(mediNotesCard).not.toBeNull();
    expect(within(mediNotesCard!).getByRole("link", { name: /open demo/i })).toBeVisible();
    expect(within(mediNotesCard!).getByRole("link", { name: /^github$/i })).toBeVisible();
  });
});
