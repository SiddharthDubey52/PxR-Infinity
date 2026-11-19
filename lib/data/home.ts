/**
 * Shared content for the home page and other sections.
 * Replace every [X] / [PLACEHOLDER] with real numbers before launch.
 */
import type { Faq } from './services'

// `value` animates when it's a number string (e.g. '250'); placeholders like '[X]' render as-is.
export const stats = [
  { value: '[X]', suffix: '+', label: 'Campaigns delivered' },
  { value: '[X]', suffix: '+', label: 'Meme pages in network' },
  { value: '[X]', suffix: 'M+', label: 'Monthly reach' },
  { value: '[X]', suffix: '+', label: 'Trends run on X' },
]

export const heroCopy = {
  eyebrow: 'PR · Memes · Trends · Influencers',
  // Each line is split word-by-word for the reveal; wrap a word in *asterisks* to accent it
  headline: ['Infinite reach.', '*Real* hype.'],
  sub: 'PXR Infinity is a PR, meme marketing and social media agency for brands, celebrities, creators, movies, music and reality-show contestants across India.',
}

export const marqueeItems = [
  '[CLIENT LOGO 1]',
  '[CLIENT LOGO 2]',
  '[CLIENT LOGO 3]',
  '[CLIENT LOGO 4]',
  '[CLIENT LOGO 5]',
  '[CLIENT LOGO 6]',
  '[MEDIA PLATFORM 1]',
  '[MEDIA PLATFORM 2]',
]

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
    title: 'Live in [X] hours',
    desc: 'Internet moments don’t wait. Our network lets us move from brief to live campaign in as little as [X] hours.',
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
    title: 'Brands to Bigg Boss',
    desc: 'Experience across D2C brands, films, music, celebrities and reality TV — we know what works in each world.',
  },
]

export const howItWorks = [
  { title: 'Brief', desc: 'Tell us the goal, audience, timeline and budget — on a call or WhatsApp.' },
  { title: 'Strategy', desc: 'You get a clear plan: channels, content angles, calendar and expected deliverables.' },
  { title: 'Page & influencer selection', desc: 'We shortlist meme pages, creators and media that fit your audience — you approve.' },
  { title: 'Launch', desc: 'Content goes live in coordinated waves, monitored in real time by our team.' },
  { title: 'Report', desc: 'Links, screenshots, reach and learnings in one report — plus what to do next.' },
]

export const testimonials = [
  { quote: '[TESTIMONIAL — what the client said about working with PXR Infinity and the result they saw.]', name: '[CLIENT NAME]', role: '[Founder, BRAND NAME]' },
  { quote: '[TESTIMONIAL — a celebrity or manager on image building, coverage or fan management.]', name: '[CLIENT NAME]', role: '[Actor / Manager]' },
  { quote: '[TESTIMONIAL — a contestant’s family or team on season PR and voting campaigns.]', name: '[CLIENT NAME]', role: '[Reality show contestant’s team]' },
  { quote: '[TESTIMONIAL — a producer or label on release buzz.]', name: '[CLIENT NAME]', role: '[Producer / Music label]' },
]

export const homeFaqs: Faq[] = [
  {
    q: 'How much does PR or meme marketing cost with PXR Infinity?',
    a: 'It depends on the scope — a single trend or meme wave costs much less than a full launch or season-long reality-show PR. See our pricing page for package ranges, or share your budget and we’ll suggest the best plan for it.',
  },
  {
    q: 'How quickly can a campaign go live?',
    a: 'Simple campaigns like a meme wave or paps coverage can go live within [X] hours of approval. Bigger launches and trend campaigns usually need [X]–[X] days of preparation.',
  },
  {
    q: 'What kind of reporting do I get?',
    a: 'Every campaign ends with a report: live links, screenshots, reach and engagement numbers, trend positions and coverage. Retainer clients get a monthly report.',
  },
  {
    q: 'Do you handle Bigg Boss and other reality-show PR?',
    a: 'Yes. We run season-long PR for contestants of Bigg Boss, Rise & Fall, Lock Upp and other shows — fan army building, daily content, X trends, voting campaigns and the finale push. We coordinate with family or managers while the contestant is inside.',
  },
  {
    q: 'Is everything kept confidential?',
    a: 'Yes. We sign NDAs on request and never disclose celebrity, contestant or brand clients publicly without written permission.',
  },
  {
    q: 'Do you use bots or fake engagement?',
    a: 'No. We work with real meme pages, creators and fan communities. Fake engagement gets filtered by platforms and damages reputations — it isn’t worth it.',
  },
  {
    q: 'Can you guarantee a #1 trend or viral post?',
    a: 'No honest agency can guarantee virality or a specific trend position. We share realistic targets in your plan and do everything in our control — timing, content quality and the right network — to hit them.',
  },
  {
    q: 'Do you work with clients outside Mumbai or Delhi?',
    a: 'Yes. We work with clients across India and with regional-language audiences, all managed remotely over calls and WhatsApp.',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '[₹ PLACEHOLDER]',
    period: '/ campaign',
    desc: 'For a single moment — a launch, release, birthday or announcement.',
    features: [
      'One focused campaign (memes, trend or coverage)',
      '[X] meme page posts',
      '[X] paps / portal placements',
      'Campaign plan and approvals',
      'End-of-campaign report',
    ],
    cta: 'Get a quote',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '[₹ PLACEHOLDER]',
    period: '/ month',
    desc: 'For brands and talent who want consistent visibility every month.',
    features: [
      'Monthly meme marketing waves',
      '[X] X / Twitter trends per month',
      '[X] influencer collaborations',
      '[X] media articles / paps posts',
      'Dedicated account manager',
      'Monthly performance report',
    ],
    cta: 'Get a quote',
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'Get a quote',
    period: '',
    desc: 'Full-scale launches, film releases and season-long reality-show PR.',
    features: [
      'Everything in Growth',
      'Integrated PR + memes + trends + influencers',
      'Reality-show season & finale campaigns',
      'Crisis response cover',
      'Priority war-room support',
      'Weekly reporting',
    ],
    cta: 'Talk to us',
    highlight: false,
  },
]

export const pricingFaqs: Faq[] = [
  { q: 'Why don’t you show fixed prices?', a: 'Costs depend on which meme pages, creators and media outlets suit your audience, and those vary a lot. We share a clear, itemised quote after the brief — no hidden charges.' },
  { q: 'Is there a minimum budget?', a: 'Our Starter campaigns begin at [₹ PLACEHOLDER]. Tell us your budget and we’ll recommend what’s realistic.' },
  { q: 'How do payments work?', a: 'Typically [X]% advance to book pages, creators and media, and the balance on delivery. Retainers are billed monthly in advance.' },
  { q: 'Can I start small and scale up?', a: 'Yes. Many clients start with a single campaign, see the results, then move to a monthly plan.' },
]

export const whoOptions = ['Brand', 'Celebrity', 'Creator', 'Contestant', 'Production house', 'Label', 'Other'] as const
export const budgetOptions = ['Under ₹50K', '₹50K – ₹1L', '₹1L – ₹3L', '₹3L – ₹5L', '₹5L – ₹10L', '₹10L+', 'Not sure yet'] as const
