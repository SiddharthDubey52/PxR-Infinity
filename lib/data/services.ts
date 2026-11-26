/**
 * SERVICES — every /services/[slug] page is generated from this list.
 * To add a service: copy one object, change the slug + copy. Done.
 * `icon` must be a key from components/ui/Icon.tsx.
 * `mainKeyword` is for planning only (one main keyword per page — never reuse one).
 * `updatedAt` feeds the sitemap's lastModified — change it when the content really changes.
 */

import { trendTable } from './trends'
import { campaignsStartFrom, promotedTitles, regionalLanguages } from './promoted'

export type Faq = { q: string; a: string; cta?: { label: string; href: string } }

/**
 * Extra long-form block on a service page (hub pages such as Bigg Boss PR and X Trends).
 * Any mix of paragraphs, cards (optionally linked) and a table. A table with no rows is hidden.
 */
export type ServiceSection = {
  id: string
  eyebrow?: string
  title: string
  paragraphs?: string[]
  items?: { title: string; desc: string; href?: string; label?: string }[]
  table?: { caption: string; head: string[]; rows: string[][] }
  note?: string
}

export type Service = {
  slug: string
  name: string
  icon: string
  group: 'Brands' | 'Entertainment' | 'Talent'
  short: string
  h1: string
  /** <title> before the "| PXR Infinity" suffix — keep it under ~45 characters */
  metaTitle: string
  metaDescription: string
  mainKeyword: string
  serviceType: string
  intro: string[]
  /** Optional in-text links shown under the intro */
  introLinks?: { label: string; href: string }[]
  deliverables: { title: string; desc: string }[]
  process: { title: string; desc: string }[]
  idealFor: string[]
  faqs: Faq[]
  related: string[]
  /** 2–3 blog slugs for the "Further reading" block */
  relatedPosts: string[]
  /** Long-form sections shown after "Our process" */
  sections?: ServiceSection[]
  updatedAt: string
}

export const services: Service[] = [
  {
    slug: 'pr-media-coverage',
    name: 'PR & Media Coverage',
    icon: 'Newspaper',
    group: 'Brands',
    short: 'News articles, entertainment portals, press releases and paps pages that put your name in front of the right people.',
    h1: 'PR agency in India for media coverage, digital PR and press releases',
    metaTitle: 'PR Agency in India for Media Coverage',
    metaDescription:
      'PR agency in India for brands, celebrities and creators: digital PR, media coverage services, press release distribution and paps page coverage.',
    mainKeyword: 'PR agency in India',
    serviceType: 'Public relations',
    intro: [
      'Coverage is still the fastest way to build trust. As a PR agency in India working across news, entertainment and social media, we make sure that when someone Googles you, what they find is strong, recent and on-message — because that decides whether they buy, book or follow.',
      'PXR Infinity is a digital PR agency in India. We plan and place stories across digital news portals, entertainment websites and high-reach paparazzi pages, and handle press release distribution in India — all timed with your launch, release, announcement or milestone, so every article does a job.',
    ],
    deliverables: [
      { title: 'Story angles & press releases', desc: 'We find the hook journalists and page admins actually want, then write the press note or release.' },
      { title: 'Press release distribution', desc: 'Your release sent to relevant national, regional and entertainment news desks.' },
      { title: 'Digital news placements', desc: 'Articles on national and regional news and business portals, matched to your audience.' },
      { title: 'Entertainment portal features', desc: 'Interviews, listicles and features for film, music, OTT and lifestyle audiences.' },
      { title: 'Paps & entertainment page coverage', desc: 'Photo and video posts on paparazzi and entertainment Instagram pages for instant visibility.' },
      { title: 'Coverage report', desc: 'Every live link, reach estimate and screenshot in one clean report.' },
    ],
    process: [
      { title: 'Story audit', desc: 'What is newsworthy about you right now, and what does search currently say?' },
      { title: 'Media plan', desc: 'A list of target outlets and pages with angles, formats and timing.' },
      { title: 'Placement', desc: 'Content is written, approved by you and published on schedule.' },
      { title: 'Amplify & report', desc: 'Articles are shared on social, then logged in your coverage report.' },
    ],
    idealFor: ['Startups and D2C brands', 'Celebrities and public figures', 'Film, OTT and music releases', 'Founders building authority'],
    faqs: [
      { q: 'What does a PR agency in India actually do?', a: 'A PR agency finds the story in your brand or work, gets it published by news portals, entertainment sites and social media pages, and manages how you show up in search. We combine classic media coverage with digital PR, so your coverage also travels on Instagram and X.' },
      { q: 'Which publications can you get me featured in?', a: 'It depends on your story, timing and budget. After the brief we share a media list with options across news, business and entertainment portals and paps pages, so you know where you will appear before you commit.' },
      { q: 'Do you handle press release distribution in India?', a: 'Yes. We write the release, send it to the right national, regional and entertainment desks, and follow up. You get every live link in your coverage report.' },
      { q: 'Is the coverage paid or earned?', a: 'We do both. Some placements are earned through pitching, others are sponsored features. We are always transparent about which is which in your plan.' },
    ],
    related: ['celebrity-pr', 'crisis-pr-reputation-management', 'personal-branding'],
    relatedPosts: ['how-to-get-media-coverage-in-india', 'what-is-digital-pr', 'pr-agency-charges-in-india'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'meme-marketing',
    name: 'Meme Marketing',
    icon: 'Laugh',
    group: 'Brands',
    short: 'Relatable, on-brand memes posted across India’s biggest meme pages.',
    h1: 'Meme marketing agency in India — 25,000+ meme pages, memes that sell',
    metaTitle: 'Meme Marketing Agency in India – 25K+ Pages',
    metaDescription:
      'Meme marketing agency in India with 25,000+ meme pages. Instagram meme page promotion and regional meme marketing for brands, films and startups.',
    mainKeyword: 'meme marketing agency in India',
    serviceType: 'Meme marketing',
    intro: [
      'Indians spend hours a day on meme pages. That is where culture moves first — and where ads are skipped fastest. As a meme marketing agency in India, we put your brand inside the content people already love, in a language they already speak.',
      'Our meme marketing company handles everything: we write the memes, pick the right pages for your audience — Hindi, English and regional — and run Instagram meme page promotion with scheduled posting across pages, so your campaign reaches audiences together. Funny when it should be, sharp when it needs to be, and always on-brand.',
    ],
    introLinks: [{ label: 'How much does meme marketing cost in India?', href: '/blog/how-much-does-meme-marketing-cost-in-india' }],
    deliverables: [
      { title: 'Meme strategy', desc: 'Formats, tone, topics and the do-not-cross lines for your brand.' },
      { title: 'Meme creation', desc: 'Original memes, reels and carousels written by people who live on the internet.' },
      { title: 'Meme page network', desc: 'Meme page promotion across our network of 25,000+ meme pages, filtered by niche, region and audience quality.' },
      { title: 'Moment marketing', desc: 'Fast reactions to trends, matches, releases and viral moments.' },
      { title: 'Wave planning', desc: 'Scheduled posting across pages, so your campaign reaches audiences together.' },
      { title: 'Performance reporting', desc: 'Reach, views, saves, shares and comment sentiment, page by page.' },
    ],
    process: [
      { title: 'Brief', desc: 'Your product, audience, goal and brand tone.' },
      { title: 'Concepts', desc: 'Meme angles and sample creatives for your approval.' },
      { title: 'Page selection', desc: 'Shortlist of meme pages by audience fit, not just follower count.' },
      { title: 'Launch & report', desc: 'Posts go live on schedule, we monitor comments and send the report.' },
    ],
    idealFor: ['D2C and consumer brands', 'Apps and startups', 'Film, OTT and music releases', 'Events and launches'],
    faqs: [
      { q: 'How much does meme marketing cost in India?', a: 'It depends on how many pages you use, their size and niche, whether we create the memes, and how long the campaign runs. Message us on WhatsApp with your goal and we’ll share a quote, or read our meme marketing cost guide first.' },
      { q: 'Will memes hurt a premium brand image?', a: 'Not if done right. We agree on tone and boundaries first, and premium brands often use clever, self-aware humour rather than slapstick. You approve every creative before it goes live.' },
      { q: 'How do you choose meme pages?', a: 'By audience fit, engagement quality and past performance — not just follower count. We filter out pages with fake or inactive audiences.' },
      { q: 'Do you do regional meme marketing?', a: 'Yes. Alongside Hindi and English pages, we run regional meme marketing on pages for specific languages and states, including Punjabi pages.' },
    ],
    related: ['x-twitter-trends', 'influencer-marketing', 'brand-launch-campaigns'],
    relatedPosts: ['how-much-does-meme-marketing-cost-in-india', 'what-is-meme-marketing-in-india', 'meme-marketing-examples-india'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'x-twitter-trends',
    name: 'X / Twitter Trends',
    icon: 'Hash',
    group: 'Brands',
    short: 'Hashtag trend campaigns planned, timed and run to reach the trending list.',
    h1: 'Twitter trend agency in India — X trend campaigns that climb the list',
    metaTitle: 'Twitter Trend Agency India | 650+ X Trends',
    metaDescription:
      'Twitter trend agency India with 650+ X trends run. Hashtag trend campaigns, X trend campaign planning and Twitter Spaces promotion for launches and fans.',
    mainKeyword: 'Twitter trend agency India',
    serviceType: 'Social media trend campaigns',
    intro: [
      'A trending hashtag is social proof at scale. It tells fans, media and the algorithm that something is happening right now — and journalists notice what trends. As a Twitter trend agency in India, we’ve run 650+ trends on X.',
      'For every X trend campaign we plan the hashtag, write the content bank, brief fan clubs and communities, and run the hashtag trend campaign in the right time window so it climbs fast and holds. We also host and promote Twitter Spaces around the moment. Birthdays, releases, launches, finales — we have done them all.',
    ],
    deliverables: [
      { title: 'Hashtag & timing plan', desc: 'A hashtag that is unique, easy to type and launched in the best time window.' },
      { title: 'Content bank', desc: 'Tweets, images, GIFs and edits so participants post varied, quality content.' },
      { title: 'Fan club briefing', desc: 'Fan clubs and communities briefed with the hashtag, timing and content bank.' },
      { title: 'Twitter Spaces promotion', desc: 'Live X Spaces planned, promoted and hosted around your moment.' },
      { title: 'Live trend monitoring', desc: 'Real-time tracking, with our team adjusting the plan during the push.' },
      { title: 'Trend report', desc: 'Screenshots, peak position, duration and post volume.' },
    ],
    process: [
      { title: 'Brief', desc: 'Occasion, audience, preferred date and message.' },
      { title: 'Prep', desc: 'Hashtag, content bank and fan club briefing.' },
      { title: 'Go live', desc: 'The push starts at the chosen time and is monitored live.' },
      { title: 'Report', desc: 'Peak rank, duration and screenshots delivered.' },
    ],
    idealFor: ['Celebrity birthdays & announcements', 'Movie, trailer and song releases', 'Reality-show contestants', 'Brand launches'],
    faqs: [
      { q: 'How does an X trend campaign work?', a: 'We pick a hashtag, prepare a content bank, brief fan clubs and active communities, and start the hashtag trend campaign at a set time. Our team watches the trend live and reports the peak rank, duration and post volume.' },
      { q: 'Can you promise a #1 trend?', a: 'No honest agency can promise a specific position, because trends depend on what else is happening that day. We share realistic targets in the plan based on your fanbase and budget, and plan the timing to give you the best possible shot.' },
      { q: 'Are the accounts real?', a: 'Yes. We work with real fan communities and active accounts. Fake activity gets filtered by X and can damage your reputation.' },
      { q: 'How much notice do you need?', a: 'A few days of preparation is ideal. For urgent moments we can turn a trend around in as little as 48 hours.' },
      { q: 'What makes a good hashtag for a trend?', a: 'Short, easy to spell, unique to your moment and not already in use. All-caps phrases work well for fan campaigns; a clean branded hashtag works better for launches. We check that nobody else is using it that day.' },
      { q: 'What time of day is best for an X trend?', a: 'It depends on your audience and on what else is happening that day. Evening slots usually suit fan campaigns and entertainment, while launches often go live with the announcement. We pick the window after checking the day’s calendar: matches, releases, big news.' },
      { q: 'Can you run a trend in a regional language?', a: 'Yes. Regional hashtags and content in the audience’s language often do better with regional fan bases. We brief communities that post in that language.' },
      { q: 'How long does a trend stay on the list?', a: 'It varies with how many people keep posting and what else is trending. A planned content bank and staggered posting help a trend hold longer. We report the real hours it stayed on the list.' },
      { q: 'Do you also host Twitter Spaces?', a: 'Yes. We plan, promote and host X Spaces around a launch, an episode or a finale. Our Space for Rajat Dalal in Bigg Boss 18 ran 2 hours 18 minutes with 77K people tuned in.' },
      { q: 'What do I get in the trend report?', a: 'Screenshots of the trending list, the peak position in India, how long the trend stayed on the list, the post count shown by X and notable posts from the push.' },
    ],
    related: ['meme-marketing', 'reality-show-pr', 'celebrity-pr'],
    relatedPosts: ['how-x-trends-are-created-for-celebrities', 'twitter-trend-price-india', 'how-to-plan-an-x-trend-campaign'],
    sections: [
      {
        id: 'trends-weve-run',
        eyebrow: 'Proof',
        title: 'Trends we’ve run',
        paragraphs: [
          'A few of the X trends from our campaigns. Peak positions are for India, as shown on the trending list at the time. We add a trend here only when we have the screenshots.',
        ],
        table: trendTable,
        note: '“—” means we haven’t published that figure yet.',
      },
      {
        id: 'how-it-works',
        eyebrow: 'How a trend comes together',
        title: 'What happens in an X trend campaign',
        paragraphs: [
          'A trend is not one post. It is hundreds or thousands of people posting about the same thing, in a short window, in a way that X counts as fresh conversation. That takes planning. First we decide what the trend is for: a release, a birthday, a finale vote, a launch. That decides the hashtag, the tone and the time.',
          'Next comes the content bank: lines to post, images, short clips, GIFs and fan edits, so that every post is a little different. Fan clubs and communities get a clear brief with the hashtag, the start time and the content. During the push our team watches the list live, keeps the content flowing and adjusts if another big topic takes over. After the push you get the report.',
          'For bigger moments we pair the trend with Twitter Spaces promotion, meme pages on Instagram and media coverage, so the conversation reaches people who never open X.',
        ],
      },
      {
        id: 'cost',
        eyebrow: 'Budget',
        title: 'What affects the cost of an X trend',
        paragraphs: [
          'We don’t publish a fixed price, because two trends can need very different amounts of work. These are the things that change the budget. Share your moment on WhatsApp and we’ll quote against your plan.',
        ],
        items: [
          { title: 'Duration', desc: 'A short push for one moment needs less than a trend that has to hold through a whole day, or a series of trends over a season.' },
          { title: 'National vs regional', desc: 'Reaching the all-India list takes more participation than a regional trend aimed at one language or state.' },
          { title: 'Language', desc: 'Hindi, English and regional-language trends need their own content banks and the right communities to post them.' },
          { title: 'Lead time', desc: 'A week of preparation lets us build content and brief communities properly. A 48-hour turnaround needs more hands at once.' },
          { title: 'Content volume', desc: 'Custom edits, images and clips for the content bank add production work, especially for film and brand campaigns.' },
          { title: 'Add-ons', desc: 'Twitter Spaces, meme pages on Instagram, creators and media coverage around the trend.' },
        ],
        note: 'Read more: Twitter Trend Price in India: What You Pay For.',
      },
      {
        id: 'x-trend-guides',
        eyebrow: 'Guides',
        title: 'X trend guides: learn before you plan',
        items: [
          { label: 'Basics', title: 'How X (Twitter) Trends Work in India', desc: 'What the trending list counts and why some hashtags climb faster.', href: '/blog/how-x-trends-are-created-for-celebrities' },
          { label: 'Planning', title: 'How to Plan an X Trend Campaign', desc: 'A step-by-step plan from hashtag to report.', href: '/blog/how-to-plan-an-x-trend-campaign' },
          { label: 'Films & OTT', title: 'X Trends for Film and OTT Releases', desc: 'Trends for announcements, trailers, release day and premieres.', href: '/blog/x-trends-for-film-and-ott-releases' },
          { label: 'Reality TV', title: 'X Trends for Reality Show Contestants', desc: 'A week-by-week trend calendar for a season.', href: '/blog/x-trends-for-reality-show-contestants' },
          { label: 'Cost', title: 'What Affects the Cost of an X Trend', desc: 'Duration, reach, language and lead time explained.', href: '/blog/twitter-trend-price-india' },
        ],
      },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'influencer-marketing',
    name: 'Influencer Marketing',
    icon: 'Users',
    group: 'Brands',
    short: 'The right creators, the right briefs, the right price — nano to mega.',
    h1: 'Influencer marketing agency in India — creators picked on data, not vibes',
    metaTitle: 'Influencer Marketing Agency India',
    metaDescription:
      'Influencer marketing agency India for brands, films and music: micro influencer marketing, influencer marketing for movies and end-to-end creator campaigns.',
    mainKeyword: 'influencer marketing agency India',
    serviceType: 'Influencer marketing',
    intro: [
      'Influencer marketing works when the creator’s audience actually matches your customer. It fails when brands pick by follower count alone. As an influencer marketing agency in India, we pick by audience, engagement quality and content style — then manage everything end to end.',
      'From micro influencer marketing in India to celebrity creators, and from D2C launches to influencer marketing for movies and music, you get one team and one report instead of fifty WhatsApp chats: shortlisting, negotiation, briefs, approvals, posting and reporting.',
    ],
    deliverables: [
      { title: 'Creator discovery', desc: 'A shortlist with audience, engagement and past brand work for each creator.' },
      { title: 'Negotiation & contracts', desc: 'Fair rates, clear deliverables and usage rights.' },
      { title: 'Creative briefs', desc: 'Briefs that keep your message clear but let creators sound like themselves.' },
      { title: 'Approvals & scheduling', desc: 'Draft reviews and a posting calendar that builds momentum.' },
      { title: 'Barter & paid campaigns', desc: 'Product seeding, paid collabs or a mix that fits your budget.' },
      { title: 'Campaign reporting', desc: 'Views, reach, engagement and link clicks, creator by creator.' },
    ],
    process: [
      { title: 'Brief', desc: 'Product, audience, goal, budget and timeline.' },
      { title: 'Shortlist', desc: 'Creator options with costs for you to approve.' },
      { title: 'Execution', desc: 'Briefing, drafts, approvals and posting.' },
      { title: 'Report', desc: 'Results and learnings for the next campaign.' },
    ],
    idealFor: ['D2C and e-commerce brands', 'Apps and fintech', 'Beauty, fashion and food', 'Film and music promotions'],
    faqs: [
      { q: 'Nano, micro or macro influencers — which is better?', a: 'It depends on the goal. Nano and micro creators usually give better engagement and trust for the cost; macro and celebrity creators give reach and instant credibility. Most of our plans mix both.' },
      { q: 'Do you run influencer marketing for movies?', a: 'Yes. For films and web series we line up creators for reactions, reviews, reel trends and cast collaborations, timed to the trailer, songs and release week.' },
      { q: 'Do you check for fake followers?', a: 'Yes. We review engagement patterns, audience quality and past performance before a creator is shortlisted.' },
      { q: 'Can you run barter (product-only) campaigns?', a: 'Yes, especially with nano and micro creators. We will tell you honestly what to expect from barter versus paid.' },
    ],
    related: ['meme-marketing', 'brand-launch-campaigns', 'social-media-management'],
    relatedPosts: ['influencer-marketing-rates-india', 'influencer-vs-meme-marketing-for-brands'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'celebrity-pr',
    name: 'Celebrity PR',
    icon: 'Star',
    group: 'Talent',
    short: 'Image building, fandom management, media and trends for actors and public figures.',
    h1: 'Celebrity PR agency in India — PR for actors, TV stars and public figures',
    metaTitle: 'Celebrity PR Agency India for Actors & Stars',
    metaDescription:
      'Celebrity PR agency India: Bollywood PR, PR for actors and TV actors, paparazzi coverage, fan club management and X trends. Fully confidential.',
    mainKeyword: 'celebrity PR agency India',
    serviceType: 'Celebrity public relations',
    intro: [
      'For a public figure, perception is the career. The right narrative brings better roles, better brand deals and a fanbase that defends you. As a celebrity PR agency in India, we build that narrative on purpose instead of leaving it to chance.',
      'We work as a Bollywood PR agency and offer PR for actors in India across film, OTT and TV — including PR for TV actors moving into film. That means consistent paparazzi coverage and media presence, organised fandoms, smart trends and a fast response when something goes wrong. Fully confidential, always.',
    ],
    deliverables: [
      { title: 'Image strategy', desc: 'A clear public persona and what you are known for — on purpose.' },
      { title: 'Paparazzi coverage', desc: 'Regular, positive visibility on paps pages and entertainment portals.' },
      { title: 'Fandom management', desc: 'Organised fan clubs and pages that show up for every moment.' },
      { title: 'Trends & moments', desc: 'Birthday, release and appreciation trends on X and Instagram.' },
      { title: 'Social profile growth', desc: 'Content guidance and distribution to grow real followers.' },
      { title: 'Crisis cover', desc: 'Rapid response if a controversy or rumour breaks.' },
    ],
    process: [
      { title: 'Private brief', desc: 'Goals, current perception and upcoming projects — under NDA if needed.' },
      { title: 'Narrative plan', desc: 'Monthly PR calendar across media, fans and social.' },
      { title: 'Always-on execution', desc: 'Coverage, trends and fan activity every month.' },
      { title: 'Monthly report', desc: 'Coverage, sentiment and growth in one document.' },
    ],
    idealFor: ['Film and Bollywood actors', 'TV and OTT actors', 'Singers and musicians', 'Influencers moving into mainstream'],
    faqs: [
      { q: 'Do you offer PR for TV actors as well as film actors?', a: 'Yes. We work with TV, OTT and film actors. TV actors often need help building a fan base and media presence that carries over to film and OTT roles.' },
      { q: 'Do you sign NDAs?', a: 'Yes. Confidentiality is standard for every celebrity and talent client, and we never name clients publicly without permission.' },
      { q: 'Is celebrity PR a monthly retainer?', a: 'Usually, yes — image is built consistently, not in one week. We also run one-off campaigns for releases and big moments.' },
      { q: 'Can you arrange paparazzi coverage?', a: 'Yes. We work with paparazzi photographers and entertainment pages to plan spottings and event coverage around your schedule and releases.' },
    ],
    related: ['personal-branding', 'x-twitter-trends', 'crisis-pr-reputation-management'],
    relatedPosts: ['celebrity-pr-cost-india', 'how-x-trends-are-created-for-celebrities', 'crisis-pr-guide-for-indian-celebrities'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'bigg-boss-pr',
    name: 'Bigg Boss PR',
    icon: 'Tv',
    group: 'Talent',
    short: 'Contestant PR, fan armies, voting appeals and finale trends for Bigg Boss contestants.',
    h1: 'Bigg Boss PR agency — contestant PR from entry day to finale',
    metaTitle: 'Bigg Boss PR Agency for Contestants',
    metaDescription:
      'Bigg Boss PR agency for contestants: a Bigg Boss PR team for fan armies, voting campaigns, X trends and the finale push. Bigg Boss 17 to 20.',
    mainKeyword: 'Bigg Boss PR agency',
    serviceType: 'Bigg Boss contestant public relations',
    intro: [
      'Ghar ke andar aap, bahar hum. Inside the Bigg Boss house, a contestant can’t explain context, reply to trolls or ask for votes. Outside, a single clip can set the narrative for a whole week. That’s why Bigg Boss contestant PR matters: the contestants who go deep into the season almost always have a strong team outside.',
      'PXR Infinity is a Bigg Boss PR agency. Our Bigg Boss PR team has worked with contestants from Bigg Boss 17, 18, 19 and 20 — including Munawar Faruqui, Rajat Dalal, Mridul Tiwari and Qazi Touqeer — running their social media, Bigg Boss fan army, X trends and Bigg Boss voting campaign from entry day to the finale.',
      'Everything we do runs on real fans and real pages, with no fake votes or fake engagement — just a well-organised team that keeps your contestant visible, defended and in the conversation every single day.',
    ],
    deliverables: [
      { title: 'Pre-entry setup', desc: 'Profile clean-up, handover plan for the contestant’s accounts, fan page network and launch content ready for day one.' },
      { title: 'Contestant social media management', desc: 'Daily posts, stories and replies on the contestant’s own Instagram and X while they are inside the house.' },
      { title: 'Episode edits & memes', desc: 'Highlight clips, edits and memes from every episode, shared across meme pages and fan pages within hours.' },
      { title: 'Bigg Boss fan army', desc: 'Organised fan clubs and fan pages that grow all season and show up for every nomination and task.' },
      { title: 'Bigg Boss Twitter trends', desc: 'Weekly X trends for the contestant, plus a big finale-week trend push. 650+ trends run across our campaigns.' },
      { title: 'Voting campaigns & finale push', desc: 'Clear, repeated voting appeals each nomination week and maximum visibility in the final weeks.' },
    ],
    process: [
      { title: 'Family / team brief', desc: 'Contestant personality, strengths, risks and goals for the season.' },
      { title: 'Season plan', desc: 'Week-by-week PR, trend and voting calendar.' },
      { title: 'Live season ops', desc: 'Daily content, monitoring and quick narrative response after every episode.' },
      { title: 'Finale & after', desc: 'Finale trend and voting push, then post-show career momentum.' },
    ],
    idealFor: ['Bigg Boss contestants (Hindi and regional seasons)', 'Contestant families and managers', 'Wildcard entries joining mid-season', 'Ex-contestants building a career after the show'],
    faqs: [
      { q: 'When should a Bigg Boss contestant’s team contact a PR agency?', a: 'Ideally before entry, so profiles, fan pages and content are ready on day one. We can also join mid-season — many teams call us after the first nomination.' },
      { q: 'How do your Bigg Boss voting campaigns work?', a: 'We organise real fans: clear voting appeals on every platform, reminders through fan pages and meme pages, and trends during the voting window. We never use fake votes or fake accounts.' },
      { q: 'How do you build a Bigg Boss fan army?', a: 'We bring the contestant’s supporters into organised fan clubs with one shared message, a daily posting plan and live X Spaces, then grow those clubs through episode edits and meme pages all season.' },
      { q: 'Have you worked with Bigg Boss contestants before?', a: 'Yes — contestants from Bigg Boss 17, 18, 19 and 20, including Munawar Faruqui, Rajat Dalal, Mridul Tiwari and Qazi Touqeer. Read the Rajat Dalal and Mridul Tiwari case studies for details.' },
      { q: 'Can you promise a win?', a: 'No. Results depend on the show, the contestant’s journey and the public vote. What we commit to is consistent, professional support outside the house every day of the season.' },
      { q: 'Who runs the contestant’s Instagram and X while they are inside?', a: 'Usually the family or manager hands account access to a small trusted team. We run the accounts day to day, post in the contestant’s voice, and agree in advance what we will and won’t say on their behalf.' },
      { q: 'What happens when a clip from the house goes against the contestant?', a: 'We move fast with context: the full sequence, what happened before and after, and the contestant’s own past words where relevant. Fan clubs get one calm response line to use, so the reply sounds united instead of angry. We don’t attack other contestants or their families.' },
      { q: 'Do you work on regional Bigg Boss seasons?', a: 'Yes. The same approach works for regional seasons. We pick meme pages, media pages and creators that speak the season’s language.' },
      { q: 'Is it worth hiring a Bigg Boss PR team for a short stay in the house?', a: 'Even a contestant who leaves early benefits from a clean, active social presence and a steady narrative. Many careers are built on how people remember the contestant after the show, not on how long they stayed.' },
      { q: 'How much does Bigg Boss PR cost?', a: 'It depends on how early you start, how many weeks we cover, the size of the fan club operation and how many trends and media placements the plan needs. Read our guide on Bigg Boss PR cost, then WhatsApp us for a quote based on your plan.', cta: { label: 'Read: Bigg Boss PR cost', href: '/blog/bigg-boss-pr-cost' } },
    ],
    related: ['reality-show-pr', 'x-twitter-trends', 'celebrity-pr'],
    relatedPosts: ['bigg-boss-pr-cost', 'how-to-become-popular-in-bigg-boss', 'how-does-bigg-boss-voting-work'],
    sections: [
      {
        id: 'seasons',
        eyebrow: 'Season by season',
        title: 'Bigg Boss 17 to 20: contestants we’ve worked with',
        paragraphs: [
          'Every season has its own mood, its own format twists and its own fan culture. What stays the same is the job outside the house: keep the contestant visible, explain their side and keep their supporters organised.',
        ],
        items: [
          { label: 'Bigg Boss 17', title: 'Munawar Faruqui', desc: 'Contestant PR and fan support across the season.' },
          { label: 'Bigg Boss 18', title: 'Rajat Dalal', desc: 'One message across every fan club, daily posting, live X Spaces and the finale push. #RajatIsTheBoss logged 210K mentions in five days.', href: '/work/rajat-dalal-bigg-boss-18-pr-campaign' },
          { label: 'Bigg Boss 19', title: 'Mridul Tiwari', desc: 'One message a week and X trends around key moments. Three trends reached #1 in India.', href: '/work/mridul-tiwari-bigg-boss-19-x-trends' },
          { label: 'Bigg Boss 20', title: 'Qazi Touqeer', desc: 'Contestant PR, fan clubs and trends during the season.' },
        ],
      },
      {
        id: 'before-during-after',
        eyebrow: 'Before, during and after',
        title: 'What a Bigg Boss PR team does at each stage',
        items: [
          {
            label: 'Before entry',
            title: 'Get the ground ready',
            desc: 'Clean up profiles, agree who runs the accounts, write the contestant’s story in three lines, collect childhood and family photos, line up fan pages, and plan the entry-day posts and first trend.',
          },
          {
            label: 'During the season',
            title: 'Run it every day',
            desc: 'Post after every episode, share clips and memes within hours, give fan clubs one message per week, run X trends around nominations and big moments, and respond calmly when a clip goes against the contestant.',
          },
          {
            label: 'After the show',
            title: 'Turn attention into a career',
            desc: 'Interviews, paparazzi visibility, brand collaborations, music videos and creator collaborations, while the audience still remembers the contestant’s journey.',
          },
        ],
      },
      {
        id: 'why-different',
        eyebrow: 'Why Bigg Boss is different',
        title: 'Why Bigg Boss contestant PR is its own job',
        paragraphs: [
          'Bigg Boss runs every day for around three months, and the conversation outside the house moves faster than the episodes. A single clip can shape how millions of viewers see a contestant for the rest of the week, and the contestant can’t reply, explain or say thank you. Everything outside depends on the team they left behind.',
          'That is why a Bigg Boss PR team works differently from regular celebrity PR. We plan in weeks, not months. Content goes out within hours of an episode. Fan clubs need one clear message each week, because twenty clubs saying twenty different things cancel each other out. Voting weeks need reminders that are simple and repeated on every platform. And when the house turns against a contestant, the response has to be quick, calm and factual.',
          'We also stay careful about what we don’t do. We don’t attack other contestants or their families, we don’t use fake accounts, and we don’t promise a trophy. Our work is to make sure the people who already like a contestant can see them, understand them and support them in an organised way.',
        ],
      },
      {
        id: 'bigg-boss-guides',
        eyebrow: 'Guides',
        title: 'Bigg Boss PR guides from our team',
        items: [
          { label: 'Cost', title: 'How Much Does Bigg Boss PR Cost?', desc: 'What goes into a Bigg Boss PR budget and how to plan one.', href: '/blog/bigg-boss-pr-cost' },
          { label: 'Voting', title: 'How Does Bigg Boss Voting Work?', desc: 'A simple guide to voting windows, nominations and appeals.', href: '/blog/how-does-bigg-boss-voting-work' },
          { label: 'Popularity', title: 'How to Become Popular in Bigg Boss', desc: 'What viewers connect with, and how the outside team helps.', href: '/blog/how-to-become-popular-in-bigg-boss' },
          { label: 'Fan armies', title: 'Bigg Boss PR: How Contestants Build Fan Armies', desc: 'How organised fan clubs form and grow during a season.', href: '/blog/bigg-boss-pr-how-contestants-build-fan-armies' },
          { label: 'Hinglish', title: 'Bigg Boss Mein Vote Kaise Badhaye?', desc: 'Votes badhane ke practical tareeke, Hinglish mein.', href: '/blog/bigg-boss-mein-vote-kaise-badhaye' },
          { label: 'Guide', title: 'How to Prepare PR Before Entering a Reality Show', desc: 'A pre-entry checklist for contestants and families.', href: '/blog/how-to-prepare-pr-before-entering-a-reality-show' },
          { label: 'Guide', title: 'Fan Club Guide for Contestants', desc: 'Roles, rules and a weekly plan for fan club admins.', href: '/blog/fan-club-guide-for-contestants' },
          { label: 'X trends', title: 'X Trends for Reality Show Contestants', desc: 'A week-by-week trend calendar for a season.', href: '/blog/x-trends-for-reality-show-contestants' },
        ],
      },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'reality-show-pr',
    name: 'Reality Show PR',
    icon: 'Tv',
    group: 'Talent',
    short: 'Season PR, fan armies and voting campaigns for contestants of Rise & Fall, Lock Upp, Splitsvilla, Roadies and OTT reality shows.',
    h1: 'Reality show PR agency in India — contestant promotion from entry day to finale',
    metaTitle: 'Reality Show PR Agency in India',
    metaDescription:
      'Reality show PR agency in India for contestant promotion: Rise and Fall PR, Lock Upp PR, fan club management, voting appeals and finale trends.',
    mainKeyword: 'reality show PR agency India',
    serviceType: 'Reality show public relations',
    intro: [
      'Inside the house, contestants can’t defend themselves, explain context or ask for votes. Outside, narratives form in hours. As a reality show PR agency in India, we run reality show contestant promotion from the outside — so the story people hear is the right one.',
      'PXR Infinity runs season-long PR for Rise & Fall, Lock Upp, Splitsvilla, Roadies, Khatron Ke Khiladi and OTT reality formats like The Alliance. Our Rise and Fall PR and Lock Upp PR work covers fan club management, episode content, media and voting appeals, and we work with families and managers from before entry to the finale and beyond. (For Bigg Boss, see our dedicated Bigg Boss PR page.)',
    ],
    deliverables: [
      { title: 'Pre-entry setup', desc: 'Profile clean-up, social handover plan, fan page network and launch content.' },
      { title: 'Daily episode coverage', desc: 'Highlight clips, edits and memes from every episode, posted fast.' },
      { title: 'Fan club management', desc: 'Organised fan clubs and pages that grow and stay active all season.' },
      { title: 'X trends & media', desc: 'Weekly trends plus portal and paps coverage of key moments.' },
      { title: 'Voting campaigns', desc: 'Clear, consistent voting appeals across platforms each nomination week.' },
      { title: 'Finale push', desc: 'Maximum visibility in the final weeks when votes matter most.' },
    ],
    process: [
      { title: 'Family / team brief', desc: 'Contestant personality, strengths, risks and goals.' },
      { title: 'Season plan', desc: 'Week-by-week PR, trend and voting calendar.' },
      { title: 'Live season ops', desc: 'Daily content, monitoring and narrative response.' },
      { title: 'Finale & after', desc: 'Finale campaign and post-show career momentum.' },
    ],
    idealFor: ['Rise & Fall and Lock Upp contestants', 'Splitsvilla, Roadies and Khatron Ke Khiladi contestants', 'OTT reality show casts and producers', 'Contestant families and managers'],
    faqs: [
      { q: 'Do you handle Rise and Fall PR and Lock Upp PR?', a: 'Yes. Our reality show work includes Rise & Fall Season 2 and Lock Upp Seasons 1 and 2, alongside Bigg Boss and Prime Video’s The Alliance.' },
      { q: 'When should a contestant’s team contact you?', a: 'Ideally before the contestant enters the house, so profiles, fan pages and content are ready on day one. We can also join mid-season.' },
      { q: 'Who do you coordinate with while the contestant is inside?', a: 'Usually the family, manager or a trusted person holding the social media handover. All decisions are agreed with them.' },
      { q: 'Can you promise a win or a top finish?', a: 'No. Results depend on the show, the contestant’s journey and the public vote. What we commit to is consistent, professional work that gives the contestant the strongest possible support outside the house.' },
      { q: 'Is this confidential?', a: 'Yes. We never disclose which contestants we work with without permission.' },
    ],
    related: ['bigg-boss-pr', 'x-twitter-trends', 'celebrity-pr'],
    relatedPosts: ['how-to-build-a-fan-base-on-social-media', 'reality-show-fan-army-kaise-banaye', 'how-celebrities-manage-pr-in-reality-shows'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'movie-web-series-promotion',
    name: 'Movie & Web Series Promotion',
    icon: 'Clapperboard',
    group: 'Entertainment',
    short: 'Trailer buzz, meme campaigns and release-week hype for films and OTT shows.',
    h1: 'Movie promotion agency in India — web series, OTT and trailer promotion',
    metaTitle: 'Movie Promotion Agency India for Films & OTT',
    metaDescription:
      'Movie promotion agency India for films, web series and OTT shows: trailer promotion, meme campaigns, X trends and regional film promotion.',
    mainKeyword: 'movie promotion agency India',
    serviceType: 'Film and OTT promotion',
    intro: [
      'A release has one shot. If people aren’t talking about it in the first week, the algorithm and the audience move on. As a movie promotion agency in India, we build that first-week conversation — because digital buzz now decides footfalls and watch-time as much as posters ever did.',
      'From trailer promotion to release week, we handle web series promotion and work as an OTT promotion agency for platforms and producers: memes from your scenes, trending hashtags, creator reactions and constant media presence. For regional film promotion, we pick pages and creators that speak your audience’s language.',
    ],
    deliverables: [
      { title: 'Campaign roadmap', desc: 'Phase-wise plan: teaser, trailer, songs, release week, post-release.' },
      { title: 'Scene-based meme campaigns', desc: 'Memes and edits from your footage across meme pages.' },
      { title: 'Trailer promotion & release trends', desc: 'X trends and creator posts timed to trailer drops and release day.' },
      { title: 'Influencer reactions & reviews', desc: 'Creators reacting, reviewing and recommending.' },
      { title: 'Media & paps coverage', desc: 'Cast visibility, event coverage and portal features.' },
      { title: 'Post-release sustain', desc: 'Keep word-of-mouth going in week two and beyond.' },
    ],
    process: [
      { title: 'Asset review', desc: 'Footage, songs, cast availability and release dates.' },
      { title: 'Phase plan', desc: 'What goes live when, and on which platforms.' },
      { title: 'Campaign waves', desc: 'Memes, trends and creators in planned bursts.' },
      { title: 'Release report', desc: 'Reach, conversation volume and coverage by phase.' },
    ],
    idealFor: ['Film producers and studios', 'OTT platforms and production houses', 'Independent and regional films', 'Short films and digital series'],
    faqs: [
      { q: 'How early should movie promotion start?', a: 'Ideally from the first teaser, a few weeks before release. Shorter timelines are possible and work best with a bigger push in release week.' },
      { q: 'Do you promote OTT web series?', a: 'Yes. We’ve run a season-long X campaign for Prime Video’s The Alliance, covering all 42 daily episodes. Web series promotion follows the same idea: keep the conversation going episode by episode.' },
      { q: 'Do you work on regional films?', a: 'Yes. For regional film promotion we select meme pages, creators and portals that match the language and region of your audience.' },
      { q: 'Can you work alongside our main marketing agency?', a: 'Absolutely. Many producers bring us in specifically for memes, trends and creator buzz while another agency handles ATL.' },
      { q: 'What do you need from us to start?', a: 'Release dates, the assets you can share (posters, teaser, trailer, songs, stills, BTS), which cast members are available for interviews and appearances, and anything that must stay under embargo.' },
      { q: 'Can you make memes from our footage before release?', a: 'Yes, from the assets you approve. We share the meme plan and drafts for sign-off, and nothing from unreleased footage goes out without your OK.' },
      { q: 'How do you promote an OTT premiere differently from a theatrical release?', a: 'A theatrical release is about the first weekend’s footfalls. An OTT premiere is about getting people to press play and keep watching, so we keep the conversation going for longer: episode moments, character memes and weekly trends.' },
      { q: 'Do you handle trailer promotion only?', a: 'Yes, if that’s what you need. Trailer day is one of the best moments for an X trend, creator reactions and meme pages, and it can be run as a stand-alone campaign.' },
      { q: 'How do you measure a film campaign?', a: 'By phase: reach and engagement on meme and creator posts, X trend positions and post counts, media coverage links, and conversation volume around release. You get one report with every link and screenshot.' },
      { q: 'Can you promise box-office numbers or views?', a: 'No. Box office and views depend on the film, the competition and many things outside a campaign. We commit to a clear plan, on-time delivery and honest reporting.' },
    ],
    related: ['meme-marketing', 'x-twitter-trends', 'influencer-marketing'],
    relatedPosts: ['meme-marketing-examples-india', 'x-trends-for-film-and-ott-releases', 'influencer-vs-meme-marketing-for-brands'],
    sections: [
      {
        id: 'release-lifecycle',
        eyebrow: 'The release lifecycle',
        title: 'Movie promotion, phase by phase',
        paragraphs: [
          'Every release has the same five moments. Each one needs different content, different pages and a different goal. We plan all five together, so each phase builds on the one before it.',
        ],
        items: [
          { label: '01', title: 'Announcement', desc: 'First look and title reveal. Goal: make the name stick. Media pages, a launch post plan and the first hashtag.' },
          { label: '02', title: 'Teaser', desc: 'Short, curious, shareable. Goal: get people guessing. Meme pages, fan theories and creator reactions.' },
          { label: '03', title: 'Trailer day', desc: 'The biggest digital moment before release. Goal: one big day. An X trend, creator reactions, meme pages and portal coverage, all within hours.' },
          { label: '04', title: 'Release week', desc: 'Goal: turn interest into tickets or plays. Reviews, audience reactions, scene memes, paparazzi coverage and a release-day trend.' },
          { label: '05', title: 'OTT premiere', desc: 'Goal: press play and keep watching. Episode and character memes, weekly trends and a finale push for series.' },
        ],
      },
      {
        id: 'scene-memes',
        eyebrow: 'Meme marketing for films',
        title: 'Turning your scenes into memes people share',
        paragraphs: [
          'The fastest way a film or series spreads online is through its own moments: a dialogue that fits everyday life, a reaction shot that works for any situation, a character everyone recognises. When meme pages turn those moments into relatable posts, the film reaches people in DMs and group chats, long before they see a poster.',
          'We go through your approved assets and pick the moments with meme potential: dialogues, expressions, situations. Then we match them to pages whose audience fits the film, from Bollywood and OTT pages to college humour, cricket and regional pages. You see the meme plan and the drafts before anything goes live. Read our meme marketing examples from India for formats that work.',
        ],
      },
      {
        id: 'measure',
        eyebrow: 'Reporting',
        title: 'How we measure a release campaign',
        paragraphs: [
          'Every phase gets its own numbers, so you can see what each part of the campaign did. For meme pages and creators: posts, reach and engagement, with links to every post. For X: trend positions in India, how long each trend held and the post counts shown by X. For media: every coverage link with the outlet and date. Around release, we also track how much conversation the title is getting across platforms.',
          'You get one report at the end of the campaign, and a short update after each phase. If something didn’t work as planned, the report says so, and the next phase is adjusted.',
        ],
      },
      {
        id: 'promoted',
        eyebrow: 'Work',
        title: 'Films and shows we’ve promoted',
        table: {
          caption: 'Films and shows promoted by PXR Infinity',
          head: ['Title', 'Type', 'Platform', 'What we did'],
          rows: promotedTitles.map((t) => [t.title, t.type, t.platform, t.work]),
        },
      },
      {
        id: 'trend-proof',
        eyebrow: 'X trend proof',
        title: 'Trends that carry a release',
        paragraphs: [
          'For Prime Video’s The Alliance we ran X coverage across all 42 daily episodes of the six-week season and planned a finale-day trend that reached #1 in India. The show was renewed for Season 2.',
          'For films and series, we plan trends around trailer day, release day and the premiere, and pair each one with meme pages and creators so the moment reaches Instagram as well as X. See the full list of trends we’ve run on our X trends page.',
        ],
      },
      ...(regionalLanguages.length
        ? [
            {
              id: 'regional',
              eyebrow: 'Regional film promotion',
              title: 'Languages we cover',
              paragraphs: [
                `We run film and series campaigns in ${regionalLanguages.join(', ')}, with meme pages, creators and portals that speak to each audience in its own language.`,
              ],
            },
          ]
        : []),
      {
        id: 'more-services',
        eyebrow: 'Build the full campaign',
        title: 'Services that work with film promotion',
        paragraphs: campaignsStartFrom
          ? [`Film and series campaigns start from ${campaignsStartFrom}. The final quote depends on phases, pages and creators.`]
          : undefined,
        items: [
          { title: 'Meme marketing', desc: 'Scene memes and edits across meme pages, matched to your audience.', href: '/services/meme-marketing' },
          { title: 'X / Twitter trends', desc: 'Trends for trailer day, release day and premieres.', href: '/services/x-twitter-trends' },
          { title: 'Influencer marketing', desc: 'Creator reactions, reviews and recommendations.', href: '/services/influencer-marketing' },
        ],
      },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'music-album-promotion',
    name: 'Music & Album Promotion',
    icon: 'Music',
    group: 'Entertainment',
    short: 'Reels, creator usage, meme edits and trends for songs, albums and artists.',
    h1: 'Song promotion in India — make your track the next reel audio',
    metaTitle: 'Song Promotion India for Artists and Labels',
    metaDescription:
      'Song promotion India for artists and labels. A music promotion agency for album promotion, Punjabi song promotion, reel audio campaigns and X trends.',
    mainKeyword: 'song promotion India',
    serviceType: 'Music promotion',
    intro: [
      'Songs blow up on reels first, then on streaming. If creators aren’t using your audio, the algorithm won’t push it. Song promotion in India today means getting your hook into culture fast.',
      'As a music promotion agency in India, we run creator and meme page campaigns built around your song’s best moment, plus trends and coverage around the artist — so streams, saves and searches all move together. We handle single releases, full album promotion and regional music, including Punjabi song promotion.',
    ],
    deliverables: [
      { title: 'Hook & audio strategy', desc: 'Pick the 10–15 seconds that will work as a reel audio.' },
      { title: 'Creator audio usage', desc: 'Dancers, lip-sync, comedy and lifestyle creators using your track.' },
      { title: 'Meme page edits', desc: 'Memes and edits set to your song for reach and recall.' },
      { title: 'Release-day trends', desc: 'X and Instagram buzz around the drop.' },
      { title: 'Artist media coverage', desc: 'Interviews and features on music and entertainment portals.' },
      { title: 'Audio usage report', desc: 'Reels created, views and engagement across the campaign.' },
    ],
    process: [
      { title: 'Listen & brief', desc: 'Track, artist story, release date and target audience.' },
      { title: 'Creator plan', desc: 'Creator mix and content ideas around the hook.' },
      { title: 'Seeding waves', desc: 'Creators and pages post in planned waves.' },
      { title: 'Report', desc: 'Reels count, views and coverage delivered.' },
    ],
    idealFor: ['Independent artists', 'Music labels', 'Film and album soundtracks', 'Regional and indie music'],
    faqs: [
      { q: 'Can you promise streams?', a: 'No. We drive awareness and creator usage, which are the biggest drivers of streams, but final numbers depend on the song and audience response.' },
      { q: 'Do you do Punjabi song promotion and other regional music?', a: 'Yes — Punjabi, Haryanvi, Bhojpuri, Marathi, South Indian and more, with creators and pages that fit each audience.' },
      { q: 'How is album promotion different from a single?', a: 'An album needs a longer plan: a lead single to build interest, then a focus track every few weeks so creators always have fresh audio to use.' },
      { q: 'How soon after release should we start?', a: 'Best is to plan before release and start creator seeding on release day, while interest is highest.' },
    ],
    related: ['movie-web-series-promotion', 'influencer-marketing', 'personal-branding'],
    relatedPosts: ['song-viral-kaise-kare', 'influencer-marketing-rates-india'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'brand-launch-campaigns',
    name: 'Brand Launch Campaigns',
    icon: 'Rocket',
    group: 'Brands',
    short: 'Teasers, seeding and day-one noise so your launch doesn’t go unnoticed.',
    h1: 'Brand launch campaign agency — product launches that make day one loud',
    metaTitle: 'Brand Launch Campaign Agency for Startups',
    metaDescription:
      'Brand launch campaign agency for product launch marketing in India. A startup marketing agency for teasers, memes, creators and moment marketing.',
    mainKeyword: 'brand launch campaign agency',
    serviceType: 'Launch marketing',
    intro: [
      'Most launches fail quietly. Not because the product is bad, but because nobody heard about it. As a brand launch campaign agency, we make sure every channel fires together: teasers, creators, memes, media and a moment people can talk about.',
      'We plan and run product launch marketing in India with one team and one calendar, so awareness builds before launch and peaks on the day. Startups use us as a startup marketing agency in India for launches, and as a moment marketing agency when they need to react to culture fast.',
    ],
    deliverables: [
      { title: 'Launch strategy', desc: 'Positioning, big idea and a day-by-day launch calendar.' },
      { title: 'Teaser campaign', desc: 'Mystery posts, countdowns and seeding to build curiosity.' },
      { title: 'Creator & meme waves', desc: 'Influencers and meme pages going live together on launch day.' },
      { title: 'Launch-day trend', desc: 'A hashtag push to own the conversation.' },
      { title: 'PR coverage', desc: 'Founder stories and launch news on relevant portals.' },
      { title: 'Moment marketing', desc: 'Quick posts on trends, matches and news moments after launch.' },
    ],
    process: [
      { title: 'Brief', desc: 'Product, audience, launch date and targets.' },
      { title: 'Big idea', desc: 'One launch concept every channel ladders up to.' },
      { title: 'Build-up & launch', desc: 'Teasers, then everything goes live together.' },
      { title: 'Sustain & report', desc: 'Keep momentum and measure what worked.' },
    ],
    idealFor: ['D2C and consumer brands', 'Apps and startups', 'New collections or product lines', 'Restaurants, events and stores'],
    faqs: [
      { q: 'How far in advance should we plan a launch?', a: 'Ideally a few weeks before launch, so creators, pages and media can be booked and teasers can run. Urgent launches can go live in as little as 48 hours.' },
      { q: 'Can you work with a small startup budget?', a: 'Yes. We’ll prioritise the channels with the best return for your category and scale up as you grow.' },
      { q: 'What is moment marketing?', a: 'Moment marketing means reacting to what the internet is talking about right now — a match, a release, a viral clip — with a quick, on-brand post. Done well, it puts your brand in the conversation for free.' },
      { q: 'Do you also handle ads?', a: 'Our focus is earned and creator-led buzz. We can work with your performance-marketing team so both run together.' },
    ],
    related: ['meme-marketing', 'influencer-marketing', 'pr-media-coverage'],
    relatedPosts: ['how-to-market-a-startup-in-india', 'pr-vs-advertising'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'crisis-pr-reputation-management',
    name: 'Crisis PR & Reputation Management',
    icon: 'ShieldAlert',
    group: 'Talent',
    short: 'Fast response, narrative control and sentiment repair when things go sideways.',
    h1: 'Crisis PR agency in India — fast response and online reputation management',
    metaTitle: 'Crisis PR Agency India: Reputation Management',
    metaDescription:
      'Crisis PR agency India for brands and public figures: rapid response, online reputation management India and celebrity reputation management.',
    mainKeyword: 'crisis PR agency India',
    serviceType: 'Crisis communications',
    intro: [
      'A controversy moves in hours. The first response often decides the next six months of search results and comments. Silence, or the wrong statement, makes it worse. As a crisis PR agency in India, we help you get that first response right.',
      'We handle online reputation management in India for brands and public figures, and celebrity reputation management for actors, creators and contestants: assess the situation, shape the right message, shift the conversation with positive coverage, and build stronger results for what people find when they search.',
    ],
    deliverables: [
      { title: 'Rapid assessment', desc: 'What is being said, where, by whom and how fast it is spreading.' },
      { title: 'Response strategy', desc: 'Statement, timing and channels — or a deliberate decision not to respond.' },
      { title: 'Narrative shift', desc: 'Positive stories, supporter voices and coverage that change the conversation.' },
      { title: 'Fan & community briefing', desc: 'Keep supporters informed and aligned.' },
      { title: 'Search & profile clean-up', desc: 'Push stronger, accurate results higher over time.' },
      { title: 'Sentiment monitoring', desc: 'Daily tracking until things settle.' },
    ],
    process: [
      { title: 'Call us', desc: 'WhatsApp is fastest. Everything shared stays confidential.' },
      { title: 'Assess', desc: 'We map the situation within hours.' },
      { title: 'Respond', desc: 'Agreed message goes out on the right channels.' },
      { title: 'Recover', desc: 'Positive narrative and monitoring until sentiment recovers.' },
    ],
    idealFor: ['Celebrities and public figures', 'Brands facing backlash', 'Reality-show contestants', 'Founders and creators'],
    faqs: [
      { q: 'How quickly can you respond?', a: 'For active crises, WhatsApp us directly — we start assessing the situation as soon as you share the details.' },
      { q: 'Can you remove negative articles?', a: 'No, and we don’t promise removals. We can request corrections where facts are wrong, and build strong positive coverage so accurate results rank higher.' },
      { q: 'What does celebrity reputation management include?', a: 'Monitoring what is said about you, a clear response plan, positive coverage and interviews, fan community briefing, and a search presence that reflects your real work.' },
      { q: 'Is everything confidential?', a: 'Yes, completely. We can sign an NDA before you share any details.' },
    ],
    related: ['celebrity-pr', 'pr-media-coverage', 'personal-branding'],
    relatedPosts: ['crisis-pr-guide-for-indian-celebrities', 'trolling-ka-jawab-kaise-de'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    icon: 'LayoutGrid',
    group: 'Brands',
    short: 'Strategy, content and community for Instagram, X, YouTube and LinkedIn.',
    h1: 'Social media management agency in India that grows real, engaged audiences',
    metaTitle: 'Social Media Management Agency India',
    metaDescription:
      'Social media management agency India for brands, celebrities and creators. An Instagram marketing agency for reels, content, community and reports.',
    mainKeyword: 'social media management agency India',
    serviceType: 'Social media management',
    intro: [
      'Posting regularly isn’t a strategy. Growth comes from a clear content identity, formats that suit the platform, and showing up in culture when it matters. As a social media management agency in India, that’s what we build for you.',
      'We work as an Instagram marketing agency in India, managing your accounts end to end — content calendar, design, reels, captions, community replies and reporting — with the internet-native tone that comes from running trend and meme campaigns every day.',
    ],
    deliverables: [
      { title: 'Content strategy', desc: 'Pillars, formats and a monthly calendar.' },
      { title: 'Content creation', desc: 'Reels, carousels, statics and stories designed for each platform.' },
      { title: 'Trend-jacking', desc: 'Timely posts on trends and moments relevant to you.' },
      { title: 'Community management', desc: 'Replies, DMs and comment moderation.' },
      { title: 'Growth support', desc: 'Collabs, meme page shares and creator tie-ups.' },
      { title: 'Monthly reports', desc: 'Followers, reach, engagement and what to do next.' },
    ],
    process: [
      { title: 'Audit', desc: 'What works today and what is holding you back.' },
      { title: 'Plan', desc: 'Content pillars and a monthly calendar.' },
      { title: 'Create & post', desc: 'Content made, approved and published.' },
      { title: 'Review', desc: 'Monthly report and next month’s improvements.' },
    ],
    idealFor: ['Brands and startups', 'Celebrities and public figures', 'Creators who want to focus on creating', 'Restaurants and local businesses'],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, X, YouTube (Shorts and community) and LinkedIn. We recommend focusing where your audience actually is.' },
      { q: 'Do you work with clients anywhere in India?', a: 'Yes. Social media work happens online, so we manage accounts for brands, celebrities and creators across India.' },
      { q: 'How many posts per month?', a: 'It depends on the package — see our packages page or ask for a custom plan.' },
      { q: 'Do I approve content before it goes live?', a: 'Yes. You approve the monthly calendar and individual posts.' },
    ],
    related: ['personal-branding', 'meme-marketing', 'influencer-marketing'],
    relatedPosts: ['reel-viral-kaise-kare', 'instagram-pe-famous-kaise-bane'],
    updatedAt: '2026-11-25',
  },
  {
    slug: 'personal-branding',
    name: 'Personal Branding',
    icon: 'UserRound',
    group: 'Talent',
    short: 'Build a name people recognise and trust — for founders, YouTubers, creators and professionals.',
    h1: 'Personal branding agency in India for founders, YouTubers and creators',
    metaTitle: 'Personal Branding Agency India for Founders',
    metaDescription:
      'Personal branding agency India: personal branding for founders, PR for YouTubers and PR for content creators — positioning, content and media features.',
    mainKeyword: 'personal branding agency India',
    serviceType: 'Personal branding',
    intro: [
      'People trust people more than logos. A strong personal brand brings deals, talent, invitations and opportunities to you instead of you chasing them. As a personal branding agency in India, we help you build that on purpose.',
      'We run personal branding for founders and CXOs, PR for YouTubers, and PR for content creators who want mainstream recognition. We define what you should be known for, then build it consistently — content, media features, podcast and event opportunities, and a search presence that backs up your story.',
    ],
    deliverables: [
      { title: 'Positioning', desc: 'Your niche, story and the ideas you want to own.' },
      { title: 'Content system', desc: 'Posts, reels and articles in your voice, without taking your whole week.' },
      { title: 'Media features', desc: 'Interviews and stories on relevant portals.' },
      { title: 'Search presence', desc: 'What people find when they Google your name.' },
      { title: 'Profile optimisation', desc: 'Instagram, LinkedIn, YouTube and X profiles that convert visitors.' },
      { title: 'Growth reporting', desc: 'Reach, followers and opportunities generated.' },
    ],
    process: [
      { title: 'Discovery call', desc: 'Your goals, story and audience.' },
      { title: 'Positioning', desc: 'What you’ll be known for and where.' },
      { title: 'Build', desc: 'Content, features and profiles go live.' },
      { title: 'Compound', desc: 'Monthly consistency and reporting.' },
    ],
    idealFor: ['Founders and CXOs', 'YouTubers and content creators', 'Doctors, coaches and consultants', 'Reality-show alumni and new celebrities'],
    faqs: [
      { q: 'Do you offer PR for YouTubers and content creators?', a: 'Yes. We get creators featured in media, help them grow beyond one platform, and build the kind of recognition that brings bigger brand deals.' },
      { q: 'Do I have to create all the content myself?', a: 'No. We need some of your time for ideas and recordings, and we handle writing, editing and posting.' },
      { q: 'How long until a personal brand shows results?', a: 'You’ll see better profiles and first features within weeks; real authority builds over months of consistency.' },
      { q: 'Which platform is best for personal branding?', a: 'LinkedIn for B2B founders, Instagram for creators and public figures, YouTube for long-form experts, and X for opinions and news. We’ll pick based on your goals.' },
    ],
    related: ['celebrity-pr', 'pr-media-coverage', 'social-media-management'],
    relatedPosts: ['instagram-pe-famous-kaise-bane', 'fan-following-kaise-badhaye', 'how-to-build-a-fan-base-on-social-media'],
    updatedAt: '2026-11-25',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
