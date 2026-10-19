import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const read = (file) => readFileSync(resolve(root, file), 'utf8')

describe('project-tooling and design-tokens', () => {
  it('declares lang="es" on the html element (spec: Lang)', () => {
    expect(read('index.html')).toMatch(/<html\s+lang="es"/)
  })

  it('does not ship a tailwind.config.js (spec: No tailwind.config.js)', () => {
    expect(existsSync(resolve(root, 'tailwind.config.js'))).toBe(false)
    expect(existsSync(resolve(root, 'index.html'))).toBe(true)
  })

  it('defines the semantic tokens in @theme (spec: Semantic palette)', () => {
    const css = read('src/index.css')

    expect(css).toMatch(/--color-surface:\s*var\(--color-zinc-950\)/)
    expect(css).toMatch(/--color-accent:\s*var\(--color-red-500\)/)
    expect(css).toMatch(/--color-online:\s*var\(--color-emerald-400\)/)

    expect(css).toMatch(/--color-line:\s*var\(--color-zinc-800\)/)
    expect(css).toMatch(/--color-card:/)
  })

  it('paints the body with the surface token (spec: Body background)', () => {
    const css = read('src/index.css')
    const bodyRule = css.match(/body\s*\{[^}]*\}/)

    expect(bodyRule).not.toBeNull()
    expect(bodyRule[0]).toContain('bg-surface')
  })

  it('declares the Geist families in @theme (design decision: typography)', () => {
    const css = read('src/index.css')

    expect(css).toMatch(/--font-sans:\s*'Geist Variable'/)
    expect(css).toMatch(/--font-mono:\s*'Geist Mono Variable'/)
  })

  it('imports both Geist packages from node_modules in the entry point', () => {
    const main = read('src/main.jsx')

    expect(main).toContain("import '@fontsource-variable/geist'")
    expect(main).toContain("import '@fontsource-variable/geist-mono'")
  })

  it('exposes the required npm scripts (spec: Scripts)', () => {
    const { scripts } = JSON.parse(read('package.json'))

    expect(Object.keys(scripts)).toEqual(
      expect.arrayContaining(['dev', 'build', 'preview', 'test', 'lint', 'format']),
    )
    expect(scripts.test).toBe('vitest run')
  })
})
