# 東京 Tokyo by the Numbers

> Comprehensive Tokyo statistics 2024–2025 — the world's largest city under the microscope.

A data landing page built with Next.js 15, GSAP and Lenis that digs deep into the numbers that define Tokyo: from its 37-million-person megalopolis to one of the lowest crime rates in the world.

---

## Key stats

| Indicator                      | Figure                                    |
| ------------------------------ | ----------------------------------------- |
| Population (metropolitan area) | **37 million** residents                  |
| Global urban economy           | **2nd place** by metropolitan GDP         |
| Crime index                    | **24.33** — rated Low (Numbeo 2025)       |
| Female life expectancy         | **87 years** — 6th worldwide male ranking |

## Sections

The site covers **14 data categories** with tables, visual indicators and comparative context:

1. **Population** — historical trends and projections for Greater Tokyo
2. **Population Density** — breakdown by districts and prefectures
3. **Economy & GDP** — metropolitan GDP, sectors and growth
4. **Income & Wages** — average salary, distribution and relative cost
5. **Unemployment Rate** — historical unemployment and international comparison
6. **Businesses & Companies** — business fabric and dominant sectors
7. **Crime & Safety** — crime statistics and public safety
8. **Cost of Living** — price indices, rent and purchasing power
9. **Housing & Rent** — real estate market and price trends
10. **Tourism** — arrivals, overnight stays and top attractions
11. **Transportation** — metro network, trains and urban mobility
12. **Life Expectancy** — health data and longevity
13. **Education** — enrolment rates and academic outcomes
14. **Foreign Population** — communities and breakdown by nationality

---

## Tech stack

| Technology           | Version | Purpose                              |
| -------------------- | ------- | ------------------------------------ |
| Next.js              | 15.1    | Framework — App Router, SSG          |
| React                | 19      | UI                                   |
| TypeScript           | 5       | Static typing                        |
| Tailwind CSS         | 3.4     | Styles                               |
| GSAP + ScrollTrigger | 3.14    | Animations and scroll-driven effects |
| @gsap/react          | 2.1     | `useGSAP` hook for React 18+         |
| Lenis                | 1.3     | Smooth scroll                        |
| next-intl            | 4.x     | Internationalisation (ES / EN)       |

## Animations

- **Hero entrance** — sequential timeline: kanji, heading, stat badges and scroll cue
- **Scroll progress bar** — thin red line at the top that grows with scroll
- **ScrollReveal** — fade-up with stagger on sections and cards as they enter the viewport
- **SectionHeader** — accent bar with `scaleY`, sliding title and chained description timeline
- **Smooth scroll** — Lenis with lerp 0.08, integrated with ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`

## Internationalisation

| URL   | Language          |
| ----- | ----------------- |
| `/`   | Spanish (default) |
| `/en` | English           |

Language is switched via the `ES / EN` toggle in the navbar. All UI strings live in `messages/es.json` and `messages/en.json`. Statistical data has parallel Spanish (`lib/stats.ts`) and English (`lib/stats.en.ts`) versions.

---

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # ESLint
npm run format       # Prettier
npm run format:check # Prettier check (CI)
```

## Project structure

```
app/
├── layout.tsx              # Root pass-through layout
├── [locale]/
│   ├── layout.tsx          # Locale layout — html/body, NextIntlClientProvider
│   └── page.tsx            # Main page — 14 stats sections
└── globals.css

components/
├── Hero.tsx                # Hero with GSAP timeline animation
├── Navbar.tsx              # Fixed navbar with hamburger menu + language switcher
├── LanguageSwitcher.tsx    # ES / EN toggle
├── StatsSummary.tsx        # KPI highlight cards
├── SectionHeader.tsx       # Animated section heading
├── StatsTable.tsx          # Data table
├── ScrollReveal.tsx        # Scroll-triggered animation wrapper
├── ScrollProgress.tsx      # Scroll progress bar
├── SmoothScroll.tsx        # Lenis provider
├── KpiCard.tsx             # Key indicator card
├── AnimatedBar.tsx         # Data visualisation bar
└── Footer.tsx              # Sources, credits, disclaimer

lib/
├── gsap.ts                 # GSAP setup and exports
├── stats.ts                # Spanish statistical data
├── stats.en.ts             # English statistical data
└── stats.locale.ts         # getStats(locale) helper

i18n/
├── routing.ts              # next-intl routing config
└── request.ts              # next-intl server config

messages/
├── es.json                 # Spanish UI strings
└── en.json                 # English UI strings
```
