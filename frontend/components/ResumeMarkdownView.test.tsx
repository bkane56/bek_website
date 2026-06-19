import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResumeMarkdownView } from "@/components/ResumeMarkdownView";

const fixture = `# Test Resume

## Experience

- Built **full-stack** applications
- See [portfolio](https://example.com) for details
`;

describe("ResumeMarkdownView", () => {
  it("renders headings, lists, emphasis, and links from markdown", () => {
    render(<ResumeMarkdownView content={fixture} />);

    expect(screen.getByRole("heading", { level: 1, name: "Test Resume" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeVisible();
    expect(screen.getByText(/Built/)).toBeVisible();
    expect(screen.getByText("full-stack")).toBeVisible();
    expect(screen.getByRole("link", { name: "portfolio" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
    expect(screen.getByRole("link", { name: "portfolio" })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: "portfolio" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });
});
