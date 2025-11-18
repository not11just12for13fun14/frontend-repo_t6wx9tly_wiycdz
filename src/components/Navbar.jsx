import React from 'react'
import { Menu, QrCode, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 w-full"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 opacity-60"/>
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-black/70 ring-1 ring-white/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent">
              Showtag
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#product" className="hover:text-white transition">Product</a>
            <a href="#advertisers" className="hover:text-white transition">Advertisers</a>
            <a href="#brands" className="hover:text-white transition">Brands</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#app"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition"
            >
              <QrCode className="h-4 w-4" />
              Get the app
            </motion.a>
            <button className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
