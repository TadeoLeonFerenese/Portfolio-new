import { render, screen } from '@testing-library/react'
import BrandLogo from './BrandLogo.jsx'

describe('BrandLogo atom', () => {
  it('renders the brand link pointing to #inicio (spec: Brand and Status rendering)', () => {
    render(<BrandLogo />)
    const link = screen.getByRole('link', { name: /TADEO\.DEV/i })
    expect(link).toHaveAttribute('href', '#inicio')
  })

  it('renders with StatusIndicator by default', () => {
    render(<BrandLogo />)
    expect(screen.getByText('System Online')).toBeInTheDocument()
  })

  it('allows hiding the status indicator when showStatus is false', () => {
    render(<BrandLogo showStatus={false} />)
    const link = screen.getByRole('link', { name: /TADEO\.DEV/i })
    expect(link).toBeInTheDocument()
    expect(screen.queryByText('System Online')).not.toBeInTheDocument()
  })
})
