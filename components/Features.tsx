"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, BarChart, Brain, DollarSign, BookOpen } from "lucide-react"

const features = [
  {
    icon: <DollarSign className="h-6 w-6 text-green-500" />,
    title: "Free Signals",
    description: "Get high-quality forex signals at no cost. Start your trading journey with our proven strategies.",
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    title: "Free Analysis",
    description: "Comprehensive market analysis and insights to help you understand market movements and trends.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-blue-500" />,
    title: "Technical Analysis",
    description: "Advanced technical analysis using charts, indicators, and price action patterns for precise entries.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-yellow-500" />,
    title: "Fundamentals",
    description: "Deep fundamental analysis covering economic events, news, and market-moving factors.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-cyan-500" />,
    title: "Forex + Metals + Indices",
    description: "Comprehensive coverage of forex pairs, precious metals, and major stock indices for diversification.",
  },
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: "Safe Management",
    description: "Professional account management with strict risk controls and proven money management strategies.",
  },
]

export default function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          Our Professional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
