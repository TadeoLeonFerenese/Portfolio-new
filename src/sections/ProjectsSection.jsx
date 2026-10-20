import PillBadge from '../components/atoms/PillBadge.jsx'
import ScrollReveal from '../components/atoms/ScrollReveal.jsx'
import ProjectCard from '../components/organisms/ProjectCard.jsx'
import { useContent } from '../data/i18n/content.js'

/**
 * Section displaying interactive Case Studies for production systems and projects.
 */
export default function ProjectsSection() {
  const { projects, ui } = useContent()

  return (
    <section id="proyectos" className="relative px-6 py-24 sm:py-32">
      {/* Warm ambient background glows (unclipped vertically for seamless page flow) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-24 size-[550px] rounded-full bg-red-600/8 blur-[150px]" />
        <div className="absolute bottom-1/4 -right-24 size-[500px] rounded-full bg-orange-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" className="mb-12 flex flex-col items-center space-y-4 text-center sm:mb-16">
          <PillBadge>{ui.projects.badge}</PillBadge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {ui.projects.heading}
          </h2>
          <div
            aria-hidden="true"
            className="h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500"
          />
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {ui.projects.subtitle}
          </p>
        </ScrollReveal>

        {/* Projects Visual Grid (2x2 on Desktop) */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 120} className="h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
