import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ProjectCard } from "@/lib/projects";
import { FeaturedProjects } from "@/components/FeaturedProjects";

vi.mock("@/lib/projects", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/projects")>();
  const projects: ProjectCard[] = [
    {
      title: "External Live",
      description: "Shipped product with a public demo.",
      techStack: ["React"],
      status: "live",
      demoUrl: "https://example.com/demo",
    },
    {
      title: "Relative Live",
      description: "Internal-facing path only.",
      techStack: [],
      status: "live",
      caseStudyUrl: "/case-study",
    },
    {
      title: "GitHub Fallback",
      description: "Source lives on GitHub when no demo is wired yet.",
      techStack: [],
      status: "live",
      githubUrl: "https://github.com/user/repo",
    },
    {
      title: "Demo Plus Repo",
      description: "Both public demo and repository.",
      techStack: [],
      status: "live",
      demoUrl: "https://example.com/app",
      githubUrl: "https://github.com/user/app",
    },
    {
      title: "No Links Live",
      description: "Live label but awaiting wiring.",
      techStack: [],
      status: "live",
    },
    {
      title: "Roadmap Idea",
      description: "Early concept.",
      techStack: ["Next.js"],
      status: "coming-soon",
    },
  ];

  return {
    ...actual,
    featuredProjects: projects,
  };
});

describe("FeaturedProjects", () => {
  it("renders CTA variants for different link strategies", () => {
    render(<FeaturedProjects />);

    const externalArticle = screen.getByRole("heading", { name: "External Live" }).closest("article");
    expect(externalArticle).not.toBeNull();
    const externalLink = within(externalArticle!).getByRole("link", { name: /open demo/i });
    expect(externalLink).toHaveAttribute("href", "https://example.com/demo");
    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");

    const relativeArticle = screen.getByRole("heading", { name: "Relative Live" }).closest("article")!;
    const relativeLink = within(relativeArticle).getByRole("link", { name: /view details/i });
    expect(relativeLink).toHaveAttribute("href", "/case-study");
    expect(relativeLink).not.toHaveAttribute("target");

    const githubArticle = screen.getByRole("heading", { name: "GitHub Fallback" }).closest("article")!;
    const githubLink = within(githubArticle).getByRole("link", { name: /^github$/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/user/repo");
    expect(githubLink).toHaveAttribute("target", "_blank");

    const dualArticle = screen.getByRole("heading", { name: "Demo Plus Repo" }).closest("article")!;
    expect(within(dualArticle).getByRole("link", { name: /open demo/i })).toHaveAttribute(
      "href",
      "https://example.com/app",
    );
    expect(within(dualArticle).getByRole("link", { name: /^github$/i })).toHaveAttribute(
      "href",
      "https://github.com/user/app",
    );

    const missingLinksArticle = screen.getByRole("heading", { name: "No Links Live" }).closest("article")!;
    expect(
      within(missingLinksArticle).getByRole("button", { name: /details coming soon/i }),
    ).toBeDisabled();

    const comingSoonArticle = screen.getByRole("heading", { name: "Roadmap Idea" }).closest("article")!;
    expect(
      within(comingSoonArticle).getByRole("button", { name: /details coming soon/i }),
    ).toBeDisabled();
  });

  it("surfaces status badges for each card", () => {
    render(<FeaturedProjects />);

    expect(screen.getAllByText("Live")).toHaveLength(5);
    expect(screen.getAllByText("Coming Soon")).toHaveLength(1);
  });
});
