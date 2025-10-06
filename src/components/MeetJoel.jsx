// src/components/MeetJoel.jsx
import React from "react";
import joel from "../assets/joel.jpg";

export default function MeetJoel() {
  return (
    <section id="meet-joel" className="section">
      <div className="container-narrow grid gap-8 md:grid-cols-[30%_1fr] items-start">
        {/* Left: avatar + greeting
            - mobile: row, centered
            - md+: column, left-aligned */}
        <div className="flex items-center justify-center gap-4 mx-auto
                        md:mx-0 md:flex-col md:items-start">
          <img
            src={joel}
            alt="Joel J. Coleman"
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className="leading-tight text-center md:text-left">
            <div className="text-white/80 text-lg sm:text-xl">Hey!</div>
            <div className="text-2xl sm:text-3xl font-semibold">
              I&apos;m <span className="font-bold">Joel.</span>
            </div>
          </div>
        </div>

        {/* Right: two paragraphs */}
        <div className="space-y-4 text-white/80">
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
