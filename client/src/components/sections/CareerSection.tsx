import type { FC } from 'hono/jsx'
import { career } from '../../content/site'

export const CareerSection: FC = () => {
  return (
    <section id="career">
      <h2>Career</h2>

      {career.map((entry) => (
        <article>
          <header>
            <p>
              <small>{entry.period}</small>
            </p>
            {entry.headline ? (
              <h3>{entry.headline}</h3>
            ) : (
              <hgroup>
                <h3>{entry.org}</h3>
                {entry.team ? <p>{entry.team}</p> : null}
              </hgroup>
            )}
          </header>

          {entry.role ? <p>{entry.role}</p> : null}

          {entry.descriptions?.map((text) => (
            <p>{text}</p>
          ))}

          {entry.link ? (
            <footer>
              <a
                href={entry.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.link.label}
              </a>
            </footer>
          ) : null}
        </article>
      ))}
    </section>
  )
}
