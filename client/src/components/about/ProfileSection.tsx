import type { FC } from 'hono/jsx'
import { profile } from '../../content/site'

export const ProfileSection: FC = () => {
  return (
    <section id="profile">
      <h2>Profile</h2>

      <article>
        <div class="grid">
          <div>
            <p>{profile.handle}</p>

            <dl>
              <dt>出身</dt>
              <dd>{profile.hometown}</dd>
              <dt>在住</dt>
              <dd>{profile.residence}</dd>
            </dl>
          </div>

          <figure>
            <img src={profile.avatar.src} alt={profile.avatar.alt} />
          </figure>
        </div>
      </article>
    </section>
  )
}
