import { CONSTANTS_BASE } from "@/constants/hero"
import { Hero, HeroAbility, HeroSummary } from "@/types/hero"
import { notFound } from "next/navigation"

export async function getHeroes(): Promise<Hero[]> {
    const res = await fetch(`${CONSTANTS_BASE}/heroes`)
    const data: Record<string, Hero> = await res.json()
    return Object.values(data).sort((a, b) => a.localized_name.localeCompare(b.localized_name))
}

export async function getHero(id: string): Promise<Hero> {
    const [heroesData, heroAbilitiesData, abilitiesData] = await Promise.all([
        fetch(`${CONSTANTS_BASE}/heroes`).then(r => r.json()),
        fetch(`${CONSTANTS_BASE}/hero_abilities`).then(r => r.json()),
        fetch(`${CONSTANTS_BASE}/abilities`).then(r => r.json()),
    ])

    const hero: Hero = Object.values(heroesData).find((h: unknown) => (h as Hero).id === Number(id)) as Hero
    if (!hero) notFound()

    const abilityNames: string[] = heroAbilitiesData[hero.name]?.abilities ?? []
    const abilityDetails: Record<string, HeroAbility> = {}
    for (const name of abilityNames) {
        if (abilitiesData[name]) {
            abilityDetails[name] = abilitiesData[name]
        }
    }

    return { ...hero, abilities: abilityNames, abilityDetails }
}

export async function getAdjacentHeroes(id: string): Promise<{ prev: HeroSummary | null; next: HeroSummary | null }> {
    const res = await fetch(`${CONSTANTS_BASE}/heroes`)
    const data: Record<string, HeroSummary> = await res.json()

    const heroes = Object.values(data).sort((a, b) => a.id - b.id)
    const index = heroes.findIndex(h => h.id === Number(id))

    if (index === -1) return { prev: null, next: null }

    return {
        prev: index > 0 ? heroes[index - 1] : null,
        next: index < heroes.length - 1 ? heroes[index + 1] : null,
    }
}
