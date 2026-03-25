"use client"

import { useEffect, useRef, useState } from "react"

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

interface CounterProps {
  target: number
  suffix: string
  isVisible: boolean
}

function Counter({ target, suffix, isVisible }: CounterProps) {
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1600
    const start = performance.now()

    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const val = Math.round(easeOutExpo(progress) * target)
      setValue(val)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, target])

  return (
    <span className="font-serif text-3xl font-bold tracking-tight text-[#FF6B00] block leading-none mb-1">
      {value.toLocaleString()}{suffix}
    </span>
  )
}

export function IndiaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isStatsVisible, setIsStatsVisible] = useState(false)

  useEffect(() => {
    // Scroll reveal observer
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("india-visible")
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (textRef.current) revealObs.observe(textRef.current)
    if (visualRef.current) revealObs.observe(visualRef.current)

    // Counter observer
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsStatsVisible(true)
            counterObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (visualRef.current) counterObs.observe(visualRef.current)

    return () => {
      revealObs.disconnect()
      counterObs.disconnect()
    }
  }, [])

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let W = 0
    let H = 0
    let particles: Array<{
      x: number
      y: number
      r: number
      vx: number
      vy: number
      o: number
      color: string
    }> = []
    let raf: number

    function resize() {
      if (!canvas) return
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function makeParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        o: Math.random() * 0.25 + 0.08,
        color: Math.random() < 0.7 ? "255,107,0" : "240,244,255",
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: 90 }, makeParticle)
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.o})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < -4) p.x = W + 4
        if (p.x > W + 4) p.x = -4
        if (p.y < -4) p.y = H + 4
        if (p.y > H + 4) p.y = -4
      })
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  const stats = [
    { target: 14000, suffix: "+", label: "Developers on waitlist" },
    { target: 200, suffix: "+", label: "Startups signed up" },
    { target: 18, suffix: " months", label: "To 1M developers" },
    { target: 1, suffix: " team", label: "Obsessed with this" },
  ]

  const timeline = [
    { status: "done", title: "Core platform built", sub: "Repos · PRs · Vilos · CI" },
    { status: "active", title: "Private beta — now open", sub: "Vilo AI · Community layer" },
    { status: "soon", title: "Public launch", sub: "Q3 2025 · Open to everyone" },
    { status: "soon", title: "1 million developers", sub: "2026 · Global" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-36 px-[5%] overflow-hidden border-t border-b border-[rgba(255,255,255,0.05)]"
      id="origin"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%),
            linear-gradient(to bottom, #050914 0%, transparent 20%, transparent 80%, #050914 100%)
          `,
        }}
      />

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-[1200px] mx-auto">
        {/* Left: Text */}
        <div ref={textRef} className="india-anim-left">
          <div className="inline-flex items-center gap-2.5 mb-6">
            {/* Indian flag */}
            <div className="flex flex-col w-7 h-5 rounded-sm overflow-hidden shrink-0 border border-[rgba(255,255,255,0.1)]">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 border border-[#000080] rounded-full" />
              </div>
              <div className="flex-1 bg-[#138808]" />
            </div>
            <span className="font-mono text-[0.7rem] tracking-[0.12em] text-[rgba(136,150,179,0.7)] uppercase">
              Made in India
            </span>
          </div>

          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8 text-[#F0F4FF]">
            Built here.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent-light to-[#F0F4FF] bg-clip-text text-transparent italic">
              For the world.
            </span>
          </h2>

          <p className="text-base text-[#8896B3] max-w-[420px] font-light leading-relaxed">
            Vilogit was written in India — not as a statement, but as a fact. Every line of code, every product decision, every{" "}
            <strong className="text-[#F0F4FF] font-normal">late-night deploy</strong> happened here. We're not building for a market. We're building for{" "}
            <strong className="text-[#F0F4FF] font-normal">every developer, everywhere.</strong>
          </p>
        </div>

        {/* Right: Stats + Timeline */}
        <div ref={visualRef} className="india-anim-right flex flex-col gap-3.5">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[rgba(10,16,32,0.7)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-5 backdrop-blur-lg cursor-default hover:border-[rgba(255,107,0,0.25)] hover:-translate-y-0.5 transition-all"
              >
                <Counter target={stat.target} suffix={stat.suffix} isVisible={isStatsVisible} />
                <span className="text-xs text-[#8896B3] font-light">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-[rgba(10,16,32,0.7)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-5 backdrop-blur-lg">
            <div className="font-mono text-[0.65rem] tracking-[0.1em] text-[rgba(255,107,0,0.6)] uppercase mb-4">
              Where we are
            </div>
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2 relative">
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[5px] top-[22px] bottom-[-8px] w-px bg-[rgba(255,255,255,0.07)]" />
                  )}
                  <div
                    className={`w-[11px] h-[11px] rounded-full shrink-0 mt-0.5 ${
                      item.status === "done"
                        ? "bg-[#25C712] shadow-[0_0_8px_rgba(37,199,18,0.5)]"
                        : item.status === "active"
                        ? "bg-[#FF6B00] shadow-[0_0_8px_rgba(255,107,0,0.6)] animate-[tl-pulse_1.8s_ease-in-out_infinite]"
                        : "bg-transparent border border-[rgba(255,255,255,0.2)]"
                    }`}
                  />
                  <div>
                    <span className="text-[0.82rem] text-[#F0F4FF] font-medium block leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[0.7rem] text-[#8896B3] font-mono">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
