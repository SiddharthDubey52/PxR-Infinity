import { useRef } from 'react'
import { services } from '../content'
import { IconArrow, Reveal, SectionHead } from './ui'

export default function Services({ activeTab, onTabChange }) {
  const tabRefs = useRef([])
  const tabs = services.tabs
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0]

  const onKeyDown = (e, i) => {
    let next = null
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length
    if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = tabs.length - 1
    if (next === null) return
    e.preventDefault()
    onTabChange(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead kicker="Services" title={services.title} intro={services.intro} />

        <Reveal className="tabs" role="tablist" aria-label="Service categories">
          {tabs.map((t, i) => {
            const selected = t.id === current.id
            return (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                className={`tab ${selected ? 'is-active' : ''}`}
                onClick={() => onTabChange(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {t.label}
              </button>
            )
          })}
        </Reveal>

        <div
          key={current.id}
          className="tab-panel"
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          <p className="tab-tagline">{current.tagline}</p>
          <ul className="service-grid">
            {current.items.map((item, i) => (
              <li key={item.title} className="service-card" style={{ '--i': i }}>
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </li>
            ))}
            <li className="service-card service-card-cta" style={{ '--i': current.items.length }}>
              <h3>Kuch aur chahiye?</h3>
              <p>Custom plans for every brief and budget.</p>
              <a href="#contact" className="text-link">
                Talk to us <IconArrow />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
