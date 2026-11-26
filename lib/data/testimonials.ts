/**
 * TESTIMONIALS — the Testimonials section stays hidden while this list is empty.
 * Only add real quotes, with the client's permission. Never write or paraphrase one.
 *
 * Example:
 *   { quote: '…exact words…', name: 'Name', role: 'Role / company', caseStudy: 'rajat-dalal-bigg-boss-18-pr-campaign' }
 *
 * `caseStudy` (optional) also shows the quote on that case study page.
 * `home: false` keeps a quote off the homepage.
 */
export type Testimonial = {
  quote: string
  name: string
  role: string
  caseStudy?: string
  home?: boolean
}

// TODO(Sid): add verified client quotes here
export const testimonials: Testimonial[] = []

export const homeTestimonials = () => testimonials.filter((t) => t.home !== false)
export const testimonialsFor = (slug: string) => testimonials.filter((t) => t.caseStudy === slug)
