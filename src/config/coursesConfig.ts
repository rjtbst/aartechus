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
    cardBg: "bg-violet-50",
    href: "/courses/java-full-stack",
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
      "java", "spring boot", "full stack", "backend", "react", "mysql",
      "docker", "gen ai", "placement",
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
    cardBg: "bg-blue-50",
    href: "/courses/mern-full-stack",
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
      "mern", "mongodb", "express", "react", "node", "nodejs",
      "javascript", "full stack", "chatgpt", "redis",
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
    cardBg: "bg-green-50",
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
      "data analytics", "power bi", "sql", "excel", "tableau", "python",
      "statistics", "business intelligence", "bi",
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
    badgeColor: "badge-violet-50",
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
      "data science", "machine learning", "deep learning", "llm", "nlp",
      "tensorflow", "pytorch", "mlops", "ai", "artificial intelligence", "generative ai",
    ],
  },

  // ── NEW: Python Programming ──
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
    color: "linear-gradient(135deg,#0891b2,#0e7490)",
    cardBg: "bg-orange-50",
    href: "/courses/python-programming",
    tags: ["Python", "OOP", "APIs", "Automation", "Flask", "NumPy"],
    fee: "₹39,999",
    emi: "₹2,100/mo",
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

  // ── NEW: Quality Assurance ──
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
    color: "linear-gradient(135deg,#db2777,#be185d)",
    cardBg: "bg-green-50",
    href: "/courses/quality-assurance",
    tags: ["Selenium", "Cypress", "JIRA", "Postman", "TestNG", "API Testing"],
    fee: "₹44,999",
    emi: "₹2,400/mo",
    highlights: [
      "Manual + automation",
      "Industry tools",
      "Real project testing",
      "Placement support",
    ],
    modes: ["live", "self-paced"],
    category: "Testing",
    level: "Beginner to Advanced",
    description:
      "Learn manual and automation testing with Selenium, Cypress, Postman, and JIRA. Job-ready QA training with placement drives.",
    keywords: [
      "qa", "quality assurance", "testing", "selenium", "cypress", "automation testing",
      "manual testing", "postman", "api testing", "testng", "jira",
    ],
  },

  // ── NEW: Data Engineering ──
  {
    id: "data-engineering",
    icon: "⚙️",
    title: "Data Engineering",
    subtitle: "Pipelines, Spark & Cloud",
    duration: "6 Months",
    students: "1,800+",
    rating: 4.8,
    reviews: 490,
    badge: "NEW",
    badgeColor: "badge-green",
    color: "linear-gradient(135deg,#ca8a04,#d97706)",
    cardBg: "bg-violet-50",
    href: "/courses/data-engineering",
    tags: ["Apache Spark", "Kafka", "Airflow", "AWS", "dbt", "SQL"],
    fee: "₹69,999",
    emi: "₹3,700/mo",
    highlights: [
      "End-to-end pipelines",
      "Cloud platforms",
      "Real-time streaming",
      "Placement support",
    ],
    modes: ["live"],
    category: "Data",
    level: "Intermediate",
    description:
      "Build scalable data pipelines using Apache Spark, Kafka, Airflow, and cloud platforms. Ideal for aspiring data engineers.",
    keywords: [
      "data engineering", "spark", "kafka", "airflow", "etl", "pipeline",
      "aws", "dbt", "sql", "big data", "streaming",
    ],
  },

  // ── NEW: Cybersecurity ──
  {
    id: "cybersecurity",
    icon: "🛡️",
    title: "Cybersecurity",
    subtitle: "Ethical Hacking & Defense",
    duration: "6 Months",
    students: "2,500+",
    rating: 4.8,
    reviews: 720,
    badge: "",
    badgeColor: "",
    color: "linear-gradient(135deg,#16a34a,#15803d)",
    cardBg: "bg-blue-50",
    href: "/courses/cybersecurity",
    tags: ["Ethical Hacking", "VAPT", "Network Security", "OWASP", "CompTIA", "SOC"],
    fee: "₹64,999",
    emi: "₹3,400/mo",
    highlights: [
      "Hands-on labs",
      "Industry certifications",
      "Pen testing projects",
      "Placement support",
    ],
    modes: ["live", "self-paced"],
    category: "Security",
    level: "Beginner to Advanced",
    description:
      "Learn ethical hacking, VAPT, network security, and SOC operations. Preparation for CompTIA Security+, CEH, and industry roles.",
    keywords: [
      "cybersecurity", "ethical hacking", "vapt", "penetration testing", "network security",
      "owasp", "soc", "comptia", "ceh", "security", "infosec",
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