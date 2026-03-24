'use client'

import { useState, useRef } from "react"
import { HeroAbility } from "@/types/hero"
import { ABILITY_IMAGE_BASE, ABILITY_VIDEO_BASE } from "@/constants/hero"
import Image from "next/image"
import AbilityImage from "./AbilityImage"

type Props = {
    abilities: string[]
    abilityDetails: Record<string, HeroAbility>
    heroSlug: string
}

function formatValues(val: string | number | (string | number)[] | undefined): string {
    if (val === undefined || val === null) return '—'
    return Array.isArray(val) ? val.join(' / ') : String(val)
}

export default function HeroSkillsDetails({ abilities, abilityDetails, heroSlug }: Props) {
    const validAbilities = abilities.filter(name => name !== 'generic_hidden' && abilityDetails[name])
    const [selected, setSelected] = useState(validAbilities[0] ?? '')
    const videoRef = useRef<HTMLVideoElement>(null)

    const ability = abilityDetails[selected]
    const videoUrl = `${ABILITY_VIDEO_BASE}/${heroSlug}/${selected}.webm`
    const imgUrl = ability?.img ? `${ABILITY_IMAGE_BASE}${ability.img}` : null

    const handleSelect = (name: string) => {
        setSelected(name)
        if (videoRef.current) {
            videoRef.current.load()
            videoRef.current.play().catch(() => {})
        }
    }

    if (!ability) return null

    return (
        <section className="hero-skills w-full max-w-5xl flex flex-col gap-4 px-4">

            <h2 className="hero-skills__title text-white/60 text-sm uppercase tracking-widest text-center">
                Detalhes das Habilidades:
            </h2>

            <div className="hero-skills__panel w-full max-w-375 flex flex-col sm:flex-row rounded-lg overflow-hidden border border-white/10">

                {/* VIDEO SECTION */}
                <div className="hero-skills__video-section flex flex-col sm:w-[58%] sm:shrink-0 bg-dota-dark">

                    <div className="hero-skills__video relative w-full min-h-52 sm:flex-1 sm:min-h-0 bg-black">
                        <video
                            ref={videoRef}
                            key={selected}
                            src={videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="hero-skills__thumbnails flex gap-1 p-2 bg-dota-dark flex-wrap">
                        {validAbilities.map(name => {
                            const ab = abilityDetails[name]
                            const abImgUrl = ab?.img ? `${ABILITY_IMAGE_BASE}${ab.img}` : ''
                            return (
                                <button
                                    key={name}
                                    onClick={() => handleSelect(name)}
                                    className={`hero-skills__thumb rounded overflow-hidden border-2 transition-colors ${selected === name ? 'border-dota-btn' : 'border-transparent hover:border-white/30'}`}
                                >
                                    <AbilityImage src={abImgUrl} alt={ab?.dname ?? name} videoSrc="" />
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* ABILITY DETAILS */}
                <div className="hero-skills__details flex flex-col gap-4 p-6 bg-dota-card flex-1 min-w-0">

                    <div className="hero-skills__header flex gap-3 items-start">
                        {imgUrl && (
                            <Image
                                src={imgUrl}
                                alt={ability.dname ?? selected}
                                width={64}
                                height={64}
                                className="hero-skills__icon rounded shrink-0"
                                unoptimized
                            />
                        )}
                        <div className="hero-skills__identity">
                            <h3 className="hero-skills__name text-white font-bold text-xl uppercase tracking-wide leading-tight">
                                {ability.dname ?? selected}
                            </h3>
                            <span className="hero-skills__name-en text-white/40 text-xs">
                                Em inglês: <span className="text-dota-btn">{ability.dname}</span>
                            </span>
                        </div>
                    </div>

                    {ability.desc && (
                        <p className="hero-skills__desc text-white/70 text-sm leading-relaxed">
                            {ability.desc}
                        </p>
                    )}

                    <div className="hero-skills__divider border-t border-white/10" />

                    <div className="hero-skills__props grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                        {ability.behavior && (
                            <span className="hero-skills__prop text-white/40 uppercase tracking-wider">
                                Habilidade: <span className="text-white font-medium">{formatValues(ability.behavior)}</span>
                            </span>
                        )}
                        {ability.bkbpierce && (
                            <span className="hero-skills__prop text-white/40 uppercase tracking-wider">
                                Ignora imunidade a magias: <span className="text-white font-medium">{ability.bkbpierce}</span>
                            </span>
                        )}
                        {ability.affects && (
                            <span className="hero-skills__prop text-white/40 uppercase tracking-wider">
                                Afeta: <span className="text-white font-medium">{ability.affects}</span>
                            </span>
                        )}
                        {ability.dmg_type && (
                            <span className="hero-skills__prop text-white/40 uppercase tracking-wider">
                                Tipo de dano: <span className="text-dota-btn font-medium">{ability.dmg_type}</span>
                            </span>
                        )}
                    </div>

                    <div className="hero-skills__divider border-t border-white/10" />

                    <div className="hero-skills__footer flex gap-6 text-sm">
                        <span className="hero-skills__cooldown flex items-center gap-1.5 text-white/50">
                            <Image src="https://cdn.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png" alt="cooldown" width={16} height={16} unoptimized />
                            <span className="text-white">{formatValues(ability.cd)}</span>
                        </span>
                        <span className="hero-skills__mana flex items-center gap-1.5 text-white/50">
                            <span className="w-3 h-3 rounded-sm bg-blue-400 inline-block shrink-0" />
                            <span className="text-white">{formatValues(ability.mc)}</span>
                        </span>
                    </div>

                    {ability.lore && (
                        <p className="hero-skills__lore text-white/30 text-xs italic border-t border-white/10 pt-3 leading-relaxed">
                            {ability.lore}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}
