/**
 * Hero visual on the right: a soft glow with two floating glass cards (desktop only).
 * Pure HTML/CSS — no canvas, no 3D. Generic sample text only (no clients, handles or live numbers).
 * Cards sit on the right of the box so they never overlap the headline or buttons.
 */
export function HeroCards({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div className="hero-glow absolute inset-0" />
      <div className="absolute inset-0 hidden lg:block">
        <div className="orbit-card top-[8%] right-[4%] w-52 p-4" style={{ ['--od' as string]: '0s' }}>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="grid size-6 place-items-center rounded-full bg-white font-bold text-bg">X</span>
            Trends for you
          </div>
          <span className="mt-2 block font-display text-base font-semibold text-white">#1 Trending in India</span>
          <span className="mt-0.5 block text-sm text-accent-light">#YourHashtag</span>
        </div>
        <div className="orbit-card top-[38%] right-[20%] w-52 p-4" style={{ ['--od' as string]: '-4s' }}>
          <span className="rounded bg-gold px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-[#1a1203]">NEWS</span>
          <span className="mt-2 block text-sm leading-snug font-semibold text-white">The campaign everyone is talking about</span>
        </div>
      </div>
    </div>
  )
}
