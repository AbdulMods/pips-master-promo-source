import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import MetaPixel from "../components/MetaPixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PIPS MASTER - Elite Forex Trading Signals | 82%+ Win Rate",
  description:
    "Join 2,469+ successful traders using professional forex trading signals. 82%+ win rate, real-time alerts, expert analysis. Start your profitable trading journey today!",
  keywords: "forex trading, forex signals, XAUUSD, trading signals, pips master, forex trading, gold signals",
  openGraph: {
    title: "PIPS MASTER - Elite Forex Trading Signals",
    description: "Professional forex trading signals with 82%+ win rate. Join thousands of successful traders.",
    type: "website",
    url: "https://t.me/+p1dgFWcTtdc4YjY8",
    images: [
      {
        url: "/images/pips-master-logo.jpg",
        width: 1200,
        height: 630,
        alt: "PIPS MASTER - Professional Forex Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIPS MASTER - Elite Forex Trading Signals",
    description: "Professional forex trading signals with 82%+ win rate.",
    images: ["/images/pips-master-logo.jpg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <MetaPixel pixelId="1445901916584929" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
