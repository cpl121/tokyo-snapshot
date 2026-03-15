# 東京 Tokio en Cifras

> Estadísticas completas de Tokio 2024–2025 — la ciudad más grande del mundo bajo el microscopio.

Una landing de datos construida con Next.js 15, GSAP y Lenis que explora en profundidad los números que definen Tokio: desde su megalópolis de 37 millones de habitantes hasta su índice de criminalidad de los más bajos del mundo.

---

## Estadísticas destacadas

| Indicador | Dato |
|---|---|
| Población (área metropolitana) | **37 millones** de habitantes |
| Economía urbana mundial | **2.ª posición** global por PIB metropolitano |
| Índice de criminalidad | **24,33** — clasificado como Bajo (Numbeo 2025) |
| Esperanza de vida femenina | **87 años** — 6.º ranking mundial masculino |

## Secciones

La web cubre **14 categorías** de datos con tablas, indicadores visuales y contexto comparativo:

1. **Población** — evolución histórica y proyecciones del Gran Tokio
2. **Densidad de Población** — comparativa por distritos y prefecturas
3. **Economía y PIB** — PIB metropolitano, sectores y crecimiento
4. **Renta e Ingresos** — salario medio, distribución y coste relativo
5. **Tasa de Paro** — desempleo histórico y comparativa internacional
6. **Establecimientos y Empresas** — tejido empresarial y sectores dominantes
7. **Delincuencia y Seguridad** — estadísticas de criminalidad y seguridad pública
8. **Coste de Vida** — índices de precios, alquiler y poder adquisitivo
9. **Vivienda y Alquiler** — mercado inmobiliario y tendencias de precio
10. **Turismo** — llegadas, pernoctaciones y atracciones más visitadas
11. **Transporte** — red de metro, trenes y movilidad urbana
12. **Esperanza de Vida** — datos de salud y longevidad
13. **Educación** — índices de escolarización y resultados académicos
14. **Población Extranjera** — comunidades y distribución por nacionalidades

---

## Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 15.1 | Framework — App Router, SSG |
| React | 19 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 3.4 | Estilos |
| GSAP + ScrollTrigger | 3.14 | Animaciones y scroll-driven effects |
| @gsap/react | 2.1 | Hook `useGSAP` para React 18+ |
| Lenis | 1.3 | Smooth scroll |

## Animaciones

- **Hero entrance** — timeline secuencial con kanji, titular, badges y scroll cue
- **Scroll progress bar** — línea roja en la parte superior que crece con el scroll
- **ScrollReveal** — fade-up con stagger en secciones y tarjetas al entrar en viewport
- **SectionHeader** — barra vertical con `scaleY`, título deslizante y descripción encadenados en timeline
- **Smooth scroll** — Lenis con lerp 0.08, integrado con ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`

---

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint       # ESLint
npm run format     # Prettier
```

## Estructura

```
app/
├── layout.tsx        # Root layout con Lenis + ScrollProgress
├── page.tsx          # Landing — 14 secciones de estadísticas
└── globals.css

components/
├── Hero.tsx          # Hero con animación GSAP timeline
├── Navbar.tsx        # Navbar fija con hamburger menu
├── StatsSummary.tsx  # KPI cards destacados
├── SectionHeader.tsx # Cabecera animada por sección
├── StatsTable.tsx    # Tabla de datos
├── ScrollReveal.tsx  # Wrapper de animación scroll-triggered
├── ScrollProgress.tsx # Barra de progreso de scroll
├── SmoothScroll.tsx  # Provider de Lenis
├── KpiCard.tsx       # Tarjeta de indicador clave
├── AnimatedBar.tsx   # Barra visual de datos
└── Footer.tsx

lib/
├── gsap.ts           # Configuración y exports de GSAP
└── stats.ts          # Todos los datos estadísticos
```
