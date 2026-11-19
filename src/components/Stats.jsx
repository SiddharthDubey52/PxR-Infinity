import { stats } from '../content'
import { useCountUp, useInView } from '../hooks'

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start)
  return (
    <li className="stat">
      <span className="stat-value" aria-hidden="true">
        {n.toLocaleString('en-IN')}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="visually-hidden">
        {value}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </li>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <section className="stats" aria-label="PXR Infinity in numbers">
      <div className="container">
        <ul ref={ref} className="stats-grid">
          {stats.map((s) => (
            <Stat key={s.label} {...s} start={inView} />
          ))}
        </ul>
      </div>
    </section>
  )
}
