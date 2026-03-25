"use client"

import { useEffect } from "react"
import { ReactLenis, useLenis } from "lenis/react"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
    }}>
      {children}
    </ReactLenis>
  )
}
