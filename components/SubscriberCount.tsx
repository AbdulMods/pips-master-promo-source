"use client"
import { motion } from "framer-motion"
import { trackTelegramClick } from "../lib/metaPixel"

const CHANNEL_LINK = "https://t.me/pipsmaster"

const SubscriberCount = () => {
  const handleJoinClick = () => {
    trackTelegramClick()
  }

  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Join Our Telegram Channel</h2>
        <p className="mt-3 text-lg text-gray-300">
          Get exclusive trading signals, market analysis, and educational content.
        </p>
        <div className="mt-8 flex justify-center">
          <motion.a
            href={CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleJoinClick}
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/30 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Join PIPS MASTER Team
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default SubscriberCount
