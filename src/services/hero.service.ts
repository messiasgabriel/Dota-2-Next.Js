import { cache } from "react"
import { CONSTANTS_BASE } from "@/constants/hero"
import { Hero, HeroAbility, HeroSummary } from "@/types/hero"
import { notFound } from "next/navigation"

const CACHE_OPTIONS = { next: { revalidate: 86400 } }

const fetchHeroes = cache(() =>
    fetch(`${CONSTANTS_BASE}/heroes`, CACHE_OPTIONS).then(r => r.json())
)
const fetchHeroAbilities = cache(() =>
    fetch(`${CONSTANTS_BASE}/hero_abilities`, CACHE_OPTIONS).then(r => r.json())
)
const fetchAbilities = cache(() =>
    fetch(`${CONSTANTS_BASE}/abilities`, CACHE_OPTIONS).then(r => r.json())
)

export async function getHeroes(): Promise<Hero[]> {
    const data: Record<string, Hero> = await fetchHeroes()
    return Object.values(data).sort((a, b) => a.localized_name.localeCompare(b.localized_name))
}

export async function getHero(id: string): Promise<Hero> {
    const [heroesData, heroAbilitiesData, abilitiesData] = await Promise.all([
        fetchHeroes(),
        fetchHeroAbilities(),
        fetchAbilities(),
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
    const data: Record<string, HeroSummary> = await fetchHeroes()

    const heroes = Object.values(data).sort((a, b) => a.id - b.id)
    const index = heroes.findIndex(h => h.id === Number(id))

    if (index === -1) return { prev: null, next: null }

    return {
        prev: index > 0 ? heroes[index - 1] : null,
        next: index < heroes.length - 1 ? heroes[index + 1] : null,
    }
}
