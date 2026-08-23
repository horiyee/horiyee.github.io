import type { FC } from 'hono/jsx'
import { site } from '../content/site'
import { Layout } from '../components/Layout'
import { HeroSection } from '../components/sections/HeroSection'
import { SiteLinksSection } from '../components/sections/SiteLinksSection'
import { SnsSection } from '../components/sections/SnsSection'

export const Index: FC = () => {
  return (
    <Layout description={`${site.name.en} — ${site.description}`}>
      <HeroSection />
      <SiteLinksSection />
      <SnsSection />
    </Layout>
  )
}
