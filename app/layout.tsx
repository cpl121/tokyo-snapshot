import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tokio en Cifras | Estadísticas',
  description:
    'Estadísticas completas de Tokio 2024–2025: población, economía, PIB, renta, desempleo, seguridad, coste de vida, turismo, transporte, educación y esperanza de vida.',
  keywords: [
    'Tokio estadísticas',
    'Tokyo statistics',
    'Tokio población',
    'Tokio PIB',
    'Tokio economía',
    'Japan demographics',
  ],
  openGraph: {
    title: 'Tokio en Cifras | Estadísticas 2024–2025',
    description:
      'La ciudad más grande del mundo bajo el microscopio. Datos completos de población, economía, seguridad, vivienda y más.',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-surface-base text-white antialiased">
        <ScrollProgress />
        {/* Skip-to-content — only visible on keyboard focus */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
