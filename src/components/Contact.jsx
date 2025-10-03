// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-[#7024ca]">
      {/* Vertically center the whole block */}
      <div className="container-narrow min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="w-full max-w-3xl mx-auto">
          {/* Blurb: white background, black text */}
          <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 text-center text-slate-900">
            <p>
              Joel typically responds within <span className="font-semibold">three business days</span> to
              schedule a <span className="font-semibold">complimentary consultation</span>.
            </p>
          </div>

          {/* Form (white card) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-soft text-slate-900">
            <h1 className="text-2xl font-semibold">Get in touch</h1>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-6 space-y-6"
            >
              {/* Netlify helpers */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Row: Name / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name <span className="text-[#7024ca]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1 block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-400 focus:border-[#7024ca]/70 focus:outline-none focus:ring-2 focus:ring-[#7024ca]/60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email <span className="text-[#7024ca]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@district.org"
                    className="mt-1 block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-400 focus:border-[#7024ca]/70 focus:outline-none focus:ring-2 focus:ring-[#7024ca]/60"
                  />
                </div>
              </div>

              {/* Row: Organization / Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-slate-700">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="org"
                    placeholder="District / School / Org"
                    className="mt-1 block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-400 focus:border-[#7024ca]/70 focus:outline-none focus:ring-2 focus:ring-[#7024ca]/60"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700">
                    Role (optional)
                  </label>
                  <input
                    id="role"
                    name="role"
                    placeholder="Superintendent, Board Chair, Principal…"
                    className="mt-1 block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-400 focus:border-[#7024ca]/70 focus:outline-none focus:ring-2 focus:ring-[#7024ca]/60"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message <span className="text-[#7024ca]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Share your priorities, timeline, and any context you'd like Joel to review."
                  className="mt-1 block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-400 focus:border-[#7024ca]/70 focus:outline-none focus:ring-2 focus:ring-[#7024ca]/60"
                />
              </div>

              <button
                type="submit"
                className="btn w-full bg-[#7024ca] text-white hover:opacity-90
             focus:outline-none focus:ring-2 focus:ring-[#7024ca]
             focus:ring-offset-2 focus:ring-offset-white"
              >
                Send message
              </button>


              <p className="text-xs text-slate-600">
                Prefer email?{" "}
                <a className="underline text-[#7024ca] hover:opacity-90" href="mailto:joeljcoleman@gmail.com">
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
