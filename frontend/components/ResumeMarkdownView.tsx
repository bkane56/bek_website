import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight text-primary-text sm:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 text-xl font-bold tracking-tight text-primary-text first:mt-0 sm:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold text-primary-text">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-pretty text-base leading-relaxed text-secondary-text">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary-text">{children}</ul>
  ),
  li: ({ children }) => <li className="text-pretty leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-primary-text">{children}</strong>,
  a: ({ href, children }) => {
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="font-medium text-accent hover:underline"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
};

type ResumeMarkdownViewProps = {
  content: string;
};

export function ResumeMarkdownView({ content }: ResumeMarkdownViewProps) {
  return (
    <article className="resume-markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
