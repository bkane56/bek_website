import { about, siteMeta } from "@/lib/content";
import { sectionCopy } from "@/lib/ui-copy";

function splitTagline(tagline: string): { first: string; second: string } | null {
  const idx = tagline.indexOf(". ");
  if (idx === -1) return null;
  return { first: tagline.slice(0, idx + 1), second: tagline.slice(idx + 2) };
}

export function About() {
  const taglineParts = splitTagline(siteMeta.tagline);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 id="about-heading" className="text-2xl font-bold tracking-tight text-primary-text">
        {sectionCopy.about.heading}
      </h2>
      {taglineParts ? (
        <div className="mt-4 max-w-prose border-l-4 border-accent pl-5 text-pretty">
          <p className="text-xl font-bold tracking-tight text-primary-text sm:text-2xl">
            {taglineParts.first}
          </p>
          <p className="mt-2 text-lg font-semibold leading-snug text-primary-text sm:text-xl">
            {taglineParts.second}
          </p>
        </div>
      ) : (
        <p className="mt-4 max-w-prose text-pretty text-lg font-semibold text-primary-text sm:text-xl">
          {siteMeta.tagline}
        </p>
      )}
      <div className="mt-8 space-y-4 text-pretty text-base leading-relaxed text-secondary-text">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
