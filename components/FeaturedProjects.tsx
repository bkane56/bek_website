import { featuredProjects, statusLabel } from "@/lib/projects";

function primaryHref(project: (typeof featuredProjects)[number]): string | undefined {
  if (project.demoUrl) return project.demoUrl;
  if (project.caseStudyUrl) return project.caseStudyUrl;
  if (project.githubUrl) return project.githubUrl;
  return undefined;
}

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 id="projects-heading" className="text-2xl font-bold tracking-tight text-primary-text">
        Featured projects
      </h2>
      <p className="mt-2 max-w-prose text-secondary-text">
        Cards are link-ready for demos, GitHub, or external case studies — whatever the project needs.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => {
          const href = primaryHref(project);
          const isLive = project.status === "live" && href;
          const isExternal = Boolean(href?.startsWith("http"));

          return (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-primary-text">{project.title}</h3>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-secondary-text ring-1 ring-border">
                  {statusLabel(project.status)}
                </span>
              </div>
              <p className="mt-3 grow text-sm leading-relaxed text-secondary-text">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-secondary-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                {isLive ? (
                  <a
                    href={href}
                    className="inline-flex min-h-10 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-button-text hover:opacity-90"
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    View details
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-lg border border-dashed border-border bg-muted px-4 py-2 text-sm font-medium text-secondary-text"
                  >
                    Details coming soon
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
