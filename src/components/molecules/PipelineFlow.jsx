import { ArrowRight } from 'lucide-react'

/**
 * Renders an interconnected sequence of architecture pipeline steps.
 * @param {{ steps?: string[] }} props
 */
export default function PipelineFlow({ steps = [] }) {
  if (!steps || steps.length === 0) {
    return null
  }

  return (
    <div
      className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
      role="list"
      aria-label="Flujo de arquitectura"
    >
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1

        return (
          <div
            key={step}
            className="flex items-center gap-2 sm:gap-2.5"
            role="listitem"
          >
            <div className="flex-1 rounded-lg border border-orange-500/25 bg-gradient-to-r from-red-500/10 via-zinc-900 to-orange-500/10 px-3 py-1.5 text-center font-mono text-xs font-medium text-zinc-200 shadow-xs sm:flex-none">
              {step}
            </div>

            {!isLast && (
              <div
                data-testid="pipeline-connector"
                aria-hidden="true"
                className="flex items-center justify-center text-orange-400"
              >
                <ArrowRight className="size-3.5 shrink-0 rotate-90 sm:rotate-0" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
