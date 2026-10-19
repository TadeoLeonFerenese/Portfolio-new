/**
 * Renders a single professional experience milestone node with connected vertical line.
 * @param {{ item: import('@/data/types.js').Experience, isLast?: boolean }} props
 */
export default function TimelineItem({ item, isLast = false }) {
  const { role, company, period } = item

  return (
    <div className="group relative flex gap-4 sm:gap-6">
      {/* Timeline track and node */}
      <div className="flex flex-col items-center">
        <div
          data-testid="timeline-node"
          className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border border-orange-500/50 bg-zinc-950 text-accent shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-transform duration-300 group-hover:scale-110"
        >
          <span className="size-2.5 rounded-full bg-gradient-to-tr from-red-500 to-orange-400" />
        </div>

        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-red-500/40 via-orange-500/20 to-zinc-800" />
        )}
      </div>

      {/* Content Card */}
      <div className="min-w-0 flex-1 pb-8">
        <div className="rounded-xl border border-white/10 bg-zinc-900/65 p-5 shadow-lg shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-zinc-900/85 hover:shadow-[0_10px_25px_-10px_rgba(249,115,22,0.2)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-heading text-base font-semibold text-zinc-100 transition-colors group-hover:text-white sm:text-lg break-words">
              {role}
            </h4>
            <span className="rounded-full border border-orange-500/30 bg-gradient-to-r from-red-500/15 to-orange-500/15 px-2.5 py-0.5 font-mono text-xs text-orange-300">
              {period}
            </span>
          </div>
          <p className="mt-2 text-sm text-zinc-400 break-words">
            {company}
          </p>
        </div>
      </div>
    </div>
  )
}
