"use client"

import Link from "next/link"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="dark relative min-h-screen bg-background overflow-hidden noise-overlay flex items-center justify-center p-8">
      <div className="diagonal-lines absolute inset-0 text-foreground pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-md bg-card border border-border p-10 rounded-2xl backdrop-blur-xl">
        {!submitted ? (
          <>
            <h1 className="font-serif text-3xl tracking-tight mb-4">Reset password</h1>
            <p className="text-muted-foreground mb-8 text-sm">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email address</label>
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
              <button type="submit" className="btn-primary w-full shadow-lg shadow-primary/10">
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 border border-primary/20 bg-primary/5 flex items-center justify-center mx-auto mb-6 rounded-full">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl mb-4">Check your email</h2>
            <p className="text-muted-foreground mb-10 text-sm leading-relaxed">
              We've sent a password reset link to <span className="text-foreground font-medium">{email}</span>. Click the link in the email to continue.
            </p>
          </div>
        )}
        
        <div className="mt-8 text-center border-t border-border pt-6">
          <Link href="/login" className="text-sm text-foreground hover:opacity-70 transition-opacity flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to login
          </Link>
        </div>
      </div>
    </main>
  )
}
