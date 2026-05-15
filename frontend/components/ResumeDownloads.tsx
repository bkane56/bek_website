import { resumeFiles } from "@/lib/resume-files";
import { sectionCopy } from "@/lib/ui-copy";

export function ResumeDownloads() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="resume-heading" className="text-2xl font-bold tracking-tight text-primary-text">
          {sectionCopy.resume.heading}
        </h2>
        <p className="mt-2 text-secondary-text">{sectionCopy.resume.pdfNote}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={resumeFiles.pdf}
            download
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-button-text shadow-sm hover:opacity-90"
          >
            {sectionCopy.resume.downloadPdf}
          </a>
          <a
            href={resumeFiles.docx}
            download
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-primary-text hover:bg-muted"
          >
            {sectionCopy.resume.downloadDocx}
          </a>
        </div>
        <p className="mt-6 text-sm text-secondary-text">
          <a href={resumeFiles.txt} download className="font-medium text-accent hover:underline">
            {sectionCopy.resume.downloadTxtLink}
          </a>{" "}
          <span className="text-secondary-text">{sectionCopy.resume.txtOptionalNote}</span>
        </p>
      </div>
    </section>
  );
}
