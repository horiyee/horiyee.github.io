# blog

Hono + Vite SSG blog for [blog.horiy.dev](https://blog.horiy.dev).

Part of the root pnpm workspace. From the repo root: `pnpm --filter blog <script>` or `pnpm dev:blog`.

Markdown posts live under `posts/*.md`. Frontmatter needs `title` and `date`. Article bodies are maintained separately from this pipeline.

| Script | Description |
| --- | --- |
| `pnpm dev` | Local development |
| `pnpm build` | Generate static site into `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm typecheck` | TypeScript check (`tsc --noEmit`) |
| `pnpm check` | Biome check |
| `pnpm test` | Vitest |

```text
blog/
  posts/             # Markdown posts
  src/
    index.tsx        # Hono app / routes
    components/      # Layout
    pages/           # Index / Entry views
    lib/             # Markdown + content loader
```
