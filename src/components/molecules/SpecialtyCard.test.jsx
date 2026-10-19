import { render, screen } from '@testing-library/react'
import SpecialtyCard from './SpecialtyCard.jsx'

describe('SpecialtyCard molecule', () => {
  const sampleSpecialty = {
    id: 'applied-ai',
    title: 'Applied AI & Automatización',
    description: 'Integración de modelos multimodales (gemini-3.5-flash) mediante API.',
  }

  it('renders specialty title as heading and description (spec: 4 Specialty Cards Rendering)', () => {
    render(<SpecialtyCard specialty={sampleSpecialty} />)
    expect(screen.getByRole('heading', { level: 3, name: sampleSpecialty.title })).toBeInTheDocument()
    expect(screen.getByText(sampleSpecialty.description)).toBeInTheDocument()
  })

  it('renders with a different specialty (triangulation)', () => {
    const dataSpecialty = {
      id: 'data-science',
      title: 'Ciencia de Datos & Motores SQL',
      description: 'Análisis estadístico con Python y diseño relacional.',
    }
    render(<SpecialtyCard specialty={dataSpecialty} />)
    expect(screen.getByRole('heading', { level: 3, name: dataSpecialty.title })).toBeInTheDocument()
    expect(screen.getByText(dataSpecialty.description)).toBeInTheDocument()
  })

  it('renders icon with aria-hidden (spec: Interactive Card Features)', () => {
    const { container } = render(<SpecialtyCard specialty={sampleSpecialty} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
