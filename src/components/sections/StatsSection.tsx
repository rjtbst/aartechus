"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building2, Award, Code2, Globe } from "lucide-react";

const stats = [
  { value:1000, suffix:"+",    label:"Students Trained",       icon:Users,     gradient:"linear-gradient(135deg,#9333ea,#6c3aff)", desc:"Career transformations" },
  { value:30,    suffix:" LPA", label:"Highest Salary",        icon:TrendingUp, gradient:"linear-gradient(135deg,#ea580c,#ef4444)", desc:"Peak package secured" },
  { value:200,   suffix:"+",    label:"Partner Companies",     icon:Building2,  gradient:"linear-gradient(135deg,#16a34a,#10b981)", desc:"Active hiring partners" },
  { value:12,    suffix:" LPA", label:"Average Salary",        icon:Award,      gradient:"linear-gradient(135deg,#ca8a04,#f59e0b)", desc:"Mean post-completion CTC" },
  { value:500,   suffix:"+",    label:"IT Projects Delivered", icon:Code2,      gradient:"linear-gradient(135deg,#2563eb,#06b6d4)", desc:"Global clients" },
  { value:15,    suffix:"+",    label:"Countries Reached",     icon:Globe,      gradient:"linear-gradient(135deg,#db2777,#f43f5e)", desc:"International reach" },
];

function CountUp({ end, suffix, started }: { end:number; suffix:string; started:boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const steps = 60, inc = end / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 2000 / steps);
    return () => clearInterval(t);
  }, [started, end]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

const companies = ["Amazon","Salesforce","Walmart","Flipkart","Paytm","Infosys","TCS","Wipro","HCL","Capgemini","Accenture","Google","Microsoft","Meta","IBM"];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,#07070e,#0c0c18,#07070e)"}}/>
      <div className="absolute inset-0 grid-bg" style={{opacity:.5}}/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <span className="section-tag">Our Impact</span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-4">
              Numbers That <span className="text-gradient">Speak for Themselves</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Real results from real students. Our track record speaks for itself.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s,i)=>(
            <motion.div key={s.label} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}
              className="relative glass rounded-2xl p-6 text-center card-hover">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background:s.gradient}}>
                <s.icon size={18} className="text-white"/>
              </div>
              <div className="number-stat text-2xl sm:text-3xl mb-1">
                <CountUp end={s.value} suffix={s.suffix} started={inView}/>
              </div>
              <div className="text-xs font-semibold text-gray-300 mb-1">{s.label}</div>
              <div className="text-xs text-gray-600 hidden sm:block">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.3}} className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-widest">Alumni working at</p>
          <div className="overflow-hidden">
            <div className="flex items-center marquee gap-12">
              {[...companies,...companies].map((c,i)=>(
                <span key={i} className="text-gray-600 font-grotesk font-semibold text-lg whitespace-nowrap"
                  style={{transition:"color .2s"}} onMouseEnter={e=>(e.currentTarget.style.color="#9ca3af")}
                  onMouseLeave={e=>(e.currentTarget.style.color="")}>{c}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
