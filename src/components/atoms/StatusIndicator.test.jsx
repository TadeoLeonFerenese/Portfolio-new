import { render, screen } from '@testing-library/react'
import StatusIndicator from './StatusIndicator.jsx'

describe('StatusIndicator atom', () => {
  it('renders the accessible status label (spec: Brand and Status rendering)', () => {
    render(<StatusIndicator label="System Online" />)
    expect(screen.getByText('System Online')).toBeInTheDocument()
  })

  it('renders with custom status label (triangulation)', () => {
    render(<StatusIndicator label="Operational" />)
    expect(screen.getByText('Operational')).toBeInTheDocument()
  })

  it('renders the status dot indicator element', () => {
    const { container } = render(<StatusIndicator label="System Online" />)
    const dot = container.querySelector('[aria-hidden="true"]')
    expect(dot).toBeInTheDocument()
  })
})
