// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-background border-t border-white/10">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {/* Left: copyright */}
          <p className="text-sm text-white/70 text-center md:text-left md:justify-self-start">
            © {new Date().getFullYear()} Joel J. Coleman Consulting. All rights reserved.
          </p>

          {/* Center: JJS monogram (2×) */}
          <div className="justify-self-center">
            <span className="font-bold leading-none text-[2.5rem]" aria-label="JJS" title="JJS">
              <span className="text-[#7024ca]">j</span>
              <span className="text-brand">j</span>
              <span className="text-[#7024ca]">c</span>
            </span>
          </div>

          {/* Right: links */}
          <nav className="flex items-center justify-center md:justify-end gap-6 text-sm text-white/70 md:justify-self-end">
            <a
              href="mailto:joeljcoleman@gmail.com"
              className="hover:text-brand"
              aria-label="Email Joel J. Coleman"
            >
              joeljcoleman@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/joelcoleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
              aria-label="Joel J. Coleman on LinkedIn"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
