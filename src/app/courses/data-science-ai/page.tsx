import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Data Science & AI Course — ML, Deep Learning & LLMs",
  description: "Master Data Science, Machine Learning, Deep Learning and LLMs. 8-month program with placement. Python, TensorFlow, PyTorch, MLOps.",
};

const course: CourseDetail = {
  title: "Data Science & AI",
  subtitle: "Machine Learning, Deep Learning & Large Language Models",
  badge: "NEW",
  badgeColor: "badge-green",
  color: "from-orange-600 to-red-500",
  emoji: "🤖",
  duration: "8 Months",
  students: "5,500+",
  rating: 4.9,
  reviews: 1400,
  fee: "₹89,999",
  emi: "₹4,700/mo",
  level: "Intermediate (Basic Python helpful)",
  nextBatch: "May 1, 2026",
  overview:
    "The most advanced AI/ML program in India, designed in collaboration with IIT alumni and industry practitioners. Go from Python fundamentals to building production-grade ML systems, training custom deep learning models, and fine-tuning Large Language Models. Graduate with a portfolio of research-level projects and be ready for roles like ML Engineer, Data Scientist, and AI Engineer at top companies.",
  whatYouLearn: [
    "Python for Data Science (NumPy, Pandas)",
    "Statistics, Probability & Linear Algebra",
    "Machine Learning algorithms (Supervised/Unsupervised)",
    "Deep Learning: CNNs, RNNs, Transformers",
    "Computer Vision with OpenCV & YOLO",
    "NLP: BERT, GPT, Hugging Face",
    "LLM Fine-tuning & RLHF",
    "MLOps: MLflow, DVC, Docker",
    "Cloud AI: AWS SageMaker, GCP Vertex AI",
    "Kaggle competitions & research papers",
  ],
  curriculum: [
    { module: "Python & Math Foundations", topics: ["Python advanced", "NumPy & Pandas", "Matplotlib & Seaborn", "Linear Algebra", "Statistics & Probability", "Hypothesis testing"], weeks: "Weeks 1–4" },
    { module: "Classical Machine Learning", topics: ["Linear / Logistic Regression", "Decision Trees & Random Forest", "SVM & KNN", "Clustering (K-Means, DBSCAN)", "Feature engineering", "Model evaluation & cross-validation"], weeks: "Weeks 5–10" },
    { module: "Deep Learning", topics: ["Neural networks fundamentals", "CNNs for image classification", "RNNs & LSTMs", "Transfer learning", "Data augmentation", "GPU training on Colab/AWS"], weeks: "Weeks 11–17" },
    { module: "Computer Vision", topics: ["OpenCV basics", "Object detection (YOLO)", "Image segmentation", "Face recognition", "Video processing", "Real-world CV projects"], weeks: "Weeks 18–21" },
    { module: "NLP & Transformers", topics: ["Text preprocessing & embeddings", "BERT & RoBERTa", "GPT architecture", "Hugging Face ecosystem", "Sentiment analysis", "Named entity recognition"], weeks: "Weeks 22–26" },
    { module: "LLMs & Generative AI", topics: ["LLM fine-tuning (LoRA, QLoRA)", "Prompt engineering", "RAG pipelines", "LangChain & LlamaIndex", "RLHF basics", "Building LLM-powered apps"], weeks: "Weeks 27–30" },
    { module: "MLOps & Deployment", topics: ["MLflow experiment tracking", "DVC data versioning", "FastAPI model serving", "Docker & Kubernetes", "CI/CD for ML", "AWS SageMaker deployment"], weeks: "Weeks 31–34" },
  ],
  projects: [
    { title: "Medical Image Classifier", desc: "CNN-based X-ray classifier for pneumonia detection achieving 96% accuracy.", tech: ["PyTorch", "ResNet", "OpenCV", "FastAPI", "AWS"] },
    { title: "Custom LLM Chatbot", desc: "Fine-tuned Llama-2 on domain-specific data with RAG and memory.", tech: ["Hugging Face", "LangChain", "FAISS", "Gradio", "GCP"] },
    { title: "Real-Time Fraud Detection", desc: "Stream-based fraud detection with XGBoost and feature store.", tech: ["Kafka", "XGBoost", "Feast", "Docker", "Grafana"] },
    { title: "Stock Price Forecasting", desc: "Time-series forecasting with LSTM and Transformer hybrid model.", tech: ["PyTorch", "Prophet", "Plotly", "Streamlit", "AWS"] },
    { title: "NLP Recommendation Engine", desc: "Semantic search + collaborative filtering for product recommendations.", tech: ["BERT", "Pinecone", "FastAPI", "Redis", "Next.js"] },
  ],
  mentors: [
    { name: "Karan Joshi", company: "Google DeepMind", role: "Research Scientist", exp: "9 years" },
    { name: "Aishwarya Nair", company: "Meta AI", role: "ML Engineer", exp: "7 years" },
    { name: "Varun Bhatia", company: "Flipkart AI", role: "Lead Data Scientist", exp: "8 years" },
    { name: "Pooja Gupta", company: "Amazon AWS", role: "Applied Scientist", exp: "6 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "88%", color: "text-green-400" },
    { label: "Average Package", value: "₹16 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹30 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "4.5K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Do I need a math background?", a: "Basic high school math is enough. We cover all necessary linear algebra, statistics, and calculus in the program from scratch." },
    { q: "Will I work on real datasets?", a: "Yes — you'll work on real Kaggle datasets, industry datasets, and build 5+ capstone projects including deploying models to production." },
    { q: "How is this different from online tutorials?", a: "Unlike self-paced YouTube tutorials, you get live classes, 1:1 mentorship, doubt sessions, peer learning, and active placement support with company connections." },
    { q: "What kind of roles can I get?", a: "Data Scientist, ML Engineer, AI Engineer, Data Analyst, Research Scientist, MLOps Engineer, and more." },
  ],
};

export default function DataSciencePage() {
  return <CourseDetailPage course={course} />;
}
