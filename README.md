# Dota-2-Next.Js

**[Ver online →](https://dota-2-next-js.vercel.app/)**

Recriação fiel da página de heróis do [Dota 2](https://www.dota2.com/heroes), construída com Next.js 16 App Router. O projeto consome dados em tempo real da API pública do OpenDota e assets oficiais da Steam CDN para replicar a experiência visual do site original.

---

## Funcionalidades

- **Lista de heróis** com imagens e filtro alfabético
- **Página de detalhes** por herói com:
  - Render 3D animado (vídeo WebM/MOV)
  - Atributos base (FOR/AGI/INT) com ganho por nível
  - Barras de HP e Mana calculadas pelo nível 1
  - Funções/Roles com indicador visual de ativo/inativo
  - Estatísticas de combate com ícones oficiais (Ataque, Defesa, Mobilidade)
  - Habilidades com vídeo de demonstração e painel de detalhes
- **Navegação** entre heróis (anterior / próximo) com imagem animada no hover
- Interface totalmente em **PT-BR**
- Layout **responsivo** para mobile e desktop
- Fonte oficial **Reaver** do Dota 2

---

## Arquitetura

| Camada | Arquivo | Responsabilidade |
|---|---|---|
| Tipos | `src/types/hero.ts` | Tipagem centralizada dos dados da API |
| Constantes | `src/constants/hero.ts` | URLs de CDN, ícones, labels e roles |
| Tradução | `src/constants/translations.ts` | Mapa estático EN → PT-BR |
| Service | `src/services/hero.service.ts` | Fetch paralelo de heroes, abilities e hero_abilities |
| Pages | `src/app/heros/**/page.tsx` | Composição e Server Components |
| Components | `src/components/` | Renderização de UI |

### Componentes

| Componente | Responsabilidade |
|---|---|
| `HeroCard` | Card da listagem com imagem e hover |
| `HeroRender` | Render 3D animado + nome e atributo primário |
| `HeroStats` | Barra horizontal de stats (atributos, roles, combate) |
| `HeroAbilities` | Gerencia estado da habilidade selecionada |
| `AbilityPlayer` | Vídeo da habilidade + thumbnails de seleção |
| `AbilityInfo` | Painel de detalhes da habilidade (desc, props, CD, mana) |
| `AbilityImage` | Ícone de habilidade com fallback de erro e vídeo no hover |
| `HeroNav` | Navegação entre heróis com imagem animada |

---

## Fontes de dados

| Dado | Endpoint |
|---|---|
| Lista e stats dos heróis | `api.opendota.com/api/constants/heroes` |
| Nomes das habilidades por herói | `api.opendota.com/api/constants/hero_abilities` |
| Detalhes das habilidades | `api.opendota.com/api/constants/abilities` |
| Imagens e vídeos | Steam CDN (`cdn.steamstatic.com`, `cdn.akamai.steamstatic.com`, `cdn.cloudflare.steamstatic.com`) |

---

## Stack

- [Next.js 16](https://nextjs.org) — App Router + Turbopack
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [OpenDota Constants API](https://api.opendota.com/api/constants)

---

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:3000/heros`.
