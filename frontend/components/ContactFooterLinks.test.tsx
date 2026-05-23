import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

describe("Contact and Footer external links", () => {
  it("uses secure rel attributes for external profile links", () => {
    render(
      <>
        <Contact />
        <Footer />
      </>,
    );

    const linkedInLinks = screen.getAllByRole("link", { name: /linkedin/i });
    const githubLinks = screen.getAllByRole("link", { name: /^github$/i });

    for (const link of [...linkedInLinks, ...githubLinks]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
