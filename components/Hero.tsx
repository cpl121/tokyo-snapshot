'use client'

import { useRef, useEffect } from 'react'
import { heroStats } from '@/lib/stats'
import { gsap } from '@/lib/gsap'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const kanjiRef     = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state — everything invisible, positioned off
      gsap.set('[data-hero]', { opacity: 0, y: 20 })
      gsap.set('[data-hero-badge]', { opacity: 0, y: 16, scale: 0.95 })
      gsap.set('[data-hero-kanji]', { opacity: 0, scale: 0.88 })

      const tl = gsap.timeline({ delay: 0.1 })

      // 1. Background kanji fades in slowly
      tl.to('[data-hero-kanji]', {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power2.out',
      }, 0)

      // 2. Eyebrow label
      tl.to('[data-hero="eyebrow"]', {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
      }, 0.15)

      // 3. h1
      tl.to('[data-hero="h1"]', {
        opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
      }, 0.3)

      // 4. Kanji subtitle
      tl.to('[data-hero="subtitle"]', {
        opacity: 1, y: 0, duration: 0.5,
      }, 0.5)

      // 5. Description
      tl.to('[data-hero="desc"]', {
        opacity: 1, y: 0, duration: 0.55,
      }, 0.6)

      // 6. Stat badges — staggered
      tl.to('[data-hero-badge]', {
        opacity: 1, y: 0, scale: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: 'back.out(1.2)',
      }, 0.75)

      // 7. Scroll cue
      tl.to('[data-hero="cue"]', {
        opacity: 1, y: 0, duration: 0.4,
      }, 1.15)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      aria-label="Introducción — Tokio en Cifras"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-surface-base via-surface-subtle to-surface-raised"
    >
      {/* Decorative kanji */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          ref={kanjiRef}
          data-hero-kanji
          className="text-[28rem] sm:text-[36rem] lg:text-[48rem] font-bold text-white/[0.025] leading-none"
        >
          東京
        </span>
      </div>

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">

          {/* Eyebrow label */}
          <div
            data-hero="eyebrow"
            className="inline-flex items-center gap-2 bg-primary-600/10 border border-primary-600/20 rounded-pill px-4 py-1.5 mb-8"
          >
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-medium text-primary-400 tracking-widest uppercase">
              Datos 2024–2025
            </span>
          </div>

          {/* Page heading */}
          <h1
            data-hero="h1"
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-none"
          >
            Tokio
            <span className="text-primary-600"> en Cifras</span>
          </h1>

          {/* Decorative Japanese subtitle */}
          <p
            aria-hidden="true"
            data-hero="subtitle"
            className="text-xl sm:text-2xl text-text-subtle font-light mb-4 tracking-widest2"
          >
            東京統計データ
          </p>

          {/* Description */}
          <p
            data-hero="desc"
            className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            La ciudad más grande del mundo bajo el microscopio.
            <br className="hidden sm:block" />
            Estadísticas completas de población, economía, seguridad y calidad de vida.
          </p>

          {/* Stat badges */}
          <ul
            aria-label="Indicadores destacados"
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-16 list-none p-0"
          >
            {heroStats.map((stat) => (
              <li
                key={stat.label}
                data-hero-badge
                className="bg-surface-raised/80 border border-border-default rounded-card px-4 py-4 backdrop-blur-sm hover:border-primary-600/30 transition-colors duration-300"
              >
                <p className="text-2xl sm:text-3xl font-black text-primary-500 leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                  {stat.label}
                </p>
                <p className="text-xs text-text-subtle">{stat.sublabel}</p>
              </li>
            ))}
          </ul>

          {/* Scroll cue */}
          <div
            aria-hidden="true"
            data-hero="cue"
            className="flex flex-col items-center gap-2 text-text-faint"
          >
            <span className="text-xs tracking-widest uppercase">Explorar</span>
            <div className="flex flex-col items-center animate-bounce">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-5 h-5 -mt-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent pointer-events-none"
      />
    </section>
  )
}
