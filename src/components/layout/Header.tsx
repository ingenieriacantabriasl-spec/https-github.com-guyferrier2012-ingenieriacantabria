"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Industrial", href: "/industrial" },
  { label: "Edificación", href: "/edificacion" },
  { label: "Agronómica", href: "/agronomica" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/#contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1e30] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#d4631a] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm font-heading">IC</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-heading font-700 text-sm tracking-wide">INGENIERÍA</span>
              <span className="text-[#d4631a] font-heading font-600 text-xs tracking-widest">CANTABRIA</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-body transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="btn-primary text-sm px-5 py-2"
            >
              Solicitar presupuesto
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menú"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-white transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1e30] border-t border-[#1a3a5c]">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white text-base font-body py-2 border-b border-[#1a3a5c]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm text-center mt-2"
            >
              Solicitar presupuesto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
