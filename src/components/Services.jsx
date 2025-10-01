import React from 'react'

const items = [
  {
    title: "District Strategic Planning",
    body: "Facilitated board & community engagement, KPIs, and an executable roadmap for the next 3–5 years."
  },
  {
    title: "Teaching & Learning",
    body: "Curriculum audits, assessment alignment, walkthrough calibration, and coaching for principals & PLCs."
  },
  {
    title: "Special Education",
    body: "IDEA compliance, inclusive practices, due process risk reduction, and parent partnerships that rebuild trust."
  },
  {
    title: "School Turnaround",
    body: "Stabilize culture, improve attendance, strengthen Tier 1 instruction, and accelerate growth trajectories."
  },
  {
    title: "Innovation & Choice",
    body: "Program design for magnets, CTE pathways, virtual/blended options, and community partnerships."
  },
  {
    title: "Operations & Finance",
    body: "Enrollment and boundary reviews, transportation efficiency, facilities planning, and sustainable budgeting."
  }
]

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-narrow">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">Clear scopes, transparent timelines, and practical deliverables your team can own.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
