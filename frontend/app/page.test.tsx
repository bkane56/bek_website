import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the primary scroll sections in order", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Featured projects" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /AI focus/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience summary" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Resume" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();
  });
});
