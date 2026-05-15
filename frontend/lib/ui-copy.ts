/**
 * Short UI strings: navigation, section headings, CTAs, aria labels, image alts.
 * Long-form narrative stays in `content.ts`; URLs in `site-links.ts`.
 */

export const primaryNavItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-focus", label: "AI Focus" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const;

export type PrimaryNavItem = (typeof primaryNavItems)[number];

export const ariaLabels = {
  navPrimary: "Primary",
  navMobilePrimary: "Mobile primary",
  navFooter: "Footer",
  themeGroup: "Color theme",
  menuOpen: "Open menu",
  menuClose: "Close menu",
} as const;

export const layoutCopy = {
  skipToMain: "Skip to main content",
} as const;

export const themeChrome = {
  visibleLabel: "Theme",
} as const;

export const headerChrome = {
  resumeButton: "Resume",
} as const;

export const sectionCopy = {
  about: { heading: "About" },
  skills: {
    heading: "Skills",
    subtitle: "Grouped by practice area — no vanity percentages, just what ships.",
  },
  projects: {
    heading: "Featured projects",
    intro:
      "Cards are link-ready for demos, GitHub, or external case studies — whatever the project needs.",
  },
  aiFocus: { heading: "AI focus" },
  experience: { heading: "Experience summary" },
  resume: {
    heading: "Resume",
    pdfNote: "PDF is the primary format for recruiters and ATS.",
    downloadPdf: "Download PDF Resume",
    downloadDocx: "Download DOCX Resume",
    downloadTxtLink: "Download plain text resume",
    txtOptionalNote: "(optional, handy for quick paste)",
  },
  contact: { heading: "Contact" },
} as const;

/** Footer nav anchors plus contact/social link text */
export const externalLinkLabels = {
  email: "Email",
  linkedIn: "LinkedIn",
  github: "GitHub",
  resumePdf: "Resume (PDF)",
} as const;

export const projectCard = {
  openDemo: "Open demo",
  viewDetails: "View details",
  detailsComingSoon: "Details coming soon",
} as const;

export const heroCopy = {
  ctaDownloadResume: "Download Resume",
  ctaViewProjects: "View Projects",
  ctaContactMe: "Contact Me",
  twinPreviewNote: "preview below — full experience coming soon.",
  imageAltProfessional: "Brian E. Kane — professional headshot",
} as const;

export const personalityMedia = {
  imageAlt: "Brian E. Kane — personality and fashion snapshot",
  figcaption: "The questionable-fashion era, documented.",
} as const;

export const twinChrome = {
  statusNote: "Text chat first, then optional audio — no autoplay, ever.",
} as const;

/** Narrow breakpoint labels for theme toggle (matches prior ThemeSelector behavior). */
export function abbrevThemeLabelForCompactUi(fullLabel: string): string {
  return fullLabel.replace("Executive ", "Exec. ").replace(" Professional", "");
}
