import { siteMeta, footerNote } from "@/lib/content";
import { siteLinks } from "@/lib/site-links";
import { ariaLabels, externalLinkLabels, primaryNavItems } from "@/lib/ui-copy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-primary-text">{siteMeta.displayName}</p>
            <p className="mt-1 max-w-md text-sm text-secondary-text">{siteMeta.tagline}</p>
          </div>
          <nav aria-label={ariaLabels.navFooter} className="flex flex-wrap gap-x-4 gap-y-2">
            {primaryNavItems.map((item) => (
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
              {externalLinkLabels.linkedIn}
            </a>
            <a
              href={siteLinks.github}
              className="text-sm font-medium text-secondary-text hover:text-primary-text"
              rel="noreferrer"
              target="_blank"
            >
              {externalLinkLabels.github}
            </a>
            <a
              href={siteLinks.email}
              className="text-sm font-medium text-secondary-text hover:text-primary-text"
            >
              {externalLinkLabels.email}
            </a>
          </nav>
        </div>
        <p className="mt-8 text-sm text-secondary-text">{footerNote}</p>
      </div>
    </footer>
  );
}
