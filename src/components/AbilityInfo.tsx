import { HeroAbility } from "@/types/hero"
import { ABILITY_IMAGE_BASE } from "@/constants/hero"
import Image from "next/image"

type Props = {
    ability: HeroAbility
    selected: string
}

function formatValues(val: string | number | (string | number)[] | undefined): string {
    if (val === undefined || val === null) return '—'
    return Array.isArray(val) ? val.join(' / ') : String(val)
}

export default function AbilityInfo({ ability, selected }: Props) {
    const imgUrl = ability.img ? `${ABILITY_IMAGE_BASE}${ability.img}` : null

    return (
        <div className="ability-info flex flex-col gap-4 p-6 bg-dota-card flex-1 min-w-0">

            <div className="ability-info__header flex gap-3 items-start">
                {imgUrl && (
                    <Image
                        src={imgUrl}
                        alt={ability.dname ?? selected}
                        width={64}
                        height={64}
                        className="ability-info__icon rounded shrink-0"
                        unoptimized
                    />
                )}
                <div className="ability-info__identity">
                    <h3 className="ability-info__name text-white font-bold text-xl uppercase tracking-wide leading-tight">
                        {ability.dname ?? selected}
                    </h3>
                    <span className="ability-info__name-en text-white/40 text-xs">
                        Em inglês: <span className="text-dota-btn">{ability.dname}</span>
                    </span>
                </div>
            </div>

            {ability.desc && (
                <p className="ability-info__desc text-white/70 text-sm leading-relaxed">
                    {ability.desc}
                </p>
            )}

            <div className="ability-info__divider border-t border-white/10" />

            <div className="ability-info__props grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {ability.behavior && (
                    <span className="ability-info__prop text-white/40 uppercase tracking-wider">
                        Habilidade: <span className="text-white font-medium">{formatValues(ability.behavior)}</span>
                    </span>
                )}
                {ability.bkbpierce && (
                    <span className="ability-info__prop text-white/40 uppercase tracking-wider">
                        Ignora imunidade a magias: <span className="text-white font-medium">{ability.bkbpierce}</span>
                    </span>
                )}
                {ability.affects && (
                    <span className="ability-info__prop text-white/40 uppercase tracking-wider">
                        Afeta: <span className="text-white font-medium">{ability.affects}</span>
                    </span>
                )}
                {ability.dmg_type && (
                    <span className="ability-info__prop text-white/40 uppercase tracking-wider">
                        Tipo de dano: <span className="text-dota-btn font-medium">{ability.dmg_type}</span>
                    </span>
                )}
            </div>

            <div className="ability-info__divider border-t border-white/10" />

            <div className="ability-info__footer flex gap-6 text-sm">
                <span className="ability-info__cooldown flex items-center gap-1.5 text-white/50">
                    <Image src="https://cdn.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png" alt="cooldown" width={16} height={16} unoptimized />
                    <span className="text-white">{formatValues(ability.cd)}</span>
                </span>
                <span className="ability-info__mana flex items-center gap-1.5 text-white/50">
                    <span className="w-3 h-3 rounded-sm bg-blue-400 inline-block shrink-0" />
                    <span className="text-white">{formatValues(ability.mc)}</span>
                </span>
            </div>

            {ability.lore && (
                <p className="ability-info__lore text-white/30 text-xs italic border-t border-white/10 pt-3 leading-relaxed">
                    {ability.lore}
                </p>
            )}
        </div>
    )
}
