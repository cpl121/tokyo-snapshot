'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const toggle = () => {
    const next = locale === 'es' ? 'en' : 'es'
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold tracking-widest rounded-md border border-border-default text-text-muted hover:text-white hover:border-primary-600/40 transition-colors duration-150 disabled:opacity-50"
    >
      <span className={locale === 'es' ? 'text-white' : 'text-text-faint'}>ES</span>
      <span className="text-border-muted">/</span>
      <span className={locale === 'en' ? 'text-white' : 'text-text-faint'}>EN</span>
    </button>
  )
}
