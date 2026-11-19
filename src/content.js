/* =====================================================================
   PXR INFINITY — SITE CONTENT
   ---------------------------------------------------------------------
   Edit everything on the website from this one file.
   - Text, numbers, client names, links: change the strings below.
   - Images: put files in /public/images/ and set e.g. image: '/images/case-1.jpg'.
     Leave image: null to show the styled placeholder.
   - Logos: set logo: '/images/logos/brand.svg' or leave null to show the name.
   ===================================================================== */

export const site = {
  name: 'PXR Infinity',
  // WhatsApp number in international format, digits only (91 = India)
  whatsappNumber: '919999999999',
  whatsappDefaultMessage: 'Hi PXR Infinity! I want to talk about a campaign.',
  email: 'hello@pxrinfinity.com',
  instagram: 'https://instagram.com/pxrinfinity',
  x: 'https://x.com/pxrinfinity',
  city: 'Mumbai, India',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'PR · Memes · Trends · Social',
  // The word inside [brackets] gets the accent highlight
  headline: 'PR, memes aur trends jo log [notice] karein.',
  subline:
    'Brands, celebrities aur creators ke liye full-service PR & social media agency.',
  ctaBrands: 'For Brands',
  ctaCreators: 'For Celebrities & Creators',
  chips: ['#Trending', 'Meme drops', 'Paps coverage', 'Fan armies', 'Finale push'],
}

// Numbers animate from 0 on scroll. Replace with your real figures.
export const stats = [
  { value: 500, suffix: '+', label: 'Trends run' },
  { value: 250, suffix: '+', label: 'Campaigns' },
  { value: 120, suffix: '+', label: 'Clients' },
  { value: 5, suffix: '', label: 'Years experience' },
]

export const services = {
  title: 'Kya karte hain hum?',
  intro: 'Pick your lane. Hum baaki sambhal lenge.',
  tabs: [
    {
      id: 'brands',
      label: 'Brands',
      tagline: 'Launch loud. Stay relevant. Handle the heat.',
      items: [
        { title: 'Product launch buzz', desc: 'Teasers, seeding and day-one noise so your launch doesn’t go unnoticed.' },
        { title: 'Meme marketing', desc: 'Relatable, on-brand memes pushed through high-reach meme pages.' },
        { title: 'X / Twitter trend campaigns', desc: 'Hashtag trends planned, timed and executed to hit the top of the list.' },
        { title: 'Influencer collaborations', desc: 'Right creators, right briefs, right price — from nano to mega.' },
        { title: 'Media & paps coverage', desc: 'News articles, entertainment portals and paparazzi page placements.' },
        { title: 'Crisis PR', desc: 'Fast response, narrative control and sentiment repair when things go sideways.' },
        { title: 'Brand image building', desc: 'Long-term positioning so people trust you before they try you.' },
      ],
    },
    {
      id: 'creators',
      label: 'Celebrities & Creators',
      tagline: 'Your image, your fandom, your moment.',
      items: [
        { title: 'Image building', desc: 'A clear public persona, crafted and protected across media and social.' },
        { title: 'Fandom management', desc: 'Organised fan clubs, fan pages and coordinated support that shows up.' },
        { title: 'Trends', desc: 'Birthday trends, release trends and appreciation trends on X and Instagram.' },
        { title: 'News articles', desc: 'Features, interviews and coverage on leading digital news portals.' },
        { title: 'Social growth', desc: 'Content strategy and distribution that grows real, engaged followers.' },
      ],
    },
    {
      id: 'reality',
      label: 'Reality TV',
      tagline: 'Ghar ke andar aap. Bahar hum.',
      items: [
        { title: 'Season-long PR', desc: 'Daily narrative tracking, highlight clips, memes and media from week 1 to finale.' },
        { title: 'Voting campaigns', desc: 'Mobilise fans and the public with clear, consistent voting appeals.' },
        { title: 'Finale push', desc: 'Maximum visibility in the final weeks — trends, media and fan energy at peak.' },
      ],
    },
  ],
}

// category must be one of: brands | celebrities | reality | events
export const workFilters = [
  { id: 'all', label: 'All' },
  { id: 'brands', label: 'Brands' },
  { id: 'celebrities', label: 'Celebrities' },
  { id: 'reality', label: 'Reality TV' },
  { id: 'events', label: 'Events' },
]

export const caseStudies = [
  {
    category: 'brands',
    client: 'Brand Name 01',
    image: null,
    problem: 'New D2C launch with zero awareness in a crowded category.',
    did: 'Meme page seeding, 2 X trends and 25 creator collabs in launch week.',
    results: [
      { value: '12M+', label: 'Impressions' },
      { value: '#1', label: 'X trend India' },
    ],
  },
  {
    category: 'celebrities',
    client: 'Celebrity Name 01',
    image: null,
    problem: 'Film release needed stronger online buzz with younger audiences.',
    did: 'Fandom activation, release-day trend and paps + portal coverage.',
    results: [
      { value: '40+', label: 'Articles' },
      { value: '3', label: 'Trends in a week' },
    ],
  },
  {
    category: 'reality',
    client: 'Contestant Name 01',
    image: null,
    problem: 'Contestant had low visibility outside the house in early weeks.',
    did: 'Season-long PR, daily meme edits, voting campaign and finale push.',
    results: [
      { value: 'Top 3', label: 'Finish' },
      { value: '8x', label: 'Follower growth' },
    ],
  },
  {
    category: 'events',
    client: 'Event Name 01',
    image: null,
    problem: 'Music event needed ticket sales in 3 weeks.',
    did: 'Creator invites, countdown memes and paps coverage on event night.',
    results: [
      { value: 'Sold out', label: 'Tickets' },
      { value: '5M+', label: 'Reach' },
    ],
  },
  {
    category: 'brands',
    client: 'Brand Name 02',
    image: null,
    problem: 'Negative social sentiment after a viral customer complaint.',
    did: 'Crisis PR response, founder statement, and positive narrative push.',
    results: [
      { value: '-70%', label: 'Negative mentions' },
      { value: '48 hrs', label: 'To turnaround' },
    ],
  },
  {
    category: 'celebrities',
    client: 'Creator Name 01',
    image: null,
    problem: 'Creator plateaued at 200K followers for 6 months.',
    did: 'Content repositioning, collab chain and meme page distribution.',
    results: [
      { value: '1M', label: 'Followers' },
      { value: '4 mo', label: 'Timeline' },
    ],
  },
]

export const process = {
  title: 'Process simple hai.',
  steps: [
    { title: 'Brief', desc: 'Aap batao goal, audience, timeline aur budget. We ask the right questions.' },
    { title: 'Strategy', desc: 'Platform mix, creators, meme angles, media list and a clear calendar.' },
    { title: 'Execution', desc: 'Trends, memes, articles and collabs go live — monitored in real time.' },
    { title: 'Report', desc: 'Reach, impressions, sentiment and links. Numbers, not excuses.' },
  ],
}

// Logo carousel. Add logo: '/images/logos/x.svg' to show an image instead of text.
export const clients = [
  { name: 'Client 01', logo: null },
  { name: 'Client 02', logo: null },
  { name: 'Client 03', logo: null },
  { name: 'Client 04', logo: null },
  { name: 'Client 05', logo: null },
  { name: 'Client 06', logo: null },
  { name: 'Client 07', logo: null },
  { name: 'Client 08', logo: null },
]

export const featuredOn = [
  { name: 'Publication 01', logo: null },
  { name: 'Publication 02', logo: null },
  { name: 'Publication 03', logo: null },
  { name: 'Paps Page 01', logo: null },
  { name: 'Publication 04', logo: null },
  { name: 'Paps Page 02', logo: null },
  { name: 'Publication 05', logo: null },
]

export const testimonials = [
  {
    quote:
      'Launch week mein hi brand har jagah dikhne laga. The meme strategy was spot on and the trend actually hit #1.',
    name: 'Client Name',
    role: 'Founder, Brand Name',
  },
  {
    quote:
      'They understood my fans better than I did. Fandom ko organise kiya, coverage aayi, and everything felt authentic.',
    name: 'Celebrity Name',
    role: 'Actor',
  },
  {
    quote:
      'Show ke andar main tha, bahar PXR team thi. Voting campaign and finale push made a real difference.',
    name: 'Contestant Name',
    role: 'Reality Show Finalist',
  },
]

export const about = {
  title: 'Meet Sid.',
  role: 'Founder, PXR Infinity',
  photo: null, // e.g. '/images/sid.jpg'
  paragraphs: [
    'Sid started PXR Infinity after years of watching great brands and talented people get ignored online — not because they weren’t good, but because nobody was telling their story the internet’s way.',
    'What began with a few meme pages and late-night trend plans is now a full-service PR and social media team working with brands, celebrities, creators and reality-show contestants across India.',
    'The idea is simple: internet culture ko samjho, data pe chalo, and never fake the hype. Results bolte hain.',
  ],
  signature: '— Sid',
}

export const contact = {
  title: 'Chalo, baat karte hain.',
  intro: 'Fill this in and it opens WhatsApp with your details ready to send. Reply within 24 hours.',
  whoOptions: ['Brand', 'Celebrity', 'Creator', 'Contestant', 'Other'],
  budgetOptions: [
    'Under ₹50K',
    '₹50K – ₹2L',
    '₹2L – ₹5L',
    '₹5L – ₹10L',
    '₹10L+',
    'Not sure yet',
  ],
}

export const footer = {
  tagline: 'PR, memes aur trends — for brands, celebrities & creators.',
}
