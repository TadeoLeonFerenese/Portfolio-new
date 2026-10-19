import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from './LanguageContext.jsx'
import { useLanguage } from './useLanguage.js'


describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = ''
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('defaults to Spanish (es) when no language is saved in localStorage (spec: Default initialization to Spanish)', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    })

    expect(result.current.language).toBe('es')
    expect(result.current.isSpanish).toBe(true)
    expect(result.current.isEnglish).toBe(false)
    expect(document.documentElement.lang).toBe('es')
  })

  it('restores language preference from localStorage on mount (spec: Restoring preference from storage)', () => {
    localStorage.setItem('portfolio_lang', 'en')

    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    })

    expect(result.current.language).toBe('en')
    expect(result.current.isEnglish).toBe(true)
    expect(result.current.isSpanish).toBe(false)
    expect(document.documentElement.lang).toBe('en')
  })

  it('updates language, updates document.documentElement.lang, and persists to localStorage on setLanguage', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    })

    expect(result.current.language).toBe('es')

    act(() => {
      result.current.setLanguage('en')
    })

    expect(result.current.language).toBe('en')
    expect(localStorage.getItem('portfolio_lang')).toBe('en')
    expect(document.documentElement.lang).toBe('en')

    act(() => {
      result.current.setLanguage('es')
    })

    expect(result.current.language).toBe('es')
    expect(localStorage.getItem('portfolio_lang')).toBe('es')
    expect(document.documentElement.lang).toBe('es')
  })
})
