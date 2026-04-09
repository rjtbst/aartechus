"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Globe,
  Star,
  Package,
  Server,
  Database,
  Lock,
  Cpu,
  Layers,
  GitBranch,
  Clock,
} from "lucide-react";

import { servicesConfig } from "@/config/servicesConfig";

const techIcons = [
  { icon: Server, label: "AWS / Azure" },
  { icon: Database, label: "PostgreSQL" },
  { icon: GitBranch, label: "GitHub CI/CD" },
  { icon: Lock, label: "Security" },
  { icon: Cpu, label: "AI / ML" },
  { icon: Layers, label: "Microservices" },
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Package },
  { value: "50+", label: "Enterprise Clients", icon: Users },
  { value: "15+", label: "Countries Served", icon: Globe },
  { value: "4.9★", label: "Client Satisfaction", icon: Star },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-min free consultation to understand your requirements, goals, and timeline.",
  },
  {
    step: "02",
    title: "Proposal & Estimate",
    desc: "Detailed project proposal with tech stack, milestones, and transparent pricing within 48 hrs.",
  },
  {
    step: "03",
    title: "Design & Architecture",
    desc: "UI/UX wireframes, system architecture design, and team assignment.",
  },
  {
    step: "04",
    title: "Agile Development",
    desc: "2-week sprints with bi-weekly demos. Daily standups, Jira tracking, full transparency.",
  },
  {
    step: "05",
    title: "QA & Testing",
    desc: "Manual & automated testing, performance optimization, security review.",
  },
  {
    step: "06",
    title: "Launch & Support",
    desc: "Deployment, monitoring setup, team training, and ongoing support contract.",
  },
];

export default function ITServicesClient() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // ── Open accordion + scroll from URL hash ──────────────────────────────────
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const matched = servicesConfig.find((s) => s.slug === hash);
      if (!matched) return;

      setActiveService(matched.slug);

      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    };

    openFromHash();

    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">IT Services</span>
            <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-black mb-6">
              Production-Grade Software
              <br />
              <span className="text-gradient">Delivered on Time</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
              End-to-end software solutions for startups and enterprises. We
              bring your ideas to life with cutting-edge technology and
              battle-tested engineering.
            </p>
            <Link
              href="/contact?type=project"
              className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black text-base"
            >
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <s.icon size={24} className="text-primary mx-auto mb-2" />
              <div className="font-syne font-extrabold text-3xl text-black mb-1">
                {s.value}
              </div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services accordion */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne font-extrabold text-4xl text-black mb-3">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-gray-400">
              Click any service to see our full capabilities, deliverables, and
              case studies.
            </p>
          </div>

          <div className="space-y-4">
            {servicesConfig.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl border border-white/8 overflow-hidden card-hover cursor-pointer"
                id={service.slug}
                onClick={() =>
                  setActiveService(
                    activeService === service.slug ? null : service.slug
                  )
                }
              >
                {/* Header row */}
                <div className="flex items-center justify-between p-6 md:p-8">
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center flex-shrink-0 text-2xl`}
                    >
                      {service.emoji}
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-xl text-black">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-wrap gap-2">
                      {service.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-gray-400 border border-white/8"
                        >
                          {t}
                        </span>
                      ))}
                      {service.tech.length > 3 && (
                        <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-gray-500 border border-white/8">
                          +{service.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <motion.div
                      animate={{
                        rotate: activeService === service.slug ? 45 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xl transition-colors ${
                        activeService === service.slug
                          ? "bg-primary text-black"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      +
                    </motion.div>
                  </div>
                </div>

                {/* Expanded content */}
                {activeService === service.slug && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-white/8"
                  >
                    <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
                      {/* Description + Case Study */}
                      <div className="md:col-span-1">
                        <p className="text-black/50 leading-relaxed mb-5">
                          {service.description}
                        </p>
                        <div
                          className="p-4 rounded-xl border border-white/10"
                          style={{ background: `${service.color}22` }}
                        >
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Case Study
                          </div>
                          <div className="text-black font-semibold text-sm mb-1">
                            {service.caseStudy.client}
                          </div>
                          <div className="text-green-400 text-sm font-medium mb-1">
                            "{service.caseStudy.result}"
                          </div>
                          <div className="text-gray-500 text-xs flex items-center gap-1">
                            <Clock size={10} /> {service.caseStudy.time}
                          </div>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-black mb-3 text-sm uppercase tracking-wider">
                          What We Deliver
                        </h4>
                        <div className="space-y-2">
                          {service.deliverables.map((d) => (
                            <div
                              key={d}
                              className="flex items-center gap-2 text-sm text-black/50"
                            >
                              <CheckCircle2
                                size={14}
                                className={service.textColor}
                              />
                              {d}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech + CTA */}
                      <div>
                        <h4 className="font-semibold text-black mb-3 text-sm uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-black/50 border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/contact?type=project"
                          className="text-black px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all w-fit"
                          style={{ background: service.color }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Get a Quote <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-bg-primary to-[#0e0e1c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne font-extrabold text-4xl text-black mb-3">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-gray-400">
              Our proven 6-step delivery process, refined across 500+ projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 card-hover"
              >
                <div className="text-4xl font-syne font-extrabold text-primary/70 mb-3">
                  {p.step}
                </div>
                <h3 className="font-syne font-semibold text-black mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8">
          <p className="font-syne font-extrabold text-4xl pb-4 text-primary">
            Technologies We Master
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center marquee gap-10">
            {[
              "React","Next.js","Node.js","Python","Go","Java","AWS","GCP",
              "Azure","Docker","Kubernetes","TensorFlow","PyTorch","Flutter",
              "PostgreSQL","MongoDB","Redis","Kafka","GraphQL","TypeScript",
              "React","Next.js","Node.js","Python","Go","Java","AWS","GCP",
              "Azure","Docker","Kubernetes","TensorFlow","PyTorch","Flutter",
              "PostgreSQL","MongoDB","Redis","Kafka","GraphQL","TypeScript",
            ].map((t, i) => (
              <span
                key={i}
                className="text-gray-700 font-grotesk font-semibold text-lg whitespace-nowrap hover:text-gray-400 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass rounded-3xl p-10 md:p-14 text-center border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5" />
            <div className="relative">
              <TrendingUp size={40} className="text-primary mx-auto mb-5" />
              <h2 className="font-syne font-extrabold text-4xl text-black mb-4">
                Ready to build something{" "}
                <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                Get a free 30-minute consultation with our senior engineers. No
                sales pitch — just honest technical guidance.
              </p>
              <Link
                href="/contact?type=project"
                className="glow-btn inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-black text-base"
              >
                Schedule Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}