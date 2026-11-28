/**
 * More sub-service pages (Week 4 batch). Same shape and rules as lib/data/landing-pages.ts,
 * which imports this list into `subServicePages` and the sitemap.
 */
import type { LandingPage } from './landing-pages'

const PENDING_RANGE = '' // TODO(Sid): replace with a confirmed ₹ range, e.g. '₹X – ₹Y'

/* /services/x-twitter-trends/twitter-spaces */
const twitterSpaces: LandingPage = {
  path: '/services/x-twitter-trends/twitter-spaces',
  parent: { name: 'X / Twitter Trends', path: '/services/x-twitter-trends' },
  name: 'Twitter Spaces',
  icon: 'Users',
  metaTitle: 'Twitter Spaces Promotion and Hosting',
  metaDescription:
    'Twitter Spaces promotion: we plan, promote and host X Spaces for fans and brands. One Space we ran held 77K listeners over 2 hours 18 minutes.',
  h1: 'Twitter Spaces promotion and hosting for fans, shows and brands',
  mainKeyword: 'twitter spaces promotion',
  serviceType: 'Twitter Spaces promotion',
  promise: 'We plan the Space, get the right people to tune in, host it live and keep the conversation going after it ends.',
  whatIs: {
    title: 'What is Twitter Spaces promotion?',
    paragraphs: [
      'Twitter Spaces promotion is planning a live audio room on X, telling the right people when it starts, and running it so they stay. A Space lets fans, a brand or a show talk to their audience in real time, and the people who join usually become the most active supporters you have.',
      'It’s part of our work as a [Twitter trend agency in India](/services/x-twitter-trends). A Space and a hashtag often run together: the Space gives fans a place to gather, and the hashtag takes the moment to the trending list.',
    ],
  },
  included: [
    { title: 'Topic and run order', desc: 'What the Space is for, who speaks, and in what order.' },
    { title: 'Promotion before the Space', desc: 'Posts, reminders and fan club briefs so people set a reminder and show up.' },
    { title: 'Hosting', desc: 'An experienced host who opens, keeps time, brings speakers up and handles the room.' },
    { title: 'Co-hosts and moderation', desc: 'Co-hosts who manage requests and keep the room friendly.' },
    { title: 'Clips and recap', desc: 'Short clips and a recap post so people who missed it can catch up.' },
    { title: 'Report', desc: 'Peak listeners, duration and the posts that came out of the Space.' },
  ],
  process: [
    { title: 'Brief', desc: 'The moment, the audience and who should speak.' },
    { title: 'Plan', desc: 'Date, time, topic, speakers and run order.' },
    { title: 'Promote', desc: 'Reminders and briefs in the days and hours before.' },
    { title: 'Go live', desc: 'We host, moderate and keep energy up.' },
    { title: 'Recap', desc: 'Clips, recap post and the report.' },
  ],
  whoFor: {
    title: 'Who uses Twitter Spaces',
    items: [
      'Reality show contestants and fan clubs',
      'Films and series around release',
      'Artists before a song drop',
      'Brands launching a product or feature',
      'Founders and experts building a following',
    ],
  },
  sections: [
    {
      id: 'spaces-for-brands',
      eyebrow: 'Twitter Spaces for brands',
      title: 'Twitter Spaces for brands: when it works',
      paragraphs: [
        'Twitter Spaces for brands work best when there’s something live to talk about: a launch, an announcement, an AMA with the founder, or a conversation with creators people already like. A Space where a brand just reads out features loses people fast. A Space where listeners can ask questions and get honest answers keeps them.',
        'For fan-driven moments, like a reality show week or a release, a Space gives supporters one place to plan together. That’s why we often pair it with a [Twitter hashtag campaign](/services/x-twitter-trends/hashtag-campaigns) the same day.',
      ],
    },
    {
      id: 'hosting',
      eyebrow: 'X Spaces hosting',
      title: 'X Spaces hosting: a simple run order',
      table: {
        caption: 'A simple run order for a one-hour X Space',
        head: ['Time', 'What happens'],
        rows: [
          ['Before start', 'Reminder posts, fan club and community briefs'],
          ['0–5 min', 'Host opens, explains the topic, welcomes early listeners'],
          ['5–30 min', 'Main speakers, with the host keeping time'],
          ['30–50 min', 'Listener questions and requests to speak'],
          ['50–60 min', 'Wrap-up, next steps, hashtag or call to action'],
          ['After', 'Clips, recap post and report'],
        ],
      },
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Before your Space goes live',
      checklist: [
        'One clear reason to join, written in one line',
        'Date and time shared at least a day ahead',
        'Speakers briefed, with a backup if someone drops',
        'Co-hosts ready to manage requests',
        'A plan for what happens right after the Space',
      ],
    },
  ],
  proof: {
    title: 'Spaces we’ve run',
    paragraphs: [
      'For Rajat Dalal in Bigg Boss 18, our Space ran 2 hours 18 minutes with 77K people tuned in. Fans used it to follow the week’s episodes and plan together, alongside the hashtags for every key moment.',
    ],
    caseStudies: ['rajat-dalal-bigg-boss-18-pr-campaign'],
  },
  pricing: {
    title: 'What Twitter Spaces promotion costs',
    paragraphs: [
      'Cost depends on how many Spaces you run, how much promotion goes before each one, and whether you add a hashtag campaign. We quote after the brief. See [pricing](/pricing) or the full [X / Twitter Trends](/services/x-twitter-trends) service.',
    ],
    rows: [
      { scope: 'Single Space', includes: 'Plan, promotion, hosting, recap and report', range: PENDING_RANGE },
      { scope: 'Weekly Spaces', includes: 'A Space every week across a season or launch', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What is Twitter Spaces promotion?', a: 'Planning a live audio room on X, promoting it so the right people tune in, and hosting it so they stay.' },
    { q: 'Do you host the Space for us?', a: 'Yes. We can host from our account, or co-host on yours while your team or talent speaks.' },
    { q: 'How long should a Space be?', a: 'Long enough to cover the topic and take questions. An hour suits most brand Spaces; fan Spaces around big moments often run longer.' },
    { q: 'Can a Space help a hashtag trend?', a: 'Yes. A Space brings fans together at the same time, which makes a hashtag push the same day easier to coordinate.' },
    { q: 'Can the Space be in Hindi or a regional language?', a: 'Yes. We plan speakers and hosts for the audience’s language.' },
  ],
  related: [
    { title: 'X / Twitter Trends', desc: 'Full trend campaigns and season plans.', href: '/services/x-twitter-trends' },
    { title: 'Hashtag Campaigns', desc: 'One hashtag, one moment, run live.', href: '/services/x-twitter-trends/hashtag-campaigns' },
    { title: 'Fan Club Management', desc: 'Organised fan clubs that show up every time.', href: '/services/celebrity-pr/fan-club-management' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/meme-marketing/moment-marketing */
const momentMarketing: LandingPage = {
  path: '/services/meme-marketing/moment-marketing',
  parent: { name: 'Meme Marketing', path: '/services/meme-marketing' },
  name: 'Moment Marketing',
  icon: 'Zap',
  metaTitle: 'Moment Marketing Agency India',
  metaDescription:
    'Moment marketing agency India: topical memes and real-time posts for matches, releases and viral moments, placed on our network of 25,000+ meme pages.',
  h1: 'Moment marketing agency in India for topical memes and real-time posts',
  mainKeyword: 'moment marketing agency india',
  serviceType: 'Moment marketing agency India',
  promise: 'When the internet is talking about something, we help your brand join in fast, on-brand and in good taste, then get it in front of the right people.',
  whatIs: {
    title: 'What is moment marketing?',
    paragraphs: [
      'Moment marketing is when a brand reacts to something people are already talking about, like a cricket match, a film release, a viral clip or a festival, with content made for that moment. Because people are already paying attention, a good topical post gets seen and shared far more than a normal ad.',
      'It’s one part of what we do as a [meme marketing agency in India](/services/meme-marketing). The difference is speed: a full meme campaign is planned weeks ahead, while moment marketing often goes from idea to live in hours.',
    ],
  },
  included: [
    { title: 'Moment calendar', desc: 'Matches, releases, festivals and award shows mapped for your brand each month.' },
    { title: 'Tone and limits', desc: 'Agreed rules on what your brand will and won’t joke about.' },
    { title: 'Fast creative', desc: 'Topical memes, posts and reels written and designed quickly.' },
    { title: 'Quick approvals', desc: 'A short approval path so content goes live while the moment is still hot.' },
    { title: 'Meme page push', desc: 'The best topical posts placed on meme pages to reach beyond your followers.' },
    { title: 'Report', desc: 'Reach, shares and comments for each moment post.' },
  ],
  process: [
    { title: 'Set rules', desc: 'Tone, topics to avoid and who approves.' },
    { title: 'Plan the calendar', desc: 'Known moments mapped and prepared ahead.' },
    { title: 'Watch', desc: 'We track what’s trending and flag moments that fit.' },
    { title: 'Create and approve', desc: 'Content made and signed off fast.' },
    { title: 'Post and push', desc: 'Live on your handles, with meme pages for the best ones.' },
  ],
  whoFor: {
    title: 'Who moment marketing suits',
    items: ['Consumer and D2C brands', 'Food, delivery and beverage brands', 'Apps and fintech', 'OTT platforms and channels', 'Any brand with a playful tone'],
  },
  sections: [
    {
      id: 'topical-memes',
      eyebrow: 'Topical memes',
      title: 'Topical memes: planned moments and surprise moments',
      paragraphs: [
        'There are two kinds of moments. Planned ones, like a big match, a festival, a release date or an award night, can be prepared days ahead, so the post is ready the minute it happens. Surprise ones, like a viral clip or a funny news story, need someone watching and a team that can write, design and get approval within hours.',
        'Topical memes work when they’re genuinely funny and your brand fits naturally. Forcing a product into every trend makes people roll their eyes. We’d rather skip a moment than post something that doesn’t fit.',
      ],
      table: {
        caption: 'Planned and surprise moments compared',
        head: ['', 'Planned moments', 'Surprise moments'],
        rows: [
          ['Examples', 'Matches, festivals, releases, award shows', 'Viral clips, news, memes of the day'],
          ['Prep time', 'Days or weeks', 'Hours'],
          ['Approval', 'Normal review', 'Fast-track, agreed in advance'],
          ['Risk', 'Lower, content is checked calmly', 'Higher, so rules on tone matter more'],
        ],
      },
    },
    {
      id: 'real-time',
      eyebrow: 'Real-time marketing',
      title: 'Real-time marketing without the risk',
      paragraphs: [
        'Real-time marketing goes wrong when a brand jokes about something sensitive, or posts late and looks out of touch. We agree on the no-go topics before we start: tragedies, religion, politics, anything that could hurt someone. Every post still gets a human check before it goes live.',
        'For the moments that land, we push them further through [meme page promotion](/services/meme-marketing/meme-page-promotion) and, when it fits, a [Twitter hashtag campaign](/services/x-twitter-trends/hashtag-campaigns).',
      ],
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Is this moment right for your brand?',
      checklist: [
        'Does your audience actually care about it?',
        'Is there a natural link to your product?',
        'Is it still fresh, or is everyone already done with it?',
        'Could anyone be hurt by the joke?',
        'Can you get approval in time?',
      ],
    },
  ],
  proof: {
    title: 'Speed in our campaigns',
    paragraphs: [
      'Moment marketing runs on the same network and team as our meme campaigns: 25,000+ meme pages and people who live on the internet. During Niharika Tiwari’s Rise & Fall campaign, when a controversy broke mid-season, her side of the story was out across media pages, meme pages and X quickly instead of days later.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist'],
  },
  pricing: {
    title: 'What moment marketing costs',
    paragraphs: [
      'Moment marketing usually runs as a monthly plan, priced by the number of moment posts, how fast approvals need to be and how many get pushed on meme pages. We quote after the brief. See [pricing](/pricing) and [How much does meme marketing cost in India?](/blog/how-much-does-meme-marketing-cost-in-india).',
    ],
    rows: [
      { scope: 'Monthly moment plan', includes: 'Calendar, topical posts, fast approvals, report', range: PENDING_RANGE },
      { scope: 'Single big moment', includes: 'Prepared posts and meme page push for one event', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What does a moment marketing agency do?', a: 'It watches what people are talking about, picks moments that fit your brand, makes topical content fast and gets it live while the moment is still hot.' },
    { q: 'How fast can you post?', a: 'Planned moments are ready before they happen. For surprise moments, speed depends on how quickly your team can approve; we agree a fast-track path in advance.' },
    { q: 'What if a moment is sensitive?', a: 'We skip it. No-go topics are agreed before we start, and every post gets a human check.' },
    { q: 'Do moment posts go on meme pages too?', a: 'The best ones can. We push them on meme pages matched to your audience so they reach beyond your followers.' },
    { q: 'Is moment marketing only for funny brands?', a: 'No. Serious brands can join moments with a clever, helpful or warm angle instead of a joke.' },
  ],
  related: [
    { title: 'Meme Marketing', desc: 'Full meme campaigns and strategy.', href: '/services/meme-marketing' },
    { title: 'Meme Page Promotion', desc: 'Push your best posts on the right pages.', href: '/services/meme-marketing/meme-page-promotion' },
    { title: 'Instagram Promotion', desc: 'Meme pages, entertainment pages and creators.', href: '/services/instagram-promotion' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/movie-web-series-promotion/trailer-promotion */
const trailerPromotion: LandingPage = {
  path: '/services/movie-web-series-promotion/trailer-promotion',
  parent: { name: 'Movie & Web Series Promotion', path: '/services/movie-web-series-promotion' },
  name: 'Trailer Promotion',
  icon: 'Clapperboard',
  metaTitle: 'Trailer Promotion Services for Films and OTT',
  metaDescription:
    'Trailer promotion services: X trends, scene memes and creator reactions on trailer day for films and series. Our OTT finale-day trend reached #1 in India.',
  h1: 'Trailer promotion services that make trailer day the day people talk about you',
  mainKeyword: 'trailer promotion services',
  serviceType: 'Trailer promotion services',
  promise: 'We plan the first hours after your trailer drops: a hashtag on X, memes on Instagram, creator reactions and portal coverage, all landing together.',
  whatIs: {
    title: 'What are trailer promotion services?',
    paragraphs: [
      'Trailer promotion services get a film or series trailer seen, shared and talked about in the first hours after it drops, through X trends, meme pages, creator reactions and media coverage. Trailer day is usually the biggest online moment before release, and what happens in those hours shapes how people talk about the title.',
      'It’s one phase of our work as a [movie promotion agency in India](/services/movie-web-series-promotion), and it can also run as a stand-alone campaign.',
    ],
  },
  included: [
    { title: 'Trailer-day plan', desc: 'An hour-by-hour plan for the drop and the first two days.' },
    { title: 'X trend', desc: 'A hashtag push timed with the drop.' },
    { title: 'Scene memes', desc: 'Memes and edits from approved trailer moments on matched meme pages.' },
    { title: 'Creator reactions', desc: 'Creators reacting to and breaking down the trailer.' },
    { title: 'Portal and page coverage', desc: 'Entertainment pages and portals covering the launch.' },
    { title: 'Report', desc: 'Trend position, post links, reach and coverage in one place.' },
  ],
  process: [
    { title: 'Asset review', desc: 'Trailer, stills, cast availability and embargo rules.' },
    { title: 'Plan', desc: 'Hashtag, pages, creators and timing.' },
    { title: 'Prep', desc: 'Memes, briefs and content bank approved before the drop.' },
    { title: 'Drop day', desc: 'Everything goes live in planned waves.' },
    { title: 'Report', desc: 'What happened, with every link.' },
  ],
  whoFor: {
    title: 'Who uses trailer promotion',
    items: ['Film producers and studios', 'OTT platforms and production houses', 'Regional and independent films', 'Web series and digital shows'],
  },
  sections: [
    {
      id: 'twitter-trend-for-movie-promotion',
      eyebrow: 'X trends',
      title: 'Twitter trend for movie promotion on trailer day',
      paragraphs: [
        'A trailer hashtag in the trending list tells fans, media and the algorithm that people care. We pick the hashtag, check it isn’t in use, prepare a content bank of lines, stills and GIFs, and brief fan communities to post together when the trailer goes live. For a stand-alone push, see our [Twitter hashtag campaign services](/services/x-twitter-trends/hashtag-campaigns).',
      ],
    },
    {
      id: 'meme-marketing-for-movies',
      eyebrow: 'Memes',
      title: 'Meme marketing for movies: trailer moments people share',
      paragraphs: [
        'Every trailer has a few seconds that work as memes: a dialogue, a reaction shot, a dramatic pause. We pick them from the assets you approve and match them to pages whose followers fit the film, from Bollywood and OTT pages to college humour and regional pages. Read more on [meme page promotion](/services/meme-marketing/meme-page-promotion).',
      ],
    },
    {
      id: 'influencer-marketing-for-movies',
      eyebrow: 'Creators',
      title: 'Influencer marketing for movies: reactions and breakdowns',
      paragraphs: [
        'Creator reactions bring the trailer to people who don’t follow the cast. Regional creators matter too: a Punjabi or Telugu creator reacting in their own language reaches viewers a national creator would miss. We share creator shortlists with costs before booking, and every creator gets the trailer under embargo so reactions go live together.',
        'We mix film and OTT creators who break down the trailer with lifestyle and comedy creators who react in their own style.',
      ],
      table: {
        caption: 'Trailer-day plan by time',
        head: ['When', 'What goes live'],
        rows: [
          ['Drop time', 'Trailer, official posts, hashtag push starts'],
          ['First hour', 'Meme page wave one, first creator reactions, portal stories'],
          ['Hours 2–6', 'More creators, meme wave two, X content continues'],
          ['Day 2', 'Breakdown videos, fan edits, sustain posts'],
        ],
      },
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Before trailer day',
      checklist: [
        'Final trailer and stills approved for use',
        'Embargo time confirmed with everyone',
        'Hashtag checked and content bank ready',
        'Meme drafts and creator briefs signed off',
        'Cast posts scheduled for the same window',
      ],
    },
  ],
  proof: {
    title: 'Release trends we’ve run',
    paragraphs: [
      'For Prime Video’s The Alliance we covered all 42 daily episodes over a six-week season and planned a finale-day trend that reached #1 in India. The show was renewed for Season 2. Trailer campaigns use the same playbook, packed into one day.',
    ],
    caseStudies: ['the-alliance-prime-video-x-campaign'],
  },
  pricing: {
    title: 'What trailer promotion costs',
    paragraphs: [
      'Cost depends on the size of the trend, how many meme pages and creators you use, and whether the target is national or regional. Read [movie promotion cost in India](/blog/movie-promotion-cost-india) for a phase-by-phase guide, or see [pricing](/pricing).',
    ],
    rows: [
      { scope: 'Trailer day', includes: 'X trend, meme pages, creators, portals, report', range: PENDING_RANGE },
      { scope: 'Trailer plus songs', includes: 'Trailer day plus pushes for each song drop', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What do trailer promotion services include?', a: 'A trailer-day plan, an X trend, scene memes on meme pages, creator reactions, portal coverage and a report with every link.' },
    { q: 'Can you run trailer promotion only?', a: 'Yes. Trailer day can run as a stand-alone campaign, or as one phase of a full release plan.' },
    { q: 'Do you need the trailer before it drops?', a: 'Yes, under embargo, so memes and briefs are ready. Nothing goes out before the agreed time.' },
    { q: 'Can you promote a regional film trailer?', a: 'Yes. We use meme pages, creators and portals that speak the film’s language.' },
    { q: 'Can you promise trailer views?', a: 'No. Views depend on the trailer and the competition that day. We commit to the plan, the timing and honest reporting.' },
  ],
  related: [
    { title: 'Movie & Web Series Promotion', desc: 'Every phase from first look to OTT premiere.', href: '/services/movie-web-series-promotion' },
    { title: 'Hashtag Campaigns', desc: 'A trailer-day hashtag push on X.', href: '/services/x-twitter-trends/hashtag-campaigns' },
    { title: 'YouTube Promotion', desc: 'More of the right viewers for the trailer itself.', href: '/services/youtube-promotion' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/celebrity-pr/fan-club-management */
const fanClubManagement: LandingPage = {
  path: '/services/celebrity-pr/fan-club-management',
  parent: { name: 'Celebrity PR', path: '/services/celebrity-pr' },
  name: 'Fan Club Management',
  icon: 'Users',
  metaTitle: 'Fan Club Management Services',
  metaDescription:
    'Fan club management services for actors, contestants and artists: one message, daily posting and live Spaces. One campaign drew 210K mentions in five days.',
  h1: 'Fan club management services that turn scattered fans into one voice',
  mainKeyword: 'fan club management services',
  serviceType: 'Fan club management services',
  promise: 'We bring your fan clubs together around one message, give them content and a rhythm, and keep them active through every big moment.',
  whatIs: {
    title: 'What is fan club management?',
    paragraphs: [
      'Fan club management is organising the fan pages and communities around an actor, contestant, artist or creator so they post the same message, at the right time, with good content. Without it, fans are often split across many pages, each saying something different. With it, they show up together.',
      'It’s a core part of our work as a [celebrity PR agency in India](/services/celebrity-pr), and it matters most during reality shows, releases and difficult moments.',
    ],
  },
  included: [
    { title: 'Fan page mapping', desc: 'Who the active fan clubs are, how big they are, and who runs them.' },
    { title: 'One shared message', desc: 'A clear line for each week or moment that every club can use.' },
    { title: 'Content supply', desc: 'Edits, images, lines and clips so fans post good, varied content.' },
    { title: 'Posting rhythm', desc: 'A daily or weekly schedule so fans post together.' },
    { title: 'Live Spaces and groups', desc: 'X Spaces and group chats where fans plan together.' },
    { title: 'Community rules', desc: 'Clear guidance on staying respectful, even with rival fans.' },
  ],
  process: [
    { title: 'Map', desc: 'Find and list the active fan clubs and pages.' },
    { title: 'Connect', desc: 'Reach out to admins and set up one coordination channel.' },
    { title: 'Brief', desc: 'Share the message, content and schedule.' },
    { title: 'Run', desc: 'Daily support, Spaces and hashtags for key moments.' },
    { title: 'Review', desc: 'What worked each week, and what to change.' },
  ],
  whoFor: {
    title: 'Who needs fan club management',
    items: ['Reality show contestants', 'TV and film actors', 'Singers and artists', 'Creators with a big following', 'Families and managers handling a contestant’s accounts'],
  },
  sections: [
    {
      id: 'how-it-works',
      eyebrow: 'Fan club management',
      title: 'How fan club management works week to week',
      paragraphs: [
        'Every week has a message, decided with the talent’s team. Fan clubs get it with a content bank and a posting time. Big moments, like a nomination, a captaincy, a release or a birthday, get their own hashtag and often a live Space. In between, we keep admins supported so they don’t burn out.',
        'If you’re a contestant’s family or manager, our guide [fan club guide for contestants](/blog/fan-club-guide-for-contestants) explains roles and a weekly plan in detail.',
      ],
      table: {
        caption: 'A sample week of fan club management',
        head: ['Day', 'What fans do'],
        rows: [
          ['Start of week', 'New message and content bank shared with all clubs'],
          ['Daily', 'Posts at the agreed time, replies and fan edits'],
          ['Key moment', 'Hashtag push, often with a live Space'],
          ['End of week', 'Recap posts and thank-you to fans'],
        ],
      },
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Signs your fan clubs need management',
      checklist: [
        'Fan pages are posting different, sometimes clashing, messages',
        'Hashtags start late or at different times',
        'Content is repetitive or low quality',
        'Admins are tired or fighting with each other',
        'Fans react badly to rivals and it hurts the talent’s image',
      ],
    },
    {
      id: 'with-other',
      eyebrow: 'Works with',
      title: 'Fan clubs, Spaces and trends together',
      paragraphs: [
        'Good fan club management also protects the talent. When fans are angry about something on the show or in the news, a calm message from the team, shared through the clubs, stops things from spiralling. Respectful fans make the talent look good; fights make them look bad.',
        'Organised fans make everything else easier: a [Twitter Spaces](/services/x-twitter-trends/twitter-spaces) session fills up, a [Twitter hashtag campaign](/services/x-twitter-trends/hashtag-campaigns) climbs faster, and meme and media pages see real interest worth covering.',
      ],
    },
  ],
  proof: {
    title: 'Fan clubs we’ve organised',
    paragraphs: [
      'For Rajat Dalal in Bigg Boss 18, we brought his separate fan clubs together around one message, with shared hashtags, daily posting and live X Spaces. #RajatIsTheBoss logged 210K mentions in five days. For Mridul Tiwari in Bigg Boss 19, fans posted together on one message a week, and three of his trends reached #1 in India.',
    ],
    caseStudies: ['rajat-dalal-bigg-boss-18-pr-campaign', 'mridul-tiwari-bigg-boss-19-x-trends'],
  },
  pricing: {
    title: 'What fan club management costs',
    paragraphs: [
      'Fan club management usually runs monthly or for a full season. Cost depends on how many clubs, how much content they need and how many hashtags and Spaces are planned. See [pricing](/pricing).',
    ],
    rows: [
      { scope: 'Monthly', includes: 'Coordination, weekly message, content bank', range: PENDING_RANGE },
      { scope: 'Full reality show season', includes: 'Daily support, hashtags, Spaces, finale push', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What do fan club management services include?', a: 'Mapping the active fan clubs, one shared message, a content bank, a posting rhythm, live Spaces and hashtags for big moments.' },
    { q: 'Do you create fan pages?', a: 'We work with the real fan clubs that already exist and help new genuine fans organise. We don’t pretend to be fans.' },
    { q: 'Who decides the message?', a: 'The talent’s team, with our suggestions. Nothing goes to fans without their OK.' },
    { q: 'Can you handle fan clubs during a reality show?', a: 'Yes. That’s where we do most of this work, coordinating with the family or manager while the contestant is inside.' },
    { q: 'How do you deal with fan fights?', a: 'We set clear rules on staying respectful and ask admins to avoid replying to provocation. Fan fights usually hurt the talent more than the rival.' },
  ],
  related: [
    { title: 'Celebrity PR', desc: 'Image, media and long-term PR.', href: '/services/celebrity-pr' },
    { title: 'Twitter Spaces', desc: 'Live audio rooms for fans.', href: '/services/x-twitter-trends/twitter-spaces' },
    { title: 'Bigg Boss PR', desc: 'Full PR for Bigg Boss contestants.', href: '/services/bigg-boss-pr' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/pr-media-coverage/press-release-distribution */
const pressReleaseDistribution: LandingPage = {
  path: '/services/pr-media-coverage/press-release-distribution',
  parent: { name: 'PR & Media Coverage', path: '/services/pr-media-coverage' },
  name: 'Press Release Distribution',
  icon: 'Newspaper',
  metaTitle: 'Press Release Distribution India',
  metaDescription:
    'Press release distribution India: writing, sending and follow-up to news and entertainment desks. One campaign earned interviews with 6 national outlets.',
  h1: 'Press release distribution in India, written so editors actually use it',
  mainKeyword: 'press release distribution india',
  serviceType: 'Press release distribution India',
  promise: 'We write your release, send it to the right desks, follow up, and give you every live link. You’ll know before we start which coverage is earned and which is sponsored.',
  whatIs: {
    title: 'What is press release distribution?',
    paragraphs: [
      'Press release distribution is sending your official announcement, like a launch, funding, release, appointment or milestone, to journalists and news desks so they can publish it. In India that usually means national, regional, business and entertainment portals, plus wire services for wider pickup.',
      'It’s one part of our work as a [PR agency in India](/services/pr-media-coverage). A release on its own rarely makes news; a good story, sent to the right people at the right time, does.',
    ],
  },
  included: [
    { title: 'Story angle', desc: 'The hook that makes an editor care, found before anything is written.' },
    { title: 'Release writing', desc: 'A clear headline, the facts up top, quotes and contact details.' },
    { title: 'Media list', desc: 'National, regional, business and entertainment desks matched to your story.' },
    { title: 'Distribution and follow-up', desc: 'Sent, then followed up with the editors most likely to use it.' },
    { title: 'News article publishing', desc: 'Sponsored articles on portals where earned pickup isn’t enough, always labelled in your plan.' },
    { title: 'Coverage report', desc: 'Every live link, outlet and date.' },
  ],
  process: [
    { title: 'Brief', desc: 'The announcement, the date and the audience.' },
    { title: 'Angle and draft', desc: 'We find the story and write the release for your approval.' },
    { title: 'Media list', desc: 'Outlets shared with you before sending.' },
    { title: 'Send and follow up', desc: 'Distribution on the agreed day, then follow-ups.' },
    { title: 'Report', desc: 'All coverage in one place.' },
  ],
  whoFor: {
    title: 'Who uses press release distribution',
    items: ['Startups and D2C brands', 'Films, OTT shows and music releases', 'Celebrities and public figures', 'Founders and companies with news', 'Events and award announcements'],
  },
  sections: [
    {
      id: 'news-article-publishing',
      eyebrow: 'News article publishing services',
      title: 'Earned coverage vs news article publishing services',
      paragraphs: [
        'Earned coverage is when a journalist chooses to write about you. It carries the most trust, but nobody can promise it. News article publishing services place a sponsored article on a portal on an agreed date. It’s reliable, but it’s paid, and readers may see it marked that way. Most plans use both, and we always tell you which is which.',
      ],
      table: {
        caption: 'Earned coverage and sponsored articles compared',
        head: ['', 'Earned coverage', 'Sponsored article'],
        rows: [
          ['How it happens', 'Editor chooses to publish', 'Placed on an agreed date'],
          ['Certainty', 'Not certain', 'Agreed in advance'],
          ['Trust', 'Highest', 'Good, if the content is useful'],
          ['Best for', 'Real news, strong stories', 'Launch dates, search presence'],
        ],
      },
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'A press release that gets used',
      checklist: [
        'A headline that says what happened, not a slogan',
        'Who, what, when, where and why in the first paragraph',
        'One or two real quotes',
        'Photos or a media kit link',
        'A contact who will actually answer the phone',
      ],
      note: 'Read more: How to Get Media Coverage in India, on our blog.',
    },
    {
      id: 'beyond',
      eyebrow: 'Beyond the release',
      title: 'Taking the news beyond the portals',
      paragraphs: [
        'Timing matters as much as the release. Send too early and editors forget; too late and the news is old. We usually send on the morning of the announcement, avoid days with big competing news, and prepare a short version for editors who want just the facts. For film, music and OTT news, entertainment desks often move fastest, so they get the release first.',
        'An article reaches people who read news. To reach people who scroll, we share the same news through entertainment pages and [Instagram promotion](/services/instagram-promotion), and for appearances, [paps page promotion](/services/pr-media-coverage/paps-page-promotion).',
      ],
    },
  ],
  proof: {
    title: 'Coverage we’ve secured',
    paragraphs: [
      'For Niharika Tiwari on Rise & Fall Season 2, we lined up six interviews with The Times of India, Hindustan Times, Times Now, India Forums and NewsX, and two online features in Dainik Bhaskar and ABP Live.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist'],
  },
  pricing: {
    title: 'What press release distribution costs',
    paragraphs: [
      'Cost depends on how many outlets, whether you add sponsored articles, and how much writing and follow-up is needed. See [pricing](/pricing) or [PR agency charges in India](/blog/pr-agency-charges-in-india).',
    ],
    rows: [
      { scope: 'Single release', includes: 'Writing, media list, distribution, follow-up, report', range: PENDING_RANGE },
      { scope: 'Release plus articles', includes: 'The above plus sponsored articles on chosen portals', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What is press release distribution in India?', a: 'Writing your announcement and sending it to national, regional, business and entertainment desks so they can publish it, then following up and reporting the coverage.' },
    { q: 'Can you promise coverage in a specific outlet?', a: 'Not for earned coverage; that’s the editor’s choice. Sponsored articles can be agreed in advance, and we label them clearly in your plan.' },
    { q: 'Do you write the release?', a: 'Yes. We find the angle, write it and send it to you for approval.' },
    { q: 'Can the release go out in Hindi?', a: 'Yes. We can prepare Hindi and English versions for the right desks.' },
    { q: 'How soon after sending does coverage appear?', a: 'Usually within a few days for timely news. Follow-ups matter, so we keep going for the first week.' },
  ],
  related: [
    { title: 'PR & Media Coverage', desc: 'Full media and digital PR.', href: '/services/pr-media-coverage' },
    { title: 'Paps Page Promotion', desc: 'Appearances on paparazzi pages.', href: '/services/pr-media-coverage/paps-page-promotion' },
    { title: 'Brand Launch Campaigns', desc: 'Launches that make day one loud.', href: '/services/brand-launch-campaigns' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/crisis-pr-reputation-management/online-reputation-management */
const onlineReputationManagement: LandingPage = {
  path: '/services/crisis-pr-reputation-management/online-reputation-management',
  parent: { name: 'Crisis PR & Reputation Management', path: '/services/crisis-pr-reputation-management' },
  name: 'Online Reputation Management',
  icon: 'ShieldAlert',
  metaTitle: 'Online Reputation Management Company India',
  metaDescription:
    'Online reputation management company in India: honest search clean-up through corrections and accurate content. Fully confidential, NDA on request.',
  h1: 'An online reputation management company in India that fixes search honestly',
  mainKeyword: 'online reputation management company in india',
  serviceType: 'Online reputation management company in India',
  promise: 'We make sure what people find when they search your name is accurate and recent, through corrections where facts are wrong and real content that deserves to rank. No promises of removal.',
  whatIs: {
    title: 'What does an online reputation management company do?',
    paragraphs: [
      'An online reputation management company works on what people find about you or your brand online, mostly on Google and social media, so that it’s accurate, fair and up to date. That means finding what’s hurting you, correcting what’s wrong, and publishing real, useful content that gives searchers the full picture.',
      'It’s the long-term side of our work as a [crisis PR agency in India](/services/crisis-pr-reputation-management). Crisis PR handles the first days of a problem; reputation management makes sure search results still look right months later.',
    ],
  },
  included: [
    { title: 'Search audit', desc: 'What shows up for your name on Google, YouTube and social, and what it says.' },
    { title: 'Correction requests', desc: 'Requests to publishers where facts are wrong or out of date.' },
    { title: 'Accurate content', desc: 'Articles, interviews and profiles about your real work.' },
    { title: 'Profile clean-up', desc: 'Your own profiles and pages updated so they rank and tell the truth.' },
    { title: 'Monitoring', desc: 'Alerts when new mentions appear, so nothing surprises you.' },
    { title: 'Monthly report', desc: 'How your search results have changed, with every new link.' },
  ],
  process: [
    { title: 'Confidential brief', desc: 'What happened and what worries you, under NDA if you want.' },
    { title: 'Audit', desc: 'A full picture of your search results today.' },
    { title: 'Plan', desc: 'Corrections, content and profiles, in priority order.' },
    { title: 'Execute', desc: 'Requests sent, content published, profiles fixed.' },
    { title: 'Monitor', desc: 'Monthly tracking and adjustments.' },
  ],
  whoFor: {
    title: 'Who needs online reputation management',
    items: ['Celebrities, actors and contestants', 'Founders and executives', 'Brands after a bad news cycle', 'Doctors and professionals', 'Anyone whose old news still ranks first'],
  },
  sections: [
    {
      id: 'negative-news',
      eyebrow: 'Negative results',
      title: 'Can you remove negative news from Google?',
      paragraphs: [
        'Usually not, and anyone who promises to is not being honest with you. Google shows what publishers publish. What we can do is ask publishers to correct facts that are wrong or out of date, use the reporting routes platforms offer for content that breaks their rules, and publish accurate, recent content that deserves to rank. Over time, people searching your name see the full, current picture instead of one old story.',
      ],
      table: {
        caption: 'What reputation management can and cannot do',
        head: ['We can', 'We can’t'],
        rows: [
          ['Request corrections where facts are wrong', 'Promise that any article will be removed'],
          ['Use platform reporting for rule-breaking content', 'Make search engines hide true reporting'],
          ['Publish accurate interviews and articles', 'Publish anything misleading about you or others'],
          ['Update and strengthen your own profiles', 'Promise a set position in search results'],
        ],
      },
    },
    {
      id: 'celebrity-rm',
      eyebrow: 'Celebrity reputation management agency',
      title: 'Working as a celebrity reputation management agency',
      paragraphs: [
        'For public figures, reputation lives as much on Instagram and X as on Google. We combine search work with interviews, media coverage, fan community briefing and calm, consistent messaging. For coverage, see [press release distribution](/services/pr-media-coverage/press-release-distribution); for fan communities, [fan club management](/services/celebrity-pr/fan-club-management).',
      ],
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Start here: a quick reputation check',
      checklist: [
        'Search your name in a private browser window and note the first page',
        'Check image and video results too',
        'List anything factually wrong, with proof',
        'Make sure your own profiles are complete and up to date',
        'Set up alerts for your name',
      ],
    },
  ],
  proof: {
    title: 'How we’ve handled reputation',
    paragraphs: [
      'When a controversy broke mid-season during Niharika Tiwari’s Rise & Fall campaign, her side of the story was out across media pages, meme pages and X quickly, so audiences heard her version while the conversation was still happening. Most reputation work is confidential, so we share more examples privately.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist'],
  },
  pricing: {
    title: 'What online reputation management costs',
    paragraphs: [
      'Reputation work usually runs for several months, because search results change slowly. Cost depends on how much needs fixing and how much new content is needed. We quote after a confidential audit. See [pricing](/pricing).',
    ],
    rows: [
      { scope: 'Audit and plan', includes: 'Full search audit and a prioritised plan', range: PENDING_RANGE },
      { scope: 'Monthly reputation work', includes: 'Corrections, content, profiles, monitoring, report', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What does an online reputation management company in India do?', a: 'It audits what people find about you online, requests corrections where facts are wrong, publishes accurate content and keeps monitoring, so search results reflect the full, current picture.' },
    { q: 'Can you delete a negative article?', a: 'We don’t promise removals. We request corrections where facts are wrong and build accurate content so current, fair results rank higher.' },
    { q: 'How long does reputation management take?', a: 'Usually a few months. Search results change slowly, so it’s ongoing work rather than a one-time fix.' },
    { q: 'Is it confidential?', a: 'Yes, completely. We can sign an NDA before you share anything.' },
    { q: 'What is ORM?', a: 'ORM stands for online reputation management: managing what people find and say about you or your brand online.' },
  ],
  related: [
    { title: 'Crisis PR & Reputation Management', desc: 'Fast response when something breaks.', href: '/services/crisis-pr-reputation-management' },
    { title: 'Press Release Distribution', desc: 'Accurate stories in the right outlets.', href: '/services/pr-media-coverage/press-release-distribution' },
    { title: 'Personal Branding', desc: 'A strong, accurate presence built over time.', href: '/services/personal-branding' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/reality-show-pr/regional-bigg-boss */
const regionalBiggBoss: LandingPage = {
  path: '/services/reality-show-pr/regional-bigg-boss',
  parent: { name: 'Reality Show PR', path: '/services/reality-show-pr' },
  name: 'Regional Bigg Boss PR',
  icon: 'Tv',
  metaTitle: 'Bigg Boss Telugu PR and Regional Seasons',
  metaDescription:
    'Bigg Boss Telugu PR, Tamil and other regional seasons: fan clubs, X trends and meme pages in the audience’s language. 650+ X trends run so far.',
  h1: 'Bigg Boss Telugu PR, Tamil PR and regional season campaigns',
  mainKeyword: 'bigg boss telugu pr',
  serviceType: 'Bigg Boss Telugu PR',
  promise: 'We run contestant PR for regional Bigg Boss seasons in the audience’s own language: fan clubs, trends, meme pages and media, planned week by week.',
  whatIs: {
    title: 'What is Bigg Boss Telugu PR?',
    paragraphs: [
      'Bigg Boss Telugu PR is the work done outside the house to support a contestant in the Telugu season: organising fan clubs, running X trends, getting the contestant’s moments onto Telugu meme and media pages, and keeping one clear message week after week. The same idea applies to Tamil, Kannada, Malayalam, Marathi and other regional seasons.',
      'The playbook is the one we use for [Bigg Boss PR](/services/bigg-boss-pr) in the Hindi season, rebuilt for each language. Regional audiences notice instantly when content is translated instead of written for them, so pages, creators and content are all chosen language first.',
    ],
  },
  included: [
    { title: 'Language-first plan', desc: 'Pages, creators and content chosen for the season’s language.' },
    { title: 'Fan club coordination', desc: 'One message across the contestant’s fan clubs.' },
    { title: 'Regional X trends', desc: 'Hashtags in the audience’s language for key moments.' },
    { title: 'Regional meme and media pages', desc: 'Episode moments on pages the audience follows.' },
    { title: 'Family and manager support', desc: 'Every decision agreed with the person handling the contestant’s accounts.' },
    { title: 'Weekly report', desc: 'Trends, posts and coverage each week.' },
  ],
  process: [
    { title: 'Before entry', desc: 'Profiles, fan pages and content ready for day one.' },
    { title: 'Weekly message', desc: 'One line each week, agreed with the family or manager.' },
    { title: 'Episode content', desc: 'Moments turned into posts in the audience’s language.' },
    { title: 'Key moments', desc: 'Trends and pushes for nominations, tasks and the finale.' },
    { title: 'After the show', desc: 'Keeping the fan base active once the contestant is out.' },
  ],
  whoFor: {
    title: 'Who this is for',
    items: ['Contestants in Bigg Boss Telugu, Tamil and other regional seasons', 'Families and managers', 'Wildcard entries', 'Ex-contestants building a career after the show'],
  },
  sections: [
    {
      id: 'tamil',
      eyebrow: 'Bigg Boss Tamil PR',
      title: 'Bigg Boss Tamil PR and other regional seasons',
      paragraphs: [
        'Each regional season has its own audience, its own meme culture and its own media pages. What works for a Telugu contestant won’t automatically work in Tamil or Kannada. We plan each season separately, with content written natively and communities that post in that language.',
      ],
      table: {
        caption: 'What changes between Hindi and regional Bigg Boss PR',
        head: ['Part of the plan', 'Hindi season', 'Regional season'],
        rows: [
          ['Meme and media pages', 'National Hindi pages', 'Pages in the season’s language'],
          ['Hashtags', 'Mostly Hindi or English', 'Regional language or mixed'],
          ['Fan clubs', 'Spread across India', 'Concentrated in one region'],
          ['Media', 'National portals', 'Regional portals and channels'],
        ],
      },
    },
    {
      id: 'regional-reality',
      eyebrow: 'Regional reality show PR',
      title: 'Regional reality show PR beyond Bigg Boss',
      paragraphs: [
        'The same approach works for other regional reality formats: dance, singing and dating shows. Fans want to see their favourite every week, in their language, on the pages they already follow. For weekly hashtags, see [Twitter hashtag campaign services](/services/x-twitter-trends/hashtag-campaigns); for fan coordination, [fan club management](/services/celebrity-pr/fan-club-management).',
        'Curious how voting works in the Telugu season? Our guide on [how Bigg Boss voting works](/blog/how-does-bigg-boss-voting-work) covers the basics that apply across seasons.',
      ],
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Before a regional season starts',
      checklist: [
        'Official profiles ready and verified where possible',
        'Fan pages set up and admins briefed',
        'One trusted person to hold the accounts',
        'Content bank of photos and clips from before the show',
        'Regional pages and creators shortlisted',
      ],
    },
  ],
  proof: {
    title: 'Our Bigg Boss work',
    // TODO(Sid): add a regional-season client here once one can be named, and list the regional languages
    // you have actually run campaigns in (lib/data/promoted.ts → regionalLanguages).
    paragraphs: [
      'Our published Bigg Boss campaigns are from the Hindi seasons: for Mridul Tiwari in Bigg Boss 19, three trends reached #1 in India, and for Rajat Dalal in Bigg Boss 18, #RajatIsTheBoss logged 210K mentions in five days. Regional seasons use the same weekly playbook, rebuilt for the language.',
    ],
    caseStudies: ['mridul-tiwari-bigg-boss-19-x-trends', 'rajat-dalal-bigg-boss-18-pr-campaign'],
  },
  pricing: {
    title: 'What regional Bigg Boss PR costs',
    paragraphs: [
      'Cost depends on how much of the season you cover, how many trends and pages, and the language. Read [Bigg Boss PR cost](/blog/bigg-boss-pr-cost) for what drives the price, or see [pricing](/pricing).',
    ],
    rows: [
      { scope: 'Full season', includes: 'Fan clubs, weekly trends, pages, media, finale', range: PENDING_RANGE },
      { scope: 'Mid-season join', includes: 'Same plan from the week we start', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'Do you handle Bigg Boss Telugu PR?', a: 'Yes. We plan Telugu-season campaigns with Telugu pages, creators, hashtags and content written in Telugu.' },
    { q: 'What about Bigg Boss Tamil PR?', a: 'Yes, the same approach, planned separately for the Tamil audience and its own pages and media.' },
    { q: 'Can you join mid-season?', a: 'Yes. It’s better to start before entry, but we can join at any point.' },
    { q: 'Who do you work with while the contestant is inside?', a: 'The family, manager or the trusted person holding the accounts. Every decision is agreed with them.' },
    { q: 'Can you promise a win?', a: 'No. Results depend on the show and the public vote. We commit to consistent, honest support outside the house.' },
  ],
  related: [
    { title: 'Bigg Boss PR', desc: 'Our full Bigg Boss playbook.', href: '/services/bigg-boss-pr' },
    { title: 'Reality Show PR', desc: 'PR for every reality format.', href: '/services/reality-show-pr' },
    { title: 'Fan Club Management', desc: 'One message across every fan club.', href: '/services/celebrity-pr/fan-club-management' },
  ],
  updatedAt: '2026-11-28',
}

/* /services/reality-show-pr/splitsvilla */
const splitsvilla: LandingPage = {
  path: '/services/reality-show-pr/splitsvilla',
  parent: { name: 'Reality Show PR', path: '/services/reality-show-pr' },
  name: 'Splitsvilla PR',
  icon: 'Star',
  metaTitle: 'Splitsvilla Contestant PR',
  metaDescription:
    'Splitsvilla contestant PR: profiles, fan pages, episode memes and X trends from the first episode to the finale. 650+ X trends run for shows and fans.',
  h1: 'Splitsvilla contestant PR, from the first episode to the finale',
  mainKeyword: 'splitsvilla contestant pr',
  serviceType: 'Splitsvilla contestant PR',
  promise: 'We help Splitsvilla contestants turn screen time into a real fan base: ready profiles, episode content, fan pages and trends for the big moments.',
  whatIs: {
    title: 'What is Splitsvilla contestant PR?',
    paragraphs: [
      'Splitsvilla contestant PR is the work done outside the show to help a contestant get noticed, liked and remembered: setting up profiles before the season, turning episode moments into posts, organising fan pages and running trends when it matters. Splitsvilla audiences are young and very active online, so what happens on Instagram and X shapes how a contestant is seen.',
      'It’s part of our work as a [reality show PR agency in India](/services/reality-show-pr), adapted for the pace and audience of a dating show.',
    ],
  },
  included: [
    { title: 'Profile prep', desc: 'Bio, photos and highlights ready before the first episode.' },
    { title: 'Episode content', desc: 'The contestant’s best moments turned into reels and posts.' },
    { title: 'Fan page support', desc: 'Fan pages organised around one message.' },
    { title: 'Meme and media pages', desc: 'Moments on reality TV and meme pages the audience follows.' },
    { title: 'X trends', desc: 'Hashtags for big episodes, eliminations and the finale.' },
    { title: 'After the show', desc: 'Interviews, collabs and keeping fans after the season.' },
  ],
  process: [
    { title: 'Before the show', desc: 'Profiles, fan pages and content ready.' },
    { title: 'Story', desc: 'What people should remember about the contestant.' },
    { title: 'Weekly content', desc: 'Episode moments posted fast.' },
    { title: 'Big moments', desc: 'Trends and pushes for key episodes.' },
    { title: 'After', desc: 'Turning the season into a lasting audience.' },
  ],
  whoFor: {
    title: 'Who this is for',
    items: ['Splitsvilla contestants', 'Contestants of other dating reality shows', 'Families and managers', 'Ex-contestants building a creator career'],
  },
  sections: [
    {
      id: 'dating-show-pr',
      eyebrow: 'Dating reality show PR',
      title: 'Dating reality show PR is different',
      paragraphs: [
        'In a dating show, relationships drive the story, and audiences pick sides fast. A contestant’s image can change in one episode. That means content has to move quickly, the message has to stay consistent, and fan pages need clear rules so they don’t make things worse in a heated week.',
      ],
      table: {
        caption: 'What matters most at each stage of a dating reality show',
        head: ['Stage', 'Focus'],
        rows: [
          ['Before the season', 'Profiles, story, fan pages ready'],
          ['First episodes', 'Getting people to remember the name'],
          ['Mid-season drama', 'Calm, consistent message; quick response'],
          ['Finale', 'Trends and a big fan push'],
          ['After the show', 'Interviews, collabs, creator work'],
        ],
      },
    },
    {
      id: 'after',
      eyebrow: 'After the show',
      title: 'Turning a season into a career',
      paragraphs: [
        'The weeks right after the finale matter most. Interest is at its peak, brands start reaching out, and fans want to know what comes next. A clear plan for those weeks, with interviews lined up, a steady posting rhythm and one or two collabs, turns a season of screen time into an audience that stays.',
        'Many contestants build creator careers after the show. The followers you gain during the season stay only if you keep giving them a reason. We help with interviews, [paps page promotion](/services/pr-media-coverage/paps-page-promotion) for first appearances after the show, and [Instagram promotion](/services/instagram-promotion) to keep growing. Our guide [how to prepare PR before entering a reality show](/blog/how-to-prepare-pr-before-entering-a-reality-show) covers the prep.',
      ],
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Before your Splitsvilla season',
      checklist: [
        'Instagram profile with a clear bio and recent posts',
        'A trusted person to post while you’re shooting',
        'Photos and clips ready for the content bank',
        'Fan page admins identified',
        'A one-line answer to “who are you?”',
      ],
    },
  ],
  proof: {
    title: 'Our reality show work',
    paragraphs: [
      'Our reality show campaigns include Rise & Fall, Lock Upp, Bigg Boss and Prime Video’s The Alliance. For Niharika Tiwari on Rise & Fall Season 2 we ran 330+ meme page posts, 143 media page posts and six interviews with national outlets.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist', 'the-alliance-prime-video-x-campaign'],
  },
  pricing: {
    title: 'What Splitsvilla contestant PR costs',
    paragraphs: [
      'Cost depends on how much of the season you cover, how many pages and trends you need, and whether you add after-show work. See [pricing](/pricing).',
    ],
    rows: [
      { scope: 'Full season', includes: 'Profiles, episode content, fan pages, trends, finale', range: PENDING_RANGE },
      { scope: 'Finale and after-show', includes: 'Finale push plus interviews and appearances', range: PENDING_RANGE },
    ],
  },
  faqs: [
    { q: 'What does Splitsvilla contestant PR include?', a: 'Profile prep, episode content, fan page coordination, posts on reality TV and meme pages, X trends for big moments and after-show support.' },
    { q: 'Who runs my accounts while I’m shooting?', a: 'A trusted person you choose, usually family or a manager, holds the logins. We plan the content and timing with them, and nothing is posted without their OK.' },
    { q: 'When should a contestant contact you?', a: 'Before the season airs, so profiles and fan pages are ready from the first episode.' },
    { q: 'Can you help during a controversy on the show?', a: 'Yes. We help the contestant’s team share a calm, consistent message quickly and keep fan pages respectful.' },
    { q: 'Is it confidential?', a: 'Yes. We never name contestants we work with without permission.' },
    { q: 'Can you promise a win?', a: 'No. We commit to consistent, honest support outside the show.' },
  ],
  related: [
    { title: 'Reality Show PR', desc: 'PR for every reality format.', href: '/services/reality-show-pr' },
    { title: 'Fan Club Management', desc: 'Organised fans for every moment.', href: '/services/celebrity-pr/fan-club-management' },
    { title: 'Instagram Promotion', desc: 'Grow after the show.', href: '/services/instagram-promotion' },
  ],
  updatedAt: '2026-11-28',
}

export const week4SubServicePages: LandingPage[] = [
  twitterSpaces,
  momentMarketing,
  trailerPromotion,
  fanClubManagement,
  pressReleaseDistribution,
  onlineReputationManagement,
  regionalBiggBoss,
  splitsvilla,
]
