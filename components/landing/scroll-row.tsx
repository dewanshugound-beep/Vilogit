"use client"

import { useEffect, useRef, ReactNode } from "react"

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
      { threshold: 0.15 }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (visualRef.current) observer.observe(visualRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-28 px-[5%] md:px-[8%] min-h-screen border-b border-[rgba(255,255,255,0.06)] overflow-hidden ${flip ? 'md:[direction:rtl]' : ''}`}
    >
      <div 
        ref={textRef} 
        className={`anim-text ${flip ? 'md:[direction:ltr] md:[transform:translateX(80px)]' : ''}`}
      >
        <div className="font-mono text-[0.65rem] text-[rgba(255,107,0,0.4)] tracking-[0.1em] mb-2">
          {sectionNumber}
        </div>
        
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-[#FF6B00] uppercase mb-5">
          <span className="block w-7 h-px bg-[#FF6B00]" />
          {eyebrow}
        </div>
        
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold tracking-[-2px] leading-none mb-5">
          {title}
        </h2>
        
        <p className="text-base text-[#8896B3] max-w-[440px] mb-8 font-light leading-relaxed">
          {description}
        </p>
        
        <ul className="flex flex-col gap-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-[#8896B3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_rgba(255,107,0,0.6)]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div 
        ref={visualRef} 
        className={`anim-visual ${flip ? 'md:[direction:ltr] md:[transform:translateX(-80px)]' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
