import { getHero, getAdjacentHeroes } from "@/services/hero.service"
import { PageProps } from "@/types/hero"
import HeroRender from "@/components/HeroRender"
import HeroStats from "@/components/HeroStats"
import HeroAbilities from "@/components/HeroAbilities"
import HeroNav from "@/components/HeroNav"

export default async function HeroPage({ params }: PageProps) {
    const { id } = await params
    const [hero, { prev, next }] = await Promise.all([
        getHero(id),
        getAdjacentHeroes(id),
    ])

    const heroSlug = hero.name.replace('npc_dota_hero_', '')

    return (
        <>
            <HeroRender slug={heroSlug} name={hero.localized_name} primaryAttr={hero.primary_attr} />
            <HeroStats hero={hero} />
            <HeroAbilities abilities={hero.abilities} abilityDetails={hero.abilityDetails} heroSlug={heroSlug} />
            <HeroNav prev={prev} next={next} />
        </>
    )
}
