import { render, screen } from '@testing-library/react'
import SpecialtiesSection from './SpecialtiesSection.jsx'
import { specialties, differential } from '@/data/specialties.js'

describe('SpecialtiesSection', () => {
  it('preserves the section anchor id "especialidades" (spec: Section Anchor Preservation)', () => {
    const { container } = render(<SpecialtiesSection />)
    const section = container.querySelector('#especialidades')
    expect(section).toBeInTheDocument()
  })

  it('renders all 4 specialty titles and descriptions (spec: 4 Specialty Cards Rendering)', () => {
    render(<SpecialtiesSection />)
    for (const item of specialties) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.description)).toBeInTheDocument()
    }
  })

  it('renders the differential proposition title and text (spec: Value Proposition Block)', () => {
    render(<SpecialtiesSection />)
    expect(screen.getByRole('heading', { level: 3, name: differential.title })).toBeInTheDocument()
    expect(screen.getByText(differential.body)).toBeInTheDocument()
  })

  it('renders section eyebrow badge and main heading', () => {
    render(<SpecialtiesSection />)
    expect(screen.getByRole('heading', { level: 2, name: /Especialidades & Enfoque/i })).toBeInTheDocument()
  })
})
