import { process } from '../content'
import { Reveal, SectionHead } from './ui'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead kicker="Process" title={process.title} />
        <ol className="process-list">
          {process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="process-step" delay={i * 90}>
              <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
