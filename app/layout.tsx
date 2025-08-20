import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Kalam } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-kalam",
})

export const metadata: Metadata = {
  title: "Lazies - Stop Scrolling, Start Learning",
  description: "Escape YouTube's scroll trap with AI-curated educational content that actually matters",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${kalam.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
