import type { Metadata } from 'next'
import Link from 'next/link'
import { INFINITY_PATH } from '@/lib/brand'
import { ButtonLink } from '@/components/ui/Buttons'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh mesh-a top-[10%] left-[15%] size-[500px] bg-accent/40" />
        <div className="mesh mesh-b right-[10%] bottom-[5%] size-[420px] bg-blue/30" />
      </div>
      <div className="container-x text-center">
        <svg viewBox="0 0 100 50" className="mx-auto w-56 sm:w-72" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="nf-g" x1="0" x2="1">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path d={INFINITY_PATH} stroke="rgb(255 255 255 / 0.08)" strokeWidth="5" />
          <path d={INFINITY_PATH} pathLength={1} className="loop-path" stroke="url(#nf-g)" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <p className="mt-8 font-display text-sm tracking-[0.4em] text-accent-light">ERROR 404</p>
        <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,6vw,4rem)] leading-[1.05] font-bold">
          Yeh page toh <span className="text-gradient">infinite loop</span> mein kho gaya.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
          The page you’re looking for doesn’t exist or has moved. Even our best trend can’t find it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Explore services
          </ButtonLink>
        </div>
        <p className="mt-10 text-sm text-faint">
          Looking for something specific? <Link href="/contact" className="text-accent-light underline-offset-4 hover:underline">Ask us</Link>.
        </p>
      </div>
    </section>
  )
}
