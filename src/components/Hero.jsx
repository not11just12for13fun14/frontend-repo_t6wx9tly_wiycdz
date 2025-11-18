import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0.75)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80"
        >
          The QR-native ad platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent"
        >
          Turn every screen into a
          <br className="hidden sm:block" />
          memorable moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/80"
        >
          Showtag connects TV audiences to your brand in a tap. Scan the bottom-right QR code, and our companion app stores everything — offers, trailers, links — for later.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-neutral-200 transition">
            See live demo
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">
            Talk to sales
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { title: 'Scan-first creative', desc: 'Designs that prime viewers to scan on any screen.' },
            { title: 'Companion app memory', desc: 'Everything saved for later — no lost moments.' },
            { title: 'Actionable analytics', desc: 'Understand attention and conversions across screens.' },
          ].map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
              <div className="text-sm font-semibold text-white">{i.title}</div>
              <div className="mt-1 text-sm text-white/70">{i.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
