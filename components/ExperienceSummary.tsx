import { experience } from "@/lib/content";

export function ExperienceSummary() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 id="experience-heading" className="text-2xl font-bold tracking-tight text-primary-text">
        Experience summary
      </h2>
      <p className="mt-6 font-mono text-sm text-secondary-text sm:text-base">
        {experience.progression}
      </p>
      <ul className="mt-8 space-y-3 text-secondary-text">
        {experience.highlights.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="text-accent" aria-hidden>
              —
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
