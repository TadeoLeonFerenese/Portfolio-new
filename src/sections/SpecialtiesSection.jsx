import PillBadge from '@/components/atoms/PillBadge.jsx'
import ScrollReveal from '@/components/atoms/ScrollReveal.jsx'
import SpecialtyCard from '@/components/molecules/SpecialtyCard.jsx'
import DifferentialCard from '@/components/molecules/DifferentialCard.jsx'
import { useContent } from '@/data/i18n/content.js'

/**
 * Section 2: Especialidades per AGENT.md
 * Symmetrical 2x2 grid on left + Value proposition differential block on right.
 */
export default function SpecialtiesSection() {
  const { specialties, ui } = useContent()

  return (
    <section id="especialidades" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background subtle warm glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 size-[500px] rounded-full bg-red-600/8 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 size-[450px] rounded-full bg-orange-500/8 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" className="mb-16 flex flex-col items-start">
          <div className="mb-4">
            <PillBadge>{ui.specialties.badge}</PillBadge>
          </div>
          <div className="flex w-full items-center gap-6">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {ui.specialties.heading}
            </h2>
            <div
              aria-hidden="true"
              className="hidden h-px flex-1 bg-gradient-to-r from-red-500/50 via-orange-500/30 to-transparent md:block"
            />
          </div>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            {ui.specialties.subtitle}
          </p>
        </ScrollReveal>

        {/* 2-Column Main Layout: Symmetrical 2x2 Rectangular Grid Left + Differential Block Right */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (7 cols): Clean 2x2 Grid forming a rectangular contour */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {specialties.map((item, idx) => (
              <ScrollReveal key={item.id} direction="up" delay={idx * 100} className="h-full">
                <SpecialtyCard specialty={item} className="h-full" />
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column (5 cols): Differential Value Proposition */}
          <ScrollReveal direction="right" delay={200} className="flex flex-col lg:col-span-5">
            <DifferentialCard className="h-full" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
