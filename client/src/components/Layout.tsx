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
        <link rel="stylesheet" href="/assets/global.css" />
      </head>
      <body>
        <div class="site-shell">
          <header class="site-header">
            <a class="brand" href="/">
              {siteName}
            </a>
          </header>
          <main class="site-main">{children}</main>
          <footer class="site-footer">
            <span>© {new Date().getFullYear()} Kaito Horiuchi</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
