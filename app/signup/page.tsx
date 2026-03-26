"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Mail, Lock, User, Loader2, AlertCircle } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { register } = await import("@/lib/api")
      const username = email.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "") // Simple handle generator
      const res = await register(name, username, email, password)
      
      if (res.data?.tokens?.accessToken) {
        router.push("/dashboard")
      } else {
        setError(res.error || "Signup failed. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-[#050914] overflow-hidden flex">
      {/* Background glow */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#25C712]/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      {/* Left side - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r border-white/5 relative z-10">
        <Link href="/" className="flex items-center gap-2 group transition-all">
          <div className="relative flex items-center justify-center w-10 h-10 transition-transform group-hover:scale-105">
            <span className="font-serif font-black text-3xl text-primary relative z-10 drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]">V</span>
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-tighter text-[#F0F4FF] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:text-primary transition-colors">Vilogit</span>
        </Link>

        <div className="transition-all duration-700">
          <h1 className="font-serif text-6xl tracking-tight mb-6 text-[#F0F4FF]">
            Join the<br />
            <span className="text-white/40 italic">Frontier.</span>
          </h1>
          <p className="text-[#8896B3] text-lg max-w-md leading-relaxed font-light">
            Empower your workflow with a platform that understands code and acts on deployments. 
            Build with the same speed and flexibility as the world's best.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col w-7 h-4 border border-white/10 overflow-hidden">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
          <span className="font-mono text-[0.6rem] text-white/40 tracking-[0.2em] uppercase">Vilogit / Originated in India</span>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10 backdrop-blur-3xl bg-[#050914]/40">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-12 flex justify-center">
            <Link href="/" className="flex items-center gap-2 group transition-all">
              <div className="relative flex items-center justify-center w-10 h-10 transition-transform group-hover:scale-105">
                <span className="font-serif font-black text-3xl text-primary relative z-10 drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]">V</span>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tighter text-[#F0F4FF] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:text-primary transition-colors">Vilogit</span>
            </Link>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="font-serif text-3xl text-white tracking-tight mb-2 italic">Start your journey</h2>
            <p className="text-[#8896B3] font-light">
              Already building?{" "}
              <Link href="/login" className="text-primary hover:underline">Explore Origin</Link>
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-3">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs font-mono uppercase tracking-widest text-[#8896B3]">Full Name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Devanshu"
                required
                className="h-14 bg-white/[0.03] border-white/10 rounded-xl focus:bg-white/[0.05] focus:border-primary/50 text-[#F0F4FF]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-mono uppercase tracking-widest text-[#8896B3]">Email Address</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="devanshu@vilogit.dev"
                required
                className="h-14 bg-white/[0.03] border-white/10 rounded-xl focus:bg-white/[0.05] focus:border-primary/50 text-[#F0F4FF]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-mono uppercase tracking-widest text-[#8896B3]">Create Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="h-14 bg-white/[0.03] border-white/10 rounded-xl focus:bg-white/[0.05] focus:border-primary/50 text-[#F0F4FF]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary text-black font-bold text-lg rounded-xl shadow-lg hover:bg-primary/90 transition-all shadow-primary/20"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Join the Frontier"
              )}
            </Button>
          </form>

          <div className="mt-10">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs font-mono uppercase tracking-widest">
                <span className="bg-[#050914] px-4 text-[#8896B3]">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-14 border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white rounded-xl flex items-center justify-center gap-3 transition-all">
              <Github className="w-5 h-5" />
              GitHub Sync
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
