'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-gray-900 py-4 px-4 md:px-8 relative z-20">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">
          PIPS MASTER
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900 py-4 px-4"
        >
          <div className="flex flex-col space-y-4">
            <NavLink href="#features" onClick={toggleMenu}>Features</NavLink>
            <NavLink href="#testimonials" onClick={toggleMenu}>Testimonials</NavLink>
            <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

function NavLink({ href, children, ...props }) {
  return (
    <Link href={href} {...props}>
      <motion.span
        className="text-white hover:text-red-500 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}
