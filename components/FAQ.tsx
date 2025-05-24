'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How accurate are your trading signals?",
    answer: "Our AI-powered trading signals have a proven accuracy rate of over 85%. We continuously refine our algorithms to maintain and improve this high level of precision."
  },
  {
    question: "What is the minimum investment required?",
    answer: "The minimum investment varies depending on your chosen broker. However, we recommend starting with at least $1,000 to effectively implement our strategies and manage risk."
  },
  {
    question: "How does the account management service work?",
    answer: "Our expert traders manage your account using our proprietary AI-driven strategies. We take a 50% share of the profits generated, aligning our interests with yours. You maintain full control and can withdraw funds at any time."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a wide range of payment methods including BTC, TRC USDT, Skrill, Neteller, RedDot Pay, PayTM, UPI, JazzCash, SadaPay, and all major cryptocurrencies for your convenience."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg border border-red-500 overflow-hidden"
          >
            <button
              className="w-full p-4 text-left flex justify-between items-center"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="font-semibold text-white">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="h-5 w-5 text-red-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-red-500" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-gray-700"
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-300">
          Have more questions? Contact our admin at{' '}
          <a href="https://t.me/PIPSMASTER22" className="text-red-500 hover:underline">
            @PIPSMASTER22
          </a>
        </p>
      </div>
    </section>
  )
}
