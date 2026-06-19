import type { Metadata } from "next";
import Link from "next/link";
import { ResumeMarkdownView } from "@/components/ResumeMarkdownView";
import { getResumeMarkdown } from "@/lib/load-resume-markdown";
import { resumeFiles } from "@/lib/resume-files";
import { sectionCopy } from "@/lib/ui-copy";

export const metadata: Metadata = {
  title: "Resume",
};

export default async function ResumePage() {
  const content = await getResumeMarkdown();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={resumeFiles.pdf}
          download
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-button-text shadow-sm hover:opacity-90"
        >
          {sectionCopy.resume.downloadPdf}
        </a>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-primary-text hover:bg-muted"
        >
          {sectionCopy.resume.backToHome}
        </Link>
      </div>
      <ResumeMarkdownView content={content} />
    </div>
  );
}
