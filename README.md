# horiyee.github.io

pnpm workspace for horiyee sites.

| Package | Role |
| --- | --- |
| `client/` | Portfolio site (GitHub Pages) |
| `blog/` | Blog foundation for `blog.horiy.dev` |

## Scripts

From the repo root:

| Script | Description |
| --- | --- |
| `pnpm dev:client` | Dev server for portfolio |
| `pnpm dev:blog` | Dev server for blog |
| `pnpm typecheck` | Typecheck all packages |
| `pnpm check` | Biome check all packages |
| `pnpm test` | Test all packages |
| `pnpm build` | Build all packages |
| `pnpm build:client` | Build portfolio only |
| `pnpm build:blog` | Build blog only |

Or target one package with `pnpm --filter client <script>`.

CI runs typecheck / check / test / build for each package on push and pull requests.
On `main`, the same `client` build artifact is deployed to GitHub Pages.
