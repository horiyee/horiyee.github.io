import type { FC } from 'hono/jsx'
import { site, sns } from '../../content/site'

export const HeroSection: FC = () => {
  return (
    <header>
      <hgroup>
        <h1>{site.name.ja}</h1>
        <p>{site.name.en}</p>
      </hgroup>

      <p>{site.tagline}</p>

      <nav aria-label="SNS">
        <div role="group">
          {sns.map((item) => (
            <a
              href={item.url}
              role="button"
              class="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
