import { projects } from '@/data/projects.js'
import { education } from '@/data/education.js'
import { contact } from '@/data/contact.js'
import { experience } from '@/data/experience.js'

describe('content-data: projects', () => {
  it('has exactly the 4 projects from AGENT.md (spec: Projects)', () => {
    expect(projects.map((p) => p.id)).toEqual([
      'nodo-inventory',
      'bunker-notas',
      'poder-judicial',
      'pedimon',
    ])
  })

  it.each(projects.map((p) => [p.id, p]))(
    '%s has id, title, subtitle, badges, details and media (spec: Required fields)',
    (_id, project) => {
      expect(project.id).toEqual(expect.any(String))
      expect(project.title.length).toBeGreaterThan(0)
      expect(project.subtitle.length).toBeGreaterThan(0)
      expect(project.badges.length).toBeGreaterThan(0)
      expect(project.details.length).toBeGreaterThan(0)
      expect(Array.isArray(project.media)).toBe(true)
    },
  )

  it('marks Poder Judicial as confidential with no media at all (spec: Confidential project)', () => {
    const judicial = projects.find((p) => p.id === 'poder-judicial')

    expect(judicial.confidential).toBe(true)
    expect(judicial.media).toHaveLength(0)
    expect(judicial.repo).toBeUndefined()
  })

  it('does not mark any other project as confidential (triangulation)', () => {
    const others = projects.filter((p) => p.id !== 'poder-judicial')

    expect(others).toHaveLength(3)
    expect(others.every((p) => p.confidential !== true)).toBe(true)
  })

  it('validates that media slots have proper types and valid paths when defined', () => {
    const slots = projects.flatMap((p) => p.media)

    expect(slots.length).toBeGreaterThan(0)
    for (const slot of slots) {
      if (slot.src !== undefined) {
        expect(typeof slot.src).toBe('string')
        expect(slot.src.startsWith('/')).toBe(true)
      }
    }
  })

  it('keeps the repo and demo URLs from AGENT.md', () => {
    const byId = Object.fromEntries(projects.map((p) => [p.id, p]))

    expect(byId['nodo-inventory'].repo).toBe('https://github.com/TadeoLeonFerenese/Nodo')
    expect(byId['bunker-notas'].repo).toBe('https://github.com/TadeoLeonFerenese/bunker-notas')
    expect(byId.pedimon.demo).toBe(
      'https://pedimon-juee-60loepjfe-tadeoleonfereneses-projects.vercel.app/',
    )
  })
})

describe('content-data: experience and education', () => {
  it('provides 3 experience entries and 3 education entries', () => {
    expect(experience).toHaveLength(3)
    expect(education).toHaveLength(3)
  })

  it('keeps every education progress within 0-100 (spec: Progress bounds)', () => {
    expect(education.length).toBeGreaterThan(0)
    for (const entry of education) {
      expect(entry.progress).toBeGreaterThanOrEqual(0)
      expect(entry.progress).toBeLessThanOrEqual(100)
    }
  })

  it('uses the exact academic figures from AGENT.md (spec: Exact figures)', () => {
    const datos = education.find((e) => e.title.includes('Ciencia de Datos'))
    const programacion = education.find((e) => e.title.includes('Programación'))

    expect(datos.progress).toBe(75)
    expect(datos.average).toBe(8.33)
    expect(programacion.progress).toBe(100)
    expect(programacion.average).toBe(8.5)
  })

  it('does not invent an average for the bootcamp (not in AGENT.md)', () => {
    const bootcamp = education.find((e) => e.institution.includes('NUCBA'))

    expect(bootcamp.average).toBeUndefined()
  })
})

describe('content-data: contact', () => {
  it('exposes the email exactly as in AGENT.md (spec: Email)', () => {
    expect(contact.email).toBe('leonferenesetadeo@gmail.com')
  })

  it('exposes phone, location, linkedin and github exactly as in AGENT.md', () => {
    expect(contact.phone).toBe('(+54) 11 3065 0188')
    expect(contact.location).toBe('Buenos Aires, Argentina')
    expect(contact.linkedin).toBe('https://www.linkedin.com/in/tadeo-leon-ferenese/')
    expect(contact.github).toBe('https://github.com/TadeoLeonFerenese')
  })
})
