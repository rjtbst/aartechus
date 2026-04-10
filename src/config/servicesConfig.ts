// src/config/servicesConfig.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all IT service data across:
//   Navbar  |  ITServicesSection  |  ITServicesClient  |  Chatbot  |  Search
// ─────────────────────────────────────────────────────────────────────────────

import {
  Globe,
  Smartphone,
  Brain,
  Shield,
  Code2,
  Cloud,
  Palette,
  PackageOpen,
  Handshake,
  LucideIcon,
} from "lucide-react";

// ─── TYPE DEFINITIONS ────────────────────────────────────────────────────────

export interface ServiceCaseStudy {
  client: string;
  result: string;
  time: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  emoji: string;
  icon: LucideIcon;
  badge?: string;
  color: string;
  textColor: string;
  bgColor: string;
  gradient: string;
  features: string[];
  tech: string[];
  deliverables: string[];
  caseStudy: ServiceCaseStudy;
  category: string | string[];
  keywords?: string[];
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

// ─── SERVICES DATA ───────────────────────────────────────────────────────────

export const servicesConfig: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Scalable, fast & beautiful web applications",
    description:
      "We build performant, SEO-friendly, accessible web applications using React, Next.js, and Node.js. From marketing sites to complex enterprise SaaS platforms.",
    emoji: "🌐",
    icon: Globe,
    badge: "Popular",
    color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    textColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    gradient: "from-purple-500/20 to-indigo-500/20",
    features: ["React / Next.js", "APIs", "SEO", "PWA"],
    tech: ["React / Next.js", "Vue.js / Nuxt", "Node.js", "Django / FastAPI", "GraphQL", "TypeScript"],
    deliverables: [
      "Responsive UI/UX design system",
      "REST / GraphQL APIs",
      "Authentication & authorization",
      "Payment gateway integration",
      "SEO & performance optimization",
      "Admin dashboard & CMS",
    ],
    caseStudy: { client: "FinTech Startup", result: "3× faster load time, 45% conversion lift", time: "3 months" },
    category: "Core",
    keywords: ["web", "website", "next.js", "react", "frontend", "backend", "full stack", "seo", "pwa"],
  },
  {
    slug: "app-development",
    title: "App Development",
    tagline: "Native & cross-platform mobile experiences",
    description:
      "We craft delightful mobile experiences for iOS and Android. Whether native performance or cost-effective cross-platform, we deliver app-store-ready products.",
    emoji: "📱",
    icon: Smartphone,
    badge: "",
    color: "linear-gradient(135deg,#2563eb,#0891b2)",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    gradient: "from-blue-500/20 to-cyan-500/20",
    features: ["Flutter", "React Native", "Publishing", "Push"],
    tech: ["Flutter", "React Native", "Swift / SwiftUI", "Kotlin / Jetpack Compose", "Firebase", "RevenueCat"],
    deliverables: [
      "App Store & Play Store submission",
      "Push notifications",
      "Offline-first architecture",
      "In-app purchases",
      "Analytics integration",
      "OTA updates",
    ],
    caseStudy: { client: "EdTech Platform", result: "100K+ downloads in 6 weeks", time: "4 months" },
    category: "Core",
    keywords: ["mobile", "app", "ios", "android", "flutter", "react native", "cross-platform"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    tagline: "Custom AI that drives real business outcomes",
    description:
      "We build AI-powered products — from recommendation engines to custom LLM applications. Our ML engineers bring research-level expertise to real business problems.",
    emoji: "🤖",
    icon: Brain,
    badge: "Hot",
    color: "linear-gradient(135deg,#ea580c,#ef4444)",
    textColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    gradient: "from-orange-500/20 to-red-500/20",
    features: ["LLMs", "Vision", "NLP", "Chatbots"],
    tech: ["PyTorch / TensorFlow", "Hugging Face", "LangChain / LlamaIndex", "OpenAI / Anthropic APIs", "Pinecone / Weaviate", "MLflow / W&B"],
    deliverables: [
      "Custom model training & fine-tuning",
      "LLM application development",
      "RAG pipeline setup",
      "Computer vision system",
      "MLOps pipeline",
      "AI chatbot with memory",
    ],
    caseStudy: { client: "Healthcare Provider", result: "Medical report analysis in 3s vs 2 hrs", time: "5 months" },
    category: ["Core", "Advanced"],
    keywords: ["ai", "artificial intelligence", "machine learning", "llm", "chatbot", "nlp", "computer vision", "genai", "generative ai"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Intuitive interfaces that users love",
    description:
      "We design user-centric interfaces that combine aesthetic appeal with functional clarity. From wireframes to high-fidelity prototypes and design systems.",
    emoji: "🎨",
    icon: Palette,
    badge: "",
    color: "linear-gradient(135deg,#db2777,#9333ea)",
    textColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    gradient: "from-pink-500/20 to-purple-500/20",
    features: ["Figma", "Prototypes", "Design Systems", "User Research"],
    tech: ["Figma", "Adobe XD", "Framer", "Storybook", "Tailwind CSS", "Lottie Animations"],
    deliverables: [
      "User research & personas",
      "Information architecture",
      "Wireframes & low-fi prototypes",
      "High-fidelity UI design",
      "Interactive Figma prototype",
      "Design system & component library",
    ],
    caseStudy: { client: "SaaS Startup", result: "52% drop in user drop-off after redesign", time: "6 weeks" },
    category: "Core",
    keywords: ["ui", "ux", "design", "figma", "prototype", "wireframe", "user experience", "interface", "design system"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "End-to-end SaaS products built to scale",
    description:
      "We build complete SaaS platforms from idea to launch — including multi-tenancy, billing, onboarding, and analytics dashboards.",
    emoji: "🚀",
    icon: PackageOpen,
    badge: "",
    color: "linear-gradient(135deg,#16a34a,#10b981)",
    textColor: "text-green-400",
    bgColor: "bg-green-500/10",
    gradient: "from-green-500/20 to-emerald-500/20",
    features: ["SaaS", "ERP/CRM", "APIs", "Scaling"],
    tech: ["Next.js", "Stripe / Razorpay", "Prisma / Supabase", "AWS / GCP", "Kubernetes", "Segment / Mixpanel"],
    deliverables: [
      "Multi-tenant architecture",
      "Subscription billing integration",
      "User onboarding flows",
      "Analytics & reporting dashboard",
      "Role-based access control",
      "API documentation",
    ],
    caseStudy: { client: "HR Tech Startup", result: "Launched MVP in 10 weeks, 200 paying customers in Month 1", time: "10 weeks" },
    category: ["Core", "Advanced"],
    keywords: ["saas", "software as a service", "erp", "crm", "subscription", "multi-tenant", "product", "startup"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Resilient infrastructure that scales effortlessly",
    description:
      "We design, migrate, and manage cloud infrastructure on AWS, Azure, and GCP. From Kubernetes clusters to serverless — built for reliability and cost efficiency.",
    emoji: "☁️",
    icon: Cloud,
    badge: "",
    color: "linear-gradient(135deg,#0891b2,#0e7490)",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    gradient: "from-cyan-500/20 to-teal-500/20",
    features: ["AWS / GCP", "Docker", "CI/CD", "Scaling"],
    tech: ["AWS / Azure / GCP", "Terraform / Pulumi", "Kubernetes / Docker", "GitHub Actions / Jenkins", "Prometheus / Grafana", "Istio / Service Mesh"],
    deliverables: [
      "Cloud architecture design",
      "Kubernetes deployment",
      "CI/CD pipeline setup",
      "Auto-scaling configuration",
      "Cost optimization audit",
      "24/7 monitoring & alerting",
    ],
    caseStudy: { client: "E-Commerce Giant", result: "60% infra cost reduction, 99.99% uptime", time: "2 months" },
    category: "Advanced",
    keywords: ["cloud", "devops", "aws", "azure", "gcp", "kubernetes", "docker", "ci/cd", "terraform", "infrastructure"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protect your assets before attackers find them",
    description:
      "Comprehensive security services: penetration testing, VAPT, security architecture reviews, and compliance (ISO 27001, SOC 2, GDPR).",
    emoji: "🛡️",
    icon: Shield,
    badge: "",
    color: "linear-gradient(135deg,#16a34a,#15803d)",
    textColor: "text-green-400",
    bgColor: "bg-green-500/10",
    gradient: "from-green-500/20 to-lime-500/20",
    features: ["PenTest", "Audits", "VAPT", "Compliance"],
    tech: ["Burp Suite", "Metasploit", "Nessus / OpenVAS", "SIEM tools", "Wireshark", "OWASP ZAP"],
    deliverables: [
      "Penetration testing report",
      "VAPT certification",
      "Security architecture review",
      "Compliance gap analysis",
      "Security training for teams",
      "Incident response playbook",
    ],
    caseStudy: { client: "Banking Platform", result: "0 critical vulnerabilities post-audit", time: "6 weeks" },
    category: "Advanced",
    keywords: ["security", "cybersecurity", "penetration testing", "pentest", "vapt", "compliance", "iso 27001", "soc2", "gdpr"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    tagline: "Bespoke software built for your exact needs",
    description:
      "End-to-end custom software development for enterprises and startups — ERPs, CRMs, SaaS products, and legacy system modernization.",
    emoji: "💻",
    icon: Code2,
    badge: "",
    color: "linear-gradient(135deg,#db2777,#be185d)",
    textColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    gradient: "from-pink-500/20 to-rose-500/20",
    features: ["Java / Python", "ERP/CRM", "APIs", "Modernization"],
    tech: ["Java / Spring", "Python / Django", "Go / Rust", "PostgreSQL / MongoDB", "RabbitMQ / Kafka", "Elasticsearch"],
    deliverables: [
      "Requirements & system design",
      "Agile sprint development",
      "QA & automated testing",
      "Documentation & API specs",
      "Deployment & handover",
      "Ongoing maintenance",
    ],
    caseStudy: { client: "Logistics Company", result: "30% ops cost reduction via automation", time: "8 months" },
    category: "Core",
    keywords: ["custom software", "enterprise", "erp", "crm", "automation", "legacy modernization", "bespoke", "java", "python"],
  },

  // ── NEW: Staffing & Recruitment ──
  {
    slug: "staffing-recruitment",
    title: "Staffing & Recruitment",
    tagline: "Pre-vetted, job-ready talent on demand",
    description:
      "We connect enterprises and startups with pre-vetted, job-ready tech talent. From contract staffing to full-time placements — we source, screen, and deliver candidates aligned to your exact requirements.",
    emoji: "🤝",
    icon: Handshake,
    badge: "New",
    color: "linear-gradient(135deg,#7c3aed,#2563eb)",
    textColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    gradient: "from-violet-500/20 to-blue-500/20",
    features: ["Contract", "Full-Time", "Enterprise", "Fortune Clients"],
    tech: [
      "Talent sourcing & screening",
      "Technical assessment",
      "Background verification",
      "Onboarding support",
      "ATS integration",
      "RPO / MSP models",
    ],
    deliverables: [
      "Curated candidate shortlist",
      "Technical interview coordination",
      "Background & reference checks",
      "Offer negotiation support",
      "90-day replacement guarantee",
      "Dedicated account manager",
    ],
    caseStudy: { client: "Fortune 500 Tech Firm", result: "42 engineers hired in 6 weeks, 94% retention at 1 year", time: "6 weeks" },
    category: ["Core", "Advanced"],
    keywords: [
      "staffing", "recruitment", "hiring", "talent", "contract staffing",
      "full-time", "tech hiring", "it recruitment", "enterprise hiring",
      "job-ready", "pre-vetted", "placement", "rpo",
    ],
  },
];

// ─── CATEGORIES ──────────────────────────────────────────────────────────────

export const categoriesConfig: Category[] = [
  { id: "core", name: "Core", description: "Foundation services every digital business needs" },
  { id: "advanced", name: "Advanced", description: "Cutting-edge solutions for complex challenges" },
];

export const categoryIdMap: Record<string, string> = {
  Core: "core",
  Advanced: "advanced",
};

// ─── NAVBAR LINKS ─────────────────────────────────────────────────────────────

export const navServiceLinks = servicesConfig.map((s) => ({
  name: s.title,
  path: `/services/${s.slug}`,
}));

// ─── UTILITY FUNCTIONS ────────────────────────────────────────────────────────

export const getAllServices = (): Service[] => servicesConfig;

export const getServicesByCategory = (category: string): Service[] =>
  servicesConfig.filter((s) => {
    if (Array.isArray(s.category)) return s.category.includes(category);
    return s.category === category;
  });

export const getServiceBySlug = (slug: string): Service | undefined =>
  servicesConfig.find((s) => s.slug === slug);

export const serviceHasCategory = (s: Service, category: string): boolean =>
  Array.isArray(s.category) ? s.category.includes(category) : s.category === category;

export const getServiceCategories = (slug: string): string[] => {
  const s = getServiceBySlug(slug);
  if (!s) return [];
  return Array.isArray(s.category) ? s.category : [s.category];
};

export const getAllCategories = (): Category[] => categoriesConfig;

export const getCategoryById = (id: string): Category | undefined =>
  categoriesConfig.find((c) => c.id === id);

export const getServiceCountByCategory = (category: string): number =>
  servicesConfig.filter((s) => serviceHasCategory(s, category)).length;

export const getFeaturedServices = (count = 6): Service[] =>
  servicesConfig.filter((s) => serviceHasCategory(s, "Core")).slice(0, count);

export const getRelatedServices = (slug: string, count = 3): Service[] => {
  const current = getServiceBySlug(slug);
  if (!current) return [];
  const currentCats = Array.isArray(current.category) ? current.category : [current.category];
  return servicesConfig
    .filter((s) => {
      if (s.slug === slug) return false;
      const cats = Array.isArray(s.category) ? s.category : [s.category];
      return cats.some((c) => currentCats.includes(c));
    })
    .slice(0, count);
};

// ─── SEARCH ───────────────────────────────────────────────────────────────────

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const searchServices = (query: string): Service[] => {
  const q = query.toLowerCase().trim();
  if (!q) return servicesConfig;

  const scored = servicesConfig.map((s) => {
    let score = 0;
    const t = s.title.toLowerCase();
    const d = s.description.toLowerCase();
    const sl = s.slug.toLowerCase();
    const cats = Array.isArray(s.category) ? s.category : [s.category];

    if (t === q) score += 1000;
    else if (t.startsWith(q)) score += 500;
    else if (new RegExp(`\\b${escapeRegex(q)}\\b`).test(t)) score += 300;
    else if (t.includes(q)) score += 150;

    if (s.keywords) {
      if (s.keywords.some((k) => k.toLowerCase() === q)) score += 800;
      else if (s.keywords.some((k) => k.toLowerCase().startsWith(q))) score += 200;
      else if (s.keywords.some((k) => new RegExp(`\\b${escapeRegex(q)}\\b`).test(k.toLowerCase()))) score += 100;
      else if (s.keywords.some((k) => k.toLowerCase().includes(q))) score += 50;
    }

    if (sl === q) score += 250;
    else if (sl.startsWith(q)) score += 120;
    else if (sl.includes(q)) score += 60;

    const catMatch = cats.some((c) => c.toLowerCase().includes(q));
    if (catMatch) score += cats.some((c) => c.toLowerCase() === q) ? 80 : 40;

    if (new RegExp(`\\b${escapeRegex(q)}\\b`).test(d)) score += 30;
    else if (d.includes(q)) score += 15;

    if (score > 0 && t.length < 20) score += 20;

    const qWords = q.split(/\s+/);
    if (qWords.length > 1) {
      if (qWords.every((w) => t.includes(w))) score += 100;
      if (s.keywords && qWords.every((w) => s.keywords!.some((k) => k.toLowerCase().includes(w)))) score += 50;
    }

    return { s, score };
  });

  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score !== a.score ? b.score - a.score : a.s.title.length - b.s.title.length)
    .map((x) => x.s);
};

export const getRelatedServicess = getRelatedServices; // alias kept for compat

export default {
  services: servicesConfig,
  categories: categoriesConfig,
  categoryIdMap,
  navServiceLinks,
  getAllServices,
  serviceHasCategory,
  getServicesByCategory,
  getServiceBySlug,
  searchServices,
  getAllCategories,
  getCategoryById,
  getServiceCountByCategory,
  getFeaturedServices,
  getRelatedServices,
};