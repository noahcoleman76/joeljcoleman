import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-subtitle">Tell us about your district's goals, challenges, and timeline.</p>
          <div className="card p-6 mt-6">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <label className="block text-sm font-medium">Name
                <input name="name" className="mt-1 w-full border rounded-lg p-3" placeholder="Your name" required />
              </label>
              <label className="block text-sm font-medium mt-4">Email
                <input name="email" type="email" className="mt-1 w-full border rounded-lg p-3" placeholder="you@district.org" required />
              </label>
              <label className="block text-sm font-medium mt-4">Organization
                <input name="org" className="mt-1 w-full border rounded-lg p-3" placeholder="District / School / Org" />
              </label>
              <label className="block text-sm font-medium mt-4">Message
                <textarea name="message" className="mt-1 w-full border rounded-lg p-3" rows="5" placeholder="How can Joel help?" required></textarea>
              </label>
              <button className="btn btn-primary mt-4">Send</button>
            </form>
            <p className="text-xs text-gray-500 mt-3">Prefer email? <a className="underline" href="mailto:hello@joeljcoleman.com">hello@joeljcoleman.com</a></p>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Typical engagement flow</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>30–45 min discovery with the superintendent & board chair.</li>
            <li>Data & document review; site visits & stakeholder interviews.</li>
            <li>Findings, priorities, and phased implementation plan.</li>
            <li>Coaching for cabinet & principal teams; progress monitoring.</li>
          </ol>
          <div className="mt-6 p-4 rounded-xl bg-brand-50 border border-brand-100 text-sm text-brand-900">
            Limited openings per quarter to ensure depth and follow‑through.
          </div>
        </div>
      </div>
    </section>
  )
}
