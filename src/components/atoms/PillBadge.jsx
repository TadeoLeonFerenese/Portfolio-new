/**
 * Styled engineering pill badge.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function PillBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-gradient-to-r from-red-500/15 via-orange-500/10 to-red-500/5 px-3.5 py-1 font-mono text-xs font-medium text-orange-200 shadow-sm shadow-red-500/15 backdrop-blur-md ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-gradient-to-r from-red-400 to-orange-400" />
      {children}
    </span>
  )
}
