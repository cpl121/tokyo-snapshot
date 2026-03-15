import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsSummary from '@/components/StatsSummary'
import SectionHeader from '@/components/SectionHeader'
import StatsTable from '@/components/StatsTable'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedBar from '@/components/AnimatedBar'
import Footer from '@/components/Footer'
import { sections } from '@/lib/stats'

export default function Home() {
  const getSection = (id: string) => sections.find((s) => s.id === id)

  const poblacion     = getSection('poblacion')!
  const densidad      = getSection('densidad')!
  const economia      = getSection('economia')!
  const renta         = getSection('renta')!
  const desempleo     = getSection('desempleo')!
  const empresas      = getSection('empresas')!
  const seguridad     = getSection('seguridad')!
  const costeVida     = getSection('coste-vida')!
  const vivienda      = getSection('vivienda')!
  const turismo       = getSection('turismo')!
  const transporte    = getSection('transporte')!
  const esperanzaVida = getSection('esperanza-vida')!
  const educacion     = getSection('educacion')!
  const extranjeros   = getSection('extranjeros')!

  return (
    <main id="main-content" className="min-h-screen bg-surface-base">
      <Navbar />
      <Hero />
      <StatsSummary />

      {/* ── Main content sections ──────────────────────────────────── */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">

        {/* Población */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={poblacion.id} icon={poblacion.icon} title={poblacion.title} description={poblacion.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={poblacion.rows} />
          </ScrollReveal>
        </section>

        {/* Densidad */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={densidad.id} icon={densidad.icon} title={densidad.title} description={densidad.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={densidad.rows} />
          </ScrollReveal>
        </section>

        {/* Economía y PIB */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={economia.id} icon={economia.icon} title={economia.title} description={economia.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={economia.rows} />
          </ScrollReveal>
        </section>

        {/* Renta e Ingresos */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={renta.id} icon={renta.icon} title={renta.title} description={renta.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={renta.rows} />
          </ScrollReveal>
        </section>

        {/* Tasa de Paro */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={desempleo.id} icon={desempleo.icon} title={desempleo.title} description={desempleo.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={desempleo.rows} />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="mt-6">
            <div className="flex items-start gap-3 bg-primary-600/5 border border-primary-600/15 rounded-card p-4">
              <span className="text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Japón mantiene una de las tasas de desempleo más bajas de la OCDE. El mercado
                laboral de Tokio como motor económico nacional se sitúa habitualmente por debajo
                de la media del país.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Establecimientos y Empresas */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={empresas.id} icon={empresas.icon} title={empresas.title} description={empresas.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={empresas.rows} />
          </ScrollReveal>
        </section>

        {/* Delincuencia y Seguridad */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={seguridad.id} icon={seguridad.icon} title={seguridad.title} description={seguridad.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={seguridad.rows} />
          </ScrollReveal>

          {/* Safety index cards with animated bars */}
          <ScrollReveal stagger delay={0.1} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <p className="text-xs text-text-subtle uppercase tracking-widest mb-2">Índice de criminalidad</p>
              <p className="text-3xl font-black text-primary-500 mb-1">24,33</p>
              <AnimatedBar value={24.33} color="red" />
              <p className="text-xs text-text-faint mt-2">De 0 (más seguro) a 100 (más peligroso) · Numbeo 2025</p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-text-subtle uppercase tracking-widest mb-2">Índice de seguridad</p>
              <p className="text-3xl font-black text-success-400 mb-1">75,67</p>
              <AnimatedBar value={75.67} color="green" />
              <p className="text-xs text-text-faint mt-2">De 0 (menos seguro) a 100 (más seguro) · Numbeo 2025</p>
            </div>
          </ScrollReveal>
        </section>

        {/* Coste de Vida */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={costeVida.id} icon={costeVida.icon} title={costeVida.title} description={costeVida.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={costeVida.rows} />
          </ScrollReveal>
        </section>

        {/* Vivienda y Alquiler */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={vivienda.id} icon={vivienda.icon} title={vivienda.title} description={vivienda.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={vivienda.rows} />
          </ScrollReveal>
        </section>

        {/* Turismo */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={turismo.id} icon={turismo.icon} title={turismo.title} description={turismo.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={turismo.rows} />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="mt-6">
            <div className="card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs text-text-subtle uppercase tracking-widest mb-1">Récord histórico 2024</p>
                <p className="text-2xl font-black text-white">36,9 millones de turistas extranjeros</p>
                <p className="text-sm text-text-subtle mt-1">llegaron a Japón en 2024</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-3xl font-black text-primary-500">+14%</p>
                <p className="text-xs text-text-faint">vs. 2023</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Transporte */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={transporte.id} icon={transporte.icon} title={transporte.title} description={transporte.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={transporte.rows} />
          </ScrollReveal>
          <ScrollReveal stagger delay={0.1} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: '9', label: 'Líneas de metro' },
              { value: '180', label: 'Estaciones' },
              { value: '195 km', label: 'Red total' },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <p className="text-3xl font-black text-primary-500 mb-1">{item.value}</p>
                <p className="text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Esperanza de Vida */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={esperanzaVida.id} icon={esperanzaVida.icon} title={esperanzaVida.title} description={esperanzaVida.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={esperanzaVida.rows} />
          </ScrollReveal>
        </section>

        {/* Educación */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader id={educacion.id} icon={educacion.icon} title={educacion.title} description={educacion.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={educacion.rows} />
          </ScrollReveal>
        </section>

        {/* Población Extranjera */}
        <section className="py-16">
          <ScrollReveal>
            <SectionHeader id={extranjeros.id} icon={extranjeros.icon} title={extranjeros.title} description={extranjeros.description} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={extranjeros.rows} />
          </ScrollReveal>

          {/* Population breakdown with animated bars */}
          <ScrollReveal delay={0.15} className="mt-6">
            <div className="card p-5">
              <p className="text-xs text-text-subtle uppercase tracking-widest mb-4">
                Principales grupos de extranjeros en Tokio
              </p>
              <div className="space-y-4">
                {[
                  { group: '1.º Chinos',     count: '>257.000',      pct: 40 },
                  { group: '2.º Coreanos',   count: 'Segundo grupo', pct: 25 },
                  { group: '3.º Vietnamitas',count: 'Tercer grupo',  pct: 15 },
                  { group: 'Otros',          count: 'Resto del mundo', pct: 20 },
                ].map((item) => (
                  <div key={item.group}>
                    <div className="flex justify-between text-xs text-text-muted mb-1">
                      <span>{item.group}</span>
                      <span className="text-text-faint">{item.count}</span>
                    </div>
                    <AnimatedBar value={item.pct} color="red" className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* Executive summary banner */}
      <ScrollReveal className="bg-gradient-to-r from-primary-950/30 via-surface-raised to-primary-950/30 border-y border-primary-900/20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0" aria-hidden="true">🗼</span>
            <div>
              <p className="label-eyebrow mb-2">Resumen ejecutivo</p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
                Tokio es el área metropolitana más poblada del mundo y una de las más relevantes
                económicamente, generando más del 21% del PIB de Japón. Mantiene una de las tasas
                de criminalidad más bajas entre las grandes ciudades del planeta, una esperanza de
                vida entre las más altas del mundo y un sistema educativo de referencia global. A
                pesar del declive demográfico de Japón, Tokio sigue atrayendo migración interna e
                internacional en cifras récord.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <Footer />
    </main>
  )
}
