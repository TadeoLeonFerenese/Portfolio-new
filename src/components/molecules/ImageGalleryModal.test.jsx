import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ImageGalleryModal from './ImageGalleryModal.jsx'

describe('ImageGalleryModal molecule', () => {
  const sampleImages = [
    { src: '/img/view-1.jpg', label: 'Catálogo de escritorio' },
    { src: '/img/view-2.jpg', label: 'Historial de movimientos' },
    { src: '/img/view-3.jpg', label: 'Carga de remito con IA' },
    { src: '/img/view-4.jpg', label: 'Sincronización y perfil' },
  ]

  it('does not render anything when isOpen is false', () => {
    const { container } = render(
      <ImageGalleryModal
        isOpen={false}
        images={sampleImages}
        currentIndex={0}
        onClose={vi.fn()}
        onNavigate={vi.fn()}
        projectTitle="NODO INVENTORY"
      />,
    )

    expect(container.firstChild).toBeNull()
  })

  it('renders modal dialog with active image, label and counter when open', () => {
    render(
      <ImageGalleryModal
        isOpen={true}
        images={sampleImages}
        currentIndex={1}
        onClose={vi.fn()}
        onNavigate={vi.fn()}
        projectTitle="NODO INVENTORY"
      />,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(screen.getByText('Historial de movimientos')).toBeInTheDocument()
    expect(screen.getByText(/Vista 2 de 4/i)).toBeInTheDocument()

    const img = screen.getByRole('img', { name: 'Historial de movimientos' })
    expect(img).toHaveAttribute('src', '/img/view-2.jpg')
  })

  it('calls onNavigate with next and previous index when clicking navigation buttons', () => {
    const handleNavigate = vi.fn()

    render(
      <ImageGalleryModal
        isOpen={true}
        images={sampleImages}
        currentIndex={1}
        onClose={vi.fn()}
        onNavigate={handleNavigate}
        projectTitle="NODO INVENTORY"
      />,
    )

    const nextBtn = screen.getByRole('button', { name: /siguiente imagen/i })
    fireEvent.click(nextBtn)
    expect(handleNavigate).toHaveBeenCalledWith(2)

    const prevBtn = screen.getByRole('button', { name: /imagen anterior/i })
    fireEvent.click(prevBtn)
    expect(handleNavigate).toHaveBeenCalledWith(0)
  })

  it('allows jumping directly to another view via quick view switcher buttons', () => {
    const handleNavigate = vi.fn()

    render(
      <ImageGalleryModal
        isOpen={true}
        images={sampleImages}
        currentIndex={0}
        onClose={vi.fn()}
        onNavigate={handleNavigate}
        projectTitle="NODO INVENTORY"
      />,
    )

    const view4Btn = screen.getByRole('button', { name: /ir a vista 4/i })
    fireEvent.click(view4Btn)
    expect(handleNavigate).toHaveBeenCalledWith(3)
  })

  it('calls onClose when clicking close button or pressing Escape', () => {
    const handleClose = vi.fn()

    render(
      <ImageGalleryModal
        isOpen={true}
        images={sampleImages}
        currentIndex={0}
        onClose={handleClose}
        onNavigate={vi.fn()}
        projectTitle="NODO INVENTORY"
      />,
    )

    const closeBtn = screen.getByRole('button', { name: /cerrar modal/i })
    fireEvent.click(closeBtn)
    expect(handleClose).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(2)
  })

  it('supports keyboard arrows navigation (ArrowRight and ArrowLeft)', () => {
    const handleNavigate = vi.fn()

    render(
      <ImageGalleryModal
        isOpen={true}
        images={sampleImages}
        currentIndex={2}
        onClose={vi.fn()}
        onNavigate={handleNavigate}
        projectTitle="NODO INVENTORY"
      />,
    )

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(handleNavigate).toHaveBeenCalledWith(3)

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(handleNavigate).toHaveBeenCalledWith(1)
  })
})
