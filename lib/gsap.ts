/**
 * GSAP setup — registers free plugins.
 * Import from here instead of directly from 'gsap' so plugins are
 * always registered before first use.
 *
 * Must only be imported in client components ("use client").
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Default ease used across all reveal animations
gsap.defaults({ ease: 'power3.out' })

export { gsap, ScrollTrigger, useGSAP }
