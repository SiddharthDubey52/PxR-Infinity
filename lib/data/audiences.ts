import type { Faq } from './services'

/**
 * "WHO WE WORK WITH" pages — one per audience, at /<slug>.
 * Each has its own main keyword (never reused elsewhere), its own FAQ, and links to the
 * matching services, case studies (only published ones show) and guides.
 */
export type Audience = {
  slug: string
  mainKeyword: string
  metaTitle: string // used as-is
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string[]
  challenges: { title: string; desc: string }[]
  howWeHelp: { title: string; desc: string }[]
  sections: { title: string; paragraphs: string[] }[]
  services: string[]
  caseStudies: string[]
  posts: string[]
  faqs: Faq[]
  updatedAt: string
}

export const audiences: Audience[] = [
  {
    slug: 'pr-for-tv-actors',
    mainKeyword: 'PR for TV actors',
    metaTitle: 'PR for TV Actors in India | PXR Infinity',
    metaDescription:
      'PR for TV actors: media features, paparazzi visibility, fan clubs, memes and X trends that keep you in the conversation between shows, launches and seasons.',
    eyebrow: 'For TV actors',
    h1: 'PR for TV actors who want to stay in the conversation',
    intro: [
      'Television gives an actor something few other mediums do: a daily audience. Viewers spend months with a character. But the moment a show ends or takes a break, that attention can disappear just as fast. Good PR for TV actors makes sure the audience follows the actor, not just the character.',
      'PXR Infinity runs PR for TV actors across daily soaps, reality shows and OTT series. We combine media features, paparazzi visibility, fan club organisation, meme pages and X trends into one plan, so your name keeps showing up between shows as well as during them.',
    ],
    challenges: [
      { title: 'The character overshadows the actor', desc: 'Viewers know the role name but not yours. When the show ends, so does the recognition.' },
      { title: 'Gaps between shows', desc: 'Months between projects can make an actor feel forgotten online.' },
      { title: 'Moving to OTT or films', desc: 'Casting teams look at your profile, coverage and following before they call.' },
      { title: 'Clips taken out of context', desc: 'A single scene or reality show moment can define you for weeks if nobody responds.' },
    ],
    howWeHelp: [
      { title: 'Media features and interviews', desc: 'Portal features, interviews and announcement coverage around new shows and milestones.' },
      { title: 'Paparazzi visibility', desc: 'Airport looks, event arrivals and set visits covered by paps pages.' },
      { title: 'Fan club organisation', desc: 'Your fan clubs working together around birthdays, launches and show moments.' },
      { title: 'Memes and edits', desc: 'Your best scenes turned into shareable posts across meme and entertainment pages.' },
      { title: 'X trends', desc: 'Trends for birthdays, new show launches and big episodes.' },
      { title: 'Social media management', desc: 'A steady, professional presence on your own accounts.' },
    ],
    sections: [
      {
        title: 'From the character to your name',
        paragraphs: [
          'The goal of PR for TV actors is simple: make sure people know you, not only your role. We do it by putting your own voice in front of viewers. Interviews where you talk about your journey and your craft. Behind-the-scenes content from the set. Fan club posts that use your name alongside the character’s. Over a season, viewers start searching for you, following you and looking out for your next project.',
          'When a show is on air, we tie your PR to the episodes: big scenes become memes and edits, emotional moments become fan posts, and milestones such as an anniversary episode become media stories.',
        ],
      },
      {
        title: 'Between shows, and the move to OTT and films',
        paragraphs: [
          'The months between projects are where most TV actors lose momentum. A light, steady plan keeps you visible: a few media features, paparazzi coverage at events, birthday and anniversary trends, and regular posts on your own accounts. When the next project is announced, the audience is already there.',
          'If you’re moving into OTT or films, your digital presence is part of how casting teams see you. A clean profile, recent coverage and an active, real fan base help. We plan PR around that move, so your announcement lands with the right media and the right audience.',
        ],
      },
      {
        title: 'TV actors in reality shows',
        paragraphs: [
          'Many TV actors enter reality shows like Bigg Boss, Rise and Fall or Lock Upp. Inside the house, you can’t post or respond, and clips can shape how millions of viewers see you. Our reality show PR team runs your accounts, organises your fan clubs, shares your best moments and responds calmly when a clip goes against you. Read our guide on preparing PR before entering a reality show.',
        ],
      },
    ],
    services: ['celebrity-pr', 'pr-media-coverage', 'social-media-management', 'reality-show-pr'],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist', 'rajat-dalal-bigg-boss-18-pr-campaign'],
    posts: ['media-kit-checklist-for-actors', 'how-to-prepare-pr-before-entering-a-reality-show', 'crisis-pr-guide-for-indian-celebrities'],
    faqs: [
      { q: 'What does PR for TV actors include?', a: 'Media features and interviews, paparazzi coverage, fan club organisation, memes and edits from your scenes, X trends for big moments, and management of your own social accounts. We pick the mix based on where you are in your career.' },
      { q: 'Can you do PR while my show is on air?', a: 'Yes, and that is often the best time. We tie your PR to episodes and milestones, so the attention you get on screen turns into attention for you.' },
      { q: 'I am between shows. Is PR still worth it?', a: 'Yes. A light, steady plan between projects keeps you visible, so your next announcement reaches an audience that already knows you.' },
      { q: 'Will you work with my channel or production house’s PR team?', a: 'Yes. We often handle the digital side, such as memes, trends, fan clubs and portals, while the channel’s team handles official communication.' },
      { q: 'Do you need a contract for a full year?', a: 'No. We can plan around a single launch, a season or a longer period. We’ll suggest what fits your goals.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-youtubers-and-creators',
    mainKeyword: 'PR for YouTubers and creators',
    metaTitle: 'PR for YouTubers and Creators in India | PXR Infinity',
    metaDescription:
      'PR for YouTubers and creators: media features, meme pages, X trends, brand-ready profiles and reality show PR, so your audience and reputation grow together.',
    eyebrow: 'For YouTubers & creators',
    h1: 'PR for YouTubers and creators building more than a channel',
    intro: [
      'A creator can have millions of subscribers and still be unknown to the media, to brands outside their niche and to people who don’t watch their content. PR for YouTubers and creators closes that gap: it takes the audience you’ve built and turns it into recognition, coverage and opportunities beyond the platform.',
      'PXR Infinity works with YouTubers, Instagram creators and streamers on media features, meme page campaigns, X trends, brand-ready profiles and reality show PR. Our Bigg Boss 19 campaign for Mridul Tiwari, a creator with a large YouTube audience, is one example.',
    ],
    challenges: [
      { title: 'Known on one platform only', desc: 'Your subscribers know you, but the media and the wider internet don’t.' },
      { title: 'Brand deals stuck in one niche', desc: 'Brands outside your category don’t see you as a fit yet.' },
      { title: 'Controversy without context', desc: 'A clip or comment goes viral and you need to respond without making it worse.' },
      { title: 'Big moves need a team', desc: 'A reality show, a music launch or a first film needs more than your own channel.' },
    ],
    howWeHelp: [
      { title: 'Media features', desc: 'Interviews and features on entertainment and news portals about your journey and milestones.' },
      { title: 'Meme page campaigns', desc: 'Your moments and catchphrases shared across meme pages to reach new audiences.' },
      { title: 'X trends', desc: 'Trends for milestones, launches and big announcements.' },
      { title: 'Brand-ready profile', desc: 'A clean bio, media kit and coverage that brands can check quickly.' },
      { title: 'Reality show PR', desc: 'Full outside support if you enter Bigg Boss or another reality show.' },
      { title: 'Crisis response', desc: 'Calm, fast responses when something is taken out of context.' },
    ],
    sections: [
      {
        title: 'From creator to public figure',
        paragraphs: [
          'Creators grow inside the platform. PR helps you grow outside it. A portal feature about your journey reaches people who have never seen your videos. A meme page post with your catchphrase reaches a completely different audience. An X trend on your milestone tells the media that your community is active and organised. Together, these turn a channel into a name.',
          'We start by finding the story. Where you came from, what makes your content different, the milestone you just hit. Then we put that story in front of the media, meme pages and creators who reach the people you don’t yet reach.',
        ],
      },
      {
        title: 'Creators in reality shows',
        paragraphs: [
          'More creators are entering reality shows than ever. It is a huge opportunity, and also a risk: your fans expect you to be the person they know, and the show’s edit may show a different side. For Mridul Tiwari in Bigg Boss 19, his fans felt he wasn’t getting enough screen time or credit. We picked one message per week, briefed his fan clubs to post together and turned key moments into X trends. Three reached #1 in India.',
        ],
      },
      {
        title: 'Brand collaborations',
        paragraphs: [
          'Brands look at more than your follower count. They check coverage, how you’re talked about and whether you fit their image. A media kit, a few strong features and a clean, consistent profile make that check easy. We help you put those in place, so collaborations outside your niche become possible.',
        ],
      },
    ],
    services: ['personal-branding', 'reality-show-pr', 'meme-marketing', 'x-twitter-trends'],
    caseStudies: ['mridul-tiwari-bigg-boss-19-x-trends'],
    posts: ['how-to-build-a-fan-base-on-social-media', 'instagram-pe-famous-kaise-bane', 'trolling-ka-jawab-kaise-de'],
    faqs: [
      { q: 'Why does a YouTuber need PR?', a: 'Your channel reaches your subscribers. PR reaches everyone else: media, brands and audiences on other platforms. It turns a big channel into a recognised name.' },
      { q: 'Can you get YouTubers featured in the media?', a: 'Yes. We pitch your story, milestones and launches to entertainment and digital news portals that cover creators.' },
      { q: 'Do you help creators who are entering reality shows?', a: 'Yes. We run your accounts, organise your fan clubs, share your best moments and plan trends while you’re inside. See our Mridul Tiwari Bigg Boss 19 case study.' },
      { q: 'How do you handle a controversy?', a: 'Quickly and calmly. We find the full context, agree a short response with you, and make sure fan communities share one calm line instead of arguing.' },
      { q: 'Is PR only for big creators?', a: 'No. Growing creators often get the most from PR, because a few strong features and a meme campaign can introduce them to a much bigger audience.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-ott-shows',
    mainKeyword: 'PR for OTT shows',
    metaTitle: 'PR for OTT Shows and Web Series | PXR Infinity',
    metaDescription:
      'PR for OTT shows: X campaigns, meme pages, creators and media coverage across premiere week and the whole season, so viewers press play and keep watching.',
    eyebrow: 'For OTT platforms & producers',
    h1: 'PR for OTT shows that keeps viewers pressing play',
    intro: [
      'An OTT show doesn’t get a box-office weekend. It gets a premiere, and then it has to stay in the conversation long enough for people to start watching and keep watching. PR for OTT shows is about that whole run: the announcement, the trailer, premiere week and every week of the season after it.',
      'PXR Infinity runs OTT campaigns on X, meme pages, creators and media. For Prime Video’s The Alliance, a daily reality show, we covered all 42 episodes on X across a six-week season and planned a finale-day trend that reached #1 in India. The show was renewed for Season 2.',
    ],
    challenges: [
      { title: 'A crowded release calendar', desc: 'New shows drop every week, often on the same day as yours.' },
      { title: 'A new format with no fan base', desc: 'Original shows don’t start with an audience. It has to be built.' },
      { title: 'Interest fades after premiere week', desc: 'A strong launch isn’t enough if the conversation stops by week two.' },
      { title: 'Reaching people outside the platform', desc: 'Viewers need to hear about the show where they already spend time: Instagram, X and YouTube.' },
    ],
    howWeHelp: [
      { title: 'Season-long X campaigns', desc: 'Episode coverage, character moments and weekly trends through the season.' },
      { title: 'Meme page campaigns', desc: 'Scenes, dialogues and characters turned into posts people share.' },
      { title: 'Creator reactions', desc: 'Creators reviewing, reacting and recommending the show.' },
      { title: 'Media coverage', desc: 'Portal features, cast interviews and announcement coverage.' },
      { title: 'Trailer and premiere pushes', desc: 'Trends and creator posts timed to the biggest launch moments.' },
      { title: 'Finale campaigns', desc: 'A planned finale-day trend and wrap-up coverage.' },
    ],
    sections: [
      {
        title: 'Premiere week is the start, not the finish',
        paragraphs: [
          'Most OTT marketing spends heavily on the trailer and the premiere, then goes quiet. But a series is watched over weeks. People start late, binge on a weekend or come back for the finale. PR for OTT shows has to keep giving them reasons to talk about it.',
          'We plan in three layers. Launch moments: announcement, trailer and premiere, with trends, creators and media. Weekly moments: strong episodes, character memes and fan reactions. Finale: a big push that brings back viewers who drifted and pulls in people who heard the buzz late.',
        ],
      },
      {
        title: 'What we learned on The Alliance',
        paragraphs: [
          'The Alliance was a brand-new daily format with no fan base, and a rival reality show launched the very next day. We ran an X PR campaign across the full six-week season, covering all 42 daily episodes, to build a conversation from scratch. On finale day, a planned trend reached #1 in India. Daily shows need daily presence, and consistency over the season mattered more than any single launch-day spike.',
        ],
      },
      {
        title: 'Working with your team',
        paragraphs: [
          'Platforms and producers usually have an in-house team or a main agency for official channels. We fit in alongside them, handling memes, trends, creators and digital portals, with approvals on anything that uses footage before release.',
        ],
      },
    ],
    services: ['movie-web-series-promotion', 'x-twitter-trends', 'meme-marketing', 'influencer-marketing'],
    caseStudies: ['the-alliance-prime-video-x-campaign'],
    posts: ['x-trends-for-film-and-ott-releases', 'meme-marketing-examples-india', 'how-to-plan-an-x-trend-campaign'],
    faqs: [
      { q: 'What does PR for OTT shows include?', a: 'Season-long X campaigns, meme page campaigns from your scenes, creator reactions, portal coverage and cast interviews, with special pushes for the trailer, premiere and finale.' },
      { q: 'Have you worked on an OTT show before?', a: 'Yes. For Prime Video’s The Alliance we covered all 42 daily episodes on X across the six-week season. The finale-day trend reached #1 in India and the show was renewed for Season 2.' },
      { q: 'When should OTT promotion start?', a: 'From the announcement or first look if possible, so the audience builds before the trailer. Shorter timelines can still work with a stronger premiere-week push.' },
      { q: 'Can you use footage before release?', a: 'Only assets you approve, and nothing from unreleased footage goes out without your sign-off.' },
      { q: 'Do you work on regional OTT shows?', a: 'Yes. We pick meme pages, creators and portals that match the show’s language and audience.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-music-labels-and-artists',
    mainKeyword: 'PR for music labels and artists',
    metaTitle: 'PR for Music Labels and Artists | PXR Infinity',
    metaDescription:
      'PR for music labels and artists: reel audio campaigns, meme pages, creators, X trends and media features that help a song reach listeners after release.',
    eyebrow: 'For labels & artists',
    h1: 'PR for music labels and artists, built around the release',
    intro: [
      'A song today is discovered in reels as often as on streaming apps. If creators don’t pick up the audio and meme pages don’t use the hook, even a great track can pass unnoticed. PR for music labels and artists has to work where listeners actually find music.',
      'PXR Infinity plans music campaigns around the release: teaser clips, reel audio campaigns with creators, meme pages using the hook, X trends on release day and media features for the artist. We work with labels on single releases and albums, and with independent artists building their name.',
    ],
    challenges: [
      { title: 'Hundreds of releases every week', desc: 'New songs compete for the same playlists, reels and attention.' },
      { title: 'Audio that never reaches reels', desc: 'Without creators using it early, the audio never builds momentum.' },
      { title: 'The artist stays unknown', desc: 'Listeners know the hook but not who made it.' },
      { title: 'Release-week spikes that fade', desc: 'A strong first day isn’t enough if nothing follows it.' },
    ],
    howWeHelp: [
      { title: 'Reel audio campaigns', desc: 'Creators using the audio in trends, dances, lip-syncs and edits.' },
      { title: 'Meme page campaigns', desc: 'Meme pages using the hook or lyrics in relatable posts.' },
      { title: 'X trends', desc: 'Release-day trends for the song or album.' },
      { title: 'Artist features', desc: 'Interviews and features about the artist’s story and the song.' },
      { title: 'Regional campaigns', desc: 'Pages and creators that match the song’s language, including Punjabi music.' },
      { title: 'Post-release sustain', desc: 'Keep the audio moving in weeks two and three.' },
    ],
    sections: [
      {
        title: 'How a song travels now',
        paragraphs: [
          'Most listeners hear a new song for the first time in a reel. If enough creators use the audio, the platform shows it to more people, more creators pick it up, and the song finds its way to streaming. Meme pages speed this up by using the hook in posts people share. X trends and media features add visibility and credibility around release day.',
          'PR for music labels and artists brings these together in one plan. We decide which part of the song is the hook, which creators and pages fit its mood and language, and when each wave goes live.',
        ],
      },
      {
        title: 'Phases of a music campaign',
        paragraphs: [
          'Before release: teaser clips, the artist announcing the date, a few creators previewing the hook. Release day: creators and meme pages go live together, an X trend for the song, and media coverage. Weeks two and three: a second wave of creators, fan edits and reaction posts to keep the audio moving. For albums, we repeat the cycle for each focus track.',
        ],
      },
      {
        title: 'Building the artist, not just the song',
        paragraphs: [
          'A hit song helps an artist only if people know who sang it. Alongside the song campaign, we run artist PR: interviews, features about their journey and behind-the-scenes content. That way the next release starts with an audience.',
        ],
      },
    ],
    services: ['music-album-promotion', 'influencer-marketing', 'meme-marketing', 'x-twitter-trends'],
    caseStudies: [],
    posts: ['song-viral-kaise-kare', 'reel-viral-kaise-kare', 'meme-marketing-examples-india'],
    faqs: [
      { q: 'What does PR for music labels and artists include?', a: 'Reel audio campaigns with creators, meme pages using the hook, release-day X trends, artist interviews and features, and post-release waves to keep the audio moving.' },
      { q: 'When should music promotion start?', a: 'A week or two before release is ideal, so creators and pages are ready on release day. Teasers can start earlier.' },
      { q: 'Do you promote Punjabi and regional songs?', a: 'Yes. We use pages and creators that speak the song’s language, including Punjabi meme pages.' },
      { q: 'Can you promise a song will go viral?', a: 'No. Nobody can promise that. We plan the campaign to give the song the best chance and report honestly on how it did.' },
      { q: 'Do you work with independent artists?', a: 'Yes. Independent artists often get the most from a focused campaign, because the right creators and pages can introduce them to a whole new audience.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-startups-and-d2c-brands',
    mainKeyword: 'PR for startups and D2C brands',
    metaTitle: 'PR for Startups and D2C Brands | PXR Infinity',
    metaDescription:
      'PR for startups and D2C brands: launch coverage, meme marketing, creators, X trends and founder stories that build awareness and trust without a big ad budget.',
    eyebrow: 'For startups & D2C brands',
    h1: 'PR for startups and D2C brands that need to be noticed fast',
    intro: [
      'A startup or D2C brand usually has a great product, a small budget and very little time to prove itself. Ads can bring clicks, but they don’t build trust. PR for startups and D2C brands does: media coverage gives you credibility, meme pages and creators make people talk about you, and founder stories give the brand a human face.',
      'PXR Infinity plans launch and growth campaigns for startups and D2C brands: launch coverage on digital portals, meme marketing, creator campaigns, X trends and moment marketing. We focus on the Gen Z and millennial audiences who discover brands on Instagram and X.',
    ],
    challenges: [
      { title: 'Nobody has heard of you', desc: 'A new brand starts with zero awareness and zero trust.' },
      { title: 'Ads get expensive fast', desc: 'Paid reach stops the moment the budget does.' },
      { title: 'Big brands own the conversation', desc: 'Established players have years of media presence and recall.' },
      { title: 'A launch that disappears in a day', desc: 'Launch posts fade quickly without a plan for the weeks after.' },
    ],
    howWeHelp: [
      { title: 'Launch coverage', desc: 'Announcements and founder stories on relevant digital portals.' },
      { title: 'Meme marketing', desc: 'Meme pages that make your brand part of everyday internet jokes.' },
      { title: 'Creator campaigns', desc: 'Micro-creators who use and recommend your product to the right audience.' },
      { title: 'Moment marketing', desc: 'Fast, on-brand posts around trending moments.' },
      { title: 'X trends', desc: 'A launch-day trend to mark the moment.' },
      { title: 'Founder PR', desc: 'Interviews and features that tell the story behind the brand.' },
    ],
    sections: [
      {
        title: 'Why PR works for young brands',
        paragraphs: [
          'People buy from brands they have heard of and trust. A feature on a respected portal, a creator they follow using your product and a meme that makes them laugh all build that trust faster than another ad. And unlike ads, coverage and good posts keep working after the campaign ends: they show up in search, get shared and become proof you can point to.',
          'For startups and D2C brands, we plan PR in two parts. The launch: a short, loud burst of coverage, memes, creators and a trend. The months after: steady founder stories, moment marketing and creator content, so the brand keeps showing up.',
        ],
      },
      {
        title: 'Meme marketing for brands',
        paragraphs: [
          'Meme marketing is one of the most effective ways for a young brand to reach Gen Z. A product that becomes part of a relatable joke gets shared in DMs and group chats, which is reach that ads can’t buy. We match your brand to meme pages whose audience fits your customer, and write formats that feel natural to each page.',
        ],
      },
      {
        title: 'Founder stories',
        paragraphs: [
          'Customers like knowing who is behind a brand. A founder’s journey, a first factory, a problem they set out to solve: these are the stories portals want to publish and customers want to read. We find the angle, prepare the founder and pitch it to the right outlets.',
        ],
      },
    ],
    services: ['brand-launch-campaigns', 'meme-marketing', 'influencer-marketing', 'pr-media-coverage'],
    caseStudies: [],
    posts: ['how-to-market-a-startup-in-india', 'pr-vs-advertising', 'what-is-meme-marketing-in-india'],
    faqs: [
      { q: 'What does PR for startups and D2C brands include?', a: 'Launch coverage on digital portals, founder interviews, meme marketing, creator campaigns, moment marketing and launch-day X trends, planned as one campaign.' },
      { q: 'Is PR worth it for an early-stage startup?', a: 'Often yes, because coverage and word of mouth keep working after the campaign ends. A focused launch plan can do a lot on a small budget.' },
      { q: 'How is PR different from advertising?', a: 'Ads are paid space you control. PR is earned attention: media, creators and pages talking about you. Most brands need both. Read our guide on PR vs advertising.' },
      { q: 'Can meme marketing work for a serious product?', a: 'Yes, if the humour fits the brand and the audience. We match the tone to your brand and you approve every post.' },
      { q: 'How fast can you launch a campaign?', a: 'A launch campaign can be ready in one to two weeks. Moment marketing posts can go live within hours.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-reality-show-contestants',
    mainKeyword: 'PR for reality show contestants',
    metaTitle: 'PR for Reality Show Contestants | PXR Infinity',
    metaDescription:
      'PR for reality show contestants and families: account management, fan clubs, X trends, meme and media pages and calm crisis response, entry day to finale.',
    eyebrow: 'For contestants & families',
    h1: 'PR for reality show contestants, from entry day to finale',
    intro: [
      'When a contestant walks into a reality show, their family and friends suddenly become their only voice outside. They have to run the accounts, answer fans, respond to clips and ask for votes, usually with no experience of any of it. PR for reality show contestants gives them a team that does this every season.',
      'PXR Infinity has worked with contestants on Bigg Boss, Rise and Fall, Lock Upp and Prime Video’s The Alliance. We run the contestant’s accounts, organise fan clubs around one message, plan X trends, share their best moments on meme and media pages and respond calmly when the house turns against them.',
    ],
    challenges: [
      { title: 'The contestant can’t speak for themselves', desc: 'Inside the house there is no phone, no posting and no replies.' },
      { title: 'One clip can change everything', desc: 'A single moment can shape how viewers see a contestant for weeks.' },
      { title: 'Fans pull in different directions', desc: 'Many fan clubs, many hashtags, no shared plan.' },
      { title: 'Families are new to this', desc: 'Running a public campaign is hard while also worrying about your family member.' },
    ],
    howWeHelp: [
      { title: 'Pre-entry setup', desc: 'Profiles, account access, a photo bank, fan pages and day-one posts.' },
      { title: 'Account management', desc: 'Daily posts on the contestant’s accounts, in their voice.' },
      { title: 'Fan club organisation', desc: 'One message a week, shared hashtags and a posting plan.' },
      { title: 'X trends and Spaces', desc: 'Weekly trends, moment trends and live X Spaces.' },
      { title: 'Meme and media pages', desc: 'Clips and moments shared across Instagram meme and reality TV pages.' },
      { title: 'Crisis response', desc: 'Calm, factual responses with context when a clip goes against them.' },
    ],
    sections: [
      {
        title: 'What changes when a team is outside',
        paragraphs: [
          'Contestants who go deep into a season almost always have a strong team outside. The difference shows up every day: their best moments are shared within hours, their supporters know what to post and when, voting reminders are clear and repeated, and when something goes wrong, the response is calm and quick instead of angry and scattered.',
          'For Rajat Dalal in Bigg Boss 18, we brought many separate fan clubs together around one message, with shared hashtags, daily posting and live X Spaces. #RajatIsTheBoss logged 210K mentions between 13 and 17 January 2025. For Niharika Tiwari in Rise and Fall, we built her story around her journey from Gidam in Bastar to national reality TV, with 143 media page posts, 330+ meme page posts and six interviews.',
        ],
      },
      {
        title: 'Working with the family',
        paragraphs: [
          'We work closely with the contestant’s family or manager. They approve the plan and anything sensitive, and we take on the daily work. Families often tell us the biggest relief is not having to decide what to post at midnight after a difficult episode.',
        ],
      },
      {
        title: 'What we won’t do',
        paragraphs: [
          'We don’t attack other contestants or their families, we don’t use fake accounts or fake votes, and we don’t promise a win. Our job is to make sure the people who like the contestant can see them, understand them and support them in an organised way.',
        ],
      },
    ],
    services: ['reality-show-pr', 'bigg-boss-pr', 'x-twitter-trends', 'meme-marketing'],
    caseStudies: ['rajat-dalal-bigg-boss-18-pr-campaign', 'mridul-tiwari-bigg-boss-19-x-trends', 'niharika-tiwari-rise-and-fall-finalist'],
    posts: ['how-to-prepare-pr-before-entering-a-reality-show', 'fan-club-guide-for-contestants', 'x-trends-for-reality-show-contestants'],
    faqs: [
      { q: 'What does PR for reality show contestants include?', a: 'Pre-entry setup, daily management of the contestant’s accounts, fan club organisation, weekly X trends and Spaces, meme and media page coverage, voting reminders and calm crisis response.' },
      { q: 'Which shows have you worked on?', a: 'Bigg Boss (seasons 17 to 20), Rise and Fall, Lock Upp and Prime Video’s The Alliance.' },
      { q: 'Can you start after the contestant has already entered?', a: 'Yes. Many families contact us after the first nomination. We can set up quickly, though starting before entry gives the best result.' },
      { q: 'Do you need the contestant’s account passwords?', a: 'Only if the family wants us to run the accounts. Access is agreed in writing with the family or manager, and we follow the show’s rules on posting.' },
      { q: 'Can you promise the contestant will win?', a: 'No. Results depend on the show, the contestant’s journey and the public vote. We commit to consistent, professional support every day of the season.' },
    ],
    updatedAt: '2026-11-26',
  },
]

export const getAudience = (slug: string) => audiences.find((a) => a.slug === slug)
