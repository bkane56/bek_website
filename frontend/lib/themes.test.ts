import { describe, expect, it } from "vitest";
import { DEFAULT_THEME, isThemeName } from "@/lib/themes";

describe("isThemeName", () => {
  it("recognizes supported themes", () => {
    expect(isThemeName("executive-dark")).toBe(true);
    expect(isThemeName("clean-light")).toBe(true);
    expect(isThemeName("warm-human")).toBe(true);
  });

  it("rejects invalid values", () => {
    expect(isThemeName("")).toBe(false);
    expect(isThemeName("ocean")).toBe(false);
    expect(isThemeName(undefined)).toBe(false);
    expect(isThemeName(123)).toBe(false);
  });

  it("documents the default theme name", () => {
    expect(isThemeName(DEFAULT_THEME)).toBe(true);
  });
});
