"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Filter,
  Code2,
  Wifi,
  Monitor,
} from "lucide-react";

// ── Config import — single source of truth ────────────────────────────────────
import {
  coursesConfig,
  courseCategories,
  courseModeLabels,
  type CourseMode,
} from "@/config/coursesConfig";

// ─── Filter helpers ───────────────────────────────────────────────────────────

// Tab labels for mode filter (All Modes + each CourseMode label)
const modeFilterOptions = [
  "All Modes",
  ...Object.values(courseModeLabels),
] as const;

// Category filters — derived from config (strip "All" prefix already included)
const categoryFilters = courseCategories; // ["All", "Full Stack", "Data"]

export default function CoursesPageClient() {
  const [category, setCategory] = useState("All");
  const [mode, setMode] = useState("All Modes");

  const filtered = coursesConfig.filter((c) => {
    const catMatch = category === "All" || c.category === category;
    const modeMatch =
      mode === "All Modes" ||
      c.modes.some((m) => courseModeLabels[m] === mode);
    return catMatch && modeMatch;
  });

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              <Code2 size={12} /> Our Courses
            </span>
            <h1 className="font-bold text-5xl sm:text-6xl text-gray-900 mb-5">
              Industry-Ready Training
              <br />
              <span className="text-gradient">to Get You Placed</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10">
              Choose from Live Online, or Self-Paced learning. All
              courses include placement assistance and 60+ hiring drives every
              month.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: "35,000+ Students", color: "text-violet-600" },
                { label: "₹30 LPA Highest Package", color: "text-orange-600" },
                { label: "200+ Hiring Partners", color: "text-green-600" },
                { label: "4.9★ Average Rating", color: "text-amber-500" },
              ].map((s) => (
                <div key={s.label} className={`font-semibold ${s.color}`}>
                  {s.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-gray-400 text-sm mr-2">
            <Filter size={14} /> Filter:
          </div>

          {/* Category filters from config */}
          {categoryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setCategory(f)}
              className={`tab-pill ${category === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}

          <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block" />

          {/* Mode filters derived from config labels */}
          {modeFilterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setMode(f)}
              className={`tab-pill ${mode === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}

          <span className="ml-auto text-sm text-gray-400">
            {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>
      </section>

      {/* Course cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={category + mode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 group card-hover"
                  style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
                >
                  {/* Top gradient bar */}
                  <div className="h-1.5" style={{ background: course.color }} />

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                          style={{ background: course.color }}
                        >
                          {course.icon}
                        </div>
                        <div>
                          <h2 className="font-bold text-xl text-gray-900">
                            {course.title}
                          </h2>
                          <div className="text-gray-500 text-sm">
                            {course.subtitle}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {course.level}
                          </div>
                        </div>
                      </div>
                      {course.badge && (
                        <span className={`badge ${course.badgeColor}`}>
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-5 mb-5 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={14} />
                        {course.students}
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        {course.rating} ({course.reviews} reviews)
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-600 border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {course.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-1.5 text-sm text-gray-600"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-green-500 flex-shrink-0"
                          />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Modes */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.modes.map((m) => (
                        <span
                          key={m}
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-600"
                        >
                          {m === "live" ? (
                            <Wifi size={11} />
                          ) : m === "self-paced" ? (
                            <Monitor size={11} />
                          ) : (
                            <Users size={11} />
                          )}
                          {courseModeLabels[m]}
                        </span>
                      ))}
                    </div>

                    {/* Pricing + CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div>
                        <div className="font-extrabold text-2xl text-gray-900">
                          {course.fee}
                        </div>
                        <div className="text-xs text-gray-400">
                          or {course.emi} EMI
                        </div>
                      </div>
                      <Link
                        href={course.href}
                        className="text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all hover:shadow-lg"
                        style={{ background: course.color }}
                      >
                        View Program <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Guidance banner */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-blue-100"
          style={{ background: "linear-gradient(135deg,#f0f4ff,#faf8ff)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(to right,transparent,#2563eb,transparent)",
            }}
          />
          <div className="relative">
            <h2 className="font-bold text-3xl text-gray-900 mb-3">
              Not sure which course to pick?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Our free counseling sessions help you choose the right path based
              on your background, goals, and budget.
            </p>
            <Link
              href="/contact?type=callback"
              className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base"
            >
              Get Free Guidance <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}