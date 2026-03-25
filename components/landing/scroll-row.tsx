"use client"

import { useEffect, useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRowProps {
  flip?: boolean
  sectionNumber: string
  eyebrow: string
  title: ReactNode
  description: string
  features: string[]
  children: ReactNode
}

export function ScrollRow({
  flip = false,
  sectionNumber,
  eyebrow,
  title,
  description,
  features,
  children
}: ScrollRowProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (visualRef.current) observer.observe(visualRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center py-32 px-[5%] md:px-[10%] min-h-[90vh] border-b border-white/[0.04] overflow-hidden relative",
        flip ? 'md:[direction:rtl]' : ''
      )}
    >
      <div 
        ref={textRef} 
        className={cn(
          "anim-text text-left",
          flip ? 'md:[direction:ltr] md:translate-x-[60px]' : ''
        )}
      >
        <div className="font-mono text-[0.6rem] text-primary/40 tracking-[0.2em] mb-4 uppercase">
          {sectionNumber}
        </div>
        
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.15em] text-primary uppercase mb-8">
          <span className="block w-8 h-px bg-primary" />
          {eyebrow}
        </div>
        
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-black tracking-[-0.04em] leading-[0.95] mb-8 text-[#F0F4FF] selection:bg-primary selection:text-primary-foreground">
          {title}
        </h2>
        
        <p className="text-lg text-[#8896B3] max-w-[480px] mb-10 font-light leading-relaxed">
          {description}
        </p>
        
        <ul className="flex flex-col gap-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3.5 text-sm md:text-base text-[#8896B3] group">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,107,0,0.8)] group-hover:scale-125 transition-transform" />
              <span className="group-hover:text-[#F0F4FF] transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div 
        ref={visualRef} 
        className={cn(
          "anim-visual relative",
          flip ? 'md:[direction:ltr] md:-translate-x-[60px]' : ''
        )}
      >
        {/* Subtle background glow for visual components */}
        <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-40" />
        <div className="relative z-10 transition-all transform hover:scale-[1.01] duration-500">
          {children}
        </div>
      </div>
    </div>
  )
}
