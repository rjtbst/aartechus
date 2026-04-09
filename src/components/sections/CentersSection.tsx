"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Users, Calendar, Wifi, Building } from "lucide-react";

const centers = [
  {
    id: "noida",
    name: "Noida Skill Centre",
    address: "2nd Floor, D69, Block-D, Sector 2, Noida, Uttar Pradesh 201301",
    capacity: "200+ seats",
    drives: "15+ drives/month",
    courses: ["Full Stack Development", "Data Analytics", "Data Science & AI"],
    features: ["High-speed WiFi", "Lab computers", "Recording studio", "Cafeteria"],
    color: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    emoji: "🏢",
    mapUrl: "#",
  },
  {
    id: "hyderabad",
    name: "Hyderabad Skill Centre",
    address: "23-25, 2nd Floor, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032",
    capacity: "180+ seats",
    drives: "12+ drives/month",
    courses: ["Full Stack Development", "Data Analytics"],
    features: ["Dedicated labs", "Discussion rooms", "Mentor cabin", "Library"],
    color: "linear-gradient(135deg,#ea580c,#ef4444)",
    emoji: "🏙️",
    mapUrl: "#",
  },
  {
    id: "pune",
    name: "Pune Skill Centre",
    address: "5th Floor, Aria Tower, above PNB, Baner, Pune, Maharashtra 411045",
    capacity: "150+ seats",
    drives: "10+ drives/month",
    courses: ["Full Stack Development", "Data Analytics"],
    features: ["MacBook labs", "Standups area", "Gaming zone", "Pantry"],
    color: "linear-gradient(135deg,#16a34a,#10b981)",
    emoji: "🌆",
    mapUrl: "#",
  },
];

export default function CentersSection() {
  const [active, setActive] = useState("noida");
  const center = centers.find((c) => c.id === active)!;

  return (
    <section id="centers" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-tag"><Building size={12} /> Skill Centres</span>
            <h2 className="font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
              Explore Our <span className="text-gradient">Offline Centres</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              World-class learning facilities where you can learn face-to-face with top industry experts and attend hiring drives.
            </p>
          </motion.div>
        </div>

        {/* Center tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {centers.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all border ${active === c.id ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100" : "bg-white text-gray-600 border-gray-200 hover:border-blue-200 hover:text-blue-600"}`}>
              <span>{c.emoji}</span>
              {c.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Center detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Visual */}
            <div className="grid grid-cols-2 gap-3 h-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center ${i === 1 ? "col-span-2 h-48" : "h-32"}`}>
                  <div className="w-full h-full flex items-center justify-center rounded-2xl"
                    style={{ background: `${center.color}`, opacity: 0.12 }}>
                  </div>
                  <div className="absolute text-5xl">{i === 1 ? center.emoji : ["💻", "🎓", "🤝"][i - 2]}</div>
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-2xl text-gray-900 mb-2">{center.name}</h3>
              <div className="flex items-start gap-2 text-gray-500 text-sm mb-5">
                <MapPin size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                {center.address}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                  <Users size={20} className="text-blue-600 mx-auto mb-1" />
                  <div className="font-bold text-gray-900 text-lg">{center.capacity}</div>
                  <div className="text-xs text-gray-500">Capacity</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                  <Calendar size={20} className="text-green-600 mx-auto mb-1" />
                  <div className="font-bold text-gray-900 text-lg">{center.drives}</div>
                  <div className="text-xs text-gray-500">Hiring Drives</div>
                </div>
              </div>

              {/* Courses */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Courses Offered</div>
                <div className="flex flex-wrap gap-2">
                  {center.courses.map((c) => (
                    <span key={c} className="badge badge-purple text-[11px]">{c}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Facilities</div>
                <div className="grid grid-cols-2 gap-2">
                  {center.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Wifi size={11} className="text-blue-500" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link href={`/centers/${active}`}
                  className="glow-btn flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm">
                  Explore Centre <ArrowRight size={14} />
                </Link>
                <a href={center.mapUrl}
                  className="outline-btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium">
                  <MapPin size={14} /> Directions
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}