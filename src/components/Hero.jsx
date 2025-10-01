import React from 'react'

export default function Hero() {
  return (
    <section className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            School & District Consulting that Moves the Needle
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Joel J. Coleman is an accomplished superintendent and a champion of education reform and innovation.
            He partners with districts to deliver measurable gains in student outcomes, staff culture, and operational excellence.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#contact">Start a conversation</a>
            <a className="btn btn-outline" href="#services">Explore services</a>
          </div>
          <div className="mt-6 text-xs text-gray-500">Research‑backed. People‑centered. Results‑driven.</div>
        </div>
        <div className="card p-6">
          <ul className="space-y-3 text-sm">
            <li><strong>Strategic planning</strong> — multi‑year roadmaps aligned to board goals</li>
            <li><strong>Instructional excellence</strong> — curriculum alignment, PLCs, MTSS</li>
            <li><strong>Special education leadership</strong> — compliance, inclusion, parent trust</li>
            <li><strong>Innovation & choice</strong> — magnets, CTE, blended & online models</li>
            <li><strong>Operations</strong> — budgeting, enrollment, facilities, transportation</li>
          </ul>
          <a href="#contact" className="mt-6 btn btn-primary w-full">Request availability</a>
        </div>
      </div>
    </section>
  )
}
