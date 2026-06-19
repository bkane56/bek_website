"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

/** In-page section links (`/#id`) scroll on home; from other routes they navigate to `/` first. */
export function SectionLink({ href, className, children, onNavigate }: SectionLinkProps) {
  const pathname = usePathname();
  const sectionId = href.startsWith("/#") ? href.slice(2) : null;

  if (!sectionId) {
    return (
      <Link href={href} className={className} onClick={onNavigate}>
        {children}
      </Link>
    );
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onNavigate?.();
    if (pathname !== "/") return;

    const target = document.getElementById(href.slice(2));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
