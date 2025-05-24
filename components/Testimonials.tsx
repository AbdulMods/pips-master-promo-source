"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Hassan",
    country: "UAE",
    profit: "+$8,450",
    text: "PIPS MASTER's manual analysis is incredible. The human touch and market intuition behind each signal is what sets this apart from automated systems.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sarah Johnson",
    country: "UK",
    profit: "+$6,920",
    text: "Finally found a trader who explains the 'why' behind each trade. The educational value alone is worth the subscription. Consistent results!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Mohammed Ali",
    country: "Pakistan",
    profit: "+$12,680",
    text: "5 years of experience shows in every signal. The risk management and timing are perfect. Best forex signals I've ever followed.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Elena Rodriguez",
    country: "Spain",
    profit: "+$9,340",
    text: "The manual analysis approach gives me confidence in each trade. No black box algorithms - just pure trading skill and market knowledge.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Chen",
    country: "Singapore",
    profit: "+$11,200",
    text: "Been following for 8 months now. The consistency is amazing. You can tell this comes from real trading experience, not just theory.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Fatima Al-Zahra",
    country: "Kuwait",
    profit: "+$7,850",
    text: "The account management service is fantastic. Professional approach with transparent results. My account has grown steadily every month.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from real traders who trust PIPS MASTER's manual trading expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl border border-red-500/30 relative overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-red-500/20">
                <Quote size={40} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-red-500 mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.country}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-3 rounded-lg border border-green-500/30">
                <div className="text-green-400 font-bold text-lg">{testimonial.profit}</div>
                <div className="text-green-300 text-sm">Total Profit</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
