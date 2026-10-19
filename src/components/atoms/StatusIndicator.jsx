/**
 * Renders a glowing/pulsing status dot with accessible text.
 * @param {{ label?: string, showLabel?: boolean, className?: string }} props
 */
export default function StatusIndicator({ label = 'System Online', showLabel = true, className = '' }) {

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-online opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-online"></span>
      </span>
      {showLabel && <span className="font-mono text-xs text-zinc-400">{label}</span>}
    </div>
  )
}

