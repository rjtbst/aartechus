import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "MERN Full Stack Development Course — MongoDB, Express, React, Node.js with Gen AI",
  description: "Master MERN Full Stack with Gen AI. 8-month program with placement support. Live classes, real projects, 60+ hiring drives.",
};

const course: CourseDetail = {
  title: "MERN Full Stack Development",
  subtitle: "MongoDB, Express, React & Node.js with Gen AI",
  badge: "HOT",
  badgeColor: "badge-purple",
  color: "from-blue-600 to-cyan-500",
  emoji: "🌐",
  duration: "8 Months",
  students: "9,500+",
  rating: 4.8,
  reviews: 2700,
  fee: "₹74,999",
  emi: "₹3,900/mo",
  level: "Beginner to Advanced",
  nextBatch: "April 28, 2026",
  overview:
    "The most comprehensive MERN stack program in India — built for the modern JavaScript ecosystem. You'll master MongoDB, Express.js, React, and Node.js, then layer in Generative AI integrations using the ChatGPT API and LangChain. Graduate with a portfolio of 5+ full-stack applications, strong system design skills, and the confidence to crack interviews at product companies.",
  whatYouLearn: [
    "JavaScript ES6+ fundamentals & TypeScript basics",
    "React.js: Hooks, Context API, Redux Toolkit",
    "Node.js & Express.js REST APIs",
    "MongoDB & Mongoose ORM",
    "Authentication: JWT, OAuth, sessions",
    "ChatGPT API & LangChain integration",
    "Redis caching & Socket.io real-time",
    "AWS S3, EC2, and deployment",
    "DSA: Arrays, Trees, Graphs, DP",
    "System design for frontend/backend",
  ],
  curriculum: [
    { module: "JavaScript & Web Foundations", topics: ["HTML5 & CSS3", "JavaScript ES6+", "DOM manipulation", "Async/Await & Promises", "TypeScript basics", "Git & GitHub"], weeks: "Weeks 1–4" },
    { module: "React.js", topics: ["Components & JSX", "Hooks (useState, useEffect, useRef)", "Context API", "Redux Toolkit", "React Router v6", "Tailwind CSS with React"], weeks: "Weeks 5–10" },
    { module: "Node.js & Express", topics: ["Node.js core modules", "Express routing & middleware", "REST API design", "Authentication (JWT/OAuth)", "File uploads", "Error handling & logging"], weeks: "Weeks 11–16" },
    { module: "MongoDB & Databases", topics: ["MongoDB CRUD operations", "Mongoose schemas & models", "Aggregation pipeline", "Redis caching", "Database indexing", "Data modeling patterns"], weeks: "Weeks 17–20" },
    { module: "Gen AI Integration", topics: ["ChatGPT API & prompt engineering", "LangChain with Node.js", "RAG pipeline build", "Vector databases (Pinecone)", "AI feature integration", "Streaming responses"], weeks: "Weeks 21–24" },
    { module: "DevOps & Real-Time", topics: ["Socket.io WebSockets", "Docker basics", "AWS EC2 & S3", "GitHub Actions CI/CD", "Nginx reverse proxy", "PM2 process management"], weeks: "Weeks 25–28" },
    { module: "DSA & Placement Prep", topics: ["Arrays, strings, hashing", "Trees & graphs", "Dynamic programming", "Mock interviews", "Resume & LinkedIn", "Hiring drive prep"], weeks: "Weeks 29–34" },
  ],
  projects: [
    { title: "Real-Time Chat Application", desc: "WhatsApp-style chat with Socket.io, rooms, media upload, and read receipts.", tech: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3"] },
    { title: "AI Content Generator SaaS", desc: "Multi-tenant SaaS with ChatGPT API for blog, social, and email content generation.", tech: ["Next.js", "LangChain", "OpenAI", "MongoDB", "Stripe"] },
    { title: "E-Commerce Platform", desc: "Full MERN store with cart, payments, admin dashboard, and product recommendations.", tech: ["React", "Node.js", "MongoDB", "Razorpay", "Redis"] },
    { title: "Social Media Dashboard", desc: "Instagram-like feed with posts, likes, comments, real-time notifications, and stories.", tech: ["React", "Express", "MongoDB", "Socket.io", "Cloudinary"] },
    { title: "Job Board with AI Matching", desc: "Job listing platform with AI-powered resume-to-job matching using embeddings.", tech: ["Next.js", "Node.js", "Pinecone", "OpenAI", "PostgreSQL"] },
  ],
  mentors: [
    { name: "Rahul Gupta", company: "Razorpay", role: "Senior Frontend Engineer", exp: "7 years" },
    { name: "Priya Nair", company: "Swiggy", role: "Full Stack Lead", exp: "8 years" },
    { name: "Ankur Sharma", company: "Paytm", role: "Node.js Architect", exp: "9 years" },
    { name: "Neha Mehta", company: "Flipkart", role: "React Developer", exp: "6 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "91%", color: "text-green-400" },
    { label: "Average Package", value: "₹11 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹28 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "8K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Should I choose Java Full Stack or MERN?", a: "MERN is ideal if you enjoy JavaScript end-to-end and want to work at startups or product companies. Java Full Stack is better for enterprise roles and backend-heavy positions. Our counselors can help you decide based on your goals." },
    { q: "Do I need prior JavaScript knowledge?", a: "No! We start from JavaScript fundamentals. If you can use a computer, you can join this course." },
    { q: "Is Gen AI really integrated into the curriculum?", a: "Yes — in weeks 21–24 you build real projects integrating ChatGPT API, LangChain, and vector databases. Not just theory." },
    { q: "What happens if I miss a live class?", a: "All sessions are recorded and available within 24 hours. You can rewatch them as many times as needed." },
  ],
};

export default function MERNPage() {
  return <CourseDetailPage course={course} />;
}