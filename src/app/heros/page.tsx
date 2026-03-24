import { getHeroes } from "@/services/hero.service"
import HeroCard from "@/components/HeroCard"

export default async function HeroesPage() {
    const heroes = await getHeroes()

    return (
        <>
            <h1 className="font-reaver text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mt-15 mb-2.5 uppercase tracking-[3px] leading-[112%] px-4 sm:px-0">
                Escolha seu Herói
            </h1>
            <p className="w-full max-w-250 mx-auto text-[#ddd] text-base sm:text-lg lg:text-xl text-center mb-7.5 px-4 sm:px-0">
                De engenhosos magos a brutamontes destemidos, passando por rebeldes astutos, a gama de heróis do Dota 2 é enorme e incrivelmente diversa. Lance habilidades incríveis e Ultimates devastadoras no seu caminho para a vitória.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3 sm:gap-5 w-full max-w-300 pb-4 px-4 sm:px-0 *:relative">
                {heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero} />
                ))}
            </div>
        </>
    )
}
