'use client'

import Image from "next/image"
import { useRef, useState } from "react"

type Props = { src: string; alt: string; videoSrc: string }

export default function AbilityImage({ src, alt, videoSrc }: Props) {
    const [imgFailed, setImgFailed] = useState(false)
    const [hovered, setHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleMouseEnter = () => {
        setHovered(true)
        videoRef.current?.play().catch(() => {/* vídeo não disponível */})
    }

    const handleMouseLeave = () => {
        setHovered(false)
        const video = videoRef.current
        if (!video) return
        video.pause()
        video.currentTime = 0
    }

    return (
        <div
            className="ability-image relative w-12 h-12 rounded shrink-0 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {imgFailed ? (
                <div className="ability-image__placeholder w-full h-full bg-white/10 flex items-center justify-center text-white/30 text-xs">?</div>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="48px"
                    className="ability-image__img object-cover"
                    onError={() => setImgFailed(true)}
                />
            )}
            {videoSrc && (
                <video
                    ref={videoRef}
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    className={`ability-image__video absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                />
            )}
        </div>
    )
}
