"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mail, Phone, CheckCircle2, ArrowRight,
  MessageCircle, Briefcase, GraduationCap, Clock,
} from "lucide-react";

type InquiryType = "callback" | "project" | "general";

const inquiryTypes = [
  { id: "callback" as InquiryType, label: "Course Inquiry",   icon: GraduationCap, desc: "Get free course counseling" },
  { id: "project"  as InquiryType, label: "Start IT Project", icon: Briefcase,      desc: "Get a project estimate"    },
  { id: "general"  as InquiryType, label: "General Query",    icon: MessageCircle,  desc: "Ask us anything"           },
];

const budgetOptions = ["$10K – $50K", "$50K – $150K", "$150K – $500K", "$500K+"];

const FORMSPREE_ID = "mdapvpqr";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const initialType  = (searchParams.get("type") as InquiryType) || "callback";

  const [type, setType]       = useState<InquiryType>(initialType);
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({ name: "", phone: "", email: "", message: "", course: "", budget: "", workAuth: "" });
  const [submitted, setSubmitted] = useState(false);

  const submitLabel =
    type === "callback" ? "Request Free Callback" :
    type === "project"  ? "Get Project Quote"      : "Send Message";

  const messagePlaceholder =
    type === "project"  ? "Describe your project requirements..."  :
    type === "callback" ? "Any specific questions or concerns?"    : "How can we help you?";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending your message…");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ inquiry_type: type, ...form }),
      });
      if (res.ok) {
        toast.success("Message sent! We'll get back to you in 2–4 hours.", {
          id: toastId,
          description: "Check your inbox for a confirmation email.",
        });
        setSubmitted(true);
      } else {
        const data = await res.json();
        toast.error("Something went wrong. Please try again.", { id: toastId, description: data?.error ?? "Server error" });
      }
    } catch {
      toast.error("Network error. Check your connection and retry.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 mesh-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-tag">Contact Us</span>
            <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-black mb-5">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl mx-auto">
              Whether you want to transform your career or build the next big thing — we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="font-syne font-semibold text-black mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@aartechus.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Email</div>
                      <div className="text-black text-sm font-medium group-hover:text-primary transition-colors">hello@aartechus.com</div>
                    </div>
                  </a>
                  <a href="tel:+13079983803" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                      <div className="text-black text-sm font-medium">+1 307 998 3803</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={16} className="text-orange-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Working Hours</div>
                      <div className="text-black text-sm font-medium">Mon–Sat, 9AM–8PM EST</div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/13079983803"
                className="flex items-center gap-3 p-4 rounded-2xl border border-green-500/30 bg-green-500/10 hover:bg-green-500/15 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">💬</div>
                <div>
                  <div className="text-black font-semibold text-sm">Chat on WhatsApp</div>
                  <div className="text-gray-400 text-xs">Typically replies in minutes</div>
                </div>
                <ArrowRight size={14} className="text-green-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl p-8 border border-primary/20">
                {/* Inquiry type selector */}
                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {inquiryTypes.map((t) => (
                    <button key={t.id} onClick={() => setType(t.id)}
                      className={`p-4 rounded-2xl text-left transition-all border ${
                        type === t.id ? "border-primary/40 bg-primary/10" : "border-white/5 hover:border-white/15 glass"
                      }`}>
                      <t.icon size={20} className={`mb-2 ${type === t.id ? "text-primary" : "text-gray-400"}`} />
                      <div className={`font-semibold text-sm mb-0.5 ${type === t.id ? "text-black" : "text-gray-300"}`}>{t.label}</div>
                      <div className="text-xs text-gray-500">{t.desc}</div>
                    </button>
                  ))}
                </div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={36} className="text-green-400" />
                    </div>
                    <h3 className="font-syne font-bold text-2xl text-black mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Our team will get back to you within 2–4 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                        <input type="text" placeholder="Your name" required value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Phone *</label>
                        <input type="tel" placeholder="+1 (XXX) XXX-XXXX" required value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Email Address *</label>
                      <input type="email" placeholder="your@email.com" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm" />
                    </div>

                    {type === "callback" && (
                      <>
                        <div>
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Interested In</label>
                          <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm">
                            <option value="">Select a course / service</option>
                            <optgroup label="Training Courses">
                              <option>Java Developer + AI Bootcamp</option>
                              <option>Data Engineer + AI Bootcamp</option>
                              <option>AI Developer Bootcamp</option>
                              <option>Data Scientist + AI Bootcamp</option>
                              <option>Python Programming</option>
                              <option>Quality Assurance (QA)</option>
                            </optgroup>
                            <optgroup label="IT Services">
                              <option>Web Development</option>
                              <option>Mobile App Development</option>
                              <option>AI / ML Solutions</option>
                              <option>Staffing & Recruitment</option>
                            </optgroup>
                            <option>Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Work Authorization</label>
                          <select value={form.workAuth} onChange={(e) => setForm({ ...form, workAuth: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm">
                            <option value="">Select work authorization</option>
                            <option>US Citizen</option>
                            <option>Green Card</option>
                            <option>H1B</option>
                            <option>EAD</option>
                            <option>TN</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </>
                    )}

                    {type === "project" && (
                      <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Estimated Budget</label>
                        <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm">
                          <option value="">Select budget range</option>
                          {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Message</label>
                      <textarea rows={4} placeholder={messagePlaceholder} value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="glow-btn w-full py-4 rounded-xl font-semibold text-black flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>{submitLabel}<ArrowRight size={18} /></>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}