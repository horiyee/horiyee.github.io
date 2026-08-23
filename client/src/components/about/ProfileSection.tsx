import type { FC } from 'hono/jsx'
import { profile, site, sns } from '../../content/site'

export const ProfileSection: FC = () => {
  return (
    <section id="profile">
      <h2>Profile</h2>

      <article>
        <div class="grid">
          <div>
            <header>
              <hgroup>
                <h3>{site.name.ja}</h3>
                <p>{site.name.en}</p>
              </hgroup>
            </header>

            <p>{profile.handle}</p>

            <dl>
              <dt>出身</dt>
              <dd>{profile.hometown}</dd>
              <dt>在住</dt>
              <dd>{profile.residence}</dd>
            </dl>

            <footer>
              <nav aria-label="SNS">
                <div role="group">
                  {sns.map((item) => (
                    <a
                      href={item.url}
                      role="button"
                      class="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </footer>
          </div>

          <figure>
            <img src={profile.avatar.src} alt={profile.avatar.alt} />
          </figure>
        </div>
      </article>
    </section>
  )
}
