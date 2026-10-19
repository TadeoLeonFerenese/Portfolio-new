import { Film, Image, Monitor, Smartphone } from 'lucide-react'

const PLACEHOLDER_ICONS = {
  video: Film,
  image: Image,
  'device-android': Smartphone,
  'device-desktop': Monitor,
}

/**
 * Renders the real media when `slot.src` exists; otherwise a labeled placeholder
 * so the missing asset is explicit (no stock images, per AGENT.md).
 * @param {{ slot: import('@/data/types.js').MediaSlot }} props
 */
export default function MediaPlaceholder({ slot }) {
  const { type, label, aspect, src } = slot

  if (src && type === 'video') {
    return (
      <video
        src={src}
        controls
        aria-label={label}
        className="w-full rounded-xl border border-line bg-card"
        style={{ aspectRatio: aspect }}
      />
    )
  }

  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className="w-full rounded-xl border border-line object-cover"
        style={{ aspectRatio: aspect }}
      />
    )
  }

  const Icon = PLACEHOLDER_ICONS[type] ?? Image

  return (
    <div className="group/media relative flex w-full items-center gap-3.5 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-3.5 text-left shadow-inner transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-gradient-to-br from-red-500/15 to-orange-500/10 blur-xl transition-opacity opacity-60 group-hover/media:opacity-100"
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
