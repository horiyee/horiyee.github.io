import type { FC } from 'hono/jsx'
import { profile, site } from '../content/site'
import { Layout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <Layout>
      <hgroup>
        <h1>{site.name.ja}</h1>
        <p>{site.name.en}</p>
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
    </Layout>
  )
}
