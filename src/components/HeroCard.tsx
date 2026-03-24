'use client'

import { HeroCardProps } from "@/types/hero"
import { IMAGE_BASE, ATTR_ICON } from "@/constants/hero"
import Link from "next/link"
import Image from "next/image"

export default function HeroCard({ hero }: HeroCardProps) {
    const slug = hero.name.replace('npc_dota_hero_', '')
    const imgUrl = `${IMAGE_BASE}/${slug}.png`

    return (
        <Link
            href={`/heros/${hero.id}`}
            className="hero-card group relative w-full no-underline block transition-transform duration-300 sm:hover:scale-120 hover:z-10"
        >
            <div className="hero-card__image relative w-full h-24 sm:h-29.25 overflow-hidden">
                <Image
                    src={imgUrl}
                    alt={hero.localized_name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="hero-card__overlay absolute inset-0 rounded-xl bg-linear-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                <span className="hero-card__name flex items-center gap-1.5 text-white text-lg font-semibold text-center leading-snug px-2">
                    {ATTR_ICON[hero.primary_attr] && (
                        <Image
                            src={ATTR_ICON[hero.primary_attr]}
                            alt={hero.primary_attr}
                            width={14}
                            height={14}
                        />
                    )}
                    {hero.localized_name}
                </span>
            </div>
        </Link>
    )
}
