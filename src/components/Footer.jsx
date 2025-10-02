import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container-narrow text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Joel J. Coleman Consulting. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:hello@joeljcoleman.com" className="hover:text-brand">Email</a>
          <a href="#" className="hover:text-brand">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
