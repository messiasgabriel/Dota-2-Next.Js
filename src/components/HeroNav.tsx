import { HeroSummary } from "@/types/hero"
import { IMAGE_CROP_BASE, ATTR_ICON } from "@/constants/hero"
import Image from "next/image"
import Link from "next/link"

type Props = {
    prev: HeroSummary | null
    next: HeroSummary | null
}

function HeroNavItem({ hero, direction }: { hero: HeroSummary; direction: 'prev' | 'next' }) {
    const slug = hero.name.replace('npc_dota_hero_', '')
    const imgUrl = `${IMAGE_CROP_BASE}/${slug}.png`
    const label = direction === 'prev' ? 'Herói Anterior' : 'Próximo Herói'
    const isPrev = direction === 'prev'

    return (
        <Link
            href={`/heros/${hero.id}`}
            className="hero-nav__item group relative flex-1 flex items-center no-underline h-28 sm:h-40 bg-dota-dark overflow-hidden sm:overflow-visible"
        >
            <div className={`hero-nav__item-image absolute w-full h-full sm:w-72 sm:h-56 bottom-0 overflow-hidden ${isPrev ? 'sm:left-0' : 'sm:right-0'}`}>
                <Image
                    src={imgUrl}
                    alt={hero.localized_name}
                    fill
                    unoptimized
                    className="object-cover object-top translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300"
                />
            </div>

            <div className={`hero-nav__item-gradient absolute inset-0 z-10 ${
                isPrev
                    ? 'bg-linear-to-r from-transparent from-20% via-dota-dark/80 to-dota-dark sm:from-30%'
                    : 'bg-linear-to-l from-transparent from-20% via-dota-dark/80 to-dota-dark sm:from-30%'
            }`} />

            <div className={`hero-nav__item-info relative z-20 flex flex-col gap-0.5 sm:gap-1 px-4 sm:px-8 w-full ${
                isPrev
                    ? 'items-end pl-28 sm:pl-56'
                    : 'items-start pr-28 sm:pr-56'
            }`}>
                <span className="hero-nav__item-label text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-medium hidden sm:block">
                    {label}
                </span>
                <span className="hero-nav__item-name text-white font-bold text-base sm:text-2xl uppercase leading-tight tracking-wide group-hover:text-dota-btn transition-colors drop-shadow-lg">
                    {hero.localized_name}
                </span>
                <span className={`hero-nav__item-attack-type flex items-center gap-1.5 text-white/60 text-xs sm:text-sm ${isPrev ? '' : 'flex-row-reverse'}`}>
                    {ATTR_ICON[hero.primary_attr] && (
                        <Image src={ATTR_ICON[hero.primary_attr]} alt={hero.primary_attr} width={12} height={12} />
                    )}
                    <span className="hidden sm:inline">
                        {hero.attack_type === 'Melee' ? 'Corpo a Corpo' : 'Longo Alcance'}
                    </span>
                </span>
            </div>
        </Link>
    )
}

export default function HeroNav({ prev, next }: Props) {
    return (
        <nav className="hero-nav w-full flex border-t border-white/10">
            {prev ? <HeroNavItem hero={prev} direction="prev" /> : <div className="flex-1 bg-dota-dark" />}

            <Link
                href="/heros"
                className="hero-nav__all shrink-0 flex flex-col items-center justify-center gap-2 sm:gap-3 px-4 sm:px-10 bg-dota-dark border-x border-white/10 no-underline group"
            >
                <div className="hero-nav__all-icon grid grid-cols-2 gap-1 w-6 h-6 sm:w-8 sm:h-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white/25 group-hover:bg-white/60 transition-colors rounded-sm" />
                    ))}
                </div>
                <span className="hero-nav__all-label text-white/30 group-hover:text-white/70 text-[10px] sm:text-xs uppercase tracking-widest transition-colors text-center leading-tight hidden sm:block">
                    Todos os<br />Heróis
                </span>
            </Link>

            {next ? <HeroNavItem hero={next} direction="next" /> : <div className="flex-1 bg-dota-dark" />}
        </nav>
    )
}
