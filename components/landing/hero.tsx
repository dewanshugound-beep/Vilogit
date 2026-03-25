"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5%] py-40 overflow-hidden">
      {/* Background glow effects - Reduced opacity for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-40 will-change-transform" />
      
      <div className="relative z-10 max-w-[900px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[0.65rem] tracking-[0.2em] text-primary uppercase mb-10 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
          The Developer Platform Lab
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] font-black tracking-[-0.04em] leading-[0.88] mb-10 text-[#F0F4FF] selection:bg-primary selection:text-primary-foreground"
        >
          Build. Deploy.
          <br />
          <span className="text-primary italic font-serif">Automate.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#8896B3] max-w-[620px] mx-auto mb-14 font-light leading-relaxed"
        >
          The next-generation developer platform like GitHub, but with built-in 
          <span className="text-white/80 font-medium"> agent integration </span> to manage 
          deployments, monitor health, and provide real-time reports.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-xl shadow-[0_15px_30px_rgba(255,107,0,0.25)] hover:bg-primary/90 transition-all hover:scale-[1.02]">
            <Link href="/signup">
              Get Alpha Access
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-medium rounded-xl border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/[0.15] text-[#F0F4FF] transition-all hover:scale-[1.02]">
            <Link href="/login">Explore Origin</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.4em] uppercase text-[#8896B3]/60">scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/40 to-transparent" />
      </motion.div>
    </section>
  )
}
