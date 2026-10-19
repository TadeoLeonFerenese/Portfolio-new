import StatusIndicator from './StatusIndicator.jsx'

/**
 * Brand logo TADEO.DEV with optional pulsating status indicator.
 * @param {{ showStatus?: boolean, showStatusLabel?: boolean, className?: string }} props
 */
export default function BrandLogo({ showStatus = true, showStatusLabel = true, className = '' }) {

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="#inicio"
        className="font-mono text-base font-bold tracking-wider text-zinc-100 transition-colors hover:text-accent"
      >
        TADEO<span className="text-accent">.DEV</span>
      </a>
      {showStatus && <StatusIndicator showLabel={showStatusLabel} />}
    </div>
  )
}

