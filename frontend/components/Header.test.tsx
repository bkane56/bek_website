import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteMeta } from "@/lib/content";

describe("Header", () => {
  it("exposes navigation links and collapses mobile navigation after selection", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    expect(screen.getByRole("link", { name: siteMeta.displayName })).toHaveAttribute("href", "#top");
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileNav = screen.getByRole("navigation", { name: "Mobile primary" });
    expect(mobileNav).toBeVisible();

    await user.click(within(mobileNav).getByRole("link", { name: "Skills" }));
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
