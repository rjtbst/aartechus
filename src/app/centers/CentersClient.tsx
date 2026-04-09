"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Users, Calendar, Wifi, Coffee, Monitor, BookOpen, ArrowRight, Building } from "lucide-react";

const centers = [
  {
    name: "Noida Skill Centre",
    city: "Noida",
    address: "2nd Floor, D69, Block-D, Sector 2, Noida, Uttar Pradesh 201301",
    capacity: "200+ seats",
    drives: "15+ drives/month",
    established: "2019",
    courses: ["Java Full Stack", "MERN Full Stack", "Data Science & AI", "Data Analytics"],
    facilities: [
      { icon: Monitor, label: "50+ lab workstations" },
      { icon: Wifi, label: "1 Gbps internet" },
      { icon: Coffee, label: "Cafeteria & lounge" },
      { icon: BookOpen, label: "Digital library" },
      { icon: Users, label: "Collaboration rooms" },
      { icon: Building, label: "Recording studio" },
    ],
    color: "from-purple-600 to-primary",
    mapUrl: "https://maps.google.com",
    emoji: "🏢",
    highlight: "Flagship Centre",
  },
  {
    name: "Hyderabad Skill Centre",
    city: "Hyderabad",
    address: "Plot 23–25, 2nd Floor, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032",
    capacity: "180+ seats",
    drives: "12+ drives/month",
    established: "2021",
    courses: ["Java Full Stack", "MERN Full Stack", "Data Analytics"],
    facilities: [
      { icon: Monitor, label: "40+ lab workstations" },
      { icon: Wifi, label: "High-speed fiber" },
      { icon: Coffee, label: "Pantry" },
      { icon: BookOpen, label: "Resource center" },
      { icon: Users, label: "Group study rooms" },
      { icon: Building, label: "Mentor cabins" },
    ],
    color: "from-orange-600 to-red-500",
    mapUrl: "https://maps.google.com",
    emoji: "🏙️",
    highlight: "IT Hub Location",
  },
  {
    name: "Pune Skill Centre",
    city: "Pune",
    address: "5th Floor, Aria Tower, above Punjab National Bank, Baner, Pune, Maharashtra 411045",
    capacity: "150+ seats",
    drives: "10+ drives/month",
    established: "2023",
    courses: ["Java Full Stack", "Data Analytics"],
    facilities: [
      { icon: Monitor, label: "35 MacBook workstations" },
      { icon: Wifi, label: "Gigabit internet" },
      { icon: Coffee, label: "Gaming zone + pantry" },
      { icon: BookOpen, label: "Tech library" },
      { icon: Users, label: "Standups area" },
      { icon: Building, label: "Presentation hall" },
    ],
    color: "from-green-600 to-emerald-500",
    mapUrl: "https://maps.google.com",
    emoji: "🌆",
    highlight: "Newest Centre",
  },
];

export default function CentersClient() {
  return (
    <div className="min-h-screen bg-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 mesh-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-tag"><Building size={12} /> Skill Centres</span>
            <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-white mb-5">
              Learn Where the<br />
              <span className="text-gradient">Future is Built</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
               Learn face-to-face with top industry experts and attend exclusive hiring drives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Centers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {centers.map((center, i) => (
            <motion.div
              key={center.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl overflow-hidden border border-white/5"
            >
              <div className={`h-2 bg-gradient-to-r ${center.color}`} />
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-4xl">{center.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="font-syne font-extrabold text-3xl text-white">{center.name}</h2>
                          <span className="badge badge-purple text-[10px]">{center.highlight}</span>
                        </div>
                        <p className="text-gray-400 text-sm">Est. {center.established}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-6 text-gray-400">
                      <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{center.address}</span>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass rounded-xl p-4 text-center">
                        <Users size={20} className="text-primary mx-auto mb-1" />
                        <div className="font-syne font-bold text-white text-xl">{center.capacity}</div>
                        <div className="text-xs text-gray-500">Learning Capacity</div>
                      </div>
                      <div className="glass rounded-xl p-4 text-center">
                        <Calendar size={20} className="text-green-400 mx-auto mb-1" />
                        <div className="font-syne font-bold text-white text-xl">{center.drives}</div>
                        <div className="text-xs text-gray-500">Hiring Drives</div>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Courses at this Centre</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.courses.map((c) => (
                          <span key={c} className="badge badge-purple text-[11px]">{c}</span>
                        ))}
                      </div>
                    </div>

                    {/* Facilities */}
                    <div className="mb-8">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">World-Class Facilities</h4>
                      <div className="grid grid-cols-2 gap-2.5">
                        {center.facilities.map((f) => (
                          <div key={f.label} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                              <f.icon size={13} className="text-primary" />
                            </div>
                            {f.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href="/contact?type=callback"
                        className={`glow-btn flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm`}
                      >
                        Book a Visit <ArrowRight size={14} />
                      </Link>
                      <a href={center.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="outline-btn flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-medium text-white"
                      >
                        <MapPin size={14} /> Directions
                      </a>
                    </div>
                  </div>

                  {/* Visual grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, j) => (
                      <div
                        key={j}
                        className={`rounded-2xl overflow-hidden ${j === 0 ? "col-span-2 row-span-2" : ""}`}
                        style={{ aspectRatio: j === 0 ? "auto" : "1" }}
                      >
                        <div
                          className={`w-full h-full glass flex items-center justify-center text-3xl min-h-[80px]`}
                          style={{ background: `linear-gradient(135deg, rgba(108,58,255,0.1), rgba(255,92,53,0.05))` }}
                        >
                          {["🎓", "💻", "👥", "📚", "🏆", "⚡"][j]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass rounded-3xl p-10 border border-primary/20">
            <h2 className="font-syne font-extrabold text-3xl text-white mb-3">
              Visit a Centre <span className="text-gradient">Near You</span>
            </h2>
            <p className="text-gray-400 mb-8">Schedule a free campus tour and see the facility before you enroll.</p>
            <Link href="/contact?type=callback" className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white">
              Book Free Campus Tour <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
