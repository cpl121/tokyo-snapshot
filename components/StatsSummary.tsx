'use client'

import KpiCard from './KpiCard'
import ScrollReveal from './ScrollReveal'
import { useTranslations } from 'next-intl'

interface KpiItem {
  value: string
  label: string
  sublabel?: string
}

function StatsSummaryInner({ kpiSummary }: { kpiSummary: KpiItem[] }) {
  const t = useTranslations('summary')

  return (
    <section
      aria-labelledby="kpi-heading"
      className="bg-surface-subtle border-y border-border-faint"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal className="text-center mb-12">
          <p className="label-eyebrow mb-2">{t('eyebrow')}</p>
          <h2 id="kpi-heading" className="text-2xl sm:text-3xl font-bold text-white">
            {t('heading')}
          </h2>
          <p className="text-text-subtle mt-2 text-sm">{t('description')}</p>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiSummary.map((kpi) => (
            <KpiCard key={kpi.label} value={kpi.value} label={kpi.label} sublabel={kpi.sublabel} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

// StatsSummary is used inside NextIntlClientProvider so useTranslations works
export default function StatsSummary({ kpiSummary }: { kpiSummary: KpiItem[] }) {
  return <StatsSummaryInner kpiSummary={kpiSummary} />
}
