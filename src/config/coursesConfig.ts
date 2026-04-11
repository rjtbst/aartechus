// src/config/coursesConfig.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all course data across:
//   Navbar  |  CoursesSection  |  CoursesPageClient  |  ContactClient  |  Chatbot
// ─────────────────────────────────────────────────────────────────────────────

export type CourseMode = "live" | "self-paced";

export interface Course {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  duration: string;
  students: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  color: string;
  cardBg: string;
  href: string;
  tags: string[];
  fee: string;
  emi: string;
  highlights: string[];
  modes: CourseMode[];
  category: string;
  level: string;
  description: string;
  keywords: string[];
}

// ─── DATA ────────────────────────────────────────────────────────────────────

export const coursesConfig: Course[] = [
  {
    id: "java-developer-ai",
    icon: "☕",
    title: "Java Developer + AI Bootcamp",
    subtitle: "Build Enterprise Apps with AI Capabilities",
    duration: "8 Months",
    students: "12,000+",
    rating: 4.9,
    reviews: 3200,
    badge: "BESTSELLER",
    badgeColor: "badge-orange",
    color: "from-violet-600 to-indigo-600",
    cardBg: "bg-violet-50",
    href: "/courses/java-developer-ai",
    tags: ["Java", "Spring Boot", "Microservices", "AI APIs", "OpenAI", "REST"],
    fee: "$140,000",
    emi: "$2,800/mo",
    highlights: [
      "AI API integration",
      "Live doubt sessions",
      "Mock interviews",
      "Enterprise-ready skills",
    ],
    modes: ["live"],
    category: "Full Stack",
    level: "Beginner to Advanced",
    description:
      "Master Java, Spring Boot, and Microservices while integrating AI APIs into enterprise applications. Build intelligent REST APIs and AI-powered backends.",
    keywords: [
      "java", "spring boot", "microservices", "backend", "rest api",
      "openai", "ai integration", "enterprise", "chatbot", "java developer",
    ],
  },
  {
    id: "data-engineer-ai",
    icon: "⚙️",
    title: "Data Engineer + AI Bootcamp",
    subtitle: "Build Smart Data Pipelines with AI & ML",
    duration: "6 Months",
    students: "4,800+",
    rating: 4.8,
    reviews: 980,
    badge: "NEW",
    badgeColor: "badge-green",
    color: "from-amber-500 to-orange-500",
    cardBg: "bg-amber-50",
    href: "/courses/data-engineer-ai",
    tags: ["Spark", "Airflow", "SQL", "AWS", "MLOps", "ML Pipelines"],
    fee: "$130,000",
    emi: "$2,600/mo",
    highlights: [
      "ML pipeline integration",
      "Real-time AI pipelines",
      "MLOps fundamentals",
      "Cloud platforms (AWS/Azure)",
    ],
    modes: ["live"],
    category: "Data",
    level: "Intermediate",
    description:
      "Build scalable data pipelines with AI/ML integration using Spark, Airflow, and cloud platforms. Learn MLOps and feature engineering for production ML systems.",
    keywords: [
      "data engineering", "spark", "airflow", "sql", "aws", "azure",
      "mlops", "ml pipeline", "feature engineering", "data pipeline",
      "real-time", "big data",
    ],
  },
  {
    id: "ai-developer-bootcamp",
    icon: "🤖",
    title: "AI Developer Bootcamp",
    subtitle: "Advanced GenAI & LLM Specialization",
    duration: "6 Months",
    students: "3,200+",
    rating: 4.9,
    reviews: 870,
    badge: "HOT",
    badgeColor: "badge-purple",
    color: "from-rose-500 to-pink-600",
    cardBg: "bg-blue-50",
    href: "/courses/ai-developer-bootcamp",
    tags: ["LLMs", "RAG", "Prompt Engineering", "Vector DBs", "AI Agents", "GenAI"],
    fee: "$180,000",
    emi: "$3,600/mo",
    highlights: [
      "LLM fine-tuning & RAG",
      "AI Agents & automation",
      "Vector databases",
      "Production AI apps",
    ],
    modes: ["live"],
    category: "AI",
    level: "Intermediate to Advanced",
    description:
      "Become a specialist in AI, LLMs, and Generative AI. Master prompt engineering, RAG pipelines, vector databases, and build production-grade AI applications.",
    keywords: [
      "ai developer", "llm", "generative ai", "genai", "rag", "prompt engineering",
      "vector database", "pinecone", "faiss", "ai agent", "chatgpt", "openai",
      "langchain", "large language model",
    ],
  },
  {
    id: "data-scientist-ai",
    icon: "📊",
    title: "Data Scientist + AI Bootcamp",
    subtitle: "Combine Data Science with Modern AI",
    duration: "8 Months",
    students: "5,500+",
    rating: 4.8,
    reviews: 1400,
    badge: "",
    badgeColor: "",
    color: "from-blue-500 to-cyan-500",
    cardBg: "bg-blue-50",
    href: "/courses/data-scientist-ai",
    tags: ["Python", "ML", "NLP", "Statistics", "GenAI", "Forecasting"],
    fee: "$150,000",
    emi: "$3,000/mo",
    highlights: [
      "Advanced ML models",
      "NLP & text analytics",
      "GenAI for data insights",
      "AI-driven forecasting",
    ],
    modes: ["live", "self-paced"],
    category: "Data",
    level: "Beginner to Advanced",
    description:
      "Combine traditional data science with modern AI techniques. Master ML, NLP, and GenAI to build AI-powered analytics solutions and predictive systems.",
    keywords: [
      "data science", "machine learning", "statistics", "python", "nlp",
      "forecasting", "ai", "generative ai", "data visualization",
      "model evaluation", "scikit-learn", "tensorflow",
    ],
  },
  {
    id: "python-programming",
    icon: "🐍",
    title: "Python Programming",
    subtitle: "Core to Advanced",
    duration: "4 Months",
    students: "3,000+",
    rating: 4.8,
    reviews: 850,
    badge: "",
    badgeColor: "",
    color: "from-teal-500 to-cyan-600",
    cardBg: "bg-violet-50",
    href: "/courses/python-programming",
    tags: ["Python", "OOP", "APIs", "Automation", "Flask", "NumPy"],
    fee: "$70,000",
    emi: "$1,400/mo",
    highlights: [
      "Beginner friendly",
      "Real-world projects",
      "Automation scripts",
      "API development",
    ],
    modes: ["live", "self-paced"],
    category: "Programming",
    level: "Beginner to Intermediate",
    description:
      "Master Python from core fundamentals to advanced topics including OOP, APIs, automation, and Flask web development.",
    keywords: [
      "python", "programming", "oop", "flask", "automation", "scripting",
      "numpy", "pandas", "backend", "api",
    ],
  },
  {
    id: "quality-assurance",
    icon: "🧪",
    title: "Quality Assurance (QA)",
    subtitle: "Manual & Automation Testing",
    duration: "5 Months",
    students: "2,200+",
    rating: 4.7,
    reviews: 610,
    badge: "",
    badgeColor: "",
    color: "from-pink-600 to-rose-500",
    cardBg: "bg-pink-50",
    href: "/courses/quality-assurance",
    tags: ["Selenium", "Cypress", "JIRA", "Postman", "TestNG", "API Testing"],
    fee: "$90,000",
    emi: "$1,800/mo",
    highlights: [
      "Manual + automation",
      "Industry tools",
      "Real project testing",
      "Career support",
    ],
    modes: ["live", "self-paced"],
    category: "Testing",
    level: "Beginner to Advanced",
    description:
      "Learn manual and automation testing with Selenium, Cypress, Postman, and JIRA. Job-ready QA training with career support drives.",
    keywords: [
      "qa", "quality assurance", "testing", "selenium", "cypress", "automation testing",
      "manual testing", "postman", "api testing", "testng", "jira",
    ],
  },
];

// ─── DERIVED HELPERS ─────────────────────────────────────────────────────────

export const courseCategories = [
  "All",
  ...Array.from(new Set(coursesConfig.map((c) => c.category))),
];

export const courseModes: CourseMode[] = ["live", "self-paced"];

export const courseModeLabels: Record<CourseMode, string> = {
  live: "Live Online",
  "self-paced": "Self-Paced",
};

export const courseModeShortLabels: Record<CourseMode, string> = {
  live: "Live",
  "self-paced": "Self-paced",
};

export const navCourseLinks = coursesConfig.map((c) => ({
  name: c.title,
  path: c.href,
}));

export const courseSelectOptions = coursesConfig.map((c) => c.title);

export const getCourseById = (id: string): Course | undefined =>
  coursesConfig.find((c) => c.id === id);

export const getCoursesByCategory = (category: string): Course[] =>
  category === "All"
    ? coursesConfig
    : coursesConfig.filter((c) => c.category === category);

export const getCoursesByMode = (mode: CourseMode): Course[] =>
  coursesConfig.filter((c) => c.modes.includes(mode));

// ─── Search ───────────────────────────────────────────────────────────────────

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const searchCourses = (query: string): Course[] => {
  const q = query.toLowerCase().trim();
  if (!q) return coursesConfig;

  const scored = coursesConfig.map((c) => {
    let score = 0;
    const t = c.title.toLowerCase();
    const d = c.description.toLowerCase();
    const sub = c.subtitle.toLowerCase();

    if (t === q) score += 1000;
    else if (t.startsWith(q)) score += 500;
    else if (new RegExp(`\\b${escapeRegex(q)}\\b`).test(t)) score += 300;
    else if (t.includes(q)) score += 150;

    if (sub.includes(q)) score += 80;

    if (c.keywords) {
      if (c.keywords.some((k) => k.toLowerCase() === q)) score += 800;
      else if (c.keywords.some((k) => k.toLowerCase().startsWith(q))) score += 200;
      else if (
        c.keywords.some((k) =>
          new RegExp(`\\b${escapeRegex(q)}\\b`).test(k.toLowerCase()),
        )
      )
        score += 100;
      else if (c.keywords.some((k) => k.toLowerCase().includes(q))) score += 50;
    }

    if (c.tags.some((tag) => tag.toLowerCase() === q)) score += 600;
    else if (c.tags.some((tag) => tag.toLowerCase().includes(q))) score += 80;

    if (c.category.toLowerCase() === q) score += 80;
    else if (c.category.toLowerCase().includes(q)) score += 40;

    if (new RegExp(`\\b${escapeRegex(q)}\\b`).test(d)) score += 30;
    else if (d.includes(q)) score += 15;

    const qWords = q.split(/\s+/);
    if (qWords.length > 1) {
      if (qWords.every((w) => t.includes(w))) score += 100;
      if (
        c.keywords &&
        qWords.every((w) =>
          c.keywords.some((k) => k.toLowerCase().includes(w)),
        )
      )
        score += 50;
    }

    return { c, score };
  });

  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) =>
      b.score !== a.score ? b.score - a.score : a.c.title.length - b.c.title.length,
    )
    .map((x) => x.c);
};

export default coursesConfig;