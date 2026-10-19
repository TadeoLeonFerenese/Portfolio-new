import { useEffect, useState } from 'react'
import { LanguageContext } from './languageContextDef.js'

const STORAGE_KEY = 'portfolio_lang'


/**
 * Provider wrapping the application to offer reactive language state.
 * @param {{ children: React.ReactNode }} props
 */
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        return stored === 'en' ? 'en' : 'es'
      }
    } catch {
      // Ignore localStorage access failures
    }
    return 'es'
  })

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, language)
      }
    } catch {
      // Ignore storage errors
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const setLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      setLanguageState(lang)
    }
  }

  const value = {
    language,
    setLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en',
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

