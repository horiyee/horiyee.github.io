import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'
import { listEntries } from '../lib/content'

export const Index: FC = () => {
  const entries = listEntries()

  return (
    <Layout>
      <hgroup>
        <h1>horiy blog</h1>
        <p>Notes and writings by Kaito Horiuchi</p>
      </hgroup>
      {entries.length === 0 ? (
        <p>Posts will appear here.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li>
              <time datetime={entry.date}>{entry.displayDate}</time>
              {' — '}
              <a href={entry.href}>{entry.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}
