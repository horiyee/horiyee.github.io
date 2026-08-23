import type { FC } from 'hono/jsx'
import { site } from '../content/site'
import { Layout } from '../components/Layout'
import { ProfileSection } from '../components/about/ProfileSection'
import { CareerSection } from '../components/about/CareerSection'

export const AboutPage: FC = () => {
  return (
    <Layout title="About" description={`${site.name.en} のプロフィールと経歴。`}>
      <header>
        <hgroup>
          <h1>About</h1>
          <p>Profile &amp; career</p>
        </hgroup>
      </header>

      <ProfileSection />
      <CareerSection />
    </Layout>
  )
}
