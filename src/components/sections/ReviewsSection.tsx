"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "SDE at Amazon",
    course: "Java Full Stack",
    package: "₹18 LPA",
    rating: 5,
    text: "AArtechus completely transformed my career. Coming from a non-CS background, I was sceptical. But the structured curriculum, live doubt sessions, and 1:1 mentorship made it possible. Got placed at Amazon within 2 months of completing the course!",
    avatar: "RS",
    color: "from-purple-500 to-primary",
    videoThumb: true,
  },
  {
    name: "Priya Gupta",
    role: "Data Scientist at Flipkart",
    course: "Data Science & AI",
    package: "₹22 LPA",
    rating: 5,
    text: "The Data Science program is truly industry-grade. We worked on actual Kaggle datasets, deployed ML models on AWS, and even fine-tuned LLMs. The placement team is incredibly supportive and helped me crack interviews at 3 companies.",
    avatar: "PG",
    color: "from-orange-500 to-red-500",
    videoThumb: true,
  },
  {
    name: "Anjali Singh",
    role: "Frontend Dev at Paytm",
    course: "MERN Full Stack",
    package: "₹14 LPA",
    rating: 5,
    text: "Best decision of my life! The MERN + Gen AI course is absolutely worth it. I went from ₹3 LPA to ₹14 LPA in just 10 months. The mock interviews and resume sessions gave me massive confidence.",
    avatar: "AS",
    color: "from-green-500 to-emerald-500",
    videoThumb: false,
  },
  {
    name: "Vikash Kumar",
    role: "Data Analyst at Walmart",
    course: "Data Analytics",
    package: "₹12 LPA",
    rating: 5,
    text: "I joined the Data Analytics course with zero SQL knowledge. Now I'm working at Walmart's data team. The instructors are amazing — they explain every concept from scratch and are available on WhatsApp for doubts.",
    avatar: "VK",
    color: "from-blue-500 to-cyan-500",
    videoThumb: true,
  },
  {
    name: "Neha Verma",
    role: "Full Stack Dev at Infosys",
    course: "Java Full Stack",
    package: "₹9.5 LPA",
    rating: 5,
    text: "The offline centre at Noida is excellent. State-of-the-art labs, great instructors, and on-campus hiring drives every month. I got an offer during the campus drive itself — didn't even have to apply externally!",
    avatar: "NV",
    color: "from-pink-500 to-rose-500",
    videoThumb: false,
  },
  {
    name: "Arjun Patel",
    role: "ML Engineer at TCS",
    course: "Data Science & AI",
    package: "₹16 LPA",
    rating: 5,
    text: "The AI/ML curriculum covers everything — from fundamentals to advanced transformer architectures. The capstone project where we built and deployed a custom chatbot was incredible. Highly recommended for anyone wanting to break into AI.",
    avatar: "AP",
    color: "from-yellow-500 to-amber-500",
    videoThumb: true,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e1c] to-bg-primary" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Student Reviews</span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-4">
              Watch Yourself <span className="text-gradient">Transform Your Future</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Real stories from real students who took the leap and landed their dream roles.
            </p>
          </motion.div>
        </div>

        {/* Main featured review */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Video thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden glass group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${reviews[current].color} opacity-20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${reviews[current].color} flex items-center justify-center text-white text-3xl font-bold font-syne mx-auto mb-4`}>
                  {reviews[current].avatar}
                </div>
                <div className="text-white font-syne font-semibold text-xl">{reviews[current].name}</div>
                <div className="text-gray-300 text-sm">{reviews[current].role}</div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="play-btn">
                <Play size={24} fill="white" />
              </div>
            </div>
            {/* Package badge */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full">
              <span className="text-green-400 font-semibold text-sm">{reviews[current].package} →</span>
            </div>
          </motion.div>

          {/* Review text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center"
            >
              <Quote size={40} className="text-primary/40 mb-4" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                &ldquo;{reviews[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${reviews[current].color} flex items-center justify-center text-white font-bold`}>
                  {reviews[current].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{reviews[current].name}</div>
                  <div className="text-sm text-gray-400">{reviews[current].role} • {reviews[current].course}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(reviews[current].rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation + thumbnails */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-sm">{current + 1} / {reviews.length}</span>
          <div className="flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {reviews.map((r, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`relative aspect-video rounded-xl overflow-hidden transition-all ${i === current ? "ring-2 ring-primary scale-105" : "opacity-50 hover:opacity-80"}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-40`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white font-bold text-sm">{r.avatar}</div>
              </div>
              {r.videoThumb && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Play size={10} fill="white" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* All reviews mini grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                </div>
                <div className="ml-auto text-green-400 text-xs font-semibold">{r.package}</div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
