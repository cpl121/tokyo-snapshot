'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  stagger?: boolean
  delay?: number
  distance?: number
}

export default function ScrollReveal({
  children,
  className = '',
  stagger = false,
  delay = 0,
  distance = 36,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const targets = stagger ? Array.from(el.children) : [el]

      gsap.set(targets, { opacity: 0, y: distance })

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            stagger: stagger ? 0.08 : 0,
            ease: 'power3.out',
            clearProps: 'opacity,y',
          })
        },
      })
    },
    { scope: ref, dependencies: [stagger, delay, distance] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
