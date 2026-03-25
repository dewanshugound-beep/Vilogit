"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-[5%] py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-[#FF6B00] uppercase mb-5">
        <span className="block w-7 h-px bg-[#FF6B00]" />
        Developer Platform
      </div>
      
      <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-3px] leading-[0.95] mb-6">
        Build. <span className="text-[#FF6B00]">Discuss.</span>
        <br />
        Ship together.
      </h1>
      
      <p className="text-base text-[#8896B3] max-w-[500px] mb-10 font-light leading-relaxed">
        The next-generation developer platform where code, community, and AI 
        converge. Host repos, build communities, ship faster.
      </p>

      <div className="flex items-center gap-4 mb-12">
        <Link 
          href="/signup"
          className="px-8 py-3 bg-[#FF6B00] text-[#050914] font-medium rounded-lg hover:bg-[#FF8C38] transition-colors"
        >
          Join Waitlist
        </Link>
        <Link
          href="/login"
          className="px-8 py-3 border border-[rgba(255,255,255,0.1)] text-[#F0F4FF] rounded-lg hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
        >
          Sign In
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2 mt-12 opacity-40 animate-[bounce_2s_ease-in-out_infinite]">
        <span className="font-mono text-[0.65rem] tracking-[0.1em] text-[#8896B3]">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#8896B3]" />
      </div>
    </section>
  )
}
