'use client'

import { useState, useRef } from "react"
import { HeroAbility } from "@/types/hero"
import { ABILITY_VIDEO_BASE } from "@/constants/hero"
import AbilityPlayer from "./AbilityPlayer"
import AbilityInfo from "./AbilityInfo"

type Props = {
    abilities: string[]
    abilityDetails: Record<string, HeroAbility>
    heroSlug: string
}

export default function HeroAbilities({ abilities, abilityDetails, heroSlug }: Props) {
    const validAbilities = abilities.filter(name => name !== 'generic_hidden' && abilityDetails[name])
    const [selected, setSelected] = useState(validAbilities[0] ?? '')
    const videoRef = useRef<HTMLVideoElement>(null)

    const ability = abilityDetails[selected]
    const videoUrl = `${ABILITY_VIDEO_BASE}/${heroSlug}/${selected}.webm`

    const handleSelect = (name: string) => {
        setSelected(name)
        if (videoRef.current) {
            videoRef.current.load()
            videoRef.current.play().catch(() => {})
        }
    }

    if (!ability) return null

    return (
        <section className="hero-abilities w-full max-w-5xl flex flex-col gap-4 px-4">
            <h2 className="hero-abilities__title text-white/60 text-sm uppercase tracking-widest text-center">
                Detalhes das Habilidades:
            </h2>
            <div className="hero-abilities__panel w-full flex flex-col sm:flex-row rounded-lg overflow-hidden border border-white/10">
                <AbilityPlayer
                    videoUrl={videoUrl}
                    validAbilities={validAbilities}
                    abilityDetails={abilityDetails}
                    selected={selected}
                    onSelect={handleSelect}
                    videoRef={videoRef}
                />
                <AbilityInfo ability={ability} selected={selected} />
            </div>
        </section>
    )
}
