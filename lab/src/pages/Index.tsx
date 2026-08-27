import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const Index: FC = () => {
  return (
    <Layout>
      <hgroup>
        <h1>horiy lab</h1>
        <p>Experiments and labs by Kaito Horiuchi</p>
      </hgroup>
      <p>Labs will appear here.</p>
    </Layout>
  )
}
