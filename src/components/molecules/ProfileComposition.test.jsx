import { render, screen } from '@testing-library/react'
import ProfileComposition from './ProfileComposition.jsx'
import { profile } from '@/data/profile.js'

describe('ProfileComposition molecule', () => {
  it('renders the photo image when configured or fallback placeholder text (spec: Profile photo placeholder container)', () => {
    render(<ProfileComposition />)
    if (profile.photo) {
      const img = screen.getByRole('img', { name: profile.name })
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', profile.photo)
    } else {
      expect(screen.getByText(profile.photoPlaceholder)).toBeInTheDocument()
    }
  })


  it('renders all 4 technological pillar nodes (spec: 4 Technology Pillar Nodes)', () => {
    render(<ProfileComposition />)
    for (const pillar of profile.pillars) {
      const labels = screen.getAllByText(pillar.label)
      const descs = screen.getAllByText(pillar.description)
      expect(labels.length).toBeGreaterThanOrEqual(1)
      expect(descs.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the luminous ring element with accessible structure', () => {
    const { container } = render(<ProfileComposition />)
    const ring = container.querySelector('[data-testid="orbit-ring"]')
    expect(ring).toBeInTheDocument()
  })
})
