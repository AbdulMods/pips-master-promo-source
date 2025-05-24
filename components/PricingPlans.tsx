"use client"

import { motion } from "framer-motion"
import { Check, Crown, Zap, Star } from "lucide-react"

const plans = [
  {
    name: "Free Signals",
    price: "Free",
    period: "Forever",
    description: "Perfect for beginners",
    features: [
      "Free forex signals",
      "Free market analysis",
      "Technical analysis",
      "Fundamental analysis",
      "Community support",
      "Educational content",
    ],
    icon: <Zap className="h-8 w-8" />,
    popular: false,
    cta: "Join Free Channel",
  },
  {
    name: "Premium Signals",
    price: "$79",
    period: "per month",
    description: "For serious traders",
    features: [
      "All free features",
      "Premium daily signals",
      "Advanced technical analysis",
      "Priority support",
      "Forex + Metals + Indices",
      "VIP Telegram group",
      "Trade explanations",
      "Risk management guidance",
    ],
    icon: <Star className="h-8 w-8" />,
    popular: true,
    cta: "Get Premium Access",
  },
  {
    name: "Safe Management",
    price: "50%",
    period: "profit share",
    description: "Professional account management",
    features: [
      "Professional account management",
      "No upfront fees",
      "50% profit sharing",
      "Safe management strategies",
      "Monthly reports",
      "Direct communication",
      "Minimum $1000 account",
      "Risk-controlled trading",
    ],
    icon: <Crown className="h-8 w-8" />,
    popular: false,
    cta: "Start Safe Management",
  },
]

export default function PricingPlans() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
            Choose Your Trading Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From free signals to professional account management - find the perfect solution for your trading needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gray-800 p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular ? "border-red-500 shadow-2xl shadow-red-500/20" : "border-gray-700 hover:border-red-500/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex p-3 rounded-full mb-4 ${
                    plan.popular ? "bg-red-500/20 text-red-500" : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/30"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
