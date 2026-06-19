import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeaturedProjects } from "@/components/FeaturedProjects";

describe("FeaturedProjects real data behavior", () => {
  it("renders expected status badges from real project data", () => {
    render(<FeaturedProjects />);

    expect(screen.getAllByText("Live")).toHaveLength(6);
    expect(screen.queryAllByText("Coming Soon")).toHaveLength(0);
    expect(screen.queryAllByText("Case Study Pending")).toHaveLength(0);
    expect(screen.queryAllByText("Private Code / Write-Up Coming")).toHaveLength(0);
  });

  it("shows disabled CTA for non-live cards and links for live cards", () => {
    render(<FeaturedProjects />);

    const digitalTwinCard = screen
      .getByRole("heading", { name: "AI Digital Twin" })
      .closest("article");
    expect(digitalTwinCard).not.toBeNull();
    expect(within(digitalTwinCard!).getByText("Full-stack portfolio assistant")).toBeVisible();
    expect(within(digitalTwinCard!).getByRole("link", { name: /open demo/i })).toBeVisible();
    expect(within(digitalTwinCard!).getByRole("link", { name: /^github$/i })).toBeVisible();

    const investAiCard = screen
      .getByRole("heading", { name: "InvestAI" })
      .closest("article");
    expect(investAiCard).not.toBeNull();
    expect(within(investAiCard!).getByText("AI-Assisted Paper Trading Platform")).toBeVisible();
    expect(within(investAiCard!).getByRole("link", { name: /open demo/i })).toBeVisible();
    expect(within(investAiCard!).getByRole("link", { name: /^github$/i })).toBeVisible();

    const tribunalCard = screen
      .getByRole("heading", { name: "The Hallucination Tribunal" })
      .closest("article");
    expect(tribunalCard).not.toBeNull();
    expect(within(tribunalCard!).getByText("RAG Document Assistant")).toBeVisible();
    expect(within(tribunalCard!).getByRole("link", { name: /open demo/i })).toBeVisible();
    expect(within(tribunalCard!).getByRole("link", { name: /^github$/i })).toBeVisible();

    const ragExplorerCard = screen
      .getByRole("heading", { name: "Insurellm RAG Explorer" })
      .closest("article");
    expect(ragExplorerCard).not.toBeNull();
    expect(within(ragExplorerCard!).getByText("Interactive insurance knowledge base demo")).toBeVisible();
    expect(within(ragExplorerCard!).getByRole("link", { name: /open demo/i })).toBeVisible();
    expect(within(ragExplorerCard!).getByRole("link", { name: /^github$/i })).toBeVisible();

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
