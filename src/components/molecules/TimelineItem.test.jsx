import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TimelineItem from './TimelineItem.jsx'

describe('TimelineItem molecule', () => {
  const mockExperience = {
    role: 'Desarrollador de Software (PHP/Laravel)',
    company: 'Poder Judicial de la Nación (Área de Planificación)',
    period: 'Jun 2025 – Presente',
  }

  it('renders role, company, and period badge (spec: Work Experience Milestones)', () => {
    render(<TimelineItem item={mockExperience} />)

    expect(
      screen.getByRole('heading', { level: 4, name: /Desarrollador de Software \(PHP\/Laravel\)/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Poder Judicial de la Nación \(Área de Planificación\)/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Jun 2025 – Presente/i)).toBeInTheDocument()
  })

  it('renders milestone node indicator', () => {
    render(<TimelineItem item={mockExperience} />)
    expect(screen.getByTestId('timeline-node')).toBeInTheDocument()
  })

  it('renders without breaking when isLast is true', () => {
    render(<TimelineItem item={mockExperience} isLast={true} />)
    expect(
      screen.getByRole('heading', { level: 4, name: /Desarrollador de Software/i })
    ).toBeInTheDocument()
  })
})
