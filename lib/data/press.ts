/**
 * PRESS & AWARDS — articles written ABOUT PXR Infinity, and awards PXR Infinity has won.
 * Never list coverage of a client here: only pieces where PXR Infinity itself is the subject or is named.
 * The /press page (404 while empty) and the homepage "In the news" strip stay hidden until one entry exists.
 *
 * Example:
 *   { outlet: 'Outlet name', title: 'Exact headline', url: 'https://…', date: '2026-12-01' }
 *   awards: { name: 'Award name', by: 'Organiser', year: 2026, url: 'https://…' }
 */
export type PressItem = { outlet: string; title: string; url: string; date: string }
export type Award = { name: string; by: string; year: number; url?: string }

// TODO(Sid): add real articles about PXR Infinity
export const press: PressItem[] = []
// TODO(Sid): add real awards
export const awards: Award[] = []

export const hasPress = press.length > 0 || awards.length > 0
export const pressUpdatedAt = '2026-11-26'
