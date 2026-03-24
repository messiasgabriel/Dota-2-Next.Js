export const TRANSLATIONS: Record<string, string> = {
    // damage types
    'Magical': 'Mágico',
    'Physical': 'Físico',
    'Pure': 'Puro',
    'HP Removal': 'Remoção de HP',

    // behavior
    'Unit Target': 'Unidade-alvo',
    'Point Target': 'Ponto-alvo',
    'No Target': 'Sem alvo',
    'Passive': 'Passiva',
    'Toggle': 'Alternável',
    'Channeled': 'Canalizado',
    'Autocast': 'Uso automático',
    'AOE': 'AOE',
    'Aura': 'Aura',
    'Hidden': 'Oculta',
    'Not Learnable': 'Não aprendível',

    // bkbpierce
    'Yes': 'Sim',
    'No': 'Não',
    'Partially': 'Parcialmente',

    // affects
    'Heroes': 'Heróis',
    'Units': 'Unidades',
    'Buildings': 'Construções',
    'Creeps': 'Creeps',
    'All': 'Todos',
    'Enemies': 'Inimigos',
    'Allied Heroes': 'Heróis aliados',
    'Enemy Heroes': 'Heróis inimigos',
    'Allied Units': 'Unidades aliadas',
    'Enemy Units': 'Unidades inimigas',
    'Self': 'Si mesmo',
    'Trees': 'Árvores',

    // attack type
    'Melee': 'Corpo a Corpo',
    'Ranged': 'Longo Alcance',

    // primary attr
    'str': 'Força',
    'agi': 'Agilidade',
    'int': 'Inteligência',
    'all': 'Universal',

    // roles
    'Carry': 'Carry',
    'Support': 'Suporte',
    'Nuker': 'Bombardeador',
    'Disabler': 'Desativador',
    'Jungler': 'Jungler',
    'Durable': 'Resistente',
    'Escape': 'Escapista',
    'Pusher': 'Empurrador',
    'Initiator': 'Iniciador',
}

export function t(value: string | undefined): string {
    if (!value) return ''
    // tenta traduzir termo a termo (ex: "AOE / Point Target")
    return value
        .split('/')
        .map(part => TRANSLATIONS[part.trim()] ?? part.trim())
        .join(' / ')
}
