import type { FC } from 'hono/jsx'
import { siteLinks } from '../../content/site'

export const SiteLinksSection: FC = () => {
  return (
    <section id="sites">
      <h2>Sites</h2>

      <div class="grid">
        {siteLinks.map((link) => (
          <article>
            <header>
              <h3>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a href={link.href}>{link.name}</a>
                )}
              </h3>
            </header>
            <p>{link.description}</p>
            {link.external ? (
              <footer>
                <small>{link.href.replace(/^https:\/\//, '')}</small>
              </footer>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
