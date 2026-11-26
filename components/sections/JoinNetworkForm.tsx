'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { networkNiches } from '@/lib/data/network'
import { site, waLink } from '@/lib/site'

type Fields = 'name' | 'phone' | 'page' | 'platform' | 'niche' | 'followers' | 'language' | 'message'
const empty: Record<Fields, string> = { name: '', phone: '', page: '', platform: '', niche: '', followers: '', language: '', message: '' }

const platforms = ['Instagram', 'X (Twitter)', 'YouTube', 'Facebook', 'Other'] as const
const followerBands = ['Under 10K', '10K–50K', '50K–1L', '1L–5L', '5L–10L', '10L+'] as const
const kinds = ['Meme page', 'Media / news page', 'Creator', 'Paparazzi page', 'Fan club', 'X account'] as const

const input =
  'w-full rounded-2xl border border-line-strong bg-bg/60 px-4 py-3.5 text-base text-white placeholder:text-faint transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20 aria-[invalid=true]:border-[#ff6b8a]'

/** Join-the-network form for page admins and creators → opens WhatsApp pre-filled. Nothing is stored. */
export function JoinNetworkForm() {
  const [form, setForm] = useState(empty)
  const [kind, setKind] = useState<string>('Meme page')
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({})
  const [sent, setSent] = useState(false)

  const set = (k: Fields) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const er: Partial<Record<Fields, string>> = {}
    if (!form.name.trim()) er.name = 'Please enter your name.'
    if (form.phone.replace(/\D/g, '').length < 10) er.phone = 'Please enter a valid WhatsApp number.'
    if (!form.page.trim()) er.page = 'Please add your page link or handle.'
    if (!form.platform) er.platform = 'Please choose a platform.'
    setErrors(er)
    const first = Object.keys(er)[0]
    if (first) {
      document.getElementById(`j-${first}`)?.focus()
      return
    }
    const lines = [
      `Hi ${site.name}! I want to join your network.`,
      '',
      `*Name:* ${form.name.trim()}`,
      `*WhatsApp:* ${form.phone.trim()}`,
      `*I am a:* ${kind}`,
      `*Page:* ${form.page.trim()}`,
      `*Platform:* ${form.platform}`,
      form.niche && `*Niche:* ${form.niche}`,
      form.followers && `*Followers:* ${form.followers}`,
      form.language.trim() && `*Language(s):* ${form.language.trim()}`,
      form.message.trim() && `*Message:* ${form.message.trim()}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const field = (k: Fields) => ({
    id: `j-${k}`,
    name: k,
    value: form[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `j-e-${k}` : undefined,
  })
  const err = (k: Fields) =>
    errors[k] ? (
      <p id={`j-e-${k}`} className="mt-2 text-sm text-[#ff9ab0]">
        {errors[k]}
      </p>
    ) : null
  const label = (k: Fields, text: string) => (
    <label htmlFor={`j-${k}`} className="mb-2 block text-sm font-medium text-muted">
      {text}
    </label>
  )
  const select = (k: Fields, placeholder: string, opts: readonly string[]) => (
    <select className={`${input} ${form[k] ? '' : 'text-faint'}`} {...field(k)}>
      <option value="">{placeholder}</option>
      {opts.map((o) => (
        <option key={o} className="bg-surface text-white">
          {o}
        </option>
      ))}
    </select>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-5 p-6 sm:p-9" aria-label="Join the PXR Infinity network">
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-muted">I run a…</legend>
        <div className="flex flex-wrap gap-2">
          {kinds.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              aria-pressed={kind === k}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                kind === k ? 'border-white bg-white text-bg' : 'border-line-strong text-muted hover:border-accent hover:text-white'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label('name', 'Your name *')}
          <input type="text" autoComplete="name" placeholder="Your name" className={input} {...field('name')} />
          {err('name')}
        </div>
        <div>
          {label('phone', 'WhatsApp number *')}
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98XXX XXXXX" className={input} {...field('phone')} />
          {err('phone')}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label('page', 'Page link or handle *')}
          <input type="text" placeholder="instagram.com/yourpage or @yourpage" className={input} {...field('page')} />
          {err('page')}
        </div>
        <div>
          {label('platform', 'Platform *')}
          {select('platform', 'Select a platform', platforms)}
          {err('platform')}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          {label('niche', 'Niche')}
          {select('niche', 'Select', networkNiches)}
        </div>
        <div>
          {label('followers', 'Followers')}
          {select('followers', 'Select', followerBands)}
        </div>
        <div>
          {label('language', 'Language(s)')}
          <input type="text" placeholder="Hindi, Punjabi…" className={input} {...field('language')} />
        </div>
      </div>
      <div>
        {label('message', 'Anything else?')}
        <textarea rows={3} placeholder="Past brand collabs, audience, rates…" className={`${input} resize-y`} {...field('message')} />
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
