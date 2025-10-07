// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-section">
      {/* Vertically center the whole block */}
      <div className="container-narrow min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="w-full max-w-3xl mx-auto">
          {/* Blurb: white card + dark text */}
          <div className="mb-6 rounded-xl border border-card-border bg-card p-4 text-center text-on-card">
            <p>
              Joel typically responds within <span className="font-semibold">three business days</span> to
              schedule a <span className="font-semibold">complimentary consultation</span>.
            </p>
          </div>

          {/* Form (white card) */}
          <div className="rounded-2xl border border-card-border bg-card p-6 md:p-8 shadow-soft text-on-card">
            <h1 className="text-2xl font-semibold">Get in touch</h1>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-6 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Row: Name / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-on-card">
                    Name <span className="text-section">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="
                      mt-1 block w-full rounded-xl
                      border border-field-border bg-card p-3
                      text-on-card placeholder-placeholder
                      focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60
                    "
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-on-card">
                    Email <span className="text-section">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@district.org"
                    className="
                      mt-1 block w-full rounded-xl
                      border border-field-border bg-card p-3
                      text-on-card placeholder-placeholder
                      focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60
                    "
                  />
                </div>
              </div>

              {/* Row: Organization / Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-on-card">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="org"
                    placeholder="District / School / Org"
                    className="
                      mt-1 block w-full rounded-xl
                      border border-field-border bg-card p-3
                      text-on-card placeholder-placeholder
                      focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60
                    "
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-on-card">
                    Role (optional)
                  </label>
                  <input
                    id="role"
                    name="role"
                    placeholder="Superintendent, Board Chair, Principal…"
                    className="
                      mt-1 block w-full rounded-xl
                      border border-field-border bg-card p-3
                      text-on-card placeholder-placeholder
                      focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-on-card">
                  Message <span className="text-section">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Share your priorities, timeline, and any context you'd like Joel to review."
                  className="
                    mt-1 block w-full rounded-xl
                    border border-field-border bg-card p-3
                    text-on-card placeholder-placeholder
                    focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  btn w-full bg-section text-ink hover:opacity-90
                  focus:outline-none focus:ring-2 focus:ring-section
                  focus:ring-offset-2 focus:ring-offset-card
                "
              >
                Send message
              </button>

              <p className="text-xs text-on-card-muted">
                Prefer email?{" "}
                <a className="underline text-section hover:opacity-90" href="mailto:joeljcoleman@gmail.com">
                  joeljcoleman@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
