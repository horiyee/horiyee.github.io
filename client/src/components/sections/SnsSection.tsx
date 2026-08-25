import type { FC } from 'hono/jsx'
import { sns } from '../../content/site'

export const SnsSection: FC = () => {
  return (
    <section id="links">
      <h2>Links</h2>

      <nav aria-label="SNS">
        <div role="group">
          {sns.map((item) => (
            <a
              href={item.url}
              role="button"
              class="outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.name} (${item.id})`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </section>
  )
}
