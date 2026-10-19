import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProjectCard from './ProjectCard.jsx'

describe('ProjectCard organism', () => {
  const nodoProject = {
    id: 'nodo-inventory',
    title: 'NODO INVENTORY',
    subtitle: 'Sistema de Inventario Multiplataforma (Windows + Android) con Sincronización Local-First e IA.',
    repo: 'https://github.com/TadeoLeonFerenese/Nodo',
    badges: ['SQLite Activo', 'Wi-Fi Direct :4545', 'Motor IA: gemini-3.5-flash'],
    details: [
      'Evolución completa de la tesis universitaria.',
      'Sincronización sin Nube: motor propio Wi-Fi Direct.',
    ],
    pipeline: [
      'Foto Remito / Escaneo Android',
      'Procesamiento Gemini 3.5 Flash',
      'Base Local SQLite',
    ],
    media: [
      {
        type: 'video',
        label: 'VIDEO DEMO: Sincronización en tiempo real',
        aspect: '16/9',
      },
      {
        type: 'device-desktop',
        label: 'CAPTURA WINDOWS 1: Panel de Perfil',
        aspect: '16/10',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 1: Catálogo',
        aspect: '9/19.5',
      },
    ],
  }

  const confidentialProject = {
    id: 'poder-judicial',
    title: 'PODER JUDICIAL DE LA NACIÓN',
    subtitle: 'Desarrollo y Mantenimiento de Software Crítico (Área de Planificación).',
    badges: ['Código Privado / Confidencialidad Institucional'],
    confidential: true,
    details: [
      'Mantenimiento evolutivo en PHP y Laravel.',
      'Sistemas intervenidos: Escuela Judicial, Gestión de Auditorías UAI y Registro de Pliego Automotor.',
    ],
    media: [],
  }

  const demoProject = {
    id: 'pedimon',
    title: 'PEDIMON',
    subtitle: 'Plataforma Web Full Stack.',
    demo: 'https://pedimon-chi.vercel.app/',
    badges: ['React.js', 'Vercel'],
    details: ['Proyecto integrador desarrollado en Coding Bootcamp.'],
    media: [
      {
        type: 'image',
        label: 'CAPTURA WEB: Vista desktop',
        aspect: '16/9',
      },
    ],
  }

  it('renders project header, badges, and safe repository link (spec: External Action Links and Badges)', () => {
    render(<ProjectCard project={nodoProject} />)

    expect(screen.getByRole('heading', { level: 3, name: /NODO INVENTORY/i })).toBeInTheDocument()
    expect(screen.getByText(/Sistema de Inventario Multiplataforma/i)).toBeInTheDocument()
    expect(screen.getByText('SQLite Activo')).toBeInTheDocument()

    const repoLink = screen.getByRole('link', { name: /ver repositorio github de nodo inventory/i })
    expect(repoLink).toHaveAttribute('href', 'https://github.com/TadeoLeonFerenese/Nodo')
    expect(repoLink).toHaveAttribute('target', '_blank')
    expect(repoLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('activates Video Demo tab by default when video media exists (spec: Default tab activation)', () => {
    render(<ProjectCard project={nodoProject} />)

    const videoTab = screen.getByRole('tab', { name: /video demo/i })
    expect(videoTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(/VIDEO DEMO: Sincronización en tiempo real/i)).toBeInTheDocument()
  })

  it('switches between tabs and reveals architecture flow (spec: Switching between media and architecture tabs)', () => {
    render(<ProjectCard project={nodoProject} />)

    const archTab = screen.getByRole('tab', { name: /arquitectura/i })
    fireEvent.click(archTab)

    expect(archTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(/Evolución completa de la tesis universitaria/i)).toBeInTheDocument()
    expect(screen.getByText('Foto Remito / Escaneo Android')).toBeInTheDocument()

    // Video should not be displayed in architecture view
    expect(screen.queryByText(/VIDEO DEMO: Sincronización en tiempo real/i)).toBeNull()

    // Switch to captures tab
    const capturesTab = screen.getByRole('tab', { name: /capturas/i })
    fireEvent.click(capturesTab)

    expect(capturesTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(/CAPTURA WINDOWS 1/i)).toBeInTheDocument()
    expect(screen.getByText(/CAPTURA ANDROID 1/i)).toBeInTheDocument()
  })

  it('renders locked institutional card with no media tabs for confidential projects (spec: Confidential Project Locked State)', () => {
    render(<ProjectCard project={confidentialProject} />)

    expect(screen.getByRole('heading', { level: 3, name: /PODER JUDICIAL DE LA NACIÓN/i })).toBeInTheDocument()
    expect(screen.getByText(/Código Privado \/ Confidencialidad Institucional/i)).toBeInTheDocument()
    expect(screen.getByText(/Sistemas intervenidos: Escuela Judicial/i)).toBeInTheDocument()

    // No tablist or media slots for confidential projects
    expect(screen.queryByRole('tablist')).toBeNull()
    expect(screen.queryByRole('tab', { name: /video demo/i })).toBeNull()
  })

  it('dynamically adapts tabs for projects without video (spec: Dynamic tab visibility for projects without media)', () => {
    render(<ProjectCard project={demoProject} />)

    expect(screen.queryByRole('tab', { name: /video demo/i })).toBeNull()

    const demoLink = screen.getByRole('link', { name: /ver demo en vivo de pedimon/i })
    expect(demoLink).toHaveAttribute('href', 'https://pedimon-chi.vercel.app/')
    expect(demoLink).toHaveAttribute('target', '_blank')
    expect(demoLink).toHaveAttribute('rel', 'noreferrer')
  })
})
