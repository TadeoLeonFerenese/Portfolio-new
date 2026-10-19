import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '@/context/LanguageContext.jsx'
import LanguageDropdown from './LanguageDropdown.jsx'

describe('LanguageDropdown molecule', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = ''
  })

  it('renders the Idioma trigger button closed by default', () => {
    render(
      <LanguageProvider>
        <LanguageDropdown />
      </LanguageProvider>
    )

    const trigger = screen.getByRole('button', { name: /idioma/i })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('opens dropdown on click displaying Español and Inglés options', () => {
    render(
      <LanguageProvider>
        <LanguageDropdown />
      </LanguageProvider>
    )

    const trigger = screen.getByRole('button', { name: /idioma/i })
    fireEvent.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const listbox = screen.getByRole('listbox')
    expect(listbox).toBeInTheDocument()

    const esOption = screen.getByRole('option', { name: /español/i })
    const enOption = screen.getByRole('option', { name: /inglés/i })

    expect(esOption).toBeInTheDocument()
    expect(enOption).toBeInTheDocument()
    expect(esOption).toHaveAttribute('aria-selected', 'true')
    expect(enOption).toHaveAttribute('aria-selected', 'false')
  })

  it('selects English when clicked, updates document.documentElement.lang, and closes dropdown', () => {
    render(
      <LanguageProvider>
        <LanguageDropdown />
      </LanguageProvider>
    )

    const trigger = screen.getByRole('button', { name: /idioma/i })
    fireEvent.click(trigger)

    const enOption = screen.getByRole('option', { name: /inglés/i })
    fireEvent.click(enOption)

    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('portfolio_lang')).toBe('en')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes dropdown when clicking outside or pressing Escape', () => {
    render(
      <LanguageProvider>
        <div>
          <button type="button">Outside element</button>
          <LanguageDropdown />
        </div>
      </LanguageProvider>
    )

    const trigger = screen.getByRole('button', { name: /idioma/i })
    fireEvent.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    // Open again and click outside
    fireEvent.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.mouseDown(screen.getByRole('button', { name: /outside element/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
