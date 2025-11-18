import React from 'react'

export default function CTA() {
  return (
    <section id="advertisers" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-8">
          <h3 className="text-white text-2xl font-bold">For Advertisers</h3>
          <p className="mt-2 text-white/80">Bake conversion into your creative. Place a smart QR in-frame and guide viewers to immediate action.</p>
          <ul className="mt-4 space-y-2 text-white/80 text-sm list-disc list-inside">
            <li>Dynamic QR with time-based offers</li>
            <li>Seamless handoff to the companion app</li>
            <li>Closed-loop measurement</li>
          </ul>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-neutral-200 transition">Book a strategy call</a>
        </div>
        <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-8">
          <h3 className="text-white text-2xl font-bold">For Brands</h3>
          <p className="mt-2 text-white/80">Make moments stick. Every scan saves content to revisit when the audience has time to engage.</p>
          <ul className="mt-4 space-y-2 text-white/80 text-sm list-disc list-inside">
            <li>Persistent brand cards in the app</li>
            <li>Shoppable and shareable links</li>
            <li>CRM-friendly exports</li>
          </ul>
          <a href="#demo" className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">See the product</a>
        </div>
      </div>
    </section>
  )
}
