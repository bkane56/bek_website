import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { About } from "@/components/About";

const taglineOverride = vi.hoisted(() => ({
  value: null as string | null,
}));

vi.mock("@/lib/content", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/content")>();
  return {
    ...actual,
    siteMeta: new Proxy(actual.siteMeta, {
      get(target, prop) {
        if (prop === "tagline") {
          return taglineOverride.value ?? target.tagline;
        }
        return Reflect.get(target, prop);
      },
    }),
  };
});

describe("About", () => {
  beforeEach(() => {
    taglineOverride.value = null;
  });

  it("splits dual-sentence taglines for clearer emphasis", () => {
    taglineOverride.value = "Leading sentence. Supporting detail afterward.";

    render(<About />);

    expect(screen.getByRole("heading", { name: "About" })).toBeVisible();
    expect(screen.getByText("Leading sentence.")).toBeInTheDocument();
    expect(screen.getByText("Supporting detail afterward.")).toBeInTheDocument();
  });

  it("falls back to a single paragraph when punctuation is missing", () => {
    taglineOverride.value = "Single cohesive thought without punctuation split";

    render(<About />);

    expect(
      screen.getByText("Single cohesive thought without punctuation split"),
    ).toBeInTheDocument();
  });
});
