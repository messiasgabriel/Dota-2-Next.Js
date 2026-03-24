export const STAT_ICON_BASE = 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/stats'
export const ATTR_BASE = 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/icons'
export const IMAGE_BASE = 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes'
export const IMAGE_CROP_BASE = 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/crops'
export const CONSTANTS_BASE = 'https://api.opendota.com/api/constants'
export const ABILITY_IMAGE_BASE = 'https://cdn.cloudflare.steamstatic.com'
export const HERO_RENDER_BASE = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/renders'
export const ABILITY_VIDEO_BASE = 'https://cdn.steamstatic.com/apps/dota2/videos/dota_react/abilities'
export const HERO_VIDEO_BASE = 'https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders'

export const ATTR_ICON: Record<string, string> = {
    agi: `${ATTR_BASE}/hero_agility.png`,
    str: `${ATTR_BASE}/hero_strength.png`,
    int: `${ATTR_BASE}/hero_intelligence.png`,
    all: `${ATTR_BASE}/hero_universal.png`,
}
export const ATTR_LABEL: Record<string, string> = {
    str: 'Força',
    agi: 'Agilidade',
    int: 'Inteligência',
    all: 'Universal',
}
export const ROLE_LABELS: Record<string, string> = {
    'Carry': 'Carry',
    'Support': 'Suporte',
    'Nuker': 'Bombardeador',
    'Disabler': 'Desativador',
    'Durable': 'Resistente',
    'Escape': 'Escapista',
    'Pusher': 'Empurrador',
    'Initiator': 'Iniciador',
}

export const ALL_ROLES = ['Carry', 'Support', 'Nuker', 'Disabler', 'Durable', 'Escape', 'Pusher', 'Initiator']


export const STAT_ICONS = {
    damage:       `${STAT_ICON_BASE}/icon_damage.png`,
    attack_time:  `${STAT_ICON_BASE}/icon_attack_time.png`,
    attack_range: `${STAT_ICON_BASE}/icon_attack_range.png`,
    armor:        `${STAT_ICON_BASE}/icon_armor.png`,
    magic_resist: `${STAT_ICON_BASE}/icon_magic_resist.png`,
    move_speed:   `${STAT_ICON_BASE}/icon_movement_speed.png`,
    vision:       `${STAT_ICON_BASE}/icon_vision.png`,
}