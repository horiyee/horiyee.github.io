import type { FC } from 'hono/jsx'
import { career } from '../../content/site'

export const CareerSection: FC = () => {
  return (
    <section>
      <hgroup>
        <h2>Career</h2>
        <p>経歴</p>
      </hgroup>

      {career.map((entry) => (
        <article>
          <h3>{entry.period}</h3>

          {entry.title ? <h4>{entry.title}</h4> : null}

          {entry.org ? (
            <hgroup>
              <h4>{entry.org}</h4>
              {entry.team ? <h5>{entry.team}</h5> : null}
              {entry.role ? (
                entry.team ? <h6>{entry.role}</h6> : <h5>{entry.role}</h5>
              ) : null}
            </hgroup>
          ) : null}

          {entry.descriptions?.map((text) => (
            <p>{text}</p>
          ))}

          {entry.link ? (
            <p>
              詳しくは
              <a
                href={entry.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.link.label}
              </a>
              を参照。
            </p>
          ) : null}
        </article>
      ))}
    </section>
  )
}
