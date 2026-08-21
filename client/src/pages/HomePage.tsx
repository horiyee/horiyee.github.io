import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <Layout path="/">
      <section class="hero">
        <h1>horiyee</h1>
        <p>Hono SSG portfolio scaffold.</p>
      </section>
    </Layout>
  )
}
