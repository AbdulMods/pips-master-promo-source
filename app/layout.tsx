import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PIPS MASTER - Elite Gold Trading Signals | 85%+ Win Rate",
  description:
    "Join 2,847+ successful traders using AI-powered gold trading signals. 85%+ win rate, real-time alerts, expert analysis. Start your profitable trading journey today!",
  keywords: "gold trading, forex signals, XAUUSD, trading signals, pips master, forex trading, gold signals",
  openGraph: {
    title: "PIPS MASTER - Elite Gold Trading Signals",
    description: "AI-powered gold trading signals with 85%+ win rate. Join thousands of successful traders.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
