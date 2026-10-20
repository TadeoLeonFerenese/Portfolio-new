import { ArrowRight, Download } from 'lucide-react'
import PillBadge from '@/components/atoms/PillBadge.jsx'
import ScrollReveal from '@/components/atoms/ScrollReveal.jsx'
import ProfileComposition from '@/components/molecules/ProfileComposition.jsx'
import { useContent } from '@/data/i18n/content.js'

const CORE_STACK_ITEMS = [
  {
    id: 'react',
    name: 'React',
    title: 'React (Ecosistema Frontend & SPA)',
    colorClass: 'text-[#61DAFB]',
    hoverClasses: 'hover:border-[#61DAFB]/50 hover:shadow-[0_0_16px_rgba(97,218,251,0.35)]',
    renderIcon: () => (
      <svg className="size-5 fill-none stroke-current" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    title: 'TypeScript (Tipado Estático & Arquitectura Robusta)',
    colorClass: 'text-[#3178C6]',
    hoverClasses: 'hover:border-[#3178C6]/50 hover:shadow-[0_0_16px_rgba(49,120,198,0.35)]',
    renderIcon: () => (
      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3h18v18H3V3zm8.7 10.6v-1.8H8.5V7H6.7v9h5v-1.8v-.6zm3.3 1.8c1.3 0 2.2-.6 2.6-1.5l-1.4-.9c-.3.5-.7.8-1.2.8-.7 0-1.1-.4-1.1-1.1 0-.9.8-1.1 1.7-1.4 1.5-.5 2.5-1.1 2.5-2.6 0-1.5-1.1-2.5-2.8-2.5-1.5 0-2.4.7-2.9 1.7l1.4.8c.3-.5.7-.9 1.4-.9.6 0 1 .4 1 .9 0 .6-.4.9-1.3 1.2-1.7.5-2.9 1.1-2.9 2.8 0 1.6 1.1 2.6 3 2.6z" />
      </svg>
    ),
  },
  {
    id: 'laravel',
    name: 'Laravel',
    title: 'Laravel (APIs RESTful, Eloquent & Arquitectura MVC)',
    colorClass: 'text-[#FF2D20]',
    hoverClasses: 'hover:border-[#FF2D20]/50 hover:shadow-[0_0_16px_rgba(255,45,32,0.35)]',
    renderIcon: () => (
      <svg
        className="size-5 fill-none stroke-current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 6.5L7.5 4L12 6.5V14L16.5 11.5L21 14V19L12 23.5L3 19V6.5Z" />
        <path d="M3 6.5L7.5 9L12 6.5" />
        <path d="M7.5 9V16.5L12 19V14" />
        <path d="M12 14L16.5 16.5L21 14" />
        <path d="M16.5 16.5V21.2" />
        <path d="M7.5 16.5L3 19" />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    title: 'Node.js (Backend Runtime & Microservicios)',
    colorClass: 'text-[#68A063]',
    hoverClasses: 'hover:border-[#68A063]/50 hover:shadow-[0_0_16px_rgba(104,160,99,0.35)]',
    renderIcon: () => (
      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5L20.2 7.2v9.6L12 21.5l-8.2-4.7V7.2L12 2.5zm0 2.3L5.8 8.4v7.2L12 19.2l6.2-3.6V8.4L12 4.8zm-1.2 5.4h2.4v5h-2.4v-5z" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    title: 'Python (Data Science, Automatización & Scripts)',
    colorClass: 'text-[#FFD43B]',
    hoverClasses: 'hover:border-[#FFD43B]/50 hover:shadow-[0_0_16px_rgba(255,212,59,0.35)]',
    renderIcon: () => (
      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.9 2c-4.5 0-4.2 2-4.2 2v2.1h4.3v.7H6c-2.8 0-4 1.7-4 4.2s1.1 4.3 3.4 4.3h1.8v-2.1c0-1.8 1.5-3.3 3.3-3.3h4.5c1.3 0 2.3-1 2.3-2.3V4.3C17.3 2.7 15.1 2 11.9 2zm-2.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
        <path d="M12.1 22c4.5 0 4.2-2 4.2-2v-2.1H12v-.7h6c2.8 0 4-1.7 4-4.2s-1.1-4.3-3.4-4.3h-1.8v2.1c0 1.8-1.5 3.3-3.3 3.3H9c-1.3 0-2.3 1-2.3 2.3v3.3c0 1.6 2.2 2.3 5.4 2.3zm2.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'AI Multi-Model',
    title: 'Motores de IA Multi-Modelo (Orquestación Agnóstica: Gemini, Claude, OpenAI, LLMs Locales)',
    colorClass: 'text-[#FB923C]',
    hoverClasses: 'hover:border-[#FB923C]/50 hover:shadow-[0_0_16px_rgba(251,146,60,0.35)]',
    renderIcon: () => (
      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C12.4 7.2 16.8 11.6 22 12C16.8 12.4 12.4 16.8 12 22C11.6 16.8 7.2 12.4 2 12C7.2 11.6 11.6 7.2 12 2Z" />
        <circle cx="19" cy="5" r="1.5" />
        <circle cx="5" cy="19" r="1.5" />
      </svg>
    ),
  },
  {
    id: 'sql',
    name: 'SQL Databases',
    title: 'Bases de Datos Relacionales (SQL, PostgreSQL, MySQL)',
    colorClass: 'text-[#60A5FA]',
    hoverClasses: 'hover:border-[#60A5FA]/50 hover:shadow-[0_0_16px_rgba(96,165,250,0.35)]',
    renderIcon: () => (
      <svg
        className="size-5 fill-none stroke-current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    title: 'Docker (Contenedores, Infraestructura & Despliegues)',
    colorClass: 'text-[#2496ED]',
    hoverClasses: 'hover:border-[#2496ED]/50 hover:shadow-[0_0_16px_rgba(36,150,237,0.35)]',
    renderIcon: () => (
      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.5 13.5c.3 2.8 2.2 5 5 5.5 4.5.8 8.8-.4 11.8-3.4 1.2-1.2 1.9-2.6 2.2-4.1-1.3-.2-2.5.3-3.3 1.1-.3-.2-.7-.4-1.2-.4-1.5 0-2.8 1.2-2.8 2.8 0 .2 0 .4.1.6-2.5 0-5.8-.3-8.8-2.1H2.5zm6.5-6h2v2H9v-2zm-3 0h2v2H6v-2zm6 0h2v2h-2v-2zm-6 3h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm0-3h2v2h-2v-2z" />
      </svg>
    ),
  },
]

/**
 * Hero section with 50/50 responsive split:
 * Left: badge, titles, bio, CTAs, and curated Core Tech & Stack strip
 * Right: circular composition with glowing ring, profile placeholder and 4 technology pillars
 */
export default function HeroSection() {
  const { profile } = useContent()
  const { badge, title, subtitle, ctas } = profile

  return (
    <section id="inicio" className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background ambient radial gradients (unclipped vertically for seamless page flow) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 size-[620px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />
        <div className="absolute top-1/3 right-0 size-[480px] rounded-full bg-orange-500/8 blur-[150px]" />
      </div>

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

          {/* Debajo del contenedor de los botones de acción: Core Tech & Stack con Brand Colors y Staggered Pop-In */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6">
            <span className="flex items-center font-mono text-xs uppercase tracking-widest text-zinc-400">
              Core Tech & Stack
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block h-3.5 w-1.5 animate-pulse bg-orange-500 align-middle"
              />
            </span>

            <div className="flex flex-wrap items-center gap-3">
              {CORE_STACK_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  title={item.title}
                  aria-label={item.name}
                  style={{ animationDelay: `${index * 85}ms` }}
                  className={`terminal-pop-item group relative flex items-center justify-center rounded-lg border border-white/10 bg-zinc-900/60 p-2.5 opacity-85 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/[0.06] hover:opacity-100 ${item.colorClass} ${item.hoverClasses}`}
                >
                  {item.renderIcon()}
                </div>
              ))}
            </div>
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
