"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Clock, Users, Star, ArrowRight, Wifi, Monitor, Zap } from "lucide-react";

// ── Config import — single source of truth ────────────────────────────────────
import {
  coursesConfig,
  courseCategories,
  courseModeShortLabels,
  getCoursesByCategory,
  type CourseMode,
} from "@/config/coursesConfig";

// Mode icons (display-only, lives here not in config)
const modeIcons: Record<CourseMode, React.ReactNode> = {
  live: <Wifi size={12} />,
  offline: <Users size={12} />,
  "self-paced": <Monitor size={12} />,
};

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = getCoursesByCategory(activeCategory);

  return (
    <section className="section-gap bg-background">
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            COURSES
          </p>
          <h2 className="text-3xl md:text-[42px] font-display font-bold text-foreground">
            Offline, Live & Self-Paced Courses
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Industry-ready training with placement support.
          </p>
        </div>

        {/* Category tabs — driven by courseCategories from config */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards — each field pulled from coursesConfig */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6"
          >
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                // className="w-full max-w-md mx-auto"
              >
                <Link href={course.href} className="block group h-full">
                  <div
                    className={`${course.cardBg} bg-card border border-border rounded-2xl p-4 hover-card-lift h-full flex flex-col`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl">
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground text-lg">
                            {course.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {course.subtitle}
                          </p>
                        </div>
                      </div>
                      {course.badge && (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={14} /> {course.students}
                      </span>
                      <span className="flex items-center gap-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        {course.rating}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-col gap-2 mb-5">
                      {course.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Zap className="w-4 h-4 text-primary" />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Modes */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.modes.map((mode) => (
                        <span
                          key={mode}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                        >
                          {modeIcons[mode]} {courseModeShortLabels[mode]}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <span className="flex items-center justify-between text-sm font-semibold text-primary group-hover:translate-x-1 transition">
                        View Program
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}