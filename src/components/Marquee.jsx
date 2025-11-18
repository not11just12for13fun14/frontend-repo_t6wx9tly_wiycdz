import React from 'react'

export default function Marquee() {
  return (
    <div className="relative z-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/0" />
      <div className="overflow-hidden py-6">
        <div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap text-white/70">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-6 inline-block text-sm tracking-widest uppercase">Scan • Save • Remember • Engage • Convert</span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  )
}
