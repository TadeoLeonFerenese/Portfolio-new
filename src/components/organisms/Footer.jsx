import { ArrowUpRight, Mail, MapPin, MessageSquare } from 'lucide-react'
import BrandLogo from '../atoms/BrandLogo.jsx'
import PillBadge from '../atoms/PillBadge.jsx'
import ScrollReveal from '../atoms/ScrollReveal.jsx'
import SocialIcon from '../atoms/SocialIcon.jsx'
import { useContent } from '../../data/i18n/content.js'

/**
 * Organism representing the Footer and Direct Contact section.
 * @param {{ className?: string }} props
 */
export default function Footer({ className = '' }) {
  const { contact, ui } = useContent()
  const whatsappUrl = 'https://wa.me/5491130650188'

  return (
    <footer
      id="contacto"
      className={`relative overflow-hidden border-t border-white/10 bg-zinc-950/90 px-6 pt-20 pb-12 backdrop-blur-md ${className}`}
    >
      {/* Subtle warm ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600/10 to-orange-500/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        {/* Contact CTA Header */}
        <ScrollReveal direction="up" className="flex flex-col items-center space-y-4 text-center">
          <PillBadge>{ui.footer.badge}</PillBadge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {ui.footer.heading}
          </h2>
          <div
            aria-hidden="true"
            className="h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500"
          />
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {ui.footer.subtitle}
          </p>
        </ScrollReveal>

        {/* 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <ScrollReveal direction="up" delay={0} className="h-full">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Enviar correo a ${contact.email}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/65 p-6 shadow-lg shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/50 hover:bg-zinc-900/90"
            >
              <div className="space-y-3">
                <div className="flex size-10 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/15 text-red-400">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    {ui.footer.emailTitle}
                  </p>
                  <p className="mt-1 font-heading text-base font-semibold text-zinc-100 break-words sm:text-lg">
                    {contact.email}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1 font-mono text-xs text-red-400 transition-colors group-hover:text-orange-300">
                <span>{ui.footer.emailAction}</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </div>
            </a>
          </ScrollReveal>

          {/* WhatsApp / Phone Card */}
          <ScrollReveal direction="up" delay={120} className="h-full">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Escribir por WhatsApp a ${contact.phone}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/65 p-6 shadow-lg shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:bg-zinc-900/90"
            >
              <div className="space-y-3">
                <div className="flex size-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/15 text-emerald-400">
                  <MessageSquare className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    {ui.footer.whatsappTitle}
                  </p>
                  <p className="mt-1 font-mono text-base font-semibold text-zinc-100 break-words sm:text-lg">
                    {contact.phone}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1 font-mono text-xs text-emerald-400 transition-colors group-hover:text-emerald-300">
                <span>{ui.footer.whatsappAction}</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </div>
            </a>
          </ScrollReveal>

          {/* Location Card linking to Google Maps (José Mármol, Zona Sur) */}
          <ScrollReveal direction="up" delay={240} className="h-full sm:col-span-2 lg:col-span-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Club+El+Fogon+Jose+Marmol+Buenos+Aires"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver ubicación en Google Maps (José Mármol, Zona Sur, Buenos Aires)"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/65 p-6 shadow-lg shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/50 hover:bg-zinc-900/90"
            >
              <div className="space-y-3">
                <div className="flex size-10 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/15 text-orange-400 transition-colors group-hover:bg-orange-500/25">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    {ui.footer.locationTitle}
                  </p>
                  <p className="mt-1 font-heading text-base font-semibold text-zinc-100 break-words sm:text-lg">
                    {contact.location}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-orange-400/90">
                    Zona Sur — José Mármol
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{ui.footer.timezoneNote}</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-orange-400 transition-colors group-hover:text-orange-300">
                  <span>Ver mapa</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>


        {/* Bottom Bar: Logo, Social Links & Attribution */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800/80 pt-8 sm:flex-row">
          <BrandLogo />

          <p className="order-3 font-mono text-xs text-zinc-500 sm:order-2">
            © {new Date().getFullYear()} Tadeo Daniel Leon Ferenese
          </p>

          <div className="order-2 flex items-center gap-2 sm:order-3">
            <SocialIcon
              platform="github"
              href={contact.github}
              ariaLabel="Perfil de GitHub de Tadeo"
            />
            <SocialIcon
              platform="linkedin"
              href={contact.linkedin}
              ariaLabel="Perfil de LinkedIn de Tadeo"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
