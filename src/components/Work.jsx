import { useState } from 'react'
import { caseStudies, workFilters } from '../content'
import { Media, SectionHead } from './ui'

const labelFor = (id) => workFilters.find((f) => f.id === id)?.label ?? id

export default function Work() {
  const [filter, setFilter] = useState('all')
  const items = filter === 'all' ? caseStudies : caseStudies.filter((c) => c.category === filter)

  return (
    <section id="work" className="section section-alt">
      <div className="container">
        <SectionHead
          kicker="Work"
          title="Results jo bolte hain."
          intro="A few campaigns we’re proud of. Numbers first, always."
        />

        <div className="filters" role="group" aria-label="Filter case studies">
          {workFilters.map((f) => (
            <button
              key={f.id}
              className={`chip ${filter === f.id ? 'is-active' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="work-grid" key={filter} aria-live="polite">
          {items.map((c, i) => (
            <li key={c.client + i} className="work-card" style={{ '--i': i }}>
              <div className="work-media">
                <Media src={c.image} alt={`${c.client} campaign`} label={c.client} />
                <span className="work-tag">{labelFor(c.category)}</span>
              </div>
              <div className="work-body">
                <h3>{c.client}</h3>
                <dl className="work-dl">
                  <div>
                    <dt>Problem</dt>
                    <dd>{c.problem}</dd>
                  </div>
                  <div>
                    <dt>What we did</dt>
                    <dd>{c.did}</dd>
                  </div>
                </dl>
                <ul className="work-results">
                  {c.results.map((r) => (
                    <li key={r.label}>
                      <strong>{r.value}</strong>
                      <span>{r.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          {items.length === 0 && <li className="work-empty">Case studies coming soon.</li>}
        </ul>
      </div>
    </section>
  )
}
