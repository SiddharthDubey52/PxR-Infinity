import { clients, featuredOn } from '../content'
import { Reveal } from './ui'

function Marquee({ items, reverse = false, label }) {
  // List is rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const row = (hidden) =>
    items.map((it, i) => (
      <li key={`${hidden ? 'b' : 'a'}-${i}`} className="logo-item" aria-hidden={hidden || undefined}>
        {it.logo ? <img src={it.logo} alt={hidden ? '' : it.name} loading="lazy" /> : <span>{it.name}</span>}
      </li>
    ))

  return (
    <div className="marquee" aria-label={label}>
      <ul className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        {row(false)}
        {row(true)}
      </ul>
    </div>
  )
}

export default function Clients() {
  return (
    <section className="section clients" aria-label="Clients and press">
      <div className="container">
        <Reveal className="marquee-block">
          <p className="kicker kicker-center">Clients who trust us</p>
          <Marquee items={clients} label="Clients" />
        </Reveal>
        <Reveal className="marquee-block" delay={100}>
          <p className="kicker kicker-center">Featured on</p>
          <Marquee items={featuredOn} reverse label="Featured on" />
        </Reveal>
      </div>
    </section>
  )
}
