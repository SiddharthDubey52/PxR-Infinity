import { footer, nav, site } from '../content'
import { Logo, Socials } from './ui'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{footer.tagline}</p>
          <Socials />
        </div>
        <nav aria-label="Footer">
          <h3>Quick links</h3>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3>Say hi</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.city}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
