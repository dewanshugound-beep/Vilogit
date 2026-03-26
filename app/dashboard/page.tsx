"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  CircleUser, 
  Code2, 
  LayoutDashboard, 
  Settings, 
  Terminal, 
  Zap, 
  Cpu, 
  Globe, 
  Plus, 
  Search, 
  Bell, 
  ChevronRight,
  TrendingUp,
  Clock,
  ExternalLink,
  ShieldCheck,
  MoreVertical,
  Activity,
  History,
  Layers,
  Box,
  Key as KeyIcon,
  LogOut
} from "lucide-react"
import { useRequireAuth, useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { logout } from "@/lib/api"

const SIDEBAR_ITEMS = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "projects", icon: Code2, label: "Projects" },
  { id: "deployments", icon: Zap, label: "Deployments" },
  { id: "infrastructure", icon: Cpu, label: "Infrastructure" },
  { id: "activity", icon: Activity, label: "Activity" },
  { id: "settings", icon: Settings, label: "Settings" },
]

export default function DashboardPage() {
  const { isLoading } = useRequireAuth()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (isLoading || !mounted) {
    return (
      <div className="min-h-screen bg-[#050914] flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
          <div className="absolute inset-0 border-2 border-primary rounded-full animate-spin border-t-transparent" />
          <span className="absolute inset-0 flex items-center justify-center font-serif font-black text-primary">V</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050914] text-[#F0F4FF] overflow-hidden flex">
      {/* Dynamic Background Noise Texture */}
      <div className="fixed inset-0 noise-overlay pointer-events-none opacity-[0.2] mix-blend-overlay" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,107,0,0.05)_0%,transparent_50%)] pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#050914]/80 backdrop-blur-3xl flex flex-col relative z-20">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8">
              <span className="font-serif font-black text-2xl text-primary relative z-10 transition-transform group-hover:scale-110">V</span>
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tighter group-hover:text-primary transition-colors">Vilogit</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all group",
                activeTab === item.id 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-[#8896B3] hover:text-[#F0F4FF] hover:bg-white/[0.03]"
              )}
            >
              <item.icon size={18} className={cn(activeTab === item.id ? "text-primary" : "text-[#8896B3] group-hover:text-[#F0F4FF]")} />
              <span className="font-medium">{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="active-pill" className="ml-auto w-1 h-4 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-4 group cursor-pointer hover:bg-white/[0.05] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#FF9933] flex items-center justify-center text-xs font-bold text-black uppercase">
                {user?.plan?.[0] || 'F'}
              </div>
              <div>
                <p className="text-xs font-bold text-[#F0F4FF] capitalize">{user?.plan || 'Free'} Plan</p>
                <p className="text-[10px] text-[#8896B3] font-mono">2 / 5 Credits</p>
              </div>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-primary rounded-full" />
            </div>
          </div>

          <button 
            onClick={() => logout()}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-400/10 hover:text-rose-300 transition-all border border-transparent hover:border-rose-400/20"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-20 h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-white/5 bg-[#050914]/40 backdrop-blur-xl flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8896B3] group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources, vilos, or code..." 
                className="w-full bg-white/[0.03] border border-white/5 rounded-full py-2 pl-10 pr-4 text-xs text-[#F0F4FF] outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-[10px] text-[#8896B3]">⌘</kbd>
                <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-[10px] text-[#8896B3]">K</kbd>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl text-[#8896B3] hover:text-[#F0F4FF] hover:bg-white/5 transition-all">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-[#050914] shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
            </button>
            <div className="h-4 w-px bg-white/10" />
            <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all group">
              <span className="text-xs font-bold text-[#F0F4FF] ml-2 group-hover:text-primary transition-colors">{user?.name || 'Developer'}</span>
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-all">
                <span className="font-serif font-black text-[10px] text-primary">V</span>
              </div>
            </button>
          </div>
        </header>

        {/* Dynamic Viewport */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl mx-auto space-y-8 pb-12"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-3xl italic tracking-tight text-[#F0F4FF]">
                    {activeTab === 'overview' ? `Namaste, ${user?.name?.split(' ')[0] || 'Developer'}` : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </h2>
                  <p className="text-sm text-[#8896B3] font-light mt-1">
                    {activeTab === 'overview' ? 'Welcome to your origin. Here is what is happening today.' : `Manage your ${activeTab} across regions.`}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="h-10 border-white/10 bg-white/5 text-white rounded-xl hover:bg-white/10 gap-2">
                    <History size={14} /> Log
                  </Button>
                  <Button className="h-10 bg-primary text-black font-bold rounded-xl shadow-lg hover:shadow-primary/20 gap-2">
                    <Plus size={16} strokeWidth={3} /> New Project
                  </Button>
                </div>
              </div>

              {activeTab === 'overview' && (
                <>
                  {/* KPI Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: Activity, label: "Total Requests", value: "248.3k", sub: "+12.5%", trend: "up" },
                      { icon: Zap, label: "Avg Latency", value: "84ms", sub: "-5ms", trend: "up" },
                      { icon: ShieldCheck, label: "Uptime", value: "99.99%", sub: "Stable", trend: "up" },
                      { icon: TrendingUp, label: "Burn Rate", value: "$12.42", sub: "/ mo", trend: "down" },
                    ].map((stat, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                            <stat.icon size={18} className="text-[#8896B3] group-hover:text-primary transition-colors" />
                          </div>
                          <span className={cn("text-[10px] font-mono px-2 py-0.5 rounded-full border", stat.trend === 'up' ? "bg-emerald-400/10 border-emerald-400/20 text-emerald-400" : "bg-primary/10 border-primary/20 text-primary")}>
                            {stat.sub}
                          </span>
                        </div>
                        <p className="text-xs font-mono uppercase tracking-[0.1em] text-[#8896B3] mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-black text-[#F0F4FF] tracking-tight">{stat.value}</h3>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Feed/Recent Section */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                          <h3 className="text-sm font-bold flex items-center gap-2">
                            <Layers size={14} className="text-primary" />
                            Recent Projects
                          </h3>
                          <Link href="/dashboard/projects" className="text-[10px] font-mono uppercase tracking-widest text-primary hover:underline">View All</Link>
                        </div>
                        <div className="divide-y divide-white/5">
                          {[
                            { name: "acme-api", lang: "TypeScript", status: "Active", time: "2m ago" },
                            { name: "vilogit-dashboard", lang: "Next.js", status: "Deploying", time: "15m ago" },
                            { name: "origin-core", lang: "Rust", status: "Active", time: "2h ago" },
                          ].map((p, i) => (
                            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group cursor-pointer">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                                  <Box size={20} />
                                </div>
                                multisource
                                <div>
                                  <p className="text-sm font-bold text-[#F0F4FF]">{p.name}</p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[10px] font-mono text-[#8896B3]">{p.lang}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-[10px] font-mono text-[#8896B3]">{p.time}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider",
                                  p.status === 'Active' ? "bg-emerald-400/10 text-emerald-400" : "bg-primary/10 text-primary animate-pulse"
                                )}>
                                  {p.status}
                                </div>
                                <ChevronRight size={14} className="text-[#8896B3] group-hover:text-primary transition-all group-hover:translate-x-0.5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                          <h3 className="text-sm font-bold flex items-center gap-2">
                            <Terminal size={14} className="text-primary" />
                            Global Infrastructure
                          </h3>
                        </div>
                        <div className="p-8 flex flex-col items-center justify-center text-center">
                          <div className="relative w-48 h-48 mb-6">
                            <Globe size={180} className="text-white/5 absolute -top-4 -left-4" strokeWidth={1} />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center animate-pulse">
                                <div className="w-24 h-24 rounded-full border border-primary/40 flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Zap size={24} className="text-primary" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="text-lg font-serif italic text-white mb-2">Origin: Mumbai, IN</h4>
                          <p className="text-xs text-[#8896B3] max-w-xs mx-auto leading-relaxed">
                            Primary region is healthy. 4 active edge nodes globally delivering at sub-100ms latency.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar components */}
                    <div className="space-y-6">
                      <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <TrendingUp size={80} />
                        </div>
                        <h4 className="text-sm font-black text-primary mb-2 uppercase tracking-widest">Premium Origin</h4>
                        <p className="text-sm font-bold text-white mb-4 leading-snug">Scale your compute with unlimited Vilo instances.</p>
                        <Button className="w-full bg-primary text-black font-bold h-10 rounded-xl hover:bg-primary/90 transition-all">
                          Upgrade Now
                        </Button>
                      </div>

                      <div className="rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                          <h3 className="text-sm font-bold flex items-center gap-2">
                            <KeyIcon size={14} className="text-primary" />
                            API Access
                          </h3>
                        </div>
                        <div className="p-6">
                          <p className="text-xs text-[#8896B3] mb-4">Quickly access your origin credentials for CLI tools.</p>
                          <div className="flex gap-2">
                            <div className="flex-1 bg-black/40 border border-white/5 rounded-xl px-3 py-2 font-mono text-[10px] text-white/40 truncate">
                              vl_live_••••••••••••••••••••
                            </div>
                            <Button size="icon" variant="ghost" className="h-9 w-9 border border-white/5 rounded-xl hover:bg-white/5">
                              <ExternalLink size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <style jsx global>{`
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 0, 0.2);
        }
      `}</style>
    </div>
  )
}
