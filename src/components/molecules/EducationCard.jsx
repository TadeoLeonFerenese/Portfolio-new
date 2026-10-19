/**
 * Renders an education credential card with progress bar and academic metric badges.
 * @param {{ item: import('@/data/types.js').Education }} props
 */
export default function EducationCard({ item }) {
  const { title, institution, period, progress, average, status, notes } = item

  return (
    <div className="group min-w-0 rounded-xl border border-white/10 bg-zinc-900/65 p-5 shadow-lg shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-zinc-900/85 hover:shadow-[0_10px_25px_-10px_rgba(249,115,22,0.2)] sm:p-6">
      {/* Header: Title, Institution & Badges */}
      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1 min-w-0">
          <h4 className="font-heading text-base font-bold text-zinc-100 transition-colors group-hover:text-white sm:text-lg break-words">
            {title}
          </h4>
          <p className="text-sm font-medium text-zinc-400 break-words">
            {institution}
          </p>
        </div>

        {/* Status and Average Grade Badges */}
        <div className="flex shrink-0 flex-wrap items-center gap-2 pt-1 sm:pt-0">
          {status && (
            <span className="rounded-md border border-orange-500/35 bg-gradient-to-r from-red-500/15 to-orange-500/15 px-2.5 py-0.5 font-mono text-xs text-orange-200">
              {status}
            </span>
          )}
          {average !== undefined && average !== null && (
            <span className="rounded-md border border-amber-500/35 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs text-amber-300">
              Promedio: {typeof average === 'number' ? average.toFixed(2) : average}
            </span>
          )}
        </div>
      </div>

      {/* Period */}
      <p className="mt-2 font-mono text-xs text-zinc-500">
        {period}
      </p>

      {/* Visual Academic Progress Bar */}
      {typeof progress === 'number' && (
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between font-mono text-xs text-zinc-400">
            <span>Progreso Académico</span>
            <span className="font-semibold text-orange-400">{progress}%</span>
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/90"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progreso de ${title}`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.5)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Focus Notes */}
      {notes && (
        <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm break-words">
          {notes}
        </p>
      )}
    </div>
  )
}
