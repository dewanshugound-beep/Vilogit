"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FounderSection() {
  return (
    <section id="origin" className="py-24 px-[5%] relative overflow-hidden bg-white/[0.02] border-y border-white/[0.05]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Founder Visual Placeholder */}
          <div className="relative w-48 h-48 flex-shrink-0 group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#050914] flex items-center justify-center font-serif text-6xl text-primary font-black shadow-2xl transition-transform hover:scale-105">
              D
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-black font-mono text-[0.6rem] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
              Origin
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-mono text-[0.7rem] tracking-[0.3em] text-primary uppercase mb-4">The Creator</h3>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-[#F0F4FF] leading-none mb-6 italic tracking-tight">
              Devanshu
            </h2>
            <p className="text-[#8896B3] text-lg font-light leading-relaxed mb-8">
              Founded by <span className="text-white font-medium">Devanshu</span>, a 14-year-old visionary student currently in 9th grade at <span className="text-white font-medium italic">Chavara Vidyaa Peeth, Narsinghpur</span>. 
              Coming from the village of <span className="text-white font-medium">Kachhwa</span>, Devanshu is building Vilogit to redefine how developers build, collaborate, and deploy globally. 
              Proof that code has no age and innovation starts in the roots.
            </p>
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg- India-green animate-pulse" />
              <span className="font-mono text-[0.65rem] tracking-widest text-white/60">MADE IN INDIA / ROOTED IN KACHHWA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
