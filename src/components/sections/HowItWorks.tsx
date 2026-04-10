import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div>
        {/* How It Works */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-14">
      <span className="section-tag">Simple & Transparent</span>
      <h2 className="font-bold text-4xl text-gray-900 mb-3 mt-3">
        How It <span className="text-gradient">Works</span>
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto">
        From your first application to your first paycheck — here's exactly what to expect at every step.
      </p>
    </div>

    <div className="relative max-w-5xl mx-auto">
      {/* Connector line (desktop) */}
      <div className="hidden lg:block absolute top-10 left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />

      {/* Steps row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
        {[
          {
            step: "01",
            title: "Apply & Qualify",
            desc: "Fill a quick form. Our counsellors review your profile and confirm eligibility within 24 hrs.",
            color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
            iconBg: "bg-purple-50",
            iconText: "text-purple-600",
          },
          {
            step: "02",
            title: "Review & Choose Payment",
            desc: "Pick upfront, EMI, or ISA (Income Share Agreement) — zero cost to start if you choose ISA.",
            color: "linear-gradient(135deg,#2563eb,#0891b2)",
            iconBg: "bg-blue-50",
            iconText: "text-blue-600",
          },
          {
            step: "03",
            title: "Start Training",
            desc: "Live classes, hands-on projects, and 1-on-1 mentorship begin. Learn at industry pace.",
            color: "linear-gradient(135deg,#16a34a,#10b981)",
            iconBg: "bg-green-50",
            iconText: "text-green-600",
          },
          {
            step: "04",
            title: "Career Preparation",
            desc: "Resume building, mock interviews, LinkedIn optimisation, and soft-skills coaching.",
            color: "linear-gradient(135deg,#ea580c,#ef4444)",
            iconBg: "bg-orange-50",
            iconText: "text-orange-600",
          },
          {
            step: "05",
            title: "Access Job Opportunities",
            desc: "Get referred to 200+ hiring partners. Dedicated placement support until you're placed.",
            color: "linear-gradient(135deg,#db2777,#f43f5e)",
            iconBg: "bg-pink-50",
            iconText: "text-pink-600",
          },
          {
            step: "06",
            title: "Repayment Begins",
            desc: "ISA repayments start only after you land a job above the income threshold. No job = no payment.",
            color: "linear-gradient(135deg,#ca8a04,#f59e0b)",
            iconBg: "bg-amber-50",
            iconText: "text-amber-600",
          },
        ].map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            {/* Circle badge */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 shadow-md flex-shrink-0"
              style={{ background: item.color }}
            >
              {item.step}
            </div>

            {/* Card */}
            <div
              className="bg-white rounded-2xl p-5 flex-1 border border-gray-100 w-full card-hover"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ISA callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <Zap size={18} className="text-blue-600" />
        </div>
        <div>
          <p className="text-blue-900 font-semibold text-sm mb-0.5">
            ISA — Pay only after you get placed
          </p>
          <p className="text-blue-600 text-sm leading-relaxed">
            Our Income Share Agreement means you pay nothing upfront. Repayments are capped, time-bound, and only kick in once you&apos;re earning above the threshold. Zero risk, maximum upside.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 glow-btn px-5 py-2.5 rounded-xl font-semibold text-white text-sm flex items-center gap-2 whitespace-nowrap"
        >
          Get Started <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HowItWorks