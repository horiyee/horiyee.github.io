import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <Layout>
      <h1>horiyee</h1>
      <p>Hono SSG portfolio.</p>
      <p>
        <a href="/about/">About</a>
      </p>
    </Layout>
  )
}
