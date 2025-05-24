"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
            Ready to Join PIPS MASTER?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Join 2,469+ successful traders who trust PIPS MASTER's 5+ years of manual trading expertise and daily
            premium signals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Users className="text-red-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">2,469+</h3>
              <p className="text-gray-400">Active Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <TrendingUp className="text-green-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">3-4</h3>
              <p className="text-gray-400">Daily Signals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <Award className="text-blue-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            <motion.a
              href="https://t.me/Pipsmarket_4x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Join PIPS MASTER Team Now
              <ArrowRight className="ml-3" size={24} />
            </motion.a>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✅ Instant Access</span>
              <span>✅ Daily 3-4 Signals</span>
              <span>✅ 5+ Years Experience</span>
              <span>✅ Human Expertise</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
