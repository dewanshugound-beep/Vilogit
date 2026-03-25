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
  title: 'Vilogit — Build. Deploy. Automate.',
  description: 'The developer platform like GitHub, but with integrated agents that manage deployments and provide real-time reports.',
  verification: {
    google: "wOhQQh_20E6OJGYP_EV4VwqcpzaKejWbiYjTnDSlKbg",
  },
  keywords: ["developer platform", "AI agents", "git platform", "deployment engine", "automated DevOps", "Vilogit", "Devanshu", "Chavara Vidyapeeth"],
  icons: {
    icon: '/logo.png',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Vilogit",
              "applicationCategory": "DeveloperPlatform",
              "operatingSystem": "All",
              "description": "The developer platform like GitHub, but with integrated autonomous agents for deployments and reporting.",
              "author": {
                "@type": "Person",
                "name": "Devanshu",
                "description": "14-year-old developer and student from Chavara Vidyapeeth, Narsinghpur.",
                "url": "https://vilogit.dev"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
