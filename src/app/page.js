"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Star,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import AnimatedSection, { RollingCounter } from "@/components/AnimatedSection";

import CoursesSection from "@/components/sections/CoursesSection";
import ITServicesSection from "@/components/sections/ITServicesSection";
import HiringDrivesSection from "@/components/sections/HiringDrivesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import HowItWorks from "@/components/sections/HowItWorks";

const Hero = () => (
  <section className="pt-[54px]">
    <div className="container-main py-10 md:py-10">
      <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
        {/* Left side */}
        <div className="pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-8"
          >
            <div className="flex -space-x-2">
              {["A","S","R","M"].map((l, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold border-2 border-background">{l}</div>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">35k+ Happy Students</span>
          </motion.div>

          {/* ── UPDATED HEADLINE ── */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] md:text-[52px] lg:text-[60px] font-display font-bold leading-[1.1] text-foreground"
          >
            Build Your <span className="text-primary">Career.</span> Get Skilled.{" "}
            Get <span className="text-primary">Hired</span> — Without Paying Upfront
          </motion.h1>

          {/* ── UPDATED SUBTEXT ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-lg"
          >
            We provide end-to-end employment solutions — from technical training
            and career development to staffing and recruitment — designed to
            connect you with real opportunities at leading companies.
          </motion.p>

          {/* ── NEW: Bullet points ── */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 space-y-2"
          >
            {[
              "Learn in-demand tech skills",
              "Train for real job roles",
              "Access opportunities with top-tier employers",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-6 flex-wrap"
          >
            {[
              { icon: "🏆", text: "LinkedIn Top 20 Startup" },
              { icon: "🚀", text: "Y Combinator Backed" },
              { icon: "🎓", text: "IIT Delhi Alumni Founded" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-muted-foreground/60">
                <span className="text-lg">{b.icon}</span>
                <span className="text-xs font-medium">{b.text}</span>
              </div>
            ))}
          </motion.div>

          {/* ── NEW: Disclaimer line ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xs text-muted-foreground/50 max-w-md leading-relaxed"
          >
            No upfront tuition for eligible candidates. Flexible financing options
            including income-based payment plans available for qualified applicants.
            Terms apply.
          </motion.p>
        </div>

        {/* Right side - Cards — unchanged */}
        <div className="space-y-10 py-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/courses" className="block group">
              <div className="gradient-courses rounded-2xl p-6 relative overflow-hidden h-[200px] flex flex-col justify-between">
                <div className="relative z-10">
                  <p className="text-primary-foreground font-display font-bold text-lg">COURSES</p>
                  <p className="text-primary-foreground/80 text-sm mt-1 max-w-[200px]">
                    Industry Ready Training to get you placed!
                  </p>
                </div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 bg-background text-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-background/90 transition-colors">
                    View Courses <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <Image
                  src="/images/hero-courses-person.jpg"
                  alt="Student learning coding"
                  width={200}
                  height={200}
                  className="absolute right-0 bottom-0 h-full w-auto object-cover object-top opacity-90 rounded-r-2xl"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link href="/it-services" className="block group">
              <div className="gradient-jobs rounded-2xl p-6 relative overflow-hidden h-[200px] flex flex-col justify-between">
                <div className="relative z-10">
                  <p className="text-primary-foreground font-display font-bold text-lg">IT SERVICES</p>
                  <p className="text-primary-foreground/80 text-sm mt-1 max-w-[220px]">
                    Build world-class products with our expert team!
                  </p>
                </div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 bg-background text-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-background/90 transition-colors">
                    View Services <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <Image
                  src="/images/hero-jobs-person.jpg"
                  alt="Professional developer"
                  width={200}
                  height={200}
                  className="absolute right-0 bottom-0 h-full w-auto object-cover object-top opacity-90 rounded-r-2xl"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════ IMPACT STATS ═══════════════════════ */
const ImpactStats = () => (
  <section className="gradient-impact py-12">
    <div className="container-main">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-1"
      >
        Impact Created
      </motion.p>
      <div className="w-8 h-[2px] bg-primary-foreground/40 mx-auto mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-primary-foreground/20">
        <RollingCounter end={2000} suffix=" +" label="Students Placed" />
        <RollingCounter end={41} suffix=" LPA" label="Highest Salary" />
        <RollingCounter end={500} suffix=" +" label="Partner Companies" />
        <RollingCounter end={7} suffix=".4 LPA" label="Average Salary" />
      </div>
    </div>
  </section>
);



/* ═══════════════════════ TESTIMONIALS (Before/After) ═══════════════════════ */
const testimonials = [
  { name: "Sandeep Singh", before: "Chemical Engineer", after: "Software Engineer", quote: "NexaLearn trained me and helped me improve my technical skills perfectly and land the job I had dreamed of!", avatar: "SS" },
  { name: "Kabita Mondal", before: "M.sc in CS", after: "Application Developer", quote: "Low CGPA was a constant worry. NexaLearn made me realise the importance of real-time projects. In just 5 months, I landed a great job!", avatar: "KM" },
  { name: "Akash Ingoley", before: "Gap Year", after: "Software Developer", quote: "It's never too late to change your path. I was an Automobile Engineering student who wanted to switch to IT and NexaLearn made it possible.", avatar: "AI" },
  { name: "Pradyot Verma", before: "Mechanical Engineer", after: "Software Developer", quote: "As a mechanical engineer, I used to think it was impossible to land a tech role. But then NexaLearn happened!", avatar: "PV" },
  { name: "Namrata Rathore", before: "Biotech Engineering", after: "Software Developer", quote: "Coming from a Biotech background, NexaLearn helped me learn Data Structures and got me placed with a reputed company.", avatar: "NR" },
  { name: "Meenakshi G", before: "Btech CSE", after: "Software Engineer", quote: "The live classes, daily assignments & doubt sessions made sure everything was crystal clear. The mock interviews are excellent preparation.", avatar: "MG" },
];

const TestimonialSection = () => {
  const [idx, setIdx] = useState(0);
  const visible = testimonials.slice(idx, idx + 3);

  return (
    <section className="section-gap bg-background">
      <div className="container-main">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-[42px] font-display font-bold text-foreground leading-tight">
            Those Who <span className="text-primary">Acted</span> And Transformed
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-6 card-shadow hover-card-lift h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm font-display">{t.avatar}</div>
                  <h3 className="font-display font-bold text-foreground">{t.name}</h3>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 bg-secondary rounded-xl p-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Before</p>
                    <p className="text-sm font-medium text-foreground">{t.before}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 bg-primary/5 border border-primary/20 rounded-xl p-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">After</p>
                    <p className="text-sm font-medium text-primary">{t.after}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setIdx(Math.max(0, idx - 3))}
            disabled={idx === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIdx(Math.min(testimonials.length - 3, idx + 3))}
            disabled={idx >= testimonials.length - 3}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ CTA ═══════════════════════ */
const FinalCTA = () => (
  <section className="py-16">
    <div className="container-main">
      <AnimatedSection>
        <div className="gradient-impact rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-[42px] font-display font-bold text-primary-foreground leading-tight mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
             Start with no upfront tuition (if eligible). Choose flexible or income-based payment options. Build your career with real opportunities
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/courses" className="h-12 px-8 rounded-xl bg-background text-foreground text-sm font-semibold flex items-center gap-2 hover:bg-background/90 transition-colors shadow-lg">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="h-12 px-8 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:bg-primary-foreground/10 transition-colors">
                Request Callback
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* PAGE */
export default function Page() {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <HowItWorks />
      <TestimonialSection />
      <CoursesSection />
      <ITServicesSection />
      <HiringDrivesSection/>
      {/* <CentersSection/> */}
      <FAQSection />
      <CTASection />
      <FinalCTA />
    </div>
  );
}