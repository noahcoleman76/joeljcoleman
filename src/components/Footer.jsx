import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 bg-white">
      <div className="container-narrow text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© <span id="year">{new Date().getFullYear()}</span> Joel J. Coleman Consulting. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:hello@joeljcoleman.com" className="hover:text-brand-700">Email</a>
          <a href="#" className="hover:text-brand-700">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
