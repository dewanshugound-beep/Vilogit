# Vilogit Design System: The Synthetic Infinite (Refined)

## 1. Creative North Star
**"The Cinematic Developer Hub"**
Interfaces should feel like a high-fidelity lens into a deep, textured digital workspace. We emphasize **Editorial Typography**, **Tonal Depth**, and **Glassmorphism**.

## 2. Color Palette
- **Core Background**: `#050914` (Deep Navy) — used for the main canvas to provide maximal contrast and noise texture depth.
- **Primary Brand**: `#FF6B00` (Electric Orange) — used for CTAs, active states, and focus highlights.
- **Secondary Branding**: `#25C712` (Cyber Green) — used for achievement markers and success states.
- **Neutral Foreground**: `#F0F4FF` (Glacier White) — used for primary headlines.
- **Muted Content**: `#8896B3` (Steel Blue) — used for body text and secondary metadata.

## 3. Surface Architecture
- **Glass Transparency**: Use `rgba(10, 16, 32, 0.4)` with `backdrop-filter: blur(24px)` for all floating containers (terminals, cards).
- **Subtle Boundaries**: Never use solid white borders. Use `white/[0.05]` or `primary/15` for very subtle delineation.
- **Atmospheric Glows**: Use large, low-opacity radial gradients (150px+ blur) in background corners to break the "box" feel.

## 4. Typography
- **Headlines (Instrument Serif / Inter)**: Use `font-black` (weight 900) with `tracking-tightest` (-0.04em) for primary statements.
- **Brand Accent**: Use `italic` for critical brand keywords (e.g., *Deeply*, *Differently*).
- **Body (Instrument Sans / Inter)**: Keep it clean, light (weight 300), and spacious (`leading-relaxed`).

## 5. Interactions
- **Micro-animations**: Subtle `translate-y` on hover, `scale-1.02` on interactive cards.
- **Reveal Effects**: Use `IntersectionObserver` with a `blur + translate` entry for all section components.
- **Scroll Indicators**: Artistic, vertical gradient lines with a slow bounce animation.

## 6. Iconography
- **Logo**: Stylized Serif "V" in a glass/primary container.
- **Navigation**: Minimalist `Lucide` icons with a 1.5px stroke weight.
