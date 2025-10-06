// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  const videoSrc = `${import.meta.env.BASE_URL}media/hero.mp4`;

  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        mt-[var(--nav-h,96px)] md:mt-0
        min-h-[55vh] md:min-h-[65vh] lg:min-h-[75vh]
        flex items-center justify-center md:block
      "
      aria-label="Intro"
    >
      {/* Background video: full on mobile; right-side on md+ */}
      <div
        className="
          pointer-events-none absolute inset-0
          md:inset-auto md:top-0 md:bottom-0 md:right-0 md:left-auto md:w-[60vw]
        "
        aria-hidden="true"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
        />
        <div className="absolute inset-0 bg-black/45 md:bg-black/40" />
        <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,theme(colors.background)_0%,transparent_12%),linear-gradient(to_top,theme(colors.background)_0%,transparent_25%)]" />
      </div>

      {/* Copy: centered on mobile; absolutely centered on md+ */}
      <div
        className="
          relative z-10 w-full max-w-3xl mx-auto
          px-6 sm:px-8 md:px-10
          text-center md:text-left
          md:w-auto md:absolute md:left-10 md:right-[35vw] md:top-1/2 md:-translate-y-1/2
        "
      >
        <h1 className="
          font-primary font-bold tracking-tight leading-[1.02]
          text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4.6rem]
        ">
          Academic <span className="text-brand">Excellence</span>{" "}
          <span className="text-white/90">Through Innovation</span>{" "}
          <span className="text-white/80">and Mastery</span>
        </h1>
      </div>
    </section>
  );
}
