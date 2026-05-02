import Link from "next/link";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border bg-muted/40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-medium text-secondary-accent">Brian E. Kane</p>
          <h1
            id="hero-heading"
            className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary-text sm:text-4xl lg:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-secondary-text">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#resume"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-button-text shadow-sm transition-opacity hover:opacity-90"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-center text-sm font-semibold text-primary-text transition-colors hover:bg-muted"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-transparent px-5 py-3 text-center text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Contact Me
            </a>
          </div>
          <p className="mt-6 text-sm text-secondary-text">
            <Link href="#twin" className="font-medium text-accent hover:underline">
              AI Digital Twin
            </Link>{" "}
            preview below — full experience coming soon.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div
            className="flex h-56 w-56 flex-col items-center justify-center rounded-2xl border border-border bg-card text-center shadow-sm sm:h-64 sm:w-64"
            role="img"
            aria-label="Professional headshot placeholder — add your photo at public/images/brian-headshot.jpg when ready"
          >
            <span className="text-4xl font-semibold tracking-tight text-accent">BEK</span>
            <span className="mt-3 max-w-[12rem] text-xs leading-snug text-secondary-text">
              Headshot slot — drop optimized JPG into{" "}
              <code className="rounded bg-muted px-1 text-[0.65rem]">public/images/</code> when ready.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
