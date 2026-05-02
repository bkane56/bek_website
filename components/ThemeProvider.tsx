"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type ThemeName,
  isThemeName,
} from "@/lib/themes";

const THEME_EVENT = "brianekane-theme-change";

function readThemeFromDom(): ThemeName {
  if (typeof document === "undefined") return DEFAULT_THEME;
  const raw = document.documentElement.dataset.theme;
  return isThemeName(raw) ? raw : DEFAULT_THEME;
}

function subscribe(onChange: () => void) {
  const handle = () => onChange();
  window.addEventListener("storage", handle);
  window.addEventListener(THEME_EVENT, handle);
  return () => {
    window.removeEventListener("storage", handle);
    window.removeEventListener(THEME_EVENT, handle);
  };
}

function getThemeSnapshot(): ThemeName {
  return readThemeFromDom();
}

function getThemeServerSnapshot(): ThemeName {
  return DEFAULT_THEME;
}

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  const setTheme = useCallback((name: ThemeName) => {
    document.documentElement.dataset.theme = name;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, name);
    } catch {
      /* quota / private mode */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
