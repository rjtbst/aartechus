"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import {
  Clock, Users, Star, ArrowRight, CheckCircle2, ChevronDown,
  BookOpen, Award, Briefcase, Phone, Code2, Zap, Target,
  TrendingUp, Calendar, Sparkles, Paperclip, X,
} from "lucide-react";
import { courseSelectOptions } from "@/config/coursesConfig";
import { servicesConfig } from "@/config/servicesConfig";
import { uploadResume } from "@/lib/uploadResume";

const serviceOptions = servicesConfig.map((s) => s.title);
const workAuthOptions = ["US Citizen", "Green Card", "H1B", "EAD", "TN", "Other"];

export interface CourseDetail {
  title: string; subtitle: string; badge: string; badgeColor: string;
  color: string; emoji: string; duration: string; students: string;
  rating: number; reviews: number;
  level: string; nextBatch: string; overview: string;
  whatYouLearn: string[];
  curriculum: { module: string; topics: string[]; weeks: string }[];
  projects: { title: string; desc: string; tech: string[] }[];
  mentors: { name: string; company: string; role: string; exp: string }[];
  placementStats: { label: string; value: string; color: string }[];
  faqs: { q: string; a: string }[];
}

export default function CourseDetailPage({ course }: { course: CourseDetail }) {
  const [activeCurriculum, setActiveCurriculum] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    course: course.title, workAuth: "", message: "",
  });
  const [resume,    setResume]    = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tabs = ["overview", "curriculum", "projects", "mentors", "placement"];

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large", { description: "Max size is 5 MB." });
      e.target.value = "";
      return;
    }
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending your request…");
    try {
      let resumeUrl = "";
      if (resume) {
        setUploading(true);
        toast.loading("Uploading resume…", { id: toastId });
        resumeUrl = await uploadResume(resume);
        setUploading(false);
      }
      toast.loading("Sending your request…", { id: toastId });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryType: "callback", ...form, resumeUrl }),
      });
      if (res.ok) {
        toast.success("Request received! Our counselor will call you shortly.", {
          id: toastId, description: "Check your inbox for a confirmation.",
        });
        setSubmitted(true);
      } else {
        const data = await res.json();
        toast.error("Submission failed.", { id: toastId, description: data?.error });
      }
    } catch (err: any) {
      toast.error(err?.message ?? "Something went wrong.", { id: toastId });
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-16">

      {/* ── Hero ── */}
      <section className="relative py-16 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Left */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-5">
                  {course.badge && <span className={`badge ${course.badgeColor}`}>{course.badge}</span>}
                  <span className="text-black/60 text-sm">•</span>
                  <span className="text-black/60 text-sm">{course.level}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {course.emoji}
                  </div>
                  <div>
                    <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-black leading-tight">{course.title}</h1>
                    <p className="text-black/60 text-xl mt-1">{course.subtitle}</p>
                  </div>
                </div>
                <p className="text-black/50 text-lg leading-relaxed mb-8 max-w-2xl">{course.overview}</p>
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { icon: Clock,     color: "text-primary",     text: <><strong>{course.duration}</strong> duration</> },
                    { icon: Users,     color: "text-blue-400",    text: <><strong>{course.students}</strong> enrolled</> },
                    { icon: Star,      color: "text-yellow-400",  text: <><strong>{course.rating}</strong> ({course.reviews}+ reviews)</> },
                    { icon: Calendar,  color: "text-green-400",   text: <>Next batch: <strong>{course.nextBatch}</strong></> },
                  ].map(({ icon: Icon, color, text }, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-black/50">
                      <Icon size={15} className={color} />{text}
                    </div>
                  ))}
                </div>
                <div className="glass rounded-2xl p-6 mb-6">
                  <h3 className="font-syne font-semibold text-black mb-4 flex items-center gap-2">
                    <Target size={18} className="text-primary" /> What You&apos;ll Learn
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {course.whatYouLearn.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-black/50">
                        <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Enrollment card */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:sticky lg:top-24">
              <div className="glass rounded-3xl overflow-hidden border border-primary/20">
                <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />
                <div className="p-6">
                  <div className={`relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-br ${course.color} p-5 flex items-center justify-center`} style={{ minHeight: 110 }}>
                    <div className="text-center">
                      <div className="text-4xl mb-1">{course.emoji}</div>
                      <div className="text-white font-syne font-bold text-base leading-tight">{course.title}</div>
                      <div className="text-white/70 text-xs mt-1">{course.subtitle}</div>
                    </div>
                  </div>
                  {/* <button className="glow-btn w-full py-3.5 rounded-xl font-semibold text-black mb-3 flex items-center justify-center gap-2">
                    Enroll Now <ArrowRight size={16} />
                  </button> */}
                  <Link href="/contact?type=callback" className="outline-btn w-full py-3 rounded-xl font-medium text-black text-sm flex items-center justify-center gap-2">
                    <Phone size={14} /> Request Callback
                  </Link>
                  <div className="divider my-4" />
                  <div className="space-y-2.5">
                    {[
                      { icon: BookOpen, label: "Curriculum",    value: `${course.curriculum.length} modules` },
                      { icon: Briefcase,label: "Projects",      value: `${course.projects.length} capstone projects` },
                      { icon: Award,    label: "Certificate",   value: "Industry recognized" },
                      { icon: Zap,      label: "Live sessions", value: "5 days/week" },
                      { icon: Users,    label: "Mentorship",    value: "1:1 industry experts" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-black/60">
                          <item.icon size={13} className="text-primary" />{item.label}
                        </span>
                        <span className="text-black font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div className="sticky top-16 z-30 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`tab-pill capitalize whitespace-nowrap ${activeTab === tab ? "active" : ""}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

            {/* CURRICULUM */}
            {activeTab === "curriculum" && (
              <div className="max-w-3xl">
                <h2 className="font-syne font-bold text-3xl text-black mb-3">Course Curriculum</h2>
                <p className="text-black/60 mb-8">{course.curriculum.length} modules · {course.duration} · Industry-aligned syllabus</p>
                <div className="space-y-3">
                  {course.curriculum.map((mod, i) => (
                    <div key={i} className={`glass rounded-2xl overflow-hidden border transition-colors ${activeCurriculum === i ? "border-primary/30" : "border-white/5"}`}>
                      <button className="w-full flex items-center justify-between p-5 text-left"
                        onClick={() => setActiveCurriculum(activeCurriculum === i ? null : i)}>
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
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="px-5 pb-5 grid sm:grid-cols-2 gap-2 border-t border-white/5 pt-4">
                              {mod.topics.map((t) => (
                                <div key={t} className="flex items-center gap-2 text-sm text-black/60">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />{t}
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
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 card-hover border border-white/5">
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
                <p className="text-black/40 mb-8">Learn from engineers at top US tech companies.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {course.mentors.map((m, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 text-center card-hover border border-white/5">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-xl font-bold font-syne mx-auto mb-4`}>
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
                <h2 className="font-syne font-bold text-3xl text-black mb-3">Career Outcomes</h2>
                <p className="text-black/40 mb-10">Real results from our alumni community across the US.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {course.placementStats.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 text-center border border-white/5">
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
                    {["Amazon","Google","Microsoft","Apple","Meta","Salesforce","Netflix","Uber","Stripe","Airbnb","LinkedIn","Palantir","Twilio","Cloudflare","Databricks"].map((c) => (
                      <span key={c} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-black/50 hover:border-primary/30 transition-colors">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-syne font-bold text-3xl text-black mb-5">About This Program</h2>
                  <p className="text-black/50 leading-relaxed mb-8">{course.overview}</p>
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

                {/* Form */}
                <div>
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100"
                    style={{ boxShadow: "0 8px 48px rgba(37,99,235,0.08),0 2px 16px rgba(0,0,0,0.04)" }}>
                    <div className="h-1.5" style={{ background: "linear-gradient(to right,#2563eb,#7c3aed,#a855f7)" }} />
                    <div className="p-7">
                      {submitted ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-14">
                          <div className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                            <CheckCircle2 size={36} className="text-green-500" />
                          </div>
                          <h3 className="font-syne font-bold text-2xl text-gray-900 mb-2">Request Received!</h3>
                          <p className="text-gray-500">Our counselor will reach out to you shortly.</p>
                        </motion.div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles size={14} className="text-blue-600" />
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Free Consultation</span>
                          </div>
                          <h3 className="font-syne font-bold text-2xl text-gray-900 mb-1">Get Free Counseling</h3>
                          <p className="text-gray-500 text-sm mb-5">Personalized career roadmap — at zero cost.</p>

                          <div className="space-y-1.5 mb-5 p-4 rounded-xl bg-blue-50 border border-blue-100">
                            {["No upfront tuition for eligible candidates","Income-based payment (ISA-style) — pay after hired","Free 1:1 career counseling session"].map((item) => (
                              <div key={item} className="flex items-start gap-2 text-xs text-gray-600">
                                <CheckCircle2 size={12} className="text-green-500 flex-shrink-0 mt-0.5" />{item}
                              </div>
                            ))}
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                                <input type="text" placeholder="Your name" required value={form.name}
                                  onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 rounded-xl text-sm" />
                              </div>
                              <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Phone *</label>
                                <input type="tel" placeholder="+1 (XXX)" required value={form.phone}
                                  onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2.5 rounded-xl text-sm" />
                              </div>
                            </div>

                            <div>
                              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Email Address *</label>
                              <input type="email" placeholder="your@email.com" required value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 rounded-xl text-sm" />
                            </div>

                            <div>
                              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Interested In</label>
                              <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className="w-full px-3 py-2.5 rounded-xl text-sm">
                                <optgroup label="Training Bootcamps">
                                  {courseSelectOptions.map((c) => <option key={c}>{c}</option>)}
                                </optgroup>
                                <optgroup label="IT Services">
                                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                                </optgroup>
                                <option>Other</option>
                              </select>
                            </div>

                            <div>
                              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Work Authorization</label>
                              <select value={form.workAuth} onChange={(e) => setForm({ ...form, workAuth: e.target.value })} className="w-full px-3 py-2.5 rounded-xl text-sm">
                                <option value="">Select work authorization</option>
                                {workAuthOptions.map((o) => <option key={o}>{o}</option>)}
                              </select>
                            </div>

                            {/* Resume Upload */}
                            <div>
                              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                Resume <span className="normal-case font-normal text-gray-400">(optional · PDF/DOC, max 5 MB)</span>
                              </label>
                              <label className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl border cursor-pointer transition-all
                                ${resume ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50"}`}>
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${resume ? "bg-green-100" : "bg-gray-200"}`}>
                                  {resume ? <CheckCircle2 size={14} className="text-green-600" /> : <Paperclip size={14} className="text-gray-500" />}
                                </div>
                                <span className={`text-sm truncate flex-1 ${resume ? "text-green-700" : "text-gray-400"}`}>
                                  {uploading ? "Uploading…" : resume ? resume.name : "Click to attach your resume"}
                                </span>
                                {resume && !uploading && (
                                  <button type="button" onClick={(e) => { e.preventDefault(); setResume(null); }}
                                    className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 hover:bg-red-100 flex items-center justify-center transition-colors">
                                    <X size={11} className="text-gray-500 hover:text-red-500" />
                                  </button>
                                )}
                                <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeChange} />
                              </label>
                            </div>

                            <div>
                              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Any Questions?</label>
                              <textarea rows={3} placeholder="Any specific questions or concerns?" value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-xl text-sm resize-none" />
                            </div>

                            <button type="submit" disabled={loading || uploading}
                              className="glow-btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                              {loading
                                ? <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                  </svg>{uploading ? "Uploading resume…" : "Sending…"}</>
                                : <>Request Free Callback <ArrowRight size={16} /></>
                              }
                            </button>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Phone size={14} className="text-blue-600" />
                              </div>
                              <div>
                                <div className="text-[10px] text-gray-400 mb-0.5">Or call us directly</div>
                                <a href="tel:+13079983803" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">+1 307 998 3803</a>
                              </div>
                            </div>

                            <p className="text-center text-xs text-gray-400 pt-1">
                              By submitting, you agree to our{" "}
                              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                            </p>
                          </form>
                        </>
                      )}
                    </div>
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