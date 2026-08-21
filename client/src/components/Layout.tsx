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
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/assets/pico.min.css" />
        <link rel="stylesheet" href="/assets/global.css" />
      </head>
      <body>
        <header class="container">
          <nav>
            <ul>
              <li>
                <strong>
                  <a href="/" class="brand">
                    {siteName}
                  </a>
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Home</a>
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
