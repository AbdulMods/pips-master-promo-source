"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Shield, Award, Brain, Eye } from "lucide-react"
import CTAButton from "./CTAButton"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/pips-master-logo.jpg"
              alt="PIPS MASTER Official Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-2xl bg-white p-4"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">
            PIPS MASTER ©®
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Professional Forex Trading Signals & Analysis
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join 2,469+ successful traders who trust my 5+ years of market experience with comprehensive forex, metals,
            and indices trading solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
            <TrendingUp className="text-green-500 mr-2" size={20} />
            <span className="text-green-400 font-semibold">Free Signals</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
            <Target className="text-blue-500 mr-2" size={20} />
            <span className="text-blue-400 font-semibold">Free Analysis</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
            <Shield className="text-purple-500 mr-2" size={20} />
            <span className="text-purple-400 font-semibold">Safe Management</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-500/30">
            <Award className="text-yellow-500 mr-2" size={20} />
            <span className="text-yellow-400 font-semibold">5+ Years Experience</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30">
            <Brain className="text-red-500 mr-2" size={20} />
            <span className="text-red-400 font-semibold">Technicals</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30">
            <Eye className="text-cyan-500 mr-2" size={20} />
            <span className="text-cyan-400 font-semibold">Fundamentals</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <CTAButton
            href="https://t.me/Pipsmarket_4x"
            text="🚀 Join PIPS MASTER Team Now"
            className="text-xl px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-2xl shadow-red-500/30"
          />
          <p className="text-gray-500 text-sm">
            ⚡ Free signals • 💎 Free analysis • 🎯 Forex + Metals + Indices • 🛡️ Safe management
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
