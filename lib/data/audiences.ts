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
      'PR for TV actors in India: portal features, paparazzi coverage, fan clubs, memes and X trends, while your show is on air and in the gaps between shows.',
    eyebrow: 'For TV actors',
    h1: 'PR for TV actors, on air and between shows',
    intro: [
      'TV actors get something most actors don’t: an audience that watches them every day for months. The catch is that people often remember the character’s name, not yours. And once the show goes off air, that attention drops quickly.',
      'We handle PR for TV actors across daily soaps, reality shows and OTT series. Usually that means a mix of portal features, paparazzi coverage, fan club coordination, memes from your scenes and an X trend when there’s a big moment, all planned around what’s coming up for you.',
    ],
    challenges: [
      { title: 'People know the character, not you', desc: 'Viewers search for the role name. When the show ends, the recognition goes with it.' },
      { title: 'Long gaps between shows', desc: 'A few quiet months and your feed goes cold.' },
      { title: 'Moving to OTT or films', desc: 'Casting teams look you up. Recent coverage and an active following help.' },
      { title: 'A clip that gets out of hand', desc: 'One scene or reality show moment can follow you for weeks if nobody puts it in context.' },
    ],
    howWeHelp: [
      { title: 'Features and interviews', desc: 'Portal features and interviews around new shows, milestones and announcements.' },
      { title: 'Paparazzi coverage', desc: 'Airport looks, event arrivals and set visits on paps pages.' },
      { title: 'Fan club coordination', desc: 'Your fan clubs posting together for birthdays, launches and big episodes.' },
      { title: 'Memes and edits', desc: 'Your best scenes on meme and entertainment pages.' },
      { title: 'X trends', desc: 'For birthdays, show launches and big episodes.' },
      { title: 'Your own accounts', desc: 'Regular, good-looking posts on your Instagram and X.' },
    ],
    sections: [
      {
        title: 'Getting people to know your name',
        paragraphs: [
          'We put you in front of viewers as yourself. Interviews about how you got here, behind-the-scenes posts from the set, and fan club posts that use your name next to the character’s. Over a season, more people start looking you up and following you directly.',
          'While a show is on air, we plan your PR around the episodes. Big scenes go to meme and entertainment pages, emotional moments go to your fan clubs, and milestones like an anniversary episode go to the portals.',
        ],
      },
      {
        title: 'Between shows, and moving to OTT or films',
        paragraphs: [
          'Between projects we keep it light: a few features, paps coverage at events, a birthday trend and regular posts on your own accounts. When your next show is announced, people are already paying attention.',
          'If you’re moving into OTT or films, we plan the announcement with that in mind. The right portals, the right pages, and a profile that looks current when a casting team checks.',
        ],
      },
      {
        title: 'If you’re entering a reality show',
        paragraphs: [
          'A lot of TV actors end up on Bigg Boss, Rise and Fall or Lock Upp. Inside the house you can’t post or reply, and the edit decides a lot. Our reality show team runs your accounts, coordinates your fan clubs, shares your best moments and deals with the clips that go against you. Our guide on preparing PR before entering a reality show covers what to sort out before you go in.',
        ],
      },
    ],
    services: ['celebrity-pr', 'pr-media-coverage', 'social-media-management', 'reality-show-pr'],
    caseStudies: ['niharika-tiwari-rise-and-fall-finalist', 'rajat-dalal-bigg-boss-18-pr-campaign'],
    posts: ['media-kit-checklist-for-actors', 'how-to-prepare-pr-before-entering-a-reality-show', 'crisis-pr-guide-for-indian-celebrities'],
    faqs: [
      { q: 'What does PR for TV actors include?', a: 'Portal features and interviews, paparazzi coverage, fan club coordination, memes from your scenes, X trends for big moments and help with your own accounts. We pick the mix based on what’s coming up for you.' },
      { q: 'Can you do PR while my show is on air?', a: 'Yes, and it’s often the best time. We tie your PR to the episodes, so the attention the show gets starts coming to you as well.' },
      { q: 'I’m between shows. Is PR still worth it?', a: 'Yes. A small, steady plan keeps you visible, so when the next project is announced people already know who you are.' },
      { q: 'Will you work with my channel’s or production house’s PR team?', a: 'Yes. We usually take the digital side, like memes, trends, fan clubs and portals, while their team handles official communication.' },
      { q: 'Do I have to sign up for a full year?', a: 'No. We can work on one launch, one season or longer. We’ll suggest what makes sense for you.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-youtubers-and-creators',
    mainKeyword: 'PR for YouTubers and creators',
    metaTitle: 'PR for YouTubers and Creators in India | PXR Infinity',
    metaDescription:
      'PR for YouTubers and creators in India: media features, meme pages, X trends, a brand-ready profile and reality show PR, to grow beyond your own channel.',
    eyebrow: 'For YouTubers & creators',
    h1: 'PR for YouTubers and creators who want to grow beyond their channel',
    intro: [
      'You can have millions of subscribers and still be a stranger to the media, to brands outside your niche and to anyone who doesn’t watch your videos. PR for YouTubers and creators is about getting known outside your own channel.',
      'We work with YouTubers, Instagram creators and streamers on media features, meme page campaigns, X trends, brand-ready profiles and reality show PR. Mridul Tiwari came into Bigg Boss 19 with a big YouTube audience, and we ran his X trend campaign through the season.',
    ],
    challenges: [
      { title: 'Big on one platform only', desc: 'Your subscribers know you. The media and everyone else don’t.' },
      { title: 'Brand deals stuck in one niche', desc: 'Brands outside your category don’t see you as a fit yet.' },
      { title: 'A clip without context', desc: 'Something goes viral and you need to respond without making it bigger.' },
      { title: 'A big move needs a team', desc: 'A reality show, a song or a first acting role needs more than your own channel.' },
    ],
    howWeHelp: [
      { title: 'Media features', desc: 'Interviews and features on entertainment and news portals.' },
      { title: 'Meme page campaigns', desc: 'Your moments and catchphrases on meme pages, in front of new audiences.' },
      { title: 'X trends', desc: 'For milestones, launches and big announcements.' },
      { title: 'A brand-ready profile', desc: 'A clean bio, a media kit and coverage brands can check quickly.' },
      { title: 'Reality show PR', desc: 'Everything outside the house if you enter Bigg Boss or another show.' },
      { title: 'When something blows up', desc: 'A quick, calm response when a clip is taken out of context.' },
    ],
    sections: [
      {
        title: 'Getting known outside your channel',
        paragraphs: [
          'A portal feature about your journey reaches people who have never seen your videos. A meme page using your catchphrase reaches a completely different crowd. An X trend on a milestone shows the media that your community is active. Put together, these get your name around in places your channel can’t reach.',
          'We start with your story: where you came from, what’s different about your content, the milestone you just hit. Then we take it to the portals, meme pages and creators that reach the people who don’t know you yet.',
        ],
      },
      {
        title: 'Creators on reality shows',
        paragraphs: [
          'More creators are going on reality shows, and it can go either way. Your fans expect the person they know, and the edit may show something else. Mridul Tiwari’s fans felt he wasn’t getting enough screen time or credit in Bigg Boss 19. We gave his fan clubs one message a week, had them post together and turned moments like his captaincy into X trends. Three of them reached #1 in India.',
        ],
      },
      {
        title: 'Brand collaborations',
        paragraphs: [
          'Brands look at more than follower count. They check your coverage, how people talk about you and whether you fit their image. A media kit, a few good features and a tidy profile make that check easy, and open up deals outside your usual niche.',
        ],
      },
    ],
    services: ['personal-branding', 'reality-show-pr', 'meme-marketing', 'x-twitter-trends'],
    caseStudies: ['mridul-tiwari-bigg-boss-19-x-trends'],
    posts: ['how-to-build-a-fan-base-on-social-media', 'instagram-pe-famous-kaise-bane', 'trolling-ka-jawab-kaise-de'],
    faqs: [
      { q: 'Why does a YouTuber need PR?', a: 'Your channel reaches your subscribers. PR reaches the media, brands and people on other platforms, so your name travels further than your videos do.' },
      { q: 'Can you get YouTubers featured in the media?', a: 'Yes. We pitch your story, milestones and launches to entertainment and digital news portals that cover creators.' },
      { q: 'Do you help creators going on reality shows?', a: 'Yes. We run your accounts, coordinate your fan clubs, share your best moments and plan trends while you’re inside. Our Mridul Tiwari Bigg Boss 19 case study shows how.' },
      { q: 'What do you do if something blows up?', a: 'We get the full context, agree a short response with you, and give your fan communities one calm line to share instead of arguing.' },
      { q: 'Is PR only for big creators?', a: 'No. Growing creators often get the most out of it, because a few good features and a meme campaign can put them in front of a much bigger audience.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-ott-shows',
    mainKeyword: 'PR for OTT shows',
    metaTitle: 'PR for OTT Shows and Web Series | PXR Infinity',
    metaDescription:
      'PR for OTT shows and web series: X campaigns, meme pages, creators and media coverage from trailer day to finale, so people start watching and keep going.',
    eyebrow: 'For OTT platforms & producers',
    h1: 'PR for OTT shows, from premiere to finale',
    intro: [
      'An OTT show doesn’t get an opening weekend. It gets a premiere, and then it has to stay in the conversation long enough for people to start watching and keep watching. PR for OTT shows covers that whole run: announcement, trailer, premiere week and every week after.',
      'We run OTT campaigns across X, meme pages, creators and media. For Prime Video’s The Alliance, a daily reality show, we covered all 42 episodes on X over six weeks and planned a finale-day trend that reached #1 in India. The show was renewed for Season 2.',
    ],
    challenges: [
      { title: 'A crowded release calendar', desc: 'New shows drop every week, often on the same day as yours.' },
      { title: 'A new format, no fans yet', desc: 'An original show starts from zero.' },
      { title: 'Interest drops after week one', desc: 'A strong launch doesn’t help much if nobody’s talking about it by week two.' },
      { title: 'Reaching people off the platform', desc: 'People need to hear about the show on Instagram, X and YouTube, where they already are.' },
    ],
    howWeHelp: [
      { title: 'Season-long X campaigns', desc: 'Episode coverage, character moments and weekly trends.' },
      { title: 'Meme page campaigns', desc: 'Scenes, dialogues and characters turned into posts people share.' },
      { title: 'Creator reactions', desc: 'Creators reviewing and recommending the show.' },
      { title: 'Media coverage', desc: 'Portal features, cast interviews and announcements.' },
      { title: 'Trailer and premiere', desc: 'Trends and creator posts on the two biggest launch days.' },
      { title: 'Finale', desc: 'A planned finale-day trend and wrap-up coverage.' },
    ],
    sections: [
      {
        title: 'Planning for the whole season',
        paragraphs: [
          'A lot of OTT marketing goes into the trailer and premiere and then goes quiet. But people watch series over weeks. Some start late, some binge on a weekend, some only come back for the finale. So we plan in three parts.',
          'Launch: announcement, trailer and premiere, with trends, creators and media. Every week after: strong episodes, character memes and fan reactions. Finale: a big push that pulls back people who drifted off and brings in the ones who heard about it late.',
        ],
      },
      {
        title: 'What we learned on The Alliance',
        paragraphs: [
          'The Alliance was a new daily format with no fan base, and a rival reality show launched the next day. We ran an X campaign through the full six weeks, covering all 42 episodes, and planned a finale-day trend that reached #1 in India. On a daily show, turning up every day mattered more than any one big launch moment.',
        ],
      },
      {
        title: 'Working with your team',
        paragraphs: [
          'Most platforms and producers already have an in-house team or a main agency for official channels. We work alongside them on memes, trends, creators and digital portals, and nothing using pre-release footage goes out without your sign-off.',
        ],
      },
    ],
    services: ['movie-web-series-promotion', 'x-twitter-trends', 'meme-marketing', 'influencer-marketing'],
    caseStudies: ['the-alliance-prime-video-x-campaign'],
    posts: ['x-trends-for-film-and-ott-releases', 'meme-marketing-examples-india', 'how-to-plan-an-x-trend-campaign'],
    faqs: [
      { q: 'What does PR for OTT shows include?', a: 'X campaigns through the season, meme pages using your scenes, creator reactions, portal coverage and cast interviews, plus bigger pushes for the trailer, premiere and finale.' },
      { q: 'Have you worked on an OTT show before?', a: 'Yes. For Prime Video’s The Alliance we covered all 42 daily episodes on X over the six-week season. The finale-day trend reached #1 in India and the show was renewed for Season 2.' },
      { q: 'When should OTT promotion start?', a: 'From the announcement or first look if you can, so people know the name before the trailer drops. A shorter run can still work with a bigger premiere week.' },
      { q: 'Can you use footage before release?', a: 'Only what you approve. Nothing from unreleased footage goes out without your sign-off.' },
      { q: 'Do you work on regional OTT shows?', a: 'Yes. We use meme pages, creators and portals that match the show’s language and audience.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-music-labels-and-artists',
    mainKeyword: 'PR for music labels and artists',
    metaTitle: 'PR for Music Labels and Artists | PXR Infinity',
    metaDescription:
      'PR for music labels and artists: reel audio campaigns, meme pages, creators, X trends and artist features, planned around your release.',
    eyebrow: 'For labels & artists',
    h1: 'PR for music labels and artists, planned around the release',
    intro: [
      'These days people hear a new song in a reel before they find it on a streaming app. If creators don’t pick up the audio and meme pages don’t use the hook, a good track can come and go without anyone noticing.',
      'We do PR for music labels and artists around the release: teaser clips, creators using the audio, meme pages using the hook, an X trend on release day and features on the artist. We work with labels on singles and albums, and with independent artists building a name.',
    ],
    challenges: [
      { title: 'Hundreds of releases a week', desc: 'Every new song is fighting for the same playlists and reels.' },
      { title: 'The audio never takes off', desc: 'If creators don’t use it early, it doesn’t build.' },
      { title: 'People know the hook, not the artist', desc: 'The song travels but the name doesn’t.' },
      { title: 'Release week, then nothing', desc: 'A good first day fades if nothing follows.' },
    ],
    howWeHelp: [
      { title: 'Reel audio campaigns', desc: 'Creators using the audio in dances, lip-syncs, trends and edits.' },
      { title: 'Meme page campaigns', desc: 'Meme pages using the hook or lyrics in posts people relate to.' },
      { title: 'X trends', desc: 'A release-day trend for the song or album.' },
      { title: 'Artist features', desc: 'Interviews and features about the artist and the song.' },
      { title: 'Regional campaigns', desc: 'Pages and creators that match the song’s language, including Punjabi music.' },
      { title: 'After release', desc: 'More creators and edits in weeks two and three.' },
    ],
    sections: [
      {
        title: 'How songs get found now',
        paragraphs: [
          'Most people hear a new song in a reel first. When enough creators use the audio, the platform shows it to more people, more creators pick it up, and eventually people go looking for the full track. Meme pages speed that up. An X trend and a few features add noise and credibility around release day.',
          'We plan all of this together. We work out which part of the song is the hook, which creators and pages fit its mood and language, and when each wave goes live.',
        ],
      },
      {
        title: 'How a music campaign runs',
        paragraphs: [
          'Before release: teaser clips, the artist announcing the date, a few creators previewing the hook. Release day: creators and meme pages go live together, plus an X trend and some media coverage. Weeks two and three: another round of creators, fan edits and reactions to keep the audio moving. For an album, we repeat this for each focus track.',
        ],
      },
      {
        title: 'Building the artist as well as the song',
        paragraphs: [
          'A hit only helps if people know who sang it. Alongside the song, we run PR for the artist: interviews, features about their story, behind-the-scenes posts. That way the next release starts with people already listening.',
        ],
      },
    ],
    services: ['music-album-promotion', 'influencer-marketing', 'meme-marketing', 'x-twitter-trends'],
    caseStudies: [],
    posts: ['song-viral-kaise-kare', 'reel-viral-kaise-kare', 'meme-marketing-examples-india'],
    faqs: [
      { q: 'What does PR for music labels and artists include?', a: 'Creators using the audio, meme pages using the hook, a release-day X trend, interviews and features for the artist, and more rounds after release to keep it going.' },
      { q: 'When should music promotion start?', a: 'A week or two before release, so creators and pages are ready on the day. Teasers can go out earlier.' },
      { q: 'Do you promote Punjabi and regional songs?', a: 'Yes. We use pages and creators who speak the song’s language, including Punjabi meme pages.' },
      { q: 'Can you make a song go viral?', a: 'Nobody can promise that. We plan the campaign to give the song a real chance and tell you honestly how it did.' },
      { q: 'Do you work with independent artists?', a: 'Yes. A focused campaign with the right creators and pages can put an independent artist in front of a lot of new listeners.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-startups-and-d2c-brands',
    mainKeyword: 'PR for startups and D2C brands',
    metaTitle: 'PR for Startups and D2C Brands | PXR Infinity',
    metaDescription:
      'PR for startups and D2C brands in India: launch coverage, meme marketing, creators, X trends and founder stories, without a big ad budget.',
    eyebrow: 'For startups & D2C brands',
    h1: 'PR for startups and D2C brands that need people to notice them',
    intro: [
      'Most startups and D2C brands we meet have a good product, a tight budget and not much time. Ads get clicks, but they don’t make people trust a name they’ve never heard of. Coverage, creators and the odd meme that people actually share do a much better job of that.',
      'We do PR for startups and D2C brands: launch coverage on digital portals, meme marketing, creator campaigns, X trends and moment marketing, mostly aimed at the Gen Z and millennial audience that finds new brands on Instagram and X.',
    ],
    challenges: [
      { title: 'Nobody has heard of you', desc: 'A new brand starts with no awareness and no trust.' },
      { title: 'Ads get expensive', desc: 'Paid reach stops when the budget does.' },
      { title: 'Big brands own the conversation', desc: 'Established players have years of coverage and recall.' },
      { title: 'Launch day, then quiet', desc: 'Launch posts fade fast without a plan for the weeks after.' },
    ],
    howWeHelp: [
      { title: 'Launch coverage', desc: 'Announcements and founder stories on the right digital portals.' },
      { title: 'Meme marketing', desc: 'Your brand in the jokes your customers already share.' },
      { title: 'Creator campaigns', desc: 'Micro-creators who use and recommend the product.' },
      { title: 'Moment marketing', desc: 'Quick, on-brand posts around whatever’s trending.' },
      { title: 'X trends', desc: 'A launch-day trend to mark the moment.' },
      { title: 'Founder PR', desc: 'Interviews and features about the people behind the brand.' },
    ],
    sections: [
      {
        title: 'Why PR works for young brands',
        paragraphs: [
          'People buy from brands they’ve heard of. A feature on a portal they read, a creator they follow using your product, a meme that makes them laugh: all of it builds trust faster than another ad. And coverage keeps working after the campaign ends. It shows up in search, gets shared and becomes something you can point to.',
          'We usually plan it in two parts. A short, loud launch with coverage, memes, creators and a trend. Then a steadier few months of founder stories, moment marketing and creator posts, so the brand keeps showing up.',
        ],
      },
      {
        title: 'Meme marketing for brands',
        paragraphs: [
          'Memes are one of the quickest ways for a young brand to reach Gen Z. When your product ends up in a joke people relate to, it gets forwarded in DMs and group chats, and you can’t buy that kind of reach. We match you with meme pages whose followers look like your customers, and write formats that fit each page.',
        ],
      },
      {
        title: 'Founder stories',
        paragraphs: [
          'People like knowing who’s behind a brand. How the founder started, the first factory, the problem they set out to fix. Portals want to publish these stories and customers want to read them. We find the angle, prepare the founder and pitch it to the right outlets.',
        ],
      },
    ],
    services: ['brand-launch-campaigns', 'meme-marketing', 'influencer-marketing', 'pr-media-coverage'],
    caseStudies: [],
    posts: ['how-to-market-a-startup-in-india', 'pr-vs-advertising', 'what-is-meme-marketing-in-india'],
    faqs: [
      { q: 'What does PR for startups and D2C brands include?', a: 'Launch coverage on digital portals, founder interviews, meme marketing, creator campaigns, moment marketing and a launch-day X trend, planned together.' },
      { q: 'Is PR worth it for an early-stage startup?', a: 'Often, yes. Coverage and word of mouth keep working after the campaign ends, and a focused launch plan can go a long way on a small budget.' },
      { q: 'How is PR different from advertising?', a: 'Ads are space you pay for and control. PR is media, creators and pages talking about you. Most brands need both. Our guide on PR vs advertising goes into it.' },
      { q: 'Can meme marketing work for a serious product?', a: 'Yes, if the humour suits the brand and the audience. We match the tone to you, and you approve every post.' },
      { q: 'How fast can you launch?', a: 'A launch campaign usually takes one to two weeks to set up. Moment marketing posts can go out within hours.' },
    ],
    updatedAt: '2026-11-26',
  },
  {
    slug: 'pr-for-reality-show-contestants',
    mainKeyword: 'PR for reality show contestants',
    metaTitle: 'PR for Reality Show Contestants | PXR Infinity',
    metaDescription:
      'PR for reality show contestants and families: we run accounts, fan clubs, X trends, meme and media pages, and handle tough clips, from entry day to finale.',
    eyebrow: 'For contestants & families',
    h1: 'PR for reality show contestants, from entry day to finale',
    intro: [
      'When someone goes into a reality show, their family suddenly has to run their accounts, answer fans, deal with bad clips and ask for votes, usually with no experience and while worrying about them. PR for reality show contestants means a team that does this every season takes that load off.',
      'We’ve worked with contestants on Bigg Boss, Rise and Fall and Lock Upp, and on Prime Video’s The Alliance. We run the contestant’s accounts, get their fan clubs behind one message, plan X trends, put their best moments on meme and media pages, and stay calm when the house turns against them.',
    ],
    challenges: [
      { title: 'The contestant can’t speak for themselves', desc: 'No phone, no posts, no replies until they’re out.' },
      { title: 'One clip can change the week', desc: 'A single moment can decide how viewers see them for days.' },
      { title: 'Fans pulling in different directions', desc: 'Lots of fan clubs, lots of hashtags, no plan.' },
      { title: 'Families are new to this', desc: 'It’s a lot to run while also worrying about someone you love.' },
    ],
    howWeHelp: [
      { title: 'Before entry', desc: 'Profiles, account access, a photo bank, fan pages and day-one posts.' },
      { title: 'Their accounts', desc: 'Daily posts in the contestant’s own voice.' },
      { title: 'Fan clubs', desc: 'One message a week, shared hashtags and a posting plan.' },
      { title: 'X trends and Spaces', desc: 'Weekly trends, trends for big moments and live X Spaces.' },
      { title: 'Meme and media pages', desc: 'Their best moments on Instagram meme and reality TV pages.' },
      { title: 'Bad clips', desc: 'A calm, factual response with context, fast.' },
    ],
    sections: [
      {
        title: 'What a team outside changes',
        paragraphs: [
          'Contestants who last deep into a season usually have a solid team outside. You can see it every day: their good moments are out within hours, their supporters know what to post and when, the voting reminders are clear, and when something goes wrong the response is calm instead of angry and all over the place.',
          'For Rajat Dalal in Bigg Boss 18, we got a lot of separate fan clubs behind one message, with shared hashtags, daily posting and live X Spaces. #RajatIsTheBoss logged 210K mentions between 13 and 17 January 2025. For Niharika Tiwari in Rise and Fall, we built her story around her journey from Gidam in Bastar to national TV, with 143 media page posts, 330+ meme page posts and six interviews.',
        ],
      },
      {
        title: 'Working with the family',
        paragraphs: [
          'We work closely with the family or manager. They sign off the plan and anything sensitive, and we do the daily work, so nobody at home has to figure out what to post at midnight after a rough episode.',
        ],
      },
      {
        title: 'What we won’t do',
        paragraphs: [
          'We don’t go after other contestants or their families. We don’t use fake accounts or fake votes. And we don’t promise a win. Our job is to make sure the people who like your contestant can see them, understand them and support them properly.',
        ],
      },
    ],
    services: ['reality-show-pr', 'bigg-boss-pr', 'x-twitter-trends', 'meme-marketing'],
    caseStudies: ['rajat-dalal-bigg-boss-18-pr-campaign', 'mridul-tiwari-bigg-boss-19-x-trends', 'niharika-tiwari-rise-and-fall-finalist'],
    posts: ['how-to-prepare-pr-before-entering-a-reality-show', 'fan-club-guide-for-contestants', 'x-trends-for-reality-show-contestants'],
    faqs: [
      { q: 'What does PR for reality show contestants include?', a: 'Setting things up before entry, running the contestant’s accounts every day, coordinating fan clubs, weekly X trends and Spaces, meme and media page coverage, voting reminders and handling bad clips.' },
      { q: 'Which shows have you worked on?', a: 'Bigg Boss (seasons 17 to 20), Rise and Fall, Lock Upp and Prime Video’s The Alliance.' },
      { q: 'Can you start after the contestant has gone in?', a: 'Yes. A lot of families call us after the first nomination. We can set up quickly, though starting before entry is better.' },
      { q: 'Do you need the contestant’s passwords?', a: 'Only if the family wants us to run the accounts. Access is agreed in writing with the family or manager, and we stick to the show’s rules on posting.' },
      { q: 'Can you make sure they win?', a: 'No. That depends on the show, the contestant’s journey and the public vote. What we can promise is solid, professional support outside the house every day of the season.' },
    ],
    updatedAt: '2026-11-26',
  },
]

export const getAudience = (slug: string) => audiences.find((a) => a.slug === slug)
