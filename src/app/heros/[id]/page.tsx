import { getHero, getAdjacentHeroes } from "@/services/hero.service"
import { PageProps } from "@/types/hero"
import HeroDetails from "@/components/HeroDetails"
import HeroSkillsDetails from "@/components/HeroSkillsDetails"
import HeroNav from "@/components/HeroNav"
import HeroSection from "@/components/HeroSection"

export default async function HeroPage({ params }: PageProps) {
    const { id } = await params
    const [hero, { prev, next }] = await Promise.all([
        getHero(id),
        getAdjacentHeroes(id),
    ])

    const heroSlug = hero.name.replace('npc_dota_hero_', '')

    return (
        <>
            <HeroSection slug={heroSlug} name={hero.localized_name} primaryAttr={hero.primary_attr} />
            <HeroDetails hero={hero} />
            <HeroSkillsDetails abilities={hero.abilities} abilityDetails={hero.abilityDetails} heroSlug={heroSlug} />
            <HeroNav prev={prev} next={next} />
        </>
    )
}
