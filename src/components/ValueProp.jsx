import React from "react";

export default function ValueProp() {
  return (
    <section id="value" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="section-title">
            School & District Consulting that Moves the Needle
          </h2>
          <p className="section-subtitle">
            With decades of leadership in education, Joel Coleman is a proven superintendent and reform advocate. He helps districts reimagine learning—focusing on mastery, empowering staff, and driving lasting improvements for students and schools alike.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#contact">Start a conversation</a>
            <a className="btn btn-outline" href="#services">Explore services</a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            Research-backed. People-centered. Results-driven.
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <ul className="space-y-3 text-sm text-white/90">
              <li><strong>Strategic planning</strong> — multi-year roadmaps that bring board goals to life</li>
              <li><strong>Instructional excellence</strong> — aligned curriculum, empowered PLCs, &amp; effective MTSS practices</li>
              <li><strong>Special education leadership</strong> — trusted guidance in compliance, inclusion, &amp; family partnerships</li>
              <li><strong>Innovation &amp; choice</strong> — expanding opportunities with magnets, CTE, blended, &amp; online learning models</li>
              <li><strong>Operations</strong> — smarter budgeting, stronger enrollment, &amp; efficient facilities & transportation</li>
            </ul>
            <a href="#contact" className="mt-6 btn btn-primary w-full">Request availability</a>
          </div>
        </div>
      </div>
    </section>
  );
}
