import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Data Analytics Course — Power BI, SQL & Python",
  description: "Learn Data Analytics with Python, SQL, Power BI and Tableau. 6-month beginner-friendly course with placement support.",
};

const course: CourseDetail = {
  title: "Data Analytics",
  subtitle: "Python, SQL, Power BI & Tableau",
  badge: "BEGINNER FRIENDLY",
  badgeColor: "badge-green",
  color: "from-green-600 to-emerald-500",
  emoji: "📊",
  duration: "6 Months",
  students: "7,000+",
  rating: 4.8,
  reviews: 1900,
  fee: "₹59,999",
  emi: "₹3,100/mo",
  level: "Absolute Beginner",
  nextBatch: "April 25, 2026",
  overview:
    "The most beginner-friendly data program in India — no coding background required. Master the complete data analytics workflow: from collecting and cleaning data with Python and SQL, to building stunning dashboards in Power BI and Tableau. Graduate ready for Data Analyst, Business Analyst, and BI Analyst roles at top companies.",
  whatYouLearn: [
    "Excel: advanced formulas, pivot tables & charts",
    "SQL: complex queries, joins, window functions",
    "Python: NumPy, Pandas for data wrangling",
    "Statistics & business metrics interpretation",
    "Data visualization best practices",
    "Power BI: reports, DAX, and publishing",
    "Tableau: dashboards and storytelling",
    "Business analytics & KPI frameworks",
    "A/B testing and experimentation",
    "Stakeholder presentation skills",
  ],
  curriculum: [
    { module: "Excel Mastery", topics: ["Formulas & Functions", "VLOOKUP / XLOOKUP", "Pivot Tables", "Charts & Visualization", "Data Validation", "Power Query"], weeks: "Weeks 1–3" },
    { module: "SQL for Analytics", topics: ["SELECT, WHERE, GROUP BY", "Joins (INNER, LEFT, FULL)", "Subqueries & CTEs", "Window functions", "Stored procedures", "Performance tuning"], weeks: "Weeks 4–8" },
    { module: "Python for Data", topics: ["Python fundamentals", "NumPy arrays", "Pandas DataFrames", "Data cleaning & EDA", "Matplotlib & Seaborn", "Working with APIs"], weeks: "Weeks 9–14" },
    { module: "Statistics & Analytics", topics: ["Descriptive statistics", "Probability distributions", "Hypothesis testing", "Correlation & regression", "A/B testing", "Business metrics (CAC, LTV, NPS)"], weeks: "Weeks 15–18" },
    { module: "Power BI", topics: ["Power BI Desktop setup", "Data modeling", "DAX formulas", "Report building", "Power BI Service", "Row-level security"], weeks: "Weeks 19–22" },
    { module: "Tableau & Storytelling", topics: ["Tableau Desktop", "Charts & dashboards", "Calculated fields", "Data blending", "Story points", "Tableau Public publishing"], weeks: "Weeks 23–24" },
  ],
  projects: [
    { title: "Sales Performance Dashboard", desc: "Interactive Power BI dashboard tracking revenue, growth, and regional KPIs.", tech: ["Power BI", "SQL", "Excel", "DAX"] },
    { title: "E-Commerce Customer Analysis", desc: "Python EDA to identify high-value customers and churn patterns.", tech: ["Python", "Pandas", "Matplotlib", "SQL", "Seaborn"] },
    { title: "HR Analytics Report", desc: "Tableau dashboard for HR team showing attrition, hiring trends, diversity metrics.", tech: ["Tableau", "SQL", "Excel"] },
    { title: "Financial Data Analysis", desc: "Python + SQL analysis of P&L data with automated monthly reports.", tech: ["Python", "MySQL", "Pandas", "Plotly"] },
  ],
  mentors: [
    { name: "Neha Agarwal", company: "Walmart", role: "Senior Data Analyst", exp: "6 years" },
    { name: "Shubham Tiwari", company: "Paytm", role: "BI Manager", exp: "8 years" },
    { name: "Priti Singh", company: "Amazon", role: "Business Analyst", exp: "5 years" },
    { name: "Rahul Das", company: "Flipkart", role: "Data Analyst Lead", exp: "7 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "90%", color: "text-green-400" },
    { label: "Average Package", value: "₹9 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹18 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "5.8K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "I have zero coding experience. Is this course for me?", a: "Absolutely! This course is designed for people with no coding background. We start from Excel basics and build up step by step." },
    { q: "How is data analytics different from data science?", a: "Analytics focuses on interpreting existing data to help business decisions (SQL, dashboards, reporting). Data science focuses on predictive modeling and building ML systems." },
    { q: "What tools will I be certified in?", a: "You'll receive certifications in Power BI, Tableau, and SQL — all recognized across the industry." },
    { q: "Can I switch to this course from another field?", a: "Yes! Many of our students come from HR, finance, marketing, and operations backgrounds and find massive career benefits." },
  ],
};

export default function DataAnalyticsPage() {
  return <CourseDetailPage course={course} />;
}
