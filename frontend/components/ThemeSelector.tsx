"use client";

import { THEME_OPTIONS, type ThemeName } from "@/lib/themes";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2"
      role="group"
      aria-label="Color theme"
    >
      <span className="hidden text-sm text-secondary-text sm:inline">Theme</span>
      <div className="flex rounded-lg border border-border bg-muted p-0.5">
        {THEME_OPTIONS.map((opt) => {
          const pressed = theme === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setTheme(opt.id as ThemeName)}
              className={[
                "min-h-10 min-w-0 rounded-md px-2.5 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm",
                pressed
                  ? "bg-card text-primary-text shadow-sm ring-1 ring-border"
                  : "text-secondary-text hover:text-primary-text",
              ].join(" ")}
            >
              <span className="sr-only sm:not-sr-only">{opt.label}</span>
              <span className="sm:hidden" aria-hidden>
                {opt.id === "brian-being-brian"
                  ? "BBB"
                  : opt.label.replace("Executive ", "Exec. ").replace(" Professional", "")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
