"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Clock, Brain, Target, Award } from "lucide-react"

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    title: "Consistent Profitability",
    description:
      "My manual trading approach has helped traders achieve steady monthly returns through disciplined risk management and market analysis.",
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: "Human Expertise",
    description:
      "No robots or algorithms - just pure human intuition, experience, and deep understanding of market psychology.",
  },
  {
    icon: <Clock className="h-8 w-8 text-yellow-500" />,
    title: "Time-Efficient Trading",
    description:
      "Save hours of chart analysis with my pre-screened setups and clear entry/exit strategies based on proven methods.",
  },
  {
    icon: <Target className="h-8 w-8 text-red-500" />,
    title: "Precision Entries",
    description:
      "Each signal is carefully timed using technical analysis, support/resistance levels, and market structure patterns.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Proven Track Record",
    description:
      "5+ years of consistent trading results with transparent performance and real money trading experience.",
  },
  {
    icon: <Award className="h-8 w-8 text-cyan-500" />,
    title: "Educational Value",
    description:
      "Learn the 'why' behind each trade with detailed explanations to improve your own trading skills over time.",
  },
]

export default function TradingBenefits() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          The PIPS MASTER Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4 border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
