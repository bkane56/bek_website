import { twinTeaser } from "@/lib/content";
import { twinChrome } from "@/lib/ui-copy";

export function TwinTeaser() {
  return (
    <section id="twin" aria-labelledby="twin-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <h2 id="twin-heading" className="text-xl font-bold tracking-tight text-primary-text sm:text-2xl">
          {twinTeaser.title}
        </h2>
        <p className="mt-4 max-w-prose text-secondary-text">{twinTeaser.body}</p>
        <button
          type="button"
          disabled
          className="mt-6 inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-lg bg-muted px-5 py-3 text-sm font-semibold text-secondary-text ring-1 ring-border"
          aria-describedby="twin-status"
        >
          {twinTeaser.ctaDisabled}
        </button>
        <p id="twin-status" className="mt-3 text-xs text-secondary-text">
          {twinChrome.statusNote}
        </p>
      </div>
    </section>
  );
}
