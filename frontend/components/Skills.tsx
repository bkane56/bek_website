import { skillsGroups } from "@/lib/content";
import { sectionCopy } from "@/lib/ui-copy";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="skills-heading" className="text-2xl font-bold tracking-tight text-primary-text">
          {sectionCopy.skills.heading}
        </h2>
        <p className="mt-2 max-w-prose text-secondary-text">{sectionCopy.skills.subtitle}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-primary-text">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-secondary-text">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
