import type { FC } from 'hono/jsx'
import { site } from '../content/site'
import { Layout } from '../components/Layout'
import { ProfileSection } from '../components/about/ProfileSection'
import { CareerSection } from '../components/about/CareerSection'

export const AboutPage: FC = () => {
  return (
    <Layout title="About" description={`${site.name.en} のプロフィール。`}>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <a href="/">{site.brand}</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
        </ul>
      </nav>

      <h1>About Me</h1>

      <ProfileSection />
      <hr />
      <CareerSection />
    </Layout>
  )
}
