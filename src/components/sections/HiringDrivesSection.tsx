"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";

const drives = [
  { company: "Infosys", role: "Software Engineer", location: "Pan India", date: "Apr 15, 2026", slots: 150, type: "Online", logo: "IN" },
  { company: "Wipro", role: "Associate Dev", location: "Noida", date: "Apr 18, 2026", slots: 80, type: "Offline", logo: "WI" },
  { company: "HCL Tech", role: "Full Stack Dev", location: "Hyderabad", date: "Apr 22, 2026", slots: 60, type: "Offline", logo: "HC" },
  { company: "Capgemini", role: "Data Analyst", location: "Pan India", date: "Apr 25, 2026", slots: 120, type: "Online", logo: "CA" },
  { company: "TCS", role: "ML Engineer", location: "Pune", date: "May 2, 2026", slots: 40, type: "Offline", logo: "TC" },
  { company: "Tech Mahindra", role: "Backend Dev", location: "Bangalore", date: "May 5, 2026", slots: 70, type: "Hybrid", logo: "TM" },
];

const process = [
  { step: "01", title: "Register for Free", desc: "Sign up and select the hiring drives you're eligible for." },
  { step: "02", title: "Skill Analysis", desc: "Take a quick online assessment to match your skills with openings." },
  { step: "03", title: "Mock Interview", desc: "Attend a practice round to sharpen your interview skills." },
  { step: "04", title: "Get Hired", desc: "Get shortlisted and receive your offer letter. Simple as that." },
];

const modeColors: Record<string, string> = {
  Online: "badge-blue",
  Offline: "badge-orange",
  Hybrid: "badge-green",
};

const logoGradients = [
  "linear-gradient(135deg,#2563eb,#4f46e5)",
  "linear-gradient(135deg,#16a34a,#0d9488)",
  "linear-gradient(135deg,#ea580c,#ef4444)",
  "linear-gradient(135deg,#7c3aed,#a855f7)",
  "linear-gradient(135deg,#0891b2,#2563eb)",
  "linear-gradient(135deg,#db2777,#f43f5e)",
];

export default function HiringDrivesSection() {
  return (
    <section id="jobs" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-tag" style={{ background: "rgba(22,163,74,0.08)", borderColor: "rgba(22,163,74,0.20)", color: "#16a34a" }}>
              <Briefcase size={12} /> Hiring Drives
            </span>
            <h2 className="font-bold text-4xl sm:text-5xl text-gray-900 mb-3">
              Attend <span className="text-gradient">FREE</span><br />Hiring Drives
            </h2>
            <p className="text-gray-500 text-lg max-w-lg">
              Already skilled? Get hired directly through our verified hiring drives. 60+ drives monthly. No fees ever.
            </p>
          </motion.div>
          <Link href="/jobs" className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm whitespace-nowrap">
            View All Jobs <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming drives */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Upcoming Hiring Drives
            </h3>
            <div className="space-y-3">
              {drives.map((drive, i) => (
                <motion.div
                  key={drive.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-4 card-hover group border border-gray-100"
                  style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: logoGradients[i % logoGradients.length] }}>
                    {drive.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-gray-900 text-sm">{drive.company}</span>
                      <span className={`badge text-[10px] py-0 px-2 ${modeColors[drive.type]}`}>{drive.type}</span>
                    </div>
                    <div className="text-xs text-gray-500">{drive.role}</div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar size={10} />{drive.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={10} />{drive.location}</span>
                      <span className="flex items-center gap-1"><Users size={10} />{drive.slots} seats</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process + Why */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5">How It Works</h3>
            <div className="space-y-4 mb-8">
              {process.map((p, i) => (
                <motion.div key={p.step}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                      {p.step}
                    </div>
                    {i < process.length - 1 && <div className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-transparent mt-1" />}
                  </div>
                  <div className="pb-2">
                    <div className="font-semibold text-gray-900 mb-1">{p.title}</div>
                    <div className="text-gray-500 text-sm">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why choose */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
              <h4 className="font-semibold text-gray-900 mb-4">Why Our Hiring Drives?</h4>
              {[
                "100% Free — No fees ever",
                "60+ drives every month",
                "Direct company interviews",
                "Pre-interview prep support",
                "Available online & offline",
                "Roles from ₹4L to ₹25L+",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
              <Link href="/jobs" className="mt-4 glow-btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm w-full">
                Browse All Openings <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}