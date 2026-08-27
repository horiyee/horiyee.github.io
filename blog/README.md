# blog

Hono + Vite SSG foundation for [blog.horiy.dev](https://blog.horiy.dev).

Part of the root pnpm workspace. From the repo root: `pnpm --filter blog <script>` or `pnpm dev:blog`.

Posts, content pipeline, and deploy come later.

| Script | Description |
| --- | --- |
| `pnpm dev` | Local development |
| `pnpm build` | Generate static site into `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm typecheck` | TypeScript check (`tsc --noEmit`) |
| `pnpm check` | Biome check |
| `pnpm test` | Vitest |

```text
src/
  index.tsx       # Hono app / routes
  components/     # Layout
  pages/          # Page views
```
