"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="py-16 px-[5%] border-t border-white/[0.05] bg-[#050914] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center gap-2 group transition-all">
          <div className="relative flex items-center justify-center w-10 h-10 transition-transform group-hover:scale-105">
            <img 
              src="/brand-logo.png" 
              alt="Vilogit Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-tighter text-[#F0F4FF] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:text-primary transition-colors">Vilogit</span>
        </Link>
        
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-[#8896B3] font-mono tracking-wide">
            Built in India. <span className="text-white/40">Ship to the world.</span>
          </p>
          <div className="flex items-center gap-10 text-sm text-[#8896B3]/80">
            <Link href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">GitHub</Link>
            <Link href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">Discord</Link>
          </div>
        </div>

        <div className="text-[0.65rem] font-mono text-[#8896B3]/50 uppercase tracking-[0.2em] self-center md:self-end">
          © 2026 Vilogit Lab. <span className="hidden lg:inline">All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
