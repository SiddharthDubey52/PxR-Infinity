import { ArrowUpRight } from 'lucide-react'
import { directoryLinks } from '@/lib/site'

/** "Find us on" directory links (Clutch, DesignRush, …). Renders nothing until a URL is added in lib/site.ts. */
export function FindUsOn({ className = '' }: { className?: string }) {
  if (directoryLinks.length === 0) return null
  return (
    <div className={className}>
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-faint uppercase">Find us on</p>
      <ul className="flex flex-wrap gap-2">
        {directoryLinks.map((d) => (
          <li key={d.href}>
            <a
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm text-muted transition hover:border-accent hover:text-white"
            >
              {d.label}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
