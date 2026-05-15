import Image from "next/image";
import { personality } from "@/lib/content";
import { personalityMedia } from "@/lib/ui-copy";

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
          <figure className="overflow-hidden rounded-2xl border border-border bg-card p-4 text-center">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-xl">
              <Image
                src="/images/BEK_3.jpeg"
                alt={personalityMedia.imageAlt}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <figcaption className="mt-3 text-xs text-secondary-text">{personalityMedia.figcaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
