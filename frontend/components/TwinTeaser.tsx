import { twinTeaser } from "@/lib/content";
import { externalLinkLabels, twinChrome } from "@/lib/ui-copy";

export function TwinTeaser() {
  return (
    <section id="twin" aria-labelledby="twin-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <h2 id="twin-heading" className="text-xl font-bold tracking-tight text-primary-text sm:text-2xl">
          {twinTeaser.title}
        </h2>
        <p className="mt-4 max-w-prose text-secondary-text">{twinTeaser.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={twinTeaser.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text hover:opacity-90"
            aria-describedby="twin-status"
          >
            {twinTeaser.ctaLabel}
          </a>
          <a
            href={twinTeaser.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-primary-text hover:bg-muted"
          >
            {externalLinkLabels.github}
          </a>
        </div>
        <p id="twin-status" className="mt-3 text-xs text-secondary-text">
          {twinChrome.statusNote}
        </p>
      </div>
    </section>
  );
}
