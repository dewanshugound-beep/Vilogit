"use client"

import { ReactNode } from "react"

interface GlassCardProps {
  url: string
  children: ReactNode
}

export function GlassCard({ url, children }: GlassCardProps) {
  return (
    <div className="glass-card">
      <div className="flex items-center gap-1.5 p-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-2 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-md h-5.5 flex items-center px-2.5">
          <span className="font-mono text-[0.65rem] text-[rgba(136,150,179,0.6)]">{url}</span>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

// PR Diff Card Content
export function PRDiffCard() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[0.65rem] bg-[rgba(255,107,0,0.15)] border border-[rgba(255,107,0,0.3)] text-[#FF6B00] px-2 py-0.5 rounded-full">
          PR #47
        </span>
        <span className="text-sm text-[#F0F4FF] font-medium">feat: add AI-powered search endpoint</span>
      </div>
      
      <div className="bg-[rgba(0,0,0,0.3)] rounded-lg font-mono text-xs overflow-hidden mb-4">
        <div className="px-3 py-1 flex gap-3 text-[#8896B3]">
          <span className="opacity-70 w-2.5" />async function searchRepos(query) {'{'}
        </div>
        <div className="px-3 py-1 flex gap-3 bg-[rgba(255,59,48,0.08)] text-[#ff8080]">
          <span className="opacity-70 w-2.5">-</span>const repos = await db.repos.findAll();
        </div>
        <div className="px-3 py-1 flex gap-3 bg-[rgba(255,59,48,0.08)] text-[#ff8080]">
          <span className="opacity-70 w-2.5">-</span>return repos.filter(r {'=>'} r.name.includes(query));
        </div>
        <div className="px-3 py-1 flex gap-3 bg-[rgba(37,199,18,0.08)] text-[#7ee87e]">
          <span className="opacity-70 w-2.5">+</span>return db.repos.findAll({'{'} where: {'{'} name: query {'}'} {'}'});
        </div>
        <div className="px-3 py-1 flex gap-3 text-[#8896B3]">
          <span className="opacity-70 w-2.5" />{'}'}
        </div>
      </div>
      
      <div className="flex gap-2.5 bg-[rgba(255,107,0,0.06)] border border-[rgba(255,107,0,0.15)] rounded-xl p-3">
        <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center font-serif text-[0.65rem] font-extrabold shrink-0">
          V
        </div>
        <p className="text-[0.78rem] text-[#8896B3] leading-relaxed">
          <span className="text-[#FF6B00]">Vilo AI:</span> The original code loads all repos into memory before filtering — classic N+1. The fix is correct. Want me to add an index on <span className="text-[#FF6B00]">repos.name</span> too?
        </p>
      </div>
    </>
  )
}

// Community Card Content
export function CommunityCard() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <span className="font-serif text-base font-bold">v/open-source</span>
        <span className="font-mono text-[0.65rem] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)] text-[#8896B3] px-2 py-0.5 rounded-full">
          12.4k members
        </span>
      </div>

      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-3 mb-2 cursor-pointer hover:border-[rgba(255,107,0,0.3)] hover:bg-[rgba(255,107,0,0.04)] transition-all">
        <p className="text-[0.82rem] text-[#F0F4FF] mb-1.5 leading-snug">How we reduced our Docker build time from 14min to 90sec — a deep dive</p>
        <div className="flex gap-1.5 flex-wrap">
          <span className="text-[0.62rem] font-mono bg-[rgba(255,107,0,0.1)] border border-[rgba(255,107,0,0.25)] text-[#FF8C38] px-1.5 py-px rounded">trending</span>
          <span className="text-[0.62rem] font-mono bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)] text-[#8896B3] px-1.5 py-px rounded">docker</span>
          <span className="text-[0.62rem] font-mono bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)] text-[#8896B3] px-1.5 py-px rounded">ci-cd</span>
        </div>
        <div className="flex gap-3 mt-2 font-mono text-[0.7rem] text-[#8896B3]">
          <span>▲ 847</span>
          <span>💬 134</span>
          <span>⟳ linked to 3 repos</span>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-3 cursor-pointer hover:border-[rgba(255,107,0,0.3)] hover:bg-[rgba(255,107,0,0.04)] transition-all">
        <p className="text-[0.82rem] text-[#F0F4FF] mb-1.5 leading-snug">AMA: We built a payments SDK used by 2,000+ startups — ask us anything</p>
        <div className="flex gap-1.5 flex-wrap">
          <span className="text-[0.62rem] font-mono bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)] text-[#8896B3] px-1.5 py-px rounded">ama</span>
          <span className="text-[0.62rem] font-mono bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)] text-[#8896B3] px-1.5 py-px rounded">fintech</span>
        </div>
        <div className="flex gap-3 mt-2 font-mono text-[0.7rem] text-[#8896B3]">
          <span>▲ 421</span>
          <span>💬 89</span>
        </div>
      </div>
    </>
  )
}

// AI Chat Card Content
export function AIChatCard() {
  return (
    <div className="flex flex-col gap-2.5">
      {/* User message */}
      <div className="flex gap-2 flex-row-reverse items-start">
        <div className="w-6.5 h-6.5 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-[0.6rem] font-bold text-[#8896B3] shrink-0">
          AK
        </div>
        <div className="max-w-[80%] px-3 py-2 rounded-[12px_2px_12px_12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] text-[0.78rem] text-[#8896B3]">
          Why is my deploy failing on the staging pipeline?
        </div>
      </div>

      {/* AI response */}
      <div className="flex gap-2 items-start">
        <div className="w-6.5 h-6.5 rounded-full bg-[#FF6B00] flex items-center justify-center text-[0.6rem] font-bold text-white shrink-0">
          V
        </div>
        <div>
          <div className="max-w-[80%] px-3 py-2 rounded-[2px_12px_12px_12px] bg-[rgba(255,107,0,0.1)] border border-[rgba(255,107,0,0.2)] text-[0.78rem] text-[#F0F4FF] leading-relaxed">
            Checked your CI logs. The issue is a missing env var <code className="bg-[rgba(255,107,0,0.15)] px-1 py-px rounded text-[0.7rem]">DATABASE_URL</code> in your staging config. It exists in production but wasn't copied over.
          </div>
          <div className="flex gap-1.5 mt-1.5 flex-wrap">
            <button className="font-mono text-[0.62rem] bg-[rgba(255,107,0,0.15)] border border-[rgba(255,107,0,0.3)] text-[#FF6B00] px-2.5 py-1 rounded-md hover:bg-[rgba(255,107,0,0.25)] transition-colors">
              Add env var →
            </button>
            <button className="font-mono text-[0.62rem] bg-[rgba(255,107,0,0.15)] border border-[rgba(255,107,0,0.3)] text-[#FF6B00] px-2.5 py-1 rounded-md hover:bg-[rgba(255,107,0,0.25)] transition-colors">
              View logs
            </button>
          </div>
        </div>
      </div>

      {/* User message */}
      <div className="flex gap-2 flex-row-reverse items-start">
        <div className="w-6.5 h-6.5 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-[0.6rem] font-bold text-[#8896B3] shrink-0">
          AK
        </div>
        <div className="max-w-[80%] px-3 py-2 rounded-[12px_2px_12px_12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] text-[0.78rem] text-[#8896B3]">
          Add it please.
        </div>
      </div>

      {/* AI response with status */}
      <div className="flex gap-2 items-start">
        <div className="w-6.5 h-6.5 rounded-full bg-[#FF6B00] flex items-center justify-center text-[0.6rem] font-bold text-white shrink-0">
          V
        </div>
        <div>
          <div className="max-w-[80%] px-3 py-2 rounded-[2px_12px_12px_12px] bg-[rgba(255,107,0,0.1)] border border-[rgba(255,107,0,0.2)] text-[0.78rem] text-[#F0F4FF]">
            Done. Env var added to staging. Retriggering pipeline now...
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[rgba(37,199,18,0.1)] border border-[rgba(37,199,18,0.25)] text-[#25C712] px-2.5 py-1 rounded-full text-[0.7rem] font-mono mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#25C712] animate-[pulse_1.8s_ease-in-out_infinite]" />
            Build passing — 2m 14s
          </div>
        </div>
      </div>
    </div>
  )
}
