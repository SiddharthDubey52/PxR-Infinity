import { useState } from 'react'
import { contact, site } from '../content'
import { waLink } from '../utils'
import { IconInstagram, IconMail, IconWhatsApp, IconX, Reveal, SectionHead } from './ui'

const empty = { name: '', phone: '', email: '', who: '', budget: '', goal: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Naam toh batao 🙂'
    if (form.phone.replace(/\D/g, '').length < 10) er.phone = 'Enter a valid phone / WhatsApp number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'That email doesn’t look right'
    if (!form.who) er.who = 'Please choose one'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      document.getElementById(`f-${Object.keys(er)[0]}`)?.focus()
      return
    }
    const details = [
      `*Name:* ${form.name.trim()}`,
      `*Phone/WhatsApp:* ${form.phone.trim()}`,
      form.email.trim() && `*Email:* ${form.email.trim()}`,
      `*I am a:* ${form.who}`,
      form.budget && `*Budget:* ${form.budget}`,
      form.goal.trim() && `*Goal:* ${form.goal.trim()}`,
    ].filter(Boolean)
    const msg = [`Hi ${site.name}! 👋`, '', ...details].join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
  }

  const field = (k) => ({
    id: `f-${k}`,
    name: k,
    value: form[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `e-${k}` : undefined,
  })
  const err = (k) =>
    errors[k] && (
      <span className="field-error" id={`e-${k}`}>
        {errors[k]}
      </span>
    )

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <SectionHead kicker="Contact" title={contact.title} intro={contact.intro} />
          <Reveal as="ul" className="contact-links" delay={100}>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                <IconInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href={site.x} target="_blank" rel="noopener noreferrer">
                <IconX /> X / Twitter
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <IconMail /> {site.email}
              </a>
            </li>
          </Reveal>
        </div>

        <Reveal as="form" className="contact-form" onSubmit={onSubmit} noValidate delay={120}>
          <div className="field">
            <label htmlFor="f-name">Name *</label>
            <input type="text" autoComplete="name" placeholder="Your name" {...field('name')} />
            {err('name')}
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-phone">Phone / WhatsApp *</label>
              <input type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98xxxxxxx" {...field('phone')} />
              {err('phone')}
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input type="email" autoComplete="email" placeholder="you@email.com" {...field('email')} />
              {err('email')}
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-who">Who are you? *</label>
              <select className={form.who ? '' : 'is-empty'} {...field('who')}>
                <option value="" disabled>
                  Select one
                </option>
                {contact.whoOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              {err('who')}
            </div>
            <div className="field">
              <label htmlFor="f-budget">Budget range</label>
              <select className={form.budget ? '' : 'is-empty'} {...field('budget')}>
                <option value="" disabled>
                  Select a range
                </option>
                {contact.budgetOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-goal">Goal</label>
            <textarea rows="4" placeholder="Launch, trend, image building, finale push… batao kya chahiye." {...field('goal')} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            <IconWhatsApp /> Send on WhatsApp
          </button>
          <p className="form-note">Opens WhatsApp with your details filled in. Nothing is stored on this site.</p>
        </Reveal>
      </div>
    </section>
  )
}
