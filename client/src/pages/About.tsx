import type { FC } from 'hono/jsx'
import { profile, site, sns } from '../content/site'
import { Layout } from '../components/Layout'

export const About: FC = () => {
  return (
    <Layout title="About" description={`${site.name.en} のプロフィール。`}>
      <h1>About</h1>
      <p>Coming soon.</p>

      <section>
        <h2>Profile</h2>
        <figure>
          <table>
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>
                  {site.name.ja} / {site.name.en}
                </td>
              </tr>
              <tr>
                <th scope="row">Handle</th>
                <td>{profile.handle}</td>
              </tr>
              <tr>
                <th scope="row">Hometown</th>
                <td>{profile.hometown}</td>
              </tr>
              <tr>
                <th scope="row">Based in</th>
                <td>{profile.residence}</td>
              </tr>
            </tbody>
          </table>
        </figure>
      </section>

      <section>
        <h2>Links</h2>
        <ul>
          {sns.map((item) => (
            <li>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
              <span> — {item.id}</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
