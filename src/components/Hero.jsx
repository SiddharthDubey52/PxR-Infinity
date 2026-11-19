import { hero } from '../content'
import { IconArrow } from './ui'

/** Renders "text [highlight] text" with the bracketed word accented. */
function Headline({ text }) {
  const parts = text.split(/(\[[^\]]+\])/)
  return parts.map((part, i) =>
    part.startsWith('[') ? (
      <span key={i} className="hl">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    ),
  )
}

export default function Hero({ onPickTab }) {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-inner">
        <p className="eyebrow hero-anim" style={{ '--d': '0ms' }}>
          <span className="pulse-dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>

        <h1 className="hero-title hero-anim" style={{ '--d': '80ms' }}>
          <Headline text={hero.headline} />
        </h1>

        <p className="hero-sub hero-anim" style={{ '--d': '160ms' }}>
          {hero.subline}
        </p>

        <div className="hero-ctas hero-anim" style={{ '--d': '240ms' }}>
          <a href="#services" className="btn btn-primary btn-lg" onClick={() => onPickTab('brands')}>
            {hero.ctaBrands}
            <IconArrow />
          </a>
          <a href="#services" className="btn btn-ghost btn-lg" onClick={() => onPickTab('creators')}>
            {hero.ctaCreators}
          </a>
        </div>

        <ul className="hero-chips hero-anim" style={{ '--d': '320ms' }} aria-label="What we do">
          {hero.chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
