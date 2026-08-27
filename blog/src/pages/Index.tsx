import type { FC } from 'hono/jsx'
import { site } from '../content/site'
import { Layout } from '../components/Layout'

export const Index: FC = () => {
  return (
    <Layout>
      <hgroup>
        <h1>{site.name}</h1>
        <p>{site.description}</p>
      </hgroup>
      <p>Posts will appear here.</p>
    </Layout>
  )
}
