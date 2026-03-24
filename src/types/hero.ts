export type HeroAbility = {
    dname?: string
    desc?: string
    img?: string
    cd?: string | number | (string | number)[]
    mc?: string | number | (string | number)[]
    dmg_type?: string
    affects?: string
    behavior?: string | string[]
    bkbpierce?: string
    lore?: string
    attrib?: { key: string; header: string; value: string | string[] }[]
}

export type Hero = {
    id: number
    name: string
    localized_name: string
    primary_attr: string
    attack_type: string
    roles: string[]
    legs: number
    // base stats
    base_str: number
    base_agi: number
    base_int: number
    str_gain: number
    agi_gain: number
    int_gain: number
    base_health: number
    base_mana: number
    base_health_regen: number
    base_mana_regen: number
    base_armor: number
    base_mr: number
    base_attack_min: number
    base_attack_max: number
    attack_range: number
    attack_rate: number
    move_speed: number
    day_vision: number
    night_vision: number
    // abilities
    abilities: string[]
    abilityDetails: Record<string, HeroAbility>
}

export type HeroCardProps = {
    hero: Hero
}

export type HeroDetailsProps = {
    hero: Hero
}

export type HeroSummary = {
    id: number
    name: string
    localized_name: string
    primary_attr: string
    attack_type: string
}

export type PageProps = { params: Promise<{ id: string }> }
