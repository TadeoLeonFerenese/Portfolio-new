import { render, screen } from '@testing-library/react'
import PillBadge from './PillBadge.jsx'

describe('PillBadge atom', () => {
  it('renders the text passed via children (spec: Bio copy display)', () => {
    render(<PillBadge>— Software & Applied AI Engineer</PillBadge>)
    expect(screen.getByText('— Software & Applied AI Engineer')).toBeInTheDocument()
  })

  it('renders with custom text (triangulation)', () => {
    render(<PillBadge>Data Science (75%)</PillBadge>)
    expect(screen.getByText('Data Science (75%)')).toBeInTheDocument()
  })
})
