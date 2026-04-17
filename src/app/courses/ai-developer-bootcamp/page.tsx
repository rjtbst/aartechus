import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "AI Developer Bootcamp — Advanced GenAI & LLM Specialization",
  description: "Become a specialist in LLMs, RAG, AI Agents, and Generative AI. Build production-grade AI applications. Salary range $100K–$180K+.",
};

const course: CourseDetail = {
  title: "AI Developer Bootcamp",
  subtitle: "Become a Specialist in AI, LLMs & Generative AI",
  badge: "HOT",
  badgeColor: "badge-purple",
  color: "from-rose-500 to-pink-600",
  emoji: "🤖",
  duration: "6 Months",
  students: "1,000+",
  rating: 4.9,
  reviews: 870,
  // fee: "$180,000",
  // emi: "$3,600/mo",
  level: "Intermediate to Advanced",
  nextBatch: "May 12, 2026",
  overview:
    "The AI Developer Bootcamp is the most advanced AI program we offer — purpose-built for engineers who want to specialize in Large Language Models, Generative AI, and production AI systems. You'll master LLMs, Prompt Engineering, Retrieval-Augmented Generation (RAG), vector databases, and AI agent frameworks. Graduate as an AI Engineer or GenAI Developer, one of the highest-demand and highest-paid roles in tech.",
  whatYouLearn: [
    "Large Language Models (LLMs) — architecture & usage",
    "Prompt engineering & advanced prompting patterns",
    "Retrieval-Augmented Generation (RAG) systems",
    "Vector databases — Pinecone, FAISS, Chroma",
    "AI Agents — LangChain, AutoGen, CrewAI",
    "Fine-tuning open-source LLMs",
    "AI app development with LangChain & LlamaIndex",
    "Embeddings & semantic search",
    "Production AI deployment & monitoring",
    "AI safety, evaluation & responsible development",
  ],
  curriculum: [
    {
      module: "AI & ML Foundations",
      topics: ["Python for AI", "ML fundamentals review", "Neural network basics", "Transformer architecture", "Hugging Face ecosystem", "OpenAI & Anthropic APIs"],
      weeks: "Weeks 1–3",
    },
    {
      module: "Prompt Engineering & LLMs",
      topics: ["Prompting strategies", "Chain-of-thought reasoning", "Few-shot & zero-shot", "System prompt design", "Structured outputs", "LLM evaluation & benchmarking"],
      weeks: "Weeks 4–6",
    },
    {
      module: "RAG & Vector Databases",
      topics: ["RAG architecture", "Document chunking strategies", "Embeddings & semantic search", "Pinecone & FAISS setup", "Hybrid search", "Advanced RAG patterns"],
      weeks: "Weeks 7–10",
    },
    {
      module: "AI Agents & Automation",
      topics: ["Agent frameworks (LangChain, AutoGen)", "Tool use & function calling", "Multi-agent orchestration", "Memory & state management", "CrewAI for team agents", "Agent evaluation & safety"],
      weeks: "Weeks 11–14",
    },
    {
      module: "Fine-Tuning & Production AI",
      topics: ["Fine-tuning with LoRA/QLoRA", "Dataset preparation", "Model evaluation & red-teaming", "Production deployment (FastAPI)", "Monitoring & observability", "Cost optimization"],
      weeks: "Weeks 15–18",
    },
    {
      module: "Capstone & Career Prep",
      topics: ["ChatGPT-like chatbot project", "AI agent for business automation", "Document Q&A system", "Portfolio & GitHub", "AI Engineer interview prep", "Mock technical & system design rounds"],
      weeks: "Weeks 19–24",
    },
  ],
  projects: [
    {
      title: "ChatGPT-Like Chatbot",
      desc: "Full-stack AI chatbot with persistent memory, streaming responses, and multi-turn conversation management.",
      tech: ["LangChain", "OpenAI API", "Pinecone", "FastAPI", "React"],
    },
    {
      title: "AI Agent for Business Automation",
      desc: "Autonomous AI agent that browses the web, reads emails, and executes multi-step business workflows.",
      tech: ["AutoGen", "CrewAI", "Python", "Playwright", "LLM APIs"],
    },
    {
      title: "Document Q&A System",
      desc: "RAG-powered system that ingests enterprise documents and answers natural language queries with citations.",
      tech: ["LlamaIndex", "FAISS", "Embeddings", "FastAPI", "AWS S3"],
    },
    {
      title: "Fine-Tuned Domain LLM",
      desc: "Open-source LLM fine-tuned on domain-specific data using LoRA, deployed as a production inference API.",
      tech: ["Hugging Face", "LoRA", "PyTorch", "vLLM", "Docker"],
    },
  ],
  mentors: [
    { name: "Alex Kim", company: "OpenAI", role: "Applied AI Engineer", exp: "7 years" },
    { name: "Rachel Green", company: "Anthropic", role: "Research Engineer", exp: "6 years" },
    { name: "Tom Bradley", company: "Meta AI", role: "LLM Specialist", exp: "8 years" },
    { name: "Aisha Patel", company: "Google DeepMind", role: "ML Research Engineer", exp: "9 years" },
  ],
  placementStats: [
    { label: "Avg Salary Range", value: "$120K–$180K+", color: "text-green-400" },
    { label: "Top Employers", value: "OpenAI, Google", color: "text-purple-400" },
    { label: "Highest Offer", value: "$180K+", color: "text-orange-400" },
    { label: "Students Trained", value: "1K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "What prerequisites do I need?", a: "Python proficiency and basic ML knowledge are recommended. We provide a pre-course Python refresher for students who need it." },
    { q: "Will I work with real AI APIs?", a: "Yes — you'll use OpenAI, Anthropic, and open-source models via Hugging Face. Projects are built with production-grade APIs and tools." },
    { q: "Is Generative AI actually in demand?", a: "GenAI roles are among the fastest-growing in tech. Companies like Google, Microsoft, Amazon, and thousands of startups are actively hiring AI Engineers at premium salaries." },
    { q: "What roles can I target?", a: "AI Engineer, GenAI Developer, LLM Engineer, ML Engineer, and AI Product Engineer at US tech companies and AI startups." },
  ],
};

export default function AIDeveloperBootcampPage() {
  return <CourseDetailPage course={course} />;
}