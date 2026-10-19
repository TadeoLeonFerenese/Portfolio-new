import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ScrollReveal from './ScrollReveal.jsx'

describe('ScrollReveal atom', () => {
  let observeMock
  let disconnectMock
  let observerCallback
  let originalIntersectionObserver

  beforeEach(() => {
    originalIntersectionObserver = window.IntersectionObserver
    observeMock = vi.fn()
    disconnectMock = vi.fn()

    window.IntersectionObserver = vi.fn(function (callback) {
      observerCallback = callback
      return {
        observe: observeMock,
        disconnect: disconnectMock,
        unobserve: vi.fn(),
      }
    })
  })

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver
  })

  it('starts in translated/hidden state and transitions to visible when intersecting', () => {
    render(
      <ScrollReveal direction="up" delay={100}>
        <div>Contenido Animado</div>
      </ScrollReveal>,
    )

    const wrapper = screen.getByText('Contenido Animado').parentElement
    expect(observeMock).toHaveBeenCalledTimes(1)
    expect(wrapper.className).toContain('opacity-0')
    expect(wrapper.className).toContain('translate-y-10')

    act(() => {
      observerCallback([{ isIntersecting: true }])
    })

    expect(wrapper.className).toContain('opacity-100')
    expect(wrapper.className).toContain('translate-y-0')
  })

  it('supports horizontal translate directions (left and right)', () => {
    render(
      <ScrollReveal direction="left">
        <div>Desde Izquierda</div>
      </ScrollReveal>,
    )

    const wrapper = screen.getByText('Desde Izquierda').parentElement
    expect(wrapper.className).toContain('-translate-x-10')

    act(() => {
      observerCallback([{ isIntersecting: true }])
    })

    expect(wrapper.className).toContain('translate-x-0')
  })
})
