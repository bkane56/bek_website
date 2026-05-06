import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { ThemeSelector } from "@/components/ThemeSelector";

function ThemeReader() {
  const { theme } = useTheme();
  return (
    <p>
      Active theme:&nbsp;<span data-testid="current-theme">{theme}</span>
    </p>
  );
}

describe("ThemeProvider", () => {
  it("throws when hooks run outside provider", () => {
    expect(() => renderHook(() => useTheme())).toThrow(/ThemeProvider/i);
  });

  it("persists selections to the DOM and localStorage", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeSelector />
        <ThemeReader />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole("button", { name: /^Executive Dark$/ }));

    expect(document.documentElement.dataset.theme).toBe("executive-dark");
    expect(screen.getByTestId("current-theme")).toHaveTextContent("executive-dark");
    expect(localStorage.getItem("brianekane-theme")).toBe("executive-dark");
  });

  it("continues updating the DOM even if storage writes fail", async () => {
    const user = userEvent.setup();
    const setter = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
      throw new DOMException("QuotaExceededError");
    };

    render(
      <ThemeProvider>
        <ThemeSelector />
        <ThemeReader />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole("button", { name: /^Warm Human$/ }));

    expect(document.documentElement.dataset.theme).toBe("warm-human");

    Storage.prototype.setItem = setter;
  });

  it("tracks external DOM changes when storage notifications fire", async () => {
    document.documentElement.dataset.theme = "clean-light";

    render(
      <ThemeProvider>
        <ThemeReader />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent("clean-light");

    await act(async () => {
      document.documentElement.dataset.theme = "warm-human";
      window.dispatchEvent(new Event("storage"));
    });

    expect(screen.getByTestId("current-theme")).toHaveTextContent("warm-human");
  });
});
