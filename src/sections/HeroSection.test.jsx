import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection.jsx'
import { profile } from '@/data/profile.js'

describe('HeroSection', () => {
  it('renders engineering badge, main title, and technical subtitle (spec: Bio copy display)', () => {
    render(<HeroSection />)
    expect(screen.getByText(profile.badge.trim())).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: profile.title })).toBeInTheDocument()
    expect(screen.getByText(profile.subtitle)).toBeInTheDocument()
  })


  it('renders primary CTA linking to #proyectos (spec: Primary CTA scroll link)', () => {
    render(<HeroSection />)
    const primaryCta = screen.getByRole('link', { name: profile.ctas.primary.label })
    expect(primaryCta).toHaveAttribute('href', '#proyectos')
  })

  it('renders secondary CTA with CV fallback behavior (spec: Secondary CTA fallback)', () => {
    render(<HeroSection />)
    const secondaryCta = screen.getByRole('button', { name: profile.ctas.secondary.label })
    expect(secondaryCta).toBeInTheDocument()
  })

  it('renders the ProfileComposition with photo or placeholder and pillars', () => {
    render(<HeroSection />)
    if (profile.photo) {
      expect(screen.getByRole('img', { name: profile.name })).toBeInTheDocument()
    } else {
      expect(screen.getByText(profile.photoPlaceholder)).toBeInTheDocument()
    }
    for (const pillar of profile.pillars) {
      expect(screen.getAllByText(pillar.label).length).toBeGreaterThanOrEqual(1)
    }
  })

})
