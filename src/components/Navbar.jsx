import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container-narrow py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg">
          <img src="/favicon.svg" alt="Joel J. Coleman" className="h-7 w-7" />
          <span>Joel J. Coleman</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-brand-700">Services</a>
          <a href="#about" className="hover:text-brand-700">About</a>
          <a href="#case-studies" className="hover:text-brand-700">Case Studies</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
          <a href="mailto:hello@joeljcoleman.com" className="btn btn-primary">Book a consult</a>
        </div>
      </nav>
    </header>
  )
}
