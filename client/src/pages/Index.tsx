import type { FC } from 'hono/jsx'
import { career, profile, site, sns } from '../content/site'
import { Layout } from '../components/Layout'

export const Index: FC = () => {
  return (
    <Layout>
      <section>
        <hgroup>
          <h2>Profile</h2>
          <p>自己紹介</p>
        </hgroup>

        <article>
          <hgroup>
            <h3>
              {site.name.ja}（{site.name.en}）
            </h3>
            <p>{profile.handle}</p>
          </hgroup>

          <figure>
            <table>
              <tbody>
                <tr>
                  <th scope="row">出身地</th>
                  <td>{profile.hometown}</td>
                </tr>
                <tr>
                  <th scope="row">居住地</th>
                  <td>{profile.residence}</td>
                </tr>
              </tbody>
            </table>
          </figure>

          <nav aria-label="SNS">
            <ul>
              {sns.map((item) => (
                <li>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                  <span> — {item.id}</span>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </section>

      <section>
        <hgroup>
          <h2>Career</h2>
          <p>経歴</p>
        </hgroup>

        {career.map((entry) => (
          <article>
            <h3>{entry.period}</h3>

            {entry.headline ? <h4>{entry.headline}</h4> : null}

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
    </Layout>
  )
}
