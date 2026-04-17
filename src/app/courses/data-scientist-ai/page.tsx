import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Data Scientist + AI Bootcamp — Combine Data Science with Modern AI",
  description: "Master ML, NLP, and Generative AI for data insights and AI-powered analytics. Salary range $130K–$175K.",
};

const course: CourseDetail = {
  title: "Data Scientist + AI Bootcamp",
  subtitle: "Combine Data Science with Modern AI Techniques",
  badge: "",
  badgeColor: "",
  color: "from-blue-500 to-cyan-500",
  emoji: "📊",
  duration: "8 Months",
  students: "5,500+",
  rating: 4.8,
  reviews: 1400,
  // fee: "$150,000",
  // emi: "$3,000/mo",
  level: "Beginner to Advanced",
  nextBatch: "May 18, 2026",
  overview:
    "The Data Scientist + AI Bootcamp combines rigorous data science fundamentals with cutting-edge AI techniques. You'll master Python, statistics, and machine learning — then expand into NLP, AI-driven forecasting, and Generative AI for data insights. Build a portfolio of real-world AI analytics projects and graduate ready for Data Scientist and AI Specialist roles at US companies.",
  whatYouLearn: [
    "Python for data science (NumPy, Pandas, Matplotlib)",
    "Statistics & probability for ML",
    "Supervised & unsupervised machine learning",
    "Advanced ML models (XGBoost, LightGBM, ensemble methods)",
    "Deep learning with TensorFlow & PyTorch",
    "Natural language processing (NLP)",
    "AI-driven predictions & forecasting",
    "GenAI for data insights & report generation",
    "Data visualization & storytelling",
    "Model evaluation, deployment & monitoring",
  ],
  curriculum: [
    {
      module: "Python & Statistics for Data Science",
      topics: ["Python data stack (NumPy, Pandas)", "Descriptive & inferential statistics", "Probability & distributions", "Hypothesis testing", "A/B testing", "Data cleaning & preprocessing"],
      weeks: "Weeks 1–4",
    },
    {
      module: "Machine Learning Fundamentals",
      topics: ["Supervised learning (regression, classification)", "Unsupervised learning (clustering, PCA)", "Feature engineering & selection", "Cross-validation & hyperparameter tuning", "XGBoost & LightGBM", "Scikit-learn pipelines"],
      weeks: "Weeks 5–9",
    },
    {
      module: "Deep Learning",
      topics: ["Neural network fundamentals", "TensorFlow & Keras", "CNNs for computer vision", "RNNs & LSTMs", "Transfer learning", "PyTorch basics"],
      weeks: "Weeks 10–13",
    },
    {
      module: "NLP & Text Analytics",
      topics: ["Text preprocessing & tokenization", "Sentiment analysis", "Named entity recognition", "Transformer models (BERT, RoBERTa)", "Topic modeling", "NLP project: customer review analytics"],
      weeks: "Weeks 14–16",
    },
    {
      module: "AI Add-Ons: Advanced GenAI",
      topics: ["LLMs for data insights", "AI-driven forecasting systems", "GenAI report & summary generation", "Retrieval-augmented analytics", "AI dashboards & automated insights", "Responsible AI & bias detection"],
      weeks: "Weeks 17–20",
    },
    {
      module: "Capstone & Career Prep",
      topics: ["AI-powered business analytics dashboard", "Model deployment on AWS", "Portfolio & GitHub polish", "Data science interview prep", "Case study practice", "Mock technical interviews"],
      weeks: "Weeks 21–24",
    },
  ],
  projects: [
    {
      title: "AI-Powered Business Analytics Dashboard",
      desc: "End-to-end analytics platform with ML-driven forecasting, automated AI insights, and an interactive visualization layer.",
      tech: ["Python", "scikit-learn", "OpenAI API", "Streamlit", "AWS"],
    },
    {
      title: "NLP Customer Intelligence System",
      desc: "NLP pipeline that analyzes customer reviews, extracts sentiment, detects topics, and generates AI-written executive summaries.",
      tech: ["BERT", "HuggingFace", "LLM API", "Pandas", "FastAPI"],
    },
    {
      title: "Churn Prediction Model",
      desc: "XGBoost churn prediction model with SHAP explainability, deployed as a REST API with automated retraining.",
      tech: ["XGBoost", "SHAP", "MLflow", "FastAPI", "Docker"],
    },
    {
      title: "AI Sales Forecasting Engine",
      desc: "Time-series forecasting model combined with LLM-generated narrative reports for business stakeholders.",
      tech: ["Prophet", "LightGBM", "OpenAI", "Plotly", "Streamlit"],
    },
  ],
  mentors: [
    { name: "Dr. Nina Rodriguez", company: "Spotify", role: "Senior Data Scientist", exp: "10 years" },
    { name: "Chris Anderson", company: "LinkedIn", role: "ML Engineer", exp: "8 years" },
    { name: "Sophie Lee", company: "Palantir", role: "Data Scientist", exp: "7 years" },
    { name: "Marcus Webb", company: "Stripe", role: "AI Research Scientist", exp: "9 years" },
  ],
  placementStats: [
    { label: "Avg Salary Range", value: "$130K–$175K", color: "text-green-400" },
    { label: "Top Employers", value: "Spotify, LinkedIn", color: "text-purple-400" },
    { label: "Highest Offer", value: "$175K", color: "text-orange-400" },
    { label: "Students Trained", value: "1K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Do I need a math background?", a: "Basic algebra and comfort with numbers is enough. We teach all required statistics and probability from the ground up within the bootcamp." },
    { q: "How is this different from the AI Developer Bootcamp?", a: "This program focuses on data science — statistics, ML modeling, and analytics. The AI Developer Bootcamp focuses on building AI applications and LLM systems. This one is ideal if you want to work with data and build predictive models." },
    { q: "Will I learn Generative AI in this course?", a: "Yes — the AI Add-Ons module covers LLMs for data insights, AI-driven forecasting, and GenAI report generation, giving you a competitive edge over traditional data scientists." },
    { q: "What roles can I target after completing this?", a: "Data Scientist, ML Engineer, AI Analyst, and Business Intelligence Engineer at US tech and analytics companies." },
  ],
};

export default function DataScientistAIPage() {
  return <CourseDetailPage course={course} />;
}