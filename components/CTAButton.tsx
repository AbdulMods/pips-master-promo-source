"use client"

import { motion } from "framer-motion"
import { trackTelegramClick } from "../lib/metaPixel"

interface CTAButtonProps {
  href: string
  text: string
  className?: string
}

export default function CTAButton({ href, text, className = "" }: CTAButtonProps) {
  const handleClick = () => {
    trackTelegramClick()
  }

  return (
    <section className="text-center py-12">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-red-700 transition duration-300 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.a>
      <p className="mt-4 text-gray-400">Start receiving expert forex trading signals today!</p>
    </section>
  )
}
