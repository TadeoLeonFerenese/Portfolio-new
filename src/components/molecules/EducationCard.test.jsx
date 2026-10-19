import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import EducationCard from './EducationCard.jsx'

describe('EducationCard molecule', () => {
  const degreeWithMetrics = {
    title: 'Tecnicatura Universitaria en Ciencia de Datos',
    institution: 'Universidad Nacional Guillermo Brown (UNaB)',
    period: 'Feb 2025 – Presente',
    progress: 75,
    average: 8.33,
    status: '75% Aprobado',
    notes: 'Foco en Estadística, Python, Pandas, NumPy, Matplotlib.',
  }

  const degreeWithoutAverage = {
    title: 'Programación Full Stack (MERN)',
    institution: 'Coding Bootcamp (NUCBA)',
    period: '2020 – 2021',
    progress: 100,
    notes: 'MongoDB, Express, React, Node.js.',
  }

  it('renders degree title, institution, period, progress bar, and average score (spec: Degree with progress bar and average grade)', () => {
    render(<EducationCard item={degreeWithMetrics} />)

    expect(
      screen.getByRole('heading', { level: 4, name: /Tecnicatura Universitaria en Ciencia de Datos/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Universidad Nacional Guillermo Brown \(UNaB\)/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Feb 2025 – Presente/i)).toBeInTheDocument()

    // Progress bar check
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '75')
    expect(screen.getByText('75%')).toBeInTheDocument()

    // Average badge check
    expect(screen.getByText(/Promedio:\s*8\.33/i)).toBeInTheDocument()

    // Status & Notes check
    expect(screen.getByText('75% Aprobado')).toBeInTheDocument()
    expect(
      screen.getByText(/Foco en Estadística, Python, Pandas, NumPy, Matplotlib\./i)
    ).toBeInTheDocument()
  })

  it('renders correctly when average is not provided without crashing or showing empty badge (spec: Degree without average grade)', () => {
    render(<EducationCard item={degreeWithoutAverage} />)

    expect(
      screen.getByRole('heading', { level: 4, name: /Programación Full Stack \(MERN\)/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Coding Bootcamp \(NUCBA\)/i)).toBeInTheDocument()
    expect(screen.getByText(/MongoDB, Express, React, Node\.js\./i)).toBeInTheDocument()

    // Should NOT have any Promedio badge
    expect(screen.queryByText(/Promedio:/i)).toBeNull()
  })
})
