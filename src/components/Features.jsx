import React from 'react'
import { QrCode, Smartphone, BarChart3, Tv2, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const items = [
    {
      icon: <QrCode className="h-5 w-5" />, 
      title: 'QR-first storytelling',
      desc: 'Creative built for the scan. Frame-perfect QR placements and motion cues that invite action.'
    },
    {
      icon: <Smartphone className="h-5 w-5" />, 
      title: 'Companion app recall',
      desc: 'Viewers save offers, trailers, and links to revisit later — no FOMO, no friction.'
    },
    {
      icon: <BarChart3 className="h-5 w-5" />, 
      title: 'Realtime insights',
      desc: 'Measure scans, dwell time, and downstream actions with privacy-first analytics.'
    },
    {
      icon: <Tv2 className="h-5 w-5" />, 
      title: 'Omni-screen ready',
      desc: 'From broadcast to OOH to stadium jumbotrons — consistent UX, consistent uplift.'
    },
    {
      icon: <Clock className="h-5 w-5" />, 
      title: 'Moments that last',
      desc: 'Everything captured to revisit when it’s convenient. Attention becomes memory.'
    },
  ]

  return (
    <section id="product" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ hidden: {}, show: {} }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {items.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              {f.icon}
            </div>
            <h3 className="text-white font-semibold">{f.title}</h3>
            <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
