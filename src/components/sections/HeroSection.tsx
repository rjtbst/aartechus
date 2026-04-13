"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Briefcase, TrendingUp, Sparkles } from "lucide-react";

const slides = [
  { badge:"35K+ Happy Students", title:"Launch Your", highlight:"Tech Career", sub:"with Expert Training",
    desc:"Get job-ready with US's most comprehensive coding bootcamps. Live classes, real projects & guaranteed placement support.",
    cta:"Explore Courses", href:"/courses", blob:"rgba(108,58,255,.2)" },
  { badge:"₹30 LPA Highest Package", title:"Master", highlight:"Data Science", sub:"& Artificial Intelligence",
    desc:"From Python basics to LLMs — build AI-powered products and land data science roles at top companies.",
    cta:"View Program", href:"/courses/data-science-ai", blob:"rgba(255,92,53,.2)" },
  { badge:"200+ Partner Companies", title:"Transform Your", highlight:"Business", sub:"with IT Services",
    desc:"World-class web, mobile, cloud & AI solutions. We build the technology that powers your growth.",
    cta:"Our Services", href:"/it-services", blob:"rgba(0,224,150,.15)" },
];

const floaters = [
  { icon:<Users size={16}/>, text:"35K+ Placed",        side:"left" },
  { icon:<TrendingUp size={16}/>, text:"₹12L Avg CTC",  side:"right" },
  { icon:<Briefcase size={16}/>, text:"200+ Companies",  side:"left" },
];

export default function HeroSection() {
  const [cur, setCur] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(()=>{
    const t = setInterval(()=>setCur(c=>(c+1)%slides.length),5000);
    return ()=>clearInterval(t);
  },[]);

  const slide = slides[cur];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg grid-bg">
      {/* Animated blobs */}
      <motion.div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{background:`radial-gradient(circle, ${slide.blob} 0%, transparent 70%)`}}
        animate={{scale:[1,1.1,1],opacity:[.5,.7,.5]}} transition={{duration:6,repeat:Infinity}}/>
      <motion.div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{background:"radial-gradient(circle, rgba(255,92,53,.15) 0%, transparent 70%)"}}
        animate={{scale:[1.1,1,1.1],opacity:[.3,.5,.3]}} transition={{duration:8,repeat:Infinity,delay:2}}/>

      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_,i)=>(
          <motion.div key={i} className="absolute w-1 h-1 rounded-full"
            style={{left:`${15+i*15}%`,top:`${20+(i%3)*20}%`,background:"rgba(108,58,255,.4)"}}
            animate={{y:[-10,10,-10],opacity:[.3,.8,.3]}} transition={{duration:3+i*.5,repeat:Infinity,delay:i*.4}}/>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div key={cur+"b"} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}} transition={{duration:.4}}>
                <span className="badge badge-purple mb-6"><Sparkles size={12}/>{slide.badge}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div key={cur+"h"} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:.5,delay:.1}}>
                <h1 className="font-syne font-extrabold leading-tight mb-3"
                  style={{fontSize:"clamp(2.5rem,5vw,4.5rem)"}}>
                  <span className="text-white">{slide.title}</span><br/>
                  <span className="text-gradient">{slide.highlight}</span><br/>
                  <span className="text-white" style={{fontSize:"clamp(2rem,4vw,3.5rem)"}}>{slide.sub}</span>
                </h1>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p key={cur+"d"} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
                transition={{duration:.5,delay:.2}} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                {slide.desc}
              </motion.p>
            </AnimatePresence>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.3}}
              className="flex flex-wrap items-center gap-4 mb-10">
              <Link href={slide.href} className="glow-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base">
                {slide.cta}<ArrowRight size={18}/>
              </Link>
              <button onClick={()=>setShowVideo(true)}
                className="outline-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white text-base">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background:"rgba(255,255,255,.1)"}}>
                  <Play size={14} className="ml-0.5" fill="white"/>
                </div>
                Watch Demo
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}} className="flex flex-wrap items-center gap-3 mb-8">
              {[{l:"Y Combinator",c:"badge-orange"},{l:"ISO Certified",c:"badge-green"}].map(b=>(
                <span key={b.l} className={`badge ${b.c}`}><span className="w-1.5 h-1.5 rounded-full bg-current"/>{b.l}</span>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6}} className="flex items-center gap-3">
              <div className="flex" style={{marginLeft:0}}>
                {[1,2,3,4,5].map(i=>(
                  <div key={i} className="w-8 h-8 rounded-full"
                    style={{border:"2px solid #07070e",background:"linear-gradient(135deg,#6c3aff,#c084fc)",marginLeft:i>1?"-8px":"0"}}/>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i=><Star key={i} size={12} fill="#fbbf24" style={{color:"#fbbf24"}}/>)}
                  <span className="text-xs text-gray-400 ml-1">4.9/5</span>
                </div>
                <div className="text-xs text-gray-500">from 5,000+ student reviews</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual ring */}
          <div className="relative hidden lg:block">
            <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.7,ease:"easeOut"}}>
              <div className="relative mx-auto" style={{width:"420px",height:"420px"}}>
                {/* Rings */}
                <motion.div className="absolute inset-0 rounded-full" style={{border:"1px solid rgba(108,58,255,.2)"}} animate={{rotate:360}} transition={{duration:20,repeat:Infinity,ease:"linear"}}/>
                <motion.div className="absolute inset-8 rounded-full" style={{border:"1px solid rgba(255,92,53,.15)"}} animate={{rotate:-360}} transition={{duration:25,repeat:Infinity,ease:"linear"}}/>

                {/* Center card */}
                <div className="absolute inset-16 glass rounded-3xl p-6 flex flex-col items-center justify-center text-center float">
                  <AnimatePresence mode="wait">
                    <motion.div key={cur} initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.8}} transition={{duration:.4}} className="space-y-3">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto font-bold"
                        style={{background:"linear-gradient(135deg,#6c3aff,#c084fc)"}}>
                        {cur===0?"💻":cur===1?"🤖":"⚡"}
                      </div>
                      <div className="text-white font-syne font-bold text-lg">
                        {cur===0?"Full Stack Dev":cur===1?"Data Science AI":"IT Solutions"}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {cur===0?"Java / MERN + GenAI":cur===1?"ML • LLMs • Deep Learning":"Web • Mobile • Cloud"}
                      </div>
                      <span className="badge badge-green mx-auto">Placement Support</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Floating metric cards */}
                {floaters.map((f,i)=>(
                  <motion.div key={i} className="absolute glass rounded-xl p-3 flex items-center gap-2"
                    style={{
                      minWidth:"130px",
                      left: f.side==="left"?"-32px":"auto",
                      right: f.side==="right"?"-32px":"auto",
                      top:`${25+i*20}%`,
                    }}
                    animate={{y:[0,-5,0]}} transition={{duration:3+i,repeat:Infinity,delay:i*.8}}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                      style={{background:"linear-gradient(135deg,rgba(108,58,255,.3),rgba(108,58,255,.1))"}}>
                      {f.icon}
                    </div>
                    <span className="text-xs font-semibold text-white">{f.text}</span>
                  </motion.div>
                ))}

                {/* Orbit dots */}
                {[0,60,120,180,240,300].map((deg,i)=>(
                  <div key={i} className="absolute w-2 h-2 rounded-full"
                    style={{background:"#6c3aff",opacity:i%2===0?.8:.3,
                      top:`${50-47*Math.cos(deg*Math.PI/180)}%`,
                      left:`${50+47*Math.sin(deg*Math.PI/180)}%`}}/>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_,i)=>(
            <button key={i} onClick={()=>setCur(i)}
              className="rounded-full transition-all duration-300"
              style={{width:i===cur?32:8,height:8,background:i===cur?"#6c3aff":"rgba(255,255,255,.2)"}}/>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {showVideo&&(
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{background:"rgba(0,0,0,.8)",backdropFilter:"blur(8px)"}}
            onClick={()=>setShowVideo(false)}>
            <motion.div initial={{scale:.8}} animate={{scale:1}} exit={{scale:.8}}
              className="w-full max-w-3xl glass rounded-2xl overflow-hidden"
              style={{aspectRatio:"16/9",border:"1px solid rgba(255,255,255,.1)"}}
              onClick={e=>e.stopPropagation()}>
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <Play size={48} className="mx-auto mb-3" style={{color:"#6c3aff"}}/>
                  <p>Demo video would play here</p>
                  <button onClick={()=>setShowVideo(false)} className="outline-btn mt-4 px-4 py-2 rounded-lg text-sm">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
