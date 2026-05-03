import { siteMeta, footerNote } from "@/lib/content";
import { siteLinks } from "@/lib/site-links";

const items = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-focus", label: "AI Focus" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-primary-text">{siteMeta.displayName}</p>
            <p className="mt-1 max-w-md text-sm text-secondary-text">{siteMeta.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-secondary-text hover:text-primary-text"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.linkedIn}
              className="text-sm font-medium text-secondary-text hover:text-primary-text"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href={siteLinks.github}
              className="text-sm font-medium text-secondary-text hover:text-primary-text"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href={siteLinks.email}
              className="text-sm font-medium text-secondary-text hover:text-primary-text"
            >
              Email
            </a>
          </nav>
        </div>
        <p className="mt-8 text-sm text-secondary-text">{footerNote}</p>
      </div>
    </footer>
  );
}
