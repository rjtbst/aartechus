"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Zap,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import HowItWorks from "@/components/sections/HowItWorks";

const team = [
  {
    name: "Aarav Sharma",
    role: "Co-Founder & CEO",
    bg: ", Ex-Google",
    color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
  },
  {
    name: "Priya Verma",
    role: "Co-Founder & CTO",
    bg: " Ex-Amazon",
    color: "linear-gradient(135deg,#2563eb,#0891b2)",
  },
  {
    name: "Rohit Kapoor",
    role: "VP — Education",
    bg: " Ex-Byju's",
    color: "linear-gradient(135deg,#16a34a,#10b981)",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcome-Focused",
    desc: "We measure success by your career transformation, not just course completion rates.",
  },
  {
    icon: Heart,
    title: "Student-First",
    desc: "Every decision we make is filtered through one question: does this help our students more?",
  },
  {
    icon: Lightbulb,
    title: "Always Innovating",
    desc: "We continuously update our curriculum and products to stay ahead of industry trends.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    desc: "1,000+ alumni helping each other grow. Our community is our biggest asset.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    desc: "We build for US but think globally. 15+ countries, world-class quality.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    desc: "Startups can't afford slow decision-making. We ship, iterate, and improve constantly.",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Founded in the US",
    desc: "Started with a mission to bridge the gap between tech education and real industry hiring in the US market.",
  },
  {
    year: "2015",
    title: "First 200 Placements",
    desc: "Placed 200+ students at US tech companies. Established partnerships with Fortune 500 recruiters.",
  },
  {
    year: "2017",
    title: "IT Services Launched",
    desc: "Expanded into premium IT services, delivering software solutions for US startups and enterprises.",
  },
  {
    year: "2019",
    title: "Y Combinator Backed",
    desc: "Backed by Y Combinator. Scaled operations nationally with remote-first delivery across the US.",
  },
  {
    year: "2021",
    title: "Gen AI Curriculum",
    desc: "Launched the first Gen AI integrated Full Stack and Data Science bootcamps in the US market.",
  },
  {
    year: "2023",
    title: "500+ Alumni",
    desc: "Crossed 1,000 alumni placed at companies like Amazon, Google, Microsoft, Salesforce, and Netflix.",
  },
  {
    year: "2025",
    title: "1,000+ Alumni",
    desc: "300+ IT projects delivered. 100+ US hiring partners. 15+ countries served.",
  },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="section-tag">About AArtechus</span>
              <h1 className="font-bold text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
                We&apos;re on a Mission to
                <br />
                <span className="text-gradient">Democratize Tech</span>
              </h1>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                AArtechus is US&apos;s next-gen tech education and IT services
                company, focused with a singular mission: make world-class tech
                education accessible to everyone and deliver exceptional IT
                solutions globally.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We believe talent is equally distributed, but opportunity is
                not. AArtechus bridges this gap by providing structured
                training, mentorship, and placement support — turning ambition
                into careers.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/courses"
                  className="glow-btn px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                >
                  Explore Courses <ArrowRight size={16} />
                </Link>
                <Link
                  href="/it-services"
                  className="outline-btn px-6 py-3 rounded-xl font-medium"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            {/* Stats visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  value: "30K+",
                  label: "Students Trained",
                  icon: Users,
                  color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                },
                {
                  value: "500+",
                  label: "IT Projects",
                  icon: Award,
                  color: "linear-gradient(135deg,#ea580c,#ef4444)",
                },
                {
                  value: "200+",
                  label: "Hiring Partners",
                  icon: TrendingUp,
                  color: "linear-gradient(135deg,#16a34a,#10b981)",
                },
                {
                  value: "15+",
                  label: "Countries",
                  icon: Globe,
                  color: "linear-gradient(135deg,#2563eb,#0891b2)",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-100"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: s.color }}
                  >
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div className="number-stat text-3xl font-extrabold mb-1">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <HowItWorks />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-100",
                // ── UPDATED: mission text from doc ──
                text: "To empower individuals with the skills, confidence, and opportunities needed to build successful careers in the tech industry.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "text-orange-600",
                bg: "bg-orange-50",
                border: "border-orange-100",
                text: "To become US's most trusted tech education and IT services company — where students transform careers and businesses transform with technology.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-3xl p-8 border ${item.border}`}
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}
                >
                  <item.icon size={26} className={item.color} />
                </div>
                <h2 className="font-bold text-2xl text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-3">
              Our <span className="text-gradient">Core Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 card-hover border border-gray-100"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-bold text-4xl text-gray-900 mb-3">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6 pl-14 relative"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-bold">
                      {m.year.slice(2)}
                    </span>
                  </div>
                  <div
                    className="bg-white rounded-2xl p-5 flex-1 border border-gray-100"
                    style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-600 font-bold">{m.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-3">
              The <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We&apos;re a diverse group of ex-FAANG engineers, and passionate
              educators — united by the mission to democratize tech.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-100"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                  style={{ background: member.color }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs">{member.bg}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">
            Backed By & Recognised As
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Y Combinator W21",
              "LinkedIn Top 20 Startups",
              ,
              "NASSCOM Emerging Company",
              "US's Top EdTech 2024",
            ].map((badge) => (
              <span key={badge} className="badge badge-blue">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
