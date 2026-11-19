import {
  BadgeCheck,
  BarChart3,
  Clapperboard,
  Hash,
  Laugh,
  Layers,
  LayoutGrid,
  Music,
  Newspaper,
  Rocket,
  ShieldAlert,
  Sparkles,
  Star,
  Trophy,
  Tv,
  UserRound,
  Users,
  Zap,
  type LucideProps,
} from 'lucide-react'

const icons = {
  BadgeCheck,
  BarChart3,
  Clapperboard,
  Hash,
  Laugh,
  Layers,
  LayoutGrid,
  Music,
  Newspaper,
  Rocket,
  ShieldAlert,
  Sparkles,
  Star,
  Trophy,
  Tv,
  UserRound,
  Users,
  Zap,
}

/** Renders a lucide icon by name (names are stored in data files). */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as keyof typeof icons] ?? Sparkles
  return <Cmp aria-hidden="true" {...props} />
}
