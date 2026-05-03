import { about, siteMeta } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 id="about-heading" className="text-2xl font-bold tracking-tight text-primary-text">
        About
      </h2>
      <p className="mt-2 max-w-prose text-sm text-secondary-accent">{siteMeta.tagline}</p>
      <div className="mt-8 space-y-4 text-pretty text-base leading-relaxed text-secondary-text">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
