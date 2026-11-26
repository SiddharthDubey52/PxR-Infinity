import Image from 'next/image'
import { publicFileExists } from '@/components/ui/ClientPhoto'

/**
 * Screenshot gallery for a case study. Renders nothing until images are added to the
 * case study's `gallery` list in lib/data/work.ts (files go in /public/work/<slug>/).
 * Every image needs descriptive alt text, e.g. "X trending list showing #Tag at #1 in India".
 */
export function CaseGallery({ images, client }: { images: { src: string; alt: string }[]; client: string }) {
  const shots = images.filter((i) => publicFileExists(i.src))
  if (shots.length === 0) return null
  return (
    <section className="border-t border-line py-24" aria-labelledby="gallery-title">
      <div className="container-x">
        <h2 id="gallery-title" className="text-2xl font-bold sm:text-3xl" data-reveal>
          Screenshots from the {client} campaign
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s) => (
            <li key={s.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface" data-reveal>
              <Image src={s.src} alt={s.alt} fill loading="lazy" sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
