import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Data Engineer + AI Bootcamp — Smart Pipelines with AI & ML Integration",
  description: "Build production-grade data pipelines with ML integration using Spark, Airflow, AWS, and MLOps. Salary range $130K–$170K.",
};

const course: CourseDetail = {
  title: "Data Engineer + AI Bootcamp",
  subtitle: "Build Smart Data Pipelines with AI & ML Integration",
  badge: "NEW",
  badgeColor: "badge-green",
  color: "from-amber-500 to-orange-500",
  emoji: "⚙️",
  duration: "6 Months",
  students: "4,800+",
  rating: 4.8,
  reviews: 980,
  fee: "$130,000",
  emi: "$2,600/mo",
  level: "Intermediate",
  nextBatch: "May 15, 2026",
  overview:
    "The Data Engineer + AI Bootcamp takes you from data pipeline fundamentals all the way to building AI/ML-integrated production systems. You'll master SQL, Apache Spark, Airflow, and cloud data tools on AWS and Azure — then layer in ML pipeline integration, feature engineering, and MLOps fundamentals. Graduate ready for top-tier Data Engineer and ML Platform Engineer roles at US companies.",
  whatYouLearn: [
    "SQL for data engineering & analytics",
    "Apache Spark for large-scale processing",
    "Apache Airflow for pipeline orchestration",
    "AWS & Azure data platform tools",
    "Data warehousing (Snowflake, Redshift)",
    "ML pipeline integration (data → model → deployment)",
    "Feature engineering for ML systems",
    "Real-time AI data pipelines with Kafka",
    "MLOps fundamentals & model monitoring",
    "End-to-end prediction system deployment",
  ],
  curriculum: [
    {
      module: "Data Engineering Foundations",
      topics: ["SQL deep dive", "Data modeling & normalization", "ETL fundamentals", "Data warehouse concepts", "Snowflake & Redshift basics", "dbt for transformations"],
      weeks: "Weeks 1–3",
    },
    {
      module: "Apache Spark & Batch Processing",
      topics: ["Spark architecture", "PySpark fundamentals", "Spark SQL & DataFrames", "Spark optimization", "Delta Lake / Iceberg", "Large-scale batch jobs"],
      weeks: "Weeks 4–7",
    },
    {
      module: "Orchestration & Real-Time Pipelines",
      topics: ["Apache Airflow DAGs", "Task dependencies & scheduling", "Kafka for streaming", "Flink basics", "Real-time pipeline design", "Pipeline monitoring & alerting"],
      weeks: "Weeks 8–10",
    },
    {
      module: "Cloud Data Platforms",
      topics: ["AWS Glue & S3", "Azure Data Factory", "Databricks on cloud", "Cloud cost optimization", "Data lake architecture", "IAM & security best practices"],
      weeks: "Weeks 11–13",
    },
    {
      module: "AI & ML Pipeline Integration",
      topics: ["ML pipeline architecture", "Feature stores (Feast, Tecton)", "Model serving & inference", "MLflow experiment tracking", "Real-time AI pipelines", "Monitoring ML models in production"],
      weeks: "Weeks 14–18",
    },
    {
      module: "MLOps & Capstone",
      topics: ["MLOps principles & tools", "CI/CD for ML pipelines", "End-to-end prediction system", "Resume & portfolio prep", "Mock technical interviews", "System design for data engineers"],
      weeks: "Weeks 19–24",
    },
  ],
  projects: [
    {
      title: "End-to-End ML Pipeline",
      desc: "Full pipeline from raw data ingestion through feature engineering to model training, serving, and real-time prediction APIs.",
      tech: ["Spark", "Airflow", "MLflow", "AWS S3", "FastAPI"],
    },
    {
      title: "Real-Time Streaming Analytics",
      desc: "Kafka-powered streaming pipeline processing live event data with real-time dashboards and anomaly detection.",
      tech: ["Kafka", "Spark Streaming", "Redshift", "Grafana", "AWS"],
    },
    {
      title: "Cloud Data Warehouse",
      desc: "Multi-source ETL pipeline loading into Snowflake with dbt transformations and automated data quality checks.",
      tech: ["dbt", "Snowflake", "Airflow", "Python", "GitHub Actions"],
    },
    {
      title: "Feature Store for ML",
      desc: "Production feature store implementation serving ML models with low-latency online features and batch offline features.",
      tech: ["Feast", "Redis", "Spark", "Kubernetes", "Azure"],
    },
  ],
  mentors: [
    { name: "James Watkins", company: "Netflix", role: "Senior Data Engineer", exp: "10 years" },
    { name: "Priya Sharma", company: "Uber", role: "ML Platform Engineer", exp: "8 years" },
    { name: "Marcus Johnson", company: "Airbnb", role: "Data Engineering Lead", exp: "9 years" },
    { name: "Linda Park", company: "Databricks", role: "Solutions Architect", exp: "7 years" },
  ],
  placementStats: [
    { label: "Avg Salary Range", value: "$130K–$170K", color: "text-green-400" },
    { label: "Top Employers", value: "Netflix, Uber", color: "text-purple-400" },
    { label: "Highest Offer", value: "$170K", color: "text-orange-400" },
    { label: "Students Placed", value: "3.2K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "What background do I need for this bootcamp?", a: "Basic SQL and Python familiarity is helpful but not required. We cover all foundational concepts before moving to advanced topics." },
    { q: "What cloud platforms will I learn?", a: "You'll get hands-on experience with AWS (Glue, S3, Redshift) and Azure (Data Factory, Databricks). Projects are deployed on real cloud environments." },
    { q: "How is this different from a pure data engineering course?", a: "We go beyond pipelines — you'll integrate ML models into your pipelines, implement feature stores, and learn MLOps so your pipelines support production AI systems." },
    { q: "What roles does this prepare me for?", a: "Data Engineer, ML Platform Engineer, Analytics Engineer, and Data Infrastructure Engineer at US tech companies." },
  ],
};

export default function DataEngineerAIPage() {
  return <CourseDetailPage course={course} />;
}