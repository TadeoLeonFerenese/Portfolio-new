import { ExternalLink, Film, Image, Maximize2, Monitor, Smartphone } from 'lucide-react'

const PLACEHOLDER_ICONS = {
  video: Film,
  image: Image,
  'device-android': Smartphone,
  'device-desktop': Monitor,
}

/**
 * Renders real media inside the unified Window Frame + Bottom Caption Pill
 * (matching the Pedimon card layout) when `slot.src` exists; otherwise a labeled placeholder.
 * @param {{
 *   slot: import('@/data/types.js').MediaSlot,
 *   onFullscreen?: () => void,
 * }} props
 */
export default function MediaPlaceholder({ slot, onFullscreen }) {
  const { type, label, aspect, src } = slot
  const Icon = PLACEHOLDER_ICONS[type] ?? Image

  if (src && type === 'image') {
    return (
      <img
        src={src}
        alt={label}
        className={`w-full rounded-xl border border-line object-cover ${onFullscreen ? 'cursor-pointer' : ''}`}
        style={{ aspectRatio: aspect }}
        onClick={onFullscreen}
      />
    )
  }

  if (src) {
    const displayPath = src.replace(/^\//, '')

    return (
      <div className="space-y-4">
        {/* Unified Window Frame (identical design and height to Pedimon) */}
        <div className="overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-inner">
          {/* Window Chrome Top Bar */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-zinc-900/90 px-3.5 py-2">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-red-500/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span
                title={displayPath}
                className="min-w-0 flex-1 truncate rounded-md border border-white/5 bg-zinc-950/70 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
              >
                {displayPath}
              </span>
            </div>

            {onFullscreen ? (
              <button
                type="button"
                onClick={onFullscreen}
                aria-label="Ver en pantalla completa"
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-orange-300 transition-colors hover:border-orange-400/50 hover:bg-orange-500/20 hover:text-orange-200"
              >
                <span>Pantalla completa</span>
                <Maximize2 className="size-3 shrink-0" aria-hidden="true" />
              </button>
            ) : (
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-orange-300 transition-colors hover:border-orange-400/50 hover:bg-orange-500/20 hover:text-orange-200"
              >
                <span>Pantalla completa</span>
                <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Uniform Viewport (h-60 matching Pedimon) */}
          <div className="relative flex h-60 w-full items-center justify-center overflow-hidden bg-zinc-950">
            {/* Subtle ambient glow behind media */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10"
            />

            {type === 'video' ? (
              <video
                src={src}
                controls
                muted
                loop
                autoPlay
                playsInline
                aria-label={label}
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
              />
            ) : (
              <img
                src={src}
                alt={label}
                onClick={onFullscreen}
                className={`relative z-10 h-full w-full object-contain ${
                  onFullscreen ? 'cursor-pointer transition-transform duration-300 hover:scale-[1.02]' : ''
                }`}
                title={onFullscreen ? 'Click para expandir' : undefined}
              />
            )}
          </div>
        </div>

        {/* Bottom Caption Pill Box (identical to Pedimon's bottom info bar) */}
        <div className="group/media relative flex w-full items-center gap-3.5 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-3.5 text-left shadow-inner transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-gradient-to-br from-red-500/15 to-orange-500/10 blur-xl opacity-60 transition-opacity group-hover/media:opacity-100"
          />
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-orange-500/30 bg-gradient-to-br from-red-500/15 to-orange-500/15 text-orange-400 shadow-xs">
            <Icon aria-hidden="true" className="size-5" />
          </div>
          <p className="font-mono text-xs leading-relaxed text-zinc-300 group-hover/media:text-zinc-100">
            {label}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="group/media relative flex w-full items-center gap-3.5 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-3.5 text-left shadow-inner transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-gradient-to-br from-red-500/15 to-orange-500/10 blur-xl opacity-60 transition-opacity group-hover/media:opacity-100"
      />
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-orange-500/30 bg-gradient-to-br from-red-500/15 to-orange-500/15 text-orange-400 shadow-xs">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <p className="font-mono text-xs leading-relaxed text-zinc-300 group-hover/media:text-zinc-100">
        {label}
      </p>
    </div>
  )
}
