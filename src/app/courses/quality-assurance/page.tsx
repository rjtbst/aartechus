import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Quality Assurance (QA) Course — Manual & Automation Testing",
  description: "Learn manual and automation testing with Selenium, Cypress, Postman, and JIRA. 5-month program with placement support.",
};

const course: CourseDetail = {
  title: "Quality Assurance (QA)",
  subtitle: "Manual & Automation Testing",
  badge: "IN DEMAND",
  badgeColor: "badge-purple",
  color: "from-pink-600 to-rose-500",
  emoji: "🧪",
  duration: "5 Months",
  students: "2,200+",
  rating: 4.7,
  reviews: 610,
  // fee: "₹44,999",
  // emi: "₹2,400/mo",
  level: "Beginner to Advanced",
  nextBatch: "May 10, 2026",
  overview:
    "A comprehensive QA program covering both manual and automation testing — the two pillars every company needs. You'll master industry-standard tools like Selenium, Cypress, Postman, and JIRA, work on real-world testing projects, and graduate job-ready for QA Engineer, SDET, and Test Automation Engineer roles at leading companies.",
  whatYouLearn: [
    "Software testing lifecycle (STLC) & methodologies",
    "Manual testing: test cases, test plans, bug reporting",
    "Agile testing & JIRA for test management",
    "Selenium WebDriver with Java/Python",
    "Cypress for modern web automation",
    "API testing with Postman & REST Assured",
    "Performance testing with JMeter",
    "CI/CD integration for automated tests",
    "Mobile testing with Appium",
    "SQL for database testing",
  ],
  curriculum: [
    { module: "Software Testing Foundations", topics: ["SDLC & STLC", "Testing types & levels", "Test case design", "Bug lifecycle & reporting", "Agile/Scrum basics", "JIRA for QA"], weeks: "Weeks 1–3" },
    { module: "Manual Testing", topics: ["Functional & non-functional testing", "Black-box & white-box", "Boundary value analysis", "Equivalence partitioning", "Regression & smoke testing", "Test documentation"], weeks: "Weeks 4–6" },
    { module: "Selenium Automation", topics: ["Selenium WebDriver setup", "Locators & XPath", "Page Object Model (POM)", "TestNG framework", "Data-driven testing", "Cross-browser testing"], weeks: "Weeks 7–11" },
    { module: "API & Performance Testing", topics: ["REST API fundamentals", "Postman collections & environments", "REST Assured with Java", "JMeter load testing", "Performance metrics", "API test automation"], weeks: "Weeks 12–14" },
    { module: "Cypress & Modern Testing", topics: ["Cypress setup & architecture", "Component & E2E testing", "Cypress fixtures & plugins", "GitHub Actions CI integration", "Allure test reports", "Mobile testing with Appium"], weeks: "Weeks 15–17" },
    { module: "Capstone & Placement Prep", topics: ["Full project test suite", "Bug bash exercise", "Resume & LinkedIn", "Mock interviews", "Hiring drive prep", "ISTQB exam guidance"], weeks: "Weeks 18–20" },
  ],
  projects: [
    { title: "E-Commerce Test Suite", desc: "Complete Selenium + TestNG automation suite for an e-commerce app covering login, cart, and checkout flows.", tech: ["Selenium", "Java", "TestNG", "Maven", "JIRA"] },
    { title: "API Test Framework", desc: "Postman & REST Assured test collection for a REST API with CI/CD pipeline integration.", tech: ["Postman", "REST Assured", "GitHub Actions", "Newman"] },
    { title: "Cypress Web App Tests", desc: "Full Cypress E2E test suite for a React app with Allure reporting and GitHub Actions.", tech: ["Cypress", "JavaScript", "Allure", "GitHub Actions"] },
    { title: "Performance Test Report", desc: "JMeter load test for a login API under 1000 concurrent users with full analysis report.", tech: ["JMeter", "BlazeMeter", "Grafana"] },
  ],
  mentors: [
    { name: "Pradeep Singh", company: "Infosys", role: "QA Lead", exp: "9 years" },
    { name: "Meena Joshi", company: "Capgemini", role: "SDET", exp: "7 years" },
    { name: "Ravi Kumar", company: "TCS", role: "Test Automation Engineer", exp: "6 years" },
    { name: "Sonal Gupta", company: "Wipro", role: "QA Manager", exp: "8 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "87%", color: "text-green-400" },
    { label: "Average Package", value: "₹8 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹16 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "1.8K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Do I need a coding background for QA?", a: "No, but basic computer literacy helps. We teach all the programming concepts you need for automation testing from scratch." },
    { q: "Is manual testing still relevant in 2026?", a: "Yes — all companies need both manual and automation testers. Manual testing skills are essential for exploratory testing and test strategy." },
    { q: "What certifications will I be prepared for?", a: "ISTQB Foundation Level and Selenium certification — both are highly recognized by employers." },
    { q: "What roles can I get after this course?", a: "QA Engineer, Manual Tester, Test Automation Engineer, SDET (Software Development Engineer in Test), API Tester, and Performance Tester." },
  ],
};

export default function QAPage() {
  return <CourseDetailPage course={course} />;
}