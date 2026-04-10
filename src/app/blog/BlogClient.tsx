"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Clock, User, Search, TrendingUp,
  BookOpen, Zap, Tag, Calendar,
} from "lucide-react";

type Category = "All" | "Career" | "Tech" | "Placements" | "AI & ML" | "Industry";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  emoji: string;
  color: string;
  tags: string[];
  keyPoints: string[];
}

const posts: Post[] = [
  {
    id: 1,
    title: "How to Crack FAANG Interviews in 2026: A Complete Roadmap",
    excerpt: "From DSA prep to system design — a step-by-step guide used by 500+ Aartechus alumni who landed offers at Amazon, Google, and Flipkart.",
    content: "Landing a FAANG offer requires a structured 3-phase approach. Phase 1 (Months 1–2): Build DSA fundamentals — arrays, strings, hashmaps, two pointers, sliding window. Aim for 150+ LeetCode problems, focusing on Easy and Medium. Phase 2 (Months 3–4): System Design — study HLD patterns like load balancing, caching, databases, and microservices. Read 'Designing Data-Intensive Applications'. Phase 3 (Month 5–6): Mock interviews daily, behavioral prep (STAR format), and company-specific research. Our alumni who cracked Amazon consistently practiced system design twice a week and did 30+ mock interviews before their final rounds.",
    category: "Career",
    author: "Arjun Mehta",
    authorRole: "Senior SDE at Amazon",
    date: "Apr 5, 2026",
    readTime: "8 min read",
    emoji: "🎯",
    color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    tags: ["DSA", "System Design", "FAANG", "Interview Prep"],
    keyPoints: [
      "150+ LeetCode problems before attempting FAANG interviews",
      "System design prep should start at month 3, not month 6",
      "30+ mock interviews is the minimum for top-tier companies",
      "Behavioral prep (STAR method) is equally important as DSA",
    ],
  },
  {
    id: 2,
    title: "Generative AI for Developers: What You Actually Need to Know",
    excerpt: "LLMs, RAG pipelines, fine-tuning, and prompt engineering — explained simply. How to integrate Gen AI into real products without the hype.",
    content: "Generative AI in 2026 is no longer experimental — it's a production requirement. Here's what actually matters: (1) Prompt Engineering: Learn few-shot prompting, chain-of-thought, and system prompts. This is your fastest ROI. (2) RAG (Retrieval Augmented Generation): Instead of fine-tuning, most real-world apps use RAG — combine vector databases (Pinecone, Weaviate) with LLMs to give them memory of your data. (3) Fine-tuning: Only needed for very domain-specific tasks. Use LoRA or QLoRA to fine-tune LLaMA on consumer hardware. (4) LangChain/LlamaIndex: The glue that connects everything. Learn LangChain for chaining prompts, tools, and memory. Most production AI apps are built on these frameworks.",
    category: "AI & ML",
    author: "Sneha Patel",
    authorRole: "Staff Engineer at Salesforce",
    date: "Apr 2, 2026",
    readTime: "10 min read",
    emoji: "🤖",
    color: "linear-gradient(135deg,#ea580c,#ef4444)",
    tags: ["Generative AI", "LLMs", "RAG", "Prompt Engineering"],
    keyPoints: [
      "Prompt engineering gives the fastest ROI for most developers",
      "RAG is preferred over fine-tuning for 90% of real-world use cases",
      "LangChain and LlamaIndex are now industry-standard frameworks",
      "LoRA/QLoRA makes fine-tuning accessible on consumer GPUs",
    ],
  },
  {
    id: 3,
    title: "Why Data Engineering is the Hottest Tech Career in 2026",
    excerpt: "Salaries, demand, skills, and the exact path to becoming a data engineer — from someone who's reviewed 1,000+ data engineering resumes.",
    content: "Data Engineers are now commanding Rs 12–25 LPA as freshers at top companies — higher than most full-stack developers. Why? Every company is drowning in data and can't use it. Data engineers build the pipelines that make data usable. The core skill stack in 2026: SQL (non-negotiable), Python with PySpark, Apache Kafka for streaming, Airflow for orchestration, and at least one cloud platform (AWS Redshift or GCP BigQuery). The common mistake: candidates learn Spark in isolation without understanding data warehouse design or pipeline architecture. Our top-placed data engineers spent 40% of their study time on system design for data — not just tools.",
    category: "Career",
    author: "Varun Singh",
    authorRole: "Head of Placements",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    emoji: "⚙️",
    color: "linear-gradient(135deg,#ca8a04,#d97706)",
    tags: ["Data Engineering", "Career", "Salary", "Apache Spark"],
    keyPoints: [
      "Data Engineers earn Rs 12–25 LPA as freshers at top companies",
      "SQL + Python + Spark is the non-negotiable core stack",
      "Data warehouse design knowledge separates top candidates",
      "Cloud (AWS/GCP) experience is now mandatory, not optional",
    ],
  },
  {
    id: 4,
    title: "MERN vs Java Full Stack: Which Should You Choose in 2026?",
    excerpt: "A no-fluff comparison of both stacks — salary data, job market demand, learning curve, and which one fits your goals.",
    content: "This is the most common question we get — and there's no universal answer. MERN (JavaScript end-to-end) is better if you want to work at startups, product companies, or go freelance. The JS ecosystem moves fast, the community is massive, and React is everywhere. Average package: Rs 8–18 LPA for freshers. Java Full Stack is better for enterprise roles — banks, IT services companies, large SaaS firms. Spring Boot is deeply embedded in corporate India. More structured, slightly steeper learning curve, but extremely stable career path. Average package: Rs 7–16 LPA for freshers. Bottom line: If you're unsure, go MERN — the job market is slightly larger. If you have an enterprise or corporate target in mind, go Java.",
    category: "Tech",
    author: "Rohit Kapoor",
    authorRole: "VP — Education",
    date: "Mar 24, 2026",
    readTime: "7 min read",
    emoji: "⚡",
    color: "linear-gradient(135deg,#2563eb,#0891b2)",
    tags: ["MERN", "Java", "Full Stack", "Career Advice"],
    keyPoints: [
      "MERN is better for startups, product companies, and freelancing",
      "Java Full Stack is stronger for enterprise and corporate roles",
      "Both stacks offer Rs 7–18 LPA for fresh graduates at top companies",
      "When in doubt, MERN has a slightly larger job market in 2026",
    ],
  },
  {
    id: 5,
    title: "The Tech Resume That Gets Shortlisted: 10 Rules from 50,000 Reviews",
    excerpt: "Our placement team has reviewed over 50,000 resumes. Here are the 10 patterns that separate shortlisted candidates from rejected ones.",
    content: "After reviewing 50,000+ resumes, these are the 10 rules that matter: (1) One page — always. (2) Quantify everything — '30% faster load time' beats 'improved performance'. (3) Projects before education for freshers. (4) Skills section with actual proficiency levels, not just a list. (5) GitHub link that's actually active. (6) ATS-friendly format — no tables, no columns, no graphics. (7) Action verbs: built, deployed, optimized, reduced — not 'worked on'. (8) Tailor for each company — mention their tech stack. (9) Remove irrelevant hobbies, objective statements, and references. (10) LinkedIn must match your resume exactly — recruiters always cross-check.",
    category: "Placements",
    author: "Divya Nair",
    authorRole: "Head — IT Services",
    date: "Mar 20, 2026",
    readTime: "5 min read",
    emoji: "📄",
    color: "linear-gradient(135deg,#16a34a,#10b981)",
    tags: ["Resume", "Placements", "Job Search", "ATS"],
    keyPoints: [
      "Quantify impact — numbers beat descriptions every time",
      "ATS-friendly format means no tables, columns, or graphics",
      "Projects section should come before education for freshers",
      "LinkedIn profile must match your resume — recruiters cross-check",
    ],
  },
  {
    id: 6,
    title: "From Zero to Cybersecurity Engineer: A 6-Month Roadmap",
    excerpt: "CEH, CompTIA Security+, ethical hacking labs, and the exact skills companies are hiring for — all in one guide.",
    content: "Cybersecurity has a global talent shortage of 3.5 million professionals. Here's the 6-month path: Month 1–2: Networking fundamentals (TCP/IP, DNS, HTTP) and Linux command line. Month 3: Ethical hacking methodology — reconnaissance, scanning, exploitation with Metasploit. Month 4: Web application security — OWASP Top 10, SQL injection, XSS, Burp Suite. Month 5: Network defense and SOC operations — Splunk SIEM, incident response. Month 6: VAPT report writing, CEH exam prep, and capstone CTF challenge. Most importantly: build a home lab. Use VirtualBox, set up Kali Linux and vulnerable VMs from HackTheBox or TryHackMe. Hands-on practice is what separates hired candidates from rejected ones.",
    category: "Career",
    author: "Priya Verma",
    authorRole: "Co-Founder & CTO",
    date: "Mar 15, 2026",
    readTime: "9 min read",
    emoji: "🛡️",
    color: "linear-gradient(135deg,#16a34a,#15803d)",
    tags: ["Cybersecurity", "CEH", "Ethical Hacking", "Career"],
    keyPoints: [
      "Global cybersecurity talent shortage: 3.5 million unfilled roles",
      "Home lab with Kali Linux + HackTheBox is non-negotiable for practice",
      "CEH + CompTIA Security+ are the most recognized entry certifications",
      "VAPT report writing is a key skill most candidates ignore",
    ],
  },
  {
    id: 7,
    title: "How Aartechus Hiring Drives Work: A Candidate's Guide",
    excerpt: "Skill analysis, mock interviews, direct company connects — here's the exact process and how to maximize your chances.",
    content: "Our 60+ monthly hiring drives follow a 4-step process: Step 1 — Register (free): Create your profile and select drives you're eligible for based on skills and experience level. Step 2 — Skill Analysis: A 45-minute online assessment covering your core technical skills. This isn't to filter you out — it's to match you with the right companies. Step 3 — Mock Interview: A practice round with one of our mentors 48 hours before the actual drive. Most candidates improve their performance by 40% just from this session. Step 4 — Company Interview: Direct face-to-face or video interview with the hiring company. No middlemen. Tips: Apply to multiple drives, not just top companies. Practice the mock round seriously. Research the company before the drive. Follow up with our placement team within 24 hours of each interview.",
    category: "Placements",
    author: "Varun Singh",
    authorRole: "Head of Placements",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    emoji: "🤝",
    color: "linear-gradient(135deg,#7c3aed,#2563eb)",
    tags: ["Hiring Drives", "Placements", "Interview", "Jobs"],
    keyPoints: [
      "60+ free hiring drives every month across online, offline, and hybrid formats",
      "Mock interview 48 hours before the drive improves performance by ~40%",
      "Apply to multiple drives — not just top companies — to maximize offers",
      "Placement team follow-up within 24 hours of each interview is key",
    ],
  },
  {
    id: 8,
    title: "5 Python Automation Projects That Will Impress Any Interviewer",
    excerpt: "Forget Todo apps. These real-world automation projects demonstrate practical Python skills that senior engineers actually care about.",
    content: "Stop building Todo apps. Here are 5 Python projects that actually demonstrate skill: (1) File Organization Bot: Automatically sorts downloads folder by file type, date, and size. Demonstrates file I/O, pathlib, and os modules. (2) Price Alert System: Scrapes e-commerce sites, stores price history in SQLite, and sends email alerts when prices drop. Shows web scraping, databases, and API integration. (3) Meeting Transcriber: Uses OpenAI Whisper to transcribe audio files and generates bullet-point summaries via ChatGPT API. (4) Invoice Generator: Takes CSV data and generates professional PDF invoices. Uses Pandas and ReportLab — common in fintech roles. (5) GitHub Activity Dashboard: Pulls your GitHub data via API and visualizes contribution patterns with Matplotlib. Shows API skills and data visualization. All 5 projects can be built in a weekend and make your GitHub profile stand out immediately.",
    category: "Tech",
    author: "Aarav Sharma",
    authorRole: "Co-Founder & CEO",
    date: "Mar 5, 2026",
    readTime: "6 min read",
    emoji: "🐍",
    color: "linear-gradient(135deg,#0891b2,#0e7490)",
    tags: ["Python", "Automation", "Projects", "Portfolio"],
    keyPoints: [
      "Price Alert System demonstrates scraping + databases + API in one project",
      "Meeting Transcriber using Whisper + ChatGPT shows real AI integration",
      "Invoice Generator is directly relevant for fintech and enterprise roles",
      "All 5 projects can be built in a weekend and deployed on GitHub",
    ],
  },
];

const categories: Category[] = ["All", "Career", "Tech", "Placements", "AI & ML", "Industry"];
const trendingTopics = ["DSA Prep", "LLMs", "System Design", "Data Engineering", "MERN vs Java", "Resume Tips"];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [activePost, setActivePost] = useState<number | null>(null);

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-bg-primary pt-16">

      {/* Hero */}
      <section className="relative py-24 mesh-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag"><BookOpen size={12} /> Blog & Insights</span>
            <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-black mb-6">
              Learn, Grow &{" "}
              <span className="text-gradient">Stay Ahead</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
              Career guides, tech deep-dives, placement tips, and industry insights — from engineers and mentors who've been there.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, tags..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setActivePost(null); }}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm bg-white/5 border border-white/10 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-3 gap-6 text-center">
          {[
            { value: `${posts.length}+`, label: "Articles" },
            { value: "8", label: "Expert Authors" },
            { value: "10K+", label: "Monthly Readers" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-syne font-extrabold text-2xl text-black mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Articles accordion */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* <div className="text-center mb-14">
            <h2 className="font-syne font-extrabold text-4xl text-black mb-3">
              Our <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-gray-400">Click any article to read it inline.</p>
          </div> */}

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setActivePost(null); setSearch(""); }}
                className={`tab-pill ${activeCategory === cat && !search ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Trending */}
          {!search && activeCategory === "All" && (
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                <TrendingUp size={13} className="text-primary" /> Trending:
              </span>
              {trendingTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSearch(topic)}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400 hover:border-primary/40 hover:text-primary transition-all"
                >
                  {topic}
                </button>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p>No articles match your search.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-4 text-primary text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass rounded-2xl border border-white/8 overflow-hidden card-hover cursor-pointer"
                  onClick={() => setActivePost(activePost === post.id ? null : post.id)}
                >
                  {/* Header row — identical pattern to ITServicesClient */}
                  <div className="flex items-center justify-between p-6 md:p-8">
                    <div className="flex items-center gap-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl"
                        style={{ background: post.color }}
                      >
                        {post.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-600 text-xs hidden sm:block">{post.date}</span>
                        </div>
                        <h3 className="font-syne font-bold text-lg text-black leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 hidden md:block line-clamp-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                      <div className="hidden md:flex flex-col items-end gap-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><User size={11} />{post.author}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: activePost === post.id ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-xl transition-colors ${
                          activePost === post.id ? "bg-primary text-black" : "bg-white/5 text-gray-400"
                        }`}
                      >
                        +
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded content — identical pattern to ITServicesClient */}
                  {activePost === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="border-t border-white/8"
                    >
                      <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">

                        {/* Article body */}
                        <div className="md:col-span-2">
                          <p className="text-black/60 leading-relaxed mb-6 text-[15px]">
                            {post.content}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <button
                                key={tag}
                                onClick={(e) => { e.stopPropagation(); setSearch(tag); setActivePost(null); }}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400 hover:border-primary/40 hover:text-primary transition-all"
                              >
                                <Tag size={10} /> {tag}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Key points + author */}
                        <div>
                          <h4 className="font-semibold text-black mb-3 text-sm uppercase tracking-wider">
                            Key Takeaways
                          </h4>
                          <div className="space-y-2 mb-6">
                            {post.keyPoints.map((point) => (
                              <div key={point} className="flex items-start gap-2 text-sm text-black/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 flex-shrink-0" />
                                {point}
                              </div>
                            ))}
                          </div>

                          <div className="p-4 rounded-xl border border-white/10 mb-4" style={{ background: `${post.color}22` }}>
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Written by</div>
                            <div className="font-semibold text-black text-sm">{post.author}</div>
                            <div className="text-gray-500 text-xs mb-3">{post.authorRole}</div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar size={11} /> {post.date} · {post.readTime}
                            </div>
                          </div>

                          <Link
                            href="/contact?type=callback"
                            className="text-black px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all w-fit"
                            style={{ background: post.color }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Free Counseling <ArrowRight size={13} />
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass rounded-3xl p-10 md:p-14 text-center border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5" />
            <div className="relative">
              <Zap size={40} className="text-primary mx-auto mb-5" />
              <h2 className="font-syne font-extrabold text-4xl text-black mb-4">
                Ready to <span className="text-gradient">transform your career?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                Free counseling session — no upfront tuition for eligible candidates. Income-based payment options available.
              </p>
              <Link
                href="/contact?type=callback"
                className="glow-btn inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-black text-base"
              >
                Book Free Session <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}