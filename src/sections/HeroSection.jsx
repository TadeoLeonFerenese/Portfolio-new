import { ArrowRight, Download } from 'lucide-react'
import PillBadge from '@/components/atoms/PillBadge.jsx'
import ScrollReveal from '@/components/atoms/ScrollReveal.jsx'
import ProfileComposition from '@/components/molecules/ProfileComposition.jsx'
import { useContent } from '@/data/i18n/content.js'

/**
 * Hero section with 50/50 responsive split:
 * Left: badge, titles, bio, CTAs
 * Right: circular composition with glowing ring, profile placeholder and 4 technology pillars
 */
export default function HeroSection() {
  const { profile } = useContent()
  const { badge, title, subtitle, ctas } = profile


  return (
    <section id="inicio" className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background ambient radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 size-[620px] -translate-x-1/2 rounded-full bg-red-600/12 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 size-[480px] rounded-full bg-orange-500/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 size-[360px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[110px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Presentation & Value Positioning */}
        <ScrollReveal direction="left" className="flex flex-col items-start text-left">
          {/* Pill Badge */}
          <div className="mb-6">
            <PillBadge>{badge}</PillBadge>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Technical Subtitle */}
          <p className="mb-8 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <a
              href={ctas.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_0_25px_rgba(239,68,68,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:to-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.5)]"
            >
              <span>{ctas.primary.label}</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>


            {/* Secondary CTA (CV Download with graceful disabled state when URL not yet available) */}
            {ctas.secondary.href ? (
              <a
                href={ctas.secondary.href}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 font-sans text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-850"
              >
                <Download aria-hidden="true" className="size-4 text-zinc-400" />
                <span>{ctas.secondary.label}</span>
              </a>
            ) : (
              <button
                type="button"
                title="El CV en PDF se encontrará disponible a la brevedad"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-3.5 font-sans text-sm font-semibold text-zinc-400 opacity-90 transition-colors hover:border-zinc-700 hover:text-zinc-300"
              >
                <Download aria-hidden="true" className="size-4 text-zinc-500" />
                <span>{ctas.secondary.label}</span>
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Right Column: Visual Composition with Orbiting Pillars */}
        <ScrollReveal direction="scale" delay={150} className="flex w-full justify-center lg:justify-end">
          <ProfileComposition />
        </ScrollReveal>
      </div>
    </section>
  )
}
