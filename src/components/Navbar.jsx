// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled((window.pageYOffset || window.scrollY) > 8);
    window.addEventListener("load", update, { once: true });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background" : "bg-transparent"
      ].join(" ")}
    >
      {/* 40px gutters via your .container-narrow */}
      <nav className="container-narrow py-4 grid items-center gap-4
                      grid-cols-[auto_1fr_auto]">
        {/* Left: Brand (40px from left due to container padding) */}
        <a href="#" className="text-2xl font-bold font-primary joeljcoleman-home"
           aria-label="joeljcoleman home">
          <span className="text-white">joel</span>
          <span className="text-brand">j</span>
          <span className="text-white">coleman.</span>
        </a>

        {/* Center: Links (true center, max space on both sides) */}
        <div className="hidden md:flex justify-center gap-6 text-sm text-white/90">
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#case-studies" className="hover:text-brand">Case Studies</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex justify-end">
          <a href="mailto:hello@joeljcoleman.com" className="btn btn-primary">
            Book a consult
          </a>
        </div>
      </nav>
    </header>
  );
}
