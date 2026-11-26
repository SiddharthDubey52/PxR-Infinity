/**
 * TESTIMONIALS — the Testimonials section stays hidden while this list is empty.
 * Only add real quotes, with the person's permission. Never write or paraphrase one.
 *
 * Example:
 *   {
 *     quote: '…exact words…',
 *     name: 'Full name',
 *     role: 'Role',                       // e.g. 'Contestant', 'Marketing head'
 *     company: 'Company or show',         // e.g. 'Bigg Boss 18'
 *     group: 'Contestant',                // Celebrity | Contestant | Brand/OTT | Media partner
 *     photo: '/testimonials/name.jpg',    // optional, put the file in /public/testimonials/
 *     link: 'https://www.instagram.com/…',// optional LinkedIn / Instagram profile
 *     caseStudy: 'rajat-dalal-bigg-boss-18-pr-campaign', // optional: also shows on that case study
 *   }
 *
 * `home: false` keeps a quote off the homepage. Filter tabs appear once quotes from 2+ groups exist.
 */
export const testimonialGroups = ['Celebrity', 'Contestant', 'Brand/OTT', 'Media partner'] as const
export type TestimonialGroup = (typeof testimonialGroups)[number]

export type Testimonial = {
  quote: string
  name: string
  role: string
  company?: string
  group: TestimonialGroup
  photo?: string
  link?: string
  caseStudy?: string
  home?: boolean
}

// TODO(Sid): add verified client quotes here
export const testimonials: Testimonial[] = []

export const homeTestimonials = () => testimonials.filter((t) => t.home !== false)
export const testimonialsFor = (slug: string) => testimonials.filter((t) => t.caseStudy === slug)
