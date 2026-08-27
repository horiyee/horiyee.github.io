import type { Child, FC } from 'hono/jsx'
import { site } from '../content/site'

type LayoutProps = {
  title?: string
  description?: string
  children: Child
}

export const Layout: FC<LayoutProps> = ({
  title,
  description = site.description,
  children,
}) => {
  const pageTitle = title ? `${title} · ${site.name}` : site.name

  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
      </head>
      <body>
        <header class="container">
          <nav>
            <ul>
              <li>
                <strong>
                  <a href="/">{site.brand}</a>
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Posts</a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="container">{children}</main>
        <footer class="container">
          <small>© {new Date().getFullYear()} Kaito Horiuchi</small>
        </footer>
      </body>
    </html>
  )
}
