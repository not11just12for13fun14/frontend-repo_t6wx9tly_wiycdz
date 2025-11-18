import React from 'react'
import { motion } from 'framer-motion'

export default function Marquee() {
  return (
    <div className="relative z-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/0" />
      <div className="overflow-hidden py-6">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          className="whitespace-nowrap text-white/70"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-6 inline-block text-sm tracking-widest uppercase">Scan • Save • Remember • Engage • Convert</span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
