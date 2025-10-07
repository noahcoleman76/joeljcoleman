// src/components/FinalCta.jsx
import React from "react";

export default function FinalCta() {
  // Base-aware path (dev + GitHub Pages)
  const bg = `${import.meta.env.BASE_URL}media/joel2.jpg`;

  return (
    <section id="cta" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover" />

        {/* Readability scrim: mobile = 0.45, md+ = 0.55 */}
        <div className="absolute inset-0 bg-scrim md:bg-scrim-strong" />

        {/* Gentle blends into the site background (tokenized via theme()) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,theme(colors.background)/60_0%,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,theme(colors.background)/40_0%,transparent_25%)]" />
      </div>

      {/* Centered copy */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-10 text-center">
        <h2 className="font-primary font-extrabold leading-tight tracking-tight text-ink
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
          Better learning. Stronger schools. Lasting success.
        </h2>
      </div>
    </section>
  );
}
