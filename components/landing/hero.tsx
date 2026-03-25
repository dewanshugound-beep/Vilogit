"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-[5%] py-32 overflow-hidden overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#25C712]/5 rounded-full blur-[100px] pointer-events-none opacity-30" />
      
      <div className="relative z-10 max-w-[900px]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 font-mono text-[0.65rem] tracking-[0.1em] text-primary uppercase mb-8 backdrop-blur-sm animate-fade-up">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          The Developer Platform for the next era
        </div>
        
        <h1 className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] font-black tracking-[-0.04em] leading-[0.88] mb-8 text-[#F0F4FF] selection:bg-primary selection:text-primary-foreground anim-fade-up delay-100">
          Build. <span className="text-primary italic font-serif">Deeply</span>.
          <br />
          Ship with <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Vilo AI.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#8896B3] max-w-[580px] mx-auto mb-12 font-light leading-relaxed anim-fade-up delay-200">
          Where code, community, and intelligence converge. Host repositories, 
          foster global communities, and automate your workflow like never before.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 anim-fade-up delay-300">
          <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-xl shadow-[0_15px_30px_rgba(255,107,0,0.25)] hover:shadow-[0_20px_40px_rgba(255,107,0,0.35)] transition-all transform hover:-translate-y-1">
            <Link href="/signup">
              Get Started for Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-medium rounded-xl border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/[0.15] text-[#F0F4FF] transition-all transform hover:-translate-y-1">
            <Link href="/login">Explore Communities</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 animate-[bounce_3s_ease-in-out_infinite]">
        <span className="font-mono text-[0.6rem] tracking-[0.4em] uppercase text-[#8896B3]/60">scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/40 to-transparent" />
      </div>
    </section>
  )
}
