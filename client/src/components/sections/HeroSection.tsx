import type { FC } from 'hono/jsx'
import { site } from '../../content/site'

export const HeroSection: FC = () => {
  return (
    <header>
      <hgroup>
        <h1>{site.name.ja}</h1>
        <p>{site.name.en}</p>
      </hgroup>
      <p>{site.tagline}</p>
    </header>
  )
}
