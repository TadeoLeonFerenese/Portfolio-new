import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from './Footer.jsx'

describe('Footer organism', () => {
  it('renders footer container with id="contacto" and main callout heading (spec: Section Structure and Contact Anchor)', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('#contacto')
    expect(footer).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /Construyamos software robusto juntos/i })
    ).toBeInTheDocument()
  })

  it('renders email, whatsapp, and location contact cards (spec: Communication Channels)', () => {
    render(<Footer />)

    // Email link
    const emailLink = screen.getByRole('link', { name: /enviar correo a leonferenesetadeo@gmail\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:leonferenesetadeo@gmail.com')
    expect(screen.getByText('leonferenesetadeo@gmail.com')).toBeInTheDocument()

    // WhatsApp link
    const whatsappLink = screen.getByRole('link', { name: /escribir por whatsapp a \(\+54\) 11 3065 0188/i })
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5491130650188')
    expect(whatsappLink).toHaveAttribute('target', '_blank')
    expect(whatsappLink).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByText('(+54) 11 3065 0188')).toBeInTheDocument()

    // Location
    expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument()
  })

  it('renders BrandLogo and safe external social channels (spec: Social Channels and Brand Attribution)', () => {
    render(<Footer />)

    // Brand logo
    expect(screen.getByRole('link', { name: /TADEO\.DEV/i })).toBeInTheDocument()
    expect(screen.getByText('System Online')).toBeInTheDocument()

    // Social links
    const githubLink = screen.getByRole('link', { name: /perfil de github de tadeo/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/TadeoLeonFerenese')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')

    const linkedinLink = screen.getByRole('link', { name: /perfil de linkedin de tadeo/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tadeo-leon-ferenese/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer')
  })
})
