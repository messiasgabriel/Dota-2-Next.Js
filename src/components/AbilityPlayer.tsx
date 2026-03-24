'use client'

import { RefObject } from "react"
import { HeroAbility } from "@/types/hero"
import { ABILITY_IMAGE_BASE } from "@/constants/hero"
import AbilityImage from "./AbilityImage"

type Props = {
    videoUrl: string
    validAbilities: string[]
    abilityDetails: Record<string, HeroAbility>
    selected: string
    onSelect: (name: string) => void
    videoRef: RefObject<HTMLVideoElement | null>
}

export default function AbilityPlayer({ videoUrl, validAbilities, abilityDetails, selected, onSelect, videoRef }: Props) {
    return (
        <div className="ability-player flex flex-col sm:w-[58%] sm:shrink-0 bg-dota-dark">
            <div className="ability-player__video relative w-full min-h-52 sm:flex-1 sm:min-h-0 bg-black">
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

            <div className="ability-player__thumbnails flex gap-1 p-2 bg-dota-dark flex-wrap">
                {validAbilities.map(name => {
                    const ab = abilityDetails[name]
                    const abImgUrl = ab?.img ? `${ABILITY_IMAGE_BASE}${ab.img}` : ''
                    return (
                        <button
                            key={name}
                            onClick={() => onSelect(name)}
                            className={`ability-player__thumb rounded overflow-hidden border-2 transition-colors ${selected === name ? 'border-dota-btn' : 'border-transparent hover:border-white/30'}`}
                        >
                            <AbilityImage src={abImgUrl} alt={ab?.dname ?? name} videoSrc="" />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
