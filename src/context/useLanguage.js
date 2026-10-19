import { useContext } from 'react'
import { LanguageContext } from './languageContextDef.js'


/**
 * Custom hook to consume the current language state.
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
