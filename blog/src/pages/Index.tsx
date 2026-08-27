import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const Index: FC = () => {
  return (
    <Layout>
      <hgroup>
        <h1>horiy blog</h1>
        <p>Notes and writings by Kaito Horiuchi</p>
      </hgroup>
      <p>Posts will appear here.</p>
    </Layout>
  )
}
