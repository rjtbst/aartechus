import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Java Developer + AI Bootcamp — Enterprise Apps with AI Capabilities",
  description: "Master Java, Spring Boot, Microservices and AI API integration. Build intelligent enterprise applications. Salary range $140K–$180K.",
};

const course: CourseDetail = {
  title: "Java Developer + AI Bootcamp",
  subtitle: "Build Enterprise Applications with AI Capabilities",
  badge: "BESTSELLER",
  badgeColor: "badge-orange",
  color: "from-violet-600 to-indigo-600",
  emoji: "☕",
  duration: "8 Months",
  students: "12,000+",
  rating: 4.9,
  reviews: 3200,
  // fee: "$140,000",
  // emi: "$2,800/mo",
  level: "Beginner to Advanced",
  nextBatch: "May 10, 2026",
  overview:
    "The Java Developer + AI Bootcamp trains you to build enterprise-grade applications with integrated AI capabilities. You'll master Java, Spring Boot, and Microservices — then go further by integrating OpenAI APIs, building intelligent REST APIs, and deploying AI-powered backends. Graduate ready for high-demand Java Developer and AI Integration Engineer roles at leading US tech companies.",
  whatYouLearn: [
    "Core Java & advanced OOP principles",
    "Spring Boot & Spring Security",
    "Microservices architecture & Docker",
    "REST API design & AI API integration",
    "OpenAI & third-party AI API consumption",
    "Build intelligent chatbot APIs in Java",
    "AI-powered log analysis & monitoring",
    "Smart recommendation engine basics",
    "Database design & backend architecture",
    "CI/CD pipelines & cloud deployment (AWS)",
  ],
  curriculum: [
    {
      module: "Java Foundations",
      topics: ["Core Java & OOP", "Collections & Generics", "Exception handling", "Java 17+ features", "Build tools (Maven/Gradle)", "Unit testing with JUnit"],
      weeks: "Weeks 1–3",
    },
    {
      module: "Spring Boot & REST APIs",
      topics: ["Spring Boot setup", "REST API design", "Spring Data JPA", "Spring Security & JWT", "API versioning", "Swagger/OpenAPI docs"],
      weeks: "Weeks 4–7",
    },
    {
      module: "Microservices Architecture",
      topics: ["Microservices principles", "Service discovery (Eureka)", "API Gateway (Spring Cloud)", "Docker & containerization", "Inter-service communication", "Circuit breaker pattern"],
      weeks: "Weeks 8–11",
    },
    {
      module: "AI API Integration",
      topics: ["OpenAI API integration", "Building chatbot APIs in Java", "AI-powered REST endpoints", "Prompt engineering basics", "Streaming responses", "AI response caching strategies"],
      weeks: "Weeks 12–15",
    },
    {
      module: "Advanced AI Features",
      topics: ["AI-powered log analysis", "Smart recommendation engines", "Intelligent monitoring systems", "AI response parsing & validation", "Rate limiting AI APIs", "Cost optimization strategies"],
      weeks: "Weeks 16–18",
    },
    {
      module: "Capstone & Career Prep",
      topics: ["AI-powered customer support backend", "AWS deployment", "Resume & LinkedIn optimization", "Mock technical interviews", "System design sessions", "Hiring drive prep"],
      weeks: "Weeks 19–24",
    },
  ],
  projects: [
    {
      title: "AI Customer Support Backend",
      desc: "Build a full Java Spring Boot backend with OpenAI integration serving intelligent chatbot responses via REST APIs.",
      tech: ["Java", "Spring Boot", "OpenAI API", "PostgreSQL", "Docker"],
    },
    {
      title: "Smart Recommendation Engine",
      desc: "Microservice that uses AI APIs to deliver personalized product recommendations based on user behavior.",
      tech: ["Spring Boot", "Microservices", "AI API", "Redis", "MySQL"],
    },
    {
      title: "AI Log Analysis System",
      desc: "Intelligent log monitoring service that detects anomalies and generates AI-powered incident summaries.",
      tech: ["Java", "Spring Boot", "OpenAI", "Elasticsearch", "Grafana"],
    },
    {
      title: "Enterprise API Gateway",
      desc: "Full microservices setup with API gateway, service discovery, and AI-powered request routing.",
      tech: ["Spring Cloud", "Eureka", "Docker", "AWS ECS", "Kubernetes"],
    },
  ],
  mentors: [
    { name: "David Chen", company: "Google", role: "Senior Software Engineer", exp: "10 years" },
    { name: "Sarah Mitchell", company: "Amazon", role: "Backend Tech Lead", exp: "9 years" },
    { name: "Raj Patel", company: "Microsoft", role: "Principal Engineer", exp: "11 years" },
    { name: "Emily Torres", company: "Salesforce", role: "Java Architect", exp: "8 years" },
  ],
  placementStats: [
    { label: "Avg Salary Range", value: "$140K–$180K", color: "text-green-400" },
    { label: "Top Employers", value: "Google, Amazon", color: "text-purple-400" },
    { label: "Highest Offer", value: "$180K", color: "text-orange-400" },
    { label: "Students Trained", value: "1K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Do I need prior Java experience?", a: "No — we start from the very basics of Java and build up to advanced enterprise and AI topics. Beginners are welcome." },
    { q: "What AI tools will I work with?", a: "You'll integrate OpenAI APIs, build chatbot endpoints in Java, and work with AI-powered monitoring and recommendation systems." },
    { q: "Is this course US job market focused?", a: "Yes — the curriculum, projects, and mock interviews are all tailored to US tech company expectations and interview formats." },
    { q: "What roles can I target after this bootcamp?", a: "Java Developer, Backend Engineer, AI Integration Engineer, and Senior Software Engineer roles at US tech companies." },
  ],
};

export default function JavaDeveloperAIPage() {
  return <CourseDetailPage course={course} />;
}