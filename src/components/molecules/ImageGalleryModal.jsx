import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Full-viewport modal lightbox rendered via Portal onto document.body so parent CSS
 * transforms/filters never trap it inside a card.
 * @param {{
 *   isOpen: boolean,
 *   onClose: () => void,
 *   images: Array<{ src: string, label: string, aspect?: string, type?: string }>,
 *   currentIndex: number,
 *   onNavigate: (newIndex: number) => void,
 *   projectTitle?: string,
 * }} props
 */
export default function ImageGalleryModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
  projectTitle = '',
}) {
  const total = images.length
  const currentImage = images[currentIndex] ?? images[0]

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' && total > 1) {
        onNavigate((currentIndex + 1) % total)
      } else if (e.key === 'ArrowLeft' && total > 1) {
        onNavigate((currentIndex - 1 + total) % total)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentIndex, total, onClose, onNavigate])

  if (!isOpen || !currentImage || typeof document === 'undefined') {
    return null
  }

  const handlePrev = () => {
    if (total > 1) {
      onNavigate((currentIndex - 1 + total) % total)
    }
  }

  const handleNext = () => {
    if (total > 1) {
      onNavigate((currentIndex + 1) % total)
    }
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de capturas ${projectTitle ? `- ${projectTitle}` : ''}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="relative flex max-h-[94vh] w-[96vw] max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl shadow-black/90 xl:max-w-7xl">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/95 px-5 py-3.5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                {projectTitle && (
                  <span className="font-heading text-sm font-bold tracking-tight text-white sm:text-base">
                    {projectTitle}
                  </span>
                )}
                {total > 1 && (
                  <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-orange-300">
                    Vista {currentIndex + 1} de {total}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="rounded-lg border border-white/10 bg-zinc-800/80 p-2 text-zinc-400 transition-colors hover:border-red-500/50 hover:bg-red-500/20 hover:text-white"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Center Display Area with Arrows */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-zinc-950 p-2 sm:p-6">
          {total > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-zinc-900/85 p-3 text-zinc-100 shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:border-orange-500/60 hover:bg-zinc-800 hover:text-white sm:left-6 sm:p-3.5"
            >
              <ChevronLeft className="size-6 sm:size-7" aria-hidden="true" />
            </button>
          )}

          <div className="flex max-h-[75vh] w-full items-center justify-center overflow-hidden sm:max-h-[78vh]">
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.label}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl transition-opacity duration-200 sm:max-h-[78vh]"
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente imagen"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-zinc-900/85 p-3 text-zinc-100 shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:border-orange-500/60 hover:bg-zinc-800 hover:text-white sm:right-6 sm:p-3.5"
            >
              <ChevronRight className="size-6 sm:size-7" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Bottom Caption and Quick Switcher */}
        <div className="flex flex-col gap-3 border-t border-white/10 bg-zinc-900/95 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-zinc-200 sm:text-sm">
            {currentImage.label}
          </p>

          {total > 1 && (
            <div className="flex shrink-0 items-center gap-2 self-center sm:self-auto">
              {images.map((img, idx) => (
                <button
                  key={img.src || idx}
                  type="button"
                  onClick={() => onNavigate(idx)}
                  aria-label={`Ir a vista ${idx + 1}`}
                  className={`rounded-md border px-3 py-1 font-mono text-xs font-medium transition-colors ${
                    currentIndex === idx
                      ? 'border-orange-500/60 bg-orange-500/25 text-orange-200 shadow-xs'
                      : 'border-white/10 bg-zinc-950/70 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Vista {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
