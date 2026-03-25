"use client"

import { Hero } from "@/components/landing/hero"
import { ScrollRow } from "@/components/landing/scroll-row"
import { GlassCard, PRDiffCard, CommunityCard, AIChatCard } from "@/components/landing/glass-cards"
import { IndiaSection } from "@/components/landing/india-section"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-4 backdrop-blur-lg bg-[rgba(5,9,20,0.8)] border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF6B00] flex items-center justify-center font-serif font-extrabold text-sm text-[#050914]">
            V
          </div>
          <span className="font-serif font-bold text-lg text-[#F0F4FF]">Vilogit</span>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm text-[#8896B3] hover:text-[#F0F4FF] transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/signup"
            className="px-4 py-2 bg-[#FF6B00] text-[#050914] text-sm font-medium rounded-lg hover:bg-[#FF8C38] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <Hero />

      {/* Row 1: Code Layer */}
      <ScrollRow
        sectionNumber="01 / COLLABORATE"
        eyebrow="Code Layer"
        title={<>Pull requests,<br /><span className="text-[#FF6B00]">reimagined.</span></>}
        description="Every PR gets an AI review before your team even sees it. Catch N+1 queries, security holes, and anti-patterns automatically — not after they're merged."
        features={[
          "Inline AI suggestions on every diff",
          "Automated CI with zero config",
          "Package registry built in",
          "Branch protection with smart rules"
        ]}
      >
        <GlassCard url="vilogit.dev/acme/api / pull / 47">
          <PRDiffCard />
        </GlassCard>
      </ScrollRow>

      {/* Row 2: Community Layer */}
      <ScrollRow
        flip
        sectionNumber="02 / COMMUNITY"
        eyebrow="Vilos"
        title={<>Your community<br />lives <span className="text-[#FF6B00]">with</span> your code.</>}
        description="Vilos are communities that live next to repos. Ask questions, share work, run AMAs — everything contextual to the project, not scattered across Slack and Twitter."
        features={[
          "Karma system that rewards real contributions",
          "Posts link directly to commits and PRs",
          "Hackathon hub built in",
          "Job board inside every Vilo"
        ]}
      >
        <GlassCard url="vilogit.dev / v / open-source">
          <CommunityCard />
        </GlassCard>
      </ScrollRow>

      {/* Row 3: AI Layer */}
      <ScrollRow
        sectionNumber="03 / INTELLIGENCE"
        eyebrow="Vilo AI"
        title={<>An AI that<br />actually <span className="text-[#25C712]">does</span> things.</>}
        description="Vilo AI doesn't just suggest. It reads your repo, understands your history, then acts — opening issues, writing code, fixing pipelines — all from a single conversation."
        features={[
          "Context-aware across your full repo history",
          "Can commit, push, and open PRs directly",
          "Understands Hindi, Tamil, English naturally",
          "Embedded in every PR, issue, and post"
        ]}
      >
        <GlassCard url="Vilo AI — acme / api">
          <AIChatCard />
        </GlassCard>
      </ScrollRow>

      {/* India Section */}
      <IndiaSection />

      {/* CTA Section */}
      <section className="py-32 px-[5%] text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-[#FF6B00] uppercase mb-6">
          <span className="block w-7 h-px bg-[#FF6B00]" />
          Join the Beta
        </div>
        <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-2px] leading-none mb-6">
          Ready to build<br />
          <span className="text-[#FF6B00]">differently?</span>
        </h2>
        <p className="text-base text-[#8896B3] max-w-[440px] mx-auto mb-10 font-light leading-relaxed">
          Join thousands of developers already on the waitlist. 
          Get early access, shape the product, be part of the origin story.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link 
            href="/signup"
            className="px-10 py-4 bg-[#FF6B00] text-[#050914] font-medium rounded-lg hover:bg-[#FF8C38] transition-colors text-lg"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-[5%] border-t border-[rgba(255,255,255,0.06)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#FF6B00] flex items-center justify-center font-serif font-extrabold text-xs text-[#050914]">
              V
            </div>
            <span className="font-serif font-bold text-[#F0F4FF]">Vilogit</span>
          </div>
          <p className="text-sm text-[#8896B3] font-mono">
            Built in India. For the world.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#8896B3]">
            <Link href="#" className="hover:text-[#F0F4FF] transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-[#F0F4FF] transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-[#F0F4FF] transition-colors">Discord</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
