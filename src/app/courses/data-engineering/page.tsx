import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Data Engineering Course — Pipelines, Spark & Cloud",
  description: "Build scalable data pipelines with Apache Spark, Kafka, Airflow, and AWS. 6-month intermediate program with placement support.",
};

const course: CourseDetail = {
  title: "Data Engineering",
  subtitle: "Pipelines, Spark & Cloud",
  badge: "NEW",
  badgeColor: "badge-green",
  color: "from-yellow-600 to-amber-500",
  emoji: "⚙️",
  duration: "6 Months",
  students: "1,800+",
  rating: 4.8,
  reviews: 490,
  fee: "₹69,999",
  emi: "₹3,700/mo",
  level: "Intermediate (SQL & Python helpful)",
  nextBatch: "May 15, 2026",
  overview:
    "One of the highest-paying and fastest-growing roles in tech. This program takes you from SQL and Python fundamentals to building production-grade data pipelines using Apache Spark, Kafka, Airflow, dbt, and cloud platforms (AWS/GCP). Graduate with a portfolio of end-to-end pipeline projects and be ready for Data Engineer, Big Data Engineer, and Analytics Engineer roles.",
  whatYouLearn: [
    "SQL advanced: window functions, CTEs, optimization",
    "Python for data engineering (PySpark, pandas)",
    "Apache Spark: batch & streaming processing",
    "Apache Kafka for real-time data streaming",
    "Apache Airflow for pipeline orchestration",
    "dbt for data transformation",
    "AWS: S3, Glue, Redshift, Lambda",
    "GCP: BigQuery, Dataflow, Pub/Sub",
    "Data warehousing concepts & design",
    "Docker & Kubernetes for DE workloads",
  ],
  curriculum: [
    { module: "Foundations", topics: ["Advanced SQL", "Python for DE", "Linux & Bash", "Git & version control", "Data warehouse concepts", "OLAP vs OLTP"], weeks: "Weeks 1–4" },
    { module: "Apache Spark", topics: ["Spark architecture", "PySpark DataFrames", "Spark SQL", "Batch processing", "Spark Streaming", "Performance tuning"], weeks: "Weeks 5–9" },
    { module: "Apache Kafka", topics: ["Kafka architecture", "Producers & consumers", "Topics & partitions", "Kafka Streams", "Schema Registry (Avro)", "Real-time pipeline build"], weeks: "Weeks 10–13" },
    { module: "Orchestration & Transformation", topics: ["Airflow DAGs & operators", "Task dependencies", "dbt models & tests", "Incremental loads", "Data quality checks", "Lineage tracking"], weeks: "Weeks 14–17" },
    { module: "Cloud Platforms", topics: ["AWS S3 & Glue ETL", "Amazon Redshift", "GCP BigQuery", "Dataflow pipelines", "Cloud storage patterns", "Cost optimization"], weeks: "Weeks 18–21" },
    { module: "Capstone & Placement", topics: ["End-to-end pipeline project", "Architecture design doc", "Mock interviews", "System design for DE", "Resume & LinkedIn", "Hiring drive prep"], weeks: "Weeks 22–24" },
  ],
  projects: [
    { title: "Batch ETL Pipeline", desc: "End-to-end pipeline ingesting raw e-commerce data into Redshift via S3, Glue, and Airflow.", tech: ["Airflow", "AWS S3", "AWS Glue", "Redshift", "dbt"] },
    { title: "Real-Time Streaming Pipeline", desc: "Kafka + Spark Streaming pipeline processing clickstream events into a live dashboard.", tech: ["Kafka", "PySpark", "Cassandra", "Grafana", "Docker"] },
    { title: "BigQuery Data Warehouse", desc: "GCP-based data warehouse with Dataflow ingestion, dbt transformations, and Looker Studio dashboards.", tech: ["BigQuery", "Dataflow", "dbt", "Pub/Sub", "Looker Studio"] },
    { title: "Data Quality Framework", desc: "Great Expectations + Airflow pipeline with automated data quality checks and alerting.", tech: ["Great Expectations", "Airflow", "Slack API", "PostgreSQL"] },
  ],
  mentors: [
    { name: "Aditya Rao", company: "Amazon", role: "Senior Data Engineer", exp: "8 years" },
    { name: "Tanvi Kapoor", company: "Google", role: "Data Engineer", exp: "6 years" },
    { name: "Manish Verma", company: "Walmart Labs", role: "Big Data Engineer", exp: "9 years" },
    { name: "Shruti Pillai", company: "Swiggy", role: "Analytics Engineer", exp: "5 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "89%", color: "text-green-400" },
    { label: "Average Package", value: "₹14 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹26 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "1.4K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "What background do I need for Data Engineering?", a: "Basic SQL and Python knowledge is helpful but not mandatory. The first module covers all the foundations you need." },
    { q: "How is Data Engineering different from Data Science?", a: "Data Engineers build and maintain the pipelines that move and transform data. Data Scientists analyze that data to build models. Engineers focus on infrastructure; scientists focus on insight." },
    { q: "Which cloud platform does the course focus on?", a: "We cover both AWS and GCP, giving you hands-on experience with Redshift, Glue, BigQuery, and Dataflow — the most in-demand platforms." },
    { q: "What roles can I get after this course?", a: "Data Engineer, Big Data Engineer, Analytics Engineer, ETL Developer, Cloud Data Engineer, and Platform Engineer." },
  ],
};

export default function DataEngineeringPage() {
  return <CourseDetailPage course={course} />;
}