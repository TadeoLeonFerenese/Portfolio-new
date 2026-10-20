import { useContent } from '@/data/i18n/content.js'
// import OrbitNode from './OrbitNode.jsx'

/**
 * Visual hero composition with glowing orbital ring and cutout profile figure.
 * Minimalist, high-impact aesthetic: zero visual clutter around the portrait.
 * @param {{ className?: string }} props
 */
export default function ProfileComposition({ className = '' }) {
  const { profile } = useContent()

  return (
    <div
      className={`relative flex w-full flex-1 max-w-[650px] flex-col items-center justify-center py-6 px-2 md:min-h-[500px] ${className}`}
    >
      {/* Central Pop-Out Composition: Thick Glowing Torus Ring BEHIND + Cutout Figure IN FRONT */}
      <div className="relative flex items-center justify-center">
        {/* Thick Glowing Torus Ring Behind Figure */}
        <div
          data-testid="orbit-ring"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 size-[280px] -translate-x-1/2 -translate-y-[44%] rounded-full bg-gradient-to-tr from-red-700 via-red-500 to-orange-500 p-[26px] shadow-[0_0_65px_-10px_rgba(239,68,68,0.45)] sm:size-[330px] sm:p-[30px] md:size-[380px] md:p-[34px]"
        >
          {/* Hollow dark center of the ring */}
          <div className="size-full rounded-full bg-surface shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]" />
        </div>

        {/* Cutout Portrait Standing IN FRONT of the Ring (z-20, unclipped head & arms) */}
        {profile.photo ? (
          <div className="relative z-20 flex items-end justify-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative z-20 h-auto w-[270px] -translate-y-3 object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] sm:w-[310px] md:w-[355px]"
            />
          </div>
        ) : (
          <div className="relative z-20 flex size-64 flex-col items-center justify-center rounded-full p-5 text-center">
            <span className="font-mono text-[11px] font-medium leading-relaxed text-zinc-400">
              {profile.photoPlaceholder}
            </span>
          </div>
        )}
      </div>

      {/* Accessible semantic pillar list for screen readers and SEO */}
      <div className="sr-only" aria-label="Pilares tecnológicos">
        {profile.pillars.map((pillar) => (
          <div key={pillar.id}>
            <span>{pillar.label}</span>
            <span>{pillar.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
