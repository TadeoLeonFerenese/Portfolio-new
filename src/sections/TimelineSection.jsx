import { Briefcase, GraduationCap } from 'lucide-react'
import PillBadge from '../components/atoms/PillBadge.jsx'
import ScrollReveal from '../components/atoms/ScrollReveal.jsx'
import EducationCard from '../components/molecules/EducationCard.jsx'
import TimelineItem from '../components/molecules/TimelineItem.jsx'
import { useContent } from '../data/i18n/content.js'

/**
 * Dual-column section presenting professional career timeline and academic metrics.
 */
export default function TimelineSection() {
  const { experience, education, ui } = useContent()

  return (
    <section id="trayectoria" className="relative px-6 py-24 sm:py-32">
      {/* Warm ambient background glows (unclipped vertically for seamless page flow) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-0 size-[480px] rounded-full bg-red-600/7 blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 size-[480px] rounded-full bg-orange-500/7 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" className="mb-12 flex flex-col items-center space-y-4 text-center sm:mb-16">
          <PillBadge>{ui.timeline.badge}</PillBadge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {ui.timeline.heading}
          </h2>
          <div
            aria-hidden="true"
            className="h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500"
          />
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {ui.timeline.subtitle}
          </p>
        </ScrollReveal>

        {/* Dual Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Experiencia Laboral */}
          <ScrollReveal direction="left" delay={100} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex size-9 items-center justify-center rounded-lg border border-red-500/35 bg-gradient-to-br from-red-500/15 to-orange-500/10 text-red-400 shadow-xs">
                <Briefcase className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-zinc-100 sm:text-2xl">
                {ui.timeline.experienceTitle}
              </h3>
            </div>
            <div className="pt-2">
              {experience.map((item, index) => (
                <TimelineItem
                  key={`${item.role}-${item.company}`}
                  item={item}
                  isLast={index === experience.length - 1}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Educación & Métricas Académicas (Anchor #educacion) */}
          <ScrollReveal direction="right" delay={200} className="space-y-6">
            <div id="educacion" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex size-9 items-center justify-center rounded-lg border border-orange-500/35 bg-gradient-to-br from-orange-500/15 to-amber-500/10 text-orange-400 shadow-xs">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-100 sm:text-2xl">
                  {ui.timeline.educationTitle}
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                {education.map((item) => (
                  <EducationCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
