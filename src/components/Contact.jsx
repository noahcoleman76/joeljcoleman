// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div>
          <h1 className="section-title">Get in touch</h1>
          <p className="section-subtitle">
            Tell us about your district&apos;s goals, challenges, and timeline.
          </p>

          <div className="card p-6 mt-6">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
            >
              {/* Netlify form helpers */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="mt-1 input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 input"
                  placeholder="you@district.org"
                  required
                />
              </div>

              <div>
                <label htmlFor="org" className="block text-sm font-medium">
                  Organization
                </label>
                <input
                  id="org"
                  name="org"
                  className="mt-1 input"
                  placeholder="District / School / Org"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium">
                  Role (optional)
                </label>
                <input
                  id="role"
                  name="role"
                  className="mt-1 input"
                  placeholder="Superintendent, Board Chair, Principal, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="mt-1 textarea"
                  placeholder="Share your priorities, timeline, and any context you'd like Joel to review."
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary w-full" type="submit">
                Send message
              </button>

              <p className="text-xs text-white/70">
                Prefer email?{" "}
                <a className="underline text-brand" href="mailto:hello@joeljcoleman.com">
                  hello@joeljcoleman.com
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Right: Info / Process */}
        <aside className="card p-6">
          <h3 className="text-lg font-semibold">Typical engagement flow</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-white/80">
            <li>30–45 min discovery with the superintendent &amp; board chair.</li>
            <li>Data &amp; document review; site visits &amp; stakeholder interviews.</li>
            <li>Findings, priorities, and phased implementation plan.</li>
            <li>Coaching for cabinet &amp; principal teams; progress monitoring.</li>
          </ol>

          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
            Limited openings per quarter to ensure depth and follow-through.
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Office</h4>
            <ul className="mt-2 text-white/80 text-sm space-y-1">
              <li>Joel J. Coleman Consulting</li>
              <li>Based in Utah • Remote nationwide</li>
              <li>
                <a className="text-brand underline" href="mailto:hello@joeljcoleman.com">
                  hello@joeljcoleman.com
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
