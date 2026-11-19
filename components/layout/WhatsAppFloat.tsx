import { WhatsAppIcon } from '@/components/ui/SocialIcons'
import { waLink } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PXR Infinity on WhatsApp"
      className="wa-ring fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[60] grid size-14 place-items-center rounded-full bg-wa text-white shadow-[0_10px_30px_-6px_rgb(37_211_102/0.6)] transition-transform duration-300 hover:scale-110 sm:right-7 sm:bottom-7"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
