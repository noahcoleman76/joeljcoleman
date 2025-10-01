import React from 'react'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="section-title">About Joel</h2>
          <p className="section-subtitle">
            Former superintendent and state leader with a track record of raising achievement and building trust.
          </p>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Joel J. Coleman has led diverse districts through reform and innovation—
              from strategic budgeting and special education improvements to new program design and community engagement.
            </p>
            <p>
              He brings hands‑on experience with PLCs, MTSS, inclusion, and accountability systems, matched with a collaborative leadership style.
            </p>
          </div>
        </div>
        <aside className="card p-6">
          <h3 className="font-semibold">Expertise</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Superintendent & cabinet leadership</li>
            <li>Board relations & governance</li>
            <li>Special education leadership (IDEA)</li>
            <li>Turnaround & continuous improvement</li>
            <li>Stakeholder engagement & communications</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
