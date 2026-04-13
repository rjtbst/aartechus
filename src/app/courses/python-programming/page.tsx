import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Python Programming — Core to Advanced",
  description: "Master Python from fundamentals to advanced topics including OOP, APIs, automation, and Flask. Salary range $70K–$110K.",
};

const course: CourseDetail = {
  title: "Python Programming",
  subtitle: "Core to Advanced",
  badge: "",
  badgeColor: "",
  color: "from-teal-500 to-cyan-600",
  emoji: "🐍",
  duration: "4 Months",
  students: "3,000+",
  rating: 4.8,
  reviews: 850,
  // fee: "$70,000",
  // emi: "$1,400/mo",
  level: "Beginner to Intermediate",
  nextBatch: "May 5, 2026",
  overview:
    "Python Programming is your entry point into the tech industry. This beginner-friendly program takes you from zero knowledge to building real-world Python applications — covering OOP, APIs, automation scripts, and Flask web development. Whether you're pivoting into tech or building a foundation for an AI/data science role, this is the perfect starting point.",
  whatYouLearn: [
    "Python syntax, data types & control flow",
    "Functions, modules & packages",
    "Object-oriented programming (OOP)",
    "File I/O & exception handling",
    "Working with APIs & JSON",
    "Automation scripts & task scheduling",
    "NumPy & Pandas fundamentals",
    "Flask web framework & REST APIs",
    "Database integration (SQLite, PostgreSQL)",
    "Testing with pytest & debugging techniques",
  ],
  curriculum: [
    {
      module: "Python Fundamentals",
      topics: ["Variables, data types, operators", "Control flow (if/else, loops)", "Functions & scope", "Lists, tuples, dicts, sets", "String manipulation", "Modules & packages"],
      weeks: "Weeks 1–3",
    },
    {
      module: "Object-Oriented Python",
      topics: ["Classes & objects", "Inheritance & polymorphism", "Encapsulation & abstraction", "Dunder methods", "Decorators", "Generators & iterators"],
      weeks: "Weeks 4–6",
    },
    {
      module: "Python for Automation & APIs",
      topics: ["File & directory automation", "Web scraping with BeautifulSoup", "Requests library & REST APIs", "JSON & XML parsing", "Task scheduling (cron)", "Email & notification automation"],
      weeks: "Weeks 7–9",
    },
    {
      module: "Data Fundamentals",
      topics: ["NumPy arrays & operations", "Pandas DataFrames", "Data cleaning & manipulation", "Matplotlib for visualization", "CSV & Excel processing", "Database queries with SQLAlchemy"],
      weeks: "Weeks 10–12",
    },
    {
      module: "Flask & Web Development",
      topics: ["Flask setup & routing", "Templates (Jinja2)", "Forms & user authentication", "REST API with Flask", "SQLite & PostgreSQL integration", "Deploying Flask to AWS"],
      weeks: "Weeks 13–14",
    },
    {
      module: "Projects & Career Prep",
      topics: ["Automation toolkit project", "REST API project", "Resume & LinkedIn", "Python interview prep", "Coding challenge practice", "Portfolio on GitHub"],
      weeks: "Weeks 15–16",
    },
  ],
  projects: [
    {
      title: "Automation Toolkit",
      desc: "A suite of Python scripts for file management, web scraping, email notifications, and report generation.",
      tech: ["Python", "BeautifulSoup", "SMTP", "Pandas", "Schedule"],
    },
    {
      title: "REST API with Flask",
      desc: "Full CRUD REST API with user authentication, PostgreSQL backend, and comprehensive pytest test suite.",
      tech: ["Flask", "PostgreSQL", "SQLAlchemy", "JWT", "pytest"],
    },
    {
      title: "Data Dashboard",
      desc: "Python data pipeline that fetches, cleans, and visualizes business data from multiple sources.",
      tech: ["Pandas", "NumPy", "Matplotlib", "APIs", "CSV"],
    },
  ],
  mentors: [
    { name: "Kevin Brooks", company: "Twilio", role: "Python Developer", exp: "7 years" },
    { name: "Amy Chen", company: "GitHub", role: "Software Engineer", exp: "6 years" },
    { name: "Daniel Rivera", company: "Cloudflare", role: "Backend Developer", exp: "8 years" },
  ],
  placementStats: [
    { label: "Avg Salary Range", value: "$70K–$110K", color: "text-green-400" },
    { label: "Top Employers", value: "Twilio, Cloudflare", color: "text-purple-400" },
    { label: "Highest Offer", value: "$110K", color: "text-orange-400" },
    { label: "Students Placed", value: "2.1K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Is this course truly for beginners?", a: "Yes — no prior coding experience needed. We start from absolute basics and progress to building real applications you can show in interviews." },
    { q: "Can this course lead to a career in AI/Data Science?", a: "Absolutely. Python is the foundation of all our AI and Data Science programs. Completing this course makes you ready to enroll in our AI Developer Bootcamp or Data Scientist program." },
    { q: "What can I build by the end of this course?", a: "You'll build automation scripts, REST APIs, data pipelines, and a Flask web application — all deployable and portfolio-ready." },
    { q: "What jobs can I get with Python skills?", a: "Junior Python Developer, Backend Developer, Automation Engineer, and QA Automation Engineer — with a clear pathway to Data Science and AI roles." },
  ],
};

export default function PythonProgrammingPage() {
  return <CourseDetailPage course={course} />;
}