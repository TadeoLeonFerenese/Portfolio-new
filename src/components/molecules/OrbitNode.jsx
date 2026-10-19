import { BrainCircuit, Code2, Cpu, DatabaseZap, ServerCog } from 'lucide-react'

const ICONS_BY_PILLAR = {
  ai: BrainCircuit,
  data: DatabaseZap,
  'local-first': Code2,
  backend: ServerCog,
}

const ACCENTS_BY_PILLAR = {
  ai: {
    cardHover: 'border-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.3)]',
    iconColor: 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.65)] group-hover:scale-110 group-hover:text-red-400',
  },
  data: {
    cardHover: 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.3)]',
    iconColor: 'text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.65)] group-hover:scale-110 group-hover:text-orange-300',
  },
  'local-first': {
    cardHover: 'border-amber-500/20 hover:border-amber-500/60 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.3)]',
    iconColor: 'text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.65)] group-hover:scale-110 group-hover:text-amber-300',
  },
  backend: {
    cardHover: 'border-rose-500/20 hover:border-rose-500/60 hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.3)]',
    iconColor: 'text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.65)] group-hover:scale-110 group-hover:text-rose-400',
  },
}

/**
 * Visual card representing a core technological pillar.
 * @param {{ pillar: { id: string, label: string, description: string }, className?: string }} props
 */
export default function OrbitNode({ pillar, className = '' }) {
  const Icon = ICONS_BY_PILLAR[pillar.id] ?? Cpu
  const accent = ACCENTS_BY_PILLAR[pillar.id] ?? ACCENTS_BY_PILLAR.ai

  return (
    <div
      className={`group flex items-center gap-3.5 rounded-2xl border bg-zinc-950/90 p-3.5 shadow-xl shadow-black/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900/95 ${accent.cardHover} ${className}`}
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] transition-colors group-hover:border-white/15 group-hover:bg-white/[0.07]">
        <Icon
          aria-hidden="true"
          strokeWidth={2.1}
          className={`size-5 transition-all duration-300 ${accent.iconColor}`}
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="font-mono text-xs font-bold text-zinc-100 group-hover:text-white">{pillar.label}</span>
        <span className="text-[11px] text-zinc-400">{pillar.description}</span>
      </div>
    </div>
  )
}
