import { useLanguage } from '@/context/useLanguage.js'

/**
 * Accessible pill language toggle molecule displaying flags [ 🇪🇸 | 🇬🇧 ].
 * @param {{ className?: string }} props
 */
export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Selector de idioma / Language selector"
      className={`inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 p-0.5 backdrop-blur-md ${className}`}
    >
      <button
        type="button"
        aria-pressed={language === 'es'}
        aria-label="Cambiar idioma a Español"
        onClick={() => setLanguage('es')}
        className={`flex items-center justify-center rounded-full px-2 py-1 text-sm transition-all ${
          language === 'es'
            ? 'border border-red-500/40 bg-red-500/20 shadow-xs'
            : 'border border-transparent opacity-60 hover:opacity-100 hover:bg-zinc-800/50'
        }`}
      >
        <span>🇪🇸</span>
      </button>

      <button
        type="button"
        aria-pressed={language === 'en'}
        aria-label="Switch language to English"
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center rounded-full px-2 py-1 text-sm transition-all ${
          language === 'en'
            ? 'border border-red-500/40 bg-red-500/20 shadow-xs'
            : 'border border-transparent opacity-60 hover:opacity-100 hover:bg-zinc-800/50'
        }`}

      >
        <span>🇬🇧</span>
      </button>
    </div>
  )
}

