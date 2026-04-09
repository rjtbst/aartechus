"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner"; // ← add
import { Phone, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const FORMSPREE_ID = "mdapvpqr"; 
// ─────────────────────────────────────────────────────────────────────────────

export default function CTASection() {
  const [form, setForm]       = useState({ name: "", phone: "", course: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]    = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending your request…");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Request received! Our counselor will call you in 30 mins.", {
          id: toastId,
          description: "Check your inbox for a confirmation.",
        });
        setSubmitted(true);
      } else {
        const data = await res.json();
        toast.error("Submission failed. Please try again.", {
          id: toastId,
          description: data?.error ?? "Server error",
        });
      }
    } catch {
      toast.error("Network error. Check your connection.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // ── JSX is 100% unchanged from your original ─────────────────────────────
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100"
          style={{ boxShadow: "0 8px 48px rgba(37,99,235,0.08), 0 2px 16px rgba(0,0,0,0.04)" }}>
          <div className="h-1.5" style={{ background: "linear-gradient(to right,#2563eb,#7c3aed,#a855f7)" }} />

          <div className="p-8 md:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — unchanged */}
              <div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles size={16} className="text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Free Consultation</span>
                  </div>
                  <h2 className="font-bold text-4xl sm:text-5xl text-gray-900 mb-5 leading-tight">
                    Start Your<br /><span className="text-gradient">Journey Today</span>
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    Request a free callback from our expert counselors. Get personalized course recommendations and career roadmap — at zero cost.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Free 1:1 career counseling session",
                      "Personalized course recommendation",
                      "EMI options from ₹0 down payment",
                      "Scholarship assessment available",
                      "No spam — we respect your privacy",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Phone size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Call us directly</div>
                      <a href="tel:+918595563221" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">+91 85955 63221</a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                      <div className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 size={36} className="text-green-500" />
                      </div>
                    </motion.div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">Request Received!</h3>
                    <p className="text-gray-500">Our counselor will call you within 30 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                      <input type="text" placeholder="Enter your full name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Phone Number *</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full px-4 py-3 rounded-xl text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Email Address</label>
                      <input type="email" placeholder="your@email.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Interested In</label>
                      <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm">
                        <option value="">Select a course / service</option>
                        <option>Java Full Stack Development</option>
                        <option>MERN Full Stack Development</option>
                        <option>Data Science & AI</option>
                        <option>Data Analytics</option>
                        <option>Web Development (IT Service)</option>
                        <option>Mobile App Development</option>
                        <option>AI / ML Solutions</option>
                        <option>Cloud & DevOps</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button type="submit" disabled={loading}
                      className="glow-btn w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>Request Free Callback<ArrowRight size={18} /></>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}