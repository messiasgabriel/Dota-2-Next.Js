'use client'

import { useRef, useEffect, useState } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import HeroCard from "./HeroCard"
import { Hero } from "@/types/hero"

type Props = {
    heroes: Hero[]
}

function useColumns(containerRef: React.RefObject<HTMLDivElement | null>): number {
    const [columns, setColumns] = useState(2)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const observer = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width
            if (width >= 1100) setColumns(5)
            else if (width >= 880) setColumns(4)
            else if (width >= 640) setColumns(3)
            else setColumns(2)
        })

        observer.observe(el)
        return () => observer.disconnect()
    }, [containerRef])

    return columns
}

export default function HeroGrid({ heroes }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const columns = useColumns(containerRef)

    const rows = Math.ceil(heroes.length / columns)
    const ROW_HEIGHT = 110

    const virtualizer = useVirtualizer({
        count: rows,
        getScrollElement: () => document.documentElement,
        estimateSize: () => ROW_HEIGHT,
        overscan: 4,
    })

    return (
        <div
            ref={containerRef}
            className="w-full max-w-300 px-4 sm:px-0 pb-4"
        >
            <div
                style={{ height: virtualizer.getTotalSize(), position: 'relative' }}
            >
                {virtualizer.getVirtualItems().map(virtualRow => {
                    const startIndex = virtualRow.index * columns
                    const rowHeroes = heroes.slice(startIndex, startIndex + columns)

                    return (
                        <div
                            key={virtualRow.key}
                            data-index={virtualRow.index}
                            ref={virtualizer.measureElement}
                            style={{
                                position: 'absolute',
                                top: 0,
                                transform: `translateY(${virtualRow.start}px)`,
                                width: '100%',
                            }}
                        >
                            <div
                                className="grid gap-3 sm:gap-5 pb-3 sm:pb-5"
                                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                            >
                                {rowHeroes.map(hero => (
                                    <div key={hero.id} className="relative">
                                        <HeroCard hero={hero} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
