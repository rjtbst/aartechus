"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

type FaqCategory = "Courses" | "Learning" | "Placements" | "IT Services" | "Payment";

const faqs: Record<FaqCategory, { q: string; a: string }[]> = {
  Courses: [
    { q: "What courses does AArtechus offer?", a: "We offer Full Stack Development (Java & MERN with Gen AI), Data Science & AI, and Data Analytics courses. All are available in Live Online and Offline modes. Some courses also have Self-Paced options." },
    { q: "Is there any eligibility criteria to enroll?", a: "There is no strict eligibility. Our courses are designed for students and working professionals from any background. We start from fundamentals and build up progressively." },
    { q: "How long are the courses?", a: "Our Full Stack and Data Science courses are 8 months long. Data Analytics is 6 months. We also offer intensive bootcamp formats for working professionals." },
    { q: "Can I switch from one course to another?", a: "Yes, within the first 2 weeks of starting, you can switch to a different course with no additional charges, subject to availability." },
  ],
  Learning: [
    { q: "What does the learning experience look like?", a: "You get live interactive classes 5 days/week (for online courses), recorded sessions, coding labs, weekly assignments, live doubt sessions, peer learning groups, and 1:1 mentor calls." },
    { q: "Are the sessions recorded?", a: "Yes! All live sessions are recorded and available within 24 hours. You can rewatch them as many times as you want throughout your course duration." },
    { q: "What tools and platforms will I learn?", a: "Depending on your course: VSCode, IntelliJ, Docker, AWS, Jupyter, TensorFlow, PyTorch, Power BI, Tableau, MongoDB, MySQL, GitHub, Jira, and more." },
  ],
  Placements: [
    { q: "Does AArtechus guarantee placement?", a: "We offer a placement assistance program with dedicated career counselors, resume building, mock interviews, and 60+ hiring drives per month. While we can't guarantee a job, our 90%+ placement rate speaks for itself." },
    { q: "Which companies hire from AArtechus?", a: "Amazon, Salesforce, Walmart, Flipkart, Paytm, Infosys, TCS, Wipro, HCL, Capgemini, Accenture, and 200+ more partner companies hire directly from our talent pool." },
    { q: "What is the average salary package?", a: "Our students have received offers ranging from ₹6 LPA to ₹30 LPA, with an average of ₹12 LPA. Freshers typically start at ₹6–10 LPA, while experienced professionals often see 2–3x hikes." },
    { q: "How do the hiring drives work?", a: "We host 60+ hiring drives monthly — both online and at our skill centres. You go through a skill analysis, mock interview, and then get shortlisted by companies. The entire process is free for students." },
  ],
  "IT Services": [
    { q: "What IT services does AArtechus provide?", a: "We offer Web Development, Mobile App Development, Cloud & DevOps, AI/ML Solutions, Cybersecurity consulting, Staffing & Recruitment, and Custom Software Development for startups and enterprises globally." },
    { q: "How do I get a project estimate?", a: "Simply fill out our project inquiry form or schedule a free 30-minute consultation call. We'll review your requirements and provide a detailed estimate within 48 hours." },
    { q: "What is the typical project timeline?", a: "Small projects take 4–8 weeks. Medium to large projects range from 3–6 months. We follow agile methodology with bi-weekly demos and clear milestone tracking." },
  ],
  // ── NEW: Payment tab ──
  Payment: [
    { q: "Is the income-based payment option a loan?", a: "No. The income-based payment option (ISA-style) is not a loan. You pay a fixed percentage of your income only after securing qualifying employment, and only once your earnings exceed a defined income threshold. No job, no payment." },
    { q: "Is placement guaranteed?", a: "We provide access to opportunities through employer partnerships and our 60+ monthly hiring drives. Placement is not guaranteed, but 90%+ of eligible graduates secure roles through our network within 3 months of completing their program." },
    { q: "What if I don't get a job after completing the course?", a: "Under the income-based payment option, payments only begin after you start earning above the defined income threshold. If you don't reach that threshold, payment obligations do not apply. Not all applicants qualify for all payment options — terms vary by program and agreement." },
    { q: "What other payment options are available?", a: "We offer three options: (1) No upfront tuition for eligible candidates, (2) Flexible financing — structured repayment up to the full program cost, and (3) Income-based payment option (ISA-style). Our counselors will help you choose the best fit during your free consultation." },
  ],
};

const categories: FaqCategory[] = ["Courses", "Learning", "Placements", "IT Services", "Payment"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("Courses");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-tag">FAQ</span>
            <h2 className="font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
              Have any <span className="text-gradient">Doubts?</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Work hard with us, with dedication and commitment, and watch multiple opportunities transform your future!
            </p>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
              className={`tab-pill ${activeCategory === cat ? "active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="space-y-3">
            {faqs[activeCategory].map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === i ? "border-blue-200 shadow-sm" : "border-gray-100"}`}
                style={{ boxShadow: openIndex === i ? "0 2px 16px rgba(37,99,235,0.08)" : "0 1px 4px rgba(0,0,0,0.03)" }}>
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${openIndex === i ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-2xl border border-blue-100"
          style={{ background: "linear-gradient(135deg,#f0f4ff,#faf8ff)" }}>
          <MessageCircle size={32} className="text-blue-600 mx-auto mb-3" />
          <h3 className="font-bold text-xl text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-500 text-sm mb-5">Our team is available 7 days a week to answer your questions.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="glow-btn px-6 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2">
              Talk to Counselor <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/918595563221" className="outline-btn px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}