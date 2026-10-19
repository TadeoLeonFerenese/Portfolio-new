import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar.jsx'
import { navigation } from '@/data/navigation.js'

describe('Navbar organism', () => {
  it('renders the BrandLogo with system status dot (spec: Brand and Status rendering)', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /TADEO\.DEV/i })).toBeInTheDocument()
  })

  it('renders all central navigation links (spec: Nav links present)', () => {
    render(<Navbar />)
    for (const item of navigation) {
      const links = screen.getAllByRole('link', { name: item.label })
      expect(links.length).toBeGreaterThanOrEqual(1)
      expect(links[0]).toHaveAttribute('href', item.href)
    }
  })

  it('renders external social links to GitHub and LinkedIn with safe attributes (spec: Social links safety)', () => {
    render(<Navbar />)
    const githubLink = screen.getAllByRole('link', { name: /github/i })[0]
    const linkedinLink = screen.getAllByRole('link', { name: /linkedin/i })[0]

    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink.getAttribute('rel')).toContain('noreferrer')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink.getAttribute('rel')).toContain('noreferrer')
  })

  it('renders the Contactar action button directing to #contacto or mailto (spec: Contact button)', () => {
    render(<Navbar />)
    const contactLinks = screen.getAllByRole('link', { name: /contactar/i })
    expect(contactLinks.length).toBeGreaterThanOrEqual(1)
    expect(contactLinks[0]).toHaveAttribute('href', expect.stringMatching(/(#contacto|mailto:)/))
  })

  it('toggles mobile menu drawer on button click (spec: Mobile drawer toggle)', () => {
    render(<Navbar />)
    const toggleBtn = screen.getByRole('button', { name: /abrir menú|menú/i })
    expect(toggleBtn).toBeInTheDocument()

    // Initially mobile menu is closed
    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument()

    // Open mobile menu
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument()

    // Close mobile menu
    const closeBtn = screen.getByRole('button', { name: /cerrar menú/i })
    fireEvent.click(closeBtn)
    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument()
  })

  it('renders LanguageDropdown in central navigation and responds to language changes', async () => {
    const { LanguageProvider } = await import('@/context/LanguageContext.jsx')
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    )
    const langTriggers = screen.getAllByRole('button', { name: /idioma/i })
    expect(langTriggers.length).toBeGreaterThanOrEqual(1)

    // Open dropdown
    fireEvent.click(langTriggers[0])

    const enOption = screen.getByRole('option', { name: /inglés|english/i })
    expect(enOption).toBeInTheDocument()

    // Select English
    fireEvent.click(enOption)

    // Navbar link should update to English
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /specialties/i })).toBeInTheDocument()
  })
})




