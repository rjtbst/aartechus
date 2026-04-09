import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Full Stack Development Course — Java & MERN with Gen AI",
  description: "Master Java/MERN Full Stack with GenAI. 8-month program with placement support. Live classes, real projects, 60+ hiring drives.",
};

const course: CourseDetail = {
  title: "Full Stack Development",
  subtitle: "Java / MERN with Generative AI",
  badge: "BESTSELLER",
  badgeColor: "badge-orange",
  color: "from-purple-600 to-primary",
  emoji: "💻",
  duration: "8 Months",
  students: "21,500+",
  rating: 4.9,
  reviews: 5900,
  fee: "₹79,999",
  emi: "₹4,200/mo",
  level: "Beginner to Advanced",
  nextBatch: "April 20, 2026",
  overview:
    "The most comprehensive Full Stack Development program in India. You'll master either Java Spring Boot + React or the MERN stack (MongoDB, Express, React, Node.js), plus integrate Generative AI features using OpenAI, Gemini, and Langchain. Graduate with a portfolio of 5+ production-ready apps and strong DSA skills for top tech company interviews.",
  whatYouLearn: [
    "Core Java / JavaScript fundamentals",
    "Frontend: React.js with Hooks & Redux",
    "Backend: Spring Boot / Node.js APIs",
    "Databases: MySQL, MongoDB, Redis",
    "Gen AI: OpenAI, Langchain, RAG systems",
    "DevOps: Docker, AWS EC2/S3, CI/CD",
    "DSA: Arrays, Trees, Graphs, DP",
    "System Design: HLD & LLD patterns",
    "Git, GitHub & Agile workflows",
    "Technical interview preparation",
  ],
  curriculum: [
    { module: "Programming Foundations", topics: ["Java / JS Basics", "OOP Concepts", "Data Structures", "Algorithms", "Problem Solving"], weeks: "Weeks 1–4" },
    { module: "Frontend Development", topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Redux Toolkit", "Tailwind CSS", "TypeScript basics"], weeks: "Weeks 5–10" },
    { module: "Backend Development", topics: ["Node.js / Spring Boot", "REST API design", "Authentication (JWT/OAuth)", "Microservices basics", "Error handling", "Testing"], weeks: "Weeks 11–18" },
    { module: "Databases & Cloud", topics: ["MySQL deep dive", "MongoDB Atlas", "Redis caching", "AWS S3 & EC2", "Database optimization", "Migrations"], weeks: "Weeks 19–24" },
    { module: "Gen AI Integration", topics: ["OpenAI API", "Prompt Engineering", "Langchain", "RAG pipelines", "Vector databases", "AI chatbot build"], weeks: "Weeks 25–28" },
    { module: "DevOps & Deployment", topics: ["Docker & Compose", "GitHub Actions CI/CD", "Nginx reverse proxy", "Monitoring (Prometheus)", "Cloud deployment", "SSL setup"], weeks: "Weeks 29–30" },
    { module: "Capstone & Placement", topics: ["Full project build", "Code reviews", "Mock interviews", "Resume & LinkedIn", "Hiring drive prep", "Offer negotiation"], weeks: "Weeks 31–34" },
  ],
  projects: [
    { title: "E-Commerce Platform", desc: "Full-stack store with payments, cart, auth and admin panel.", tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"] },
    { title: "AI Customer Support Bot", desc: "Chatbot with RAG pipeline pulling from docs using OpenAI.", tech: ["Langchain", "OpenAI", "Pinecone", "Next.js", "FastAPI"] },
    { title: "Real-Time Chat App", desc: "WebSocket-based messaging with rooms, media upload, notifications.", tech: ["Socket.io", "React", "Node.js", "AWS S3", "MySQL"] },
    { title: "Job Board Platform", desc: "Full CRUD job listing platform with search, filters and applicant tracking.", tech: ["Spring Boot", "React", "PostgreSQL", "Docker"] },
    { title: "Social Media Dashboard", desc: "Analytics dashboard with charts, user activity and AI post suggestions.", tech: ["React", "D3.js", "Node.js", "MongoDB", "OpenAI"] },
  ],
  mentors: [
    { name: "Arjun Mehta", company: "Amazon", role: "Senior SDE", exp: "8 years" },
    { name: "Sneha Patel", company: "Salesforce", role: "Staff Engineer", exp: "10 years" },
    { name: "Rohit Kapoor", company: "Flipkart", role: "Tech Lead", exp: "7 years" },
    { name: "Divya Sharma", company: "Microsoft", role: "SDE-II", exp: "6 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "92%", color: "text-green-400" },
    { label: "Average Package", value: "₹12 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹30 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "18K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Do I need prior coding experience?", a: "No! We start from absolute zero. If you can use a computer, you can join this course." },
    { q: "Java or MERN — which should I choose?", a: "Java Full Stack is great for enterprise & backend-heavy roles. MERN is excellent for startups and product companies. Our counselors can help you decide." },
    { q: "Is placement guaranteed?", a: "We provide comprehensive placement assistance including 60+ hiring drives per month. Over 92% of our graduates are placed within 3 months of completion." },
    { q: "What happens if I miss a live class?", a: "All sessions are recorded and available within 24 hours. You won't miss a thing." },
  ],
};

export default function FullStackPage() {
  return <CourseDetailPage course={course} />;
}
