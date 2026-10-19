import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TimelineSection from './TimelineSection.jsx'

describe('TimelineSection integration', () => {
  it('renders section container with id="trayectoria" and nested id="educacion" with header (spec: Section Structure and Anchors)', () => {
    const { container } = render(<TimelineSection />)

    const trayectoria = container.querySelector('#trayectoria')
    expect(trayectoria).toBeInTheDocument()

    const educacion = trayectoria.querySelector('#educacion')
    expect(educacion).toBeInTheDocument()

    expect(
      screen.getByText(/Trayectoria Profesional & Formación Académica/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /Trayectoria & Formación/i })
    ).toBeInTheDocument()
  })

  it('renders all work experience and education records (spec: Work Experience Milestones and Academic Metrics)', () => {
    render(<TimelineSection />)

    // Experience entries
    expect(
      screen.getByRole('heading', { level: 4, name: /Desarrollador de Software \(PHP\/Laravel\)/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: /Analista de Soporte Técnico Especializado/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: /Analista de Soporte Técnico$/i })
    ).toBeInTheDocument()

    // Education entries
    expect(
      screen.getByRole('heading', { level: 4, name: /Tecnicatura Universitaria en Ciencia de Datos/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: /Técnico Universitario en Programación/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: /Programación Full Stack \(MERN\)/i })
    ).toBeInTheDocument()
  })
})
