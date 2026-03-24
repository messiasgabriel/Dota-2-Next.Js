import { HeroDetailsProps } from "@/types/hero"
import { IMAGE_BASE, ATTR_ICON, ALL_ROLES, ROLE_LABELS, STAT_ICONS } from "@/constants/hero"
import Image from "next/image"

export default function HeroDetails({ hero }: HeroDetailsProps) {
    const slug = hero.name.replace('npc_dota_hero_', '')
    const imgUrl = `${IMAGE_BASE}/${slug}.png`
    const totalHp = hero.base_health + hero.base_str * 20
    const totalMana = hero.base_mana + hero.base_int * 12

    return (
        <section className="hero-details w-full max-w-5xl flex flex-col gap-4 px-4">
            <h2 className="hero-skills__title text-white/60 text-sm uppercase tracking-widest text-center">
                Detalhes do Herói:
            </h2>
            <div className="hero-details__card flex flex-col sm:flex-row border border-white/10 rounded-lg overflow-hidden bg-dota-card text-white">

                {/* LEFT — ATRIBUTOS */}
                <div className="hero-details__attributes flex flex-col justify-between gap-3 p-4 sm:w-56 sm:shrink-0">

                    <div className="hero-details__attributes-top flex flex-row gap-3">
                        <div className="hero-details__portrait relative w-16 h-16 rounded overflow-hidden shrink-0">
                            <Image src={imgUrl} alt={hero.localized_name} fill className="object-cover object-top" unoptimized />
                        </div>

                        <div className="hero-details__attr-list flex flex-col justify-center gap-1.5">
                            <div className={`hero-details__attr flex items-center gap-1.5 text-xs ${hero.primary_attr === 'str' ? 'text-orange-400' : 'text-white/60'}`}>
                                <Image src={ATTR_ICON.str} alt="str" width={13} height={13} unoptimized />
                                <span className="font-bold">{hero.base_str}</span>
                                <span className="text-white/30">+{hero.str_gain}</span>
                            </div>
                            <div className={`hero-details__attr flex items-center gap-1.5 text-xs ${hero.primary_attr === 'agi' ? 'text-green-400' : 'text-white/60'}`}>
                                <Image src={ATTR_ICON.agi} alt="agi" width={13} height={13} unoptimized />
                                <span className="font-bold">{hero.base_agi}</span>
                                <span className="text-white/30">+{hero.agi_gain}</span>
                            </div>
                            <div className={`hero-details__attr flex items-center gap-1.5 text-xs ${hero.primary_attr === 'int' ? 'text-blue-400' : 'text-white/60'}`}>
                                <Image src={ATTR_ICON.int} alt="int" width={13} height={13} unoptimized />
                                <span className="font-bold">{hero.base_int}</span>
                                <span className="text-white/30">+{hero.int_gain}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-details__bars flex flex-col gap-1.5">
                        <div className="hero-details__hp relative h-5 w-full rounded overflow-hidden bg-green-900/60">
                            <div className="absolute inset-0 bg-green-600" style={{ width: '100%' }} />
                            <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-bold">
                                <span>{totalHp}</span>
                                <span className="text-white/70">+{hero.base_health_regen}</span>
                            </div>
                        </div>
                        <div className="hero-details__mana relative h-5 w-full rounded overflow-hidden bg-blue-900/60">
                            <div className="absolute inset-0 bg-blue-600" style={{ width: '100%' }} />
                            <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-bold">
                                <span>{totalMana}</span>
                                <span className="text-white/70">+{hero.base_mana_regen}</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="hero-details__section-title text-white/30 text-[10px] uppercase tracking-widest text-center">
                        Atributos
                    </h3>
                </div>

                <div className="hero-details__divider h-px sm:h-auto sm:w-px bg-white/10 sm:my-3 mx-3 sm:mx-0" />

                {/* MIDDLE — FUNÇÕES */}
                <div className="hero-details__roles flex flex-col justify-between gap-3 p-4 flex-1">

                    <ul className="hero-details__roles-list grid grid-cols-3 gap-x-4 gap-y-3 mt-1">
                        {ALL_ROLES.map(role => {
                            const hasRole = hero.roles.includes(role)
                            return (
                                <li key={role} className="hero-details__role flex flex-col gap-1">
                                    <span className={`text-xs font-medium uppercase tracking-wide ${hasRole ? 'text-white' : 'text-white/20'}`}>
                                        {ROLE_LABELS[role] ?? role}
                                    </span>
                                    <div className="hero-details__role-bar h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all ${hasRole ? 'bg-dota-btn w-full' : 'w-0'}`} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <h3 className="hero-details__section-title text-white/30 text-[10px] uppercase tracking-widest text-center">
                        Funções
                    </h3>
                </div>

                <div className="hero-details__divider h-px sm:h-auto sm:w-px bg-white/10 sm:my-3 mx-3 sm:mx-0" />

                {/* RIGHT — ATAQUE / DEFESA / MOBILIDADE */}
                <div className="hero-details__combat flex flex-col justify-between gap-3 p-4 sm:w-72 sm:shrink-0">

                    <div className="hero-details__combat-grid flex gap-2">

                        <div className="hero-details__attack flex flex-col gap-2 flex-1">
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Ataque</span>
                            <div className="flex flex-col gap-1.5 text-xs">
                                <div className="flex items-center gap-1.5" title="Dano">
                                    <Image src={STAT_ICONS.damage} alt="Dano" width={14} height={14} unoptimized />
                                    <span>{hero.base_attack_min}–{hero.base_attack_max}</span>
                                </div>
                                <div className="flex items-center gap-1.5" title="Velocidade de Ataque">
                                    <Image src={STAT_ICONS.attack_time} alt="Vel. Ataque" width={14} height={14} unoptimized />
                                    <span>{hero.attack_rate}</span>
                                </div>
                                <div className="flex items-center gap-1.5" title="Alcance de Ataque">
                                    <Image src={STAT_ICONS.attack_range} alt="Alcance" width={14} height={14} unoptimized />
                                    <span>{hero.attack_range}</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-details__defense flex flex-col gap-2 flex-1">
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Defesa</span>
                            <div className="flex flex-col gap-1.5 text-xs">
                                <div className="flex items-center gap-1.5" title="Armadura">
                                    <Image src={STAT_ICONS.armor} alt="Armadura" width={14} height={14} unoptimized />
                                    <span>{hero.base_armor}</span>
                                </div>
                                <div className="flex items-center gap-1.5" title="Resistência Mágica">
                                    <Image src={STAT_ICONS.magic_resist} alt="Res. Mágica" width={14} height={14} unoptimized />
                                    <span>{hero.base_mr}%</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-details__mobility flex flex-col gap-2 flex-1">
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Mobilidade</span>
                            <div className="flex flex-col gap-1.5 text-xs">
                                <div className="flex items-center gap-1.5" title="Velocidade de Movimento">
                                    <Image src={STAT_ICONS.move_speed} alt="Velocidade" width={14} height={14} unoptimized />
                                    <span>{hero.move_speed}</span>
                                </div>
                                <div className="flex items-center gap-1.5" title="Velocidade de Ataque base">
                                    <Image src={STAT_ICONS.attack_time} alt="Vel. base" width={14} height={14} unoptimized />
                                    <span>{hero.attack_rate}</span>
                                </div>
                                <div className="flex items-center gap-1.5" title="Visão Diurna / Noturna">
                                    <Image src={STAT_ICONS.vision} alt="Visão" width={14} height={14} unoptimized />
                                    <span>{hero.day_vision} / {hero.night_vision}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h3 className="hero-details__section-title text-white/30 text-[10px] uppercase tracking-widest text-center">
                        Estatísticas
                    </h3>
                </div>

            </div>
        </section>
    )
}
