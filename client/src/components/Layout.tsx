import type { Child, FC } from 'hono/jsx'

type LayoutProps = {
  title?: string
  description?: string
  children: Child
}

const siteName = 'horiyee'

export const Layout: FC<LayoutProps> = ({
  title,
  description = 'Portfolio of Kaito Horiuchi',
  children,
}) => {
  const pageTitle = title ? `${title} · ${siteName}` : `${siteName} — Portfolio`

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
                  <a href="/">{siteName}</a>
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about/">About</a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="container">{children}</main>
        <footer class="container"></footer>
      </body>
    </html>
  )
}
