import { render, screen } from '@testing-library/react'
import MediaPlaceholder from './MediaPlaceholder.jsx'

describe('MediaPlaceholder', () => {
  it('shows the label when the slot has no src (spec: Missing src)', () => {
    render(
      <MediaPlaceholder
        slot={{ type: 'video', label: 'VIDEO DEMO: sincronización Windows y Android', aspect: '16/9' }}
      />,
    )

    expect(screen.getByText('VIDEO DEMO: sincronización Windows y Android')).toBeInTheDocument()
  })

  it('shows the label of a different slot type (triangulation)', () => {
    render(
      <MediaPlaceholder
        slot={{ type: 'device-android', label: 'CAPTURA ANDROID 1: Catálogo', aspect: '9/19.5' }}
      />,
    )

    expect(screen.getByText('CAPTURA ANDROID 1: Catálogo')).toBeInTheDocument()
  })

  it('renders the real image instead of the placeholder when src exists', () => {
    render(
      <MediaPlaceholder
        slot={{ type: 'image', label: 'Vista desktop de Pedimon', aspect: '16/9', src: '/media/pedimon.png' }}
      />,
    )

    const img = screen.getByRole('img', { name: 'Vista desktop de Pedimon' })
    expect(img).toHaveAttribute('src', '/media/pedimon.png')
    expect(screen.queryByText('Vista desktop de Pedimon')).not.toBeInTheDocument()
  })

  it('renders a video element when a video slot has src', () => {
    const { container } = render(
      <MediaPlaceholder
        slot={{ type: 'video', label: 'Demo Nodo', aspect: '16/9', src: '/media/nodo.mp4' }}
      />,
    )

    expect(container.querySelector('video')).toHaveAttribute('src', '/media/nodo.mp4')
  })
})
