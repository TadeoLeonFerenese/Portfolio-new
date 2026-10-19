import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProjectsSection from './ProjectsSection.jsx'

describe('ProjectsSection integration', () => {
  it('renders section container with id="proyectos", category pill, and main heading (spec: Section Structure and Header)', () => {
    const { container } = render(<ProjectsSection />)

    const section = container.querySelector('#proyectos')
    expect(section).toBeInTheDocument()

    expect(
      screen.getByText(/Proyectos & Sistemas en Producción/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /Sistemas en Producción & Proyectos Destacados/i })
    ).toBeInTheDocument()
  })

  it('renders all 4 production projects from data source', () => {
    render(<ProjectsSection />)

    expect(screen.getByRole('heading', { level: 3, name: /NODO INVENTORY/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /BUNKER NOTAS/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /PODER JUDICIAL DE LA NACIÓN/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /PEDIMON/i })).toBeInTheDocument()
  })
})
