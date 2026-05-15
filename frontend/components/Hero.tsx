import Image from "next/image";
import Link from "next/link";
import { hero, siteMeta, twinTeaser } from "@/lib/content";
import { heroCopy } from "@/lib/ui-copy";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border bg-muted/40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-medium text-secondary-accent">{siteMeta.displayName}</p>
          <h1
            id="hero-heading"
            className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary-text sm:text-4xl lg:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-secondary-text">{hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#resume"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-button-text shadow-sm transition-opacity hover:opacity-90"
            >
              {heroCopy.ctaDownloadResume}
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-center text-sm font-semibold text-primary-text transition-colors hover:bg-muted"
            >
              {heroCopy.ctaViewProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-transparent px-5 py-3 text-center text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              {heroCopy.ctaContactMe}
            </a>
          </div>
          <p className="mt-6 text-sm text-secondary-text">
            <Link href="#twin" className="font-medium text-accent hover:underline">
              {twinTeaser.title}
            </Link>{" "}
            {heroCopy.twinPreviewNote}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <figure className="relative h-56 w-56 shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:h-64 sm:w-64">
            <Image
              src="/images/BEK_2.png"
              alt={heroCopy.imageAltProfessional}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 224px, 256px"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
