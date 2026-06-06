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
  {
    title: "Insurellm RAG Explorer",
    description:
      "Interactive knowledge base explorer with bundled markdown documents. Switch between embedding models to compare retrieval behavior, visualize the vector store in 2D and 3D t-SNE plots, and ask grounded questions with cited sources.",
    techStack: [
      "Python",
      "Gradio",
      "ChromaDB",
      "LangChain",
      "Hugging Face Embeddings",
      "OpenAI",
      "Plotly",
      "t-SNE",
    ],
    status: "live",
    demoUrl: siteLinks.insurellmRagExplorerDemo,
    githubUrl: siteLinks.insurellmRagExplorerRepo,
  },
  {
    title: "National Park Trip Planner",
    description:
      "Plan visits to U.S. national parks with an interactive assistant powered by structured park data and LLM-driven suggestions.",
    techStack: ["CrewAI", "Multi Agent", "Python", "Gradio", "Hugging Face Spaces", "LLM"],
    status: "live",
    demoUrl: siteLinks.nationalParkTripPlannerDemo,
    githubUrl: siteLinks.nationalParkTripPlannerRepo,
  },
  {
    title: "MediNotes Pro",
    description:
      "Healthcare-focused AI assistant that turns clinician consultation notes into structured visit summaries, doctor next steps, and patient-friendly email drafts. Inference uses Ollama in a private Docker container on the backend so notes are not sent to third-party LLM APIs, supporting a PHI/PII-conscious demo path (synthetic data only).",
    problem:
      "Clinical documentation is time-consuming; sending real consultation text to public LLM APIs raises PHI/PII exposure concerns.",
    solution:
      "Browser calls a controlled FastAPI backend; the backend routes model work to containerized Ollama over private networking (Render private service in production), not a third-party inference API in the deployed demo path.",
    techStack: [
      "Ollama (private container)",
      "Docker",
      "FastAPI",
      "Python",
      "Next.js",
      "React",
      "TypeScript",
      "Clerk",
      "SSE streaming",
      "Vercel / Render",
    ],
    status: "live",
    demoUrl: siteLinks.consultationAiDemo,
    githubUrl: siteLinks.consultationAiRepo,
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
