"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/landing/hero"
import { ScrollRow } from "@/components/landing/scroll-row"
import { GlassCard, PRDiffCard, CommunityCard, AIChatCard } from "@/components/landing/glass-cards"
import { IndiaSection } from "@/components/landing/india-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914] relative overflow-hidden">
      {/* Dynamic Background Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.4] mix-blend-overlay" />
      
      {/* Main Grid Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,16,32,0.6)_0%,transparent_100%)] pointer-events-none" />

      <SiteHeader />

      {/* Hero */}
      <Hero />

      {/* Features Anchor */}
      <div id="features" className="scroll-mt-32" />

      {/* Row 1: Code Layer */}
      <ScrollRow
        sectionNumber="01 / COLLABORATE"
        eyebrow="Code Layer"
        title={<>Pull requests,<br /><span className="text-primary italic">reimagined.</span></>}
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
      <div id="community" className="scroll-mt-32" />
      <ScrollRow
        flip
        sectionNumber="02 / COMMUNITY"
        eyebrow="Vilos"
        title={<>Your community<br />lives <span className="text-primary italic">with</span> your code.</>}
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
        title={<>An AI that<br />actually <span className="text-[#25C712] italic">does</span> things.</>}
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
      <section className="py-48 px-[5%] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-primary uppercase mb-8">
            <span className="block w-10 h-px bg-primary/40" />
            Join the Alpha
            <span className="block w-10 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-10 text-[#F0F4FF]">
            Ready to build<br />
            <span className="text-primary italic">differently?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#8896B3] max-w-[500px] mx-auto mb-14 font-light leading-relaxed">
            Join thousands of developers and startups already on the waitlist. 
            Get early access to the new standard for collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl bg-primary shadow-[0_20px_40px_rgba(255,107,0,0.3)] hover:shadow-[0_25px_50px_rgba(255,107,0,0.4)] transition-all">
              <Link href="/signup">
                Get Early Access Now
                <ArrowRight className="ml-3 h-5 w-5" strokeWidth={3} />
              </Link>
            </Button>
          </div>
          <p className="mt-10 text-xs text-[#8896B3]/60 font-mono uppercase tracking-[0.1em]">
            No credit card required. Free during beta.
          </p>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
