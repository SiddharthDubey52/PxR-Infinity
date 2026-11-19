import { useInView } from '../hooks'
import { site } from '../content'
import { waLink } from '../utils'

/** Fades/slides children in when scrolled into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ kicker, title, intro, center = false }) {
  return (
    <Reveal className={`section-head ${center ? 'is-center' : ''}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}

/** Shows an image if `src` is set, otherwise a branded placeholder. */
export function Media({ src, alt, label, className = '' }) {
  if (src) {
    return <img className={`media ${className}`} src={src} alt={alt} loading="lazy" decoding="async" />
  }
  return (
    <div className={`media media-placeholder ${className}`} role="img" aria-label={alt}>
      <span>{label}</span>
    </div>
  )
}

export function Logo({ className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label={`${site.name} — back to top`}>
      PXR<span className="logo-inf" aria-hidden="true">∞</span>
      <span className="logo-word">Infinity</span>
    </a>
  )
}

/* ---------- Icons (inline SVG, no external requests) ---------- */

export const IconWhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.6 23.6l6-1.57a11.34 11.34 0 0 0 5.44 1.39h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03" />
  </svg>
)

export const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const IconX = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
)

export const IconMail = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconChevron = ({ dir = 'right', ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
  </svg>
)

export function Socials({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      <li>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <IconInstagram />
        </a>
      </li>
      <li>
        <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <IconX />
        </a>
      </li>
      <li>
        <a href={`mailto:${site.email}`} aria-label="Email">
          <IconMail />
        </a>
      </li>
      <li>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <IconWhatsApp />
        </a>
      </li>
    </ul>
  )
}
