"use client";

import Link from "next/link";
import { useState } from "react";
import { siteMeta } from "@/lib/content";
import { ThemeSelector } from "@/components/ThemeSelector";
import { ariaLabels, headerChrome, primaryNavItems } from "@/lib/ui-copy";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-baseline">
          <Link
            href="#top"
            className="truncate font-semibold tracking-tight text-primary-text sm:max-w-[min(100%,18rem)]"
            onClick={() => setOpen(false)}
          >
            {siteMeta.displayName}
          </Link>
        </div>

        <nav aria-label={ariaLabels.navPrimary} className="hidden items-center gap-6 md:flex">
          {primaryNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary-text transition-colors hover:text-primary-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSelector />
          <a
            href="#resume"
            className="hidden min-h-10 items-center rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-button-text shadow-sm transition-opacity hover:opacity-90 md:inline-flex"
          >
            {headerChrome.resumeButton}
          </a>
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-border bg-card text-primary-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? ariaLabels.menuClose : ariaLabels.menuOpen}</span>
            <span aria-hidden className="text-lg leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={open ? "border-t border-border md:hidden" : "hidden"}
        hidden={!open}
      >
        <nav
          aria-label={ariaLabels.navMobilePrimary}
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6"
        >
          {primaryNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-3 text-base font-medium text-primary-text hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#resume"
            className="mt-2 inline-flex min-h-10 items-center justify-center rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-button-text"
            onClick={() => setOpen(false)}
          >
            {headerChrome.resumeButton}
          </a>
        </nav>
      </div>
    </header>
  );
}
