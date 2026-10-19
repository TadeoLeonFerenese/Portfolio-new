import { render, screen } from '@testing-library/react'
import OrbitNode from './OrbitNode.jsx'

describe('OrbitNode molecule', () => {
  const samplePillar = {
    id: 'ai',
    label: 'AI / Gemini API',
    description: 'Integración LLM & OCR',
  }

  it('renders the pillar label and description (spec: 4 Technology Pillar Nodes)', () => {
    render(<OrbitNode pillar={samplePillar} />)
    expect(screen.getByText('AI / Gemini API')).toBeInTheDocument()
    expect(screen.getByText('Integración LLM & OCR')).toBeInTheDocument()
  })

  it('renders a different pillar correctly (triangulation)', () => {
    const pythonPillar = {
      id: 'data',
      label: 'Python & Data',
      description: 'Pandas, NumPy, SQL',
    }
    render(<OrbitNode pillar={pythonPillar} />)
    expect(screen.getByText('Python & Data')).toBeInTheDocument()
    expect(screen.getByText('Pandas, NumPy, SQL')).toBeInTheDocument()
  })

  it('renders an icon representation for the pillar', () => {
    const { container } = render(<OrbitNode pillar={samplePillar} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
