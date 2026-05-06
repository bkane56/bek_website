export type ThemeName = "executive-dark" | "clean-light" | "warm-human";

export type ThemeTokens = {
  name: string;
  background: string;
  card: string;
  primaryText: string;
  secondaryText: string;
  accent: string;
  secondaryAccent: string;
  border: string;
  mutedSurface: string;
  buttonText: string;
};

export const THEME_STORAGE_KEY = "brianekane-theme";

export const THEME_OPTIONS: { id: ThemeName; label: string; tokens: ThemeTokens }[] = [
  {
    id: "executive-dark",
    label: "Executive Dark",
    tokens: {
      name: "Executive Dark",
      background: "#0F172A",
      card: "#111827",
      primaryText: "#F8FAFC",
      secondaryText: "#CBD5E1",
      accent: "#38BDF8",
      secondaryAccent: "#A78BFA",
      border: "#334155",
      mutedSurface: "#1E293B",
      buttonText: "#020617",
    },
  },
  {
    id: "clean-light",
    label: "Clean Light",
    tokens: {
      name: "Clean Light",
      background: "#F8FAFC",
      card: "#FFFFFF",
      primaryText: "#111827",
      secondaryText: "#475569",
      accent: "#2563EB",
      secondaryAccent: "#0F766E",
      border: "#CBD5E1",
      mutedSurface: "#E2E8F0",
      buttonText: "#FFFFFF",
    },
  },
  {
    id: "warm-human",
    label: "Warm Human",
    tokens: {
      name: "Warm Human",
      background: "#FAFAF7",
      card: "#FFFFFF",
      primaryText: "#1F2937",
      secondaryText: "#4B5563",
      accent: "#B45309",
      secondaryAccent: "#2563EB",
      border: "#D6D3D1",
      mutedSurface: "#F5F5F4",
      buttonText: "#FFFFFF",
    },
  },
];

export const DEFAULT_THEME: ThemeName = "clean-light";

export function isThemeName(value: unknown): value is ThemeName {
  return (
    value === "executive-dark" ||
    value === "clean-light" ||
    value === "warm-human"
  );
}
