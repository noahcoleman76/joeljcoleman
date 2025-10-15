// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  // expose nav height as CSS var
  useEffect(() => {
    const setVar = () => {
      const h = document.querySelector("header")?.offsetHeight || 0;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    setVar();
    window.addEventListener("load", setVar, { once: true });
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, [open]);

  // close menu on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const headerClasses = [
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
    // Mobile: always solid
    "bg-background border-b border-line-subtle",
    // Desktop: transparent until scrolled or menu open
    (scrolled || open)
      ? "md:bg-background md:border-b md:border-line-subtle"
      : "md:bg-transparent md:border-b-0",
  ].join(" ");

  const link = "hover:text-brand";
  const closeMenu = () => setOpen(false);

  return (
    <header className={headerClasses}>
      <nav
        className="
          container-narrow py-3 grid items-center
          grid-cols-[1fr_auto_1fr] md:grid-cols-[auto_1fr_auto]
          grid-rows-[auto_auto] gap-y-2
        "
      >
        <div className="md:hidden" />

        <a
          href="#"
          className="text-2xl font-bold font-primary joeljcoleman-home justify-self-center md:justify-self-start"
          aria-label="joeljcoleman home"
          onClick={closeMenu}
        >
          <span className="text-ink">joel</span>
          <span className="text-brand">j</span>
          <span className="text-ink">coleman.</span>
        </a>

        <div className="hidden md:flex justify-center gap-6 text-sm text-ink-muted">
          <a href="#services" className={link}>Services</a>
          <a href="#about" className={link}>About</a>
          <a href="#case-studies" className={link}>Case Studies</a>
          <a href="#contact" className={link}>Contact</a>
        </div>

        <div className="hidden md:flex justify-end">
          <a href="mailto:hello@joeljcoleman.com" className="btn btn-primary">
            Book a consult
          </a> 
        </div>

        <button
          type="button"
          className="md:hidden justify-self-end inline-flex items-center p-2 rounded-lg text-ink-muted hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand/60"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile CTA under title, inside bar */}
        <div className="md:hidden col-span-3">
          <a href="mailto:hello@joeljcoleman.com" className="btn btn-primary w-full">
            Book a consult
          </a>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line-subtle bg-background">
          <div className="container-narrow py-3">
            <div className="flex flex-col gap-2 text-ink-muted text-base">
              <a href="#services" className="py-2 hover:text-brand" onClick={closeMenu}>Services</a>
              <a href="#about" className="py-2 hover:text-brand" onClick={closeMenu}>About</a>
              <a href="#case-studies" className="py-2 hover:text-brand" onClick={closeMenu}>Case Studies</a>
              <a href="#contact" className="py-2 hover:text-brand" onClick={closeMenu}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
