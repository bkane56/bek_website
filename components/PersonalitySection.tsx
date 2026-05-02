import { personality } from "@/lib/content";

export function PersonalitySection() {
  return (
    <section
      id="personality"
      aria-labelledby="personality-heading"
      className="border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center">
          <div>
            <h2 id="personality-heading" className="text-2xl font-bold tracking-tight text-primary-text">
              {personality.title}
            </h2>
            <p className="mt-4 text-lg font-medium text-primary-text">{personality.caption}</p>
            <p className="mt-3 max-w-prose text-secondary-text">{personality.body}</p>
          </div>
          <figure className="rounded-2xl border border-dashed border-border bg-card p-6 text-center">
            <div
              className="mx-auto flex h-40 w-full max-w-[220px] items-center justify-center rounded-xl bg-muted text-sm text-secondary-text"
              role="img"
              aria-label="Fun personality photo placeholder — add brian-personality-hat.jpg when you want the bear hat on the site"
            >
              Optional hat photo
            </div>
            <figcaption className="mt-3 text-xs text-secondary-text">
              Add <code className="rounded bg-muted px-1">public/images/brian-personality-hat.jpg</code> and
              swap this block for a real image when ready.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
