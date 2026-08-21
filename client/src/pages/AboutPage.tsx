import type { FC } from 'hono/jsx'
import {
  career,
  history,
  profile,
  site,
  sns,
  technologies,
} from '../content/site'
import { Layout } from '../components/Layout'

export const AboutPage: FC = () => {
  return (
    <Layout
      path="/about/"
      title="About"
      description={`${site.name.en} のプロフィール、経歴、来歴。`}
    >
      <header class="page-hero">
        <p class="section__eyebrow">About</p>
        <h1>{site.name.ja}</h1>
        <p>{profile.summary}</p>
      </header>

      <section class="section" aria-labelledby="profile-heading">
        <div class="section__heading">
          <p class="section__eyebrow">Profile</p>
          <h2 id="profile-heading">プロフィール</h2>
        </div>
        <dl class="profile-grid">
          <div class="profile-item">
            <dt>Name</dt>
            <dd>
              {site.name.ja} / {site.name.en}
            </dd>
          </div>
          <div class="profile-item">
            <dt>Handle</dt>
            <dd>{profile.handle}</dd>
          </div>
          <div class="profile-item">
            <dt>Hometown</dt>
            <dd>{profile.hometown}</dd>
          </div>
          <div class="profile-item">
            <dt>Based in</dt>
            <dd>{profile.residence}</dd>
          </div>
        </dl>
      </section>

      <section class="section" aria-labelledby="sns-heading">
        <div class="section__heading">
          <p class="section__eyebrow">Links</p>
          <h2 id="sns-heading">SNS</h2>
        </div>
        <div class="sns-list">
          {sns.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.name}
              <span aria-hidden="true"> · </span>
              {item.id}
            </a>
          ))}
        </div>
      </section>

      <section class="section" aria-labelledby="career-heading">
        <div class="section__heading">
          <p class="section__eyebrow">Career</p>
          <h2 id="career-heading">経歴</h2>
          <p class="section__lede">
            インターンを中心に、Web・FA・機械学習まで横断してきたタイムラインです。
          </p>
        </div>
        <ol class="timeline">
          {career.map((item) => (
            <li class="timeline__item">
              <p class="timeline__period">{item.period}</p>
              <h3 class="timeline__org">{item.organization}</h3>
              {item.role ? <p class="timeline__role">{item.role}</p> : null}
              {item.description ? (
                <p class="timeline__desc">{item.description}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section class="section" aria-labelledby="history-heading">
        <div class="section__heading">
          <p class="section__eyebrow">History</p>
          <h2 id="history-heading">来歴</h2>
        </div>
        <ol class="timeline">
          {history.map((item) => (
            <li class="timeline__item">
              <p class="timeline__period">{item.period}</p>
              <p class="timeline__desc">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section class="section" aria-labelledby="tech-heading">
        <div class="section__heading">
          <p class="section__eyebrow">Stack</p>
          <h2 id="tech-heading">Technologies</h2>
        </div>
        <p class="section__lede" style="margin-bottom: 1rem">
          Experienced
        </p>
        <div class="tech-cloud">
          {technologies.experienced.map((tech) => (
            <span>{tech}</span>
          ))}
        </div>
        <p class="section__lede" style="margin: 1.5rem 0 1rem">
          Interested
        </p>
        <div class="tech-cloud">
          {technologies.interested.map((tech) => (
            <span>{tech}</span>
          ))}
        </div>
      </section>
    </Layout>
  )
}
