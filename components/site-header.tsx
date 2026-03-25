"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-4 backdrop-blur-xl bg-[#050914]/80 border-b border-white/[0.05]">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 group transition-all transform hover:scale-[1.02]">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
            <div className="relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(255,107,0,0.5)]">
              <span className="font-serif font-extrabold text-lg text-primary-foreground leading-none">V</span>
            </div>
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-[#F0F4FF] group-hover:text-primary transition-colors">Vilogit</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-sm font-medium text-[#8896B3] hover:text-primary transition-colors">Features</Link>
        <Link href="#community" className="text-sm font-medium text-[#8896B3] hover:text-primary transition-colors">Community</Link>
        <Link href="#origin" className="text-sm font-medium text-[#8896B3] hover:text-primary transition-colors">Origin</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild className="text-[#8896B3] hover:text-[#F0F4FF] hover:bg-white/[0.05]">
          <Link href="/login">Sign In</Link>
        </Button>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(255,107,0,0.3)] border-none">
          <Link href="/signup">Get Started</Link>
        </Button>
      </div>
    </nav>
  )
}
