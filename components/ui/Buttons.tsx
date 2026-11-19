import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Magnetic } from '@/components/motion/Magnetic'
import { WhatsAppIcon } from './SocialIcons'
import { waLink } from '@/lib/site'

type Variant = 'primary' | 'ghost' | 'whatsapp'

const base =
  'group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300'
const variants: Record<Variant, string> = {
  primary: 'bg-accent-strong text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.8)] hover:bg-[#6d28d9]',
  ghost: 'border border-line-strong bg-white/[0.03] text-white hover:border-accent hover:bg-accent/10',
  whatsapp: 'border border-wa/40 bg-wa/10 text-white hover:bg-wa/20',
}

type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
  icon?: boolean
}

/** Magnetic button-link. Internal links use next/link for instant transitions. */
export function ButtonLink({ href, children, variant = 'primary', className = '', external, icon = true }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
      {icon && variant !== 'whatsapp' && (
        <ArrowUpRight
          aria-hidden="true"
          className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  )
  return (
    <Magnetic>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      )}
    </Magnetic>
  )
}

export function WhatsAppButton({ label = 'WhatsApp Us', message, className = '' }: { label?: string; message?: string; className?: string }) {
  return (
    <ButtonLink href={waLink(message)} external variant="whatsapp" className={className}>
      <WhatsAppIcon className="size-5 text-wa" />
      {label}
    </ButtonLink>
  )
}
