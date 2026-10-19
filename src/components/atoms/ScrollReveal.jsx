import { useEffect, useRef, useState } from 'react'

const HIDDEN_TRANSFORMS = {
  up: 'translate-y-10 opacity-0',
  down: '-translate-y-10 opacity-0',
  left: '-translate-x-10 opacity-0',
  right: 'translate-x-10 opacity-0',
  scale: 'translate-y-8 scale-95 opacity-0',
}

const VISIBLE_TRANSFORMS = {
  up: 'translate-y-0 opacity-100',
  down: 'translate-y-0 opacity-100',
  left: 'translate-x-0 opacity-100',
  right: 'translate-x-0 opacity-100',
  scale: 'translate-y-0 scale-100 opacity-100',
}

/**
 * Wrapper atom that animates children with a smooth translate + fade transition
 * when scrolling into the viewport.
 * @param {{
 *   children: React.ReactNode,
 *   direction?: 'up' | 'down' | 'left' | 'right' | 'scale',
 *   delay?: number,
 *   className?: string,
 *   threshold?: number
 * }} props
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.12,
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const node = ref.current
    if (!node || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  const stateClass = isVisible
    ? VISIBLE_TRANSFORMS[direction] ?? VISIBLE_TRANSFORMS.up
    : HIDDEN_TRANSFORMS[direction] ?? HIDDEN_TRANSFORMS.up

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${stateClass} ${className}`}
    >
      {children}
    </div>
  )
}
