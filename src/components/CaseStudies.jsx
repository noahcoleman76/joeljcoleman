import React from 'react'

const cases = [
  {
    title: "Elementary Literacy Growth",
    result: "23% increase in on‑grade‑level reading in two years",
    summary: "Aligned Tier 1 instruction, implemented data cycles, and coached PLCs for consistency across classrooms."
  },
  {
    title: "SPED Trust Rebuilt",
    result: "Due process risk reduced 70% in one year",
    summary: "Redesigned IEP processes, expanded inclusion, and created parent advisory groups for authentic partnership."
  },
  {
    title: "Transportation Efficiency",
    result: "$1.1M reallocated to classrooms",
    summary: "Boundary review, bell schedule optimization, and routing software improvements lowered costs while improving service."
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section bg-white">
      <div className="container-narrow">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">A glimpse into measurable outcomes from past engagements.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.title} className="card p-6">
              <div className="text-sm text-brand-700 font-medium">{c.result}</div>
              <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
