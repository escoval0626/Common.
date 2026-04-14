'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#私たちの哲学' },
    { label: 'Services', href: '#事業内容' },
    { label: 'Works', href: '#選定作品' },
    { label: 'Contact', href: '#お問い合わせ' }
  ]

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 md:px-12 py-8 z-[100]">
      {/* New Minimalist Typographic Logo */}
      <Link href="#hero" className="flex items-center gap-2 group">
        <span className="text-xl font-light tracking-[0.1em] text-primary lowercase font-english">
          common<span className="text-secondary opacity-30">.</span>
        </span>
        <div className="w-px h-4 bg-outline transition-transform duration-500 group-hover:scale-y-150 origin-bottom" />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-12 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-english text-[10px] tracking-[0.3em] text-secondary hover:text-primary transition-colors uppercase px-4 py-2"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (MENU text) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden font-english text-[10px] tracking-[0.3em] text-primary uppercase z-[110]"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-surface-container flex flex-col justify-center items-center gap-12 z-[105]"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-english text-2xl font-light tracking-[0.4em] text-secondary hover:text-primary transition-colors uppercase"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
