import { raw } from 'hono/html'
import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'
import type { Entry } from '../lib/content'

type EntryPageProps = {
  entry: Entry
}

export const EntryPage: FC<EntryPageProps> = ({ entry }) => {
  return (
    <Layout title={entry.title}>
      <article>
        <header>
          <p>
            <a href="/">← Posts</a>
          </p>
          <hgroup>
            <h1>{entry.title}</h1>
            <p>
              <time datetime={entry.date}>{entry.displayDate}</time>
            </p>
          </hgroup>
        </header>
        <div>{raw(entry.html)}</div>
      </article>
    </Layout>
  )
}
