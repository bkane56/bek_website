/* eslint-disable @next/next/no-img-element -- mocks for RTL */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import type { AnchorHTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from "react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  document.documentElement.dataset.theme = "clean-light";
  vi.clearAllMocks();
});

vi.mock("next/image", () => ({
  default: (
    props: ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean;
      priority?: boolean;
      sizes?: string;
    },
  ) => {
    const { alt, fill: _fill, priority: _priority, sizes: _sizes, src, ...rest } = props;
    return (
      <img
        {...rest}
        alt={typeof alt === "string" ? alt : ""}
        src={typeof src === "string" ? src : ""}
      />
    );
  },
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...rest
  }: PropsWithChildren<{ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>>) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));
