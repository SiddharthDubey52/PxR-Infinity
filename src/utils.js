import { site } from './content'

/** Builds a wa.me link with a pre-filled message. */
export const waLink = (text = site.whatsappDefaultMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
