import React from "react";
import joel from "../assets/joel.jpg"; // <-- Vite will bundle this

export default function MeetJoel() {
  return (
    <section id="meet-joel" className="section">
      <div className="container-narrow grid gap-8 md:grid-cols-[30%_1fr] items-start meetjoel">
        {/* Left 30%: round icon + greeting */}
        <div className="flex flex-col items-start gap-4 leftmeet">
          <img
            src={joel}
            alt="Joel J. Coleman"
            className="h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className="leading-tight">
            <div className="text-white/80 hey">Hey!</div>
            <div className="hey">
              I&apos;m <span className="font-bold">Joel.</span>
            </div>
          </div>
        </div>

        {/* Right 70%: two paragraphs */}
        <div className="space-y-4 text-white/80 meetright">
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
