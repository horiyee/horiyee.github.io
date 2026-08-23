import type { FC } from 'hono/jsx'
import { site } from '../content/site'
import { Layout } from '../components/Layout'
import { HeroSection } from '../components/sections/HeroSection'
import { ProfileSection } from '../components/sections/ProfileSection'
import { CareerSection } from '../components/sections/CareerSection'

export const Index: FC = () => {
  return (
    <Layout description={`${site.name.en} — ${site.description}`}>
      <HeroSection />
      <ProfileSection />
      <CareerSection />
    </Layout>
  )
}
