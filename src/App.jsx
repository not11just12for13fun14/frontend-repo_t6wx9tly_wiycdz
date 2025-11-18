import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Marquee from './components/Marquee'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* subtle starfield background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(35,35,35,0.6),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(20,20,20,0.8),transparent_40%)]" />

      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <CTA />

      <footer id="contact" className="relative z-10 border-t border-white/10/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="text-2xl font-extrabold">Showtag</div>
              <p className="mt-2 text-white/70 text-sm">The QR-native advertising platform connecting screens to a dedicated mobile memory.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">Company</div>
              <ul className="mt-3 space-y-2 text-white/70 text-sm">
                <li><a href="#product" className="hover:text-white">Product</a></li>
                <li><a href="#advertisers" className="hover:text-white">Advertisers</a></li>
                <li><a href="#brands" className="hover:text-white">Brands</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">Get in touch</div>
              <form className="mt-3 grid grid-cols-1 gap-3 sm:flex">
                <input type="email" placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
                <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-neutral-200 transition">Request demo</button>
              </form>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
            <span>© {new Date().getFullYear()} Showtag. All rights reserved.</span>
            <span>Designed for attention — built for memory.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
