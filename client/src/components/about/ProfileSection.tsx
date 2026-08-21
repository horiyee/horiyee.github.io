import type { FC } from 'hono/jsx'
import { profile, site, sns } from '../../content/site'

export const ProfileSection: FC = () => {
  const iconLinks = sns.filter(
    (item): item is typeof item & { icon: string } => Boolean(item.icon),
  )
  const textLinks = sns.filter((item) => !item.icon)

  return (
    <section>
      <hgroup>
        <h2>Profile</h2>
        <p>自己紹介</p>
      </hgroup>

      <article>
        <div class="grid">
          <div>
            <hgroup>
              <h3>
                {site.name.ja}（{site.name.en}）
              </h3>
              <p>{profile.handle}</p>
            </hgroup>

            <p>
              {profile.hometown}出身 · {profile.residence}在住
            </p>

            <nav aria-label="SNS">
              <ul>
                {iconLinks.map((item) => (
                  <li>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} (${item.id})`}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {textLinks.length > 0 ? (
              <ul>
                {textLinks.map((item) => (
                  <li>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                    <span> — {item.id}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <p>🐹</p>
          </div>

          <img
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            width={profile.avatar.width}
            height={profile.avatar.height}
          />
        </div>
      </article>
    </section>
  )
}
