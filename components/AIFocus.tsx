import { aiFocus } from "@/lib/content";

export function AIFocus() {
  return (
    <section
      id="ai-focus"
      aria-labelledby="ai-focus-heading"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="ai-focus-heading" className="text-2xl font-bold tracking-tight text-primary-text">
          AI focus
        </h2>
        <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-secondary-text">
          {aiFocus.intro}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {aiFocus.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-primary-text"
            >
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
