"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "react-feather"
import { trackTelegramClick } from "../lib/metaPixel"

const CTASection: React.FC = () => {
  const handleJoinClick = () => {
    trackTelegramClick()
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Elevate Your Trading Game?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Join our exclusive PIPS MASTER team and unlock the secrets to consistent profits.
        </p>
        <motion.a
          href="https://t.me/Pipsmarket_4x"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleJoinClick}
          className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Join PIPS MASTER Team Now
          <ArrowRight className="ml-3" size={24} />
        </motion.a>
      </div>
    </section>
  )
}

export default CTASection
