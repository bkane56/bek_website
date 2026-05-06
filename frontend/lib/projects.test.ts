import { describe, expect, it } from "vitest";
import { statusLabel } from "@/lib/projects";

describe("statusLabel", () => {
  it.each([
    ["live", "Live"],
    ["coming-soon", "Coming Soon"],
    ["case-study", "Case Study Pending"],
    ["private-code", "Private Code / Write-Up Coming"],
  ] as const)("maps %s to readable copy", (status, label) => {
    expect(statusLabel(status)).toBe(label);
  });

  it("returns the raw value when the runtime status is unexpected", () => {
    // @ts-expect-error — guards the defensive default branch at runtime.
    expect(statusLabel("weird-status")).toBe("weird-status");
  });
});
