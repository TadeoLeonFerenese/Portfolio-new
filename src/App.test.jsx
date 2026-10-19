import { render } from '@testing-library/react'
import App from './App.jsx'
import { navigation } from '@/data/navigation.js'

const SECTION_IDS = ['inicio', 'especialidades', 'proyectos', 'trayectoria', 'educacion']

describe('App shell', () => {
  it.each(SECTION_IDS)('renders an element with id "%s" (spec: Anchors present)', (id) => {
    const { container } = render(<App />)

    expect(container.querySelector(`#${id}`)).toBeInTheDocument()
  })

  it('has a target element for every navigation link (spec: Nav links resolve)', () => {
    const { container } = render(<App />)

    expect(navigation).toHaveLength(4)
    for (const link of navigation) {
      expect(container.querySelector(link.href)).toBeInTheDocument()
    }
  })

  it('places the educacion anchor inside the trayectoria section (design decision)', () => {
    const { container } = render(<App />)

    const trayectoria = container.querySelector('#trayectoria')
    expect(trayectoria.querySelector('#educacion')).toBeInTheDocument()
  })

  it('renders a header landmark containing Navbar above main (spec: Navbar rendered outside main)', () => {
    const { container } = render(<App />)

    const header = container.querySelector('header')
    const main = container.querySelector('main')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    // Header precedes main in the DOM tree
    expect(header.compareDocumentPosition(main)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it('renders the sections in the documented order', () => {
    const { container } = render(<App />)

    const ids = [...container.querySelectorAll('main > section')].map((s) => s.id)
    expect(ids).toEqual(['inicio', 'especialidades', 'proyectos', 'trayectoria'])
  })

  it('renders a footer landmark containing #contacto below main (spec: Footer rendered outside main)', () => {
    const { container } = render(<App />)

    const footer = container.querySelector('footer')
    const main = container.querySelector('main')

    expect(footer).toBeInTheDocument()
    expect(footer.id).toBe('contacto')
    expect(main.compareDocumentPosition(footer)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })
})
