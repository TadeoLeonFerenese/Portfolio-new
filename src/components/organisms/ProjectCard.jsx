import { useState } from 'react'
import {
  Blocks,
  Bot,
  ExternalLink,
  Film,
  Images,
  Landmark,
  Lock,
  Rocket,
  Workflow,
} from 'lucide-react'
import MediaPlaceholder from '../molecules/MediaPlaceholder.jsx'
import PipelineFlow from '../molecules/PipelineFlow.jsx'

const COVER_THEME_BY_ID = {
  'nodo-inventory': {
    gradient: 'from-red-600/30 via-orange-500/20 to-zinc-950',
    accentBorder: 'hover:border-red-500/50 hover:shadow-[0_15px_40px_-12px_rgba(239,68,68,0.28)]',
    pillStyle: 'border-red-500/30 bg-red-500/10 text-red-200',
    coverTag: 'WINDOWS + ANDROID • LOCAL-FIRST AI',
    Icon: Blocks,
    iconAccent:
      'border-white/10 bg-zinc-950/80 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]',
  },
  'bunker-notas': {
    gradient: 'from-orange-600/30 via-amber-500/20 to-zinc-950',
    accentBorder: 'hover:border-orange-500/50 hover:shadow-[0_15px_40px_-12px_rgba(249,115,22,0.28)]',
    pillStyle: 'border-orange-500/30 bg-orange-500/10 text-orange-200',
    coverTag: 'ANDROID NATIVE • ENCRYPTED VAULT + IA',
    Icon: Bot,
    iconAccent:
      'border-white/10 bg-zinc-950/80 text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]',
  },
  'poder-judicial': {
    gradient: 'from-amber-500/25 via-red-900/25 to-zinc-950',
    accentBorder: 'hover:border-amber-500/50 hover:shadow-[0_15px_40px_-12px_rgba(245,158,11,0.25)]',
    pillStyle: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
    coverTag: 'INFRAESTRUCTURA CRÍTICA • PHP / LARAVEL',
    Icon: Landmark,
    iconAccent:
      'border-white/10 bg-zinc-950/80 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.7)]',
  },
  pedimon: {
    gradient: 'from-rose-600/30 via-orange-500/20 to-zinc-950',
    accentBorder: 'hover:border-rose-500/50 hover:shadow-[0_15px_40px_-12px_rgba(244,63,94,0.28)]',
    pillStyle: 'border-rose-500/30 bg-rose-500/10 text-rose-200',
    coverTag: 'PRIMERA PÁGINA WEB • HITO INICIAL',
    Icon: Rocket,
    iconAccent:
      'border-white/10 bg-zinc-950/80 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]',
  },
}

/**
 * Organism representing a visual showcase card with interactive preview cover and compact tabs.
 * @param {{ project: import('@/data/types.js').Project }} props
 */
export default function ProjectCard({ project }) {
  const {
    id,
    title,
    subtitle,
    repo,
    demo,
    badges = [],
    details = [],
    pipeline,
    media = [],
    confidential,
  } = project

  const theme = COVER_THEME_BY_ID[id] ?? COVER_THEME_BY_ID['nodo-inventory']
  const CoverIcon = theme.Icon

  // Calculate dynamic tabs based on actual available project assets
  const hasVideo = media.some((m) => m.type === 'video')
  const hasCaptures = media.some((m) => m.type !== 'video')
  const hasArchitecture = Boolean(pipeline?.length || details?.length)

  const availableTabs = []
  if (hasVideo) {
    availableTabs.push({ id: 'video', label: 'Video Demo', icon: Film })
  }
  if (hasCaptures) {
    availableTabs.push({ id: 'captures', label: 'Galería de Capturas', icon: Images })
  }
  if (hasArchitecture) {
    availableTabs.push({ id: 'architecture', label: 'Arquitectura & Flujo', icon: Workflow })
  }

  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id ?? 'architecture')

  // Group media slots for captures tab
  const desktopMedia = media.filter((m) => m.type === 'device-desktop')
  const androidMedia = media.filter((m) => m.type === 'device-android')
  const otherImages = media.filter((m) => m.type === 'image')

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/65 shadow-xl shadow-black/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-zinc-900/85 ${theme.accentBorder}`}
    >
      {/* Top Visual Cover Header (inspired by reference portfolio) */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-white/10 bg-zinc-950">
        {/* Animated zoom background canvas */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} transition-transform duration-700 group-hover:scale-110`}
        />
        {/* Live web background preview when demo URL is available */}
        {demo && (
          <iframe
            src={demo}
            title={`Preview de portada de ${title}`}
            tabIndex={-1}
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-40 border-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
          />
        )}
        {/* Subtle technical dot grid pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-50"
        />

        {/* Visual Mockup Window inside the Cover */}
        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          {/* Top Bar inside Cover: Category Tag + Action Links */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-zinc-200 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
              {theme.coverTag}
            </span>

            {/* Action Links: GitHub & Live Demo */}
            <div className="flex shrink-0 items-center gap-2">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver repositorio GitHub de ${title}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-xs font-medium text-zinc-200 backdrop-blur-md transition-all hover:border-orange-400/50 hover:bg-zinc-900 hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="size-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>Code</span>
                </a>
              )}

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver demo en vivo de ${title}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 px-3 py-1.5 font-mono text-xs font-semibold text-white shadow-md shadow-red-600/30 transition-all hover:from-red-500 hover:to-orange-400"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Center Visual Showcase Emblem */}
          <div className="my-auto flex items-center gap-4">
            <div
              className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-500 group-hover:scale-110 ${theme.iconAccent}`}
            >
              <CoverIcon className="size-7" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-orange-300 sm:text-2xl">
                  {title}
                </h3>
                {confidential && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-300">
                    <Lock className="size-3" aria-hidden="true" />
                    Acceso Restringido
                  </span>
                )}
              </div>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade into card body */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-900/90 to-transparent"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-5">
          {/* Tech Stack Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium transition-transform hover:scale-105 ${theme.pillStyle}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Confidential Protected Presentation */}
          {confidential ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4">
                <Lock className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden="true" />
                <div className="space-y-1">
                  <p className="font-heading text-xs font-semibold text-amber-200 sm:text-sm">
                    Información Institucional &amp; Código Privado
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Por acuerdos de confidencialidad y criticidad operativa con el Poder Judicial de la Nación, los repositorios y capturas de pantalla de estos sistemas se mantienen en reserva.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-orange-400">
                  Alcance y Responsabilidades
                </h4>
                <ul className="space-y-2">
                  {details.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-sm"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Interactive Case Study with Compact Tabs */
            <div className="space-y-4">
              {/* Tab buttons */}
              {availableTabs.length > 1 && (
                <div
                  role="tablist"
                  aria-label={`Vistas de ${title}`}
                  className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-950/70 p-1.5"
                >
                  {availableTabs.map((tab) => {
                    const Icon = tab.icon
                    const isActive = activeTab === tab.id

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        id={`tab-${project.id}-${tab.id}`}
                        aria-controls={`panel-${project.id}-${tab.id}`}
                        aria-selected={isActive}
                        onClick={() => setActiveTab(tab.id)}
                        className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                          isActive
                            ? 'border border-orange-500/40 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-200 shadow-xs'
                            : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-200'
                        }`}
                      >
                        <Icon className="size-3.5" aria-hidden="true" />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Active Tab Panel */}
              <div
                id={`panel-${project.id}-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${project.id}-${activeTab}`}
              >
                {activeTab === 'video' && (
                  <div className="space-y-3">
                    {media
                      .filter((m) => m.type === 'video')
                      .map((slot) => (
                        <MediaPlaceholder key={slot.label} slot={slot} />
                      ))}
                  </div>
                )}

                {activeTab === 'captures' && (
                  <div className="space-y-4">
                    {/* Desktop captures */}
                    {desktopMedia.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-orange-400">
                          Entorno de Escritorio
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {desktopMedia.map((slot) => (
                            <MediaPlaceholder key={slot.label} slot={slot} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Android captures */}
                    {androidMedia.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-orange-400">
                          Aplicación Android
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {androidMedia.map((slot) => (
                            <MediaPlaceholder key={slot.label} slot={slot} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Live Embedded Web Viewer when demo URL exists */}
                    {demo && (
                      <div className="overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-3 py-2">
                          <div className="flex items-center gap-1.5">
                            <span className="size-2.5 rounded-full bg-red-500/80" />
                            <span className="size-2.5 rounded-full bg-amber-400/80" />
                            <span className="size-2.5 rounded-full bg-emerald-400/80" />
                            <span className="ml-2 truncate font-mono text-[11px] text-zinc-400">
                              {demo.replace(/^https?:\/\//, '')}
                            </span>
                          </div>
                          <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-orange-400 hover:text-orange-300"
                          >
                            <span>Pantalla completa</span>
                            <ExternalLink className="size-3" aria-hidden="true" />
                          </a>
                        </div>
                        <iframe
                          src={demo}
                          title={`Vista interactiva en vivo de ${title}`}
                          loading="lazy"
                          className="h-60 w-full border-0 bg-zinc-950"
                        />
                      </div>
                    )}

                    {/* Other image captures */}
                    {otherImages.length > 0 && (
                      <div className="space-y-2.5">
                        {otherImages.map((slot) => (
                          <MediaPlaceholder key={slot.label} slot={slot} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    {details.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-orange-400">
                          Detalles &amp; Capacidades Técnicas
                        </h4>
                        <ul className="space-y-2">
                          {details.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-sm"
                            >
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {pipeline && pipeline.length > 0 && (
                      <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                        <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-orange-400">
                          Flujo de Arquitectura
                        </h4>
                        <PipelineFlow steps={pipeline} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
