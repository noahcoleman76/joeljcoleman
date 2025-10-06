// src/components/ValueProp.jsx
import React from "react";

export default function ValueProp() {
  return (
    <section id="value" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
        {/* Left: copy + CTAs */}
        <div>
          <h2 className="section-title">
            School & District Consulting that Moves the Needle
          </h2>
          <p className="section-subtitle">
            With decades of leadership in education, Joel Coleman is a proven superintendent and reform advocate. He helps districts reimagine learning—focusing on mastery, empowering staff, and driving lasting improvements for students and schools alike.
          </p>

          {/* CTAs: stacked on mobile, side-by-side on sm+; wider + no-wrap */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              className="btn btn-primary w-full sm:w-auto whitespace-nowrap px-6"
              href="#contact"
            >
              Start a conversation
            </a>
            <a
              className="btn btn-outline w-full sm:w-auto whitespace-nowrap px-6"
              href="#services"
            >
              Explore services
            </a>
          </div>

          <div className="mt-6 text-xs text-white/60">
            Research-backed. Student-centered. Results-driven.
          </div>
        </div>

        {/* Right: white card (centered + tighter on mobile) */}
        <div className="md:mt-0 mt-8">
          <div className="
              mx-auto w-full max-w-md md:max-w-none
              rounded-xl border border-slate-200 bg-white
              p-4 sm:p-5 md:p-6 shadow-sm text-slate-900
            ">
            <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
              <li>
                <strong className="text-slate-900">Strategic planning</strong> — multi-year roadmaps that bring board goals to life
              </li>
              <li>
                <strong className="text-slate-900">Instructional excellence</strong> — aligned curriculum, empowered PLCs, &amp; effective MTSS practices
              </li>
              <li>
                <strong className="text-slate-900">Special education leadership</strong> — trusted guidance in compliance, inclusion, &amp; family partnerships
              </li>
              <li>
                <strong className="text-slate-900">Innovation &amp; choice</strong> — expanding opportunities with magnets, CTE, blended, &amp; online learning models
              </li>
              <li>
                <strong className="text-slate-900">Operations</strong> — smarter budgeting, stronger enrollment, &amp; efficient facilities &amp; transportation
              </li>
            </ul>

            {/* Card CTA: brand bg + white text to contrast on white card */}
            <a
              href="#contact"
              className="
                mt-5 sm:mt-6 btn w-full
                bg-brand text-white hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-brand/60
                focus:ring-offset-2 focus:ring-offset-white
              "
            >
              Request availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
