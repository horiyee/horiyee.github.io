# client

Hono + Vite SSG application for the portfolio site.

Styled with [Pico CSS](https://picocss.com/) via CDN.

| Script | Description |
| --- | --- |
| `pnpm dev` | Local development via `@hono/vite-dev-server` |
| `pnpm build` | Generate static site into `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm typecheck` | TypeScript check (`tsc --noEmit`) |
| `pnpm check` | Biome check |
| `pnpm test` | Vitest |

```text
src/
  index.tsx       # Hono app / routes
  components/     # Shared layout
  pages/          # Page views
public/           # Static assets copied into dist
```
