// src/config/coursesConfig.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all course data across:
//   Navbar  |  CoursesSection  |  CoursesPageClient  |  ContactClient  |  Chatbot
// ─────────────────────────────────────────────────────────────────────────────

export type CourseMode = "live"| "self-paced";

export interface Course {
  /** Unique identifier (used as key) */
  id: string;
  /** Emoji icon shown on cards */
  icon: string;
  /** Full course title */
  title: string;
  /** Short subtitle / focus area */
  subtitle: string;
  /** Course duration string e.g. "8 Months" */
  duration: string;
  /** Enrolled students count string e.g. "12,000+" */
  students: string;
  /** Average rating (0–5) */
  rating: number;
  /** Number of reviews */
  reviews: number;
  /** Badge label ("BESTSELLER" | "HOT" | "NEW" | "") */
  badge: string;
  /** Tailwind badge colour class — matches CoursesPageClient badge styles */
  badgeColor: string;
  /** CSS gradient string used for card top-bar & icon bg */
  color: string;
  /** Tailwind bg color class for homepage card */
  cardBg: string;
  /** URL path to the course detail page */
  href: string;
  /** Tech/topic tags */
  tags: string[];
  /** Display fee (₹) */
  fee: string;
  /** EMI string e.g. "₹4,200/mo" */
  emi: string;
  /** Key selling highlights (4 items) */
  highlights: string[];
  /** Available learning modes */
  modes: CourseMode[];
  /** Category used for filter tabs */
  category: string;
  /** Experience level label */
  level: string;
  /** Short description for chatbot / SEO */
  description: string;
  /** Keywords for search */
  keywords: string[];
}

// ─── DATA ────────────────────────────────────────────────────────────────────

export const coursesConfig: Course[] = [
  {
    id: "java-fullstack",
    icon: "☕",
    title: "Java Full Stack Development",
    subtitle: "with Gen AI",
    duration: "8 Months",
    students: "12,000+",
    rating: 4.9,
    reviews: 3200,
    badge: "BESTSELLER",
    badgeColor: "badge-orange",
    color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    cardBg: "bg-blue-100/70",
    href: "/courses/full-stack-development",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Gen AI", "Docker"],
    fee: "₹79,999",
    emi: "₹4,200/mo",
    highlights: [
      "Job guarantee",
      "Live doubt sessions",
      "Mock interviews",
      "LeetCode prep",
    ],
    modes: ["live"],
    category: "Full Stack",
    level: "Beginner to Advanced",
    description:
      "Master Java, Spring Boot, React, and MySQL with hands-on Gen AI integration. Includes job guarantee and placement support.",
    keywords: [
      "java",
      "spring boot",
      "full stack",
      "backend",
      "react",
      "mysql",
      "docker",
      "gen ai",
      "placement",
    ],
  },
  {
    id: "mern-fullstack",
    icon: "🌐",
    title: "MERN Full Stack Development",
    subtitle: "with Gen AI",
    duration: "8 Months",
    students: "9,500+",
    rating: 4.8,
    reviews: 2700,
    badge: "HOT",
    badgeColor: "badge-purple",
    color: "linear-gradient(135deg,#2563eb,#0891b2)",
    cardBg: "bg-green-50",
    href: "/courses/full-stack-development",
    tags: ["MongoDB", "Express", "React", "Node.js", "ChatGPT API", "Redis"],
    fee: "₹74,999",
    emi: "₹3,900/mo",
    highlights: [
      "Placement support",
      "Real projects",
      "Industry mentors",
      "System design",
    ],
    modes: ["live", "self-paced"],
    category: "Full Stack",
    level: "Beginner to Advanced",
    description:
      "Build full-stack web apps with MongoDB, Express, React, and Node.js. Includes ChatGPT API integration and placement drives.",
    keywords: [
      "mern",
      "mongodb",
      "express",
      "react",
      "node",
      "nodejs",
      "javascript",
      "full stack",
      "chatgpt",
      "redis",
    ],
  },
  {
    id: "data-analytics",
    icon: "📊",
    title: "Data Analytics Course",
    subtitle: "Power BI, SQL & Python",
    duration: "6 Months",
    students: "7,000+",
    rating: 4.8,
    reviews: 1900,
    badge: "",
    badgeColor: "",
    color: "linear-gradient(135deg,#16a34a,#10b981)",
    cardBg: "bg-purple-50",
    href: "/courses/data-analytics",
    tags: ["Python", "SQL", "Power BI", "Excel", "Tableau", "Statistics"],
    fee: "₹59,999",
    emi: "₹3,100/mo",
    highlights: [
      "No coding background needed",
      "Business analytics focus",
      "Real datasets",
      "Industry projects",
    ],
    modes: ["live", "self-paced"],
    category: "Data",
    level: "Beginner Friendly",
    description:
      "Learn Python, SQL, Power BI, and Tableau for data-driven decision-making. No prior coding experience required.",
    keywords: [
      "data analytics",
      "power bi",
      "sql",
      "excel",
      "tableau",
      "python",
      "statistics",
      "business intelligence",
      "bi",
    ],
  },
  {
    id: "data-science-ai",
    icon: "🤖",
    title: "Data Science & AI",
    subtitle: "Machine Learning & LLMs",
    duration: "8 Months",
    students: "5,500+",
    rating: 4.9,
    reviews: 1400,
    badge: "NEW",
    badgeColor: "badge-green",
    color: "linear-gradient(135deg,#ea580c,#ef4444)",
    cardBg: "bg-orange-50",
    href: "/courses/data-science-ai",
    tags: ["Python", "TensorFlow", "PyTorch", "LLMs", "MLOps", "Transformers"],
    fee: "₹89,999",
    emi: "₹4,700/mo",
    highlights: [
      "Generative AI focus",
      "LLM fine-tuning",
      "Cloud deployment",
      "Research papers",
    ],
    modes: ["live"],
    category: "Data",
    level: "Intermediate",
    description:
      "Deep-dive into machine learning, deep learning, and large language models. Build and deploy AI systems on cloud infrastructure.",
    keywords: [
      "data science",
      "machine learning",
      "deep learning",
      "llm",
      "nlp",
      "tensorflow",
      "pytorch",
      "mlops",
      "ai",
      "artificial intelligence",
      "generative ai",
    ],
  },
];

// ─── DERIVED HELPERS ─────────────────────────────────────────────────────────

/** All distinct course categories (used in filter tabs) */
export const courseCategories = [
  "All",
  ...Array.from(new Set(coursesConfig.map((c) => c.category))),
];

/** All distinct learning modes */
export const courseModes: CourseMode[] = ["live",  "self-paced"];

export const courseModeLabels: Record<CourseMode, string> = {
  live: "Live Online",
  
  "self-paced": "Self-Paced",
};

/** Short mode labels used on homepage cards */
export const courseModeShortLabels: Record<CourseMode, string> = {
  live: "Live",

  "self-paced": "Self-paced",
};

/** Items for Navbar dropdown  — { name, path } */
export const navCourseLinks = coursesConfig.map((c) => ({
  name: c.title,
  path: c.href,
}));

/** Options for ContactClient course <select> */
export const courseSelectOptions = coursesConfig.map((c) => c.title);

/** Get course by id */
export const getCourseById = (id: string): Course | undefined =>
  coursesConfig.find((c) => c.id === id);

/** Filter courses by category */
export const getCoursesByCategory = (category: string): Course[] =>
  category === "All"
    ? coursesConfig
    : coursesConfig.filter((c) => c.category === category);

/** Filter courses by mode */
export const getCoursesByMode = (mode: CourseMode): Course[] =>
  coursesConfig.filter((c) => c.modes.includes(mode));

// ─── Search ───────────────────────────────────────────────────────────────────

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Search courses by query string — same scoring logic as servicesConfig.searchServices.
 * Returns courses sorted by relevance score (highest first).
 */
export const searchCourses = (query: string): Course[] => {
  const q = query.toLowerCase().trim();
  if (!q) return coursesConfig;

  const scored = coursesConfig.map((c) => {
    let score = 0;
    const t = c.title.toLowerCase();
    const d = c.description.toLowerCase();
    const sub = c.subtitle.toLowerCase();

    // Title matching
    if (t === q) score += 1000;
    else if (t.startsWith(q)) score += 500;
    else if (new RegExp(`\\b${escapeRegex(q)}\\b`).test(t)) score += 300;
    else if (t.includes(q)) score += 150;

    // Subtitle matching
    if (sub.includes(q)) score += 80;

    // Keyword matching
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

    // Tag matching
    if (c.tags.some((tag) => tag.toLowerCase() === q)) score += 600;
    else if (c.tags.some((tag) => tag.toLowerCase().includes(q))) score += 80;

    // Category matching
    if (c.category.toLowerCase() === q) score += 80;
    else if (c.category.toLowerCase().includes(q)) score += 40;

    // Description matching
    if (new RegExp(`\\b${escapeRegex(q)}\\b`).test(d)) score += 30;
    else if (d.includes(q)) score += 15;

    // Multi-word bonus
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