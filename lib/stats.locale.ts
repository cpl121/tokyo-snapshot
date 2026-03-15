import { sections, navLinks, heroStats, kpiSummary } from './stats'
import { sectionsEn, navLinksEn, heroStatsEn, kpiSummaryEn } from './stats.en'

export function getStats(locale: string) {
  if (locale === 'en') {
    return {
      sections: sectionsEn,
      navLinks: navLinksEn,
      heroStats: heroStatsEn,
      kpiSummary: kpiSummaryEn,
    }
  }
  return { sections, navLinks, heroStats, kpiSummary }
}
