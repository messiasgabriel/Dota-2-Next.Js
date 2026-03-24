import Image from "next/image"
import { HERO_VIDEO_BASE, ATTR_ICON, ATTR_LABEL } from "@/constants/hero"

type Props = {
    slug: string
    name: string
    primaryAttr: string
}

export default function HeroRender({ slug, name, primaryAttr }: Props) {
    const base = `${HERO_VIDEO_BASE}/${slug}`

    return (
        <section className="hero-render w-full flex flex-col items-center justify-between px-4 max-w-5xl">
            <div className="hero-render__info self-start flex flex-col gap-3">
                <div className="hero-render__attr flex items-center gap-2">
                    {ATTR_ICON[primaryAttr] && (
                        <Image src={ATTR_ICON[primaryAttr]} alt={primaryAttr} width={20} height={20} unoptimized />
                    )}
                    <span className="text-dota-btn text-sm uppercase tracking-widest font-semibold">
                        {ATTR_LABEL[primaryAttr] ?? primaryAttr}
                    </span>
                </div>

                <h1 className="hero-render__name text-white font-reaver text-5xl uppercase leading-none flex flex-col">
                    {name.split(' ').map((word, i) => (
                        <span key={i}>{word}</span>
                    ))}
                </h1>
            </div>

            <video
                className="hero-render__video w-80 sm:w-120 object-contain shrink-0"
                poster={`${base}.png`}
                autoPlay
                preload="auto"
                loop
                playsInline
                muted
            >
                <source type='video/mp4; codecs="hvc1"' src={`${base}.mov`} />
                <source type="video/webm" src={`${base}.webm`} />
            </video>
        </section>
    )
}
