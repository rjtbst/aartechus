"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: "🤝",
    title: "Staffing & Recruitment",
    desc: "Pre-vetted, job-ready candidates for contract & full-time roles across all work authorizations.",
    features: ["Contract", "Full-Time", "Enterprise", "Fortune 500"],
    href: "/it-services#staffing-recruitment",
    badge: "New",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Full-stack apps with React, Next.js & Node.js.",
    features: ["React / Next.js", "APIs", "SEO", "PWA"],
    href: "/it-services#web-development",
    badge: "Popular",
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Native & cross-platform mobile apps for iOS and Android.",
    features: ["Flutter", "React Native", "Publishing", "Push"],
    href: "/it-services#app-development",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    desc: "Intelligent automation, LLMs & custom ML systems.",
    features: ["LLMs", "Vision", "NLP", "Chatbots"],
    href: "/it-services#ai-solutions",
    badge: "Hot",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Intuitive interfaces that users love, from wireframes to design systems.",
    features: ["Figma", "Prototypes", "Design Systems", "User Research"],
    href: "/it-services#ui-ux-design",
  },
  {
    icon: "🚀",
    title: "SaaS Development",
    desc: "End-to-end SaaS product building for US startups and enterprises.",
    features: ["SaaS", "ERP/CRM", "APIs", "Scaling"],
    href: "/it-services#saas-development",
  },
  {
    icon: "💻",
    title: "Custom Software",
    desc: "Bespoke enterprise software, ERPs, CRMs, and legacy modernization.",
    features: ["Java / Python", "ERP/CRM", "APIs", "Modernization"],
    href: "/it-services#custom-software",
  },
];

export default function ITServicesSection() {
  return (
    <section className="section-gap bg-secondary/50">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            IT SERVICES
          </p>
          <h2 className="text-3xl md:text-[42px] font-display font-bold text-foreground leading-tight">
            Build World-Class Digital Products
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From startups to Fortune 500, we deliver production-grade software solutions across the US.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="block group h-full">
                <div className="bg-card rounded-2xl p-6 border border-border card-shadow hover-card-lift h-full">

                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{service.icon}</span>
                    {service.badge && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Ready to build something extraordinary?
          </h3>
          <p className="text-muted-foreground mb-6">
            Get a free consultation and project estimate.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact?type=project" className="px-6 py-3 rounded-xl bg-primary text-white font-semibold">
              Start a Project
            </Link>
            <Link href="/it-services" className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold">
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}