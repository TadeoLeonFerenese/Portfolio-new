import { BrainCircuit, Code2, Cpu, DatabaseZap, ServerCog } from 'lucide-react'

const ICONS_BY_SPECIALTY = {
  'applied-ai': BrainCircuit,
  'data-science': DatabaseZap,
  'local-first': Code2,
  infrastructure: ServerCog,
}

const THEME_BY_SPECIALTY = {
  'applied-ai': {
    cardBorder: 'border-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.28)]',
    glow: 'from-red-500/10 via-transparent to-transparent',
    iconColor: 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.65)] group-hover:scale-110 group-hover:text-red-400',
  },
  'data-science': {
    cardBorder: 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.28)]',
    glow: 'from-orange-500/10 via-transparent to-transparent',
    iconColor: 'text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.65)] group-hover:scale-110 group-hover:text-orange-300',
  },
  'local-first': {
    cardBorder: 'border-amber-500/20 hover:border-amber-500/60 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.28)]',
    glow: 'from-amber-500/10 via-transparent to-transparent',
    iconColor: 'text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.65)] group-hover:scale-110 group-hover:text-amber-300',
  },
  infrastructure: {
    cardBorder: 'border-rose-500/20 hover:border-rose-500/60 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.28)]',
    glow: 'from-rose-500/10 via-transparent to-transparent',
    iconColor: 'text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.65)] group-hover:scale-110 group-hover:text-rose-400',
  },
}

/**
 * Individual specialty domain card with icon, heading, and technical description.
 * @param {{ specialty: { id: string, title: string, description: string }, className?: string }} props
 */
export default function SpecialtyCard({ specialty, className = '' }) {
  const { id, title, description } = specialty
  const Icon = ICONS_BY_SPECIALTY[id] ?? Cpu
  const theme = THEME_BY_SPECIALTY[id] ?? THEME_BY_SPECIALTY['applied-ai']

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-zinc-950/80 p-6 shadow-xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-zinc-900/90 ${theme.cardBorder} ${className}`}
    >
      {/* Subtle radial hover highlight */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10">
        {/* Clean dark slate icon container so the neon icon pops with high contrast */}
        <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.04] shadow-inner transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/[0.07]">
          <Icon
            aria-hidden="true"
            strokeWidth={2.1}
            className={`size-7 transition-all duration-300 ${theme.iconColor}`}
          />
        </div>

        <h3 className="mb-3 font-sans text-lg font-bold text-zinc-100 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
          {description}
        </p>
      </div>
    </article>
  )
}
