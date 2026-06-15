import { siteLinks } from "@/lib/site-links";

export type ProjectStatus = "live" | "coming-soon" | "case-study" | "private-code";

export type ProjectCard = {
  title: string;
  subtitle?: string;
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
    title: "InvestAI",
    subtitle: "AI-Assisted Paper Trading Platform",
    description:
      "Full-stack paper-trading platform with a React SPA, FastAPI backend, and OpenAI Agents SDK orchestration. Morning briefings flow through a deterministic pipeline: candidate scoring, market data, portfolio state, risk rules, then structured AI recommendations with a full decision ledger. Demonstrates responsible AI (manual/assisted/autonomous modes), cost-aware LLM usage, InstantDB persistence, WCAG-tested UI, and Vercel + Render deployment.",
    techStack: [
      "React 19",
      "Redux",
      "React Router",
      "FastAPI",
      "Python",
      "OpenAI Agents SDK",
      "InstantDB",
      "Pydantic",
      "MCP",
      "Vercel / Render",
      "WCAG 2.2",
    ],
    status: "live",
    demoUrl: siteLinks.stockTraderDemo,
    githubUrl: siteLinks.stockTraderRepo,
  },
  {
    title: "The Hallucination Tribunal",
    subtitle: "RAG Document Assistant",
    description:
      "Portfolio RAG app that answers questions from a controlled document corpus and subjects each answer to adversarial review: Witness generates grounded responses, Prosecutor challenges claims, and Judge delivers transparent verdicts with citations. Demonstrates hybrid retrieval, multi-agent orchestration, claim-level verification, document ingestion, and an evaluation dashboard.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Pydantic",
      "ChromaDB",
      "Hybrid retrieval (vector + BM25)",
      "Multi-agent pipeline",
      "OpenAI (optional Ollama)",
      "Vercel / Render",
    ],
    status: "live",
    demoUrl: siteLinks.hallucinationTribunalDemo,
    githubUrl: siteLinks.hallucinationTribunalRepo,
  },
  {
    title: "Insurellm RAG Explorer",
    subtitle: "Interactive insurance knowledge base demo",
    description:
      "Explore a fictional insurance company's document corpus (contracts, products, employees). Switch between embedding models to compare retrieval behavior, visualize the vector store in 2D and 3D t-SNE plots, and ask grounded questions with cited sources.",
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
