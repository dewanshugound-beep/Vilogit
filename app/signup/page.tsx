"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <main className="relative min-h-screen bg-background overflow-hidden noise-overlay flex items-center justify-center p-8">
        <div className="diagonal-lines absolute inset-0 text-foreground pointer-events-none" />
        <div className="relative z-10 max-w-md text-center">
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-16 h-16 border border-green-500/20 bg-green-500/5 flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl tracking-tight mb-4">{"You're on the list!"}</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {"We've added "}<span className="text-foreground font-medium">{email}</span>{" to the waitlist. You'll be among the first to know when we open up."}
            </p>
            <Link 
              href="/"
              className="btn-primary inline-flex"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden noise-overlay">
      {/* Diagonal lines pattern */}
      <div className="diagonal-lines absolute inset-0 text-foreground pointer-events-none" />
      
      <div className="relative z-10 min-h-screen flex">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className={`w-full max-w-md transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Mobile logo */}
            <div className="lg:hidden mb-12 flex justify-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center font-serif text-xl">
                  V
                </div>
                <span className="font-sans font-semibold text-lg tracking-tight">Vilogit</span>
              </Link>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-3xl tracking-tight mb-2">Join the waitlist</h2>
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-foreground link-underline">
                  Sign in
                </Link>
              </p>
            </div>

            {/* OAuth buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <button className="btn-outline flex items-center justify-center gap-3 w-full">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
              <button className="btn-outline flex items-center justify-center gap-3 w-full">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-background text-muted-foreground font-mono">or</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 border border-destructive/20 bg-destructive/5 text-destructive text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="input-optimus"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="input-optimus"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  minLength={8}
                  className="input-optimus"
                />
                <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating account...
                  </>
                ) : (
                  "Join waitlist"
                )}
              </button>
            </form>

            <p className="mt-10 text-center text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-foreground link-underline">Terms</Link>
              {" "}and{" "}
              <Link href="#" className="text-foreground link-underline">Privacy Policy</Link>
            </p>
          </div>
        </div>

        {/* Right side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-l border-foreground/10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center font-serif text-xl">
              V
            </div>
            <span className="font-sans font-semibold text-lg tracking-tight">Vilogit</span>
          </Link>

          <div className={`transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Join the movement
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl tracking-tight mb-6">
              Join the next<br />
              <span className="text-muted-foreground">developer era.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed mb-10">
              Code, community, and AI — unified. Be part of the platform that&apos;s redefining how developers build.
            </p>
            
            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <span className="font-serif text-3xl tracking-tight block mb-1">14,000+</span>
                <span className="text-sm text-muted-foreground">Developers waiting</span>
              </div>
              <div>
                <span className="font-serif text-3xl tracking-tight block mb-1">200+</span>
                <span className="text-sm text-muted-foreground">Startups signed up</span>
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-3 transition-all duration-700 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col w-7 h-5 overflow-hidden border border-foreground/10">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 border border-[#000080] rounded-full" />
              </div>
              <div className="flex-1 bg-[#138808]" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">Built in India. For the world.</span>
          </div>
        </div>
      </div>
    </main>
  )
}
