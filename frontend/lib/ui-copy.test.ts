import { describe, expect, it } from "vitest";
import { abbrevThemeLabelForCompactUi } from "@/lib/ui-copy";

describe("abbrevThemeLabelForCompactUi", () => {
  it("shortens Executive Dark and drops Professional suffix on Clean Light", () => {
    expect(abbrevThemeLabelForCompactUi("Executive Dark")).toBe("Exec. Dark");
    expect(abbrevThemeLabelForCompactUi("Clean Light")).toBe("Clean Light");
    expect(abbrevThemeLabelForCompactUi("Warm Human")).toBe("Warm Human");
  });
});
