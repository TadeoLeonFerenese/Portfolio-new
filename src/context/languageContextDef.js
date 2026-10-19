import { createContext } from 'react'

/** @typedef {'es' | 'en'} Language */

export const LanguageContext = createContext({
  /** @type {Language} */
  language: 'es',
  /** @type {(lang: Language) => void} */
  setLanguage: () => {},
  isSpanish: true,
  isEnglish: false,
})
