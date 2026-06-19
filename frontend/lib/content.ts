import { siteLinks } from "@/lib/site-links";

export const siteMeta = {
  displayName: "Brian E. Kane",
  siteTitle: "Brian E. Kane — Senior Software Engineer",
  shortTitle: "Brian E. Kane",
  description:
    "Senior software engineer building production-grade web and AI systems with React, Java, and modern LLM/RAG workflows.",
  tagline: "Serious about engineering. Not overly serious about myself.",
};

export const hero = {
  headline: "Senior Software Engineer building production-grade web and AI systems.",
  subheadline:
    "11+ years building software with React, Java, backend services, and modern AI systems including RAG, embeddings, machine learning, and agentic workflows.",
};

export const about = {
  paragraphs: [
    "I am a software engineer with over 11 years of experience building reliable applications, APIs, and front-end systems. My core background is React.js for the front-end and Java for the backend/service layer. I have been expanding deeply into AI engineering for the last 2+ years, including machine learning, RAG, embeddings, LLM applications, agentic AI systems, MCP primarily as tools for AI agents.",
    "I take my work seriously: clean architecture, maintainable code, thoughtful UX, and systems that actually solve business problems.",
    "I do not take myself too seriously, which means I enjoy collaboration, humor, and working with people who like building things the right way without turning every meeting into a ceremony.",

  ],
};

export const skillsGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive UI",
      "Component architecture",
    ],
  },
  {
    title: "Backend",
    items: [
      "Java",
      "Python",
      "REST APIs",
      "Service architecture",
      "Authentication",
      "Data handling",
    ],
  },
  {
    title: "AI Engineering",
    items: [
      "LLM applications",
      "RAG",
      "Embeddings",
      "Vector databases",
      "Agentic AI",
      "Prompt engineering",
      "AI app deployment",
    ],
  },
  {
    title: "Cloud / DevOps",
    items: ["Docker", "AWS", "Vercel", "CI/CD", "Deployment pipelines", "Observability"],
  },
  {
    title: "Engineering practices",
    items: [
      "Testing",
      "Code review",
      "Debugging",
      "Architecture",
      "Documentation",
      "Agile delivery",
    ],
  },
];

export const aiFocus = {
  intro:
    "My AI work focuses on practical applications of modern AI systems: RAG, embeddings, LLM-powered applications, agentic workflows, and AI-assisted development. I am especially interested in turning AI demos into reliable systems with clear architecture, useful UX, and maintainable code.",
  bullets: [
    "Agentic AI",
    "RAG systems / embeddings",
    "MCP",
    "Context engineering",
    "LLM applications",
    "AI-assisted software development",
    "AI UX",
    "Responsible and transparent AI behavior",
  ],
};

export const experience = {
  progression: "Intern → Software Analyst → Senior Software Analyst → Software Advisor",
  highlights: [
    "11+ years of engineering experience",
    "Front-end and full-stack software delivery",
    "React.js and Java expertise",
    "Enterprise software environments",
    "Cross-functional collaboration",
    "Debugging and long-term maintainability",
    "Architecture and technical decision-making",
  ],
};

export const twinTeaser = {
  title: "AI Digital Twin",
  body: "Ask about my background, projects, tech stack, and engineering decisions — backed by a deployed full-stack AWS Bedrock application.",
  ctaLabel: "Chat with my AI Digital Twin",
  ctaHref: siteLinks.digitalTwinDemo,
  githubHref: siteLinks.digitalTwinRepo,
};

export const personality = {
  title: "Also, I'm human.",
  caption: "Serious about engineering. Less serious about hats.",
  body: "I build production software, AI systems, and occasionally questionable fashion decisions.",
};

export const contact = {
  intro:
    "Open to senior software engineering, full-stack engineering, AI engineering, and agentic AI application roles.",
};

export const footerNote = `© ${new Date().getFullYear()} Brian E. Kane. All rights reserved.`;
