# Perfil do projeto

Site público do Festival Costume Gourmet. Produção: https://costumegourmet.minerbz.com.br
Repositório GitHub: `gustavocoutiinho/fgcsite`

> **Antes de mexer, ler `~/.claude/estaleiro/portais-miner.md`**: as regras de casa que valem para todo portal Miner (deploy, PII, dado aditivo, auth, cache, iframe). O que está neste arquivo é o específico deste projeto.

**Não confundir:** este é o site público. O **portal de gestão** do festival é outro projeto, outro repositório (`~/opc/festival-costume-gourmet`) e outro domínio (`festival.minerbz.com.br`), com o `index.html` gigante e os dados de cronograma no Supabase. Mudança pedida para "o festival" pode ser em qualquer um dos dois: confirmar qual antes de editar.

## Stack
- Linguagem e versão: TypeScript + React 18
- Framework principal: Vite, com React Router, Tailwind CSS, Framer Motion e anime.js
- Gerenciador de pacotes: npm
- Hospedagem: Vercel, SPA com rewrite de tudo para `/index.html`

## Comandos
- Instalar dependências: `npm install`
- Rodar em desenvolvimento: `npm run dev`
- Testes: não existe suíte
- Lint / formatador: `npm run lint` (oxlint)
- Typecheck ou build: `npm run build` (roda `tsc -b` e depois `vite build`)

## Testes
- Framework: nenhum
- Onde ficam: não se aplica
- Convenção de nome de arquivo: se um dia entrar suíte, Vitest é o padrão da casa

## Convenções
- Código em `src/`, assets públicos em `public/`
- Tailwind com a configuração de `tailwind.config.js`. Preferir as classes utilitárias ao CSS solto
- Componentes em PascalCase
- `dist/` é gerado pelo build, não é fonte
- Branch principal: `main`

## Zona proibida
Nada aqui é alterado sem autorização explícita do Gustavo na conversa:

- **Deploy de produção** só com autorização a cada deploy.
- Editar `dist/` à mão. É saída de build.
- Trocar a identidade visual do Festival por conta própria. O site segue a marca do FCG, que tem manual próprio.
- **Apagar ou sobrescrever conteúdo existente.** Toda edição é aditiva, sem remover bloco publicado sem avisar.
- Confundir este repositório com o portal de gestão do festival.

## Rigor
- Nível: completo
- O que sempre rodar antes de dizer que terminou:
  1. `npm run build` (o `tsc -b` é o typecheck e falha em erro de tipo)
  2. `npm run lint`
  3. Abrir com `npm run dev` e conferir a mudança na tela, inclusive no mobile
- Antes de editar: `git fetch origin` e conferir que a `main` local está igual à `origin/main`. Já aconteceu de estar dois commits atrás da produção.
