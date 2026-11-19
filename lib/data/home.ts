/**
 * Shared content for the home page and other sections.
 */
import type { Faq } from './services'
import { waLink } from '../site'

// `value` animates from 0 when it's a number string (commas allowed).
export const stats = [
  { value: '25', suffix: '+', label: 'Campaigns delivered' },
  { value: '25,000', suffix: '+', label: 'Meme pages in network' },
  { value: '9', suffix: 'B+', label: 'Max monthly reach delivered' },
  { value: '500', suffix: '+', label: 'Trends run on X' },
]

export const heroCopy = {
  eyebrow: 'PR · Memes · Trends · Influencers',
  // Each line is split word-by-word for the reveal; wrap a word in *asterisks* to accent it
  headline: ['Infinite reach.', '*Real* hype.'],
  sub: 'PXR Infinity is a PR, meme marketing and social media agency for brands, celebrities, creators, movies, music and reality-show contestants across India.',
}

export const trustedHeading = 'Trusted by talent, shows & brands'

// Text names only (no logos)
export const clientNames = [
  'Shehzad Poonawalla',
  'Niharika Tiwari',
  'Mridul Tiwari',
  'Rajat Dalal',
  'Yogesh Rawat',
  'Munawar Faruqui',
  'The Alliance (Prime Video)',
]

export const featuredInHeading = 'Our campaigns featured in'
export const featuredIn = ['ANI', 'Times of India', 'NDTV', 'Hindustan Times', 'India Today', 'Indian Express', 'Aaj Tak']

export const platforms = ['Instagram', 'X / Twitter', 'YouTube', 'Meme pages', 'Paps pages', 'News portals', 'LinkedIn', 'Fan clubs']

export const whyPxr = [
  {
    icon: 'Sparkles',
    title: 'Organic virality',
    desc: 'Content built to be shared — memes, edits and trends people pass on because they want to, not because they were told to.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Real audiences',
    desc: 'Meme pages, creators and fan communities vetted for real, engaged followers. No bots, no fake numbers.',
  },
  {
    icon: 'Zap',
    title: 'Live in 48 hours',
    desc: 'Internet moments don’t wait. Our network takes you from brief to live campaign in as little as 48 hours.',
  },
  {
    icon: 'BarChart3',
    title: 'Full reporting',
    desc: 'Every post, link, screenshot and number in one clear report. You always know what you paid for.',
  },
  {
    icon: 'Layers',
    title: 'One team for everything',
    desc: 'PR, memes, trends, influencers and media under one roof — one brief, one plan, one point of contact.',
  },
  {
    icon: 'Trophy',
    title: 'Reality TV to real brands',
    desc: 'Winners, finalists and finale trends across Rise & Fall, Bigg Boss, Lock Upp and Prime Video’s The Alliance. We bring the same playbook to brands and creators.',
  },
]

export const howItWorks = [
  { title: 'Brief', desc: 'Tell us the goal, audience, timeline and budget — on a call or WhatsApp.' },
  { title: 'Strategy', desc: 'You get a clear plan: channels, content angles, calendar and expected deliverables.' },
  { title: 'Page & influencer selection', desc: 'We shortlist meme pages, creators and media that fit your audience — you approve.' },
  { title: 'Launch', desc: 'Content goes live in coordinated waves, monitored in real time by our team.' },
  { title: 'Report', desc: 'Links, screenshots, reach and learnings in one report — plus what to do next.' },
]

/**
 * Testimonials — the section is hidden while this list is empty.
 * Add real quotes like: { quote: '…', name: 'Name', role: 'Role' }
 */
export const testimonials: { quote: string; name: string; role: string }[] = []

export const homeFaqs: Faq[] = [
  {
    q: 'How much does PR or meme marketing cost with PXR Infinity?',
    a: 'Every campaign is custom, so we don’t list prices on the website. Message us on WhatsApp with your brief and we’ll share pricing directly, along with a free proposal within 24 hours.',
    cta: { label: 'Get pricing on WhatsApp', href: waLink('Hi PXR Infinity, I’d like to know your pricing.') },
  },
  {
    q: 'How quickly can a campaign go live?',
    a: 'In as little as 48 hours after you approve the plan.',
  },
  {
    q: 'What kind of reporting do I get?',
    a: 'One clear report with every post link, screenshot, reach number and trend rank, plus what we recommend next.',
  },
  {
    q: 'Do you handle Bigg Boss and other reality-show PR?',
    a: 'Yes, it’s our core. We’ve run season PR, voting pushes and finale trends for winners and finalists across Rise & Fall, Bigg Boss, Lock Upp and The Alliance.',
  },
  {
    q: 'Is everything kept confidential?',
    a: 'Yes. Your brief, budget and strategy stay private, and we only show a client’s work publicly with their permission.',
  },
  {
    q: 'Do you use bots or fake engagement?',
    a: 'No. We work with real meme pages, creators and fan communities, and every number in your report is real.',
  },
  {
    q: 'Can you guarantee a #1 trend or viral post?',
    a: 'No honest agency can guarantee virality. What we guarantee is the plan, the timing and the network, and we’ve run 500+ trends on X.',
  },
  {
    q: 'Do you work with clients outside Mumbai or Delhi?',
    a: 'Haan, bilkul. We work with clients across India, and most of our work happens online.',
  },
]

// Pricing is shared only on WhatsApp — no prices are shown on the site.
export const pricingPlans = [
  {
    name: 'Starter',
    desc: 'For a single moment — a launch, release, birthday or announcement.',
    features: [
      'One focused campaign: memes, a trend or media coverage',
      'Meme page posts from our network',
      'Paps page and news portal placements',
      'Campaign plan and approvals',
      'End-of-campaign report',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    desc: 'For brands and talent who want consistent visibility every month.',
    features: [
      'Monthly meme marketing waves',
      'Regular X / Twitter trends',
      'Influencer collaborations',
      'Media articles and paps posts',
      'Dedicated account manager',
      'Monthly performance report',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    desc: 'Full-scale launches, OTT and film releases, and season-long reality-show PR.',
    features: [
      'Everything in Growth',
      'Integrated PR + memes + trends + influencers',
      'Reality-show season, voting and finale campaigns',
      'Crisis response cover',
      'Priority war-room support',
      'Weekly reporting',
    ],
    highlight: false,
  },
]

export const pricingFaqs: Faq[] = [
  {
    q: 'Why don’t you show prices on the website?',
    a: 'Costs depend on which meme pages, creators and media outlets suit your audience, and those vary a lot. Message us on WhatsApp with your brief and we’ll share pricing directly, with a free proposal within 24 hours.',
    cta: { label: 'Get pricing on WhatsApp', href: waLink('Hi PXR Infinity, I’d like to know your pricing.') },
  },
  { q: 'Is there a minimum budget?', a: 'Tell us your goal on WhatsApp and we’ll recommend what’s realistic — from a single campaign to a full season.' },
  { q: 'How do payments work?', a: 'Payment terms are shared with your proposal. Retainers are billed monthly.' },
  { q: 'Can I start small and scale up?', a: 'Yes. Many clients start with a single campaign, see the results, then move to a monthly plan.' },
]

export const whoOptions = ['Brand', 'Celebrity', 'Creator', 'Contestant', 'Production house', 'Label', 'Other'] as const
