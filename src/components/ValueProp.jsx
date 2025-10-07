// src/components/ValueProp.jsx
import React from "react";

export default function ValueProp() {
  return (
    <section id="value" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
        {/* Left: copy + CTAs */}
        <div>
          <h2 className="section-title">School & District Consulting that Moves the Needle</h2>

          {/* Force tokenized color (overrides any global white/80) */}
          <p className="section-subtitle text-ink-80">
            With decades of leadership in education, Joel Coleman is a proven superintendent and reform advocate.
            He helps districts reimagine learning—focusing on mastery, empowering staff, and driving lasting
            improvements for students and schools alike.
          </p>

          {/* CTAs: stacked on mobile, side-by-side on sm+; wider + no-wrap */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a className="btn btn-primary w-full sm:w-auto whitespace-nowrap px-6" href="#contact">
              Start a conversation
            </a>
            <a className="btn btn-outline w-full sm:w-auto whitespace-nowrap px-6" href="#services">
              Explore services
            </a>
          </div>

          <div className="mt-6 text-xs text-ink-80">
            Research-backed. Student-centered. Results-driven.
          </div>
        </div>

        {/* Right: white card (tokenized colors) */}
        <div className="md:mt-0 mt-8">
          <div
            className="
              mx-auto w-full max-w-md md:max-w-none
              rounded-xl border border-card-border bg-card text-on-card
              p-4 sm:p-5 md:p-6 shadow-sm
            "
          >
            <ul className="space-y-3 text-sm leading-relaxed text-on-card-muted">
              <li>
                <strong className="text-on-card">Strategic planning</strong> — multi-year roadmaps that bring board goals to life
              </li>
              <li>
                <strong className="text-on-card">Instructional excellence</strong> — aligned curriculum, empowered PLCs, &amp; effective MTSS practices
              </li>
              <li>
                <strong className="text-on-card">Special education leadership</strong> — trusted guidance in compliance, inclusion, &amp; family partnerships
              </li>
              <li>
                <strong className="text-on-card">Innovation &amp; choice</strong> — expanding opportunities with magnets, CTE, blended, &amp; online learning models
              </li>
              <li>
                <strong className="text-on-card">Operations</strong> — smarter budgeting, stronger enrollment, &amp; efficient facilities &amp; transportation
              </li>
            </ul>

            {/* Card CTA: brand bg + white (ink) text; tokenized ring + offset */}
            <a
              href="#contact"
              className="
                mt-5 sm:mt-6 btn w-full
                bg-brand text-ink hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-brand/60
                focus:ring-offset-2 focus:ring-offset-card
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
