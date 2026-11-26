# SEO audit (Task 13)

Generated on 26 November 2026 from the production build, reading the server HTML (what crawlers get).

## Results

| Check | Result |
| --- | --- |
| Production build | Passes, zero errors. ESLint and TypeScript clean. |
| Tests | Full Playwright suite passes (SEO, content, links, layout at 360–1920 px, reduced motion). |
| Pages checked | 79: 71 indexable (all in the sitemap) + 8 noindex (none in the sitemap) |
| Duplicate titles / descriptions | None |
| H1 | Exactly one on every page |
| Canonical | Self-referencing, absolute, on `https://www.pxrinfinity.com`, on every page |
| `keywords` meta tag | None on any page |
| Main keywords | 55 declared, none used twice |
| Shehzad Poonawalla case study | `noindex, follow`, not in the sitemap, still linked across the site |
| Founder name | Not found anywhere in the site output |
| Safe-wording list | None of the listed words appear on the site |
| City names | None (company not yet registered) |
| JSON-LD | Valid on every page. No Review or AggregateRating markup. |
| Logo | Logo component, brand path, icons, share image and loading logo unchanged |
| 3D | Removed at the owner's request; no canvas or WebGL anywhere, so no fallback needed |

## Lighthouse (homepage, local production build, median of 3 runs)

| Run | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop | 100 | 100 | 100 | 100 | 0.8 s | 0.02 | 0 ms |
| Mobile, real throttling (4× CPU, slow 4G) | 98 | 100 | 100 | 100 | 1.8 s | 0.01 | 40 ms |
| Mobile, simulated (Lighthouse default) | 89 | 100 | 100 | 100 | 3.7 s | 0.02 | 30 ms |

Core Web Vitals targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. With real throttling all pass. The simulated mobile LCP of 3.7 s is an estimate: in the same runs the browser actually painted the hero text at about 0.2 s (observed LCP = first paint). The estimate is driven by script time from React and the motion library. TBT (the lab stand-in for INP) is 30–70 ms. Check real-user numbers in Search Console → Core Web Vitals after a few weeks of traffic.

## Structured data per page type

| Page | JSON-LD |
| --- | --- |
| Home `/` | Organization, ProfessionalService, WebSite, FAQPage |
| Service `/services/bigg-boss-pr` | Service, BreadcrumbList, FAQPage (10) |
| Case study `/work/rajat-dalal-bigg-boss-18-pr-campaign` | Article (author: PXR Infinity Team, Organization), BreadcrumbList, FAQPage |
| Blog post `/blog/how-to-plan-an-x-trend-campaign` | BlogPosting (author: PXR Infinity Team, Organization), BreadcrumbList, FAQPage |

How to confirm:
1. Open https://search.google.com/test/rich-results and test each URL above on `https://www.pxrinfinity.com`. Expect valid Breadcrumbs, FAQ and Article items.
2. Organization, Service and ProfessionalService are not rich-result types, so check those at https://validator.schema.org (paste the URL). Expect zero errors.

## Placeholders to fill in

None of these show on the site until they are filled in.

**Homepage stats** — `lib/data/home.ts`
- Confirm 63+ campaigns, 25,000+ meme pages, 9B+ max monthly reach and 650+ X trends with screenshots. These values appear on the homepage, /about, /about/facts, /network and the X trends page, all read from this one file.

**Case studies** — `lib/data/work.ts`
- Niharika Tiwari: final position ("Top 6"), "350M+ reach", "8 X trends at #1", "500+ pages".
- Rajat Dalal: campaign dates, final position, "BB TROPHY HAKDAAR RAJAT" 500K+ and "INDIA SUPPORTS RAJAT DALAL" 250K+ post counts.
- Mridul Tiwari: campaign dates, "NO MRIDUL NO BIGGBOSS" 300K+ post count, counts and ranks for "JANTA KA LADLA MRIDUL" and "#KingMakerMridulTiwari".
- Drafts (noindex, hidden): Qazi Touqeer, Yogesh Rawat, Munawar Faruqui — write the full case study, then delete `draft: true`.
- Screenshot galleries: add images to `/public/work/<slug>/` with descriptive alt text.

**X trends table** — `lib/data/trends.ts`
- The Alliance finale-day trend: exact hashtag, date, post count, hours. Add more trends you have screenshots for; the Date and Hours columns appear once any row has them.

**Films and shows** — `lib/data/promoted.ts`
- The Alliance year; other titles promoted (with permission); languages you really cover (the regional section stays hidden until then); optional "campaigns start from" figure.

**Network** — `lib/data/network.ts`
- Counts for reality TV media pages, news portals, paparazzi pages, fan clubs, creators and X accounts; partner pages that agreed to be listed.

**Join the network** — `app/join-network/page.tsx`
- Confirm joining is free and payment terms are agreed up front (both stated on the page).

**Timeline** — `lib/data/timeline.ts`
- Dates for the Mridul Tiwari and The Alliance entries; more real, public events. The page becomes indexable at 8 entries.

**Draft list articles** — `content/blog/`
- `top-reality-tv-media-pages-on-instagram-india.mdx`, `top-entertainment-news-pages-on-instagram-india.mdx`, `biggest-bigg-boss-trends-on-x-season-by-season.mdx`: add verified entries, then delete `draft: true`.

**Testimonials** — `lib/data/testimonials.ts`: real quotes only.

**Press and awards** — `lib/data/press.ts`: articles about PXR Infinity and awards. /press stays a 404 until one exists.

**Directory profiles** — `lib/site.ts`: Clutch, DesignRush, GoodFirms, Google Business Profile URLs.

**Site config** — `lib/site.ts`: LinkedIn URL (optional), Google Search Console verification code.

## Indexable pages (71)

| Page | Title | Meta description | H1 | Robots | JSON-LD |
| --- | --- | --- | --- | --- | --- |
| `/` | PXR Infinity \| PR and Meme Marketing Agency India (49) | PXR Infinity is a PR and meme marketing agency in India — a viral, Gen Z marketing agency with 25,000+ meme pages and 650+ X trends. Free proposal. (147) | PXR Infinity—PR and meme marketing agency in IndiaInfinite reach. Real hype. | index, follow | FAQPage, Organization, ProfessionalService, WebSite |
| `/services` | PR, Meme Marketing & X Trend Services \| PXR Infinity (52) | PXR Infinity services: PR and media coverage, meme marketing, X trends, influencer marketing, celebrity and Bigg Boss PR, film and music promotion. (147) | Full-service PR, memes & trends — one team. | index, follow | BreadcrumbList |
| `/work` | PR Case Studies India: Reality Show Campaigns \| PXR Infinity (60) | PR case studies from India: reality show campaign case studies for Bigg Boss, Rise & Fall and Prime Video’s The Alliance — X trends, meme pages and media. (154) | PR case studies that got India talking. | index, follow | BreadcrumbList |
| `/pricing` | PR and Meme Marketing Packages \| PXR Infinity (45) | PR and meme marketing packages: Starter, Growth and Premium plans for brands, celebrities and contestants. See what affects PR agency charges in India. (151) | PR and meme marketing packages. Pricing on WhatsApp. | index, follow | BreadcrumbList, FAQPage |
| `/about` | About PXR Infinity \| PR and Meme Marketing Agency (49) | About PXR Infinity: a PR and meme marketing agency working across India. What we do, how our team works, our values and the network behind 63+ campaigns. (153) | About PXR Infinity: we make the internet talk about you. | index, follow | BreadcrumbList |
| `/blog` | Blog: PR, Meme Marketing & Reality TV Guides \| PXR Infinity (59) | Guides on PR costs, meme marketing in India, X trends, influencer marketing, Bigg Boss PR and reputation, in English and Hinglish, from PXR Infinity. (149) | Notes from the timeline. | index, follow | BreadcrumbList |
| `/contact` | Contact PXR Infinity — Free Proposal on WhatsApp (48) | Contact PXR Infinity for PR, meme marketing, X trends, influencer marketing and reality show PR in India. WhatsApp us for a free proposal. (138) | Trend karwana hai? Baat karte hain. | index, follow | BreadcrumbList |
| `/guides` | PR Guides for Contestants, Actors & Brands \| PXR Infinity (57) | Practical PR guides from PXR Infinity: preparing for a reality show, running fan clubs, planning X trends, media kits for actors, crisis PR and launches. (153) | Practical PR guides, step by step. | index, follow | BreadcrumbList |
| `/network` | Meme Page Network India \| PXR Infinity (38) | Our meme page network in India: 25,000+ meme pages plus reality TV media, entertainment news, paparazzi, fan clubs, creators and X accounts. (140) | Our meme page network in India: 25,000+ pages and counting. | index, follow | BreadcrumbList, FAQPage |
| `/join-network` | Meme Page Collaboration: Join Our Network \| PXR Infinity (56) | Meme page collaboration with PXR Infinity: page admins, creators, media pages and fan clubs can join our network for paid brand, film, music and show campaigns. (160) | Meme page collaboration: join our network. | index, follow | BreadcrumbList, FAQPage |
| `/about/facts` | PXR Infinity Company Facts (26) | Quick facts about PXR Infinity: what the agency does, services, where it works, contact details, social profiles, shows worked on and key numbers. (146) | PXR Infinity company facts | index, follow | BreadcrumbList |
| `/pr-for-tv-actors` | PR for TV Actors in India \| PXR Infinity (40) | PR for TV actors: media features, paparazzi visibility, fan clubs, memes and X trends that keep you in the conversation between shows, launches and seasons. (156) | PR for TV actors who want to stay in the conversation | index, follow | BreadcrumbList, FAQPage |
| `/pr-for-youtubers-and-creators` | PR for YouTubers and Creators in India \| PXR Infinity (53) | PR for YouTubers and creators: media features, meme pages, X trends, brand-ready profiles and reality show PR, so your audience and reputation grow together. (157) | PR for YouTubers and creators building more than a channel | index, follow | BreadcrumbList, FAQPage |
| `/pr-for-ott-shows` | PR for OTT Shows and Web Series \| PXR Infinity (46) | PR for OTT shows: X campaigns, meme pages, creators and media coverage across premiere week and the whole season, so viewers press play and keep watching. (154) | PR for OTT shows that keeps viewers pressing play | index, follow | BreadcrumbList, FAQPage |
| `/pr-for-music-labels-and-artists` | PR for Music Labels and Artists \| PXR Infinity (46) | PR for music labels and artists: reel audio campaigns, meme pages, creators, X trends and media features that help a song reach listeners after release. (152) | PR for music labels and artists, built around the release | index, follow | BreadcrumbList, FAQPage |
| `/pr-for-startups-and-d2c-brands` | PR for Startups and D2C Brands \| PXR Infinity (45) | PR for startups and D2C brands: launch coverage, meme marketing, creators, X trends and founder stories that build awareness and trust without a big ad budget. (159) | PR for startups and D2C brands that need to be noticed fast | index, follow | BreadcrumbList, FAQPage |
| `/pr-for-reality-show-contestants` | PR for Reality Show Contestants \| PXR Infinity (46) | PR for reality show contestants and families: account management, fan clubs, X trends, meme and media pages and calm crisis response, entry day to finale. (154) | PR for reality show contestants, from entry day to finale | index, follow | BreadcrumbList, FAQPage |
| `/services/pr-media-coverage` | PR Agency in India for Media Coverage \| PXR Infinity (52) | PR agency in India for brands, celebrities and creators: digital PR, media coverage services, press release distribution and paps page coverage. (144) | PR agency in India for media coverage, digital PR and press releases | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/meme-marketing` | Meme Marketing Agency in India – 25K+ Pages \| PXR Infinity (58) | Meme marketing agency in India with 25,000+ meme pages. Instagram meme page promotion and regional meme marketing for brands, films and startups. (145) | Meme marketing agency in India — 25,000+ meme pages, memes that sell | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/x-twitter-trends` | Twitter Trend Agency India \| 650+ X Trends \| PXR Infinity (57) | Twitter trend agency India with 650+ X trends run. Hashtag trend campaigns, X trend campaign planning and Twitter Spaces promotion for launches and fans. (153) | Twitter trend agency in India — X trend campaigns that climb the list | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/influencer-marketing` | Influencer Marketing Agency India \| PXR Infinity (48) | Influencer marketing agency India for brands, films and music: micro influencer marketing, influencer marketing for movies and end-to-end creator campaigns. (156) | Influencer marketing agency in India — creators picked on data, not vibes | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/celebrity-pr` | Celebrity PR Agency India for Actors & Stars \| PXR Infinity (59) | Celebrity PR agency India: Bollywood PR, PR for actors and TV actors, paparazzi coverage, fan club management and X trends. Fully confidential. (143) | Celebrity PR agency in India — PR for actors, TV stars and public figures | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/bigg-boss-pr` | Bigg Boss PR Agency for Contestants \| PXR Infinity (50) | Bigg Boss PR agency for contestants: a Bigg Boss PR team for fan armies, voting campaigns, X trends and the finale push. Bigg Boss 17 to 20. (140) | Bigg Boss PR agency — contestant PR from entry day to finale | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/reality-show-pr` | Reality Show PR Agency in India \| PXR Infinity (46) | Reality show PR agency in India for contestant promotion: Rise and Fall PR, Lock Upp PR, fan club management, voting appeals and finale trends. (143) | Reality show PR agency in India — contestant promotion from entry day to finale | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/movie-web-series-promotion` | Movie Promotion Agency India for Films & OTT \| PXR Infinity (59) | Movie promotion agency India for films, web series and OTT shows: trailer promotion, meme campaigns, X trends and regional film promotion. (138) | Movie promotion agency in India — web series, OTT and trailer promotion | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/music-album-promotion` | Song Promotion India for Artists and Labels \| PXR Infinity (58) | Song promotion India for artists and labels. A music promotion agency for album promotion, Punjabi song promotion, reel audio campaigns and X trends. (149) | Song promotion in India — make your track the next reel audio | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/brand-launch-campaigns` | Brand Launch Campaign Agency for Startups \| PXR Infinity (56) | Brand launch campaign agency for product launch marketing in India. A startup marketing agency for teasers, memes, creators and moment marketing. (145) | Brand launch campaign agency — product launches that make day one loud | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/crisis-pr-reputation-management` | Crisis PR Agency India: Reputation Management \| PXR Infinity (60) | Crisis PR agency India for brands and public figures: rapid response, online reputation management India and celebrity reputation management. (141) | Crisis PR agency in India — fast response and online reputation management | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/social-media-management` | Social Media Management Agency India \| PXR Infinity (51) | Social media management agency India for brands, celebrities and creators. An Instagram marketing agency for reels, content, community and reports. (147) | Social media management agency in India that grows real, engaged audiences | index, follow | BreadcrumbList, FAQPage, Service |
| `/services/personal-branding` | Personal Branding Agency India for Founders \| PXR Infinity (58) | Personal branding agency India: personal branding for founders, PR for YouTubers and PR for content creators — positioning, content and media features. (151) | Personal branding agency in India for founders, YouTubers and creators | index, follow | BreadcrumbList, FAQPage, Service |
| `/work/niharika-tiwari-rise-and-fall-finalist` | Niharika Tiwari Rise and Fall PR Case Study \| PXR Infinity (58) | Rise and Fall contestant PR case study: 330+ meme page posts, 143 media page posts, 6 interviews and reels by 8 creators for Niharika Tiwari. (141) | Building a name of her own in a celebrity-heavy cast | index, follow | Article, BreadcrumbList, FAQPage |
| `/work/the-alliance-prime-video-x-campaign` | The Alliance Prime Video X Campaign \| PXR Infinity (50) | OTT reality show promotion case study: a six-week X campaign covering all 42 episodes of Prime Video’s The Alliance, ending in a #1 finale-day trend. (149) | A show-wide X campaign for Prime Video’s first daily reality show | index, follow | Article, BreadcrumbList, FAQPage |
| `/work/rajat-dalal-bigg-boss-18-pr-campaign` | Rajat Dalal Bigg Boss 18 PR Case Study \| PXR Infinity (53) | Bigg Boss contestant PR case study: how we helped organise Rajat Dalal’s fan clubs around one message in Bigg Boss 18 — 210K mentions for #RajatIsTheBoss. (154) | Bigg Boss contestant PR for Rajat Dalal: one message, every fan club | index, follow | Article, BreadcrumbList, FAQPage |
| `/work/mridul-tiwari-bigg-boss-19-x-trends` | Mridul Tiwari Bigg Boss 19 X Trends Case Study \| PXR Infinity (61) | Bigg Boss X trend campaign case study: weekly trends for Mridul Tiwari in Bigg Boss 19, including BIGGBOSS USE MRIDUL — 187.9K+ posts and #1 in India. (150) | A Bigg Boss X trend campaign for Mridul Tiwari, one message a week | index, follow | Article, BreadcrumbList, FAQPage |
| `/blog/fan-club-guide-for-contestants` | Fan Club Guide for Contestants \| PXR Infinity (45) | A practical fan club guide for reality show contestants: how to set up roles, rules, a shared posting plan, X Spaces and a finale push that stays positive. (155) | Fan Club Guide for Contestants: Roles, Rules and a Weekly Plan | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/how-to-plan-an-x-trend-campaign` | How to Plan an X Trend Campaign \| PXR Infinity (46) | How to plan an X trend campaign in India: set the goal, pick the hashtag and time, build a content bank, brief communities, run the push and report honestly. (157) | How to Plan an X Trend Campaign: A Step-by-Step Guide | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/how-to-prepare-pr-before-entering-a-reality-show` | PR Before Entering a Reality Show: Checklist \| PXR Infinity (59) | How to prepare PR before entering a reality show: account handover, profile clean-up, your story in three lines, a photo bank, fan pages and a day-one plan. (156) | How to Prepare PR Before Entering a Reality Show | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/media-kit-checklist-for-actors` | Media Kit Checklist for Actors \| PXR Infinity (45) | A media kit checklist for actors in India: bio, photos, showreel, credits, press links, contacts and social numbers, and how journalists use it. (144) | Media Kit Checklist for Actors: What to Include and How to Use It | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/x-trends-for-film-and-ott-releases` | X Trends for Film and OTT Releases \| PXR Infinity (49) | How to use X trends for film and OTT releases in India: announcement, teaser, trailer day, release day and premiere, plus what to pair each trend with. (151) | X Trends for Film and OTT Releases: A Release-Week Playbook | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/x-trends-for-reality-show-contestants` | X Trends for Reality Show Contestants \| PXR Infinity (52) | X trends for reality show contestants: one message a week, trends around nominations and big moments, fan club timing and a finale push, with real examples. (156) | X Trends for Reality Show Contestants: A Week-by-Week Plan | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/celebrity-pr-cost-india` | Celebrity PR Cost in India \| PXR Infinity (41) | What decides celebrity PR cost in India: retainers, paparazzi, fan clubs, media, trends and crisis cover — and how to plan a PR budget. (135) | Celebrity PR Cost in India | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/fan-following-kaise-badhaye` | Fan Following Kaise Badhaye? \| PXR Infinity (43) | Fan following kaise badhaye — followers ko fans mein badlo, fan clubs banao aur active rakho. Actors, creators aur contestants ke liye guide. (141) | Fan Following Kaise Badhaye? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/bigg-boss-pr-cost` | How Much Does Bigg Boss PR Cost? \| PXR Infinity (47) | What decides Bigg Boss PR cost: when you start, season length, social media handling, fan clubs, X trends and the finale push. A guide for contestant families. (159) | How Much Does Bigg Boss PR Cost? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/how-to-become-popular-in-bigg-boss` | How to Become Popular in Bigg Boss \| PXR Infinity (49) | How to become popular in Bigg Boss: what viewers reward inside the house, how to prepare before entry, and what the team outside should do every week. (150) | How to Become Popular in Bigg Boss | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/how-to-build-a-fan-base-on-social-media` | How to Build a Fan Base on Social Media \| PXR Infinity (54) | How to build a fan base on social media: find your identity, post with rhythm, turn followers into fans, organise fan clubs and keep them positive and active. (158) | How to Build a Fan Base on Social Media | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/how-to-get-media-coverage-in-india` | How to Get Media Coverage in India \| PXR Infinity (49) | How to get media coverage in India: find a real story, pick the right outlets, write a pitch editors read, time it well and turn coverage into trust. (149) | How to Get Media Coverage in India | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/how-to-market-a-startup-in-india` | How to Market a Startup in India \| PXR Infinity (47) | How to market a startup in India: positioning, a pre-launch plan, launch week with PR, memes and creators, and what to do after launch to keep growing. (151) | How to Market a Startup in India | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/influencer-marketing-rates-india` | Influencer Marketing Rates in India \| PXR Infinity (50) | What decides influencer marketing rates in India: creator tier, platform, format, usage rights, exclusivity and barter vs paid. How to plan a creator budget. (157) | Influencer Marketing Rates in India | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/instagram-pe-famous-kaise-bane` | Instagram Pe Famous Kaise Bane? \| PXR Infinity (46) | Instagram pe famous kaise bane — niche, reels, collabs, consistency aur personal branding. Followers ke saath pehchaan banao, Hinglish mein. (140) | Instagram Pe Famous Kaise Bane? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/meme-marketing-examples-india` | Meme Marketing Examples from India \| PXR Infinity (49) | Meme marketing examples from India: topical humour, witty brand voices, film scene memes, regional pages and reality TV — and what to learn. (140) | Meme Marketing Examples from India | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/pr-agency-charges-in-india` | PR Agency Charges in India: What Affects Cost \| PXR Infinity (60) | What decides PR agency charges in India: retainers vs one-off campaigns, media mix, timelines and reporting. A practical guide to budgeting for PR. (147) | PR Agency Charges in India: What Affects the Cost | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/pr-agency-kaise-choose-kare` | PR Agency Kaise Choose Kare? \| PXR Infinity (43) | PR agency kaise choose kare — kya poochna hai, kaun se red flags dekhne hain aur quotes kaise compare karne hain. Simple Hinglish guide. (136) | PR Agency Kaise Choose Kare? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/pr-vs-advertising` | PR vs Advertising: Which Does a Brand Need? \| PXR Infinity (58) | PR vs advertising explained: control, credibility, cost, speed and shelf life. When Indian brands should use PR, when to use ads, and how to combine both. (154) | PR vs Advertising: Which Does Your Brand Need? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/reel-viral-kaise-kare` | Reel Viral Kaise Kare? \| PXR Infinity (37) | Reel viral kaise kare — hook, editing, audio, captions, timing aur shares. Brands aur creators ke liye practical Instagram reels guide. (135) | Reel Viral Kaise Kare? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/song-viral-kaise-kare` | Song Viral Kaise Kare? \| PXR Infinity (37) | Song viral kaise kare — hook chuno, creators se reel audio use karwao, meme edits aur release-day trends. Artists ke liye Hinglish guide. (137) | Song Viral Kaise Kare? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/trolling-ka-jawab-kaise-de` | Trolling Ka Jawab Kaise De? \| PXR Infinity (42) | Trolling ka jawab kaise de — kab ignore kare, kab reply, kab report aur kab PR team bulaye. Celebrities, creators aur brands ke liye guide. (139) | Trolling Ka Jawab Kaise De? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/twitter-trend-price-india` | Twitter Trend Price in India Explained \| PXR Infinity (53) | What goes into Twitter trend price in India: hashtag planning, content bank, fan club briefing, timing, X Spaces and reporting. Plan an X trend budget. (151) | Twitter Trend Price in India: What You Pay For | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/what-is-digital-pr` | What Is Digital PR? \| PXR Infinity (34) | What is digital PR? How it differs from traditional PR, what a campaign in India includes — media, creators, meme pages, X — and how to measure it. (147) | What Is Digital PR? | index, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/bigg-boss-mein-vote-kaise-badhaye` | Bigg Boss Mein Vote Kaise Badhaye? \| PXR Infinity (49) | Bigg Boss mein vote kaise badhaye — fan army, voting appeals, X trends aur finale push. Contestant families aur fans ke liye Hinglish guide. (140) | Bigg Boss Mein Vote Kaise Badhaye? Contestant Ko Kaise Jitaye | index, follow | BlogPosting, BreadcrumbList |
| `/blog/how-celebrities-manage-pr-in-reality-shows` | How Celebrities Manage PR in Reality Shows \| PXR Infinity (57) | How celebrities and contestants manage PR inside reality shows: account handovers, fan clubs, trends, media and controversy response. (133) | How Celebrities Manage PR in Reality Shows | index, follow | BlogPosting, BreadcrumbList |
| `/blog/how-does-bigg-boss-voting-work` | How Does Bigg Boss Voting Work? \| PXR Infinity (46) | How Bigg Boss voting works: nominations, the voting window, where fans vote and why organised fan support matters — explained by a Bigg Boss PR team. (149) | How Does Bigg Boss Voting Work? A Simple Guide | index, follow | BlogPosting, BreadcrumbList |
| `/blog/how-much-does-meme-marketing-cost-in-india` | How Much Does Meme Marketing Cost in India? \| PXR Infinity (58) | How much does meme marketing cost in India? What drives the price — pages, creatives, campaign length and add-ons — and how to budget well. (139) | How Much Does Meme Marketing Cost in India? | index, follow | BlogPosting, BreadcrumbList |
| `/blog/meme-marketing-kya-hai` | Meme Marketing Kya Hai? Simple Guide \| PXR Infinity (51) | Meme marketing kya hai, meme page pe promotion kaise kare aur iska rate kis pe depend karta hai — 25,000+ meme pages wali PXR Infinity se. (138) | Meme Marketing Kya Hai? Meme Page Pe Promotion Kaise Kare | index, follow | BlogPosting, BreadcrumbList |
| `/blog/pr-agency-kya-karti-hai` | PR Agency Kya Karti Hai? \| PXR Infinity (39) | PR agency kya karti hai: media coverage, paps pages, meme pages, X trends aur reputation. Plus Instagram pe brand viral kaise kare, simple Hinglish mein. (153) | PR Agency Kya Karti Hai? Brand Ko Instagram Pe Viral Kaise Kare | index, follow | BlogPosting, BreadcrumbList |
| `/blog/reality-show-fan-army-kaise-banaye` | Reality Show Fan Army Kaise Banaye? \| PXR Infinity (50) | Reality show mein fan army kaise banaye — fan pages, fan clubs, daily content aur voting appeals. Bigg Boss, Rise & Fall, Lock Upp ke liye. (139) | Reality Show Mein Fan Army Kaise Banaye? Contestant PR Guide | index, follow | BlogPosting, BreadcrumbList |
| `/blog/twitter-pe-trend-kaise-karaye` | Twitter Pe Trend Kaise Karaye? \| PXR Infinity (45) | Twitter / X pe hashtag trend kaise karaye — hashtag, timing, content bank, fan club briefing aur live monitoring. 650+ trends wali team se. (139) | Twitter (X) Pe Trend Kaise Karaye? Step-by-Step Hinglish Guide | index, follow | BlogPosting, BreadcrumbList |
| `/blog/crisis-pr-guide-for-indian-celebrities` | Crisis PR Guide for Indian Celebrities \| PXR Infinity (53) | A step-by-step crisis PR guide for Indian celebrities and public figures: the first 24 hours, statements, fan management, media and long-term reputation repair. (160) | Crisis PR Guide for Indian Celebrities | index, follow | BlogPosting, BreadcrumbList |
| `/blog/influencer-vs-meme-marketing-for-brands` | Influencer vs Meme Marketing for Brands \| PXR Infinity (54) | Influencer marketing or meme marketing? Compare reach, trust, cost, speed and conversions to choose the right mix for your brand in India. (138) | Influencer vs Meme Marketing: Which Is Better for Brands? | index, follow | BlogPosting, BreadcrumbList |
| `/blog/bigg-boss-pr-how-contestants-build-fan-armies` | How Bigg Boss Contestants Build Fan Armies \| PXR Infinity (57) | How Bigg Boss and reality-show contestants build fan armies with PR: pre-entry preparation, daily content, X trends, voting campaigns and the finale push. (154) | Bigg Boss PR: How Contestants Build Fan Armies | index, follow | BlogPosting, BreadcrumbList |
| `/blog/how-x-trends-are-created-for-celebrities` | How Celebrity X Trends Are Created \| PXR Infinity (49) | Behind the scenes of celebrity X trends in India: how hashtags are chosen, how fan clubs are briefed, timing, content banks and what makes a trend climb. (153) | How X (Twitter) Trends Are Created for Celebrities | index, follow | BlogPosting, BreadcrumbList |
| `/blog/what-is-meme-marketing-in-india` | What Is Meme Marketing in India? \| PXR Infinity (47) | A practical guide to meme marketing in India: what it is, why it works, how meme page campaigns are planned, what it costs and how to measure results. (150) | What Is Meme Marketing and How It Works in India | index, follow | BlogPosting, BreadcrumbList |

## Noindex pages (8)

| Page | Title | Meta description | H1 | Robots | JSON-LD |
| --- | --- | --- | --- | --- | --- |
| `/work/shehzad-poonawalla-rise-and-fall-winner` | Shehzad Poonawalla — Rise & Fall S2 Winner Campaign \| PXR Infinity (66) | A season-long narrative campaign: meme pages, media and paps pages, news coverage, reel comments and X Spaces. A reality tv case study by PXR Infinity. (151) | Taking a TV debater all the way to the Rise & Fall trophy | noindex, follow | Article, BreadcrumbList |
| `/work/qazi-touqeer-bigg-boss-20-pr-campaign` | Qazi Touqeer Bigg Boss 20 PR Case Study \| PXR Infinity (54) | Bigg Boss 20 PR case study for Qazi Touqeer by PXR Infinity. Full case study coming soon. (89) | Qazi Touqeer, Bigg Boss 20 — case study coming soon | noindex, follow | Article, BreadcrumbList |
| `/work/yogesh-rawat-lock-upp-season-2-pr-campaign` | Yogesh Rawat Lock Upp Season 2 PR Case Study \| PXR Infinity (59) | Lock Upp Season 2 PR case study for Yogesh Rawat by PXR Infinity. Full case study coming soon. (94) | Yogesh Rawat, Lock Upp Season 2 — case study coming soon | noindex, follow | Article, BreadcrumbList |
| `/work/munawar-faruqui-pr-campaign` | Munawar Faruqui PR Case Study \| PXR Infinity (44) | Reality show PR case study for Munawar Faruqui by PXR Infinity. Full case study coming soon. (92) | Munawar Faruqui — case study coming soon | noindex, follow | Article, BreadcrumbList |
| `/blog/top-reality-tv-media-pages-on-instagram-india` | Top Reality TV Media Pages on Instagram \| PXR Infinity (54) | Reality TV media pages on Instagram in India that cover Bigg Boss, Rise and Fall, Lock Upp and OTT reality shows daily, and how contestants and brands use them. (160) | Top Reality TV Media Pages on Instagram in India | noindex, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/top-entertainment-news-pages-on-instagram-india` | Top Entertainment News Pages on Instagram \| PXR Infinity (56) | The entertainment news pages on Instagram in India that cover Bollywood, TV, OTT and celebrities every day, and how actors, films and brands use them. (150) | Top Entertainment News Pages on Instagram in India | noindex, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/blog/biggest-bigg-boss-trends-on-x-season-by-season` | Biggest Bigg Boss Trends on X by Season \| PXR Infinity (54) | The biggest Bigg Boss trends on X (Twitter), season by season: the fan campaigns, finale pushes and moment trends that reached the top of India’s trending list. (160) | Biggest Bigg Boss Trends on X, Season by Season | noindex, follow | BlogPosting, BreadcrumbList, FAQPage |
| `/reality-tv-trends-timeline` | Reality TV Trends Timeline India \| PXR Infinity (47) | A timeline of notable reality TV fan campaigns and X trends in India, season by season: Bigg Boss, Rise and Fall, The Alliance and more, with sources. (150) | Reality TV trends timeline: fan campaigns and X trends. | noindex, follow | BreadcrumbList |
