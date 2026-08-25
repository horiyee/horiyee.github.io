import type { FC } from 'hono/jsx'
import { career, profile, site } from '../content/site'
import { Layout } from '../components/Layout'

export const Index: FC = () => {
  return (
    <Layout>
      <hgroup>
        <h1>{site.name.ja}</h1>
        <p>{site.name.en}</p>
      </hgroup>

      <section>
        <hgroup>
          <h2>Profile</h2>
          <p>自己紹介</p>
        </hgroup>

        <figure>
          <table>
            <tbody>
              <tr>
                <th scope="row">ハンドルネーム</th>
                <td>{profile.handle}</td>
              </tr>
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
      </section>

      <section>
        <hgroup>
          <h2>Career</h2>
          <p>経歴</p>
        </hgroup>

        <ul>
          {career.map((entry) => (
            <li>{entry}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
