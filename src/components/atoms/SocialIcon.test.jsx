import { render, screen } from '@testing-library/react'
import SocialIcon from './SocialIcon.jsx'

describe('SocialIcon atom', () => {
  it('renders a GitHub link with rel="noreferrer" and target="_blank" (spec: Social links safety)', () => {
    render(<SocialIcon platform="github" href="https://github.com/TadeoLeonFerenese" />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/TadeoLeonFerenese')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link.getAttribute('rel')).toContain('noreferrer')
  })

  it('renders a LinkedIn link with rel="noreferrer" and target="_blank" (spec: Social links safety)', () => {
    render(<SocialIcon platform="linkedin" href="https://www.linkedin.com/in/tadeo-leon-ferenese/" />)
    const link = screen.getByRole('link', { name: /linkedin/i })
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/tadeo-leon-ferenese/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link.getAttribute('rel')).toContain('noreferrer')
  })

  it('renders svg icon with aria-hidden inside the link', () => {
    const { container } = render(<SocialIcon platform="github" href="https://github.com" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
