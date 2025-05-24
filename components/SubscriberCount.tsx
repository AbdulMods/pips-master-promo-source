"use client"

import { useState, useEffect } from "react"
import { Users, Star, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const CHANNEL_LINK = "https://t.me/Pipsmarket_4x"

interface ChannelInfo {
  count: number
  photo_url: string
  title?: string
  description?: string
  username?: string
}

async function fetchChannelInfo(): Promise<ChannelInfo> {
  try {
    const response = await fetch("/api/getChannelInfo")
    if (!response.ok) {
      throw new Error("Failed to fetch channel info")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching channel info:", error)
    return {
      count: 2469,
      photo_url: "/images/pips-master-logo.jpg",
      title: "PIPS MASTER ™ ® 🔥",
      description: "Welcome To The PIPS MASTER Officials",
      username: "Pipsmarket_4x",
    }
  }
}

export default function SubscriberCount() {
  const [channelInfo, setChannelInfo] = useState<ChannelInfo | null>(null)
  const [imageLoading, setImageLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const updateChannelInfo = async () => {
      try {
        const info = await fetchChannelInfo()
        // Always use the local logo
        info.photo_url = "/images/pips-master-logo.jpg"
        setChannelInfo(info)
        setError(null)
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 1000)
      } catch (err) {
        console.error("Error updating channel info:", err)
        setError("Failed to fetch channel info")
      }
    }

    updateChannelInfo()
    // Update every 2 minutes for live count
    const interval = setInterval(updateChannelInfo, 120000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-red-500/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-yellow-500/5 z-0"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
              </div>
            )}
            <Image
              src="/images/pips-master-logo.jpg"
              alt="PIPS MASTER Official Logo"
              width={120}
              height={120}
              className={`rounded-lg border-4 border-gradient-to-r from-red-500 to-yellow-500 shadow-lg bg-white p-2 ${imageLoading ? "opacity-0" : "opacity-100"}`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageLoading(false)
              }}
            />
            <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-gray-800 animate-pulse"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          {channelInfo?.title || "PIPS MASTER ™ ® 🔥"}
        </h2>

        <div className="flex items-center justify-center mb-4">
          <Users className="text-red-500 mr-3" size={28} />
          {error ? (
            <p className="text-red-500 text-sm">Live count unavailable</p>
          ) : !channelInfo ? (
            <div className="animate-pulse bg-red-500/20 h-12 w-24 rounded"></div>
          ) : (
            <motion.div
              animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
            >
              {channelInfo.count.toLocaleString()}
            </motion.div>
          )}
        </div>

        <p className="text-gray-300 mb-2 text-lg">{channelInfo?.count === 1 ? "Active Member" : "Active Members"}</p>
        <p className="text-gray-500 text-sm mb-6">🔴 Live Count • Updates every 2 minutes</p>

        {channelInfo?.description && <p className="text-gray-400 text-sm mb-4 italic">"{channelInfo.description}"</p>}

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <Star className="text-yellow-500 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-yellow-500">4.8</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="text-center">
            <TrendingUp className="text-green-500 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-green-500">82%</div>
            <div className="text-xs text-gray-400">Win Rate</div>
          </div>
          <div className="text-center">
            <Award className="text-blue-500 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-blue-500">5+</div>
            <div className="text-xs text-gray-400">Years Exp</div>
          </div>
        </div>

        <motion.a
          href={CHANNEL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/30 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Join PIPS MASTER Team
        </motion.a>
      </div>
    </motion.div>
  )
}
