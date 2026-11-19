'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { whoOptions } from '@/lib/data/home'
import { site, waLink } from '@/lib/site'

type Fields = 'name' | 'phone' | 'email' | 'who' | 'service' | 'message'
const empty: Record<Fields, string> = { name: '', phone: '', email: '', who: '', service: '', message: '' }

const input =
  'w-full rounded-2xl border border-line-strong bg-bg/60 px-4 py-3.5 text-base text-white placeholder:text-faint transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20 aria-[invalid=true]:border-[#ff6b8a]'

/**
 * Contact form → opens WhatsApp with all details pre-filled. No backend needed.
 * `services` is passed in from the server so the list stays in one data file.
 */
export function ContactForm({ services, defaultService = '' }: { services: string[]; defaultService?: string }) {
  const [form, setForm] = useState({ ...empty, service: defaultService })
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({})
  const [sent, setSent] = useState(false)

  const set = (k: Fields) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const er: Partial<Record<Fields, string>> = {}
    if (!form.name.trim()) er.name = 'Naam toh batao — please enter your name.'
    if (form.phone.replace(/\D/g, '').length < 10) er.phone = 'Please enter a valid phone / WhatsApp number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'That email doesn’t look right.'
    if (!form.who) er.who = 'Please choose one.'
    return er
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    const first = Object.keys(er)[0]
    if (first) {
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const details = [
      `*Name:* ${form.name.trim()}`,
      `*Phone/WhatsApp:* ${form.phone.trim()}`,
      form.email.trim() && `*Email:* ${form.email.trim()}`,
      `*I am a:* ${form.who}`,
      form.service && `*Service:* ${form.service}`,
      form.message.trim() && `*Message:* ${form.message.trim()}`,
    ].filter(Boolean)
    const text = [`Hi ${site.name}! I'd like a proposal.`, '', ...details].join('\n')
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const field = (k: Fields) => ({
    id: `f-${k}`,
    name: k,
    value: form[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `e-${k}` : undefined,
  })
  const err = (k: Fields) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-2 text-sm text-[#ff9ab0]">
        {errors[k]}
      </p>
    ) : null
  const label = (k: Fields, text: string) => (
    <label htmlFor={`f-${k}`} className="mb-2 block text-sm font-medium text-muted">
      {text}
    </label>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-5 p-6 sm:p-9" aria-label="Get a free proposal">
      <div>
        {label('name', 'Name *')}
        <input type="text" autoComplete="name" placeholder="Your name" className={input} {...field('name')} />
        {err('name')}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label('phone', 'Phone / WhatsApp *')}
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98XXX XXXXX" className={input} {...field('phone')} />
          {err('phone')}
        </div>
        <div>
          {label('email', 'Email')}
          <input type="email" autoComplete="email" placeholder="Your email (optional)" className={input} {...field('email')} />
          {err('email')}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label('who', 'Who are you? *')}
          <select className={`${input} ${form.who ? '' : 'text-faint'}`} {...field('who')}>
            <option value="" disabled>
              Select one
            </option>
            {whoOptions.map((o) => (
              <option key={o} className="bg-surface text-white">
                {o}
              </option>
            ))}
          </select>
          {err('who')}
        </div>
        <div>
          {label('service', 'Service')}
          <select className={`${input} ${form.service ? '' : 'text-faint'}`} {...field('service')}>
            <option value="">Not sure yet</option>
            {services.map((o) => (
              <option key={o} className="bg-surface text-white">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {label('message', 'Message')}
        <textarea
          rows={4}
          placeholder="Launch, trend, release, season PR… batao kya chahiye."
          className={`${input} resize-y`}
          {...field('message')}
        />
      </div>
      <button
        type="submit"
        className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-accent-strong px-7 font-semibold text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.8)] transition hover:bg-[#6d28d9]"
      >
        Send on WhatsApp
        <Send aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-center text-sm text-faint" role="status">
        {sent
          ? 'WhatsApp opened in a new tab — just hit send. Didn’t open? Message us at ' + site.whatsappDisplay
          : 'Opens WhatsApp with your details filled in. Nothing is stored on this website.'}
      </p>
    </form>
  )
}
