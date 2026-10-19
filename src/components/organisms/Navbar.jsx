import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import BrandLogo from '@/components/atoms/BrandLogo.jsx'
import SocialIcon from '@/components/atoms/SocialIcon.jsx'
import LanguageDropdown from '@/components/molecules/LanguageDropdown.jsx'
import { useContent } from '@/data/i18n/content.js'

/**
 * Top Navbar organism with sticky blur styling, anchor navigation,
 * central language dropdown, external social links, contact action and responsive mobile drawer.
 * @param {{ className?: string }} props
 */
export default function Navbar({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const { navigation, contact, ui } = useContent()

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      aria-label="Navegación principal"
      className={`w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md transition-all ${className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo TADEO.DEV with green pulsating dot (without text) */}
        <BrandLogo showStatusLabel={false} />

        {/* Central Navigation Links & Language Dropdown (Desktop) */}
        <div className="hidden items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 p-1.5 backdrop-blur-md md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 font-sans text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
          <LanguageDropdown />
        </div>

        {/* Right Actions: Social Links + Contact Button (Desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 border-r border-zinc-800/80 pr-3">
            <SocialIcon platform="github" href={contact.github} />
            <SocialIcon platform="linkedin" href={contact.linkedin} />
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-lg border border-red-500/60 bg-transparent px-4 py-2 font-mono text-xs font-semibold text-red-400 transition-all hover:border-red-400 hover:text-red-300"
          >
            {ui.nav.contactCTA}
          </a>

        </div>

        {/* Hamburger Toggle & Mobile Language Selector */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageDropdown isMobile={false} />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? ui.nav.closeMenu : ui.nav.openMenu}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-300 transition-colors hover:bg-zinc-850 hover:text-white"
          >
            {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>



      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          data-testid="mobile-drawer"
          className="border-b border-zinc-800/80 bg-zinc-950/95 px-6 pb-6 pt-2 backdrop-blur-lg md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-4">
            <div className="flex items-center gap-2">
              <SocialIcon platform="github" href={contact.github} />
              <SocialIcon platform="linkedin" href={contact.linkedin} />
            </div>

            <a
              href={`mailto:${contact.email}`}
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-lg border border-red-500/60 bg-transparent px-4 py-2 font-mono text-xs font-semibold text-red-400 transition-all hover:border-red-400 hover:text-red-300"
            >
              {ui.nav.contactCTA}
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}
