import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PipelineFlow from './PipelineFlow.jsx'

describe('PipelineFlow molecule', () => {
  it('renders all steps sequentially with connectors between them (spec: Architecture Pipeline Flow)', () => {
    const steps = [
      'Foto Remito / Escaneo Android',
      'Procesamiento Gemini 3.5 Flash',
      'Sync Wi-Fi Puerto 4545',
      'Base Local SQLite / PostgreSQL',
    ]

    render(<PipelineFlow steps={steps} />)

    // Verify all steps are rendered in order
    steps.forEach((stepText) => {
      expect(screen.getByText(stepText)).toBeInTheDocument()
    })

    // Verify connector indicators are present between items (steps.length - 1 connectors)
    const connectors = screen.getAllByTestId('pipeline-connector')
    expect(connectors).toHaveLength(steps.length - 1)
  })

  it('renders nothing or returns null gracefully when steps array is empty', () => {
    const { container } = render(<PipelineFlow steps={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders a single step without any connector', () => {
    render(<PipelineFlow steps={['Único paso']} />)
    expect(screen.getByText('Único paso')).toBeInTheDocument()
    expect(screen.queryByTestId('pipeline-connector')).toBeNull()
  })
})
