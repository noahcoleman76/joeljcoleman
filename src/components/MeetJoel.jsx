// src/components/MeetJoel.jsx
import React from "react";
import joel from "../assets/joel.jpg";

export default function MeetJoel() {
  return (
    <section id="meet-joel" className="section">
      <div
        className="
          container-narrow grid items-center
          gap-6 md:gap-5
          md:grid-cols-[28%_1fr]
        "
      >
        {/* Left: avatar + greeting */}
        <div className="flex items-center justify-center gap-4 mx-auto md:mx-auto md:flex-col md:items-center md:justify-center">
          <img
            src={joel}
            alt="Joel J. Coleman"
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-2 ring-line-subtle"
          />
          <div className="leading-tight text-center md:text-left">
            <div className="text-ink-80 text-lg sm:text-xl">Hey!</div>
            <div className="text-2xl sm:text-3xl font-semibold">
              I&apos;m <span className="font-bold">Joel.</span>
            </div>
          </div>
        </div>

        {/* Right: two paragraphs (slightly larger on desktop) */}
        <div className="space-y-4 md:space-y-5 text-ink-80 text-base md:text-lg">
          <p>
            I’m an educator, superintendent, and advocate for{" "}
            <span className="text-brand">reimagining</span> what learning can be.
            After decades in classrooms and district leadership, I’ve seen the power
            of teaching that focuses on <span className="text-brand">mastery</span>,
            not just metrics.
          </p>
          <p>
            My goal is to help schools and districts unlock student potential through
            meaningful learning and <span className="text-brand">innovative</span>{" "}
            approaches.
          </p>
        </div>
      </div>
    </section>
  );
}
