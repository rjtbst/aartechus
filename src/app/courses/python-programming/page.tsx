import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Python Programming Course — Core to Advanced",
  description: "Master Python from fundamentals to advanced topics including OOP, APIs, automation, and Flask. 4-month beginner-friendly program with placement support.",
};

const course: CourseDetail = {
  title: "Python Programming",
  subtitle: "Core to Advanced",
  badge: "BEGINNER FRIENDLY",
  badgeColor: "badge-blue",
  color: "from-cyan-600 to-teal-500",
  emoji: "🐍",
  duration: "4 Months",
  students: "3,000+",
  rating: 4.8,
  reviews: 850,
  fee: "₹39,999",
  emi: "₹2,100/mo",
  level: "Absolute Beginner",
  nextBatch: "May 5, 2026",
  overview:
    "The most beginner-friendly Python course in India — no prior coding experience needed. Master Python from the ground up: core syntax, object-oriented programming, file handling, APIs, automation scripts, and Flask web development. Graduate ready for roles in backend development, automation engineering, data engineering, and scripting.",
  whatYouLearn: [
    "Python fundamentals: variables, loops, functions",
    "Object-Oriented Programming (OOP)",
    "File handling & exception management",
    "Working with APIs (requests, JSON)",
    "Automation scripts & task scheduling",
    "Flask web framework basics",
    "NumPy & Pandas for data handling",
    "Database interaction with SQLite / MySQL",
    "Unit testing with pytest",
    "Git & GitHub workflow",
  ],
  curriculum: [
    { module: "Python Fundamentals", topics: ["Variables & data types", "Conditionals & loops", "Functions & scope", "Lists, tuples, dicts", "String manipulation", "Input/output basics"], weeks: "Weeks 1–3" },
    { module: "Object-Oriented Programming", topics: ["Classes & objects", "Inheritance & polymorphism", "Encapsulation & abstraction", "Magic/dunder methods", "Decorators", "Modules & packages"], weeks: "Weeks 4–6" },
    { module: "File Handling & Error Management", topics: ["Reading/writing files", "CSV & JSON processing", "Exception handling", "Context managers", "Logging", "Debugging techniques"], weeks: "Weeks 7–8" },
    { module: "APIs & Automation", topics: ["HTTP & REST basics", "requests library", "Web scraping with BeautifulSoup", "Task automation scripts", "Scheduled jobs (cron)", "Email & Slack automation"], weeks: "Weeks 9–11" },
    { module: "Flask Web Development", topics: ["Flask routing & templates", "Forms & validation", "SQLite with Flask", "REST API with Flask", "Authentication basics", "Deployment on Heroku / Railway"], weeks: "Weeks 12–14" },
    { module: "Data & Testing", topics: ["NumPy arrays", "Pandas DataFrames", "Matplotlib basics", "pytest unit testing", "Virtual environments", "Git workflow"], weeks: "Weeks 15–16" },
  ],
  projects: [
    { title: "Task Automation Bot", desc: "Python bot that automates file organization, email notifications, and daily reports.", tech: ["Python", "Schedule", "smtplib", "pathlib"] },
    { title: "REST API with Flask", desc: "Full CRUD API for a todo application with authentication and SQLite database.", tech: ["Flask", "SQLite", "JWT", "pytest"] },
    { title: "Web Scraper & Dashboard", desc: "Scrapes job listings from multiple sites and visualizes trends in a dashboard.", tech: ["BeautifulSoup", "Pandas", "Matplotlib", "Flask"] },
    { title: "CLI Data Analysis Tool", desc: "Command-line tool that reads CSV data, performs analysis, and generates reports.", tech: ["Python", "Pandas", "argparse", "Rich"] },
  ],
  mentors: [
    { name: "Arjun Mehta", company: "Flipkart", role: "Backend Engineer", exp: "6 years" },
    { name: "Kavya Iyer", company: "Razorpay", role: "Python Developer", exp: "5 years" },
    { name: "Suresh Nair", company: "Freshworks", role: "Senior SDE", exp: "7 years" },
    { name: "Ritika Sharma", company: "Swiggy", role: "Automation Engineer", exp: "4 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "85%", color: "text-green-400" },
    { label: "Average Package", value: "₹7 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹14 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "2.2K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Do I need any prior coding experience?", a: "No! This course starts from absolute zero. If you can use a computer, you can join." },
    { q: "How is this different from free Python tutorials online?", a: "You get live classes, 1:1 mentorship, doubt sessions, real project reviews, and active placement support — not just video lectures." },
    { q: "What jobs can I get after this course?", a: "Python Developer, Backend Engineer, Automation Engineer, Junior Data Analyst, QA Automation Engineer, and more." },
    { q: "Can I combine this with Data Science later?", a: "Absolutely. Python Programming is the perfect foundation to then move into our Data Science & AI or Data Analytics courses." },
  ],
};

export default function PythonPage() {
  return <CourseDetailPage course={course} />;
}