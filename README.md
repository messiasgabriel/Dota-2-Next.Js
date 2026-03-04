# Next-Testes

Projeto de testes com Next.js 15 App Router, consumindo a [Fake Store API](https://fakestoreapi.com).

---

## Tópicos importantes

### 1. App Router
Roteamento baseado em arquivos dentro de `/app`. Cada `page.tsx` vira uma rota automaticamente.

```
/app/page.tsx               → /
/app/products/page.tsx      → /products
/app/products/[id]/page.tsx → /products/123
```

### 2. Server Components / Client Components

- **Server Component** (padrão): renderiza no servidor, sem JS enviado ao cliente. Ideal para fetch de dados e SEO.
- **Client Component** (`'use client'`): necessário para interatividade — `useState`, `onClick`, etc.

Neste projeto: as pages e componentes de exibição são Server Components. O `ProductCard` é Client Component por ter o botão de favoritar com estado.

### 3. Server Actions

Funções que rodam no servidor, chamadas diretamente de um `<form>`. Substituem API routes para mutations simples.

```ts
export async function addToCart(formData: FormData) {
  'use server'
  const id = formData.get('id')
  console.log('Adicionado:', id)
}
```

### 4. Layouts

Layouts são compartilhados automaticamente entre todas as rotas filhas.

```
app/layout.tsx            → aplicado em todas as páginas
app/products/layout.tsx   → aplicado só em /products/*
```

---

## Arquitetura

Separação de responsabilidades aplicada:

| Camada        | Arquivo                           | Responsabilidade |
|---            |---                                |---
| Tipos         | `src/types/product.ts`            | Tipagem centralizada |
| Service       | `src/services/product.service.ts` | Fetch de dados e Server Actions |
| Components    | `src/components/`                 | Renderização de UI |
| Pages         | `src/app/**/page.tsx`             | Composição |

---

## Stack

- [Next.js 15](https://nextjs.org) — App Router + Turbopack
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Fake Store API](https://fakestoreapi.com)
