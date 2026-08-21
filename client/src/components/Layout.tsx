import type { Child, FC } from 'hono/jsx'
import { navLinks, site } from '../content/site'

type LayoutProps = {
  title?: string
  description?: string
  path: string
  children: Child
}

export const Layout: FC<LayoutProps> = ({
  title,
  description = site.description,
  path,
  children,
}) => {
  const pageTitle = title ? `${title} · ${site.brand}` : site.title
  const canonical = new URL(path, site.url).toString()

  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="author" content={site.name.en} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={site.locale} />
        <meta property="og:site_name" content={site.brand} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@400;500;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/global.css" />
        <script type="module" src="/assets/client.js" />
      </head>
      <body>
        <div class="site-shell">
          <header class="site-header" id="site-header">
            <div class="site-header__inner">
              <a class="brand" href="/">
                <span class="brand__mark" aria-hidden="true" />
                {site.brand}
              </a>
              <nav class="nav" aria-label="Primary">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    aria-current={path === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
          <main class="site-main">{children}</main>
          <footer class="site-footer">
            <div class="site-footer__inner">
              <span>
                © {new Date().getFullYear()} {site.name.en}
              </span>
              <span>Built with Hono SSG · Hosted on GitHub Pages</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
