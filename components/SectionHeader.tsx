'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

interface SectionHeaderProps {
  id: string
  icon: string
  title: string
  description?: string
}

export default function SectionHeader({ id, icon, title, description }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const bar = el.querySelector<HTMLElement>('[data-accent-bar]')
      const heading = el.querySelector<HTMLElement>('[data-heading]')
      const desc = el.querySelector<HTMLElement>('[data-desc]')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      if (bar)
        tl.from(bar, {
          scaleY: 0,
          duration: 0.4,
          ease: 'power2.out',
          transformOrigin: 'top center',
        })
      if (heading)
        tl.from(heading, { opacity: 0, x: -16, duration: 0.45, ease: 'power3.out' }, '-=0.2')
      if (desc) tl.from(desc, { opacity: 0, y: 10, duration: 0.4, ease: 'power2.out' }, '-=0.15')
    },
    { scope: ref }
  )

  return (
    <div ref={ref} id={id} className="mb-8">
      <div className="flex items-center gap-4 mb-3">
        {/* Red left border accent */}
        <div
          data-accent-bar
          aria-hidden="true"
          className="w-1 h-10 bg-primary-600 rounded-full flex-shrink-0"
        />
        <div data-heading className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            {icon}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        </div>
      </div>
      {description && (
        <p
          data-desc
          className="text-text-muted text-sm sm:text-base leading-relaxed ml-5 pl-4 border-l border-border-muted"
        >
          {description}
        </p>
      )}
    </div>
  )
}
