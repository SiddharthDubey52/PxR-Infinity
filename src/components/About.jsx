import { about } from '../content'
import { Media, Reveal } from './ui'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <Media src={about.photo} alt="Sid, founder of PXR Infinity" label="Sid — photo" />
          <div className="about-badge">
            <strong>Sid</strong>
            <span>{about.role}</span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <p className="kicker">About</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="signature">{about.signature}</p>
        </Reveal>
      </div>
    </section>
  )
}
