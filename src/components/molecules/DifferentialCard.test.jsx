import { render, screen } from '@testing-library/react'
import DifferentialCard from './DifferentialCard.jsx'
import { differential } from '@/data/specialties.js'

describe('DifferentialCard molecule', () => {
  it('renders differential title in a heading and body copy (spec: Value Proposition Block)', () => {
    render(<DifferentialCard />)
    expect(screen.getByRole('heading', { level: 3, name: differential.title })).toBeInTheDocument()
    expect(screen.getByText(differential.body)).toBeInTheDocument()
  })

  it('renders key achievement badges and metric pills (spec: Key Achievement Badges)', () => {
    render(<DifferentialCard />)
    expect(screen.getByText(/10\+ Años Infraestructura/i)).toBeInTheDocument()
    expect(screen.getAllByText(/8\.50/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Ciencia de Datos/i).length).toBeGreaterThanOrEqual(1)
  })
})
