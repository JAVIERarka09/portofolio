"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Pendidikan", href: "#education" },
    { name: "Keahlian", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="font-extrabold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Javier<span className="text-slate-100">.dev</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm lg:text-base font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cvjavierpagsidan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            Unduh CV
          </a>
        </nav>

        {/* Tombol Hamburger untuk HP & Tablet */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu Mobile/Tablet */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="/cvjavierpagsidan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-semibold px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Unduh CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}