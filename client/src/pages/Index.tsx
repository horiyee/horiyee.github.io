import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'
import { site } from '../content/site'

export const Index: FC = () => {
  return (
    <Layout>
      <hgroup>
        <h1>{site.name.ja}</h1>
        <p>{site.name.en}</p>
      </hgroup>
      <p>
        <a href="/about/">About</a>
      </p>
    </Layout>
  )
}
