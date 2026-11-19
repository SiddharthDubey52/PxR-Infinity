/**
 * SERVICES — every /services/[slug] page is generated from this list.
 * To add a service: copy one object, change the slug + copy. Done.
 * `icon` must be a key from components/ui/Icon.tsx.
 */

export type Faq = { q: string; a: string; cta?: { label: string; href: string } }

export type Service = {
  slug: string
  name: string
  icon: string
  group: 'Brands' | 'Entertainment' | 'Talent'
  short: string
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  serviceType: string
  intro: string[]
  deliverables: { title: string; desc: string }[]
  process: { title: string; desc: string }[]
  idealFor: string[]
  faqs: Faq[]
  related: string[]
  relatedPosts: string[]
}

export const services: Service[] = [
  {
    slug: 'pr-media-coverage',
    name: 'PR & Media Coverage',
    icon: 'Newspaper',
    group: 'Brands',
    short: 'News articles, entertainment portals and paps pages that put your name in front of the right people.',
    h1: 'PR & media coverage — paps pages, news articles and entertainment portals',
    metaTitle: 'Paps Page Promotion, News & Media Coverage in India',
    metaDescription:
      'Get featured on news portals, entertainment sites and paparazzi pages. PXR Infinity is a PR agency in India for brands, celebrities and creators.',
    keywords: ['paps page promotion', 'paparazzi page promotion India', 'news article publishing PR India', 'entertainment news coverage for celebrities', 'PR agency India', 'media coverage agency'],
    serviceType: 'Public relations',
    intro: [
      'Coverage is still the fastest way to build trust. When someone Googles you, what they find decides whether they buy, book or follow. We make sure what they find is strong, recent and on-message.',
      'PXR Infinity plans and places stories across digital news portals, entertainment websites and high-reach paparazzi pages — timed with your launch, release, announcement or milestone, so every article does a job.',
    ],
    deliverables: [
      { title: 'Story angles & press notes', desc: 'We find the hook journalists and page admins actually want, and write it for them.' },
      { title: 'Digital news placements', desc: 'Articles on national and regional news and business portals, matched to your audience.' },
      { title: 'Entertainment portal features', desc: 'Interviews, listicles and features for film, music, OTT and lifestyle audiences.' },
      { title: 'Paps & gossip page coverage', desc: 'Photo and video posts on paparazzi and entertainment Instagram pages for instant visibility.' },
      { title: 'Google search footprint', desc: 'Coverage planned so your brand or name shows credible results on page one.' },
      { title: 'Coverage report', desc: 'Every live link, reach estimate and screenshot in one clean report.' },
    ],
    process: [
      { title: 'Story audit', desc: 'What is newsworthy about you right now, and what does search currently say?' },
      { title: 'Media plan', desc: 'A list of target outlets and pages with angles, formats and timing.' },
      { title: 'Placement', desc: 'Content is written, approved by you and published on schedule.' },
      { title: 'Amplify & report', desc: 'Articles are pushed on social, then logged in your coverage report.' },
    ],
    idealFor: ['Startups and D2C brands', 'Celebrities and public figures', 'Film, OTT and music releases', 'Founders building authority'],
    faqs: [
      { q: 'Which publications can you get me featured in?', a: 'It depends on your story, timing and budget. After the brief we share a media list with options across news, business and entertainment portals and paps pages, so you know where you will appear before you commit.' },
      { q: 'How fast can articles go live?', a: 'Paps page posts can go live in as little as 48 hours after you approve the plan. Portal articles take a little longer, depending on the outlet.' },
      { q: 'Is the coverage paid or organic?', a: 'We do both. Some placements are earned through pitching, others are sponsored features. We are always transparent about which is which in your plan.' },
    ],
    related: ['celebrity-pr', 'crisis-pr-reputation-management', 'personal-branding'],
    relatedPosts: ['crisis-pr-guide-for-indian-celebrities'],
  },
  {
    slug: 'meme-marketing',
    name: 'Meme Marketing',
    icon: 'Laugh',
    group: 'Brands',
    short: 'Relatable, on-brand memes pushed through India’s biggest meme pages.',
    h1: 'Meme marketing agency in India — 25,000+ meme pages, memes that sell',
    metaTitle: 'Meme Marketing Agency in India | 25,000+ Meme Pages',
    metaDescription:
      'PXR Infinity is a meme marketing agency in India with a network of 25,000+ meme pages. Meme page promotion for brands, movies and startups — reach, recall and sales.',
    keywords: ['meme marketing agency India', 'meme marketing services', 'meme page promotion', 'meme page marketing India', 'meme marketing for brands', 'meme pages network India', 'best meme marketing agency India', 'meme marketing agency Mumbai', 'meme marketing agency Delhi', 'meme marketing for movies', 'meme marketing for startups'],
    serviceType: 'Meme marketing',
    intro: [
      'Indians spend hours a day on meme pages. That is where culture moves first — and where ads are skipped fastest. Meme marketing puts your brand inside the content people already love, in a language they already speak.',
      'We write the memes, pick the right pages for your audience, and run them in coordinated waves so your brand feels everywhere at once. Funny when it should be, sharp when it needs to be, and always on-brand.',
    ],
    deliverables: [
      { title: 'Meme strategy', desc: 'Formats, tone, topics and the do-not-cross lines for your brand.' },
      { title: 'Meme creation', desc: 'Original memes, reels and carousels written by people who live on the internet.' },
      { title: 'Meme page network', desc: 'Distribution across our network of 25,000+ meme pages, filtered by niche, region and audience quality.' },
      { title: 'Moment marketing', desc: 'Fast reactions to trends, matches, releases and viral moments.' },
      { title: 'Wave planning', desc: 'Coordinated drops across pages so the campaign feels organic and everywhere.' },
      { title: 'Performance reporting', desc: 'Reach, views, saves, shares and comment sentiment, page by page.' },
    ],
    process: [
      { title: 'Brief', desc: 'Your product, audience, goal and brand tone.' },
      { title: 'Concepts', desc: 'Meme angles and sample creatives for your approval.' },
      { title: 'Page selection', desc: 'Shortlist of meme pages by audience fit, not just follower count.' },
      { title: 'Launch & report', desc: 'Waves go live, we monitor comments and send the report.' },
    ],
    idealFor: ['D2C and consumer brands', 'Apps and startups', 'Film, OTT and music releases', 'Events and launches'],
    faqs: [
      { q: 'Will memes hurt a premium brand image?', a: 'Not if done right. We agree on tone and boundaries first, and premium brands often use clever, self-aware humour rather than slapstick. You approve every creative before it goes live.' },
      { q: 'How do you choose meme pages?', a: 'By audience fit, engagement quality and past performance — not just follower count. We filter out pages with fake or inactive audiences.' },
      { q: 'Can meme marketing drive sales?', a: 'Memes are strongest for awareness and recall, and they can drive traffic and sales with the right offer, link and timing. We set expectations and KPIs clearly in the plan.' },
    ],
    related: ['x-twitter-trends', 'influencer-marketing', 'brand-launch-campaigns'],
    relatedPosts: ['what-is-meme-marketing-in-india', 'influencer-vs-meme-marketing-for-brands'],
  },
  {
    slug: 'x-twitter-trends',
    name: 'X / Twitter Trends',
    icon: 'Hash',
    group: 'Brands',
    short: 'Hashtag trends planned, timed and executed to hit the trending list.',
    h1: 'Twitter / X trend agency in India — get your hashtag trending',
    metaTitle: 'Twitter / X Trend Agency in India | 650+ Trends',
    metaDescription:
      'Twitter / X trend agency in India with 650+ trends delivered. Hashtag trend campaigns for movie releases, celebrities, brands and reality-show contestants.',
    keywords: ['Twitter trend agency India', 'X trend services India', 'Twitter trending campaign', 'hashtag trend agency India', 'Twitter trend for movie release', 'trend on X India', 'celebrity Twitter trend'],
    serviceType: 'Social media trend campaigns',
    intro: [
      'A trending hashtag is social proof at scale. It tells fans, media and the algorithm that something is happening right now — and journalists notice what trends.',
      'We plan the hashtag, write the content bank, coordinate fan clubs and accounts, and run the trend at the right time window so it climbs fast and holds. Birthdays, releases, launches, finales — we have done them all.',
    ],
    deliverables: [
      { title: 'Hashtag & timing plan', desc: 'A hashtag that is unique, easy to type and launched in the best time window.' },
      { title: 'Content bank', desc: 'Tweets, images, GIFs and edits so participants post varied, quality content.' },
      { title: 'Fan & account coordination', desc: 'Fan clubs, communities and active accounts briefed and ready.' },
      { title: 'Live trend monitoring', desc: 'Real-time tracking with a war-room team adjusting during the push.' },
      { title: 'Media pickup', desc: 'Optional: paps pages and portals covering the trend itself.' },
      { title: 'Trend report', desc: 'Screenshots, peak position, duration and estimated tweet volume.' },
    ],
    process: [
      { title: 'Brief', desc: 'Occasion, audience, preferred date and message.' },
      { title: 'Prep', desc: 'Hashtag, content bank and participant briefing.' },
      { title: 'Go live', desc: 'Coordinated push at the chosen time, monitored live.' },
      { title: 'Report', desc: 'Peak rank, duration and screenshots delivered.' },
    ],
    idealFor: ['Celebrity birthdays & announcements', 'Movie, trailer and song releases', 'Reality-show contestants', 'Brand launches'],
    faqs: [
      { q: 'Can you guarantee a #1 trend?', a: 'No honest agency can guarantee a specific position, because trends depend on what else is happening that day. We share realistic targets in the plan based on your fanbase and budget, and we plan the timing to give you the best possible shot.' },
      { q: 'Do you use bots?', a: 'No. Bot activity gets filtered by X and can damage your reputation. We work with real fan communities and active accounts.' },
      { q: 'How much notice do you need?', a: 'A few days of preparation is ideal. For urgent moments we can turn a trend around in as little as 48 hours.' },
    ],
    related: ['meme-marketing', 'reality-show-pr', 'celebrity-pr'],
    relatedPosts: ['how-x-trends-are-created-for-celebrities', 'bigg-boss-pr-how-contestants-build-fan-armies'],
  },
  {
    slug: 'influencer-marketing',
    name: 'Influencer Marketing',
    icon: 'Users',
    group: 'Brands',
    short: 'The right creators, the right briefs, the right price — nano to mega.',
    h1: 'Influencer marketing agency in India that picks creators on data, not vibes',
    metaTitle: 'Influencer Marketing Agency India',
    metaDescription:
      'Find and manage the right influencers for your brand. PXR Infinity runs influencer marketing campaigns across India — from nano creators to celebrities.',
    keywords: ['influencer marketing agency India', 'influencer campaign India', 'Instagram influencer marketing', 'creator collaborations'],
    serviceType: 'Influencer marketing',
    intro: [
      'Influencer marketing works when the creator’s audience actually matches your customer. It fails when brands pick by follower count alone. We pick by audience, engagement quality and content style — then manage everything end to end.',
      'From shortlisting and negotiation to briefs, approvals, posting and reporting, you get one team and one report instead of fifty WhatsApp chats.',
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
      { q: 'Do you check for fake followers?', a: 'Yes. We review engagement patterns, audience quality and past performance before a creator is shortlisted.' },
      { q: 'Can you run barter (product-only) campaigns?', a: 'Yes, especially with nano and micro creators. We will tell you honestly what to expect from barter versus paid.' },
    ],
    related: ['meme-marketing', 'brand-launch-campaigns', 'social-media-management'],
    relatedPosts: ['influencer-vs-meme-marketing-for-brands'],
  },
  {
    slug: 'celebrity-pr',
    name: 'Celebrity PR',
    icon: 'Star',
    group: 'Talent',
    short: 'Image building, fandom management, media and trends for public figures.',
    h1: 'Celebrity PR agency in India — image, fans and media, managed',
    metaTitle: 'Celebrity PR Agency in India | Entertainment PR',
    metaDescription:
      'Celebrity PR in India: image building, fandom management, media coverage, paps pages and X trends. PXR Infinity works with actors, singers and public figures.',
    keywords: ['celebrity PR agency India', 'celebrity PR agency Mumbai', 'entertainment PR agency India', 'reputation management for celebrities', 'fan page management', 'actor PR team'],
    serviceType: 'Celebrity public relations',
    intro: [
      'For a public figure, perception is the career. The right narrative brings better roles, better brand deals and a fanbase that defends you. The wrong one sticks for years.',
      'We work quietly in the background on your image — consistent media presence, organised fandoms, smart trends and fast response when something goes wrong. Fully confidential, always.',
    ],
    deliverables: [
      { title: 'Image strategy', desc: 'A clear public persona and what you are known for — on purpose.' },
      { title: 'Media & paps presence', desc: 'Regular, positive visibility on portals and entertainment pages.' },
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
    idealFor: ['Actors and TV personalities', 'Singers and musicians', 'Sports and public figures', 'Influencers moving into mainstream'],
    faqs: [
      { q: 'Do you sign NDAs?', a: 'Yes. Confidentiality is standard for every celebrity and talent client, and we never name clients publicly without permission.' },
      { q: 'Is celebrity PR a monthly retainer?', a: 'Usually, yes — image is built consistently, not in one week. We also run one-off campaigns for releases and big moments.' },
      { q: 'Can you manage my fan clubs?', a: 'Yes. We help organise, brief and coordinate fan communities so their energy is focused and positive.' },
    ],
    related: ['personal-branding', 'x-twitter-trends', 'crisis-pr-reputation-management'],
    relatedPosts: ['how-x-trends-are-created-for-celebrities', 'crisis-pr-guide-for-indian-celebrities'],
  },
  {
    slug: 'bigg-boss-pr',
    name: 'Bigg Boss PR',
    icon: 'Tv',
    group: 'Talent',
    short: 'Contestant PR, fan armies, voting appeals and finale trends for Bigg Boss contestants.',
    h1: 'Bigg Boss PR agency — contestant PR that wins votes',
    metaTitle: 'Bigg Boss PR Agency | Contestant PR & Voting Campaigns',
    metaDescription:
      'Bigg Boss PR agency for contestants: fan armies, voting campaigns, X trends and finale push. PXR Infinity has worked with contestants from Bigg Boss 17 to 20.',
    keywords: ['Bigg Boss PR agency', 'Bigg Boss contestant PR', 'Bigg Boss PR team', 'Bigg Boss voting campaign', 'Bigg Boss fan army', 'Bigg Boss 20 PR agency', 'Bigg Boss contestant social media management', 'Bigg Boss finale trend', 'Bigg Boss Twitter trend'],
    serviceType: 'Bigg Boss contestant public relations',
    intro: [
      'Ghar ke andar aap, bahar hum. Inside the Bigg Boss house, a contestant can’t explain context, reply to trolls or ask for votes. Outside, a single clip can set the narrative for a whole week. The contestants who go deep into the season almost always have a strong PR team outside.',
      'PXR Infinity is a Bigg Boss PR agency. We have worked with contestants from Bigg Boss 17, 18, 19 and 20 — including Munawar Faruqui, Rajat Dalal, Mridul Tiwari and Qazi Touqeer — running their social media, fan armies, X trends and voting appeals from entry day to the finale.',
      'Everything we do uses real fans and real pages. No bots, no fake votes — just a well-organised team that keeps your contestant visible, defended and in the conversation every single day.',
    ],
    deliverables: [
      { title: 'Pre-entry setup', desc: 'Profile clean-up, handover plan for the contestant’s accounts, fan page network and launch content ready for day one.' },
      { title: 'Contestant social media management', desc: 'Daily posts, stories and replies on the contestant’s own Instagram and X while they are inside the house.' },
      { title: 'Episode edits & memes', desc: 'Highlight clips, edits and memes from every episode, pushed across meme pages and fan pages within hours.' },
      { title: 'Bigg Boss fan army', desc: 'Organised fan clubs and fan pages that grow all season and show up for every nomination and task.' },
      { title: 'Bigg Boss Twitter trends', desc: 'Weekly X trends for the contestant, plus a big finale-week trend push. 650+ trends delivered across our campaigns.' },
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
      { q: 'How do your Bigg Boss voting campaigns work?', a: 'We organise real fans: clear voting appeals on every platform, reminders through fan pages and meme pages, and trends during the voting window. We never use fake votes or bots.' },
      { q: 'Do you run Bigg Boss Twitter trends?', a: 'Yes. Weekly trends for the contestant and a large finale-week trend are part of every season plan. Across all our campaigns we have delivered 650+ trends.' },
      { q: 'Have you worked with Bigg Boss contestants before?', a: 'Yes — contestants from Bigg Boss 17, 18, 19 and 20, including Munawar Faruqui, Rajat Dalal, Mridul Tiwari and Qazi Touqeer.' },
      { q: 'Can you guarantee a win?', a: 'No. Results depend on the show, the contestant’s journey and the public vote. What we guarantee is consistent, professional support outside the house every day of the season.' },
    ],
    related: ['reality-show-pr', 'x-twitter-trends', 'celebrity-pr'],
    relatedPosts: ['how-does-bigg-boss-voting-work', 'bigg-boss-mein-vote-kaise-badhaye', 'bigg-boss-pr-how-contestants-build-fan-armies'],
  },
  {
    slug: 'reality-show-pr',
    name: 'Reality Show PR',
    icon: 'Tv',
    group: 'Talent',
    short: 'Season PR, fan armies and voting campaigns for contestants of Rise & Fall, Lock Upp, Splitsvilla, Roadies, Khatron Ke Khiladi and OTT reality shows.',
    h1: 'Reality show PR agency in India — from entry day to finale',
    metaTitle: 'Reality Show PR Agency in India | Contestant PR',
    metaDescription:
      'Reality show PR agency in India. Contestant PR, fan armies and voting campaigns for Rise & Fall, Lock Upp, Splitsvilla, Roadies and OTT reality shows.',
    keywords: ['reality show PR agency India', 'reality show contestant PR', 'reality show voting campaign agency', 'reality show fan army agency', 'Rise and Fall contestant PR', 'Lock Upp contestant PR', 'Splitsvilla contestant PR', 'Roadies contestant PR', 'Khatron Ke Khiladi contestant PR', 'OTT reality show promotion'],
    serviceType: 'Reality show public relations',
    intro: [
      'Inside the house, contestants can’t defend themselves, explain context or ask for votes. Outside, narratives form in hours. The contestants who go far almost always have a strong team outside running their story.',
      'PXR Infinity runs season-long PR for reality-show contestants — Rise & Fall, Lock Upp, Splitsvilla, Roadies, Khatron Ke Khiladi and OTT reality formats like The Alliance. We work with families and managers from before entry to the finale and beyond. (For Bigg Boss, see our dedicated Bigg Boss PR page.)',
    ],
    deliverables: [
      { title: 'Pre-entry setup', desc: 'Profile clean-up, social handover plan, fan page network and launch content.' },
      { title: 'Daily episode coverage', desc: 'Highlight clips, edits and memes from every episode, posted fast.' },
      { title: 'Fan army building', desc: 'Organised fan clubs and pages that grow and stay active all season.' },
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
      { q: 'When should a contestant’s team contact you?', a: 'Ideally before the contestant enters the house, so profiles, fan pages and content are ready on day one. We can also join mid-season.' },
      { q: 'Who do you coordinate with while the contestant is inside?', a: 'Usually the family, manager or a trusted person holding the social media handover. All decisions are agreed with them.' },
      { q: 'Can you guarantee a win or a top finish?', a: 'No. Results depend on the show, the contestant’s journey and the public vote. What we guarantee is consistent, professional work that gives the contestant the strongest possible support outside the house.' },
      { q: 'Is this confidential?', a: 'Yes. We never disclose which contestants we work with without permission.' },
    ],
    related: ['bigg-boss-pr', 'x-twitter-trends', 'celebrity-pr'],
    relatedPosts: ['reality-show-fan-army-kaise-banaye', 'how-celebrities-manage-pr-in-reality-shows', 'bigg-boss-pr-how-contestants-build-fan-armies'],
  },
  {
    slug: 'movie-web-series-promotion',
    name: 'Movie & Web Series Promotion',
    icon: 'Clapperboard',
    group: 'Entertainment',
    short: 'Trailer buzz, meme campaigns and release-week hype for films and OTT shows.',
    h1: 'Movie, web series & OTT show promotion agency in India',
    metaTitle: 'Movie, Web Series & OTT Promotion Agency in India',
    metaDescription:
      'Movie promotion and OTT web series marketing in India: meme campaigns, X trends, influencer reactions, paps coverage and release-week buzz by PXR Infinity.',
    keywords: ['movie promotion agency India', 'web series promotion agency', 'OTT show promotion agency', 'meme marketing for movies', 'Twitter trend for movie release', 'film digital promotion'],
    serviceType: 'Film and OTT promotion',
    intro: [
      'A release has one shot. If people aren’t talking about it in the first week, the algorithm and the audience move on. Digital buzz now decides footfalls and watch-time as much as posters ever did.',
      'We build the conversation from the first teaser to release week — memes from your scenes, trending hashtags, creator reactions and constant media presence — so your film or series feels unmissable.',
    ],
    deliverables: [
      { title: 'Campaign roadmap', desc: 'Phase-wise plan: teaser, trailer, songs, release week, post-release.' },
      { title: 'Scene-based meme campaigns', desc: 'Memes and edits from your footage across meme pages.' },
      { title: 'Trailer & release trends', desc: 'X trends timed to trailer drops and release day.' },
      { title: 'Influencer reactions & reviews', desc: 'Creators reacting, reviewing and recommending.' },
      { title: 'Media & paps coverage', desc: 'Cast visibility, event coverage and portal features.' },
      { title: 'Post-release sustain', desc: 'Keep word-of-mouth going in week two and beyond.' },
    ],
    process: [
      { title: 'Asset review', desc: 'Footage, songs, cast availability and release dates.' },
      { title: 'Phase plan', desc: 'What goes live when, and on which platforms.' },
      { title: 'Campaign waves', desc: 'Memes, trends and creators in coordinated bursts.' },
      { title: 'Release report', desc: 'Reach, conversation volume and coverage by phase.' },
    ],
    idealFor: ['Film producers and studios', 'OTT platforms and production houses', 'Independent and regional films', 'Short films and digital series'],
    faqs: [
      { q: 'How early should promotion start?', a: 'Ideally from the first teaser, a few weeks before release. Shorter timelines are possible and work best with a bigger push in release week.' },
      { q: 'Do you work on regional films?', a: 'Yes. We select meme pages, creators and portals that match the language and region of your audience.' },
      { q: 'Can you work alongside our main marketing agency?', a: 'Absolutely. Many producers bring us in specifically for memes, trends and creator buzz while another agency handles ATL.' },
    ],
    related: ['music-album-promotion', 'meme-marketing', 'x-twitter-trends'],
    relatedPosts: ['what-is-meme-marketing-in-india'],
  },
  {
    slug: 'music-album-promotion',
    name: 'Music & Album Promotion',
    icon: 'Music',
    group: 'Entertainment',
    short: 'Reels, creator usage, playlists buzz and trends for songs, albums and artists.',
    h1: 'Music & album promotion — make your song the next reel audio',
    metaTitle: 'Music & Song Promotion Agency in India',
    metaDescription:
      'Music promotion in India for artists and labels: Instagram reels audio campaigns, influencer usage, meme pages, X trends and media coverage by PXR Infinity.',
    keywords: ['music promotion agency India', 'song promotion on Instagram reels', 'album promotion India', 'music label marketing'],
    serviceType: 'Music promotion',
    intro: [
      'Songs blow up on reels first, then on streaming. If creators aren’t using your audio, the algorithm won’t push it. Music promotion today means getting your hook into culture fast.',
      'We run creator and meme page campaigns built around your song’s best moment, plus trends and coverage around the artist — so streams, saves and searches all move together.',
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
      { q: 'Can you guarantee streams?', a: 'No. We drive awareness and creator usage, which are the biggest drivers of streams, but final numbers depend on the song and audience response.' },
      { q: 'Do you promote regional songs?', a: 'Yes — Punjabi, Haryanvi, Bhojpuri, Marathi, South Indian and more, with creators who fit each audience.' },
      { q: 'How soon after release should we start?', a: 'Best is to plan before release and start creator seeding on release day, while interest is highest.' },
    ],
    related: ['movie-web-series-promotion', 'influencer-marketing', 'personal-branding'],
    relatedPosts: ['influencer-vs-meme-marketing-for-brands'],
  },
  {
    slug: 'brand-launch-campaigns',
    name: 'Brand Launch Campaigns',
    icon: 'Rocket',
    group: 'Brands',
    short: 'Teasers, seeding and day-one noise so your launch doesn’t go unnoticed.',
    h1: 'Brand & product launch campaigns that make day one loud',
    metaTitle: 'Brand Launch Campaigns with Memes & Trends',
    metaDescription:
      'Launch your brand or product with buzz: teaser campaigns, meme marketing, influencers, X trends and PR coverage. Full launch campaigns by PXR Infinity.',
    keywords: ['brand launch campaign agency India', 'D2C brand launch marketing India', 'product launch meme marketing', 'launch PR'],
    serviceType: 'Launch marketing',
    intro: [
      'Most launches fail quietly. Not because the product is bad, but because nobody heard about it. A launch needs every channel firing together: teasers, creators, memes, media and a moment people can talk about.',
      'We plan and run integrated launches — one team, one calendar — so awareness builds before launch and peaks on the day.',
    ],
    deliverables: [
      { title: 'Launch strategy', desc: 'Positioning, big idea and a day-by-day launch calendar.' },
      { title: 'Teaser campaign', desc: 'Mystery posts, countdowns and seeding to build curiosity.' },
      { title: 'Creator & meme waves', desc: 'Influencers and meme pages going live together on launch day.' },
      { title: 'Launch-day trend', desc: 'A hashtag push to own the conversation.' },
      { title: 'PR coverage', desc: 'Founder stories and launch news on relevant portals.' },
      { title: 'Launch report', desc: 'Reach, traffic and conversation across every channel.' },
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
      { q: 'Can you work with a small budget?', a: 'Yes. We’ll prioritise the channels with the best return for your category and scale up as you grow.' },
      { q: 'Do you also handle ads?', a: 'Our focus is earned and creator-led buzz. We can coordinate with your performance-marketing team so both work together.' },
    ],
    related: ['meme-marketing', 'influencer-marketing', 'pr-media-coverage'],
    relatedPosts: ['what-is-meme-marketing-in-india', 'influencer-vs-meme-marketing-for-brands'],
  },
  {
    slug: 'crisis-pr-reputation-management',
    name: 'Crisis PR & Reputation Management',
    icon: 'ShieldAlert',
    group: 'Talent',
    short: 'Fast response, narrative control and sentiment repair when things go sideways.',
    h1: 'Crisis PR & online reputation management, fast',
    metaTitle: 'Crisis PR & Reputation Management in India',
    metaDescription:
      'Crisis PR and online reputation management in India for brands and celebrities. Rapid response, narrative control, positive coverage and search clean-up.',
    keywords: ['crisis PR agency India', 'reputation management India', 'celebrity crisis PR', 'online reputation management'],
    serviceType: 'Crisis communications',
    intro: [
      'A controversy moves in hours. The first response often decides the next six months of search results and comments. Silence, or the wrong statement, makes it worse.',
      'We help brands and public figures respond fast and calmly: assess the situation, shape the right message, shift the conversation with positive coverage and clean up what people find when they search.',
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
      { q: 'Can you remove negative articles?', a: 'We don’t promise removals we can’t control. We can request corrections where facts are wrong, and build strong positive coverage so accurate results rank higher.' },
      { q: 'Is everything confidential?', a: 'Yes, completely. We can sign an NDA before you share any details.' },
    ],
    related: ['celebrity-pr', 'pr-media-coverage', 'personal-branding'],
    relatedPosts: ['crisis-pr-guide-for-indian-celebrities'],
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    icon: 'LayoutGrid',
    group: 'Brands',
    short: 'Strategy, content and community for Instagram, X, YouTube and LinkedIn.',
    h1: 'Social media management that grows real, engaged audiences',
    metaTitle: 'Social Media Management Agency India',
    metaDescription:
      'Social media management for brands, celebrities and creators in India: strategy, content creation, reels, community management and monthly growth reports.',
    keywords: ['social media management agency India', 'Instagram management', 'social media agency for brands', 'celebrity social media management'],
    serviceType: 'Social media management',
    intro: [
      'Posting regularly isn’t a strategy. Growth comes from a clear content identity, formats that suit the platform, and showing up in culture when it matters.',
      'We manage your social accounts end to end — content calendar, design, reels, captions, community replies and reporting — with the internet-native tone that comes from running trend and meme campaigns every day.',
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
      { q: 'How many posts per month?', a: 'It depends on the package — see our pricing page or ask for a custom plan.' },
      { q: 'Do I approve content before it goes live?', a: 'Yes. You approve the monthly calendar and individual posts.' },
    ],
    related: ['personal-branding', 'meme-marketing', 'influencer-marketing'],
    relatedPosts: ['what-is-meme-marketing-in-india'],
  },
  {
    slug: 'personal-branding',
    name: 'Personal Branding',
    icon: 'UserRound',
    group: 'Talent',
    short: 'Build a name people recognise and trust — for founders, creators and professionals.',
    h1: 'Personal branding for founders, creators and public figures',
    metaTitle: 'Personal Branding Agency India',
    metaDescription:
      'Personal branding in India for founders, creators, doctors, coaches and public figures. Positioning, content, media features and verified credibility.',
    keywords: ['personal branding agency India', 'founder personal branding', 'personal brand building', 'LinkedIn personal branding'],
    serviceType: 'Personal branding',
    intro: [
      'People trust people more than logos. A strong personal brand brings deals, talent, invitations and opportunities to you instead of you chasing them.',
      'We define what you should be known for, then build it consistently — content, media features, podcast and event opportunities, and a search presence that backs up your story.',
    ],
    deliverables: [
      { title: 'Positioning', desc: 'Your niche, story and the ideas you want to own.' },
      { title: 'Content system', desc: 'Posts, reels and articles in your voice, without taking your whole week.' },
      { title: 'Media features', desc: 'Interviews and stories on relevant portals.' },
      { title: 'Search presence', desc: 'What people find when they Google your name.' },
      { title: 'Profile optimisation', desc: 'Instagram, LinkedIn and X profiles that convert visitors.' },
      { title: 'Growth reporting', desc: 'Reach, followers and opportunities generated.' },
    ],
    process: [
      { title: 'Discovery call', desc: 'Your goals, story and audience.' },
      { title: 'Positioning', desc: 'What you’ll be known for and where.' },
      { title: 'Build', desc: 'Content, features and profiles go live.' },
      { title: 'Compound', desc: 'Monthly consistency and reporting.' },
    ],
    idealFor: ['Founders and CXOs', 'Creators and influencers', 'Doctors, coaches and consultants', 'Reality-show alumni and new celebrities'],
    faqs: [
      { q: 'Do I have to create all the content myself?', a: 'No. We need some of your time for ideas and recordings, and we handle writing, editing and posting.' },
      { q: 'How long until a personal brand shows results?', a: 'You’ll see better profiles and first features within weeks; real authority builds over months of consistency.' },
      { q: 'Which platform is best for personal branding?', a: 'LinkedIn for B2B founders, Instagram for creators and public figures, and X for opinions and news. We’ll pick based on your goals.' },
    ],
    related: ['celebrity-pr', 'pr-media-coverage', 'social-media-management'],
    relatedPosts: ['crisis-pr-guide-for-indian-celebrities'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
