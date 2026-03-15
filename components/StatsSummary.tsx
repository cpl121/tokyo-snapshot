import KpiCard from './KpiCard'
import ScrollReveal from './ScrollReveal'
import { kpiSummary } from '@/lib/stats'

export default function StatsSummary() {
  return (
    <section aria-labelledby="kpi-heading" className="bg-surface-subtle border-y border-border-faint">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="label-eyebrow mb-2">En perspectiva</p>
          <h2 id="kpi-heading" className="text-2xl sm:text-3xl font-bold text-white">
            Los números que definen Tokio
          </h2>
          <p className="text-text-subtle mt-2 text-sm">
            Cuatro indicadores clave que sitúan a Tokio en el mapa global
          </p>
        </ScrollReveal>

        {/* KPI grid — each card staggers in */}
        <ScrollReveal
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {kpiSummary.map((kpi) => (
            <KpiCard
              key={kpi.label}
              value={kpi.value}
              label={kpi.label}
              sublabel={kpi.sublabel}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
