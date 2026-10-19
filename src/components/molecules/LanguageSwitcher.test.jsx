import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '@/context/LanguageContext.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

describe('LanguageSwitcher molecule', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = ''
  })

  it('renders both language buttons with flags and sets ES as active by default (spec: Language switcher rendering in Navbar)', () => {
    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    )

    const esButton = screen.getByRole('button', { name: /español|spanish/i })
    const enButton = screen.getByRole('button', { name: /inglés|english/i })

    expect(esButton).toBeInTheDocument()
    expect(enButton).toBeInTheDocument()

    expect(esButton).toHaveAttribute('aria-pressed', 'true')
    expect(enButton).toHaveAttribute('aria-pressed', 'false')

    expect(screen.getByText('🇪🇸')).toBeInTheDocument()
    expect(screen.getByText('🇬🇧')).toBeInTheDocument()
    expect(screen.queryByText('ES')).not.toBeInTheDocument()
    expect(screen.queryByText('EN')).not.toBeInTheDocument()
  })


  it('switches active state to EN when clicked (spec: Switching language via user click)', () => {
    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    )

    const enButton = screen.getByRole('button', { name: /inglés|english/i })
    const esButton = screen.getByRole('button', { name: /español|spanish/i })

    fireEvent.click(enButton)

    expect(enButton).toHaveAttribute('aria-pressed', 'true')
    expect(esButton).toHaveAttribute('aria-pressed', 'false')
    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('portfolio_lang')).toBe('en')

    fireEvent.click(esButton)

    expect(esButton).toHaveAttribute('aria-pressed', 'true')
    expect(enButton).toHaveAttribute('aria-pressed', 'false')
    expect(document.documentElement.lang).toBe('es')
  })
})
