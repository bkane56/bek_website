import { siteLinks } from "@/lib/site-links";

export type ProjectStatus = "live" | "coming-soon" | "case-study" | "private-code";

export type ProjectCard = {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
};

export const featuredProjects: ProjectCard[] = [
  {
    title: "AI Digital Twin",
    description:
      "Conversational AI assistant grounded on resume, portfolio content, project summaries, and professional background.",
    techStack: [
      "Next.js",
      "React",
      "OpenAI",
      "RAG",
      "Embeddings",
      "Vector database",
      "ElevenLabs optional voice mode",
    ],
    status: "coming-soon",
  },
  {
    title: "Agentic Coding Team",
    description:
      "Multi-agent software workflow using supervisor, architect, engineer, and testing agents to plan, build, and validate software tasks.",
    techStack: ["Python", "OpenAI Agents SDK", "MCP", "Docker", "Pydantic"],
    status: "private-code",
  },
  {
    title: "React Enterprise Application",
    description:
      "Large-scale React work with React Router, reducer-driven state, and production-oriented front-end architecture.",
    techStack: ["React", "React Router", "Reducers", "TypeScript", "Component architecture"],
    status: "live",
    githubUrl: siteLinks.github,
  },
  {
    title: "RAG Document Assistant",
    description:
      "Document assistant that retrieves relevant content from uploaded files and generates grounded responses with citations.",
    techStack: ["Python", "RAG", "Embeddings", "Vector database", "LLM API", "Streamlit or Next.js"],
    status: "case-study",
  },
];

export function statusLabel(status: ProjectStatus): string {
  switch (status) {
    case "live":
      return "Live";
    case "coming-soon":
      return "Coming Soon";
    case "case-study":
      return "Case Study Pending";
    case "private-code":
      return "Private Code / Write-Up Coming";
    default:
      return status;
  }
}
