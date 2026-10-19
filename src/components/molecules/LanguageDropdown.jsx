import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/context/useLanguage.js'
import { useContent } from '@/data/i18n/content.js'

/**
 * Dropdown language selector menu for the central navigation pill.
 * Features keyboard navigation (Esc to close), outside click detection,
 * accessible ARIA attributes, and dark dashboard aesthetic.
 * @param {{ className?: string, isMobile?: boolean }} props
 */
export default function LanguageDropdown({ className = '', isMobile = false }) {
  const { language, setLanguage } = useLanguage()
  const { ui } = useContent()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const toggleDropdown = () => setIsOpen((prev) => !prev)
  const closeDropdown = () => setIsOpen(false)

  const handleSelect = (lang) => {
    setLanguage(lang)
    closeDropdown()
  }

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeDropdown()
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const options = [
    { code: 'es', label: ui.nav.spanish },
    { code: 'en', label: ui.nav.english },
  ]

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${ui.nav.languageLabel}: ${language === 'es' ? ui.nav.spanish : ui.nav.english}`}
        className={
          isMobile
            ? 'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100'
            : 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-hidden'
        }
      >
        <span className="flex items-center gap-1.5">
          <Globe aria-hidden="true" className="size-3.5 text-zinc-400" />
          <span>{ui.nav.languageLabel}</span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`size-3 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={ui.nav.languageLabel}
          className={
            isMobile
              ? 'mt-1 flex flex-col gap-1 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1.5 shadow-xl backdrop-blur-md'
              : 'absolute left-0 top-full mt-2 w-36 rounded-xl border border-zinc-800 bg-zinc-900/95 p-1.5 shadow-xl shadow-black/40 backdrop-blur-md z-50'
          }
        >

          {options.map((option) => {
            const isSelected = language === option.code
            return (
              <button
                key={option.code}
                role="option"
                type="button"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.code)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 font-sans text-xs transition-colors ${
                  isSelected
                    ? 'bg-red-500/15 font-semibold text-red-300'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-sm">
                    {option.flag}
                  </span>
                  <span>{option.label}</span>
                </span>
                {isSelected && (
                  <Check aria-hidden="true" className="size-3.5 text-red-400" />
                )}

              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
