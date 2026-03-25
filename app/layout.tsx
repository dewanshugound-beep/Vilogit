import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Instrument_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Vilogit — Build. Discuss. Ship together.',
  description: 'A next-generation developer platform built in India for developers worldwide.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}>
       <body className="font-sans antialiased text-[#F0F4FF] bg-[#050914] selection:bg-primary/30 selection:text-primary">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
