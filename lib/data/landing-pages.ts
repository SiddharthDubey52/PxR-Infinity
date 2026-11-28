/**
 * LANDING PAGES: new service pages and sub-service pages that live outside the main
 * `services` list (lib/data/services.ts stays untouched).
 *
 * Every page here is rendered by components/sections/LandingServicePage.tsx.
 *  - Top-level services have their own route folder (app/services/<slug>/page.tsx).
 *  - Sub-services (/services/<parent>/<sub>) come from app/services/[slug]/[sub]/page.tsx.
 *
 * Text supports two inline marks: [link text](/path) and **bold**.
 * `mainKeyword` is for planning only: one main keyword per page, never reused by another page.
 * `updatedAt` feeds the sitemap's lastModified. Change it only when the content really changes.
 * Prices: a pricing row with `range: ''` shows "Shared after the brief". Fill ranges only with
 * figures Sid has confirmed.
 */

import type { Faq } from './services'

export type LandingSection = {
  id: string
  eyebrow?: string
  title: string
  paragraphs?: string[]
  /** Cards (optionally linked) */
  items?: { title: string; desc: string; href?: string }[]
  /** Ticked checklist */
  checklist?: string[]
  table?: { caption: string; head: string[]; rows: string[][] }
  note?: string
}

export type LandingPage = {
  /** Full path, e.g. '/services/instagram-promotion' */
  path: string
  /** Set for sub-services: the existing parent service page (never edited) */
  parent?: { name: string; path: string }
  /** Short name used in breadcrumbs, eyebrow and CTA */
  name: string
  icon: string
  /** <title> before " | PXR Infinity": ≤ 45 characters, starts with the main keyword */
  metaTitle: string
  /** ≤ 155 characters, main keyword once, one verified proof point */
  metaDescription: string
  h1: string
  mainKeyword: string
  /** Schema.org Service → serviceType (= main keyword) */
  serviceType: string
  /** One honest promise under the H1 */
  promise: string
  whatIs: { title: string; paragraphs: string[] }
  included: { title: string; desc: string }[]
  process: { title: string; desc: string }[]
  whoFor: { title: string; intro?: string; items: string[] }
  /** Long-form sections after the process */
  sections: LandingSection[]
  /** Real examples: slugs of published case studies + short, verified context */
  proof: { title: string; paragraphs: string[]; caseStudies: string[] }
  pricing: {
    title: string
    paragraphs: string[]
    rows: { scope: string; includes: string; range: string }[]
  }
  faqs: Faq[]
  related: { title: string; desc: string; href: string }[]
  updatedAt: string
}

const PENDING_RANGE = '' // TODO(Sid): replace with a confirmed ₹ range, e.g. '₹X – ₹Y'

/* ======================================================================== */
/*  /services/instagram-promotion                                           */
/* ======================================================================== */

const instagramPromotion: LandingPage = {
  path: '/services/instagram-promotion',
  name: 'Instagram Promotion',
  icon: 'Camera',
  metaTitle: 'Instagram Promotion Services India',
  metaDescription:
    'Instagram promotion services India: meme pages, entertainment pages, paps pages and creator reels. 330+ meme page posts for one reality show campaign.',
  h1: 'Instagram promotion services in India, through the pages and creators people already follow',
  mainKeyword: 'instagram promotion services india',
  serviceType: 'Instagram promotion services India',
  promise:
    'We take your launch, release or profile to the right people on Instagram through meme pages, entertainment pages and creators. You approve every post, and the report links every one.',
  whatIs: {
    title: 'What is Instagram promotion?',
    paragraphs: [
      'Instagram promotion is getting a post, reel, account or launch seen by people who don’t follow you yet, by placing it on other people’s audiences: meme pages, entertainment and news pages, paparazzi pages and creators. It’s the outward half of Instagram. Your own account is where people land; promotion is how they find it.',
      'At PXR Infinity, Instagram promotion sits between our work as a [meme marketing agency in India](/services/meme-marketing) and our creator campaigns. One plan covers both pages and people, so the same message turns up in a meme, a news post and a creator’s reel in the same week. If you also need someone to run your own account day to day, that’s our [social media management](/services/social-media-management) team.',
      'We judge a campaign by what real people do: views, reach, saves, shares, comments, profile visits and link clicks. Those are the numbers that turn into sales, streams, bookings and votes, so those are the numbers we report.',
    ],
  },
  included: [
    { title: 'Audience and page plan', desc: 'Who you need to reach, and the pages and creators that already reach them, by language, region and niche.' },
    { title: 'Meme page placements', desc: 'Memes, carousels and reels on pages picked from our network of 25,000+ meme pages.' },
    { title: 'Entertainment and news pages', desc: 'Posts on entertainment, Bollywood, OTT and news pages for launches, releases and announcements.' },
    { title: 'Paps page coverage', desc: 'Photos and videos on paparazzi pages for events, appearances and airport moments.' },
    { title: 'Creator reels and collabs', desc: 'Creators who make reels with your product, song, film or story, briefed so they still sound like themselves.' },
    { title: 'Content writing and edits', desc: 'Captions, meme copy, reel scripts and edits written for each page’s audience, not one post copied everywhere.' },
    { title: 'Timed posting waves', desc: 'Posts scheduled in planned bursts, so people see you in several places in the same few days.' },
    { title: 'Link-by-link report', desc: 'Every live post with its page, date, views, reach and engagement, plus what we’d change next time.' },
  ],
  process: [
    { title: 'Brief', desc: 'What you’re promoting, who it’s for, your dates, your budget and the tone you want.' },
    { title: 'Plan and shortlist', desc: 'A list of pages and creators with formats, timing and cost for each, sent for your approval.' },
    { title: 'Content and approvals', desc: 'We write the memes, captions and briefs. Nothing goes live until you sign off.' },
    { title: 'Go live in waves', desc: 'Posts go out on schedule. We watch comments and adjust the next wave if something lands better.' },
    { title: 'Report and next steps', desc: 'Every link, every number, and a clear view of which pages and formats worked best.' },
  ],
  whoFor: {
    title: 'Who Instagram promotion is for',
    intro: 'Anyone who needs new people to notice them on Instagram in a short window, or keep noticing them month after month.',
    items: [
      'D2C and consumer brands launching a product',
      'Apps and startups that need installs and recall',
      'Films, web series and OTT shows in release week',
      'Artists and labels pushing a new song',
      'Reality show contestants and their fan clubs',
      'Actors, creators and public figures building a profile',
      'Events, colleges and local launches',
    ],
  },
  sections: [
    {
      id: 'instagram-promotion-agency',
      eyebrow: 'How we work',
      title: 'What an Instagram promotion agency actually does',
      paragraphs: [
        'Most of the work happens before anything is posted. An Instagram promotion agency earns its fee by choosing the right pages, writing content each page’s followers will enjoy, and timing it so the posts support each other. Put the same caption on fifty pages and it reads like an ad fifty times. Write for each audience and it reads like content.',
        'We start from your audience, not from a rate card. A college humour page, a Punjabi meme page and a Bollywood news page reach very different people, even when their follower counts look similar. We check engagement, comment quality and past posts before a page goes on your shortlist.',
      ],
    },
    {
      id: 'channels',
      eyebrow: 'Where your posts go',
      title: 'Instagram page promotion: which pages do what',
      paragraphs: [
        'Instagram page promotion means placing your message on pages with an audience that matches yours. Each kind of page is good at something different, so most campaigns mix two or three.',
      ],
      table: {
        caption: 'Types of Instagram pages used in a promotion campaign and what each is best for',
        head: ['Page type', 'Best for', 'Typical format', 'What to watch'],
        rows: [
          ['Meme pages', 'Reach, recall and shares among young audiences', 'Memes, carousels, short reels', 'Tone has to fit the page or comments turn on you'],
          ['Entertainment and news pages', 'Announcements, releases, credibility', 'News-style posts, reels, stories', 'Needs a real story, not just a product shot'],
          ['Paparazzi (paps) pages', 'Appearances, events, celebrity moments', 'Photos and short videos', 'Works best with a person and a moment on camera'],
          ['Creators', 'Trust, demos, reviews, audio use', 'Reels, collabs, stories', 'Pick by audience fit, not follower count alone'],
          ['Regional pages', 'Language and state-level reach', 'Memes and reels in the audience’s language', 'Content must be written natively, not translated'],
        ],
      },
    },
    {
      id: 'reels-promotion',
      eyebrow: 'Reels',
      title: 'Instagram reels promotion: when the reel is the product',
      paragraphs: [
        'Sometimes you don’t need new followers. You need one reel to travel: a trailer cut, a song hook, a product demo or a contestant’s big moment. Instagram reels promotion puts that reel, or versions of it, on pages and creator accounts where it can pick up views and shares fast.',
        'What works: a strong first two seconds, a version cut for each page’s style, and creators who add their own reaction instead of reposting. For songs, we get creators using the audio, which is what pushes a track into more reels. Our guide [reel viral kaise kare](/blog/reel-viral-kaise-kare) covers the basics if you’re making the reel yourself.',
      ],
    },
    {
      id: 'brand-promotion',
      eyebrow: 'For brands',
      title: 'Brand promotion on Instagram, the way people actually scroll',
      paragraphs: [
        'People scroll past ads and stop for jokes, gossip and reels that feel made for them. Brand promotion on Instagram works best when your product shows up inside that content: a meme where the product is the punchline, a creator using it in a normal day, a news page covering your launch as a story.',
        'For a launch we usually plan a short, dense burst across meme pages and entertainment pages, then a longer tail with creators. For always-on brands, a smaller monthly plan keeps you in the feed between big moments. Ekdum simple idea: be where your customer already spends the evening.',
      ],
    },
    {
      id: 'agency-checklist',
      eyebrow: 'Checklist',
      title: 'Before you hire anyone for Instagram promotion',
      paragraphs: ['Whether you pick us or someone else, ask for these in writing before you pay.'],
      checklist: [
        'A named list of pages or creators, with follower count and recent engagement for each',
        'Sample content written for your brand, not generic templates',
        'Dates and times for every post, so posts support each other',
        'Clear approval rights: nothing goes live without your OK',
        'A report with the live link to every post, not just a total reach number',
        'Honest targets: views and engagement ranges, with no promises of “going viral”',
        'What happens if a page misses a date or deletes a post early',
      ],
    },
  ],
  proof: {
    title: 'Instagram campaigns we’ve run',
    paragraphs: [
      'For Niharika Tiwari on Rise & Fall Season 2, Instagram did most of the work: 330+ meme page posts (including regional Punjabi pages), 143 posts on reality and entertainment media pages, and reels by 8 content creators across a seven-week campaign.',
      'For Mridul Tiwari in Bigg Boss 19, meme and media pages on Instagram carried the same weekly message as his X trends, so fans who don’t use X heard it too.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist', 'mridul-tiwari-bigg-boss-19-x-trends'],
  },
  pricing: {
    title: 'How much Instagram promotion costs',
    paragraphs: [
      'Cost depends on how many pages and creators you use, how big and how niche they are, whether we write and edit the content, and how long the campaign runs. A single post wave costs far less than a month-long launch with creators. We quote after the brief, with a cost line for every page and creator, so you can drop or add any of them.',
      'For a full breakdown of what changes the price, read [Instagram promotion cost in India](/blog/instagram-promotion-cost-india). For our packages, see [pricing](/pricing).',
    ],
    rows: [
      { scope: 'One post wave', includes: 'A set of meme or entertainment page posts around one moment', range: PENDING_RANGE },
      { scope: 'Launch campaign (2–4 weeks)', includes: 'Meme pages, entertainment pages, creators and a report', range: PENDING_RANGE },
      { scope: 'Monthly plan', includes: 'A smaller set of placements every month between big moments', range: PENDING_RANGE },
    ],
  },
  faqs: [
    {
      q: 'What is Instagram promotion?',
      a: 'Instagram promotion is getting your post, reel, account or launch in front of people who don’t follow you yet, through meme pages, entertainment and news pages, paparazzi pages and creators.',
    },
    {
      q: 'How is Instagram promotion different from social media management?',
      a: 'Social media management runs your own account: content, posting and replies. Instagram promotion takes your message to other people’s audiences. Many clients use both, so the people who discover you find a strong profile when they land.',
    },
    {
      q: 'How much do Instagram promotion services in India cost?',
      a: 'It depends on the number and size of pages and creators, whether we create the content, and how long the campaign runs. We quote after the brief, with a cost for each page and creator.',
    },
    {
      q: 'Will I get followers from Instagram promotion?',
      a: 'Often, yes, when the content gives people a reason to visit your profile. But we plan for reach, views and engagement first, because followers come from people liking what they see, not from the post itself.',
    },
    {
      q: 'Do I get to approve the posts?',
      a: 'Yes. You approve the page list and every piece of content before anything goes live.',
    },
    {
      q: 'Which pages will my post go on?',
      a: 'Pages chosen for your audience by language, region and interest. You get the named shortlist with follower counts and recent engagement before you commit.',
    },
    {
      q: 'Do you promote in regional languages?',
      a: 'Yes. We run campaigns on regional pages, including Punjabi meme pages, with content written in the audience’s own language.',
    },
    {
      q: 'Can you promise my reel will go viral?',
      a: 'No honest agency can. We can promise a clear plan, the right pages, on-time posting and a full report. Good content placed well gives you the best chance.',
    },
    {
      q: 'How soon can a campaign go live?',
      a: 'A simple post wave can go live within a few days of approval. A launch with creators needs a week or two to brief, shoot and approve.',
    },
    {
      q: 'What do I get in the report?',
      a: 'A live link to every post, with the page, date, views, reach and engagement, plus notes on which pages and formats worked best.',
    },
  ],
  related: [
    { title: 'Meme Marketing', desc: 'Full meme campaigns: strategy, creation and page network.', href: '/services/meme-marketing' },
    { title: 'Influencer Marketing', desc: 'Creator shortlists, briefs, approvals and reporting.', href: '/services/influencer-marketing' },
    { title: 'Social Media Management', desc: 'Your own account, run end to end.', href: '/services/social-media-management' },
    { title: 'Meme Page Promotion', desc: 'Your post or reel placed on the right meme pages.', href: '/services/meme-marketing/meme-page-promotion' },
    { title: 'YouTube Promotion', desc: 'Videos, Shorts and channels pushed through creators and pages.', href: '/services/youtube-promotion' },
  ],
  updatedAt: '2026-11-28',
}

/* ======================================================================== */
/*  /services/youtube-promotion                                             */
/* ======================================================================== */

const youtubePromotion: LandingPage = {
  path: '/services/youtube-promotion',
  name: 'YouTube Promotion',
  icon: 'Tv',
  metaTitle: 'YouTube Promotion Services in India',
  metaDescription:
    'YouTube promotion services for videos, Shorts and channels: creators, Shorts cuts and Instagram and X support. 650+ X trends run for launches and releases.',
  h1: 'YouTube promotion services for videos, Shorts and channels',
  mainKeyword: 'youtube promotion services',
  serviceType: 'YouTube promotion services',
  promise:
    'We bring real viewers to your video, Short or channel through creators, clip cuts and pushes from Instagram and X. You get a plan before we start and a report with every link after.',
  whatIs: {
    title: 'What are YouTube promotion services?',
    paragraphs: [
      'YouTube promotion services get more of the right people to watch a video, a Short or a channel, by sending viewers from creators, clips and other platforms, and by making the video itself easier to click and keep watching. The goal is viewers who stay, because watch time and returning viewers are what YouTube rewards.',
      'Most of our YouTube work runs through creators, so it sits close to what we do as an [influencer marketing agency in India](/services/influencer-marketing). For songs and albums it usually runs alongside our [song promotion](/services/music-album-promotion) work, where Shorts and reels using the track send people to the full video.',
      'We don’t sell views. Views that don’t come from interested people don’t watch to the end, don’t subscribe and don’t come back, and YouTube notices. Everything we do is aimed at people who chose to click.',
    ],
  },
  included: [
    { title: 'Video and channel audit', desc: 'Titles, thumbnails, descriptions, chapters and the first 30 seconds, checked against what makes people click and stay.' },
    { title: 'Creator collaborations', desc: 'YouTubers and Shorts creators who react to, review, feature or shout out your video, picked by audience fit.' },
    { title: 'Shorts and clip cuts', desc: 'Short vertical cuts of your best moments, written to make people want the full video.' },
    { title: 'Instagram and X push', desc: 'Meme pages, entertainment pages and X posts that send people from where they scroll to where you upload.' },
    { title: 'Premiere and launch plan', desc: 'A countdown, premiere timing and first-hour plan so the video starts strong.' },
    { title: 'Music video launches', desc: 'Lyric videos, Shorts using the audio and creator usage around a song release.' },
    { title: 'Comment and community prompts', desc: 'Pinned comments, community posts and replies that keep early viewers talking.' },
    { title: 'Report', desc: 'Views, watch time, subscribers gained and traffic sources from the campaign, with every creator and page link.' },
  ],
  process: [
    { title: 'Brief', desc: 'The video or channel, the audience you want, your dates and your budget.' },
    { title: 'Audit', desc: 'We look at the video and channel and fix what would waste paid reach: title, thumbnail, hook.' },
    { title: 'Plan', desc: 'Creators, cuts and pages with costs and timing, sent for your approval.' },
    { title: 'Launch', desc: 'Creators and pages post in planned waves around the upload or premiere.' },
    { title: 'Report', desc: 'What came from where, what people watched, and what to do on the next upload.' },
  ],
  whoFor: {
    title: 'Who YouTube promotion is for',
    items: [
      'Artists and labels releasing a music video',
      'Film and OTT teams launching a trailer',
      'Brands with a launch film or explainer',
      'Creators growing a new channel',
      'Founders and experts with a long-form show or podcast',
      'Reality show contestants after the show ends',
    ],
  },
  sections: [
    {
      id: 'youtube-promotion-agency',
      eyebrow: 'How we work',
      title: 'What a YouTube promotion agency should do for you',
      paragraphs: [
        'A good YouTube promotion agency starts with the video, not the budget. If the thumbnail doesn’t make people click or the first 30 seconds lose them, sending more people only makes the numbers worse. So we check those first and tell you honestly if something needs a re-cut.',
        'Then we bring viewers from places they already trust. A creator who recommends your video to their audience sends people who are actually curious. A Short that ends on a cliffhanger sends people looking for the full version. A meme page joke about your trailer sends people who already like the vibe.',
      ],
    },
    {
      id: 'video-promotion-india',
      eyebrow: 'Videos',
      title: 'YouTube video promotion in India: the first 48 hours',
      paragraphs: [
        'For YouTube video promotion in India, the first two days usually decide how far a video travels on its own. If people click, watch and comment early, YouTube shows it to more people like them. So most of our plan is packed into that window.',
      ],
      table: {
        caption: 'A typical first-48-hours plan for a YouTube video launch',
        head: ['When', 'What happens', 'Why'],
        rows: [
          ['3–7 days before', 'Teaser Shorts, community post, premiere set up', 'People who are waiting watch first and watch longest'],
          ['Launch hour', 'Creator and page posts go live, pinned comment, X post', 'A strong first hour tells YouTube the video is worth showing'],
          ['Day 1', 'Shorts cuts, creator reactions, Instagram page posts', 'New people arrive from outside YouTube'],
          ['Day 2', 'Second wave of creators and pages, reply to comments', 'Keeps fresh viewers coming as the first wave slows'],
          ['Week 1', 'Review traffic sources and retention, adjust thumbnail if needed', 'Fix what the data shows before the next upload'],
        ],
      },
    },
    {
      id: 'channel-promotion',
      eyebrow: 'Channels',
      title: 'YouTube channel promotion: growth that keeps going',
      paragraphs: [
        'YouTube channel promotion is a longer job than pushing one video. It means a clear idea of what the channel is for, a regular upload rhythm, Shorts that bring people to long videos, and collaborations with channels whose viewers would like yours.',
        'We help with the parts outside the upload: creator collabs, Shorts from each video, cross-posting to Instagram and X, and a monthly look at what brought subscribers in. If you want someone to also handle uploads, titles and the channel itself, our social media management team can run it.',
      ],
    },
    {
      id: 'music-videos',
      eyebrow: 'Music',
      title: 'Promoting a music video on YouTube',
      paragraphs: [
        'Songs are where YouTube and Instagram work best together. People hear a hook in a reel or a Short, search for the song, and land on the full video. So for a music video we plan the Shorts and reels first: the 10 to 15 seconds most likely to become an audio people reuse, cut in a few versions, and handed to creators who dance, lip-sync, joke or just react to it.',
        'On release day the full video goes up with a premiere or a clear upload time, creators post their Shorts in waves, and meme and entertainment pages share the hook on Instagram. After that, a lyric video or a behind-the-scenes cut gives people a second reason to come back. Artist interviews and features add coverage that people find when they search the singer’s name.',
      ],
    },
    {
      id: 'worth-it',
      eyebrow: 'Checklist',
      title: 'Is your video ready to promote?',
      paragraphs: ['Spend on promotion only after these are in place. Otherwise you pay to send people to a video that loses them.'],
      checklist: [
        'A thumbnail you can read on a phone screen at a glance',
        'A title that says what the viewer gets, in under 60 characters',
        'A first 30 seconds that delivers on the title',
        'A description with the key links and a few relevant keywords',
        'Chapters on long videos, so people can jump to what they came for',
        'A pinned comment that starts the conversation',
        'An end screen pointing to the next video',
      ],
    },
  ],
  proof: {
    title: 'Proof',
    // TODO(Sid): add a YouTube campaign with verified numbers (views, watch time, subscribers) and link its case study.
    paragraphs: [
      'We haven’t published a YouTube-only case study yet. Our published campaigns show how we run creators, pages and trends together: 650+ trends on X, and 330+ meme page posts plus reels by 8 creators for a single reality show campaign. Ask us on WhatsApp for YouTube examples from your category.',
    ],
    caseStudies: [],
  },
  pricing: {
    title: 'How much YouTube promotion costs',
    paragraphs: [
      'The cost depends mostly on which creators you work with and how many, how many Shorts cuts and edits are needed, and whether you add Instagram and X support. We quote after the brief, with a line for each creator and page, so you can see exactly where the money goes.',
      'For our packages, see [pricing](/pricing). If Instagram is also part of the plan, read [Instagram promotion cost in India](/blog/instagram-promotion-cost-india).',
    ],
    rows: [
      { scope: 'Single video launch', includes: 'Audit, Shorts cuts, a set of creators and pages, report', range: PENDING_RANGE },
      { scope: 'Music video release', includes: 'Shorts using the audio, creators, Instagram pages, report', range: PENDING_RANGE },
      { scope: 'Monthly channel growth', includes: 'Collabs, Shorts from each upload, cross-posting, monthly review', range: PENDING_RANGE },
    ],
  },
  faqs: [
    {
      q: 'What do YouTube promotion services include?',
      a: 'A check of your title, thumbnail and opening, creator collaborations, Shorts cuts, posts on Instagram and X that send people to the video, a launch plan and a report with every link.',
    },
    {
      q: 'Is YouTube promotion worth it?',
      a: 'It is when the video is ready: a clear thumbnail, a strong opening and a reason to keep watching. Then promotion brings the early viewers YouTube needs to show it to more people. If the video loses people in 10 seconds, fix that first.',
    },
    {
      q: 'Do you buy views or subscribers?',
      a: 'No. We bring real viewers through creators, Shorts and other platforms. Views that don’t come from interested people don’t watch to the end or come back.',
    },
    {
      q: 'Can you promote YouTube Shorts?',
      a: 'Yes. We cut Shorts from your videos and get creators to make Shorts around your song, product or trailer.',
    },
    {
      q: 'How long before I see results?',
      a: 'For a single video, most of the effect shows in the first week. Channel growth is slower and builds month by month with regular uploads.',
    },
    {
      q: 'Do you work with regional YouTube channels?',
      a: 'Yes. We pick creators and pages that speak your audience’s language.',
    },
    {
      q: 'Can you run YouTube ads too?',
      a: 'Our work is creators, Shorts and cross-platform promotion. Ads can run alongside it through your own account or your ad agency, and we’ll share our timing so they support each other.',
    },
    {
      q: 'What do you need from me to start?',
      a: 'The video link or file, the upload or premiere date, your audience, your budget and any brand rules creators must follow.',
    },
  ],
  related: [
    { title: 'Influencer Marketing', desc: 'Creator campaigns from shortlist to report.', href: '/services/influencer-marketing' },
    { title: 'Music & Album Promotion', desc: 'Reels, Shorts and creator usage for songs.', href: '/services/music-album-promotion' },
    { title: 'Instagram Promotion', desc: 'Meme pages, entertainment pages and creator reels.', href: '/services/instagram-promotion' },
    { title: 'Movie & Web Series Promotion', desc: 'Trailer day, release week and OTT premieres.', href: '/services/movie-web-series-promotion' },
  ],
  updatedAt: '2026-11-28',
}

/* ======================================================================== */
/*  /services/x-twitter-trends/hashtag-campaigns                            */
/* ======================================================================== */

const hashtagCampaigns: LandingPage = {
  path: '/services/x-twitter-trends/hashtag-campaigns',
  parent: { name: 'X / Twitter Trends', path: '/services/x-twitter-trends' },
  name: 'Hashtag Campaigns',
  icon: 'Hash',
  metaTitle: 'Twitter Hashtag Campaign Services',
  metaDescription:
    'Twitter hashtag campaign services: hashtag, content bank, fan club briefing and live monitoring. One hashtag we ran hit #1 in India with 187.9K+ posts.',
  h1: 'Twitter hashtag campaign services, planned hour by hour',
  mainKeyword: 'twitter hashtag campaign services',
  serviceType: 'Twitter hashtag campaign services',
  promise:
    'We plan one hashtag around one moment, prepare the content, brief the people who’ll post it and run the push live. Then we report the real peak and post count.',
  whatIs: {
    title: 'What is a Twitter hashtag campaign?',
    paragraphs: [
      'A Twitter hashtag campaign is a planned push where many real people post with the same hashtag in the same time window, so a moment like a birthday, a release or a vote gets noticed on X. It’s a single, focused job: one hashtag, one day, one message.',
      'It’s one part of what we do as a [Twitter trend agency in India](/services/x-twitter-trends). That page covers full trend campaigns, Spaces and season-long plans. This page is about the hashtag campaign itself: how we prepare it, run it and report it.',
    ],
  },
  included: [
    { title: 'Hashtag check', desc: 'A short, easy-to-type hashtag that nobody else is using that day, plus a backup.' },
    { title: 'Time window', desc: 'A start time picked after checking the day’s matches, releases and news.' },
    { title: 'Content bank', desc: 'Varied lines, images, GIFs and edits, so posts don’t all look the same.' },
    { title: 'Community briefing', desc: 'Fan clubs and active communities get the hashtag, start time and content.' },
    { title: 'Live monitoring', desc: 'Our team watches the list during the push and keeps fresh content going out.' },
    { title: 'Trend report', desc: 'Screenshots, peak position in India, hours on the list and post count shown by X.' },
  ],
  process: [
    { title: 'Brief', desc: 'The moment, the date, the audience and the message.' },
    { title: 'Hashtag and timing', desc: 'We shortlist hashtags, check them, and pick the start time.' },
    { title: 'Content and briefing', desc: 'Content bank built and communities briefed a day or two ahead.' },
    { title: 'Live push', desc: 'The hashtag goes live and we run it in real time.' },
    { title: 'Report', desc: 'Peak, duration, post count and screenshots, the next day.' },
  ],
  whoFor: {
    title: 'When a hashtag campaign makes sense',
    items: [
      'Celebrity birthdays and milestones',
      'Trailer, song and release days',
      'Reality show votes, captaincies and finales',
      'Brand and app launches',
      'Fan appreciation days',
    ],
  },
  sections: [
    {
      id: 'run-sheet',
      eyebrow: 'Hashtag trending services in India',
      title: 'What our hashtag trending services in India look like on the day',
      paragraphs: [
        'Every campaign follows a run sheet. Here’s a simple version of the one we use. The times shift with the audience and the day, but the order doesn’t.',
      ],
      table: {
        caption: 'Run sheet for a one-day Twitter hashtag campaign',
        head: ['When', 'What we do'],
        rows: [
          ['5–7 days before', 'Brief, hashtag shortlist, check the day’s calendar'],
          ['2–3 days before', 'Content bank ready: lines, images, GIFs, edits'],
          ['1 day before', 'Fan clubs and communities briefed with time and content'],
          ['Start time', 'First wave posts together; team watches the list'],
          ['First 2 hours', 'Fresh content every few minutes; replies and quote posts'],
          ['Rest of the day', 'Staggered waves to help the hashtag hold'],
          ['Next day', 'Report: peak position, hours, post count, screenshots'],
        ],
      },
    },
    {
      id: 'campaign-services',
      eyebrow: 'Beyond one hashtag',
      title: 'Twitter campaign services for a whole release or season',
      paragraphs: [
        'One hashtag marks one day. For a film release, an OTT season or a reality show, our Twitter campaign services plan a series: a hashtag for each big moment, with the same message running through all of them. For Mridul Tiwari in Bigg Boss 19, that meant one message a week and fans posting together every time.',
        'We often pair a hashtag with Instagram so the moment reaches people who aren’t on X: [meme page promotion](/services/meme-marketing/meme-page-promotion) carrying the same line, or a wider [Instagram promotion](/services/instagram-promotion) plan for a release.',
      ],
    },
    {
      id: 'agency-checklist',
      eyebrow: 'Twitter campaign agency in India',
      title: 'What to ask a Twitter campaign agency in India',
      checklist: [
        'Who will actually post? Ask for a clear answer about fan clubs and communities',
        'Can I see the content bank before the day?',
        'How do you pick the start time?',
        'What happens if a bigger story breaks during the push?',
        'Will the report show the real peak position and post count, with screenshots?',
      ],
      note: 'For budgets, read Twitter Trend Price in India: What You Pay For on our blog.',
    },
  ],
  proof: {
    title: 'Hashtag campaigns we’ve run',
    paragraphs: [
      'BIGGBOSS USE MRIDUL reached #1 in India with 187.9K+ posts, and BEST CAPTAIN MRIDUL reached #1 with 42K+ posts, both for Mridul Tiwari in Bigg Boss 19. For Prime Video’s The Alliance, a planned finale-day hashtag reached #1 in India. For Rajat Dalal in Bigg Boss 18, #RajatIsTheBoss drew 210K mentions.',
    ],
    caseStudies: ['mridul-tiwari-bigg-boss-19-x-trends', 'the-alliance-prime-video-x-campaign', 'rajat-dalal-bigg-boss-18-pr-campaign'],
  },
  pricing: {
    title: 'What a hashtag campaign costs',
    paragraphs: [
      'The price depends on how long the hashtag needs to hold, national or regional reach, the language, how much content needs making and how much notice we get. We quote after the brief. See [pricing](/pricing), or read [Twitter trend price in India](/blog/twitter-trend-price-india) for what drives the cost.',
    ],
    rows: [
      { scope: 'One-day hashtag campaign', includes: 'Hashtag, content bank, briefing, live push, report', range: PENDING_RANGE },
      { scope: 'Series of hashtags', includes: 'One hashtag per key moment across a release or season', range: PENDING_RANGE },
    ],
  },
  faqs: [
    {
      q: 'What are Twitter hashtag campaign services?',
      a: 'A done-for-you hashtag push on X: we pick and check the hashtag, choose the time, build the content bank, brief the communities who post, run it live and report the result.',
    },
    {
      q: 'Can you promise a top position?',
      a: 'No. Where a hashtag lands depends on everything else happening on X that day. We plan to give it the best shot and report the real peak.',
    },
    {
      q: 'How much notice do you need?',
      a: 'About a week is ideal. Urgent campaigns can run in about 48 hours.',
    },
    {
      q: 'Can the hashtag be in Hindi or a regional language?',
      a: 'Yes. Regional hashtags often work better with regional fan bases, and we brief communities that post in that language.',
    },
    {
      q: 'What’s the difference between this and your X trends service?',
      a: 'This page is the single hashtag campaign. The X / Twitter Trends service also covers series of trends, Twitter Spaces and season-long plans.',
    },
  ],
  related: [
    { title: 'X / Twitter Trends', desc: 'Full trend campaigns, Spaces and season plans.', href: '/services/x-twitter-trends' },
    { title: 'Meme Page Promotion', desc: 'Take the same moment to Instagram meme pages.', href: '/services/meme-marketing/meme-page-promotion' },
    { title: 'Instagram Promotion', desc: 'Meme pages, entertainment pages and creators.', href: '/services/instagram-promotion' },
  ],
  updatedAt: '2026-11-28',
}

/* ======================================================================== */
/*  /services/meme-marketing/meme-page-promotion                            */
/* ======================================================================== */

const memePagePromotion: LandingPage = {
  path: '/services/meme-marketing/meme-page-promotion',
  parent: { name: 'Meme Marketing', path: '/services/meme-marketing' },
  name: 'Meme Page Promotion',
  icon: 'Laugh',
  metaTitle: 'Meme Page Promotion Services',
  metaDescription:
    'Meme page promotion services: your post, reel or meme placed on pages picked by audience and region. 330+ meme page posts for one reality show campaign.',
  h1: 'Meme page promotion services: your post on the pages your audience follows',
  mainKeyword: 'meme page promotion services',
  serviceType: 'Meme page promotion services',
  promise:
    'We place your meme, reel or post on meme pages picked for your audience, write it so it fits each page, and send you a link to every post.',
  whatIs: {
    title: 'What is meme page promotion?',
    paragraphs: [
      'Meme page promotion is paying meme pages to post your content, usually a meme, carousel or reel built around your product, film, song or person, so their followers see it in their normal feed. Done well, it doesn’t look like an ad. It looks like the page’s usual post, with you in it.',
      'It’s the placement part of a full campaign from a [meme marketing agency in India](/services/meme-marketing). Some clients come with memes already made and just need the right pages. Others want us to write the memes too. Either way, the page choice decides most of the result.',
    ],
  },
  included: [
    { title: 'Page shortlist', desc: 'Pages picked from our 25,000+ network by audience, language and engagement, with costs.' },
    { title: 'Meme writing (optional)', desc: 'Memes and captions written for each page’s style, or your own content checked for fit.' },
    { title: 'Scheduling', desc: 'Posts timed in waves so people see you on several pages in the same few days.' },
    { title: 'Comment watch', desc: 'We watch the comments and flag anything you should reply to.' },
    { title: 'Report', desc: 'Live link, reach, views and engagement for each page.' },
  ],
  process: [
    { title: 'Brief', desc: 'What you’re promoting, who for, and your dates.' },
    { title: 'Shortlist', desc: 'Named pages with followers, recent engagement and cost.' },
    { title: 'Content', desc: 'Your memes checked, or ours written, then approved by you.' },
    { title: 'Posting', desc: 'Pages post on schedule.' },
    { title: 'Report', desc: 'Every link and every number.' },
  ],
  whoFor: {
    title: 'Who uses meme page promotion',
    items: [
      'Brands with a launch or offer',
      'Films and web series around trailer and release',
      'Songs that need recall',
      'Reality show contestants',
      'Apps, events and colleges',
    ],
  },
  sections: [
    {
      id: 'instagram-meme-pages',
      eyebrow: 'Instagram meme page promotion',
      title: 'Instagram meme page promotion: picking the right pages',
      paragraphs: [
        'Most meme page promotion in India happens on Instagram, and two pages with the same follower count can give very different results. What matters is who follows them, how many of those people still engage, and whether your content fits the page’s humour.',
      ],
      table: {
        caption: 'Types of meme pages and what each is good for',
        head: ['Page type', 'Who follows', 'Good for'],
        rows: [
          ['Hindi humour pages', 'Broad young audience across north and central India', 'Mass reach for launches and releases'],
          ['English and college pages', 'Students and young working people in cities', 'Apps, D2C brands, events'],
          ['Regional pages (e.g. Punjabi)', 'Audiences in one language or state', 'Regional films, songs and local launches'],
          ['Bollywood and OTT pages', 'Film and series fans', 'Trailers, releases, cast moments'],
          ['Cricket and sports pages', 'Sports fans, especially on match days', 'Moment-based brand posts'],
          ['Reality TV pages', 'Fans of shows like Bigg Boss', 'Contestant PR and show promotion'],
        ],
      },
    },
    {
      id: 'meme-page-marketing',
      eyebrow: 'Meme page marketing',
      title: 'Meme page marketing vs a full meme campaign',
      paragraphs: [
        'Meme page marketing on its own is placement: your content, their audience. A full meme campaign adds strategy, original memes, moment marketing and waves across many pages over weeks. If you have one post and a clear audience, page promotion is enough. If you need people to remember you, the full campaign usually does more.',
        'Meme pages also work well next to other channels. A [Twitter hashtag campaign](/services/x-twitter-trends/hashtag-campaigns) on X and meme pages on Instagram carrying the same line reach two different crowds on the same day. For a wider mix with entertainment pages and creators, see [Instagram promotion](/services/instagram-promotion).',
      ],
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Before you pay a meme page',
      checklist: [
        'Check the last 10 posts: are people commenting, or just a few likes?',
        'Ask who follows the page: city, language, age',
        'Make sure the post fits the page’s style, not just your brand guide',
        'Agree the posting date, time and how long the post stays up',
        'Ask for the live link and insights screenshot after posting',
      ],
    },
  ],
  proof: {
    title: 'Meme page campaigns we’ve run',
    paragraphs: [
      'For Niharika Tiwari on Rise & Fall Season 2 we ran 330+ meme page posts over seven weeks, including regional Punjabi pages, alongside 143 posts on reality and entertainment media pages. For Mridul Tiwari in Bigg Boss 19, meme and media pages carried the same weekly message as his X trends.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist', 'mridul-tiwari-bigg-boss-19-x-trends'],
  },
  pricing: {
    title: 'What meme page promotion costs',
    paragraphs: [
      'Cost depends on how many pages you use, their size and niche, whether we write the memes, and how many waves you run. We quote per page after the brief, so you can add or drop any page. See [pricing](/pricing), [How much does meme marketing cost in India?](/blog/how-much-does-meme-marketing-cost-in-india) and [Instagram promotion cost in India](/blog/instagram-promotion-cost-india).',
    ],
    rows: [
      { scope: 'Single wave', includes: 'A set of pages posting around one moment', range: PENDING_RANGE },
      { scope: 'Multi-wave campaign', includes: 'Several waves across weeks, with meme writing', range: PENDING_RANGE },
    ],
  },
  faqs: [
    {
      q: 'What are meme page promotion services?',
      a: 'We place your meme, reel or post on meme pages chosen for your audience, write or check the content for each page, schedule it and report every post.',
    },
    {
      q: 'Can I give you my own memes?',
      a: 'Yes. We check that each one fits the page it’s going on and suggest changes if it doesn’t.',
    },
    {
      q: 'How do you choose meme pages?',
      a: 'By who follows them, how engaged those followers are and whether the page’s humour suits you, not by follower count alone.',
    },
    {
      q: 'Do you promote on regional meme pages?',
      a: 'Yes, including Punjabi meme pages, with content written in the audience’s language.',
    },
    {
      q: 'How fast can posts go live?',
      a: 'Usually within a few days of approval, depending on the pages’ schedules.',
    },
  ],
  related: [
    { title: 'Meme Marketing', desc: 'Strategy, original memes and full campaigns.', href: '/services/meme-marketing' },
    { title: 'Instagram Promotion', desc: 'Meme pages plus entertainment pages and creators.', href: '/services/instagram-promotion' },
    { title: 'Hashtag Campaigns', desc: 'The same moment, on X.', href: '/services/x-twitter-trends/hashtag-campaigns' },
  ],
  updatedAt: '2026-11-28',
}

/* ======================================================================== */
/*  /services/pr-media-coverage/paps-page-promotion                         */
/* ======================================================================== */

const papsPagePromotion: LandingPage = {
  path: '/services/pr-media-coverage/paps-page-promotion',
  parent: { name: 'PR & Media Coverage', path: '/services/pr-media-coverage' },
  name: 'Paps Page Promotion',
  icon: 'Camera',
  metaTitle: 'Paps Page Promotion for Celebs and Brands',
  metaDescription:
    'Paps page promotion: your event, appearance or launch on paparazzi Instagram pages. One campaign used a network of 12 paparazzi photographers.',
  h1: 'Paps page promotion for appearances, events and launches',
  mainKeyword: 'paps page promotion',
  serviceType: 'Paps page promotion',
  promise:
    'We get photographers to your appearance and your photos and videos onto paparazzi pages on Instagram, with the caption agreed and every post linked in your report.',
  whatIs: {
    title: 'What is paps page promotion?',
    paragraphs: [
      'Paps page promotion is getting your photos and videos posted on paparazzi (paps) pages: Instagram and YouTube accounts run by entertainment photographers, followed by people who want to see celebrities at airports, events, gyms, screenings and launches. A post there tells their followers you’re someone worth photographing.',
      'It’s one part of what we do as a [PR agency in India](/services/pr-media-coverage). News articles build credibility in search; paps posts build visibility in the feed, fast. Most campaigns use both, so people who see you on a paps page find real coverage when they search your name.',
    ],
  },
  included: [
    { title: 'Moment planning', desc: 'Which appearance, event or outing to cover, and when, so there’s something worth photographing.' },
    { title: 'Photographer coordination', desc: 'Photographers briefed on the time, place and who to cover.' },
    { title: 'Paps page posts', desc: 'Photos and videos posted on paparazzi pages matched to your audience.' },
    { title: 'Caption and tag check', desc: 'Your name spelt right, the right tags, and the line you want people to remember.' },
    { title: 'Entertainment page pickup', desc: 'Where it fits, the same moment shared by entertainment and news pages too.' },
    { title: 'Report', desc: 'Every live post with page, date and views, plus the best clips for your own account.' },
  ],
  process: [
    { title: 'Brief', desc: 'Who you are, what’s coming up and what you want people to notice.' },
    { title: 'Plan', desc: 'The moments to cover and the pages to post on, with costs.' },
    { title: 'Coverage', desc: 'Photographers at the appearance or event.' },
    { title: 'Posting', desc: 'Pages post the photos and videos with the agreed captions.' },
    { title: 'Report', desc: 'Links, views and the clips you can reuse.' },
  ],
  whoFor: {
    title: 'Who uses paps page promotion',
    items: [
      'Actors and TV faces between projects',
      'Reality show contestants before and after the show',
      'Singers and artists around a release',
      'Films and series at screenings and promotions',
      'Brands at launches and store openings',
      'Creators moving into mainstream entertainment',
    ],
  },
  sections: [
    {
      id: 'paparazzi-coverage-services',
      eyebrow: 'Paparazzi coverage services',
      title: 'Paparazzi coverage services: which moments work',
      paragraphs: [
        'Paparazzi coverage works when there’s a person, a place and a reason. A random outing gets a few views. An airport look the day before a release, a screening with the cast, or a first public appearance after a reality show gets shared, because followers already know why it matters.',
      ],
      table: {
        caption: 'Moments that work well for paps page promotion',
        head: ['Moment', 'Why it works', 'Tip'],
        rows: [
          ['Airport arrivals', 'The classic paps format, easy to share', 'Plan the look; it’s what people comment on'],
          ['Screenings and premieres', 'Cast and guests together, clear news hook', 'Arrive with co-stars for better frames'],
          ['Launches and store openings', 'Brand and face in the same shot', 'Keep the brand visible but natural'],
          ['After a reality show exit', 'Fans want the first look outside the house', 'Go out soon after the exit, while interest is high'],
          ['Song or trailer promotions', 'Ties the face to the release', 'Mention the release in the caption'],
        ],
      },
    },
    {
      id: 'with-other-channels',
      eyebrow: 'Beyond paps',
      title: 'Paps pages work better with the rest of the plan',
      paragraphs: [
        'A paps video is the start of a moment, not the end. The same clip can go to entertainment pages, turn into a meme through [meme page promotion](/services/meme-marketing/meme-page-promotion), or go into a wider [Instagram promotion](/services/instagram-promotion) plan. For fan-driven moments, a [Twitter hashtag campaign](/services/x-twitter-trends/hashtag-campaigns) takes it to X the same day.',
        'If you want to know which entertainment pages carry this kind of content, our list of [top entertainment news pages on Instagram in India](/blog/top-entertainment-news-pages-on-instagram-india) is a good place to start.',
      ],
    },
    {
      id: 'checklist',
      eyebrow: 'Checklist',
      title: 'Before your paps coverage',
      checklist: [
        'Pick one clear reason for the appearance: a release, a launch, an event',
        'Agree the caption and spelling of your name in advance',
        'Plan the outfit and the background',
        'Decide which pages matter most for your audience',
        'Ask for the original clips so you can post them yourself',
      ],
    },
  ],
  proof: {
    title: 'Paps coverage we’ve run',
    paragraphs: [
      'For Niharika Tiwari on Rise & Fall Season 2, paparazzi coverage came from a network of 12 photographers, alongside 143 posts on reality and entertainment media pages and six interviews with national outlets.',
    ],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist'],
  },
  pricing: {
    title: 'What paps page promotion costs',
    paragraphs: [
      'Cost depends on how many appearances you cover, how many pages post, the city and whether you add entertainment pages or news coverage. We quote after the brief. See [pricing](/pricing) or the full [PR & media coverage](/services/pr-media-coverage) service.',
    ],
    rows: [
      { scope: 'Single appearance', includes: 'Photographers at one moment, posts on a set of paps pages', range: PENDING_RANGE },
      { scope: 'Release or launch week', includes: 'Several appearances, paps and entertainment pages, report', range: PENDING_RANGE },
    ],
  },
  faqs: [
    {
      q: 'What is paps page promotion?',
      a: 'Getting your photos and videos from an appearance, event or launch posted on paparazzi pages on Instagram and YouTube, with the caption agreed and every post reported.',
    },
    {
      q: 'Is paps coverage only for big celebrities?',
      a: 'No. Reality show contestants, TV actors, singers, creators and brands use it too, especially around a release, an exit or a launch.',
    },
    {
      q: 'Can I approve the caption?',
      a: 'We agree the caption and your name’s spelling with the pages in advance. Pages keep their own style, so small changes can happen.',
    },
    {
      q: 'Do I get the photos and videos?',
      a: 'We ask for original clips you can post on your own account. Usage depends on each photographer, and we confirm it before the shoot.',
    },
    {
      q: 'Will paps coverage get me into news articles?',
      a: 'Sometimes entertainment portals pick up paps posts, but it isn’t certain. For articles, add our media coverage service.',
    },
  ],
  related: [
    { title: 'PR & Media Coverage', desc: 'News articles, press releases and portals.', href: '/services/pr-media-coverage' },
    { title: 'Instagram Promotion', desc: 'Meme pages, entertainment pages and creators.', href: '/services/instagram-promotion' },
    { title: 'Celebrity PR', desc: 'Long-term image and media for public figures.', href: '/services/celebrity-pr' },
  ],
  updatedAt: '2026-11-28',
}

/** Top-level new service pages (each has its own route folder). */
export const landingServices = { instagramPromotion, youtubePromotion }

/** Sub-service pages, served by app/services/[slug]/[sub]/page.tsx. */
export const subServicePages: LandingPage[] = [hashtagCampaigns, memePagePromotion, papsPagePromotion]

export const getSubServicePage = (slug: string, sub: string) =>
  subServicePages.find((p) => p.path === `/services/${slug}/${sub}`)

/** Every landing page, for the sitemap. */
export const allLandingPages: LandingPage[] = [instagramPromotion, youtubePromotion, ...subServicePages]
