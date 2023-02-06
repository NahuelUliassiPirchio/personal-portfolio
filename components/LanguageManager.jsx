import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function LanguageManager () {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
        <Link href="/" locale={locale === 'en' ? 'es' : 'en'}>
            {t('changeLanguage')}
        </Link>
  )
}
