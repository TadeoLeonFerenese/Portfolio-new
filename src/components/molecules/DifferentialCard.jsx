import { Flame, GraduationCap, ServerCog, Trophy } from 'lucide-react'
import { useContent } from '@/data/i18n/content.js'

/**
 * Value proposition card highlighting the real differentiation:
 * 10 years of critical infrastructure combined with outstanding academic background.
 * @param {{ className?: string }} props
 */
export default function DifferentialCard({ className = '' }) {
  const { differential } = useContent()

  const metrics = [
    {
      icon: ServerCog,
      label: '10+ Años Infraestructura',
      detail: 'Pentacom S.A. & Poder Judicial',
      iconColor: 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.65)]',
      hoverBorder: 'hover:border-red-500/40',
    },
    {
      icon: Trophy,
      label: 'Promedio 8.50 (Graduado)',
      detail: 'Técnico Universitario en Programación',
      iconColor: 'text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.65)]',
      hoverBorder: 'hover:border-orange-500/40',
    },
    {
      icon: GraduationCap,
      label: '75% Ciencia de Datos',
      detail: 'Promedio 8.33 en curso (UNaB)',
      iconColor: 'text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.65)]',
      hoverBorder: 'hover:border-amber-500/40',
    },
  ]

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-red-500/25 bg-gradient-to-br from-red-500/10 via-zinc-950/95 to-zinc-950 p-8 shadow-2xl shadow-black/60 backdrop-blur-xl ${className}`}
    >
      {/* Decorative ambient corner glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 size-44 rounded-full bg-orange-500/10 blur-3xl"
      />

      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/35 bg-white/[0.04] px-3 py-1 font-mono text-xs font-semibold text-orange-300">
          <Flame aria-hidden="true" className="size-3.5 text-orange-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.7)]" />
          <span>Propuesta de Valor</span>
        </div>

        <h3 className="mb-6 font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {differential.title}
        </h3>

        <p className="mb-8 text-base leading-relaxed text-zinc-300">
          {differential.body}
        </p>
      </div>

      {/* Metric badges / Career Milestones */}
      <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div
              key={metric.label}
              className={`group flex min-w-0 items-start gap-3.5 rounded-xl border border-white/10 bg-zinc-900/80 p-3.5 transition-all duration-300 hover:-translate-y-0.5 ${metric.hoverBorder}`}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] transition-colors group-hover:border-white/15 group-hover:bg-white/[0.07]">
                <Icon
                  aria-hidden="true"
                  strokeWidth={2.1}
                  className={`size-5 transition-transform duration-300 group-hover:scale-110 ${metric.iconColor}`}
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <span className="break-words font-mono text-xs font-bold text-zinc-100">
                  {metric.label}
                </span>
                <span className="mt-0.5 break-words text-[11px] leading-relaxed text-zinc-400">
                  {metric.detail}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
