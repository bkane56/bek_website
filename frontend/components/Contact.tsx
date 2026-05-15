import { contact } from "@/lib/content";
import { resumeFiles } from "@/lib/resume-files";
import { siteLinks } from "@/lib/site-links";
import { externalLinkLabels, sectionCopy } from "@/lib/ui-copy";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 id="contact-heading" className="text-2xl font-bold tracking-tight text-primary-text">
        {sectionCopy.contact.heading}
      </h2>
      <p className="mt-4 max-w-prose text-secondary-text">{contact.intro}</p>
      <ul className="mt-8 flex flex-col gap-4 text-base">
        <li>
          <a href={siteLinks.email} className="font-medium text-accent hover:underline">
            {externalLinkLabels.email}
          </a>
        </li>
        <li>
          <a
            href={siteLinks.linkedIn}
            className="font-medium text-accent hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            {externalLinkLabels.linkedIn}
          </a>
        </li>
        <li>
          <a
            href={siteLinks.github}
            className="font-medium text-accent hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            {externalLinkLabels.github}
          </a>
        </li>
        <li>
          <a href={resumeFiles.pdf} className="font-medium text-accent hover:underline" download>
            {externalLinkLabels.resumePdf}
          </a>
        </li>
      </ul>
    </section>
  );
}
