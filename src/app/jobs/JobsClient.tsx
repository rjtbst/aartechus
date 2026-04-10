"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, Calendar, Users, ArrowRight, Briefcase, Filter, CheckCircle2, TrendingUp, Star } from "lucide-react";

const jobs = [
  { id: 1, company: "Amazon", role: "Software Development Engineer", location: "Bangalore", type: "Full Time", package: "₹18–28 LPA", deadline: "Apr 20, 2026", skills: ["Java", "DSA", "System Design"], mode: "Online", seats: 50 },
  { id: 2, company: "Infosys", role: "Systems Engineer", location: "Pan India", type: "Full Time", package: "₹4–8 LPA", deadline: "Apr 22, 2026", skills: ["Java", "SQL", "Agile"], mode: "Online", seats: 200 },
  { id: 3, company: "Wipro", role: "Associate – Full Stack", location: "Noida", type: "Full Time", package: "₹5–9 LPA", deadline: "Apr 25, 2026", skills: ["React", "Node.js", "MySQL"], mode: "Online", seats: 80 },
  { id: 4, company: "Paytm", role: "Data Analyst", location: "Gurgaon", type: "Full Time", package: "₹9–14 LPA", deadline: "Apr 28, 2026", skills: ["Python", "SQL", "Power BI"], mode: "Hybrid", seats: 25 },
  { id: 5, company: "TCS", role: "ML Engineer Trainee", location: "Pune", type: "Full Time", package: "₹7–12 LPA", deadline: "May 2, 2026", skills: ["Python", "TensorFlow", "SQL"], mode: "Online", seats: 40 },
  { id: 6, company: "HCL Technologies", role: "React Developer", location: "Hyderabad", type: "Full Time", package: "₹6–11 LPA", deadline: "May 5, 2026", skills: ["React", "TypeScript", "Git"], mode: "Hybrid", seats: 60 },
  { id: 7, company: "Capgemini", role: "Data Science Associate", location: "Pan India", type: "Full Time", package: "₹8–13 LPA", deadline: "May 8, 2026", skills: ["Python", "ML", "Statistics"], mode: "Online", seats: 100 },
  { id: 8, company: "Tech Mahindra", role: "Backend Developer", location: "Bangalore", type: "Full Time", package: "₹7–12 LPA", deadline: "May 12, 2026", skills: ["Java", "Spring Boot", "Microservices"], mode: "Online", seats: 35 },
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

export default function JobsClient() {
  const [search, setSearch] = useState("");
  const [modeFilter, setModeFilter] = useState("All");

  const filtered = jobs.filter((j) => {
    const matchSearch = !search || j.role.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()) || j.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchMode = modeFilter === "All" || j.mode === modeFilter;
    return matchSearch && matchMode;
  });

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <section className="relative py-12 mesh-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-tag" style={{ background: "rgba(22,163,74,0.08)", borderColor: "rgba(22,163,74,0.20)", color: "#16a34a" }}>
              <Briefcase size={12} /> Hiring Drives
            </span>
            <h1 className="font-bold text-5xl sm:text-6xl text-gray-900 mb-5">
              Get Hired at <span className="text-gradient">Top Companies</span><br />for Free
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10">
              Already skilled? Skip the job hunt. Attend our free verified hiring drives and get direct company interviews.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative mb-6">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search roles, companies, skills..."
                value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-base" />
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { v: "60+", l: "Drives/month", c: "text-violet-600" },
                { v: "200+", l: "Partner companies", c: "text-green-600" },
                { v: "₹30 LPA", l: "Highest offer", c: "text-orange-600" },
                { v: "100% Free", l: "For all candidates", c: "text-blue-600" },
              ].map((s) => (
                <span key={s.l} className="flex items-center gap-1">
                  <strong className={s.c}>{s.v}</strong>
                  <span className="text-gray-400">{s.l}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Jobs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <Filter size={14} className="text-gray-400" />
            {["All", "Online", "Hybrid"].map((m) => (
              <button key={m} onClick={() => setModeFilter(m)}
                className={`tab-pill ${modeFilter === m ? "active" : ""}`}>{m}</button>
            ))}
            <span className="ml-auto text-sm text-gray-400">{filtered.length} openings</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((job, i) => (
              <motion.div key={job.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: logoGradients[i % logoGradients.length] }}>
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.role}</h3>
                      <div className="text-gray-500 text-sm">{job.company}</div>
                    </div>
                  </div>
                  <span className={`badge ${modeColors[job.mode]}`}>{job.mode}</span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} />Deadline: {job.deadline}</span>
                  <span className="flex items-center gap-1"><Users size={11} />{job.seats} seats</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 border border-gray-200 text-gray-600">{s}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-green-600 font-semibold text-sm">{job.package}</div>
                    <div className="text-gray-400 text-xs">{job.type}</div>
                  </div>
                  {/* <button className="glow-btn px-4 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-1.5">
                    Apply Now <ArrowRight size={13} />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p>No openings match your search. Try different keywords.</p>
            </div>
          )}
        </div>
      </section>

      {/* How hiring drives work */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-3">How Hiring Drives Work</h2>
            <p className="text-gray-500">From registration to offer letter — here&apos;s the journey.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: "Register", desc: "Sign up for free and select drives you qualify for.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Star, title: "Skill Test", desc: "Quick online assessment to match you with the right companies.", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Users, title: "Mock Round", desc: "Practice interview with our mentors before the real thing.", color: "text-violet-600", bg: "bg-violet-50" },
              { icon: TrendingUp, title: "Get Hired!", desc: "Company interviews. Receive offer letters directly.", color: "text-green-600", bg: "bg-green-50" },
            ].map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-4`}>
                  <s.icon size={22} className={s.color} />
                </div>
                <div className="text-2xl font-bold text-blue-300 mb-2">0{i + 1}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact?type=callback" className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white">
              Register for Hiring Drives <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}