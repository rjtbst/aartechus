"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Clock, Users, Star, ArrowRight, CheckCircle2, ChevronDown,
  Play, BookOpen, Award, Briefcase, Download, Phone,
  Code2, Zap, Target, TrendingUp, Calendar
} from "lucide-react";

export interface CourseDetail {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  color: string;
  emoji: string;
  duration: string;
  students: string;
  rating: number;
  reviews: number;
  fee: string;
  emi: string;
  level: string;
  nextBatch: string;
  overview: string;
  whatYouLearn: string[];
  curriculum: { module: string; topics: string[]; weeks: string }[];
  projects: { title: string; desc: string; tech: string[] }[];
  mentors: { name: string; company: string; role: string; exp: string }[];
  placementStats: { label: string; value: string; color: string }[];
  faqs: { q: string; a: string }[];
}

interface Props {
  course: CourseDetail;
}

export default function CourseDetailPage({ course }: Props) {
  const [activeCurriculum, setActiveCurriculum] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = ["overview", "curriculum", "projects", "mentors", "placement"];

  return (
    <div className="min-h-screen bg-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`badge ${course.badgeColor}`}>{course.badge}</span>
                  <span className="text-black/60 text-sm">•</span>
                  <span className="text-black/60 text-sm">{course.level}</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {course.emoji}
                  </div>
                  <div>
                    <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-black leading-tight">
                      {course.title}
                    </h1>
                    <p className="text-black/60 text-xl mt-1">{course.subtitle}</p>
                  </div>
                </div>

                <p className="text-black/50 text-lg leading-relaxed mb-8 max-w-2xl">{course.overview}</p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-sm text-black/50">
                    <Clock size={15} className="text-primary" /><strong>{course.duration}</strong> duration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black/50">
                    <Users size={15} className="text-blue-400" /><strong>{course.students}</strong> enrolled
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black/50">
                    <Star size={15} className="text-yellow-400 fill-yellow-400" /><strong>{course.rating}</strong> ({course.reviews}+ reviews)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black/50">
                    <Calendar size={15} className="text-green-400" />Next batch: <strong>{course.nextBatch}</strong>
                  </div>
                </div>

                {/* What you'll learn */}
                <div className="glass rounded-2xl p-6 mb-6">
                  <h3 className="font-syne font-semibold text-black mb-4 flex items-center gap-2">
                    <Target size={18} className="text-primary" /> What You&apos;ll Learn
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {course.whatYouLearn.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-black/50">
                        <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Enrollment card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="glass rounded-3xl overflow-hidden border border-primary/20">
                <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />
                <div className="p-6">
                  {/* Preview video */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden glass mb-6 cursor-pointer group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="play-btn group-hover:scale-110 transition-transform">
                        <Play size={22} fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs text-black/70 font-medium">Preview Course</div>
                  </div>

                  <div className="mb-4">
                    <div className="font-syne font-extrabold text-3xl text-black">{course.fee}</div>
                    <div className="text-black/60 text-sm">or <span className="text-black font-medium">{course.emi}</span> with 0% EMI</div>
                  </div>

                  <button className="glow-btn w-full py-3.5 rounded-xl font-semibold text-black mb-3 flex items-center justify-center gap-2">
                    Enroll Now <ArrowRight size={16} />
                  </button>
                  <Link href="/contact?type=callback" className="outline-btn w-full py-3 rounded-xl font-medium text-black text-sm flex items-center justify-center gap-2">
                    <Phone size={14} /> Request Callback
                  </Link>

                  <div className="divider my-4" />

                  <div className="space-y-2.5">
                    {[
                      { icon: BookOpen, label: "Curriculum", value: `${course.curriculum.length} modules` },
                      { icon: Briefcase, label: "Projects", value: `${course.projects.length} capstone projects` },
                      { icon: Award, label: "Certificate", value: "Industry recognized" },
                      { icon: Zap, label: "Live sessions", value: "5 days/week" },
                      { icon: Users, label: "Mentorship", value: "1:1 industry experts" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-black/60">
                          <item.icon size={13} className="text-primary" />{item.label}
                        </span>
                        <span className="text-black font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* <button className="mt-5 outline-btn w-full py-2.5 rounded-xl text-sm font-medium text-black/50 flex items-center justify-center gap-2">
                    <Download size={13} /> Download Brochure
                  </button> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-30 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`tab-pill capitalize whitespace-nowrap ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* CURRICULUM */}
            {activeTab === "curriculum" && (
              <div className="max-w-3xl">
                <h2 className="font-syne font-bold text-3xl text-black mb-3">Course Curriculum</h2>
                <p className="text-black/60 mb-8">{course.curriculum.length} modules · {course.duration} · Industry-aligned syllabus</p>
                <div className="space-y-3">
                  {course.curriculum.map((mod, i) => (
                    <div key={i} className={`glass rounded-2xl overflow-hidden border transition-colors ${activeCurriculum === i ? "border-primary/30" : "border-white/5"}`}>
                      <button
                        className="w-full flex items-center justify-between p-5 text-left"
                        onClick={() => setActiveCurriculum(activeCurriculum === i ? null : i)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <div className="font-semibold text-black">{mod.module}</div>
                            <div className="text-xs text-gray-500">{mod.weeks}</div>
                          </div>
                        </div>
                        <motion.div animate={{ rotate: activeCurriculum === i ? 180 : 0 }}>
                          <ChevronDown size={16} className="text-black/60" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeCurriculum === i && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 grid sm:grid-cols-2 gap-2 border-t border-white/5 pt-4">
                              {mod.topics.map((t) => (
                                <div key={t} className="flex items-center gap-2 text-sm text-black/60">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                                  {t}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECTS */}
            {activeTab === "projects" && (
              <div>
                <h2 className="font-syne font-bold text-3xl text-black mb-3">Capstone Projects</h2>
                <p className="text-black/60 mb-8">Build production-grade apps to showcase in interviews.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {course.projects.map((proj, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 card-hover border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                        <Code2 size={18} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-black mb-2">{proj.title}</h3>
                      <p className="text-black/60 text-sm mb-4">{proj.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-black/40 border border-white/8">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* MENTORS */}
            {activeTab === "mentors" && (
              <div>
                <h2 className="font-syne font-bold text-3xl text-black mb-3">Industry Expert Mentors</h2>
                <p className="text-black/40 mb-8">Learn from engineers at top product & service companies.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {course.mentors.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 text-center card-hover border border-white/5"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-black text-xl font-bold font-syne mx-auto mb-4`}>
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="font-semibold text-black mb-1">{m.name}</div>
                      <div className="text-primary text-sm mb-0.5">{m.role}</div>
                      <div className="text-gray-500 text-xs mb-1">@ {m.company}</div>
                      <div className="text-gray-600 text-xs">{m.exp} experience</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* PLACEMENT */}
            {activeTab === "placement" && (
              <div>
                <h2 className="font-syne font-bold text-3xl text-black mb-3">Placement Track Record</h2>
                <p className="text-black/40 mb-10">Proven results from our alumni community.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {course.placementStats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 text-center border border-white/5"
                    >
                      <div className={`number-stat text-4xl font-extrabold ${s.color} mb-2`}>{s.value}</div>
                      <div className="text-black/40 text-sm">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="glass rounded-2xl p-6 border border-primary/20">
                  <h3 className="font-syne font-semibold text-black mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="text-primary" /> Our Hiring Partners
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Amazon", "Salesforce", "Walmart", "Flipkart", "Paytm", "Infosys", "TCS", "Wipro", "HCL", "Capgemini", "Accenture", "IBM", "Cognizant", "Tech Mahindra", "Mphasis"].map((c) => (
                      <span key={c} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-black/50 hover:border-primary/30 transition-colors">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* OVERVIEW (default) */}
            {activeTab === "overview" && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-syne font-bold text-3xl text-black mb-5">About This Program</h2>
                  <p className="text-black/50 leading-relaxed mb-8">{course.overview}</p>

                  {/* FAQs */}
                  <h3 className="font-syne font-semibold text-xl text-black mb-4">Common Questions</h3>
                  <div className="space-y-3">
                    {course.faqs.map((faq, i) => (
                      <div key={i} className="glass rounded-xl p-4 border border-white/5">
                        <div className="font-medium text-black text-sm mb-2">{faq.q}</div>
                        <div className="text-black/40 text-sm">{faq.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  {/* CTA Form */}
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <h3 className="font-syne font-bold text-xl text-black mb-5">Get Free Course Counseling</h3>
                    {submitted ? (
                      <div className="text-center py-8">
                        <CheckCircle2 size={48} className="text-green-400 mx-auto mb-3" />
                        <p className="text-black font-semibold">We&apos;ll call you shortly!</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                        <input type="text" placeholder="Full Name *" required value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm" />
                        <input type="tel" placeholder="Phone Number *" required value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm" />
                        <input type="email" placeholder="Email Address" value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm" />
                        <button type="submit" className="glow-btn w-full py-3.5 rounded-xl font-semibold text-black flex items-center justify-center gap-2">
                          Request Callback <ArrowRight size={16} />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
