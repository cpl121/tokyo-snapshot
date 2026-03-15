'use client'

import { useState, useEffect, useId } from 'react'
import { navLinks } from '@/lib/stats'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  const handleNavClick = (id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-surface-base/95 backdrop-blur-md border-b border-border-default'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <div className="flex items-center gap-3" aria-label="Tokio en Cifras">
            <span className="text-2xl font-bold text-primary-600 leading-none" aria-hidden="true">
              東京
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white leading-tight">Tokio en Cifras</p>
              <p className="text-xs text-text-subtle leading-tight">Estadísticas 2024–2025</p>
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2"
          >
            <span
              aria-hidden="true"
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              aria-hidden="true"
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              aria-hidden="true"
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen animate-slide-down' : 'max-h-0'
        }`}
      >
        <div className="bg-surface-subtle/98 backdrop-blur-md border-t border-border-default px-4 py-4">
          <div className="grid grid-cols-2 gap-1" role="list">
            {navLinks.map((link) => (
              <button
                key={link.id}
                role="listitem"
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2.5 text-sm text-text-muted hover:text-white hover:bg-primary-600/10 rounded-lg transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
