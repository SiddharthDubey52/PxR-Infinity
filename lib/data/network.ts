/**
 * OUR NETWORK — the pages, media and people PXR Infinity campaigns run through.
 *
 * `count`: only fill in numbers you can back up with a list or screenshots. A category with
 * count: '' shows without a number. The meme page count must match the homepage stat.
 *
 * `partners`: named pages, ONLY for pages that agreed to be listed. Follower counts from the
 * page itself, with the date you checked. The cards and niche filters stay hidden while empty.
 */
import { stats } from './home'

const memePages = stats.find((s) => s.label === 'Meme pages in network')!

export const networkCategories = [
  {
    id: 'meme-pages',
    name: 'Meme pages',
    count: `${memePages.value}${memePages.suffix}`, // same value as the homepage stat
    icon: 'Laugh',
    desc: 'Instagram meme pages across Bollywood, cricket, college life, relationships, gaming and regional humour. They turn a launch or a moment into posts people forward in DMs and group chats.',
  },
  {
    id: 'reality-media',
    name: 'Reality TV media pages',
    count: '', // TODO(Sid): add verified count
    icon: 'Tv',
    desc: 'Pages that cover Bigg Boss, Rise and Fall, Lock Upp and OTT reality shows every day: episode updates, contestant clips, polls and fan reactions.',
  },
  {
    id: 'news-portals',
    name: 'Entertainment news portals',
    count: '', // TODO(Sid): add verified count
    icon: 'Newspaper',
    desc: 'Digital entertainment news sites and their social handles, for interviews, features and announcement coverage.',
  },
  {
    id: 'paparazzi',
    name: 'Paparazzi pages',
    count: '', // TODO(Sid): add verified count
    icon: 'Camera',
    desc: 'Photographers and paps pages for airport looks, event arrivals, screenings and post-show appearances.',
  },
  {
    id: 'fan-clubs',
    name: 'Fan clubs',
    count: '', // TODO(Sid): add verified count
    icon: 'Users',
    desc: 'Fan communities that post together around one message, one hashtag and one time slot.',
  },
  {
    id: 'creators',
    name: 'Creators',
    count: '', // TODO(Sid): add verified count
    icon: 'Clapperboard',
    desc: 'Reel creators, YouTubers and micro-influencers, picked for who follows them.',
  },
  {
    id: 'x-accounts',
    name: 'X accounts',
    count: '', // TODO(Sid): add verified count
    icon: 'Hash',
    desc: 'Entertainment, cricket and pop-culture accounts on X that carry trends, Spaces and live reactions.',
  },
] as const

export const networkNiches = ['Bollywood', 'Reality TV', 'Cricket', 'Music', 'Regional', 'Gen Z'] as const
export type NetworkNiche = (typeof networkNiches)[number]

export type NetworkPartner = {
  name: string
  handle: string
  url: string
  platform: 'Instagram' | 'X' | 'YouTube' | 'Facebook'
  followers: string // e.g. '1.2M', as shown on the profile
  checkedOn: string // date you checked the follower count, e.g. '2026-11-26'
  niche: NetworkNiche
}

// TODO(Sid): add partner pages that agreed to be listed
export const networkPartners: NetworkPartner[] = []
