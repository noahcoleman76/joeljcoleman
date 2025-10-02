// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[50vh] md:min-h-[65vh] lg:min-h-[75vh] pt-0 pb-16 md:pb-24"
      aria-label="Intro"
    >
      {/* Right-side background video (full-bleed to the right, matches hero height) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[60vw]"
        aria-hidden="true"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/media/hero.mp4"
        />
        {/* Readability overlay (soft scrim) */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gentle blend so transparent header looks correct at top + left */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.background)_0%,transparent_12%),linear-gradient(to_top,theme(colors.background)_0%,transparent_25%)]" />
      </div>

      {/* Blurb: 40px gutters; cap at 70% from left on md+; EXACT vertical center */}
      <div className="absolute left-10 right-10 md:right-[35vw] top-1/2 -translate-y-1/4 z-10">
        <h1
          className="
            font-primary font-bold tracking-tight leading-[1.02]
            text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4.8rem]
            text-left 
          "
        >
          Academic <span className="text-brand">Excellence</span>{" "}
          <span className="text-white/90">Through Innovation</span>{" "}
          <span className="text-white/80"> And Mastery</span>
        </h1>
      </div>
    </section>
  );
}
